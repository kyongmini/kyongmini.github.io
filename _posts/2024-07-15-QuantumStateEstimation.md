---
layout: post
title: Quantum State Estimation (tomography)
subtitle: for single qubit, two qubit, qutrit case using log Maximum Likelihood Estimation
gh-repo: daattali/beautiful-jekyll
tags: [quantum information, optics]
comments: true
---

{: .box-success}
We're going to deal with **'Theory that needed Quantum State Estimation(tomography)'** and **'How to code Quantum State Estimation'**.


First, Let's talk about the theory for quantum state estimation.


Quantum state tomography is the process by which an identical ensemble of unknown quantum states is completely characterized. A sequence of identical measurements within  a series of difference bases allow the reconstruction of a complete quantum state wavefunction.

Quantum state tomography is the process by which any quantum system, including the spin of an electron, can be completely characterized using an ensemble of many identical particles. Measurements of multiple types reconstruct a quantum state from different eigenbases, just as classical tomography can image a three-dimensional object by scanning it from different physical directions. Additional measurements in any single basis bring that dimension into sharper relief.

## Representation of Single-Qubit States.
⟨𝜑|𝜓⟩.
in this situation, we're going to use six type of polarization.

|H⟩ = |0⟩
|V⟩ = |1⟩
|D⟩ =  $`\sqrt{2}+(1+x)^2`$
|A⟩ 
|R⟩ 
|L⟩ 


....


mixed state,

ppt criterion
or 1


## Tomography of Ideal Systems

The goal of tomography is to reconsturct the density matrix of an ensemble of particels through a series of measurements. In partices, this can never be performed exactly, as an infinite number of particles would be required to eliminate statistical error. Exact measurements would yield an exact probability of success, which could then be used to reconstruct a density matrix. BUt our situation is realistic, so we cannot take exact measurements on infinite ensembles. Then, how can we reconstruct the density matrix in realistic situation?

In unrealistic (ideal) case, for single-qubit tomography, it requires a seqeunce of three linearly independent measurements. Each measurement exactly specifies **one deegree of freedom** for the measured state, reducing the free parameters of the unknown state's possible Hilbert space by one. We usually consider measuring H, V, D and R.

When measurements are made along non-orthogonal axes, the first measurement always isolates the unknown state to a plane, the second to a line, and the third to a point.
![KakaoTalk_20240715_144442572](https://github.com/user-attachments/assets/8f6c5054-3a0c-446a-9feb-73e3fc14c648)
A sequence of measurements on the same state taken using non-orthogornal projections: elliptical light rotated 30˚ from H towards R, 22.5˚ linear, and horizontal.















{: .box-error}
**Disabled:** As a result, we did not use this code.




### Notification

{: .box-note}
**Note:** We used Chat GPT to code.
