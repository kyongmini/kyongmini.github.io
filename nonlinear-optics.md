---
layout: default
title: Nonlinear Optics
permalink: /nonlinear-optics/
---

<div class="notion-container">
    <div class="notion-cover">
        <img src="https://images.unsplash.com/photo-1550684848-fac1c5b4e853?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Cover">
    </div>
    <div class="notion-content">
        <div class="notion-icon">🌈</div>
        <h1 class="notion-title">Nonlinear Optics</h1>
        
        <div class="notion-callout">
            <span class="emoji">💡</span>
            <span class="text">Self-study notes and materials for Nonlinear Optics.</span>
        </div>

        <div class="intro-section">
            <div class="book-info">
                <img src="/assets/images/books/boyd.jpg" alt="Nonlinear Optics" class="book-cover">
                <p class="intro-text">Boyd, R. W. (2020). <em>Nonlinear optics</em> (4th ed.). Academic Press.</p>
            </div>
            <div class="book-info">
                <img src="/assets/images/books/yariv.jpg" alt="Optical Waves in Crystals" class="book-cover">
                <p class="intro-text">Yariv, A., & Yeh, P. (1984). <em>Optical waves in crystals: Propagation and control of laser radiation</em>. Wiley.</p>
            </div>
        </div>

        <div class="meeting-timeline">
            <!-- Chapter 1 -->
            <div class="meeting-item">
                <div class="meeting-date">
                    <span class="day">01</span>
                    <span class="month">Chap</span>
                </div>
                <div class="meeting-content">
                    <h3>Chapter 1</h3>
                    <p>Study material for Chapter 1.</p>
                    <a href="/assets/files/NOstudy/NO_CH1.pdf" class="download-btn" download>
                        Download PDF
                    </a>
                </div>
            </div>
        </div>
    </div>
</div>

<style>
    /* Notion-like Styles */
    .notion-container {
        max-width: 1100px;
        margin: 0 auto;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
        color: #37352f;
        background: white;
        min-height: 100vh;
        padding-bottom: 50px;
    }

    .notion-cover {
        height: 30vh;
        width: 100%;
        overflow: hidden;
        position: relative;
    }

    .notion-cover img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center 50%;
    }

    .notion-content {
        padding: 0 60px;
        position: relative;
    }

    .notion-icon {
        font-size: 78px;
        margin-top: -42px;
        margin-bottom: 20px;
        position: relative;
        z-index: 1;
    }

    .notion-title {
        font-size: 40px;
        font-weight: 700;
        margin-bottom: 20px;
        line-height: 1.2;
        color: #37352f;
    }

    .notion-callout {
        padding: 16px 16px 16px 12px;
        display: flex;
        align-items: center;
        background: #F1F1EF;
        border-radius: 3px;
        margin: 4px 0 30px 0;
        color: #37352f;
    }

    .notion-callout .emoji {
        font-size: 24px;
        margin-right: 12px;
    }

    /* Custom Study Styles */
    .intro-section {
        margin-bottom: 3rem;
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    .book-info {
        display: flex;
        align-items: center;
        gap: 2rem;
        background: #f8f9fa;
        padding: 1.5rem;
        border-radius: 12px;
        border: 1px solid #eee;
    }

    .book-cover {
        width: 100px;
        height: auto;
        border-radius: 4px;
        box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    }

    .intro-text {
        color: #666;
        font-size: 1.1rem;
        margin: 0;
    }

    .meeting-timeline {
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
    }

    .meeting-item {
        display: flex;
        align-items: flex-start;
        background: #fff;
        border-radius: 12px;
        padding: 1.5rem;
        box-shadow: 0 4px 6px rgba(0,0,0,0.05);
        transition: transform 0.2s ease, box-shadow 0.2s ease;
        border: 1px solid #eee;
    }

    .meeting-item:hover {
        transform: translateY(-2px);
        box-shadow: 0 8px 15px rgba(0,0,0,0.1);
    }

    .meeting-date {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        min-width: 80px;
        padding-right: 1.5rem;
        border-right: 2px solid #f0f0f0;
        margin-right: 1.5rem;
        color: #0a192f;
    }

    .meeting-date .day {
        font-size: 1.8rem;
        font-weight: 700;
        line-height: 1;
    }

    .meeting-date .month {
        font-size: 0.9rem;
        font-weight: 500;
        text-transform: uppercase;
        margin-top: 0.2rem;
        color: #666;
    }

    .meeting-content {
        flex: 1;
    }

    .meeting-content h3 {
        margin: 0 0 0.5rem 0;
        color: #0a192f;
        font-size: 1.3rem;
    }

    .meeting-content p {
        margin: 0 0 1rem 0;
        color: #555;
        font-size: 0.95rem;
    }

    .download-btn {
        display: inline-block;
        padding: 0.5rem 1rem;
        background-color: #f8f9fa;
        color: #0a192f;
        border: 1px solid #ddd;
        border-radius: 6px;
        text-decoration: none;
        font-size: 0.9rem;
        font-weight: 500;
        transition: all 0.2s ease;
    }

    .download-btn:hover {
        background-color: #0a192f;
        color: #fff;
        border-color: #0a192f;
    }

    /* Dark Mode Overrides */
    body.dark-mode .notion-container {
        background: #191919;
        color: rgba(255, 255, 255, 0.9);
    }
    body.dark-mode .notion-title, 
    body.dark-mode .notion-callout,
    body.dark-mode .meeting-content h3 {
        color: rgba(255, 255, 255, 0.9);
    }
    body.dark-mode .notion-callout {
        background: rgba(255, 255, 255, 0.055);
    }
    body.dark-mode .book-info {
        background-color: #112240;
        border-color: #233554;
    }
    body.dark-mode .intro-text {
        color: #a0a0a0;
    }
    body.dark-mode .meeting-item {
        background-color: #112240;
        border-color: #233554;
    }
    body.dark-mode .meeting-date {
        border-right-color: #233554;
        color: #e6f1ff;
    }
    body.dark-mode .meeting-date .month {
        color: #8892b0;
    }
    body.dark-mode .meeting-content p {
        color: #a8b2d1;
    }
    body.dark-mode .download-btn {
        background-color: transparent;
        border-color: #64ffda;
        color: #64ffda;
    }
    body.dark-mode .download-btn:hover {
        background-color: rgba(100, 255, 218, 0.1);
    }

    @media (max-width: 768px) {
        .notion-content {
            padding: 0 20px;
        }
        .notion-title {
            font-size: 32px;
        }
    }
</style>
