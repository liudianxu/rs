(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4c82e609"],{"0502":function(t,e,a){"use strict";var n=a("a4c0"),i=a.n(n);i.a},"1c13":function(t,e,a){},"710f":function(t,e,a){"use strict";a.r(e);var n,i,s,r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"product-detail"},[t.tbShow?n("div",{staticClass:"product-calculation"},[n("p",{staticClass:"close",on:{click:function(e){t.tbShow=!1}}},[n("img",{attrs:{src:a("d991"),alt:""}})]),n("div",{staticClass:"content"},[n("div",{staticClass:"layer "},[n("div",[t._v("投保人")]),n("div",[t._v(t._s(t.userInfo.name))])]),n("div",{staticClass:"layer "},[n("div",[t._v("为谁投保")]),n("div",[t._v(t._s(t.insuredName))])]),t._m(0),n("div",{staticClass:"layer "},[n("div",[t._v("生效日期")]),n("div",{staticClass:"date",on:{click:function(e){return t.open("startPicker")}}},[n("span",[t._v(t._s(t.startDate))]),n("i",{style:t.startDateShow?t.upImg:t.downImg})])]),n("mt-datetime-picker",{ref:"startPicker",attrs:{type:"date",closeOnClickModal:!1,startDate:new Date(this.startDatefault),"year-format":"{value} 年","month-format":"{value} 月","date-format":"{value} 日"},on:{cancel:t.changeStartCancel,confirm:t.changeStartDate}}),n("div",{staticClass:"layer "},[n("div",[t._v("终止日期")]),n("div",[t._v(t._s(t.endDate))])]),n("div",{staticClass:"layer "},[n("div",[t._v("计划选择")]),n("ul",{staticClass:" plan-name"},t._l(t.plans,function(e,a){return n("li",{key:a,class:t.currentPlanIndex==a?"active":"",on:{click:function(e){return t.changePlan(a)}}},[t._v(t._s(e.plan_name)+"\n        ")])}),0)]),n("div",{staticClass:"plan-con"},[n("p",{staticClass:"ins"},[t._v("保障方案")]),n("ul",{staticClass:"plans-con-wrapper"},t._l(t.planCons,function(e,a){return n("li",{directives:[{name:"show",rawName:"v-show",value:a==t.currentPlanIndex,expression:" index == currentPlanIndex"}],key:a},t._l(e,function(e,a){return n("p",{key:a,staticClass:"item"},[n("span",[t._v(t._s(e.name))]),n("span",[t._v(t._s(e.value))])])}),0)}),0)])],1),t.insuredShow?n("div",{staticClass:"insured-pop",attrs:{id:"insured"}},[n("i",{staticClass:"close",on:{click:function(e){t.insuredShow=!1}}}),n("ul",t._l(t.insuredList,function(e,a){return n("li",{key:a,staticClass:"clearfix",on:{click:function(a){return t.seletcInsured(e)}}},[n("span",{staticClass:"name"},[t._v(t._s(e.name))]),n("span",{staticClass:"relation"},[t._v(t._s(t.getRelation(e.type)))]),n("span",{staticClass:"idnum"},[t._v(t._s(e.id_num))])])}),0),n("div",{staticClass:"add-btn-wrapper clearfix"},[n("span",{on:{click:function(e){t.addInsuredShow=!0}}},[t._v("新增被保险人")])])]):t._e()]):t._e(),n("div",{directives:[{name:"show",rawName:"v-show",value:t.tbShow,expression:"tbShow"}],staticClass:"cover",on:{click:function(e){t.tbShow=!1}}}),n("detail-common",{attrs:{price:t.totalPrice},on:{goInsured:t.submit}})],1)},o=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"layer "},[a("div",[t._v("保险期间")]),a("div",[t._v("1天")])])}],c=a("cebc"),u=(a("7f7f"),a("ac6a"),a("795b")),d=a.n(u),l=a("2f62"),p=a("c1df"),h=a.n(p),f=a("278f"),m=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"detail-common "},[a("detail-top",{attrs:{topList:t.detailData,isFlag:t.isFlag}}),a("div",{staticClass:"space"}),a("div",{staticClass:"detail-content "},[a("div",{staticClass:"content-wrapper"},[a("detail-introduce",{attrs:{introduce:t.detailData,parameters:t.parameters}})],1)]),a("div",{staticClass:"bottom"},[a("p",{staticClass:"price"},[t._v(t._s(t.price)),a("span",[t._v("元起")])]),a("div",{staticClass:"insured-btn",on:{click:t.goInsured}},[t._v("立即投保")])])],1)},v=[],C=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"detail-top "},[a("p",{staticClass:"title"},[t._v(t._s(t.topList.name))]),a("p",{staticClass:"condition clearfix"},t._l(t.topList.insure_condition,function(e,n){return a("span",{key:n,staticClass:"condition-item"},[t._v(t._s(e.name)+"："+t._s(e.value))])}),0),a("p",{staticClass:"product-ts"},[t.topList.feature1?a("span",{staticClass:"ts-item"},[a("i"),t._v(t._s(t.topList.feature1))]):t._e(),t.topList.feature2?a("span",{staticClass:"ts-item"},[a("i"),t._v(t._s(t.topList.feature2))]):t._e(),t.topList.feature3?a("span",{staticClass:"ts-item"},[a("i"),t._v(t._s(t.topList.feature3))]):t._e()]),a("div",{staticClass:"protocal-wrapper"})])},_=[],b=a("e04d"),g={name:"TheDetailTop",props:{topList:{type:Object,default:function(){return{}}},isFlag:{type:String,default:""}},data:function(){return{notifyShow:!1,sampleCon:"",baseSrc:"",isCollect:!1,notifyCon:"",wHeight:""}},mounted:function(){this.baseSrc="".concat("http://192.168.15.199:8003"),this.getNotify(),this.wHeight=document.documentElement.clientHeight||document.body.clientHeight},methods:{handleNoticyClose:function(){this.notifyShow=!1},goProtocalList:function(){this.$router.push({path:"/product/protocal",query:{productId:this.$route.query.productId,productName:this.topList.name}})},goSample:function(){window.open("".concat("http://192.168.15.199:8003","/").concat(this.topList.policy_sample_url))},getNotify:function(){var t=this,e={id:this.$route.query.productId};this.$api.product.getNoticeBook(e).then(function(e){t.notifyCon=e.data})},collectOrNot:function(){var t=this;if(Object(b["a"])("token")){var e={productId:this.$route.query.productId};this.$api.personCenter.collectOrNot(e).then(function(e){1===e.code&&(t.isCollect=!t.isCollect,t.isCollect?t.$toast.center("已收藏"):t.$toast.center("已取消收藏"))})}else this.$router.push({name:"SmsLogin",params:{redirctUrl:this.$route.path,productId:this.$route.query.productId}})},toNewPage:function(t){window.open(t)}},computed:Object(c["a"])({},Object(l["c"])(["token"])),watch:{isFlag:{handler:function(t){this.isCollect="0"===t}}},components:{}},w=g,I=(a("9136"),a("0c7c")),y=Object(I["a"])(w,C,_,!1,null,"440752c3",null),A=y.exports,D=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"detail-introduce"},[a("div",{staticClass:"detail-tab "},[a("div",{staticClass:"tab-item",class:{active:0==t.detailTabCur},on:{click:function(e){return t.setCur(0)}}},[a("span",[t._v("保障解读")])]),a("div",{staticClass:"tab-item",class:{active:1==t.detailTabCur},on:{click:function(e){return t.setCur(1)}}},[a("span",[t._v("投保须知")])]),a("div",{staticClass:"tab-item",class:{active:2==t.detailTabCur},on:{click:function(e){return t.setCur(2)}}},[a("span",[t._v("常见问题")])]),a("div",{staticClass:"tab-item",class:{active:3==t.detailTabCur},on:{click:function(e){return t.setCur(3)}}},[a("span",[t._v("理赔指引")])])]),a("div",{staticClass:"tab-content"},[a("div",{directives:[{name:"show",rawName:"v-show",value:0==t.detailTabCur,expression:"detailTabCur==0"}],staticClass:"tab-bzjd"},t._l(t.parameters,function(e,n){return a("div",{key:n,staticClass:"banzhang-wrapper"},[a("div",{staticClass:"oneDiv",on:{click:function(e){return t.detailShow(n)}}},[a("p",[t._v(t._s(e.name))]),a("p",{staticClass:"two"},[t._v("\n                "+t._s(e.limit)+"  "),a("i",{style:t.moreArr[n]?t.upImg:t.downImg})])]),a("div",{directives:[{name:"show",rawName:"v-show",value:t.moreArr[n],expression:"moreArr[index]"}],staticClass:"twoDiv"},[a("span",{staticClass:"text"},[t._v(t._s(e.value))])])])}),0),a("div",{directives:[{name:"show",rawName:"v-show",value:1==t.detailTabCur,expression:"detailTabCur==1"}],staticClass:"tab-notice",domProps:{innerHTML:t._s(t.introduce.insure_notice)}}),a("div",{directives:[{name:"show",rawName:"v-show",value:2==t.detailTabCur,expression:"detailTabCur==2"}],staticClass:"tab-qa"},[a("ul",t._l(t.introduce.interlocutions,function(e,n){return a("li",{key:n},[a("p",{staticClass:"question "},[a("i",[t._v("Q")]),a("span",[t._v(t._s(e.question))])]),a("p",{staticClass:"answer "},[a("i",[t._v("A")]),a("span",[t._v(t._s(e.answer))])])])}),0)]),a("div",{directives:[{name:"show",rawName:"v-show",value:3==t.detailTabCur,expression:"detailTabCur==3"}],staticClass:"tab-claim",domProps:{innerHTML:t._s(t.introduce.claim_guidelines)}})])])},x=[],S={bind:function(t,e){var a=t.style,r=e.value||{};if(i=r.top||0,s=r.zIndex||1e3,a.position="-webkit-sticky",a.position="sticky",~a.position.indexOf("sticky"))return a.top="".concat(i,"px"),void(a.zIndex=s);var o=t.firstElementChild.style;o.cssText="left: 0; right: 0; top: ".concat(i,"px; z-index: ").concat(s);var c=!1,u=function(){c||(a.height||(a.height="".concat(t.offsetHeight,"px")),o.position="fixed",c=!0)},d=function(){c&&(o.position="",c=!1)},l=function(){var e=t.getBoundingClientRect().top;e<=i?u():d()};n=function(){setTimeout(l,300)},window.addEventListener("scroll",n)},unbind:function(){window.removeEventListener("scroll",n)},update:function(t,e){var a=e.value||{};i=a.top||0,s=a.zIndex||0;var n=t.firstElementChild.style;t.style.top=n.top="".concat(i,"px"),t.style.zIndex=n.zIndex=s}},k={name:"TheDetailIntroduce",props:{introduce:{type:Object,default:function(){return{}}},parameters:{type:Array,defalut:[]}},data:function(){return{moreArr:[],upImg:{"background-image":"url("+a("7433")+")"},downImg:{"background-image":"url("+a("b887")+")"}}},mounted:function(){},methods:Object(c["a"])({detailShow:function(t){var e=this;console.log(9999,this.moreArr),this.moreArr.forEach(function(a,n){t!==n&&e.moreArr.splice(n,1,!1)}),this.moreArr.splice(t,1,!this.moreArr[t]),console.log(9999,this.moreArr)},setCur:function(t){this.SET_DETAIL_TAB_CUR(t)}},Object(l["d"])(["SET_DETAIL_TAB_CUR"])),directives:{Sticky:S},beforeDestroy:function(){this.SET_DETAIL_TAB_CUR(0)},watch:{parameters:function(t){console.log(123,t)}},computed:Object(c["a"])({},Object(l["c"])(["detailTabCur"]))},P=k,T=(a("0502"),Object(I["a"])(P,D,x,!1,null,"06e389ca",null)),$=T.exports,N={name:"TheDetailMain",props:{price:{type:String,defalut:""}},data:function(){return{detailData:{},searchBarFixed:!1,memberId:"",productId:"",parameters:[],isFlag:""}},mounted:function(){Object(b["a"])("userInfo")&&(this.memberId=Object(b["a"])("userInfo").id),this.getDetail()},methods:{goInsured:function(){Object(b["a"])("token")?this.$emit("goInsured"):this.$router.push("/product/applicant")},getDetail:function(){var t=this,e={id:this.$route.query.productId,memberId:this.memberId};this.$api.product.productDetail(e).then(function(e){t.detailData=e.data.product,""===e.data.flag?t.isFlag="1":t.isFlag=e.data.flag,null!==e.data.product.parameter_values&&(t.parameters=e.data.product.parameter_values[0].entries,console.log(9999,t.parameters))})}},components:{detailTop:A,detailIntroduce:$}},O=N,L=(a("982a"),Object(I["a"])(O,m,v,!1,null,"406d3a6a",null)),M=L.exports,Y={data:function(){return{tbShow:!1,currentPlanIndex:0,upImg:{"background-image":"url("+a("7433")+")"},downImg:{"background-image":"url("+a("b887")+")"},startDatefault:h()(new Date).add(1,"days").format("YYYY-MM-DD")}},mounted:function(){Object(b["a"])("token")&&this.getInsurdList()},methods:{amendOrder:function(){var t=this;return new d.a(function(e,a){var n={orderSn:t.$route.query.orderSn};t.$api.product.amendOrder(n).then(function(a){1===a.code?(t.amemdPlanId=a.data.plan_info.id,t.amendBbxrName=a.data.relation_info.name,t.totalPrice=a.data.price,t.plan_choice=a.data.plan_info.id,e(a.data)):t.$toast.center(a.message)})})},getPlans:function(){var t=this,e={productId:this.$route.query.productId};this.$api.product.getPlans(e).then(function(e){if(1===e.code)for(var a=0;a<e.data.length;a++)e.data[a].id===t.amemdPlanId&&(t.currentPlanIndex=a),t.plans=t.plans.concat(e.data[a]),t.planCons[a]=t.plans[a].plan_details})},changePlan:function(t){this.currentPlanIndex=t,this.plan_choice=this.plans[t].id},getInsurdList:function(){var t=this,e={page:1,limit:1e3};this.$api.personCenter.getInsured(e).then(function(e){1===e.code&&(t.insuredList=e.data.data,t.insuredList.forEach(function(e,a){6===e.type&&(t.insured.relationId=e.id)}))})}},computed:{}},q={name:"TheDetailCalculation",mixins:[f["b"],Y],components:{detailCommon:M},data:function(){return{startDateShow:!1,amemdPlanId:"",amendBbxrName:"",addInsuredShow:!1,createDateShow:!1,insuredShow:!1,plans:[],planCons:[],startDate:h()(new Date).add(1,"days").format("YYYY-MM-DD"),endDate:h()(new Date).add(1,"days").format("YYYY-MM-DD"),calculationFactors:[],plan_choice:"",totalPrice:"",planDefault:"",insuredList:{},bbxrName:"",insured:{relationId:"",skuId:"",planId:""}}},mounted:function(){var t=this;this.$route.query.orderSn||(this.getPlans(),this.getCalculationFactors()),this.$route.query.orderSn&&(this.tbShow=!0,this.getCalculationFactors().then(function(e){e&&t.amendOrder().then(function(e){e&&t.getPlans()})}))},methods:{submit:function(){var t=this;if(!this.tbShow)return this.tbShow=!0,!1;var e={skuId:this.insured.skuId,planId:this.insured.planId,productId:this.$route.query.productId,relationId:this.insured.relationId,effDate:this.startDate,matuDate:this.endDate};this.$api.product.orderSubnit(e).then(function(e){1===e.code?t.$router.push({path:"/product/orderConfirm",query:{sn:e.data,productId:t.$route.query.productId}}):t.$toast.center(e.message)})},getCalculationFactors:function(){var t=this;return new d.a(function(e,a){var n={productId:t.$route.query.productId};t.$api.product.getCalculationFactors(n).then(function(a){if(1===a.code){e(a),t.calculationFactors=a.data;for(var n=0;n<a.data.length;n++)a.data[n].is_default&&(t.currentPlanIndex=n,t.plan_choice=a.data[n].plan_id);t.matchPrice(t.calculationFactors,t.plan_choice)}})})},matchPrice:function(t,e){var a=this;return t.forEach(function(t){if(t.plan_id&&t.plan_id===e&&t.calculation_factors&&t.calculation_factors.length&&"天数"===t.calculation_factors[0].name)return a.totalPrice=t.sku_price,a.insured.skuId=t.id,a.insured.planId=t.plan_id,!1}),this.totalPrice},open:function(t){this.$refs[t].open(),this.startDateShow=!0},changeStartCancel:function(){this.startDateShow=!1},changeStartDate:function(t){this.startDate=h()(t).format("YYYY-MM-DD"),this.startDateShow=!1},seletcInsured:function(t){this.bbxrName=t.name,this.insuredShow=!1,this.insured.relationId=t.id}},watch:{startDate:function(t){this.endDate=h()(t).format("YYYY-MM-DD")},plan_choice:function(t){this.matchPrice(this.calculationFactors,t)}},computed:Object(c["a"])({insuredName:function(){return this.bbxrName?this.bbxrName:this.$route.query.orderSn?this.amendBbxrName:this.userInfo.name}},Object(l["c"])(["userInfo"]))},j=q,F=(a("ba98"),Object(I["a"])(j,r,o,!1,null,"de6f5eba",null));e["default"]=F.exports},"7f7f":function(t,e,a){var n=a("86cc").f,i=Function.prototype,s=/^\s*function ([^ (]*)/,r="name";r in i||a("9e1e")&&n(i,r,{configurable:!0,get:function(){try{return(""+this).match(s)[1]}catch(t){return""}}})},"85f21":function(t,e,a){},9136:function(t,e,a){"use strict";var n=a("85f21"),i=a.n(n);i.a},"982a":function(t,e,a){"use strict";var n=a("1c13"),i=a.n(n);i.a},"9edd":function(t,e,a){},a4c0:function(t,e,a){},ba98:function(t,e,a){"use strict";var n=a("9edd"),i=a.n(n);i.a},d991:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAYAAAAehFoBAAAAAXNSR0IArs4c6QAAAbBJREFUWAntl6FuwzAQhu3QgUpDARusCvoMQ0N7jdE+xLSHKJ3Upyga2jMMVIUrCKpUMFrPf5arrM5JzmeDqjuTNI7v9+e/FztnjDZ1QB1QB9QBdeCaHbDcxX1ut8/meHz1Ae+3k8mirutvbmxsXNM0N/vDYemMeTRV9TKfTt9i4877+MCbzZdx7g4C1toPD/0khe5g1865hxbI2t18Nrs/h4vdV7HOWB+cpX5M5N1ZY2Lq417/wPrAUHtMhw2MNICzJCiBjsL+/lsL0h27slMCQgMTjqZHTmy4iCRgKXQpWMyfDJwKXRJWDMyFLg2bBTwGjefYSU5bl7/P3Q6hKUoJBFLrcxHPS8NCMxsYIjFo9FMr4exJi37kXvugS8KCkX1w5C6oVPz/S4lYKtARfnEvXR8svuSQAhe1rQ3B0mcnZ0xqbotyOAUkZSwHPhlYAiCJ6YNPAs6ZOCc2hGcDl5iwhAb74GgLRqrB/JIlJxheRuwgtO3Bua5yWYYuDv1mA7fVbackgSWIKDQqZ2ZjA6MU97buPOwqp2IGVwC9gmarzQTWYeqAOqAOqAPqwHU78ANPkbO0xzKqKAAAAABJRU5ErkJggg=="}}]);
//# sourceMappingURL=chunk-4c82e609.090d4ff8.js.map