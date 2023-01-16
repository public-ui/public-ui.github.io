/*! For license information please see 3444.029350b1.js.LICENSE.txt */
"use strict";(self.webpackChunk_public_ui_website=self.webpackChunk_public_ui_website||[]).push([[3444],{5149:(e,t,o)=>{o.d(t,{a:()=>p,b:()=>a,c:()=>f,d:()=>c,e:()=>i,f:()=>h,u:()=>g});var n=o(7738);const r=new Set,i=e=>{!1===r.has(e)&&(r.add(e),n.L.info(e,{classifier:"\u270ba11y",overwriteStyle:"; background-color: #09f"}))},l=new Set,a=e=>{!1===l.has(e)&&(l.add(e),n.L.warn(e,{classifier:"\ud83d\udd25deprecated",forceLog:!0,overwriteStyle:"; background-color: #f00"}))},s=new Set,c=e=>{!1===s.has(e)&&(s.add(e),n.L.debug(e,{classifier:"\ud83d\udcbbdev",overwriteStyle:"; background-color: #f09"}))},d=new Set,h=(e,t=!1)=>{!1===d.has(e)&&(d.add(e),e+=!0===t?" \u2705":"",n.L.debug(e,{classifier:"\ud83c\udf1ffeature",overwriteStyle:"; background-color: #309"}))};c("Wir freuen uns \xfcber jedes Feedback, Kommentare, Screenshots oder Demo-Links von einer auf KoliBri-basierenden Anwendung (kolibri@itzbund.de). Vielen Dank!");const u=new Set,f=()=>{i('"Disabled" schr\xe4nkt die Zug\xe4nglichkeit und Sichtbarkeit ein. Wir empfehlen aus Sicht der Barrierefreiheit readonly- statt disabled-Attribut zu verwenden.\n- https://uxdesign.cc/is-it-ok-to-grey-out-disabled-buttons-8afa74a0fae')},p=e=>{"string"==typeof e&&""!==e||i("Manche Strukturelemente, wie bspw. der nav-Tag, k\xf6nnen mehrfach in einer Webseite verwendet werden. Damit die gleichnamigen Strukturelemente voneinander unterschieden werden k\xf6nnen, ist es erforderlich ein Aria-Label zu setzen.\n- https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/Navigation_Role#accessibility_concerns")},g=(e,t=8)=>{var o;t>7&&(o=`[${e}] Innerhalb von Navigationsstrukturen wird empfohlen nicht mehr als 7 Men\xfcpunkte zu verwenden.\n\nLinks:\n- https://de.ryte.com/wiki/Millersche_Zahl\n- https://de.wikipedia.org/wiki/Millersche_Zahl`,!1===u.has(o)&&(u.add(o),n.L.debug(o,{classifier:"\ud83d\udcd1ui/ux",overwriteStyle:"; background-color: #060;"})))}},9297:(e,t,o)=>{o.d(t,{w:()=>r});var n=o(6645);const r=(e,t,o)=>{(0,n.a)(e,t,(e=>"top"===e||"right"===e||"bottom"===e||"left"===e),new Set(["TooltipAlignment {top, right, buttom, left}"]),o,{defaultValue:"top"})}},4340:(e,t,o)=>{o.d(t,{f:()=>c,s:()=>s});var n=1/12.92;function r(e){return Math.pow((e+.055)/1.055,2.4)}function i(e){var t=e[0]/255,o=e[1]/255,i=e[2]/255;return.2126*(t<=.03928?t*n:r(t))+.7152*(o<=.03928?o*n:r(o))+.0722*(i<=.03928?i*n:r(i))}function l(e){var t=255;8===(e=e.replace(/^#/,"")).length&&(t=parseInt(e.slice(6,8),16),e=e.substring(0,6)),4===e.length&&(t=parseInt(e.slice(3,4).repeat(2),16),e=e.substring(0,3)),3===e.length&&(e=e[0]+e[0]+e[1]+e[1]+e[2]+e[2]);var o=parseInt(e,16);return[o>>16,o>>8&255,255&o,t]}function a(e,t){return function(e,t){return(Math.max(e,t)+.05)/(Math.min(e,t)+.05)}(i(e),i(t))}function s(e,t){return a(l(e),l(t))}function c(e){return e>=7?"AAA":e>=4.5?"AA":e>=3?"AA Large":"Fail"}},3444:(e,t,o)=>{o.r(t),o.d(t,{kol_tooltip:()=>a});var n=o(6325),r=o(9297),i=o(7738),l=o(6645);const a=class{constructor(e){(0,n.r)(this,e),this.hydrated=!1,this.hostElement=null,this.childElements=[],this.alignTooltip=()=>{const e=this.childElements[0];{const t=e.getBoundingClientRect();if(this.tooltipElement){switch(this.state._align){case"top":case"bottom":this.tooltipElement.style.left=t.left+e.offsetWidth/2-this.tooltipElement.offsetWidth/2+"px";break;default:this.tooltipElement.style.top=t.top+t.height/2-this.tooltipElement.offsetHeight/2+"px"}switch(this.state._align){case"left":this.tooltipElement.style.left=`calc(${t.left-this.tooltipElement.offsetWidth}px - 0.5em)`;break;case"right":this.tooltipElement.style.left=`calc(${t.right}px + 0.5em)`;break;case"bottom":this.tooltipElement.style.top=`calc(${t.bottom}px + 0.5em)`;break;default:this.tooltipElement.style.top=`calc(${t.top-this.tooltipElement.offsetHeight}px - 0.5em)`}}}},this.showTooltip=()=>{this.tooltipElement&&(this.tooltipElement.style.setProperty("display","block"),(0,i.g)().body.addEventListener("keyup",this.hideTooltipByEscape),this.alignTooltip(),this.tooltipElement.style.setProperty("visibility","visible"),document.addEventListener("scroll",this.alignTooltip))},this.hideTooltip=()=>{this.tooltipElement&&(this.tooltipElement.style.setProperty("display","none"),this.tooltipElement.style.setProperty("visibility","hidden"),document.removeEventListener("scroll",this.alignTooltip))},this.hideTooltipByEscape=e=>{"Escape"===e.key&&((0,i.g)().body.removeEventListener("keyup",this.hideTooltipByEscape),this.hideTooltip())},this.catchHostElement=e=>{if(this.hostElement=e,this.hostElement){const e=this.hostElement.previousElementSibling;e&&(e.removeEventListener("mouseover",this.showTooltip),e.addEventListener("mouseover",this.showTooltip),e.removeEventListener("focus",this.showTooltip),e.addEventListener("focus",this.showTooltip),e.removeEventListener("mouseout",this.hideTooltip),e.addEventListener("mouseout",this.hideTooltip),e.removeEventListener("blur",this.hideTooltip),e.addEventListener("blur",this.hideTooltip),this.childElements.push(e))}},this.catchTooltipElement=e=>{this.tooltipElement=e},this._align="top",this._id=void 0,this._label=void 0,this.state={_align:"top",_id:(0,i.n)(),_label:""}}render(){const e=setTimeout((()=>{clearTimeout(e),this.alignTooltip()}),250);return(0,n.h)(n.H,{ref:this.catchHostElement,style:{maxWidth:"300px"}},""!==this.state._label&&(0,n.h)("kol-badge",{class:{"arrow-bottom":"top"===this.state._align,"arrow-left":"right"===this.state._align,"arrow-top":"bottom"===this.state._align,"arrow-right":"left"===this.state._align},id:this.state._id,ref:this.catchTooltipElement,_color:{backgroundColor:"#333",color:"#ddd"},_label:this.state._label}))}validateAlign(e){(0,r.w)(this,"_align",e)}validateId(e){(0,l.w)(this,"_id",e)}validateLabel(e){(0,l.w)(this,"_label",e)}componentWillLoad(){this.validateAlign(this._align),this.validateId(this._id),this.validateLabel(this._label),this.hydrated=!0}static get watchers(){return{_align:["validateAlign"],_id:["validateId"],_label:["validateLabel"]}}};a.style={default:'kol-badge,.tooltip{font-size:1rem;position:fixed;animation-name:fadeInOpacity;animation-iteration-count:1;animation-timing-function:ease-in;animation-duration:0.5s;display:none;z-index:1000;max-width:300px;box-shadow:0 0 0.15rem rgba(255, 255, 255, 0.8)}kol-badge::after,.tooltip::after{content:" ";position:absolute;border-style:solid;border-width:5px}kol-badge.arrow-left::after,.tooltip.arrow-left::after{margin-top:-5px;top:50%;right:100%;border-color:transparent black transparent transparent}kol-badge.arrow-right::after,.tooltip.arrow-right::after{margin-top:-5px;top:50%;left:100%;border-color:transparent transparent transparent black}kol-badge.arrow-top::after,.tooltip.arrow-top::after{margin-left:-5px;left:50%;bottom:100%;border-color:transparent transparent black transparent}kol-badge.arrow-bottom::after,.tooltip.arrow-bottom::after{margin-left:-5px;left:50%;top:100%;border-color:black transparent transparent transparent}@keyframes fadeInOpacity{0%{opacity:0}100%{opacity:1}}'}},6645:(e,t,o)=>{o.d(t,{K:()=>Y,a:()=>N,b:()=>T,c:()=>M,d:()=>_,e:()=>x,f:()=>S,g:()=>j,h:()=>Z,i:()=>z,j:()=>V,k:()=>B,l:()=>K,m:()=>P,n:()=>R,o:()=>E,p:()=>q,q:()=>F,r:()=>d,s:()=>L,t:()=>$,w:()=>A});var n=o(4340),r=o(5149),i=o(7738),l=o(4776);const a=(e,t)=>{t.forEach((t=>{!1===e.has(t)&&e.add(t)}))},s=(e,t=document)=>{if(t instanceof Document||t instanceof HTMLElement||t instanceof ShadowRoot){const o=new Set;a(o,t.querySelectorAll(e));const n=t.querySelectorAll('[class*="hydrated"]');for(let t=0;t<n.length;t++){const r=n[t].shadowRoot;a(o,s(e,"object"==typeof r&&null!==r?r:n[t]))}return Array.from(o)}throw new Error("The parameter document for the method querySelectorAll is not type of Document, HTMLElement or ShadowRoot.")},c=(e,t=document)=>{if(t instanceof Document||t instanceof HTMLElement||t instanceof ShadowRoot){let o=t.querySelector(e);if(null===o){const n=t.querySelectorAll('[class*="hydrated"]');for(let t=0;t<n.length;t++){const r=n[t].shadowRoot;if(o=c(e,"object"==typeof r&&null!==r?r:n[t]),null!==o)break}}return o}throw new Error("The parameter document for the method querySelector is not type of Document, HTMLElement or ShadowRoot.")};var d=m,h=m,u=function(e){var t=b(e);return{r:t[0],g:t[1],b:t[2],a:3==t.length?255:Math.round(t[3])}},f=function(e){var t=b(e);return 3==t.length&&t.push(255),255==t[3]?"rgb("+t[0]+", "+t[1]+", "+t[2]+")":0==t[3]?"rgba("+t[0]+", "+t[1]+", "+t[2]+", 0)":"rgba("+t[0]+", "+t[1]+", "+t[2]+", "+String(t[3]/255).substr(1)+")"},p=function(e){3==(t=b(e)).length&&t.push(255);var t,o=255==t[3],n=y(t[0]),r=y(t[1]),i=y(t[2]),l=function(e,t,o,n){var r=["ff","00","11","22","33","44","55","66","77","88","99","aa","bb","cc","dd","ee"];return-1!=r.indexOf(e)&&-1!=r.indexOf(t)&&-1!=r.indexOf(o)&&-1!=r.indexOf(n)}(n,r,i,t=y(Math.round(t[3])));return o?l?"#"+n.charAt(0)+r.charAt(0)+i.charAt(0):"#"+n+r+i:l?"#"+n.charAt(0)+r.charAt(0)+i.charAt(0)+t.charAt(0):"#"+n+r+i+t},g=function(e){var t=b(e);return 3==t.length?t.push(255):t[3]=Math.round(t[3]),(t[3]<<24>>>0|t[0]<<16|t[1]<<8|t[2])>>>0};function m(e){var t=b(e);return 3==t.length?t.concat(255):(t[3]=Math.round(t[3]),t)}function b(e){return"string"==typeof e?function(e){return"red"==e?[255,0,0]:"green"==e?[0,255,0]:"blue"==e?[0,0,255]:"black"==e?[0,0,0]:"white"==e?[255,255,255]:"cyan"==e?[0,255,255]:"gray"==e||"grey"==e?[128,128,128]:"magenta"==e||"pink"==e?[255,0,255]:"yellow"==e?[255,255,0]:void 0}(e=e.toLowerCase())||function(e){var t=e.replace(/^#/,""),o=t.length;if(3==o||4==o){var n=v(t[0]),r=v(t[1]),i=v(t[2]),l=3==o?255:v(t[3]);if(isNaN(n)||isNaN(r)||isNaN(i)||isNaN(l))return;return[n,r,i,l]}}(e)||function(e){var t=e.replace(/^#/,""),o=t.length;if(6==o||8==o){var n=v(t.slice(0,2)),r=v(t.slice(2,4)),i=v(t.slice(4,6)),l=6==o?255:v(t.slice(6,8));if(isNaN(n)||isNaN(r)||isNaN(i)||isNaN(l))return;return[n,r,i,l]}}(e)||function(e){if("rgb("==e.substr(0,4)){var t=(e=e.match(/^rgb\(([^)]+)\)/)[1]).split(/ *, */).map(Number),o=w(t[0],!0),n=w(t[1],!0),r=w(t[2],!0);if(-1!=o&&-1!=n&&-1!=r)return[o,n,r,255]}}(e)||function(e){if("rgba("==e.substr(0,5)){var t=(e=e.match(/^rgba\(([^)]+)\)/)[1]).split(/ *, */).map(Number),o=w(t[0],!0),n=w(t[1],!0),r=w(t[2],!0),i=w(255*t[3]);if(-1!=o&&-1!=n&&-1!=r&&-1!=i)return[o,n,r,i]}}(e)||[0,0,0,255]:function(e){if("[object Object]"===Object.prototype.toString.call(e)&&Object.getPrototypeOf(e)===Object.getPrototypeOf({})){var t=w(null!=e.r?e.r:null!=e.red?e.red:0,!0),o=w(null!=e.g?e.g:null!=e.green?e.green:0,!0),n=w(null!=e.b?e.b:null!=e.blue?e.blue:0,!0),r=w(null!=e.a?e.a:null!=e.alpha?e.alpha:255,!0);if(-1!=t&&-1!=o&&-1!=n&&-1!=r)return[t,o,n,r]}}(e)||function(e){if(Array.isArray(e)&&(3==e.length||4==e.length)){var t=w(e[0],!0),o=w(e[1],!0),n=w(e[2],!0),r=w(null!=e[3]?e[3]:255,!0);if(-1!=t&&-1!=o&&-1!=n&&-1!=r)return[t,o,n,r]}}(e)||function(e){if("number"==typeof e&&Math.floor(e)==e&&e<=4294967295&&e>=0)return[e>>16&255,e>>8&255,255&e,e>>24&255]}(e)||[0,0,0,255]}function y(e){var t=e.toString(16);return 1==t.length?"0"+t:t}function v(e){return 1==e.length?parseInt(e+e,16):parseInt(e,16)}function w(e,t){return"number"!=typeof e||!0===t&&Math.floor(e)!==e?-1:e>=0&&e<=255?e:-1}d.arr=h,d.obj=u,d.css=f,d.hex=p,d.num=g;const k=/\[object Object\]/,E=(e,t)=>{"string"==typeof e&&k.test(e)||t()},S=(e,t)=>{"string"==typeof e&&""===e||t()},x=(e,t)=>{(0,i.b)()&&(console.log(e,t),(0,r.d)("\u2191 We propagate the (submit) event to this target.")),Object.defineProperty(e,"target",{value:t,writable:!1})},L=(e,t,o,n={})=>{var r,i;void 0===e.nextHooks&&(e.nextHooks=new Map),void 0===e.nextState&&(e.nextState=new Map),e.nextState.get(t)!==o&&(e.nextHooks.get(t)instanceof Map==0&&e.nextHooks.set(t,new Map),"function"==typeof n.afterPatch&&(null===(r=e.nextHooks.get(t))||void 0===r||r.set("afterPatch",n.afterPatch)),"function"==typeof n.beforePatch&&(null===(i=e.nextHooks.get(t))||void 0===i||i.set("beforePatch",n.beforePatch)),e.nextState.set(t,o),(e=>{var t,o,n;null===(t=e.nextHooks)||void 0===t||t.forEach(((t,o)=>{var n;const r=t.get("beforePatch");"function"==typeof r&&r(null===(n=e.nextState)||void 0===n?void 0:n.get(o),e.nextState,e,o)})),(null===(o=e.nextState)||void 0===o?void 0:o.size)>0&&(e.state=Object.assign(Object.assign({},e.state),Object.fromEntries(e.nextState)),delete e.nextState,null===(n=e.nextHooks)||void 0===n||n.forEach(((t,o)=>{const n=t.get("afterPatch");"function"==typeof n&&n(e.state[o],e.state,e,o)}))),delete e.nextHooks})(e))},N=(e,t,o,n,i,l={})=>{o(i)?L(e,t,i,null==l?void 0:l.hooks):void 0===i||null===i&&(void 0===(null==l?void 0:l.required)||!1===(null==l?void 0:l.required))?L(e,t,null==l?void 0:l.defaultValue,null==l?void 0:l.hooks):(void 0!==(null==l?void 0:l.required)&&!1!==(null==l?void 0:l.required)||n.add(null),((e,t,o,n)=>{(0,r.d)(`[${e.constructor.name}] Der Property-Wert (${o}) f\xfcr '${t}' ist nicht valide. Folgende Werte sind erlaubt: ${Array.from(n).join(", ")}`)})(e,t,i,n))},T=(e,t,o,n)=>{N(e,t,(e=>"boolean"==typeof e),new Set(["Boolean {true, false}"]),o,n)},A=(e,t,o,n={})=>{const r="number"==typeof n.minLength?null==n?void 0:n.minLength:0;N(e,t,(e=>"string"==typeof e&&e.length>=r),new Set([`String (Mindestl\xe4nge ${r})`]),o,n)},_=(e,t,o,n)=>{N(e,t,(e=>"number"==typeof e&&(void 0===(null==n?void 0:n.min)||"number"==typeof(null==n?void 0:n.min)&&e>=n.min)&&(void 0===(null==n?void 0:n.max)||"number"==typeof(null==n?void 0:n.max)&&e<=n.max)),new Set(["Number"]),o,n)},M=(e,t,o,n,i=(e=>e==e),l={})=>{S(n,(()=>{E(n,(()=>{void 0===n&&(n=[]);try{try{n=q(n)}catch(e){}if(Array.isArray(n)){const r=n.find((e=>!o(e)));void 0===r&&i(n)?L(e,t,n,l.hooks):E(r,(()=>{throw console.log(r),new Error("\u2191 Das Schema f\xfcr das Property (_options) ist nicht valide. Der Wert wird nicht ge\xe4ndert.")}))}else E(n,(()=>{throw console.log(n),new Error("\u2191 Das Schema f\xfcr das Property (_options) ist nicht valide. Der Wert wird nicht ge\xe4ndert.")}))}catch(e){(0,r.d)("Known bug: Zeichenkettenliste (string[])")}}))}))},H=/^(true|false)$/,O=/^-?(0|[1-9]\d*)$/,C=/^-?(0.|[1-9]\d*.)\d*[1-9]$/,P=e=>{const t=typeof e,o=`${e}`;if("string"==typeof e)if(H.test(e))e="true"===e;else if(O.test(e))e=parseInt(e);else if(C.test(e))e=parseFloat(e);else if(D.test(e))try{e=q(e)}catch(e){}return t!==typeof e&&(0,r.d)(`You have used a stringified property value (${o} to ${JSON.stringify(e)}) which type switched from ${t} to ${typeof e}!`),e},$=e=>{try{return JSON.stringify(e).replace(/"/g,"'")}catch(t){throw i.L.warn(["stringifyJson",e]),i.L.error("\u2191 Das JSON konnte nicht in einen String umgewandelt werden. Es wird ein stringifizierbares JSON erwartet."),new Error}},D=/^[{[]/,q=e=>{if("string"==typeof e)try{return JSON.parse(e)}catch(t){if(D.test(e))try{return JSON.parse(e.replace(/'/g,'"'))}catch(t){i.L.warn(["parseJson",e]),i.L.error("\u2191 Der JSON-String konnte nicht geparsed werden. Achten Sie darauf, dass einfache Anf\xfchrungszeichen im Text maskiert werden (&#8216;).")}}throw new Error},j=e=>"boolean"==typeof e?!0===e?"true":"false":void 0,z=e=>"string"==typeof e?e:j(e),B=(e,t)=>c(e,t||(0,i.g)()),R=(e,t)=>s(e,t||(0,i.g)());let W=null;const I=()=>(W=W||{backgroundColor:"#00000000",color:"#00000000",domNode:(0,i.g)().body,level:"Fail",score:1},W),J=/(\d+, ){3}0\)/,K=(e,t=I())=>{const o=getComputedStyle(e),r=J.test(o.backgroundColor)?t.backgroundColor:d.hex(o.backgroundColor),l=J.test(o.color)?t.color:d.hex(o.color),a=(0,n.s)(r,l),s={backgroundColor:r,color:l,domNode:e,level:(0,n.f)(a),score:a};return a<4.5&&i.L.error(["Color-Contrast-Error",{backgroundColor:s.backgroundColor,color:s.color,level:s.level,score:s.score},s.domNode]),s},F=(e,t=I())=>{t.domNode instanceof HTMLElement&&(t=K(t.domNode,t));const o=t.domNode.querySelector(e);if(null===o){const o=t.domNode.querySelectorAll('[class="hydrated"]');for(let n=0;n<o.length&&(t.domNode=o[n],null===(t=F(e,t)).domNode);n++);return t}return K(o,t)},U=(e,t=window)=>{e instanceof HTMLElement?(t.scrollTo({behavior:"smooth",top:e.getBoundingClientRect().top+(0,i.a)().pageYOffset-50}),e.focus()):(0,r.d)("Das HTMLElement ist nicht valide, zu dem gescrollt werden soll.")},Z=(e,t)=>{if((e instanceof Document||e instanceof HTMLElement||e instanceof ShadowRoot)&&"string"==typeof t){(0,r.d)("Bei der Methode querySelectorAll wurden die Parameter document, selector in selector, document getauscht, da der Parameter selector nicht, allerdings der Parameter document optional sein kann.");const o=`${t}`;t=e,e=o}if("string"==typeof e){const o=B(e,t);o instanceof HTMLElement?U(o):(0,r.d)(`Es konnte kein HTMLElement mit dem Selector (${e}) gefunden werden, zu dem gescrollt werden soll.`)}else(0,r.d)("Der Selector ist nicht valide, zu dem gescrollt werden soll.")};class V{static queryHtmlElementColors(e,t,o=!1,n=!0){let r=null;if(!0===o||!1===V.executionLock)if(!1===o&&(V.cache.clear(),V.cache.set(t.domNode,t),V.executionLock=!0,!0===n&&i.L.debug("[KoliBriUtils] Color contrast analysis started...")),e===t.domNode)r=t;else{const o=new Set;if(t.domNode.shadowRoot){const e=t.domNode.shadowRoot.children;for(let t=0;t<e.length;t++)o.add(e[t])}const n=t.domNode;if("function"==typeof n.assignedNodes){const e=n.assignedNodes();for(let t=0;t<e.length;t++)e[t]instanceof HTMLElement&&o.add(e[t])}const i=t.domNode.children;for(let e=0;e<i.length;e++)o.add(i[e]);const l=Array.from(o);for(let a=0;a<l.length;a++){let o=V.cache.get(l[a]);void 0===o&&(o=K(l[a],t)),V.cache.set(l[a],o);const n=V.queryHtmlElementColors(e,o,!0,!1);if(null!==n){r=n;break}}}else i.L.debug("[KoliBriUtils] Call aborted because a color contrast analysis is currently being executed.");return!1===o&&(!0===n&&i.L.debug(`[KoliBriUtils] Color contrast analysis finished (${V.cache.size} DOM elements are analysed).`),V.executionLock=!1,V.cache.clear()),r}}V.executionLock=!1,V.cache=new Map;class Y{}Y.patchTheme=l.p,Y.patchThemeTag=l.a,Y.querySelector=B,Y.querySelectorAll=R,Y.scrollByHTMLElement=U,Y.scrollBySelector=Z,Y.stringifyJson=$}}]);