(function($,window,document,undefined){
	
	var winW = $(window).innerWidth();
	
	var sec3srl=0;
	var sec3srlOp=0;
	
	

	$(window).scroll(function(event){
		event.preventDefault();
		resizeS3Fn();
	});
	
	$(window).resize(function(){
		winW = $(this).innerWidth();
		resizeS3Fn();
		setTimeout(resizeS3Fn,100);
	});
	
	function resizeS3Fn(){
		if( winW > 780 ){
			if( $(window).scrollTop() >= $('#section2').offset().top+200 ){	
				sec3srl+=3;
				sec3srlOp+=0.02;
				if(sec3srl>100){
					sec3srl=100;
				}
				if(sec3srlOp>1){
					sec3srlOp=1;
				}
				sec3Div1Fn();
				sec3Div2Fn();
				sec3Div3Fn();
			}
			
			else{
				sec3srl-=6;
				sec3srlOp-=0.02;			
				if(sec3srl<0){
					sec3srl=0;
				}
				if(sec3srlOp<0){
					sec3srlOp=0;
				}
				sec3Div1Fn();
				sec3Div2Fn();
				sec3Div3Fn();
			}
		}
		else if( winW > 500 ){
			if( $(window).scrollTop() >= $('#section2').offset().top+200 ){	
				sec3srl+=3;
				sec3srlOp+=0.02;
				if(sec3srl>100){
					sec3srl=100;
				}
				if(sec3srlOp>1){
					sec3srlOp=1;
				}
				sec3Div1Fn();
				sec3Div2Fn();
			}
			
			else{
				sec3srl-=6;
				sec3srlOp-=0.02;			
				if(sec3srl<0){
					sec3srl=0;
				}
				if(sec3srlOp<0){
					sec3srlOp=0;
				}
				sec3Div1Fn();
				sec3Div2Fn();
			}
		}
		else{
			if( $(window).scrollTop() >= $('#section2').offset().top+200 ){	
				sec3srl+=3;
				sec3srlOp+=0.02;
				if(sec3srl>100){
					sec3srl=100;
				}
				if(sec3srlOp>1){
					sec3srlOp=1;
				}
				sec3Div1Fn();
			}
			
			else{
				sec3srl-=6;
				sec3srlOp-=0.02;			
				if(sec3srl<0){
					sec3srl=0;
				}
				if(sec3srlOp<0){
					sec3srlOp=0;
				}
				sec3Div1Fn();
			}
		}
		
	}
	resizeS3Fn();
	setTimeout(resizeS3Fn,100);
	
	
	function sec3Div1Fn(){
		$('.sec3-wrap ul li:nth-child(1) > div').css({ top: (100-sec3srl), opacity: sec3srlOp });
	}
	
	function sec3Div2Fn(){
		$('.sec3-wrap ul li:nth-child(2) > div').css({ top:(-100+sec3srl), opacity: sec3srlOp });
	}
	
	function sec3Div3Fn(){
		$('.sec3-wrap ul li:nth-child(3) > div').css({ top: (100-sec3srl), opacity: sec3srlOp });
	}


})(jQuery,window,document);//section3.js