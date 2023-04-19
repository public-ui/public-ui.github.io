"use strict"; exports.id = 1110; exports.ids = [1110]; exports.modules = { /***/ 1110: /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => { __webpack_require__.r(__webpack_exports__); /* harmony export */ __webpack_require__.d(__webpack_exports__, { /* harmony export */ "kol_quote": () => (/* binding */ KolQuote) /* harmony export */ }); /* harmony import */ var _index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7793); /* harmony import */ var _prop_validators_e402ad49_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(37746); /*! * KoliBri - The accessible HTML-Standard */ const defaultStyleCss=":host{--a11y-min-size:44px}*{hyphens:auto;letter-spacing:inherit;word-break:break-word;word-spacing:inherit}*[role='button'],button:not([role='link']){min-height:var(--a11y-min-size);min-width:var(--a11y-min-size)}a,button,h1,h2,h3,h4,h5,h6,input,option,select,textarea{font-family:inherit}:is(a,button){background-color:transparent;border:none;margin:0;padding:0;width:100%;}:host{max-width:100%}*{box-sizing:border-box}kol-span-wc{display:grid;place-items:center}kol-span-wc>span{display:flex;place-items:center}a,button{cursor:pointer}a,button,input,option,select,textarea{font-family:inherit}.icon-only>kol-span-wc>span>span{display:none}cite,figure,q+figcaption{display:inline;margin:0;padding:0}blockquote::before{content:open-quote}blockquote::after{content:close-quote}cite::before{content:'—'}.block cite::before{padding-right:0.5em}.inline cite::before{padding:0.5em}",KolQuote=class{constructor(t){(0,_index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,t),this._caption=void 0,this._href=void 0,this._quote=void 0,this._variant="inline",this.state={_href:"…",_quote:"…",_variant:"inline"}}validateCaption(t){(0,_prop_validators_e402ad49_js__WEBPACK_IMPORTED_MODULE_1__.w)(this,"_caption",t)}validateHref(t){(0,_prop_validators_e402ad49_js__WEBPACK_IMPORTED_MODULE_1__.w)(this,"_href",t,{required:!0})}validateQuote(t){(0,_prop_validators_e402ad49_js__WEBPACK_IMPORTED_MODULE_1__.w)(this,"_quote",t,{required:!0})}validateVariant(t){(0,_prop_validators_e402ad49_js__WEBPACK_IMPORTED_MODULE_1__.a)(this,"_variant",(t=>"block"===t||"inline"===t),new Set(["block","inline"]),t)}componentWillLoad(){this.validateCaption(this._caption),this.validateHref(this._href),this.validateQuote(this._quote),this.validateVariant(this._variant)}render(){const t=""!==this.state._quote;return (0,_index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_0__.H,null,(0,_index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_0__.h)("figure",{class:{[this.state._variant]:!0}},"block"===this.state._variant?(0,_index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_0__.h)("blockquote",{cite:this.state._href},this.state._quote,(0,_index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_0__.h)("span",{"aria-hidden":t?"true":void 0,hidden:t},(0,_index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{name:"expert"}))):(0,_index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_0__.h)("q",{cite:this.state._href},this.state._quote,(0,_index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_0__.h)("span",{"aria-hidden":t?"true":void 0,hidden:t},(0,_index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{name:"expert"}))),"string"==typeof this.state._caption&&this.state._caption.length>0&&(0,_index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_0__.h)("figcaption",null,(0,_index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_0__.h)("cite",null,(0,_index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_0__.h)("kol-link",{_href:this.state._href,_label:this.state._caption,_target:"_blank"})))))}static get watchers(){return{_caption:["validateCaption"],_href:["validateHref"],_quote:["validateQuote"],_variant:["validateVariant"]}}};KolQuote.style={default:defaultStyleCss}; /***/ }) }; ;