"use strict";(self.webpackChunk_public_ui_storybook=self.webpackChunk_public_ui_storybook||[]).push([[9679],{"./node_modules/@public-ui/components/dist/esm/kol-table.entry.js":(_,y,w)=>{w.r(y),w.d(y,{kol_table:()=>m});var r=w("./node_modules/@public-ui/components/dist/esm/index-bc1a7f22.js"),l=w("./node_modules/@public-ui/components/dist/esm/prop.validators-ac261b68.js");/*!
 * KoliBri - the accessible web component library
 */const k=`/* windicss-touch: 1639175625181 */
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
b {
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
.float-left {
  float: left;
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
.mr-2 {
  margin-right: calc(2 * var(--kolibri-spacing));
}
.ml-2 {
  margin-left: calc(2 * var(--kolibri-spacing));
}
.mt-2 {
  margin-top: calc(2 * var(--kolibri-spacing));
}
.mt-4 {
  margin-top: calc(4 * var(--kolibri-spacing));
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
.text-normal {
  color: var(--kolibri-color-normal);
}
.hover\\:text-primary:hover {
  color: var(--kolibri-color-primary);
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
}`,x=[10,20,50,100],m=class{constructor(t){(0,r.r)(this,t),this.horizontal=!0,this.sortDirections=new Map,this.showPagination=!1,this.pageStartSlice=0,this.pageEndSlice=10,this.handlePagination={onClick:(n,i)=>{var o;typeof((o=this.state._pagination._on)===null||o===void 0?void 0:o.onClick)=="function"&&this.state._pagination._on.onClick(n,i),(0,l.s)(this,"_pagination",Object.assign(Object.assign({},this.state._pagination),{_page:i}))},onChangePage:(n,i)=>{var o;typeof((o=this.state._pagination._on)===null||o===void 0?void 0:o.onChangePage)=="function"&&this.state._pagination._on.onChangePage(n,i),(0,l.s)(this,"_pagination",Object.assign(Object.assign({},this.state._pagination),{_page:i}))},onChangePageSize:(n,i)=>{var o;typeof((o=this.state._pagination._on)===null||o===void 0?void 0:o.onChangePageSize)=="function"&&this.state._pagination._on.onChangePageSize(n,i),(0,l.s)(this,"_pagination",Object.assign(Object.assign({},this.state._pagination),{_pageSize:i})),(0,l.s)(this,"_pageSize",i)}},this.beforePatchPagination=(n,i,o,s)=>{s==="_pagination"&&(this.showPagination=n===!0||n===""||typeof n=="object"&&n!==null)},this.updateSortedData=()=>{let n=this.state._data;if(typeof this.sortFunction=="function")switch(this.sortDirections.get(this.sortFunction)){case"NOS":n=[...this.state._data];break;case"ASC":n=this.sortFunction([...this.state._data]);break;default:n=this.sortFunction([...this.state._data]).reverse()}(0,l.s)(this,"_sortedData",n)},this._caption=void 0,this._data=void 0,this._headers=void 0,this._minWidth=void 0,this._pagination=void 0,this.state={_caption:"",_data:[],_headers:{horizontal:[],vertical:[]},_pagination:{_page:1,_pageSize:10,_total:0},_sortedData:[]}}validateCaption(t){(0,l.w)(this,"_caption",t,{required:!0})}validateData(t){(0,l.h)(t,()=>{(0,l.o)(t,()=>{t===void 0&&(t=[]);try{t=(0,l.p)(t)}catch(n){}Array.isArray(t)&&t.find(n=>!(typeof n=="object"&&n!==null))===void 0&&(0,l.s)(this,"_data",t,{afterPatch:()=>{const n=setTimeout(()=>{clearTimeout(n),this.updateSortedData()})}})})})}validateHeaders(t){(0,l.h)(t,()=>{(0,l.o)(t,()=>{try{t=(0,l.p)(t)}catch(n){}(0,l.a)(this,"_headers",n=>typeof n=="object"&&n!==null,new Set(["KoliBriTableHeaders"]),t,{hooks:{beforePatch:n=>{var i;(i=n.horizontal)===null||i===void 0||i.forEach(o=>{o.forEach(s=>{typeof s.sort=="function"&&typeof s.sortDirection=="string"&&this.sortDirections.set(s.sort,s.sortDirection)})})}}})})})}validateMinWidth(t){(0,l.w)(this,"_minWidth",t,{defaultValue:void 0})}validatePagination(t){try{t=(0,l.p)(t)}catch(n){}(0,l.a)(this,"_pagination",()=>!0,new Set(["boolean","KoliBriTablePagination"]),t,{hooks:{beforePatch:this.beforePatchPagination}})}componentWillLoad(){this.validateCaption(this._caption),this.validateData(this._data),this.validateHeaders(this._headers),this.validateMinWidth(this._minWidth),this.validatePagination(this._pagination)}getNumberOfCols(t,n){let i=0;return t.forEach(o=>{let s=0;o.forEach(e=>{var a;return s+=(a=e.colSpan)!==null&&a!==void 0?a:1}),i<s&&(i=s)}),i===0&&(i=n.length),i}getNumberOfRows(t,n){let i=0;return t.forEach(o=>{let s=0;o.forEach(e=>{var a;return s+=(a=e.rowSpan)!==null&&a!==void 0?a:1}),i<s&&(i=s)}),i===0&&(i=n.length),i}filterHeaderKeys(t){const n=[];return t.forEach(i=>{i.forEach(o=>{typeof o.key=="string"&&n.push(o)})}),n}getPrimaryHeader(t){var n,i;let o=this.filterHeaderKeys((n=t.horizontal)!==null&&n!==void 0?n:[]);return this.horizontal=!0,o.length===0&&(o=this.filterHeaderKeys((i=t.vertical)!==null&&i!==void 0?i:[]),o.length>0&&(this.horizontal=!1)),o}createDataField(t,n){n.horizontal=Array.isArray(n==null?void 0:n.horizontal)?n.horizontal:[],n.vertical=Array.isArray(n==null?void 0:n.vertical)?n.vertical:[];const i=this.getPrimaryHeader(n),o=this.getNumberOfCols(n.horizontal,t),s=this.getNumberOfRows(n.vertical,t),e=[],a=[],g=[];n.vertical.forEach((c,p)=>{a[p]=0,g[p]=[]});for(let c=0;c<s;c++){const p=[];n.vertical.forEach((d,b)=>{let u=0;if(g[b].forEach(h=>u+=h),u<=c){const h=d[c-u+a[b]];if(typeof h=="object"){p.push(Object.assign(Object.assign({},h),{asTd:!1,data:{}}));let v=1;if(typeof h.rowSpan=="number"&&h.rowSpan>1&&(v=h.rowSpan),g[b].push(v),typeof h.colSpan=="number"&&h.colSpan>1)for(let f=1;f<h.colSpan;f++)g[b+f].push(v);a[b]++}}});for(let d=0;d<o;d++)this.horizontal===!0?typeof i[d]=="object"&&i[d]!==null&&typeof i[d].key=="string"&&typeof t[c]=="object"&&t[c]!==null&&p.push(Object.assign(Object.assign({},i[d]),{colSpan:void 0,data:t[c],label:t[c][i[d].key],rowSpan:void 0})):typeof i[c]=="object"&&i[c]!==null&&typeof i[c].key=="string"&&typeof t[d]=="object"&&t[d]!==null&&p.push(Object.assign(Object.assign({},i[c]),{colSpan:void 0,data:t[d],label:t[d][i[c].key],rowSpan:void 0}));e.push(p)}return e}selectDisplayedData(t,n,i){return typeof n=="number"&&n>0&&typeof i=="number"&&i>0?(this.pageStartSlice=n*(i-1),this.pageEndSlice=n*i>t.length?t.length:n*i,t.slice(this.pageStartSlice,this.pageEndSlice)):(this.pageStartSlice=0,this.pageEndSlice=t.length,t)}cellRender(t,n){const i=setTimeout(()=>{if(clearTimeout(i),typeof t.render=="function"&&n instanceof HTMLElement){const o=t.render(n,{asTd:t.asTd,label:t.label,textAlign:t.textAlign,width:t.width},t.data,this.state._data);typeof o=="string"&&(n.innerHTML=o)}},50)}render(){var t,n;const i=this.selectDisplayedData(this.state._sortedData,this.showPagination?(n=(t=this.state._pagination)===null||t===void 0?void 0:t._pageSize)!==null&&n!==void 0?n:10:this.state._sortedData.length,this.state._pagination._page||1),o=this.createDataField(i,this.state._headers);return(0,r.h)(r.H,null,(0,r.h)("div",{tabindex:"0"},(0,r.h)("table",{style:{minWidth:this.state._minWidth}},(0,r.h)("caption",null,this.state._caption),Array.isArray(this.state._headers.horizontal)&&(0,r.h)("thead",null,this.state._headers.horizontal.map(s=>(0,r.h)("tr",null,s.map(e=>e.asTd===!0?(0,r.h)("td",{class:{[e.textAlign]:typeof e.textAlign=="string"&&e.textAlign.length>0},colSpan:e.colSpan,rowSpan:e.rowSpan,style:{textAlign:e.textAlign,width:e.width},ref:typeof e.render=="function"?a=>{this.cellRender(e,a)}:void 0,innerHTML:typeof e.render!="function"?e.label:""}):(0,r.h)("th",{scope:typeof e.colSpan=="number"&&e.colSpan>1?"colgroup":"col",colSpan:e.colSpan,rowSpan:e.rowSpan,style:{width:e.width},"aria-sort":typeof e.sort=="function"?this.sortDirections.get(e.sort)==="NOS"||this.sortDirections.get(e.sort)===void 0?"none":this.sortDirections.get(e.sort)==="ASC"?"ascending":"descending":void 0},(0,r.h)("div",{class:"w-full flex gap-1 items-center"},(0,r.h)("div",{class:{"w-full":!0,[e.textAlign]:typeof e.textAlign=="string"&&e.textAlign.length>0},innerHTML:e.label,style:{textAlign:e.textAlign}}),typeof e.sort=="function"&&(0,r.h)("kol-button",{exportparts:"button,ghost",_ariaLabel:"Sortierung von "+e.label+" \xE4ndern",_icon:this.sortDirections.get(e.sort)==="NOS"||this.sortDirections.get(e.sort)===void 0?"fas fa-sort":this.sortDirections.get(e.sort)==="ASC"?"fas sort-up":"fas sort-down",_iconOnly:!0,_label:"Sortierung von "+e.label+" \xE4ndern",_on:{onClick:()=>{if(typeof e.sort=="function"){switch(this.sortFunction=e.sort,this.sortDirections.get(this.sortFunction)){case"ASC":this.sortDirections.set(this.sortFunction,"DESC");break;case"DESC":this.sortDirections.set(this.sortFunction,"NOS");break;default:this.sortDirections.set(this.sortFunction,"ASC")}this.updateSortedData()}}},_variant:"ghost"}))))))),(0,r.h)("tbody",null,o.map((s,e)=>(0,r.h)("tr",{key:`row-${e}`},s.map(a=>a.asTd===!1?(0,r.h)("th",{scope:typeof a.rowSpan=="number"&&a.rowSpan>1?"rowgroup":"row",colSpan:a.colSpan,rowSpan:a.rowSpan,style:{width:a.width},"aria-sort":typeof a.sort=="function"?this.sortDirections.get(a.sort)==="NOS"||this.sortDirections.get(a.sort)===void 0?"none":this.sortDirections.get(a.sort)==="ASC"?"ascending":"descending":void 0},(0,r.h)("div",{class:"w-full flex gap-1 items-center"},(0,r.h)("div",{class:{"w-full":!0,[a.textAlign]:typeof a.textAlign=="string"&&a.textAlign.length>0},innerHTML:a.label,style:{textAlign:a.textAlign}}),typeof a.sort=="function"&&(0,r.h)("kol-button",{exportparts:"button,ghost",_ariaLabel:"Sortierung von "+a.label+" \xE4ndern",_icon:this.sortDirections.get(a.sort)==="NOS"||this.sortDirections.get(a.sort)===void 0?"fas fa-sort":this.sortDirections.get(a.sort)==="ASC"?"fas fa-sort-up":"fas fa-sort-down",_iconOnly:!0,_label:"Sortierung von "+a.label+" \xE4ndern",_on:{onClick:()=>{if(typeof a.sort=="function"){switch(this.sortFunction=a.sort,this.sortDirections.get(this.sortFunction)){case"ASC":this.sortDirections.set(this.sortFunction,"DESC");break;case"DESC":this.sortDirections.set(this.sortFunction,"NOS");break;default:this.sortDirections.set(this.sortFunction,"ASC")}this.updateSortedData()}}},_variant:"ghost"}))):(0,r.h)("td",{class:{[a.textAlign]:typeof a.textAlign=="string"&&a.textAlign.length>0},colSpan:a.colSpan,rowSpan:a.rowSpan,style:{textAlign:a.textAlign,width:a.width},ref:typeof a.render=="function"?g=>{this.cellRender(a,g)}:void 0,innerHTML:typeof a.render!="function"?a.label:""}))))))),this.showPagination&&(0,r.h)("div",{class:"pagination"},Array.isArray(this.state._data)&&this.state._data.length>0?(0,r.h)("span",null,"Eintr\xE4ge ",this.pageStartSlice+1," bis ",this.pageEndSlice," von"," ",this.state._pagination._total||(Array.isArray(this.state._data)?this.state._data.length:0)," angezeigt"):(0,r.h)("span",null,"Es sind keine Eintr\xE4ge vorhanden."),(0,r.h)("div",null,(0,r.h)("kol-pagination",{_boundaryCount:this.state._pagination._boundaryCount,_customClass:this.state._pagination._customClass,_on:this.handlePagination,_page:this.state._pagination._page,_pageSize:this.state._pagination._pageSize,_pageSizeOptions:this.state._pagination._pageSizeOptions||x,_siblingCount:this.state._pagination._siblingCount,_tooltipAlign:"bottom",_total:this.state._pagination._total||this.state._data.length}))))}static get watchers(){return{_caption:["validateCaption"],_data:["validateData"],_headers:["validateHeaders"],_minWidth:["validateMinWidth"],_pagination:["validatePagination"]}}};m.style={default:k}}}]);
