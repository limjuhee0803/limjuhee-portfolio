//menu
$('.hambuger').on('click', () => {
  $('.menu').toggleClass('change-menu');
  $('.hambuger').toggleClass('change-hambuger');
});

//menu
$('.hambuger').on('click', () => {
  $('.menu').toggleClass('change-menu');
  $('.hambuger').toggleClass('change-hambuger');
});

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

$('.up').on('click', () => {
  scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});

// 내 포트폴리오 바로가기
/*
$('.footer-butterfly').on('click', () => {
  $('.footer-butterfly').addClass('active-portfolio');
});
*/

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

//collection 클릭
// 버튼2
$('.collection .btn2').on('click', () => {
  $('.lookbook-left img').attr({
    src: `./images/lookbook-main2.png`,
    alt: 'lookbook-main2',
  });

  let idx = $(this).index();
  $('.lookbook-right img').eq(0).attr({
    src: `./images/lookbook2-1.png`,
    alt: 'lookbook-main2',
  });

  $('.lookbook-right img').eq(1).attr({
    src: `./images/lookbook2-2.png`,
    alt: 'lookbook-main2',
  });

  $('.lookbook-right img').eq(2).attr({
    src: `./images/lookbook2-3.png`,
    alt: 'lookbook-main2',
  });

  $('.lookbook-right img').eq(3).attr({
    src: `./images/lookbook2-4.png`,
    alt: 'lookbook-main2',
  });

  $('.lookbook-right img').eq(4).attr({
    src: `./images/lookbook2-5.png`,
    alt: 'lookbook-main2',
  });

  $('.lookbook-right img').eq(5).attr({
    src: `./images/lookbook2-6.png`,
    alt: 'lookbook-main2',
  });

  $('.lookbook-right img').eq(6).attr({
    src: `./images/lookbook2-7.png`,
    alt: 'lookbook-main2',
  });

  $('.lookbook-right img').eq(7).attr({
    src: `./images/lookbook2-8.png`,
    alt: 'lookbook-main2',
  });
  $('.lookbook-right img').eq(8).attr({
    src: `./images/lookbook2-9.png`,
    alt: 'lookbook-main2',
  });
  $('.lookbook-right img').eq(9).attr({
    src: `./images/lookbook2-10.png`,
    alt: 'lookbook-main2',
  });

  $('.collection .btn2').addClass('active');
  $('.collection .btn1').removeClass('active');
});
