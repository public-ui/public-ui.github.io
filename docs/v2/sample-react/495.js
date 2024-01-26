/*! For license information please see 495.js.LICENSE.txt */
"use strict";(self.webpackChunk_public_ui_sample_react=self.webpackChunk_public_ui_sample_react||[]).push([[495],{3912:(e,t,r)=>{r.d(t,{a:()=>a,b:()=>g,c:()=>b,d:()=>l,e:()=>h,f:()=>u,g:()=>c,u:()=>f});var n=r(8164);const o=new Set,a=(e,t)=>{(!1===o.has(e)||(null==t?void 0:t.force))&&(o.add(e),n.L.debug([e].concat((null==t?void 0:t.details)||[]),{classifier:"✋ a11y",overwriteStyle:"; background-color: #09f"}))},i=new Set,l=(e,t)=>{(!1===i.has(e)||(null==t?void 0:t.force))&&(i.add(e),n.L.debug([e].concat((null==t?void 0:t.details)||[]),{classifier:"💻 dev",overwriteStyle:"; background-color: #f09"}))},c=(e,t)=>{(!1===i.has(e)||(null==t?void 0:t.force))&&(i.add(e),n.L.warn([e].concat((null==t?void 0:t.details)||[]),{classifier:"💻 dev",overwriteStyle:"; background-color: #f09"}))},s=new Set,u=(e,t=!1,r)=>{(!1===s.has(e)||(null==r?void 0:r.force))&&(s.add(e),e+=!0===t?" ✅":"",n.L.debug([e].concat((null==r?void 0:r.details)||[]),{classifier:"🌟 feature",overwriteStyle:"; background-color: #309"}))};l("Wir freuen uns über jedes Feedback, Kommentare, Screenshots oder Demo-Links von einer auf KoliBri-basierenden Anwendung (kolibri@itzbund.de). Vielen Dank!");const d=new Set,f=(e,t)=>{(!1===d.has(e)||(null==t?void 0:t.force))&&(d.add(e),n.L.debug([e].concat((null==t?void 0:t.details)||[]),{classifier:"📑 ui/ux",overwriteStyle:"; background-color: #060;"}))},h=()=>{a('"Disabled" schränkt die Zugänglichkeit und Sichtbarkeit ein. Wir empfehlen aus Sicht der Barrierefreiheit readonly- statt disabled-Attribut zu verwenden.\n- https://uxdesign.cc/is-it-ok-to-grey-out-disabled-buttons-8afa74a0fae')},g=e=>{"string"==typeof e&&""!==e||a("Manche Strukturelemente, wie bspw. der nav-Tag, können mehrfach in einer Webseite verwendet werden. Damit die gleichnamigen Strukturelemente voneinander unterschieden werden können, ist es erforderlich ein Aria-Label zu setzen.\n- https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/Navigation_Role#accessibility_concerns")},b=(e,t=8)=>{t>7&&f(`[${e}] Innerhalb von Navigationsstrukturen wird empfohlen nicht mehr als 7 Menüpunkte zu verwenden.\n\nLinks:\n- https://de.ryte.com/wiki/Millersche_Zahl\n- https://de.wikipedia.org/wiki/Millersche_Zahl`)}},495:(e,t,r)=>{r.d(t,{K:()=>Q,a:()=>j,b:()=>k,c:()=>q,d:()=>H,e:()=>D,f:()=>M,g:()=>A,h:()=>W,i:()=>I,j:()=>G,k:()=>B,l:()=>V,m:()=>T,n:()=>K,o:()=>L,p:()=>J,q:()=>Y,r:()=>c,s:()=>O,t:()=>R,w:()=>C});var n=r(8164),o=r(3912);const a=(e,t)=>{t.forEach((t=>{!1===e.has(t)&&e.add(t)}))},i=(e,t=document)=>{if(t instanceof Document||t instanceof HTMLElement||t instanceof ShadowRoot){const r=new Set;a(r,t.querySelectorAll(e));const n=t.querySelectorAll('[class*="hydrated"]');for(let t=0;t<n.length;t++){const o=n[t].shadowRoot;a(r,i(e,"object"==typeof o&&null!==o?o:n[t]))}return Array.from(r)}throw new Error("The parameter document for the method querySelectorAll is not type of Document, HTMLElement or ShadowRoot.")},l=(e,t=document)=>{if(t instanceof Document||t instanceof HTMLElement||t instanceof ShadowRoot){let r=t.querySelector(e);if(null===r){const n=t.querySelectorAll('[class*="hydrated"]');for(let t=0;t<n.length;t++){const o=n[t].shadowRoot;if(r=l(e,"object"==typeof o&&null!==o?o:n[t]),null!==r)break}}return r}throw new Error("The parameter document for the method querySelector is not type of Document, HTMLElement or ShadowRoot.")};var c=u,s=u;function u(e){var t=d(e);return 3==t.length?t.concat(255):(t[3]=Math.round(t[3]),t)}function d(e){return"string"==typeof e?function(e){return"red"==e?[255,0,0]:"green"==e?[0,255,0]:"blue"==e?[0,0,255]:"black"==e?[0,0,0]:"white"==e?[255,255,255]:"cyan"==e?[0,255,255]:"gray"==e||"grey"==e?[128,128,128]:"magenta"==e||"pink"==e?[255,0,255]:"yellow"==e?[255,255,0]:void 0}(e=e.toLowerCase())||function(e){var t=e.replace(/^#/,""),r=t.length;if(3==r||4==r){var n=h(t[0]),o=h(t[1]),a=h(t[2]),i=3==r?255:h(t[3]);if(isNaN(n)||isNaN(o)||isNaN(a)||isNaN(i))return;return[n,o,a,i]}}(e)||function(e){var t=e.replace(/^#/,""),r=t.length;if(6==r||8==r){var n=h(t.slice(0,2)),o=h(t.slice(2,4)),a=h(t.slice(4,6)),i=6==r?255:h(t.slice(6,8));if(isNaN(n)||isNaN(o)||isNaN(a)||isNaN(i))return;return[n,o,a,i]}}(e)||function(e){if("rgb("==e.substr(0,4)){var t=(e=e.match(/^rgb\(([^)]+)\)/)[1]).split(/ *, */).map(Number),r=g(t[0],!0),n=g(t[1],!0),o=g(t[2],!0);if(-1!=r&&-1!=n&&-1!=o)return[r,n,o,255]}}(e)||function(e){if("rgba("==e.substr(0,5)){var t=(e=e.match(/^rgba\(([^)]+)\)/)[1]).split(/ *, */).map(Number),r=g(t[0],!0),n=g(t[1],!0),o=g(t[2],!0),a=g(255*t[3]);if(-1!=r&&-1!=n&&-1!=o&&-1!=a)return[r,n,o,a]}}(e)||[0,0,0,255]:function(e){if("[object Object]"===Object.prototype.toString.call(e)&&Object.getPrototypeOf(e)===Object.getPrototypeOf({})){var t=g(null!=e.r?e.r:null!=e.red?e.red:0,!0),r=g(null!=e.g?e.g:null!=e.green?e.green:0,!0),n=g(null!=e.b?e.b:null!=e.blue?e.blue:0,!0),o=g(null!=e.a?e.a:null!=e.alpha?e.alpha:255,!0);if(-1!=t&&-1!=r&&-1!=n&&-1!=o)return[t,r,n,o]}}(e)||function(e){if(Array.isArray(e)&&(3==e.length||4==e.length)){var t=g(e[0],!0),r=g(e[1],!0),n=g(e[2],!0),o=g(null!=e[3]?e[3]:255,!0);if(-1!=t&&-1!=r&&-1!=n&&-1!=o)return[t,r,n,o]}}(e)||function(e){if("number"==typeof e&&Math.floor(e)==e&&e<=4294967295&&e>=0)return[e>>16&255,e>>8&255,255&e,e>>24&255]}(e)||[0,0,0,255]}function f(e){var t=e.toString(16);return 1==t.length?"0"+t:t}function h(e){return 1==e.length?parseInt(e+e,16):parseInt(e,16)}function g(e,t){return"number"!=typeof e||!0===t&&Math.floor(e)!==e?-1:e>=0&&e<=255?e:-1}c.arr=s,c.obj=function(e){var t=d(e);return{r:t[0],g:t[1],b:t[2],a:3==t.length?255:Math.round(t[3])}},c.css=function(e){var t=d(e);return 3==t.length&&t.push(255),255==t[3]?"rgb("+t[0]+", "+t[1]+", "+t[2]+")":0==t[3]?"rgba("+t[0]+", "+t[1]+", "+t[2]+", 0)":"rgba("+t[0]+", "+t[1]+", "+t[2]+", "+String(t[3]/255).substr(1)+")"},c.hex=function(e){3==(t=d(e)).length&&t.push(255);var t,r=255==t[3],n=f(t[0]),o=f(t[1]),a=f(t[2]),i=function(e,t,r,n){var o=["ff","00","11","22","33","44","55","66","77","88","99","aa","bb","cc","dd","ee"];return-1!=o.indexOf(e)&&-1!=o.indexOf(t)&&-1!=o.indexOf(r)&&-1!=o.indexOf(n)}(n,o,a,t=f(Math.round(t[3])));return r?i?"#"+n.charAt(0)+o.charAt(0)+a.charAt(0):"#"+n+o+a:i?"#"+n.charAt(0)+o.charAt(0)+a.charAt(0)+t.charAt(0):"#"+n+o+a+t},c.num=function(e){var t=d(e);return 3==t.length?t.push(255):t[3]=Math.round(t[3]),(t[3]<<24>>>0|t[0]<<16|t[1]<<8|t[2])>>>0};var b=.2126,p=.7152,m=.0722,y=1/12.92;function v(e){return Math.pow((e+.055)/1.055,2.4)}function w(e){var t=e[0]/255,r=e[1]/255,n=e[2]/255,o=t<=.03928?t*y:v(t),a=r<=.03928?r*y:v(r),i=n<=.03928?n*y:v(n);return o*b+a*p+i*m}function S(e){var t=255;8===(e=e.replace(/^#/,"")).length&&(t=parseInt(e.slice(6,8),16),e=e.substring(0,6)),4===e.length&&(t=parseInt(e.slice(3,4).repeat(2),16),e=e.substring(0,3)),3===e.length&&(e=e[0]+e[0]+e[1]+e[1]+e[2]+e[2]);var r=parseInt(e,16);return[r>>16,r>>8&255,255&r,t]}function k(e,t){return function(e,t){return function(e,t){return(Math.max(e,t)+.05)/(Math.min(e,t)+.05)}(w(e),w(t))}(S(e),S(t))}function N(e){return e>=7?"AAA":e>=4.5?"AA":e>=3?"AA Large":"Fail"}const x=/\[object Object\]/,L=(e,t)=>{"string"==typeof e&&x.test(e)||t()},A=(e,t)=>{"string"==typeof e&&""===e||t()},M=(e,t)=>{(0,n.d)()&&(n.L.debug([e,t]),n.L.debug("↑ We propagate the (submit) event to this target.")),Object.defineProperty(e,"target",{value:t,writable:!1})},O=(e,t,r,n={})=>{var o,a;void 0===e.nextHooks&&(e.nextHooks=new Map),void 0===e.nextState&&(e.nextState=new Map),e.nextState.get(t)!==r&&(e.nextHooks.get(t)instanceof Map==0&&e.nextHooks.set(t,new Map),"function"==typeof n.afterPatch&&(null===(o=e.nextHooks.get(t))||void 0===o||o.set("afterPatch",n.afterPatch)),"function"==typeof n.beforePatch&&(null===(a=e.nextHooks.get(t))||void 0===a||a.set("beforePatch",n.beforePatch)),e.nextState.set(t,r),(e=>{var t,r,n;null===(t=e.nextHooks)||void 0===t||t.forEach(((t,r)=>{var n;const o=t.get("beforePatch");"function"==typeof o&&o(null===(n=e.nextState)||void 0===n?void 0:n.get(r),e.nextState,e,r)})),(null===(r=e.nextState)||void 0===r?void 0:r.size)>0&&(e.state=Object.assign(Object.assign({},e.state),Object.fromEntries(e.nextState)),delete e.nextState,null===(n=e.nextHooks)||void 0===n||n.forEach(((t,r)=>{const n=t.get("afterPatch");"function"==typeof n&&n(e.state[r],e.state,e,r)}))),delete e.nextHooks})(e))},E=(e,t,r,n)=>{(0,o.d)(`[${e.constructor.name}] Der Property-Wert (${r}) für '${t}' ist nicht valide. Folgende Werte sind erlaubt: ${Array.from(n).join(", ")}`)};function C(e,t,r,n,o,a={}){r(o)?O(e,t,o,a.hooks):null!=o||a.required?(a.required||n.add(null),E(e,t,o,n)):O(e,t,a.defaultValue,a.hooks)}const j=(e,t,r,n)=>{C(e,t,(e=>"boolean"==typeof e),new Set(["Boolean {true, false}"]),r,n)},H=(e,t,r,n={})=>{const o="number"==typeof n.minLength?null==n?void 0:n.minLength:0;C(e,t,(e=>"string"==typeof e&&e.length>=o&&(void 0===(null==n?void 0:n.maxLength)||e.length<=n.maxLength)),new Set(["String"]),r,n)},D=(e,t,r,n)=>{C(e,t,(e=>"number"==typeof e&&(void 0===(null==n?void 0:n.min)||"number"==typeof(null==n?void 0:n.min)&&e>=n.min)&&(void 0===(null==n?void 0:n.max)||"number"==typeof(null==n?void 0:n.max)&&e<=n.max)),new Set(["Number"]),r,n)},q=(e,t,r,o,a=(e=>e==e),i={})=>{A(o,(()=>{L(o,(()=>{void 0===o&&(o=[]);try{try{o=J(o)}catch(e){}if(Array.isArray(o)){const l=o.find((e=>!r(e)));void 0===l&&a(o)?O(e,t,o,i.hooks):L(l,(()=>{throw n.L.debug(l),new Error("↑ Das Schema für das Property (_options) ist nicht valide. Der Wert wird nicht geändert.")}))}else L(o,(()=>{throw n.L.debug(o),new Error("↑ Das Schema für das Property (_options) ist nicht valide. Der Wert wird nicht geändert.")}))}catch(e){n.L.debug(e)}}))}))},P=/^(true|false)$/,$=/^-?(0|[1-9]\d*)$/,_=/^-?(0.|[1-9]\d*.)\d*[1-9]$/,T=e=>{const t=typeof e,r=`${e}`;if("string"==typeof e)if(P.test(e))e="true"===e;else if($.test(e))e=parseInt(e);else if(_.test(e))e=parseFloat(e);else if(z.test(e))try{e=J(e)}catch(e){}return t!==typeof e&&(0,o.d)(`You have used a stringified property value (${r} to ${JSON.stringify(e)}) which type switched from ${t} to ${typeof e}!`),e},R=e=>{try{return JSON.stringify(e).replace(/"/g,"'")}catch(t){throw n.L.warn(["stringifyJson",e]),n.L.error("↑ Das JSON konnte nicht in einen String umgewandelt werden. Es wird ein stringifizierbares JSON erwartet."),new Error}},z=/^[{[]/,J=e=>{if("string"==typeof e)try{return JSON.parse(e)}catch(t){if(z.test(e))try{return JSON.parse(e.replace(/'/g,'"'))}catch(t){n.L.warn(["parseJson",e]),n.L.error("↑ Der JSON-String konnte nicht geparsed werden. Achten Sie darauf, dass einfache Anführungszeichen im Text maskiert werden (&#8216;).")}}throw new Error},W=e=>"boolean"==typeof e?!0===e?"true":"false":void 0,I=e=>"string"==typeof e?e:W(e),B=(e,t)=>l(e,t||(0,n.a)()),K=(e,t)=>i(e,t||(0,n.a)());let F=null;const U=()=>(F=F||{backgroundColor:"#00000000",color:"#00000000",domNode:(0,n.a)().body,level:"Fail",score:1},F),Z=/(\d+, ){3}0\)/,V=(e,t=U())=>{const r=getComputedStyle(e),o=Z.test(r.backgroundColor)?t.backgroundColor:c.hex(r.backgroundColor),a=Z.test(r.color)?t.color:c.hex(r.color),i=k(o,a),l={backgroundColor:o,color:a,domNode:e,level:N(i),score:i};return i<4.5&&n.L.error(["Color-Contrast-Error",{backgroundColor:l.backgroundColor,color:l.color,level:l.level,score:l.score},l.domNode]),l},Y=(e,t=U())=>{t.domNode instanceof HTMLElement&&(t=V(t.domNode,t));const r=t.domNode.querySelector(e);if(null===r){const r=t.domNode.querySelectorAll('[class="hydrated"]');for(let n=0;n<r.length&&(t.domNode=r[n],null===(t=Y(e,t)).domNode);n++);return t}return V(r,t)};class G{static queryHtmlElementColors(e,t,r=!1,o=!0){let a=null;if(!0===r||!1===G.executionLock)if(!1===r&&(G.cache.clear(),G.cache.set(t.domNode,t),G.executionLock=!0,!0===o&&n.L.debug("[KoliBriUtils] Color contrast analysis started...")),e===t.domNode)a=t;else{const r=new Set;if(t.domNode.shadowRoot){const e=t.domNode.shadowRoot.children;for(let t=0;t<e.length;t++)r.add(e[t])}const n=t.domNode;if("function"==typeof n.assignedNodes){const e=n.assignedNodes();for(let t=0;t<e.length;t++)e[t]instanceof HTMLElement&&r.add(e[t])}const o=t.domNode.children;for(let e=0;e<o.length;e++)r.add(o[e]);const i=Array.from(r);for(let r=0;r<i.length;r++){let n=G.cache.get(i[r]);void 0===n&&(n=V(i[r],t)),G.cache.set(i[r],n);const o=G.queryHtmlElementColors(e,n,!0,!1);if(null!==o){a=o;break}}}else n.L.debug("[KoliBriUtils] Call aborted because a color contrast analysis is currently being executed.");return!1===r&&(!0===o&&n.L.debug(`[KoliBriUtils] Color contrast analysis finished (${G.cache.size} DOM elements are analysed).`),G.executionLock=!1,G.cache.clear()),a}}G.executionLock=!1,G.cache=new Map;class Q{}Q.patchTheme=n.b,Q.patchThemeTag=n.A,Q.querySelector=B,Q.querySelectorAll=K,Q.stringifyJson=R}}]);