'use strict';

$('.to-home').click(function() {
    $('body').animate({
        scrollTop: $('.header-wrapper').offset().top
    }, 800);
});

$('.to-about').click(function() {
    $('body').animate({
        scrollTop: $('.mission-wrapper').offset().top
    }, 800);
});

$('.to-contact').click(function() {
    $('body').animate({
        scrollTop: $('.contact-wrapper').offset().top
    }, 800);
});

$('.to-invest').click(function() {
    $('body').animate({
        scrollTop: $('.get-involved').offset().top
    }, 800);
});

$('.to-tool').click(function() {
    $('body').animate({
        scrollTop: $('.contact-wrapper').offset().top
    }, 800);
});

// var tumblr = require('tumblr.js');
// var client = tumblr.createClient({
//   consumer_key: '5c6QfJy1LCZNPY3W5T6axBQuuwcpu3Pzou4uT0iCtzmARo2lFk',
//   consumer_secret: 'pexLGnq7vw0JQSukZukGOy5XpDUOX86jdduGXTdziD0iOkKCNN',
//   token: 'Pt4wmXNN12xK9yuIQXVfoomZh1o2jm5nh8qoGxX59Wosve4dXu',
//   token_secret: 'U3xowPpEK3DyQsyre7c8zo8B0wIh3WX5fPfbvJ4Etu8iyFYwAD'
// });

$.ajax({
    url: "http://api.tumblr.com/v2/blog/matt-dougherty.tumblr.com/info?api_key=5c6QfJy1LCZNPY3W5T6axBQuuwcpu3Pzou4uT0iCtzmARo2lFk",
    dataType: 'jsonp',
    success: function(results){
        console.log(results); 
        $(".blog").text(results.response.blog.title); 
        $(".blog-desc").text(results.response.blog.description);
        $(".blog-name").text(results.response.blog.name); 
    }
});

