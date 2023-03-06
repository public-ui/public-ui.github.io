/*! For license information please see 2598.710494a8.js.LICENSE.txt */
"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[2598],{42598:(e,t,o)=>{o.r(t),o.d(t,{kol_modal:()=>l});var n=o(83547),r=o(13986),i=o(27612),a=o(72613);const l=class{constructor(e){(0,n.r)(this,e),this.onKeyDown=e=>{e&&"Escape"===e.code&&(this._activeElement=null)},this._activeElement=void 0,this._ariaLabel=void 0,this._width="100%",this._on=void 0,this._show=!1,this.state={_activeElement:null,_ariaLabel:"\u2026",_show:!1,_width:"100%"}}componentDidRender(){this.hostElement&&(this.state._activeElement?(0,i.d)().Modal.openModal(this.hostElement,this.state._activeElement):(0,i.d)().Modal.closeModal(this.hostElement))}disconnectedCallback(){this.hostElement&&(0,i.d)().Modal.closeModal(this.hostElement)}render(){return(0,n.h)(n.H,{ref:e=>{this.hostElement=e}},this.state._activeElement&&(0,n.h)("div",null,(0,n.h)("div",null,(0,n.h)("div",{style:{width:this.state._width},"aria-label":this.state._ariaLabel,"aria-modal":"true",role:"dialog",onKeyDown:this.onKeyDown,ref:e=>{e&&(e.setAttribute("tabindex","0"),setTimeout((()=>e.focus()),250))}},(0,n.h)("slot",null)))))}validateActiveElement(e){(0,a.a)(this,"_activeElement",(e=>"object"==typeof e||null===e),new Set(["HTMLElement","null"]),e,{defaultValue:null})}validateAriaLabel(e){(0,a.w)(this,"_ariaLabel",e,{required:!0})}validateOn(e){if("object"==typeof e&&null!==e){(0,r.f)("[KolTabs] Pr\xfcfen, wie man auch einen EventCallback einzeln \xe4ndern kann.");const t={};"function"!=typeof e.onClose&&!0!==e.onClose||(t.onClose=e.onClose),(0,a.s)(this,"_on",t)}}validateShow(e){(0,a.b)(this,"_show",e,{defaultValue:!1,hooks:{afterPatch:()=>{!1===this.state._show&&(this._activeElement=null)}}})}validateWidth(e){(0,a.w)(this,"_width",e,{defaultValue:"100%"})}componentWillLoad(){this.validateActiveElement(this._activeElement),this.validateAriaLabel(this._ariaLabel),this.validateOn(this._on),this.validateShow(this._show),this.validateWidth(this._width)}static get watchers(){return{_activeElement:["validateActiveElement"],_ariaLabel:["validateAriaLabel"],_on:["validateOn"],_show:["validateShow"],_width:["validateWidth"]}}};l.style={default:":host{--kolibri-border-color:#666;--kolibri-border-radius:0.125rem;--kolibri-border-width:1px;--kolibri-color-error:#f44336;--kolibri-color-info:#2196f3;--kolibri-color-success:#4caf50;--kolibri-color-warning:#ff9800;--kolibri-color-primary:#3f51b5;--kolibri-color-secondary:#ff4081;--kolibri-color-normal:#9e9e9e;--kolibri-color-danger:#f44336;--kolibri-color-ghost:#f5f5f5;--kolibri-color-disabled:#bdbdbd;--kolibri-color-text:#222222;--kolibri-color-visited:#9c27b0;--kolibri-font-family:Verdana, Arial, Tahoma, Helvetica, sans-serif;--kolibri-font-size:16px;--kolibri-spacing:0.25rem}:host{font-family:inherit;font-size:inherit}:host *{hyphens:auto;letter-spacing:inherit;word-break:break-word;word-spacing:inherit}:host{display:inline-block}a,button{background-color:transparent;border:none;font-size:inherit;margin:0;padding:0;transition-duration:0.5s;transition-property:background-color, color, border-color}:host{font-family:var(--kolibri-font-family);font-size:inherit}*{box-sizing:border-box}kol-icon{color:inherit}kol-span-wc{display:grid;gap:var(--kolibri-spacing);place-items:center}kol-span-wc>span{display:flex;gap:var(--kolibri-spacing);place-items:center}kol-span-wc>kol-icon,kol-span-wc>span>kol-icon{display:inline-grid;place-items:center;width:1em;height:1em}a,button,input,select,textarea{appearance:none;cursor:pointer}a.icon-only>kol-span-wc>span>span,button.icon-only>kol-span-wc>span>span{display:none}h1,h2,h3,h4,h5,h6{font-family:var(--kolibri-font-family);font-size:var(--kolibri-font-size);margin:0;padding:0}:host>div{width:100%;height:100%;z-index:100;position:fixed;left:0;top:0;background-color:rgba(0, 0, 0, 0.33)}:host>div>div{height:100%;padding:calc(4 * var(--kolibri-spacing));position:absolute;width:100%}:host>div>div>div{position:relative;max-height:100%;max-width:100%;overflow-x:hidden;overflow-y:auto;left:50%;top:50%;transform:translate(-50%, -50%)}"}},72613:(e,t,o)=>{o.d(t,{K:()=>oe,a:()=>C,b:()=>T,c:()=>L,d:()=>P,e:()=>D,f:()=>O,g:()=>_,h:()=>K,i:()=>ee,j:()=>I,k:()=>V,l:()=>te,m:()=>R,n:()=>Q,o:()=>M,p:()=>B,q:()=>F,r:()=>c,s:()=>H,t:()=>X,u:()=>J,w:()=>q});var n=o(26235),r=o(13986),i=o(27612);const a=(e,t)=>{t.forEach((t=>{!1===e.has(t)&&e.add(t)}))},l=(e,t=document)=>{if(t instanceof Document||t instanceof HTMLElement||t instanceof ShadowRoot){const o=new Set;a(o,t.querySelectorAll(e));const n=t.querySelectorAll('[class*="hydrated"]');for(let t=0;t<n.length;t++){const r=n[t].shadowRoot;a(o,l(e,"object"==typeof r&&null!==r?r:n[t]))}return Array.from(o)}throw new Error("The parameter document for the method querySelectorAll is not type of Document, HTMLElement or ShadowRoot.")},s=(e,t=document)=>{if(t instanceof Document||t instanceof HTMLElement||t instanceof ShadowRoot){let o=t.querySelector(e);if(null===o){const n=t.querySelectorAll('[class*="hydrated"]');for(let t=0;t<n.length;t++){const r=n[t].shadowRoot;if(o=s(e,"object"==typeof r&&null!==r?r:n[t]),null!==o)break}}return o}throw new Error("The parameter document for the method querySelector is not type of Document, HTMLElement or ShadowRoot.")};var c=b,d=b,h=function(e){var t=m(e);return{r:t[0],g:t[1],b:t[2],a:3==t.length?255:Math.round(t[3])}},u=function(e){var t=m(e);return 3==t.length&&t.push(255),255==t[3]?"rgb("+t[0]+", "+t[1]+", "+t[2]+")":0==t[3]?"rgba("+t[0]+", "+t[1]+", "+t[2]+", 0)":"rgba("+t[0]+", "+t[1]+", "+t[2]+", "+String(t[3]/255).substr(1)+")"},f=function(e){3==(t=m(e)).length&&t.push(255);var t,o=255==t[3],n=p(t[0]),r=p(t[1]),i=p(t[2]),a=function(e,t,o,n){var r=["ff","00","11","22","33","44","55","66","77","88","99","aa","bb","cc","dd","ee"];return-1!=r.indexOf(e)&&-1!=r.indexOf(t)&&-1!=r.indexOf(o)&&-1!=r.indexOf(n)}(n,r,i,t=p(Math.round(t[3])));return o?a?"#"+n.charAt(0)+r.charAt(0)+i.charAt(0):"#"+n+r+i:a?"#"+n.charAt(0)+r.charAt(0)+i.charAt(0)+t.charAt(0):"#"+n+r+i+t},g=function(e){var t=m(e);return 3==t.length?t.push(255):t[3]=Math.round(t[3]),(t[3]<<24>>>0|t[0]<<16|t[1]<<8|t[2])>>>0};function b(e){var t=m(e);return 3==t.length?t.concat(255):(t[3]=Math.round(t[3]),t)}function m(e){return"string"==typeof e?function(e){return"red"==e?[255,0,0]:"green"==e?[0,255,0]:"blue"==e?[0,0,255]:"black"==e?[0,0,0]:"white"==e?[255,255,255]:"cyan"==e?[0,255,255]:"gray"==e||"grey"==e?[128,128,128]:"magenta"==e||"pink"==e?[255,0,255]:"yellow"==e?[255,255,0]:void 0}(e=e.toLowerCase())||function(e){var t=e.replace(/^#/,""),o=t.length;if(3==o||4==o){var n=v(t[0]),r=v(t[1]),i=v(t[2]),a=3==o?255:v(t[3]);if(isNaN(n)||isNaN(r)||isNaN(i)||isNaN(a))return;return[n,r,i,a]}}(e)||function(e){var t=e.replace(/^#/,""),o=t.length;if(6==o||8==o){var n=v(t.slice(0,2)),r=v(t.slice(2,4)),i=v(t.slice(4,6)),a=6==o?255:v(t.slice(6,8));if(isNaN(n)||isNaN(r)||isNaN(i)||isNaN(a))return;return[n,r,i,a]}}(e)||function(e){if("rgb("==e.substr(0,4)){var t=(e=e.match(/^rgb\(([^)]+)\)/)[1]).split(/ *, */).map(Number),o=y(t[0],!0),n=y(t[1],!0),r=y(t[2],!0);if(-1!=o&&-1!=n&&-1!=r)return[o,n,r,255]}}(e)||function(e){if("rgba("==e.substr(0,5)){var t=(e=e.match(/^rgba\(([^)]+)\)/)[1]).split(/ *, */).map(Number),o=y(t[0],!0),n=y(t[1],!0),r=y(t[2],!0),i=y(255*t[3]);if(-1!=o&&-1!=n&&-1!=r&&-1!=i)return[o,n,r,i]}}(e)||[0,0,0,255]:function(e){if("[object Object]"===Object.prototype.toString.call(e)&&Object.getPrototypeOf(e)===Object.getPrototypeOf({})){var t=y(null!=e.r?e.r:null!=e.red?e.red:0,!0),o=y(null!=e.g?e.g:null!=e.green?e.green:0,!0),n=y(null!=e.b?e.b:null!=e.blue?e.blue:0,!0),r=y(null!=e.a?e.a:null!=e.alpha?e.alpha:255,!0);if(-1!=t&&-1!=o&&-1!=n&&-1!=r)return[t,o,n,r]}}(e)||function(e){if(Array.isArray(e)&&(3==e.length||4==e.length)){var t=y(e[0],!0),o=y(e[1],!0),n=y(e[2],!0),r=y(null!=e[3]?e[3]:255,!0);if(-1!=t&&-1!=o&&-1!=n&&-1!=r)return[t,o,n,r]}}(e)||function(e){if("number"==typeof e&&Math.floor(e)==e&&e<=4294967295&&e>=0)return[e>>16&255,e>>8&255,255&e,e>>24&255]}(e)||[0,0,0,255]}function p(e){var t=e.toString(16);return 1==t.length?"0"+t:t}function v(e){return 1==e.length?parseInt(e+e,16):parseInt(e,16)}function y(e,t){return"number"!=typeof e||!0===t&&Math.floor(e)!==e?-1:e>=0&&e<=255?e:-1}c.arr=d,c.obj=h,c.css=u,c.hex=f,c.num=g;var w=1/12.92;function k(e){return Math.pow((e+.055)/1.055,2.4)}function S(e){var t=e[0]/255,o=e[1]/255,n=e[2]/255;return.2126*(t<=.03928?t*w:k(t))+.7152*(o<=.03928?o*w:k(o))+.0722*(n<=.03928?n*w:k(n))}function x(e){var t=255;8===(e=e.replace(/^#/,"")).length&&(t=parseInt(e.slice(6,8),16),e=e.substring(0,6)),4===e.length&&(t=parseInt(e.slice(3,4).repeat(2),16),e=e.substring(0,3)),3===e.length&&(e=e[0]+e[0]+e[1]+e[1]+e[2]+e[2]);var o=parseInt(e,16);return[o>>16,o>>8&255,255&o,t]}function E(e,t){return function(e,t){return(Math.max(e,t)+.05)/(Math.min(e,t)+.05)}(S(e),S(t))}function L(e,t){return E(x(e),x(t))}function N(e){return e>=7?"AAA":e>=4.5?"AA":e>=3?"AA Large":"Fail"}const A=/\[object Object\]/,M=(e,t)=>{"string"==typeof e&&A.test(e)||t()},_=(e,t)=>{"string"==typeof e&&""===e||t()},O=(e,t)=>{(0,i.b)()&&(i.L.debug([e,t]),i.L.debug("\u2191 We propagate the (submit) event to this target.")),Object.defineProperty(e,"target",{value:t,writable:!1})},H=(e,t,o,n={})=>{var r,i;void 0===e.nextHooks&&(e.nextHooks=new Map),void 0===e.nextState&&(e.nextState=new Map),e.nextState.get(t)!==o&&(e.nextHooks.get(t)instanceof Map==0&&e.nextHooks.set(t,new Map),"function"==typeof n.afterPatch&&(null===(r=e.nextHooks.get(t))||void 0===r||r.set("afterPatch",n.afterPatch)),"function"==typeof n.beforePatch&&(null===(i=e.nextHooks.get(t))||void 0===i||i.set("beforePatch",n.beforePatch)),e.nextState.set(t,o),(e=>{var t,o,n;null===(t=e.nextHooks)||void 0===t||t.forEach(((t,o)=>{var n;const r=t.get("beforePatch");"function"==typeof r&&r(null===(n=e.nextState)||void 0===n?void 0:n.get(o),e.nextState,e,o)})),(null===(o=e.nextState)||void 0===o?void 0:o.size)>0&&(e.state=Object.assign(Object.assign({},e.state),Object.fromEntries(e.nextState)),delete e.nextState,null===(n=e.nextHooks)||void 0===n||n.forEach(((t,o)=>{const n=t.get("afterPatch");"function"==typeof n&&n(e.state[o],e.state,e,o)}))),delete e.nextHooks})(e))},C=(e,t,o,n,i,a={})=>{o(i)?H(e,t,i,null==a?void 0:a.hooks):void 0===i||null===i&&(void 0===(null==a?void 0:a.required)||!1===(null==a?void 0:a.required))?H(e,t,null==a?void 0:a.defaultValue,null==a?void 0:a.hooks):(void 0!==(null==a?void 0:a.required)&&!1!==(null==a?void 0:a.required)||n.add(null),((e,t,o,n)=>{(0,r.d)(`[${e.constructor.name}] Der Property-Wert (${o}) f\xfcr '${t}' ist nicht valide. Folgende Werte sind erlaubt: ${Array.from(n).join(", ")}`)})(e,t,i,n))},T=(e,t,o,n)=>{C(e,t,(e=>"boolean"==typeof e),new Set(["Boolean {true, false}"]),o,n)},q=(e,t,o,n={})=>{const r="number"==typeof n.minLength?null==n?void 0:n.minLength:0;C(e,t,(e=>"string"==typeof e&&e.length>=r&&(void 0===(null==n?void 0:n.maxLength)||e.length<=n.maxLength)),new Set(["String"]),o,n)},D=(e,t,o,n)=>{C(e,t,(e=>"number"==typeof e&&(void 0===(null==n?void 0:n.min)||"number"==typeof(null==n?void 0:n.min)&&e>=n.min)&&(void 0===(null==n?void 0:n.max)||"number"==typeof(null==n?void 0:n.max)&&e<=n.max)),new Set(["Number"]),o,n)},P=(e,t,o,n,r=(e=>e==e),a={})=>{_(n,(()=>{M(n,(()=>{void 0===n&&(n=[]);try{try{n=B(n)}catch(e){}if(Array.isArray(n)){const l=n.find((e=>!o(e)));void 0===l&&r(n)?H(e,t,n,a.hooks):M(l,(()=>{throw i.L.debug(l),new Error("\u2191 Das Schema f\xfcr das Property (_options) ist nicht valide. Der Wert wird nicht ge\xe4ndert.")}))}else M(n,(()=>{throw i.L.debug(n),new Error("\u2191 Das Schema f\xfcr das Property (_options) ist nicht valide. Der Wert wird nicht ge\xe4ndert.")}))}catch(e){i.L.debug(e)}}))}))},j=/^(true|false)$/,z=/^-?(0|[1-9]\d*)$/,$=/^-?(0.|[1-9]\d*.)\d*[1-9]$/,R=e=>{const t=typeof e,o=`${e}`;if("string"==typeof e)if(j.test(e))e="true"===e;else if(z.test(e))e=parseInt(e);else if($.test(e))e=parseFloat(e);else if(W.test(e))try{e=B(e)}catch(e){}return t!==typeof e&&(0,r.d)(`You have used a stringified property value (${o} to ${JSON.stringify(e)}) which type switched from ${t} to ${typeof e}!`),e},J=e=>{try{return JSON.stringify(e).replace(/"/g,"'")}catch(t){throw i.L.warn(["stringifyJson",e]),i.L.error("\u2191 Das JSON konnte nicht in einen String umgewandelt werden. Es wird ein stringifizierbares JSON erwartet."),new Error}},W=/^[{[]/,B=e=>{if("string"==typeof e)try{return JSON.parse(e)}catch(t){if(W.test(e))try{return JSON.parse(e.replace(/'/g,'"'))}catch(t){i.L.warn(["parseJson",e]),i.L.error("\u2191 Der JSON-String konnte nicht geparsed werden. Achten Sie darauf, dass einfache Anf\xfchrungszeichen im Text maskiert werden (&#8216;).")}}throw new Error},K=e=>"boolean"==typeof e?!0===e?"true":"false":void 0,I=e=>"string"==typeof e?e:K(e),V=(e,t)=>s(e,t||(0,i.g)()),F=(e,t)=>l(e,t||(0,i.g)());let U=null;const Y=()=>(U=U||{backgroundColor:"#00000000",color:"#00000000",domNode:(0,i.g)().body,level:"Fail",score:1},U),G=/(\d+, ){3}0\)/,Q=(e,t=Y())=>{const o=getComputedStyle(e),n=G.test(o.backgroundColor)?t.backgroundColor:c.hex(o.backgroundColor),r=G.test(o.color)?t.color:c.hex(o.color),a=L(n,r),l={backgroundColor:n,color:r,domNode:e,level:N(a),score:a};return a<4.5&&i.L.error(["Color-Contrast-Error",{backgroundColor:l.backgroundColor,color:l.color,level:l.level,score:l.score},l.domNode]),l},X=(e,t=Y())=>{t.domNode instanceof HTMLElement&&(t=Q(t.domNode,t));const o=t.domNode.querySelector(e);if(null===o){const o=t.domNode.querySelectorAll('[class="hydrated"]');for(let n=0;n<o.length&&(t.domNode=o[n],null===(t=X(e,t)).domNode);n++);return t}return Q(o,t)},Z=(e,t=window)=>{e instanceof HTMLElement?(t.scrollTo({behavior:"smooth",top:e.getBoundingClientRect().top+(0,i.a)().pageYOffset-50}),e.focus()):(0,r.d)("Das HTMLElement ist nicht valide, zu dem gescrollt werden soll.")},ee=(e,t)=>{if((e instanceof Document||e instanceof HTMLElement||e instanceof ShadowRoot)&&"string"==typeof t){(0,r.d)("Bei der Methode querySelectorAll wurden die Parameter document, selector in selector, document getauscht, da der Parameter selector nicht, allerdings der Parameter document optional sein kann.");const o=`${t}`;t=e,e=o}if("string"==typeof e){const o=V(e,t);o instanceof HTMLElement?Z(o):(0,r.d)(`Es konnte kein HTMLElement mit dem Selector (${e}) gefunden werden, zu dem gescrollt werden soll.`)}else(0,r.d)("Der Selector ist nicht valide, zu dem gescrollt werden soll.")};class te{static queryHtmlElementColors(e,t,o=!1,n=!0){let r=null;if(!0===o||!1===te.executionLock)if(!1===o&&(te.cache.clear(),te.cache.set(t.domNode,t),te.executionLock=!0,!0===n&&i.L.debug("[KoliBriUtils] Color contrast analysis started...")),e===t.domNode)r=t;else{const o=new Set;if(t.domNode.shadowRoot){const e=t.domNode.shadowRoot.children;for(let t=0;t<e.length;t++)o.add(e[t])}const n=t.domNode;if("function"==typeof n.assignedNodes){const e=n.assignedNodes();for(let t=0;t<e.length;t++)e[t]instanceof HTMLElement&&o.add(e[t])}const i=t.domNode.children;for(let e=0;e<i.length;e++)o.add(i[e]);const a=Array.from(o);for(let l=0;l<a.length;l++){let o=te.cache.get(a[l]);void 0===o&&(o=Q(a[l],t)),te.cache.set(a[l],o);const n=te.queryHtmlElementColors(e,o,!0,!1);if(null!==n){r=n;break}}}else i.L.debug("[KoliBriUtils] Call aborted because a color contrast analysis is currently being executed.");return!1===o&&(!0===n&&i.L.debug(`[KoliBriUtils] Color contrast analysis finished (${te.cache.size} DOM elements are analysed).`),te.executionLock=!1,te.cache.clear()),r}}te.executionLock=!1,te.cache=new Map;class oe{}oe.patchTheme=n.p,oe.patchThemeTag=n.a,oe.querySelector=V,oe.querySelectorAll=F,oe.scrollByHTMLElement=Z,oe.scrollBySelector=ee,oe.stringifyJson=J}}]);