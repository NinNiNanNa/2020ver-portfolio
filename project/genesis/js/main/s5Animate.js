$(function(){
	
	var s5T = 0;
	
	$(window).scroll(function(){
		
		if( $(this).scrollTop() >= $('#section4').offset().top+300 ){
			if( s5T == 0 ){
				s5T = 1;
				s5AniFn();
			}
		}
		else{
			s5T = 0;
			s5AniFormatFn();
		}
	});
	
	
	function s5AniFormatFn(){
		$('.s5Btn').stop().animate({ bottom:-20, opacity:0 },1000);
		
	}
	
	function s5AniFn(){
		$('.s5Btn').stop().animate({ bottom:0, opacity:1 },1000);
		
	}
	
});//s5Animate.js