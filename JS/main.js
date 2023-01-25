new Swiper('main .market_submit .slide_left .swiper', {
  direction: 'vertical',
  loop: true,
  autoplay: true,
});

new Swiper('main .market_submit .slide_right .swiper', {
  direction: 'vertical',
  loop: true,
  autoplay: true,
});

new Swiper('main .local_star_market .slide_left .swiper', {
  direction: 'vertical',
  loop: true,
  autoplay: true,
});

new Swiper('main .local_star_market .slide_right .swiper', {
  direction: 'vertical',
  loop: true,
  autoplay: true,
});

const headerEl = document.querySelector('header');
  const mainMenuEl = document.querySelector('nav.gnb > .main-menu');
  const subMenuEls = document.querySelectorAll('nav.gnb .sub-menu');

  mainMenuEl.addEventListener('mouseover', function() {
  headerEl.style.height = '350px';

  subMenuEls.forEach(function (subMenuEl) {
    subMenuEl.style.opacity = '1';
    subMenuEl.style.visibility = 'visible';
    });
  });

  headerEl.addEventListener('mouseleave', function () {
    headerEl.style.height = '165px';

    subMenuEls.forEach(function (subMenuEl) {
      subMenuEl.style.opacity = '0';
      subMenuEl.style.visibility = 'visible';
    });
  })

new Swiper('main .local_star_market .star_market .swiper', {
  direction: 'horizontal',
  loop: true,
  autoplay: true,
  slidesPerView: 3.5,
  spaceBetween: 20,

  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,

  breakpoints: {
    765: {
      slidesPerView: 1,
    },
  }
  },
});



const badgeEl = document.querySelector('header .badges');
window.addEventListener('scroll', function () {
  if (window.scrollY > 600) {
    gsap.to(badgeEl, 0.6, {
      opacity: 0,
      display: 'none'
    });
  } else {
    gsap.to(badgeEl, 0.6, {
      opacity: 1,
      display: 'block'
    });
  }
});

AOS.init();

const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear();