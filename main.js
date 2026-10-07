'use strict';
const arabic = document.documentElement.lang === 'ar';
const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('#navigation');
toggle?.addEventListener('click', () => {
  const open = toggle.getAttribute('aria-expanded') !== 'true';
  toggle.setAttribute('aria-expanded', String(open));
  nav.classList.toggle('open', open);
});
nav?.addEventListener('click', event => {
  if (event.target.closest('a')) {
    nav.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
  }
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && nav?.classList.contains('open')) {
    nav.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.focus();
  }
});
const filterButtons = document.querySelectorAll('[data-filter]');
const projectItems = document.querySelectorAll('.filter-project');
const projectCount = document.querySelector('#project-count');
function filterProjects(category) {
  let count = 0;
  projectItems.forEach(item => {
    item.hidden = category !== 'all' && !item.dataset.category.split(/\s+/).includes(category);
    if (!item.hidden) count++;
  });
  filterButtons.forEach(button => button.setAttribute('aria-pressed', String(button.dataset.filter === category)));
  if (projectCount) projectCount.textContent = arabic ? `${count} مشروع` : `${count} projects`;
}
filterButtons.forEach(button => button.addEventListener('click', () => filterProjects(button.dataset.filter)));
if (projectItems.length) filterProjects('all');
const form = document.querySelector('#contact-form');
form?.addEventListener('submit', async event => {
  event.preventDefault();
  if (!form.reportValidity()) return;
  const button = form.querySelector('[type=submit]');
  const status = document.querySelector('#form-status');
  if (button.disabled) return;
  button.disabled = true;
  status.textContent = arabic ? 'جارٍ إرسال رسالتك…' : 'Sending your message…';
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 20000);
  try {
    const response = await fetch(form.action, {method: 'POST', body: new FormData(form), headers: {Accept: 'application/json'}, signal: controller.signal});
    const data = await response.json().catch(() => ({}));
    if (!response.ok || data.errors) throw new Error('Submission failed');
    form.reset();
    status.textContent = arabic ? 'تم استلام رسالتك بنجاح. سأرد عليك في أقرب وقت.' : 'Your message was received successfully. I’ll reply as soon as I can.';
  } catch (error) {
    status.textContent = arabic ? 'تعذّر إرسال الرسالة. جرّب مرة أخرى أو تواصل عبر واتساب أو البريد الإلكتروني.' : 'Your message could not be sent. Please try again, or contact me by WhatsApp or email.';
  } finally {
    clearTimeout(timeout);
    button.disabled = false;
  }
});
