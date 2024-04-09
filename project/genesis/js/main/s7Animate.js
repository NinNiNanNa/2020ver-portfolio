$(function(){
	
	var s7T = 0;
	
	$(window).scroll(function(){
		
		if( $(this).scrollTop() >= $('#section6').offset().top-200 ){
			if( s7T == 0 ){
				s7T = 1;
				s7AniFn();
			}
		}
		else{
			s7T = 0;
			s7AniFormatFn();
		}
	});
	
	
	function s7AniFormatFn(){
		$('.s7-title1 h2').stop().animate({ bottom:-20, opacity:0 },1000);
		$('.s7-title2 h3').stop().animate({ bottom:-40, opacity:0 },1000);
		$('.s7-title3 p').stop().animate({ bottom:-75, opacity:0 },1000);
	}
	
	
	function s7AniFn(){
		$('.s7-title1 h2').stop().delay(200).animate({ bottom:0, opacity:1 },1000);
		$('.s7-title2 h3').stop().delay(300).animate({ bottom:0, opacity:1 },1000);
		$('.s7-title3 p').stop().delay(400).animate({ bottom:0, opacity:1 },1000);
	}

	
	
});//s7Animate.js