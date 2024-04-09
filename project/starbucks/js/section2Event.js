$(function(){
	//공지사항목록 애니메이션
	
	var noticeCnt = 0;
	
	setInterval( nextNoticeCountFn, 3000);
	
	//2. 다음 공지사항 목록 카운트 함수
	function nextNoticeCountFn(){
		noticeCnt++;	//1 2 3 4 5
		if( noticeCnt > 4 ){	// 0~4 > 초과하면 (목록5개) 초기값 0으로 초기화
			noticeCnt = 0;
		}
		 // 1 2 3 4 0 1 2 3 4 0 1 2 3 4 ...
		noticeListFn();
	}
	
	//1. 공지사항 목록 메인함수
	function noticeListFn(){
		$('.notice').css({ zIndex:2 }).css({ top:29 },0); //모든목록 아래 초기화
		//noticeCnt 가 0인 경우는 4로 설정 조건문
		
		//3항연산자로 쓸 경우 - 조건문?참:거짓
		//if( noticeCnt == 0 ){4}else{ noticeCnt-1 }
		//noticeCnt == 0?4:noticeCnt-1
		$('.notice').eq( noticeCnt === 0?4:noticeCnt-1 ).css({ zIndex:1 }).animate({ top:0 },0);
		//				noticeCnt = 0 1 2 3 4 0 1 2 3 4 ...
		$('.notice').eq(noticeCnt).css({ zIndex:2 }).animate({ top:29 },0).animate({ top:0 },500);
		//				noticeCnt = 1 2 3 4 0 1 2 3 4 0 ...
		
		
		/*
		//if조건문으로 쓸 경우
		if(noticeCnt == 0){
			k = 4;
		}else{
			k = noticeCnt-1;
		}
		$('.notice').eq( k ).css({ zIndex:1 }).animate({ top:0 },0);
		$('.notice').eq(noticeCnt).css({ zIndex:2 }).animate({ top:29 },0).animate({ top:0 },500);
		*/
	}
   
});
//section2Event.js