(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-10e76a0c"],{1688:function(e,t,s){"use strict";var r=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"imgcode-container",style:e.imgCodeStyle},[s("p",{staticClass:"title"},[e._v("图形验证码")]),e._t("default"),s("i",{staticClass:"close",on:{click:e.close}})],2)},i=[],o=(s("c5f6"),{name:"BaseAlertBox",props:{absTop:{type:Number,default:0},absLeft:{type:Number,default:0}},methods:{close:function(){this.$emit("hanleClose")}},computed:{imgCodeStyle:function(){return{top:this.absTop+"px",left:this.absLeft+"px"}}}}),n=o,a=(s("8f94"),s("2877")),u=Object(a["a"])(n,r,i,!1,null,"122a868c",null);t["a"]=u.exports},"197b":function(e,t,s){"use strict";s.d(t,"a",function(){return r}),s.d(t,"b",function(){return i}),s.d(t,"c",function(){return o});var r={notNull:"请先填写身份证号",registered:"该身份证号已注册"},i={notNull:"请先填写手机号",binded:"手机号已绑定其他身份证号",imgCodeError:"图形验证码错误",msgCodeError:"短信验证码错误",notRegister:"手机号未注册"},o={notSame:"两次输入的新密码不相同",notSame1:"两次输入的密码不相同",idNumOrPwdError:"身份证号或密码错误"}},"2fdb":function(e,t,s){"use strict";var r=s("5ca1"),i=s("d2c8"),o="includes";r(r.P+r.F*s("5147")(o),"String",{includes:function(e){return!!~i(this,e,o).indexOf(e,arguments.length>1?arguments[1]:void 0)}})},5147:function(e,t,s){var r=s("2b4c")("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(s){try{return t[r]=!1,!"/./"[e](t)}catch(i){}}return!0}},6762:function(e,t,s){"use strict";var r=s("5ca1"),i=s("c366")(!0);r(r.P,"Array",{includes:function(e){return i(this,e,arguments.length>1?arguments[1]:void 0)}}),s("9c6c")("includes")},"6e30":function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWBAMAAAA2mnEIAAAAJFBMVEUAAADZ2dnb29vZ2dnY2NjY2NjY2Nja2trZ2dnd3d3Z2dnY2NgFUa8DAAAAC3RSTlMA7CuZ89jAUkMlPW0Axj8AAABuSURBVBjTY8AHOExdghsgTM7s3bt3b5sAZi/cDQJSYGFpMHsjSIJtNwQkANnduzcX7ha33r0DyLbevZ1JUKF692YgO3r3RgUlJundW4Fs7927hRgUd+/egspGqEHVizATzS6EGxBuQ3Uzwi84AQBiZ0kvu9RnaAAAAABJRU5ErkJggg=="},"7b2b":function(e,t,s){"use strict";var r=s("cab7"),i=s.n(r);i.a},"84c5":function(e,t,s){"use strict";var r=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"forget-passwrod-crumbs"},[s("ul",{staticClass:"clearfix"},[s("li",{class:e.$route.path.includes("mobileValid")||e.$route.path.includes("identifyValid")||e.$route.path.includes("resetPassword")?"active":""},[e._v(" 手机号验证")]),s("li",{class:e.$route.path.includes("identifyValid")||e.$route.path.includes("resetPassword")?"active":""},[s("i",{staticClass:"icon-next"}),e._v("身份验证")]),s("li",{class:e.$route.path.includes("resetPassword")?"active":""},[s("i",{staticClass:"icon-next"}),e._v("重置密码")])])])},i=[],o={name:"TheCrumbs",computed:{},mounted:function(){},methods:{}},n=o,a=(s("e34a"),s("2877")),u=Object(a["a"])(n,r,i,!1,null,"4d79806a",null);t["a"]=u.exports},"8f94":function(e,t,s){"use strict";var r=s("9681"),i=s.n(r);i.a},9681:function(e,t,s){},acce:function(e,t,s){"use strict";s.d(t,"a",function(){return i});var r=s("bbd5"),i={data:function(){return{errorTips:"",errorIdNum:"",errorMobile:"",errorPwd:"",errorImgCode:"",errorMsgCode:"",isMessageCode:!1,imgCodeShow:!1,isRequesting:!1,uuid:"",delImg:{"background-image":"url("+s("6e30")+")"}}},mounted:function(){this.uuid=Object(r["b"])()},computed:{},methods:{focus:function(e,t){switch(this._onFocus(e),this.errorTips="",t){case"mobile":this.errorMobile="";break;case"idNum":this.errorIdNum="";break;case"pwd":this.errorPwd="";break;case"imgCode":this.errorImgCode="";break;case"msgCode":this.errorMsgCode=""}},del:function(e){this.sendForm[e]=""},_onFocus:function(e){for(var t=e.currentTarget.parentElement.children,s=0;s<t.length;s++)t[s]!==e.currentTarget&&t[s].classList.add("del")},_onBlur:function(e){for(var t=e.currentTarget.parentElement.children,s=0;s<t.length;s++)t[s]!==e.currentTarget&&t[s].classList.remove("del")}},watch:{}}},bbd5:function(e,t,s){"use strict";s.d(t,"a",function(){return r}),s.d(t,"b",function(){return i});s("28a5");function r(e,t){var s;return function(){for(var r=this,i=arguments.length,o=new Array(i),n=0;n<i;n++)o[n]=arguments[n];s&&clearTimeout(s),s=setTimeout(function(){e.apply(r,o)},t)}}function i(){var e,t="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(""),s=[];s[8]=s[13]=s[18]=s[23]="-",s[14]="4";for(var r=0;r<36;r++)s[r]||(e=0|16*Math.random(),s[r]=t[19===r?3&e|8:e]);return s.join("")}},cab7:function(e,t,s){},d2c8:function(e,t,s){var r=s("aae3"),i=s("be13");e.exports=function(e,t,s){if(r(t))throw TypeError("String#"+s+" doesn't accept regex!");return String(i(e))}},d3be:function(e,t,s){"use strict";s.r(t);var r=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"mobile-valid"},[s("pwd-crumbs"),s("form",{staticClass:"comForm",attrs:{action:""},on:{submit:function(t){return t.preventDefault(),e.submit(t)}}},[s("div",{staticClass:"input-wrapper"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.sendForm.queryMobile,expression:"sendForm.queryMobile"}],class:e.errorMobile?"active":"",attrs:{type:"text",placeholder:"手机号"},domProps:{value:e.sendForm.queryMobile},on:{focus:function(t){return e.focus(t,"mobile")},blur:function(t){return e.blur(t,"mobile")},input:function(t){t.target.composing||e.$set(e.sendForm,"queryMobile",t.target.value)}}}),s("i",{directives:[{name:"show",rawName:"v-show",value:e.sendForm.queryMobile,expression:"sendForm.queryMobile"}],staticClass:"del",style:e.delImg,on:{mousedown:function(t){return t.stopPropagation(),e.del("queryMobile")}}}),s("span",{staticClass:"error"},[e._v(e._s(e.errorMobile))])]),s("div",{staticClass:"input-wrapper msgcode-wrapper clearfix"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.sendForm.msgCode,expression:"sendForm.msgCode"}],class:e.errorMsgCode?"active":"",attrs:{type:"text",placeholder:"短信验证码"},domProps:{value:e.sendForm.msgCode},on:{focus:function(t){return e.focus(t,"msgCode")},blur:function(t){return e.blur(t,"msgCode")},input:function(t){t.target.composing||e.$set(e.sendForm,"msgCode",t.target.value)}}}),s("i",{directives:[{name:"show",rawName:"v-show",value:e.sendForm.msgCode,expression:"sendForm.msgCode"}],staticClass:"del",style:e.delImg,on:{mousedown:function(t){return t.stopPropagation(),e.del("msgCode")}}}),e.isMessageCode?s("span",{staticClass:"aboutcode sendcode"},[e._v(e._s(e.second)+"s重发")]):s("span",{staticClass:"aboutcode",on:{click:function(t){return e.getMessageCode()}}},[e._v("发送验证码")]),s("span",{staticClass:"error "},[e._v(e._s(e.errorMsgCode))])]),s("div",{staticClass:"submit-wrapper"},[s("div",{directives:[{name:"show",rawName:"v-show",value:e.errorTips,expression:"errorTips"}],staticClass:"error-tips"},[e._v(e._s(e.errorTips))]),s("input",{staticClass:"submit",class:e.allValid?"active":"",attrs:{type:"submit",value:"下一步",disabled:!e.allValid}})]),s("div",{staticClass:"go-login-tips"},[e._v("\n      已有账号，马上"),s("router-link",{staticClass:"register-btn",attrs:{tag:"span",to:"/37duc/user/smsLogin"}},[s("span",[e._v("登录")])])],1),e.imgCodeShow?s("img-code",{attrs:{absTop:-28,absLeft:31},on:{hanleClose:e.hanleImgCodeClose}},[s("div",{staticClass:"imgcode-content"},[s("div",{staticClass:"input-wrapper"},[s("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.sendForm.queryImgCode,expression:"sendForm.queryImgCode",modifiers:{trim:!0}}],staticClass:"input-imgcode",attrs:{type:"text",placeholder:"请输入图形验证码"},domProps:{value:e.sendForm.queryImgCode},on:{focus:function(t){return e.focus(t,"imgCode")},blur:[function(t){return e.blur(t,"imgCode")},function(t){return e.$forceUpdate()}],input:function(t){t.target.composing||e.$set(e.sendForm,"queryImgCode",t.target.value.trim())}}}),s("i",{directives:[{name:"show",rawName:"v-show",value:e.sendForm.queryImgCode,expression:"sendForm.queryImgCode"}],staticClass:"del",style:e.delImg,on:{mousedown:function(t){return t.stopPropagation(),e.del("queryImgCode")}}}),s("img",{ref:"imgCode",staticClass:"imgcode",attrs:{src:e.imgCodeSrc,alt:"图形验证码"},on:{click:e.refreshImgcode}}),s("span",{staticClass:"error"},[e._v(e._s(e.errorImgCode))])]),s("input",{staticClass:"imgcode-btn",class:e.sendForm.queryImgCode.length>=4?"active":"",attrs:{type:"button",value:"确定",disabled:e.sendForm.queryImgCode.length<4},on:{click:e.validImgcode}})])]):e._e()],1)],1)},i=[],o=(s("6762"),s("2fdb"),s("1688")),n=s("84c5"),a=s("acce"),u=s("f524"),c=s("197b"),d=s("e04d"),l={name:"TheMobileVailid",mixins:[a["a"]],data:function(){return{imgCodeSrc:"",second:60,sendForm:{queryMobile:"",msgCode:"",queryImgCode:""}}},mounted:function(){this._isCountDown()},methods:{submit:function(){var e=this,t={mobile:this.sendForm.queryMobile,captchaId:this.sendForm.msgCode,hiddenCaptcha:this.uuid};this.$api.user.mobileValidCommit(t).then(function(t){1===t.code?e.$router.push({path:"/37duc/user/forgetPassword/identifyValid"}):t.message.includes("短信验证码错误")?e.errorMsgCode=t.message:e.errorTips=t.message})},getMessageCode:function(){this.errorMobile||(this.sendForm.queryMobile?(this.imgCodeShow=!0,this.refreshImgcode(),this.sendForm.queryImgCode=""):this.errorMobile=c["b"].notNull)},sendCaptchaSms:function(){var e=this,t={mobile:this.sendForm.queryMobile,captchaId:this.uuid};this.$api.user.forgetPwdSendCaptchaSms(t).then(function(t){e.readsecond()})},validImgcode:function(){var e=this,t={code:this.sendForm.queryImgCode};this.$api.user.forgetPwdValidImgcode(t).then(function(t){1===t.code?(e.imgCodeShow=!1,e.sendCaptchaSms()):(e.refreshImgcode(),e.errorImgCode=t.message)})},isMobileRegister:function(){var e=this,t={mobile:this.sendForm.queryMobile};this.$api.user.isMobileRegister(t).then(function(t){0===t.code&&(e.errorMobile=c["b"].notRegister)})},refreshImgcode:function(){var e=Math.random();this.imgCodeSrc="".concat("http://192.168.0.102:8009","/member/register/captcha?v=").concat(e)},blur:function(e,t){switch(this._onBlur(e),t){case"mobile":this._validMobile();break}},readsecond:function(){var e=this;this.isMessageCode=!0;var t=setInterval(function(){if(e.second<=1)return e.isMessageCode=!1,e.second=60,void clearInterval(t);e.second--,Object(d["c"])("forgetSecond",e.second)},1e3)},_isCountDown:function(){var e=Object(d["a"])("forgetSecond");e>1&&(this.second=e,this.isMessageCode=!0,this.readsecond())},hanleImgCodeClose:function(){this.imgCodeShow=!1},_validMobile:function(){if(this.sendForm.queryMobile){if(!u["a"].mobileRegexs(this.sendForm.queryMobile).pass)return void(this.errorMobile=u["a"].mobileRegexs(this.sendForm.queryMobile).tip);this.isMobileRegister()}}},computed:{allValid:function(){return this.sendForm.queryMobile&&this.sendForm.msgCode&&!this.errorMobile}},components:{pwdCrumbs:n["a"],imgCode:o["a"]}},m=l,g=(s("7b2b"),s("2877")),f=Object(g["a"])(m,r,i,!1,null,"5dcfb1e0",null);t["default"]=f.exports},d6af:function(e,t,s){},e34a:function(e,t,s){"use strict";var r=s("d6af"),i=s.n(r);i.a},f524:function(e,t,s){"use strict";s("6762"),s("2fdb"),s("28a5");var r=s("e814"),i=s.n(r),o=s("d225"),n=s("b0b4"),a=void 0,u=function(e){var t,s=e.split("-"),r=s[0],i=s[1],o=s[2],n=new Date,u=n.getFullYear(),c=n.getMonth()+1,d=n.getDate();if(u==r){var l=a.formatDate(new Date);return t=a.DateDiff(l,e)+1+"天",t}var m=u-r;if(m>0)if(c==i){var g=d-o;t=g<0?m-1+"岁":m+"岁"}else{var f=c-i;t=f<0?m-1+"岁":m+"岁"}else t=-1;return t};s.d(t,"a",function(){return d});var c=function(){function e(){Object(o["a"])(this,e)}return Object(n["a"])(e,[{key:"idCardRegexs",value:function(e){var t={11:"北京",12:"天津",13:"河北",14:"山西",15:"内蒙古",21:"辽宁",22:"吉林",23:"黑龙江 ",31:"上海",32:"江苏",33:"浙江",34:"安徽",35:"福建",36:"江西",37:"山东",41:"河南",42:"湖北 ",43:"湖南",44:"广东",45:"广西",46:"海南",50:"重庆",51:"四川",52:"贵州",53:"云南",54:"西藏 ",61:"陕西",62:"甘肃",63:"青海",64:"宁夏",65:"新疆",71:"台湾",81:"香港",82:"澳门",91:"国外 "},s="身份证号格式错误",r=["7","9","10","5","8","4","2","1","6","3","7","9","10","5","8","4","2"],o=["1","0","X","9","8","7","6","5","4","3","2"],n="",a=!0;function u(e){var s=/^[1-9]\d{5}$/.test(e);return!!s&&!!t[i()(e.substring(0,2))]}function c(e){var t=/^[1-9]\d{3}((0[1-9])|(1[0-2]))((0[1-9])|([1-2][0-9])|(3[0-1]))$/.test(e);if(!t)return!1;var s=i()(e.substring(0,4),10),r=i()(e.substring(4,6),10),o=i()(e.substring(6),10),n=new Date(s,r-1,o);return!(n>new Date)&&(n.getFullYear()==s&&n.getMonth()==r-1&&n.getDate()==o)}function d(e){for(var t=e.substring(0,17),s=0,n=0;n<17;n++)s+=i()(t.charAt(n),10)*i()(r[n]);var a=s%11;return o[a]}function l(e){if(15==e.length){var t=e.substring(0,6)+"19"+e.substring(6),s=d(t);return t+s}return 18==e.length?e:null}if(e&&/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(e))if(t[e.substr(0,2)]){if(15===e.length){var m=/^[1-9]\d{7}((0[1-9])|(1[0-2]))((0[1-9])|([1-2][0-9])|(3[0-1]))\d{3}$/.test(e);m||(a=!1);var g=e.substring(0,6);if(m=u(g),!m)return{pass:!1,tip:"身份证号格式错误"};var f="19"+e.substring(6,12);if(m=c(f),!m)return{pass:!1,tip:"身份证号格式错误"};e=l(e)}if(18===e.length){e=e.split("");for(var p=[7,9,10,5,8,4,2,1,6,3,7,9,10,5,8,4,2],h=[1,0,"X",9,8,7,6,5,4,3,2],b=0,v=0,C=0,w=0;w<17;w++)v=e[w],C=p[w],b+=v*C;var y=h[b%11];y!=e[17]&&(n=s,a=!1)}}else n=s,a=!1;else n=s,a=!1;return{pass:a,tip:n}}},{key:"mobileRegexs",value:function(e){var t="手机号格式错误",s=/^1[3|4|5|6|7|8|9]\d{9}$/;return e&&!s.test(e)?{pass:!1,tip:t}:{pass:!0,tip:""}}},{key:"pwdRegexs",value:function(e){var t="密码格式错误",s=/^[\da-zA-Z0-9~`!@#\/'|\[\]:,;$%^&*<>()}{?=\-+]{4,20}$/;return!s.test(e)&&e?{pass:!1,tip:t}:{pass:!0,tip:""}}},{key:"years16Regexs",value:function(e){var t,s=!1,r="仅支持16周岁及以上用户注册";15==e.length&&(e=e.substring(0,6)+"19"+e.substring(6));var o=e.slice(6,10)+"-"+e.slice(10,12)+"-"+e.slice(12,14);return t=u(o),"-1"==t?{pass:s,tip:r}:t.includes("天")?{pass:s,tip:r}:t.includes("岁")?i()(t)<16?{pass:s,tip:r}:{pass:!0,tip:""}:void 0}}]),e}(),d=new c}}]);
//# sourceMappingURL=chunk-10e76a0c.40a58e99.js.map