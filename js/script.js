// ============================
// THE BLOOM REBELLION
// Core Site Behavior
// ============================

document.addEventListener('DOMContentLoaded', () => {

  // Nav background on scroll
  const nav = document.getElementById('siteNav');

  function handleNavScroll() {
    if (!nav) return;
    if (window.scrollY > 60) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  }

  window.addEventListener('scroll', handleNavScroll);
  handleNavScroll(); // run once on load in case page is reloaded mid-scroll

  // Fade-up elements when they enter the viewport
  const fadeEls = document.querySelectorAll('.fade-up');

  if (fadeEls.length > 0) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });

    fadeEls.forEach(el => observer.observe(el));
  }

});