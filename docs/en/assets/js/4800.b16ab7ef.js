"use strict"; exports.id = 4800; exports.ids = [4800]; exports.modules = { /***/ 94800: /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => { __webpack_require__.r(__webpack_exports__); /* harmony export */ __webpack_require__.d(__webpack_exports__, { /* harmony export */ kol_link_button: () => (/* binding */ KolLinkButton) /* harmony export */ }); /* harmony import */ var _index_022cbbb8_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(65224); /* harmony import */ var _component_names_5dd1e02a_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(63792); /*! * KoliBri - The accessible HTML-Standard */ const defaultStyleCss="@charset \"UTF-8\";\n/*\n * This file contains all rules for accessibility.\n */\n@layer kol-global {\n :host {\n /*\n * Minimum size of interactive elements.\n */\n --a11y-min-size: 44px;\n /*\n * No element should be used without a background and font color whose contrast ratio has\n * not been checked. By initially setting the background color to white and the font color\n * to black, the contrast ratio is ensured and explicit adjustment is forced.\n */\n background-color: white;\n color: black;\n /*\n * Verdana is an accessible font that can be used without requiring additional loading time.\n */\n font-family: Verdana;\n }\n * {\n /*\n * This rule enables the word dividing for all texts. That is important for high zoom levels.\n */\n hyphens: auto;\n /*\n * Letter spacing is required for all texts.\n */\n letter-spacing: inherit;\n /*\n * This rule enables the word dividing for all texts. That is important for high zoom levels.\n */\n word-break: break-word;\n /*\n * Word spacing is required for all texts.\n */\n word-spacing: inherit;\n }\n /*\n * All interactive elements should have a minimum size of 44px.\n */\n /* input:not([type='checkbox'], [type='radio'], [type='range']), */\n /* option, */\n /* select, */\n /* textarea, */\n [role=button],\n button:not([role=link]),\n .kol-input .input {\n min-height: var(--a11y-min-size);\n min-width: var(--a11y-min-size);\n }\n /*\n * Some interactive elements should not inherit the font-family and font-size.\n */\n a,\n button,\n h1,\n h2,\n h3,\n h4,\n h5,\n h6,\n input,\n option,\n select,\n textarea {\n /*\n * All elements should inherit the font family from his parent element.\n */\n font-family: inherit;\n /*\n * All elements should inherit the font size from his parent element.\n */\n font-size: inherit;\n }\n}\n/**\n * Sometimes we need the semantic element for accessibility reasons,\n * but we don't want to show it.\n *\n * - https://www.a11yproject.com/posts/how-to-hide-content/\n */\n.visually-hidden {\n clip: rect(0 0 0 0);\n clip-path: inset(50%);\n height: 1px;\n overflow: hidden;\n position: absolute;\n white-space: nowrap;\n width: 1px;\n}\n\n@layer kol-global {\n /*\n * Dieses CSS stellt sicher, dass der Standard-Style\n * von A und Button resettet werden.\n */\n :is(a, button) {\n background-color: transparent;\n border: none;\n margin: 0;\n padding: 0;\n width: 100%; /* 100% needed for custom width from outside */\n }\n /*\n * Ensure elements with hidden attribute to be actually not visible\n * @see https://meowni.ca/hidden.is.a.lie.html\n */\n [hidden] {\n display: none !important;\n }\n}\n@layer kol-global {\n :host {\n /*\n * The max-width is needed to prevent the table from overflowing the\n * parent node, if the table is wider than the parent node.\n */\n max-width: 100%;\n }\n * {\n /*\n * We prefer to box-sizing: border-box for all elements.\n */\n box-sizing: border-box;\n }\n /* KolSpan is a layout component with icons in all directions and a label text in the middle. */\n .kol-span-wc {\n display: grid;\n place-items: center;\n }\n /* The sub span in KolSpan is the horizontal span with icon left and right and the label text in the middle. */\n .kol-span-wc > span {\n display: flex;\n place-items: center;\n }\n a,\n button {\n cursor: pointer;\n }\n /* This is the text label. */\n .hide-label > .kol-span-wc > span > span {\n display: none;\n }\n /* Reset browser agent style. */\n button:disabled {\n color: unset;\n }\n .disabled label,\n .disabled:focus-within label,\n [aria-disabled=true],\n [aria-disabled=true]:focus,\n [disabled],\n [disabled]:focus {\n cursor: not-allowed;\n opacity: 0.5;\n outline: none;\n }\n [aria-disabled=true]:focus .kol-span-wc,\n [disabled]:focus .kol-span-wc {\n outline: none !important;\n }\n}\n@layer kol-component {\n :host {\n font-style: calc(16rem / var(--kolibri-root-font-size, 16));\n display: inline-block;\n }\n :is(a, button) {\n display: inline-flex;\n place-items: center;\n text-align: center;\n text-decoration-line: none;\n }\n :is(a, button)::before {\n /* Render zero-width character as first element to set the baseline correctly. */\n content: \"​\";\n }\n /* TODO: Why we need this? */\n :is(a, button) > .kol-span-wc {\n margin: auto;\n width: 100%;\n }\n}",KolLinkButtonDefaultStyle0=defaultStyleCss,KolLinkButton=class{constructor(n){(0,_index_022cbbb8_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,n),this.catchRef=n=>{this.linkWcRef=n},this._accessKey=void 0,this._ariaCurrentValue=void 0,this._customClass=void 0,this._disabled=!1,this._download=void 0,this._hideLabel=!1,this._href=void 0,this._icons=void 0,this._label=void 0,this._on=void 0,this._role=void 0,this._tabIndex=void 0,this._target=void 0,this._tooltipAlign="right",this._variant="normal"}async focus(){await this.kolFocus()}async kolFocus(){var n;await(null===(n=this.linkWcRef)||void 0===n?void 0:n.kolFocus())}render(){return (0,_index_022cbbb8_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_022cbbb8_js__WEBPACK_IMPORTED_MODULE_0__.H,{key:"e6ab08377be0ad810ea3d7c0f690231663aa790d",class:"kol-link-button"},(0,_index_022cbbb8_js__WEBPACK_IMPORTED_MODULE_0__.h)(_component_names_5dd1e02a_js__WEBPACK_IMPORTED_MODULE_1__.n,{key:"dd6e0237ef4fa62c42f8c4ce51efa5f3dbfcd49d",ref:this.catchRef,class:{button:!0,[this._variant]:"custom"!==this._variant,[this._customClass]:"custom"===this._variant&&"string"==typeof this._customClass&&this._customClass.length>0},_accessKey:this._accessKey,_ariaCurrentValue:this._ariaCurrentValue,_disabled:this._disabled,_download:this._download,_hideLabel:this._hideLabel,_href:this._href,_icons:this._icons,_label:this._label,_on:this._on,_role:"button",_tabIndex:this._tabIndex,_target:this._target,_tooltipAlign:this._tooltipAlign},(0,_index_022cbbb8_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{key:"de5b3af7fb665c288e9cffa7da4f59dcd57e9093",name:"expert",slot:"expert"})))}};KolLinkButton.style={default:KolLinkButtonDefaultStyle0}; /***/ }) }; ;