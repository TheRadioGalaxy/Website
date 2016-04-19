$(document).ready(function() {
  
  //$('#content').load('home.html');
  
  $('#newMusicLink').click(function(){
    $('#content').load('newmusic.html');
  });
  
  $('#homeLink').click(function(){
    $('#content').load('home.html');
  });
  
  $('#contactLink').click(function(){
    $('#content').load('contact.html');
  });
  
  $('#aboutLink').click(function(){
    $('#content').load('about.html');
  });
  
});
