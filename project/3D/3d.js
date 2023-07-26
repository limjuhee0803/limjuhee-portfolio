/* 마우스 휠 이벤트-풀페이지 */

$('.full-page').each(function () {
  $(this).on('wheel', function (evt) {
    evt.preventDefault();

    let delta = evt.originalEvent.deltaY;
    let currentTop = null;
    const nextBox = this.nextElementSibling;
    const prevBox = this.previousElementSibling;

    if (delta > 0) {
      if (nextBox) {
        currentTop = nextBox.offsetTop;
      } else {
        currentTop = this.offsetTop;
      }
    } else {
      if (prevBox) {
        currentTop = prevBox.offsetTop;
      } else {
        return;
      }
    }

    scrollTo({
      top: currentTop,
      behavior: 'smooth',
    });
  });
});

// 이미지 클릭 시 확대

$('.project1').on('click', () => {
  $('.project-box1').addClass('active-project');
});

$('.project-detail svg').on('click', () => {
  $('.project-box1').removeClass('active-project');
});

$('.project2').on('click', () => {
  $('.project-box2').addClass('active-project');
});

$('.project-detail svg').on('click', () => {
  $('.project-box2').removeClass('active-project');
});

$('.project3').on('click', () => {
  $('.project-box3').addClass('active-project');
});

$('.project-detail svg').on('click', () => {
  $('.project-box3').removeClass('active-project');
});

$('.project4').on('click', () => {
  $('.project-box4').addClass('active-project');
});

$('.project-detail svg').on('click', () => {
  $('.project-box4').removeClass('active-project');
});
