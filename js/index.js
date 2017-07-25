// JavaScript Document
$(function(){
    var w1 = $(".index_banner .swiper-slide img").width();
	$(".index_banner .swiper-slide img").height(0.6*w1);
	var w2 = $(".news_porbottom img").width();
	$(".news_porbottom img").height(0.65*w2);
	var w3 = $(".news_right img:eq(0)").width();
	$(".news_right img:eq(0)").height(0.56*w3);
	var w33 = $(".news_right img").width();
	$(".news_right img").height(0.55*w33);
	var w4 = $(".news_porleft img").width();
	$(".news_porleft img").height(1.11*w4);
	var w5 = $(".hot_product ul li>a>img").width();
	$(".hot_product ul li>a>img").height(1*w5);
	var w6 = $(".search_list ul li a>img").width();
	$(".search_list ul li a>img").height(1*w6);
	var w7 = $(".product_box .product_img img").width();
	$(".product_box .product_img img").height(0.6*w7);
	var w8 = $(".fenlei .fen-box .fenlist ul li a img").width();
	$(".fenlei .fen-box .fenlist ul li a img").height(1*w8);
	
	
	
	
	$(".news_right img:eq(0)").css("border-bottom","1px solid #e5e5e5");
	$(".news_porbottom a:eq(0)").css("border-right","1px solid #e5e5e5");
	$(".hot_product ul li:even").css("border-right","1px solid #e5e5e5");
	
	
	
	$(".product_bar span").click(function(){
	   $(this).toggleClass("on");
	})
	$(".wechat").click(function(){
	   $(".wechat").children("label").removeClass("on");
	   $(this).children("label").addClass("on")
	})
	$(".rent_bx dl dd").click(function(){
	   $(".rent_bx dl dd").removeClass("on");
	   $(this).addClass("on")
	})
	
})