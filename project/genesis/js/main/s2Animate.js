$(function(){
	
	
	$(".s2-bottomBtn2 a").click(function(event){    
        event.preventDefault();
        $('html,body').animate({scrollTop:$(this.hash).offset().top}, 1000);
    });
	
	
	$('.s2-bottomBtn-wrap').on({
		mouseenter:	function(){		//마우스 오버시
			$('.s2-bottomBtn1').stop().animate({ opacity:0, top:'50%' })
			$('.s2-bottomBtn2').stop().animate({ opacity:1, top:0 });	
						
		}
	});
	
	$('.s2-bottomBtn-wrap').on({
		mouseleave: function(){		//마우스 아웃
			$('.s2-bottomBtn1').stop().animate({ opacity:1, top:0 })
			$('.s2-bottomBtn2').stop().animate({ opacity:0, top:'-50%' });
		}
	});
	


});//s2Animate.js