(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-51318c7b"],{"2fdb":function(t,e,r){"use strict";var s=r("5ca1"),i=r("d2c8"),n="includes";s(s.P+s.F*r("5147")(n),"String",{includes:function(t){return!!~i(this,t,n).indexOf(t,arguments.length>1?arguments[1]:void 0)}})},5147:function(t,e,r){var s=r("2b4c")("match");t.exports=function(t){var e=/./;try{"/./"[t](e)}catch(r){try{return e[s]=!1,!"/./"[t](e)}catch(i){}}return!0}},6762:function(t,e,r){"use strict";var s=r("5ca1"),i=r("c366")(!0);s(s.P,"Array",{includes:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}}),r("9c6c")("includes")},"6e30":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWBAMAAAA2mnEIAAAAJFBMVEUAAADZ2dnb29vZ2dnY2NjY2NjY2Nja2trZ2dnd3d3Z2dnY2NgFUa8DAAAAC3RSTlMA7CuZ89jAUkMlPW0Axj8AAABuSURBVBjTY8AHOExdghsgTM7s3bt3b5sAZi/cDQJSYGFpMHsjSIJtNwQkANnduzcX7ha33r0DyLbevZ1JUKF692YgO3r3RgUlJundW4Fs7927hRgUd+/egspGqEHVizATzS6EGxBuQ3Uzwi84AQBiZ0kvu9RnaAAAAABJRU5ErkJggg=="},acce:function(t,e,r){"use strict";r.d(e,"a",function(){return i});var s=r("bbd5"),i={data:function(){return{errorTips:"",errorIdNum:"",errorMobile:"",errorPwd:"",errorImgCode:"",errorMsgCode:"",isMessageCode:!1,imgCodeShow:!1,isRequesting:!1,uuid:"",delImg:{"background-image":"url("+r("6e30")+")"}}},mounted:function(){this.uuid=Object(s["b"])()},computed:{},methods:{focus:function(t,e){switch(this._onFocus(t),this.errorTips="",e){case"mobile":this.errorMobile="";break;case"idNum":this.errorIdNum="";break;case"pwd":this.errorPwd="";break;case"imgCode":this.errorImgCode="";break;case"msgCode":this.errorMsgCode=""}},del:function(t){this.sendForm[t]=""},_onFocus:function(t){for(var e=t.currentTarget.parentElement.children,r=0;r<e.length;r++)e[r]!==t.currentTarget&&e[r].classList.add("del")},_onBlur:function(t){for(var e=t.currentTarget.parentElement.children,r=0;r<e.length;r++)e[r]!==t.currentTarget&&e[r].classList.remove("del")}},watch:{}}},bbd5:function(t,e,r){"use strict";r.d(e,"a",function(){return s}),r.d(e,"b",function(){return i});r("28a5");function s(t,e){var r;return function(){for(var s=this,i=arguments.length,n=new Array(i),a=0;a<i;a++)n[a]=arguments[a];r&&clearTimeout(r),r=setTimeout(function(){t.apply(s,n)},e)}}function i(){var t,e="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(""),r=[];r[8]=r[13]=r[18]=r[23]="-",r[14]="4";for(var s=0;s<36;s++)r[s]||(t=0|16*Math.random(),r[s]=e[19===s?3&t|8:t]);return r.join("")}},be68:function(t,e,r){},d188:function(t,e,r){"use strict";var s=r("be68"),i=r.n(s);i.a},d2c8:function(t,e,r){var s=r("aae3"),i=r("be13");t.exports=function(t,e,r){if(s(e))throw TypeError("String#"+r+" doesn't accept regex!");return String(i(t))}},d427:function(t,e,r){"use strict";r.r(e);var s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"pwd-login-container"},[r("div",{staticClass:"login-tab clearfix"},[r("router-link",{staticClass:"login-tab-item",attrs:{tag:"div",to:"/37duc/user/smsLogin"}},[r("span",{staticClass:"login-link"},[t._v("短信登录")])]),r("router-link",{staticClass:"login-tab-item",attrs:{tag:"div",to:"/37duc/user/pwdLogin"}},[r("span",{staticClass:"login-link"},[t._v("密码登录")])])],1),r("form",{staticClass:"comForm",attrs:{action:""},on:{submit:function(e){return e.preventDefault(),t.submit(e)}}},[r("div",{staticClass:"input-wrapper"},[r("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.sendForm.idNum,expression:"sendForm.idNum",modifiers:{trim:!0}}],class:t.errorIdNum?"active":"",attrs:{type:"text",placeholder:"身份证号"},domProps:{value:t.sendForm.idNum},on:{focus:function(e){return t.focus(e,"idNum")},blur:[function(e){return t.blur(e,"idNum")},function(e){return t.$forceUpdate()}],input:function(e){e.target.composing||t.$set(t.sendForm,"idNum",e.target.value.trim())}}}),r("i",{directives:[{name:"show",rawName:"v-show",value:t.sendForm.idNum,expression:"sendForm.idNum"}],staticClass:"del",style:t.delImg,on:{mousedown:function(e){return e.stopPropagation(),t.del("idNum")}}}),r("span",{staticClass:"error"},[t._v(t._s(t.errorIdNum))])]),r("div",{staticClass:"input-wrapper clearfix"},[r("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.sendForm.pwd,expression:"sendForm.pwd",modifiers:{trim:!0}}],attrs:{type:"password",autocomplete:"off",placeholder:"密码"},domProps:{value:t.sendForm.pwd},on:{focus:function(e){return t.focus(e)},blur:[function(e){return t.blur(e,"pwd")},function(e){return t.$forceUpdate()}],input:function(e){e.target.composing||t.$set(t.sendForm,"pwd",e.target.value.trim())}}}),r("i",{directives:[{name:"show",rawName:"v-show",value:t.sendForm.pwd,expression:"sendForm.pwd"}],staticClass:"del",style:t.delImg,on:{mousedown:function(e){return e.stopPropagation(),t.del("pwd")}}})]),r("div",{staticClass:"submit-wrapper"},[r("div",{directives:[{name:"show",rawName:"v-show",value:t.errorTips,expression:"errorTips"}],staticClass:"error-tips"},[t._v(t._s(t.errorTips))]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.loginBtnText,expression:"loginBtnText"}],staticClass:"submit",class:t.allValid?"active":"",attrs:{type:"submit",disabled:!t.allValid||t.isRequesting},domProps:{value:t.loginBtnText},on:{input:function(e){e.target.composing||(t.loginBtnText=e.target.value)}}})]),r("div",{staticClass:"clearfix forget-register-wrapper"},[r("router-link",{staticClass:"forget-btn",attrs:{tag:"div",to:"/37duc/user/forgetPassword"}},[r("span",{staticClass:"forget-link"},[t._v("忘记密码")])]),r("router-link",{staticClass:"register-btn",attrs:{tag:"div",to:"/37duc/user/register"}},[r("span",{staticClass:"register-link"},[t._v("立即注册")])])],1)])])},i=[],n=r("cebc"),a=r("acce"),o=r("f524"),u=r("2f62"),d={name:"pwdLogin",mixins:[a["a"]],data:function(){return{loginBtnText:"登录",isRedicturl:!1,isRedicturlProductId:"",sendForm:{idNum:"",pwd:""}}},mounted:function(){},methods:Object(n["a"])({submit:function(){var t=this;this.loginBtnText="登录中....",this.isRequesting=!0;var e={idNum:this.sendForm.idNum,password:this.sendForm.pwd};this.$api.user.pwdLogin(e).then(function(e){t.isRequesting=!1,t.loginBtnText="登录",1===e.code?(t.SET_TOKEN(e.data.csrfToken),t.SET_USER_INFO(e.data.member),t.isRedicturl?t.$router.push({path:"/37duc/product/detail/".concat(t.isRedicturlProductId),query:{productId:t.isRedicturlProductId}}):t.$router.push("/37duc/personCenter")):t.errorTips=e.message})},blur:function(t,e){switch(this._onBlur(t),e){case"idNum":this._validIdNum();break}},_validIdNum:function(){this.sendForm.idNum&&(o["a"].idCardRegexs(this.sendForm.idNum).pass||(this.errorIdNum=o["a"].idCardRegexs(this.sendForm.idNum).tip))}},Object(u["d"])(["SET_TOKEN","SET_USER_INFO"])),computed:{allValid:function(){return this.sendForm.idNum&&this.sendForm.pwd&&!this.errorIdNum}},beforeRouteEnter:function(t,e,r){r(function(t){e.params.redirctUrl&&(t.isRedicturl=!0,t.isRedicturlProductId=e.params.productId)})},components:{}},c=d,l=(r("d188"),r("2877")),m=Object(l["a"])(c,s,i,!1,null,"2a66cb34",null);e["default"]=m.exports},f524:function(t,e,r){"use strict";r("6762"),r("2fdb"),r("28a5");var s=r("e814"),i=r.n(s),n=r("d225"),a=r("b0b4"),o=void 0,u=function(t){var e,r=t.split("-"),s=r[0],i=r[1],n=r[2],a=new Date,u=a.getFullYear(),d=a.getMonth()+1,c=a.getDate();if(u==s){var l=o.formatDate(new Date);return e=o.DateDiff(l,t)+1+"天",e}var m=u-s;if(m>0)if(d==i){var p=c-n;e=p<0?m-1+"岁":m+"岁"}else{var f=d-i;e=f<0?m-1+"岁":m+"岁"}else e=-1;return e};r.d(e,"a",function(){return c});var d=function(){function t(){Object(n["a"])(this,t)}return Object(a["a"])(t,[{key:"idCardRegexs",value:function(t){var e={11:"北京",12:"天津",13:"河北",14:"山西",15:"内蒙古",21:"辽宁",22:"吉林",23:"黑龙江 ",31:"上海",32:"江苏",33:"浙江",34:"安徽",35:"福建",36:"江西",37:"山东",41:"河南",42:"湖北 ",43:"湖南",44:"广东",45:"广西",46:"海南",50:"重庆",51:"四川",52:"贵州",53:"云南",54:"西藏 ",61:"陕西",62:"甘肃",63:"青海",64:"宁夏",65:"新疆",71:"台湾",81:"香港",82:"澳门",91:"国外 "},r="身份证号格式错误",s=["7","9","10","5","8","4","2","1","6","3","7","9","10","5","8","4","2"],n=["1","0","X","9","8","7","6","5","4","3","2"],a="",o=!0;function u(t){var r=/^[1-9]\d{5}$/.test(t);return!!r&&!!e[i()(t.substring(0,2))]}function d(t){var e=/^[1-9]\d{3}((0[1-9])|(1[0-2]))((0[1-9])|([1-2][0-9])|(3[0-1]))$/.test(t);if(!e)return!1;var r=i()(t.substring(0,4),10),s=i()(t.substring(4,6),10),n=i()(t.substring(6),10),a=new Date(r,s-1,n);return!(a>new Date)&&(a.getFullYear()==r&&a.getMonth()==s-1&&a.getDate()==n)}function c(t){for(var e=t.substring(0,17),r=0,a=0;a<17;a++)r+=i()(e.charAt(a),10)*i()(s[a]);var o=r%11;return n[o]}function l(t){if(15==t.length){var e=t.substring(0,6)+"19"+t.substring(6),r=c(e);return e+r}return 18==t.length?t:null}if(t&&/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(t))if(e[t.substr(0,2)]){if(15===t.length){var m=/^[1-9]\d{7}((0[1-9])|(1[0-2]))((0[1-9])|([1-2][0-9])|(3[0-1]))\d{3}$/.test(t);m||(o=!1);var p=t.substring(0,6);if(m=u(p),!m)return{pass:!1,tip:"身份证号格式错误"};var f="19"+t.substring(6,12);if(m=d(f),!m)return{pass:!1,tip:"身份证号格式错误"};t=l(t)}if(18===t.length){t=t.split("");for(var g=[7,9,10,5,8,4,2,1,6,3,7,9,10,5,8,4,2],v=[1,0,"X",9,8,7,6,5,4,3,2],h=0,b=0,w=0,A=0;A<17;A++)b=t[A],w=g[A],h+=b*w;var N=v[h%11];N!=t[17]&&(a=r,o=!1)}}else a=r,o=!1;else a=r,o=!1;return{pass:o,tip:a}}},{key:"mobileRegexs",value:function(t){var e="手机号格式错误",r=/^1[3|4|5|6|7|8|9]\d{9}$/;return t&&!r.test(t)?{pass:!1,tip:e}:{pass:!0,tip:""}}},{key:"pwdRegexs",value:function(t){var e="密码格式错误",r=/^[\da-zA-Z0-9~`!@#\/'|\[\]:,;$%^&*<>()}{?=\-+]{4,20}$/;return!r.test(t)&&t?{pass:!1,tip:e}:{pass:!0,tip:""}}},{key:"years16Regexs",value:function(t){var e,r=!1,s="仅支持16周岁及以上用户注册";15==t.length&&(t=t.substring(0,6)+"19"+t.substring(6));var n=t.slice(6,10)+"-"+t.slice(10,12)+"-"+t.slice(12,14);return e=u(n),"-1"==e?{pass:r,tip:s}:e.includes("天")?{pass:r,tip:s}:e.includes("岁")?i()(e)<16?{pass:r,tip:s}:{pass:!0,tip:""}:void 0}}]),t}(),c=new d}}]);
//# sourceMappingURL=chunk-51318c7b.1ec5d489.js.map