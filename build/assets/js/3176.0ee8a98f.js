/*! For license information please see 3176.0ee8a98f.js.LICENSE.txt */
"use strict";(self.webpackChunk_public_ui_website=self.webpackChunk_public_ui_website||[]).push([[3176],{4267:(e,t,r)=>{r.d(t,{a:()=>g,b:()=>a,c:()=>h,d:()=>c,e:()=>i,f:()=>u,u:()=>b});var n=r(2292);const o=new Set,i=e=>{!1===o.has(e)&&(o.add(e),n.L.info(e,{classifier:"\u270ba11y",overwriteStyle:"; background-color: #09f"}))},l=new Set,a=e=>{!1===l.has(e)&&(l.add(e),n.L.warn(e,{classifier:"\ud83d\udd25deprecated",forceLog:!0,overwriteStyle:"; background-color: #f00"}))},s=new Set,c=e=>{!1===s.has(e)&&(s.add(e),n.L.debug(e,{classifier:"\ud83d\udcbbdev",overwriteStyle:"; background-color: #f09"}))},d=new Set,u=(e,t=!1)=>{!1===d.has(e)&&(d.add(e),e+=!0===t?" \u2705":"",n.L.debug(e,{classifier:"\ud83c\udf1ffeature",overwriteStyle:"; background-color: #309"}))};c("Wir freuen uns \xfcber jedes Feedback, Kommentare, Screenshots oder Demo-Links von einer auf KoliBri-basierenden Anwendung (kolibri@itzbund.de). Vielen Dank!");const f=new Set,h=()=>{i('"Disabled" schr\xe4nkt die Zug\xe4nglichkeit und Sichtbarkeit ein. Wir empfehlen aus Sicht der Barrierefreiheit readonly- statt disabled-Attribut zu verwenden.\n- https://uxdesign.cc/is-it-ok-to-grey-out-disabled-buttons-8afa74a0fae')},g=e=>{"string"==typeof e&&""!==e||i("Manche Strukturelemente, wie bspw. der nav-Tag, k\xf6nnen mehrfach in einer Webseite verwendet werden. Damit die gleichnamigen Strukturelemente voneinander unterschieden werden k\xf6nnen, ist es erforderlich ein Aria-Label zu setzen.\n- https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/Navigation_Role#accessibility_concerns")},b=(e,t=8)=>{var r;t>7&&(r=`[${e}] Innerhalb von Navigationsstrukturen wird empfohlen nicht mehr als 7 Men\xfcpunkte zu verwenden.\n\nLinks:\n- https://de.ryte.com/wiki/Millersche_Zahl\n- https://de.wikipedia.org/wiki/Millersche_Zahl`,!1===f.has(r)&&(f.add(r),n.L.debug(r,{classifier:"\ud83d\udcd1ui/ux",overwriteStyle:"; background-color: #060;"})))}},3176:(e,t,r)=>{r.r(t),r.d(t,{initialize:()=>a});var n=r(2292),o=r(3837);function i(e,t){try{Object.defineProperty(n.K,e,{get:function(){return t}})}catch(t){n.L.debug(`KoliBri property ${e} is already bind.`)}}const l=(e,t)=>n.L.debug(`${e} ${t?"":"not "}activated`),a=()=>{if((0,n.i)(),(0,n.e)()){(0,n.r)(),i("a11yColorContrast",o.l),i("querySelector",o.k),i("querySelectorAll",o.n),i("querySelectorColors",o.q),i("utils",(function(){return o.j})),i("parseJson",o.p),i("stringifyJson",o.t);const e=(0,n.g)().body,t=(0,n.g)().createElement("svg");if(t.setAttribute("aria-label","KoliBri-DevTools"),t.setAttribute("xmlns","http://www.w3.org/2000/svg"),t.setAttribute("role","toolbar"),t.setAttribute("style","position: fixed;color: black;font-size: 200%;bottom: 0.25rem;right: 0.25rem;"),t.innerHTML='<svg\n  xmlns="http://www.w3.org/2000/svg"\n  width="50"\n  height="50"\n  viewBox="0 0 600 600"\n>\n  <path d="M353 322L213 304V434L353 322Z" fill="#047" />\n  <path d="M209 564V304L149 434L209 564Z" fill="#047" />\n  <path d="M357 316L417 250L361 210L275 244L357 316Z" fill="#047" />\n  <path d="M353 318L35 36L213 300L353 318Z" fill="#047" />\n  <path d="M329 218L237 92L250 222L272 241L329 218Z" fill="#047" />\n  <path d="M391 286L565 272L421 252L391 286Z" fill="#047" />\n</svg>',(0,n.g)().body.appendChild(t),l("Development mode",(0,n.e)()),l("Experimental mode",(0,n.b)()),l("Color contrast analysis",(0,n.f)()),(0,n.f)()){const t=setTimeout((()=>{clearTimeout(t),setInterval((()=>{o.j.queryHtmlElementColors((0,n.g)().createElement("div"),(0,o.l)(e),!1,!1)}),1e4)}),2500)}}}},9021:(e,t,r)=>{r.d(t,{f:()=>c,s:()=>s});var n=1/12.92;function o(e){return Math.pow((e+.055)/1.055,2.4)}function i(e){var t=e[0]/255,r=e[1]/255,i=e[2]/255;return.2126*(t<=.03928?t*n:o(t))+.7152*(r<=.03928?r*n:o(r))+.0722*(i<=.03928?i*n:o(i))}function l(e){var t=255;8===(e=e.replace(/^#/,"")).length&&(t=parseInt(e.slice(6,8),16),e=e.substring(0,6)),4===e.length&&(t=parseInt(e.slice(3,4).repeat(2),16),e=e.substring(0,3)),3===e.length&&(e=e[0]+e[0]+e[1]+e[1]+e[2]+e[2]);var r=parseInt(e,16);return[r>>16,r>>8&255,255&r,t]}function a(e,t){return function(e,t){return(Math.max(e,t)+.05)/(Math.min(e,t)+.05)}(i(e),i(t))}function s(e,t){return a(l(e),l(t))}function c(e){return e>=7?"AAA":e>=4.5?"AA":e>=3?"AA Large":"Fail"}},3837:(e,t,r)=>{r.d(t,{K:()=>Y,a:()=>A,b:()=>M,c:()=>H,d:()=>C,e:()=>N,f:()=>L,g:()=>z,h:()=>U,i:()=>B,j:()=>V,k:()=>R,l:()=>W,m:()=>D,n:()=>J,o:()=>k,p:()=>P,q:()=>Z,r:()=>d,s:()=>x,t:()=>j,w:()=>E});var n=r(2095),o=r(9021),i=r(4267),l=r(2292);const a=(e,t)=>{t.forEach((t=>{!1===e.has(t)&&e.add(t)}))},s=(e,t=document)=>{if(t instanceof Document||t instanceof HTMLElement||t instanceof ShadowRoot){const r=new Set;a(r,t.querySelectorAll(e));const n=t.querySelectorAll('[class*="hydrated"]');for(let t=0;t<n.length;t++){const o=n[t].shadowRoot;a(r,s(e,"object"==typeof o&&null!==o?o:n[t]))}return Array.from(r)}throw new Error("The parameter document for the method querySelectorAll is not type of Document, HTMLElement or ShadowRoot.")},c=(e,t=document)=>{if(t instanceof Document||t instanceof HTMLElement||t instanceof ShadowRoot){let r=t.querySelector(e);if(null===r){const n=t.querySelectorAll('[class*="hydrated"]');for(let t=0;t<n.length;t++){const o=n[t].shadowRoot;if(r=c(e,"object"==typeof o&&null!==o?o:n[t]),null!==r)break}}return r}throw new Error("The parameter document for the method querySelector is not type of Document, HTMLElement or ShadowRoot.")};var d=m,u=m,f=function(e){var t=p(e);return{r:t[0],g:t[1],b:t[2],a:3==t.length?255:Math.round(t[3])}},h=function(e){var t=p(e);return 3==t.length&&t.push(255),255==t[3]?"rgb("+t[0]+", "+t[1]+", "+t[2]+")":0==t[3]?"rgba("+t[0]+", "+t[1]+", "+t[2]+", 0)":"rgba("+t[0]+", "+t[1]+", "+t[2]+", "+String(t[3]/255).substr(1)+")"},g=function(e){3==(t=p(e)).length&&t.push(255);var t,r=255==t[3],n=y(t[0]),o=y(t[1]),i=y(t[2]),l=function(e,t,r,n){var o=["ff","00","11","22","33","44","55","66","77","88","99","aa","bb","cc","dd","ee"];return-1!=o.indexOf(e)&&-1!=o.indexOf(t)&&-1!=o.indexOf(r)&&-1!=o.indexOf(n)}(n,o,i,t=y(Math.round(t[3])));return r?l?"#"+n.charAt(0)+o.charAt(0)+i.charAt(0):"#"+n+o+i:l?"#"+n.charAt(0)+o.charAt(0)+i.charAt(0)+t.charAt(0):"#"+n+o+i+t},b=function(e){var t=p(e);return 3==t.length?t.push(255):t[3]=Math.round(t[3]),(t[3]<<24>>>0|t[0]<<16|t[1]<<8|t[2])>>>0};function m(e){var t=p(e);return 3==t.length?t.concat(255):(t[3]=Math.round(t[3]),t)}function p(e){return"string"==typeof e?function(e){return"red"==e?[255,0,0]:"green"==e?[0,255,0]:"blue"==e?[0,0,255]:"black"==e?[0,0,0]:"white"==e?[255,255,255]:"cyan"==e?[0,255,255]:"gray"==e||"grey"==e?[128,128,128]:"magenta"==e||"pink"==e?[255,0,255]:"yellow"==e?[255,255,0]:void 0}(e=e.toLowerCase())||function(e){var t=e.replace(/^#/,""),r=t.length;if(3==r||4==r){var n=v(t[0]),o=v(t[1]),i=v(t[2]),l=3==r?255:v(t[3]);if(isNaN(n)||isNaN(o)||isNaN(i)||isNaN(l))return;return[n,o,i,l]}}(e)||function(e){var t=e.replace(/^#/,""),r=t.length;if(6==r||8==r){var n=v(t.slice(0,2)),o=v(t.slice(2,4)),i=v(t.slice(4,6)),l=6==r?255:v(t.slice(6,8));if(isNaN(n)||isNaN(o)||isNaN(i)||isNaN(l))return;return[n,o,i,l]}}(e)||function(e){if("rgb("==e.substr(0,4)){var t=(e=e.match(/^rgb\(([^)]+)\)/)[1]).split(/ *, */).map(Number),r=w(t[0],!0),n=w(t[1],!0),o=w(t[2],!0);if(-1!=r&&-1!=n&&-1!=o)return[r,n,o,255]}}(e)||function(e){if("rgba("==e.substr(0,5)){var t=(e=e.match(/^rgba\(([^)]+)\)/)[1]).split(/ *, */).map(Number),r=w(t[0],!0),n=w(t[1],!0),o=w(t[2],!0),i=w(255*t[3]);if(-1!=r&&-1!=n&&-1!=o&&-1!=i)return[r,n,o,i]}}(e)||[0,0,0,255]:function(e){if("[object Object]"===Object.prototype.toString.call(e)&&Object.getPrototypeOf(e)===Object.getPrototypeOf({})){var t=w(null!=e.r?e.r:null!=e.red?e.red:0,!0),r=w(null!=e.g?e.g:null!=e.green?e.green:0,!0),n=w(null!=e.b?e.b:null!=e.blue?e.blue:0,!0),o=w(null!=e.a?e.a:null!=e.alpha?e.alpha:255,!0);if(-1!=t&&-1!=r&&-1!=n&&-1!=o)return[t,r,n,o]}}(e)||function(e){if(Array.isArray(e)&&(3==e.length||4==e.length)){var t=w(e[0],!0),r=w(e[1],!0),n=w(e[2],!0),o=w(null!=e[3]?e[3]:255,!0);if(-1!=t&&-1!=r&&-1!=n&&-1!=o)return[t,r,n,o]}}(e)||function(e){if("number"==typeof e&&Math.floor(e)==e&&e<=4294967295&&e>=0)return[e>>16&255,e>>8&255,255&e,e>>24&255]}(e)||[0,0,0,255]}function y(e){var t=e.toString(16);return 1==t.length?"0"+t:t}function v(e){return 1==e.length?parseInt(e+e,16):parseInt(e,16)}function w(e,t){return"number"!=typeof e||!0===t&&Math.floor(e)!==e?-1:e>=0&&e<=255?e:-1}d.arr=u,d.obj=f,d.css=h,d.hex=g,d.num=b;const S=/\[object Object\]/,k=(e,t)=>{"string"==typeof e&&S.test(e)||t()},L=(e,t)=>{"string"==typeof e&&""===e||t()},N=(e,t)=>{(0,l.b)()&&(l.L.debug([e,t]),l.L.debug("\u2191 We propagate the (submit) event to this target.")),Object.defineProperty(e,"target",{value:t,writable:!1})},x=(e,t,r,n={})=>{var o,i;void 0===e.nextHooks&&(e.nextHooks=new Map),void 0===e.nextState&&(e.nextState=new Map),e.nextState.get(t)!==r&&(e.nextHooks.get(t)instanceof Map==0&&e.nextHooks.set(t,new Map),"function"==typeof n.afterPatch&&(null===(o=e.nextHooks.get(t))||void 0===o||o.set("afterPatch",n.afterPatch)),"function"==typeof n.beforePatch&&(null===(i=e.nextHooks.get(t))||void 0===i||i.set("beforePatch",n.beforePatch)),e.nextState.set(t,r),(e=>{var t,r,n;null===(t=e.nextHooks)||void 0===t||t.forEach(((t,r)=>{var n;const o=t.get("beforePatch");"function"==typeof o&&o(null===(n=e.nextState)||void 0===n?void 0:n.get(r),e.nextState,e,r)})),(null===(r=e.nextState)||void 0===r?void 0:r.size)>0&&(e.state=Object.assign(Object.assign({},e.state),Object.fromEntries(e.nextState)),delete e.nextState,null===(n=e.nextHooks)||void 0===n||n.forEach(((t,r)=>{const n=t.get("afterPatch");"function"==typeof n&&n(e.state[r],e.state,e,r)}))),delete e.nextHooks})(e))},A=(e,t,r,n,o,l={})=>{r(o)?x(e,t,o,null==l?void 0:l.hooks):void 0===o||null===o&&(void 0===(null==l?void 0:l.required)||!1===(null==l?void 0:l.required))?x(e,t,null==l?void 0:l.defaultValue,null==l?void 0:l.hooks):(void 0!==(null==l?void 0:l.required)&&!1!==(null==l?void 0:l.required)||n.add(null),((e,t,r,n)=>{(0,i.d)(`[${e.constructor.name}] Der Property-Wert (${r}) f\xfcr '${t}' ist nicht valide. Folgende Werte sind erlaubt: ${Array.from(n).join(", ")}`)})(e,t,o,n))},M=(e,t,r,n)=>{A(e,t,(e=>"boolean"==typeof e),new Set(["Boolean {true, false}"]),r,n)},E=(e,t,r,n={})=>{const o="number"==typeof n.minLength?null==n?void 0:n.minLength:0;A(e,t,(e=>"string"==typeof e&&e.length>=o),new Set([`String (Mindestl\xe4nge ${o})`]),r,n)},C=(e,t,r,n)=>{A(e,t,(e=>"number"==typeof e&&(void 0===(null==n?void 0:n.min)||"number"==typeof(null==n?void 0:n.min)&&e>=n.min)&&(void 0===(null==n?void 0:n.max)||"number"==typeof(null==n?void 0:n.max)&&e<=n.max)),new Set(["Number"]),r,n)},H=(e,t,r,n,o=(e=>e==e),i={})=>{L(n,(()=>{k(n,(()=>{void 0===n&&(n=[]);try{try{n=P(n)}catch(e){}if(Array.isArray(n)){const a=n.find((e=>!r(e)));void 0===a&&o(n)?x(e,t,n,i.hooks):k(a,(()=>{throw l.L.debug(a),new Error("\u2191 Das Schema f\xfcr das Property (_options) ist nicht valide. Der Wert wird nicht ge\xe4ndert.")}))}else k(n,(()=>{throw l.L.debug(n),new Error("\u2191 Das Schema f\xfcr das Property (_options) ist nicht valide. Der Wert wird nicht ge\xe4ndert.")}))}catch(e){l.L.debug(e)}}))}))},O=/^(true|false)$/,T=/^-?(0|[1-9]\d*)$/,q=/^-?(0.|[1-9]\d*.)\d*[1-9]$/,D=e=>{const t=typeof e,r=`${e}`;if("string"==typeof e)if(O.test(e))e="true"===e;else if(T.test(e))e=parseInt(e);else if(q.test(e))e=parseFloat(e);else if($.test(e))try{e=P(e)}catch(e){}return t!==typeof e&&(0,i.d)(`You have used a stringified property value (${r} to ${JSON.stringify(e)}) which type switched from ${t} to ${typeof e}!`),e},j=e=>{try{return JSON.stringify(e).replace(/"/g,"'")}catch(t){throw l.L.warn(["stringifyJson",e]),l.L.error("\u2191 Das JSON konnte nicht in einen String umgewandelt werden. Es wird ein stringifizierbares JSON erwartet."),new Error}},$=/^[{[]/,P=e=>{if("string"==typeof e)try{return JSON.parse(e)}catch(t){if($.test(e))try{return JSON.parse(e.replace(/'/g,'"'))}catch(t){l.L.warn(["parseJson",e]),l.L.error("\u2191 Der JSON-String konnte nicht geparsed werden. Achten Sie darauf, dass einfache Anf\xfchrungszeichen im Text maskiert werden (&#8216;).")}}throw new Error},z=e=>"boolean"==typeof e?!0===e?"true":"false":void 0,B=e=>"string"==typeof e?e:z(e),R=(e,t)=>c(e,t||(0,l.g)()),J=(e,t)=>s(e,t||(0,l.g)());let _=null;const I=()=>(_=_||{backgroundColor:"#00000000",color:"#00000000",domNode:(0,l.g)().body,level:"Fail",score:1},_),K=/(\d+, ){3}0\)/,W=(e,t=I())=>{const r=getComputedStyle(e),n=K.test(r.backgroundColor)?t.backgroundColor:d.hex(r.backgroundColor),i=K.test(r.color)?t.color:d.hex(r.color),a=(0,o.s)(n,i),s={backgroundColor:n,color:i,domNode:e,level:(0,o.f)(a),score:a};return a<4.5&&l.L.error(["Color-Contrast-Error",{backgroundColor:s.backgroundColor,color:s.color,level:s.level,score:s.score},s.domNode]),s},Z=(e,t=I())=>{t.domNode instanceof HTMLElement&&(t=W(t.domNode,t));const r=t.domNode.querySelector(e);if(null===r){const r=t.domNode.querySelectorAll('[class="hydrated"]');for(let n=0;n<r.length&&(t.domNode=r[n],null===(t=Z(e,t)).domNode);n++);return t}return W(r,t)},F=(e,t=window)=>{e instanceof HTMLElement?(t.scrollTo({behavior:"smooth",top:e.getBoundingClientRect().top+(0,l.a)().pageYOffset-50}),e.focus()):(0,i.d)("Das HTMLElement ist nicht valide, zu dem gescrollt werden soll.")},U=(e,t)=>{if((e instanceof Document||e instanceof HTMLElement||e instanceof ShadowRoot)&&"string"==typeof t){(0,i.d)("Bei der Methode querySelectorAll wurden die Parameter document, selector in selector, document getauscht, da der Parameter selector nicht, allerdings der Parameter document optional sein kann.");const r=`${t}`;t=e,e=r}if("string"==typeof e){const r=R(e,t);r instanceof HTMLElement?F(r):(0,i.d)(`Es konnte kein HTMLElement mit dem Selector (${e}) gefunden werden, zu dem gescrollt werden soll.`)}else(0,i.d)("Der Selector ist nicht valide, zu dem gescrollt werden soll.")};class V{static queryHtmlElementColors(e,t,r=!1,n=!0){let o=null;if(!0===r||!1===V.executionLock)if(!1===r&&(V.cache.clear(),V.cache.set(t.domNode,t),V.executionLock=!0,!0===n&&l.L.debug("[KoliBriUtils] Color contrast analysis started...")),e===t.domNode)o=t;else{const r=new Set;if(t.domNode.shadowRoot){const e=t.domNode.shadowRoot.children;for(let t=0;t<e.length;t++)r.add(e[t])}const n=t.domNode;if("function"==typeof n.assignedNodes){const e=n.assignedNodes();for(let t=0;t<e.length;t++)e[t]instanceof HTMLElement&&r.add(e[t])}const i=t.domNode.children;for(let e=0;e<i.length;e++)r.add(i[e]);const l=Array.from(r);for(let a=0;a<l.length;a++){let r=V.cache.get(l[a]);void 0===r&&(r=W(l[a],t)),V.cache.set(l[a],r);const n=V.queryHtmlElementColors(e,r,!0,!1);if(null!==n){o=n;break}}}else l.L.debug("[KoliBriUtils] Call aborted because a color contrast analysis is currently being executed.");return!1===r&&(!0===n&&l.L.debug(`[KoliBriUtils] Color contrast analysis finished (${V.cache.size} DOM elements are analysed).`),V.executionLock=!1,V.cache.clear()),o}}V.executionLock=!1,V.cache=new Map;class Y{}Y.patchTheme=n.p,Y.patchThemeTag=n.a,Y.querySelector=R,Y.querySelectorAll=J,Y.scrollByHTMLElement=F,Y.scrollBySelector=U,Y.stringifyJson=j}}]);