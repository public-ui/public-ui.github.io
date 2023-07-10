/*! For license information please see 9006.8f20702e.js.LICENSE.txt */
"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[9006],{95049:(e,t,o)=>{o.d(t,{a:()=>a,b:()=>v,c:()=>b,d:()=>c,e:()=>s,f:()=>u,g:()=>p,h:()=>d,u:()=>g});var n=o(62780);const r=new Set,a=e=>{!1===r.has(e)&&(r.add(e),n.L.debug(e,{classifier:"\u270b a11y",overwriteStyle:"; background-color: #09f"}))},i=new Set,s=e=>{!1===i.has(e)&&(i.add(e),n.L.warn(e,{classifier:"\ud83d\udd25 deprecated",forceLog:!0,overwriteStyle:"; background-color: #f00"}))},l=new Set,c=e=>{!1===l.has(e)&&(l.add(e),n.L.debug(e,{classifier:"\ud83d\udcbb dev",overwriteStyle:"; background-color: #f09"}))},d=e=>{!1===l.has(e)&&(l.add(e),n.L.warn(e,{classifier:"\ud83d\udcbb dev",overwriteStyle:"; background-color: #f09"}))},h=new Set,u=(e,t=!1)=>{!1===h.has(e)&&(h.add(e),e+=!0===t?" \u2705":"",n.L.debug(e,{classifier:"\ud83c\udf1f feature",overwriteStyle:"; background-color: #309"}))};c("Wir freuen uns \xfcber jedes Feedback, Kommentare, Screenshots oder Demo-Links von einer auf KoliBri-basierenden Anwendung (kolibri@itzbund.de). Vielen Dank!");const f=new Set,g=e=>{!1===f.has(e)&&(f.add(e),n.L.debug(e,{classifier:"\ud83d\udcd1 ui/ux",overwriteStyle:"; background-color: #060;"}))},p=()=>{a('"Disabled" schr\xe4nkt die Zug\xe4nglichkeit und Sichtbarkeit ein. Wir empfehlen aus Sicht der Barrierefreiheit readonly- statt disabled-Attribut zu verwenden.\n- https://uxdesign.cc/is-it-ok-to-grey-out-disabled-buttons-8afa74a0fae')},v=e=>{"string"==typeof e&&""!==e||a("Manche Strukturelemente, wie bspw. der nav-Tag, k\xf6nnen mehrfach in einer Webseite verwendet werden. Damit die gleichnamigen Strukturelemente voneinander unterschieden werden k\xf6nnen, ist es erforderlich ein Aria-Label zu setzen.\n- https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/Navigation_Role#accessibility_concerns")},b=(e,t=8)=>{t>7&&g(`[${e}] Innerhalb von Navigationsstrukturen wird empfohlen nicht mehr als 7 Men\xfcpunkte zu verwenden.\n\nLinks:\n- https://de.ryte.com/wiki/Millersche_Zahl\n- https://de.wikipedia.org/wiki/Millersche_Zahl`)}},49593:(e,t,o)=>{o.d(t,{v:()=>r});var n=o(12577);const r=(e,t)=>{(0,n.b)(e,"_hasCloser",t)}},1369:(e,t,o)=>{o.r(t),o.d(t,{kol_toast:()=>l});var n=o(88468),r=o(49593),a=o(89278),i=o(12577),s=o(75670);const l=class{constructor(e){(0,n.r)(this,e),this.handleShowAndDuration=()=>{!0===this.state._show&&"number"==typeof this.state._showDuration&&this.state._showDuration>=0&&(clearTimeout(this.durationTimeout),this.durationTimeout=setTimeout((()=>{this.close()}),this.state._showDuration))},this.close=()=>{var e;this._show=!1,this.state=Object.assign(Object.assign({},this.state),{_show:!1}),void 0!==(null===(e=this._on)||void 0===e?void 0:e.onClose)&&this._on.onClose(new Event("Close"))},this.on={onClose:this.close},this._alert=!0,this._hasCloser=!1,this._heading="",this._level=1,this._on=void 0,this._show=!0,this._showDuration=1e4,this._type="default",this.state={_alert:!0,_level:1,_show:!0}}validateAlert(e){(0,i.b)(this,"_alert",e)}validateHasCloser(e){(0,r.v)(this,e)}validateHeading(e){(0,i.w)(this,"_heading",e)}validateLevel(e){(0,s.w)(this,e)}validateOn(e){"object"!=typeof e||"function"!=typeof(null==e?void 0:e.onClose)&&!0!==e.onClose||(0,i.s)(this,"_on",{onClose:e.onClose})}validateShow(e){(0,a.v)(this,e,{hooks:{afterPatch:this.handleShowAndDuration}})}validateShowDuration(e){(0,i.e)(this,"_showDuration",e,{hooks:{afterPatch:this.handleShowAndDuration}})}validateType(e){(0,i.a)(this,"_type",(e=>"string"==typeof e&&("default"===e||"error"===e||"info"===e||"success"===e||"warning"===e)),new Set("String {success, info, warning, error}"),e)}componentWillLoad(){this.validateAlert(this._alert),this.validateHasCloser(this._hasCloser),this.validateHeading(this._heading),this.validateLevel(this._level),this.validateOn(this._on),this.validateShow(this._show),this.validateShowDuration(this._showDuration),this.validateType(this._type)}render(){return(0,n.h)(n.H,null,this.state._show&&(0,n.h)("div",null,(0,n.h)("kol-alert",{_alert:this.state._alert,_heading:this.state._heading,_level:this.state._level,_hasCloser:this.state._hasCloser,_type:this.state._type,_variant:"card",_on:this.on},(0,n.h)("slot",null))))}static get watchers(){return{_alert:["validateAlert"],_hasCloser:["validateHasCloser"],_heading:["validateHeading"],_level:["validateLevel"],_on:["validateOn"],_show:["validateShow"],_showDuration:["validateShowDuration"],_type:["validateType"]}}};l.style={default:":host{--a11y-min-size:44px;font-size:inherit}*{hyphens:auto;letter-spacing:inherit;word-break:break-word;word-spacing:inherit}[role='button'],button:not([role='link']),kol-input .input{min-height:var(--a11y-min-size);min-width:var(--a11y-min-size)}a,button,h1,h2,h3,h4,h5,h6,input,option,select,textarea{font-family:inherit;font-size:inherit}:is(a,button){background-color:transparent;border:none;margin:0;padding:0;width:100%;}:host{max-width:100%}*{box-sizing:border-box}kol-span-wc{display:grid;place-items:center}kol-span-wc>span{display:flex;place-items:center}a,button{cursor:pointer}button,input,option,select,textarea{font-family:inherit}.icon-only>kol-span-wc>span>span{display:none}:host{display:block}:host>div{background-color:#fff;height:0;left:0;position:fixed;top:0;width:100%;z-index:200}:host>div>kol-alert{display:block;margin:auto;max-width:750px}:host>div>kol-button-wc{display:block;margin:auto;position:relative;top:0;width:1em}"}},12577:(e,t,o)=>{o.d(t,{K:()=>ie,a:()=>z,b:()=>P,c:()=>C,d:()=>R,e:()=>$,f:()=>E,g:()=>O,h:()=>V,i:()=>re,j:()=>Z,k:()=>Y,l:()=>ae,m:()=>I,n:()=>te,o:()=>H,p:()=>U,q:()=>G,r:()=>c,s:()=>T,t:()=>oe,u:()=>K,w:()=>q});var n=o(95049),r=o(62780),a=o(30705);const i=(e,t)=>{t.forEach((t=>{!1===e.has(t)&&e.add(t)}))},s=(e,t=document)=>{if(t instanceof Document||t instanceof HTMLElement||t instanceof ShadowRoot){const o=new Set;i(o,t.querySelectorAll(e));const n=t.querySelectorAll('[class*="hydrated"]');for(let t=0;t<n.length;t++){const r=n[t].shadowRoot;i(o,s(e,"object"==typeof r&&null!==r?r:n[t]))}return Array.from(o)}throw new Error("The parameter document for the method querySelectorAll is not type of Document, HTMLElement or ShadowRoot.")},l=(e,t=document)=>{if(t instanceof Document||t instanceof HTMLElement||t instanceof ShadowRoot){let o=t.querySelector(e);if(null===o){const n=t.querySelectorAll('[class*="hydrated"]');for(let t=0;t<n.length;t++){const r=n[t].shadowRoot;if(o=l(e,"object"==typeof r&&null!==r?r:n[t]),null!==o)break}}return o}throw new Error("The parameter document for the method querySelector is not type of Document, HTMLElement or ShadowRoot.")};var c=p,d=p,h=function(e){var t=v(e);return{r:t[0],g:t[1],b:t[2],a:3==t.length?255:Math.round(t[3])}},u=function(e){var t=v(e);return 3==t.length&&t.push(255),255==t[3]?"rgb("+t[0]+", "+t[1]+", "+t[2]+")":0==t[3]?"rgba("+t[0]+", "+t[1]+", "+t[2]+", 0)":"rgba("+t[0]+", "+t[1]+", "+t[2]+", "+String(t[3]/255).substr(1)+")"},f=function(e){3==(t=v(e)).length&&t.push(255);var t,o=255==t[3],n=b(t[0]),r=b(t[1]),a=b(t[2]),i=function(e,t,o,n){var r=["ff","00","11","22","33","44","55","66","77","88","99","aa","bb","cc","dd","ee"];return-1!=r.indexOf(e)&&-1!=r.indexOf(t)&&-1!=r.indexOf(o)&&-1!=r.indexOf(n)}(n,r,a,t=b(Math.round(t[3])));return o?i?"#"+n.charAt(0)+r.charAt(0)+a.charAt(0):"#"+n+r+a:i?"#"+n.charAt(0)+r.charAt(0)+a.charAt(0)+t.charAt(0):"#"+n+r+a+t},g=function(e){var t=v(e);return 3==t.length?t.push(255):t[3]=Math.round(t[3]),(t[3]<<24>>>0|t[0]<<16|t[1]<<8|t[2])>>>0};function p(e){var t=v(e);return 3==t.length?t.concat(255):(t[3]=Math.round(t[3]),t)}function v(e){return"string"==typeof e?function(e){return"red"==e?[255,0,0]:"green"==e?[0,255,0]:"blue"==e?[0,0,255]:"black"==e?[0,0,0]:"white"==e?[255,255,255]:"cyan"==e?[0,255,255]:"gray"==e||"grey"==e?[128,128,128]:"magenta"==e||"pink"==e?[255,0,255]:"yellow"==e?[255,255,0]:void 0}(e=e.toLowerCase())||function(e){var t=e.replace(/^#/,""),o=t.length;if(3==o||4==o){var n=m(t[0]),r=m(t[1]),a=m(t[2]),i=3==o?255:m(t[3]);if(isNaN(n)||isNaN(r)||isNaN(a)||isNaN(i))return;return[n,r,a,i]}}(e)||function(e){var t=e.replace(/^#/,""),o=t.length;if(6==o||8==o){var n=m(t.slice(0,2)),r=m(t.slice(2,4)),a=m(t.slice(4,6)),i=6==o?255:m(t.slice(6,8));if(isNaN(n)||isNaN(r)||isNaN(a)||isNaN(i))return;return[n,r,a,i]}}(e)||function(e){if("rgb("==e.substr(0,4)){var t=(e=e.match(/^rgb\(([^)]+)\)/)[1]).split(/ *, */).map(Number),o=w(t[0],!0),n=w(t[1],!0),r=w(t[2],!0);if(-1!=o&&-1!=n&&-1!=r)return[o,n,r,255]}}(e)||function(e){if("rgba("==e.substr(0,5)){var t=(e=e.match(/^rgba\(([^)]+)\)/)[1]).split(/ *, */).map(Number),o=w(t[0],!0),n=w(t[1],!0),r=w(t[2],!0),a=w(255*t[3]);if(-1!=o&&-1!=n&&-1!=r&&-1!=a)return[o,n,r,a]}}(e)||[0,0,0,255]:function(e){if("[object Object]"===Object.prototype.toString.call(e)&&Object.getPrototypeOf(e)===Object.getPrototypeOf({})){var t=w(null!=e.r?e.r:null!=e.red?e.red:0,!0),o=w(null!=e.g?e.g:null!=e.green?e.green:0,!0),n=w(null!=e.b?e.b:null!=e.blue?e.blue:0,!0),r=w(null!=e.a?e.a:null!=e.alpha?e.alpha:255,!0);if(-1!=t&&-1!=o&&-1!=n&&-1!=r)return[t,o,n,r]}}(e)||function(e){if(Array.isArray(e)&&(3==e.length||4==e.length)){var t=w(e[0],!0),o=w(e[1],!0),n=w(e[2],!0),r=w(null!=e[3]?e[3]:255,!0);if(-1!=t&&-1!=o&&-1!=n&&-1!=r)return[t,o,n,r]}}(e)||function(e){if("number"==typeof e&&Math.floor(e)==e&&e<=4294967295&&e>=0)return[e>>16&255,e>>8&255,255&e,e>>24&255]}(e)||[0,0,0,255]}function b(e){var t=e.toString(16);return 1==t.length?"0"+t:t}function m(e){return 1==e.length?parseInt(e+e,16):parseInt(e,16)}function w(e,t){return"number"!=typeof e||!0===t&&Math.floor(e)!==e?-1:e>=0&&e<=255?e:-1}c.arr=d,c.obj=h,c.css=u,c.hex=f,c.num=g;var y=.2126,k=.7152,S=.0722,_=1/12.92;function x(e){return Math.pow((e+.055)/1.055,2.4)}function L(e){var t=e[0]/255,o=e[1]/255,n=e[2]/255,r=t<=.03928?t*_:x(t),a=o<=.03928?o*_:x(o),i=n<=.03928?n*_:x(n);return r*y+a*k+i*S}function N(e){var t=255;8===(e=e.replace(/^#/,"")).length&&(t=parseInt(e.slice(6,8),16),e=e.substring(0,6)),4===e.length&&(t=parseInt(e.slice(3,4).repeat(2),16),e=e.substring(0,3)),3===e.length&&(e=e[0]+e[0]+e[1]+e[1]+e[2]+e[2]);var o=parseInt(e,16);return[o>>16,o>>8&255,255&o,t]}function A(e,t){return function(e,t){return(Math.max(e,t)+.05)/(Math.min(e,t)+.05)}(L(e),L(t))}function C(e,t){return A(N(e),N(t))}function D(e){return e>=7?"AAA":e>=4.5?"AA":e>=3?"AA Large":"Fail"}const M=/\[object Object\]/,H=(e,t)=>{"string"==typeof e&&M.test(e)||t()},O=(e,t)=>{"string"==typeof e&&""===e||t()},E=(e,t)=>{(0,r.b)()&&(r.L.debug([e,t]),r.L.debug("\u2191 We propagate the (submit) event to this target.")),Object.defineProperty(e,"target",{value:t,writable:!1})},T=(e,t,o,n={})=>{var r,a;void 0===e.nextHooks&&(e.nextHooks=new Map),void 0===e.nextState&&(e.nextState=new Map),e.nextState.get(t)!==o&&(e.nextHooks.get(t)instanceof Map==0&&e.nextHooks.set(t,new Map),"function"==typeof n.afterPatch&&(null===(r=e.nextHooks.get(t))||void 0===r||r.set("afterPatch",n.afterPatch)),"function"==typeof n.beforePatch&&(null===(a=e.nextHooks.get(t))||void 0===a||a.set("beforePatch",n.beforePatch)),e.nextState.set(t,o),(e=>{var t,o,n;null===(t=e.nextHooks)||void 0===t||t.forEach(((t,o)=>{var n;const r=t.get("beforePatch");"function"==typeof r&&r(null===(n=e.nextState)||void 0===n?void 0:n.get(o),e.nextState,e,o)})),(null===(o=e.nextState)||void 0===o?void 0:o.size)>0&&(e.state=Object.assign(Object.assign({},e.state),Object.fromEntries(e.nextState)),delete e.nextState,null===(n=e.nextHooks)||void 0===n||n.forEach(((t,o)=>{const n=t.get("afterPatch");"function"==typeof n&&n(e.state[o],e.state,e,o)}))),delete e.nextHooks})(e))},j=(e,t,o,r)=>{(0,n.d)(`[${e.constructor.name}] Der Property-Wert (${o}) f\xfcr '${t}' ist nicht valide. Folgende Werte sind erlaubt: ${Array.from(r).join(", ")}`)};function z(e,t,o,n,r,a={}){o(r)?T(e,t,r,a.hooks):null!=r||a.required?(a.required||n.add(null),j(e,t,r,n)):T(e,t,a.defaultValue,a.hooks)}const P=(e,t,o,n)=>{z(e,t,(e=>"boolean"==typeof e),new Set(["Boolean {true, false}"]),o,n)},q=(e,t,o,n={})=>{const r="number"==typeof n.minLength?null==n?void 0:n.minLength:0;z(e,t,(e=>"string"==typeof e&&e.length>=r&&(void 0===(null==n?void 0:n.maxLength)||e.length<=n.maxLength)),new Set(["String"]),o,n)},$=(e,t,o,n)=>{z(e,t,(e=>"number"==typeof e&&(void 0===(null==n?void 0:n.min)||"number"==typeof(null==n?void 0:n.min)&&e>=n.min)&&(void 0===(null==n?void 0:n.max)||"number"==typeof(null==n?void 0:n.max)&&e<=n.max)),new Set(["Number"]),o,n)},R=(e,t,o,n,a=(e=>e==e),i={})=>{O(n,(()=>{H(n,(()=>{void 0===n&&(n=[]);try{try{n=U(n)}catch(e){}if(Array.isArray(n)){const s=n.find((e=>!o(e)));void 0===s&&a(n)?T(e,t,n,i.hooks):H(s,(()=>{throw r.L.debug(s),new Error("\u2191 Das Schema f\xfcr das Property (_options) ist nicht valide. Der Wert wird nicht ge\xe4ndert.")}))}else H(n,(()=>{throw r.L.debug(n),new Error("\u2191 Das Schema f\xfcr das Property (_options) ist nicht valide. Der Wert wird nicht ge\xe4ndert.")}))}catch(e){r.L.debug(e)}}))}))},B=/^(true|false)$/,J=/^-?(0|[1-9]\d*)$/,W=/^-?(0.|[1-9]\d*.)\d*[1-9]$/,I=e=>{const t=typeof e,o=`${e}`;if("string"==typeof e)if(B.test(e))e="true"===e;else if(J.test(e))e=parseInt(e);else if(W.test(e))e=parseFloat(e);else if(F.test(e))try{e=U(e)}catch(e){}return t!==typeof e&&(0,n.d)(`You have used a stringified property value (${o} to ${JSON.stringify(e)}) which type switched from ${t} to ${typeof e}!`),e},K=e=>{try{return JSON.stringify(e).replace(/"/g,"'")}catch(S){throw r.L.warn(["stringifyJson",e]),r.L.error("\u2191 Das JSON konnte nicht in einen String umgewandelt werden. Es wird ein stringifizierbares JSON erwartet."),new Error}},F=/^[{[]/,U=e=>{if("string"==typeof e)try{return JSON.parse(e)}catch(S){if(F.test(e))try{return JSON.parse(e.replace(/'/g,'"'))}catch(S){r.L.warn(["parseJson",e]),r.L.error("\u2191 Der JSON-String konnte nicht geparsed werden. Achten Sie darauf, dass einfache Anf\xfchrungszeichen im Text maskiert werden (&#8216;).")}}throw new Error},V=e=>"boolean"==typeof e?!0===e?"true":"false":void 0,Z=e=>"string"==typeof e?e:V(e),Y=(e,t)=>l(e,t||(0,r.g)()),G=(e,t)=>s(e,t||(0,r.g)());let Q=null;const X=()=>(Q=Q||{backgroundColor:"#00000000",color:"#00000000",domNode:(0,r.g)().body,level:"Fail",score:1},Q),ee=/(\d+, ){3}0\)/,te=(e,t=X())=>{const o=getComputedStyle(e),n=ee.test(o.backgroundColor)?t.backgroundColor:c.hex(o.backgroundColor),a=ee.test(o.color)?t.color:c.hex(o.color),i=C(n,a),s={backgroundColor:n,color:a,domNode:e,level:D(i),score:i};return i<4.5&&r.L.error(["Color-Contrast-Error",{backgroundColor:s.backgroundColor,color:s.color,level:s.level,score:s.score},s.domNode]),s},oe=(e,t=X())=>{t.domNode instanceof HTMLElement&&(t=te(t.domNode,t));const o=t.domNode.querySelector(e);if(null===o){const o=t.domNode.querySelectorAll('[class="hydrated"]');for(let n=0;n<o.length&&(t.domNode=o[n],null===(t=oe(e,t)).domNode);n++);return t}return te(o,t)},ne=(e,t=window)=>{e instanceof HTMLElement?(t.scrollTo({behavior:"smooth",top:e.getBoundingClientRect().top+(0,r.a)().pageYOffset-50}),e.focus()):(0,n.d)("Das HTMLElement ist nicht valide, zu dem gescrollt werden soll.")},re=(e,t)=>{if((e instanceof Document||e instanceof HTMLElement||e instanceof ShadowRoot)&&"string"==typeof t){(0,n.d)("Bei der Methode querySelectorAll wurden die Parameter document, selector in selector, document getauscht, da der Parameter selector nicht, allerdings der Parameter document optional sein kann.");const o=`${t}`;t=e,e=o}if("string"==typeof e){const o=Y(e,t);o instanceof HTMLElement?ne(o):(0,n.d)(`Es konnte kein HTMLElement mit dem Selector (${e}) gefunden werden, zu dem gescrollt werden soll.`)}else(0,n.d)("Der Selector ist nicht valide, zu dem gescrollt werden soll.")};class ae{static queryHtmlElementColors(e,t,o=!1,n=!0){let a=null;if(!0===o||!1===ae.executionLock)if(!1===o&&(ae.cache.clear(),ae.cache.set(t.domNode,t),ae.executionLock=!0,!0===n&&r.L.debug("[KoliBriUtils] Color contrast analysis started...")),e===t.domNode)a=t;else{const o=new Set;if(t.domNode.shadowRoot){const e=t.domNode.shadowRoot.children;for(let t=0;t<e.length;t++)o.add(e[t])}const n=t.domNode;if("function"==typeof n.assignedNodes){const e=n.assignedNodes();for(let t=0;t<e.length;t++)e[t]instanceof HTMLElement&&o.add(e[t])}const r=t.domNode.children;for(let e=0;e<r.length;e++)o.add(r[e]);const i=Array.from(o);for(let s=0;s<i.length;s++){let o=ae.cache.get(i[s]);void 0===o&&(o=te(i[s],t)),ae.cache.set(i[s],o);const n=ae.queryHtmlElementColors(e,o,!0,!1);if(null!==n){a=n;break}}}else r.L.debug("[KoliBriUtils] Call aborted because a color contrast analysis is currently being executed.");return!1===o&&(!0===n&&r.L.debug(`[KoliBriUtils] Color contrast analysis finished (${ae.cache.size} DOM elements are analysed).`),ae.executionLock=!1,ae.cache.clear()),a}}ae.executionLock=!1,ae.cache=new Map;class ie{}ie.patchTheme=a.p,ie.patchThemeTag=a.a,ie.querySelector=Y,ie.querySelectorAll=G,ie.scrollByHTMLElement=ne,ie.scrollBySelector=re,ie.stringifyJson=K},89278:(e,t,o)=>{o.d(t,{v:()=>r});var n=o(12577);const r=(e,t,o)=>{(0,n.b)(e,"_show",t,o)}},75670:(e,t,o)=>{o.d(t,{w:()=>r});var n=o(12577);const r=(e,t)=>{(0,n.a)(e,"_level",(e=>"number"==typeof e&&0<=e&&e<=6),new Set(["Number {0, 1, 2, 3, 4, 5, 6}"]),t,{defaultValue:1,required:!0})}}}]);