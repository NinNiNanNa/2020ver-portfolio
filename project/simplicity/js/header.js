(function($,window,document,undefined){ //매개변수
	
	//상단에서 10px이상 스크롤이 발생하면
	//배경 흰색 그리고 텍스트를 검정으로 변화하는 이벤트
	$(window).scroll(function(){
		if( $(this).scrollTop() >= 10 ){
			$('#header').addClass('addFixed');
		}
		else{
			$('#header').removeClass('addFixed');
		}
	});
	
	
	
	//앱바버튼을 클릭하여 좌측에 숨겨있는
	//모바일 메뉴박스를 좌측에서 우측으로 부드럽게 이동시킨다.
	//그리고 해더 영역은 우측으로 부드럽게 이동한다.
	//모바일 메뉴박스(mobile)를 클릭하여 다시 원위치 시킨다.
	$('.appBarBtn').on({
		click:	function(){
			$('#header').stop().animate({ left: 100+'%', marginLeft:-50 }, 300);
			$('.appBar').stop().animate({ left: -10 }, 300);
			$('.mobile').stop().animate({ left:    0+'%' }, 300);
		}
	});
	
	$('.mobile').on({	//event.target 부모만 클릭이 가능(=자식요소 제외)
		click:	function(){
			//event.preventDefault(); //이전이벤트 취소
			//부정문
			if( event.target !== event.currentTarget ){
				return false;	//버튼 클릭 이벤트를 취소
			}
			else{
				$('#header').stop().animate({ left:    0+'%', marginLeft:0 }, 300);
				$('.appBar').stop().animate({ left: 0 }, 300);
				$('.mobile').stop().animate({ left: -100+'%' }, 300);
			}
			
			//긍정문
			// if( event.target == event.currentTarget ){
				// $('#header').stop().animate({ left:    0+'%', marginLeft:0 }, 300);
				// $('.mobile').stop().animate({ left: -100+'%' }, 300);
				
			// }
			
			
		}
	});
	
	
})(jQuery,window,document); //아그먼트
//header.js