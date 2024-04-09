(function($,window,document,undefined){
	
	var winW = $(window).innerWidth();
	
	var sec4C2Srl=0;
	var sec4C2SrlOp=0;
	
	$(window).scroll(function(event){
		event.preventDefault();
		resizes4C2Fn();
	});
	
	$(window).resize(function(){
		winW = $(this).innerWidth();
		resizes4C2Fn();
		setTimeout(resizes4C2Fn,100);
	});
	
	function resizes4C2Fn(){
		winW = $(this).innerWidth();
		if( winW > 780 ){
			if( $(window).scrollTop() >= $('#section4 .wrap1180 > div ul li:nth-child(2)').offset().top+100 ){	
				sec4C2Srl+=3;
				sec4C2SrlOp+=0.02;
				if(sec4C2Srl>100){
					sec4C2Srl=100;
				}
				if(sec4C2SrlOp>1){
					sec4C2SrlOp=1;
				}
				
				sec4DeskTopFn();
			}
			
			else{
				sec4C2Srl-=10;
				sec4C2SrlOp-=0.05;			
				if(sec4C2Srl<0){
					sec4C2Srl=0;
				}
				if(sec4C2SrlOp<0){
					sec4C2SrlOp=0;
				}
				
				sec4DeskTopFn();
			}
			
		}
		else if( winW > 500 ){
			if( $(window).scrollTop() >= $('#section4').offset().top ){	
				sec4C2Srl+=3;
				sec4C2SrlOp+=0.02;
				if(sec4C2Srl>100){
					sec4C2Srl=100;
				}
				if(sec4C2SrlOp>1){
					sec4C2SrlOp=1;
				}
				
				sec4TablitFn();
			}
			
			else{
				sec4C2Srl-=10;
				sec4C2SrlOp-=0.05;			
				if(sec4C2Srl<0){
					sec4C2Srl=0;
				}
				if(sec4C2SrlOp<0){
					sec4C2SrlOp=0;
				}
				
				sec4TablitFn();
			}
			
		}
		else{
			if( $(window).scrollTop() >= $('#section4 .wrap1180 > div ul li:nth-child(2)').offset().top+200 ){	
				sec4C2Srl+=3;
				sec4C2SrlOp+=0.02;
				if(sec4C2Srl>100){
					sec4C2Srl=100;
				}
				if(sec4C2SrlOp>1){
					sec4C2SrlOp=1;
				}
				
				sec4MobileFn();
			}
			
			else{
				sec4C2Srl-=10;
				sec4C2SrlOp-=0.05;			
				if(sec4C2Srl<0){
					sec4C2Srl=0;
				}
				if(sec4C2SrlOp<0){
					sec4C2SrlOp=0;
				}
				
				sec4MobileFn();
			}
			
		}
	}
	resizes4C2Fn();
	setTimeout(resizes4C2Fn,100);
	
	function sec4DeskTopFn(){

		$('#section4 ul li:nth-child(3) > div').css({ top: (-50-sec4C2Srl), opacity: sec4C2SrlOp });
		$('#section4 ul li:nth-child(4) > div').css({ top: (150-sec4C2Srl), opacity: sec4C2SrlOp });
	}
	
	function sec4TablitFn(){

		$('#section4 ul li:nth-child(3) > div').css({ top: (-50-sec4C2Srl), opacity: sec4C2SrlOp });
		$('#section4 ul li:nth-child(4) > div').css({ top: (50-sec4C2Srl), opacity: sec4C2SrlOp });
	}
	
	function sec4MobileFn(){

		$('#section4 ul li:nth-child(3) > div').css({ top: (90-sec4C2Srl), opacity: sec4C2SrlOp });
		$('#section4 ul li:nth-child(4) > div').css({ top: (100-sec4C2Srl), opacity: sec4C2SrlOp });
	}

	
})(jQuery,window,document);//section4.js