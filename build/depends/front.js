$(function () {
    // ================================================
    //  HERO SLIDER
    // ================================================
    $('.hero-slider').owlCarousel({
        items: 1,
        nav: false,
        autoplay: true,
        dots: true,
        autoplayTimeout: 5000,
        animateOut: 'fadeOut',
        loop: true,
        dotsEach: true,
    });

    // ================================================
    //  TESTIMONIALS SLIDER
    // ================================================


    $('.customers-slide').owlCarousel({
        // nav: true,
        autoplay: true,
        margin: 5,
        center: true,
        dots: true,
        autoplayTimeout: 3000,
        items: 3,
        animateOut: 'fadeOut',
        loop: true,
        // responsive: {
        //     991: {
        //         items: 3
        //     }
        // }
    });

    // ================================================
    //  MODAL VIDEO
    // ================================================
    // new ModalVideo('.video-btn');
});
