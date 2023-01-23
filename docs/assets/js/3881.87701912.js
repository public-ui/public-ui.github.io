/*! For license information please see 3881.87701912.js.LICENSE.txt */
"use strict";(self.webpackChunk_public_ui_website=self.webpackChunk_public_ui_website||[]).push([[3881],{5149:(e,t,r)=>{r.d(t,{a:()=>f,b:()=>l,c:()=>p,d:()=>c,e:()=>a,f:()=>u,u:()=>g});var o=r(7738);const n=new Set,a=e=>{!1===n.has(e)&&(n.add(e),o.L.info(e,{classifier:"\u270ba11y",overwriteStyle:"; background-color: #09f"}))},i=new Set,l=e=>{!1===i.has(e)&&(i.add(e),o.L.warn(e,{classifier:"\ud83d\udd25deprecated",forceLog:!0,overwriteStyle:"; background-color: #f00"}))},s=new Set,c=e=>{!1===s.has(e)&&(s.add(e),o.L.debug(e,{classifier:"\ud83d\udcbbdev",overwriteStyle:"; background-color: #f09"}))},d=new Set,u=(e,t=!1)=>{!1===d.has(e)&&(d.add(e),e+=!0===t?" \u2705":"",o.L.debug(e,{classifier:"\ud83c\udf1ffeature",overwriteStyle:"; background-color: #309"}))};c("Wir freuen uns \xfcber jedes Feedback, Kommentare, Screenshots oder Demo-Links von einer auf KoliBri-basierenden Anwendung (kolibri@itzbund.de). Vielen Dank!");const h=new Set,p=()=>{a('"Disabled" schr\xe4nkt die Zug\xe4nglichkeit und Sichtbarkeit ein. Wir empfehlen aus Sicht der Barrierefreiheit readonly- statt disabled-Attribut zu verwenden.\n- https://uxdesign.cc/is-it-ok-to-grey-out-disabled-buttons-8afa74a0fae')},f=e=>{"string"==typeof e&&""!==e||a("Manche Strukturelemente, wie bspw. der nav-Tag, k\xf6nnen mehrfach in einer Webseite verwendet werden. Damit die gleichnamigen Strukturelemente voneinander unterschieden werden k\xf6nnen, ist es erforderlich ein Aria-Label zu setzen.\n- https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/Navigation_Role#accessibility_concerns")},g=(e,t=8)=>{var r;t>7&&(r=`[${e}] Innerhalb von Navigationsstrukturen wird empfohlen nicht mehr als 7 Men\xfcpunkte zu verwenden.\n\nLinks:\n- https://de.ryte.com/wiki/Millersche_Zahl\n- https://de.wikipedia.org/wiki/Millersche_Zahl`,!1===h.has(r)&&(h.add(r),o.L.debug(r,{classifier:"\ud83d\udcd1ui/ux",overwriteStyle:"; background-color: #060;"})))}},4340:(e,t,r)=>{r.d(t,{f:()=>c,s:()=>s});var o=1/12.92;function n(e){return Math.pow((e+.055)/1.055,2.4)}function a(e){var t=e[0]/255,r=e[1]/255,a=e[2]/255;return.2126*(t<=.03928?t*o:n(t))+.7152*(r<=.03928?r*o:n(r))+.0722*(a<=.03928?a*o:n(a))}function i(e){var t=255;8===(e=e.replace(/^#/,"")).length&&(t=parseInt(e.slice(6,8),16),e=e.substring(0,6)),4===e.length&&(t=parseInt(e.slice(3,4).repeat(2),16),e=e.substring(0,3)),3===e.length&&(e=e[0]+e[0]+e[1]+e[1]+e[2]+e[2]);var r=parseInt(e,16);return[r>>16,r>>8&255,255&r,t]}function l(e,t){return function(e,t){return(Math.max(e,t)+.05)/(Math.min(e,t)+.05)}(a(e),a(t))}function s(e,t){return l(i(e),i(t))}function c(e){return e>=7?"AAA":e>=4.5?"AA":e>=3?"AA Large":"Fail"}},3881:(e,t,r)=>{r.r(t),r.d(t,{kol_spin:()=>a});var o=r(3701),n=r(6645);const a=class{constructor(e){(0,o.r)(this,e),this.showToggled=!1,this._show=!1,this.state={}}render(){return(0,o.h)(o.H,null,this.state._show?(0,o.h)("span",{"aria-busy":"true","aria-label":"Aktion wird ausgef\xfchrt ...","aria-live":"polite",class:"spin",role:"alert"},(0,o.h)("span",{class:"bg-spin-1"}),(0,o.h)("span",{class:"bg-spin-2"}),(0,o.h)("span",{class:"bg-spin-3"}),(0,o.h)("span",{class:"bg-neutral"})):this.showToggled&&(0,o.h)("span",{"aria-label":"Aktion abgeschlossen","aria-busy":"false","aria-live":"polite",role:"alert"}))}validateShow(e){this.showToggled=!0===this.state._show&&!1===this._show,(0,n.b)(this,"_show",e)}componentWillLoad(){this.validateShow(this._show)}static get watchers(){return{_show:["validateShow"]}}};a.style={default:'*,::before,::after{-webkit-box-sizing:border-box;box-sizing:border-box;border-width:0;border-style:solid;border-color:var(--kolibri-border-color)}*{--tw-ring-inset:var(--tw-empty, );--tw-ring-offset-width:0px;--tw-ring-offset-color:var(--kolibri-color);--tw-ring-color:rgba(undefined, 0.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000}:root{-moz-tab-size:4;-o-tab-size:4;tab-size:4}:-moz-focusring{outline:1px dotted ButtonText}:-moz-ui-invalid{box-shadow:none}::moz-focus-inner{border-style:none;padding:0}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}[type=\'search\']{-webkit-appearance:textfield;outline-offset:-2px}abbr[title]{-webkit-text-decoration:underline dotted;text-decoration:underline dotted}a{color:inherit;text-decoration:inherit}body{margin:0;font-family:inherit;line-height:inherit}b,strong{font-weight:bolder}button,select{text-transform:none}button,[type=\'button\'],[type=\'reset\'],[type=\'submit\']{-webkit-appearance:button}button{background-color:transparent;background-image:none}button,[role="button"]{cursor:pointer}code{font-size:1em;font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace}fieldset{margin:0;padding:0}html{-webkit-text-size-adjust:100%;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";line-height:1.5}h1,p,h2,h3,h4,h5,h6{margin:0}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}input,button,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0;padding:0;line-height:inherit;color:inherit}input::placeholder{opacity:1;color:#9ca3af}input::webkit-input-placeholder{opacity:1;color:#9ca3af}input::-moz-placeholder{opacity:1;color:#9ca3af}input:-ms-input-placeholder{opacity:1;color:#9ca3af}input::-ms-input-placeholder{opacity:1;color:#9ca3af}legend{padding:0}progress{vertical-align:baseline}small{font-size:80%}svg{display:block;vertical-align:middle}table{text-indent:0;border-color:inherit;border-collapse:collapse}textarea{resize:vertical}textarea::placeholder{opacity:1;color:#9ca3af}textarea::webkit-input-placeholder{opacity:1;color:#9ca3af}textarea::-moz-placeholder{opacity:1;color:#9ca3af}textarea:-ms-input-placeholder{opacity:1;color:#9ca3af}textarea::-ms-input-placeholder{opacity:1;color:#9ca3af}ul,ol{list-style:none;margin:0;padding:0}.container{width:100%}@media (min-width: 640px){.container{max-width:640px}}@media (min-width: 768px){.container{max-width:768px}}@media (min-width: 1024px){.container{max-width:1024px}}@media (min-width: 1280px){.container{max-width:1280px}}@media (min-width: 1536px){.container{max-width:1536px}}.bg-normal{background-color:var(--kolibri-color-normal)}.bg-white{--tw-bg-opacity:1;background-color:rgba(255, 255, 255, var(--tw-bg-opacity))}.bg-spin-1{background-color:var(--kolibri-color-spin-1)}.bg-spin-2{background-color:var(--kolibri-color-spin-2)}.bg-spin-3{background-color:var(--kolibri-color-spin-3)}.rounded{border-radius:var(--kolibri-border-radius)}.border-1{border-width:1px}.cursor-pointer{cursor:pointer}.block{display:block}.inline-block{display:inline-block}.flex{display:-webkit-box;display:-ms-flexbox;display:-webkit-flex;display:flex}.inline-flex{display:-webkit-inline-box;display:-ms-inline-flexbox;display:-webkit-inline-flex;display:inline-flex}.table{display:table}.grid{display:-ms-grid;display:grid}.hidden{display:none}.flex-wrap{-ms-flex-wrap:wrap;-webkit-flex-wrap:wrap;flex-wrap:wrap}.items-center{-webkit-box-align:center;-ms-flex-align:center;-webkit-align-items:center;align-items:center}.content-center{-ms-flex-line-pack:center;-webkit-align-content:center;align-content:center}.font-80{font-weight:80}.font-60{font-weight:60}.h-full{height:100%}.h-0{height:0px}.h-0\\.41c-2\\.42\\2c 0-4\\.82-1\\.57-4\\.82-3\\.58c0\\.05-0\\.98\\2c 0\\.43-1\\.91\\2c 1\\.07-2\\.65c0\\.3\\2c 0\\.05\\2c 0\\.61\\2c 0\\.09\\2c 0\\.92\\2c 0\\.09c1\\.1\\2c 0\\2c 1\\.69-0\\.58\\2c 1\\.74-1\\.16{height:0.29rem}.text-sm{font-size:0.875rem;line-height:1.25rem}.text-2xl{font-size:1.5rem;line-height:2rem}.text-lg{font-size:1.125rem;line-height:1.75rem}.leading-normal{line-height:1.5}.list-none{list-style-type:none}.list-disc{list-style-type:disc}.list-decimal{list-style-type:decimal}.mx-auto{margin-left:auto;margin-right:auto}.mb-1{margin-bottom:calc(1 * var(--kolibri-spacing))}.mt-2{margin-top:calc(2 * var(--kolibri-spacing))}.mt-4{margin-top:calc(4 * var(--kolibri-spacing))}.mr-2{margin-right:calc(2 * var(--kolibri-spacing))}.ml-2{margin-left:calc(2 * var(--kolibri-spacing))}.outline{outline-style:solid}.overflow-hidden{overflow:hidden}.overflow-y-visible{overflow-y:visible}.p-2{padding:calc(2 * var(--kolibri-spacing))}.p-4{padding:calc(4 * var(--kolibri-spacing))}.px{padding-left:1px;padding-right:1px}.py-2{padding-top:calc(2 * var(--kolibri-spacing));padding-bottom:calc(2 * var(--kolibri-spacing))}.pl-8{padding-left:2rem}.pb-2{padding-bottom:calc(2 * var(--kolibri-spacing))}.tab{-moz-tab-size:4;-o-tab-size:4;tab-size:4}.absolute{position:absolute}.text-center{text-align:center}.hover\\:text-primary:hover{color:var(--kolibri-color-primary)}.text-normal{color:var(--kolibri-color-normal)}.italic{font-style:italic}.underline{-webkit-text-decoration-line:underline;text-decoration-line:underline}.indent{text-indent:1.5rem}.visible{visibility:visible}.w-full{width:100%}.w-4\\/5{width:80%}.z-50{z-index:50}.gap-1{grid-gap:calc(1 * var(--kolibri-spacing));gap:calc(1 * var(--kolibri-spacing))}.gap-2{grid-gap:calc(2 * var(--kolibri-spacing));gap:calc(2 * var(--kolibri-spacing))}.grid-flow-col{grid-auto-flow:column}.transform{--tw-translate-x:0;--tw-translate-y:0;--tw-translate-z:0;--tw-rotate:0;--tw-rotate-x:0;--tw-rotate-y:0;--tw-rotate-z:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scale-z:1;-webkit-transform:translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) translateZ(var(--tw-translate-z)) rotate(var(--tw-rotate)) rotateX(var(--tw-rotate-x)) rotateY(var(--tw-rotate-y)) rotateZ(var(--tw-rotate-z)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)) scaleZ(var(--tw-scale-z));-ms-transform:translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) translateZ(var(--tw-translate-z)) rotate(var(--tw-rotate)) rotateX(var(--tw-rotate-x)) rotateY(var(--tw-rotate-y)) rotateZ(var(--tw-rotate-z)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)) scaleZ(var(--tw-scale-z));transform:translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) translateZ(var(--tw-translate-z)) rotate(var(--tw-rotate)) rotateX(var(--tw-rotate-x)) rotateY(var(--tw-rotate-y)) rotateZ(var(--tw-rotate-z)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)) scaleZ(var(--tw-scale-z))}.animate{-webkit-animation-iteration-count:1;animation-iteration-count:1}.filter{--tw-blur:var(--tw-empty, );--tw-brightness:var(--tw-empty, );--tw-contrast:var(--tw-empty, );--tw-grayscale:var(--tw-empty, );--tw-hue-rotate:var(--tw-empty, );--tw-invert:var(--tw-empty, );--tw-saturate:var(--tw-empty, );--tw-sepia:var(--tw-empty, );--tw-drop-shadow:var(--tw-empty, );-webkit-filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.blur{-webkit-backdrop-filter:blur(8px);backdrop-filter:blur(8px)}:host *{-ms-hyphens:var(--kolibri-hyphens);-webkit-hyphens:var(--kolibri-hyphens);hyphens:var(--kolibri-hyphens);font-family:var(--kolibri-font-family);line-height:var(--kolibri-line-height);word-break:break-word}.spin{display:inline-block;height:1rem;position:relative;width:3rem}.spin span{animation-timing-function:cubic-bezier(0, 1, 1, 0);border:0.1rem solid #fff;border-radius:50%;height:0.8rem;width:0.8rem;top:0.1rem;position:absolute}.spin span:nth-child(1){z-index:0;animation:spin1 2s infinite;left:0.1rem}.spin span:nth-child(2){z-index:1;animation:spin2 2s infinite;left:0.1rem}.spin span:nth-child(3){z-index:1;animation:spin2 2s infinite;left:1.1rem}.spin span:nth-child(4){z-index:0;animation:spin3 2s infinite;left:2.1rem}@keyframes spin1{0%{transform:scale(0)}100%{transform:scale(1)}}@keyframes spin2{0%{transform:translate(0, 0)}100%{transform:translate(1rem, 0)}}@keyframes spin3{0%{transform:scale(1)}100%{transform:scale(0)}}'}},6645:(e,t,r)=>{r.d(t,{K:()=>U,a:()=>A,b:()=>L,c:()=>H,d:()=>E,e:()=>z,f:()=>S,g:()=>P,h:()=>F,i:()=>$,j:()=>K,k:()=>R,l:()=>I,m:()=>j,n:()=>Y,o:()=>x,p:()=>q,q:()=>J,r:()=>d,s:()=>N,t:()=>_,w:()=>M});var o=r(4340),n=r(5149),a=r(7738),i=r(4776);const l=(e,t)=>{t.forEach((t=>{!1===e.has(t)&&e.add(t)}))},s=(e,t=document)=>{if(t instanceof Document||t instanceof HTMLElement||t instanceof ShadowRoot){const r=new Set;l(r,t.querySelectorAll(e));const o=t.querySelectorAll('[class*="hydrated"]');for(let t=0;t<o.length;t++){const n=o[t].shadowRoot;l(r,s(e,"object"==typeof n&&null!==n?n:o[t]))}return Array.from(r)}throw new Error("The parameter document for the method querySelectorAll is not type of Document, HTMLElement or ShadowRoot.")},c=(e,t=document)=>{if(t instanceof Document||t instanceof HTMLElement||t instanceof ShadowRoot){let r=t.querySelector(e);if(null===r){const o=t.querySelectorAll('[class*="hydrated"]');for(let t=0;t<o.length;t++){const n=o[t].shadowRoot;if(r=c(e,"object"==typeof n&&null!==n?n:o[t]),null!==r)break}}return r}throw new Error("The parameter document for the method querySelector is not type of Document, HTMLElement or ShadowRoot.")};var d=w,u=w,h=function(e){var t=b(e);return{r:t[0],g:t[1],b:t[2],a:3==t.length?255:Math.round(t[3])}},p=function(e){var t=b(e);return 3==t.length&&t.push(255),255==t[3]?"rgb("+t[0]+", "+t[1]+", "+t[2]+")":0==t[3]?"rgba("+t[0]+", "+t[1]+", "+t[2]+", 0)":"rgba("+t[0]+", "+t[1]+", "+t[2]+", "+String(t[3]/255).substr(1)+")"},f=function(e){3==(t=b(e)).length&&t.push(255);var t,r=255==t[3],o=m(t[0]),n=m(t[1]),a=m(t[2]),i=function(e,t,r,o){var n=["ff","00","11","22","33","44","55","66","77","88","99","aa","bb","cc","dd","ee"];return-1!=n.indexOf(e)&&-1!=n.indexOf(t)&&-1!=n.indexOf(r)&&-1!=n.indexOf(o)}(o,n,a,t=m(Math.round(t[3])));return r?i?"#"+o.charAt(0)+n.charAt(0)+a.charAt(0):"#"+o+n+a:i?"#"+o.charAt(0)+n.charAt(0)+a.charAt(0)+t.charAt(0):"#"+o+n+a+t},g=function(e){var t=b(e);return 3==t.length?t.push(255):t[3]=Math.round(t[3]),(t[3]<<24>>>0|t[0]<<16|t[1]<<8|t[2])>>>0};function w(e){var t=b(e);return 3==t.length?t.concat(255):(t[3]=Math.round(t[3]),t)}function b(e){return"string"==typeof e?function(e){return"red"==e?[255,0,0]:"green"==e?[0,255,0]:"blue"==e?[0,0,255]:"black"==e?[0,0,0]:"white"==e?[255,255,255]:"cyan"==e?[0,255,255]:"gray"==e||"grey"==e?[128,128,128]:"magenta"==e||"pink"==e?[255,0,255]:"yellow"==e?[255,255,0]:void 0}(e=e.toLowerCase())||function(e){var t=e.replace(/^#/,""),r=t.length;if(3==r||4==r){var o=v(t[0]),n=v(t[1]),a=v(t[2]),i=3==r?255:v(t[3]);if(isNaN(o)||isNaN(n)||isNaN(a)||isNaN(i))return;return[o,n,a,i]}}(e)||function(e){var t=e.replace(/^#/,""),r=t.length;if(6==r||8==r){var o=v(t.slice(0,2)),n=v(t.slice(2,4)),a=v(t.slice(4,6)),i=6==r?255:v(t.slice(6,8));if(isNaN(o)||isNaN(n)||isNaN(a)||isNaN(i))return;return[o,n,a,i]}}(e)||function(e){if("rgb("==e.substr(0,4)){var t=(e=e.match(/^rgb\(([^)]+)\)/)[1]).split(/ *, */).map(Number),r=y(t[0],!0),o=y(t[1],!0),n=y(t[2],!0);if(-1!=r&&-1!=o&&-1!=n)return[r,o,n,255]}}(e)||function(e){if("rgba("==e.substr(0,5)){var t=(e=e.match(/^rgba\(([^)]+)\)/)[1]).split(/ *, */).map(Number),r=y(t[0],!0),o=y(t[1],!0),n=y(t[2],!0),a=y(255*t[3]);if(-1!=r&&-1!=o&&-1!=n&&-1!=a)return[r,o,n,a]}}(e)||[0,0,0,255]:function(e){if("[object Object]"===Object.prototype.toString.call(e)&&Object.getPrototypeOf(e)===Object.getPrototypeOf({})){var t=y(null!=e.r?e.r:null!=e.red?e.red:0,!0),r=y(null!=e.g?e.g:null!=e.green?e.green:0,!0),o=y(null!=e.b?e.b:null!=e.blue?e.blue:0,!0),n=y(null!=e.a?e.a:null!=e.alpha?e.alpha:255,!0);if(-1!=t&&-1!=r&&-1!=o&&-1!=n)return[t,r,o,n]}}(e)||function(e){if(Array.isArray(e)&&(3==e.length||4==e.length)){var t=y(e[0],!0),r=y(e[1],!0),o=y(e[2],!0),n=y(null!=e[3]?e[3]:255,!0);if(-1!=t&&-1!=r&&-1!=o&&-1!=n)return[t,r,o,n]}}(e)||function(e){if("number"==typeof e&&Math.floor(e)==e&&e<=4294967295&&e>=0)return[e>>16&255,e>>8&255,255&e,e>>24&255]}(e)||[0,0,0,255]}function m(e){var t=e.toString(16);return 1==t.length?"0"+t:t}function v(e){return 1==e.length?parseInt(e+e,16):parseInt(e,16)}function y(e,t){return"number"!=typeof e||!0===t&&Math.floor(e)!==e?-1:e>=0&&e<=255?e:-1}d.arr=u,d.obj=h,d.css=p,d.hex=f,d.num=g;const k=/\[object Object\]/,x=(e,t)=>{"string"==typeof e&&k.test(e)||t()},S=(e,t)=>{"string"==typeof e&&""===e||t()},z=(e,t)=>{(0,a.b)()&&(console.log(e,t),(0,n.d)("\u2191 We propagate the (submit) event to this target.")),Object.defineProperty(e,"target",{value:t,writable:!1})},N=(e,t,r,o={})=>{var n,a;void 0===e.nextHooks&&(e.nextHooks=new Map),void 0===e.nextState&&(e.nextState=new Map),e.nextState.get(t)!==r&&(e.nextHooks.get(t)instanceof Map==0&&e.nextHooks.set(t,new Map),"function"==typeof o.afterPatch&&(null===(n=e.nextHooks.get(t))||void 0===n||n.set("afterPatch",o.afterPatch)),"function"==typeof o.beforePatch&&(null===(a=e.nextHooks.get(t))||void 0===a||a.set("beforePatch",o.beforePatch)),e.nextState.set(t,r),(e=>{var t,r,o;null===(t=e.nextHooks)||void 0===t||t.forEach(((t,r)=>{var o;const n=t.get("beforePatch");"function"==typeof n&&n(null===(o=e.nextState)||void 0===o?void 0:o.get(r),e.nextState,e,r)})),(null===(r=e.nextState)||void 0===r?void 0:r.size)>0&&(e.state=Object.assign(Object.assign({},e.state),Object.fromEntries(e.nextState)),delete e.nextState,null===(o=e.nextHooks)||void 0===o||o.forEach(((t,r)=>{const o=t.get("afterPatch");"function"==typeof o&&o(e.state[r],e.state,e,r)}))),delete e.nextHooks})(e))},A=(e,t,r,o,a,i={})=>{r(a)?N(e,t,a,null==i?void 0:i.hooks):void 0===a||null===a&&(void 0===(null==i?void 0:i.required)||!1===(null==i?void 0:i.required))?N(e,t,null==i?void 0:i.defaultValue,null==i?void 0:i.hooks):(void 0!==(null==i?void 0:i.required)&&!1!==(null==i?void 0:i.required)||o.add(null),((e,t,r,o)=>{(0,n.d)(`[${e.constructor.name}] Der Property-Wert (${r}) f\xfcr '${t}' ist nicht valide. Folgende Werte sind erlaubt: ${Array.from(o).join(", ")}`)})(e,t,a,o))},L=(e,t,r,o)=>{A(e,t,(e=>"boolean"==typeof e),new Set(["Boolean {true, false}"]),r,o)},M=(e,t,r,o={})=>{const n="number"==typeof o.minLength?null==o?void 0:o.minLength:0;A(e,t,(e=>"string"==typeof e&&e.length>=n),new Set([`String (Mindestl\xe4nge ${n})`]),r,o)},E=(e,t,r,o)=>{A(e,t,(e=>"number"==typeof e&&(void 0===(null==o?void 0:o.min)||"number"==typeof(null==o?void 0:o.min)&&e>=o.min)&&(void 0===(null==o?void 0:o.max)||"number"==typeof(null==o?void 0:o.max)&&e<=o.max)),new Set(["Number"]),r,o)},H=(e,t,r,o,a=(e=>e==e),i={})=>{S(o,(()=>{x(o,(()=>{void 0===o&&(o=[]);try{try{o=q(o)}catch(e){}if(Array.isArray(o)){const n=o.find((e=>!r(e)));void 0===n&&a(o)?N(e,t,o,i.hooks):x(n,(()=>{throw console.log(n),new Error("\u2191 Das Schema f\xfcr das Property (_options) ist nicht valide. Der Wert wird nicht ge\xe4ndert.")}))}else x(o,(()=>{throw console.log(o),new Error("\u2191 Das Schema f\xfcr das Property (_options) ist nicht valide. Der Wert wird nicht ge\xe4ndert.")}))}catch(e){(0,n.d)("Known bug: Zeichenkettenliste (string[])")}}))}))},O=/^(true|false)$/,T=/^-?(0|[1-9]\d*)$/,C=/^-?(0.|[1-9]\d*.)\d*[1-9]$/,j=e=>{const t=typeof e,r=`${e}`;if("string"==typeof e)if(O.test(e))e="true"===e;else if(T.test(e))e=parseInt(e);else if(C.test(e))e=parseFloat(e);else if(D.test(e))try{e=q(e)}catch(e){}return t!==typeof e&&(0,n.d)(`You have used a stringified property value (${r} to ${JSON.stringify(e)}) which type switched from ${t} to ${typeof e}!`),e},_=e=>{try{return JSON.stringify(e).replace(/"/g,"'")}catch(t){throw a.L.warn(["stringifyJson",e]),a.L.error("\u2191 Das JSON konnte nicht in einen String umgewandelt werden. Es wird ein stringifizierbares JSON erwartet."),new Error}},D=/^[{[]/,q=e=>{if("string"==typeof e)try{return JSON.parse(e)}catch(t){if(D.test(e))try{return JSON.parse(e.replace(/'/g,'"'))}catch(t){a.L.warn(["parseJson",e]),a.L.error("\u2191 Der JSON-String konnte nicht geparsed werden. Achten Sie darauf, dass einfache Anf\xfchrungszeichen im Text maskiert werden (&#8216;).")}}throw new Error},P=e=>"boolean"==typeof e?!0===e?"true":"false":void 0,$=e=>"string"==typeof e?e:P(e),R=(e,t)=>c(e,t||(0,a.g)()),Y=(e,t)=>s(e,t||(0,a.g)());let Z=null;const B=()=>(Z=Z||{backgroundColor:"#00000000",color:"#00000000",domNode:(0,a.g)().body,level:"Fail",score:1},Z),X=/(\d+, ){3}0\)/,I=(e,t=B())=>{const r=getComputedStyle(e),n=X.test(r.backgroundColor)?t.backgroundColor:d.hex(r.backgroundColor),i=X.test(r.color)?t.color:d.hex(r.color),l=(0,o.s)(n,i),s={backgroundColor:n,color:i,domNode:e,level:(0,o.f)(l),score:l};return l<4.5&&a.L.error(["Color-Contrast-Error",{backgroundColor:s.backgroundColor,color:s.color,level:s.level,score:s.score},s.domNode]),s},J=(e,t=B())=>{t.domNode instanceof HTMLElement&&(t=I(t.domNode,t));const r=t.domNode.querySelector(e);if(null===r){const r=t.domNode.querySelectorAll('[class="hydrated"]');for(let o=0;o<r.length&&(t.domNode=r[o],null===(t=J(e,t)).domNode);o++);return t}return I(r,t)},W=(e,t=window)=>{e instanceof HTMLElement?(t.scrollTo({behavior:"smooth",top:e.getBoundingClientRect().top+(0,a.a)().pageYOffset-50}),e.focus()):(0,n.d)("Das HTMLElement ist nicht valide, zu dem gescrollt werden soll.")},F=(e,t)=>{if((e instanceof Document||e instanceof HTMLElement||e instanceof ShadowRoot)&&"string"==typeof t){(0,n.d)("Bei der Methode querySelectorAll wurden die Parameter document, selector in selector, document getauscht, da der Parameter selector nicht, allerdings der Parameter document optional sein kann.");const r=`${t}`;t=e,e=r}if("string"==typeof e){const r=R(e,t);r instanceof HTMLElement?W(r):(0,n.d)(`Es konnte kein HTMLElement mit dem Selector (${e}) gefunden werden, zu dem gescrollt werden soll.`)}else(0,n.d)("Der Selector ist nicht valide, zu dem gescrollt werden soll.")};class K{static queryHtmlElementColors(e,t,r=!1,o=!0){let n=null;if(!0===r||!1===K.executionLock)if(!1===r&&(K.cache.clear(),K.cache.set(t.domNode,t),K.executionLock=!0,!0===o&&a.L.debug("[KoliBriUtils] Color contrast analysis started...")),e===t.domNode)n=t;else{const r=new Set;if(t.domNode.shadowRoot){const e=t.domNode.shadowRoot.children;for(let t=0;t<e.length;t++)r.add(e[t])}const o=t.domNode;if("function"==typeof o.assignedNodes){const e=o.assignedNodes();for(let t=0;t<e.length;t++)e[t]instanceof HTMLElement&&r.add(e[t])}const a=t.domNode.children;for(let e=0;e<a.length;e++)r.add(a[e]);const i=Array.from(r);for(let l=0;l<i.length;l++){let r=K.cache.get(i[l]);void 0===r&&(r=I(i[l],t)),K.cache.set(i[l],r);const o=K.queryHtmlElementColors(e,r,!0,!1);if(null!==o){n=o;break}}}else a.L.debug("[KoliBriUtils] Call aborted because a color contrast analysis is currently being executed.");return!1===r&&(!0===o&&a.L.debug(`[KoliBriUtils] Color contrast analysis finished (${K.cache.size} DOM elements are analysed).`),K.executionLock=!1,K.cache.clear()),n}}K.executionLock=!1,K.cache=new Map;class U{}U.patchTheme=i.p,U.patchThemeTag=i.a,U.querySelector=R,U.querySelectorAll=Y,U.scrollByHTMLElement=W,U.scrollBySelector=F,U.stringifyJson=_}}]);