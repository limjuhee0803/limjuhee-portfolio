/* 마우스 휠 이벤트 */

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

$('a[href="#"]').on('click', (evt) => {
  evt.preventDefault();
});

$('.back_top').on('click', () => {
  scrollTo({
    top: 0,
    behavior: 'smooth',
  });
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

// project-ui
console.clear();

const { gsap, imagesLoaded } = window;

const buttons = {
  prev: document.querySelector('.btn--left'),
  next: document.querySelector('.btn--right'),
};
const cardsContainerEl = document.querySelector('.cards__wrapper');
const appBgContainerEl = document.querySelector('.app__bg');

const cardInfosContainerEl = document.querySelector('.info__wrapper');

buttons.next.addEventListener('click', () => swapCards('right'));

buttons.prev.addEventListener('click', () => swapCards('left'));

function swapCards(direction) {
  const currentCardEl = cardsContainerEl.querySelector('.current--card');
  const previousCardEl = cardsContainerEl.querySelector('.previous--card');
  const nextCardEl = cardsContainerEl.querySelector('.next--card');

  const currentBgImageEl = appBgContainerEl.querySelector('.current--image');
  const previousBgImageEl = appBgContainerEl.querySelector('.previous--image');
  const nextBgImageEl = appBgContainerEl.querySelector('.next--image');

  changeInfo(direction);
  swapCardsClass();

  removeCardEvents(currentCardEl);

  function swapCardsClass() {
    currentCardEl.classList.remove('current--card');
    previousCardEl.classList.remove('previous--card');
    nextCardEl.classList.remove('next--card');

    currentBgImageEl.classList.remove('current--image');
    previousBgImageEl.classList.remove('previous--image');
    nextBgImageEl.classList.remove('next--image');

    currentCardEl.style.zIndex = '50';
    currentBgImageEl.style.zIndex = '-2';

    if (direction === 'right') {
      previousCardEl.style.zIndex = '20';
      nextCardEl.style.zIndex = '30';

      nextBgImageEl.style.zIndex = '-1';

      currentCardEl.classList.add('previous--card');
      previousCardEl.classList.add('next--card');
      nextCardEl.classList.add('current--card');

      currentBgImageEl.classList.add('previous--image');
      previousBgImageEl.classList.add('next--image');
      nextBgImageEl.classList.add('current--image');
    } else if (direction === 'left') {
      previousCardEl.style.zIndex = '30';
      nextCardEl.style.zIndex = '20';

      previousBgImageEl.style.zIndex = '-1';

      currentCardEl.classList.add('next--card');
      previousCardEl.classList.add('current--card');
      nextCardEl.classList.add('previous--card');

      currentBgImageEl.classList.add('next--image');
      previousBgImageEl.classList.add('current--image');
      nextBgImageEl.classList.add('previous--image');
    }
  }
}

function changeInfo(direction) {
  let currentInfoEl = cardInfosContainerEl.querySelector('.current--info');
  let previousInfoEl = cardInfosContainerEl.querySelector('.previous--info');
  let nextInfoEl = cardInfosContainerEl.querySelector('.next--info');

  gsap
    .timeline()
    .to([buttons.prev, buttons.next], {
      duration: 0.2,
      opacity: 0.5,
      pointerEvents: 'none',
    })
    .to(
      currentInfoEl.querySelectorAll('.text'),
      {
        duration: 0.4,
        stagger: 0.1,
        translateY: '-120px',
        opacity: 0,
      },
      '-='
    )
    .call(() => {
      swapInfosClass(direction);
    })
    .call(() => initCardEvents())
    .fromTo(
      direction === 'right'
        ? nextInfoEl.querySelectorAll('.text')
        : previousInfoEl.querySelectorAll('.text'),
      {
        opacity: 0,
        translateY: '40px',
      },
      {
        duration: 0.4,
        stagger: 0.1,
        translateY: '0px',
        opacity: 1,
      }
    )
    .to([buttons.prev, buttons.next], {
      duration: 0.2,
      opacity: 1,
      pointerEvents: 'all',
    });

  function swapInfosClass() {
    currentInfoEl.classList.remove('current--info');
    previousInfoEl.classList.remove('previous--info');
    nextInfoEl.classList.remove('next--info');

    if (direction === 'right') {
      currentInfoEl.classList.add('previous--info');
      nextInfoEl.classList.add('current--info');
      previousInfoEl.classList.add('next--info');
    } else if (direction === 'left') {
      currentInfoEl.classList.add('next--info');
      nextInfoEl.classList.add('previous--info');
      previousInfoEl.classList.add('current--info');
    }
  }
}

function updateCard(e) {
  const card = e.currentTarget;
  const box = card.getBoundingClientRect();
  const centerPosition = {
    x: box.left + box.width / 2,
    y: box.top + box.height / 2,
  };
  let angle = Math.atan2(e.pageX - centerPosition.x, 0) * (35 / Math.PI);
  gsap.set(card, {
    '--current-card-rotation-offset': `${angle}deg`,
  });
  const currentInfoEl = cardInfosContainerEl.querySelector('.current--info');
  gsap.set(currentInfoEl, {
    rotateY: `${angle}deg`,
  });
}

function resetCardTransforms(e) {
  const card = e.currentTarget;
  const currentInfoEl = cardInfosContainerEl.querySelector('.current--info');
  gsap.set(card, {
    '--current-card-rotation-offset': 0,
  });
  gsap.set(currentInfoEl, {
    rotateY: 0,
  });
}

function initCardEvents() {
  const currentCardEl = cardsContainerEl.querySelector('.current--card');
  currentCardEl.addEventListener('pointermove', updateCard);
  currentCardEl.addEventListener('pointerout', (e) => {
    resetCardTransforms(e);
  });
}

initCardEvents();

function removeCardEvents(card) {
  card.removeEventListener('pointermove', updateCard);
}

function init() {
  let tl = gsap.timeline();

  tl.to(cardsContainerEl.children, {
    delay: 0.15,
    duration: 0.5,
    stagger: {
      ease: 'power4.inOut',
      from: 'right',
      amount: 0.1,
    },
    '--card-translateY-offset': '0%',
  })
    .to(
      cardInfosContainerEl
        .querySelector('.current--info')
        .querySelectorAll('.text'),
      {
        delay: 0.5,
        duration: 0.4,
        stagger: 0.1,
        opacity: 1,
        translateY: 0,
      }
    )
    .to(
      [buttons.prev, buttons.next],
      {
        duration: 0.4,
        opacity: 1,
        pointerEvents: 'all',
      },
      '-=0.4'
    );
}

const waitForImages = () => {
  const images = [...document.querySelectorAll('img')];
  const totalImages = images.length;
  let loadedImages = 0;
  const loaderEl = document.querySelector('.loader span');

  gsap.set(cardsContainerEl.children, {
    '--card-translateY-offset': '100vh',
  });
  gsap.set(
    cardInfosContainerEl
      .querySelector('.current--info')
      .querySelectorAll('.text'),
    {
      translateY: '40px',
      opacity: 0,
    }
  );
  gsap.set([buttons.prev, buttons.next], {
    pointerEvents: 'none',
    opacity: '0',
  });

  images.forEach((image) => {
    imagesLoaded(image, (instance) => {
      if (instance.isComplete) {
        loadedImages++;
        let loadProgress = loadedImages / totalImages;

        gsap.to(loaderEl, {
          duration: 1,
          scaleX: loadProgress,
          backgroundColor: `hsl(${loadProgress * 120}, 100%, 50%`,
        });

        if (totalImages == loadedImages) {
          gsap
            .timeline()
            .to('.loading__wrapper', {
              duration: 0.8,
              opacity: 0,
              pointerEvents: 'none',
            })
            .call(() => init());
        }
      }
    });
  });
};

waitForImages();

/* web design */
(function () {
  var slidersContainer = document.querySelector('.sliders-container');

  // Initializing the numbers slider
  var msNumbers = new MomentumSlider({
    el: slidersContainer,
    cssClass: 'ms--numbers',
    range: [1, 4],
    rangeContent: function (i) {
      return '0' + i;
    },
    style: {
      transform: [{ scale: [0.4, 1] }],
      opacity: [0, 1],
    },
    interactive: false,
  });

  // Initializing the titles slider
  var titles = [
    'King of the Ring Fight',
    'Sound of Streets',
    'Urban Fashion',
    'Windy Sunset',
  ];
  var msTitles = new MomentumSlider({
    el: slidersContainer,
    cssClass: 'ms--titles',
    range: [0, 3],
    rangeContent: function (i) {
      return '<h3>' + titles[i] + '</h3>';
    },
    vertical: true,
    reverse: true,
    style: {
      opacity: [0, 1],
    },
    interactive: false,
  });

  // Initializing the links slider
  var msLinks = new MomentumSlider({
    el: slidersContainer,
    cssClass: 'ms--links',
    range: [0, 3],
    rangeContent: function () {
      return '<a class="ms-slide__link">View Case</a>';
    },
    vertical: true,
    interactive: false,
  });

  // Get pagination items
  var pagination = document.querySelector('.pagination');
  var paginationItems = [].slice.call(pagination.children);

  // Initializing the images slider
  var msImages = new MomentumSlider({
    // Element to append the slider
    el: slidersContainer,
    // CSS class to reference the slider
    cssClass: 'ms--images',
    // Generate the 4 slides required
    range: [0, 3],
    rangeContent: function () {
      return '<div class="ms-slide__image-container"><div class="ms-slide__image"></div></div>';
    },
    // Syncronize the other sliders
    sync: [msNumbers, msTitles, msLinks],
    // Styles to interpolate as we move the slider
    style: {
      '.ms-slide__image': {
        transform: [{ scale: [1.5, 1] }],
      },
    },
    // Update pagination if slider change
    change: function (newIndex, oldIndex) {
      if (typeof oldIndex !== 'undefined') {
        paginationItems[oldIndex].classList.remove('pagination__item--active');
      }
      paginationItems[newIndex].classList.add('pagination__item--active');
    },
  });

  // Select corresponding slider item when a pagination button is clicked
  pagination.addEventListener('click', function (e) {
    if (e.target.matches('.pagination__button')) {
      var index = paginationItems.indexOf(e.target.parentNode);
      msImages.select(index);
    }
  });
})();
