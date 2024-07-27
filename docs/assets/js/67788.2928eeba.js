/*! For license information please see 67788.2928eeba.js.LICENSE.txt */
"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[67788],{46780:(e,t,o)=>{o.d(t,{v:()=>n});var r=o(70728);const n=(e,t,o)=>{(0,r.i)(e,"_src",t,o)}},67788:(e,t,o)=>{o.r(t),o.d(t,{kol_image:()=>l});var r=o(65224),n=o(70728),a=o(46780);const i=["eager","lazy"];const l=class{constructor(e){(0,r.r)(this,e),this._alt=void 0,this._loading="lazy",this._sizes=void 0,this._src=void 0,this._srcset=void 0,this.state={_alt:"",_loading:"lazy",_src:""}}validateAlt(e){(0,n.i)(this,"_alt",e,{required:!0})}validateLoading(e){!function(e,t){(0,n.w)(e,"_loading",(e=>"string"==typeof e&&i.includes(e)),new Set(i),t)}(this,e)}validateSizes(e){(0,n.i)(this,"_sizes",e)}validateSrc(e){(0,a.v)(this,e,{required:!0})}validateSrcset(e){(0,n.i)(this,"_srcset",e)}componentWillLoad(){this.validateAlt(this._alt),this.validateLoading(this._loading),this.validateSizes(this._sizes),this.validateSrc(this._src),this.validateSrcset(this._srcset)}render(){return(0,r.h)(r.H,{key:"eea8ad6a0b03687005b477fec030de58aa049891",class:"kol-image"},(0,r.h)("img",{key:"d00475bd0c8df6a965ae402879910a430231b4a1",alt:this.state._alt,loading:this.state._loading,sizes:this.state._sizes,src:this.state._src,srcset:this.state._srcset}))}static get watchers(){return{_alt:["validateAlt"],_loading:["validateLoading"],_sizes:["validateSizes"],_src:["validateSrc"],_srcset:["validateSrcset"]}}};l.style={default:"@layer kol-component {\n  :host {\n    display: inline-block;\n    font-size: calc(16rem / var(--kolibri-root-font-size, 16));\n  }\n  img {\n    max-height: 100%;\n    max-width: 100%;\n  }\n}"}},70728:(e,t,o)=>{o.d(t,{A:()=>de,B:()=>ie,C:()=>ue,D:()=>ee,K:()=>he,a:()=>i,b:()=>F,c:()=>b,d:()=>A,e:()=>p,f:()=>h,g:()=>Y,h:()=>y,i:()=>U,j:()=>d,k:()=>V,l:()=>u,m:()=>Z,n:()=>s,o:()=>J,p:()=>oe,q:()=>D,r:()=>H,s:()=>B,t:()=>I,u:()=>v,v:()=>ae,w:()=>W,x:()=>re,y:()=>ne,z:()=>fe});var r=o(44312),n=o(20444);const a=new Set,i=(e,t)=>{(!1===a.has(e)||(null==t?void 0:t.force))&&(a.add(e),n.L.debug([e].concat((null==t?void 0:t.details)||[]),{classifier:"\u270b a11y",forceLog:!!(null==t?void 0:t.force),overwriteStyle:"; background-color: #09f"}))},l=new Set,s=(e,t)=>{(!1===l.has(e)||(null==t?void 0:t.force))&&(l.add(e),n.L.warn([e].concat((null==t?void 0:t.details)||[]),{classifier:"\ud83d\udd25 deprecated",forceLog:!!(null==t?void 0:t.force),overwriteStyle:"; background-color: #f00"}))},c=new Set,d=(e,t)=>{(!1===c.has(e)||(null==t?void 0:t.force))&&(c.add(e),n.L.debug([e].concat((null==t?void 0:t.details)||[]),{classifier:"\ud83d\udcbb dev",forceLog:!!(null==t?void 0:t.force),overwriteStyle:"; background-color: #f09"}))},u=(e,t)=>{(!1===c.has(e)||(null==t?void 0:t.force))&&(c.add(e),n.L.warn([e].concat((null==t?void 0:t.details)||[]),{classifier:"\u26a0\ufe0f dev",forceLog:!!(null==t?void 0:t.force),overwriteStyle:"; background-color: #f09"}))},f=new Set,h=(e,t=!1,o)=>{(!1===f.has(e)||(null==o?void 0:o.force))&&(f.add(e),e+=!0===t?" \u2705":"",n.L.debug([e].concat((null==o?void 0:o.details)||[]),{classifier:"\ud83c\udf1f feature",forceLog:!!(null==o?void 0:o.force),overwriteStyle:"; background-color: #309"}))};d("We appreciate any feedback, comments, screenshots, or demo links of an application based on KoliBri (kolibri@itzbund.de). Thank you!");const g=new Set,v=(e,t)=>{(!1===g.has(e)||(null==t?void 0:t.force))&&(g.add(e),n.L.debug([e].concat((null==t?void 0:t.details)||[]),{classifier:"\ud83d\udcd1 ui/ux",forceLog:!!(null==t?void 0:t.force),overwriteStyle:"; background-color: #060;"}))},b=()=>{i('"Disabled" limits accessibility and visibility. From an accessibility perspective, we recommend using the readonly attribute instead of disabled.\n- https://uxdesign.cc/is-it-ok-to-grey-out-disabled-buttons-8afa74a0fae')},p=e=>{"string"==typeof e&&""!==e||i("Some structural elements, such as the nav tag, can be used multiple times on a webpage. To distinguish between similarly named structural elements, it is necessary to set an ARIA label.\n- https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/Navigation_Role#accessibility_concerns")},y=(e,t=8)=>{t>7&&v(`[${e}] Within navigation structures, it is recommended to use no more than 7 menu items.\n\nLink:\n- https://en.wikipedia.org/wiki/The_Magical_Number_Seven,_Plus_or_Minus_Two`)};var m=.2126,w=.7152,S=.0722,k=1/12.92;function x(e){return Math.pow((e+.055)/1.055,2.4)}function L(e){var t=e[0]/255,o=e[1]/255,r=e[2]/255,n=t<=.03928?t*k:x(t),a=o<=.03928?o*k:x(o),i=r<=.03928?r*k:x(r);return n*m+a*w+i*S}function N(e){var t=255;8===(e=e.replace(/^#/,"")).length&&(t=parseInt(e.slice(6,8),16),e=e.substring(0,6)),4===e.length&&(t=parseInt(e.slice(3,4).repeat(2),16),e=e.substring(0,3)),3===e.length&&(e=e[0]+e[0]+e[1]+e[1]+e[2]+e[2]);var o=parseInt(e,16);return[o>>16,o>>8&255,255&o,t]}function _(e,t){return function(e,t){return(Math.max(e,t)+.05)/(Math.min(e,t)+.05)}(L(e),L(t))}function A(e,t){return _(N(e),N(t))}function M(e){return e>=7?"AAA":e>=4.5?"AA":e>=3?"AA Large":"Fail"}var O={exports:{}};function T(e){var t=z(e);return 3==t.length?t.concat(255):(t[3]=Math.round(t[3]),t)}function z(e){return"string"==typeof e?function(e){return"red"==e?[255,0,0]:"green"==e?[0,255,0]:"blue"==e?[0,0,255]:"black"==e?[0,0,0]:"white"==e?[255,255,255]:"cyan"==e?[0,255,255]:"gray"==e||"grey"==e?[128,128,128]:"magenta"==e||"pink"==e?[255,0,255]:"yellow"==e?[255,255,0]:void 0}(e=e.toLowerCase())||function(e){var t=e.replace(/^#/,""),o=t.length;if(3==o||4==o){var r=E(t[0]),n=E(t[1]),a=E(t[2]),i=3==o?255:E(t[3]);if(isNaN(r)||isNaN(n)||isNaN(a)||isNaN(i))return;return[r,n,a,i]}}(e)||function(e){var t=e.replace(/^#/,""),o=t.length;if(6==o||8==o){var r=E(t.slice(0,2)),n=E(t.slice(2,4)),a=E(t.slice(4,6)),i=6==o?255:E(t.slice(6,8));if(isNaN(r)||isNaN(n)||isNaN(a)||isNaN(i))return;return[r,n,a,i]}}(e)||function(e){if("rgb("==e.substr(0,4)){var t=(e=e.match(/^rgb\(([^)]+)\)/)[1]).split(/ *, */).map(Number),o=q(t[0],!0),r=q(t[1],!0),n=q(t[2],!0);if(-1!=o&&-1!=r&&-1!=n)return[o,r,n,255]}}(e)||function(e){if("rgba("==e.substr(0,5)){var t=(e=e.match(/^rgba\(([^)]+)\)/)[1]).split(/ *, */).map(Number),o=q(t[0],!0),r=q(t[1],!0),n=q(t[2],!0),a=q(255*t[3]);if(-1!=o&&-1!=r&&-1!=n&&-1!=a)return[o,r,n,a]}}(e)||[0,0,0,255]:function(e){if("[object Object]"===Object.prototype.toString.call(e)&&Object.getPrototypeOf(e)===Object.getPrototypeOf({})){var t=q(null!=e.r?e.r:null!=e.red?e.red:0,!0),o=q(null!=e.g?e.g:null!=e.green?e.green:0,!0),r=q(null!=e.b?e.b:null!=e.blue?e.blue:0,!0),n=q(null!=e.a?e.a:null!=e.alpha?e.alpha:255,!0);if(-1!=t&&-1!=o&&-1!=r&&-1!=n)return[t,o,r,n]}}(e)||function(e){if(Array.isArray(e)&&(3==e.length||4==e.length)){var t=q(e[0],!0),o=q(e[1],!0),r=q(e[2],!0),n=q(null!=e[3]?e[3]:255,!0);if(-1!=t&&-1!=o&&-1!=r&&-1!=n)return[t,o,r,n]}}(e)||function(e){if("number"==typeof e&&Math.floor(e)==e&&e<=4294967295&&e>=0)return[e>>16&255,e>>8&255,255&e,e>>24&255]}(e)||[0,0,0,255]}function C(e){var t=e.toString(16);return 1==t.length?"0"+t:t}function E(e){return 1==e.length?parseInt(e+e,16):parseInt(e,16)}function q(e,t){return"number"!=typeof e||!0===t&&Math.floor(e)!==e?-1:e>=0&&e<=255?e:-1}O.exports=T,O.exports.arr=T,O.exports.obj=function(e){var t=z(e);return{r:t[0],g:t[1],b:t[2],a:3==t.length?255:Math.round(t[3])}},O.exports.css=function(e){var t=z(e);return 3==t.length&&t.push(255),255==t[3]?"rgb("+t[0]+", "+t[1]+", "+t[2]+")":0==t[3]?"rgba("+t[0]+", "+t[1]+", "+t[2]+", 0)":"rgba("+t[0]+", "+t[1]+", "+t[2]+", "+String(t[3]/255).substr(1)+")"},O.exports.hex=function(e){3==(t=z(e)).length&&t.push(255);var t,o=255==t[3],r=C(t[0]),n=C(t[1]),a=C(t[2]),i=function(e,t,o,r){var n=["ff","00","11","22","33","44","55","66","77","88","99","aa","bb","cc","dd","ee"];return-1!=n.indexOf(e)&&-1!=n.indexOf(t)&&-1!=n.indexOf(o)&&-1!=n.indexOf(r)}(r,n,a,t=C(Math.round(t[3])));return o?i?"#"+r.charAt(0)+n.charAt(0)+a.charAt(0):"#"+r+n+a:i?"#"+r.charAt(0)+n.charAt(0)+a.charAt(0)+t.charAt(0):"#"+r+n+a+t},O.exports.num=function(e){var t=z(e);return 3==t.length?t.push(255):t[3]=Math.round(t[3]),(t[3]<<24>>>0|t[0]<<16|t[1]<<8|t[2])>>>0};const H=O.exports,j=(e,t)=>{t.forEach((t=>{!1===e.has(t)&&e.add(t)}))},$=(e,t=document)=>{if(t instanceof Document||t instanceof HTMLElement||t instanceof ShadowRoot){const o=new Set;j(o,t.querySelectorAll(e));const r=t.querySelectorAll('[class*="hydrated"]');for(let t=0;t<r.length;t++){const n=r[t].shadowRoot;j(o,$(e,"object"==typeof n&&null!==n?n:r[t]))}return Array.from(o)}throw new Error("The parameter document for the method querySelectorAll is not type of Document, HTMLElement or ShadowRoot.")},P=(e,t=document)=>{if(t instanceof Document||t instanceof HTMLElement||t instanceof ShadowRoot){let o=t.querySelector(e);if(null===o){const r=t.querySelectorAll('[class*="hydrated"]');for(let t=0;t<r.length;t++){const n=r[t].shadowRoot;if(o=P(e,"object"==typeof n&&null!==n?n:r[t]),null!==o)break}}return o}throw new Error("The parameter document for the method querySelector is not type of Document, HTMLElement or ShadowRoot.")},R=/\[object Object\]/,J=(e,t)=>{"string"==typeof e&&R.test(e)||t()},I=(e,t)=>{"string"==typeof e&&""===e||t()},D=(e,t)=>{(0,n.a)()&&(n.L.debug([e,t]),n.L.debug("\u2191 We propagate the (submit) event to this target.")),Object.defineProperty(e,"target",{value:t,writable:!1})},B=(e,t,o,r={})=>{var n,a;void 0===e.nextHooks&&(e.nextHooks=new Map),void 0===e.nextState&&(e.nextState=new Map),e.nextHooks.get(t)instanceof Map==0&&e.nextHooks.set(t,new Map),"function"==typeof r.afterPatch&&(null===(n=e.nextHooks.get(t))||void 0===n||n.set("afterPatch",r.afterPatch)),"function"==typeof r.beforePatch&&(null===(a=e.nextHooks.get(t))||void 0===a||a.set("beforePatch",r.beforePatch)),e.nextState.set(t,o),(e=>{var t,o,r;null===(t=e.nextHooks)||void 0===t||t.forEach(((t,o)=>{var r;const n=t.get("beforePatch");"function"==typeof n&&n(null===(r=e.nextState)||void 0===r?void 0:r.get(o),e.nextState,e,o)})),(null===(o=e.nextState)||void 0===o?void 0:o.size)>0&&(e.state=Object.assign(Object.assign({},e.state),Object.fromEntries(e.nextState)),delete e.nextState,null===(r=e.nextHooks)||void 0===r||r.forEach(((t,o)=>{const r=t.get("afterPatch");"function"==typeof r&&r(e.state[o],e.state,e,o)}))),delete e.nextHooks})(e)},K=(e,t,o,r)=>{d(`[${e.constructor.name}] The property value: (${o}) for '${t}' is not valid. Allowed values are: ${Array.from(r).join(", ")}`)};function W(e,t,o,r,n,a={}){o(n)?B(e,t,n,a.hooks):void 0===n&&!0!==a.required&&o(a.defaultValue)?B(e,t,a.defaultValue,a.hooks):(a.required||r.add(null),K(e,t,n,r))}const F=(e,t,o,r)=>{W(e,t,(e=>"boolean"==typeof e),new Set(["Boolean {true, false}"]),o,r)},U=(e,t,o,r={})=>{const n="number"==typeof r.minLength?null==r?void 0:r.minLength:0;W(e,t,(e=>"string"==typeof e&&e.length>=n&&(void 0===(null==r?void 0:r.maxLength)||e.length<=r.maxLength)),new Set(["String"]),o,r)},V=(e,t,o,r)=>{W(e,t,(e=>"number"==typeof e&&(void 0===(null==r?void 0:r.min)||"number"==typeof(null==r?void 0:r.min)&&e>=r.min)&&(void 0===(null==r?void 0:r.max)||"number"==typeof(null==r?void 0:r.max)&&e<=r.max)),new Set(["Number"]),o,r)},Y=(e,t,o,r,a=(e=>e==e),i={})=>{I(r,(()=>{J(r,(()=>{void 0===r&&(r=[]);try{try{r=oe(r)}catch(e){}if(Array.isArray(r)){const l=r.find((e=>!o(e)));void 0===l&&a(r)?B(e,t,r,i.hooks):J(l,(()=>{throw n.L.debug(l),new Error("\u2191 The schema for the property (_options) is not valid. The value will not be changed.")}))}else J(r,(()=>{throw n.L.debug(r),new Error("\u2191 The schema for the property (_options) is not valid. The value will not be changed.")}))}catch(e){n.L.debug(e)}}))}))},G=/^(true|false)$/,Q=/^-?(0|[1-9]\d*)$/,X=/^-?(0.|[1-9]\d*.)\d*[1-9]$/,Z=e=>{const t=typeof e,o=`${e}`;if("string"==typeof e)if(G.test(e))e="true"===e;else if(Q.test(e))e=parseInt(e);else if(X.test(e))e=parseFloat(e);else if(te.test(e))try{e=oe(e)}catch(e){}return t!==typeof e&&d(`You have used a stringified property value (${o} to ${JSON.stringify(e)}) which type switched from ${t} to ${typeof e}!`),e},ee=e=>{try{return JSON.stringify(e).replace(/"/g,"'")}catch(S){throw n.L.warn(["stringifyJson",e]),n.L.error("\u2191 The JSON could not be converted to a string. A stringifiable JSON is expected."),new Error}},te=/^[{[]/,oe=e=>{if("string"==typeof e)try{return JSON.parse(e)}catch(S){if(te.test(e))try{return JSON.parse(e.replace(/'/g,'"'))}catch(S){n.L.warn(["parseJson",e]),n.L.error("\u2191 The JSON string could not be parsed. Make sure that single quotes in the text are escaped (&#8216;).")}}throw new Error},re=e=>"boolean"==typeof e?!0===e?"true":"false":void 0,ne=e=>"string"==typeof e?e:re(e),ae=(e,t)=>P(e,t||(0,n.g)()),ie=(e,t)=>$(e,t||(0,n.g)());let le=null;const se=()=>(le=le||{backgroundColor:"#00000000",color:"#00000000",domNode:(0,n.g)().body,level:"Fail",score:1},le),ce=/(\d+, ){3}0\)/,de=(e,t=se())=>{const o=getComputedStyle(e),r=ce.test(o.backgroundColor)?t.backgroundColor:H.hex(o.backgroundColor),a=ce.test(o.color)?t.color:H.hex(o.color),i=A(r,a),l={backgroundColor:r,color:a,domNode:e,level:M(i),score:i};return i<4.5&&n.L.error(["Color-Contrast-Error",{backgroundColor:l.backgroundColor,color:l.color,level:l.level,score:l.score},l.domNode]),l},ue=(e,t=se())=>{t.domNode instanceof HTMLElement&&(t=de(t.domNode,t));const o=t.domNode.querySelector(e);if(null===o){const o=t.domNode.querySelectorAll('[class="hydrated"]');for(let r=0;r<o.length&&(t.domNode=o[r],null===(t=ue(e,t)).domNode);r++);return t}return de(o,t)};class fe{static queryHtmlElementColors(e,t,o=!1,r=!0){let a=null;if(!0===o||!1===fe.executionLock)if(!1===o&&(fe.cache.clear(),fe.cache.set(t.domNode,t),fe.executionLock=!0,!0===r&&n.L.debug("[KoliBriUtils] Color contrast analysis started...")),e===t.domNode)a=t;else{const o=new Set;if(t.domNode.shadowRoot){const e=t.domNode.shadowRoot.children;for(let t=0;t<e.length;t++)o.add(e[t])}const r=t.domNode;if("function"==typeof r.assignedNodes){const e=r.assignedNodes();for(let t=0;t<e.length;t++)e[t]instanceof HTMLElement&&o.add(e[t])}const n=t.domNode.children;for(let e=0;e<n.length;e++)o.add(n[e]);const i=Array.from(o);for(let l=0;l<i.length;l++){let o=fe.cache.get(i[l]);void 0===o&&(o=de(i[l],t)),fe.cache.set(i[l],o);const r=fe.queryHtmlElementColors(e,o,!0,!1);if(null!==r){a=r;break}}}else n.L.debug("[KoliBriUtils] Call aborted because a color contrast analysis is currently being executed.");return!1===o&&(!0===r&&n.L.debug(`[KoliBriUtils] Color contrast analysis finished (${fe.cache.size} DOM elements are analysed).`),fe.executionLock=!1,fe.cache.clear()),a}}fe.executionLock=!1,fe.cache=new Map;class he{}he.getCssStyle=r.p,he.patchTheme=r.x,he.patchThemeTag=r.z,he.querySelector=ae,he.querySelectorAll=ie,he.stringifyJson=ee}}]);