(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d7ecca4"],{"197b":function(e,t,r){"use strict";r.d(t,"a",function(){return s}),r.d(t,"b",function(){return n}),r.d(t,"c",function(){return i});var s={notNull:"请先填写身份证号",registered:"该身份证号已注册"},n={notNull:"请先填写手机号",binded:"手机号已绑定其他身份证号",imgCodeError:"图形验证码错误",msgCodeError:"短信验证码错误",notRegister:"手机号未注册"},i={notSame:"两次输入的新密码不相同",notSame1:"两次输入的密码不相同",idNumOrPwdError:"身份证号或密码错误"}},"28a5":function(e,t,r){"use strict";var s=r("aae3"),n=r("cb7c"),i=r("ebd6"),o=r("0390"),a=r("9def"),u=r("5f1b"),d=r("520a"),c=r("79e5"),l=Math.min,m=[].push,g="split",f="length",v="lastIndex",p=4294967295,h=!c(function(){RegExp(p,"y")});r("214f")("split",2,function(e,t,r,c){var b;return b="c"=="abbc"[g](/(b)*/)[1]||4!="test"[g](/(?:)/,-1)[f]||2!="ab"[g](/(?:ab)*/)[f]||4!="."[g](/(.?)(.?)/)[f]||"."[g](/()()/)[f]>1||""[g](/.?/)[f]?function(e,t){var n=String(this);if(void 0===e&&0===t)return[];if(!s(e))return r.call(n,e,t);var i,o,a,u=[],c=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),l=0,g=void 0===t?p:t>>>0,h=new RegExp(e.source,c+"g");while(i=d.call(h,n)){if(o=h[v],o>l&&(u.push(n.slice(l,i.index)),i[f]>1&&i.index<n[f]&&m.apply(u,i.slice(1)),a=i[0][f],l=o,u[f]>=g))break;h[v]===i.index&&h[v]++}return l===n[f]?!a&&h.test("")||u.push(""):u.push(n.slice(l)),u[f]>g?u.slice(0,g):u}:"0"[g](void 0,0)[f]?function(e,t){return void 0===e&&0===t?[]:r.call(this,e,t)}:r,[function(r,s){var n=e(this),i=void 0==r?void 0:r[t];return void 0!==i?i.call(r,n,s):b.call(String(n),r,s)},function(e,t){var s=c(b,e,this,t,b!==r);if(s.done)return s.value;var d=n(e),m=String(this),g=i(d,RegExp),f=d.unicode,v=(d.ignoreCase?"i":"")+(d.multiline?"m":"")+(d.unicode?"u":"")+(h?"y":"g"),C=new g(h?d:"^(?:"+d.source+")",v),w=void 0===t?p:t>>>0;if(0===w)return[];if(0===m.length)return null===u(C,m)?[m]:[];var N=0,A=0,x=[];while(A<m.length){C.lastIndex=h?A:0;var F,S=u(C,h?m:m.slice(A));if(null===S||(F=l(a(C.lastIndex+(h?0:A)),m.length))===N)A=o(m,A,f);else{if(x.push(m.slice(N,A)),x.length===w)return x;for(var T=1;T<=S.length-1;T++)if(x.push(S[T]),x.length===w)return x;A=N=F}}return x.push(m.slice(N)),x}]})},"2fdb":function(e,t,r){"use strict";var s=r("5ca1"),n=r("d2c8"),i="includes";s(s.P+s.F*r("5147")(i),"String",{includes:function(e){return!!~n(this,e,i).indexOf(e,arguments.length>1?arguments[1]:void 0)}})},5147:function(e,t,r){var s=r("2b4c")("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(r){try{return t[s]=!1,!"/./"[e](t)}catch(n){}}return!0}},6762:function(e,t,r){"use strict";var s=r("5ca1"),n=r("c366")(!0);s(s.P,"Array",{includes:function(e){return n(this,e,arguments.length>1?arguments[1]:void 0)}}),r("9c6c")("includes")},"67ff":function(e,t,r){"use strict";r.r(t);var s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"sms-login-container"},[r("div",{staticClass:"login-tab clearfix"},[r("router-link",{staticClass:"login-tab-item",attrs:{tag:"div",to:"/37duc/user/smsLogin"}},[r("span",{staticClass:"login-link"},[e._v("短信登录")])]),r("router-link",{staticClass:"login-tab-item",attrs:{tag:"div",to:"/37duc/user/pwdLogin"}},[r("span",{staticClass:"login-link"},[e._v("密码登录")])])],1),r("form",{staticClass:"comForm",attrs:{action:""},on:{submit:function(t){return t.preventDefault(),e.submit(t)}}},[r("div",{staticClass:"input-wrapper"},[r("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.sendForm.idNum,expression:"sendForm.idNum",modifiers:{trim:!0}}],class:e.errorIdNum?"active":"",attrs:{type:"text",placeholder:"身份证号"},domProps:{value:e.sendForm.idNum},on:{focus:function(t){return e.focus(t,"idNum")},blur:[function(t){return e.blur(t,"idNum")},function(t){return e.$forceUpdate()}],input:function(t){t.target.composing||e.$set(e.sendForm,"idNum",t.target.value.trim())}}}),r("i",{directives:[{name:"show",rawName:"v-show",value:e.sendForm.idNum,expression:"sendForm.idNum"}],staticClass:"del",style:e.delImg,on:{mousedown:function(t){return t.stopPropagation(),e.del("idNum")}}}),r("span",{staticClass:"error"},[e._v(e._s(e.errorIdNum))])]),r("div",{staticClass:"input-wrapper msgcode-wrapper clearfix"},[r("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.sendForm.msgCode,expression:"sendForm.msgCode",modifiers:{trim:!0}}],class:e.errorMsgCode?"active":"",attrs:{type:"text",placeholder:"短信验证码"},domProps:{value:e.sendForm.msgCode},on:{focus:function(t){return e.focus(t)},blur:[function(t){return e.blur(t)},function(t){return e.$forceUpdate()}],input:function(t){t.target.composing||e.$set(e.sendForm,"msgCode",t.target.value.trim())}}}),r("i",{directives:[{name:"show",rawName:"v-show",value:e.sendForm.msgCode,expression:"sendForm.msgCode"}],staticClass:"del",style:e.delImg,on:{mousedown:function(t){return t.stopPropagation(),e.del("msgCode")}}}),e.isMessageCode?r("span",{staticClass:"aboutcode sendcode"},[e._v(e._s(e.second)+"s重发")]):r("span",{staticClass:"aboutcode",on:{click:function(t){return e.getMessageCode()}}},[e._v("发送验证码")]),r("span",{staticClass:"error "},[e._v(e._s(e.errorMsgCode))])]),r("div",{staticClass:"submit-wrapper"},[e.mobileSendShow?r("p",{staticClass:"mobileSendTips"},[e._v("验证码已发送至尾号为"+e._s(this.currentMobile)+"的手机号")]):e._e(),r("div",{directives:[{name:"show",rawName:"v-show",value:e.errorTips,expression:"errorTips"}],staticClass:"error-tips"},[e._v(e._s(e.errorTips))]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.loginBtnText,expression:"loginBtnText"}],staticClass:"submit",class:e.allValid?"active":"",attrs:{type:"submit",disabled:!e.allValid||e.isRequesting},domProps:{value:e.loginBtnText},on:{input:function(t){t.target.composing||(e.loginBtnText=t.target.value)}}})]),r("div",{staticClass:"clearfix forget-register-wrapper"},[r("router-link",{staticClass:"forget-btn",attrs:{tag:"div",to:"/37duc/user/forgetPassword"}},[r("span",{staticClass:"forget-link"},[e._v("忘记密码")])]),r("router-link",{staticClass:"register-btn",attrs:{tag:"div",to:"/37duc/user/register"}},[r("span",{staticClass:"register-link"},[e._v("立即注册")])])],1)])])},n=[],i=(r("6762"),r("2fdb"),r("cebc")),o=r("f524"),a=r("197b"),u=r("bbd5"),d=r("e04d"),c=r("acce"),l=r("2f62"),m={name:"login",mixins:[c["a"]],data:function(){return{mobileSendShow:!1,loginBtnText:"登录",count:5,second:60,currentMobile:"",sendForm:{idNum:"",msgCode:""}}},mounted:function(){this.uuid=Object(u["b"])(),this._isCountDown()},methods:Object(i["a"])({submit:function(){var e=this;this.loginBtnText="登录中....",this.isRequesting=!0;var t={idNum:this.sendForm.idNum,hiddenCaptcha:this.uuid,captcha:this.sendForm.msgCode};this.$api.user.smsLogin(t).then(function(t){e.isRequesting=!1,e.loginBtnText="登录",1===t.code?(e.SET_TOKEN(t.data.csrfToken),e.SET_USER_INFO(t.data.member),e.$router.push("/37duc/personCenter")):t.message.includes("短信验证码错误")?e.errorMsgCode=t.message:e.errorTips=t.message})},getMessageCode:function(){var e=this;if(this.sendForm.idNum){if(!this.errorIdNum){var t={idNum:this.sendForm.idNum,captchaId:this.uuid};this.$api.user.sendCaptchaSms(t).then(function(t){1===t.code&&(e.mobileSendShow=!0,e.currentMobile=t.data.mobile.substr(t.data.mobile.length-4),e.readsecond(),e.setMobileSendTime()),0===t.code&&(e.errorIdNum=t.message)})}}else this.errorIdNum=a["a"].notNull},blur:function(e,t){switch(this._onBlur(e),t){case"idNum":this._validIdNum();break}},setMobileSendTime:function(){var e=this,t=setInterval(function(){if(e.count<=1)return e.mobileSendShow=!1,e.count=5,void clearInterval(t);e.count--},1e3)},readsecond:function(){var e=this;this.isMessageCode=!0;var t=setInterval(function(){if(e.second<=1)return e.isMessageCode=!1,e.second=60,void clearInterval(t);e.second--,Object(d["c"])("smsSecond",e.second)},1e3)},_isCountDown:function(){var e=Object(d["a"])("smsSecond");e>1&&(this.second=e,this.isMessageCode=!0,this.readsecond())},_validIdNum:function(){this.sendForm.idNum&&(o["a"].idCardRegexs(this.sendForm.idNum).pass||(this.errorIdNum=o["a"].idCardRegexs(this.sendForm.idNum).tip))}},Object(l["d"])(["SET_TOKEN","SET_USER_INFO"]),Object(l["b"])(["Logins"])),computed:{allValid:function(){return this.sendForm.idNum&&this.sendForm.msgCode&&!this.errorIdNum}},components:{}},g=m,f=(r("f3ef"),r("2877")),v=Object(f["a"])(g,s,n,!1,null,"29f0777c",null);t["default"]=v.exports},6955:function(e,t,r){},"6e30":function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWBAMAAAA2mnEIAAAAJFBMVEUAAADZ2dnb29vZ2dnY2NjY2NjY2Nja2trZ2dnd3d3Z2dnY2NgFUa8DAAAAC3RSTlMA7CuZ89jAUkMlPW0Axj8AAABuSURBVBjTY8AHOExdghsgTM7s3bt3b5sAZi/cDQJSYGFpMHsjSIJtNwQkANnduzcX7ha33r0DyLbevZ1JUKF692YgO3r3RgUlJundW4Fs7927hRgUd+/egspGqEHVizATzS6EGxBuQ3Uzwi84AQBiZ0kvu9RnaAAAAABJRU5ErkJggg=="},aae3:function(e,t,r){var s=r("d3f4"),n=r("2d95"),i=r("2b4c")("match");e.exports=function(e){var t;return s(e)&&(void 0!==(t=e[i])?!!t:"RegExp"==n(e))}},acce:function(e,t,r){"use strict";r.d(t,"a",function(){return n});var s=r("bbd5"),n={data:function(){return{errorTips:"",errorIdNum:"",errorMobile:"",errorPwd:"",errorImgCode:"",errorMsgCode:"",isMessageCode:!1,imgCodeShow:!1,isRequesting:!1,uuid:"",delImg:{"background-image":"url("+r("6e30")+")"}}},mounted:function(){this.uuid=Object(s["b"])()},computed:{},methods:{focus:function(e,t){switch(this._onFocus(e),this.errorTips="",t){case"mobile":this.errorMobile="";break;case"idNum":this.errorIdNum="";break;case"pwd":this.errorPwd="";break;case"imgCode":this.errorImgCode=""}},del:function(e){this.sendForm[e]=""},_onFocus:function(e){for(var t=e.currentTarget.parentElement.children,r=0;r<t.length;r++)t[r]!==e.currentTarget&&t[r].classList.add("del")},_onBlur:function(e){for(var t=e.currentTarget.parentElement.children,r=0;r<t.length;r++)t[r]!==e.currentTarget&&t[r].classList.remove("del")}},watch:{}}},bbd5:function(e,t,r){"use strict";r.d(t,"a",function(){return s}),r.d(t,"b",function(){return n});r("28a5");function s(e,t){var r;return function(){for(var s=this,n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];r&&clearTimeout(r),r=setTimeout(function(){e.apply(s,i)},t)}}function n(){var e,t="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(""),r=[];r[8]=r[13]=r[18]=r[23]="-",r[14]="4";for(var s=0;s<36;s++)r[s]||(e=0|16*Math.random(),r[s]=t[19===s?3&e|8:e]);return r.join("")}},d2c8:function(e,t,r){var s=r("aae3"),n=r("be13");e.exports=function(e,t,r){if(s(t))throw TypeError("String#"+r+" doesn't accept regex!");return String(n(e))}},f3ef:function(e,t,r){"use strict";var s=r("6955"),n=r.n(s);n.a},f524:function(e,t,r){"use strict";r("6762"),r("2fdb"),r("28a5");var s=r("e814"),n=r.n(s),i=r("d225"),o=r("b0b4"),a=void 0,u=function(e){var t,r=e.split("-"),s=r[0],n=r[1],i=r[2],o=new Date,u=o.getFullYear(),d=o.getMonth()+1,c=o.getDate();if(u==s){var l=a.formatDate(new Date);return t=a.DateDiff(l,e)+1+"天",t}var m=u-s;if(m>0)if(d==n){var g=c-i;t=g<0?m-1+"岁":m+"岁"}else{var f=d-n;t=f<0?m-1+"岁":m+"岁"}else t=-1;return t};r.d(t,"a",function(){return c});var d=function(){function e(){Object(i["a"])(this,e)}return Object(o["a"])(e,[{key:"idCardRegexs",value:function(e){var t={11:"北京",12:"天津",13:"河北",14:"山西",15:"内蒙古",21:"辽宁",22:"吉林",23:"黑龙江 ",31:"上海",32:"江苏",33:"浙江",34:"安徽",35:"福建",36:"江西",37:"山东",41:"河南",42:"湖北 ",43:"湖南",44:"广东",45:"广西",46:"海南",50:"重庆",51:"四川",52:"贵州",53:"云南",54:"西藏 ",61:"陕西",62:"甘肃",63:"青海",64:"宁夏",65:"新疆",71:"台湾",81:"香港",82:"澳门",91:"国外 "},r="身份证号格式错误",s=["7","9","10","5","8","4","2","1","6","3","7","9","10","5","8","4","2"],i=["1","0","X","9","8","7","6","5","4","3","2"],o="",a=!0;function u(e){var r=/^[1-9]\d{5}$/.test(e);return!!r&&!!t[n()(e.substring(0,2))]}function d(e){var t=/^[1-9]\d{3}((0[1-9])|(1[0-2]))((0[1-9])|([1-2][0-9])|(3[0-1]))$/.test(e);if(!t)return!1;var r=n()(e.substring(0,4),10),s=n()(e.substring(4,6),10),i=n()(e.substring(6),10),o=new Date(r,s-1,i);return!(o>new Date)&&(o.getFullYear()==r&&o.getMonth()==s-1&&o.getDate()==i)}function c(e){for(var t=e.substring(0,17),r=0,o=0;o<17;o++)r+=n()(t.charAt(o),10)*n()(s[o]);var a=r%11;return i[a]}function l(e){if(15==e.length){var t=e.substring(0,6)+"19"+e.substring(6),r=c(t);return t+r}return 18==e.length?e:null}if(e&&/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(e))if(t[e.substr(0,2)]){if(15===e.length){var m=/^[1-9]\d{7}((0[1-9])|(1[0-2]))((0[1-9])|([1-2][0-9])|(3[0-1]))\d{3}$/.test(e);m||(a=!1);var g=e.substring(0,6);if(m=u(g),!m)return{pass:!1,tip:"身份证号格式错误"};var f="19"+e.substring(6,12);if(m=d(f),!m)return{pass:!1,tip:"身份证号格式错误"};e=l(e)}if(18===e.length){e=e.split("");for(var v=[7,9,10,5,8,4,2,1,6,3,7,9,10,5,8,4,2],p=[1,0,"X",9,8,7,6,5,4,3,2],h=0,b=0,C=0,w=0;w<17;w++)b=e[w],C=v[w],h+=b*C;var N=p[h%11];N!=e[17]&&(o=r,a=!1)}}else o=r,a=!1;else o=r,a=!1;return{pass:a,tip:o}}},{key:"mobileRegexs",value:function(e){var t="手机号格式错误",r=/^1[3|4|5|6|7|8|9]\d{9}$/;return e&&!r.test(e)?{pass:!1,tip:t}:{pass:!0,tip:""}}},{key:"pwdRegexs",value:function(e){var t="密码格式错误",r=/^[\da-zA-Z0-9~`!@#\/'|\[\]:,;$%^&*<>()}{?=\-+]{4,20}$/;return!r.test(e)&&e?{pass:!1,tip:t}:{pass:!0,tip:""}}},{key:"years16Regexs",value:function(e){var t,r=!1,s="仅支持16周岁及以上用户注册";15==e.length&&(e=e.substring(0,6)+"19"+e.substring(6));var i=e.slice(6,10)+"-"+e.slice(10,12)+"-"+e.slice(12,14);return t=u(i),"-1"==t?{pass:r,tip:s}:t.includes("天")?{pass:r,tip:s}:t.includes("岁")?n()(t)<16?{pass:r,tip:s}:{pass:!0,tip:""}:void 0}}]),e}(),c=new d}}]);
//# sourceMappingURL=chunk-2d7ecca4.70ce7fcd.js.map