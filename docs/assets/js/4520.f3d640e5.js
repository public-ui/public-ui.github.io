"use strict";
exports.id = 4520;
exports.ids = [4520];
exports.modules = {

/***/ 98852:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   t: () => (/* binding */ translate)
/* harmony export */ });
/* harmony import */ var _i18n_3dcfca85_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(46892);
/* harmony import */ var _reuse_108ee8f5_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(28968);
/*!
 * KoliBri - The accessible HTML-Standard
 */
let translate=(t,e)=>{var n;return(null!==(n=(0,_i18n_3dcfca85_js__WEBPACK_IMPORTED_MODULE_0__.g)())&&void 0!==n?n:(0,_i18n_3dcfca85_js__WEBPACK_IMPORTED_MODULE_0__.i)("de")).translate(t,e)};"test"===_reuse_108ee8f5_js__WEBPACK_IMPORTED_MODULE_1__.p&&(translate=t=>t);

/***/ }),

/***/ 94520:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   kol_logo: () => (/* binding */ KolLogo)
/* harmony export */ });
/* harmony import */ var _index_022cbbb8_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(65224);
/* harmony import */ var _bund_ad41b762_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(33043);
/* harmony import */ var _i18n_59fb5a46_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(98852);
/* harmony import */ var _prop_validators_db70e3c4_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(70728);
/*!
 * KoliBri - The accessible HTML-Standard
 */
const defaultStyleCss="/*\n * This file contains all rules for accessibility.\n */\n@layer kol-global {\n  :host {\n    /*\n     * Minimum size of interactive elements.\n     */\n    --a11y-min-size: 44px;\n    /*\n     * No element should be used without a background and font color whose contrast ratio has\n     * not been checked. By initially setting the background color to white and the font color\n     * to black, the contrast ratio is ensured and explicit adjustment is forced.\n     */\n    background-color: white;\n    color: black;\n    /*\n     * Verdana is an accessible font that can be used without requiring additional loading time.\n     */\n    font-family: Verdana;\n  }\n  * {\n    /*\n     * This rule enables the word dividing for all texts. That is important for high zoom levels.\n     */\n    hyphens: auto;\n    /*\n     * Letter spacing is required for all texts.\n     */\n    letter-spacing: inherit;\n    /*\n     * This rule enables the word dividing for all texts. That is important for high zoom levels.\n     */\n    word-break: break-word;\n    /*\n     * Word spacing is required for all texts.\n     */\n    word-spacing: inherit;\n  }\n  /*\n   * All interactive elements should have a minimum size of 44px.\n   */\n  /* input:not([type='checkbox'], [type='radio'], [type='range']), */\n  /* option, */\n  /* select, */\n  /* textarea, */\n  [role=button],\n  button:not([role=link]),\n  .kol-input .input {\n    min-height: var(--a11y-min-size);\n    min-width: var(--a11y-min-size);\n  }\n  /*\n   * Some interactive elements should not inherit the font-family and font-size.\n   */\n  a,\n  button,\n  h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6,\n  input,\n  option,\n  select,\n  textarea {\n    /*\n     * All elements should inherit the font family from his parent element.\n     */\n    font-family: inherit;\n    /*\n     * All elements should inherit the font size from his parent element.\n     */\n    font-size: inherit;\n  }\n}\n/**\n * Sometimes we need the semantic element for accessibility reasons,\n * but we don't want to show it.\n *\n * - https://www.a11yproject.com/posts/how-to-hide-content/\n */\n.visually-hidden {\n  clip: rect(0 0 0 0);\n  clip-path: inset(50%);\n  height: 1px;\n  overflow: hidden;\n  position: absolute;\n  white-space: nowrap;\n  width: 1px;\n}\n\n@layer kol-global {\n  /*\n   * Dieses CSS stellt sicher, dass der Standard-Style\n   * von A und Button resettet werden.\n   */\n  :is(a, button) {\n    background-color: transparent;\n    border: none;\n    margin: 0;\n    padding: 0;\n    width: 100%; /* 100% needed for custom width from outside */\n  }\n  /*\n   * Ensure elements with hidden attribute to be actually not visible\n   * @see https://meowni.ca/hidden.is.a.lie.html\n   */\n  [hidden] {\n    display: none !important;\n  }\n}\n@layer kol-global {\n  :host {\n    /*\n     * The max-width is needed to prevent the table from overflowing the\n     * parent node, if the table is wider than the parent node.\n     */\n    max-width: 100%;\n  }\n  * {\n    /*\n     * We prefer to box-sizing: border-box for all elements.\n     */\n    box-sizing: border-box;\n  }\n  /* KolSpan is a layout component with icons in all directions and a label text in the middle. */\n  .kol-span-wc {\n    display: grid;\n    place-items: center;\n  }\n  /* The sub span in KolSpan is the horizontal span with icon left and right and the label text in the middle. */\n  .kol-span-wc > span {\n    display: flex;\n    place-items: center;\n  }\n  a,\n  button {\n    cursor: pointer;\n  }\n  /* This is the text label. */\n  .hide-label > .kol-span-wc > span > span {\n    display: none;\n  }\n  /* Reset browser agent style. */\n  button:disabled {\n    color: unset;\n  }\n  .disabled label,\n  .disabled:focus-within label,\n  [aria-disabled=true],\n  [aria-disabled=true]:focus,\n  [disabled],\n  [disabled]:focus {\n    cursor: not-allowed;\n    opacity: 0.5;\n    outline: none;\n  }\n  [aria-disabled=true]:focus .kol-span-wc,\n  [disabled]:focus .kol-span-wc {\n    outline: none !important;\n  }\n}\n@layer kol-component {\n  :host {\n    display: inline-block;\n    font-size: calc(16rem / var(--kolibri-root-font-size, 16));\n  }\n  text {\n    font-size: 16px;\n    letter-spacing: normal;\n    word-spacing: normal;\n  }\n  svg {\n    max-height: 100%;\n  }\n}",KolLogoDefaultStyle0=defaultStyleCss;function enumToArray(n,e=new Map){return Object.entries(n).map((([n,t])=>{e.set(t,n)})),e}const ENUM_AS_MAP=enumToArray(_bund_ad41b762_js__WEBPACK_IMPORTED_MODULE_0__.b,enumToArray(_bund_ad41b762_js__WEBPACK_IMPORTED_MODULE_0__.d,enumToArray(_bund_ad41b762_js__WEBPACK_IMPORTED_MODULE_0__.B)));function getAriaLabel(n){return ENUM_AS_MAP.has(n)?ENUM_AS_MAP.get(n):""}const Adler=()=>(0,_index_022cbbb8_js__WEBPACK_IMPORTED_MODULE_1__.h)("path",{d:"M21.72,12.77c0.04-0.33,0.06-0.67,0.06-1c0-0.2,0-0.43,0-0.69c3.06,0,5.74-2.25,5.74-4.78\nc-0.09-1.07-0.56-2.08-1.32-2.84l0.32-0.07c1,0.89,1.61,2.14,1.7,3.48c0,3-3,5.85-6.5,5.92 M18.64,2.21\nc-0.05-0.33-0.19-0.64-0.39-0.91c0-0.31,0.14-0.61,0.64-0.36c-0.27,0.27-0.06,0.76-0.06,0.76s0.55-0.26,0.44-0.62\nC20.09,1.28,19.5,2.38,18.64,2.21 M17.93,3.77c-0.12-0.47-0.34-0.9-0.64-1.27c-0.3-0.42-0.77-0.69-1.29-0.73\nc-0.34,0.03-0.68,0.12-1,0.25c-0.16-0.28-0.27-0.58-0.32-0.9c0-0.22,0.38-0.44,1.1-0.44c1.58,0,2.52,0.71,2.52,1.91\nC18.26,3.01,18.14,3.41,17.93,3.77 M22,24.16c0.13,0,0.26,0.02,0.38,0.07c0.64,1.3,1.4,2.53,2.29,3.68l0,0l0,0\nc0.81-0.14,1.63-0.22,2.45-0.24l0,0c0.1-0.01,0.2,0.01,0.28,0.07c0.07,0.09,0.1,0.2,0.09,0.31c-0.01,0.28-0.08,0.55-0.21,0.79\nc-0.46-0.4-1.07-0.59-1.68-0.51c-0.24,0.01-0.48,0.05-0.71,0.12h-0.07h-0.07l0.48,0.49c0.77,0.83,1.44,1.43,1.44,1.83\nc-0.04,0.31-0.22,0.58-0.48,0.74c-0.22-0.98-0.8-1.84-1.62-2.42h-0.06v0.27c0,0.19,0,0.47,0,0.77c0,1.49-0.15,1.72-0.67,1.72\nc-0.09,0.01-0.19,0.01-0.28,0c0.33-0.49,0.48-1.08,0.41-1.67v-0.7c0-0.27,0.03-0.53,0.06-0.8v-0.11h-0.08\nc-0.33-0.05-0.67-0.09-1-0.1c-0.57-0.07-1.14,0.07-1.6,0.41c-0.24-0.18-0.41-0.44-0.48-0.73c0-0.32,0.19-0.34,0.45-0.34\nc0.14-0.01,0.27-0.01,0.41,0c0.59,0.09,1.18,0.13,1.78,0.12h0.06v-0.06c-0.5-1.13-1.18-2.17-2-3.09c0.1-0.35,0.2-0.59,0.54-0.59\nM12.64,27.87v0.06h0.06c0.55-0.01,1.1-0.06,1.64-0.16c0.14-0.01,0.27-0.01,0.41,0c0.26,0,0.45,0,0.45,0.34\nc-0.07,0.29-0.24,0.55-0.48,0.73c-0.46-0.34-1.03-0.49-1.6-0.41c-0.33,0.01-0.67,0.05-1,0.1H12v0.11\nc0.03,0.27,0.06,0.53,0.06,0.8v0.7c-0.05,0.58,0.1,1.15,0.42,1.63c-0.09,0.01-0.19,0.01-0.28,0c-0.52,0-0.67-0.23-0.67-1.72\nc0-0.3,0-0.58,0-0.77V29l-0.06,0.05c-0.82,0.58-1.39,1.44-1.61,2.42c-0.28-0.14-0.47-0.4-0.53-0.7c0-0.43,0.65-1.07,1.39-1.81\nl0.43-0.43v-0.06h-0.14c-0.23-0.07-0.47-0.11-0.71-0.12c-0.61-0.08-1.22,0.11-1.68,0.51c-0.13-0.24-0.2-0.51-0.21-0.79\nc0.01-0.11,0.06-0.22,0.14-0.3c0.08-0.06,0.18-0.08,0.28-0.07l0,0c0.82,0.02,1.64,0.1,2.45,0.24l0,0l0,0\nc0.88-1.15,1.64-2.38,2.28-3.68c0.12-0.05,0.25-0.07,0.38-0.07c0.35,0,0.44,0.24,0.54,0.59c-0.82,0.92-1.5,1.96-2,3.09\nM7.78,6.87c0.08-1.36,0.7-2.62,1.72-3.52l0.32,0.07C9.06,4.19,8.6,5.19,8.51,6.26c0,2.56,2.73,4.78,5.82,4.78\nc0,0.22,0,0.45,0,0.69c-0.01,0.35,0,0.69,0.03,1.04c-3.5,0-6.58-2.86-6.58-5.92 M31.25,12.23c1.57,2.49,2.8,2.45,4.66,2.45\nc-1.19-0.97-2.21-2.14-3-3.46L30,6.65c-0.29-1.44-1.03-2.75-2.12-3.73c0.31-0.1,0.6-0.24,0.87-0.42c-1.88,0-3.73-1-4.75-1\nc-0.55-0.05-1.03,0.36-1.08,0.91c0,0.58,0.63,1.16,1.73,1.16c0.31,0,0.62-0.04,0.92-0.09c0.65,0.74,1.03,1.67,1.08,2.65\nc0,2-2.41,3.58-4.83,3.58h-0.41c-0.5-0.67-0.84-1.45-1-2.28c0-1.6,1.05-2.9,1.05-4.48c0-0.68-0.24-1.33-0.67-1.85\nc0.29-0.23,0.53-0.52,0.7-0.85c-0.22,0.08-0.45,0.11-0.68,0.09c-1.16,0-2.11-0.3-3-0.3c-0.53,0-0.67,0.16-0.67,0.31\nc-0.01,0.05-0.01,0.1,0,0.15c-0.19-0.08-0.39-0.13-0.59-0.17c-0.29-0.05-0.58-0.08-0.88-0.08c-1.13,0-1.52,0.47-1.52,0.87\nc0.07,0.52,0.27,1.01,0.57,1.44c0.4-0.2,0.84-0.31,1.28-0.34c0.6,0,1.13,0.57,1.41,1.24c-0.29,0.05-0.59,0.07-0.88,0.07\nc-0.68-0.03-1.36-0.16-2-0.39l0,0c0,0,0.31,0.56,0.92,0.78c0.72,0.22,1.46,0.37,2.21,0.45c-0.08,0.21-0.23,0.38-0.43,0.49\nc-0.05,0.02-0.09,0.02-0.14,0c-0.74-0.14-1.45-0.35-2.14-0.65H14.9c0,0.42,1.09,1.35,2.07,1.71c-1.06,1.1-1.87,2.41-2.39,3.85\nh-0.41c-2.42,0-4.82-1.57-4.82-3.58c0.05-0.98,0.43-1.91,1.07-2.65c0.3,0.05,0.61,0.09,0.92,0.09c1.1,0,1.69-0.58,1.74-1.16\nc-0.04-0.55-0.52-0.96-1.07-0.92c0,0,0,0-0.01,0c-1,0-2.88,1-4.76,1C7.51,2.73,7.8,2.87,8.11,2.97C7.03,3.94,6.29,5.23,6,6.65\nl-2.87,4.59c-0.79,1.32-1.81,2.49-3,3.46c1.86,0,3.09,0,4.66-2.45L6.26,9.9c0.11,0.31,0.24,0.61,0.4,0.9l-2.97,4.67\nc-0.79,1.32-1.8,2.49-3,3.46c1.85,0,3.08,0,4.65-2.44l2.52-4c0.19,0.2,0.39,0.4,0.6,0.58l-3.59,5.7c-0.79,1.32-1.8,2.49-3,3.45\nc1.85,0,3.08,0.05,4.65-2.44L10,14.2c0.22,0.14,0.46,0.28,0.7,0.41l-4.27,6.77c-0.79,1.31-1.81,2.48-3,3.45\nc1.85,0,3.08,0,4.65-2.44l4.36-7c0.25,0.1,0.51,0.2,0.78,0.28l-4.95,7.9c-0.79,1.31-1.81,2.48-3,3.45c1.85,0,3.08,0.05,4.65-2.43\nl5.24-8.39h0.16c0.14,0.42,0.22,0.86,0.24,1.3c0,2.64-1.73,5-3.8,6.76c0.19,0.06,0.38,0.09,0.58,0.08c0.3,0.01,0.6-0.01,0.9-0.05\nc-0.57,1.13-1.24,2.21-2,3.23c-0.77-0.13-1.54-0.2-2.32-0.22c-0.67,0-0.75,0.4-0.75,0.75c-0.01,0.53,0.22,1.03,0.62,1.38\nc0.13-0.31,0.38-0.73,1.63-0.73h0.13C10.11,29.13,9,30.06,9,30.77c0.06,0.66,0.59,1.18,1.25,1.24c-0.02-0.14-0.02-0.28,0-0.42\nc0.13-0.69,0.48-1.33,1-1.8c-0.01,0.1-0.01,0.2,0,0.3c0,1.43,0.13,2.08,1,2.08c0.31-0.01,0.61-0.12,0.86-0.31\nc-0.5-0.44-0.73-1.11-0.62-1.77c0-0.21,0-0.41,0-0.69c0.02-0.2,0.02-0.41,0-0.61c0.24-0.02,0.47-0.02,0.71,0\nc0,0,1.29-0.1,1.6,0.57c0.35-0.32,0.86-0.78,0.86-1.27c0-0.33-0.16-0.71-0.83-0.71c-0.25,0-1,0.16-1.7,0.16\nc0.48-0.84,1.04-1.64,1.66-2.39c0.1,0.39,0.31,0.74,0.62,1c0.12-1.17,0.54-2.28,1.21-3.24c0.16,0.93,0.24,1.87,0.23,2.82\nc0,3.55-0.85,6.17-2.66,6.67c0.26,0.46,0.73,0.75,1.25,0.78c0.66,0,1-0.75,1.39-1.46c0.19,0.53,0.72,1.8,1.25,1.8\ns1.06-1.27,1.25-1.8c0.37,0.71,0.73,1.46,1.39,1.46c0.52-0.03,1-0.33,1.26-0.78c-1.82-0.5-2.67-3.12-2.67-6.67\nc-0.01-0.95,0.07-1.89,0.23-2.82c0.68,0.96,1.1,2.07,1.21,3.24c0.31-0.26,0.53-0.61,0.63-1c0.61,0.75,1.15,1.54,1.62,2.38\nc-0.66,0-1.45-0.16-1.7-0.16c-0.67,0-0.82,0.38-0.82,0.71c0,0.49,0.51,1,0.86,1.27c0.3-0.67,1.59-0.57,1.59-0.57\nc0.24-0.02,0.47-0.02,0.71,0c-0.02,0.2-0.02,0.41,0,0.61v0.69c0.11,0.66-0.12,1.33-0.62,1.77c0.25,0.19,0.55,0.3,0.86,0.31\nc0.91,0,1-0.65,1-2.08c0.01-0.1,0.01-0.2,0-0.3c0.52,0.47,0.87,1.11,1,1.8c0.02,0.14,0.02,0.28,0,0.42\nc0.61-0.11,1.06-0.62,1.12-1.23c0-0.74-1.15-1.67-1.52-2.08h0.13c1.25,0,1.5,0.42,1.63,0.73c0.4-0.35,0.63-0.85,0.62-1.38\nc0-0.35-0.07-0.75-0.75-0.75c-0.78,0.02-1.55,0.09-2.32,0.22c-0.76-1.02-1.43-2.1-2-3.23c0.3,0.04,0.6,0.06,0.9,0.05\nc0.19,0.01,0.39-0.02,0.57-0.08c-2.07-1.79-3.8-4.12-3.8-6.76c0.02-0.44,0.1-0.88,0.24-1.3h0.16l5.24,8.39\nc1.57,2.48,2.8,2.43,4.65,2.43c-1.19-0.97-2.21-2.14-3-3.45l-4.92-7.87c0.27-0.08,0.53-0.18,0.79-0.28l4.35,7\nc1.57,2.48,2.8,2.44,4.65,2.44c-1.19-0.97-2.21-2.14-3-3.45l-4.23-6.77c0.24-0.13,0.48-0.27,0.7-0.41l3.42,5.55\nc1.57,2.49,2.8,2.44,4.65,2.44c-1.19-0.97-2.21-2.13-3-3.45l-3.55-5.69c0.2-0.18,0.4-0.38,0.59-0.58l2.52,4\nc1.57,2.48,2.8,2.44,4.65,2.44c-1.2-0.97-2.21-2.14-3-3.46l-2.99-4.7c0.16-0.29,0.29-0.59,0.4-0.9L31.25,12.23z"}),KolLogo=class{constructor(n){(0,_index_022cbbb8_js__WEBPACK_IMPORTED_MODULE_1__.r)(this,n),this._org=void 0,this.state={_org:_bund_ad41b762_js__WEBPACK_IMPORTED_MODULE_0__.d["Informationstechnikzentrum Bund"]}}validateOrg(n){"string"==typeof n&&ENUM_AS_MAP.has(n)?(0,_prop_validators_db70e3c4_js__WEBPACK_IMPORTED_MODULE_2__.s)(this,"_org",n):(0,_prop_validators_db70e3c4_js__WEBPACK_IMPORTED_MODULE_2__.j)(`The abbreviation (${n}) used is not defined!`)}componentWillLoad(){this.validateOrg(this._org)}render(){var n;return (0,_index_022cbbb8_js__WEBPACK_IMPORTED_MODULE_1__.h)(_index_022cbbb8_js__WEBPACK_IMPORTED_MODULE_1__.H,{key:"eb43c9514719417f729a1c73826c19a0a92e2c9f",class:"kol-logo"},(0,_index_022cbbb8_js__WEBPACK_IMPORTED_MODULE_1__.h)("svg",{key:"840038582973d0c4b49a8db280684e1946527afa","aria-label":(0,_i18n_59fb5a46_js__WEBPACK_IMPORTED_MODULE_3__.t)("kol-logo-description",{placeholders:{orgShort:this.state._org,orgLong:getAriaLabel(this.state._org)}}),role:"img",viewBox:"0 0 225 100"},(0,_index_022cbbb8_js__WEBPACK_IMPORTED_MODULE_1__.h)("rect",{key:"cd8095e12985f67a4e7b267716898e6fff8add07",width:"100%",height:"100%",fill:"white"}),(0,_index_022cbbb8_js__WEBPACK_IMPORTED_MODULE_1__.h)("svg",{key:"537fcddc64e406319c6af1703cde8f61dd49ba7e",x:"0",y:"4",height:"75"},(0,_index_022cbbb8_js__WEBPACK_IMPORTED_MODULE_1__.h)(Adler,{key:"8987c99b9a13c2a627b2442af58b39aad06c7842"})),(0,_index_022cbbb8_js__WEBPACK_IMPORTED_MODULE_1__.h)("svg",{key:"9acb90fbb65c4c75d850e3fa91881c4481a3c8c7",x:"40.5",y:"3.5",height:"100"},(0,_index_022cbbb8_js__WEBPACK_IMPORTED_MODULE_1__.h)("rect",{key:"b8a4e853d12cb71016b6b16138198a7a1f8035a4",width:"5",height:"30"}),(0,_index_022cbbb8_js__WEBPACK_IMPORTED_MODULE_1__.h)("rect",{key:"7190ab2cb4c32823d1cd49335f51aa731b183250",y:"30",width:"5",height:"30",fill:"red"}),(0,_index_022cbbb8_js__WEBPACK_IMPORTED_MODULE_1__.h)("rect",{key:"2b1d9740b8690c731b37be6407c314cd677d7d6e",y:"60",width:"5",height:"30",fill:"#fc0"})),(0,_index_022cbbb8_js__WEBPACK_IMPORTED_MODULE_1__.h)("svg",{key:"9ce09f41d0797e663f18b49ff699ca645bb38693",x:"50",y:"0"},(0,_index_022cbbb8_js__WEBPACK_IMPORTED_MODULE_1__.h)("text",{key:"2a6146524db3b04d7f56efc6749a9b15c95e1418",x:"0",y:"-0.05em","font-family":"BundesSans Web",style:{backgroundColor:"white",color:"black"}},_bund_ad41b762_js__WEBPACK_IMPORTED_MODULE_0__.f.has(this.state._org)?(0,_index_022cbbb8_js__WEBPACK_IMPORTED_MODULE_1__.h)("tspan",null,null===(n=_bund_ad41b762_js__WEBPACK_IMPORTED_MODULE_0__.f.get(this.state._org))||void 0===n?void 0:n.map(((n,e)=>(0,_index_022cbbb8_js__WEBPACK_IMPORTED_MODULE_1__.h)("tspan",{x:"0",dy:"1.1em",key:`kol-logo-text-${e}`},n)))):(0,_index_022cbbb8_js__WEBPACK_IMPORTED_MODULE_1__.h)("tspan",{fill:"red"},(0,_index_022cbbb8_js__WEBPACK_IMPORTED_MODULE_1__.h)("tspan",{x:"0",dy:"1.1em"},"Der Schlüsselwert"),(0,_index_022cbbb8_js__WEBPACK_IMPORTED_MODULE_1__.h)("tspan",{x:"0",dy:"1.1em","font-weight":"bold"},"'",this.state._org,"'"),(0,_index_022cbbb8_js__WEBPACK_IMPORTED_MODULE_1__.h)("tspan",{x:"0",dy:"1.1em"},"ist nicht definiert."),(0,_index_022cbbb8_js__WEBPACK_IMPORTED_MODULE_1__.h)("tspan",{x:"0",dy:"1.1em"},"oder freigegeben."))))))}static get watchers(){return{_org:["validateOrg"]}}};KolLogo.style={default:KolLogoDefaultStyle0};

/***/ }),

/***/ 70728:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ koliBriA11yColorContrast),
/* harmony export */   B: () => (/* binding */ koliBriQuerySelectorAll),
/* harmony export */   C: () => (/* binding */ koliBriQuerySelectorColors),
/* harmony export */   D: () => (/* binding */ stringifyJson),
/* harmony export */   K: () => (/* binding */ KoliBriDevHelper),
/* harmony export */   a: () => (/* binding */ a11yHint),
/* harmony export */   b: () => (/* binding */ watchBoolean),
/* harmony export */   c: () => (/* binding */ a11yHintDisabled),
/* harmony export */   d: () => (/* binding */ s),
/* harmony export */   e: () => (/* binding */ a11yHintLabelingLandmarks),
/* harmony export */   f: () => (/* binding */ featureHint),
/* harmony export */   g: () => (/* binding */ watchJsonArrayString),
/* harmony export */   h: () => (/* binding */ uiUxHintMillerscheZahl),
/* harmony export */   i: () => (/* binding */ watchString),
/* harmony export */   j: () => (/* binding */ devHint),
/* harmony export */   k: () => (/* binding */ watchNumber),
/* harmony export */   l: () => (/* binding */ devWarning),
/* harmony export */   m: () => (/* binding */ mapString2Unknown),
/* harmony export */   n: () => (/* binding */ deprecatedHint),
/* harmony export */   o: () => (/* binding */ objectObjectHandler),
/* harmony export */   p: () => (/* binding */ parseJson),
/* harmony export */   q: () => (/* binding */ setEventTarget),
/* harmony export */   r: () => (/* binding */ rgba$1),
/* harmony export */   s: () => (/* binding */ setState),
/* harmony export */   t: () => (/* binding */ emptyStringByArrayHandler),
/* harmony export */   u: () => (/* binding */ uiUxHint),
/* harmony export */   v: () => (/* binding */ koliBriQuerySelector),
/* harmony export */   w: () => (/* binding */ watchValidator),
/* harmony export */   x: () => (/* binding */ mapBoolean2String),
/* harmony export */   y: () => (/* binding */ mapStringOrBoolean2String),
/* harmony export */   z: () => (/* binding */ KoliBriUtils)
/* harmony export */ });
/* harmony import */ var _index_db4aa6e4_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(44312);
/* harmony import */ var _dev_utils_1ca991a2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20444);
/*!
 * KoliBri - The accessible HTML-Standard
 */
const a11yCache=new Set,a11yHint=(e,t)=>{(!1===a11yCache.has(e)||(null==t?void 0:t.force))&&(a11yCache.add(e),_dev_utils_1ca991a2_js__WEBPACK_IMPORTED_MODULE_0__.L.debug([e].concat((null==t?void 0:t.details)||[]),{classifier:"✋ a11y",forceLog:!!(null==t?void 0:t.force),overwriteStyle:"; background-color: #09f"}))},deprecatedCache=new Set,deprecatedHint=(e,t)=>{(!1===deprecatedCache.has(e)||(null==t?void 0:t.force))&&(deprecatedCache.add(e),_dev_utils_1ca991a2_js__WEBPACK_IMPORTED_MODULE_0__.L.warn([e].concat((null==t?void 0:t.details)||[]),{classifier:"🔥 deprecated",forceLog:!!(null==t?void 0:t.force),overwriteStyle:"; background-color: #f00"}))},devCache=new Set,devHint=(e,t)=>{(!1===devCache.has(e)||(null==t?void 0:t.force))&&(devCache.add(e),_dev_utils_1ca991a2_js__WEBPACK_IMPORTED_MODULE_0__.L.debug([e].concat((null==t?void 0:t.details)||[]),{classifier:"💻 dev",forceLog:!!(null==t?void 0:t.force),overwriteStyle:"; background-color: #f09"}))},devWarning=(e,t)=>{(!1===devCache.has(e)||(null==t?void 0:t.force))&&(devCache.add(e),_dev_utils_1ca991a2_js__WEBPACK_IMPORTED_MODULE_0__.L.warn([e].concat((null==t?void 0:t.details)||[]),{classifier:"⚠️ dev",forceLog:!!(null==t?void 0:t.force),overwriteStyle:"; background-color: #f09"}))},featureCache=new Set,featureHint=(e,t=!1,r)=>{(!1===featureCache.has(e)||(null==r?void 0:r.force))&&(featureCache.add(e),e+=!0===t?" ✅":"",_dev_utils_1ca991a2_js__WEBPACK_IMPORTED_MODULE_0__.L.debug([e].concat((null==r?void 0:r.details)||[]),{classifier:"🌟 feature",forceLog:!!(null==r?void 0:r.force),overwriteStyle:"; background-color: #309"}))};devHint("We appreciate any feedback, comments, screenshots, or demo links of an application based on KoliBri (kolibri@itzbund.de). Thank you!");const uiUxCache=new Set,uiUxHint=(e,t)=>{(!1===uiUxCache.has(e)||(null==t?void 0:t.force))&&(uiUxCache.add(e),_dev_utils_1ca991a2_js__WEBPACK_IMPORTED_MODULE_0__.L.debug([e].concat((null==t?void 0:t.details)||[]),{classifier:"📑 ui/ux",forceLog:!!(null==t?void 0:t.force),overwriteStyle:"; background-color: #060;"}))},a11yHintDisabled=()=>{a11yHint('"Disabled" limits accessibility and visibility. From an accessibility perspective, we recommend using the readonly attribute instead of disabled.\n- https://uxdesign.cc/is-it-ok-to-grey-out-disabled-buttons-8afa74a0fae')},a11yHintLabelingLandmarks=e=>{"string"==typeof e&&""!==e||a11yHint("Some structural elements, such as the nav tag, can be used multiple times on a webpage. To distinguish between similarly named structural elements, it is necessary to set an ARIA label.\n- https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/Navigation_Role#accessibility_concerns")},uiUxHintMillerscheZahl=(e,t=8)=>{t>7&&uiUxHint(`[${e}] Within navigation structures, it is recommended to use no more than 7 menu items.\n\nLink:\n- https://en.wikipedia.org/wiki/The_Magical_Number_Seven,_Plus_or_Minus_Two`)};var n=.2126,r=.7152,t=.0722,e=1/12.92;function u(e){return Math.pow((e+.055)/1.055,2.4)}function a(o){var a=o[0]/255,i=o[1]/255,l=o[2]/255,s=a<=.03928?a*e:u(a),c=i<=.03928?i*e:u(i),d=l<=.03928?l*e:u(l);return s*n+c*r+d*t}function i(e){var t=255;8===(e=e.replace(/^#/,"")).length&&(t=parseInt(e.slice(6,8),16),e=e.substring(0,6)),4===e.length&&(t=parseInt(e.slice(3,4).repeat(2),16),e=e.substring(0,3)),3===e.length&&(e=e[0]+e[0]+e[1]+e[1]+e[2]+e[2]);var r=parseInt(e,16);return[r>>16,r>>8&255,255&r,t]}function c(e,t){return(Math.max(e,t)+.05)/(Math.min(e,t)+.05)}function o(e,t){return c(a(e),a(t))}function s(e,t){return o(i(e),i(t))}function f(e){return e>=7?"AAA":e>=4.5?"AA":e>=3?"AA Large":"Fail"}var rgbaConvert={exports:{}};function arr(e){var t=parse(e);return 3==t.length?t.concat(255):(t[3]=Math.round(t[3]),t)}function obj(e){var t=parse(e);return{r:t[0],g:t[1],b:t[2],a:3==t.length?255:Math.round(t[3])}}function css(e){var t=parse(e);return 3==t.length&&t.push(255),255==t[3]?"rgb("+t[0]+", "+t[1]+", "+t[2]+")":0==t[3]?"rgba("+t[0]+", "+t[1]+", "+t[2]+", 0)":"rgba("+t[0]+", "+t[1]+", "+t[2]+", "+String(t[3]/255).substr(1)+")"}function hex(e){3==(t=parse(e)).length&&t.push(255);var t,r=255==t[3],o=num2hex(t[0]),n=num2hex(t[1]),a=num2hex(t[2]),i=isshort(o,n,a,t=num2hex(Math.round(t[3])));return r?i?"#"+o.charAt(0)+n.charAt(0)+a.charAt(0):"#"+o+n+a:i?"#"+o.charAt(0)+n.charAt(0)+a.charAt(0)+t.charAt(0):"#"+o+n+a+t}function num(e){var t=parse(e);return 3==t.length?t.push(255):t[3]=Math.round(t[3]),(t[3]<<24>>>0|t[0]<<16|t[1]<<8|t[2])>>>0}function parse(e){return"string"==typeof e?name(e=e.toLowerCase())||hex3(e)||hex6(e)||rgb(e)||rgba(e)||[0,0,0,255]:object(e)||array(e)||number(e)||[0,0,0,255]}function num2hex(e){var t=e.toString(16);return 1==t.length?"0"+t:t}function isshort(e,t,r,o){var n=["ff","00","11","22","33","44","55","66","77","88","99","aa","bb","cc","dd","ee"];return-1!=n.indexOf(e)&&-1!=n.indexOf(t)&&-1!=n.indexOf(r)&&-1!=n.indexOf(o)}function name(e){return"red"==e?[255,0,0]:"green"==e?[0,255,0]:"blue"==e?[0,0,255]:"black"==e?[0,0,0]:"white"==e?[255,255,255]:"cyan"==e?[0,255,255]:"gray"==e||"grey"==e?[128,128,128]:"magenta"==e||"pink"==e?[255,0,255]:"yellow"==e?[255,255,0]:void 0}function hex2num(e){return 1==e.length?parseInt(e+e,16):parseInt(e,16)}function hex3(e){var t=e.replace(/^#/,""),r=t.length;if(3==r||4==r){var o=hex2num(t[0]),n=hex2num(t[1]),a=hex2num(t[2]),i=3==r?255:hex2num(t[3]);if(isNaN(o)||isNaN(n)||isNaN(a)||isNaN(i))return;return[o,n,a,i]}}function hex6(e){var t=e.replace(/^#/,""),r=t.length;if(6==r||8==r){var o=hex2num(t.slice(0,2)),n=hex2num(t.slice(2,4)),a=hex2num(t.slice(4,6)),i=6==r?255:hex2num(t.slice(6,8));if(isNaN(o)||isNaN(n)||isNaN(a)||isNaN(i))return;return[o,n,a,i]}}function getnum(e,t){return"number"!=typeof e||!0===t&&Math.floor(e)!==e?-1:e>=0&&e<=255?e:-1}function object(e){if("[object Object]"===Object.prototype.toString.call(e)&&Object.getPrototypeOf(e)===Object.getPrototypeOf({})){var t=getnum(null!=e.r?e.r:null!=e.red?e.red:0,!0),r=getnum(null!=e.g?e.g:null!=e.green?e.green:0,!0),o=getnum(null!=e.b?e.b:null!=e.blue?e.blue:0,!0),n=getnum(null!=e.a?e.a:null!=e.alpha?e.alpha:255,!0);if(-1!=t&&-1!=r&&-1!=o&&-1!=n)return[t,r,o,n]}}function array(e){if(Array.isArray(e)&&(3==e.length||4==e.length)){var t=getnum(e[0],!0),r=getnum(e[1],!0),o=getnum(e[2],!0),n=getnum(null!=e[3]?e[3]:255,!0);if(-1!=t&&-1!=r&&-1!=o&&-1!=n)return[t,r,o,n]}}function number(e){if("number"==typeof e&&Math.floor(e)==e&&e<=4294967295&&e>=0)return[e>>16&255,e>>8&255,255&e,e>>24&255]}function rgb(e){if("rgb("==e.substr(0,4)){var t=(e=e.match(/^rgb\(([^)]+)\)/)[1]).split(/ *, */).map(Number),r=getnum(t[0],!0),o=getnum(t[1],!0),n=getnum(t[2],!0);if(-1!=r&&-1!=o&&-1!=n)return[r,o,n,255]}}function rgba(e){if("rgba("==e.substr(0,5)){var t=(e=e.match(/^rgba\(([^)]+)\)/)[1]).split(/ *, */).map(Number),r=getnum(t[0],!0),o=getnum(t[1],!0),n=getnum(t[2],!0),a=getnum(255*t[3]);if(-1!=r&&-1!=o&&-1!=n&&-1!=a)return[r,o,n,a]}}rgbaConvert.exports=arr,rgbaConvert.exports.arr=arr,rgbaConvert.exports.obj=obj,rgbaConvert.exports.css=css,rgbaConvert.exports.hex=hex,rgbaConvert.exports.num=num;const rgba$1=rgbaConvert.exports,pushNodes=(e,t)=>{t.forEach((t=>{!1===e.has(t)&&e.add(t)}))},querySelectorAll=(e,t=document)=>{if(t instanceof Document||t instanceof HTMLElement||t instanceof ShadowRoot){const r=new Set;pushNodes(r,t.querySelectorAll(e));const o=t.querySelectorAll('[class*="hydrated"]');for(let t=0;t<o.length;t++){const n=o[t].shadowRoot;pushNodes(r,querySelectorAll(e,"object"==typeof n&&null!==n?n:o[t]))}return Array.from(r)}throw new Error("The parameter document for the method querySelectorAll is not type of Document, HTMLElement or ShadowRoot.")},querySelector=(e,t=document)=>{if(t instanceof Document||t instanceof HTMLElement||t instanceof ShadowRoot){let r=t.querySelector(e);if(null===r){const o=t.querySelectorAll('[class*="hydrated"]');for(let t=0;t<o.length;t++){const n=o[t].shadowRoot;if(r=querySelector(e,"object"==typeof n&&null!==n?n:o[t]),null!==r)break}}return r}throw new Error("The parameter document for the method querySelector is not type of Document, HTMLElement or ShadowRoot.")},OBJECT_OBJECT=/\[object Object\]/,objectObjectHandler=(e,t)=>{"string"==typeof e&&OBJECT_OBJECT.test(e)||t()},emptyStringByArrayHandler=(e,t)=>{"string"==typeof e&&""===e||t()},setEventTarget=(e,t)=>{(0,_dev_utils_1ca991a2_js__WEBPACK_IMPORTED_MODULE_0__.a)()&&(_dev_utils_1ca991a2_js__WEBPACK_IMPORTED_MODULE_0__.L.debug([e,t]),_dev_utils_1ca991a2_js__WEBPACK_IMPORTED_MODULE_0__.L.debug("↑ We propagate the (submit) event to this target.")),Object.defineProperty(e,"target",{value:t,writable:!1})},patchState=e=>{var t,r,o;null===(t=e.nextHooks)||void 0===t||t.forEach(((t,r)=>{var o;const n=t.get("beforePatch");"function"==typeof n&&n(null===(o=e.nextState)||void 0===o?void 0:o.get(r),e.nextState,e,r)})),(null===(r=e.nextState)||void 0===r?void 0:r.size)>0&&(e.state=Object.assign(Object.assign({},e.state),Object.fromEntries(e.nextState)),delete e.nextState,null===(o=e.nextHooks)||void 0===o||o.forEach(((t,r)=>{const o=t.get("afterPatch");"function"==typeof o&&o(e.state[r],e.state,e,r)}))),delete e.nextHooks},setState=(e,t,r,o={})=>{var n,a;void 0===e.nextHooks&&(e.nextHooks=new Map),void 0===e.nextState&&(e.nextState=new Map);e.nextHooks.get(t)instanceof Map==!1&&e.nextHooks.set(t,new Map),"function"==typeof o.afterPatch&&(null===(n=e.nextHooks.get(t))||void 0===n||n.set("afterPatch",o.afterPatch)),"function"==typeof o.beforePatch&&(null===(a=e.nextHooks.get(t))||void 0===a||a.set("beforePatch",o.beforePatch)),e.nextState.set(t,r),patchState(e)},logWarn=(e,t,r,o)=>{devHint(`[${e.constructor.name}] The property value: (${r}) for '${t}' is not valid. Allowed values are: ${Array.from(o).join(", ")}`)};function watchValidator(e,t,r,o,n,a={}){r(n)?setState(e,t,n,a.hooks):void 0===n&&!0!==a.required&&r(a.defaultValue)?setState(e,t,a.defaultValue,a.hooks):(a.required||o.add(null),logWarn(e,t,n,o))}const watchBoolean=(e,t,r,o)=>{watchValidator(e,t,(e=>"boolean"==typeof e),new Set(["Boolean {true, false}"]),r,o)},watchString=(e,t,r,o={})=>{const n="number"==typeof o.minLength?null==o?void 0:o.minLength:0;watchValidator(e,t,(e=>"string"==typeof e&&e.length>=n&&(void 0===(null==o?void 0:o.maxLength)||e.length<=o.maxLength)),new Set(["String"]),r,o)},watchNumber=(e,t,r,o)=>{watchValidator(e,t,(e=>"number"==typeof e&&(void 0===(null==o?void 0:o.min)||"number"==typeof(null==o?void 0:o.min)&&e>=o.min)&&(void 0===(null==o?void 0:o.max)||"number"==typeof(null==o?void 0:o.max)&&e<=o.max)),new Set(["Number"]),r,o)},watchJsonArrayString=(e,t,r,o,n=(e=>e==e),a={})=>{emptyStringByArrayHandler(o,(()=>{objectObjectHandler(o,(()=>{void 0===o&&(o=[]);try{try{o=parseJson(o)}catch(e){}if(Array.isArray(o)){const i=o.find((e=>!r(e)));void 0===i&&n(o)?setState(e,t,o,a.hooks):objectObjectHandler(i,(()=>{throw _dev_utils_1ca991a2_js__WEBPACK_IMPORTED_MODULE_0__.L.debug(i),new Error("↑ The schema for the property (_options) is not valid. The value will not be changed.")}))}else objectObjectHandler(o,(()=>{throw _dev_utils_1ca991a2_js__WEBPACK_IMPORTED_MODULE_0__.L.debug(o),new Error("↑ The schema for the property (_options) is not valid. The value will not be changed.")}))}catch(e){_dev_utils_1ca991a2_js__WEBPACK_IMPORTED_MODULE_0__.L.debug(e)}}))}))},BOOLEAN=/^(true|false)$/,INTEGER=/^-?(0|[1-9]\d*)$/,FLOAT=/^-?(0.|[1-9]\d*.)\d*[1-9]$/,mapString2Unknown=e=>{const t=typeof e,r=`${e}`;if("string"==typeof e)if(BOOLEAN.test(e))e="true"===e;else if(INTEGER.test(e))e=parseInt(e);else if(FLOAT.test(e))e=parseFloat(e);else if(JSON_CHARS.test(e))try{e=parseJson(e)}catch(e){}return t!==typeof e&&devHint(`You have used a stringified property value (${r} to ${JSON.stringify(e)}) which type switched from ${t} to ${typeof e}!`),e},stringifyJson=e=>{try{return JSON.stringify(e).replace(/"/g,"'")}catch(t){throw _dev_utils_1ca991a2_js__WEBPACK_IMPORTED_MODULE_0__.L.warn(["stringifyJson",e]),_dev_utils_1ca991a2_js__WEBPACK_IMPORTED_MODULE_0__.L.error("↑ The JSON could not be converted to a string. A stringifiable JSON is expected."),new Error}},JSON_CHARS=/^[{[]/,parseJson=e=>{if("string"==typeof e)try{return JSON.parse(e)}catch(t){if(JSON_CHARS.test(e))try{return JSON.parse(e.replace(/'/g,'"'))}catch(t){_dev_utils_1ca991a2_js__WEBPACK_IMPORTED_MODULE_0__.L.warn(["parseJson",e]),_dev_utils_1ca991a2_js__WEBPACK_IMPORTED_MODULE_0__.L.error("↑ The JSON string could not be parsed. Make sure that single quotes in the text are escaped (&#8216;).")}}throw new Error},mapBoolean2String=e=>"boolean"==typeof e?!0===e?"true":"false":void 0,mapStringOrBoolean2String=e=>"string"==typeof e?e:mapBoolean2String(e),koliBriQuerySelector=(e,t)=>querySelector(e,t||(0,_dev_utils_1ca991a2_js__WEBPACK_IMPORTED_MODULE_0__.g)()),koliBriQuerySelectorAll=(e,t)=>querySelectorAll(e,t||(0,_dev_utils_1ca991a2_js__WEBPACK_IMPORTED_MODULE_0__.g)());let DEFAULT_COLOR_CONTRAST=null;const getDefaultColorContrast=()=>(DEFAULT_COLOR_CONTRAST=DEFAULT_COLOR_CONTRAST||{backgroundColor:"#00000000",color:"#00000000",domNode:(0,_dev_utils_1ca991a2_js__WEBPACK_IMPORTED_MODULE_0__.g)().body,level:"Fail",score:1},DEFAULT_COLOR_CONTRAST),TRANSPARENT_REGEXP=/(\d+, ){3}0\)/,koliBriA11yColorContrast=(e,t=getDefaultColorContrast())=>{const r=getComputedStyle(e),o=TRANSPARENT_REGEXP.test(r.backgroundColor)?t.backgroundColor:rgba$1.hex(r.backgroundColor),n=TRANSPARENT_REGEXP.test(r.color)?t.color:rgba$1.hex(r.color),a=s(o,n),i={backgroundColor:o,color:n,domNode:e,level:f(a),score:a};return a<4.5&&_dev_utils_1ca991a2_js__WEBPACK_IMPORTED_MODULE_0__.L.error(["Color-Contrast-Error",{backgroundColor:i.backgroundColor,color:i.color,level:i.level,score:i.score},i.domNode]),i},koliBriQuerySelectorColors=(e,t=getDefaultColorContrast())=>{t.domNode instanceof HTMLElement&&(t=koliBriA11yColorContrast(t.domNode,t));const r=t.domNode.querySelector(e);if(null===r){const r=t.domNode.querySelectorAll('[class="hydrated"]');for(let o=0;o<r.length&&(t.domNode=r[o],null===(t=koliBriQuerySelectorColors(e,t)).domNode);o++);return t}return koliBriA11yColorContrast(r,t)};class KoliBriUtils{static queryHtmlElementColors(e,t,r=!1,o=!0){let n=null;if(!0===r||!1===KoliBriUtils.executionLock)if(!1===r&&(KoliBriUtils.cache.clear(),KoliBriUtils.cache.set(t.domNode,t),KoliBriUtils.executionLock=!0,!0===o&&_dev_utils_1ca991a2_js__WEBPACK_IMPORTED_MODULE_0__.L.debug("[KoliBriUtils] Color contrast analysis started...")),e===t.domNode)n=t;else{const r=new Set;if(t.domNode.shadowRoot){const e=t.domNode.shadowRoot.children;for(let t=0;t<e.length;t++)r.add(e[t])}const o=t.domNode;if("function"==typeof o.assignedNodes){const e=o.assignedNodes();for(let t=0;t<e.length;t++)e[t]instanceof HTMLElement&&r.add(e[t])}const a=t.domNode.children;for(let e=0;e<a.length;e++)r.add(a[e]);const i=Array.from(r);for(let r=0;r<i.length;r++){let o=KoliBriUtils.cache.get(i[r]);void 0===o&&(o=koliBriA11yColorContrast(i[r],t)),KoliBriUtils.cache.set(i[r],o);const a=KoliBriUtils.queryHtmlElementColors(e,o,!0,!1);if(null!==a){n=a;break}}}else _dev_utils_1ca991a2_js__WEBPACK_IMPORTED_MODULE_0__.L.debug("[KoliBriUtils] Call aborted because a color contrast analysis is currently being executed.");return!1===r&&(!0===o&&_dev_utils_1ca991a2_js__WEBPACK_IMPORTED_MODULE_0__.L.debug(`[KoliBriUtils] Color contrast analysis finished (${KoliBriUtils.cache.size} DOM elements are analysed).`),KoliBriUtils.executionLock=!1,KoliBriUtils.cache.clear()),n}}KoliBriUtils.executionLock=!1,KoliBriUtils.cache=new Map;class KoliBriDevHelper{}KoliBriDevHelper.getCssStyle=_index_db4aa6e4_js__WEBPACK_IMPORTED_MODULE_1__.p,KoliBriDevHelper.patchTheme=_index_db4aa6e4_js__WEBPACK_IMPORTED_MODULE_1__.x,KoliBriDevHelper.patchThemeTag=_index_db4aa6e4_js__WEBPACK_IMPORTED_MODULE_1__.z,KoliBriDevHelper.querySelector=koliBriQuerySelector,KoliBriDevHelper.querySelectorAll=koliBriQuerySelectorAll,KoliBriDevHelper.stringifyJson=stringifyJson;

/***/ }),

/***/ 28968:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   S: () => (/* binding */ STATE_CHANGE_EVENT),
/* harmony export */   a: () => (/* binding */ isStyle),
/* harmony export */   b: () => (/* binding */ isObject),
/* harmony export */   c: () => (/* binding */ propagateFocus),
/* harmony export */   h: () => (/* binding */ handleSlotContent),
/* harmony export */   i: () => (/* binding */ isString),
/* harmony export */   p: () => (/* binding */ processEnv),
/* harmony export */   s: () => (/* binding */ showExpertSlot)
/* harmony export */ });
/*!
 * KoliBri - The accessible HTML-Standard
 */
const isObject=t=>"object"==typeof t&&null!==t,isString=(t,e=0)=>"string"==typeof t&&t.length>=e,isStyle=t=>{if("object"!=typeof t||null===t)return isString(t,1);for(const e in t)if(!1===isString(e,1))return!1;return!0},STATE_CHANGE_EVENT=new Event("StateChange"),propagateFocus=(t,e)=>{isObject(t)&&t&&(t.focus=t=>null==e?void 0:e.focus(t))};let processEnv="development";try{processEnv="production"}catch(t){processEnv="production"}const handleSlotContent=(t,e,s)=>{if(t&&e&&"string"==typeof s){const o=t.querySelector(`[slot="${s}"]`);o&&e.appendChild(o)}},showExpertSlot=t=>""===t;

/***/ })

};
;