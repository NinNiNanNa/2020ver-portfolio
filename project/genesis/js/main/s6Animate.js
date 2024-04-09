$(function(){
	
	var s6T = 0;
	
	$(window).scroll(function(){
		
		if( $(this).scrollTop() >= $('#section4').offset().top+550 ){
			if( s6T == 0 ){
				s6T = 1;
				s6AniFn();
			}
		}
		else{
			s6T = 0;
			s6AniFormatFn();
		}
	});
	
	
	function s6AniFormatFn(){
		$('.s6-car-title1 h3').stop().animate({ bottom:-20 },400);
		$('.s6-car-title2 h2').stop().animate({ bottom:-52 },400);
		$('.s6-car-img img').stop().animate({ bottom:-110 },600);
	}

	function s6AniFn(){
		$('.s6-car-title1-0 h3').stop().animate({ bottom:0 },400);
		$('.s6-car-title2-0 h2').stop().animate({ bottom:0 },400);
		$('.s6-car-img0 img').stop().animate({ bottom:0 },600);
		
		$('.s6-car-title1-1 h3').stop().delay(200).animate({ bottom:0 },400);
		$('.s6-car-title2-1 h2').stop().delay(200).animate({ bottom:0 },400);
		$('.s6-car-img1 img').stop().delay(200).animate({ bottom:0 },600);
		
		$('.s6-car-title1-2 h3').stop().delay(400).animate({ bottom:0 },400);
		$('.s6-car-title2-2 h2').stop().delay(400).animate({ bottom:0 },400);
		$('.s6-car-img2 img').stop().delay(400).animate({ bottom:0 },600);
		
		$('.s6-car-title1-3 h3').stop().delay(600).animate({ bottom:0 },400);
		$('.s6-car-title2-3 h2').stop().delay(600).animate({ bottom:0 },400);
		$('.s6-car-img3 img').stop().delay(600).animate({ bottom:0 },600);
		
	}
	
	
	
	
	function borderFomatFn(){
		$('.s6border0').stop().animate({ height:0 },0);
		$('.s6border1').stop().animate({ width:0 },0);
		$('.s6border2').stop().animate({ height:0 },0);
		$('.s6border3').stop().animate({ width:0 },0);
	}
	borderFomatFn();
	
	
	function borderAniFn(z){
		$('.s6-border-wrap').eq(z).find('.s6border0').animate({ height:100+'%' },100, function(){
			$('.s6-border-wrap').eq(z).find('.s6border1').animate({ width:100+'%' },100, function(){
				$('.s6-border-wrap').eq(z).find('.s6border2').animate({ height:100+'%' },100, function(){
					$('.s6-border-wrap').eq(z).find('.s6border3').animate({ width:100+'%' },100);
				});
			});
		});
	}
	
	$('.s6-car-contents').each(function(idx){
		$(this).on({
			mouseenter:	function(){
				borderAniFn(idx);
			},
			mouseleave:	function(){
				borderFomatFn();
			}
		});
	});
	
	
	
	
	$('.s6-car-contents0').on({
		mouseenter:	function(){		
			$('.s6-viewBtn0').stop().animate({ opacity:1, bottom:0 },100);	
			
		}
	});
	
	$('.s6-car-contents0').on({
		mouseleave: function(){		
			$('.s6-viewBtn0').stop().animate({ opacity:0, bottom:-10 },100);
			
		}
	});
	
	
	
	
	
	$('.s6-car-contents1').on({
		mouseenter:	function(){	
			$('.s6-viewBtn1').stop().animate({ bottom:0, opacity:1 },100);	
			
			
		}
	});
	
	$('.s6-car-contents1').on({
		mouseleave: function(){		
			$('.s6-viewBtn1').stop().animate({ bottom:-10, opacity:0 },100);
			
		}
	});
	
	
	
	
	
	$('.s6-car-contents2').on({
		mouseenter:	function(){		
			$('.s6-viewBtn2').stop().animate({ bottom:0, opacity:1 },100);	

			
		}
	});
	
	$('.s6-car-contents2').on({
		mouseleave: function(){		
			$('.s6-viewBtn2').stop().animate({ bottom:-10, opacity:0 },100);
			
		}
	});
	
	
	
	
	
	$('.s6-car-contents3').on({
		mouseenter:	function(){		//마우스 오버시
			$('.s6-viewBtn3').stop().animate({ bottom:0, opacity:1 },100);	

			
		}
	});
	
	$('.s6-car-contents3').on({
		mouseleave: function(){		//마우스 아웃
			$('.s6-viewBtn3').stop().animate({ bottom:-10, opacity:0 },10);
			
		}
	});
	
	
});
//s6Animate.js