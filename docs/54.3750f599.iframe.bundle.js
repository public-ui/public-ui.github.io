/*! For license information please see 54.3750f599.iframe.bundle.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{"./node_modules/@public-ui/lib/dist/esm/kol-table.entry.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"kol_table",(function(){return KolTable}));var _index_56929ada_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@public-ui/lib/dist/esm/index-56929ada.js"),_prop_validators_6dd43868_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@public-ui/lib/dist/esm/prop.validators-6dd43868.js");const PAGINATION_OPTIONS=[10,20,50,100],KolTable=class{constructor(t){Object(_index_56929ada_js__WEBPACK_IMPORTED_MODULE_0__.f)(this,t),this.horizontal=!0,this.sortDirections=new Map,this.showPagination=!1,this.pageStartSlice=0,this.pageEndSlice=10,this.state={_caption:"",_data:[],_headers:{horizontal:[],vertical:[]},_pagination:{_page:1,_pageSize:10,_total:0},_sortedData:[]},this.handlePagination={onClick:(t,n)=>{var i;"function"==typeof(null===(i=this.state._pagination._on)||void 0===i?void 0:i.onClick)&&this.state._pagination._on.onClick(t,n),Object(_prop_validators_6dd43868_js__WEBPACK_IMPORTED_MODULE_1__.t)(this,"_pagination",Object.assign(Object.assign({},this.state._pagination),{_page:n}))},onChangePage:(t,n)=>{var i;"function"==typeof(null===(i=this.state._pagination._on)||void 0===i?void 0:i.onChangePage)&&this.state._pagination._on.onChangePage(t,n),Object(_prop_validators_6dd43868_js__WEBPACK_IMPORTED_MODULE_1__.t)(this,"_pagination",Object.assign(Object.assign({},this.state._pagination),{_page:n}))},onChangePageSize:(t,n)=>{var i;"function"==typeof(null===(i=this.state._pagination._on)||void 0===i?void 0:i.onChangePageSize)&&this.state._pagination._on.onChangePageSize(t,n),Object(_prop_validators_6dd43868_js__WEBPACK_IMPORTED_MODULE_1__.t)(this,"_pagination",Object.assign(Object.assign({},this.state._pagination),{_pageSize:n})),Object(_prop_validators_6dd43868_js__WEBPACK_IMPORTED_MODULE_1__.t)(this,"_pageSize",n)}},this.beforePatchPagination=(t,n,i,e)=>{"_pagination"===e&&(this.showPagination=!0===t||""===t||"object"==typeof t&&null!==t)},this.updateSortedData=()=>{let t=this.state._data;if("function"==typeof this.sortFunction)switch(this.sortDirections.get(this.sortFunction)){case"NOS":t=[...this.state._data];break;case"ASC":t=this.sortFunction([...this.state._data]);break;default:t=this.sortFunction([...this.state._data]).reverse()}Object(_prop_validators_6dd43868_js__WEBPACK_IMPORTED_MODULE_1__.t)(this,"_sortedData",t)}}validateCaption(t){Object(_prop_validators_6dd43868_js__WEBPACK_IMPORTED_MODULE_1__.u)(this,"_caption",t,{required:!0})}validateData(t){Object(_prop_validators_6dd43868_js__WEBPACK_IMPORTED_MODULE_1__.g)(t,(()=>{Object(_prop_validators_6dd43868_js__WEBPACK_IMPORTED_MODULE_1__.p)(t,(()=>{void 0===t&&(t=[]),"string"==typeof t&&(t=Object(_prop_validators_6dd43868_js__WEBPACK_IMPORTED_MODULE_1__.q)(t)),Array.isArray(t)&&void 0===t.find((t=>!("object"==typeof t&&null!==t)))&&Object(_prop_validators_6dd43868_js__WEBPACK_IMPORTED_MODULE_1__.t)(this,"_data",t,{afterPatch:()=>{const t=setTimeout((()=>{clearTimeout(t),this.updateSortedData()}))}})}))}))}validateHeaders(t){Object(_prop_validators_6dd43868_js__WEBPACK_IMPORTED_MODULE_1__.g)(t,(()=>{Object(_prop_validators_6dd43868_js__WEBPACK_IMPORTED_MODULE_1__.p)(t,(()=>{"string"==typeof t&&(t=Object(_prop_validators_6dd43868_js__WEBPACK_IMPORTED_MODULE_1__.q)(t)),Object(_prop_validators_6dd43868_js__WEBPACK_IMPORTED_MODULE_1__.b)(this,"_headers",(t=>"object"==typeof t&&null!==t),new Set(["KoliBriTableHeaders"]),t,{hooks:{beforePatch:t=>{var n;null===(n=t.horizontal)||void 0===n||n.forEach((t=>{t.forEach((t=>{"function"==typeof t.sort&&"string"==typeof t.sortDirection&&this.sortDirections.set(t.sort,t.sortDirection)}))}))}}})}))}))}validateMinWidth(t){Object(_prop_validators_6dd43868_js__WEBPACK_IMPORTED_MODULE_1__.u)(this,"_minWidth",t,{defaultValue:void 0})}validatePagination(t){"string"==typeof t&&(t=Object(_prop_validators_6dd43868_js__WEBPACK_IMPORTED_MODULE_1__.q)(t)),Object(_prop_validators_6dd43868_js__WEBPACK_IMPORTED_MODULE_1__.b)(this,"_pagination",(()=>!0),new Set(["boolean","KoliBriTablePagination"]),t,{hooks:{beforePatch:this.beforePatchPagination}})}componentWillLoad(){this.validateCaption(this._caption),this.validateData(this._data),this.validateHeaders(this._headers),this.validateMinWidth(this._minWidth),this.validatePagination(this._pagination)}getNumberOfCols(t,n){let i=0;return t.forEach((t=>{let n=0;t.forEach((t=>{var i;return n+=null!==(i=t.colSpan)&&void 0!==i?i:1})),i<n&&(i=n)})),0===i&&(i=n.length),i}getNumberOfRows(t,n){let i=0;return t.forEach((t=>{let n=0;t.forEach((t=>{var i;return n+=null!==(i=t.rowSpan)&&void 0!==i?i:1})),i<n&&(i=n)})),0===i&&(i=n.length),i}filterHeaderKeys(t){const n=[];return t.forEach((t=>{t.forEach((t=>{"string"==typeof t.key&&n.push(t)}))})),n}getPrimaryHeader(t){var n,i;let e=this.filterHeaderKeys(null!==(n=t.horizontal)&&void 0!==n?n:[]);return this.horizontal=!0,0===e.length&&(e=this.filterHeaderKeys(null!==(i=t.vertical)&&void 0!==i?i:[]),e.length>0&&(this.horizontal=!1)),e}createDataField(t,n){n.horizontal=Array.isArray(null==n?void 0:n.horizontal)?n.horizontal:[],n.vertical=Array.isArray(null==n?void 0:n.vertical)?n.vertical:[];const i=this.getPrimaryHeader(n),e=this.getNumberOfCols(n.horizontal,t),a=this.getNumberOfRows(n.vertical,t),o=[],r=[],s=[];n.vertical.forEach(((t,n)=>{r[n]=0,s[n]=[]}));for(let l=0;l<a;l++){const a=[];n.vertical.forEach(((t,n)=>{let i=0;if(s[n].forEach((t=>i+=t)),i<=l){const e=t[l-i+r[n]];if("object"==typeof e){a.push(Object.assign(Object.assign({},e),{asTd:!1,data:{}}));let t=1;if("number"==typeof e.rowSpan&&e.rowSpan>1&&(t=e.rowSpan),s[n].push(t),"number"==typeof e.colSpan&&e.colSpan>1)for(let i=1;i<e.colSpan;i++)s[n+i].push(t);r[n]++}}}));for(let n=0;n<e;n++)!0===this.horizontal?"object"==typeof i[n]&&null!==i[n]&&"string"==typeof i[n].key&&"object"==typeof t[l]&&null!==t[l]&&a.push(Object.assign(Object.assign({},i[n]),{colSpan:void 0,data:t[l],label:t[l][i[n].key],rowSpan:void 0})):"object"==typeof i[l]&&null!==i[l]&&"string"==typeof i[l].key&&"object"==typeof t[n]&&null!==t[n]&&a.push(Object.assign(Object.assign({},i[l]),{colSpan:void 0,data:t[n],label:t[n][i[l].key],rowSpan:void 0}));o.push(a)}return o}selectDisplayedData(t,n,i){return"number"==typeof n&&n>0&&"number"==typeof i&&i>0?(this.pageStartSlice=n*(i-1),this.pageEndSlice=n*i>t.length?t.length:n*i,t.slice(this.pageStartSlice,this.pageEndSlice)):(this.pageStartSlice=0,this.pageEndSlice=t.length,t)}cellRender(t,n){const i=setTimeout((()=>{if(clearTimeout(i),"function"==typeof t.render&&n instanceof HTMLElement){const i=t.render(n,{asTd:t.asTd,label:t.label,textAlign:t.textAlign,width:t.width},t.data,this.state._data);"string"==typeof i&&(n.innerHTML=i)}}),50)}render(){var t,n;const i=this.selectDisplayedData(this.state._sortedData,this.showPagination?null!==(n=null===(t=this.state._pagination)||void 0===t?void 0:t._pageSize)&&void 0!==n?n:10:this.state._sortedData.length,this.state._pagination._page||1),e=this.createDataField(i,this.state._headers);return Object(_index_56929ada_js__WEBPACK_IMPORTED_MODULE_0__.d)(_index_56929ada_js__WEBPACK_IMPORTED_MODULE_0__.b,null,Object(_index_56929ada_js__WEBPACK_IMPORTED_MODULE_0__.d)("div",null,Object(_index_56929ada_js__WEBPACK_IMPORTED_MODULE_0__.d)("table",{"aria-readonly":"true",style:{minWidth:this.state._minWidth}},Object(_index_56929ada_js__WEBPACK_IMPORTED_MODULE_0__.d)("caption",null,this.state._caption),Array.isArray(this.state._headers.horizontal)&&Object(_index_56929ada_js__WEBPACK_IMPORTED_MODULE_0__.d)("thead",null,this.state._headers.horizontal.map((t=>Object(_index_56929ada_js__WEBPACK_IMPORTED_MODULE_0__.d)("tr",null,t.map((t=>!0===t.asTd?Object(_index_56929ada_js__WEBPACK_IMPORTED_MODULE_0__.d)("td",{class:{[t.textAlign]:"string"==typeof t.textAlign&&t.textAlign.length>0},colSpan:t.colSpan,rowSpan:t.rowSpan,style:{textAlign:t.textAlign,width:t.width},ref:"function"==typeof t.render?n=>{this.cellRender(t,n)}:void 0,innerHTML:"function"!=typeof t.render?t.label:""}):Object(_index_56929ada_js__WEBPACK_IMPORTED_MODULE_0__.d)("th",{scope:"number"==typeof t.colSpan&&t.colSpan>1?"colgroup":"col",colSpan:t.colSpan,rowSpan:t.rowSpan,style:{width:t.width},"aria-sort":"function"==typeof t.sort?"NOS"===this.sortDirections.get(t.sort)||void 0===this.sortDirections.get(t.sort)?"none":"ASC"===this.sortDirections.get(t.sort)?"ascending":"descending":void 0},Object(_index_56929ada_js__WEBPACK_IMPORTED_MODULE_0__.d)("div",{class:"w-full flex gap-1 items-center"},Object(_index_56929ada_js__WEBPACK_IMPORTED_MODULE_0__.d)("div",{class:{"w-full":!0,[t.textAlign]:"string"==typeof t.textAlign&&t.textAlign.length>0},innerHTML:t.label,style:{textAlign:t.textAlign}}),"function"==typeof t.sort&&Object(_index_56929ada_js__WEBPACK_IMPORTED_MODULE_0__.d)("kol-button",{exportparts:"button,ghost",_ariaLabel:"Sortierung von "+t.label+" ändern",_icon:"NOS"===this.sortDirections.get(t.sort)||void 0===this.sortDirections.get(t.sort)?"sort":"ASC"===this.sortDirections.get(t.sort)?"caret-up":"caret-down",_iconOnly:!0,_label:"Sortierung von "+t.label+" ändern",_on:{onClick:()=>{if("function"==typeof t.sort){switch(this.sortFunction=t.sort,this.sortDirections.get(this.sortFunction)){case"ASC":this.sortDirections.set(this.sortFunction,"DESC");break;case"DESC":this.sortDirections.set(this.sortFunction,"NOS");break;default:this.sortDirections.set(this.sortFunction,"ASC")}this.updateSortedData()}}},_variant:"ghost"}))))))))),Object(_index_56929ada_js__WEBPACK_IMPORTED_MODULE_0__.d)("tbody",null,e.map(((t,n)=>Object(_index_56929ada_js__WEBPACK_IMPORTED_MODULE_0__.d)("tr",{key:`row-${n}`},t.map((t=>!1===t.asTd?Object(_index_56929ada_js__WEBPACK_IMPORTED_MODULE_0__.d)("th",{scope:"number"==typeof t.rowSpan&&t.rowSpan>1?"rowgroup":"row",colSpan:t.colSpan,rowSpan:t.rowSpan,style:{width:t.width},"aria-sort":"function"==typeof t.sort?"NOS"===this.sortDirections.get(t.sort)||void 0===this.sortDirections.get(t.sort)?"none":"ASC"===this.sortDirections.get(t.sort)?"ascending":"descending":void 0},Object(_index_56929ada_js__WEBPACK_IMPORTED_MODULE_0__.d)("div",{class:"w-full flex gap-1 items-center"},Object(_index_56929ada_js__WEBPACK_IMPORTED_MODULE_0__.d)("div",{class:{"w-full":!0,[t.textAlign]:"string"==typeof t.textAlign&&t.textAlign.length>0},innerHTML:t.label,style:{textAlign:t.textAlign}}),"function"==typeof t.sort&&Object(_index_56929ada_js__WEBPACK_IMPORTED_MODULE_0__.d)("kol-button",{exportparts:"button,ghost",_ariaLabel:"Sortierung von "+t.label+" ändern",_icon:"NOS"===this.sortDirections.get(t.sort)||void 0===this.sortDirections.get(t.sort)?"sort":"ASC"===this.sortDirections.get(t.sort)?"caret-up":"caret-down",_iconOnly:!0,_label:"Sortierung von "+t.label+" ändern",_on:{onClick:()=>{if("function"==typeof t.sort){switch(this.sortFunction=t.sort,this.sortDirections.get(this.sortFunction)){case"ASC":this.sortDirections.set(this.sortFunction,"DESC");break;case"DESC":this.sortDirections.set(this.sortFunction,"NOS");break;default:this.sortDirections.set(this.sortFunction,"ASC")}this.updateSortedData()}}},_variant:"ghost"}))):Object(_index_56929ada_js__WEBPACK_IMPORTED_MODULE_0__.d)("td",{class:{[t.textAlign]:"string"==typeof t.textAlign&&t.textAlign.length>0},colSpan:t.colSpan,rowSpan:t.rowSpan,style:{textAlign:t.textAlign,width:t.width},ref:"function"==typeof t.render?n=>{this.cellRender(t,n)}:void 0,innerHTML:"function"!=typeof t.render?t.label:""}))))))))),this.showPagination&&Object(_index_56929ada_js__WEBPACK_IMPORTED_MODULE_0__.d)("div",{class:"pagination"},Array.isArray(this.state._data)&&this.state._data.length>0?Object(_index_56929ada_js__WEBPACK_IMPORTED_MODULE_0__.d)("span",null,"Einträge ",this.pageStartSlice+1," bis ",this.pageEndSlice," von ",Array.isArray(this.state._data)?this.state._data.length:0," angezeigt"):Object(_index_56929ada_js__WEBPACK_IMPORTED_MODULE_0__.d)("span",null,"Es sind keine Einträge vorhanden."),Object(_index_56929ada_js__WEBPACK_IMPORTED_MODULE_0__.d)("div",null,Object(_index_56929ada_js__WEBPACK_IMPORTED_MODULE_0__.d)("kol-pagination",{_boundaryCount:this.state._pagination._boundaryCount,_customClass:this.state._pagination._customClass,_on:this.handlePagination,_page:this.state._pagination._page,_pageSize:this.state._pagination._pageSize,_pageSizeOptions:this.state._pagination._pageSizeOptions||PAGINATION_OPTIONS,_siblingCount:this.state._pagination._siblingCount,_tooltipAlign:"bottom",_total:this.state._pagination._total||this.state._data.length}))))}static get watchers(){return{_caption:["validateCaption"],_data:["validateData"],_headers:["validateHeaders"],_minWidth:["validateMinWidth"],_pagination:["validatePagination"]}}};KolTable.style={default:'/* windicss-touch: 1639175625181 */\n/* windicss-touch: 1649810622229 */\n/* windicss layer base */\n*, ::before, ::after {\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n  border-width: 0;\n  border-style: solid;\n  border-color: var(--kolibri-border-color);\n}\n* {\n  --tw-ring-inset: var(--tw-empty,/*!*/ /*!*/);\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: var(--kolibri-color);\n  --tw-ring-color: rgba(undefined, 0.5);\n  --tw-ring-offset-shadow: 0 0 #0000;\n  --tw-ring-shadow: 0 0 #0000;\n  --tw-shadow: 0 0 #0000;\n}\n:root {\n  -moz-tab-size: 4;\n  -o-tab-size: 4;\n  tab-size: 4;\n}\n:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n:-moz-ui-invalid {\n  box-shadow: none;\n}\n::moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n::-webkit-inner-spin-button, ::-webkit-outer-spin-button {\n  height: auto;\n}\n::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n::-webkit-file-upload-button {\n  -webkit-appearance: button;\n  font: inherit;\n}\n[type=\'search\'] {\n  -webkit-appearance: textfield;\n  outline-offset: -2px;\n}\nabbr[title] {\n  -webkit-text-decoration: underline dotted;\n  text-decoration: underline dotted;\n}\na {\n  color: inherit;\n  text-decoration: inherit;\n}\nbody {\n  margin: 0;\n  font-family: inherit;\n  line-height: inherit;\n}\nb {\n  font-weight: bolder;\n}\nbutton, input, optgroup, select, textarea {\n  font-family: inherit;\n  font-size: 100%;\n  line-height: 1.15;\n  margin: 0;\n  padding: 0;\n  line-height: inherit;\n  color: inherit;\n}\nbutton, select {\n  text-transform: none;\n}\nbutton, [type=\'button\'], [type=\'reset\'], [type=\'submit\'] {\n  -webkit-appearance: button;\n}\nbutton {\n  background-color: transparent;\n  background-image: none;\n}\nbutton, [role="button"] {\n  cursor: pointer;\n}\ncode {\n  font-size: 1em;\n  font-family: ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;\n}\nfieldset {\n  margin: 0;\n  padding: 0;\n}\nhtml {\n  -webkit-text-size-adjust: 100%;\n  font-family: ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";\n  line-height: 1.5;\n}\nh1, p, h2, h3, h4, h5, h6 {\n  margin: 0;\n}\nh1, h2, h3, h4, h5, h6 {\n  font-size: inherit;\n  font-weight: inherit;\n}\ninput::placeholder {\n  opacity: 1;\n  color: #9ca3af;\n}\ninput::webkit-input-placeholder {\n  opacity: 1;\n  color: #9ca3af;\n}\ninput::-moz-placeholder {\n  opacity: 1;\n  color: #9ca3af;\n}\ninput:-ms-input-placeholder {\n  opacity: 1;\n  color: #9ca3af;\n}\ninput::-ms-input-placeholder {\n  opacity: 1;\n  color: #9ca3af;\n}\nlegend {\n  padding: 0;\n}\nprogress {\n  vertical-align: baseline;\n}\nsmall {\n  font-size: 80%;\n}\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n  top: -0.5em;\n}\nsvg {\n  display: block;\n  vertical-align: middle;\n}\ntable {\n  text-indent: 0;\n  border-color: inherit;\n  border-collapse: collapse;\n}\ntextarea {\n  resize: vertical;\n}\ntextarea::placeholder {\n  opacity: 1;\n  color: #9ca3af;\n}\ntextarea::webkit-input-placeholder {\n  opacity: 1;\n  color: #9ca3af;\n}\ntextarea::-moz-placeholder {\n  opacity: 1;\n  color: #9ca3af;\n}\ntextarea:-ms-input-placeholder {\n  opacity: 1;\n  color: #9ca3af;\n}\ntextarea::-ms-input-placeholder {\n  opacity: 1;\n  color: #9ca3af;\n}\nul, ol {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n/* windicss layer components */\n/* windicss layer utilities */\n.container {\n  width: 100%;\n}\n@media (min-width: 640px) {\n  .container {\n    max-width: 640px;\n  }\n}\n@media (min-width: 768px) {\n  .container {\n    max-width: 768px;\n  }\n}\n@media (min-width: 1024px) {\n  .container {\n    max-width: 1024px;\n  }\n}\n@media (min-width: 1280px) {\n  .container {\n    max-width: 1280px;\n  }\n}\n@media (min-width: 1536px) {\n  .container {\n    max-width: 1536px;\n  }\n}\n.bg-normal {\n  background-color: var(--kolibri-color-normal);\n}\n.bg-white {\n  --tw-bg-opacity: 1;\n  background-color: rgba(255, 255, 255, var(--tw-bg-opacity));\n}\n.bg-spin-1 {\n  background-color: var(--kolibri-color-spin-1);\n}\n.bg-spin-2 {\n  background-color: var(--kolibri-color-spin-2);\n}\n.bg-spin-3 {\n  background-color: var(--kolibri-color-spin-3);\n}\n.rounded {\n  border-radius: var(--kolibri-border-radius);\n}\n.border-1 {\n  border-width: 1px;\n}\n.cursor-pointer {\n  cursor: pointer;\n}\n.block {\n  display: block;\n}\n.inline-block {\n  display: inline-block;\n}\n.flex {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: -webkit-flex;\n  display: flex;\n}\n.inline-flex {\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: -webkit-inline-flex;\n  display: inline-flex;\n}\n.grid {\n  display: -ms-grid;\n  display: grid;\n}\n.hidden {\n  display: none;\n}\n.flex-wrap {\n  -ms-flex-wrap: wrap;\n  -webkit-flex-wrap: wrap;\n  flex-wrap: wrap;\n}\n.items-center {\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  -webkit-align-items: center;\n  align-items: center;\n}\n.content-center {\n  -ms-flex-line-pack: center;\n  -webkit-align-content: center;\n  align-content: center;\n}\n.float-left {\n  float: left;\n}\n.font-80 {\n  font-weight: 80;\n}\n.font-60 {\n  font-weight: 60;\n}\n.h-full {\n  height: 100%;\n}\n.h-0 {\n  height: 0px;\n}\n.h-0\\.41c-2\\.42\\2c 0-4\\.82-1\\.57-4\\.82-3\\.58c0\\.05-0\\.98\\2c 0\\.43-1\\.91\\2c 1\\.07-2\\.65c0\\.3\\2c 0\\.05\\2c 0\\.61\\2c 0\\.09\\2c 0\\.92\\2c 0\\.09c1\\.1\\2c 0\\2c 1\\.69-0\\.58\\2c 1\\.74-1\\.16 {\n  height: 0.29rem;\n}\n.text-sm {\n  font-size: 0.875rem;\n  line-height: 1.25rem;\n}\n.text-2xl {\n  font-size: 1.5rem;\n  line-height: 2rem;\n}\n.text-lg {\n  font-size: 1.125rem;\n  line-height: 1.75rem;\n}\n.leading-normal {\n  line-height: 1.5;\n}\n.list-none {\n  list-style-type: none;\n}\n.list-disc {\n  list-style-type: disc;\n}\n.list-decimal {\n  list-style-type: decimal;\n}\n.mx-auto {\n  margin-left: auto;\n  margin-right: auto;\n}\n.mr-1 {\n  margin-right: calc(1 * var(--kolibri-spacing));\n}\n.ml-1 {\n  margin-left: calc(1 * var(--kolibri-spacing));\n}\n.mr-2 {\n  margin-right: calc(2 * var(--kolibri-spacing));\n}\n.ml-2 {\n  margin-left: calc(2 * var(--kolibri-spacing));\n}\n.mb-1 {\n  margin-bottom: calc(1 * var(--kolibri-spacing));\n}\n.ml-6 {\n  margin-left: calc(6 * var(--kolibri-spacing));\n}\n.mt-2 {\n  margin-top: calc(2 * var(--kolibri-spacing));\n}\n.mt-4 {\n  margin-top: calc(4 * var(--kolibri-spacing));\n}\n.overflow-hidden {\n  overflow: hidden;\n}\n.overflow-y-visible {\n  overflow-y: visible;\n}\n.p-2 {\n  padding: calc(2 * var(--kolibri-spacing));\n}\n.px {\n  padding-left: 1px;\n  padding-right: 1px;\n}\n.py-2 {\n  padding-top: calc(2 * var(--kolibri-spacing));\n  padding-bottom: calc(2 * var(--kolibri-spacing));\n}\n.pl-8 {\n  padding-left: 2rem;\n}\n.pb-2 {\n  padding-bottom: calc(2 * var(--kolibri-spacing));\n}\n.tab {\n  -moz-tab-size: 4;\n  -o-tab-size: 4;\n  tab-size: 4;\n}\n.absolute {\n  position: absolute;\n}\n.relative {\n  position: relative;\n}\n.text-center {\n  text-align: center;\n}\n.hover\\:text-primary:hover {\n  color: var(--kolibri-color-primary);\n}\n.text-normal {\n  color: var(--kolibri-color-normal);\n}\n.underline {\n  -webkit-text-decoration-line: underline;\n  text-decoration-line: underline;\n}\n.no-underline {\n  text-decoration: none;\n}\n.visible {\n  visibility: visible;\n}\n.w-full {\n  width: 100%;\n}\n.w-4\\/5 {\n  width: 80%;\n}\n.z-50 {\n  z-index: 50;\n}\n.gap-1 {\n  grid-gap: calc(1 * var(--kolibri-spacing));\n  gap: calc(1 * var(--kolibri-spacing));\n}\n.gap-2 {\n  grid-gap: calc(2 * var(--kolibri-spacing));\n  gap: calc(2 * var(--kolibri-spacing));\n}\n.grid-flow-col {\n  grid-auto-flow: column;\n}\n.transform {\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-translate-z: 0;\n  --tw-rotate: 0;\n  --tw-rotate-x: 0;\n  --tw-rotate-y: 0;\n  --tw-rotate-z: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-scale-z: 1;\n  -webkit-transform: translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) translateZ(var(--tw-translate-z)) rotate(var(--tw-rotate)) rotateX(var(--tw-rotate-x)) rotateY(var(--tw-rotate-y)) rotateZ(var(--tw-rotate-z)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)) scaleZ(var(--tw-scale-z));\n  -ms-transform: translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) translateZ(var(--tw-translate-z)) rotate(var(--tw-rotate)) rotateX(var(--tw-rotate-x)) rotateY(var(--tw-rotate-y)) rotateZ(var(--tw-rotate-z)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)) scaleZ(var(--tw-scale-z));\n  transform: translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) translateZ(var(--tw-translate-z)) rotate(var(--tw-rotate)) rotateX(var(--tw-rotate-x)) rotateY(var(--tw-rotate-y)) rotateZ(var(--tw-rotate-z)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)) scaleZ(var(--tw-scale-z));\n}\n.animate {\n  -webkit-animation-iteration-count: 1;\n  animation-iteration-count: 1;\n}\n.blur {\n  -webkit-backdrop-filter: blur(8px);\n  backdrop-filter: blur(8px);\n}\n:host * {\n  -ms-hyphens: var(--kolibri-hyphens);\n  -webkit-hyphens: var(--kolibri-hyphens);\n  hyphens: var(--kolibri-hyphens);\n  font-family: var(--kolibri-font-family);\n  line-height: var(--kolibri-line-height);\n  word-break: break-word;\n}\n\n:host {\n  overflow: hidden;\n}\n:host > div {\n  overflow-x: auto;\n  border-radius: var(--kolibri-border-radius);\n  border-style: solid;\n  border-width: 1px;\n}\n:host > div table {\n  border: 0;\n  width: 100%;\n}\n:host > div table tr {\n  border-top-style: solid;\n  border-top-width: 1px;\n  padding-top: calc(1 * var(--kolibri-spacing));\n  padding-bottom: calc(1 * var(--kolibri-spacing));\n  padding-left: calc(2 * var(--kolibri-spacing));\n  padding-right: calc(2 * var(--kolibri-spacing));\n}\n:host > div table tr th, :host > div table tr td {\n  border-right-style: solid;\n  border-right-width: 1px;\n  padding-top: calc(1 * var(--kolibri-spacing));\n  padding-bottom: calc(1 * var(--kolibri-spacing));\n  padding-left: calc(2 * var(--kolibri-spacing));\n  padding-right: calc(2 * var(--kolibri-spacing));\n}\n:host > div table tr th:last-child,\n:host > div table tr td:last-child {\n  border: 0;\n}\n:host > div table tr th, :host > div table tr .th {\n  --tw-bg-opacity: 1;\n  background-color: rgba(229, 231, 235, var(--tw-bg-opacity));\n}\n:host > div table tr:nth-child(even) {\n  --tw-bg-opacity: 1;\n  background-color: rgba(243, 244, 246, var(--tw-bg-opacity));\n}\n:host > div table tr:nth-child(odd) {\n  @apply white;\n}\n:host > div.pagination {\n  border-style: none;\n  display: -ms-grid;\n  display: grid;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  -webkit-align-items: center;\n  align-items: center;\n  -ms-flex-line-pack: center;\n  -webkit-align-content: center;\n  align-content: center;\n  padding-top: calc(2 * var(--kolibri-spacing));\n  padding-left: calc(1 * var(--kolibri-spacing));\n  padding-right: calc(1 * var(--kolibri-spacing));\n  width: 100%;\n  grid-gap: calc(2 * var(--kolibri-spacing));\n  gap: calc(2 * var(--kolibri-spacing));\n  grid-auto-flow: column;\n}\n:host > div.pagination > div::last-child {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  -webkit-align-items: center;\n  align-items: center;\n  -ms-grid-column-align: end;\n  justify-self: end;\n  grid-gap: calc(2 * var(--kolibri-spacing));\n  gap: calc(2 * var(--kolibri-spacing));\n}'}}}]);
//# sourceMappingURL=54.3750f599.iframe.bundle.js.map