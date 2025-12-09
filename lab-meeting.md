---
layout: default
title: Lab Meeting
permalink: /lab-meeting/
---

<div class="notion-container">
    <div class="notion-cover">
        <img src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Cover">
    </div>
    <div class="notion-content">
        <div class="notion-icon">📅</div>
        <h1 class="notion-title">Lab Meeting</h1>
        
        <div class="notion-callout">
            <span class="emoji">📢</span>
            <span class="text">Archive of weekly lab meeting presentations and discussion materials.</span>
        </div>

        <h2 class="notion-h2">2025 Meetings</h2>
        <div class="meeting-timeline">
            <!-- Meeting Item -->
            <div class="meeting-item">
                <div class="meeting-date">
                    <span class="day">02</span>
                    <span class="month">Dec</span>
                    <span class="year">2025</span>
                </div>
                <div class="meeting-content">
                    <h3>Weekly Research Update</h3>
                    <p>The review of PPKN EO Bragg modulator.</p>
                    <a href="/assets/files/labmeetings/20251202.pdf" class="download-btn" download>
                        Download PDF
                    </a>
                </div>
            </div>

            <!-- Meeting Item -->
            <div class="meeting-item">
                <div class="meeting-date">
                    <span class="day">09</span>
                    <span class="month">Dec</span>
                    <span class="year">2025</span>
                </div>
                <div class="meeting-content">
                    <h3>Weekly Research Update</h3>
                    <p>EO Bragg Beam Splitter & Introduction to Šolc filter</p>
                    <a href="/assets/files/labmeetings/20251209.pdf" class="download-btn" download>
                        Download PDF
                    </a>
                    <a href="/assets/files/labmeetings/20251209-2.pdf" class="download-btn" download>
                        Download PDF
                    </a>
                </div>
            </div>
        </div>

        <h2 class="notion-h2">Schedule</h2>
        <p class="notion-p">Regular meetings are held every week to discuss research progress and new findings.</p>
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

    .notion-h2 {
        font-size: 1.5em;
        font-weight: 600;
        margin-top: 1.4em;
        margin-bottom: 0.5em;
        color: #37352f;
    }

    .notion-p {
        font-size: 16px;
        line-height: 1.5;
        margin-bottom: 1em;
        color: #37352f;
    }

    .notion-callout {
        padding: 16px 16px 16px 12px;
        display: flex;
        align-items: center;
        background: #F1F1EF;
        border-radius: 3px;
        margin: 4px 0;
        color: #37352f;
    }

    .notion-callout .emoji {
        font-size: 24px;
        margin-right: 12px;
    }

    .notion-list {
        list-style: disc; /* Changed to disc for bullet points */
        padding-left: 1.5em; /* Added padding for bullets */
        margin-bottom: 1em;
    }

    .notion-list li {
        margin-bottom: 4px;
        font-size: 16px;
        color: #37352f;
        line-height: 1.5;
    }

    /* Dark Mode Overrides */
    body.dark-mode .notion-container {
        background: #191919;
        color: rgba(255, 255, 255, 0.9);
    }
    body.dark-mode .notion-title, 
    body.dark-mode .notion-h2, 
    body.dark-mode .notion-p,
    body.dark-mode .notion-callout,
    body.dark-mode .notion-list li {
        color: rgba(255, 255, 255, 0.9);
    }
    body.dark-mode .notion-callout {
        background: rgba(255, 255, 255, 0.055);
    }

    @media (max-width: 768px) {
        .notion-content {
            padding: 0 20px;
        }
        .notion-title {
            font-size: 32px;
        }
    }

    /* Restored Meeting Item Styles */
    .meeting-timeline {
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
        max-width: 100%; /* Adapted for Notion container */
        margin-top: 1rem;
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
        font-size: 1rem;
        font-weight: 500;
        text-transform: uppercase;
        margin-top: 0.2rem;
    }

    .meeting-date .year {
        font-size: 0.8rem;
        color: #888;
        margin-top: 0.2rem;
    }

    .meeting-content {
        flex: 1;
    }

    .meeting-content h3 {
        margin: 0 0 0.5rem 0;
        color: #0a192f;
        font-size: 1.3rem;
        font-weight: 600;
    }

    .meeting-content p {
        margin: 0 0 1rem 0;
        color: #555;
        font-size: 0.95rem;
        line-height: 1.5;
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
        margin-right: 0.5rem;
        margin-bottom: 0.5rem;
    }

    .download-btn:hover {
        background-color: #0a192f;
        color: #fff;
        border-color: #0a192f;
        text-decoration: none;
    }
    
    /* Dark Mode Overrides for Meeting Items */
    body.dark-mode .meeting-item {
        background-color: #112240;
        border-color: #233554;
    }

    body.dark-mode .meeting-date {
        border-right-color: #233554;
        color: #e6f1ff;
    }

    body.dark-mode .meeting-date .year {
        color: #8892b0;
    }

    body.dark-mode .meeting-content h3 {
        color: #e6f1ff;
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
</style>
