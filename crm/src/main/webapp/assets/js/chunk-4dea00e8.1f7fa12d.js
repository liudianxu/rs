(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4dea00e8"],{"0043":function(e,s,o){"use strict";o.r(s);var t=function(){var e=this,s=e.$createElement,o=e._self._c||s;return o("div",{staticClass:"mobile-valid"},[o("pwd-crumbs"),o("form",{staticClass:"comForm",attrs:{action:""},on:{submit:function(s){return s.preventDefault(),e.submit(s)}}},[o("div",{staticClass:"input-wrapper"},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.sendForm.queryMobile,expression:"sendForm.queryMobile"}],class:e.errorMobile?"active":"",attrs:{type:"text",placeholder:"手机号"},domProps:{value:e.sendForm.queryMobile},on:{focus:function(s){return e.focus(s,"mobile")},blur:function(s){return e.blur(s,"mobile")},input:function(s){s.target.composing||e.$set(e.sendForm,"queryMobile",s.target.value)}}}),o("i",{directives:[{name:"show",rawName:"v-show",value:e.sendForm.queryMobile,expression:"sendForm.queryMobile"}],staticClass:"del",style:e.delImg,on:{mousedown:function(s){return s.stopPropagation(),e.del("queryMobile")}}}),o("span",{staticClass:"error"},[e._v(e._s(e.errorMobile))])]),o("div",{staticClass:"input-wrapper msgcode-wrapper clearfix"},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.sendForm.msgCode,expression:"sendForm.msgCode"}],class:e.errorMsgCode?"active":"",attrs:{type:"text",placeholder:"短信验证码"},domProps:{value:e.sendForm.msgCode},on:{focus:function(s){return e.focus(s,"msgCode")},blur:function(s){return e.blur(s,"msgCode")},input:function(s){s.target.composing||e.$set(e.sendForm,"msgCode",s.target.value)}}}),o("i",{directives:[{name:"show",rawName:"v-show",value:e.sendForm.msgCode,expression:"sendForm.msgCode"}],staticClass:"del",style:e.delImg,on:{mousedown:function(s){return s.stopPropagation(),e.del("msgCode")}}}),e.isMessageCode?o("span",{staticClass:"aboutcode sendcode"},[e._v(e._s(e.second)+"s重发")]):o("span",{staticClass:"aboutcode",on:{click:function(s){return e.getMessageCode()}}},[e._v("发送验证码")]),o("span",{staticClass:"error "},[e._v(e._s(e.errorMsgCode))])]),o("div",{staticClass:"submit-wrapper"},[o("div",{directives:[{name:"show",rawName:"v-show",value:e.errorTips,expression:"errorTips"}],staticClass:"error-tips"},[e._v(e._s(e.errorTips))]),o("input",{staticClass:"submit",class:e.allValid?"active":"",attrs:{type:"submit",value:"下一步",disabled:!e.allValid}})]),o("div",{staticClass:"go-login-tips"},[e._v("\n      已有账号，马上"),o("router-link",{staticClass:"register-btn",attrs:{tag:"span",to:"/smsLogin"}},[o("span",[e._v("登录")])])],1),e.imgCodeShow?o("img-code",{attrs:{absTop:251,absLeft:90},on:{hanleClose:e.hanleImgCodeClose}},[o("div",{staticClass:"imgcode-content"},[o("div",{staticClass:"input-wrapper"},[o("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.sendForm.queryImgCode,expression:"sendForm.queryImgCode",modifiers:{trim:!0}}],staticClass:"input-imgcode",attrs:{type:"text",placeholder:"请输入图形验证码"},domProps:{value:e.sendForm.queryImgCode},on:{focus:function(s){return e.focus(s,"imgCode")},blur:[function(s){return e.blur(s,"imgCode")},function(s){return e.$forceUpdate()}],input:function(s){s.target.composing||e.$set(e.sendForm,"queryImgCode",s.target.value.trim())}}}),o("i",{directives:[{name:"show",rawName:"v-show",value:e.sendForm.queryImgCode,expression:"sendForm.queryImgCode"}],staticClass:"del",style:e.delImg,on:{mousedown:function(s){return s.stopPropagation(),e.del("queryImgCode")}}}),o("img",{ref:"imgCode",staticClass:"imgcode",attrs:{src:e.imgCodeSrc,alt:"图形验证码"},on:{click:e.refreshImgcode}}),o("span",{staticClass:"error"},[e._v(e._s(e.errorImgCode))])]),o("input",{staticClass:"imgcode-btn",class:e.sendForm.queryImgCode.length>=4?"active":"",attrs:{type:"button",value:"确定",disabled:e.sendForm.queryImgCode.length<4},on:{click:e.validImgcode}})])]):e._e()],1)],1)},i=[],r=(o("6762"),o("2fdb"),o("4778")),n=o("84c5"),a=o("acce"),d=o("f524"),c=o("197b"),u=o("e04d"),l={name:"TheMobileVailid",mixins:[a["a"]],data:function(){return{imgCodeSrc:"",second:60,sendForm:{queryMobile:"",msgCode:"",queryImgCode:""}}},mounted:function(){this._isCountDown()},methods:{submit:function(){var e=this,s={mobile:this.sendForm.queryMobile,captchaId:this.sendForm.msgCode,hiddenCaptcha:this.uuid};this.$api.user.mobileValidCommit(s).then(function(s){1===s.code?e.$router.push({path:"/forgetPassword/identifyValid"}):s.message.includes("短信验证码错误")?e.errorMsgCode=s.message:e.errorTips=s.message})},getMessageCode:function(){this.errorMobile||(this.sendForm.queryMobile?(this.imgCodeShow=!0,this.refreshImgcode(),this.sendForm.queryImgCode=""):this.errorMobile=c["b"].notNull)},sendCaptchaSms:function(){var e=this,s={mobile:this.sendForm.queryMobile,captchaId:this.uuid};this.$api.user.forgetPwdSendCaptchaSms(s).then(function(s){e.readsecond()})},validImgcode:function(){var e=this,s={code:this.sendForm.queryImgCode};this.$api.user.forgetPwdValidImgcode(s).then(function(s){1===s.code?(e.imgCodeShow=!1,e.sendCaptchaSms()):(e.refreshImgcode(),e.sendForm.queryImgCode="",e.errorImgCode=s.message)})},isMobileRegister:function(){var e=this,s={mobile:this.sendForm.queryMobile};this.$api.user.isMobileRegister(s).then(function(s){0===s.code&&(e.errorMobile=c["b"].notRegister)})},refreshImgcode:function(){var e=Math.random();this.imgCodeSrc="".concat("http://192.168.15.199:8003","/member/register/captcha?v=").concat(e)},blur:function(e,s){switch(this._onBlur(e),s){case"mobile":this._validMobile();break}},readsecond:function(){var e=this;this.isMessageCode=!0;var s=setInterval(function(){if(e.second<=1)return e.isMessageCode=!1,e.second=60,void clearInterval(s);e.second--,Object(u["c"])("forgetSecond",e.second)},1e3)},_isCountDown:function(){var e=Object(u["a"])("forgetSecond");e>1&&(this.second=e,this.isMessageCode=!0,this.readsecond())},hanleImgCodeClose:function(){this.imgCodeShow=!1},_validMobile:function(){if(this.sendForm.queryMobile){if(!d["a"].mobileRegexs(this.sendForm.queryMobile).pass)return void(this.errorMobile=d["a"].mobileRegexs(this.sendForm.queryMobile).tip);this.isMobileRegister()}}},computed:{allValid:function(){return this.sendForm.queryMobile&&this.sendForm.msgCode&&!this.errorMobile}},components:{pwdCrumbs:n["a"],imgCode:r["a"]}},m=l,g=(o("0259"),o("0c7c")),p=Object(g["a"])(m,t,i,!1,null,"808800a8",null);s["default"]=p.exports},"0259":function(e,s,o){"use strict";var t=o("e978"),i=o.n(t);i.a},"84c5":function(e,s,o){"use strict";var t=function(){var e=this,s=e.$createElement,o=e._self._c||s;return o("div",{staticClass:"forget-passwrod-crumbs"},[o("ul",[o("li",{class:e.$route.path.includes("mobileValid")||e.$route.path.includes("identifyValid")||e.$route.path.includes("resetPassword")?"active":""},[e._v(" 手机号验证")]),o("li",{class:e.$route.path.includes("identifyValid")||e.$route.path.includes("resetPassword")?"active":""},[o("i",{staticClass:"icon-next"}),e._v("身份验证")]),o("li",{class:e.$route.path.includes("resetPassword")?"active":""},[o("i",{staticClass:"icon-next"}),e._v("重置密码")])])])},i=[],r={name:"TheCrumbs",computed:{},mounted:function(){},methods:{}},n=r,a=(o("e4f5"),o("0c7c")),d=Object(a["a"])(n,t,i,!1,null,"09c9e3ba",null);s["a"]=d.exports},d0ed:function(e,s,o){},e4f5:function(e,s,o){"use strict";var t=o("d0ed"),i=o.n(t);i.a},e978:function(e,s,o){}}]);
//# sourceMappingURL=chunk-4dea00e8.1f7fa12d.js.map