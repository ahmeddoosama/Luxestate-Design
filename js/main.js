$(function () {
    var hasBeenTrigged = false;
    $(window).scroll(function () {
      if ($(this).scrollTop() >= 100 && !hasBeenTrigged) { // if scroll is greater/equal then 100 and hasBeenTrigged is set to false.
        $('.navbar').css("box-shadow", "0px 10px 15px 0px rgb(29 31 36 / 10%)");
        hasBeenTrigged = true;
      }else if ($(this).scrollTop() <= 100 && hasBeenTrigged) {
        $('.navbar').css("box-shadow", "none");
        hasBeenTrigged = false;
      }
    });
  });