window.onload = () => {

  var appendNumber = 3;
  var prependNumber = 1;

  var swiper = new Swiper('.swiper-container', {
      effect: 'cube',
      speed: 400,
      grabCursor: true,
      cubeEffect: {
        shadow: true,
        slideShadows: true,
        shadowOffset: 20,
        shadowScale: 0.94,
      },
      keyboard: {
        enabled: true,
      },
      pagination: {
        el: '.swiper-pagination',
      },
      autoplay: {
        delay: 4000,
        disableOnInteraction: false,
      },
  });

}
