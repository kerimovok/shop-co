$(document).ready(function () {
    // SCROLL TO TOP
    var windowH = $(window).height() / 2;

    $(window).on("scroll", function () {
        if ($(this).scrollTop() > windowH) {
            $("#scroll-up").css("opacity", "1");
        } else {
            $("#scroll-up").css("opacity", "0");
        }
    });

    // REMAINDER
    $("#close-remainder").on("click", function () {
        $(".remainder").addClass("fadeOut");
    });
});
