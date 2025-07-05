document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Dark Mode Toggle
    const darkModeToggle = document.getElementById('darkModeToggle');
    const body = document.body;

    // Check for saved dark mode preference
    if (localStorage.getItem('darkMode') === 'enabled') {
        body.classList.add('dark-mode');
    }

    darkModeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        // Save preference to localStorage
        if (body.classList.contains('dark-mode')) {
            localStorage.setItem('darkMode', 'enabled');
        } else {
            localStorage.setItem('darkMode', 'disabled');
        }
    });

    // Particle Animation for Hero Section (simplified example using basic shapes)
    // For a more advanced effect, consider using a library like particles.js
    const heroSection = document.querySelector('.hero-section');
    if (heroSection) {
        for (let i = 0; i < 50; i++) {
            const particle = document.createElement('div');
            particle.classList.add('particle');
            particle.style.width = `${Math.random() * 5 + 2}px`;
            particle.style.height = particle.style.width;
            particle.style.backgroundColor = `rgba(100, 255, 218, ${Math.random() * 0.5 + 0.2})`; // Mint color with opacity
            particle.style.borderRadius = '50%';
            particle.style.position = 'absolute';
            particle.style.left = `${Math.random() * 100}%`;
            particle.style.top = `${Math.random() * 100}%`;
            particle.style.animation = `particleMove ${Math.random() * 10 + 5}s infinite ease-in-out alternate`;
            heroSection.appendChild(particle);
        }
    }
});

// Add particle animation keyframes to your style.scss or _utilities.scss
// You would put this in _utilities.scss within a style block
/*
@keyframes particleMove {
    0% {
        transform: translate(0, 0) scale(1);
        opacity: 1;
    }
    50% {
        transform: translate(${Math.random() * 200 - 100}px, ${Math.random() * 200 - 100}px) scale(${Math.random() * 0.5 + 0.7});
        opacity: 0.5;
    }
    100% {
        transform: translate(0, 0) scale(1);
        opacity: 1;
    }
}

.particle {
    position: absolute;
    // initial styles are set by JS
}
*/