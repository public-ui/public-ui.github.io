"use strict";
exports.id = 8582;
exports.ids = [8582];
exports.modules = {

/***/ 38582:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "kol_card": () => (/* binding */ KolCard)
/* harmony export */ });
/* harmony import */ var _index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(55640);
/* harmony import */ var _prop_validators_88dff60e_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(39895);
/* harmony import */ var _validation_63fb9e79_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(86192);
/*!
 * KoliBri - The accessible HTML-Standard
 */
const defaultStyleCss=":host{--kolibri-border-color:#e0e0e0;--kolibri-border-radius:0.125rem;--kolibri-border-width:1px;--kolibri-color-error:#f44336;--kolibri-color-info:#2196f3;--kolibri-color-success:#4caf50;--kolibri-color-warning:#ff9800;--kolibri-color-primary:#3f51b5;--kolibri-color-secondary:#ff4081;--kolibri-color-normal:#9e9e9e;--kolibri-color-danger:#f44336;--kolibri-color-ghost:#f5f5f5;--kolibri-color-disabled:#bdbdbd;--kolibri-color-text:#222222;--kolibri-color-visited:#9c27b0;--kolibri-font-family:Verdana, Arial, Tahoma, Helvetica, sans-serif;--kolibri-font-size:16px;--kolibri-spacing:0.25rem}*{hyphens:auto;letter-spacing:inherit;word-break:break-word;word-spacing:inherit}*{box-sizing:border-box;font-family:var(--kolibri-font-family)}kol-icon{color:inherit}kol-span-wc{display:grid;place-items:center;width:100%}kol-span-wc>span{display:flex;gap:var(--kolibri-spacing);place-items:center}a,button,input,select,textarea{cursor:pointer}a.icon-only>kol-span-wc>span>span,button.icon-only>kol-span-wc>span>span{display:none}a{display:inline-flex;place-items:baseline}button{background-color:transparent;border-width:0}h1,h2,h3,h4,h5,h6{font-size:1rem;margin:0}",KolCard=class{constructor(e){(0,_index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,e),this._hasFooter=!1,this._heading=void 0,this._headline=void 0,this._level=1,this.state={_heading:"…"}}render(){return (0,_index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_0__.H,null,(0,_index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",null,(0,_index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"header"},(0,_index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_0__.h)("kol-heading-wc",{_label:this.state._heading,_level:this.state._level}),(0,_index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{name:"header"})),(0,_index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"content"},(0,_index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{name:"content"})),!0===this.state._hasFooter&&(0,_index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"footer"},(0,_index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{name:"footer"}))))}validateHasFooter(e){(0,_prop_validators_88dff60e_js__WEBPACK_IMPORTED_MODULE_1__.b)(this,"_hasFooter",e)}validateHeading(e){(0,_prop_validators_88dff60e_js__WEBPACK_IMPORTED_MODULE_1__.w)(this,"_heading",e,{required:!0})}validateHeadline(e){this.validateHeading(e)}validateLevel(e){(0,_validation_63fb9e79_js__WEBPACK_IMPORTED_MODULE_2__.w)(this,e)}componentWillLoad(){this.validateHasFooter(this._hasFooter),this.validateHeading(this._heading||this._headline),this.validateLevel(this._level)}static get watchers(){return{_hasFooter:["validateHasFooter"],_heading:["validateHeading"],_headline:["validateHeadline"],_level:["validateLevel"]}}};KolCard.style={default:defaultStyleCss};

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