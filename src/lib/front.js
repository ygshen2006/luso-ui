$(function () {
  // ================================================
  //  HERO SLIDER
  // ================================================
  $(".hero-slider").owlCarousel({
    items: 1,
    nav: true,
    dots: false,
    loop: true,
  });

  // ================================================
  //  TESTIMONIALS SLIDER
  // ================================================
  $(".customers-slide").owlCarousel({
    items: 3,
    nav: true,
    dots: true,
    animateOut: "fadeOut",
    loop: true,
    responsive: {
      991: {
        items: 2,
      },
    },
  });
  // ================================================
  //  MODAL VIDEO
  // ================================================
  // new ModalVideo('.video-btn');
});
