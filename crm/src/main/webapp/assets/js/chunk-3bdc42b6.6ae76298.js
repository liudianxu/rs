(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3bdc42b6"],{"0327":function(t,s,a){},"0f3f":function(t,s,a){"use strict";var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"tabs clearfix"},t._l(t.tabs,function(s,e){return a("div",{staticClass:"tab-item fl",class:{active:s.active},domProps:{textContent:t._s(s.tabtxt)},on:{click:function(a){return t.handleClick(s)}}})}),0)},i=[],n={props:{tabs:{type:Array,required:!0}},methods:{handleClick:function(t){t.active||this.$emit("changeTab",t)}}},c=n,r=(a("a9dd"),a("2877")),o=Object(r["a"])(c,e,i,!1,null,"e012ac7c",null);s["a"]=o.exports},"1a08":function(t,s,a){},2588:function(t,s,a){"use strict";var e=a("0327"),i=a.n(e);i.a},"6d5d":function(t,s){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHkAAABRCAYAAAD2BQkSAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAPmSURBVHhe7Z09aBRBFIB3NiYGRLBSLlXES26TIDZq409to4hWUUQEfyrFNoXxr7AVrbQQLEwhKqKNnYWCqBELSbK33EFA8MAQsBEvubjje9l3i7kk5Pa4W2bnvQ+OeW8uO+zstzP7c4FxBEEQBEEwAkWlVfi+v++v49yFcC98epYrW2MRPpNdjnPV87zPUVX2MFJyqVTavhiG+x2td2vH2UzVMUrrP91dXRMDAwPfqSpmenY2p6vVaQi3RTVt4Zfq7R0e7u+vUB6jtXZnguAM7OdOqoqBg7vgKPWtx3U/5fP5n1SdOkZJhgO2aaZYHIMDdg3S7qh2Xb6MeB6O1BXA9hdDrR9Q2jZcpS4NFQoPKY2ZLhYvwH6vqm+gBgf6Nmx/Rym1RHWp4VJpBHDAHoPgWxBuJDhrdGO/sH+Up4oxIxkOwAkYEc8phT1T72Fov4MSr4sryMp0DV/2wP4fgvIg1UCqTg4XCi8oTQVjJE/5/isojkaZcx+m4isUJ8a0Gy/o2z0oLkeZ8xr6doziVDBJ8g8ochjDqOlba9RkFZpdsH9IBST3UZwKJl2TlwUjNglGGvoT9zMtjLrxEjqDSGaASGaASGaASGaASGaASGaASGaASGaASGaASGaASGaAlZKLxeJQEATn5ubmtlJVS+D22A62R1WZxDrJlUpli9b6QxiGj+bn5z+Wy+Ud9FUicDvcHtvB9rBd+ipz2D5dD9VqtbdJRePf43YQZnoE17FOci6X++267nkI6/8wl0j0GoKXsD1sl/LMYeVIHhwcfAZiRiFMJHodwaPYHuWZxNrpOqloWwUjVl+TmxVts2DE9huvDUXbLhixXjKynmh4/t1ju2CEhWRkLdHw/PsVyyi1UzBi0v9dawqdEc9reb+CINgVhuEbCPNRTVsowQlwBE6AMuWJaVf/WsG6kQyj8zgU7RSM5KndTGKdZKXUSyhKUdY2StRuJrFuum4WuOm6AaPzOsYg8GahULix/EWHkOla6CgimQEimQHWXZPlEWo18gjVHPIIZRLyCLUa66brZpFHKMEqRDIDRDIDRDIDRDIDRDIDRDIDRDIDOEteoBL5P7YOtpKVUk+hwNef+MoSY2th+1ozbeS1ptBRRDIDRDIDRDIDRDIDRDIDRDIDRDIDRDIDRDIDRDIDTJIcr52Ei2VRaAUN/Ul9zSuTJE9S6ehqdYxCK2joT9zPtDDm154kC3JmhmhBzsNQHqAa/ImT74KcyJTvP4HiVJRZycSI552mODWMuvGCM/wsnHXjENaiGmvARbLHsX+Up4pRI7nORsvdZwU4uEYsdy8IgiAIgiAIgiAIQh3H+QcrEeJki6XUxAAAAABJRU5ErkJggg=="},"7b36":function(t,s,a){},8087:function(t,s,a){"use strict";var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return t.message.length?a("div",{staticClass:"orderBox"},[a("div",{staticClass:"orderList"},t._l(t.message,function(s,e){return a("div",{staticClass:"orderItem",class:{"last-item":!t.message[e+1]}},[a("div",{staticClass:"orderSn clearfix"},[a("span",{staticClass:"sn fl"},[t._v("订单编号: "+t._s(s.sn))]),a("span",{staticClass:"status fr",class:"status"+s.status},[t._v(t._s(t.status(s.status)))])]),a("div",{staticClass:"orderMsg clearfix"},[a("div",{staticClass:"btn-price fr"},[a("div",{staticClass:"logo"},[a("img",{attrs:{src:t.baseUrl+s.brand_info.logo}})]),a("div",{staticClass:"price"},[a("span",{staticClass:"p"},[t._v(t._s(s.amount))]),a("span",{staticClass:"i"},[t._v("元")])]),a("div",{staticClass:"btns"},[[3,4,5].filter(function(t){return t===s.status}).length?a("div",{staticClass:"btn baodan"},[t._v("电子保单")]):t._e(),[5,6].filter(function(t){return t===s.status}).length?a("div",{staticClass:"btn againPay",on:{click:function(a){return t.handleToPay(s)}}},[t._v("再次购买")]):t._e(),[4,5].filter(function(t){return t===s.status}).length?a("div",{staticClass:"btn toSettle"},[t._v("申请理赔")]):t._e(),0===s.status?a("div",{staticClass:"btn toPay",on:{click:function(a){return t.handleToPay(s)}}},[t._v("立即支付")]):t._e(),[7,8].filter(function(t){return t===s.status}).length?a("div",{staticClass:"btn rePay",on:{click:function(a){return t.handleToPay(s)}}},[t._v("重新支付")]):t._e(),a("div",{staticClass:"btn toDetail",on:{click:function(a){return t.goDetail(s)}}},[t._v("查看详情")])])]),a("div",{staticClass:"msg"},[a("div",{staticClass:"ttl",domProps:{textContent:t._s(s.name)}}),a("div",{staticClass:"dl"},[t._v("被保险人："+t._s(s.relation_info.name))]),a("div",{staticClass:"dl"},[t._v("创建时间："+t._s(s.create_time))]),s.relation_info.name?a("div",{staticClass:"dl"},[t._v("保单号: "+t._s(s.sn))]):t._e()])])])}),0)]):t._e()},i=[],n={props:{message:{type:Array,required:!0}},data:function(){return{baseUrl:"".concat("http://7qi3n5.natappfree.cc")}},methods:{goDetail:function(t){this.$router.push({path:"/37duc/personCenter/orderDetail/".concat(t.id),query:{orderId:t.id}})},handleToPay:function(t){this.$router.push({query:{sn:t.sn},path:"/37duc/product/orderConfirm/"})},status:function(t){var s;switch(t){case 0:s="待支付";break;case 1:s="已支付";break;case 2:s="已承保";break;case 3:s="已出单";break;case 4:s="保障中";break;case 5:s="已失效";break;case 6:s="承保失败";break;case 7:s="已取消";break;case 8:s="支付失败";break}return s}}},c=n,r=(a("ef2b"),a("2877")),o=Object(r["a"])(c,e,i,!1,null,"e668b274",null);s["a"]=o.exports},"854f":function(t,s,a){"use strict";var e=a("fd41"),i=a.n(e);i.a},a221:function(t,s,a){},a9dd:function(t,s,a){"use strict";var e=a("a221"),i=a.n(e);i.a},c640:function(t,s,a){"use strict";var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return t.total&&t.pages>0?a("div",{staticClass:"Pagination clearfix"},[a("div",{staticClass:"pre",class:{dis:t.ownPage-1<1},on:{click:function(s){return t.handleClick(t.ownPage-1)}}},[a("div",{staticClass:"icon-box"},[t._v("\n      上一页\n    ")])]),a("div",{staticClass:"num",class:{now:1===t.ownPage},on:{click:function(s){return t.handleClick(1)}}},[a("span",{staticClass:"num-txt"},[t._v("1")])]),t.ellipsis[0]?a("div",{staticClass:"num es"},[a("span",{staticClass:"ellipsis"},[t._v("...")])]):t._e(),t._l(t.showNums,function(s,e){return a("div",{staticClass:"num",class:{now:t.ownPage===s},on:{click:function(a){return t.handleClick(s)}}},[a("span",{staticClass:"num-txt"},[t._v(t._s(s))])])}),t.ellipsis[1]?a("div",{staticClass:"num es"},[a("span",{staticClass:"ellipsis"},[t._v("...")])]):t._e(),t.pages>1?a("div",{staticClass:"num",class:{now:t.ownPage===t.pages},on:{click:function(s){return t.handleClick(t.pages)}}},[a("span",{staticClass:"num-txt"},[t._v(t._s(t.pages))])]):t._e(),a("div",{staticClass:"next",class:{dis:t.ownPage+1>t.pages},on:{click:function(s){return t.handleClick(t.ownPage+1)}}},[a("div",{staticClass:"icon-box"},[t._v("\n      下一页\n    ")])])],2):t._e()},i=[],n=(a("c5f6"),{props:{page:{type:Number,default:function(){return 1}},total:{type:Number,default:110},limit:{type:Number,default:10}},data:function(){return{btn_limit:5,threshold:10,ownPage:1}},computed:{pages:function(){return Math.ceil(this.total/this.limit)},showNums:function(){var t=[],s=[];if(this.pages<=this.threshold)t=[2,this.pages-1];else{var a=this.btn_limit/2;this.ownPage<=a+1.5?t=[2,this.btn_limit]:this.ownPage>=this.pages-a-1?t=[this.pages-this.btn_limit+1,this.pages-1]:(a=Math.ceil(a),t=[this.ownPage-a+1,this.ownPage-a+this.btn_limit])}for(var e=t[0];e<=t[1];e++)s.push(e);return s},ellipsis:function(){return[this.showNums[0]&&2!==this.showNums[0],this.showNums[this.showNums.length-1]&&this.showNums[this.showNums.length-1]!==this.pages-1]}},watch:{page:function(t){this.ownPage=t}},mounted:function(){this.ownPage=this.page},methods:{handleClick:function(t){if(!(t<1||t>this.pages||this.ownPage==t)){var s=this.ownPage;this.ownPage=t,this.$emit("handleChange",t,s),console.log(t,s)}}}}),c=n,r=(a("fa70"),a("2877")),o=Object(r["a"])(c,e,i,!1,null,"16b2597a",null);s["a"]=o.exports},e714:function(t,s,a){"use strict";a.r(s);var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"wrap"},[a("div",{staticClass:"listBox"},[a("TheCompiler",{attrs:{tabs:t.tabs},on:{changeTab:t.handleChangeTab}}),a("TheOrderList",{attrs:{message:t.filtermessage}}),t.noItem?a("div",{staticClass:"nullmessage"},[a("Null")],1):t._e()],1),t.filtertotal?a("div",{staticClass:"ThePaginationBar"},[a("ThePaginationBar",{attrs:{page:t.filterpage,total:t.filtertotal,limit:t.limit},on:{handleChange:t.handlePageChange}})],1):t._e()])},i=[],n=(a("ac6a"),a("f499")),c=a.n(n),r=(a("7514"),a("cebc")),o=a("8087"),l=a("0f3f"),u=a("c640"),h=function(){var t=this,s=t.$createElement;t._self._c;return t._m(0)},d=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"null"},[e("div",{staticClass:"img"},[e("img",{attrs:{src:a("6d5d")}}),e("span",[t._v("该类别下暂无订单")])])])}],f={data:function(){return{}}},g=f,v=(a("2588"),a("2877")),p=Object(v["a"])(g,h,d,!1,null,"0c27c644",null),m=p.exports,b=a("2f62"),C={data:function(){return{tabs:[{tabtxt:"未完成",active:!1,status:"0"},{tabtxt:"保障中",active:!0,status:"4"},{tabtxt:"全部",active:!1,status:""}],page:{},total:{},limit:5,lists:{},noItem:!1}},methods:Object(r["a"])({handleChangeTab:function(t){this.tabs.length&&(this.tabs.find(function(s){return s!==t&&s.active}).active=!1,t.active=!0,this.getMessage())},handlePageChange:function(t){this.$set(this.page,"status".concat(this.status),t),this.getMessage()},getMessage:function(){var t=this;this.noItem=!1,this.$api.personCenter.getIndexOrderList({page:this.filterpage,limit:this.limit,status:this.status}).then(function(s){t.renderList(s)})},renderList:function(t){var s=[],a=0;try{s=t.data.dataGrid.data}catch(e){console.error(e)}try{a=t.data.total}catch(e){console.error(e)}this.$set(this.lists,"status".concat(this.status),s),this.$set(this.total,"status".concat(this.status),a),this.noItem=!s.length,this.SET_ORDER_LIST_PAGE(c()({page:this.filterpage,status:this.status})),console.log({page:this.filterpage,status:this.status})}},Object(b["d"])(["SET_ORDER_LIST_PAGE"])),computed:Object(r["a"])({status:function(){return this.tabs.find(function(t){return t.active})?this.tabs.find(function(t){return t.active}).status:""},filtermessage:function(){return this.lists["status".concat(this.status)]||[]},filterpage:function(){return this.page["status".concat(this.status)]||1},filtertotal:function(){return this.total["status".concat(this.status)]||0}},Object(b["c"])(["orderListPage"])),components:{TheOrderList:o["a"],TheCompiler:l["a"],ThePaginationBar:u["a"],Null:m},mounted:function(){var t=JSON.parse(this.orderListPage);console.log(this.orderListPage),void 0!==t.page&&void 0!==t.status&&(this.tabs.forEach(function(s){console.log("active",s.status==t.status),s.active=s.status==t.status}),this.$set(this.page,"status".concat(this.status),t.page)),this.getMessage()}},_=C,A=(a("854f"),Object(v["a"])(_,e,i,!1,null,"484a71b8",null));s["default"]=A.exports},ef2b:function(t,s,a){"use strict";var e=a("1a08"),i=a.n(e);i.a},fa70:function(t,s,a){"use strict";var e=a("7b36"),i=a.n(e);i.a},fd41:function(t,s,a){}}]);
//# sourceMappingURL=chunk-3bdc42b6.6ae76298.js.map