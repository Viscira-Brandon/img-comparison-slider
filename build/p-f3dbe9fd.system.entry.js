System.register(["./p-96469cb2.system.js"],(function(t){"use strict";var e,i,o;return{setters:[function(t){e=t.r;i=t.h;o=t.g}],execute:function(){var n=":host{--divider:1px solid #d7d7d7;--hint-size:40px;--hint-color:#d7d7d7;--hint-opacity:0.5;--hint-opacity-active:0;position:relative;display:inline-block;font-size:0;overflow:hidden}:host(:focus) .hint-wrapper{opacity:var(--hint-opacity-active)}::slotted(img){-webkit-user-drag:none;-khtml-user-drag:none;-moz-user-drag:none;-o-user-drag:none;user-drag:none;-webkit-touch-callout:none;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.component:hover .hint-wrapper{opacity:var(--hint-opacity-active)}.before{position:relative;z-index:-2}.after{position:absolute;left:0;top:0;bottom:0;border-right:var(--divider);z-index:-1}.after .after-overlay{overflow:hidden}.hint-wrapper{position:absolute;width:var(--hint-size);height:var(--hint-size);margin-top:calc(var(--hint-size) / (-2));margin-right:calc(var(--hint-size) / (-2));top:50%;right:0;pointer-events:none;-webkit-box-sizing:border-box;box-sizing:border-box;opacity:var(--hint-opacity);-webkit-transition:opacity 1s;transition:opacity 1s}.hint{background-color:var(--hint-color);width:var(--hint-size);height:var(--hint-size);-webkit-transition:-webkit-transform 1s;transition:-webkit-transform 1s;transition:transform 1s;transition:transform 1s, -webkit-transform 1s;-webkit-transform:rotate(45deg);transform:rotate(45deg);-webkit-box-shadow:0px 0px 15px 0px rgba(0, 0, 0, 0.75);box-shadow:0px 0px 15px 0px rgba(0, 0, 0, 0.75)}.focused .hint{-webkit-transform:rotate(45deg) scale(1.5);transform:rotate(45deg) scale(1.5)}";var r=function(t,e,i){if(t<e){return e}if(t>i){return i}return t};var s={ArrowLeft:-1,ArrowRight:1};var a=function(){function t(t){e(this,t);this.exposure=50;this.isMouseDown=false}t.prototype.componentWillLoad=function(){var t=this;this.el.querySelectorAll("img").forEach((function(e){e.addEventListener("dragstart",(function(t){t.preventDefault()}));e.addEventListener("load",(function(){t.updateAfterWidth()}))}))};t.prototype.componentDidRender=function(){this.slide(0);this.updateAfterWidth();this.el.setAttribute("tabindex","0")};t.prototype.componentDidUnload=function(){if(this.transitionTimer){window.clearTimeout(this.transitionTimer)}};t.prototype.slide=function(t,e){var i=this;if(t===void 0){t=0}if(e===void 0){e=false}this.exposure=r(this.exposure+t,0,100);if(e){var o=100;this.after.style.transition="width "+o+"ms";this.transitionTimer=window.setTimeout((function(){i.after.style.transition=null;i.transitionTimer=null}),o)}this.after.style.width=this.exposure+"%"};t.prototype.onKeyDown=function(t){if(this.keyboardSlideAnimationTimeoutId){return}var e=t.key;if(!Object.keys(s).includes(e)){return}this.startSlideAnimation(s[e])};t.prototype.onKeyUp=function(t){if(!this.keyboardSlideAnimationTimeoutId){return}if(!Object.keys(s).includes(t.key)){return}this.stopSlideAnimation()};t.prototype.onMouseDown=function(t){this.isMouseDown=true;this.slideToEvent(t,true);this.el.focus()};t.prototype.onMouseUp=function(t){this.isMouseDown=false};t.prototype.onMouseMove=function(t){if(this.isMouseDown){this.slideToEvent(t)}};t.prototype.onBlur=function(){this.stopSlideAnimation()};t.prototype.updateAfterWidth=function(){this.imageWidth=this.el.offsetWidth;this.afterImageContainer.style.width=this.el.offsetWidth+"px"};t.prototype.slideToEvent=function(t,e){if(e===void 0){e=false}var i=t.pageX-this.el.getBoundingClientRect().left;this.exposure=i/this.imageWidth*100;this.slide(0,e)};t.prototype.startSlideAnimation=function(t){var e=this;var i=120;var o=1*t;var n=function(){e.keyboardSlideAnimationTimeoutId=window.setTimeout((function(){e.animationRequestId=window.requestAnimationFrame(n)}),1e3/i);e.slide(o)};n()};t.prototype.stopSlideAnimation=function(){if(!this.keyboardSlideAnimationTimeoutId){return}window.clearTimeout(this.keyboardSlideAnimationTimeoutId);window.cancelAnimationFrame(this.animationRequestId);this.keyboardSlideAnimationTimeoutId=null;this.animationRequestId=null};t.prototype.render=function(){var t=this;return i("div",null,i("div",{class:"before",ref:function(e){return t.before=e}},i("slot",{name:"before"})),i("div",{class:"after",ref:function(e){return t.after=e}},i("div",{class:"hint-wrapper"},i("slot",{name:"hint"},i("div",{class:"hint"}))),i("div",{class:"after-overlay"},i("div",{ref:function(e){return t.afterImageContainer=e}},i("slot",{name:"after"})))))};Object.defineProperty(t.prototype,"el",{get:function(){return o(this)},enumerable:false,configurable:true});return t}();t("img_comparison_slider",a);a.style=n}}}));