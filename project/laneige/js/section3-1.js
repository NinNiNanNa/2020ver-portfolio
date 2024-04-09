(function($,window,document,undefined){
	
	var winW = $(window).innerWidth();
	
	//테블릿 변수
	var sec3Tsrl=0;
	var sec3TsrlOp=0;
	
	

	$(window).scroll(function(event){
			
			event.preventDefault();
			
			taBlitFn();
		
	});
	
	$(window).resize(function(){
		winW = $(this).innerWidth();

		if( winW < 780 && winW > 500 ){
			taBlitFn();
		}
		
	});
	
	function taBlitFn(){
		if( $(window).scrollTop() >= $('.deskTop').offset().top+150 ){	
			sec3Tsrl+=3;
			sec3TsrlOp+=0.02;
			if(sec3Tsrl>100){
				sec3Tsrl=100;
			}
			if(sec3TsrlOp>1){
				sec3TsrlOp=1;
			}
			
			sec3TablitFn();
		}
		
		else{
			sec3Tsrl-=6;
			sec3TsrlOp-=0.02;			
			if(sec3Tsrl<0){
				sec3Tsrl=0;
			}
			if(sec3TsrlOp<0){
				sec3TsrlOp=0;
			}
			
			sec3TablitFn();
		}
		
	}
	
	function sec3TablitFn(){

		$('.sec3-wrap ul li:nth-child(3) .tablitSrl').css({ top: (100-sec3Tsrl), opacity: sec3TsrlOp });
	}
		

	

})(jQuery,window,document);//section3.js