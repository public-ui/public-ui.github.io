"use strict";(self.webpackChunk_public_ui_storybook=self.webpackChunk_public_ui_storybook||[]).push([[3757],{"./node_modules/@public-ui/components/dist/esm/color-d69786a5.js":(f,p,n)=>{n.d(p,{F:()=>c,N:()=>l});/*!
 * KoliBri - The accessible HTML-Standard
 */var l,c;(function(e){e.Schwarz="#000000",e.Rot="#ff0000",e.Gold="#ffc0c0"})(l||(l={})),function(e){e.Violett="#5f316e",e.Dunkelrot="#780f2d",e.Rot="#c0003c",e.Orange="#cd5038",e.Hellorange="#f7bb3d",e.Gelb="#f9e03a",e.Hellgr\u00FCn="#c1ca31",e.Oliv="#597c39",e.Dunkelgr\u00FCn="#005c45",e.Gr\u00FCn="#00854a",e.T\u00FCrkis="#00818b",e.Hellblau="#80cdec",e.Blau="#0077b6",e.Petrol="#007194",e.Dunkelblau="#004b76",e.Dunkelgrau="#576164",e.Hellgrau="#bec5c9"}(c||(c={}))},"./node_modules/@public-ui/components/dist/esm/kol-badge.entry.js":(f,p,n)=>{n.r(p),n.d(p,{kol_badge:()=>g});var l=n("./node_modules/@public-ui/components/dist/esm/index-a398b9f4.js"),c=n("./node_modules/@public-ui/components/dist/esm/color-d69786a5.js"),e=n("./node_modules/@public-ui/components/dist/esm/a11y.tipps-ff5a1a99.js"),s=n("./node_modules/@public-ui/components/dist/esm/prop.validators-4cac744a.js"),y=n("./node_modules/@public-ui/components/dist/esm/index.m-86dc8c44.js"),h=n("./node_modules/@public-ui/components/dist/esm/index-e722bdb7.js");/*!
 * KoliBri - The accessible HTML-Standard
 */const C=(t,r,a)=>(299*t+587*r+114*a)/1e3>=128?-1:1,m=(t,r,a,o=1)=>{const i=[Math.max(Math.min(Math.round(r[0]+o*Math.max(1,r[0]/100)),255),0),Math.max(Math.min(Math.round(r[1]+o*Math.max(1,r[1]/100)),255),0),Math.max(Math.min(Math.round(r[2]+o*Math.max(1,r[2]/100)),255),0)],b=(0,y.s)(s.r.hex(`rgba(${t.join(",")},1)`),s.r.hex(`rgba(${i.join(",")},1)`)),d=i[0]+i[1]+i[2];return d===0||d===765||b>a?i:m(t,i,a,o)},x=(t,r,a,o=1)=>{if(w.has(t))return w.get(t);const i=m(t,r,a,o);return w.set(t,i),i},w=new Map,u=(t,r=7)=>{let a=[0,0,0,1],o=[255,255,255,1];typeof t=="string"?(a=(0,h.c)(t),o=a):typeof t=="object"&&t!==null&&typeof t.baseColor=="string"&&(a=(0,h.c)(t.baseColor),o=typeof t.contrastColor=="string"?(0,h.c)(t.contrastColor):a);const i=(b=a[0],d=a[1],v=a[2],(299*b+587*d+114*v)/1e3>=128?-1:1);var b,d,v;return o=[...x([a[0],a[1],a[2]],[o[0],o[1],o[2]],r,i),1],{baseColor:s.r.hex(`rgba(${a.join(",")})`),contrastColor:s.r.hex(`rgba(${o.join(",")})`)}},k=`*,::before,::after{-webkit-box-sizing:border-box;box-sizing:border-box;border-width:0;border-style:solid;border-color:var(--kolibri-border-color)}*{--tw-ring-inset:var(--tw-empty, );--tw-ring-offset-width:0px;--tw-ring-offset-color:var(--kolibri-color);--tw-ring-color:rgba(undefined, 0.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000}:root{-moz-tab-size:4;-o-tab-size:4;tab-size:4}:-moz-focusring{outline:1px dotted ButtonText}:-moz-ui-invalid{box-shadow:none}::moz-focus-inner{border-style:none;padding:0}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}[type='search']{-webkit-appearance:textfield;outline-offset:-2px}abbr[title]{-webkit-text-decoration:underline dotted;text-decoration:underline dotted}a{color:inherit;text-decoration:inherit}body{margin:0;font-family:inherit;line-height:inherit}b,strong{font-weight:bolder}button,select{text-transform:none}button,[type='button'],[type='reset'],[type='submit']{-webkit-appearance:button}button{background-color:transparent;background-image:none}button,[role="button"]{cursor:pointer}code{font-size:1em;font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace}fieldset{margin:0;padding:0}html{-webkit-text-size-adjust:100%;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";line-height:1.5}h1,p,h2,h3,h4,h5,h6{margin:0}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}input,button,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0;padding:0;line-height:inherit;color:inherit}input::placeholder{opacity:1;color:#9ca3af}input::webkit-input-placeholder{opacity:1;color:#9ca3af}input::-moz-placeholder{opacity:1;color:#9ca3af}input:-ms-input-placeholder{opacity:1;color:#9ca3af}input::-ms-input-placeholder{opacity:1;color:#9ca3af}legend{padding:0}progress{vertical-align:baseline}small{font-size:80%}svg{display:block;vertical-align:middle}table{text-indent:0;border-color:inherit;border-collapse:collapse}textarea{resize:vertical}textarea::placeholder{opacity:1;color:#9ca3af}textarea::webkit-input-placeholder{opacity:1;color:#9ca3af}textarea::-moz-placeholder{opacity:1;color:#9ca3af}textarea:-ms-input-placeholder{opacity:1;color:#9ca3af}textarea::-ms-input-placeholder{opacity:1;color:#9ca3af}ul,ol{list-style:none;margin:0;padding:0}.container{width:100%}@media (min-width: 640px){.container{max-width:640px}}@media (min-width: 768px){.container{max-width:768px}}@media (min-width: 1024px){.container{max-width:1024px}}@media (min-width: 1280px){.container{max-width:1280px}}@media (min-width: 1536px){.container{max-width:1536px}}.bg-normal{background-color:var(--kolibri-color-normal)}.bg-white{--tw-bg-opacity:1;background-color:rgba(255, 255, 255, var(--tw-bg-opacity))}.bg-spin-1{background-color:var(--kolibri-color-spin-1)}.bg-spin-2{background-color:var(--kolibri-color-spin-2)}.bg-spin-3{background-color:var(--kolibri-color-spin-3)}.rounded{border-radius:var(--kolibri-border-radius)}.border-1{border-width:1px}.cursor-pointer{cursor:pointer}.block{display:block}.inline-block{display:inline-block}.flex{display:-webkit-box;display:-ms-flexbox;display:-webkit-flex;display:flex}.inline-flex{display:-webkit-inline-box;display:-ms-inline-flexbox;display:-webkit-inline-flex;display:inline-flex}.table{display:table}.grid{display:-ms-grid;display:grid}.hidden{display:none}.flex-wrap{-ms-flex-wrap:wrap;-webkit-flex-wrap:wrap;flex-wrap:wrap}.items-center{-webkit-box-align:center;-ms-flex-align:center;-webkit-align-items:center;align-items:center}.content-center{-ms-flex-line-pack:center;-webkit-align-content:center;align-content:center}.font-80{font-weight:80}.font-60{font-weight:60}.h-full{height:100%}.h-0{height:0px}.h-0\\.41c-2\\.42\\2c 0-4\\.82-1\\.57-4\\.82-3\\.58c0\\.05-0\\.98\\2c 0\\.43-1\\.91\\2c 1\\.07-2\\.65c0\\.3\\2c 0\\.05\\2c 0\\.61\\2c 0\\.09\\2c 0\\.92\\2c 0\\.09c1\\.1\\2c 0\\2c 1\\.69-0\\.58\\2c 1\\.74-1\\.16{height:0.29rem}.text-sm{font-size:0.875rem;line-height:1.25rem}.text-2xl{font-size:1.5rem;line-height:2rem}.text-lg{font-size:1.125rem;line-height:1.75rem}.leading-normal{line-height:1.5}.list-none{list-style-type:none}.list-disc{list-style-type:disc}.list-decimal{list-style-type:decimal}.mx-auto{margin-left:auto;margin-right:auto}.mb-1{margin-bottom:calc(1 * var(--kolibri-spacing))}.mt-2{margin-top:calc(2 * var(--kolibri-spacing))}.mt-4{margin-top:calc(4 * var(--kolibri-spacing))}.mr-2{margin-right:calc(2 * var(--kolibri-spacing))}.ml-2{margin-left:calc(2 * var(--kolibri-spacing))}.outline{outline-style:solid}.overflow-hidden{overflow:hidden}.overflow-y-visible{overflow-y:visible}.p-2{padding:calc(2 * var(--kolibri-spacing))}.p-4{padding:calc(4 * var(--kolibri-spacing))}.px{padding-left:1px;padding-right:1px}.py-2{padding-top:calc(2 * var(--kolibri-spacing));padding-bottom:calc(2 * var(--kolibri-spacing))}.pl-8{padding-left:2rem}.pb-2{padding-bottom:calc(2 * var(--kolibri-spacing))}.tab{-moz-tab-size:4;-o-tab-size:4;tab-size:4}.absolute{position:absolute}.text-center{text-align:center}.hover\\:text-primary:hover{color:var(--kolibri-color-primary)}.text-normal{color:var(--kolibri-color-normal)}.italic{font-style:italic}.underline{-webkit-text-decoration-line:underline;text-decoration-line:underline}.indent{text-indent:1.5rem}.visible{visibility:visible}.w-full{width:100%}.w-4\\/5{width:80%}.z-50{z-index:50}.gap-1{grid-gap:calc(1 * var(--kolibri-spacing));gap:calc(1 * var(--kolibri-spacing))}.gap-2{grid-gap:calc(2 * var(--kolibri-spacing));gap:calc(2 * var(--kolibri-spacing))}.grid-flow-col{grid-auto-flow:column}.transform{--tw-translate-x:0;--tw-translate-y:0;--tw-translate-z:0;--tw-rotate:0;--tw-rotate-x:0;--tw-rotate-y:0;--tw-rotate-z:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scale-z:1;-webkit-transform:translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) translateZ(var(--tw-translate-z)) rotate(var(--tw-rotate)) rotateX(var(--tw-rotate-x)) rotateY(var(--tw-rotate-y)) rotateZ(var(--tw-rotate-z)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)) scaleZ(var(--tw-scale-z));-ms-transform:translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) translateZ(var(--tw-translate-z)) rotate(var(--tw-rotate)) rotateX(var(--tw-rotate-x)) rotateY(var(--tw-rotate-y)) rotateZ(var(--tw-rotate-z)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)) scaleZ(var(--tw-scale-z));transform:translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) translateZ(var(--tw-translate-z)) rotate(var(--tw-rotate)) rotateX(var(--tw-rotate-x)) rotateY(var(--tw-rotate-y)) rotateZ(var(--tw-rotate-z)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)) scaleZ(var(--tw-scale-z))}.animate{-webkit-animation-iteration-count:1;animation-iteration-count:1}.filter{--tw-blur:var(--tw-empty, );--tw-brightness:var(--tw-empty, );--tw-contrast:var(--tw-empty, );--tw-grayscale:var(--tw-empty, );--tw-hue-rotate:var(--tw-empty, );--tw-invert:var(--tw-empty, );--tw-saturate:var(--tw-empty, );--tw-sepia:var(--tw-empty, );--tw-drop-shadow:var(--tw-empty, );-webkit-filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.blur{-webkit-backdrop-filter:blur(8px);backdrop-filter:blur(8px)}:host *{-ms-hyphens:var(--kolibri-hyphens);-webkit-hyphens:var(--kolibri-hyphens);hyphens:var(--kolibri-hyphens);font-family:var(--kolibri-font-family);line-height:var(--kolibri-line-height);word-break:break-word}span{display:inline-block;border-radius:var(--kolibri-border-radius);padding-left:calc(2 * var(--kolibri-spacing));padding-right:calc(2 * var(--kolibri-spacing));padding-top:0.125rem;padding-bottom:0.125rem}`;(0,e.f)("[KolBadge] Optimierung des _color-Properties (rgba, rgb, hex usw.).");const _=/^([a-f0-9]{3}|[a-f0-9]{6})$/,g=class{constructor(t){(0,l.r)(this,t),this.bgColorStr="#000",this.colorStr="#fff",this.handleColorChange=r=>{let a,o=r;typeof o=="string"?(_.test(o)&&((0,e.d)("[KolBadge] Bitte verwenden Sie zuk\xFCnftig nur noch das Standard-Farbformat f\xFCr CSS (https://developer.mozilla.org/en-US/docs/Web/CSS/color_value)."),o=`#${o}`),a=u(o)):a=u({baseColor:o.backgroundColor,contrastColor:o.color}),this.bgColorStr=a.baseColor,this.colorStr=a.contrastColor},this._color=c.N.Schwarz,this._icon=void 0,this._iconAlign="left",this._iconOnly=!1,this._label=void 0,this._smartButton=void 0,this.state={_color:c.N.Schwarz}}render(){return(0,l.h)(l.H,null,(0,l.h)("kol-span-wc",{class:{"smart-button":typeof this.state._smartButton=="object"&&this.state._smartButton!==null},style:{backgroundColor:this.bgColorStr,color:this.colorStr},_icon:this._icon,_iconOnly:this._iconOnly,_label:this._label}),typeof this.state._smartButton=="object"&&this.state._smartButton!==null&&(0,l.h)("kol-button-wc",{_ariaLabel:this.state._smartButton._ariaLabel,_customClass:this.state._smartButton._customClass,_disabled:this.state._smartButton._disabled,_icon:this.state._smartButton._icon,_iconOnly:!0,_id:this.state._smartButton._id,_label:this.state._smartButton._label,_on:this.state._smartButton._on,_tooltipAlign:this.state._smartButton._tooltipAlign,_variant:this.state._smartButton._variant}))}validateColor(t){(0,s.a)(this,"_color",r=>typeof r=="string"||typeof r=="object"&&r!==null,new Set(["string","KoliBriColor"]),t,{defaultValue:c.N.Schwarz,hooks:{beforePatch:this.handleColorChange}})}validateSmartButton(t){(0,s.o)(t,()=>{try{t=(0,s.p)(t)}catch(r){}(0,s.s)(this,"_smartButton",t)})}componentWillLoad(){this.validateColor(this._color),this.validateSmartButton(this._smartButton)}static get watchers(){return{_color:["validateColor"],_smartButton:["validateSmartButton"]}}};g.style={default:k}}}]);
