(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1f3cd3c4"],{"67e7":function(t,s,a){},"723c":function(t,s,a){"use strict";a.r(s);var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"detail"},[a("BreadcrumbNavigation"),t.isShow?[a("div",{staticClass:"orderMsg clearfix"},[a("div",{staticClass:"fl tbr"},[a("div",{staticClass:"gray-line-block"},[a("div",{staticClass:"title"},[t._v("\n\t\t\t\t\t\t订单编号: "+t._s(t.detail.order_sn)+"\n\t\t\t\t\t\t"),a("div",{staticClass:"fr status"},[t._v(t._s(t.groupStatus(t.detail.status)))])])]),a("div",{staticClass:"tbrMsg"},[a("p",{staticClass:"p1 text-hidden"},[t._v(t._s(t.detail.plan_name))]),a("p",{staticClass:"p2 text-hidden"},[t._v("投保单位: "+t._s(t.detail.companyName))]),a("p",{staticClass:"p2 text-hidden"},[t._v("保障期间: "+t._s(t.detail.policy_effective_date)+" 至 "+t._s(t.detail.policy_expiration_date))]),a("p",{staticClass:"p2 text-hidden"},[t._v("保单号: "+t._s(t.detail.policy_num))]),a("div",{staticClass:"logo"},[t.detail.companyLogo?a("img",{attrs:{src:t.baseUrl+t.detail.companyLogo}}):t._e()])])]),a("div",{staticClass:"fr btb"},[t._m(0),a("div",{staticClass:"btbMsg"},[a("p",{staticClass:"p2 text-hidden"},[a("span",{staticClass:"k"},[t._v("姓名: ")]),t._v(t._s(t.detail.member.name))]),a("p",{staticClass:"p2 text-hidden"},[a("span",{staticClass:"k"},[t._v("性别: ")]),t._v(t._s(t.detail.member.genderStr))]),a("p",{staticClass:"p2 text-hidden"},[a("span",{staticClass:"k"},[t._v("证件类型: ")]),t._v(t._s(t.detail.member.idTypeStr))]),a("p",{staticClass:"p2 text-hidden"},[a("span",{staticClass:"k"},[t._v("证件号码: ")]),t._v(t._s(t.detail.member.id_num))]),a("p",{staticClass:"p2 text-hidden"},[a("span",{staticClass:"k"},[t._v("出生日期: ")]),t._v(t._s(t.detail.member.birth.split(" ")[0]))])])])]),a("div",{directives:[{name:"show",rawName:"v-show",value:t.guarantee.length,expression:"guarantee.length"}],staticClass:"function"},[t._m(1),a("div",{staticClass:"content"},[a("div",{staticClass:"guarantee-table-box"},[a("table",{staticClass:"guarantee-table"},[t._m(2),a("tbody",t._l(t.guarantee,function(s,e){return a("tr",[a("td",{domProps:{textContent:t._s(s.item)}}),a("td",{domProps:{textContent:t._s(s.quota)}}),a("td",{staticClass:"something",domProps:{textContent:t._s(s.description)}})])}),0)])])])]),a("div",{directives:[{name:"show",rawName:"v-show",value:t.detail.claim_flow,expression:"detail.claim_flow"}],staticClass:"settle"},[t._m(3),a("div",{staticClass:"content"},[a("div",{staticClass:"content-inner"},[a("div",{domProps:{innerHTML:t._s(t.detail.claim_flow)}})])])]),a("div",{directives:[{name:"show",rawName:"v-show",value:t.detail.prompt_info,expression:"detail.prompt_info"}],staticClass:"tipMsg"},[a("div",{staticClass:"h"},[t._v("提示信息")]),a("div",{staticClass:"content",domProps:{innerHTML:t._s(t.detail.prompt_info)}})])]:[t._v("数据获取中。。。")]],2)},i=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"red-line-block"},[a("div",{staticClass:"title"},[t._v("被保险人")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"red-line-block"},[a("div",{staticClass:"title"},[t._v("保障方案")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("thead",[a("tr",[a("th",{attrs:{width:"160px"}},[t._v("保障项目")]),a("th",{attrs:{width:"140px"}},[t._v("保障金额")]),a("th",{attrs:{width:"736px"}},[t._v("保障说明")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"blue-line-block"},[a("div",{staticClass:"title"},[t._v("理赔流程")])])}],n=a("f499"),l=a.n(n),c=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"BreadcrumbNavigation"},[a("div",{staticClass:"innerWrap"},[a("ul",{staticClass:"clearfix"},[a("li",{staticClass:"fl"},[a("span",{on:{click:function(s){return t.handle("/37duc/personCenter")}}},[t._v("个人中心")])]),a("li",{staticClass:"fl"},[t._v(">")]),a("li",{staticClass:"fl"},[a("span",{on:{click:function(s){return t.handle("/37duc/personCenter")}}},[t._v("我的团险")])]),a("li",{staticClass:"fl"},[t._v(">")]),t._m(0)])])])},r=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("li",{staticClass:"fl black"},[a("span",[t._v("团险订单详情")])])}],d={data:function(){return{}},methods:{handle:function(t){this.$router.push(t)}}},o=d,v=(a("8924"),a("2877")),_=Object(v["a"])(o,c,r,!1,null,"ff1d5594",null),u=_.exports,p={components:{BreadcrumbNavigation:u},data:function(){return{detail:{},isShow:!1,baseUrl:"".concat("http://7qi3n5.natappfree.cc")}},created:function(){var t=this;this.$api.personCenter.getGroupInsuranceDetail({id:this.$route.params.id}).then(function(s){console.log(s),1===s.code&&(t.detail=JSON.parse(l()(s)).data),t.isShow=!0})},computed:{guarantee:function(){return JSON.parse(this.detail.guarantee?this.detail.guarantee.details:"[]")}},methods:{groupStatus:function(t){var s;switch(t){case 0:s="未完成";break;case 1:s="待支付";break;case 2:s="已出单";break;case 3:s="保障中";break;case 4:s="已失效";break;case 5:s="已退保";break;case 6:s="已取消";break}return s}}},m=p,C=(a("7ec2"),Object(v["a"])(m,e,i,!1,null,"49767b24",null));s["default"]=C.exports},"7d6c":function(t,s,a){},"7ec2":function(t,s,a){"use strict";var e=a("67e7"),i=a.n(e);i.a},8924:function(t,s,a){"use strict";var e=a("7d6c"),i=a.n(e);i.a}}]);
//# sourceMappingURL=chunk-1f3cd3c4.3dde718d.js.map