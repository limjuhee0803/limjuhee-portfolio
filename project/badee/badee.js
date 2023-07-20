//header
let scroll = 0;

$(window).on('scroll', (e) => {
  let pos = $(e.target).scrollTop();

  if (pos > scroll) {
    $('header').addClass('change_header');
  } else {
    $('header').removeClass('change_header');
  }
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

$('.footer-butterfly').on('click', () => {
  $('.portfolio').toggleClass('active-portfolio');
});
