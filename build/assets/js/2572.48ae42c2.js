/*! For license information please see 2572.48ae42c2.js.LICENSE.txt */
"use strict";(self.webpackChunk_public_ui_website=self.webpackChunk_public_ui_website||[]).push([[2572],{4267:(e,t,n)=>{n.d(t,{a:()=>g,b:()=>s,c:()=>f,d:()=>c,e:()=>i,f:()=>u,u:()=>p});var r=n(2292);const o=new Set,i=e=>{!1===o.has(e)&&(o.add(e),r.L.info(e,{classifier:"\u270ba11y",overwriteStyle:"; background-color: #09f"}))},a=new Set,s=e=>{!1===a.has(e)&&(a.add(e),r.L.warn(e,{classifier:"\ud83d\udd25deprecated",forceLog:!0,overwriteStyle:"; background-color: #f00"}))},l=new Set,c=e=>{!1===l.has(e)&&(l.add(e),r.L.debug(e,{classifier:"\ud83d\udcbbdev",overwriteStyle:"; background-color: #f09"}))},d=new Set,u=(e,t=!1)=>{!1===d.has(e)&&(d.add(e),e+=!0===t?" \u2705":"",r.L.debug(e,{classifier:"\ud83c\udf1ffeature",overwriteStyle:"; background-color: #309"}))};c("Wir freuen uns \xfcber jedes Feedback, Kommentare, Screenshots oder Demo-Links von einer auf KoliBri-basierenden Anwendung (kolibri@itzbund.de). Vielen Dank!");const h=new Set,f=()=>{i('"Disabled" schr\xe4nkt die Zug\xe4nglichkeit und Sichtbarkeit ein. Wir empfehlen aus Sicht der Barrierefreiheit readonly- statt disabled-Attribut zu verwenden.\n- https://uxdesign.cc/is-it-ok-to-grey-out-disabled-buttons-8afa74a0fae')},g=e=>{"string"==typeof e&&""!==e||i("Manche Strukturelemente, wie bspw. der nav-Tag, k\xf6nnen mehrfach in einer Webseite verwendet werden. Damit die gleichnamigen Strukturelemente voneinander unterschieden werden k\xf6nnen, ist es erforderlich ein Aria-Label zu setzen.\n- https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/Navigation_Role#accessibility_concerns")},p=(e,t=8)=>{var n;t>7&&(n=`[${e}] Innerhalb von Navigationsstrukturen wird empfohlen nicht mehr als 7 Men\xfcpunkte zu verwenden.\n\nLinks:\n- https://de.ryte.com/wiki/Millersche_Zahl\n- https://de.wikipedia.org/wiki/Millersche_Zahl`,!1===h.has(n)&&(h.add(n),r.L.debug(n,{classifier:"\ud83d\udcd1ui/ux",overwriteStyle:"; background-color: #060;"})))}},9021:(e,t,n)=>{n.d(t,{f:()=>c,s:()=>l});var r=1/12.92;function o(e){return Math.pow((e+.055)/1.055,2.4)}function i(e){var t=e[0]/255,n=e[1]/255,i=e[2]/255;return.2126*(t<=.03928?t*r:o(t))+.7152*(n<=.03928?n*r:o(n))+.0722*(i<=.03928?i*r:o(i))}function a(e){var t=255;8===(e=e.replace(/^#/,"")).length&&(t=parseInt(e.slice(6,8),16),e=e.substring(0,6)),4===e.length&&(t=parseInt(e.slice(3,4).repeat(2),16),e=e.substring(0,3)),3===e.length&&(e=e[0]+e[0]+e[1]+e[1]+e[2]+e[2]);var n=parseInt(e,16);return[n>>16,n>>8&255,255&n,t]}function s(e,t){return function(e,t){return(Math.max(e,t)+.05)/(Math.min(e,t)+.05)}(i(e),i(t))}function l(e,t){return s(a(e),a(t))}function c(e){return e>=7?"AAA":e>=4.5?"AA":e>=3?"AA Large":"Fail"}},2572:(e,t,n)=>{n.r(t),n.d(t,{kol_input_date:()=>a});var r=n(4250),o=n(3837),i=n(8037);const a=class{constructor(e){(0,r.r)(this,e),this.catchRef=e=>{this.ref=e,(0,i.p)(this.host,this.ref)},this._accessKey=void 0,this._alert=!0,this._autoComplete=void 0,this._disabled=void 0,this._error=void 0,this._hideLabel=void 0,this._hint="",this._icon=void 0,this._id=void 0,this._list=void 0,this._max=void 0,this._min=void 0,this._name=void 0,this._on=void 0,this._readOnly=void 0,this._required=void 0,this._smartButton=void 0,this._step=void 0,this._tabIndex=void 0,this._touched=!1,this._type="date",this._value=void 0,this.state={}}render(){return(0,r.h)(r.H,null,(0,r.h)("kol-input-number",{ref:this.catchRef,_accessKey:this._accessKey,_alert:this._alert,_autoComplete:this._autoComplete,_disabled:this._disabled,_error:this._error,_hideLabel:this._hideLabel,_hint:this._hint,_icon:this._icon,_id:this._id,_list:this._list,_max:this.state._max,_min:this.state._min,_name:this._name,_on:this._on,_readOnly:this._readOnly,_required:this._required,_smartButton:this._smartButton,_step:this._step,_tabIndex:this._tabIndex,_touched:this._touched,_type:this._type,_value:this.state._value},(0,r.h)("slot",null)))}valueAsIsoDate(e,t){const n=null!=e?e:t;if("string"==typeof n)return n;if("object"==typeof n&&n instanceof Date)switch(this._type){case"date":return`${n.getFullYear()}-${n.getMonth()+1}-${n.getDate()}`;case"datetime-local":return`${n.getFullYear()}-${n.getMonth()+1}-${n.getDate()}T${n.getHours()}:${n.getMinutes()}:${n.getSeconds()}`;case"month":return`${n.getFullYear()}-${n.getMonth()+1}`;case"time":return`${n.getHours()}:${n.getMinutes()}:${n.getSeconds()}`;case"week":throw new Error("Auto convert to week is not supported!")}}validateDateString(e){switch(this._type){case"date":return a.isoDateRegex.test(e);case"datetime-local":return a.isoLocalDateTimeRegex.test(e);case"month":return a.isoMonthRegex.test(e);case"time":return a.isoTimeRegex.test(e);case"week":return a.isoWeekRegex.test(e)}}validateMax(e){(0,o.a)(this,"_max",(e=>void 0===e||this.validateDateString(e)),new Set(["Iso8601","Date"]),this.valueAsIsoDate(e,"date"===this._type||"month"===this._type||"datetime-local"===this._type?a.DEFAULT_MAX_DATE:void 0))}validateMin(e){(0,o.a)(this,"_min",(e=>void 0===e||this.validateDateString(e)),new Set(["Iso8601","Date"]),this.valueAsIsoDate(e))}validateValue(e){(0,o.a)(this,"_value",(e=>void 0===e||this.validateDateString(e)),new Set(["Iso8601","Date"]),this.valueAsIsoDate(e))}componentWillLoad(){this.validateMax(this._max),this.validateMin(this._min),this.validateValue(this._value)}get host(){return(0,r.g)(this)}static get watchers(){return{_max:["validateMax"],_min:["validateMin"],_value:["validateValue"]}}};a.DEFAULT_MAX_DATE=new Date(9999,11,31,23,59,59),a.isoDateRegex=/^\d{4}-([0]\d|1[0-2])-([0-2]\d|3[01])/,a.isoLocalDateTimeRegex=/^\d{4}-([0]\d|1[0-2])-([0-2]\d|3[01])[T ][0-2]\d:[0-5]\d(:[0-5]\d(?:\.\d+)?)?/,a.isoMonthRegex=/^\d{4}-([0]\d|1[0-2])/,a.isoTimeRegex=/^[0-2]\d:[0-5]\d(:[0-5]\d(?:\.\d+)?)?/,a.isoWeekRegex=/^\d{4}-W(?:[0-4]\d|5[0-3])$/,a.style={default:"@windicss; *{box-sizing:border-box;font-size:inherit;hyphens:auto;letter-spacing:inherit;word-break:break-word;word-spacing:inherit}kol-heading-wc{font-weight:700}kol-icon{color:inherit}kol-span-wc{display:grid;place-items:center;width:100%}kol-span-wc>span{display:flex;gap:0.25rem;place-items:center}a,button{cursor:pointer}a.icon-only>kol-span-wc>span>span,button.icon-only>kol-span-wc>span>span{display:none}a{display:inline-flex;place-items:baseline}button{border-width:0}"}},3837:(e,t,n)=>{n.d(t,{K:()=>Z,a:()=>M,b:()=>A,c:()=>E,d:()=>D,e:()=>x,f:()=>k,g:()=>j,h:()=>V,i:()=>I,j:()=>Y,k:()=>P,l:()=>J,m:()=>H,n:()=>z,o:()=>S,p:()=>q,q:()=>K,r:()=>d,s:()=>L,t:()=>R,w:()=>N});var r=n(2095),o=n(9021),i=n(4267),a=n(2292);const s=(e,t)=>{t.forEach((t=>{!1===e.has(t)&&e.add(t)}))},l=(e,t=document)=>{if(t instanceof Document||t instanceof HTMLElement||t instanceof ShadowRoot){const n=new Set;s(n,t.querySelectorAll(e));const r=t.querySelectorAll('[class*="hydrated"]');for(let t=0;t<r.length;t++){const o=r[t].shadowRoot;s(n,l(e,"object"==typeof o&&null!==o?o:r[t]))}return Array.from(n)}throw new Error("The parameter document for the method querySelectorAll is not type of Document, HTMLElement or ShadowRoot.")},c=(e,t=document)=>{if(t instanceof Document||t instanceof HTMLElement||t instanceof ShadowRoot){let n=t.querySelector(e);if(null===n){const r=t.querySelectorAll('[class*="hydrated"]');for(let t=0;t<r.length;t++){const o=r[t].shadowRoot;if(n=c(e,"object"==typeof o&&null!==o?o:r[t]),null!==n)break}}return n}throw new Error("The parameter document for the method querySelector is not type of Document, HTMLElement or ShadowRoot.")};var d=m,u=m,h=function(e){var t=v(e);return{r:t[0],g:t[1],b:t[2],a:3==t.length?255:Math.round(t[3])}},f=function(e){var t=v(e);return 3==t.length&&t.push(255),255==t[3]?"rgb("+t[0]+", "+t[1]+", "+t[2]+")":0==t[3]?"rgba("+t[0]+", "+t[1]+", "+t[2]+", 0)":"rgba("+t[0]+", "+t[1]+", "+t[2]+", "+String(t[3]/255).substr(1)+")"},g=function(e){3==(t=v(e)).length&&t.push(255);var t,n=255==t[3],r=b(t[0]),o=b(t[1]),i=b(t[2]),a=function(e,t,n,r){var o=["ff","00","11","22","33","44","55","66","77","88","99","aa","bb","cc","dd","ee"];return-1!=o.indexOf(e)&&-1!=o.indexOf(t)&&-1!=o.indexOf(n)&&-1!=o.indexOf(r)}(r,o,i,t=b(Math.round(t[3])));return n?a?"#"+r.charAt(0)+o.charAt(0)+i.charAt(0):"#"+r+o+i:a?"#"+r.charAt(0)+o.charAt(0)+i.charAt(0)+t.charAt(0):"#"+r+o+i+t},p=function(e){var t=v(e);return 3==t.length?t.push(255):t[3]=Math.round(t[3]),(t[3]<<24>>>0|t[0]<<16|t[1]<<8|t[2])>>>0};function m(e){var t=v(e);return 3==t.length?t.concat(255):(t[3]=Math.round(t[3]),t)}function v(e){return"string"==typeof e?function(e){return"red"==e?[255,0,0]:"green"==e?[0,255,0]:"blue"==e?[0,0,255]:"black"==e?[0,0,0]:"white"==e?[255,255,255]:"cyan"==e?[0,255,255]:"gray"==e||"grey"==e?[128,128,128]:"magenta"==e||"pink"==e?[255,0,255]:"yellow"==e?[255,255,0]:void 0}(e=e.toLowerCase())||function(e){var t=e.replace(/^#/,""),n=t.length;if(3==n||4==n){var r=y(t[0]),o=y(t[1]),i=y(t[2]),a=3==n?255:y(t[3]);if(isNaN(r)||isNaN(o)||isNaN(i)||isNaN(a))return;return[r,o,i,a]}}(e)||function(e){var t=e.replace(/^#/,""),n=t.length;if(6==n||8==n){var r=y(t.slice(0,2)),o=y(t.slice(2,4)),i=y(t.slice(4,6)),a=6==n?255:y(t.slice(6,8));if(isNaN(r)||isNaN(o)||isNaN(i)||isNaN(a))return;return[r,o,i,a]}}(e)||function(e){if("rgb("==e.substr(0,4)){var t=(e=e.match(/^rgb\(([^)]+)\)/)[1]).split(/ *, */).map(Number),n=w(t[0],!0),r=w(t[1],!0),o=w(t[2],!0);if(-1!=n&&-1!=r&&-1!=o)return[n,r,o,255]}}(e)||function(e){if("rgba("==e.substr(0,5)){var t=(e=e.match(/^rgba\(([^)]+)\)/)[1]).split(/ *, */).map(Number),n=w(t[0],!0),r=w(t[1],!0),o=w(t[2],!0),i=w(255*t[3]);if(-1!=n&&-1!=r&&-1!=o&&-1!=i)return[n,r,o,i]}}(e)||[0,0,0,255]:function(e){if("[object Object]"===Object.prototype.toString.call(e)&&Object.getPrototypeOf(e)===Object.getPrototypeOf({})){var t=w(null!=e.r?e.r:null!=e.red?e.red:0,!0),n=w(null!=e.g?e.g:null!=e.green?e.green:0,!0),r=w(null!=e.b?e.b:null!=e.blue?e.blue:0,!0),o=w(null!=e.a?e.a:null!=e.alpha?e.alpha:255,!0);if(-1!=t&&-1!=n&&-1!=r&&-1!=o)return[t,n,r,o]}}(e)||function(e){if(Array.isArray(e)&&(3==e.length||4==e.length)){var t=w(e[0],!0),n=w(e[1],!0),r=w(e[2],!0),o=w(null!=e[3]?e[3]:255,!0);if(-1!=t&&-1!=n&&-1!=r&&-1!=o)return[t,n,r,o]}}(e)||function(e){if("number"==typeof e&&Math.floor(e)==e&&e<=4294967295&&e>=0)return[e>>16&255,e>>8&255,255&e,e>>24&255]}(e)||[0,0,0,255]}function b(e){var t=e.toString(16);return 1==t.length?"0"+t:t}function y(e){return 1==e.length?parseInt(e+e,16):parseInt(e,16)}function w(e,t){return"number"!=typeof e||!0===t&&Math.floor(e)!==e?-1:e>=0&&e<=255?e:-1}d.arr=u,d.obj=h,d.css=f,d.hex=g,d.num=p;const _=/\[object Object\]/,S=(e,t)=>{"string"==typeof e&&_.test(e)||t()},k=(e,t)=>{"string"==typeof e&&""===e||t()},x=(e,t)=>{(0,a.b)()&&(a.L.debug([e,t]),a.L.debug("\u2191 We propagate the (submit) event to this target.")),Object.defineProperty(e,"target",{value:t,writable:!1})},L=(e,t,n,r={})=>{var o,i;void 0===e.nextHooks&&(e.nextHooks=new Map),void 0===e.nextState&&(e.nextState=new Map),e.nextState.get(t)!==n&&(e.nextHooks.get(t)instanceof Map==0&&e.nextHooks.set(t,new Map),"function"==typeof r.afterPatch&&(null===(o=e.nextHooks.get(t))||void 0===o||o.set("afterPatch",r.afterPatch)),"function"==typeof r.beforePatch&&(null===(i=e.nextHooks.get(t))||void 0===i||i.set("beforePatch",r.beforePatch)),e.nextState.set(t,n),(e=>{var t,n,r;null===(t=e.nextHooks)||void 0===t||t.forEach(((t,n)=>{var r;const o=t.get("beforePatch");"function"==typeof o&&o(null===(r=e.nextState)||void 0===r?void 0:r.get(n),e.nextState,e,n)})),(null===(n=e.nextState)||void 0===n?void 0:n.size)>0&&(e.state=Object.assign(Object.assign({},e.state),Object.fromEntries(e.nextState)),delete e.nextState,null===(r=e.nextHooks)||void 0===r||r.forEach(((t,n)=>{const r=t.get("afterPatch");"function"==typeof r&&r(e.state[n],e.state,e,n)}))),delete e.nextHooks})(e))},M=(e,t,n,r,o,a={})=>{n(o)?L(e,t,o,null==a?void 0:a.hooks):void 0===o||null===o&&(void 0===(null==a?void 0:a.required)||!1===(null==a?void 0:a.required))?L(e,t,null==a?void 0:a.defaultValue,null==a?void 0:a.hooks):(void 0!==(null==a?void 0:a.required)&&!1!==(null==a?void 0:a.required)||r.add(null),((e,t,n,r)=>{(0,i.d)(`[${e.constructor.name}] Der Property-Wert (${n}) f\xfcr '${t}' ist nicht valide. Folgende Werte sind erlaubt: ${Array.from(r).join(", ")}`)})(e,t,o,r))},A=(e,t,n,r)=>{M(e,t,(e=>"boolean"==typeof e),new Set(["Boolean {true, false}"]),n,r)},N=(e,t,n,r={})=>{const o="number"==typeof r.minLength?null==r?void 0:r.minLength:0;M(e,t,(e=>"string"==typeof e&&e.length>=o),new Set([`String (Mindestl\xe4nge ${o})`]),n,r)},D=(e,t,n,r)=>{M(e,t,(e=>"number"==typeof e&&(void 0===(null==r?void 0:r.min)||"number"==typeof(null==r?void 0:r.min)&&e>=r.min)&&(void 0===(null==r?void 0:r.max)||"number"==typeof(null==r?void 0:r.max)&&e<=r.max)),new Set(["Number"]),n,r)},E=(e,t,n,r,o=(e=>e==e),i={})=>{k(r,(()=>{S(r,(()=>{void 0===r&&(r=[]);try{try{r=q(r)}catch(e){}if(Array.isArray(r)){const s=r.find((e=>!n(e)));void 0===s&&o(r)?L(e,t,r,i.hooks):S(s,(()=>{throw a.L.debug(s),new Error("\u2191 Das Schema f\xfcr das Property (_options) ist nicht valide. Der Wert wird nicht ge\xe4ndert.")}))}else S(r,(()=>{throw a.L.debug(r),new Error("\u2191 Das Schema f\xfcr das Property (_options) ist nicht valide. Der Wert wird nicht ge\xe4ndert.")}))}catch(e){a.L.debug(e)}}))}))},$=/^(true|false)$/,T=/^-?(0|[1-9]\d*)$/,O=/^-?(0.|[1-9]\d*.)\d*[1-9]$/,H=e=>{const t=typeof e,n=`${e}`;if("string"==typeof e)if($.test(e))e="true"===e;else if(T.test(e))e=parseInt(e);else if(O.test(e))e=parseFloat(e);else if(C.test(e))try{e=q(e)}catch(e){}return t!==typeof e&&(0,i.d)(`You have used a stringified property value (${n} to ${JSON.stringify(e)}) which type switched from ${t} to ${typeof e}!`),e},R=e=>{try{return JSON.stringify(e).replace(/"/g,"'")}catch(t){throw a.L.warn(["stringifyJson",e]),a.L.error("\u2191 Das JSON konnte nicht in einen String umgewandelt werden. Es wird ein stringifizierbares JSON erwartet."),new Error}},C=/^[{[]/,q=e=>{if("string"==typeof e)try{return JSON.parse(e)}catch(t){if(C.test(e))try{return JSON.parse(e.replace(/'/g,'"'))}catch(t){a.L.warn(["parseJson",e]),a.L.error("\u2191 Der JSON-String konnte nicht geparsed werden. Achten Sie darauf, dass einfache Anf\xfchrungszeichen im Text maskiert werden (&#8216;).")}}throw new Error},j=e=>"boolean"==typeof e?!0===e?"true":"false":void 0,I=e=>"string"==typeof e?e:j(e),P=(e,t)=>c(e,t||(0,a.g)()),z=(e,t)=>l(e,t||(0,a.g)());let B=null;const W=()=>(B=B||{backgroundColor:"#00000000",color:"#00000000",domNode:(0,a.g)().body,level:"Fail",score:1},B),F=/(\d+, ){3}0\)/,J=(e,t=W())=>{const n=getComputedStyle(e),r=F.test(n.backgroundColor)?t.backgroundColor:d.hex(n.backgroundColor),i=F.test(n.color)?t.color:d.hex(n.color),s=(0,o.s)(r,i),l={backgroundColor:r,color:i,domNode:e,level:(0,o.f)(s),score:s};return s<4.5&&a.L.error(["Color-Contrast-Error",{backgroundColor:l.backgroundColor,color:l.color,level:l.level,score:l.score},l.domNode]),l},K=(e,t=W())=>{t.domNode instanceof HTMLElement&&(t=J(t.domNode,t));const n=t.domNode.querySelector(e);if(null===n){const n=t.domNode.querySelectorAll('[class="hydrated"]');for(let r=0;r<n.length&&(t.domNode=n[r],null===(t=K(e,t)).domNode);r++);return t}return J(n,t)},U=(e,t=window)=>{e instanceof HTMLElement?(t.scrollTo({behavior:"smooth",top:e.getBoundingClientRect().top+(0,a.a)().pageYOffset-50}),e.focus()):(0,i.d)("Das HTMLElement ist nicht valide, zu dem gescrollt werden soll.")},V=(e,t)=>{if((e instanceof Document||e instanceof HTMLElement||e instanceof ShadowRoot)&&"string"==typeof t){(0,i.d)("Bei der Methode querySelectorAll wurden die Parameter document, selector in selector, document getauscht, da der Parameter selector nicht, allerdings der Parameter document optional sein kann.");const n=`${t}`;t=e,e=n}if("string"==typeof e){const n=P(e,t);n instanceof HTMLElement?U(n):(0,i.d)(`Es konnte kein HTMLElement mit dem Selector (${e}) gefunden werden, zu dem gescrollt werden soll.`)}else(0,i.d)("Der Selector ist nicht valide, zu dem gescrollt werden soll.")};class Y{static queryHtmlElementColors(e,t,n=!1,r=!0){let o=null;if(!0===n||!1===Y.executionLock)if(!1===n&&(Y.cache.clear(),Y.cache.set(t.domNode,t),Y.executionLock=!0,!0===r&&a.L.debug("[KoliBriUtils] Color contrast analysis started...")),e===t.domNode)o=t;else{const n=new Set;if(t.domNode.shadowRoot){const e=t.domNode.shadowRoot.children;for(let t=0;t<e.length;t++)n.add(e[t])}const r=t.domNode;if("function"==typeof r.assignedNodes){const e=r.assignedNodes();for(let t=0;t<e.length;t++)e[t]instanceof HTMLElement&&n.add(e[t])}const i=t.domNode.children;for(let e=0;e<i.length;e++)n.add(i[e]);const a=Array.from(n);for(let s=0;s<a.length;s++){let n=Y.cache.get(a[s]);void 0===n&&(n=J(a[s],t)),Y.cache.set(a[s],n);const r=Y.queryHtmlElementColors(e,n,!0,!1);if(null!==r){o=r;break}}}else a.L.debug("[KoliBriUtils] Call aborted because a color contrast analysis is currently being executed.");return!1===n&&(!0===r&&a.L.debug(`[KoliBriUtils] Color contrast analysis finished (${Y.cache.size} DOM elements are analysed).`),Y.executionLock=!1,Y.cache.clear()),o}}Y.executionLock=!1,Y.cache=new Map;class Z{}Z.patchTheme=r.p,Z.patchThemeTag=r.a,Z.querySelector=P,Z.querySelectorAll=z,Z.scrollByHTMLElement=U,Z.scrollBySelector=V,Z.stringifyJson=R},8037:(e,t,n)=>{n.d(t,{p:()=>o});var r=n(6831);const o=(e,t)=>{(0,r.i)(e)&&e&&(e.focus=e=>null==t?void 0:t.focus(e))}},6831:(e,t,n)=>{n.d(t,{S:()=>s,a:()=>o,b:()=>i,c:()=>a,i:()=>r});const r=e=>"object"==typeof e&&null!==e,o=(e,t=0)=>"string"==typeof e&&e.length>=t,i=e=>{if("object"!=typeof e||null===e)return o(e,1);for(const t in e)if(!1===o(t,1))return!1;return!0},a=(e,t)=>0===t.length||((e,t)=>0===t.length&&new RegExp(`^${e}`).test(t))(e,t),s=new Event("StateChange")}}]);