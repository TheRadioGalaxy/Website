$(document).ready(function() {
  
  //$('#content').load('home.html');
  
  $('#contactLink').click(function(){
    $('#content').load('contact.html');
  });
  
  $('#aboutLink').click(function(){
    $('#content').load('about.html');
  });
  
  $('#nav-bar-content ul li').hover(function(){
    $(this).css('background-color', 'rgb(150,100,200)');
  }, function() {
    $(this).css('background-color', '');
  });
  
  $('#nav-bar-mini ul li').hover(function(){
    $(this).css('background-color', 'rgb(150,100,200)');
  }, function() {
    $(this).css('background-color', '');
  });
  
});
