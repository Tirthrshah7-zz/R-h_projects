var owl = $('.owl-carousel');
owl.owlCarousel({
    loop: true,
    margin: 20,
    nav: true,
    autoplay: true,
    dots: true,
    animateOut: 'fadeOut',
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1,
            margin: 10
        },
        767: {
            items: 2
        },
        1200: {
            items: 3
        }
    }
});
owl.on('mousewheel', '.owl-stage', function (e) {
    if (e.deltaY > 0) {
        owl.trigger('next.owl');
    } else {
        owl.trigger('prev.owl');
    }
    e.preventDefault();
});