(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-58154558"],{"04aa":function(e,r,t){"use strict";var n=t("276a"),s=t.n(n);s.a},"197b":function(e,r,t){"use strict";t.d(r,"a",function(){return n}),t.d(r,"b",function(){return s}),t.d(r,"c",function(){return i});var n={notNull:"请先填写身份证号",registered:"该身份证号已注册"},s={notNull:"请先填写手机号",binded:"手机号已绑定其他身份证号",imgCodeError:"图形验证码错误",msgCodeError:"短信验证码错误",notRegister:"手机号未注册"},i={notSame:"两次输入的新密码不相同",notSame1:"两次输入的密码不相同",idNumOrPwdError:"身份证号或密码错误"}},"276a":function(e,r,t){},"6e30":function(e,r){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAYAAAAehFoBAAAAAXNSR0IArs4c6QAAA41JREFUWAntmUtrU0EUx2eSFMVNKxQXhUpdFHETCCUUWl246EJ046bfQlwI/RCCi+K3cONGcVF32kAJJZBNkS4sFSJIIe1GlCaO5z+5A5N53xtvIZKBOq9z5vw8PXcep4zNyswD0+0BPil+t9u9+evy8rEQYkswdpsLsSQ4X8K61O5Ru0dGTjnne9fn5t7X6/X+JDYLAx8cHj5lQjwj0AcEUEuEGBD4J8b56/W1tbeJOmNiuYHb7fbmH8Zekjc3xlbK2SHDrQpjO81mcz+PajIwebJKXn1FXn2ex0BUlvNd8vYL8vwwKksCScCdTmfh93D4hmC3UhbNLUPxfa1a3W40Gucx3ShwBtsi2HuxxSaa5/yIoDdi0BRG/oIwyDxbLiwQyCGwBZt+IsaCwFnMlhMGLioKOWnTNZeNeUMCuwF9BZ8DuqVNkYvv+3YPr4exdZVGFFk4ZNsJjEMhZZ9dmJ9n+EktqfKwDQbXuu4Tik4wl7A+BuN3V1fl0I+zM/b15ESfttp3VlbYrcVFOf7l+JidX1xYMmMDIwbrNLQ8jLtBdtyO6Yc6AAGQr+iwPhlzHAxgMcct4J+DwRMScnte04aH4FlVfNAmLHSi3h0tWstYlAlZW8B8OEzexhAGIWgXbCx0dDoXi+VJug4u0yau6wXbCkDFp6qhpLdT4tw0JFmMQQtY3mcNoVg3BA3dIrDQAwtqvVghoS7fulBK2wwPpVMUFvouFguYwiE9HhRVWbWDxQKms/p7EfvmB6bW8O0eaj5Uu1gsYPo19EKLuOZMWIQBflQpCu1isT86ejDmiQkXrPoIAax2ClXrc+o/5KvJw6fmnO3hSuWjKeTrx2DNDzGvp/HSNm1bwDdqtXckNDAFzT7uEsprmPPtBi7oxAvTAGkB064FjLyBfIqbkoG+D1apmNBqPFSDwZXDsGJYLkJ5A9reHoYWxH0Aty6UlLsBoPv9frI8chdS2PiH4tpdDtrtfdxL3bPljhJUa73Z3HRZsUJCCdHEjmpfdR2y7QWWbypKclw1LIXCru89BxZvSGCSTkZkez5QI/nKCb3ChbYxygI9CmWBvB6GUSgiI0ONo8IQqYqjRMp2CBZLBYEhgEwMMjIEbW3imP8nZZSqimZ9YCsYEjpMFh7TkQzUwacm3apDoy3zBtOQ0DbB8RTH6xYPRroOLjv/ZCDEN1Gt7uGe4jpuzTVn/ZkH/mcP/AV+m5i3jqqAMgAAAABJRU5ErkJggg=="},"74de":function(e,r,t){var n=t("d635"),s=t("2b11");e.exports=function(e,r,t){if(n(r))throw TypeError("String#"+t+" doesn't accept regex!");return String(s(e))}},"93fe":function(e,r,t){"use strict";var n=t("2d2c"),s=t("74de"),i="includes";n(n.P+n.F*t("dd8b")(i),"String",{includes:function(e){return!!~s(this,e,i).indexOf(e,arguments.length>1?arguments[1]:void 0)}})},a28e:function(e,r,t){"use strict";t.d(r,"c",function(){return o}),t.d(r,"b",function(){return a}),t.d(r,"a",function(){return u});t("ea65");var n=t("6bf2"),s=t.n(n),i=void 0,o=function(e){var r,t=e.split("-"),n=t[0],s=t[1],o=t[2],a=new Date,u=a.getFullYear(),d=a.getMonth()+1,c=a.getDate();if(u==n){var l=i.formatDate(new Date);return r=i.DateDiff(l,e)+1+"天",r}var p=u-n;if(p>0)if(d==s){var f=c-o;r=f<0?p-1+"岁":p+"岁"}else{var h=d-s;r=h<0?p-1+"岁":p+"岁"}else r=-1;return r},a=function(e,r){var t=s()(r).diff(s()(e),"year"),n=s()(r).diff(s()(e),"days");return t<0?"生效日期小于出生日期!":t>0?t+"岁":t<1&&t>=0?n+1+"天":void 0},u=function(e){var r;if(15===e.length){var t=i.idNum.substring(0,6)+"19"+i.idNum.substring(6);r=t.slice(6,10)+"-"+t.slice(10,12)+"-"+t.slice(12,14)}else r=e.slice(6,10)+"-"+e.slice(10,12)+"-"+e.slice(12,14);return r}},aca8:function(e,r,t){"use strict";t.r(r);var n=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{staticClass:"set-password"},[t("p",{staticClass:"pwd-tips"},[e._v("密码仅可设置为4-20位的数字、英文、英文符号，不能包含空格")]),t("form",{staticClass:"comForm",attrs:{action:""},on:{submit:function(r){return r.preventDefault(),e.submit(r)}}},[t("div",{staticClass:"input-wrapper"},["checkbox"===(e.oldShow?"text":"password")?t("input",{directives:[{name:"model",rawName:"v-model",value:e.sendForm.pwd,expression:"sendForm.pwd"}],class:e.errorPwd?"active":"",attrs:{placeholder:"密码",type:"checkbox"},domProps:{checked:Array.isArray(e.sendForm.pwd)?e._i(e.sendForm.pwd,null)>-1:e.sendForm.pwd},on:{focus:function(r){return e.focus(r,"pwd")},blur:function(r){return e.blur(r,"pwd")},change:function(r){var t=e.sendForm.pwd,n=r.target,s=!!n.checked;if(Array.isArray(t)){var i=null,o=e._i(t,i);n.checked?o<0&&e.$set(e.sendForm,"pwd",t.concat([i])):o>-1&&e.$set(e.sendForm,"pwd",t.slice(0,o).concat(t.slice(o+1)))}else e.$set(e.sendForm,"pwd",s)}}}):"radio"===(e.oldShow?"text":"password")?t("input",{directives:[{name:"model",rawName:"v-model",value:e.sendForm.pwd,expression:"sendForm.pwd"}],class:e.errorPwd?"active":"",attrs:{placeholder:"密码",type:"radio"},domProps:{checked:e._q(e.sendForm.pwd,null)},on:{focus:function(r){return e.focus(r,"pwd")},blur:function(r){return e.blur(r,"pwd")},change:function(r){return e.$set(e.sendForm,"pwd",null)}}}):t("input",{directives:[{name:"model",rawName:"v-model",value:e.sendForm.pwd,expression:"sendForm.pwd"}],class:e.errorPwd?"active":"",attrs:{placeholder:"密码",type:e.oldShow?"text":"password"},domProps:{value:e.sendForm.pwd},on:{focus:function(r){return e.focus(r,"pwd")},blur:function(r){return e.blur(r,"pwd")},input:function(r){r.target.composing||e.$set(e.sendForm,"pwd",r.target.value)}}}),t("i",{directives:[{name:"show",rawName:"v-show",value:e.sendForm.pwd,expression:"sendForm.pwd"}],staticClass:"del",style:e.delImg,on:{mousedown:function(r){return r.stopPropagation(),e.del("pwd")}}}),t("span",{staticClass:"error"},[e._v(e._s(e.errorPwd))]),t("span",{staticClass:"see-icon",class:e.oldShow?"see":"nosee",on:{click:function(r){e.oldShow=!e.oldShow}}})]),t("div",{staticClass:"input-wrapper"},["checkbox"===(e.sureShow?"text":"password")?t("input",{directives:[{name:"model",rawName:"v-model",value:e.sendForm.chkPwd,expression:"sendForm.chkPwd"}],attrs:{placeholder:"确认密码",type:"checkbox"},domProps:{checked:Array.isArray(e.sendForm.chkPwd)?e._i(e.sendForm.chkPwd,null)>-1:e.sendForm.chkPwd},on:{focus:function(r){return e.focus(r)},blur:function(r){return e.blur(r)},change:function(r){var t=e.sendForm.chkPwd,n=r.target,s=!!n.checked;if(Array.isArray(t)){var i=null,o=e._i(t,i);n.checked?o<0&&e.$set(e.sendForm,"chkPwd",t.concat([i])):o>-1&&e.$set(e.sendForm,"chkPwd",t.slice(0,o).concat(t.slice(o+1)))}else e.$set(e.sendForm,"chkPwd",s)}}}):"radio"===(e.sureShow?"text":"password")?t("input",{directives:[{name:"model",rawName:"v-model",value:e.sendForm.chkPwd,expression:"sendForm.chkPwd"}],attrs:{placeholder:"确认密码",type:"radio"},domProps:{checked:e._q(e.sendForm.chkPwd,null)},on:{focus:function(r){return e.focus(r)},blur:function(r){return e.blur(r)},change:function(r){return e.$set(e.sendForm,"chkPwd",null)}}}):t("input",{directives:[{name:"model",rawName:"v-model",value:e.sendForm.chkPwd,expression:"sendForm.chkPwd"}],attrs:{placeholder:"确认密码",type:e.sureShow?"text":"password"},domProps:{value:e.sendForm.chkPwd},on:{focus:function(r){return e.focus(r)},blur:function(r){return e.blur(r)},input:function(r){r.target.composing||e.$set(e.sendForm,"chkPwd",r.target.value)}}}),t("i",{directives:[{name:"show",rawName:"v-show",value:e.sendForm.chkPwd,expression:"sendForm.chkPwd"}],staticClass:"del",style:e.delImg,on:{mousedown:function(r){return r.stopPropagation(),e.del("chkPwd")}}}),t("span",{staticClass:"see-icon",class:e.sureShow?"see":"nosee",on:{click:function(r){e.sureShow=!e.sureShow}}})]),t("div",{staticClass:"submit-wrapper"},[t("div",{directives:[{name:"show",rawName:"v-show",value:e.errorTips,expression:"errorTips"}],staticClass:"error-tips"},[e._v(e._s(e.errorTips))]),t("input",{staticClass:"submit",class:e.allValid?"active":"",attrs:{type:"submit",value:"设置密码",disabled:!e.allValid}})])])])},s=[],i=t("acce"),o=t("f524"),a=t("197b"),u={name:"TheSetPassword",mixins:[i["a"]],data:function(){return{sureShow:!1,oldShow:!1,sendForm:{pwd:"",chkPwd:""}}},methods:{submit:function(){var e=this;if(this.sendForm.pwd===this.sendForm.chkPwd){var r={password:this.sendForm.pwd,rePassword:this.sendForm.chkPwd};this.$api.user.setPassword(r).then(function(r){1===r.code&&e.$router.push({path:"/user/setPasswordSucceed"})})}else this.errorTips=a["c"].notSame1},blur:function(e,r){switch(this._onBlur(e),r){case"pwd":this.errorPwd=o["a"].pwdRegexs(this.sendForm.pwd).tip;break}}},computed:{allValid:function(){return this.sendForm.pwd.length>=4&&this.sendForm.chkPwd.length>=4&&!this.errorPwd}}},d=u,c=(t("04aa"),t("17cc")),l=Object(c["a"])(d,n,s,!1,null,"1e1732a5",null);r["default"]=l.exports},acce:function(e,r,t){"use strict";t.d(r,"a",function(){return s});var n=t("bbd5"),s={data:function(){return{errorTips:"",errorIdNum:"",errorMobile:"",errorPwd:"",errorImgCode:"",errorMsgCode:"",isMessageCode:!1,imgCodeShow:!1,isRequesting:!1,uuid:"",delImg:{"background-image":"url("+t("6e30")+")"}}},mounted:function(){this.uuid=Object(n["a"])()},computed:{},methods:{focus:function(e,r){switch(this._onFocus(e),this.errorTips="",r){case"mobile":this.errorMobile="";break;case"idNum":this.errorIdNum="";break;case"pwd":this.errorPwd="";break;case"imgCode":this.errorImgCode="";break;case"msgCode":this.errorMsgCode=""}},del:function(e){this.sendForm[e]=""},_onFocus:function(e){for(var r=e.currentTarget.parentElement.children,t=0;t<r.length;t++)r[t]!==e.currentTarget&&r[t].classList.add("del")},_onBlur:function(e){for(var r=e.currentTarget.parentElement.children,t=0;t<r.length;t++)r[t]!==e.currentTarget&&r[t].classList.remove("del")}},watch:{}}},bbd5:function(e,r,t){"use strict";t.d(r,"a",function(){return n});t("ea65");function n(){var e,r="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(""),t=[];t[8]=t[13]=t[18]=t[23]="-",t[14]="4";for(var n=0;n<36;n++)t[n]||(e=0|16*Math.random(),t[n]=r[19===n?3&e|8:e]);return t.join("")}},d635:function(e,r,t){var n=t("b429"),s=t("9b6d"),i=t("f3ae")("match");e.exports=function(e){var r;return n(e)&&(void 0!==(r=e[i])?!!r:"RegExp"==s(e))}},dd8b:function(e,r,t){var n=t("f3ae")("match");e.exports=function(e){var r=/./;try{"/./"[e](r)}catch(t){try{return r[n]=!1,!"/./"[e](r)}catch(s){}}return!0}},e0c1:function(e,r,t){"use strict";var n=t("2d2c"),s=t("0d0d")(!0);n(n.P,"Array",{includes:function(e){return s(this,e,arguments.length>1?arguments[1]:void 0)}}),t("68fb")("includes")},ea65:function(e,r,t){"use strict";var n=t("d635"),s=t("4d65"),i=t("d4f6"),o=t("1ff3"),a=t("33f2"),u=t("b21e"),d=t("31d0"),c=t("201d"),l=Math.min,p=[].push,f="split",h="length",w="lastIndex",m=4294967295,v=!c(function(){RegExp(m,"y")});t("c5aa")("split",2,function(e,r,t,c){var g;return g="c"=="abbc"[f](/(b)*/)[1]||4!="test"[f](/(?:)/,-1)[h]||2!="ab"[f](/(?:ab)*/)[h]||4!="."[f](/(.?)(.?)/)[h]||"."[f](/()()/)[h]>1||""[f](/.?/)[h]?function(e,r){var s=String(this);if(void 0===e&&0===r)return[];if(!n(e))return t.call(s,e,r);var i,o,a,u=[],c=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),l=0,f=void 0===r?m:r>>>0,v=new RegExp(e.source,c+"g");while(i=d.call(v,s)){if(o=v[w],o>l&&(u.push(s.slice(l,i.index)),i[h]>1&&i.index<s[h]&&p.apply(u,i.slice(1)),a=i[0][h],l=o,u[h]>=f))break;v[w]===i.index&&v[w]++}return l===s[h]?!a&&v.test("")||u.push(""):u.push(s.slice(l)),u[h]>f?u.slice(0,f):u}:"0"[f](void 0,0)[h]?function(e,r){return void 0===e&&0===r?[]:t.call(this,e,r)}:t,[function(t,n){var s=e(this),i=void 0==t?void 0:t[r];return void 0!==i?i.call(t,s,n):g.call(String(s),t,n)},function(e,r){var n=c(g,e,this,r,g!==t);if(n.done)return n.value;var d=s(e),p=String(this),f=i(d,RegExp),h=d.unicode,w=(d.ignoreCase?"i":"")+(d.multiline?"m":"")+(d.unicode?"u":"")+(v?"y":"g"),b=new f(v?d:"^(?:"+d.source+")",w),F=void 0===r?m:r>>>0;if(0===F)return[];if(0===p.length)return null===u(b,p)?[p]:[];var k=0,x=0,P=[];while(x<p.length){b.lastIndex=v?x:0;var A,C=u(b,v?p:p.slice(x));if(null===C||(A=l(a(b.lastIndex+(v?0:x)),p.length))===k)x=o(p,x,h);else{if(P.push(p.slice(k,x)),P.length===F)return P;for(var S=1;S<=C.length-1;S++)if(P.push(C[S]),P.length===F)return P;x=k=A}}return P.push(p.slice(k)),P}]})},f524:function(e,r,t){"use strict";t.d(r,"a",function(){return d});t("e0c1"),t("93fe"),t("ea65");var n=t("96f8"),s=t.n(n),i=t("eb12"),o=t("ba94"),a=t("a28e"),u=function(){function e(){Object(i["a"])(this,e)}return Object(o["a"])(e,[{key:"idCardRegexs",value:function(e){var r={11:"北京",12:"天津",13:"河北",14:"山西",15:"内蒙古",21:"辽宁",22:"吉林",23:"黑龙江 ",31:"上海",32:"江苏",33:"浙江",34:"安徽",35:"福建",36:"江西",37:"山东",41:"河南",42:"湖北 ",43:"湖南",44:"广东",45:"广西",46:"海南",50:"重庆",51:"四川",52:"贵州",53:"云南",54:"西藏 ",61:"陕西",62:"甘肃",63:"青海",64:"宁夏",65:"新疆",71:"台湾",81:"香港",82:"澳门",91:"国外 "},t="身份证号格式错误",n=["7","9","10","5","8","4","2","1","6","3","7","9","10","5","8","4","2"],i=["1","0","X","9","8","7","6","5","4","3","2"],o="",a=!0;function u(e){var t=/^[1-9]\d{5}$/.test(e);return!!t&&!!r[s()(e.substring(0,2))]}function d(e){var r=/^[1-9]\d{3}((0[1-9])|(1[0-2]))((0[1-9])|([1-2][0-9])|(3[0-1]))$/.test(e);if(!r)return!1;var t=s()(e.substring(0,4),10),n=s()(e.substring(4,6),10),i=s()(e.substring(6),10),o=new Date(t,n-1,i);return!(o>new Date)&&(o.getFullYear()==t&&o.getMonth()==n-1&&o.getDate()==i)}function c(e){for(var r=e.substring(0,17),t=0,o=0;o<17;o++)t+=s()(r.charAt(o),10)*s()(n[o]);var a=t%11;return i[a]}function l(e){if(15==e.length){var r=e.substring(0,6)+"19"+e.substring(6),t=c(r);return r+t}return 18==e.length?e:null}if(e&&/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(e))if(r[e.substr(0,2)]){if(15===e.length){var p=/^[1-9]\d{7}((0[1-9])|(1[0-2]))((0[1-9])|([1-2][0-9])|(3[0-1]))\d{3}$/.test(e);p||(a=!1);var f=e.substring(0,6);if(p=u(f),!p)return{pass:!1,tip:"身份证号格式错误"};var h="19"+e.substring(6,12);if(p=d(h),!p)return{pass:!1,tip:"身份证号格式错误"};e=l(e)}if(18===e.length){e=e.split("");for(var w=[7,9,10,5,8,4,2,1,6,3,7,9,10,5,8,4,2],m=[1,0,"X",9,8,7,6,5,4,3,2],v=0,g=0,b=0,F=0;F<17;F++)g=e[F],b=w[F],v+=g*b;var k=m[v%11];k!=e[17]&&(o=t,a=!1)}}else o=t,a=!1;else o=t,a=!1;return{pass:a,tip:o}}},{key:"mobileRegexs",value:function(e){var r="手机号格式错误",t=/^1[3|4|5|6|7|8|9]\d{9}$/;return e&&!t.test(e)?{pass:!1,tip:r}:{pass:!0,tip:""}}},{key:"pwdRegexs",value:function(e){var r="密码格式错误",t=/^[\da-zA-Z0-9~`!@#\/'|\[\]:,;$%^&*<>()}{?=\-+]{4,20}$/;return!t.test(e)&&e?{pass:!1,tip:r}:{pass:!0,tip:""}}},{key:"years16Regexs",value:function(e){var r,t=!1,n="仅支持16周岁及以上用户注册";15==e.length&&(e=e.substring(0,6)+"19"+e.substring(6));var i=e.slice(6,10)+"-"+e.slice(10,12)+"-"+e.slice(12,14);return r=Object(a["c"])(i),"-1"==r?{pass:t,tip:n}:r.includes("天")?{pass:t,tip:n}:r.includes("岁")?s()(r)<16?{pass:t,tip:n}:{pass:!0,tip:""}:void 0}}]),e}(),d=new u}}]);
//# sourceMappingURL=chunk-58154558.f570d439.js.map