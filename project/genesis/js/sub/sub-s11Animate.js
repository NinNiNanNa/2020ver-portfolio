$(function(){
	
	var s11T = 0;
	
	$(window).scroll(function(){
		
		if( $(this).scrollTop() >= $('#section10').offset().top ){
			if( s11T == 0 ){
				s11T = 1;
				s11AniFn();
			}
		}
		else{
			s11T = 0;
			s11AniFormatFn();
		}
	});
	
	
	function s11AniFormatFn(){
		
		$('.s11-title h2').stop().animate({ bottom:-50, opacity:0 },200);
		
		$('.s11-facebook').stop().animate({ bottom:-50, opacity:0 },200);
		$('.s11-instagram').stop().animate({ bottom:-50, opacity:0 },200);
		$('.s11-youtube').stop().animate({ bottom:-50, opacity:0 },200);
	}
	
	function s11AniFn(){
		
		$('.s11-title h2').stop().animate({ bottom:0, opacity:1 },1000);
		
		$('.s11-facebook').stop().delay(200).animate({ bottom:0, opacity:1 },1000);
		$('.s11-instagram').stop().delay(400).animate({ bottom:0, opacity:1 },1000);
		$('.s11-youtube').stop().delay(600).animate({ bottom:0, opacity:1 },1000);
	}
	
	
	$('.s11-facebook').on({
		mouseenter:	function(){
			
			$('.s11-facebook').removeClass('addFhover');
			$('.s11-facebook').addClass('addFhover');
			
		},
		focusin:	function(){
			
			$('.s11-facebook').removeClass('addFhover');
			$('.s11-facebook').addClass('addFhover');
			
		}
	});
	
	
	
	$('.s11-facebook').on({
		mouseleave: function(){

			$('.s11-facebook').removeClass('addFhover');
		}
	});
	
	
	$('.s11-facebook').on({
		focusout:		function(){
			
			$('.s11-facebook').removeClass('addFhover');	
		}
	});
	
	
	
	
	
	$('.s11-instagram').on({
		mouseenter:	function(){
			
			$('.s11-instagram').removeClass('addIhover');
			$('.s11-instagram').addClass('addIhover');
			
		},
		focusin:	function(){
			
			$('.s11-instagram').removeClass('addIhover');
			$('.s11-instagram').addClass('addIhover');
			
		}
	});
	
	
	
	$('.s11-instagram').on({
		mouseleave: function(){

			$('.s11-instagram').removeClass('addIhover');
		}
	});
	
	
	$('.s11-instagram').on({
		focusout:		function(){
			
			$('.s11-instagram').removeClass('addIhover');	
		}
	});
	
	
	
	
	
		$('.s11-youtube').on({
		mouseenter:	function(){
			
			$('.s11-youtube').removeClass('addYhover');
			$('.s11-youtube').addClass('addYhover');
			
		},
		focusin:	function(){
			
			$('.s11-youtube').removeClass('addYhover');
			$('.s11-youtube').addClass('addYhover');
			
		}
	});
	
	
	
	$('.s11-youtube').on({
		mouseleave: function(){

			$('.s11-youtube').removeClass('addYhover');
		}
	});
	
	
	$('.s11-youtube').on({
		focusout:		function(){
			
			$('.s11-youtube').removeClass('addYhover');	
		}
	});
	
	
	
	
});//s11Animate.js