(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-095e2cc6"],{"0468":function(t,e,n){"use strict";var i=n("d7ad"),r=n.n(i);r.a},"0738":function(t,e,n){var i=n("c6fa"),r=n("1129"),s=function(t,e){if(r(t),!i(e)&&null!==e)throw TypeError(e+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,e,i){try{i=n("b2e7")(Function.call,n("0c25").f(Object.prototype,"__proto__").set,2),i(t,[]),e=!(t instanceof Array)}catch(r){e=!0}return function(t,n){return s(t,n),e?t.__proto__=n:i(t,n),t}}({},!1):void 0),check:s}},"0c25":function(t,e,n){var i=n("1c81"),r=n("86e5"),s=n("916d"),a=n("786f"),c=n("eb32"),o=n("2f61"),u=Object.getOwnPropertyDescriptor;e.f=n("3016")?u:function(t,e){if(t=s(t),e=a(e,!0),o)try{return u(t,e)}catch(n){}if(c(t,e))return r(!i.f.call(t,e),t[e])}},"23d3":function(t,e,n){var i=n("a38c"),r=i.JSON||(i.JSON={stringify:JSON.stringify});t.exports=function(t){return r.stringify.apply(r,arguments)}},"46b5":function(t,e,n){"use strict";var i=n("62ec"),r=n("eb32"),s=n("8477"),a=n("4d8d"),c=n("786f"),o=n("ac68"),u=n("f5c1").f,f=n("0c25").f,l=n("7847").f,d=n("e46f").trim,p="Number",v=i[p],h=v,_=v.prototype,m=s(n("aff3")(_))==p,b="trim"in String.prototype,g=function(t){var e=c(t,!1);if("string"==typeof e&&e.length>2){e=b?e.trim():d(e,3);var n,i,r,s=e.charCodeAt(0);if(43===s||45===s){if(n=e.charCodeAt(2),88===n||120===n)return NaN}else if(48===s){switch(e.charCodeAt(1)){case 66:case 98:i=2,r=49;break;case 79:case 111:i=8,r=55;break;default:return+e}for(var a,o=e.slice(2),u=0,f=o.length;u<f;u++)if(a=o.charCodeAt(u),a<48||a>r)return NaN;return parseInt(o,i)}}return+e};if(!v(" 0o1")||!v("0b1")||v("+0x1")){v=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof v&&(m?o(function(){_.valueOf.call(n)}):s(n)!=p)?a(new h(g(e)),n,v):g(e)};for(var C,y=n("3016")?u(h):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),x=0;y.length>x;x++)r(h,C=y[x])&&!r(v,C)&&l(v,C,f(h,C));v.prototype=_,_.constructor=v,n("3741")(i,p,v)}},"4d8d":function(t,e,n){var i=n("c6fa"),r=n("0738").set;t.exports=function(t,e,n){var s,a=e.constructor;return a!==n&&"function"==typeof a&&(s=a.prototype)!==n.prototype&&i(s)&&r&&r(t,s),t}},"4f23":function(t,e,n){},"61e5":function(t,e,n){"use strict";var i=n("92aa"),r=n("6ef6")(5),s="find",a=!0;s in[]&&Array(1)[s](function(){a=!1}),i(i.P+i.F*a,"Array",{find:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}}),n("f344")(s)},6478:function(t,e,n){"use strict";var i=n("4f23"),r=n.n(i);r.a},"6ef6":function(t,e,n){var i=n("b2e7"),r=n("c123"),s=n("b343"),a=n("512f"),c=n("7e31");t.exports=function(t,e){var n=1==t,o=2==t,u=3==t,f=4==t,l=6==t,d=5==t||l,p=e||c;return function(e,c,v){for(var h,_,m=s(e),b=r(m),g=i(c,v,3),C=a(b.length),y=0,x=n?p(e,C):o?p(e,0):void 0;C>y;y++)if((d||y in b)&&(h=b[y],_=g(h,y,m),t))if(n)x[y]=_;else if(_)switch(t){case 3:return!0;case 5:return h;case 6:return y;case 2:x.push(h)}else if(f)return!1;return l?-1:u||f?f:x}}},"70b0":function(t,e,n){},"7a45":function(t,e,n){"use strict";var i=n("70b0"),r=n.n(i);r.a},"7e31":function(t,e,n){var i=n("a01e");t.exports=function(t,e){return new(i(t))(e)}},"9bdb":function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},a01e:function(t,e,n){var i=n("c6fa"),r=n("c9b2"),s=n("0c53")("species");t.exports=function(t){var e;return r(t)&&(e=t.constructor,"function"!=typeof e||e!==Array&&!r(e.prototype)||(e=void 0),i(e)&&(e=e[s],null===e&&(e=void 0))),void 0===e?Array:e}},badb:function(t,e,n){t.exports=n("23d3")},c9b2:function(t,e,n){var i=n("8477");t.exports=Array.isArray||function(t){return"Array"==i(t)}},d0fc:function(t,e,n){},d66e:function(t,e,n){"use strict";var i=n("d0fc"),r=n.n(i);r.a},d7ad:function(t,e,n){},e46f:function(t,e,n){var i=n("92aa"),r=n("8f72"),s=n("ac68"),a=n("9bdb"),c="["+a+"]",o="​",u=RegExp("^"+c+c+"*"),f=RegExp(c+c+"*$"),l=function(t,e,n){var r={},c=s(function(){return!!a[t]()||o[t]()!=o}),u=r[t]=c?e(d):a[t];n&&(r[n]=u),i(i.P+i.F*c,"String",r)},d=l.trim=function(t,e){return t=String(r(t)),1&e&&(t=t.replace(u,"")),2&e&&(t=t.replace(f,"")),t};t.exports=l},ec86:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"order-content"},[n("TheCompiler",{attrs:{tabs:t.tabs},on:{changeTabs:t.handleChangeTabs}}),n("TheOrderList",{attrs:{orderList:t.filterOrderList}}),n("ThePaginationBar")],1)},r=[],s=n("badb"),a=n.n(s),c=(n("61e5"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tabs clearfix"},t._l(t.tabs,function(e,i){return n("div",{staticClass:"tab-item fl",class:{active:e.active},domProps:{textContent:t._s(e.tabtxt)},on:{click:function(n){return t.handleClick(e)}}})}),0)}),o=[],u={props:{tabs:{type:Array,required:!0}},methods:{handleClick:function(t){t.active||this.$emit("changeTabs",t)}},data:function(){return{}}},f=u,l=(n("0468"),n("fc05")),d=Object(l["a"])(f,c,o,!1,null,"f462a9a4",null),p=d.exports,v=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"orderList"},t._l(t.orderList,function(e,i){return n("div",{staticClass:"order-item"},[n("div",{staticClass:"orderId clearfix"},[n("div",{staticClass:"orderSn fl"},[t._v("\n\t\t\t\t订单编号: "+t._s(e.order_sn)+"\n\t\t\t")]),n("div",{staticClass:"orderStatus fr"},[t._v("\n\t\t\t\t"+t._s(2==e.status?"已出单":3==e.status?"保障中":"")+"\n\t\t\t")])]),n("div",{staticClass:"order-content"},[n("div",{staticClass:"content-text"},[n("div",{staticClass:"title",domProps:{textContent:t._s(e.plan_name)}}),n("div",{staticClass:"msg"},[t._v("投保单位: "+t._s(e.companyName))]),n("div",{staticClass:"msg"},[t._v("被保险人: 张某")]),n("div",{staticClass:"msg"},[t._v("保障期间: "+t._s(e.policy_effective_date)+" 至 "+t._s(e.policy_expiration_date))])]),t._m(0,!0),n("div",{staticClass:"btn-contair"},[3==e.status?n("div",{staticClass:"toSettlement"},[t._v("申请理赔")]):t._e(),n("div",{staticClass:"toDetail",on:{click:function(n){return t.handleClickToDetail(e)}}},[t._v("查看详情")])])])])}),0)},h=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"logo"},[n("img",{attrs:{alt:""}})])}],_={props:{orderList:{type:Array,required:!0}},methods:{handleClickToDetail:function(t){this.$router.push("/37duc/personCenter/detail/"+t.id)}},data:function(){return{}}},m=_,b=(n("6478"),Object(l["a"])(m,v,h,!1,null,"792e041a",null)),g=b.exports,C=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.total?n("div",{staticClass:"Pagination clearfix"},[t._m(0),t._m(1),t.ellipsis[0]?n("div",{staticClass:"num"},[n("span",{staticClass:"num-txt"},[t._v("...")])]):t._e(),t._l(t.showNums,function(e,i){return n("div",{staticClass:"num"},[n("span",{staticClass:"num-txt"},[t._v(t._s(e))])])}),t.ellipsis[1]?n("div",{staticClass:"num"},[n("span",{staticClass:"num-txt"},[t._v("...")])]):t._e(),t.pages>1?n("div",{staticClass:"num"},[n("span",{staticClass:"num-txt"},[t._v(t._s(t.pages))])]):t._e(),t._m(2)],2):t._e()},y=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"pre dis"},[n("div",{staticClass:"icon-box"},[n("img",{attrs:{src:""}})])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"num"},[n("span",{staticClass:"num-txt"},[t._v("1")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"next"},[n("div",{staticClass:"icon-box"},[n("img",{attrs:{src:""}})])])}],x=(n("dcfb"),n("46b5"),{props:{page:{type:Number,default:function(){return 5}},total:{type:Number,default:66},limit:{type:Number,default:6}},computed:{pages:function(){return Math.ceil(this.total/this.limit)},showNums:function(){var t=[];if(this.pages<=10)t=[2,this.pages-1];else{var e=this.btn_limit-Math.floor(this.btn_limit/2);this.page<=e+1?t.push=[2,this.btn_limit]:this.page>=this.pages-this.btn_limit?t.push=[this.pages-this.btn_limit,this.pages-1]:t.push=[this.page-e,this.page-e+this.btn_limit]}return t.forEach(function(t){for(var e=[],n=t[0];n<t[1];n++)e.push(n)})},ellipsis:function(){return[2==this.showNums[0],this.showNums[showNums.length-1]==this.pages-1]}},data:function(){return{btn_limit:5,show_all_threshold:10}}}),N=x,E=(n("d66e"),Object(l["a"])(N,C,y,!1,null,"71f43570",null)),O=E.exports,A={data:function(){return{tabs:[{tabtxt:"已出单",active:!1,status:2},{tabtxt:"保障中",active:!1,status:3},{tabtxt:"全部",active:!0,status:0}],orderList:[]}},components:{TheCompiler:p,TheOrderList:g,ThePaginationBar:O},methods:{handleChangeTabs:function(t){this.tabs.find(function(t){return t.active}).active=!1,t.active=!0}},computed:{filterOrderList:function(){var t=this.tabs.find(function(t){return t.active}).status;return this.orderList.filter(function(e){return 0===t||e.status==t})}},created:function(){var t=this;this.$api.personCenter.getGroupInsuranceList({page:1,limit:10}).then(function(e){if(console.log(e),1===e.code){var n=[];n=JSON.parse(a()(e.data.data)),t.orderList=n}})}},I=A,w=(n("7a45"),Object(l["a"])(I,i,r,!1,null,"5f7588ae",null));e["default"]=w.exports},f5c1:function(t,e,n){var i=n("0934"),r=n("119e").concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return i(t,r)}}}]);
//# sourceMappingURL=chunk-095e2cc6.2758ae33.js.map