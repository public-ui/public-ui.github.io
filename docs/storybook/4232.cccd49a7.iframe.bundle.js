"use strict";(self.webpackChunk_public_ui_storybook=self.webpackChunk_public_ui_storybook||[]).push([[4232],{"./node_modules/@public-ui/components/dist/esm/a11y.tipps-ff5a1a99.js":(C,S,d)=>{d.d(S,{a:()=>p,b:()=>x,c:()=>i,d:()=>m,e:()=>c,f:()=>j,u:()=>_});var u=d("./node_modules/@public-ui/components/dist/esm/dev.utils-daaf2f39.js");/*!
 * KoliBri - The accessible HTML-Standard
 */const h=new Set,c=s=>{h.has(s)===!1&&(h.add(s),u.L.info(s,{classifier:"\u270Ba11y",overwriteStyle:"; background-color: #09f"}))},v=new Set,x=s=>{v.has(s)===!1&&(v.add(s),u.L.warn(s,{classifier:"\u{1F525}deprecated",forceLog:!0,overwriteStyle:"; background-color: #f00"}))},f=new Set,m=s=>{f.has(s)===!1&&(f.add(s),u.L.debug(s,{classifier:"\u{1F4BB}dev",overwriteStyle:"; background-color: #f09"}))},y=new Set,j=(s,N=!1)=>{y.has(s)===!1&&(y.add(s),s+=N===!0?" \u2705":"",u.L.debug(s,{classifier:"\u{1F31F}feature",overwriteStyle:"; background-color: #309"}))};m("Wir freuen uns \xFCber jedes Feedback, Kommentare, Screenshots oder Demo-Links von einer auf KoliBri-basierenden Anwendung (kolibri@itzbund.de). Vielen Dank!");const A=new Set,T=s=>{A.has(s)===!1&&(A.add(s),Log.debug(s,{classifier:"\u{1F4D1}ui/ux",overwriteStyle:"; background-color: #060;"}))},i=()=>{c(`"Disabled" schr\xE4nkt die Zug\xE4nglichkeit und Sichtbarkeit ein. Wir empfehlen aus Sicht der Barrierefreiheit readonly- statt disabled-Attribut zu verwenden.
- https://uxdesign.cc/is-it-ok-to-grey-out-disabled-buttons-8afa74a0fae`)},p=s=>{typeof s=="string"&&s!==""||c(`Manche Strukturelemente, wie bspw. der nav-Tag, k\xF6nnen mehrfach in einer Webseite verwendet werden. Damit die gleichnamigen Strukturelemente voneinander unterschieden werden k\xF6nnen, ist es erforderlich ein Aria-Label zu setzen.
- https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/Navigation_Role#accessibility_concerns`)},_=(s,N=8)=>{var E;N>7&&(E=`[${s}] Innerhalb von Navigationsstrukturen wird empfohlen nicht mehr als 7 Men\xFCpunkte zu verwenden.

Links:
- https://de.ryte.com/wiki/Millersche_Zahl
- https://de.wikipedia.org/wiki/Millersche_Zahl`,A.has(E)===!1&&(A.add(E),u.L.debug(E,{classifier:"\u{1F4D1}ui/ux",overwriteStyle:"; background-color: #060;"})))}},"./node_modules/@public-ui/components/dist/esm/button-link-7b1c4be0.js":(C,S,d)=>{d.d(S,{w:()=>h});var u=d("./node_modules/@public-ui/components/dist/esm/prop.validators-4cac744a.js");/*!
 * KoliBri - The accessible HTML-Standard
 */const h=(c,v,x)=>{(0,u.a)(c,v,f=>f==="top"||f==="right"||f==="bottom"||f==="left",new Set(["TooltipAlignment {top, right, buttom, left}"]),x,{defaultValue:"top"})}},"./node_modules/@public-ui/components/dist/esm/index.m-86dc8c44.js":(C,S,d)=>{d.d(S,{f:()=>T,s:()=>A});/*!
 * KoliBri - The accessible HTML-Standard
 */var u=.2126,h=.7152,c=.0722,v=1/12.92;function x(i){return Math.pow((i+.055)/1.055,2.4)}function f(i){var p=i[0]/255,_=i[1]/255,s=i[2]/255,N=p<=.03928?p*v:x(p),E=_<=.03928?_*v:x(_),W=s<=.03928?s*v:x(s);return N*u+E*h+W*c}function m(i){var p=255;(i=i.replace(/^#/,"")).length===8&&(p=parseInt(i.slice(6,8),16),i=i.substring(0,6)),i.length===4&&(p=parseInt(i.slice(3,4).repeat(2),16),i=i.substring(0,3)),i.length===3&&(i=i[0]+i[0]+i[1]+i[1]+i[2]+i[2]);var _=parseInt(i,16);return[_>>16,_>>8&255,255&_,p]}function y(i,p){return(Math.max(i,p)+.05)/(Math.min(i,p)+.05)}function j(i,p){return y(f(i),f(p))}function A(i,p){return j(m(i),m(p))}function T(i){return i>=7?"AAA":i>=4.5?"AA":i>=3?"AA Large":"Fail"}},"./node_modules/@public-ui/components/dist/esm/kol-abbr.entry.js":(C,S,d)=>{d.r(S),d.d(S,{kol_abbr:()=>f});var u=d("./node_modules/@public-ui/components/dist/esm/index-a398b9f4.js"),h=d("./node_modules/@public-ui/components/dist/esm/button-link-7b1c4be0.js"),c=d("./node_modules/@public-ui/components/dist/esm/dev.utils-daaf2f39.js"),v=d("./node_modules/@public-ui/components/dist/esm/prop.validators-4cac744a.js");/*!
 * KoliBri - The accessible HTML-Standard
 */const x=`*,::before,::after{-webkit-box-sizing:border-box;box-sizing:border-box;border-width:0;border-style:solid;border-color:var(--kolibri-border-color)}*{--tw-ring-inset:var(--tw-empty, );--tw-ring-offset-width:0px;--tw-ring-offset-color:var(--kolibri-color);--tw-ring-color:rgba(undefined, 0.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000}:root{-moz-tab-size:4;-o-tab-size:4;tab-size:4}:-moz-focusring{outline:1px dotted ButtonText}:-moz-ui-invalid{box-shadow:none}::moz-focus-inner{border-style:none;padding:0}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}[type='search']{-webkit-appearance:textfield;outline-offset:-2px}abbr[title]{-webkit-text-decoration:underline dotted;text-decoration:underline dotted}a{color:inherit;text-decoration:inherit}body{margin:0;font-family:inherit;line-height:inherit}b,strong{font-weight:bolder}button,select{text-transform:none}button,[type='button'],[type='reset'],[type='submit']{-webkit-appearance:button}button{background-color:transparent;background-image:none}button,[role="button"]{cursor:pointer}code{font-size:1em;font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace}fieldset{margin:0;padding:0}html{-webkit-text-size-adjust:100%;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";line-height:1.5}h1,p,h2,h3,h4,h5,h6{margin:0}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}input,button,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0;padding:0;line-height:inherit;color:inherit}input::placeholder{opacity:1;color:#9ca3af}input::webkit-input-placeholder{opacity:1;color:#9ca3af}input::-moz-placeholder{opacity:1;color:#9ca3af}input:-ms-input-placeholder{opacity:1;color:#9ca3af}input::-ms-input-placeholder{opacity:1;color:#9ca3af}legend{padding:0}progress{vertical-align:baseline}small{font-size:80%}svg{display:block;vertical-align:middle}table{text-indent:0;border-color:inherit;border-collapse:collapse}textarea{resize:vertical}textarea::placeholder{opacity:1;color:#9ca3af}textarea::webkit-input-placeholder{opacity:1;color:#9ca3af}textarea::-moz-placeholder{opacity:1;color:#9ca3af}textarea:-ms-input-placeholder{opacity:1;color:#9ca3af}textarea::-ms-input-placeholder{opacity:1;color:#9ca3af}ul,ol{list-style:none;margin:0;padding:0}.container{width:100%}@media (min-width: 640px){.container{max-width:640px}}@media (min-width: 768px){.container{max-width:768px}}@media (min-width: 1024px){.container{max-width:1024px}}@media (min-width: 1280px){.container{max-width:1280px}}@media (min-width: 1536px){.container{max-width:1536px}}.bg-normal{background-color:var(--kolibri-color-normal)}.bg-white{--tw-bg-opacity:1;background-color:rgba(255, 255, 255, var(--tw-bg-opacity))}.bg-spin-1{background-color:var(--kolibri-color-spin-1)}.bg-spin-2{background-color:var(--kolibri-color-spin-2)}.bg-spin-3{background-color:var(--kolibri-color-spin-3)}.rounded{border-radius:var(--kolibri-border-radius)}.border-1{border-width:1px}.cursor-pointer{cursor:pointer}.block{display:block}.inline-block{display:inline-block}.flex{display:-webkit-box;display:-ms-flexbox;display:-webkit-flex;display:flex}.inline-flex{display:-webkit-inline-box;display:-ms-inline-flexbox;display:-webkit-inline-flex;display:inline-flex}.table{display:table}.grid{display:-ms-grid;display:grid}.hidden{display:none}.flex-wrap{-ms-flex-wrap:wrap;-webkit-flex-wrap:wrap;flex-wrap:wrap}.items-center{-webkit-box-align:center;-ms-flex-align:center;-webkit-align-items:center;align-items:center}.content-center{-ms-flex-line-pack:center;-webkit-align-content:center;align-content:center}.font-80{font-weight:80}.font-60{font-weight:60}.h-full{height:100%}.h-0{height:0px}.h-0\\.41c-2\\.42\\2c 0-4\\.82-1\\.57-4\\.82-3\\.58c0\\.05-0\\.98\\2c 0\\.43-1\\.91\\2c 1\\.07-2\\.65c0\\.3\\2c 0\\.05\\2c 0\\.61\\2c 0\\.09\\2c 0\\.92\\2c 0\\.09c1\\.1\\2c 0\\2c 1\\.69-0\\.58\\2c 1\\.74-1\\.16{height:0.29rem}.text-sm{font-size:0.875rem;line-height:1.25rem}.text-2xl{font-size:1.5rem;line-height:2rem}.text-lg{font-size:1.125rem;line-height:1.75rem}.leading-normal{line-height:1.5}.list-none{list-style-type:none}.list-disc{list-style-type:disc}.list-decimal{list-style-type:decimal}.mx-auto{margin-left:auto;margin-right:auto}.mb-1{margin-bottom:calc(1 * var(--kolibri-spacing))}.mt-2{margin-top:calc(2 * var(--kolibri-spacing))}.mt-4{margin-top:calc(4 * var(--kolibri-spacing))}.mr-2{margin-right:calc(2 * var(--kolibri-spacing))}.ml-2{margin-left:calc(2 * var(--kolibri-spacing))}.outline{outline-style:solid}.overflow-hidden{overflow:hidden}.overflow-y-visible{overflow-y:visible}.p-2{padding:calc(2 * var(--kolibri-spacing))}.p-4{padding:calc(4 * var(--kolibri-spacing))}.px{padding-left:1px;padding-right:1px}.py-2{padding-top:calc(2 * var(--kolibri-spacing));padding-bottom:calc(2 * var(--kolibri-spacing))}.pl-8{padding-left:2rem}.pb-2{padding-bottom:calc(2 * var(--kolibri-spacing))}.tab{-moz-tab-size:4;-o-tab-size:4;tab-size:4}.absolute{position:absolute}.text-center{text-align:center}.hover\\:text-primary:hover{color:var(--kolibri-color-primary)}.text-normal{color:var(--kolibri-color-normal)}.italic{font-style:italic}.underline{-webkit-text-decoration-line:underline;text-decoration-line:underline}.indent{text-indent:1.5rem}.visible{visibility:visible}.w-full{width:100%}.w-4\\/5{width:80%}.z-50{z-index:50}.gap-1{grid-gap:calc(1 * var(--kolibri-spacing));gap:calc(1 * var(--kolibri-spacing))}.gap-2{grid-gap:calc(2 * var(--kolibri-spacing));gap:calc(2 * var(--kolibri-spacing))}.grid-flow-col{grid-auto-flow:column}.transform{--tw-translate-x:0;--tw-translate-y:0;--tw-translate-z:0;--tw-rotate:0;--tw-rotate-x:0;--tw-rotate-y:0;--tw-rotate-z:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scale-z:1;-webkit-transform:translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) translateZ(var(--tw-translate-z)) rotate(var(--tw-rotate)) rotateX(var(--tw-rotate-x)) rotateY(var(--tw-rotate-y)) rotateZ(var(--tw-rotate-z)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)) scaleZ(var(--tw-scale-z));-ms-transform:translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) translateZ(var(--tw-translate-z)) rotate(var(--tw-rotate)) rotateX(var(--tw-rotate-x)) rotateY(var(--tw-rotate-y)) rotateZ(var(--tw-rotate-z)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)) scaleZ(var(--tw-scale-z));transform:translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) translateZ(var(--tw-translate-z)) rotate(var(--tw-rotate)) rotateX(var(--tw-rotate-x)) rotateY(var(--tw-rotate-y)) rotateZ(var(--tw-rotate-z)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)) scaleZ(var(--tw-scale-z))}.animate{-webkit-animation-iteration-count:1;animation-iteration-count:1}.filter{--tw-blur:var(--tw-empty, );--tw-brightness:var(--tw-empty, );--tw-contrast:var(--tw-empty, );--tw-grayscale:var(--tw-empty, );--tw-hue-rotate:var(--tw-empty, );--tw-invert:var(--tw-empty, );--tw-saturate:var(--tw-empty, );--tw-sepia:var(--tw-empty, );--tw-drop-shadow:var(--tw-empty, );-webkit-filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.blur{-webkit-backdrop-filter:blur(8px);backdrop-filter:blur(8px)}:host *{-ms-hyphens:var(--kolibri-hyphens);-webkit-hyphens:var(--kolibri-hyphens);hyphens:var(--kolibri-hyphens);font-family:var(--kolibri-font-family);line-height:var(--kolibri-line-height);word-break:break-word}:host abbr{cursor:help}`,f=class{constructor(m){(0,u.r)(this,m),this.nonce=(0,c.n)(),this._tooltipAlign="top",this._title=void 0,this.state={_title:"",_tooltipAlign:"top"}}render(){return(0,u.h)(u.H,{style:{display:"inline-block"}},(0,u.h)("abbr",{"aria-labelledby":this.nonce,role:"definition",title:this.state._title},(0,u.h)("span",{title:""},(0,u.h)("slot",null))),(0,u.h)("kol-tooltip",{_align:this.state._tooltipAlign,_id:this.nonce,_label:this.state._title}))}validateTitle(m){(0,v.w)(this,"_title",m,{required:!0})}validateTooltipAlign(m){(0,h.w)(this,"_tooltipAlign",m)}componentWillLoad(){this.validateTitle(this._title),this.validateTooltipAlign(this._tooltipAlign)}static get watchers(){return{_title:["validateTitle"],_tooltipAlign:["validateTooltipAlign"]}}};f.style={default:x}},"./node_modules/@public-ui/components/dist/esm/prop.validators-4cac744a.js":(C,S,d)=>{d.d(S,{K:()=>L,a:()=>R,b:()=>gt,c:()=>vt,d:()=>wt,e:()=>ht,f:()=>Z,g:()=>q,h:()=>tt,i:()=>St,j:()=>w,k:()=>J,l:()=>B,m:()=>_t,n:()=>K,o:()=>P,p:()=>$,q:()=>Q,r:()=>y,s:()=>H,t:()=>U,w:()=>mt});var u=d("./node_modules/@public-ui/components/dist/esm/index.m-86dc8c44.js"),h=d("./node_modules/@public-ui/components/dist/esm/a11y.tipps-ff5a1a99.js"),c=d("./node_modules/@public-ui/components/dist/esm/dev.utils-daaf2f39.js"),v=d("./node_modules/@public-ui/components/dist/esm/index-d870d3e1.js");/*!
 * KoliBri - The accessible HTML-Standard
 */const x=(t,e)=>{e.forEach(o=>{t.has(o)===!1&&t.add(o)})},f=(t,e=document)=>{if(e instanceof Document||e instanceof HTMLElement||e instanceof ShadowRoot){const o=new Set;x(o,e.querySelectorAll(t));const r=e.querySelectorAll('[class*="hydrated"]');for(let a=0;a<r.length;a++){const n=r[a].shadowRoot;x(o,f(t,typeof n=="object"&&n!==null?n:r[a]))}return Array.from(o)}throw new Error("The parameter document for the method querySelectorAll is not type of Document, HTMLElement or ShadowRoot.")},m=(t,e=document)=>{if(e instanceof Document||e instanceof HTMLElement||e instanceof ShadowRoot){let o=e.querySelector(t);if(o===null){const r=e.querySelectorAll('[class*="hydrated"]');for(let a=0;a<r.length;a++){const n=r[a].shadowRoot;if(o=m(t,typeof n=="object"&&n!==null?n:r[a]),o!==null)break}}return o}throw new Error("The parameter document for the method querySelector is not type of Document, HTMLElement or ShadowRoot.")};var y=_,j=_,A=s,T=N,i=E,p=W;function _(t){var e=z(t);return e.length==3?e.concat(255):(e[3]=Math.round(e[3]),e)}function s(t){var e=z(t);return{r:e[0],g:e[1],b:e[2],a:e.length==3?255:Math.round(e[3])}}function N(t){var e=z(t);return e.length==3&&e.push(255),e[3]==255?"rgb("+e[0]+", "+e[1]+", "+e[2]+")":e[3]==0?"rgba("+e[0]+", "+e[1]+", "+e[2]+", 0)":"rgba("+e[0]+", "+e[1]+", "+e[2]+", "+String(e[3]/255).substr(1)+")"}function E(t){(e=z(t)).length==3&&e.push(255);var e,o=e[3]==255,r=D(e[0]),a=D(e[1]),n=D(e[2]),l=ot(r,a,n,e=D(Math.round(e[3])));return o?l?"#"+r.charAt(0)+a.charAt(0)+n.charAt(0):"#"+r+a+n:l?"#"+r.charAt(0)+a.charAt(0)+n.charAt(0)+e.charAt(0):"#"+r+a+n+e}function W(t){var e=z(t);return e.length==3?e.push(255):e[3]=Math.round(e[3]),(e[3]<<24>>>0|e[0]<<16|e[1]<<8|e[2])>>>0}function z(t){return typeof t=="string"?at(t=t.toLowerCase())||nt(t)||it(t)||dt(t)||ut(t)||[0,0,0,255]:lt(t)||st(t)||ct(t)||[0,0,0,255]}function D(t){var e=t.toString(16);return e.length==1?"0"+e:e}function ot(t,e,o,r){var a=["ff","00","11","22","33","44","55","66","77","88","99","aa","bb","cc","dd","ee"];return a.indexOf(t)!=-1&&a.indexOf(e)!=-1&&a.indexOf(o)!=-1&&a.indexOf(r)!=-1}function at(t){return t=="red"?[255,0,0]:t=="green"?[0,255,0]:t=="blue"?[0,0,255]:t=="black"?[0,0,0]:t=="white"?[255,255,255]:t=="cyan"?[0,255,255]:t=="gray"||t=="grey"?[128,128,128]:t=="magenta"||t=="pink"?[255,0,255]:t=="yellow"?[255,255,0]:void 0}function M(t){return t.length==1?parseInt(t+t,16):parseInt(t,16)}function nt(t){var e=t.replace(/^#/,""),o=e.length;if(o==3||o==4){var r=M(e[0]),a=M(e[1]),n=M(e[2]),l=o==3?255:M(e[3]);return isNaN(r)||isNaN(a)||isNaN(n)||isNaN(l)?void 0:[r,a,n,l]}}function it(t){var e=t.replace(/^#/,""),o=e.length;if(o==6||o==8){var r=M(e.slice(0,2)),a=M(e.slice(2,4)),n=M(e.slice(4,6)),l=o==6?255:M(e.slice(6,8));return isNaN(r)||isNaN(a)||isNaN(n)||isNaN(l)?void 0:[r,a,n,l]}}function g(t,e){return typeof t!="number"||e===!0&&Math.floor(t)!==t?-1:t>=0&&t<=255?t:-1}function lt(t){if(Object.prototype.toString.call(t)==="[object Object]"&&Object.getPrototypeOf(t)===Object.getPrototypeOf({})){var e=g(t.r!=null?t.r:t.red!=null?t.red:0,!0),o=g(t.g!=null?t.g:t.green!=null?t.green:0,!0),r=g(t.b!=null?t.b:t.blue!=null?t.blue:0,!0),a=g(t.a!=null?t.a:t.alpha!=null?t.alpha:255,!0);if(e!=-1&&o!=-1&&r!=-1&&a!=-1)return[e,o,r,a]}}function st(t){if(Array.isArray(t)&&(t.length==3||t.length==4)){var e=g(t[0],!0),o=g(t[1],!0),r=g(t[2],!0),a=g(t[3]!=null?t[3]:255,!0);if(e!=-1&&o!=-1&&r!=-1&&a!=-1)return[e,o,r,a]}}function ct(t){if(typeof t=="number"&&Math.floor(t)==t&&t<=4294967295&&t>=0)return[t>>16&255,t>>8&255,255&t,t>>24&255]}function dt(t){if(t.substr(0,4)=="rgb("){var e=(t=t.match(/^rgb\(([^)]+)\)/)[1]).split(/ *, */).map(Number),o=g(e[0],!0),r=g(e[1],!0),a=g(e[2],!0);if(o!=-1&&r!=-1&&a!=-1)return[o,r,a,255]}}function ut(t){if(t.substr(0,5)=="rgba("){var e=(t=t.match(/^rgba\(([^)]+)\)/)[1]).split(/ *, */).map(Number),o=g(e[0],!0),r=g(e[1],!0),a=g(e[2],!0),n=g(255*e[3]);if(o!=-1&&r!=-1&&a!=-1&&n!=-1)return[o,r,a,n]}}y.arr=j,y.obj=A,y.css=T,y.hex=i,y.num=p;const pt=/\[object Object\]/,P=(t,e)=>{typeof t=="string"&&pt.test(t)||e()},Z=(t,e)=>{typeof t=="string"&&t===""||e()},ht=(t,e)=>{(0,c.b)()&&(console.log(t,e),(0,h.d)("\u2191 We propagate the (submit) event to this target.")),Object.defineProperty(t,"target",{value:e,writable:!1})},ft=t=>{var e,o,r;(e=t.nextHooks)===null||e===void 0||e.forEach((a,n)=>{var l;const O=a.get("beforePatch");typeof O=="function"&&O((l=t.nextState)===null||l===void 0?void 0:l.get(n),t.nextState,t,n)}),((o=t.nextState)===null||o===void 0?void 0:o.size)>0&&(t.state=Object.assign(Object.assign({},t.state),Object.fromEntries(t.nextState)),delete t.nextState,(r=t.nextHooks)===null||r===void 0||r.forEach((a,n)=>{const l=a.get("afterPatch");typeof l=="function"&&l(t.state[n],t.state,t,n)})),delete t.nextHooks},H=(t,e,o,r={})=>{var a,n;t.nextHooks===void 0&&(t.nextHooks=new Map),t.nextState===void 0&&(t.nextState=new Map),t.nextState.get(e)!==o&&(!(t.nextHooks.get(e)instanceof Map)&&t.nextHooks.set(e,new Map),typeof r.afterPatch=="function"&&((a=t.nextHooks.get(e))===null||a===void 0||a.set("afterPatch",r.afterPatch)),typeof r.beforePatch=="function"&&((n=t.nextHooks.get(e))===null||n===void 0||n.set("beforePatch",r.beforePatch)),t.nextState.set(e,o),ft(t))},bt=(t,e,o,r)=>{(0,h.d)(`[${t.constructor.name}] Der Property-Wert (${o}) f\xFCr '${e}' ist nicht valide. Folgende Werte sind erlaubt: ${Array.from(r).join(", ")}`)},R=(t,e,o,r,a,n={})=>{o(a)?H(t,e,a,n==null?void 0:n.hooks):a===void 0||a===null&&((n==null?void 0:n.required)===void 0||(n==null?void 0:n.required)===!1)?H(t,e,n==null?void 0:n.defaultValue,n==null?void 0:n.hooks):((n==null?void 0:n.required)!==void 0&&(n==null?void 0:n.required)!==!1||r.add(null),bt(t,e,a,r))},gt=(t,e,o,r)=>{R(t,e,a=>typeof a=="boolean",new Set(["Boolean {true, false}"]),o,r)},mt=(t,e,o,r={})=>{const a=typeof r.minLength=="number"?r==null?void 0:r.minLength:0;R(t,e,n=>typeof n=="string"&&n.length>=a,new Set([`String (Mindestl\xE4nge ${a})`]),o,r)},wt=(t,e,o,r)=>{R(t,e,a=>typeof a=="number"&&((r==null?void 0:r.min)===void 0||typeof(r==null?void 0:r.min)=="number"&&a>=r.min)&&((r==null?void 0:r.max)===void 0||typeof(r==null?void 0:r.max)=="number"&&a<=r.max),new Set(["Number"]),o,r)},vt=(t,e,o,r,a=l=>l==l,n={})=>{Z(r,()=>{P(r,()=>{r===void 0&&(r=[]);try{try{r=$(r)}catch(l){}if(Array.isArray(r)){const l=r.find(O=>!o(O));l===void 0&&a(r)?H(t,e,r,n.hooks):P(l,()=>{throw console.log(l),new Error("\u2191 Das Schema f\xFCr das Property (_options) ist nicht valide. Der Wert wird nicht ge\xE4ndert.")})}else P(r,()=>{throw console.log(r),new Error("\u2191 Das Schema f\xFCr das Property (_options) ist nicht valide. Der Wert wird nicht ge\xE4ndert.")})}catch(l){(0,h.d)("Known bug: Zeichenkettenliste (string[])")}})})},yt=/^(true|false)$/,kt=/^-?(0|[1-9]\d*)$/,xt=/^-?(0.|[1-9]\d*.)\d*[1-9]$/,_t=t=>{const e=typeof t,o=`${t}`;if(typeof t=="string"){if(yt.test(t))t=t==="true";else if(kt.test(t))t=parseInt(t);else if(xt.test(t))t=parseFloat(t);else if(X.test(t))try{t=$(t)}catch(r){}}return e!==typeof t&&(0,h.d)(`You have used a stringified property value (${o} to ${JSON.stringify(t)}) which type switched from ${e} to ${typeof t}!`),t},U=t=>{try{return JSON.stringify(t).replace(/"/g,"'")}catch(e){throw c.L.warn(["stringifyJson",t]),c.L.error("\u2191 Das JSON konnte nicht in einen String umgewandelt werden. Es wird ein stringifizierbares JSON erwartet."),new Error}},X=/^[{[]/,$=t=>{if(typeof t=="string")try{return JSON.parse(t)}catch(e){if(X.test(t))try{return JSON.parse(t.replace(/'/g,'"'))}catch(o){c.L.warn(["parseJson",t]),c.L.error("\u2191 Der JSON-String konnte nicht geparsed werden. Achten Sie darauf, dass einfache Anf\xFChrungszeichen im Text maskiert werden (&#8216;).")}}throw new Error},q=t=>typeof t=="boolean"?t===!0?"true":"false":void 0,St=t=>typeof t=="string"?t:q(t),J=(t,e)=>m(t,e||(0,c.g)()),K=(t,e)=>f(t,e||(0,c.g)());let Y=null;const F=()=>(Y=Y||{backgroundColor:"#00000000",color:"#00000000",domNode:(0,c.g)().body,level:"Fail",score:1},Y),V=/(\d+, ){3}0\)/,B=(t,e=F())=>{const o=getComputedStyle(t),r=V.test(o.backgroundColor)?e.backgroundColor:y.hex(o.backgroundColor),a=V.test(o.color)?e.color:y.hex(o.color),n=(0,u.s)(r,a),l={backgroundColor:r,color:a,domNode:t,level:(0,u.f)(n),score:n};return n<4.5&&c.L.error(["Color-Contrast-Error",{backgroundColor:l.backgroundColor,color:l.color,level:l.level,score:l.score},l.domNode]),l},Q=(t,e=F())=>{e.domNode instanceof HTMLElement&&(e=B(e.domNode,e));const o=e.domNode.querySelector(t);if(o===null){const r=e.domNode.querySelectorAll('[class="hydrated"]');for(let a=0;a<r.length&&(e.domNode=r[a],(e=Q(t,e)).domNode===null);a++);return e}return B(o,e)},G=(t,e=window)=>{t instanceof HTMLElement?(e.scrollTo({behavior:"smooth",top:t.getBoundingClientRect().top+(0,c.a)().pageYOffset-50}),t.focus()):(0,h.d)("Das HTMLElement ist nicht valide, zu dem gescrollt werden soll.")},tt=(t,e)=>{if((t instanceof Document||t instanceof HTMLElement||t instanceof ShadowRoot)&&typeof e=="string"){(0,h.d)("Bei der Methode querySelectorAll wurden die Parameter document, selector in selector, document getauscht, da der Parameter selector nicht, allerdings der Parameter document optional sein kann.");const o=`${e}`;e=t,t=o}if(typeof t=="string"){const o=J(t,e);o instanceof HTMLElement?G(o):(0,h.d)(`Es konnte kein HTMLElement mit dem Selector (${t}) gefunden werden, zu dem gescrollt werden soll.`)}else(0,h.d)("Der Selector ist nicht valide, zu dem gescrollt werden soll.")};class w{static queryHtmlElementColors(e,o,r=!1,a=!0){let n=null;if(r===!0||w.executionLock===!1)if(r===!1&&(w.cache.clear(),w.cache.set(o.domNode,o),w.executionLock=!0,a===!0&&c.L.debug("[KoliBriUtils] Color contrast analysis started...")),e===o.domNode)n=o;else{const l=new Set;if(o.domNode.shadowRoot){const b=o.domNode.shadowRoot.children;for(let k=0;k<b.length;k++)l.add(b[k])}const O=o.domNode;if(typeof O.assignedNodes=="function"){const b=O.assignedNodes();for(let k=0;k<b.length;k++)b[k]instanceof HTMLElement&&l.add(b[k])}const et=o.domNode.children;for(let b=0;b<et.length;b++)l.add(et[b]);const I=Array.from(l);for(let b=0;b<I.length;b++){let k=w.cache.get(I[b]);k===void 0&&(k=B(I[b],o)),w.cache.set(I[b],k);const rt=w.queryHtmlElementColors(e,k,!0,!1);if(rt!==null){n=rt;break}}}else c.L.debug("[KoliBriUtils] Call aborted because a color contrast analysis is currently being executed.");return r===!1&&(a===!0&&c.L.debug(`[KoliBriUtils] Color contrast analysis finished (${w.cache.size} DOM elements are analysed).`),w.executionLock=!1,w.cache.clear()),n}}w.executionLock=!1,w.cache=new Map;class L{}L.patchTheme=v.p,L.patchThemeTag=v.a,L.querySelector=J,L.querySelectorAll=K,L.scrollByHTMLElement=G,L.scrollBySelector=tt,L.stringifyJson=U}}]);
