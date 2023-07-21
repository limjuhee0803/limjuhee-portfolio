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
// 버튼1
$('.collection .btn1').on('click', () => {
  $('.lookbook-left img').attr({
    src: `./images/lookbook-main1.png`,
    alt: 'lookbook-main2',
  });

  let idx = $(this).index();
  $('.lookbook-right img').eq(0).attr({
    src: `./images/lookbook1.png`,
    alt: 'lookbook-main2',
  });

  $('.lookbook-right img').eq(1).attr({
    src: `./images/lookbook2.png`,
    alt: 'lookbook-main2',
  });

  $('.lookbook-right img').eq(2).attr({
    src: `./images/lookbook3.png`,
    alt: 'lookbook-main2',
  });

  $('.lookbook-right img').eq(3).attr({
    src: `./images/lookbook4.png`,
    alt: 'lookbook-main2',
  });

  $('.lookbook-right img').eq(4).attr({
    src: `./images/lookbook5.png`,
    alt: 'lookbook-main2',
  });

  $('.lookbook-right img').eq(5).attr({
    src: `./images/lookbook6.png`,
    alt: 'lookbook-main2',
  });

  $('.lookbook-right img').eq(6).attr({
    src: `./images/lookbook7.png`,
    alt: 'lookbook-main2',
  });

  $('.lookbook-right img').eq(7).attr({
    src: `./images/lookbook8.png`,
    alt: 'lookbook-main2',
  });
  $('.lookbook-right img').eq(8).attr({
    src: `./images/lookbook9.png`,
    alt: 'lookbook-main2',
  });
  $('.lookbook-right img').eq(9).attr({
    src: `./images/lookbook10.png`,
    alt: 'lookbook-main2',
  });

  $('.collection .btn1').addClass('active');
  $('.collection .btn2').removeClass('active');
  $('.collection .btn3').removeClass('active');
  $('.collection .btn4').removeClass('active');
  $('.collection .btn5').removeClass('active');
  $('.collection .btn6').removeClass('active');
  $('.collection .btn7').removeClass('active');
  $('.collection .btn8').removeClass('active');
});
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
  $('.collection .btn3').removeClass('active');
  $('.collection .btn4').removeClass('active');
  $('.collection .btn5').removeClass('active');
  $('.collection .btn6').removeClass('active');
  $('.collection .btn7').removeClass('active');
  $('.collection .btn8').removeClass('active');
});

// 버튼3
$('.collection .btn3').on('click', () => {
  $('.lookbook-left img').attr({
    src: `./images/lookbook-main3.png`,
    alt: 'lookbook-main2',
  });

  let idx = $(this).index();
  $('.lookbook-right img').eq(0).attr({
    src: `./images/lookbook3-1.png`,
    alt: 'lookbook-main2',
  });

  $('.lookbook-right img').eq(1).attr({
    src: `./images/lookbook3-2.png`,
    alt: 'lookbook-main2',
  });

  $('.lookbook-right img').eq(2).attr({
    src: `./images/lookbook3-3.png`,
    alt: 'lookbook-main2',
  });

  $('.lookbook-right img').eq(3).attr({
    src: `./images/lookbook3-4.png`,
    alt: 'lookbook-main2',
  });

  $('.lookbook-right img').eq(4).attr({
    src: `./images/lookbook3-5.png`,
    alt: 'lookbook-main2',
  });

  $('.lookbook-right img').eq(5).attr({
    src: `./images/lookbook3-6.png`,
    alt: 'lookbook-main2',
  });

  $('.lookbook-right img').eq(6).attr({
    src: `./images/lookbook3-7.png`,
    alt: 'lookbook-main2',
  });

  $('.lookbook-right img').eq(7).attr({
    src: `./images/lookbook3-8.png`,
    alt: 'lookbook-main2',
  });
  $('.lookbook-right img').eq(8).attr({
    src: `./images/lookbook3-9.png`,
    alt: 'lookbook-main2',
  });
  $('.lookbook-right img').eq(9).attr({
    src: `./images/lookbook3-10.png`,
    alt: 'lookbook-main2',
  });

  $('.collection .btn3').addClass('active');
  $('.collection .btn1').removeClass('active');
  $('.collection .btn2').removeClass('active');
  $('.collection .btn4').removeClass('active');
  $('.collection .btn5').removeClass('active');
  $('.collection .btn6').removeClass('active');
  $('.collection .btn7').removeClass('active');
  $('.collection .btn8').removeClass('active');
});

// 버튼4
$('.collection .btn4').on('click', () => {
  $('.lookbook-left img').attr({
    src: `./images/lookbook-main4.png`,
    alt: 'lookbook-main2',
  });

  let idx = $(this).index();
  $('.lookbook-right img').eq(0).attr({
    src: `./images/lookbook4-1.png`,
    alt: 'lookbook-main2',
  });

  $('.lookbook-right img').eq(1).attr({
    src: `./images/lookbook4-2.png`,
    alt: 'lookbook-main2',
  });

  $('.lookbook-right img').eq(2).attr({
    src: `./images/lookbook4-3.png`,
    alt: 'lookbook-main2',
  });

  $('.lookbook-right img').eq(3).attr({
    src: `./images/lookbook4-4.png`,
    alt: 'lookbook-main2',
  });

  $('.lookbook-right img').eq(4).attr({
    src: `./images/lookbook4-5.png`,
    alt: 'lookbook-main2',
  });

  $('.lookbook-right img').eq(5).attr({
    src: `./images/lookbook4-6.png`,
    alt: 'lookbook-main2',
  });

  $('.lookbook-right img').eq(6).attr({
    src: `./images/lookbook4-7.png`,
    alt: 'lookbook-main2',
  });

  $('.lookbook-right img').eq(7).attr({
    src: `./images/lookbook4-8.png`,
    alt: 'lookbook-main2',
  });
  $('.lookbook-right img').eq(8).attr({
    src: `./images/lookbook4-9.png`,
    alt: 'lookbook-main2',
  });
  $('.lookbook-right img').eq(9).attr({
    src: `./images/lookbook4-10.png`,
    alt: 'lookbook-main2',
  });

  $('.collection .btn4').addClass('active');
  $('.collection .btn1').removeClass('active');
  $('.collection .btn2').removeClass('active');
  $('.collection .btn3').removeClass('active');
  $('.collection .btn5').removeClass('active');
  $('.collection .btn6').removeClass('active');
  $('.collection .btn7').removeClass('active');
  $('.collection .btn8').removeClass('active');
});

// 버튼5
$('.collection .btn5').on('click', () => {
  $('.lookbook-left img').attr({
    src: `./images/lookbook-main5.png`,
    alt: 'lookbook-main2',
  });

  let idx = $(this).index();
  $('.lookbook-right img').eq(0).attr({
    src: `./images/lookbook5-1.png`,
    alt: 'lookbook-main2',
  });

  $('.lookbook-right img').eq(1).attr({
    src: `./images/lookbook5-2.png`,
    alt: 'lookbook-main2',
  });

  $('.lookbook-right img').eq(2).attr({
    src: `./images/lookbook5-3.png`,
    alt: 'lookbook-main2',
  });

  $('.lookbook-right img').eq(3).attr({
    src: `./images/lookbook5-4.png`,
    alt: 'lookbook-main2',
  });

  $('.lookbook-right img').eq(4).attr({
    src: `./images/lookbook5-5.png`,
    alt: 'lookbook-main2',
  });

  $('.lookbook-right img').eq(5).attr({
    src: `./images/lookbook5-6.png`,
    alt: 'lookbook-main2',
  });

  $('.lookbook-right img').eq(6).attr({
    src: `./images/lookbook5-7.png`,
    alt: 'lookbook-main2',
  });

  $('.lookbook-right img').eq(7).attr({
    src: `./images/lookbook5-8.png`,
    alt: 'lookbook-main2',
  });
  $('.lookbook-right img').eq(8).attr({
    src: `./images/lookbook5-9.png`,
    alt: 'lookbook-main2',
  });
  $('.lookbook-right img').eq(9).attr({
    src: `./images/lookbook5-10.png`,
    alt: 'lookbook-main2',
  });

  $('.collection .btn5').addClass('active');
  $('.collection .btn1').removeClass('active');
  $('.collection .btn2').removeClass('active');
  $('.collection .btn3').removeClass('active');
  $('.collection .btn4').removeClass('active');
  $('.collection .btn6').removeClass('active');
  $('.collection .btn7').removeClass('active');
  $('.collection .btn8').removeClass('active');
});

// 버튼6
$('.collection .btn6').on('click', () => {
  $('.lookbook-left img').attr({
    src: `./images/lookbook-main6.png`,
    alt: 'lookbook-main2',
  });

  let idx = $(this).index();
  $('.lookbook-right img').eq(0).attr({
    src: `./images/lookbook6-1.png`,
    alt: 'lookbook-main2',
  });

  $('.lookbook-right img').eq(1).attr({
    src: `./images/lookbook6-2.png`,
    alt: 'lookbook-main2',
  });

  $('.lookbook-right img').eq(2).attr({
    src: `./images/lookbook6-3.png`,
    alt: 'lookbook-main2',
  });

  $('.lookbook-right img').eq(3).attr({
    src: `./images/lookbook6-4.png`,
    alt: 'lookbook-main2',
  });

  $('.lookbook-right img').eq(4).attr({
    src: `./images/lookbook6-5.png`,
    alt: 'lookbook-main2',
  });

  $('.lookbook-right img').eq(5).attr({
    src: `./images/lookbook6-6.png`,
    alt: 'lookbook-main2',
  });

  $('.lookbook-right img').eq(6).attr({
    src: `./images/lookbook6-7.png`,
    alt: 'lookbook-main2',
  });

  $('.lookbook-right img').eq(7).attr({
    src: `./images/lookbook6-8.png`,
    alt: 'lookbook-main2',
  });
  $('.lookbook-right img').eq(8).attr({
    src: `./images/lookbook6-9.png`,
    alt: 'lookbook-main2',
  });
  $('.lookbook-right img').eq(9).attr({
    src: `./images/lookbook6-10.png`,
    alt: 'lookbook-main2',
  });

  $('.collection .btn6').addClass('active');
  $('.collection .btn1').removeClass('active');
  $('.collection .btn2').removeClass('active');
  $('.collection .btn3').removeClass('active');
  $('.collection .btn4').removeClass('active');
  $('.collection .btn5').removeClass('active');
  $('.collection .btn7').removeClass('active');
  $('.collection .btn8').removeClass('active');
});

// 버튼7
$('.collection .btn7').on('click', () => {
  $('.lookbook-left img').attr({
    src: `./images/lookbook-main7.png`,
    alt: 'lookbook-main2',
  });

  let idx = $(this).index();
  $('.lookbook-right img').eq(0).attr({
    src: `./images/lookbook7-1.png`,
    alt: 'lookbook-main2',
  });

  $('.lookbook-right img').eq(1).attr({
    src: `./images/lookbook7-2.png`,
    alt: 'lookbook-main2',
  });

  $('.lookbook-right img').eq(2).attr({
    src: `./images/lookbook7-3.png`,
    alt: 'lookbook-main2',
  });

  $('.lookbook-right img').eq(3).attr({
    src: `./images/lookbook7-4.png`,
    alt: 'lookbook-main2',
  });

  $('.lookbook-right img').eq(4).attr({
    src: `./images/lookbook7-5.png`,
    alt: 'lookbook-main2',
  });

  $('.lookbook-right img').eq(5).attr({
    src: `./images/lookbook7-6.png`,
    alt: 'lookbook-main2',
  });

  $('.lookbook-right img').eq(6).attr({
    src: `./images/lookbook7-7.png`,
    alt: 'lookbook-main2',
  });

  $('.lookbook-right img').eq(7).attr({
    src: `./images/lookbook7-8.png`,
    alt: 'lookbook-main2',
  });
  $('.lookbook-right img').eq(8).attr({
    src: `./images/lookbook7-9.png`,
    alt: 'lookbook-main2',
  });
  $('.lookbook-right img').eq(9).attr({
    src: `./images/lookbook7-10.png`,
    alt: 'lookbook-main2',
  });

  $('.collection .btn7').addClass('active');
  $('.collection .btn1').removeClass('active');
  $('.collection .btn2').removeClass('active');
  $('.collection .btn3').removeClass('active');
  $('.collection .btn4').removeClass('active');
  $('.collection .btn5').removeClass('active');
  $('.collection .btn6').removeClass('active');
  $('.collection .btn8').removeClass('active');
});

// 버튼8
$('.collection .btn8').on('click', () => {
  $('.lookbook-left img').attr({
    src: `./images/lookbook-main8.png`,
    alt: 'lookbook-main2',
  });

  let idx = $(this).index();
  $('.lookbook-right img').eq(0).attr({
    src: `./images/lookbook8-1.png`,
    alt: 'lookbook-main2',
  });

  $('.lookbook-right img').eq(1).attr({
    src: `./images/lookbook8-2.png`,
    alt: 'lookbook-main2',
  });

  $('.lookbook-right img').eq(2).attr({
    src: `./images/lookbook8-3.png`,
    alt: 'lookbook-main2',
  });

  $('.lookbook-right img').eq(3).attr({
    src: `./images/lookbook8-4.png`,
    alt: 'lookbook-main2',
  });

  $('.lookbook-right img').eq(4).attr({
    src: `./images/lookbook8-5.png`,
    alt: 'lookbook-main2',
  });

  $('.lookbook-right img').eq(5).attr({
    src: `./images/lookbook8-6.png`,
    alt: 'lookbook-main2',
  });

  $('.lookbook-right img').eq(6).attr({
    src: `./images/lookbook8-7.png`,
    alt: 'lookbook-main2',
  });

  $('.lookbook-right img').eq(7).attr({
    src: `./images/lookbook8-8.png`,
    alt: 'lookbook-main2',
  });
  $('.lookbook-right img').eq(8).attr({
    src: `./images/lookbook8-9.png`,
    alt: 'lookbook-main2',
  });
  $('.lookbook-right img').eq(9).attr({
    src: `./images/lookbook8-10.png`,
    alt: 'lookbook-main2',
  });

  $('.collection .btn8').addClass('active');
  $('.collection .btn1').removeClass('active');
  $('.collection .btn2').removeClass('active');
  $('.collection .btn3').removeClass('active');
  $('.collection .btn4').removeClass('active');
  $('.collection .btn5').removeClass('active');
  $('.collection .btn6').removeClass('active');
  $('.collection .btn7').removeClass('active');
});
