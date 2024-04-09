function openPopupFn(){
    window.open('popup.html','_blank','width=500, height=483, left:0, top=0');
}

(function($,window,document,undefined){

    var kurly = {
        val:    function(){

        },
        init:   function(){
            var that = this;
                // document.href='index.html#main1_page';
                $('#main1_page').show();
                // 제이쿼리모바일의 기능을 쓰지않음
                $.mobile.ajaxLinksEnabled = false;
                $.mobile.ajaxFormsEnabled = false;
                $.mobile.ajaxEnabled = false;

                that.fnNav();
                that.fnUtil();
                that.fnMain1();
                that.fnMain1_section();
                that.fnMain1_section2();
                that.fnMain1_section5();
                that.fnMain2();
                that.fnMain3();
                that.fnMain4();
                that.fnMain5();
                that.fnMain6();
                that.fnMain7();
                that.fnMain8();
        },
        fnNav: function(){
            var mainBtnW = 0;   //버튼의 너비
            var curIndex = 0;   //클릭한 현재 버튼 인덱스 번호
            var setId = 0;

                //반응형 버튼너비
                function resizeFn(){
                    mainBtnW = $('.mainBtn').innerWidth();
                    //버튼 장식 애니메이션 기본값 위치 설정
                    $('.navDeco').stop().animate({ left: mainBtnW*curIndex }, 300);
                } 
                setTimeout(resizeFn,100);
                
                $(window).resize(function(){
                    clearTimeout( setId );
                    setId = setTimeout(resizeFn,100);
                });

                //메인 버튼 클릭 이벤트
                //상단의 네비게이션(메인메뉴버튼만 해당)
                $('.mainBtn').each(function(index){
                    $(this).on({
                        click: function(){
                            //현재 클릭한 인덱스 번호를 변수(curIndex)에 기억
                            curIndex = index;
                            
                            $('.main_page, #main6_page').stop().fadeOut(0);
                            $('.main_page').eq(index).stop().fadeIn(500);

                            //메인버튼의 애니메이션 장식
                            $('.navDeco').stop().animate({ left: mainBtnW*curIndex }, 300);
                            $('.mainBtn').removeClass('addNav');
                            $(this).addClass('addNav'); //버튼의 글자 색상 보라색
                        }
                    });
                });

                    
                //로그인 폼창 닫기(메인6의 로그인 폼을 닫기) - 네비게이션과 연동이 되어야 현재 위치를 찾아감
                $('.loginCloseBtn').on({
                    click: function(){
                        $('.main_page, #main6_page').stop().fadeOut(0);    //모든 메인페이지, 로그인 폼 닫기
                        //이전에 클릭된 메인메뉴의 선택 페이지가 노출
                        $('#main1_page').stop().fadeIn(500);    //홈으로 이동 메인페이지1열기
                        
                        //메인버튼의 애니메이션 장식
                        curIndex = 0; //폼을 닫으면 초기화
                        $('.navDeco').stop().animate({ left: mainBtnW*curIndex }, 300);
                        $('.mainBtn').removeClass('addNav');
                        $('.mainBtn').eq(0).addClass('addNav'); //버튼의 글자 색상 보라색
                    }
                });

                //하단의 네비게이션(앱바 메뉴)
                $('.navBtn').each(function(index){
                    $(this).on({
                        click: function(){
                            
                            switch( index ){
                                case 0: //버튼이 0 : 홈
									$('.navBtn').eq(3).find('img').attr('src','./images/ico_mypage.png');
									$(this).find('img').attr('src','./images/ico_home_on.png');
                                    $('.main_page, #main6_page').stop().fadeOut(0);
                                    $('#main1_page').stop().fadeIn(500);
                                    
                                    //메인버튼의 애니메이션 장식
                                    curIndex = 0; //폼을 닫으면 초기화
                                    $('.navDeco').stop().animate({ left: mainBtnW*curIndex }, 300);
                                    $('.mainBtn').removeClass('addNav');
                                    $('.mainBtn').eq(0).addClass('addNav'); //버튼의 글자 색상 보라색

                                    break;
                                case 1: //버튼이 1 : 카테고리
                                    // $('.main_page').stop().fadeOut(0);  //모든 메인페이지 안보임
                                    // $('#main8_page').stop().fadeIn(500);    //마이컬리만 보임
                                    break;
                                case 2: //버튼이 2 : 검색
                                    // $('.main_page').stop().fadeOut(0);  //모든 메인페이지 안보임
                                    // $('#main7_page').stop().fadeIn(500);    //마이컬리만 보임
                                    break;
                                case 3: //버튼이 3 : 마이컬리
									$('.navBtn').eq(0).find('img').attr('src','./images/ico_home.png');
									$(this).find('img').attr('src','./images/ico_mypage_on.png');
                                    $('.main_page').stop().fadeOut(0);  //모든 메인페이지 안보임
                                    $('#main6_page').stop().fadeIn(500);    //마이컬리만 보임
                            }
                        }
                    });
                });

        },
        fnUtil: function(){

            //상단팝업
            $('.headerPopupBtn').on({
                click: function(){
                    $('.header_popup').hide();
                    $('.main_page, #main6_page').addClass('addPopup');
                }
            });

            //하단팝업
            $('.footPopupBtn').on({
                click: function(){
                    $('.foot_popup_wrap').hide();
                    $('.goTopBtn_wrap').addClass('addFootpopup');
                    $('.main_footer > div').addClass('addFootpopup');
                }
            });

            //goTop 버튼
            $('.goTopBtn').on({
                click: function(){
                    $('html, body').stop().animate({ scrollTop: 0 },800);
                }
            });

            
            //윈도우 창의 상단에서 스크롤( BOM: scroll() ) 탑값이 100px이상이면
            //goTop버튼이 부드럽게 나타난다.(fadeIn)
            //스크롤 탑값이 100px미만이면
            //부드럽게 사라진다.(fadeOut)
            $('.goTopBtn_wrap').stop().fadeOut(0);

            $(document).scroll(function(){
                if( $(this).scrollTop() >= $('#section2').offset().top ){
                    $('.goTopBtn_wrap').stop().fadeIn(600);
                }
                else{
                    $('.goTopBtn_wrap').stop().fadeOut(600);
                }
            });

        },
        fnMain1:  function(){
            var winW = 0;
            var cnt = 0;
            var setId = 0;
            var setId2 = 0;
            var setId3 = 0;
            var second = 0;

                function resizeFn(){
                    winW = $(window).innerWidth();

                    $('.main1_slide_wrap .slide').css({ width: winW, maxWidth: winW });
                    $('.main1_slide_wrap').css({ width: winW*15, marginLeft: -(winW*1), height: $('.main1_slide_wrap .slide').innerHeight() });

                    $('.main1_slide_wrap').stop().animate({ left: -(winW * cnt) }, 0);
                }
                setTimeout(resizeFn, 100);

                $(window).resize(function(){
                    clearTimeout( setId );
                    setId = setTimeout(resizeFn, 100);
                });

                //메인 슬라이드
                function mainSlide(){
                   
                    $('.main1_slide_wrap').stop().animate({ left: -(winW * cnt) }, 600, function(){
                    
                        if( cnt > 12 ){ cnt = 0; }
                        if( cnt < 0 ){ cnt = 12; }
                        $('.main1_slide_wrap').stop().animate({ left: -(winW * cnt) }, 0);
                        //카운트 넘버
                        $('.main1_slide_count_num').text( cnt+1 );

                    });

                }

                //다음 슬라이드 카운트 함수
                function nextSlideCountFn(){
                    cnt++;
                    mainSlide();
                }
                //이전 슬라이드 카운트 함수
                function prevSlideCountFn(){
                    cnt--;
                    mainSlide();
                }

                //터치이벤트(모바일버전 스와이프)
                $('.main1_slide_wrap').on({
                    swipeleft:  function(e){
                        clearInterval( setId2 );
                        nextSlideCountFn();
                        //슬라이드가 중지된 이후
                        //카운트 타이머 설정 5초간
                        //터치가 없으면 다시 자동 타이머 실행
                        second = 0; //초기화 카운트 - 버튼 클릭 시 마다
                        clearInterval( setId3 ); //카운트 타이머 초기화(중지) - 버튼 클릭 시 마다
                        setId3 = setInterval(function(){
                            second++;
                            if( second >= 5 ){
                                nextSlideCountFn(); //즉시 다음슬라이드
                                autoTimerFn(); //자동타이머 4초 후에 실행
                                clearInterval( setId3 );
                            }
                        },1000);
                    },
                    swiperight:  function(e){
                        clearInterval( setId2 );
                        prevSlideCountFn();
                        //슬라이드가 중지된 이후
                        //카운트 타이머 설정 5초간
                        //터치가 없으면 다시 자동 타이머 실행
                        second = 0; //초기화 카운트 - 버튼 클릭 시 마다
                        clearInterval( setId3 ); //카운트 타이머 초기화(중지) - 버튼 클릭 시 마다
                        setId3 = setInterval(function(){
                            second++;
                            if( second >= 5 ){
                                prevSlideCountFn(); //즉시 이전슬라이드
                                autoTimerFn(); //4초후에 자동타이머실행
                                clearInterval( setId3 );
                            }
                        },1000);
                    }
                });

                //자동타이머
                function autoTimerFn(){
                    setId2 = setInterval(nextSlideCountFn, 3000);
                }
                setTimeout(autoTimerFn,10);


        },
        fnMain1_section:  function(){

            var winW = 0; 
            var secH = 0; 
            var secH10 = 0; 
            var imgW = 0;
            var imgW10 = 0;
            var setId = 0;
            var alvW = 0;
            var alvH = 0;
            var alvH10 = 0;
            var alvT = 0;
            var alvT10 = 0;
            var btnH = 0;

                function resizeFn(){
                    winW = $(window).innerWidth();
                    imgW = (winW * 0.437);
                    imgW10 = (winW * 0.691141);

                           $('.section_product li').css({ width: imgW }); 
                           $('.section10_recipe li').css({ width: imgW10 });

                           $('.section1_product ul').css({ width: imgW*8 });

                    //allView_wrap 너비, 높이, 패딩탑
                    alvW = (winW * 0.310844);
                    btnH = $('.allView_wrap span').innerHeight();
                    alvH = $('.product').innerHeight();
                    alvH10 = $('.recipe').innerHeight();
                    alvT = (alvH-btnH)/2;
                    alvT10 = (alvH10-btnH)/2;
                           $('.allView_wrap').css({ width: alvW });
                           $('.allViewBtn').css({ height: alvH });
                           $('#section10 .allViewBtn').css({ height: alvH10 });
                           $('.allView_wrap span').css({ top: alvT });
                           $('#section10 .allView_wrap span').css({ top: alvT10 });

                           //allViewBtn이 추가되면서 각 섹션의 마지막 버튼너비가 추가로 ul에 계산
                           $('.section3_product ul').css({ width:(imgW*6+alvW) });
                           $('.section7_product ul').css({ width:(imgW*5+alvW) });
                           $('.section8_product ul').css({ width:(imgW*6+alvW) });
                           $('.section9_product ul').css({ width:(imgW*6+alvW) });
                           $('.section10_recipe ul').css({ width:(imgW10*5+alvW) });

                    //scroll-x:scroll : 스크롤바 감추기
                    //섹션1,3,7,8,9 높이 설정 반응형
                    secH = $('.product').innerHeight()+140;
                           $('.section13789').css({ height: secH });
                    
                    //섹션10 높이 설정 반응형
                    secH10 = $('.recipe').innerHeight()+100;
                           $('#section10').css({ height: secH10 });

 
                }
                setTimeout(resizeFn,100);

                $(window).resize(function(){
                    clearTimeout(setId);
                   setId = setTimeout(resizeFn,100);
                });

        },
        fnMain1_section2:  function(){
            
            var winW = 0; 
            var imgW = 0;
            var titW = 0;
            var padT = 0;
            var padB = 0;
            var setId = 0;

                function resizeFn(){
                    winW = $(window).innerWidth();
                    imgW = (winW * 0.276891);
                    titW = (winW * 0.50);
                    padT = (imgW-35)/2;

                            if( winW > 500 ){
                                imgW = (winW * 0.276891);
                                titW = (winW * 0.50);
                                padT = (imgW-35)/2;
                            }
                            else{
                                imgW = (winW * 1)-30;
                                titW = (winW * 1)-30;
                                padT = 10;
                                padB = 20;
                            }
                            $('#section2 .img_wrap').css({ width: imgW });
                            $('#section2 .title_wrap').css({ width: titW });
                            $('#section2 .title_wrap div').css({ paddingTop: padT, paddingBottom: padB });
                            $('#section4 img').css({ width: winW }); 
                            $('#main5_section img').css({ width: winW });
                            $('#section11 img').css({ width: winW });
  
                }
                setTimeout(resizeFn,100);

                $(window).resize(function(){
                    clearTimeout(setId);
                   setId = setTimeout(resizeFn,100);
                });

        },
		fnMain1_section5:  function(){
			
            var boxLeft = 0;
			var posLeft = 0;
			var btnWidth = 0;
			var scrollMove = 0;
			
			
				
				$('.s56FilterBtn').each(function(index){
                    $(this).on({
                        click: function(){
                            boxLeft= Math.abs($('.section5_filter_button_wrap').offset().left-15);//Math.abs : 부호 -없애주는것(음수->양수)
							
							
							$('.s56FilterBtn').removeClass('addS5Filter');
							$(this).addClass('addS5Filter');
							
							
							posLeft = $(this).offset().left-15;//현재 글자가 있는 시작점 위치
							btnWidth = $(this).innerWidth();//현재 글자가 있는 실질적 너비
							
							//console.log('버튼:' + index);
							console.log('포지션Left:'+ posLeft);
							//console.log('글자길이:' +btnWidth);
							//console.log('박스전체좌측위치:'+ boxLeft);
							
							//1. 디버깅 : offset().left 문제없음, 
							//    결과 : animate:left값 문제 해결 -> 전체박스의 좌측값 위치를 절대값으로 구하고, 그것을 left 좌표에 더한다
							$('.s5navDeco').stop().animate({ left:(posLeft+boxLeft), width:btnWidth },600, 'swing')
							
							//2. 디버깅 : 화면너비에 중앙으로 정렬, animate:left 메뉴전체가 중앙으로 이동
							//    결과 : 스크롤 x값 포지션 위치를 화면의 정중앙에 위치
							//          $(window).innerWidth()/2
							//			클릭버튼의 포지션 offset().left;
							//			버튼너비 $(this).innerWidth();
							//스크롤로 움직인다. (left로 움직이려면 본체가 움직여야함 = 대신 드래그가안됌)
							
							scrollMove = ($(window).innerWidth()/2) - ((posLeft+boxLeft) + (btnWidth + 15) / 2); //<-왼쪽으로가는 결과값
							
							$('.section5_filter_view').stop().animate({ scrollLeft: -scrollMove });
                        }
                    });
                });
				
				
		},
        fnMain2:  function(){},
        fnMain3:  function(){},
        fnMain4:  function(){},
        fnMain5:  function(){
            //로그인 창
            //체크박스
            //선택하면 체크가 되도록 true(클래스 추가 addCalss(배경이미지로 변경 ui))하고 다시 클릭하면 false

            $('#idSave').on({
                click: function(){
                    // 선택이 되어 있다면 checked
                    if( $(this).prop('checked') ){   //체크하면
                        $(this).prop('checked', true).addClass('addChk');//체크하고(선택되고)
                        val[0] = $(this).val();
                    }
                    else{
                        $(this).prop('checked', false).removeClass('addChk');//선택해제
                    }
                }
            });

            $('#autoSave').on({
                click: function(){
                    // 선택이 되어 있다면 checked
                    if( $(this).prop('checked') ){   //체크하면
                        $(this).prop('checked', true).addClass('addChk');//체크하고(선택되고)
                        val[1] = $(this).val();
                    }
                    else{
                        $(this).prop('checked', false).removeClass('addChk');//선택해제
                    }
                }
            });

            $('#secConnect').on({
                click: function(){
                    // 선택이 되어 있다면 checked
                    if( $(this).prop('checked') ){   //체크하면
                        $(this).prop('checked', true).addClass('addChk');//체크하고(선택되고)
                        val[2] = $(this).val();
                    }
                    else{
                        $(this).prop('checked', false).removeClass('addChk');//선택해제
                    }
                }
            });
            
        },
        fnMain6:  function(){
            //회원가입창
            var winW = 0;
            var leftW = 0;
            var setId = 0;
            var winH = 0;

                function resizeFn(){
                    winW = $(window).innerWidth();
                    winH = $(window).innerHeight();
                    leftW = winW - (100+40+20);
                    // $('.gaipId_wrap').css({ width: leftW });
                    // $('.main6_page_member_gaip').css({ heihgt: winH });
                }
                setTimeout(resizeFn,100);

                $(window).resize(function(){
                    clearTimeout( setId );
                    setId = setTimeout(resizeFn,100);
                });

                //회원가입 버튼 클릭 이벤트
                $('#memberInBtn').on({
                    click: function(){
                        $('#global_header').hide();     //Global헤더
                        $('.foot_popup_wrap').hide();   //팝업창 하단
                        $('#main1_page').hide();    //인트로 메인1
                        $('#main6_page').hide();    //로그인창
                        $('#main6_page_member_gaip').show();    //회원가입창
                    }
                });


                //회원 가입창 닫기
                //로그인창으로 뒤로 이동
                $('.gaipBackBtn').on({
                    click: function(){
                        $('#global_header').show();     //Global헤더
                        $('.foot_popup_wrap').show();   //팝업창 하단
                        $('#main1_page').show();    //인트로 메인1
                        $('#main6_page').show();    //로그인창
                        $('#main6_page_member_gaip').hide();    //회원가입창
                    }
                });


                //생년월일 포커스
                $('.birthWrap').on({
                    focusin: function(){
                        $(this).addClass('addFocus');
                    },
                    focusout: function(){
                        $(this).removeClass('addFocus');
                    }
                });

                //성별 체크 : 여러 개 중에 한개만 선택
                $('.gender_chk').on({
                    click: function(){

                        //선택되 라디오만(인덱스) 체크되고 나머지 모두 해제된다.
                        $('.gender_chk').prop('checked', false).removeClass('addRadio');
                        $(this).prop('checked', true).addClass('addRadio');
                        gen[0] = $(this).val();

                        // console.log( gen[0] );
                        // console.log( $('.gender_chk').eq(0).prop('checked') );
                        // console.log( $('.gender_chk').eq(1).prop('checked') );
                        // console.log( $('.gender_chk').eq(2).prop('checked') );

                    }
                });

                //추천인 추가선택
                $('.choo_chk').on({
                    click: function(){
                        $('.choo_chk').prop('checked', false).removeClass('addRadio');
                        $(this).prop('checked', true).addClass('addRadio');
                        gen[1] = $(this).val();
                    }
                });

                //이용약관동의
                $('.acceptChk').each(function(index){
                    $(this).on({
                        click: function(){
                            if( $(this).is(':checked') ){   //선댁하면(1번클릭)
                                $(this).prop('checked', true).addClass('addAccCheck');
                            }
                            else{   //선택하면(2번클릭) 토글기능 한번은 선택 한번은 해제
                                $(this).prop('checked', false).removeClass('addAccCheck');
                            }

                            //첫번째 버튼인 경우만
                            //모두 체크 버튼 allCheck
                            if( index == 0 ){ //모두 체크 버튼 allCheck
                                if( $(this).is(':checked') ){
                                    $('.acceptChk').prop('checked', true).addClass('addAccCheck');
                                }
                                else{ 
                                    $('.acceptChk').prop('checked', false).removeClass('addAccCheck');
                                }
                            }

                            //4번이 체크되면
                            //4번 5번 6번이 모두 체크 / 해제 된다.
                            if( index == 4 ){
                                if( $(this).is(':checked') ){
                                    $(this).prop('checked', true).addClass('addAccCheck');
                                    $('.acceptChk').eq(5).prop('checked', true).addClass('addAccCheck');
                                    $('.acceptChk').eq(6).prop('checked', true).addClass('addAccCheck');
                                }
                                else{ 
                                    $(this).prop('checked', false).removeClass('addAccCheck');
                                    $('.acceptChk').eq(5).prop('checked', false).removeClass('addAccCheck');
                                    $('.acceptChk').eq(6).prop('checked', false).removeClass('addAccCheck');
                                }
                            }


                            //전체선택된 상태에서
                            //한개라도 선택이 해제되면
                            //0번 모두체크 버튼이 해제된다.
                            var cnt = 0;
                            for( var i=0; i<$('.acceptChk').length; i++ ){
                                if( !$('.acceptChk').eq(i).prop('checked') ){
                                    cnt++;
                                }
                            }
                            //체크해제된게 한개라도 있다면 첫번째를 해제 시킨다.
                            if( cnt > 0 ){
                                $('.acceptChk').eq(0).prop('checked', false).removeClass('addAccCheck');
                            }
                            console.log( cnt );

                            //5번이나 6번이 해제되면 4번을 해제 시킨다.
                            if( !$('.acceptChk').eq(5).prop('checked') || !$('.acceptChk').eq(6).prop('checked') ){
                                $('.acceptChk').eq(4).prop('checked', false).removeClass('addAccCheck');
                            }

                            //5번 6번이 모두 체크되면 4번 체크
                            if( $('.acceptChk').eq(5).prop('checked') && $('.acceptChk').eq(6).prop('checked') ){
                                $('.acceptChk').eq(4).prop('checked', true).addClass('addAccCheck');
                            }

                            //첫번째(0)를 제외한 나머지( 0~7 ) 모두가 체크되면
                            //첫번째(0) 체크
                            var cnt2 = 0;
                            for( var i=1; i<$('.acceptChk').length; i++ ){
                                if( $('.acceptChk').eq(i).prop('checked') ){
                                    cnt2++;
                                }
                            }
                            //체크가 7개 모두 체크되면 첫번째 체크
                            if( cnt2 == 7 ){
                                $('.acceptChk').eq(0).prop('checked', true).addClass('addAccCheck');
                            }



                        }
                    });
                });



        },
        fnMain7:  function(){},
        fnMain8:  function(){}

    }
    kurly.init();

})(jQuery,window,document);//marketKurly.js