(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-418f8747"],{"0e28":function(t,s,a){"use strict";var e=a("6a44"),i=a.n(e);i.a},"19b2":function(t,s,a){"use strict";var e=a("5c88"),i=a.n(e);i.a},"5c88":function(t,s,a){},"6a44":function(t,s,a){},"723c":function(t,s,a){"use strict";a.r(s);var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"detail"},[a("BreadcrumbNavigation"),t.isShow?[a("div",{staticClass:"orderMsg clearfix"},[a("div",{staticClass:"fl tbr"},[a("div",{staticClass:"gray-line-block"},[a("div",{staticClass:"title"},[t._v("\n\t\t\t\t\t\t订单编号: "+t._s(t.detail.order_sn)+"\n\t\t\t\t\t\t"),a("div",{staticClass:"fr status"},[t._v(t._s(t.groupStatus(t.detail.status)))])])]),a("div",{staticClass:"tbrMsg"},[a("p",{staticClass:"p1 text-hidden"},[t._v(t._s(t.detail.plan_name))]),a("p",{staticClass:"p2 text-hidden"},[t._v("投保人: "+t._s(t.detail.companyName))]),a("p",{staticClass:"p2 text-hidden"},[t._v("保障期间: "+t._s(t.detail.policy_effective_date)+" 至 "+t._s(t.detail.policy_expiration_date))]),a("p",{staticClass:"p2 text-hidden"},[t._v("保单号: "+t._s(t.detail.policy_num))]),a("div",{staticClass:"logo"},[t.detail.companyLogo?a("img",{attrs:{src:t.baseUrl+t.detail.companyLogo}}):t._e()])])]),a("div",{staticClass:"fr btb"},[t._m(0),a("div",{staticClass:"btbMsg"},[a("p",{staticClass:"p2 text-hidden"},[a("span",{staticClass:"k"},[t._v("姓名: ")]),t._v(t._s(t.detail.member.name))]),a("p",{staticClass:"p2 text-hidden"},[a("span",{staticClass:"k"},[t._v("性别: ")]),t._v(t._s(0==t.detail.member.genderStr?"女":"男"))]),a("p",{staticClass:"p2 text-hidden"},[a("span",{staticClass:"k"},[t._v("证件类型: ")]),t._v(t._s(t.idType(t.detail.member.idType)))]),a("p",{staticClass:"p2 text-hidden"},[a("span",{staticClass:"k"},[t._v("证件号码: ")]),t._v(t._s(t.detail.member.id_num))]),a("p",{staticClass:"p2 text-hidden"},[a("span",{staticClass:"k"},[t._v("出生日期: ")]),t._v(t._s(t.detail.member.birth.split(" ")[0]))])])])]),a("div",{directives:[{name:"show",rawName:"v-show",value:t.guarantee.length,expression:"guarantee.length"}],staticClass:"function"},[t._m(1),a("div",{staticClass:"content"},[a("div",{staticClass:"guarantee-table-box"},[a("table",{staticClass:"guarantee-table"},[t._m(2),a("tbody",t._l(t.guarantee,function(s,e){return a("tr",[a("td",{domProps:{textContent:t._s(s.item)}}),a("td",{domProps:{textContent:t._s(s.quota)}}),a("td",{staticClass:"something",domProps:{textContent:t._s(s.description)}})])}),0)])])])]),a("div",{directives:[{name:"show",rawName:"v-show",value:t.detail.claim_flow,expression:"detail.claim_flow"}],staticClass:"settle"},[t._m(3),a("div",{staticClass:"content"},[a("div",{staticClass:"content-inner"},[a("div",{domProps:{innerHTML:t._s(t.detail.claim_flow)}})])])]),a("div",{directives:[{name:"show",rawName:"v-show",value:t.detail.prompt_info,expression:"detail.prompt_info"}],staticClass:"tipMsg"},[a("div",{staticClass:"h"},[t._v("提示信息")]),a("div",{staticClass:"content",domProps:{innerHTML:t._s(t.detail.prompt_info)}})])]:[t._v("数据获取中。。。")]],2)},i=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"red-line-block"},[a("div",{staticClass:"title"},[t._v("被保险人")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"red-line-block"},[a("div",{staticClass:"title"},[t._v("保障方案")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("thead",[a("tr",[a("th",{attrs:{width:"160px"}},[t._v("保障项目")]),a("th",{attrs:{width:"140px"}},[t._v("保障金额")]),a("th",{attrs:{width:"736px"}},[t._v("保障说明")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"blue-line-block"},[a("div",{staticClass:"title"},[t._v("理赔流程")])])}],n=a("0649"),c=a.n(n),l=a("badb"),r=a.n(l),d=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"BreadcrumbNavigation"},[a("div",{staticClass:"innerWrap"},[a("ul",{staticClass:"clearfix"},[a("li",{staticClass:"fl"},[a("span",{on:{click:function(s){return t.handle("/37duc/personCenter")}}},[t._v("个人中心")])]),a("li",{staticClass:"fl"},[t._v(">")]),a("li",{staticClass:"fl"},[a("span",{on:{click:function(s){return t.handle("/37duc/personCenter/main/groupOrder")}}},[t._v("我的团险")])]),a("li",{staticClass:"fl"},[t._v(">")]),t._m(0)])])])},o=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("li",{staticClass:"fl black"},[a("span",[t._v("团险订单详情")])])}],u={data:function(){return{}},methods:{handle:function(t){this.$router.push(t)}},mounted:function(){console.log(this.$route.matched)}},v=u,_=(a("0e28"),a("fc05")),p=Object(_["a"])(v,d,o,!1,null,"6d4862c1",null),m=p.exports,h={components:{BreadcrumbNavigation:m},data:function(){return{detail:{},isShow:!1,baseUrl:"".concat("http://7qi3n5.natappfree.cc")}},created:function(){var t=this;this.$api.personCenter.getGroupInsuranceDetail({id:this.$route.params.id}).then(function(s){console.log(s),1===s.code&&(t.detail=JSON.parse(r()(s)).data),t.isShow=!0})},computed:{guarantee:function(){return JSON.parse(this.detail.guarantee?this.detail.guarantee.details:"[]")}},methods:{groupStatus:function(t){var s;switch(t){case 0:s="未完成";break;case 1:s="待支付";break;case 2:s="已出单";break;case 3:s="保障中";break;case 4:s="已失效";break;case 5:s="已退保";break;case 6:s="已取消";break}return s},idType:function(t){var s;switch(t=c()(t),t){case 0:s="身份证";break;case 1:s="港澳通行证";break;case 2:s="台胞证";break;case 3:s="护照";break}return s}}},C=h,f=(a("19b2"),Object(_["a"])(C,e,i,!1,null,"f9897ccc",null));s["default"]=f.exports}}]);
//# sourceMappingURL=chunk-418f8747.36ff4816.js.map