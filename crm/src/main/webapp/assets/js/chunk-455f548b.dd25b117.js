(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-455f548b"],{"3d27":function(t,n,o){"use strict";o.r(n);var i=function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("div",{staticClass:"protocal-list layout"},[o("p",{staticClass:"title"},[t._v(t._s(this.$route.query.productName))]),o("p",{staticClass:"sub-title"},[t._v("主条款")]),o("ul",t._l(this.list,function(n,i){return o("li",{key:i,on:{click:function(o){return t.goProtocal(n)}}},[o("span",[t._v(t._s(n.name))]),n.name?o("i"):t._e()])}),0)])},a=[],c={name:"TheProtocal",data:function(){return{list:[]}},mounted:function(){this.getProtocal()},methods:{goProtocal:function(t){window.open("".concat("http://7qi3n5.natappfree.cc","/").concat(t.url))},getProtocal:function(){var t=this,n={id:this.$route.query.productId};this.$api.product.getProtocalList(n).then(function(n){t.list=n.data})}}},e=c,s=(o("89a0"),o("2877")),u=Object(s["a"])(e,i,a,!1,null,"35344e31",null);n["default"]=u.exports},"89a0":function(t,n,o){"use strict";var i=o("934b"),a=o.n(i);a.a},"934b":function(t,n,o){}}]);
//# sourceMappingURL=chunk-455f548b.dd25b117.js.map