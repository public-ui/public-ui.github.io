"use strict"; exports.id = 4094; exports.ids = [4094]; exports.modules = { /***/ 34094: /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => { __webpack_require__.r(__webpack_exports__); /* harmony export */ __webpack_require__.d(__webpack_exports__, { /* harmony export */ "kol_breadcrumb": () => (/* binding */ KolBreadcrumb) /* harmony export */ }); /* harmony import */ var _index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(89160); /* harmony import */ var _a11y_tipps_1cea9822_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(81429); /* harmony import */ var _prop_validators_e402ad49_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(62701); /* harmony import */ var _validation_ab9a6c0d_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(12416); /*! * KoliBri - The accessible HTML-Standard */ const defaultStyleCss=":host{--a11y-min-size:44px}*{hyphens:auto;letter-spacing:inherit;word-break:break-word;word-spacing:inherit}*[role='button'],button:not([role='link']){min-height:var(--a11y-min-size);min-width:var(--a11y-min-size)}a,button,h1,h2,h3,h4,h5,h6,input,option,select,textarea{font-family:inherit}:is(a,button){background-color:transparent;border:none;margin:0;padding:0;width:100%;}:host{max-width:100%}*{box-sizing:border-box}kol-span-wc{display:grid;place-items:center}kol-span-wc>span{display:flex;place-items:center}a,button{cursor:pointer}a,button,input,option,select,textarea{font-family:inherit}.icon-only>kol-span-wc>span>span{display:none}ul,li{margin:0;padding:0;list-style:none;display:flex;gap:0.5em;flex-wrap:wrap;place-items:center}kol-icon::part(separator){font-weight:900;font-size:0.7em}kol-icon::part(separator)::before{content:'\\f054';font-family:'Font Awesome 6 Free'}",KolBreadcrumb=class{constructor(a){(0,_index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,a),this._ariaLabel=void 0,this._links=void 0,this.state={_ariaLabel:"…",_links:[]}}render(){const a=this.state._links.length-1;return (0,_index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_0__.H,null,(0,_index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_0__.h)("nav",{"aria-label":this.state._ariaLabel},(0,_index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_0__.h)("ul",null,0===this.state._links.length&&(0,_index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_0__.h)("li",null,(0,_index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_0__.h)("kol-icon",{_ariaLabel:"",_icon:"codicon codicon-home"}),"…"),this.state._links.map(((i,t)=>(0,_index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_0__.h)("li",{key:t},0!==t&&(0,_index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_0__.h)("kol-icon",{_ariaLabel:"",_icon:"codicon codicon-chevron-right"}),t===a?(0,_index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_0__.h)("span",null,i._iconOnly?(0,_index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_0__.h)("kol-icon",{_ariaLabel:i._label,_icon:"string"==typeof i._icon?i._icon:"codicon codicon-symbol-event"}):(0,_index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_0__.F,null,i._label)):(0,_index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_0__.h)("kol-link",Object.assign({_useCase:"nav"},i,{_ariaLabel:i._label}),i._label)))))))}validateAriaLabel(a){(0,_prop_validators_e402ad49_js__WEBPACK_IMPORTED_MODULE_1__.w)(this,"_ariaLabel",a,{required:!0}),(0,_a11y_tipps_1cea9822_js__WEBPACK_IMPORTED_MODULE_2__.b)(a)}validateLinks(a){(0,_validation_ab9a6c0d_js__WEBPACK_IMPORTED_MODULE_3__.w)("KolBreadcrumb",this,a)}componentWillLoad(){this.validateAriaLabel(this._ariaLabel),this.validateLinks(this._links)}static get watchers(){return{_ariaLabel:["validateAriaLabel"],_links:["validateLinks"]}}};KolBreadcrumb.style={default:defaultStyleCss}; /***/ }), /***/ 12416: /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => { /* harmony export */ __webpack_require__.d(__webpack_exports__, { /* harmony export */ "w": () => (/* binding */ watchNavLinks) /* harmony export */ }); /* harmony import */ var _a11y_tipps_1cea9822_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(81429); /* harmony import */ var _prop_validators_e402ad49_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(62701); /*! * KoliBri - The accessible HTML-Standard */ const watchNavLinks=(t,a,s)=>{(0,_prop_validators_e402ad49_js__WEBPACK_IMPORTED_MODULE_0__.d)(a,"_links",(t=>"object"==typeof t&&"string"==typeof t._label),s),(0,_a11y_tipps_1cea9822_js__WEBPACK_IMPORTED_MODULE_1__.u)(t,a.state._links.length)}; /***/ }) }; ;