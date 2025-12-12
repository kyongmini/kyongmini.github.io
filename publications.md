---
layout: default
title: Publications
permalink: /publications/
---

<div class="notion-container">
    <div class="notion-cover">
        <img src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Cover">
    </div>
    <div class="notion-content">
        <div class="notion-icon">📚</div>
        <h1 class="notion-title">Journals</h1>
        
        <div class="notion-callout">
            <span class="emoji">📝</span>
            <span class="text">A selected list of my peer-reviewed journal publications.</span>
        </div>

        <div class="pub-grid">
            <!-- Publication Card 1 -->
            <div class="pub-card">
                <div class="pub-year">2025</div>
                <div class="pub-details">
                    <h3 class="pub-title">Title of Publication 1</h3>
                    <p class="pub-authors">Kyungmin Kwon, et al.</p>
                    <p class="pub-venue">Journal Name, Volume(Issue): Pages</p>
                    <div class="pub-links">
                        <a href="#" class="pub-link doi">DOI</a>
                        <a href="#" class="pub-link pdf">PDF</a>
                    </div>
                </div>
            </div>


        </div>
    </div>
</div>

<style>
    /* Notion Container & Typography (Shared) */
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

    /* Publication Grid & Cards */
    .pub-grid {
        display: flex;
        flex-direction: column;
        gap: 20px;
    }

    .pub-card {
        display: flex;
        background: #fff;
        border: 1px solid #e0e0e0;
        border-radius: 8px;
        padding: 24px;
        transition: transform 0.2s ease, box-shadow 0.2s ease;
        position: relative;
        overflow: hidden;
    }

    .pub-card:hover {
        transform: translateY(-3px);
        box-shadow: 0 10px 20px rgba(0,0,0,0.08);
        border-color: #d0d0d0;
    }

    .pub-year {
        font-size: 24px;
        font-weight: 800;
        color: #e0e0e0;
        margin-right: 24px;
        min-width: 60px;
        text-align: right;
        line-height: 1;
        padding-top: 4px;
    }

    .pub-card:hover .pub-year {
        color: #0a192f; /* Highlight year on hover */
        transition: color 0.3s ease;
    }

    .pub-details {
        flex: 1;
    }

    .pub-title {
        font-size: 1.25rem;
        font-weight: 600;
        margin: 0 0 8px 0;
        color: #0a192f;
        line-height: 1.4;
    }

    .pub-authors {
        font-size: 0.95rem;
        color: #555;
        margin: 0 0 4px 0;
    }

    .pub-venue {
        font-size: 0.9rem;
        color: #888;
        font-style: italic;
        margin: 0 0 16px 0;
    }

    .pub-links {
        display: flex;
        gap: 10px;
    }

    .pub-link {
        display: inline-flex;
        align-items: center;
        padding: 4px 12px;
        border-radius: 4px;
        font-size: 0.85rem;
        font-weight: 500;
        text-decoration: none;
        transition: all 0.2s ease;
    }

    .pub-link.doi {
        background-color: #eef6fc;
        color: #2b6cb0;
    }

    .pub-link.doi:hover {
        background-color: #2b6cb0;
        color: white;
    }

    .pub-link.pdf {
        background-color: #fce8e8;
        color: #c53030;
    }

    .pub-link.pdf:hover {
        background-color: #c53030;
        color: white;
    }

    /* Dark Mode Overrides */
    body.dark-mode .notion-container {
        background: #191919;
        color: rgba(255, 255, 255, 0.9);
    }
    body.dark-mode .notion-title, 
    body.dark-mode .notion-callout,
    body.dark-mode .pub-title {
        color: rgba(255, 255, 255, 0.9);
    }
    body.dark-mode .notion-callout {
        background: rgba(255, 255, 255, 0.055);
    }
    body.dark-mode .pub-card {
        background-color: #112240;
        border-color: #233554;
    }
    body.dark-mode .pub-card:hover {
        box-shadow: 0 10px 20px rgba(0,0,0,0.3);
        border-color: #64ffda;
    }
    body.dark-mode .pub-year {
        color: #233554;
    }
    body.dark-mode .pub-card:hover .pub-year {
        color: #64ffda;
    }
    body.dark-mode .pub-authors {
        color: #a8b2d1;
    }
    body.dark-mode .pub-venue {
        color: #8892b0;
    }
    body.dark-mode .pub-link.doi {
        background-color: rgba(43, 108, 176, 0.2);
        color: #90cdf4;
    }
    body.dark-mode .pub-link.doi:hover {
        background-color: #90cdf4;
        color: #1a202c;
    }
    body.dark-mode .pub-link.pdf {
        background-color: rgba(197, 48, 48, 0.2);
        color: #feb2b2;
    }
    body.dark-mode .pub-link.pdf:hover {
        background-color: #feb2b2;
        color: #1a202c;
    }

    @media (max-width: 768px) {
        .notion-content {
            padding: 0 20px;
        }
        .notion-title {
            font-size: 32px;
        }
        .pub-card {
            flex-direction: column;
        }
        .pub-year {
            margin-bottom: 8px;
            text-align: left;
        }
    }
</style>