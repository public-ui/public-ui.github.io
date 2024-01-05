"use strict";
exports.id = 1629;
exports.ids = [1629];
exports.modules = {

/***/ 83254:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   a: () => (/* binding */ a11yHint),
/* harmony export */   b: () => (/* binding */ a11yHintLabelingLandmarks),
/* harmony export */   c: () => (/* binding */ uiUxHintMillerscheZahl),
/* harmony export */   d: () => (/* binding */ devHint),
/* harmony export */   e: () => (/* binding */ a11yHintDisabled),
/* harmony export */   f: () => (/* binding */ featureHint),
/* harmony export */   g: () => (/* binding */ devWarning),
/* harmony export */   u: () => (/* binding */ uiUxHint)
/* harmony export */ });
/* harmony import */ var _dev_utils_a1ddacb2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61789);
/*!
 * KoliBri - The accessible HTML-Standard
 */
const a11yCache=new Set,a11yHint=(e,i)=>{(!1===a11yCache.has(e)||(null==i?void 0:i.force))&&(a11yCache.add(e),_dev_utils_a1ddacb2_js__WEBPACK_IMPORTED_MODULE_0__.L.debug([e].concat((null==i?void 0:i.details)||[]),{classifier:"✋ a11y",overwriteStyle:"; background-color: #09f"}))},devCache=new Set,devHint=(e,i)=>{(!1===devCache.has(e)||(null==i?void 0:i.force))&&(devCache.add(e),_dev_utils_a1ddacb2_js__WEBPACK_IMPORTED_MODULE_0__.L.debug([e].concat((null==i?void 0:i.details)||[]),{classifier:"💻 dev",overwriteStyle:"; background-color: #f09"}))},devWarning=(e,i)=>{(!1===devCache.has(e)||(null==i?void 0:i.force))&&(devCache.add(e),_dev_utils_a1ddacb2_js__WEBPACK_IMPORTED_MODULE_0__.L.warn([e].concat((null==i?void 0:i.details)||[]),{classifier:"💻 dev",overwriteStyle:"; background-color: #f09"}))},featureCache=new Set,featureHint=(e,i=!1,n)=>{(!1===featureCache.has(e)||(null==n?void 0:n.force))&&(featureCache.add(e),e+=!0===i?" ✅":"",_dev_utils_a1ddacb2_js__WEBPACK_IMPORTED_MODULE_0__.L.debug([e].concat((null==n?void 0:n.details)||[]),{classifier:"🌟 feature",overwriteStyle:"; background-color: #309"}))};devHint("Wir freuen uns über jedes Feedback, Kommentare, Screenshots oder Demo-Links von einer auf KoliBri-basierenden Anwendung (kolibri@itzbund.de). Vielen Dank!");const uiUxCache=new Set,uiUxHint=(e,i)=>{(!1===uiUxCache.has(e)||(null==i?void 0:i.force))&&(uiUxCache.add(e),_dev_utils_a1ddacb2_js__WEBPACK_IMPORTED_MODULE_0__.L.debug([e].concat((null==i?void 0:i.details)||[]),{classifier:"📑 ui/ux",overwriteStyle:"; background-color: #060;"}))},a11yHintDisabled=()=>{a11yHint('"Disabled" schränkt die Zugänglichkeit und Sichtbarkeit ein. Wir empfehlen aus Sicht der Barrierefreiheit readonly- statt disabled-Attribut zu verwenden.\n- https://uxdesign.cc/is-it-ok-to-grey-out-disabled-buttons-8afa74a0fae')},a11yHintLabelingLandmarks=e=>{"string"==typeof e&&""!==e||a11yHint("Manche Strukturelemente, wie bspw. der nav-Tag, können mehrfach in einer Webseite verwendet werden. Damit die gleichnamigen Strukturelemente voneinander unterschieden werden können, ist es erforderlich ein Aria-Label zu setzen.\n- https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/Navigation_Role#accessibility_concerns")},uiUxHintMillerscheZahl=(e,i=8)=>{i>7&&uiUxHint(`[${e}] Innerhalb von Navigationsstrukturen wird empfohlen nicht mehr als 7 Menüpunkte zu verwenden.\n\nLinks:\n- https://de.ryte.com/wiki/Millersche_Zahl\n- https://de.wikipedia.org/wiki/Millersche_Zahl`)};

/***/ }),

/***/ 55213:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   a: () => (/* binding */ translate)
/* harmony export */ });
/* unused harmony export t */
/* harmony import */ var _index_b99a7aa5_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(97341);
/* harmony import */ var _a11y_tipps_2a54fd3e_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(83254);
/*!
 * KoliBri - The accessible HTML-Standard
 */
const locale_de={error:"Fehler",warning:"Warnung",info:"Hinweis",success:"Erfolg",message:"Nachricht",close:"Schließen","form-description":"Formular-Felder, die mit einem Sternchen (*) gekennzeichnet sind, sind Pflichtangaben.",of:"von",characters:"Zeichen",new:"Neu","no-entries":"Es sind keine Einträge vorhanden.","change-order":"Sortierung von {{colLabel}} ändern","action-running":"Aktion wird ausgeführt...","action-done":"Aktion abgeschlossen",pagination:"Paginierung","page-first":"Direkt zur ersten Seite","page-back":"Eine Seite zurück","page-next":"Eine Seite weiter","page-last":"Direkt zur letzten Seite","entries-per-site":"Einträge pro Seite","page-current":"Seite {{page}}","page-selected":"Seite {{page}} ist ausgewählt","page-per-site":"{{entries}} Einträge pro Seite","nav-maximize":"Navigation maximieren","nav-minimize":"Navigation minimieren","logo-description":"Logo {{orgShort}}. Bundesadler mit Flaggenstab und Schriftzug {{orgLong}}","open-link-in-tab":"Öffnet in neuem Tab.","kolibri-logo":"Logo von KoliBri","table-pagination-label":"Paginierung für die Tabelle {{label}}","avatar-alt":"Avatar von {{name}}","toast-close-all":"Alle schließen","error-list":"Fehlerliste","error-list-message":"Bitte korrigieren Sie folgende Fehler:"},locale_en={error:"Error",warning:"Warning",info:"Note",success:"Success",message:"Message",close:"Close","form-description":"Form fields marked with an asterisk (*) are mandatory.",of:"of",characters:"characters",new:"New","no-entries":"No entries available.","change-order":"Change order of {{colLabel}}","action-running":"Action is running...","action-done":"Action done",pagination:"Pagination","page-first":"Directly to the first page","page-back":"One page back","page-next":"One page further","page-last":"Directly to the last page","entries-per-site":"Entries per page","page-current":"Page {{page}}","page-selected":"Page {{page}} is selected","page-per-site":"{{entries}} entries per page","nav-maximize":"Maximize navigation","nav-minimize":"Minimize navigation","logo-description":"Logo {{orgShort}}. Federal eagle with flag staff and lettering {{orgLong}}","open-link-in-tab":"Opens in new tab.","kolibri-logo":"KoliBri logo","table-pagination-label":"Pagination for table {{label}}","avatar-alt":"Avatar of {{name}}","toast-close-all":"Close all","error-list":"Error list","error-list-message":"Please correct the following errors"},mapLocaleKeys=e=>Object.keys(e).reduce(((a,i)=>(a[`kol-${i}`]=e[i],a)),{}),translations=new Set([e=>e("en",mapLocaleKeys(locale_en)),e=>e("de",mapLocaleKeys(locale_de))]),translate=(e,a)=>{const i=(0,_index_b99a7aa5_js__WEBPACK_IMPORTED_MODULE_0__.g)();if(void 0===i)return (0,_a11y_tipps_2a54fd3e_js__WEBPACK_IMPORTED_MODULE_1__.d)("[I18n] I18nService not available! Please call the global register function."),e;let n=i.translate(e,a);return n===e&&((0,_a11y_tipps_2a54fd3e_js__WEBPACK_IMPORTED_MODULE_1__.d)("[I18n] Locales not initialized! Initialize default locales automatically."),translations.forEach((e=>e(((e,a)=>(i.addResourceBundle(e,a),e))))),n=i.translate(e,a)),n};

/***/ }),

/***/ 61629:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   kol_logo: () => (/* binding */ KolLogo)
/* harmony export */ });
/* harmony import */ var _index_5dfe6d77_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(73536);
/* harmony import */ var _bund_ad41b762_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78994);
/* harmony import */ var _i18n_565c326b_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(55213);
/* harmony import */ var _a11y_tipps_2a54fd3e_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(83254);
/* harmony import */ var _prop_validators_c9100bb0_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(45366);
/*!
 * KoliBri - The accessible HTML-Standard
 */
const defaultStyleCss="/*\n * This file contains all rules for accessibility.\n */\n@layer kol-global {\n\t:host {\n\t\t/*\n\t\t * Minimum size of interactive elements.\n\t\t */\n\t\t--a11y-min-size: 44px;\n\t\t/*\n\t\t * No element should be used without a background and font color whose contrast ratio has\n\t\t * not been checked. By initially setting the background color to white and the font color\n\t\t * to black, the contrast ratio is ensured and explicit adjustment is forced.\n\t\t */\n\t\tbackground-color: white;\n\t\tcolor: black;\n\t\t/*\n\t\t * Verdana is an accessible font that can be used without requiring additional loading time.\n\t\t */\n\t\tfont-family: Verdana;\n\t}\n\n\t* {\n\t\t/*\n\t\t * This rule enables the word dividing for all texts. That is important for high zoom levels.\n\t\t */\n\t\thyphens: auto;\n\t\t/*\n\t\t * Letter spacing is required for all texts.\n\t\t */\n\t\tletter-spacing: inherit;\n\t\t/*\n\t\t * This rule enables the word dividing for all texts. That is important for high zoom levels.\n\t\t */\n\t\tword-break: break-word;\n\t\t/*\n\t\t * Word spacing is required for all texts.\n\t\t */\n\t\tword-spacing: inherit;\n\t}\n\n\t/*\n\t * All interactive elements should have a minimum size of 44px.\n\t */\n\t/* input:not([type='checkbox'], [type='radio'], [type='range']), */\n\t/* option, */\n\t/* select, */\n\t/* textarea, */\n\t[role='button'],\n\tbutton:not([role='link']),\n\tkol-input .input {\n\t\tmin-height: var(--a11y-min-size);\n\t\tmin-width: var(--a11y-min-size);\n\t}\n\n\t/*\n\t * Some interactive elements should not inherit the font-family and font-size.\n\t */\n\ta,\n\tbutton,\n\th1,\n\th2,\n\th3,\n\th4,\n\th5,\n\th6,\n\tinput,\n\toption,\n\tselect,\n\ttextarea {\n\t\t/*\n\t\t * All elements should inherit the font family from his parent element.\n\t\t */\n\t\tfont-family: inherit;\n\t\t/*\n\t\t * All elements should inherit the font size from his parent element.\n\t\t */\n\t\tfont-size: inherit;\n\t}\n}\n\n/**\n * Sometimes we need the semantic element for accessibility reasons,\n * but we don't want to show it.\n *\n * - https://www.a11yproject.com/posts/how-to-hide-content/\n */\n.visually-hidden {\n\tclip: rect(0 0 0 0);\n\tclip-path: inset(50%);\n\theight: 1px;\n\toverflow: hidden;\n\tposition: absolute;\n\twhite-space: nowrap;\n\twidth: 1px;\n}\n\n@layer kol-global {\n\t/*\n\t * Dieses CSS stellt sicher, dass der Standard-Style\n\t * von A und Button resettet werden.\n\t */\n\t:is(a, button) {\n\t\tbackground-color: transparent;\n\t\tborder: none;\n\t\tmargin: 0;\n\t\tpadding: 0;\n\t\twidth: 100%; /* 100% needed for custom width from outside */\n\t}\n\n\t/*\n\t * Ensure elements with hidden attribute to be actually not visible\n\t * @see https://meowni.ca/hidden.is.a.lie.html\n\t */\n\t[hidden] {\n\t\tdisplay: none !important;\n\t}\n}\n\n@layer kol-global {\n\t:host {\n\t\t/*\n\t\t * The max-width is needed to prevent the table from overflowing the\n\t\t * parent node, if the table is wider than the parent node.\n\t\t */\n\t\tmax-width: 100%;\n\t}\n\n\t* {\n\t\t/*\n\t\t * We prefer to box-sizing: border-box for all elements.\n\t\t */\n\t\tbox-sizing: border-box;\n\t}\n\n\t/* KolSpan is a layout component with icons in all directions and a label text in the middle. */\n\tkol-span-wc {\n\t\tdisplay: grid;\n\t\tplace-items: center;\n\t}\n\n\t/* The sub span in KolSpan is the horizontal span with icon left and right and the label text in the middle. */\n\tkol-span-wc > span {\n\t\tdisplay: flex;\n\t\tplace-items: center;\n\t}\n\n\ta,\n\tbutton {\n\t\tcursor: pointer;\n\t}\n\n\t/* This is the text label. */\n\t.icon-only > kol-span-wc > span > span {\n\t\tdisplay: none;\n\t}\n}\n\n@layer kol-component {\n\t:host {\n\t\tdisplay: inline-block;\n\t}\n\n\ttext {\n\t\tfont-size: 16px;\n\t\tletter-spacing: normal;\n\t\tword-spacing: normal;\n\t}\n\n\tsvg {\n\t\tmax-height: 100%;\n\t}\n}\n";function enumToArray(t,n=new Map){return Object.entries(t).map((([t,e])=>{n.set(e,t)})),n}const ENUM_AS_MAP=enumToArray(_bund_ad41b762_js__WEBPACK_IMPORTED_MODULE_0__.b,enumToArray(_bund_ad41b762_js__WEBPACK_IMPORTED_MODULE_0__.d,enumToArray(_bund_ad41b762_js__WEBPACK_IMPORTED_MODULE_0__.B)));function getAriaLabel(t){return ENUM_AS_MAP.has(t)?ENUM_AS_MAP.get(t):""}const Adler=()=>(0,_index_5dfe6d77_js__WEBPACK_IMPORTED_MODULE_1__.h)("path",{d:"M21.72,12.77c0.04-0.33,0.06-0.67,0.06-1c0-0.2,0-0.43,0-0.69c3.06,0,5.74-2.25,5.74-4.78\nc-0.09-1.07-0.56-2.08-1.32-2.84l0.32-0.07c1,0.89,1.61,2.14,1.7,3.48c0,3-3,5.85-6.5,5.92 M18.64,2.21\nc-0.05-0.33-0.19-0.64-0.39-0.91c0-0.31,0.14-0.61,0.64-0.36c-0.27,0.27-0.06,0.76-0.06,0.76s0.55-0.26,0.44-0.62\nC20.09,1.28,19.5,2.38,18.64,2.21 M17.93,3.77c-0.12-0.47-0.34-0.9-0.64-1.27c-0.3-0.42-0.77-0.69-1.29-0.73\nc-0.34,0.03-0.68,0.12-1,0.25c-0.16-0.28-0.27-0.58-0.32-0.9c0-0.22,0.38-0.44,1.1-0.44c1.58,0,2.52,0.71,2.52,1.91\nC18.26,3.01,18.14,3.41,17.93,3.77 M22,24.16c0.13,0,0.26,0.02,0.38,0.07c0.64,1.3,1.4,2.53,2.29,3.68l0,0l0,0\nc0.81-0.14,1.63-0.22,2.45-0.24l0,0c0.1-0.01,0.2,0.01,0.28,0.07c0.07,0.09,0.1,0.2,0.09,0.31c-0.01,0.28-0.08,0.55-0.21,0.79\nc-0.46-0.4-1.07-0.59-1.68-0.51c-0.24,0.01-0.48,0.05-0.71,0.12h-0.07h-0.07l0.48,0.49c0.77,0.83,1.44,1.43,1.44,1.83\nc-0.04,0.31-0.22,0.58-0.48,0.74c-0.22-0.98-0.8-1.84-1.62-2.42h-0.06v0.27c0,0.19,0,0.47,0,0.77c0,1.49-0.15,1.72-0.67,1.72\nc-0.09,0.01-0.19,0.01-0.28,0c0.33-0.49,0.48-1.08,0.41-1.67v-0.7c0-0.27,0.03-0.53,0.06-0.8v-0.11h-0.08\nc-0.33-0.05-0.67-0.09-1-0.1c-0.57-0.07-1.14,0.07-1.6,0.41c-0.24-0.18-0.41-0.44-0.48-0.73c0-0.32,0.19-0.34,0.45-0.34\nc0.14-0.01,0.27-0.01,0.41,0c0.59,0.09,1.18,0.13,1.78,0.12h0.06v-0.06c-0.5-1.13-1.18-2.17-2-3.09c0.1-0.35,0.2-0.59,0.54-0.59\nM12.64,27.87v0.06h0.06c0.55-0.01,1.1-0.06,1.64-0.16c0.14-0.01,0.27-0.01,0.41,0c0.26,0,0.45,0,0.45,0.34\nc-0.07,0.29-0.24,0.55-0.48,0.73c-0.46-0.34-1.03-0.49-1.6-0.41c-0.33,0.01-0.67,0.05-1,0.1H12v0.11\nc0.03,0.27,0.06,0.53,0.06,0.8v0.7c-0.05,0.58,0.1,1.15,0.42,1.63c-0.09,0.01-0.19,0.01-0.28,0c-0.52,0-0.67-0.23-0.67-1.72\nc0-0.3,0-0.58,0-0.77V29l-0.06,0.05c-0.82,0.58-1.39,1.44-1.61,2.42c-0.28-0.14-0.47-0.4-0.53-0.7c0-0.43,0.65-1.07,1.39-1.81\nl0.43-0.43v-0.06h-0.14c-0.23-0.07-0.47-0.11-0.71-0.12c-0.61-0.08-1.22,0.11-1.68,0.51c-0.13-0.24-0.2-0.51-0.21-0.79\nc0.01-0.11,0.06-0.22,0.14-0.3c0.08-0.06,0.18-0.08,0.28-0.07l0,0c0.82,0.02,1.64,0.1,2.45,0.24l0,0l0,0\nc0.88-1.15,1.64-2.38,2.28-3.68c0.12-0.05,0.25-0.07,0.38-0.07c0.35,0,0.44,0.24,0.54,0.59c-0.82,0.92-1.5,1.96-2,3.09\nM7.78,6.87c0.08-1.36,0.7-2.62,1.72-3.52l0.32,0.07C9.06,4.19,8.6,5.19,8.51,6.26c0,2.56,2.73,4.78,5.82,4.78\nc0,0.22,0,0.45,0,0.69c-0.01,0.35,0,0.69,0.03,1.04c-3.5,0-6.58-2.86-6.58-5.92 M31.25,12.23c1.57,2.49,2.8,2.45,4.66,2.45\nc-1.19-0.97-2.21-2.14-3-3.46L30,6.65c-0.29-1.44-1.03-2.75-2.12-3.73c0.31-0.1,0.6-0.24,0.87-0.42c-1.88,0-3.73-1-4.75-1\nc-0.55-0.05-1.03,0.36-1.08,0.91c0,0.58,0.63,1.16,1.73,1.16c0.31,0,0.62-0.04,0.92-0.09c0.65,0.74,1.03,1.67,1.08,2.65\nc0,2-2.41,3.58-4.83,3.58h-0.41c-0.5-0.67-0.84-1.45-1-2.28c0-1.6,1.05-2.9,1.05-4.48c0-0.68-0.24-1.33-0.67-1.85\nc0.29-0.23,0.53-0.52,0.7-0.85c-0.22,0.08-0.45,0.11-0.68,0.09c-1.16,0-2.11-0.3-3-0.3c-0.53,0-0.67,0.16-0.67,0.31\nc-0.01,0.05-0.01,0.1,0,0.15c-0.19-0.08-0.39-0.13-0.59-0.17c-0.29-0.05-0.58-0.08-0.88-0.08c-1.13,0-1.52,0.47-1.52,0.87\nc0.07,0.52,0.27,1.01,0.57,1.44c0.4-0.2,0.84-0.31,1.28-0.34c0.6,0,1.13,0.57,1.41,1.24c-0.29,0.05-0.59,0.07-0.88,0.07\nc-0.68-0.03-1.36-0.16-2-0.39l0,0c0,0,0.31,0.56,0.92,0.78c0.72,0.22,1.46,0.37,2.21,0.45c-0.08,0.21-0.23,0.38-0.43,0.49\nc-0.05,0.02-0.09,0.02-0.14,0c-0.74-0.14-1.45-0.35-2.14-0.65H14.9c0,0.42,1.09,1.35,2.07,1.71c-1.06,1.1-1.87,2.41-2.39,3.85\nh-0.41c-2.42,0-4.82-1.57-4.82-3.58c0.05-0.98,0.43-1.91,1.07-2.65c0.3,0.05,0.61,0.09,0.92,0.09c1.1,0,1.69-0.58,1.74-1.16\nc-0.04-0.55-0.52-0.96-1.07-0.92c0,0,0,0-0.01,0c-1,0-2.88,1-4.76,1C7.51,2.73,7.8,2.87,8.11,2.97C7.03,3.94,6.29,5.23,6,6.65\nl-2.87,4.59c-0.79,1.32-1.81,2.49-3,3.46c1.86,0,3.09,0,4.66-2.45L6.26,9.9c0.11,0.31,0.24,0.61,0.4,0.9l-2.97,4.67\nc-0.79,1.32-1.8,2.49-3,3.46c1.85,0,3.08,0,4.65-2.44l2.52-4c0.19,0.2,0.39,0.4,0.6,0.58l-3.59,5.7c-0.79,1.32-1.8,2.49-3,3.45\nc1.85,0,3.08,0.05,4.65-2.44L10,14.2c0.22,0.14,0.46,0.28,0.7,0.41l-4.27,6.77c-0.79,1.31-1.81,2.48-3,3.45\nc1.85,0,3.08,0,4.65-2.44l4.36-7c0.25,0.1,0.51,0.2,0.78,0.28l-4.95,7.9c-0.79,1.31-1.81,2.48-3,3.45c1.85,0,3.08,0.05,4.65-2.43\nl5.24-8.39h0.16c0.14,0.42,0.22,0.86,0.24,1.3c0,2.64-1.73,5-3.8,6.76c0.19,0.06,0.38,0.09,0.58,0.08c0.3,0.01,0.6-0.01,0.9-0.05\nc-0.57,1.13-1.24,2.21-2,3.23c-0.77-0.13-1.54-0.2-2.32-0.22c-0.67,0-0.75,0.4-0.75,0.75c-0.01,0.53,0.22,1.03,0.62,1.38\nc0.13-0.31,0.38-0.73,1.63-0.73h0.13C10.11,29.13,9,30.06,9,30.77c0.06,0.66,0.59,1.18,1.25,1.24c-0.02-0.14-0.02-0.28,0-0.42\nc0.13-0.69,0.48-1.33,1-1.8c-0.01,0.1-0.01,0.2,0,0.3c0,1.43,0.13,2.08,1,2.08c0.31-0.01,0.61-0.12,0.86-0.31\nc-0.5-0.44-0.73-1.11-0.62-1.77c0-0.21,0-0.41,0-0.69c0.02-0.2,0.02-0.41,0-0.61c0.24-0.02,0.47-0.02,0.71,0\nc0,0,1.29-0.1,1.6,0.57c0.35-0.32,0.86-0.78,0.86-1.27c0-0.33-0.16-0.71-0.83-0.71c-0.25,0-1,0.16-1.7,0.16\nc0.48-0.84,1.04-1.64,1.66-2.39c0.1,0.39,0.31,0.74,0.62,1c0.12-1.17,0.54-2.28,1.21-3.24c0.16,0.93,0.24,1.87,0.23,2.82\nc0,3.55-0.85,6.17-2.66,6.67c0.26,0.46,0.73,0.75,1.25,0.78c0.66,0,1-0.75,1.39-1.46c0.19,0.53,0.72,1.8,1.25,1.8\ns1.06-1.27,1.25-1.8c0.37,0.71,0.73,1.46,1.39,1.46c0.52-0.03,1-0.33,1.26-0.78c-1.82-0.5-2.67-3.12-2.67-6.67\nc-0.01-0.95,0.07-1.89,0.23-2.82c0.68,0.96,1.1,2.07,1.21,3.24c0.31-0.26,0.53-0.61,0.63-1c0.61,0.75,1.15,1.54,1.62,2.38\nc-0.66,0-1.45-0.16-1.7-0.16c-0.67,0-0.82,0.38-0.82,0.71c0,0.49,0.51,1,0.86,1.27c0.3-0.67,1.59-0.57,1.59-0.57\nc0.24-0.02,0.47-0.02,0.71,0c-0.02,0.2-0.02,0.41,0,0.61v0.69c0.11,0.66-0.12,1.33-0.62,1.77c0.25,0.19,0.55,0.3,0.86,0.31\nc0.91,0,1-0.65,1-2.08c0.01-0.1,0.01-0.2,0-0.3c0.52,0.47,0.87,1.11,1,1.8c0.02,0.14,0.02,0.28,0,0.42\nc0.61-0.11,1.06-0.62,1.12-1.23c0-0.74-1.15-1.67-1.52-2.08h0.13c1.25,0,1.5,0.42,1.63,0.73c0.4-0.35,0.63-0.85,0.62-1.38\nc0-0.35-0.07-0.75-0.75-0.75c-0.78,0.02-1.55,0.09-2.32,0.22c-0.76-1.02-1.43-2.1-2-3.23c0.3,0.04,0.6,0.06,0.9,0.05\nc0.19,0.01,0.39-0.02,0.57-0.08c-2.07-1.79-3.8-4.12-3.8-6.76c0.02-0.44,0.1-0.88,0.24-1.3h0.16l5.24,8.39\nc1.57,2.48,2.8,2.43,4.65,2.43c-1.19-0.97-2.21-2.14-3-3.45l-4.92-7.87c0.27-0.08,0.53-0.18,0.79-0.28l4.35,7\nc1.57,2.48,2.8,2.44,4.65,2.44c-1.19-0.97-2.21-2.14-3-3.45l-4.23-6.77c0.24-0.13,0.48-0.27,0.7-0.41l3.42,5.55\nc1.57,2.49,2.8,2.44,4.65,2.44c-1.19-0.97-2.21-2.13-3-3.45l-3.55-5.69c0.2-0.18,0.4-0.38,0.59-0.58l2.52,4\nc1.57,2.48,2.8,2.44,4.65,2.44c-1.2-0.97-2.21-2.14-3-3.46l-2.99-4.7c0.16-0.29,0.29-0.59,0.4-0.9L31.25,12.23z"}),KolLogo=class{constructor(t){(0,_index_5dfe6d77_js__WEBPACK_IMPORTED_MODULE_1__.r)(this,t),this._org=void 0,this.state={_org:_bund_ad41b762_js__WEBPACK_IMPORTED_MODULE_0__.d["Informationstechnikzentrum Bund"]}}validateOrg(t){"string"==typeof t&&ENUM_AS_MAP.has(t)?(0,_prop_validators_c9100bb0_js__WEBPACK_IMPORTED_MODULE_2__.s)(this,"_org",t):(0,_a11y_tipps_2a54fd3e_js__WEBPACK_IMPORTED_MODULE_3__.d)(`Die verwendete Abkürzung (${t}) ist nicht definiert!`)}componentWillLoad(){this.validateOrg(this._org)}render(){var t;return (0,_index_5dfe6d77_js__WEBPACK_IMPORTED_MODULE_1__.h)("svg",{"aria-label":(0,_i18n_565c326b_js__WEBPACK_IMPORTED_MODULE_4__.a)("kol-logo-description",{placeholders:{orgShort:this.state._org,orgLong:getAriaLabel(this.state._org)}}),role:"img",viewBox:"0 0 225 100"},(0,_index_5dfe6d77_js__WEBPACK_IMPORTED_MODULE_1__.h)("rect",{width:"100%",height:"100%",fill:"white"}),(0,_index_5dfe6d77_js__WEBPACK_IMPORTED_MODULE_1__.h)("svg",{x:"0",y:"4",height:"75"},(0,_index_5dfe6d77_js__WEBPACK_IMPORTED_MODULE_1__.h)(Adler,null)),(0,_index_5dfe6d77_js__WEBPACK_IMPORTED_MODULE_1__.h)("svg",{x:"40.5",y:"3.5",height:"100"},(0,_index_5dfe6d77_js__WEBPACK_IMPORTED_MODULE_1__.h)("rect",{width:"5",height:"30"}),(0,_index_5dfe6d77_js__WEBPACK_IMPORTED_MODULE_1__.h)("rect",{y:"30",width:"5",height:"30",fill:"red"}),(0,_index_5dfe6d77_js__WEBPACK_IMPORTED_MODULE_1__.h)("rect",{y:"60",width:"5",height:"30",fill:"#fc0"})),(0,_index_5dfe6d77_js__WEBPACK_IMPORTED_MODULE_1__.h)("svg",{x:"50",y:"0"},(0,_index_5dfe6d77_js__WEBPACK_IMPORTED_MODULE_1__.h)("text",{x:"0",y:"-0.05em","font-family":"BundesSans Web",style:{backgroundColor:"white",color:"black"}},_bund_ad41b762_js__WEBPACK_IMPORTED_MODULE_0__.f.has(this.state._org)?(0,_index_5dfe6d77_js__WEBPACK_IMPORTED_MODULE_1__.h)("tspan",null,null===(t=_bund_ad41b762_js__WEBPACK_IMPORTED_MODULE_0__.f.get(this.state._org))||void 0===t?void 0:t.map(((t,n)=>(0,_index_5dfe6d77_js__WEBPACK_IMPORTED_MODULE_1__.h)("tspan",{x:"0",dy:"1.1em",key:`kol-logo-text-${n}`},t)))):(0,_index_5dfe6d77_js__WEBPACK_IMPORTED_MODULE_1__.h)("tspan",{fill:"red"},(0,_index_5dfe6d77_js__WEBPACK_IMPORTED_MODULE_1__.h)("tspan",{x:"0",dy:"1.1em"},"Der Schlüsselwert"),(0,_index_5dfe6d77_js__WEBPACK_IMPORTED_MODULE_1__.h)("tspan",{x:"0",dy:"1.1em","font-weight":"bold"},"'",this.state._org,"'"),(0,_index_5dfe6d77_js__WEBPACK_IMPORTED_MODULE_1__.h)("tspan",{x:"0",dy:"1.1em"},"ist nicht definiert."),(0,_index_5dfe6d77_js__WEBPACK_IMPORTED_MODULE_1__.h)("tspan",{x:"0",dy:"1.1em"},"oder freigegeben.")))))}static get watchers(){return{_org:["validateOrg"]}}};KolLogo.style={default:defaultStyleCss};

/***/ }),

/***/ 45366:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   K: () => (/* binding */ KoliBriDevHelper),
/* harmony export */   a: () => (/* binding */ watchBoolean),
/* harmony export */   b: () => (/* binding */ s),
/* harmony export */   c: () => (/* binding */ watchJsonArrayString),
/* harmony export */   d: () => (/* binding */ watchString),
/* harmony export */   e: () => (/* binding */ watchNumber),
/* harmony export */   f: () => (/* binding */ setEventTarget),
/* harmony export */   g: () => (/* binding */ emptyStringByArrayHandler),
/* harmony export */   h: () => (/* binding */ mapBoolean2String),
/* harmony export */   i: () => (/* binding */ mapStringOrBoolean2String),
/* harmony export */   j: () => (/* binding */ KoliBriUtils),
/* harmony export */   k: () => (/* binding */ koliBriQuerySelector),
/* harmony export */   l: () => (/* binding */ koliBriA11yColorContrast),
/* harmony export */   m: () => (/* binding */ mapString2Unknown),
/* harmony export */   n: () => (/* binding */ koliBriQuerySelectorAll),
/* harmony export */   o: () => (/* binding */ objectObjectHandler),
/* harmony export */   p: () => (/* binding */ parseJson),
/* harmony export */   q: () => (/* binding */ koliBriQuerySelectorColors),
/* harmony export */   r: () => (/* binding */ rgbaConvert),
/* harmony export */   s: () => (/* binding */ setState),
/* harmony export */   t: () => (/* binding */ stringifyJson),
/* harmony export */   w: () => (/* binding */ watchValidator)
/* harmony export */ });
/* harmony import */ var _dev_utils_a1ddacb2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61789);
/* harmony import */ var _a11y_tipps_2a54fd3e_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(83254);
/*!
 * KoliBri - The accessible HTML-Standard
 */
const pushNodes=(e,t)=>{t.forEach((t=>{!1===e.has(t)&&e.add(t)}))},querySelectorAll=(e,t=document)=>{if(t instanceof Document||t instanceof HTMLElement||t instanceof ShadowRoot){const r=new Set;pushNodes(r,t.querySelectorAll(e));const o=t.querySelectorAll('[class*="hydrated"]');for(let t=0;t<o.length;t++){const n=o[t].shadowRoot;pushNodes(r,querySelectorAll(e,"object"==typeof n&&null!==n?n:o[t]))}return Array.from(r)}throw new Error("The parameter document for the method querySelectorAll is not type of Document, HTMLElement or ShadowRoot.")},querySelector=(e,t=document)=>{if(t instanceof Document||t instanceof HTMLElement||t instanceof ShadowRoot){let r=t.querySelector(e);if(null===r){const o=t.querySelectorAll('[class*="hydrated"]');for(let t=0;t<o.length;t++){const n=o[t].shadowRoot;if(r=querySelector(e,"object"==typeof n&&null!==n?n:o[t]),null!==r)break}}return r}throw new Error("The parameter document for the method querySelector is not type of Document, HTMLElement or ShadowRoot.")};var rgbaConvert=arr,arr_1=arr,obj_1=obj,css_1=css,hex_1=hex,num_1=num;function arr(e){var t=parse(e);return 3==t.length?t.concat(255):(t[3]=Math.round(t[3]),t)}function obj(e){var t=parse(e);return{r:t[0],g:t[1],b:t[2],a:3==t.length?255:Math.round(t[3])}}function css(e){var t=parse(e);return 3==t.length&&t.push(255),255==t[3]?"rgb("+t[0]+", "+t[1]+", "+t[2]+")":0==t[3]?"rgba("+t[0]+", "+t[1]+", "+t[2]+", 0)":"rgba("+t[0]+", "+t[1]+", "+t[2]+", "+String(t[3]/255).substr(1)+")"}function hex(e){3==(t=parse(e)).length&&t.push(255);var t,r=255==t[3],o=num2hex(t[0]),n=num2hex(t[1]),a=num2hex(t[2]),l=isshort(o,n,a,t=num2hex(Math.round(t[3])));return r?l?"#"+o.charAt(0)+n.charAt(0)+a.charAt(0):"#"+o+n+a:l?"#"+o.charAt(0)+n.charAt(0)+a.charAt(0)+t.charAt(0):"#"+o+n+a+t}function num(e){var t=parse(e);return 3==t.length?t.push(255):t[3]=Math.round(t[3]),(t[3]<<24>>>0|t[0]<<16|t[1]<<8|t[2])>>>0}function parse(e){return"string"==typeof e?name(e=e.toLowerCase())||hex3(e)||hex6(e)||rgb(e)||rgba(e)||[0,0,0,255]:object(e)||array(e)||number(e)||[0,0,0,255]}function num2hex(e){var t=e.toString(16);return 1==t.length?"0"+t:t}function isshort(e,t,r,o){var n=["ff","00","11","22","33","44","55","66","77","88","99","aa","bb","cc","dd","ee"];return-1!=n.indexOf(e)&&-1!=n.indexOf(t)&&-1!=n.indexOf(r)&&-1!=n.indexOf(o)}function name(e){return"red"==e?[255,0,0]:"green"==e?[0,255,0]:"blue"==e?[0,0,255]:"black"==e?[0,0,0]:"white"==e?[255,255,255]:"cyan"==e?[0,255,255]:"gray"==e||"grey"==e?[128,128,128]:"magenta"==e||"pink"==e?[255,0,255]:"yellow"==e?[255,255,0]:void 0}function hex2num(e){return 1==e.length?parseInt(e+e,16):parseInt(e,16)}function hex3(e){var t=e.replace(/^#/,""),r=t.length;if(3==r||4==r){var o=hex2num(t[0]),n=hex2num(t[1]),a=hex2num(t[2]),l=3==r?255:hex2num(t[3]);if(isNaN(o)||isNaN(n)||isNaN(a)||isNaN(l))return;return[o,n,a,l]}}function hex6(e){var t=e.replace(/^#/,""),r=t.length;if(6==r||8==r){var o=hex2num(t.slice(0,2)),n=hex2num(t.slice(2,4)),a=hex2num(t.slice(4,6)),l=6==r?255:hex2num(t.slice(6,8));if(isNaN(o)||isNaN(n)||isNaN(a)||isNaN(l))return;return[o,n,a,l]}}function getnum(e,t){return"number"!=typeof e||!0===t&&Math.floor(e)!==e?-1:e>=0&&e<=255?e:-1}function object(e){if("[object Object]"===Object.prototype.toString.call(e)&&Object.getPrototypeOf(e)===Object.getPrototypeOf({})){var t=getnum(null!=e.r?e.r:null!=e.red?e.red:0,!0),r=getnum(null!=e.g?e.g:null!=e.green?e.green:0,!0),o=getnum(null!=e.b?e.b:null!=e.blue?e.blue:0,!0),n=getnum(null!=e.a?e.a:null!=e.alpha?e.alpha:255,!0);if(-1!=t&&-1!=r&&-1!=o&&-1!=n)return[t,r,o,n]}}function array(e){if(Array.isArray(e)&&(3==e.length||4==e.length)){var t=getnum(e[0],!0),r=getnum(e[1],!0),o=getnum(e[2],!0),n=getnum(null!=e[3]?e[3]:255,!0);if(-1!=t&&-1!=r&&-1!=o&&-1!=n)return[t,r,o,n]}}function number(e){if("number"==typeof e&&Math.floor(e)==e&&e<=4294967295&&e>=0)return[e>>16&255,e>>8&255,255&e,e>>24&255]}function rgb(e){if("rgb("==e.substr(0,4)){var t=(e=e.match(/^rgb\(([^)]+)\)/)[1]).split(/ *, */).map(Number),r=getnum(t[0],!0),o=getnum(t[1],!0),n=getnum(t[2],!0);if(-1!=r&&-1!=o&&-1!=n)return[r,o,n,255]}}function rgba(e){if("rgba("==e.substr(0,5)){var t=(e=e.match(/^rgba\(([^)]+)\)/)[1]).split(/ *, */).map(Number),r=getnum(t[0],!0),o=getnum(t[1],!0),n=getnum(t[2],!0),a=getnum(255*t[3]);if(-1!=r&&-1!=o&&-1!=n&&-1!=a)return[r,o,n,a]}}rgbaConvert.arr=arr_1,rgbaConvert.obj=obj_1,rgbaConvert.css=css_1,rgbaConvert.hex=hex_1,rgbaConvert.num=num_1;var n=.2126,r=.7152,t=.0722,e=1/12.92;function u(e){return Math.pow((e+.055)/1.055,2.4)}function a(o){var a=o[0]/255,l=o[1]/255,i=o[2]/255,s=a<=.03928?a*e:u(a),c=l<=.03928?l*e:u(l),d=i<=.03928?i*e:u(i);return s*n+c*r+d*t}function i(e){var t=255;8===(e=e.replace(/^#/,"")).length&&(t=parseInt(e.slice(6,8),16),e=e.substring(0,6)),4===e.length&&(t=parseInt(e.slice(3,4).repeat(2),16),e=e.substring(0,3)),3===e.length&&(e=e[0]+e[0]+e[1]+e[1]+e[2]+e[2]);var r=parseInt(e,16);return[r>>16,r>>8&255,255&r,t]}function c(e,t){return(Math.max(e,t)+.05)/(Math.min(e,t)+.05)}function o(e,t){return c(a(e),a(t))}function s(e,t){return o(i(e),i(t))}function f(e){return e>=7?"AAA":e>=4.5?"AA":e>=3?"AA Large":"Fail"}const OBJECT_OBJECT=/\[object Object\]/,objectObjectHandler=(e,t)=>{"string"==typeof e&&OBJECT_OBJECT.test(e)||t()},emptyStringByArrayHandler=(e,t)=>{"string"==typeof e&&""===e||t()},setEventTarget=(e,t)=>{(0,_dev_utils_a1ddacb2_js__WEBPACK_IMPORTED_MODULE_0__.d)()&&(_dev_utils_a1ddacb2_js__WEBPACK_IMPORTED_MODULE_0__.L.debug([e,t]),_dev_utils_a1ddacb2_js__WEBPACK_IMPORTED_MODULE_0__.L.debug("↑ We propagate the (submit) event to this target.")),Object.defineProperty(e,"target",{value:t,writable:!1})},patchState=e=>{var t,r,o;null===(t=e.nextHooks)||void 0===t||t.forEach(((t,r)=>{var o;const n=t.get("beforePatch");"function"==typeof n&&n(null===(o=e.nextState)||void 0===o?void 0:o.get(r),e.nextState,e,r)})),(null===(r=e.nextState)||void 0===r?void 0:r.size)>0&&(e.state=Object.assign(Object.assign({},e.state),Object.fromEntries(e.nextState)),delete e.nextState,null===(o=e.nextHooks)||void 0===o||o.forEach(((t,r)=>{const o=t.get("afterPatch");"function"==typeof o&&o(e.state[r],e.state,e,r)}))),delete e.nextHooks},setState=(e,t,r,o={})=>{var n,a;if(void 0===e.nextHooks&&(e.nextHooks=new Map),void 0===e.nextState&&(e.nextState=new Map),e.nextState.get(t)!==r){e.nextHooks.get(t)instanceof Map==!1&&e.nextHooks.set(t,new Map),"function"==typeof o.afterPatch&&(null===(n=e.nextHooks.get(t))||void 0===n||n.set("afterPatch",o.afterPatch)),"function"==typeof o.beforePatch&&(null===(a=e.nextHooks.get(t))||void 0===a||a.set("beforePatch",o.beforePatch)),e.nextState.set(t,r),patchState(e)}},logWarn=(e,t,r,o)=>{(0,_a11y_tipps_2a54fd3e_js__WEBPACK_IMPORTED_MODULE_1__.d)(`[${e.constructor.name}] Der Property-Wert (${r}) für '${t}' ist nicht valide. Folgende Werte sind erlaubt: ${Array.from(o).join(", ")}`)};function watchValidator(e,t,r,o,n,a={}){r(n)?setState(e,t,n,a.hooks):null!=n||a.required?(a.required||o.add(null),logWarn(e,t,n,o)):setState(e,t,a.defaultValue,a.hooks)}const watchBoolean=(e,t,r,o)=>{watchValidator(e,t,(e=>"boolean"==typeof e),new Set(["Boolean {true, false}"]),r,o)},watchString=(e,t,r,o={})=>{const n="number"==typeof o.minLength?null==o?void 0:o.minLength:0;watchValidator(e,t,(e=>"string"==typeof e&&e.length>=n&&(void 0===(null==o?void 0:o.maxLength)||e.length<=o.maxLength)),new Set(["String"]),r,o)},watchNumber=(e,t,r,o)=>{watchValidator(e,t,(e=>"number"==typeof e&&(void 0===(null==o?void 0:o.min)||"number"==typeof(null==o?void 0:o.min)&&e>=o.min)&&(void 0===(null==o?void 0:o.max)||"number"==typeof(null==o?void 0:o.max)&&e<=o.max)),new Set(["Number"]),r,o)},watchJsonArrayString=(e,t,r,o,n=(e=>e==e),a={})=>{emptyStringByArrayHandler(o,(()=>{objectObjectHandler(o,(()=>{void 0===o&&(o=[]);try{try{o=parseJson(o)}catch(e){}if(Array.isArray(o)){const l=o.find((e=>!r(e)));void 0===l&&n(o)?setState(e,t,o,a.hooks):objectObjectHandler(l,(()=>{throw _dev_utils_a1ddacb2_js__WEBPACK_IMPORTED_MODULE_0__.L.debug(l),new Error("↑ Das Schema für das Property (_options) ist nicht valide. Der Wert wird nicht geändert.")}))}else objectObjectHandler(o,(()=>{throw _dev_utils_a1ddacb2_js__WEBPACK_IMPORTED_MODULE_0__.L.debug(o),new Error("↑ Das Schema für das Property (_options) ist nicht valide. Der Wert wird nicht geändert.")}))}catch(e){_dev_utils_a1ddacb2_js__WEBPACK_IMPORTED_MODULE_0__.L.debug(e)}}))}))},BOOLEAN=/^(true|false)$/,INTEGER=/^-?(0|[1-9]\d*)$/,FLOAT=/^-?(0.|[1-9]\d*.)\d*[1-9]$/,mapString2Unknown=e=>{const t=typeof e,r=`${e}`;if("string"==typeof e)if(BOOLEAN.test(e))e="true"===e;else if(INTEGER.test(e))e=parseInt(e);else if(FLOAT.test(e))e=parseFloat(e);else if(JSON_CHARS.test(e))try{e=parseJson(e)}catch(e){}return t!==typeof e&&(0,_a11y_tipps_2a54fd3e_js__WEBPACK_IMPORTED_MODULE_1__.d)(`You have used a stringified property value (${r} to ${JSON.stringify(e)}) which type switched from ${t} to ${typeof e}!`),e},stringifyJson=e=>{try{return JSON.stringify(e).replace(/"/g,"'")}catch(t){throw _dev_utils_a1ddacb2_js__WEBPACK_IMPORTED_MODULE_0__.L.warn(["stringifyJson",e]),_dev_utils_a1ddacb2_js__WEBPACK_IMPORTED_MODULE_0__.L.error("↑ Das JSON konnte nicht in einen String umgewandelt werden. Es wird ein stringifizierbares JSON erwartet."),new Error}},JSON_CHARS=/^[{[]/,parseJson=e=>{if("string"==typeof e)try{return JSON.parse(e)}catch(t){if(JSON_CHARS.test(e))try{return JSON.parse(e.replace(/'/g,'"'))}catch(t){_dev_utils_a1ddacb2_js__WEBPACK_IMPORTED_MODULE_0__.L.warn(["parseJson",e]),_dev_utils_a1ddacb2_js__WEBPACK_IMPORTED_MODULE_0__.L.error("↑ Der JSON-String konnte nicht geparsed werden. Achten Sie darauf, dass einfache Anführungszeichen im Text maskiert werden (&#8216;).")}}throw new Error},mapBoolean2String=e=>"boolean"==typeof e?!0===e?"true":"false":void 0,mapStringOrBoolean2String=e=>"string"==typeof e?e:mapBoolean2String(e),koliBriQuerySelector=(e,t)=>querySelector(e,t||(0,_dev_utils_a1ddacb2_js__WEBPACK_IMPORTED_MODULE_0__.a)()),koliBriQuerySelectorAll=(e,t)=>querySelectorAll(e,t||(0,_dev_utils_a1ddacb2_js__WEBPACK_IMPORTED_MODULE_0__.a)());let DEFAULT_COLOR_CONTRAST=null;const getDefaultColorContrast=()=>(DEFAULT_COLOR_CONTRAST=DEFAULT_COLOR_CONTRAST||{backgroundColor:"#00000000",color:"#00000000",domNode:(0,_dev_utils_a1ddacb2_js__WEBPACK_IMPORTED_MODULE_0__.a)().body,level:"Fail",score:1},DEFAULT_COLOR_CONTRAST),TRANSPARENT_REGEXP=/(\d+, ){3}0\)/,koliBriA11yColorContrast=(e,t=getDefaultColorContrast())=>{const r=getComputedStyle(e),o=TRANSPARENT_REGEXP.test(r.backgroundColor)?t.backgroundColor:rgbaConvert.hex(r.backgroundColor),n=TRANSPARENT_REGEXP.test(r.color)?t.color:rgbaConvert.hex(r.color),a=s(o,n),l={backgroundColor:o,color:n,domNode:e,level:f(a),score:a};return a<4.5&&_dev_utils_a1ddacb2_js__WEBPACK_IMPORTED_MODULE_0__.L.error(["Color-Contrast-Error",{backgroundColor:l.backgroundColor,color:l.color,level:l.level,score:l.score},l.domNode]),l},koliBriQuerySelectorColors=(e,t=getDefaultColorContrast())=>{t.domNode instanceof HTMLElement&&(t=koliBriA11yColorContrast(t.domNode,t));const r=t.domNode.querySelector(e);if(null===r){const r=t.domNode.querySelectorAll('[class="hydrated"]');for(let o=0;o<r.length&&(t.domNode=r[o],null===(t=koliBriQuerySelectorColors(e,t)).domNode);o++);return t}return koliBriA11yColorContrast(r,t)};class KoliBriUtils{static queryHtmlElementColors(e,t,r=!1,o=!0){let n=null;if(!0===r||!1===KoliBriUtils.executionLock)if(!1===r&&(KoliBriUtils.cache.clear(),KoliBriUtils.cache.set(t.domNode,t),KoliBriUtils.executionLock=!0,!0===o&&_dev_utils_a1ddacb2_js__WEBPACK_IMPORTED_MODULE_0__.L.debug("[KoliBriUtils] Color contrast analysis started...")),e===t.domNode)n=t;else{const r=new Set;if(t.domNode.shadowRoot){const e=t.domNode.shadowRoot.children;for(let t=0;t<e.length;t++)r.add(e[t])}const o=t.domNode;if("function"==typeof o.assignedNodes){const e=o.assignedNodes();for(let t=0;t<e.length;t++)e[t]instanceof HTMLElement&&r.add(e[t])}const a=t.domNode.children;for(let e=0;e<a.length;e++)r.add(a[e]);const l=Array.from(r);for(let r=0;r<l.length;r++){let o=KoliBriUtils.cache.get(l[r]);void 0===o&&(o=koliBriA11yColorContrast(l[r],t)),KoliBriUtils.cache.set(l[r],o);const a=KoliBriUtils.queryHtmlElementColors(e,o,!0,!1);if(null!==a){n=a;break}}}else _dev_utils_a1ddacb2_js__WEBPACK_IMPORTED_MODULE_0__.L.debug("[KoliBriUtils] Call aborted because a color contrast analysis is currently being executed.");return!1===r&&(!0===o&&_dev_utils_a1ddacb2_js__WEBPACK_IMPORTED_MODULE_0__.L.debug(`[KoliBriUtils] Color contrast analysis finished (${KoliBriUtils.cache.size} DOM elements are analysed).`),KoliBriUtils.executionLock=!1,KoliBriUtils.cache.clear()),n}}KoliBriUtils.executionLock=!1,KoliBriUtils.cache=new Map;class KoliBriDevHelper{}KoliBriDevHelper.patchTheme=_dev_utils_a1ddacb2_js__WEBPACK_IMPORTED_MODULE_0__.b,KoliBriDevHelper.patchThemeTag=_dev_utils_a1ddacb2_js__WEBPACK_IMPORTED_MODULE_0__.A,KoliBriDevHelper.querySelector=koliBriQuerySelector,KoliBriDevHelper.querySelectorAll=koliBriQuerySelectorAll,KoliBriDevHelper.stringifyJson=stringifyJson;

/***/ })

};
;