(function(window,document,$,undefined){
	
	//창높이로 섹션1(메인이미지) .content 높이 반응형
	
	var section1 = {
		winH : 0,
		init : function(){
			section1.responseFn();
			section1.timer();
		},
	
		responseFn: function(){
			section1.winH = $(window).innerHeight();
			
			$('#section1, #section1 .brando-wrap1170 .brando-gap .container').css({ height: section1.winH });
		},
		
		timer: function(){
			setTimeout(section1.responseFn,100);
			
			$(window).resize(function(){
				setTimeout(section1.responseFn,100);
			});
		}
		
	};
	section1.init();
	
})(window,document,jQuery);
//section1.js