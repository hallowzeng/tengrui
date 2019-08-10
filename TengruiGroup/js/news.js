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
