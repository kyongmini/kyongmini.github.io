---
layout: default
title: FPGA Project
permalink: /research-fpga/
---

<div class="notion-container">
    <div class="notion-cover">
        <img src="https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Cover">
    </div>
    <div class="notion-content">
        <div class="notion-icon">⚡</div>
        <h1 class="notion-title">FPGA Project</h1>
        
        <div class="notion-callout">
            <span class="emoji">💡</span>
            <span class="text">This page is designed to document my FPGA projects and learning progress.</span>
        </div>

        <h2 class="notion-h2">Project Overview</h2>
        <p class="notion-p">Description of the FPGA project goes here. You can edit this text just like a Notion page.</p>

        <h2 class="notion-h2">To Do List</h2>
        <ul class="notion-list">
            <li><input type="checkbox" disabled> Setup Vivado Environment</li>
            <li><input type="checkbox" disabled> Blinking LED Tutorial</li>
            <li><input type="checkbox" disabled> UART Communication</li>
        </ul>

        <h2 class="notion-h2">Notes</h2>
        <p class="notion-p">Add your daily notes and findings here.</p>
    </div>
</div>

<style>
    /* Notion-like Styles */
    .notion-container {
        max-width: 900px;
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
        padding: 0 96px;
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
        list-style: none;
        padding-left: 0;
    }

    .notion-list li {
        display: flex;
        align-items: center;
        margin-bottom: 4px;
        font-size: 16px;
    }

    .notion-list input[type="checkbox"] {
        margin-right: 8px;
    }

    /* Dark Mode Overrides if needed, assuming parent handles it or we add specific classes */
    body.dark-mode .notion-container {
        background: #191919;
        color: rgba(255, 255, 255, 0.9);
    }
    body.dark-mode .notion-title, 
    body.dark-mode .notion-h2, 
    body.dark-mode .notion-p,
    body.dark-mode .notion-callout {
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
</style>
