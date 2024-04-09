$(function(){
	
	var s10T = 0;
	
	$(window).scroll(function(){
		
		if( $(this).scrollTop() >= $('#section9').offset().top+100 ){
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
		
		$('.s10-title h2').stop().animate({ bottom:-50, opacity:0 },1000);
		
		$('.s10-facebook').stop().animate({ bottom:-50, opacity:0 },1000);
		$('.s10-instagram').stop().animate({ bottom:-50, opacity:0 },1000);
		$('.s10-youtube').stop().animate({ bottom:-50, opacity:0 },1000);
	}
	
	function s10AniFn(){
		
		$('.s10-title h2').stop().animate({ bottom:0, opacity:1 },1000);
		
		$('.s10-facebook').stop().delay(100).animate({ bottom:0, opacity:1 },1000);
		$('.s10-instagram').stop().delay(200).animate({ bottom:0, opacity:1 },1000);
		$('.s10-youtube').stop().delay(300).animate({ bottom:0, opacity:1 },1000);
	}
	
	
	$('.s10-facebook').on({
		mouseenter:	function(){
			
			$('.s10-facebook').removeClass('addFhover');
			$('.s10-facebook').addClass('addFhover');
			
		},
		focusin:	function(){
			
			$('.s10-facebook').removeClass('addFhover');
			$('.s10-facebook').addClass('addFhover');
			
		}
	});
	
	
	
	$('.s10-facebook').on({
		mouseleave: function(){

			$('.s10-facebook').removeClass('addFhover');
		}
	});
	
	
	$('.s10-facebook').on({
		focusout:		function(){
			
			$('.s10-facebook').removeClass('addFhover');	
		}
	});
	
	
	
	
	
	$('.s10-instagram').on({
		mouseenter:	function(){
			
			$('.s10-instagram').removeClass('addIhover');
			$('.s10-instagram').addClass('addIhover');
			
		},
		focusin:	function(){
			
			$('.s10-instagram').removeClass('addIhover');
			$('.s10-instagram').addClass('addIhover');
			
		}
	});
	
	
	
	$('.s10-instagram').on({
		mouseleave: function(){

			$('.s10-instagram').removeClass('addIhover');
		}
	});
	
	
	$('.s10-instagram').on({
		focusout:		function(){
			
			$('.s10-instagram').removeClass('addIhover');	
		}
	});
	
	
	
	
	
		$('.s10-youtube').on({
		mouseenter:	function(){
			
			$('.s10-youtube').removeClass('addYhover');
			$('.s10-youtube').addClass('addYhover');
			
		},
		focusin:	function(){
			
			$('.s10-youtube').removeClass('addYhover');
			$('.s10-youtube').addClass('addYhover');
			
		}
	});
	
	
	
	$('.s10-youtube').on({
		mouseleave: function(){

			$('.s10-youtube').removeClass('addYhover');
		}
	});
	
	
	$('.s10-youtube').on({
		focusout:		function(){
			
			$('.s10-youtube').removeClass('addYhover');	
		}
	});
	
	
	
	
});//s10Animate.js