(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2ccd9974"],{"1a7a":function(t,s,e){t.exports=e.p+"assets/img/hz.22bf736b.png"},"2b78":function(t,s,e){t.exports=e.p+"assets/img/c.c8f7ac9b.jpg"},"2ba3":function(t,s,e){t.exports=e.p+"assets/img/rm.16cd5a6d.png"},"2cf1":function(t,s,e){"use strict";var i=e("478b"),a=e.n(i);a.a},"478b":function(t,s,e){},"75d7":function(t,s,e){t.exports=e.p+"assets/img/tpy.90d78534.png"},"871e":function(t,s,e){"use strict";var i=e("b095"),a=e.n(i);a.a},b095:function(t,s,e){},b59f:function(t,s,e){t.exports=e.p+"assets/img/al.1158fc25.png"},b8b2:function(t,s,e){t.exports=e.p+"assets/img/tj.5381a047.png"},bb51:function(t,s,e){"use strict";e.r(s);var i=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"index-container"},[i("base-slider",{staticClass:"crousel",attrs:{list:t.imgList,height:640},on:{sliderClick:t.sliderClick}}),i("div",{staticClass:" search-container"},[i("div",{staticClass:"search-wrapper"},[i("p",{staticClass:"title"},[t._v("从这里开始")]),i("p",{staticClass:"tips"},[t._v("输入您需要的保障，我们会为您推荐合适的产品")]),i("base-search-box",{on:{search:t.onSearch}}),i("div",{staticClass:"hot-search clearfix"},[i("p",{staticClass:"hot-title fl"},[t._v("或换一个推荐关键词：")]),i("ul",{staticClass:"hot-list fl clearfix"},[i("li",{on:{click:t.goList}},[t._v("旅游险")])])])],1)]),i("div",{staticClass:"layout"},[i("div",{staticClass:"layer layer-categogy"},[i("p",{staticClass:"title"},[t._v("\n        产品分类\n      ")]),i("ul",{staticClass:"product-category clearfix"},[i("li",{staticClass:"yw"},[i("router-link",{attrs:{tag:"div",to:"/37duc/product/list?type=1"}},[i("p",[t._v("意外伤害")])])],1),i("li",{staticClass:"yl"},[i("router-link",{attrs:{tag:"div",to:"/37duc/product/list?type=2"}},[i("p",[t._v("医疗保险")])])],1),i("li",{staticClass:"jb"},[i("router-link",{attrs:{tag:"div",to:"/37duc/product/list?type=3"}},[i("p",[t._v("疾病保险")])])],1),i("li",{staticClass:"hl"},[i("router-link",{attrs:{tag:"div",to:"/37duc/product/list?type=4"}},[i("p",[t._v("护理保险")])])],1)])]),i("div",{staticClass:"layer layer-recommend"},[i("p",{staticClass:"title"},[t._v("\n        产品推荐\n      ")]),i("div",{staticClass:"product clearfix"},[i("img",{attrs:{src:e("b8b2"),alt:""}}),i("div",{staticClass:"product-wrapper"},[i("div",{staticClass:"list clearfix"},[i("div",{staticClass:"part-lt fl"},[i("div",{staticClass:"pName"},[t._v(t._s(t.productDetails.product.name))]),i("div",{staticClass:"pMsg"},t._l(t.productDetails.insure_condition,function(s,e){return i("span",{key:e,staticClass:"condition-item"},[t._v(t._s(s.name)+"："+t._s(s.value))])}),0),i("div",{staticClass:"marks clearfix"},[i("div",{staticClass:"mark fl"},[i("span",{staticClass:"fl"},[i("i"),t._v(t._s(t.productDetails.product.feature1))]),i("span",{staticClass:"fl"},[i("i"),t._v(t._s(t.productDetails.product.feature2))]),i("span",{staticClass:"fl"},[i("i"),t._v(t._s(t.productDetails.product.feature3))])])]),i("div",{staticClass:"characteristics"},t._l(t.productDetails.product.parameter_values[0].entries,function(s,e){return i("div",{key:e,staticClass:"character clearfix"},[i("span",{staticClass:"fl"},[t._v(t._s(s.name))]),i("span",{staticClass:"fr"},[t._v(t._s(s.limit))])])}),0),i("div",{staticClass:"logo"},[i("img",{attrs:{src:t.baseSrc+t.productDetails.product.brandLogo,alt:"公司logo"}})])]),i("div",{staticClass:"part-rt"},[i("div",{staticClass:"ctx"},[i("div",{staticClass:"price"},[i("span",{staticClass:"p"},[t._v(t._s(t.productDetails.product.price))]),i("span",{staticClass:"b"},[t._v("元起")])]),i("div",{staticClass:"toDetail",on:{click:function(s){return t.goDetail(1)}}},[t._v("查看详情")]),t._t("default")],2)])])])])]),t._m(0)])],1)},a=[function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"layer layer-company"},[i("p",{staticClass:"title"},[t._v("\n        合作品牌\n      ")]),i("ul",{staticClass:"coper-company clearfix"},[i("li",[i("img",{attrs:{src:e("e420"),alt:""}})]),i("li",[i("img",{attrs:{src:e("b59f"),alt:""}})]),i("li",[i("img",{attrs:{src:e("1a7a"),alt:""}})]),i("li",[i("img",{attrs:{src:e("c96f"),alt:""}})]),i("li",[i("img",{attrs:{src:e("75d7"),alt:""}})]),i("li",[i("img",{attrs:{src:e("2ba3"),alt:""}})]),i("li",[i("img",{attrs:{src:e("c566"),alt:""}})])])])}],r=e("cebc"),c=e("2f62"),n=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{ref:"slider",staticClass:"slider-box",style:t.sliderStyle,on:{mouseover:function(s){return t.pause()},mouseout:function(s){return t.play()}}},[e("div",{staticClass:"slider-content",class:t.mask?"mask":""},t._l(t.list,function(s,i){return e("div",{key:i,staticClass:"slider",class:t.setClass(i),style:t.setBGImg(s.src),on:{click:function(s){return t.onClick(i)}}},[e("img",{attrs:{src:s.src}})])}),0)])},l=[],o=(e("28a5"),e("c5f6"),{data:function(){return{currentIndex:0,sliderDomList:[],timer:null}},props:{list:{required:!0,type:Array,default:function(){return[]}},width:{type:Number},height:{type:Number},imgType:{type:String,default:"percentage"},autoPlay:{type:Boolean,default:!0},mask:{type:Boolean,default:!0},interval:{type:Number,default:5e3},dots:{type:Boolean,default:!0},arrow:{type:Boolean,default:!0},color:{type:String,default:"red"}},mounted:function(){this.sliderDomList=this.$refs.slider.querySelectorAll("div.slider"),this.play()},methods:{setClass:function(t){var s=this.currentIndex===this.list.length-1?0:this.currentIndex+1,e=0===this.currentIndex?this.list.length-1:this.currentIndex-1;switch(t){case this.currentIndex:return"active";case s:return"next";case e:return"prev";default:return""}},setBGImg:function(t){return{backgroundImage:"url(".concat(t,")")}},setActiveDot:function(t){return t===this.currentIndex?{backgroundColor:this.color}:{backgroundColor:"blue"}},play:function(){var t=this;this.pause(),this.autoPlay&&(this.timer=setInterval(function(){t.next()},this.interval))},pause:function(){clearInterval(this.timer)},next:function(){this.currentIndex=++this.currentIndex%this.list.length},prev:function(){this.currentIndex=0===this.currentIndex?this.list.length-1:this.currentIndex-1},onClick:function(t){if(t===this.currentIndex)this.$emit("sliderClick",t);else{var s=this.sliderDomList[t].className.split(" ")[1];console.log(s),"next"===s?this.next():this.prev()}}},computed:{sliderStyle:function(){return{width:this.width?this.width+"px":"100%",height:this.height?this.height+"px":"100%",perspective:this.width+"px",backgroundSize:"percentage"===this.imgType?"100% 100%":this.imgType}}}}),u=o,d=(e("2cf1"),e("2877")),p=Object(d["a"])(u,n,l,!1,null,"868b39aa",null),f=p.exports,h=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"search-box"},[e("div",{staticClass:"search-input fl"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.query,expression:"query"}],ref:"query",staticClass:"fl",attrs:{type:"text",placeholder:t.placeholder,maxlength:"15"},domProps:{value:t.query},on:{input:function(s){s.target.composing||(t.query=s.target.value)}}})]),e("div",{staticClass:"search-btn fr",on:{click:t.onSearch}},[e("span",{staticClass:"icon"})])])},m=[],v=e("bbd5"),g={name:"BaseSearchBox",props:{placeholder:{type:String,default:"请输入你想搜索的关键字"},matchlist:{type:Array,default:function(){return[]}}},data:function(){return{query:""}},methods:{onClear:function(){this.query=""},onSearch:function(){this.$emit("search",this.query)},blur:function(){this.$refs.query.blur()}},created:function(){var t=this;this.$watch("query",Object(v["a"])(function(s){t.$emit("matchSearch",s)},200))}},b=g,C=(e("871e"),Object(d["a"])(b,h,m,!1,null,"2dabf0b4",null)),y=C.exports,x=e("e04d"),_={name:"home",data:function(){return{baseSrc:"",memberId:"",imgList:[{src:e("2b78")}]}},mounted:function(){this.getTjDetail(),this.baseSrc="".concat("http://7qi3n5.natappfree.cc"),Object(x["a"])("userInfo")&&(this.memberId=Object(x["a"])("userInfo").id)},methods:{onSearch:function(t){t&&this.$router.push({path:"/37duc/product/list/1"})},goList:function(){this.$router.push({path:"/37duc/product/list/1"})},onMatchSearch:function(t){console.log("newQuery",t)},sliderClick:function(t){console.log(t)},goDetail:function(t){this.$router.push({path:"/37duc/product/detail/".concat(t),query:{productId:1}})}},computed:Object(r["a"])({},Object(c["c"])(["productDetails"])),components:{baseSlider:f,baseSearchBox:y}},k=_,I=(e("ef49"),Object(d["a"])(k,i,a,!1,null,"626301c6",null));s["default"]=I.exports},bbd5:function(t,s,e){"use strict";e.d(s,"a",function(){return i}),e.d(s,"b",function(){return a});e("28a5");function i(t,s){var e;return function(){for(var i=this,a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];e&&clearTimeout(e),e=setTimeout(function(){t.apply(i,r)},s)}}function a(){var t,s="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(""),e=[];e[8]=e[13]=e[18]=e[23]="-",e[14]="4";for(var i=0;i<36;i++)e[i]||(t=0|16*Math.random(),e[i]=s[19===i?3&t|8:t]);return e.join("")}},c566:function(t,s,e){t.exports=e.p+"assets/img/hj.60938807.png"},c96f:function(t,s,e){t.exports=e.p+"assets/img/lh.b1ca5fda.png"},e2e5:function(t,s,e){},e420:function(t,s,e){t.exports=e.p+"assets/img/pa.ca282f83.png"},ef49:function(t,s,e){"use strict";var i=e("e2e5"),a=e.n(i);a.a}}]);
//# sourceMappingURL=chunk-2ccd9974.26c1db31.js.map