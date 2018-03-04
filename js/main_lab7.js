$(document).ready(function () {
    var aboveHeight = $('#top-header').outerHeight();
    $(window).scroll(function () {
        if ($(window).scrollTop() > aboveHeight) {
            $('.sticky-nav').addClass('navbar-fixed fixed').css('top', '0').next().css('padding-top', '60px');
        } else {
            $('.sticky-nav').removeClass('navbar-fixed fixed').next().css('padding-top', '0');
        }
    });

    $(".button-collapse").sideNav();
    $('.parallax').parallax();
    $('.carousel.carousel-slider').carousel({fullWidth: true});
    $('.slider').slider();
});