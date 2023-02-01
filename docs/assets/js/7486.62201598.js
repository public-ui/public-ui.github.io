/*! For license information please see 7486.62201598.js.LICENSE.txt */
"use strict";(self.webpackChunk_public_ui_website=self.webpackChunk_public_ui_website||[]).push([[7486],{9155:(e,t,n)=>{n.d(t,{a:()=>g,b:()=>s,c:()=>f,d:()=>c,e:()=>i,f:()=>u,u:()=>p});var o=n(1276);const r=new Set,i=e=>{!1===r.has(e)&&(r.add(e),o.L.info(e,{classifier:"\u270ba11y",overwriteStyle:"; background-color: #09f"}))},a=new Set,s=e=>{!1===a.has(e)&&(a.add(e),o.L.warn(e,{classifier:"\ud83d\udd25deprecated",forceLog:!0,overwriteStyle:"; background-color: #f00"}))},l=new Set,c=e=>{!1===l.has(e)&&(l.add(e),o.L.debug(e,{classifier:"\ud83d\udcbbdev",overwriteStyle:"; background-color: #f09"}))},d=new Set,u=(e,t=!1)=>{!1===d.has(e)&&(d.add(e),e+=!0===t?" \u2705":"",o.L.debug(e,{classifier:"\ud83c\udf1ffeature",overwriteStyle:"; background-color: #309"}))};c("Wir freuen uns \xfcber jedes Feedback, Kommentare, Screenshots oder Demo-Links von einer auf KoliBri-basierenden Anwendung (kolibri@itzbund.de). Vielen Dank!");const h=new Set,f=()=>{i('"Disabled" schr\xe4nkt die Zug\xe4nglichkeit und Sichtbarkeit ein. Wir empfehlen aus Sicht der Barrierefreiheit readonly- statt disabled-Attribut zu verwenden.\n- https://uxdesign.cc/is-it-ok-to-grey-out-disabled-buttons-8afa74a0fae')},g=e=>{"string"==typeof e&&""!==e||i("Manche Strukturelemente, wie bspw. der nav-Tag, k\xf6nnen mehrfach in einer Webseite verwendet werden. Damit die gleichnamigen Strukturelemente voneinander unterschieden werden k\xf6nnen, ist es erforderlich ein Aria-Label zu setzen.\n- https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/Navigation_Role#accessibility_concerns")},p=(e,t=8)=>{var n;t>7&&(n=`[${e}] Innerhalb von Navigationsstrukturen wird empfohlen nicht mehr als 7 Men\xfcpunkte zu verwenden.\n\nLinks:\n- https://de.ryte.com/wiki/Millersche_Zahl\n- https://de.wikipedia.org/wiki/Millersche_Zahl`,!1===h.has(n)&&(h.add(n),o.L.debug(n,{classifier:"\ud83d\udcd1ui/ux",overwriteStyle:"; background-color: #060;"})))}},74:(e,t,n)=>{n.d(t,{f:()=>c,s:()=>l});var o=1/12.92;function r(e){return Math.pow((e+.055)/1.055,2.4)}function i(e){var t=e[0]/255,n=e[1]/255,i=e[2]/255;return.2126*(t<=.03928?t*o:r(t))+.7152*(n<=.03928?n*o:r(n))+.0722*(i<=.03928?i*o:r(i))}function a(e){var t=255;8===(e=e.replace(/^#/,"")).length&&(t=parseInt(e.slice(6,8),16),e=e.substring(0,6)),4===e.length&&(t=parseInt(e.slice(3,4).repeat(2),16),e=e.substring(0,3)),3===e.length&&(e=e[0]+e[0]+e[1]+e[1]+e[2]+e[2]);var n=parseInt(e,16);return[n>>16,n>>8&255,255&n,t]}function s(e,t){return function(e,t){return(Math.max(e,t)+.05)/(Math.min(e,t)+.05)}(i(e),i(t))}function l(e,t){return s(a(e),a(t))}function c(e){return e>=7?"AAA":e>=4.5?"AA":e>=3?"AA Large":"Fail"}},7486:(e,t,n)=>{n.r(t),n.d(t,{kol_toast:()=>s});var o=n(6041),r=n(2396),i=n(1937),a=n(9155);const s=class{constructor(e){(0,o.r)(this,e),this.handleShowAndDuration=()=>{!0===this.state._show&&"number"==typeof this.state._showDuration&&this.state._showDuration>=0&&(clearTimeout(this.durationTimeout),this.durationTimeout=setTimeout((()=>{clearTimeout(this.durationTimeout),this.close()}),this.state._showDuration))},this.close=()=>{var e;this._show=!1,this.state=Object.assign(Object.assign({},this.state),{_show:!1}),void 0!==(null===(e=this._on)||void 0===e?void 0:e.onClose)&&this._on.onClose(new Event("Close"))},this.on={onClose:this.close},this._alert=!0,this._hasCloser=!1,this._heading="",this._level=1,this._on=void 0,this._show=!0,this._showDuration=1e4,this._type="default",this.state={_alert:!0,_level:1,_show:!0}}validateAlert(e){(0,r.b)(this,"_alert",e)}validateHasCloser(e){(0,r.b)(this,"_hasCloser",e)}validateHeading(e){(0,r.w)(this,"_heading",e)}validateLevel(e){(0,i.w)(this,e)}validateOn(e){if("object"==typeof e&&null!==e){(0,a.f)("[KolToast] Pr\xfcfen, wie man auch einen EventCallback einzeln \xe4ndern kann.");const t={};"function"!=typeof e.onClose&&!0!==e.onClose||(t.onClose=e.onClose),(0,r.s)(this,"_on",t)}}validateShow(e){(0,r.b)(this,"_show",e,{hooks:{afterPatch:this.handleShowAndDuration}})}validateShowDuration(e){(0,r.d)(this,"_showDuration",e,{hooks:{afterPatch:this.handleShowAndDuration}})}validateType(e){(0,r.a)(this,"_type",(e=>"string"==typeof e&&("default"===e||"error"===e||"info"===e||"success"===e||"warning"===e)),new Set("String {success, info, warning, error}"),e)}componentWillLoad(){this.validateAlert(this._alert),this.validateHasCloser(this._hasCloser),this.validateHeading(this._heading),this.validateLevel(this._level),this.validateOn(this._on),this.validateShow(this._show),this.validateShowDuration(this._showDuration),this.validateType(this._type)}render(){return(0,o.h)(o.H,null,this.state._show&&(0,o.h)("div",null,(0,o.h)("kol-alert",{_alert:this.state._alert,_heading:this.state._heading,_level:this.state._level,_hasCloser:this.state._hasCloser,_type:this.state._type,_variant:"card",_on:this.on},(0,o.h)("slot",null))))}static get watchers(){return{_alert:["validateAlert"],_hasCloser:["validateHasCloser"],_heading:["validateHeading"],_level:["validateLevel"],_on:["validateOn"],_show:["validateShow"],_showDuration:["validateShowDuration"],_type:["validateType"]}}};s.style={default:"@windicss; *{box-sizing:border-box;font-size:inherit;hyphens:auto;letter-spacing:inherit;word-break:break-word;word-spacing:inherit}kol-heading-wc{font-weight:700}kol-icon{color:inherit}kol-span-wc{display:grid;place-items:center;width:100%}kol-span-wc>span{display:flex;gap:0.25rem;place-items:center}a,button{cursor:pointer}a.icon-only>kol-span-wc>span>span,button.icon-only>kol-span-wc>span>span{display:none}a{display:inline-flex;place-items:baseline}button{border-width:0}"}},2396:(e,t,n)=>{n.d(t,{K:()=>Y,a:()=>A,b:()=>x,c:()=>D,d:()=>M,e:()=>L,f:()=>_,g:()=>$,h:()=>V,i:()=>z,j:()=>Z,k:()=>R,l:()=>K,m:()=>O,n:()=>B,o:()=>k,p:()=>q,q:()=>F,r:()=>d,s:()=>N,t:()=>j,w:()=>C});var o=n(9994),r=n(74),i=n(9155),a=n(1276);const s=(e,t)=>{t.forEach((t=>{!1===e.has(t)&&e.add(t)}))},l=(e,t=document)=>{if(t instanceof Document||t instanceof HTMLElement||t instanceof ShadowRoot){const n=new Set;s(n,t.querySelectorAll(e));const o=t.querySelectorAll('[class*="hydrated"]');for(let t=0;t<o.length;t++){const r=o[t].shadowRoot;s(n,l(e,"object"==typeof r&&null!==r?r:o[t]))}return Array.from(n)}throw new Error("The parameter document for the method querySelectorAll is not type of Document, HTMLElement or ShadowRoot.")},c=(e,t=document)=>{if(t instanceof Document||t instanceof HTMLElement||t instanceof ShadowRoot){let n=t.querySelector(e);if(null===n){const o=t.querySelectorAll('[class*="hydrated"]');for(let t=0;t<o.length;t++){const r=o[t].shadowRoot;if(n=c(e,"object"==typeof r&&null!==r?r:o[t]),null!==n)break}}return n}throw new Error("The parameter document for the method querySelector is not type of Document, HTMLElement or ShadowRoot.")};var d=v,u=v,h=function(e){var t=b(e);return{r:t[0],g:t[1],b:t[2],a:3==t.length?255:Math.round(t[3])}},f=function(e){var t=b(e);return 3==t.length&&t.push(255),255==t[3]?"rgb("+t[0]+", "+t[1]+", "+t[2]+")":0==t[3]?"rgba("+t[0]+", "+t[1]+", "+t[2]+", 0)":"rgba("+t[0]+", "+t[1]+", "+t[2]+", "+String(t[3]/255).substr(1)+")"},g=function(e){3==(t=b(e)).length&&t.push(255);var t,n=255==t[3],o=w(t[0]),r=w(t[1]),i=w(t[2]),a=function(e,t,n,o){var r=["ff","00","11","22","33","44","55","66","77","88","99","aa","bb","cc","dd","ee"];return-1!=r.indexOf(e)&&-1!=r.indexOf(t)&&-1!=r.indexOf(n)&&-1!=r.indexOf(o)}(o,r,i,t=w(Math.round(t[3])));return n?a?"#"+o.charAt(0)+r.charAt(0)+i.charAt(0):"#"+o+r+i:a?"#"+o.charAt(0)+r.charAt(0)+i.charAt(0)+t.charAt(0):"#"+o+r+i+t},p=function(e){var t=b(e);return 3==t.length?t.push(255):t[3]=Math.round(t[3]),(t[3]<<24>>>0|t[0]<<16|t[1]<<8|t[2])>>>0};function v(e){var t=b(e);return 3==t.length?t.concat(255):(t[3]=Math.round(t[3]),t)}function b(e){return"string"==typeof e?function(e){return"red"==e?[255,0,0]:"green"==e?[0,255,0]:"blue"==e?[0,0,255]:"black"==e?[0,0,0]:"white"==e?[255,255,255]:"cyan"==e?[0,255,255]:"gray"==e||"grey"==e?[128,128,128]:"magenta"==e||"pink"==e?[255,0,255]:"yellow"==e?[255,255,0]:void 0}(e=e.toLowerCase())||function(e){var t=e.replace(/^#/,""),n=t.length;if(3==n||4==n){var o=m(t[0]),r=m(t[1]),i=m(t[2]),a=3==n?255:m(t[3]);if(isNaN(o)||isNaN(r)||isNaN(i)||isNaN(a))return;return[o,r,i,a]}}(e)||function(e){var t=e.replace(/^#/,""),n=t.length;if(6==n||8==n){var o=m(t.slice(0,2)),r=m(t.slice(2,4)),i=m(t.slice(4,6)),a=6==n?255:m(t.slice(6,8));if(isNaN(o)||isNaN(r)||isNaN(i)||isNaN(a))return;return[o,r,i,a]}}(e)||function(e){if("rgb("==e.substr(0,4)){var t=(e=e.match(/^rgb\(([^)]+)\)/)[1]).split(/ *, */).map(Number),n=y(t[0],!0),o=y(t[1],!0),r=y(t[2],!0);if(-1!=n&&-1!=o&&-1!=r)return[n,o,r,255]}}(e)||function(e){if("rgba("==e.substr(0,5)){var t=(e=e.match(/^rgba\(([^)]+)\)/)[1]).split(/ *, */).map(Number),n=y(t[0],!0),o=y(t[1],!0),r=y(t[2],!0),i=y(255*t[3]);if(-1!=n&&-1!=o&&-1!=r&&-1!=i)return[n,o,r,i]}}(e)||[0,0,0,255]:function(e){if("[object Object]"===Object.prototype.toString.call(e)&&Object.getPrototypeOf(e)===Object.getPrototypeOf({})){var t=y(null!=e.r?e.r:null!=e.red?e.red:0,!0),n=y(null!=e.g?e.g:null!=e.green?e.green:0,!0),o=y(null!=e.b?e.b:null!=e.blue?e.blue:0,!0),r=y(null!=e.a?e.a:null!=e.alpha?e.alpha:255,!0);if(-1!=t&&-1!=n&&-1!=o&&-1!=r)return[t,n,o,r]}}(e)||function(e){if(Array.isArray(e)&&(3==e.length||4==e.length)){var t=y(e[0],!0),n=y(e[1],!0),o=y(e[2],!0),r=y(null!=e[3]?e[3]:255,!0);if(-1!=t&&-1!=n&&-1!=o&&-1!=r)return[t,n,o,r]}}(e)||function(e){if("number"==typeof e&&Math.floor(e)==e&&e<=4294967295&&e>=0)return[e>>16&255,e>>8&255,255&e,e>>24&255]}(e)||[0,0,0,255]}function w(e){var t=e.toString(16);return 1==t.length?"0"+t:t}function m(e){return 1==e.length?parseInt(e+e,16):parseInt(e,16)}function y(e,t){return"number"!=typeof e||!0===t&&Math.floor(e)!==e?-1:e>=0&&e<=255?e:-1}d.arr=u,d.obj=h,d.css=f,d.hex=g,d.num=p;const S=/\[object Object\]/,k=(e,t)=>{"string"==typeof e&&S.test(e)||t()},_=(e,t)=>{"string"==typeof e&&""===e||t()},L=(e,t)=>{(0,a.b)()&&(a.L.debug([e,t]),a.L.debug("\u2191 We propagate the (submit) event to this target.")),Object.defineProperty(e,"target",{value:t,writable:!1})},N=(e,t,n,o={})=>{var r,i;void 0===e.nextHooks&&(e.nextHooks=new Map),void 0===e.nextState&&(e.nextState=new Map),e.nextState.get(t)!==n&&(e.nextHooks.get(t)instanceof Map==0&&e.nextHooks.set(t,new Map),"function"==typeof o.afterPatch&&(null===(r=e.nextHooks.get(t))||void 0===r||r.set("afterPatch",o.afterPatch)),"function"==typeof o.beforePatch&&(null===(i=e.nextHooks.get(t))||void 0===i||i.set("beforePatch",o.beforePatch)),e.nextState.set(t,n),(e=>{var t,n,o;null===(t=e.nextHooks)||void 0===t||t.forEach(((t,n)=>{var o;const r=t.get("beforePatch");"function"==typeof r&&r(null===(o=e.nextState)||void 0===o?void 0:o.get(n),e.nextState,e,n)})),(null===(n=e.nextState)||void 0===n?void 0:n.size)>0&&(e.state=Object.assign(Object.assign({},e.state),Object.fromEntries(e.nextState)),delete e.nextState,null===(o=e.nextHooks)||void 0===o||o.forEach(((t,n)=>{const o=t.get("afterPatch");"function"==typeof o&&o(e.state[n],e.state,e,n)}))),delete e.nextHooks})(e))},A=(e,t,n,o,r,a={})=>{n(r)?N(e,t,r,null==a?void 0:a.hooks):void 0===r||null===r&&(void 0===(null==a?void 0:a.required)||!1===(null==a?void 0:a.required))?N(e,t,null==a?void 0:a.defaultValue,null==a?void 0:a.hooks):(void 0!==(null==a?void 0:a.required)&&!1!==(null==a?void 0:a.required)||o.add(null),((e,t,n,o)=>{(0,i.d)(`[${e.constructor.name}] Der Property-Wert (${n}) f\xfcr '${t}' ist nicht valide. Folgende Werte sind erlaubt: ${Array.from(o).join(", ")}`)})(e,t,r,o))},x=(e,t,n,o)=>{A(e,t,(e=>"boolean"==typeof e),new Set(["Boolean {true, false}"]),n,o)},C=(e,t,n,o={})=>{const r="number"==typeof o.minLength?null==o?void 0:o.minLength:0;A(e,t,(e=>"string"==typeof e&&e.length>=r),new Set([`String (Mindestl\xe4nge ${r})`]),n,o)},M=(e,t,n,o)=>{A(e,t,(e=>"number"==typeof e&&(void 0===(null==o?void 0:o.min)||"number"==typeof(null==o?void 0:o.min)&&e>=o.min)&&(void 0===(null==o?void 0:o.max)||"number"==typeof(null==o?void 0:o.max)&&e<=o.max)),new Set(["Number"]),n,o)},D=(e,t,n,o,r=(e=>e==e),i={})=>{_(o,(()=>{k(o,(()=>{void 0===o&&(o=[]);try{try{o=q(o)}catch(e){}if(Array.isArray(o)){const s=o.find((e=>!n(e)));void 0===s&&r(o)?N(e,t,o,i.hooks):k(s,(()=>{throw a.L.debug(s),new Error("\u2191 Das Schema f\xfcr das Property (_options) ist nicht valide. Der Wert wird nicht ge\xe4ndert.")}))}else k(o,(()=>{throw a.L.debug(o),new Error("\u2191 Das Schema f\xfcr das Property (_options) ist nicht valide. Der Wert wird nicht ge\xe4ndert.")}))}catch(e){a.L.debug(e)}}))}))},H=/^(true|false)$/,T=/^-?(0|[1-9]\d*)$/,E=/^-?(0.|[1-9]\d*.)\d*[1-9]$/,O=e=>{const t=typeof e,n=`${e}`;if("string"==typeof e)if(H.test(e))e="true"===e;else if(T.test(e))e=parseInt(e);else if(E.test(e))e=parseFloat(e);else if(P.test(e))try{e=q(e)}catch(e){}return t!==typeof e&&(0,i.d)(`You have used a stringified property value (${n} to ${JSON.stringify(e)}) which type switched from ${t} to ${typeof e}!`),e},j=e=>{try{return JSON.stringify(e).replace(/"/g,"'")}catch(t){throw a.L.warn(["stringifyJson",e]),a.L.error("\u2191 Das JSON konnte nicht in einen String umgewandelt werden. Es wird ein stringifizierbares JSON erwartet."),new Error}},P=/^[{[]/,q=e=>{if("string"==typeof e)try{return JSON.parse(e)}catch(t){if(P.test(e))try{return JSON.parse(e.replace(/'/g,'"'))}catch(t){a.L.warn(["parseJson",e]),a.L.error("\u2191 Der JSON-String konnte nicht geparsed werden. Achten Sie darauf, dass einfache Anf\xfchrungszeichen im Text maskiert werden (&#8216;).")}}throw new Error},$=e=>"boolean"==typeof e?!0===e?"true":"false":void 0,z=e=>"string"==typeof e?e:$(e),R=(e,t)=>c(e,t||(0,a.g)()),B=(e,t)=>l(e,t||(0,a.g)());let J=null;const W=()=>(J=J||{backgroundColor:"#00000000",color:"#00000000",domNode:(0,a.g)().body,level:"Fail",score:1},J),I=/(\d+, ){3}0\)/,K=(e,t=W())=>{const n=getComputedStyle(e),o=I.test(n.backgroundColor)?t.backgroundColor:d.hex(n.backgroundColor),i=I.test(n.color)?t.color:d.hex(n.color),s=(0,r.s)(o,i),l={backgroundColor:o,color:i,domNode:e,level:(0,r.f)(s),score:s};return s<4.5&&a.L.error(["Color-Contrast-Error",{backgroundColor:l.backgroundColor,color:l.color,level:l.level,score:l.score},l.domNode]),l},F=(e,t=W())=>{t.domNode instanceof HTMLElement&&(t=K(t.domNode,t));const n=t.domNode.querySelector(e);if(null===n){const n=t.domNode.querySelectorAll('[class="hydrated"]');for(let o=0;o<n.length&&(t.domNode=n[o],null===(t=F(e,t)).domNode);o++);return t}return K(n,t)},U=(e,t=window)=>{e instanceof HTMLElement?(t.scrollTo({behavior:"smooth",top:e.getBoundingClientRect().top+(0,a.a)().pageYOffset-50}),e.focus()):(0,i.d)("Das HTMLElement ist nicht valide, zu dem gescrollt werden soll.")},V=(e,t)=>{if((e instanceof Document||e instanceof HTMLElement||e instanceof ShadowRoot)&&"string"==typeof t){(0,i.d)("Bei der Methode querySelectorAll wurden die Parameter document, selector in selector, document getauscht, da der Parameter selector nicht, allerdings der Parameter document optional sein kann.");const n=`${t}`;t=e,e=n}if("string"==typeof e){const n=R(e,t);n instanceof HTMLElement?U(n):(0,i.d)(`Es konnte kein HTMLElement mit dem Selector (${e}) gefunden werden, zu dem gescrollt werden soll.`)}else(0,i.d)("Der Selector ist nicht valide, zu dem gescrollt werden soll.")};class Z{static queryHtmlElementColors(e,t,n=!1,o=!0){let r=null;if(!0===n||!1===Z.executionLock)if(!1===n&&(Z.cache.clear(),Z.cache.set(t.domNode,t),Z.executionLock=!0,!0===o&&a.L.debug("[KoliBriUtils] Color contrast analysis started...")),e===t.domNode)r=t;else{const n=new Set;if(t.domNode.shadowRoot){const e=t.domNode.shadowRoot.children;for(let t=0;t<e.length;t++)n.add(e[t])}const o=t.domNode;if("function"==typeof o.assignedNodes){const e=o.assignedNodes();for(let t=0;t<e.length;t++)e[t]instanceof HTMLElement&&n.add(e[t])}const i=t.domNode.children;for(let e=0;e<i.length;e++)n.add(i[e]);const a=Array.from(n);for(let s=0;s<a.length;s++){let n=Z.cache.get(a[s]);void 0===n&&(n=K(a[s],t)),Z.cache.set(a[s],n);const o=Z.queryHtmlElementColors(e,n,!0,!1);if(null!==o){r=o;break}}}else a.L.debug("[KoliBriUtils] Call aborted because a color contrast analysis is currently being executed.");return!1===n&&(!0===o&&a.L.debug(`[KoliBriUtils] Color contrast analysis finished (${Z.cache.size} DOM elements are analysed).`),Z.executionLock=!1,Z.cache.clear()),r}}Z.executionLock=!1,Z.cache=new Map;class Y{}Y.patchTheme=o.p,Y.patchThemeTag=o.a,Y.querySelector=R,Y.querySelectorAll=B,Y.scrollByHTMLElement=U,Y.scrollBySelector=V,Y.stringifyJson=j},1937:(e,t,n)=>{n.d(t,{w:()=>r});var o=n(2396);const r=(e,t)=>{(0,o.a)(e,"_level",(e=>"number"==typeof e&&1<=e&&e<=6),new Set(["Number {1, 2, 3, 4, 5, 6}"]),t,{defaultValue:1,required:!0})}}}]);