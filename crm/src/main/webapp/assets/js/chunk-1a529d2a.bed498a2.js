(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1a529d2a"],{"0695":function(t,e,s){},"0ff5":function(t,e,s){"use strict";var a=s("0695"),i=s.n(a);i.a},1936:function(t,e,s){t.exports=s.p+"assets/img/banner.c06cc630.png"},"1a7a":function(t,e,s){t.exports=s.p+"assets/img/hz.a84e3bd2.png"},"2ba3":function(t,e,s){t.exports=s.p+"assets/img/rm.fcaacc56.png"},"4fd8":function(t,e,s){},"75d7":function(t,e,s){t.exports=s.p+"assets/img/tpy.eb70e8fd.png"},7680:function(t,e,s){"use strict";var a=s("4fd8"),i=s.n(a);i.a},9775:function(t,e,s){"use strict";var a=s("f801"),i=s.n(a);i.a},b59f:function(t,e,s){t.exports=s.p+"assets/img/al.44cc67ab.png"},b8b2:function(t,e,s){t.exports=s.p+"assets/img/tj.5381a047.png"},bb51:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"index-container"},[a("base-slider",{staticClass:"crousel",attrs:{list:t.imgList,height:640},on:{sliderClick:t.sliderClick}}),a("div",{staticClass:" search-container"},[a("div",{staticClass:"search-wrapper"},[a("p",{staticClass:"title"},[t._v("从这里开始")]),a("p",{staticClass:"tips"},[t._v("输入您需要的保障，我们会为您推荐合适的产品")]),a("base-search-box",{on:{search:t.onSearch}}),a("div",{staticClass:"hot-search clearfix"},[a("p",{staticClass:"hot-title fl"},[t._v("或换一个推荐关键词：")]),a("ul",{staticClass:"hot-list fl clearfix"},[a("li",{on:{click:t.goList}},[t._v("旅游险")])])])],1)]),a("div",{staticClass:"layout"},[a("div",{staticClass:"layer layer-categogy"},[a("p",{staticClass:"title"},[t._v("\n        产品与服务\n      ")]),a("ul",{staticClass:"product-category clearfix"},[a("li",{staticClass:"yw"},[a("router-link",{attrs:{tag:"div",to:"/37duc/product/list?productCategoryId=2&page=1"}},[a("p",[t._v("意外伤害")])])],1),a("li",{staticClass:"yl"},[a("router-link",{attrs:{tag:"div",to:"/37duc/product/list?productCategoryId=3&page=1"}},[a("p",[t._v("医疗保险")])])],1),a("li",{staticClass:"jb"},[a("router-link",{attrs:{tag:"div",to:"/37duc/product/list?productCategoryId=5&page=1"}},[a("p",[t._v("疾病保险")])])],1),a("li",{staticClass:"hl"},[a("router-link",{attrs:{tag:"div",to:"/37duc/product/list?productCategoryId=4&page=1"}},[a("p",[t._v("护理保险")])])],1)])]),a("div",{staticClass:"layer layer-recommend"},[a("p",{staticClass:"title"},[t._v("\n        产品推荐\n      ")]),a("div",{staticClass:"product clearfix"},[a("img",{attrs:{src:s("b8b2"),alt:""}}),a("div",{staticClass:"product-wrapper"},[a("div",{staticClass:"list clearfix"},[a("div",{staticClass:"part-lt fl"},[a("div",{staticClass:"pName"},[t._v(t._s(t.prodcutDetail.name))]),a("div",{staticClass:"pMsg"},t._l(t.prodcutDetail.insure_condition,function(e,s){return a("span",{key:s,staticClass:"condition-item"},[t._v(t._s(e.name)+"："+t._s(e.value))])}),0),a("div",{staticClass:"marks clearfix"},[a("div",{staticClass:"mark fl"},[t.prodcutDetail.feature1?a("span",{staticClass:"fl"},[a("i"),t._v(t._s(t.prodcutDetail.feature1))]):t._e(),t.prodcutDetail.feature2?a("span",{staticClass:"fl"},[a("i"),t._v(t._s(t.prodcutDetail.feature2))]):t._e(),t.prodcutDetail.feature3?a("span",{staticClass:"fl"},[a("i"),t._v(t._s(t.prodcutDetail.feature3))]):t._e()])]),a("div",{staticClass:"characteristics"},t._l(t.parameters,function(e,s){return a("div",{key:s,staticClass:"character clearfix"},[a("span",{staticClass:"fl"},[t._v(t._s(e.name))]),a("span",{staticClass:"fr"},[t._v(t._s(e.limit))])])}),0),a("div",{staticClass:"logo"},[a("img",{attrs:{src:t.baseSrc+t.prodcutDetail.brandLogo,alt:"公司logo"}})])]),a("div",{staticClass:"part-rt"},[a("div",{staticClass:"ctx"},[a("div",{staticClass:"price"},[a("span",{staticClass:"p"},[t._v(t._s(t.prodcutDetail.price))]),a("span",{staticClass:"b"},[t._v("元起")])]),a("div",{staticClass:"toDetail",on:{click:function(e){return t.goDetail(1)}}},[t._v("查看详情")]),t._t("default")],2)])])])])]),t._m(0)])],1)},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"layer layer-company"},[a("p",{staticClass:"title"},[t._v("\n        合作品牌\n      ")]),a("ul",{staticClass:"coper-company clearfix"},[a("li",[a("img",{attrs:{src:s("b59f"),alt:""}})]),a("li",[a("img",{attrs:{src:s("75d7"),alt:""}})]),a("li",[a("img",{attrs:{src:s("e420"),alt:""}})]),a("li",[a("img",{attrs:{src:s("2ba3"),alt:""}})]),a("li",[a("img",{attrs:{src:s("1a7a"),alt:""}})])])])}],r=(s("ac6a"),function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{ref:"slider",staticClass:"slider-box",style:t.sliderStyle,on:{mouseover:function(e){return t.pause()},mouseout:function(e){return t.play()}}},[s("div",{staticClass:"slider-content",class:t.mask?"mask":""},t._l(t.list,function(e,a){return s("div",{key:a,staticClass:"slider",class:t.setClass(a),style:t.setBGImg(e.src),on:{click:function(e){return t.onClick(a)}}})}),0)])}),n=[],c=(s("28a5"),s("c5f6"),{data:function(){return{currentIndex:0,sliderDomList:[],timer:null}},props:{list:{required:!0,type:Array,default:function(){return[]}},width:{type:Number},height:{type:Number},imgType:{type:String,default:"percentage"},autoPlay:{type:Boolean,default:!0},mask:{type:Boolean,default:!0},interval:{type:Number,default:5e3},dots:{type:Boolean,default:!0},arrow:{type:Boolean,default:!0},color:{type:String,default:"red"}},mounted:function(){this.sliderDomList=this.$refs.slider.querySelectorAll("div.slider"),this.play()},methods:{setClass:function(t){var e=this.currentIndex===this.list.length-1?0:this.currentIndex+1,s=0===this.currentIndex?this.list.length-1:this.currentIndex-1;switch(t){case this.currentIndex:return"active";case e:return"next";case s:return"prev";default:return""}},setBGImg:function(t){return{backgroundImage:"url(".concat(t,")")}},setActiveDot:function(t){return t===this.currentIndex?{backgroundColor:this.color}:{backgroundColor:"blue"}},play:function(){var t=this;this.pause(),this.autoPlay&&(this.timer=setInterval(function(){t.next()},this.interval))},pause:function(){clearInterval(this.timer)},next:function(){this.currentIndex=++this.currentIndex%this.list.length},prev:function(){this.currentIndex=0===this.currentIndex?this.list.length-1:this.currentIndex-1},onClick:function(t){if(t===this.currentIndex)this.$emit("sliderClick",t);else{var e=this.sliderDomList[t].className.split(" ")[1];console.log(e),"next"===e?this.next():this.prev()}}},computed:{sliderStyle:function(){return{width:this.width?this.width+"px":"100%",height:this.height?this.height+"px":"100%",perspective:this.width+"px",backgroundSize:"percentage"===this.imgType?"100% 100%":this.imgType}}}}),l=c,o=(s("7680"),s("2877")),u=Object(o["a"])(l,r,n,!1,null,"d9907492",null),d=u.exports,p=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"search-box"},[s("div",{staticClass:"search-input fl"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.query,expression:"query"}],ref:"query",staticClass:"fl",attrs:{type:"text",placeholder:t.placeholder,maxlength:"15"},domProps:{value:t.query},on:{input:function(e){e.target.composing||(t.query=e.target.value)}}})]),s("div",{staticClass:"search-btn fr",on:{click:t.onSearch}},[s("span",{staticClass:"icon"})])])},f=[],h=s("bbd5"),m={name:"BaseSearchBox",props:{placeholder:{type:String,default:"请输入你想搜索的关键字"},matchlist:{type:Array,default:function(){return[]}}},data:function(){return{query:""}},methods:{onClear:function(){this.query=""},onSearch:function(){this.$emit("search",this.query)},blur:function(){this.$refs.query.blur()}},created:function(){var t=this;this.$watch("query",Object(h["a"])(function(e){t.$emit("matchSearch",e)},200))}},v=m,g=(s("0ff5"),Object(o["a"])(v,p,f,!1,null,"4669bb64",null)),C=g.exports,y=s("e04d"),b={name:"home",data:function(){return{baseSrc:"",memberId:"",parameters:[],prodcutDetail:{},imgList:[{src:s("1936")}]}},mounted:function(){this.baseSrc="".concat("http://192.168.15.149:8003"),Object(y["a"])("userInfo")&&(this.memberId=Object(y["a"])("userInfo").id),this.getDetail()},methods:{onSearch:function(t){t&&this.$router.push({path:"/37duc/product/list"})},goList:function(){this.$router.push({path:"/37duc/product/list"})},onMatchSearch:function(t){},sliderClick:function(t){console.log(t)},goDetail:function(t){this.$router.push({path:"/37duc/product/detail/".concat(t),query:{productId:1}})},getDetail:function(){var t=this,e={id:1,memberId:this.memberId};this.$api.product.productDetail(e).then(function(e){t.prodcutDetail=e.data.product,t.parameters=e.data.product.parameter_values[0].entries})}},components:{baseSlider:d,baseSearchBox:C}},x=b,_=(s("9775"),Object(o["a"])(x,a,i,!1,null,"2329810e",null));e["default"]=_.exports},bbd5:function(t,e,s){"use strict";s.d(e,"a",function(){return a}),s.d(e,"b",function(){return i});s("28a5");function a(t,e){var s;return function(){for(var a=this,i=arguments.length,r=new Array(i),n=0;n<i;n++)r[n]=arguments[n];s&&clearTimeout(s),s=setTimeout(function(){t.apply(a,r)},e)}}function i(){var t,e="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(""),s=[];s[8]=s[13]=s[18]=s[23]="-",s[14]="4";for(var a=0;a<36;a++)s[a]||(t=0|16*Math.random(),s[a]=e[19===a?3&t|8:t]);return s.join("")}},e420:function(t,e,s){t.exports=s.p+"assets/img/pa.56a6af19.png"},f801:function(t,e,s){}}]);
//# sourceMappingURL=chunk-1a529d2a.bed498a2.js.map