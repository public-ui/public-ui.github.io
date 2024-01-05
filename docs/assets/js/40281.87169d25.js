/*! For license information please see 40281.87169d25.js.LICENSE.txt */
"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[40281],{83254:(e,t,n)=>{n.d(t,{a:()=>a,b:()=>g,c:()=>m,d:()=>s,e:()=>f,f:()=>d,g:()=>l,u:()=>h});var o=n(61789);const r=new Set,a=(e,t)=>{(!1===r.has(e)||(null==t?void 0:t.force))&&(r.add(e),o.L.debug([e].concat((null==t?void 0:t.details)||[]),{classifier:"\u270b a11y",overwriteStyle:"; background-color: #09f"}))},i=new Set,s=(e,t)=>{(!1===i.has(e)||(null==t?void 0:t.force))&&(i.add(e),o.L.debug([e].concat((null==t?void 0:t.details)||[]),{classifier:"\ud83d\udcbb dev",overwriteStyle:"; background-color: #f09"}))},l=(e,t)=>{(!1===i.has(e)||(null==t?void 0:t.force))&&(i.add(e),o.L.warn([e].concat((null==t?void 0:t.details)||[]),{classifier:"\ud83d\udcbb dev",overwriteStyle:"; background-color: #f09"}))},c=new Set,d=(e,t=!1,n)=>{(!1===c.has(e)||(null==n?void 0:n.force))&&(c.add(e),e+=!0===t?" \u2705":"",o.L.debug([e].concat((null==n?void 0:n.details)||[]),{classifier:"\ud83c\udf1f feature",overwriteStyle:"; background-color: #309"}))};s("Wir freuen uns \xfcber jedes Feedback, Kommentare, Screenshots oder Demo-Links von einer auf KoliBri-basierenden Anwendung (kolibri@itzbund.de). Vielen Dank!");const u=new Set,h=(e,t)=>{(!1===u.has(e)||(null==t?void 0:t.force))&&(u.add(e),o.L.debug([e].concat((null==t?void 0:t.details)||[]),{classifier:"\ud83d\udcd1 ui/ux",overwriteStyle:"; background-color: #060;"}))},f=()=>{a('"Disabled" schr\xe4nkt die Zug\xe4nglichkeit und Sichtbarkeit ein. Wir empfehlen aus Sicht der Barrierefreiheit readonly- statt disabled-Attribut zu verwenden.\n- https://uxdesign.cc/is-it-ok-to-grey-out-disabled-buttons-8afa74a0fae')},g=e=>{"string"==typeof e&&""!==e||a("Manche Strukturelemente, wie bspw. der nav-Tag, k\xf6nnen mehrfach in einer Webseite verwendet werden. Damit die gleichnamigen Strukturelemente voneinander unterschieden werden k\xf6nnen, ist es erforderlich ein Aria-Label zu setzen.\n- https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/Navigation_Role#accessibility_concerns")},m=(e,t=8)=>{t>7&&h(`[${e}] Innerhalb von Navigationsstrukturen wird empfohlen nicht mehr als 7 Men\xfcpunkte zu verwenden.\n\nLinks:\n- https://de.ryte.com/wiki/Millersche_Zahl\n- https://de.wikipedia.org/wiki/Millersche_Zahl`)}},34749:(e,t,n)=>{n.d(t,{A:()=>s});var o=n(45366),r=n(83254),a=n(61789);const i=(0,a.d)();class s{constructor(e,t,n){var o,a;if(this.setFormAssociatedValue=e=>{var t;const n=null===(t=this.formAssociated)||void 0===t?void 0:t.getAttribute("name");null!==n&&""!==n||(0,r.d)(` The form field (${this.name}) must have a name attribute to be form-associated. Please define the _name attribute.`);const o=this.tryToStringifyValue(e);this.syncValue(e,o,this.formAssociated),this.syncValue(e,o,this.syncToOwnInput)},this.component=e,this.host=this.findHostWithShadowRoot(n),this.name=t,i){switch(null===(o=this.host)||void 0===o||o.querySelectorAll("input,select,textarea").forEach((e=>{var t;null===(t=this.host)||void 0===t||t.removeChild(e)})),this.name){case"button":this.formAssociated=document.createElement("button");break;case"select":this.formAssociated=document.createElement("select"),this.formAssociated.setAttribute("multiple","");break;case"textarea":this.formAssociated=document.createElement("textarea");break;default:this.formAssociated=document.createElement("input"),this.formAssociated.setAttribute("type","hidden")}this.formAssociated.setAttribute("aria-hidden","true"),this.formAssociated.setAttribute("data-form-associated",""),this.formAssociated.setAttribute("hidden",""),null===(a=this.host)||void 0===a||a.appendChild(this.formAssociated)}}findHostWithShadowRoot(e){for(;null===(null==e?void 0:e.shadowRoot)&&e!==document.body;)(e=null==e?void 0:e.parentNode).host&&(e=e.host);return e}setAttribute(e,t,n){if(i)try{if("boolean"!=typeof(n="object"==typeof n&&null!==n?JSON.stringify(n):n)&&"number"!=typeof n&&"string"!=typeof n)throw new Error("Invalid value type: "+typeof n);null==t||t.setAttribute(e,`${n}`)}catch(n){null==t||t.removeAttribute(e)}}tryToStringifyValue(e){try{return"object"==typeof e&&null!==e?JSON.stringify(e).toString():null==e?null:e.toString()}catch(e){return(0,r.g)(`The form field raw value is not able to stringify! ${e}`),""}}syncValue(e,t,n){n&&("select"===this.name?(n.querySelectorAll("option").forEach((e=>{n.removeChild(e)})),Array.isArray(e)&&e.forEach((e=>{const t=this.tryToStringifyValue(e);if("string"==typeof t){const e=document.createElement("option");e.setAttribute("value",t),e.setAttribute("selected",""),n.appendChild(e)}}))):"string"==typeof t?(n.setAttribute("value",t),n.value=t):(n.removeAttribute("value"),n.value=""))}validateName(e){((e,t,n)=>{(0,o.d)(e,"_name",t,n)})(this.component,e,{hooks:{afterPatch:()=>{this.setAttribute("name",this.formAssociated,this.component.state._name)}}}),void 0===e&&(0,r.d)("Ein Name am Eingabefeldern oder Schalter ist nicht zwingend erforderlich, kann aber f\xfcr die Autocomplete-Funktion und f\xfcr das statische Versenden des Eingabefeldes relevant sein.")}validateSyncValueBySelector(e){if(i&&"string"==typeof e){const t=document.querySelector(e);t&&(this.syncToOwnInput=t)}}componentWillLoad(){this.validateName(this.component._name),this.validateSyncValueBySelector(this.component._syncValueBySelector)}}},54170:(e,t,n)=>{function o(e){e.stopImmediatePropagation(),e.stopPropagation()}function r(e,t,n){return e.dispatchEvent(function(e,t){return new CustomEvent(`kol-${e}`,{bubbles:!0,cancelable:!0,composed:!0,detail:t})}(t,n))}function a(e,t,n){t&&r(t,e,n)}n.d(t,{s:()=>o,t:()=>a})},65975:(e,t,n)=>{n.d(t,{v:()=>r});var o=n(45366);const r=(e,t,n={})=>{(0,o.a)(e,"_hideLabel",t,n)}},61568:(e,t,n)=>{n.d(t,{a:()=>u,c:()=>l,h:()=>s,v:()=>d});var o=n(83254),r=n(45366);const a=/[a-zA-Z0-9\xe4\xf6\xfc\xc4\xd6\xdc\xdf]/g,i=/^\d+$/;function s(e,t=1){return function(e){var t;return"string"==typeof e&&(null===(t=e.match(a))||void 0===t?void 0:t.length)||0}(e)>=t}function l(e){return i.test(e)}const c=new Set(["string"]),d=(e,t,n={})=>{(0,r.w)(e,"_label",(e=>"string"==typeof e),c,t,function(e){var t;return{hooks:{afterPatch:(t,n,r,a)=>{var i,c;"function"==typeof(null===(i=e.hooks)||void 0===i?void 0:i.afterPatch)&&(null===(c=e.hooks)||void 0===c||c.afterPatch(t,n,r,a)),"string"==typeof t&&!1===s(t,3)&&!1===l(t)&&(0,o.a)(`The heading or label ("${t}") is not accessible. A label should consist of at least three readable characters.`),"string"==typeof t&&t.length>80&&(0,o.u)("A heading or label should not be longer than 80 characters.")},beforePatch:null===(t=e.hooks)||void 0===t?void 0:t.beforePatch}}}(n))},u=d},45366:(e,t,n)=>{n.d(t,{K:()=>oe,a:()=>q,b:()=>E,c:()=>_,d:()=>D,e:()=>R,f:()=>T,g:()=>C,h:()=>K,i:()=>U,j:()=>ne,k:()=>Z,l:()=>ee,m:()=>J,n:()=>G,o:()=>P,p:()=>F,q:()=>te,r:()=>l,s:()=>$,t:()=>W,w:()=>H});var o=n(61789),r=n(83254);const a=(e,t)=>{t.forEach((t=>{!1===e.has(t)&&e.add(t)}))},i=(e,t=document)=>{if(t instanceof Document||t instanceof HTMLElement||t instanceof ShadowRoot){const n=new Set;a(n,t.querySelectorAll(e));const o=t.querySelectorAll('[class*="hydrated"]');for(let t=0;t<o.length;t++){const r=o[t].shadowRoot;a(n,i(e,"object"==typeof r&&null!==r?r:o[t]))}return Array.from(n)}throw new Error("The parameter document for the method querySelectorAll is not type of Document, HTMLElement or ShadowRoot.")},s=(e,t=document)=>{if(t instanceof Document||t instanceof HTMLElement||t instanceof ShadowRoot){let n=t.querySelector(e);if(null===n){const o=t.querySelectorAll('[class*="hydrated"]');for(let t=0;t<o.length;t++){const r=o[t].shadowRoot;if(n=s(e,"object"==typeof r&&null!==r?r:o[t]),null!==n)break}}return n}throw new Error("The parameter document for the method querySelector is not type of Document, HTMLElement or ShadowRoot.")};var l=g,c=g,d=function(e){var t=m(e);return{r:t[0],g:t[1],b:t[2],a:3==t.length?255:Math.round(t[3])}},u=function(e){var t=m(e);return 3==t.length&&t.push(255),255==t[3]?"rgb("+t[0]+", "+t[1]+", "+t[2]+")":0==t[3]?"rgba("+t[0]+", "+t[1]+", "+t[2]+", 0)":"rgba("+t[0]+", "+t[1]+", "+t[2]+", "+String(t[3]/255).substr(1)+")"},h=function(e){3==(t=m(e)).length&&t.push(255);var t,n=255==t[3],o=b(t[0]),r=b(t[1]),a=b(t[2]),i=function(e,t,n,o){var r=["ff","00","11","22","33","44","55","66","77","88","99","aa","bb","cc","dd","ee"];return-1!=r.indexOf(e)&&-1!=r.indexOf(t)&&-1!=r.indexOf(n)&&-1!=r.indexOf(o)}(o,r,a,t=b(Math.round(t[3])));return n?i?"#"+o.charAt(0)+r.charAt(0)+a.charAt(0):"#"+o+r+a:i?"#"+o.charAt(0)+r.charAt(0)+a.charAt(0)+t.charAt(0):"#"+o+r+a+t},f=function(e){var t=m(e);return 3==t.length?t.push(255):t[3]=Math.round(t[3]),(t[3]<<24>>>0|t[0]<<16|t[1]<<8|t[2])>>>0};function g(e){var t=m(e);return 3==t.length?t.concat(255):(t[3]=Math.round(t[3]),t)}function m(e){return"string"==typeof e?function(e){return"red"==e?[255,0,0]:"green"==e?[0,255,0]:"blue"==e?[0,0,255]:"black"==e?[0,0,0]:"white"==e?[255,255,255]:"cyan"==e?[0,255,255]:"gray"==e||"grey"==e?[128,128,128]:"magenta"==e||"pink"==e?[255,0,255]:"yellow"==e?[255,255,0]:void 0}(e=e.toLowerCase())||function(e){var t=e.replace(/^#/,""),n=t.length;if(3==n||4==n){var o=p(t[0]),r=p(t[1]),a=p(t[2]),i=3==n?255:p(t[3]);if(isNaN(o)||isNaN(r)||isNaN(a)||isNaN(i))return;return[o,r,a,i]}}(e)||function(e){var t=e.replace(/^#/,""),n=t.length;if(6==n||8==n){var o=p(t.slice(0,2)),r=p(t.slice(2,4)),a=p(t.slice(4,6)),i=6==n?255:p(t.slice(6,8));if(isNaN(o)||isNaN(r)||isNaN(a)||isNaN(i))return;return[o,r,a,i]}}(e)||function(e){if("rgb("==e.substr(0,4)){var t=(e=e.match(/^rgb\(([^)]+)\)/)[1]).split(/ *, */).map(Number),n=v(t[0],!0),o=v(t[1],!0),r=v(t[2],!0);if(-1!=n&&-1!=o&&-1!=r)return[n,o,r,255]}}(e)||function(e){if("rgba("==e.substr(0,5)){var t=(e=e.match(/^rgba\(([^)]+)\)/)[1]).split(/ *, */).map(Number),n=v(t[0],!0),o=v(t[1],!0),r=v(t[2],!0),a=v(255*t[3]);if(-1!=n&&-1!=o&&-1!=r&&-1!=a)return[n,o,r,a]}}(e)||[0,0,0,255]:function(e){if("[object Object]"===Object.prototype.toString.call(e)&&Object.getPrototypeOf(e)===Object.getPrototypeOf({})){var t=v(null!=e.r?e.r:null!=e.red?e.red:0,!0),n=v(null!=e.g?e.g:null!=e.green?e.green:0,!0),o=v(null!=e.b?e.b:null!=e.blue?e.blue:0,!0),r=v(null!=e.a?e.a:null!=e.alpha?e.alpha:255,!0);if(-1!=t&&-1!=n&&-1!=o&&-1!=r)return[t,n,o,r]}}(e)||function(e){if(Array.isArray(e)&&(3==e.length||4==e.length)){var t=v(e[0],!0),n=v(e[1],!0),o=v(e[2],!0),r=v(null!=e[3]?e[3]:255,!0);if(-1!=t&&-1!=n&&-1!=o&&-1!=r)return[t,n,o,r]}}(e)||function(e){if("number"==typeof e&&Math.floor(e)==e&&e<=4294967295&&e>=0)return[e>>16&255,e>>8&255,255&e,e>>24&255]}(e)||[0,0,0,255]}function b(e){var t=e.toString(16);return 1==t.length?"0"+t:t}function p(e){return 1==e.length?parseInt(e+e,16):parseInt(e,16)}function v(e,t){return"number"!=typeof e||!0===t&&Math.floor(e)!==e?-1:e>=0&&e<=255?e:-1}l.arr=c,l.obj=d,l.css=u,l.hex=h,l.num=f;var y=.2126,w=.7152,S=.0722,A=1/12.92;function k(e){return Math.pow((e+.055)/1.055,2.4)}function N(e){var t=e[0]/255,n=e[1]/255,o=e[2]/255,r=t<=.03928?t*A:k(t),a=n<=.03928?n*A:k(n),i=o<=.03928?o*A:k(o);return r*y+a*w+i*S}function x(e){var t=255;8===(e=e.replace(/^#/,"")).length&&(t=parseInt(e.slice(6,8),16),e=e.substring(0,6)),4===e.length&&(t=parseInt(e.slice(3,4).repeat(2),16),e=e.substring(0,3)),3===e.length&&(e=e[0]+e[0]+e[1]+e[1]+e[2]+e[2]);var n=parseInt(e,16);return[n>>16,n>>8&255,255&n,t]}function L(e,t){return function(e,t){return(Math.max(e,t)+.05)/(Math.min(e,t)+.05)}(N(e),N(t))}function E(e,t){return L(x(e),x(t))}function O(e){return e>=7?"AAA":e>=4.5?"AA":e>=3?"AA Large":"Fail"}const M=/\[object Object\]/,P=(e,t)=>{"string"==typeof e&&M.test(e)||t()},C=(e,t)=>{"string"==typeof e&&""===e||t()},T=(e,t)=>{(0,o.d)()&&(o.L.debug([e,t]),o.L.debug("\u2191 We propagate the (submit) event to this target.")),Object.defineProperty(e,"target",{value:t,writable:!1})},$=(e,t,n,o={})=>{var r,a;void 0===e.nextHooks&&(e.nextHooks=new Map),void 0===e.nextState&&(e.nextState=new Map),e.nextState.get(t)!==n&&(e.nextHooks.get(t)instanceof Map==0&&e.nextHooks.set(t,new Map),"function"==typeof o.afterPatch&&(null===(r=e.nextHooks.get(t))||void 0===r||r.set("afterPatch",o.afterPatch)),"function"==typeof o.beforePatch&&(null===(a=e.nextHooks.get(t))||void 0===a||a.set("beforePatch",o.beforePatch)),e.nextState.set(t,n),(e=>{var t,n,o;null===(t=e.nextHooks)||void 0===t||t.forEach(((t,n)=>{var o;const r=t.get("beforePatch");"function"==typeof r&&r(null===(o=e.nextState)||void 0===o?void 0:o.get(n),e.nextState,e,n)})),(null===(n=e.nextState)||void 0===n?void 0:n.size)>0&&(e.state=Object.assign(Object.assign({},e.state),Object.fromEntries(e.nextState)),delete e.nextState,null===(o=e.nextHooks)||void 0===o||o.forEach(((t,n)=>{const o=t.get("afterPatch");"function"==typeof o&&o(e.state[n],e.state,e,n)}))),delete e.nextHooks})(e))},j=(e,t,n,o)=>{(0,r.d)(`[${e.constructor.name}] Der Property-Wert (${n}) f\xfcr '${t}' ist nicht valide. Folgende Werte sind erlaubt: ${Array.from(o).join(", ")}`)};function H(e,t,n,o,r,a={}){n(r)?$(e,t,r,a.hooks):null!=r||a.required?(a.required||o.add(null),j(e,t,r,o)):$(e,t,a.defaultValue,a.hooks)}const q=(e,t,n,o)=>{H(e,t,(e=>"boolean"==typeof e),new Set(["Boolean {true, false}"]),n,o)},D=(e,t,n,o={})=>{const r="number"==typeof o.minLength?null==o?void 0:o.minLength:0;H(e,t,(e=>"string"==typeof e&&e.length>=r&&(void 0===(null==o?void 0:o.maxLength)||e.length<=o.maxLength)),new Set(["String"]),n,o)},R=(e,t,n,o)=>{H(e,t,(e=>"number"==typeof e&&(void 0===(null==o?void 0:o.min)||"number"==typeof(null==o?void 0:o.min)&&e>=o.min)&&(void 0===(null==o?void 0:o.max)||"number"==typeof(null==o?void 0:o.max)&&e<=o.max)),new Set(["Number"]),n,o)},_=(e,t,n,r,a=(e=>e==e),i={})=>{C(r,(()=>{P(r,(()=>{void 0===r&&(r=[]);try{try{r=F(r)}catch(e){}if(Array.isArray(r)){const s=r.find((e=>!n(e)));void 0===s&&a(r)?$(e,t,r,i.hooks):P(s,(()=>{throw o.L.debug(s),new Error("\u2191 Das Schema f\xfcr das Property (_options) ist nicht valide. Der Wert wird nicht ge\xe4ndert.")}))}else P(r,(()=>{throw o.L.debug(r),new Error("\u2191 Das Schema f\xfcr das Property (_options) ist nicht valide. Der Wert wird nicht ge\xe4ndert.")}))}catch(e){o.L.debug(e)}}))}))},I=/^(true|false)$/,V=/^-?(0|[1-9]\d*)$/,z=/^-?(0.|[1-9]\d*.)\d*[1-9]$/,J=e=>{const t=typeof e,n=`${e}`;if("string"==typeof e)if(I.test(e))e="true"===e;else if(V.test(e))e=parseInt(e);else if(z.test(e))e=parseFloat(e);else if(B.test(e))try{e=F(e)}catch(e){}return t!==typeof e&&(0,r.d)(`You have used a stringified property value (${n} to ${JSON.stringify(e)}) which type switched from ${t} to ${typeof e}!`),e},W=e=>{try{return JSON.stringify(e).replace(/"/g,"'")}catch(S){throw o.L.warn(["stringifyJson",e]),o.L.error("\u2191 Das JSON konnte nicht in einen String umgewandelt werden. Es wird ein stringifizierbares JSON erwartet."),new Error}},B=/^[{[]/,F=e=>{if("string"==typeof e)try{return JSON.parse(e)}catch(S){if(B.test(e))try{return JSON.parse(e.replace(/'/g,'"'))}catch(S){o.L.warn(["parseJson",e]),o.L.error("\u2191 Der JSON-String konnte nicht geparsed werden. Achten Sie darauf, dass einfache Anf\xfchrungszeichen im Text maskiert werden (&#8216;).")}}throw new Error},K=e=>"boolean"==typeof e?!0===e?"true":"false":void 0,U=e=>"string"==typeof e?e:K(e),Z=(e,t)=>s(e,t||(0,o.a)()),G=(e,t)=>i(e,t||(0,o.a)());let Y=null;const Q=()=>(Y=Y||{backgroundColor:"#00000000",color:"#00000000",domNode:(0,o.a)().body,level:"Fail",score:1},Y),X=/(\d+, ){3}0\)/,ee=(e,t=Q())=>{const n=getComputedStyle(e),r=X.test(n.backgroundColor)?t.backgroundColor:l.hex(n.backgroundColor),a=X.test(n.color)?t.color:l.hex(n.color),i=E(r,a),s={backgroundColor:r,color:a,domNode:e,level:O(i),score:i};return i<4.5&&o.L.error(["Color-Contrast-Error",{backgroundColor:s.backgroundColor,color:s.color,level:s.level,score:s.score},s.domNode]),s},te=(e,t=Q())=>{t.domNode instanceof HTMLElement&&(t=ee(t.domNode,t));const n=t.domNode.querySelector(e);if(null===n){const n=t.domNode.querySelectorAll('[class="hydrated"]');for(let o=0;o<n.length&&(t.domNode=n[o],null===(t=te(e,t)).domNode);o++);return t}return ee(n,t)};class ne{static queryHtmlElementColors(e,t,n=!1,r=!0){let a=null;if(!0===n||!1===ne.executionLock)if(!1===n&&(ne.cache.clear(),ne.cache.set(t.domNode,t),ne.executionLock=!0,!0===r&&o.L.debug("[KoliBriUtils] Color contrast analysis started...")),e===t.domNode)a=t;else{const n=new Set;if(t.domNode.shadowRoot){const e=t.domNode.shadowRoot.children;for(let t=0;t<e.length;t++)n.add(e[t])}const o=t.domNode;if("function"==typeof o.assignedNodes){const e=o.assignedNodes();for(let t=0;t<e.length;t++)e[t]instanceof HTMLElement&&n.add(e[t])}const r=t.domNode.children;for(let e=0;e<r.length;e++)n.add(r[e]);const i=Array.from(n);for(let s=0;s<i.length;s++){let n=ne.cache.get(i[s]);void 0===n&&(n=ee(i[s],t)),ne.cache.set(i[s],n);const o=ne.queryHtmlElementColors(e,n,!0,!1);if(null!==o){a=o;break}}}else o.L.debug("[KoliBriUtils] Call aborted because a color contrast analysis is currently being executed.");return!1===n&&(!0===r&&o.L.debug(`[KoliBriUtils] Color contrast analysis finished (${ne.cache.size} DOM elements are analysed).`),ne.executionLock=!1,ne.cache.clear()),a}}ne.executionLock=!1,ne.cache=new Map;class oe{}oe.patchTheme=o.b,oe.patchThemeTag=o.A,oe.querySelector=Z,oe.querySelectorAll=G,oe.stringifyJson=W},93827:(e,t,n)=>{n.d(t,{v:()=>i});var o=n(83254),r=n(45366);const a={hooks:{afterPatch:e=>{-1!==e&&0!==e&&(0,o.a)("Don\u2019t Use Tabindex Greater than 0: https://adrianroselli.com/2014/11/dont-use-tabindex-greater-than-0.html")}}},i=(e,t)=>{(0,r.e)(e,"_tabIndex",t,a)}}}]);