new Swiper('main .market_submit .slide_left .swiper', {
  // Optional parameters
  direction: 'vertical',  // 수직 슬라이드
  loop: true,  // 반복 재생 여부
  autoplay: true,  // 자동 재생 여부
});

new Swiper('main .market_submit .slide_right .swiper', {
  // Optional parameters
  direction: 'vertical',  // 수직 슬라이드
  loop: true,  // 반복 재생 여부
  autoplay: true,  // 자동 재생 여부
});

new Swiper('main .local_star_market .slide_left .swiper', {
  // Optional parameters
  direction: 'vertical',  // 수직 슬라이드
  loop: true,  // 반복 재생 여부
  autoplay: true,  // 자동 재생 여부
});

new Swiper('main .local_star_market .slide_right .swiper', {
  // Optional parameters
  direction: 'vertical',  // 수직 슬라이드
  loop: true,  // 반복 재생 여부
  autoplay: true,  // 자동 재생 여부
});


const headerEl = document.querySelector('header');
    const mainMenuEl = document.querySelector('nav.gnb > .main-menu');
    const subMenuEls = document.querySelectorAll('nav.gnb .sub-menu');

    mainMenuEl.addEventListener('mouseover', function() {
      headerEl.style.height = '320px';

      subMenuEls.forEach(function (subMenuEl) {
        subMenuEl.style.opacity = '1';
        subMenuEl.style.visibility = 'visible';
      });
    });


    // mouseout은 자식요소에서 적용되지 않고, 반드시 헤더!! 안!!!에만 있어야 이벤트로 인식
    // mouseleave는 자식요소에서도 적용되어서, 마우스가 헤더+메뉴에서 벗어나야 이벤트로 인식
    // mouseover와 mouseebter / mouseout과 mouseleave의 차이점 (w3schools 예제 참고)
    headerEl.addEventListener('mouseleave', function () {
      headerEl.style.height = '100px';

      subMenuEls.forEach(function (subMenuEl) {
        subMenuEl.style.opacity = '0';
        subMenuEl.style.visibility = 'visible';
      });
    })


    new Swiper('main .local_star_market .star_market .swiper', {
      // Optional parameters
      direction: 'horizontal',  // 수평 슬라이드
      loop: true,  // 반복 재생 여부
      autoplay: true,  // 자동 재생 여부
      slidesPerView: 3.5,
      spaceBetween: 20,
    });