$(document).ready(function() {
var aboveHeight = $('header').outerHeight();
    $(window).scroll(function(){
        if ($(window).scrollTop() > aboveHeight){
            $('.sticky-nav').addClass('fixed').css('top','0').next().css('padding-top','60px');
        } else {
            $('.sticky-nav').removeClass('fixed').next().css('padding-top','0');
        }
    });
});