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
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    autoplay: true,
                    arrows: false,
                    centerMode: true,
                    centerPadding: "90px",
                    slidesToShow: 1,
                },
            },
        ],
    });

    $(".arrow i:nth-child(1)").on("click", function () {
        $(".menuSlide").slick("slickPrev");
    });

    $(".arrow i:nth-child(2)").on("click", function () {
        $(".menuSlide").slick("slickNext");
    });

    $(".inSlide").slick({
        arrows: false,
        dots: false,
        slidesToShow: 2,
        swipeToSlide: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    autoplay: true,
                    arrows: false,
                    slidesToShow: 1,
                },
            },
        ],
    });

    $(".inArrow i:nth-child(1)").on("click", function () {
        $(".inSlide").slick("slickPrev");
    });

    $(".inArrow i:nth-child(2)").on("click", function () {
        $(".inSlide").slick("slickNext");
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
