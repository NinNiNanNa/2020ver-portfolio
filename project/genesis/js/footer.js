$(function(){
	var footerT = 0;
	
	$('.footer-row2Btn').on({
		click:	function(){
			if( footerT == 0 ){
				footerT = 1;
				
				$('.footer-sub').stop().slideUp(0);
				$('.footer-sub').stop().slideDown(1000);
				
				
				$('.footer-row2Btn').addClass('addFooterBtn');
			}
			else{
				footerT = 0;
				
				$('.footer-sub').stop().slideDown(0);
				$('.footer-sub').stop().slideUp(1000);
				
				
				$('.footer-row2Btn').removeClass('addFooterBtn');
			}
		}
	});
	

	
});//footer.js