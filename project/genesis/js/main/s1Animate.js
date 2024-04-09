$(function(){
	
	function s1AniFn(){
		$('.section1-title h3').stop().animate({ bottom:0 },700);
		$('.section1-title h2').stop().animate({ top:0 },900);
		
		$('.section1-btn1').stop().delay(600).animate({ bottom:0 },1000);
		$('.section1-btn1 a').stop().delay(700).animate({ opacity:1 },500);

		$('.section1-btn2').stop().delay(800).animate({ bottom:0 },1000);
		$('.section1-btn2 a').stop().delay(900).animate({ opacity:1 },500);
		
		$('.section1-line').stop().delay(600).animate({ opacity:1 },1000);
		
		$('.section1-img').css({opacity:1, transform:'scale(1.1)'});
		
		
	}
	s1AniFn();
	
});//s1Animate.js