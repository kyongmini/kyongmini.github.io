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
inf_eff = 1e2  # effective infinity

# calculate the vertices of the resonator on the left
vertices = [
    (-inf_eff, A / 2),
    (-inf_eff, -A / 2),
    (-(B / np.cos(alpha) + A * np.tan(alpha)) / 2, -A / 2),
    (-(B / np.cos(alpha) - A * np.tan(alpha)) / 2, A / 2),
]

# define the left resonator structure
left_box = td.Structure(
    geometry=td.PolySlab(vertices=vertices, axis=2, slab_bounds=(0, h)), medium = si_medium
)
# calculate the vertices of the resonator on the right
vertices = [
    (inf_eff, A / 2),
    (inf_eff, -A / 2),
    ((B / np.cos(alpha) - A * np.tan(alpha)) / 2, -A / 2),
    ((B / np.cos(alpha) + A * np.tan(alpha)) / 2, A / 2),
]

# define the right resonator structure
right_box = td.Structure(
    geometry=td.PolySlab(vertices=vertices, axis=2, slab_bounds=(0, h)), medium = si_medium
)

# define the substrate layer
substrate_layer = td.Structure(
    geometry=td.Box(center=(0, 0, -t/ 2), size=(td.inf, td.inf, t)), medium=pmma_medium
)
~~~

Define CP condition.
~~~
def circular_polarized_plane_wave(pol):
    # define a plane wave polarized in the x direction
    plane_wave_x = td.PlaneWave(
        source_time=td.GaussianPulse(freq0=freq0, fwidth=fwidth),
        size=(td.inf, td.inf, 0),
        center=(0, 0, 1 * lda0),
        direction="-",
        pol_angle=0,
    )

    # determine the phase difference given the polarization
    if pol == "left":
        phase = -np.pi / 2
    elif pol == "right":
        phase = np.pi / 2
    else:
        raise ValueError("pol must be `left` or `right`")

    # define a plane wave polarized in the y direction with a phase difference
    plane_wave_y = td.PlaneWave(
        source_time=td.GaussianPulse(freq0=freq0, fwidth=fwidth, phase=phase),
        size=(td.inf, td.inf, 0),
        center=(0, 0, 1 * lda0),
        direction="-",
        pol_angle=np.pi / 2,
    )

    return [plane_wave_x, plane_wave_y]


# add a flux monitor to detect transmission
monitor_r = td.FluxMonitor(
    center=[0, 0, 0.5 * lda0], size=[td.inf, td.inf, 0], freqs=freqs, name="R"
)

# add field monitors to see the field profiles at the absorption peak frequency when GST is in the amorphous state
monitor_field_xz = td.FieldMonitor(
    center=(0, 0, 0), size=(td.inf, 0, td.inf), freqs=freqs, name="field_xz"
)

monitor_field_xy = td.FieldMonitor(
    center=(0, 0, 0), size=(td.inf, td.inf, 0), freqs=freqs, name="field_xy"
)
~~~



### Notification

{: .box-note}
**Note:** ..
