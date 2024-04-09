(function($,window,document,undefined){
    
    var timeOutId = 0;
    
    $('#submit').on({
        click: function(event){
            event.preventDefault();

            $('.loader').addClass('addLoader');
			timeOutId = setTimeout(function(){
				$('.loder').removeClass('addLoader');
				clearTimeout( timeOutId );
			},1000);

            var txtIrum  = $('#irum').val().trim();	
			var txtEmail = $('#email').val().trim();	
			var txtPhone = $('#phone').val().trim();	
			var txtSns   = $('#message').val().trim();
            
            spaceDelReg = /(^\s*)|(\s*$)/g;
			resultIrum = txtIrum.replace( spaceDelReg, '' );
			resultEmail = txtEmail.replace( spaceDelReg, '' );
			resultPhone = txtPhone.replace( spaceDelReg, '' );
            resultSns = txtSns.replace( spaceDelReg, '' );
            

            irumReg = /^[A-Za-zㄱ-ㅎㅏ-ㅣ가-힣]{2,50}$/g;
            emailReg = /^[a-z0-9]+([\-\_\.]?[a-z0-9])*@[a-z0-9]+([\-\_\.]?[a-z0-9])*[a-z]+$/gi;
            phoneReg = /\d{3}[\-]?\d{3,4}[\-]?\d{4}/g;
            messageReg = /^[A-Za-zㄱ-ㅎㅏ-ㅣ가-힣]{2,50}$/g;
            
                if( !irumReg.test( resultIrum ) ){
                    $('#irum').addClass('addError');
                }else{
                    $('#irum').removeClass('addError');
                }
                
                if( !emailReg.test( resultEmail ) ){
                    $('#email').addClass('addError');
                }else{
                    $('#email').removeClass('addError');
                }

                if( !phoneReg.test( resultPhone ) ){
                    $('#phone').addClass('addError');
                }else{
                    $('#phone').removeClass('addError');
                }

                if( !messageReg.test( resultSns ) ){
                    $('#message').addClass('addError');
                }else{
                    $('#message').removeClass('addError');
                }

                if( !irumReg.test( resultIrum ) || !emailReg.test( resultEmail ) || !phoneReg.test( resultPhone ) || !messageReg.test( resultSns ) ){
                    $('.errors').addClass('addError');
                    return false;
                }
                else{

                    $('.errors').removeClass('addError');
                                
                    $.ajax({
                        url : './contactForm.php',
                        type : 'POST',
                        data : {
                            irum		: txtIrum,
                            email       : txtEmail,
                            phone       : txtPhone,
                            message     : txtSns
                        },
                        success: function(data){
                            $('.success').addClass('addSuccess');
                            
                            
                            $('#irum').val('');
                            $('#email').val('');
                            $('#phone').val('');
                            $('#message').val('');
                        },
                        error:  function(){
                            alert('AJAX 지원이 안됩니다. SERVER에서 이용해주세요.');
                        }

                    });
                }
            
        }
    });

	
})(jQuery,window,document);//section12FormSubmitAJAX.js