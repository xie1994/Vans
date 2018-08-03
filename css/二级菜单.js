$(function(){
	$(".allIsShow-uls > li").not($(".specline")).mouseover(function(){
		$(this).css({"background-color":"#fff"}).children("a").css({"color":"#000"});
		console.log($(this).children("div"));
		$(this).children("div").css({"display":"block"});
	});
	$(".allIsShow-uls > li").not($(".specline")).mouseout(function(){
		$(this).css({"background-color":"#000"}).children("a").css({"color":"#fff"});
		$(this).children("div").css({"display":"none"});
	});
})