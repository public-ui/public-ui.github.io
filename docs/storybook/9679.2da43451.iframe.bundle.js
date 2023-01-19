"use strict";(self.webpackChunk_public_ui_storybook=self.webpackChunk_public_ui_storybook||[]).push([[9679],{"./node_modules/@public-ui/components/dist/esm/kol-table.entry.js":(z,k,w)=>{w.r(k),w.d(k,{kol_table:()=>x});var o=w("./node_modules/@public-ui/components/dist/esm/index-1c88bb74.js"),c=w("./node_modules/@public-ui/components/dist/esm/prop.validators-6ea5c4bf.js"),u=w("./node_modules/@public-ui/components/dist/esm/i18n-0f680f1b.js");/*!
 * KoliBri - The accessible HTML-Standard
 */const _=`/* windicss-touch: 1639175625181 */
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
  font-size: inherit;
  hyphens: auto;
  letter-spacing: inherit;
  word-break: break-word;
  word-spacing: inherit;
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
}`,S=[10,20,50,100],f=new Map,x=class{constructor(i){(0,o.r)(this,i),this.horizontal=!0,this.sortDirections=new Map,this.showPagination=!1,this.pageStartSlice=0,this.pageEndSlice=10,this.setSortDirection=(n,e)=>{this.sortDirections.clear(),this.sortDirections.set(n,e),this.sortFunction=n},this.handlePagination={onClick:(n,e)=>{var a;typeof((a=this.state._pagination._on)===null||a===void 0?void 0:a.onClick)=="function"&&this.state._pagination._on.onClick(n,e),(0,c.s)(this,"_pagination",Object.assign(Object.assign({},this.state._pagination),{_page:e}))},onChangePage:(n,e)=>{var a;typeof((a=this.state._pagination._on)===null||a===void 0?void 0:a.onChangePage)=="function"&&this.state._pagination._on.onChangePage(n,e),(0,c.s)(this,"_pagination",Object.assign(Object.assign({},this.state._pagination),{_page:e}))},onChangePageSize:(n,e)=>{var a;typeof((a=this.state._pagination._on)===null||a===void 0?void 0:a.onChangePageSize)=="function"&&this.state._pagination._on.onChangePageSize(n,e),(0,c.s)(this,"_pagination",Object.assign(Object.assign({},this.state._pagination),{_pageSize:e})),(0,c.s)(this,"_pageSize",e)}},this.beforePatchPagination=(n,e,a,l)=>{l==="_pagination"&&(this.showPagination=n===!0||n===""||typeof n=="object"&&n!==null)},this.updateSortedData=()=>{let n=this.state._data;if(typeof this.sortFunction=="function")switch(this.sortDirections.get(this.sortFunction)){case"NOS":n=[...this.state._data];break;case"ASC":n=this.sortFunction([...this.state._data]);break;default:n=this.sortFunction([...this.state._data]).reverse()}(0,c.s)(this,"_sortedData",n)},this._caption=void 0,this._data=void 0,this._headers=void 0,this._minWidth=void 0,this._pagination=void 0,this.state={_caption:"",_data:[],_headers:{horizontal:[],vertical:[]},_pagination:{_page:1,_pageSize:10,_total:0},_sortedData:[]}}validateCaption(i){(0,c.w)(this,"_caption",i,{required:!0})}validateData(i){(0,c.f)(i,()=>{(0,c.o)(i,()=>{i===void 0&&(i=[]);try{i=(0,c.p)(i)}catch(n){}Array.isArray(i)&&i.find(n=>!(typeof n=="object"&&n!==null))===void 0&&(0,c.s)(this,"_data",i,{afterPatch:()=>{const n=setTimeout(()=>{clearTimeout(n),this.updateSortedData()})}})})})}validateHeaders(i){(0,c.f)(i,()=>{(0,c.o)(i,()=>{try{i=(0,c.p)(i)}catch(n){}(0,c.a)(this,"_headers",n=>typeof n=="object"&&n!==null,new Set(["KoliBriTableHeaders"]),i,{hooks:{beforePatch:n=>{var e,a;const l=n;(e=l.horizontal)===null||e===void 0||e.forEach(s=>{s.forEach(t=>{typeof t.sort=="function"&&typeof t.sortDirection=="string"&&this.setSortDirection(t.sort,t.sortDirection)})}),(a=l.vertical)===null||a===void 0||a.forEach(s=>{s.forEach(t=>{typeof t.sort=="function"&&typeof t.sortDirection=="string"&&this.setSortDirection(t.sort,t.sortDirection)})})}}})})})}validateMinWidth(i){(0,c.w)(this,"_minWidth",i,{defaultValue:void 0})}validatePagination(i){try{i=(0,c.p)(i)}catch(n){}(0,c.a)(this,"_pagination",()=>!0,new Set(["boolean","KoliBriTablePagination"]),i,{hooks:{beforePatch:this.beforePatchPagination}})}componentWillLoad(){this.validateCaption(this._caption),this.validateData(this._data),this.validateHeaders(this._headers),this.validateMinWidth(this._minWidth),this.validatePagination(this._pagination)}getNumberOfCols(i,n){let e=0;return i.forEach(a=>{let l=0;a.forEach(s=>{var t;return l+=(t=s.colSpan)!==null&&t!==void 0?t:1}),e<l&&(e=l)}),e===0&&(e=n.length),e}getNumberOfRows(i,n){let e=0;return i.forEach(a=>{let l=0;a.forEach(s=>{var t;return l+=(t=s.rowSpan)!==null&&t!==void 0?t:1}),e<l&&(e=l)}),e===0&&(e=n.length),e}filterHeaderKeys(i){const n=[];return i.forEach(e=>{e.forEach(a=>{typeof a.key=="string"&&n.push(a)})}),n}getPrimaryHeader(i){var n,e;let a=this.filterHeaderKeys((n=i.horizontal)!==null&&n!==void 0?n:[]);return this.horizontal=!0,a.length===0&&(a=this.filterHeaderKeys((e=i.vertical)!==null&&e!==void 0?e:[]),a.length>0&&(this.horizontal=!1)),a}createDataField(i,n){n.horizontal=Array.isArray(n==null?void 0:n.horizontal)?n.horizontal:[],n.vertical=Array.isArray(n==null?void 0:n.vertical)?n.vertical:[];const e=this.getPrimaryHeader(n),a=this.getNumberOfCols(n.horizontal,i),l=this.getNumberOfRows(n.vertical,i),s=[],t=[],h=[];n.vertical.forEach((r,p)=>{t[p]=0,h[p]=[]});for(let r=0;r<l;r++){const p=[];n.vertical.forEach((d,b)=>{let v=0;if(h[b].forEach(g=>v+=g),v<=r){const g=d[r-v+t[b]];if(typeof g=="object"){p.push(Object.assign(Object.assign({},g),{asTd:!1,data:{}}));let y=1;if(typeof g.rowSpan=="number"&&g.rowSpan>1&&(y=g.rowSpan),h[b].push(y),typeof g.colSpan=="number"&&g.colSpan>1)for(let m=1;m<g.colSpan;m++)h[b+m].push(y);t[b]++}}});for(let d=0;d<a;d++)this.horizontal===!0?typeof e[d]=="object"&&e[d]!==null&&typeof e[d].key=="string"&&typeof i[r]=="object"&&i[r]!==null&&p.push(Object.assign(Object.assign({},e[d]),{colSpan:void 0,data:i[r],label:i[r][e[d].key],rowSpan:void 0})):typeof e[r]=="object"&&e[r]!==null&&typeof e[r].key=="string"&&typeof i[d]=="object"&&i[d]!==null&&p.push(Object.assign(Object.assign({},e[r]),{colSpan:void 0,data:i[d],label:i[d][e[r].key],rowSpan:void 0}));s.push(p)}if(i.length===0){let r=0,p=0;Array.isArray(n.horizontal)&&n.horizontal.length>0&&n.horizontal[0].forEach(b=>{r+=b.colSpan||1}),Array.isArray(n.vertical)&&n.vertical.length>0&&(r-=n.vertical.length,n.vertical[0].forEach(b=>{p+=b.rowSpan||1}));const d={colSpan:r,label:(0,u.a)("kol-no-entries"),render:void 0,rowSpan:Math.max(p,1)};s.length===0?s.push([d]):s[0].push(d)}return s}selectDisplayedData(i,n,e){return typeof n=="number"&&n>0&&typeof e=="number"&&e>0?(this.pageStartSlice=n*(e-1),this.pageEndSlice=n*e>i.length?i.length:n*e,i.slice(this.pageStartSlice,this.pageEndSlice)):(this.pageStartSlice=0,this.pageEndSlice=i.length,i)}cellRender(i,n){n&&(clearTimeout(f.get(n)),f.set(n,setTimeout(()=>{if(clearTimeout(f.get(n)),typeof i.render=="function"){const e=i.render(n,{asTd:i.asTd,label:i.label,textAlign:i.textAlign,width:i.width},i.data,this.state._data);typeof e=="string"&&(n.innerHTML=e)}})))}render(){var i,n;const e=this.selectDisplayedData(this.state._sortedData,this.showPagination?(n=(i=this.state._pagination)===null||i===void 0?void 0:i._pageSize)!==null&&n!==void 0?n:10:this.state._sortedData.length,this.state._pagination._page||1),a=this.createDataField(e,this.state._headers);return(0,o.h)(o.H,null,(0,o.h)("div",{tabindex:"0"},(0,o.h)("table",{style:{minWidth:this.state._minWidth}},(0,o.h)("caption",null,this.state._caption),Array.isArray(this.state._headers.horizontal)&&(0,o.h)("thead",null,this.state._headers.horizontal.map((l,s)=>(0,o.h)("tr",{key:`thead-${s}`},l.map((t,h)=>t.asTd===!0?(0,o.h)("td",{key:`thead-${s}-${h}-${t.label}`,class:{[t.textAlign]:typeof t.textAlign=="string"&&t.textAlign.length>0},colSpan:t.colSpan,rowSpan:t.rowSpan,style:{textAlign:t.textAlign,width:t.width},ref:typeof t.render=="function"?r=>{this.cellRender(t,r)}:void 0,innerHTML:typeof t.render!="function"?t.label:""}):(0,o.h)("th",{key:`thead-${s}-${h}-${t.label}`,scope:typeof t.colSpan=="number"&&t.colSpan>1?"colgroup":"col",colSpan:t.colSpan,rowSpan:t.rowSpan,style:{width:t.width},"aria-sort":typeof t.sort=="function"?t.sort!==this.sortFunction||this.sortDirections.get(t.sort)==="NOS"||this.sortDirections.get(t.sort)===void 0?"none":this.sortDirections.get(t.sort)==="ASC"?"ascending":"descending":void 0,"data-sort":`sort-${this.sortDirections.get(t.sort)}`},(0,o.h)("div",{class:"w-full flex gap-1 items-center"},(0,o.h)("div",{class:{"w-full":!0,[t.textAlign]:typeof t.textAlign=="string"&&t.textAlign.length>0},innerHTML:t.label,style:{textAlign:t.textAlign}}),typeof t.sort=="function"&&(0,o.h)("kol-button",{exportparts:"button,ghost",_ariaLabel:(0,u.a)("kol-change-order",{placeholders:{colLabel:t.label}}),_icon:t.sort!==this.sortFunction||this.sortDirections.get(t.sort)==="NOS"||this.sortDirections.get(t.sort)===void 0?"fas fa-sort":this.sortDirections.get(t.sort)==="ASC"?"fas fa-sort-up":"fas fa-sort-down",_iconOnly:!0,_label:(0,u.a)("kol-change-order",{placeholders:{colLabel:t.label}}),_on:{onClick:()=>{if(typeof t.sort=="function"){switch(this.sortFunction=t.sort,this.sortDirections.get(this.sortFunction)){case"ASC":this.setSortDirection(this.sortFunction,"DESC");break;case"DESC":this.setSortDirection(this.sortFunction,"NOS");break;default:this.setSortDirection(this.sortFunction,"ASC")}this.updateSortedData()}}},_variant:"ghost"}))))))),(0,o.h)("tbody",null,a.map((l,s)=>(0,o.h)("tr",{key:`tbody-${s}`},l.map((t,h)=>t.asTd===!1?(0,o.h)("th",{key:`tbody-${s}-${h}-${t.label}`,scope:typeof t.rowSpan=="number"&&t.rowSpan>1?"rowgroup":"row",colSpan:t.colSpan,rowSpan:t.rowSpan,style:{width:t.width},"aria-sort":typeof t.sort=="function"?t.sort!==this.sortFunction||this.sortDirections.get(t.sort)==="NOS"||this.sortDirections.get(t.sort)===void 0?"none":this.sortDirections.get(t.sort)==="ASC"?"ascending":"descending":void 0,"data-sort":`sort-${this.sortDirections.get(t.sort)}`},(0,o.h)("div",{class:"w-full flex gap-1 items-center"},(0,o.h)("div",{class:{"w-full":!0,[t.textAlign]:typeof t.textAlign=="string"&&t.textAlign.length>0},innerHTML:t.label,style:{textAlign:t.textAlign}}),typeof t.sort=="function"&&(0,o.h)("kol-button",{exportparts:"button,ghost",_ariaLabel:(0,u.a)("kol-change-order",{placeholders:{colLabel:t.label}}),_icon:t.sort!==this.sortFunction||this.sortDirections.get(t.sort)==="NOS"||this.sortDirections.get(t.sort)===void 0?"fas fa-sort":this.sortDirections.get(t.sort)==="ASC"?"fas fa-sort-up":"fas fa-sort-down",_iconOnly:!0,_label:(0,u.a)("kol-change-order",{placeholders:{colLabel:t.label}}),_on:{onClick:()=>{if(typeof t.sort=="function"){switch(this.sortFunction=t.sort,this.sortDirections.get(this.sortFunction)){case"ASC":this.setSortDirection(this.sortFunction,"DESC");break;case"DESC":this.setSortDirection(this.sortFunction,"NOS");break;default:this.setSortDirection(this.sortFunction,"ASC")}this.updateSortedData()}}},_variant:"ghost"}))):(0,o.h)("td",{key:`tbody-${s}-${h}-${t.label}`,class:{[t.textAlign]:typeof t.textAlign=="string"&&t.textAlign.length>0},colSpan:t.colSpan,rowSpan:t.rowSpan,style:{textAlign:t.textAlign,width:t.width},ref:typeof t.render=="function"?r=>{this.cellRender(t,r)}:void 0,innerHTML:typeof t.render!="function"?t.label:""}))))))),this.pageEndSlice>0&&this.showPagination&&(0,o.h)("div",{class:"pagination"},(0,o.h)("span",null,"Eintr\xE4ge ",this.pageEndSlice>0?this.pageStartSlice+1:0," bis ",this.pageEndSlice," von"," ",this.state._pagination._total||(Array.isArray(this.state._data)?this.state._data.length:0)," angezeigt"),(0,o.h)("div",null,(0,o.h)("kol-pagination",{_boundaryCount:this.state._pagination._boundaryCount,_customClass:this.state._pagination._customClass,_on:this.handlePagination,_page:this.state._pagination._page,_pageSize:this.state._pagination._pageSize,_pageSizeOptions:this.state._pagination._pageSizeOptions||S,_siblingCount:this.state._pagination._siblingCount,_tooltipAlign:"bottom",_total:this.state._pagination._total||this.state._data.length}))))}static get watchers(){return{_caption:["validateCaption"],_data:["validateData"],_headers:["validateHeaders"],_minWidth:["validateMinWidth"],_pagination:["validatePagination"]}}};x.style={default:_}}}]);
