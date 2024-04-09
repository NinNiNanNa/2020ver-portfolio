(function($,window,document,undefined){
	
	var section1 = {
			winW : 0,
			winH : 0,
			cnt : 0,
			z : 0,
			setId : 0,
			setId2 : 0,
			count : 0,
			$slideWrap : $('.mainSlide-wrap'),
			$slide : $('.mainSlide'),
			init : function(){
				section1.responseFn();
				section1.timer();
				section1.s1SlideFn();
				section1.nextCountFn();
				section1.prevCountFn();
				section1.pageBtnEventFn();
				section1.buttonEventFn();
				section1.swipeEvent();
				section1.autoTimerFn();
				section1.pauseTimerFn();
			},
			//반응형 함수
			responseFn: function(){
				section1.winW = $(window).innerWidth();
				section1.winH = $(window).innerHeight();
				
				section1.$slide.stop().animate({ width:section1.winW, height:section1.winH });
				section1.$slideWrap.stop().animate({ left: -(section1.winW*section1.cnt) },0);
				
			},
			//반응형 실행
			timer: function(){
				setTimeout(section1.responseFn,100);
				
				$(window).resize(function(){
					setTimeout(section1.responseFn,100);
				});
			},
			//section1 슬라이드 함수
			s1SlideFn: function(){
				section1.$slideWrap.stop().animate({ left: -(section1.winW*section1.cnt) },600, function(){
					if( section1.cnt > 2 ){ section1.cnt = 0; }
					if( section1.cnt < 0 ){ section1.cnt = 2; }
					section1.$slideWrap.stop().animate({ left: -(section1.winW*section1.cnt) },0);
				});
				section1.cnt>2?section1.z=0:section1.z=section1.cnt;
				section1.pageBtnEventFn();
			},
			//다음 슬라이드 카운트 함수
			nextCountFn: function(){
				section1.cnt++;
				section1.s1SlideFn();
			},
			//이전 슬라이드 카운트 함수
			prevCountFn: function(){
				section1.cnt--;
				section1.s1SlideFn();
			},
			//페이지 이벤트 함수
			pageBtnEventFn: function(){
				$('.mainSlidePageBtn').removeClass('addPage');
				$('.mainSlidePageBtn').eq(section1.z).addClass('addPage');
			},
			//다음,이전,페이지 클릭 이벤트
			buttonEventFn: function(){
				
				$('.s1NextBtn').on({
					click:	function(){
						if( !section1.$slideWrap.is(':animated') ){
							section1.nextCountFn();
							section1.pauseTimerFn();
						}
					}
				});
				
				$('.s1PrevBtn').on({
					click:	function(){
						if( !section1.$slideWrap.is(':animated') ){
							section1.prevCountFn();
							section1.pauseTimerFn();
						}
					}
				});
				
				$('.mainSlidePageBtn').each(function(index){
					$(this).on({
						click:	function(){
							if( section1.cnt != index ){
								section1.z = section1.cnt;
								section1.cnt = index;
								section1.s1SlideFn();
								section1.pauseTimerFn();
							}	
							
						}
					});
				});
				
				
			},
			//스와이프
			swipeEvent: function(){
				section1.$slideWrap.swipe({
					swipeLeft:	function(){
						if( !section1.$slideWrap.is(':animated') ){
							section1.nextCountFn();
							section1.pauseTimerFn();
						}
					},
					swipeRight:	function(){
						if( !section1.$slideWrap.is(':animated') ){
							section1.prevCountFn();
							section1.pauseTimerFn();
						}
					}
				});
			},
			//자동타이머 함수
			autoTimerFn: function(){
				section1.setId = setInterval(section1.nextCountFn,4000);
			},
			//일시정지 함수
			pauseTimerFn: function(){
				section1.count = 0;
				clearInterval( section1.setId2 );
				clearInterval( section1.setId );
				
				section1.setId2 = setInterval(function(){
					section1.count++;
					if( section1.count >= 5 ){
						section1.nextCountFn();
						section1.autoTimerFn();
						clearInterval( section1.setId2 );
					}
				},1000);
			}
			
	}
	section1.init();
	
})(jQuery,window,document);//section1.js