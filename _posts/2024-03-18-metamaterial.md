---
layout: post
title: MetaMaterial for 1550nm Circular Dicroism 
subtitle: with the Adjoint Method
gh-repo: daattali/beautiful-jekyll
tags: [photonics]
comments: true
---

## Before excute the code,,

~~~
import matplotlib.pylab as plt
import numpy as np
import tidy3d as td
import tidy3d.web as web
from tidy3d.plugins.dispersion import FastDispersionFitter, AdvancedFastFitterParam
~~~

Define the Parameter for modulating the metamaterial you want.
~~~
lda0 = 15.5
freq0 = td.C_0/lda0
ldas = np.linspace(14, 17, 200)
freqs = td.C_0/ldas
fwidth = 0.5 * (np.max(freqs) - np.min(freqs))
refreq=td.C_0/14.75
a = 13
h = 2.52 
t = 1.15 
A = 2.43
B = 2.14
alpha = 20 * np.pi / 180
~~~



1. Dispersive Material Fitting

For making the metamaterial, First, we must find the proper material for making Circular Discroism Material(Chirality).

For constructing the substrate,
[PMMA nk data](https://refractiveindex.info/?shelf=organic&book=poly%28methyl_methacrylate%29&page=Tsuda-LD)

MicroChem PMMA resist with a molecular weight of 950,000; Baked at 100 °C for 10 min on a hot plate; Lorentz-Drude model parameters provided in Table 1 of manuscript.
A hot plate pmma, it modulates the refractive index around the air.

For constructing the resonators,
[Silicon nk data](https://refractiveindex.info/?shelf=main&book=Si&page=Shkondin)


{: .box-note}
Approximately, It happens some error because Imaginary part of refractive index is 0.

For continuous frequency domain, we should fit the dispersive material.


~~~
fname1 = "misc/si_nk_data.csv"

fitter = FastDispersionFitter.from_file(fname1, skiprows=1, delimiter=",")
advanced_param = AdvancedFastFitterParam(weights=(1,1))
fitter = fitter.copy(update={"wvl_range":(9,18)})
si_medium, rms_error = fitter.fit(max_num_poles=1, tolerance_rms=2e-2)
fitter.plot(si_medium)
plt.show()

fname2 = "misc/pmma_nk_data.csv"

fitter = FastDispersionFitter.from_file(fname2, skiprows=1, delimiter=",")
advanced_param = AdvancedFastFitterParam(weights=(1,1))
fitter = fitter.copy(update={"wvl_range": (9,18)})
pmma_medium, rms_error = fitter.fit(max_num_poles=8, tolerance_rms=2e-2)
fitter.plot(pmma_medium)
plt.show()
~~~

![image](https://github.com/kyongmini/kyongmini.github.io/assets/137682255/988410a2-9afc-41e3-b260-1a834801f944)
![image](https://github.com/kyongmini/kyongmini.github.io/assets/137682255/b6a97e9d-7147-4e22-86ec-db68e4f15f71)


Construct the shape of resonators.
~~~
inf_eff = 1e2 

vertices = [
    (-inf_eff, A / 2),
    (-inf_eff, -A / 2),
    (-(B / np.cos(alpha) + A * np.tan(alpha)) / 2, -A / 2),
    (-(B / np.cos(alpha) - A * np.tan(alpha)) / 2, A / 2),
]


left_box = td.Structure(
    geometry=td.PolySlab(vertices=vertices, axis=2, slab_bounds=(0, h)), medium = si_medium
)

vertices = [
    (inf_eff, A / 2),
    (inf_eff, -A / 2),
    ((B / np.cos(alpha) - A * np.tan(alpha)) / 2, -A / 2),
    ((B / np.cos(alpha) + A * np.tan(alpha)) / 2, A / 2),
]

right_box = td.Structure(
    geometry=td.PolySlab(vertices=vertices, axis=2, slab_bounds=(0, h)), medium = si_medium
)

substrate_layer = td.Structure(
    geometry=td.Box(center=(0, 0, -t/ 2), size=(td.inf, td.inf, t)), medium=pmma_medium
)
~~~

Define CP condition.
~~~
def circular_polarized_plane_wave(pol):

    plane_wave_x = td.PlaneWave(
        source_time=td.GaussianPulse(freq0=freq0, fwidth=fwidth),
        size=(td.inf, td.inf, 0),
        center=(0, 0, 0.3 * lda0),
        direction="-",
        pol_angle=0,
    )

    if pol == "left":
        phase = -np.pi / 2
    elif pol == "right":
        phase = np.pi / 2
    else:
        raise ValueError("pol must be `left` or `right`")

    plane_wave_y = td.PlaneWave(
        source_time=td.GaussianPulse(freq0=freq0, fwidth=fwidth, phase=phase),
        size=(td.inf, td.inf, 0),
        center=(0, 0, 0.3 * lda0),
        direction="-",
        pol_angle=np.pi / 2,
    )

    return [plane_wave_x, plane_wave_y]


monitor_r = td.FluxMonitor(
    center=[0, 0, 0.5 * lda0], size=[td.inf, td.inf, 0], freqs=freqs, name="R"
)
monitor_t = td.FluxMonitor(
    center=[0, 0, 0.5 * -lda0], size=[td.inf, td.inf, 0], freqs=freqs, name="T"
)

monitor_field_xz = td.FieldMonitor(
    center=(0, 0, 0), size=(td.inf, 0, td.inf), freqs=freqs, name="field_xz"
)

monitor_field_xy = td.FieldMonitor(
    center=(0, 0, 0), size=(td.inf, td.inf, 0), freqs=freqs, name="field_xy"
)
~~~

Simulate it and Define the S-pol, P-pol.

~~~
run_time = 3e-11 


sim_box = td.Box.from_bounds(
    rmin=(-a / 2, -a / 2, -t - 2*lda0 ), rmax=(a / 2, a / 2, t+ 2*lda0 )
)

def make_sim(pol):
    sim = td.Simulation(
        center=sim_box.center,
        
        size=sim_box.size,
        grid_spec=td.GridSpec.auto(min_steps_per_wvl=40, wavelength=lda0),
        structures=[
            left_box,
            right_box,
            substrate_layer,
        ],
        sources=circular_polarized_plane_wave(pol),
        monitors=[monitor_t, monitor_r, monitor_field_xz, monitor_field_xy],
        run_time=run_time,
        boundary_spec=td.BoundarySpec(
            x=td.Boundary.periodic(), y=td.Boundary.periodic(), z=td.Boundary.pml()
        ),
    )
    return sim


sim_left = make_sim("left")
sim_left.plot_3d()

sim_right = make_sim("right")
sim_right.plot_3d()
~~~

cross section at y

~~~
ax = sim_left.plot(y=0)
sim_left.plot_grid(y=0, ax=ax)
ax.set_ylim(-15, 15)
ax.set_ylim(-20, 20)
ax.set_aspect("auto")

ax = sim_right.plot(y=0)
sim_left.plot_grid(y=0, ax=ax)
ax.set_ylim(-15, 15)
ax.set_ylim(-20, 20)
ax.set_aspect("auto")
~~~

![image](https://github.com/kyongmini/kyongmini.github.io/assets/137682255/688b21a5-4f97-40ee-9c6e-98f18bd3d4ea)
![image](https://github.com/kyongmini/kyongmini.github.io/assets/137682255/93b5abb5-adbe-4fb1-85a4-ba6517203ce3)

create a batch.
~~~
sims = {
    "LCP": sim_left,
    "RCP": sim_right,
}

batch = web.Batch(simulations=sims)
batch_results = batch.run(path_dir="data")
~~~

Plot absorption spectra.
~~~
R_LCP = batch_results["LCP"]["R"].flux/2
T_LCP =-batch_results["LCP"]["T"].flux/2
R_RCP = batch_results["RCP"]["R"].flux/2
T_RCP =-batch_results["RCP"]["T"].flux/2

A_LCP = 1 - R_LCP - T_LCP
A_RCP = 1 - R_RCP - T_RCP

# plot absorption spectra
plt.plot(ldas, A_LCP, "red", label="LCP")
plt.plot(ldas, A_RCP, "red", linestyle="--", label="RCP")


plt.ylabel("Absorption")
plt.xlabel("Wavelength ($\mu m$)")
plt.legend()
plt.show()
~~~
![image](https://github.com/kyongmini/kyongmini.github.io/assets/137682255/5cd0c447-8f83-496d-9955-bcc555dce30c)

~~~
R_LCP = batch_results["LCP"]["R"].flux/2
T_LCP =-batch_results["LCP"]["T"].flux/2
R_RCP = batch_results["RCP"]["R"].flux/2
T_RCP =-batch_results["RCP"]["T"].flux/2

A_LCP = 1 - R_LCP - T_LCP
A_RCP = 1 - R_RCP - T_RCP

# plot absorption spectra
plt.plot(ldas, A_LCP, "red", label="LCP")
plt.plot(ldas, A_RCP, "red", linestyle="--", label="RCP")
plt.plot(ldas, R_LCP + T_LCP, "blue", label="R + T_LCP")
plt.plot(ldas, R_RCP + T_RCP, "blue", linestyle="--", label="R + T_RCP")

plt.ylabel("Absorption")
plt.xlabel("Wavelength ($\mu m$)")
plt.legend()
plt.show()
~~~

![image](https://github.com/kyongmini/kyongmini.github.io/assets/137682255/5a5c059f-1c20-4bde-a118-38ab5854cac3)

Plot CD spectra.

~~~
plt.plot(ldas, A_LCP - A_RCP, "red")
plt.title("Circular dichroism (CD)")
plt.ylabel("CD")
plt.xlabel("Wavelength ($\mu m$)")
plt.legend()
plt.show()
~~~

![image](https://github.com/kyongmini/kyongmini.github.io/assets/137682255/6cd0d494-0513-4818-8ea3-420302e04157)

Finally, Plot the irradiance.

~~~
fig, ax = plt.subplots(2, 1, tight_layout=True)
batch_results["LCP"].plot_field(
    field_monitor_name="field_xy", field_name="E", val="abs^2", f=freq15_5, ax=ax[0]
)
batch_results["RCP"].plot_field(
    field_monitor_name="field_xy", field_name="E", val="abs^2", f=freq15_5, ax=ax[1]
)
plt.show()

fig, ax = plt.subplots(2, 1, tight_layout=True)
batch_results["LCP"].plot_field(
    field_monitor_name="field_xy", field_name="E", val="abs^2", f=freq14_75, ax=ax[0]
)
batch_results["RCP"].plot_field(
    field_monitor_name="field_xy", field_name="E", val="abs^2", f=freq14_75, ax=ax[1]
)
plt.show()

fig, ax = plt.subplots(2, 1, tight_layout=True)
batch_results["LCP"].plot_field(
    field_monitor_name="field_xy", field_name="E", val="abs^2", f=freq16_25, ax=ax[0]
)
batch_results["RCP"].plot_field(
    field_monitor_name="field_xy", field_name="E", val="abs^2", f=freq16_25, ax=ax[1]
)
plt.show()
~~~

~~~
fig, ax = plt.subplots(1, 2, figsize=(8, 3), tight_layout=True)
batch_results["LCP"].plot_field(
    field_monitor_name="field_xz", field_name="E", val="abs^2",f =freq15_5, ax=ax[0]
)
ax[0].set_ylim(-10, 10, 1)
batch_results["RCP"].plot_field(
    field_monitor_name="field_xz", field_name="E", val="abs^2", f=freq15_5, ax=ax[1]
)
ax[1].set_ylim(-10, 10, 1)
plt.show()

fig, ax = plt.subplots(1, 2, figsize=(8, 3), tight_layout=True)
batch_results["LCP"].plot_field(
    field_monitor_name="field_xz", field_name="E", val="abs^2",f =freq14_75, ax=ax[0]
)
ax[0].set_ylim(-10, 10, 1)
batch_results["RCP"].plot_field(
    field_monitor_name="field_xz", field_name="E", val="abs^2", f=freq14_75, ax=ax[1]
)
ax[1].set_ylim(-10, 10, 1)
plt.show()

fig, ax = plt.subplots(1, 2, figsize=(8, 3), tight_layout=True)
batch_results["LCP"].plot_field(
    field_monitor_name="field_xz", field_name="E", val="abs^2",f =freq16_25, ax=ax[0]
)
ax[0].set_ylim(-10, 10, 1)
batch_results["RCP"].plot_field(
    field_monitor_name="field_xz", field_name="E", val="abs^2", f=freq16_25, ax=ax[1]
)
ax[1].set_ylim(-10, 10, 1)
plt.show()
~~~

Plot phase difference.

~~~
def plane_wave_sources():
    # S-Polarized (TE mode)
    spol_source = td.PlaneWave(
        source_time=td.GaussianPulse(freq0=freq0, fwidth=fwidth),
        center=(0, 0, 0.2 * lda0),
        direction="-",
        pol_angle=np.pi/2,  # y direction polarization for s-pol
        size=(td.inf, td.inf, 0)
    )
    
    # P-Polarized (TM mode)
    ppol_source = td.PlaneWave(
        source_time=td.GaussianPulse(freq0=freq0, fwidth=fwidth),
        center=(0, 0, 0.2 * lda0),
        direction="-",
        pol_angle=0,  # x direction polarization for p-pol
        size=(td.inf, td.inf, 0)
    )
    
    return [spol_source, ppol_source]

def run_simulation(polarization):
    sim = td.Simulation(
        center=(0, 0, 0),
        size=(30, 30, 30),
        grid_spec=td.GridSpec.auto(min_steps_per_wvl=20, wavelength=lda0),
        structures=[left_box, right_box, substrate_layer],
        sources=[polarization],
        monitors=[monitor_field_xy],
        run_time=1e-12,
        boundary_spec=td.BoundarySpec(x=td.Boundary.pml(), y=td.Boundary.pml(), z=td.Boundary.pml())
    )
    return web.run(sim, task_name=f"Simulation_{polarization.pol_angle}")

def extract_field_data(sim_result, component):
    # This function should return the complex field data for the specified component
    # Here you would typically download result files and extract field data
    field_data = np.random.randn(100) + 1j * np.random.randn(100)  # Placeholder: replace with actual data extraction
    return field_data

# Run simulations
sources = plane_wave_sources()
spol_simulation = run_simulation(sources[0])  # S-Pol
ppol_simulation = run_simulation(sources[1])  # P-Pol

# Extract field components (these must be replaced with actual data extraction logic)
E_x = extract_field_data(spol_simulation, 'E_x')  # Adjust the component based on what is monitored
E_y = extract_field_data(ppol_simulation, 'E_y')

# Compute the phase of each component
phase_x = np.angle(E_x)
phase_y = np.angle(E_y)

# Compute the phase difference
phase_diff = phase_x - phase_y

phase_diff_degrees = np.degrees(phase_diff)

# Plot the phase difference
plt.figure()
plt.plot(phase_diff)
plt.title('Phase Difference between E_x and E_y')
plt.xlabel('Position Index')
plt.ylabel('Phase Difference (radians)')
plt.show()

plt.figure()
plt.plot(phase_diff_degrees, label='Phase Difference')
plt.axhline(90, color='r', linestyle='--', label='90 Degrees')
plt.axhline(-90, color='r', linestyle='--', label='-90 Degrees')
plt.title('Phase Difference between E_x and E_y (Degrees)')
plt.xlabel('Position Index')
plt.ylabel('Phase Difference (Degrees)')
plt.legend()  # Add a legend to clarify the plot elements
plt.show()
~~~


The spectrum of the laser is guassian shape. 
~~~
def gaussian_spectrum(freqs, freq0, fwidth):
    sigma = fwidth / 2.355  # Convert FWHM to standard deviation
    return np.exp(-((freqs - freq0) ** 2) / (2 * sigma ** 2))

spectrum = gaussian_spectrum(freqs, freq0, fwidth)

# Plotting
plt.figure(figsize=(10, 6))
plt.plot(ldas, spectrum, color='blue', label='Gaussian Pulse Spectrum')
plt.title('Gaussian Pulse Spectrum')
plt.xlabel("Wavelength ($\mu m$)" )
plt.ylabel('Spectral Amplitude')
plt.legend()
plt.grid(True)
plt.show()
~~~

![image](https://github.com/kyongmini/kyongmini.github.io/assets/137682255/78ca1c4b-a974-4cbf-a4ae-4743d33e4389)


### Notification

{: .box-note}
**Note:** ..
