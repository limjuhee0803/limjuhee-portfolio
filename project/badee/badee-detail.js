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