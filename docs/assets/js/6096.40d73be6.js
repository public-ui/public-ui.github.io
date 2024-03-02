"use strict"; exports.id = 6096; exports.ids = [6096]; exports.modules = { /***/ 52260: /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => { /* harmony export */ __webpack_require__.d(__webpack_exports__, { /* harmony export */ I: () => (/* binding */ InternalUnderlinedAccessKey) /* harmony export */ }); /* harmony import */ var _index_62e5924b_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(91388); /*! * KoliBri - The accessible HTML-Standard */ const InternalUnderlinedAccessKey=({accessKey:e,label:n})=>{let[l,...t]=n.split(e);return 0===t.length&&(e=e.toUpperCase(),[l,...t]=n.split(e)),0===t.length&&(e=e.toLowerCase(),[l,...t]=n.split(e)),(0,_index_62e5924b_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_62e5924b_js__WEBPACK_IMPORTED_MODULE_0__.F,null,l,t.length?(0,_index_62e5924b_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_62e5924b_js__WEBPACK_IMPORTED_MODULE_0__.F,null,(0,_index_62e5924b_js__WEBPACK_IMPORTED_MODULE_0__.h)("u",null,e),t.join(e)):null)}; /***/ }), /***/ 17796: /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => { /* harmony export */ __webpack_require__.d(__webpack_exports__, { /* harmony export */ A: () => (/* binding */ AssociatedInputController) /* harmony export */ }); /* harmony import */ var _index_de9d4ee0_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(55304); /*! * KoliBri - The accessible HTML-Standard */ const isAssociatedTagName=e=>"KOL-BUTTON"===e||"KOL-INPUT-CHECKBOX"===e||"KOL-INPUT-COLOR"===e||"KOL-INPUT-DATE"===e||"KOL-INPUT-EMAIL"===e||"KOL-INPUT-FILE"===e||"KOL-INPUT-NUMBER"===e||"KOL-INPUT-PASSWORD"===e||"KOL-INPUT-RADIO"===e||"KOL-INPUT-RANGE"===e||"KOL-INPUT-TEXT"===e||"KOL-SELECT"===e||"KOL-TEXTAREA"===e;class AssociatedInputController{constructor(e,t,i){var s,o,a;if(this.experimentalMode=(0,_index_de9d4ee0_js__WEBPACK_IMPORTED_MODULE_0__.a0)(),this.setFormAssociatedValue=e=>{var t;const i=null===(t=this.formAssociated)||void 0===t?void 0:t.getAttribute("name");null!==i&&""!==i||(0,_index_de9d4ee0_js__WEBPACK_IMPORTED_MODULE_0__.h)(` The form field (${this.type}) must have a name attribute to be form-associated. Please define the _name attribute.`);const s=this.tryToStringifyValue(e);this.syncValue(e,s,this.formAssociated),this.syncValue(e,s,this.syncToOwnInput)},this.component=e,this.host=this.findHostWithShadowRoot(i),this.type=t,this.experimentalMode&&isAssociatedTagName(null===(s=this.host)||void 0===s?void 0:s.tagName)){switch(null===(o=this.host)||void 0===o||o.querySelectorAll("input,select,textarea").forEach((e=>{var t;null===(t=this.host)||void 0===t||t.removeChild(e)})),this.type){case"button":case"color":case"date":case"email":case"file":case"number":case"password":case"radio":case"range":case"text":this.formAssociated=document.createElement("input"),this.formAssociated.setAttribute("type",this.type);break;case"select":this.formAssociated=document.createElement("select"),this.formAssociated.setAttribute("multiple","");break;case"textarea":this.formAssociated=document.createElement("textarea");break;default:this.formAssociated=document.createElement("input"),this.formAssociated.setAttribute("type","hidden")}this.formAssociated.setAttribute("aria-hidden","true"),this.formAssociated.setAttribute("data-form-associated",""),this.formAssociated.setAttribute("hidden",""),null===(a=this.host)||void 0===a||a.appendChild(this.formAssociated)}}findHostWithShadowRoot(e){for(;null===(null==e?void 0:e.shadowRoot)&&e!==document.body;)(e=null==e?void 0:e.parentNode).host&&(e=e.host);return e}setAttribute(e,t,i){if(this.experimentalMode)try{if("boolean"!=typeof(i="object"==typeof i&&null!==i?JSON.stringify(i):i)&&"number"!=typeof i&&"string"!=typeof i)throw new Error("Invalid value type: "+typeof i);null==t||t.setAttribute(e,`${i}`)}catch(i){null==t||t.removeAttribute(e)}}tryToStringifyValue(e){try{return"object"==typeof e&&null!==e?JSON.stringify(e).toString():null==e?null:e.toString()}catch(e){return (0,_index_de9d4ee0_js__WEBPACK_IMPORTED_MODULE_0__.a1)(`The form field raw value is not able to stringify! ${e}`),""}}syncValue(e,t,i){if(i)switch(this.type){case"file":i.files=e;break;case"select":i.querySelectorAll("option").forEach((e=>{i.removeChild(e)})),Array.isArray(e)&&e.forEach((e=>{const t=this.tryToStringifyValue(e);if("string"==typeof t){const e=document.createElement("option");e.setAttribute("value",t),e.setAttribute("selected",""),i.appendChild(e)}}));break;default:"string"==typeof t?(i.setAttribute("value",t),i.value=t):(i.removeAttribute("value"),i.value="")}}validateName(e){(0,_index_de9d4ee0_js__WEBPACK_IMPORTED_MODULE_0__.a2)(this.component,e,{hooks:{afterPatch:()=>{this.setAttribute("name",this.formAssociated,this.component.state._name)}}}),void 0===e&&(0,_index_de9d4ee0_js__WEBPACK_IMPORTED_MODULE_0__.h)("Ein Name am Eingabefeldern oder Schalter ist nicht zwingend erforderlich, kann aber für die Autocomplete-Funktion und für das statische Versenden des Eingabefeldes relevant sein.")}validateSyncValueBySelector(e){if(this.experimentalMode&&"string"==typeof e){const t=document.querySelector(e);t&&(this.syncToOwnInput=t)}}componentWillLoad(){this.validateName(this.component._name),this.validateSyncValueBySelector(this.component._syncValueBySelector)}} /***/ }), /***/ 51008: /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => { /* harmony export */ __webpack_require__.d(__webpack_exports__, { /* harmony export */ I: () => (/* binding */ InputTextEmailController), /* harmony export */ a: () => (/* binding */ InputTextController) /* harmony export */ }); /* harmony import */ var _index_de9d4ee0_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(55304); /* harmony import */ var _controller_b21789f7_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(95136); /*! * KoliBri - The accessible HTML-Standard */ class InputTextEmailController extends _controller_b21789f7_js__WEBPACK_IMPORTED_MODULE_0__.I{constructor(t,o,e){super(t,o,e),this.component=t}validateSuggestions(t){(0,_index_de9d4ee0_js__WEBPACK_IMPORTED_MODULE_1__.a4)(this.component,t)}componentWillLoad(){super.componentWillLoad(),this.validateSuggestions(this.component._suggestions)}}class InputTextController extends InputTextEmailController{constructor(t,o,e){super(t,o,e),this.hasError=!1,this.component=t}validateType(t){(0,_index_de9d4ee0_js__WEBPACK_IMPORTED_MODULE_1__.w)(this.component,"_type",(t=>"string"==typeof t&&_index_de9d4ee0_js__WEBPACK_IMPORTED_MODULE_1__.ab.includes(t)),new Set([`String {${_index_de9d4ee0_js__WEBPACK_IMPORTED_MODULE_1__.ab.join(", ")}`]),t)}validateHasCounter(t){(0,_index_de9d4ee0_js__WEBPACK_IMPORTED_MODULE_1__.ac)(this.component,t)}componentWillLoad(){super.componentWillLoad(),this.validateType(this.component._type),this.validateHasCounter(this.component._hasCounter)}} /***/ }), /***/ 53252: /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => { /* harmony export */ __webpack_require__.d(__webpack_exports__, { /* harmony export */ I: () => (/* binding */ InputController), /* harmony export */ g: () => (/* binding */ getRenderStates) /* harmony export */ }); /* harmony import */ var _index_de9d4ee0_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(55304); /* harmony import */ var _events_29e84d75_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(71968); /* harmony import */ var _associated_controller_3f6bde32_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17796); /*! * KoliBri - The accessible HTML-Standard */ const getRenderStates=t=>{const e="string"==typeof t._error&&t._error.length>0&&!0===t._touched,o="string"==typeof t._hint&&t._hint.length>0,n=[];return!0===e&&n.push(`${t._id}-error`),!0===o&&n.push(`${t._id}-hint`),{hasError:e,hasHint:o,ariaDescribedBy:n}};class ControlledInputController extends _associated_controller_3f6bde32_js__WEBPACK_IMPORTED_MODULE_0__.A{constructor(t,e,o){super(t,e,o),this.component=t}validateAlert(t){(0,_index_de9d4ee0_js__WEBPACK_IMPORTED_MODULE_1__.B)(this.component,"_alert",t)}validateTouched(t){(0,_index_de9d4ee0_js__WEBPACK_IMPORTED_MODULE_1__.N)(this.component,t)}componentWillLoad(){super.componentWillLoad(),this.validateAlert(this.component._alert),this.validateTouched(this.component._touched)}}class InputController extends ControlledInputController{constructor(t,e,o){super(t,e,o),this.valueChangeListeners=[],this.onFacade={onBlur:this.onBlur.bind(this),onChange:this.onChange.bind(this),onClick:this.onClick.bind(this),onFocus:this.onFocus.bind(this)},this.component=t}validateAccessKey(t){(0,_index_de9d4ee0_js__WEBPACK_IMPORTED_MODULE_1__.C)(this.component,"_accessKey",t)}validateAdjustHeight(t){(0,_index_de9d4ee0_js__WEBPACK_IMPORTED_MODULE_1__.O)(this.component,t)}validateDisabled(t){(0,_index_de9d4ee0_js__WEBPACK_IMPORTED_MODULE_1__.B)(this.component,"_disabled",t),!0===t&&(0,_index_de9d4ee0_js__WEBPACK_IMPORTED_MODULE_1__.P)()}validateError(t){(0,_index_de9d4ee0_js__WEBPACK_IMPORTED_MODULE_1__.C)(this.component,"_error",t)}validateHideError(t){(0,_index_de9d4ee0_js__WEBPACK_IMPORTED_MODULE_1__.Q)(this.component,t,{hooks:{afterPatch:()=>{this.component.state._hideError&&(0,_index_de9d4ee0_js__WEBPACK_IMPORTED_MODULE_1__.T)("Property hide-error for inputs: Only use when the error message is shown outside of the input component.")}}})}validateHideLabel(t){(0,_index_de9d4ee0_js__WEBPACK_IMPORTED_MODULE_1__.R)(this.component,t,{hooks:{afterPatch:()=>{this.component.state._hideLabel&&(0,_index_de9d4ee0_js__WEBPACK_IMPORTED_MODULE_1__.T)("Property hide-label for inputs: Only use for exceptions like search inputs that are clearly identifiable by their context.")}}})}validateHint(t){(0,_index_de9d4ee0_js__WEBPACK_IMPORTED_MODULE_1__.C)(this.component,"_hint",t)}validateId(t){(0,_index_de9d4ee0_js__WEBPACK_IMPORTED_MODULE_1__.C)(this.component,"_id",t,{hooks:{afterPatch:()=>{this.setAttribute("id",this.formAssociated,this.component.state._id)}},minLength:1}),""!==t&&void 0!==t||(0,_index_de9d4ee0_js__WEBPACK_IMPORTED_MODULE_1__.h)("Eine eindeutige ID an den Eingabefeldern ist nicht zwingend erforderlich, könnte aber für die E2E-Tests relevant sein.")}validateLabel(t){(0,_index_de9d4ee0_js__WEBPACK_IMPORTED_MODULE_1__.U)(this.component,t,{required:!0})}validateOn(t){"object"==typeof t&&(0,_index_de9d4ee0_js__WEBPACK_IMPORTED_MODULE_1__.m)(this.component,"_on",t)}validateSmartButton(t){(0,_index_de9d4ee0_js__WEBPACK_IMPORTED_MODULE_1__.t)(t,(()=>{try{t=(0,_index_de9d4ee0_js__WEBPACK_IMPORTED_MODULE_1__.u)(t)}catch(t){}(0,_index_de9d4ee0_js__WEBPACK_IMPORTED_MODULE_1__.m)(this.component,"_smartButton",t)}))}validateTabIndex(t){(0,_index_de9d4ee0_js__WEBPACK_IMPORTED_MODULE_1__.V)(this.component,t)}componentWillLoad(){super.componentWillLoad(),this.validateAccessKey(this.component._accessKey),this.validateAdjustHeight(this.component._adjustHeight),this.validateError(this.component._error),this.validateDisabled(this.component._disabled),this.validateHideError(this.component._hideError),this.validateHideLabel(this.component._hideLabel),this.validateHint(this.component._hint),this.validateId(this.component._id),this.validateLabel(this.component._label),this.validateSmartButton(this.component._smartButton),this.validateOn(this.component._on),this.validateTabIndex(this.component._tabIndex)}onBlur(t){var e;this.component._alert=!0,this.component._touched=!0,(0,_events_29e84d75_js__WEBPACK_IMPORTED_MODULE_2__.s)(t),(0,_events_29e84d75_js__WEBPACK_IMPORTED_MODULE_2__.t)("blur",this.host),"function"==typeof(null===(e=this.component._on)||void 0===e?void 0:e.onBlur)&&this.component._on.onBlur(t)}onChange(t){var e;const o=t.target.value;(0,_events_29e84d75_js__WEBPACK_IMPORTED_MODULE_2__.t)("change",this.host,o),this.setFormAssociatedValue(o),"function"==typeof(null===(e=this.component._on)||void 0===e?void 0:e.onChange)&&this.component._on.onChange(t,o),this.valueChangeListeners.forEach((t=>t(o)))}onClick(t){var e;(0,_events_29e84d75_js__WEBPACK_IMPORTED_MODULE_2__.s)(t),(0,_events_29e84d75_js__WEBPACK_IMPORTED_MODULE_2__.t)("click",this.host),"function"==typeof(null===(e=this.component._on)||void 0===e?void 0:e.onClick)&&this.component._on.onClick(t)}onFocus(t){var e;this.component._alert=!0,(0,_events_29e84d75_js__WEBPACK_IMPORTED_MODULE_2__.s)(t),(0,_events_29e84d75_js__WEBPACK_IMPORTED_MODULE_2__.t)("focus",this.host),"function"==typeof(null===(e=this.component._on)||void 0===e?void 0:e.onFocus)&&this.component._on.onFocus(t)}addValueChangeListener(t){this.valueChangeListeners.push(t)}} /***/ }), /***/ 95136: /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => { /* harmony export */ __webpack_require__.d(__webpack_exports__, { /* harmony export */ I: () => (/* binding */ InputPasswordController) /* harmony export */ }); /* harmony import */ var _index_de9d4ee0_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(55304); /* harmony import */ var _controller_icon_03261e4e_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8292); /*! * KoliBri - The accessible HTML-Standard */ class InputPasswordController extends _controller_icon_03261e4e_js__WEBPACK_IMPORTED_MODULE_0__.I{constructor(t,e,o){super(t,e,o),this.component=t}validateAutoComplete(t){(0,_index_de9d4ee0_js__WEBPACK_IMPORTED_MODULE_1__.w)(this.component,"_autoComplete",(t=>"string"==typeof t&&("on"===t||"off"===t)),new Set(["on | off"]),t)}validateHasCounter(t){(0,_index_de9d4ee0_js__WEBPACK_IMPORTED_MODULE_1__.ac)(this.component,t)}validateMaxLength(t){(0,_index_de9d4ee0_js__WEBPACK_IMPORTED_MODULE_1__.a7)(this.component,"_maxLength",t,{min:0})}validatePattern(t){(0,_index_de9d4ee0_js__WEBPACK_IMPORTED_MODULE_1__.C)(this.component,"_pattern",t)}validatePlaceholder(t){(0,_index_de9d4ee0_js__WEBPACK_IMPORTED_MODULE_1__.C)(this.component,"_placeholder",t)}validateReadOnly(t){(0,_index_de9d4ee0_js__WEBPACK_IMPORTED_MODULE_1__.B)(this.component,"_readOnly",t)}validateRequired(t){(0,_index_de9d4ee0_js__WEBPACK_IMPORTED_MODULE_1__.B)(this.component,"_required",t)}validateValue(t){(0,_index_de9d4ee0_js__WEBPACK_IMPORTED_MODULE_1__.C)(this.component,"_value",t),this.setFormAssociatedValue(this.component.state._value)}componentWillLoad(){super.componentWillLoad(),this.validateAutoComplete(this.component._autoComplete),this.validateHasCounter(this.component._hasCounter),this.validateMaxLength(this.component._maxLength),this.validatePattern(this.component._pattern),this.validatePlaceholder(this.component._placeholder),this.validateReadOnly(this.component._readOnly),this.validateRequired(this.component._required),this.validateValue(this.component._value)}onBlur(t){this.component.state=Object.assign(Object.assign({},this.component.state),{_placeholder:this.placeholderCache}),this.placeholderCache=void 0,super.onBlur(t)}onFocus(t){this.placeholderCache=this.component.state._placeholder,this.component.state=Object.assign(Object.assign({},this.component.state),{_placeholder:void 0}),super.onFocus(t)}} /***/ }), /***/ 12928: /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => { /* harmony export */ __webpack_require__.d(__webpack_exports__, { /* harmony export */ a: () => (/* binding */ propagateResetEventToForm), /* harmony export */ p: () => (/* binding */ propagateSubmitEventToForm) /* harmony export */ }); /* harmony import */ var _index_de9d4ee0_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(55304); /*! * KoliBri - The accessible HTML-Standard */ const searchFormElement=e=>{for((0,_index_de9d4ee0_js__WEBPACK_IMPORTED_MODULE_0__.a0)()&&((0,_index_de9d4ee0_js__WEBPACK_IMPORTED_MODULE_0__.h)("↓ Search form element start."),console.log(e));e instanceof HTMLElement&&"FORM"!==e.tagName&&"KOL-FORM"!==e.tagName;){try{e=e.parentElement instanceof HTMLElement?e.parentElement:e.parentNode instanceof ShadowRoot?e.parentNode.host:null}catch(e){}(0,_index_de9d4ee0_js__WEBPACK_IMPORTED_MODULE_0__.a0)()&&(console.log(e),(0,_index_de9d4ee0_js__WEBPACK_IMPORTED_MODULE_0__.h)("↑ Search form element finished."))}return e},propagateResetEventToForm=(e={})=>{var t,o;const n=searchFormElement(e.form);if(n instanceof HTMLElement){const e=new Event("reset",{bubbles:!0,cancelable:!0});if("FORM"===n.tagName)(0,_index_de9d4ee0_js__WEBPACK_IMPORTED_MODULE_0__.a9)(e,n),n.dispatchEvent(e);else if("KOL-FORM"===n.tagName){(0,_index_de9d4ee0_js__WEBPACK_IMPORTED_MODULE_0__.a9)(e,_index_de9d4ee0_js__WEBPACK_IMPORTED_MODULE_0__.K.querySelector("form",n));const a=n;"function"==typeof(null===(t=a._on)||void 0===t?void 0:t.onReset)&&(null===(o=a._on)||void 0===o||o.onReset(e))}}},propagateSubmitEventToForm=(e={})=>{var t,o;const n=searchFormElement(e.form);if(n instanceof HTMLElement){const e=new SubmitEvent("submit",{bubbles:!0,cancelable:!0,submitter:n});if("FORM"===n.tagName)(0,_index_de9d4ee0_js__WEBPACK_IMPORTED_MODULE_0__.a9)(e,n),n.dispatchEvent(e),(0,_index_de9d4ee0_js__WEBPACK_IMPORTED_MODULE_0__.a0)()&&!1===n.noValidate&&(0,_index_de9d4ee0_js__WEBPACK_IMPORTED_MODULE_0__.h)("If you have not focusable or hidden form fields in your form, you should enable noValidate for your form.",{force:!0}),"function"==typeof n.requestSubmit&&n.requestSubmit();else if("KOL-FORM"===n.tagName){(0,_index_de9d4ee0_js__WEBPACK_IMPORTED_MODULE_0__.a9)(e,_index_de9d4ee0_js__WEBPACK_IMPORTED_MODULE_0__.K.querySelector("form",n));const a=n;"function"==typeof(null===(t=a._on)||void 0===t?void 0:t.onSubmit)&&(null===(o=a._on)||void 0===o||o.onSubmit(e))}}}; /***/ }), /***/ 8292: /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => { /* harmony export */ __webpack_require__.d(__webpack_exports__, { /* harmony export */ I: () => (/* binding */ InputIconController) /* harmony export */ }); /* harmony import */ var _index_de9d4ee0_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(55304); /* harmony import */ var _controller_4e891541_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(53252); /*! * KoliBri - The accessible HTML-Standard */ const beforePatchIcons=(o,t)=>{const n=o;"object"==typeof n&&null!==n&&((0,_index_de9d4ee0_js__WEBPACK_IMPORTED_MODULE_0__.H)(n.right,1)&&(n.right={icon:n.right}),(0,_index_de9d4ee0_js__WEBPACK_IMPORTED_MODULE_0__.H)(n.left,1)&&(n.left={icon:n.left}),t.set("_icons",n))};class InputIconController extends _controller_4e891541_js__WEBPACK_IMPORTED_MODULE_1__.I{constructor(o,t,n){super(o,t,n),this.component=o}validateIcon(o){this.validateIcons(o)}validateIcons(o){(0,_index_de9d4ee0_js__WEBPACK_IMPORTED_MODULE_0__.t)(o,(()=>{try{o=(0,_index_de9d4ee0_js__WEBPACK_IMPORTED_MODULE_0__.u)(o)}catch(o){}(0,_index_de9d4ee0_js__WEBPACK_IMPORTED_MODULE_0__.w)(this.component,"_icons",(o=>"object"==typeof o&&null!==o&&((0,_index_de9d4ee0_js__WEBPACK_IMPORTED_MODULE_0__.H)(o.left,1)||(0,_index_de9d4ee0_js__WEBPACK_IMPORTED_MODULE_0__.a5)(o.left)||(0,_index_de9d4ee0_js__WEBPACK_IMPORTED_MODULE_0__.H)(o.right,1)||(0,_index_de9d4ee0_js__WEBPACK_IMPORTED_MODULE_0__.a5)(o.right))),new Set(["KoliBriHorizontalIcon"]),o,{hooks:{beforePatch:beforePatchIcons},required:!0})}))}componentWillLoad(){super.componentWillLoad(),this.validateIcons(this.component._icons||this.component._icon)}} /***/ }), /***/ 71968: /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => { /* harmony export */ __webpack_require__.d(__webpack_exports__, { /* harmony export */ p: () => (/* binding */ preventDefaultAndStopPropagation), /* harmony export */ s: () => (/* binding */ stopPropagation), /* harmony export */ t: () => (/* binding */ tryToDispatchKoliBriEvent) /* harmony export */ }); /*! * KoliBri - The accessible HTML-Standard */ function stopPropagation(t){t.stopImmediatePropagation(),t.stopPropagation()}function createKoliBriEvent(t,o){return new CustomEvent(`kol-${t}`,{bubbles:!0,cancelable:!0,composed:!0,detail:o})}function dispatchKoliBriEvent(t,o,n){return t.dispatchEvent(createKoliBriEvent(o,n))}function tryToDispatchKoliBriEvent(t,o,n){o&&dispatchKoliBriEvent(o,t,n)}function preventDefaultAndStopPropagation(t){t.preventDefault(),stopPropagation(t)} /***/ }), /***/ 56096: /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => { __webpack_require__.r(__webpack_exports__); /* harmony export */ __webpack_require__.d(__webpack_exports__, { /* harmony export */ kol_input_email: () => (/* binding */ KolInputEmail) /* harmony export */ }); /* harmony import */ var _index_62e5924b_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(91388); /* harmony import */ var _index_de9d4ee0_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(55304); /* harmony import */ var _dev_utils_744f41b3_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(31800); /* harmony import */ var _controller_ec7c96d6_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(12928); /* harmony import */ var _controller_4e891541_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(53252); /* harmony import */ var _InternalUnderlinedAccessKey_2cbdead6_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(52260); /* harmony import */ var _controller_0ea2a876_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(51008); /*! * KoliBri - The accessible HTML-Standard */ class InputEmailController extends _controller_0ea2a876_js__WEBPACK_IMPORTED_MODULE_0__.I{constructor(e,t,n){super(e,t,n),this.component=e}validateMultiple(e){(0,_index_de9d4ee0_js__WEBPACK_IMPORTED_MODULE_1__.aa)(this.component,e)}componentWillLoad(){super.componentWillLoad(),this.validateMultiple(this.component._multiple)}}const defaultStyleCss="/*\n * This file contains all rules for accessibility.\n */\n@layer kol-global {\n :host {\n /*\n * Minimum size of interactive elements.\n */\n --a11y-min-size: 44px;\n /*\n * No element should be used without a background and font color whose contrast ratio has\n * not been checked. By initially setting the background color to white and the font color\n * to black, the contrast ratio is ensured and explicit adjustment is forced.\n */\n background-color: white;\n color: black;\n /*\n * Verdana is an accessible font that can be used without requiring additional loading time.\n */\n font-family: Verdana;\n }\n * {\n /*\n * This rule enables the word dividing for all texts. That is important for high zoom levels.\n */\n hyphens: auto;\n /*\n * Letter spacing is required for all texts.\n */\n letter-spacing: inherit;\n /*\n * This rule enables the word dividing for all texts. That is important for high zoom levels.\n */\n word-break: break-word;\n /*\n * Word spacing is required for all texts.\n */\n word-spacing: inherit;\n }\n /*\n * All interactive elements should have a minimum size of 44px.\n */\n /* input:not([type='checkbox'], [type='radio'], [type='range']), */\n /* option, */\n /* select, */\n /* textarea, */\n [role=button],\n button:not([role=link]),\n kol-input .input {\n min-height: var(--a11y-min-size);\n min-width: var(--a11y-min-size);\n }\n /*\n * Some interactive elements should not inherit the font-family and font-size.\n */\n a,\n button,\n h1,\n h2,\n h3,\n h4,\n h5,\n h6,\n input,\n option,\n select,\n textarea {\n /*\n * All elements should inherit the font family from his parent element.\n */\n font-family: inherit;\n /*\n * All elements should inherit the font size from his parent element.\n */\n font-size: inherit;\n }\n}\n/**\n * Sometimes we need the semantic element for accessibility reasons,\n * but we don't want to show it.\n *\n * - https://www.a11yproject.com/posts/how-to-hide-content/\n */\n.visually-hidden {\n clip: rect(0 0 0 0);\n clip-path: inset(50%);\n height: 1px;\n overflow: hidden;\n position: absolute;\n white-space: nowrap;\n width: 1px;\n}\n\n@layer kol-global {\n /*\n * Dieses CSS stellt sicher, dass der Standard-Style\n * von A und Button resettet werden.\n */\n :is(a, button) {\n background-color: transparent;\n border: none;\n margin: 0;\n padding: 0;\n width: 100%; /* 100% needed for custom width from outside */\n }\n /*\n * Ensure elements with hidden attribute to be actually not visible\n * @see https://meowni.ca/hidden.is.a.lie.html\n */\n [hidden] {\n display: none !important;\n }\n}\n@layer kol-global {\n :host {\n /*\n * The max-width is needed to prevent the table from overflowing the\n * parent node, if the table is wider than the parent node.\n */\n max-width: 100%;\n }\n * {\n /*\n * We prefer to box-sizing: border-box for all elements.\n */\n box-sizing: border-box;\n }\n /* KolSpan is a layout component with icons in all directions and a label text in the middle. */\n kol-span-wc {\n display: grid;\n place-items: center;\n }\n /* The sub span in KolSpan is the horizontal span with icon left and right and the label text in the middle. */\n kol-span-wc > span {\n display: flex;\n place-items: center;\n }\n a,\n button {\n cursor: pointer;\n }\n .hidden {\n display: none;\n visibility: hidden;\n }\n /* This is the text label. */\n .hide-label > kol-span-wc > span > span {\n display: none;\n }\n /* Reset browser agent style. */\n button:disabled {\n color: unset;\n }\n .disabled label,\n .disabled:focus-within label,\n [aria-disabled=true],\n [aria-disabled=true]:focus,\n [disabled],\n [disabled]:focus {\n cursor: not-allowed !important;\n opacity: 0.5 !important;\n outline: none !important;\n }\n [aria-disabled=true]:focus kol-span-wc,\n [disabled]:focus kol-span-wc {\n outline: none !important;\n }\n}\n@layer kol-component {\n .required label > span::after,\n .required legend > span::after {\n content: \"*\";\n }\n}\n@layer kol-component {\n :host {\n display: block;\n }\n}\n@layer kol-component {\n input,\n textarea {\n cursor: text;\n }\n input[type=checkbox],\n input[type=color],\n input[type=file],\n input[type=radio],\n input[type=range],\n label,\n option,\n select {\n cursor: pointer;\n }\n /* input[type='checkbox'], */\n /* input[type='radio'], */\n /* input[type='range'], */\n input[type=color],\n input[type=date],\n input[type=datetime-local],\n input[type=email],\n input[type=file],\n input[type=month],\n input[type=number],\n input[type=password],\n input[type=search],\n input[type=tel],\n input[type=text],\n input[type=time],\n input[type=url],\n input[type=week],\n select,\n select[multiple] option,\n textarea {\n font-size: 1rem;\n width: 100%;\n }\n /* needed hack for vertical alignment */\n input[type=file] {\n padding: calc((var(--a11y-min-size) - 1rem) / 10) 0.5em;\n }\n /* needed hack for vertical alignment */\n select[multiple] option {\n padding: calc((var(--a11y-min-size) - 1rem) / 2) 0.5em;\n }\n}\n@layer kol-component {\n kol-input {\n display: grid;\n }\n kol-input .input-slot {\n flex-grow: 1;\n }\n input:not([type=checkbox], [type=radio]),\n select:not([multiple], [size]) {\n height: 2.75em;\n }\n input:focus,\n option:focus,\n select:focus,\n textarea:focus {\n outline: 0;\n }\n .input {\n display: flex;\n align-items: center;\n }\n .input > kol-icon {\n display: grid;\n height: var(--a11y-min-size);\n place-items: center;\n }\n kol-input.required .input-tooltip .span-label::after {\n content: \"*\";\n }\n}\n@layer kol-component {}",KolInputEmailDefaultStyle0=defaultStyleCss,KolInputEmail=class{async getValue(){var e;return null===(e=this.ref)||void 0===e?void 0:e.value}render(){const{ariaDescribedBy:e}=(0,_controller_4e891541_js__WEBPACK_IMPORTED_MODULE_2__.g)(this.state),t=Array.isArray(this.state._suggestions)&&this.state._suggestions.length>0,n=(0,_index_de9d4ee0_js__WEBPACK_IMPORTED_MODULE_1__.M)(this.state._label);return (0,_index_62e5924b_js__WEBPACK_IMPORTED_MODULE_3__.h)(_index_62e5924b_js__WEBPACK_IMPORTED_MODULE_3__.H,{key:"17351455294a9fd33dd4f767e925691203b5bcfe",class:{"has-value":this.state._hasValue}},(0,_index_62e5924b_js__WEBPACK_IMPORTED_MODULE_3__.h)("kol-input",{key:"bf17a3ae4af49ca98d13faa0c4587c1ac045ae50",class:{email:!0,"hide-label":!!this.state._hideLabel},_accessKey:this.state._accessKey,_alert:this.state._alert,_currentLength:this.state._currentLength,_disabled:this.state._disabled,_error:this.state._error,_hideError:this.state._hideError,_hasCounter:this.state._hasCounter,_hideLabel:this.state._hideLabel,_hint:this.state._hint,_icons:this.state._icons,_id:this.state._id,_label:this.state._label,_suggestions:this.state._suggestions,_maxLength:this.state._maxLength,_readOnly:this.state._readOnly,_required:this.state._required,_smartButton:this.state._smartButton,_tooltipAlign:this._tooltipAlign,_touched:this.state._touched,onClick:()=>{var e;return null===(e=this.ref)||void 0===e?void 0:e.focus()},role:"presentation"},(0,_index_62e5924b_js__WEBPACK_IMPORTED_MODULE_3__.h)("span",{key:"e2c3622e27997288631f7da599a131b490612278",slot:"label"},n?(0,_index_62e5924b_js__WEBPACK_IMPORTED_MODULE_3__.h)("slot",{name:"expert"}):"string"==typeof this.state._accessKey?(0,_index_62e5924b_js__WEBPACK_IMPORTED_MODULE_3__.h)(_index_62e5924b_js__WEBPACK_IMPORTED_MODULE_3__.F,null,(0,_index_62e5924b_js__WEBPACK_IMPORTED_MODULE_3__.h)(_InternalUnderlinedAccessKey_2cbdead6_js__WEBPACK_IMPORTED_MODULE_4__.I,{accessKey:this.state._accessKey,label:this.state._label})," ",(0,_index_62e5924b_js__WEBPACK_IMPORTED_MODULE_3__.h)("span",{class:"access-key-hint","aria-hidden":"true"},this.state._accessKey)):(0,_index_62e5924b_js__WEBPACK_IMPORTED_MODULE_3__.h)("span",null,this.state._label)),(0,_index_62e5924b_js__WEBPACK_IMPORTED_MODULE_3__.h)("div",{key:"3156021bac4ea17856ee19cc40a5ccdc6a962597",slot:"input"},(0,_index_62e5924b_js__WEBPACK_IMPORTED_MODULE_3__.h)("input",Object.assign({key:"4178cba968337df4bc30d59268c3dc4f5b28afd8",ref:this.catchRef,title:"",accessKey:this.state._accessKey,"aria-describedby":e.length>0?e.join(" "):void 0,"aria-label":this.state._hideLabel&&"string"==typeof this.state._label?this.state._label:void 0,autoCapitalize:"off",autoComplete:this.state._autoComplete,autoCorrect:"off",disabled:this.state._disabled,multiple:this.state._multiple,id:this.state._id,list:t?`${this.state._id}-list`:void 0,maxlength:this.state._maxLength,name:this.state._name,pattern:this.state._pattern,placeholder:this.state._placeholder,readOnly:this.state._readOnly,required:this.state._required,spellcheck:"false",type:"email",value:this.state._value},this.controller.onFacade,{onKeyUp:this.onKeyUp})))))}constructor(e){(0,_index_62e5924b_js__WEBPACK_IMPORTED_MODULE_3__.r)(this,e),this.catchRef=e=>{this.ref=e,(0,_index_de9d4ee0_js__WEBPACK_IMPORTED_MODULE_1__.k)(this.host,this.ref)},this.onKeyUp=e=>{(0,_index_de9d4ee0_js__WEBPACK_IMPORTED_MODULE_1__.m)(this,"_currentLength",e.target.value.length),"Enter"===e.code?(0,_controller_ec7c96d6_js__WEBPACK_IMPORTED_MODULE_5__.p)({form:this.host,ref:this.ref}):this.controller.onFacade.onChange(e)},this._accessKey=void 0,this._alert=!0,this._autoComplete=void 0,this._disabled=!1,this._error=void 0,this._hasCounter=!1,this._hideError=!1,this._hideLabel=!1,this._hint="",this._icons=void 0,this._id=void 0,this._label=void 0,this._maxLength=void 0,this._multiple=!1,this._name=void 0,this._on=void 0,this._pattern=void 0,this._placeholder=void 0,this._readOnly=!1,this._required=!1,this._smartButton=void 0,this._suggestions=void 0,this._syncValueBySelector=void 0,this._tabIndex=void 0,this._tooltipAlign="top",this._touched=!1,this._value=void 0,this.state={_autoComplete:"off",_currentLength:0,_hasValue:!1,_hideError:!1,_id:`id-${(0,_dev_utils_744f41b3_js__WEBPACK_IMPORTED_MODULE_6__.n)()}`,_label:"",_suggestions:[]},this.controller=new InputEmailController(this,"email",this.host)}validateAccessKey(e){this.controller.validateAccessKey(e)}validateAlert(e){this.controller.validateAlert(e)}validateAutoComplete(e){this.controller.validateAutoComplete(e)}validateDisabled(e){this.controller.validateDisabled(e)}validateError(e){this.controller.validateError(e)}validateHasCounter(e){this.controller.validateHasCounter(e)}validateHideError(e){this.controller.validateHideError(e)}validateHideLabel(e){this.controller.validateHideLabel(e)}validateHint(e){this.controller.validateHint(e)}validateIcons(e){this.controller.validateIcons(e)}validateId(e){this.controller.validateId(e)}validateLabel(e){this.controller.validateLabel(e)}validateMaxLength(e){this.controller.validateMaxLength(e)}validateMultiple(e){this.controller.validateMultiple(e)}validateName(e){this.controller.validateName(e)}validateOn(e){this.controller.validateOn(e)}validatePattern(e){this.controller.validatePattern(e)}validatePlaceholder(e){this.controller.validatePlaceholder(e)}validateReadOnly(e){this.controller.validateReadOnly(e)}validateRequired(e){this.controller.validateRequired(e)}validateSuggestions(e){this.controller.validateSuggestions(e)}validateSmartButton(e){this.controller.validateSmartButton(e)}validateSyncValueBySelector(e){this.controller.validateSyncValueBySelector(e)}validateTabIndex(e){this.controller.validateTabIndex(e)}validateTouched(e){this.controller.validateTouched(e)}validateValue(e){this.controller.validateValue(e)}componentWillLoad(){this._alert=!0===this._alert,this._touched=!0===this._touched,this.controller.componentWillLoad(),this.state._hasValue=!!this.state._value,this.controller.addValueChangeListener((e=>this.state._hasValue=!!e))}get host(){return (0,_index_62e5924b_js__WEBPACK_IMPORTED_MODULE_3__.g)(this)}static get watchers(){return{_accessKey:["validateAccessKey"],_alert:["validateAlert"],_autoComplete:["validateAutoComplete"],_disabled:["validateDisabled"],_error:["validateError"],_hasCounter:["validateHasCounter"],_hideError:["validateHideError"],_hideLabel:["validateHideLabel"],_hint:["validateHint"],_icons:["validateIcons"],_id:["validateId"],_label:["validateLabel"],_maxLength:["validateMaxLength"],_multiple:["validateMultiple"],_name:["validateName"],_on:["validateOn"],_pattern:["validatePattern"],_placeholder:["validatePlaceholder"],_readOnly:["validateReadOnly"],_required:["validateRequired"],_suggestions:["validateSuggestions"],_smartButton:["validateSmartButton"],_syncValueBySelector:["validateSyncValueBySelector"],_tabIndex:["validateTabIndex"],_touched:["validateTouched"],_value:["validateValue"]}}};KolInputEmail.style={default:KolInputEmailDefaultStyle0}; /***/ }) }; ;