(function($,window,document,undefined){
	
	var winW = $(window).innerWidth();
	
	var sec4Srl=0;
	var sec4SrlOp=0;
	
	$(window).scroll(function(event){
		event.preventDefault();
		resizes4Fn();
	});
	
	$(window).resize(function(){
		winW = $(this).innerWidth();
		resizes4Fn();
		setTimeout(resizes4Fn,100);
	});
	
	function resizes4Fn(){
		winW = $(this).innerWidth();
		if( winW > 780 ){
			if( $(window).scrollTop() >= $('#section3').offset().top+100 ){	
				sec4Srl+=3;
				sec4SrlOp+=0.02;
				if(sec4Srl>100){
					sec4Srl=100;
				}
				if(sec4SrlOp>1){
					sec4SrlOp=1;
				}
				
				sec4BgFn();
				sec4Div1Fn();
				sec4Div2Fn();
			}
			
			else{
				sec4Srl-=10;
				sec4SrlOp-=0.05;			
				if(sec4Srl<0){
					sec4Srl=0;
				}
				if(sec4SrlOp<0){
					sec4SrlOp=0;
				}
				
				sec4BgFn();
				sec4Div1Fn();
				sec4Div2Fn();
			}
			
		}
		else if( winW > 500 ){
			if( $(window).scrollTop() >= $('.sec3-wrap ul li:nth-child(3)').offset().top+100 ){	
				sec4Srl+=3;
				sec4SrlOp+=0.02;
				if(sec4Srl>100){
					sec4Srl=100;
				}
				if(sec4SrlOp>1){
					sec4SrlOp=1;
				}
				
				sec4BgFn();
				sec4Div1Fn();
				sec4Div2Fn();
			}
			
			else{
				sec4Srl-=10;
				sec4SrlOp-=0.05;			
				if(sec4Srl<0){
					sec4Srl=0;
				}
				if(sec4SrlOp<0){
					sec4SrlOp=0;
				}
				
				sec4BgFn();
				sec4Div1Fn();
				sec4Div2Fn();
			}
			
		}
		else{
			if( $(window).scrollTop() >= $('.sec3-wrap ul li:nth-child(3)').offset().top+100 ){	
				sec4Srl+=3;
				sec4SrlOp+=0.02;
				if(sec4Srl>100){
					sec4Srl=100;
				}
				if(sec4SrlOp>1){
					sec4SrlOp=1;
				}
				
				sec4BgFn();
				sec4Div1Fn();
				sec4Div2Fn();
			}
			
			else{
				sec4Srl-=10;
				sec4SrlOp-=0.05;			
				if(sec4Srl<0){
					sec4Srl=0;
				}
				if(sec4SrlOp<0){
					sec4SrlOp=0;
				}
				
				sec4BgFn();
				sec4Div1Fn();
				sec4Div2Fn();
			}
			
		}
	}
	resizes4Fn();
	setTimeout(resizes4Fn,100);
	
	function sec4BgFn(){
		$('#wrapBg').css({ opacity: sec4SrlOp });
	}
	function sec4Div1Fn(){
		$('#section4 ul li:nth-child(1) > div').css({ opacity: sec4SrlOp });
	}
	function sec4Div2Fn(){
		$('#section4 ul li:nth-child(2) > div').css({ top: (100-sec4Srl), opacity: sec4SrlOp });
	}
	
	
})(jQuery,window,document);//section4.js