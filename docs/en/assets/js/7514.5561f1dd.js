"use strict";
exports.id = 7514;
exports.ids = [7514];
exports.modules = {

/***/ 83162:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": () => (/* binding */ a11yHint),
/* harmony export */   "b": () => (/* binding */ a11yHintLabelingLandmarks),
/* harmony export */   "c": () => (/* binding */ deprecatedHint),
/* harmony export */   "d": () => (/* binding */ devHint),
/* harmony export */   "e": () => (/* binding */ a11yHintDisabled),
/* harmony export */   "f": () => (/* binding */ featureHint),
/* harmony export */   "g": () => (/* binding */ devWarning),
/* harmony export */   "u": () => (/* binding */ uiUxHintMillerscheZahl)
/* harmony export */ });
/* harmony import */ var _dev_utils_157f0499_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24766);
/*!
 * KoliBri - The accessible HTML-Standard
 */
const a11yCache=new Set,a11yHint=e=>{!1===a11yCache.has(e)&&(a11yCache.add(e),_dev_utils_157f0499_js__WEBPACK_IMPORTED_MODULE_0__.L.debug(e,{classifier:"✋ a11y",overwriteStyle:"; background-color: #09f"}))},deprecatedCache=new Set,deprecatedHint=e=>{!1===deprecatedCache.has(e)&&(deprecatedCache.add(e),_dev_utils_157f0499_js__WEBPACK_IMPORTED_MODULE_0__.L.warn(e,{classifier:"🔥 deprecated",forceLog:!0,overwriteStyle:"; background-color: #f00"}))},devCache=new Set,devHint=e=>{!1===devCache.has(e)&&(devCache.add(e),_dev_utils_157f0499_js__WEBPACK_IMPORTED_MODULE_0__.L.debug(e,{classifier:"💻 dev",overwriteStyle:"; background-color: #f09"}))},devWarning=e=>{!1===devCache.has(e)&&(devCache.add(e),_dev_utils_157f0499_js__WEBPACK_IMPORTED_MODULE_0__.L.warn(e,{classifier:"💻 dev",overwriteStyle:"; background-color: #f09"}))},featureCache=new Set,featureHint=(e,a=!1)=>{!1===featureCache.has(e)&&(featureCache.add(e),e+=!0===a?" ✅":"",_dev_utils_157f0499_js__WEBPACK_IMPORTED_MODULE_0__.L.debug(e,{classifier:"🌟 feature",overwriteStyle:"; background-color: #309"}))};devHint("Wir freuen uns über jedes Feedback, Kommentare, Screenshots oder Demo-Links von einer auf KoliBri-basierenden Anwendung (kolibri@itzbund.de). Vielen Dank!");const uiUxCache=new Set,uiUxHint=e=>{!1===uiUxCache.has(e)&&(uiUxCache.add(e),Log.debug(e,{classifier:"📑 ui/ux",overwriteStyle:"; background-color: #060;"}))},a11yHintDisabled=()=>{a11yHint('"Disabled" schränkt die Zugänglichkeit und Sichtbarkeit ein. Wir empfehlen aus Sicht der Barrierefreiheit readonly- statt disabled-Attribut zu verwenden.\n- https://uxdesign.cc/is-it-ok-to-grey-out-disabled-buttons-8afa74a0fae')},a11yHintLabelingLandmarks=e=>{"string"==typeof e&&""!==e||a11yHint("Manche Strukturelemente, wie bspw. der nav-Tag, können mehrfach in einer Webseite verwendet werden. Damit die gleichnamigen Strukturelemente voneinander unterschieden werden können, ist es erforderlich ein Aria-Label zu setzen.\n- https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/Navigation_Role#accessibility_concerns")},uiUxHintMillerscheZahl=(e,a=8)=>{var i;a>7&&(i=`[${e}] Innerhalb von Navigationsstrukturen wird empfohlen nicht mehr als 7 Menüpunkte zu verwenden.\n\nLinks:\n- https://de.ryte.com/wiki/Millersche_Zahl\n- https://de.wikipedia.org/wiki/Millersche_Zahl`,!1===uiUxCache.has(i)&&(uiUxCache.add(i),_dev_utils_157f0499_js__WEBPACK_IMPORTED_MODULE_0__.L.debug(i,{classifier:"📑 ui/ux",overwriteStyle:"; background-color: #060;"})))};

/***/ }),

/***/ 66191:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": () => (/* binding */ validateAriaSelected),
/* harmony export */   "v": () => (/* binding */ validateAriaCurrent)
/* harmony export */ });
/* harmony import */ var _prop_validators_e15a584f_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11778);
/*!
 * KoliBri - The accessible HTML-Standard
 */
const validateAriaCurrent=(a,e)=>{(0,_prop_validators_e15a584f_js__WEBPACK_IMPORTED_MODULE_0__.a)(a,"_ariaCurrent",(a=>"date"===a||"location"===a||"page"===a||"step"===a||"time"===a||!0===a),new Set(["String {data, location, page, step, time}","boolean"]),e)},validateAriaSelected=(a,e)=>{(0,_prop_validators_e15a584f_js__WEBPACK_IMPORTED_MODULE_0__.b)(a,"_ariaSelected",e)};

/***/ }),

/***/ 30857:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "w": () => (/* binding */ watchTooltipAlignment)
/* harmony export */ });
/* harmony import */ var _prop_validators_e15a584f_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11778);
/*!
 * KoliBri - The accessible HTML-Standard
 */
const watchTooltipAlignment=(t,o,a)=>{(0,_prop_validators_e15a584f_js__WEBPACK_IMPORTED_MODULE_0__.a)(t,o,(t=>"top"===t||"right"===t||"bottom"===t||"left"===t),new Set(["Alignment {top, right, buttom, left}"]),a,{defaultValue:"top"})};

/***/ }),

/***/ 1248:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": () => (/* binding */ watchButtonType),
/* harmony export */   "w": () => (/* binding */ watchButtonVariant)
/* harmony export */ });
/* harmony import */ var _prop_validators_e15a584f_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11778);
/*!
 * KoliBri - The accessible HTML-Standard
 */
const watchButtonType=(t,a,o)=>{(0,_prop_validators_e15a584f_js__WEBPACK_IMPORTED_MODULE_0__.a)(t,a,(t=>"button"===t||"reset"===t||"submit"===t),new Set(["KoliBriButtonType {button, reset, submit}"]),o)},watchButtonVariant=(t,a,o)=>{(0,_prop_validators_e15a584f_js__WEBPACK_IMPORTED_MODULE_0__.a)(t,a,(t=>"primary"===t||"secondary"===t||"normal"===t||"danger"===t||"ghost"===t||"custom"===t),new Set(["KoliBriButtonVariant {primary, secondary, normal, danger, ghost, custom}"]),o,{defaultValue:"normal"})};

/***/ }),

/***/ 9087:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": () => (/* binding */ validateDisabled),
/* harmony export */   "v": () => (/* binding */ validateAriaExpanded)
/* harmony export */ });
/* harmony import */ var _prop_validators_e15a584f_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11778);
/*!
 * KoliBri - The accessible HTML-Standard
 */
const validateAriaExpanded=(a,d)=>{(0,_prop_validators_e15a584f_js__WEBPACK_IMPORTED_MODULE_0__.b)(a,"_ariaExpanded",d)},validateDisabled=(a,d)=>{(0,_prop_validators_e15a584f_js__WEBPACK_IMPORTED_MODULE_0__.b)(a,"_disabled",d)};

/***/ }),

/***/ 6660:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "v": () => (/* binding */ validateHideLabel)
/* harmony export */ });
/* harmony import */ var _prop_validators_e15a584f_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11778);
/*!
 * KoliBri - The accessible HTML-Standard
 */
const validateHideLabel=(a,e)=>{(0,_prop_validators_e15a584f_js__WEBPACK_IMPORTED_MODULE_0__.b)(a,"_hideLabel",e)};

/***/ }),

/***/ 7514:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "kol_split_button": () => (/* binding */ KolSplitButton)
/* harmony export */ });
/* harmony import */ var _index_0e29e47a_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76511);
/* harmony import */ var _prop_validators_e15a584f_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11778);
/* harmony import */ var _label_4bfc9d30_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(28468);
/* harmony import */ var _a11y_tipps_1cea9822_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(83162);
/* harmony import */ var _tab_index_eff012a1_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9125);
/* harmony import */ var _button_link_4a7e6a2e_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(30857);
/* harmony import */ var _controller_985aff52_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1248);
/* harmony import */ var _aria_selected_aaf31182_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(66191);
/* harmony import */ var _disabled_9bd11a04_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9087);
/* harmony import */ var _hide_label_5d7003be_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6660);
/*!
 * KoliBri - The accessible HTML-Standard
 */
const defaultStyleCss=":host{--a11y-min-size:44px}*{hyphens:auto;letter-spacing:inherit;word-break:break-word;word-spacing:inherit}[role='button'],button:not([role='link']),kol-input .input{min-height:var(--a11y-min-size);min-width:var(--a11y-min-size)}a,button,h1,h2,h3,h4,h5,h6,input,option,select,textarea{font-family:inherit;font-size:inherit}:is(a,button){background-color:transparent;border:none;margin:0;padding:0;width:100%;}:host{max-width:100%}*{box-sizing:border-box}kol-span-wc{display:grid;place-items:center}kol-span-wc>span{display:flex;place-items:center}a,button{cursor:pointer}button,input,option,select,textarea{font-family:inherit}.icon-only>kol-span-wc>span>span{display:none}:host{display:flex;position:relative}.main-button{flex-grow:1;text-align:left}.main-button kol-span-wc{place-items:start}.secondary-button button{height:100%}.horizontal-line{background-color:rgba(0, 0, 0, 0.2);border-radius:2px;height:70%;margin-block:auto;width:1px}.popover{height:0;left:0;min-width:100%;overflow:hidden;position:absolute;top:100%;transition:height 0.3s ease-in-out;z-index:-1}.popover-content{inset:0 0 auto 0;min-width:100%;position:absolute}",KolSplitButton=class{constructor(t){(0,_index_0e29e47a_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,t),this.toggleDropdown=()=>{this.dropdown&&this.dropdownContent&&(this.state._showDropdown?this.dropdown.style.height="":this.dropdown.style.height=`${this.dropdownContent.clientHeight}px`),this.state=Object.assign(Object.assign({},this.state),{_showDropdown:!this.state._showDropdown})},this.catchDropdownElements=t=>{t&&(this.dropdown=t,setTimeout((()=>{this.dropdownContent=t.firstChild}),1))},this._accessKey=void 0,this._ariaControls=void 0,this._ariaCurrent=void 0,this._ariaExpanded=void 0,this._ariaLabel=void 0,this._ariaSelected=void 0,this._customClass=void 0,this._disabled=!1,this._hideLabel=!1,this._icon=void 0,this._iconOnly=!1,this._label=void 0,this._onClick=void 0,this._role=void 0,this._showDropdown=!1,this._tabIndex=void 0,this._tooltipAlign="top",this._type="button",this._value=void 0,this._variant="normal",this.state={_icon:"",_label:"",_showDropdown:!1}}render(){return (0,_index_0e29e47a_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_0e29e47a_js__WEBPACK_IMPORTED_MODULE_0__.H,null,(0,_index_0e29e47a_js__WEBPACK_IMPORTED_MODULE_0__.h)("kol-button-wc",{class:{"main-button":!0,button:!0,[this._variant]:"custom"!==this._variant,[this._customClass]:"custom"===this._variant&&"string"==typeof this._customClass&&this._customClass.length>0},_accessKey:this._accessKey,_ariaControls:this._ariaControls,_ariaCurrent:this._ariaCurrent,_ariaExpanded:this._ariaExpanded,_ariaLabel:this._ariaLabel,_ariaSelected:this._ariaSelected,_customClass:this._customClass,_disabled:this._disabled,_icon:this._icon,_iconOnly:this._hideLabel,_label:this._label,_on:"function"==typeof this.state._onClick?{onClick:this.state._onClick}:{onClick:this.toggleDropdown},_role:this._role,_tabIndex:this._tabIndex,_tooltipAlign:this._tooltipAlign,_type:this._type,_value:this._value,_variant:this._variant}),(0,_index_0e29e47a_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"horizontal-line"}),(0,_index_0e29e47a_js__WEBPACK_IMPORTED_MODULE_0__.h)("kol-button-wc",{class:"secondary-button",_disabled:this._disabled,"_icon-only":!0,_icon:"codicon codicon-triangle-down",_label:"dropdown öffnen",_on:{onClick:this.toggleDropdown}}),(0,_index_0e29e47a_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"popover",ref:this.catchDropdownElements},(0,_index_0e29e47a_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"popover-content"},(0,_index_0e29e47a_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{name:"popover"}))))}validateAccessKey(t){(0,_prop_validators_e15a584f_js__WEBPACK_IMPORTED_MODULE_1__.w)(this,"_accessKey",t)}validateAriaControls(t){(0,_prop_validators_e15a584f_js__WEBPACK_IMPORTED_MODULE_1__.w)(this,"_ariaControls",t)}validateAriaCurrent(t){(0,_aria_selected_aaf31182_js__WEBPACK_IMPORTED_MODULE_2__.v)(this,t)}validateAriaExpanded(t){(0,_disabled_9bd11a04_js__WEBPACK_IMPORTED_MODULE_3__.v)(this,t)}validateAriaLabel(t){(0,_label_4bfc9d30_js__WEBPACK_IMPORTED_MODULE_4__.a)(this,t)}validateAriaSelected(t){(0,_aria_selected_aaf31182_js__WEBPACK_IMPORTED_MODULE_2__.a)(this,t)}validateCustomClass(t){(0,_prop_validators_e15a584f_js__WEBPACK_IMPORTED_MODULE_1__.w)(this,"_customClass",t,{defaultValue:void 0})}validateDisabled(t){(0,_disabled_9bd11a04_js__WEBPACK_IMPORTED_MODULE_3__.a)(this,t),t&&(0,_a11y_tipps_1cea9822_js__WEBPACK_IMPORTED_MODULE_5__.e)()}validateHideLabel(t){(0,_hide_label_5d7003be_js__WEBPACK_IMPORTED_MODULE_6__.v)(this,t)}validateIcon(t){(0,_prop_validators_e15a584f_js__WEBPACK_IMPORTED_MODULE_1__.w)(this,"_icon",t)}validateIconOnly(t){(0,_hide_label_5d7003be_js__WEBPACK_IMPORTED_MODULE_6__.v)(this,t)}validateLabel(t){(0,_label_4bfc9d30_js__WEBPACK_IMPORTED_MODULE_4__.b)(this,t)}validateOnClick(t){"function"==typeof t&&(this.state=Object.assign(Object.assign({},this.state),{_onClick:t}))}validateRole(t){(0,_prop_validators_e15a584f_js__WEBPACK_IMPORTED_MODULE_1__.w)(this,"_role",t)}validateShowDropdown(t){(0,_prop_validators_e15a584f_js__WEBPACK_IMPORTED_MODULE_1__.b)(this,"_showDropdown",t)}validateTabIndex(t){(0,_tab_index_eff012a1_js__WEBPACK_IMPORTED_MODULE_7__.v)(this,t)}validateTooltipAlign(t){(0,_button_link_4a7e6a2e_js__WEBPACK_IMPORTED_MODULE_8__.w)(this,"_tooltipAlign",t)}validateType(t){(0,_controller_985aff52_js__WEBPACK_IMPORTED_MODULE_9__.a)(this,"_type",t)}validateValue(t){(0,_prop_validators_e15a584f_js__WEBPACK_IMPORTED_MODULE_1__.s)(this,"_value",t)}validateVariant(t){(0,_controller_985aff52_js__WEBPACK_IMPORTED_MODULE_9__.w)(this,"_variant",t)}componentWillLoad(){this.validateAccessKey(this._accessKey),this.validateAriaControls(this._ariaControls),this.validateAriaCurrent(this._ariaCurrent),this.validateAriaExpanded(this._ariaExpanded),this.validateAriaLabel(this._ariaLabel),this.validateAriaSelected(this._ariaSelected),this.validateCustomClass(this._customClass),this.validateDisabled(this._disabled),this.validateHideLabel(this._hideLabel),this.validateIcon(this._icon),this.validateIconOnly(this._iconOnly),this.validateLabel(this._label),this.validateOnClick(this._onClick),this.validateRole(this._role),this.validateTabIndex(this._tabIndex),this.validateTooltipAlign(this._tooltipAlign),this.validateType(this._type),this.validateValue(this._value),this.validateVariant(this._variant)}static get watchers(){return{_accessKey:["validateAccessKey"],_ariaControls:["validateAriaControls"],_ariaCurrent:["validateAriaCurrent"],_ariaExpanded:["validateAriaExpanded"],_ariaLabel:["validateAriaLabel"],_ariaSelected:["validateAriaSelected"],_customClass:["validateCustomClass"],_disabled:["validateDisabled"],_hideLabel:["validateHideLabel"],_icon:["validateIcon"],_iconOnly:["validateIconOnly"],_label:["validateLabel"],_onClick:["validateOnClick"],_role:["validateRole"],_showDropdown:["validateShowDropdown"],_tabIndex:["validateTabIndex"],_tooltipAlign:["validateTooltipAlign"],_type:["validateType"],_value:["validateValue"],_variant:["validateVariant"]}}};KolSplitButton.style={default:defaultStyleCss};

/***/ }),

/***/ 28468:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": () => (/* binding */ validateAriaLabelWithLabel),
/* harmony export */   "b": () => (/* binding */ validateLabelWithAriaLabel),
/* harmony export */   "c": () => (/* binding */ containsOnlyNumbers),
/* harmony export */   "h": () => (/* binding */ hasEnoughReadableChars),
/* harmony export */   "v": () => (/* binding */ validateLabel)
/* harmony export */ });
/* harmony import */ var _a11y_tipps_1cea9822_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(83162);
/* harmony import */ var _prop_validators_e15a584f_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(11778);
/* harmony import */ var _reuse_3a02afb9_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(30151);
/*!
 * KoliBri - The accessible HTML-Standard
 */
const READABLE_CHARS=/[a-zA-Z0-9äöüÄÖÜß]/g,ONLY_NUMBERS=/^\d+$/;function countReadableChars(a){var e;return"string"==typeof a&&(null===(e=a.match(READABLE_CHARS))||void 0===e?void 0:e.length)||0}function hasEnoughReadableChars(a,e=1){return countReadableChars(a)>=e}function containsOnlyNumbers(a){return ONLY_NUMBERS.test(a)}const syncAriaLabelBeforePatch=(a,e,i,t)=>{const r=e.has("_ariaLabel")?e.get("_ariaLabel"):i.state._ariaLabel;if("string"==typeof r){const a=e.has("_label")?e.get("_label"):i.state._label;!1===(0,_reuse_3a02afb9_js__WEBPACK_IMPORTED_MODULE_0__.i)(a,r)&&("_ariaLabel"===t?e.set("_label",r):e.set("_ariaLabel",void 0),(0,_a11y_tipps_1cea9822_js__WEBPACK_IMPORTED_MODULE_1__.a)("Das abweichende Aria-Label ist nicht barrierefrei. Ein abweichendes Aria-Label muss aus Gründern der Barrierefreiheit für die Sprachsteuerung mit dem Label-Text beginnen."))}},validateAriaLabel=(a,e,i={})=>{var t;(0,_prop_validators_e15a584f_js__WEBPACK_IMPORTED_MODULE_2__.w)(a,"_ariaLabel",e,{hooks:{afterPatch:(a,e,t,r)=>{var n,s;"function"==typeof(null===(n=i.hooks)||void 0===n?void 0:n.afterPatch)&&(null===(s=i.hooks)||void 0===s||s.afterPatch(a,e,t,r)),"string"==typeof a&&a.length>0&&!1===hasEnoughReadableChars(a,3)&&!1===containsOnlyNumbers(a)&&(0,_a11y_tipps_1cea9822_js__WEBPACK_IMPORTED_MODULE_1__.a)(`Ein abweichendes Aria-Label (${a}) ist nicht barrierefrei. Ein abweichendes Aria-Label sollte aus mindestens drei lesbaren Zeichen bestehen.`)},beforePatch:null===(t=i.hooks)||void 0===t?void 0:t.beforePatch}})},validateAriaLabelWithLabel=(a,e)=>{validateAriaLabel(a,e,{hooks:{beforePatch:syncAriaLabelBeforePatch}})},validateLabel=(a,e,i={})=>{var t;(0,_prop_validators_e15a584f_js__WEBPACK_IMPORTED_MODULE_2__.w)(a,"_label",e,{hooks:{afterPatch:(a,e,t,r)=>{var n,s;"function"==typeof(null===(n=i.hooks)||void 0===n?void 0:n.afterPatch)&&(null===(s=i.hooks)||void 0===s||s.afterPatch(a,e,t,r)),"string"==typeof a&&!1===hasEnoughReadableChars(a,3)&&!1===containsOnlyNumbers(a)&&(0,_a11y_tipps_1cea9822_js__WEBPACK_IMPORTED_MODULE_1__.a)(`Ein Label (${a}) ist nicht barrierefrei. Ein Label sollte aus mindestens drei lesbaren Zeichen bestehen.`)},beforePatch:null===(t=i.hooks)||void 0===t?void 0:t.beforePatch},required:!0})},validateLabelWithAriaLabel=(a,e)=>{validateLabel(a,e,{hooks:{beforePatch:syncAriaLabelBeforePatch}})};

/***/ }),

/***/ 11778:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "K": () => (/* binding */ KoliBriDevHelper),
/* harmony export */   "a": () => (/* binding */ watchValidator),
/* harmony export */   "b": () => (/* binding */ watchBoolean),
/* harmony export */   "c": () => (/* binding */ s),
/* harmony export */   "d": () => (/* binding */ watchJsonArrayString),
/* harmony export */   "e": () => (/* binding */ watchNumber),
/* harmony export */   "f": () => (/* binding */ setEventTarget),
/* harmony export */   "g": () => (/* binding */ emptyStringByArrayHandler),
/* harmony export */   "h": () => (/* binding */ mapBoolean2String),
/* harmony export */   "i": () => (/* binding */ scrollBySelector),
/* harmony export */   "j": () => (/* binding */ mapStringOrBoolean2String),
/* harmony export */   "k": () => (/* binding */ koliBriQuerySelector),
/* harmony export */   "l": () => (/* binding */ KoliBriUtils),
/* harmony export */   "m": () => (/* binding */ mapString2Unknown),
/* harmony export */   "n": () => (/* binding */ koliBriA11yColorContrast),
/* harmony export */   "o": () => (/* binding */ objectObjectHandler),
/* harmony export */   "p": () => (/* binding */ parseJson),
/* harmony export */   "q": () => (/* binding */ koliBriQuerySelectorAll),
/* harmony export */   "r": () => (/* binding */ rgbaConvert),
/* harmony export */   "s": () => (/* binding */ setState),
/* harmony export */   "t": () => (/* binding */ koliBriQuerySelectorColors),
/* harmony export */   "u": () => (/* binding */ stringifyJson),
/* harmony export */   "w": () => (/* binding */ watchString)
/* harmony export */ });
/* harmony import */ var _a11y_tipps_1cea9822_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(83162);
/* harmony import */ var _dev_utils_157f0499_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24766);
/* harmony import */ var _index_f4596895_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(94393);
/*!
 * KoliBri - The accessible HTML-Standard
 */
const pushNodes=(e,t)=>{t.forEach((t=>{!1===e.has(t)&&e.add(t)}))},querySelectorAll=(e,t=document)=>{if(t instanceof Document||t instanceof HTMLElement||t instanceof ShadowRoot){const r=new Set;pushNodes(r,t.querySelectorAll(e));const o=t.querySelectorAll('[class*="hydrated"]');for(let t=0;t<o.length;t++){const n=o[t].shadowRoot;pushNodes(r,querySelectorAll(e,"object"==typeof n&&null!==n?n:o[t]))}return Array.from(r)}throw new Error("The parameter document for the method querySelectorAll is not type of Document, HTMLElement or ShadowRoot.")},querySelector=(e,t=document)=>{if(t instanceof Document||t instanceof HTMLElement||t instanceof ShadowRoot){let r=t.querySelector(e);if(null===r){const o=t.querySelectorAll('[class*="hydrated"]');for(let t=0;t<o.length;t++){const n=o[t].shadowRoot;if(r=querySelector(e,"object"==typeof n&&null!==n?n:o[t]),null!==r)break}}return r}throw new Error("The parameter document for the method querySelector is not type of Document, HTMLElement or ShadowRoot.")};var rgbaConvert=arr,arr_1=arr,obj_1=obj,css_1=css,hex_1=hex,num_1=num;function arr(e){var t=parse(e);return 3==t.length?t.concat(255):(t[3]=Math.round(t[3]),t)}function obj(e){var t=parse(e);return{r:t[0],g:t[1],b:t[2],a:3==t.length?255:Math.round(t[3])}}function css(e){var t=parse(e);return 3==t.length&&t.push(255),255==t[3]?"rgb("+t[0]+", "+t[1]+", "+t[2]+")":0==t[3]?"rgba("+t[0]+", "+t[1]+", "+t[2]+", 0)":"rgba("+t[0]+", "+t[1]+", "+t[2]+", "+String(t[3]/255).substr(1)+")"}function hex(e){3==(t=parse(e)).length&&t.push(255);var t,r=255==t[3],o=num2hex(t[0]),n=num2hex(t[1]),a=num2hex(t[2]),l=isshort(o,n,a,t=num2hex(Math.round(t[3])));return r?l?"#"+o.charAt(0)+n.charAt(0)+a.charAt(0):"#"+o+n+a:l?"#"+o.charAt(0)+n.charAt(0)+a.charAt(0)+t.charAt(0):"#"+o+n+a+t}function num(e){var t=parse(e);return 3==t.length?t.push(255):t[3]=Math.round(t[3]),(t[3]<<24>>>0|t[0]<<16|t[1]<<8|t[2])>>>0}function parse(e){return"string"==typeof e?name(e=e.toLowerCase())||hex3(e)||hex6(e)||rgb(e)||rgba(e)||[0,0,0,255]:object(e)||array(e)||number(e)||[0,0,0,255]}function num2hex(e){var t=e.toString(16);return 1==t.length?"0"+t:t}function isshort(e,t,r,o){var n=["ff","00","11","22","33","44","55","66","77","88","99","aa","bb","cc","dd","ee"];return-1!=n.indexOf(e)&&-1!=n.indexOf(t)&&-1!=n.indexOf(r)&&-1!=n.indexOf(o)}function name(e){return"red"==e?[255,0,0]:"green"==e?[0,255,0]:"blue"==e?[0,0,255]:"black"==e?[0,0,0]:"white"==e?[255,255,255]:"cyan"==e?[0,255,255]:"gray"==e||"grey"==e?[128,128,128]:"magenta"==e||"pink"==e?[255,0,255]:"yellow"==e?[255,255,0]:void 0}function hex2num(e){return 1==e.length?parseInt(e+e,16):parseInt(e,16)}function hex3(e){var t=e.replace(/^#/,""),r=t.length;if(3==r||4==r){var o=hex2num(t[0]),n=hex2num(t[1]),a=hex2num(t[2]),l=3==r?255:hex2num(t[3]);if(isNaN(o)||isNaN(n)||isNaN(a)||isNaN(l))return;return[o,n,a,l]}}function hex6(e){var t=e.replace(/^#/,""),r=t.length;if(6==r||8==r){var o=hex2num(t.slice(0,2)),n=hex2num(t.slice(2,4)),a=hex2num(t.slice(4,6)),l=6==r?255:hex2num(t.slice(6,8));if(isNaN(o)||isNaN(n)||isNaN(a)||isNaN(l))return;return[o,n,a,l]}}function getnum(e,t){return"number"!=typeof e||!0===t&&Math.floor(e)!==e?-1:e>=0&&e<=255?e:-1}function object(e){if("[object Object]"===Object.prototype.toString.call(e)&&Object.getPrototypeOf(e)===Object.getPrototypeOf({})){var t=getnum(null!=e.r?e.r:null!=e.red?e.red:0,!0),r=getnum(null!=e.g?e.g:null!=e.green?e.green:0,!0),o=getnum(null!=e.b?e.b:null!=e.blue?e.blue:0,!0),n=getnum(null!=e.a?e.a:null!=e.alpha?e.alpha:255,!0);if(-1!=t&&-1!=r&&-1!=o&&-1!=n)return[t,r,o,n]}}function array(e){if(Array.isArray(e)&&(3==e.length||4==e.length)){var t=getnum(e[0],!0),r=getnum(e[1],!0),o=getnum(e[2],!0),n=getnum(null!=e[3]?e[3]:255,!0);if(-1!=t&&-1!=r&&-1!=o&&-1!=n)return[t,r,o,n]}}function number(e){if("number"==typeof e&&Math.floor(e)==e&&e<=4294967295&&e>=0)return[e>>16&255,e>>8&255,255&e,e>>24&255]}function rgb(e){if("rgb("==e.substr(0,4)){var t=(e=e.match(/^rgb\(([^)]+)\)/)[1]).split(/ *, */).map(Number),r=getnum(t[0],!0),o=getnum(t[1],!0),n=getnum(t[2],!0);if(-1!=r&&-1!=o&&-1!=n)return[r,o,n,255]}}function rgba(e){if("rgba("==e.substr(0,5)){var t=(e=e.match(/^rgba\(([^)]+)\)/)[1]).split(/ *, */).map(Number),r=getnum(t[0],!0),o=getnum(t[1],!0),n=getnum(t[2],!0),a=getnum(255*t[3]);if(-1!=r&&-1!=o&&-1!=n&&-1!=a)return[r,o,n,a]}}rgbaConvert.arr=arr_1,rgbaConvert.obj=obj_1,rgbaConvert.css=css_1,rgbaConvert.hex=hex_1,rgbaConvert.num=num_1;var n=.2126,r=.7152,t=.0722,e=1/12.92;function u(e){return Math.pow((e+.055)/1.055,2.4)}function a(o){var a=o[0]/255,l=o[1]/255,i=o[2]/255,s=a<=.03928?a*e:u(a),c=l<=.03928?l*e:u(l),d=i<=.03928?i*e:u(i);return s*n+c*r+d*t}function i(e){var t=255;8===(e=e.replace(/^#/,"")).length&&(t=parseInt(e.slice(6,8),16),e=e.substring(0,6)),4===e.length&&(t=parseInt(e.slice(3,4).repeat(2),16),e=e.substring(0,3)),3===e.length&&(e=e[0]+e[0]+e[1]+e[1]+e[2]+e[2]);var r=parseInt(e,16);return[r>>16,r>>8&255,255&r,t]}function c(e,t){return(Math.max(e,t)+.05)/(Math.min(e,t)+.05)}function o(e,t){return c(a(e),a(t))}function s(e,t){return o(i(e),i(t))}function f(e){return e>=7?"AAA":e>=4.5?"AA":e>=3?"AA Large":"Fail"}const OBJECT_OBJECT=/\[object Object\]/,objectObjectHandler=(e,t)=>{"string"==typeof e&&OBJECT_OBJECT.test(e)||t()},emptyStringByArrayHandler=(e,t)=>{"string"==typeof e&&""===e||t()},setEventTarget=(e,t)=>{(0,_dev_utils_157f0499_js__WEBPACK_IMPORTED_MODULE_0__.b)()&&(_dev_utils_157f0499_js__WEBPACK_IMPORTED_MODULE_0__.L.debug([e,t]),_dev_utils_157f0499_js__WEBPACK_IMPORTED_MODULE_0__.L.debug("↑ We propagate the (submit) event to this target.")),Object.defineProperty(e,"target",{value:t,writable:!1})},patchState=e=>{var t,r,o;null===(t=e.nextHooks)||void 0===t||t.forEach(((t,r)=>{var o;const n=t.get("beforePatch");"function"==typeof n&&n(null===(o=e.nextState)||void 0===o?void 0:o.get(r),e.nextState,e,r)})),(null===(r=e.nextState)||void 0===r?void 0:r.size)>0&&(e.state=Object.assign(Object.assign({},e.state),Object.fromEntries(e.nextState)),delete e.nextState,null===(o=e.nextHooks)||void 0===o||o.forEach(((t,r)=>{const o=t.get("afterPatch");"function"==typeof o&&o(e.state[r],e.state,e,r)}))),delete e.nextHooks},setState=(e,t,r,o={})=>{var n,a;if(void 0===e.nextHooks&&(e.nextHooks=new Map),void 0===e.nextState&&(e.nextState=new Map),e.nextState.get(t)!==r){e.nextHooks.get(t)instanceof Map==!1&&e.nextHooks.set(t,new Map),"function"==typeof o.afterPatch&&(null===(n=e.nextHooks.get(t))||void 0===n||n.set("afterPatch",o.afterPatch)),"function"==typeof o.beforePatch&&(null===(a=e.nextHooks.get(t))||void 0===a||a.set("beforePatch",o.beforePatch)),e.nextState.set(t,r),patchState(e)}},logWarn=(e,t,r,o)=>{(0,_a11y_tipps_1cea9822_js__WEBPACK_IMPORTED_MODULE_1__.d)(`[${e.constructor.name}] Der Property-Wert (${r}) für '${t}' ist nicht valide. Folgende Werte sind erlaubt: ${Array.from(o).join(", ")}`)};function watchValidator(e,t,r,o,n,a={}){r(n)?setState(e,t,n,a.hooks):null!=n||a.required?(a.required||o.add(null),logWarn(e,t,n,o)):setState(e,t,a.defaultValue,a.hooks)}const watchBoolean=(e,t,r,o)=>{watchValidator(e,t,(e=>"boolean"==typeof e),new Set(["Boolean {true, false}"]),r,o)},watchString=(e,t,r,o={})=>{const n="number"==typeof o.minLength?null==o?void 0:o.minLength:0;watchValidator(e,t,(e=>"string"==typeof e&&e.length>=n&&(void 0===(null==o?void 0:o.maxLength)||e.length<=o.maxLength)),new Set(["String"]),r,o)},watchNumber=(e,t,r,o)=>{watchValidator(e,t,(e=>"number"==typeof e&&(void 0===(null==o?void 0:o.min)||"number"==typeof(null==o?void 0:o.min)&&e>=o.min)&&(void 0===(null==o?void 0:o.max)||"number"==typeof(null==o?void 0:o.max)&&e<=o.max)),new Set(["Number"]),r,o)},watchJsonArrayString=(e,t,r,o,n=(e=>e==e),a={})=>{emptyStringByArrayHandler(o,(()=>{objectObjectHandler(o,(()=>{void 0===o&&(o=[]);try{try{o=parseJson(o)}catch(e){}if(Array.isArray(o)){const l=o.find((e=>!r(e)));void 0===l&&n(o)?setState(e,t,o,a.hooks):objectObjectHandler(l,(()=>{throw _dev_utils_157f0499_js__WEBPACK_IMPORTED_MODULE_0__.L.debug(l),new Error("↑ Das Schema für das Property (_options) ist nicht valide. Der Wert wird nicht geändert.")}))}else objectObjectHandler(o,(()=>{throw _dev_utils_157f0499_js__WEBPACK_IMPORTED_MODULE_0__.L.debug(o),new Error("↑ Das Schema für das Property (_options) ist nicht valide. Der Wert wird nicht geändert.")}))}catch(e){_dev_utils_157f0499_js__WEBPACK_IMPORTED_MODULE_0__.L.debug(e)}}))}))},BOOLEAN=/^(true|false)$/,INTEGER=/^-?(0|[1-9]\d*)$/,FLOAT=/^-?(0.|[1-9]\d*.)\d*[1-9]$/,mapString2Unknown=e=>{const t=typeof e,r=`${e}`;if("string"==typeof e)if(BOOLEAN.test(e))e="true"===e;else if(INTEGER.test(e))e=parseInt(e);else if(FLOAT.test(e))e=parseFloat(e);else if(JSON_CHARS.test(e))try{e=parseJson(e)}catch(e){}return t!==typeof e&&(0,_a11y_tipps_1cea9822_js__WEBPACK_IMPORTED_MODULE_1__.d)(`You have used a stringified property value (${r} to ${JSON.stringify(e)}) which type switched from ${t} to ${typeof e}!`),e},stringifyJson=e=>{try{return JSON.stringify(e).replace(/"/g,"'")}catch(t){throw _dev_utils_157f0499_js__WEBPACK_IMPORTED_MODULE_0__.L.warn(["stringifyJson",e]),_dev_utils_157f0499_js__WEBPACK_IMPORTED_MODULE_0__.L.error("↑ Das JSON konnte nicht in einen String umgewandelt werden. Es wird ein stringifizierbares JSON erwartet."),new Error}},JSON_CHARS=/^[{[]/,parseJson=e=>{if("string"==typeof e)try{return JSON.parse(e)}catch(t){if(JSON_CHARS.test(e))try{return JSON.parse(e.replace(/'/g,'"'))}catch(t){_dev_utils_157f0499_js__WEBPACK_IMPORTED_MODULE_0__.L.warn(["parseJson",e]),_dev_utils_157f0499_js__WEBPACK_IMPORTED_MODULE_0__.L.error("↑ Der JSON-String konnte nicht geparsed werden. Achten Sie darauf, dass einfache Anführungszeichen im Text maskiert werden (&#8216;).")}}throw new Error},mapBoolean2String=e=>"boolean"==typeof e?!0===e?"true":"false":void 0,mapStringOrBoolean2String=e=>"string"==typeof e?e:mapBoolean2String(e),koliBriQuerySelector=(e,t)=>querySelector(e,t||(0,_dev_utils_157f0499_js__WEBPACK_IMPORTED_MODULE_0__.g)()),koliBriQuerySelectorAll=(e,t)=>querySelectorAll(e,t||(0,_dev_utils_157f0499_js__WEBPACK_IMPORTED_MODULE_0__.g)());let DEFAULT_COLOR_CONTRAST=null;const getDefaultColorContrast=()=>(DEFAULT_COLOR_CONTRAST=DEFAULT_COLOR_CONTRAST||{backgroundColor:"#00000000",color:"#00000000",domNode:(0,_dev_utils_157f0499_js__WEBPACK_IMPORTED_MODULE_0__.g)().body,level:"Fail",score:1},DEFAULT_COLOR_CONTRAST),TRANSPARENT_REGEXP=/(\d+, ){3}0\)/,koliBriA11yColorContrast=(e,t=getDefaultColorContrast())=>{const r=getComputedStyle(e),o=TRANSPARENT_REGEXP.test(r.backgroundColor)?t.backgroundColor:rgbaConvert.hex(r.backgroundColor),n=TRANSPARENT_REGEXP.test(r.color)?t.color:rgbaConvert.hex(r.color),a=s(o,n),l={backgroundColor:o,color:n,domNode:e,level:f(a),score:a};return a<4.5&&_dev_utils_157f0499_js__WEBPACK_IMPORTED_MODULE_0__.L.error(["Color-Contrast-Error",{backgroundColor:l.backgroundColor,color:l.color,level:l.level,score:l.score},l.domNode]),l},koliBriQuerySelectorColors=(e,t=getDefaultColorContrast())=>{t.domNode instanceof HTMLElement&&(t=koliBriA11yColorContrast(t.domNode,t));const r=t.domNode.querySelector(e);if(null===r){const r=t.domNode.querySelectorAll('[class="hydrated"]');for(let o=0;o<r.length&&(t.domNode=r[o],null===(t=koliBriQuerySelectorColors(e,t)).domNode);o++);return t}return koliBriA11yColorContrast(r,t)},scrollByHTMLElement=(e,t=window)=>{e instanceof HTMLElement?(t.scrollTo({behavior:"smooth",top:e.getBoundingClientRect().top+(0,_dev_utils_157f0499_js__WEBPACK_IMPORTED_MODULE_0__.a)().pageYOffset-50}),e.focus()):(0,_a11y_tipps_1cea9822_js__WEBPACK_IMPORTED_MODULE_1__.d)("Das HTMLElement ist nicht valide, zu dem gescrollt werden soll.")},scrollBySelector=(e,t)=>{if((e instanceof Document||e instanceof HTMLElement||e instanceof ShadowRoot)&&"string"==typeof t){(0,_a11y_tipps_1cea9822_js__WEBPACK_IMPORTED_MODULE_1__.d)("Bei der Methode querySelectorAll wurden die Parameter document, selector in selector, document getauscht, da der Parameter selector nicht, allerdings der Parameter document optional sein kann.");const r=`${t}`;t=e,e=r}if("string"==typeof e){const r=koliBriQuerySelector(e,t);r instanceof HTMLElement?scrollByHTMLElement(r):(0,_a11y_tipps_1cea9822_js__WEBPACK_IMPORTED_MODULE_1__.d)(`Es konnte kein HTMLElement mit dem Selector (${e}) gefunden werden, zu dem gescrollt werden soll.`)}else (0,_a11y_tipps_1cea9822_js__WEBPACK_IMPORTED_MODULE_1__.d)("Der Selector ist nicht valide, zu dem gescrollt werden soll.")};class KoliBriUtils{static queryHtmlElementColors(e,t,r=!1,o=!0){let n=null;if(!0===r||!1===KoliBriUtils.executionLock)if(!1===r&&(KoliBriUtils.cache.clear(),KoliBriUtils.cache.set(t.domNode,t),KoliBriUtils.executionLock=!0,!0===o&&_dev_utils_157f0499_js__WEBPACK_IMPORTED_MODULE_0__.L.debug("[KoliBriUtils] Color contrast analysis started...")),e===t.domNode)n=t;else{const r=new Set;if(t.domNode.shadowRoot){const e=t.domNode.shadowRoot.children;for(let t=0;t<e.length;t++)r.add(e[t])}const o=t.domNode;if("function"==typeof o.assignedNodes){const e=o.assignedNodes();for(let t=0;t<e.length;t++)e[t]instanceof HTMLElement&&r.add(e[t])}const a=t.domNode.children;for(let e=0;e<a.length;e++)r.add(a[e]);const l=Array.from(r);for(let r=0;r<l.length;r++){let o=KoliBriUtils.cache.get(l[r]);void 0===o&&(o=koliBriA11yColorContrast(l[r],t)),KoliBriUtils.cache.set(l[r],o);const a=KoliBriUtils.queryHtmlElementColors(e,o,!0,!1);if(null!==a){n=a;break}}}else _dev_utils_157f0499_js__WEBPACK_IMPORTED_MODULE_0__.L.debug("[KoliBriUtils] Call aborted because a color contrast analysis is currently being executed.");return!1===r&&(!0===o&&_dev_utils_157f0499_js__WEBPACK_IMPORTED_MODULE_0__.L.debug(`[KoliBriUtils] Color contrast analysis finished (${KoliBriUtils.cache.size} DOM elements are analysed).`),KoliBriUtils.executionLock=!1,KoliBriUtils.cache.clear()),n}}KoliBriUtils.executionLock=!1,KoliBriUtils.cache=new Map;class KoliBriDevHelper{}KoliBriDevHelper.patchTheme=_index_f4596895_js__WEBPACK_IMPORTED_MODULE_2__.p,KoliBriDevHelper.patchThemeTag=_index_f4596895_js__WEBPACK_IMPORTED_MODULE_2__.a,KoliBriDevHelper.querySelector=koliBriQuerySelector,KoliBriDevHelper.querySelectorAll=koliBriQuerySelectorAll,KoliBriDevHelper.scrollByHTMLElement=scrollByHTMLElement,KoliBriDevHelper.scrollBySelector=scrollBySelector,KoliBriDevHelper.stringifyJson=stringifyJson;

/***/ }),

/***/ 9125:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "v": () => (/* binding */ validateTabIndex)
/* harmony export */ });
/* harmony import */ var _a11y_tipps_1cea9822_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(83162);
/* harmony import */ var _prop_validators_e15a584f_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11778);
/*!
 * KoliBri - The accessible HTML-Standard
 */
const options={hooks:{afterPatch:a=>{-1!==a&&0!==a&&(0,_a11y_tipps_1cea9822_js__WEBPACK_IMPORTED_MODULE_0__.a)("Don’t Use Tabindex Greater than 0: https://adrianroselli.com/2014/11/dont-use-tabindex-greater-than-0.html")}}},validateTabIndex=(a,t)=>{(0,_prop_validators_e15a584f_js__WEBPACK_IMPORTED_MODULE_1__.e)(a,"_tabIndex",t,options)};

/***/ })

};
;