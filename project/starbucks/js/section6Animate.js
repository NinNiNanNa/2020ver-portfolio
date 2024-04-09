$(function(){
	
	var s6T = 0;
	//스크롤 이벤트에서 위에서 특정 섹션까지의 간격 탑값 찾는걸  공부
	//섹션1의 탑값
	/*
	console.log( '섹션1 top값 : ' + $('#section1').offset().top );
	console.log( $('#section1').offset().left );
	
	console.log( '섹션2 top값 : ' + $('#section2').offset().top );
	console.log( '섹션3 top값 : ' + $('#section3').offset().top );
	console.log( '섹션4 top값 : ' + $('#section4').offset().top );
	console.log( '섹션5 top값 : ' + $('#section5').offset().top );
	console.log( '섹션6 top값 : ' + $('#section6').offset().top );
	*/
	
	//top값을 각 객체로 불러와 이벤트를 줌(섹션5애니메이션에선 300이란 값을 임의를 줘 이벤트해줌.)
	$(window).scroll(function(){
		if( $(window).scrollTop() >= $('#section4').offset().top ){
			if( s6T == 0 ){
				s6T = 1;
				sec6AniFn();
			}
		}
		else{	//섹션4미만이면 : 위로 올라가면 초기화
			s6T = 0;
			sec6AniFormatFn();
			
		}
	});
	
	//스크롤 이벤트
	//초기화
	//섹션4의 탑값 도달시 부드럽게 보이는 애니메이션(페이드아웃 효과) fadeOut
	function sec6AniFormatFn(){
		
		$('.sec6-ani').stop().animate({ opacity:0 },1000);
	}
	
	//애니메이션
	//섹션4의 탑값 도달시 부드럽게 보이는 애니메이션(우측 이미지 3초간 페이드인 효과) fadeIn
	function sec6AniFn(){
		$('.sec6-ani').stop().animate({ opacity:1 },3000);
	}

});

//section6Animate.js