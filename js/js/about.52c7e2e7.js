(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"194a":function(t,a,n){},"6ece":function(t,a,n){t.exports=n.p+"img/s.d61156cf.png"},"754c":function(t,a,n){"use strict";var i=n("194a"),e=n.n(i);e.a},"967d":function(t,a,n){t.exports=n.p+"img/cuo.b4486345.png"},f820:function(t,a,n){"use strict";n.r(a);var i=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"container"},[i("div",{staticClass:"top"},[i("span",[i("img",{attrs:{src:n("967d"),alt:""},on:{click:t.handleReturn}})]),i("p",[t._v("当前的城市")]),i("span")]),i("div",{staticClass:"search"},[i("img",{attrs:{src:n("6ece"),alt:""}}),i("input",{attrs:{type:"text",placeholder:"输入城市名或拼音"},on:{click:t.handleInput}}),t.isSearch?i("div",{staticClass:"call",on:{click:t.handleCall}},[t._v("取消")]):t._e()]),i("div",{staticClass:"top-city"},[i("p",[t._v("GPS定位你所在的城市")]),i("router-link",{attrs:{to:"/",tag:"div"}},[i("span",{staticClass:"city"},[t._v(t._s(this.$store.state.city))])]),i("p",[t._v("热门城市")]),i("router-link",{attrs:{to:"/",tag:"div"}},t._l(t.data.hotCities,(function(a){return i("span",{key:a.id,staticClass:"city",on:{click:function(n){return t.handleClick(a.name)}}},[t._v(t._s(a.name))])})),0)],1),i("van-index-bar",{attrs:{"index-list":t.indexList}},t._l(t.data.cities,(function(a,n){return i("div",{key:a.id},[i("van-index-anchor",{attrs:{index:n}}),i("router-link",{attrs:{to:"/",tag:"div"}},t._l(t.data.cities[n],(function(a){return i("van-cell",{key:a.id,attrs:{title:a.name},on:{click:function(n){return t.handleClick(a.name)}}})})),1)],1)})),0)],1)},e=[],s={data:function(){return{data:[],indexList:[],isSearch:!1}},mounted:function(){var t=this,a="http://yapi.demo.qunar.com/mock/43104/film";this.axios.get(a).then((function(a){for(var n in t.data=a.data.data,a.data.data.cities)t.indexList.push(n)}))},methods:{handleClick:function(t){this.$store.dispatch("changeCity",t)},handleReturn:function(){this.$router.back()},handleCall:function(){this.isSearch=!1},handleInput:function(){this.isSearch=!0}}},c=s,r=(n("754c"),n("2877")),o=Object(r["a"])(c,i,e,!1,null,"7d3ed1e3",null);a["default"]=o.exports}}]);
//# sourceMappingURL=about.52c7e2e7.js.map