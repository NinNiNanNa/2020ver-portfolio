(function($,window,document,undefined){
	
	var s5cnt = 0;
	var conWs5 = $('.s5Slide-container').innerWidth();
	var nS5 = 3;
	var slideWs5 = conWs5 / nS5;
	
		$(window).scroll(function(event){
			
				event.preventDefault();
				
			
				if( $(window).scrollTop() >= $('#section4 .wrap1180 > div ul li:nth-child(4)').offset().top ){	
					
					$('#wrapBg').css({ opacity: 0 });
				}
				
			
		});
		
		function s5Resize(){
			conWs5 = $('.s5Slide-container').innerWidth();
			
			if( conWs5 > 1024 ){
				nS5=5;
			}
			else if( conWs5 > 960 ){
				nS5=4;
			}
			else if( conWs5 > 780 ){
				nS5=3;
			}
			else if( conWs5 > 500 ){
				nS5=2;
			}
			else {
				nS5=1;
			}
			slideWs5 = conWs5 / nS5;
			
			$('.s5Slide-wrap').css({ width:(slideWs5*20), marginLeft:-(slideWs5*5) });
			$('.s5Slide').css({ width:slideWs5 });
			//$('.s5Slide > div').css({ width:slideWs5 });
			$('.s5Slide > div img').css({ height:slideWs5*0.952380952 });
			$('.s5Slide-wrap').stop().animate({ left:-(slideWs5*s5cnt) }, 0);
		}
		s5Resize();
		setTimeout(s5Resize, 100);
		
		$(window).resize(function(){
			s5Resize();
			setTimeout(s5Resize, 100);
		});
		
	
		//슬라이드 함수
		function s5slideFn(){
			$('.s5Slide-wrap').stop().animate({ left:-(slideWs5*s5cnt) }, 600, function(){
				if( s5cnt > 9 ){ s5cnt = 0 }
				if( s5cnt < 0 ){ s5cnt = 9 }
				$('.s5Slide-wrap').stop().animate({ left:-(slideWs5*s5cnt) }, 0);
			});
		}
		
		//다음카운트 함수
		function s5nextCountFn(){
			s5cnt++;
			s5slideFn();
		}
		
		//next버튼 클릭 이벤트
		$('.s5-nextBtn').on({
			click: function(){
				if( !$('.s5Slide-wrap').is(':animated') ){
					s5nextCountFn();
				}
			}
		});
		
		//이전카운트 함수
		function s5prevCountFn(){
			s5cnt--;
			s5slideFn();
		}
		
		//prev버튼 클릭 이벤트
		$('.s5-prevBtn').on({
			click: function(){
				if( !$('.s5Slide-wrap').is(':animated') ){
					s5prevCountFn();
				}
			}
		});
		
		//터치 이벤트
		$('.s5Slide-wrap').swipe({
			swipeLeft:	function(){
				if( !$('.s5Slide-wrap').is(':animated') ){
					s5nextCountFn();
				}
			},
			swipeRight:	function(){
				if( !$('.s5Slide-wrap').is(':animated') ){
					s5prevCountFn();
				}
			}			
		});
	
	
	
})(jQuery,window,document);//section5.js