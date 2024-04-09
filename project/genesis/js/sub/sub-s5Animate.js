$(function(){
	var subs5T = 0;
	
	$(window).scroll(function(){
		
		if( $(this).scrollTop() >= $('#section4').offset().top+200 ){
			if( subs5T == 0 ){
				subs5T = 1;
				subs5AniFn();
			}
		}
		else{
			subs5T = 0;
			subs5AniFormatFn();
		}
	});
	
	
	
	function subs5AniFormatFn(){
		$('.s5-img-back2 img').stop().animate({ bottom:-50, opacity:0 },200);
		$('.s5-img-front img').stop().animate({ bottom:-100, opacity:0 },200);
		$('.s5-img-back1 img').stop().animate({ opacity:0 },200);

		
		$('.s5-title1 h2').stop().animate({ bottom:-30, opacity:0 },200);
		$('.s5-title2').stop().animate({ bottom:-50, opacity:0 },200);
		$('.s5-title3 p').stop().animate({ bottom:-70, opacity:0 },200);
		$('.s5Btn ').stop().animate({ bottom:-50, opacity:0 },200);
		
	}
	
	function subs5AniFn(){
		$('.s5-img-back2 img').stop().animate({ bottom:0, opacity:1 },1000);
		$('.s5-img-front img').stop().animate({ bottom:0, opacity:1 },1000);
		$('.s5-img-back1 img').stop().delay(1000).animate({ opacity:1 },1000);
		
		$('.s5-title1 h2').stop().animate({ bottom:0, opacity:1 },1000);
		$('.s5-title2').stop().delay(200).animate({ bottom:0, opacity:1 },1000);
		$('.s5-title3 p').stop().delay(300).animate({ bottom:0, opacity:1 },1000);
		$('.s5Btn ').stop().delay(400).animate({ bottom:0, opacity:1 },1000);
		
	}
	
});//sub-s5Animate.js