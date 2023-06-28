//header
let scroll = 0;

$(window).on('scroll', (e) => {
  let pos = $(e.target).scrollTop();
  console.log(pos);

  if (pos > scroll) {
    $('header .gnb').addClass('change_header');
  } else {
    $('header .gnb').removeClass('change_header');
  }
});

/*
$(document).ready(function () {
  $(window).on('mousewheel', function (event, delta) {
    if (delta > 0) {
      $('.back_top img').attr({
        src: './images/daisy_top_navy.png',
        alt: 'daisy_navy',
      });
    } else if (delta < 0) {
      $('.back_top img').attr({
        src: './images/daisy_top_navy.png',
        alt: 'daisy_navy',
      });
    }
  });
});
*/
