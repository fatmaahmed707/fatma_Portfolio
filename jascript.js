
document.addEventListener('DOMContentLoaded', function() {
    
    
    const themeBtn = document.getElementById("themeBtn");
    
   
    if (themeBtn) {
        
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            document.body.classList.add('dark');
            themeBtn.textContent = "☀️ Light Mode";
        }

        
        themeBtn.addEventListener("click", function() {
            document.body.classList.toggle("dark");
            
           
            const isDark = document.body.classList.contains("dark");
            themeBtn.textContent = isDark ? "☀️ Light Mode" : "🌙 Dark Mode";
            
            
            localStorage.setItem('theme', isDark ? 'dark' : 'light');
            
           
            themeBtn.style.transform = 'rotate(360deg)';
            setTimeout(() => {
                themeBtn.style.transform = 'rotate(0deg)';
            }, 300);
        });
    }

   
    const rows = document.querySelectorAll("tbody tr");
    
    if (rows.length > 0) {
        rows.forEach(row => {
            row.addEventListener("mouseenter", function() {
                this.style.backgroundColor = "#ffe6e6";
            });

            row.addEventListener("mouseleave", function() {
                this.style.backgroundColor = "";
            });
        });
    }

    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId !== '#') {
                e.preventDefault();
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });

   
    const sections = document.querySelectorAll('section');
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const sectionObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        sectionObserver.observe(section);
    });

   
    console.log('%c👋 Welcome to Fatma Ahmed\'s Portfolio!', 'color: #667eea; font-size: 20px; font-weight: bold;');
    console.log('%c🔒 This portfolio is protected. Please respect privacy.', 'color: #764ba2; font-size: 14px;');

});