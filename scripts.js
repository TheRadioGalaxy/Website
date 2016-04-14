$(document).ready(function() {
  
  //$('#content').load('home.html');
  
  $('#contactLink').click(function(){
    $('#content').load('contact.html');
  });
  
  $('#nav-bar-content ul li').hover(function(){
    $(this).css('background-color', 'rgb(150,100,200)');
  }, function() {
    $(this).css('background-color', '');
  });
  
  $('#contact div button').hover(function(){
    $(this).css('background-color', 'rgb(180,130,230)');
  }, function() {
    $(this).css('background-color', '');
  });


});
