"use strict";(self.webpackChunk_public_ui_storybook=self.webpackChunk_public_ui_storybook||[]).push([[9941],{"./node_modules/@public-ui/components/dist/esm/a11y.tipps-ff5a1a99.js":(N,_,u)=>{u.d(_,{a:()=>g,b:()=>b,c:()=>s,d:()=>i,e:()=>d,f:()=>j,u:()=>S});var p=u("./node_modules/@public-ui/components/dist/esm/dev.utils-daaf2f39.js");/*!
 * KoliBri - The accessible HTML-Standard
 */const f=new Set,d=c=>{f.has(c)===!1&&(f.add(c),p.L.info(c,{classifier:"\u270Ba11y",overwriteStyle:"; background-color: #09f"}))},m=new Set,b=c=>{m.has(c)===!1&&(m.add(c),p.L.warn(c,{classifier:"\u{1F525}deprecated",forceLog:!0,overwriteStyle:"; background-color: #f00"}))},w=new Set,i=c=>{w.has(c)===!1&&(w.add(c),p.L.debug(c,{classifier:"\u{1F4BB}dev",overwriteStyle:"; background-color: #f09"}))},h=new Set,j=(c,L=!1)=>{h.has(c)===!1&&(h.add(c),c+=L===!0?" \u2705":"",p.L.debug(c,{classifier:"\u{1F31F}feature",overwriteStyle:"; background-color: #309"}))};i("Wir freuen uns \xFCber jedes Feedback, Kommentare, Screenshots oder Demo-Links von einer auf KoliBri-basierenden Anwendung (kolibri@itzbund.de). Vielen Dank!");const E=new Set,D=c=>{E.has(c)===!1&&(E.add(c),Log.debug(c,{classifier:"\u{1F4D1}ui/ux",overwriteStyle:"; background-color: #060;"}))},s=()=>{d(`"Disabled" schr\xE4nkt die Zug\xE4nglichkeit und Sichtbarkeit ein. Wir empfehlen aus Sicht der Barrierefreiheit readonly- statt disabled-Attribut zu verwenden.
- https://uxdesign.cc/is-it-ok-to-grey-out-disabled-buttons-8afa74a0fae`)},g=c=>{typeof c=="string"&&c!==""||d(`Manche Strukturelemente, wie bspw. der nav-Tag, k\xF6nnen mehrfach in einer Webseite verwendet werden. Damit die gleichnamigen Strukturelemente voneinander unterschieden werden k\xF6nnen, ist es erforderlich ein Aria-Label zu setzen.
- https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/Navigation_Role#accessibility_concerns`)},S=(c,L=8)=>{var C;L>7&&(C=`[${c}] Innerhalb von Navigationsstrukturen wird empfohlen nicht mehr als 7 Men\xFCpunkte zu verwenden.

Links:
- https://de.ryte.com/wiki/Millersche_Zahl
- https://de.wikipedia.org/wiki/Millersche_Zahl`,E.has(C)===!1&&(E.add(C),p.L.debug(C,{classifier:"\u{1F4D1}ui/ux",overwriteStyle:"; background-color: #060;"})))}},"./node_modules/@public-ui/components/dist/esm/controller-ad6bdf65.js":(N,_,u)=>{u.d(_,{a:()=>f,w:()=>d});var p=u("./node_modules/@public-ui/components/dist/esm/prop.validators-4cac744a.js");/*!
 * KoliBri - The accessible HTML-Standard
 */const f=(m,b,w)=>{(0,p.a)(m,b,i=>i==="button"||i==="reset"||i==="submit",new Set(["KoliBriButtonType {button, reset, submit}"]),w)},d=(m,b,w)=>{(0,p.a)(m,b,i=>i==="primary"||i==="secondary"||i==="normal"||i==="danger"||i==="ghost"||i==="custom",new Set(["KoliBriButtonVariant {primary, secondary, normal, danger, ghost, custom}"]),w,{defaultValue:"normal"})}},"./node_modules/@public-ui/components/dist/esm/index.m-86dc8c44.js":(N,_,u)=>{u.d(_,{f:()=>D,s:()=>E});/*!
 * KoliBri - The accessible HTML-Standard
 */var p=.2126,f=.7152,d=.0722,m=1/12.92;function b(s){return Math.pow((s+.055)/1.055,2.4)}function w(s){var g=s[0]/255,S=s[1]/255,c=s[2]/255,L=g<=.03928?g*m:b(g),C=S<=.03928?S*m:b(S),W=c<=.03928?c*m:b(c);return L*p+C*f+W*d}function i(s){var g=255;(s=s.replace(/^#/,"")).length===8&&(g=parseInt(s.slice(6,8),16),s=s.substring(0,6)),s.length===4&&(g=parseInt(s.slice(3,4).repeat(2),16),s=s.substring(0,3)),s.length===3&&(s=s[0]+s[0]+s[1]+s[1]+s[2]+s[2]);var S=parseInt(s,16);return[S>>16,S>>8&255,255&S,g]}function h(s,g){return(Math.max(s,g)+.05)/(Math.min(s,g)+.05)}function j(s,g){return h(w(s),w(g))}function E(s,g){return j(i(s),i(g))}function D(s){return s>=7?"AAA":s>=4.5?"AA":s>=3?"AA Large":"Fail"}},"./node_modules/@public-ui/components/dist/esm/kol-link-button.entry.js":(N,_,u)=>{u.r(_),u.d(_,{kol_link_button:()=>w});var p=u("./node_modules/@public-ui/components/dist/esm/index-a398b9f4.js"),f=u("./node_modules/@public-ui/components/dist/esm/prop.validators-4cac744a.js"),d=u("./node_modules/@public-ui/components/dist/esm/reuse-f9be4952.js"),m=u("./node_modules/@public-ui/components/dist/esm/controller-ad6bdf65.js");/*!
 * KoliBri - The accessible HTML-Standard
 */const b=`*,::before,::after{-webkit-box-sizing:border-box;box-sizing:border-box;border-width:0;border-style:solid;border-color:var(--kolibri-border-color)}*{--tw-ring-inset:var(--tw-empty, );--tw-ring-offset-width:0px;--tw-ring-offset-color:var(--kolibri-color);--tw-ring-color:rgba(undefined, 0.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000}:root{-moz-tab-size:4;-o-tab-size:4;tab-size:4}:-moz-focusring{outline:1px dotted ButtonText}:-moz-ui-invalid{box-shadow:none}::moz-focus-inner{border-style:none;padding:0}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}[type='search']{-webkit-appearance:textfield;outline-offset:-2px}abbr[title]{-webkit-text-decoration:underline dotted;text-decoration:underline dotted}a{color:inherit;text-decoration:inherit}body{margin:0;font-family:inherit;line-height:inherit}b,strong{font-weight:bolder}button,select{text-transform:none}button,[type='button'],[type='reset'],[type='submit']{-webkit-appearance:button}button{background-color:transparent;background-image:none}button,[role="button"]{cursor:pointer}code{font-size:1em;font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace}fieldset{margin:0;padding:0}html{-webkit-text-size-adjust:100%;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";line-height:1.5}h1,p,h2,h3,h4,h5,h6{margin:0}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}input,button,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0;padding:0;line-height:inherit;color:inherit}input::placeholder{opacity:1;color:#9ca3af}input::webkit-input-placeholder{opacity:1;color:#9ca3af}input::-moz-placeholder{opacity:1;color:#9ca3af}input:-ms-input-placeholder{opacity:1;color:#9ca3af}input::-ms-input-placeholder{opacity:1;color:#9ca3af}legend{padding:0}progress{vertical-align:baseline}small{font-size:80%}svg{display:block;vertical-align:middle}table{text-indent:0;border-color:inherit;border-collapse:collapse}textarea{resize:vertical}textarea::placeholder{opacity:1;color:#9ca3af}textarea::webkit-input-placeholder{opacity:1;color:#9ca3af}textarea::-moz-placeholder{opacity:1;color:#9ca3af}textarea:-ms-input-placeholder{opacity:1;color:#9ca3af}textarea::-ms-input-placeholder{opacity:1;color:#9ca3af}ul,ol{list-style:none;margin:0;padding:0}.container{width:100%}@media (min-width: 640px){.container{max-width:640px}}@media (min-width: 768px){.container{max-width:768px}}@media (min-width: 1024px){.container{max-width:1024px}}@media (min-width: 1280px){.container{max-width:1280px}}@media (min-width: 1536px){.container{max-width:1536px}}.bg-normal{background-color:var(--kolibri-color-normal)}.bg-white{--tw-bg-opacity:1;background-color:rgba(255, 255, 255, var(--tw-bg-opacity))}.bg-spin-1{background-color:var(--kolibri-color-spin-1)}.bg-spin-2{background-color:var(--kolibri-color-spin-2)}.bg-spin-3{background-color:var(--kolibri-color-spin-3)}.rounded{border-radius:var(--kolibri-border-radius)}.border-1{border-width:1px}.cursor-pointer{cursor:pointer}.block{display:block}.inline-block{display:inline-block}.flex{display:-webkit-box;display:-ms-flexbox;display:-webkit-flex;display:flex}.inline-flex{display:-webkit-inline-box;display:-ms-inline-flexbox;display:-webkit-inline-flex;display:inline-flex}.table{display:table}.grid{display:-ms-grid;display:grid}.hidden{display:none}.flex-wrap{-ms-flex-wrap:wrap;-webkit-flex-wrap:wrap;flex-wrap:wrap}.items-center{-webkit-box-align:center;-ms-flex-align:center;-webkit-align-items:center;align-items:center}.content-center{-ms-flex-line-pack:center;-webkit-align-content:center;align-content:center}.font-80{font-weight:80}.font-60{font-weight:60}.h-full{height:100%}.h-0{height:0px}.h-0\\.41c-2\\.42\\2c 0-4\\.82-1\\.57-4\\.82-3\\.58c0\\.05-0\\.98\\2c 0\\.43-1\\.91\\2c 1\\.07-2\\.65c0\\.3\\2c 0\\.05\\2c 0\\.61\\2c 0\\.09\\2c 0\\.92\\2c 0\\.09c1\\.1\\2c 0\\2c 1\\.69-0\\.58\\2c 1\\.74-1\\.16{height:0.29rem}.text-sm{font-size:0.875rem;line-height:1.25rem}.text-2xl{font-size:1.5rem;line-height:2rem}.text-lg{font-size:1.125rem;line-height:1.75rem}.leading-normal{line-height:1.5}.list-none{list-style-type:none}.list-disc{list-style-type:disc}.list-decimal{list-style-type:decimal}.mx-auto{margin-left:auto;margin-right:auto}.mb-1{margin-bottom:calc(1 * var(--kolibri-spacing))}.mt-2{margin-top:calc(2 * var(--kolibri-spacing))}.mt-4{margin-top:calc(4 * var(--kolibri-spacing))}.mr-2{margin-right:calc(2 * var(--kolibri-spacing))}.ml-2{margin-left:calc(2 * var(--kolibri-spacing))}.outline{outline-style:solid}.overflow-hidden{overflow:hidden}.overflow-y-visible{overflow-y:visible}.p-2{padding:calc(2 * var(--kolibri-spacing))}.p-4{padding:calc(4 * var(--kolibri-spacing))}.px{padding-left:1px;padding-right:1px}.py-2{padding-top:calc(2 * var(--kolibri-spacing));padding-bottom:calc(2 * var(--kolibri-spacing))}.pl-8{padding-left:2rem}.pb-2{padding-bottom:calc(2 * var(--kolibri-spacing))}.tab{-moz-tab-size:4;-o-tab-size:4;tab-size:4}.absolute{position:absolute}.text-center{text-align:center}.hover\\:text-primary:hover{color:var(--kolibri-color-primary)}.text-normal{color:var(--kolibri-color-normal)}.italic{font-style:italic}.underline{-webkit-text-decoration-line:underline;text-decoration-line:underline}.indent{text-indent:1.5rem}.visible{visibility:visible}.w-full{width:100%}.w-4\\/5{width:80%}.z-50{z-index:50}.gap-1{grid-gap:calc(1 * var(--kolibri-spacing));gap:calc(1 * var(--kolibri-spacing))}.gap-2{grid-gap:calc(2 * var(--kolibri-spacing));gap:calc(2 * var(--kolibri-spacing))}.grid-flow-col{grid-auto-flow:column}.transform{--tw-translate-x:0;--tw-translate-y:0;--tw-translate-z:0;--tw-rotate:0;--tw-rotate-x:0;--tw-rotate-y:0;--tw-rotate-z:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scale-z:1;-webkit-transform:translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) translateZ(var(--tw-translate-z)) rotate(var(--tw-rotate)) rotateX(var(--tw-rotate-x)) rotateY(var(--tw-rotate-y)) rotateZ(var(--tw-rotate-z)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)) scaleZ(var(--tw-scale-z));-ms-transform:translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) translateZ(var(--tw-translate-z)) rotate(var(--tw-rotate)) rotateX(var(--tw-rotate-x)) rotateY(var(--tw-rotate-y)) rotateZ(var(--tw-rotate-z)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)) scaleZ(var(--tw-scale-z));transform:translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) translateZ(var(--tw-translate-z)) rotate(var(--tw-rotate)) rotateX(var(--tw-rotate-x)) rotateY(var(--tw-rotate-y)) rotateZ(var(--tw-rotate-z)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)) scaleZ(var(--tw-scale-z))}.animate{-webkit-animation-iteration-count:1;animation-iteration-count:1}.filter{--tw-blur:var(--tw-empty, );--tw-brightness:var(--tw-empty, );--tw-contrast:var(--tw-empty, );--tw-grayscale:var(--tw-empty, );--tw-hue-rotate:var(--tw-empty, );--tw-invert:var(--tw-empty, );--tw-saturate:var(--tw-empty, );--tw-sepia:var(--tw-empty, );--tw-drop-shadow:var(--tw-empty, );-webkit-filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.blur{-webkit-backdrop-filter:blur(8px);backdrop-filter:blur(8px)}:host *{-ms-hyphens:var(--kolibri-hyphens);-webkit-hyphens:var(--kolibri-hyphens);hyphens:var(--kolibri-hyphens);font-family:var(--kolibri-font-family);line-height:var(--kolibri-line-height);word-break:break-word}`,w=class{constructor(i){(0,p.r)(this,i),this.catchRef=h=>{this.ref=h,(0,d.p)(this.host,this.ref)},this._ariaControls=void 0,this._ariaCurrent=void 0,this._ariaExpanded=void 0,this._ariaLabel=void 0,this._ariaSelected=void 0,this._customClass=void 0,this._disabled=!1,this._href="",this._icon=void 0,this._iconOnly=!1,this._label=void 0,this._role=void 0,this._tabIndex=void 0,this._target=void 0,this._targetDescription="Der Link wird in einem neuen Tab ge\xF6ffnet.",this._tooltipAlign="right",this._variant="normal",this.state={}}render(){return(0,p.h)(p.H,null,(0,p.h)("kol-link-wc",{ref:this.catchRef,class:{[this.state._variant]:this.state._variant!=="custom",[this.state._customClass]:this.state._variant==="custom"&&typeof this.state._customClass=="string"&&this.state._customClass.length>0},_ariaControls:this._ariaControls,_ariaCurrent:this._ariaCurrent,_ariaExpanded:this._ariaExpanded,_ariaLabel:this._ariaLabel,_ariaSelected:this._ariaSelected,_disabled:this._disabled,_href:this._href,_icon:this._icon,_iconOnly:this._iconOnly,_label:this._label,_role:this._role,_tabIndex:this._tabIndex,_target:this._target,_targetDescription:this._targetDescription,_tooltipAlign:this._tooltipAlign},(0,p.h)("slot",{name:"expert",slot:"expert"})))}validateCustomClass(i){(0,f.w)(this,"_customClass",i,{defaultValue:void 0})}validateVariant(i){(0,m.w)(this,"_variant",i)}componentWillLoad(){this.validateCustomClass(this._customClass),this.validateVariant(this._variant)}get host(){return(0,p.g)(this)}static get watchers(){return{_customClass:["validateCustomClass"],_variant:["validateVariant"]}}};w.style={default:b}},"./node_modules/@public-ui/components/dist/esm/prop.validators-4cac744a.js":(N,_,u)=>{u.d(_,{K:()=>O,a:()=>R,b:()=>bt,c:()=>vt,d:()=>wt,e:()=>pt,f:()=>Y,g:()=>X,h:()=>tt,i:()=>St,j:()=>k,k:()=>J,l:()=>B,m:()=>xt,n:()=>V,o:()=>P,p:()=>$,q:()=>G,r:()=>h,s:()=>H,t:()=>Z,w:()=>gt});var p=u("./node_modules/@public-ui/components/dist/esm/index.m-86dc8c44.js"),f=u("./node_modules/@public-ui/components/dist/esm/a11y.tipps-ff5a1a99.js"),d=u("./node_modules/@public-ui/components/dist/esm/dev.utils-daaf2f39.js"),m=u("./node_modules/@public-ui/components/dist/esm/index-d870d3e1.js");/*!
 * KoliBri - The accessible HTML-Standard
 */const b=(t,e)=>{e.forEach(o=>{t.has(o)===!1&&t.add(o)})},w=(t,e=document)=>{if(e instanceof Document||e instanceof HTMLElement||e instanceof ShadowRoot){const o=new Set;b(o,e.querySelectorAll(t));const r=e.querySelectorAll('[class*="hydrated"]');for(let a=0;a<r.length;a++){const n=r[a].shadowRoot;b(o,w(t,typeof n=="object"&&n!==null?n:r[a]))}return Array.from(o)}throw new Error("The parameter document for the method querySelectorAll is not type of Document, HTMLElement or ShadowRoot.")},i=(t,e=document)=>{if(e instanceof Document||e instanceof HTMLElement||e instanceof ShadowRoot){let o=e.querySelector(t);if(o===null){const r=e.querySelectorAll('[class*="hydrated"]');for(let a=0;a<r.length;a++){const n=r[a].shadowRoot;if(o=i(t,typeof n=="object"&&n!==null?n:r[a]),o!==null)break}}return o}throw new Error("The parameter document for the method querySelector is not type of Document, HTMLElement or ShadowRoot.")};var h=S,j=S,E=c,D=L,s=C,g=W;function S(t){var e=z(t);return e.length==3?e.concat(255):(e[3]=Math.round(e[3]),e)}function c(t){var e=z(t);return{r:e[0],g:e[1],b:e[2],a:e.length==3?255:Math.round(e[3])}}function L(t){var e=z(t);return e.length==3&&e.push(255),e[3]==255?"rgb("+e[0]+", "+e[1]+", "+e[2]+")":e[3]==0?"rgba("+e[0]+", "+e[1]+", "+e[2]+", 0)":"rgba("+e[0]+", "+e[1]+", "+e[2]+", "+String(e[3]/255).substr(1)+")"}function C(t){(e=z(t)).length==3&&e.push(255);var e,o=e[3]==255,r=T(e[0]),a=T(e[1]),n=T(e[2]),l=ot(r,a,n,e=T(Math.round(e[3])));return o?l?"#"+r.charAt(0)+a.charAt(0)+n.charAt(0):"#"+r+a+n:l?"#"+r.charAt(0)+a.charAt(0)+n.charAt(0)+e.charAt(0):"#"+r+a+n+e}function W(t){var e=z(t);return e.length==3?e.push(255):e[3]=Math.round(e[3]),(e[3]<<24>>>0|e[0]<<16|e[1]<<8|e[2])>>>0}function z(t){return typeof t=="string"?at(t=t.toLowerCase())||nt(t)||it(t)||dt(t)||ut(t)||[0,0,0,255]:st(t)||lt(t)||ct(t)||[0,0,0,255]}function T(t){var e=t.toString(16);return e.length==1?"0"+e:e}function ot(t,e,o,r){var a=["ff","00","11","22","33","44","55","66","77","88","99","aa","bb","cc","dd","ee"];return a.indexOf(t)!=-1&&a.indexOf(e)!=-1&&a.indexOf(o)!=-1&&a.indexOf(r)!=-1}function at(t){return t=="red"?[255,0,0]:t=="green"?[0,255,0]:t=="blue"?[0,0,255]:t=="black"?[0,0,0]:t=="white"?[255,255,255]:t=="cyan"?[0,255,255]:t=="gray"||t=="grey"?[128,128,128]:t=="magenta"||t=="pink"?[255,0,255]:t=="yellow"?[255,255,0]:void 0}function A(t){return t.length==1?parseInt(t+t,16):parseInt(t,16)}function nt(t){var e=t.replace(/^#/,""),o=e.length;if(o==3||o==4){var r=A(e[0]),a=A(e[1]),n=A(e[2]),l=o==3?255:A(e[3]);return isNaN(r)||isNaN(a)||isNaN(n)||isNaN(l)?void 0:[r,a,n,l]}}function it(t){var e=t.replace(/^#/,""),o=e.length;if(o==6||o==8){var r=A(e.slice(0,2)),a=A(e.slice(2,4)),n=A(e.slice(4,6)),l=o==6?255:A(e.slice(6,8));return isNaN(r)||isNaN(a)||isNaN(n)||isNaN(l)?void 0:[r,a,n,l]}}function y(t,e){return typeof t!="number"||e===!0&&Math.floor(t)!==t?-1:t>=0&&t<=255?t:-1}function st(t){if(Object.prototype.toString.call(t)==="[object Object]"&&Object.getPrototypeOf(t)===Object.getPrototypeOf({})){var e=y(t.r!=null?t.r:t.red!=null?t.red:0,!0),o=y(t.g!=null?t.g:t.green!=null?t.green:0,!0),r=y(t.b!=null?t.b:t.blue!=null?t.blue:0,!0),a=y(t.a!=null?t.a:t.alpha!=null?t.alpha:255,!0);if(e!=-1&&o!=-1&&r!=-1&&a!=-1)return[e,o,r,a]}}function lt(t){if(Array.isArray(t)&&(t.length==3||t.length==4)){var e=y(t[0],!0),o=y(t[1],!0),r=y(t[2],!0),a=y(t[3]!=null?t[3]:255,!0);if(e!=-1&&o!=-1&&r!=-1&&a!=-1)return[e,o,r,a]}}function ct(t){if(typeof t=="number"&&Math.floor(t)==t&&t<=4294967295&&t>=0)return[t>>16&255,t>>8&255,255&t,t>>24&255]}function dt(t){if(t.substr(0,4)=="rgb("){var e=(t=t.match(/^rgb\(([^)]+)\)/)[1]).split(/ *, */).map(Number),o=y(e[0],!0),r=y(e[1],!0),a=y(e[2],!0);if(o!=-1&&r!=-1&&a!=-1)return[o,r,a,255]}}function ut(t){if(t.substr(0,5)=="rgba("){var e=(t=t.match(/^rgba\(([^)]+)\)/)[1]).split(/ *, */).map(Number),o=y(e[0],!0),r=y(e[1],!0),a=y(e[2],!0),n=y(255*e[3]);if(o!=-1&&r!=-1&&a!=-1&&n!=-1)return[o,r,a,n]}}h.arr=j,h.obj=E,h.css=D,h.hex=s,h.num=g;const ht=/\[object Object\]/,P=(t,e)=>{typeof t=="string"&&ht.test(t)||e()},Y=(t,e)=>{typeof t=="string"&&t===""||e()},pt=(t,e)=>{(0,d.b)()&&(console.log(t,e),(0,f.d)("\u2191 We propagate the (submit) event to this target.")),Object.defineProperty(t,"target",{value:e,writable:!1})},ft=t=>{var e,o,r;(e=t.nextHooks)===null||e===void 0||e.forEach((a,n)=>{var l;const M=a.get("beforePatch");typeof M=="function"&&M((l=t.nextState)===null||l===void 0?void 0:l.get(n),t.nextState,t,n)}),((o=t.nextState)===null||o===void 0?void 0:o.size)>0&&(t.state=Object.assign(Object.assign({},t.state),Object.fromEntries(t.nextState)),delete t.nextState,(r=t.nextHooks)===null||r===void 0||r.forEach((a,n)=>{const l=a.get("afterPatch");typeof l=="function"&&l(t.state[n],t.state,t,n)})),delete t.nextHooks},H=(t,e,o,r={})=>{var a,n;t.nextHooks===void 0&&(t.nextHooks=new Map),t.nextState===void 0&&(t.nextState=new Map),t.nextState.get(e)!==o&&(!(t.nextHooks.get(e)instanceof Map)&&t.nextHooks.set(e,new Map),typeof r.afterPatch=="function"&&((a=t.nextHooks.get(e))===null||a===void 0||a.set("afterPatch",r.afterPatch)),typeof r.beforePatch=="function"&&((n=t.nextHooks.get(e))===null||n===void 0||n.set("beforePatch",r.beforePatch)),t.nextState.set(e,o),ft(t))},mt=(t,e,o,r)=>{(0,f.d)(`[${t.constructor.name}] Der Property-Wert (${o}) f\xFCr '${e}' ist nicht valide. Folgende Werte sind erlaubt: ${Array.from(r).join(", ")}`)},R=(t,e,o,r,a,n={})=>{o(a)?H(t,e,a,n==null?void 0:n.hooks):a===void 0||a===null&&((n==null?void 0:n.required)===void 0||(n==null?void 0:n.required)===!1)?H(t,e,n==null?void 0:n.defaultValue,n==null?void 0:n.hooks):((n==null?void 0:n.required)!==void 0&&(n==null?void 0:n.required)!==!1||r.add(null),mt(t,e,a,r))},bt=(t,e,o,r)=>{R(t,e,a=>typeof a=="boolean",new Set(["Boolean {true, false}"]),o,r)},gt=(t,e,o,r={})=>{const a=typeof r.minLength=="number"?r==null?void 0:r.minLength:0;R(t,e,n=>typeof n=="string"&&n.length>=a,new Set([`String (Mindestl\xE4nge ${a})`]),o,r)},wt=(t,e,o,r)=>{R(t,e,a=>typeof a=="number"&&((r==null?void 0:r.min)===void 0||typeof(r==null?void 0:r.min)=="number"&&a>=r.min)&&((r==null?void 0:r.max)===void 0||typeof(r==null?void 0:r.max)=="number"&&a<=r.max),new Set(["Number"]),o,r)},vt=(t,e,o,r,a=l=>l==l,n={})=>{Y(r,()=>{P(r,()=>{r===void 0&&(r=[]);try{try{r=$(r)}catch(l){}if(Array.isArray(r)){const l=r.find(M=>!o(M));l===void 0&&a(r)?H(t,e,r,n.hooks):P(l,()=>{throw console.log(l),new Error("\u2191 Das Schema f\xFCr das Property (_options) ist nicht valide. Der Wert wird nicht ge\xE4ndert.")})}else P(r,()=>{throw console.log(r),new Error("\u2191 Das Schema f\xFCr das Property (_options) ist nicht valide. Der Wert wird nicht ge\xE4ndert.")})}catch(l){(0,f.d)("Known bug: Zeichenkettenliste (string[])")}})})},yt=/^(true|false)$/,_t=/^-?(0|[1-9]\d*)$/,kt=/^-?(0.|[1-9]\d*.)\d*[1-9]$/,xt=t=>{const e=typeof t,o=`${t}`;if(typeof t=="string"){if(yt.test(t))t=t==="true";else if(_t.test(t))t=parseInt(t);else if(kt.test(t))t=parseFloat(t);else if(K.test(t))try{t=$(t)}catch(r){}}return e!==typeof t&&(0,f.d)(`You have used a stringified property value (${o} to ${JSON.stringify(t)}) which type switched from ${e} to ${typeof t}!`),t},Z=t=>{try{return JSON.stringify(t).replace(/"/g,"'")}catch(e){throw d.L.warn(["stringifyJson",t]),d.L.error("\u2191 Das JSON konnte nicht in einen String umgewandelt werden. Es wird ein stringifizierbares JSON erwartet."),new Error}},K=/^[{[]/,$=t=>{if(typeof t=="string")try{return JSON.parse(t)}catch(e){if(K.test(t))try{return JSON.parse(t.replace(/'/g,'"'))}catch(o){d.L.warn(["parseJson",t]),d.L.error("\u2191 Der JSON-String konnte nicht geparsed werden. Achten Sie darauf, dass einfache Anf\xFChrungszeichen im Text maskiert werden (&#8216;).")}}throw new Error},X=t=>typeof t=="boolean"?t===!0?"true":"false":void 0,St=t=>typeof t=="string"?t:X(t),J=(t,e)=>i(t,e||(0,d.g)()),V=(t,e)=>w(t,e||(0,d.g)());let U=null;const F=()=>(U=U||{backgroundColor:"#00000000",color:"#00000000",domNode:(0,d.g)().body,level:"Fail",score:1},U),q=/(\d+, ){3}0\)/,B=(t,e=F())=>{const o=getComputedStyle(t),r=q.test(o.backgroundColor)?e.backgroundColor:h.hex(o.backgroundColor),a=q.test(o.color)?e.color:h.hex(o.color),n=(0,p.s)(r,a),l={backgroundColor:r,color:a,domNode:t,level:(0,p.f)(n),score:n};return n<4.5&&d.L.error(["Color-Contrast-Error",{backgroundColor:l.backgroundColor,color:l.color,level:l.level,score:l.score},l.domNode]),l},G=(t,e=F())=>{e.domNode instanceof HTMLElement&&(e=B(e.domNode,e));const o=e.domNode.querySelector(t);if(o===null){const r=e.domNode.querySelectorAll('[class="hydrated"]');for(let a=0;a<r.length&&(e.domNode=r[a],(e=G(t,e)).domNode===null);a++);return e}return B(o,e)},Q=(t,e=window)=>{t instanceof HTMLElement?(e.scrollTo({behavior:"smooth",top:t.getBoundingClientRect().top+(0,d.a)().pageYOffset-50}),t.focus()):(0,f.d)("Das HTMLElement ist nicht valide, zu dem gescrollt werden soll.")},tt=(t,e)=>{if((t instanceof Document||t instanceof HTMLElement||t instanceof ShadowRoot)&&typeof e=="string"){(0,f.d)("Bei der Methode querySelectorAll wurden die Parameter document, selector in selector, document getauscht, da der Parameter selector nicht, allerdings der Parameter document optional sein kann.");const o=`${e}`;e=t,t=o}if(typeof t=="string"){const o=J(t,e);o instanceof HTMLElement?Q(o):(0,f.d)(`Es konnte kein HTMLElement mit dem Selector (${t}) gefunden werden, zu dem gescrollt werden soll.`)}else(0,f.d)("Der Selector ist nicht valide, zu dem gescrollt werden soll.")};class k{static queryHtmlElementColors(e,o,r=!1,a=!0){let n=null;if(r===!0||k.executionLock===!1)if(r===!1&&(k.cache.clear(),k.cache.set(o.domNode,o),k.executionLock=!0,a===!0&&d.L.debug("[KoliBriUtils] Color contrast analysis started...")),e===o.domNode)n=o;else{const l=new Set;if(o.domNode.shadowRoot){const v=o.domNode.shadowRoot.children;for(let x=0;x<v.length;x++)l.add(v[x])}const M=o.domNode;if(typeof M.assignedNodes=="function"){const v=M.assignedNodes();for(let x=0;x<v.length;x++)v[x]instanceof HTMLElement&&l.add(v[x])}const et=o.domNode.children;for(let v=0;v<et.length;v++)l.add(et[v]);const I=Array.from(l);for(let v=0;v<I.length;v++){let x=k.cache.get(I[v]);x===void 0&&(x=B(I[v],o)),k.cache.set(I[v],x);const rt=k.queryHtmlElementColors(e,x,!0,!1);if(rt!==null){n=rt;break}}}else d.L.debug("[KoliBriUtils] Call aborted because a color contrast analysis is currently being executed.");return r===!1&&(a===!0&&d.L.debug(`[KoliBriUtils] Color contrast analysis finished (${k.cache.size} DOM elements are analysed).`),k.executionLock=!1,k.cache.clear()),n}}k.executionLock=!1,k.cache=new Map;class O{}O.patchTheme=m.p,O.patchThemeTag=m.a,O.querySelector=J,O.querySelectorAll=V,O.scrollByHTMLElement=Q,O.scrollBySelector=tt,O.stringifyJson=Z},"./node_modules/@public-ui/components/dist/esm/reuse-f9be4952.js":(N,_,u)=>{u.d(_,{p:()=>f});var p=u("./node_modules/@public-ui/components/dist/esm/validator-8ee8737c.js");/*!
 * KoliBri - The accessible HTML-Standard
 */const f=(d,m)=>{(0,p.i)(d)&&d&&(d.focus=b=>m==null?void 0:m.focus(b))}},"./node_modules/@public-ui/components/dist/esm/validator-8ee8737c.js":(N,_,u)=>{u.d(_,{S:()=>w,a:()=>f,b:()=>d,c:()=>b,i:()=>p});/*!
 * KoliBri - The accessible HTML-Standard
 */const p=i=>typeof i=="object"&&i!==null,f=(i,h=0)=>typeof i=="string"&&i.length>=h,d=i=>{if(typeof i!="object"||i===null)return f(i,1);for(const h in i)if(f(h,1)===!1)return!1;return!0},m=(i,h)=>h.length===0&&new RegExp(`^${i}`).test(h),b=(i,h)=>h.length===0||m(i,h),w=new Event("StateChange")}}]);
