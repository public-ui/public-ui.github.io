/*! For license information please see 4032.bc42deee.js.LICENSE.txt */
"use strict";(self.webpackChunk_public_ui_website=self.webpackChunk_public_ui_website||[]).push([[4032],{4267:(e,t,r)=>{r.d(t,{a:()=>g,b:()=>a,c:()=>f,d:()=>c,e:()=>i,f:()=>u,u:()=>b});var n=r(2292);const o=new Set,i=e=>{!1===o.has(e)&&(o.add(e),n.L.info(e,{classifier:"\u270ba11y",overwriteStyle:"; background-color: #09f"}))},l=new Set,a=e=>{!1===l.has(e)&&(l.add(e),n.L.warn(e,{classifier:"\ud83d\udd25deprecated",forceLog:!0,overwriteStyle:"; background-color: #f00"}))},s=new Set,c=e=>{!1===s.has(e)&&(s.add(e),n.L.debug(e,{classifier:"\ud83d\udcbbdev",overwriteStyle:"; background-color: #f09"}))},d=new Set,u=(e,t=!1)=>{!1===d.has(e)&&(d.add(e),e+=!0===t?" \u2705":"",n.L.debug(e,{classifier:"\ud83c\udf1ffeature",overwriteStyle:"; background-color: #309"}))};c("Wir freuen uns \xfcber jedes Feedback, Kommentare, Screenshots oder Demo-Links von einer auf KoliBri-basierenden Anwendung (kolibri@itzbund.de). Vielen Dank!");const h=new Set,f=()=>{i('"Disabled" schr\xe4nkt die Zug\xe4nglichkeit und Sichtbarkeit ein. Wir empfehlen aus Sicht der Barrierefreiheit readonly- statt disabled-Attribut zu verwenden.\n- https://uxdesign.cc/is-it-ok-to-grey-out-disabled-buttons-8afa74a0fae')},g=e=>{"string"==typeof e&&""!==e||i("Manche Strukturelemente, wie bspw. der nav-Tag, k\xf6nnen mehrfach in einer Webseite verwendet werden. Damit die gleichnamigen Strukturelemente voneinander unterschieden werden k\xf6nnen, ist es erforderlich ein Aria-Label zu setzen.\n- https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/Navigation_Role#accessibility_concerns")},b=(e,t=8)=>{var r;t>7&&(r=`[${e}] Innerhalb von Navigationsstrukturen wird empfohlen nicht mehr als 7 Men\xfcpunkte zu verwenden.\n\nLinks:\n- https://de.ryte.com/wiki/Millersche_Zahl\n- https://de.wikipedia.org/wiki/Millersche_Zahl`,!1===h.has(r)&&(h.add(r),n.L.debug(r,{classifier:"\ud83d\udcd1ui/ux",overwriteStyle:"; background-color: #060;"})))}},9021:(e,t,r)=>{r.d(t,{f:()=>c,s:()=>s});var n=1/12.92;function o(e){return Math.pow((e+.055)/1.055,2.4)}function i(e){var t=e[0]/255,r=e[1]/255,i=e[2]/255;return.2126*(t<=.03928?t*n:o(t))+.7152*(r<=.03928?r*n:o(r))+.0722*(i<=.03928?i*n:o(i))}function l(e){var t=255;8===(e=e.replace(/^#/,"")).length&&(t=parseInt(e.slice(6,8),16),e=e.substring(0,6)),4===e.length&&(t=parseInt(e.slice(3,4).repeat(2),16),e=e.substring(0,3)),3===e.length&&(e=e[0]+e[0]+e[1]+e[1]+e[2]+e[2]);var r=parseInt(e,16);return[r>>16,r>>8&255,255&r,t]}function a(e,t){return function(e,t){return(Math.max(e,t)+.05)/(Math.min(e,t)+.05)}(i(e),i(t))}function s(e,t){return a(l(e),l(t))}function c(e){return e>=7?"AAA":e>=4.5?"AA":e>=3?"AA Large":"Fail"}},4032:(e,t,r)=>{r.r(t),r.d(t,{kol_heading_wc:()=>i,kol_input:()=>l});var n=r(4250),o=r(185);const i=class{constructor(e){(0,n.r)(this,e),this._level=1,this.state={}}validateLevel(e){(0,o.w)(this,e)}componentWillLoad(){this.validateLevel(this._level)}render(){switch(this.state._level){case 2:return(0,n.h)("h2",null,(0,n.h)("slot",null));case 3:return(0,n.h)("h3",null,(0,n.h)("slot",null));case 4:return(0,n.h)("h4",null,(0,n.h)("slot",null));case 5:return(0,n.h)("h5",null,(0,n.h)("slot",null));case 6:return(0,n.h)("h6",null,(0,n.h)("slot",null));default:return(0,n.h)("h1",null,(0,n.h)("slot",null))}}static get watchers(){return{_level:["validateLevel"]}}},l=class{constructor(e){(0,n.r)(this,e),this._alert=!0,this._disabled=!1,this._error="",this._hideLabel=!1,this._hint="",this._icon=void 0,this._id=void 0,this._list=void 0,this._readOnly=!1,this._renderNoLabel=!1,this._required=!1,this._smartButton=void 0,this._touched=!1}render(){var e,t,r,o;const i="string"==typeof this._error&&this._error.length>0&&!0===this._touched,l="string"==typeof this._hint&&this._hint.length>0,a=!0===this._hideLabel&&!0!==this._required;return(0,n.h)(n.H,{class:{disabled:!0===this._disabled,error:!0===i,"read-only":!0===this._readOnly,required:!0===this._required,touched:!0===this._touched}},!1===this._renderNoLabel&&(0,n.h)("label",{htmlFor:this._id,id:`${this._id}-label`,style:{height:a?"0":void 0,margin:a?"0":void 0,padding:a?"0":void 0,visibility:a?"hidden":void 0}},(0,n.h)("span",null,(0,n.h)("slot",{name:"label"}))),l&&(0,n.h)("span",{class:"hint",id:`${this._id}-hint`},this._hint),(0,n.h)("div",{class:{input:!0,"icon-left":"object"==typeof(null===(e=this._icon)||void 0===e?void 0:e.left),"icon-right":"object"==typeof(null===(t=this._icon)||void 0===t?void 0:t.right)}},(0,n.h)("div",{class:"icons"},(null===(r=this._icon)||void 0===r?void 0:r.left)?(0,n.h)("kol-icon",{_ariaLabel:"",_icon:this._icon.left.icon}):(0,n.h)("i",null),(null===(o=this._icon)||void 0===o?void 0:o.right)?(0,n.h)("kol-icon",{_ariaLabel:"",_icon:this._icon.right.icon}):(0,n.h)("i",null)),(0,n.h)("slot",{name:"input"}),"object"==typeof this._smartButton&&null!==this._smartButton&&(0,n.h)("kol-button-wc",{_ariaLabel:this._smartButton._ariaLabel,_customClass:this._smartButton._customClass,_disabled:this._smartButton._disabled,_icon:this._smartButton._icon,_iconOnly:!0,_id:this._smartButton._id,_label:this._smartButton._label,_on:this._smartButton._on,_tooltipAlign:this._smartButton._tooltipAlign,_variant:this._smartButton._variant})),i&&(0,n.h)("kol-alert",{class:"error",id:`${this._id}-error`,_alert:this._alert,_type:"error",_variant:"msg"},this._error),Array.isArray(this._list)&&this._list.length>0&&(0,n.h)("datalist",{id:`${this._id}-list`},this._list.map((e=>(0,n.h)("option",{value:e})))))}}},3837:(e,t,r)=>{r.d(t,{K:()=>Y,a:()=>A,b:()=>x,c:()=>O,d:()=>E,e:()=>L,f:()=>S,g:()=>D,h:()=>V,i:()=>P,j:()=>Z,k:()=>z,l:()=>F,m:()=>C,n:()=>R,o:()=>k,p:()=>T,q:()=>K,r:()=>d,s:()=>N,t:()=>$,w:()=>M});var n=r(2095),o=r(9021),i=r(4267),l=r(2292);const a=(e,t)=>{t.forEach((t=>{!1===e.has(t)&&e.add(t)}))},s=(e,t=document)=>{if(t instanceof Document||t instanceof HTMLElement||t instanceof ShadowRoot){const r=new Set;a(r,t.querySelectorAll(e));const n=t.querySelectorAll('[class*="hydrated"]');for(let t=0;t<n.length;t++){const o=n[t].shadowRoot;a(r,s(e,"object"==typeof o&&null!==o?o:n[t]))}return Array.from(r)}throw new Error("The parameter document for the method querySelectorAll is not type of Document, HTMLElement or ShadowRoot.")},c=(e,t=document)=>{if(t instanceof Document||t instanceof HTMLElement||t instanceof ShadowRoot){let r=t.querySelector(e);if(null===r){const n=t.querySelectorAll('[class*="hydrated"]');for(let t=0;t<n.length;t++){const o=n[t].shadowRoot;if(r=c(e,"object"==typeof o&&null!==o?o:n[t]),null!==r)break}}return r}throw new Error("The parameter document for the method querySelector is not type of Document, HTMLElement or ShadowRoot.")};var d=m,u=m,h=function(e){var t=v(e);return{r:t[0],g:t[1],b:t[2],a:3==t.length?255:Math.round(t[3])}},f=function(e){var t=v(e);return 3==t.length&&t.push(255),255==t[3]?"rgb("+t[0]+", "+t[1]+", "+t[2]+")":0==t[3]?"rgba("+t[0]+", "+t[1]+", "+t[2]+", 0)":"rgba("+t[0]+", "+t[1]+", "+t[2]+", "+String(t[3]/255).substr(1)+")"},g=function(e){3==(t=v(e)).length&&t.push(255);var t,r=255==t[3],n=p(t[0]),o=p(t[1]),i=p(t[2]),l=function(e,t,r,n){var o=["ff","00","11","22","33","44","55","66","77","88","99","aa","bb","cc","dd","ee"];return-1!=o.indexOf(e)&&-1!=o.indexOf(t)&&-1!=o.indexOf(r)&&-1!=o.indexOf(n)}(n,o,i,t=p(Math.round(t[3])));return r?l?"#"+n.charAt(0)+o.charAt(0)+i.charAt(0):"#"+n+o+i:l?"#"+n.charAt(0)+o.charAt(0)+i.charAt(0)+t.charAt(0):"#"+n+o+i+t},b=function(e){var t=v(e);return 3==t.length?t.push(255):t[3]=Math.round(t[3]),(t[3]<<24>>>0|t[0]<<16|t[1]<<8|t[2])>>>0};function m(e){var t=v(e);return 3==t.length?t.concat(255):(t[3]=Math.round(t[3]),t)}function v(e){return"string"==typeof e?function(e){return"red"==e?[255,0,0]:"green"==e?[0,255,0]:"blue"==e?[0,0,255]:"black"==e?[0,0,0]:"white"==e?[255,255,255]:"cyan"==e?[0,255,255]:"gray"==e||"grey"==e?[128,128,128]:"magenta"==e||"pink"==e?[255,0,255]:"yellow"==e?[255,255,0]:void 0}(e=e.toLowerCase())||function(e){var t=e.replace(/^#/,""),r=t.length;if(3==r||4==r){var n=y(t[0]),o=y(t[1]),i=y(t[2]),l=3==r?255:y(t[3]);if(isNaN(n)||isNaN(o)||isNaN(i)||isNaN(l))return;return[n,o,i,l]}}(e)||function(e){var t=e.replace(/^#/,""),r=t.length;if(6==r||8==r){var n=y(t.slice(0,2)),o=y(t.slice(2,4)),i=y(t.slice(4,6)),l=6==r?255:y(t.slice(6,8));if(isNaN(n)||isNaN(o)||isNaN(i)||isNaN(l))return;return[n,o,i,l]}}(e)||function(e){if("rgb("==e.substr(0,4)){var t=(e=e.match(/^rgb\(([^)]+)\)/)[1]).split(/ *, */).map(Number),r=_(t[0],!0),n=_(t[1],!0),o=_(t[2],!0);if(-1!=r&&-1!=n&&-1!=o)return[r,n,o,255]}}(e)||function(e){if("rgba("==e.substr(0,5)){var t=(e=e.match(/^rgba\(([^)]+)\)/)[1]).split(/ *, */).map(Number),r=_(t[0],!0),n=_(t[1],!0),o=_(t[2],!0),i=_(255*t[3]);if(-1!=r&&-1!=n&&-1!=o&&-1!=i)return[r,n,o,i]}}(e)||[0,0,0,255]:function(e){if("[object Object]"===Object.prototype.toString.call(e)&&Object.getPrototypeOf(e)===Object.getPrototypeOf({})){var t=_(null!=e.r?e.r:null!=e.red?e.red:0,!0),r=_(null!=e.g?e.g:null!=e.green?e.green:0,!0),n=_(null!=e.b?e.b:null!=e.blue?e.blue:0,!0),o=_(null!=e.a?e.a:null!=e.alpha?e.alpha:255,!0);if(-1!=t&&-1!=r&&-1!=n&&-1!=o)return[t,r,n,o]}}(e)||function(e){if(Array.isArray(e)&&(3==e.length||4==e.length)){var t=_(e[0],!0),r=_(e[1],!0),n=_(e[2],!0),o=_(null!=e[3]?e[3]:255,!0);if(-1!=t&&-1!=r&&-1!=n&&-1!=o)return[t,r,n,o]}}(e)||function(e){if("number"==typeof e&&Math.floor(e)==e&&e<=4294967295&&e>=0)return[e>>16&255,e>>8&255,255&e,e>>24&255]}(e)||[0,0,0,255]}function p(e){var t=e.toString(16);return 1==t.length?"0"+t:t}function y(e){return 1==e.length?parseInt(e+e,16):parseInt(e,16)}function _(e,t){return"number"!=typeof e||!0===t&&Math.floor(e)!==e?-1:e>=0&&e<=255?e:-1}d.arr=u,d.obj=h,d.css=f,d.hex=g,d.num=b;const w=/\[object Object\]/,k=(e,t)=>{"string"==typeof e&&w.test(e)||t()},S=(e,t)=>{"string"==typeof e&&""===e||t()},L=(e,t)=>{(0,l.b)()&&(l.L.debug([e,t]),l.L.debug("\u2191 We propagate the (submit) event to this target.")),Object.defineProperty(e,"target",{value:t,writable:!1})},N=(e,t,r,n={})=>{var o,i;void 0===e.nextHooks&&(e.nextHooks=new Map),void 0===e.nextState&&(e.nextState=new Map),e.nextState.get(t)!==r&&(e.nextHooks.get(t)instanceof Map==0&&e.nextHooks.set(t,new Map),"function"==typeof n.afterPatch&&(null===(o=e.nextHooks.get(t))||void 0===o||o.set("afterPatch",n.afterPatch)),"function"==typeof n.beforePatch&&(null===(i=e.nextHooks.get(t))||void 0===i||i.set("beforePatch",n.beforePatch)),e.nextState.set(t,r),(e=>{var t,r,n;null===(t=e.nextHooks)||void 0===t||t.forEach(((t,r)=>{var n;const o=t.get("beforePatch");"function"==typeof o&&o(null===(n=e.nextState)||void 0===n?void 0:n.get(r),e.nextState,e,r)})),(null===(r=e.nextState)||void 0===r?void 0:r.size)>0&&(e.state=Object.assign(Object.assign({},e.state),Object.fromEntries(e.nextState)),delete e.nextState,null===(n=e.nextHooks)||void 0===n||n.forEach(((t,r)=>{const n=t.get("afterPatch");"function"==typeof n&&n(e.state[r],e.state,e,r)}))),delete e.nextHooks})(e))},A=(e,t,r,n,o,l={})=>{r(o)?N(e,t,o,null==l?void 0:l.hooks):void 0===o||null===o&&(void 0===(null==l?void 0:l.required)||!1===(null==l?void 0:l.required))?N(e,t,null==l?void 0:l.defaultValue,null==l?void 0:l.hooks):(void 0!==(null==l?void 0:l.required)&&!1!==(null==l?void 0:l.required)||n.add(null),((e,t,r,n)=>{(0,i.d)(`[${e.constructor.name}] Der Property-Wert (${r}) f\xfcr '${t}' ist nicht valide. Folgende Werte sind erlaubt: ${Array.from(n).join(", ")}`)})(e,t,o,n))},x=(e,t,r,n)=>{A(e,t,(e=>"boolean"==typeof e),new Set(["Boolean {true, false}"]),r,n)},M=(e,t,r,n={})=>{const o="number"==typeof n.minLength?null==n?void 0:n.minLength:0;A(e,t,(e=>"string"==typeof e&&e.length>=o),new Set([`String (Mindestl\xe4nge ${o})`]),r,n)},E=(e,t,r,n)=>{A(e,t,(e=>"number"==typeof e&&(void 0===(null==n?void 0:n.min)||"number"==typeof(null==n?void 0:n.min)&&e>=n.min)&&(void 0===(null==n?void 0:n.max)||"number"==typeof(null==n?void 0:n.max)&&e<=n.max)),new Set(["Number"]),r,n)},O=(e,t,r,n,o=(e=>e==e),i={})=>{S(n,(()=>{k(n,(()=>{void 0===n&&(n=[]);try{try{n=T(n)}catch(e){}if(Array.isArray(n)){const a=n.find((e=>!r(e)));void 0===a&&o(n)?N(e,t,n,i.hooks):k(a,(()=>{throw l.L.debug(a),new Error("\u2191 Das Schema f\xfcr das Property (_options) ist nicht valide. Der Wert wird nicht ge\xe4ndert.")}))}else k(n,(()=>{throw l.L.debug(n),new Error("\u2191 Das Schema f\xfcr das Property (_options) ist nicht valide. Der Wert wird nicht ge\xe4ndert.")}))}catch(e){l.L.debug(e)}}))}))},H=/^(true|false)$/,q=/^-?(0|[1-9]\d*)$/,B=/^-?(0.|[1-9]\d*.)\d*[1-9]$/,C=e=>{const t=typeof e,r=`${e}`;if("string"==typeof e)if(H.test(e))e="true"===e;else if(q.test(e))e=parseInt(e);else if(B.test(e))e=parseFloat(e);else if(j.test(e))try{e=T(e)}catch(e){}return t!==typeof e&&(0,i.d)(`You have used a stringified property value (${r} to ${JSON.stringify(e)}) which type switched from ${t} to ${typeof e}!`),e},$=e=>{try{return JSON.stringify(e).replace(/"/g,"'")}catch(t){throw l.L.warn(["stringifyJson",e]),l.L.error("\u2191 Das JSON konnte nicht in einen String umgewandelt werden. Es wird ein stringifizierbares JSON erwartet."),new Error}},j=/^[{[]/,T=e=>{if("string"==typeof e)try{return JSON.parse(e)}catch(t){if(j.test(e))try{return JSON.parse(e.replace(/'/g,'"'))}catch(t){l.L.warn(["parseJson",e]),l.L.error("\u2191 Der JSON-String konnte nicht geparsed werden. Achten Sie darauf, dass einfache Anf\xfchrungszeichen im Text maskiert werden (&#8216;).")}}throw new Error},D=e=>"boolean"==typeof e?!0===e?"true":"false":void 0,P=e=>"string"==typeof e?e:D(e),z=(e,t)=>c(e,t||(0,l.g)()),R=(e,t)=>s(e,t||(0,l.g)());let J=null;const W=()=>(J=J||{backgroundColor:"#00000000",color:"#00000000",domNode:(0,l.g)().body,level:"Fail",score:1},J),I=/(\d+, ){3}0\)/,F=(e,t=W())=>{const r=getComputedStyle(e),n=I.test(r.backgroundColor)?t.backgroundColor:d.hex(r.backgroundColor),i=I.test(r.color)?t.color:d.hex(r.color),a=(0,o.s)(n,i),s={backgroundColor:n,color:i,domNode:e,level:(0,o.f)(a),score:a};return a<4.5&&l.L.error(["Color-Contrast-Error",{backgroundColor:s.backgroundColor,color:s.color,level:s.level,score:s.score},s.domNode]),s},K=(e,t=W())=>{t.domNode instanceof HTMLElement&&(t=F(t.domNode,t));const r=t.domNode.querySelector(e);if(null===r){const r=t.domNode.querySelectorAll('[class="hydrated"]');for(let n=0;n<r.length&&(t.domNode=r[n],null===(t=K(e,t)).domNode);n++);return t}return F(r,t)},U=(e,t=window)=>{e instanceof HTMLElement?(t.scrollTo({behavior:"smooth",top:e.getBoundingClientRect().top+(0,l.a)().pageYOffset-50}),e.focus()):(0,i.d)("Das HTMLElement ist nicht valide, zu dem gescrollt werden soll.")},V=(e,t)=>{if((e instanceof Document||e instanceof HTMLElement||e instanceof ShadowRoot)&&"string"==typeof t){(0,i.d)("Bei der Methode querySelectorAll wurden die Parameter document, selector in selector, document getauscht, da der Parameter selector nicht, allerdings der Parameter document optional sein kann.");const r=`${t}`;t=e,e=r}if("string"==typeof e){const r=z(e,t);r instanceof HTMLElement?U(r):(0,i.d)(`Es konnte kein HTMLElement mit dem Selector (${e}) gefunden werden, zu dem gescrollt werden soll.`)}else(0,i.d)("Der Selector ist nicht valide, zu dem gescrollt werden soll.")};class Z{static queryHtmlElementColors(e,t,r=!1,n=!0){let o=null;if(!0===r||!1===Z.executionLock)if(!1===r&&(Z.cache.clear(),Z.cache.set(t.domNode,t),Z.executionLock=!0,!0===n&&l.L.debug("[KoliBriUtils] Color contrast analysis started...")),e===t.domNode)o=t;else{const r=new Set;if(t.domNode.shadowRoot){const e=t.domNode.shadowRoot.children;for(let t=0;t<e.length;t++)r.add(e[t])}const n=t.domNode;if("function"==typeof n.assignedNodes){const e=n.assignedNodes();for(let t=0;t<e.length;t++)e[t]instanceof HTMLElement&&r.add(e[t])}const i=t.domNode.children;for(let e=0;e<i.length;e++)r.add(i[e]);const l=Array.from(r);for(let a=0;a<l.length;a++){let r=Z.cache.get(l[a]);void 0===r&&(r=F(l[a],t)),Z.cache.set(l[a],r);const n=Z.queryHtmlElementColors(e,r,!0,!1);if(null!==n){o=n;break}}}else l.L.debug("[KoliBriUtils] Call aborted because a color contrast analysis is currently being executed.");return!1===r&&(!0===n&&l.L.debug(`[KoliBriUtils] Color contrast analysis finished (${Z.cache.size} DOM elements are analysed).`),Z.executionLock=!1,Z.cache.clear()),o}}Z.executionLock=!1,Z.cache=new Map;class Y{}Y.patchTheme=n.p,Y.patchThemeTag=n.a,Y.querySelector=z,Y.querySelectorAll=R,Y.scrollByHTMLElement=U,Y.scrollBySelector=V,Y.stringifyJson=$},185:(e,t,r)=>{r.d(t,{w:()=>o});var n=r(3837);const o=(e,t)=>{(0,n.a)(e,"_level",(e=>"number"==typeof e&&1<=e&&e<=6),new Set(["Number {1, 2, 3, 4, 5, 6}"]),t,{defaultValue:1,required:!0})}}}]);