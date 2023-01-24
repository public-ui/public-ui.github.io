/*! For license information please see 8525.js.LICENSE.txt */
"use strict";(self.webpackChunk_public_ui_designer=self.webpackChunk_public_ui_designer||[]).push([[8525],{58525:(t,e,a)=>{a.r(e),a.d(e,{kol_alert:()=>p});var i=a(46266),r=a(26737),o=a(33810),n=a(51539),l=a(13726),s=a(68854);const c=t=>(0,i.h)("kol-icon",{class:"icon",_ariaLabel:"string"==typeof t.heading&&t.heading.length>0?"":t.ariaLabel,_icon:t.icon}),d=t=>{switch(t.type){case"error":return(0,i.h)(c,{ariaLabel:(0,s.a)("kol-error"),icon:"fa-solid fa-circle-xmark",heading:t.heading});case"info":return(0,i.h)(c,{ariaLabel:(0,s.a)("kol-info"),icon:"fa-solid fa-circle-info",heading:t.heading});case"warning":return(0,i.h)(c,{ariaLabel:(0,s.a)("kol-warning"),icon:"fa-solid fa-triangle-exclamation",heading:t.heading});case"success":return(0,i.h)(c,{ariaLabel:(0,s.a)("kol-success"),icon:"fa-solid fa-circle-check",heading:t.heading});default:return(0,i.h)(c,{ariaLabel:(0,s.a)("kol-message"),icon:"fa-regular fa-comment",heading:t.heading})}},p=class{constructor(t){(0,i.r)(this,t),this.close=()=>{var t;void 0!==(null===(t=this._on)||void 0===t?void 0:t.onClose)&&this._on.onClose(new Event("Close"))},this.on={onClick:this.close},this._alert=!1,this._hasCloser=!1,this._heading=void 0,this._level=1,this._on=void 0,this._type="default",this._variant="msg",this.state={_level:1}}render(){if(this.state._alert){try{o.L.debug(["Navigator should vibrate ...",navigator.vibrate([100,75,100,75,100])])}catch(t){o.L.debug("Navigator does not support vibration.")}setTimeout((()=>{this.validateAlert(!1)}),1e4)}return(0,i.h)(i.H,null,(0,i.h)("div",{class:{[this.state._type]:!0,[this.state._variant]:!0},role:this.state._alert?"alert":void 0},"msg"===this.state._variant&&(0,i.h)(d,{heading:this.state._heading,type:this.state._type}),(0,i.h)("div",null,("string"==typeof this.state._heading&&this.state._heading.length>0||"card"===this.state._variant)&&(0,i.h)("kol-heading-wc",{class:"heading",_level:this.state._level},"card"===this.state._variant&&(0,i.h)(d,{heading:this.state._heading,type:this.state._type}),this.state._heading),(0,i.h)("div",{class:"content"},(0,i.h)("slot",null)),this.state._hasCloser&&(0,i.h)("kol-button-wc",{class:"close",_icon:{left:{icon:"fa-solid fa-circle-xmark"}},_iconOnly:!0,_label:(0,s.a)("kol-close"),_on:this.on,_tooltipAlign:"left"}))))}validateAlert(t){(0,n.b)(this,"_alert",t)}validateHasCloser(t){(0,n.b)(this,"_hasCloser",t)}validateHeading(t){(0,n.w)(this,"_heading",t)}validateLevel(t){(0,l.w)(this,t)}validateOn(t){if("object"==typeof t&&null!==t){(0,r.f)("[KolAlert] Prüfen, wie man auch einen EventCallback einzeln ändern kann.");const e={};"function"!=typeof t.onClose&&!0!==t.onClose||(e.onClose=t.onClose),(0,n.s)(this,"_on",e)}}validateType(t){(0,n.a)(this,"_type",(t=>"string"==typeof t&&("default"===t||"error"===t||"info"===t||"success"===t||"warning"===t)),new Set("String {success, info, warning, error}"),t)}validateVariant(t){(0,n.a)(this,"_variant",(t=>"card"===t||"msg"===t),new Set("AlertVariant {card, msg}"),t)}componentWillLoad(){this.validateAlert(this._alert),this.validateHasCloser(this._hasCloser),this.validateHeading(this._heading),this.validateLevel(this._level),this.validateOn(this._on),this.validateType(this._type),this.validateVariant(this._variant)}static get watchers(){return{_alert:["validateAlert"],_hasCloser:["validateHasCloser"],_heading:["validateHeading"],_level:["validateLevel"],_on:["validateOn"],_type:["validateType"],_variant:["validateVariant"]}}};p.style={default:'*,::before,::after{-webkit-box-sizing:border-box;box-sizing:border-box;border-width:0;border-style:solid;border-color:var(--kolibri-border-color)}*{--tw-ring-inset:var(--tw-empty, );--tw-ring-offset-width:0px;--tw-ring-offset-color:var(--kolibri-color);--tw-ring-color:rgba(undefined, 0.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000}:root{-moz-tab-size:4;-o-tab-size:4;tab-size:4}:-moz-focusring{outline:1px dotted ButtonText}:-moz-ui-invalid{box-shadow:none}::moz-focus-inner{border-style:none;padding:0}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}[type=\'search\']{-webkit-appearance:textfield;outline-offset:-2px}abbr[title]{-webkit-text-decoration:underline dotted;text-decoration:underline dotted}a{color:inherit;text-decoration:inherit}body{margin:0;font-family:inherit;line-height:inherit}b,strong{font-weight:bolder}button,select{text-transform:none}button,[type=\'button\'],[type=\'reset\'],[type=\'submit\']{-webkit-appearance:button}button{background-color:transparent;background-image:none}button,[role="button"]{cursor:pointer}code{font-size:1em;font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace}fieldset{margin:0;padding:0}html{-webkit-text-size-adjust:100%;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";line-height:1.5}h1,p,h2,h3,h4,h5,h6{margin:0}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}input,button,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0;padding:0;line-height:inherit;color:inherit}input::placeholder{opacity:1;color:#9ca3af}input::webkit-input-placeholder{opacity:1;color:#9ca3af}input::-moz-placeholder{opacity:1;color:#9ca3af}input:-ms-input-placeholder{opacity:1;color:#9ca3af}input::-ms-input-placeholder{opacity:1;color:#9ca3af}legend{padding:0}progress{vertical-align:baseline}small{font-size:80%}svg{display:block;vertical-align:middle}table{text-indent:0;border-color:inherit;border-collapse:collapse}textarea{resize:vertical}textarea::placeholder{opacity:1;color:#9ca3af}textarea::webkit-input-placeholder{opacity:1;color:#9ca3af}textarea::-moz-placeholder{opacity:1;color:#9ca3af}textarea:-ms-input-placeholder{opacity:1;color:#9ca3af}textarea::-ms-input-placeholder{opacity:1;color:#9ca3af}ul,ol{list-style:none;margin:0;padding:0}.container{width:100%}@media (min-width: 640px){.container{max-width:640px}}@media (min-width: 768px){.container{max-width:768px}}@media (min-width: 1024px){.container{max-width:1024px}}@media (min-width: 1280px){.container{max-width:1280px}}@media (min-width: 1536px){.container{max-width:1536px}}.bg-normal{background-color:var(--kolibri-color-normal)}.bg-spin-1{background-color:var(--kolibri-color-spin-1)}.bg-spin-2{background-color:var(--kolibri-color-spin-2)}.bg-spin-3{background-color:var(--kolibri-color-spin-3)}.rounded{border-radius:var(--kolibri-border-radius)}.border-1{border-width:1px}.cursor-pointer{cursor:pointer}.block{display:block}.inline-block{display:inline-block}.flex{display:-webkit-box;display:-ms-flexbox;display:-webkit-flex;display:flex}.inline-flex{display:-webkit-inline-box;display:-ms-inline-flexbox;display:-webkit-inline-flex;display:inline-flex}.table{display:table}.grid{display:-ms-grid;display:grid}.hidden{display:none}.flex-wrap{-ms-flex-wrap:wrap;-webkit-flex-wrap:wrap;flex-wrap:wrap}.items-center{-webkit-box-align:center;-ms-flex-align:center;-webkit-align-items:center;align-items:center}.font-80{font-weight:80}.font-60{font-weight:60}.h-full{height:100%}.h-0\\.41c-2\\.42\\2c 0-4\\.82-1\\.57-4\\.82-3\\.58c0\\.05-0\\.98\\2c 0\\.43-1\\.91\\2c 1\\.07-2\\.65c0\\.3\\2c 0\\.05\\2c 0\\.61\\2c 0\\.09\\2c 0\\.92\\2c 0\\.09c1\\.1\\2c 0\\2c 1\\.69-0\\.58\\2c 1\\.74-1\\.16{height:0.29rem}.text-sm{font-size:0.875rem;line-height:1.25rem}.text-2xl{font-size:1.5rem;line-height:2rem}.text-lg{font-size:1.125rem;line-height:1.75rem}.leading-normal{line-height:1.5}.list-none{list-style-type:none}.list-disc{list-style-type:disc}.list-decimal{list-style-type:decimal}.mb-1{margin-bottom:calc(1 * var(--kolibri-spacing))}.mt-2{margin-top:calc(2 * var(--kolibri-spacing))}.mt-4{margin-top:calc(4 * var(--kolibri-spacing))}.outline{outline-style:solid}.overflow-hidden{overflow:hidden}.p-2{padding:calc(2 * var(--kolibri-spacing))}.p-4{padding:calc(4 * var(--kolibri-spacing))}.px{padding-left:1px;padding-right:1px}.py-2{padding-top:calc(2 * var(--kolibri-spacing));padding-bottom:calc(2 * var(--kolibri-spacing))}.pl-8{padding-left:2rem}.pb-2{padding-bottom:calc(2 * var(--kolibri-spacing))}.tab{-moz-tab-size:4;-o-tab-size:4;tab-size:4}.absolute{position:absolute}.text-center{text-align:center}.hover\\:text-primary:hover{color:var(--kolibri-color-primary)}.text-normal{color:var(--kolibri-color-normal)}.italic{font-style:italic}.underline{-webkit-text-decoration-line:underline;text-decoration-line:underline}.indent{text-indent:1.5rem}.visible{visibility:visible}.w-full{width:100%}.gap-1{grid-gap:calc(1 * var(--kolibri-spacing));gap:calc(1 * var(--kolibri-spacing))}.gap-2{grid-gap:calc(2 * var(--kolibri-spacing));gap:calc(2 * var(--kolibri-spacing))}.grid-flow-col{grid-auto-flow:column}.transform{--tw-translate-x:0;--tw-translate-y:0;--tw-translate-z:0;--tw-rotate:0;--tw-rotate-x:0;--tw-rotate-y:0;--tw-rotate-z:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scale-z:1;-webkit-transform:translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) translateZ(var(--tw-translate-z)) rotate(var(--tw-rotate)) rotateX(var(--tw-rotate-x)) rotateY(var(--tw-rotate-y)) rotateZ(var(--tw-rotate-z)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)) scaleZ(var(--tw-scale-z));-ms-transform:translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) translateZ(var(--tw-translate-z)) rotate(var(--tw-rotate)) rotateX(var(--tw-rotate-x)) rotateY(var(--tw-rotate-y)) rotateZ(var(--tw-rotate-z)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)) scaleZ(var(--tw-scale-z));transform:translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) translateZ(var(--tw-translate-z)) rotate(var(--tw-rotate)) rotateX(var(--tw-rotate-x)) rotateY(var(--tw-rotate-y)) rotateZ(var(--tw-rotate-z)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)) scaleZ(var(--tw-scale-z))}.animate{-webkit-animation-iteration-count:1;animation-iteration-count:1}.filter{--tw-blur:var(--tw-empty, );--tw-brightness:var(--tw-empty, );--tw-contrast:var(--tw-empty, );--tw-grayscale:var(--tw-empty, );--tw-hue-rotate:var(--tw-empty, );--tw-invert:var(--tw-empty, );--tw-saturate:var(--tw-empty, );--tw-sepia:var(--tw-empty, );--tw-drop-shadow:var(--tw-empty, );-webkit-filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.blur{-webkit-backdrop-filter:blur(8px);backdrop-filter:blur(8px)}*{box-sizing:border-box;font-size:inherit;hyphens:auto;letter-spacing:inherit;word-break:break-word;word-spacing:inherit}a,button{align-items:center;background-color:transparent;border:0;cursor:pointer;display:inline-flex !important;gap:0.25rem;justify-items:center}kol-heading-wc{font-weight:700}kol-span-wc{display:grid;align-items:center;gap:0.25rem;justify-items:center}kol-span-wc>span{align-items:center;display:flex;gap:0.25rem;justify-items:center}'}},13726:(t,e,a)=>{a.d(e,{w:()=>r});var i=a(51539);const r=(t,e)=>{(0,i.a)(t,"_level",(t=>"number"==typeof t&&1<=t&&t<=6),new Set(["Number {1, 2, 3, 4, 5, 6}"]),e,{defaultValue:1,required:!0})}}}]);