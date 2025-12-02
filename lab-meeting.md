---
layout: default
title: Lab Meeting
permalink: /lab-meeting/
---

<div class="container">
    <h1>Lab Meeting</h1>
    <p class="intro-text">Archive of weekly lab meeting presentations and discussion materials.</p>

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
        <!-- Add more meeting items here -->
    </div>
</div>

<style>
    .intro-text {
        margin-bottom: 3rem;
        color: #666;
        font-size: 1.1rem;
    }

    .meeting-timeline {
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
        max-width: 800px;
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

    /* Dark Mode Styles */
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
