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

// banner 마우스 이벤트

const img1 = document.querySelector('.item1');
const img2 = document.querySelector('.item2');
const img3 = document.querySelector('.item3');
const img4 = document.querySelector('.item4');

addEventListener('mousemove', (evt) => {
  let x = evt.clientX,
    y = evt.clientY;
  console.log(x, y);

  img1.style.transform = `translate(${x / 60}px,${-y / 50}px)`;
  img2.style.transform = `translate(${x / -50}px,${-y / 100 + 10}px)`;
  img3.style.transform = `translate(${30 - x / 60}px,${-y / 50}px)`;
  img4.style.transform = `translate(${50 - x / 80}px,${-y / 20}px)`;
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
