(function(jQuery,window,document,undefined){
	var timeOutId=0;

	
	$('#submit').on({
		click:	function(e){
			e.preventDefault();
			
			$('.ajax-loader').addClass('addLoader');
			timeOutId = setTimeout(function(){
				$('.ajax-loader').removeClass('addLoader');
				clearTimeout(timeOutId);
			},1000);
			
			var txtIrum = $('#irum').val().trim();	
			var txtMail = $('#email').val().trim();
			var txtMesg = $('#message').val().trim();	
			
			var spaceDelRag = /(^\s*)|(\s*$)/g;
			var resultIrum = txtIrum.replace(spaceDelRag,'');
			var resultMail = txtMail.replace(spaceDelRag,'');
			var resultMesg = txtMesg.replace(spaceDelRag,'');
			
			var irumReg = /^[A-Za-z가-힣ㄱ-ㅎㅏ-ㅣ]{2,50}$/g;  
			var emailReg = /^[a-zA-Z0-9]+([\_\-\.]?[A-Za-z0-9])*@[a-zA-Z0-9]+([\_\-\.]?[0-9a-zA-Z])*\.[a-zA-Z0-9]+$/g;
			var messageReg = /^[A-Za-z가-힣ㄱ-ㅎㅏ-ㅣ]{2,50}$/g; 
			
			
				if(  !irumReg.test(resultIrum) ){
					$('#irum').addClass('addError');
				}
				else{
					$('#irum').removeClass('addError');
				}

				if( !emailReg.test(resultMail) ){
					$('#email').addClass('addError');
				}
				else{
					$('#email').removeClass('addError');
				}

				if(  !messageReg.test(resultMesg) ) {
					$('#message').addClass('addError');
				}
				else{
					$('#message').removeClass('addError');
				}
				
				if(  !irumReg.test(resultIrum) || !emailReg.test(resultMail) || !messageReg.test(resultMesg)  ){
					$('.errors').addClass('addError');
					return false;					
				}
				else{
					//정보 전송 AJAX
					$.ajax({
						url:'./contactForm.php',
						type:'POST',
						data:{
							irum		: txtIrum,
							mail		: txtMail,
							message		: txtMesg
						},
						success: function(data){
							$('.errors').removeClass('addError');
							$('.success').addClass('addSuccess');
							
							$('.success div').append(data);
							
							$('#irum').val('');	
							$('#email').val('');	
							$('#message').val('');	
							
						},
						error:	function(){
							alert('AJAX 지원이 안됩니다. SERVER에서 전송하세요!');
						}
					});
					
				}
		}
	});	

	
})(jQuery,window,document);
//formSubmitAJAXcontact.js