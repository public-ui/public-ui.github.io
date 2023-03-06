/*! For license information please see 3239.533184b8.js.LICENSE.txt */
"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[3239],{8397:(t,e,o)=>{o.d(e,{w:()=>n});var a=o(29091);const n=(t,e,o)=>{(0,a.a)(t,e,(t=>"top"===t||"right"===t||"bottom"===t||"left"===t),new Set(["Alignment {top, right, buttom, left}"]),o,{defaultValue:"top"})}},88428:(t,e,o)=>{o.d(e,{a:()=>n,w:()=>i});var a=o(29091);const n=(t,e,o)=>{(0,a.a)(t,e,(t=>"button"===t||"reset"===t||"submit"===t),new Set(["KoliBriButtonType {button, reset, submit}"]),o)},i=(t,e,o)=>{(0,a.a)(t,e,(t=>"primary"===t||"secondary"===t||"normal"===t||"danger"===t||"ghost"===t||"custom"===t),new Set(["KoliBriButtonVariant {primary, secondary, normal, danger, ghost, custom}"]),o,{defaultValue:"normal"})}},21077:(t,e,o)=>{o.r(e),o.d(e,{kol_pagination:()=>p});var a=o(8222),n=o(8397),i=o(3160),s=o(29091),r=o(88428),l=o(90283),c=o(6621);const h={left:"fa-solid fa-angles-left"},u={left:"fa-solid fa-angle-left"},d={right:"fa-solid fa-angle-right"},g={right:"fa-solid fa-angles-right"},p=class{constructor(t){(0,a.r)(this,t),this.nonce=(0,i.n)(),this.calcCount=(t,e=1)=>Math.ceil(t/e),this.getCount=()=>this.calcCount(this.state._total,this.state._pageSize),this.onClick=(t,e)=>{"function"==typeof this.state._on.onClick&&this.state._on.onClick(t,e),this.onChangePage(t,e)},this.onChangePage=(t,e)=>{const o=setTimeout((()=>{clearTimeout(o),"function"==typeof this.state._on.onChangePage&&this.state._on.onChangePage(t,e)}))},this.onChangePageSize=(t,e)=>{if("number"==typeof(e=parseInt(e[0]))&&e>0&&this._pageSize!==e){this._pageSize=e;const o=setTimeout((()=>{clearTimeout(o),"function"==typeof this.state._on.onChangePageSize&&this.state._on.onChangePageSize(t,this._pageSize)}))}},this.onGoToFirst={onClick:t=>{this.onClick(t,1)}},this.onGoToEnd={onClick:t=>{this.onClick(t,this.getCount())}},this.onGoBackward={onClick:t=>{this.onClick(t,this.state._page-1)}},this.onGoForward={onClick:t=>{this.onClick(t,this.state._page+1)}},this.beforePageSize=(t,e)=>{let o=e.has("_pageSize")?e.get("_pageSize"):this.state._pageSize;const a=e.has("_pageSizeOptions")?e.get("_pageSizeOptions"):this.state._pageSizeOptions;if(Array.isArray(a)&&a.length>0){const t=a.find((t=>t.value===o));o=void 0===t?a[0].value:t.value,e.set("_pageSize",o)}const n=e.has("_page")?e.get("_page"):this.state._page,i=e.has("_total")?e.get("_total"):this.state._total;this.syncPage(e,n,e.get("_pageSize"),i)},this.syncPage=(t,e,o,a)=>{if(a>0){const n=this.calcCount(a,o);n>0&&(e>n?(t.set("_page",n),this.onChangePage(l.S,n)):e<1&&(t.set("_page",1),this.onChangePage(l.S,1)))}},this.beforePageSizeOptions=(t,e)=>{const o=[];if(Array.isArray(t))for(const a of t)"number"==typeof a&&o.push({label:(0,c.a)("kol-page-per-site",{placeholders:{entries:`${a}`}}),value:a});e.set("_pageSizeOptions",o),this.beforePageSize(o,e)},this._boundaryCount=1,this._customClass=void 0,this._hasButtons=void 0,this._page=void 0,this._pageSize=1,this._pageSizeOptions=[],this._on=void 0,this._siblingCount=1,this._tooltipAlign="top",this._total=void 0,this._variant="normal",this.state={_boundaryCount:1,_hasButtons:{first:!0,last:!0,next:!0,previous:!0},_on:{onClick:()=>null},_page:0,_pageSize:1,_pageSizeOptions:[],_siblingCount:1,_total:0,_variant:"normal"}}render(){var t;let e=!1;const o=this.getCount(),n=Array.from(Array(o).keys()).map((t=>t+1)).map((t=>t<=this.state._boundaryCount||t>o-this.state._boundaryCount||t>=this.state._page-this.state._siblingCount&&t<=this.state._page+this.state._siblingCount?(e=!0,this.state._page===t?this.getSelectedPageButton(t):this.getUnselectedPageButton(t)):!0===e?(e=!1,(0,a.h)("span",{key:`${this.nonce}-el-${t}`},"\u2022\u2022\u2022")):null));return(0,a.h)(a.H,null,(0,a.h)("div",null,this.state._hasButtons.first&&(0,a.h)("kol-button",{_customClass:this.state._customClass,_disabled:this.state._page<=1,_icon:h,_iconOnly:!0,_label:(0,c.a)("kol-page-first"),_on:this.onGoToFirst,_variant:this.state._variant,_tooltipAlign:this.state._tooltipAlign}),this.state._hasButtons.previous&&(0,a.h)("kol-button",{_customClass:this.state._customClass,_disabled:this.state._page<=1,_icon:u,_iconOnly:!0,_label:(0,c.a)("kol-page-back"),_on:this.onGoBackward,_variant:this.state._variant,_tooltipAlign:this.state._tooltipAlign}),n,this.state._hasButtons.next&&(0,a.h)("kol-button",{_customClass:this.state._customClass,_disabled:o<=this.state._page,_icon:d,_iconOnly:!0,_label:(0,c.a)("kol-page-next"),_on:this.onGoForward,_variant:this.state._variant,_tooltipAlign:this.state._tooltipAlign}),this.state._hasButtons.last&&(0,a.h)("kol-button",{_customClass:this.state._customClass,_disabled:o<=this.state._page,_icon:g,_iconOnly:!0,_label:(0,c.a)("kol-page-last"),_on:this.onGoToEnd,_variant:this.state._variant,_tooltipAlign:this.state._tooltipAlign})),(null===(t=this.state._pageSizeOptions)||void 0===t?void 0:t.length)>0&&(0,a.h)("kol-select",{_hideLabel:!0,_id:"pagination-size",_list:this.state._pageSizeOptions,_on:{onChange:this.onChangePageSize},_value:[this.state._pageSize]},(0,c.a)("kol-entries-per-site")))}getUnselectedPageButton(t){return(0,a.h)("kol-button",{key:`${this.nonce}-${t}`,_customClass:this.state._customClass,_ariaLabel:(0,c.a)("kol-page-current",{placeholders:{page:t.toFixed(0)}}),_label:`${t}`,_on:{onClick:e=>{this.onClick(e,t)}},_variant:this.state._variant})}getSelectedPageButton(t){return(0,a.h)("kol-button-wc",{class:"selected",key:`${this.nonce}-selected`,_customClass:this.state._customClass,_disabled:!0,_ariaCurrent:!0,_ariaLabel:(0,c.a)("kol-page-selected",{placeholders:{page:t.toFixed(0)}}),_label:`${t}`,_variant:this.state._variant})}validateBoundaryCount(t){(0,s.e)(this,"_boundaryCount",Math.max(0,null!=t?t:1))}validateCustomClass(t){(0,s.w)(this,"_customClass",t,{defaultValue:void 0})}validateHasButtons(t){(0,s.a)(this,"_hasButtons",(t=>"boolean"==typeof t||"string"==typeof t||"object"==typeof t&&null!==t),new Set(["Boolean","PaginationHasButton"]),t,{hooks:{beforePatch:(t,e)=>{if("boolean"==typeof t)e.set("_hasButtons",{first:t,last:t,next:t,previous:t});else{if("string"==typeof t)try{t=(0,s.p)(t)}catch(t){e.delete("_hasButtons")}"object"==typeof t&&null!==t&&e.set("_hasButtons",Object.assign(Object.assign({},this.state._hasButtons),{first:"boolean"==typeof t.first?!0===t.first:this.state._hasButtons.first,last:"boolean"==typeof t.last?!0===t.last:this.state._hasButtons.last,next:"boolean"==typeof t.next?!0===t.next:this.state._hasButtons.next,previous:"boolean"==typeof t.previous?!0===t.previous:this.state._hasButtons.previous}))}}}})}validateOn(t){"object"==typeof t&&null!==t&&(this.state=Object.assign(Object.assign({},this.state),{_on:t}))}validatePage(t){(0,s.e)(this,"_page",t,{hooks:{beforePatch:(t,e)=>{const o=e.has("_pageSize")?e.get("_pageSize"):this.state._pageSize,a=e.has("_total")?e.get("_total"):this.state._total;this.syncPage(e,t,o,a)}}})}validatePageSize(t){(0,s.e)(this,"_pageSize",t,{hooks:{beforePatch:this.beforePageSize}})}validatePageSizeOptions(t){(0,s.d)(this,"_pageSizeOptions",(t=>"number"==typeof t),t,void 0,{hooks:{beforePatch:this.beforePageSizeOptions}})}validateSiblingCount(t){(0,s.e)(this,"_siblingCount",Math.max(0,null!=t?t:1))}validateTotal(t){(0,s.e)(this,"_total",t,{hooks:{beforePatch:(t,e)=>{const o=e.has("_page")?e.get("_page"):this.state._page,a=e.has("_pageSize")?e.get("_pageSize"):this.state._pageSize;this.syncPage(e,o,a,t)}}})}validateTooltipAlign(t){(0,n.w)(this,"_tooltipAlign",t)}validateVariant(t){(0,r.w)(this,"_variant",t)}componentWillLoad(){this.validateBoundaryCount(this._boundaryCount),this.validateCustomClass(this._customClass),this.validateHasButtons(this._hasButtons),this.validateOn(this._on),this.validatePage(this._page),this.validatePageSize(this._pageSize),this.validatePageSizeOptions(this._pageSizeOptions),this.validateSiblingCount(this._siblingCount),this.validateTooltipAlign(this._tooltipAlign),this.validateTotal(this._total),this.validateVariant(this._variant),this.validatePage(this._page)}static get watchers(){return{_boundaryCount:["validateBoundaryCount"],_customClass:["validateCustomClass"],_hasButtons:["validateHasButtons"],_on:["validateOn"],_page:["validatePage"],_pageSize:["validatePageSize"],_pageSizeOptions:["validatePageSizeOptions"],_siblingCount:["validateSiblingCount"],_total:["validateTotal"],_tooltipAlign:["validateTooltipAlign"],_variant:["validateVariant"]}}};p.style={default:":host{--kolibri-border-color:#666;--kolibri-border-radius:0.125rem;--kolibri-border-width:1px;--kolibri-color-error:#f44336;--kolibri-color-info:#2196f3;--kolibri-color-success:#4caf50;--kolibri-color-warning:#ff9800;--kolibri-color-primary:#3f51b5;--kolibri-color-secondary:#ff4081;--kolibri-color-normal:#9e9e9e;--kolibri-color-danger:#f44336;--kolibri-color-ghost:#f5f5f5;--kolibri-color-disabled:#bdbdbd;--kolibri-color-text:#222222;--kolibri-color-visited:#9c27b0;--kolibri-font-family:Verdana, Arial, Tahoma, Helvetica, sans-serif;--kolibri-font-size:16px;--kolibri-spacing:0.25rem}:host{font-family:inherit;font-size:inherit}:host *{hyphens:auto;letter-spacing:inherit;word-break:break-word;word-spacing:inherit}:host{display:inline-block}a,button{background-color:transparent;border:none;font-size:inherit;margin:0;padding:0;transition-duration:0.5s;transition-property:background-color, color, border-color}:host{font-family:var(--kolibri-font-family);font-size:inherit}*{box-sizing:border-box}kol-icon{color:inherit}kol-span-wc{display:grid;gap:var(--kolibri-spacing);place-items:center}kol-span-wc>span{display:flex;gap:var(--kolibri-spacing);place-items:center}kol-span-wc>kol-icon,kol-span-wc>span>kol-icon{display:inline-grid;place-items:center;width:1em;height:1em}a,button,input,select,textarea{appearance:none;cursor:pointer}a.icon-only>kol-span-wc>span>span,button.icon-only>kol-span-wc>span>span{display:none}h1,h2,h3,h4,h5,h6{font-family:var(--kolibri-font-family);font-size:var(--kolibri-font-size);margin:0;padding:0}"}},29091:(t,e,o)=>{o.d(e,{K:()=>ot,a:()=>L,b:()=>T,c:()=>z,d:()=>H,e:()=>E,f:()=>B,g:()=>O,h:()=>V,i:()=>tt,j:()=>G,k:()=>I,l:()=>et,m:()=>D,n:()=>Q,o:()=>A,p:()=>R,q:()=>K,r:()=>c,s:()=>N,t:()=>X,u:()=>F,w:()=>M});var a=o(74975),n=o(47908),i=o(3160);const s=(t,e)=>{e.forEach((e=>{!1===t.has(e)&&t.add(e)}))},r=(t,e=document)=>{if(e instanceof Document||e instanceof HTMLElement||e instanceof ShadowRoot){const o=new Set;s(o,e.querySelectorAll(t));const a=e.querySelectorAll('[class*="hydrated"]');for(let e=0;e<a.length;e++){const n=a[e].shadowRoot;s(o,r(t,"object"==typeof n&&null!==n?n:a[e]))}return Array.from(o)}throw new Error("The parameter document for the method querySelectorAll is not type of Document, HTMLElement or ShadowRoot.")},l=(t,e=document)=>{if(e instanceof Document||e instanceof HTMLElement||e instanceof ShadowRoot){let o=e.querySelector(t);if(null===o){const a=e.querySelectorAll('[class*="hydrated"]');for(let e=0;e<a.length;e++){const n=a[e].shadowRoot;if(o=l(t,"object"==typeof n&&null!==n?n:a[e]),null!==o)break}}return o}throw new Error("The parameter document for the method querySelector is not type of Document, HTMLElement or ShadowRoot.")};var c=f,h=f,u=function(t){var e=b(t);return{r:e[0],g:e[1],b:e[2],a:3==e.length?255:Math.round(e[3])}},d=function(t){var e=b(t);return 3==e.length&&e.push(255),255==e[3]?"rgb("+e[0]+", "+e[1]+", "+e[2]+")":0==e[3]?"rgba("+e[0]+", "+e[1]+", "+e[2]+", 0)":"rgba("+e[0]+", "+e[1]+", "+e[2]+", "+String(e[3]/255).substr(1)+")"},g=function(t){3==(e=b(t)).length&&e.push(255);var e,o=255==e[3],a=_(e[0]),n=_(e[1]),i=_(e[2]),s=function(t,e,o,a){var n=["ff","00","11","22","33","44","55","66","77","88","99","aa","bb","cc","dd","ee"];return-1!=n.indexOf(t)&&-1!=n.indexOf(e)&&-1!=n.indexOf(o)&&-1!=n.indexOf(a)}(a,n,i,e=_(Math.round(e[3])));return o?s?"#"+a.charAt(0)+n.charAt(0)+i.charAt(0):"#"+a+n+i:s?"#"+a.charAt(0)+n.charAt(0)+i.charAt(0)+e.charAt(0):"#"+a+n+i+e},p=function(t){var e=b(t);return 3==e.length?e.push(255):e[3]=Math.round(e[3]),(e[3]<<24>>>0|e[0]<<16|e[1]<<8|e[2])>>>0};function f(t){var e=b(t);return 3==e.length?e.concat(255):(e[3]=Math.round(e[3]),e)}function b(t){return"string"==typeof t?function(t){return"red"==t?[255,0,0]:"green"==t?[0,255,0]:"blue"==t?[0,0,255]:"black"==t?[0,0,0]:"white"==t?[255,255,255]:"cyan"==t?[0,255,255]:"gray"==t||"grey"==t?[128,128,128]:"magenta"==t||"pink"==t?[255,0,255]:"yellow"==t?[255,255,0]:void 0}(t=t.toLowerCase())||function(t){var e=t.replace(/^#/,""),o=e.length;if(3==o||4==o){var a=m(e[0]),n=m(e[1]),i=m(e[2]),s=3==o?255:m(e[3]);if(isNaN(a)||isNaN(n)||isNaN(i)||isNaN(s))return;return[a,n,i,s]}}(t)||function(t){var e=t.replace(/^#/,""),o=e.length;if(6==o||8==o){var a=m(e.slice(0,2)),n=m(e.slice(2,4)),i=m(e.slice(4,6)),s=6==o?255:m(e.slice(6,8));if(isNaN(a)||isNaN(n)||isNaN(i)||isNaN(s))return;return[a,n,i,s]}}(t)||function(t){if("rgb("==t.substr(0,4)){var e=(t=t.match(/^rgb\(([^)]+)\)/)[1]).split(/ *, */).map(Number),o=v(e[0],!0),a=v(e[1],!0),n=v(e[2],!0);if(-1!=o&&-1!=a&&-1!=n)return[o,a,n,255]}}(t)||function(t){if("rgba("==t.substr(0,5)){var e=(t=t.match(/^rgba\(([^)]+)\)/)[1]).split(/ *, */).map(Number),o=v(e[0],!0),a=v(e[1],!0),n=v(e[2],!0),i=v(255*e[3]);if(-1!=o&&-1!=a&&-1!=n&&-1!=i)return[o,a,n,i]}}(t)||[0,0,0,255]:function(t){if("[object Object]"===Object.prototype.toString.call(t)&&Object.getPrototypeOf(t)===Object.getPrototypeOf({})){var e=v(null!=t.r?t.r:null!=t.red?t.red:0,!0),o=v(null!=t.g?t.g:null!=t.green?t.green:0,!0),a=v(null!=t.b?t.b:null!=t.blue?t.blue:0,!0),n=v(null!=t.a?t.a:null!=t.alpha?t.alpha:255,!0);if(-1!=e&&-1!=o&&-1!=a&&-1!=n)return[e,o,a,n]}}(t)||function(t){if(Array.isArray(t)&&(3==t.length||4==t.length)){var e=v(t[0],!0),o=v(t[1],!0),a=v(t[2],!0),n=v(null!=t[3]?t[3]:255,!0);if(-1!=e&&-1!=o&&-1!=a&&-1!=n)return[e,o,a,n]}}(t)||function(t){if("number"==typeof t&&Math.floor(t)==t&&t<=4294967295&&t>=0)return[t>>16&255,t>>8&255,255&t,t>>24&255]}(t)||[0,0,0,255]}function _(t){var e=t.toString(16);return 1==e.length?"0"+e:e}function m(t){return 1==t.length?parseInt(t+t,16):parseInt(t,16)}function v(t,e){return"number"!=typeof t||!0===e&&Math.floor(t)!==t?-1:t>=0&&t<=255?t:-1}c.arr=h,c.obj=u,c.css=d,c.hex=g,c.num=p;var y=1/12.92;function k(t){return Math.pow((t+.055)/1.055,2.4)}function S(t){var e=t[0]/255,o=t[1]/255,a=t[2]/255;return.2126*(e<=.03928?e*y:k(e))+.7152*(o<=.03928?o*y:k(o))+.0722*(a<=.03928?a*y:k(a))}function C(t){var e=255;8===(t=t.replace(/^#/,"")).length&&(e=parseInt(t.slice(6,8),16),t=t.substring(0,6)),4===t.length&&(e=parseInt(t.slice(3,4).repeat(2),16),t=t.substring(0,3)),3===t.length&&(t=t[0]+t[0]+t[1]+t[1]+t[2]+t[2]);var o=parseInt(t,16);return[o>>16,o>>8&255,255&o,e]}function w(t,e){return function(t,e){return(Math.max(t,e)+.05)/(Math.min(t,e)+.05)}(S(t),S(e))}function z(t,e){return w(C(t),C(e))}function x(t){return t>=7?"AAA":t>=4.5?"AA":t>=3?"AA Large":"Fail"}const P=/\[object Object\]/,A=(t,e)=>{"string"==typeof t&&P.test(t)||e()},O=(t,e)=>{"string"==typeof t&&""===t||e()},B=(t,e)=>{(0,i.b)()&&(i.L.debug([t,e]),i.L.debug("\u2191 We propagate the (submit) event to this target.")),Object.defineProperty(t,"target",{value:e,writable:!1})},N=(t,e,o,a={})=>{var n,i;void 0===t.nextHooks&&(t.nextHooks=new Map),void 0===t.nextState&&(t.nextState=new Map),t.nextState.get(e)!==o&&(t.nextHooks.get(e)instanceof Map==0&&t.nextHooks.set(e,new Map),"function"==typeof a.afterPatch&&(null===(n=t.nextHooks.get(e))||void 0===n||n.set("afterPatch",a.afterPatch)),"function"==typeof a.beforePatch&&(null===(i=t.nextHooks.get(e))||void 0===i||i.set("beforePatch",a.beforePatch)),t.nextState.set(e,o),(t=>{var e,o,a;null===(e=t.nextHooks)||void 0===e||e.forEach(((e,o)=>{var a;const n=e.get("beforePatch");"function"==typeof n&&n(null===(a=t.nextState)||void 0===a?void 0:a.get(o),t.nextState,t,o)})),(null===(o=t.nextState)||void 0===o?void 0:o.size)>0&&(t.state=Object.assign(Object.assign({},t.state),Object.fromEntries(t.nextState)),delete t.nextState,null===(a=t.nextHooks)||void 0===a||a.forEach(((e,o)=>{const a=e.get("afterPatch");"function"==typeof a&&a(t.state[o],t.state,t,o)}))),delete t.nextHooks})(t))},L=(t,e,o,a,i,s={})=>{o(i)?N(t,e,i,null==s?void 0:s.hooks):void 0===i||null===i&&(void 0===(null==s?void 0:s.required)||!1===(null==s?void 0:s.required))?N(t,e,null==s?void 0:s.defaultValue,null==s?void 0:s.hooks):(void 0!==(null==s?void 0:s.required)&&!1!==(null==s?void 0:s.required)||a.add(null),((t,e,o,a)=>{(0,n.d)(`[${t.constructor.name}] Der Property-Wert (${o}) f\xfcr '${e}' ist nicht valide. Folgende Werte sind erlaubt: ${Array.from(a).join(", ")}`)})(t,e,i,a))},T=(t,e,o,a)=>{L(t,e,(t=>"boolean"==typeof t),new Set(["Boolean {true, false}"]),o,a)},M=(t,e,o,a={})=>{const n="number"==typeof a.minLength?null==a?void 0:a.minLength:0;L(t,e,(t=>"string"==typeof t&&t.length>=n&&(void 0===(null==a?void 0:a.maxLength)||t.length<=a.maxLength)),new Set(["String"]),o,a)},E=(t,e,o,a)=>{L(t,e,(t=>"number"==typeof t&&(void 0===(null==a?void 0:a.min)||"number"==typeof(null==a?void 0:a.min)&&t>=a.min)&&(void 0===(null==a?void 0:a.max)||"number"==typeof(null==a?void 0:a.max)&&t<=a.max)),new Set(["Number"]),o,a)},H=(t,e,o,a,n=(t=>t==t),s={})=>{O(a,(()=>{A(a,(()=>{void 0===a&&(a=[]);try{try{a=R(a)}catch(t){}if(Array.isArray(a)){const r=a.find((t=>!o(t)));void 0===r&&n(a)?N(t,e,a,s.hooks):A(r,(()=>{throw i.L.debug(r),new Error("\u2191 Das Schema f\xfcr das Property (_options) ist nicht valide. Der Wert wird nicht ge\xe4ndert.")}))}else A(a,(()=>{throw i.L.debug(a),new Error("\u2191 Das Schema f\xfcr das Property (_options) ist nicht valide. Der Wert wird nicht ge\xe4ndert.")}))}catch(t){i.L.debug(t)}}))}))},j=/^(true|false)$/,$=/^-?(0|[1-9]\d*)$/,q=/^-?(0.|[1-9]\d*.)\d*[1-9]$/,D=t=>{const e=typeof t,o=`${t}`;if("string"==typeof t)if(j.test(t))t="true"===t;else if($.test(t))t=parseInt(t);else if(q.test(t))t=parseFloat(t);else if(J.test(t))try{t=R(t)}catch(t){}return e!==typeof t&&(0,n.d)(`You have used a stringified property value (${o} to ${JSON.stringify(t)}) which type switched from ${e} to ${typeof t}!`),t},F=t=>{try{return JSON.stringify(t).replace(/"/g,"'")}catch(e){throw i.L.warn(["stringifyJson",t]),i.L.error("\u2191 Das JSON konnte nicht in einen String umgewandelt werden. Es wird ein stringifizierbares JSON erwartet."),new Error}},J=/^[{[]/,R=t=>{if("string"==typeof t)try{return JSON.parse(t)}catch(e){if(J.test(t))try{return JSON.parse(t.replace(/'/g,'"'))}catch(e){i.L.warn(["parseJson",t]),i.L.error("\u2191 Der JSON-String konnte nicht geparsed werden. Achten Sie darauf, dass einfache Anf\xfchrungszeichen im Text maskiert werden (&#8216;).")}}throw new Error},V=t=>"boolean"==typeof t?!0===t?"true":"false":void 0,G=t=>"string"==typeof t?t:V(t),I=(t,e)=>l(t,e||(0,i.g)()),K=(t,e)=>r(t,e||(0,i.g)());let W=null;const U=()=>(W=W||{backgroundColor:"#00000000",color:"#00000000",domNode:(0,i.g)().body,level:"Fail",score:1},W),Y=/(\d+, ){3}0\)/,Q=(t,e=U())=>{const o=getComputedStyle(t),a=Y.test(o.backgroundColor)?e.backgroundColor:c.hex(o.backgroundColor),n=Y.test(o.color)?e.color:c.hex(o.color),s=z(a,n),r={backgroundColor:a,color:n,domNode:t,level:x(s),score:s};return s<4.5&&i.L.error(["Color-Contrast-Error",{backgroundColor:r.backgroundColor,color:r.color,level:r.level,score:r.score},r.domNode]),r},X=(t,e=U())=>{e.domNode instanceof HTMLElement&&(e=Q(e.domNode,e));const o=e.domNode.querySelector(t);if(null===o){const o=e.domNode.querySelectorAll('[class="hydrated"]');for(let a=0;a<o.length&&(e.domNode=o[a],null===(e=X(t,e)).domNode);a++);return e}return Q(o,e)},Z=(t,e=window)=>{t instanceof HTMLElement?(e.scrollTo({behavior:"smooth",top:t.getBoundingClientRect().top+(0,i.a)().pageYOffset-50}),t.focus()):(0,n.d)("Das HTMLElement ist nicht valide, zu dem gescrollt werden soll.")},tt=(t,e)=>{if((t instanceof Document||t instanceof HTMLElement||t instanceof ShadowRoot)&&"string"==typeof e){(0,n.d)("Bei der Methode querySelectorAll wurden die Parameter document, selector in selector, document getauscht, da der Parameter selector nicht, allerdings der Parameter document optional sein kann.");const o=`${e}`;e=t,t=o}if("string"==typeof t){const o=I(t,e);o instanceof HTMLElement?Z(o):(0,n.d)(`Es konnte kein HTMLElement mit dem Selector (${t}) gefunden werden, zu dem gescrollt werden soll.`)}else(0,n.d)("Der Selector ist nicht valide, zu dem gescrollt werden soll.")};class et{static queryHtmlElementColors(t,e,o=!1,a=!0){let n=null;if(!0===o||!1===et.executionLock)if(!1===o&&(et.cache.clear(),et.cache.set(e.domNode,e),et.executionLock=!0,!0===a&&i.L.debug("[KoliBriUtils] Color contrast analysis started...")),t===e.domNode)n=e;else{const o=new Set;if(e.domNode.shadowRoot){const t=e.domNode.shadowRoot.children;for(let e=0;e<t.length;e++)o.add(t[e])}const a=e.domNode;if("function"==typeof a.assignedNodes){const t=a.assignedNodes();for(let e=0;e<t.length;e++)t[e]instanceof HTMLElement&&o.add(t[e])}const i=e.domNode.children;for(let t=0;t<i.length;t++)o.add(i[t]);const s=Array.from(o);for(let r=0;r<s.length;r++){let o=et.cache.get(s[r]);void 0===o&&(o=Q(s[r],e)),et.cache.set(s[r],o);const a=et.queryHtmlElementColors(t,o,!0,!1);if(null!==a){n=a;break}}}else i.L.debug("[KoliBriUtils] Call aborted because a color contrast analysis is currently being executed.");return!1===o&&(!0===a&&i.L.debug(`[KoliBriUtils] Color contrast analysis finished (${et.cache.size} DOM elements are analysed).`),et.executionLock=!1,et.cache.clear()),n}}et.executionLock=!1,et.cache=new Map;class ot{}ot.patchTheme=a.p,ot.patchThemeTag=a.a,ot.querySelector=I,ot.querySelectorAll=K,ot.scrollByHTMLElement=Z,ot.scrollBySelector=tt,ot.stringifyJson=F}}]);