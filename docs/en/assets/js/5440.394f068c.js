"use strict"; exports.id = 5440; exports.ids = [5440]; exports.modules = { /***/ 71968: /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => { /* harmony export */ __webpack_require__.d(__webpack_exports__, { /* harmony export */ p: () => (/* binding */ preventDefaultAndStopPropagation), /* harmony export */ s: () => (/* binding */ stopPropagation), /* harmony export */ t: () => (/* binding */ tryToDispatchKoliBriEvent) /* harmony export */ }); /*! * KoliBri - The accessible HTML-Standard */ function stopPropagation(t){t.stopImmediatePropagation(),t.stopPropagation()}function createKoliBriEvent(t,o){return new CustomEvent(`kol-${t}`,{bubbles:!0,cancelable:!0,composed:!0,detail:o})}function dispatchKoliBriEvent(t,o,n){return t.dispatchEvent(createKoliBriEvent(o,n))}function tryToDispatchKoliBriEvent(t,o,n){o&&dispatchKoliBriEvent(o,t,n)}function preventDefaultAndStopPropagation(t){t.preventDefault(),stopPropagation(t)} /***/ }), /***/ 85440: /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => { __webpack_require__.r(__webpack_exports__); /* harmony export */ __webpack_require__.d(__webpack_exports__, { /* harmony export */ kol_details: () => (/* binding */ KolDetails) /* harmony export */ }); /* harmony import */ var _index_62e5924b_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(91388); /* harmony import */ var _index_de9d4ee0_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(55304); /* harmony import */ var _events_29e84d75_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(71968); /*! * KoliBri - The accessible HTML-Standard */ class DetailsAnimationController{constructor(e,n,t){this.detailsElement=e,this.summaryElement=n,this.contentElement=t,this.isClosing=!1,this.isExpanding=!1,this.summaryElement.addEventListener("click",this.handleSummaryClick.bind(this))}handleSummaryClick(e){e.preventDefault(),this.isClosing||!this.detailsElement.open?this.open():(this.isExpanding||this.detailsElement.open)&&this.collapse()}open(){this.detailsElement.open=!0,window.requestAnimationFrame(this.expand.bind(this))}expand(){this.isExpanding=!0,this.animateContentHeight("expand")}collapse(){this.isClosing=!0,this.animateContentHeight("collapse")}animateContentHeight(e){let n="expand"===e?0:this.contentElement.offsetHeight,t="expand"===e?this.contentElement.offsetHeight:0;this.animation&&(n=this.contentElement.offsetHeight,this.animation.cancel(),"expand"===e&&(t=this.contentElement.offsetHeight)),this.animation=this.contentElement.animate({height:[`${n}px`,`${t}px`]},{duration:matchMedia("(prefers-reduced-motion)").matches?0:250,easing:"ease-out"}),this.animation.addEventListener("finish",(()=>{this.onAnimationFinish()}),{once:!0}),this.animation.addEventListener("cancel",(()=>{"expand"===e?this.isExpanding=!1:this.isClosing=!1}),{once:!0})}onAnimationFinish(){this.detailsElement.open=this.isExpanding,this.animation=void 0,this.isClosing=!1,this.isExpanding=!1}}const defaultStyleCss="/*\n * This file contains all rules for accessibility.\n */\n@layer kol-global {\n :host {\n /*\n * Minimum size of interactive elements.\n */\n --a11y-min-size: 44px;\n /*\n * No element should be used without a background and font color whose contrast ratio has\n * not been checked. By initially setting the background color to white and the font color\n * to black, the contrast ratio is ensured and explicit adjustment is forced.\n */\n background-color: white;\n color: black;\n /*\n * Verdana is an accessible font that can be used without requiring additional loading time.\n */\n font-family: Verdana;\n }\n * {\n /*\n * This rule enables the word dividing for all texts. That is important for high zoom levels.\n */\n hyphens: auto;\n /*\n * Letter spacing is required for all texts.\n */\n letter-spacing: inherit;\n /*\n * This rule enables the word dividing for all texts. That is important for high zoom levels.\n */\n word-break: break-word;\n /*\n * Word spacing is required for all texts.\n */\n word-spacing: inherit;\n }\n /*\n * All interactive elements should have a minimum size of 44px.\n */\n /* input:not([type='checkbox'], [type='radio'], [type='range']), */\n /* option, */\n /* select, */\n /* textarea, */\n [role=button],\n button:not([role=link]),\n kol-input .input {\n min-height: var(--a11y-min-size);\n min-width: var(--a11y-min-size);\n }\n /*\n * Some interactive elements should not inherit the font-family and font-size.\n */\n a,\n button,\n h1,\n h2,\n h3,\n h4,\n h5,\n h6,\n input,\n option,\n select,\n textarea {\n /*\n * All elements should inherit the font family from his parent element.\n */\n font-family: inherit;\n /*\n * All elements should inherit the font size from his parent element.\n */\n font-size: inherit;\n }\n}\n/**\n * Sometimes we need the semantic element for accessibility reasons,\n * but we don't want to show it.\n *\n * - https://www.a11yproject.com/posts/how-to-hide-content/\n */\n.visually-hidden {\n clip: rect(0 0 0 0);\n clip-path: inset(50%);\n height: 1px;\n overflow: hidden;\n position: absolute;\n white-space: nowrap;\n width: 1px;\n}\n\n@layer kol-global {\n /*\n * Dieses CSS stellt sicher, dass der Standard-Style\n * von A und Button resettet werden.\n */\n :is(a, button) {\n background-color: transparent;\n border: none;\n margin: 0;\n padding: 0;\n width: 100%; /* 100% needed for custom width from outside */\n }\n /*\n * Ensure elements with hidden attribute to be actually not visible\n * @see https://meowni.ca/hidden.is.a.lie.html\n */\n [hidden] {\n display: none !important;\n }\n}\n@layer kol-global {\n :host {\n /*\n * The max-width is needed to prevent the table from overflowing the\n * parent node, if the table is wider than the parent node.\n */\n max-width: 100%;\n }\n * {\n /*\n * We prefer to box-sizing: border-box for all elements.\n */\n box-sizing: border-box;\n }\n /* KolSpan is a layout component with icons in all directions and a label text in the middle. */\n kol-span-wc {\n display: grid;\n place-items: center;\n }\n /* The sub span in KolSpan is the horizontal span with icon left and right and the label text in the middle. */\n kol-span-wc > span {\n display: flex;\n place-items: center;\n }\n a,\n button {\n cursor: pointer;\n }\n .hidden {\n display: none;\n visibility: hidden;\n }\n /* This is the text label. */\n .hide-label > kol-span-wc > span > span {\n display: none;\n }\n /* Reset browser agent style. */\n button:disabled {\n color: unset;\n }\n .disabled label,\n .disabled:focus-within label,\n [aria-disabled=true],\n [aria-disabled=true]:focus,\n [disabled],\n [disabled]:focus {\n cursor: not-allowed !important;\n opacity: 0.5 !important;\n outline: none !important;\n }\n [aria-disabled=true]:focus kol-span-wc,\n [disabled]:focus kol-span-wc {\n outline: none !important;\n }\n}\n@layer kol-component {\n :host {\n display: block;\n }\n}\n@layer kol-component {\n details {\n display: grid;\n }\n details > summary {\n cursor: pointer;\n display: flex;\n place-items: center;\n }\n details > summary > span {\n border-bottom-color: grey;\n border-bottom-style: solid;\n }\n details > summary:focus > span,\n details > summary:hover > span,\n details[open] > summary > span {\n border-bottom-color: #000;\n }\n .content {\n overflow: hidden;\n }\n details > kol-indented-text {\n margin: 0.25em 0 0 0.5em;\n }\n .icon.is-open::part(icon) {\n transform: rotate(90deg);\n }\n}",KolDetailsDefaultStyle0=defaultStyleCss,KolDetails=class{constructor(e){(0,_index_62e5924b_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,e),this.catchDetails=e=>{this.detailsElement=e},this.catchSummary=e=>{this.summaryElement=e,(0,_index_de9d4ee0_js__WEBPACK_IMPORTED_MODULE_1__.k)(this.host,this.summaryElement)},this.preventToggleIfDisabled=e=>{!0===this.state._disabled&&(0,_events_29e84d75_js__WEBPACK_IMPORTED_MODULE_2__.p)(e)},this.handleToggle=e=>{clearTimeout(this.toggleTimeout),this.toggleTimeout=setTimeout((()=>{var n,t,i,a;Boolean(null===(n=this.detailsElement)||void 0===n?void 0:n.open)!==this.state._open&&(this._open=Boolean(null===(t=this.detailsElement)||void 0===t?void 0:t.open),(0,_events_29e84d75_js__WEBPACK_IMPORTED_MODULE_2__.t)("toggle",this.host,this._open),"function"==typeof(null===(i=this.state._on)||void 0===i?void 0:i.onToggle)&&(null===(a=this.state._on)||void 0===a||a.onToggle(e,this._open)))}),25)},this._disabled=!1,this._label=void 0,this._on=void 0,this._open=!1,this.state={_label:"",_on:{}}}render(){return (0,_index_62e5924b_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_62e5924b_js__WEBPACK_IMPORTED_MODULE_0__.H,{key:"19a9ba1643545d503b5c3c24da5bf25c00c7b5be"},(0,_index_62e5924b_js__WEBPACK_IMPORTED_MODULE_0__.h)("details",{key:"3ab637c36145d8bfc38fd812301f9b2b39d93c0e",ref:this.catchDetails,class:{disabled:!0===this.state._disabled,open:!0===this.state._open},onToggle:this.handleToggle},(0,_index_62e5924b_js__WEBPACK_IMPORTED_MODULE_0__.h)("summary",{key:"300c130a467763e1d484effebfe9ec4356db376f",ref:this.catchSummary,"aria-disabled":this.state._disabled?"true":void 0,onClick:this.preventToggleIfDisabled,onKeyPress:this.preventToggleIfDisabled,tabIndex:this.state._disabled?-1:void 0},(0,_index_62e5924b_js__WEBPACK_IMPORTED_MODULE_0__.h)("kol-icon",{key:"5f936b81f501e1dc4e42949880557a2036b776a8",_label:"",_icons:"codicon codicon-chevron-right",class:"icon "+(this.state._open?"is-open":"")}),(0,_index_62e5924b_js__WEBPACK_IMPORTED_MODULE_0__.h)("span",{key:"9919b851361c1f50b88b35035c8db92eecc86a8c"},this.state._label)),(0,_index_62e5924b_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"d07f7f1d5358b1f6363e0d3ee129054f77e63c7e","aria-hidden":!1===this.state._open?"true":void 0,class:"content",ref:e=>this.contentElement=e},(0,_index_62e5924b_js__WEBPACK_IMPORTED_MODULE_0__.h)("kol-indented-text",{key:"673da4e5cf44d5e14106a76ec6032165f25aa1b4"},(0,_index_62e5924b_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{key:"ccc843d742d1fa91e9ddd38dce808d547a0f85b8"})))))}validateDisabled(e){(0,_index_de9d4ee0_js__WEBPACK_IMPORTED_MODULE_1__.l)(this,e)}validateLabel(e){(0,_index_de9d4ee0_js__WEBPACK_IMPORTED_MODULE_1__.v)(this,e,{required:!0})}validateOn(e){"object"==typeof e&&null!==e&&"function"==typeof e.onToggle&&(0,_index_de9d4ee0_js__WEBPACK_IMPORTED_MODULE_1__.m)(this,"_on",e)}validateOpen(e){(0,_index_de9d4ee0_js__WEBPACK_IMPORTED_MODULE_1__.n)(this,e)}componentWillLoad(){this.validateDisabled(this._disabled),this.validateLabel(this._label),this.validateOn(this._on),this.validateOpen(this._open)}componentDidLoad(){if(this.detailsElement&&this.summaryElement&&this.contentElement){const e=new DetailsAnimationController(this.detailsElement,this.summaryElement,this.contentElement);this.state._open&&e.open()}}get host(){return (0,_index_62e5924b_js__WEBPACK_IMPORTED_MODULE_0__.g)(this)}static get watchers(){return{_disabled:["validateDisabled"],_label:["validateLabel"],_on:["validateOn"],_open:["validateOpen"]}}};KolDetails.style={default:KolDetailsDefaultStyle0}; /***/ }) }; ;