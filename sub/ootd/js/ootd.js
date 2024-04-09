(function($,window,document,undefined){

    var ootd = {

        init: function(){
            var that = this;
                that.goTopFn();
                that.section1Fn();
                that.section2Fn();
                that.section3Fn();
                that.section4Fn();
                that.section5Fn();
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
                    $('#section1 .content ul li > div .image').stop().animate({ opacity: 1 },1800);
                    
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
                    $('#section2 .title').stop().animate({ opacity:0 },100);
                    $('#section2 .content').stop().animate({  left: -100+'%', opacity:0 },100);
                    
                }
                
                function aniFn(){
                    $('#section2 .title').stop().animate({ opacity:1 },1500);
                    $('#section2 .content').stop().animate({  left: 0, opacity:1 },1500);
                    
                }

        },
        section3Fn: function(){

            var sAni = 0;
	
                $(window).scroll(function(){
                    
                    if( $(this).scrollTop() >= $('#section2').offset().top ){
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
                    $('#section3 .content').stop().animate({ bottom: -100+'%', opacity:0 },100);
                    
                }
                
                function aniFn(){
                    $('#section3 .title').stop().animate({ opacity:1 },1500);
                    $('#section3 .content').stop().animate({ bottom: 0, opacity:1 },1500);
                    
                }

        },
        section4Fn: function(){

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
                    $('#section4 .title').stop().animate({ opacity:0 },1000);
                    $('#section4 .content ul li:first-child').stop().animate({ left: -50+'%', opacity:0 },1000);
                    $('#section4 .content ul li:last-child').stop().animate({ right: -50+'%', opacity:0 },1000);
                    
                }
                
                function aniFn(){
                    $('#section4 .title').stop().animate({ opacity:1 },2000);
                    $('#section4 .content ul li:first-child').stop().animate({ left: 0, opacity:1 },2000);
                    $('#section4 .content ul li:last-child').stop().animate({ right: 0, opacity:1 },2000);
                    
                }

        },
        section5Fn: function(){

            var sAni = 0;
	
                $(window).scroll(function(){
                    
                    if( $(this).scrollTop() >= $('#section4').offset().top ){
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
                    $('#section5 img').stop().animate({ opacity:0 },1000);
                    
                }
                
                function aniFn(){
                    $('#section5 img').stop().animate({ opacity:1 },2000);
                    
                }

        }

    }
    ootd.init();

})(jQuery,window,document);//ootd.js