/*! For license information please see 3911.e50a5c50.js.LICENSE.txt */
"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[3911],{13066:(t,e,o)=>{o.d(e,{a:()=>n,w:()=>i});var r=o(47093);const n=(t,e,o)=>{(0,r.a)(t,e,(t=>"button"===t||"reset"===t||"submit"===t),new Set(["KoliBriButtonType {button, reset, submit}"]),o)},i=(t,e,o)=>{(0,r.a)(t,e,(t=>"primary"===t||"secondary"===t||"normal"===t||"danger"===t||"ghost"===t||"custom"===t),new Set(["KoliBriButtonVariant {primary, secondary, normal, danger, ghost, custom}"]),o,{defaultValue:"normal"})}},73911:(t,e,o)=>{o.r(e),o.d(e,{kol_link_button:()=>s});var r=o(89367),n=o(47093),i=o(29972),a=o(13066),l=o(1514);const s=class{constructor(t){(0,r.r)(this,t),this.catchRef=t=>{this.ref=t,(0,i.a)(this.host,this.ref)},this._ariaControls=void 0,this._ariaCurrent=void 0,this._ariaExpanded=void 0,this._ariaLabel=void 0,this._ariaSelected=void 0,this._customClass=void 0,this._disabled=!1,this._href=void 0,this._icon=void 0,this._iconOnly=!1,this._label=void 0,this._on=void 0,this._role=void 0,this._tabIndex=void 0,this._target=void 0,this._targetDescription=(0,l.a)("kol-open-link-in-tab"),this._tooltipAlign="right",this._variant="normal",this.state={}}render(){return(0,r.h)(r.H,null,(0,r.h)("kol-link-wc",{ref:this.catchRef,class:{button:!0,[this.state._variant]:"custom"!==this.state._variant,[this.state._customClass]:"custom"===this.state._variant&&"string"==typeof this.state._customClass&&this.state._customClass.length>0},_ariaControls:this._ariaControls,_ariaCurrent:this._ariaCurrent,_ariaExpanded:this._ariaExpanded,_ariaLabel:this._ariaLabel,_ariaSelected:this._ariaSelected,_disabled:this._disabled,_href:this._href,_icon:this._icon,_iconOnly:this._iconOnly,_label:this._label,_on:this._on,_role:"button",_tabIndex:this._tabIndex,_target:this._target,_targetDescription:this._targetDescription,_tooltipAlign:this._tooltipAlign},(0,r.h)("slot",{name:"expert",slot:"expert"})))}validateCustomClass(t){(0,n.w)(this,"_customClass",t,{defaultValue:void 0})}validateVariant(t){(0,a.w)(this,"_variant",t)}componentWillLoad(){this.validateCustomClass(this._customClass),this.validateVariant(this._variant)}get host(){return(0,r.g)(this)}static get watchers(){return{_customClass:["validateCustomClass"],_variant:["validateVariant"]}}};s.style={default:":host{--kolibri-border-color:#e0e0e0;--kolibri-border-radius:0.125rem;--kolibri-border-width:1px;--kolibri-color-error:#f44336;--kolibri-color-info:#2196f3;--kolibri-color-success:#4caf50;--kolibri-color-warning:#ff9800;--kolibri-color-primary:#3f51b5;--kolibri-color-secondary:#ff4081;--kolibri-color-normal:#9e9e9e;--kolibri-color-danger:#f44336;--kolibri-color-ghost:#f5f5f5;--kolibri-color-disabled:#bdbdbd;--kolibri-color-text:#222222;--kolibri-color-visited:#9c27b0;--kolibri-font-family:Verdana, Arial, Tahoma, Helvetica, sans-serif;--kolibri-font-size:16px;--kolibri-spacing:0.25rem}:host *{font-family:inherit;font-size:inherit;hyphens:auto;letter-spacing:inherit;word-break:break-word;word-spacing:inherit}:host{font-family:var(--kolibri-font-family);font-size:inherit}:host *{box-sizing:border-box}:host kol-icon{color:inherit}:host kol-span-wc{display:grid;place-items:center;width:100%}:host kol-span-wc>span{display:flex;gap:var(--kolibri-spacing);place-items:center}:host button{margin:0;min-height:44px;min-width:44px;padding:0}:host a,:host button,:host input,:host select,:host textarea{cursor:pointer}:host a.icon-only>kol-span-wc>span>span,:host button.icon-only>kol-span-wc>span>span{display:none}:host a{display:inline-flex;place-items:baseline}:host button{background-color:transparent;border-width:0}:host{display:inline-block}:host>kol-button-wc,:host>kol-link-wc{width:inherit}:host>kol-button-wc a,:host>kol-button-wc button,:host>kol-link-wc a,:host>kol-link-wc button{cursor:pointer;display:inline-block;min-height:44px;min-width:44px;padding:0;text-align:center;transition-duration:0.5s;transition-property:background-color, color, border-color;width:inherit}:host>kol-button-wc a:active,:host>kol-button-wc button:active,:host>kol-link-wc a:active,:host>kol-link-wc button:active{outline:0 !important;box-shadow:none !important}:host>kol-button-wc a:disabled,:host>kol-button-wc button:disabled,:host>kol-link-wc a:disabled,:host>kol-link-wc button:disabled{box-shadow:none;cursor:not-allowed;opacity:0.5}"}},47093:(t,e,o)=>{o.d(e,{K:()=>ot,a:()=>H,b:()=>T,c:()=>N,d:()=>P,e:()=>D,f:()=>M,g:()=>E,h:()=>V,i:()=>tt,j:()=>K,k:()=>W,l:()=>et,m:()=>R,n:()=>Q,o:()=>A,p:()=>I,q:()=>F,r:()=>c,s:()=>O,t:()=>X,u:()=>z,w:()=>q});var r=o(52027),n=o(73988),i=o(38708);const a=(t,e)=>{e.forEach((e=>{!1===t.has(e)&&t.add(e)}))},l=(t,e=document)=>{if(e instanceof Document||e instanceof HTMLElement||e instanceof ShadowRoot){const o=new Set;a(o,e.querySelectorAll(t));const r=e.querySelectorAll('[class*="hydrated"]');for(let e=0;e<r.length;e++){const n=r[e].shadowRoot;a(o,l(t,"object"==typeof n&&null!==n?n:r[e]))}return Array.from(o)}throw new Error("The parameter document for the method querySelectorAll is not type of Document, HTMLElement or ShadowRoot.")},s=(t,e=document)=>{if(e instanceof Document||e instanceof HTMLElement||e instanceof ShadowRoot){let o=e.querySelector(t);if(null===o){const r=e.querySelectorAll('[class*="hydrated"]');for(let e=0;e<r.length;e++){const n=r[e].shadowRoot;if(o=s(t,"object"==typeof n&&null!==n?n:r[e]),null!==o)break}}return o}throw new Error("The parameter document for the method querySelector is not type of Document, HTMLElement or ShadowRoot.")};var c=g,d=g,u=function(t){var e=p(t);return{r:e[0],g:e[1],b:e[2],a:3==e.length?255:Math.round(e[3])}},h=function(t){var e=p(t);return 3==e.length&&e.push(255),255==e[3]?"rgb("+e[0]+", "+e[1]+", "+e[2]+")":0==e[3]?"rgba("+e[0]+", "+e[1]+", "+e[2]+", 0)":"rgba("+e[0]+", "+e[1]+", "+e[2]+", "+String(e[3]/255).substr(1)+")"},f=function(t){3==(e=p(t)).length&&e.push(255);var e,o=255==e[3],r=m(e[0]),n=m(e[1]),i=m(e[2]),a=function(t,e,o,r){var n=["ff","00","11","22","33","44","55","66","77","88","99","aa","bb","cc","dd","ee"];return-1!=n.indexOf(t)&&-1!=n.indexOf(e)&&-1!=n.indexOf(o)&&-1!=n.indexOf(r)}(r,n,i,e=m(Math.round(e[3])));return o?a?"#"+r.charAt(0)+n.charAt(0)+i.charAt(0):"#"+r+n+i:a?"#"+r.charAt(0)+n.charAt(0)+i.charAt(0)+e.charAt(0):"#"+r+n+i+e},b=function(t){var e=p(t);return 3==e.length?e.push(255):e[3]=Math.round(e[3]),(e[3]<<24>>>0|e[0]<<16|e[1]<<8|e[2])>>>0};function g(t){var e=p(t);return 3==e.length?e.concat(255):(e[3]=Math.round(e[3]),e)}function p(t){return"string"==typeof t?function(t){return"red"==t?[255,0,0]:"green"==t?[0,255,0]:"blue"==t?[0,0,255]:"black"==t?[0,0,0]:"white"==t?[255,255,255]:"cyan"==t?[0,255,255]:"gray"==t||"grey"==t?[128,128,128]:"magenta"==t||"pink"==t?[255,0,255]:"yellow"==t?[255,255,0]:void 0}(t=t.toLowerCase())||function(t){var e=t.replace(/^#/,""),o=e.length;if(3==o||4==o){var r=y(e[0]),n=y(e[1]),i=y(e[2]),a=3==o?255:y(e[3]);if(isNaN(r)||isNaN(n)||isNaN(i)||isNaN(a))return;return[r,n,i,a]}}(t)||function(t){var e=t.replace(/^#/,""),o=e.length;if(6==o||8==o){var r=y(e.slice(0,2)),n=y(e.slice(2,4)),i=y(e.slice(4,6)),a=6==o?255:y(e.slice(6,8));if(isNaN(r)||isNaN(n)||isNaN(i)||isNaN(a))return;return[r,n,i,a]}}(t)||function(t){if("rgb("==t.substr(0,4)){var e=(t=t.match(/^rgb\(([^)]+)\)/)[1]).split(/ *, */).map(Number),o=v(e[0],!0),r=v(e[1],!0),n=v(e[2],!0);if(-1!=o&&-1!=r&&-1!=n)return[o,r,n,255]}}(t)||function(t){if("rgba("==t.substr(0,5)){var e=(t=t.match(/^rgba\(([^)]+)\)/)[1]).split(/ *, */).map(Number),o=v(e[0],!0),r=v(e[1],!0),n=v(e[2],!0),i=v(255*e[3]);if(-1!=o&&-1!=r&&-1!=n&&-1!=i)return[o,r,n,i]}}(t)||[0,0,0,255]:function(t){if("[object Object]"===Object.prototype.toString.call(t)&&Object.getPrototypeOf(t)===Object.getPrototypeOf({})){var e=v(null!=t.r?t.r:null!=t.red?t.red:0,!0),o=v(null!=t.g?t.g:null!=t.green?t.green:0,!0),r=v(null!=t.b?t.b:null!=t.blue?t.blue:0,!0),n=v(null!=t.a?t.a:null!=t.alpha?t.alpha:255,!0);if(-1!=e&&-1!=o&&-1!=r&&-1!=n)return[e,o,r,n]}}(t)||function(t){if(Array.isArray(t)&&(3==t.length||4==t.length)){var e=v(t[0],!0),o=v(t[1],!0),r=v(t[2],!0),n=v(null!=t[3]?t[3]:255,!0);if(-1!=e&&-1!=o&&-1!=r&&-1!=n)return[e,o,r,n]}}(t)||function(t){if("number"==typeof t&&Math.floor(t)==t&&t<=4294967295&&t>=0)return[t>>16&255,t>>8&255,255&t,t>>24&255]}(t)||[0,0,0,255]}function m(t){var e=t.toString(16);return 1==e.length?"0"+e:e}function y(t){return 1==t.length?parseInt(t+t,16):parseInt(t,16)}function v(t,e){return"number"!=typeof t||!0===e&&Math.floor(t)!==t?-1:t>=0&&t<=255?t:-1}c.arr=d,c.obj=u,c.css=h,c.hex=f,c.num=b;var k=1/12.92;function w(t){return Math.pow((t+.055)/1.055,2.4)}function _(t){var e=t[0]/255,o=t[1]/255,r=t[2]/255;return.2126*(e<=.03928?e*k:w(e))+.7152*(o<=.03928?o*k:w(o))+.0722*(r<=.03928?r*k:w(r))}function x(t){var e=255;8===(t=t.replace(/^#/,"")).length&&(e=parseInt(t.slice(6,8),16),t=t.substring(0,6)),4===t.length&&(e=parseInt(t.slice(3,4).repeat(2),16),t=t.substring(0,3)),3===t.length&&(t=t[0]+t[0]+t[1]+t[1]+t[2]+t[2]);var o=parseInt(t,16);return[o>>16,o>>8&255,255&o,e]}function S(t,e){return function(t,e){return(Math.max(t,e)+.05)/(Math.min(t,e)+.05)}(_(t),_(e))}function N(t,e){return S(x(t),x(e))}function L(t){return t>=7?"AAA":t>=4.5?"AA":t>=3?"AA Large":"Fail"}const C=/\[object Object\]/,A=(t,e)=>{"string"==typeof t&&C.test(t)||e()},E=(t,e)=>{"string"==typeof t&&""===t||e()},M=(t,e)=>{(0,i.b)()&&(i.L.debug([t,e]),i.L.debug("\u2191 We propagate the (submit) event to this target.")),Object.defineProperty(t,"target",{value:e,writable:!1})},O=(t,e,o,r={})=>{var n,i;void 0===t.nextHooks&&(t.nextHooks=new Map),void 0===t.nextState&&(t.nextState=new Map),t.nextState.get(e)!==o&&(t.nextHooks.get(e)instanceof Map==0&&t.nextHooks.set(e,new Map),"function"==typeof r.afterPatch&&(null===(n=t.nextHooks.get(e))||void 0===n||n.set("afterPatch",r.afterPatch)),"function"==typeof r.beforePatch&&(null===(i=t.nextHooks.get(e))||void 0===i||i.set("beforePatch",r.beforePatch)),t.nextState.set(e,o),(t=>{var e,o,r;null===(e=t.nextHooks)||void 0===e||e.forEach(((e,o)=>{var r;const n=e.get("beforePatch");"function"==typeof n&&n(null===(r=t.nextState)||void 0===r?void 0:r.get(o),t.nextState,t,o)})),(null===(o=t.nextState)||void 0===o?void 0:o.size)>0&&(t.state=Object.assign(Object.assign({},t.state),Object.fromEntries(t.nextState)),delete t.nextState,null===(r=t.nextHooks)||void 0===r||r.forEach(((e,o)=>{const r=e.get("afterPatch");"function"==typeof r&&r(t.state[o],t.state,t,o)}))),delete t.nextHooks})(t))},H=(t,e,o,r,i,a={})=>{o(i)?O(t,e,i,null==a?void 0:a.hooks):void 0===i||null===i&&(void 0===(null==a?void 0:a.required)||!1===(null==a?void 0:a.required))?O(t,e,null==a?void 0:a.defaultValue,null==a?void 0:a.hooks):(void 0!==(null==a?void 0:a.required)&&!1!==(null==a?void 0:a.required)||r.add(null),((t,e,o,r)=>{(0,n.d)(`[${t.constructor.name}] Der Property-Wert (${o}) f\xfcr '${e}' ist nicht valide. Folgende Werte sind erlaubt: ${Array.from(r).join(", ")}`)})(t,e,i,r))},T=(t,e,o,r)=>{H(t,e,(t=>"boolean"==typeof t),new Set(["Boolean {true, false}"]),o,r)},q=(t,e,o,r={})=>{const n="number"==typeof r.minLength?null==r?void 0:r.minLength:0;H(t,e,(t=>"string"==typeof t&&t.length>=n&&(void 0===(null==r?void 0:r.maxLength)||t.length<=r.maxLength)),new Set(["String"]),o,r)},D=(t,e,o,r)=>{H(t,e,(t=>"number"==typeof t&&(void 0===(null==r?void 0:r.min)||"number"==typeof(null==r?void 0:r.min)&&t>=r.min)&&(void 0===(null==r?void 0:r.max)||"number"==typeof(null==r?void 0:r.max)&&t<=r.max)),new Set(["Number"]),o,r)},P=(t,e,o,r,n=(t=>t==t),a={})=>{E(r,(()=>{A(r,(()=>{void 0===r&&(r=[]);try{try{r=I(r)}catch(t){}if(Array.isArray(r)){const l=r.find((t=>!o(t)));void 0===l&&n(r)?O(t,e,r,a.hooks):A(l,(()=>{throw i.L.debug(l),new Error("\u2191 Das Schema f\xfcr das Property (_options) ist nicht valide. Der Wert wird nicht ge\xe4ndert.")}))}else A(r,(()=>{throw i.L.debug(r),new Error("\u2191 Das Schema f\xfcr das Property (_options) ist nicht valide. Der Wert wird nicht ge\xe4ndert.")}))}catch(t){i.L.debug(t)}}))}))},j=/^(true|false)$/,$=/^-?(0|[1-9]\d*)$/,B=/^-?(0.|[1-9]\d*.)\d*[1-9]$/,R=t=>{const e=typeof t,o=`${t}`;if("string"==typeof t)if(j.test(t))t="true"===t;else if($.test(t))t=parseInt(t);else if(B.test(t))t=parseFloat(t);else if(J.test(t))try{t=I(t)}catch(t){}return e!==typeof t&&(0,n.d)(`You have used a stringified property value (${o} to ${JSON.stringify(t)}) which type switched from ${e} to ${typeof t}!`),t},z=t=>{try{return JSON.stringify(t).replace(/"/g,"'")}catch(e){throw i.L.warn(["stringifyJson",t]),i.L.error("\u2191 Das JSON konnte nicht in einen String umgewandelt werden. Es wird ein stringifizierbares JSON erwartet."),new Error}},J=/^[{[]/,I=t=>{if("string"==typeof t)try{return JSON.parse(t)}catch(e){if(J.test(t))try{return JSON.parse(t.replace(/'/g,'"'))}catch(e){i.L.warn(["parseJson",t]),i.L.error("\u2191 Der JSON-String konnte nicht geparsed werden. Achten Sie darauf, dass einfache Anf\xfchrungszeichen im Text maskiert werden (&#8216;).")}}throw new Error},V=t=>"boolean"==typeof t?!0===t?"true":"false":void 0,K=t=>"string"==typeof t?t:V(t),W=(t,e)=>s(t,e||(0,i.g)()),F=(t,e)=>l(t,e||(0,i.g)());let U=null;const Y=()=>(U=U||{backgroundColor:"#00000000",color:"#00000000",domNode:(0,i.g)().body,level:"Fail",score:1},U),G=/(\d+, ){3}0\)/,Q=(t,e=Y())=>{const o=getComputedStyle(t),r=G.test(o.backgroundColor)?e.backgroundColor:c.hex(o.backgroundColor),n=G.test(o.color)?e.color:c.hex(o.color),a=N(r,n),l={backgroundColor:r,color:n,domNode:t,level:L(a),score:a};return a<4.5&&i.L.error(["Color-Contrast-Error",{backgroundColor:l.backgroundColor,color:l.color,level:l.level,score:l.score},l.domNode]),l},X=(t,e=Y())=>{e.domNode instanceof HTMLElement&&(e=Q(e.domNode,e));const o=e.domNode.querySelector(t);if(null===o){const o=e.domNode.querySelectorAll('[class="hydrated"]');for(let r=0;r<o.length&&(e.domNode=o[r],null===(e=X(t,e)).domNode);r++);return e}return Q(o,e)},Z=(t,e=window)=>{t instanceof HTMLElement?(e.scrollTo({behavior:"smooth",top:t.getBoundingClientRect().top+(0,i.a)().pageYOffset-50}),t.focus()):(0,n.d)("Das HTMLElement ist nicht valide, zu dem gescrollt werden soll.")},tt=(t,e)=>{if((t instanceof Document||t instanceof HTMLElement||t instanceof ShadowRoot)&&"string"==typeof e){(0,n.d)("Bei der Methode querySelectorAll wurden die Parameter document, selector in selector, document getauscht, da der Parameter selector nicht, allerdings der Parameter document optional sein kann.");const o=`${e}`;e=t,t=o}if("string"==typeof t){const o=W(t,e);o instanceof HTMLElement?Z(o):(0,n.d)(`Es konnte kein HTMLElement mit dem Selector (${t}) gefunden werden, zu dem gescrollt werden soll.`)}else(0,n.d)("Der Selector ist nicht valide, zu dem gescrollt werden soll.")};class et{static queryHtmlElementColors(t,e,o=!1,r=!0){let n=null;if(!0===o||!1===et.executionLock)if(!1===o&&(et.cache.clear(),et.cache.set(e.domNode,e),et.executionLock=!0,!0===r&&i.L.debug("[KoliBriUtils] Color contrast analysis started...")),t===e.domNode)n=e;else{const o=new Set;if(e.domNode.shadowRoot){const t=e.domNode.shadowRoot.children;for(let e=0;e<t.length;e++)o.add(t[e])}const r=e.domNode;if("function"==typeof r.assignedNodes){const t=r.assignedNodes();for(let e=0;e<t.length;e++)t[e]instanceof HTMLElement&&o.add(t[e])}const i=e.domNode.children;for(let t=0;t<i.length;t++)o.add(i[t]);const a=Array.from(o);for(let l=0;l<a.length;l++){let o=et.cache.get(a[l]);void 0===o&&(o=Q(a[l],e)),et.cache.set(a[l],o);const r=et.queryHtmlElementColors(t,o,!0,!1);if(null!==r){n=r;break}}}else i.L.debug("[KoliBriUtils] Call aborted because a color contrast analysis is currently being executed.");return!1===o&&(!0===r&&i.L.debug(`[KoliBriUtils] Color contrast analysis finished (${et.cache.size} DOM elements are analysed).`),et.executionLock=!1,et.cache.clear()),n}}et.executionLock=!1,et.cache=new Map;class ot{}ot.patchTheme=r.p,ot.patchThemeTag=r.a,ot.querySelector=W,ot.querySelectorAll=F,ot.scrollByHTMLElement=Z,ot.scrollBySelector=tt,ot.stringifyJson=z}}]);