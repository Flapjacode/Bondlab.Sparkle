// Simple script for a smooth fade-in effect on scroll
window.addEventListener('scroll', () => {
  document.querySelectorAll('.card, .custom, .giftcards, .contact')
    .forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) {
        el.style.opacity = 1;
        el.style.transform = 'translateY(0)';
      }
    });
});
