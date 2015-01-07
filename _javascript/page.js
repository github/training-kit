$(function() {
  $(window).bind("scroll", function() {
    if ($(this).scrollTop() > 460) {
      $("#floating-nav").fadeIn("fast");

    } else {
      $("#floating-nav").fadeOut("fast");
    }
  });
});
