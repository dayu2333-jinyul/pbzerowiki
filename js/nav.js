document.getElementById('navToggle')?.addEventListener('click', function() {
  const menu = document.getElementById('navMenu');
  const expanded = this.getAttribute('aria-expanded') === 'true';
  this.setAttribute('aria-expanded', !expanded);
  menu.classList.toggle('open');
});
