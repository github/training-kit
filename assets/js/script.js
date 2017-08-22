var toggle = document.querySelector('.js-site-header-toggle');
var siteHeader = document.querySelector('.js-site-header');
toggle.addEventListener('click', function() {
  siteHeader.classList.toggle('open');
  toggle.setAttribute('aria-expanded', !toggle.getAttribute('aria-expanded'));
});
