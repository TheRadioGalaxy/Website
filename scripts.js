$(document).ready(function() {
  
  $('#content').load('home.html');
  
  $('#contactLink').click(function(){
    $('#content').load('contact.html');
  });
  
  $('#aboutLink').click(function(){
    $('#content').load('about.html');
  });
  console.log('change')
  $('.gutterHome').hover(function(){
    $(this).css('background-color', 'rgba(100,100,255, .3)');
  }, function() {
    $(this).css('background-color', '');
  });
  
  $('#nav-bar-content p').hover(function(){
    $(this).css('background-color', 'rgb(100,100,255)');
  }, function() {
    $(this).css('background-color', '');
  });
  
  $('#nav-bar-mini p').hover(function(){
    $(this).css('background-color', 'rgb(100,100,255)');
  }, function() {
    $(this).css('background-color', '');
  });
  
});
