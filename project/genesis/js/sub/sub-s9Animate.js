$(function(){
	
	var s9T = 0;
	
	$(window).scroll(function(){
		
		if( $(this).scrollTop() >= $('#section8').offset().top ){
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
		$('.s9Btn').stop().animate({ bottom:-50, opacity:0 },200);
		
	}
	
	function s9AniFn(){
		$('.s9Btn').stop().animate({ bottom:0, opacity:1 },1000);
		
	}
	
});//s9Animate.js