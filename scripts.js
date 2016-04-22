$(document).ready(function() {
  
  //$('#content').load('home.html');
  
  $('#eventsLink').click(function(){
    $('#content').load('events.html');
  });
  
  $('#newMusicLink').click(function(){
    $('#content').load('newmusic.html');
  });
  
  $('#newsLink').click(function(){
    $('#content').load('news.html');
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
