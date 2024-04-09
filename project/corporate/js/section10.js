(function($,window,document,undefined){
	
	var section10 = {
		init: function(){
			section10.scrollEvent();
		},
		scrollEvent: function(){
			
			$(window).scroll(function(event){
				event.preventDefault();
				if( $(window).scrollTop() >= $('#section9').offset().top ){
					$('#section10 .content ul li:nth-child(1)').stop().animate({ top:0, opacity:1 },600);
					$('#section10 .content ul li:nth-child(2)').stop().animate({ top:0, opacity:1 },900);
					$('#section10 .content ul li:nth-child(3)').stop().animate({ top:0, opacity:1 },1200);
				}
				else{
					$('#section10 .content ul li').stop().animate({ top:500, opacity:0 },600);
					
				}
			});
			
		}
	}
	section10.init();
	
})(jQuery,window,document);//section10.js