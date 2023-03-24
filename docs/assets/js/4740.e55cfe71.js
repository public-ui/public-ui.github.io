"use strict";
exports.id = 4740;
exports.ids = [4740];
exports.modules = {

/***/ 84740:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "kol_accordion": () => (/* binding */ KolAccordion)
/* harmony export */ });
/* harmony import */ var _index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(69379);
/* harmony import */ var _a11y_tipps_e0a65f3c_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(95934);
/* harmony import */ var _dev_utils_bedce29d_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16638);
/* harmony import */ var _prop_validators_daa14517_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(14282);
/* harmony import */ var _validation_ce72d9b3_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(25128);
/*!
 * KoliBri - The accessible HTML-Standard
 */
const defaultStyleCss=":host{--a11y-min-size:44px}*{hyphens:auto;letter-spacing:inherit;word-break:break-word;word-spacing:inherit}*[role='button'],button:not([role='link']),input[type='color'],input[type='date'],input[type='datetime-local'],input[type='email'],input[type='file'],input[type='month'],input[type='number'],input[type='password'],input[type='search'],input[type='tel'],input[type='text'],input[type='time'],input[type='url'],input[type='week'],option,select,textarea{min-height:var(--a11y-min-size);min-width:var(--a11y-min-size)}:is(a,button){background-color:transparent;border:none;margin:0;padding:0;width:100%;}:host{max-width:100%}*{box-sizing:border-box}kol-span-wc{display:grid;place-items:center}kol-span-wc>span{display:flex;place-items:center}a,button,input,option,select,textarea{cursor:pointer;font-family:inherit;font-size:inherit}.icon-only>kol-span-wc>span>span{display:none}:host{display:block}.accordion kol-heading-wc kol-button-wc button kol-span-wc{justify-items:start}";(0,_a11y_tipps_e0a65f3c_js__WEBPACK_IMPORTED_MODULE_0__.f)("[KolAccordion] Anfrage nach einer KolAccordionGroup bei dem immer nur ein Accordion geöffnet ist.\n\n- onClick auf der KolAccordion anwenden\n- Click-Event prüft den _open-Status der Accordions\n- Logik Öffnet und Schließt entsprechend"),(0,_a11y_tipps_e0a65f3c_js__WEBPACK_IMPORTED_MODULE_0__.f)("[KolAccordion] Tab-Sperre des Inhalts im geschlossenen Zustand.");const KolAccordion=class{constructor(e){(0,_index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_1__.r)(this,e),this.nonce=(0,_dev_utils_bedce29d_js__WEBPACK_IMPORTED_MODULE_2__.n)(),this.onClick=e=>{this._open=!1===this._open;const t=setTimeout((()=>{var i;clearTimeout(t),"function"==typeof(null===(i=this.state._on)||void 0===i?void 0:i.onClick)&&this.state._on.onClick(e,!0===this._open)}))},this._heading=void 0,this._level=1,this._on=void 0,this._open=!1,this.state={_heading:"…",_level:1}}render(){return (0,_index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_1__.h)(_index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_1__.H,null,(0,_index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_1__.h)("div",{class:{accordion:!0,open:!0===this.state._open,close:!0!==this.state._open}},(0,_index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_1__.h)("kol-heading-wc",{_headline:"",_level:this.state._level},(0,_index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_1__.h)("kol-button-wc",{_ariaControls:this.nonce,_ariaExpanded:this.state._open,_icon:this.state._open?"codicon codicon-remove":"codicon codicon-add",_label:this.state._heading,_on:{onClick:this.onClick}})),(0,_index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_1__.h)("div",{class:"header"},(0,_index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_1__.h)("slot",{name:"header"})),(0,_index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_1__.h)("div",{"aria-hidden":!1===this.state._open?"true":void 0,class:"content",id:this.nonce,hidden:!1===this.state._open,style:!1===this.state._open?{display:"none",height:"0",visibility:"hidden"}:void 0},(0,_index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_1__.h)("slot",{name:"content"}))))}validateHeading(e){(0,_prop_validators_daa14517_js__WEBPACK_IMPORTED_MODULE_3__.w)(this,"_heading",e,{required:!0})}validateLevel(e){(0,_validation_ce72d9b3_js__WEBPACK_IMPORTED_MODULE_4__.w)(this,e)}validateOn(e){"object"==typeof e&&null!==e&&"function"==typeof e.onClick&&(0,_prop_validators_daa14517_js__WEBPACK_IMPORTED_MODULE_3__.s)(this,"_on",e)}validateOpen(e){(0,_prop_validators_daa14517_js__WEBPACK_IMPORTED_MODULE_3__.b)(this,"_open",e)}componentWillLoad(){this.validateHeading(this._heading),this.validateLevel(this._level),this.validateOn(this._on),this.validateOpen(this._open)}static get watchers(){return{_heading:["validateHeading"],_level:["validateLevel"],_on:["validateOn"],_open:["validateOpen"]}}};KolAccordion.style={default:defaultStyleCss};

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