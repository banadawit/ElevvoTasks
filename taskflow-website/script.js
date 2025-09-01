document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section, .hero');

    const observerOptions = {
        root: null, // viewport
        rootMargin: '0px',
        threshold: 0.1 // Trigger when 10% of the item is visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-visible');
                entry.target.classList.remove('animate-hidden');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        section.classList.add('animate-hidden'); // Add initial hidden state
        observer.observe(section);
    });
});
