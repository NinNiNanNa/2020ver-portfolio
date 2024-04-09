(function($,window,document,undefined){
		
		var portfolio = {
				winW : 0,
				imgW : 0,
				imgH : 0,
				portH : 0,
				rowS : 0,
				colS : 0,
				imgHRate : 600/800,
				n : $('.portfolio-list').length,
				btnNum : 0,
				s : [],
				h : [],
				setId : 0,
				cnt : 0,
				init:	function(){
					portfolio.responseFn();
					portfolio.buttonEvent();
					portfolio.timer();
					portfolio.modal();
				},
				
				responseFn: function(){
						portfolio.winW = $(window).innerWidth();

						if( portfolio.winW > 1170 ){
							portfolio.colS=4;
						}
						else if( portfolio.winW == 1170 ){
							portfolio.colS=4;
						}
						else if( portfolio.winW > 980 ){
							portfolio.colS=3;				
						}
						else if( portfolio.winW > 600 ){
							portfolio.colS=2;				
						}
						else{
							portfolio.colS=1;				
						}
						portfolio.imgW = portfolio.winW/portfolio.colS;
						portfolio.imgH = portfolio.imgW*portfolio.imgHRate;
						
						switch(this.btnNum){
							case 0:
								portfolio.n=8;
								break;
							case 1:
								portfolio.n=5;
								break;
							case 2:
								portfolio.n=5;
								break;
							case 3:
								portfolio.n=5;
								break;
							case 4:
								portfolio.n=5;
						}
						
						portfolio.rowS = Math.ceil(portfolio.n/portfolio.colS);
						portfolio.portH = portfolio.imgH * portfolio.rowS;

						$('.portfolio').css({ height: portfolio.portH });
						$('.portfolio-list').removeClass('addZoom');

						$('.slide').css({ width: portfolio.winW });
						$('.slide-wrap').css({ width: portfolio.winW*3 });
						$('.slide-wrap').stop().animate({ left:-(portfolio.winW*portfolio.cnt) },0);
						
						switch(portfolio.btnNum){
							case 0:
								portfolio.h = [];
								portfolio.s = [0,1,2,3,4,5,6,7];				
								break;
							case 1:
								portfolio.h = [0,1,4];
								portfolio.s = [2,3,5,6,7];
								break;					
							case 2:
								portfolio.h = [0,5,6];					
								portfolio.s = [1,2,3,4,7];
								break;						
							case 3:
								portfolio.h = [1,3,5];					
								portfolio.s = [0,2,4,6,7];
								break;
							case 4:
								portfolio.h = [3,4,6];					
								portfolio.s = [0,1,2,5,7];
						}
						
						//HIDE 제어문 - 반복문 FOR
						for(var i=0; i<portfolio.h.length; i++){
							$('.portfolio-list').eq(portfolio.h[i]).stop().hide();
						}
						
						//SHOW 제어문 - 반복문 FOR
						var k=-1;
						for(var i=0; i<portfolio.rowS; i++){
							for(var j=0; j<portfolio.colS; j++){
								k++;
								
								if( k>=portfolio.s.length){
									break;
								}
								
								$('.portfolio-list').eq(portfolio.s[k]).stop().show().animate({ width:(portfolio.imgW), height:(portfolio.imgH), top:(portfolio.imgH*i), left:(portfolio.imgW*j) },300);
							}
						}
						
						$('.portfolio-list').addClass('addZoom');
						
					},
					
					timer:	function(){
						setTimeout(portfolio.responseFn,100);
						$(window).resize(function(){
							clearTimeout(portfolio.setId);			
							portfolio.setId = setTimeout(portfolio.responseFn,100);
						});						
					},
					
					buttonEvent:	function(){
						$('.portMainBtn').each(function( index ){
							$(this).on({
								click:	function(){
									portfolio.btnNum = index;
									portfolio.responseFn();
									$('.portMainBtn').removeClass('addportBtn');
									$(this).addClass('addportBtn');
								}
							});
						});	
					},

					modal: function(){

						function slideFn(){
							$('.slide-wrap').stop().animate({ left:-(portfolio.winW*portfolio.cnt) },600);
							pageBtnFn(portfolio.cnt);
						}

						function nextCountFn(){
							portfolio.cnt++;
							if(portfolio.cnt>2){portfolio.cnt=2}
							slideFn();
						}
				
						function prevCountFn(){
							portfolio.cnt--;
							if(portfolio.cnt<0){portfolio.cnt=0}
							slideFn();			
						}

						function pageBtnFn(z){
							$('.pageBtn').removeClass('addPage');
							$('.pageBtn').eq(z).addClass('addPage');
						}
						
						$('.pageBtn').each(function(index){
							$(this).on({
								click:	function(){
									portfolio.cnt = index;
									slideFn();
								}
							});
						});
				
						$('.slide-wrap').swipe({
							swipeLeft:	function(){
								if( !$('.slide-wrap').is(':animated') ){
									nextCountFn();					
								}
							},
							swipeRight:	function(){
								if( !$('.slide-wrap').is(':animated') ){
									prevCountFn();
								}
							}			
						});

						//포트폴리오 이미지 박스 클릭이벤트
						$('.portfolio-list').on({
							click:	function(){
								$('html').addClass('addScroll');
								$('#modal').stop().show();
							}
						});

						//모달창 닫기 버튼 클릭이벤트
						$('.modal-closeBtn').on({
							click:	function(){
								$('html').removeClass('addScroll');
								$('#modal').stop().hide();
							}
						});
						
						//모달 자신 클릭이벤트
						$('#modal').on({
							click:	function(event){
								if( event.target == event.currentTarget ){
									$('html').removeClass('addScroll');
									$('#modal').stop().hide();
								}
							}
						});

					}
					
		}; 
		portfolio.init();

})(jQuery,window,document);
//section4Portfolio.js





		







