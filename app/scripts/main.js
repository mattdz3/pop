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