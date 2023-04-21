"use strict"; exports.id = 4237; exports.ids = [4237]; exports.modules = { /***/ 44237: /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => { __webpack_require__.r(__webpack_exports__); /* harmony export */ __webpack_require__.d(__webpack_exports__, { /* harmony export */ "kol_skip_nav": () => (/* binding */ KolSkipNav) /* harmony export */ }); /* harmony import */ var _index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(21622); /* harmony import */ var _a11y_tipps_1cea9822_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(60090); /* harmony import */ var _prop_validators_e402ad49_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(85982); /* harmony import */ var _validation_ab9a6c0d_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(82771); /*! * KoliBri - The accessible HTML-Standard */ const defaultStyleCss=":host{--a11y-min-size:44px}*{hyphens:auto;letter-spacing:inherit;word-break:break-word;word-spacing:inherit}[role='button'],button:not([role='link']),kol-input .input{min-height:var(--a11y-min-size);min-width:var(--a11y-min-size)}a,button,h1,h2,h3,h4,h5,h6,input,option,select,textarea{font-family:inherit}:is(a,button){background-color:transparent;border:none;margin:0;padding:0;width:100%;}:host{max-width:100%}*{box-sizing:border-box}kol-span-wc{display:grid;place-items:center}kol-span-wc>span{display:flex;place-items:center}a,button{cursor:pointer}a,button,input,option,select,textarea{font-family:inherit}.icon-only>kol-span-wc>span>span{display:none}ul{display:grid;list-style:none;place-items:center}ul li{height:0}",KolSkipNav=class{constructor(a){(0,_index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,a),this._ariaLabel=void 0,this._links=void 0,this.state={_ariaLabel:"…",_links:[]}}render(){return (0,_index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_0__.h)("nav",{"aria-label":this.state._ariaLabel},(0,_index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_0__.h)("ul",null,this.state._links.map(((a,i)=>(0,_index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_0__.h)("li",{key:i},(0,_index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_0__.h)("kol-link",Object.assign({},a,{_stealth:!0})))))))}validateAriaLabel(a){(0,_prop_validators_e402ad49_js__WEBPACK_IMPORTED_MODULE_1__.w)(this,"_ariaLabel",a,{required:!0}),(0,_a11y_tipps_1cea9822_js__WEBPACK_IMPORTED_MODULE_2__.b)(a)}validateLinks(a){(0,_validation_ab9a6c0d_js__WEBPACK_IMPORTED_MODULE_3__.w)("KolSkipNav",this,a)}componentWillLoad(){this.validateAriaLabel(this._ariaLabel),this.validateLinks(this._links)}static get watchers(){return{_ariaLabel:["validateAriaLabel"],_links:["validateLinks"]}}};KolSkipNav.style={default:defaultStyleCss}; /***/ }), /***/ 82771: /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => { /* harmony export */ __webpack_require__.d(__webpack_exports__, { /* harmony export */ "w": () => (/* binding */ watchNavLinks) /* harmony export */ }); /* harmony import */ var _a11y_tipps_1cea9822_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(60090); /* harmony import */ var _prop_validators_e402ad49_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85982); /*! * KoliBri - The accessible HTML-Standard */ const watchNavLinks=(t,a,s)=>{(0,_prop_validators_e402ad49_js__WEBPACK_IMPORTED_MODULE_0__.d)(a,"_links",(t=>"object"==typeof t&&"string"==typeof t._label),s),(0,_a11y_tipps_1cea9822_js__WEBPACK_IMPORTED_MODULE_1__.u)(t,a.state._links.length)}; /***/ }) }; ;