$('.owl-carousel').owlCarousel({
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
            items: 1
        },
        767: {
            items: 2
        },
        1200: {
            items: 3
        }
    }
})