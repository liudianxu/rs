(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2e2e8330"],{"11e9":function(t,e,n){var r=n("52a7"),i=n("4630"),s=n("6821"),c=n("6a99"),o=n("69a8"),a=n("c69a"),u=Object.getOwnPropertyDescriptor;e.f=n("9e1e")?u:function(t,e){if(t=s(t),e=c(e,!0),a)try{return u(t,e)}catch(n){}if(o(t,e))return i(!r.f.call(t,e),t[e])}},"1e4b":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"index-container"},[n("base-slider",{staticClass:"crousel",attrs:{list:t.imgList,height:370},on:{sliderClick:t.sliderClick}})],1)},i=[],s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"slider",staticClass:"slider-box",style:t.sliderStyle,on:{mouseover:function(e){return t.pause()},mouseout:function(e){return t.play()}}},[n("div",{staticClass:"slider-content",class:t.mask?"mask":""},[t._l(t.list,function(e,r){return n("div",{key:r,staticClass:"slider",class:t.setClass(r),style:t.setBGImg(e.src),on:{click:function(e){return t.onClick(r)}}},[n("img",{attrs:{src:e.src}})])}),t._v("e\n    "),n("i",{directives:[{name:"show",rawName:"v-show",value:t.arrow,expression:"arrow"}],staticClass:"iconfont icon-left",on:{click:function(e){return t.prev()}}},[t._v("上一页")]),n("i",{directives:[{name:"show",rawName:"v-show",value:t.arrow,expression:"arrow"}],staticClass:"iconfont icon-right",on:{click:function(e){return t.next()}}},[t._v("下一页")])],2),t.dots?n("div",{staticClass:"dots"},t._l(t.list,function(e,r){return n("span",{key:r,style:t.setActiveDot(r),on:{mouseover:function(e){t.currentIndex=r}}})}),0):t._e()])},c=[],o=(n("28a5"),n("c5f6"),{data:function(){return{currentIndex:0,sliderDomList:[],timer:null}},props:{list:{required:!0,type:Array,default:function(){return[]}},width:{type:Number},height:{type:Number},imgType:{type:String,default:"percentage"},autoPlay:{type:Boolean,default:!0},mask:{type:Boolean,default:!0},interval:{type:Number,default:4e3},dots:{type:Boolean,default:!0},arrow:{type:Boolean,default:!0},color:{type:String,default:"red"}},mounted:function(){this.sliderDomList=this.$refs.slider.querySelectorAll("div.slider"),this.play()},methods:{setClass:function(t){var e=this.currentIndex===this.list.length-1?0:this.currentIndex+1,n=0===this.currentIndex?this.list.length-1:this.currentIndex-1;switch(t){case this.currentIndex:return"active";case e:return"next";case n:return"prev";default:return""}},setBGImg:function(t){return{backgroundImage:"url(".concat(t,")")}},setActiveDot:function(t){return t===this.currentIndex?{backgroundColor:this.color}:{backgroundColor:"blue"}},play:function(){var t=this;this.pause(),this.autoPlay&&(this.timer=setInterval(function(){t.next()},this.interval))},pause:function(){clearInterval(this.timer)},next:function(){this.currentIndex=++this.currentIndex%this.list.length},prev:function(){this.currentIndex=0===this.currentIndex?this.list.length-1:this.currentIndex-1},onClick:function(t){if(t===this.currentIndex)this.$emit("sliderClick",t);else{var e=this.sliderDomList[t].className.split(" ")[1];console.log(e),"next"===e?this.next():this.prev()}}},computed:{sliderStyle:function(){return{width:this.width?this.width+"px":"100%",height:this.height?this.height+"px":"100%",perspective:this.width+"px",backgroundSize:"percentage"===this.imgType?"100% 100%":this.imgType}}}}),a=o,u=(n("774a"),n("2877")),l=Object(u["a"])(a,s,c,!1,null,"e3bb36ac",null),f=l.exports,d={name:"home",data:function(){return{show:!0,matchlist:[],imgList:[{src:n("2b78")},{src:n("6c13")}]}},mounted:function(){},methods:{onSearch:function(t){console.log("goserch",t)},onMatchSearch:function(t){console.log("newQuery",t)},sliderClick:function(t){console.log(t)}},components:{BaseSlider:f}},h=d,p=(n("2d57"),Object(u["a"])(h,r,i,!1,null,"2d96055a",null));e["default"]=p.exports},"28a5":function(t,e,n){"use strict";var r=n("aae3"),i=n("cb7c"),s=n("ebd6"),c=n("0390"),o=n("9def"),a=n("5f1b"),u=n("520a"),l=n("79e5"),f=Math.min,d=[].push,h="split",p="length",v="lastIndex",g=4294967295,m=!l(function(){RegExp(g,"y")});n("214f")("split",2,function(t,e,n,l){var y;return y="c"=="abbc"[h](/(b)*/)[1]||4!="test"[h](/(?:)/,-1)[p]||2!="ab"[h](/(?:ab)*/)[p]||4!="."[h](/(.?)(.?)/)[p]||"."[h](/()()/)[p]>1||""[h](/.?/)[p]?function(t,e){var i=String(this);if(void 0===t&&0===e)return[];if(!r(t))return n.call(i,t,e);var s,c,o,a=[],l=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),f=0,h=void 0===e?g:e>>>0,m=new RegExp(t.source,l+"g");while(s=u.call(m,i)){if(c=m[v],c>f&&(a.push(i.slice(f,s.index)),s[p]>1&&s.index<i[p]&&d.apply(a,s.slice(1)),o=s[0][p],f=c,a[p]>=h))break;m[v]===s.index&&m[v]++}return f===i[p]?!o&&m.test("")||a.push(""):a.push(i.slice(f)),a[p]>h?a.slice(0,h):a}:"0"[h](void 0,0)[p]?function(t,e){return void 0===t&&0===e?[]:n.call(this,t,e)}:n,[function(n,r){var i=t(this),s=void 0==n?void 0:n[e];return void 0!==s?s.call(n,i,r):y.call(String(i),n,r)},function(t,e){var r=l(y,t,this,e,y!==n);if(r.done)return r.value;var u=i(t),d=String(this),h=s(u,RegExp),p=u.unicode,v=(u.ignoreCase?"i":"")+(u.multiline?"m":"")+(u.unicode?"u":"")+(m?"y":"g"),x=new h(m?u:"^(?:"+u.source+")",v),b=void 0===e?g:e>>>0;if(0===b)return[];if(0===d.length)return null===a(x,d)?[d]:[];var I=0,w=0,_=[];while(w<d.length){x.lastIndex=m?w:0;var k,N=a(x,m?d:d.slice(w));if(null===N||(k=f(o(x.lastIndex+(m?0:w)),d.length))===I)w=c(d,w,p);else{if(_.push(d.slice(I,w)),_.length===b)return _;for(var C=1;C<=N.length-1;C++)if(_.push(N[C]),_.length===b)return _;w=I=k}}return _.push(d.slice(I)),_}]})},"2b78":function(t,e,n){t.exports=n.p+"assets/img/c.c8f7ac9b.jpg"},"2d57":function(t,e,n){"use strict";var r=n("6ca8"),i=n.n(r);i.a},5065:function(t,e,n){},"5dbc":function(t,e,n){var r=n("d3f4"),i=n("8b97").set;t.exports=function(t,e,n){var s,c=e.constructor;return c!==n&&"function"==typeof c&&(s=c.prototype)!==n.prototype&&r(s)&&i&&i(t,s),t}},"6c13":function(t,e,n){t.exports=n.p+"assets/img/d.1caad13f.jpg"},"6ca8":function(t,e,n){},"774a":function(t,e,n){"use strict";var r=n("5065"),i=n.n(r);i.a},"8b97":function(t,e,n){var r=n("d3f4"),i=n("cb7c"),s=function(t,e){if(i(t),!r(e)&&null!==e)throw TypeError(e+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,e,r){try{r=n("9b43")(Function.call,n("11e9").f(Object.prototype,"__proto__").set,2),r(t,[]),e=!(t instanceof Array)}catch(i){e=!0}return function(t,n){return s(t,n),e?t.__proto__=n:r(t,n),t}}({},!1):void 0),check:s}},9093:function(t,e,n){var r=n("ce10"),i=n("e11e").concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,i)}},aa77:function(t,e,n){var r=n("5ca1"),i=n("be13"),s=n("79e5"),c=n("fdef"),o="["+c+"]",a="​",u=RegExp("^"+o+o+"*"),l=RegExp(o+o+"*$"),f=function(t,e,n){var i={},o=s(function(){return!!c[t]()||a[t]()!=a}),u=i[t]=o?e(d):c[t];n&&(i[n]=u),r(r.P+r.F*o,"String",i)},d=f.trim=function(t,e){return t=String(i(t)),1&e&&(t=t.replace(u,"")),2&e&&(t=t.replace(l,"")),t};t.exports=f},aae3:function(t,e,n){var r=n("d3f4"),i=n("2d95"),s=n("2b4c")("match");t.exports=function(t){var e;return r(t)&&(void 0!==(e=t[s])?!!e:"RegExp"==i(t))}},c5f6:function(t,e,n){"use strict";var r=n("7726"),i=n("69a8"),s=n("2d95"),c=n("5dbc"),o=n("6a99"),a=n("79e5"),u=n("9093").f,l=n("11e9").f,f=n("86cc").f,d=n("aa77").trim,h="Number",p=r[h],v=p,g=p.prototype,m=s(n("2aeb")(g))==h,y="trim"in String.prototype,x=function(t){var e=o(t,!1);if("string"==typeof e&&e.length>2){e=y?e.trim():d(e,3);var n,r,i,s=e.charCodeAt(0);if(43===s||45===s){if(n=e.charCodeAt(2),88===n||120===n)return NaN}else if(48===s){switch(e.charCodeAt(1)){case 66:case 98:r=2,i=49;break;case 79:case 111:r=8,i=55;break;default:return+e}for(var c,a=e.slice(2),u=0,l=a.length;u<l;u++)if(c=a.charCodeAt(u),c<48||c>i)return NaN;return parseInt(a,r)}}return+e};if(!p(" 0o1")||!p("0b1")||p("+0x1")){p=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof p&&(m?a(function(){g.valueOf.call(n)}):s(n)!=h)?c(new v(x(e)),n,p):x(e)};for(var b,I=n("9e1e")?u(v):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),w=0;I.length>w;w++)i(v,b=I[w])&&!i(p,b)&&f(p,b,l(v,b));p.prototype=g,g.constructor=p,n("2aba")(r,h,p)}},fdef:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"}}]);
//# sourceMappingURL=chunk-2e2e8330.762275cd.js.map