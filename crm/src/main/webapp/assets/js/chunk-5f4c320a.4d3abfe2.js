(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5f4c320a"],{"11e9":function(t,e,a){var n=a("52a7"),i=a("4630"),s=a("6821"),r=a("6a99"),c=a("69a8"),o=a("c69a"),u=Object.getOwnPropertyDescriptor;e.f=a("9e1e")?u:function(t,e){if(t=s(t),e=r(e,!0),o)try{return u(t,e)}catch(a){}if(c(t,e))return i(!n.f.call(t,e),t[e])}},2167:function(t,e,a){"use strict";var n=a("d3b9"),i=a.n(n);i.a},"278f":function(t,e,a){"use strict";a.d(e,"a",function(){return c}),a.d(e,"c",function(){return o}),a.d(e,"b",function(){return u}),a.d(e,"e",function(){return l}),a.d(e,"d",function(){return d});var n=a("e814"),i=a.n(n),s=a("c1df"),r=a.n(s),c={methods:{dateFormat:function(t){return r()(t).format("YYYY-MM-DD")}}},o={methods:{getSexByName:function(t){return 1===t?"男":"女"}}},u={methods:{getRelation:function(t){switch(i()(t)){case 0:return"父亲";case 1:return"母亲";case 2:return"儿子";case 3:return"女儿";case 4:return"妻子";case 5:return"丈夫";case 6:return"本人";default:return"其他"}}}},l={methods:{orderStatus:function(t){switch(t){case 0:return"待支付";case 1:return"已支付";case 2:return"已承保";case 3:return"已出单";case 4:return"保障中";case 5:return"已失效";case 6:return"订单失败";case 7:return"已取消";case 8:return"支付失败"}}}},d={methods:{groupStatus:function(t){var e;switch(t){case 0:e="未完成";break;case 1:e="待支付";break;case 2:e="已出单";break;case 3:e="保障中";break;case 4:e="已失效";break;case 5:e="已退保";break;case 6:e="已取消";break}return e}}}},"2bab":function(t,e,a){t.exports=a.p+"assets/img/no_group.90305dcc.png"},"50ce":function(t,e,a){},5445:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"no-result",style:t.resultYs},[a("img",{attrs:{src:t.src,alt:""}}),a("p",{staticClass:"title"},[t._v(t._s(t.title))]),t.btnShow?a("div",{staticClass:"btn",on:{click:t.btnClick}},[t._v(t._s(t.btnText))]):t._e()])},i=[],s=(a("c5f6"),{props:{title:{type:String,default:""},src:{type:String,default:""},btnText:{type:String,default:""},absTop:{type:Number,default:0},btnShow:{type:Boolean,default:!1}},data:function(){return{}},computed:{resultYs:function(){return{top:this.absTop?this.absTop/100+"rem":0}}},methods:{btnClick:function(){this.$emit("handleClik")}}}),r=s,c=(a("82d1"),a("0c7c")),o=Object(c["a"])(r,n,i,!1,null,"528c7bbd",null);e["a"]=o.exports},"5dbc":function(t,e,a){var n=a("d3f4"),i=a("8b97").set;t.exports=function(t,e,a){var s,r=e.constructor;return r!==a&&"function"==typeof r&&(s=r.prototype)!==a.prototype&&n(s)&&i&&i(t,s),t}},"6cdf":function(t,e,a){"use strict";var n=a("50ce"),i=a.n(n);i.a},"76e0":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("guaranty-tab",{on:{changeTab:t.handleChangeTab}}),0===t.guarantyTabCur?a("div",{staticClass:"order-list"},[a("div",{ref:"wrapper",staticClass:"page-infinite-wrapper",style:{height:t.wrapperHeight+"px"}},[a("ul",{directives:[{name:"infinite-scroll",rawName:"v-infinite-scroll",value:t.loadMore,expression:"loadMore"}],staticClass:"page-infinite-list",attrs:{"infinite-scroll-distance":"50"}},t._l(t.outlist,function(t,e){return a("li",{key:e,staticClass:"page-infinite-listitem"},[a("base-guaranty",{attrs:{guaranty:t}})],1)}),0),a("p",{directives:[{name:"show",rawName:"v-show",value:t.loading,expression:"loading"}],staticClass:"page-infinite-loading"},[a("mt-spinner",{attrs:{type:"fading-circle"}}),t._v("\n        加载中...\n      ")],1),a("p",{directives:[{name:"show",rawName:"v-show",value:!t.loading&&t.outlist.length,expression:"!loading&&outlist.length"}],staticClass:"noMoreData"},[t._v("没有更多数据了")]),a("div",{directives:[{name:"show",rawName:"v-show",value:!t.outlist.length,expression:"!outlist.length"}],staticClass:"no-result-wrapper"},[a("no-result",{attrs:{title:"暂无团险保单",src:t.src,absTop:82}})],1)])]):t._e(),1===t.guarantyTabCur?a("div",{staticClass:"order-list"},[a("div",{ref:"wrapper",staticClass:"page-infinite-wrapper",style:{height:t.wrapperHeight+"px"}},[a("ul",{directives:[{name:"infinite-scroll",rawName:"v-infinite-scroll",value:t.loadMore,expression:"loadMore"}],staticClass:"page-infinite-list",attrs:{"infinite-scroll-distance":"50"}},t._l(t.guranteeList,function(t,e){return a("li",{key:e,staticClass:"page-infinite-listitem"},[a("base-guaranty",{attrs:{guaranty:t}})],1)}),0),a("p",{directives:[{name:"show",rawName:"v-show",value:t.loading,expression:"loading"}],staticClass:"page-infinite-loading"},[a("mt-spinner",{attrs:{type:"fading-circle"}}),t._v("\n        加载中...\n      ")],1),a("p",{directives:[{name:"show",rawName:"v-show",value:!t.loading&&t.guranteeList.length,expression:"!loading&&guranteeList.length"}],staticClass:"noMoreData"},[t._v("没有更多数据了")]),a("div",{directives:[{name:"show",rawName:"v-show",value:!t.guranteeList.length,expression:"!guranteeList.length"}],staticClass:"no-result-wrapper"},[a("no-result",{attrs:{title:"暂无团险保单",src:t.src,absTop:82}})],1)])]):t._e(),2===t.guarantyTabCur?a("div",{staticClass:"order-list"},[a("div",{ref:"wrapper",staticClass:"page-infinite-wrapper",style:{height:t.wrapperHeight+"px"}},[a("ul",{directives:[{name:"infinite-scroll",rawName:"v-infinite-scroll",value:t.loadMore,expression:"loadMore"}],staticClass:"page-infinite-list",attrs:{"infinite-scroll-distance":"50"}},t._l(t.allList,function(t,e){return a("li",{key:e,staticClass:"page-infinite-listitem"},[a("base-guaranty",{attrs:{guaranty:t}})],1)}),0),a("p",{directives:[{name:"show",rawName:"v-show",value:t.loading,expression:"loading"}],staticClass:"page-infinite-loading"},[a("mt-spinner",{attrs:{type:"fading-circle"}}),t._v("\n        加载中...\n      ")],1),a("p",{directives:[{name:"show",rawName:"v-show",value:!t.loading&&t.allList.length,expression:"!loading&&allList.length"}],staticClass:"noMoreData"},[t._v("没有更多数据了")]),a("div",{directives:[{name:"show",rawName:"v-show",value:!t.allList.length,expression:"!allList.length"}],staticClass:"no-result-wrapper"},[a("no-result",{attrs:{title:"暂无团险保单",src:t.src,absTop:82}})],1)])]):t._e(),a("router-view")],1)},i=[],s=a("cebc"),r=a("2f62"),c=a("5445"),o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"base-item",on:{click:function(e){return t.handleClickToDetail(t.guaranty)}}},[a("div",{staticClass:"orderId "},[a("div",{staticClass:"orderSn "},[t._v("\n        订单编号: "+t._s(t.guaranty.order_sn)+"\n      ")]),a("div",{staticClass:"orderStatus "},[t._v("\n        "+t._s(t.groupStatus(t.guaranty.status))+"\n      ")])]),a("div",{staticClass:"order-content"},[a("div",{staticClass:"content-text"},[a("div",{staticClass:"title-logo"},[a("div",{staticClass:"title",domProps:{textContent:t._s(t.guaranty.plan_name)}}),a("div",{staticClass:"logo"},[a("img",{attrs:{src:t.baseSrc+t.guaranty.brandLogo}})])]),a("div",{staticClass:"msg"},[t._v("保单号: "+t._s(t.guaranty.policy_num))]),a("div",{staticClass:"msg"},[t._v("投保人: "+t._s(t.guaranty.companyName))]),a("div",{staticClass:"msg"},[t._v("被保险人: "+t._s(t.userInfo.name))]),a("div",{staticClass:"msg"},[t._v("保障期间: "+t._s(t.guaranty.policy_effective_date)+" 至 "+t._s(t.guaranty.policy_expiration_date))])])])]),3==t.guaranty.status?a("div",{staticClass:"btn-contair"},[a("p",{staticClass:"btn",on:{click:function(e){return t.goClaimApply(t.guaranty)}}},[t._v("申请理赔")])]):t._e()])},u=[],l=(a("c5f6"),a("278f")),d={mixins:[l["d"]],props:{leftWidth:{type:Number},rightWidth:{type:Number,default:260},guaranty:{type:Object,default:function(){return{}}}},data:function(){return{baseSrc:"",parameters:[]}},mounted:function(){this.baseSrc="".concat("http://192.168.15.164:8003")},computed:Object(s["a"])({comLeftWidth:function(){return{width:this.leftWidth?this.leftWidth+"px":"800px"}},comRightWidth:function(){return{width:this.rightWidth?this.rightWidth+"px":"800px"}}},Object(r["c"])(["userInfo"])),methods:{goClaimApply:function(t){this.$router.push({path:"/claimList/claimApply/",query:{groupOrderSn:t.order_sn}})},handleClickToDetail:function(t){this.$router.push({path:"/myGuaranty/"+t.id,query:{guarantyId:t.id}})}}},p=d,f=(a("a623"),a("0c7c")),g=Object(f["a"])(p,o,u,!1,null,"c7c68190",null),h=g.exports,v=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"tabs "},[a("div",{staticClass:"tab-item",class:{active:0==t.guarantyTabCur},on:{click:function(e){return t.setCur(0,"2")}}},[a("span",[t._v("已出单")])]),a("div",{staticClass:"tab-item",class:{active:1==t.guarantyTabCur},on:{click:function(e){return t.setCur(1,"3")}}},[a("span",[t._v("保障中")])]),a("div",{staticClass:"tab-item",class:{active:2==t.guarantyTabCur},on:{click:function(e){return t.setCur(2,"")}}},[a("span",[t._v("全部")])])])},b=[],m={computed:Object(s["a"])({},Object(r["c"])(["guarantyTabCur"])),methods:Object(s["a"])({setCur:function(t,e){this.SET_GUARANTY_TAB_CUR(t),this.SET_GUARANTY_TAB_CUR_STATE(e),this.$emit("changeTab")}},Object(r["d"])(["SET_GUARANTY_TAB_CUR","SET_GUARANTY_TAB_CUR_STATE"]))},_=m,y=(a("6cdf"),Object(f["a"])(_,v,b,!1,null,"6e962030",null)),C=y.exports,w={name:"page-tab-container",data:function(){return{page:1,limit:10,outlist:[],guranteeList:[],src:a("2bab"),allList:[],loading:!1,wrapperHeight:0}},mounted:function(){this.getList()},computed:Object(s["a"])({},Object(r["e"])(["guarantyTabCur","guarantyTabCurState"])),methods:{handleChangeTab:function(t){this.getList()},getList:function(){var t=this;this.page=1;var e={page:this.page,limit:this.limit,status:this.guarantyTabCurState};this.$api.personCenter.getGroupInsuranceList(e).then(function(e){if(1===e.code){switch(t.loading=!0,t.guarantyTabCurState){case"2":t.outlist=e.data.data;break;case"3":t.guranteeList=e.data.data;break;case"":t.allList=e.data.data;break}t._checkMore(e.data)}})},loadMore:function(){this.loading&&(this.page++,this.$api.personCenter.getGroupInsuranceList({page:this.page,limit:this.limit,status:this.guarantyTabCurState}).then(function(t){if(1===t.code)switch(this.guarantyTabCurState){case"2":this.outlist=this.outlist.concat(t.data.data);break;case"3":this.guranteeList=this.guranteeList.concat(t.data.data);break;case"":this.allList=this.allList.concat(t.data.data);break}this._checkMore(t.data)}.bind(this)).catch(function(t){}))},_checkMore:function(t){(!t.data.length||this.page*this.limit>=t.count)&&(this.loading=!1)}},components:{guarantyTab:C,baseGuaranty:h,noResult:c["a"]}},T=w,N=(a("2167"),Object(f["a"])(T,n,i,!1,null,"1e0b5260",null));e["default"]=N.exports},"82d1":function(t,e,a){"use strict";var n=a("d2f4"),i=a.n(n);i.a},"8b97":function(t,e,a){var n=a("d3f4"),i=a("cb7c"),s=function(t,e){if(i(t),!n(e)&&null!==e)throw TypeError(e+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,e,n){try{n=a("9b43")(Function.call,a("11e9").f(Object.prototype,"__proto__").set,2),n(t,[]),e=!(t instanceof Array)}catch(i){e=!0}return function(t,a){return s(t,a),e?t.__proto__=a:n(t,a),t}}({},!1):void 0),check:s}},9093:function(t,e,a){var n=a("ce10"),i=a("e11e").concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return n(t,i)}},"9fe8":function(t,e,a){},a623:function(t,e,a){"use strict";var n=a("9fe8"),i=a.n(n);i.a},aa77:function(t,e,a){var n=a("5ca1"),i=a("be13"),s=a("79e5"),r=a("fdef"),c="["+r+"]",o="​",u=RegExp("^"+c+c+"*"),l=RegExp(c+c+"*$"),d=function(t,e,a){var i={},c=s(function(){return!!r[t]()||o[t]()!=o}),u=i[t]=c?e(p):r[t];a&&(i[a]=u),n(n.P+n.F*c,"String",i)},p=d.trim=function(t,e){return t=String(i(t)),1&e&&(t=t.replace(u,"")),2&e&&(t=t.replace(l,"")),t};t.exports=d},c5f6:function(t,e,a){"use strict";var n=a("7726"),i=a("69a8"),s=a("2d95"),r=a("5dbc"),c=a("6a99"),o=a("79e5"),u=a("9093").f,l=a("11e9").f,d=a("86cc").f,p=a("aa77").trim,f="Number",g=n[f],h=g,v=g.prototype,b=s(a("2aeb")(v))==f,m="trim"in String.prototype,_=function(t){var e=c(t,!1);if("string"==typeof e&&e.length>2){e=m?e.trim():p(e,3);var a,n,i,s=e.charCodeAt(0);if(43===s||45===s){if(a=e.charCodeAt(2),88===a||120===a)return NaN}else if(48===s){switch(e.charCodeAt(1)){case 66:case 98:n=2,i=49;break;case 79:case 111:n=8,i=55;break;default:return+e}for(var r,o=e.slice(2),u=0,l=o.length;u<l;u++)if(r=o.charCodeAt(u),r<48||r>i)return NaN;return parseInt(o,n)}}return+e};if(!g(" 0o1")||!g("0b1")||g("+0x1")){g=function(t){var e=arguments.length<1?0:t,a=this;return a instanceof g&&(b?o(function(){v.valueOf.call(a)}):s(a)!=f)?r(new h(_(e)),a,g):_(e)};for(var y,C=a("9e1e")?u(h):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),w=0;C.length>w;w++)i(h,y=C[w])&&!i(g,y)&&d(g,y,l(h,y));g.prototype=v,v.constructor=g,a("2aba")(n,f,g)}},d2f4:function(t,e,a){},d3b9:function(t,e,a){},fdef:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"}}]);
//# sourceMappingURL=chunk-5f4c320a.4d3abfe2.js.map