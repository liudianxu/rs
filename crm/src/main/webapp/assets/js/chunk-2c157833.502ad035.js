(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2c157833"],{"28a5":function(e,r,t){"use strict";var s=t("aae3"),i=t("cb7c"),a=t("ebd6"),n=t("0390"),o=t("9def"),l=t("5f1b"),u=t("520a"),c=t("79e5"),d=Math.min,f=[].push,v="split",p="length",m="lastIndex",h=4294967295,g=!c(function(){RegExp(h,"y")});t("214f")("split",2,function(e,r,t,c){var b;return b="c"=="abbc"[v](/(b)*/)[1]||4!="test"[v](/(?:)/,-1)[p]||2!="ab"[v](/(?:ab)*/)[p]||4!="."[v](/(.?)(.?)/)[p]||"."[v](/()()/)[p]>1||""[v](/.?/)[p]?function(e,r){var i=String(this);if(void 0===e&&0===r)return[];if(!s(e))return t.call(i,e,r);var a,n,o,l=[],c=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),d=0,v=void 0===r?h:r>>>0,g=new RegExp(e.source,c+"g");while(a=u.call(g,i)){if(n=g[m],n>d&&(l.push(i.slice(d,a.index)),a[p]>1&&a.index<i[p]&&f.apply(l,a.slice(1)),o=a[0][p],d=n,l[p]>=v))break;g[m]===a.index&&g[m]++}return d===i[p]?!o&&g.test("")||l.push(""):l.push(i.slice(d)),l[p]>v?l.slice(0,v):l}:"0"[v](void 0,0)[p]?function(e,r){return void 0===e&&0===r?[]:t.call(this,e,r)}:t,[function(t,s){var i=e(this),a=void 0==t?void 0:t[r];return void 0!==a?a.call(t,i,s):b.call(String(i),t,s)},function(e,r){var s=c(b,e,this,r,b!==t);if(s.done)return s.value;var u=i(e),f=String(this),v=a(u,RegExp),p=u.unicode,m=(u.ignoreCase?"i":"")+(u.multiline?"m":"")+(u.unicode?"u":"")+(g?"y":"g"),y=new v(g?u:"^(?:"+u.source+")",m),x=void 0===r?h:r>>>0;if(0===x)return[];if(0===f.length)return null===l(y,f)?[f]:[];var C=0,k=0,w=[];while(k<f.length){y.lastIndex=g?k:0;var $,_=l(y,g?f:f.slice(k));if(null===_||($=d(o(y.lastIndex+(g?0:k)),f.length))===C)k=n(f,k,p);else{if(w.push(f.slice(C,k)),w.length===x)return w;for(var R=1;R<=_.length-1;R++)if(w.push(_[R]),w.length===x)return w;k=C=$}}return w.push(f.slice(C)),w}]})},"2fdb":function(e,r,t){"use strict";var s=t("5ca1"),i=t("d2c8"),a="includes";s(s.P+s.F*t("5147")(a),"String",{includes:function(e){return!!~i(this,e,a).indexOf(e,arguments.length>1?arguments[1]:void 0)}})},5147:function(e,r,t){var s=t("2b4c")("match");e.exports=function(e){var r=/./;try{"/./"[e](r)}catch(t){try{return r[s]=!1,!"/./"[e](r)}catch(i){}}return!0}},6762:function(e,r,t){"use strict";var s=t("5ca1"),i=t("c366")(!0);s(s.P,"Array",{includes:function(e){return i(this,e,arguments.length>1?arguments[1]:void 0)}}),t("9c6c")("includes")},7651:function(e,r,t){"use strict";var s=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{directives:[{name:"show",rawName:"v-show",value:e.isShow,expression:"isShow"}],staticClass:"AddTheInsured"},[t("div",{staticClass:"cover"}),t("div",{staticClass:"content"},[t("div",{staticClass:"ttl"},[e._v(e._s(e.title))]),t("div",{staticClass:"input-box"},[t("div",{staticClass:"input-item"},[t("span",{staticClass:"lb"},[e._v("姓名:")]),t("div",{staticClass:"input"},[t("run-input",{attrs:{error:e.form.name.error,placeholder:"请输入姓名"},on:{focus:function(r){return e.focus(e.form.name)}},model:{value:e.form.name.value,callback:function(r){e.$set(e.form.name,"value",r)},expression:"form.name.value"}})],1)]),t("div",{staticClass:"input-item"},[t("span",{staticClass:"lb"},[e._v("与投保人的关系:")]),t("div",{staticClass:"input"},[t("run-select",{attrs:{limit:5,options:e.form.insurer.options,error:e.form.insurer.error,placeholder:"请选择"},model:{value:e.form.insurer.value,callback:function(r){e.$set(e.form.insurer,"value",r)},expression:"form.insurer.value"}})],1)]),t("div",{staticClass:"input-item"},[t("span",{staticClass:"lb"},[e._v("身份证号:")]),t("div",{staticClass:"input"},[t("run-input",{attrs:{error:e.form.identity.error,placeholder:"请输入身份证号"},on:{focus:function(r){return e.focus(e.form.identity)},blur:e.blurIdentity},model:{value:e.form.identity.value,callback:function(r){e.$set(e.form.identity,"value",r)},expression:"form.identity.value"}})],1)]),t("div",{staticClass:"cut-line"},[e._v("以下为选填项:")]),t("div",{staticClass:"input-item"},[t("span",{staticClass:"lb"},[e._v("手机号:")]),t("div",{staticClass:"input"},[t("run-input",{attrs:{error:e.form.telphone.error,placeholder:"请输入手机号"},on:{focus:function(r){return e.focus(e.form.telphone)},blur:e.blurTelphone},model:{value:e.form.telphone.value,callback:function(r){e.$set(e.form.telphone,"value",r)},expression:"form.telphone.value"}})],1)]),t("div",{staticClass:"input-item"},[t("span",{staticClass:"lb"},[e._v("地址:")]),t("div",{staticClass:"input-group"},[t("div",{staticClass:"input-group-item address clearfix"},[t("div",{staticClass:"adrs fl"},[t("run-select",{attrs:{error:e.form.address.province.error,options:e.form.address.province.options,placeholder:"省"},model:{value:e.form.address.province.value,callback:function(r){e.$set(e.form.address.province,"value",r)},expression:"form.address.province.value"}})],1),t("div",{staticClass:"adrs fl"},[t("run-select",{attrs:{error:e.form.address.city.error,options:e.form.address.city.options,placeholder:"市"},model:{value:e.form.address.city.value,callback:function(r){e.$set(e.form.address.city,"value",r)},expression:"form.address.city.value"}})],1),t("div",{staticClass:"adrs fr"},[t("run-select",{attrs:{error:e.form.address.county.error,options:e.form.address.county.options,placeholder:"区"},model:{value:e.form.address.county.value,callback:function(r){e.$set(e.form.address.county,"value",r)},expression:"form.address.county.value"}})],1)]),t("div",{staticClass:"input-group-item"},[t("div",{staticClass:"input"},[t("run-input",{attrs:{error:e.form.address.road.error,placeholder:"街道地址"},on:{focus:function(r){return e.focus(e.form.address.road)}},model:{value:e.form.address.road.value,callback:function(r){e.$set(e.form.address.road,"value",r)},expression:"form.address.road.value"}})],1)])])]),t("div",{staticClass:"input-item"},[t("span",{staticClass:"lb"},[e._v("电子邮箱:")]),t("div",{staticClass:"input"},[t("run-input",{attrs:{error:e.form.email.error,placeholder:"请输入"},on:{focus:function(r){return e.focus(e.form.email)},blur:e.blurEmail},model:{value:e.form.email.value,callback:function(r){e.$set(e.form.email,"value",r)},expression:"form.email.value"}})],1)]),t("div",{staticClass:"btns"},[t("div",{staticClass:"btn cancel",on:{click:e.cancel}},[e._v("取消")]),t("div",{staticClass:"btn save",class:{disabled:!e.isPass},on:{click:e.submit}},[e._v("保存")])])])])])},i=[],a=(t("7f7f"),t("f524")),n={props:{isShow:{type:Boolean,default:!1},title:{type:String,default:"新增常用被保险人"}},data:function(){return{form:{name:{value:"",error:{err:!1,msg:""}},insurer:{value:"",options:["父亲","母亲","丈夫"],error:{err:!1,msg:""}},identity:{value:"",error:{err:!1,msg:""}},telphone:{value:"",error:{err:!1,msg:""}},address:{province:{value:"",options:[{val:"福建省",select:!1,disabled:!0},"浙江省"],error:{err:!1,msg:""}},city:{value:"",options:["厦门市"],error:{err:!1,msg:""}},county:{value:"",options:["思明区"],error:{err:!1,msg:""}},road:{value:"",error:{err:!1,msg:""}}},email:{value:"",error:{err:!1,msg:"error"}}}}},methods:{focus:function(e){e.error.err=!1,e.error.msg=""},blurIdentity:function(){this.form.identity.value&&!a["a"].idCardRegexs(this.form.identity.value).pass&&(this.form.identity.error.err=!0,this.form.identity.error.msg=a["a"].idCardRegexs(this.form.identity.value).tip)},blurTelphone:function(){this.form.telphone.value&&!a["a"].mobileRegexs(this.form.telphone.value).pass&&(this.form.telphone.error.err=!0,this.form.telphone.error.msg=a["a"].mobileRegexs(this.form.telphone.value).tip)},blurEmail:function(){var e=/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/i;this.form.email.value&&!e.test(this.form.email.value)&&(this.form.email.error.err=!0,this.form.email.error.msg="电子邮箱格式错误")},submit:function(){this.isPass()},cancel:function(){this.$emit("toggle",!1)},handlechange:function(e,r){console.log("nval",e),console.log("oval",r)}},computed:{checkIdentity:function(){return a["a"].idCardRegexs(this.form.identity.value).pass},checkTelphone:function(){return a["a"].mobileRegexs(this.form.telphone.value).pass},checkEmail:function(){return/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/.test(this.form.email.value)},isPass:function(){return this.form.identity.value&&this.form.telphone.value&&this.form.email.value&&this.checkIdentity&&this.checkTelphone&&this.checkEmail&&this.form.name.value&&this.form.insurer.value&&this.form.address.province.value&&this.form.address.city.value&&this.form.address.county.value&&this.form.address.road.value}}},o=n,l=(t("ab53"),t("2877")),u=Object(l["a"])(o,s,i,!1,null,"f4038020",null);r["a"]=u.exports},"7f7f":function(e,r,t){var s=t("86cc").f,i=Function.prototype,a=/^\s*function ([^ (]*)/,n="name";n in i||t("9e1e")&&s(i,n,{configurable:!0,get:function(){try{return(""+this).match(a)[1]}catch(e){return""}}})},aae3:function(e,r,t){var s=t("d3f4"),i=t("2d95"),a=t("2b4c")("match");e.exports=function(e){var r;return s(e)&&(void 0!==(r=e[a])?!!r:"RegExp"==i(e))}},ab53:function(e,r,t){"use strict";var s=t("bae4"),i=t.n(s);i.a},bae4:function(e,r,t){},d2c8:function(e,r,t){var s=t("aae3"),i=t("be13");e.exports=function(e,r,t){if(s(r))throw TypeError("String#"+t+" doesn't accept regex!");return String(i(e))}},f524:function(e,r,t){"use strict";t("6762"),t("2fdb"),t("28a5");var s=t("e814"),i=t.n(s),a=t("d225"),n=t("b0b4"),o=void 0,l=function(e){var r,t=e.split("-"),s=t[0],i=t[1],a=t[2],n=new Date,l=n.getFullYear(),u=n.getMonth()+1,c=n.getDate();if(l==s){var d=o.formatDate(new Date);return r=o.DateDiff(d,e)+1+"天",r}var f=l-s;if(f>0)if(u==i){var v=c-a;r=v<0?f-1+"岁":f+"岁"}else{var p=u-i;r=p<0?f-1+"岁":f+"岁"}else r=-1;return r};t.d(r,"a",function(){return c});var u=function(){function e(){Object(a["a"])(this,e)}return Object(n["a"])(e,[{key:"idCardRegexs",value:function(e){var r={11:"北京",12:"天津",13:"河北",14:"山西",15:"内蒙古",21:"辽宁",22:"吉林",23:"黑龙江 ",31:"上海",32:"江苏",33:"浙江",34:"安徽",35:"福建",36:"江西",37:"山东",41:"河南",42:"湖北 ",43:"湖南",44:"广东",45:"广西",46:"海南",50:"重庆",51:"四川",52:"贵州",53:"云南",54:"西藏 ",61:"陕西",62:"甘肃",63:"青海",64:"宁夏",65:"新疆",71:"台湾",81:"香港",82:"澳门",91:"国外 "},t="身份证号格式错误",s=["7","9","10","5","8","4","2","1","6","3","7","9","10","5","8","4","2"],a=["1","0","X","9","8","7","6","5","4","3","2"],n="",o=!0;function l(e){var t=/^[1-9]\d{5}$/.test(e);return!!t&&!!r[i()(e.substring(0,2))]}function u(e){var r=/^[1-9]\d{3}((0[1-9])|(1[0-2]))((0[1-9])|([1-2][0-9])|(3[0-1]))$/.test(e);if(!r)return!1;var t=i()(e.substring(0,4),10),s=i()(e.substring(4,6),10),a=i()(e.substring(6),10),n=new Date(t,s-1,a);return!(n>new Date)&&(n.getFullYear()==t&&n.getMonth()==s-1&&n.getDate()==a)}function c(e){for(var r=e.substring(0,17),t=0,n=0;n<17;n++)t+=i()(r.charAt(n),10)*i()(s[n]);var o=t%11;return a[o]}function d(e){if(15==e.length){var r=e.substring(0,6)+"19"+e.substring(6),t=c(r);return r+t}return 18==e.length?e:null}if(e&&/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(e))if(r[e.substr(0,2)]){if(15===e.length){var f=/^[1-9]\d{7}((0[1-9])|(1[0-2]))((0[1-9])|([1-2][0-9])|(3[0-1]))\d{3}$/.test(e);f||(o=!1);var v=e.substring(0,6);if(f=l(v),!f)return{pass:!1,tip:"身份证号格式错误"};var p="19"+e.substring(6,12);if(f=u(p),!f)return{pass:!1,tip:"身份证号格式错误"};e=d(e)}if(18===e.length){e=e.split("");for(var m=[7,9,10,5,8,4,2,1,6,3,7,9,10,5,8,4,2],h=[1,0,"X",9,8,7,6,5,4,3,2],g=0,b=0,y=0,x=0;x<17;x++)b=e[x],y=m[x],g+=b*y;var C=h[g%11];C!=e[17]&&(n=t,o=!1)}}else n=t,o=!1;else n=t,o=!1;return{pass:o,tip:n}}},{key:"mobileRegexs",value:function(e){var r="手机号格式错误",t=/^1[3|4|5|6|7|8|9]\d{9}$/;return e&&!t.test(e)?{pass:!1,tip:r}:{pass:!0,tip:""}}},{key:"pwdRegexs",value:function(e){var r="密码格式错误",t=/^[\da-zA-Z0-9~`!@#\/'|\[\]:,;$%^&*<>()}{?=\-+]{4,20}$/;return!t.test(e)&&e?{pass:!1,tip:r}:{pass:!0,tip:""}}},{key:"years16Regexs",value:function(e){var r,t=!1,s="仅支持16周岁及以上用户注册";15==e.length&&(e=e.substring(0,6)+"19"+e.substring(6));var a=e.slice(6,10)+"-"+e.slice(10,12)+"-"+e.slice(12,14);return r=l(a),"-1"==r?{pass:t,tip:s}:r.includes("天")?{pass:t,tip:s}:r.includes("岁")?i()(r)<16?{pass:t,tip:s}:{pass:!0,tip:""}:void 0}}]),e}(),c=new u}}]);
//# sourceMappingURL=chunk-2c157833.502ad035.js.map