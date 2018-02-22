$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        loop: true,
        nav: true,
        navText:['<','>'],
        autoplay:true,
        autoplayTimeout:2000,
        margin: 10,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            960: {
                items: 5
            },
            1200: {
                items: 6
            }
        }
    });
});
