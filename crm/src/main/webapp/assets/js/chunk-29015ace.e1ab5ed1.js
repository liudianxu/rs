(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-29015ace"],{"054a":function(e,r,t){},"197b":function(e,r,t){"use strict";t.d(r,"a",function(){return s}),t.d(r,"b",function(){return n}),t.d(r,"c",function(){return i});var s={notNull:"请先填写身份证号",registered:"该身份证号已注册"},n={notNull:"请先填写手机号",binded:"手机号已绑定其他身份证号",imgCodeError:"图形验证码错误",msgCodeError:"短信验证码错误",notRegister:"手机号未注册"},i={notSame:"两次输入的新密码不相同",notSame1:"两次输入的密码不相同",idNumOrPwdError:"身份证号或密码错误"}},"2fdb":function(e,r,t){"use strict";var s=t("5ca1"),n=t("d2c8"),i="includes";s(s.P+s.F*t("5147")(i),"String",{includes:function(e){return!!~n(this,e,i).indexOf(e,arguments.length>1?arguments[1]:void 0)}})},5147:function(e,r,t){var s=t("2b4c")("match");e.exports=function(e){var r=/./;try{"/./"[e](r)}catch(t){try{return r[s]=!1,!"/./"[e](r)}catch(n){}}return!0}},6762:function(e,r,t){"use strict";var s=t("5ca1"),n=t("c366")(!0);s(s.P,"Array",{includes:function(e){return n(this,e,arguments.length>1?arguments[1]:void 0)}}),t("9c6c")("includes")},"6e30":function(e,r){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWBAMAAAA2mnEIAAAAJFBMVEUAAADZ2dnb29vZ2dnY2NjY2NjY2Nja2trZ2dnd3d3Z2dnY2NgFUa8DAAAAC3RSTlMA7CuZ89jAUkMlPW0Axj8AAABuSURBVBjTY8AHOExdghsgTM7s3bt3b5sAZi/cDQJSYGFpMHsjSIJtNwQkANnduzcX7ha33r0DyLbevZ1JUKF692YgO3r3RgUlJundW4Fs7927hRgUd+/egspGqEHVizATzS6EGxBuQ3Uzwi84AQBiZ0kvu9RnaAAAAABJRU5ErkJggg=="},"72bb":function(e,r,t){"use strict";t.r(r);var s=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{staticClass:"set-password"},[t("form",{staticClass:"comForm",attrs:{action:""},on:{submit:function(r){return r.preventDefault(),e.submit(r)}}},[t("div",{staticClass:"input-wrapper"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.sendForm.pwd,expression:"sendForm.pwd"}],class:e.errorPwd?"active":"",attrs:{type:"password",placeholder:"密码"},domProps:{value:e.sendForm.pwd},on:{focus:function(r){return e.focus(r,"pwd")},blur:function(r){return e.blur(r,"pwd")},input:function(r){r.target.composing||e.$set(e.sendForm,"pwd",r.target.value)}}}),t("i",{directives:[{name:"show",rawName:"v-show",value:e.sendForm.pwd,expression:"sendForm.pwd"}],staticClass:"del",style:e.delImg,on:{mousedown:function(r){return r.stopPropagation(),e.del("pwd")}}}),t("span",{staticClass:"error"},[e._v(e._s(e.errorPwd))])]),t("div",{staticClass:"input-wrapper"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.sendForm.chkPwd,expression:"sendForm.chkPwd"}],attrs:{type:"password",placeholder:"确认密码"},domProps:{value:e.sendForm.chkPwd},on:{focus:function(r){return e.focus(r)},blur:function(r){return e.blur(r)},input:function(r){r.target.composing||e.$set(e.sendForm,"chkPwd",r.target.value)}}}),t("i",{directives:[{name:"show",rawName:"v-show",value:e.sendForm.chkPwd,expression:"sendForm.chkPwd"}],staticClass:"del",style:e.delImg,on:{mousedown:function(r){return r.stopPropagation(),e.del("chkPwd")}}})]),t("div",{staticClass:"submit-wrapper"},[t("p",{staticClass:"pwd-tips"},[e._v("密码仅可设置为4-20位的数字、英文、英文符号，不能包含空格")]),t("div",{directives:[{name:"show",rawName:"v-show",value:e.errorTips,expression:"errorTips"}],staticClass:"error-tips"},[e._v(e._s(e.errorTips))]),t("input",{staticClass:"submit",class:e.allValid?"active":"",attrs:{type:"submit",value:"设置密码",disabled:!e.allValid}})])])])},n=[],i=t("acce"),a=t("f524"),o=t("197b"),u={name:"TheSetPassword",mixins:[i["a"]],data:function(){return{sendForm:{pwd:"",chkPwd:""}}},methods:{submit:function(){var e=this;if(this.sendForm.pwd===this.sendForm.chkPwd){var r={password:this.sendForm.pwd,rePassword:this.sendForm.chkPwd};this.$api.user.setPassword(r).then(function(r){1===r.code&&e.$router.push({path:"/37duc/user/setPassword/succeed"})})}else this.errorTips=o["c"].notSame1},blur:function(e,r){switch(this._onBlur(e),r){case"pwd":this.errorPwd=a["a"].pwdRegexs(this.sendForm.pwd).tip;break}}},computed:{allValid:function(){return this.sendForm.pwd.length>=4&&this.sendForm.chkPwd.length>=4&&!this.errorPwd}}},d=u,c=(t("f079"),t("2877")),l=Object(c["a"])(d,s,n,!1,null,"77af7f1f",null);r["default"]=l.exports},acce:function(e,r,t){"use strict";t.d(r,"a",function(){return n});var s=t("bbd5"),n={data:function(){return{errorTips:"",errorIdNum:"",errorMobile:"",errorPwd:"",errorImgCode:"",errorMsgCode:"",isMessageCode:!1,imgCodeShow:!1,isRequesting:!1,uuid:"",delImg:{"background-image":"url("+t("6e30")+")"}}},mounted:function(){this.uuid=Object(s["b"])()},computed:{},methods:{focus:function(e,r){switch(this._onFocus(e),this.errorTips="",r){case"mobile":this.errorMobile="";break;case"idNum":this.errorIdNum="";break;case"pwd":this.errorPwd="";break;case"imgCode":this.errorImgCode="";break;case"msgCode":this.errorMsgCode=""}},del:function(e){this.sendForm[e]=""},_onFocus:function(e){for(var r=e.currentTarget.parentElement.children,t=0;t<r.length;t++)r[t]!==e.currentTarget&&r[t].classList.add("del")},_onBlur:function(e){for(var r=e.currentTarget.parentElement.children,t=0;t<r.length;t++)r[t]!==e.currentTarget&&r[t].classList.remove("del")}},watch:{}}},bbd5:function(e,r,t){"use strict";t.d(r,"a",function(){return s}),t.d(r,"b",function(){return n});t("28a5");function s(e,r){var t;return function(){for(var s=this,n=arguments.length,i=new Array(n),a=0;a<n;a++)i[a]=arguments[a];t&&clearTimeout(t),t=setTimeout(function(){e.apply(s,i)},r)}}function n(){var e,r="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(""),t=[];t[8]=t[13]=t[18]=t[23]="-",t[14]="4";for(var s=0;s<36;s++)t[s]||(e=0|16*Math.random(),t[s]=r[19===s?3&e|8:e]);return t.join("")}},d2c8:function(e,r,t){var s=t("aae3"),n=t("be13");e.exports=function(e,r,t){if(s(r))throw TypeError("String#"+t+" doesn't accept regex!");return String(n(e))}},f079:function(e,r,t){"use strict";var s=t("054a"),n=t.n(s);n.a},f524:function(e,r,t){"use strict";t("6762"),t("2fdb"),t("28a5");var s=t("e814"),n=t.n(s),i=t("d225"),a=t("b0b4"),o=void 0,u=function(e){var r,t=e.split("-"),s=t[0],n=t[1],i=t[2],a=new Date,u=a.getFullYear(),d=a.getMonth()+1,c=a.getDate();if(u==s){var l=o.formatDate(new Date);return r=o.DateDiff(l,e)+1+"天",r}var p=u-s;if(p>0)if(d==n){var f=c-i;r=f<0?p-1+"岁":p+"岁"}else{var m=d-n;r=m<0?p-1+"岁":p+"岁"}else r=-1;return r};t.d(r,"a",function(){return c});var d=function(){function e(){Object(i["a"])(this,e)}return Object(a["a"])(e,[{key:"idCardRegexs",value:function(e){var r={11:"北京",12:"天津",13:"河北",14:"山西",15:"内蒙古",21:"辽宁",22:"吉林",23:"黑龙江 ",31:"上海",32:"江苏",33:"浙江",34:"安徽",35:"福建",36:"江西",37:"山东",41:"河南",42:"湖北 ",43:"湖南",44:"广东",45:"广西",46:"海南",50:"重庆",51:"四川",52:"贵州",53:"云南",54:"西藏 ",61:"陕西",62:"甘肃",63:"青海",64:"宁夏",65:"新疆",71:"台湾",81:"香港",82:"澳门",91:"国外 "},t="身份证号格式错误",s=["7","9","10","5","8","4","2","1","6","3","7","9","10","5","8","4","2"],i=["1","0","X","9","8","7","6","5","4","3","2"],a="",o=!0;function u(e){var t=/^[1-9]\d{5}$/.test(e);return!!t&&!!r[n()(e.substring(0,2))]}function d(e){var r=/^[1-9]\d{3}((0[1-9])|(1[0-2]))((0[1-9])|([1-2][0-9])|(3[0-1]))$/.test(e);if(!r)return!1;var t=n()(e.substring(0,4),10),s=n()(e.substring(4,6),10),i=n()(e.substring(6),10),a=new Date(t,s-1,i);return!(a>new Date)&&(a.getFullYear()==t&&a.getMonth()==s-1&&a.getDate()==i)}function c(e){for(var r=e.substring(0,17),t=0,a=0;a<17;a++)t+=n()(r.charAt(a),10)*n()(s[a]);var o=t%11;return i[o]}function l(e){if(15==e.length){var r=e.substring(0,6)+"19"+e.substring(6),t=c(r);return r+t}return 18==e.length?e:null}if(e&&/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(e))if(r[e.substr(0,2)]){if(15===e.length){var p=/^[1-9]\d{7}((0[1-9])|(1[0-2]))((0[1-9])|([1-2][0-9])|(3[0-1]))\d{3}$/.test(e);p||(o=!1);var f=e.substring(0,6);if(p=u(f),!p)return{pass:!1,tip:"身份证号格式错误"};var m="19"+e.substring(6,12);if(p=d(m),!p)return{pass:!1,tip:"身份证号格式错误"};e=l(e)}if(18===e.length){e=e.split("");for(var h=[7,9,10,5,8,4,2,1,6,3,7,9,10,5,8,4,2],v=[1,0,"X",9,8,7,6,5,4,3,2],g=0,w=0,b=0,A=0;A<17;A++)w=e[A],b=h[A],g+=w*b;var F=v[g%11];F!=e[17]&&(a=t,o=!1)}}else a=t,o=!1;else a=t,o=!1;return{pass:o,tip:a}}},{key:"mobileRegexs",value:function(e){var r="手机号格式错误",t=/^1[3|4|5|6|7|8|9]\d{9}$/;return e&&!t.test(e)?{pass:!1,tip:r}:{pass:!0,tip:""}}},{key:"pwdRegexs",value:function(e){var r="密码格式错误",t=/^[\da-zA-Z0-9~`!@#\/'|\[\]:,;$%^&*<>()}{?=\-+]{4,20}$/;return!t.test(e)&&e?{pass:!1,tip:r}:{pass:!0,tip:""}}},{key:"years16Regexs",value:function(e){var r,t=!1,s="仅支持16周岁及以上用户注册";15==e.length&&(e=e.substring(0,6)+"19"+e.substring(6));var i=e.slice(6,10)+"-"+e.slice(10,12)+"-"+e.slice(12,14);return r=u(i),"-1"==r?{pass:t,tip:s}:r.includes("天")?{pass:t,tip:s}:r.includes("岁")?n()(r)<16?{pass:t,tip:s}:{pass:!0,tip:""}:void 0}}]),e}(),c=new d}}]);
//# sourceMappingURL=chunk-29015ace.e1ab5ed1.js.map