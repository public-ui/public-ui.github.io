/*! For license information please see 6840.2b435f3a.js.LICENSE.txt */
"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[6840],{16840:(e,t,r)=>{r.r(t),r.d(t,{kol_skip_nav:()=>l});var o=r(55640),n=r(16105),i=r(39895),a=r(2905);const l=class{constructor(e){(0,o.r)(this,e),this._ariaLabel=void 0,this._links=void 0,this.state={_ariaLabel:"\u2026",_links:[]}}render(){return(0,o.h)("nav",{"aria-label":this.state._ariaLabel},(0,o.h)("ul",null,this.state._links.map(((e,t)=>(0,o.h)("li",{key:t},(0,o.h)("kol-link",Object.assign({},e,{_stealth:!0})))))))}validateAriaLabel(e){(0,i.w)(this,"_ariaLabel",e,{required:!0}),(0,n.b)(e)}validateLinks(e){(0,a.w)("KolSkipNav",this,e)}componentWillLoad(){this.validateAriaLabel(this._ariaLabel),this.validateLinks(this._links)}static get watchers(){return{_ariaLabel:["validateAriaLabel"],_links:["validateLinks"]}}};l.style={default:":host{--kolibri-border-color:#e0e0e0;--kolibri-border-radius:0.125rem;--kolibri-border-width:1px;--kolibri-color-error:#f44336;--kolibri-color-info:#2196f3;--kolibri-color-success:#4caf50;--kolibri-color-warning:#ff9800;--kolibri-color-primary:#3f51b5;--kolibri-color-secondary:#ff4081;--kolibri-color-normal:#9e9e9e;--kolibri-color-danger:#f44336;--kolibri-color-ghost:#f5f5f5;--kolibri-color-disabled:#bdbdbd;--kolibri-color-text:#222222;--kolibri-color-visited:#9c27b0;--kolibri-font-family:Verdana, Arial, Tahoma, Helvetica, sans-serif;--kolibri-font-size:16px;--kolibri-spacing:0.25rem}*{hyphens:auto;letter-spacing:inherit;word-break:break-word;word-spacing:inherit}*{box-sizing:border-box;font-family:var(--kolibri-font-family)}kol-icon{color:inherit}kol-span-wc{display:grid;place-items:center;width:100%}kol-span-wc>span{display:flex;gap:var(--kolibri-spacing);place-items:center}a,button,input,select,textarea{cursor:pointer}a.icon-only>kol-span-wc>span>span,button.icon-only>kol-span-wc>span>span{display:none}a{display:inline-flex;place-items:baseline}button{background-color:transparent;border-width:0}h1,h2,h3,h4,h5,h6{font-size:1rem;margin:0}ul{display:grid;list-style:none;place-items:center}ul li{height:0}"}},39895:(e,t,r)=>{r.d(t,{K:()=>re,a:()=>q,b:()=>C,c:()=>x,d:()=>P,e:()=>j,f:()=>H,g:()=>O,h:()=>W,i:()=>ee,j:()=>K,k:()=>F,l:()=>te,m:()=>J,n:()=>Q,o:()=>E,p:()=>I,q:()=>U,r:()=>c,s:()=>T,t:()=>X,u:()=>R,w:()=>_});var o=r(57026),n=r(16105),i=r(12444);const a=(e,t)=>{t.forEach((t=>{!1===e.has(t)&&e.add(t)}))},l=(e,t=document)=>{if(t instanceof Document||t instanceof HTMLElement||t instanceof ShadowRoot){const r=new Set;a(r,t.querySelectorAll(e));const o=t.querySelectorAll('[class*="hydrated"]');for(let t=0;t<o.length;t++){const n=o[t].shadowRoot;a(r,l(e,"object"==typeof n&&null!==n?n:o[t]))}return Array.from(r)}throw new Error("The parameter document for the method querySelectorAll is not type of Document, HTMLElement or ShadowRoot.")},s=(e,t=document)=>{if(t instanceof Document||t instanceof HTMLElement||t instanceof ShadowRoot){let r=t.querySelector(e);if(null===r){const o=t.querySelectorAll('[class*="hydrated"]');for(let t=0;t<o.length;t++){const n=o[t].shadowRoot;if(r=s(e,"object"==typeof n&&null!==n?n:o[t]),null!==r)break}}return r}throw new Error("The parameter document for the method querySelector is not type of Document, HTMLElement or ShadowRoot.")};var c=b,d=b,u=function(e){var t=p(e);return{r:t[0],g:t[1],b:t[2],a:3==t.length?255:Math.round(t[3])}},f=function(e){var t=p(e);return 3==t.length&&t.push(255),255==t[3]?"rgb("+t[0]+", "+t[1]+", "+t[2]+")":0==t[3]?"rgba("+t[0]+", "+t[1]+", "+t[2]+", 0)":"rgba("+t[0]+", "+t[1]+", "+t[2]+", "+String(t[3]/255).substr(1)+")"},h=function(e){3==(t=p(e)).length&&t.push(255);var t,r=255==t[3],o=m(t[0]),n=m(t[1]),i=m(t[2]),a=function(e,t,r,o){var n=["ff","00","11","22","33","44","55","66","77","88","99","aa","bb","cc","dd","ee"];return-1!=n.indexOf(e)&&-1!=n.indexOf(t)&&-1!=n.indexOf(r)&&-1!=n.indexOf(o)}(o,n,i,t=m(Math.round(t[3])));return r?a?"#"+o.charAt(0)+n.charAt(0)+i.charAt(0):"#"+o+n+i:a?"#"+o.charAt(0)+n.charAt(0)+i.charAt(0)+t.charAt(0):"#"+o+n+i+t},g=function(e){var t=p(e);return 3==t.length?t.push(255):t[3]=Math.round(t[3]),(t[3]<<24>>>0|t[0]<<16|t[1]<<8|t[2])>>>0};function b(e){var t=p(e);return 3==t.length?t.concat(255):(t[3]=Math.round(t[3]),t)}function p(e){return"string"==typeof e?function(e){return"red"==e?[255,0,0]:"green"==e?[0,255,0]:"blue"==e?[0,0,255]:"black"==e?[0,0,0]:"white"==e?[255,255,255]:"cyan"==e?[0,255,255]:"gray"==e||"grey"==e?[128,128,128]:"magenta"==e||"pink"==e?[255,0,255]:"yellow"==e?[255,255,0]:void 0}(e=e.toLowerCase())||function(e){var t=e.replace(/^#/,""),r=t.length;if(3==r||4==r){var o=y(t[0]),n=y(t[1]),i=y(t[2]),a=3==r?255:y(t[3]);if(isNaN(o)||isNaN(n)||isNaN(i)||isNaN(a))return;return[o,n,i,a]}}(e)||function(e){var t=e.replace(/^#/,""),r=t.length;if(6==r||8==r){var o=y(t.slice(0,2)),n=y(t.slice(2,4)),i=y(t.slice(4,6)),a=6==r?255:y(t.slice(6,8));if(isNaN(o)||isNaN(n)||isNaN(i)||isNaN(a))return;return[o,n,i,a]}}(e)||function(e){if("rgb("==e.substr(0,4)){var t=(e=e.match(/^rgb\(([^)]+)\)/)[1]).split(/ *, */).map(Number),r=v(t[0],!0),o=v(t[1],!0),n=v(t[2],!0);if(-1!=r&&-1!=o&&-1!=n)return[r,o,n,255]}}(e)||function(e){if("rgba("==e.substr(0,5)){var t=(e=e.match(/^rgba\(([^)]+)\)/)[1]).split(/ *, */).map(Number),r=v(t[0],!0),o=v(t[1],!0),n=v(t[2],!0),i=v(255*t[3]);if(-1!=r&&-1!=o&&-1!=n&&-1!=i)return[r,o,n,i]}}(e)||[0,0,0,255]:function(e){if("[object Object]"===Object.prototype.toString.call(e)&&Object.getPrototypeOf(e)===Object.getPrototypeOf({})){var t=v(null!=e.r?e.r:null!=e.red?e.red:0,!0),r=v(null!=e.g?e.g:null!=e.green?e.green:0,!0),o=v(null!=e.b?e.b:null!=e.blue?e.blue:0,!0),n=v(null!=e.a?e.a:null!=e.alpha?e.alpha:255,!0);if(-1!=t&&-1!=r&&-1!=o&&-1!=n)return[t,r,o,n]}}(e)||function(e){if(Array.isArray(e)&&(3==e.length||4==e.length)){var t=v(e[0],!0),r=v(e[1],!0),o=v(e[2],!0),n=v(null!=e[3]?e[3]:255,!0);if(-1!=t&&-1!=r&&-1!=o&&-1!=n)return[t,r,o,n]}}(e)||function(e){if("number"==typeof e&&Math.floor(e)==e&&e<=4294967295&&e>=0)return[e>>16&255,e>>8&255,255&e,e>>24&255]}(e)||[0,0,0,255]}function m(e){var t=e.toString(16);return 1==t.length?"0"+t:t}function y(e){return 1==e.length?parseInt(e+e,16):parseInt(e,16)}function v(e,t){return"number"!=typeof e||!0===t&&Math.floor(e)!==e?-1:e>=0&&e<=255?e:-1}c.arr=d,c.obj=u,c.css=f,c.hex=h,c.num=g;var k=1/12.92;function w(e){return Math.pow((e+.055)/1.055,2.4)}function S(e){var t=e[0]/255,r=e[1]/255,o=e[2]/255;return.2126*(t<=.03928?t*k:w(t))+.7152*(r<=.03928?r*k:w(r))+.0722*(o<=.03928?o*k:w(o))}function L(e){var t=255;8===(e=e.replace(/^#/,"")).length&&(t=parseInt(e.slice(6,8),16),e=e.substring(0,6)),4===e.length&&(t=parseInt(e.slice(3,4).repeat(2),16),e=e.substring(0,3)),3===e.length&&(e=e[0]+e[0]+e[1]+e[1]+e[2]+e[2]);var r=parseInt(e,16);return[r>>16,r>>8&255,255&r,t]}function N(e,t){return function(e,t){return(Math.max(e,t)+.05)/(Math.min(e,t)+.05)}(S(e),S(t))}function x(e,t){return N(L(e),L(t))}function A(e){return e>=7?"AAA":e>=4.5?"AA":e>=3?"AA Large":"Fail"}const M=/\[object Object\]/,E=(e,t)=>{"string"==typeof e&&M.test(e)||t()},O=(e,t)=>{"string"==typeof e&&""===e||t()},H=(e,t)=>{(0,i.b)()&&(i.L.debug([e,t]),i.L.debug("\u2191 We propagate the (submit) event to this target.")),Object.defineProperty(e,"target",{value:t,writable:!1})},T=(e,t,r,o={})=>{var n,i;void 0===e.nextHooks&&(e.nextHooks=new Map),void 0===e.nextState&&(e.nextState=new Map),e.nextState.get(t)!==r&&(e.nextHooks.get(t)instanceof Map==0&&e.nextHooks.set(t,new Map),"function"==typeof o.afterPatch&&(null===(n=e.nextHooks.get(t))||void 0===n||n.set("afterPatch",o.afterPatch)),"function"==typeof o.beforePatch&&(null===(i=e.nextHooks.get(t))||void 0===i||i.set("beforePatch",o.beforePatch)),e.nextState.set(t,r),(e=>{var t,r,o;null===(t=e.nextHooks)||void 0===t||t.forEach(((t,r)=>{var o;const n=t.get("beforePatch");"function"==typeof n&&n(null===(o=e.nextState)||void 0===o?void 0:o.get(r),e.nextState,e,r)})),(null===(r=e.nextState)||void 0===r?void 0:r.size)>0&&(e.state=Object.assign(Object.assign({},e.state),Object.fromEntries(e.nextState)),delete e.nextState,null===(o=e.nextHooks)||void 0===o||o.forEach(((t,r)=>{const o=t.get("afterPatch");"function"==typeof o&&o(e.state[r],e.state,e,r)}))),delete e.nextHooks})(e))},q=(e,t,r,o,i,a={})=>{r(i)?T(e,t,i,null==a?void 0:a.hooks):void 0===i||null===i&&(void 0===(null==a?void 0:a.required)||!1===(null==a?void 0:a.required))?T(e,t,null==a?void 0:a.defaultValue,null==a?void 0:a.hooks):(void 0!==(null==a?void 0:a.required)&&!1!==(null==a?void 0:a.required)||o.add(null),((e,t,r,o)=>{(0,n.d)(`[${e.constructor.name}] Der Property-Wert (${r}) f\xfcr '${t}' ist nicht valide. Folgende Werte sind erlaubt: ${Array.from(o).join(", ")}`)})(e,t,i,o))},C=(e,t,r,o)=>{q(e,t,(e=>"boolean"==typeof e),new Set(["Boolean {true, false}"]),r,o)},_=(e,t,r,o={})=>{const n="number"==typeof o.minLength?null==o?void 0:o.minLength:0;q(e,t,(e=>"string"==typeof e&&e.length>=n),new Set([`String (Mindestl\xe4nge ${n})`]),r,o)},j=(e,t,r,o)=>{q(e,t,(e=>"number"==typeof e&&(void 0===(null==o?void 0:o.min)||"number"==typeof(null==o?void 0:o.min)&&e>=o.min)&&(void 0===(null==o?void 0:o.max)||"number"==typeof(null==o?void 0:o.max)&&e<=o.max)),new Set(["Number"]),r,o)},P=(e,t,r,o,n=(e=>e==e),a={})=>{O(o,(()=>{E(o,(()=>{void 0===o&&(o=[]);try{try{o=I(o)}catch(e){}if(Array.isArray(o)){const l=o.find((e=>!r(e)));void 0===l&&n(o)?T(e,t,o,a.hooks):E(l,(()=>{throw i.L.debug(l),new Error("\u2191 Das Schema f\xfcr das Property (_options) ist nicht valide. Der Wert wird nicht ge\xe4ndert.")}))}else E(o,(()=>{throw i.L.debug(o),new Error("\u2191 Das Schema f\xfcr das Property (_options) ist nicht valide. Der Wert wird nicht ge\xe4ndert.")}))}catch(e){i.L.debug(e)}}))}))},$=/^(true|false)$/,D=/^-?(0|[1-9]\d*)$/,z=/^-?(0.|[1-9]\d*.)\d*[1-9]$/,J=e=>{const t=typeof e,r=`${e}`;if("string"==typeof e)if($.test(e))e="true"===e;else if(D.test(e))e=parseInt(e);else if(z.test(e))e=parseFloat(e);else if(B.test(e))try{e=I(e)}catch(e){}return t!==typeof e&&(0,n.d)(`You have used a stringified property value (${r} to ${JSON.stringify(e)}) which type switched from ${t} to ${typeof e}!`),e},R=e=>{try{return JSON.stringify(e).replace(/"/g,"'")}catch(t){throw i.L.warn(["stringifyJson",e]),i.L.error("\u2191 Das JSON konnte nicht in einen String umgewandelt werden. Es wird ein stringifizierbares JSON erwartet."),new Error}},B=/^[{[]/,I=e=>{if("string"==typeof e)try{return JSON.parse(e)}catch(t){if(B.test(e))try{return JSON.parse(e.replace(/'/g,'"'))}catch(t){i.L.warn(["parseJson",e]),i.L.error("\u2191 Der JSON-String konnte nicht geparsed werden. Achten Sie darauf, dass einfache Anf\xfchrungszeichen im Text maskiert werden (&#8216;).")}}throw new Error},W=e=>"boolean"==typeof e?!0===e?"true":"false":void 0,K=e=>"string"==typeof e?e:W(e),F=(e,t)=>s(e,t||(0,i.g)()),U=(e,t)=>l(e,t||(0,i.g)());let V=null;const Y=()=>(V=V||{backgroundColor:"#00000000",color:"#00000000",domNode:(0,i.g)().body,level:"Fail",score:1},V),G=/(\d+, ){3}0\)/,Q=(e,t=Y())=>{const r=getComputedStyle(e),o=G.test(r.backgroundColor)?t.backgroundColor:c.hex(r.backgroundColor),n=G.test(r.color)?t.color:c.hex(r.color),a=x(o,n),l={backgroundColor:o,color:n,domNode:e,level:A(a),score:a};return a<4.5&&i.L.error(["Color-Contrast-Error",{backgroundColor:l.backgroundColor,color:l.color,level:l.level,score:l.score},l.domNode]),l},X=(e,t=Y())=>{t.domNode instanceof HTMLElement&&(t=Q(t.domNode,t));const r=t.domNode.querySelector(e);if(null===r){const r=t.domNode.querySelectorAll('[class="hydrated"]');for(let o=0;o<r.length&&(t.domNode=r[o],null===(t=X(e,t)).domNode);o++);return t}return Q(r,t)},Z=(e,t=window)=>{e instanceof HTMLElement?(t.scrollTo({behavior:"smooth",top:e.getBoundingClientRect().top+(0,i.a)().pageYOffset-50}),e.focus()):(0,n.d)("Das HTMLElement ist nicht valide, zu dem gescrollt werden soll.")},ee=(e,t)=>{if((e instanceof Document||e instanceof HTMLElement||e instanceof ShadowRoot)&&"string"==typeof t){(0,n.d)("Bei der Methode querySelectorAll wurden die Parameter document, selector in selector, document getauscht, da der Parameter selector nicht, allerdings der Parameter document optional sein kann.");const r=`${t}`;t=e,e=r}if("string"==typeof e){const r=F(e,t);r instanceof HTMLElement?Z(r):(0,n.d)(`Es konnte kein HTMLElement mit dem Selector (${e}) gefunden werden, zu dem gescrollt werden soll.`)}else(0,n.d)("Der Selector ist nicht valide, zu dem gescrollt werden soll.")};class te{static queryHtmlElementColors(e,t,r=!1,o=!0){let n=null;if(!0===r||!1===te.executionLock)if(!1===r&&(te.cache.clear(),te.cache.set(t.domNode,t),te.executionLock=!0,!0===o&&i.L.debug("[KoliBriUtils] Color contrast analysis started...")),e===t.domNode)n=t;else{const r=new Set;if(t.domNode.shadowRoot){const e=t.domNode.shadowRoot.children;for(let t=0;t<e.length;t++)r.add(e[t])}const o=t.domNode;if("function"==typeof o.assignedNodes){const e=o.assignedNodes();for(let t=0;t<e.length;t++)e[t]instanceof HTMLElement&&r.add(e[t])}const i=t.domNode.children;for(let e=0;e<i.length;e++)r.add(i[e]);const a=Array.from(r);for(let l=0;l<a.length;l++){let r=te.cache.get(a[l]);void 0===r&&(r=Q(a[l],t)),te.cache.set(a[l],r);const o=te.queryHtmlElementColors(e,r,!0,!1);if(null!==o){n=o;break}}}else i.L.debug("[KoliBriUtils] Call aborted because a color contrast analysis is currently being executed.");return!1===r&&(!0===o&&i.L.debug(`[KoliBriUtils] Color contrast analysis finished (${te.cache.size} DOM elements are analysed).`),te.executionLock=!1,te.cache.clear()),n}}te.executionLock=!1,te.cache=new Map;class re{}re.patchTheme=o.p,re.patchThemeTag=o.a,re.querySelector=F,re.querySelectorAll=U,re.scrollByHTMLElement=Z,re.scrollBySelector=ee,re.stringifyJson=R},2905:(e,t,r)=>{r.d(t,{w:()=>i});var o=r(16105),n=r(39895);const i=(e,t,r)=>{(0,n.d)(t,"_links",(e=>"object"==typeof e&&"string"==typeof e._label),r),(0,o.u)(e,t.state._links.length)}}}]);