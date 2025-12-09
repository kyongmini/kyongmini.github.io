---
layout: default
title: Quantum Information
permalink: /quantum-information/
---

<div class="notion-container">
    <div class="notion-cover">
        <img src="https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Cover">
    </div>
    <div class="notion-content">
        <div class="notion-icon">⚛️</div>
        <h1 class="notion-title">Quantum Information</h1>
        
        <div class="notion-callout">
            <span class="emoji">💡</span>
            <span class="text">Study materials and resources for Quantum Information Science.</span>
        </div>

        <p class="notion-p">Content coming soon...</p>
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

    .notion-p {
        font-size: 16px;
        line-height: 1.5;
        margin-bottom: 1em;
        color: #37352f;
    }

    /* Dark Mode Overrides */
    body.dark-mode .notion-container {
        background: #191919;
        color: rgba(255, 255, 255, 0.9);
    }
    body.dark-mode .notion-title, 
    body.dark-mode .notion-callout,
    body.dark-mode .notion-p {
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
