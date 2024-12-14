document.addEventListener('DOMContentLoaded', function() {
    // Progress Circle Animation
    const circles = document.querySelectorAll('.progress-circle');
    circles.forEach(circle => {
        const progress = circle.getAttribute('data-progress');
        circle.style.setProperty('--progress', `${progress}%`);
    });

    // Navigation active state
    const navItems = document.querySelectorAll('.nav-item');
    const sections = document.querySelectorAll('section');

    // Scroll spy functionality
    function onScroll() {
        const scrollPos = window.pageYOffset || document.documentElement.scrollTop;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;

            if (scrollPos >= sectionTop - sectionHeight / 3) {
                const currentId = section.getAttribute('id');
                removeAllActive();
                addActiveClass(currentId);
            }
        });
    }

    function removeAllActive() {
        navItems.forEach(item => item.classList.remove('active'));
    }

    function addActiveClass(id) {
        const selector = `.nav-item[href="#${id}"]`;
        const element = document.querySelector(selector);
        if (element) {
            element.classList.add('active');
        }
    }

    window.addEventListener('scroll', onScroll);

    // Smooth scrolling
    navItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            targetSection.scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Explore button animation
    const exploreBtn = document.querySelector('.explore-btn');
    if (exploreBtn) {
        exploreBtn.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
        });

        exploreBtn.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    }

    // Add menu toggle functionality
    const menuToggle = document.querySelector('.menu-toggle');
    const rightNav = document.querySelector('.right-nav');

    menuToggle.addEventListener('click', function() {
        rightNav.classList.toggle('expanded');
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        if (!rightNav.contains(event.target)) {
            rightNav.classList.remove('expanded');
        }
    });

    // Typing effect
    const text = "I am a NextJs Developer";
    const typingText = document.querySelector('.typing-text');
    let i = 0;
    
    function type() {
        if (i < text.length) {
            typingText.textContent += text.charAt(i);
            i++;
            setTimeout(type, 100); // Adjust speed here (lower = faster)
        }
    }

    // Start typing effect
    type();
});