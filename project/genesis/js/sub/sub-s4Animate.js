$(function(){
	var subs4T = 0;
	
	$(window).scroll(function(){
		
		if( $(this).scrollTop() >= $('#section3').offset().top+350 ){
			if( subs4T == 0 ){
				subs4T = 1;
				subs4AniFn();
			}
		}
		else{
			subs4T = 0;
			subs4AniFormatFn();
		}
	});
	
	
	
	function subs4AniFormatFn(){
		$('.s4-img-back img').stop().animate({ bottom:-50, opacity:0 },200);
		$('.s4-img-front img').stop().animate({ bottom:-100, opacity:0 },200);
		
		$('.s4-title1 h2').stop().animate({ bottom:-30, opacity:0 },200);
		$('.s4-title2').stop().animate({ bottom:-50, opacity:0 },200);
		$('.s4-title3 p').stop().animate({ bottom:-50, opacity:0 },200);
		$('.s4Btn ').stop().animate({ bottom:-50, opacity:0 },200);
		
	}
	
	function subs4AniFn(){
		$('.s4-img-back img').stop().animate({ bottom:0, opacity:1 },1000);
		$('.s4-img-front img').stop().animate({ bottom:0, opacity:1 },1000);
		
		$('.s4-title1 h2').stop().animate({ bottom:0, opacity:1 },1000);
		$('.s4-title2').stop().delay(200).animate({ bottom:0, opacity:1 },1000);
		$('.s4-title3 p').stop().delay(300).animate({ bottom:0, opacity:1 },1000);
		$('.s4Btn ').stop().delay(400).animate({ bottom:0, opacity:1 },1000);
		
	}
	
});//sub-s4Animate.js