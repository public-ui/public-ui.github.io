"use strict";
exports.id = 6048;
exports.ids = [6048];
exports.modules = {

/***/ 97449:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "w": () => (/* binding */ watchTooltipAlignment)
/* harmony export */ });
/* harmony import */ var _prop_validators_e402ad49_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85982);
/*!
 * KoliBri - The accessible HTML-Standard
 */
const watchTooltipAlignment=(t,o,a)=>{(0,_prop_validators_e402ad49_js__WEBPACK_IMPORTED_MODULE_0__.a)(t,o,(t=>"top"===t||"right"===t||"bottom"===t||"left"===t),new Set(["Alignment {top, right, buttom, left}"]),a,{defaultValue:"top"})};

/***/ }),

/***/ 50890:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": () => (/* binding */ watchButtonType),
/* harmony export */   "w": () => (/* binding */ watchButtonVariant)
/* harmony export */ });
/* harmony import */ var _prop_validators_e402ad49_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85982);
/*!
 * KoliBri - The accessible HTML-Standard
 */
const watchButtonType=(t,a,o)=>{(0,_prop_validators_e402ad49_js__WEBPACK_IMPORTED_MODULE_0__.a)(t,a,(t=>"button"===t||"reset"===t||"submit"===t),new Set(["KoliBriButtonType {button, reset, submit}"]),o)},watchButtonVariant=(t,a,o)=>{(0,_prop_validators_e402ad49_js__WEBPACK_IMPORTED_MODULE_0__.a)(t,a,(t=>"primary"===t||"secondary"===t||"normal"===t||"danger"===t||"ghost"===t||"custom"===t),new Set(["KoliBriButtonVariant {primary, secondary, normal, danger, ghost, custom}"]),o,{defaultValue:"normal"})};

/***/ }),

/***/ 30266:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": () => (/* binding */ translate)
/* harmony export */ });
/* unused harmony export t */
/* harmony import */ var _index_a007a589_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11770);
/* harmony import */ var _a11y_tipps_1cea9822_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(60090);
/*!
 * KoliBri - The accessible HTML-Standard
 */
const locale_de={error:"Fehler",warning:"Warnung",info:"Hinweis",success:"Erfolg",message:"Nachricht",close:"Schließen","form-description":"Formular-Felder, die mit einem Sternchen (*) gekennzeichnet sind, sind Pflichtangaben.",of:"von",characters:"Zeichen",new:"Neu","no-entries":"Es sind keine Einträge vorhanden.","change-order":"Sortierung von {{colLabel}} ändern","action-running":"Aktion wird ausgeführt...","action-done":"Aktion abgeschlossen","page-first":"Direkt zur ersten Seite","page-back":"Eine Seite zurück","page-next":"Eine Seite weiter","page-last":"Direkt zur letzten Seite","entries-per-site":"Einträge pro Seite","page-current":"Seite {{page}}","page-selected":"Seite {{page}} ist ausgewählt","page-per-site":"{{entries}} Einträge pro Seite","nav-maximize":"Navigation maximieren","nav-minimize":"Navigation minimieren","logo-description":"Logo {{orgShort}}. Bundesadler mit Flaggenstab und Schriftzug {{orgLong}}","open-link-in-tab":"Der Link wird in einem neuen Tab geöffnet.","kolibri-logo":"Logo von KoliBri"},locale_en={error:"Error",warning:"Warning",info:"Note",success:"Success",message:"Message",close:"Close","form-description":"Form fields marked with an asterisk (*) are mandatory.",of:"of",characters:"characters",new:"New","no-entries":"No entries available.","change-order":"Change order of {{colLabel}}","action-running":"Action is running...","action-done":"Action done","page-first":"Directly to the first page","page-back":"One page back","page-next":"One page further","page-last":"Directly to the last page","entries-per-site":"Entries per page","page-current":"Page {{page}}","page-selected":"Page {{page}} is selected","page-per-site":"{{entries}} entries per page","nav-maximize":"Maximize","nav-minimize":"Minimize","logo-description":"Logo {{orgShort}}. Federal eagle with flag staff and lettering {{orgLong}}","open-link-in-tab":"The link will open in a new tab.","kolibri-logo":"KoliBri logo"},mapLocaleKeys=e=>Object.keys(e).reduce(((n,i)=>(n[`kol-${i}`]=e[i],n)),{}),translations=new Set([e=>e("en",mapLocaleKeys(locale_en)),e=>e("de",mapLocaleKeys(locale_de))]),translate=(e,n)=>{const i=(0,_index_a007a589_js__WEBPACK_IMPORTED_MODULE_0__.g)();if(void 0===i)return (0,_a11y_tipps_1cea9822_js__WEBPACK_IMPORTED_MODULE_1__.d)("[I18n] I18nService not available! Please call the global register function."),e;let a=i.translate(e,n);return a===e&&((0,_a11y_tipps_1cea9822_js__WEBPACK_IMPORTED_MODULE_1__.d)("[I18n] Locales not initialized! Initialize default locales automatically."),translations.forEach((e=>e(((e,n)=>(i.addResourceBundle(e,n),e))))),a=i.translate(e,n)),a};

/***/ }),

/***/ 6048:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "kol_pagination": () => (/* binding */ KolPagination)
/* harmony export */ });
/* harmony import */ var _index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(21622);
/* harmony import */ var _button_link_0f3cba87_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(97449);
/* harmony import */ var _dev_utils_157f0499_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10191);
/* harmony import */ var _prop_validators_e402ad49_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(85982);
/* harmony import */ var _controller_0b0c0e12_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(50890);
/* harmony import */ var _reuse_3a02afb9_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(33147);
/* harmony import */ var _i18n_c97dc260_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(30266);
/*!
 * KoliBri - The accessible HTML-Standard
 */
const defaultStyleCss=":host{--a11y-min-size:44px}*{hyphens:auto;letter-spacing:inherit;word-break:break-word;word-spacing:inherit}[role='button'],button:not([role='link']),kol-input .input{min-height:var(--a11y-min-size);min-width:var(--a11y-min-size)}a,button,h1,h2,h3,h4,h5,h6,input,option,select,textarea{font-family:inherit}:is(a,button){background-color:transparent;border:none;margin:0;padding:0;width:100%;}:host{max-width:100%}*{box-sizing:border-box}kol-span-wc{display:grid;place-items:center}kol-span-wc>span{display:flex;place-items:center}a,button{cursor:pointer}a,button,input,option,select,textarea{font-family:inherit}.icon-only>kol-span-wc>span>span{display:none}",leftDoubleArrowIcon={left:"codicon codicon-debug-reverse-continue"},leftSingleArrow={left:"codicon codicon-chevron-left"},rightSingleArrowIcon={right:"codicon codicon-chevron-right"},rightDoubleArrowIcon={right:"codicon codicon-debug-continue"},KolPagination=class{constructor(t){(0,_index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,t),this.nonce=(0,_dev_utils_157f0499_js__WEBPACK_IMPORTED_MODULE_1__.n)(),this.calcCount=(t,a=1)=>Math.ceil(t/a),this.getCount=()=>this.calcCount(this.state._total,this.state._pageSize),this.onClick=(t,a)=>{"function"==typeof this.state._on.onClick&&this.state._on.onClick(t,a),this.onChangePage(t,a)},this.onChangePage=(t,a)=>{const e=setTimeout((()=>{clearTimeout(e),"function"==typeof this.state._on.onChangePage&&this.state._on.onChangePage(t,a)}))},this.onChangePageSize=(t,a)=>{if("number"==typeof(a=parseInt(a[0]))&&a>0&&this._pageSize!==a){this._pageSize=a;const e=setTimeout((()=>{clearTimeout(e),"function"==typeof this.state._on.onChangePageSize&&this.state._on.onChangePageSize(t,this._pageSize)}))}},this.onGoToFirst={onClick:t=>{this.onClick(t,1)}},this.onGoToEnd={onClick:t=>{this.onClick(t,this.getCount())}},this.onGoBackward={onClick:t=>{this.onClick(t,this.state._page-1)}},this.onGoForward={onClick:t=>{this.onClick(t,this.state._page+1)}},this.beforePageSize=(t,a)=>{let e=a.has("_pageSize")?a.get("_pageSize"):this.state._pageSize;const i=a.has("_pageSizeOptions")?a.get("_pageSizeOptions"):this.state._pageSizeOptions;if(Array.isArray(i)&&i.length>0){const t=i.find((t=>t.value===e));e=void 0===t?i[0].value:t.value,a.set("_pageSize",e)}const s=a.has("_page")?a.get("_page"):this.state._page,o=a.has("_total")?a.get("_total"):this.state._total;this.syncPage(a,s,a.get("_pageSize"),o)},this.syncPage=(t,a,e,i)=>{if(i>0){const s=this.calcCount(i,e);s>0&&(a>s?(t.set("_page",s),this.onChangePage(_reuse_3a02afb9_js__WEBPACK_IMPORTED_MODULE_2__.S,s)):a<1&&(t.set("_page",1),this.onChangePage(_reuse_3a02afb9_js__WEBPACK_IMPORTED_MODULE_2__.S,1)))}},this.beforePageSizeOptions=(t,a)=>{const e=[];if(Array.isArray(t))for(const a of t)"number"==typeof a&&e.push({label:(0,_i18n_c97dc260_js__WEBPACK_IMPORTED_MODULE_3__.a)("kol-page-per-site",{placeholders:{entries:`${a}`}}),value:a});a.set("_pageSizeOptions",e),this.beforePageSize(e,a)},this._boundaryCount=1,this._customClass=void 0,this._hasButtons=!0,this._page=void 0,this._pageSize=1,this._pageSizeOptions=[],this._on=void 0,this._siblingCount=1,this._tooltipAlign="top",this._total=void 0,this._variant="normal",this.state={_boundaryCount:1,_hasButtons:{first:!0,last:!0,next:!0,previous:!0},_on:{onClick:()=>null},_page:0,_pageSize:1,_pageSizeOptions:[],_siblingCount:1,_total:0,_variant:"normal"}}render(){var t;let a=!1;const e=this.getCount(),i=Array.from(Array(e).keys()).map((t=>t+1)).map((t=>t<=this.state._boundaryCount||t>e-this.state._boundaryCount||t>=this.state._page-this.state._siblingCount&&t<=this.state._page+this.state._siblingCount?(a=!0,this.state._page===t?this.getSelectedPageButton(t):this.getUnselectedPageButton(t)):!0===a?(a=!1,(0,_index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_0__.h)("span",{key:`${this.nonce}-el-${t}`},"•••")):null));return (0,_index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_0__.H,null,(0,_index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",null,this.state._hasButtons.first&&(0,_index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_0__.h)("kol-button",{_customClass:this.state._customClass,_disabled:this.state._page<=1,_icon:leftDoubleArrowIcon,_iconOnly:!0,_label:(0,_i18n_c97dc260_js__WEBPACK_IMPORTED_MODULE_3__.a)("kol-page-first"),_on:this.onGoToFirst,_variant:this.state._variant,_tooltipAlign:this.state._tooltipAlign}),this.state._hasButtons.previous&&(0,_index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_0__.h)("kol-button",{_customClass:this.state._customClass,_disabled:this.state._page<=1,_icon:leftSingleArrow,_iconOnly:!0,_label:(0,_i18n_c97dc260_js__WEBPACK_IMPORTED_MODULE_3__.a)("kol-page-back"),_on:this.onGoBackward,_variant:this.state._variant,_tooltipAlign:this.state._tooltipAlign}),i,this.state._hasButtons.next&&(0,_index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_0__.h)("kol-button",{_customClass:this.state._customClass,_disabled:e<=this.state._page,_icon:rightSingleArrowIcon,_iconOnly:!0,_label:(0,_i18n_c97dc260_js__WEBPACK_IMPORTED_MODULE_3__.a)("kol-page-next"),_on:this.onGoForward,_variant:this.state._variant,_tooltipAlign:this.state._tooltipAlign}),this.state._hasButtons.last&&(0,_index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_0__.h)("kol-button",{_customClass:this.state._customClass,_disabled:e<=this.state._page,_icon:rightDoubleArrowIcon,_iconOnly:!0,_label:(0,_i18n_c97dc260_js__WEBPACK_IMPORTED_MODULE_3__.a)("kol-page-last"),_on:this.onGoToEnd,_variant:this.state._variant,_tooltipAlign:this.state._tooltipAlign})),(null===(t=this.state._pageSizeOptions)||void 0===t?void 0:t.length)>0&&(0,_index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_0__.h)("kol-select",{_hideLabel:!0,_id:"pagination-size",_list:this.state._pageSizeOptions,_on:{onChange:this.onChangePageSize},_value:[this.state._pageSize]},(0,_i18n_c97dc260_js__WEBPACK_IMPORTED_MODULE_3__.a)("kol-entries-per-site")))}getUnselectedPageButton(t){return (0,_index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_0__.h)("kol-button",{key:`${this.nonce}-${t}`,_customClass:this.state._customClass,_ariaLabel:(0,_i18n_c97dc260_js__WEBPACK_IMPORTED_MODULE_3__.a)("kol-page-current",{placeholders:{page:t.toFixed(0)}}),_label:`${t}`,_on:{onClick:a=>{this.onClick(a,t)}},_variant:this.state._variant})}getSelectedPageButton(t){return (0,_index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_0__.h)("kol-button-wc",{class:"selected",key:`${this.nonce}-selected`,_customClass:this.state._customClass,_disabled:!0,_ariaCurrent:!0,_ariaLabel:(0,_i18n_c97dc260_js__WEBPACK_IMPORTED_MODULE_3__.a)("kol-page-selected",{placeholders:{page:t.toFixed(0)}}),_label:`${t}`,_variant:this.state._variant})}validateBoundaryCount(t){(0,_prop_validators_e402ad49_js__WEBPACK_IMPORTED_MODULE_4__.e)(this,"_boundaryCount",Math.max(0,null!=t?t:1))}validateCustomClass(t){(0,_prop_validators_e402ad49_js__WEBPACK_IMPORTED_MODULE_4__.w)(this,"_customClass",t,{defaultValue:void 0})}validateHasButtons(t){(0,_prop_validators_e402ad49_js__WEBPACK_IMPORTED_MODULE_4__.a)(this,"_hasButtons",(t=>"boolean"==typeof t||"string"==typeof t||"object"==typeof t&&null!==t),new Set(["Boolean","PaginationHasButton"]),t,{hooks:{beforePatch:(t,a)=>{if("boolean"==typeof t)a.set("_hasButtons",{first:t,last:t,next:t,previous:t});else{if("string"==typeof t)try{t=(0,_prop_validators_e402ad49_js__WEBPACK_IMPORTED_MODULE_4__.p)(t)}catch(t){a.delete("_hasButtons")}"object"==typeof t&&null!==t&&a.set("_hasButtons",Object.assign(Object.assign({},this.state._hasButtons),{first:"boolean"==typeof t.first?!0===t.first:this.state._hasButtons.first,last:"boolean"==typeof t.last?!0===t.last:this.state._hasButtons.last,next:"boolean"==typeof t.next?!0===t.next:this.state._hasButtons.next,previous:"boolean"==typeof t.previous?!0===t.previous:this.state._hasButtons.previous}))}}}})}validateOn(t){"object"==typeof t&&null!==t&&(this.state=Object.assign(Object.assign({},this.state),{_on:t}))}validatePage(t){(0,_prop_validators_e402ad49_js__WEBPACK_IMPORTED_MODULE_4__.e)(this,"_page",t,{hooks:{beforePatch:(t,a)=>{const e=a.has("_pageSize")?a.get("_pageSize"):this.state._pageSize,i=a.has("_total")?a.get("_total"):this.state._total;this.syncPage(a,t,e,i)}}})}validatePageSize(t){(0,_prop_validators_e402ad49_js__WEBPACK_IMPORTED_MODULE_4__.e)(this,"_pageSize",t,{hooks:{beforePatch:this.beforePageSize}})}validatePageSizeOptions(t){(0,_prop_validators_e402ad49_js__WEBPACK_IMPORTED_MODULE_4__.d)(this,"_pageSizeOptions",(t=>"number"==typeof t),t,void 0,{hooks:{beforePatch:this.beforePageSizeOptions}})}validateSiblingCount(t){(0,_prop_validators_e402ad49_js__WEBPACK_IMPORTED_MODULE_4__.e)(this,"_siblingCount",Math.max(0,null!=t?t:1))}validateTotal(t){(0,_prop_validators_e402ad49_js__WEBPACK_IMPORTED_MODULE_4__.e)(this,"_total",t,{hooks:{beforePatch:(t,a)=>{const e=a.has("_page")?a.get("_page"):this.state._page,i=a.has("_pageSize")?a.get("_pageSize"):this.state._pageSize;this.syncPage(a,e,i,t)}}})}validateTooltipAlign(t){(0,_button_link_0f3cba87_js__WEBPACK_IMPORTED_MODULE_5__.w)(this,"_tooltipAlign",t)}validateVariant(t){(0,_controller_0b0c0e12_js__WEBPACK_IMPORTED_MODULE_6__.w)(this,"_variant",t)}componentWillLoad(){this.validateBoundaryCount(this._boundaryCount),this.validateCustomClass(this._customClass),this.validateHasButtons(this._hasButtons),this.validateOn(this._on),this.validatePage(this._page),this.validatePageSize(this._pageSize),this.validatePageSizeOptions(this._pageSizeOptions),this.validateSiblingCount(this._siblingCount),this.validateTooltipAlign(this._tooltipAlign),this.validateTotal(this._total),this.validateVariant(this._variant),this.validatePage(this._page)}static get watchers(){return{_boundaryCount:["validateBoundaryCount"],_customClass:["validateCustomClass"],_hasButtons:["validateHasButtons"],_on:["validateOn"],_page:["validatePage"],_pageSize:["validatePageSize"],_pageSizeOptions:["validatePageSizeOptions"],_siblingCount:["validateSiblingCount"],_total:["validateTotal"],_tooltipAlign:["validateTooltipAlign"],_variant:["validateVariant"]}}};KolPagination.style={default:defaultStyleCss};

/***/ })

};
;