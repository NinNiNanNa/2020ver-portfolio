(function($,window,document,undefined){
	
	var section7 = {
		cnt : [0,0,0,0],
		end : [1500,1400,1250,1600],
		t : [6.666666667,7.142857143,8,6.25],
		setId : [0,0,0,0],
		init : function(){
			section7.count();
			section7.array();
		},
		count: function(z){
			section7.cnt[z]++;	//1 2 3 ...780
			if( section7.cnt[z] <= section7.end[z] ){
				$('.s7CountNum').eq(z).text(section7.cnt[z]);
			}
			else{	//780을 넘으면 정지해라
				//타이머 정지
				clearInterval( section7.setId[z] );
			}
		},
		array: function(){
			$('.s7CountNum').each(function(idx){
				
				section7.setId[idx] = setInterval(function(){
					section7.count(idx);	//카운트 함수 호출시 매개변수 전달
				},section7.t[idx]);
				
			});
		}
	}
	section7.init();
	
})(jQuery,window,document);//section7.js