(function($,window,document,undefined){
	
	var footT = 0;
	
		$('.addressBtn').on({
			click:	function(){
				if( footT == 0 ){
						footT = 1;
						
						$('.footer960-contents').stop().show();
					}
					else{
						footT = 0;
						
						$('.footer960-contents').stop().hide();
					}
			}
		});
	
	
	
})(jQuery,window,document);//footer.js