(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0072f5b7"],{"0773":function(t,e,r){"use strict";var s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"alert-box",style:t.alertStyle},[r("p",{staticClass:"title"},[t._v(t._s(t.title))]),r("div",{staticClass:"alert-btn-wrapper clearfix"},[r("p",{staticClass:"alert-btn alert-btn-left",on:{click:t.handleBtnEventLeft}},[t._v(t._s(t.btnTextLeft))]),r("p",{staticClass:"alert-btn alert-btn-right",on:{click:t.handleBtnEventRight}},[t._v(t._s(t.btnTextRight))])]),r("i",{staticClass:"close",on:{click:t.close}})])},n=[],i=(r("46b5"),{name:"BaseAlertBox",props:{title:{type:String,default:""},btnTextLeft:{type:String,default:""},btnTextRight:{type:String,default:""},content:{type:String,default:""},width:{type:Number},height:{type:Number},absTop:{type:Number,default:0},absLeft:{type:Number,default:0}},methods:{close:function(){this.$emit("hanleClose")},handleBtnEventLeft:function(){this.$emit("handleBtnLeftEvent")},handleBtnEventRight:function(){this.$emit("handleBtnRightEvent")}},computed:{alertStyle:function(){return{width:this.width?this.width+"px":"100%",height:this.height?this.height+"px":"100%",top:this.absTop+"px",left:this.absLeft+"px"}}}}),a=i,o=(r("4bb9"),r("fc05")),l=Object(o["a"])(a,s,n,!1,null,"97ce6846",null);e["a"]=l.exports},2765:function(t,e,r){"use strict";var s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"no-result"},[r("img",{attrs:{src:t.src,alt:""}}),r("p",{staticClass:"title"},[t._v(t._s(t.title))]),r("div",{staticClass:"btn",on:{click:t.btnClick}},[t._v(t._s(t.btnText))])])},n=[],i={props:{title:{type:String,default:""},src:{type:String,default:""},btnText:{type:String,default:""}},data:function(){return{}},methods:{btnClick:function(){this.$emit("handleClik")}}},a=i,o=(r("468a"),r("fc05")),l=Object(o["a"])(a,s,n,!1,null,"eecd2d2a",null);e["a"]=l.exports},"278f":function(t,e,r){"use strict";r.d(e,"a",function(){return o}),r.d(e,"c",function(){return l}),r.d(e,"b",function(){return u}),r.d(e,"d",function(){return c});var s=r("0649"),n=r.n(s),i=r("6bf2"),a=r.n(i),o={methods:{dateFormat:function(t){return a()(t).format("YYYY-MM-DD")}}},l={methods:{getSexByName:function(t){return 1===t?"男":"女"}}},u={methods:{getRelation:function(t){switch(n()(t)){case 0:return"父亲";case 1:return"母亲";case 2:return"儿子";case 3:return"女儿";case 4:return"妻子";case 5:return"丈夫";case 6:return"本人";default:return"其他"}}}},c={methods:{orderStatus:function(t){switch(t){case 0:return"待支付";case 1:return"已支付";case 2:return"已承保";case 3:return"已出单";case 4:return"保障中";case 5:return"已失效";case 6:return"订单失败";case 7:return"已取消";case 8:return"支付失败"}}}}},4603:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAAAXNSR0IArs4c6QAAAYhJREFUSA3tlr9LAzEUx1/ulB4IpXCk1E4O4j/gH6Cj+Cd0chDFoSi4uPgn6CYIuvk3uDh08e9wEtpeDnvoUgvXxG+EQkgiPdtzqDTL5f3I+7z3LrkL0XIsegeYXYAQojEmulFK7TDGKrbdkiUx1lrn/NHSU1+ItiQ6aNbr26ZtxRT0HLA7RbQVBMEFoO+23ZRhl5UwfDZ1eg7YKWJcB0RHts2Ru0ky7KdpyzEUVGhYT4gxYhz6liAJZ0TIPHO0BRSTyvAqjhuc3/uW+IA+v6m6IjAdpBRgUVgpwN/A5gZiY5zp3eh7Z1mW1bpC7GmIOWZuKc7rJjbXlQ+mAaM83yelHkyYnjvn0Hb4SeacvwwGg404jl99PpIxXYxT0MxAVIZukhfmS2CiczKYGP7quQSW3tn/31LfsRhhy9fm7SWTsoaf86cdxwEC1sEX5LKXJKtBGH7YC4rISsoYMc5xnejY/s4VI03TZq7ULRx3sWjaFcOO9y0j6SEmT2tRdFKtVt+8TkvlwnbgC3kFjsNmEeV+AAAAAElFTkSuQmCC"},"468a":function(t,e,r){"use strict";var s=r("7f86"),n=r.n(s);n.a},"4bb9":function(t,e,r){"use strict";var s=r("5016"),n=r.n(s);n.a},5016:function(t,e,r){},"5d04":function(t,e,r){"use strict";var s=r("92aa"),n=r("fcd6"),i="includes";s(s.P+s.F*r("f1f4")(i),"String",{includes:function(t){return!!~n(this,t,i).indexOf(t,arguments.length>1?arguments[1]:void 0)}})},"624f":function(t,e,r){"use strict";var s=r("92aa"),n=r("0583")(!0);s(s.P,"Array",{includes:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}}),r("f344")("includes")},"71d6":function(t,e,r){"use strict";var s=r("be37"),n=r.n(s);n.a},"72cb":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAICAYAAADN5B7xAAAAAXNSR0IArs4c6QAAAIBJREFUGBljuHH7dvT///+ZGAiA60+eCF+7edOL6d+/f65Axhx8mh4/fiz0/+vX3YyMjGIMIIVADYuv3rgxD5smkGKg/Lnrt26lwR2BSxNWxTBd6JpwKWaEaQDRIE1AqxeCmECsA3TzDE01tVkgOZwApOnq7dtJ127d8sapiBQJAEqAbPVtoN3AAAAAAElFTkSuQmCC"},7433:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAICAYAAADN5B7xAAAAAXNSR0IArs4c6QAAAKBJREFUGBljYEAD////Z7x+61bQtVu37NCkwFxGZEGw4tu3pzL8/y8JFFdlZGRs1VRTW46shgnGgSn+/++fKFBRKAM7uytQrBpoWyRMDZwGKQY6YdrVGzdWA9ksMIlrDx5IXrt58wqKJlyKcWlivHrz5mSgmyW01NUjgW7+A1OITINsYvj5czfQ8EYmxv//r+FTDNKopaDwHOQnZEOIZgMAZrVj8gGoEIQAAAAASUVORK5CYII="},7651:function(t,e,r){"use strict";var s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{directives:[{name:"show",rawName:"v-show",value:t.isShow,expression:"isShow"}],staticClass:"AddTheInsured"},[r("div",{staticClass:"cover"}),r("div",{staticClass:"content"},[r("div",{staticClass:"ttl"},[t._v(t._s(t.title))]),r("div",{staticClass:"input-box"},[r("div",{staticClass:"input-item"},[r("span",{staticClass:"lb"},[t._v("姓名:")]),r("div",{staticClass:"input"},[r("run-input",{attrs:{error:t.form.name.error,placeholder:"请输入姓名"},on:{focus:function(e){return t.focus(t.form.name)}},model:{value:t.form.name.value,callback:function(e){t.$set(t.form.name,"value",e)},expression:"form.name.value"}})],1)]),r("div",{staticClass:"input-item"},[r("span",{staticClass:"lb"},[t._v("与投保人的关系:")]),r("div",{staticClass:"input"},[r("run-select",{attrs:{limit:7,options:t.form.insurer.options,error:t.form.insurer.error,placeholder:"请选择"},on:{handlechange:t.handlechange},model:{value:t.form.insurer.value,callback:function(e){t.$set(t.form.insurer,"value",e)},expression:"form.insurer.value"}})],1)]),r("div",{staticClass:"input-item"},[r("span",{staticClass:"lb"},[t._v("身份证号:")]),r("div",{staticClass:"input"},[r("run-input",{attrs:{error:t.form.identity.error,placeholder:"请输入身份证号"},on:{focus:function(e){return t.focus(t.form.identity)},blur:t.blurIdentity},model:{value:t.form.identity.value,callback:function(e){t.$set(t.form.identity,"value",e)},expression:"form.identity.value"}})],1)]),r("div",{staticClass:"cut-line"},[t._v("以下为选填项:")]),r("div",{staticClass:"input-item"},[r("span",{staticClass:"lb"},[t._v("手机号:")]),r("div",{staticClass:"input"},[r("run-input",{attrs:{error:t.form.telphone.error,placeholder:"请输入手机号"},on:{focus:function(e){return t.focus(t.form.telphone)},blur:t.blurTelphone},model:{value:t.form.telphone.value,callback:function(e){t.$set(t.form.telphone,"value",e)},expression:"form.telphone.value"}})],1)]),r("div",{staticClass:"input-item"},[r("span",{staticClass:"lb"},[t._v("地址:")]),r("div",{staticClass:"input-group"},[r("div",{staticClass:"input-group-item address clearfix"},[r("div",{staticClass:"adrs fl"},[r("run-select",{attrs:{error:t.form.address.province.error,options:t.form.address.province.options,placeholder:"省"},model:{value:t.form.address.province.value,callback:function(e){t.$set(t.form.address.province,"value",e)},expression:"form.address.province.value"}})],1),r("div",{staticClass:"adrs fl"},[r("run-select",{attrs:{error:t.form.address.city.error,options:t.form.address.city.options,placeholder:"市"},model:{value:t.form.address.city.value,callback:function(e){t.$set(t.form.address.city,"value",e)},expression:"form.address.city.value"}})],1),r("div",{staticClass:"adrs fr"},[r("run-select",{attrs:{error:t.form.address.county.error,options:t.form.address.county.options,placeholder:"区"},model:{value:t.form.address.county.value,callback:function(e){t.$set(t.form.address.county,"value",e)},expression:"form.address.county.value"}})],1)]),r("div",{staticClass:"input-group-item"},[r("div",{staticClass:"input"},[r("run-input",{attrs:{error:t.form.address.road.error,placeholder:"街道地址"},on:{focus:function(e){return t.focus(t.form.address.road)}},model:{value:t.form.address.road.value,callback:function(e){t.$set(t.form.address.road,"value",e)},expression:"form.address.road.value"}})],1)])])]),r("div",{staticClass:"input-item"},[r("span",{staticClass:"lb"},[t._v("电子邮箱:")]),r("div",{staticClass:"input"},[r("run-input",{attrs:{error:t.form.email.error,placeholder:"请输入"},on:{focus:function(e){return t.focus(t.form.email)},blur:t.blurEmail},model:{value:t.form.email.value,callback:function(e){t.$set(t.form.email,"value",e)},expression:"form.email.value"}})],1)]),r("div",{staticClass:"btns"},[r("div",{staticClass:"btn cancel",on:{click:t.cancel}},[t._v("取消")]),r("div",{staticClass:"btn save",class:{disabled:!t.isPass},on:{click:t.submit}},[t._v("保存")])])])])])},n=[],i=(r("dc12"),r("0649")),a=r.n(i),o=(r("dcfb"),r("f524")),l=r("278f"),u={mixins:[l["b"]],props:{isShow:{type:Boolean,default:!1},title:{type:String,default:"新增常用被保险人"}},data:function(){return{form:{name:{value:"",error:{err:!1,msg:""}},insurer:{value:"",options:[],error:{err:!1,msg:""}},identity:{value:"",error:{err:!1,msg:""}},telphone:{value:"",error:{err:!1,msg:""}},address:{province:{value:"",options:[{label:"福建省",value:"福建省",select:!1,disabled:!0},"浙江省"],error:{err:!1,msg:""}},city:{value:"",options:["厦门市"],error:{err:!1,msg:""}},county:{value:"",options:["思明区"],error:{err:!1,msg:""}},road:{value:"",error:{err:!1,msg:""}}},email:{value:"",error:{err:!1,msg:"error"}}}}},mounted:function(){this.getInsuredType()},methods:{getInsuredType:function(){var t=this;this.$api.personCenter.insuredType().then(function(e){1===e.code&&e.data.forEach(function(e,r){var s={};s.label=t.getRelation(e[0]),s.value=e[0],"存在"===e[1]&&(s.disabled=!0),t.form.insurer.options.push(s)})})},focus:function(t){t.error.err=!1,t.error.msg=""},blurIdentity:function(){this.form.identity.value&&!o["a"].idCardRegexs(this.form.identity.value).pass&&(this.form.identity.error.err=!0,this.form.identity.error.msg=o["a"].idCardRegexs(this.form.identity.value).tip)},blurTelphone:function(){this.form.telphone.value&&!o["a"].mobileRegexs(this.form.telphone.value).pass&&(this.form.telphone.error.err=!0,this.form.telphone.error.msg=o["a"].mobileRegexs(this.form.telphone.value).tip)},blurEmail:function(){var t=/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/i;this.form.email.value&&!t.test(this.form.email.value)&&(this.form.email.error.err=!0,this.form.email.error.msg="电子邮箱格式错误")},submit:function(){if(this.isPass){var t=this.form,e={id_num:t.identity.value,type:a()(t.insurer.value),name:t.name.value};this.$api.personCenter.addInsured(e).then(function(t){console.log(9999)})}},cancel:function(){this.$emit("cancel",!1)},handlechange:function(t,e){console.log("nval",t),console.log("oval",e)},handleSelect:function(t){this.form.insurer.value=t}},computed:{checkIdentity:function(){return o["a"].idCardRegexs(this.form.identity.value).pass},checkTelphone:function(){return o["a"].mobileRegexs(this.form.telphone.value).pass},checkEmail:function(){return/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/.test(this.form.email.value)},isPass:function(){return this.form.identity.value&&this.checkIdentity&&this.form.name.value&&this.form.insurer.value}}},c=u,d=(r("cd5c"),r("fc05")),f=Object(d["a"])(c,s,n,!1,null,"f365c5b4",null);e["a"]=f.exports},7869:function(t,e,r){},"7f86":function(t,e,r){},a44d:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAAAXNSR0IArs4c6QAAAYpJREFUSA3tlr9Lw0AUx+8OgwkUDLg4Ooj/gH+Ai4O4p611EZQ6iQUXF/8EnRQEdZKGcEsmF4cu/h1O/gGii5HAnd8bAse7YJKaRclB6b2fn5fre5cy1q2/fgKcPoCUciVX6ppxvgnjIrXbstZaCSFGu/3+o603+zhJjjXn+3uDwYZtW7AFswfsFqB1pvWZZuyd2m2Zc66Wer1nW2f2UylPtFKXgvMxtTlAOGxxIQ5QdUyd68gGxgBD0UfIcU9jBFVA9lH5W4m+UmXDRsPhXVlAGbDMr1JXB2aStAKsC2sF2AT2ayBaf1I0CP3N0jQNYym3DcRecx8p5nUNY3NhupHCDCDL8x0U82DDzH5uYBRFL8L3V8tgJjEuBYHLw8lfNofGv3JhdPCA7LXSkTg4FRB762IH7I608Qk4TYN2/1JKhY0zkQC8fEMMY0bUzJlDDOwMt8f5NEk8wD9oQB0Zcct4AZ9i8GfU3wGKIDjUWXYDxyt8fvyLQZMVMor+xK3wFHjepNB13//nBL4BWKyFs0zSTZwAAAAASUVORK5CYII="},be37:function(t,e,r){},cd5c:function(t,e,r){"use strict";var s=r("7869"),n=r.n(s);n.a},dc12:function(t,e,r){var s=r("7847").f,n=Function.prototype,i=/^\s*function ([^ (]*)/,a="name";a in n||r("3016")&&s(n,a,{configurable:!0,get:function(){try{return(""+this).match(i)[1]}catch(t){return""}}})},dc35:function(t,e,r){"use strict";r.r(e);var s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"my-insured"},[this.insuredList.length?r("div",[r("div",{staticClass:"add-btn-wrapper"},[r("p",{staticClass:"add-btn",on:{click:t.goAdd}},[t._v("添加常用被保险人")])]),r("ul",{staticClass:"insured-con"},t._l(t.insuredList,function(e,s){return r("li",{key:s},[r("div",{staticClass:"insured-info clearfix"},[r("span",{staticClass:"name"},[t._v(t._s(e.name))]),r("span",{staticClass:"relation"},[t._v(t._s(t.getRelation(e.type)))]),r("span",{staticClass:"idNum"},[t._v("身份证号："+t._s(e.id_num))]),r("span",{staticClass:"more",style:t.moreArr[s]?t.downImg:t.upImg,on:{click:function(e){return t.detailShow(s)}}},[t._v("更多")]),r("span",{staticClass:"edit",style:e.is_checked?t.noEditImg:t.editImg}),r("span",{staticClass:"delete",on:{click:function(r){return t.del(e)}}})]),t.moreArr[s]?r("div",{staticClass:"more-info"},[e.mobile?r("span",{staticClass:"mobile"},[t._v("手机号："+t._s(e.mobile))]):r("span",{staticClass:"mobile "},[t._v("手机号："),r("i",[t._v("尚未填写")])]),e.addr||e.addr_detail?r("span",{staticClass:"addr"},[t._v("地址："+t._s(e.addr)+t._s(e.addr_detail))]):r("span",{staticClass:" addr "},[t._v("地址："),r("i",[t._v("尚未填写")])]),e.email?r("span",{staticClass:"email"},[t._v("地址邮箱："+t._s(e.email))]):r("span",{staticClass:"email "},[t._v("地址邮箱："),r("i",[t._v("尚未填写")])])]):t._e()])}),0)]):t._e(),t.alertShow?r("alert-box",{attrs:{width:420,height:144,btnTextLeft:"暂不删除",btnTextRight:"确认删除",absTop:232,absLeft:148,title:"确认删除此常用被保险人？"},on:{hanleClose:t.closeAlert,handleBtnLeftEvent:t.closeAlert,handleBtnRightEvent:t.handleDelete}}):t._e(),r("insured-pop",{attrs:{isShow:t.insuredShow},on:{cancel:function(e){t.insuredShow=!1}}}),this.insuredList.length?t._e():r("no-result",{attrs:{title:"暂无常用被保险人",src:t.src,btnText:"新增被保险人"},on:{handleClik:t.goAdd}})],1)},n=[],i=(r("dcfb"),r("0773")),a=r("7651"),o=r("2765"),l=r("278f"),u={name:"myInsured",mixins:[l["b"]],data:function(){return{alertShow:!1,delId:"",page:1,limit:10,currentMore:null,moreShow:!1,insuredShow:!1,insuredList:{},src:r("e887"),editImg:{"background-image":"url("+r("a44d")+")"},noEditImg:{"background-image":"url("+r("4603")+")"},upImg:{"background-image":"url("+r("72cb")+")"},downImg:{"background-image":"url("+r("7433")+")"},moreArr:[]}},mounted:function(){this.getInsurdList()},methods:{goAdd:function(){this.insuredShow=!0},getInsurdList:function(){var t=this,e={page:this.page,limit:this.limit};this.$api.personCenter.getInsured(e).then(function(e){1===e.code&&(t.moreArr.push(!1),t.insuredList=e.data.data,t.insuredList=t.insuredList.filter(function(t){return 6!==t.type}))})},detailShow:function(t){var e=this;this.moreArr.forEach(function(r,s){t!==s&&e.moreArr.splice(s,1,!1)}),this.moreArr.splice(t,1,!this.moreArr[t])},del:function(t){this.alertShow=!0,this.delId=t.id},handleDelete:function(){var t=this;this.alertShow=!1;var e={id:this.delId};this.$api.personCenter.deleteInsured(e).then(function(e){1===e.code&&t.getInsurdList()})},closeAlert:function(){this.alertShow=!1}},components:{alertBox:i["a"],noResult:o["a"],insuredPop:a["a"]}},c=u,d=(r("71d6"),r("fc05")),f=Object(d["a"])(c,s,n,!1,null,"3d82ae1a",null);e["default"]=f.exports},e887:function(t,e,r){t.exports=r.p+"assets/img/no_insured.e4ff2803.png"},f1f4:function(t,e,r){var s=r("0c53")("match");t.exports=function(t){var e=/./;try{"/./"[t](e)}catch(r){try{return e[s]=!1,!"/./"[t](e)}catch(n){}}return!0}},f524:function(t,e,r){"use strict";r("624f"),r("5d04"),r("c7d9");var s=r("0649"),n=r.n(s),i=r("a585"),a=r("26cb"),o=void 0,l=function(t){var e,r=t.split("-"),s=r[0],n=r[1],i=r[2],a=new Date,l=a.getFullYear(),u=a.getMonth()+1,c=a.getDate();if(l==s){var d=o.formatDate(new Date);return e=o.DateDiff(d,t)+1+"天",e}var f=l-s;if(f>0)if(u==n){var p=c-i;e=p<0?f-1+"岁":f+"岁"}else{var m=u-n;e=m<0?f-1+"岁":f+"岁"}else e=-1;return e};r.d(e,"a",function(){return c});var u=function(){function t(){Object(i["a"])(this,t)}return Object(a["a"])(t,[{key:"idCardRegexs",value:function(t){var e={11:"北京",12:"天津",13:"河北",14:"山西",15:"内蒙古",21:"辽宁",22:"吉林",23:"黑龙江 ",31:"上海",32:"江苏",33:"浙江",34:"安徽",35:"福建",36:"江西",37:"山东",41:"河南",42:"湖北 ",43:"湖南",44:"广东",45:"广西",46:"海南",50:"重庆",51:"四川",52:"贵州",53:"云南",54:"西藏 ",61:"陕西",62:"甘肃",63:"青海",64:"宁夏",65:"新疆",71:"台湾",81:"香港",82:"澳门",91:"国外 "},r="身份证号格式错误",s=["7","9","10","5","8","4","2","1","6","3","7","9","10","5","8","4","2"],i=["1","0","X","9","8","7","6","5","4","3","2"],a="",o=!0;function l(t){var r=/^[1-9]\d{5}$/.test(t);return!!r&&!!e[n()(t.substring(0,2))]}function u(t){var e=/^[1-9]\d{3}((0[1-9])|(1[0-2]))((0[1-9])|([1-2][0-9])|(3[0-1]))$/.test(t);if(!e)return!1;var r=n()(t.substring(0,4),10),s=n()(t.substring(4,6),10),i=n()(t.substring(6),10),a=new Date(r,s-1,i);return!(a>new Date)&&(a.getFullYear()==r&&a.getMonth()==s-1&&a.getDate()==i)}function c(t){for(var e=t.substring(0,17),r=0,a=0;a<17;a++)r+=n()(e.charAt(a),10)*n()(s[a]);var o=r%11;return i[o]}function d(t){if(15==t.length){var e=t.substring(0,6)+"19"+t.substring(6),r=c(e);return e+r}return 18==t.length?t:null}if(t&&/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(t))if(e[t.substr(0,2)]){if(15===t.length){var f=/^[1-9]\d{7}((0[1-9])|(1[0-2]))((0[1-9])|([1-2][0-9])|(3[0-1]))\d{3}$/.test(t);f||(o=!1);var p=t.substring(0,6);if(f=l(p),!f)return{pass:!1,tip:"身份证号格式错误"};var m="19"+t.substring(6,12);if(f=u(m),!f)return{pass:!1,tip:"身份证号格式错误"};t=d(t)}if(18===t.length){t=t.split("");for(var v=[7,9,10,5,8,4,2,1,6,3,7,9,10,5,8,4,2],h=[1,0,"X",9,8,7,6,5,4,3,2],A=0,g=0,b=0,C=0;C<17;C++)g=t[C],b=v[C],A+=g*b;var y=h[A%11];y!=t[17]&&(a=r,o=!1)}}else a=r,o=!1;else a=r,o=!1;return{pass:o,tip:a}}},{key:"mobileRegexs",value:function(t){var e="手机号格式错误",r=/^1[3|4|5|6|7|8|9]\d{9}$/;return t&&!r.test(t)?{pass:!1,tip:e}:{pass:!0,tip:""}}},{key:"pwdRegexs",value:function(t){var e="密码格式错误",r=/^[\da-zA-Z0-9~`!@#\/'|\[\]:,;$%^&*<>()}{?=\-+]{4,20}$/;return!r.test(t)&&t?{pass:!1,tip:e}:{pass:!0,tip:""}}},{key:"years16Regexs",value:function(t){var e,r=!1,s="仅支持16周岁及以上用户注册";15==t.length&&(t=t.substring(0,6)+"19"+t.substring(6));var i=t.slice(6,10)+"-"+t.slice(10,12)+"-"+t.slice(12,14);return e=l(i),"-1"==e?{pass:r,tip:s}:e.includes("天")?{pass:r,tip:s}:e.includes("岁")?n()(e)<16?{pass:r,tip:s}:{pass:!0,tip:""}:void 0}}]),t}(),c=new u},fcd6:function(t,e,r){var s=r("5f0e"),n=r("8f72");t.exports=function(t,e,r){if(s(e))throw TypeError("String#"+r+" doesn't accept regex!");return String(n(t))}}}]);
//# sourceMappingURL=chunk-0072f5b7.604299a7.js.map