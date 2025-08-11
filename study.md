---
layout: default
title: Research
permalink: /study/
---

<div class="container">
    <h1>Quantum Optics</h1>
    <div class="book-row">
        <div class="book-entry">
            <img src="/assets/images/books/gerry.jpg" alt="Introductory Quantum Optics" width="160">
            <p>Gerry, C.C., & Knight, P.L. (2023). <em>Introductory quantum optics</em> (2nd ed.). Cambridge University Press.</p>
        </div>
    </div>
    <h2>Study Materials</h2>
    <p><a href='/assets/files/QOstudy/QO_CH2-1.pdf' download>Chapter 2 (1) - Download PDF</a></p>
    <p><a href='/assets/files/QOstudy/QO_CH2-2.pdf' download>Chapter 2 (2) - Download PDF</a></p>
    <p><a href='/assets/files/QOstudy/QO_CH3.pdf' download>Chapter 3 - Download PDF</a></p>
    <p><a href='/assets/files/QOstudy/QO_CH4-1.pdf' download>Chapter 4 - Download PDF</a></p>
</div>

<div class="container">
    <h1>Nonlinear Optics</h1>
    <div class="book-row">
        <div class="book-entry">
            <img src="/assets/images/books/boyd.jpg" alt="Nonlinear Optics" class="book-cover">
            <p>Boyd, R. W. (2020). <em>Nonlinear optics</em> (4th ed.). Academic Press.</p>
        </div>
        <div class="book-entry">
            <img src="/assets/images/books/yariv.jpg" alt="Optical Waves in Crystals" class="book-cover">
            <p>Yariv, A., & Yeh, P. (1984). <em>Optical waves in crystals: Propagation and control of laser radiation</em>. Wiley.</p>
        </div>
    </div>
    <h2>Study Materials</h2>
    <p><a href='/assets/files/NOstudy/NO_CH1.pdf' download>Chapter 1 - Download PDF</a></p>
</div>




<style>
    .book-entry {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        margin-bottom: 1.5rem;
    }

    .book-entry img {
        margin-bottom: 0.5rem;
        border-radius: 6px;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    }

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
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
        background-color: #fff;
    }

    body.dark-mode .project-item {
        background-color: #1a1a1a;
        border-color: #333;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
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

    a[href$=".pdf"] {
        color: rgb(14, 85, 192);
        font-weight: 600;
        text-decoration: none;
        transition: color 0.2s ease;
    }

    a[href$=".pdf"]:hover {
        color: #084B8A;
        text-decoration: underline;
        cursor: pointer;
    }
    .book-row {
        display: flex;
        gap: 2rem;
        margin-bottom: 1.5rem;
        flex-wrap: wrap;
    }

    .book-entry {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        max-width: 300px;
    }

    .book-cover {
        height: 200px;
        width: auto;
        margin-bottom: 0.5rem;
        border-radius: 6px;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    }

</style>