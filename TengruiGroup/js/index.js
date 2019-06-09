layui.define(['jquery', 'element', 'carousel', 'laypage'], function(exports){
  var $ = layui.jquery
  ,element = layui.element
  ,carousel = layui.carousel
  ,laypage = layui.laypage;

  //轮播渲染
  carousel.render({
    elem: '#banner'
    ,width: '100%'
    ,height: '620px'
    ,arrow: 'always'
  });
  
  
  //滚动监听
//$(window).scroll(function() {
//  var scr=$(document).scrollTop();
//  scr > 0 ? $(".nav").addClass('scroll') : $(".nav").removeClass('scroll');
//});
//导航切换
//var btn = $('.nav').find('.nav-list').children('button')
//,spa = btn.children('span')
//,ul = $('.nav').find('.nav-list').children('.layui-nav');
//btn.on('click', function(){
//  if(!$(spa[0]).hasClass('spa1')){
//    spa[0].className = 'spa1';
//    spa[1].style.display = 'none';
//    spa[2].className = 'spa3';
//    $('.nav')[0].style.height = 90 + ul[0].offsetHeight + 'px';
////    $(".nav .layui-nav").css("display", "block");
//  }else{
//    spa[0].className = '';
//    spa[1].style.display = 'block';
//    spa[2].className = '';
//    $('.nav')[0].style.height = 80 + 'px';
////    $(".nav .layui-nav").css("display", "none");
//  }
//});
	//导航切换
//var btn = $('.nav').find('.nav-list').children('button')
//,spa = btn.children('span')
//,ul = $('.nav').find('.nav-list').children('.layui-nav');
//btn.on('click', function(){
//  if(!$(spa[0]).hasClass('spa1')){
//    spa[0].className = 'spa1';
//    spa[1].style.display = 'none';
//    spa[2].className = 'spa3';
//    $('.nav')[0].style.height = 90 + ul[0].offsetHeight + 'px';
//  }else{
//    spa[0].className = '';
//    spa[1].style.display = 'block';
//    spa[2].className = '';
//    $('.nav')[0].style.height = 80 + 'px';
//  }
//});

//$(document).ready(function(){
//	$('.nav .nav-list button').click(function(){
//		if(!$(spa[0]).hasClass('spa1')){
//			$(".nav .layui-nav").css("display", "block");
//		}else{
//			$(".nav .layui-nav").css("display", "none");
//		}
//	})
//})
  //企业展示
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
   //新闻动态
    //鼠标移入动画
    $(function() {
		$('.news-list ul li').hover(function() {
			$(this).animate({
				'top': '-262px'
			}, 'normal');
//			$('.imgbox').CSS("display","none");
		}, function() {
			$(this).animate({
				'top': '0px'
			}, 'normal');
		});
	})
//  $(function() {
//		$('.news-list ul li:nth-child(2)').hover(function() {
//			$(this).animate({
//				'top': '-262px'
//			}, 'normal');
////			$('.imgbox').CSS("display","none");
//		}, function() {
//			$(this).animate({
//				'top': '0px'
//			}, 'normal');
//		});
//	})
//  $(function() {
//		$('.news-list ul li:nth-child(3)').hover(function() {
//			$(this).animate({
//				'top': '-262px'
//			}, 'normal');
////			$('.imgbox').CSS("display","none");
//		}, function() {
//			$(this).animate({
//				'top': '0px'
//			}, 'normal');
//		});
//	})

 exports('index', {}); 
});

