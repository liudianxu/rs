(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-625a545d"],{"11e9":function(t,e,r){var n=r("52a7"),i=r("4630"),a=r("6821"),s=r("6a99"),u=r("69a8"),o=r("c69a"),c=Object.getOwnPropertyDescriptor;e.f=r("9e1e")?c:function(t,e){if(t=a(t),e=s(e,!0),o)try{return c(t,e)}catch(r){}if(u(t,e))return i(!n.f.call(t,e),t[e])}},1688:function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"imgcode-container",style:t.imgCodeStyle},[r("p",{staticClass:"title"},[t._v("图形验证码")]),t._t("default"),r("i",{staticClass:"close",on:{click:t.close}})],2)},i=[],a=(r("c5f6"),{name:"BaseAlertBox",props:{absTop:{type:Number,default:0},absLeft:{type:Number,default:0}},methods:{close:function(){this.$emit("hanleClose")}},computed:{imgCodeStyle:function(){return{top:this.absTop+"px",left:this.absLeft+"px"}}}}),s=a,u=(r("8f94"),r("2877")),o=Object(u["a"])(s,n,i,!1,null,"122a868c",null);e["a"]=o.exports},"197b":function(t,e,r){"use strict";r.d(e,"a",function(){return n}),r.d(e,"b",function(){return i}),r.d(e,"c",function(){return a});var n={notNull:"请先填写身份证号",registered:"该身份证号已注册"},i={notNull:"请先填写手机号",binded:"手机号已绑定其他身份证号",imgCodeError:"图形验证码错误",msgCodeError:"短信验证码错误",notRegister:"手机号未注册"},a={notSame:"两次输入的新密码不相同",notSame1:"两次输入的密码不相同",idNumOrPwdError:"身份证号或密码错误"}},"28a5":function(t,e,r){"use strict";var n=r("aae3"),i=r("cb7c"),a=r("ebd6"),s=r("0390"),u=r("9def"),o=r("5f1b"),c=r("520a"),f=r("79e5"),l=Math.min,d=[].push,p="split",g="length",v="lastIndex",h=4294967295,b=!f(function(){RegExp(h,"y")});r("214f")("split",2,function(t,e,r,f){var A;return A="c"=="abbc"[p](/(b)*/)[1]||4!="test"[p](/(?:)/,-1)[g]||2!="ab"[p](/(?:ab)*/)[g]||4!="."[p](/(.?)(.?)/)[g]||"."[p](/()()/)[g]>1||""[p](/.?/)[g]?function(t,e){var i=String(this);if(void 0===t&&0===e)return[];if(!n(t))return r.call(i,t,e);var a,s,u,o=[],f=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),l=0,p=void 0===e?h:e>>>0,b=new RegExp(t.source,f+"g");while(a=c.call(b,i)){if(s=b[v],s>l&&(o.push(i.slice(l,a.index)),a[g]>1&&a.index<i[g]&&d.apply(o,a.slice(1)),u=a[0][g],l=s,o[g]>=p))break;b[v]===a.index&&b[v]++}return l===i[g]?!u&&b.test("")||o.push(""):o.push(i.slice(l)),o[g]>p?o.slice(0,p):o}:"0"[p](void 0,0)[g]?function(t,e){return void 0===t&&0===e?[]:r.call(this,t,e)}:r,[function(r,n){var i=t(this),a=void 0==r?void 0:r[e];return void 0!==a?a.call(r,i,n):A.call(String(i),r,n)},function(t,e){var n=f(A,t,this,e,A!==r);if(n.done)return n.value;var c=i(t),d=String(this),p=a(c,RegExp),g=c.unicode,v=(c.ignoreCase?"i":"")+(c.multiline?"m":"")+(c.unicode?"u":"")+(b?"y":"g"),m=new p(b?c:"^(?:"+c.source+")",v),y=void 0===e?h:e>>>0;if(0===y)return[];if(0===d.length)return null===o(m,d)?[d]:[];var x=0,N=0,w=[];while(N<d.length){m.lastIndex=b?N:0;var E,I=o(m,b?d:d.slice(N));if(null===I||(E=l(u(m.lastIndex+(b?0:N)),d.length))===x)N=s(d,N,g);else{if(w.push(d.slice(x,N)),w.length===y)return w;for(var _=1;_<=I.length-1;_++)if(w.push(I[_]),w.length===y)return w;N=x=E}}return w.push(d.slice(x)),w}]})},"2fdb":function(t,e,r){"use strict";var n=r("5ca1"),i=r("d2c8"),a="includes";n(n.P+n.F*r("5147")(a),"String",{includes:function(t){return!!~i(this,t,a).indexOf(t,arguments.length>1?arguments[1]:void 0)}})},5147:function(t,e,r){var n=r("2b4c")("match");t.exports=function(t){var e=/./;try{"/./"[t](e)}catch(r){try{return e[n]=!1,!"/./"[t](e)}catch(i){}}return!0}},"5dbc":function(t,e,r){var n=r("d3f4"),i=r("8b97").set;t.exports=function(t,e,r){var a,s=e.constructor;return s!==r&&"function"==typeof s&&(a=s.prototype)!==r.prototype&&n(a)&&i&&i(t,a),t}},6762:function(t,e,r){"use strict";var n=r("5ca1"),i=r("c366")(!0);n(n.P,"Array",{includes:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}}),r("9c6c")("includes")},"6e30":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWBAMAAAA2mnEIAAAAJFBMVEUAAADZ2dnb29vZ2dnY2NjY2NjY2Nja2trZ2dnd3d3Z2dnY2NgFUa8DAAAAC3RSTlMA7CuZ89jAUkMlPW0Axj8AAABuSURBVBjTY8AHOExdghsgTM7s3bt3b5sAZi/cDQJSYGFpMHsjSIJtNwQkANnduzcX7ha33r0DyLbevZ1JUKF692YgO3r3RgUlJundW4Fs7927hRgUd+/egspGqEHVizATzS6EGxBuQ3Uzwi84AQBiZ0kvu9RnaAAAAABJRU5ErkJggg=="},"8b97":function(t,e,r){var n=r("d3f4"),i=r("cb7c"),a=function(t,e){if(i(t),!n(e)&&null!==e)throw TypeError(e+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,e,n){try{n=r("9b43")(Function.call,r("11e9").f(Object.prototype,"__proto__").set,2),n(t,[]),e=!(t instanceof Array)}catch(i){e=!0}return function(t,r){return a(t,r),e?t.__proto__=r:n(t,r),t}}({},!1):void 0),check:a}},"8f94":function(t,e,r){"use strict";var n=r("9681"),i=r.n(n);i.a},9093:function(t,e,r){var n=r("ce10"),i=r("e11e").concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return n(t,i)}},9681:function(t,e,r){},aa77:function(t,e,r){var n=r("5ca1"),i=r("be13"),a=r("79e5"),s=r("fdef"),u="["+s+"]",o="​",c=RegExp("^"+u+u+"*"),f=RegExp(u+u+"*$"),l=function(t,e,r){var i={},u=a(function(){return!!s[t]()||o[t]()!=o}),c=i[t]=u?e(d):s[t];r&&(i[r]=c),n(n.P+n.F*u,"String",i)},d=l.trim=function(t,e){return t=String(i(t)),1&e&&(t=t.replace(c,"")),2&e&&(t=t.replace(f,"")),t};t.exports=l},aae3:function(t,e,r){var n=r("d3f4"),i=r("2d95"),a=r("2b4c")("match");t.exports=function(t){var e;return n(t)&&(void 0!==(e=t[a])?!!e:"RegExp"==i(t))}},acce:function(t,e,r){"use strict";r.d(e,"a",function(){return i});var n=r("bbd5"),i={data:function(){return{errorTips:"",errorIdNum:"",errorMobile:"",errorPwd:"",errorImgCode:"",errorMsgCode:"",isMessageCode:!1,imgCodeShow:!1,isRequesting:!1,uuid:"",delImg:{"background-image":"url("+r("6e30")+")"}}},mounted:function(){this.uuid=Object(n["b"])()},computed:{},methods:{focus:function(t,e){switch(this._onFocus(t),this.errorTips="",e){case"mobile":this.errorMobile="";break;case"idNum":this.errorIdNum="";break;case"pwd":this.errorPwd="";break;case"imgCode":this.errorImgCode=""}},del:function(t){this.sendForm[t]=""},_onFocus:function(t){for(var e=t.currentTarget.parentElement.children,r=0;r<e.length;r++)e[r]!==t.currentTarget&&e[r].classList.add("del")},_onBlur:function(t){for(var e=t.currentTarget.parentElement.children,r=0;r<e.length;r++)e[r]!==t.currentTarget&&e[r].classList.remove("del")}},watch:{}}},bbd5:function(t,e,r){"use strict";r.d(e,"a",function(){return n}),r.d(e,"b",function(){return i});r("28a5");function n(t,e){var r;return function(){for(var n=this,i=arguments.length,a=new Array(i),s=0;s<i;s++)a[s]=arguments[s];r&&clearTimeout(r),r=setTimeout(function(){t.apply(n,a)},e)}}function i(){var t,e="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(""),r=[];r[8]=r[13]=r[18]=r[23]="-",r[14]="4";for(var n=0;n<36;n++)r[n]||(t=0|16*Math.random(),r[n]=e[19===n?3&t|8:t]);return r.join("")}},c5f6:function(t,e,r){"use strict";var n=r("7726"),i=r("69a8"),a=r("2d95"),s=r("5dbc"),u=r("6a99"),o=r("79e5"),c=r("9093").f,f=r("11e9").f,l=r("86cc").f,d=r("aa77").trim,p="Number",g=n[p],v=g,h=g.prototype,b=a(r("2aeb")(h))==p,A="trim"in String.prototype,m=function(t){var e=u(t,!1);if("string"==typeof e&&e.length>2){e=A?e.trim():d(e,3);var r,n,i,a=e.charCodeAt(0);if(43===a||45===a){if(r=e.charCodeAt(2),88===r||120===r)return NaN}else if(48===a){switch(e.charCodeAt(1)){case 66:case 98:n=2,i=49;break;case 79:case 111:n=8,i=55;break;default:return+e}for(var s,o=e.slice(2),c=0,f=o.length;c<f;c++)if(s=o.charCodeAt(c),s<48||s>i)return NaN;return parseInt(o,n)}}return+e};if(!g(" 0o1")||!g("0b1")||g("+0x1")){g=function(t){var e=arguments.length<1?0:t,r=this;return r instanceof g&&(b?o(function(){h.valueOf.call(r)}):a(r)!=p)?s(new v(m(e)),r,g):m(e)};for(var y,x=r("9e1e")?c(v):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),N=0;x.length>N;N++)i(v,y=x[N])&&!i(g,y)&&l(g,y,f(v,y));g.prototype=h,h.constructor=g,r("2aba")(n,p,g)}},d2c8:function(t,e,r){var n=r("aae3"),i=r("be13");t.exports=function(t,e,r){if(n(e))throw TypeError("String#"+r+" doesn't accept regex!");return String(i(t))}},f524:function(t,e,r){"use strict";r("6762"),r("2fdb"),r("28a5");var n=r("e814"),i=r.n(n),a=r("d225"),s=r("b0b4"),u=void 0,o=function(t){var e,r=t.split("-"),n=r[0],i=r[1],a=r[2],s=new Date,o=s.getFullYear(),c=s.getMonth()+1,f=s.getDate();if(o==n){var l=u.formatDate(new Date);return e=u.DateDiff(l,t)+1+"天",e}var d=o-n;if(d>0)if(c==i){var p=f-a;e=p<0?d-1+"岁":d+"岁"}else{var g=c-i;e=g<0?d-1+"岁":d+"岁"}else e=-1;return e};r.d(e,"a",function(){return f});var c=function(){function t(){Object(a["a"])(this,t)}return Object(s["a"])(t,[{key:"idCardRegexs",value:function(t){var e={11:"北京",12:"天津",13:"河北",14:"山西",15:"内蒙古",21:"辽宁",22:"吉林",23:"黑龙江 ",31:"上海",32:"江苏",33:"浙江",34:"安徽",35:"福建",36:"江西",37:"山东",41:"河南",42:"湖北 ",43:"湖南",44:"广东",45:"广西",46:"海南",50:"重庆",51:"四川",52:"贵州",53:"云南",54:"西藏 ",61:"陕西",62:"甘肃",63:"青海",64:"宁夏",65:"新疆",71:"台湾",81:"香港",82:"澳门",91:"国外 "},r="身份证号格式错误",n=["7","9","10","5","8","4","2","1","6","3","7","9","10","5","8","4","2"],a=["1","0","X","9","8","7","6","5","4","3","2"],s="",u=!0;function o(t){var r=/^[1-9]\d{5}$/.test(t);return!!r&&!!e[i()(t.substring(0,2))]}function c(t){var e=/^[1-9]\d{3}((0[1-9])|(1[0-2]))((0[1-9])|([1-2][0-9])|(3[0-1]))$/.test(t);if(!e)return!1;var r=i()(t.substring(0,4),10),n=i()(t.substring(4,6),10),a=i()(t.substring(6),10),s=new Date(r,n-1,a);return!(s>new Date)&&(s.getFullYear()==r&&s.getMonth()==n-1&&s.getDate()==a)}function f(t){for(var e=t.substring(0,17),r=0,s=0;s<17;s++)r+=i()(e.charAt(s),10)*i()(n[s]);var u=r%11;return a[u]}function l(t){if(15==t.length){var e=t.substring(0,6)+"19"+t.substring(6),r=f(e);return e+r}return 18==t.length?t:null}if(t&&/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(t))if(e[t.substr(0,2)]){if(15===t.length){var d=/^[1-9]\d{7}((0[1-9])|(1[0-2]))((0[1-9])|([1-2][0-9])|(3[0-1]))\d{3}$/.test(t);d||(u=!1);var p=t.substring(0,6);if(d=o(p),!d)return{pass:!1,tip:"身份证号格式错误"};var g="19"+t.substring(6,12);if(d=c(g),!d)return{pass:!1,tip:"身份证号格式错误"};t=l(t)}if(18===t.length){t=t.split("");for(var v=[7,9,10,5,8,4,2,1,6,3,7,9,10,5,8,4,2],h=[1,0,"X",9,8,7,6,5,4,3,2],b=0,A=0,m=0,y=0;y<17;y++)A=t[y],m=v[y],b+=A*m;var x=h[b%11];x!=t[17]&&(s=r,u=!1)}}else s=r,u=!1;else s=r,u=!1;return{pass:u,tip:s}}},{key:"mobileRegexs",value:function(t){var e="手机号格式错误",r=/^1[3|4|5|6|7|8|9]\d{9}$/;return t&&!r.test(t)?{pass:!1,tip:e}:{pass:!0,tip:""}}},{key:"pwdRegexs",value:function(t){var e="密码格式错误",r=/^[\da-zA-Z0-9~`!@#\/'|\[\]:,;$%^&*<>()}{?=\-+]{4,20}$/;return!r.test(t)&&t?{pass:!1,tip:e}:{pass:!0,tip:""}}},{key:"years16Regexs",value:function(t){var e,r=!1,n="仅支持16周岁及以上用户注册";15==t.length&&(t=t.substring(0,6)+"19"+t.substring(6));var a=t.slice(6,10)+"-"+t.slice(10,12)+"-"+t.slice(12,14);return e=o(a),"-1"==e?{pass:r,tip:n}:e.includes("天")?{pass:r,tip:n}:e.includes("岁")?i()(e)<16?{pass:r,tip:n}:{pass:!0,tip:""}:void 0}}]),t}(),f=new c},fdef:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"}}]);
//# sourceMappingURL=chunk-625a545d.9590646c.js.map