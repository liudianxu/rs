(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5a582fb8"],{"0e28":function(t,a,s){"use strict";var e=s("4af1"),i=s.n(e);i.a},"4af1":function(t,a,s){},"4cdc":function(t,a,s){},"723c":function(t,a,s){"use strict";s.r(a);var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"detail"},[s("BreadcrumbNavigation"),t.isShow?[s("div",{staticClass:"orderMsg clearfix"},[s("div",{staticClass:"fl tbr"},[s("div",{staticClass:"gray-line-block"},[s("div",{staticClass:"title"},[t._v("\n\t\t\t\t\t\t订单编号: "+t._s(t.detail.order_sn)+"\n\t\t\t\t\t\t"),s("div",{staticClass:"fr status"},[t._v(t._s(t.groupStatus(t.detail.status)))])])]),s("div",{staticClass:"tbrMsg"},[s("p",{staticClass:"p1 text-hidden"},[t._v(t._s(t.detail.plan_name))]),s("p",{staticClass:"p2 text-hidden"},[t._v("投保人: "+t._s(t.detail.companyName))]),s("p",{staticClass:"p2 text-hidden"},[t._v("保障期间: "+t._s(t.detail.policy_effective_date)+" 至 "+t._s(t.detail.policy_expiration_date))]),s("p",{staticClass:"p2 text-hidden"},[t._v("保单号: "+t._s(t.detail.policy_num))]),s("div",{staticClass:"logo"},[t.detail.companyLogo?s("img",{attrs:{src:t.baseUrl+t.detail.companyLogo}}):t._e()])])]),s("div",{staticClass:"fr btb"},[t._m(0),s("div",{staticClass:"btbMsg"},[s("p",{staticClass:"p2 text-hidden"},[s("span",{staticClass:"k"},[t._v("姓名: ")]),t._v(t._s(t.detail.member.name))]),s("p",{staticClass:"p2 text-hidden"},[s("span",{staticClass:"k"},[t._v("性别: ")]),t._v(t._s(0==t.detail.member.gender?"女":"男"))]),s("p",{staticClass:"p2 text-hidden"},[s("span",{staticClass:"k"},[t._v("身份证号: ")]),t._v(t._s(t.detail.member.id_num))]),s("p",{staticClass:"p2 text-hidden"},[s("span",{staticClass:"k"},[t._v("出生日期: ")]),t._v(t._s(t.detail.member.birth.split(" ")[0]))])])])]),s("div",{directives:[{name:"show",rawName:"v-show",value:t.guarantee.length,expression:"guarantee.length"}],staticClass:"function"},[t._m(1),s("div",{staticClass:"content"},[s("div",{staticClass:"guarantee-table-box"},[s("table",{staticClass:"guarantee-table"},[t._m(2),s("tbody",t._l(t.guarantee,function(a,e){return s("tr",[s("td",{domProps:{textContent:t._s(a.item)}}),s("td",{domProps:{textContent:t._s(a.quota)}}),s("td",{staticClass:"something",domProps:{textContent:t._s(a.description)}})])}),0)])])])]),s("div",{directives:[{name:"show",rawName:"v-show",value:t.detail.claim_flow,expression:"detail.claim_flow"}],staticClass:"settle"},[t._m(3),s("div",{staticClass:"content"},[s("div",{staticClass:"content-inner"},[s("div",{domProps:{innerHTML:t._s(t.detail.claim_flow)}})])])]),s("div",{directives:[{name:"show",rawName:"v-show",value:t.detail.prompt_info,expression:"detail.prompt_info"}],staticClass:"tipMsg"},[s("div",{staticClass:"h"},[t._v("提示信息")]),s("div",{staticClass:"content",domProps:{innerHTML:t._s(t.detail.prompt_info)}})])]:[t._v("数据获取中。。。")]],2)},i=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"red-line-block"},[s("div",{staticClass:"title"},[t._v("被保险人")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"red-line-block"},[s("div",{staticClass:"title"},[t._v("保障方案")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("thead",[s("tr",[s("th",{attrs:{width:"160px"}},[t._v("保障项目")]),s("th",{attrs:{width:"140px"}},[t._v("保障金额")]),s("th",{attrs:{width:"736px"}},[t._v("保障说明")])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"blue-line-block"},[s("div",{staticClass:"title"},[t._v("理赔流程")])])}],n=s("e814"),c=s.n(n),l=s("f499"),r=s.n(l),d=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"BreadcrumbNavigation"},[s("div",{staticClass:"innerWrap"},[s("ul",{staticClass:"clearfix"},[s("li",{staticClass:"fl"},[s("span",{on:{click:function(a){return t.handle("/37duc/personCenter")}}},[t._v("个人中心")])]),s("li",{staticClass:"fl"},[t._v(">")]),s("li",{staticClass:"fl"},[s("span",{on:{click:function(a){return t.handle("/37duc/personCenter/main/groupOrder")}}},[t._v("我的团险")])]),s("li",{staticClass:"fl"},[t._v(">")]),t._m(0)])])])},o=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("li",{staticClass:"fl black"},[s("span",[t._v("团险订单详情")])])}],u={data:function(){return{}},methods:{handle:function(t){this.$router.push(t)}},mounted:function(){console.log(this.$route.matched)}},v=u,_=(s("0e28"),s("2877")),p=Object(_["a"])(v,d,o,!1,null,"6d4862c1",null),m=p.exports,f={components:{BreadcrumbNavigation:m},data:function(){return{detail:{},isShow:!1,baseUrl:"".concat("http://43.254.47.195:9999")}},created:function(){var t=this;this.$api.personCenter.getGroupInsuranceDetail({id:this.$route.params.id}).then(function(a){console.log(a),1===a.code&&(t.detail=JSON.parse(r()(a)).data),t.isShow=!0})},computed:{guarantee:function(){return JSON.parse(this.detail.guarantee?this.detail.guarantee.details:"[]")}},methods:{groupStatus:function(t){var a;switch(t){case 0:a="未完成";break;case 1:a="待支付";break;case 2:a="已出单";break;case 3:a="保障中";break;case 4:a="已失效";break;case 5:a="已退保";break;case 6:a="已取消";break}return a},idType:function(t){var a;switch(t=c()(t),t){case 0:a="身份证";break;case 1:a="港澳通行证";break;case 2:a="台胞证";break;case 3:a="护照";break}return a}}},h=f,C=(s("e0da"),Object(_["a"])(h,e,i,!1,null,"4f35bf86",null));a["default"]=C.exports},e0da:function(t,a,s){"use strict";var e=s("4cdc"),i=s.n(e);i.a}}]);
//# sourceMappingURL=chunk-5a582fb8.5ccbaebe.js.map