"use strict";
exports.id = 3682;
exports.ids = [3682];
exports.modules = {

/***/ 63682:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "kol_card": () => (/* binding */ KolCard)
/* harmony export */ });
/* harmony import */ var _index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69379);
/* harmony import */ var _prop_validators_daa14517_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14282);
/* harmony import */ var _validation_ce72d9b3_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(25128);
/*!
 * KoliBri - The accessible HTML-Standard
 */
const defaultStyleCss=":host{--a11y-min-size:44px}*{hyphens:auto;letter-spacing:inherit;word-break:break-word;word-spacing:inherit}*[role='button'],button:not([role='link']),input[type='color'],input[type='date'],input[type='datetime-local'],input[type='email'],input[type='file'],input[type='month'],input[type='number'],input[type='password'],input[type='search'],input[type='tel'],input[type='text'],input[type='time'],input[type='url'],input[type='week'],option,select,textarea{min-height:var(--a11y-min-size);min-width:var(--a11y-min-size)}:is(a,button){background-color:transparent;border:none;margin:0;padding:0;width:100%;}:host{max-width:100%}*{box-sizing:border-box}kol-span-wc{display:grid;place-items:center}kol-span-wc>span{display:flex;place-items:center}a,button,input,option,select,textarea{cursor:pointer;font-family:inherit;font-size:inherit}.icon-only>kol-span-wc>span>span{display:none}",KolCard=class{constructor(e){(0,_index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,e),this._hasFooter=!1,this._heading=void 0,this._headline=void 0,this._level=1,this.state={_heading:"…"}}render(){return (0,_index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_0__.H,null,(0,_index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",null,(0,_index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"header"},(0,_index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_0__.h)("kol-heading-wc",{_headline:this.state._heading,_level:this.state._level}),(0,_index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{name:"header"})),(0,_index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"content"},(0,_index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{name:"content"})),!0===this.state._hasFooter&&(0,_index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"footer"},(0,_index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{name:"footer"}))))}validateHasFooter(e){(0,_prop_validators_daa14517_js__WEBPACK_IMPORTED_MODULE_1__.b)(this,"_hasFooter",e)}validateHeading(e){(0,_prop_validators_daa14517_js__WEBPACK_IMPORTED_MODULE_1__.w)(this,"_heading",e,{required:!0})}validateHeadline(e){this.validateHeading(e)}validateLevel(e){(0,_validation_ce72d9b3_js__WEBPACK_IMPORTED_MODULE_2__.w)(this,e)}componentWillLoad(){this.validateHasFooter(this._hasFooter),this.validateHeading(this._heading||this._headline),this.validateLevel(this._level)}static get watchers(){return{_hasFooter:["validateHasFooter"],_heading:["validateHeading"],_headline:["validateHeadline"],_level:["validateLevel"]}}};KolCard.style={default:defaultStyleCss};

/***/ }),

/***/ 25128:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "w": () => (/* binding */ watchHeadingLevel)
/* harmony export */ });
/* harmony import */ var _prop_validators_daa14517_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14282);
/*!
 * KoliBri - The accessible HTML-Standard
 */
const watchHeadingLevel=(a,e)=>{(0,_prop_validators_daa14517_js__WEBPACK_IMPORTED_MODULE_0__.a)(a,"_level",(a=>"number"==typeof a&&1<=a&&a<=6),new Set(["Number {1, 2, 3, 4, 5, 6}"]),e,{defaultValue:1,required:!0})};

/***/ })

};
;