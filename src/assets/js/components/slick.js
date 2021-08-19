var portfolio = $("#portfolio");

portfolio.slick({
    arrows: false,
    dots: true,
    speed: 800,
    slidesToShow: 2,
    slidesToScroll: 2,
    responsive: [
        {
        breakpoint: 990,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
        }
    }
    ],
});

$("#portfolio-arrow-prev").on("click", function(event) {
    event.preventDefault();

    portfolio.slick('slickPrev');
});

$("#portfolio-arrow-next").on("click", function(event) {
    event.preventDefault();

    portfolio.slick('slickNext');
});



