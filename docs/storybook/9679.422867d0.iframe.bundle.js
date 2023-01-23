"use strict";(self.webpackChunk_public_ui_storybook=self.webpackChunk_public_ui_storybook||[]).push([[9679],{"./node_modules/@public-ui/components/dist/esm/a11y.tipps-ff5a1a99.js":(I,M,S)=>{S.d(M,{a:()=>e,b:()=>C,c:()=>c,d:()=>r,e:()=>m,f:()=>l,u:()=>w});var u=S("./node_modules/@public-ui/components/dist/esm/dev.utils-daaf2f39.js");/*!
 * KoliBri - The accessible HTML-Standard
 */const f=new Set,m=h=>{f.has(h)===!1&&(f.add(h),u.L.info(h,{classifier:"\u270Ba11y",overwriteStyle:"; background-color: #09f"}))},z=new Set,C=h=>{z.has(h)===!1&&(z.add(h),u.L.warn(h,{classifier:"\u{1F525}deprecated",forceLog:!0,overwriteStyle:"; background-color: #f00"}))},O=new Set,r=h=>{O.has(h)===!1&&(O.add(h),u.L.debug(h,{classifier:"\u{1F4BB}dev",overwriteStyle:"; background-color: #f09"}))},i=new Set,l=(h,y=!1)=>{i.has(h)===!1&&(i.add(h),h+=y===!0?" \u2705":"",u.L.debug(h,{classifier:"\u{1F31F}feature",overwriteStyle:"; background-color: #309"}))};r("Wir freuen uns \xFCber jedes Feedback, Kommentare, Screenshots oder Demo-Links von einer auf KoliBri-basierenden Anwendung (kolibri@itzbund.de). Vielen Dank!");const p=new Set,v=h=>{p.has(h)===!1&&(p.add(h),Log.debug(h,{classifier:"\u{1F4D1}ui/ux",overwriteStyle:"; background-color: #060;"}))},c=()=>{m(`"Disabled" schr\xE4nkt die Zug\xE4nglichkeit und Sichtbarkeit ein. Wir empfehlen aus Sicht der Barrierefreiheit readonly- statt disabled-Attribut zu verwenden.
- https://uxdesign.cc/is-it-ok-to-grey-out-disabled-buttons-8afa74a0fae`)},e=h=>{typeof h=="string"&&h!==""||m(`Manche Strukturelemente, wie bspw. der nav-Tag, k\xF6nnen mehrfach in einer Webseite verwendet werden. Damit die gleichnamigen Strukturelemente voneinander unterschieden werden k\xF6nnen, ist es erforderlich ein Aria-Label zu setzen.
- https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/Navigation_Role#accessibility_concerns`)},w=(h,y=8)=>{var b;y>7&&(b=`[${h}] Innerhalb von Navigationsstrukturen wird empfohlen nicht mehr als 7 Men\xFCpunkte zu verwenden.

Links:
- https://de.ryte.com/wiki/Millersche_Zahl
- https://de.wikipedia.org/wiki/Millersche_Zahl`,p.has(b)===!1&&(p.add(b),u.L.debug(b,{classifier:"\u{1F4D1}ui/ux",overwriteStyle:"; background-color: #060;"})))}},"./node_modules/@public-ui/components/dist/esm/index.m-86dc8c44.js":(I,M,S)=>{S.d(M,{f:()=>v,s:()=>p});/*!
 * KoliBri - The accessible HTML-Standard
 */var u=.2126,f=.7152,m=.0722,z=1/12.92;function C(c){return Math.pow((c+.055)/1.055,2.4)}function O(c){var e=c[0]/255,w=c[1]/255,h=c[2]/255,y=e<=.03928?e*z:C(e),b=w<=.03928?w*z:C(w),E=h<=.03928?h*z:C(h);return y*u+b*f+E*m}function r(c){var e=255;(c=c.replace(/^#/,"")).length===8&&(e=parseInt(c.slice(6,8),16),c=c.substring(0,6)),c.length===4&&(e=parseInt(c.slice(3,4).repeat(2),16),c=c.substring(0,3)),c.length===3&&(c=c[0]+c[0]+c[1]+c[1]+c[2]+c[2]);var w=parseInt(c,16);return[w>>16,w>>8&255,255&w,e]}function i(c,e){return(Math.max(c,e)+.05)/(Math.min(c,e)+.05)}function l(c,e){return i(O(c),O(e))}function p(c,e){return l(r(c),r(e))}function v(c){return c>=7?"AAA":c>=4.5?"AA":c>=3?"AA Large":"Fail"}},"./node_modules/@public-ui/components/dist/esm/kol-table.entry.js":(I,M,S)=>{S.r(M),S.d(M,{kol_table:()=>O});var u=S("./node_modules/@public-ui/components/dist/esm/index-a398b9f4.js"),f=S("./node_modules/@public-ui/components/dist/esm/prop.validators-4cac744a.js");/*!
 * KoliBri - The accessible HTML-Standard
 */const m=`/* windicss-touch: 1639175625181 */
/* windicss-touch: 1649810622229 */
/* windicss layer base */
*, ::before, ::after {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  border-width: 0;
  border-style: solid;
  border-color: var(--kolibri-border-color);
}
* {
  --tw-ring-inset: var(--tw-empty,/*!*/ /*!*/);
  --tw-ring-offset-width: 0px;
  --tw-ring-offset-color: var(--kolibri-color);
  --tw-ring-color: rgba(undefined, 0.5);
  --tw-ring-offset-shadow: 0 0 #0000;
  --tw-ring-shadow: 0 0 #0000;
  --tw-shadow: 0 0 #0000;
}
:root {
  -moz-tab-size: 4;
  -o-tab-size: 4;
  tab-size: 4;
}
:-moz-focusring {
  outline: 1px dotted ButtonText;
}
:-moz-ui-invalid {
  box-shadow: none;
}
::moz-focus-inner {
  border-style: none;
  padding: 0;
}
::-webkit-inner-spin-button, ::-webkit-outer-spin-button {
  height: auto;
}
::-webkit-search-decoration {
  -webkit-appearance: none;
}
::-webkit-file-upload-button {
  -webkit-appearance: button;
  font: inherit;
}
[type='search'] {
  -webkit-appearance: textfield;
  outline-offset: -2px;
}
abbr[title] {
  -webkit-text-decoration: underline dotted;
  text-decoration: underline dotted;
}
a {
  color: inherit;
  text-decoration: inherit;
}
body {
  margin: 0;
  font-family: inherit;
  line-height: inherit;
}
b, strong {
  font-weight: bolder;
}
button, select {
  text-transform: none;
}
button, [type='button'], [type='reset'], [type='submit'] {
  -webkit-appearance: button;
}
button {
  background-color: transparent;
  background-image: none;
}
button, [role="button"] {
  cursor: pointer;
}
code {
  font-size: 1em;
  font-family: ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;
}
fieldset {
  margin: 0;
  padding: 0;
}
html {
  -webkit-text-size-adjust: 100%;
  font-family: ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
  line-height: 1.5;
}
h1, p, h2, h3, h4, h5, h6 {
  margin: 0;
}
h1, h2, h3, h4, h5, h6 {
  font-size: inherit;
  font-weight: inherit;
}
input, button, optgroup, select, textarea {
  font-family: inherit;
  font-size: 100%;
  line-height: 1.15;
  margin: 0;
  padding: 0;
  line-height: inherit;
  color: inherit;
}
input::placeholder {
  opacity: 1;
  color: #9ca3af;
}
input::webkit-input-placeholder {
  opacity: 1;
  color: #9ca3af;
}
input::-moz-placeholder {
  opacity: 1;
  color: #9ca3af;
}
input:-ms-input-placeholder {
  opacity: 1;
  color: #9ca3af;
}
input::-ms-input-placeholder {
  opacity: 1;
  color: #9ca3af;
}
legend {
  padding: 0;
}
progress {
  vertical-align: baseline;
}
small {
  font-size: 80%;
}
svg {
  display: block;
  vertical-align: middle;
}
table {
  text-indent: 0;
  border-color: inherit;
  border-collapse: collapse;
}
textarea {
  resize: vertical;
}
textarea::placeholder {
  opacity: 1;
  color: #9ca3af;
}
textarea::webkit-input-placeholder {
  opacity: 1;
  color: #9ca3af;
}
textarea::-moz-placeholder {
  opacity: 1;
  color: #9ca3af;
}
textarea:-ms-input-placeholder {
  opacity: 1;
  color: #9ca3af;
}
textarea::-ms-input-placeholder {
  opacity: 1;
  color: #9ca3af;
}
ul, ol {
  list-style: none;
  margin: 0;
  padding: 0;
}
/* windicss layer components */
/* windicss layer utilities */
.container {
  width: 100%;
}
@media (min-width: 640px) {
  .container {
    max-width: 640px;
  }
}
@media (min-width: 768px) {
  .container {
    max-width: 768px;
  }
}
@media (min-width: 1024px) {
  .container {
    max-width: 1024px;
  }
}
@media (min-width: 1280px) {
  .container {
    max-width: 1280px;
  }
}
@media (min-width: 1536px) {
  .container {
    max-width: 1536px;
  }
}
.bg-normal {
  background-color: var(--kolibri-color-normal);
}
.bg-white {
  --tw-bg-opacity: 1;
  background-color: rgba(255, 255, 255, var(--tw-bg-opacity));
}
.bg-spin-1 {
  background-color: var(--kolibri-color-spin-1);
}
.bg-spin-2 {
  background-color: var(--kolibri-color-spin-2);
}
.bg-spin-3 {
  background-color: var(--kolibri-color-spin-3);
}
.rounded {
  border-radius: var(--kolibri-border-radius);
}
.border-1 {
  border-width: 1px;
}
.cursor-pointer {
  cursor: pointer;
}
.block {
  display: block;
}
.inline-block {
  display: inline-block;
}
.flex {
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
}
.inline-flex {
  display: -webkit-inline-box;
  display: -ms-inline-flexbox;
  display: -webkit-inline-flex;
  display: inline-flex;
}
.table {
  display: table;
}
.grid {
  display: -ms-grid;
  display: grid;
}
.hidden {
  display: none;
}
.flex-wrap {
  -ms-flex-wrap: wrap;
  -webkit-flex-wrap: wrap;
  flex-wrap: wrap;
}
.items-center {
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}
.content-center {
  -ms-flex-line-pack: center;
  -webkit-align-content: center;
  align-content: center;
}
.font-80 {
  font-weight: 80;
}
.font-60 {
  font-weight: 60;
}
.h-full {
  height: 100%;
}
.h-0 {
  height: 0px;
}
.h-0\\.41c-2\\.42\\2c 0-4\\.82-1\\.57-4\\.82-3\\.58c0\\.05-0\\.98\\2c 0\\.43-1\\.91\\2c 1\\.07-2\\.65c0\\.3\\2c 0\\.05\\2c 0\\.61\\2c 0\\.09\\2c 0\\.92\\2c 0\\.09c1\\.1\\2c 0\\2c 1\\.69-0\\.58\\2c 1\\.74-1\\.16 {
  height: 0.29rem;
}
.text-sm {
  font-size: 0.875rem;
  line-height: 1.25rem;
}
.text-2xl {
  font-size: 1.5rem;
  line-height: 2rem;
}
.text-lg {
  font-size: 1.125rem;
  line-height: 1.75rem;
}
.leading-normal {
  line-height: 1.5;
}
.list-none {
  list-style-type: none;
}
.list-disc {
  list-style-type: disc;
}
.list-decimal {
  list-style-type: decimal;
}
.mx-auto {
  margin-left: auto;
  margin-right: auto;
}
.mb-1 {
  margin-bottom: calc(1 * var(--kolibri-spacing));
}
.mt-2 {
  margin-top: calc(2 * var(--kolibri-spacing));
}
.mt-4 {
  margin-top: calc(4 * var(--kolibri-spacing));
}
.mr-2 {
  margin-right: calc(2 * var(--kolibri-spacing));
}
.ml-2 {
  margin-left: calc(2 * var(--kolibri-spacing));
}
.outline {
  outline-style: solid;
}
.overflow-hidden {
  overflow: hidden;
}
.overflow-y-visible {
  overflow-y: visible;
}
.p-2 {
  padding: calc(2 * var(--kolibri-spacing));
}
.p-4 {
  padding: calc(4 * var(--kolibri-spacing));
}
.px {
  padding-left: 1px;
  padding-right: 1px;
}
.py-2 {
  padding-top: calc(2 * var(--kolibri-spacing));
  padding-bottom: calc(2 * var(--kolibri-spacing));
}
.pl-8 {
  padding-left: 2rem;
}
.pb-2 {
  padding-bottom: calc(2 * var(--kolibri-spacing));
}
.tab {
  -moz-tab-size: 4;
  -o-tab-size: 4;
  tab-size: 4;
}
.absolute {
  position: absolute;
}
.text-center {
  text-align: center;
}
.hover\\:text-primary:hover {
  color: var(--kolibri-color-primary);
}
.text-normal {
  color: var(--kolibri-color-normal);
}
.italic {
  font-style: italic;
}
.underline {
  -webkit-text-decoration-line: underline;
  text-decoration-line: underline;
}
.indent {
  text-indent: 1.5rem;
}
.visible {
  visibility: visible;
}
.w-full {
  width: 100%;
}
.w-4\\/5 {
  width: 80%;
}
.z-50 {
  z-index: 50;
}
.gap-1 {
  grid-gap: calc(1 * var(--kolibri-spacing));
  gap: calc(1 * var(--kolibri-spacing));
}
.gap-2 {
  grid-gap: calc(2 * var(--kolibri-spacing));
  gap: calc(2 * var(--kolibri-spacing));
}
.grid-flow-col {
  grid-auto-flow: column;
}
.transform {
  --tw-translate-x: 0;
  --tw-translate-y: 0;
  --tw-translate-z: 0;
  --tw-rotate: 0;
  --tw-rotate-x: 0;
  --tw-rotate-y: 0;
  --tw-rotate-z: 0;
  --tw-skew-x: 0;
  --tw-skew-y: 0;
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  --tw-scale-z: 1;
  -webkit-transform: translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) translateZ(var(--tw-translate-z)) rotate(var(--tw-rotate)) rotateX(var(--tw-rotate-x)) rotateY(var(--tw-rotate-y)) rotateZ(var(--tw-rotate-z)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)) scaleZ(var(--tw-scale-z));
  -ms-transform: translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) translateZ(var(--tw-translate-z)) rotate(var(--tw-rotate)) rotateX(var(--tw-rotate-x)) rotateY(var(--tw-rotate-y)) rotateZ(var(--tw-rotate-z)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)) scaleZ(var(--tw-scale-z));
  transform: translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) translateZ(var(--tw-translate-z)) rotate(var(--tw-rotate)) rotateX(var(--tw-rotate-x)) rotateY(var(--tw-rotate-y)) rotateZ(var(--tw-rotate-z)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)) scaleZ(var(--tw-scale-z));
}
.animate {
  -webkit-animation-iteration-count: 1;
  animation-iteration-count: 1;
}
.filter {
  --tw-blur: var(--tw-empty,/*!*/ /*!*/);
  --tw-brightness: var(--tw-empty,/*!*/ /*!*/);
  --tw-contrast: var(--tw-empty,/*!*/ /*!*/);
  --tw-grayscale: var(--tw-empty,/*!*/ /*!*/);
  --tw-hue-rotate: var(--tw-empty,/*!*/ /*!*/);
  --tw-invert: var(--tw-empty,/*!*/ /*!*/);
  --tw-saturate: var(--tw-empty,/*!*/ /*!*/);
  --tw-sepia: var(--tw-empty,/*!*/ /*!*/);
  --tw-drop-shadow: var(--tw-empty,/*!*/ /*!*/);
  -webkit-filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
}
.blur {
  -webkit-backdrop-filter: blur(8px);
  backdrop-filter: blur(8px);
}
:host * {
  -ms-hyphens: var(--kolibri-hyphens);
  -webkit-hyphens: var(--kolibri-hyphens);
  hyphens: var(--kolibri-hyphens);
  font-family: var(--kolibri-font-family);
  line-height: var(--kolibri-line-height);
  word-break: break-word;
}

:host {
  overflow: hidden;
}
:host > div {
  overflow-x: auto;
  border-radius: var(--kolibri-border-radius);
  border-style: solid;
  border-width: 1px;
}
:host > div table {
  border: 0;
  width: 100%;
}
:host > div table tr {
  border-top-style: solid;
  border-top-width: 1px;
  padding-top: calc(1 * var(--kolibri-spacing));
  padding-bottom: calc(1 * var(--kolibri-spacing));
  padding-left: calc(2 * var(--kolibri-spacing));
  padding-right: calc(2 * var(--kolibri-spacing));
}
:host > div table tr th, :host > div table tr td {
  border-right-style: solid;
  border-right-width: 1px;
  padding-top: calc(1 * var(--kolibri-spacing));
  padding-bottom: calc(1 * var(--kolibri-spacing));
  padding-left: calc(2 * var(--kolibri-spacing));
  padding-right: calc(2 * var(--kolibri-spacing));
}
:host > div table tr th:last-child,
:host > div table tr td:last-child {
  border: 0;
}
:host > div table tr th, :host > div table tr .th {
  --tw-bg-opacity: 1;
  background-color: rgba(229, 231, 235, var(--tw-bg-opacity));
}
:host > div table tr:nth-child(even) {
  --tw-bg-opacity: 1;
  background-color: rgba(243, 244, 246, var(--tw-bg-opacity));
}
:host > div table tr:nth-child(odd) {
  @apply white;
}
:host > div.pagination {
  border-style: none;
  display: -ms-grid;
  display: grid;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
  -ms-flex-line-pack: center;
  -webkit-align-content: center;
  align-content: center;
  padding-top: calc(2 * var(--kolibri-spacing));
  padding-left: calc(1 * var(--kolibri-spacing));
  padding-right: calc(1 * var(--kolibri-spacing));
  width: 100%;
  grid-gap: calc(2 * var(--kolibri-spacing));
  gap: calc(2 * var(--kolibri-spacing));
  grid-auto-flow: column;
}
:host > div.pagination > div::last-child {
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
  -ms-grid-column-align: end;
  justify-self: end;
  grid-gap: calc(2 * var(--kolibri-spacing));
  gap: calc(2 * var(--kolibri-spacing));
}`,z=[10,20,50,100],C=new Map,O=class{constructor(r){(0,u.r)(this,r),this.horizontal=!0,this.sortDirections=new Map,this.showPagination=!1,this.pageStartSlice=0,this.pageEndSlice=10,this.setSortDirection=(i,l)=>{this.sortDirections.clear(),this.sortDirections.set(i,l),this.sortFunction=i},this.handlePagination={onClick:(i,l)=>{var p;typeof((p=this.state._pagination._on)===null||p===void 0?void 0:p.onClick)=="function"&&this.state._pagination._on.onClick(i,l),(0,f.s)(this,"_pagination",Object.assign(Object.assign({},this.state._pagination),{_page:l}))},onChangePage:(i,l)=>{var p;typeof((p=this.state._pagination._on)===null||p===void 0?void 0:p.onChangePage)=="function"&&this.state._pagination._on.onChangePage(i,l),(0,f.s)(this,"_pagination",Object.assign(Object.assign({},this.state._pagination),{_page:l}))},onChangePageSize:(i,l)=>{var p;typeof((p=this.state._pagination._on)===null||p===void 0?void 0:p.onChangePageSize)=="function"&&this.state._pagination._on.onChangePageSize(i,l),(0,f.s)(this,"_pagination",Object.assign(Object.assign({},this.state._pagination),{_pageSize:l})),(0,f.s)(this,"_pageSize",l)}},this.beforePatchPagination=(i,l,p,v)=>{v==="_pagination"&&(this.showPagination=i===!0||i===""||typeof i=="object"&&i!==null)},this.updateSortedData=()=>{let i=this.state._data;if(typeof this.sortFunction=="function")switch(this.sortDirections.get(this.sortFunction)){case"NOS":i=[...this.state._data];break;case"ASC":i=this.sortFunction([...this.state._data]);break;default:i=this.sortFunction([...this.state._data]).reverse()}(0,f.s)(this,"_sortedData",i)},this._caption=void 0,this._data=void 0,this._headers=void 0,this._minWidth=void 0,this._pagination=void 0,this.state={_caption:"",_data:[],_headers:{horizontal:[],vertical:[]},_pagination:{_page:1,_pageSize:10,_total:0},_sortedData:[]}}validateCaption(r){(0,f.w)(this,"_caption",r,{required:!0})}validateData(r){(0,f.f)(r,()=>{(0,f.o)(r,()=>{r===void 0&&(r=[]);try{r=(0,f.p)(r)}catch(i){}Array.isArray(r)&&r.find(i=>!(typeof i=="object"&&i!==null))===void 0&&(0,f.s)(this,"_data",r,{afterPatch:()=>{const i=setTimeout(()=>{clearTimeout(i),this.updateSortedData()})}})})})}validateHeaders(r){(0,f.f)(r,()=>{(0,f.o)(r,()=>{try{r=(0,f.p)(r)}catch(i){}(0,f.a)(this,"_headers",i=>typeof i=="object"&&i!==null,new Set(["KoliBriTableHeaders"]),r,{hooks:{beforePatch:i=>{var l,p;const v=i;(l=v.horizontal)===null||l===void 0||l.forEach(c=>{c.forEach(e=>{typeof e.sort=="function"&&typeof e.sortDirection=="string"&&this.setSortDirection(e.sort,e.sortDirection)})}),(p=v.vertical)===null||p===void 0||p.forEach(c=>{c.forEach(e=>{typeof e.sort=="function"&&typeof e.sortDirection=="string"&&this.setSortDirection(e.sort,e.sortDirection)})})}}})})})}validateMinWidth(r){(0,f.w)(this,"_minWidth",r,{defaultValue:void 0})}validatePagination(r){try{r=(0,f.p)(r)}catch(i){}(0,f.a)(this,"_pagination",()=>!0,new Set(["boolean","KoliBriTablePagination"]),r,{hooks:{beforePatch:this.beforePatchPagination}})}componentWillLoad(){this.validateCaption(this._caption),this.validateData(this._data),this.validateHeaders(this._headers),this.validateMinWidth(this._minWidth),this.validatePagination(this._pagination)}getNumberOfCols(r,i){let l=0;return r.forEach(p=>{let v=0;p.forEach(c=>{var e;return v+=(e=c.colSpan)!==null&&e!==void 0?e:1}),l<v&&(l=v)}),l===0&&(l=i.length),l}getNumberOfRows(r,i){let l=0;return r.forEach(p=>{let v=0;p.forEach(c=>{var e;return v+=(e=c.rowSpan)!==null&&e!==void 0?e:1}),l<v&&(l=v)}),l===0&&(l=i.length),l}filterHeaderKeys(r){const i=[];return r.forEach(l=>{l.forEach(p=>{typeof p.key=="string"&&i.push(p)})}),i}getPrimaryHeader(r){var i,l;let p=this.filterHeaderKeys((i=r.horizontal)!==null&&i!==void 0?i:[]);return this.horizontal=!0,p.length===0&&(p=this.filterHeaderKeys((l=r.vertical)!==null&&l!==void 0?l:[]),p.length>0&&(this.horizontal=!1)),p}createDataField(r,i){i.horizontal=Array.isArray(i==null?void 0:i.horizontal)?i.horizontal:[],i.vertical=Array.isArray(i==null?void 0:i.vertical)?i.vertical:[];const l=this.getPrimaryHeader(i),p=this.getNumberOfCols(i.horizontal,r),v=this.getNumberOfRows(i.vertical,r),c=[],e=[],w=[];i.vertical.forEach((h,y)=>{e[y]=0,w[y]=[]});for(let h=0;h<v;h++){const y=[];i.vertical.forEach((b,E)=>{let N=0;if(w[E].forEach(x=>N+=x),N<=h){const x=b[h-N+e[E]];if(typeof x=="object"){y.push(Object.assign(Object.assign({},x),{asTd:!1,data:{}}));let T=1;if(typeof x.rowSpan=="number"&&x.rowSpan>1&&(T=x.rowSpan),w[E].push(T),typeof x.colSpan=="number"&&x.colSpan>1)for(let H=1;H<x.colSpan;H++)w[E+H].push(T);e[E]++}}});for(let b=0;b<p;b++)this.horizontal===!0?typeof l[b]=="object"&&l[b]!==null&&typeof l[b].key=="string"&&typeof r[h]=="object"&&r[h]!==null&&y.push(Object.assign(Object.assign({},l[b]),{colSpan:void 0,data:r[h],label:r[h][l[b].key],rowSpan:void 0})):typeof l[h]=="object"&&l[h]!==null&&typeof l[h].key=="string"&&typeof r[b]=="object"&&r[b]!==null&&y.push(Object.assign(Object.assign({},l[h]),{colSpan:void 0,data:r[b],label:r[b][l[h].key],rowSpan:void 0}));c.push(y)}if(r.length===0){let h=0,y=0;Array.isArray(i.horizontal)&&i.horizontal.length>0&&i.horizontal[0].forEach(E=>{h+=E.colSpan||1}),Array.isArray(i.vertical)&&i.vertical.length>0&&(h-=i.vertical.length,i.vertical[0].forEach(E=>{y+=E.rowSpan||1}));const b={colSpan:h,label:"Es sind keine Eintr\xE4ge vorhanden.",render:void 0,rowSpan:Math.max(y,1)};c.length===0?c.push([b]):c[0].push(b)}return c}selectDisplayedData(r,i,l){return typeof i=="number"&&i>0&&typeof l=="number"&&l>0?(this.pageStartSlice=i*(l-1),this.pageEndSlice=i*l>r.length?r.length:i*l,r.slice(this.pageStartSlice,this.pageEndSlice)):(this.pageStartSlice=0,this.pageEndSlice=r.length,r)}cellRender(r,i){i instanceof HTMLElement&&(clearTimeout(C.get(i)),C.set(i,setTimeout(()=>{if(clearTimeout(C.get(i)),typeof r.render=="function"){const l=r.render(i,{asTd:r.asTd,label:r.label,textAlign:r.textAlign,width:r.width},r.data,this.state._data);typeof l=="string"&&(i.innerHTML=l)}})))}render(){var r,i;const l=this.selectDisplayedData(this.state._sortedData,this.showPagination?(i=(r=this.state._pagination)===null||r===void 0?void 0:r._pageSize)!==null&&i!==void 0?i:10:this.state._sortedData.length,this.state._pagination._page||1),p=this.createDataField(l,this.state._headers);return(0,u.h)(u.H,null,(0,u.h)("div",{tabindex:"0"},(0,u.h)("table",{style:{minWidth:this.state._minWidth}},(0,u.h)("caption",null,this.state._caption),Array.isArray(this.state._headers.horizontal)&&(0,u.h)("thead",null,this.state._headers.horizontal.map((v,c)=>(0,u.h)("tr",{key:`thead-${c}`},v.map((e,w)=>e.asTd===!0?(0,u.h)("td",{key:`thead-${c}-${w}-${e.label}`,class:{[e.textAlign]:typeof e.textAlign=="string"&&e.textAlign.length>0},colSpan:e.colSpan,rowSpan:e.rowSpan,style:{textAlign:e.textAlign,width:e.width},ref:typeof e.render=="function"?h=>{this.cellRender(e,h)}:void 0,innerHTML:typeof e.render!="function"?e.label:""}):(0,u.h)("th",{key:`thead-${c}-${w}-${e.label}`,scope:typeof e.colSpan=="number"&&e.colSpan>1?"colgroup":"col",colSpan:e.colSpan,rowSpan:e.rowSpan,style:{width:e.width},"aria-sort":typeof e.sort=="function"?e.sort!==this.sortFunction||this.sortDirections.get(e.sort)==="NOS"||this.sortDirections.get(e.sort)===void 0?"none":this.sortDirections.get(e.sort)==="ASC"?"ascending":"descending":void 0,"data-sort":`sort-${this.sortDirections.get(e.sort)}`},(0,u.h)("div",{class:"w-full flex gap-1 items-center"},(0,u.h)("div",{class:{"w-full":!0,[e.textAlign]:typeof e.textAlign=="string"&&e.textAlign.length>0},innerHTML:e.label,style:{textAlign:e.textAlign}}),typeof e.sort=="function"&&(0,u.h)("kol-button",{exportparts:"button,ghost",_ariaLabel:"Sortierung von "+e.label+" \xE4ndern",_icon:e.sort!==this.sortFunction||this.sortDirections.get(e.sort)==="NOS"||this.sortDirections.get(e.sort)===void 0?"fas fa-sort":this.sortDirections.get(e.sort)==="ASC"?"fas fa-sort-up":"fas fa-sort-down",_iconOnly:!0,_label:"Sortierung von "+e.label+" \xE4ndern",_on:{onClick:()=>{if(typeof e.sort=="function"){switch(this.sortFunction=e.sort,this.sortDirections.get(this.sortFunction)){case"ASC":this.setSortDirection(this.sortFunction,"DESC");break;case"DESC":this.setSortDirection(this.sortFunction,"NOS");break;default:this.setSortDirection(this.sortFunction,"ASC")}this.updateSortedData()}}},_variant:"ghost"}))))))),(0,u.h)("tbody",null,p.map((v,c)=>(0,u.h)("tr",{key:`tbody-${c}`},v.map((e,w)=>e.asTd===!1?(0,u.h)("th",{key:`tbody-${c}-${w}-${e.label}`,scope:typeof e.rowSpan=="number"&&e.rowSpan>1?"rowgroup":"row",colSpan:e.colSpan,rowSpan:e.rowSpan,style:{width:e.width},"aria-sort":typeof e.sort=="function"?e.sort!==this.sortFunction||this.sortDirections.get(e.sort)==="NOS"||this.sortDirections.get(e.sort)===void 0?"none":this.sortDirections.get(e.sort)==="ASC"?"ascending":"descending":void 0,"data-sort":`sort-${this.sortDirections.get(e.sort)}`},(0,u.h)("div",{class:"w-full flex gap-1 items-center"},(0,u.h)("div",{class:{"w-full":!0,[e.textAlign]:typeof e.textAlign=="string"&&e.textAlign.length>0},innerHTML:e.label,style:{textAlign:e.textAlign}}),typeof e.sort=="function"&&(0,u.h)("kol-button",{exportparts:"button,ghost",_ariaLabel:"Sortierung von "+e.label+" \xE4ndern",_icon:e.sort!==this.sortFunction||this.sortDirections.get(e.sort)==="NOS"||this.sortDirections.get(e.sort)===void 0?"fas fa-sort":this.sortDirections.get(e.sort)==="ASC"?"fas fa-sort-up":"fas fa-sort-down",_iconOnly:!0,_label:"Sortierung von "+e.label+" \xE4ndern",_on:{onClick:()=>{if(typeof e.sort=="function"){switch(this.sortFunction=e.sort,this.sortDirections.get(this.sortFunction)){case"ASC":this.setSortDirection(this.sortFunction,"DESC");break;case"DESC":this.setSortDirection(this.sortFunction,"NOS");break;default:this.setSortDirection(this.sortFunction,"ASC")}this.updateSortedData()}}},_variant:"ghost"}))):(0,u.h)("td",{key:`tbody-${c}-${w}-${e.label}`,class:{[e.textAlign]:typeof e.textAlign=="string"&&e.textAlign.length>0},colSpan:e.colSpan,rowSpan:e.rowSpan,style:{textAlign:e.textAlign,width:e.width},ref:typeof e.render=="function"?h=>{this.cellRender(e,h)}:void 0,innerHTML:typeof e.render!="function"?e.label:""}))))))),this.pageEndSlice>0&&this.showPagination&&(0,u.h)("div",{class:"pagination"},(0,u.h)("span",null,"Eintr\xE4ge ",this.pageEndSlice>0?this.pageStartSlice+1:0," bis ",this.pageEndSlice," von"," ",this.state._pagination._total||(Array.isArray(this.state._data)?this.state._data.length:0)," angezeigt"),(0,u.h)("div",null,(0,u.h)("kol-pagination",{_boundaryCount:this.state._pagination._boundaryCount,_customClass:this.state._pagination._customClass,_on:this.handlePagination,_page:this.state._pagination._page,_pageSize:this.state._pagination._pageSize,_pageSizeOptions:this.state._pagination._pageSizeOptions||z,_siblingCount:this.state._pagination._siblingCount,_tooltipAlign:"bottom",_total:this.state._pagination._total||this.state._data.length}))))}static get watchers(){return{_caption:["validateCaption"],_data:["validateData"],_headers:["validateHeaders"],_minWidth:["validateMinWidth"],_pagination:["validatePagination"]}}};O.style={default:m}},"./node_modules/@public-ui/components/dist/esm/prop.validators-4cac744a.js":(I,M,S)=>{S.d(M,{K:()=>L,a:()=>F,b:()=>bt,c:()=>mt,d:()=>wt,e:()=>gt,f:()=>q,g:()=>U,h:()=>et,i:()=>_t,j:()=>A,k:()=>Y,l:()=>W,m:()=>xt,n:()=>V,o:()=>R,p:()=>J,q:()=>tt,r:()=>i,s:()=>$,t:()=>X,w:()=>vt});var u=S("./node_modules/@public-ui/components/dist/esm/index.m-86dc8c44.js"),f=S("./node_modules/@public-ui/components/dist/esm/a11y.tipps-ff5a1a99.js"),m=S("./node_modules/@public-ui/components/dist/esm/dev.utils-daaf2f39.js"),z=S("./node_modules/@public-ui/components/dist/esm/index-d870d3e1.js");/*!
 * KoliBri - The accessible HTML-Standard
 */const C=(t,n)=>{n.forEach(o=>{t.has(o)===!1&&t.add(o)})},O=(t,n=document)=>{if(n instanceof Document||n instanceof HTMLElement||n instanceof ShadowRoot){const o=new Set;C(o,n.querySelectorAll(t));const a=n.querySelectorAll('[class*="hydrated"]');for(let s=0;s<a.length;s++){const d=a[s].shadowRoot;C(o,O(t,typeof d=="object"&&d!==null?d:a[s]))}return Array.from(o)}throw new Error("The parameter document for the method querySelectorAll is not type of Document, HTMLElement or ShadowRoot.")},r=(t,n=document)=>{if(n instanceof Document||n instanceof HTMLElement||n instanceof ShadowRoot){let o=n.querySelector(t);if(o===null){const a=n.querySelectorAll('[class*="hydrated"]');for(let s=0;s<a.length;s++){const d=a[s].shadowRoot;if(o=r(t,typeof d=="object"&&d!==null?d:a[s]),o!==null)break}}return o}throw new Error("The parameter document for the method querySelector is not type of Document, HTMLElement or ShadowRoot.")};var i=w,l=w,p=h,v=y,c=b,e=E;function w(t){var n=N(t);return n.length==3?n.concat(255):(n[3]=Math.round(n[3]),n)}function h(t){var n=N(t);return{r:n[0],g:n[1],b:n[2],a:n.length==3?255:Math.round(n[3])}}function y(t){var n=N(t);return n.length==3&&n.push(255),n[3]==255?"rgb("+n[0]+", "+n[1]+", "+n[2]+")":n[3]==0?"rgba("+n[0]+", "+n[1]+", "+n[2]+", 0)":"rgba("+n[0]+", "+n[1]+", "+n[2]+", "+String(n[3]/255).substr(1)+")"}function b(t){(n=N(t)).length==3&&n.push(255);var n,o=n[3]==255,a=x(n[0]),s=x(n[1]),d=x(n[2]),g=T(a,s,d,n=x(Math.round(n[3])));return o?g?"#"+a.charAt(0)+s.charAt(0)+d.charAt(0):"#"+a+s+d:g?"#"+a.charAt(0)+s.charAt(0)+d.charAt(0)+n.charAt(0):"#"+a+s+d+n}function E(t){var n=N(t);return n.length==3?n.push(255):n[3]=Math.round(n[3]),(n[3]<<24>>>0|n[0]<<16|n[1]<<8|n[2])>>>0}function N(t){return typeof t=="string"?H(t=t.toLowerCase())||ot(t)||rt(t)||dt(t)||ht(t)||[0,0,0,255]:st(t)||lt(t)||ct(t)||[0,0,0,255]}function x(t){var n=t.toString(16);return n.length==1?"0"+n:n}function T(t,n,o,a){var s=["ff","00","11","22","33","44","55","66","77","88","99","aa","bb","cc","dd","ee"];return s.indexOf(t)!=-1&&s.indexOf(n)!=-1&&s.indexOf(o)!=-1&&s.indexOf(a)!=-1}function H(t){return t=="red"?[255,0,0]:t=="green"?[0,255,0]:t=="blue"?[0,0,255]:t=="black"?[0,0,0]:t=="white"?[255,255,255]:t=="cyan"?[0,255,255]:t=="gray"||t=="grey"?[128,128,128]:t=="magenta"||t=="pink"?[255,0,255]:t=="yellow"?[255,255,0]:void 0}function j(t){return t.length==1?parseInt(t+t,16):parseInt(t,16)}function ot(t){var n=t.replace(/^#/,""),o=n.length;if(o==3||o==4){var a=j(n[0]),s=j(n[1]),d=j(n[2]),g=o==3?255:j(n[3]);return isNaN(a)||isNaN(s)||isNaN(d)||isNaN(g)?void 0:[a,s,d,g]}}function rt(t){var n=t.replace(/^#/,""),o=n.length;if(o==6||o==8){var a=j(n.slice(0,2)),s=j(n.slice(2,4)),d=j(n.slice(4,6)),g=o==6?255:j(n.slice(6,8));return isNaN(a)||isNaN(s)||isNaN(d)||isNaN(g)?void 0:[a,s,d,g]}}function _(t,n){return typeof t!="number"||n===!0&&Math.floor(t)!==t?-1:t>=0&&t<=255?t:-1}function st(t){if(Object.prototype.toString.call(t)==="[object Object]"&&Object.getPrototypeOf(t)===Object.getPrototypeOf({})){var n=_(t.r!=null?t.r:t.red!=null?t.red:0,!0),o=_(t.g!=null?t.g:t.green!=null?t.green:0,!0),a=_(t.b!=null?t.b:t.blue!=null?t.blue:0,!0),s=_(t.a!=null?t.a:t.alpha!=null?t.alpha:255,!0);if(n!=-1&&o!=-1&&a!=-1&&s!=-1)return[n,o,a,s]}}function lt(t){if(Array.isArray(t)&&(t.length==3||t.length==4)){var n=_(t[0],!0),o=_(t[1],!0),a=_(t[2],!0),s=_(t[3]!=null?t[3]:255,!0);if(n!=-1&&o!=-1&&a!=-1&&s!=-1)return[n,o,a,s]}}function ct(t){if(typeof t=="number"&&Math.floor(t)==t&&t<=4294967295&&t>=0)return[t>>16&255,t>>8&255,255&t,t>>24&255]}function dt(t){if(t.substr(0,4)=="rgb("){var n=(t=t.match(/^rgb\(([^)]+)\)/)[1]).split(/ *, */).map(Number),o=_(n[0],!0),a=_(n[1],!0),s=_(n[2],!0);if(o!=-1&&a!=-1&&s!=-1)return[o,a,s,255]}}function ht(t){if(t.substr(0,5)=="rgba("){var n=(t=t.match(/^rgba\(([^)]+)\)/)[1]).split(/ *, */).map(Number),o=_(n[0],!0),a=_(n[1],!0),s=_(n[2],!0),d=_(255*n[3]);if(o!=-1&&a!=-1&&s!=-1&&d!=-1)return[o,a,s,d]}}i.arr=l,i.obj=p,i.css=v,i.hex=c,i.num=e;const pt=/\[object Object\]/,R=(t,n)=>{typeof t=="string"&&pt.test(t)||n()},q=(t,n)=>{typeof t=="string"&&t===""||n()},gt=(t,n)=>{(0,m.b)()&&(console.log(t,n),(0,f.d)("\u2191 We propagate the (submit) event to this target.")),Object.defineProperty(t,"target",{value:n,writable:!1})},ut=t=>{var n,o,a;(n=t.nextHooks)===null||n===void 0||n.forEach((s,d)=>{var g;const P=s.get("beforePatch");typeof P=="function"&&P((g=t.nextState)===null||g===void 0?void 0:g.get(d),t.nextState,t,d)}),((o=t.nextState)===null||o===void 0?void 0:o.size)>0&&(t.state=Object.assign(Object.assign({},t.state),Object.fromEntries(t.nextState)),delete t.nextState,(a=t.nextHooks)===null||a===void 0||a.forEach((s,d)=>{const g=s.get("afterPatch");typeof g=="function"&&g(t.state[d],t.state,t,d)})),delete t.nextHooks},$=(t,n,o,a={})=>{var s,d;t.nextHooks===void 0&&(t.nextHooks=new Map),t.nextState===void 0&&(t.nextState=new Map),t.nextState.get(n)!==o&&(!(t.nextHooks.get(n)instanceof Map)&&t.nextHooks.set(n,new Map),typeof a.afterPatch=="function"&&((s=t.nextHooks.get(n))===null||s===void 0||s.set("afterPatch",a.afterPatch)),typeof a.beforePatch=="function"&&((d=t.nextHooks.get(n))===null||d===void 0||d.set("beforePatch",a.beforePatch)),t.nextState.set(n,o),ut(t))},ft=(t,n,o,a)=>{(0,f.d)(`[${t.constructor.name}] Der Property-Wert (${o}) f\xFCr '${n}' ist nicht valide. Folgende Werte sind erlaubt: ${Array.from(a).join(", ")}`)},F=(t,n,o,a,s,d={})=>{o(s)?$(t,n,s,d==null?void 0:d.hooks):s===void 0||s===null&&((d==null?void 0:d.required)===void 0||(d==null?void 0:d.required)===!1)?$(t,n,d==null?void 0:d.defaultValue,d==null?void 0:d.hooks):((d==null?void 0:d.required)!==void 0&&(d==null?void 0:d.required)!==!1||a.add(null),ft(t,n,s,a))},bt=(t,n,o,a)=>{F(t,n,s=>typeof s=="boolean",new Set(["Boolean {true, false}"]),o,a)},vt=(t,n,o,a={})=>{const s=typeof a.minLength=="number"?a==null?void 0:a.minLength:0;F(t,n,d=>typeof d=="string"&&d.length>=s,new Set([`String (Mindestl\xE4nge ${s})`]),o,a)},wt=(t,n,o,a)=>{F(t,n,s=>typeof s=="number"&&((a==null?void 0:a.min)===void 0||typeof(a==null?void 0:a.min)=="number"&&s>=a.min)&&((a==null?void 0:a.max)===void 0||typeof(a==null?void 0:a.max)=="number"&&s<=a.max),new Set(["Number"]),o,a)},mt=(t,n,o,a,s=g=>g==g,d={})=>{q(a,()=>{R(a,()=>{a===void 0&&(a=[]);try{try{a=J(a)}catch(g){}if(Array.isArray(a)){const g=a.find(P=>!o(P));g===void 0&&s(a)?$(t,n,a,d.hooks):R(g,()=>{throw console.log(g),new Error("\u2191 Das Schema f\xFCr das Property (_options) ist nicht valide. Der Wert wird nicht ge\xE4ndert.")})}else R(a,()=>{throw console.log(a),new Error("\u2191 Das Schema f\xFCr das Property (_options) ist nicht valide. Der Wert wird nicht ge\xE4ndert.")})}catch(g){(0,f.d)("Known bug: Zeichenkettenliste (string[])")}})})},yt=/^(true|false)$/,kt=/^-?(0|[1-9]\d*)$/,St=/^-?(0.|[1-9]\d*.)\d*[1-9]$/,xt=t=>{const n=typeof t,o=`${t}`;if(typeof t=="string"){if(yt.test(t))t=t==="true";else if(kt.test(t))t=parseInt(t);else if(St.test(t))t=parseFloat(t);else if(K.test(t))try{t=J(t)}catch(a){}}return n!==typeof t&&(0,f.d)(`You have used a stringified property value (${o} to ${JSON.stringify(t)}) which type switched from ${n} to ${typeof t}!`),t},X=t=>{try{return JSON.stringify(t).replace(/"/g,"'")}catch(n){throw m.L.warn(["stringifyJson",t]),m.L.error("\u2191 Das JSON konnte nicht in einen String umgewandelt werden. Es wird ein stringifizierbares JSON erwartet."),new Error}},K=/^[{[]/,J=t=>{if(typeof t=="string")try{return JSON.parse(t)}catch(n){if(K.test(t))try{return JSON.parse(t.replace(/'/g,'"'))}catch(o){m.L.warn(["parseJson",t]),m.L.error("\u2191 Der JSON-String konnte nicht geparsed werden. Achten Sie darauf, dass einfache Anf\xFChrungszeichen im Text maskiert werden (&#8216;).")}}throw new Error},U=t=>typeof t=="boolean"?t===!0?"true":"false":void 0,_t=t=>typeof t=="string"?t:U(t),Y=(t,n)=>r(t,n||(0,m.g)()),V=(t,n)=>O(t,n||(0,m.g)());let Z=null;const G=()=>(Z=Z||{backgroundColor:"#00000000",color:"#00000000",domNode:(0,m.g)().body,level:"Fail",score:1},Z),Q=/(\d+, ){3}0\)/,W=(t,n=G())=>{const o=getComputedStyle(t),a=Q.test(o.backgroundColor)?n.backgroundColor:i.hex(o.backgroundColor),s=Q.test(o.color)?n.color:i.hex(o.color),d=(0,u.s)(a,s),g={backgroundColor:a,color:s,domNode:t,level:(0,u.f)(d),score:d};return d<4.5&&m.L.error(["Color-Contrast-Error",{backgroundColor:g.backgroundColor,color:g.color,level:g.level,score:g.score},g.domNode]),g},tt=(t,n=G())=>{n.domNode instanceof HTMLElement&&(n=W(n.domNode,n));const o=n.domNode.querySelector(t);if(o===null){const a=n.domNode.querySelectorAll('[class="hydrated"]');for(let s=0;s<a.length&&(n.domNode=a[s],(n=tt(t,n)).domNode===null);s++);return n}return W(o,n)},nt=(t,n=window)=>{t instanceof HTMLElement?(n.scrollTo({behavior:"smooth",top:t.getBoundingClientRect().top+(0,m.a)().pageYOffset-50}),t.focus()):(0,f.d)("Das HTMLElement ist nicht valide, zu dem gescrollt werden soll.")},et=(t,n)=>{if((t instanceof Document||t instanceof HTMLElement||t instanceof ShadowRoot)&&typeof n=="string"){(0,f.d)("Bei der Methode querySelectorAll wurden die Parameter document, selector in selector, document getauscht, da der Parameter selector nicht, allerdings der Parameter document optional sein kann.");const o=`${n}`;n=t,t=o}if(typeof t=="string"){const o=Y(t,n);o instanceof HTMLElement?nt(o):(0,f.d)(`Es konnte kein HTMLElement mit dem Selector (${t}) gefunden werden, zu dem gescrollt werden soll.`)}else(0,f.d)("Der Selector ist nicht valide, zu dem gescrollt werden soll.")};class A{static queryHtmlElementColors(n,o,a=!1,s=!0){let d=null;if(a===!0||A.executionLock===!1)if(a===!1&&(A.cache.clear(),A.cache.set(o.domNode,o),A.executionLock=!0,s===!0&&m.L.debug("[KoliBriUtils] Color contrast analysis started...")),n===o.domNode)d=o;else{const g=new Set;if(o.domNode.shadowRoot){const k=o.domNode.shadowRoot.children;for(let D=0;D<k.length;D++)g.add(k[D])}const P=o.domNode;if(typeof P.assignedNodes=="function"){const k=P.assignedNodes();for(let D=0;D<k.length;D++)k[D]instanceof HTMLElement&&g.add(k[D])}const it=o.domNode.children;for(let k=0;k<it.length;k++)g.add(it[k]);const B=Array.from(g);for(let k=0;k<B.length;k++){let D=A.cache.get(B[k]);D===void 0&&(D=W(B[k],o)),A.cache.set(B[k],D);const at=A.queryHtmlElementColors(n,D,!0,!1);if(at!==null){d=at;break}}}else m.L.debug("[KoliBriUtils] Call aborted because a color contrast analysis is currently being executed.");return a===!1&&(s===!0&&m.L.debug(`[KoliBriUtils] Color contrast analysis finished (${A.cache.size} DOM elements are analysed).`),A.executionLock=!1,A.cache.clear()),d}}A.executionLock=!1,A.cache=new Map;class L{}L.patchTheme=z.p,L.patchThemeTag=z.a,L.querySelector=Y,L.querySelectorAll=V,L.scrollByHTMLElement=nt,L.scrollBySelector=et,L.stringifyJson=X}}]);
