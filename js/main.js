//Function for add box-shadow on navbar if scroll is greater||equal then 100
$(function () {
    var hasBeenTrigged = false;
    $(window).scroll(function () {
        if ($(this).scrollTop() >= 100 && !hasBeenTrigged) {
            $('.navbar').css("box-shadow", "0px 10px 15px 0px rgb(29 31 36 / 10%)");
            hasBeenTrigged = true;
        } else if ($(this).scrollTop() <= 100 && hasBeenTrigged) {
            $('.navbar').css("box-shadow", "none");
            hasBeenTrigged = false;
        }
    });
});

//counter number
$('.count').each(function () {
    $(this).prop('Counter',0).animate({
        Counter: $(this).text()
    }, {
        duration: 6000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
});