"use strict";
exports.id = 21;
exports.ids = [21];
exports.modules = {

/***/ 21:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "kol_toast": () => (/* binding */ KolToast)
/* harmony export */ });
/* harmony import */ var _index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(51642);
/* harmony import */ var _prop_validators_1f3db013_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(754);
/* harmony import */ var _validation_b0614edd_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(90877);
/* harmony import */ var _a11y_tipps_5ca36877_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(36840);
/*!
 * KoliBri - The accessible HTML-Standard
 */
const defaultStyleCss=":host{--a11y-min-size:44px}*{hyphens:auto;letter-spacing:inherit;word-break:break-word;word-spacing:inherit}*[role='button'],button:not([role='link']),input[type='color'],input[type='date'],input[type='datetime-local'],input[type='email'],input[type='file'],input[type='month'],input[type='number'],input[type='password'],input[type='search'],input[type='tel'],input[type='text'],input[type='time'],input[type='url'],input[type='week'],option,select,textarea{min-height:var(--a11y-min-size);min-width:var(--a11y-min-size)}:is(a,button){background-color:transparent;border:none;margin:0;padding:0;width:100%;}:host{max-width:100%}*{box-sizing:border-box}kol-span-wc{display:grid;place-items:center}kol-span-wc>span{display:flex;place-items:center}a,button,input[type='checkbox'],input[type='color'],input[type='file'],input[type='radio'],option,select{cursor:pointer;font-family:inherit;font-size:inherit}.icon-only>kol-span-wc>span>span{display:none}:host{display:block}:host>div{background-color:white;height:0;left:0;position:fixed;top:0;width:100%;z-index:200}:host>div>kol-alert{display:block;margin:auto;max-width:750px}:host>div>kol-button-wc{display:block;margin:auto;position:relative;top:0;width:1em}",KolToast=class{constructor(t){(0,_index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,t),this.handleShowAndDuration=()=>{!0===this.state._show&&"number"==typeof this.state._showDuration&&this.state._showDuration>=0&&(clearTimeout(this.durationTimeout),this.durationTimeout=setTimeout((()=>{clearTimeout(this.durationTimeout),this.close()}),this.state._showDuration))},this.close=()=>{var t;this._show=!1,this.state=Object.assign(Object.assign({},this.state),{_show:!1}),void 0!==(null===(t=this._on)||void 0===t?void 0:t.onClose)&&this._on.onClose(new Event("Close"))},this.on={onClose:this.close},this._alert=!0,this._hasCloser=!1,this._heading="",this._level=1,this._on=void 0,this._show=!0,this._showDuration=1e4,this._type="default",this.state={_alert:!0,_level:1,_show:!0}}validateAlert(t){(0,_prop_validators_1f3db013_js__WEBPACK_IMPORTED_MODULE_1__.b)(this,"_alert",t)}validateHasCloser(t){(0,_prop_validators_1f3db013_js__WEBPACK_IMPORTED_MODULE_1__.b)(this,"_hasCloser",t)}validateHeading(t){(0,_prop_validators_1f3db013_js__WEBPACK_IMPORTED_MODULE_1__.w)(this,"_heading",t)}validateLevel(t){(0,_validation_b0614edd_js__WEBPACK_IMPORTED_MODULE_2__.w)(this,t)}validateOn(t){if("object"==typeof t&&null!==t){(0,_a11y_tipps_5ca36877_js__WEBPACK_IMPORTED_MODULE_3__.f)("[KolToast] Prüfen, wie man auch einen EventCallback einzeln ändern kann.");const e={};"function"!=typeof t.onClose&&!0!==t.onClose||(e.onClose=t.onClose),(0,_prop_validators_1f3db013_js__WEBPACK_IMPORTED_MODULE_1__.s)(this,"_on",e)}}validateShow(t){(0,_prop_validators_1f3db013_js__WEBPACK_IMPORTED_MODULE_1__.b)(this,"_show",t,{hooks:{afterPatch:this.handleShowAndDuration}})}validateShowDuration(t){(0,_prop_validators_1f3db013_js__WEBPACK_IMPORTED_MODULE_1__.e)(this,"_showDuration",t,{hooks:{afterPatch:this.handleShowAndDuration}})}validateType(t){(0,_prop_validators_1f3db013_js__WEBPACK_IMPORTED_MODULE_1__.a)(this,"_type",(t=>"string"==typeof t&&("default"===t||"error"===t||"info"===t||"success"===t||"warning"===t)),new Set("String {success, info, warning, error}"),t)}componentWillLoad(){this.validateAlert(this._alert),this.validateHasCloser(this._hasCloser),this.validateHeading(this._heading),this.validateLevel(this._level),this.validateOn(this._on),this.validateShow(this._show),this.validateShowDuration(this._showDuration),this.validateType(this._type)}render(){return (0,_index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_0__.H,null,this.state._show&&(0,_index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",null,(0,_index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_0__.h)("kol-alert",{_alert:this.state._alert,_heading:this.state._heading,_level:this.state._level,_hasCloser:this.state._hasCloser,_type:this.state._type,_variant:"card",_on:this.on},(0,_index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",null))))}static get watchers(){return{_alert:["validateAlert"],_hasCloser:["validateHasCloser"],_heading:["validateHeading"],_level:["validateLevel"],_on:["validateOn"],_show:["validateShow"],_showDuration:["validateShowDuration"],_type:["validateType"]}}};KolToast.style={default:defaultStyleCss};

/***/ }),

/***/ 90877:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "w": () => (/* binding */ watchHeadingLevel)
/* harmony export */ });
/* harmony import */ var _prop_validators_1f3db013_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(754);
/*!
 * KoliBri - The accessible HTML-Standard
 */
const watchHeadingLevel=(e,a)=>{(0,_prop_validators_1f3db013_js__WEBPACK_IMPORTED_MODULE_0__.a)(e,"_level",(e=>"number"==typeof e&&1<=e&&e<=6),new Set(["Number {1, 2, 3, 4, 5, 6}"]),a,{defaultValue:1,required:!0})};

/***/ })

};
;