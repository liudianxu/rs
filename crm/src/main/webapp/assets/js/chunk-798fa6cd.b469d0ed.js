(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-798fa6cd"],{"3a23":function(e,s,r){var t=r("694f").f,i=Function.prototype,o=/^\s*function ([^ (]*)/,n="name";n in i||r("3a0f")&&t(i,n,{configurable:!0,get:function(){try{return(""+this).match(o)[1]}catch(e){return""}}})},"797a":function(e,s,r){},c77e:function(e,s,r){"use strict";r.r(s);var t=function(){var e=this,s=e.$createElement,r=e._self._c||s;return r("div",{staticClass:"detail-applicant"},[r("div",{staticClass:"applicant"},[r("form",{staticClass:"comForm",attrs:{action:""},on:{submit:function(s){return s.preventDefault(),e.submit(s)}}},[r("div",{staticClass:"input-wrapper"},[r("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.sendForm.idNum,expression:"sendForm.idNum",modifiers:{trim:!0}}],class:e.errorIdNum?"active":"",attrs:{type:"text",placeholder:"身份证号"},domProps:{value:e.sendForm.idNum},on:{focus:function(s){return e.focus(s,"idNum")},blur:[function(s){return e.blur(s,"idNum")},function(s){return e.$forceUpdate()}],input:function(s){s.target.composing||e.$set(e.sendForm,"idNum",s.target.value.trim())}}}),r("i",{directives:[{name:"show",rawName:"v-show",value:e.sendForm.idNum,expression:"sendForm.idNum"}],staticClass:"del",style:e.delImg,on:{mousedown:function(s){return s.stopPropagation(),e.del("idNum")}}}),r("span",{staticClass:"error"},[e._v(e._s(e.errorIdNum))])]),r("div",{staticClass:"input-wrapper"},[r("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.sendForm.queryName,expression:"sendForm.queryName",modifiers:{trim:!0}}],style:e.comStyle,attrs:{type:"text",readonly:e.isRegister,placeholder:"姓名"},domProps:{value:e.sendForm.queryName},on:{focus:function(s){return e.focus(s)},blur:[function(s){return e.blur(s)},function(s){return e.$forceUpdate()}],input:function(s){s.target.composing||e.$set(e.sendForm,"queryName",s.target.value.trim())}}}),r("i",{directives:[{name:"show",rawName:"v-show",value:e.sendForm.queryName&&!e.isRegister,expression:"sendForm.queryName&&!isRegister"}],staticClass:"del",style:e.delImg,on:{mousedown:function(s){return s.stopPropagation(),e.del("queryName")}}})]),r("div",{staticClass:"input-wrapper"},[r("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.sendForm.queryMobile,expression:"sendForm.queryMobile",modifiers:{trim:!0}}],class:e.errorMobile?"active":"",style:e.comStyle,attrs:{type:"text",readonly:e.isRegister,placeholder:"手机号"},domProps:{value:e.sendForm.queryMobile},on:{focus:function(s){return e.focus(s,"mobile")},blur:[function(s){return e.blur(s,"mobile")},function(s){return e.$forceUpdate()}],input:function(s){s.target.composing||e.$set(e.sendForm,"queryMobile",s.target.value.trim())}}}),r("i",{directives:[{name:"show",rawName:"v-show",value:e.sendForm.queryMobile&&!e.isRegister,expression:"sendForm.queryMobile&&!isRegister"}],staticClass:"del",style:e.delImg,on:{mousedown:function(s){return s.stopPropagation(),e.del("queryMobile")}}}),r("span",{staticClass:"error"},[e._v(e._s(e.errorMobile))])]),r("div",{staticClass:"input-wrapper msgcode-wrapper clearfix"},[r("div",{staticClass:"msgCode-layer",class:e.errorMsgCode?"errorMsgCode":""},[r("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.sendForm.msgCode,expression:"sendForm.msgCode",modifiers:{trim:!0}}],attrs:{type:"text",placeholder:"短信验证码"},domProps:{value:e.sendForm.msgCode},on:{focus:function(s){return e.focus(s,"msgCode")},blur:[function(s){return e.blur(s,"msgCode")},function(s){return e.$forceUpdate()}],input:function(s){s.target.composing||e.$set(e.sendForm,"msgCode",s.target.value.trim())}}}),r("i",{directives:[{name:"show",rawName:"v-show",value:e.sendForm.msgCode,expression:"sendForm.msgCode"}],staticClass:"del",style:e.delImg,on:{mousedown:function(s){return s.stopPropagation(),e.del("msgCode")}}}),e.isMessageCode?r("span",{staticClass:"aboutcode sendcode"},[e._v(e._s(e.second)+"s重发")]):r("span",{staticClass:"aboutcode",on:{click:function(s){return e.getMessageCode()}}},[e._v("发送验证码")]),r("span",{staticClass:"error "},[e._v(e._s(e.errorMsgCode))])])]),r("div",{staticClass:"submit-wrapper"},[r("p",{staticClass:"tips"},[e._v("请确保信息填写正确，后续您可以通过身份证号码及手机验证码查询订单等信息。")]),r("div",{directives:[{name:"show",rawName:"v-show",value:e.errorTips,expression:"errorTips"}],staticClass:"error-tips"},[e._v(e._s(e.errorTips))]),r("input",{staticClass:"submit",class:e.allValid?"active":"",attrs:{type:"submit",value:"提交",disabled:!e.allValid}})]),e.imgCodeShow?r("img-code",{attrs:{absTop:311,absLeft:90},on:{hanleClose:e.handleImgCodeClose}},[r("div",{staticClass:"imgcode-content"},[r("div",{staticClass:"input-wrapper"},[r("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.sendForm.queryImgCode,expression:"sendForm.queryImgCode",modifiers:{trim:!0}}],staticClass:"input-imgcode",attrs:{type:"text",placeholder:"请输入图形验证码"},domProps:{value:e.sendForm.queryImgCode},on:{focus:function(s){return e.focus(s,"imgCode")},blur:[function(s){return e.blur(s,"imgCode")},function(s){return e.$forceUpdate()}],input:function(s){s.target.composing||e.$set(e.sendForm,"queryImgCode",s.target.value.trim())}}}),r("i",{directives:[{name:"show",rawName:"v-show",value:e.sendForm.queryImgCode,expression:"sendForm.queryImgCode"}],staticClass:"del",style:e.delImg,on:{mousedown:function(s){return s.stopPropagation(),e.del("queryImgCode")}}}),r("img",{ref:"imgCode",staticClass:"imgcode",attrs:{src:e.imgCodeSrc,alt:"图形验证码"},on:{click:e.refreshImgcode}}),r("span",{staticClass:"error"},[e._v(e._s(e.errorImgCode))])]),r("input",{staticClass:"imgcode-btn",class:e.sendForm.queryImgCode.length>=4?"active":"",attrs:{type:"button",value:"确定",disabled:e.sendForm.queryImgCode.length<4},on:{click:e.validImgcode}})])]):e._e()],1)])])},i=[],o=(r("3a23"),r("a59e")),n=r.n(o),a=(r("e0c1"),r("93fe"),r("8e61")),d=(r("b06f"),r("acce")),u=r("f524"),m=r("197b"),c=r("4778"),l=r("e04d"),p=r("52c1"),h={name:"TheDetailApplicant",mixins:[d["a"]],props:{price:{type:Number,default:0}},data:function(){return{isRegister:!1,imgCodeSrc:"",second:60,sendForm:{idNumL:"",queryMobile:"",queryImgCode:"",queryName:"",queryMobileFull:""}}},mounted:function(){this._isCountDown()},methods:Object(a["a"])({submit:function(){var e,s=this;e=this.isRegister?this.sendForm.queryMobileFull:this.sendForm.queryMobile;var r={idNum:this.sendForm.idNum,mobile:e,name:this.sendForm.queryName,captchaId:this.sendForm.msgCode,hiddenCaptcha:this.uuid};this.$api.product.tbSubmit(r).then(function(e){1===e.code?(s.SET_TOKEN(e.data.csrfToken),s.SET_USER_INFO(e.data.member),s.$router.push({path:"/product/detail/".concat(s.$route.query.productId),query:{productId:s.$route.query.productId,fromApplicant:!0}})):e.message.includes("短信验证码错误")?s.errorMsgCode=e.message:s.errorTips=e.message})},sendCaptchaSms:function(){var e,s=this;e=this.isRegister?this.sendForm.queryMobileFull:this.sendForm.queryMobile;var r={idNum:this.sendForm.idNum,mobile:e,captchaId:this.uuid};this.$api.product.tbSendCaptchaSms(r).then(function(e){1===e.code?s.readsecond():s.errorMobile=e.message})},getMessageCode:function(){var e=this;this.errorMobile||(this.sendForm.queryMobile?this.isMobileBind().then(function(s){0!==s.code&&(e.imgCodeShow=!0,e.refreshImgcode(),e.sendForm.queryImgCode="")}):this.errorMobile=m["b"].notNull)},validImgcode:function(){var e=this,s={code:this.sendForm.queryImgCode};this.$api.product.tbValidImgcode(s).then(function(s){1===s.code?(e.imgCodeShow=!1,e.sendCaptchaSms()):(e.refreshImgcode(),e.sendForm.queryImgCode="",e.errorImgCode=s.message)})},refreshImgcode:function(){var e=Math.random();this.imgCodeSrc="".concat("http://8hwppb.natappfree.cc","/shop/product/insureCaptcha?v=").concat(e)},isIdNumRegister:function(){var e=this;return new n.a(function(s,r){var t={idNum:e.sendForm.idNum};e.$api.product.tbIdNumValid(t).then(function(r){s(r),1===r.isRegister?(e.sendForm.queryMobileFull=r.data.mobile,e.sendForm.queryMobile=r.data.mobile.substr(0,3)+"****"+r.data.mobile.substr(7),e.sendForm.queryName=r.data.name.substr(0,1)+"*"+r.data.name.substring(2,r.data.length),e.isRegister=!0):e.isRegister=!1})})},handleImgCodeClose:function(){this.imgCodeShow=!1,this.errorImgCode=""},readsecond:function(){var e=this;this.isMessageCode=!0;var s=setInterval(function(){if(e.second<=1)return e.isMessageCode=!1,e.second=60,void clearInterval(s);e.second--,Object(l["c"])("tbSecond",e.second)},1e3)},blur:function(e,s){var r=this;switch(this._onBlur(e),s){case"idNum":this._validIdNum(),this.isIdNumRegister().then(function(e){1===e.code&&(r.errorMobile="")});break;case"mobile":this._validMobile();break}},isMobileBind:function(){var e=this;return new n.a(function(s,r){var t={mobile:e.sendForm.queryMobile};e.$api.user.isMobileBind(t).then(function(r){s(r),0===r.code&&(e.errorMobile=m["b"].binded)})})},_isCountDown:function(){var e=Object(l["a"])("tbSecond");e>1&&(this.second=e,this.isMessageCode=!0,this.readsecond())},_validMobile:function(){this.isRegister&&this.sendForm.queryMobileFull&&!u["a"].mobileRegexs(this.sendForm.queryMobileFull).pass?this.errorMobile=u["a"].mobileRegexs(this.sendForm.queryMobileFull).tip:this.isRegister||!this.sendForm.queryMobile||u["a"].mobileRegexs(this.sendForm.queryMobile).pass?this.isMobileBind():this.errorMobile=u["a"].mobileRegexs(this.sendForm.queryMobile).tip},_validIdNum:function(){if(this.sendForm.idNum){if(!u["a"].idCardRegexs(this.sendForm.idNum).pass)return void(this.errorIdNum=u["a"].idCardRegexs(this.sendForm.idNum).tip);if(!u["a"].years16Regexs(this.sendForm.idNum).pass)return void(this.errorIdNum="仅支持16周岁及以上用户投保");this.isIdNumRegister()}}},Object(p["d"])(["SET_TOKEN","SET_USER_INFO"])),watch:{"sendForm.idNum":function(e,s){e!==s&&this.isRegister&&(this.sendForm.queryName="",this.sendForm.queryMobile="",this.isRegister=!1)}},computed:{comStyle:function(){if(this.isRegister)return{color:"#A5A8A8"}},allValid:function(){return this.sendForm.idNum&&this.sendForm.queryName&&this.sendForm.queryMobile&&this.sendForm.msgCode&&!this.errorIdNum&&!this.errorMobile}},components:{imgCode:c["a"]}},g=h,f=(r("d7d9"),r("17cc")),b=Object(f["a"])(g,t,i,!1,null,"573e708a",null);s["default"]=b.exports},d7d9:function(e,s,r){"use strict";var t=r("797a"),i=r.n(t);i.a}}]);
//# sourceMappingURL=chunk-798fa6cd.b469d0ed.js.map