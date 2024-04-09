(function($,window,document,undefined){
	
	var section9 = {
		init: function(){
			section9.scrollEvent();
		},
		scrollEvent: function(){
			
			$(window).scroll(function(event){
				event.preventDefault();
				if( $(window).scrollTop() >= $('#section8').offset().top ){
					$('#section9 .content ul li:nth-child(1)').stop().animate({ top:0, opacity:1 },600);
					$('#section9 .content ul li:nth-child(2)').stop().animate({ top:0, opacity:1 },900);
					$('#section9 .content ul li:nth-child(3)').stop().animate({ top:0, opacity:1 },1200);
				}
				else{
					$('#section9 .content ul li').stop().animate({ top:500, opacity:0 },600);
					
				}
			});
			
		}
	}
	section9.init();
	
})(jQuery,window,document);//section9.js