(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-455d6042"],{"06d9":function(t,n,e){"use strict";e.d(n,"a",(function(){return o}));var r=e("2b0e"),o=r["default"].extend({computed:{selectionStart:{cache:!1,get:function(){return this.$refs.input.selectionStart},set:function(t){this.$refs.input.selectionStart=t}},selectionEnd:{cache:!1,get:function(){return this.$refs.input.selectionEnd},set:function(t){this.$refs.input.selectionEnd=t}},selectionDirection:{cache:!1,get:function(){return this.$refs.input.selectionDirection},set:function(t){this.$refs.input.selectionDirection=t}}},methods:{select:function(){var t;(t=this.$refs.input).select.apply(t,arguments)},setSelectionRange:function(){var t;(t=this.$refs.input).setSelectionRange.apply(t,arguments)},setRangeText:function(){var t;(t=this.$refs.input).setRangeText.apply(t,arguments)}}})},"1f1e":function(t,n,e){"use strict";e.d(n,"a",(function(){return o}));var r=e("2b0e"),o=r["default"].extend({computed:{validity:{cache:!1,get:function(){return this.$refs.input.validity}},validationMessage:{cache:!1,get:function(){return this.$refs.input.validationMessage}},willValidate:{cache:!1,get:function(){return this.$refs.input.willValidate}}},methods:{setCustomValidity:function(){var t;return(t=this.$refs.input).setCustomValidity.apply(t,arguments)},checkValidity:function(){var t;return(t=this.$refs.input).checkValidity.apply(t,arguments)},reportValidity:function(){var t;return(t=this.$refs.input).reportValidity.apply(t,arguments)}}})},3656:function(t,n,e){"use strict";e.d(n,"a",(function(){return d}));var r=e("2b0e"),o=e("b42e"),a=e("c637"),i=e("d82f"),u=e("cf75"),b=e("46bc");function p(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,r)}return e}function c(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?p(Object(e),!0).forEach((function(n){s(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):p(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}function s(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}var l=Object(u["d"])(Object(i["j"])(b["b"],["append"]),a["pb"]),d=r["default"].extend({name:a["pb"],functional:!0,props:l,render:function(t,n){var e=n.props,r=n.data,a=n.children;return t(b["a"],Object(o["a"])(r,{props:c(c({},e),{},{append:!1})}),a)}})},"40fc":function(t,n,e){"use strict";e.d(n,"b",(function(){return B})),e.d(n,"a",(function(){return w}));var r=e("2b0e"),o=e("0056"),a=e("a723"),i=e("906c"),u=e("6b77"),b=e("a8c8"),p=e("58f2"),c=e("3a58"),s=e("d82f"),l=e("cf75"),d=e("fa73");function v(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,r)}return e}function m(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?v(Object(e),!0).forEach((function(n){f(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):v(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}function f(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}var g=Object(p["a"])("value",{type:a["p"],defaultValue:"",event:o["bb"]}),h=g.mixin,y=g.props,O=g.prop,j=g.event,B=Object(l["d"])(Object(s["m"])(m(m({},y),{},{ariaInvalid:Object(l["c"])(a["j"],!1),autocomplete:Object(l["c"])(a["u"]),debounce:Object(l["c"])(a["p"],0),formatter:Object(l["c"])(a["l"]),lazy:Object(l["c"])(a["g"],!1),lazyFormatter:Object(l["c"])(a["g"],!1),number:Object(l["c"])(a["g"],!1),placeholder:Object(l["c"])(a["u"]),plaintext:Object(l["c"])(a["g"],!1),readonly:Object(l["c"])(a["g"],!1),trim:Object(l["c"])(a["g"],!1)})),"formTextControls"),w=r["default"].extend({mixins:[h],props:B,data:function(){var t=this[O];return{localValue:Object(d["g"])(t),vModelValue:this.modifyValue(t)}},computed:{computedClass:function(){var t=this.plaintext,n=this.type,e="range"===n,r="color"===n;return[{"custom-range":e,"form-control-plaintext":t&&!e&&!r,"form-control":r||!t&&!e},this.sizeFormClass,this.stateClass]},computedDebounce:function(){return Object(b["d"])(Object(c["c"])(this.debounce,0),0)},hasFormatter:function(){return Object(l["b"])(this.formatter)}},watch:f({},O,(function(t){var n=Object(d["g"])(t),e=this.modifyValue(t);n===this.localValue&&e===this.vModelValue||(this.clearDebounce(),this.localValue=n,this.vModelValue=e)})),created:function(){this.$_inputDebounceTimer=null},mounted:function(){this.$on(o["eb"],this.clearDebounce)},beforeDestroy:function(){this.clearDebounce()},methods:{clearDebounce:function(){clearTimeout(this.$_inputDebounceTimer),this.$_inputDebounceTimer=null},formatValue:function(t,n){var e=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return t=Object(d["g"])(t),!this.hasFormatter||this.lazyFormatter&&!e||(t=this.formatter(t,n)),t},modifyValue:function(t){return t=Object(d["g"])(t),this.trim&&(t=t.trim()),this.number&&(t=Object(c["b"])(t,t)),t},updateValue:function(t){var n=this,e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=this.lazy;if(!r||e){this.clearDebounce();var o=function(){if(t=n.modifyValue(t),t!==n.vModelValue)n.vModelValue=t,n.$emit(j,t);else if(n.hasFormatter){var e=n.$refs.input;e&&t!==e.value&&(e.value=t)}},a=this.computedDebounce;a>0&&!r&&!e?this.$_inputDebounceTimer=setTimeout(o,a):o()}},onInput:function(t){if(!t.target.composing){var n=t.target.value,e=this.formatValue(n,t);!1===e||t.defaultPrevented?Object(u["f"])(t,{propagation:!1}):(this.localValue=e,this.updateValue(e),this.$emit(o["y"],e))}},onChange:function(t){var n=t.target.value,e=this.formatValue(n,t);!1===e||t.defaultPrevented?Object(u["f"])(t,{propagation:!1}):(this.localValue=e,this.updateValue(e,!0),this.$emit(o["d"],e))},onBlur:function(t){var n=t.target.value,e=this.formatValue(n,t,!0);!1!==e&&(this.localValue=Object(d["g"])(this.modifyValue(e)),this.updateValue(e,!0)),this.$emit(o["b"],t)},focus:function(){this.disabled||Object(i["d"])(this.$el)},blur:function(){this.disabled||Object(i["c"])(this.$el)}}})},"46bc":function(t,n,e){"use strict";e.d(n,"b",(function(){return p})),e.d(n,"a",(function(){return c}));var r=e("2b0e"),o=e("b42e"),a=e("c637"),i=e("a723"),u=e("cf75"),b=e("d190"),p=Object(u["d"])({append:Object(u["c"])(i["g"],!1),id:Object(u["c"])(i["u"]),isText:Object(u["c"])(i["g"],!1),tag:Object(u["c"])(i["u"],"div")},a["nb"]),c=r["default"].extend({name:a["nb"],functional:!0,props:p,render:function(t,n){var e=n.props,r=n.data,a=n.children,i=e.append;return t(e.tag,Object(o["a"])(r,{class:{"input-group-append":i,"input-group-prepend":!i},attrs:{id:e.id}}),e.isText?[t(b["a"],a)]:a)}})},4797:function(t,n,e){"use strict";e.d(n,"a",(function(){return x}));var r=e("2b0e"),o=e("c637"),a=e("a723"),i=e("2326"),u=e("906c"),b=e("6b77"),p=e("d82f"),c=e("cf75"),s=e("dde7"),l=e("06d9"),d=e("ad47"),v=e("d520"),m=e("40fc"),f=e("1f1e"),g=e("90ef"),h=e("bc9a");function y(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,r)}return e}function O(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?y(Object(e),!0).forEach((function(n){j(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):y(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}function j(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}var B=["text","password","email","number","url","tel","search","range","color","date","time","datetime","datetime-local","month","week"],w=Object(c["d"])(Object(p["m"])(O(O(O(O(O(O({},g["b"]),s["b"]),d["b"]),v["b"]),m["b"]),{},{list:Object(c["c"])(a["u"]),max:Object(c["c"])(a["p"]),min:Object(c["c"])(a["p"]),noWheel:Object(c["c"])(a["g"],!1),step:Object(c["c"])(a["p"]),type:Object(c["c"])(a["u"],"text",(function(t){return Object(i["a"])(B,t)}))})),o["R"]),x=r["default"].extend({name:o["R"],mixins:[h["a"],g["a"],s["a"],d["a"],v["a"],m["a"],l["a"],f["a"]],props:w,computed:{localType:function(){var t=this.type;return Object(i["a"])(B,t)?t:"text"},computedAttrs:function(){var t=this.localType,n=this.name,e=this.form,r=this.disabled,o=this.placeholder,a=this.required,i=this.min,u=this.max,b=this.step;return{id:this.safeId(),name:n,form:e,type:t,disabled:r,placeholder:o,required:a,autocomplete:this.autocomplete||null,readonly:this.readonly||this.plaintext,min:i,max:u,step:b,list:"password"!==t?this.list:null,"aria-required":a?"true":null,"aria-invalid":this.computedAriaInvalid}},computedListeners:function(){return O(O({},this.bvListeners),{},{input:this.onInput,change:this.onChange,blur:this.onBlur})}},watch:{noWheel:function(t){this.setWheelStopper(t)}},mounted:function(){this.setWheelStopper(this.noWheel)},deactivated:function(){this.setWheelStopper(!1)},activated:function(){this.setWheelStopper(this.noWheel)},beforeDestroy:function(){this.setWheelStopper(!1)},methods:{setWheelStopper:function(t){var n=this.$el;Object(b["c"])(t,n,"focus",this.onWheelFocus),Object(b["c"])(t,n,"blur",this.onWheelBlur),t||Object(b["a"])(document,"wheel",this.stopWheel)},onWheelFocus:function(){Object(b["b"])(document,"wheel",this.stopWheel)},onWheelBlur:function(){Object(b["a"])(document,"wheel",this.stopWheel)},stopWheel:function(t){Object(b["f"])(t,{propagation:!1}),Object(u["c"])(this.$el)}},render:function(t){return t("input",{class:this.computedClass,attrs:this.computedAttrs,domProps:{value:this.localValue},on:this.computedListeners,ref:"input"})}})},"5e12":function(t,n,e){"use strict";e.d(n,"a",(function(){return f}));var r=e("2b0e"),o=e("b42e"),a=e("c637"),i=e("a723"),u=e("9b76"),b=e("8690"),p=e("365c"),c=e("cf75"),s=e("ccc0"),l=e("3656"),d=e("d190");function v(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}var m=Object(c["d"])({append:Object(c["c"])(i["u"]),appendHtml:Object(c["c"])(i["u"]),id:Object(c["c"])(i["u"]),prepend:Object(c["c"])(i["u"]),prependHtml:Object(c["c"])(i["u"]),size:Object(c["c"])(i["u"]),tag:Object(c["c"])(i["u"],"div")},a["mb"]),f=r["default"].extend({name:a["mb"],functional:!0,props:m,render:function(t,n){var e=n.props,r=n.data,a=n.slots,i=n.scopedSlots,c=e.prepend,m=e.prependHtml,f=e.append,g=e.appendHtml,h=e.size,y=i||{},O=a(),j={},B=t(),w=Object(p["a"])(u["W"],y,O);(w||c||m)&&(B=t(l["a"],[w?Object(p["b"])(u["W"],j,y,O):t(d["a"],{domProps:Object(b["a"])(m,c)})]));var x=t(),_=Object(p["a"])(u["b"],y,O);return(_||f||g)&&(x=t(s["a"],[_?Object(p["b"])(u["b"],j,y,O):t(d["a"],{domProps:Object(b["a"])(g,f)})])),t(e.tag,Object(o["a"])(r,{staticClass:"input-group",class:v({},"input-group-".concat(h),h),attrs:{id:e.id||null,role:"group"}}),[B,Object(p["b"])(u["i"],j,y,O),x])}})},ad47:function(t,n,e){"use strict";e.d(n,"b",(function(){return i})),e.d(n,"a",(function(){return u}));var r=e("2b0e"),o=e("a723"),a=e("cf75"),i=Object(a["d"])({size:Object(a["c"])(o["u"])},"formControls"),u=r["default"].extend({props:i,computed:{sizeFormClass:function(){return[this.size?"form-control-".concat(this.size):null]}}})},ccc0:function(t,n,e){"use strict";e.d(n,"a",(function(){return d}));var r=e("2b0e"),o=e("b42e"),a=e("c637"),i=e("d82f"),u=e("cf75"),b=e("46bc");function p(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,r)}return e}function c(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?p(Object(e),!0).forEach((function(n){s(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):p(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}function s(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}var l=Object(u["d"])(Object(i["j"])(b["b"],["append"]),a["ob"]),d=r["default"].extend({name:a["ob"],functional:!0,props:l,render:function(t,n){var e=n.props,r=n.data,a=n.children;return t(b["a"],Object(o["a"])(r,{props:c(c({},e),{},{append:!0})}),a)}})},d190:function(t,n,e){"use strict";e.d(n,"a",(function(){return p}));var r=e("2b0e"),o=e("b42e"),a=e("c637"),i=e("a723"),u=e("cf75"),b=Object(u["d"])({tag:Object(u["c"])(i["u"],"div")},a["qb"]),p=r["default"].extend({name:a["qb"],functional:!0,props:b,render:function(t,n){var e=n.props,r=n.data,a=n.children;return t(e.tag,Object(o["a"])(r,{staticClass:"input-group-text"}),a)}})},d520:function(t,n,e){"use strict";e.d(n,"b",(function(){return u})),e.d(n,"a",(function(){return b}));var r=e("2b0e"),o=e("a723"),a=e("7b1e"),i=e("cf75"),u=Object(i["d"])({state:Object(i["c"])(o["g"],null)},"formState"),b=r["default"].extend({props:u,computed:{computedState:function(){return Object(a["b"])(this.state)?this.state:null},stateClass:function(){var t=this.computedState;return!0===t?"is-valid":!1===t?"is-invalid":null},computedAriaInvalid:function(){var t=this.ariaInvalid;return!0===t||"true"===t||""===t||!1===this.computedState?"true":t}}})},d6e4:function(t,n,e){"use strict";e.d(n,"a",(function(){return p}));var r=e("2b0e"),o=e("b42e"),a=e("c637"),i=e("a723"),u=e("cf75"),b=Object(u["d"])({textTag:Object(u["c"])(i["u"],"p")},a["u"]),p=r["default"].extend({name:a["u"],functional:!0,props:b,render:function(t,n){var e=n.props,r=n.data,a=n.children;return t(e.textTag,Object(o["a"])(r,{staticClass:"card-text"}),a)}})},d74c:function(t,n,e){"use strict";e.r(n);var r=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("b-row",[e("b-col",{attrs:{cols:"12"}},[e("button-toolbar-navigation"),e("button-toolbar-input"),e("button-toolbar-dropdown"),e("button-toolbar-size"),e("button-toolbar-justify")],1)],1)},o=[],a=e("a15b"),i=e("b28b"),u=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("b-card-code",{attrs:{title:"Button groups & Keyboard navigation"},scopedSlots:t._u([{key:"code",fn:function(){return[t._v(" "+t._s(t.codeNavigation)+" ")]},proxy:!0}])},[e("b-card-text",[t._v("Group a series of button-groups and/or input-groups together on a single line, with optional keyboard navigation")]),e("b-button-toolbar",{staticClass:"demo-inline-spacing",attrs:{"key-nav":"","aria-label":"Toolbar with button groups"}},[e("b-button-group",[e("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],staticClass:"btn-icon",attrs:{variant:"outline-primary"}},[e("feather-icon",{attrs:{icon:"ChevronsLeftIcon"}})],1),e("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],staticClass:"btn-icon",attrs:{variant:"outline-primary"}},[e("feather-icon",{attrs:{icon:"ChevronLeftIcon"}})],1)],1),e("b-button-group",[e("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-primary"}},[t._v(" Edit ")]),e("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-primary"}},[t._v(" Undo ")]),e("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-primary"}},[t._v(" Redo ")])],1),e("b-button-group",[e("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],staticClass:"btn-icon",attrs:{variant:"outline-primary"}},[e("feather-icon",{attrs:{icon:"ChevronRightIcon"}})],1),e("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],staticClass:"btn-icon",attrs:{variant:"outline-primary"}},[e("feather-icon",{attrs:{icon:"ChevronsRightIcon"}})],1)],1)],1)],1)},b=[],p=e("2b0e"),c=e("c637"),s=e("a723"),l=e("9bfa"),d=e("906c"),v=e("6b77"),m=e("cf75"),f=e("8c18"),g=[".btn:not(.disabled):not([disabled]):not(.dropdown-item)",".form-control:not(.disabled):not([disabled])","select:not(.disabled):not([disabled])",'input[type="checkbox"]:not(.disabled)','input[type="radio"]:not(.disabled)'].join(","),h=Object(m["d"])({justify:Object(m["c"])(s["g"],!1),keyNav:Object(m["c"])(s["g"],!1)},c["l"]),y=p["default"].extend({name:c["l"],mixins:[f["a"]],props:h,mounted:function(){this.keyNav&&this.getItems()},methods:{getItems:function(){var t=Object(d["D"])(g,this.$el);return t.forEach((function(t){t.tabIndex=-1})),t.filter((function(t){return Object(d["u"])(t)}))},focusFirst:function(){var t=this.getItems();Object(d["d"])(t[0])},focusPrev:function(t){var n=this.getItems(),e=n.indexOf(t.target);e>-1&&(n=n.slice(0,e).reverse(),Object(d["d"])(n[0]))},focusNext:function(t){var n=this.getItems(),e=n.indexOf(t.target);e>-1&&(n=n.slice(e+1),Object(d["d"])(n[0]))},focusLast:function(){var t=this.getItems().reverse();Object(d["d"])(t[0])},onFocusin:function(t){var n=this.$el;t.target!==n||Object(d["f"])(n,t.relatedTarget)||(Object(v["f"])(t),this.focusFirst(t))},onKeydown:function(t){var n=t.keyCode,e=t.shiftKey;n===l["m"]||n===l["h"]?(Object(v["f"])(t),e?this.focusFirst(t):this.focusPrev(t)):n!==l["c"]&&n!==l["k"]||(Object(v["f"])(t),e?this.focusLast(t):this.focusNext(t))}},render:function(t){var n=this.keyNav;return t("div",{staticClass:"btn-toolbar",class:{"justify-content-between":this.justify},attrs:{role:"toolbar",tabindex:n?"0":null},on:n?{focusin:this.onFocusin,keydown:this.onKeydown}:{}},[this.normalizeSlot()])}}),O=e("12aa"),j=e("1947"),B=e("d6e4"),w=e("541c"),x=e("e009"),_='\n<template>\n  <b-button-toolbar\n    key-nav\n    aria-label="Toolbar with button groups"\n    class="demo-inline-spacing"\n  >\n\n    \x3c!-- group  1 --\x3e\n    <b-button-group>\n      <b-button\n        v-ripple.400="\'rgba(113, 102, 240, 0.15)\'"\n        class="btn-icon"\n        variant="outline-primary"\n      >\n        <feather-icon icon="ChevronsLeftIcon" />\n      </b-button>\n      <b-button\n        v-ripple.400="\'rgba(113, 102, 240, 0.15)\'"\n        class="btn-icon"\n        variant="outline-primary"\n      >\n        <feather-icon icon="ChevronLeftIcon" />\n      </b-button>\n    </b-button-group>\n\n    \x3c!-- group 2 --\x3e\n    <b-button-group>\n      <b-button\n        v-ripple.400="\'rgba(113, 102, 240, 0.15)\'"\n        variant="outline-primary"\n      >\n        Edit\n      </b-button>\n      <b-button\n        v-ripple.400="\'rgba(113, 102, 240, 0.15)\'"\n        variant="outline-primary"\n      >\n        Undo\n      </b-button>\n      <b-button\n        v-ripple.400="\'rgba(113, 102, 240, 0.15)\'"\n        variant="outline-primary"\n      >\n        Redo\n      </b-button>\n    </b-button-group>\n\n    \x3c!-- group 3 --\x3e\n    <b-button-group>\n      <b-button\n        v-ripple.400="\'rgba(113, 102, 240, 0.15)\'"\n        class="btn-icon"\n        variant="outline-primary"\n      >\n        <feather-icon icon="ChevronRightIcon" />\n      </b-button>\n      <b-button\n        v-ripple.400="\'rgba(113, 102, 240, 0.15)\'"\n        class="btn-icon"\n        variant="outline-primary"\n      >\n        <feather-icon icon="ChevronsRightIcon" />\n      </b-button>\n    </b-button-group>\n  </b-button-toolbar>\n</template>\n\n<script>\nimport {BButtonToolbar, BButtonGroup, BButton} from \'bootstrap-vue\'\nimport Ripple from \'vue-ripple-directive\'\n\nexport default {\n  components: {\n    BButtonToolbar,\n    BButtonGroup,\n    BButton,\n  },\n  directives: {\n    Ripple,\n  },\n}\n<\/script>\n',C='\n<template>\n   <b-button-toolbar\n      class="demo-inline-spacing"\n      aria-label="Toolbar with button groups and input groups"\n    >\n      <b-button-group size="sm">\n        <b-button\n          v-ripple.400="\'rgba(113, 102, 240, 0.15)\'"\n          variant="outline-primary"\n        >\n          Save\n        </b-button>\n        <b-button\n          v-ripple.400="\'rgba(113, 102, 240, 0.15)\'"\n          variant="outline-primary"\n        >\n          Cancel\n        </b-button>\n      </b-button-group>\n      <b-input-group\n        size="sm"\n        append=".00"\n        prepend="$"\n      >\n        <b-form-input\n          value="100"\n          class="text-right"\n        />\n      </b-input-group>\n  </b-button-toolbar>\n</template>\n\n<script>\nimport {\n  BButtonToolbar, BButtonGroup, BButton, BFormInput, BInputGroup,\n} from \'bootstrap-vue\'\nimport Ripple from \'vue-ripple-directive\'\n\nexport default {\n  components: {\n    BButtonToolbar,\n    BButtonGroup,\n    BButton,\n    BFormInput,\n    BInputGroup,\n  },\n  directives: {\n    Ripple,\n  },\n}\n<\/script>\n',T='\n<template>\n  <b-button-toolbar aria-label="Toolbar with button groups and dropdown menu">\n    <b-button-group>\n      <b-button\n        v-ripple.400="\'rgba(255, 255, 255, 0.15)\'"\n        variant="primary"\n      >\n        New\n      </b-button>\n      <b-button\n        v-ripple.400="\'rgba(255, 255, 255, 0.15)\'"\n        variant="primary"\n      >\n        Edit\n      </b-button>\n      <b-button\n        v-ripple.400="\'rgba(255, 255, 255, 0.15)\'"\n        variant="primary"\n      >\n        Undo\n      </b-button>\n    </b-button-group>\n    <b-dropdown\n      v-ripple.400="\'rgba(255, 255, 255, 0.15)\'"\n      class="mx-1"\n      right\n      text="menu"\n      variant="primary"\n    >\n      <b-dropdown-item>Item 1</b-dropdown-item>\n      <b-dropdown-item>Item 2</b-dropdown-item>\n      <b-dropdown-item>Item 3</b-dropdown-item>\n    </b-dropdown>\n    <b-button-group>\n      <b-button\n        v-ripple.400="\'rgba(255, 255, 255, 0.15)\'"\n        variant="primary"\n      >\n        Save\n      </b-button>\n      <b-button\n        v-ripple.400="\'rgba(255, 255, 255, 0.15)\'"\n        variant="primary"\n      >\n        Cancel\n      </b-button>\n    </b-button-group>\n  </b-button-toolbar>\n</template>\n\n<script>\nimport {\n  BButtonToolbar, BButtonGroup, BButton, BDropdown, BDropdownItem,\n} from \'bootstrap-vue\'\nimport Ripple from \'vue-ripple-directive\'\n\nexport default {\n  components: {\n    BButtonToolbar,\n    BButtonGroup,\n    BButton,\n    BDropdown,\n    BDropdownItem,\n  },\n  directives: {\n    Ripple,\n  },\n}\n<\/script>\n',S='\n<template>\n  <div>\n     <b-button-toolbar>\n      <b-button-group\n        size="lg"\n      >\n        <b-button\n          v-ripple.400="\'rgba(255, 255, 255, 0.15)\'"\n          variant="primary"\n        >\n          First\n        </b-button>\n        <b-button\n          v-ripple.400="\'rgba(255, 255, 255, 0.15)\'"\n          variant="primary"\n        >\n          Second\n        </b-button>\n        <b-button\n          v-ripple.400="\'rgba(255, 255, 255, 0.15)\'"\n          variant="primary"\n        >\n          Third\n        </b-button>\n      </b-button-group>\n    </b-button-toolbar>\n\n    <b-button-toolbar>\n      <b-button-group\n        class="my-1"\n      >\n        <b-button\n          v-ripple.400="\'rgba(255, 255, 255, 0.15)\'"\n          variant="primary"\n        >\n          First\n        </b-button>\n        <b-button\n          v-ripple.400="\'rgba(255, 255, 255, 0.15)\'"\n          variant="primary"\n        >\n          Second\n        </b-button>\n        <b-button\n          v-ripple.400="\'rgba(255, 255, 255, 0.15)\'"\n          variant="primary"\n        >\n          Third\n        </b-button>\n      </b-button-group>\n    </b-button-toolbar>\n\n    <b-button-toolbar>\n      <b-button-group\n        size="sm"\n      >\n        <b-button\n          v-ripple.400="\'rgba(255, 255, 255, 0.15)\'"\n          variant="primary"\n        >\n          First\n        </b-button>\n        <b-button\n          v-ripple.400="\'rgba(255, 255, 255, 0.15)\'"\n          variant="primary"\n        >\n          Second\n        </b-button>\n        <b-button\n          v-ripple.400="\'rgba(255, 255, 255, 0.15)\'"\n          variant="primary"\n        >\n          Third\n        </b-button>\n      </b-button-group>\n    </b-button-toolbar>\n  </div>\n</template>\n\n<script>\nimport { BButtonToolbar, BButtonGroup, BButton } from \'bootstrap-vue\'\nimport Ripple from \'vue-ripple-directive\'\n\nexport default {\n  components: {\n    BButtonToolbar,\n    BButtonGroup,\n    BButton,\n  },\n  directives: {\n    Ripple,\n  },\n}\n<\/script>\n',I='\n<template>\n  <b-button-toolbar justify>\n    <b-button-group\n      class="mr-2 mb-1"\n      vertical\n    >\n      <b-button\n        v-ripple.400="\'rgba(255, 255, 255, 0.15)\'"\n        variant="primary"\n      >\n        Button\n      </b-button>\n      <b-button\n        v-ripple.400="\'rgba(255, 255, 255, 0.15)\'"\n        variant="primary"\n      >\n        Button\n      </b-button>\n      <b-button\n        v-ripple.400="\'rgba(255, 255, 255, 0.15)\'"\n        variant="primary"\n      >\n        Button\n      </b-button>\n      <b-button\n        v-ripple.400="\'rgba(255, 255, 255, 0.15)\'"\n        variant="primary"\n      >\n        Button\n      </b-button>\n      <b-button\n        v-ripple.400="\'rgba(255, 255, 255, 0.15)\'"\n        variant="primary"\n      >\n        Button\n      </b-button>\n      <b-button\n        v-ripple.400="\'rgba(255, 255, 255, 0.15)\'"\n        variant="primary"\n      >\n        Button\n      </b-button>\n    </b-button-group>\n    <b-button-group\n      class="mr-2 mb-1"\n      vertical\n    >\n      <b-button\n        v-ripple.400="\'rgba(255, 255, 255, 0.15)\'"\n        variant="primary"\n      >\n        Primary\n      </b-button>\n      <b-button\n        v-ripple.400="\'rgba(255, 255, 255, 0.15)\'"\n        variant="secondary"\n      >\n        Secondary\n      </b-button>\n      <b-button\n        v-ripple.400="\'rgba(255, 255, 255, 0.15)\'"\n        variant="success"\n      >\n        Success\n      </b-button>\n      <b-button\n        v-ripple.400="\'rgba(255, 255, 255, 0.15)\'"\n        variant="warning"\n      >\n        Warning\n      </b-button>\n      <b-button\n        v-ripple.400="\'rgba(255, 255, 255, 0.15)\'"\n        variant="danger"\n      >\n        Danger\n      </b-button>\n      <b-button\n        v-ripple.400="\'rgba(255, 255, 255, 0.15)\'"\n        variant="info"\n      >\n        Info\n      </b-button>\n    </b-button-group>\n    <b-button-group\n      class="mb-1"\n      vertical\n    >\n      <b-button\n        v-ripple.400="\'rgba(113, 102, 240, 0.15)\'"\n        variant="outline-primary"\n      >\n        Button\n      </b-button>\n      <b-button\n        v-ripple.400="\'rgba(113, 102, 240, 0.15)\'"\n        variant="outline-secondary"\n      >\n        Button\n      </b-button>\n      <b-button\n        v-ripple.400="\'rgba(40, 199, 111, 0.15)\'"\n        variant="outline-success"\n      >\n        Button\n      </b-button>\n      <b-button\n        v-ripple.400="\'rgba(255, 159, 67, 0.15)\'"\n        variant="outline-warning"\n      >\n        Button\n      </b-button>\n      <b-button\n        v-ripple.400="\'rgba(234, 84, 85, 0.15)\'"\n        variant="outline-danger"\n      >\n        Button\n      </b-button>\n      <b-button\n        v-ripple.400="\'rgba(0, 207, 232, 0.15)\'"\n        variant="outline-info"\n      >\n        Button\n      </b-button>\n    </b-button-group>\n  </b-button-toolbar>\n</template>\n\n<script>\nimport { BButtonToolbar, BButtonGroup, BButton } from \'bootstrap-vue\'\nimport Ripple from \'vue-ripple-directive\'\n\nexport default {\n  components: {\n    BButtonToolbar,\n    BButtonGroup,\n    BButton,\n  },\n  directives: {\n    Ripple,\n  },\n}\n<\/script>\n',P={components:{BButtonToolbar:y,BButtonGroup:O["a"],BButton:j["a"],BCardText:B["a"],BCardCode:w["a"]},directives:{Ripple:x["a"]},data:function(){return{codeNavigation:_}}},D=P,N=e("2877"),$=Object(N["a"])(D,u,b,!1,null,null,null),V=$.exports,R=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("b-card-code",{attrs:{title:"Button Toolbar with Input"},scopedSlots:t._u([{key:"code",fn:function(){return[t._v(" "+t._s(t.codeInput)+" ")]},proxy:!0}])},[e("b-button-toolbar",{staticClass:"demo-inline-spacing",attrs:{"aria-label":"Toolbar with button groups and input groups"}},[e("b-button-group",{attrs:{size:"sm"}},[e("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-primary"}},[t._v(" Save ")]),e("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-primary"}},[t._v(" Cancel ")])],1),e("b-input-group",{attrs:{size:"sm",append:".00",prepend:"$"}},[e("b-form-input",{staticClass:"text-right",attrs:{value:"100"}})],1)],1)],1)},k=[],z=e("4797"),F=e("5e12"),E={components:{BButtonToolbar:y,BButtonGroup:O["a"],BButton:j["a"],BFormInput:z["a"],BInputGroup:F["a"],BCardCode:w["a"]},directives:{Ripple:x["a"]},data:function(){return{codeInput:C}}},W=E,G=Object(N["a"])(W,R,k,!1,null,null,null),L=G.exports,M=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("b-card-code",{attrs:{title:"Button Toolbar with Dropdown"},scopedSlots:t._u([{key:"code",fn:function(){return[t._v(" "+t._s(t.codeDropdown)+" ")]},proxy:!0}])},[e("b-button-toolbar",{staticClass:"demo-inline-spacing",attrs:{"aria-label":"Toolbar with button groups and dropdown menu"}},[e("b-button-group",[e("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-primary"}},[t._v(" New ")]),e("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-primary"}},[t._v(" Edit ")]),e("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-primary"}},[t._v(" Undo ")])],1),e("b-dropdown",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],attrs:{right:"",text:"menu",variant:"outline-primary"}},[e("b-dropdown-item",[t._v("Item 1")]),e("b-dropdown-item",[t._v("Item 2")]),e("b-dropdown-item",[t._v("Item 3")])],1),e("b-button-group",[e("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-primary"}},[t._v(" Save ")]),e("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-primary"}},[t._v(" Cancel ")])],1)],1)],1)},A=[],q=e("dd9a"),J=e("9eaa"),H={components:{BButtonToolbar:y,BButtonGroup:O["a"],BButton:j["a"],BDropdown:q["a"],BCardCode:w["a"],BDropdownItem:J["a"]},directives:{Ripple:x["a"]},data:function(){return{codeDropdown:T}}},K=H,U=Object(N["a"])(K,M,A,!1,null,null,null),Q=U.exports,X=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("b-card-code",{attrs:{title:"Size"},scopedSlots:t._u([{key:"code",fn:function(){return[t._v(" "+t._s(t.codeSize)+" ")]},proxy:!0}])},[e("b-card-text",[e("span",[t._v("If you want smaller or larger buttons or controls, set the size prop directly on the ")]),e("code",[t._v("<b-button-group>")]),e("span",[t._v(", ")]),e("code",[t._v("<b-input-group>")]),e("span",[t._v(", and ")]),e("code",[t._v("<b-dropdown>")]),e("span",[t._v(" components")])]),e("b-button-toolbar",[e("b-button-group",{attrs:{size:"lg"}},[e("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-primary"}},[t._v(" First ")]),e("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-primary"}},[t._v(" Second ")]),e("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-primary"}},[t._v(" Third ")])],1)],1),e("b-button-toolbar",[e("b-button-group",{staticClass:"my-1"},[e("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-primary"}},[t._v(" First ")]),e("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-primary"}},[t._v(" Second ")]),e("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-primary"}},[t._v(" Third ")])],1)],1),e("b-button-toolbar",[e("b-button-group",{attrs:{size:"sm"}},[e("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-primary"}},[t._v(" First ")]),e("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-primary"}},[t._v(" Second ")]),e("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-primary"}},[t._v(" Third ")])],1)],1)],1)},Y=[],Z={components:{BButtonToolbar:y,BButtonGroup:O["a"],BButton:j["a"],BCardText:B["a"],BCardCode:w["a"]},directives:{Ripple:x["a"]},data:function(){return{codeSize:S}}},tt=Z,nt=Object(N["a"])(tt,X,Y,!1,null,null,null),et=nt.exports,rt=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("b-card-code",{attrs:{title:"Justify"},scopedSlots:t._u([{key:"code",fn:function(){return[t._v(" "+t._s(t.codeJustify)+" ")]},proxy:!0}])},[e("b-card-text",[e("span",[t._v("Make the toolbar span the maximum available width, by increasing spacing between the button groups, input groups and dropdowns, by setting the prop ")]),e("code",[t._v("justify")]),e("span",[t._v(".")])]),e("b-button-toolbar",{attrs:{justify:""}},[e("b-button-group",{staticClass:"mr-2 mb-1"},[e("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-primary"}},[t._v(" Button ")]),e("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-primary"}},[t._v(" Button ")]),e("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-primary"}},[t._v(" Button ")])],1),e("b-button-group",{staticClass:"mr-2 mb-1"},[e("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-primary"}},[e("feather-icon",{attrs:{icon:"HomeIcon"}})],1),e("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-primary"}},[e("feather-icon",{attrs:{icon:"SearchIcon"}})],1),e("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-primary"}},[e("feather-icon",{attrs:{icon:"BellIcon"}})],1),e("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-primary"}},[e("feather-icon",{attrs:{icon:"ShoppingCartIcon"}})],1)],1)],1)],1)},ot=[],at={components:{BButtonToolbar:y,BButtonGroup:O["a"],BCardText:B["a"],BButton:j["a"],BCardCode:w["a"]},directives:{Ripple:x["a"]},data:function(){return{codeJustify:I}}},it=at,ut=Object(N["a"])(it,rt,ot,!1,null,null,null),bt=ut.exports,pt={components:{BRow:a["a"],BCol:i["a"],ButtonToolbarNavigation:V,ButtonToolbarInput:L,ButtonToolbarDropdown:Q,ButtonToolbarSize:et,ButtonToolbarJustify:bt}},ct=pt,st=Object(N["a"])(ct,r,o,!1,null,null,null);n["default"]=st.exports},dde7:function(t,n,e){"use strict";e.d(n,"b",(function(){return b})),e.d(n,"a",(function(){return p}));var r=e("2b0e"),o=e("a723"),a=e("906c"),i=e("cf75"),u="input, textarea, select",b=Object(i["d"])({autofocus:Object(i["c"])(o["g"],!1),disabled:Object(i["c"])(o["g"],!1),form:Object(i["c"])(o["u"]),id:Object(i["c"])(o["u"]),name:Object(i["c"])(o["u"]),required:Object(i["c"])(o["g"],!1)},"formControls"),p=r["default"].extend({props:b,mounted:function(){this.handleAutofocus()},activated:function(){this.handleAutofocus()},methods:{handleAutofocus:function(){var t=this;this.$nextTick((function(){Object(a["B"])((function(){var n=t.$el;t.autofocus&&Object(a["u"])(n)&&(Object(a["v"])(n,u)||(n=Object(a["C"])(u,n)),Object(a["d"])(n))}))}))}}})}}]);
//# sourceMappingURL=chunk-455d6042.a7a813ce.js.map