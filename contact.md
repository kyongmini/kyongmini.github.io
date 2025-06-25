---
layout: default
title: Contact
---

<div class="container">
    <h1>Contact Me</h1>
    <p>Feel free to reach out for collaborations, inquiries, or just to say hello!</p>

    <div class="contact-info">
        <p><strong>Email:</strong> <a href="mailto:{{ site.email }}">{{ site.email }}</a></p>
        <p><strong>Office:</strong> [Your Office Location, if applicable]</p>
        <p><strong>Social Media:</strong></p>
        <ul>
            {% if site.twitter_username %}
            <li><a href="https://twitter.com/{{ site.twitter_username }}" target="_blank">Twitter/X</a></li>
            {% endif %}
            {% if site.linkedin_username %}
            <li><a href="https://www.linkedin.com/in/{{ site.linkedin_username }}" target="_blank">LinkedIn</a></li>
            {% endif %}
            {% if site.github_username %}
            <li><a href="https://github.com/{{ site.github_username }}" target="_blank">GitHub</a></li>
            {% endif %}
        </ul>
    </div>

    </div>

<style>
    .contact-info ul {
        list-style: none;
        padding: 0;
    }
    .contact-info li {
        margin-bottom: 0.5rem;
    }
    .contact-form {
        margin-top: 2rem;
        display: flex;
        flex-direction: column;
        max-width: 600px;
        background-color: #fff;
        padding: 2rem;
        border-radius: 8px;
        box-shadow: 0 2px 5px rgba(0,0,0,0.05);
    }
    body.dark-mode .contact-form {
        background-color: #1a1a1a;
    }
    .contact-form label {
        margin-bottom: 0.5rem;
        font-weight: 600;
    }
    .contact-form input,
    .contact-form textarea {
        padding: 0.8em;
        margin-bottom: 1.5rem;
        border: 1px solid #ddd;
        border-radius: 4px;
        font-family: $font-family-base;
        font-size: 1rem;
        background-color: #f9f9f9;
        color: #333;
    }
    body.dark-mode .contact-form input,
    body.dark-mode .contact-form textarea {
        background-color: #222;
        border-color: #444;
        color: #eee;
    }
    .contact-form button {
        align-self: flex-start;
    }
</style>