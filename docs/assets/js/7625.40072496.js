"use strict";
exports.id = 7625;
exports.ids = [7625];
exports.modules = {

/***/ 97625:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "kol_toast": () => (/* binding */ KolToast)
/* harmony export */ });
/* harmony import */ var _index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(55640);
/* harmony import */ var _prop_validators_88dff60e_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(39895);
/* harmony import */ var _validation_63fb9e79_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(86192);
/* harmony import */ var _a11y_tipps_353a7f35_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(16105);
/*!
 * KoliBri - The accessible HTML-Standard
 */
const defaultStyleCss=":host{--kolibri-border-color:#e0e0e0;--kolibri-border-radius:0.125rem;--kolibri-border-width:1px;--kolibri-color-error:#f44336;--kolibri-color-info:#2196f3;--kolibri-color-success:#4caf50;--kolibri-color-warning:#ff9800;--kolibri-color-primary:#3f51b5;--kolibri-color-secondary:#ff4081;--kolibri-color-normal:#9e9e9e;--kolibri-color-danger:#f44336;--kolibri-color-ghost:#f5f5f5;--kolibri-color-disabled:#bdbdbd;--kolibri-color-text:#222222;--kolibri-color-visited:#9c27b0;--kolibri-font-family:Verdana, Arial, Tahoma, Helvetica, sans-serif;--kolibri-font-size:16px;--kolibri-spacing:0.25rem}*{hyphens:auto;letter-spacing:inherit;word-break:break-word;word-spacing:inherit}*{box-sizing:border-box;font-family:var(--kolibri-font-family)}kol-icon{color:inherit}kol-span-wc{display:grid;place-items:center;width:100%}kol-span-wc>span{display:flex;gap:var(--kolibri-spacing);place-items:center}a,button,input,select,textarea{cursor:pointer}a.icon-only>kol-span-wc>span>span,button.icon-only>kol-span-wc>span>span{display:none}a{display:inline-flex;place-items:baseline}button{background-color:transparent;border-width:0}h1,h2,h3,h4,h5,h6{font-size:1rem;margin:0}:host>div{position:fixed;top:0;left:0;width:100%;height:0;z-index:200}:host>div>kol-alert{display:block;margin:auto;padding:calc(4 * var(--kolibri-spacing));max-width:750px}:host>div>kol-button-wc{top:0;position:relative;display:block;margin:auto;width:1em}",KolToast=class{constructor(t){(0,_index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,t),this.handleShowAndDuration=()=>{!0===this.state._show&&"number"==typeof this.state._showDuration&&this.state._showDuration>=0&&(clearTimeout(this.durationTimeout),this.durationTimeout=setTimeout((()=>{clearTimeout(this.durationTimeout),this.close()}),this.state._showDuration))},this.close=()=>{var t;this._show=!1,this.state=Object.assign(Object.assign({},this.state),{_show:!1}),void 0!==(null===(t=this._on)||void 0===t?void 0:t.onClose)&&this._on.onClose(new Event("Close"))},this.on={onClose:this.close},this._alert=!0,this._hasCloser=!1,this._heading="",this._level=1,this._on=void 0,this._show=!0,this._showDuration=1e4,this._type="default",this.state={_alert:!0,_level:1,_show:!0}}validateAlert(t){(0,_prop_validators_88dff60e_js__WEBPACK_IMPORTED_MODULE_1__.b)(this,"_alert",t)}validateHasCloser(t){(0,_prop_validators_88dff60e_js__WEBPACK_IMPORTED_MODULE_1__.b)(this,"_hasCloser",t)}validateHeading(t){(0,_prop_validators_88dff60e_js__WEBPACK_IMPORTED_MODULE_1__.w)(this,"_heading",t)}validateLevel(t){(0,_validation_63fb9e79_js__WEBPACK_IMPORTED_MODULE_2__.w)(this,t)}validateOn(t){if("object"==typeof t&&null!==t){(0,_a11y_tipps_353a7f35_js__WEBPACK_IMPORTED_MODULE_3__.f)("[KolToast] Prüfen, wie man auch einen EventCallback einzeln ändern kann.");const i={};"function"!=typeof t.onClose&&!0!==t.onClose||(i.onClose=t.onClose),(0,_prop_validators_88dff60e_js__WEBPACK_IMPORTED_MODULE_1__.s)(this,"_on",i)}}validateShow(t){(0,_prop_validators_88dff60e_js__WEBPACK_IMPORTED_MODULE_1__.b)(this,"_show",t,{hooks:{afterPatch:this.handleShowAndDuration}})}validateShowDuration(t){(0,_prop_validators_88dff60e_js__WEBPACK_IMPORTED_MODULE_1__.e)(this,"_showDuration",t,{hooks:{afterPatch:this.handleShowAndDuration}})}validateType(t){(0,_prop_validators_88dff60e_js__WEBPACK_IMPORTED_MODULE_1__.a)(this,"_type",(t=>"string"==typeof t&&("default"===t||"error"===t||"info"===t||"success"===t||"warning"===t)),new Set("String {success, info, warning, error}"),t)}componentWillLoad(){this.validateAlert(this._alert),this.validateHasCloser(this._hasCloser),this.validateHeading(this._heading),this.validateLevel(this._level),this.validateOn(this._on),this.validateShow(this._show),this.validateShowDuration(this._showDuration),this.validateType(this._type)}render(){return (0,_index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_0__.H,null,this.state._show&&(0,_index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",null,(0,_index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_0__.h)("kol-alert",{_alert:this.state._alert,_heading:this.state._heading,_level:this.state._level,_hasCloser:this.state._hasCloser,_type:this.state._type,_variant:"card",_on:this.on},(0,_index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",null))))}static get watchers(){return{_alert:["validateAlert"],_hasCloser:["validateHasCloser"],_heading:["validateHeading"],_level:["validateLevel"],_on:["validateOn"],_show:["validateShow"],_showDuration:["validateShowDuration"],_type:["validateType"]}}};KolToast.style={default:defaultStyleCss};

/***/ }),

/***/ 86192:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "w": () => (/* binding */ watchHeadingLevel)
/* harmony export */ });
/* harmony import */ var _prop_validators_88dff60e_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(39895);
/*!
 * KoliBri - The accessible HTML-Standard
 */
const watchHeadingLevel=(e,a)=>{(0,_prop_validators_88dff60e_js__WEBPACK_IMPORTED_MODULE_0__.a)(e,"_level",(e=>"number"==typeof e&&1<=e&&e<=6),new Set(["Number {1, 2, 3, 4, 5, 6}"]),a,{defaultValue:1,required:!0})};

/***/ })

};
;