// Gallery page specific functionality
document.addEventListener('DOMContentLoaded', function() {
    // Filter functionality
    const filterButtons = document.querySelectorAll('.filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Get filter value
            const filterValue = this.getAttribute('data-filter');
            
            // Filter gallery items
            galleryItems.forEach(item => {
                if (filterValue === 'all') {
                    item.style.display = 'block';
                } else {
                    if (item.classList.contains(filterValue)) {
                        item.style.display = 'block';
                    } else {
                        item.style.display = 'none';
                    }
                }
            });
        });
    });
    
    // Lightbox functionality
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.querySelector('.lightbox-image');
    const lightboxCaption = document.querySelector('.lightbox-caption');
    const lightboxTitle = document.querySelector('.lightbox-caption h3');
    const lightboxDesc = document.querySelector('.lightbox-caption p');
    const closeLightbox = document.querySelector('.close-lightbox');
    
    galleryItems.forEach(item => {
        item.addEventListener('click', function() {
            const image = this.querySelector('.gallery-image');
            const title = this.querySelector('.gallery-overlay h3').textContent;
            const description = this.querySelector('.gallery-overlay p').textContent;
            
            // For demo purposes, we'll use the placeholder text
            // In a real implementation, you would use actual image URLs
            lightboxImage.alt = title;
            lightboxTitle.textContent = title;
            lightboxDesc.textContent = description;
            
            // Show lightbox
            lightbox.classList.add('active');
            
            // Prevent body scrolling when lightbox is open
            document.body.style.overflow = 'hidden';
        });
    });
    
    // Close lightbox
    closeLightbox.addEventListener('click', function() {
        lightbox.classList.remove('active');
        document.body.style.overflow = 'auto';
    });
    
    // Close lightbox when clicking outside content
    lightbox.addEventListener('click', function(e) {
        if (e.target === lightbox) {
            lightbox.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });
    
    // Close lightbox with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && lightbox.classList.contains('active')) {
            lightbox.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });
    
    // Add animation to gallery items
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });
    
    galleryItems.forEach(item => {
        item.style.opacity = 0;
        item.style.transform = 'translateY(20px)';
        item.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(item);
    });
    
    console.log('Gallery page loaded successfully');
});