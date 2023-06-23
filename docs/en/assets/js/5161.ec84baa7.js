/*! For license information please see 5161.ec84baa7.js.LICENSE.txt */
"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[5161],{99072:(e,t,n)=>{n.d(t,{a:()=>i,b:()=>m,c:()=>b,d:()=>c,e:()=>s,f:()=>h,g:()=>p,h:()=>d,u:()=>g});var r=n(31391);const o=new Set,i=e=>{!1===o.has(e)&&(o.add(e),r.L.debug(e,{classifier:"\u270b a11y",overwriteStyle:"; background-color: #09f"}))},a=new Set,s=e=>{!1===a.has(e)&&(a.add(e),r.L.warn(e,{classifier:"\ud83d\udd25 deprecated",forceLog:!0,overwriteStyle:"; background-color: #f00"}))},l=new Set,c=e=>{!1===l.has(e)&&(l.add(e),r.L.debug(e,{classifier:"\ud83d\udcbb dev",overwriteStyle:"; background-color: #f09"}))},d=e=>{!1===l.has(e)&&(l.add(e),r.L.warn(e,{classifier:"\ud83d\udcbb dev",overwriteStyle:"; background-color: #f09"}))},u=new Set,h=(e,t=!1)=>{!1===u.has(e)&&(u.add(e),e+=!0===t?" \u2705":"",r.L.debug(e,{classifier:"\ud83c\udf1f feature",overwriteStyle:"; background-color: #309"}))};c("Wir freuen uns \xfcber jedes Feedback, Kommentare, Screenshots oder Demo-Links von einer auf KoliBri-basierenden Anwendung (kolibri@itzbund.de). Vielen Dank!");const f=new Set,g=e=>{!1===f.has(e)&&(f.add(e),r.L.debug(e,{classifier:"\ud83d\udcd1 ui/ux",overwriteStyle:"; background-color: #060;"}))},p=()=>{i('"Disabled" schr\xe4nkt die Zug\xe4nglichkeit und Sichtbarkeit ein. Wir empfehlen aus Sicht der Barrierefreiheit readonly- statt disabled-Attribut zu verwenden.\n- https://uxdesign.cc/is-it-ok-to-grey-out-disabled-buttons-8afa74a0fae')},m=e=>{"string"==typeof e&&""!==e||i("Manche Strukturelemente, wie bspw. der nav-Tag, k\xf6nnen mehrfach in einer Webseite verwendet werden. Damit die gleichnamigen Strukturelemente voneinander unterschieden werden k\xf6nnen, ist es erforderlich ein Aria-Label zu setzen.\n- https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/Navigation_Role#accessibility_concerns")},b=(e,t=8)=>{t>7&&g(`[${e}] Innerhalb von Navigationsstrukturen wird empfohlen nicht mehr als 7 Men\xfcpunkte zu verwenden.\n\nLinks:\n- https://de.ryte.com/wiki/Millersche_Zahl\n- https://de.wikipedia.org/wiki/Millersche_Zahl`)}},93174:(e,t,n)=>{n.d(t,{a:()=>c});var r=n(68861),o=n(99072);const i={error:"Fehler",warning:"Warnung",info:"Hinweis",success:"Erfolg",message:"Nachricht",close:"Schlie\xdfen","form-description":"Formular-Felder, die mit einem Sternchen (*) gekennzeichnet sind, sind Pflichtangaben.",of:"von",characters:"Zeichen",new:"Neu","no-entries":"Es sind keine Eintr\xe4ge vorhanden.","change-order":"Sortierung von {{colLabel}} \xe4ndern","action-running":"Aktion wird ausgef\xfchrt...","action-done":"Aktion abgeschlossen","page-first":"Direkt zur ersten Seite","page-back":"Eine Seite zur\xfcck","page-next":"Eine Seite weiter","page-last":"Direkt zur letzten Seite","entries-per-site":"Eintr\xe4ge pro Seite","page-current":"Seite {{page}}","page-selected":"Seite {{page}} ist ausgew\xe4hlt","page-per-site":"{{entries}} Eintr\xe4ge pro Seite","nav-maximize":"Navigation maximieren","nav-minimize":"Navigation minimieren","logo-description":"Logo {{orgShort}}. Bundesadler mit Flaggenstab und Schriftzug {{orgLong}}","open-link-in-tab":"Der Link wird in einem neuen Tab ge\xf6ffnet.","kolibri-logo":"Logo von KoliBri"},a={error:"Error",warning:"Warning",info:"Note",success:"Success",message:"Message",close:"Close","form-description":"Form fields marked with an asterisk (*) are mandatory.",of:"of",characters:"characters",new:"New","no-entries":"No entries available.","change-order":"Change order of {{colLabel}}","action-running":"Action is running...","action-done":"Action done","page-first":"Directly to the first page","page-back":"One page back","page-next":"One page further","page-last":"Directly to the last page","entries-per-site":"Entries per page","page-current":"Page {{page}}","page-selected":"Page {{page}} is selected","page-per-site":"{{entries}} entries per page","nav-maximize":"Maximize","nav-minimize":"Minimize","logo-description":"Logo {{orgShort}}. Federal eagle with flag staff and lettering {{orgLong}}","open-link-in-tab":"The link will open in a new tab.","kolibri-logo":"KoliBri logo"},s=e=>Object.keys(e).reduce(((t,n)=>(t[`kol-${n}`]=e[n],t)),{}),l=new Set([e=>e("en",s(a)),e=>e("de",s(i))]),c=(e,t)=>{const n=(0,r.g)();if(void 0===n)return(0,o.d)("[I18n] I18nService not available! Please call the global register function."),e;let i=n.translate(e,t);return i===e&&((0,o.d)("[I18n] Locales not initialized! Initialize default locales automatically."),l.forEach((e=>e(((e,t)=>(n.addResourceBundle(e,t),e))))),i=n.translate(e,t)),i}},35161:(e,t,n)=>{n.r(t),n.d(t,{kol_spin:()=>a});var r=n(94335),o=n(93174),i=n(47091);const a=class{constructor(e){(0,r.r)(this,e),this.showToggled=!1,this._show=!1,this._variant="dot",this.state={_variant:"dot"}}render(){return(0,r.h)(r.H,null,this.state._show?(0,r.h)("span",{"aria-busy":"true","aria-label":(0,o.a)("kol-action-running"),"aria-live":"polite",class:{spin:!0,[this.state._variant]:!0},role:"alert"},function(e){switch(e){case"cycle":return(0,r.h)("span",{class:"loader"});case"none":return(0,r.h)("slot",{name:"expert"});default:return(0,r.h)(r.F,null,(0,r.h)("span",{class:"bg-spin-1"}),(0,r.h)("span",{class:"bg-spin-2"}),(0,r.h)("span",{class:"bg-spin-3"}),(0,r.h)("span",{class:"bg-neutral"}))}}(this.state._variant)):this.showToggled&&(0,r.h)("span",{"aria-label":(0,o.a)("kol-action-done"),"aria-busy":"false","aria-live":"polite",role:"alert"}))}validateShow(e){this.showToggled=!0===this.state._show&&!1===this._show,(0,i.b)(this,"_show",e)}validateVariant(e){((e,t)=>{(0,i.a)(e,"_variant",(e=>"cycle"===e||"dot"===e||"none"===e),new Set(["cycle","dot","none"]),t)})(this,e)}componentWillLoad(){this.validateShow(this._show),this.validateVariant(this._variant)}static get watchers(){return{_show:["validateShow"],_variant:["validateVariant"]}}};a.style={default:":host{--a11y-min-size:44px;font-size:inherit}*{hyphens:auto;letter-spacing:inherit;word-break:break-word;word-spacing:inherit}[role='button'],button:not([role='link']),kol-input .input{min-height:var(--a11y-min-size);min-width:var(--a11y-min-size)}a,button,h1,h2,h3,h4,h5,h6,input,option,select,textarea{font-family:inherit;font-size:inherit}:is(a,button){background-color:transparent;border:none;margin:0;padding:0;width:100%;}:host{max-width:100%}*{box-sizing:border-box}kol-span-wc{display:grid;place-items:center}kol-span-wc>span{display:flex;place-items:center}a,button{cursor:pointer}button,input,option,select,textarea{font-family:inherit}.icon-only>kol-span-wc>span>span{display:none}.spin.cycle{width:3rem;height:3rem}.spin.cycle>.loader{display:block;width:100%;height:100%;border-radius:50%;position:relative;animation:2s linear infinite rotate}.spin.cycle>.loader::before{content:'';box-sizing:border-box;position:absolute;inset:0px;border-radius:50%;border:5px solid #333;animation:3s linear infinite prixClipFix}@keyframes rotate{100%{transform:rotate(360deg)}}@keyframes prixClipFix{0%{border-color:#fff;clip-path:polygon(50% 50%, 0 0, 0 0, 0 0, 0 0, 0 0)}25%{border-color:#666;clip-path:polygon(50% 50%, 0 0, 100% 0, 100% 0, 100% 0, 100% 0)}50%{border-color:#fc0;clip-path:polygon(50% 50%, 0 0, 100% 0, 100% 100%, 100% 100%, 100% 100%)}75%{border-color:red;clip-path:polygon(50% 50%, 0 0, 100% 0, 100% 100%, 0 100%, 0 100%)}100%{border-color:#000;clip-path:polygon(50% 50%, 0 0, 100% 0, 100% 100%, 0 100%, 0 0)}}@media (prefers-reduced-motion){.spin.cycle>.loader{animation-duration:4s}.spin.cycle>.loader::before{animation-duration:6s}}.spin.dot{height:1rem;width:3rem}.spin.dot>span{animation-timing-function:cubic-bezier(0, 1, 1, 0);border-radius:50%;border:0.1rem solid #fff;height:0.8rem;position:absolute;top:0.1rem;width:0.8rem}.spin.dot>span:first-child{background-color:#fc0;z-index:0;animation:1s infinite spin1;left:0.1rem}.spin.dot>span:nth-child(2){background-color:red;z-index:1;animation:1s infinite spin2;left:0.1rem}.spin.dot>span:nth-child(3){background-color:#000;z-index:1;animation:1s infinite spin2;left:1.1rem}.spin.dot>span:nth-child(4){background-color:#666;z-index:0;animation:1s infinite spin3;left:2.1rem}@keyframes spin1{0%{transform:scale(0)}100%{transform:scale(1)}}@keyframes spin2{0%{transform:translate(0, 0)}100%{transform:translate(1rem, 0)}}@keyframes spin3{0%{transform:scale(1)}100%{transform:scale(0)}}@media (prefers-reduced-motion){.spin.dot>span:first-child,.spin.dot>span:nth-child(2),.spin.dot>span:nth-child(3),.spin.dot>span:nth-child(4){animation-duration:2s}}.spin{display:block;padding:0.125rem;position:relative}"}},47091:(e,t,n)=>{n.d(t,{K:()=>ae,a:()=>_,b:()=>j,c:()=>E,d:()=>B,e:()=>q,f:()=>D,g:()=>T,h:()=>U,i:()=>oe,j:()=>Z,k:()=>Y,l:()=>ie,m:()=>W,n:()=>te,o:()=>H,p:()=>V,q:()=>G,r:()=>c,s:()=>C,t:()=>ne,u:()=>J,w:()=>$});var r=n(99072),o=n(31391),i=n(98901);const a=(e,t)=>{t.forEach((t=>{!1===e.has(t)&&e.add(t)}))},s=(e,t=document)=>{if(t instanceof Document||t instanceof HTMLElement||t instanceof ShadowRoot){const n=new Set;a(n,t.querySelectorAll(e));const r=t.querySelectorAll('[class*="hydrated"]');for(let t=0;t<r.length;t++){const o=r[t].shadowRoot;a(n,s(e,"object"==typeof o&&null!==o?o:r[t]))}return Array.from(n)}throw new Error("The parameter document for the method querySelectorAll is not type of Document, HTMLElement or ShadowRoot.")},l=(e,t=document)=>{if(t instanceof Document||t instanceof HTMLElement||t instanceof ShadowRoot){let n=t.querySelector(e);if(null===n){const r=t.querySelectorAll('[class*="hydrated"]');for(let t=0;t<r.length;t++){const o=r[t].shadowRoot;if(n=l(e,"object"==typeof o&&null!==o?o:r[t]),null!==n)break}}return n}throw new Error("The parameter document for the method querySelector is not type of Document, HTMLElement or ShadowRoot.")};var c=p,d=p,u=function(e){var t=m(e);return{r:t[0],g:t[1],b:t[2],a:3==t.length?255:Math.round(t[3])}},h=function(e){var t=m(e);return 3==t.length&&t.push(255),255==t[3]?"rgb("+t[0]+", "+t[1]+", "+t[2]+")":0==t[3]?"rgba("+t[0]+", "+t[1]+", "+t[2]+", 0)":"rgba("+t[0]+", "+t[1]+", "+t[2]+", "+String(t[3]/255).substr(1)+")"},f=function(e){3==(t=m(e)).length&&t.push(255);var t,n=255==t[3],r=b(t[0]),o=b(t[1]),i=b(t[2]),a=function(e,t,n,r){var o=["ff","00","11","22","33","44","55","66","77","88","99","aa","bb","cc","dd","ee"];return-1!=o.indexOf(e)&&-1!=o.indexOf(t)&&-1!=o.indexOf(n)&&-1!=o.indexOf(r)}(r,o,i,t=b(Math.round(t[3])));return n?a?"#"+r.charAt(0)+o.charAt(0)+i.charAt(0):"#"+r+o+i:a?"#"+r.charAt(0)+o.charAt(0)+i.charAt(0)+t.charAt(0):"#"+r+o+i+t},g=function(e){var t=m(e);return 3==t.length?t.push(255):t[3]=Math.round(t[3]),(t[3]<<24>>>0|t[0]<<16|t[1]<<8|t[2])>>>0};function p(e){var t=m(e);return 3==t.length?t.concat(255):(t[3]=Math.round(t[3]),t)}function m(e){return"string"==typeof e?function(e){return"red"==e?[255,0,0]:"green"==e?[0,255,0]:"blue"==e?[0,0,255]:"black"==e?[0,0,0]:"white"==e?[255,255,255]:"cyan"==e?[0,255,255]:"gray"==e||"grey"==e?[128,128,128]:"magenta"==e||"pink"==e?[255,0,255]:"yellow"==e?[255,255,0]:void 0}(e=e.toLowerCase())||function(e){var t=e.replace(/^#/,""),n=t.length;if(3==n||4==n){var r=y(t[0]),o=y(t[1]),i=y(t[2]),a=3==n?255:y(t[3]);if(isNaN(r)||isNaN(o)||isNaN(i)||isNaN(a))return;return[r,o,i,a]}}(e)||function(e){var t=e.replace(/^#/,""),n=t.length;if(6==n||8==n){var r=y(t.slice(0,2)),o=y(t.slice(2,4)),i=y(t.slice(4,6)),a=6==n?255:y(t.slice(6,8));if(isNaN(r)||isNaN(o)||isNaN(i)||isNaN(a))return;return[r,o,i,a]}}(e)||function(e){if("rgb("==e.substr(0,4)){var t=(e=e.match(/^rgb\(([^)]+)\)/)[1]).split(/ *, */).map(Number),n=w(t[0],!0),r=w(t[1],!0),o=w(t[2],!0);if(-1!=n&&-1!=r&&-1!=o)return[n,r,o,255]}}(e)||function(e){if("rgba("==e.substr(0,5)){var t=(e=e.match(/^rgba\(([^)]+)\)/)[1]).split(/ *, */).map(Number),n=w(t[0],!0),r=w(t[1],!0),o=w(t[2],!0),i=w(255*t[3]);if(-1!=n&&-1!=r&&-1!=o&&-1!=i)return[n,r,o,i]}}(e)||[0,0,0,255]:function(e){if("[object Object]"===Object.prototype.toString.call(e)&&Object.getPrototypeOf(e)===Object.getPrototypeOf({})){var t=w(null!=e.r?e.r:null!=e.red?e.red:0,!0),n=w(null!=e.g?e.g:null!=e.green?e.green:0,!0),r=w(null!=e.b?e.b:null!=e.blue?e.blue:0,!0),o=w(null!=e.a?e.a:null!=e.alpha?e.alpha:255,!0);if(-1!=t&&-1!=n&&-1!=r&&-1!=o)return[t,n,r,o]}}(e)||function(e){if(Array.isArray(e)&&(3==e.length||4==e.length)){var t=w(e[0],!0),n=w(e[1],!0),r=w(e[2],!0),o=w(null!=e[3]?e[3]:255,!0);if(-1!=t&&-1!=n&&-1!=r&&-1!=o)return[t,n,r,o]}}(e)||function(e){if("number"==typeof e&&Math.floor(e)==e&&e<=4294967295&&e>=0)return[e>>16&255,e>>8&255,255&e,e>>24&255]}(e)||[0,0,0,255]}function b(e){var t=e.toString(16);return 1==t.length?"0"+t:t}function y(e){return 1==e.length?parseInt(e+e,16):parseInt(e,16)}function w(e,t){return"number"!=typeof e||!0===t&&Math.floor(e)!==e?-1:e>=0&&e<=255?e:-1}c.arr=d,c.obj=u,c.css=h,c.hex=f,c.num=g;var v=.2126,k=.7152,S=.0722,x=1/12.92;function L(e){return Math.pow((e+.055)/1.055,2.4)}function N(e){var t=e[0]/255,n=e[1]/255,r=e[2]/255,o=t<=.03928?t*x:L(t),i=n<=.03928?n*x:L(n),a=r<=.03928?r*x:L(r);return o*v+i*k+a*S}function A(e){var t=255;8===(e=e.replace(/^#/,"")).length&&(t=parseInt(e.slice(6,8),16),e=e.substring(0,6)),4===e.length&&(t=parseInt(e.slice(3,4).repeat(2),16),e=e.substring(0,3)),3===e.length&&(e=e[0]+e[0]+e[1]+e[1]+e[2]+e[2]);var n=parseInt(e,16);return[n>>16,n>>8&255,255&n,t]}function z(e,t){return function(e,t){return(Math.max(e,t)+.05)/(Math.min(e,t)+.05)}(N(e),N(t))}function E(e,t){return z(A(e),A(t))}function M(e){return e>=7?"AAA":e>=4.5?"AA":e>=3?"AA Large":"Fail"}const O=/\[object Object\]/,H=(e,t)=>{"string"==typeof e&&O.test(e)||t()},T=(e,t)=>{"string"==typeof e&&""===e||t()},D=(e,t)=>{(0,o.b)()&&(o.L.debug([e,t]),o.L.debug("\u2191 We propagate the (submit) event to this target.")),Object.defineProperty(e,"target",{value:t,writable:!1})},C=(e,t,n,r={})=>{var o,i;void 0===e.nextHooks&&(e.nextHooks=new Map),void 0===e.nextState&&(e.nextState=new Map),e.nextState.get(t)!==n&&(e.nextHooks.get(t)instanceof Map==0&&e.nextHooks.set(t,new Map),"function"==typeof r.afterPatch&&(null===(o=e.nextHooks.get(t))||void 0===o||o.set("afterPatch",r.afterPatch)),"function"==typeof r.beforePatch&&(null===(i=e.nextHooks.get(t))||void 0===i||i.set("beforePatch",r.beforePatch)),e.nextState.set(t,n),(e=>{var t,n,r;null===(t=e.nextHooks)||void 0===t||t.forEach(((t,n)=>{var r;const o=t.get("beforePatch");"function"==typeof o&&o(null===(r=e.nextState)||void 0===r?void 0:r.get(n),e.nextState,e,n)})),(null===(n=e.nextState)||void 0===n?void 0:n.size)>0&&(e.state=Object.assign(Object.assign({},e.state),Object.fromEntries(e.nextState)),delete e.nextState,null===(r=e.nextHooks)||void 0===r||r.forEach(((t,n)=>{const r=t.get("afterPatch");"function"==typeof r&&r(e.state[n],e.state,e,n)}))),delete e.nextHooks})(e))},P=(e,t,n,o)=>{(0,r.d)(`[${e.constructor.name}] Der Property-Wert (${n}) f\xfcr '${t}' ist nicht valide. Folgende Werte sind erlaubt: ${Array.from(o).join(", ")}`)};function _(e,t,n,r,o,i={}){n(o)?C(e,t,o,i.hooks):null!=o||i.required?(i.required||r.add(null),P(e,t,o,r)):C(e,t,i.defaultValue,i.hooks)}const j=(e,t,n,r)=>{_(e,t,(e=>"boolean"==typeof e),new Set(["Boolean {true, false}"]),n,r)},$=(e,t,n,r={})=>{const o="number"==typeof r.minLength?null==r?void 0:r.minLength:0;_(e,t,(e=>"string"==typeof e&&e.length>=o&&(void 0===(null==r?void 0:r.maxLength)||e.length<=r.maxLength)),new Set(["String"]),n,r)},q=(e,t,n,r)=>{_(e,t,(e=>"number"==typeof e&&(void 0===(null==r?void 0:r.min)||"number"==typeof(null==r?void 0:r.min)&&e>=r.min)&&(void 0===(null==r?void 0:r.max)||"number"==typeof(null==r?void 0:r.max)&&e<=r.max)),new Set(["Number"]),n,r)},B=(e,t,n,r,i=(e=>e==e),a={})=>{T(r,(()=>{H(r,(()=>{void 0===r&&(r=[]);try{try{r=V(r)}catch(e){}if(Array.isArray(r)){const s=r.find((e=>!n(e)));void 0===s&&i(r)?C(e,t,r,a.hooks):H(s,(()=>{throw o.L.debug(s),new Error("\u2191 Das Schema f\xfcr das Property (_options) ist nicht valide. Der Wert wird nicht ge\xe4ndert.")}))}else H(r,(()=>{throw o.L.debug(r),new Error("\u2191 Das Schema f\xfcr das Property (_options) ist nicht valide. Der Wert wird nicht ge\xe4ndert.")}))}catch(e){o.L.debug(e)}}))}))},F=/^(true|false)$/,R=/^-?(0|[1-9]\d*)$/,I=/^-?(0.|[1-9]\d*.)\d*[1-9]$/,W=e=>{const t=typeof e,n=`${e}`;if("string"==typeof e)if(F.test(e))e="true"===e;else if(R.test(e))e=parseInt(e);else if(I.test(e))e=parseFloat(e);else if(K.test(e))try{e=V(e)}catch(e){}return t!==typeof e&&(0,r.d)(`You have used a stringified property value (${n} to ${JSON.stringify(e)}) which type switched from ${t} to ${typeof e}!`),e},J=e=>{try{return JSON.stringify(e).replace(/"/g,"'")}catch(S){throw o.L.warn(["stringifyJson",e]),o.L.error("\u2191 Das JSON konnte nicht in einen String umgewandelt werden. Es wird ein stringifizierbares JSON erwartet."),new Error}},K=/^[{[]/,V=e=>{if("string"==typeof e)try{return JSON.parse(e)}catch(S){if(K.test(e))try{return JSON.parse(e.replace(/'/g,'"'))}catch(S){o.L.warn(["parseJson",e]),o.L.error("\u2191 Der JSON-String konnte nicht geparsed werden. Achten Sie darauf, dass einfache Anf\xfchrungszeichen im Text maskiert werden (&#8216;).")}}throw new Error},U=e=>"boolean"==typeof e?!0===e?"true":"false":void 0,Z=e=>"string"==typeof e?e:U(e),Y=(e,t)=>l(e,t||(0,o.g)()),G=(e,t)=>s(e,t||(0,o.g)());let Q=null;const X=()=>(Q=Q||{backgroundColor:"#00000000",color:"#00000000",domNode:(0,o.g)().body,level:"Fail",score:1},Q),ee=/(\d+, ){3}0\)/,te=(e,t=X())=>{const n=getComputedStyle(e),r=ee.test(n.backgroundColor)?t.backgroundColor:c.hex(n.backgroundColor),i=ee.test(n.color)?t.color:c.hex(n.color),a=E(r,i),s={backgroundColor:r,color:i,domNode:e,level:M(a),score:a};return a<4.5&&o.L.error(["Color-Contrast-Error",{backgroundColor:s.backgroundColor,color:s.color,level:s.level,score:s.score},s.domNode]),s},ne=(e,t=X())=>{t.domNode instanceof HTMLElement&&(t=te(t.domNode,t));const n=t.domNode.querySelector(e);if(null===n){const n=t.domNode.querySelectorAll('[class="hydrated"]');for(let r=0;r<n.length&&(t.domNode=n[r],null===(t=ne(e,t)).domNode);r++);return t}return te(n,t)},re=(e,t=window)=>{e instanceof HTMLElement?(t.scrollTo({behavior:"smooth",top:e.getBoundingClientRect().top+(0,o.a)().pageYOffset-50}),e.focus()):(0,r.d)("Das HTMLElement ist nicht valide, zu dem gescrollt werden soll.")},oe=(e,t)=>{if((e instanceof Document||e instanceof HTMLElement||e instanceof ShadowRoot)&&"string"==typeof t){(0,r.d)("Bei der Methode querySelectorAll wurden die Parameter document, selector in selector, document getauscht, da der Parameter selector nicht, allerdings der Parameter document optional sein kann.");const n=`${t}`;t=e,e=n}if("string"==typeof e){const n=Y(e,t);n instanceof HTMLElement?re(n):(0,r.d)(`Es konnte kein HTMLElement mit dem Selector (${e}) gefunden werden, zu dem gescrollt werden soll.`)}else(0,r.d)("Der Selector ist nicht valide, zu dem gescrollt werden soll.")};class ie{static queryHtmlElementColors(e,t,n=!1,r=!0){let i=null;if(!0===n||!1===ie.executionLock)if(!1===n&&(ie.cache.clear(),ie.cache.set(t.domNode,t),ie.executionLock=!0,!0===r&&o.L.debug("[KoliBriUtils] Color contrast analysis started...")),e===t.domNode)i=t;else{const n=new Set;if(t.domNode.shadowRoot){const e=t.domNode.shadowRoot.children;for(let t=0;t<e.length;t++)n.add(e[t])}const r=t.domNode;if("function"==typeof r.assignedNodes){const e=r.assignedNodes();for(let t=0;t<e.length;t++)e[t]instanceof HTMLElement&&n.add(e[t])}const o=t.domNode.children;for(let e=0;e<o.length;e++)n.add(o[e]);const a=Array.from(n);for(let s=0;s<a.length;s++){let n=ie.cache.get(a[s]);void 0===n&&(n=te(a[s],t)),ie.cache.set(a[s],n);const r=ie.queryHtmlElementColors(e,n,!0,!1);if(null!==r){i=r;break}}}else o.L.debug("[KoliBriUtils] Call aborted because a color contrast analysis is currently being executed.");return!1===n&&(!0===r&&o.L.debug(`[KoliBriUtils] Color contrast analysis finished (${ie.cache.size} DOM elements are analysed).`),ie.executionLock=!1,ie.cache.clear()),i}}ie.executionLock=!1,ie.cache=new Map;class ae{}ae.patchTheme=i.p,ae.patchThemeTag=i.a,ae.querySelector=Y,ae.querySelectorAll=G,ae.scrollByHTMLElement=re,ae.scrollBySelector=oe,ae.stringifyJson=J}}]);