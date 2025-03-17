// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Splash Screen Animation
    setTimeout(function() {
        document.querySelector('.splash-screen').style.opacity = '0';
        document.querySelector('.splash-screen').style.visibility = 'hidden';
        document.querySelector('.main-content').classList.remove('hidden');
        
        // Trigger fade-in animations
        const fadeElements = document.querySelectorAll('.fade-in');
        fadeElements.forEach(element => {
            element.classList.add('visible');
        });
    }, 3000);
    
    // Navbar Scroll Effect
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        // Activate nav links based on scroll position
        const sections = document.querySelectorAll('section[id]');
        let scrollY = window.pageYOffset;
        
        sections.forEach(current => {
            const sectionHeight = current.offsetHeight;
            const sectionTop = current.offsetTop - 100;
            const sectionId = current.getAttribute('id');
            
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                document.querySelector('.nav-link[href*=' + sectionId + ']').classList.add('active');
            } else {
                document.querySelector('.nav-link[href*=' + sectionId + ']').classList.remove('active');
            }
        });
        
        // Scroll animations
        const animElements = document.querySelectorAll('.fade-in');
        animElements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementPosition < windowHeight - 100) {
                element.classList.add('visible');
            }
        });
    });
    
    // Theme Toggle
    const themeToggle = document.querySelector('.theme-toggle');
    themeToggle.addEventListener('click', function() {
        document.body.classList.toggle('light-mode');
        
        if (document.body.classList.contains('light-mode')) {
            themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
        } else {
            themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
        }
    });
    
    // 3D Tech Sphere
    createTechSphere();
});

// Function to create the 3D tech sphere
function createTechSphere() {
    const container = document.querySelector('.sphere-container');
    if (!container) return;
    
    const techWords = [
        'Python', 'SQL', 'Data Engineering', 'ETL', 'Airflow', 'Spark', 'Kafka', 
        'BigQuery', 'AWS', 'Azure', 'ML', 'AI', 'NLP', 'RAG', 'LLM', 'Power BI', 
        'Tableau', 'Docker', 'Hadoop', 'DBT', 'Airbyte', 'Data Pipeline', 'ChromaDB'
    ];
    
    const radius = 150;
    const numWords = techWords.length;
    
    for (let i = 0; i < numWords; i++) {
        // Calculate position on sphere
        const phi = Math.acos(-1 + (2 * i) / numWords);
        const theta = Math.sqrt(numWords * Math.PI) * phi;
        
        const x = radius * Math.cos(theta) * Math.sin(phi);
        const y = radius * Math.sin(theta) * Math.sin(phi);
        const z = radius * Math.cos(phi);
        
        // Create word element
        const word = document.createElement('div');
        word.className = 'tech-word';
        word.textContent = techWords[i];
        word.style.position = 'absolute';
        word.style.transform = `translate3d(${x}px, ${y}px, ${z}px)`;
        word.style.opacity = (z + radius) / (2 * radius);
        word.style.fontSize = `${(z + radius) / (2 * radius) * 16 + 8}px`;
        word.style.color = `rgba(${79 + (z + radius) / (2 * radius) * 20}, ${70 + (z + radius) / (2 * radius) * 30}, ${229}, ${(z + radius) / (2 * radius)})`;
        
        container.appendChild(word);
    }
    
    // Animate the sphere
    let angle = 0;
    function animateSphere() {
        angle += 0.003;
        const words = document.querySelectorAll('.tech-word');
        
        words.forEach((word, index) => {
            const phi = Math.acos(-1 + (2 * index) / numWords);
            const theta = Math.sqrt(numWords * Math.PI) * phi + angle;
            
            const x = radius * Math.cos(theta) * Math.sin(phi);
            const y = radius * Math.sin(theta) * Math.sin(phi);
            const z = radius * Math.cos(phi);
            
            word.style.transform = `translate3d(${x}px, ${y}px, ${z}px)`;
            word.style.opacity = (z + radius) / (2 * radius);
            word.style.fontSize = `${(z + radius) / (2 * radius) * 16 + 8}px`;
            word.style.color = `rgba(${79 + (z + radius) / (2 * radius) * 20}, ${70 + (z + radius) / (2 * radius) * 30}, ${229}, ${(z + radius) / (2 * radius)})`;
        });
        
        requestAnimationFrame(animateSphere);
    }
    
    animateSphere();
}

// Resume download functionality
const downloadBtn = document.querySelector('.btn.primary.download');
if (downloadBtn) {
    downloadBtn.addEventListener('click', function() {
        const link = document.createElement('a');
        link.href = 'assets/resume.pdf';
        link.download = 'Jibin_Baby_Resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    });
}