(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ea144cca"],{"197b":function(e,t,r){"use strict";r.d(t,"a",function(){return n}),r.d(t,"b",function(){return i}),r.d(t,"c",function(){return s});var n={notNull:"请先填写身份证号",registered:"该身份证号已注册"},i={notNull:"请先填写手机号",binded:"手机号已绑定其他身份证号",imgCodeError:"图形验证码错误",msgCodeError:"短信验证码错误",notRegister:"手机号未注册"},s={notSame:"两次输入的新密码不相同",idNumOrPwdError:"身份证号或密码错误"}},"28a5":function(e,t,r){"use strict";var n=r("aae3"),i=r("cb7c"),s=r("ebd6"),a=r("0390"),u=r("9def"),o=r("5f1b"),c=r("520a"),d=r("79e5"),l=Math.min,m=[].push,f="split",h="length",p="lastIndex",v=4294967295,g=!d(function(){RegExp(v,"y")});r("214f")("split",2,function(e,t,r,d){var b;return b="c"=="abbc"[f](/(b)*/)[1]||4!="test"[f](/(?:)/,-1)[h]||2!="ab"[f](/(?:ab)*/)[h]||4!="."[f](/(.?)(.?)/)[h]||"."[f](/()()/)[h]>1||""[f](/.?/)[h]?function(e,t){var i=String(this);if(void 0===e&&0===t)return[];if(!n(e))return r.call(i,e,t);var s,a,u,o=[],d=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),l=0,f=void 0===t?v:t>>>0,g=new RegExp(e.source,d+"g");while(s=c.call(g,i)){if(a=g[p],a>l&&(o.push(i.slice(l,s.index)),s[h]>1&&s.index<i[h]&&m.apply(o,s.slice(1)),u=s[0][h],l=a,o[h]>=f))break;g[p]===s.index&&g[p]++}return l===i[h]?!u&&g.test("")||o.push(""):o.push(i.slice(l)),o[h]>f?o.slice(0,f):o}:"0"[f](void 0,0)[h]?function(e,t){return void 0===e&&0===t?[]:r.call(this,e,t)}:r,[function(r,n){var i=e(this),s=void 0==r?void 0:r[t];return void 0!==s?s.call(r,i,n):b.call(String(i),r,n)},function(e,t){var n=d(b,e,this,t,b!==r);if(n.done)return n.value;var c=i(e),m=String(this),f=s(c,RegExp),h=c.unicode,p=(c.ignoreCase?"i":"")+(c.multiline?"m":"")+(c.unicode?"u":"")+(g?"y":"g"),A=new f(g?c:"^(?:"+c.source+")",p),N=void 0===t?v:t>>>0;if(0===N)return[];if(0===m.length)return null===o(A,m)?[m]:[];var w=0,x=0,C=[];while(x<m.length){A.lastIndex=g?x:0;var y,F=o(A,g?m:m.slice(x));if(null===F||(y=l(u(A.lastIndex+(g?0:x)),m.length))===w)x=a(m,x,h);else{if(C.push(m.slice(w,x)),C.length===N)return C;for(var k=1;k<=F.length-1;k++)if(C.push(F[k]),C.length===N)return C;x=w=y}}return C.push(m.slice(w)),C}]})},"2c6b":function(e,t,r){"use strict";var n=r("3b69"),i=r.n(n);i.a},"2fdb":function(e,t,r){"use strict";var n=r("5ca1"),i=r("d2c8"),s="includes";n(n.P+n.F*r("5147")(s),"String",{includes:function(e){return!!~i(this,e,s).indexOf(e,arguments.length>1?arguments[1]:void 0)}})},"3b69":function(e,t,r){},5147:function(e,t,r){var n=r("2b4c")("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(r){try{return t[n]=!1,!"/./"[e](t)}catch(i){}}return!0}},6762:function(e,t,r){"use strict";var n=r("5ca1"),i=r("c366")(!0);n(n.P,"Array",{includes:function(e){return i(this,e,arguments.length>1?arguments[1]:void 0)}}),r("9c6c")("includes")},"6e30":function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWBAMAAAA2mnEIAAAAJFBMVEUAAADZ2dnb29vZ2dnY2NjY2NjY2Nja2trZ2dnd3d3Z2dnY2NgFUa8DAAAAC3RSTlMA7CuZ89jAUkMlPW0Axj8AAABuSURBVBjTY8AHOExdghsgTM7s3bt3b5sAZi/cDQJSYGFpMHsjSIJtNwQkANnduzcX7ha33r0DyLbevZ1JUKF692YgO3r3RgUlJundW4Fs7927hRgUd+/egspGqEHVizATzS6EGxBuQ3Uzwi84AQBiZ0kvu9RnaAAAAABJRU5ErkJggg=="},"84c5":function(e,t,r){"use strict";var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"forget-passwrod-crumbs"},[r("ul",{staticClass:"clearfix"},[r("li",{class:e.$route.path.includes("mobileValid")||e.$route.path.includes("identifyValid")||e.$route.path.includes("resetPassword")?"active":""},[e._v(" 手机号验证")]),r("li",{class:e.$route.path.includes("identifyValid")||e.$route.path.includes("resetPassword")?"active":""},[r("i",{staticClass:"icon-next"}),e._v("身份验证")]),r("li",{class:e.$route.path.includes("resetPassword")?"active":""},[r("i",{staticClass:"icon-next"}),e._v("重置密码")])])])},i=[],s={name:"TheCrumbs",computed:{},mounted:function(){},methods:{}},a=s,u=(r("2c6b"),r("2877")),o=Object(u["a"])(a,n,i,!1,null,"6d5aa331",null);t["a"]=o.exports},"87dc":function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"identify-valid"},[r("pwd-crumbs"),r("form",{staticClass:"comForm",attrs:{action:""},on:{submit:function(t){return t.preventDefault(),e.submit(t)}}},[r("div",{staticClass:"input-wrapper"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.sendForm.idNum,expression:"sendForm.idNum"}],class:e.errorIdNum?"active":"",attrs:{type:"text",placeholder:"身份证号"},domProps:{value:e.sendForm.idNum},on:{focus:function(t){return e.focus(t,"idNum")},blur:function(t){return e.blur(t,"idNum")},input:function(t){t.target.composing||e.$set(e.sendForm,"idNum",t.target.value)}}}),r("i",{directives:[{name:"show",rawName:"v-show",value:e.sendForm.idNum,expression:"sendForm.idNum"}],staticClass:"del",style:e.delImg,on:{mousedown:function(t){return t.stopPropagation(),e.del("idNum")}}}),r("span",{staticClass:"error"},[e._v(e._s(e.errorIdNum))])]),r("div",{staticClass:"input-wrapper"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.sendForm.queryName,expression:"sendForm.queryName"}],attrs:{type:"text",placeholder:"姓名"},domProps:{value:e.sendForm.queryName},on:{focus:function(t){return e.focus(t)},blur:function(t){return e.blur(t)},input:function(t){t.target.composing||e.$set(e.sendForm,"queryName",t.target.value)}}}),r("i",{directives:[{name:"show",rawName:"v-show",value:e.sendForm.queryName,expression:"sendForm.queryName"}],staticClass:"del",style:e.delImg,on:{mousedown:function(t){return t.stopPropagation(),e.del("queryName")}}})]),r("div",{staticClass:"submit-wrapper"},[r("div",{directives:[{name:"show",rawName:"v-show",value:e.errorTips,expression:"errorTips"}],staticClass:"error-tips"},[e._v(e._s(e.errorTips))]),r("input",{staticClass:"submit",class:e.allValid?"active":"",attrs:{type:"submit",value:"下一步",disabled:!e.allValid}})]),r("div",{staticClass:"go-login-tips"},[e._v("\n      已有账号，马上"),r("router-link",{staticClass:"register-btn",attrs:{tag:"span",to:"/37duc/user/smsLogin"}},[r("span",[e._v("登录")])])],1)])],1)},i=[],s=r("84c5"),a=r("acce"),u=r("f524"),o=r("197b"),c={name:"TheIdentifyVailid",mixins:[a["a"]],data:function(){return{sendForm:{idNum:"",queryName:""}}},mounted:function(){this.getNormalStep()},methods:{submit:function(){var e=this,t={idNum:this.sendForm.idNum,name:this.sendForm.queryName};this.$api.user.identifyValidCommit(t).then(function(t){1===t.code?e.$router.push("/37duc/user/forgetPassword/resetPassword"):e.errorTips=t.message})},getMessageCode:function(){this.errorIdNum||(this.sendForm.idNum?this.readsecond():this.errorIdNum=o["a"].notNull)},blur:function(e,t){switch(this._onBlur(e),t){case"idNum":this._validIdNum();break}},getNormalStep:function(){var e=this;this.$api.user.isNormalByStep1().then(function(t){0===t.code&&e.$router.push({path:"/37duc/user/forgetPassword/mobileValid"})})},_validIdNum:function(){this.sendForm.idNum&&(u["a"].idCardRegexs(this.sendForm.idNum).pass||(this.errorIdNum=u["a"].idCardRegexs(this.sendForm.idNum).tip))}},computed:{allValid:function(){return this.sendForm.idNum&&this.sendForm.queryName&&!this.errorIdNum}},components:{pwdCrumbs:s["a"]}},d=c,l=(r("96c0"),r("2877")),m=Object(l["a"])(d,n,i,!1,null,"03487d61",null);t["default"]=m.exports},"96c0":function(e,t,r){"use strict";var n=r("ac24"),i=r.n(n);i.a},aae3:function(e,t,r){var n=r("d3f4"),i=r("2d95"),s=r("2b4c")("match");e.exports=function(e){var t;return n(e)&&(void 0!==(t=e[s])?!!t:"RegExp"==i(e))}},ac24:function(e,t,r){},acce:function(e,t,r){"use strict";r.d(t,"a",function(){return i});var n=r("bbd5"),i={data:function(){return{errorTips:"",errorIdNum:"",errorMobile:"",errorPwd:"",errorImgCode:"",errorMsgCode:"",isMessageCode:!1,imgCodeShow:!1,uuid:"",delImg:{"background-image":"url("+r("6e30")+")"}}},mounted:function(){this.uuid=Object(n["b"])()},computed:{},methods:{focus:function(e,t){switch(this._onFocus(e),this.errorTips="",t){case"mobile":this.errorMobile="";break;case"idNum":this.errorIdNum="";break;case"pwd":this.errorPwd="";break;case"imgCode":this.errorImgCode=""}},del:function(e){this.sendForm[e]=""},_onFocus:function(e){for(var t=e.currentTarget.parentElement.children,r=0;r<t.length;r++)t[r]!==e.currentTarget&&t[r].classList.add("del")},_onBlur:function(e){for(var t=e.currentTarget.parentElement.children,r=0;r<t.length;r++)t[r]!==e.currentTarget&&t[r].classList.remove("del")}},watch:{}}},bbd5:function(e,t,r){"use strict";r.d(t,"b",function(){return n}),r.d(t,"a",function(){return s});r("28a5");function n(){var e,t="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(""),r=[];r[8]=r[13]=r[18]=r[23]="-",r[14]="4";for(var n=0;n<36;n++)r[n]||(e=0|16*Math.random(),r[n]=t[19===n?3&e|8:e]);return r.join("")}var i="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",s=function(e){var t,r,n,s,a,u;n=e.length,r=0,t="";while(r<n){if(s=255&e.charCodeAt(r++),r==n){t+=i.charAt(s>>2),t+=i.charAt((3&s)<<4),t+="==";break}if(a=e.charCodeAt(r++),r==n){t+=i.charAt(s>>2),t+=i.charAt((3&s)<<4|(240&a)>>4),t+=i.charAt((15&a)<<2),t+="=";break}u=e.charCodeAt(r++),t+=i.charAt(s>>2),t+=i.charAt((3&s)<<4|(240&a)>>4),t+=i.charAt((15&a)<<2|(192&u)>>6),t+=i.charAt(63&u)}return t}},d2c8:function(e,t,r){var n=r("aae3"),i=r("be13");e.exports=function(e,t,r){if(n(t))throw TypeError("String#"+r+" doesn't accept regex!");return String(i(e))}},f524:function(e,t,r){"use strict";r("6762"),r("2fdb"),r("28a5");var n=r("e814"),i=r.n(n),s=r("d225"),a=r("b0b4"),u=void 0,o=function(e){var t,r=e.split("-"),n=r[0],i=r[1],s=r[2],a=new Date,o=a.getFullYear(),c=a.getMonth()+1,d=a.getDate();if(o==n){var l=u.formatDate(new Date);return t=u.DateDiff(l,e)+1+"天",t}var m=o-n;if(m>0)if(c==i){var f=d-s;t=f<0?m-1+"岁":m+"岁"}else{var h=c-i;t=h<0?m-1+"岁":m+"岁"}else t=-1;return t};r.d(t,"a",function(){return d});var c=function(){function e(){Object(s["a"])(this,e)}return Object(a["a"])(e,[{key:"idCardRegexs",value:function(e){var t={11:"北京",12:"天津",13:"河北",14:"山西",15:"内蒙古",21:"辽宁",22:"吉林",23:"黑龙江 ",31:"上海",32:"江苏",33:"浙江",34:"安徽",35:"福建",36:"江西",37:"山东",41:"河南",42:"湖北 ",43:"湖南",44:"广东",45:"广西",46:"海南",50:"重庆",51:"四川",52:"贵州",53:"云南",54:"西藏 ",61:"陕西",62:"甘肃",63:"青海",64:"宁夏",65:"新疆",71:"台湾",81:"香港",82:"澳门",91:"国外 "},r="身份证号格式错误",n=["7","9","10","5","8","4","2","1","6","3","7","9","10","5","8","4","2"],s=["1","0","X","9","8","7","6","5","4","3","2"],a="",u=!0;function o(e){var r=/^[1-9]\d{5}$/.test(e);return!!r&&!!t[i()(e.substring(0,2))]}function c(e){var t=/^[1-9]\d{3}((0[1-9])|(1[0-2]))((0[1-9])|([1-2][0-9])|(3[0-1]))$/.test(e);if(!t)return!1;var r=i()(e.substring(0,4),10),n=i()(e.substring(4,6),10),s=i()(e.substring(6),10),a=new Date(r,n-1,s);return!(a>new Date)&&(a.getFullYear()==r&&a.getMonth()==n-1&&a.getDate()==s)}function d(e){for(var t=e.substring(0,17),r=0,a=0;a<17;a++)r+=i()(t.charAt(a),10)*i()(n[a]);var u=r%11;return s[u]}function l(e){if(15==e.length){var t=e.substring(0,6)+"19"+e.substring(6),r=d(t);return t+r}return 18==e.length?e:null}if(e&&/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(e))if(t[e.substr(0,2)]){if(15===e.length){var m=/^[1-9]\d{7}((0[1-9])|(1[0-2]))((0[1-9])|([1-2][0-9])|(3[0-1]))\d{3}$/.test(e);m||(u=!1);var f=e.substring(0,6);if(m=o(f),!m)return!1;var h="19"+e.substring(6,12);if(m=c(h),!m)return!1;e=l(e)}if(18===e.length){e=e.split("");for(var p=[7,9,10,5,8,4,2,1,6,3,7,9,10,5,8,4,2],v=[1,0,"X",9,8,7,6,5,4,3,2],g=0,b=0,A=0,N=0;N<17;N++)b=e[N],A=p[N],g+=b*A;var w=v[g%11];w!=e[17]&&(a=r,u=!1)}}else a=r,u=!1;else a=r,u=!1;return{pass:u,tip:a}}},{key:"mobileRegexs",value:function(e){var t="手机号格式错误",r=/^1[3|4|5|6|7|8|9]\d{9}$/;return e&&!r.test(e)?{pass:!1,tip:t}:{pass:!0,tip:""}}},{key:"pwdRegexs",value:function(e){var t="密码格式错误",r=/^[\da-zA-Z0-9~`!@#\/'|\[\]:,;$%^&*<>()}{?=\-+]{4,20}$/;return!r.test(e)&&e?{pass:!1,tip:t}:{pass:!0,tip:""}}},{key:"years16Regexs",value:function(e){var t,r=!1,n="仅支持16周岁及以上用户注册";15==e.length&&(e=e.substring(0,6)+"19"+e.substring(6));var s=e.slice(6,10)+"-"+e.slice(10,12)+"-"+e.slice(12,14);return t=o(s),"-1"==t?{pass:r,tip:n}:t.includes("天")?{pass:r,tip:n}:t.includes("岁")?i()(t)<16?{pass:r,tip:n}:{pass:!0,tip:""}:void 0}}]),e}(),d=new c}}]);
//# sourceMappingURL=chunk-ea144cca.4efa6099.js.map