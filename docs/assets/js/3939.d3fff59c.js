"use strict"; exports.id = 3939; exports.ids = [3939]; exports.modules = { /***/ 44421: /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => { /* harmony export */ __webpack_require__.d(__webpack_exports__, { /* harmony export */ "a": () => (/* binding */ validateAriaSelected), /* harmony export */ "v": () => (/* binding */ validateAriaCurrent) /* harmony export */ }); /* harmony import */ var _prop_validators_e15a584f_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96863); /*! * KoliBri - The accessible HTML-Standard */ const validateAriaCurrent=(a,e)=>{(0,_prop_validators_e15a584f_js__WEBPACK_IMPORTED_MODULE_0__.a)(a,"_ariaCurrent",(a=>"date"===a||"location"===a||"page"===a||"step"===a||"time"===a||!0===a),new Set(["String {data, location, page, step, time}","boolean"]),e)},validateAriaSelected=(a,e)=>{(0,_prop_validators_e15a584f_js__WEBPACK_IMPORTED_MODULE_0__.b)(a,"_ariaSelected",e)}; /***/ }), /***/ 56378: /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => { /* harmony export */ __webpack_require__.d(__webpack_exports__, { /* harmony export */ "w": () => (/* binding */ watchTooltipAlignment) /* harmony export */ }); /* harmony import */ var _prop_validators_e15a584f_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96863); /*! * KoliBri - The accessible HTML-Standard */ const watchTooltipAlignment=(t,o,a)=>{(0,_prop_validators_e15a584f_js__WEBPACK_IMPORTED_MODULE_0__.a)(t,o,(t=>"top"===t||"right"===t||"bottom"===t||"left"===t),new Set(["Alignment {top, right, buttom, left}"]),a,{defaultValue:"top"})}; /***/ }), /***/ 46860: /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => { /* harmony export */ __webpack_require__.d(__webpack_exports__, { /* harmony export */ "a": () => (/* binding */ watchButtonType), /* harmony export */ "w": () => (/* binding */ watchButtonVariant) /* harmony export */ }); /* harmony import */ var _prop_validators_e15a584f_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96863); /*! * KoliBri - The accessible HTML-Standard */ const watchButtonType=(t,a,o)=>{(0,_prop_validators_e15a584f_js__WEBPACK_IMPORTED_MODULE_0__.a)(t,a,(t=>"button"===t||"reset"===t||"submit"===t),new Set(["KoliBriButtonType {button, reset, submit}"]),o)},watchButtonVariant=(t,a,o)=>{(0,_prop_validators_e15a584f_js__WEBPACK_IMPORTED_MODULE_0__.a)(t,a,(t=>"primary"===t||"secondary"===t||"normal"===t||"danger"===t||"ghost"===t||"custom"===t),new Set(["KoliBriButtonVariant {primary, secondary, normal, danger, ghost, custom}"]),o,{defaultValue:"normal"})}; /***/ }), /***/ 30693: /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => { /* harmony export */ __webpack_require__.d(__webpack_exports__, { /* harmony export */ "a": () => (/* binding */ validateDisabled), /* harmony export */ "v": () => (/* binding */ validateAriaExpanded) /* harmony export */ }); /* harmony import */ var _prop_validators_e15a584f_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96863); /*! * KoliBri - The accessible HTML-Standard */ const validateAriaExpanded=(a,d)=>{(0,_prop_validators_e15a584f_js__WEBPACK_IMPORTED_MODULE_0__.b)(a,"_ariaExpanded",d)},validateDisabled=(a,d)=>{(0,_prop_validators_e15a584f_js__WEBPACK_IMPORTED_MODULE_0__.b)(a,"_disabled",d)}; /***/ }), /***/ 61026: /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => { /* harmony export */ __webpack_require__.d(__webpack_exports__, { /* harmony export */ "v": () => (/* binding */ validateHideLabel) /* harmony export */ }); /* harmony import */ var _prop_validators_e15a584f_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96863); /*! * KoliBri - The accessible HTML-Standard */ const validateHideLabel=(a,e)=>{(0,_prop_validators_e15a584f_js__WEBPACK_IMPORTED_MODULE_0__.b)(a,"_hideLabel",e)}; /***/ }), /***/ 53939: /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => { __webpack_require__.r(__webpack_exports__); /* harmony export */ __webpack_require__.d(__webpack_exports__, { /* harmony export */ "kol_split_button": () => (/* binding */ KolSplitButton) /* harmony export */ }); /* harmony import */ var _index_0e29e47a_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(97533); /* harmony import */ var _prop_validators_e15a584f_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(96863); /* harmony import */ var _label_4bfc9d30_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(42188); /* harmony import */ var _a11y_tipps_1cea9822_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(79305); /* harmony import */ var _tab_index_eff012a1_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(26474); /* harmony import */ var _button_link_4a7e6a2e_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(56378); /* harmony import */ var _controller_985aff52_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(46860); /* harmony import */ var _aria_selected_aaf31182_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(44421); /* harmony import */ var _disabled_9bd11a04_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(30693); /* harmony import */ var _hide_label_5d7003be_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(61026); /*! * KoliBri - The accessible HTML-Standard */ const defaultStyleCss=":host{--a11y-min-size:44px}*{hyphens:auto;letter-spacing:inherit;word-break:break-word;word-spacing:inherit}[role='button'],button:not([role='link']),kol-input .input{min-height:var(--a11y-min-size);min-width:var(--a11y-min-size)}a,button,h1,h2,h3,h4,h5,h6,input,option,select,textarea{font-family:inherit;font-size:inherit}:is(a,button){background-color:transparent;border:none;margin:0;padding:0;width:100%;}:host{max-width:100%}*{box-sizing:border-box}kol-span-wc{display:grid;place-items:center}kol-span-wc>span{display:flex;place-items:center}a,button{cursor:pointer}button,input,option,select,textarea{font-family:inherit}.icon-only>kol-span-wc>span>span{display:none}:host{display:flex;position:relative}.main-button{flex-grow:1;text-align:left}.main-button kol-span-wc{place-items:start}.secondary-button button{height:100%}.horizontal-line{background-color:rgba(0, 0, 0, 0.2);border-radius:2px;height:70%;margin-block:auto;width:1px}.popover{height:0;left:0;min-width:100%;overflow:hidden;position:absolute;top:100%;transition:height 0.3s ease-in-out;z-index:-1}.popover-content{inset:0 0 auto 0;min-width:100%;position:absolute}",KolSplitButton=class{constructor(t){(0,_index_0e29e47a_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,t),this.toggleDropdown=()=>{this.dropdown&&this.dropdownContent&&(this.state._showDropdown?this.dropdown.style.height="":this.dropdown.style.height=`${this.dropdownContent.clientHeight}px`),this.state=Object.assign(Object.assign({},this.state),{_showDropdown:!this.state._showDropdown})},this.catchDropdownElements=t=>{t&&(this.dropdown=t,setTimeout((()=>{this.dropdownContent=t.firstChild}),1))},this._accessKey=void 0,this._ariaControls=void 0,this._ariaCurrent=void 0,this._ariaExpanded=void 0,this._ariaLabel=void 0,this._ariaSelected=void 0,this._customClass=void 0,this._disabled=!1,this._hideLabel=!1,this._icon=void 0,this._iconOnly=!1,this._label=void 0,this._onClick=void 0,this._role=void 0,this._showDropdown=!1,this._tabIndex=void 0,this._tooltipAlign="top",this._type="button",this._value=void 0,this._variant="normal",this.state={_icon:"",_label:"",_showDropdown:!1}}render(){return (0,_index_0e29e47a_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_0e29e47a_js__WEBPACK_IMPORTED_MODULE_0__.H,null,(0,_index_0e29e47a_js__WEBPACK_IMPORTED_MODULE_0__.h)("kol-button-wc",{class:{"main-button":!0,button:!0,[this._variant]:"custom"!==this._variant,[this._customClass]:"custom"===this._variant&&"string"==typeof this._customClass&&this._customClass.length>0},_accessKey:this._accessKey,_ariaControls:this._ariaControls,_ariaCurrent:this._ariaCurrent,_ariaExpanded:this._ariaExpanded,_ariaLabel:this._ariaLabel,_ariaSelected:this._ariaSelected,_customClass:this._customClass,_disabled:this._disabled,_icon:this._icon,_iconOnly:this._hideLabel,_label:this._label,_on:"function"==typeof this.state._onClick?{onClick:this.state._onClick}:{onClick:this.toggleDropdown},_role:this._role,_tabIndex:this._tabIndex,_tooltipAlign:this._tooltipAlign,_type:this._type,_value:this._value,_variant:this._variant}),(0,_index_0e29e47a_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"horizontal-line"}),(0,_index_0e29e47a_js__WEBPACK_IMPORTED_MODULE_0__.h)("kol-button-wc",{class:"secondary-button",_disabled:this._disabled,"_icon-only":!0,_icon:"codicon codicon-triangle-down",_label:"dropdown öffnen",_on:{onClick:this.toggleDropdown}}),(0,_index_0e29e47a_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"popover",ref:this.catchDropdownElements},(0,_index_0e29e47a_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"popover-content"},(0,_index_0e29e47a_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{name:"popover"}))))}validateAccessKey(t){(0,_prop_validators_e15a584f_js__WEBPACK_IMPORTED_MODULE_1__.w)(this,"_accessKey",t)}validateAriaControls(t){(0,_prop_validators_e15a584f_js__WEBPACK_IMPORTED_MODULE_1__.w)(this,"_ariaControls",t)}validateAriaCurrent(t){(0,_aria_selected_aaf31182_js__WEBPACK_IMPORTED_MODULE_2__.v)(this,t)}validateAriaExpanded(t){(0,_disabled_9bd11a04_js__WEBPACK_IMPORTED_MODULE_3__.v)(this,t)}validateAriaLabel(t){(0,_label_4bfc9d30_js__WEBPACK_IMPORTED_MODULE_4__.a)(this,t)}validateAriaSelected(t){(0,_aria_selected_aaf31182_js__WEBPACK_IMPORTED_MODULE_2__.a)(this,t)}validateCustomClass(t){(0,_prop_validators_e15a584f_js__WEBPACK_IMPORTED_MODULE_1__.w)(this,"_customClass",t,{defaultValue:void 0})}validateDisabled(t){(0,_disabled_9bd11a04_js__WEBPACK_IMPORTED_MODULE_3__.a)(this,t),t&&(0,_a11y_tipps_1cea9822_js__WEBPACK_IMPORTED_MODULE_5__.e)()}validateHideLabel(t){(0,_hide_label_5d7003be_js__WEBPACK_IMPORTED_MODULE_6__.v)(this,t)}validateIcon(t){(0,_prop_validators_e15a584f_js__WEBPACK_IMPORTED_MODULE_1__.w)(this,"_icon",t)}validateIconOnly(t){(0,_hide_label_5d7003be_js__WEBPACK_IMPORTED_MODULE_6__.v)(this,t)}validateLabel(t){(0,_label_4bfc9d30_js__WEBPACK_IMPORTED_MODULE_4__.b)(this,t)}validateOnClick(t){"function"==typeof t&&(this.state=Object.assign(Object.assign({},this.state),{_onClick:t}))}validateRole(t){(0,_prop_validators_e15a584f_js__WEBPACK_IMPORTED_MODULE_1__.w)(this,"_role",t)}validateShowDropdown(t){(0,_prop_validators_e15a584f_js__WEBPACK_IMPORTED_MODULE_1__.b)(this,"_showDropdown",t)}validateTabIndex(t){(0,_tab_index_eff012a1_js__WEBPACK_IMPORTED_MODULE_7__.v)(this,t)}validateTooltipAlign(t){(0,_button_link_4a7e6a2e_js__WEBPACK_IMPORTED_MODULE_8__.w)(this,"_tooltipAlign",t)}validateType(t){(0,_controller_985aff52_js__WEBPACK_IMPORTED_MODULE_9__.a)(this,"_type",t)}validateValue(t){(0,_prop_validators_e15a584f_js__WEBPACK_IMPORTED_MODULE_1__.s)(this,"_value",t)}validateVariant(t){(0,_controller_985aff52_js__WEBPACK_IMPORTED_MODULE_9__.w)(this,"_variant",t)}componentWillLoad(){this.validateAccessKey(this._accessKey),this.validateAriaControls(this._ariaControls),this.validateAriaCurrent(this._ariaCurrent),this.validateAriaExpanded(this._ariaExpanded),this.validateAriaLabel(this._ariaLabel),this.validateAriaSelected(this._ariaSelected),this.validateCustomClass(this._customClass),this.validateDisabled(this._disabled),this.validateHideLabel(this._hideLabel),this.validateIcon(this._icon),this.validateIconOnly(this._iconOnly),this.validateLabel(this._label),this.validateOnClick(this._onClick),this.validateRole(this._role),this.validateTabIndex(this._tabIndex),this.validateTooltipAlign(this._tooltipAlign),this.validateType(this._type),this.validateValue(this._value),this.validateVariant(this._variant)}static get watchers(){return{_accessKey:["validateAccessKey"],_ariaControls:["validateAriaControls"],_ariaCurrent:["validateAriaCurrent"],_ariaExpanded:["validateAriaExpanded"],_ariaLabel:["validateAriaLabel"],_ariaSelected:["validateAriaSelected"],_customClass:["validateCustomClass"],_disabled:["validateDisabled"],_hideLabel:["validateHideLabel"],_icon:["validateIcon"],_iconOnly:["validateIconOnly"],_label:["validateLabel"],_onClick:["validateOnClick"],_role:["validateRole"],_showDropdown:["validateShowDropdown"],_tabIndex:["validateTabIndex"],_tooltipAlign:["validateTooltipAlign"],_type:["validateType"],_value:["validateValue"],_variant:["validateVariant"]}}};KolSplitButton.style={default:defaultStyleCss}; /***/ }), /***/ 42188: /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => { /* harmony export */ __webpack_require__.d(__webpack_exports__, { /* harmony export */ "a": () => (/* binding */ validateAriaLabelWithLabel), /* harmony export */ "b": () => (/* binding */ validateLabelWithAriaLabel), /* harmony export */ "c": () => (/* binding */ containsOnlyNumbers), /* harmony export */ "h": () => (/* binding */ hasEnoughReadableChars), /* harmony export */ "v": () => (/* binding */ validateLabel) /* harmony export */ }); /* harmony import */ var _a11y_tipps_1cea9822_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(79305); /* harmony import */ var _prop_validators_e15a584f_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(96863); /* harmony import */ var _reuse_3a02afb9_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8814); /*! * KoliBri - The accessible HTML-Standard */ const READABLE_CHARS=/[a-zA-Z0-9äöüÄÖÜß]/g,ONLY_NUMBERS=/^\d+$/;function countReadableChars(a){var e;return"string"==typeof a&&(null===(e=a.match(READABLE_CHARS))||void 0===e?void 0:e.length)||0}function hasEnoughReadableChars(a,e=1){return countReadableChars(a)>=e}function containsOnlyNumbers(a){return ONLY_NUMBERS.test(a)}const syncAriaLabelBeforePatch=(a,e,i,t)=>{const r=e.has("_ariaLabel")?e.get("_ariaLabel"):i.state._ariaLabel;if("string"==typeof r){const a=e.has("_label")?e.get("_label"):i.state._label;!1===(0,_reuse_3a02afb9_js__WEBPACK_IMPORTED_MODULE_0__.i)(a,r)&&("_ariaLabel"===t?e.set("_label",r):e.set("_ariaLabel",void 0),(0,_a11y_tipps_1cea9822_js__WEBPACK_IMPORTED_MODULE_1__.a)("Das abweichende Aria-Label ist nicht barrierefrei. Ein abweichendes Aria-Label muss aus Gründern der Barrierefreiheit für die Sprachsteuerung mit dem Label-Text beginnen."))}},validateAriaLabel=(a,e,i={})=>{var t;(0,_prop_validators_e15a584f_js__WEBPACK_IMPORTED_MODULE_2__.w)(a,"_ariaLabel",e,{hooks:{afterPatch:(a,e,t,r)=>{var n,s;"function"==typeof(null===(n=i.hooks)||void 0===n?void 0:n.afterPatch)&&(null===(s=i.hooks)||void 0===s||s.afterPatch(a,e,t,r)),"string"==typeof a&&a.length>0&&!1===hasEnoughReadableChars(a,3)&&!1===containsOnlyNumbers(a)&&(0,_a11y_tipps_1cea9822_js__WEBPACK_IMPORTED_MODULE_1__.a)(`Ein abweichendes Aria-Label (${a}) ist nicht barrierefrei. Ein abweichendes Aria-Label sollte aus mindestens drei lesbaren Zeichen bestehen.`)},beforePatch:null===(t=i.hooks)||void 0===t?void 0:t.beforePatch}})},validateAriaLabelWithLabel=(a,e)=>{validateAriaLabel(a,e,{hooks:{beforePatch:syncAriaLabelBeforePatch}})},validateLabel=(a,e,i={})=>{var t;(0,_prop_validators_e15a584f_js__WEBPACK_IMPORTED_MODULE_2__.w)(a,"_label",e,{hooks:{afterPatch:(a,e,t,r)=>{var n,s;"function"==typeof(null===(n=i.hooks)||void 0===n?void 0:n.afterPatch)&&(null===(s=i.hooks)||void 0===s||s.afterPatch(a,e,t,r)),"string"==typeof a&&!1===hasEnoughReadableChars(a,3)&&!1===containsOnlyNumbers(a)&&(0,_a11y_tipps_1cea9822_js__WEBPACK_IMPORTED_MODULE_1__.a)(`Ein Label (${a}) ist nicht barrierefrei. Ein Label sollte aus mindestens drei lesbaren Zeichen bestehen.`)},beforePatch:null===(t=i.hooks)||void 0===t?void 0:t.beforePatch},required:!0})},validateLabelWithAriaLabel=(a,e)=>{validateLabel(a,e,{hooks:{beforePatch:syncAriaLabelBeforePatch}})}; /***/ }), /***/ 26474: /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => { /* harmony export */ __webpack_require__.d(__webpack_exports__, { /* harmony export */ "v": () => (/* binding */ validateTabIndex) /* harmony export */ }); /* harmony import */ var _a11y_tipps_1cea9822_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(79305); /* harmony import */ var _prop_validators_e15a584f_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(96863); /*! * KoliBri - The accessible HTML-Standard */ const options={hooks:{afterPatch:a=>{-1!==a&&0!==a&&(0,_a11y_tipps_1cea9822_js__WEBPACK_IMPORTED_MODULE_0__.a)("Don’t Use Tabindex Greater than 0: https://adrianroselli.com/2014/11/dont-use-tabindex-greater-than-0.html")}}},validateTabIndex=(a,t)=>{(0,_prop_validators_e15a584f_js__WEBPACK_IMPORTED_MODULE_1__.e)(a,"_tabIndex",t,options)}; /***/ }) }; ;