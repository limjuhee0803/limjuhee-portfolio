/* swiper1 */

const mySwiper1 = new Swiper('.mySwiper1', {
    loop: true,
  
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    autoplay: {
      delay: 4000,
    },
  });

  // best model 
  $('.best-model-menu .btn1').on('click', function () {
    let idx = $(this).index();
    $('.best-model-img img').attr({
      src: `./images/bestmodel1.png`,
      alt: 'bestmodel',
    })
  });

  $('.best-model-menu .btn2').on('click', function () {
    let idx = $(this).index();
    $('.best-model-img img').attr({
      src: `./images/bestmodel2.png`,
      alt: 'bestmodel2',
    })
  });

  $('.best-model-menu .btn3').on('click', function () {
    let idx = $(this).index();
    $('.best-model-img img').attr({
      src: `./images/bestmodel3.png`,
      alt: 'bestmodel3',
    })
  });


  $('.best-model-menu .btn1').on('click', () => {
    $('.best-model-menu .btn1').addClass('active')
    $('.best-model-menu .btn2').removeClass('active')
    $('.best-model-menu .btn3').removeClass('active')
  });

  $('.best-model-menu .btn2').on('click', () => {
    $('.best-model-menu .btn2').addClass('active')
    $('.best-model-menu .btn1').removeClass('active')
    $('.best-model-menu .btn3').removeClass('active')
  });

  $('.best-model-menu .btn3').on('click', () => {
    $('.best-model-menu .btn3').addClass('active')
    $('.best-model-menu .btn1').removeClass('active')
    $('.best-model-menu .btn2').removeClass('active')
  });