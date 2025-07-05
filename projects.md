---
layout: default
title: Projects
---

<div class="container">
    <h1>My Projects</h1>
    <p>Here are some of the key projects I'm currently working on or have completed.</p>

    <div class="project-grid">
        <div class="project-item">
            <h3>Quantum Optics & Quantum Information Processing</h3>
            <p>I study quantum optics both theoretically and experimentally. My research explores tools such as quantum state tomography and classical shadow techniques to efficiently reconstruct and analyze quantum states. These foundations support advances in quantum information processing, including quantum communication, computation, and sensing.</p>
            <a href="#" class="button">View Details</a>
        </div>
        <div class="project-item">
            <h3>Nonlinear Optics</h3>
            <p>Not completed.</p>
            <a href="#" class="button">View Details</a>
        </div>
        <div class="project-item">
            <h3>Machine learning & Reinforcement Learning</h3>
            <p>We live in a world shaped by artificial intelligence. In both the quantum world and the classical world, we study and apply machine learning and reinforcement learning techniques to better understand complex systems, optimize behaviors, and solve challenging problems.</p>
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