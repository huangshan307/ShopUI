$(document).ready(function () {
    addClassTab();
    // navbar sticky
    showStickyNav();
    // CartButton
    cartButton();
    // owl-carousel slides show product
    showCarousel();
    /*** Contact Page ***/
    $("#contactBtn").click(function () {
        contactBtn();
    });
    // Toggle button
    $('.collapse').collapse({
        toggle: false,
    })
});

function showCarousel() {
    $('.owl-carousel-primary').owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        lazyLoad: true,
    });
    $('.recommend .owl-carousel').owlCarousel({
        items: 2,
        loop: true,
        nav: false,
        responsive: {
            1200: {
                autoplay: true,
                autoplayTimeout: 3000,
                autoplayHoverPause: true,
            }
        }
    });
    $('.category-show .owl-carousel').owlCarousel({
        items: 2,
        loop: true,
        nav: false,
        responsive: {
            1200: {
                autoplay: true,
                autoplayTimeout: 3000,
                autoplayHoverPause: true,
            }
        }
    });
    $('.owl-carousel').owlCarousel({
        items: 4,
        loop: true,
        stagePadding: 50,
        animateOut: 'slideOutDown',
        animateIn: 'flipInX',
        nav: true,
        margin: 10,
        responsive: {
            0: {
                items: 1,
            },
            768: {
                items: 2,
            },
            1200: {
                items: 4,
                autoplay: true,
                autoplayTimeout: 3000,
                autoplayHoverPause: true,
            }
        }
    });
}

function cartButton() {
    $('#cartMinus').click(function () {
        inputCart('minus');
    });
    $('#cartPlus').click(function () {
        inputCart('plus');
    });
}

function addClassTab() {
    $("#introduceBook .nav-link").click(function () {
        $('#introduceBook .nav-link').addClass("active");
        $("#infoBook .nav-link").removeClass("active");
    });
    $("#infoBook .nav-link").click(function () {
        $('#infoBook .nav-link').addClass("active");
        $("#introduceBook .nav-link").removeClass("active");
    });
}

function showStickyNav() {
    //lấy chiều cao của header
    var navHeight = $('header').outerHeight();
    var lastScrollTop = 0;
    //$('.sticky-nav').addClass('position-static');
    $(window).scroll(function () {
        // lấy vị trí thanh cuộn
        // var top = $(window).scrollTop();
        // lấy vị trí của thanh cuộn hiện tại
        var currentScrollTop = $(this).scrollTop();
        if (currentScrollTop < lastScrollTop) {
            //khi thanh cuộn trượt lên
            $('.sticky-nav').addClass('fixed-top bg-light');
        }
        else {
            //khi thanh cuộn trượt xuống
            $('.sticky-nav').removeClass('fixed-top bg-light');
        }
        if (currentScrollTop == 0) {
            $('.sticky-nav').removeClass('fixed-top bg-light');
        }
        lastScrollTop = currentScrollTop;
    });
}

function inputCart(action) {
    var cartAmount = $('#cartAmount');
    var cartErrorText = $('#cartErrorText');
    var numstr = cartAmount.val();
    var number = parseInt(numstr);
    if (numstr == "") {
        number = 1;
        cartAmount.val(number);
    }
    if (action == 'minus') {
        if (number <= 1) {
            cartErrorText.text('The amount must be greater than 1.');
            $('#myModal').modal('show');
            cartAmount.val(1);
        } else {
            number = parseInt(number) - 1;
            cartAmount.val(number);
        }

    } else if (action == 'plus') {
        if (number >= 30) {
            cartErrorText.text('The maximum amount is 30.');
            $('#myModal').modal('show');
        } else {
            number = parseInt(number) + 1;
            cartAmount.val(number);
        }
    }

}

function contactBtn() {
    var myEmail = $("#myEmail").val();
    var myPhoneNumber = $("#myPhoneNumber").val();
    if ((myEmail == "") || (myPhoneNumber == "")) {
        alert("Xin vui lòng nhập đầy đủ thông tin.");
    } else {
        if (!checkMail(myEmail))
            alert("Địa chỉ email của bạn không đúng định dạng, Xin vui lòng thử lại!");
        else if (!checkPhoneNumber(myPhoneNumber)) {
            alert("Số điện thoại của bạn không đúng định dạng, Xin vui lòng thử lại!");
        } else {
            $("#contactEmail").text(myEmail);
            $("#contactPhoneNumber").text(myPhoneNumber);
            $('#myInfoModal').modal('show');
        }
    }
}
function checkMail(mail) {
    var re = /([a-z*]|[A-Z*])+@+([a-z*]|[A-Z*])+.+([(com)|(vn)(com.vn)|(net)])/gi;
    return re.test(mail);
}
function checkPhoneNumber(phone) {
    var re = /(09|01[2|6|8|9])+([0-9]{8})\b/g;
    return re.test(phone);
}
