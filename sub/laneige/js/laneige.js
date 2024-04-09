(function($,window,document,undefined){

    var laneige = {

        init: function(){
            var that = this;
                that.goTopFn();
                that.section1Fn();
                that.section2Fn();
                that.section3Fn();
                that.section4Fn();
        },
        goTopFn: function(){

            var url = 0;

                $('.smoothBtn').on({
                    click:	function(event){
                        event.preventDefault();	
                        
                        url = $(this).attr('href');
                        $('html,body').stop().animate({ scrollTop: $( url ).offset().top },800);		
                    }
                });

                $(window).scroll(function(){
                    if( $(this).scrollTop() >=10 ){
                        $('.goTop').stop().fadeIn(1000);
                    }
                    else{
                        $('.goTop').stop().fadeOut(1000);
                    }
                });

        },
        section1Fn: function(){

            var winH = 0;
            var divH = 0;
            var padT = 0;
            var setId = 0;

                function resizeFn(){
                    winH = $(window).innerHeight();
                    divH = $('.text_wrap').innerHeight();
                    padT = (winH-divH)/2;

                        if( winH < divH ){
                            padT=0;
                            $('#section1, #section1 .content ul li, #section1 .content ul li > div .image').css({ height: divH, minHeight: divH });
                        }
                        else{
                            $('#section1, #section1 .content ul li, #section1 .content ul li > div .image').css({height: winH });
                        }
                        
                        $('#section1 .content ul li:first-child > div').css({ paddingTop: padT });
                }
                setTimeout(resizeFn,100);

                $(window).resize(function(){
                    clearTimeout( setId );
                    setId = setTimeout(resizeFn,100);
                });

                function s1AniFn(){
                    $('.text p').stop().animate({  left: 0, opacity: 1 },1000);
                    $('.text h6').stop().animate({ left: 0, opacity: 1 },1200);
                    $('.text span').stop().animate({ left: 0, opacity: 1 },1500);
                    $('.text strong').stop().animate({ left: 0, opacity: 1 },1500);
                    $('.text_wrap a').stop().animate({ left: 0, opacity: 1 },1800);
                    
                }
                s1AniFn();

        },
        section2Fn: function(){

            var sAni = 0;
	
                $(window).scroll(function(){
                    
                    if( $(this).scrollTop() >= $('#section1').offset().top+200 ){
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
                    $('.content img').stop().animate({ opacity:0 },100);
                    
                }
                
                function aniFn(){
                    $('.content img').stop().animate({ opacity:1 },1500);
                    
                }

        },
        section3Fn: function(){

            var sAni = 0;
	
                $(window).scroll(function(){
                    
                    if( $(this).scrollTop() >= $('#section2').offset().top-400 ){
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
                    $('#section3 .title').stop().animate({ bottom: -100+'%', opacity:0 },100);
                    $('#section3 .content').stop().animate({ bottom: -100+'%', opacity:0 },100);
                    
                }
                
                function aniFn(){
                    $('#section3 .title').stop().animate({ bottom: 0, opacity:1 },1500);
                    $('#section3 .content').stop().animate({ bottom: 0, opacity:1 },1500);
                    
                }

        },
        section4Fn: function(){

            var winW = 0;
            var setId = 0;
            var sAni = 0;

                function resizeFn(){
                    winW = $(window).innerWidth();
                        
                        $('#section4').css({ width: winW });
                }
                setTimeout(resizeFn,100);

                $(window).resize(function(){
                    clearTimeout( setId );
                    setId = setTimeout(resizeFn,100);
                });
	
                $(window).scroll(function(){
                    
                    if( $(this).scrollTop() >= $('#section3').offset().top+300 ){
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
                    $('.deskTop').stop().animate({ opacity:0 },600);
                    $('.tablet').stop().animate({ left: -100+'%', opacity:0 },1000);
                    $('.mobile').stop().animate({ left: 100+'%', opacity:0 },1000);
                    
                }
                
                function aniFn(){
                    $('.deskTop').stop().animate({ opacity:1 },1200);
                    $('.tablet').stop().animate({ left: 0, opacity:1 },2000);
                    $('.mobile').stop().animate({ left: 0, opacity:1 },2000);
                    
                }

        }

    }
    laneige.init();

})(jQuery,window,document);//laneige.js