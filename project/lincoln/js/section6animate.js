$(function(){
	
	var p = 0;
	
	   $('.promotionBtn').on({
			click:   function(){
				if( p == 0 ){     
					   $('.section6-wrap a').addClass('addPromotion');
						
					   $('#section7').stop().slideDown(300);
					   p = 1;
				}else{  
					   $('.section6-wrap a').removeClass('addPromotion');
					   
					   $('#section7').stop().slideUp(300);
					   p = 0;
				}
			}
		});
   
});
