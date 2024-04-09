$(function(){
	var cnt = t = p = 0;	// 숫자 증가 또는 감소하는 변수는 반드시 초기값 변수 설정한다.
		
		//9.터치 이벤트 (스와이프)
		
		$('.section3-slide-wrap').swipe({
			swipeLeft: function(){	//	다음슬라이드 터치 이벤트(스와이프레프트:swipeLeft) : 우 -> 좌 (손가락 or 마우스)로 당김
				nextSlideCountFn();
				t = 1;	
				$('.pausePlayBtn').children().attr('src','./img/main_prom_play.png');
				clearInterval( setId );	

			},
			swipeRight: function(){	//	이전슬라이드 터치 이벤트(스와이프라이트:swipeRight) : 좌 -> 우 (손가락 or 마우스)로 당김
				prevSlideCountFn();
				t = 1;	
				$('.pausePlayBtn').children().attr('src','./img/main_prom_play.png');
				clearInterval( setId );
			}
		});
		
		
		
		
		
		
		
		//8.프로모션 버튼 클릭 이벤트 슬라이드가 노출이되면 : 자동타이머 함수를 실행함.
		//섹션3 전체를 슬라이드 다운&업
		$('.promotionBtn').on({
         click:   function(){

            
            if( p == 0 ){      //슬라이드가 열린 상태(Open)
               $(this).addClass('addPromotion'); //버튼 배경 이미지를 Up으로 변경
				//스타일 직접 변경 가능
               // $(this).css({backgroundImage:'url(../img/btn_prom_up.png)'}); 
			   
               $('#section3').stop().slideDown(300);
               p = 1;
               autoPlayFn();  //프로모션 클릭시 실행1번 : 타이머 작동                         
            }
            else{   //닫힌 상태(Close) slideUp();
               $(this).removeClass('addPromotion'); //버튼 배경 이미지를 Down으로 변경 
			   // 스타일 직접 변경 가능
			   // $(this).css({backgroundImage:'url(../img/btn_prom_down.png)'}); 
			   
               $('#section3').stop().slideUp(300);
               var cnt = t = p = 0;    //모두 초기화 
               clearInterval(setId); //자동타이머 일시중지
			   //animate의 값 left:0 초기화
               $('.section3-slide-wrap').stop().animate({left:-(819*cnt)},0);
               //첫번째 슬라이드의 opacity:1 초기화 
               $('.section3-slide-wrap .slide').removeClass('addCurrent');
               $('.section3-slide-wrap .slide').eq(cnt).addClass('addCurrent');
			   //일시중지 플레이버튼 초기화 ||
			   $('.pausePlayBtn').children().attr('src','./img/main_prom_stop.png');
			   //페이지버튼 첫번째로 설정 초기화
               pageBtnEventFn(cnt);
            }
         }
      });
		
		
		//7. 정지와 재시작 버튼 클릭 이벤트
		//토글(Toggle) 기능 : 버튼하나로 두가지 기능을 수행 하는 것 한영키(한글/영문) 대소문자(대/소문자)
		//토글 알고리즘 : 숫자로 0,1   문자로 off(0),on(1)   거짓(0)/참(1)   false(0)/true(1)   아니오(0)/예(1)   no(0)/yes(1)
		$('.pausePlayBtn').on({
			click: function(){
				
				
				if( t == 0 ){	//처음 클릭 시 t변수 'no'이면 ( 비교연산 == , === )
					t = 1;	//클릭한 상태는 1로 설정
					clearInterval( setId );		//자동 타이머 중지 setInterval()을중지 		clearInterval(셋인터벌아이디);
					$(this).children().attr('src','./img/main_prom_play.png');	//일시정지버튼 이미지를 클릭하여 플레이버튼 이미지로 변경 , attr 속성변경 attr('src','바뀌어질경로와파일이름')
				}
				else{	//t변수가 t = 'yes'; 인 경우
					t = 0;	//클릭 안한 상태로 0으로 설정 : 또 클릭 할수 있도록!
					nextSlideCountFn();	 //현재 다음 슬라이드 곧바로 실행 그리고
					autoPlayFn();	//자동타이머 재실행 3초후 실행
					$(this).children().attr('src','./img/main_prom_stop.png');	//플레이버튼 이미지를 클릭하여 일시정지버튼 이미지로 변경 , attr 속성변경 attr('src','바뀌어질경로와파일이름')
				}
				
			}
		});
		
		
		//6. 자동타이머 (자동실행) 3초간격
		//다음슬라이드 카운트 함수를 3초후에 한번씩 호출 실행 반복
		function autoPlayFn(){
			setId = setInterval(nextSlideCountFn, 3000); //기억장치가 항상 바뀌므로 setId라는 변수를 줌( 나중에 clearInterval할때 불러오기위해 )
		}
		// autoPlayFn(); //프로모션에서 사용하면 2개 자동화(버블링)
		
		
		//5. 페이지네이션 알고리즘
		//페이지버튼 클릭 시 해당 페이지버튼 번호(인덱스번호 index)에 해당하는 슬라이드 구현
		//객체배열 메소드 - each() index Number 반환함.
		// $('.pageBtn').each();
		$('.pageBtn').each(function(idx){
			//$('.pageBtn').eq(idx).on({ //this(2개이상의 특정을 줄때 씀)를 안 쓸 경우
			$(this).on({
				click: function(){
					cnt = idx;	//클릭한 인덱스번호를 슬라이드 번호로 저장
					mainSlideFn();
					//자동실행 일시정지 구현
					t = 1;	
					clearInterval( setId );	
					// $('.pausePlayBtn img').attr('src','./img/main_prom_play.png'); //자식이 하나인경우엔 태그를 직접적이로 써도됨. 2개이상은 children()
					$('.pausePlayBtn').children().attr('src','./img/main_prom_play.png');
				}
			});
		});
		
		
		
		//4. 페이지버튼 표시(Mark) 이벤트 - 현재 슬라이드 번호에 녹색버튼으로 표시
		// 메인슬라이드 함수에서 - 함수호출
		// 페이지버튼 클릭 - 함수호출
		//페이지버튼 자식요소(children())인 이미지 src 속성(attr)을 변경 표시
		//		 부모요소(parent())
		function pageBtnEventFn(cnt){	//0 또는 cnt 값이 전달 받는다. z변수로
			$('.pageBtn').children().attr('src','./img/main_prom_off.png');	//버튼 자식요소 모두 초기화 off
			$('.pageBtn').eq(cnt).children().attr('src','./img/main_prom_on.png'); //현재 슬라이드 번호만 on
		}
		
		
	
		//3-1. 다음슬라이드 화살이미지 버튼(nextBtn - 선택자) 사용(on) 클릭(click) 이벤트 - 다음슬라이드 카운트 함수호출()
		$('.nextBtn').on({
			click: function(){
				//부정문!: 애니메이션이 진행중이 아닐 때 다음슬라이드카운트함수 호출 - 조건문 과거형 animated
				if( !$('.section3-slide-wrap').is(':animated') ){
					nextSlideCountFn();
				}
				else{	//else : 아니면~, 그 밖에~, 그 외에~  애니메이션이 진행중인 경우 버튼 클릭을 취소
					return false; //버튼클릭을 취소 false 거짓 == 0(off) true == 1(on)
				}
				t = 1;	
				clearInterval( setId );	
				$('.pausePlayBtn').children().attr('src','./img/main_prom_play.png');
			}
			
			
		});
		//3-2. 이전슬라이드 화살이미지 버튼(prevBtn - 선택자) 사용(on) 클릭(click) 이벤트 - 아전슬라이드 카운트 함수호출()
		$('.prevBtn').on({
			click: function(){
				if( !$('.section3-slide-wrap').is(':animated') ){
					prevSlideCountFn();
				}
				else{
					return false;
				}
				t = 1;	
				clearInterval( setId );	
				$('.pausePlayBtn').children().attr('src','./img/main_prom_play.png');
			}
			
			
		});
	
		//2-1. 다음슬라이드(nextSlide) 카운트(cnt++) 함수 : 우 -> 좌로 이동 (좌측으로 당긴 효과)
		function nextSlideCountFn(){
			cnt++;
			mainSlideFn();
		}
		//2-2. 이전슬라이드(prevSlide) 카운트(cnt--) 함수 : 좌 -> 우로 이동 (우측으로 당긴 효과)
		function prevSlideCountFn(){
			cnt--;
			mainSlideFn();
		}
		
		//1. 메인슬라이드 함수
		function mainSlideFn(){
			$('.section3-slide-wrap').stop().animate({ left:-(819*cnt) }, 500, function(){
				// 마지막 슬라이드를 초과한 경우 초기화 - 조건문 if문
				// if( 조건 ){ 참인경우내용 }
				// if( cnt > 1){ cnt = 0; }
				if( cnt > 1 ){ // cnt >= 2
					cnt = 0;	//첫번째 슬라이드로 초기화
				}
				// 첫번째 슬라이드 미만인 경우 초기화
				// if( cnt < 0 ){ cnt = 1; }
				if( cnt < 0 ){ // cnt <= -1
					cnt = 1;	//마지막 슬라이드로 초기화
				}
				$('.section3-slide-wrap').stop().animate({ left:-(819*cnt) }, 0);
				
				$('.section3-slide-wrap .slide').removeClass('addCurrent');
				$('.section3-slide-wrap .slide').eq(cnt).addClass('addCurrent');
				//html에서 slide클래스를 2개만 주었을 때 .slide로 가능 eq(cnt) -> 0 1 ...
				//CSS에서 .slide를 지우고 li로 기입
				
				// $('.section3-slide-wrap li').removeClass('addCurrent');
				// $('.section3-slide-wrap li').eq(cnt+1).addClass('addCurrent');
				// cnt = 0 인 경우 0 + 1 = 1
				// cnt = 1 인 경우 1 + 1 = 2
				//이유 총 슬라이드갯수 4개 인덱스번호는 0 1 2 3
				//이중에 인덱스번호 1(0)과 2(1)에만 밝아짐(페이드인) 사용
				
			});
			//페이지버튼 이벤트 조건문
			if( cnt > 1 ){	// cnt >= 2
				pageBtnEventFn(0);	//매개변수 값 전달
			}
			else{
				pageBtnEventFn(cnt);	//매개변수 값 전달
			}
		}
	
});
//slide.js