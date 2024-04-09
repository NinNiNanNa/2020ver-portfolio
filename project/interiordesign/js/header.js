(function($,window,document,undefined){
	
	var header = {
		url : 0,
		winW : 0,
		app : 0,
		t : 0,
		init : function(){
			header.scrollEvent();
			header.responseFn();
			header.timer();
			header.buttonEvent();
		},
		//스트롤 이벤트
		scrollEvent: function(){
				$('.smoothBtn').on({
					click:	function(event){
						event.preventDefault();

						$('.smoothBtn').removeClass('addMenu');
						$(this).addClass('addMenu');

						header.url = $(this).attr('href');
						$('html,body').stop().animate({ scrollTop: $( header.url ).offset().top },800);
						
					}
				});
			
			$(window).scroll(function(){
				if( $(this).scrollTop() >=10 ){
					$('#header').addClass('addFixed');
				}
				else{
					$('#header').removeClass('addFixed');
				}
			});
		},
		//해상도 990초과이면 ( .resolution990 )가 보이는 현상 제거
		responseFn: function(){
			header.winW = $(window).innerWidth();
			
			if( header.winW > 990 ){
				$('.resolution990').css({ display:'none' });
				$('.appbarBtn').removeClass('add990');
				
				header.app = 0;
				$('.resolution990').stop().hide();
				
			}
		},
		//실행 함수
		timer: function(){
			
			setTimeout(header.responseFn,100);
			$(window).resize(function(){
				setTimeout(header.responseFn,100);
			});
		},
		//3선메뉴버튼 클릭 이벤트 Toggle Button
		buttonEvent: function(){
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
	}
	header.init();
	
})(jQuery,window,document);//header.js