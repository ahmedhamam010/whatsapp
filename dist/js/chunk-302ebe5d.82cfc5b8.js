(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-302ebe5d"],{"205f":function(t,e,n){"use strict";n.d(e,"a",(function(){return E}));var r=n("2b0e"),c=n("b42e"),o=n("c637"),l=n("a723"),i=n("9b76"),a=n("8690"),s=n("365c"),u=n("d82f"),b=n("cf75"),d=n("d580"),p=n("6197"),f=n("b885"),O=n("670f"),j=n("4918");function h(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function m(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?h(Object(n),!0).forEach((function(e){g(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function g(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var v=Object(b["d"])(Object(u["m"])(m(m({},Object(u["k"])(j["b"],["src","alt","width","height","left","right"])),{},{bottom:Object(b["c"])(l["g"],!1),end:Object(b["c"])(l["g"],!1),start:Object(b["c"])(l["g"],!1),top:Object(b["c"])(l["g"],!1)})),o["s"]),w=r["default"].extend({name:o["s"],functional:!0,props:v,render:function(t,e){var n=e.props,r=e.data,o=n.src,l=n.alt,i=n.width,a=n.height,s="card-img";return n.top?s+="-top":n.right||n.end?s+="-right":n.bottom?s+="-bottom":(n.left||n.start)&&(s+="-left"),t("img",Object(c["a"])(r,{class:s,attrs:{src:o,alt:l,width:i,height:a}}))}});function y(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function q(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?y(Object(n),!0).forEach((function(e){x(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):y(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function x(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var P=Object(b["a"])(v,b["f"].bind(null,"img"));P.imgSrc.required=!1;var C=Object(b["d"])(Object(u["m"])(q(q(q(q(q(q({},p["b"]),f["b"]),O["b"]),P),d["a"]),{},{align:Object(b["c"])(l["u"]),noBody:Object(b["c"])(l["g"],!1)})),o["n"]),E=r["default"].extend({name:o["n"],functional:!0,props:C,render:function(t,e){var n,r=e.props,o=e.data,l=e.slots,u=e.scopedSlots,d=r.imgSrc,j=r.imgLeft,h=r.imgRight,m=r.imgStart,g=r.imgEnd,v=r.imgBottom,y=r.header,q=r.headerHtml,C=r.footer,E=r.footerHtml,S=r.align,k=r.textVariant,B=r.bgVariant,D=r.borderVariant,T=u||{},Q=l(),_={},H=t(),V=t();if(d){var I=t(w,{props:Object(b["e"])(P,r,b["h"].bind(null,"img"))});v?V=I:H=I}var W=t(),A=Object(s["a"])(i["t"],T,Q);(A||y||q)&&(W=t(f["a"],{props:Object(b["e"])(f["b"],r),domProps:A?{}:Object(a["a"])(q,y)},Object(s["b"])(i["t"],_,T,Q)));var G=Object(s["b"])(i["i"],_,T,Q);r.noBody||(G=t(p["a"],{props:Object(b["e"])(p["b"],r)},G),r.overlay&&d&&(G=t("div",{staticClass:"position-relative"},[H,G,V]),H=t(),V=t()));var Y=t(),z=Object(s["a"])(i["s"],T,Q);return(z||C||E)&&(Y=t(O["a"],{props:Object(b["e"])(O["b"],r),domProps:A?{}:Object(a["a"])(E,C)},Object(s["b"])(i["s"],_,T,Q))),t(r.tag,Object(c["a"])(o,{staticClass:"card",class:(n={"flex-row":j||m,"flex-row-reverse":(h||g)&&!(j||m)},x(n,"text-".concat(S),S),x(n,"bg-".concat(B),B),x(n,"border-".concat(D),D),x(n,"text-".concat(k),k),n)}),[H,W,G,Y,V])}})},"2f73":function(t,e,n){},4918:function(t,e,n){"use strict";n.d(e,"b",(function(){return j})),n.d(e,"a",(function(){return h}));var r=n("2b0e"),c=n("b42e"),o=n("c637"),l=n("a723"),i=n("2326"),a=n("6c06"),s=n("7b1e"),u=n("3a58"),b=n("cf75"),d=n("fa73");function p(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var f='<svg width="%{w}" height="%{h}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 %{w} %{h}" preserveAspectRatio="none"><rect width="100%" height="100%" style="fill:%{f};"></rect></svg>',O=function(t,e,n){var r=encodeURIComponent(f.replace("%{w}",Object(d["g"])(t)).replace("%{h}",Object(d["g"])(e)).replace("%{f}",n));return"data:image/svg+xml;charset=UTF-8,".concat(r)},j=Object(b["d"])({alt:Object(b["c"])(l["u"]),blank:Object(b["c"])(l["g"],!1),blankColor:Object(b["c"])(l["u"],"transparent"),block:Object(b["c"])(l["g"],!1),center:Object(b["c"])(l["g"],!1),fluid:Object(b["c"])(l["g"],!1),fluidGrow:Object(b["c"])(l["g"],!1),height:Object(b["c"])(l["p"]),left:Object(b["c"])(l["g"],!1),right:Object(b["c"])(l["g"],!1),rounded:Object(b["c"])(l["j"],!1),sizes:Object(b["c"])(l["f"]),src:Object(b["c"])(l["u"]),srcset:Object(b["c"])(l["f"]),thumbnail:Object(b["c"])(l["g"],!1),width:Object(b["c"])(l["p"])},o["kb"]),h=r["default"].extend({name:o["kb"],functional:!0,props:j,render:function(t,e){var n,r=e.props,o=e.data,l=r.alt,b=r.src,f=r.block,j=r.fluidGrow,h=r.rounded,m=Object(u["c"])(r.width)||null,g=Object(u["c"])(r.height)||null,v=null,w=Object(i["b"])(r.srcset).filter(a["a"]).join(","),y=Object(i["b"])(r.sizes).filter(a["a"]).join(",");return r.blank&&(!g&&m?g=m:!m&&g&&(m=g),m||g||(m=1,g=1),b=O(m,g,r.blankColor||"transparent"),w=null,y=null),r.left?v="float-left":r.right?v="float-right":r.center&&(v="mx-auto",f=!0),t("img",Object(c["a"])(o,{attrs:{src:b,alt:l,width:m?Object(d["g"])(m):null,height:g?Object(d["g"])(g):null,srcset:w||null,sizes:y||null},class:(n={"img-thumbnail":r.thumbnail,"img-fluid":r.fluid||j,"w-100":j,rounded:""===h||!0===h},p(n,"rounded-".concat(h),Object(s["n"])(h)&&""!==h),p(n,v,v),p(n,"d-block",f),n)}))}})},4968:function(t,e,n){"use strict";n.d(e,"b",(function(){return s})),n.d(e,"a",(function(){return u}));var r=n("2b0e"),c=n("b42e"),o=n("c637"),l=n("a723"),i=n("cf75"),a=n("fa73"),s=Object(i["d"])({title:Object(i["c"])(l["u"]),titleTag:Object(i["c"])(l["u"],"h4")},o["v"]),u=r["default"].extend({name:o["v"],functional:!0,props:s,render:function(t,e){var n=e.props,r=e.data,o=e.children;return t(n.titleTag,Object(c["a"])(r,{staticClass:"card-title"}),o||Object(a["g"])(n.title))}})},6197:function(t,e,n){"use strict";n.d(e,"b",(function(){return O})),n.d(e,"a",(function(){return j}));var r=n("2b0e"),c=n("b42e"),o=n("c637"),l=n("a723"),i=n("d82f"),a=n("cf75"),s=n("d580"),u=n("4968"),b=n("ba06");function d(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function p(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?d(Object(n),!0).forEach((function(e){f(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function f(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var O=Object(a["d"])(Object(i["m"])(p(p(p(p({},u["b"]),b["b"]),Object(a["a"])(s["a"],a["f"].bind(null,"body"))),{},{bodyClass:Object(a["c"])(l["e"]),overlay:Object(a["c"])(l["g"],!1)})),o["o"]),j=r["default"].extend({name:o["o"],functional:!0,props:O,render:function(t,e){var n,r=e.props,o=e.data,l=e.children,i=r.bodyBgVariant,s=r.bodyBorderVariant,d=r.bodyTextVariant,p=t();r.title&&(p=t(u["a"],{props:Object(a["e"])(u["b"],r)}));var O=t();return r.subTitle&&(O=t(b["a"],{props:Object(a["e"])(b["b"],r),class:["mb-2"]})),t(r.bodyTag,Object(c["a"])(o,{staticClass:"card-body",class:[(n={"card-img-overlay":r.overlay},f(n,"bg-".concat(i),i),f(n,"border-".concat(s),s),f(n,"text-".concat(d),d),n),r.bodyClass]}),[p,O,l])}})},"670f":function(t,e,n){"use strict";n.d(e,"b",(function(){return f})),n.d(e,"a",(function(){return O}));var r=n("2b0e"),c=n("b42e"),o=n("c637"),l=n("a723"),i=n("8690"),a=n("d82f"),s=n("cf75"),u=n("d580");function b(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function d(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?b(Object(n),!0).forEach((function(e){p(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var f=Object(s["d"])(Object(a["m"])(d(d({},Object(s["a"])(u["a"],s["f"].bind(null,"footer"))),{},{footer:Object(s["c"])(l["u"]),footerClass:Object(s["c"])(l["e"]),footerHtml:Object(s["c"])(l["u"])})),o["p"]),O=r["default"].extend({name:o["p"],functional:!0,props:f,render:function(t,e){var n,r=e.props,o=e.data,l=e.children,a=r.footerBgVariant,s=r.footerBorderVariant,u=r.footerTextVariant;return t(r.footerTag,Object(c["a"])(o,{staticClass:"card-footer",class:[r.footerClass,(n={},p(n,"bg-".concat(a),a),p(n,"border-".concat(s),s),p(n,"text-".concat(u),u),n)],domProps:l?{}:Object(i["a"])(r.footerHtml,r.footer)}),l)}})},"895b":function(t,e,n){"use strict";n("2f73")},a15b:function(t,e,n){"use strict";n.d(e,"a",(function(){return w}));var r=n("b42e"),c=n("c637"),o=n("a723"),l=n("2326"),i=n("228e"),a=n("6c06"),s=n("b508"),u=n("d82f"),b=n("cf75"),d=n("fa73");function p(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function f(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?p(Object(n),!0).forEach((function(e){O(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function O(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var j=["start","end","center"],h=Object(s["a"])((function(t,e){return e=Object(d["h"])(Object(d["g"])(e)),e?Object(d["c"])(["row-cols",t,e].filter(a["a"]).join("-")):null})),m=Object(s["a"])((function(t){return Object(d["c"])(t.replace("cols",""))})),g=[],v=function(){var t=Object(i["b"])().reduce((function(t,e){return t[Object(b["g"])(e,"cols")]=Object(b["c"])(o["p"]),t}),Object(u["c"])(null));return g=Object(u["h"])(t),Object(b["d"])(Object(u["m"])(f(f({},t),{},{alignContent:Object(b["c"])(o["u"],null,(function(t){return Object(l["a"])(Object(l["b"])(j,"between","around","stretch"),t)})),alignH:Object(b["c"])(o["u"],null,(function(t){return Object(l["a"])(Object(l["b"])(j,"between","around"),t)})),alignV:Object(b["c"])(o["u"],null,(function(t){return Object(l["a"])(Object(l["b"])(j,"baseline","stretch"),t)})),noGutters:Object(b["c"])(o["g"],!1),tag:Object(b["c"])(o["u"],"div")})),c["Ob"])},w={name:c["Ob"],functional:!0,get props(){return delete this.props,this.props=v(),this.props},render:function(t,e){var n,c=e.props,o=e.data,l=e.children,i=c.alignV,a=c.alignH,s=c.alignContent,u=[];return g.forEach((function(t){var e=h(m(t),c[t]);e&&u.push(e)})),u.push((n={"no-gutters":c.noGutters},O(n,"align-items-".concat(i),i),O(n,"justify-content-".concat(a),a),O(n,"align-content-".concat(s),s),n)),t(c.tag,Object(r["a"])(o,{staticClass:"row",class:u}),l)}}},a395:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-row",[n("b-col",{attrs:{cols:"12"}},[n("quill-editor-snow"),n("quill-editor-bubble"),n("quill-editor-custom")],1)],1)},c=[],o=n("a15b"),l=n("b28b"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-card-code",{attrs:{title:"Snow Editor"},scopedSlots:t._u([{key:"code",fn:function(){return[t._v(" "+t._s(t.codeSnow)+" ")]},proxy:!0}])},[n("b-card-text",[t._v("Snow is a clean, flat toolbar theme")]),n("quill-editor",{attrs:{options:t.snowOption},model:{value:t.content,callback:function(e){t.content=e},expression:"content"}})],1)},a=[],s=n("d6e4"),u=n("541c"),b=n("953d"),d='\n<template>\n  <div>\n    <quill-editor\n      v-model="content"\n      :options="editorOption"\n    />\n  </div>\n</template>\n\n<script>\nimport { quillEditor } from \'vue-quill-editor\'\n\n// eslint-disable-next-line\nimport \'quill/dist/quill.core.css\'\n// eslint-disable-next-line\nimport \'quill/dist/quill.snow.css\'\n// eslint-disable-next-line\nimport \'quill/dist/quill.bubble.css\'\n\nexport default {\n  components: {\n    quillEditor,\n  },\n  data: () => ({\n    editorOption: {\n      theme: \'bubble\',\n    },\n    content: `<h2><span>Quill Rich Text Editor</span></h2><br />\n<p>Quill is a free, <a href="https://github.com/quilljs/quill/">open source</a> WYSIWYG editor built for the modern web. With its <a href="http://quilljs.com/docs/modules/">modular architecture</a> and expressive <a href="http://quilljs.com/docs/api/">API</a>.</p><br />\n<iframe class="ql-video" src="https://www.youtube.com/embed/QHH3iSeDBLo?showinfo=0" width="560" height="238"></iframe>`,\n  }),\n}\n<\/script>\n',p='\n<template>\n  <quill-editor\n    v-model="content"\n    :options="snowOption"\n  />\n</template>\n\n<script>\n// eslint-disable-next-line\nimport \'quill/dist/quill.core.css\'\n// eslint-disable-next-line\nimport \'quill/dist/quill.snow.css\'\n// eslint-disable-next-line\nimport \'quill/dist/quill.bubble.css\'\n\nimport { quillEditor } from \'vue-quill-editor\'\n\nexport default {\n  components: {\n    quillEditor,\n  },\n  data: () => ({\n    content: `<h1>Quill Rich Text Editor</h1>\n  <p>Quill is a free, <a href="https://github.com/quilljs/quill/">open source</a> WYSIWYG editor built for the modern web. With its <a href="http://quilljs.com/docs/modules/">modular architecture</a> and expressive <a href="http://quilljs.com/docs/api/">API</a>, it is completely customizable to fit any need.</p>\n  <iframe class="ql-video" src="https://www.youtube.com/embed/QHH3iSeDBLo?showinfo=0" width="560" height="238"></iframe>\n  <p><br></p>\n  <h2>Getting Started is Easy</h2>\n  <p><br></p>\n  <pre>\n// &lt;link href="https://cdn.quilljs.com/1.0.5/quill.snow.css" rel="stylesheet"&gt;\n// &lt;script src="https://cdn.quilljs.com/1.0.5/quill.min.js" type="text/javascript"&gt;&lt;/script&gt;\n  var quill = new Quill(\'#editor\', {\n  modules: {\n  toolbar: \'#toolbar\'\n  },\n  theme: \'snow\'\n  });\n// Open your browser\'s developer console to try out the API!</pre>  `,\n  }),\n}\n<\/script>\n',f='\n<template>\n  <div>\n    <quill-editor\n      v-model="content"\n      :options="editorOption"\n      >\n      <div\n        id="toolbar"\n        slot="toolbar"\n      >\n        \x3c!-- Add a bold button --\x3e\n        <button class="ql-bold">\n          Bold\n        </button>\n        <button class="ql-italic">\n          Italic\n        </button>\n\n        \x3c!-- Add font size dropdown --\x3e\n        <select class="ql-size">\n          <option value="small" />\n          \x3c!-- Note a missing, thus falsy value, is used to reset to default --\x3e\n          <option selected />\n          <option value="large" />\n          <option value="huge" />\n        </select>\n\n        <select class="ql-font">\n          <option selected="selected" />\n          <option value="serif" />\n          <option value="monospace" />\n        </select>\n\n        \x3c!-- Add subscript and superscript buttons --\x3e\n        <button\n          class="ql-script"\n          value="sub"\n        />\n        <button\n          class="ql-script"\n          value="super"\n        />\n\n        \x3c!-- You can also add your own --\x3e\n        <button\n          style="width:auto"\n          @click="customButtonClick"\n        >\n          Click here\n        </button>\n      </div>\n    </quill-editor>\n  </div>\n</template>\n\n<script>\n// eslint-disable-next-line\nimport \'quill/dist/quill.core.css\'\n// eslint-disable-next-line\nimport \'quill/dist/quill.snow.css\'\n// eslint-disable-next-line\nimport \'quill/dist/quill.bubble.css\'\nimport { quillEditor } from \'vue-quill-editor\'\n\nexport default {\n  components: {\n    quillEditor,\n  },\n  data: () => ({\n    editorOption: {\n      modules: {\n        toolbar: \'#toolbar\',\n      },\n    },\n    content: `<h2><span class="ql-font-serif">Quill Rich Text Editor</span></h2><br />\n<p>Quill is a free, <a href="https://github.com/quilljs/quill/">open source</a> WYSIWYG editor built for the modern web. With its <a href="http://quilljs.com/docs/modules/">modular architecture</a> and expressive <a href="http://quilljs.com/docs/api/">API</a>, it is completely customizable to fit any need.</p><br />\n<iframe class="ql-video" src="https://www.youtube.com/embed/QHH3iSeDBLo?showinfo=0" width="560" height="238"></iframe>`,\n  }),\n  methods: {\n    customButtonClick() {\n      alert(\'Button clicked!\')\n    },\n  },\n}\n<\/script>\n',O={components:{quillEditor:b["quillEditor"],BCardCode:u["a"],BCardText:s["a"]},data:function(){return{codeSnow:p,snowOption:{theme:"snow"},content:'<h1 class="ql-align-center">Quill Rich Text Editor</h1>\n                    <p class="card-text"><br /></p>\n                    <p class="card-text">\n                      Quill is a free, <a href="https://github.com/quilljs/quill/">open source</a> WYSIWYG editor built\n                      for the modern web. With its\n                      <a href="http://quilljs.com/docs/modules/">modular architecture</a> and expressive\n                      <a href="http://quilljs.com/docs/api/">API</a>, it is completely customizable to fit any need.\n                    </p>\n                    <p class="card-text"><br /></p>\n                    <iframe\n                      class="ql-video ql-align-center"\n                      src="https://www.youtube.com/embed/QHH3iSeDBLo?showinfo=0"\n                      width="560"\n                      height="238"\n                    ></iframe>\n                    <p class="card-text"><br /></p>\n                    <p class="card-text"><br /></p>\n                    <h2 class="ql-align-center">Getting Started is Easy</h2>\n                    <p class="card-text"><br /></p>\n                    <pre>\n// &lt;link href="https://cdn.quilljs.com/1.3.6/quill.snow.css" rel="stylesheet"&gt;\n// &lt;script src="https://cdn.quilljs.com/1.3.6/quill.min.js" type="text/javascript"&gt;&lt;/script&gt;\nvar quill = new Quill(\'#editor\', {\n    modules: {\n        toolbar: \'#toolbar\'\n    },\n    theme: \'snow\'\n});\n// Open your browser\'s developer console to try out the API!</pre>'}}},j=O,h=n("2877"),m=Object(h["a"])(j,i,a,!1,null,null,null),g=m.exports,v=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-card-code",{attrs:{title:"Bubble Editor"},scopedSlots:t._u([{key:"code",fn:function(){return[t._v(" "+t._s(t.codeBubble)+" ")]},proxy:!0}])},[n("b-card-text",[t._v("Bubble is a simple tooltip based theme.")]),n("quill-editor",{attrs:{options:t.editorOption},model:{value:t.content,callback:function(e){t.content=e},expression:"content"}})],1)},w=[],y={components:{quillEditor:b["quillEditor"],BCardCode:u["a"],BCardText:s["a"]},data:function(){return{codeBubble:d,editorOption:{theme:"bubble",syntax:!1,modules:{toolbar:[["bold","italic"],[{header:[1,2,3,4,5,6,!1]}],["link","image"]]}},content:'<h1 class="ql-align-center">Quill Rich Text Editor</h1>\n                    <p class="card-text"><br /></p>\n                    <p class="card-text">\n                      Quill is a free, <a href="https://github.com/quilljs/quill/">open source</a> WYSIWYG editor built\n                      for the modern web. With its\n                      <a href="http://quilljs.com/docs/modules/">modular architecture</a> and expressive\n                      <a href="http://quilljs.com/docs/api/">API</a>, it is completely customizable to fit any need.\n                    </p>\n                    <p class="card-text"><br /></p>\n                    <iframe\n                      class="ql-video ql-align-center"\n                      src="https://www.youtube.com/embed/QHH3iSeDBLo?showinfo=0"\n                      width="560"\n                      height="238"\n                    ></iframe>\n                    <p class="card-text"><br /></p>\n                    <p class="card-text"><br /></p>\n                    <h2 class="ql-align-center">Getting Started is Easy</h2>\n                    <p class="card-text"><br /></p>\n                    <pre>\n// &lt;link href="https://cdn.quilljs.com/1.3.6/quill.snow.css" rel="stylesheet"&gt;\n// &lt;script src="https://cdn.quilljs.com/1.3.6/quill.min.js" type="text/javascript"&gt;&lt;/script&gt;\nvar quill = new Quill(\'#editor\', {\n    modules: {\n        toolbar: \'#toolbar\'\n    },\n    theme: \'bubble\'\n});\n// Open your browser\'s developer console to try out the API!</pre>'}}},q=y,x=Object(h["a"])(q,v,w,!1,null,null,null),P=x.exports,C=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-card-code",{attrs:{title:"Custom Toolbar"},scopedSlots:t._u([{key:"code",fn:function(){return[t._v(" "+t._s(t.codeCustom)+" ")]},proxy:!0}])},[n("b-card-text",[t._v("You have freedom to create your own custom toolbar")]),n("quill-editor",{attrs:{options:t.editorOption},model:{value:t.content,callback:function(e){t.content=e},expression:"content"}},[n("div",{attrs:{slot:"toolbar",id:"toolbar"},slot:"toolbar"},[n("button",{staticClass:"ql-bold"},[t._v(" Bold ")]),n("button",{staticClass:"ql-italic"},[t._v(" Italic ")]),n("select",{staticClass:"ql-size"},[n("option",{attrs:{value:"small"}}),n("option",{attrs:{selected:""}}),n("option",{attrs:{value:"large"}}),n("option",{attrs:{value:"huge"}})]),n("select",{staticClass:"ql-font"},[n("option",{attrs:{selected:"selected"}}),n("option",{attrs:{value:"serif"}}),n("option",{attrs:{value:"monospace"}})]),n("button",{staticClass:"ql-script",attrs:{value:"sub"}}),n("button",{staticClass:"ql-script",attrs:{value:"super"}}),n("button",{staticClass:"w-auto btn btn-primary",on:{click:t.customButtonClick}},[t._v(" Click here ")])])])],1)},E=[],S={components:{quillEditor:b["quillEditor"],BCardCode:u["a"],BCardText:s["a"]},data:function(){return{codeCustom:f,editorOption:{modules:{toolbar:"#toolbar"}},content:'<h1 class="ql-align-center">Quill Rich Text Editor</h1>\n                    <p class="card-text"><br /></p>\n                    <p class="card-text">\n                      Quill is a free, <a href="https://github.com/quilljs/quill/">open source</a> WYSIWYG editor built\n                      for the modern web. With its\n                      <a href="http://quilljs.com/docs/modules/">modular architecture</a> and expressive\n                      <a href="http://quilljs.com/docs/api/">API</a>, it is completely customizable to fit any need.\n                    </p>\n                    <p class="card-text"><br /></p>\n                    <iframe\n                      class="ql-video ql-align-center"\n                      src="https://www.youtube.com/embed/QHH3iSeDBLo?showinfo=0"\n                      width="560"\n                      height="238"\n                    ></iframe>\n                    <p class="card-text"><br /></p>\n                    <p class="card-text"><br /></p>\n                    <h2 class="ql-align-center">Getting Started is Easy</h2>\n                    <p class="card-text"><br /></p>\n                    <pre>\n// &lt;link href="https://cdn.quilljs.com/1.3.6/quill.snow.css" rel="stylesheet"&gt;\n// &lt;script src="https://cdn.quilljs.com/1.3.6/quill.min.js" type="text/javascript"&gt;&lt;/script&gt;\nvar quill = new Quill(\'#editor\', {\n    modules: {\n        toolbar: \'#toolbar\'\n    },\n    theme: \'snow\'\n});\n// Open your browser\'s developer console to try out the API!</pre>'}},methods:{customButtonClick:function(){alert("Button clicked!")}}},k=S,B=Object(h["a"])(k,C,E,!1,null,null,null),D=B.exports,T={components:{BRow:o["a"],BCol:l["a"],QuillEditorSnow:g,QuillEditorBubble:P,QuillEditorCustom:D}},Q=T,_=(n("895b"),Object(h["a"])(Q,r,c,!1,null,null,null));e["default"]=_.exports},b28b:function(t,e,n){"use strict";n.d(e,"a",(function(){return q}));var r=n("b42e"),c=n("c637"),o=n("a723"),l=n("992e"),i=n("2326"),a=n("228e"),s=n("6c06"),u=n("7b1e"),b=n("b508"),d=n("d82f"),p=n("cf75"),f=n("fa73");function O(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function j(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?O(Object(n),!0).forEach((function(e){h(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):O(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function h(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var m=["auto","start","end","center","baseline","stretch"],g=function(t,e,n){var r=t;if(!Object(u["p"])(n)&&!1!==n)return e&&(r+="-".concat(e)),"col"!==t||""!==n&&!0!==n?(r+="-".concat(n),Object(f["c"])(r)):Object(f["c"])(r)},v=Object(b["a"])(g),w=Object(d["c"])(null),y=function(){var t=Object(a["b"])().filter(s["a"]),e=t.reduce((function(t,e){return t[e]=Object(p["c"])(o["i"]),t}),Object(d["c"])(null)),n=t.reduce((function(t,e){return t[Object(p["g"])(e,"offset")]=Object(p["c"])(o["p"]),t}),Object(d["c"])(null)),r=t.reduce((function(t,e){return t[Object(p["g"])(e,"order")]=Object(p["c"])(o["p"]),t}),Object(d["c"])(null));return w=Object(d["a"])(Object(d["c"])(null),{col:Object(d["h"])(e),offset:Object(d["h"])(n),order:Object(d["h"])(r)}),Object(p["d"])(Object(d["m"])(j(j(j(j({},e),n),r),{},{alignSelf:Object(p["c"])(o["u"],null,(function(t){return Object(i["a"])(m,t)})),col:Object(p["c"])(o["g"],!1),cols:Object(p["c"])(o["p"]),offset:Object(p["c"])(o["p"]),order:Object(p["c"])(o["p"]),tag:Object(p["c"])(o["u"],"div")})),c["y"])},q={name:c["y"],functional:!0,get props(){return delete this.props,this.props=y()},render:function(t,e){var n,c=e.props,o=e.data,i=e.children,a=c.cols,s=c.offset,u=c.order,b=c.alignSelf,d=[];for(var p in w)for(var f=w[p],O=0;O<f.length;O++){var j=v(p,f[O].replace(p,""),c[f[O]]);j&&d.push(j)}var m=d.some((function(t){return l["e"].test(t)}));return d.push((n={col:c.col||!m&&!a},h(n,"col-".concat(a),a),h(n,"offset-".concat(s),s),h(n,"order-".concat(u),u),h(n,"align-self-".concat(b),b),n)),t(c.tag,Object(r["a"])(o,{class:d}),i)}}},b885:function(t,e,n){"use strict";n.d(e,"b",(function(){return f})),n.d(e,"a",(function(){return O}));var r=n("2b0e"),c=n("b42e"),o=n("c637"),l=n("a723"),i=n("8690"),a=n("d82f"),s=n("cf75"),u=n("d580");function b(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function d(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?b(Object(n),!0).forEach((function(e){p(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var f=Object(s["d"])(Object(a["m"])(d(d({},Object(s["a"])(u["a"],s["f"].bind(null,"header"))),{},{header:Object(s["c"])(l["u"]),headerClass:Object(s["c"])(l["e"]),headerHtml:Object(s["c"])(l["u"])})),o["r"]),O=r["default"].extend({name:o["r"],functional:!0,props:f,render:function(t,e){var n,r=e.props,o=e.data,l=e.children,a=r.headerBgVariant,s=r.headerBorderVariant,u=r.headerTextVariant;return t(r.headerTag,Object(c["a"])(o,{staticClass:"card-header",class:[r.headerClass,(n={},p(n,"bg-".concat(a),a),p(n,"border-".concat(s),s),p(n,"text-".concat(u),u),n)],domProps:l?{}:Object(i["a"])(r.headerHtml,r.header)}),l)}})},ba06:function(t,e,n){"use strict";n.d(e,"b",(function(){return s})),n.d(e,"a",(function(){return u}));var r=n("2b0e"),c=n("b42e"),o=n("c637"),l=n("a723"),i=n("cf75"),a=n("fa73"),s=Object(i["d"])({subTitle:Object(i["c"])(l["u"]),subTitleTag:Object(i["c"])(l["u"],"h6"),subTitleTextVariant:Object(i["c"])(l["u"],"muted")},o["t"]),u=r["default"].extend({name:o["t"],functional:!0,props:s,render:function(t,e){var n=e.props,r=e.data,o=e.children;return t(n.subTitleTag,Object(c["a"])(r,{staticClass:"card-subtitle",class:[n.subTitleTextVariant?"text-".concat(n.subTitleTextVariant):null]}),o||Object(a["g"])(n.subTitle))}})},d580:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var r=n("2b0e"),c=n("c637"),o=n("a723"),l=n("cf75"),i=Object(l["d"])({bgVariant:Object(l["c"])(o["u"]),borderVariant:Object(l["c"])(o["u"]),tag:Object(l["c"])(o["u"],"div"),textVariant:Object(l["c"])(o["u"])},c["n"]);r["default"].extend({props:i})},d6e4:function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var r=n("2b0e"),c=n("b42e"),o=n("c637"),l=n("a723"),i=n("cf75"),a=Object(i["d"])({textTag:Object(i["c"])(l["u"],"p")},o["u"]),s=r["default"].extend({name:o["u"],functional:!0,props:a,render:function(t,e){var n=e.props,r=e.data,o=e.children;return t(n.textTag,Object(c["a"])(r,{staticClass:"card-text"}),o)}})}}]);
//# sourceMappingURL=chunk-302ebe5d.82cfc5b8.js.map