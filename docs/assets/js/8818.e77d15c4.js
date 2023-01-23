/*! For license information please see 8818.e77d15c4.js.LICENSE.txt */
"use strict";(self.webpackChunk_public_ui_website=self.webpackChunk_public_ui_website||[]).push([[8818],{5149:(t,e,a)=>{a.d(e,{a:()=>b,b:()=>l,c:()=>p,d:()=>c,e:()=>o,f:()=>h,u:()=>f});var i=a(7738);const r=new Set,o=t=>{!1===r.has(t)&&(r.add(t),i.L.info(t,{classifier:"\u270ba11y",overwriteStyle:"; background-color: #09f"}))},n=new Set,l=t=>{!1===n.has(t)&&(n.add(t),i.L.warn(t,{classifier:"\ud83d\udd25deprecated",forceLog:!0,overwriteStyle:"; background-color: #f00"}))},s=new Set,c=t=>{!1===s.has(t)&&(s.add(t),i.L.debug(t,{classifier:"\ud83d\udcbbdev",overwriteStyle:"; background-color: #f09"}))},d=new Set,h=(t,e=!1)=>{!1===d.has(t)&&(d.add(t),t+=!0===e?" \u2705":"",i.L.debug(t,{classifier:"\ud83c\udf1ffeature",overwriteStyle:"; background-color: #309"}))};c("Wir freuen uns \xfcber jedes Feedback, Kommentare, Screenshots oder Demo-Links von einer auf KoliBri-basierenden Anwendung (kolibri@itzbund.de). Vielen Dank!");const u=new Set,p=()=>{o('"Disabled" schr\xe4nkt die Zug\xe4nglichkeit und Sichtbarkeit ein. Wir empfehlen aus Sicht der Barrierefreiheit readonly- statt disabled-Attribut zu verwenden.\n- https://uxdesign.cc/is-it-ok-to-grey-out-disabled-buttons-8afa74a0fae')},b=t=>{"string"==typeof t&&""!==t||o("Manche Strukturelemente, wie bspw. der nav-Tag, k\xf6nnen mehrfach in einer Webseite verwendet werden. Damit die gleichnamigen Strukturelemente voneinander unterschieden werden k\xf6nnen, ist es erforderlich ein Aria-Label zu setzen.\n- https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/Navigation_Role#accessibility_concerns")},f=(t,e=8)=>{var a;e>7&&(a=`[${t}] Innerhalb von Navigationsstrukturen wird empfohlen nicht mehr als 7 Men\xfcpunkte zu verwenden.\n\nLinks:\n- https://de.ryte.com/wiki/Millersche_Zahl\n- https://de.wikipedia.org/wiki/Millersche_Zahl`,!1===u.has(a)&&(u.add(a),i.L.debug(a,{classifier:"\ud83d\udcd1ui/ux",overwriteStyle:"; background-color: #060;"})))}},4340:(t,e,a)=>{a.d(e,{f:()=>c,s:()=>s});var i=1/12.92;function r(t){return Math.pow((t+.055)/1.055,2.4)}function o(t){var e=t[0]/255,a=t[1]/255,o=t[2]/255;return.2126*(e<=.03928?e*i:r(e))+.7152*(a<=.03928?a*i:r(a))+.0722*(o<=.03928?o*i:r(o))}function n(t){var e=255;8===(t=t.replace(/^#/,"")).length&&(e=parseInt(t.slice(6,8),16),t=t.substring(0,6)),4===t.length&&(e=parseInt(t.slice(3,4).repeat(2),16),t=t.substring(0,3)),3===t.length&&(t=t[0]+t[0]+t[1]+t[1]+t[2]+t[2]);var a=parseInt(t,16);return[a>>16,a>>8&255,255&a,e]}function l(t,e){return function(t,e){return(Math.max(t,e)+.05)/(Math.min(t,e)+.05)}(o(t),o(e))}function s(t,e){return l(n(t),n(e))}function c(t){return t>=7?"AAA":t>=4.5?"AA":t>=3?"AA Large":"Fail"}},8818:(t,e,a)=>{a.r(e),a.d(e,{kol_nav:()=>c});var i=a(3701),r=a(5149),o=a(6645),n=a(2216);const l=[],s=t=>{const e=l.indexOf(t);e>=0&&l.splice(e,1)},c=class{constructor(t){(0,i.r)(this,t),this.onClick=t=>{t._active=!1===t._active,this.state=Object.assign({},this.state)},this.hasActiveChild=t=>!!(Array.isArray(t._children)&&t._children.length>0)&&t._children.some(this.hasActiveChild),this.linkList=t=>(0,i.h)("ul",{class:{flex:0===t.deep&&"horizontal"===this.state._orientation},part:`nav ${this.state._orientation}`},t.links.map(((e,a)=>(0,i.h)("li",{part:`li ${0===t.deep?this.state._orientation:"vertical"}${e._active?" selected":""}${a<t.links.length-1?"":" last"}`},Array.isArray(e._children)&&e._children.length>0?(0,i.h)("div",{class:"h-full"},(0,i.h)("div",{class:{"h-full":!0}},(0,i.h)("kol-link-wc",{class:"block w-full h-full",exportparts:"icon,link,span"+(!0===e._active?",selected":""),_useCase:"nav",_ariaCurrent:!0===e._active&&this.state._ariaCurrentValue,_ariaLabel:!0===this.state._compact||!0===e._iconOnly?e._label:void 0,_ariaExpanded:!0===e._active,_disabled:e._disabled,_icon:!0===this.state._collapsible?!0===e._active?"fa-solid fa-minus":"fa-solid fa-plus":"string"==typeof e._icon?e._icon:"fa-solid fa-link-slash",_iconOnly:!0===this.state._compact||!0===e._iconOnly,_label:e._label,_part:!0===e._active?"selected":void 0,_underline:!1,onClick:()=>this.onClick(e)})),!0===e._active&&(0,i.h)("div",{class:{expanded:!0,active:!0===e._active,"active-child":this.hasActiveChild(e),"absolute ":0===t.deep&&"horizontal"===this.state._orientation}},(0,i.h)(this.linkList,{links:e._children,deep:t.deep+1}))):(0,i.h)("div",{class:{"h-full":!0,"text-center":!0===this.state._compact||!0===e._iconOnly}},(0,i.h)("kol-link-wc",{class:{"block w-full h-full":!0,active:!0===e._active},exportparts:"icon,link,span"+(!0===e._active?",selected":""),_ariaLabel:!0===this.state._compact||!0===e._iconOnly?e._label:void 0,_href:e._href,_icon:"string"==typeof e._icon?e._icon:"fa-solid fa-link-slash","_icon-only":!0===this.state._compact||!0===e._iconOnly,_label:e._label,_on:e._on,_part:!0===e._active?"selected":void 0,_selector:e._selector,_tooltipAlign:e._tooltipAlign,_target:e._target,_underline:!1,_useCase:"nav"})))))),this._ariaCurrentValue=!1,this._ariaLabel=void 0,this._collapsible=!1,this._compact=!1,this._hasCompactButton=!1,this._orientation="vertical",this._links=void 0,this._variant="primary",this.state={_ariaCurrentValue:!1,_ariaLabel:"\u2026",_collapsible:!0,_hasCompactButton:!1,_links:[],_orientation:"vertical",_variant:"primary"}}render(){let t=this.state._hasCompactButton;return"horizontal"===this.state._orientation&&!0===this.state._hasCompactButton&&(t=!1,(0,r.d)("[KolNav] Wenn eine horizontale Navigation verwendet wird, kann die Option _hasCompactButton nicht aktiviert werden.")),(0,i.h)(i.H,null,(0,i.h)("div",{class:{[this.state._orientation]:!0,"inline-block":!0===this.state._compact,[this.state._variant]:!0}},(0,i.h)("nav",{"aria-label":this.state._ariaLabel,id:"nav",part:"nav"},(0,i.h)(this.linkList,{links:this.state._links,deep:0})),t&&(0,i.h)("div",{class:"mt-2 w-full text-center"},(0,i.h)("kol-button",{exportparts:"button,ghost",_ariaControls:"nav",_ariaExpanded:!0===this.state._compact,_ariaLabel:this.state._compact?"Navigation maximieren":"Navigation minimieren",_icon:this.state._compact?"fa-solid fa-angles-right":"fa-solid fa-angles-left",_iconOnly:!0,_label:this.state._compact?"Navigation maximieren":"Navigation minimieren",_on:{onClick:()=>{this.state=Object.assign(Object.assign({},this.state),{_compact:!1===this.state._compact})}},_tooltipAlign:"right",_variant:"ghost"}))))}validateAriaCurrentValue(t){(0,o.a)(this,"_ariaCurrentValue",(t=>!0===t||"date"===t||"location"===t||"page"===t||"step"===t||"time"===t),new Set(["boolean","String {data, location, page, step, time}"]),t)}validateAriaLabel(t){(0,o.w)(this,"_ariaLabel",t,{hooks:{afterPatch:()=>{l.includes(this.state._ariaLabel)&&(0,r.d)(`[KolNav] Das Aria-Label "${this.state._ariaLabel}" wurde f\xfcr die Rolle Navigation mehrfach verwendet!`),l.push(this.state._ariaLabel)},beforePatch:()=>{s(this.state._ariaLabel)}},required:!0}),(0,r.a)(t)}validateCollapsible(t){(0,o.b)(this,"_collapsible",t)}validateCompact(t){(0,o.b)(this,"_compact",t)}validateHasCompactButton(t){(0,o.b)(this,"_hasCompactButton",t)}validateLinks(t){(0,n.w)("KolNav",this,t),(0,r.d)("[KolNav] Die Navigationsstruktur wird noch nicht rekursiv validiert.")}validateOrientation(t){(0,o.a)(this,"_orientation",(t=>"horizontal"===t||"vertical"===t),new Set(["Orientation {horizontal, vertical}"]),t,{defaultValue:"vertical"})}validateVariant(t){(0,o.a)(this,"_variant",(t=>"primary"===t||"secondary"===t),new Set(["KoliBriNavVariant {primary, secondary}"]),t,{defaultValue:"primary"})}componentWillLoad(){this.validateAriaLabel(this._ariaLabel),this.validateCollapsible(this._collapsible),this.validateCompact(this._compact),this.validateHasCompactButton(this._hasCompactButton),this.validateLinks(this._links),this.validateOrientation(this._orientation),this.validateVariant(this._variant)}disconnectedCallback(){s(this.state._ariaLabel)}static get watchers(){return{_ariaCurrentValue:["validateAriaCurrentValue"],_ariaLabel:["validateAriaLabel"],_collapsible:["validateCollapsible"],_compact:["validateCompact"],_hasCompactButton:["validateHasCompactButton"],_links:["validateLinks"],_orientation:["validateOrientation"],_variant:["validateVariant"]}}};c.style={default:'*,::before,::after{-webkit-box-sizing:border-box;box-sizing:border-box;border-width:0;border-style:solid;border-color:var(--kolibri-border-color)}*{--tw-ring-inset:var(--tw-empty, );--tw-ring-offset-width:0px;--tw-ring-offset-color:var(--kolibri-color);--tw-ring-color:rgba(undefined, 0.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000}:root{-moz-tab-size:4;-o-tab-size:4;tab-size:4}:-moz-focusring{outline:1px dotted ButtonText}:-moz-ui-invalid{box-shadow:none}::moz-focus-inner{border-style:none;padding:0}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}[type=\'search\']{-webkit-appearance:textfield;outline-offset:-2px}abbr[title]{-webkit-text-decoration:underline dotted;text-decoration:underline dotted}a{color:inherit;text-decoration:inherit}body{margin:0;font-family:inherit;line-height:inherit}b,strong{font-weight:bolder}button,select{text-transform:none}button,[type=\'button\'],[type=\'reset\'],[type=\'submit\']{-webkit-appearance:button}button{background-color:transparent;background-image:none}button,[role="button"]{cursor:pointer}code{font-size:1em;font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace}fieldset{margin:0;padding:0}html{-webkit-text-size-adjust:100%;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";line-height:1.5}h1,p,h2,h3,h4,h5,h6{margin:0}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}input,button,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0;padding:0;line-height:inherit;color:inherit}input::placeholder{opacity:1;color:#9ca3af}input::webkit-input-placeholder{opacity:1;color:#9ca3af}input::-moz-placeholder{opacity:1;color:#9ca3af}input:-ms-input-placeholder{opacity:1;color:#9ca3af}input::-ms-input-placeholder{opacity:1;color:#9ca3af}legend{padding:0}progress{vertical-align:baseline}small{font-size:80%}svg{display:block;vertical-align:middle}table{text-indent:0;border-color:inherit;border-collapse:collapse}textarea{resize:vertical}textarea::placeholder{opacity:1;color:#9ca3af}textarea::webkit-input-placeholder{opacity:1;color:#9ca3af}textarea::-moz-placeholder{opacity:1;color:#9ca3af}textarea:-ms-input-placeholder{opacity:1;color:#9ca3af}textarea::-ms-input-placeholder{opacity:1;color:#9ca3af}ul,ol{list-style:none;margin:0;padding:0}.container{width:100%}@media (min-width: 640px){.container{max-width:640px}}@media (min-width: 768px){.container{max-width:768px}}@media (min-width: 1024px){.container{max-width:1024px}}@media (min-width: 1280px){.container{max-width:1280px}}@media (min-width: 1536px){.container{max-width:1536px}}.bg-normal{background-color:var(--kolibri-color-normal)}.bg-white{--tw-bg-opacity:1;background-color:rgba(255, 255, 255, var(--tw-bg-opacity))}.bg-spin-1{background-color:var(--kolibri-color-spin-1)}.bg-spin-2{background-color:var(--kolibri-color-spin-2)}.bg-spin-3{background-color:var(--kolibri-color-spin-3)}.rounded{border-radius:var(--kolibri-border-radius)}.border-1{border-width:1px}.cursor-pointer{cursor:pointer}.block{display:block}.inline-block{display:inline-block}.flex{display:-webkit-box;display:-ms-flexbox;display:-webkit-flex;display:flex}.inline-flex{display:-webkit-inline-box;display:-ms-inline-flexbox;display:-webkit-inline-flex;display:inline-flex}.table{display:table}.grid{display:-ms-grid;display:grid}.hidden{display:none}.flex-wrap{-ms-flex-wrap:wrap;-webkit-flex-wrap:wrap;flex-wrap:wrap}.items-center{-webkit-box-align:center;-ms-flex-align:center;-webkit-align-items:center;align-items:center}.content-center{-ms-flex-line-pack:center;-webkit-align-content:center;align-content:center}.font-80{font-weight:80}.font-60{font-weight:60}.h-full{height:100%}.h-0{height:0px}.h-0\\.41c-2\\.42\\2c 0-4\\.82-1\\.57-4\\.82-3\\.58c0\\.05-0\\.98\\2c 0\\.43-1\\.91\\2c 1\\.07-2\\.65c0\\.3\\2c 0\\.05\\2c 0\\.61\\2c 0\\.09\\2c 0\\.92\\2c 0\\.09c1\\.1\\2c 0\\2c 1\\.69-0\\.58\\2c 1\\.74-1\\.16{height:0.29rem}.text-sm{font-size:0.875rem;line-height:1.25rem}.text-2xl{font-size:1.5rem;line-height:2rem}.text-lg{font-size:1.125rem;line-height:1.75rem}.leading-normal{line-height:1.5}.list-none{list-style-type:none}.list-disc{list-style-type:disc}.list-decimal{list-style-type:decimal}.mx-auto{margin-left:auto;margin-right:auto}.mb-1{margin-bottom:calc(1 * var(--kolibri-spacing))}.mt-2{margin-top:calc(2 * var(--kolibri-spacing))}.mt-4{margin-top:calc(4 * var(--kolibri-spacing))}.mr-2{margin-right:calc(2 * var(--kolibri-spacing))}.ml-2{margin-left:calc(2 * var(--kolibri-spacing))}.outline{outline-style:solid}.overflow-hidden{overflow:hidden}.overflow-y-visible{overflow-y:visible}.p-2{padding:calc(2 * var(--kolibri-spacing))}.p-4{padding:calc(4 * var(--kolibri-spacing))}.px{padding-left:1px;padding-right:1px}.py-2{padding-top:calc(2 * var(--kolibri-spacing));padding-bottom:calc(2 * var(--kolibri-spacing))}.pl-8{padding-left:2rem}.pb-2{padding-bottom:calc(2 * var(--kolibri-spacing))}.tab{-moz-tab-size:4;-o-tab-size:4;tab-size:4}.absolute{position:absolute}.text-center{text-align:center}.hover\\:text-primary:hover{color:var(--kolibri-color-primary)}.text-normal{color:var(--kolibri-color-normal)}.italic{font-style:italic}.underline{-webkit-text-decoration-line:underline;text-decoration-line:underline}.indent{text-indent:1.5rem}.visible{visibility:visible}.w-full{width:100%}.w-4\\/5{width:80%}.z-50{z-index:50}.gap-1{grid-gap:calc(1 * var(--kolibri-spacing));gap:calc(1 * var(--kolibri-spacing))}.gap-2{grid-gap:calc(2 * var(--kolibri-spacing));gap:calc(2 * var(--kolibri-spacing))}.grid-flow-col{grid-auto-flow:column}.transform{--tw-translate-x:0;--tw-translate-y:0;--tw-translate-z:0;--tw-rotate:0;--tw-rotate-x:0;--tw-rotate-y:0;--tw-rotate-z:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scale-z:1;-webkit-transform:translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) translateZ(var(--tw-translate-z)) rotate(var(--tw-rotate)) rotateX(var(--tw-rotate-x)) rotateY(var(--tw-rotate-y)) rotateZ(var(--tw-rotate-z)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)) scaleZ(var(--tw-scale-z));-ms-transform:translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) translateZ(var(--tw-translate-z)) rotate(var(--tw-rotate)) rotateX(var(--tw-rotate-x)) rotateY(var(--tw-rotate-y)) rotateZ(var(--tw-rotate-z)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)) scaleZ(var(--tw-scale-z));transform:translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) translateZ(var(--tw-translate-z)) rotate(var(--tw-rotate)) rotateX(var(--tw-rotate-x)) rotateY(var(--tw-rotate-y)) rotateZ(var(--tw-rotate-z)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)) scaleZ(var(--tw-scale-z))}.animate{-webkit-animation-iteration-count:1;animation-iteration-count:1}.filter{--tw-blur:var(--tw-empty, );--tw-brightness:var(--tw-empty, );--tw-contrast:var(--tw-empty, );--tw-grayscale:var(--tw-empty, );--tw-hue-rotate:var(--tw-empty, );--tw-invert:var(--tw-empty, );--tw-saturate:var(--tw-empty, );--tw-sepia:var(--tw-empty, );--tw-drop-shadow:var(--tw-empty, );-webkit-filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.blur{-webkit-backdrop-filter:blur(8px);backdrop-filter:blur(8px)}:host *{-ms-hyphens:var(--kolibri-hyphens);-webkit-hyphens:var(--kolibri-hyphens);hyphens:var(--kolibri-hyphens);font-family:var(--kolibri-font-family);line-height:var(--kolibri-line-height);word-break:break-word}'}},6645:(t,e,a)=>{a.d(e,{K:()=>F,a:()=>N,b:()=>C,c:()=>O,d:()=>A,e:()=>S,f:()=>x,g:()=>T,h:()=>W,i:()=>q,j:()=>J,k:()=>P,l:()=>K,m:()=>j,n:()=>R,o:()=>_,p:()=>D,q:()=>X,r:()=>d,s:()=>L,t:()=>B,w:()=>z});var i=a(4340),r=a(5149),o=a(7738),n=a(4776);const l=(t,e)=>{e.forEach((e=>{!1===t.has(e)&&t.add(e)}))},s=(t,e=document)=>{if(e instanceof Document||e instanceof HTMLElement||e instanceof ShadowRoot){const a=new Set;l(a,e.querySelectorAll(t));const i=e.querySelectorAll('[class*="hydrated"]');for(let e=0;e<i.length;e++){const r=i[e].shadowRoot;l(a,s(t,"object"==typeof r&&null!==r?r:i[e]))}return Array.from(a)}throw new Error("The parameter document for the method querySelectorAll is not type of Document, HTMLElement or ShadowRoot.")},c=(t,e=document)=>{if(e instanceof Document||e instanceof HTMLElement||e instanceof ShadowRoot){let a=e.querySelector(t);if(null===a){const i=e.querySelectorAll('[class*="hydrated"]');for(let e=0;e<i.length;e++){const r=i[e].shadowRoot;if(a=c(t,"object"==typeof r&&null!==r?r:i[e]),null!==a)break}}return a}throw new Error("The parameter document for the method querySelector is not type of Document, HTMLElement or ShadowRoot.")};var d=g,h=g,u=function(t){var e=v(t);return{r:e[0],g:e[1],b:e[2],a:3==e.length?255:Math.round(e[3])}},p=function(t){var e=v(t);return 3==e.length&&e.push(255),255==e[3]?"rgb("+e[0]+", "+e[1]+", "+e[2]+")":0==e[3]?"rgba("+e[0]+", "+e[1]+", "+e[2]+", 0)":"rgba("+e[0]+", "+e[1]+", "+e[2]+", "+String(e[3]/255).substr(1)+")"},b=function(t){3==(e=v(t)).length&&e.push(255);var e,a=255==e[3],i=w(e[0]),r=w(e[1]),o=w(e[2]),n=function(t,e,a,i){var r=["ff","00","11","22","33","44","55","66","77","88","99","aa","bb","cc","dd","ee"];return-1!=r.indexOf(t)&&-1!=r.indexOf(e)&&-1!=r.indexOf(a)&&-1!=r.indexOf(i)}(i,r,o,e=w(Math.round(e[3])));return a?n?"#"+i.charAt(0)+r.charAt(0)+o.charAt(0):"#"+i+r+o:n?"#"+i.charAt(0)+r.charAt(0)+o.charAt(0)+e.charAt(0):"#"+i+r+o+e},f=function(t){var e=v(t);return 3==e.length?e.push(255):e[3]=Math.round(e[3]),(e[3]<<24>>>0|e[0]<<16|e[1]<<8|e[2])>>>0};function g(t){var e=v(t);return 3==e.length?e.concat(255):(e[3]=Math.round(e[3]),e)}function v(t){return"string"==typeof t?function(t){return"red"==t?[255,0,0]:"green"==t?[0,255,0]:"blue"==t?[0,0,255]:"black"==t?[0,0,0]:"white"==t?[255,255,255]:"cyan"==t?[0,255,255]:"gray"==t||"grey"==t?[128,128,128]:"magenta"==t||"pink"==t?[255,0,255]:"yellow"==t?[255,255,0]:void 0}(t=t.toLowerCase())||function(t){var e=t.replace(/^#/,""),a=e.length;if(3==a||4==a){var i=m(e[0]),r=m(e[1]),o=m(e[2]),n=3==a?255:m(e[3]);if(isNaN(i)||isNaN(r)||isNaN(o)||isNaN(n))return;return[i,r,o,n]}}(t)||function(t){var e=t.replace(/^#/,""),a=e.length;if(6==a||8==a){var i=m(e.slice(0,2)),r=m(e.slice(2,4)),o=m(e.slice(4,6)),n=6==a?255:m(e.slice(6,8));if(isNaN(i)||isNaN(r)||isNaN(o)||isNaN(n))return;return[i,r,o,n]}}(t)||function(t){if("rgb("==t.substr(0,4)){var e=(t=t.match(/^rgb\(([^)]+)\)/)[1]).split(/ *, */).map(Number),a=y(e[0],!0),i=y(e[1],!0),r=y(e[2],!0);if(-1!=a&&-1!=i&&-1!=r)return[a,i,r,255]}}(t)||function(t){if("rgba("==t.substr(0,5)){var e=(t=t.match(/^rgba\(([^)]+)\)/)[1]).split(/ *, */).map(Number),a=y(e[0],!0),i=y(e[1],!0),r=y(e[2],!0),o=y(255*e[3]);if(-1!=a&&-1!=i&&-1!=r&&-1!=o)return[a,i,r,o]}}(t)||[0,0,0,255]:function(t){if("[object Object]"===Object.prototype.toString.call(t)&&Object.getPrototypeOf(t)===Object.getPrototypeOf({})){var e=y(null!=t.r?t.r:null!=t.red?t.red:0,!0),a=y(null!=t.g?t.g:null!=t.green?t.green:0,!0),i=y(null!=t.b?t.b:null!=t.blue?t.blue:0,!0),r=y(null!=t.a?t.a:null!=t.alpha?t.alpha:255,!0);if(-1!=e&&-1!=a&&-1!=i&&-1!=r)return[e,a,i,r]}}(t)||function(t){if(Array.isArray(t)&&(3==t.length||4==t.length)){var e=y(t[0],!0),a=y(t[1],!0),i=y(t[2],!0),r=y(null!=t[3]?t[3]:255,!0);if(-1!=e&&-1!=a&&-1!=i&&-1!=r)return[e,a,i,r]}}(t)||function(t){if("number"==typeof t&&Math.floor(t)==t&&t<=4294967295&&t>=0)return[t>>16&255,t>>8&255,255&t,t>>24&255]}(t)||[0,0,0,255]}function w(t){var e=t.toString(16);return 1==e.length?"0"+e:e}function m(t){return 1==t.length?parseInt(t+t,16):parseInt(t,16)}function y(t,e){return"number"!=typeof t||!0===e&&Math.floor(t)!==t?-1:t>=0&&t<=255?t:-1}d.arr=h,d.obj=u,d.css=p,d.hex=b,d.num=f;const k=/\[object Object\]/,_=(t,e)=>{"string"==typeof t&&k.test(t)||e()},x=(t,e)=>{"string"==typeof t&&""===t||e()},S=(t,e)=>{(0,o.b)()&&(console.log(t,e),(0,r.d)("\u2191 We propagate the (submit) event to this target.")),Object.defineProperty(t,"target",{value:e,writable:!1})},L=(t,e,a,i={})=>{var r,o;void 0===t.nextHooks&&(t.nextHooks=new Map),void 0===t.nextState&&(t.nextState=new Map),t.nextState.get(e)!==a&&(t.nextHooks.get(e)instanceof Map==0&&t.nextHooks.set(e,new Map),"function"==typeof i.afterPatch&&(null===(r=t.nextHooks.get(e))||void 0===r||r.set("afterPatch",i.afterPatch)),"function"==typeof i.beforePatch&&(null===(o=t.nextHooks.get(e))||void 0===o||o.set("beforePatch",i.beforePatch)),t.nextState.set(e,a),(t=>{var e,a,i;null===(e=t.nextHooks)||void 0===e||e.forEach(((e,a)=>{var i;const r=e.get("beforePatch");"function"==typeof r&&r(null===(i=t.nextState)||void 0===i?void 0:i.get(a),t.nextState,t,a)})),(null===(a=t.nextState)||void 0===a?void 0:a.size)>0&&(t.state=Object.assign(Object.assign({},t.state),Object.fromEntries(t.nextState)),delete t.nextState,null===(i=t.nextHooks)||void 0===i||i.forEach(((e,a)=>{const i=e.get("afterPatch");"function"==typeof i&&i(t.state[a],t.state,t,a)}))),delete t.nextHooks})(t))},N=(t,e,a,i,o,n={})=>{a(o)?L(t,e,o,null==n?void 0:n.hooks):void 0===o||null===o&&(void 0===(null==n?void 0:n.required)||!1===(null==n?void 0:n.required))?L(t,e,null==n?void 0:n.defaultValue,null==n?void 0:n.hooks):(void 0!==(null==n?void 0:n.required)&&!1!==(null==n?void 0:n.required)||i.add(null),((t,e,a,i)=>{(0,r.d)(`[${t.constructor.name}] Der Property-Wert (${a}) f\xfcr '${e}' ist nicht valide. Folgende Werte sind erlaubt: ${Array.from(i).join(", ")}`)})(t,e,o,i))},C=(t,e,a,i)=>{N(t,e,(t=>"boolean"==typeof t),new Set(["Boolean {true, false}"]),a,i)},z=(t,e,a,i={})=>{const r="number"==typeof i.minLength?null==i?void 0:i.minLength:0;N(t,e,(t=>"string"==typeof t&&t.length>=r),new Set([`String (Mindestl\xe4nge ${r})`]),a,i)},A=(t,e,a,i)=>{N(t,e,(t=>"number"==typeof t&&(void 0===(null==i?void 0:i.min)||"number"==typeof(null==i?void 0:i.min)&&t>=i.min)&&(void 0===(null==i?void 0:i.max)||"number"==typeof(null==i?void 0:i.max)&&t<=i.max)),new Set(["Number"]),a,i)},O=(t,e,a,i,o=(t=>t==t),n={})=>{x(i,(()=>{_(i,(()=>{void 0===i&&(i=[]);try{try{i=D(i)}catch(t){}if(Array.isArray(i)){const r=i.find((t=>!a(t)));void 0===r&&o(i)?L(t,e,i,n.hooks):_(r,(()=>{throw console.log(r),new Error("\u2191 Das Schema f\xfcr das Property (_options) ist nicht valide. Der Wert wird nicht ge\xe4ndert.")}))}else _(i,(()=>{throw console.log(i),new Error("\u2191 Das Schema f\xfcr das Property (_options) ist nicht valide. Der Wert wird nicht ge\xe4ndert.")}))}catch(t){(0,r.d)("Known bug: Zeichenkettenliste (string[])")}}))}))},M=/^(true|false)$/,E=/^-?(0|[1-9]\d*)$/,H=/^-?(0.|[1-9]\d*.)\d*[1-9]$/,j=t=>{const e=typeof t,a=`${t}`;if("string"==typeof t)if(M.test(t))t="true"===t;else if(E.test(t))t=parseInt(t);else if(H.test(t))t=parseFloat(t);else if($.test(t))try{t=D(t)}catch(t){}return e!==typeof t&&(0,r.d)(`You have used a stringified property value (${a} to ${JSON.stringify(t)}) which type switched from ${e} to ${typeof t}!`),t},B=t=>{try{return JSON.stringify(t).replace(/"/g,"'")}catch(e){throw o.L.warn(["stringifyJson",t]),o.L.error("\u2191 Das JSON konnte nicht in einen String umgewandelt werden. Es wird ein stringifizierbares JSON erwartet."),new Error}},$=/^[{[]/,D=t=>{if("string"==typeof t)try{return JSON.parse(t)}catch(e){if($.test(t))try{return JSON.parse(t.replace(/'/g,'"'))}catch(e){o.L.warn(["parseJson",t]),o.L.error("\u2191 Der JSON-String konnte nicht geparsed werden. Achten Sie darauf, dass einfache Anf\xfchrungszeichen im Text maskiert werden (&#8216;).")}}throw new Error},T=t=>"boolean"==typeof t?!0===t?"true":"false":void 0,q=t=>"string"==typeof t?t:T(t),P=(t,e)=>c(t,e||(0,o.g)()),R=(t,e)=>s(t,e||(0,o.g)());let V=null;const Y=()=>(V=V||{backgroundColor:"#00000000",color:"#00000000",domNode:(0,o.g)().body,level:"Fail",score:1},V),Z=/(\d+, ){3}0\)/,K=(t,e=Y())=>{const a=getComputedStyle(t),r=Z.test(a.backgroundColor)?e.backgroundColor:d.hex(a.backgroundColor),n=Z.test(a.color)?e.color:d.hex(a.color),l=(0,i.s)(r,n),s={backgroundColor:r,color:n,domNode:t,level:(0,i.f)(l),score:l};return l<4.5&&o.L.error(["Color-Contrast-Error",{backgroundColor:s.backgroundColor,color:s.color,level:s.level,score:s.score},s.domNode]),s},X=(t,e=Y())=>{e.domNode instanceof HTMLElement&&(e=K(e.domNode,e));const a=e.domNode.querySelector(t);if(null===a){const a=e.domNode.querySelectorAll('[class="hydrated"]');for(let i=0;i<a.length&&(e.domNode=a[i],null===(e=X(t,e)).domNode);i++);return e}return K(a,e)},I=(t,e=window)=>{t instanceof HTMLElement?(e.scrollTo({behavior:"smooth",top:t.getBoundingClientRect().top+(0,o.a)().pageYOffset-50}),t.focus()):(0,r.d)("Das HTMLElement ist nicht valide, zu dem gescrollt werden soll.")},W=(t,e)=>{if((t instanceof Document||t instanceof HTMLElement||t instanceof ShadowRoot)&&"string"==typeof e){(0,r.d)("Bei der Methode querySelectorAll wurden die Parameter document, selector in selector, document getauscht, da der Parameter selector nicht, allerdings der Parameter document optional sein kann.");const a=`${e}`;e=t,t=a}if("string"==typeof t){const a=P(t,e);a instanceof HTMLElement?I(a):(0,r.d)(`Es konnte kein HTMLElement mit dem Selector (${t}) gefunden werden, zu dem gescrollt werden soll.`)}else(0,r.d)("Der Selector ist nicht valide, zu dem gescrollt werden soll.")};class J{static queryHtmlElementColors(t,e,a=!1,i=!0){let r=null;if(!0===a||!1===J.executionLock)if(!1===a&&(J.cache.clear(),J.cache.set(e.domNode,e),J.executionLock=!0,!0===i&&o.L.debug("[KoliBriUtils] Color contrast analysis started...")),t===e.domNode)r=e;else{const a=new Set;if(e.domNode.shadowRoot){const t=e.domNode.shadowRoot.children;for(let e=0;e<t.length;e++)a.add(t[e])}const i=e.domNode;if("function"==typeof i.assignedNodes){const t=i.assignedNodes();for(let e=0;e<t.length;e++)t[e]instanceof HTMLElement&&a.add(t[e])}const o=e.domNode.children;for(let t=0;t<o.length;t++)a.add(o[t]);const n=Array.from(a);for(let l=0;l<n.length;l++){let a=J.cache.get(n[l]);void 0===a&&(a=K(n[l],e)),J.cache.set(n[l],a);const i=J.queryHtmlElementColors(t,a,!0,!1);if(null!==i){r=i;break}}}else o.L.debug("[KoliBriUtils] Call aborted because a color contrast analysis is currently being executed.");return!1===a&&(!0===i&&o.L.debug(`[KoliBriUtils] Color contrast analysis finished (${J.cache.size} DOM elements are analysed).`),J.executionLock=!1,J.cache.clear()),r}}J.executionLock=!1,J.cache=new Map;class F{}F.patchTheme=n.p,F.patchThemeTag=n.a,F.querySelector=P,F.querySelectorAll=R,F.scrollByHTMLElement=I,F.scrollBySelector=W,F.stringifyJson=B},2216:(t,e,a)=>{a.d(e,{w:()=>o});var i=a(5149),r=a(6645);const o=(t,e,a)=>{(0,r.c)(e,"_links",(t=>"object"==typeof t&&"string"==typeof t._label),a),(0,i.u)(t,e.state._links.length)}}}]);