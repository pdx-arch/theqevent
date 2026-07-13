const header = document.querySelector('[data-header]');
const toggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.primary-nav');

toggle?.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('is-open');
  toggle.setAttribute('aria-expanded', isOpen);
});

nav?.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
  nav.classList.remove('is-open');
  toggle?.setAttribute('aria-expanded', 'false');
}));

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach((item) => observer.observe(item));

document.querySelector('[data-year]').textContent = new Date().getFullYear();

const countObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    const node = entry.target;
    const total = Number(node.dataset.count);
    if (!total) return;
    let current = 0;
    const tick = () => {
      current += Math.max(1, Math.ceil(total / 36));
      node.textContent = Math.min(current, total);
      if (current < total) requestAnimationFrame(tick);
    };
    tick();
    countObserver.unobserve(node);
  });
}, { threshold: 0.8 });
document.querySelectorAll('[data-count]').forEach((node) => countObserver.observe(node));
