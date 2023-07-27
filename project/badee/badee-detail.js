//menu
$('.hambuger').on('click', () => {
  $('.menu').toggleClass('change-menu');
  $('.hambuger').toggleClass('change-hambuger');
});

//header
let prevScroll = window.scrollY;

$(window).on('scroll', () => {
  let currentScroll = window.scrollY;

  if (prevScroll > currentScroll) {
    $('header').css({ top: 0 });
  } else {
    $('header').css({ top: -100 });
  }

  prevScroll = currentScroll;
  console.log('prevScroll:', prevScroll);
});

// 내 포트폴리오 바로가기
$('.footer-butterfly').hover(
  (e) => {
    $('.footer-butterfly').addClass('active-portfolio');
  },
  (e) => {
    $('.footer-butterfly').removeClass('active-portfolio');
  }
);

$('.footer-butterfly.active-portfolio').on('click', () => {
  $('.footer-butterfly.active-portfolio').attr(
    'href',
    'https://limjuhee0803.github.io/limjuhee-portfolio/index.html'
  );
});
// size 버튼 클릭
$('.main-rt .size > p').on('click', () => {
  $('.main-rt .size > p').toggleClass('active-size');
});

//hover 시 메인 이미지 변경
$('.main-lf img').hover(
  (e) => {
    $('.main-lf img').attr({
      src: `./images/detail-main2.png`,
      alt: 'detail-main2',
    });
  },
  (e) => {
    $('.main-lf img').attr({
      src: `./images/detail-main1.png`,
      alt: 'detail-main1',
    });
  }
);

//back to top
$('a[href="#"]').on('click', (evt) => {
  evt.preventDefault();
});

$('.up').on('click', () => {
  scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});

//product 슬라이드
/*
$('.product').on('click', () => {
  $('.product svg').toggleClass('active-product');
  $('.product-info').toggleClass('active-info');
});
*/
$('.product').on('click', () => {
  $('.product svg').toggleClass('active-product');
  $('.product-info').slideToggle();
});
