// Language Toggle Functionality
const languageToggle = document.getElementById('languageToggle');
let currentLanguage = 'en';

// Translation object with Spanish translations
const translations = {
    // Navigation
    'Home': 'Inicio',
    'About': 'Acerca de',
    'Education': 'Educación',
    'Experience': 'Experiencia',
    'Languages': 'Idiomas',
    'Projects': 'Proyectos',
    
    // Section titles
    'About Me': 'Acerca de Mí',
    'Professional Experience': 'Experiencia Profesional',
    'Get In Touch': 'Contáctame',
    'Follow Me': 'Sígueme',
    
    // Skills
    'Data Analysis': 'Análisis de Datos',
    'Innovation': 'Innovación',
    'Collaboration': 'Colaboración',
    'Data-driven insights and analytical problem-solving': 'Perspectivas basadas en datos y resolución analítica de problemas',
    'Creative problem-solving and innovative thinking': 'Resolución creativa de problemas y pensamiento innovador',
    'Strong teamwork and communication skills': 'Sólidas habilidades de trabajo en equipo y comunicación',
    
    // Languages section
    'Native/Fluent': 'Nativo/Fluido',
    'Fluent': 'Fluido',
    'Intermediate': 'Intermedio',
    'Professional working proficiency with excellent written and verbal communication skills.': 'Competencia profesional con excelentes habilidades de comunicación escrita y verbal.',
    'Native-level proficiency with excellent written and verbal communication skills in professional and personal contexts.': 'Competencia de nivel nativo con excelentes habilidades de comunicación escrita y verbal en contextos profesionales y personales.',
    'Good conversational French with ability to read and write effectively.': 'Buen francés conversacional con capacidad para leer y escribir efectivamente.',
    
    // Footer
    'I\'m always interested in new opportunities and collaborations.': 'Siempre estoy interesado en nuevas oportunidades y colaboraciones.',
    'All rights reserved.': 'Todos los derechos reservados.'
};

function translateElement(element, language) {
    const englishText = element.getAttribute('data-en');
    const spanishText = element.getAttribute('data-es');
    
    if (language === 'es' && spanishText) {
        if (element.tagName === 'H1' && element.querySelector('.highlight')) {
            element.innerHTML = spanishText.replace('Luis Martinez Ferraez', '<span class="highlight">Luis Martinez Ferraez</span>');
        } else {
            element.textContent = spanishText;
        }
    } else if (language === 'en' && englishText) {
        if (element.tagName === 'H1' && englishText.includes('Luis Martinez Ferraez')) {
            element.innerHTML = englishText.replace('Luis Martinez Ferraez', '<span class="highlight">Luis Martinez Ferraez</span>');
        } else {
            element.textContent = englishText;
        }
    }
}

function translateStaticText(language) {
    // Translate navigation
    document.querySelectorAll('.nav-link').forEach(link => {
        const text = link.textContent.trim();
        if (translations[text] && language === 'es') {
            link.textContent = translations[text];
        } else if (language === 'en') {
            // Reset to original English text
            const originalTexts = {
                'Inicio': 'Home',
                'Acerca de': 'About',
                'Educación': 'Education',
                'Experiencia': 'Experience',
                'Idiomas': 'Languages',
                'Proyectos': 'Projects'
            };
            if (originalTexts[text]) {
                link.textContent = originalTexts[text];
            }
        }
    });
    
    // Translate section titles
    document.querySelectorAll('.section-title').forEach(title => {
        const text = title.textContent.trim();
        if (translations[text] && language === 'es') {
            title.textContent = translations[text];
        } else if (language === 'en') {
            const originalTexts = {
                'Acerca de Mí': 'About Me',
                'Educación': 'Education',
                'Experiencia Profesional': 'Professional Experience',
                'Idiomas': 'Languages'
            };
            if (originalTexts[text]) {
                title.textContent = originalTexts[text];
            }
        }
    });
    
    // Translate other static elements
    document.querySelectorAll('h4, p, li').forEach(element => {
        const text = element.textContent.trim();
        if (translations[text] && language === 'es') {
            element.textContent = translations[text];
        }
    });
}

function toggleLanguage() {
    currentLanguage = currentLanguage === 'en' ? 'es' : 'en';
    
    // Translate elements with data attributes
    document.querySelectorAll('[data-en][data-es]').forEach(element => {
        translateElement(element, currentLanguage);
    });
    
    // Translate static text
    translateStaticText(currentLanguage);
    
    // Update document language attribute
    document.documentElement.lang = currentLanguage;
    
    // Save language preference
    localStorage.setItem('preferredLanguage', currentLanguage);
}

// Initialize language toggle
if (languageToggle) {
    languageToggle.addEventListener('change', toggleLanguage);
    
    // Check for saved language preference
    const savedLanguage = localStorage.getItem('preferredLanguage');
    if (savedLanguage === 'es') {
        languageToggle.checked = true;
        toggleLanguage();
    }
}

// Mobile Navigation Toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar background change on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// Animate elements on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-up');
        }
    });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('.skill-item, .timeline-item, .experience-card, .language-card, .project-card').forEach(el => {
    observer.observe(el);
});

// Language proficiency bar animation
const animateProficiencyBars = () => {
    const proficiencyBars = document.querySelectorAll('.proficiency-fill');
    proficiencyBars.forEach(bar => {
        const level = bar.getAttribute('data-level');
        setTimeout(() => {
            bar.style.width = level + '%';
        }, 500);
    });
};

// Trigger proficiency bar animation when languages section is visible
const languagesSection = document.getElementById('languages');
if (languagesSection) {
    const languagesObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateProficiencyBars();
                languagesObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    languagesObserver.observe(languagesSection);
}

// Project filter functionality (for projects page)
const filterButtons = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

if (filterButtons.length > 0) {
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            button.classList.add('active');
            
            const filterValue = button.getAttribute('data-filter');
            
            projectCards.forEach(card => {
                if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
                    card.style.display = 'block';
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'scale(1)';
                    }, 100);
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'scale(0.8)';
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 300);
                }
            });
        });
    });
}

// Counter animation for stats
const animateCounters = () => {
    const counters = document.querySelectorAll('.stat-number');
    
    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-count'));
        const suffix = counter.getAttribute('data-suffix') || '';
        const increment = target / 100;
        let count = 0;
        
        const updateCounter = () => {
            if (count < target) {
                count += increment;
                counter.textContent = Math.ceil(count);
                requestAnimationFrame(updateCounter);
            } else {
                counter.textContent = target + suffix;
            }
        };
        
        updateCounter();
    });
};

// Trigger counter animation when stats section is visible
const statsSection = document.querySelector('.project-stats');
if (statsSection) {
    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounters();
                statsObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    statsObserver.observe(statsSection);
}

// Parallax effect for hero section (reduced effect to prevent overlap)
window.addEventListener('scroll', () => {
    const heroSection = document.querySelector('.hero');
    if (heroSection) {
        const scrolled = window.pageYOffset;
        const parallax = scrolled * 0.2; // Reduced from 0.5 to 0.2
        heroSection.style.transform = `translateY(${parallax}px)`;
        
        // Prevent hero from overlapping other sections
        if (scrolled > window.innerHeight * 0.8) {
            heroSection.style.transform = `translateY(${window.innerHeight * 0.16}px)`;
        }
    }
});

// Typing animation for hero title
const typeWriter = (element, text, speed = 100) => {
    let i = 0;
    element.innerHTML = '';
    
    const type = () => {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    };
    
    type();
};

// Initialize typing animation on page load
window.addEventListener('load', () => {
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const originalText = heroTitle.textContent;
        typeWriter(heroTitle, originalText, 80);
    }
});

// Form submission handling (if contact form exists)
const handleFormSubmission = () => {
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            // Add your form submission logic here
            alert('Thank you for your message! I\'ll get back to you soon.');
            form.reset();
        });
    });
};

handleFormSubmission();

// Active navigation link highlighting
const updateActiveNavLink = () => {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link[href^="#"]');
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
};

window.addEventListener('scroll', updateActiveNavLink);

// Lazy loading for images
const lazyImages = document.querySelectorAll('img[data-src]');
const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            img.classList.remove('lazy');
            imageObserver.unobserve(img);
        }
    });
});

lazyImages.forEach(img => imageObserver.observe(img));

// Dark mode toggle (optional feature)
const toggleDarkMode = () => {
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    if (darkModeToggle) {
        darkModeToggle.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
            localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
        });
        
        // Check for saved dark mode preference
        const savedDarkMode = localStorage.getItem('darkMode');
        if (savedDarkMode === 'true') {
            document.body.classList.add('dark-mode');
        }
    }
};

toggleDarkMode();

// Smooth page transitions
const smoothPageTransition = () => {
    const pageLinks = document.querySelectorAll('a[href$=".html"]');
    pageLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const href = link.getAttribute('href');
            
            // Add fade out effect
            document.body.style.opacity = '0';
            
            setTimeout(() => {
                window.location.href = href;
            }, 300);
        });
    });
};

// Initialize page with fade in effect
window.addEventListener('load', () => {
    document.body.style.opacity = '1';
    document.body.style.transition = 'opacity 0.3s ease';
});

smoothPageTransition();

// Performance optimization: Debounce scroll events
const debounce = (func, wait) => {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
};

// Apply debouncing to scroll-heavy functions
const debouncedScrollHandler = debounce(() => {
    updateActiveNavLink();
}, 10);

window.addEventListener('scroll', debouncedScrollHandler);

// Accessibility improvements
const improveAccessibility = () => {
    // Add focus indicators for keyboard navigation
    const focusableElements = document.querySelectorAll('a, button, input, textarea, select');
    focusableElements.forEach(element => {
        element.addEventListener('focus', () => {
            element.style.outline = '2px solid var(--primary-color)';
            element.style.outlineOffset = '2px';
        });
        
        element.addEventListener('blur', () => {
            element.style.outline = 'none';
        });
    });
    
    // Add skip to main content link
    const skipLink = document.createElement('a');
    skipLink.href = '#main-content';
    skipLink.textContent = 'Skip to main content';
    skipLink.classList.add('skip-link');
    skipLink.style.cssText = `
        position: absolute;
        top: -40px;
        left: 6px;
        background: var(--primary-color);
        color: white;
        padding: 8px;
        text-decoration: none;
        border-radius: 4px;
        z-index: 1001;
        transition: top 0.3s;
    `;
    
    skipLink.addEventListener('focus', () => {
        skipLink.style.top = '6px';
    });
    
    skipLink.addEventListener('blur', () => {
        skipLink.style.top = '-40px';
    });
    
    document.body.insertBefore(skipLink, document.body.firstChild);
};

improveAccessibility();

// Initialize all features when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    console.log('Portfolio website loaded successfully!');
    
    // Add any initialization code here
    const mainContent = document.querySelector('main') || document.querySelector('.hero');
    if (mainContent) {
        mainContent.id = 'main-content';
    }
});

// Error handling for missing elements
const safeQuerySelector = (selector) => {
    try {
        return document.querySelector(selector);
    } catch (error) {
        console.warn(`Element not found: ${selector}`);
        return null;
    }
};

// Export functions for testing (if needed)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        typeWriter,
        debounce,
        animateCounters
    };
}
