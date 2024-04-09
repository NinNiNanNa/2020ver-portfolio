$(function(){
	
	var winW = winH = 0;
	
		setTimeout(responseFn,100);
		
		function responseFn(){
			winW = $(window).innerWidth();
			winH = $(window).innerHeight();
			
			$('.s4-slide').css({width:winW});
			$('.s4-slide>div').css({height:winH});
		}
		
		
		$(window).resize(function(){
			responseFn();
		});
		
		
});