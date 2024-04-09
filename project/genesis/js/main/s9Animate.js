$(function(){
	
	var s9T = 0;
	
	$(window).scroll(function(){
		
		if( $(this).scrollTop() >= $('#section8').offset().top+700 ){
			if( s9T == 0 ){
				s9T = 1;
				s9AniFn();
			}
		}
		else{
			s9T = 0;
			s9AniFormatFn();
		}
	});
	
	
	function s9AniFormatFn(){
		$('.section9-left').stop().animate({ bottom:-60, opacity:0 },1000);
		$('.section9-center').stop().animate({ bottom:-60, opacity:0 },1000);
		$('.section9-right').stop().animate({ bottom:-60, opacity:0 },1000);
	}
	
	function s9AniFn(){
		$('.section9-left').stop().animate({ bottom:0, opacity:1 },1000);
		$('.section9-center').stop().delay(100).animate({ bottom:0, opacity:1 },1000);
		$('.section9-right').stop().delay(200).animate({ bottom:0, opacity:1 },1000);
	}
	
});//s9Animate.js