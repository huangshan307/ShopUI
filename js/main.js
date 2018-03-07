$(document).ready(function () {
    $('.show-toolips').tooltip();

    $('#cartMinus').click(function () {
        inputCart('minus');
    });
    $('#cartPlus').click(function () {
        inputCart('plus');
    });

});

function inputCart(action) {
    var cartAmount = $('#cartAmount');
    var number = parseInt(cartAmount.val());
    if (number == NaN) {
        number = 1;
    }
    if (action == 'minus') {
        if (number <= 1) {
            alert("The amount must be greater than 1.");
            cartAmount.val(1);
        } else {
            number = parseInt(number) - 1;
            cartAmount.val(number);
        }
        
    } else if (action == 'plus') {
        if (number >= 30) {
            alert("The maximum amount is 30.");
        } else {
            number = parseInt(number) + 1;
            cartAmount.val(number);
        }
    }
}