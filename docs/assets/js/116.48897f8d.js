"use strict";
exports.id = 116;
exports.ids = [116];
exports.modules = {

/***/ 60116:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   kol_heading_wc: () => (/* binding */ KolHeadingWc)
/* harmony export */ });
/* harmony import */ var _index_59e9528b_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(29340);
/* harmony import */ var _index_fbc0a5be_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(34408);
/* harmony import */ var _validation_ffb20598_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(19708);
/*!
 * KoliBri - The accessible HTML-Standard
 */
const KolHeadingWc=class{constructor(e){(0,_index_59e9528b_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,e),this.renderHeadline=(e,a)=>{const t="number"==typeof a&&a>0&&a<=6?`h${a}`:"strong",i=this._variant||t;return (0,_index_59e9528b_js__WEBPACK_IMPORTED_MODULE_0__.h)(t,{class:{headline:!0,[`headline-${i}`]:!0}},e,(0,_index_59e9528b_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{name:"expert"}))},this.renderSecondaryHeadline=(e,a)=>{switch(a){case 1:return (0,_index_59e9528b_js__WEBPACK_IMPORTED_MODULE_0__.h)("span",{class:"secondary-headline"},e);case 2:return (0,_index_59e9528b_js__WEBPACK_IMPORTED_MODULE_0__.h)("h2",{class:"secondary-headline"},e);case 3:return (0,_index_59e9528b_js__WEBPACK_IMPORTED_MODULE_0__.h)("h3",{class:"secondary-headline"},e);case 4:return (0,_index_59e9528b_js__WEBPACK_IMPORTED_MODULE_0__.h)("h4",{class:"secondary-headline"},e);case 5:return (0,_index_59e9528b_js__WEBPACK_IMPORTED_MODULE_0__.h)("h5",{class:"secondary-headline"},e);case 6:return (0,_index_59e9528b_js__WEBPACK_IMPORTED_MODULE_0__.h)("h6",{class:"secondary-headline"},e);default:return (0,_index_59e9528b_js__WEBPACK_IMPORTED_MODULE_0__.h)("strong",{class:"secondary-headline"},e)}},this._label=void 0,this._level=1,this._secondaryHeadline=void 0,this._variant=void 0,this.state={_label:"",_level:1}}validateLabel(e){(0,_index_fbc0a5be_js__WEBPACK_IMPORTED_MODULE_1__.S)(this,e)}validateLevel(e){(0,_validation_ffb20598_js__WEBPACK_IMPORTED_MODULE_2__.w)(this,e)}validateSecondaryHeadline(e){(0,_index_fbc0a5be_js__WEBPACK_IMPORTED_MODULE_1__.A)(this,"_secondaryHeadline",e)}validateVariant(e){(0,_index_fbc0a5be_js__WEBPACK_IMPORTED_MODULE_1__.aH)(this,e)}componentWillLoad(){this.validateLabel(this._label),this.validateLevel(this._level),this.validateSecondaryHeadline(this._secondaryHeadline),this.validateVariant(this._variant)}render(){return (0,_index_59e9528b_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_59e9528b_js__WEBPACK_IMPORTED_MODULE_0__.H,{key:"fff4e111e5278ca50a7b764714da2a80518be76e",class:"kol-heading-wc"},"string"==typeof this.state._secondaryHeadline&&this.state._secondaryHeadline.length>0?(0,_index_59e9528b_js__WEBPACK_IMPORTED_MODULE_0__.h)("hgroup",null,this.renderHeadline(this.state._label,this.state._level),this.state._secondaryHeadline&&this.renderSecondaryHeadline(this.state._secondaryHeadline,this.state._level+1)):this.renderHeadline(this.state._label,this.state._level))}static get watchers(){return{_label:["validateLabel"],_level:["validateLevel"],_secondaryHeadline:["validateSecondaryHeadline"],_variant:["validateVariant"]}}};

/***/ }),

/***/ 19708:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   w: () => (/* binding */ watchHeadingLevel)
/* harmony export */ });
/* harmony import */ var _index_fbc0a5be_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(34408);
/*!
 * KoliBri - The accessible HTML-Standard
 */
const watchHeadingLevel=(e,a)=>{(0,_index_fbc0a5be_js__WEBPACK_IMPORTED_MODULE_0__.w)(e,"_level",(e=>"number"==typeof e&&_index_fbc0a5be_js__WEBPACK_IMPORTED_MODULE_0__.m.includes(e)),new Set([`Number {${_index_fbc0a5be_js__WEBPACK_IMPORTED_MODULE_0__.m.join(", ")}`]),a,{defaultValue:1,required:!0})};

/***/ })

};
;