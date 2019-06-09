//Swiper轮播
    var swiper = new Swiper('.swiper-container', {
    	autoplay:true,
      slidesPerView: 3,
      spaceBetween: 30,
      slidesPerGroup: 1,
      centeredSlides: true,
      grabCursor:true,
      loop: true,
      loopFillGroupWithBlank: true,
      pagination: {
        el: '.swiper-pagination',
        type: 'fraction',
        clickable: true,
        
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
        
      },
    });