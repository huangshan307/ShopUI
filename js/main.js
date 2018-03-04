$(document).ready(function () {
    var aboveHeight = $('header').outerHeight();
    $(window).scroll(function () {
        if ($(window).scrollTop() > aboveHeight) {
            $('.sticky-nav').addClass('fixed').css('top', '0').next().css('padding-top', '60px');
        } else {
            $('.sticky-nav').removeClass('fixed').next().css('padding-top', '0');
        }
    });
    // Popup Show video in product page
    $("#popupBtnClose").click(function () {
        $('.popup').removeClass('show');
        $('.popup').addClass('hide');
        $('body').removeClass('fullHeight');
    });
    $("#designFilm").click(function () {
        $('.popup').removeClass('hide');
        $('.popup').addClass('show');
        $('body').addClass('fullHeight');
        playPause();
    });
    // $("#mobileBtn.showBtn").click(function () {
    //     $('nav ul.main-menu').show();
    //     $('#mobileBtn.showBtn').removeClass('showBtn');
    //     $('#mobileBtn').addClass('hideBtn');
    // });
    // $("#mobileBtn.hideBtn").click(function () {
    //     $('nav ul.main-menu').hide();
    //     $('#mobileBtn.hideBtn').removeClass('hideBtn');
    //     $('#mobileBtn').addClass('showBtn');
    // });
    $('#mobileBtn').click(function () {
        showHideNavMenu();
    });
    

});



function showHideNavMenu() {
    btn = $('#mobileBtn');

    if (btn.attr('data-action') == 'show') {
        $('nav ul.main-menu').addClass('show bounceInDown');
        $('nav ul.main-menu').removeClass('hide bounceInUp');
        btn.attr('data-action', 'hide');
    } else if (btn.attr('data-action') == 'hide') {
        $('nav ul.main-menu').addClass('hide bounceInUp');
        $('nav ul.main-menu').removeClass('show bounceInDown');
        btn.attr('data-action', 'show');
    }
    
}

function playPause() {
    var myVideo = document.getElementById("video_1");
    if (myVideo.paused)
        myVideo.play();
    else
        myVideo.pause();
} 