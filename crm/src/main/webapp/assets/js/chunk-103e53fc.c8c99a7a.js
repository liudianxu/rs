(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-103e53fc"],{"0196":function(e,t,r){"use strict";r.r(t);var i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"identify-valid"},[r("pwd-crumbs"),r("form",{staticClass:"comForm",attrs:{action:""},on:{submit:function(t){return t.preventDefault(),e.submit(t)}}},[r("div",{staticClass:"input-wrapper"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.sendForm.idNum,expression:"sendForm.idNum"}],class:e.errorIdNum?"active":"",attrs:{type:"text",placeholder:"身份证号"},domProps:{value:e.sendForm.idNum},on:{focus:function(t){return e.focus(t,"idNum")},blur:function(t){return e.blur(t,"idNum")},input:function(t){t.target.composing||e.$set(e.sendForm,"idNum",t.target.value)}}}),r("i",{directives:[{name:"show",rawName:"v-show",value:e.sendForm.idNum,expression:"sendForm.idNum"}],staticClass:"del",style:e.delImg,on:{mousedown:function(t){return t.stopPropagation(),e.del("idNum")}}}),r("span",{staticClass:"error"},[e._v(e._s(e.errorIdNum))])]),r("div",{staticClass:"input-wrapper"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.sendForm.queryName,expression:"sendForm.queryName"}],attrs:{type:"text",placeholder:"姓名"},domProps:{value:e.sendForm.queryName},on:{focus:function(t){return e.focus(t)},blur:function(t){return e.blur(t)},input:function(t){t.target.composing||e.$set(e.sendForm,"queryName",t.target.value)}}}),r("i",{directives:[{name:"show",rawName:"v-show",value:e.sendForm.queryName,expression:"sendForm.queryName"}],staticClass:"del",style:e.delImg,on:{mousedown:function(t){return t.stopPropagation(),e.del("queryName")}}})]),r("div",{staticClass:"submit-wrapper"},[r("div",{directives:[{name:"show",rawName:"v-show",value:e.errorTips,expression:"errorTips"}],staticClass:"error-tips"},[e._v(e._s(e.errorTips))]),r("input",{staticClass:"submit",class:e.allValid?"active":"",attrs:{type:"submit",value:"下一步",disabled:!e.allValid}})]),r("div",{staticClass:"go-login-tips"},[e._v("\n      已有账号，马上"),r("router-link",{staticClass:"register-btn",attrs:{tag:"span",to:"/smsLogin"}},[r("span",[e._v("登录")])])],1)])],1)},s=[],n=r("84c5"),u=r("acce"),a=r("f524"),o=r("197b"),d={name:"TheIdentifyVailid",mixins:[u["a"]],data:function(){return{sendForm:{idNum:"",queryName:""}}},mounted:function(){this.getNormalStep()},methods:{submit:function(){var e=this,t={idNum:this.sendForm.idNum,name:this.sendForm.queryName};this.$api.user.identifyValidCommit(t).then(function(t){1===t.code?e.$router.push("/forgetPassword/resetPassword"):e.errorTips=t.message})},getMessageCode:function(){this.errorIdNum||(this.sendForm.idNum?this.readsecond():this.errorIdNum=o["a"].notNull)},blur:function(e,t){switch(this._onBlur(e),t){case"idNum":this._validIdNum();break}},getNormalStep:function(){var e=this;this.$api.user.isNormalByStep1().then(function(t){0===t.code&&e.$router.push({path:"/forgetPassword/mobileValid"})})},_validIdNum:function(){this.sendForm.idNum&&(a["a"].idCardRegexs(this.sendForm.idNum).pass||(this.errorIdNum=a["a"].idCardRegexs(this.sendForm.idNum).tip))}},computed:{allValid:function(){return this.sendForm.idNum&&this.sendForm.queryName&&!this.errorIdNum}},components:{pwdCrumbs:n["a"]}},c=d,l=(r("9be6"),r("17cc")),m=Object(l["a"])(c,i,s,!1,null,"58e2de8a",null);t["default"]=m.exports},"197b":function(e,t,r){"use strict";r.d(t,"a",function(){return i}),r.d(t,"b",function(){return s}),r.d(t,"c",function(){return n});var i={notNull:"请先填写身份证号",registered:"该身份证号已注册"},s={notNull:"请先填写手机号",binded:"手机号已绑定其他身份证号",imgCodeError:"图形验证码错误",msgCodeError:"短信验证码错误",notRegister:"手机号未注册"},n={notSame:"两次输入的新密码不相同",notSame1:"两次输入的密码不相同",idNumOrPwdError:"身份证号或密码错误"}},"5b98":function(e,t,r){},"6e30":function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAYAAAAehFoBAAAAAXNSR0IArs4c6QAAA41JREFUWAntmUtrU0EUx2eSFMVNKxQXhUpdFHETCCUUWl246EJ046bfQlwI/RCCi+K3cONGcVF32kAJJZBNkS4sFSJIIe1GlCaO5z+5A5N53xtvIZKBOq9z5vw8PXcep4zNyswD0+0BPil+t9u9+evy8rEQYkswdpsLsSQ4X8K61O5Ru0dGTjnne9fn5t7X6/X+JDYLAx8cHj5lQjwj0AcEUEuEGBD4J8b56/W1tbeJOmNiuYHb7fbmH8Zekjc3xlbK2SHDrQpjO81mcz+PajIwebJKXn1FXn2ex0BUlvNd8vYL8vwwKksCScCdTmfh93D4hmC3UhbNLUPxfa1a3W40Gucx3ShwBtsi2HuxxSaa5/yIoDdi0BRG/oIwyDxbLiwQyCGwBZt+IsaCwFnMlhMGLioKOWnTNZeNeUMCuwF9BZ8DuqVNkYvv+3YPr4exdZVGFFk4ZNsJjEMhZZ9dmJ9n+EktqfKwDQbXuu4Tik4wl7A+BuN3V1fl0I+zM/b15ESfttp3VlbYrcVFOf7l+JidX1xYMmMDIwbrNLQ8jLtBdtyO6Yc6AAGQr+iwPhlzHAxgMcct4J+DwRMScnte04aH4FlVfNAmLHSi3h0tWstYlAlZW8B8OEzexhAGIWgXbCx0dDoXi+VJug4u0yau6wXbCkDFp6qhpLdT4tw0JFmMQQtY3mcNoVg3BA3dIrDQAwtqvVghoS7fulBK2wwPpVMUFvouFguYwiE9HhRVWbWDxQKms/p7EfvmB6bW8O0eaj5Uu1gsYPo19EKLuOZMWIQBflQpCu1isT86ejDmiQkXrPoIAax2ClXrc+o/5KvJw6fmnO3hSuWjKeTrx2DNDzGvp/HSNm1bwDdqtXckNDAFzT7uEsprmPPtBi7oxAvTAGkB064FjLyBfIqbkoG+D1apmNBqPFSDwZXDsGJYLkJ5A9reHoYWxH0Aty6UlLsBoPv9frI8chdS2PiH4tpdDtrtfdxL3bPljhJUa73Z3HRZsUJCCdHEjmpfdR2y7QWWbypKclw1LIXCru89BxZvSGCSTkZkez5QI/nKCb3ChbYxygI9CmWBvB6GUSgiI0ONo8IQqYqjRMp2CBZLBYEhgEwMMjIEbW3imP8nZZSqimZ9YCsYEjpMFh7TkQzUwacm3apDoy3zBtOQ0DbB8RTH6xYPRroOLjv/ZCDEN1Gt7uGe4jpuzTVn/ZkH/mcP/AV+m5i3jqqAMgAAAABJRU5ErkJggg=="},"74de":function(e,t,r){var i=r("d635"),s=r("2b11");e.exports=function(e,t,r){if(i(t))throw TypeError("String#"+r+" doesn't accept regex!");return String(s(e))}},"84c5":function(e,t,r){"use strict";var i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"forget-passwrod-crumbs"},[r("ul",[r("li",{class:e.$route.path.includes("mobileValid")||e.$route.path.includes("identifyValid")||e.$route.path.includes("resetPassword")?"active":""},[e._v(" 手机号验证")]),r("li",{class:e.$route.path.includes("identifyValid")||e.$route.path.includes("resetPassword")?"active":""},[r("i",{staticClass:"icon-next"}),e._v("身份验证")]),r("li",{class:e.$route.path.includes("resetPassword")?"active":""},[r("i",{staticClass:"icon-next"}),e._v("重置密码")])])])},s=[],n={name:"TheCrumbs",computed:{},mounted:function(){},methods:{}},u=n,a=(r("e4f5"),r("17cc")),o=Object(a["a"])(u,i,s,!1,null,"09c9e3ba",null);t["a"]=o.exports},"93fe":function(e,t,r){"use strict";var i=r("2d2c"),s=r("74de"),n="includes";i(i.P+i.F*r("dd8b")(n),"String",{includes:function(e){return!!~s(this,e,n).indexOf(e,arguments.length>1?arguments[1]:void 0)}})},"9be6":function(e,t,r){"use strict";var i=r("c065"),s=r.n(i);s.a},acce:function(e,t,r){"use strict";r.d(t,"a",function(){return s});var i=r("bbd5"),s={data:function(){return{errorTips:"",errorIdNum:"",errorMobile:"",errorPwd:"",errorImgCode:"",errorMsgCode:"",isMessageCode:!1,imgCodeShow:!1,isRequesting:!1,uuid:"",delImg:{"background-image":"url("+r("6e30")+")"}}},mounted:function(){this.uuid=Object(i["a"])()},computed:{},methods:{focus:function(e,t){switch(this._onFocus(e),this.errorTips="",t){case"mobile":this.errorMobile="";break;case"idNum":this.errorIdNum="";break;case"pwd":this.errorPwd="";break;case"imgCode":this.errorImgCode="";break;case"msgCode":this.errorMsgCode=""}},del:function(e){this.sendForm[e]=""},_onFocus:function(e){for(var t=e.currentTarget.parentElement.children,r=0;r<t.length;r++)t[r]!==e.currentTarget&&t[r].classList.add("del")},_onBlur:function(e){for(var t=e.currentTarget.parentElement.children,r=0;r<t.length;r++)t[r]!==e.currentTarget&&t[r].classList.remove("del")}},watch:{}}},bbd5:function(e,t,r){"use strict";r.d(t,"a",function(){return i});r("ea65");function i(){var e,t="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(""),r=[];r[8]=r[13]=r[18]=r[23]="-",r[14]="4";for(var i=0;i<36;i++)r[i]||(e=0|16*Math.random(),r[i]=t[19===i?3&e|8:e]);return r.join("")}},c065:function(e,t,r){},d635:function(e,t,r){var i=r("b429"),s=r("9b6d"),n=r("f3ae")("match");e.exports=function(e){var t;return i(e)&&(void 0!==(t=e[n])?!!t:"RegExp"==s(e))}},dd8b:function(e,t,r){var i=r("f3ae")("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(r){try{return t[i]=!1,!"/./"[e](t)}catch(s){}}return!0}},e0c1:function(e,t,r){"use strict";var i=r("2d2c"),s=r("0d0d")(!0);i(i.P,"Array",{includes:function(e){return s(this,e,arguments.length>1?arguments[1]:void 0)}}),r("68fb")("includes")},e4f5:function(e,t,r){"use strict";var i=r("5b98"),s=r.n(i);s.a},ea65:function(e,t,r){"use strict";var i=r("d635"),s=r("4d65"),n=r("d4f6"),u=r("1ff3"),a=r("33f2"),o=r("b21ed"),d=r("31d0"),c=r("201d"),l=Math.min,m=[].push,f="split",p="length",v="lastIndex",h=4294967295,g=!c(function(){RegExp(h,"y")});r("c5aa")("split",2,function(e,t,r,c){var b;return b="c"=="abbc"[f](/(b)*/)[1]||4!="test"[f](/(?:)/,-1)[p]||2!="ab"[f](/(?:ab)*/)[p]||4!="."[f](/(.?)(.?)/)[p]||"."[f](/()()/)[p]>1||""[f](/.?/)[p]?function(e,t){var s=String(this);if(void 0===e&&0===t)return[];if(!i(e))return r.call(s,e,t);var n,u,a,o=[],c=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),l=0,f=void 0===t?h:t>>>0,g=new RegExp(e.source,c+"g");while(n=d.call(g,s)){if(u=g[v],u>l&&(o.push(s.slice(l,n.index)),n[p]>1&&n.index<s[p]&&m.apply(o,n.slice(1)),a=n[0][p],l=u,o[p]>=f))break;g[v]===n.index&&g[v]++}return l===s[p]?!a&&g.test("")||o.push(""):o.push(s.slice(l)),o[p]>f?o.slice(0,f):o}:"0"[f](void 0,0)[p]?function(e,t){return void 0===e&&0===t?[]:r.call(this,e,t)}:r,[function(r,i){var s=e(this),n=void 0==r?void 0:r[t];return void 0!==n?n.call(r,s,i):b.call(String(s),r,i)},function(e,t){var i=c(b,e,this,t,b!==r);if(i.done)return i.value;var d=s(e),m=String(this),f=n(d,RegExp),p=d.unicode,v=(d.ignoreCase?"i":"")+(d.multiline?"m":"")+(d.unicode?"u":"")+(g?"y":"g"),w=new f(g?d:"^(?:"+d.source+")",v),N=void 0===t?h:t>>>0;if(0===N)return[];if(0===m.length)return null===o(w,m)?[m]:[];var C=0,x=0,A=[];while(x<m.length){w.lastIndex=g?x:0;var F,y=o(w,g?m:m.slice(x));if(null===y||(F=l(a(w.lastIndex+(g?0:x)),m.length))===C)x=u(m,x,p);else{if(A.push(m.slice(C,x)),A.length===N)return A;for(var I=1;I<=y.length-1;I++)if(A.push(y[I]),A.length===N)return A;x=C=F}}return A.push(m.slice(C)),A}]})},f524:function(e,t,r){"use strict";r("e0c1"),r("93fe"),r("ea65");var i=r("056e"),s=r.n(i),n=r("7aaf"),u=r("1deb"),a=void 0,o=function(e){var t,r=e.split("-"),i=r[0],s=r[1],n=r[2],u=new Date,o=u.getFullYear(),d=u.getMonth()+1,c=u.getDate();if(o==i){var l=a.formatDate(new Date);return t=a.DateDiff(l,e)+1+"天",t}var m=o-i;if(m>0)if(d==s){var f=c-n;t=f<0?m-1+"岁":m+"岁"}else{var p=d-s;t=p<0?m-1+"岁":m+"岁"}else t=-1;return t};r.d(t,"a",function(){return c});var d=function(){function e(){Object(n["a"])(this,e)}return Object(u["a"])(e,[{key:"idCardRegexs",value:function(e){var t={11:"北京",12:"天津",13:"河北",14:"山西",15:"内蒙古",21:"辽宁",22:"吉林",23:"黑龙江 ",31:"上海",32:"江苏",33:"浙江",34:"安徽",35:"福建",36:"江西",37:"山东",41:"河南",42:"湖北 ",43:"湖南",44:"广东",45:"广西",46:"海南",50:"重庆",51:"四川",52:"贵州",53:"云南",54:"西藏 ",61:"陕西",62:"甘肃",63:"青海",64:"宁夏",65:"新疆",71:"台湾",81:"香港",82:"澳门",91:"国外 "},r="身份证号格式错误",i=["7","9","10","5","8","4","2","1","6","3","7","9","10","5","8","4","2"],n=["1","0","X","9","8","7","6","5","4","3","2"],u="",a=!0;function o(e){var r=/^[1-9]\d{5}$/.test(e);return!!r&&!!t[s()(e.substring(0,2))]}function d(e){var t=/^[1-9]\d{3}((0[1-9])|(1[0-2]))((0[1-9])|([1-2][0-9])|(3[0-1]))$/.test(e);if(!t)return!1;var r=s()(e.substring(0,4),10),i=s()(e.substring(4,6),10),n=s()(e.substring(6),10),u=new Date(r,i-1,n);return!(u>new Date)&&(u.getFullYear()==r&&u.getMonth()==i-1&&u.getDate()==n)}function c(e){for(var t=e.substring(0,17),r=0,u=0;u<17;u++)r+=s()(t.charAt(u),10)*s()(i[u]);var a=r%11;return n[a]}function l(e){if(15==e.length){var t=e.substring(0,6)+"19"+e.substring(6),r=c(t);return t+r}return 18==e.length?e:null}if(e&&/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(e))if(t[e.substr(0,2)]){if(15===e.length){var m=/^[1-9]\d{7}((0[1-9])|(1[0-2]))((0[1-9])|([1-2][0-9])|(3[0-1]))\d{3}$/.test(e);m||(a=!1);var f=e.substring(0,6);if(m=o(f),!m)return{pass:!1,tip:"身份证号格式错误"};var p="19"+e.substring(6,12);if(m=d(p),!m)return{pass:!1,tip:"身份证号格式错误"};e=l(e)}if(18===e.length){e=e.split("");for(var v=[7,9,10,5,8,4,2,1,6,3,7,9,10,5,8,4,2],h=[1,0,"X",9,8,7,6,5,4,3,2],g=0,b=0,w=0,N=0;N<17;N++)b=e[N],w=v[N],g+=b*w;var C=h[g%11];C!=e[17]&&(u=r,a=!1)}}else u=r,a=!1;else u=r,a=!1;return{pass:a,tip:u}}},{key:"mobileRegexs",value:function(e){var t="手机号格式错误",r=/^1[3|4|5|6|7|8|9]\d{9}$/;return e&&!r.test(e)?{pass:!1,tip:t}:{pass:!0,tip:""}}},{key:"pwdRegexs",value:function(e){var t="密码格式错误",r=/^[\da-zA-Z0-9~`!@#\/'|\[\]:,;$%^&*<>()}{?=\-+]{4,20}$/;return!r.test(e)&&e?{pass:!1,tip:t}:{pass:!0,tip:""}}},{key:"years16Regexs",value:function(e){var t,r=!1,i="仅支持16周岁及以上用户注册";15==e.length&&(e=e.substring(0,6)+"19"+e.substring(6));var n=e.slice(6,10)+"-"+e.slice(10,12)+"-"+e.slice(12,14);return t=o(n),"-1"==t?{pass:r,tip:i}:t.includes("天")?{pass:r,tip:i}:t.includes("岁")?s()(t)<16?{pass:r,tip:i}:{pass:!0,tip:""}:void 0}}]),e}(),c=new d}}]);
//# sourceMappingURL=chunk-103e53fc.c8c99a7a.js.map