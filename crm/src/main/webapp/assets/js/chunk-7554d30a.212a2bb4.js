(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7554d30a"],{"05f0":function(t,i,e){"use strict";e.r(i);var s=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",[e("div",{ref:"wrapper",staticClass:"page-infinite-wrapper"},[e("ul",{directives:[{name:"infinite-scroll",rawName:"v-infinite-scroll",value:t.loadMore,expression:"loadMore"}],staticClass:"page-infinite-list",attrs:{"infinite-scroll-distance":"50"}},t._l(t.productList,function(t,i){return e("li",{key:i},[e("product",{attrs:{productInfo:t}})],1)}),0),e("p",{directives:[{name:"show",rawName:"v-show",value:t.loading&&t.productList.length,expression:"loading&&productList.length"}],staticClass:"page-infinite-loading"},[e("mt-spinner",{attrs:{type:"fading-circle"}}),t._v("\n      加载中...\n    ")],1),e("p",{directives:[{name:"show",rawName:"v-show",value:!t.loading&&t.productList.length,expression:"!loading&&productList.length"}],staticClass:"noMoreData"},[t._v("没有更多数据了")]),e("p",{directives:[{name:"show",rawName:"v-show",value:!t.productList.length,expression:"!productList.length"}],staticClass:"noProduct"},[t._v("该分类下暂无产品")])])])},a=[],n=e("a59e"),o=e.n(n),r=e("68d2"),c={name:"ProductList",data:function(){return{page:1,loading:!1,limit:10,productCategoryId:"",productList:[]}},mounted:function(){this.$route.query.productCategoryId?this.productCategoryId=this.$route.query.productCategoryId:this.productCategoryId="5",this.getList()},methods:{getList:function(){var t=this;return new o.a(function(i,e){t.$api.product.getProductListWidthType({productCategoryId:t.productCategoryId,page:t.page,limit:t.limit}).then(function(i){t.loading=!0,t.productList=i.data,t._checkMore(i)})})},loadMore:function(){this.loading&&(this.page++,this.$api.getProductListWidthType.getProductListWidthType({page:this.page,limit:this.limit,productCategoryId:this.productCategoryId}).then(function(t){this.productList=this.productList.concat(t.data),this._checkMore(t)}.bind(this)).catch(function(t){}))},_checkMore:function(t){(!t.data.length||this.page*this.limit>=t.count)&&(this.loading=!1)}},components:{product:r["a"]}},u=c,d=(e("c81d"),e("17cc")),p=Object(d["a"])(u,s,a,!1,null,"45229b3f",null);i["default"]=p.exports},"156a":function(t,i,e){},"25e1":function(t,i,e){},"68d2":function(t,i,e){"use strict";var s=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"product-wrapper"},[e("div",{staticClass:"list "},[e("p",{staticClass:"title"},[t._v(t._s(t.productInfo.name))]),e("div",{staticClass:"company-logo"},[e("img",{attrs:{src:t.baseSrc+t.productInfo.brandLogo,alt:"公司logo"}})]),e("p",{staticClass:"condition"},t._l(t.productInfo.insure_condition,function(i,s){return e("span",{key:s,staticClass:"condition-item"},[t._v(t._s(i.name)+"："+t._s(i.value))])}),0),e("p",{staticClass:"product-ts"},[t.productInfo.feature1?e("span",{staticClass:"ts-item"},[e("i"),t._v(t._s(t.productInfo.feature1))]):t._e(),t.productInfo.feature2?e("span",{staticClass:"ts-item"},[e("i"),t._v(t._s(t.productInfo.feature2))]):t._e(),t.productInfo.feature3?e("span",{staticClass:"ts-item"},[e("i"),t._v(t._s(t.productInfo.feature3))]):t._e()]),t.productInfo.parameter_values?e("div",{staticClass:"characteristics"},t._l(t.productInfo.parameter_values[0].entries,function(i,s){return e("div",{key:s,staticClass:"character "},[e("span",[t._v(t._s(i.name))]),e("span",[t._v(t._s(i.limit))])])}),0):t._e(),e("div",{staticClass:"price-btn"},[e("div",{staticClass:"price"},[t._v(t._s(t.productInfo.price)),e("span",[t._v("元起")])]),e("div",{staticClass:"btn",on:{click:function(i){return t.goDetail(t.productInfo.id)}}},[t._v("查看详情")])]),t._t("default")],2)])},a=[],n={props:{productInfo:{type:Object,default:function(){return{}}}},data:function(){return{baseSrc:"",parameters:[]}},mounted:function(){this.baseSrc="".concat("http://192.168.15.164:8003")},computed:{comLeftWidth:function(){return{width:this.leftWidth?this.leftWidth+"px":"800px"}},comRightWidth:function(){return{width:this.rightWidth?this.rightWidth+"px":"800px"}}},methods:{goDetail:function(t){this.$router.push({path:"/product/detail/".concat(t),query:{productId:t}})}}},o=n,r=(e("8a96"),e("17cc")),c=Object(r["a"])(o,s,a,!1,null,"047feb1d",null);i["a"]=c.exports},"8a96":function(t,i,e){"use strict";var s=e("25e1"),a=e.n(s);a.a},c81d:function(t,i,e){"use strict";var s=e("156a"),a=e.n(s);a.a}}]);
//# sourceMappingURL=chunk-7554d30a.212a2bb4.js.map