(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-211eab4d"],{2048:function(s,t,a){},4598:function(s,t,a){"use strict";var e=a("2048"),i=a.n(e);i.a},"605f":function(s,t,a){},8087:function(s,t,a){"use strict";var e=function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"orderBox"},[a("div",{staticClass:"orderList"},s._l(s.message,function(t,e){return a("div",{staticClass:"orderItem"},[a("div",{staticClass:"orderSn clearfix"},[a("span",{staticClass:"sn fl"},[s._v("订单编号: "+s._s(t.sn))]),a("span",{staticClass:"status fr",class:"status"+t.status},[s._v(s._s(s.status(t.status)))])]),a("div",{staticClass:"orderMsg clearfix"},[a("div",{staticClass:"btn-price fr"},[a("div",{staticClass:"logo"},[a("img",{attrs:{src:s.baseUrl+t.brand_info.logo}})]),a("div",{staticClass:"price"},[a("span",{staticClass:"p"},[s._v(s._s(t.amount))]),a("span",{staticClass:"i"},[s._v("元")])]),a("div",{staticClass:"btns"},[[3,4,5].filter(function(s){return s===t.status}).length?a("div",{staticClass:"btn baodan"},[s._v("电子保单")]):s._e(),[5,6].filter(function(s){return s===t.status}).length?a("div",{staticClass:"btn againPay"},[s._v("再次购买")]):s._e(),[4,5].filter(function(s){return s===t.status}).length?a("div",{staticClass:"btn toSettle"},[s._v("申请理赔")]):s._e(),0===t.status?a("div",{staticClass:"btn toPay"},[s._v("立即支付")]):s._e(),[7,8].filter(function(s){return s===t.status}).length?a("div",{staticClass:"btn rePay"},[s._v("重新支付")]):s._e(),a("div",{staticClass:"btn toDetail",on:{click:s.goDetail}},[s._v("查看详情")])])]),a("div",{staticClass:"msg"},[a("div",{staticClass:"ttl",domProps:{textContent:s._s(t.name)}}),a("div",{staticClass:"dl"},[s._v("被保险人："+s._s(t.relation_info.name))]),a("div",{staticClass:"dl"},[s._v("创建时间："+s._s(t.create_time))])])])])}),0)])},i=[],n={props:{message:{type:Array,required:!0}},data:function(){return{baseUrl:"".concat("http://192.168.15.186:8004")}},methods:{goDetail:function(){console.log(888),this.$router.push({path:"/37duc/personCenter/orderDetail/1"})},status:function(s){var t;switch(s){case 0:t="待支付";break;case 1:t="已支付";break;case 2:t="已承保";break;case 3:t="已出单";break;case 4:t="保障中";break;case 5:t="已失效";break;case 6:t="承保失败";break;case 7:t="已取消";break;case 8:t="支付失败";break}return t}}},r=n,c=(a("4598"),a("2877")),l=Object(c["a"])(r,e,i,!1,null,"2f1c48c4",null);t["a"]=l.exports},"921f":function(s,t,a){"use strict";a.r(t);var e=function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"personal-index"},[a("div",{staticClass:"ps-msg clearfix"},[s._m(0),a("div",{staticClass:"masge"},[a("div",{staticClass:"name"},[a("span",{staticClass:"b-n"},[s._v(s._s(s.member.name))]),a("span",{staticClass:"u-t"},[s._v("初级实名用户")])]),a("div",{staticClass:"msgs clearfix"},[s.member.company?a("div",{staticClass:"item fl"},[a("span",[s._v("我的企业: ")]),a("span",[s._v("|")])]):s._e(),a("div",{staticClass:"item fl"},[a("span",[s._v("手机号: "+s._s(s.member.mobile))])])])])]),s._m(1),a("div",{staticClass:"orderBox"},[a("TheOrderList",{attrs:{message:s.message}})],1)])},i=[function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("div",{staticClass:"acator fl"},[e("img",{attrs:{src:a("ba97")}})])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"black-ttl"},[a("span",[s._v("最近订单")])])}],n=a("f499"),r=a.n(n),c=a("8087"),l={data:function(){return{message:[],member:{}}},components:{TheOrderList:c["a"]},created:function(){var s=this;this.$api.personCenter.getIndexOrderList({page:1,limit:2,status:0}).then(function(t){console.log(t),s.message=JSON.parse(r()(t.data.dataGrid.data)),s.member=JSON.parse(r()(t.data.member))})},methods:{}},o=l,u=(a("b8e5"),a("2877")),d=Object(u["a"])(o,e,i,!1,null,"fb4a4766",null);t["default"]=d.exports},b8e5:function(s,t,a){"use strict";var e=a("605f"),i=a.n(e);i.a},ba97:function(s,t){s.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAAXNSR0IArs4c6QAABGNJREFUWAnNWc1PE0EUn52WFihfRaxQKDGhfAZP/iF+ROLRu9GTngU8681492gwGv8QTxI+a2KAQErBIrRAS7vr+y2dzbadYWdLrU7SzMybN+/95u2beW+mBmuwbG5ujpVM855pWXcNxuIkJm5d1oz6u9Tfpf4uN4xvQc6/jo+P/2hEFcnSL6lUKlY0zWfMNB+Q8ln9mQyglxnnX0Kcv0smk/u6c7UA7u/vdx1msy/IWi9JcJeucAVfjqz65kY0+jYWi+UUPA7ZE+DqxsZDAvaeWdYtZ1YzGoaRJqBPpycmPl8ljqsGLcsyVtfX56n+1HRwUEoLhuyKDqWhpAPb29sdx/n8BxIzp1pAk+lLPZHIk0QicVYrt86CsFyLwQHTHHRCtyfAtY2NV5hQy9iC/lxFd5WqKsTYEPAL2UqqZrk6nHPW39fHIpEIC4dC9sh5ocBy+TzLHh2Rq9GBpFkMw7Do98i9cRyAOEoy2WzKz4boaG9nI8PDrC0YlEIoFItse2eHFS8upONSIu3um9FoUhxBjg/inPMDrq2tjY2OjCjBQTksOppI0PnsqJFiqiLS7raxVIi2BREhCqUSQpH2ITwSj7Oe7u4q2arO4a9fLJ3JqIZl9Fw4GBxDxLGXViyVnhOXNrhAIMC6u7TZWV9vrwzEVbQuO6QSh7D9/au4a8cinZ2MnLmWrOxjQe3hsHJcOkDxHnSOrMRv4A8qNoVUUYUIn/VTgAnYOFImPxPBSzHU7xRfFhfCgY0jnxME3fqiVNJldfgamQNsnGyBZNNXwfnmp+CwLvqcA/nAhk3iG+D5+TlDtNAtiCrlclmX3c0X5+SMvgFCwsHhoVuQsg3r4RxspAAbPjHV/svxyYkda71mZmghp2d1WZTXNHsc2PCJ97S4JUx76fSVIAFO19IS8SDtASBuYA0XgJTt0DPy08zBQcNyKxN34YPXAoioIstmEDl8R4+a5QAbx721hq7dDVF0GB4akvIjFCKhaCTqCIHAZiCcFMvllCDq1IitvT09LDYw4JlK4XhBJoNNZZqmjniHJxQIJGmjMLaytvadzDnrjEgaiKX90ShDkoqfn2QB4nDcYDefnp4yyvc8wRKw5ZmpqTuXqTDd+GmGEiB86fboqKe1JOtySFgQ/BU/pF8/t7akm8uZAExU7HQLzxHUVt7yb8Vi1wLnKK008DWGBgdrye5+roLpEqCdudJzhJvD3b7ubnTLEu3Ojg7RrKtpc7wR7ze2BcGBtxJyrHQdNxEQS5td8uSL0kIYbCyVQXuTCEbVtRP+A79phiURVwuUaBz9/l13JSU96munA5LeYygPWxD9Vtb0aRemJycX3TqrLIgBOg6MlfX1j9Rs9evC0szk5GNY0Q3Q8UFBBAMecqi/JGgtqO3Ho1pw0FtnQQEGlsRbCS1nHm1Bb2Zt+xxji1MTE69l4KDLU/G/fsD0BIhV/NdPwAAoiv2IfvkKcZ8+vTI0Cn53TZb4e4/obkWi3aq/If4AsB/T+szO4PkAAAAASUVORK5CYII="}}]);
//# sourceMappingURL=chunk-211eab4d.4e05ea7c.js.map