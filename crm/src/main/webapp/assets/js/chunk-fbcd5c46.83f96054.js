(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-fbcd5c46"],{"278f":function(t,a,s){"use strict";s.d(a,"b",function(){return e}),s.d(a,"a",function(){return n}),s.d(a,"c",function(){return i});var e={methods:{getSexByName:function(t){return 1===t?"男":"女"}}},n={methods:{getRelation:function(t){switch(t){case 0:return"父亲";case 1:return"母亲";case 2:return"儿子";case 3:return"女儿";case 4:return"妻子";case 5:return"丈夫";case 6:return"本人";default:return"本人"}}}},i={methods:{orderStatus:function(t){switch(t){case 0:return"等待付款";case 1:return"已支付";case 2:return"已承保";case 3:return"已出单";case 4:return"保障中";case 5:return"已失效";case 6:return"订单失败";case 7:return"已取消"}}}}},af09:function(t,a,s){},d252:function(t,a,s){"use strict";s.r(a);var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"order-detail"},[s("div",{staticClass:"order-info "},[s("p",{staticClass:"clearfix number-state"},[s("span",{staticClass:"number"},[t._v("订单编号："+t._s(t.orderDetail.sn))]),s("span",{staticClass:"state"},[t._v(t._s(t.orderStatus(t.orderDetail.status)))])]),s("div",{staticClass:"title-logo clearfix"},[s("p",{staticClass:"company-title"},[t._v(t._s(t.orderDetail.name))]),s("p",{staticClass:"logo"},[s("img",{attrs:{src:t.baseSrc+t.bbCompanyInfo.logo,alt:"公司logo"}})])]),s("div",{staticClass:"info-wrapper"},[s("p",{staticClass:"info"},[s("span",{staticClass:"tbr"},[t._v("投保人："+t._s(t.tbrInfo.name))]),s("span",[t._v("被保险人："+t._s(t.bbxrInfo.name))])]),s("p",{staticClass:"info"},[t._v("保险期间："+t._s(t.orderDetail.policy_effective_date)+"至"+t._s(t.orderDetail.policy_expiration_date))]),s("p",{staticClass:"info"},[t._v("保险公司："+t._s(t.bbCompanyInfo.name))]),t.orderDetail.policy_num?s("p",{staticClass:"info"},[t._v("保单号："+t._s(t.orderDetail.policy_num))]):t._e(),s("p",{staticClass:"price"},[t._v(t._s(t.orderDetail.price)),s("span",[t._v("元")])])])]),s("div",{staticClass:" bzfa-wrapper clearfix"},[s("div",{staticClass:"layer bzfa-layer"},[s("p",{staticClass:"title"},[t._v("\n          保障方案\n           ")]),t.bzfaInfo.plan_name?s("p",{staticClass:"plan-name"},[t._v(t._s(t.orderDetail.name)+"——"+t._s(t.bzfaInfo.plan_name))]):t._e(),s("table",{staticClass:"bz-detail",attrs:{border:"1"}},[t._m(0),t._l(t.productInfo,function(a,e){return s("tr",{key:e},[s("td",{staticClass:"bzxm"},[t._v(t._s(a.name)+"\n                ")]),s("td",{staticClass:"bzed"},[t._v(t._s(a.limit))]),s("td",{staticClass:"bzsm"},[t._v(t._s(a.value))])])})],2)])]),s("div",{staticClass:"other-info clearfix"},[t._m(1),s("div",{staticClass:"layer "},[s("p",{staticClass:"title "},[t._v("\n             投保人信息\n           ")]),s("div",{staticClass:"info-wrapper"},[s("p",{staticClass:"info"},[s("span",[t._v("姓名：")]),t._v(t._s(t.tbrInfo.name))]),s("p",{staticClass:"info"},[s("span",[t._v("性别：")]),t._v(t._s(t.getSexByName(t.tbrInfo.gender)))]),t._m(2),s("p",{staticClass:"info"},[s("span",[t._v("证件号码：")]),t._v(t._s(t.tbrInfo.id_num))]),s("p",{staticClass:"info"},[s("span",[t._v("出生日期：")]),t._v(t._s(t.tbrInfo.birth))])])]),s("div",{staticClass:"layer "},[s("p",{staticClass:"title "},[t._v("\n             被保险人信息\n           ")]),s("div",{staticClass:"info-wrapper"},[s("p",{staticClass:"info"},[s("span",[t._v("姓名：")]),t._v(t._s(t.bbxrInfo.name))]),s("p",{staticClass:"info"},[s("span",[t._v("性别：")]),t._v(t._s(t.getSexByName(t.bbxrInfo.gender)))]),t._m(3),s("p",{staticClass:"info"},[s("span",[t._v("证件号码：")]),t._v(t._s(t.tbrInfo.id_num))]),s("p",{staticClass:"info"},[s("span",[t._v("出生日期：")]),t._v(t._s(t.tbrInfo.birth))])])]),s("div",{staticClass:"layer "},[s("p",{staticClass:"title "},[t._v("\n             受益人信息\n           ")]),s("div",{staticClass:"info-wrapper"},[s("p",{staticClass:"info"},[t._v("受益人："+t._s(t.orderDetail.beneficiary))])])])])])},n=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("tr",[s("th",[t._v("保障项目")]),s("th",[t._v("保障额度")]),s("th",[t._v("保障说明")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"layer "},[s("p",{staticClass:"title "},[t._v("\n             订单信息\n           ")]),s("div",{staticClass:"info-wrapper"},[s("p",{staticClass:"info"},[t._v("支付方式：微信支付")]),s("p",{staticClass:"info"},[t._v("支付金额：¥120.00")]),s("p",{staticClass:"info"},[t._v("支付流水号：11112324141")]),s("p",{staticClass:"info"},[t._v("付款时间：2021-01-01 00:00:00")]),s("p",{staticClass:"info"},[t._v("订单编号：11112324141")]),s("p",{staticClass:"info"},[t._v("创建时间：2021-01-01 00:00:00")])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("p",{staticClass:"info"},[s("span",[t._v("证件类型：")]),t._v("身份证")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("p",{staticClass:"info"},[s("span",[t._v("证件类型：")]),t._v("身份证")])}],i=(s("ac6a"),s("278f")),r={mixins:[i["c"],i["b"]],data:function(){return{orderId:1,orderDetail:{},tbrInfo:{},bbxrInfo:{},bbCompanyInfo:{},bzfaInfo:{},productInfo:{},baseSrc:""}},mounted:function(){this.getOrderDetail(),this.baseSrc="".concat("http://x7a23k.natappfree.cc")},methods:{getOrderDetail:function(){var t=this,a={orderId:this.orderId};this.$api.personCenter.orderDetail(a).then(function(a){console.log("list",a.data),1===a.code&&(t.orderDetail=a.data,t.tbrInfo=a.data.member_info,t.bbxrInfo=a.data.relation_info,t.bbCompanyInfo=a.data.brand_info,t.bzfaInfo=a.data.plan_info,t.productInfo=a.data.product_info.parameter_values[0].entries)})}}},o=r,c=(s("e57f"),s("2877")),l=Object(c["a"])(o,e,n,!1,null,"1f8ff0e6",null);a["default"]=l.exports},e57f:function(t,a,s){"use strict";var e=s("af09"),n=s.n(e);n.a}}]);
//# sourceMappingURL=chunk-fbcd5c46.83f96054.js.map