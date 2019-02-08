$(document).ready(function() {
    $('.main_slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 3000,
    });
    $('.products_slider').slick({
        slidesToShow: 3,
        slidesToScroll:1,
        rows: 2,
        lazyLoad: 'ondemand',
        responsive: [

        {
            breakpoint: 749,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                rows: 1,
            }
        },

        {
            breakpoint: 1169,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                rows: 2,
            }
        },
        ] 
    });
});