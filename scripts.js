$(document).ready(function() {
  
  //$('#content').load('home.html');
  
  console.log('change')
  
  $('#contactLink').click(function(){
    $('#content').load('contact.html');
  });
  
  $('#aboutLink').click(function(){
    $('#content').load('about.html');
  });
  
});
