(function($,window,document,undefined){
	
	var section9 = {
		cnt : 0,
		winW : 0,
		$slideW : 0,
		z : 0,
		init : function(){
			section9.responseFn();
			section9.timer();
			section9.s9SlideFn();
			section9.nextCountFn();
			section9.prevCountFn();
			section9.pageBtnEventFn();
			section9.buttonEventFn();
			section9.swipeEvent();
		},
		//반응형 함수
		responseFn: function(){
			section9.winW = $(window).innerWidth();
			
			if( section9.winW > 1199 ){
				section9.$slideW = 298;
			}
			else if( section9.winW > 767 ){
				section9.$slideW = 250;
			}
			else{
				section9.$slideW = section9.winW;
			}
			$('.s9Slide').css({ width:section9.$slideW });
			$('.s9Slide-wrap').css({ width:(section9.$slideW*12), marginLeft:-(section9.$slideW*2) });
			
			section9.s9SlideFn();
		},
		//반응형 실행
		timer: function(){
			setTimeout(section9.responseFn,100);
				
				$(window).resize(function(){
					setTimeout(section9.responseFn,100);
				});
		},
		//section9 슬라이드 함수
		s9SlideFn: function(){

			if( section9.winW > 990 ){
				$('.s9Slide-wrap').stop().animate({ left:-(section9.$slideW*section9.cnt) },600, function(){
					if( section9.cnt > 5 ){ section9.cnt = 0 }
					if( section9.cnt < 0 ){ section9.cnt = 5 }

					$('.s9Slide-wrap').stop().animate({ left:-(section9.$slideW*section9.cnt) },0);
				});
			}
			else if( section9.winW > 767 ){
				$('.s9Slide-wrap').stop().animate({ left:-((section9.$slideW*3)*section9.cnt) },600, function(){
					if( section9.cnt > 1 ){ section9.cnt = 0 }
					if( section9.cnt < 0 ){ section9.cnt = 1 }

					$('.s9Slide-wrap').stop().animate({ left:-((section9.$slideW*3)*section9.cnt) },0);
				});
				section9.cnt>1?section9.z=0:section9.z=section9.cnt;
				section9.pageBtnEventFn(section9.cnt);
			}
			else {
				$('.s9Slide-wrap').stop().animate({ left:-(section9.$slideW*section9.cnt) },600, function(){
					if( section9.cnt > 5 ){ section9.cnt = 0 }
					if( section9.cnt < 0 ){ section9.cnt = 5 }

					$('.s9Slide-wrap').stop().animate({ left:-(section9.$slideW*section9.cnt) },0);
				});
				section9.cnt>5?section9.z=0:section9.z=section9.cnt;
				section9.pageBtnEventFn(section9.cnt);
			}
			
		},
		//다음 슬라이드 카운트 함수
		nextCountFn: function(){
			section9.cnt++;
			section9.s9SlideFn();
		},
		//이전 슬라이드 카운트 함수
		prevCountFn: function(){
			section9.cnt--;
			section9.s9SlideFn();
		},
		//페이지 이벤트 함수
		pageBtnEventFn: function(){
			$('.s9PageBtn990').removeClass('addPage');
			$('.s9PageBtn990').eq(section9.z).addClass('addPage');
			$('.s9PageBtn767').removeClass('addPage');
			$('.s9PageBtn767').eq(section9.z).addClass('addPage');
		},
		//다음,이전,페이지 클릭 이벤트
		buttonEventFn: function(){

			$('.s9NextBtn').on({
				click:	function(){
					if( !$('.s9Slide-wrap').is(':animated') ){
						section9.nextCountFn();
					}
				}
			});
			
			$('.s9PrevBtn').on({
				click:	function(){
					if( !$('.s9Slide-wrap').is(':animated') ){
						section9.prevCountFn();
					}
				}
			});
			//990px 페이지 버튼
			$('.s9PageBtn990').each(function(index){
				$(this).on({
					click:	function(){
						if( section9.cnt != index ){
							section9.z = section9.cnt;
							section9.cnt = index;
							section9.s9SlideFn();
						}	
						
					}
				});
			});
			//767px 페이지 버튼
			$('.s9PageBtn767').each(function(index){
				$(this).on({
					click:	function(){
						if( section9.cnt != index ){
							section9.z = section9.cnt;
							section9.cnt = index;
							section9.s9SlideFn();
						}	
						
					}
				});
			});

		},
		//스와이프
		swipeEvent: function(){
			$('.s9Slide-wrap').swipe({
				swipeLeft:	function(){
					if( !$('.s9Slide-wrap').is(':animated') ){
						section9.nextCountFn();
					}
				},
				swipeRight:	function(){
					if( !$('.s9Slide-wrap').is(':animated') ){
						section9.prevCountFn();
					}
				}
			});
		}

	}
	section9.init();
	
})(jQuery,window,document);//section9.js