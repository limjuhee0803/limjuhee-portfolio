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
  $('.hambuger img').attr({src: `./images/hambuger2.png`,alt: 'hambuger2',
  });
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