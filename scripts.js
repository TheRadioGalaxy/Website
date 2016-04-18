$(document).ready(function() {
  
  //$('#content').load('home.html');
  
  $('.icons img').hover(function(){
    $(this).css('width', '60px');
    $(this).css('height', '60px');
  }, function() {
    $(this).css('width', '50px');
    $(this).css('height', '50px');
  })
  
  console.log('change')
  
  $('#contactLink').click(function(){
    $('#content').load('contact.html');
  });
  
  $('#aboutLink').click(function(){
    $('#content').load('about.html');
  });
  
});
