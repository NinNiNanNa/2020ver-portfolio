$(function(){
	var s8cnt = 0;
	
	var s8T = 0;
	
	var s8z = 0;
	
	$(window).scroll(function(){
		
		if( $(this).scrollTop() >= $('#section7').offset().top+100 ){
			if( s8T == 0 ){
				s8T = 1;
				s8AniFn();
			}
		}
		else{
			s8T = 0;
			s8AniFormatFn();
		}
	});
	
		function s8AniFormatFn(){
			$('.s8-title > div h2').stop().animate({ bottom:-60, opacity:0 });
			
			$('.s8-slide > div').stop().slideDown(0);
			$('.s8-slide > div').stop().slideUp(1500);
			
			$('.s8-slide-pageBtn0').stop().animate({ bottom:-50, opacity:0 });
			$('.s8-slide-pageBtn1').stop().animate({ bottom:-50, opacity:0 });
			$('.s8-slide-pageBtn2').stop().animate({ bottom:-50, opacity:0 });
			$('.s8-slide-pageBtn3').stop().animate({ bottom:-50, opacity:0 });
			$('.s8-slide-pageBtn4').stop().animate({ bottom:-50, opacity:0 });
			
			$('.s8-slide-line').stop().animate({ width:0 },0);
			
		}
		
		
		function s8AniFn(){
			$('.s8-title > div h2').stop().animate({ bottom:0, opacity:1 },1000);
			
			$('.s8-slide > div').stop().slideUp(0);
			$('.s8-slide > div').stop().slideDown(1500);
			
			$('.s8-slide-pageBtn0').stop().animate({ bottom:0, opacity:1 },1000);
			$('.s8-slide-pageBtn1').stop().delay(200).animate({ bottom:0, opacity:1 },1000);
			$('.s8-slide-pageBtn2').stop().delay(300).animate({ bottom:0, opacity:1 },1000);
			$('.s8-slide-pageBtn3').stop().delay(400).animate({ bottom:0, opacity:1 },1000);
			$('.s8-slide-pageBtn4').stop().delay(500).animate({ bottom:0, opacity:1 },1000);
			
			$('.s8-slide-line').stop().animate({ width:1623 },3000);
			
		}
		
		//페이지버튼 객체 배열
		$('.s8-slide-pageBtn').each(function(idx){
			$(this).on({
				click: function(){
					s8z = s8cnt;
					s8cnt = idx;
					s8SlideFn();
				}
			});
		});
		
		
		
		//페이지버튼 이벤트 함수
		function s8pageBtnEventFn(a){
			$('.s8-slide-pageBtn-wrap li').removeClass('addpageBtn');
			$('.s8-slide-pageBtn-wrap li').eq(a).addClass('addpageBtn');
		}
		
		
		//s8슬라이드 함수
		function s8SlideFn(){
			
			$('.s8-slide').css({ zIndex:1 }).animate({ opacity:0 },0);
			
			$('.s8-slide').eq(s8z).css({ zIndex:2 }).animate({ opacity:1 },0);
			
			$('.s8-slide').eq(s8cnt).css({ zIndex:3 }).animate({ opacity:0 },0).animate({ opacity:1 },1000);
			
			if( s8cnt > 4 ){ s8cnt = 0; }
			if( s8cnt < 0 ){ s8cnt = 4; }
			
			s8z = (s8cnt==0?4:s8cnt-1);
			
			if( s8cnt > 4 ){
				s8pageBtnEventFn(0);
			}else{
				s8pageBtnEventFn(s8cnt);
			}
		}
});//s8Slide.js