// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Splash screen and loading animation
    const splashScreen = document.getElementById('splash-screen');
    const mainContent = document.getElementById('main-content');
    
    // Simulate loading time (3 seconds)
    setTimeout(() => {
        // Hide splash screen with fade out effect
        splashScreen.style.opacity = '0';
        splashScreen.style.transition = 'opacity 0.5s ease';
        
        // Show main content after splash screen fades out
        setTimeout(() => {
            splashScreen.style.display = 'none';
            mainContent.classList.remove('hidden');
            
            // Add entrance animation for main content
            mainContent.style.opacity = '0';
            mainContent.style.transform = 'translateY(20px)';
            mainContent.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
            
            setTimeout(() => {
                mainContent.style.opacity = '1';
                mainContent.style.transform = 'translateY(0)';
                
                // Initialize animations after main content is visible
                initAnimations();
            }, 100);
        }, 500);
    }, 3000);
    
    // Initialize all animations and interactive elements
    function initAnimations() {
        // Smooth scrolling for navigation links
        initSmoothScrolling();
        
        // Mobile menu toggle
        initMobileMenu();
        
        // Active navigation link highlighting
        initActiveNavHighlighting();
        
        // Neumorphic hover effects
        initNeumorphicEffects();
        
        // Contact form validation
        initContactForm();
        
        // Theme toggle
        initThemeToggle();
    }
    
    // Smooth scrolling for navigation links
    function initSmoothScrolling() {
        const navLinks = document.querySelectorAll('nav a, .footer-links a, .cta-buttons a');
        
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                // Check if the link is pointing to an anchor on the page
                const targetId = link.getAttribute('href');
                if (targetId.startsWith('#')) {
                    e.preventDefault();
                    
                    const targetElement = document.querySelector(targetId);
                    if (targetElement) {
                        // Smooth scroll to the target element
                        window.scrollTo({
                            top: targetElement.offsetTop - 80, // Adjust for fixed header
                            behavior: 'smooth'
                        });
                        
                        // Update URL without page reload
                        history.pushState(null, null, targetId);
                        
                        // Close mobile menu if open
                        const mobileMenu = document.querySelector('.nav-links');
                        if (mobileMenu.classList.contains('active')) {
                            mobileMenu.classList.remove('active');
                            document.querySelector('.mobile-menu-btn').classList.remove('active');
                        }
                    }
                }
            });
        });
    }
    
    // Mobile menu toggle
    function initMobileMenu() {
        const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
        const navLinks = document.querySelector('.nav-links');
        
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenuBtn.classList.toggle('active');
            navLinks.classList.toggle('active');
            
            // Add animation for mobile menu
            if (navLinks.classList.contains('active')) {
                navLinks.style.display = 'flex';
                navLinks.style.opacity = '0';
                navLinks.style.transform = 'translateY(-20px)';
                
                setTimeout(() => {
                    navLinks.style.opacity = '1';
                    navLinks.style.transform = 'translateY(0)';
                }, 10);
            } else {
                navLinks.style.opacity = '0';
                navLinks.style.transform = 'translateY(-20px)';
                
                setTimeout(() => {
                    navLinks.style.display = 'none';
                }, 300);
            }
        });
        
        // Add styles for mobile menu
        const style = document.createElement('style');
        style.textContent = `
            @media screen and (max-width: 1024px) {
                .nav-links {
                    position: absolute;
                    top: 80px;
                    left: 0;
                    width: 100%;
                    background-color: var(--bg-color);
                    flex-direction: column;
                    align-items: center;
                    padding: 20px 0;
                    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
                    display: none;
                    opacity: 0;
                    transform: translateY(-20px);
                    transition: opacity 0.3s ease, transform 0.3s ease;
                    z-index: 999;
                }
                
                .mobile-menu-btn.active span:nth-child(1) {
                    transform: rotate(45deg) translate(5px, 6px);
                }
                
                .mobile-menu-btn.active span:nth-child(2) {
                    opacity: 0;
                }
                
                .mobile-menu-btn.active span:nth-child(3) {
                    transform: rotate(-45deg) translate(5px, -6px);
                }
            }
        `;
        document.head.appendChild(style);
    }
    
    // Active navigation link highlighting
    function initActiveNavHighlighting() {
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('.nav-links a');
        
        // Update active link on scroll
        window.addEventListener('scroll', () => {
            let current = '';
            
            sections.forEach(section => {
                const sectionTop = section.offsetTop - 100;
                const sectionHeight = section.clientHeight;
                const scrollY = window.scrollY;
                
                // Check if at least 30% of the section is in view
                if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
                    current = section.getAttribute('id');
                    // Add visible class for animation
                    section.classList.add('visible');
                }
            });
            
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${current}`) {
                    link.classList.add('active');
                }
            });
        });
        
        // Trigger scroll event once on page load to set initial active link
        window.dispatchEvent(new Event('scroll'));
    }
    
    // Neumorphic hover effects
    function initNeumorphicEffects() {
        // Add subtle hover animation to neumorphic elements
        const neumorphicElements = document.querySelectorAll('.neumorphic:not(.neumorphic-toggle):not(.btn):not(.social-icon)');
        
        neumorphicElements.forEach(element => {
            element.addEventListener('mouseenter', () => {
                element.style.transform = 'translateY(-5px)';
            });
            
            element.addEventListener('mouseleave', () => {
                element.style.transform = 'translateY(0)';
            });
        });
    }
    
    // Contact form validation and submission
    function initContactForm() {
        const contactForm = document.getElementById('contact-form');
        
        if (contactForm) {
            contactForm.addEventListener('submit', (e) => {
                e.preventDefault();
                
                // Get form values
                const name = document.getElementById('name').value.trim();
                const email = document.getElementById('email').value.trim();
                const subject = document.getElementById('subject').value.trim();
                const message = document.getElementById('message').value.trim();
                
                // Simple validation
                if (name === '' || email === '' || subject === '' || message === '') {
                    showFormMessage('Please fill in all fields', 'error');
                    return;
                }
                
                // Email validation
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(email)) {
                    showFormMessage('Please enter a valid email address', 'error');
                    return;
                }
                
                // Simulate form submission
                const submitButton = contactForm.querySelector('button[type="submit"]');
                submitButton.disabled = true;
                submitButton.textContent = 'Sending...';
                
                // Simulate API call with timeout
                setTimeout(() => {
                    // Reset form
                    contactForm.reset();
                    
                    // Show success message
                    showFormMessage('Your message has been sent successfully!', 'success');
                    
                    // Reset button
                    submitButton.disabled = false;
                    submitButton.textContent = 'Send Message';
                }, 1500);
            });
        }
        
        // Function to show form messages
        function showFormMessage(message, type) {
            // Check if message element already exists
            let messageElement = document.querySelector('.form-message');
            
            // If not, create a new one
            if (!messageElement) {
                messageElement = document.createElement('div');
                messageElement.className = 'form-message';
                contactForm.appendChild(messageElement);
            }
            
            // Set message content and style
            messageElement.textContent = message;
            messageElement.className = `form-message ${type}`;
            
            // Add styles for message
            const style = document.createElement('style');
            style.textContent = `
                .form-message {
                    padding: 10px;
                    margin-top: 15px;
                    border-radius: var(--border-radius);
                    text-align: center;
                    font-weight: 500;
                }
                
                .form-message.success {
                    background-color: rgba(39, 174, 96, 0.1);
                    color: #27ae60;
                }
                
                .form-message.error {
                    background-color: rgba(231, 76, 60, 0.1);
                    color: #e74c3c;
                }
            `;
            document.head.appendChild(style);
            
            // Remove message after 5 seconds
            setTimeout(() => {
                messageElement.remove();
            }, 5000);
        }
    }
    
    // Theme toggle functionality
    function initThemeToggle() {
        const themeToggle = document.querySelector('.theme-toggle');
        const themeIcon = themeToggle.querySelector('i');
        const root = document.documentElement;
        
        // Check for saved theme preference
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            enableDarkMode();
        }
        
        themeToggle.addEventListener('click', () => {
            // Check current theme
            const currentTheme = root.style.getPropertyValue('--bg-color') === '#222' ? 'dark' : 'light';
            
            if (currentTheme === 'light') {
                enableDarkMode();
                localStorage.setItem('theme', 'dark');
            } else {
                enableLightMode();
                localStorage.setItem('theme', 'light');
            }
        });
        
        function enableDarkMode() {
            root.style.setProperty('--bg-color', '#222');
            root.style.setProperty('--card-bg', '#2d2d2d');
            root.style.setProperty('--text-color', '#f0f0f3');
            root.style.setProperty('--light-text', '#aaa');
            root.style.setProperty('--shadow-dark', 'rgba(0, 0, 0, 0.3)');
            root.style.setProperty('--shadow-light', 'rgba(255, 255, 255, 0.05)');
            themeIcon.className = 'fas fa-sun';
        }
        
        function enableLightMode() {
            root.style.setProperty('--bg-color', '#f0f0f3');
            root.style.setProperty('--card-bg', '#f0f0f3');
            root.style.setProperty('--text-color', '#333');
            root.style.setProperty('--light-text', '#666');
            root.style.setProperty('--shadow-dark', 'rgba(174, 174, 192, 0.2)');
            root.style.setProperty('--shadow-light', '#ffffff');
            themeIcon.className = 'fas fa-moon';
        }
    }
    
    // Add scroll reveal animations
    function addScrollRevealAnimations() {
        const revealElements = document.querySelectorAll('.neumorphic');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('reveal');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1
        });
        
        revealElements.forEach(element => {
            // Add initial styles
            element.style.opacity = '0';
            element.style.transform = 'translateY(20px)';
            element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            
            // Observe element
            observer.observe(element);
        });
        
        // Add CSS for revealed elements
        const style = document.createElement('style');
        style.textContent = `
            .neumorphic.reveal {
                opacity: 1 !important;
                transform: translateY(0) !important;
            }
        `;
        document.head.appendChild(style);
    }
    
    // Initialize scroll reveal animations
    addScrollRevealAnimations();
    
    // Resume viewer functionality
    function initResumeViewer() {
        const resumeLink = document.querySelector('a[href="assets/docs/resume.pdf"]');
        const cvLink = document.querySelector('a[href="assets/docs/cv.pdf"]');
        const pdfViewer = document.querySelector('.pdf-viewer');
        
        if (resumeLink && cvLink && pdfViewer) {
            // View resume when clicking on "View Resume" button
            resumeLink.addEventListener('click', (e) => {
                if (!e.target.hasAttribute('download')) {
                    e.preventDefault();
                    pdfViewer.src = 'assets/docs/resume.pdf';
                }
            });
            
            // View CV when clicking on "View CV" button
            cvLink.addEventListener('click', (e) => {
                if (!e.target.hasAttribute('download')) {
                    e.preventDefault();
                    pdfViewer.src = 'assets/docs/cv.pdf';
                }
            });
        }
    }
    
    // Initialize resume viewer
    initResumeViewer();

    // Scroll Animation
    const sections = document.querySelectorAll('.section');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    sections.forEach(section => {
        observer.observe(section);
    });

    // Make sure the scroll position is maintained when refreshing the page
    window.addEventListener('beforeunload', function() {
        localStorage.setItem('scrollPosition', window.scrollY);
    });
    
    // Restore scroll position on page load
    const savedScrollPosition = localStorage.getItem('scrollPosition');
    if (savedScrollPosition) {
        window.scrollTo(0, parseInt(savedScrollPosition));
        localStorage.removeItem('scrollPosition');
    }
}); 