$(function(){
	
	var s10T = 0;
	
	$(window).scroll(function(){
		
		if( $(this).scrollTop() >= $('#section8').offset().top+500 ){
			if( s10T == 0 ){
				s10T = 1;
				s10AniFn();
			}
		}
		else{
			s10T = 0;
			s10AniFormatFn();
		}
	});
	
	
	function s10AniFormatFn(){
		$('.section10-left').stop().animate({ bottom:-60, opacity:0 },200);
		$('.section10-center').stop().animate({ bottom:-60, opacity:0 },200);
		$('.section10-right').stop().animate({ bottom:-60, opacity:0 },200);
	}
	
	function s10AniFn(){
		$('.section10-left').stop().animate({ bottom:0, opacity:1 },1000);
		$('.section10-center').stop().delay(100).animate({ bottom:0, opacity:1 },1000);
		$('.section10-right').stop().delay(200).animate({ bottom:0, opacity:1 },1000);
	}
	
});//s10Animate.js