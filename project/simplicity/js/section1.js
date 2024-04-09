(function($,window,document,undefined){
	
	var winH = $(window).innerHeight();
	var titH = $('#section1 .title').innerHeight();
	var titT = (winH - titH)/2;
		$('#section1 .container').css({ height:winH });
		$('#section1 .title').css({ top:titT });
		
		// if( window.orientation == 90 || window.orientation == -90 ){
			// $('#section1 .container').css({ backgroundSize:'100% auto' });
		// }
		// else{
			// $('#section1 .container').css({ backgroundSize:'auto' + winH });
		// }
		
		function s1Resize(){
			winH = $(window).innerHeight();
			titH = $('#section1 .title').innerHeight();
			titT = (winH - titH)/2;
			$('#section1 .container').css({ height:winH });
			$('#section1 .title').css({ top:titT });
			// if( window.orientation == 90 || window.orientation == -90 ){
				// $('#section1 .container').css({ backgroundSize:'100% auto' });
			// }
			// else{
				// $('#section1 .container').css({ backgroundSize:'auto' + winH });
			// }
		}
		setTimeout(s1Resize, 100);
		
		$(window).resize(function(){
			s1Resize();
		});
		
	
})(jQuery,window,document);//section1.js