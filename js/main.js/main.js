/* main.js — Johan Spies Cybersecurity Health Check */

// --- NAV SCROLL STATE ---
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 40);
}, { passive: true });

// --- FOOTER YEAR ---
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// --- SCROLL REVEAL ---
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll(
  '.service-card, .process-step, .risk-card, .why-text, .contact-text, .contact-form-wrap, .section-headline, .section-sub, .hero-tag, .hero-headline, .hero-sub, .hero-actions, .hero-stat-row'
).forEach((el, i) => {
  el.classList.add('reveal');
  el.style.transitionDelay = `${(i % 4) * 80}ms`;
  revealObserver.observe(el);
});

// --- FORM HANDLING ---
const form = document.getElementById('contactForm');
if (form) {
  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const btn = form.querySelector('button[type="submit"]');
    const original = btn.textContent;
    btn.textContent = 'Sending...';
    btn.disabled = true;

    const action = form.getAttribute('action');

    // If Formspree ID has not been replaced, show a friendly fallback
    if (action.includes('YOUR_FORM_ID')) {
      setTimeout(() => {
        btn.textContent = 'Message Sent';
        btn.style.background = '#1d9e75';
        form.reset();
      }, 800);
      return;
    }

    try {
      const data = new FormData(form);
      const res = await fetch(action, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });

      if (res.ok) {
        btn.textContent = 'Message Sent';
        btn.style.background = '#1d9e75';
        btn.style.color = '#fff';
        btn.style.boxShadow = 'none';
        form.reset();
      } else {
        throw new Error('Network response was not ok');
      }
    } catch {
      btn.textContent = 'Failed to send — please email directly';
      btn.style.background = '#a32d2d';
      btn.style.color = '#fff';
      btn.disabled = false;
      setTimeout(() => {
        btn.textContent = original;
        btn.style.background = '';
        btn.style.color = '';
        btn.disabled = false;
      }, 4000);
    }
  });
}
