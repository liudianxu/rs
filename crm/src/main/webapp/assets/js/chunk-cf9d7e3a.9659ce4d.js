(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-cf9d7e3a"],{1240:function(e,t,r){"use strict";var s=r("e970"),i=r.n(s);i.a},1688:function(e,t,r){"use strict";var s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"imgcode-container",style:e.imgCodeStyle},[r("p",{staticClass:"title"},[e._v("图形验证码")]),e._t("default"),r("i",{staticClass:"close",on:{click:e.close}})],2)},i=[],o=(r("c5f6"),{name:"BaseAlertBox",props:{absTop:{type:Number,default:0},absLeft:{type:Number,default:0}},methods:{close:function(){this.$emit("hanleClose")}},computed:{imgCodeStyle:function(){return{top:this.absTop+"px",left:this.absLeft+"px"}}}}),n=o,a=(r("8f94"),r("2877")),u=Object(a["a"])(n,s,i,!1,null,"122a868c",null);t["a"]=u.exports},"197b":function(e,t,r){"use strict";r.d(t,"a",function(){return s}),r.d(t,"b",function(){return i}),r.d(t,"c",function(){return o});var s={notNull:"请先填写身份证号",registered:"该身份证号已注册"},i={notNull:"请先填写手机号",binded:"手机号已绑定其他身份证号",imgCodeError:"图形验证码错误",msgCodeError:"短信验证码错误",notRegister:"手机号未注册"},o={notSame:"两次输入的新密码不相同",notSame1:"两次输入的密码不相同",idNumOrPwdError:"身份证号或密码错误"}},"1ed5":function(e,t,r){"use strict";r.r(t);var s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"register-container"},[e.succeedShow?e._e():r("form",{staticClass:"comForm",attrs:{action:""},on:{submit:function(t){return t.preventDefault(),e.submit(t)}}},[r("div",{staticClass:"input-wrapper"},[r("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.sendForm.idNum,expression:"sendForm.idNum",modifiers:{trim:!0}}],class:e.errorIdNum?"active":"",attrs:{type:"text",placeholder:"身份证号"},domProps:{value:e.sendForm.idNum},on:{focus:function(t){return e.focus(t,"idNum")},blur:[function(t){return e.blur(t,"idNum")},function(t){return e.$forceUpdate()}],input:function(t){t.target.composing||e.$set(e.sendForm,"idNum",t.target.value.trim())}}}),r("i",{directives:[{name:"show",rawName:"v-show",value:e.sendForm.idNum,expression:"sendForm.idNum"}],staticClass:"del",style:e.delImg,on:{mousedown:function(t){return t.stopPropagation(),e.del("idNum")}}}),r("span",{staticClass:"error"},[e._v(e._s(e.errorIdNum))])]),r("div",{staticClass:"input-wrapper"},[r("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.sendForm.queryName,expression:"sendForm.queryName",modifiers:{trim:!0}}],attrs:{type:"text",placeholder:"姓名"},domProps:{value:e.sendForm.queryName},on:{focus:function(t){return e.focus(t)},blur:[function(t){return e.blur(t)},function(t){return e.$forceUpdate()}],input:function(t){t.target.composing||e.$set(e.sendForm,"queryName",t.target.value.trim())}}}),r("i",{directives:[{name:"show",rawName:"v-show",value:e.sendForm.queryName,expression:"sendForm.queryName"}],staticClass:"del",style:e.delImg,on:{mousedown:function(t){return t.stopPropagation(),e.del("queryName")}}})]),r("div",{staticClass:"input-wrapper"},[r("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.sendForm.queryMobile,expression:"sendForm.queryMobile",modifiers:{trim:!0}}],class:e.errorMobile?"active":"",attrs:{type:"text",placeholder:"手机号"},domProps:{value:e.sendForm.queryMobile},on:{focus:function(t){return e.focus(t,"mobile")},blur:[function(t){return e.blur(t,"mobile")},function(t){return e.$forceUpdate()}],input:function(t){t.target.composing||e.$set(e.sendForm,"queryMobile",t.target.value.trim())}}}),r("i",{directives:[{name:"show",rawName:"v-show",value:e.sendForm.queryMobile,expression:"sendForm.queryMobile"}],staticClass:"del",style:e.delImg,on:{mousedown:function(t){return t.stopPropagation(),e.del("queryMobile")}}}),r("span",{staticClass:"error"},[e._v(e._s(e.errorMobile))])]),r("div",{staticClass:"input-wrapper msgcode-wrapper clearfix"},[r("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.sendForm.msgCode,expression:"sendForm.msgCode",modifiers:{trim:!0}}],class:e.errorMsgCode?"active":"",attrs:{type:"text",placeholder:"短信验证码"},domProps:{value:e.sendForm.msgCode},on:{focus:function(t){return e.focus(t,"msgCode")},blur:[function(t){return e.blur(t,"msgCode")},function(t){return e.$forceUpdate()}],input:function(t){t.target.composing||e.$set(e.sendForm,"msgCode",t.target.value.trim())}}}),r("i",{directives:[{name:"show",rawName:"v-show",value:e.sendForm.msgCode,expression:"sendForm.msgCode"}],staticClass:"del",style:e.delImg,on:{mousedown:function(t){return t.stopPropagation(),e.del("msgCode")}}}),e.isMessageCode?r("span",{staticClass:"aboutcode sendcode"},[e._v(e._s(e.second)+"s重发")]):r("span",{staticClass:"aboutcode",on:{click:function(t){return e.getMessageCode()}}},[e._v("发送验证码")]),r("span",{staticClass:"error"},[e._v(e._s(e.errorMsgCode))])]),r("div",{staticClass:"submit-wrapper"},[r("p",{staticClass:"register-tip"},[e._v("注册即视为同意"),r("span",{on:{click:e.showProtocal}},[e._v("《会员注册协议》")])]),r("div",{directives:[{name:"show",rawName:"v-show",value:e.errorTips,expression:"errorTips"}],staticClass:"error-tips"},[e._v(e._s(e.errorTips))]),r("input",{staticClass:"submit",class:e.allValid?"active":"",attrs:{type:"submit",value:"注册",disabled:!e.allValid}})]),r("div",{staticClass:"go-login-tips"},[e._v("\n      已有账号，马上\n      "),r("router-link",{staticClass:"register-btn",attrs:{tag:"span",to:"/37duc/user/smsLogin"}},[r("span",[e._v("登录")])])],1),e.imgCodeShow?r("img-code",{attrs:{absTop:51,absLeft:31},on:{hanleClose:e.hanleImgCodeClose}},[r("div",{staticClass:"imgcode-content"},[r("div",{staticClass:"input-wrapper"},[r("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.sendForm.queryImgCode,expression:"sendForm.queryImgCode",modifiers:{trim:!0}}],staticClass:"input-imgcode",attrs:{type:"text",placeholder:"请输入图形验证码"},domProps:{value:e.sendForm.queryImgCode},on:{focus:function(t){return e.focus(t,"imgCode")},blur:[function(t){return e.blur(t,"imgCode")},function(t){return e.$forceUpdate()}],input:function(t){t.target.composing||e.$set(e.sendForm,"queryImgCode",t.target.value.trim())}}}),r("i",{directives:[{name:"show",rawName:"v-show",value:e.sendForm.queryImgCode,expression:"sendForm.queryImgCode"}],staticClass:"del",style:e.delImg,on:{mousedown:function(t){return t.stopPropagation(),e.del("queryImgCode")}}}),r("img",{ref:"imgCode",staticClass:"imgcode",attrs:{src:e.imgCodeSrc,alt:"图形验证码"},on:{click:e.refreshImgcode}}),r("span",{staticClass:"error"},[e._v(e._s(e.errorImgCode))])]),r("input",{staticClass:"imgcode-btn",class:e.sendForm.queryImgCode.length>=4?"active":"",attrs:{type:"button",value:"确定",disabled:e.sendForm.queryImgCode.length<4},on:{click:e.validImgcode}})])]):e._e()],1),r("transition",{attrs:{name:"fade"}},[e.protocalShow?r("base-pop-box",{attrs:{title:"会员注册协议",width:874,height:e.wHeight-200,content:e.protocalCon},on:{dealClose:e.handleProtocalClose}}):e._e()],1)],1)},i=[],o=(r("6762"),r("2fdb"),r("cebc")),n=r("9948"),a=r("1688"),u=r("197b"),d=r("e04d"),c=r("acce"),l=r("2f62"),m=r("f524"),g={name:"login",mixins:[c["a"]],data:function(){return{imgCodeSrc:"",succeedShow:!1,second:60,sendForm:{idNum:"",queryName:"",queryMobile:"",queryImgCode:"",msgCode:""},protocalShow:!1,protocalCon:"",wHeight:""}},mounted:function(){this._isCountDown(),this.getProtocalCon(),this.wHeight=document.documentElement.clientHeight||document.body.clientHeight,console.log(12,this.wHeight-300)},methods:Object(o["a"])({submit:function(){var e=this,t={idNum:this.sendForm.idNum,mobile:this.sendForm.queryMobile,name:this.sendForm.queryName,captchaId:this.sendForm.msgCode,hiddenCaptcha:this.uuid};this.$api.user.register(t).then(function(t){1===t.code?(e.SET_TOKEN(t.data.csrfToken),e.SET_USER_INFO(t.data.member),e.$router.push({path:"/37duc/user/register/succeed"})):(console.log(33),t.message.includes("短信验证码错误")?e.errorMsgCode=t.message:e.errorTips=t.message)})},getMessageCode:function(){this.errorMobile||(this.sendForm.queryMobile?(this.imgCodeShow=!0,this.refreshImgcode(),this.sendForm.queryImgCode=""):this.errorMobile=u["b"].notNull)},validImgcode:function(){var e=this,t={code:this.sendForm.queryImgCode};this.$api.user.registerValidImgcode(t).then(function(t){1===t.code?(e.imgCodeShow=!1,e.sendCaptchaSms()):(e.refreshImgcode(),e.errorImgCode=t.message)})},refreshImgcode:function(){var e=Math.random();this.imgCodeSrc="".concat("http://43.254.47.195:9999","/member/register/captcha?v=").concat(e)},sendCaptchaSms:function(){var e=this,t={idNum:this.sendForm.idNum,mobile:this.sendForm.queryMobile,captchaId:this.uuid};this.$api.user.registerSendCaptchaSms(t).then(function(t){e.readsecond()})},getProtocalCon:function(){var e=this;this.$api.user.getRegisterProtocal().then(function(t){e.protocalCon=t.data.content})},showProtocal:function(){this.protocalShow=!0},handleProtocalClose:function(){this.protocalShow=!1},hanleImgCodeClose:function(){this.imgCodeShow=!1},blur:function(e,t){switch(this._onBlur(e),t){case"idNum":this._validIdNum();break;case"mobile":this._validMobile();break}},isMobileBind:function(){var e=this,t={mobile:this.sendForm.queryMobile};this.$api.user.isMobileBind(t).then(function(t){0===t.code&&(e.errorMobile=u["b"].binded)})},isIdNumRegister:function(){var e=this,t={idNum:this.sendForm.idNum};this.$api.user.isIdNumRegister(t).then(function(t){0===t.code&&(e.errorIdNum=u["a"].registered)})},setMobileSendTime:function(){var e=this,t=setInterval(function(){if(e.count<=1)return e.mobileSendShow=!1,e.count=5,void clearInterval(t);e.count--},1e3)},readsecond:function(){var e=this;this.isMessageCode=!0;var t=setInterval(function(){if(e.second<=1)return e.isMessageCode=!1,e.second=60,void clearInterval(t);e.second--,Object(d["c"])("registerSecond",e.second)},1e3)},_isCountDown:function(){var e=Object(d["a"])("registerSecond");e>1&&(this.second=e,this.isMessageCode=!0,this.readsecond())},_validIdNum:function(){if(this.sendForm.idNum){if(!m["a"].idCardRegexs(this.sendForm.idNum).pass)return void(this.errorIdNum=m["a"].idCardRegexs(this.sendForm.idNum).tip);if(!m["a"].years16Regexs(this.sendForm.idNum).pass)return void(this.errorIdNum=m["a"].years16Regexs(this.sendForm.idNum).tip);this.isIdNumRegister()}},_validMobile:function(){if(this.sendForm.queryMobile){if(!m["a"].mobileRegexs(this.sendForm.queryMobile).pass)return void(this.errorMobile=m["a"].mobileRegexs(this.sendForm.queryMobile).tip);this.isMobileBind()}}},Object(l["d"])(["SET_TOKEN","SET_USER_INFO"])),computed:{allValid:function(){return this.sendForm.idNum&&this.sendForm.queryName&&this.sendForm.queryMobile&&this.sendForm.msgCode&&!this.errorIdNum&&!this.errorMobile}},components:{BasePopBox:n["a"],imgCode:a["a"]}},h=g,p=(r("6d85"),r("2877")),f=Object(p["a"])(h,s,i,!1,null,"09ae1859",null);t["default"]=f.exports},"2fdb":function(e,t,r){"use strict";var s=r("5ca1"),i=r("d2c8"),o="includes";s(s.P+s.F*r("5147")(o),"String",{includes:function(e){return!!~i(this,e,o).indexOf(e,arguments.length>1?arguments[1]:void 0)}})},5147:function(e,t,r){var s=r("2b4c")("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(r){try{return t[s]=!1,!"/./"[e](t)}catch(i){}}return!0}},6762:function(e,t,r){"use strict";var s=r("5ca1"),i=r("c366")(!0);s(s.P,"Array",{includes:function(e){return i(this,e,arguments.length>1?arguments[1]:void 0)}}),r("9c6c")("includes")},"6d85":function(e,t,r){"use strict";var s=r("d9a3"),i=r.n(s);i.a},"6e30":function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWBAMAAAA2mnEIAAAAJFBMVEUAAADZ2dnb29vZ2dnY2NjY2NjY2Nja2trZ2dnd3d3Z2dnY2NgFUa8DAAAAC3RSTlMA7CuZ89jAUkMlPW0Axj8AAABuSURBVBjTY8AHOExdghsgTM7s3bt3b5sAZi/cDQJSYGFpMHsjSIJtNwQkANnduzcX7ha33r0DyLbevZ1JUKF692YgO3r3RgUlJundW4Fs7927hRgUd+/egspGqEHVizATzS6EGxBuQ3Uzwi84AQBiZ0kvu9RnaAAAAABJRU5ErkJggg=="},"8f94":function(e,t,r){"use strict";var s=r("9681"),i=r.n(s);i.a},9681:function(e,t,r){},9948:function(e,t,r){"use strict";var s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"pop-container"},[r("div",{staticClass:"pop-wrapper",style:e.popStyle},[r("p",{staticClass:"title"},[e._v(e._s(e.title))]),r("div",{staticClass:"content",domProps:{innerHTML:e._s(e.content)}}),r("i",{staticClass:"close",on:{click:e.goClocse}})]),r("div",{staticClass:"cover",on:{click:e.goClocse}})])},i=[],o=(r("c5f6"),{name:"BaseAlertBox",props:{title:{type:String,default:""},content:{type:String,default:""},width:{type:Number},height:{type:Number}},data:function(){return{wWidth:document.documentElement.clientWidth||document.body.clientWidth,wHeight:document.documentElement.clientHeight||document.body.clientHeight}},methods:{goClocse:function(){this.$emit("dealClose")}},computed:{popStyle:function(){return{width:this.width?this.width+"px":"100%",height:this.height?this.height+"px":"100%",left:(this.wWidth-this.width)/2+"px",top:(this.wHeight-this.height)/2-15+"px"}}}}),n=o,a=(r("1240"),r("2877")),u=Object(a["a"])(n,s,i,!1,null,null,null);t["a"]=u.exports},acce:function(e,t,r){"use strict";r.d(t,"a",function(){return i});var s=r("bbd5"),i={data:function(){return{errorTips:"",errorIdNum:"",errorMobile:"",errorPwd:"",errorImgCode:"",errorMsgCode:"",isMessageCode:!1,imgCodeShow:!1,isRequesting:!1,uuid:"",delImg:{"background-image":"url("+r("6e30")+")"}}},mounted:function(){this.uuid=Object(s["b"])()},computed:{},methods:{focus:function(e,t){switch(this._onFocus(e),this.errorTips="",t){case"mobile":this.errorMobile="";break;case"idNum":this.errorIdNum="";break;case"pwd":this.errorPwd="";break;case"imgCode":this.errorImgCode="";break;case"msgCode":this.errorMsgCode=""}},del:function(e){this.sendForm[e]=""},_onFocus:function(e){for(var t=e.currentTarget.parentElement.children,r=0;r<t.length;r++)t[r]!==e.currentTarget&&t[r].classList.add("del")},_onBlur:function(e){for(var t=e.currentTarget.parentElement.children,r=0;r<t.length;r++)t[r]!==e.currentTarget&&t[r].classList.remove("del")}},watch:{}}},bbd5:function(e,t,r){"use strict";r.d(t,"a",function(){return s}),r.d(t,"b",function(){return i});r("28a5");function s(e,t){var r;return function(){for(var s=this,i=arguments.length,o=new Array(i),n=0;n<i;n++)o[n]=arguments[n];r&&clearTimeout(r),r=setTimeout(function(){e.apply(s,o)},t)}}function i(){var e,t="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(""),r=[];r[8]=r[13]=r[18]=r[23]="-",r[14]="4";for(var s=0;s<36;s++)r[s]||(e=0|16*Math.random(),r[s]=t[19===s?3&e|8:e]);return r.join("")}},d2c8:function(e,t,r){var s=r("aae3"),i=r("be13");e.exports=function(e,t,r){if(s(t))throw TypeError("String#"+r+" doesn't accept regex!");return String(i(e))}},d9a3:function(e,t,r){},e970:function(e,t,r){},f524:function(e,t,r){"use strict";r("6762"),r("2fdb"),r("28a5");var s=r("e814"),i=r.n(s),o=r("d225"),n=r("b0b4"),a=void 0,u=function(e){var t,r=e.split("-"),s=r[0],i=r[1],o=r[2],n=new Date,u=n.getFullYear(),d=n.getMonth()+1,c=n.getDate();if(u==s){var l=a.formatDate(new Date);return t=a.DateDiff(l,e)+1+"天",t}var m=u-s;if(m>0)if(d==i){var g=c-o;t=g<0?m-1+"岁":m+"岁"}else{var h=d-i;t=h<0?m-1+"岁":m+"岁"}else t=-1;return t};r.d(t,"a",function(){return c});var d=function(){function e(){Object(o["a"])(this,e)}return Object(n["a"])(e,[{key:"idCardRegexs",value:function(e){var t={11:"北京",12:"天津",13:"河北",14:"山西",15:"内蒙古",21:"辽宁",22:"吉林",23:"黑龙江 ",31:"上海",32:"江苏",33:"浙江",34:"安徽",35:"福建",36:"江西",37:"山东",41:"河南",42:"湖北 ",43:"湖南",44:"广东",45:"广西",46:"海南",50:"重庆",51:"四川",52:"贵州",53:"云南",54:"西藏 ",61:"陕西",62:"甘肃",63:"青海",64:"宁夏",65:"新疆",71:"台湾",81:"香港",82:"澳门",91:"国外 "},r="身份证号格式错误",s=["7","9","10","5","8","4","2","1","6","3","7","9","10","5","8","4","2"],o=["1","0","X","9","8","7","6","5","4","3","2"],n="",a=!0;function u(e){var r=/^[1-9]\d{5}$/.test(e);return!!r&&!!t[i()(e.substring(0,2))]}function d(e){var t=/^[1-9]\d{3}((0[1-9])|(1[0-2]))((0[1-9])|([1-2][0-9])|(3[0-1]))$/.test(e);if(!t)return!1;var r=i()(e.substring(0,4),10),s=i()(e.substring(4,6),10),o=i()(e.substring(6),10),n=new Date(r,s-1,o);return!(n>new Date)&&(n.getFullYear()==r&&n.getMonth()==s-1&&n.getDate()==o)}function c(e){for(var t=e.substring(0,17),r=0,n=0;n<17;n++)r+=i()(t.charAt(n),10)*i()(s[n]);var a=r%11;return o[a]}function l(e){if(15==e.length){var t=e.substring(0,6)+"19"+e.substring(6),r=c(t);return t+r}return 18==e.length?e:null}if(e&&/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(e))if(t[e.substr(0,2)]){if(15===e.length){var m=/^[1-9]\d{7}((0[1-9])|(1[0-2]))((0[1-9])|([1-2][0-9])|(3[0-1]))\d{3}$/.test(e);m||(a=!1);var g=e.substring(0,6);if(m=u(g),!m)return{pass:!1,tip:"身份证号格式错误"};var h="19"+e.substring(6,12);if(m=d(h),!m)return{pass:!1,tip:"身份证号格式错误"};e=l(e)}if(18===e.length){e=e.split("");for(var p=[7,9,10,5,8,4,2,1,6,3,7,9,10,5,8,4,2],f=[1,0,"X",9,8,7,6,5,4,3,2],v=0,b=0,C=0,w=0;w<17;w++)b=e[w],C=p[w],v+=b*C;var y=f[v%11];y!=e[17]&&(n=r,a=!1)}}else n=r,a=!1;else n=r,a=!1;return{pass:a,tip:n}}},{key:"mobileRegexs",value:function(e){var t="手机号格式错误",r=/^1[3|4|5|6|7|8|9]\d{9}$/;return e&&!r.test(e)?{pass:!1,tip:t}:{pass:!0,tip:""}}},{key:"pwdRegexs",value:function(e){var t="密码格式错误",r=/^[\da-zA-Z0-9~`!@#\/'|\[\]:,;$%^&*<>()}{?=\-+]{4,20}$/;return!r.test(e)&&e?{pass:!1,tip:t}:{pass:!0,tip:""}}},{key:"years16Regexs",value:function(e){var t,r=!1,s="仅支持16周岁及以上用户注册";15==e.length&&(e=e.substring(0,6)+"19"+e.substring(6));var o=e.slice(6,10)+"-"+e.slice(10,12)+"-"+e.slice(12,14);return t=u(o),"-1"==t?{pass:r,tip:s}:t.includes("天")?{pass:r,tip:s}:t.includes("岁")?i()(t)<16?{pass:r,tip:s}:{pass:!0,tip:""}:void 0}}]),e}(),c=new d}}]);
//# sourceMappingURL=chunk-cf9d7e3a.9659ce4d.js.map