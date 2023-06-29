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
