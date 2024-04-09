(function($,window,document,undefined){
	
	var cnt = z = setId = t = bar = 0;
	var winW = $(window).innerWidth();
	var winH = $(window).innerHeight()-60;
	var vidW = $('.slide video').innerWidth();
	var vidH = $('.slide video').innerHeight();
	var pageBarLength = $('.s1-timebar-wrap').innerWidth();
	var wheelDelta;
	
		
		
		function resizeFn(){
			winW = $(window).innerWidth();
			winH = $(window).innerHeight()-60;
			vidW = $('video.section1-videoPC').innerWidth();
			vidH = $('video.section1-videoPC').innerHeight();
			vidWm = $('video.section1-videoM').innerWidth();
			vidHm = $('video.section1-videoM').innerHeight();
			pageBarLength = $('.s1-timebar-wrap').innerWidth();
			
			$('.slide').css({ width:winW, height:winH });
			
			if( winW > vidW ){
				$('video.section1-videoPC').css({ width:winW, height:'auto' });
			}
			else if( winH > vidH ){
				$('video.section1-videoPC').css({ width:'auto', height:winH });
			}
			
			if( winW > vidWm ){
				$('video.section1-videoM').css({ width:winW, height:'auto' });
			}
			else if( winH > vidHm ){
				$('video.section1-videoM').css({ width:'auto', height:winH });
			}
			
			if( winW <= 720 ){
				$('video.section1-videoPC').css({ display:'none' });
				$('video.section1-videoM').css({ display:'block' });
				$('.slide1').css({ backgroundImage:'url(./img/slide1M.jpg)' });
				$('.slide2').css({ backgroundImage:'url(./img/slide2M.png)' });
				$('.slide3').css({ backgroundImage:'url(./img/slide3M.jpg)' });
			}
			else{
				$('video.section1-videoPC').css({ display:'block' });
				$('video.section1-videoM').css({ display:'none' });
				$('.slide1').css({ backgroundImage:'url(./img/slide1.jpg)' });
				$('.slide2').css({ backgroundImage:'url(./img/slide2.png)' });
				$('.slide3').css({ backgroundImage:'url(./img/slide3.jpg)' });
			}
			
			
			$('.mainSlide-wrap').stop().animate({ left: -(winW*cnt) },0);
			
		}
		resizeFn();
		setTimeout(resizeFn,100);
		
		$(window).resize(function(){
			resizeFn();
			setTimeout(resizeFn,100);
		});
	
	//메인슬라이드 함수
		function mainSlideFn(){	
			$('.mainSlide-wrap').stop().animate({ left: -(winW*cnt) },800,'easeInOutExpo', function(){
				if( cnt > 3 ){ cnt=0; }
				if( cnt < 0 ){ cnt=3; }
				$('.mainSlide-wrap').stop().animate({ left: -(winW*cnt) },0);
			});
			cnt>3?z=0:z=cnt;
			pageEventFn();
		}
		
		//페이지 이벤트 함수
		function pageEventFn(){			
			$('.pageBtn').removeClass('addPageBtn');
			$('.pageBtn').eq(z).addClass('addPageBtn');
		}
		
		//페이지 버튼 클릭 이벤트
		$('.pageBtn').each(function(idx){
			$(this).on({
				click:	function(){
					cnt=idx;
					mainSlideFn();
					
					t = 1;	
					clearInterval( setId );	
					$('.pausePlayBtn').children().attr('src','./img/play.png');
					bar=0;
				}
			});
		});
		
		//마우스 휠 이벤트
		$('#section1').on('mousewheel DOMMouseScroll', function(event){
			event.preventDefault();
			
			if( event.detail ){
				wheelDelta = event.detail*-1;
			}
			else{
				wheelDelta = event.originalEvent.wheelDelta;
			}
			
			// console.log(wheelDelta); //중간확인 결과 값 120, -120
			
			if( wheelDelta < 0 ){ //휠 방향 아래로 - : nextCountFn()
				if( !$('.mainSlide-wrap').is(':animated') ){
					t = 1;	
					clearInterval( setId );	
					$('.pausePlayBtn').children().attr('src','./img/play.png');
					nextCountFn();
					bar=0;
					if( cnt > 3 ){
						$('html,body').stop().animate({ scrollTop:$('#section2').offset().top },600);
					}
					
				}
			}
			else{				 //휠 방향 위로  + : prevCountFn()
				if( !$('.mainSlide-wrap').is(':animated') ){
					t = 1;	
					clearInterval( setId );	
					$('.pausePlayBtn').children().attr('src','./img/play.png');
					prevCountFn();
					bar=0;
					
				}
			}
			
		});

		//카운트 다음
		function nextCountFn(){
			cnt++;
			mainSlideFn();
		}
		
		//카운트 이전
		function prevCountFn(){
			cnt--;
			mainSlideFn();
		}
		
		//다음슬라이드 버튼 클릭 이벤트
		$('.nextBtn').on({
			click:	function(){
				if( !$('.mainSlide-wrap').is(':animated') ){
					nextCountFn();
					bar=0;
				}
				t = 1;	
				clearInterval( setId );	
				$('.pausePlayBtn').children().attr('src','./img/play.png');
			}
		});
		
		//이전슬라이드 버튼 클릭 이벤트
		$('.prevBtn').on({
			click:	function(){
				if( !$('.mainSlide-wrap').is(':animated') ){
					prevCountFn();
					bar=0;
				}
				t = 1;	
				clearInterval( setId );	
				$('.pausePlayBtn').children().attr('src','./img/play.png');
			}
		});

		//터치 이벤트
		$('.mainSlide-view').swipe({
			swipeLeft:	function(){
				if( !$('.mainSlide-wrap').is(':animated') ){
					nextCountFn();
					t = 1;	
					
					clearInterval( setId );	
					$('.pausePlayBtn').children().attr('src','./img/play.png');
					bar=0;
				}
			},
			swipeRight:	function(){
				if( !$('.mainSlide-wrap').is(':animated') ){
					prevCountFn();
					t = 1;
					
					clearInterval( setId );	
					$('.pausePlayBtn').children().attr('src','./img/play.png');
					bar=0;
				}
			}			
		});
		
		//자동타이머 함수
		function autoTimerFn(){
			setId = setInterval(timerBarFn, 10);
		}
		autoTimerFn();
		
		
		//정지와 재시작 버튼 클릭 이벤트
		$('.pausePlayBtn').on({
			click: function(){
				
				
				if( t == 0 ){
					t = 1;
					clearInterval( setId );
					$(this).children().attr('src','./img/play.png');
				}
				else{
					t = 0;
					nextCountFn();
					autoTimerFn();
					$(this).children().attr('src','./img/stop.png');
				}
				
			}
		});
		
		
		//타임바 이벤트 함수
		function timeBarEventFn(){
			$('.s1-timebar').css({ width: 0 });	
			$('.s1-timebar').css({ width: bar });

		}
		
		//타이머 막대(바) 함수
		function timerBarFn(){
			bar+=(pageBarLength/7)/100;
		
			if( bar > pageBarLength ){
				bar = (pageBarLength/7)/100;
				nextCountFn();
			}
			timeBarEventFn();
		}
		
	
})(jQuery,window,document);//section1.js