(function($,window,document,undefined){
	
	var section8 = {
		winW : 0,
		init: function(){
			section8.scorllEvent();
			section8.timer();
			section8.responseFn();
			section8.aniFormat();
			section8.ani();
		},
		scorllEvent: function(){
			
			$(window).scroll(function(event){	
				event.preventDefault();
				section8.responseFn();
			});
			
		},
		timer: function(){
			setTimeout(section8.responseFn,100);
			
			$(window).resize(function(){
				setTimeout(section8.responseFn,100);
			});
		},
		responseFn: function(){
			
			section8.winW = $(window).innerWidth();
			
			if( section8.winW > 1199 ){
				if( $(window).scrollTop() >= $('#section7').offset().top-150 ){
					section8.ani();
				}
				else{
					section8.aniFormat();
				}
				
			}
			else if( section8.winW > 990 ){
				if( $(window).scrollTop() >= $('#section7').offset().top+50 ){
					section8.ani();
				}
				else{
					section8.aniFormat();
				}
				
			}
			else if( section8.winW > 767 ){
				if( $(window).scrollTop() >= $('#section8 .content > ul > li:nth-child(2)').offset().top ){
					section8.ani();
				}
				else{
					section8.aniFormat();
				}
			}
			else{
				if( $(window).scrollTop() >= $('#section8').offset().top ){
					section8.ani();
				}
				else{
					section8.aniFormat();
				}
			}
			
		},
		aniFormat: function(){
			$('#section8 li:nth-child(3) > div ul li:nth-child(1) span i').stop().animate({ width:0 },600);
			$('#section8 li:nth-child(3) > div ul li:nth-child(2) span i').stop().animate({ width:0 },600);
			$('#section8 li:nth-child(3) > div ul li:nth-child(3) span i').stop().animate({ width:0 },600);
			$('#section8 li:nth-child(3) > div ul li:nth-child(4) span i').stop().animate({ width:0 },600);
		},
		ani: function(){
			$('#section8 li:nth-child(3) > div ul li:nth-child(1) span i').stop().animate({ width:'80%' },1000);
			$('#section8 li:nth-child(3) > div ul li:nth-child(2) span i').stop().animate({ width:'90%' },1000);
			$('#section8 li:nth-child(3) > div ul li:nth-child(3) span i').stop().animate({ width:'95%' },1000);
			$('#section8 li:nth-child(3) > div ul li:nth-child(4) span i').stop().animate({ width:'90%' },1000);
		}
	}
	section8.init();
	
})(jQuery,window,document);//section8.js



	
	
	
	