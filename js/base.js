// JavaScript Document

//底部固定导航
$(function(){
	var h=$(".fixft").height()+20;
	$("body").css({"padding-bottom":h+"px"})
})
$(function(){
	var bottom01 = $(".fixft").height();
	var bottom02 = $(".makesure").height();
	var bottom03 = $(".amount").height()+10;

	var top01 = $(".ftop").height();
	var top02 = $(".orderkind").height();

	if(top01){top01=46;}
	if(top02){top02=58;}

	if(bottom01){bottom01=54;}


	var bottom = bottom01 + bottom02 + bottom03;
	var top = top01 + top02;
	$("body").css({"padding-bottom":bottom+"px","padding-top":top+"px"});
	$(".center_nav li:eq(3),.center_nav li:eq(7)").css("border-right","0px");
	
	$(".centerset .come b").click(function(){
	   $(this).toggleClass("on");
	})
	var w101 = $(".zuji ul li a>img").width();
	$(".zuji ul li a>img").height(1*w101);
})




