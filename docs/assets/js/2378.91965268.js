"use strict"; exports.id = 2378; exports.ids = [2378]; exports.modules = { /***/ 72378: /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => { __webpack_require__.r(__webpack_exports__); /* harmony export */ __webpack_require__.d(__webpack_exports__, { /* harmony export */ "kol_details": () => (/* binding */ KolDetails) /* harmony export */ }); /* harmony import */ var _index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(21156); /* harmony import */ var _prop_validators_e402ad49_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(15248); /*! * KoliBri - The accessible HTML-Standard */ const defaultStyleCss=":host{--a11y-min-size:44px}*{hyphens:auto;letter-spacing:inherit;word-break:break-word;word-spacing:inherit}*[role='button'],button:not([role='link']),input[type='color'],input[type='date'],input[type='datetime-local'],input[type='email'],input[type='file'],input[type='month'],input[type='number'],input[type='password'],input[type='search'],input[type='tel'],input[type='text'],input[type='time'],input[type='url'],input[type='week'],option,select,textarea{min-height:var(--a11y-min-size);min-width:var(--a11y-min-size)}:is(a,button){background-color:transparent;border:none;margin:0;padding:0;width:100%;}:host{max-width:100%}*{box-sizing:border-box}kol-span-wc{display:grid;place-items:center}kol-span-wc>span{display:flex;place-items:center}a,button,input[type='checkbox'],input[type='color'],input[type='file'],input[type='radio'],option,select{cursor:pointer;font-family:inherit;font-size:inherit}.icon-only>kol-span-wc>span>span{display:none}:host{display:block}details{display:grid}details>summary{cursor:pointer;display:flex;place-items:center}details>summary>span{border-bottom-color:grey;border-bottom-style:solid}details[open]>summary>span,details>summary:focus>span,details>summary:hover>span{border-bottom-color:black}details>kol-indented-text{margin:0.25em 0px 0px 0.5em}",KolDetails=class{constructor(t){(0,_index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,t),this.onClick=()=>{setTimeout((()=>{var t;this._open=null===(t=this.htmlDetailsElement)||void 0===t?void 0:t.open}),25)},this._open=!1,this._summary=void 0,this.state={_summary:"…"}}render(){return (0,_index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_0__.H,null,(0,_index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_0__.h)("details",{ref:t=>{this.htmlDetailsElement=t},open:this.state._open},(0,_index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_0__.h)("summary",{onClick:this.onClick},this.state._open?(0,_index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_0__.h)("kol-icon",{_ariaLabel:"",_icon:"codicon codicon-chevron-down"}):(0,_index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_0__.h)("kol-icon",{_ariaLabel:"",_icon:"codicon codicon-chevron-right"}),(0,_index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_0__.h)("span",null,this.state._summary)),(0,_index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_0__.h)("kol-indented-text",null,(0,_index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",null))))}validateOpen(t){(0,_prop_validators_e402ad49_js__WEBPACK_IMPORTED_MODULE_1__.b)(this,"_open",t)}validateSummary(t){(0,_prop_validators_e402ad49_js__WEBPACK_IMPORTED_MODULE_1__.w)(this,"_summary",t,{required:!0})}componentWillLoad(){this.validateOpen(this._open),this.validateSummary(this._summary)}static get watchers(){return{_open:["validateOpen"],_summary:["validateSummary"]}}};KolDetails.style={default:defaultStyleCss}; /***/ }) }; ;