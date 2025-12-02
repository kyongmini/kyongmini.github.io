---
layout: default
title: Research Material
permalink: /projects/
---

<div class="container">
    <h1>Research Material</h1>
    <p>Here are some of the key projects I'm currently working on or have completed.</p>

    <div class="project-grid">
        <div class="project-item">
            <h3>Quantum Information Processing</h3>
            <p>My research explores tools such as quantum state tomography and classical shadow techniques to efficiently reconstruct and analyze quantum states. These foundations support advances in quantum information processing, including quantum communication, and computation</p>
            <a href="#" class="button">View Details</a>
        </div>
        <div class="project-item">
            <h3>Electro-optics</h3>
            <p>Not completed</p>
            <a href="/projects/QONOstudy/" class="button">View Details</a>
        </div>
        <div class="project-item">
            <h3>Machine learning & Reinforcement Learning</h3>
            <p>We live in a world shaped by artificial intelligence. In both the quantum world and the classical world, we study and apply machine learning and reinforcement learning techniques to better understand complex systems, optimize behaviors, and solve challenging problems.</p>
            <a href="/projects/MaxDiffQL/" class="button">View Details</a>
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
        box-shadow: 0 2px 5px rgba(189, 189, 189, 0.76);
        background-color: #fff;
    }
    body.dark-mode .project-item {
        background-color: #1a1a1a;
        border-color: #333;
        box-shadow: 0 2px 5px rgba(0,0,0,0.05);
    }
    .project-item h3 {
        color: #0a192f;
        margin-bottom: 0.8rem;
    }
    body.dark-mode .project-item h3 {
        color: #a5d8ff; /* Soft Blue */
    }
    .project-item p {
        margin-bottom: 1.5rem;
    }

    .button {
        display: inline-block;
        padding: 0.5rem 1rem;
        border: 2px solid #0a192f; 
        color: #0a192f;             
        background-color: #fff;    
        text-decoration: none;
        border-radius: 5px;
        font-weight: 600;
        transition: all 0.3s ease;
    }

    .button:hover {
        background-color:rgba(8, 107, 255, 0.75);
        color: #fff;
    }

    body.dark-mode .button {
        border-color: #a5d8ff; /* Soft Blue */
        color: #a5d8ff;        /* Soft Blue */
        background-color: transparent; /* Removed deep blue background */
    }

    body.dark-mode .button:hover {
        background-color: rgba(165, 216, 255, 0.1); /* Subtle hover effect */
        color: #a5d8ff;
    }
</style>