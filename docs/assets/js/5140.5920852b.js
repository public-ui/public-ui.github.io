"use strict";
exports.id = 5140;
exports.ids = [5140];
exports.modules = {

/***/ 30690:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": () => (/* binding */ translate)
/* harmony export */ });
/* unused harmony export t */
/* harmony import */ var _index_a007a589_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(43225);
/* harmony import */ var _a11y_tipps_1cea9822_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(55037);
/*!
 * KoliBri - The accessible HTML-Standard
 */
const locale_de={error:"Fehler",warning:"Warnung",info:"Hinweis",success:"Erfolg",message:"Nachricht",close:"Schließen","form-description":"Formular-Felder, die mit einem Sternchen (*) gekennzeichnet sind, sind Pflichtangaben.",of:"von",characters:"Zeichen",new:"Neu","no-entries":"Es sind keine Einträge vorhanden.","change-order":"Sortierung von {{colLabel}} ändern","action-running":"Aktion wird ausgeführt...","action-done":"Aktion abgeschlossen","page-first":"Direkt zur ersten Seite","page-back":"Eine Seite zurück","page-next":"Eine Seite weiter","page-last":"Direkt zur letzten Seite","entries-per-site":"Einträge pro Seite","page-current":"Seite {{page}}","page-selected":"Seite {{page}} ist ausgewählt","page-per-site":"{{entries}} Einträge pro Seite","nav-maximize":"Navigation maximieren","nav-minimize":"Navigation minimieren","logo-description":"Logo {{orgShort}}. Bundesadler mit Flaggenstab und Schriftzug {{orgLong}}","open-link-in-tab":"Der Link wird in einem neuen Tab geöffnet.","kolibri-logo":"Logo von KoliBri"},locale_en={error:"Error",warning:"Warning",info:"Note",success:"Success",message:"Message",close:"Close","form-description":"Form fields marked with an asterisk (*) are mandatory.",of:"of",characters:"characters",new:"New","no-entries":"No entries available.","change-order":"Change order of {{colLabel}}","action-running":"Action is running...","action-done":"Action done","page-first":"Directly to the first page","page-back":"One page back","page-next":"One page further","page-last":"Directly to the last page","entries-per-site":"Entries per page","page-current":"Page {{page}}","page-selected":"Page {{page}} is selected","page-per-site":"{{entries}} entries per page","nav-maximize":"Maximize","nav-minimize":"Minimize","logo-description":"Logo {{orgShort}}. Federal eagle with flag staff and lettering {{orgLong}}","open-link-in-tab":"The link will open in a new tab.","kolibri-logo":"KoliBri logo"},mapLocaleKeys=e=>Object.keys(e).reduce(((n,i)=>(n[`kol-${i}`]=e[i],n)),{}),translations=new Set([e=>e("en",mapLocaleKeys(locale_en)),e=>e("de",mapLocaleKeys(locale_de))]),translate=(e,n)=>{const i=(0,_index_a007a589_js__WEBPACK_IMPORTED_MODULE_0__.g)();if(void 0===i)return (0,_a11y_tipps_1cea9822_js__WEBPACK_IMPORTED_MODULE_1__.d)("[I18n] I18nService not available! Please call the global register function."),e;let a=i.translate(e,n);return a===e&&((0,_a11y_tipps_1cea9822_js__WEBPACK_IMPORTED_MODULE_1__.d)("[I18n] Locales not initialized! Initialize default locales automatically."),translations.forEach((e=>e(((e,n)=>(i.addResourceBundle(e,n),e))))),a=i.translate(e,n)),a};

/***/ }),

/***/ 15140:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "kol_alert": () => (/* binding */ KolAlert)
/* harmony export */ });
/* harmony import */ var _index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7793);
/* harmony import */ var _prop_validators_e402ad49_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(37746);
/* harmony import */ var _validation_a42d9cc9_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(99340);
/* harmony import */ var _i18n_c97dc260_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(30690);
/* harmony import */ var _dev_utils_157f0499_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(89736);
/*!
 * KoliBri - The accessible HTML-Standard
 */
const defaultStyleCss=":host{--a11y-min-size:44px}*{hyphens:auto;letter-spacing:inherit;word-break:break-word;word-spacing:inherit}*[role='button'],button:not([role='link']){min-height:var(--a11y-min-size);min-width:var(--a11y-min-size)}a,button,h1,h2,h3,h4,h5,h6,input,option,select,textarea{font-family:inherit}:is(a,button){background-color:transparent;border:none;margin:0;padding:0;width:100%;}:host{max-width:100%}*{box-sizing:border-box}kol-span-wc{display:grid;place-items:center}kol-span-wc>span{display:flex;place-items:center}a,button{cursor:pointer}a,button,input,option,select,textarea{font-family:inherit}.icon-only>kol-span-wc>span>span{display:none}:host{display:block}:host>div{display:grid;place-items:stretch}.heading{display:grid;grid-template-columns:auto 1fr auto;place-items:center}.heading>div{display:grid;justify-self:start}",Icon=t=>(0,_index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_0__.h)("kol-icon",{class:"heading-icon",_ariaLabel:"string"==typeof t.heading&&t.heading.length>0?"":t.ariaLabel,_icon:t.icon}),AlertIcon=t=>{switch(t.type){case"error":return (0,_index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_0__.h)(Icon,{ariaLabel:(0,_i18n_c97dc260_js__WEBPACK_IMPORTED_MODULE_1__.a)("kol-error"),icon:"codicon codicon-error",heading:t.heading});case"info":return (0,_index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_0__.h)(Icon,{ariaLabel:(0,_i18n_c97dc260_js__WEBPACK_IMPORTED_MODULE_1__.a)("kol-info"),icon:"codicon codicon-info",heading:t.heading});case"warning":return (0,_index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_0__.h)(Icon,{ariaLabel:(0,_i18n_c97dc260_js__WEBPACK_IMPORTED_MODULE_1__.a)("kol-warning"),icon:"codicon codicon-warning",heading:t.heading});case"success":return (0,_index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_0__.h)(Icon,{ariaLabel:(0,_i18n_c97dc260_js__WEBPACK_IMPORTED_MODULE_1__.a)("kol-success"),icon:"codicon codicon-pass",heading:t.heading});default:return (0,_index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_0__.h)(Icon,{ariaLabel:(0,_i18n_c97dc260_js__WEBPACK_IMPORTED_MODULE_1__.a)("kol-message"),icon:"codicon codicon-comment",heading:t.heading})}},KolAlert=class{constructor(t){(0,_index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,t),this.close=()=>{var t;void 0!==(null===(t=this._on)||void 0===t?void 0:t.onClose)&&this._on.onClose(new Event("Close"))},this.on={onClick:this.close},this.validateOnValue=t=>"object"==typeof t&&null!==t&&"function"==typeof t.onClose,this._alert=!1,this._hasCloser=!1,this._heading=void 0,this._level=1,this._on=void 0,this._type="default",this._variant="msg",this.state={_level:1}}render(){var t;if(this.state._alert){try{_dev_utils_157f0499_js__WEBPACK_IMPORTED_MODULE_2__.L.debug(["Navigator should vibrate ...",navigator.vibrate([100,75,100,75,100])])}catch(t){_dev_utils_157f0499_js__WEBPACK_IMPORTED_MODULE_2__.L.debug("Navigator does not support vibration.")}setTimeout((()=>{this.validateAlert(!1)}),1e4)}return (0,_index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_0__.H,null,(0,_index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:{[this.state._type]:!0,[this.state._variant]:!0},role:this.state._alert?"alert":void 0},(0,_index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"heading"},(0,_index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_0__.h)(AlertIcon,{heading:this.state._heading,type:this.state._type}),(0,_index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",null,"string"==typeof this.state._heading&&(null===(t=this.state._heading)||void 0===t?void 0:t.length)>0&&(0,_index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_0__.h)("kol-heading-wc",{_headline:this.state._heading,_level:this.state._level}),"msg"===this._variant&&(0,_index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"content"},(0,_index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",null))),this.state._hasCloser&&(0,_index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_0__.h)("kol-button-wc",{class:"close",_icon:{left:{icon:"codicon codicon-close"}},_iconOnly:!0,_label:(0,_i18n_c97dc260_js__WEBPACK_IMPORTED_MODULE_1__.a)("kol-close"),_on:this.on,_tooltipAlign:"left"})),"card"===this._variant&&(0,_index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"content"},(0,_index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",null))))}validateAlert(t){(0,_prop_validators_e402ad49_js__WEBPACK_IMPORTED_MODULE_3__.b)(this,"_alert",t)}validateHasCloser(t){(0,_prop_validators_e402ad49_js__WEBPACK_IMPORTED_MODULE_3__.b)(this,"_hasCloser",t)}validateHeading(t){(0,_prop_validators_e402ad49_js__WEBPACK_IMPORTED_MODULE_3__.w)(this,"_heading",t)}validateLevel(t){(0,_validation_a42d9cc9_js__WEBPACK_IMPORTED_MODULE_4__.w)(this,t)}validateOn(t){this.validateOnValue(t)&&(0,_prop_validators_e402ad49_js__WEBPACK_IMPORTED_MODULE_3__.s)(this,"_on",{onClose:t.onClose})}validateType(t){(0,_prop_validators_e402ad49_js__WEBPACK_IMPORTED_MODULE_3__.a)(this,"_type",(t=>"string"==typeof t&&("default"===t||"error"===t||"info"===t||"success"===t||"warning"===t)),new Set("String {success, info, warning, error}"),t)}validateVariant(t){(0,_prop_validators_e402ad49_js__WEBPACK_IMPORTED_MODULE_3__.a)(this,"_variant",(t=>"card"===t||"msg"===t),new Set("AlertVariant {card, msg}"),t)}componentWillLoad(){this.validateAlert(this._alert),this.validateHasCloser(this._hasCloser),this.validateHeading(this._heading),this.validateLevel(this._level),this.validateOn(this._on),this.validateType(this._type),this.validateVariant(this._variant)}static get watchers(){return{_alert:["validateAlert"],_hasCloser:["validateHasCloser"],_heading:["validateHeading"],_level:["validateLevel"],_on:["validateOn"],_type:["validateType"],_variant:["validateVariant"]}}};KolAlert.style={default:defaultStyleCss};

/***/ }),

/***/ 99340:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "w": () => (/* binding */ watchHeadingLevel)
/* harmony export */ });
/* harmony import */ var _prop_validators_e402ad49_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(37746);
/*!
 * KoliBri - The accessible HTML-Standard
 */
const watchHeadingLevel=(e,a)=>{(0,_prop_validators_e402ad49_js__WEBPACK_IMPORTED_MODULE_0__.a)(e,"_level",(e=>"number"==typeof e&&0<=e&&e<=6),new Set(["Number {0, 1, 2, 3, 4, 5, 6}"]),a,{defaultValue:1,required:!0})};

/***/ })

};
;