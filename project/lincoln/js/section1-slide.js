$(function(){
	
	var cnt = 0;
	
	
		$('.section1-slide-wrap').swipe({
			swipeLeft:	function(){	
				if( !$('.section1-slide-wrap').is(':animated') ){
					nextSlideCountFn();
				}
				clearInterval(setId);
			},
			swipeRight:	function(){	
				if( !$('.section1-slide-wrap').is(':animated') ){
					prevSlideCountFn();
				}
				clearInterval(setId);
			}
		});
		
		
		function autoPlayFn(){
			setId = setInterval(nextSlideCountFn, 3000);
		}
		autoPlayFn();
		
		
		
		$('.pageBtn').each(function(idx){
			$(this).on({
				click: function(){
					cnt = idx;
					mainSlideFn();
					clearInterval( setId );
				}
			});
		});
		
		
		
		function pageBtnEventFn(z){
			$('.playPageBtn-wrap li').removeClass('addPage');
			$('.playPageBtn-wrap li').eq(z).addClass('addPage');
			
			$('.pageBtn').children().attr('src','./img/off.png');
			$('.pageBtn').eq(z).children().attr('src','./img/on.png');
		}
		
		
		
		
		$('.nextBtn').on({
			click:	function(){
				if( !$('.section1-slide-wrap').is(':animated') ){
					nextSlideCountFn();
					clearInterval( setId );
				}
				
			}
		});
		
		$('.prevBtn').on({
			click:	function(){
				if( !$('.section1-slide-wrap').is(':animated') ){
					prevSlideCountFn();
					clearInterval( setId );
				}
				
			}
		});
		
		
		
		function nextSlideCountFn(){
			cnt++;
			mainSlideFn();
		}
		
		function prevSlideCountFn(){
			cnt--;
			mainSlideFn();
		}
	
	
	
		function mainSlideFn(){
			$('.section1-slide-wrap').stop().animate({ left:-(1440*cnt) }, 300,function(){
				if( cnt > 4 ){cnt = 0;}
				if( cnt < 0 ){cnt = 4;}
				
				$('.section1-slide-wrap').stop().animate({ left:-(1440*cnt) }, 0);
				
			});
			if( cnt > 4 ){
				pageBtnEventFn(0);
			}else{
				pageBtnEventFn(cnt);
			}
		}
	
});