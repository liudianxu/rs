(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-85110e66"],{"8a54":function(t,s,i){"use strict";i.r(s);var e=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"sms-login-container"},[i("div",{staticClass:"login-tab clearfix"},[i("router-link",{staticClass:"login-tab-item",attrs:{tag:"div",to:"/personCenter/smsLogin"}},[i("span",{staticClass:"login-link"},[t._v("短信登录")])]),i("router-link",{staticClass:"login-tab-item",attrs:{tag:"div",to:"/personCenter/pwdLogin"}},[i("span",{staticClass:"login-link"},[t._v("密码登录")])])],1),i("form",{staticClass:"comForm",attrs:{action:""},on:{submit:function(s){return s.preventDefault(),t.submit(s)}}},[i("div",{staticClass:"input-wrapper"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.loginForm.idNum,expression:"loginForm.idNum"}],attrs:{type:"text",placeholder:"身份证号"},domProps:{value:t.loginForm.idNum},on:{focus:function(s){return t.focus(s)},blur:function(s){return t.blur(s)},input:function(s){s.target.composing||t.$set(t.loginForm,"idNum",s.target.value)}}}),i("i",{directives:[{name:"show",rawName:"v-show",value:t.loginForm.idNum,expression:"loginForm.idNum"}],staticClass:"del",on:{mousedown:function(s){return s.stopPropagation(),t.del("idNum")}}})]),i("div",{staticClass:"input-wrapper msgcode-wrapper clearfix"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.loginForm.msgCode,expression:"loginForm.msgCode"}],attrs:{type:"text",placeholder:"短信验证码"},domProps:{value:t.loginForm.msgCode},on:{focus:function(s){return t.focus(s)},blur:function(s){return t.blur(s)},input:function(s){s.target.composing||t.$set(t.loginForm,"msgCode",s.target.value)}}}),i("i",{directives:[{name:"show",rawName:"v-show",value:t.loginForm.msgCode,expression:"loginForm.msgCode"}],staticClass:"del",on:{mousedown:function(s){return s.stopPropagation(),t.del("msgCode")}}}),t.isMessageCode?i("span",{staticClass:"aboutcode sendcode"},[t._v("已发送("+t._s(t.second)+")")]):i("span",{staticClass:"aboutcode",on:{click:function(s){return t.getMessageCode()}}},[t._v("发送验证码")])]),i("div",{staticClass:"submit-wrapper"},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.errorTips,expression:"errorTips"}],staticClass:"error-tips"},[t._v(t._s(t.errorTips))]),i("input",{staticClass:"submit",class:t.allValid?"active":"",attrs:{type:"submit",value:"登录",disabled:!t.allValid}})]),i("div",{staticClass:"clearfix forget-register-wrapper"},[i("router-link",{staticClass:"forget-btn",attrs:{tag:"div",to:"/c"}},[i("span",{staticClass:"forget-link"},[t._v("忘记密码")])]),i("router-link",{staticClass:"register-btn",attrs:{tag:"div",to:"/personCenter/register"}},[i("span",{staticClass:"register-link"},[t._v("立即注册")])])],1)])])},o=[],n=i("cebc"),r=i("365c"),a=i("f524"),l=i("acce"),u=i("2f62"),c={name:"login",mixins:[l["a"]],data:function(){return{isMessageCode:!1,loginForm:{idNum:"",msgCode:""}}},mounted:function(){this.getList(),console.log("ff")},methods:Object(n["a"])({getList:function(){r["a"].getProductList().then(function(t){console.log(12,t)})},getMessageCode:function(){a["a"].idCardRegexs(this.loginForm.idNum)||(this.errorTips="身份证号格式错误")},submit:function(){this.loginForm.idNum&&this.loginForm.msgCode?this.Logins(this.loginForm):this.error="输入不得为空"},del:function(t){this.loginForm[t]=""}},Object(u["b"])(["Logins"])),computed:{allValid:function(){return this.loginForm.idNum&&this.loginForm.msgCode.length>=4&&!this.errorTips}},components:{}},m=c,d=(i("d54f"),i("2877")),g=Object(d["a"])(m,e,o,!1,null,"2b2c899b",null);s["default"]=g.exports},b0ab:function(t,s,i){},d54f:function(t,s,i){"use strict";var e=i("b0ab"),o=i.n(e);o.a}}]);
//# sourceMappingURL=chunk-85110e66.67c35373.js.map