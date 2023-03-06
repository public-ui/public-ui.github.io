/*! For license information please see 4374.7b567c4e.js.LICENSE.txt */
"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[4374],{14374:(e,t,o)=>{o.r(t),o.d(t,{kol_breadcrumb:()=>l});var r=o(83547),n=o(13986),a=o(72613),i=o(23193);const l=class{constructor(e){(0,r.r)(this,e),this._ariaLabel=void 0,this._links=void 0,this.state={_ariaLabel:"\u2026",_links:[]}}render(){const e=this.state._links.length-1;return(0,r.h)(r.H,null,(0,r.h)("nav",{"aria-label":this.state._ariaLabel},(0,r.h)("ul",null,0===this.state._links.length&&(0,r.h)("li",null,(0,r.h)("kol-icon",{_ariaLabel:"",_icon:"fa-solid fa-house"}),"\u2026"),this.state._links.map(((t,o)=>(0,r.h)("li",{key:o},0!==o&&(0,r.h)("kol-icon",{_ariaLabel:"",_icon:"fa-solid fa-angle-right",_part:"separator",exportparts:"separator"}),o===e?(0,r.h)("span",null,t._iconOnly?(0,r.h)("kol-icon",{_ariaLabel:t._label,_icon:"string"==typeof t._icon?t._icon:"fa-solid fa-link-slash"}):(0,r.h)(r.F,null,t._label)):(0,r.h)("kol-link",Object.assign({exportparts:"link",_useCase:"nav"},t,{_ariaLabel:t._label}),t._label)))))))}validateAriaLabel(e){(0,a.w)(this,"_ariaLabel",e,{required:!0}),(0,n.b)(e)}validateLinks(e){(0,i.w)("KolBreadcrumb",this,e)}componentWillLoad(){this.validateAriaLabel(this._ariaLabel),this.validateLinks(this._links)}static get watchers(){return{_ariaLabel:["validateAriaLabel"],_links:["validateLinks"]}}};l.style={default:":host{--kolibri-border-color:#666;--kolibri-border-radius:0.125rem;--kolibri-border-width:1px;--kolibri-color-error:#f44336;--kolibri-color-info:#2196f3;--kolibri-color-success:#4caf50;--kolibri-color-warning:#ff9800;--kolibri-color-primary:#3f51b5;--kolibri-color-secondary:#ff4081;--kolibri-color-normal:#9e9e9e;--kolibri-color-danger:#f44336;--kolibri-color-ghost:#f5f5f5;--kolibri-color-disabled:#bdbdbd;--kolibri-color-text:#222222;--kolibri-color-visited:#9c27b0;--kolibri-font-family:Verdana, Arial, Tahoma, Helvetica, sans-serif;--kolibri-font-size:16px;--kolibri-spacing:0.25rem}:host{font-family:inherit;font-size:inherit}:host *{hyphens:auto;letter-spacing:inherit;word-break:break-word;word-spacing:inherit}:host{display:inline-block}a,button{background-color:transparent;border:none;font-size:inherit;margin:0;padding:0;transition-duration:0.5s;transition-property:background-color, color, border-color}:host{font-family:var(--kolibri-font-family);font-size:inherit}*{box-sizing:border-box}kol-icon{color:inherit}kol-span-wc{display:grid;gap:var(--kolibri-spacing);place-items:center}kol-span-wc>span{display:flex;gap:var(--kolibri-spacing);place-items:center}kol-span-wc>kol-icon,kol-span-wc>span>kol-icon{display:inline-grid;place-items:center;width:1em;height:1em}a,button,input,select,textarea{appearance:none;cursor:pointer}a.icon-only>kol-span-wc>span>span,button.icon-only>kol-span-wc>span>span{display:none}h1,h2,h3,h4,h5,h6{font-family:var(--kolibri-font-family);font-size:var(--kolibri-font-size);margin:0;padding:0}ul,li{margin:0;padding:0;list-style:none;display:flex;gap:0.5em;flex-wrap:wrap;place-items:center}kol-icon::part(separator){font-weight:900;font-size:0.7em}kol-icon::part(separator)::before{content:'\\f054';font-family:'Font Awesome 6 Free'}"}},72613:(e,t,o)=>{o.d(t,{K:()=>oe,a:()=>C,b:()=>T,c:()=>N,d:()=>P,e:()=>j,f:()=>O,g:()=>E,h:()=>I,i:()=>ee,j:()=>W,k:()=>K,l:()=>te,m:()=>J,n:()=>Q,o:()=>M,p:()=>F,q:()=>U,r:()=>c,s:()=>H,t:()=>X,u:()=>R,w:()=>q});var r=o(26235),n=o(13986),a=o(27612);const i=(e,t)=>{t.forEach((t=>{!1===e.has(t)&&e.add(t)}))},l=(e,t=document)=>{if(t instanceof Document||t instanceof HTMLElement||t instanceof ShadowRoot){const o=new Set;i(o,t.querySelectorAll(e));const r=t.querySelectorAll('[class*="hydrated"]');for(let t=0;t<r.length;t++){const n=r[t].shadowRoot;i(o,l(e,"object"==typeof n&&null!==n?n:r[t]))}return Array.from(o)}throw new Error("The parameter document for the method querySelectorAll is not type of Document, HTMLElement or ShadowRoot.")},s=(e,t=document)=>{if(t instanceof Document||t instanceof HTMLElement||t instanceof ShadowRoot){let o=t.querySelector(e);if(null===o){const r=t.querySelectorAll('[class*="hydrated"]');for(let t=0;t<r.length;t++){const n=r[t].shadowRoot;if(o=s(e,"object"==typeof n&&null!==n?n:r[t]),null!==o)break}}return o}throw new Error("The parameter document for the method querySelector is not type of Document, HTMLElement or ShadowRoot.")};var c=p,d=p,u=function(e){var t=b(e);return{r:t[0],g:t[1],b:t[2],a:3==t.length?255:Math.round(t[3])}},f=function(e){var t=b(e);return 3==t.length&&t.push(255),255==t[3]?"rgb("+t[0]+", "+t[1]+", "+t[2]+")":0==t[3]?"rgba("+t[0]+", "+t[1]+", "+t[2]+", 0)":"rgba("+t[0]+", "+t[1]+", "+t[2]+", "+String(t[3]/255).substr(1)+")"},h=function(e){3==(t=b(e)).length&&t.push(255);var t,o=255==t[3],r=m(t[0]),n=m(t[1]),a=m(t[2]),i=function(e,t,o,r){var n=["ff","00","11","22","33","44","55","66","77","88","99","aa","bb","cc","dd","ee"];return-1!=n.indexOf(e)&&-1!=n.indexOf(t)&&-1!=n.indexOf(o)&&-1!=n.indexOf(r)}(r,n,a,t=m(Math.round(t[3])));return o?i?"#"+r.charAt(0)+n.charAt(0)+a.charAt(0):"#"+r+n+a:i?"#"+r.charAt(0)+n.charAt(0)+a.charAt(0)+t.charAt(0):"#"+r+n+a+t},g=function(e){var t=b(e);return 3==t.length?t.push(255):t[3]=Math.round(t[3]),(t[3]<<24>>>0|t[0]<<16|t[1]<<8|t[2])>>>0};function p(e){var t=b(e);return 3==t.length?t.concat(255):(t[3]=Math.round(t[3]),t)}function b(e){return"string"==typeof e?function(e){return"red"==e?[255,0,0]:"green"==e?[0,255,0]:"blue"==e?[0,0,255]:"black"==e?[0,0,0]:"white"==e?[255,255,255]:"cyan"==e?[0,255,255]:"gray"==e||"grey"==e?[128,128,128]:"magenta"==e||"pink"==e?[255,0,255]:"yellow"==e?[255,255,0]:void 0}(e=e.toLowerCase())||function(e){var t=e.replace(/^#/,""),o=t.length;if(3==o||4==o){var r=y(t[0]),n=y(t[1]),a=y(t[2]),i=3==o?255:y(t[3]);if(isNaN(r)||isNaN(n)||isNaN(a)||isNaN(i))return;return[r,n,a,i]}}(e)||function(e){var t=e.replace(/^#/,""),o=t.length;if(6==o||8==o){var r=y(t.slice(0,2)),n=y(t.slice(2,4)),a=y(t.slice(4,6)),i=6==o?255:y(t.slice(6,8));if(isNaN(r)||isNaN(n)||isNaN(a)||isNaN(i))return;return[r,n,a,i]}}(e)||function(e){if("rgb("==e.substr(0,4)){var t=(e=e.match(/^rgb\(([^)]+)\)/)[1]).split(/ *, */).map(Number),o=k(t[0],!0),r=k(t[1],!0),n=k(t[2],!0);if(-1!=o&&-1!=r&&-1!=n)return[o,r,n,255]}}(e)||function(e){if("rgba("==e.substr(0,5)){var t=(e=e.match(/^rgba\(([^)]+)\)/)[1]).split(/ *, */).map(Number),o=k(t[0],!0),r=k(t[1],!0),n=k(t[2],!0),a=k(255*t[3]);if(-1!=o&&-1!=r&&-1!=n&&-1!=a)return[o,r,n,a]}}(e)||[0,0,0,255]:function(e){if("[object Object]"===Object.prototype.toString.call(e)&&Object.getPrototypeOf(e)===Object.getPrototypeOf({})){var t=k(null!=e.r?e.r:null!=e.red?e.red:0,!0),o=k(null!=e.g?e.g:null!=e.green?e.green:0,!0),r=k(null!=e.b?e.b:null!=e.blue?e.blue:0,!0),n=k(null!=e.a?e.a:null!=e.alpha?e.alpha:255,!0);if(-1!=t&&-1!=o&&-1!=r&&-1!=n)return[t,o,r,n]}}(e)||function(e){if(Array.isArray(e)&&(3==e.length||4==e.length)){var t=k(e[0],!0),o=k(e[1],!0),r=k(e[2],!0),n=k(null!=e[3]?e[3]:255,!0);if(-1!=t&&-1!=o&&-1!=r&&-1!=n)return[t,o,r,n]}}(e)||function(e){if("number"==typeof e&&Math.floor(e)==e&&e<=4294967295&&e>=0)return[e>>16&255,e>>8&255,255&e,e>>24&255]}(e)||[0,0,0,255]}function m(e){var t=e.toString(16);return 1==t.length?"0"+t:t}function y(e){return 1==e.length?parseInt(e+e,16):parseInt(e,16)}function k(e,t){return"number"!=typeof e||!0===t&&Math.floor(e)!==e?-1:e>=0&&e<=255?e:-1}c.arr=d,c.obj=u,c.css=f,c.hex=h,c.num=g;var v=1/12.92;function w(e){return Math.pow((e+.055)/1.055,2.4)}function L(e){var t=e[0]/255,o=e[1]/255,r=e[2]/255;return.2126*(t<=.03928?t*v:w(t))+.7152*(o<=.03928?o*v:w(o))+.0722*(r<=.03928?r*v:w(r))}function S(e){var t=255;8===(e=e.replace(/^#/,"")).length&&(t=parseInt(e.slice(6,8),16),e=e.substring(0,6)),4===e.length&&(t=parseInt(e.slice(3,4).repeat(2),16),e=e.substring(0,3)),3===e.length&&(e=e[0]+e[0]+e[1]+e[1]+e[2]+e[2]);var o=parseInt(e,16);return[o>>16,o>>8&255,255&o,t]}function x(e,t){return function(e,t){return(Math.max(e,t)+.05)/(Math.min(e,t)+.05)}(L(e),L(t))}function N(e,t){return x(S(e),S(t))}function A(e){return e>=7?"AAA":e>=4.5?"AA":e>=3?"AA Large":"Fail"}const _=/\[object Object\]/,M=(e,t)=>{"string"==typeof e&&_.test(e)||t()},E=(e,t)=>{"string"==typeof e&&""===e||t()},O=(e,t)=>{(0,a.b)()&&(a.L.debug([e,t]),a.L.debug("\u2191 We propagate the (submit) event to this target.")),Object.defineProperty(e,"target",{value:t,writable:!1})},H=(e,t,o,r={})=>{var n,a;void 0===e.nextHooks&&(e.nextHooks=new Map),void 0===e.nextState&&(e.nextState=new Map),e.nextState.get(t)!==o&&(e.nextHooks.get(t)instanceof Map==0&&e.nextHooks.set(t,new Map),"function"==typeof r.afterPatch&&(null===(n=e.nextHooks.get(t))||void 0===n||n.set("afterPatch",r.afterPatch)),"function"==typeof r.beforePatch&&(null===(a=e.nextHooks.get(t))||void 0===a||a.set("beforePatch",r.beforePatch)),e.nextState.set(t,o),(e=>{var t,o,r;null===(t=e.nextHooks)||void 0===t||t.forEach(((t,o)=>{var r;const n=t.get("beforePatch");"function"==typeof n&&n(null===(r=e.nextState)||void 0===r?void 0:r.get(o),e.nextState,e,o)})),(null===(o=e.nextState)||void 0===o?void 0:o.size)>0&&(e.state=Object.assign(Object.assign({},e.state),Object.fromEntries(e.nextState)),delete e.nextState,null===(r=e.nextHooks)||void 0===r||r.forEach(((t,o)=>{const r=t.get("afterPatch");"function"==typeof r&&r(e.state[o],e.state,e,o)}))),delete e.nextHooks})(e))},C=(e,t,o,r,a,i={})=>{o(a)?H(e,t,a,null==i?void 0:i.hooks):void 0===a||null===a&&(void 0===(null==i?void 0:i.required)||!1===(null==i?void 0:i.required))?H(e,t,null==i?void 0:i.defaultValue,null==i?void 0:i.hooks):(void 0!==(null==i?void 0:i.required)&&!1!==(null==i?void 0:i.required)||r.add(null),((e,t,o,r)=>{(0,n.d)(`[${e.constructor.name}] Der Property-Wert (${o}) f\xfcr '${t}' ist nicht valide. Folgende Werte sind erlaubt: ${Array.from(r).join(", ")}`)})(e,t,a,r))},T=(e,t,o,r)=>{C(e,t,(e=>"boolean"==typeof e),new Set(["Boolean {true, false}"]),o,r)},q=(e,t,o,r={})=>{const n="number"==typeof r.minLength?null==r?void 0:r.minLength:0;C(e,t,(e=>"string"==typeof e&&e.length>=n&&(void 0===(null==r?void 0:r.maxLength)||e.length<=r.maxLength)),new Set(["String"]),o,r)},j=(e,t,o,r)=>{C(e,t,(e=>"number"==typeof e&&(void 0===(null==r?void 0:r.min)||"number"==typeof(null==r?void 0:r.min)&&e>=r.min)&&(void 0===(null==r?void 0:r.max)||"number"==typeof(null==r?void 0:r.max)&&e<=r.max)),new Set(["Number"]),o,r)},P=(e,t,o,r,n=(e=>e==e),i={})=>{E(r,(()=>{M(r,(()=>{void 0===r&&(r=[]);try{try{r=F(r)}catch(e){}if(Array.isArray(r)){const l=r.find((e=>!o(e)));void 0===l&&n(r)?H(e,t,r,i.hooks):M(l,(()=>{throw a.L.debug(l),new Error("\u2191 Das Schema f\xfcr das Property (_options) ist nicht valide. Der Wert wird nicht ge\xe4ndert.")}))}else M(r,(()=>{throw a.L.debug(r),new Error("\u2191 Das Schema f\xfcr das Property (_options) ist nicht valide. Der Wert wird nicht ge\xe4ndert.")}))}catch(e){a.L.debug(e)}}))}))},z=/^(true|false)$/,D=/^-?(0|[1-9]\d*)$/,$=/^-?(0.|[1-9]\d*.)\d*[1-9]$/,J=e=>{const t=typeof e,o=`${e}`;if("string"==typeof e)if(z.test(e))e="true"===e;else if(D.test(e))e=parseInt(e);else if($.test(e))e=parseFloat(e);else if(B.test(e))try{e=F(e)}catch(e){}return t!==typeof e&&(0,n.d)(`You have used a stringified property value (${o} to ${JSON.stringify(e)}) which type switched from ${t} to ${typeof e}!`),e},R=e=>{try{return JSON.stringify(e).replace(/"/g,"'")}catch(t){throw a.L.warn(["stringifyJson",e]),a.L.error("\u2191 Das JSON konnte nicht in einen String umgewandelt werden. Es wird ein stringifizierbares JSON erwartet."),new Error}},B=/^[{[]/,F=e=>{if("string"==typeof e)try{return JSON.parse(e)}catch(t){if(B.test(e))try{return JSON.parse(e.replace(/'/g,'"'))}catch(t){a.L.warn(["parseJson",e]),a.L.error("\u2191 Der JSON-String konnte nicht geparsed werden. Achten Sie darauf, dass einfache Anf\xfchrungszeichen im Text maskiert werden (&#8216;).")}}throw new Error},I=e=>"boolean"==typeof e?!0===e?"true":"false":void 0,W=e=>"string"==typeof e?e:I(e),K=(e,t)=>s(e,t||(0,a.g)()),U=(e,t)=>l(e,t||(0,a.g)());let V=null;const Y=()=>(V=V||{backgroundColor:"#00000000",color:"#00000000",domNode:(0,a.g)().body,level:"Fail",score:1},V),G=/(\d+, ){3}0\)/,Q=(e,t=Y())=>{const o=getComputedStyle(e),r=G.test(o.backgroundColor)?t.backgroundColor:c.hex(o.backgroundColor),n=G.test(o.color)?t.color:c.hex(o.color),i=N(r,n),l={backgroundColor:r,color:n,domNode:e,level:A(i),score:i};return i<4.5&&a.L.error(["Color-Contrast-Error",{backgroundColor:l.backgroundColor,color:l.color,level:l.level,score:l.score},l.domNode]),l},X=(e,t=Y())=>{t.domNode instanceof HTMLElement&&(t=Q(t.domNode,t));const o=t.domNode.querySelector(e);if(null===o){const o=t.domNode.querySelectorAll('[class="hydrated"]');for(let r=0;r<o.length&&(t.domNode=o[r],null===(t=X(e,t)).domNode);r++);return t}return Q(o,t)},Z=(e,t=window)=>{e instanceof HTMLElement?(t.scrollTo({behavior:"smooth",top:e.getBoundingClientRect().top+(0,a.a)().pageYOffset-50}),e.focus()):(0,n.d)("Das HTMLElement ist nicht valide, zu dem gescrollt werden soll.")},ee=(e,t)=>{if((e instanceof Document||e instanceof HTMLElement||e instanceof ShadowRoot)&&"string"==typeof t){(0,n.d)("Bei der Methode querySelectorAll wurden die Parameter document, selector in selector, document getauscht, da der Parameter selector nicht, allerdings der Parameter document optional sein kann.");const o=`${t}`;t=e,e=o}if("string"==typeof e){const o=K(e,t);o instanceof HTMLElement?Z(o):(0,n.d)(`Es konnte kein HTMLElement mit dem Selector (${e}) gefunden werden, zu dem gescrollt werden soll.`)}else(0,n.d)("Der Selector ist nicht valide, zu dem gescrollt werden soll.")};class te{static queryHtmlElementColors(e,t,o=!1,r=!0){let n=null;if(!0===o||!1===te.executionLock)if(!1===o&&(te.cache.clear(),te.cache.set(t.domNode,t),te.executionLock=!0,!0===r&&a.L.debug("[KoliBriUtils] Color contrast analysis started...")),e===t.domNode)n=t;else{const o=new Set;if(t.domNode.shadowRoot){const e=t.domNode.shadowRoot.children;for(let t=0;t<e.length;t++)o.add(e[t])}const r=t.domNode;if("function"==typeof r.assignedNodes){const e=r.assignedNodes();for(let t=0;t<e.length;t++)e[t]instanceof HTMLElement&&o.add(e[t])}const a=t.domNode.children;for(let e=0;e<a.length;e++)o.add(a[e]);const i=Array.from(o);for(let l=0;l<i.length;l++){let o=te.cache.get(i[l]);void 0===o&&(o=Q(i[l],t)),te.cache.set(i[l],o);const r=te.queryHtmlElementColors(e,o,!0,!1);if(null!==r){n=r;break}}}else a.L.debug("[KoliBriUtils] Call aborted because a color contrast analysis is currently being executed.");return!1===o&&(!0===r&&a.L.debug(`[KoliBriUtils] Color contrast analysis finished (${te.cache.size} DOM elements are analysed).`),te.executionLock=!1,te.cache.clear()),n}}te.executionLock=!1,te.cache=new Map;class oe{}oe.patchTheme=r.p,oe.patchThemeTag=r.a,oe.querySelector=K,oe.querySelectorAll=U,oe.scrollByHTMLElement=Z,oe.scrollBySelector=ee,oe.stringifyJson=R},23193:(e,t,o)=>{o.d(t,{w:()=>a});var r=o(13986),n=o(72613);const a=(e,t,o)=>{(0,n.d)(t,"_links",(e=>"object"==typeof e&&"string"==typeof e._label),o),(0,r.u)(e,t.state._links.length)}}}]);