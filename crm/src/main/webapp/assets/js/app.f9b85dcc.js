(function(e){function n(n){for(var r,c,o=n[0],s=n[1],i=n[2],f=0,d=[];f<o.length;f++)c=o[f],a[c]&&d.push(a[c][0]),a[c]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);h&&h(n);while(d.length)d.shift()();return u.push.apply(u,i||[]),t()}function t(){for(var e,n=0;n<u.length;n++){for(var t=u[n],r=!0,c=1;c<t.length;c++){var o=t[c];0!==a[o]&&(r=!1)}r&&(u.splice(n--,1),e=s(s.s=t[0]))}return e}var r={},c={app:0},a={app:0},u=[];function o(e){return s.p+"assets/js/"+({}[e]||e)+"."+{"chunk-002fc618":"0c4d3d5d","chunk-0235d1d6":"d9cb0cef","chunk-16eb2af0":"d2bbda40","chunk-17567000":"d5707405","chunk-239c9351":"ddf4b78a","chunk-24b7218a":"63c4f66d","chunk-264f5bae":"3e48fb21","chunk-2b480e6b":"543d137a","chunk-2d0d3c19":"3673f955","chunk-2d0d3e0a":"0ad5ce09","chunk-3e6b91c9":"764eefcb","chunk-625a545d":"d39c91d5","chunk-0af63b94":"94976f00","chunk-e04e19a0":"d6729e48","chunk-718e543b":"4b9b2979","chunk-751d5325":"62031d3e","chunk-7b5e229e":"3d80aa6a","chunk-7e5464ee":"d78f3c1e","chunk-9c96913e":"6d7fd0f6","chunk-c9b9e2e4":"42cc2c20","chunk-ea144cca":"4efa6099","chunk-f4c99ab2":"d5bcafc4"}[e]+".js"}function s(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,s),t.l=!0,t.exports}s.e=function(e){var n=[],t={"chunk-002fc618":1,"chunk-0235d1d6":1,"chunk-16eb2af0":1,"chunk-17567000":1,"chunk-239c9351":1,"chunk-24b7218a":1,"chunk-264f5bae":1,"chunk-2b480e6b":1,"chunk-3e6b91c9":1,"chunk-625a545d":1,"chunk-0af63b94":1,"chunk-e04e19a0":1,"chunk-718e543b":1,"chunk-751d5325":1,"chunk-7b5e229e":1,"chunk-7e5464ee":1,"chunk-9c96913e":1,"chunk-c9b9e2e4":1,"chunk-ea144cca":1,"chunk-f4c99ab2":1};c[e]?n.push(c[e]):0!==c[e]&&t[e]&&n.push(c[e]=new Promise(function(n,t){for(var r="assets/css/"+({}[e]||e)+"."+{"chunk-002fc618":"d503b69f","chunk-0235d1d6":"e25193a1","chunk-16eb2af0":"6afe3429","chunk-17567000":"707ca986","chunk-239c9351":"92a3e193","chunk-24b7218a":"afcdb16f","chunk-264f5bae":"ab29a21e","chunk-2b480e6b":"92b7caad","chunk-2d0d3c19":"31d6cfe0","chunk-2d0d3e0a":"31d6cfe0","chunk-3e6b91c9":"b2a21497","chunk-625a545d":"27d6cb0a","chunk-0af63b94":"784d9332","chunk-e04e19a0":"55217c4e","chunk-718e543b":"0f592927","chunk-751d5325":"11a8124e","chunk-7b5e229e":"06bcd884","chunk-7e5464ee":"7c05efff","chunk-9c96913e":"5fc1b037","chunk-c9b9e2e4":"84d523ea","chunk-ea144cca":"cb4d511f","chunk-f4c99ab2":"e83baf8d"}[e]+".css",a=s.p+r,u=document.getElementsByTagName("link"),o=0;o<u.length;o++){var i=u[o],f=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(f===r||f===a))return n()}var d=document.getElementsByTagName("style");for(o=0;o<d.length;o++){i=d[o],f=i.getAttribute("data-href");if(f===r||f===a)return n()}var h=document.createElement("link");h.rel="stylesheet",h.type="text/css",h.onload=n,h.onerror=function(n){var r=n&&n.target&&n.target.src||a,u=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");u.request=r,delete c[e],h.parentNode.removeChild(h),t(u)},h.href=a;var b=document.getElementsByTagName("head")[0];b.appendChild(h)}).then(function(){c[e]=0}));var r=a[e];if(0!==r)if(r)n.push(r[2]);else{var u=new Promise(function(n,t){r=a[e]=[n,t]});n.push(r[2]=u);var i,f=document.createElement("script");f.charset="utf-8",f.timeout=120,s.nc&&f.setAttribute("nonce",s.nc),f.src=o(e),i=function(n){f.onerror=f.onload=null,clearTimeout(d);var t=a[e];if(0!==t){if(t){var r=n&&("load"===n.type?"missing":n.type),c=n&&n.target&&n.target.src,u=new Error("Loading chunk "+e+" failed.\n("+r+": "+c+")");u.type=r,u.request=c,t[1](u)}a[e]=void 0}};var d=setTimeout(function(){i({type:"timeout",target:f})},12e4);f.onerror=f.onload=i,document.head.appendChild(f)}return Promise.all(n)},s.m=e,s.c=r,s.d=function(e,n,t){s.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,n){if(1&n&&(e=s(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(s.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)s.d(t,r,function(n){return e[n]}.bind(null,r));return t},s.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(n,"a",n),n},s.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},s.p="/",s.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],f=i.push.bind(i);i.push=n,i=i.slice();for(var d=0;d<i.length;d++)n(i[d]);var h=f;u.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"0c6d":function(e,n,t){"use strict";t("a481");var r=t("795b"),c=t.n(r),a=t("d225"),u=t("b0b4"),o=t("bc3a"),s=t.n(o),i={baseURL:"".concat("http://192.168.15.64:8003/pc"),headers:{"Content-Type":"application/x-www-form-urlencoded"},timeout:36e4,withCredentials:!0},f=i,d=t("e814"),h=t.n(d),b=t("4360"),l=t("a18c"),p=function(){var e=b["a"].getters.token,n="";return n=e||"",{auth:!!n,token:n}},m=function(e){switch(h()(e)){case 401:b["a"].commit("SET_TOKEN",""),l["a"].push("/37duc/user/smsLogin");break;case 402:b["a"].commit("SET_TOKEN",""),l["a"].push("/37duc/user/smsLogin");break;default:return!0}},j=s.a.create(f);j.interceptors.request.use(function(e){var n=p(),t=n.auth,r=n.token;return t&&r&&(e.headers["Authorization"]=r),e},function(e){return c.a.reject(e)}),j.interceptors.response.use(function(e){try{m(e.data.code)}catch(n){}return e},function(e){return c.a.reject(e)});var k=j;t.d(n,"a",function(){return v});var g=function(){function e(n){Object(a["a"])(this,e),this.config=n}return Object(u["a"])(e,[{key:"request",value:function(){var e=this;return new c.a(function(n){k(e.config).then(function(e){var t=e.data;n(t)}).catch(function(e){var t=e.response?e.response.data:void 0;n(t)})})}}]),e}();function v(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.config,t=n;return t.method="GET",t.data={params:t.params},w(t)}function y(e,n){var t="",r="";for(var c in n)t+=c+"="+n[c]+"&";return t=t.replace(/&$/,""),r=/\?$/.test(e)?e+t:e.replace(/\/?$/,"?")+t,r}function w(e){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];n&&(e.url=y(e.url,e.data),e.data={});var t=new g(e);return t.request()}},"365c":function(e,n,t){"use strict";var r=t("cebc"),c=(t("a481"),t("ac6a"),t("a08a")),a={};c.keys().forEach(function(e){if(e){var n=c(e);e=e.replace(/^\.\//,"").replace(/\.js$/,""),a[e]=Object(r["a"])({},n)}});var u=function(e){e.prototype.$api=a};n["a"]={install:u}},4360:function(e,n,t){"use strict";t("cadf"),t("551c"),t("f751"),t("097d");var r=t("2b0e"),c=t("2f62"),a=t("e04d"),u={state:{idNum:"",token:Object(a["a"])("token")},getters:{token:function(e){return e.token}},mutations:{SET_IDNUM:function(e,n){e.idNum=n},SET_TOKEN:function(e,n){e.token=n,Object(a["c"])("token",n)},SET_LOGIN_OUT:function(e,n){e.token="",Object(a["b"])("token")}},actions:{}},o=u;r["a"].use(c["a"]);var s=new c["a"].Store({state:{author:"wendycxl"},mutations:{MODIFY:function(e,n){e.author=n}},modules:{user:o}});n["a"]=s},"43b5":function(e,n,t){"use strict";t.r(n),t.d(n,"smsLogin",function(){return c}),t.d(n,"sendCaptchaSms",function(){return a}),t.d(n,"pwdLogin",function(){return u}),t.d(n,"isIdNumRegister",function(){return o}),t.d(n,"isMobileBind",function(){return s}),t.d(n,"getRegisterProtocal",function(){return i}),t.d(n,"register",function(){return f}),t.d(n,"registerValidImgcode",function(){return d}),t.d(n,"registerSendCaptchaSms",function(){return h}),t.d(n,"forgetPwdValidImgcode",function(){return b}),t.d(n,"forgetPwdSendCaptchaSms",function(){return l}),t.d(n,"isMobileRegister",function(){return p}),t.d(n,"mobileValidCommit",function(){return m}),t.d(n,"isNormalByStep1",function(){return j}),t.d(n,"identifyValidCommit",function(){return k}),t.d(n,"isNormalByStep2",function(){return g}),t.d(n,"resetPassword",function(){return v}),t.d(n,"setPassword",function(){return y}),t.d(n,"getCurrentUser",function(){return w}),t.d(n,"getNowUser",function(){return O});t("cadf"),t("551c"),t("f751"),t("097d");var r=t("0c6d"),c=function(e){return Object(r["a"])({config:{url:"/member/smsLogin",params:e}})},a=function(e){return Object(r["a"])({config:{url:"/member/sendCaptchaSms",params:e}})},u=function(e){return Object(r["a"])({config:{url:"/member/pwlogin",params:e}})},o=function(e){return Object(r["a"])({config:{url:"/member/register/checkIdnum",params:e}})},s=function(e){return Object(r["a"])({config:{url:"/member/register/checkMobile",params:e}})},i=function(e){return Object(r["a"])({config:{url:"/marketing/getRigisterArticle",params:e}})},f=function(e){return Object(r["a"])({config:{url:"/member/register/submit",params:e}})},d=function(e){return Object(r["a"])({config:{url:"/member/register/checkCaptcha",params:e}})},h=function(e){return Object(r["a"])({config:{url:"/member/register/sendCaptchaSms",params:e}})},b=function(e){return Object(r["a"])({config:{url:"/member/password/checkCaptcha",params:e}})},l=function(e){return Object(r["a"])({config:{url:"/member/password/sendCaptchaSms",params:e}})},p=function(e){return Object(r["a"])({config:{url:"/member/password/checkMobile",params:e}})},m=function(e){return Object(r["a"])({config:{url:"/member/password/forgetPassword_step1",params:e}})},j=function(e){return Object(r["a"])({config:{url:"/member/password/forgetPassword_step1_check",params:e}})},k=function(e){return Object(r["a"])({config:{url:"/member/password/forgetPassword_step2",params:e}})},g=function(e){return Object(r["a"])({config:{url:"/member/password/forgetPassword_step1_check",params:e}})},v=function(e){return Object(r["a"])({config:{url:"/member/password/forgetPassword_step3",params:e}})},y=function(e){return Object(r["a"])({config:{url:"/member/password/setPassword",params:e}})},w=function(e){return Object(r["a"])({config:{url:"UserData/GetCurrentUser",params:e}})},O=function(e){return Object(r["a"])({config:{url:"User/GetCurrentUser",params:e}})}},4678:function(e,n,t){var r={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-SG":"cdab","./en-SG.js":"cdab","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-nz":"6f50","./en-nz.js":"6f50","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-tw":"90ea","./zh-tw.js":"90ea"};function c(e){var n=a(e);return t(n)}function a(e){var n=r[e];if(!(n+1)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n}c.keys=function(){return Object.keys(r)},c.resolve=a,e.exports=c,c.id="4678"},"56d7":function(e,n,t){"use strict";t.r(n);t("cadf"),t("551c"),t("f751"),t("097d");var r=t("2b0e"),c=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("router-view")},a=[],u={},o=u,s=t("2877"),i=Object(s["a"])(o,c,a,!1,null,null,null),f=i.exports,d=t("a18c"),h=t("4360"),b=(t("c860"),t("365c")),l=t("c1df"),p=t.n(l);r["a"].use(b["a"]),r["a"].filter("datefmt",function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"YYYY-MM-DD HH:mm:ss";return p()(e).format(n)}),r["a"].config.productionTip=!1,d["a"].beforeEach(function(e,n,t){e.meta.title&&(document.title=e.meta.title),e.meta.requireAuth?(console.log("main",e,h["a"].state.user.token),h["a"].state.user.token?t():t({path:"/37duc/user/smsLogin"})):t()}),new r["a"]({router:d["a"],store:h["a"],render:function(e){return e(f)}}).$mount("#app")},"8bd1":function(e,n,t){"use strict";t.r(n),t.d(n,"getCurrentTenant",function(){return c});var r=t("0c6d"),c=function(e){return Object(r["a"])({config:{url:"Tenant/GetCurrentTenant",params:e}})}},a08a:function(e,n,t){var r={"./app.js":"8bd1","./user.js":"43b5"};function c(e){var n=a(e);return t(n)}function a(e){var n=r[e];if(!(n+1)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n}c.keys=function(){return Object.keys(r)},c.resolve=a,e.exports=c,c.id="a08a"},a18c:function(e,n,t){"use strict";var r=t("75fc"),c=(t("cadf"),t("551c"),t("f751"),t("097d"),t("2b0e")),a=t("8c4f"),u=function(e){return t.e("chunk-002fc618").then(function(){var n=[t("67ff")];e.apply(null,n)}.bind(this)).catch(t.oe)},o=function(e){return t.e("chunk-16eb2af0").then(function(){var n=[t("d427")];e.apply(null,n)}.bind(this)).catch(t.oe)},s=function(e){return t.e("chunk-0235d1d6").then(function(){var n=[t("1904")];e.apply(null,n)}.bind(this)).catch(t.oe)},i=function(e){return Promise.all([t.e("chunk-625a545d"),t.e("chunk-0af63b94")]).then(function(){var n=[t("1ed5")];e.apply(null,n)}.bind(this)).catch(t.oe)},f=function(e){return t.e("chunk-c9b9e2e4").then(function(){var n=[t("ad3d")];e.apply(null,n)}.bind(this)).catch(t.oe)},d=function(e){return t.e("chunk-264f5bae").then(function(){var n=[t("a4b6")];e.apply(null,n)}.bind(this)).catch(t.oe)},h=function(e){return Promise.all([t.e("chunk-625a545d"),t.e("chunk-e04e19a0")]).then(function(){var n=[t("d3be")];e.apply(null,n)}.bind(this)).catch(t.oe)},b=function(e){return t.e("chunk-ea144cca").then(function(){var n=[t("87dc")];e.apply(null,n)}.bind(this)).catch(t.oe)},l=function(e){return t.e("chunk-239c9351").then(function(){var n=[t("a0d1")];e.apply(null,n)}.bind(this)).catch(t.oe)},p=function(e){return t.e("chunk-17567000").then(function(){var n=[t("fe2a")];e.apply(null,n)}.bind(this)).catch(t.oe)},m=function(e){return t.e("chunk-2b480e6b").then(function(){var n=[t("72bb")];e.apply(null,n)}.bind(this)).catch(t.oe)},j=function(e){return t.e("chunk-718e543b").then(function(){var n=[t("e039")];e.apply(null,n)}.bind(this)).catch(t.oe)},k=function(e){return t.e("chunk-9c96913e").then(function(){var n=[t("e651")];e.apply(null,n)}.bind(this)).catch(t.oe)},g=[{path:"smsLogin",name:"SmsLogin",component:u,meta:{title:"短信登录"}},{path:"pwdLogin",name:"PwdLogin",component:o,meta:{title:"密码登录"}},{path:"register",name:"RegisterMain",redirect:"register/main",component:s,children:[{path:"main",component:i,meta:{title:"注册"}},{path:"succeed",component:f}]},{path:"forgetPassword",redirect:"forgetPassword/mobileValid",name:"ForgetPassword",component:d,children:[{path:"mobileValid",component:h,meta:{title:"忘记密码"}},{path:"identifyValid",name:"IdentifyValid",component:b,meta:{title:"忘记密码"}},{path:"resetPassword",component:l,meta:{title:"忘记密码"}},{path:"succeed",component:p,meta:{title:"忘记密码"}}]},{path:"setPassword",name:"SetPasswordMain",redirect:"setPassword/main",component:j,meta:{title:"设置密码",requireAuth:!0},children:[{path:"main",component:m,meta:{title:"设置密码",requireAuth:!0}},{path:"succeed",component:k,meta:{title:"设置密码",requireAuth:!0}}]}],v=function(e){return t.e("chunk-2d0d3e0a").then(function(){var n=[t("5f47")];e.apply(null,n)}.bind(this)).catch(t.oe)},y=[{path:"/productDetail",name:"productDetail",component:v,meta:{title:"产品详情"}}];c["a"].use(a["a"]);n["a"]=new a["a"]({mode:"history",routes:[{path:"/",redirect:"/37duc"},{path:"/37duc",name:"37duc",redirect:"/37duc/index",component:function(e){return t.e("chunk-f4c99ab2").then(function(){var n=[t("cd56")];e.apply(null,n)}.bind(this)).catch(t.oe)},children:[{path:"index",name:"Index",component:function(e){return t.e("chunk-3e6b91c9").then(function(){var n=[t("1e4b")];e.apply(null,n)}.bind(this)).catch(t.oe)},meta:{title:"首页"}},{path:"user",name:"User",redirect:"/37duc/user/smsLogin",component:function(e){return t.e("chunk-7b5e229e").then(function(){var n=[t("8579")];e.apply(null,n)}.bind(this)).catch(t.oe)},meta:{title:"短信登录"},children:Object(r["a"])(g)},{path:"personCenter",name:"PersonCenter",component:function(e){return t.e("chunk-2d0d3c19").then(function(){var n=[t("5db6")];e.apply(null,n)}.bind(this)).catch(t.oe)},meta:{title:"个人中心"},children:[{path:"",component:function(e){return t.e("chunk-7e5464ee").then(function(){var n=[t("2ae5")];e.apply(null,n)}.bind(this)).catch(t.oe)},children:[{path:"",component:function(e){return t.e("chunk-751d5325").then(function(){var n=[t("ec86")];e.apply(null,n)}.bind(this)).catch(t.oe)},meta:{title:"个人中心",requireAuth:!0}}]},{path:"detail"}]},{path:"*",name:"Not-found",meta:{keepAlive:!0,title:"notFound"},component:function(e){return t.e("chunk-24b7218a").then(function(){var n=[t("9703")];e.apply(null,n)}.bind(this)).catch(t.oe)}}].concat(Object(r["a"])(y))},{path:"*",name:"Not-found",meta:{keepAlive:!0,title:"notFound"},component:function(e){return t.e("chunk-24b7218a").then(function(){var n=[t("9703")];e.apply(null,n)}.bind(this)).catch(t.oe)}}]})},c860:function(e,n,t){},e04d:function(e,n,t){"use strict";t.d(n,"a",function(){return u}),t.d(n,"c",function(){return o}),t.d(n,"b",function(){return s});var r=t("b738"),c=t.n(r),a=new c.a;function u(e){return a.get(e)}function o(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:2592e3;return a.set(e,n,{exp:t})}function s(e){return a.delete(e)}}});
//# sourceMappingURL=app.f9b85dcc.js.map