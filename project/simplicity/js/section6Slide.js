(function($,window,document,undefined){
			
		var cnt = 0;
		var winW = $(window).innerWidth();
		var n = 5;
		var slideW = winW / n;
		
			$('.slide').css({ width:slideW });
			$('.slide-wrap').css({ width:(slideW*15), marginLeft:-(slideW*5) });
		
		function s6Resize(){
			winW = $(window).innerWidth();
			if( winW >= 1200 ){
				n=5;
			}
			else if( winW >= 1024 ){
				n=4;
			}
			else if( winW >= 800 ){
				n=3;
			}
			else if( winW >= 500 ){
				n=2;
			}
			else {
				n=1;
			}
			slideW = winW / n;
			$('.slide').css({ width:slideW });
			$('.slide-wrap').css({ width:(slideW*15), marginLeft:-(slideW*5) });
			//메인슬라이드 left: 반응형 결정
			$('.slide-wrap').stop().animate({ left:-(slideW*cnt) }, 0);
		}
		setTimeout(s6Resize, 100);
		
		$(window).resize(function(){
			s6Resize();
		});
		
		
		//슬라이드 함수
		function slideFn(){
			$('.slide-wrap').stop().animate({ left:-(slideW*cnt) }, 600, function(){
				if( cnt > 4 ){ cnt = 0 }
				if( cnt < 0 ){ cnt = 4 }
				$('.slide-wrap').stop().animate({ left:-(slideW*cnt) }, 0);
			});
		}
		
		//다음카운트 함수
		function nextCountFn(){
			cnt++;
			slideFn();
		}
		
		//next버튼 클릭 이벤트
		$('.nextBtn').on({
			click: function(){
				if( !$('.slide-wrap').is(':animated') ){
					nextCountFn();
				}
			}
		});
		
		//이전카운트 함수
		function prevCountFn(){
			cnt--;
			slideFn();
		}
		
		//prev버튼 클릭 이벤트
		$('.preBtn').on({
			click: function(){
				if( !$('.slide-wrap').is(':animated') ){
					prevCountFn();
				}
			}
		});
		
})(jQuery,window,document);//section6Slide.js