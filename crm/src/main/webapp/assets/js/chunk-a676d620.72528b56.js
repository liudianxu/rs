(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a676d620"],{"036c":function(e,t,r){},1797:function(e,t,r){"use strict";var s=r("036c"),n=r.n(s);n.a},"197b":function(e,t,r){"use strict";r.d(t,"a",function(){return s}),r.d(t,"b",function(){return n}),r.d(t,"c",function(){return i});var s={notNull:"请先填写身份证号",registered:"该身份证号已注册"},n={notNull:"请先填写手机号",binded:"手机号已绑定其他身份证号",imgCodeError:"图形验证码错误",msgCodeError:"短信验证码错误",notRegister:"手机号未注册"},i={notSame:"两次输入的新密码不相同",notSame1:"两次输入的密码不相同",idNumOrPwdError:"身份证号或密码错误"}},"6e30":function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAYAAAAehFoBAAAAAXNSR0IArs4c6QAAA41JREFUWAntmUtrU0EUx2eSFMVNKxQXhUpdFHETCCUUWl246EJ046bfQlwI/RCCi+K3cONGcVF32kAJJZBNkS4sFSJIIe1GlCaO5z+5A5N53xtvIZKBOq9z5vw8PXcep4zNyswD0+0BPil+t9u9+evy8rEQYkswdpsLsSQ4X8K61O5Ru0dGTjnne9fn5t7X6/X+JDYLAx8cHj5lQjwj0AcEUEuEGBD4J8b56/W1tbeJOmNiuYHb7fbmH8Zekjc3xlbK2SHDrQpjO81mcz+PajIwebJKXn1FXn2ex0BUlvNd8vYL8vwwKksCScCdTmfh93D4hmC3UhbNLUPxfa1a3W40Gucx3ShwBtsi2HuxxSaa5/yIoDdi0BRG/oIwyDxbLiwQyCGwBZt+IsaCwFnMlhMGLioKOWnTNZeNeUMCuwF9BZ8DuqVNkYvv+3YPr4exdZVGFFk4ZNsJjEMhZZ9dmJ9n+EktqfKwDQbXuu4Tik4wl7A+BuN3V1fl0I+zM/b15ESfttp3VlbYrcVFOf7l+JidX1xYMmMDIwbrNLQ8jLtBdtyO6Yc6AAGQr+iwPhlzHAxgMcct4J+DwRMScnte04aH4FlVfNAmLHSi3h0tWstYlAlZW8B8OEzexhAGIWgXbCx0dDoXi+VJug4u0yau6wXbCkDFp6qhpLdT4tw0JFmMQQtY3mcNoVg3BA3dIrDQAwtqvVghoS7fulBK2wwPpVMUFvouFguYwiE9HhRVWbWDxQKms/p7EfvmB6bW8O0eaj5Uu1gsYPo19EKLuOZMWIQBflQpCu1isT86ejDmiQkXrPoIAax2ClXrc+o/5KvJw6fmnO3hSuWjKeTrx2DNDzGvp/HSNm1bwDdqtXckNDAFzT7uEsprmPPtBi7oxAvTAGkB064FjLyBfIqbkoG+D1apmNBqPFSDwZXDsGJYLkJ5A9reHoYWxH0Aty6UlLsBoPv9frI8chdS2PiH4tpdDtrtfdxL3bPljhJUa73Z3HRZsUJCCdHEjmpfdR2y7QWWbypKclw1LIXCru89BxZvSGCSTkZkez5QI/nKCb3ChbYxygI9CmWBvB6GUSgiI0ONo8IQqYqjRMp2CBZLBYEhgEwMMjIEbW3imP8nZZSqimZ9YCsYEjpMFh7TkQzUwacm3apDoy3zBtOQ0DbB8RTH6xYPRroOLjv/ZCDEN1Gt7uGe4jpuzTVn/ZkH/mcP/AV+m5i3jqqAMgAAAABJRU5ErkJggg=="},"74de":function(e,t,r){var s=r("d635"),n=r("2b11");e.exports=function(e,t,r){if(s(t))throw TypeError("String#"+r+" doesn't accept regex!");return String(n(e))}},"93fe":function(e,t,r){"use strict";var s=r("2d2c"),n=r("74de"),i="includes";s(s.P+s.F*r("dd8b")(i),"String",{includes:function(e){return!!~n(this,e,i).indexOf(e,arguments.length>1?arguments[1]:void 0)}})},a2cb:function(e,t,r){"use strict";r.r(t);var s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"sms-login-container"},[r("m-header",{attrs:{rightText:"密码登录"},on:{btnClick:e.goPwdLogin}}),r("form",{staticClass:"comForm",attrs:{action:""},on:{submit:function(t){return t.preventDefault(),e.submit(t)}}},[r("div",{staticClass:"input-wrapper"},[r("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.sendForm.idNum,expression:"sendForm.idNum",modifiers:{trim:!0}}],class:e.errorIdNum?"active":"",attrs:{type:"text",placeholder:"身份证号"},domProps:{value:e.sendForm.idNum},on:{focus:function(t){return e.focus(t,"idNum")},blur:[function(t){return e.blur(t,"idNum")},function(t){return e.$forceUpdate()}],input:function(t){t.target.composing||e.$set(e.sendForm,"idNum",t.target.value.trim())}}}),r("i",{directives:[{name:"show",rawName:"v-show",value:e.sendForm.idNum,expression:"sendForm.idNum"}],staticClass:"del",style:e.delImg,on:{mousedown:function(t){return t.stopPropagation(),e.del("idNum")}}}),r("span",{staticClass:"error"},[e._v(e._s(e.errorIdNum))])]),r("div",{staticClass:"input-wrapper msgcode-wrapper "},[r("div",{staticClass:"msgCode-layer",class:e.errorMsgCode?"errorMsgCode":""},[r("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.sendForm.msgCode,expression:"sendForm.msgCode",modifiers:{trim:!0}}],attrs:{type:"text",placeholder:"短信验证码"},domProps:{value:e.sendForm.msgCode},on:{focus:function(t){return e.focus(t,"msgCode")},blur:[function(t){return e.blur(t,"msgCode")},function(t){return e.$forceUpdate()}],input:function(t){t.target.composing||e.$set(e.sendForm,"msgCode",t.target.value.trim())}}}),r("i",{directives:[{name:"show",rawName:"v-show",value:e.sendForm.msgCode,expression:"sendForm.msgCode"}],staticClass:"del",style:e.delImg,on:{mousedown:function(t){return t.stopPropagation(),e.del("msgCode")}}}),e.isMessageCode?r("span",{staticClass:"aboutcode sendcode"},[e._v(e._s(e.second)+"s重发")]):r("span",{staticClass:"aboutcode",on:{click:function(t){return e.getMessageCode()}}},[e._v("发送验证码")]),r("span",{staticClass:"error "},[e._v(e._s(e.errorMsgCode))])])]),r("div",{staticClass:"submit-wrapper"},[r("div",{directives:[{name:"show",rawName:"v-show",value:e.errorTips,expression:"errorTips"}],staticClass:"error-tips"},[e._v(e._s(e.errorTips))]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.loginBtnText,expression:"loginBtnText"}],staticClass:"submit",class:e.allValid?"active":"",attrs:{type:"submit",disabled:!e.allValid||e.isRequesting},domProps:{value:e.loginBtnText},on:{input:function(t){t.target.composing||(e.loginBtnText=t.target.value)}}})]),r("div",{staticClass:" forget-register-wrapper"},[r("router-link",{staticClass:"register-btn",attrs:{tag:"div",to:"/register"}},[e._v("\n        还未注册？\n        "),r("span",{staticClass:"register-link"},[e._v("立即注册")])])],1)])],1)},n=[],i=(r("e0c1"),r("93fe"),r("8e61")),o=r("51f7"),a=r("f524"),u=r("197b"),d=r("bbd5"),c=r("e04d"),l=r("acce"),m=r("52c1"),f={name:"login",mixins:[l["a"]],data:function(){return{mobileSendShow:!1,loginBtnText:"登录",count:5,second:60,currentMobile:"",sendForm:{idNum:"",msgCode:""}}},mounted:function(){this.uuid=Object(d["a"])(),this._isCountDown()},methods:Object(i["a"])({goPwdLogin:function(){this.$router.push("/pwdLogin")},submit:function(){var e=this;this.loginBtnText="登录中....",this.isRequesting=!0;var t={idNum:this.sendForm.idNum,hiddenCaptcha:this.uuid,captcha:this.sendForm.msgCode};this.$api.user.smsLogin(t).then(function(t){e.isRequesting=!1,e.loginBtnText="登录",1===t.code?(e.SET_TOKEN(t.data.csrfToken),e.SET_USER_INFO(t.data.member),e.$route.params.redirctUrl?e.$router.push({path:"/37duc/product/detail/".concat(e.$route.params.productId),query:{productId:e.$route.params.productId}}):e.$router.push("/personalCenter")):t.message.includes("短信验证码错误")?e.errorMsgCode=t.message:e.errorTips=t.message})},getMessageCode:function(){var e=this;if(this.sendForm.idNum){if(!this.errorIdNum){var t={idNum:this.sendForm.idNum,captchaId:this.uuid};this.$api.user.sendCaptchaSms(t).then(function(t){1===t.code&&(e.currentMobile=t.data.mobile.substr(t.data.mobile.length-4),e.$toast.center("验证码已发送尾数为".concat(e.currentMobile,"的手机号")),e.readsecond(),e.setMobileSendTime()),0===t.code&&(e.errorIdNum=t.message)})}}else this.errorIdNum=u["a"].notNull},blur:function(e,t){switch(this._onBlur(e),t){case"idNum":this._validIdNum();break;default:}},setMobileSendTime:function(){var e=this,t=setInterval(function(){if(e.count<=1)return e.mobileSendShow=!1,e.count=5,void clearInterval(t);e.count--},1e3)},readsecond:function(){var e=this;this.isMessageCode=!0;var t=setInterval(function(){if(e.second<=1)return e.isMessageCode=!1,e.second=60,void clearInterval(t);e.second--,Object(c["c"])("smsSecond",e.second)},1e3)},_isCountDown:function(){var e=Object(c["a"])("smsSecond");e>1&&(this.second=e,this.isMessageCode=!0,this.readsecond())},_validIdNum:function(){this.sendForm.idNum&&(a["a"].idCardRegexs(this.sendForm.idNum).pass||(this.errorIdNum=a["a"].idCardRegexs(this.sendForm.idNum).tip))}},Object(m["d"])(["SET_TOKEN","SET_USER_INFO"])),computed:{allValid:function(){return this.sendForm.idNum&&this.sendForm.msgCode&&!this.errorIdNum}},components:{mHeader:o["a"]}},g=f,p=(r("1797"),r("17cc")),v=Object(p["a"])(g,s,n,!1,null,"5b1ec478",null);t["default"]=v.exports},acce:function(e,t,r){"use strict";r.d(t,"a",function(){return n});var s=r("bbd5"),n={data:function(){return{errorTips:"",errorIdNum:"",errorMobile:"",errorPwd:"",errorImgCode:"",errorMsgCode:"",isMessageCode:!1,imgCodeShow:!1,isRequesting:!1,uuid:"",delImg:{"background-image":"url("+r("6e30")+")"}}},mounted:function(){this.uuid=Object(s["a"])()},computed:{},methods:{focus:function(e,t){switch(this._onFocus(e),this.errorTips="",t){case"mobile":this.errorMobile="";break;case"idNum":this.errorIdNum="";break;case"pwd":this.errorPwd="";break;case"imgCode":this.errorImgCode="";break;case"msgCode":this.errorMsgCode=""}},del:function(e){this.sendForm[e]=""},_onFocus:function(e){for(var t=e.currentTarget.parentElement.children,r=0;r<t.length;r++)t[r]!==e.currentTarget&&t[r].classList.add("del")},_onBlur:function(e){for(var t=e.currentTarget.parentElement.children,r=0;r<t.length;r++)t[r]!==e.currentTarget&&t[r].classList.remove("del")}},watch:{}}},bbd5:function(e,t,r){"use strict";r.d(t,"a",function(){return s});r("ea65");function s(){var e,t="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(""),r=[];r[8]=r[13]=r[18]=r[23]="-",r[14]="4";for(var s=0;s<36;s++)r[s]||(e=0|16*Math.random(),r[s]=t[19===s?3&e|8:e]);return r.join("")}},d635:function(e,t,r){var s=r("b429"),n=r("9b6d"),i=r("f3ae")("match");e.exports=function(e){var t;return s(e)&&(void 0!==(t=e[i])?!!t:"RegExp"==n(e))}},dd8b:function(e,t,r){var s=r("f3ae")("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(r){try{return t[s]=!1,!"/./"[e](t)}catch(n){}}return!0}},e0c1:function(e,t,r){"use strict";var s=r("2d2c"),n=r("0d0d")(!0);s(s.P,"Array",{includes:function(e){return n(this,e,arguments.length>1?arguments[1]:void 0)}}),r("68fb")("includes")},ea65:function(e,t,r){"use strict";var s=r("d635"),n=r("4d65"),i=r("d4f6"),o=r("1ff3"),a=r("33f2"),u=r("b21ed"),d=r("31d0"),c=r("201d"),l=Math.min,m=[].push,f="split",g="length",p="lastIndex",v=4294967295,h=!c(function(){RegExp(v,"y")});r("c5aa")("split",2,function(e,t,r,c){var b;return b="c"=="abbc"[f](/(b)*/)[1]||4!="test"[f](/(?:)/,-1)[g]||2!="ab"[f](/(?:ab)*/)[g]||4!="."[f](/(.?)(.?)/)[g]||"."[f](/()()/)[g]>1||""[f](/.?/)[g]?function(e,t){var n=String(this);if(void 0===e&&0===t)return[];if(!s(e))return r.call(n,e,t);var i,o,a,u=[],c=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),l=0,f=void 0===t?v:t>>>0,h=new RegExp(e.source,c+"g");while(i=d.call(h,n)){if(o=h[p],o>l&&(u.push(n.slice(l,i.index)),i[g]>1&&i.index<n[g]&&m.apply(u,i.slice(1)),a=i[0][g],l=o,u[g]>=f))break;h[p]===i.index&&h[p]++}return l===n[g]?!a&&h.test("")||u.push(""):u.push(n.slice(l)),u[g]>f?u.slice(0,f):u}:"0"[f](void 0,0)[g]?function(e,t){return void 0===e&&0===t?[]:r.call(this,e,t)}:r,[function(r,s){var n=e(this),i=void 0==r?void 0:r[t];return void 0!==i?i.call(r,n,s):b.call(String(n),r,s)},function(e,t){var s=c(b,e,this,t,b!==r);if(s.done)return s.value;var d=n(e),m=String(this),f=i(d,RegExp),g=d.unicode,p=(d.ignoreCase?"i":"")+(d.multiline?"m":"")+(d.unicode?"u":"")+(h?"y":"g"),C=new f(h?d:"^(?:"+d.source+")",p),w=void 0===t?v:t>>>0;if(0===w)return[];if(0===m.length)return null===u(C,m)?[m]:[];var N=0,x=0,A=[];while(x<m.length){C.lastIndex=h?x:0;var F,I=u(C,h?m:m.slice(x));if(null===I||(F=l(a(C.lastIndex+(h?0:x)),m.length))===N)x=o(m,x,g);else{if(A.push(m.slice(N,x)),A.length===w)return A;for(var S=1;S<=I.length-1;S++)if(A.push(I[S]),A.length===w)return A;x=N=F}}return A.push(m.slice(N)),A}]})},f524:function(e,t,r){"use strict";r("e0c1"),r("93fe"),r("ea65");var s=r("056e"),n=r.n(s),i=r("7aaf"),o=r("1deb"),a=void 0,u=function(e){var t,r=e.split("-"),s=r[0],n=r[1],i=r[2],o=new Date,u=o.getFullYear(),d=o.getMonth()+1,c=o.getDate();if(u==s){var l=a.formatDate(new Date);return t=a.DateDiff(l,e)+1+"天",t}var m=u-s;if(m>0)if(d==n){var f=c-i;t=f<0?m-1+"岁":m+"岁"}else{var g=d-n;t=g<0?m-1+"岁":m+"岁"}else t=-1;return t};r.d(t,"a",function(){return c});var d=function(){function e(){Object(i["a"])(this,e)}return Object(o["a"])(e,[{key:"idCardRegexs",value:function(e){var t={11:"北京",12:"天津",13:"河北",14:"山西",15:"内蒙古",21:"辽宁",22:"吉林",23:"黑龙江 ",31:"上海",32:"江苏",33:"浙江",34:"安徽",35:"福建",36:"江西",37:"山东",41:"河南",42:"湖北 ",43:"湖南",44:"广东",45:"广西",46:"海南",50:"重庆",51:"四川",52:"贵州",53:"云南",54:"西藏 ",61:"陕西",62:"甘肃",63:"青海",64:"宁夏",65:"新疆",71:"台湾",81:"香港",82:"澳门",91:"国外 "},r="身份证号格式错误",s=["7","9","10","5","8","4","2","1","6","3","7","9","10","5","8","4","2"],i=["1","0","X","9","8","7","6","5","4","3","2"],o="",a=!0;function u(e){var r=/^[1-9]\d{5}$/.test(e);return!!r&&!!t[n()(e.substring(0,2))]}function d(e){var t=/^[1-9]\d{3}((0[1-9])|(1[0-2]))((0[1-9])|([1-2][0-9])|(3[0-1]))$/.test(e);if(!t)return!1;var r=n()(e.substring(0,4),10),s=n()(e.substring(4,6),10),i=n()(e.substring(6),10),o=new Date(r,s-1,i);return!(o>new Date)&&(o.getFullYear()==r&&o.getMonth()==s-1&&o.getDate()==i)}function c(e){for(var t=e.substring(0,17),r=0,o=0;o<17;o++)r+=n()(t.charAt(o),10)*n()(s[o]);var a=r%11;return i[a]}function l(e){if(15==e.length){var t=e.substring(0,6)+"19"+e.substring(6),r=c(t);return t+r}return 18==e.length?e:null}if(e&&/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(e))if(t[e.substr(0,2)]){if(15===e.length){var m=/^[1-9]\d{7}((0[1-9])|(1[0-2]))((0[1-9])|([1-2][0-9])|(3[0-1]))\d{3}$/.test(e);m||(a=!1);var f=e.substring(0,6);if(m=u(f),!m)return{pass:!1,tip:"身份证号格式错误"};var g="19"+e.substring(6,12);if(m=d(g),!m)return{pass:!1,tip:"身份证号格式错误"};e=l(e)}if(18===e.length){e=e.split("");for(var p=[7,9,10,5,8,4,2,1,6,3,7,9,10,5,8,4,2],v=[1,0,"X",9,8,7,6,5,4,3,2],h=0,b=0,C=0,w=0;w<17;w++)b=e[w],C=p[w],h+=b*C;var N=v[h%11];N!=e[17]&&(o=r,a=!1)}}else o=r,a=!1;else o=r,a=!1;return{pass:a,tip:o}}},{key:"mobileRegexs",value:function(e){var t="手机号格式错误",r=/^1[3|4|5|6|7|8|9]\d{9}$/;return e&&!r.test(e)?{pass:!1,tip:t}:{pass:!0,tip:""}}},{key:"pwdRegexs",value:function(e){var t="密码格式错误",r=/^[\da-zA-Z0-9~`!@#\/'|\[\]:,;$%^&*<>()}{?=\-+]{4,20}$/;return!r.test(e)&&e?{pass:!1,tip:t}:{pass:!0,tip:""}}},{key:"years16Regexs",value:function(e){var t,r=!1,s="仅支持16周岁及以上用户注册";15==e.length&&(e=e.substring(0,6)+"19"+e.substring(6));var i=e.slice(6,10)+"-"+e.slice(10,12)+"-"+e.slice(12,14);return t=u(i),"-1"==t?{pass:r,tip:s}:t.includes("天")?{pass:r,tip:s}:t.includes("岁")?n()(t)<16?{pass:r,tip:s}:{pass:!0,tip:""}:void 0}}]),e}(),c=new d}}]);
//# sourceMappingURL=chunk-a676d620.72528b56.js.map