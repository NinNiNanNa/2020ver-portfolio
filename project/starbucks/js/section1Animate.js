$(function(){
	
	//분석
	//섹션1의 애니메이션 구현
	//시나리오 - 스토리보드 - 완성이미지 그림으로 도식화해서 표현 - 프로토타입
	//애니메이션은 3번이미지 박스를 처음 페이드 인 0.8초(800)간 부드럽게 나타남
	//		  3번이미지 박스가 보인 뒤 다음 1번이미지 박스를 페이드 인 1초(800)간 부드럽게 나타남
	//		  1번이미지 박스가 보인 뒤 다음 2번이미지 박스를 페이드 인 1초(800)간 부드럽게 나타남
	//		  2번이미지 박스가 보인 뒤 다음 4번이미지 박스를 페이드 인 1초(800)간 부드럽게 나타남
	//		  4번이미지 박스가 보인 뒤 다음 5번버튼 박스를 페이드 인 1초(1000)간 부드럽게 나타남
	//코딩
	//1.	Function 함수생성( ){애니메이션1,애니메이션2,애니메이션3,애니메이션4,애니메이션5,}
	function s1AniFn(){
		$('.sec1-el-3').stop().delay(600).animate({opacity:1},100, function(){
			$('.sec1-el-1').stop().animate({opacity:1},1000, function(){
				$('.sec1-el-2').stop().animate({opacity:1},1000, function(){
					$('.sec1-el-4').stop().animate({opacity:1},1000, function(){
						$('.sec1-el-5').stop().animate({opacity:1},1000);
					});
				});
			});
		});
	}
	s1AniFn(); //로딩시 곧바로 함수실행
});
//section1Animate.js