$(function() {
	
	
	function hAniFn(){
		$('.header-center').stop().animate({ opacity:1 },1000);
	}
	hAniFn();
	
	
	
	
	$('.mainBtn').on({
		mouseenter:	function(){
			$('.sub').stop().slideUp(0);
			$(this).next().stop().slideDown(0);
			
			$('.mainBtn').removeClass('addMainBtn');
			$(this).addClass('addMainBtn');
		},
		focusin:	function(){
			$('.sub').stop().slideUp(0);
			$(this).next().stop().slideDown(0);
			
			$('.mainBtn').removeClass('addMainBtn');
			$(this).addClass('addMainBtn');
		}
	});
	
	
	
	$('nav').on({
		mouseleave: function(){
			$('.sub').slideUp(0);
			$('.mainBtn').removeClass('addMainBtn');
		}
	});
	
	
	$('.section1-title1').on({
		focusout:		function(){
			$('.sub').slideUp(0);
			$('.mainBtn').removeClass('addMainBtn');	
		}
	});
	
	
	// sub0
	
	
	function borderFomatFn(){
		$('.subborder0').stop().animate({ width:0 },0);
		$('.subborder1').stop().animate({ height:0 },0);
		$('.subborder2').stop().animate({ width:0 },0);
		$('.subborder3').stop().animate({ height:0 },0);
	}
	borderFomatFn();
	
	
	function borderAniFn(z){
		$('.sub-border-wrap').eq(z).find('.subborder0').animate({ width:100+'%' },100, function(){
			$('.sub-border-wrap').eq(z).find('.subborder1').animate({ height:100+'%' },100, function(){
				$('.sub-border-wrap').eq(z).find('.subborder2').animate({ width:100+'%' },100, function(){
					$('.sub-border-wrap').eq(z).find('.subborder3').animate({ height:100+'%' },100);
				});
			});
		});
	}
	
	$('.sub-car-contents').each(function(idx){
		$(this).on({
			mouseenter:	function(){
				borderAniFn(idx);
			},
			mouseleave:	function(){
				borderFomatFn();
			}
		});
	});
	
	
	
	
	$('.sub-car-contents0').on({
		mouseenter:	function(){		
			$('.sub-viewBtn0').stop().animate({ opacity:1 },100);	
			
		}
	});
	
	$('.sub-car-contents0').on({
		mouseleave: function(){		
			$('.sub-viewBtn0').stop().animate({ opacity:0 },100);
			
		}
	});
	
	
	
	
	
	$('.sub-car-contents1').on({
		mouseenter:	function(){	
			$('.sub-viewBtn1').stop().animate({ opacity:1 },100);	
			
			
		}
	});
	
	$('.sub-car-contents1').on({
		mouseleave: function(){		
			$('.sub-viewBtn1').stop().animate({ opacity:0 },100);
			
		}
	});
	
	
	
	
	
	$('.sub-car-contents2').on({
		mouseenter:	function(){		
			$('.sub-viewBtn2').stop().animate({ opacity:1 },100);	

			
		}
	});
	
	$('.sub-car-contents2').on({
		mouseleave: function(){		
			$('.sub-viewBtn2').stop().animate({ opacity:0 },100);
			
		}
	});
	
	
	
	
	
	$('.sub-car-contents3').on({
		mouseenter:	function(){		
			$('.sub-viewBtn3').stop().animate({ opacity:1 },100);	

			
		}
	});
	
	$('.sub-car-contents3').on({
		mouseleave: function(){		
			$('.sub-viewBtn3').stop().animate({ opacity:0 },10);
			
		}
	});
	
	
	
	
});


