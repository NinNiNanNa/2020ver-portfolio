$(function() {
	//메인버튼 이벤트 on() - mouseenter
	//.sub 메뉴 아래로 부드럽게 펼친다. - slideDown(400);
	//메인버튼에 표시(마크) addClass('addMainBtn');
	
	$('.mainBtn').on({
		mouseenter:	function(){		//마우스 오버시
			$('.sub').stop().slideUp(0);	//초기화
			$(this).next().stop().slideDown(400);	//1개만
			
			$('.mainBtn').removeClass('addMainBtn');	//초기화
			$(this).addClass('addMainBtn');	//1개만
		},
		focusin:		function(){		//Tab키 눌렀을때
			$('.sub').stop().slideUp(0);	//초기화
			$(this).next().stop().slideDown(400);	//1개만
			
			$('.mainBtn').removeClass('addMainBtn');	//초기화
			$(this).addClass('addMainBtn');	//1개만	
		}
	});
	
	
	//선택자 nav 영역을 떠나면 mouseleave 이벤트
	//서브메뉴 .sub 모두 부드럽게 위로 접는다. slideUp()
	//메인버튼의 표시(addClass) 삭제(removeClass)
	
	$('nav').on({
		mouseleave: function(){		//마우스 아웃
			$('.sub').slideUp(400);
			$('.mainBtn').removeClass('addMainBtn');
		}
	});
	
	
	$('.link-1').on({
		focusout:		function(){		//키보드 접근을 떠날면 blur
			$('.sub').slideUp(400);
			$('.mainBtn').removeClass('addMainBtn');	
		}
	});
	
	
	
	
});


