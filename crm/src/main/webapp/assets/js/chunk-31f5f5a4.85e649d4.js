(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-31f5f5a4"],{"1ed5":function(e,t,s){"use strict";s.r(t);var o=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"register-container"},[e.succeedShow?e._e():s("form",{staticClass:"comForm",attrs:{action:""},on:{submit:function(t){return t.preventDefault(),e.submit(t)}}},[s("div",{staticClass:"input-wrapper"},[s("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.sendForm.idNum,expression:"sendForm.idNum",modifiers:{trim:!0}}],class:e.errorIdNum?"active":"",attrs:{type:"text",placeholder:"身份证号"},domProps:{value:e.sendForm.idNum},on:{focus:function(t){return e.focus(t,"idNum")},blur:[function(t){return e.blur(t,"idNum")},function(t){return e.$forceUpdate()}],input:function(t){t.target.composing||e.$set(e.sendForm,"idNum",t.target.value.trim())}}}),s("i",{directives:[{name:"show",rawName:"v-show",value:e.sendForm.idNum,expression:"sendForm.idNum"}],staticClass:"del",style:e.delImg,on:{mousedown:function(t){return t.stopPropagation(),e.del("idNum")}}}),s("span",{staticClass:"error"},[e._v(e._s(e.errorIdNum))])]),s("div",{staticClass:"input-wrapper"},[s("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.sendForm.queryName,expression:"sendForm.queryName",modifiers:{trim:!0}}],attrs:{type:"text",placeholder:"姓名"},domProps:{value:e.sendForm.queryName},on:{focus:function(t){return e.focus(t)},blur:[function(t){return e.blur(t)},function(t){return e.$forceUpdate()}],input:function(t){t.target.composing||e.$set(e.sendForm,"queryName",t.target.value.trim())}}}),s("i",{directives:[{name:"show",rawName:"v-show",value:e.sendForm.queryName,expression:"sendForm.queryName"}],staticClass:"del",style:e.delImg,on:{mousedown:function(t){return t.stopPropagation(),e.del("queryName")}}})]),s("div",{staticClass:"input-wrapper"},[s("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.sendForm.queryMobile,expression:"sendForm.queryMobile",modifiers:{trim:!0}}],class:e.errorMobile?"active":"",attrs:{type:"text",placeholder:"手机号"},domProps:{value:e.sendForm.queryMobile},on:{focus:function(t){return e.focus(t,"mobile")},blur:[function(t){return e.blur(t,"mobile")},function(t){return e.$forceUpdate()}],input:function(t){t.target.composing||e.$set(e.sendForm,"queryMobile",t.target.value.trim())}}}),s("i",{directives:[{name:"show",rawName:"v-show",value:e.sendForm.queryMobile,expression:"sendForm.queryMobile"}],staticClass:"del",style:e.delImg,on:{mousedown:function(t){return t.stopPropagation(),e.del("queryMobile")}}}),s("span",{staticClass:"error"},[e._v(e._s(e.errorMobile))])]),s("div",{staticClass:"input-wrapper msgcode-wrapper clearfix"},[s("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.sendForm.msgCode,expression:"sendForm.msgCode",modifiers:{trim:!0}}],class:e.errorMsgCode?"active":"",attrs:{type:"text",placeholder:"短信验证码"},domProps:{value:e.sendForm.msgCode},on:{focus:function(t){return e.focus(t)},blur:[function(t){return e.blur(t)},function(t){return e.$forceUpdate()}],input:function(t){t.target.composing||e.$set(e.sendForm,"msgCode",t.target.value.trim())}}}),s("i",{directives:[{name:"show",rawName:"v-show",value:e.sendForm.msgCode,expression:"sendForm.msgCode"}],staticClass:"del",style:e.delImg,on:{mousedown:function(t){return t.stopPropagation(),e.del("msgCode")}}}),e.isMessageCode?s("span",{staticClass:"aboutcode sendcode"},[e._v(e._s(e.second)+"s重发")]):s("span",{staticClass:"aboutcode",on:{click:function(t){return e.getMessageCode()}}},[e._v("发送验证码")])]),s("div",{staticClass:"submit-wrapper"},[s("p",{staticClass:"register-tip"},[e._v("注册即视为同意"),s("span",{on:{click:e.showProtocal}},[e._v("《会员注册协议》")])]),s("div",{directives:[{name:"show",rawName:"v-show",value:e.errorTips,expression:"errorTips"}],staticClass:"error-tips"},[e._v(e._s(e.errorTips))]),s("input",{staticClass:"submit",class:e.allValid?"active":"",attrs:{type:"submit",value:"注册",disabled:!e.allValid}})]),s("div",{staticClass:"go-login-tips"},[e._v("\n      已有账号，马上"),s("router-link",{staticClass:"register-btn",attrs:{tag:"span",to:"/37duc/user/smsLogin"}},[s("span",[e._v("登录")])])],1),e.imgCodeShow?s("img-code",{attrs:{absTop:51,absLeft:31},on:{hanleClose:e.hanleImgCodeClose}},[s("div",{staticClass:"imgcode-content"},[s("div",{staticClass:"input-wrapper"},[s("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.sendForm.queryImgCode,expression:"sendForm.queryImgCode",modifiers:{trim:!0}}],staticClass:"input-imgcode",attrs:{type:"text",placeholder:"请输入图形验证码"},domProps:{value:e.sendForm.queryImgCode},on:{focus:function(t){return e.focus(t,"imgCode")},blur:[function(t){return e.blur(t,"imgCode")},function(t){return e.$forceUpdate()}],input:function(t){t.target.composing||e.$set(e.sendForm,"queryImgCode",t.target.value.trim())}}}),s("i",{directives:[{name:"show",rawName:"v-show",value:e.sendForm.queryImgCode,expression:"sendForm.queryImgCode"}],staticClass:"del",style:e.delImg,on:{mousedown:function(t){return t.stopPropagation(),e.del("queryImgCode")}}}),s("img",{ref:"imgCode",staticClass:"imgcode",attrs:{src:e.imgCodeSrc,alt:"图形验证码"},on:{click:e.refreshImgcode}}),s("span",{staticClass:"error"},[e._v(e._s(e.errorImgCode))])]),s("div",{staticClass:"imgcode-btn",class:e.sendForm.queryImgCode.length>=4?"active":"",attrs:{disabled:e.sendForm.queryImgCode.length<4},on:{click:e.validImgcode}},[e._v("确定")])])]):e._e()],1),s("transition",{attrs:{name:"fade"}},[e.protocalShow?s("base-pop-box",{attrs:{title:"会员注册协议",width:874,height:650,content:e.protocalCon},on:{dealClose:e.handleProtocalClose}}):e._e()],1)],1)},i=[],r=(s("6762"),s("2fdb"),s("cebc")),n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"pop-container"},[s("div",{staticClass:"pop-wrapper",style:e.popStyle},[s("p",{staticClass:"title"},[e._v(e._s(e.title))]),s("div",{staticClass:"content",domProps:{innerHTML:e._s(e.content)}}),s("i",{staticClass:"close",on:{click:e.goClocse}})]),s("div",{staticClass:"cover",on:{click:e.goClocse}})])},a=[],d=(s("c5f6"),{name:"BaseAlertBox",props:{title:{type:String,default:""},content:{type:String,default:""},width:{type:Number},height:{type:Number}},data:function(){return{wWidth:document.documentElement.clientWidth||document.body.clientWidth,wHeight:document.documentElement.clientHeight||document.body.clientHeight}},methods:{goClocse:function(){this.$emit("dealClose")}},computed:{popStyle:function(){return{width:this.width?this.width+"px":"100%",height:this.height?this.height+"px":"100%",left:(this.wWidth-this.width)/2+"px",top:(this.wHeight-this.height)/2-20+"px"}}}}),c=d,u=(s("ec61"),s("2877")),m=Object(u["a"])(c,n,a,!1,null,"d39a360a",null),l=m.exports,h=s("1688"),p=s("197b"),g=s("e04d"),f=s("acce"),v=s("2f62"),C=s("f524"),b={name:"login",mixins:[f["a"]],data:function(){return{imgCodeSrc:"",succeedShow:!1,second:60,sendForm:{idNum:"",queryName:"",queryMobile:"",queryImgCode:"",msgCode:""},protocalShow:!1,protocalCon:""}},mounted:function(){this._isCountDown(),this.getProtocalCon()},methods:Object(r["a"])({submit:function(){var e=this,t={idNum:this.sendForm.idNum,mobile:this.sendForm.queryMobile,name:this.sendForm.queryName,captchaId:this.sendForm.msgCode,hiddenCaptcha:this.uuid};this.$api.user.register(t).then(function(t){1===t.code?(e.SET_TOKEN(t.data.csrfToken),e.$router.push({path:"/37duc/user/register/succeed"})):t.message.includes("短信验证码错误")?e.errorMsgCode=t.message:e.errorTips=t.message})},getMessageCode:function(){this.errorMobile||(this.sendForm.queryMobile?(this.imgCodeShow=!0,this.refreshImgcode(),this.sendForm.queryImgCode=""):this.errorMobile=p["b"].notNull)},validImgcode:function(){var e=this,t={code:this.sendForm.queryImgCode};this.$api.user.registerValidImgcode(t).then(function(t){1===t.code?(e.imgCodeShow=!1,e.sendCaptchaSms()):(e.refreshImgcode(),e.errorImgCode=t.message)})},refreshImgcode:function(){var e=Math.random();this.imgCodeSrc="".concat("http://192.168.15.110:8003/pc","/member/register/captcha?v=").concat(e)},sendCaptchaSms:function(){var e=this,t={idNum:this.sendForm.idNum,mobile:this.sendForm.queryMobile,captchaId:this.uuid};this.$api.user.registerSendCaptchaSms(t).then(function(t){e.readsecond()})},getProtocalCon:function(){var e=this;this.$api.user.getRegisterProtocal().then(function(t){e.protocalCon=t.data.content})},showProtocal:function(){this.protocalShow=!0},handleProtocalClose:function(){this.protocalShow=!1},hanleImgCodeClose:function(){this.imgCodeShow=!1},blur:function(e,t){switch(this._onBlur(e),t){case"idNum":this._validIdNum();break;case"mobile":this._validMobile();break}},isMobileBind:function(){var e=this,t={mobile:this.sendForm.queryMobile};this.$api.user.isMobileBind(t).then(function(t){0===t.code&&(e.errorMobile=p["b"].binded)})},isIdNumRegister:function(){var e=this,t={idNum:this.sendForm.idNum};this.$api.user.isIdNumRegister(t).then(function(t){0===t.code&&(e.errorIdNum=p["a"].registered)})},setMobileSendTime:function(){var e=this,t=setInterval(function(){if(e.count<=1)return e.mobileSendShow=!1,e.count=5,void clearInterval(t);e.count--},1e3)},readsecond:function(){var e=this;this.isMessageCode=!0;var t=setInterval(function(){if(e.second<=1)return e.isMessageCode=!1,e.second=60,void clearInterval(t);e.second--,Object(g["c"])("registerSecond",e.second)},1e3)},_isCountDown:function(){var e=Object(g["a"])("registerSecond");e>1&&(this.second=e,this.isMessageCode=!0,this.readsecond())},_validIdNum:function(){if(this.sendForm.idNum){if(!C["a"].idCardRegexs(this.sendForm.idNum).pass)return void(this.errorIdNum=C["a"].idCardRegexs(this.sendForm.idNum).tip);if(!C["a"].years16Regexs(this.sendForm.idNum).pass)return void(this.errorIdNum=C["a"].years16Regexs(this.sendForm.idNum).tip);this.isIdNumRegister()}},_validMobile:function(){if(this.sendForm.queryMobile){if(!C["a"].mobileRegexs(this.sendForm.queryMobile).pass)return void(this.errorMobile=C["a"].mobileRegexs(this.sendForm.queryMobile).tip);this.isMobileBind()}}},Object(v["d"])(["SET_TOKEN"])),computed:{allValid:function(){return this.sendForm.idNum&&this.sendForm.queryName&&this.sendForm.queryMobile&&this.sendForm.msgCode&&!this.errorIdNum&&!this.errorMobile}},components:{BasePopBox:l,imgCode:h["a"]}},w=b,y=(s("20cf"),Object(u["a"])(w,o,i,!1,null,"554a9d6c",null));t["default"]=y.exports},"20cf":function(e,t,s){"use strict";var o=s("38c0"),i=s.n(o);i.a},"38c0":function(e,t,s){},e7fe:function(e,t,s){},ec61:function(e,t,s){"use strict";var o=s("e7fe"),i=s.n(o);i.a}}]);
//# sourceMappingURL=chunk-31f5f5a4.85e649d4.js.map