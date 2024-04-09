$(function(){
	
	var c = s4cnt = s4setId = s4setId2 = bar = 0;
	var n = $('.s4-slide').length-3;
	
		
		//모달버튼
		$('.s4-modalBtn').on({
			click:	function(event){
				event.preventDefault();
				
				pauseFn();
				$('.s4-modal').show();

			}
		});
		
		//모달창에서 이미지 버튼 클릭 이벤트
		$('.s4-modalWinBtn').each(function(index){
			$(this).on({
				click:	function(e){
					e.preventDefault();
					
					s4cnt=index;
					s4SlideFn();
					$('.s4-modal').hide();
					
				}
			});		
		});
		
	
	
	
	
		//타임바 이벤트 함수
		function timeBarEventFn(){
			$('.s4-timebar').css({ width: 0 });	
			$('.s4-timebar').css({ width: bar });

		}
		
		//타이머 막대(바) 함수
		function timerBarFn(){
			bar+=2.718571429;
		
			if( bar > 1903 ){
				bar = 2.718571429;	
				nextSlideCountFn();
			}
			timeBarEventFn();
		}
		
	
	
	
		//일시정지 함수
		function pauseFn(){
			clearInterval(s4setId);
			
			c = 0;
			clearInterval(s4setId2);
			
			s4setId2 = setInterval(function(){
				c++;
				
				if( c >= 7 ){
					nextSlideCountFn();
					autoSlideTimerFn();
					clearInterval(s4setId2);
					c = 0;
				}
			}, 1000);
		}
		
		
		
		//자동 슬라이드 타이머 함수
		function autoSlideTimerFn(){
			s4setId = setInterval(timerBarFn, 10);
		}
		autoSlideTimerFn();
		
		
		
		//스와이프
		$('.s4-slide-container').swipe({
			swipeLeft:	function(){
				if( !$('.s4-slide-wrap').is(':animated') ){
					nextSlideCountFn();
				}
				pauseFn();
			},
			swipeRight:	function(){
				if( !$('.s4-slide-wrap').is(':animated') ){
					prevSlideCountFn();
				}
				pauseFn();
			}
		});
		
		
		
		
		//페이지버튼 객체 배열
		$('.s4-slide-pageBtn').each(function(idx){
			$(this).on({
				click:	function(){
					s4cnt = idx;
					s4SlideFn();
					
					pauseFn();
				}
			});
		});
		
		
		
		//페이지버튼 이벤트 함수
		function pageBtnEventFn(){
			var z = 0;
			
				if( s4cnt > n ){	
					z = 0;	
				}
				else if( s4cnt < 0 ){	
					z = n;	
				}
				else{ 
					z = s4cnt;
				}
			$('.s4-slide-pageBtn-wrap li').removeClass('addRollingBtn');
			$('.s4-slide-pageBtn-wrap li').eq(z).addClass('addRollingBtn');
		}
	
		
		
		//다음, 이전 슬라이드 버튼 클릭 이벤트
		$('.s4-slid-nextBtn').on({
			click:	function(){
				if( !$('.s4-slide-wrap').is(':animated') ){
					nextSlideCountFn();
				}
				pauseFn();
			}
		});
		
		$('.s4-slid-prevBtn').on({
			click:	function(){
				if( !$('.s4-slide-wrap').is(':animated') ){
					prevSlideCountFn();
				}
				pauseFn();
			}
		});
		
		
		//다음,이전 슬리이드 카운트함수
		function nextSlideCountFn(){
			s4cnt++;
			s4SlideFn();
		}
		
		function prevSlideCountFn(){
			s4cnt--;
			s4SlideFn();
		}
		
		
		//s4슬라이드 함수
		function s4SlideFn(){
			$('.s4-slide-wrap').stop().animate({ left:-1903*s4cnt }, 600, function(){
				if( s4cnt > n ){ s4cnt = 0; }
				if( s4cnt < 0 ){ s4cnt = n; }
				$('.s4-slide-wrap').stop().animate({ left:-1903*s4cnt }, 0);
			});
			pageBtnEventFn(s4cnt);
		}
	
});//s4Slide.js