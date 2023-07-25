// 퍼블리싱 예시

$('.pub-info li').on('click', function () {
  let idx = $(this).index();
  $('.pub img').attr({
    src: `./images/publishing${idx + 1}.png`,
    alt: 'project2',
  });
});

$('.pub-info li')
  .eq(0)
  .on('click', function () {
    $('.pub-detail').text(
      '모든 파일에 같은 스타일의 스와이퍼를 적용시켜 통일감 향상'
    );
  });

$('.pub-info li')
  .eq(1)
  .on('click', function () {
    $('.pub-detail').text(
      '서브페이지에 부드러운 풀페이지 이벤트를 적용하여 시각적 편안함 제공'
    );
  });

$('.pub-info li')
  .eq(2)
  .on('click', function () {
    $('.pub-detail').text('우측 하단에 언제든 위로 올라갈 수 있는 up버튼 제공');
  });

$('.pub-info li')
  .eq(3)
  .on('click', function () {
    $('.pub-detail').text(
      'Git을 이용하여 서로의 작업물을 직접 확인 및 수정하며 작업'
    );
  });

$('.pub-info li')
  .eq(0)
  .on('click', () => {
    $('.pub-info li').eq(0).addClass('active');
    $('.pub-info li').eq(1).removeClass('active');
    $('.pub-info li').eq(2).removeClass('active');
    $('.pub-info li').eq(3).removeClass('active');
  });

$('.pub-info li')
  .eq(1)
  .on('click', () => {
    $('.pub-info li').eq(1).addClass('active');
    $('.pub-info li').eq(0).removeClass('active');
    $('.pub-info li').eq(2).removeClass('active');
    $('.pub-info li').eq(3).removeClass('active');
  });

$('.pub-info li')
  .eq(2)
  .on('click', () => {
    $('.pub-info li').eq(2).addClass('active');
    $('.pub-info li').eq(0).removeClass('active');
    $('.pub-info li').eq(1).removeClass('active');
    $('.pub-info li').eq(3).removeClass('active');
  });

$('.pub-info li')
  .eq(3)
  .on('click', () => {
    $('.pub-info li').eq(3).addClass('active');
    $('.pub-info li').eq(0).removeClass('active');
    $('.pub-info li').eq(1).removeClass('active');
    $('.pub-info li').eq(2).removeClass('active');
  });
