(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-749ddacb"],{"3a23":function(t,e,i){var s=i("694f").f,n=Function.prototype,a=/^\s*function ([^ (]*)/,r="name";r in n||i("3a0f")&&s(n,r,{configurable:!0,get:function(){try{return(""+this).match(a)[1]}catch(t){return""}}})},db74:function(t,e,i){},e5f0:function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"bind"},[i("div",{staticClass:"input-wrap"},[i("div",{staticClass:"input-item"},[i("label",{attrs:{for:"inpt-name"}},[t._v("姓名")]),i("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],attrs:{type:"text",id:"inpt-name"},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}}),i("span",{directives:[{name:"show",rawName:"v-show",value:""!==t.name,expression:"name!==''"}],staticClass:"close",on:{mouseup:function(e){return t.clear("name")}}})]),i("div",{staticClass:"input-item"},[i("label",{attrs:{for:"inpt-sex"}},[t._v("性别")]),i("input",{directives:[{name:"model",rawName:"v-model",value:t.sex,expression:"sex"}],attrs:{type:"text",id:"inpt-sex"},domProps:{value:t.sex},on:{input:function(e){e.target.composing||(t.sex=e.target.value)}}}),""!==t.sex?i("span",{staticClass:"close",on:{mouseup:function(e){return t.clear("sex")}}}):t._e()]),i("div",{staticClass:"input-item"},[i("label",{attrs:{for:"inpt-idNum"}},[t._v("身份证号")]),i("input",{directives:[{name:"model",rawName:"v-model",value:t.idNum,expression:"idNum"}],attrs:{type:"text",id:"inpt-idNum"},domProps:{value:t.idNum},on:{input:function(e){e.target.composing||(t.idNum=e.target.value)}}}),""!==t.idNum?i("span",{staticClass:"close",on:{mouseup:function(e){return t.clear("idNum")}}}):t._e()]),i("div",{staticClass:"input-item"},[i("label",{attrs:{for:"inpt-securityNumber"}},[t._v("医保账号")]),i("input",{directives:[{name:"model",rawName:"v-model",value:t.securityNumber,expression:"securityNumber"}],attrs:{type:"text",id:"inpt-securityNumber"},domProps:{value:t.securityNumber},on:{input:function(e){e.target.composing||(t.securityNumber=e.target.value)}}}),""!==t.securityNumber?i("span",{staticClass:"close",on:{mouseup:function(e){return t.clear("securityNumber")}}}):t._e()]),i("div",{staticClass:"input-item"},[i("label",{attrs:{for:"inpt-cardNum"}},[t._v("医保卡号")]),i("input",{directives:[{name:"model",rawName:"v-model",value:t.cardNum,expression:"cardNum"}],attrs:{type:"text",id:"inpt-cardNum"},domProps:{value:t.cardNum},on:{input:function(e){e.target.composing||(t.cardNum=e.target.value)}}}),""!==t.cardNum?i("span",{staticClass:"close",on:{mouseup:function(e){return t.clear("cardNum")}}}):t._e()])]),t._m(0),i("div",{staticClass:"error"},[t.error?i("span",{domProps:{textContent:t._s(t.error)}}):t._e()]),i("div",{staticClass:"submit",class:{isSubmit:t.isSubmit},on:{click:t.submit}},[t._v("提交")])])},n=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"tip"},[t._v("医保账号：社会保障卡上的保险号"),i("br"),t._v("\n医保卡号：社会保障卡上的卡号")])}],a=(i("3a23"),i("3f47")),r=i("52c1"),u={data:function(){return{name:"",idNum:"",securityNumber:"",cardNum:"",sex:"",error:""}},methods:Object(a["a"])({},Object(r["d"])({}),{clear:function(t){this[t]=""},submit:function(){this.isSubmit&&this.$api.bind.bindSubmit({name:this.name,idNum:this.idNum,cardNum:this.cardNum,securityNumber:this.securityNumber,sex:this.sex}).then(function(t){console.log("submitres",t)})}}),computed:{isSubmit:function(){return""!==this.securityNumber&&""!==this.cardNum}},components:{}},c=u,o=(i("f755"),i("17cc")),m=Object(o["a"])(c,s,n,!1,null,"252015d4",null);e["default"]=m.exports},f755:function(t,e,i){"use strict";var s=i("db74"),n=i.n(s);n.a}}]);
//# sourceMappingURL=chunk-749ddacb.13113861.js.map