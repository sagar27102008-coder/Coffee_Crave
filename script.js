/* ============================================
   COFFEE CRAVE — script.js
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

  // === STICKY NAVBAR ===
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 60);
  });

  // === HAMBURGER MENU ===
  const hamburger = document.getElementById('hamburger');
  const navLinks  = document.getElementById('navLinks');

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    navLinks.classList.toggle('open');
  });

  // Close nav on link click
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('open');
      navLinks.classList.remove('open');
    });
  });

  // === MENU TABS ===
  const tabBtns  = document.querySelectorAll('.tab-btn');
  const panels   = document.querySelectorAll('.menu-panel');

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      tabBtns.forEach(b => b.classList.remove('active'));
      panels.forEach(p => p.classList.remove('active'));

      btn.classList.add('active');
      const target = document.getElementById('tab-' + btn.dataset.tab);
      if (target) target.classList.add('active');
    });
  });

  // === SCROLL REVEAL ===
  const reveals = document.querySelectorAll(
    '.dish-card, .contact-card, .about-grid, .loc-card, .g-item, .menu-item'
  );

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  reveals.forEach((el, i) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(24px)';
    el.style.transition = `opacity 0.55s ease ${(i % 6) * 0.07}s, transform 0.55s ease ${(i % 6) * 0.07}s`;
    observer.observe(el);
  });

  // === ACTIVE NAV LINK ON SCROLL ===
  const sections = document.querySelectorAll('section[id]');
  window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;
    sections.forEach(sec => {
      const offset = sec.offsetTop - 100;
      const height = sec.offsetHeight;
      const id = sec.getAttribute('id');
      const link = document.querySelector(`.nav-links a[href="#${id}"]`);
      if (link) {
        link.style.color = scrollY >= offset && scrollY < offset + height
          ? 'var(--amber)'
          : '';
      }
    });
  });

});
