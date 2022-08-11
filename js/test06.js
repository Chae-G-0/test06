$(function () {
    $(".mainSlide").slick({
        autoplay: true,
        arrows: false,
        dots: false,
        pauseOnFocus: false,
        pauseOnHover: false,
    });

    $(".menuSlide").slick({
        // autoplay: true,
        arrows: false,
        dots: false,
        slidesToShow: 3,
        pauseOnFocus: false,
        pauseOnHover: false,
        swipeToSlide: true,
    });

    $(".inSlide").slick({
        arrows: false,
        dots: false,
        slidesToShow: 2,
        swipeToSlide: true,
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
