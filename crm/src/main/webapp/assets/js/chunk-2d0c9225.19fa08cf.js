(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0c9225"],{"589e":function(e,t,n){"use strict";n.r(t);var d=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div")},i=[],a={name:"wechatPay",mounted:function(){this.getWechat()},methods:{onBridgeReady:function(e){WeixinJSBridge.invoke("getBrandWCPayRequest",e,function(e){"get_brand_wcpay_request:ok"===e.err_msg?this.$toast.center("支付成功"):this.$toast.center("支付失败")})},getWechat:function(){var e=this,t={orderSn:this.$route.query.orderSn,total_fee:this.$route.query.price};this.$api.product.wechatOrderPay(t).then(function(t){if(0===t.code){var n=JSON.parse(t.data);"undefined"===typeof WeixinJSBridge?document.addEventListener?document.addEventListener("WeixinJSBridgeReady",e.onBridgeReady(n),!1):document.attachEvent&&(document.attachEvent("WeixinJSBridgeReady",e.onBridgeReady(n)),document.attachEvent("onWeixinJSBridgeReady",e.onBridgeReady(n))):e.onBridgeReady(n)}else t.code,e.$toast.center(t.message)})}}},r=a,o=n("17cc"),c=Object(o["a"])(r,d,i,!1,null,"efdcb190",null);t["default"]=c.exports}}]);
//# sourceMappingURL=chunk-2d0c9225.19fa08cf.js.map