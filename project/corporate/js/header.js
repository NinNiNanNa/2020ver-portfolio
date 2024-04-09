(function(window,document,$,undefined){
	
	var header = {
			url: 0,
			winW : 0,
			app: 0,
			init : function(){
				header.responseFn();
				header.scrEvent();
				header.buttonEvent();
				header.smoothScrEvent();
				header.timer();
				
			},
			
			smoothScrEvent:	function(){
				//스무스 스크롤 이벤트
				$('.smoothBtn').on({
					click:	function(event){
						event.preventDefault();	
						
						header.url = $(this).attr('href');
						$('html,body').stop().animate({ scrollTop: $( header.url ).offset().top },800);		
					}
				});
			},
			
			//해상도 990초과이면 ( .resolution990 )가 보이는 현상 제거
			responseFn:	function(){
				header.winW = $(window).innerWidth();
				
				if( header.winW > 990 ){
					$('.resolution990').css({ display:'none' });
					$('.appbarBtn').removeClass('add990');
					
					header.app = 0;
					$('.resolution990').stop().hide();
					
				}
			},
			
			timer: function(){
				
				setTimeout(header.responseFn,100);
				$(window).resize(function(){
					setTimeout(header.responseFn,100);
				});
			},
			
			scrEvent: function(){
				//상단에서 스크롤 탑값이 10px이상이면 헤더 높이 그리고 배경 모두 변경 10px미만이면 해제
				$(window).scroll(function(){
					if( $(this).scrollTop() >=10 ){
						$('#header').addClass('addFixed');
					}
					else{
						$('#header').removeClass('addFixed');
					}
				});
			},
			
			buttonEvent:	function(){
				//3선메뉴버튼 클릭 이벤트 Toggle Button
				//모바일메뉴박스 우측에서 좌측으로 부드럽게 슬라이딩 애니멩션
				$('.appbarBtn').on({
					click:	function(){
						
						$(this).toggleClass('add990');
						
						if( header.app == 0 ){
							header.app = 1;
							$('.resolution990').stop().show();
							
						}
						else{
							header.app = 0;
							$('.resolution990').stop().hide();
						}
						
					}
				});
			}
		
	};
	header.init();	
		
	
	
	
	
})(window,document,jQuery);
//header.js