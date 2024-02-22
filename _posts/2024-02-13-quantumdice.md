---
layout: post
title: Quantum Dice
subtitle: My Quantum Computing Project 1
gh-repo: daattali/beautiful-jekyll
tags: [quantum computing, quantum information]
comments: true
---

{: .box-success}
It is a **'Quantum Dice'** made with random number generator using IBM Qauntum platform


## 1. Before executing the code, you need to install as belows and input your API Token.

![image](https://github.com/kyongmini/kyongmini.github.io/assets/137682255/1758f656-1bfb-41d4-9bc9-9732c3f5e269)
~~~
from qiskit import QuantumCircuit, execute, Aer, IBMQ, ClassicalRegister, QuantumRegister
from qiskit.compiler import transpile, assemble
from qiskit.tools.jupyter import *
from qiskit.visualization import *
from qiskit.quantum_info import Pauli, state_fidelity, process_fidelity
import matplotlib.pyplot as plt
%matplotlib inline
IBMQ.save_account('your API Token')
~~~

## 2. Load the IBM Quantum account

~~~
IBMQ.load_account()
~~~

## 3. # Create the Quantum Circuit for random number generation


~~~
qc = QuantumCircuit(5, 5)
qc.h(0)
qc.h(1)
qc.h(2)
qc.h(3)
qc.h(4)
qc.measure([0, 1, 2, 3, 4], [0, 1, 2, 3, 4])
~~~

![KakaoTalk_20240222_123621663](https://github.com/kyongmini/kyongmini.github.io/assets/137682255/8aa5b37c-4fa2-4749-98a8-1a0cf0c5ed93)



### Notification

{: .box-note}
**Note:** We used Chat GPT to code.
