//header
let scroll = 0;

$(window).on('scroll', (e) => {
  let pos = $(e.target).scrollTop();
  console.log(pos);

  if (pos > scroll) {
    $('header').addClass('change_header');
  } else {
    $('header').removeClass('change_header');
  }
});

//back to top
$(window).on('scroll', (e) => {
  let pos = $(e.target).scrollTop();
  console.log(pos);

  if (pos > scroll) {
    $('.back_top img ').addClass('change_daisy');
  } else {
    $('.back_top img ').removeClass('change_daisy');
  }
});

// UX design
let currnetIdx = 0;

$('.slideBtn li').on('click', (e) => {
  const target = $(e.target);
  const idx = target.index();

  $('.slideWrapper')
    .stop()
    .animate(
      {
        marginLeft: -100 * idx + '%',
      },
      700
    );

  $('.slideBtn li').removeClass('active');
  target.addClass('active');

  currnetIdx = idx; // 현재 인덱스에 내가 클릭한 인덱스 번호 대입
});

const autoSlide = () => {
  currnetIdx = (currnetIdx + 1) % 4; // 0,1,2,3

  $('.slideWrapper')
    .stop()
    .animate(
      {
        marginLeft: -100 * currnetIdx + '%',
      },
      700
    );

  $('.slideBtn li')
    .eq(currnetIdx)
    .addClass('active')
    .siblings()
    .removeClass('active');
};

let mainSlide = setInterval(autoSlide, 3000);

$('.simpleSlide').hover(
  function () {
    clearInterval(mainSlide);
  },
  function () {
    mainSlide = setInterval(autoSlide, 3000);
  }
);
