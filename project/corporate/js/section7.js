(function($,window,document,undefined){
	
	var section7 = {
		cnt : [0,0,0,0],
		end : [785,987,350,166],
		t : [12.82051282,10.13171226,28.57142857,60.24096386],
		setId : [0,0,0,0],
		init : function(){
			section7.count();
			section7.array();
		},
		count: function(z){
			section7.cnt[z]++;
			if( section7.cnt[z] <= section7.end[z] ){
				$('.s7CountNum').eq(z).text(section7.cnt[z]);
			}
			else{
				
				clearInterval( section7.setId[z] );
			}
		},
		array: function(){
			$('.s7CountNum').each(function(idx){
				
				section7.setId[idx] = setInterval(function(){
					section7.count(idx);
				},section7.t[idx]);
				
			});
		}
	}
	section7.init();
	
})(jQuery,window,document);//section7.js