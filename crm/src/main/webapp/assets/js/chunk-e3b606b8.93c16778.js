(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e3b606b8"],{"278f":function(t,a,s){"use strict";s.d(a,"a",function(){return o}),s.d(a,"c",function(){return l}),s.d(a,"b",function(){return c}),s.d(a,"d",function(){return f});var e=s("e814"),r=s.n(e),n=s("c1df"),i=s.n(n),o={methods:{dateFormat:function(t){return i()(t).format("YYYY-MM-DD")}}},l={methods:{getSexByName:function(t){return 1===t?"男":"女"}}},c={methods:{getRelation:function(t){switch(r()(t)){case 0:return"父亲";case 1:return"母亲";case 2:return"儿子";case 3:return"女儿";case 4:return"妻子";case 5:return"丈夫";case 6:return"本人";default:return"其他"}}}},f={methods:{orderStatus:function(t){switch(t){case 0:return"待支付";case 1:return"已支付";case 2:return"已承保";case 3:return"已出单";case 4:return"保障中";case 5:return"已失效";case 6:return"承保失败";case 7:return"已取消";case 8:return"支付失败"}}}}},"35f3":function(t,a,s){},"53aa":function(t,a,s){"use strict";var e=s("35f3"),r=s.n(e);r.a},"7f7f":function(t,a,s){var e=s("86cc").f,r=Function.prototype,n=/^\s*function ([^ (]*)/,i="name";i in r||s("9e1e")&&e(r,i,{configurable:!0,get:function(){try{return(""+this).match(n)[1]}catch(t){return""}}})},d252:function(t,a,s){"use strict";s.r(a);var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"order-detail"},[s("ul",{staticClass:"crumbs clearfix"},[s("li",[s("router-link",{attrs:{tag:"div",to:"/37duc/personCenter/main"}},[t._v("\n        个人中心>\n      ")])],1),s("li",{staticClass:"order"},[s("router-link",{attrs:{tag:"div",to:"/37duc/personCenter/main/myOrder"}},[t._v("\n        个人订单>\n      ")])],1),s("li",{staticStyle:{color:"#1C1D1D"}},[s("router-link",{attrs:{tag:"div",to:"/37duc/personCenter/main/myOrder"}},[t._v("\n        个人订单详情\n      ")])],1)]),s("div",{staticClass:"order-info "},[s("p",{staticClass:"clearfix number-state"},[s("span",{staticClass:"number"},[t._v("订单编号："+t._s(t.orderDetail.sn))]),s("span",{staticClass:"state"},[t._v(t._s(t.orderStatus(t.orderDetail.status)))])]),s("div",{staticClass:"title-logo clearfix"},[s("p",{staticClass:"company-title"},[t._v(t._s(t.orderDetail.name))]),s("p",{staticClass:"logo"},[s("img",{attrs:{src:t.baseSrc+t.bbCompanyInfo.logo,alt:"公司logo"}})])]),s("div",{staticClass:"info-wrapper"},[s("p",{staticClass:"info"},[s("span",{staticClass:"tbr"},[t._v("投保人："+t._s(t.tbrInfo.name))]),s("span",[t._v("被保险人："+t._s(t.bbxrInfo.name))])]),s("p",{staticClass:"info"},[t._v("保险期间："+t._s(t.orderDetail.policy_effective_date)+"至"+t._s(t.orderDetail.policy_expiration_date))]),s("p",{staticClass:"info"},[t._v("保险公司："+t._s(t.bbCompanyInfo.name))]),t.orderDetail.policy_num?s("p",{staticClass:"info"},[t._v("保单号："+t._s(t.orderDetail.policy_num))]):t._e(),s("p",{staticClass:"price"},[t._v(t._s(t.orderDetail.price)),s("span",[t._v("元")])])])]),s("div",{staticClass:" bzfa-wrapper clearfix"},[s("div",{staticClass:"layer bzfa-layer"},[s("p",{staticClass:"title"},[t._v("\n        保障方案\n      ")]),t.bzfaInfo.plan_name?s("p",{staticClass:"plan-name"},[t._v(t._s(t.orderDetail.name)+"——"+t._s(t.bzfaInfo.plan_name))]):t._e(),s("table",{staticClass:"bz-detail",attrs:{border:"1"}},[t._m(0),t._l(t.productInfo,function(a,e){return s("tr",{key:e},[s("td",{staticClass:"bzxm"},[t._v(t._s(a.name)+"\n          ")]),s("td",{staticClass:"bzed"},[t._v(t._s(a.ed))]),s("td",{staticClass:"bzsm"},[t._v(t._s(a.value))])])})],2)])]),s("div",{staticClass:"other-info clearfix"},[s("div",{ref:"layerTs1",staticClass:"layer layer-ts"},[s("p",{staticClass:"title "},[t._v("\n        订单信息\n      ")]),s("div",{staticClass:"info-wrapper"},[1===t.orderDetail.status||2===t.orderDetail.status||3===t.orderDetail.status||4===t.orderDetail.status||5===t.orderDetail.status||6===t.orderDetail.status?s("div",{staticClass:"wrapper"},[s("p",{staticClass:"info "},[t._v("支付方式："+t._s(t.payInfo.paymentPluginName))]),s("p",{staticClass:"info"},[t._v("支付金额：¥"+t._s(t.payInfo.amount))]),s("p",{staticClass:"info info-lsh"},[t._v("支付流水号："+t._s(t.payInfo.transactionId))]),s("p",{staticClass:"info"},[t._v("付款时间："+t._s(t.payInfo.create_time))])]):t._e(),s("p",{staticClass:"info"},[t._v("订单编号："+t._s(t.orderDetail.sn))]),s("p",{staticClass:"info"},[t._v("创建时间："+t._s(t.orderDetail.create_time))])])]),s("div",{ref:"layerTs2",staticClass:"layer layer-ts"},[s("p",{staticClass:"title "},[t._v("\n        投保人信息\n      ")]),s("div",{staticClass:"info-wrapper"},[s("p",{staticClass:"info info-ts"},[s("span",[t._v("姓名：")]),t._v(t._s(t.tbrInfo.name))]),s("p",{staticClass:"info info-ts"},[s("span",[t._v("性别：")]),t._v(t._s(t.getSexByName(t.tbrInfo.gender)))]),s("p",{staticClass:"info info-ts"},[s("span",[t._v("身份证号：")]),t._v(t._s(t.tbrInfo.id_num))]),s("p",{staticClass:"info info-ts"},[s("span",[t._v("出生日期：")]),t._v(t._s(t.dateFormat(t.tbrInfo.birth)))]),s("p",{staticClass:"info info-ts"},[s("span",[t._v("电话号码：")]),t._v(t._s(t.tbrInfo.mobile))])])]),s("div",{ref:"layerTs3",staticClass:"layer layer-ts "},[s("p",{staticClass:"title "},[t._v("\n        被保险人信息\n      ")]),s("div",{staticClass:"info-wrapper "},[s("p",{staticClass:"info info-ts"},[s("span",[t._v("姓名：")]),t._v(t._s(t.bbxrInfo.name))]),s("p",{staticClass:"info info-ts"},[s("span",[t._v("性别：")]),t._v(t._s(t.getSexByName(t.bbxrInfo.gender)))]),s("p",{staticClass:"info info-ts"},[s("span",[t._v("身份证号：")]),t._v(t._s(t.bbxrInfo.id_num))]),s("p",{staticClass:"info info-ts"},[s("span",[t._v("出生日期：")]),t._v(t._s(t.dateFormat(t.bbxrInfo.birth)))]),s("p",{staticClass:"info info-ts"},[s("span",[t._v("与保险人关系：")]),t._v(t._s(t.getRelation(t.bbxrInfo.type)))])])]),s("div",{ref:"layerTs4",staticClass:"layer layer-ts"},[s("p",{staticClass:"title "},[t._v("\n        受益人信息\n      ")]),s("div",{staticClass:"info-wrapper"},[s("p",{staticClass:"info"},[t._v("受益人："+t._s(t.orderDetail.beneficiary))])])])])])},r=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("tr",[s("th",[t._v("保障项目")]),s("th",[t._v("保障额度")]),s("th",[t._v("保障说明")])])}],n=(s("7f7f"),s("ac6a"),s("cadf"),s("551c"),s("f751"),s("097d"),s("278f")),i={mixins:[n["d"],n["c"],n["a"],n["b"]],data:function(){return{orderDetail:{},tbrInfo:{},bbxrInfo:{},bbCompanyInfo:{},bzfaInfo:{},payInfo:{},productInfo:{},baseSrc:""}},mounted:function(){this.getOrderDetail(),this.baseSrc="".concat("http://192.168.0.102:8009")},methods:{getOrderDetail:function(){var t=this,a={orderId:this.$route.query.orderId};this.$api.personCenter.orderDetail(a).then(function(a){if(1===a.code){t.orderDetail=a.data,t.tbrInfo=a.data.member_info,t.bbxrInfo=a.data.relation_info,t.bbCompanyInfo=a.data.brand_info,t.bzfaInfo=a.data.plan_info,t.productInfo=a.data.product_info.parameter_values[0].entries;for(var s=0;s<t.productInfo.length;s++)t.productInfo[s].name===a.data.plan_info.plan_details[s].name&&t.$set(t.productInfo[s],"ed",a.data.plan_info.plan_details[s].value);t.payInfo=a.data.payment_info,1!==t.orderDetail.status&&2!==t.orderDetail.status&&3!==t.orderDetail.status&&4!==t.orderDetail.status&&5!==t.orderDetail.status&&6!==t.orderDetail.status||(t.$refs.layerTs1.style.height="246px",t.$refs.layerTs2.style.height="246px",t.$refs.layerTs3.style.height="246px",t.$refs.layerTs4.style.height="246px")}})}}},o=i,l=(s("53aa"),s("2877")),c=Object(l["a"])(o,e,r,!1,null,"24448fce",null);a["default"]=c.exports}}]);
//# sourceMappingURL=chunk-e3b606b8.93c16778.js.map