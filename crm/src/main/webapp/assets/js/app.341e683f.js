(function(e){function t(t){for(var a,s,o=t[0],i=t[1],u=t[2],f=0,d=[];f<o.length;f++)s=o[f],c[s]&&d.push(c[s][0]),c[s]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a]);l&&l(t);while(d.length)d.shift()();return r.push.apply(r,u||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],a=!0,s=1;s<n.length;s++){var o=n[s];0!==c[o]&&(a=!1)}a&&(r.splice(t--,1),e=i(i.s=n[0]))}return e}var a={},s={app:0},c={app:0},r=[];function o(e){return i.p+"assets/js/"+({}[e]||e)+"."+{"chunk-0c6daa77":"658656fa","chunk-3f0736bc":"0e1d67ee","chunk-85110e66":"67c35373","chunk-10fa5d8e":"f22085fe","chunk-2d0d3e0a":"4256486d","chunk-2d0e5e97":"3813b812","chunk-50d832cf":"80487dca","chunk-7837e3c5":"a472c340","chunk-bc0f02dc":"543398ac"}[e]+".js"}function i(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={"chunk-3f0736bc":1,"chunk-85110e66":1,"chunk-50d832cf":1,"chunk-7837e3c5":1,"chunk-bc0f02dc":1};s[e]?t.push(s[e]):0!==s[e]&&n[e]&&t.push(s[e]=new Promise(function(t,n){for(var a="assets/css/"+({}[e]||e)+"."+{"chunk-0c6daa77":"31d6cfe0","chunk-3f0736bc":"768754cd","chunk-85110e66":"f4ccfe7d","chunk-10fa5d8e":"31d6cfe0","chunk-2d0d3e0a":"31d6cfe0","chunk-2d0e5e97":"31d6cfe0","chunk-50d832cf":"5108c00d","chunk-7837e3c5":"9405f322","chunk-bc0f02dc":"fbbe34d0"}[e]+".css",c=i.p+a,r=document.getElementsByTagName("link"),o=0;o<r.length;o++){var u=r[o],f=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(f===a||f===c))return t()}var d=document.getElementsByTagName("style");for(o=0;o<d.length;o++){u=d[o],f=u.getAttribute("data-href");if(f===a||f===c)return t()}var l=document.createElement("link");l.rel="stylesheet",l.type="text/css",l.onload=t,l.onerror=function(t){var a=t&&t.target&&t.target.src||c,r=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");r.request=a,delete s[e],l.parentNode.removeChild(l),n(r)},l.href=c;var b=document.getElementsByTagName("head")[0];b.appendChild(l)}).then(function(){s[e]=0}));var a=c[e];if(0!==a)if(a)t.push(a[2]);else{var r=new Promise(function(t,n){a=c[e]=[t,n]});t.push(a[2]=r);var u,f=document.createElement("script");f.charset="utf-8",f.timeout=120,i.nc&&f.setAttribute("nonce",i.nc),f.src=o(e),u=function(t){f.onerror=f.onload=null,clearTimeout(d);var n=c[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),s=t&&t.target&&t.target.src,r=new Error("Loading chunk "+e+" failed.\n("+a+": "+s+")");r.type=a,r.request=s,n[1](r)}c[e]=void 0}};var d=setTimeout(function(){u({type:"timeout",target:f})},12e4);f.onerror=f.onload=u,document.head.appendChild(f)}return Promise.all(t)},i.m=e,i.c=a,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(n,a,function(t){return e[t]}.bind(null,a));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],f=u.push.bind(u);u.push=t,u=u.slice();for(var d=0;d<u.length;d++)t(u[d]);var l=f;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"2ebb":function(e,t,n){},4678:function(e,t,n){var a={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-SG":"cdab","./en-SG.js":"cdab","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-nz":"6f50","./en-nz.js":"6f50","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-tw":"90ea","./zh-tw.js":"90ea"};function s(e){var t=c(e);return n(t)}function c(e){var t=a[e];if(!(t+1)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return t}s.keys=function(){return Object.keys(a)},s.resolve=c,e.exports=s,s.id="4678"},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var a=n("2b0e"),s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("header-nav"),n("router-view")],1)},c=[],r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"header-nav"},[n("div",{staticClass:"header-nav-inner clearfix"},[n("div",{staticClass:"nav-item"},[n("router-link",{staticClass:"nav",attrs:{tag:"div",to:"/home"}},[n("span",{staticClass:"nav-link"},[e._v("健康保险")])])],1),n("div",{staticClass:"nav-item"},[n("router-link",{staticClass:"nav",attrs:{tag:"div",to:"/login"}},[n("span",{staticClass:"nav-link"},[e._v("企业保险")])])],1),n("div",{staticClass:"nav-item"},[n("router-link",{staticClass:"nav",attrs:{tag:"div",to:"/a"}},[n("span",{staticClass:"nav-link"},[e._v("理赔服务")])])],1),e._m(0),n("div",{staticClass:"nav-item"},[n("router-link",{staticClass:"nav",attrs:{tag:"div",to:"/b"}},[n("span",{staticClass:"nav-link"},[e._v("资讯中心")])])],1),n("div",{staticClass:"nav-item"},[n("router-link",{staticClass:"nav",attrs:{tag:"div",to:"/c"}},[n("span",{staticClass:"nav-link"},[e._v("信息披露")])])],1),n("div",{staticClass:"nav-item"},[n("router-link",{staticClass:"nav",attrs:{tag:"div",to:"/personCenter"}},[n("span",{staticClass:"nav-link"},[e._v("个人中心")])])],1)])])},o=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"nav-item logo-box"},[a("img",{staticClass:"logo",attrs:{src:n("9d64"),alt:""}})])}],i={name:"BaseHeaderNav"},u=i,f=(n("fff2"),n("2877")),d=Object(f["a"])(u,r,o,!1,null,"bef2250e",null),l=d.exports,b={components:{HeaderNav:l}},h=b,j=(n("5c0b"),Object(f["a"])(h,s,c,!1,null,null,null)),p=j.exports,m=n("75fc"),v=n("8c4f"),g=function(e){return Promise.all([n.e("chunk-0c6daa77"),n.e("chunk-85110e66")]).then(function(){var t=[n("8a54")];e.apply(null,t)}.bind(this)).catch(n.oe)},k=function(e){return Promise.all([n.e("chunk-0c6daa77"),n.e("chunk-3f0736bc")]).then(function(){var t=[n("bdf5")];e.apply(null,t)}.bind(this)).catch(n.oe)},y=function(e){return n.e("chunk-bc0f02dc").then(function(){var t=[n("8646")];e.apply(null,t)}.bind(this)).catch(n.oe)},w=[{path:"smsLogin",name:"SmsLogin",component:g,meta:{title:"短信登录"}},{path:"pwdLogin",name:"PwdLogin",component:k,meta:{title:"密码登录"}},{path:"register",name:"Register",component:y,meta:{title:"注册登录"}}],C=function(e){return n.e("chunk-2d0d3e0a").then(function(){var t=[n("5f47")];e.apply(null,t)}.bind(this)).catch(n.oe)},_=[{path:"/productDetail",name:"productDetail",component:C,meta:{title:"产品详情"}}];a["a"].use(v["a"]);var z=new v["a"]({mode:"history",routes:[{path:"/",redirect:"/home"},{path:"/home",name:"home",component:function(e){return n.e("chunk-50d832cf").then(function(){var t=[n("bb51")];e.apply(null,t)}.bind(this)).catch(n.oe)},meta:{title:"首页"}},{path:"/login",name:"login",component:function(e){return n.e("chunk-10fa5d8e").then(function(){var t=[n("b0b0")];e.apply(null,t)}.bind(this)).catch(n.oe)},meta:{title:"登录"}},{path:"/personCenter",name:"personCenter",redirect:"personCenter/smsLogin",component:function(e){return n.e("chunk-7837e3c5").then(function(){var t=[n("5db6")];e.apply(null,t)}.bind(this)).catch(n.oe)},meta:{title:"个人中心"},children:Object(m["a"])(w)},{path:"*",name:"not-found",meta:{keepAlive:!0,title:"notFound"},component:function(e){return n.e("chunk-2d0e5e97").then(function(){var t=[n("9703")];e.apply(null,t)}.bind(this)).catch(n.oe)}}].concat(Object(m["a"])(_))}),O=n("2f62"),E=n("795b"),x=n.n(E),T=n("c1fb"),N={accountLogin:"/product/list?productCategoryId=1601"},S=function(e){return T["a"].get(N.accountLogin,e)},P=n("b738"),L=n.n(P),M=new L.a;function D(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:2592e3;return M.set(e,t,{exp:n})}var q={state:{idNum:"",token:""},mutations:{SET_IDNUM:function(e,t){e.idNum=t},SET_TOKEN:function(e,t){e.token=t}},actions:{Logins:function(e,t){var n=e.commit;return new x.a(function(e,t){S().then(function(t){console.log(321,t),n("SET_IDNUM",t.data.idNum),n("SET_TOKEN",t.data.token),D("idNum","350681199103046549"),D("token","fafafafff"),e(t)})})}}},A=q;a["a"].use(O["a"]);var U=new O["a"].Store({state:{author:"wendycxl"},mutations:{MODIFY:function(e,t){e.author=t}},modules:{login:A}}),Y=U,B=(n("c860"),n("c1df")),F=n.n(B);a["a"].filter("datefmt",function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"YYYY-MM-DD HH:mm:ss";return F()(e).format(t)}),a["a"].config.productionTip=!1,z.beforeEach(function(e,t,n){e.meta.title&&(document.title=e.meta.title),e.meta.requireAuth?n({path:"/login",query:{redirect:e.fullPath}}):n()}),new a["a"]({router:z,store:Y,render:function(e){return e(p)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var a=n("5e27"),s=n.n(a);s.a},"5e27":function(e,t,n){},"9d64":function(e,t,n){e.exports=n.p+"assets/img/logo.02add4ce.png"},c1fb:function(e,t,n){"use strict";var a=n("795b"),s=n.n(a),c=n("bc3a"),r=n.n(c),o="http://localhost:9999/37degree",i=r.a.create({baseURL:o,headers:{"Content-Type":"application/json;charset=UTF-8"},timeout:15e3});t["a"]={get:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new s.a(function(n,a){i.get(e,t,{}).then(function(e){n(e.data)}).catch(function(e){e.response&&n(e.response.data)})})},post:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new s.a(function(n,a){i.post(e,t,{}).then(function(e){n(e.data)}).catch(function(e){e.response&&n(e.response.data)})})}}},c860:function(e,t,n){},fff2:function(e,t,n){"use strict";var a=n("2ebb"),s=n.n(a);s.a}});
//# sourceMappingURL=app.341e683f.js.map