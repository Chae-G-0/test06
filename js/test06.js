$(function () {
    $(".mainSlide").slick({
        autoplay: true,
        arrows: false,
        dots: false,
        pauseOnFocus: false,
        pauseOnHover: false,
    });

    $(".menuSlide").slick({
        autoplay: false,
        arrows: false,
        dots: false,
        centerMode: true,
        centerPadding: "450px",
        sliedToShow: 3,
        pauseOnFocus: false,
        pauseOnHover: false,
        swipeToSlide: true,
    });

    $(".inSlide").slick({
        arrows: false,
        dots: false,
        centerMode: true,
        centerPadding: "600px",
        sliedToShow: 3,
    });

    $(".tabMenu>li>a").on("click", function (e) {
        e.preventDefault();
        var idx = $(this).parent().index();
        $(".tabContent>li").removeClass("on");
        $(".tabContent>li").eq(idx).addClass("on");
        $(".tabMenu>li").removeClass("on");
        $(this).parent().addClass("on");
    });
});
