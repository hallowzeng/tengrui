//改变头部二级导航栏点击事件的背景颜色
$(document).ready(function(){
	$('.layui-nav-item').click(function(){
		$(this).addClass('layui-this')
		alert("layui-this")
		console.log("layui-this")
	})
//	$('.layui-nav-child dd').click(function(){
//		$('.layui-nav-child dd').css('background','#fff');
//		alert("success!");
//	})

})
