$(function(){
	var subs6T = 0;
	
	$(window).scroll(function(){
		
		if( $(this).scrollTop() >= $('#section5').offset().top+350 ){
			if( subs6T == 0 ){
				subs6T = 1;
				subs6AniFn();
			}
		}
		else{
			subs6T = 0;
			subs6AniFormatFn();
		}
	});
	
	
	
	function subs6AniFormatFn(){
		$('.s6-img-back img').stop().animate({ bottom:-50, opacity:0 },200);
		$('.s6-img-front img').stop().animate({ bottom:-100, opacity:0 },200);
		
		$('.s6-title1 h2').stop().animate({ bottom:-30, opacity:0 },200);
		$('.s6-title2').stop().animate({ bottom:-50, opacity:0 },200);
		$('.s6-title3 p').stop().animate({ bottom:-50, opacity:0 },200);
		$('.s6Btn ').stop().animate({ bottom:-50, opacity:0 },200);
		
	}
	
	function subs6AniFn(){
		$('.s6-img-back img').stop().animate({ bottom:0, opacity:1 },1000);
		$('.s6-img-front img').stop().animate({ bottom:0, opacity:1 },1000);
		
		$('.s6-title1 h2').stop().animate({ bottom:0, opacity:1 },1000);
		$('.s6-title2').stop().delay(200).animate({ bottom:0, opacity:1 },1000);
		$('.s6-title3 p').stop().delay(300).animate({ bottom:0, opacity:1 },1000);
		$('.s6Btn ').stop().delay(400).animate({ bottom:0, opacity:1 },1000);
		
	}
	
});//sub-s6Animate.js