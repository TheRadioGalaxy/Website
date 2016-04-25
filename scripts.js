$(document).ready(function() {
  
  //$('#content').load('home.html');
  
  (function(){var ticker=document.createElement('script');
    ticker.type='text/javascript';
    ticker.async=true;
    ticker.src='//twitcker.com/ticker/radiogalaxyblog.js?background=000000&speed=6&count=50&tweet=0050ff&container=footer';
    (document.getElementsByTagName('head')[0]||document.getElementsByTagName('body')[0]).appendChild(ticker);
  })();

  
  $('#interviewsLink').click(function(){
    $('#content').load('interviews.html')
  })
  
  $('#reviewsLink').click(function(){
    $('#content').load('reviews.html')
  })
  
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
