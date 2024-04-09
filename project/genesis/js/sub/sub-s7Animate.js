$(function(){
	var subs7T = 0;
	
	$(window).scroll(function(){
		
		if( $(this).scrollTop() >= $('#section6').offset().top+350 ){
			if( subs7T == 0 ){
				subs7T = 1;
				subs7AniFn();
			}
		}
		else{
			subs7T = 0;
			subs7AniFormatFn();
		}
	});
	
	
	
	function subs7AniFormatFn(){
		$('.s7-img-back img').stop().animate({ bottom:-50, opacity:0 },200);
		$('.s7-img-front img').stop().animate({ bottom:-100, opacity:0 },200);

		
		$('.s7-title1 h2').stop().animate({ bottom:-30, opacity:0 },200);
		$('.s7-title2').stop().animate({ bottom:-50, opacity:0 },200);
		$('.s7-title3 p').stop().animate({ bottom:-100, opacity:0 },200);
		$('.s7Btn ').stop().animate({ bottom:-50, opacity:0 },200);
		
	}
	
	function subs7AniFn(){
		$('.s7-img-back img').stop().animate({ bottom:0, opacity:1 },1000);
		$('.s7-img-front img').stop().animate({ bottom:0, opacity:1 },1000);
		
		$('.s7-title1 h2').stop().animate({ bottom:0, opacity:1 },1000);
		$('.s7-title2').stop().delay(200).animate({ bottom:0, opacity:1 },1000);
		$('.s7-title3 p').stop().delay(300).animate({ bottom:0, opacity:1 },1000);
		$('.s7Btn ').stop().delay(400).animate({ bottom:0, opacity:1 },1000);
		
	}
	
});//sub-s7Animate.js