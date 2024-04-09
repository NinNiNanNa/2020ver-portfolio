$(function(){
	
	var subs3T = 0;
	
	$(window).scroll(function(){
		
		if( $(this).scrollTop() >= $('#section1').offset().top+300 ){
			if( subs3T == 0 ){
				subs3T = 1;
				subs3AniFn();
			}
		}
		else{
			subs3T = 0;
			subs3AniFormatFn();
		}
	});
	
	
	
	function subs3AniFormatFn(){
		$('.s3-bg').stop().animate({ right:-60, opacity:0 },200);
		
		$('.s3-row1').stop().animate({ bottom:-100, opacity:0 },200);
		$('.s3-row2').stop().animate({ bottom:-100, opacity:0 },200);
		
		$('.s3-title-wrap > div h2').stop().animate({ bottom:-30, opacity:0 },200);
		$('.s3-title-wrap > div p').stop().animate({ bottom:-100, opacity:0},200);
	}
	
	function subs3AniFn(){
		$('.s3-bg').stop().animate({ right:0, opacity:1 },1000);
		
		$('.s3-row1').stop().animate({ bottom:0, opacity:1 },1000);
		$('.s3-row2').stop().animate({ bottom:0, opacity:1 },1000);
		
		$('.s3-title-wrap > div h2').stop().delay(600).animate({ bottom:0, opacity:1 },1000);
		$('.s3-title-wrap > div p').stop().delay(800).animate({ bottom:0, opacity:1 },1000);
	}

	
	
});//sub-s3Animate.js