"use strict";
exports.id = 5252;
exports.ids = [5252];
exports.modules = {

/***/ 60985:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": () => (/* binding */ a11yHint),
/* harmony export */   "b": () => (/* binding */ a11yHintLabelingLandmarks),
/* harmony export */   "c": () => (/* binding */ deprecatedHint),
/* harmony export */   "d": () => (/* binding */ devHint),
/* harmony export */   "e": () => (/* binding */ a11yHintDisabled),
/* harmony export */   "f": () => (/* binding */ featureHint),
/* harmony export */   "u": () => (/* binding */ uiUxHintMillerscheZahl)
/* harmony export */ });
/* harmony import */ var _dev_utils_3ec9f837_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(99910);
/*!
 * KoliBri - The accessible HTML-Standard
 */
const a11yCache=new Set,a11yHint=e=>{!1===a11yCache.has(e)&&(a11yCache.add(e),_dev_utils_3ec9f837_js__WEBPACK_IMPORTED_MODULE_0__.L.info(e,{classifier:"✋ a11y",overwriteStyle:"; background-color: #09f"}))},deprecatedCache=new Set,deprecatedHint=e=>{!1===deprecatedCache.has(e)&&(deprecatedCache.add(e),_dev_utils_3ec9f837_js__WEBPACK_IMPORTED_MODULE_0__.L.warn(e,{classifier:"🔥 deprecated",forceLog:!0,overwriteStyle:"; background-color: #f00"}))},devCache=new Set,devHint=e=>{!1===devCache.has(e)&&(devCache.add(e),_dev_utils_3ec9f837_js__WEBPACK_IMPORTED_MODULE_0__.L.debug(e,{classifier:"💻 dev",overwriteStyle:"; background-color: #f09"}))},featureCache=new Set,featureHint=(e,a=!1)=>{!1===featureCache.has(e)&&(featureCache.add(e),e+=!0===a?" ✅":"",_dev_utils_3ec9f837_js__WEBPACK_IMPORTED_MODULE_0__.L.debug(e,{classifier:"🌟 feature",overwriteStyle:"; background-color: #309"}))};devHint("Wir freuen uns über jedes Feedback, Kommentare, Screenshots oder Demo-Links von einer auf KoliBri-basierenden Anwendung (kolibri@itzbund.de). Vielen Dank!");const uiUxCache=new Set,uiUxHint=e=>{!1===uiUxCache.has(e)&&(uiUxCache.add(e),Log.debug(e,{classifier:"📑 ui/ux",overwriteStyle:"; background-color: #060;"}))},a11yHintDisabled=()=>{a11yHint('"Disabled" schränkt die Zugänglichkeit und Sichtbarkeit ein. Wir empfehlen aus Sicht der Barrierefreiheit readonly- statt disabled-Attribut zu verwenden.\n- https://uxdesign.cc/is-it-ok-to-grey-out-disabled-buttons-8afa74a0fae')},a11yHintLabelingLandmarks=e=>{"string"==typeof e&&""!==e||a11yHint("Manche Strukturelemente, wie bspw. der nav-Tag, können mehrfach in einer Webseite verwendet werden. Damit die gleichnamigen Strukturelemente voneinander unterschieden werden können, ist es erforderlich ein Aria-Label zu setzen.\n- https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/Navigation_Role#accessibility_concerns")},uiUxHintMillerscheZahl=(e,a=8)=>{var i;a>7&&(i=`[${e}] Innerhalb von Navigationsstrukturen wird empfohlen nicht mehr als 7 Menüpunkte zu verwenden.\n\nLinks:\n- https://de.ryte.com/wiki/Millersche_Zahl\n- https://de.wikipedia.org/wiki/Millersche_Zahl`,!1===uiUxCache.has(i)&&(uiUxCache.add(i),_dev_utils_3ec9f837_js__WEBPACK_IMPORTED_MODULE_0__.L.debug(i,{classifier:"📑 ui/ux",overwriteStyle:"; background-color: #060;"})))};

/***/ }),

/***/ 13317:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": () => (/* binding */ translate)
/* harmony export */ });
/* unused harmony export t */
/* harmony import */ var _index_781a1af1_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(13566);
/* harmony import */ var _a11y_tipps_353a7f35_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(60985);
/*!
 * KoliBri - The accessible HTML-Standard
 */
const error$1="Fehler",warning$1="Warnung",info$1="Hinweis",success$1="Erfolg",message$1="Nachricht",close$1="Schließen",of$1="von",characters$1="Zeichen",locale_de={error:error$1,warning:"Warnung",info:info$1,success:"Erfolg",message:message$1,close:close$1,"form-description":"Formular-Felder, die mit einem Sternchen (*) gekennzeichnet sind, sind Pflichtangaben.",of:of$1,characters:"Zeichen",new:"Neu","no-entries":"Es sind keine Einträge vorhanden.","change-order":"Sortierung von {{colLabel}} ändern","action-running":"Aktion wird ausgeführt...","action-done":"Aktion abgeschlossen","page-first":"Direkt zur ersten Seite","page-back":"Eine Seite zurück","page-next":"Eine Seite weiter","page-last":"Direkt zur letzten Seite","entries-per-site":"Einträge pro Seite","page-current":"Seite {{page}}","page-selected":"Seite {{page}} ist ausgewählt","page-per-site":"{{entries}} Einträge pro Seite","nav-maximize":"Navigation maximieren","nav-minimize":"Navigation minimieren","logo-description":"Logo {{orgShort}}. Bundesadler mit Flaggenstab und Schriftzug {{orgLong}}","open-link-in-tab":"Der Link wird in einem neuen Tab geöffnet.","kolibri-logo":"Logo von KoliBri"},error="Error",warning="Warning",info="Note",success="Success",message="Message",close="Close",of="of",characters="characters",locale_en={error:error,warning:warning,info:info,success:success,message:message,close:close,"form-description":"Form fields marked with an asterisk (*) are mandatory.",of:of,characters:characters,new:"New","no-entries":"No entries available.","change-order":"Change order of {{colLabel}}","action-running":"Action is running...","action-done":"Action done","page-first":"Directly to the first page","page-back":"One page back","page-next":"One page further","page-last":"Directly to the last page","entries-per-site":"Entries per page","page-current":"Page {{page}}","page-selected":"Page {{page}} is selected","page-per-site":"{{entries}} entries per page","nav-maximize":"Maximize","nav-minimize":"Minimize","logo-description":"Logo {{orgShort}}. Federal eagle with flag staff and lettering {{orgLong}}","open-link-in-tab":"The link will open in a new tab.","kolibri-logo":"KoliBri logo"},mapLocaleKeys=e=>Object.keys(e).reduce(((n,i)=>(n[`kol-${i}`]=e[i],n)),{}),translations=new Set([e=>e("en",mapLocaleKeys(locale_en)),e=>e("de",mapLocaleKeys(locale_de))]),translate=(e,n)=>{const i=(0,_index_781a1af1_js__WEBPACK_IMPORTED_MODULE_0__.g)();if(void 0===i)return (0,_a11y_tipps_353a7f35_js__WEBPACK_IMPORTED_MODULE_1__.d)("[I18n] I18nService not available! Please call the global register function."),e;let a=i.translate(e,n);return a===e&&((0,_a11y_tipps_353a7f35_js__WEBPACK_IMPORTED_MODULE_1__.d)("[I18n] Locales not initialized! Initialize default locales automatically."),translations.forEach((e=>e(((e,n)=>(i.addResourceBundle(e,n),e))))),a=i.translate(e,n)),a};

/***/ }),

/***/ 65252:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "kol_table": () => (/* binding */ KolTable)
/* harmony export */ });
/* harmony import */ var _index_0dce65d2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(71312);
/* harmony import */ var _prop_validators_c2234525_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(45388);
/* harmony import */ var _i18n_f2ab4562_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(13317);
/*!
 * KoliBri - The accessible HTML-Standard
 */
const defaultStyleCss=":host{--kolibri-border-color:#e0e0e0;--kolibri-border-radius:0.125rem;--kolibri-border-width:1px;--kolibri-color-error:#f44336;--kolibri-color-info:#2196f3;--kolibri-color-success:#4caf50;--kolibri-color-warning:#ff9800;--kolibri-color-primary:#3f51b5;--kolibri-color-secondary:#ff4081;--kolibri-color-normal:#9e9e9e;--kolibri-color-danger:#f44336;--kolibri-color-ghost:#f5f5f5;--kolibri-color-disabled:#bdbdbd;--kolibri-color-text:#222222;--kolibri-color-visited:#9c27b0;--kolibri-spacing:0.25rem}*{box-sizing:border-box;hyphens:auto;letter-spacing:inherit;word-break:break-word;word-spacing:inherit}kol-icon{color:inherit}kol-span-wc{display:grid;place-items:center;width:100%}kol-span-wc>span{display:flex;gap:0.25rem;place-items:center}a,button,input,select,textarea{cursor:pointer}a.icon-only>kol-span-wc>span>span,button.icon-only>kol-span-wc>span>span{display:none}a{display:inline-flex;place-items:baseline}button{background-color:transparent;border-width:0}:host>div{overflow-x:auto;overflow-y:hidden}table{width:100%}th>div{display:grid;grid-template-columns:1fr auto;place-items:center;gap:0.25em}div.pagination{padding:0.5em}div.pagination,div.pagination>div:last-child{display:grid;place-items:center;gap:0.5em}@media (min-width: 1024px){div.pagination,div.pagination>div:last-child{grid-auto-flow:column}div.pagination kol-pagination{display:flex;gap:1rem}}",PAGINATION_OPTIONS=[10,20,50,100],CELL_REFS=new Map,KolTable=class{constructor(t){(0,_index_0dce65d2_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,t),this.horizontal=!0,this.sortDirections=new Map,this.showPagination=!1,this.pageStartSlice=0,this.pageEndSlice=10,this.setSortDirection=(t,i)=>{this.sortDirections.clear(),this.sortDirections.set(t,i),this.sortFunction=t},this.handlePagination={onClick:(t,i)=>{var e;"function"==typeof(null===(e=this.state._pagination._on)||void 0===e?void 0:e.onClick)&&this.state._pagination._on.onClick(t,i),(0,_prop_validators_c2234525_js__WEBPACK_IMPORTED_MODULE_1__.s)(this,"_pagination",Object.assign(Object.assign({},this.state._pagination),{_page:i}))},onChangePage:(t,i)=>{var e;"function"==typeof(null===(e=this.state._pagination._on)||void 0===e?void 0:e.onChangePage)&&this.state._pagination._on.onChangePage(t,i),(0,_prop_validators_c2234525_js__WEBPACK_IMPORTED_MODULE_1__.s)(this,"_pagination",Object.assign(Object.assign({},this.state._pagination),{_page:i}))},onChangePageSize:(t,i)=>{var e;"function"==typeof(null===(e=this.state._pagination._on)||void 0===e?void 0:e.onChangePageSize)&&this.state._pagination._on.onChangePageSize(t,i),(0,_prop_validators_c2234525_js__WEBPACK_IMPORTED_MODULE_1__.s)(this,"_pagination",Object.assign(Object.assign({},this.state._pagination),{_pageSize:i})),(0,_prop_validators_c2234525_js__WEBPACK_IMPORTED_MODULE_1__.s)(this,"_pageSize",i)}},this.beforePatchPagination=(t,i,e,a)=>{"_pagination"===a&&(this.showPagination=!0===t||""===t||"object"==typeof t&&null!==t)},this.updateSortedData=()=>{let t=this.state._data;if("function"==typeof this.sortFunction)switch(this.sortDirections.get(this.sortFunction)){case"NOS":t=[...this.state._data];break;case"ASC":t=this.sortFunction([...this.state._data]);break;default:t=this.sortFunction([...this.state._data]).reverse()}(0,_prop_validators_c2234525_js__WEBPACK_IMPORTED_MODULE_1__.s)(this,"_sortedData",t)},this._caption=void 0,this._data=void 0,this._headers=void 0,this._minWidth=void 0,this._pagination=void 0,this.state={_caption:"",_data:[],_headers:{horizontal:[],vertical:[]},_pagination:{_page:1,_pageSize:10,_total:0},_sortedData:[]}}validateCaption(t){(0,_prop_validators_c2234525_js__WEBPACK_IMPORTED_MODULE_1__.w)(this,"_caption",t,{required:!0})}validateData(t){(0,_prop_validators_c2234525_js__WEBPACK_IMPORTED_MODULE_1__.g)(t,(()=>{(0,_prop_validators_c2234525_js__WEBPACK_IMPORTED_MODULE_1__.o)(t,(()=>{void 0===t&&(t=[]);try{t=(0,_prop_validators_c2234525_js__WEBPACK_IMPORTED_MODULE_1__.p)(t)}catch(t){}Array.isArray(t)&&void 0===t.find((t=>!("object"==typeof t&&null!==t)))&&(0,_prop_validators_c2234525_js__WEBPACK_IMPORTED_MODULE_1__.s)(this,"_data",t,{afterPatch:()=>{const t=setTimeout((()=>{clearTimeout(t),this.updateSortedData()}))}})}))}))}validateHeaders(t){(0,_prop_validators_c2234525_js__WEBPACK_IMPORTED_MODULE_1__.g)(t,(()=>{(0,_prop_validators_c2234525_js__WEBPACK_IMPORTED_MODULE_1__.o)(t,(()=>{try{t=(0,_prop_validators_c2234525_js__WEBPACK_IMPORTED_MODULE_1__.p)(t)}catch(t){}(0,_prop_validators_c2234525_js__WEBPACK_IMPORTED_MODULE_1__.a)(this,"_headers",(t=>"object"==typeof t&&null!==t),new Set(["KoliBriTableHeaders"]),t,{hooks:{beforePatch:t=>{var i,e;const a=t;null===(i=a.horizontal)||void 0===i||i.forEach((t=>{t.forEach((t=>{"function"==typeof t.sort&&"string"==typeof t.sortDirection&&this.setSortDirection(t.sort,t.sortDirection)}))})),null===(e=a.vertical)||void 0===e||e.forEach((t=>{t.forEach((t=>{"function"==typeof t.sort&&"string"==typeof t.sortDirection&&this.setSortDirection(t.sort,t.sortDirection)}))}))}}})}))}))}validateMinWidth(t){(0,_prop_validators_c2234525_js__WEBPACK_IMPORTED_MODULE_1__.w)(this,"_minWidth",t,{defaultValue:void 0})}validatePagination(t){try{t=(0,_prop_validators_c2234525_js__WEBPACK_IMPORTED_MODULE_1__.p)(t)}catch(t){}(0,_prop_validators_c2234525_js__WEBPACK_IMPORTED_MODULE_1__.a)(this,"_pagination",(()=>!0),new Set(["boolean","KoliBriTablePagination"]),t,{hooks:{beforePatch:this.beforePatchPagination}})}componentWillLoad(){this.validateCaption(this._caption),this.validateData(this._data),this.validateHeaders(this._headers),this.validateMinWidth(this._minWidth),this.validatePagination(this._pagination)}getNumberOfCols(t,i){let e=0;return t.forEach((t=>{let i=0;t.forEach((t=>{var e;return i+=null!==(e=t.colSpan)&&void 0!==e?e:1})),e<i&&(e=i)})),0===e&&(e=i.length),e}getNumberOfRows(t,i){let e=0;return t.forEach((t=>{let i=0;t.forEach((t=>{var e;return i+=null!==(e=t.rowSpan)&&void 0!==e?e:1})),e<i&&(e=i)})),0===e&&(e=i.length),e}filterHeaderKeys(t){const i=[];return t.forEach((t=>{t.forEach((t=>{"string"==typeof t.key&&i.push(t)}))})),i}getPrimaryHeader(t){var i,e;let a=this.filterHeaderKeys(null!==(i=t.horizontal)&&void 0!==i?i:[]);return this.horizontal=!0,0===a.length&&(a=this.filterHeaderKeys(null!==(e=t.vertical)&&void 0!==e?e:[]),a.length>0&&(this.horizontal=!1)),a}createDataField(t,i){i.horizontal=Array.isArray(null==i?void 0:i.horizontal)?i.horizontal:[],i.vertical=Array.isArray(null==i?void 0:i.vertical)?i.vertical:[];const e=this.getPrimaryHeader(i),a=this.getNumberOfCols(i.horizontal,t),o=this.getNumberOfRows(i.vertical,t),n=[],s=[],r=[];i.vertical.forEach(((t,i)=>{s[i]=0,r[i]=[]}));for(let l=0;l<o;l++){const o=[];i.vertical.forEach(((t,i)=>{let e=0;if(r[i].forEach((t=>e+=t)),e<=l){const a=t[l-e+s[i]];if("object"==typeof a){o.push(Object.assign(Object.assign({},a),{asTd:!1,data:{}}));let t=1;if("number"==typeof a.rowSpan&&a.rowSpan>1&&(t=a.rowSpan),r[i].push(t),"number"==typeof a.colSpan&&a.colSpan>1)for(let e=1;e<a.colSpan;e++)r[i+e].push(t);s[i]++}}}));for(let i=0;i<a;i++)!0===this.horizontal?"object"==typeof e[i]&&null!==e[i]&&"string"==typeof e[i].key&&"object"==typeof t[l]&&null!==t[l]&&o.push(Object.assign(Object.assign({},e[i]),{colSpan:void 0,data:t[l],label:t[l][e[i].key],rowSpan:void 0})):"object"==typeof e[l]&&null!==e[l]&&"string"==typeof e[l].key&&"object"==typeof t[i]&&null!==t[i]&&o.push(Object.assign(Object.assign({},e[l]),{colSpan:void 0,data:t[i],label:t[i][e[l].key],rowSpan:void 0}));n.push(o)}if(0===t.length){let t=0,e=0;Array.isArray(i.horizontal)&&i.horizontal.length>0&&i.horizontal[0].forEach((i=>{t+=i.colSpan||1})),Array.isArray(i.vertical)&&i.vertical.length>0&&(t-=i.vertical.length,i.vertical[0].forEach((t=>{e+=t.rowSpan||1})));const a={colSpan:t,label:(0,_i18n_f2ab4562_js__WEBPACK_IMPORTED_MODULE_2__.a)("kol-no-entries"),render:void 0,rowSpan:Math.max(e,1)};0===n.length?n.push([a]):n[0].push(a)}return n}selectDisplayedData(t,i,e){return"number"==typeof i&&i>0&&"number"==typeof e&&e>0?(this.pageStartSlice=i*(e-1),this.pageEndSlice=i*e>t.length?t.length:i*e,t.slice(this.pageStartSlice,this.pageEndSlice)):(this.pageStartSlice=0,this.pageEndSlice=t.length,t)}cellRender(t,i){i&&(clearTimeout(CELL_REFS.get(i)),CELL_REFS.set(i,setTimeout((()=>{if(clearTimeout(CELL_REFS.get(i)),"function"==typeof t.render){const e=t.render(i,{asTd:t.asTd,label:t.label,textAlign:t.textAlign,width:t.width},t.data,this.state._data);"string"==typeof e&&(i.innerHTML=e)}}))))}render(){var t,i;const e=this.selectDisplayedData(this.state._sortedData,this.showPagination?null!==(i=null===(t=this.state._pagination)||void 0===t?void 0:t._pageSize)&&void 0!==i?i:10:this.state._sortedData.length,this.state._pagination._page||1),a=this.createDataField(e,this.state._headers);return (0,_index_0dce65d2_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_0dce65d2_js__WEBPACK_IMPORTED_MODULE_0__.H,null,(0,_index_0dce65d2_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{tabindex:"0"},(0,_index_0dce65d2_js__WEBPACK_IMPORTED_MODULE_0__.h)("table",{style:{minWidth:this.state._minWidth}},(0,_index_0dce65d2_js__WEBPACK_IMPORTED_MODULE_0__.h)("caption",null,this.state._caption),Array.isArray(this.state._headers.horizontal)&&(0,_index_0dce65d2_js__WEBPACK_IMPORTED_MODULE_0__.h)("thead",null,this.state._headers.horizontal.map(((t,i)=>(0,_index_0dce65d2_js__WEBPACK_IMPORTED_MODULE_0__.h)("tr",{key:`thead-${i}`},t.map(((t,e)=>!0===t.asTd?(0,_index_0dce65d2_js__WEBPACK_IMPORTED_MODULE_0__.h)("td",{key:`thead-${i}-${e}-${t.label}`,class:{[t.textAlign]:"string"==typeof t.textAlign&&t.textAlign.length>0},colSpan:t.colSpan,rowSpan:t.rowSpan,style:{textAlign:t.textAlign,width:t.width},ref:"function"==typeof t.render?i=>{this.cellRender(t,i)}:void 0,innerHTML:"function"!=typeof t.render?t.label:""}):(0,_index_0dce65d2_js__WEBPACK_IMPORTED_MODULE_0__.h)("th",{key:`thead-${i}-${e}-${t.label}`,scope:"number"==typeof t.colSpan&&t.colSpan>1?"colgroup":"col",colSpan:t.colSpan,rowSpan:t.rowSpan,style:{textAlign:t.textAlign,width:t.width},"aria-sort":"function"==typeof t.sort?t.sort!==this.sortFunction||"NOS"===this.sortDirections.get(t.sort)||void 0===this.sortDirections.get(t.sort)?"none":"ASC"===this.sortDirections.get(t.sort)?"ascending":"descending":void 0,"data-sort":`sort-${this.sortDirections.get(t.sort)}`},(0,_index_0dce65d2_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"w-full flex gap-1 items-center"},(0,_index_0dce65d2_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:{"w-full":!0,[t.textAlign]:"string"==typeof t.textAlign&&t.textAlign.length>0},innerHTML:t.label,style:{textAlign:t.textAlign}}),"function"==typeof t.sort&&(0,_index_0dce65d2_js__WEBPACK_IMPORTED_MODULE_0__.h)("kol-button",{exportparts:"button,ghost",_ariaLabel:(0,_i18n_f2ab4562_js__WEBPACK_IMPORTED_MODULE_2__.a)("kol-change-order",{placeholders:{colLabel:t.label}}),_icon:t.sort!==this.sortFunction||"NOS"===this.sortDirections.get(t.sort)||void 0===this.sortDirections.get(t.sort)?"fas fa-sort":"ASC"===this.sortDirections.get(t.sort)?"fas fa-sort-up":"fas fa-sort-down",_iconOnly:!0,_label:(0,_i18n_f2ab4562_js__WEBPACK_IMPORTED_MODULE_2__.a)("kol-change-order",{placeholders:{colLabel:t.label}}),_on:{onClick:()=>{if("function"==typeof t.sort){switch(this.sortFunction=t.sort,this.sortDirections.get(this.sortFunction)){case"ASC":this.setSortDirection(this.sortFunction,"DESC");break;case"DESC":this.setSortDirection(this.sortFunction,"NOS");break;default:this.setSortDirection(this.sortFunction,"ASC")}this.updateSortedData()}}},_variant:"ghost"}))))))))),(0,_index_0dce65d2_js__WEBPACK_IMPORTED_MODULE_0__.h)("tbody",null,a.map(((t,i)=>(0,_index_0dce65d2_js__WEBPACK_IMPORTED_MODULE_0__.h)("tr",{key:`tbody-${i}`},t.map(((t,e)=>!1===t.asTd?(0,_index_0dce65d2_js__WEBPACK_IMPORTED_MODULE_0__.h)("th",{key:`tbody-${i}-${e}-${t.label}`,scope:"number"==typeof t.rowSpan&&t.rowSpan>1?"rowgroup":"row",colSpan:t.colSpan,rowSpan:t.rowSpan,style:{textAlign:t.textAlign,width:t.width},"aria-sort":"function"==typeof t.sort?t.sort!==this.sortFunction||"NOS"===this.sortDirections.get(t.sort)||void 0===this.sortDirections.get(t.sort)?"none":"ASC"===this.sortDirections.get(t.sort)?"ascending":"descending":void 0,"data-sort":`sort-${this.sortDirections.get(t.sort)}`},(0,_index_0dce65d2_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"w-full flex gap-1 items-center"},(0,_index_0dce65d2_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:{"w-full":!0,[t.textAlign]:"string"==typeof t.textAlign&&t.textAlign.length>0},innerHTML:t.label,style:{textAlign:t.textAlign}}),"function"==typeof t.sort&&(0,_index_0dce65d2_js__WEBPACK_IMPORTED_MODULE_0__.h)("kol-button",{exportparts:"button,ghost",_ariaLabel:(0,_i18n_f2ab4562_js__WEBPACK_IMPORTED_MODULE_2__.a)("kol-change-order",{placeholders:{colLabel:t.label}}),_icon:t.sort!==this.sortFunction||"NOS"===this.sortDirections.get(t.sort)||void 0===this.sortDirections.get(t.sort)?"fas fa-sort":"ASC"===this.sortDirections.get(t.sort)?"fas fa-sort-up":"fas fa-sort-down",_iconOnly:!0,_label:(0,_i18n_f2ab4562_js__WEBPACK_IMPORTED_MODULE_2__.a)("kol-change-order",{placeholders:{colLabel:t.label}}),_on:{onClick:()=>{if("function"==typeof t.sort){switch(this.sortFunction=t.sort,this.sortDirections.get(this.sortFunction)){case"ASC":this.setSortDirection(this.sortFunction,"DESC");break;case"DESC":this.setSortDirection(this.sortFunction,"NOS");break;default:this.setSortDirection(this.sortFunction,"ASC")}this.updateSortedData()}}},_variant:"ghost"}))):(0,_index_0dce65d2_js__WEBPACK_IMPORTED_MODULE_0__.h)("td",{key:`tbody-${i}-${e}-${t.label}`,class:{[t.textAlign]:"string"==typeof t.textAlign&&t.textAlign.length>0},colSpan:t.colSpan,rowSpan:t.rowSpan,style:{textAlign:t.textAlign,width:t.width},ref:"function"==typeof t.render?i=>{this.cellRender(t,i)}:void 0,innerHTML:"function"!=typeof t.render?t.label:""}))))))))),this.pageEndSlice>0&&this.showPagination&&(0,_index_0dce65d2_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"pagination"},(0,_index_0dce65d2_js__WEBPACK_IMPORTED_MODULE_0__.h)("span",null,"Einträge ",this.pageEndSlice>0?this.pageStartSlice+1:0," bis ",this.pageEndSlice," von"," ",this.state._pagination._total||(Array.isArray(this.state._data)?this.state._data.length:0)," angezeigt"),(0,_index_0dce65d2_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",null,(0,_index_0dce65d2_js__WEBPACK_IMPORTED_MODULE_0__.h)("kol-pagination",{_boundaryCount:this.state._pagination._boundaryCount,_customClass:this.state._pagination._customClass,_on:this.handlePagination,_page:this.state._pagination._page,_pageSize:this.state._pagination._pageSize,_pageSizeOptions:this.state._pagination._pageSizeOptions||PAGINATION_OPTIONS,_siblingCount:this.state._pagination._siblingCount,_tooltipAlign:"bottom",_total:this.state._pagination._total||this.state._data.length}))))}static get watchers(){return{_caption:["validateCaption"],_data:["validateData"],_headers:["validateHeaders"],_minWidth:["validateMinWidth"],_pagination:["validatePagination"]}}};KolTable.style={default:defaultStyleCss};

/***/ }),

/***/ 45388:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "K": () => (/* binding */ KoliBriDevHelper),
/* harmony export */   "a": () => (/* binding */ watchValidator),
/* harmony export */   "b": () => (/* binding */ watchBoolean),
/* harmony export */   "c": () => (/* binding */ s),
/* harmony export */   "d": () => (/* binding */ watchJsonArrayString),
/* harmony export */   "e": () => (/* binding */ watchNumber),
/* harmony export */   "f": () => (/* binding */ setEventTargetAndStopPropagation),
/* harmony export */   "g": () => (/* binding */ emptyStringByArrayHandler),
/* harmony export */   "h": () => (/* binding */ mapBoolean2String),
/* harmony export */   "i": () => (/* binding */ scrollBySelector),
/* harmony export */   "j": () => (/* binding */ mapStringOrBoolean2String),
/* harmony export */   "k": () => (/* binding */ koliBriQuerySelector),
/* harmony export */   "l": () => (/* binding */ KoliBriUtils),
/* harmony export */   "m": () => (/* binding */ mapString2Unknown),
/* harmony export */   "n": () => (/* binding */ koliBriA11yColorContrast),
/* harmony export */   "o": () => (/* binding */ objectObjectHandler),
/* harmony export */   "p": () => (/* binding */ parseJson),
/* harmony export */   "q": () => (/* binding */ koliBriQuerySelectorAll),
/* harmony export */   "r": () => (/* binding */ rgbaConvert),
/* harmony export */   "s": () => (/* binding */ setState),
/* harmony export */   "t": () => (/* binding */ koliBriQuerySelectorColors),
/* harmony export */   "u": () => (/* binding */ stringifyJson),
/* harmony export */   "w": () => (/* binding */ watchString)
/* harmony export */ });
/* harmony import */ var _index_2a11dd6d_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5649);
/* harmony import */ var _a11y_tipps_353a7f35_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(60985);
/* harmony import */ var _dev_utils_3ec9f837_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(99910);
/*!
 * KoliBri - The accessible HTML-Standard
 */
const pushNodes=(e,t)=>{t.forEach((t=>{!1===e.has(t)&&e.add(t)}))},querySelectorAll=(e,t=document)=>{if(t instanceof Document||t instanceof HTMLElement||t instanceof ShadowRoot){const r=new Set;pushNodes(r,t.querySelectorAll(e));const o=t.querySelectorAll('[class*="hydrated"]');for(let t=0;t<o.length;t++){const n=o[t].shadowRoot;pushNodes(r,querySelectorAll(e,"object"==typeof n&&null!==n?n:o[t]))}return Array.from(r)}throw new Error("The parameter document for the method querySelectorAll is not type of Document, HTMLElement or ShadowRoot.")},querySelector=(e,t=document)=>{if(t instanceof Document||t instanceof HTMLElement||t instanceof ShadowRoot){let r=t.querySelector(e);if(null===r){const o=t.querySelectorAll('[class*="hydrated"]');for(let t=0;t<o.length;t++){const n=o[t].shadowRoot;if(r=querySelector(e,"object"==typeof n&&null!==n?n:o[t]),null!==r)break}}return r}throw new Error("The parameter document for the method querySelector is not type of Document, HTMLElement or ShadowRoot.")};var rgbaConvert=arr,arr_1=arr,obj_1=obj,css_1=css,hex_1=hex,num_1=num;function arr(e){var t=parse(e);return 3==t.length?t.concat(255):(t[3]=Math.round(t[3]),t)}function obj(e){var t=parse(e);return{r:t[0],g:t[1],b:t[2],a:3==t.length?255:Math.round(t[3])}}function css(e){var t=parse(e);return 3==t.length&&t.push(255),255==t[3]?"rgb("+t[0]+", "+t[1]+", "+t[2]+")":0==t[3]?"rgba("+t[0]+", "+t[1]+", "+t[2]+", 0)":"rgba("+t[0]+", "+t[1]+", "+t[2]+", "+String(t[3]/255).substr(1)+")"}function hex(e){3==(t=parse(e)).length&&t.push(255);var t,r=255==t[3],o=num2hex(t[0]),n=num2hex(t[1]),a=num2hex(t[2]),l=isshort(o,n,a,t=num2hex(Math.round(t[3])));return r?l?"#"+o.charAt(0)+n.charAt(0)+a.charAt(0):"#"+o+n+a:l?"#"+o.charAt(0)+n.charAt(0)+a.charAt(0)+t.charAt(0):"#"+o+n+a+t}function num(e){var t=parse(e);return 3==t.length?t.push(255):t[3]=Math.round(t[3]),(t[3]<<24>>>0|t[0]<<16|t[1]<<8|t[2])>>>0}function parse(e){return"string"==typeof e?name(e=e.toLowerCase())||hex3(e)||hex6(e)||rgb(e)||rgba(e)||[0,0,0,255]:object(e)||array(e)||number(e)||[0,0,0,255]}function num2hex(e){var t=e.toString(16);return 1==t.length?"0"+t:t}function isshort(e,t,r,o){var n=["ff","00","11","22","33","44","55","66","77","88","99","aa","bb","cc","dd","ee"];return-1!=n.indexOf(e)&&-1!=n.indexOf(t)&&-1!=n.indexOf(r)&&-1!=n.indexOf(o)}function name(e){return"red"==e?[255,0,0]:"green"==e?[0,255,0]:"blue"==e?[0,0,255]:"black"==e?[0,0,0]:"white"==e?[255,255,255]:"cyan"==e?[0,255,255]:"gray"==e||"grey"==e?[128,128,128]:"magenta"==e||"pink"==e?[255,0,255]:"yellow"==e?[255,255,0]:void 0}function hex2num(e){return 1==e.length?parseInt(e+e,16):parseInt(e,16)}function hex3(e){var t=e.replace(/^#/,""),r=t.length;if(3==r||4==r){var o=hex2num(t[0]),n=hex2num(t[1]),a=hex2num(t[2]),l=3==r?255:hex2num(t[3]);if(isNaN(o)||isNaN(n)||isNaN(a)||isNaN(l))return;return[o,n,a,l]}}function hex6(e){var t=e.replace(/^#/,""),r=t.length;if(6==r||8==r){var o=hex2num(t.slice(0,2)),n=hex2num(t.slice(2,4)),a=hex2num(t.slice(4,6)),l=6==r?255:hex2num(t.slice(6,8));if(isNaN(o)||isNaN(n)||isNaN(a)||isNaN(l))return;return[o,n,a,l]}}function getnum(e,t){return"number"!=typeof e||!0===t&&Math.floor(e)!==e?-1:e>=0&&e<=255?e:-1}function object(e){if("[object Object]"===Object.prototype.toString.call(e)&&Object.getPrototypeOf(e)===Object.getPrototypeOf({})){var t=getnum(null!=e.r?e.r:null!=e.red?e.red:0,!0),r=getnum(null!=e.g?e.g:null!=e.green?e.green:0,!0),o=getnum(null!=e.b?e.b:null!=e.blue?e.blue:0,!0),n=getnum(null!=e.a?e.a:null!=e.alpha?e.alpha:255,!0);if(-1!=t&&-1!=r&&-1!=o&&-1!=n)return[t,r,o,n]}}function array(e){if(Array.isArray(e)&&(3==e.length||4==e.length)){var t=getnum(e[0],!0),r=getnum(e[1],!0),o=getnum(e[2],!0),n=getnum(null!=e[3]?e[3]:255,!0);if(-1!=t&&-1!=r&&-1!=o&&-1!=n)return[t,r,o,n]}}function number(e){if("number"==typeof e&&Math.floor(e)==e&&e<=4294967295&&e>=0)return[e>>16&255,e>>8&255,255&e,e>>24&255]}function rgb(e){if("rgb("==e.substr(0,4)){var t=(e=e.match(/^rgb\(([^)]+)\)/)[1]).split(/ *, */).map(Number),r=getnum(t[0],!0),o=getnum(t[1],!0),n=getnum(t[2],!0);if(-1!=r&&-1!=o&&-1!=n)return[r,o,n,255]}}function rgba(e){if("rgba("==e.substr(0,5)){var t=(e=e.match(/^rgba\(([^)]+)\)/)[1]).split(/ *, */).map(Number),r=getnum(t[0],!0),o=getnum(t[1],!0),n=getnum(t[2],!0),a=getnum(255*t[3]);if(-1!=r&&-1!=o&&-1!=n&&-1!=a)return[r,o,n,a]}}rgbaConvert.arr=arr_1,rgbaConvert.obj=obj_1,rgbaConvert.css=css_1,rgbaConvert.hex=hex_1,rgbaConvert.num=num_1;var n=.2126,r=.7152,t=.0722,e=1/12.92;function u(e){return Math.pow((e+.055)/1.055,2.4)}function a(o){var a=o[0]/255,l=o[1]/255,i=o[2]/255,s=a<=.03928?a*e:u(a),c=l<=.03928?l*e:u(l),d=i<=.03928?i*e:u(i);return s*n+c*r+d*t}function i(e){var t=255;8===(e=e.replace(/^#/,"")).length&&(t=parseInt(e.slice(6,8),16),e=e.substring(0,6)),4===e.length&&(t=parseInt(e.slice(3,4).repeat(2),16),e=e.substring(0,3)),3===e.length&&(e=e[0]+e[0]+e[1]+e[1]+e[2]+e[2]);var r=parseInt(e,16);return[r>>16,r>>8&255,255&r,t]}function c(e,t){return(Math.max(e,t)+.05)/(Math.min(e,t)+.05)}function o(e,t){return c(a(e),a(t))}function s(e,t){return o(i(e),i(t))}function f(e){return e>=7?"AAA":e>=4.5?"AA":e>=3?"AA Large":"Fail"}const OBJECT_OBJECT=/\[object Object\]/,objectObjectHandler=(e,t)=>{"string"==typeof e&&OBJECT_OBJECT.test(e)||t()},emptyStringByArrayHandler=(e,t)=>{"string"==typeof e&&""===e||t()},setEventTargetAndStopPropagation=(e,t)=>{(0,_dev_utils_3ec9f837_js__WEBPACK_IMPORTED_MODULE_0__.b)()&&(_dev_utils_3ec9f837_js__WEBPACK_IMPORTED_MODULE_0__.L.debug([e,t]),_dev_utils_3ec9f837_js__WEBPACK_IMPORTED_MODULE_0__.L.debug("↑ We propagate the (submit) event to this target.")),Object.defineProperty(e,"target",{value:t,writable:!1})},patchState=e=>{var t,r,o;null===(t=e.nextHooks)||void 0===t||t.forEach(((t,r)=>{var o;const n=t.get("beforePatch");"function"==typeof n&&n(null===(o=e.nextState)||void 0===o?void 0:o.get(r),e.nextState,e,r)})),(null===(r=e.nextState)||void 0===r?void 0:r.size)>0&&(e.state=Object.assign(Object.assign({},e.state),Object.fromEntries(e.nextState)),delete e.nextState,null===(o=e.nextHooks)||void 0===o||o.forEach(((t,r)=>{const o=t.get("afterPatch");"function"==typeof o&&o(e.state[r],e.state,e,r)}))),delete e.nextHooks},setState=(e,t,r,o={})=>{var n,a;if(void 0===e.nextHooks&&(e.nextHooks=new Map),void 0===e.nextState&&(e.nextState=new Map),e.nextState.get(t)!==r){e.nextHooks.get(t)instanceof Map==!1&&e.nextHooks.set(t,new Map),"function"==typeof o.afterPatch&&(null===(n=e.nextHooks.get(t))||void 0===n||n.set("afterPatch",o.afterPatch)),"function"==typeof o.beforePatch&&(null===(a=e.nextHooks.get(t))||void 0===a||a.set("beforePatch",o.beforePatch)),e.nextState.set(t,r),patchState(e)}},logWarn=(e,t,r,o)=>{(0,_a11y_tipps_353a7f35_js__WEBPACK_IMPORTED_MODULE_1__.d)(`[${e.constructor.name}] Der Property-Wert (${r}) für '${t}' ist nicht valide. Folgende Werte sind erlaubt: ${Array.from(o).join(", ")}`)},watchValidator=(e,t,r,o,n,a={})=>{r(n)?setState(e,t,n,null==a?void 0:a.hooks):void 0===n||null===n&&(void 0===(null==a?void 0:a.required)||!1===(null==a?void 0:a.required))?setState(e,t,null==a?void 0:a.defaultValue,null==a?void 0:a.hooks):(void 0!==(null==a?void 0:a.required)&&!1!==(null==a?void 0:a.required)||o.add(null),logWarn(e,t,n,o))},watchBoolean=(e,t,r,o)=>{watchValidator(e,t,(e=>"boolean"==typeof e),new Set(["Boolean {true, false}"]),r,o)},watchString=(e,t,r,o={})=>{const n="number"==typeof o.minLength?null==o?void 0:o.minLength:0;watchValidator(e,t,(e=>"string"==typeof e&&e.length>=n),new Set([`String (Mindestlänge ${n})`]),r,o)},watchNumber=(e,t,r,o)=>{watchValidator(e,t,(e=>"number"==typeof e&&(void 0===(null==o?void 0:o.min)||"number"==typeof(null==o?void 0:o.min)&&e>=o.min)&&(void 0===(null==o?void 0:o.max)||"number"==typeof(null==o?void 0:o.max)&&e<=o.max)),new Set(["Number"]),r,o)},watchJsonArrayString=(e,t,r,o,n=(e=>e==e),a={})=>{emptyStringByArrayHandler(o,(()=>{objectObjectHandler(o,(()=>{void 0===o&&(o=[]);try{try{o=parseJson(o)}catch(e){}if(Array.isArray(o)){const l=o.find((e=>!r(e)));void 0===l&&n(o)?setState(e,t,o,a.hooks):objectObjectHandler(l,(()=>{throw _dev_utils_3ec9f837_js__WEBPACK_IMPORTED_MODULE_0__.L.debug(l),new Error("↑ Das Schema für das Property (_options) ist nicht valide. Der Wert wird nicht geändert.")}))}else objectObjectHandler(o,(()=>{throw _dev_utils_3ec9f837_js__WEBPACK_IMPORTED_MODULE_0__.L.debug(o),new Error("↑ Das Schema für das Property (_options) ist nicht valide. Der Wert wird nicht geändert.")}))}catch(e){_dev_utils_3ec9f837_js__WEBPACK_IMPORTED_MODULE_0__.L.debug(e)}}))}))},BOOLEAN=/^(true|false)$/,INTEGER=/^-?(0|[1-9]\d*)$/,FLOAT=/^-?(0.|[1-9]\d*.)\d*[1-9]$/,mapString2Unknown=e=>{const t=typeof e,r=`${e}`;if("string"==typeof e)if(BOOLEAN.test(e))e="true"===e;else if(INTEGER.test(e))e=parseInt(e);else if(FLOAT.test(e))e=parseFloat(e);else if(JSON_CHARS.test(e))try{e=parseJson(e)}catch(e){}return t!==typeof e&&(0,_a11y_tipps_353a7f35_js__WEBPACK_IMPORTED_MODULE_1__.d)(`You have used a stringified property value (${r} to ${JSON.stringify(e)}) which type switched from ${t} to ${typeof e}!`),e},stringifyJson=e=>{try{return JSON.stringify(e).replace(/"/g,"'")}catch(t){throw _dev_utils_3ec9f837_js__WEBPACK_IMPORTED_MODULE_0__.L.warn(["stringifyJson",e]),_dev_utils_3ec9f837_js__WEBPACK_IMPORTED_MODULE_0__.L.error("↑ Das JSON konnte nicht in einen String umgewandelt werden. Es wird ein stringifizierbares JSON erwartet."),new Error}},JSON_CHARS=/^[{[]/,parseJson=e=>{if("string"==typeof e)try{return JSON.parse(e)}catch(t){if(JSON_CHARS.test(e))try{return JSON.parse(e.replace(/'/g,'"'))}catch(t){_dev_utils_3ec9f837_js__WEBPACK_IMPORTED_MODULE_0__.L.warn(["parseJson",e]),_dev_utils_3ec9f837_js__WEBPACK_IMPORTED_MODULE_0__.L.error("↑ Der JSON-String konnte nicht geparsed werden. Achten Sie darauf, dass einfache Anführungszeichen im Text maskiert werden (&#8216;).")}}throw new Error},mapBoolean2String=e=>"boolean"==typeof e?!0===e?"true":"false":void 0,mapStringOrBoolean2String=e=>"string"==typeof e?e:mapBoolean2String(e),koliBriQuerySelector=(e,t)=>querySelector(e,t||(0,_dev_utils_3ec9f837_js__WEBPACK_IMPORTED_MODULE_0__.g)()),koliBriQuerySelectorAll=(e,t)=>querySelectorAll(e,t||(0,_dev_utils_3ec9f837_js__WEBPACK_IMPORTED_MODULE_0__.g)());let DEFAULT_COLOR_CONTRAST=null;const getDefaultColorContrast=()=>(DEFAULT_COLOR_CONTRAST=DEFAULT_COLOR_CONTRAST||{backgroundColor:"#00000000",color:"#00000000",domNode:(0,_dev_utils_3ec9f837_js__WEBPACK_IMPORTED_MODULE_0__.g)().body,level:"Fail",score:1},DEFAULT_COLOR_CONTRAST),TRANSPARENT_REGEXP=/(\d+, ){3}0\)/,koliBriA11yColorContrast=(e,t=getDefaultColorContrast())=>{const r=getComputedStyle(e),o=TRANSPARENT_REGEXP.test(r.backgroundColor)?t.backgroundColor:rgbaConvert.hex(r.backgroundColor),n=TRANSPARENT_REGEXP.test(r.color)?t.color:rgbaConvert.hex(r.color),a=s(o,n),l={backgroundColor:o,color:n,domNode:e,level:f(a),score:a};return a<4.5&&_dev_utils_3ec9f837_js__WEBPACK_IMPORTED_MODULE_0__.L.error(["Color-Contrast-Error",{backgroundColor:l.backgroundColor,color:l.color,level:l.level,score:l.score},l.domNode]),l},koliBriQuerySelectorColors=(e,t=getDefaultColorContrast())=>{t.domNode instanceof HTMLElement&&(t=koliBriA11yColorContrast(t.domNode,t));const r=t.domNode.querySelector(e);if(null===r){const r=t.domNode.querySelectorAll('[class="hydrated"]');for(let o=0;o<r.length&&(t.domNode=r[o],null===(t=koliBriQuerySelectorColors(e,t)).domNode);o++);return t}return koliBriA11yColorContrast(r,t)},scrollByHTMLElement=(e,t=window)=>{e instanceof HTMLElement?(t.scrollTo({behavior:"smooth",top:e.getBoundingClientRect().top+(0,_dev_utils_3ec9f837_js__WEBPACK_IMPORTED_MODULE_0__.a)().pageYOffset-50}),e.focus()):(0,_a11y_tipps_353a7f35_js__WEBPACK_IMPORTED_MODULE_1__.d)("Das HTMLElement ist nicht valide, zu dem gescrollt werden soll.")},scrollBySelector=(e,t)=>{if((e instanceof Document||e instanceof HTMLElement||e instanceof ShadowRoot)&&"string"==typeof t){(0,_a11y_tipps_353a7f35_js__WEBPACK_IMPORTED_MODULE_1__.d)("Bei der Methode querySelectorAll wurden die Parameter document, selector in selector, document getauscht, da der Parameter selector nicht, allerdings der Parameter document optional sein kann.");const r=`${t}`;t=e,e=r}if("string"==typeof e){const r=koliBriQuerySelector(e,t);r instanceof HTMLElement?scrollByHTMLElement(r):(0,_a11y_tipps_353a7f35_js__WEBPACK_IMPORTED_MODULE_1__.d)(`Es konnte kein HTMLElement mit dem Selector (${e}) gefunden werden, zu dem gescrollt werden soll.`)}else (0,_a11y_tipps_353a7f35_js__WEBPACK_IMPORTED_MODULE_1__.d)("Der Selector ist nicht valide, zu dem gescrollt werden soll.")};class KoliBriUtils{static queryHtmlElementColors(e,t,r=!1,o=!0){let n=null;if(!0===r||!1===KoliBriUtils.executionLock)if(!1===r&&(KoliBriUtils.cache.clear(),KoliBriUtils.cache.set(t.domNode,t),KoliBriUtils.executionLock=!0,!0===o&&_dev_utils_3ec9f837_js__WEBPACK_IMPORTED_MODULE_0__.L.debug("[KoliBriUtils] Color contrast analysis started...")),e===t.domNode)n=t;else{const r=new Set;if(t.domNode.shadowRoot){const e=t.domNode.shadowRoot.children;for(let t=0;t<e.length;t++)r.add(e[t])}const o=t.domNode;if("function"==typeof o.assignedNodes){const e=o.assignedNodes();for(let t=0;t<e.length;t++)e[t]instanceof HTMLElement&&r.add(e[t])}const a=t.domNode.children;for(let e=0;e<a.length;e++)r.add(a[e]);const l=Array.from(r);for(let r=0;r<l.length;r++){let o=KoliBriUtils.cache.get(l[r]);void 0===o&&(o=koliBriA11yColorContrast(l[r],t)),KoliBriUtils.cache.set(l[r],o);const a=KoliBriUtils.queryHtmlElementColors(e,o,!0,!1);if(null!==a){n=a;break}}}else _dev_utils_3ec9f837_js__WEBPACK_IMPORTED_MODULE_0__.L.debug("[KoliBriUtils] Call aborted because a color contrast analysis is currently being executed.");return!1===r&&(!0===o&&_dev_utils_3ec9f837_js__WEBPACK_IMPORTED_MODULE_0__.L.debug(`[KoliBriUtils] Color contrast analysis finished (${KoliBriUtils.cache.size} DOM elements are analysed).`),KoliBriUtils.executionLock=!1,KoliBriUtils.cache.clear()),n}}KoliBriUtils.executionLock=!1,KoliBriUtils.cache=new Map;class KoliBriDevHelper{}KoliBriDevHelper.patchTheme=_index_2a11dd6d_js__WEBPACK_IMPORTED_MODULE_2__.p,KoliBriDevHelper.patchThemeTag=_index_2a11dd6d_js__WEBPACK_IMPORTED_MODULE_2__.a,KoliBriDevHelper.querySelector=koliBriQuerySelector,KoliBriDevHelper.querySelectorAll=koliBriQuerySelectorAll,KoliBriDevHelper.scrollByHTMLElement=scrollByHTMLElement,KoliBriDevHelper.scrollBySelector=scrollBySelector,KoliBriDevHelper.stringifyJson=stringifyJson;

/***/ })

};
;