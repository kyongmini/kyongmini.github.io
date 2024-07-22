---
layout: post
title: Single Qutrit Tomography
subtitle: how to construct directly qutrit tomography?
gh-repo: daattali/beautiful-jekyll
tags: [qutrit, tomogrpahy, quantum optics, quantum information]
comments: true
---

{: .box-success}
It is about how to construct directly **Qutrit tomography**. Here's my code below.


### Before running this code, import them.

In order to execute the code, you need to import as belows.
~~~
from scipy.optimize import minimize
import numpy as np
import matplotlib.pyplot as plt
from qiskit.visualization import array_to_latex, plot_state_city
from scipy.linalg import sqrtm
~~~



### 1. Input the test state(theoretical state) and make density matrix of test state for comparing with reconstructed density matrix, later.

You can convert the values(alpha, beta, gamma) freely. a+bj means a is real part and b is imaginary part.

For example, let alpha, beta, gamma be 1. 
![image](https://github.com/user-attachments/assets/391936a1-7c30-4cb3-9c4e-98fde6d2c1b9)

~~~
alpha = 1
beta = 1
gamma = 1


coeff = 1 / np.sqrt(np.abs(alpha)**2 + np.abs(beta)**2 + np.abs(gamma)**2)
test_state = coeff*np.array([alpha, beta, gamma])
rho_t = np.outer(test_state,test_state.conj())
print(rho_t)
~~~
If you input the test state, we can get the theoretical density matrix by tensor product itself.



### 2. Define the basis for single Qutrit.


You can select the basis freely. One thing to keep in mind is, to construct basis more easier, you should choose polarization of two photon(HH~LL).
I choose HH, HV, VV, HD, HR, DR, VR, DD, RR polarization.

~~~
HH = np.array([1, 0, 0])
HV = np.array([0, 1, 0]) 
VV = np.array([0, 0, 1])
psi1 = HH # HH
psi2 = HV # HV, VH
psi3 = VV # VV
psi4 = 1/np.sqrt(2) * np.array([1, 1, 0]) # HD, DR
psi5 = 1/np.sqrt(2) * np.array([1, 1j, 0]) # HR, RH
psi6 = 1/np.sqrt(4) * np.array([1, 1+1j, 1j]) # DR, RD
psi7 = 1/np.sqrt(2) * np.array([0, 1, 1j]) # VR, RV
psi8 = 1/np.sqrt(6) * np.array([1, 2, 1]) # DD
psi9 = 1/np.sqrt(6) * np.array([1, 2j, -1]) # RR

basis =[psi1, psi2, psi3, psi4, psi5, psi6, psi7, psi8, psi9]
~~~



## 3. Construct 9 measurement operators.

~~~
def measurement(psi):
    psi = np.array(psi, dtype=np.complex128)
    return np.outer(psi, psi.conj())

measurement_op = [measurement(psi) for psi in basis]
~~~



### 4. Find the probability. (It means that we should find nomalized coincidence count)

Keep in mind the normalized count, HH+HV+VV is always 1. Because we construct with HH, HV, VV data in single qutrit.
~~~
n = [np.trace(measure @ rho_t).real for measure in measurement_op]
print(n)
~~~

Here's the table of my test state.
![image](https://github.com/user-attachments/assets/5abac27f-b10d-4bbc-b239-bd0dc75508c9)

### 5. Optimize Log Maximum Likelihood Estimation

For minimize,
![image](https://github.com/user-attachments/assets/987d3e2b-0cc4-4b2f-aebc-460057cd7455)

And we can obtain the probability below.
![image](https://github.com/user-attachments/assets/34b3810d-0ffd-43cf-80a4-5d9eda4b6971)

~~~
def compute_rho(T_matrix):
    product = T_matrix @ T_matrix.conj().T
    rho = product / np.trace(product)
    return rho

initial_t = [-0.1] * 9
bounds = [(-1, 1)] * 9

def log_ml(t):
    T_matrix = np.array([
        [t[0], 0, 0],
        [t[3] + 1j * t[4], t[1], 0],
        [t[7] + 1j * t[8], t[5] + 1j * t[6], t[2]]
    ])
    
    rho = compute_rho(T_matrix)
    log_likelihood = 0

    for j in range(len(n)):
            prob = np.real(np.trace(rho @ measurement_op[j]))
            log_likelihood += ((prob - n[j]) ** 2) / ( 2*prob)     
    return log_likelihood            


result = minimize(log_ml, initial_t, bounds=bounds, method='L-BFGS-B')
optimal_t = result.x
~~~


### 6. Reconstruct Transformation Matrix and Physical Density Matrix

~~~
# Compute Physical density matrix and Tunable matrix
T_op = np.array([
            [optimal_t[0], 0, 0],\
            [optimal_t[3]+optimal_t[4]*1j, optimal_t[1], 0],\
            [optimal_t[7]+optimal_t[8]*1j, optimal_t[5]+optimal_t[6]*1j, optimal_t[2]]])
rho_p = compute_rho(T_op)
~~~

~~~
array_to_latex(T_op)
~~~
![image](https://github.com/user-attachments/assets/c0d85151-e086-404f-921a-8e83dfc54814)
~~~
array_to_latex(rho_p)
~~~
![image](https://github.com/user-attachments/assets/da43ef31-a12e-4483-8630-9566d2635dcc)



### 7. Draw the graph with density matrix of test state and physical density matrix.

~~~
real_amplitude = np.real(rho_p)
imag_amplitude = np.imag(rho_p)

# Define labels
row_labels = ["00", "01", "11"]
col_labels = ["00", "01", "11"]

# Plotting real and imaginary parts using 3D bar plots
fig = plt.figure(figsize=(16, 8))

# Function to assign colors based on positive or negative values
def get_colors(values):
    return ['#6da5d7' if val >= 0 else '#fc5557' for val in values]

# Real amplitude plot
ax1 = fig.add_subplot(1, 2, 1, projection='3d')
xpos, ypos = np.meshgrid(np.arange(len(col_labels)), np.arange(len(row_labels)), indexing='ij')
xpos = xpos.ravel()
ypos = ypos.ravel()
zpos = np.zeros_like(xpos)
dx = dy = 0.425
dz = real_amplitude.ravel()
colors = get_colors(dz)
ax1.bar3d(xpos, ypos, zpos, dx, dy, dz, color=colors, zsort='average')
ax1.set_title(r'Real Amplitude $\rho_p$')
ax1.set_xticks(np.arange(len(col_labels)))
ax1.set_xticklabels(col_labels)
ax1.set_yticks(np.arange(len(row_labels)))
ax1.set_yticklabels(row_labels)
ax1.set_zlim(np.min(real_amplitude) - 0.1, np.max(real_amplitude) + 0.1)

xlim = ax1.get_xlim()
ylim = ax1.get_ylim()
ax1.plot_surface(
    np.array([[xlim[0], xlim[1]], [xlim[0], xlim[1]]]),
    np.array([[ylim[0], ylim[0]], [ylim[1], ylim[1]]]),
    np.array([[0, 0], [0, 0]]),
    color='gray',
    alpha=0.15
)

# Imaginary amplitude plot
ax2 = fig.add_subplot(1, 2, 2, projection='3d')
dz = imag_amplitude.ravel()
colors = get_colors(dz)
ax2.bar3d(xpos, ypos, zpos, dx, dy, dz, color=colors, zsort='average')
ax2.set_title(r'Imaginary Amplitude $\rho_p$')
ax2.set_xticks(np.arange(len(col_labels)))
ax2.set_xticklabels(col_labels)
ax2.set_yticks(np.arange(len(row_labels)))
ax2.set_yticklabels(row_labels)
ax2.set_zlim(np.min(imag_amplitude) - 0.1, np.max(imag_amplitude) + 0.1)

xlim = ax2.get_xlim()
ylim = ax2.get_ylim()
ax2.plot_surface(
    np.array([[xlim[0], xlim[1]], [xlim[0], xlim[1]]]),
    np.array([[ylim[0], ylim[0]], [ylim[1], ylim[1]]]),
    np.array([[0, 0], [0, 0]]),
    color='gray',
    alpha=0.15
)

# Adjust the layout manually
plt.subplots_adjust(left=0.05, right=0.85, top=0.95, bottom=0.3, wspace=0.5)

# Display the plot
plt.show()
~~~
![image](https://github.com/user-attachments/assets/8220f111-8b48-4ded-940d-8c2648104093)

~~~
real_amplitude = np.real(rho_t)
imag_amplitude = np.imag(rho_t)

# Define labels
row_labels = ["00", "01", "11"]
col_labels = ["00", "01", "11"]

# Plotting real and imaginary parts using 3D bar plots
fig = plt.figure(figsize=(16, 8))

# Function to assign colors based on positive or negative values
def get_colors(values):
    return ['#6da5d7' if val >= 0 else '#fc5557' for val in values]

# Real amplitude plot
ax1 = fig.add_subplot(1, 2, 1, projection='3d')
xpos, ypos = np.meshgrid(np.arange(len(col_labels)), np.arange(len(row_labels)), indexing='ij')
xpos = xpos.ravel()
ypos = ypos.ravel()
zpos = np.zeros_like(xpos)
dx = dy = 0.425
dz = real_amplitude.ravel()
colors = get_colors(dz)
ax1.bar3d(xpos, ypos, zpos, dx, dy, dz, color=colors, zsort='average')
ax1.set_title(r'Real Amplitude $\rho_t$')
ax1.set_xticks(np.arange(len(col_labels)))
ax1.set_xticklabels(col_labels)
ax1.set_yticks(np.arange(len(row_labels)))
ax1.set_yticklabels(row_labels)
ax1.set_zlim(np.min(real_amplitude) - 0.1, np.max(real_amplitude) + 0.1)

xlim = ax1.get_xlim()
ylim = ax1.get_ylim()
ax1.plot_surface(
    np.array([[xlim[0], xlim[1]], [xlim[0], xlim[1]]]),
    np.array([[ylim[0], ylim[0]], [ylim[1], ylim[1]]]),
    np.array([[0, 0], [0, 0]]),
    color='gray',
    alpha=0.15
)

# Imaginary amplitude plot
ax2 = fig.add_subplot(1, 2, 2, projection='3d')
dz = imag_amplitude.ravel()
colors = get_colors(dz)
ax2.bar3d(xpos, ypos, zpos, dx, dy, dz, color=colors, zsort='average')
ax2.set_title(r'Imaginary Amplitude $\rho_t$')
ax2.set_xticks(np.arange(len(col_labels)))
ax2.set_xticklabels(col_labels)
ax2.set_yticks(np.arange(len(row_labels)))
ax2.set_yticklabels(row_labels)
ax2.set_zlim(np.min(imag_amplitude) - 0.1, np.max(imag_amplitude) + 0.1)

xlim = ax2.get_xlim()
ylim = ax2.get_ylim()
ax2.plot_surface(
    np.array([[xlim[0], xlim[1]], [xlim[0], xlim[1]]]),
    np.array([[ylim[0], ylim[0]], [ylim[1], ylim[1]]]),
    np.array([[0, 0], [0, 0]]),
    color='gray',
    alpha=0.15
)

# Adjust the layout manually
plt.subplots_adjust(left=0.05, right=0.85, top=0.95, bottom=0.3, wspace=0.5)

# Display the plot
plt.show()
~~~
![image](https://github.com/user-attachments/assets/41c7e2cf-6e72-46a8-acfc-246205ea5842)

### 8. Finally, check the fidelity between test rho and physical rho.

~~~
def fidelity(rho1, rho2):
    sqrt_rho1 = sqrtm(rho1)
    return np.trace(sqrtm(sqrt_rho1 @ rho2 @ sqrt_rho1)).real ** 2

print("Fidelity :",fidelity(rho_t, rho_p))
~~~
![image](https://github.com/user-attachments/assets/27220e7d-9cac-49e6-884b-bab3cdced50c)
