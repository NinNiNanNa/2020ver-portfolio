(function($,window,document,undefined){
	
	var headT = app = headM960 = headS960 = 0;
	
	var winW = $(window).innerWidth();
	
	var winH = $(window).height();
	var docH = $(document).height();
	var navH = $('#header').outerHeight();
	var lastScrollTop = 0;
	var moveScroll;
	
		function resizeHFn(){
			winW = $(window).innerWidth();
			
			if( winW > 960 ){
				app = 0;
				$('html').removeClass('add960');
				$('.searchIconBtn').css({ display:'block' });
				$('.gnb960').stop().hide();
				$('.appBarBtn').removeClass('addAppbar');
				
				headM960 = 0;
				$('.mainBtn960').removeClass('addMainColor');
				$('.mainBtn960').next('.sub960').stop().show();
				
				headS960 = 0;
				$('.subBtn960').removeClass('addSubColor');
				$('.subBtn960').next('.ssub960').stop().hide();
			}
		}
		resizeHFn();
		setTimeout(resizeHFn,100);
		
		$(window).resize(function(){
			resizeHFn();
			setTimeout(resizeHFn,100);
		});

		
		$(window).scroll(function(){
			if( $(window).scrollTop() >= 10 ){
				scr=1;
				$('#header').addClass('on');
				
			}
			else{
				scr=0;
				t=0;
				if( app==0 ){
					$('#header').removeClass('on');
				}
			}
		});	
		
		
		
		
	
		//메인메뉴버튼 마우스엔터 시 서브메뉴&배경 나타내기
		$('.mainBtn').on({
			mouseenter:	function(){
				$('.sub').stop().slideUp(0);
				$(this).next().stop().slideDown(0);
				
				$('.search').stop().slideUp(0);
				
				$('.subBg').stop().show();
				
				
			},
			focusin:	function(){
				$('.sub').stop().slideUp(0);
				$(this).next().stop().slideDown(0);
				
				$('.subBg').stop().show();
				
			}
		});
		//메인메뉴 마우스리브 시 서브메뉴&배경 사라지기
		$('.gnb').on({
			mouseleave: function(){
				$('.sub').stop().slideUp(0);
				$('.subBg').stop().hide();
			}
		});
		
		//검색아이콘 클릭 시 검색창& 배경 나타내기
		$('.searchIconBtn').on({
			click: function(){
				
				if( headT == 0 ){
					headT = 1;
					$('.search').stop().slideUp(0);
					$(this).next().stop().slideDown(0);
					
					$('.subBg').stop().show();
				}
				else{
					headT = 0;
					$('.search').stop().slideUp(0);
					$('.subBg').stop().hide();
				}
			}
		});
		
		
		//해상도 960px
		//앱바 버튼
		$('.appBarBtn').on({
			click:	function(){
				$(this).toggleClass('addAppbar');
				$('.sub960').stop().hide();
				$('.ssub960').stop().hide();
				$('.search').stop().slideUp(0);
				$('.subBg').stop().hide();
				
				
				
				if( app == 0 ){
					app = 1;
					$('html').addClass('add960');
					$('.searchIconBtn').css({ display:'none' });
					$('.gnb960').stop().show();
					
				}
				else{
					app = 0;
					$('html').removeClass('add960');
					$('.searchIconBtn').css({ display:'block' });
					$('.gnb960').stop().hide();
					
					headM960 = 0;
					$('.mainBtn960').removeClass('addMainColor');
					$('.mainBtn960').next('.sub960').stop().show();
					
					headS960 = 0;
					$('.subBtn960').removeClass('addSubColor');
					$('.subBtn960').next('.ssub960').stop().hide();
					
				}
			}
		});
		
		//메인메뉴
		$('.mainBtn960').on({
			click:	function(){
				
				if( headM960 == 0 ){
					headM960 = 1;
					$(this).addClass('addMainColor');
					$(this).next('.sub960').stop().show();
					
					
				}
				else{
					headM960 = 0;
					$(this).removeClass('addMainColor');
					$(this).next('.sub960').stop().hide();
					
					
				}
			}
		});
		
		//서브메뉴
		$('.subBtn960').on({
			click:	function(){
				
				if( headS960 == 0 ){
					headS960 = 1;
					$(this).addClass('addSubColor');
					$(this).next('.ssub960').stop().show();
					
					
				}
				else{
					headS960 = 0;
					$(this).removeClass('addSubColor');
					$(this).next('.ssub960').stop().hide();
					
					
				}
			}
		});
	
	
})(jQuery,window,document);//header.js