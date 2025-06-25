---
layout: default
title: Projects
---

<div class="container">
    <h1>Our Projects</h1>
    <p>Here are some of the key projects we are currently working on or have completed.</p>

    <div class="project-grid">
        <div class="project-item">
            <h3>Quantum Machine Learning for Material Discovery</h3>
            <p>Developing quantum algorithms and machine learning models to accelerate the discovery of new materials with desired quantum properties.</p>
            <a href="#" class="button">View Details</a>
        </div>
        <div class="project-item">
            <h3>Entanglement-Enhanced Quantum Sensing</h3>
            <p>Investigating the use of entangled photons to achieve higher precision in quantum metrology and sensing applications.</p>
            <a href="#" class="button">View Details</a>
        </div>
        <div class="project-item">
            <h3>Photonic Quantum Computing Architectures</h3>
            <p>Designing and simulating novel photonic integrated circuits for scalable quantum computing platforms.</p>
            <a href="#" class="button">View Details</a>
        </div>
        </div>
</div>

<style>
    .project-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 2rem;
        margin-top: 2rem;
    }
    .project-item {
        border: 1px solid #ddd;
        padding: 1.5rem;
        border-radius: 8px;
        box-shadow: 0 2px 5px rgba(0,0,0,0.05);
        background-color: #fff;
    }
    body.dark-mode .project-item {
        background-color: #1a1a1a;
        border-color: #333;
        box-shadow: 0 2px 5px rgba(0,0,0,0.2);
    }
    .project-item h3 {
        color: #0a192f;
        margin-bottom: 0.8rem;
    }
    body.dark-mode .project-item h3 {
        color: #64ffda;
    }
    .project-item p {
        margin-bottom: 1.5rem;
    }
</style>