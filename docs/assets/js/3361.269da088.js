"use strict";
exports.id = 3361;
exports.ids = [3361];
exports.modules = {

/***/ 83361:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "kol_accordion": () => (/* binding */ KolAccordion)
/* harmony export */ });
/* harmony import */ var _index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(55640);
/* harmony import */ var _a11y_tipps_353a7f35_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16105);
/* harmony import */ var _prop_validators_88dff60e_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(39895);
/* harmony import */ var _validation_63fb9e79_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(86192);
/*!
 * KoliBri - The accessible HTML-Standard
 */
const defaultStyleCss=":host{--kolibri-border-color:#e0e0e0;--kolibri-border-radius:0.125rem;--kolibri-border-width:1px;--kolibri-color-error:#f44336;--kolibri-color-info:#2196f3;--kolibri-color-success:#4caf50;--kolibri-color-warning:#ff9800;--kolibri-color-primary:#3f51b5;--kolibri-color-secondary:#ff4081;--kolibri-color-normal:#9e9e9e;--kolibri-color-danger:#f44336;--kolibri-color-ghost:#f5f5f5;--kolibri-color-disabled:#bdbdbd;--kolibri-color-text:#222222;--kolibri-color-visited:#9c27b0;--kolibri-font-family:Verdana, Arial, Tahoma, Helvetica, sans-serif;--kolibri-font-size:16px;--kolibri-spacing:0.25rem}*{hyphens:auto;letter-spacing:inherit;word-break:break-word;word-spacing:inherit}*{box-sizing:border-box;font-family:var(--kolibri-font-family)}kol-icon{color:inherit}kol-span-wc{display:grid;place-items:center;width:100%}kol-span-wc>span{display:flex;gap:var(--kolibri-spacing);place-items:center}a,button,input,select,textarea{cursor:pointer}a.icon-only>kol-span-wc>span>span,button.icon-only>kol-span-wc>span>span{display:none}a{display:inline-flex;place-items:baseline}button{background-color:transparent;border-width:0}h1,h2,h3,h4,h5,h6{font-size:1rem;margin:0}";(0,_a11y_tipps_353a7f35_js__WEBPACK_IMPORTED_MODULE_0__.f)("[KolAccordion] Anfrage nach einer KolAccordionGroup bei dem immer nur ein Accordion geöffnet ist.\n\n- onClick auf der KolAccordion anwenden\n- Click-Event prüft den _open-Status der Accordions\n- Logik Öffnet und Schließt entsprechend"),(0,_a11y_tipps_353a7f35_js__WEBPACK_IMPORTED_MODULE_0__.f)("[KolAccordion] Tab-Sperre des Inhalts im geschlossenen Zustand.");const KolAccordion=class{constructor(e){(0,_index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_1__.r)(this,e),this.catchAriaExpanded=e=>{e instanceof HTMLButtonElement&&(this.buttonRef=e,this.triggerAriaExpanded(e))},this.triggerAriaExpanded=e=>{e.setAttribute("aria-expanded",this.state._open?"true":"false")},this.onClick=e=>{this._open=!1===this._open;const i=setTimeout((()=>{var t;clearTimeout(i),"function"==typeof(null===(t=this.state._on)||void 0===t?void 0:t.onClick)&&this.state._on.onClick(e,!0===this._open),this.buttonRef instanceof HTMLButtonElement&&this.triggerAriaExpanded(this.buttonRef)}))},this._heading=void 0,this._level=1,this._on=void 0,this._open=!1,this.state={_heading:"⚠",_level:1}}render(){return (0,_index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_1__.h)(_index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_1__.H,null,(0,_index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_1__.h)("div",{part:"accordion "+(this.state._open?"open":"close")},(0,_index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_1__.h)("kol-heading-wc",{_label:"",_level:this.state._level},(0,_index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_1__.h)("button",{ref:this.catchAriaExpanded,onClick:this.onClick},(0,_index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_1__.h)("kol-icon",{_ariaLabel:"",_icon:this.state._open?"fa-solid fa-minus":"fa-solid fa-plus",_part:this.state._open?"close":"open"}),(0,_index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_1__.h)("span",null,this.state._heading))),(0,_index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_1__.h)("div",{part:"header"},(0,_index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_1__.h)("slot",{name:"header"})),(0,_index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_1__.h)("div",{part:"content",style:!1===this.state._open?{display:"none",height:"0",visibility:"hidden"}:void 0},(0,_index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_1__.h)("slot",{name:"content"}))))}validateHeading(e){(0,_prop_validators_88dff60e_js__WEBPACK_IMPORTED_MODULE_2__.w)(this,"_heading",e,{required:!0})}validateLevel(e){(0,_validation_63fb9e79_js__WEBPACK_IMPORTED_MODULE_3__.w)(this,e)}validateOn(e){"object"==typeof e&&null!==e&&"function"==typeof e.onClick&&(0,_prop_validators_88dff60e_js__WEBPACK_IMPORTED_MODULE_2__.s)(this,"_on",e)}validateOpen(e){(0,_prop_validators_88dff60e_js__WEBPACK_IMPORTED_MODULE_2__.b)(this,"_open",e)}componentWillLoad(){this.validateHeading(this._heading),this.validateLevel(this._level),this.validateOn(this._on),this.validateOpen(this._open)}static get watchers(){return{_heading:["validateHeading"],_level:["validateLevel"],_on:["validateOn"],_open:["validateOpen"]}}};KolAccordion.style={default:defaultStyleCss};

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