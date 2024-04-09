$(function(){
	
	function subs1AniFn(){
		$('.section1-img').stop().animate({ opacity:1 },1000);
		$('.section1-line').stop().delay(600).animate({ opacity:1 },1000);
		
		$('.section1-title-row1 h2').stop().animate({ bottom:0, opacity:1 },1500);
		$('.section1-title-row2 p').stop().delay(100).animate({ bottom:0, opacity:1 },1500);
		
		$('.section1-img').css({opacity:1, transform:'scale(1)'});
	}
	subs1AniFn();
	
});//sub-s1Animate.js