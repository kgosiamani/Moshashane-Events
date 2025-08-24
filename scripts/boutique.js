// Boutique page specific functionality
document.addEventListener('DOMContentLoaded', function() {
    // Add smooth scrolling for collection navigation
    const collectionLinks = document.querySelectorAll('a[href^="#"]');
    
    collectionLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            if (this.getAttribute('href').startsWith('#') && this.getAttribute('href') !== '#') {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 100,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
    
    // Add animation to product cards
    const productCards = document.querySelectorAll('.product-card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });
    
    productCards.forEach(card => {
        card.style.opacity = 0;
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(card);
    });
    
    // Add inquiry button functionality
    const inquiryButtons = document.querySelectorAll('.product-card .btn-primary');
    
    inquiryButtons.forEach(button => {
        button.addEventListener('click', function() {
            const productName = this.closest('.product-card').querySelector('h3').textContent;
            alert(`Thank you for your interest in ${productName}. We will contact you shortly to discuss your inquiry.`);
        });
    });
    
    console.log('Boutique page loaded successfully');
});