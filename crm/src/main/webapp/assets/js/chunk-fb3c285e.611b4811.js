(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-fb3c285e"],{"0f2a":function(t,s){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAYAAAAehFoBAAAAAXNSR0IArs4c6QAAAVFJREFUWAnt1bFuwjAQBmA7gYgJIVVl4BXogKJsTOUNKvUpmPtGLEhsiBGVGYTCAuIBOvIEVYjNXdUBIUwi+c5iOA8Z4rP15c/FUUqGJCAJSAKSgCQgCTxRAtrXst5uF1apThJFH2mannz3q1ofVRVUzSNWWTssyvI7z/PXqnrfeW8wJguvaQ/wtxBo75bAxDBZxCIa8c04HnG1Bwk4JJoMfIVeQdJ9rqRJwXfQB2iPd8r2IAdzo1nAnGg2MBfa+xxGmGtg77aSZKS0PuKHWBgzcdXWvc8KRsSvMT1tbfcf9FMX5qpjBW92u4E9n5eQ7gsA5rFSYxek7n22Hr7FNrT+zLKsqAtz1bGAubD4EORgTiw5mBtLCg6BJQOHwpKAQ2IR3MCLzzBlOYP1f+cs1dH1yOMNhs2n8Ottw0ZfFOfsI6zMSQKSgCQgCUgCksDTJXABbanDQIpjSDwAAAAASUVORK5CYII="},"1f09":function(t,s,i){t.exports=i("5ab7")},"2d7d":function(t,s,i){"use strict";var a=i("779d"),e=i.n(a);e.a},"3cb7":function(t,s,i){},"5ab7":function(t,s,i){var a=i("836e"),e=a.JSON||(a.JSON={stringify:JSON.stringify});t.exports=function(t){return e.stringify.apply(e,arguments)}},7415:function(t,s,i){"use strict";var a=i("2d2c"),e=i("ea02")(5),n="find",c=!0;n in[]&&Array(1)[n](function(){c=!1}),a(a.P+a.F*c,"Array",{find:function(t){return e(this,t,arguments.length>1?arguments[1]:void 0)}}),i("68fb")(n)},"779d":function(t,s,i){},8700:function(t,s,i){"use strict";var a=i("3cb7"),e=i.n(a);e.a},"94f4":function(t,s,i){"use strict";i.r(s);var a=function(){var t=this,s=t.$createElement,a=t._self._c||s;return t.result?a("div",{staticClass:"settle"},[a("div",{staticClass:"whiteBox"},[a("div",{staticClass:"ttl"},[a("div",{staticClass:"bd clearfix"},[t._v("\n\t\t\t\t理赔申请编号："+t._s(t.result.sn)+"\n\t\t\t\t"),a("span",{staticClass:"fr"},[t._v(t._s(t._f("claimStatus")(t.result.status)))])])]),a("div",{staticClass:"step"},[a("div",{staticClass:"name"},[t._v(t._s(t.result.refer_name))]),t.showBtn([0,1,2,3,4,6])?a("div",{staticClass:"step-bar"},[t._l(t.steps,function(s,i){return a("div",{staticClass:"step-item",class:{active:t.stepNow>=i+1,live:t.stepNow==i+1&&t.stepLive}},[a("div",{staticClass:"tl"},[t._v(t._s(s))])])}),a("div",{staticClass:"cover",style:t.stepBarWidth})],2):t._e()]),t.showBtn([1,4,5])?a("div",{staticClass:"amount"},[t._v("\n\t\t\t初步理赔金额："+t._s(t.result.initial_price||0)+"元\n\t\t")]):t._e(),t.showBtn([2,3])?a("div",{staticClass:"amount"},[t._v("\n\t\t\t理赔金额："+t._s(t.result.amout||0)+"元\n\t\t")]):t._e()]),a("div",{staticClass:"whiteBox"},[a("div",{staticClass:"paddingBox"},[a("div",{staticClass:"name"},[t._v("申请信息")]),a("div",{staticClass:"message bd"},[a("div",{staticClass:"e-item"},[a("div",{staticClass:"k"},[t._v("申请人")]),a("div",{staticClass:"v"},[t._v("\n\t\t\t\t\t\t"+t._s(t.result.relation_name)+"\n\t\t\t\t\t")])]),a("div",{staticClass:"e-item"},[a("div",{staticClass:"k"},[t._v("被保险人")]),a("div",{staticClass:"v"},[t._v("\n\t\t\t\t\t\t"+t._s(t.result.insurance_name)+"\n\t\t\t\t\t")])]),a("div",{staticClass:"e-item"},[a("div",{staticClass:"k"},[t._v("保险公司")]),a("div",{staticClass:"v"},[t._v("\n\t\t\t\t\t\t"+t._s(t.result.brand_name)+"\n\t\t\t\t\t")])]),a("div",{staticClass:"e-item"},[a("div",{staticClass:"k"},[t._v("保障利益")]),a("div",{staticClass:"v"},[t._v("\n\t\t\t\t\t\t"+t._s(t.result.item_config.formula)+"\n\t\t\t\t\t")])]),a("div",{staticClass:"e-item"},[a("div",{staticClass:"k"},[t._v("保单号")]),a("div",{staticClass:"v"},[t._v("\n\t\t\t\t\t\t"+t._s(t.result.order_policy_num)+"\n\t\t\t\t\t")])]),a("div",{staticClass:"e-item"},[a("div",{staticClass:"k"},[t._v("订单编号")]),a("div",{staticClass:"v"},[t._v("\n\t\t\t\t\t\t"+t._s(t.result.order_sn)+"\n\t\t\t\t\t")])]),a("div",{staticClass:"e-item"},[a("div",{staticClass:"k"},[t._v("申请时间")]),a("div",{staticClass:"v"},[t._v("\n\t\t\t\t\t\t"+t._s(t.result.create_time)+"\n\t\t\t\t\t")])]),t.showBtn([3,5,6])?a("div",{staticClass:"e-item"},[a("div",{staticClass:"k"},[t._v("完结时间")]),a("div",{staticClass:"v"},[t._v("\n\t\t\t\t\t\t"+t._s(t.result.occur_time)+"\n\t\t\t\t\t")])]):t._e()]),a("div",{staticClass:"name"},[t._v("出险信息")]),a("div",{staticClass:"message"},[a("div",{staticClass:"e-item"},[a("div",{staticClass:"k"},[t._v("出险时间")]),a("div",{staticClass:"v"},[t._v(t._s(t.result.occur_time))])]),a("div",{staticClass:"e-item"},[a("div",{staticClass:"k"},[t._v("出险地点")]),a("div",{staticClass:"v"},[t._v(t._s(t.result.area_name))])]),a("div",{staticClass:"e-item"},[a("div",{staticClass:"k"},[t._v("事件描述")]),a("div",{staticClass:"v"},[t._v(t._s(t.result.detail))])])])])]),a("div",{staticClass:"whiteBox"},[a("div",{staticClass:"paddingBox"},[a("div",{staticClass:"name"},[t._v("申请资料")]),a("div",{staticClass:"list"},[t._l(t.result.claim_record_data,function(s,e){return a("div",{staticClass:"li clearfix",on:{click:function(i){s.url&&t.showCoverImg(s)}}},[t._v("\n\t\t\t\t\t\t"+t._s(e+1+"."+s.name+(s.isNecessary?"(可选)":""))+"\n\t\t\t\t\t\t"),s.url?a("img",{staticClass:"fr",attrs:{src:i("0f2a")}}):t._e(),t.showBtn([2,4])?a("span",{staticClass:"status fr"},[t._v(t._s(t._f("recordStatus")(s.status)))]):t._e()])})],2)])]),t.showBtn([0,1,4,5,6])?a("div",{staticClass:"whiteBox"},[t.showBtn([5,6])?a("div",{staticClass:"btn fr",on:{click:t.toClaimApply}},[t._v("重新申请")]):t._e(),t.showBtn([1,4])?a("div",{staticClass:"btn fr",on:{click:t.chexiao}},[t._v("撤销")]):t._e(),t.showBtn([0,4])?a("div",{staticClass:"btn red fr",on:{click:t.toUpload}},[t._v("立即处理")]):t._e()]):t._e(),t.showImg.url?a("div",{staticClass:"showImg",on:{click:t.closeImg}},[a("img",{style:t.imgStyle(t.$event),attrs:{src:t.showImg.url}}),t.showImg.billNumber?a("div",{staticClass:"billNumber"},[t._v("\n\t\t\t票据业务流水号："+t._s(t.showImg.billNumber)+"\n\t\t")]):t._e()]):t._e(),t.isShow?a("mPrompt",{attrs:{content:"确认撤销理赔申请？<br />撤销后仍可再次申请理赔",btnRightText:"确定",btnLeftText:"取消"},on:{handleBtnLeft:t.cancel,handleBtnRight:t.ok}}):t._e()],1):t._e()},e=[],n=i("1f09"),c=i.n(n),r=(i("7415"),i("c61a")),l={data:function(){return{steps:["发起申请","提交资料","审核与理算","理赔完结"],stepLive:!0,result:null,showImg:{},isShow:!1}},computed:{stepNow:function(){var t=1;switch(this.result.status){case 0:t=2;break;case 1:t=3;break;case 2:t=3;break;case 3:t=4;break;case 4:t=2;break;case 6:t=4;break;default:console.error("step is not defined")}return t},stepBarWidth:function(){return{width:(this.stepNow-1)/(this.steps.length-1)*100+"%"}}},methods:{showBtn:function(t){var s=this;return void 0!==t.find(function(t){return t==s.result.status})},showCoverImg:function(t){this.showImg=t},closeImg:function(){this.showImg={}},imgStyle:function(t){var s=t.target,i=s.naturalWidth/s.naturalHeight;i>1?(s.style.width="100%",s.style.height="auto"):(s.style.height="100%",s.style.width="auto")},chexiao:function(){this.isShow=!0},ok:function(){var t=this;this.$api.claim.claimRevoke({id:this.result.id}).then(function(s){console.log(s),t.$toast.center(s.message),t.isShow=!1})},cancel:function(){this.isShow=!1},toClaimApply:function(){this.$router.push("/claimList/claimApply?groupOrderSn="+this.result.order_sn)},toUpload:function(){this.$router.push("/claimUpload?claimApplySn="+this.result.sn)}},mounted:function(){var t=this;this.$route.params.id?this.$api.claim.claimView({id:this.$route.params.id}).then(function(s){console.log("console",s),t.result=JSON.parse(c()(s.data))}):console.error("路由id没传")},components:{mPrompt:r["a"]}},o=l,v=(i("2d7d"),i("17cc")),u=Object(v["a"])(o,a,e,!1,null,"2d832b5e",null);s["default"]=u.exports},"990a":function(t,s,i){var a=i("9b6d");t.exports=Array.isArray||function(t){return"Array"==a(t)}},c027:function(t,s,i){var a=i("b429"),e=i("990a"),n=i("f3ae")("species");t.exports=function(t){var s;return e(t)&&(s=t.constructor,"function"!=typeof s||s!==Array&&!e(s.prototype)||(s=void 0),a(s)&&(s=s[n],null===s&&(s=void 0))),void 0===s?Array:s}},c61a:function(t,s,i){"use strict";var a=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"prompt"},[i("div",{ref:"con",staticClass:"content"},[t._t("default"),i("p",{staticClass:"con",domProps:{innerHTML:t._s(t.content)}}),i("div",{staticClass:"btns"},[i("p",{staticClass:"btn btn-left",on:{click:t.handleBtnLeft}},[t._v(t._s(t.btnLeftText))]),i("p",{staticClass:"btn btn-right",on:{click:t.handleBtnRight}},[t._v(t._s(t.btnRightText))])])],2),i("div",{staticClass:"cover",on:{click:t.handleBtnLeft}})])},e=[],n={name:"mPrompt",props:{content:{type:String,default:"'"},btnLeftText:{type:String,default:"'"},btnRightText:{type:String,default:"'"}},methods:{handleBtnLeft:function(){this.$emit("handleBtnLeft")},handleBtnRight:function(){this.$emit("handleBtnRight")}}},c=n,r=(i("8700"),i("17cc")),l=Object(r["a"])(c,a,e,!1,null,"7146e874",null);s["a"]=l.exports},cecc:function(t,s,i){var a=i("c027");t.exports=function(t,s){return new(a(t))(s)}},ea02:function(t,s,i){var a=i("0709"),e=i("240e"),n=i("aa91"),c=i("33f2"),r=i("cecc");t.exports=function(t,s){var i=1==t,l=2==t,o=3==t,v=4==t,u=6==t,d=5==t||u,f=s||r;return function(s,r,h){for(var _,m,C=n(s),p=e(C),g=a(r,h,3),w=c(p.length),A=0,b=i?f(s,w):l?f(s,0):void 0;w>A;A++)if((d||A in p)&&(_=p[A],m=g(_,A,C),t))if(i)b[A]=m;else if(m)switch(t){case 3:return!0;case 5:return _;case 6:return A;case 2:b.push(_)}else if(v)return!1;return u?-1:o||v?v:b}}}}]);
//# sourceMappingURL=chunk-fb3c285e.611b4811.js.map