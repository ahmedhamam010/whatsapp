(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f662b196"],{"205f":function(t,e,r){"use strict";r.d(e,"a",(function(){return S}));var n=r("2b0e"),c=r("b42e"),o=r("c637"),a=r("a723"),i=r("9b76"),s=r("8690"),u=r("365c"),b=r("d82f"),l=r("cf75"),p=r("d580"),d=r("6197"),f=r("b885"),O=r("670f"),j=r("4918");function g(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function h(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?g(Object(r),!0).forEach((function(e){m(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):g(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function m(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var v=Object(l["d"])(Object(b["m"])(h(h({},Object(b["k"])(j["b"],["src","alt","width","height","left","right"])),{},{bottom:Object(l["c"])(a["g"],!1),end:Object(l["c"])(a["g"],!1),start:Object(l["c"])(a["g"],!1),top:Object(l["c"])(a["g"],!1)})),o["s"]),y=n["default"].extend({name:o["s"],functional:!0,props:v,render:function(t,e){var r=e.props,n=e.data,o=r.src,a=r.alt,i=r.width,s=r.height,u="card-img";return r.top?u+="-top":r.right||r.end?u+="-right":r.bottom?u+="-bottom":(r.left||r.start)&&(u+="-left"),t("img",Object(c["a"])(n,{class:u,attrs:{src:o,alt:a,width:i,height:s}}))}});function w(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function P(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?w(Object(r),!0).forEach((function(e){x(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):w(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function x(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var T=Object(l["a"])(v,l["f"].bind(null,"img"));T.imgSrc.required=!1;var k=Object(l["d"])(Object(b["m"])(P(P(P(P(P(P({},d["b"]),f["b"]),O["b"]),T),p["a"]),{},{align:Object(l["c"])(a["u"]),noBody:Object(l["c"])(a["g"],!1)})),o["n"]),S=n["default"].extend({name:o["n"],functional:!0,props:k,render:function(t,e){var r,n=e.props,o=e.data,a=e.slots,b=e.scopedSlots,p=n.imgSrc,j=n.imgLeft,g=n.imgRight,h=n.imgStart,m=n.imgEnd,v=n.imgBottom,w=n.header,P=n.headerHtml,k=n.footer,S=n.footerHtml,C=n.align,V=n.textVariant,D=n.bgVariant,B=n.borderVariant,_=b||{},E=a(),z={},I=t(),R=t();if(p){var A=t(y,{props:Object(l["e"])(T,n,l["h"].bind(null,"img"))});v?R=A:I=A}var H=t(),$=Object(u["a"])(i["t"],_,E);($||w||P)&&(H=t(f["a"],{props:Object(l["e"])(f["b"],n),domProps:$?{}:Object(s["a"])(P,w)},Object(u["b"])(i["t"],z,_,E)));var F=Object(u["b"])(i["i"],z,_,E);n.noBody||(F=t(d["a"],{props:Object(l["e"])(d["b"],n)},F),n.overlay&&p&&(F=t("div",{staticClass:"position-relative"},[I,F,R]),I=t(),R=t()));var L=t(),q=Object(u["a"])(i["s"],_,E);return(q||k||S)&&(L=t(O["a"],{props:Object(l["e"])(O["b"],n),domProps:$?{}:Object(s["a"])(S,k)},Object(u["b"])(i["s"],z,_,E))),t(n.tag,Object(c["a"])(o,{staticClass:"card",class:(r={"flex-row":j||h,"flex-row-reverse":(g||m)&&!(j||h)},x(r,"text-".concat(C),C),x(r,"bg-".concat(D),D),x(r,"border-".concat(B),B),x(r,"text-".concat(V),V),r)}),[I,H,F,L,R])}})},"29bb":function(t,e,r){},"33f9":function(t,e,r){"use strict";r("29bb")},4918:function(t,e,r){"use strict";r.d(e,"b",(function(){return j})),r.d(e,"a",(function(){return g}));var n=r("2b0e"),c=r("b42e"),o=r("c637"),a=r("a723"),i=r("2326"),s=r("6c06"),u=r("7b1e"),b=r("3a58"),l=r("cf75"),p=r("fa73");function d(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var f='<svg width="%{w}" height="%{h}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 %{w} %{h}" preserveAspectRatio="none"><rect width="100%" height="100%" style="fill:%{f};"></rect></svg>',O=function(t,e,r){var n=encodeURIComponent(f.replace("%{w}",Object(p["g"])(t)).replace("%{h}",Object(p["g"])(e)).replace("%{f}",r));return"data:image/svg+xml;charset=UTF-8,".concat(n)},j=Object(l["d"])({alt:Object(l["c"])(a["u"]),blank:Object(l["c"])(a["g"],!1),blankColor:Object(l["c"])(a["u"],"transparent"),block:Object(l["c"])(a["g"],!1),center:Object(l["c"])(a["g"],!1),fluid:Object(l["c"])(a["g"],!1),fluidGrow:Object(l["c"])(a["g"],!1),height:Object(l["c"])(a["p"]),left:Object(l["c"])(a["g"],!1),right:Object(l["c"])(a["g"],!1),rounded:Object(l["c"])(a["j"],!1),sizes:Object(l["c"])(a["f"]),src:Object(l["c"])(a["u"]),srcset:Object(l["c"])(a["f"]),thumbnail:Object(l["c"])(a["g"],!1),width:Object(l["c"])(a["p"])},o["kb"]),g=n["default"].extend({name:o["kb"],functional:!0,props:j,render:function(t,e){var r,n=e.props,o=e.data,a=n.alt,l=n.src,f=n.block,j=n.fluidGrow,g=n.rounded,h=Object(b["c"])(n.width)||null,m=Object(b["c"])(n.height)||null,v=null,y=Object(i["b"])(n.srcset).filter(s["a"]).join(","),w=Object(i["b"])(n.sizes).filter(s["a"]).join(",");return n.blank&&(!m&&h?m=h:!h&&m&&(h=m),h||m||(h=1,m=1),l=O(h,m,n.blankColor||"transparent"),y=null,w=null),n.left?v="float-left":n.right?v="float-right":n.center&&(v="mx-auto",f=!0),t("img",Object(c["a"])(o,{attrs:{src:l,alt:a,width:h?Object(p["g"])(h):null,height:m?Object(p["g"])(m):null,srcset:y||null,sizes:w||null},class:(r={"img-thumbnail":n.thumbnail,"img-fluid":n.fluid||j,"w-100":j,rounded:""===g||!0===g},d(r,"rounded-".concat(g),Object(u["n"])(g)&&""!==g),d(r,v,v),d(r,"d-block",f),r)}))}})},4968:function(t,e,r){"use strict";r.d(e,"b",(function(){return u})),r.d(e,"a",(function(){return b}));var n=r("2b0e"),c=r("b42e"),o=r("c637"),a=r("a723"),i=r("cf75"),s=r("fa73"),u=Object(i["d"])({title:Object(i["c"])(a["u"]),titleTag:Object(i["c"])(a["u"],"h4")},o["v"]),b=n["default"].extend({name:o["v"],functional:!0,props:u,render:function(t,e){var r=e.props,n=e.data,o=e.children;return t(r.titleTag,Object(c["a"])(n,{staticClass:"card-title"}),o||Object(s["g"])(r.title))}})},6197:function(t,e,r){"use strict";r.d(e,"b",(function(){return O})),r.d(e,"a",(function(){return j}));var n=r("2b0e"),c=r("b42e"),o=r("c637"),a=r("a723"),i=r("d82f"),s=r("cf75"),u=r("d580"),b=r("4968"),l=r("ba06");function p(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function d(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?p(Object(r),!0).forEach((function(e){f(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function f(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var O=Object(s["d"])(Object(i["m"])(d(d(d(d({},b["b"]),l["b"]),Object(s["a"])(u["a"],s["f"].bind(null,"body"))),{},{bodyClass:Object(s["c"])(a["e"]),overlay:Object(s["c"])(a["g"],!1)})),o["o"]),j=n["default"].extend({name:o["o"],functional:!0,props:O,render:function(t,e){var r,n=e.props,o=e.data,a=e.children,i=n.bodyBgVariant,u=n.bodyBorderVariant,p=n.bodyTextVariant,d=t();n.title&&(d=t(b["a"],{props:Object(s["e"])(b["b"],n)}));var O=t();return n.subTitle&&(O=t(l["a"],{props:Object(s["e"])(l["b"],n),class:["mb-2"]})),t(n.bodyTag,Object(c["a"])(o,{staticClass:"card-body",class:[(r={"card-img-overlay":n.overlay},f(r,"bg-".concat(i),i),f(r,"border-".concat(u),u),f(r,"text-".concat(p),p),r),n.bodyClass]}),[d,O,a])}})},"670f":function(t,e,r){"use strict";r.d(e,"b",(function(){return f})),r.d(e,"a",(function(){return O}));var n=r("2b0e"),c=r("b42e"),o=r("c637"),a=r("a723"),i=r("8690"),s=r("d82f"),u=r("cf75"),b=r("d580");function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function p(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){d(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function d(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var f=Object(u["d"])(Object(s["m"])(p(p({},Object(u["a"])(b["a"],u["f"].bind(null,"footer"))),{},{footer:Object(u["c"])(a["u"]),footerClass:Object(u["c"])(a["e"]),footerHtml:Object(u["c"])(a["u"])})),o["p"]),O=n["default"].extend({name:o["p"],functional:!0,props:f,render:function(t,e){var r,n=e.props,o=e.data,a=e.children,s=n.footerBgVariant,u=n.footerBorderVariant,b=n.footerTextVariant;return t(n.footerTag,Object(c["a"])(o,{staticClass:"card-footer",class:[n.footerClass,(r={},d(r,"bg-".concat(s),s),d(r,"border-".concat(u),u),d(r,"text-".concat(b),b),r)],domProps:a?{}:Object(i["a"])(n.footerHtml,n.footer)}),a)}})},b885:function(t,e,r){"use strict";r.d(e,"b",(function(){return f})),r.d(e,"a",(function(){return O}));var n=r("2b0e"),c=r("b42e"),o=r("c637"),a=r("a723"),i=r("8690"),s=r("d82f"),u=r("cf75"),b=r("d580");function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function p(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){d(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function d(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var f=Object(u["d"])(Object(s["m"])(p(p({},Object(u["a"])(b["a"],u["f"].bind(null,"header"))),{},{header:Object(u["c"])(a["u"]),headerClass:Object(u["c"])(a["e"]),headerHtml:Object(u["c"])(a["u"])})),o["r"]),O=n["default"].extend({name:o["r"],functional:!0,props:f,render:function(t,e){var r,n=e.props,o=e.data,a=e.children,s=n.headerBgVariant,u=n.headerBorderVariant,b=n.headerTextVariant;return t(n.headerTag,Object(c["a"])(o,{staticClass:"card-header",class:[n.headerClass,(r={},d(r,"bg-".concat(s),s),d(r,"border-".concat(u),u),d(r,"text-".concat(b),b),r)],domProps:a?{}:Object(i["a"])(n.headerHtml,n.header)}),a)}})},ba06:function(t,e,r){"use strict";r.d(e,"b",(function(){return u})),r.d(e,"a",(function(){return b}));var n=r("2b0e"),c=r("b42e"),o=r("c637"),a=r("a723"),i=r("cf75"),s=r("fa73"),u=Object(i["d"])({subTitle:Object(i["c"])(a["u"]),subTitleTag:Object(i["c"])(a["u"],"h6"),subTitleTextVariant:Object(i["c"])(a["u"],"muted")},o["t"]),b=n["default"].extend({name:o["t"],functional:!0,props:u,render:function(t,e){var r=e.props,n=e.data,o=e.children;return t(r.subTitleTag,Object(c["a"])(n,{staticClass:"card-subtitle",class:[r.subTitleTextVariant?"text-".concat(r.subTitleTextVariant):null]}),o||Object(s["g"])(r.subTitle))}})},d580:function(t,e,r){"use strict";r.d(e,"a",(function(){return i}));var n=r("2b0e"),c=r("c637"),o=r("a723"),a=r("cf75"),i=Object(a["d"])({bgVariant:Object(a["c"])(o["u"]),borderVariant:Object(a["c"])(o["u"]),tag:Object(a["c"])(o["u"],"div"),textVariant:Object(a["c"])(o["u"])},c["n"]);n["default"].extend({props:i})},f350:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("b-card-code",{attrs:{id:"tour-card",title:"Tour"},scopedSlots:t._u([{key:"code",fn:function(){return[t._v(" "+t._s(t.codeTour)+" ")]},proxy:!0}])},[r("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-primary"},on:{click:t.tourStart}},[t._v(" Start Tour ")]),r("app-tour",{attrs:{steps:t.steps}})],1)},c=[],o=r("541c"),a=r("1947"),i=r("e009"),s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-tour",{attrs:{name:"vuexyTour",steps:t.steps},scopedSlots:t._u([{key:"default",fn:function(e){return[r("transition",{attrs:{name:"fade"}},t._l(e.steps,(function(n,c){return e.currentStep===c?r("v-step",{key:c,attrs:{step:n,"previous-step":e.previousStep,"next-step":e.nextStep,stop:e.stop,"is-first":e.isFirst,"is-last":e.isLast,labels:e.labels}},[r("div",{staticClass:"tour-actions d-flex justify-content-between",attrs:{slot:"actions"},slot:"actions"},[e.currentStep!=e.steps.length-1?r("b-button",{staticClass:"btn-tour-skip mr-1",attrs:{size:"sm",variant:"outline-primary"},on:{click:e.stop}},[r("span",{staticClass:"mr-25 align-middle"},[t._v("Skip")]),r("feather-icon",{attrs:{icon:"XIcon",size:"12"}})],1):t._e(),e.currentStep?r("b-button",{attrs:{size:"sm",variant:"outline-primary mr-1"},on:{click:e.previousStep}},[r("feather-icon",{attrs:{icon:"ChevronLeftIcon",size:"12"}}),r("span",{staticClass:"ml-25 align-middle"},[t._v("Previous")])],1):t._e(),e.currentStep!=e.steps.length-1?r("b-button",{staticClass:"btn-tour-next",attrs:{size:"sm",variant:"primary"},on:{click:e.nextStep}},[r("span",{staticClass:"mr-25 align-middle"},[t._v("Next")]),r("feather-icon",{attrs:{icon:"ChevronRightIcon",size:"12"}})],1):t._e(),e.currentStep==e.steps.length-1?r("b-button",{staticClass:"btn-tour-finish",attrs:{size:"sm",variant:"primary"},on:{click:e.stop}},[r("span",{staticClass:"mr-25 align-middle"},[t._v("Finish")]),r("feather-icon",{attrs:{icon:"CheckCircleIcon",size:"12"}})],1):t._e()],1)]):t._e()})),1)]}}])})},u=[],b={name:"VxTour",components:{BButton:a["a"]},props:{steps:{required:!0,type:Array}}},l=b,p=r("2877"),d=Object(p["a"])(l,s,u,!1,null,null,null),f=d.exports,O="\n<template>\n  <div>\n    <b-button\n      v-ripple.400=\"'rgba(113, 102, 240, 0.15)'\"\n      variant=\"outline-primary\"\n      @click=\"tourStart\"\n    >\n      Start Tour\n    </b-button>\n\n    <app-tour :steps=\"steps\" />\n  </div>\n</template>\n\n<script>\nimport { BButton } from 'bootstrap-vue'\nimport Ripple from 'vue-ripple-directive'\nimport AppTour from '@core/components/app-tour/AppTour.vue'\n\nexport default {\n  name: 'ShepherdExample',\n  components: {\n    BButton,\n    AppTour,\n  },\n  directives: {\n    Ripple,\n  },\n  data() {\n    return {\n      steps: [\n        {\n          target: '#tour-card',\n          header: {\n            title: 'Card',\n          },\n          content: 'This card contains demo for the tour.',\n        },\n        {\n          target: '#tour-card .icon-code',\n          header: {\n            title: 'View demo Source',\n          },\n          content: 'If you ever find your self confused, you can click on this code icon to check the source of current demo.',\n        },\n        {\n          target: '#tour-card .btn',\n          header: {\n            title: 'Trigger Tour',\n          },\n          content: 'You can click on this button to trigger the tour.',\n        },\n      ],\n    }\n  },\n  methods: {\n\n    // tour steps\n    tourStart() {\n      this.$tours.vuexyTour.start()\n    },\n  },\n}\n<\/script>\n\n<style lang=\"scss\">\n@import '@core/scss/vue/libs/tour.scss';\n</style>\n",j={name:"ShepherdExample",components:{BCardCode:o["a"],BButton:a["a"],AppTour:f},directives:{Ripple:i["a"]},data:function(){return{codeTour:O,steps:[{target:"#tour-card",header:{title:"Card"},content:"This card contains demo for the tour."},{target:"#tour-card .icon-code",header:{title:"View demo Source"},content:"If you ever find your self confused, you can click on this code icon to check the source of current demo."},{target:"#tour-card .btn",header:{title:"Trigger Tour"},content:"You can click on this button to trigger the tour."}]}},methods:{tourStart:function(){this.$tours.vuexyTour.start()}}},g=j,h=(r("33f9"),Object(p["a"])(g,n,c,!1,null,null,null));e["default"]=h.exports}}]);
//# sourceMappingURL=chunk-f662b196.f10c289b.js.map