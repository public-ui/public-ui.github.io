"use strict"; exports.id = 6088; exports.ids = [6088]; exports.modules = { /***/ 76088: /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => { __webpack_require__.r(__webpack_exports__); /* harmony export */ __webpack_require__.d(__webpack_exports__, { /* harmony export */ kol_modal: () => (/* binding */ KolModal) /* harmony export */ }); /* harmony import */ var _index_62e5924b_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(91388); /* harmony import */ var _index_de9d4ee0_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(55304); /* harmony import */ var _dev_utils_744f41b3_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(31800); /*! * KoliBri - The accessible HTML-Standard */ const defaultStyleCss="/*\n * This file contains all rules for accessibility.\n */\n@layer kol-global {\n :host {\n /*\n * Minimum size of interactive elements.\n */\n --a11y-min-size: 44px;\n /*\n * No element should be used without a background and font color whose contrast ratio has\n * not been checked. By initially setting the background color to white and the font color\n * to black, the contrast ratio is ensured and explicit adjustment is forced.\n */\n background-color: white;\n color: black;\n /*\n * Verdana is an accessible font that can be used without requiring additional loading time.\n */\n font-family: Verdana;\n }\n * {\n /*\n * This rule enables the word dividing for all texts. That is important for high zoom levels.\n */\n hyphens: auto;\n /*\n * Letter spacing is required for all texts.\n */\n letter-spacing: inherit;\n /*\n * This rule enables the word dividing for all texts. That is important for high zoom levels.\n */\n word-break: break-word;\n /*\n * Word spacing is required for all texts.\n */\n word-spacing: inherit;\n }\n /*\n * All interactive elements should have a minimum size of 44px.\n */\n /* input:not([type='checkbox'], [type='radio'], [type='range']), */\n /* option, */\n /* select, */\n /* textarea, */\n [role=button],\n button:not([role=link]),\n kol-input .input {\n min-height: var(--a11y-min-size);\n min-width: var(--a11y-min-size);\n }\n /*\n * Some interactive elements should not inherit the font-family and font-size.\n */\n a,\n button,\n h1,\n h2,\n h3,\n h4,\n h5,\n h6,\n input,\n option,\n select,\n textarea {\n /*\n * All elements should inherit the font family from his parent element.\n */\n font-family: inherit;\n /*\n * All elements should inherit the font size from his parent element.\n */\n font-size: inherit;\n }\n}\n/**\n * Sometimes we need the semantic element for accessibility reasons,\n * but we don't want to show it.\n *\n * - https://www.a11yproject.com/posts/how-to-hide-content/\n */\n.visually-hidden {\n clip: rect(0 0 0 0);\n clip-path: inset(50%);\n height: 1px;\n overflow: hidden;\n position: absolute;\n white-space: nowrap;\n width: 1px;\n}\n\n@layer kol-global {\n /*\n * Dieses CSS stellt sicher, dass der Standard-Style\n * von A und Button resettet werden.\n */\n :is(a, button) {\n background-color: transparent;\n border: none;\n margin: 0;\n padding: 0;\n width: 100%; /* 100% needed for custom width from outside */\n }\n /*\n * Ensure elements with hidden attribute to be actually not visible\n * @see https://meowni.ca/hidden.is.a.lie.html\n */\n [hidden] {\n display: none !important;\n }\n}\n@layer kol-global {\n :host {\n /*\n * The max-width is needed to prevent the table from overflowing the\n * parent node, if the table is wider than the parent node.\n */\n max-width: 100%;\n }\n * {\n /*\n * We prefer to box-sizing: border-box for all elements.\n */\n box-sizing: border-box;\n }\n /* KolSpan is a layout component with icons in all directions and a label text in the middle. */\n kol-span-wc {\n display: grid;\n place-items: center;\n }\n /* The sub span in KolSpan is the horizontal span with icon left and right and the label text in the middle. */\n kol-span-wc > span {\n display: flex;\n place-items: center;\n }\n a,\n button {\n cursor: pointer;\n }\n .hidden {\n display: none;\n visibility: hidden;\n }\n /* This is the text label. */\n .hide-label > kol-span-wc > span > span {\n display: none;\n }\n /* Reset browser agent style. */\n button:disabled {\n color: unset;\n }\n .disabled label,\n .disabled:focus-within label,\n [aria-disabled=true],\n [aria-disabled=true]:focus,\n [disabled],\n [disabled]:focus {\n cursor: not-allowed !important;\n opacity: 0.5 !important;\n outline: none !important;\n }\n [aria-disabled=true]:focus kol-span-wc,\n [disabled]:focus kol-span-wc {\n outline: none !important;\n }\n}\n@layer kol-component {\n .overlay {\n background-color: rgba(0, 0, 0, 0.33);\n display: flex;\n height: 100%;\n inset: 0;\n position: fixed;\n width: 100%;\n z-index: 100;\n }\n .modal {\n margin: auto;\n max-height: 100%;\n max-width: 100%;\n }\n}",KolModalDefaultStyle0=defaultStyleCss,KolModal=class{constructor(n){(0,_index_62e5924b_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,n),this.onKeyDown=n=>{n&&"Escape"===n.code&&(this._activeElement=null)},this._activeElement=void 0,this._label=void 0,this._on=void 0,this._width="100%",this.state={_activeElement:null,_label:"",_width:"100%"}}componentDidRender(){this.hostElement&&(this.state._activeElement?(0,_dev_utils_744f41b3_js__WEBPACK_IMPORTED_MODULE_1__.g)().Modal.openModal(this.hostElement,this.state._activeElement):(0,_dev_utils_744f41b3_js__WEBPACK_IMPORTED_MODULE_1__.g)().Modal.closeModal(this.hostElement))}disconnectedCallback(){this.hostElement&&(0,_dev_utils_744f41b3_js__WEBPACK_IMPORTED_MODULE_1__.g)().Modal.closeModal(this.hostElement)}render(){return (0,_index_62e5924b_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_62e5924b_js__WEBPACK_IMPORTED_MODULE_0__.H,{key:"c05ba4ba3aba8fc37144832e84f6fb6844199cf3",ref:n=>{this.hostElement=n}},this.state._activeElement&&(0,_index_62e5924b_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"overlay"},(0,_index_62e5924b_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"modal",style:{width:this.state._width},"aria-label":this.state._label,"aria-modal":"true",role:"dialog",onKeyDown:this.onKeyDown,ref:n=>{n&&(n.setAttribute("tabindex","0"),setTimeout((()=>n.focus()),250))}},(0,_index_62e5924b_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",null))))}validateActiveElement(n){(0,_index_de9d4ee0_js__WEBPACK_IMPORTED_MODULE_2__.w)(this,"_activeElement",(n=>"object"==typeof n||null===n),new Set(["HTMLElement","null"]),n,{defaultValue:null,hooks:{afterPatch:()=>{var n;null===this._activeElement&&(null===(n=this.state._on)||void 0===n?void 0:n.onClose)&&this.state._on.onClose()}}})}validateLabel(n){(0,_index_de9d4ee0_js__WEBPACK_IMPORTED_MODULE_2__.v)(this,n,{required:!0})}validateOn(n){if("object"==typeof n&&null!==n){(0,_index_de9d4ee0_js__WEBPACK_IMPORTED_MODULE_2__.j)("[KolTabs] Prüfen, wie man auch einen EventCallback einzeln ändern kann.");const e={};"function"!=typeof n.onClose&&!0!==n.onClose||(e.onClose=n.onClose),(0,_index_de9d4ee0_js__WEBPACK_IMPORTED_MODULE_2__.m)(this,"_on",e)}}validateWidth(n){(0,_index_de9d4ee0_js__WEBPACK_IMPORTED_MODULE_2__.C)(this,"_width",n,{defaultValue:"100%"})}componentWillLoad(){this.validateActiveElement(this._activeElement),this.validateLabel(this._label),this.validateOn(this._on),this.validateWidth(this._width)}static get watchers(){return{_activeElement:["validateActiveElement"],_label:["validateLabel"],_on:["validateOn"],_width:["validateWidth"]}}};KolModal.style={default:KolModalDefaultStyle0}; /***/ }) }; ;