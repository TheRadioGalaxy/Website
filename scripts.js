$(document).ready(function() {
  
  //$('#content').load('home.html');
  
  (function(){var ticker=document.createElement('script');
    ticker.type='text/javascript';
    ticker.async=true;
    ticker.src='//twitcker.com/ticker/radiogalaxyblog.js?background=000000&speed=6&count=50&tweet=0050ff&container=footer';
    (document.getElementsByTagName('head')[0]||document.getElementsByTagName('body')[0]).appendChild(ticker);
  })();
  
  $('.social-feed-container').socialfeed({
            // INSTAGRAM
            instagram:{
                accounts: ['@teslamotors','#teslamotors'],  //Array: Specify a list of accounts from which to pull posts
                limit: 2,                                    //Integer: max number of posts to load
                client_id: 'YOUR_INSTAGRAM_CLIENT_ID'       //String: Instagram client id (optional if using access token)
                access_token: 'YOUR_INSTAGRAM_ACCESS_TOKEN' //String: Instagram access token
            },

            // GENERAL SETTINGS
            length:400                                      //Integer: For posts with text longer than this length, show an ellipsis.
        });
    });
    
    
$('.social-feed-container').socialfeed({
    // FACEBOOK
    facebook:{
        accounts: ['@teslamotors','!teslamotors'],  //Array: Specify a list of accounts from which to pull wall posts
        limit: 2,                                   //Integer: max number of posts to load
        access_token: 'YOUR_FACEBOOK_ACCESS_TOKEN'  //String: "APP_ID|APP_SECRET"
    },

    // TWITTER
    twitter:{
        accounts: ['@spacex'],                      //Array: Specify a list of accounts from which to pull tweets
        limit: 2,                                   //Integer: max number of tweets to load
        consumer_key: 'YOUR_CONSUMER_KEY',          //String: consumer key. make sure to have your app read-only
        consumer_secret: 'YOUR_CONSUMER_SECRET_KEY',//String: consumer secret key. make sure to have your app read-only
     },

    // VK
    vk:{
        accounts: ['@125936523','#teslamotors'],    //Array: Specify a list of accounts from which to pull posts
        limit: 2,                                   //Integer: max number of posts to load
        source: 'all'                               //String: VK API post filter. Possible values: "Owner","Others","all","suggests"
    },

    // GOOGLEPLUS
    google:{
         accounts: ['#teslamotors'],                //Array: Specify a list of accounts from which to pull posts
         limit: 2,                                  //Integer: max number of posts to load
         access_token: 'YOUR_GOOGLE_PLUS_ACCESS_TOKEN'//String: G+ access token
     },

    // INSTAGRAM
    instagram:{
        accounts: ['@teslamotors','#teslamotors'],  //Array: Specify a list of accounts from which to pull posts
        limit: 2,                                   //Integer: max number of posts to load
        client_id: 'YOUR_INSTAGRAM_CLIENT_ID'       //String: Instagram client id (option if using access token)
        access_token: 'YOUR_INSTAGRAM_ACCESS_TOKEN' //String: Instagram access token
    },

    // PINTEREST

    pinterest:{
        accounts: ['@teslamotors/model-s','@me'],   //Array: Specify a list of accounts from which to pull posts
                                                    //@me to pull your pins
                                                    //@user/board to pull pins from a user board
        limit: 2,                                   //Integer: max number of posts to load
        access_token: 'YOUR_PINTEREST_ACCESS_TOKEN' //String: Pinterest client id
    },

    // RSS

    rss:{
        urls: ['http://teslapodcast.libsyn.com/rss'], //Array: Specifiy a list of rss feed from which to pull posts
        limit: 2                                      //Integer: max number of posts to load for each url
    }

    // GENERAL SETTINGS
    length:400,                                     //Integer: For posts with text longer than this length, show an ellipsis.
    show_media:true,                                //Boolean: if false, doesn't display any post images
    media_min_width: 300,                           //Integer: Only get posts with images larger than this value
    update_period: 5000,                            //Integer: Number of seconds before social-feed will attempt to load new posts.
    template: "tweet.html",                         //String: Filename used to get the post template.
    template_html:                                  //String: HTML used for each post. This overrides the 'template' filename option
    '<article class="twitter-post"> \
    <h4>{{=it.author_name}}</h4><p>{{=it.text}}  \
    <a href="{{=it.link}}" target="_blank">read more</a> \
    </p> \
    </article>',
    date_format: "ll",                              //String: Display format of the date attribute (see http://momentjs.com/docs/#/displaying/format/)
    moderation: function(content) {                 //Function: if returns false, template will have class hidden
        return  (content.text) ? content.text.indexOf('fuck') == -1 : true;
    },
    callback: function() {                          //Function: This is a callback function which is evoked when all the posts are collected and displayed
        console.log("All posts collected!");
    }
});
  
  
  
  
  
  
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
