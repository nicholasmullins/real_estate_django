const date = new Date();
document.querySelector('.year').innerHTML = date.getFullYear();

// Custom JS to get error message to disappear on its own

setTimeout(function() {
  $('#message').fadeOut('slow');
}, 3000);
