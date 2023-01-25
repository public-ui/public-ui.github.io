/*! For license information please see 6759.d910e79b.js.LICENSE.txt */
"use strict";(self.webpackChunk_public_ui_website=self.webpackChunk_public_ui_website||[]).push([[6759],{5149:(e,t,n)=>{n.d(t,{a:()=>g,b:()=>l,c:()=>f,d:()=>c,e:()=>a,f:()=>u,u:()=>b});var r=n(7738);const o=new Set,a=e=>{!1===o.has(e)&&(o.add(e),r.L.info(e,{classifier:"\u270ba11y",overwriteStyle:"; background-color: #09f"}))},i=new Set,l=e=>{!1===i.has(e)&&(i.add(e),r.L.warn(e,{classifier:"\ud83d\udd25deprecated",forceLog:!0,overwriteStyle:"; background-color: #f00"}))},s=new Set,c=e=>{!1===s.has(e)&&(s.add(e),r.L.debug(e,{classifier:"\ud83d\udcbbdev",overwriteStyle:"; background-color: #f09"}))},d=new Set,u=(e,t=!1)=>{!1===d.has(e)&&(d.add(e),e+=!0===t?" \u2705":"",r.L.debug(e,{classifier:"\ud83c\udf1ffeature",overwriteStyle:"; background-color: #309"}))};c("Wir freuen uns \xfcber jedes Feedback, Kommentare, Screenshots oder Demo-Links von einer auf KoliBri-basierenden Anwendung (kolibri@itzbund.de). Vielen Dank!");const h=new Set,f=()=>{a('"Disabled" schr\xe4nkt die Zug\xe4nglichkeit und Sichtbarkeit ein. Wir empfehlen aus Sicht der Barrierefreiheit readonly- statt disabled-Attribut zu verwenden.\n- https://uxdesign.cc/is-it-ok-to-grey-out-disabled-buttons-8afa74a0fae')},g=e=>{"string"==typeof e&&""!==e||a("Manche Strukturelemente, wie bspw. der nav-Tag, k\xf6nnen mehrfach in einer Webseite verwendet werden. Damit die gleichnamigen Strukturelemente voneinander unterschieden werden k\xf6nnen, ist es erforderlich ein Aria-Label zu setzen.\n- https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/Navigation_Role#accessibility_concerns")},b=(e,t=8)=>{var n;t>7&&(n=`[${e}] Innerhalb von Navigationsstrukturen wird empfohlen nicht mehr als 7 Men\xfcpunkte zu verwenden.\n\nLinks:\n- https://de.ryte.com/wiki/Millersche_Zahl\n- https://de.wikipedia.org/wiki/Millersche_Zahl`,!1===h.has(n)&&(h.add(n),r.L.debug(n,{classifier:"\ud83d\udcd1ui/ux",overwriteStyle:"; background-color: #060;"})))}},4340:(e,t,n)=>{n.d(t,{f:()=>c,s:()=>s});var r=1/12.92;function o(e){return Math.pow((e+.055)/1.055,2.4)}function a(e){var t=e[0]/255,n=e[1]/255,a=e[2]/255;return.2126*(t<=.03928?t*r:o(t))+.7152*(n<=.03928?n*r:o(n))+.0722*(a<=.03928?a*r:o(a))}function i(e){var t=255;8===(e=e.replace(/^#/,"")).length&&(t=parseInt(e.slice(6,8),16),e=e.substring(0,6)),4===e.length&&(t=parseInt(e.slice(3,4).repeat(2),16),e=e.substring(0,3)),3===e.length&&(e=e[0]+e[0]+e[1]+e[1]+e[2]+e[2]);var n=parseInt(e,16);return[n>>16,n>>8&255,255&n,t]}function l(e,t){return function(e,t){return(Math.max(e,t)+.05)/(Math.min(e,t)+.05)}(a(e),a(t))}function s(e,t){return l(i(e),i(t))}function c(e){return e>=7?"AAA":e>=4.5?"AA":e>=3?"AA Large":"Fail"}},6759:(e,t,n)=>{n.r(t),n.d(t,{kol_breadcrumb:()=>l});var r=n(7509),o=n(5149),a=n(8286),i=n(5928);const l=class{constructor(e){(0,r.r)(this,e),this._ariaLabel=void 0,this._links=void 0,this.state={_ariaLabel:"\u2026",_links:[]}}render(){const e=this.state._links.length-1;return(0,r.h)(r.H,null,(0,r.h)("nav",{"aria-label":this.state._ariaLabel},(0,r.h)("ul",null,0===this.state._links.length&&(0,r.h)("li",null,(0,r.h)("kol-icon",{_ariaLabel:"",_icon:"fa-solid fa-house"}),"\u2026"),this.state._links.map(((t,n)=>(0,r.h)("li",{key:n},0!==n&&(0,r.h)("kol-icon",{_ariaLabel:"",_icon:"fa-solid fa-angle-right",_part:"separator",exportparts:"separator"}),n===e?(0,r.h)("span",null,t._iconOnly?(0,r.h)("kol-icon",{_ariaLabel:t._label,_icon:"string"==typeof t._icon?t._icon:"fa-solid fa-link-slash"}):(0,r.h)(r.F,null,t._label)):(0,r.h)("kol-link",Object.assign({exportparts:"link",_useCase:"nav"},t,{_ariaLabel:t._label}),t._label)))))))}validateAriaLabel(e){(0,a.w)(this,"_ariaLabel",e,{required:!0}),(0,o.a)(e)}validateLinks(e){(0,i.w)("KolBreadcrumb",this,e)}componentWillLoad(){this.validateAriaLabel(this._ariaLabel),this.validateLinks(this._links)}static get watchers(){return{_ariaLabel:["validateAriaLabel"],_links:["validateLinks"]}}};l.style={default:"@windicss; *{box-sizing:border-box;font-size:inherit;hyphens:auto;letter-spacing:inherit;word-break:break-word;word-spacing:inherit}kol-heading-wc{font-weight:700}kol-icon{color:inherit}kol-span-wc{display:grid;place-items:center;width:100%}kol-span-wc>span{display:flex;gap:0.25rem;place-items:center}a,button{cursor:pointer}a.icon-only>kol-span-wc>span>span,button.icon-only>kol-span-wc>span>span{display:none}a{display:inline-flex;place-items:baseline}button{border-width:0}"}},8286:(e,t,n)=>{n.d(t,{K:()=>Y,a:()=>x,b:()=>A,c:()=>O,d:()=>E,e:()=>N,f:()=>L,g:()=>$,h:()=>Z,i:()=>z,j:()=>V,k:()=>R,l:()=>K,m:()=>j,n:()=>B,o:()=>S,p:()=>P,q:()=>F,r:()=>d,s:()=>_,t:()=>q,w:()=>M});var r=n(7508),o=n(4340),a=n(5149),i=n(7738);const l=(e,t)=>{t.forEach((t=>{!1===e.has(t)&&e.add(t)}))},s=(e,t=document)=>{if(t instanceof Document||t instanceof HTMLElement||t instanceof ShadowRoot){const n=new Set;l(n,t.querySelectorAll(e));const r=t.querySelectorAll('[class*="hydrated"]');for(let t=0;t<r.length;t++){const o=r[t].shadowRoot;l(n,s(e,"object"==typeof o&&null!==o?o:r[t]))}return Array.from(n)}throw new Error("The parameter document for the method querySelectorAll is not type of Document, HTMLElement or ShadowRoot.")},c=(e,t=document)=>{if(t instanceof Document||t instanceof HTMLElement||t instanceof ShadowRoot){let n=t.querySelector(e);if(null===n){const r=t.querySelectorAll('[class*="hydrated"]');for(let t=0;t<r.length;t++){const o=r[t].shadowRoot;if(n=c(e,"object"==typeof o&&null!==o?o:r[t]),null!==n)break}}return n}throw new Error("The parameter document for the method querySelector is not type of Document, HTMLElement or ShadowRoot.")};var d=p,u=p,h=function(e){var t=m(e);return{r:t[0],g:t[1],b:t[2],a:3==t.length?255:Math.round(t[3])}},f=function(e){var t=m(e);return 3==t.length&&t.push(255),255==t[3]?"rgb("+t[0]+", "+t[1]+", "+t[2]+")":0==t[3]?"rgba("+t[0]+", "+t[1]+", "+t[2]+", 0)":"rgba("+t[0]+", "+t[1]+", "+t[2]+", "+String(t[3]/255).substr(1)+")"},g=function(e){3==(t=m(e)).length&&t.push(255);var t,n=255==t[3],r=y(t[0]),o=y(t[1]),a=y(t[2]),i=function(e,t,n,r){var o=["ff","00","11","22","33","44","55","66","77","88","99","aa","bb","cc","dd","ee"];return-1!=o.indexOf(e)&&-1!=o.indexOf(t)&&-1!=o.indexOf(n)&&-1!=o.indexOf(r)}(r,o,a,t=y(Math.round(t[3])));return n?i?"#"+r.charAt(0)+o.charAt(0)+a.charAt(0):"#"+r+o+a:i?"#"+r.charAt(0)+o.charAt(0)+a.charAt(0)+t.charAt(0):"#"+r+o+a+t},b=function(e){var t=m(e);return 3==t.length?t.push(255):t[3]=Math.round(t[3]),(t[3]<<24>>>0|t[0]<<16|t[1]<<8|t[2])>>>0};function p(e){var t=m(e);return 3==t.length?t.concat(255):(t[3]=Math.round(t[3]),t)}function m(e){return"string"==typeof e?function(e){return"red"==e?[255,0,0]:"green"==e?[0,255,0]:"blue"==e?[0,0,255]:"black"==e?[0,0,0]:"white"==e?[255,255,255]:"cyan"==e?[0,255,255]:"gray"==e||"grey"==e?[128,128,128]:"magenta"==e||"pink"==e?[255,0,255]:"yellow"==e?[255,255,0]:void 0}(e=e.toLowerCase())||function(e){var t=e.replace(/^#/,""),n=t.length;if(3==n||4==n){var r=v(t[0]),o=v(t[1]),a=v(t[2]),i=3==n?255:v(t[3]);if(isNaN(r)||isNaN(o)||isNaN(a)||isNaN(i))return;return[r,o,a,i]}}(e)||function(e){var t=e.replace(/^#/,""),n=t.length;if(6==n||8==n){var r=v(t.slice(0,2)),o=v(t.slice(2,4)),a=v(t.slice(4,6)),i=6==n?255:v(t.slice(6,8));if(isNaN(r)||isNaN(o)||isNaN(a)||isNaN(i))return;return[r,o,a,i]}}(e)||function(e){if("rgb("==e.substr(0,4)){var t=(e=e.match(/^rgb\(([^)]+)\)/)[1]).split(/ *, */).map(Number),n=w(t[0],!0),r=w(t[1],!0),o=w(t[2],!0);if(-1!=n&&-1!=r&&-1!=o)return[n,r,o,255]}}(e)||function(e){if("rgba("==e.substr(0,5)){var t=(e=e.match(/^rgba\(([^)]+)\)/)[1]).split(/ *, */).map(Number),n=w(t[0],!0),r=w(t[1],!0),o=w(t[2],!0),a=w(255*t[3]);if(-1!=n&&-1!=r&&-1!=o&&-1!=a)return[n,r,o,a]}}(e)||[0,0,0,255]:function(e){if("[object Object]"===Object.prototype.toString.call(e)&&Object.getPrototypeOf(e)===Object.getPrototypeOf({})){var t=w(null!=e.r?e.r:null!=e.red?e.red:0,!0),n=w(null!=e.g?e.g:null!=e.green?e.green:0,!0),r=w(null!=e.b?e.b:null!=e.blue?e.blue:0,!0),o=w(null!=e.a?e.a:null!=e.alpha?e.alpha:255,!0);if(-1!=t&&-1!=n&&-1!=r&&-1!=o)return[t,n,r,o]}}(e)||function(e){if(Array.isArray(e)&&(3==e.length||4==e.length)){var t=w(e[0],!0),n=w(e[1],!0),r=w(e[2],!0),o=w(null!=e[3]?e[3]:255,!0);if(-1!=t&&-1!=n&&-1!=r&&-1!=o)return[t,n,r,o]}}(e)||function(e){if("number"==typeof e&&Math.floor(e)==e&&e<=4294967295&&e>=0)return[e>>16&255,e>>8&255,255&e,e>>24&255]}(e)||[0,0,0,255]}function y(e){var t=e.toString(16);return 1==t.length?"0"+t:t}function v(e){return 1==e.length?parseInt(e+e,16):parseInt(e,16)}function w(e,t){return"number"!=typeof e||!0===t&&Math.floor(e)!==e?-1:e>=0&&e<=255?e:-1}d.arr=u,d.obj=h,d.css=f,d.hex=g,d.num=b;const k=/\[object Object\]/,S=(e,t)=>{"string"==typeof e&&k.test(e)||t()},L=(e,t)=>{"string"==typeof e&&""===e||t()},N=(e,t)=>{(0,i.b)()&&(console.log(e,t),(0,a.d)("\u2191 We propagate the (submit) event to this target.")),Object.defineProperty(e,"target",{value:t,writable:!1})},_=(e,t,n,r={})=>{var o,a;void 0===e.nextHooks&&(e.nextHooks=new Map),void 0===e.nextState&&(e.nextState=new Map),e.nextState.get(t)!==n&&(e.nextHooks.get(t)instanceof Map==0&&e.nextHooks.set(t,new Map),"function"==typeof r.afterPatch&&(null===(o=e.nextHooks.get(t))||void 0===o||o.set("afterPatch",r.afterPatch)),"function"==typeof r.beforePatch&&(null===(a=e.nextHooks.get(t))||void 0===a||a.set("beforePatch",r.beforePatch)),e.nextState.set(t,n),(e=>{var t,n,r;null===(t=e.nextHooks)||void 0===t||t.forEach(((t,n)=>{var r;const o=t.get("beforePatch");"function"==typeof o&&o(null===(r=e.nextState)||void 0===r?void 0:r.get(n),e.nextState,e,n)})),(null===(n=e.nextState)||void 0===n?void 0:n.size)>0&&(e.state=Object.assign(Object.assign({},e.state),Object.fromEntries(e.nextState)),delete e.nextState,null===(r=e.nextHooks)||void 0===r||r.forEach(((t,n)=>{const r=t.get("afterPatch");"function"==typeof r&&r(e.state[n],e.state,e,n)}))),delete e.nextHooks})(e))},x=(e,t,n,r,o,i={})=>{n(o)?_(e,t,o,null==i?void 0:i.hooks):void 0===o||null===o&&(void 0===(null==i?void 0:i.required)||!1===(null==i?void 0:i.required))?_(e,t,null==i?void 0:i.defaultValue,null==i?void 0:i.hooks):(void 0!==(null==i?void 0:i.required)&&!1!==(null==i?void 0:i.required)||r.add(null),((e,t,n,r)=>{(0,a.d)(`[${e.constructor.name}] Der Property-Wert (${n}) f\xfcr '${t}' ist nicht valide. Folgende Werte sind erlaubt: ${Array.from(r).join(", ")}`)})(e,t,o,r))},A=(e,t,n,r)=>{x(e,t,(e=>"boolean"==typeof e),new Set(["Boolean {true, false}"]),n,r)},M=(e,t,n,r={})=>{const o="number"==typeof r.minLength?null==r?void 0:r.minLength:0;x(e,t,(e=>"string"==typeof e&&e.length>=o),new Set([`String (Mindestl\xe4nge ${o})`]),n,r)},E=(e,t,n,r)=>{x(e,t,(e=>"number"==typeof e&&(void 0===(null==r?void 0:r.min)||"number"==typeof(null==r?void 0:r.min)&&e>=r.min)&&(void 0===(null==r?void 0:r.max)||"number"==typeof(null==r?void 0:r.max)&&e<=r.max)),new Set(["Number"]),n,r)},O=(e,t,n,r,o=(e=>e==e),i={})=>{L(r,(()=>{S(r,(()=>{void 0===r&&(r=[]);try{try{r=P(r)}catch(e){}if(Array.isArray(r)){const a=r.find((e=>!n(e)));void 0===a&&o(r)?_(e,t,r,i.hooks):S(a,(()=>{throw console.log(a),new Error("\u2191 Das Schema f\xfcr das Property (_options) ist nicht valide. Der Wert wird nicht ge\xe4ndert.")}))}else S(r,(()=>{throw console.log(r),new Error("\u2191 Das Schema f\xfcr das Property (_options) ist nicht valide. Der Wert wird nicht ge\xe4ndert.")}))}catch(e){(0,a.d)("Known bug: Zeichenkettenliste (string[])")}}))}))},H=/^(true|false)$/,C=/^-?(0|[1-9]\d*)$/,T=/^-?(0.|[1-9]\d*.)\d*[1-9]$/,j=e=>{const t=typeof e,n=`${e}`;if("string"==typeof e)if(H.test(e))e="true"===e;else if(C.test(e))e=parseInt(e);else if(T.test(e))e=parseFloat(e);else if(D.test(e))try{e=P(e)}catch(e){}return t!==typeof e&&(0,a.d)(`You have used a stringified property value (${n} to ${JSON.stringify(e)}) which type switched from ${t} to ${typeof e}!`),e},q=e=>{try{return JSON.stringify(e).replace(/"/g,"'")}catch(t){throw i.L.warn(["stringifyJson",e]),i.L.error("\u2191 Das JSON konnte nicht in einen String umgewandelt werden. Es wird ein stringifizierbares JSON erwartet."),new Error}},D=/^[{[]/,P=e=>{if("string"==typeof e)try{return JSON.parse(e)}catch(t){if(D.test(e))try{return JSON.parse(e.replace(/'/g,'"'))}catch(t){i.L.warn(["parseJson",e]),i.L.error("\u2191 Der JSON-String konnte nicht geparsed werden. Achten Sie darauf, dass einfache Anf\xfchrungszeichen im Text maskiert werden (&#8216;).")}}throw new Error},$=e=>"boolean"==typeof e?!0===e?"true":"false":void 0,z=e=>"string"==typeof e?e:$(e),R=(e,t)=>c(e,t||(0,i.g)()),B=(e,t)=>s(e,t||(0,i.g)());let J=null;const W=()=>(J=J||{backgroundColor:"#00000000",color:"#00000000",domNode:(0,i.g)().body,level:"Fail",score:1},J),I=/(\d+, ){3}0\)/,K=(e,t=W())=>{const n=getComputedStyle(e),r=I.test(n.backgroundColor)?t.backgroundColor:d.hex(n.backgroundColor),a=I.test(n.color)?t.color:d.hex(n.color),l=(0,o.s)(r,a),s={backgroundColor:r,color:a,domNode:e,level:(0,o.f)(l),score:l};return l<4.5&&i.L.error(["Color-Contrast-Error",{backgroundColor:s.backgroundColor,color:s.color,level:s.level,score:s.score},s.domNode]),s},F=(e,t=W())=>{t.domNode instanceof HTMLElement&&(t=K(t.domNode,t));const n=t.domNode.querySelector(e);if(null===n){const n=t.domNode.querySelectorAll('[class="hydrated"]');for(let r=0;r<n.length&&(t.domNode=n[r],null===(t=F(e,t)).domNode);r++);return t}return K(n,t)},U=(e,t=window)=>{e instanceof HTMLElement?(t.scrollTo({behavior:"smooth",top:e.getBoundingClientRect().top+(0,i.a)().pageYOffset-50}),e.focus()):(0,a.d)("Das HTMLElement ist nicht valide, zu dem gescrollt werden soll.")},Z=(e,t)=>{if((e instanceof Document||e instanceof HTMLElement||e instanceof ShadowRoot)&&"string"==typeof t){(0,a.d)("Bei der Methode querySelectorAll wurden die Parameter document, selector in selector, document getauscht, da der Parameter selector nicht, allerdings der Parameter document optional sein kann.");const n=`${t}`;t=e,e=n}if("string"==typeof e){const n=R(e,t);n instanceof HTMLElement?U(n):(0,a.d)(`Es konnte kein HTMLElement mit dem Selector (${e}) gefunden werden, zu dem gescrollt werden soll.`)}else(0,a.d)("Der Selector ist nicht valide, zu dem gescrollt werden soll.")};class V{static queryHtmlElementColors(e,t,n=!1,r=!0){let o=null;if(!0===n||!1===V.executionLock)if(!1===n&&(V.cache.clear(),V.cache.set(t.domNode,t),V.executionLock=!0,!0===r&&i.L.debug("[KoliBriUtils] Color contrast analysis started...")),e===t.domNode)o=t;else{const n=new Set;if(t.domNode.shadowRoot){const e=t.domNode.shadowRoot.children;for(let t=0;t<e.length;t++)n.add(e[t])}const r=t.domNode;if("function"==typeof r.assignedNodes){const e=r.assignedNodes();for(let t=0;t<e.length;t++)e[t]instanceof HTMLElement&&n.add(e[t])}const a=t.domNode.children;for(let e=0;e<a.length;e++)n.add(a[e]);const i=Array.from(n);for(let l=0;l<i.length;l++){let n=V.cache.get(i[l]);void 0===n&&(n=K(i[l],t)),V.cache.set(i[l],n);const r=V.queryHtmlElementColors(e,n,!0,!1);if(null!==r){o=r;break}}}else i.L.debug("[KoliBriUtils] Call aborted because a color contrast analysis is currently being executed.");return!1===n&&(!0===r&&i.L.debug(`[KoliBriUtils] Color contrast analysis finished (${V.cache.size} DOM elements are analysed).`),V.executionLock=!1,V.cache.clear()),o}}V.executionLock=!1,V.cache=new Map;class Y{}Y.patchTheme=r.p,Y.patchThemeTag=r.a,Y.querySelector=R,Y.querySelectorAll=B,Y.scrollByHTMLElement=U,Y.scrollBySelector=Z,Y.stringifyJson=q},5928:(e,t,n)=>{n.d(t,{w:()=>a});var r=n(5149),o=n(8286);const a=(e,t,n)=>{(0,o.c)(t,"_links",(e=>"object"==typeof e&&"string"==typeof e._label),n),(0,r.u)(e,t.state._links.length)}}}]);