/*! For license information please see 38304.3b7965da.js.LICENSE.txt */
"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[38304],{53844:(e,t,o)=>{o.d(t,{t:()=>a});var r=o(4995),n=o(78728);let a=(e,t)=>{var o;return(null!==(o=(0,r.g)())&&void 0!==o?o:(0,r.i)("de")).translate(e,t)};"test"===n.p&&(a=e=>e)},66984:(e,t,o)=>{o.d(t,{v:()=>n});var r=o(8596);const n=(e,t,o)=>{(0,r.i)(e,"_src",t,o)}},38304:(e,t,o)=>{o.r(t),o.d(t,{kol_avatar_wc:()=>s});var r=o(41336),n=o(53844),a=o(66984),l=o(21200);const i=e=>0===e.length?"":e[0].toUpperCase(),s=class{constructor(e){(0,r.r)(this,e),this._src=void 0,this._label=void 0,this.state={_src:"",_label:""}}render(){return(0,r.h)(r.H,{key:"672b71c600e54214bbaf86210fe439af3f187c83",class:"kol-avatar-wc"},(0,r.h)("div",{key:"8631bb174ac54c1677149d12979f6837dddd692d","aria-label":(0,n.t)("kol-avatar-alt",{placeholders:{name:this.state._label}}),class:"container",role:"img"},this.state._src?(0,r.h)("img",{alt:"","aria-hidden":"true",class:"image",src:this.state._src}):(0,r.h)("span",{"aria-hidden":"true",class:"initials"},(e=>{const t=e.split(/\s+/),o=t.at(0),r=t.at(-1);return t.length>=2&&o&&r?`${i(o)}${i(r)}`:i(e)})(this.state._label.trim()))))}validateSrc(e){(0,a.v)(this,e)}validateLabel(e){(0,l.v)(this,e,{required:!0})}componentWillLoad(){this.validateSrc(this._src),this.validateLabel(this._label)}static get watchers(){return{_src:["validateSrc"],_label:["validateLabel"]}}}},21200:(e,t,o)=>{o.d(t,{a:()=>d,b:()=>i,c:()=>s,h:()=>n,v:()=>u});var r=o(8596);const n=[0,1,2,3,4,5,6],a=/[a-zA-Z0-9\xe4\xf6\xfc\xc4\xd6\xdc\xdf]/g,l=/^\d+$/;function i(e,t=1){return function(e){var t;return"string"==typeof e&&(null===(t=e.match(a))||void 0===t?void 0:t.length)||0}(e)>=t}function s(e){return l.test(e)}const c=new Set(["string"]),u=(e,t,o={})=>{(0,r.w)(e,"_label",(e=>"string"==typeof e),c,t,function(e){var t;return Object.assign(Object.assign({},e),{hooks:{afterPatch:(t,o,n,a)=>{var l,c;"function"==typeof(null===(l=e.hooks)||void 0===l?void 0:l.afterPatch)&&(null===(c=e.hooks)||void 0===c||c.afterPatch(t,o,n,a)),"string"==typeof t&&!1===i(t,3)&&!1===s(t)&&(0,r.a)(`The heading or label ("${t}") is not accessible. A label should consist of at least three readable characters.`),"string"==typeof t&&t.length>80&&(0,r.u)("A heading or label should not be longer than 80 characters.")},beforePatch:null===(t=e.hooks)||void 0===t?void 0:t.beforePatch}})}(o))},d=u},8596:(e,t,o)=>{o.d(t,{A:()=>ue,B:()=>le,C:()=>de,D:()=>ee,K:()=>he,a:()=>l,b:()=>W,c:()=>p,d:()=>_,e:()=>v,f:()=>h,g:()=>Y,h:()=>y,i:()=>F,j:()=>u,k:()=>V,l:()=>d,m:()=>X,n:()=>s,o:()=>I,p:()=>oe,q:()=>D,r:()=>q,s:()=>B,t:()=>z,u:()=>b,v:()=>ae,w:()=>U,x:()=>re,y:()=>ne,z:()=>fe});var r=o(32864),n=o(72032);const a=new Set,l=(e,t)=>{(!1===a.has(e)||(null==t?void 0:t.force))&&(a.add(e),n.L.debug([e].concat((null==t?void 0:t.details)||[]),{classifier:"\u270b a11y",forceLog:!!(null==t?void 0:t.force),overwriteStyle:"; background-color: #09f"}))},i=new Set,s=(e,t)=>{(!1===i.has(e)||(null==t?void 0:t.force))&&(i.add(e),n.L.warn([e].concat((null==t?void 0:t.details)||[]),{classifier:"\ud83d\udd25 deprecated",forceLog:!!(null==t?void 0:t.force),overwriteStyle:"; background-color: #f00"}))},c=new Set,u=(e,t)=>{(!1===c.has(e)||(null==t?void 0:t.force))&&(c.add(e),n.L.debug([e].concat((null==t?void 0:t.details)||[]),{classifier:"\ud83d\udcbb dev",forceLog:!!(null==t?void 0:t.force),overwriteStyle:"; background-color: #f09"}))},d=(e,t)=>{(!1===c.has(e)||(null==t?void 0:t.force))&&(c.add(e),n.L.warn([e].concat((null==t?void 0:t.details)||[]),{classifier:"\u26a0\ufe0f dev",forceLog:!!(null==t?void 0:t.force),overwriteStyle:"; background-color: #f09"}))},f=new Set,h=(e,t=!1,o)=>{(!1===f.has(e)||(null==o?void 0:o.force))&&(f.add(e),e+=!0===t?" \u2705":"",n.L.debug([e].concat((null==o?void 0:o.details)||[]),{classifier:"\ud83c\udf1f feature",forceLog:!!(null==o?void 0:o.force),overwriteStyle:"; background-color: #309"}))};u("We appreciate any feedback, comments, screenshots, or demo links of an application based on KoliBri (kolibri@itzbund.de). Thank you!");const g=new Set,b=(e,t)=>{(!1===g.has(e)||(null==t?void 0:t.force))&&(g.add(e),n.L.debug([e].concat((null==t?void 0:t.details)||[]),{classifier:"\ud83d\udcd1 ui/ux",forceLog:!!(null==t?void 0:t.force),overwriteStyle:"; background-color: #060;"}))},p=()=>{l('"Disabled" limits accessibility and visibility. From an accessibility perspective, we recommend using the readonly attribute instead of disabled.\n- https://uxdesign.cc/is-it-ok-to-grey-out-disabled-buttons-8afa74a0fae')},v=e=>{"string"==typeof e&&""!==e||l("Some structural elements, such as the nav tag, can be used multiple times on a webpage. To distinguish between similarly named structural elements, it is necessary to set an ARIA label.\n- https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/Navigation_Role#accessibility_concerns")},y=(e,t=8)=>{t>7&&b(`[${e}] Within navigation structures, it is recommended to use no more than 7 menu items.\n\nLink:\n- https://en.wikipedia.org/wiki/The_Magical_Number_Seven,_Plus_or_Minus_Two`)};var m=.2126,w=.7152,S=.0722,k=1/12.92;function x(e){return Math.pow((e+.055)/1.055,2.4)}function L(e){var t=e[0]/255,o=e[1]/255,r=e[2]/255,n=t<=.03928?t*k:x(t),a=o<=.03928?o*k:x(o),l=r<=.03928?r*k:x(r);return n*m+a*w+l*S}function N(e){var t=255;8===(e=e.replace(/^#/,"")).length&&(t=parseInt(e.slice(6,8),16),e=e.substring(0,6)),4===e.length&&(t=parseInt(e.slice(3,4).repeat(2),16),e=e.substring(0,3)),3===e.length&&(e=e[0]+e[0]+e[1]+e[1]+e[2]+e[2]);var o=parseInt(e,16);return[o>>16,o>>8&255,255&o,t]}function A(e,t){return function(e,t){return(Math.max(e,t)+.05)/(Math.min(e,t)+.05)}(L(e),L(t))}function _(e,t){return A(N(e),N(t))}function O(e){return e>=7?"AAA":e>=4.5?"AA":e>=3?"AA Large":"Fail"}var M={exports:{}};function C(e){var t=T(e);return 3==t.length?t.concat(255):(t[3]=Math.round(t[3]),t)}function T(e){return"string"==typeof e?function(e){return"red"==e?[255,0,0]:"green"==e?[0,255,0]:"blue"==e?[0,0,255]:"black"==e?[0,0,0]:"white"==e?[255,255,255]:"cyan"==e?[0,255,255]:"gray"==e||"grey"==e?[128,128,128]:"magenta"==e||"pink"==e?[255,0,255]:"yellow"==e?[255,255,0]:void 0}(e=e.toLowerCase())||function(e){var t=e.replace(/^#/,""),o=t.length;if(3==o||4==o){var r=E(t[0]),n=E(t[1]),a=E(t[2]),l=3==o?255:E(t[3]);if(isNaN(r)||isNaN(n)||isNaN(a)||isNaN(l))return;return[r,n,a,l]}}(e)||function(e){var t=e.replace(/^#/,""),o=t.length;if(6==o||8==o){var r=E(t.slice(0,2)),n=E(t.slice(2,4)),a=E(t.slice(4,6)),l=6==o?255:E(t.slice(6,8));if(isNaN(r)||isNaN(n)||isNaN(a)||isNaN(l))return;return[r,n,a,l]}}(e)||function(e){if("rgb("==e.substr(0,4)){var t=(e=e.match(/^rgb\(([^)]+)\)/)[1]).split(/ *, */).map(Number),o=$(t[0],!0),r=$(t[1],!0),n=$(t[2],!0);if(-1!=o&&-1!=r&&-1!=n)return[o,r,n,255]}}(e)||function(e){if("rgba("==e.substr(0,5)){var t=(e=e.match(/^rgba\(([^)]+)\)/)[1]).split(/ *, */).map(Number),o=$(t[0],!0),r=$(t[1],!0),n=$(t[2],!0),a=$(255*t[3]);if(-1!=o&&-1!=r&&-1!=n&&-1!=a)return[o,r,n,a]}}(e)||[0,0,0,255]:function(e){if("[object Object]"===Object.prototype.toString.call(e)&&Object.getPrototypeOf(e)===Object.getPrototypeOf({})){var t=$(null!=e.r?e.r:null!=e.red?e.red:0,!0),o=$(null!=e.g?e.g:null!=e.green?e.green:0,!0),r=$(null!=e.b?e.b:null!=e.blue?e.blue:0,!0),n=$(null!=e.a?e.a:null!=e.alpha?e.alpha:255,!0);if(-1!=t&&-1!=o&&-1!=r&&-1!=n)return[t,o,r,n]}}(e)||function(e){if(Array.isArray(e)&&(3==e.length||4==e.length)){var t=$(e[0],!0),o=$(e[1],!0),r=$(e[2],!0),n=$(null!=e[3]?e[3]:255,!0);if(-1!=t&&-1!=o&&-1!=r&&-1!=n)return[t,o,r,n]}}(e)||function(e){if("number"==typeof e&&Math.floor(e)==e&&e<=4294967295&&e>=0)return[e>>16&255,e>>8&255,255&e,e>>24&255]}(e)||[0,0,0,255]}function j(e){var t=e.toString(16);return 1==t.length?"0"+t:t}function E(e){return 1==e.length?parseInt(e+e,16):parseInt(e,16)}function $(e,t){return"number"!=typeof e||!0===t&&Math.floor(e)!==e?-1:e>=0&&e<=255?e:-1}M.exports=C,M.exports.arr=C,M.exports.obj=function(e){var t=T(e);return{r:t[0],g:t[1],b:t[2],a:3==t.length?255:Math.round(t[3])}},M.exports.css=function(e){var t=T(e);return 3==t.length&&t.push(255),255==t[3]?"rgb("+t[0]+", "+t[1]+", "+t[2]+")":0==t[3]?"rgba("+t[0]+", "+t[1]+", "+t[2]+", 0)":"rgba("+t[0]+", "+t[1]+", "+t[2]+", "+String(t[3]/255).substr(1)+")"},M.exports.hex=function(e){3==(t=T(e)).length&&t.push(255);var t,o=255==t[3],r=j(t[0]),n=j(t[1]),a=j(t[2]),l=function(e,t,o,r){var n=["ff","00","11","22","33","44","55","66","77","88","99","aa","bb","cc","dd","ee"];return-1!=n.indexOf(e)&&-1!=n.indexOf(t)&&-1!=n.indexOf(o)&&-1!=n.indexOf(r)}(r,n,a,t=j(Math.round(t[3])));return o?l?"#"+r.charAt(0)+n.charAt(0)+a.charAt(0):"#"+r+n+a:l?"#"+r.charAt(0)+n.charAt(0)+a.charAt(0)+t.charAt(0):"#"+r+n+a+t},M.exports.num=function(e){var t=T(e);return 3==t.length?t.push(255):t[3]=Math.round(t[3]),(t[3]<<24>>>0|t[0]<<16|t[1]<<8|t[2])>>>0};const q=M.exports,H=(e,t)=>{t.forEach((t=>{!1===e.has(t)&&e.add(t)}))},P=(e,t=document)=>{if(t instanceof Document||t instanceof HTMLElement||t instanceof ShadowRoot){const o=new Set;H(o,t.querySelectorAll(e));const r=t.querySelectorAll('[class*="hydrated"]');for(let t=0;t<r.length;t++){const n=r[t].shadowRoot;H(o,P(e,"object"==typeof n&&null!==n?n:r[t]))}return Array.from(o)}throw new Error("The parameter document for the method querySelectorAll is not type of Document, HTMLElement or ShadowRoot.")},R=(e,t=document)=>{if(t instanceof Document||t instanceof HTMLElement||t instanceof ShadowRoot){let o=t.querySelector(e);if(null===o){const r=t.querySelectorAll('[class*="hydrated"]');for(let t=0;t<r.length;t++){const n=r[t].shadowRoot;if(o=R(e,"object"==typeof n&&null!==n?n:r[t]),null!==o)break}}return o}throw new Error("The parameter document for the method querySelector is not type of Document, HTMLElement or ShadowRoot.")},J=/\[object Object\]/,I=(e,t)=>{"string"==typeof e&&J.test(e)||t()},z=(e,t)=>{"string"==typeof e&&""===e||t()},D=(e,t)=>{(0,n.a)()&&(n.L.debug([e,t]),n.L.debug("\u2191 We propagate the (submit) event to this target.")),Object.defineProperty(e,"target",{value:t,writable:!1})},B=(e,t,o,r={})=>{var n,a;void 0===e.nextHooks&&(e.nextHooks=new Map),void 0===e.nextState&&(e.nextState=new Map),e.nextHooks.get(t)instanceof Map==0&&e.nextHooks.set(t,new Map),"function"==typeof r.afterPatch&&(null===(n=e.nextHooks.get(t))||void 0===n||n.set("afterPatch",r.afterPatch)),"function"==typeof r.beforePatch&&(null===(a=e.nextHooks.get(t))||void 0===a||a.set("beforePatch",r.beforePatch)),e.nextState.set(t,o),(e=>{var t,o,r;null===(t=e.nextHooks)||void 0===t||t.forEach(((t,o)=>{var r;const n=t.get("beforePatch");"function"==typeof n&&n(null===(r=e.nextState)||void 0===r?void 0:r.get(o),e.nextState,e,o)})),(null===(o=e.nextState)||void 0===o?void 0:o.size)>0&&(e.state=Object.assign(Object.assign({},e.state),Object.fromEntries(e.nextState)),delete e.nextState,null===(r=e.nextHooks)||void 0===r||r.forEach(((t,o)=>{const r=t.get("afterPatch");"function"==typeof r&&r(e.state[o],e.state,e,o)}))),delete e.nextHooks})(e)},K=(e,t,o,r)=>{u(`[${e.constructor.name}] The property value: (${o}) for '${t}' is not valid. Allowed values are: ${Array.from(r).join(", ")}`)};function U(e,t,o,r,n,a={}){o(n)?B(e,t,n,a.hooks):void 0===n&&!0!==a.required&&o(a.defaultValue)?B(e,t,a.defaultValue,a.hooks):(a.required||r.add(null),K(e,t,n,r))}const W=(e,t,o,r)=>{U(e,t,(e=>"boolean"==typeof e),new Set(["Boolean {true, false}"]),o,r)},F=(e,t,o,r={})=>{const n="number"==typeof r.minLength?null==r?void 0:r.minLength:0;U(e,t,(e=>"string"==typeof e&&e.length>=n&&(void 0===(null==r?void 0:r.maxLength)||e.length<=r.maxLength)),new Set(["String"]),o,r)},V=(e,t,o,r)=>{U(e,t,(e=>"number"==typeof e&&(void 0===(null==r?void 0:r.min)||"number"==typeof(null==r?void 0:r.min)&&e>=r.min)&&(void 0===(null==r?void 0:r.max)||"number"==typeof(null==r?void 0:r.max)&&e<=r.max)),new Set(["Number"]),o,r)},Y=(e,t,o,r,a=(e=>e==e),l={})=>{z(r,(()=>{I(r,(()=>{void 0===r&&(r=[]);try{try{r=oe(r)}catch(e){}if(Array.isArray(r)){const i=r.find((e=>!o(e)));void 0===i&&a(r)?B(e,t,r,l.hooks):I(i,(()=>{throw n.L.debug(i),new Error("\u2191 The schema for the property (_options) is not valid. The value will not be changed.")}))}else I(r,(()=>{throw n.L.debug(r),new Error("\u2191 The schema for the property (_options) is not valid. The value will not be changed.")}))}catch(e){n.L.debug(e)}}))}))},Z=/^(true|false)$/,G=/^-?(0|[1-9]\d*)$/,Q=/^-?(0.|[1-9]\d*.)\d*[1-9]$/,X=e=>{const t=typeof e,o=`${e}`;if("string"==typeof e)if(Z.test(e))e="true"===e;else if(G.test(e))e=parseInt(e);else if(Q.test(e))e=parseFloat(e);else if(te.test(e))try{e=oe(e)}catch(e){}return t!==typeof e&&u(`You have used a stringified property value (${o} to ${JSON.stringify(e)}) which type switched from ${t} to ${typeof e}!`),e},ee=e=>{try{return JSON.stringify(e).replace(/"/g,"'")}catch(S){throw n.L.warn(["stringifyJson",e]),n.L.error("\u2191 The JSON could not be converted to a string. A stringifiable JSON is expected."),new Error}},te=/^[{[]/,oe=e=>{if("string"==typeof e)try{return JSON.parse(e)}catch(S){if(te.test(e))try{return JSON.parse(e.replace(/'/g,'"'))}catch(S){n.L.warn(["parseJson",e]),n.L.error("\u2191 The JSON string could not be parsed. Make sure that single quotes in the text are escaped (&#8216;).")}}throw new Error},re=e=>"boolean"==typeof e?!0===e?"true":"false":void 0,ne=e=>"string"==typeof e?e:re(e),ae=(e,t)=>R(e,t||(0,n.g)()),le=(e,t)=>P(e,t||(0,n.g)());let ie=null;const se=()=>(ie=ie||{backgroundColor:"#00000000",color:"#00000000",domNode:(0,n.g)().body,level:"Fail",score:1},ie),ce=/(\d+, ){3}0\)/,ue=(e,t=se())=>{const o=getComputedStyle(e),r=ce.test(o.backgroundColor)?t.backgroundColor:q.hex(o.backgroundColor),a=ce.test(o.color)?t.color:q.hex(o.color),l=_(r,a),i={backgroundColor:r,color:a,domNode:e,level:O(l),score:l};return l<4.5&&n.L.error(["Color-Contrast-Error",{backgroundColor:i.backgroundColor,color:i.color,level:i.level,score:i.score},i.domNode]),i},de=(e,t=se())=>{t.domNode instanceof HTMLElement&&(t=ue(t.domNode,t));const o=t.domNode.querySelector(e);if(null===o){const o=t.domNode.querySelectorAll('[class="hydrated"]');for(let r=0;r<o.length&&(t.domNode=o[r],null===(t=de(e,t)).domNode);r++);return t}return ue(o,t)};class fe{static queryHtmlElementColors(e,t,o=!1,r=!0){let a=null;if(!0===o||!1===fe.executionLock)if(!1===o&&(fe.cache.clear(),fe.cache.set(t.domNode,t),fe.executionLock=!0,!0===r&&n.L.debug("[KoliBriUtils] Color contrast analysis started...")),e===t.domNode)a=t;else{const o=new Set;if(t.domNode.shadowRoot){const e=t.domNode.shadowRoot.children;for(let t=0;t<e.length;t++)o.add(e[t])}const r=t.domNode;if("function"==typeof r.assignedNodes){const e=r.assignedNodes();for(let t=0;t<e.length;t++)e[t]instanceof HTMLElement&&o.add(e[t])}const n=t.domNode.children;for(let e=0;e<n.length;e++)o.add(n[e]);const l=Array.from(o);for(let i=0;i<l.length;i++){let o=fe.cache.get(l[i]);void 0===o&&(o=ue(l[i],t)),fe.cache.set(l[i],o);const r=fe.queryHtmlElementColors(e,o,!0,!1);if(null!==r){a=r;break}}}else n.L.debug("[KoliBriUtils] Call aborted because a color contrast analysis is currently being executed.");return!1===o&&(!0===r&&n.L.debug(`[KoliBriUtils] Color contrast analysis finished (${fe.cache.size} DOM elements are analysed).`),fe.executionLock=!1,fe.cache.clear()),a}}fe.executionLock=!1,fe.cache=new Map;class he{}he.getCssStyle=r.p,he.patchTheme=r.x,he.patchThemeTag=r.z,he.querySelector=ae,he.querySelectorAll=le,he.stringifyJson=ee},78728:(e,t,o)=>{o.d(t,{S:()=>l,a:()=>a,b:()=>r,c:()=>i,h:()=>c,i:()=>n,p:()=>s,s:()=>u});const r=e=>"object"==typeof e&&null!==e,n=(e,t=0)=>"string"==typeof e&&e.length>=t,a=e=>{if("object"!=typeof e||null===e)return n(e,1);for(const t in e)if(!1===n(t,1))return!1;return!0},l=new Event("StateChange"),i=(e,t)=>{r(e)&&e&&(e.focus=e=>null==t?void 0:t.focus(e))};let s="development";try{s="production"}catch(d){s="production"}const c=(e,t,o)=>{if(e&&t&&"string"==typeof o){const r=e.querySelector(`[slot="${o}"]`);r&&t.appendChild(r)}},u=e=>""===e}}]);