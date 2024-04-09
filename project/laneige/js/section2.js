(function($,window,document,undefined){
			
		//animte는 transform을 못씀 but 아래 한줄만 있으면 가능
		(function(t,e){if(typeof define==="function"&&define.amd){define(["jquery"],e)}else if(typeof exports==="object"){module.exports=e(require("jquery"))}else{e(t.jQuery)}})(this,function(t){t.transit={version:"0.9.12",propertyMap:{marginLeft:"margin",marginRight:"margin",marginBottom:"margin",marginTop:"margin",paddingLeft:"padding",paddingRight:"padding",paddingBottom:"padding",paddingTop:"padding"},enabled:true,useTransitionEnd:false};var e=document.createElement("div");var n={};function i(t){if(t in e.style)return t;var n=["Moz","Webkit","O","ms"];var i=t.charAt(0).toUpperCase()+t.substr(1);for(var r=0;r<n.length;++r){var s=n[r]+i;if(s in e.style){return s}}}function r(){e.style[n.transform]="";e.style[n.transform]="rotateY(90deg)";return e.style[n.transform]!==""}var s=navigator.userAgent.toLowerCase().indexOf("chrome")>-1;n.transition=i("transition");n.transitionDelay=i("transitionDelay");n.transform=i("transform");n.transformOrigin=i("transformOrigin");n.filter=i("Filter");n.transform3d=r();var a={transition:"transitionend",MozTransition:"transitionend",OTransition:"oTransitionEnd",WebkitTransition:"webkitTransitionEnd",msTransition:"MSTransitionEnd"};var o=n.transitionEnd=a[n.transition]||null;for(var u in n){if(n.hasOwnProperty(u)&&typeof t.support[u]==="undefined"){t.support[u]=n[u]}}e=null;t.cssEase={_default:"ease","in":"ease-in",out:"ease-out","in-out":"ease-in-out",snap:"cubic-bezier(0,1,.5,1)",easeInCubic:"cubic-bezier(.550,.055,.675,.190)",easeOutCubic:"cubic-bezier(.215,.61,.355,1)",easeInOutCubic:"cubic-bezier(.645,.045,.355,1)",easeInCirc:"cubic-bezier(.6,.04,.98,.335)",easeOutCirc:"cubic-bezier(.075,.82,.165,1)",easeInOutCirc:"cubic-bezier(.785,.135,.15,.86)",easeInExpo:"cubic-bezier(.95,.05,.795,.035)",easeOutExpo:"cubic-bezier(.19,1,.22,1)",easeInOutExpo:"cubic-bezier(1,0,0,1)",easeInQuad:"cubic-bezier(.55,.085,.68,.53)",easeOutQuad:"cubic-bezier(.25,.46,.45,.94)",easeInOutQuad:"cubic-bezier(.455,.03,.515,.955)",easeInQuart:"cubic-bezier(.895,.03,.685,.22)",easeOutQuart:"cubic-bezier(.165,.84,.44,1)",easeInOutQuart:"cubic-bezier(.77,0,.175,1)",easeInQuint:"cubic-bezier(.755,.05,.855,.06)",easeOutQuint:"cubic-bezier(.23,1,.32,1)",easeInOutQuint:"cubic-bezier(.86,0,.07,1)",easeInSine:"cubic-bezier(.47,0,.745,.715)",easeOutSine:"cubic-bezier(.39,.575,.565,1)",easeInOutSine:"cubic-bezier(.445,.05,.55,.95)",easeInBack:"cubic-bezier(.6,-.28,.735,.045)",easeOutBack:"cubic-bezier(.175, .885,.32,1.275)",easeInOutBack:"cubic-bezier(.68,-.55,.265,1.55)"};t.cssHooks["transit:transform"]={get:function(e){return t(e).data("transform")||new f},set:function(e,i){var r=i;if(!(r instanceof f)){r=new f(r)}if(n.transform==="WebkitTransform"&&!s){e.style[n.transform]=r.toString(true)}else{e.style[n.transform]=r.toString()}t(e).data("transform",r)}};t.cssHooks.transform={set:t.cssHooks["transit:transform"].set};t.cssHooks.filter={get:function(t){return t.style[n.filter]},set:function(t,e){t.style[n.filter]=e}};if(t.fn.jquery<"1.8"){t.cssHooks.transformOrigin={get:function(t){return t.style[n.transformOrigin]},set:function(t,e){t.style[n.transformOrigin]=e}};t.cssHooks.transition={get:function(t){return t.style[n.transition]},set:function(t,e){t.style[n.transition]=e}}}p("scale");p("scaleX");p("scaleY");p("translate");p("rotate");p("rotateX");p("rotateY");p("rotate3d");p("perspective");p("skewX");p("skewY");p("x",true);p("y",true);function f(t){if(typeof t==="string"){this.parse(t)}return this}f.prototype={setFromString:function(t,e){var n=typeof e==="string"?e.split(","):e.constructor===Array?e:[e];n.unshift(t);f.prototype.set.apply(this,n)},set:function(t){var e=Array.prototype.slice.apply(arguments,[1]);if(this.setter[t]){this.setter[t].apply(this,e)}else{this[t]=e.join(",")}},get:function(t){if(this.getter[t]){return this.getter[t].apply(this)}else{return this[t]||0}},setter:{rotate:function(t){this.rotate=b(t,"deg")},rotateX:function(t){this.rotateX=b(t,"deg")},rotateY:function(t){this.rotateY=b(t,"deg")},scale:function(t,e){if(e===undefined){e=t}this.scale=t+","+e},skewX:function(t){this.skewX=b(t,"deg")},skewY:function(t){this.skewY=b(t,"deg")},perspective:function(t){this.perspective=b(t,"px")},x:function(t){this.set("translate",t,null)},y:function(t){this.set("translate",null,t)},translate:function(t,e){if(this._translateX===undefined){this._translateX=0}if(this._translateY===undefined){this._translateY=0}if(t!==null&&t!==undefined){this._translateX=b(t,"px")}if(e!==null&&e!==undefined){this._translateY=b(e,"px")}this.translate=this._translateX+","+this._translateY}},getter:{x:function(){return this._translateX||0},y:function(){return this._translateY||0},scale:function(){var t=(this.scale||"1,1").split(",");if(t[0]){t[0]=parseFloat(t[0])}if(t[1]){t[1]=parseFloat(t[1])}return t[0]===t[1]?t[0]:t},rotate3d:function(){var t=(this.rotate3d||"0,0,0,0deg").split(",");for(var e=0;e<=3;++e){if(t[e]){t[e]=parseFloat(t[e])}}if(t[3]){t[3]=b(t[3],"deg")}return t}},parse:function(t){var e=this;t.replace(/([a-zA-Z0-9]+)\((.*?)\)/g,function(t,n,i){e.setFromString(n,i)})},toString:function(t){var e=[];for(var i in this){if(this.hasOwnProperty(i)){if(!n.transform3d&&(i==="rotateX"||i==="rotateY"||i==="perspective"||i==="transformOrigin")){continue}if(i[0]!=="_"){if(t&&i==="scale"){e.push(i+"3d("+this[i]+",1)")}else if(t&&i==="translate"){e.push(i+"3d("+this[i]+",0)")}else{e.push(i+"("+this[i]+")")}}}}return e.join(" ")}};function c(t,e,n){if(e===true){t.queue(n)}else if(e){t.queue(e,n)}else{t.each(function(){n.call(this)})}}function l(e){var i=[];t.each(e,function(e){e=t.camelCase(e);e=t.transit.propertyMap[e]||t.cssProps[e]||e;e=h(e);if(n[e])e=h(n[e]);if(t.inArray(e,i)===-1){i.push(e)}});return i}function d(e,n,i,r){var s=l(e);if(t.cssEase[i]){i=t.cssEase[i]}var a=""+y(n)+" "+i;if(parseInt(r,10)>0){a+=" "+y(r)}var o=[];t.each(s,function(t,e){o.push(e+" "+a)});return o.join(", ")}t.fn.transition=t.fn.transit=function(e,i,r,s){var a=this;var u=0;var f=true;var l=t.extend(true,{},e);if(typeof i==="function"){s=i;i=undefined}if(typeof i==="object"){r=i.easing;u=i.delay||0;f=typeof i.queue==="undefined"?true:i.queue;s=i.complete;i=i.duration}if(typeof r==="function"){s=r;r=undefined}if(typeof l.easing!=="undefined"){r=l.easing;delete l.easing}if(typeof l.duration!=="undefined"){i=l.duration;delete l.duration}if(typeof l.complete!=="undefined"){s=l.complete;delete l.complete}if(typeof l.queue!=="undefined"){f=l.queue;delete l.queue}if(typeof l.delay!=="undefined"){u=l.delay;delete l.delay}if(typeof i==="undefined"){i=t.fx.speeds._default}if(typeof r==="undefined"){r=t.cssEase._default}i=y(i);var p=d(l,i,r,u);var h=t.transit.enabled&&n.transition;var b=h?parseInt(i,10)+parseInt(u,10):0;if(b===0){var g=function(t){a.css(l);if(s){s.apply(a)}if(t){t()}};c(a,f,g);return a}var m={};var v=function(e){var i=false;var r=function(){if(i){a.unbind(o,r)}if(b>0){a.each(function(){this.style[n.transition]=m[this]||null})}if(typeof s==="function"){s.apply(a)}if(typeof e==="function"){e()}};if(b>0&&o&&t.transit.useTransitionEnd){i=true;a.bind(o,r)}else{window.setTimeout(r,b)}a.each(function(){if(b>0){this.style[n.transition]=p}t(this).css(l)})};var z=function(t){this.offsetWidth;v(t)};c(a,f,z);return this};function p(e,i){if(!i){t.cssNumber[e]=true}t.transit.propertyMap[e]=n.transform;t.cssHooks[e]={get:function(n){var i=t(n).css("transit:transform");return i.get(e)},set:function(n,i){var r=t(n).css("transit:transform");r.setFromString(e,i);t(n).css({"transit:transform":r})}}}function h(t){return t.replace(/([A-Z])/g,function(t){return"-"+t.toLowerCase()})}function b(t,e){if(typeof t==="string"&&!t.match(/^[\-0-9\.]+$/)){return t}else{return""+t+e}}function y(e){var n=e;if(typeof n==="string"&&!n.match(/^[\-0-9\.]+/)){n=t.fx.speeds[n]||t.fx.speeds._default}return b(n,"ms")}t.transit.getTransitionValue=d;return t});
			
			
		var s2cnt = 0;
		var winW = $(window).innerWidth();
		var conWs2 = $('.sec2Slide-container').innerWidth();
		var n = 3;
		var slideWs2 = conWs2 / n;
		
		var sec2Srl=0;
		var sec2SrlOp=0;
		
			$(window).scroll(function(event){
			
				event.preventDefault();
				
			
				if( $(window).scrollTop() >= $('#section1').offset().top+500 ){	
					sec2Srl+=9;
					sec2SrlOp+=0.05;
					if(sec2Srl>100){
						sec2Srl=100;
					}
					if(sec2SrlOp>1){
						sec2SrlOp=1;
					}
					
					sec2AnimationFn();
				}
				
				else{
					sec2Srl-=6;
					sec2SrlOp-=0.02;			
					if(sec2Srl<0){
						sec2Srl=0;
					}
					if(sec2SrlOp<0){
						sec2SrlOp=0;
					}
					sec2AnimationFn();
				}
			
			});
		
		function sec2AnimationFn(){

			$('.sec2Slide0').css({ top: (100-sec2Srl), opacity: sec2SrlOp });
			$('.sec2Slide1').css({ top:(-100+sec2Srl), opacity: sec2SrlOp });
			$('.sec2Slide2').css({ top: (100-sec2Srl), opacity: sec2SrlOp });
			$('.sec2Slide3').css({ top: (100-sec2Srl), opacity: sec2SrlOp });
			$('.sec2Slide4').css({ top: (100-sec2Srl), opacity: sec2SrlOp });
			$('.sec2Slide5').css({ top: (100-sec2Srl), opacity: sec2SrlOp });
		}
		
			
			function s2Resize(){
			winW = $(window).innerWidth();
			conWs2 = $('.sec2Slide-container').innerWidth();
			
			if( conWs2 > 1000 ){
				n=3;
			}
			else if( conWs2 > 600 ){
				n=2;
			}
			else {
				n=1;
			}
			slideWs2 = conWs2 / n;
			$('.sec2Slide').css({ width:slideWs2 });
			$('.sec2Slide-wrap').css({ width:(slideWs2*12), marginLeft:-(slideWs2*3) });
			
			$('.sec2Slide-wrap').stop().animate({ left:-(slideWs2*s2cnt) }, 0);
		}
		s2Resize();
		setTimeout(s2Resize, 100);
		
		$(window).resize(function(){
			s2Resize();
			setTimeout(s2Resize, 100);
		});
	
		
		//슬라이드 함수
		function s2slideFn(){
			$('.sec2Slide-wrap').stop().animate({ left:-(slideWs2*s2cnt) }, 600, function(){
				if( s2cnt > 5 ){ s2cnt = 0 }
				if( s2cnt < 0 ){ s2cnt = 5 }
				$('.sec2Slide-wrap').stop().animate({ left:-(slideWs2*s2cnt) }, 0);
			});
		}
		
		//다음카운트 함수
		function s2nextCountFn(){
			s2cnt++;
			s2slideFn();
		}
		
		//next버튼 클릭 이벤트
		$('.sec2-nextBtn').on({
			click: function(){
				if( !$('.sec2Slide-wrap').is(':animated') ){
					s2nextCountFn();
				}
			}
		});
		
		//이전카운트 함수
		function s2prevCountFn(){
			s2cnt--;
			s2slideFn();
		}
		
		//prev버튼 클릭 이벤트
		$('.sec2-prevBtn').on({
			click: function(){
				if( !$('.sec2Slide-wrap').is(':animated') ){
					s2prevCountFn();
				}
			}
		});
		
		//터치 이벤트
		$('.sec2Slide-wrap').swipe({
			swipeLeft:	function(){
				if( !$('.sec2Slide-wrap').is(':animated') ){
					s2nextCountFn();
				}
			},
			swipeRight:	function(){
				if( !$('.sec2Slide-wrap').is(':animated') ){
					s2prevCountFn();
				}
			}			
		});
		
		
			
		//슬라이드 마우스오버시 픽미 기울면서 나오기 & 제품 기울이기
		$('.sec2Slide').on({
			mouseenter: function(){
				$(this).find('.pickme-image').stop().animate({ opacity:1 },400);
				$(this).find('.pickme-image > img').stop().animate({ rotate: '15deg' });
				$(this).find('.item-image > img').stop().animate({ rotate: '-5deg' });
				

			},
			mouseleave: function(){
				$(this).find('.pickme-image').stop().animate({ opacity:0 },400);
				$(this).find('.pickme-image > img').stop().animate({ rotate: '0deg' });
				$(this).find('.item-image > img').stop().animate({ rotate: '0deg' });
				
			}
		});
			
		//슬라이드 마우스오버시 버블 애니메이션
		$('.sec2Slide').each(function(idx){
			$(this).on({
			mouseenter:	function(){
				bubble1AniFn(idx);
			},
			mouseleave:	function(){
				bubble1FomatFn();
			}
		});
		});
		
		
		// 버블 애니메이션 초기화
		function bubble1FomatFn(){
			$('.bubble1').stop().animate({ bottom:65, left:10, opacity:0 },0);
			$('.bubble2').stop().animate({ bottom:40, left:10, opacity:0 },0);
			$('.bubble3').stop().animate({ bottom:180, left:10, opacity:0 },0);
			$('.bubble4').stop().animate({ bottom:170, left:10, opacity:0 },0);
			$('.bubble5').stop().animate({ bottom:180, right:0, opacity:0 },0);
			$('.bubble6').stop().animate({ bottom:40, right:60, opacity:0 },0);
			$('.bubble7').stop().animate({ bottom:65, right:30, opacity:0 },0);
		}
		bubble1FomatFn();
		
		// 버블 애니메이션
		function bubble1AniFn(z){
			$('.item-image').eq(z).find('.bubble1-1').stop().delay(200).animate({ bottom:100, left:40, opacity:1 },300, 'easeInQuad', function(){
				$('.item-image').eq(z).find('.bubble1-2').stop().animate({ bottom:145, left:5, opacity:1 },200, 'easeInQuad', function(){
					$('.item-image').eq(z).find('.bubble1-3').stop().animate({ bottom:205, left:40, opacity:1 },200, 'easeInQuad', function(){
						$('.item-image').eq(z).find('.bubble1-4').stop().animate({ bottom:250, left:5 },200).animate({ opacity:0 },200, 'easeInQuad');
						
					});
				});
			});
			
			$('.item-image').eq(z).find('.bubble2-1').stop().delay(300).animate({ bottom:65, left:40, opacity:1 },300, 'easeInQuad', function(){
				$('.item-image').eq(z).find('.bubble2-2').stop().animate({ bottom:140, left:5, opacity:1 },200, 'easeInQuad', function(){
					$('.item-image').eq(z).find('.bubble2-3').stop().animate({ bottom:205, left:40, opacity:1 },200, 'easeInQuad', function(){
						$('.item-image').eq(z).find('.bubble2-4').stop().animate({ bottom:230, left:15 },200).animate({ opacity:0 },200, 'easeInQuad');
						
					});
				});
			});
			
			$('.item-image').eq(z).find('.bubble3-1').stop().delay(200).animate({ bottom:215, left:40, opacity:1 },300, 'easeInQuad', function(){
				$('.item-image').eq(z).find('.bubble3-2').stop().animate({ bottom:255, left:5, opacity:1 },200, 'easeInQuad', function(){
					$('.item-image').eq(z).find('.bubble3-3').stop().animate({ bottom:315, left:40, opacity:1 },200, 'easeInQuad', function(){
						$('.item-image').eq(z).find('.bubble3-4').stop().animate({ bottom:360, left:5 },200).animate({ opacity:0 },200, 'easeInQuad');
						
					});
				});
			});
			
			$('.item-image').eq(z).find('.bubble4-1').stop().animate({ bottom:170, left:40, opacity:1 },300, 'easeInQuad', function(){
				$('.item-image').eq(z).find('.bubble4-2').stop().animate({ bottom:245, left:5, opacity:1 },200, 'easeInQuad', function(){
					$('.item-image').eq(z).find('.bubble4-3').stop().animate({ bottom:310, left:40, opacity:1 },200, 'easeInQuad', function(){
						$('.item-image').eq(z).find('.bubble4-4').stop().animate({ bottom:335, left:15 },200).animate({ opacity:0 },200, 'easeInQuad');
						
					});
				});
			});
			
			$('.item-image').eq(z).find('.bubble5-1').stop().animate({ bottom:215, right:10, opacity:1 },300, 'easeInQuad', function(){
				$('.item-image').eq(z).find('.bubble5-2').stop().animate({ bottom:255, right:0, opacity:1 },200, 'easeInQuad', function(){
					$('.item-image').eq(z).find('.bubble5-3').stop().animate({ bottom:315, right:10, opacity:.5 },200, 'easeInQuad', function(){
						$('.item-image').eq(z).find('.bubble5-4').stop().animate({ bottom:360, right:0, opacity:0 },200, 'easeInQuad');
						
					});
				});
			});
			
			$('.item-image').eq(z).find('.bubble6-1').stop().delay(200).animate({ bottom:65, right:30, opacity:1 },300, 'easeInQuad', function(){
				$('.item-image').eq(z).find('.bubble6-2').stop().animate({ bottom:140, right:65, opacity:1 },200, 'easeInQuad', function(){
					$('.item-image').eq(z).find('.bubble6-3').stop().animate({ bottom:205, right:30, opacity:.5 },200, 'easeInQuad', function(){
						$('.item-image').eq(z).find('.bubble6-4').stop().animate({ bottom:230, right:55, opacity:0 },200, 'easeInQuad');
						
					});
				});
			});
			
			$('.item-image').eq(z).find('.bubble7-1').stop().delay(300).animate({ bottom:100, right:0, opacity:1 },300, 'easeInQuad', function(){
				$('.item-image').eq(z).find('.bubble7-2').stop().animate({ bottom:145, right:35, opacity:1 },200, 'easeInQuad', function(){
					$('.item-image').eq(z).find('.bubble7-3').stop().animate({ bottom:205, right:0, opacity:.5 },200, 'easeInQuad', function(){
						$('.item-image').eq(z).find('.bubble7-4').stop().animate({ bottom:250, right:35, opacity:0 },200, 'easeInQuad');
						
					});
				});
			});
		}
		
		
		
})(jQuery,window,document);//section2.js