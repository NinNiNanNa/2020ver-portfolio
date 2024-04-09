(function($,window,document,undefined){

    var portFolio = {

        init: function(){
            var that = this;
                that.headerFn();
                that.section1Fn();
                that.section2Fn();
                that.section3Fn();
                that.section4Fn();
                that.section5Fn();
                that.section6Fn();
        },
        headerFn : function(){

            var scr = 0;
            var url = 0;

                $(window).scroll(function(){
                    if( $(window).scrollTop() >= $('#section2').offset().top ){
                        scr=1;
                        $('#header').addClass('addHeader');
                        $('.goTop').stop().fadeIn(1000);
                    }
                    else{
                        scr=0;
                        $('#header').removeClass('addHeader');
                        $('.goTop').stop().fadeOut(1000);
                    }
                });
                
                $('.smoothBtn').on({
                    click:	function(event){
                        event.preventDefault();	
                        
                        url = $(this).attr('href');
                        $('html,body').stop().animate({ scrollTop: $( url ).offset().top },800);		
                    }
                });

                $('.mobileBtn').on({
                    click:	function(){
                        
                        $(this).toggleClass('addMobile');
                        $('#header').toggleClass('addMobile');
                        
                    }
                });

                $(window).resize(function(){
                    if( $(this).innerWidth() > 800 ){
                        $('#header').removeClass('addMobile');
                        $('.mobileBtn').removeClass('addMobile');
                    }
                });
                
        },
        section1Fn : function(){

            function s1AniFn(){
                
                $('#section1 .text').stop().animate({ opacity:1 },1500);
                
            }
            s1AniFn();

        },
        section2Fn : function(){

            var sAni = 0;
            var cnt = 0;
            var slideW = 570;
            var slideWrap = $('.slide_wrap');
            var slide = $('.slide');	
            var winW = $(window).innerWidth();
            var conW = $('.slide_container').innerWidth();
            var setId = 0;
	
                $(window).scroll(function(){
                    
                    if( $(this).scrollTop() >= $('#section2').offset().top-500 ){
                        if( sAni == 0 ){
                            sAni = 1;
                            aniFn();
                        }
                    }
                    else{
                        sAni = 0;
                        aniFormatFn();
                    }
                });
                
                
                function aniFormatFn(){
                    $('#section2 .title').stop().animate({ opacity:0 },100);
                    $('#section2 .content > ul > li:first-child').stop().animate({ left: -100+'%', opacity:0 },600);
                    $('#section2 .content > ul > li:nth-child(2)').stop().animate({ left: 100+'%', opacity:0 },600);
                    
                }
                
                function aniFn(){
                    $('#section2 .title').stop().animate({ opacity:1 },1500);
                    $('#section2 .content > ul > li:first-child').stop().animate({ left: 0+'%', opacity:1 },2000);
                    $('#section2 .content > ul > li:nth-child(2)').stop().animate({ left: 0+'%', opacity:1 },2000);
                    
                }

                function resizeFn(){
			
                    winW = $(window).innerWidth();
                    if(winW > 550){
                        slideW = 570;
                    }
                    else{
                        conW = $('.slide_container').innerWidth();				
                        slideW = conW;	
                    }
                    
                    slide.css({width: (slideW) });
                    slideWrap.css({ width: (slideW*2) });
                    slideWrap.stop().animate({ left:-(slideW*cnt) },0);
                    
                }
                setTimeout(resizeFn,100);
                
                $(window).resize(function(){
                    clearTimeout(setId);
                    setId = setTimeout(resizeFn,100);
                });

                function slideFn(){
                    
                    $('.slide_wrap').stop().animate({ left:-(slideW*cnt) },600, function(){
                        if( cnt > 1 ){ cnt = 1 }
                        if( cnt < 0 ){ cnt = 0 }
    
                        $('.slide_wrap').stop().animate({ left:-(slideW*cnt) },0);
                    });
                    cnt>1?z=0:z=cnt;
                    pageBtnEventFn(cnt);
                }
                
                function nextCountFn(){
                    cnt++;
                    slideFn();
                }
        
                function prevCountFn(){
                    cnt--;
                    slideFn();			
                }

                $('.pageBtn').each(function(index){
                    $(this).on({
                        click: function(){
                            cnt = index;
                            slideFn();
                        }
                        
                    });
                });

                function pageBtnEventFn(){
                    $('.pageBtn_wrap li').removeClass('addRollingBtn');
                    $('.pageBtn_wrap li').eq(z).addClass('addRollingBtn');
                }

        },
        section3Fn : function(){

            var sAni = 0;
	
                $(window).scroll(function(){
                    
                    if( $(this).scrollTop() >= $('#section2').offset().top+200 ){
                        if( sAni == 0 ){
                            sAni = 1;
                            aniFn();
                        }
                    }
                    else{
                        sAni = 0;
                        aniFormatFn();
                    }
                });
                
                
                function aniFormatFn(){
                    $('#section3 .title').stop().animate({ opacity:0 },100);
                    $('#section3 .content ul li').stop().animate({ top: 300, opacity:0 },600);
                    
                }
                
                function aniFn(){
                    $('#section3 .title').stop().animate({ opacity:1 },1500);
                    $('#section3 .content ul li:nth-child(4)').stop().delay(600).animate({ top: 0, opacity:1 },1000);
                    $('#section3 .content ul li:nth-child(3)').stop().delay(400).animate({ top: 0, opacity:1 },1000);
                    $('#section3 .content ul li:nth-child(2)').stop().delay(200).animate({ top: 0, opacity:1 },1000);
                    $('#section3 .content ul li:nth-child(1)').stop().animate({ top: 0, opacity:1 },1000);
                    
                }

        },
        section4Fn : function(){

            var sAni = 0;
	
                $(window).scroll(function(){
                    
                    if( $(this).scrollTop() >= $('#section3').offset().top ){
                        if( sAni == 0 ){
                            sAni = 1;
                            aniFn();
                        }
                    }
                    else{
                        sAni = 0;
                        aniFormatFn();
                    }
                });
                
                
                function aniFormatFn(){
                    $('#section4 .title').stop().animate({ opacity:0 },100);
                    $('#section4 .content > ul').stop().animate({ opacity:0 },100);
                    $('#section4 .content > ul > li:nth-child(2) ul li:nth-child(1) > div .skill_detail span i').stop().animate({ width:0 },600);
                    $('#section4 .content > ul > li:nth-child(2) ul li:nth-child(2) > div .skill_detail span i').stop().animate({ width:0 },600);
                    $('#section4 .content > ul > li:nth-child(2) ul li:nth-child(3) > div .skill_detail span i').stop().animate({ width:0 },600);
                    $('#section4 .content > ul > li:nth-child(2) ul li:nth-child(4) > div .skill_detail span i').stop().animate({ width:0 },600);
                    $('#section4 .content > ul > li:nth-child(4) ul li:nth-child(1) > div .skill_detail span i').stop().animate({ width:0 },600);
                    $('#section4 .content > ul > li:nth-child(4) ul li:nth-child(2) > div .skill_detail span i').stop().animate({ width:0 },600);
                    
                }
                
                function aniFn(){
                    $('#section4 .title').stop().animate({ opacity:1 },1500);
                    $('#section4 .content > ul').stop().animate({ opacity:1 },1500);
                    $('#section4 .content > ul > li:nth-child(2) ul li:nth-child(1) > div .skill_detail span i').stop().animate({ width:'95%' },3000);
                    $('#section4 .content > ul > li:nth-child(2) ul li:nth-child(2) > div .skill_detail span i').stop().animate({ width:'95%' },3000);
                    $('#section4 .content > ul > li:nth-child(2) ul li:nth-child(3) > div .skill_detail span i').stop().animate({ width:'80%' },3000);
                    $('#section4 .content > ul > li:nth-child(2) ul li:nth-child(4) > div .skill_detail span i').stop().animate({ width:'75%' },3000);
                    $('#section4 .content > ul > li:nth-child(4) ul li:nth-child(1) > div .skill_detail span i').stop().animate({ width:'95%' },3000);
                    $('#section4 .content > ul > li:nth-child(4) ul li:nth-child(2) > div .skill_detail span i').stop().animate({ width:'85%' },3000);
                    
                }



        },
        section5Fn : function(){

            var sAni = 0;
	
                $(window).scroll(function(){
                    
                    if( $(this).scrollTop() >= $('#section4').offset().top+500 ){
                        if( sAni == 0 ){
                            sAni = 1;
                            aniFn();
                        }
                    }
                    else{
                        sAni = 0;
                        aniFormatFn();
                    }
                });
                
                
                function aniFormatFn(){
                    $('#section5 .title').stop().animate({ opacity:0 },100);
                    $('#section5 .content').stop().animate({ left: -100+'%', opacity:0 },600);
                    
                }
                
                function aniFn(){
                    $('#section5 .title').stop().animate({ opacity:1 },1500);
                    $('#section5 .content').stop().animate({ left: 0+'%', opacity:1 },2000);
                    
                }

            var winW = 0;
            var conW = 0;
            var imgW = 0;
            var imgH = 0;
            var portH = 0;
            var rowS = 0;
            var colS = 0;
            var imgHRate = 0;
            var n = 0;
            var btnNum = 0;
            var s = [];
            var h = [];
            var setId = 0;
            
                //반응형 함수
                function resizeFn(){
                    winW = $(window).innerWidth();
                    conW = $('.portfolio').innerWidth();
                    imgHRate = 250/300;
                    n = $('.portfolio_list').length;
                    
                    if( winW == 1170 ){	
                        conW = winW;
                    }
                    
                    if( winW > 1170 ){
                        colS=4;
                    }
                    else if( winW > 980 ){
                        colS=3;				
                    }
                    else if(  winW > 600 ){
                        colS=2;				
                    }
                    else{
                        colS=1;				
                    }
                    imgW = conW/colS;
                    imgH = imgW*imgHRate;
                    
                    switch(btnNum){
                        case 0:
                            n=13;
                            break;
                        case 1:
                            n=8;
                            break;
                        case 2:
                            n=3;
                            break;
                        case 3:
                            n=1;
                            break;
                        case 4:
                            n=2;
                    }
                    
                    rowS = Math.ceil(n/colS);
                    portH = imgH * rowS;

                    $('.portfolio').css({ height: portH });
                    
                    switch(btnNum){
                        case 0:
                            h = [];
                            s = [0,1,2,3,4,5,6,7,8,9,10,11,12];			
                            break;
                        case 1:
                            h = [8,9,10,11,12];
                            s = [0,1,2,3,4,5,6,7];	
                            break;					
                        case 2:
                            h = [0,1,2,3,4,5,6,7,11,12];					
                            s = [8,9,10];
                            break;						
                        case 3:
                            h = [1,2,3,4,5,6,7,8,9,10,11,12];					
                            s = [0];
                            break;
                        case 4:
                            h = [0,1,2,3,4,5,6,7,8,9,10];					
                            s = [11,12];
                    }
                
                    
                    
                    
                    //HIDE 제어문
                    for(var i=0; i<h.length; i++){
                        $('.portfolio_list').eq(h[i]).stop().hide();
                    }
                    
                    
                    //SHOW 제어문
                    var k=-1;
                    for(var i=0; i<rowS; i++){
                        for(var j=0; j<colS; j++){
                            k++;
                            
                            if( k>=s.length){
                                break;
                            }
                            $('.portfolio_list').eq(s[k]).stop().show().animate({ width:(imgW), height:(imgH), top:(imgH*i), left:(imgW*j) },300);
                        }
                    }
                    
                }
            
                setTimeout(resizeFn,100);
                
                //반응형 메소드 이벤트
                $(window).resize(function(){
                    clearTimeout(setId);			
                    setId = setTimeout(resizeFn,100);
                });
            
                //갤러리 메인버튼 클릭 이벤트
                $('.portMainBtn').each(function( index ){
                    $(this).on({
                        click:	function(){
                            btnNum = index;
                            resizeFn();
                            $('.portMainBtn').removeClass('addportBtn');
                            $(this).addClass('addportBtn');
                        }
                    });
                });

        },
        section6Fn : function(){

            var sAni = 0;
	
                $(window).scroll(function(){
                    
                    if( $(this).scrollTop() >= $('#section5').offset().top+500 ){
                        if( sAni == 0 ){
                            sAni = 1;
                            aniFn();
                        }
                    }
                    else{
                        sAni = 0;
                        aniFormatFn();
                    }
                });
                
                
                function aniFormatFn(){
                    $('#section6 .bgImg').stop().animate({ opacity:0 },100);
                    
                }
                
                function aniFn(){
                    $('#section6 .bgImg').stop().animate({ opacity:1 },3000);
                    
                }

        }

    }
    portFolio.init();

})(jQuery,window,document);//portFolio.js