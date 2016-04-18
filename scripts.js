$(document).ready(function() {
  
  $('#content').load('home.html');
  
  $('#contactLink').click(function(){
    $('#content').load('contact.html');
  });
  
  $('#aboutLink').click(function(){
    $('#content').load('about.html');
  });
  
  $('#nav-bar-content p').hover(function(){
    $(this).css('background-color', 'rgb(130,100,255)');
  }, function() {
    $(this).css('background-color', '');
  });
  
  $('#nav-bar-mini p').hover(function(){
    $(this).css('background-color', 'rgb(130,100,255)');
  }, function() {
    $(this).css('background-color', '');
  });
  
});
