(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5b46460a"],{"0b52":function(t,e,s){"use strict";var a=s("2f83"),n=s.n(a);n.a},"0eb0":function(t,e,s){"use strict";var a=s("1098"),n=s.n(a);n.a},1098:function(t,e,s){},"278f":function(t,e,s){"use strict";s.d(e,"a",function(){return o}),s.d(e,"c",function(){return c}),s.d(e,"b",function(){return d}),s.d(e,"d",function(){return l});var a=s("e814"),n=s.n(a),i=s("c1df"),r=s.n(i),o={methods:{dateFormat:function(t){return r()(t).format("YYYY-MM-DD")}}},c={methods:{getSexByName:function(t){return 1===t?"男":"女"}}},d={methods:{getRelation:function(t){switch(n()(t)){case 0:return"父亲";case 1:return"母亲";case 2:return"儿子";case 3:return"女儿";case 4:return"妻子";case 5:return"丈夫";case 6:return"本人";default:return"其他"}}}},l={methods:{orderStatus:function(t){switch(t){case 0:return"待支付";case 1:return"已支付";case 2:return"已承保";case 3:return"已出单";case 4:return"保障中";case 5:return"已失效";case 6:return"订单失败";case 7:return"已取消";case 8:return"支付失败"}}}}},"2f83":function(t,e,s){},"40de":function(t,e,s){},"789e":function(t,e,s){"use strict";var a=s("bbde"),n=s.n(a);n.a},9948:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"pop-container"},[s("div",{staticClass:"pop-wrapper",style:t.popStyle},[s("p",{staticClass:"title"},[t._v(t._s(t.title))]),s("div",{staticClass:"content",domProps:{innerHTML:t._s(t.content)}}),s("i",{staticClass:"close",on:{click:t.goClocse}})]),s("div",{staticClass:"cover",on:{click:t.goClocse}})])},n=[],i=(s("c5f6"),{name:"BaseAlertBox",props:{title:{type:String,default:""},content:{type:String,default:""},width:{type:Number},height:{type:Number}},data:function(){return{wWidth:document.documentElement.clientWidth||document.body.clientWidth,wHeight:document.documentElement.clientHeight||document.body.clientHeight}},methods:{goClocse:function(){this.$emit("dealClose")}},computed:{popStyle:function(){return{width:this.width?this.width+"px":"100%",height:this.height?this.height+"px":"100%",left:(this.wWidth-this.width)/2+"px",top:(this.wHeight-this.height)/2-20+"px"}}}}),r=i,o=(s("789e"),s("2877")),c=Object(o["a"])(r,a,n,!1,null,"01beaae4",null);e["a"]=c.exports},"9c08":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAAXNSR0IArs4c6QAABOVJREFUWAntWF1oHFUUPufe3Z0ZxFp/8Q9FBUvcJFJJNX0QRVQQEQpRaU2yC3lQEOyDPgkt+PeqFFGRIpJsVsWqNQpqpL5E0VYlKkm626ClEUyhmmpTsPs7czx3NrM7yc6dmcQncS9k58495373u9895947AeiUjgIdBf7bCuC/oX/TWHUroL0DCG8nhKsY7EqFRwAnkWARkL4CkhOFbOrHjY6zIYLpfOVBx6EXgGhLrIER54XAPUeHjPdj+fuc1kWwN1e6rkbwNvfv92Gsp3okifDITMY6EbdTbII9udoddah/wOt3cVzwQD+E0wlIDMxmklOB9jWNsQgqcjbZhwgouab/hl4RsCZR3hOHZCRBd1kBvo9Sjgc9x0nxMgAu8UT62H9nKHtWkme7LWq5RSgIG92Yi7GsnLnFQsZ6upAxXxQoP4vCVRNeiedQ10SY1c1W22lLCJb9a1bq7Kq+CD9774T2IivaThKphwiu9vz42a/GCMvuUILuVuJDa1ZRfMIkV2UiCvrTs6ckHK85mPPevSeTe5R3ST9BWBlDu/1oY1BtwgT2Dx549BOni1mzT/mlx6sZx7HHovs0PBDkLbrNXK+ge0KEDIFY4tktND2opSg5tIyIxaaNK6ze9fxr+NuadTUWQOBpoyfIx5d7aDVR2iq/JITgJWuV3nzVi9dTHKMjFiQL3w7h2YcOkJwrVf5iz2CC7lgtHH9NS1CdrZxp+kLUU7PtwzoHVrDKqrln87FS/Vae7Pk6X3csjVG7zfDyueCaftyMjt7GdJDe+S6Lp5VPHeyRMN+wsbQE2wARbQbKI8r+izabm7otIyXQvFaiGGC19rOtmcVMviKT+LzC6M3RZYAw2Ibna2CltWulJcg9TjYxmBxLMljIWsMMVT2zXNnDMfU6QWU3K1VH03gCLfMKFGKIyXzD/fbO7TSPq/41Ku/jDLGaWAEVRPgtoNlt0sagus8xyRuVF89i9GjWeLcrVx0mcMaIOGq48MzV31NQLi8hildY1H3TD+NbyqZK93jpTtuBXY230N9FnVWroHvZXOlFgJ+rKpKzlxm55FYBElxCjvPMuXLlTX/77JA5JQXeC4gH1QXBb/PXeRW0yaYlmED5kQfCAI2EQTrjta19soKjwjRctdL56rb0WPnJrRNwwdyweaiYMQfQMi5HASMcr5+qDPf3l1Ks/yRRAF258jFWbAtL9mXaMu+ar9RurpP9IS/rNa0BcEYiPjuXMQ6qNib2OKf3S7z4BhP5m6NgVAK+yvbmxr39AFnLlXofkbMdgW7gC8ZjLbzVtfbl8tlXLgvvNZrwjc2Wsdu4FGp/LNZvQ7DPs9GYLw7ir8renav2OeQ8xwl5nw+iVUWYEiD2mxemJqYf4KtZzBJKUGF0jZVUfDROCIQljsRxAVR0ABcF4CYAJ+0Q3N30UZ1Ciqsq0cdCyElJycmZDP4e4s6bQkSJe2GNgGkz89ZyKpWE/p92WQttRl+DNkk8H3XjVd8QYVno+cZ9KhWllPdHkVN4kQSVk/p2UN8QrLd7dKm2DRcOE06yHbODqek4GLEIKiBFUn1DcPVIHOAgH1ZuUphmD98bvwiyB7VFxmBQp/V/uMNhPgZfKwwZ+SC8sLYNEfQAg/71wfueulQssM8J3guLTCzP3xwFr0/n2VGgo8D/TYF/ADGIvWg6ZNPwAAAAAElFTkSuQmCC"},"9ed8":function(t,e,s){"use strict";var a=s("c7e3"),n=s.n(a);n.a},bbde:function(t,e,s){},c7e3:function(t,e,s){},d991:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAAAXNSR0IArs4c6QAAAW1JREFUOBHtlLFOwzAQhm1XpCpUYmInUpJSwRvAAm/AI/AUTBULjExlYytM7IgBCZ4CJCsvgGCthKqSmPutuLJsJ2Zha6TknNzdd+ffpzC2vv5bAe4WeJfyUTG2nQhxmuf5l+t336WUR5VSd5zzm/FodG38wiyMBZQpdbisqpeyLHfM95AF9EepJ8rZJf+WHeOB0SlVf6Pgg2Vdv7bBDZRgQ4qf7RXFpQ32pIATMECVUvsosiHEsS2LCx0XxRnF1VFwF/wvUOQHOzaV3c7p+4R2MSOrtx/q1OR2ghFkw1dJpGkXFHHe4ZlkYxttJ+ad7HyQJOeuppZfL6NgaNpsHwlzuoffi8UzdqIJLY9OsHtQm/1+jimJjSJqtYJdKDRN0/QDo6fhNIpdcx48vBDU1tQ+UBRx5xwde+AYFEm4YnBPCvqh3FNedE4xLUmvd2LJcqUrNg8PTIFTwflFbE6Rn2XZZwO/ZZw/2OD1eqXAL6i67Bvj/zdAAAAAAElFTkSuQmCC"},e0d8:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"order-comfirm layout clearfix"},[s("order-comfirm-info",{attrs:{orderInfo:t.orderInfo,tbrInfo:t.tbrInfo,bbxrInfo:t.bbxrInfo,bzfaInfo:t.bzfaInfo}}),s("order-comfirm-pay",{attrs:{orderInfo:t.orderInfo}})],1)},n=[],i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"order-info"},[s("div",{staticClass:"top clearfix"},[s("p",{staticClass:"title"},[t._v(t._s(t.orderInfo.name))]),s("p",{staticClass:"number"},[t._v("订单编号："+t._s(t.orderInfo.sn))])]),s("div",{staticClass:"order-info-wrapper clearfix"},[s("div",{staticClass:"sec sec-tbr"},[s("p",{staticClass:"name"},[t._v("投保人信息")]),s("div",{staticClass:"info-con"},[s("p",{staticClass:"item"},[s("i",[t._v("姓名：")]),s("span",[t._v(t._s(t.tbrInfo.name))])]),s("p",{staticClass:"item"},[s("i",[t._v("性别：")]),s("span",[t._v(t._s(t.getSexByName(t.tbrInfo.gender)))])]),t._m(0),s("p",{staticClass:"item"},[s("i",[t._v("证件号码：")]),s("span",[t._v(t._s(t.tbrInfo.id_num))])]),s("p",{staticClass:"item"},[s("i",[t._v("出生日期：")]),s("span",[t._v(t._s(t.dateFormat(t.tbrInfo.birth)))])])])]),s("div",{staticClass:"sec sec-bbxr"},[s("p",{staticClass:"name"},[t._v("被保险人信息")]),s("div",{staticClass:"info-con"},[s("p",{staticClass:"item"},[s("i",[t._v("姓名：")]),s("span",[t._v(t._s(t.bbxrInfo.name))])]),s("p",{staticClass:"item"},[s("i",[t._v("性别：")]),s("span",[t._v(t._s(t.getSexByName(t.bbxrInfo.gender)))])]),t._m(1),s("p",{staticClass:"item"},[s("i",[t._v("证件号码：")]),s("span",[t._v(t._s(t.bbxrInfo.id_num))])]),s("p",{staticClass:"item"},[s("i",[t._v("出生日期：")]),s("span",[t._v(t._s(t.dateFormat(t.bbxrInfo.birth)))])])])]),s("div",{staticClass:"sec sec-syr"},[s("p",{staticClass:"name"},[t._v("受益人信息")]),s("div",{staticClass:"info-con"},[s("p",{staticClass:"item-syr"},[s("i",[t._v("受益人：")]),s("span",[t._v(t._s(t.orderInfo.beneficiary))])])])])]),s("div",{staticClass:"order-info-wrapper"},[s("div",{staticClass:"sec sec-bzfa"},[s("p",{staticClass:"name"},[t._v("保障方案")]),s("div",{staticClass:"info-con-wrapper clearfix"},[s("div",{staticClass:"fl plan-con"},[t.bzfaInfo.plan_name?s("p",{staticClass:"product-title"},[t._v("\n            "+t._s(t.orderInfo.name)+"——"+t._s(t.bzfaInfo.plan_name)+"\n          ")]):t._e(),t._m(2),s("ul",t._l(t.bzfaInfo.plan_details,function(e,a){return s("li",{key:a,staticClass:"clearfix"},[s("span",[t._v(t._s(e.name))]),s("i",[t._v(t._s(e.value))])])}),0)]),s("div",{staticClass:"fl bz-date"},[s("p",{staticClass:"date clearfix"},[s("span",[t._v("保险期间")]),s("i",[t._v(t._s(t.orderInfo.insurance_period))])]),s("p",{staticClass:"date clearfix"},[s("span",[t._v("起始日期")]),s("i",[t._v(t._s(t.orderInfo.policy_effective_date))])]),s("p",{staticClass:"date clearfix"},[s("span",[t._v("终止日期")]),s("i",[t._v(t._s(t.orderInfo.policy_expiration_date))])])])])])])])},r=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",{staticClass:"item"},[s("i",[t._v("证件类型：")]),s("span",[t._v("身份证")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",{staticClass:"item"},[s("i",[t._v("证件类型：")]),s("span",[t._v("身份证")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",{staticClass:"bzxm clearfix"},[s("span",{staticClass:"fl"},[t._v("保障项目")]),s("i",{staticClass:"fr"},[t._v("保障金额")])])}],o=s("278f"),c={name:"TheOrderComfirmInfo",mixins:[o["c"],o["a"]],props:{orderInfo:{type:Object,default:function(){}},tbrInfo:{type:Object,default:function(){}},bbxrInfo:{type:Object,default:function(){}},bzfaInfo:{type:Object,default:function(){}}}},d=c,l=(s("0eb0"),s("2877")),f=Object(l["a"])(d,i,r,!1,null,"2f587658",null),u=f.exports,p=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"order-pay "},[s("p",{staticClass:"title"},[t._v("选择支付方式并付款")]),s("ul",[s("li",[s("input",{directives:[{name:"model",rawName:"v-model",value:t.payWay,expression:"payWay"}],attrs:{type:"radio",id:"zfb",value:"zfb"},domProps:{checked:t._q(t.payWay,"zfb")},on:{change:function(e){t.payWay="zfb"}}}),t._m(0)])]),s("div",{staticClass:"tips clearfix"},[s("p",{staticClass:"read"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.read,expression:"read"}],attrs:{type:"checkbox",value:"3",id:"read"},domProps:{checked:Array.isArray(t.read)?t._i(t.read,"3")>-1:t.read},on:{change:function(e){var s=t.read,a=e.target,n=!!a.checked;if(Array.isArray(s)){var i="3",r=t._i(s,i);a.checked?r<0&&(t.read=s.concat([i])):r>-1&&(t.read=s.slice(0,r).concat(s.slice(r+1)))}else t.read=n}}}),s("label",{attrs:{for:"read"}})]),s("p",{staticClass:"protocal"},[t._v("我已阅读本产品 "),s("span",{on:{click:t.goProtocalList}},[t._v("《保险条款》")]),s("span",{on:{click:function(e){t.notifyShow=!0}}},[t._v("《客户告知书》")]),t._v("等信息，并充分理解和接受。")])]),s("p",{directives:[{name:"show",rawName:"v-show",value:t.readShow,expression:"readShow"}],staticClass:"error"},[t._v("请先阅读并确认以上条款再进行支付")]),t._m(1),s("div",{staticClass:"pay-btn",on:{click:t.onPay}},[t._v("立即支付")]),s("p",{staticClass:"back",on:{click:t.amendOrder}},[t._v("返回修改订单")]),s("is-pay",{attrs:{orderSn:t.orderInfo.sn,isShow:t.ispayShow},on:{toggle:t.t}}),t.notifyShow?s("pop-box",{attrs:{title:"客户告知书",width:874,height:650,content:t.notifyCon},on:{dealClose:t.handleNoticyClose}},[t._v(">")]):t._e()],1)},h=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("label",{attrs:{for:"zfb"}},[a("img",{attrs:{src:s("9c08"),alt:"zfb"}}),t._v("支付宝")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",{staticClass:"price"},[t._v("567"),s("span",[t._v("元起")])])}],v=s("cebc"),m=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.isShow?a("div",{staticClass:"AliPay"},[a("div",{staticClass:"cover"}),a("div",{staticClass:"tipBox"},[t._m(0),a("p",{staticClass:"p-s"},[t._v("请于"+t._s(t.lastTime)+"前完成支付，否则订单将自动取消")]),a("div",{staticClass:"btns"},[a("div",{staticClass:"btn change",on:{click:function(e){return t.handleClose()}}},[t._v("更换支付方式")]),a("div",{staticClass:"btn payed",on:{click:t.handlePay}},[t._v("已支付")])]),a("div",{staticClass:"close",on:{click:t.handleClose}},[a("img",{attrs:{src:s("d991")}})])])]):t._e()},C=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",{staticClass:"p-b"},[t._v("请在新的"),s("span",{staticClass:"blue"},[t._v("支付宝支付")]),t._v("页面完成付款")])}],b=(s("c5f6"),{props:{isShow:{type:Boolean,default:!1},lastTime:{type:Number},orderSn:{default:""}},methods:{handleClose:function(){this.$emit("toggle")},handlePay:function(){var t=this;this.$api.product.getcheckPayment({sn:2019030811716}).then(function(e){console.log("data",e),0==e.code?(t.$toast(e.message,"center"),t.$emit("toggle")):1==e.code&&t.$router.push("/insuranceResult/2019030811716")})}},data:function(){return{}}}),_=b,y=(s("9ed8"),Object(l["a"])(_,m,C,!1,null,"9f4e1706",null)),A=y.exports,g=s("9948"),I=s("2f62"),w={name:"TheOrderComfirmPay",props:{orderInfo:{type:Object,default:function(){}}},data:function(){return{notifyShow:!1,readShow:!1,payWay:"zfb",read:!1,ispayShow:!1,notifyCon:""}},mounted:function(){this.getNotify()},methods:{amendOrder:function(){this.$router.push({path:"/37duc/product/detail/1",query:{productId:this.productDetails.product.id,orderSn:this.orderInfo.sn}})},goProtocalList:function(){this.$router.push({path:"/37duc/product/protocal"})},getNotify:function(){var t=this,e={id:this.productDetails.product.id};this.$api.product.getNoticeBook(e).then(function(e){1===e.code&&(t.notifyCon=e.data)})},handleNoticyClose:function(){this.notifyShow=!1},goPay:function(){var t=this,e={orderSn:this.orderInfo.sn,type:"alipay"};this.$api.product.orderPay(e).then(function(e){1===e.code?(window.open("".concat("http://7qi3n5.natappfree.cc/pc").concat(e.data)),t.ispayShow=!0):t.$toast.center(e.message)})},onPay:function(){var t=this;if(this.read){var e={orderSn:this.orderInfo.sn};this.$api.product.orderCheck(e).then(function(e){1===e.code?t.goPay():t.$toast.center(e.message)})}else this.readShow=!0},t:function(){this.ispayShow=!1}},computed:Object(v["a"])({},Object(I["c"])(["productDetails"])),watch:{read:function(t){t&&(this.readShow=!1)}},components:{isPay:A,popBox:g["a"]}},x=w,S=(s("f969"),Object(l["a"])(x,p,h,!1,null,"21d7d0e6",null)),k=S.exports,N={name:"TheOrderInsured",data:function(){return{orderInfo:{},tbrInfo:{},bbxrInfo:{},bzfaInfo:{}}},components:{orderComfirmInfo:u,orderComfirmPay:k},mounted:function(){this.getOrderInfo()},methods:{getOrderInfo:function(){var t=this,e={sn:this.$route.query.sn};this.$api.product.getOrderInfo(e).then(function(e){1===e.code&&(t.orderInfo=e.data,t.tbrInfo=t.orderInfo.member_info,t.bbxrInfo=t.orderInfo.relation_info,t.bzfaInfo=t.orderInfo.plan_info)})}}},O=N,Q=(s("0b52"),Object(l["a"])(O,a,n,!1,null,"387cfcd2",null));e["default"]=Q.exports},f969:function(t,e,s){"use strict";var a=s("40de"),n=s.n(a);n.a}}]);
//# sourceMappingURL=chunk-5b46460a.c23d8c3c.js.map