var toggle = document.querySelector('.js-site-header-toggle');
var siteHeader = document.querySelector('.js-site-header');
toggle.addEventListener('click', function() {
  siteHeader.classList.toggle('open');
  toggle.setAttribute('aria-expanded', !toggle.getAttribute('aria-expanded'));
});


document.querySelectorAll('img[src*=".gif"]').forEach(img => {
  var anchor = document.createElement('a');
  anchor.href = img.src;
  anchor.target = "_blank";
  var image = document.createElement("img");
  image.setAttribute("src", img.src);
  image.setAttribute("alt", img.alt);
  anchor.appendChild(image);
  img.parentElement.replaceChild(anchor, img);

});
