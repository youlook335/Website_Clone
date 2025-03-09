$(document).ready(function() {
  // Show or hide the button based on scroll position
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) { // Adjust the value as needed
      $('#back-to-top').fadeIn();
    } else {
      $('#back-to-top').fadeOut();
    }
  });

  // Smooth scroll to top
  $('#back-to-top').click(function() {
    $('html, body').animate({scrollTop: 0}, 800); // Adjust the animation speed as needed
    return false;
  });
});
