"use strict";
exports.id = 999;
exports.ids = [999];
exports.modules = {

/***/ 60985:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": () => (/* binding */ a11yHint),
/* harmony export */   "b": () => (/* binding */ a11yHintLabelingLandmarks),
/* harmony export */   "c": () => (/* binding */ deprecatedHint),
/* harmony export */   "d": () => (/* binding */ devHint),
/* harmony export */   "e": () => (/* binding */ a11yHintDisabled),
/* harmony export */   "f": () => (/* binding */ featureHint),
/* harmony export */   "u": () => (/* binding */ uiUxHintMillerscheZahl)
/* harmony export */ });
/* harmony import */ var _dev_utils_3ec9f837_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(99910);
/*!
 * KoliBri - The accessible HTML-Standard
 */
const a11yCache=new Set,a11yHint=e=>{!1===a11yCache.has(e)&&(a11yCache.add(e),_dev_utils_3ec9f837_js__WEBPACK_IMPORTED_MODULE_0__.L.info(e,{classifier:"✋ a11y",overwriteStyle:"; background-color: #09f"}))},deprecatedCache=new Set,deprecatedHint=e=>{!1===deprecatedCache.has(e)&&(deprecatedCache.add(e),_dev_utils_3ec9f837_js__WEBPACK_IMPORTED_MODULE_0__.L.warn(e,{classifier:"🔥 deprecated",forceLog:!0,overwriteStyle:"; background-color: #f00"}))},devCache=new Set,devHint=e=>{!1===devCache.has(e)&&(devCache.add(e),_dev_utils_3ec9f837_js__WEBPACK_IMPORTED_MODULE_0__.L.debug(e,{classifier:"💻 dev",overwriteStyle:"; background-color: #f09"}))},featureCache=new Set,featureHint=(e,a=!1)=>{!1===featureCache.has(e)&&(featureCache.add(e),e+=!0===a?" ✅":"",_dev_utils_3ec9f837_js__WEBPACK_IMPORTED_MODULE_0__.L.debug(e,{classifier:"🌟 feature",overwriteStyle:"; background-color: #309"}))};devHint("Wir freuen uns über jedes Feedback, Kommentare, Screenshots oder Demo-Links von einer auf KoliBri-basierenden Anwendung (kolibri@itzbund.de). Vielen Dank!");const uiUxCache=new Set,uiUxHint=e=>{!1===uiUxCache.has(e)&&(uiUxCache.add(e),Log.debug(e,{classifier:"📑 ui/ux",overwriteStyle:"; background-color: #060;"}))},a11yHintDisabled=()=>{a11yHint('"Disabled" schränkt die Zugänglichkeit und Sichtbarkeit ein. Wir empfehlen aus Sicht der Barrierefreiheit readonly- statt disabled-Attribut zu verwenden.\n- https://uxdesign.cc/is-it-ok-to-grey-out-disabled-buttons-8afa74a0fae')},a11yHintLabelingLandmarks=e=>{"string"==typeof e&&""!==e||a11yHint("Manche Strukturelemente, wie bspw. der nav-Tag, können mehrfach in einer Webseite verwendet werden. Damit die gleichnamigen Strukturelemente voneinander unterschieden werden können, ist es erforderlich ein Aria-Label zu setzen.\n- https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/Navigation_Role#accessibility_concerns")},uiUxHintMillerscheZahl=(e,a=8)=>{var i;a>7&&(i=`[${e}] Innerhalb von Navigationsstrukturen wird empfohlen nicht mehr als 7 Menüpunkte zu verwenden.\n\nLinks:\n- https://de.ryte.com/wiki/Millersche_Zahl\n- https://de.wikipedia.org/wiki/Millersche_Zahl`,!1===uiUxCache.has(i)&&(uiUxCache.add(i),_dev_utils_3ec9f837_js__WEBPACK_IMPORTED_MODULE_0__.L.debug(i,{classifier:"📑 ui/ux",overwriteStyle:"; background-color: #060;"})))};

/***/ }),

/***/ 23518:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "I": () => (/* binding */ InputController),
/* harmony export */   "g": () => (/* binding */ getRenderStates)
/* harmony export */ });
/* harmony import */ var _a11y_tipps_353a7f35_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(60985);
/* harmony import */ var _prop_validators_c2234525_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(45388);
/* harmony import */ var _tab_index_1bc7d9c1_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1769);
/* harmony import */ var _dev_utils_3ec9f837_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(99910);
/*!
 * KoliBri - The accessible HTML-Standard
 */
const getRenderStates=t=>{const e="string"==typeof t._error&&t._error.length>0&&!0===t._touched,o="string"==typeof t._hint&&t._hint.length>0,n=[];return!0===e&&n.push(`${t._id}-error`),!0===o&&n.push(`${t._id}-hint`),{hasError:e,hasHint:o,ariaDiscribedBy:n}},EXPERIMENTAL_MODE=(0,_dev_utils_3ec9f837_js__WEBPACK_IMPORTED_MODULE_0__.b)();class ControlledInputController{constructor(t,e,o){var n,i,a,s,h;if(this.syncFormAssociatedName=()=>{var t;EXPERIMENTAL_MODE&&(null===(t=this.formAssociated)||void 0===t||t.setAttribute("name",this.component.state._name||this.component.state._id))},this.setFormAssociatedValue=(t=null)=>{var e;EXPERIMENTAL_MODE&&(null===(e=this.formAssociated)||void 0===e||e.setAttribute("value",t))},this.component=t,this.name=e,this.host=o,EXPERIMENTAL_MODE){this.formAssociated=document.createElement("input"),this.formAssociated.setAttribute("type","hidden");const t=(null===(n=this.host)||void 0===n?void 0:n.children)||[];for(let e=0;e<t.length;e++)"INPUT"===(null===(i=this.host)||void 0===i?void 0:i.children[e].tagName)&&(null===(a=this.host)||void 0===a||a.removeChild(null===(s=this.host)||void 0===s?void 0:s.children[e]));null===(h=this.host)||void 0===h||h.appendChild(this.formAssociated)}}validateAlert(t){(0,_prop_validators_c2234525_js__WEBPACK_IMPORTED_MODULE_1__.b)(this.component,"_alert",t)}validateTouched(t){(0,_prop_validators_c2234525_js__WEBPACK_IMPORTED_MODULE_1__.b)(this.component,"_touched",t)}componentWillLoad(){this.validateAlert(this.component._alert),this.validateTouched(this.component._touched)}}class InputController extends ControlledInputController{constructor(t,e,o){super(t,e,o),this.hideLabel=!1,this.onFacade={onBlur:this.onBlur.bind(this),onChange:this.onChange.bind(this),onClick:this.onClick.bind(this),onFocus:this.onFocus.bind(this)},this.component=t}validateAccessKey(t){(0,_prop_validators_c2234525_js__WEBPACK_IMPORTED_MODULE_1__.w)(this.component,"_accessKey",t)}validateAdjustHeight(t){(0,_prop_validators_c2234525_js__WEBPACK_IMPORTED_MODULE_1__.b)(this.component,"_adjustHeight",t)}validateDisabled(t){(0,_prop_validators_c2234525_js__WEBPACK_IMPORTED_MODULE_1__.b)(this.component,"_disabled",t),!0===t&&(0,_a11y_tipps_353a7f35_js__WEBPACK_IMPORTED_MODULE_2__.e)()}validateError(t){(0,_prop_validators_c2234525_js__WEBPACK_IMPORTED_MODULE_1__.w)(this.component,"_error",t)}validateHideLabel(t){(0,_prop_validators_c2234525_js__WEBPACK_IMPORTED_MODULE_1__.b)(this.component,"_hideLabel",t)}validateHint(t){(0,_prop_validators_c2234525_js__WEBPACK_IMPORTED_MODULE_1__.w)(this.component,"_hint",t)}validateId(t){(0,_prop_validators_c2234525_js__WEBPACK_IMPORTED_MODULE_1__.w)(this.component,"_id",t,{hooks:{afterPatch:this.syncFormAssociatedName}}),void 0===t&&(0,_a11y_tipps_353a7f35_js__WEBPACK_IMPORTED_MODULE_2__.d)("Eine eindeutige ID an den Eingabefeldern ist nicht zwingend erforderlich, könnte aber für die E2E-Tests relevant sein.")}validateName(t){(0,_prop_validators_c2234525_js__WEBPACK_IMPORTED_MODULE_1__.w)(this.component,"_name",t,{hooks:{afterPatch:this.syncFormAssociatedName}}),void 0===t&&(0,_a11y_tipps_353a7f35_js__WEBPACK_IMPORTED_MODULE_2__.d)("Ein Name an den Eingabefeldern ist nicht zwingend erforderlich, kann aber für die Autocomplete-Funktion des Eingabefeldes relevant sein.")}validateOn(t){"object"==typeof t&&(0,_prop_validators_c2234525_js__WEBPACK_IMPORTED_MODULE_1__.s)(this.component,"_on",t)}validateSmartButton(t){(0,_prop_validators_c2234525_js__WEBPACK_IMPORTED_MODULE_1__.o)(t,(()=>{try{t=(0,_prop_validators_c2234525_js__WEBPACK_IMPORTED_MODULE_1__.p)(t)}catch(t){}(0,_prop_validators_c2234525_js__WEBPACK_IMPORTED_MODULE_1__.s)(this.component,"_smartButton",t)}))}validateTabIndex(t){(0,_tab_index_1bc7d9c1_js__WEBPACK_IMPORTED_MODULE_3__.v)(this.component,t)}componentWillLoad(){super.componentWillLoad(),this.validateAccessKey(this.component._accessKey),this.validateAdjustHeight(this.component._adjustHeight),this.validateError(this.component._error),this.validateDisabled(this.component._disabled),this.validateHideLabel(this.component._hideLabel),this.validateHint(this.component._hint),this.validateId(this.component._id),this.validateName(this.component._name),this.validateSmartButton(this.component._smartButton),this.validateOn(this.component._on),this.validateTabIndex(this.component._tabIndex),this.syncFormAssociatedName()}onBlur(t){var e;this.component._alert=!0,this.component._touched=!0,"function"==typeof(null===(e=this.component._on)||void 0===e?void 0:e.onBlur)&&this.component._on.onBlur(t)}onChange(t){var e;this.setFormAssociatedValue(t.target.value),"function"==typeof(null===(e=this.component._on)||void 0===e?void 0:e.onChange)&&this.component._on.onChange(t,t.target.value)}onClick(t){var e;"function"==typeof(null===(e=this.component._on)||void 0===e?void 0:e.onClick)&&this.component._on.onClick(t)}onFocus(t){var e;this.component._alert=!0,"function"==typeof(null===(e=this.component._on)||void 0===e?void 0:e.onFocus)&&this.component._on.onFocus(t)}setValue(t,e){var o;this.setFormAssociatedValue(e),"function"==typeof(null===(o=this.component._on)||void 0===o?void 0:o.onChange)&&this.component._on.onChange(t,e)}}

/***/ }),

/***/ 99133:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "I": () => (/* binding */ InputIconController)
/* harmony export */ });
/* harmony import */ var _prop_validators_c2234525_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(45388);
/* harmony import */ var _reuse_2b3b6999_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(72393);
/* harmony import */ var _icon_4f6266ca_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(97428);
/* harmony import */ var _controller_9f66274a_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(23518);
/*!
 * KoliBri - The accessible HTML-Standard
 */
const beforePatchIcon=(o,t)=>{const n=o;"object"==typeof n&&null!==n&&((0,_reuse_2b3b6999_js__WEBPACK_IMPORTED_MODULE_0__.i)(n.right,1)&&(n.right={icon:n.right}),(0,_reuse_2b3b6999_js__WEBPACK_IMPORTED_MODULE_0__.i)(n.left,1)&&(n.left={icon:n.left}),t.set("_icon",n))};class InputIconController extends _controller_9f66274a_js__WEBPACK_IMPORTED_MODULE_1__.I{constructor(o,t,n){super(o,t,n),this.component=o}validateIcon(o){(0,_prop_validators_c2234525_js__WEBPACK_IMPORTED_MODULE_2__.o)(o,(()=>{try{o=(0,_prop_validators_c2234525_js__WEBPACK_IMPORTED_MODULE_2__.p)(o)}catch(o){}(0,_prop_validators_c2234525_js__WEBPACK_IMPORTED_MODULE_2__.a)(this.component,"_icon",(o=>"object"==typeof o&&null!==o&&((0,_reuse_2b3b6999_js__WEBPACK_IMPORTED_MODULE_0__.i)(o.left,1)||(0,_icon_4f6266ca_js__WEBPACK_IMPORTED_MODULE_3__.i)(o.left)||(0,_reuse_2b3b6999_js__WEBPACK_IMPORTED_MODULE_0__.i)(o.right,1)||(0,_icon_4f6266ca_js__WEBPACK_IMPORTED_MODULE_3__.i)(o.right))),new Set(["KoliBriHorizontalIcon"]),o,{hooks:{beforePatch:beforePatchIcon},required:!0})}))}componentWillLoad(){super.componentWillLoad(),this.validateIcon(this.component._icon)}}

/***/ }),

/***/ 97428:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "i": () => (/* binding */ isIcon),
/* harmony export */   "v": () => (/* binding */ validateIcon),
/* harmony export */   "w": () => (/* binding */ watchIconAlign)
/* harmony export */ });
/* harmony import */ var _a11y_tipps_353a7f35_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(60985);
/* harmony import */ var _prop_validators_c2234525_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(45388);
/* harmony import */ var _reuse_2b3b6999_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(72393);
/*!
 * KoliBri - The accessible HTML-Standard
 */
const mapCustomIcon=(t,o,i)=>{(0,_reuse_2b3b6999_js__WEBPACK_IMPORTED_MODULE_0__.c)(i)?t[o]=i:(0,_reuse_2b3b6999_js__WEBPACK_IMPORTED_MODULE_0__.i)(i,1)&&(t[o]={icon:i})},mapIconProp2State=(t,o)=>{let i={};if((0,_reuse_2b3b6999_js__WEBPACK_IMPORTED_MODULE_0__.i)(t,1))if("right"===o)i={right:{icon:t}};else i={left:{icon:t}};else"object"==typeof t&&null!==t&&(mapCustomIcon(i,"top",t.top),mapCustomIcon(i,"right",t.right),mapCustomIcon(i,"bottom",t.bottom),mapCustomIcon(i,"left",t.left));return i},beforePatchIcon=t=>{var o,i,e,n,c,a,s;if(null===(o=t.nextState)||void 0===o?void 0:o.has("_icon")){const o=null===(i=t.nextState)||void 0===i?void 0:i.get("_icon"),c=(null===(e=t.nextState)||void 0===e?void 0:e.get("_iconAlign"))||t.state._iconAlign;null===(n=t.nextState)||void 0===n||n.set("_icon",mapIconProp2State(o,c))}else if(null===(c=t.nextState)||void 0===c?void 0:c.has("_iconAlign")){const o=t.state._iconAlign;null===(a=t.nextState)||void 0===a||a.set("_icon",{[o]:void 0,[null===(s=t.nextState)||void 0===s?void 0:s.get("_iconAlign")]:t.state._icon[o]})}},isIcon=t=>"object"==typeof t&&null!==t&&(void 0===t.style||(0,_reuse_2b3b6999_js__WEBPACK_IMPORTED_MODULE_0__.b)(t.style))&&(0,_reuse_2b3b6999_js__WEBPACK_IMPORTED_MODULE_0__.i)(t.icon,1),validateIcon=(t,o)=>{(0,_prop_validators_c2234525_js__WEBPACK_IMPORTED_MODULE_1__.o)(o,(()=>{try{o=(0,_prop_validators_c2234525_js__WEBPACK_IMPORTED_MODULE_1__.p)(o)}catch(t){}(0,_prop_validators_c2234525_js__WEBPACK_IMPORTED_MODULE_1__.a)(t,"_icon",(t=>null===t||(0,_reuse_2b3b6999_js__WEBPACK_IMPORTED_MODULE_0__.i)(t,1)||"object"==typeof t&&null!==t&&((0,_reuse_2b3b6999_js__WEBPACK_IMPORTED_MODULE_0__.i)(t.left,1)||isIcon(t.left)||(0,_reuse_2b3b6999_js__WEBPACK_IMPORTED_MODULE_0__.i)(t.right,1)||isIcon(t.right)||(0,_reuse_2b3b6999_js__WEBPACK_IMPORTED_MODULE_0__.i)(t.top,1)||isIcon(t.top)||(0,_reuse_2b3b6999_js__WEBPACK_IMPORTED_MODULE_0__.i)(t.bottom,1)||isIcon(t.bottom))),new Set(["KoliBriIcon"]),o,{hooks:{beforePatch:(o,i)=>{null===o&&i.set("_icon",{}),beforePatchIcon(t)}},required:!0})}))},watchIconAlign=(t,o)=>{(0,_a11y_tipps_353a7f35_js__WEBPACK_IMPORTED_MODULE_2__.c)("Das Property _icon-align bzw. _iconAlign ist veraltet. Die Ausrichtung der Icon's kann jetzt direkt über das _icon-Property vorgenommen werden. (v1.1.10: https://public-ui.github.io/?path=/story/backlog-und-changelog--page)"),(0,_prop_validators_c2234525_js__WEBPACK_IMPORTED_MODULE_1__.a)(t,"_iconAlign",(t=>"left"===t||"right"===t),new Set(["Alignment {left, right, top, bottom}"]),o,{hooks:{beforePatch:()=>{beforePatchIcon(t)}}})};

/***/ }),

/***/ 90999:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "kol_input_file": () => (/* binding */ KolInputFile)
/* harmony export */ });
/* harmony import */ var _index_0dce65d2_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(71312);
/* harmony import */ var _reuse_2b3b6999_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(72393);
/* harmony import */ var _controller_9f66274a_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(23518);
/* harmony import */ var _prop_validators_c2234525_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(45388);
/* harmony import */ var _controller_icon_dbd368be_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(99133);
/*!
 * KoliBri - The accessible HTML-Standard
 */
class InputFileController extends _controller_icon_dbd368be_js__WEBPACK_IMPORTED_MODULE_0__.I{constructor(e,t,i){super(e,t,i),this.component=e}validateAccept(e){(0,_prop_validators_c2234525_js__WEBPACK_IMPORTED_MODULE_1__.w)(this.component,"_accept",e)}validateMultiple(e){(0,_prop_validators_c2234525_js__WEBPACK_IMPORTED_MODULE_1__.b)(this.component,"_multiple",e)}validateRequired(e){(0,_prop_validators_c2234525_js__WEBPACK_IMPORTED_MODULE_1__.b)(this.component,"_required",e)}validateValue(e){(0,_prop_validators_c2234525_js__WEBPACK_IMPORTED_MODULE_1__.w)(this.component,"_value",e),this.setFormAssociatedValue(this.component._value)}componentWillLoad(){super.componentWillLoad(),this.validateAccept(this.component._accept),this.validateMultiple(this.component._multiple),this.validateRequired(this.component._required),this.validateValue(this.component._value)}}const defaultStyleCss=":host{--kolibri-border-color:#e0e0e0;--kolibri-border-radius:0.125rem;--kolibri-border-width:1px;--kolibri-color-error:#f44336;--kolibri-color-info:#2196f3;--kolibri-color-success:#4caf50;--kolibri-color-warning:#ff9800;--kolibri-color-primary:#3f51b5;--kolibri-color-secondary:#ff4081;--kolibri-color-normal:#9e9e9e;--kolibri-color-danger:#f44336;--kolibri-color-ghost:#f5f5f5;--kolibri-color-disabled:#bdbdbd;--kolibri-color-text:#222222;--kolibri-color-visited:#9c27b0;--kolibri-spacing:0.25rem}*{box-sizing:border-box;hyphens:auto;letter-spacing:inherit;word-break:break-word;word-spacing:inherit}kol-icon{color:inherit}kol-span-wc{display:grid;place-items:center;width:100%}kol-span-wc>span{display:flex;gap:0.25rem;place-items:center}a,button,input,select,textarea{cursor:pointer}a.icon-only>kol-span-wc>span>span,button.icon-only>kol-span-wc>span>span{display:none}a{display:inline-flex;place-items:baseline}button{background-color:transparent;border-width:0}.kol-required span::after{content:'*'}input,select,textarea{border-color:var(--kolibri-border-color);border-style:solid;border-width:1px}input input.error,input select.error,input textarea.error,select input.error,select select.error,select textarea.error,textarea input.error,textarea select.error,textarea textarea.error{border-color:var(--kolibri-border-error)}input input:focus,input input:hover,input select:focus,input select:hover,input textarea:focus,input textarea:hover,select input:focus,select input:hover,select select:focus,select select:hover,select textarea:focus,select textarea:hover,textarea input:focus,textarea input:hover,textarea select:focus,textarea select:hover,textarea textarea:focus,textarea textarea:hover{border-color:#999}input:not([type='checkbox']),option,select,textarea{font-size:inherit;letter-spacing:inherit;word-spacing:inherit}.kol-disabled{opacity:0.5}.kol-cursor-not-allowed,.kol-cursor-not-allowed *{cursor:not-allowed}input[type='color'],input[type='date'],input[type='datetime-local'],input[type='email'],input[type='file'],input[type='month'],input[type='number'],input[type='password'],input[type='search'],input[type='tel'],input[type='text'],input[type='time'],input[type='url'],input[type='week'],select,textarea{background-color:white;display:block;line-height:1em;padding:0.5em}input[type='color']{height:2.5em;padding:0.25em 0.5em}textarea{padding:0.5em}label.kol-required span::after{content:'*'}label input[type='file']::-webkit-file-upload-button{display:none}label input[type='file']::before{content:'Datei auswählen'}label input[multiple]::before{content:'Dateien auswählen'}",KolInputFile=class{render(){const{ariaDiscribedBy:e}=(0,_controller_9f66274a_js__WEBPACK_IMPORTED_MODULE_2__.g)(this.state);return (0,_index_0dce65d2_js__WEBPACK_IMPORTED_MODULE_3__.h)(_index_0dce65d2_js__WEBPACK_IMPORTED_MODULE_3__.H,null,(0,_index_0dce65d2_js__WEBPACK_IMPORTED_MODULE_3__.h)("kol-input",{_disabled:this.state._disabled,_error:this.state._error,_hideLabel:this.state._hideLabel,_hint:this.state._hint,_icon:this.state._icon,_id:this.state._id,_required:this.state._required,_smartButton:this.state._smartButton,_touched:this.state._touched},(0,_index_0dce65d2_js__WEBPACK_IMPORTED_MODULE_3__.h)("span",{slot:"label"},(0,_index_0dce65d2_js__WEBPACK_IMPORTED_MODULE_3__.h)("slot",null)),(0,_index_0dce65d2_js__WEBPACK_IMPORTED_MODULE_3__.h)("input",Object.assign({ref:this.catchRef,part:"input",title:"",accept:this.state._accept,accessKey:this.state._accessKey,"aria-describedby":e.length>0?e.join(" "):void 0,"aria-labelledby":`${this.state._id}-label`,autoCapitalize:"off",autoCorrect:"off",disabled:this.state._disabled,id:this.state._id,multiple:this.state._multiple,name:this.state._name,required:this.state._required,slot:"input",spellcheck:"false",type:"file",value:this.state._value},this.controller.onFacade,{onChange:this.onChange}))))}constructor(e){(0,_index_0dce65d2_js__WEBPACK_IMPORTED_MODULE_3__.r)(this,e),this.catchRef=e=>{this.ref=e,(0,_reuse_2b3b6999_js__WEBPACK_IMPORTED_MODULE_4__.a)(this.host,this.ref)},this.onChange=e=>{var t;this.ref instanceof HTMLInputElement&&"file"===this.ref.type&&"function"==typeof(null===(t=this.state._on)||void 0===t?void 0:t.onChange)&&this.state._on.onChange(e,this.ref.files)},this._accept=void 0,this._accessKey=void 0,this._alert=!0,this._disabled=void 0,this._error=void 0,this._hideLabel=void 0,this._hint="",this._icon=void 0,this._id=void 0,this._multiple=void 0,this._name=void 0,this._on=void 0,this._required=void 0,this._smartButton=void 0,this._tabIndex=void 0,this._touched=!1,this._value=void 0,this.state={_id:"⚠"},this.controller=new InputFileController(this,"file",this.host)}validateAccept(e){this.controller.validateAccept(e)}validateAccessKey(e){this.controller.validateAccessKey(e)}validateAlert(e){this.controller.validateAlert(e)}validateDisabled(e){this.controller.validateDisabled(e)}validateError(e){this.controller.validateError(e)}validateHideLabel(e){this.controller.validateHideLabel(e)}validateHint(e){this.controller.validateHint(e)}validateIcon(e){this.controller.validateIcon(e)}validateId(e){this.controller.validateId(e)}validateMultiple(e){this.controller.validateMultiple(e)}validateName(e){this.controller.validateName(e)}validateOn(e){this.controller.validateOn(e)}validateRequired(e){this.controller.validateRequired(e)}validateSmartButton(e){this.controller.validateSmartButton(e)}validateTabIndex(e){this.controller.validateTabIndex(e)}validateTouched(e){this.controller.validateTouched(e)}validateValue(e){this.controller.validateValue(e)}componentWillLoad(){this._alert=!0===this._alert,this._touched=!0===this._touched,this.controller.componentWillLoad()}get host(){return (0,_index_0dce65d2_js__WEBPACK_IMPORTED_MODULE_3__.g)(this)}static get watchers(){return{_accept:["validateAccept"],_accessKey:["validateAccessKey"],_alert:["validateAlert"],_disabled:["validateDisabled"],_error:["validateError"],_hideLabel:["validateHideLabel"],_hint:["validateHint"],_icon:["validateIcon"],_id:["validateId"],_multiple:["validateMultiple"],_name:["validateName"],_on:["validateOn"],_required:["validateRequired"],_smartButton:["validateSmartButton"],_tabIndex:["validateTabIndex"],_touched:["validateTouched"],_value:["validateValue"]}}};KolInputFile.style={default:defaultStyleCss};

/***/ }),

/***/ 45388:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "K": () => (/* binding */ KoliBriDevHelper),
/* harmony export */   "a": () => (/* binding */ watchValidator),
/* harmony export */   "b": () => (/* binding */ watchBoolean),
/* harmony export */   "c": () => (/* binding */ s),
/* harmony export */   "d": () => (/* binding */ watchJsonArrayString),
/* harmony export */   "e": () => (/* binding */ watchNumber),
/* harmony export */   "f": () => (/* binding */ setEventTargetAndStopPropagation),
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
/* harmony import */ var _index_2a11dd6d_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5649);
/* harmony import */ var _a11y_tipps_353a7f35_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(60985);
/* harmony import */ var _dev_utils_3ec9f837_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(99910);
/*!
 * KoliBri - The accessible HTML-Standard
 */
const pushNodes=(e,t)=>{t.forEach((t=>{!1===e.has(t)&&e.add(t)}))},querySelectorAll=(e,t=document)=>{if(t instanceof Document||t instanceof HTMLElement||t instanceof ShadowRoot){const r=new Set;pushNodes(r,t.querySelectorAll(e));const o=t.querySelectorAll('[class*="hydrated"]');for(let t=0;t<o.length;t++){const n=o[t].shadowRoot;pushNodes(r,querySelectorAll(e,"object"==typeof n&&null!==n?n:o[t]))}return Array.from(r)}throw new Error("The parameter document for the method querySelectorAll is not type of Document, HTMLElement or ShadowRoot.")},querySelector=(e,t=document)=>{if(t instanceof Document||t instanceof HTMLElement||t instanceof ShadowRoot){let r=t.querySelector(e);if(null===r){const o=t.querySelectorAll('[class*="hydrated"]');for(let t=0;t<o.length;t++){const n=o[t].shadowRoot;if(r=querySelector(e,"object"==typeof n&&null!==n?n:o[t]),null!==r)break}}return r}throw new Error("The parameter document for the method querySelector is not type of Document, HTMLElement or ShadowRoot.")};var rgbaConvert=arr,arr_1=arr,obj_1=obj,css_1=css,hex_1=hex,num_1=num;function arr(e){var t=parse(e);return 3==t.length?t.concat(255):(t[3]=Math.round(t[3]),t)}function obj(e){var t=parse(e);return{r:t[0],g:t[1],b:t[2],a:3==t.length?255:Math.round(t[3])}}function css(e){var t=parse(e);return 3==t.length&&t.push(255),255==t[3]?"rgb("+t[0]+", "+t[1]+", "+t[2]+")":0==t[3]?"rgba("+t[0]+", "+t[1]+", "+t[2]+", 0)":"rgba("+t[0]+", "+t[1]+", "+t[2]+", "+String(t[3]/255).substr(1)+")"}function hex(e){3==(t=parse(e)).length&&t.push(255);var t,r=255==t[3],o=num2hex(t[0]),n=num2hex(t[1]),a=num2hex(t[2]),l=isshort(o,n,a,t=num2hex(Math.round(t[3])));return r?l?"#"+o.charAt(0)+n.charAt(0)+a.charAt(0):"#"+o+n+a:l?"#"+o.charAt(0)+n.charAt(0)+a.charAt(0)+t.charAt(0):"#"+o+n+a+t}function num(e){var t=parse(e);return 3==t.length?t.push(255):t[3]=Math.round(t[3]),(t[3]<<24>>>0|t[0]<<16|t[1]<<8|t[2])>>>0}function parse(e){return"string"==typeof e?name(e=e.toLowerCase())||hex3(e)||hex6(e)||rgb(e)||rgba(e)||[0,0,0,255]:object(e)||array(e)||number(e)||[0,0,0,255]}function num2hex(e){var t=e.toString(16);return 1==t.length?"0"+t:t}function isshort(e,t,r,o){var n=["ff","00","11","22","33","44","55","66","77","88","99","aa","bb","cc","dd","ee"];return-1!=n.indexOf(e)&&-1!=n.indexOf(t)&&-1!=n.indexOf(r)&&-1!=n.indexOf(o)}function name(e){return"red"==e?[255,0,0]:"green"==e?[0,255,0]:"blue"==e?[0,0,255]:"black"==e?[0,0,0]:"white"==e?[255,255,255]:"cyan"==e?[0,255,255]:"gray"==e||"grey"==e?[128,128,128]:"magenta"==e||"pink"==e?[255,0,255]:"yellow"==e?[255,255,0]:void 0}function hex2num(e){return 1==e.length?parseInt(e+e,16):parseInt(e,16)}function hex3(e){var t=e.replace(/^#/,""),r=t.length;if(3==r||4==r){var o=hex2num(t[0]),n=hex2num(t[1]),a=hex2num(t[2]),l=3==r?255:hex2num(t[3]);if(isNaN(o)||isNaN(n)||isNaN(a)||isNaN(l))return;return[o,n,a,l]}}function hex6(e){var t=e.replace(/^#/,""),r=t.length;if(6==r||8==r){var o=hex2num(t.slice(0,2)),n=hex2num(t.slice(2,4)),a=hex2num(t.slice(4,6)),l=6==r?255:hex2num(t.slice(6,8));if(isNaN(o)||isNaN(n)||isNaN(a)||isNaN(l))return;return[o,n,a,l]}}function getnum(e,t){return"number"!=typeof e||!0===t&&Math.floor(e)!==e?-1:e>=0&&e<=255?e:-1}function object(e){if("[object Object]"===Object.prototype.toString.call(e)&&Object.getPrototypeOf(e)===Object.getPrototypeOf({})){var t=getnum(null!=e.r?e.r:null!=e.red?e.red:0,!0),r=getnum(null!=e.g?e.g:null!=e.green?e.green:0,!0),o=getnum(null!=e.b?e.b:null!=e.blue?e.blue:0,!0),n=getnum(null!=e.a?e.a:null!=e.alpha?e.alpha:255,!0);if(-1!=t&&-1!=r&&-1!=o&&-1!=n)return[t,r,o,n]}}function array(e){if(Array.isArray(e)&&(3==e.length||4==e.length)){var t=getnum(e[0],!0),r=getnum(e[1],!0),o=getnum(e[2],!0),n=getnum(null!=e[3]?e[3]:255,!0);if(-1!=t&&-1!=r&&-1!=o&&-1!=n)return[t,r,o,n]}}function number(e){if("number"==typeof e&&Math.floor(e)==e&&e<=4294967295&&e>=0)return[e>>16&255,e>>8&255,255&e,e>>24&255]}function rgb(e){if("rgb("==e.substr(0,4)){var t=(e=e.match(/^rgb\(([^)]+)\)/)[1]).split(/ *, */).map(Number),r=getnum(t[0],!0),o=getnum(t[1],!0),n=getnum(t[2],!0);if(-1!=r&&-1!=o&&-1!=n)return[r,o,n,255]}}function rgba(e){if("rgba("==e.substr(0,5)){var t=(e=e.match(/^rgba\(([^)]+)\)/)[1]).split(/ *, */).map(Number),r=getnum(t[0],!0),o=getnum(t[1],!0),n=getnum(t[2],!0),a=getnum(255*t[3]);if(-1!=r&&-1!=o&&-1!=n&&-1!=a)return[r,o,n,a]}}rgbaConvert.arr=arr_1,rgbaConvert.obj=obj_1,rgbaConvert.css=css_1,rgbaConvert.hex=hex_1,rgbaConvert.num=num_1;var n=.2126,r=.7152,t=.0722,e=1/12.92;function u(e){return Math.pow((e+.055)/1.055,2.4)}function a(o){var a=o[0]/255,l=o[1]/255,i=o[2]/255,s=a<=.03928?a*e:u(a),c=l<=.03928?l*e:u(l),d=i<=.03928?i*e:u(i);return s*n+c*r+d*t}function i(e){var t=255;8===(e=e.replace(/^#/,"")).length&&(t=parseInt(e.slice(6,8),16),e=e.substring(0,6)),4===e.length&&(t=parseInt(e.slice(3,4).repeat(2),16),e=e.substring(0,3)),3===e.length&&(e=e[0]+e[0]+e[1]+e[1]+e[2]+e[2]);var r=parseInt(e,16);return[r>>16,r>>8&255,255&r,t]}function c(e,t){return(Math.max(e,t)+.05)/(Math.min(e,t)+.05)}function o(e,t){return c(a(e),a(t))}function s(e,t){return o(i(e),i(t))}function f(e){return e>=7?"AAA":e>=4.5?"AA":e>=3?"AA Large":"Fail"}const OBJECT_OBJECT=/\[object Object\]/,objectObjectHandler=(e,t)=>{"string"==typeof e&&OBJECT_OBJECT.test(e)||t()},emptyStringByArrayHandler=(e,t)=>{"string"==typeof e&&""===e||t()},setEventTargetAndStopPropagation=(e,t)=>{(0,_dev_utils_3ec9f837_js__WEBPACK_IMPORTED_MODULE_0__.b)()&&(_dev_utils_3ec9f837_js__WEBPACK_IMPORTED_MODULE_0__.L.debug([e,t]),_dev_utils_3ec9f837_js__WEBPACK_IMPORTED_MODULE_0__.L.debug("↑ We propagate the (submit) event to this target.")),Object.defineProperty(e,"target",{value:t,writable:!1})},patchState=e=>{var t,r,o;null===(t=e.nextHooks)||void 0===t||t.forEach(((t,r)=>{var o;const n=t.get("beforePatch");"function"==typeof n&&n(null===(o=e.nextState)||void 0===o?void 0:o.get(r),e.nextState,e,r)})),(null===(r=e.nextState)||void 0===r?void 0:r.size)>0&&(e.state=Object.assign(Object.assign({},e.state),Object.fromEntries(e.nextState)),delete e.nextState,null===(o=e.nextHooks)||void 0===o||o.forEach(((t,r)=>{const o=t.get("afterPatch");"function"==typeof o&&o(e.state[r],e.state,e,r)}))),delete e.nextHooks},setState=(e,t,r,o={})=>{var n,a;if(void 0===e.nextHooks&&(e.nextHooks=new Map),void 0===e.nextState&&(e.nextState=new Map),e.nextState.get(t)!==r){e.nextHooks.get(t)instanceof Map==!1&&e.nextHooks.set(t,new Map),"function"==typeof o.afterPatch&&(null===(n=e.nextHooks.get(t))||void 0===n||n.set("afterPatch",o.afterPatch)),"function"==typeof o.beforePatch&&(null===(a=e.nextHooks.get(t))||void 0===a||a.set("beforePatch",o.beforePatch)),e.nextState.set(t,r),patchState(e)}},logWarn=(e,t,r,o)=>{(0,_a11y_tipps_353a7f35_js__WEBPACK_IMPORTED_MODULE_1__.d)(`[${e.constructor.name}] Der Property-Wert (${r}) für '${t}' ist nicht valide. Folgende Werte sind erlaubt: ${Array.from(o).join(", ")}`)},watchValidator=(e,t,r,o,n,a={})=>{r(n)?setState(e,t,n,null==a?void 0:a.hooks):void 0===n||null===n&&(void 0===(null==a?void 0:a.required)||!1===(null==a?void 0:a.required))?setState(e,t,null==a?void 0:a.defaultValue,null==a?void 0:a.hooks):(void 0!==(null==a?void 0:a.required)&&!1!==(null==a?void 0:a.required)||o.add(null),logWarn(e,t,n,o))},watchBoolean=(e,t,r,o)=>{watchValidator(e,t,(e=>"boolean"==typeof e),new Set(["Boolean {true, false}"]),r,o)},watchString=(e,t,r,o={})=>{const n="number"==typeof o.minLength?null==o?void 0:o.minLength:0;watchValidator(e,t,(e=>"string"==typeof e&&e.length>=n),new Set([`String (Mindestlänge ${n})`]),r,o)},watchNumber=(e,t,r,o)=>{watchValidator(e,t,(e=>"number"==typeof e&&(void 0===(null==o?void 0:o.min)||"number"==typeof(null==o?void 0:o.min)&&e>=o.min)&&(void 0===(null==o?void 0:o.max)||"number"==typeof(null==o?void 0:o.max)&&e<=o.max)),new Set(["Number"]),r,o)},watchJsonArrayString=(e,t,r,o,n=(e=>e==e),a={})=>{emptyStringByArrayHandler(o,(()=>{objectObjectHandler(o,(()=>{void 0===o&&(o=[]);try{try{o=parseJson(o)}catch(e){}if(Array.isArray(o)){const l=o.find((e=>!r(e)));void 0===l&&n(o)?setState(e,t,o,a.hooks):objectObjectHandler(l,(()=>{throw _dev_utils_3ec9f837_js__WEBPACK_IMPORTED_MODULE_0__.L.debug(l),new Error("↑ Das Schema für das Property (_options) ist nicht valide. Der Wert wird nicht geändert.")}))}else objectObjectHandler(o,(()=>{throw _dev_utils_3ec9f837_js__WEBPACK_IMPORTED_MODULE_0__.L.debug(o),new Error("↑ Das Schema für das Property (_options) ist nicht valide. Der Wert wird nicht geändert.")}))}catch(e){_dev_utils_3ec9f837_js__WEBPACK_IMPORTED_MODULE_0__.L.debug(e)}}))}))},BOOLEAN=/^(true|false)$/,INTEGER=/^-?(0|[1-9]\d*)$/,FLOAT=/^-?(0.|[1-9]\d*.)\d*[1-9]$/,mapString2Unknown=e=>{const t=typeof e,r=`${e}`;if("string"==typeof e)if(BOOLEAN.test(e))e="true"===e;else if(INTEGER.test(e))e=parseInt(e);else if(FLOAT.test(e))e=parseFloat(e);else if(JSON_CHARS.test(e))try{e=parseJson(e)}catch(e){}return t!==typeof e&&(0,_a11y_tipps_353a7f35_js__WEBPACK_IMPORTED_MODULE_1__.d)(`You have used a stringified property value (${r} to ${JSON.stringify(e)}) which type switched from ${t} to ${typeof e}!`),e},stringifyJson=e=>{try{return JSON.stringify(e).replace(/"/g,"'")}catch(t){throw _dev_utils_3ec9f837_js__WEBPACK_IMPORTED_MODULE_0__.L.warn(["stringifyJson",e]),_dev_utils_3ec9f837_js__WEBPACK_IMPORTED_MODULE_0__.L.error("↑ Das JSON konnte nicht in einen String umgewandelt werden. Es wird ein stringifizierbares JSON erwartet."),new Error}},JSON_CHARS=/^[{[]/,parseJson=e=>{if("string"==typeof e)try{return JSON.parse(e)}catch(t){if(JSON_CHARS.test(e))try{return JSON.parse(e.replace(/'/g,'"'))}catch(t){_dev_utils_3ec9f837_js__WEBPACK_IMPORTED_MODULE_0__.L.warn(["parseJson",e]),_dev_utils_3ec9f837_js__WEBPACK_IMPORTED_MODULE_0__.L.error("↑ Der JSON-String konnte nicht geparsed werden. Achten Sie darauf, dass einfache Anführungszeichen im Text maskiert werden (&#8216;).")}}throw new Error},mapBoolean2String=e=>"boolean"==typeof e?!0===e?"true":"false":void 0,mapStringOrBoolean2String=e=>"string"==typeof e?e:mapBoolean2String(e),koliBriQuerySelector=(e,t)=>querySelector(e,t||(0,_dev_utils_3ec9f837_js__WEBPACK_IMPORTED_MODULE_0__.g)()),koliBriQuerySelectorAll=(e,t)=>querySelectorAll(e,t||(0,_dev_utils_3ec9f837_js__WEBPACK_IMPORTED_MODULE_0__.g)());let DEFAULT_COLOR_CONTRAST=null;const getDefaultColorContrast=()=>(DEFAULT_COLOR_CONTRAST=DEFAULT_COLOR_CONTRAST||{backgroundColor:"#00000000",color:"#00000000",domNode:(0,_dev_utils_3ec9f837_js__WEBPACK_IMPORTED_MODULE_0__.g)().body,level:"Fail",score:1},DEFAULT_COLOR_CONTRAST),TRANSPARENT_REGEXP=/(\d+, ){3}0\)/,koliBriA11yColorContrast=(e,t=getDefaultColorContrast())=>{const r=getComputedStyle(e),o=TRANSPARENT_REGEXP.test(r.backgroundColor)?t.backgroundColor:rgbaConvert.hex(r.backgroundColor),n=TRANSPARENT_REGEXP.test(r.color)?t.color:rgbaConvert.hex(r.color),a=s(o,n),l={backgroundColor:o,color:n,domNode:e,level:f(a),score:a};return a<4.5&&_dev_utils_3ec9f837_js__WEBPACK_IMPORTED_MODULE_0__.L.error(["Color-Contrast-Error",{backgroundColor:l.backgroundColor,color:l.color,level:l.level,score:l.score},l.domNode]),l},koliBriQuerySelectorColors=(e,t=getDefaultColorContrast())=>{t.domNode instanceof HTMLElement&&(t=koliBriA11yColorContrast(t.domNode,t));const r=t.domNode.querySelector(e);if(null===r){const r=t.domNode.querySelectorAll('[class="hydrated"]');for(let o=0;o<r.length&&(t.domNode=r[o],null===(t=koliBriQuerySelectorColors(e,t)).domNode);o++);return t}return koliBriA11yColorContrast(r,t)},scrollByHTMLElement=(e,t=window)=>{e instanceof HTMLElement?(t.scrollTo({behavior:"smooth",top:e.getBoundingClientRect().top+(0,_dev_utils_3ec9f837_js__WEBPACK_IMPORTED_MODULE_0__.a)().pageYOffset-50}),e.focus()):(0,_a11y_tipps_353a7f35_js__WEBPACK_IMPORTED_MODULE_1__.d)("Das HTMLElement ist nicht valide, zu dem gescrollt werden soll.")},scrollBySelector=(e,t)=>{if((e instanceof Document||e instanceof HTMLElement||e instanceof ShadowRoot)&&"string"==typeof t){(0,_a11y_tipps_353a7f35_js__WEBPACK_IMPORTED_MODULE_1__.d)("Bei der Methode querySelectorAll wurden die Parameter document, selector in selector, document getauscht, da der Parameter selector nicht, allerdings der Parameter document optional sein kann.");const r=`${t}`;t=e,e=r}if("string"==typeof e){const r=koliBriQuerySelector(e,t);r instanceof HTMLElement?scrollByHTMLElement(r):(0,_a11y_tipps_353a7f35_js__WEBPACK_IMPORTED_MODULE_1__.d)(`Es konnte kein HTMLElement mit dem Selector (${e}) gefunden werden, zu dem gescrollt werden soll.`)}else (0,_a11y_tipps_353a7f35_js__WEBPACK_IMPORTED_MODULE_1__.d)("Der Selector ist nicht valide, zu dem gescrollt werden soll.")};class KoliBriUtils{static queryHtmlElementColors(e,t,r=!1,o=!0){let n=null;if(!0===r||!1===KoliBriUtils.executionLock)if(!1===r&&(KoliBriUtils.cache.clear(),KoliBriUtils.cache.set(t.domNode,t),KoliBriUtils.executionLock=!0,!0===o&&_dev_utils_3ec9f837_js__WEBPACK_IMPORTED_MODULE_0__.L.debug("[KoliBriUtils] Color contrast analysis started...")),e===t.domNode)n=t;else{const r=new Set;if(t.domNode.shadowRoot){const e=t.domNode.shadowRoot.children;for(let t=0;t<e.length;t++)r.add(e[t])}const o=t.domNode;if("function"==typeof o.assignedNodes){const e=o.assignedNodes();for(let t=0;t<e.length;t++)e[t]instanceof HTMLElement&&r.add(e[t])}const a=t.domNode.children;for(let e=0;e<a.length;e++)r.add(a[e]);const l=Array.from(r);for(let r=0;r<l.length;r++){let o=KoliBriUtils.cache.get(l[r]);void 0===o&&(o=koliBriA11yColorContrast(l[r],t)),KoliBriUtils.cache.set(l[r],o);const a=KoliBriUtils.queryHtmlElementColors(e,o,!0,!1);if(null!==a){n=a;break}}}else _dev_utils_3ec9f837_js__WEBPACK_IMPORTED_MODULE_0__.L.debug("[KoliBriUtils] Call aborted because a color contrast analysis is currently being executed.");return!1===r&&(!0===o&&_dev_utils_3ec9f837_js__WEBPACK_IMPORTED_MODULE_0__.L.debug(`[KoliBriUtils] Color contrast analysis finished (${KoliBriUtils.cache.size} DOM elements are analysed).`),KoliBriUtils.executionLock=!1,KoliBriUtils.cache.clear()),n}}KoliBriUtils.executionLock=!1,KoliBriUtils.cache=new Map;class KoliBriDevHelper{}KoliBriDevHelper.patchTheme=_index_2a11dd6d_js__WEBPACK_IMPORTED_MODULE_2__.p,KoliBriDevHelper.patchThemeTag=_index_2a11dd6d_js__WEBPACK_IMPORTED_MODULE_2__.a,KoliBriDevHelper.querySelector=koliBriQuerySelector,KoliBriDevHelper.querySelectorAll=koliBriQuerySelectorAll,KoliBriDevHelper.scrollByHTMLElement=scrollByHTMLElement,KoliBriDevHelper.scrollBySelector=scrollBySelector,KoliBriDevHelper.stringifyJson=stringifyJson;

/***/ }),

/***/ 1769:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "v": () => (/* binding */ validateTabIndex)
/* harmony export */ });
/* harmony import */ var _a11y_tipps_353a7f35_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(60985);
/* harmony import */ var _prop_validators_c2234525_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(45388);
/*!
 * KoliBri - The accessible HTML-Standard
 */
const options={hooks:{afterPatch:a=>{-1!==a&&0!==a&&(0,_a11y_tipps_353a7f35_js__WEBPACK_IMPORTED_MODULE_0__.a)("Don’t Use Tabindex Greater than 0: https://adrianroselli.com/2014/11/dont-use-tabindex-greater-than-0.html")}}},validateTabIndex=(a,t)=>{(0,_prop_validators_c2234525_js__WEBPACK_IMPORTED_MODULE_1__.e)(a,"_tabIndex",t,options)};

/***/ })

};
;