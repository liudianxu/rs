(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6a053cf1"],{2107:function(e,t,r){"use strict";r.r(t);var i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"pwd-login-container"},[r("m-header",{attrs:{rightText:"短信登录"},on:{btnClick:e.goSmsLogin}}),r("form",{staticClass:"comForm",attrs:{action:""},on:{submit:function(t){return t.preventDefault(),e.submit(t)}}},[r("div",{staticClass:"input-wrapper"},[r("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.sendForm.idNum,expression:"sendForm.idNum",modifiers:{trim:!0}}],class:e.errorIdNum?"active":"",attrs:{type:"text",placeholder:"身份证号"},domProps:{value:e.sendForm.idNum},on:{focus:function(t){return e.focus(t,"idNum")},blur:[function(t){return e.blur(t,"idNum")},function(t){return e.$forceUpdate()}],input:function(t){t.target.composing||e.$set(e.sendForm,"idNum",t.target.value.trim())}}}),r("i",{directives:[{name:"show",rawName:"v-show",value:e.sendForm.idNum,expression:"sendForm.idNum"}],staticClass:"del",style:e.delImg,on:{mousedown:function(t){return t.stopPropagation(),e.del("idNum")}}}),r("span",{staticClass:"error"},[e._v(e._s(e.errorIdNum))])]),r("div",{staticClass:"input-wrapper clearfix"},[r("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.sendForm.pwd,expression:"sendForm.pwd",modifiers:{trim:!0}}],attrs:{type:"password",autocomplete:"off",placeholder:"密码"},domProps:{value:e.sendForm.pwd},on:{focus:function(t){return e.focus(t)},blur:[function(t){return e.blur(t,"pwd")},function(t){return e.$forceUpdate()}],input:function(t){t.target.composing||e.$set(e.sendForm,"pwd",t.target.value.trim())}}}),r("i",{directives:[{name:"show",rawName:"v-show",value:e.sendForm.pwd,expression:"sendForm.pwd"}],staticClass:"del",style:e.delImg,on:{mousedown:function(t){return t.stopPropagation(),e.del("pwd")}}})]),r("div",{staticClass:"submit-wrapper"},[r("div",{directives:[{name:"show",rawName:"v-show",value:e.errorTips,expression:"errorTips"}],staticClass:"error-tips"},[e._v(e._s(e.errorTips))]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.loginBtnText,expression:"loginBtnText"}],staticClass:"submit",class:e.allValid?"active":"",attrs:{type:"submit",disabled:!e.allValid||e.isRequesting},domProps:{value:e.loginBtnText},on:{input:function(t){t.target.composing||(e.loginBtnText=t.target.value)}}})]),r("div",{staticClass:" forget-register-wrapper"},[r("router-link",{staticClass:"register-btn",attrs:{tag:"div",to:"/register"}},[e._v("\n        还未注册？\n        "),r("span",{staticClass:"register-link"},[e._v("立即注册")])]),r("router-link",{staticClass:"forget-btn",attrs:{tag:"div",to:"/forgetPassword"}},[r("span",{staticClass:"forget-link"},[e._v("忘记密码")])])],1)])],1)},n=[],s=r("8e61"),a=r("51f7"),o=r("acce"),u=r("f524"),d=r("52c1"),c={name:"pwdLogin",mixins:[o["a"]],data:function(){return{loginBtnText:"登录",isRedicturl:!1,isRedicturlProductId:"",sendForm:{idNum:"",pwd:""}}},mounted:function(){},methods:Object(s["a"])({goSmsLogin:function(){this.$router.push("/smsLogin")},submit:function(){var e=this;this.loginBtnText="登录中....",this.isRequesting=!0;var t={idNum:this.sendForm.idNum,password:this.sendForm.pwd};this.$api.user.pwdLogin(t).then(function(t){if(e.isRequesting=!1,e.loginBtnText="登录",1===t.code){e.SET_TOKEN(t.data.csrfToken),e.SET_USER_INFO(t.data.member);var r=e.$route.query.redirect;r?e.$router.push(r):e.$router.push("/personalCenter")}else e.errorTips=t.message})},blur:function(e,t){switch(this._onBlur(e),t){case"idNum":this._validIdNum();break}},_validIdNum:function(){this.sendForm.idNum&&(u["a"].idCardRegexs(this.sendForm.idNum).pass||(this.errorIdNum=u["a"].idCardRegexs(this.sendForm.idNum).tip))}},Object(d["d"])(["SET_TOKEN","SET_USER_INFO"])),computed:{allValid:function(){return this.sendForm.idNum&&this.sendForm.pwd&&!this.errorIdNum}},beforeRouteEnter:function(e,t,r){r(function(e){t.params.redirctUrl&&(e.isRedicturl=!0,e.isRedicturlProductId=t.params.productId)})},components:{mHeader:a["a"]}},l=c,m=(r("cfc1"),r("17cc")),p=Object(m["a"])(l,i,n,!1,null,"082a20bd",null);t["default"]=p.exports},"2e10":function(e,t,r){},"6e30":function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAYAAAAehFoBAAAAAXNSR0IArs4c6QAAA41JREFUWAntmUtrU0EUx2eSFMVNKxQXhUpdFHETCCUUWl246EJ046bfQlwI/RCCi+K3cONGcVF32kAJJZBNkS4sFSJIIe1GlCaO5z+5A5N53xtvIZKBOq9z5vw8PXcep4zNyswD0+0BPil+t9u9+evy8rEQYkswdpsLsSQ4X8K61O5Ru0dGTjnne9fn5t7X6/X+JDYLAx8cHj5lQjwj0AcEUEuEGBD4J8b56/W1tbeJOmNiuYHb7fbmH8Zekjc3xlbK2SHDrQpjO81mcz+PajIwebJKXn1FXn2ex0BUlvNd8vYL8vwwKksCScCdTmfh93D4hmC3UhbNLUPxfa1a3W40Gucx3ShwBtsi2HuxxSaa5/yIoDdi0BRG/oIwyDxbLiwQyCGwBZt+IsaCwFnMlhMGLioKOWnTNZeNeUMCuwF9BZ8DuqVNkYvv+3YPr4exdZVGFFk4ZNsJjEMhZZ9dmJ9n+EktqfKwDQbXuu4Tik4wl7A+BuN3V1fl0I+zM/b15ESfttp3VlbYrcVFOf7l+JidX1xYMmMDIwbrNLQ8jLtBdtyO6Yc6AAGQr+iwPhlzHAxgMcct4J+DwRMScnte04aH4FlVfNAmLHSi3h0tWstYlAlZW8B8OEzexhAGIWgXbCx0dDoXi+VJug4u0yau6wXbCkDFp6qhpLdT4tw0JFmMQQtY3mcNoVg3BA3dIrDQAwtqvVghoS7fulBK2wwPpVMUFvouFguYwiE9HhRVWbWDxQKms/p7EfvmB6bW8O0eaj5Uu1gsYPo19EKLuOZMWIQBflQpCu1isT86ejDmiQkXrPoIAax2ClXrc+o/5KvJw6fmnO3hSuWjKeTrx2DNDzGvp/HSNm1bwDdqtXckNDAFzT7uEsprmPPtBi7oxAvTAGkB064FjLyBfIqbkoG+D1apmNBqPFSDwZXDsGJYLkJ5A9reHoYWxH0Aty6UlLsBoPv9frI8chdS2PiH4tpdDtrtfdxL3bPljhJUa73Z3HRZsUJCCdHEjmpfdR2y7QWWbypKclw1LIXCru89BxZvSGCSTkZkez5QI/nKCb3ChbYxygI9CmWBvB6GUSgiI0ONo8IQqYqjRMp2CBZLBYEhgEwMMjIEbW3imP8nZZSqimZ9YCsYEjpMFh7TkQzUwacm3apDoy3zBtOQ0DbB8RTH6xYPRroOLjv/ZCDEN1Gt7uGe4jpuzTVn/ZkH/mcP/AV+m5i3jqqAMgAAAABJRU5ErkJggg=="},"74de":function(e,t,r){var i=r("d635"),n=r("2b11");e.exports=function(e,t,r){if(i(t))throw TypeError("String#"+r+" doesn't accept regex!");return String(n(e))}},"93fe":function(e,t,r){"use strict";var i=r("2d2c"),n=r("74de"),s="includes";i(i.P+i.F*r("dd8b")(s),"String",{includes:function(e){return!!~n(this,e,s).indexOf(e,arguments.length>1?arguments[1]:void 0)}})},acce:function(e,t,r){"use strict";r.d(t,"a",function(){return n});var i=r("bbd5"),n={data:function(){return{errorTips:"",errorIdNum:"",errorMobile:"",errorPwd:"",errorImgCode:"",errorMsgCode:"",isMessageCode:!1,imgCodeShow:!1,isRequesting:!1,uuid:"",delImg:{"background-image":"url("+r("6e30")+")"}}},mounted:function(){this.uuid=Object(i["a"])()},computed:{},methods:{focus:function(e,t){switch(this._onFocus(e),this.errorTips="",t){case"mobile":this.errorMobile="";break;case"idNum":this.errorIdNum="";break;case"pwd":this.errorPwd="";break;case"imgCode":this.errorImgCode="";break;case"msgCode":this.errorMsgCode=""}},del:function(e){this.sendForm[e]=""},_onFocus:function(e){for(var t=e.currentTarget.parentElement.children,r=0;r<t.length;r++)t[r]!==e.currentTarget&&t[r].classList.add("del")},_onBlur:function(e){for(var t=e.currentTarget.parentElement.children,r=0;r<t.length;r++)t[r]!==e.currentTarget&&t[r].classList.remove("del")}},watch:{}}},bbd5:function(e,t,r){"use strict";r.d(t,"a",function(){return i});r("ea65");function i(){var e,t="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(""),r=[];r[8]=r[13]=r[18]=r[23]="-",r[14]="4";for(var i=0;i<36;i++)r[i]||(e=0|16*Math.random(),r[i]=t[19===i?3&e|8:e]);return r.join("")}},cfc1:function(e,t,r){"use strict";var i=r("2e10"),n=r.n(i);n.a},d635:function(e,t,r){var i=r("b429"),n=r("9b6d"),s=r("f3ae")("match");e.exports=function(e){var t;return i(e)&&(void 0!==(t=e[s])?!!t:"RegExp"==n(e))}},dd8b:function(e,t,r){var i=r("f3ae")("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(r){try{return t[i]=!1,!"/./"[e](t)}catch(n){}}return!0}},e0c1:function(e,t,r){"use strict";var i=r("2d2c"),n=r("0d0d")(!0);i(i.P,"Array",{includes:function(e){return n(this,e,arguments.length>1?arguments[1]:void 0)}}),r("68fb")("includes")},ea65:function(e,t,r){"use strict";var i=r("d635"),n=r("4d65"),s=r("d4f6"),a=r("1ff3"),o=r("33f2"),u=r("b21ed"),d=r("31d0"),c=r("201d"),l=Math.min,m=[].push,p="split",f="length",g="lastIndex",v=4294967295,h=!c(function(){RegExp(v,"y")});r("c5aa")("split",2,function(e,t,r,c){var b;return b="c"=="abbc"[p](/(b)*/)[1]||4!="test"[p](/(?:)/,-1)[f]||2!="ab"[p](/(?:ab)*/)[f]||4!="."[p](/(.?)(.?)/)[f]||"."[p](/()()/)[f]>1||""[p](/.?/)[f]?function(e,t){var n=String(this);if(void 0===e&&0===t)return[];if(!i(e))return r.call(n,e,t);var s,a,o,u=[],c=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),l=0,p=void 0===t?v:t>>>0,h=new RegExp(e.source,c+"g");while(s=d.call(h,n)){if(a=h[g],a>l&&(u.push(n.slice(l,s.index)),s[f]>1&&s.index<n[f]&&m.apply(u,s.slice(1)),o=s[0][f],l=a,u[f]>=p))break;h[g]===s.index&&h[g]++}return l===n[f]?!o&&h.test("")||u.push(""):u.push(n.slice(l)),u[f]>p?u.slice(0,p):u}:"0"[p](void 0,0)[f]?function(e,t){return void 0===e&&0===t?[]:r.call(this,e,t)}:r,[function(r,i){var n=e(this),s=void 0==r?void 0:r[t];return void 0!==s?s.call(r,n,i):b.call(String(n),r,i)},function(e,t){var i=c(b,e,this,t,b!==r);if(i.done)return i.value;var d=n(e),m=String(this),p=s(d,RegExp),f=d.unicode,g=(d.ignoreCase?"i":"")+(d.multiline?"m":"")+(d.unicode?"u":"")+(h?"y":"g"),w=new p(h?d:"^(?:"+d.source+")",g),x=void 0===t?v:t>>>0;if(0===x)return[];if(0===m.length)return null===u(w,m)?[m]:[];var N=0,C=0,A=[];while(C<m.length){w.lastIndex=h?C:0;var F,I=u(w,h?m:m.slice(C));if(null===I||(F=l(o(w.lastIndex+(h?0:C)),m.length))===N)C=a(m,C,f);else{if(A.push(m.slice(N,C)),A.length===x)return A;for(var k=1;k<=I.length-1;k++)if(A.push(I[k]),A.length===x)return A;C=N=F}}return A.push(m.slice(N)),A}]})},f524:function(e,t,r){"use strict";r("e0c1"),r("93fe"),r("ea65");var i=r("056e"),n=r.n(i),s=r("7aaf"),a=r("1deb"),o=void 0,u=function(e){var t,r=e.split("-"),i=r[0],n=r[1],s=r[2],a=new Date,u=a.getFullYear(),d=a.getMonth()+1,c=a.getDate();if(u==i){var l=o.formatDate(new Date);return t=o.DateDiff(l,e)+1+"天",t}var m=u-i;if(m>0)if(d==n){var p=c-s;t=p<0?m-1+"岁":m+"岁"}else{var f=d-n;t=f<0?m-1+"岁":m+"岁"}else t=-1;return t};r.d(t,"a",function(){return c});var d=function(){function e(){Object(s["a"])(this,e)}return Object(a["a"])(e,[{key:"idCardRegexs",value:function(e){var t={11:"北京",12:"天津",13:"河北",14:"山西",15:"内蒙古",21:"辽宁",22:"吉林",23:"黑龙江 ",31:"上海",32:"江苏",33:"浙江",34:"安徽",35:"福建",36:"江西",37:"山东",41:"河南",42:"湖北 ",43:"湖南",44:"广东",45:"广西",46:"海南",50:"重庆",51:"四川",52:"贵州",53:"云南",54:"西藏 ",61:"陕西",62:"甘肃",63:"青海",64:"宁夏",65:"新疆",71:"台湾",81:"香港",82:"澳门",91:"国外 "},r="身份证号格式错误",i=["7","9","10","5","8","4","2","1","6","3","7","9","10","5","8","4","2"],s=["1","0","X","9","8","7","6","5","4","3","2"],a="",o=!0;function u(e){var r=/^[1-9]\d{5}$/.test(e);return!!r&&!!t[n()(e.substring(0,2))]}function d(e){var t=/^[1-9]\d{3}((0[1-9])|(1[0-2]))((0[1-9])|([1-2][0-9])|(3[0-1]))$/.test(e);if(!t)return!1;var r=n()(e.substring(0,4),10),i=n()(e.substring(4,6),10),s=n()(e.substring(6),10),a=new Date(r,i-1,s);return!(a>new Date)&&(a.getFullYear()==r&&a.getMonth()==i-1&&a.getDate()==s)}function c(e){for(var t=e.substring(0,17),r=0,a=0;a<17;a++)r+=n()(t.charAt(a),10)*n()(i[a]);var o=r%11;return s[o]}function l(e){if(15==e.length){var t=e.substring(0,6)+"19"+e.substring(6),r=c(t);return t+r}return 18==e.length?e:null}if(e&&/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(e))if(t[e.substr(0,2)]){if(15===e.length){var m=/^[1-9]\d{7}((0[1-9])|(1[0-2]))((0[1-9])|([1-2][0-9])|(3[0-1]))\d{3}$/.test(e);m||(o=!1);var p=e.substring(0,6);if(m=u(p),!m)return{pass:!1,tip:"身份证号格式错误"};var f="19"+e.substring(6,12);if(m=d(f),!m)return{pass:!1,tip:"身份证号格式错误"};e=l(e)}if(18===e.length){e=e.split("");for(var g=[7,9,10,5,8,4,2,1,6,3,7,9,10,5,8,4,2],v=[1,0,"X",9,8,7,6,5,4,3,2],h=0,b=0,w=0,x=0;x<17;x++)b=e[x],w=g[x],h+=b*w;var N=v[h%11];N!=e[17]&&(a=r,o=!1)}}else a=r,o=!1;else a=r,o=!1;return{pass:o,tip:a}}},{key:"mobileRegexs",value:function(e){var t="手机号格式错误",r=/^1[3|4|5|6|7|8|9]\d{9}$/;return e&&!r.test(e)?{pass:!1,tip:t}:{pass:!0,tip:""}}},{key:"pwdRegexs",value:function(e){var t="密码格式错误",r=/^[\da-zA-Z0-9~`!@#\/'|\[\]:,;$%^&*<>()}{?=\-+]{4,20}$/;return!r.test(e)&&e?{pass:!1,tip:t}:{pass:!0,tip:""}}},{key:"years16Regexs",value:function(e){var t,r=!1,i="仅支持16周岁及以上用户注册";15==e.length&&(e=e.substring(0,6)+"19"+e.substring(6));var s=e.slice(6,10)+"-"+e.slice(10,12)+"-"+e.slice(12,14);return t=u(s),"-1"==t?{pass:r,tip:i}:t.includes("天")?{pass:r,tip:i}:t.includes("岁")?n()(t)<16?{pass:r,tip:i}:{pass:!0,tip:""}:void 0}}]),e}(),c=new d}}]);
//# sourceMappingURL=chunk-6a053cf1.8a297fcc.js.map