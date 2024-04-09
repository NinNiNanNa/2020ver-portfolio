$(function(){
	
	$('.s3-playBtn').on({
		click: function(){
			$(this).hide();
			$('.s3-img').hide();
			
			$('.s3-video').get(0).play();
			$('.s3-video').get(0).muted = true;
			
		}
	});
	
	$('.s3-video').on({
		click: function(){
			$('.s3-playBtn').show();
			$('.s3-img').show();
			
			$(this).get(0).pause();
			$(this).get(0).muted = false;
			
		}
	});
	
});//s3Video.js