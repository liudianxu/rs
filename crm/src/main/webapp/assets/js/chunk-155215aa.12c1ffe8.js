(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-155215aa"],{"073f":function(t,e,a){},"094d":function(t,e,a){"use strict";var s=a("52c2"),n=a.n(s);n.a},1240:function(t,e,a){"use strict";var s=a("e970"),n=a.n(s);n.a},"278f":function(t,e,a){"use strict";a.d(e,"a",function(){return o}),a.d(e,"c",function(){return c}),a.d(e,"b",function(){return d}),a.d(e,"d",function(){return l});var s=a("e814"),n=a.n(s),i=a("c1df"),r=a.n(i),o={methods:{dateFormat:function(t){return r()(t).format("YYYY-MM-DD")}}},c={methods:{getSexByName:function(t){return 1===t?"男":"女"}}},d={methods:{getRelation:function(t){switch(n()(t)){case 0:return"父亲";case 1:return"母亲";case 2:return"儿子";case 3:return"女儿";case 4:return"妻子";case 5:return"丈夫";case 6:return"本人";default:return"其他"}}}},l={methods:{orderStatus:function(t){switch(t){case 0:return"待支付";case 1:return"已支付";case 2:return"已承保";case 3:return"已出单";case 4:return"保障中";case 5:return"已失效";case 6:return"承保失败";case 7:return"已取消";case 8:return"支付失败"}}}}},"52c2":function(t,e,a){},"7bc6":function(t,e,a){},9948:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"pop-container"},[a("div",{staticClass:"pop-wrapper",style:t.popStyle},[a("p",{staticClass:"title"},[t._v(t._s(t.title))]),a("div",{staticClass:"content",domProps:{innerHTML:t._s(t.content)}}),a("i",{staticClass:"close",on:{click:t.goClocse}})]),a("div",{staticClass:"cover",on:{click:t.goClocse}})])},n=[],i=(a("c5f6"),{name:"BaseAlertBox",props:{title:{type:String,default:""},content:{type:String,default:""},width:{type:Number},height:{type:Number}},data:function(){return{wWidth:document.documentElement.clientWidth||document.body.clientWidth,wHeight:document.documentElement.clientHeight||document.body.clientHeight}},methods:{goClocse:function(){this.$emit("dealClose")}},computed:{popStyle:function(){return{width:this.width?this.width+"px":"100%",height:this.height?this.height+"px":"100%",left:(this.wWidth-this.width)/2+"px",top:(this.wHeight-this.height)/2-15+"px"}}}}),r=i,o=(a("1240"),a("2877")),c=Object(o["a"])(r,s,n,!1,null,null,null);e["a"]=c.exports},"9c08":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAAXNSR0IArs4c6QAABOVJREFUWAntWF1oHFUUPufe3Z0ZxFp/8Q9FBUvcJFJJNX0QRVQQEQpRaU2yC3lQEOyDPgkt+PeqFFGRIpJsVsWqNQpqpL5E0VYlKkm626ClEUyhmmpTsPs7czx3NrM7yc6dmcQncS9k58495373u9895947AeiUjgIdBf7bCuC/oX/TWHUroL0DCG8nhKsY7EqFRwAnkWARkL4CkhOFbOrHjY6zIYLpfOVBx6EXgGhLrIER54XAPUeHjPdj+fuc1kWwN1e6rkbwNvfv92Gsp3okifDITMY6EbdTbII9udoddah/wOt3cVzwQD+E0wlIDMxmklOB9jWNsQgqcjbZhwgouab/hl4RsCZR3hOHZCRBd1kBvo9Sjgc9x0nxMgAu8UT62H9nKHtWkme7LWq5RSgIG92Yi7GsnLnFQsZ6upAxXxQoP4vCVRNeiedQ10SY1c1W22lLCJb9a1bq7Kq+CD9774T2IivaThKphwiu9vz42a/GCMvuUILuVuJDa1ZRfMIkV2UiCvrTs6ckHK85mPPevSeTe5R3ST9BWBlDu/1oY1BtwgT2Dx549BOni1mzT/mlx6sZx7HHovs0PBDkLbrNXK+ge0KEDIFY4tktND2opSg5tIyIxaaNK6ze9fxr+NuadTUWQOBpoyfIx5d7aDVR2iq/JITgJWuV3nzVi9dTHKMjFiQL3w7h2YcOkJwrVf5iz2CC7lgtHH9NS1CdrZxp+kLUU7PtwzoHVrDKqrln87FS/Vae7Pk6X3csjVG7zfDyueCaftyMjt7GdJDe+S6Lp5VPHeyRMN+wsbQE2wARbQbKI8r+izabm7otIyXQvFaiGGC19rOtmcVMviKT+LzC6M3RZYAw2Ibna2CltWulJcg9TjYxmBxLMljIWsMMVT2zXNnDMfU6QWU3K1VH03gCLfMKFGKIyXzD/fbO7TSPq/41Ku/jDLGaWAEVRPgtoNlt0sagus8xyRuVF89i9GjWeLcrVx0mcMaIOGq48MzV31NQLi8hildY1H3TD+NbyqZK93jpTtuBXY230N9FnVWroHvZXOlFgJ+rKpKzlxm55FYBElxCjvPMuXLlTX/77JA5JQXeC4gH1QXBb/PXeRW0yaYlmED5kQfCAI2EQTrjta19soKjwjRctdL56rb0WPnJrRNwwdyweaiYMQfQMi5HASMcr5+qDPf3l1Ks/yRRAF258jFWbAtL9mXaMu+ar9RurpP9IS/rNa0BcEYiPjuXMQ6qNib2OKf3S7z4BhP5m6NgVAK+yvbmxr39AFnLlXofkbMdgW7gC8ZjLbzVtfbl8tlXLgvvNZrwjc2Wsdu4FGp/LNZvQ7DPs9GYLw7ir8renav2OeQ8xwl5nw+iVUWYEiD2mxemJqYf4KtZzBJKUGF0jZVUfDROCIQljsRxAVR0ABcF4CYAJ+0Q3N30UZ1Ciqsq0cdCyElJycmZDP4e4s6bQkSJe2GNgGkz89ZyKpWE/p92WQttRl+DNkk8H3XjVd8QYVno+cZ9KhWllPdHkVN4kQSVk/p2UN8QrLd7dKm2DRcOE06yHbODqek4GLEIKiBFUn1DcPVIHOAgH1ZuUphmD98bvwiyB7VFxmBQp/V/uMNhPgZfKwwZ+SC8sLYNEfQAg/71wfueulQssM8J3guLTCzP3xwFr0/n2VGgo8D/TYF/ADGIvWg6ZNPwAAAAAElFTkSuQmCC"},af97:function(t,e,a){"use strict";var s=a("7bc6"),n=a.n(s);n.a},d57f:function(t,e,a){},d991:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAAAXNSR0IArs4c6QAAAW1JREFUOBHtlLFOwzAQhm1XpCpUYmInUpJSwRvAAm/AI/AUTBULjExlYytM7IgBCZ4CJCsvgGCthKqSmPutuLJsJ2Zha6TknNzdd+ffpzC2vv5bAe4WeJfyUTG2nQhxmuf5l+t336WUR5VSd5zzm/FodG38wiyMBZQpdbisqpeyLHfM95AF9EepJ8rZJf+WHeOB0SlVf6Pgg2Vdv7bBDZRgQ4qf7RXFpQ32pIATMECVUvsosiHEsS2LCx0XxRnF1VFwF/wvUOQHOzaV3c7p+4R2MSOrtx/q1OR2ghFkw1dJpGkXFHHe4ZlkYxttJ+ad7HyQJOeuppZfL6NgaNpsHwlzuoffi8UzdqIJLY9OsHtQm/1+jimJjSJqtYJdKDRN0/QDo6fhNIpdcx48vBDU1tQ+UBRx5xwde+AYFEm4YnBPCvqh3FNedE4xLUmvd2LJcqUrNg8PTIFTwflFbE6Rn2XZZwO/ZZw/2OD1eqXAL6i67Bvj/zdAAAAAAElFTkSuQmCC"},e01b:function(t,e,a){"use strict";var s=a("d57f"),n=a.n(s);n.a},e0d8:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"order-comfirm layout clearfix"},[a("order-comfirm-info",{attrs:{orderInfo:t.orderInfo,tbrInfo:t.tbrInfo,bbxrInfo:t.bbxrInfo,bzfaInfo:t.bzfaInfo}}),a("order-comfirm-pay",{attrs:{orderInfo:t.orderInfo}})],1)},n=[],i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"order-info"},[a("div",{staticClass:"top clearfix"},[a("p",{staticClass:"title"},[t._v(t._s(t.orderInfo.name))]),a("p",{staticClass:"number"},[t._v("订单编号："+t._s(t.orderInfo.sn))])]),a("div",{staticClass:"order-info-wrapper clearfix"},[a("div",{staticClass:"sec sec-tbr"},[a("p",{staticClass:"name"},[t._v("投保人信息")]),a("div",{staticClass:"info-con"},[a("p",{staticClass:"item"},[a("i",[t._v("姓名：")]),a("span",[t._v(t._s(t.tbrInfo.name))])]),a("p",{staticClass:"item"},[a("i",[t._v("性别：")]),a("span",[t._v(t._s(t.getSexByName(t.tbrInfo.gender)))])]),a("p",{staticClass:"item"},[a("i",[t._v("身份证号：")]),a("span",[t._v(t._s(t.tbrInfo.id_num))])]),a("p",{staticClass:"item"},[a("i",[t._v("出生日期：")]),a("span",[t._v(t._s(t.dateFormat(t.tbrInfo.birth)))])]),a("p",{staticClass:"item"},[a("i",[t._v("电话号码：")]),a("span",[t._v(t._s(t.tbrInfo.mobile))])])])]),a("div",{staticClass:"sec sec-bbxr"},[a("p",{staticClass:"name"},[t._v("被保险人信息")]),a("div",{staticClass:"info-con"},[a("p",{staticClass:"item"},[a("i",[t._v("姓名：")]),a("span",[t._v(t._s(t.bbxrInfo.name))])]),a("p",{staticClass:"item"},[a("i",[t._v("性别：")]),a("span",[t._v(t._s(t.getSexByName(t.bbxrInfo.gender)))])]),a("p",{staticClass:"item"},[a("i",[t._v("身份证号：")]),a("span",[t._v(t._s(t.bbxrInfo.id_num))])]),a("p",{staticClass:"item"},[a("i",[t._v("出生日期：")]),a("span",[t._v(t._s(t.dateFormat(t.bbxrInfo.birth)))])]),a("p",{staticClass:"item"},[a("i",[t._v("与保险人关系：")]),a("span",[t._v(t._s(t.getRelation(t.bbxrInfo.type)))])])])]),a("div",{staticClass:"sec sec-syr"},[a("p",{staticClass:"name"},[t._v("受益人信息")]),a("div",{staticClass:"info-con"},[a("p",{staticClass:"item-syr"},[a("i",[t._v("受益人：")]),a("span",[t._v(t._s(t.orderInfo.beneficiary))])])])])]),a("div",{staticClass:"order-info-wrapper"},[a("div",{staticClass:"sec sec-bzfa"},[a("p",{staticClass:"name"},[t._v("保障方案")]),a("div",{staticClass:"info-con-wrapper clearfix"},[a("div",{staticClass:"fl plan-con"},[t.bzfaInfo.plan_name?a("p",{staticClass:"product-title"},[t._v("\n            "+t._s(t.orderInfo.name)+"——"+t._s(t.bzfaInfo.plan_name)+"\n          ")]):t._e(),t._m(0),a("ul",t._l(t.bzfaInfo.plan_details,function(e,s){return a("li",{key:s,staticClass:"clearfix"},[a("span",[t._v(t._s(e.name))]),a("i",[t._v(t._s(e.value))])])}),0)]),a("div",{staticClass:"fl bz-date"},[a("p",{staticClass:"date clearfix"},[a("span",[t._v("保险期间")]),a("i",[t._v(t._s(t.orderInfo.insurance_period))])]),a("p",{staticClass:"date clearfix"},[a("span",[t._v("起始日期")]),a("i",[t._v(t._s(t.orderInfo.policy_effective_date))])]),a("p",{staticClass:"date clearfix"},[a("span",[t._v("终止日期")]),a("i",[t._v(t._s(t.orderInfo.policy_expiration_date))])])])])])])])},r=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",{staticClass:"bzxm clearfix"},[a("span",{staticClass:"fl"},[t._v("保障项目")]),a("i",{staticClass:"fr"},[t._v("保障金额")])])}],o=a("278f"),c={name:"TheOrderComfirmInfo",mixins:[o["c"],o["a"],o["b"]],props:{orderInfo:{type:Object,default:function(){}},tbrInfo:{type:Object,default:function(){}},bbxrInfo:{type:Object,default:function(){}},bzfaInfo:{type:Object,default:function(){}}}},d=c,l=(a("fc41"),a("2877")),f=Object(l["a"])(d,i,r,!1,null,"303b7f48",null),u=f.exports,p=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"order-pay "},[a("p",{staticClass:"title"},[t._v("选择支付方式并付款")]),a("ul",[a("li",[a("input",{directives:[{name:"model",rawName:"v-model",value:t.payWay,expression:"payWay"}],attrs:{type:"radio",id:"zfb",value:"zfb"},domProps:{checked:t._q(t.payWay,"zfb")},on:{change:function(e){t.payWay="zfb"}}}),t._m(0)])]),a("div",{staticClass:"tips clearfix"},[a("p",{staticClass:"read"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.read,expression:"read"}],attrs:{type:"checkbox",value:"3",id:"read"},domProps:{checked:Array.isArray(t.read)?t._i(t.read,"3")>-1:t.read},on:{change:function(e){var a=t.read,s=e.target,n=!!s.checked;if(Array.isArray(a)){var i="3",r=t._i(a,i);s.checked?r<0&&(t.read=a.concat([i])):r>-1&&(t.read=a.slice(0,r).concat(a.slice(r+1)))}else t.read=n}}}),a("label",{attrs:{for:"read"}})]),a("p",{staticClass:"protocal"},[t._v("我已阅读本产品 "),a("span",{on:{click:t.goProtocalList}},[t._v("《保险条款》")]),a("span",{on:{click:function(e){t.notifyShow=!0}}},[t._v("《客户告知书》")]),t._v("等信息，并充分理解和接受。")])]),a("p",{directives:[{name:"show",rawName:"v-show",value:t.readShow,expression:"readShow"}],staticClass:"error"},[t._v("请先阅读并确认以上条款再进行支付")]),a("p",{staticClass:"price"},[t._v(t._s(t.orderInfo.price)),a("span",[t._v("元")])]),a("div",{ref:"onPay",staticClass:"pay-btn",on:{click:t.onPay}},[a("a",{attrs:{href:"",target:"_blank"}}),t._v("立即支付")]),a("p",{staticClass:"back",on:{click:t.amendOrder}},[t._v("返回修改订单")]),a("is-pay",{attrs:{id:t.orderInfo.id,isShow:t.ispayShow,lastTime:t.orderInfo.expire},on:{toggle:t.t}}),t.notifyShow?a("pop-box",{attrs:{title:"客户告知书",width:874,height:t.wHeight-200,content:t.notifyCon},on:{dealClose:t.handleNoticyClose}},[t._v(">\n  ")]):t._e()],1)},h=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("label",{attrs:{for:"zfb"}},[s("img",{attrs:{src:a("9c08"),alt:"zfb"}}),t._v("支付宝")])}],v=function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.isShow?s("div",{staticClass:"AliPay"},[s("div",{staticClass:"cover"}),s("div",{staticClass:"tipBox"},[t._m(0),s("p",{staticClass:"p-s"},[t._v("请于"+t._s(t.lastTime)+"前完成支付，否则订单将自动取消")]),s("div",{staticClass:"btns"},[s("div",{staticClass:"btn change",on:{click:function(e){return t.handleClose()}}},[t._v("更换支付方式")]),s("div",{staticClass:"btn payed",on:{click:t.handlePay}},[t._v("已支付")])]),s("div",{staticClass:"close",on:{click:t.handleClose}},[s("img",{attrs:{src:a("d991")}})])])]):t._e()},m=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",{staticClass:"p-b"},[t._v("请在新的"),a("span",{staticClass:"blue"},[t._v("支付宝支付")]),t._v("页面完成付款")])}],C={props:{isShow:{type:Boolean,default:!1},lastTime:{type:String},id:{default:""}},methods:{handleClose:function(){this.$emit("toggle")},handlePay:function(){var t=this;this.$api.product.getcheckPayment({sn:this.id}).then(function(e){console.log("data",e),0==e.code?(t.$toast(e.message,"center"),t.$emit("toggle")):1==e.code&&t.$router.push("/insuranceResult/".concat(t.id))})}},data:function(){return{}}},b=C,_=(a("e01b"),Object(l["a"])(b,v,m,!1,null,"53f420e0",null)),y=_.exports,g=a("9948"),I={name:"TheOrderComfirmPay",props:{orderInfo:{type:Object,default:function(){}}},data:function(){return{notifyShow:!1,readShow:!1,payWay:"zfb",read:!1,ispayShow:!1,notifyCon:"",newPage:"",wHeight:""}},mounted:function(){this.getNotify(),this.wHeight=document.documentElement.clientHeight||document.body.clientHeight},methods:{amendOrder:function(){this.$router.push({path:"/37duc/product/detail/".concat(this.orderInfo.product_id),query:{productId:this.orderInfo.product_id,orderSn:this.orderInfo.sn}})},goProtocalList:function(){this.$router.push({path:"/37duc/product/protocal"})},getNotify:function(){var t=this,e={id:this.$route.query.productId};this.$api.product.getNoticeBook(e).then(function(e){1===e.code&&(t.notifyCon=e.data)})},handleNoticyClose:function(){this.notifyShow=!1},goPay:function(){var t=this,e={orderSn:this.orderInfo.sn,type:"alipay"};this.$api.product.orderPay(e).then(function(e){1===e.code?(t.newPage.location.href="".concat("http://192.168.0.102:8009").concat(e.data),t.ispayShow=!0):t.$toast.center(e.message)})},onPay:function(){var t=this;if(this.read){this.newPage=window.open(),window.open("about:blank");var e={orderSn:this.orderInfo.sn};this.$api.product.orderCheck(e).then(function(e){1===e.code?t.goPay():t.$toast.center(e.message)})}else this.readShow=!0},t:function(){this.ispayShow=!1}},watch:{read:function(t){t&&(this.readShow=!1)}},components:{isPay:y,popBox:g["a"]}},w=I,A=(a("af97"),Object(l["a"])(w,p,h,!1,null,"14df3415",null)),x=A.exports,k={name:"TheOrderInsured",data:function(){return{orderInfo:{},tbrInfo:{},bbxrInfo:{},bzfaInfo:{}}},components:{orderComfirmInfo:u,orderComfirmPay:x},mounted:function(){this.getOrderInfo()},methods:{getOrderInfo:function(){var t=this,e={sn:this.$route.query.sn};this.$api.product.getOrderInfo(e).then(function(e){console.log(122,e),1===e.code&&(t.orderInfo=e.data,t.tbrInfo=t.orderInfo.member_info,t.bbxrInfo=t.orderInfo.relation_info,t.bzfaInfo=t.orderInfo.plan_info)})}}},S=k,N=(a("094d"),Object(l["a"])(S,s,n,!1,null,"3b859222",null));e["default"]=N.exports},e970:function(t,e,a){},fc41:function(t,e,a){"use strict";var s=a("073f"),n=a.n(s);n.a}}]);
//# sourceMappingURL=chunk-155215aa.12c1ffe8.js.map