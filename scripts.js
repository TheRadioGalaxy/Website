$(document).ready(function() {
  
  $('#content').load('home.html');
  
  $('nav-bar-content ul li').hover(function(){
    $(this).css('background-color', 'blue');
  }, function() {
    $(this).css('background-color', '');
  });
  


});
