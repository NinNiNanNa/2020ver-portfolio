(function($,window,document,undefined){
	
	var section6 = {
		winW : 0,
		winH : 0,
		imgW : $('#modal img').innerWidth,
		imgH : $('#modal img').innerHeight,
		cnt : 0,
		setId : 0,
		init : function(){
			section6.responseFn();
			section6.timer();
			section6.buttonEventFn();
		},
		responseFn: function(){
			section6.winW = $(window).innerWidth();
			section6.winH = $(window).innerHeight();
			section6.imgW = $('#modal img').innerWidth();
			section6.imgH = $('#modal img').innerHeight();
			section6._left = (section6.winW-section6.imgW)/2;
			section6._top = (section6.winH-section6.imgH)/2;
			
			if( section6.winW > 900 ){
				$('#modal .modal-image').stop().animate({ left:section6._left, top:section6._top },200);
			}
			else{
				$('#modal .modal-image').stop().animate({ left:0, top:section6._top },200);
			}
		},
		timer: function(){
			setTimeout(section6.responseFn,100);
			
			$(window).resize(function(){
				clearTimeout(section6.setId);
				section6.setId = setTimeout(section6.responseFn,100);
			});
		},
		buttonEventFn: function(){
			//프로젝트 이미지 클릭 시 모달창 띄우기 & 스크롤 없애기
			$('.projects').each(function(idx){
				$(this).on({
					click:	function(){
						section6.cnt = idx;

						$('#modal .modal-image img').stop().fadeOut(0).fadeIn(1000).attr('src', './img/agency-work-0' + ( section6.cnt + 1 ) + '.jpg' );
						$('html').addClass('addScroll');
						$('#modal').css({ display:'block' });
						setTimeout(section6.responseFn,100);
						
					}
				});
			});
			//다음 모달 이미지 카운트
			$('.modalArrowRightBtn, #modal .modal-image').on({
				click:	function(event){
					event.stopPropagation();
					section6.cnt++;
					if( section6.cnt > 5 ){
						section6.cnt = 0;
					}
					$('#modal .modal-image img').stop().fadeOut(0).fadeIn(1000).attr('src', './img/agency-work-0' + ( section6.cnt + 1 ) + '.jpg' );
					
				}
			});
			//이전 모달 이미지 카운트
			$('.modalArrowLeftBtn').on({
				click:	function(event){
					event.stopPropagation();
					section6.cnt--;
					if( section6.cnt < 0 ){
						section6.cnt = 5;
					}
					$('#modal .modal-image img').stop().fadeOut(0).fadeIn(1000).attr('src', './img/agency-work-0' + ( section6.cnt + 1 ) + '.jpg' );
				}
			});
			//닫기버튼 클릭 시 모달창 닫기
			$('.modalCloseBtn').on({
				click:	function(){
					$('#modal').stop().hide();
					$('html').removeClass('addScroll');
				}
			});
			//모달 자신을 클릭 시 모달창 닫기
			$('#modal').on({
				click:	function(event){
					
					if( event.target == event.currentTarget ){
						$('#modal').stop().hide();
						$('html').removeClass('addScroll');
					}
					
				}
			});
			
		}
	}
	section6.init();
	
})(jQuery,window,document);//section6.js