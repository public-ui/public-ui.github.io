"use strict";
exports.id = 4348;
exports.ids = [4348];
exports.modules = {

/***/ 88705:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "I": () => (/* binding */ InputPasswordController)
/* harmony export */ });
/* harmony import */ var _a11y_tipps_1cea9822_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(19125);
/* harmony import */ var _prop_validators_e402ad49_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(89086);
/* harmony import */ var _controller_icon_8695323b_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(44261);
/*!
 * KoliBri - The accessible HTML-Standard
 */
class InputPasswordController extends _controller_icon_8695323b_js__WEBPACK_IMPORTED_MODULE_0__.I{constructor(e,t,a){super(e,t,a),this.handleHiddenLabelAndRequired=()=>{!0===this.component.state._hideLabel&&!0===this.component.state._required?((0,_a11y_tipps_1cea9822_js__WEBPACK_IMPORTED_MODULE_1__.d)("[KolInput*] Wenn man das Label ausblendet, dann kann der sehende Nutzer:in nicht mehr erkennen, ob die Eingabe erforderlich ist."),this.hideLabel=!1):this.hideLabel=!0===this.component.state._hideLabel},this.component=e}validateAutoComplete(e){(0,_prop_validators_e402ad49_js__WEBPACK_IMPORTED_MODULE_2__.a)(this.component,"_autoComplete",(e=>"string"==typeof e&&("on"===e||"off"===e)),new Set(["on | off"]),e)}validateHideLabel(e){(0,_prop_validators_e402ad49_js__WEBPACK_IMPORTED_MODULE_2__.b)(this.component,"_hideLabel",e,{hooks:{afterPatch:this.handleHiddenLabelAndRequired}})}validateMaxLength(e){(0,_prop_validators_e402ad49_js__WEBPACK_IMPORTED_MODULE_2__.e)(this.component,"_maxLength",e,{min:0})}validatePattern(e){(0,_prop_validators_e402ad49_js__WEBPACK_IMPORTED_MODULE_2__.w)(this.component,"_pattern",e)}validatePlaceholder(e){(0,_prop_validators_e402ad49_js__WEBPACK_IMPORTED_MODULE_2__.w)(this.component,"_placeholder",e)}validateReadOnly(e){(0,_prop_validators_e402ad49_js__WEBPACK_IMPORTED_MODULE_2__.b)(this.component,"_readOnly",e)}validateRequired(e){(0,_prop_validators_e402ad49_js__WEBPACK_IMPORTED_MODULE_2__.b)(this.component,"_required",e,{hooks:{afterPatch:this.handleHiddenLabelAndRequired}})}validateSize(e){(0,_prop_validators_e402ad49_js__WEBPACK_IMPORTED_MODULE_2__.e)(this.component,"_size",e,{min:1})}validateValue(e){(0,_prop_validators_e402ad49_js__WEBPACK_IMPORTED_MODULE_2__.w)(this.component,"_value",e)}componentWillLoad(){super.componentWillLoad(),this.validateAutoComplete(this.component._autoComplete),this.validateMaxLength(this.component._maxLength),this.validatePattern(this.component._pattern),this.validatePlaceholder(this.component._placeholder),this.validateReadOnly(this.component._readOnly),this.validateRequired(this.component._required),this.validateSize(this.component._size),this.validateValue(this.component._value)}onBlur(e){this.component.state=Object.assign(Object.assign({},this.component.state),{_placeholder:this.placeholderCache}),this.placeholderCache=void 0,super.onBlur(e)}onFocus(e){this.placeholderCache=this.component.state._placeholder,this.component.state=Object.assign(Object.assign({},this.component.state),{_placeholder:void 0}),super.onFocus(e)}}

/***/ }),

/***/ 93287:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "I": () => (/* binding */ InputTextEmailController),
/* harmony export */   "a": () => (/* binding */ InputTextController)
/* harmony export */ });
/* harmony import */ var _prop_validators_e402ad49_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(89086);
/* harmony import */ var _controller_0f18a72b_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(88705);
/*!
 * KoliBri - The accessible HTML-Standard
 */
class InputTextEmailController extends _controller_0f18a72b_js__WEBPACK_IMPORTED_MODULE_0__.I{constructor(t,o,e){super(t,o,e),this.component=t}validateList(t){(0,_prop_validators_e402ad49_js__WEBPACK_IMPORTED_MODULE_1__.d)(this.component,"_list",(t=>"string"==typeof t),t)}componentWillLoad(){super.componentWillLoad(),this.validateList(this.component._list)}}class InputTextController extends InputTextEmailController{constructor(t,o,e){super(t,o,e),this.hasError=!1,this.hasList=!1,this.component=t}validateType(t){(0,_prop_validators_e402ad49_js__WEBPACK_IMPORTED_MODULE_1__.a)(this.component,"_type",(t=>"string"==typeof t&&("text"===t||"search"===t||"url"===t||"tel"===t)),new Set(["String {text, search, url, tel}"]),t)}componentWillLoad(){super.componentWillLoad(),this.validateType(this.component._type)}}

/***/ }),

/***/ 92053:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": () => (/* binding */ propagateResetEventToForm),
/* harmony export */   "p": () => (/* binding */ propagateSubmitEventToForm)
/* harmony export */ });
/* harmony import */ var _a11y_tipps_1cea9822_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(19125);
/* harmony import */ var _dev_utils_157f0499_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(27116);
/* harmony import */ var _prop_validators_e402ad49_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(89086);
/*!
 * KoliBri - The accessible HTML-Standard
 */
const searchFormElement=e=>{for((0,_dev_utils_157f0499_js__WEBPACK_IMPORTED_MODULE_0__.b)()&&((0,_a11y_tipps_1cea9822_js__WEBPACK_IMPORTED_MODULE_1__.d)("↓ Search form element start."),console.log(e));e instanceof HTMLElement&&"FORM"!==e.tagName&&"KOL-FORM"!==e.tagName;)e=e.parentElement instanceof HTMLElement?e.parentElement:e.parentNode instanceof ShadowRoot?e.parentNode.host:null,(0,_dev_utils_157f0499_js__WEBPACK_IMPORTED_MODULE_0__.b)()&&console.log(e);return (0,_dev_utils_157f0499_js__WEBPACK_IMPORTED_MODULE_0__.b)()&&(0,_a11y_tipps_1cea9822_js__WEBPACK_IMPORTED_MODULE_1__.d)("↑ Search form element finished."),e},propagateResetEventToForm=(e={})=>{const t=searchFormElement(e.form);if(t instanceof HTMLElement){const e=new Event("reset",{bubbles:!0,cancelable:!0});if("FORM"===t.tagName)(0,_prop_validators_e402ad49_js__WEBPACK_IMPORTED_MODULE_2__.f)(e,t),t.dispatchEvent(e);else if("KOL-FORM"===t.tagName){(0,_prop_validators_e402ad49_js__WEBPACK_IMPORTED_MODULE_2__.f)(e,_prop_validators_e402ad49_js__WEBPACK_IMPORTED_MODULE_2__.K.querySelector("form",t));const o=t;"object"==typeof o._on&&null!==typeof o._on&&"function"==typeof o._on.onReset&&o._on.onReset(e)}}},propagateSubmitEventToForm=(e={})=>{const t=searchFormElement(e.form);if(t instanceof HTMLElement){const e=new SubmitEvent("submit",{bubbles:!0,cancelable:!0,submitter:t});if("FORM"===t.tagName)(0,_prop_validators_e402ad49_js__WEBPACK_IMPORTED_MODULE_2__.f)(e,t),t.dispatchEvent(e);else if("KOL-FORM"===t.tagName){(0,_prop_validators_e402ad49_js__WEBPACK_IMPORTED_MODULE_2__.f)(e,_prop_validators_e402ad49_js__WEBPACK_IMPORTED_MODULE_2__.K.querySelector("form",t));const o=t;"object"==typeof o._on&&null!==typeof o._on&&"function"==typeof o._on.onSubmit&&o._on.onSubmit(e)}}};

/***/ }),

/***/ 34781:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "I": () => (/* binding */ InputController),
/* harmony export */   "g": () => (/* binding */ getRenderStates)
/* harmony export */ });
/* harmony import */ var _a11y_tipps_1cea9822_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(19125);
/* harmony import */ var _prop_validators_e402ad49_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(89086);
/* harmony import */ var _tab_index_63d1379d_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(98879);
/* harmony import */ var _dev_utils_157f0499_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(27116);
/*!
 * KoliBri - The accessible HTML-Standard
 */
const getRenderStates=t=>{const e="string"==typeof t._error&&t._error.length>0&&!0===t._touched,n="string"==typeof t._hint&&t._hint.length>0,o=[];return!0===e&&o.push(`${t._id}-error`),!0===n&&o.push(`${t._id}-hint`),{hasError:e,hasHint:n,ariaDiscribedBy:o}},EXPERIMENTAL_MODE=(0,_dev_utils_157f0499_js__WEBPACK_IMPORTED_MODULE_0__.b)();class ControlledInputController{constructor(t,e,n){var o,i,s,a,h;if(this.syncFormAssociatedName=()=>{var t;EXPERIMENTAL_MODE&&(null===(t=this.formAssociated)||void 0===t||t.setAttribute("name",this.component.state._name||this.component.state._id))},this.setFormAssociatedValue=(t=null)=>{var e;EXPERIMENTAL_MODE&&(null===(e=this.formAssociated)||void 0===e||e.setAttribute("value",t))},this.component=t,this.name=e,this.host=n,EXPERIMENTAL_MODE){this.formAssociated=document.createElement("input"),this.formAssociated.setAttribute("type","hidden");const t=(null===(o=this.host)||void 0===o?void 0:o.children)||[];for(let e=0;e<t.length;e++)"INPUT"===(null===(i=this.host)||void 0===i?void 0:i.children[e].tagName)&&(null===(s=this.host)||void 0===s||s.removeChild(null===(a=this.host)||void 0===a?void 0:a.children[e]));null===(h=this.host)||void 0===h||h.appendChild(this.formAssociated)}}validateAlert(t){(0,_prop_validators_e402ad49_js__WEBPACK_IMPORTED_MODULE_1__.b)(this.component,"_alert",t)}validateTouched(t){(0,_prop_validators_e402ad49_js__WEBPACK_IMPORTED_MODULE_1__.b)(this.component,"_touched",t)}componentWillLoad(){this.validateAlert(this.component._alert),this.validateTouched(this.component._touched)}}class InputController extends ControlledInputController{constructor(t,e,n){super(t,e,n),this.hideLabel=!1,this.valueChangeListeners=[],this.onFacade={onBlur:this.onBlur.bind(this),onChange:this.onChange.bind(this),onClick:this.onClick.bind(this),onFocus:this.onFocus.bind(this)},this.component=t}validateAccessKey(t){(0,_prop_validators_e402ad49_js__WEBPACK_IMPORTED_MODULE_1__.w)(this.component,"_accessKey",t)}validateAdjustHeight(t){(0,_prop_validators_e402ad49_js__WEBPACK_IMPORTED_MODULE_1__.b)(this.component,"_adjustHeight",t)}validateDisabled(t){(0,_prop_validators_e402ad49_js__WEBPACK_IMPORTED_MODULE_1__.b)(this.component,"_disabled",t),!0===t&&(0,_a11y_tipps_1cea9822_js__WEBPACK_IMPORTED_MODULE_2__.e)()}validateError(t){(0,_prop_validators_e402ad49_js__WEBPACK_IMPORTED_MODULE_1__.w)(this.component,"_error",t)}validateHideLabel(t){(0,_prop_validators_e402ad49_js__WEBPACK_IMPORTED_MODULE_1__.b)(this.component,"_hideLabel",t)}validateHint(t){(0,_prop_validators_e402ad49_js__WEBPACK_IMPORTED_MODULE_1__.w)(this.component,"_hint",t)}validateId(t){(0,_prop_validators_e402ad49_js__WEBPACK_IMPORTED_MODULE_1__.w)(this.component,"_id",t,{hooks:{afterPatch:this.syncFormAssociatedName},minLength:1}),""!==t&&void 0!==t||(0,_a11y_tipps_1cea9822_js__WEBPACK_IMPORTED_MODULE_2__.d)("Eine eindeutige ID an den Eingabefeldern ist nicht zwingend erforderlich, könnte aber für die E2E-Tests relevant sein.")}validateName(t){(0,_prop_validators_e402ad49_js__WEBPACK_IMPORTED_MODULE_1__.w)(this.component,"_name",t,{hooks:{afterPatch:this.syncFormAssociatedName}}),void 0===t&&(0,_a11y_tipps_1cea9822_js__WEBPACK_IMPORTED_MODULE_2__.d)("Ein Name an den Eingabefeldern ist nicht zwingend erforderlich, kann aber für die Autocomplete-Funktion und für das statische Versenden des Eingabefeldes relevant sein.")}validateOn(t){"object"==typeof t&&(0,_prop_validators_e402ad49_js__WEBPACK_IMPORTED_MODULE_1__.s)(this.component,"_on",t)}validateSmartButton(t){(0,_prop_validators_e402ad49_js__WEBPACK_IMPORTED_MODULE_1__.o)(t,(()=>{try{t=(0,_prop_validators_e402ad49_js__WEBPACK_IMPORTED_MODULE_1__.p)(t)}catch(t){}(0,_prop_validators_e402ad49_js__WEBPACK_IMPORTED_MODULE_1__.s)(this.component,"_smartButton",t)}))}validateTabIndex(t){(0,_tab_index_63d1379d_js__WEBPACK_IMPORTED_MODULE_3__.v)(this.component,t)}componentWillLoad(){super.componentWillLoad(),this.validateAccessKey(this.component._accessKey),this.validateAdjustHeight(this.component._adjustHeight),this.validateError(this.component._error),this.validateDisabled(this.component._disabled),this.validateHideLabel(this.component._hideLabel),this.validateHint(this.component._hint),this.validateId(this.component._id),this.validateName(this.component._name),this.validateSmartButton(this.component._smartButton),this.validateOn(this.component._on),this.validateTabIndex(this.component._tabIndex),this.syncFormAssociatedName()}onBlur(t){var e;this.component._alert=!0,this.component._touched=!0,"function"==typeof(null===(e=this.component._on)||void 0===e?void 0:e.onBlur)&&this.component._on.onBlur(t)}onChange(t){var e;const n=t.target.value;this.setFormAssociatedValue(n),this.valueChangeListeners.forEach((t=>t(n))),"function"==typeof(null===(e=this.component._on)||void 0===e?void 0:e.onChange)&&this.component._on.onChange(t,n)}onClick(t){var e;"function"==typeof(null===(e=this.component._on)||void 0===e?void 0:e.onClick)&&this.component._on.onClick(t)}onFocus(t){var e;this.component._alert=!0,"function"==typeof(null===(e=this.component._on)||void 0===e?void 0:e.onFocus)&&this.component._on.onFocus(t)}setValue(t,e){var n;this.setFormAssociatedValue(e),"function"==typeof(null===(n=this.component._on)||void 0===n?void 0:n.onChange)&&this.component._on.onChange(t,e)}addValueChangeListener(t){this.valueChangeListeners.push(t)}}

/***/ }),

/***/ 44261:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "I": () => (/* binding */ InputIconController)
/* harmony export */ });
/* harmony import */ var _prop_validators_e402ad49_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(89086);
/* harmony import */ var _reuse_3a02afb9_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20877);
/* harmony import */ var _icon_00018c54_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(62362);
/* harmony import */ var _controller_cbcb5b86_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(34781);
/*!
 * KoliBri - The accessible HTML-Standard
 */
const beforePatchIcon=(o,t)=>{const n=o;"object"==typeof n&&null!==n&&((0,_reuse_3a02afb9_js__WEBPACK_IMPORTED_MODULE_0__.b)(n.right,1)&&(n.right={icon:n.right}),(0,_reuse_3a02afb9_js__WEBPACK_IMPORTED_MODULE_0__.b)(n.left,1)&&(n.left={icon:n.left}),t.set("_icon",n))};class InputIconController extends _controller_cbcb5b86_js__WEBPACK_IMPORTED_MODULE_1__.I{constructor(o,t,n){super(o,t,n),this.component=o}validateIcon(o){(0,_prop_validators_e402ad49_js__WEBPACK_IMPORTED_MODULE_2__.o)(o,(()=>{try{o=(0,_prop_validators_e402ad49_js__WEBPACK_IMPORTED_MODULE_2__.p)(o)}catch(o){}(0,_prop_validators_e402ad49_js__WEBPACK_IMPORTED_MODULE_2__.a)(this.component,"_icon",(o=>"object"==typeof o&&null!==o&&((0,_reuse_3a02afb9_js__WEBPACK_IMPORTED_MODULE_0__.b)(o.left,1)||(0,_icon_00018c54_js__WEBPACK_IMPORTED_MODULE_3__.i)(o.left)||(0,_reuse_3a02afb9_js__WEBPACK_IMPORTED_MODULE_0__.b)(o.right,1)||(0,_icon_00018c54_js__WEBPACK_IMPORTED_MODULE_3__.i)(o.right))),new Set(["KoliBriHorizontalIcon"]),o,{hooks:{beforePatch:beforePatchIcon},required:!0})}))}componentWillLoad(){super.componentWillLoad(),this.validateIcon(this.component._icon)}}

/***/ }),

/***/ 62362:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "i": () => (/* binding */ isIcon),
/* harmony export */   "v": () => (/* binding */ validateIcon),
/* harmony export */   "w": () => (/* binding */ watchIconAlign)
/* harmony export */ });
/* harmony import */ var _prop_validators_e402ad49_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(89086);
/* harmony import */ var _reuse_3a02afb9_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20877);
/*!
 * KoliBri - The accessible HTML-Standard
 */
const mapCustomIcon=(t,o,i)=>{(0,_reuse_3a02afb9_js__WEBPACK_IMPORTED_MODULE_0__.d)(i)?t[o]=i:(0,_reuse_3a02afb9_js__WEBPACK_IMPORTED_MODULE_0__.b)(i,1)&&(t[o]={icon:i})},mapIconProp2State=(t,o)=>{let i={};if((0,_reuse_3a02afb9_js__WEBPACK_IMPORTED_MODULE_0__.b)(t,1))if("right"===o)i={right:{icon:t}};else i={left:{icon:t}};else"object"==typeof t&&null!==t&&(mapCustomIcon(i,"top",t.top),mapCustomIcon(i,"right",t.right),mapCustomIcon(i,"bottom",t.bottom),mapCustomIcon(i,"left",t.left));return i},beforePatchIcon=t=>{var o,i,n,e,c,a,s;if(null===(o=t.nextState)||void 0===o?void 0:o.has("_icon")){const o=null===(i=t.nextState)||void 0===i?void 0:i.get("_icon"),c=(null===(n=t.nextState)||void 0===n?void 0:n.get("_iconAlign"))||t.state._iconAlign;null===(e=t.nextState)||void 0===e||e.set("_icon",mapIconProp2State(o,c))}else if(null===(c=t.nextState)||void 0===c?void 0:c.has("_iconAlign")){const o=t.state._iconAlign;null===(a=t.nextState)||void 0===a||a.set("_icon",{[o]:void 0,[null===(s=t.nextState)||void 0===s?void 0:s.get("_iconAlign")]:t.state._icon[o]})}},isIcon=t=>"object"==typeof t&&null!==t&&(void 0===t.style||(0,_reuse_3a02afb9_js__WEBPACK_IMPORTED_MODULE_0__.c)(t.style))&&(0,_reuse_3a02afb9_js__WEBPACK_IMPORTED_MODULE_0__.b)(t.icon,1),validateIcon=(t,o)=>{(0,_prop_validators_e402ad49_js__WEBPACK_IMPORTED_MODULE_1__.o)(o,(()=>{try{o=(0,_prop_validators_e402ad49_js__WEBPACK_IMPORTED_MODULE_1__.p)(o)}catch(t){}(0,_prop_validators_e402ad49_js__WEBPACK_IMPORTED_MODULE_1__.a)(t,"_icon",(t=>null===t||(0,_reuse_3a02afb9_js__WEBPACK_IMPORTED_MODULE_0__.b)(t,1)||"object"==typeof t&&null!==t&&((0,_reuse_3a02afb9_js__WEBPACK_IMPORTED_MODULE_0__.b)(t.left,1)||isIcon(t.left)||(0,_reuse_3a02afb9_js__WEBPACK_IMPORTED_MODULE_0__.b)(t.right,1)||isIcon(t.right)||(0,_reuse_3a02afb9_js__WEBPACK_IMPORTED_MODULE_0__.b)(t.top,1)||isIcon(t.top)||(0,_reuse_3a02afb9_js__WEBPACK_IMPORTED_MODULE_0__.b)(t.bottom,1)||isIcon(t.bottom))),new Set(["KoliBriIcon"]),o,{hooks:{beforePatch:(o,i)=>{null===o&&i.set("_icon",{}),beforePatchIcon(t)}},required:!0})}))},watchIconAlign=(t,o)=>{(0,_prop_validators_e402ad49_js__WEBPACK_IMPORTED_MODULE_1__.a)(t,"_iconAlign",(t=>"left"===t||"right"===t),new Set(["Alignment {left, right, top, bottom}"]),o,{hooks:{beforePatch:()=>{beforePatchIcon(t)}}})};

/***/ }),

/***/ 44348:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "kol_input_email": () => (/* binding */ KolInputEmail)
/* harmony export */ });
/* harmony import */ var _index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(86464);
/* harmony import */ var _reuse_3a02afb9_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(20877);
/* harmony import */ var _controller_873db1b1_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(92053);
/* harmony import */ var _controller_cbcb5b86_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(34781);
/* harmony import */ var _prop_validators_e402ad49_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(89086);
/* harmony import */ var _controller_22781e1d_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(93287);
/* harmony import */ var _dev_utils_157f0499_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(27116);
/*!
 * KoliBri - The accessible HTML-Standard
 */
const validateMultiple=(t,e)=>{(0,_prop_validators_e402ad49_js__WEBPACK_IMPORTED_MODULE_0__.b)(t,"_multiple",e)};class InputEmailController extends _controller_22781e1d_js__WEBPACK_IMPORTED_MODULE_1__.I{constructor(t,e,i){super(t,e,i),this.component=t}validateMultiple(t){(0,_prop_validators_e402ad49_js__WEBPACK_IMPORTED_MODULE_0__.b)(this.component,"_multiple",t)}componentWillLoad(){super.componentWillLoad(),this.validateMultiple(this.component._multiple)}}const defaultStyleCss=":host{--a11y-min-size:44px}*{hyphens:auto;letter-spacing:inherit;word-break:break-word;word-spacing:inherit}[role='button'],button:not([role='link']),kol-input .input{min-height:var(--a11y-min-size);min-width:var(--a11y-min-size)}a,button,h1,h2,h3,h4,h5,h6,input,option,select,textarea{font-family:inherit}:is(a,button){background-color:transparent;border:none;margin:0;padding:0;width:100%;}:host{max-width:100%}*{box-sizing:border-box}kol-span-wc{display:grid;place-items:center}kol-span-wc>span{display:flex;place-items:center}a,button{cursor:pointer}a,button,input,option,select,textarea{font-family:inherit}.icon-only>kol-span-wc>span>span{display:none}.required label>span::after,.required legend>span::after{content:'*'}:host{display:block}input,textarea{cursor:text}input[type='checkbox'],input[type='color'],input[type='file'],input[type='radio'],input[type='range'],label,option,select{cursor:pointer}input[type='color'],input[type='date'],input[type='datetime-local'],input[type='email'],input[type='file'],input[type='month'],input[type='number'],input[type='password'],input[type='search'],input[type='tel'],input[type='text'],input[type='time'],input[type='url'],input[type='week'],select:not([multiple]),select[multiple] option,textarea{font-size:1rem}input[type='file']{padding:calc((var(--a11y-min-size) - 1rem) / 10) 0.5em}select[multiple] option{padding:calc((var(--a11y-min-size) - 1rem) / 2) 0.5em}kol-input.disabled :is(button,input,label,option,select,textarea){cursor:not-allowed;opacity:0.5}kol-input{display:grid}kol-input [slot='input']{flex-grow:1}input:not([type='checkbox'],[type='radio']),select:not([multiple]){height:2.75em}input:focus,option:focus,select:focus,textarea:focus{outline:0}.input{display:flex;align-items:center}.input>kol-icon{display:grid;height:var(--a11y-min-size);place-items:center}div.input{cursor:text}",KolInputEmail=class{render(){const{ariaDiscribedBy:t}=(0,_controller_cbcb5b86_js__WEBPACK_IMPORTED_MODULE_2__.g)(this.state),e=Array.isArray(this.state._list)&&this.state._list.length>0;return (0,_index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_3__.h)(_index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_3__.H,{class:{"has-value":this.state._hasValue}},(0,_index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_3__.h)("kol-input",{_alert:this.state._alert,_disabled:this.state._disabled,_error:this.state._error,_hideLabel:this.state._hideLabel,_hint:this.state._hint,_icon:this.state._icon,_id:this.state._id,_list:this.state._list,_readOnly:this.state._readOnly,_required:this.state._required,_smartButton:this.state._smartButton,_touched:this.state._touched,onClick:()=>{var t;return null===(t=this.ref)||void 0===t?void 0:t.focus()}},(0,_index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_3__.h)("span",{slot:"label"},(0,_index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_3__.h)("slot",null)),(0,_index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_3__.h)("input",Object.assign({ref:this.catchRef,title:"",accessKey:this.state._accessKey,"aria-describedby":t.length>0?t.join(" "):void 0,"aria-labelledby":`${this.state._id}-label`,autoCapitalize:"off",autoComplete:this.state._autoComplete,autoCorrect:"off",disabled:this.state._disabled,multiple:this.state._multiple,id:this.state._id,list:e?`${this.state._id}-list`:void 0,maxlength:this.state._maxLength,name:this.state._name,pattern:this.state._pattern,placeholder:this.state._placeholder,readOnly:this.state._readOnly,required:this.state._required,size:this.state._size,slot:"input",spellcheck:"false",type:"email",value:this.state._value},this.controller.onFacade,{onKeyUp:this.onKeyUp}))))}constructor(t){(0,_index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_3__.r)(this,t),this.catchRef=t=>{this.ref=t,(0,_reuse_3a02afb9_js__WEBPACK_IMPORTED_MODULE_4__.a)(this.host,this.ref)},this.onKeyUp=t=>{"Enter"===t.code?(0,_controller_873db1b1_js__WEBPACK_IMPORTED_MODULE_5__.p)({form:this.host,ref:this.ref}):this.controller.onFacade.onChange(t)},this._accessKey=void 0,this._alert=!0,this._autoComplete=void 0,this._disabled=void 0,this._error=void 0,this._hideLabel=void 0,this._hint="",this._icon=void 0,this._id=void 0,this._list=void 0,this._maxLength=void 0,this._multiple=void 0,this._name=void 0,this._on=void 0,this._pattern=void 0,this._placeholder=void 0,this._readOnly=void 0,this._required=void 0,this._size=void 0,this._smartButton=void 0,this._tabIndex=void 0,this._touched=!1,this._value=void 0,this.state={_autoComplete:"off",_id:(0,_dev_utils_157f0499_js__WEBPACK_IMPORTED_MODULE_6__.n)(),_hasValue:!1,_list:[]},this.controller=new InputEmailController(this,"email",this.host)}validateAccessKey(t){this.controller.validateAccessKey(t)}validateAlert(t){this.controller.validateAlert(t)}validateAutoComplete(t){this.controller.validateAutoComplete(t)}validateDisabled(t){this.controller.validateDisabled(t)}validateError(t){this.controller.validateError(t)}validateHideLabel(t){this.controller.validateHideLabel(t)}validateHint(t){this.controller.validateHint(t)}validateIcon(t){this.controller.validateIcon(t)}validateId(t){this.controller.validateId(t)}validateList(t){this.controller.validateList(t)}validateMaxLength(t){this.controller.validateMaxLength(t)}validateMultiple(t){validateMultiple(this,t)}validateName(t){this.controller.validateName(t)}validateOn(t){this.controller.validateOn(t)}validatePattern(t){this.controller.validatePattern(t)}validatePlaceholder(t){this.controller.validatePlaceholder(t)}validateReadOnly(t){this.controller.validateReadOnly(t)}validateRequired(t){this.controller.validateRequired(t)}validateSize(t){this.controller.validateSize(t)}validateSmartButton(t){this.controller.validateSmartButton(t)}validateTabIndex(t){this.controller.validateTabIndex(t)}validateTouched(t){this.controller.validateTouched(t)}validateValue(t){this.controller.validateValue(t)}componentWillLoad(){this._alert=!0===this._alert,this._touched=!0===this._touched,this.controller.componentWillLoad(),this.state._hasValue=!!this.state._value,this.controller.addValueChangeListener((t=>this.state._hasValue=!!t))}get host(){return (0,_index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_3__.g)(this)}static get watchers(){return{_accessKey:["validateAccessKey"],_alert:["validateAlert"],_autoComplete:["validateAutoComplete"],_disabled:["validateDisabled"],_error:["validateError"],_hideLabel:["validateHideLabel"],_hint:["validateHint"],_icon:["validateIcon"],_id:["validateId"],_list:["validateList"],_maxLength:["validateMaxLength"],_multiple:["validateMultiple"],_name:["validateName"],_on:["validateOn"],_pattern:["validatePattern"],_placeholder:["validatePlaceholder"],_readOnly:["validateReadOnly"],_required:["validateRequired"],_size:["validateSize"],_smartButton:["validateSmartButton"],_tabIndex:["validateTabIndex"],_touched:["validateTouched"],_value:["validateValue"]}}};KolInputEmail.style={default:defaultStyleCss};

/***/ }),

/***/ 98879:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "v": () => (/* binding */ validateTabIndex)
/* harmony export */ });
/* harmony import */ var _a11y_tipps_1cea9822_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(19125);
/* harmony import */ var _prop_validators_e402ad49_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(89086);
/*!
 * KoliBri - The accessible HTML-Standard
 */
const options={hooks:{afterPatch:a=>{-1!==a&&0!==a&&(0,_a11y_tipps_1cea9822_js__WEBPACK_IMPORTED_MODULE_0__.a)("Don’t Use Tabindex Greater than 0: https://adrianroselli.com/2014/11/dont-use-tabindex-greater-than-0.html")}}},validateTabIndex=(a,t)=>{(0,_prop_validators_e402ad49_js__WEBPACK_IMPORTED_MODULE_1__.e)(a,"_tabIndex",t,options)};

/***/ })

};
;