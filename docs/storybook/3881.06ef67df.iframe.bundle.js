"use strict";(self.webpackChunk_public_ui_storybook=self.webpackChunk_public_ui_storybook||[]).push([[3881],{"./node_modules/@public-ui/components/dist/esm/a11y.tipps-ff5a1a99.js":(I,x,h)=>{h.d(x,{a:()=>u,b:()=>y,c:()=>i,d:()=>_,e:()=>c,f:()=>O,u:()=>k});var d=h("./node_modules/@public-ui/components/dist/esm/dev.utils-daaf2f39.js");/*!
 * KoliBri - The accessible HTML-Standard
 */const f=new Set,c=s=>{f.has(s)===!1&&(f.add(s),d.L.info(s,{classifier:"\u270Ba11y",overwriteStyle:"; background-color: #09f"}))},v=new Set,y=s=>{v.has(s)===!1&&(v.add(s),d.L.warn(s,{classifier:"\u{1F525}deprecated",forceLog:!0,overwriteStyle:"; background-color: #f00"}))},S=new Set,_=s=>{S.has(s)===!1&&(S.add(s),d.L.debug(s,{classifier:"\u{1F4BB}dev",overwriteStyle:"; background-color: #f09"}))},b=new Set,O=(s,L=!1)=>{b.has(s)===!1&&(b.add(s),s+=L===!0?" \u2705":"",d.L.debug(s,{classifier:"\u{1F31F}feature",overwriteStyle:"; background-color: #309"}))};_("Wir freuen uns \xFCber jedes Feedback, Kommentare, Screenshots oder Demo-Links von einer auf KoliBri-basierenden Anwendung (kolibri@itzbund.de). Vielen Dank!");const E=new Set,j=s=>{E.has(s)===!1&&(E.add(s),Log.debug(s,{classifier:"\u{1F4D1}ui/ux",overwriteStyle:"; background-color: #060;"}))},i=()=>{c(`"Disabled" schr\xE4nkt die Zug\xE4nglichkeit und Sichtbarkeit ein. Wir empfehlen aus Sicht der Barrierefreiheit readonly- statt disabled-Attribut zu verwenden.
- https://uxdesign.cc/is-it-ok-to-grey-out-disabled-buttons-8afa74a0fae`)},u=s=>{typeof s=="string"&&s!==""||c(`Manche Strukturelemente, wie bspw. der nav-Tag, k\xF6nnen mehrfach in einer Webseite verwendet werden. Damit die gleichnamigen Strukturelemente voneinander unterschieden werden k\xF6nnen, ist es erforderlich ein Aria-Label zu setzen.
- https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/Navigation_Role#accessibility_concerns`)},k=(s,L=8)=>{var A;L>7&&(A=`[${s}] Innerhalb von Navigationsstrukturen wird empfohlen nicht mehr als 7 Men\xFCpunkte zu verwenden.

Links:
- https://de.ryte.com/wiki/Millersche_Zahl
- https://de.wikipedia.org/wiki/Millersche_Zahl`,E.has(A)===!1&&(E.add(A),d.L.debug(A,{classifier:"\u{1F4D1}ui/ux",overwriteStyle:"; background-color: #060;"})))}},"./node_modules/@public-ui/components/dist/esm/index.m-86dc8c44.js":(I,x,h)=>{h.d(x,{f:()=>j,s:()=>E});/*!
 * KoliBri - The accessible HTML-Standard
 */var d=.2126,f=.7152,c=.0722,v=1/12.92;function y(i){return Math.pow((i+.055)/1.055,2.4)}function S(i){var u=i[0]/255,k=i[1]/255,s=i[2]/255,L=u<=.03928?u*v:y(u),A=k<=.03928?k*v:y(k),W=s<=.03928?s*v:y(s);return L*d+A*f+W*c}function _(i){var u=255;(i=i.replace(/^#/,"")).length===8&&(u=parseInt(i.slice(6,8),16),i=i.substring(0,6)),i.length===4&&(u=parseInt(i.slice(3,4).repeat(2),16),i=i.substring(0,3)),i.length===3&&(i=i[0]+i[0]+i[1]+i[1]+i[2]+i[2]);var k=parseInt(i,16);return[k>>16,k>>8&255,255&k,u]}function b(i,u){return(Math.max(i,u)+.05)/(Math.min(i,u)+.05)}function O(i,u){return b(S(i),S(u))}function E(i,u){return O(_(i),_(u))}function j(i){return i>=7?"AAA":i>=4.5?"AA":i>=3?"AA Large":"Fail"}},"./node_modules/@public-ui/components/dist/esm/kol-spin.entry.js":(I,x,h)=>{h.r(x),h.d(x,{kol_spin:()=>v});var d=h("./node_modules/@public-ui/components/dist/esm/index-a398b9f4.js"),f=h("./node_modules/@public-ui/components/dist/esm/prop.validators-4cac744a.js");/*!
 * KoliBri - The accessible HTML-Standard
 */const c=`*,::before,::after{-webkit-box-sizing:border-box;box-sizing:border-box;border-width:0;border-style:solid;border-color:var(--kolibri-border-color)}*{--tw-ring-inset:var(--tw-empty, );--tw-ring-offset-width:0px;--tw-ring-offset-color:var(--kolibri-color);--tw-ring-color:rgba(undefined, 0.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000}:root{-moz-tab-size:4;-o-tab-size:4;tab-size:4}:-moz-focusring{outline:1px dotted ButtonText}:-moz-ui-invalid{box-shadow:none}::moz-focus-inner{border-style:none;padding:0}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}[type='search']{-webkit-appearance:textfield;outline-offset:-2px}abbr[title]{-webkit-text-decoration:underline dotted;text-decoration:underline dotted}a{color:inherit;text-decoration:inherit}body{margin:0;font-family:inherit;line-height:inherit}b,strong{font-weight:bolder}button,select{text-transform:none}button,[type='button'],[type='reset'],[type='submit']{-webkit-appearance:button}button{background-color:transparent;background-image:none}button,[role="button"]{cursor:pointer}code{font-size:1em;font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace}fieldset{margin:0;padding:0}html{-webkit-text-size-adjust:100%;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";line-height:1.5}h1,p,h2,h3,h4,h5,h6{margin:0}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}input,button,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0;padding:0;line-height:inherit;color:inherit}input::placeholder{opacity:1;color:#9ca3af}input::webkit-input-placeholder{opacity:1;color:#9ca3af}input::-moz-placeholder{opacity:1;color:#9ca3af}input:-ms-input-placeholder{opacity:1;color:#9ca3af}input::-ms-input-placeholder{opacity:1;color:#9ca3af}legend{padding:0}progress{vertical-align:baseline}small{font-size:80%}svg{display:block;vertical-align:middle}table{text-indent:0;border-color:inherit;border-collapse:collapse}textarea{resize:vertical}textarea::placeholder{opacity:1;color:#9ca3af}textarea::webkit-input-placeholder{opacity:1;color:#9ca3af}textarea::-moz-placeholder{opacity:1;color:#9ca3af}textarea:-ms-input-placeholder{opacity:1;color:#9ca3af}textarea::-ms-input-placeholder{opacity:1;color:#9ca3af}ul,ol{list-style:none;margin:0;padding:0}.container{width:100%}@media (min-width: 640px){.container{max-width:640px}}@media (min-width: 768px){.container{max-width:768px}}@media (min-width: 1024px){.container{max-width:1024px}}@media (min-width: 1280px){.container{max-width:1280px}}@media (min-width: 1536px){.container{max-width:1536px}}.bg-normal{background-color:var(--kolibri-color-normal)}.bg-white{--tw-bg-opacity:1;background-color:rgba(255, 255, 255, var(--tw-bg-opacity))}.bg-spin-1{background-color:var(--kolibri-color-spin-1)}.bg-spin-2{background-color:var(--kolibri-color-spin-2)}.bg-spin-3{background-color:var(--kolibri-color-spin-3)}.rounded{border-radius:var(--kolibri-border-radius)}.border-1{border-width:1px}.cursor-pointer{cursor:pointer}.block{display:block}.inline-block{display:inline-block}.flex{display:-webkit-box;display:-ms-flexbox;display:-webkit-flex;display:flex}.inline-flex{display:-webkit-inline-box;display:-ms-inline-flexbox;display:-webkit-inline-flex;display:inline-flex}.table{display:table}.grid{display:-ms-grid;display:grid}.hidden{display:none}.flex-wrap{-ms-flex-wrap:wrap;-webkit-flex-wrap:wrap;flex-wrap:wrap}.items-center{-webkit-box-align:center;-ms-flex-align:center;-webkit-align-items:center;align-items:center}.content-center{-ms-flex-line-pack:center;-webkit-align-content:center;align-content:center}.font-80{font-weight:80}.font-60{font-weight:60}.h-full{height:100%}.h-0{height:0px}.h-0\\.41c-2\\.42\\2c 0-4\\.82-1\\.57-4\\.82-3\\.58c0\\.05-0\\.98\\2c 0\\.43-1\\.91\\2c 1\\.07-2\\.65c0\\.3\\2c 0\\.05\\2c 0\\.61\\2c 0\\.09\\2c 0\\.92\\2c 0\\.09c1\\.1\\2c 0\\2c 1\\.69-0\\.58\\2c 1\\.74-1\\.16{height:0.29rem}.text-sm{font-size:0.875rem;line-height:1.25rem}.text-2xl{font-size:1.5rem;line-height:2rem}.text-lg{font-size:1.125rem;line-height:1.75rem}.leading-normal{line-height:1.5}.list-none{list-style-type:none}.list-disc{list-style-type:disc}.list-decimal{list-style-type:decimal}.mx-auto{margin-left:auto;margin-right:auto}.mb-1{margin-bottom:calc(1 * var(--kolibri-spacing))}.mt-2{margin-top:calc(2 * var(--kolibri-spacing))}.mt-4{margin-top:calc(4 * var(--kolibri-spacing))}.mr-2{margin-right:calc(2 * var(--kolibri-spacing))}.ml-2{margin-left:calc(2 * var(--kolibri-spacing))}.outline{outline-style:solid}.overflow-hidden{overflow:hidden}.overflow-y-visible{overflow-y:visible}.p-2{padding:calc(2 * var(--kolibri-spacing))}.p-4{padding:calc(4 * var(--kolibri-spacing))}.px{padding-left:1px;padding-right:1px}.py-2{padding-top:calc(2 * var(--kolibri-spacing));padding-bottom:calc(2 * var(--kolibri-spacing))}.pl-8{padding-left:2rem}.pb-2{padding-bottom:calc(2 * var(--kolibri-spacing))}.tab{-moz-tab-size:4;-o-tab-size:4;tab-size:4}.absolute{position:absolute}.text-center{text-align:center}.hover\\:text-primary:hover{color:var(--kolibri-color-primary)}.text-normal{color:var(--kolibri-color-normal)}.italic{font-style:italic}.underline{-webkit-text-decoration-line:underline;text-decoration-line:underline}.indent{text-indent:1.5rem}.visible{visibility:visible}.w-full{width:100%}.w-4\\/5{width:80%}.z-50{z-index:50}.gap-1{grid-gap:calc(1 * var(--kolibri-spacing));gap:calc(1 * var(--kolibri-spacing))}.gap-2{grid-gap:calc(2 * var(--kolibri-spacing));gap:calc(2 * var(--kolibri-spacing))}.grid-flow-col{grid-auto-flow:column}.transform{--tw-translate-x:0;--tw-translate-y:0;--tw-translate-z:0;--tw-rotate:0;--tw-rotate-x:0;--tw-rotate-y:0;--tw-rotate-z:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scale-z:1;-webkit-transform:translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) translateZ(var(--tw-translate-z)) rotate(var(--tw-rotate)) rotateX(var(--tw-rotate-x)) rotateY(var(--tw-rotate-y)) rotateZ(var(--tw-rotate-z)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)) scaleZ(var(--tw-scale-z));-ms-transform:translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) translateZ(var(--tw-translate-z)) rotate(var(--tw-rotate)) rotateX(var(--tw-rotate-x)) rotateY(var(--tw-rotate-y)) rotateZ(var(--tw-rotate-z)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)) scaleZ(var(--tw-scale-z));transform:translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) translateZ(var(--tw-translate-z)) rotate(var(--tw-rotate)) rotateX(var(--tw-rotate-x)) rotateY(var(--tw-rotate-y)) rotateZ(var(--tw-rotate-z)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)) scaleZ(var(--tw-scale-z))}.animate{-webkit-animation-iteration-count:1;animation-iteration-count:1}.filter{--tw-blur:var(--tw-empty, );--tw-brightness:var(--tw-empty, );--tw-contrast:var(--tw-empty, );--tw-grayscale:var(--tw-empty, );--tw-hue-rotate:var(--tw-empty, );--tw-invert:var(--tw-empty, );--tw-saturate:var(--tw-empty, );--tw-sepia:var(--tw-empty, );--tw-drop-shadow:var(--tw-empty, );-webkit-filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.blur{-webkit-backdrop-filter:blur(8px);backdrop-filter:blur(8px)}:host *{-ms-hyphens:var(--kolibri-hyphens);-webkit-hyphens:var(--kolibri-hyphens);hyphens:var(--kolibri-hyphens);font-family:var(--kolibri-font-family);line-height:var(--kolibri-line-height);word-break:break-word}.spin{display:inline-block;height:1rem;position:relative;width:3rem}.spin span{animation-timing-function:cubic-bezier(0, 1, 1, 0);border:0.1rem solid #fff;border-radius:50%;height:0.8rem;width:0.8rem;top:0.1rem;position:absolute}.spin span:nth-child(1){z-index:0;animation:spin1 2s infinite;left:0.1rem}.spin span:nth-child(2){z-index:1;animation:spin2 2s infinite;left:0.1rem}.spin span:nth-child(3){z-index:1;animation:spin2 2s infinite;left:1.1rem}.spin span:nth-child(4){z-index:0;animation:spin3 2s infinite;left:2.1rem}@keyframes spin1{0%{transform:scale(0)}100%{transform:scale(1)}}@keyframes spin2{0%{transform:translate(0, 0)}100%{transform:translate(1rem, 0)}}@keyframes spin3{0%{transform:scale(1)}100%{transform:scale(0)}}`,v=class{constructor(y){(0,d.r)(this,y),this.showToggled=!1,this._show=!1,this.state={}}render(){return(0,d.h)(d.H,null,this.state._show?(0,d.h)("span",{"aria-busy":"true","aria-label":"Aktion wird ausgef\xFChrt ...","aria-live":"polite",class:"spin",role:"alert"},(0,d.h)("span",{class:"bg-spin-1"}),(0,d.h)("span",{class:"bg-spin-2"}),(0,d.h)("span",{class:"bg-spin-3"}),(0,d.h)("span",{class:"bg-neutral"})):this.showToggled&&(0,d.h)("span",{"aria-label":"Aktion abgeschlossen","aria-busy":"false","aria-live":"polite",role:"alert"}))}validateShow(y){this.showToggled=this.state._show===!0&&this._show===!1,(0,f.b)(this,"_show",y)}componentWillLoad(){this.validateShow(this._show)}static get watchers(){return{_show:["validateShow"]}}};v.style={default:c}},"./node_modules/@public-ui/components/dist/esm/prop.validators-4cac744a.js":(I,x,h)=>{h.d(x,{K:()=>z,a:()=>P,b:()=>ge,c:()=>ve,d:()=>we,e:()=>he,f:()=>Z,g:()=>U,h:()=>ee,i:()=>_e,j:()=>g,k:()=>J,l:()=>R,m:()=>Se,n:()=>F,o:()=>H,p:()=>$,q:()=>V,r:()=>b,s:()=>D,t:()=>X,w:()=>be});var d=h("./node_modules/@public-ui/components/dist/esm/index.m-86dc8c44.js"),f=h("./node_modules/@public-ui/components/dist/esm/a11y.tipps-ff5a1a99.js"),c=h("./node_modules/@public-ui/components/dist/esm/dev.utils-daaf2f39.js"),v=h("./node_modules/@public-ui/components/dist/esm/index-d870d3e1.js");/*!
 * KoliBri - The accessible HTML-Standard
 */const y=(e,t)=>{t.forEach(o=>{e.has(o)===!1&&e.add(o)})},S=(e,t=document)=>{if(t instanceof Document||t instanceof HTMLElement||t instanceof ShadowRoot){const o=new Set;y(o,t.querySelectorAll(e));const r=t.querySelectorAll('[class*="hydrated"]');for(let a=0;a<r.length;a++){const n=r[a].shadowRoot;y(o,S(e,typeof n=="object"&&n!==null?n:r[a]))}return Array.from(o)}throw new Error("The parameter document for the method querySelectorAll is not type of Document, HTMLElement or ShadowRoot.")},_=(e,t=document)=>{if(t instanceof Document||t instanceof HTMLElement||t instanceof ShadowRoot){let o=t.querySelector(e);if(o===null){const r=t.querySelectorAll('[class*="hydrated"]');for(let a=0;a<r.length;a++){const n=r[a].shadowRoot;if(o=_(e,typeof n=="object"&&n!==null?n:r[a]),o!==null)break}}return o}throw new Error("The parameter document for the method querySelector is not type of Document, HTMLElement or ShadowRoot.")};var b=k,O=k,E=s,j=L,i=A,u=W;function k(e){var t=C(e);return t.length==3?t.concat(255):(t[3]=Math.round(t[3]),t)}function s(e){var t=C(e);return{r:t[0],g:t[1],b:t[2],a:t.length==3?255:Math.round(t[3])}}function L(e){var t=C(e);return t.length==3&&t.push(255),t[3]==255?"rgb("+t[0]+", "+t[1]+", "+t[2]+")":t[3]==0?"rgba("+t[0]+", "+t[1]+", "+t[2]+", 0)":"rgba("+t[0]+", "+t[1]+", "+t[2]+", "+String(t[3]/255).substr(1)+")"}function A(e){(t=C(e)).length==3&&t.push(255);var t,o=t[3]==255,r=T(t[0]),a=T(t[1]),n=T(t[2]),l=oe(r,a,n,t=T(Math.round(t[3])));return o?l?"#"+r.charAt(0)+a.charAt(0)+n.charAt(0):"#"+r+a+n:l?"#"+r.charAt(0)+a.charAt(0)+n.charAt(0)+t.charAt(0):"#"+r+a+n+t}function W(e){var t=C(e);return t.length==3?t.push(255):t[3]=Math.round(t[3]),(t[3]<<24>>>0|t[0]<<16|t[1]<<8|t[2])>>>0}function C(e){return typeof e=="string"?ae(e=e.toLowerCase())||ne(e)||ie(e)||de(e)||ue(e)||[0,0,0,255]:le(e)||se(e)||ce(e)||[0,0,0,255]}function T(e){var t=e.toString(16);return t.length==1?"0"+t:t}function oe(e,t,o,r){var a=["ff","00","11","22","33","44","55","66","77","88","99","aa","bb","cc","dd","ee"];return a.indexOf(e)!=-1&&a.indexOf(t)!=-1&&a.indexOf(o)!=-1&&a.indexOf(r)!=-1}function ae(e){return e=="red"?[255,0,0]:e=="green"?[0,255,0]:e=="blue"?[0,0,255]:e=="black"?[0,0,0]:e=="white"?[255,255,255]:e=="cyan"?[0,255,255]:e=="gray"||e=="grey"?[128,128,128]:e=="magenta"||e=="pink"?[255,0,255]:e=="yellow"?[255,255,0]:void 0}function N(e){return e.length==1?parseInt(e+e,16):parseInt(e,16)}function ne(e){var t=e.replace(/^#/,""),o=t.length;if(o==3||o==4){var r=N(t[0]),a=N(t[1]),n=N(t[2]),l=o==3?255:N(t[3]);return isNaN(r)||isNaN(a)||isNaN(n)||isNaN(l)?void 0:[r,a,n,l]}}function ie(e){var t=e.replace(/^#/,""),o=t.length;if(o==6||o==8){var r=N(t.slice(0,2)),a=N(t.slice(2,4)),n=N(t.slice(4,6)),l=o==6?255:N(t.slice(6,8));return isNaN(r)||isNaN(a)||isNaN(n)||isNaN(l)?void 0:[r,a,n,l]}}function m(e,t){return typeof e!="number"||t===!0&&Math.floor(e)!==e?-1:e>=0&&e<=255?e:-1}function le(e){if(Object.prototype.toString.call(e)==="[object Object]"&&Object.getPrototypeOf(e)===Object.getPrototypeOf({})){var t=m(e.r!=null?e.r:e.red!=null?e.red:0,!0),o=m(e.g!=null?e.g:e.green!=null?e.green:0,!0),r=m(e.b!=null?e.b:e.blue!=null?e.blue:0,!0),a=m(e.a!=null?e.a:e.alpha!=null?e.alpha:255,!0);if(t!=-1&&o!=-1&&r!=-1&&a!=-1)return[t,o,r,a]}}function se(e){if(Array.isArray(e)&&(e.length==3||e.length==4)){var t=m(e[0],!0),o=m(e[1],!0),r=m(e[2],!0),a=m(e[3]!=null?e[3]:255,!0);if(t!=-1&&o!=-1&&r!=-1&&a!=-1)return[t,o,r,a]}}function ce(e){if(typeof e=="number"&&Math.floor(e)==e&&e<=4294967295&&e>=0)return[e>>16&255,e>>8&255,255&e,e>>24&255]}function de(e){if(e.substr(0,4)=="rgb("){var t=(e=e.match(/^rgb\(([^)]+)\)/)[1]).split(/ *, */).map(Number),o=m(t[0],!0),r=m(t[1],!0),a=m(t[2],!0);if(o!=-1&&r!=-1&&a!=-1)return[o,r,a,255]}}function ue(e){if(e.substr(0,5)=="rgba("){var t=(e=e.match(/^rgba\(([^)]+)\)/)[1]).split(/ *, */).map(Number),o=m(t[0],!0),r=m(t[1],!0),a=m(t[2],!0),n=m(255*t[3]);if(o!=-1&&r!=-1&&a!=-1&&n!=-1)return[o,r,a,n]}}b.arr=O,b.obj=E,b.css=j,b.hex=i,b.num=u;const pe=/\[object Object\]/,H=(e,t)=>{typeof e=="string"&&pe.test(e)||t()},Z=(e,t)=>{typeof e=="string"&&e===""||t()},he=(e,t)=>{(0,c.b)()&&(console.log(e,t),(0,f.d)("\u2191 We propagate the (submit) event to this target.")),Object.defineProperty(e,"target",{value:t,writable:!1})},fe=e=>{var t,o,r;(t=e.nextHooks)===null||t===void 0||t.forEach((a,n)=>{var l;const M=a.get("beforePatch");typeof M=="function"&&M((l=e.nextState)===null||l===void 0?void 0:l.get(n),e.nextState,e,n)}),((o=e.nextState)===null||o===void 0?void 0:o.size)>0&&(e.state=Object.assign(Object.assign({},e.state),Object.fromEntries(e.nextState)),delete e.nextState,(r=e.nextHooks)===null||r===void 0||r.forEach((a,n)=>{const l=a.get("afterPatch");typeof l=="function"&&l(e.state[n],e.state,e,n)})),delete e.nextHooks},D=(e,t,o,r={})=>{var a,n;e.nextHooks===void 0&&(e.nextHooks=new Map),e.nextState===void 0&&(e.nextState=new Map),e.nextState.get(t)!==o&&(!(e.nextHooks.get(t)instanceof Map)&&e.nextHooks.set(t,new Map),typeof r.afterPatch=="function"&&((a=e.nextHooks.get(t))===null||a===void 0||a.set("afterPatch",r.afterPatch)),typeof r.beforePatch=="function"&&((n=e.nextHooks.get(t))===null||n===void 0||n.set("beforePatch",r.beforePatch)),e.nextState.set(t,o),fe(e))},me=(e,t,o,r)=>{(0,f.d)(`[${e.constructor.name}] Der Property-Wert (${o}) f\xFCr '${t}' ist nicht valide. Folgende Werte sind erlaubt: ${Array.from(r).join(", ")}`)},P=(e,t,o,r,a,n={})=>{o(a)?D(e,t,a,n==null?void 0:n.hooks):a===void 0||a===null&&((n==null?void 0:n.required)===void 0||(n==null?void 0:n.required)===!1)?D(e,t,n==null?void 0:n.defaultValue,n==null?void 0:n.hooks):((n==null?void 0:n.required)!==void 0&&(n==null?void 0:n.required)!==!1||r.add(null),me(e,t,a,r))},ge=(e,t,o,r)=>{P(e,t,a=>typeof a=="boolean",new Set(["Boolean {true, false}"]),o,r)},be=(e,t,o,r={})=>{const a=typeof r.minLength=="number"?r==null?void 0:r.minLength:0;P(e,t,n=>typeof n=="string"&&n.length>=a,new Set([`String (Mindestl\xE4nge ${a})`]),o,r)},we=(e,t,o,r)=>{P(e,t,a=>typeof a=="number"&&((r==null?void 0:r.min)===void 0||typeof(r==null?void 0:r.min)=="number"&&a>=r.min)&&((r==null?void 0:r.max)===void 0||typeof(r==null?void 0:r.max)=="number"&&a<=r.max),new Set(["Number"]),o,r)},ve=(e,t,o,r,a=l=>l==l,n={})=>{Z(r,()=>{H(r,()=>{r===void 0&&(r=[]);try{try{r=$(r)}catch(l){}if(Array.isArray(r)){const l=r.find(M=>!o(M));l===void 0&&a(r)?D(e,t,r,n.hooks):H(l,()=>{throw console.log(l),new Error("\u2191 Das Schema f\xFCr das Property (_options) ist nicht valide. Der Wert wird nicht ge\xE4ndert.")})}else H(r,()=>{throw console.log(r),new Error("\u2191 Das Schema f\xFCr das Property (_options) ist nicht valide. Der Wert wird nicht ge\xE4ndert.")})}catch(l){(0,f.d)("Known bug: Zeichenkettenliste (string[])")}})})},ye=/^(true|false)$/,ke=/^-?(0|[1-9]\d*)$/,xe=/^-?(0.|[1-9]\d*.)\d*[1-9]$/,Se=e=>{const t=typeof e,o=`${e}`;if(typeof e=="string"){if(ye.test(e))e=e==="true";else if(ke.test(e))e=parseInt(e);else if(xe.test(e))e=parseFloat(e);else if(q.test(e))try{e=$(e)}catch(r){}}return t!==typeof e&&(0,f.d)(`You have used a stringified property value (${o} to ${JSON.stringify(e)}) which type switched from ${t} to ${typeof e}!`),e},X=e=>{try{return JSON.stringify(e).replace(/"/g,"'")}catch(t){throw c.L.warn(["stringifyJson",e]),c.L.error("\u2191 Das JSON konnte nicht in einen String umgewandelt werden. Es wird ein stringifizierbares JSON erwartet."),new Error}},q=/^[{[]/,$=e=>{if(typeof e=="string")try{return JSON.parse(e)}catch(t){if(q.test(e))try{return JSON.parse(e.replace(/'/g,'"'))}catch(o){c.L.warn(["parseJson",e]),c.L.error("\u2191 Der JSON-String konnte nicht geparsed werden. Achten Sie darauf, dass einfache Anf\xFChrungszeichen im Text maskiert werden (&#8216;).")}}throw new Error},U=e=>typeof e=="boolean"?e===!0?"true":"false":void 0,_e=e=>typeof e=="string"?e:U(e),J=(e,t)=>_(e,t||(0,c.g)()),F=(e,t)=>S(e,t||(0,c.g)());let Y=null;const K=()=>(Y=Y||{backgroundColor:"#00000000",color:"#00000000",domNode:(0,c.g)().body,level:"Fail",score:1},Y),Q=/(\d+, ){3}0\)/,R=(e,t=K())=>{const o=getComputedStyle(e),r=Q.test(o.backgroundColor)?t.backgroundColor:b.hex(o.backgroundColor),a=Q.test(o.color)?t.color:b.hex(o.color),n=(0,d.s)(r,a),l={backgroundColor:r,color:a,domNode:e,level:(0,d.f)(n),score:n};return n<4.5&&c.L.error(["Color-Contrast-Error",{backgroundColor:l.backgroundColor,color:l.color,level:l.level,score:l.score},l.domNode]),l},V=(e,t=K())=>{t.domNode instanceof HTMLElement&&(t=R(t.domNode,t));const o=t.domNode.querySelector(e);if(o===null){const r=t.domNode.querySelectorAll('[class="hydrated"]');for(let a=0;a<r.length&&(t.domNode=r[a],(t=V(e,t)).domNode===null);a++);return t}return R(o,t)},G=(e,t=window)=>{e instanceof HTMLElement?(t.scrollTo({behavior:"smooth",top:e.getBoundingClientRect().top+(0,c.a)().pageYOffset-50}),e.focus()):(0,f.d)("Das HTMLElement ist nicht valide, zu dem gescrollt werden soll.")},ee=(e,t)=>{if((e instanceof Document||e instanceof HTMLElement||e instanceof ShadowRoot)&&typeof t=="string"){(0,f.d)("Bei der Methode querySelectorAll wurden die Parameter document, selector in selector, document getauscht, da der Parameter selector nicht, allerdings der Parameter document optional sein kann.");const o=`${t}`;t=e,e=o}if(typeof e=="string"){const o=J(e,t);o instanceof HTMLElement?G(o):(0,f.d)(`Es konnte kein HTMLElement mit dem Selector (${e}) gefunden werden, zu dem gescrollt werden soll.`)}else(0,f.d)("Der Selector ist nicht valide, zu dem gescrollt werden soll.")};class g{static queryHtmlElementColors(t,o,r=!1,a=!0){let n=null;if(r===!0||g.executionLock===!1)if(r===!1&&(g.cache.clear(),g.cache.set(o.domNode,o),g.executionLock=!0,a===!0&&c.L.debug("[KoliBriUtils] Color contrast analysis started...")),t===o.domNode)n=o;else{const l=new Set;if(o.domNode.shadowRoot){const p=o.domNode.shadowRoot.children;for(let w=0;w<p.length;w++)l.add(p[w])}const M=o.domNode;if(typeof M.assignedNodes=="function"){const p=M.assignedNodes();for(let w=0;w<p.length;w++)p[w]instanceof HTMLElement&&l.add(p[w])}const te=o.domNode.children;for(let p=0;p<te.length;p++)l.add(te[p]);const B=Array.from(l);for(let p=0;p<B.length;p++){let w=g.cache.get(B[p]);w===void 0&&(w=R(B[p],o)),g.cache.set(B[p],w);const re=g.queryHtmlElementColors(t,w,!0,!1);if(re!==null){n=re;break}}}else c.L.debug("[KoliBriUtils] Call aborted because a color contrast analysis is currently being executed.");return r===!1&&(a===!0&&c.L.debug(`[KoliBriUtils] Color contrast analysis finished (${g.cache.size} DOM elements are analysed).`),g.executionLock=!1,g.cache.clear()),n}}g.executionLock=!1,g.cache=new Map;class z{}z.patchTheme=v.p,z.patchThemeTag=v.a,z.querySelector=J,z.querySelectorAll=F,z.scrollByHTMLElement=G,z.scrollBySelector=ee,z.stringifyJson=X}}]);
