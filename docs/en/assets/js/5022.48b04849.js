"use strict";
exports.id = 5022;
exports.ids = [5022];
exports.modules = {

/***/ 25583:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   v: () => (/* binding */ validateAccessKey)
/* harmony export */ });
/* harmony import */ var _prop_validators_28badc7d_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(29808);
/*!
 * KoliBri - The accessible HTML-Standard
 */
const validateAccessKey=(a,s)=>{(0,_prop_validators_28badc7d_js__WEBPACK_IMPORTED_MODULE_0__.i)(a,"_accessKey",s)};

/***/ }),

/***/ 10520:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   a: () => (/* binding */ validateAlign),
/* harmony export */   v: () => (/* binding */ validateAlignment)
/* harmony export */ });
/* harmony import */ var _prop_validators_28badc7d_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(29808);
/*!
 * KoliBri - The accessible HTML-Standard
 */
const validateAlignment=(t,i,a)=>{(0,_prop_validators_28badc7d_js__WEBPACK_IMPORTED_MODULE_0__.w)(t,i,(t=>"string"==typeof t&&alignPropTypeOptions.includes(t)),new Set(alignPropTypeOptions),a,{defaultValue:"top"})},horizontalAlignOptions=["left","right"],verticalAlignOptions=["top","bottom"],alignPropTypeOptions=[...horizontalAlignOptions,...verticalAlignOptions],validateAlign=(t,i)=>{validateAlignment(t,"_align",i)};

/***/ }),

/***/ 70800:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   v: () => (/* binding */ validateAlternativeButtonLinkRole)
/* harmony export */ });
/* harmony import */ var _prop_validators_28badc7d_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(29808);
/*!
 * KoliBri - The accessible HTML-Standard
 */
const validateAlternativeButtonLinkRole=(t,a)=>{(0,_prop_validators_28badc7d_js__WEBPACK_IMPORTED_MODULE_0__.i)(t,"_role",a)};

/***/ }),

/***/ 60960:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   v: () => (/* binding */ validateDisabled)
/* harmony export */ });
/* harmony import */ var _prop_validators_28badc7d_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(29808);
/*!
 * KoliBri - The accessible HTML-Standard
 */
const validateDisabled=(a,o)=>{(0,_prop_validators_28badc7d_js__WEBPACK_IMPORTED_MODULE_0__.b)(a,"_disabled",o,{hooks:{afterPatch:a=>{!0===a&&(0,_prop_validators_28badc7d_js__WEBPACK_IMPORTED_MODULE_0__.c)()}}})};

/***/ }),

/***/ 26768:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   p: () => (/* binding */ preventDefaultAndStopPropagation),
/* harmony export */   s: () => (/* binding */ stopPropagation),
/* harmony export */   t: () => (/* binding */ tryToDispatchKoliBriEvent)
/* harmony export */ });
/*!
 * KoliBri - The accessible HTML-Standard
 */
function stopPropagation(t){t.stopImmediatePropagation(),t.stopPropagation()}function createKoliBriEvent(t,o){return new CustomEvent(`kol-${t}`,{bubbles:!0,cancelable:!0,composed:!0,detail:o})}function dispatchKoliBriEvent(t,o,n){return t.dispatchEvent(createKoliBriEvent(o,n))}function tryToDispatchKoliBriEvent(t,o,n){o&&dispatchKoliBriEvent(o,t,n)}function preventDefaultAndStopPropagation(t){t.preventDefault(),stopPropagation(t)}

/***/ }),

/***/ 40556:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   v: () => (/* binding */ validateHideLabel)
/* harmony export */ });
/* harmony import */ var _prop_validators_28badc7d_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(29808);
/*!
 * KoliBri - The accessible HTML-Standard
 */
const validateHideLabel=(a,e,o={})=>{(0,_prop_validators_28badc7d_js__WEBPACK_IMPORTED_MODULE_0__.b)(a,"_hideLabel",e,o)};

/***/ }),

/***/ 87704:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   v: () => (/* binding */ validateHref)
/* harmony export */ });
/* harmony import */ var _prop_validators_28badc7d_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(29808);
/*!
 * KoliBri - The accessible HTML-Standard
 */
const validateHref=(a,r,t={})=>{(0,_prop_validators_28badc7d_js__WEBPACK_IMPORTED_MODULE_0__.i)(a,"_href",r,t)};

/***/ }),

/***/ 69320:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   t: () => (/* binding */ translate)
/* harmony export */ });
/* harmony import */ var _i18n_9eed57c7_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4423);
/* harmony import */ var _reuse_b66836de_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(31604);
/*!
 * KoliBri - The accessible HTML-Standard
 */
let translate=(e,t)=>{var n;return(null!==(n=(0,_i18n_9eed57c7_js__WEBPACK_IMPORTED_MODULE_0__.g)())&&void 0!==n?n:(0,_i18n_9eed57c7_js__WEBPACK_IMPORTED_MODULE_0__.i)("de")).translate(e,t)};"test"===_reuse_b66836de_js__WEBPACK_IMPORTED_MODULE_1__.p&&(translate=e=>e);

/***/ }),

/***/ 41149:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   i: () => (/* binding */ isIcon),
/* harmony export */   v: () => (/* binding */ validateIcons)
/* harmony export */ });
/* harmony import */ var _prop_validators_28badc7d_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(29808);
/* harmony import */ var _reuse_b66836de_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(31604);
/*!
 * KoliBri - The accessible HTML-Standard
 */
const mapCustomIcon=(t,o,e)=>{(0,_reuse_b66836de_js__WEBPACK_IMPORTED_MODULE_0__.c)(e)?t[o]=e:(0,_reuse_b66836de_js__WEBPACK_IMPORTED_MODULE_0__.i)(e,1)&&(t[o]={icon:e})},mapIconProp2State=t=>{let o={};return (0,_reuse_b66836de_js__WEBPACK_IMPORTED_MODULE_0__.i)(t,1)?o={left:{icon:t}}:"object"==typeof t&&null!==t&&(mapCustomIcon(o,"top",t.top),mapCustomIcon(o,"right",t.right),mapCustomIcon(o,"bottom",t.bottom),mapCustomIcon(o,"left",t.left)),o},beforePatchIcon=t=>{var o,e,i;if(null===(o=t.nextState)||void 0===o?void 0:o.has("_icons")){const o=null===(e=t.nextState)||void 0===e?void 0:e.get("_icons");null===(i=t.nextState)||void 0===i||i.set("_icons",mapIconProp2State(o))}},isIcon=t=>"object"==typeof t&&null!==t&&(void 0===t.style||(0,_reuse_b66836de_js__WEBPACK_IMPORTED_MODULE_0__.b)(t.style))&&(void 0===t.label||(0,_reuse_b66836de_js__WEBPACK_IMPORTED_MODULE_0__.i)(t.label))&&(0,_reuse_b66836de_js__WEBPACK_IMPORTED_MODULE_0__.i)(t.icon,1),validateIcons=(t,o,e={})=>{(0,_prop_validators_28badc7d_js__WEBPACK_IMPORTED_MODULE_1__.o)(o,(()=>{var i;try{o=(0,_prop_validators_28badc7d_js__WEBPACK_IMPORTED_MODULE_1__.p)(o)}catch(t){}(0,_prop_validators_28badc7d_js__WEBPACK_IMPORTED_MODULE_1__.w)(t,"_icons",(t=>{const o="object"==typeof t&&null!==t&&0===Object.keys(t).length;return null===t||o||(0,_reuse_b66836de_js__WEBPACK_IMPORTED_MODULE_0__.i)(t,1)||"object"==typeof t&&null!==t&&((0,_reuse_b66836de_js__WEBPACK_IMPORTED_MODULE_0__.i)(t.left,1)||isIcon(t.left)||(0,_reuse_b66836de_js__WEBPACK_IMPORTED_MODULE_0__.i)(t.right,1)||isIcon(t.right)||(0,_reuse_b66836de_js__WEBPACK_IMPORTED_MODULE_0__.i)(t.top,1)||isIcon(t.top)||(0,_reuse_b66836de_js__WEBPACK_IMPORTED_MODULE_0__.i)(t.bottom,1)||isIcon(t.bottom))}),new Set(["KoliBriIcon"]),o,Object.assign(Object.assign({},e),{defaultValue:{},hooks:{afterPatch:null===(i=e.hooks)||void 0===i?void 0:i.afterPatch,beforePatch:(t,o,i,n)=>{var s,a;"function"==typeof(null===(s=e.hooks)||void 0===s?void 0:s.beforePatch)&&(null===(a=e.hooks)||void 0===a||a.beforePatch(t,o,i,n)),beforePatchIcon(i)}}}))}))};

/***/ }),

/***/ 35022:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  kol_link_wc: () => (/* binding */ KolLinkWc)
});

// EXTERNAL MODULE: ./node_modules/.pnpm/@public-ui+components@2.1.1/node_modules/@public-ui/components/dist/esm/index-40be4caf.js
var index_40be4caf = __webpack_require__(33432);
// EXTERNAL MODULE: ./node_modules/.pnpm/@public-ui+components@2.1.1/node_modules/@public-ui/components/dist/esm/i18n-a7081f2c.js
var i18n_a7081f2c = __webpack_require__(69320);
;// CONCATENATED MODULE: ./node_modules/.pnpm/@public-ui+components@2.1.1/node_modules/@public-ui/components/dist/esm/ariaCurrentService-6fe36ebc.js
/*!
 * KoliBri - The accessible HTML-Standard
 */
let currentLocation;const subscribers=[],setCurrentLocation=r=>{currentLocation=r,subscribers.forEach((s=>{s(r)}))},onLocationChange=(r,s=!0)=>(s&&"string"==typeof currentLocation&&r(currentLocation),subscribers.push(r),()=>{const s=subscribers.indexOf(r);s>=0&&subscribers.splice(s,1)});
// EXTERNAL MODULE: ./node_modules/.pnpm/@public-ui+components@2.1.1/node_modules/@public-ui/components/dist/esm/events-29e84d75.js
var events_29e84d75 = __webpack_require__(26768);
// EXTERNAL MODULE: ./node_modules/.pnpm/@public-ui+components@2.1.1/node_modules/@public-ui/components/dist/esm/component-names-791b1799.js
var component_names_791b1799 = __webpack_require__(83852);
// EXTERNAL MODULE: ./node_modules/.pnpm/@public-ui+components@2.1.1/node_modules/@public-ui/components/dist/esm/prop.validators-28badc7d.js
var prop_validators_28badc7d = __webpack_require__(29808);
// EXTERNAL MODULE: ./node_modules/.pnpm/@public-ui+components@2.1.1/node_modules/@public-ui/components/dist/esm/href-c781430c.js
var href_c781430c = __webpack_require__(87704);
// EXTERNAL MODULE: ./node_modules/.pnpm/@public-ui+components@2.1.1/node_modules/@public-ui/components/dist/esm/reuse-b66836de.js
var reuse_b66836de = __webpack_require__(31604);
// EXTERNAL MODULE: ./node_modules/.pnpm/@public-ui+components@2.1.1/node_modules/@public-ui/components/dist/esm/access-key-2088944e.js
var access_key_2088944e = __webpack_require__(25583);
// EXTERNAL MODULE: ./node_modules/.pnpm/@public-ui+components@2.1.1/node_modules/@public-ui/components/dist/esm/disabled-8359b1c0.js
var disabled_8359b1c0 = __webpack_require__(60960);
// EXTERNAL MODULE: ./node_modules/.pnpm/@public-ui+components@2.1.1/node_modules/@public-ui/components/dist/esm/hide-label-80a2c6d3.js
var hide_label_80a2c6d3 = __webpack_require__(40556);
// EXTERNAL MODULE: ./node_modules/.pnpm/@public-ui+components@2.1.1/node_modules/@public-ui/components/dist/esm/icons-652ffedc.js
var icons_652ffedc = __webpack_require__(41149);
// EXTERNAL MODULE: ./node_modules/.pnpm/@public-ui+components@2.1.1/node_modules/@public-ui/components/dist/esm/label-af70fdc5.js
var label_af70fdc5 = __webpack_require__(72784);
// EXTERNAL MODULE: ./node_modules/.pnpm/@public-ui+components@2.1.1/node_modules/@public-ui/components/dist/esm/alternative-button-link-role-d488ee62.js
var alternative_button_link_role_d488ee62 = __webpack_require__(70800);
// EXTERNAL MODULE: ./node_modules/.pnpm/@public-ui+components@2.1.1/node_modules/@public-ui/components/dist/esm/tab-index-4c88df26.js
var tab_index_4c88df26 = __webpack_require__(99747);
// EXTERNAL MODULE: ./node_modules/.pnpm/@public-ui+components@2.1.1/node_modules/@public-ui/components/dist/esm/tooltip-align-0c6ee8c8.js
var tooltip_align_0c6ee8c8 = __webpack_require__(38036);
;// CONCATENATED MODULE: ./node_modules/.pnpm/@public-ui+components@2.1.1/node_modules/@public-ui/components/dist/esm/kol-link-wc.entry.js
/*!
 * KoliBri - The accessible HTML-Standard
 */
const ariaCurrentValuePropTypeOptions=["date","location","page","step","time","true","false"],validateAriaCurrentValue=(t,e)=>{(0,prop_validators_28badc7d.w)(t,"_ariaCurrentValue",(t=>"string"==typeof t&&ariaCurrentValuePropTypeOptions.includes(t)),new Set([`AriaCurrentValue {${ariaCurrentValuePropTypeOptions.join(", ")}`]),e,{defaultValue:"page"})},validateDownload=(t,e)=>{(0,prop_validators_28badc7d.i)(t,"_download",e)},validateLinkCallbacks=(t,e)=>{"object"==typeof e&&"function"==typeof(null==e?void 0:e.onClick)&&(t.state=Object.assign(Object.assign({},t.state),{_on:e}))},validateLinkTarget=(t,e)=>{(0,prop_validators_28badc7d.i)(t,"_target",e)},KolLinkWc=class{constructor(t){(0,index_40be4caf.r)(this,t),this.catchRef=t=>{this.ref=t,(0,reuse_b66836de.a)(this.host,this.ref)},this.onClick=t=>{var e,a;!0===this.state._disabled?(0,events_29e84d75.p)(t):"function"==typeof(null===(e=this.state._on)||void 0===e?void 0:e.onClick)&&(t.preventDefault(),t.stopPropagation(),(0,prop_validators_28badc7d.q)(t,this.ref),null===(a=this.state._on)||void 0===a||a.onClick(t,this.state._href))},this.getRenderValues=()=>{const t="string"==typeof this.state._target&&"_self"!==this.state._target,e={href:"string"==typeof this.state._href&&this.state._href.length>0?this.state._href:"javascript:void(0);",target:"string"==typeof this.state._target&&this.state._target.length>0?this.state._target:void 0,rel:t?"noopener":void 0,download:"string"==typeof this.state._download?this.state._download:void 0};return!0!==this.state._hideLabel||this.state._label||(0,prop_validators_28badc7d.j)("[KolLink] Es muss ein Aria-Label gesetzt werden, wenn _hide-label gesetzt ist."),{isExternal:t,tagAttrs:e}},this._accessKey=void 0,this._ariaCurrentValue=void 0,this._disabled=!1,this._download=void 0,this._hideLabel=!1,this._href=void 0,this._icons=void 0,this._label=void 0,this._on=void 0,this._role=void 0,this._tabIndex=void 0,this._target=void 0,this._tooltipAlign="right",this.state={_ariaCurrentValue:"page",_href:"",_icons:{}}}render(){const{isExternal:t,tagAttrs:e}=this.getRenderValues(),a=(0,reuse_b66836de.s)(this.state._label);return (0,index_40be4caf.h)(index_40be4caf.H,{key:"82f9f5d0f689c25163bd6136ca5c34dcb1fd692b",class:"kol-link-wc"},(0,index_40be4caf.h)("a",Object.assign({key:"b7db13f7744362450d778d707e5540558d997ecb",ref:this.catchRef},e,{accessKey:this.state._accessKey,"aria-current":this.state._ariaCurrent,"aria-disabled":this.state._disabled?"true":void 0,"aria-label":this.state._hideLabel&&"string"==typeof this.state._label?`${this.state._label}${t?` (${(0,i18n_a7081f2c.t)("kol-open-link-in-tab")})`:""}`:void 0,class:{disabled:!0===this.state._disabled,"external-link":t,"hide-label":!0===this.state._hideLabel}},this.state._on,{onClick:this.onClick,onKeyPress:this.onClick,role:this.state._role,tabIndex:this.state._disabled?-1:this.state._tabIndex}),(0,index_40be4caf.h)(component_names_791b1799.f,{key:"74e96d85bcef160e5cb9c0d5676981b32e5abaaf",_accessKey:this.state._accessKey,_icons:this.state._icons,_hideLabel:this.state._hideLabel,_label:a?"":this.state._label||this.state._href},(0,index_40be4caf.h)("slot",{key:"e6f537ca1733bf45673369cb51f9cd0a5ed8d349",name:"expert",slot:"expert"})),t&&(0,index_40be4caf.h)(component_names_791b1799.g,{key:"b41fee1ddbffadab9c2371ff336fadb3ce7abe74",class:"external-link-icon",_label:this.state._hideLabel?"":(0,i18n_a7081f2c.t)("kol-open-link-in-tab"),_icons:"codicon codicon-link-external","aria-hidden":this.state._hideLabel})),(0,index_40be4caf.h)(component_names_791b1799.a,{key:"c6e48539bc159d804fd5cff1983a1a652f16a312","aria-hidden":"true",hidden:a||!this.state._hideLabel,_accessKey:this.state._accessKey,_align:this.state._tooltipAlign,_label:this.state._label||this.state._href}))}validateAccessKey(t){(0,access_key_2088944e.v)(this,t)}validateAriaCurrentValue(t){validateAriaCurrentValue(this,t)}validateDisabled(t){(0,disabled_8359b1c0.v)(this,t)}validateDownload(t){validateDownload(this,t)}validateHideLabel(t){(0,hide_label_80a2c6d3.v)(this,t)}validateHref(t){(0,href_c781430c.v)(this,t,{required:!0})}validateIcons(t){(0,icons_652ffedc.v)(this,t)}validateLabel(t){(0,label_af70fdc5.a)(this,t)}validateOn(t){validateLinkCallbacks(this,t)}validateRole(t){(0,alternative_button_link_role_d488ee62.v)(this,t)}validateTabIndex(t){(0,tab_index_4c88df26.v)(this,t)}validateTarget(t){validateLinkTarget(this,t)}validateTooltipAlign(t){(0,tooltip_align_0c6ee8c8.v)(this,t)}componentWillLoad(){this.validateAccessKey(this._accessKey),this.validateAriaCurrentValue(this._ariaCurrentValue),this.validateDisabled(this._disabled),this.validateDownload(this._download),this.validateHideLabel(this._hideLabel),this.validateHref(this._href),this.validateIcons(this._icons),this.validateLabel(this._label),this.validateOn(this._on),this.validateRole(this._role),this.validateTabIndex(this._tabIndex),this.validateTarget(this._target),this.validateTooltipAlign(this._tooltipAlign),this.unsubscribeOnLocationChange=onLocationChange((t=>{this.state._ariaCurrent=t===this.state._href?this.state._ariaCurrentValue:void 0}))}disconnectedCallback(){this.unsubscribeOnLocationChange&&this.unsubscribeOnLocationChange()}get host(){return (0,index_40be4caf.g)(this)}static get watchers(){return{_accessKey:["validateAccessKey"],_ariaCurrentValue:["validateAriaCurrentValue"],_disabled:["validateDisabled"],_download:["validateDownload"],_hideLabel:["validateHideLabel"],_href:["validateHref"],_icons:["validateIcons"],_label:["validateLabel"],_on:["validateOn"],_role:["validateRole"],_tabIndex:["validateTabIndex"],_target:["validateTarget"],_tooltipAlign:["validateTooltipAlign"]}}};

/***/ }),

/***/ 72784:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   a: () => (/* binding */ validateLabelWithExpertSlot),
/* harmony export */   b: () => (/* binding */ hasEnoughReadableChars),
/* harmony export */   c: () => (/* binding */ containsOnlyNumbers),
/* harmony export */   h: () => (/* binding */ headingLevelOptions),
/* harmony export */   v: () => (/* binding */ validateLabel)
/* harmony export */ });
/* harmony import */ var _prop_validators_28badc7d_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(29808);
/*!
 * KoliBri - The accessible HTML-Standard
 */
const headingLevelOptions=[0,1,2,3,4,5,6],READABLE_CHARS=/[a-zA-Z0-9äöüÄÖÜß]/g,ONLY_NUMBERS=/^\d+$/;function countReadableChars(a){var t;return"string"==typeof a&&(null===(t=a.match(READABLE_CHARS))||void 0===t?void 0:t.length)||0}function hasEnoughReadableChars(a,t=1){return countReadableChars(a)>=t}function containsOnlyNumbers(a){return ONLY_NUMBERS.test(a)}function getValidationOptions(a){var t;return Object.assign(Object.assign({},a),{hooks:{afterPatch:(t,e,n,o)=>{var i,s;"function"==typeof(null===(i=a.hooks)||void 0===i?void 0:i.afterPatch)&&(null===(s=a.hooks)||void 0===s||s.afterPatch(t,e,n,o)),"string"==typeof t&&!1===hasEnoughReadableChars(t,3)&&!1===containsOnlyNumbers(t)&&(0,_prop_validators_28badc7d_js__WEBPACK_IMPORTED_MODULE_0__.a)(`The heading or label ("${t}") is not accessible. A label should consist of at least three readable characters.`),"string"==typeof t&&t.length>80&&(0,_prop_validators_28badc7d_js__WEBPACK_IMPORTED_MODULE_0__.u)("A heading or label should not be longer than 80 characters.")},beforePatch:null===(t=a.hooks)||void 0===t?void 0:t.beforePatch}})}const LABEL_VALUES=new Set(["string"]),validateLabel=(a,t,e={})=>{(0,_prop_validators_28badc7d_js__WEBPACK_IMPORTED_MODULE_0__.w)(a,"_label",(a=>"string"==typeof a),LABEL_VALUES,t,getValidationOptions(e))},validateLabelWithExpertSlot=validateLabel;

/***/ }),

/***/ 29808:
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
/* harmony import */ var _index_4a3076fc_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(88172);
/* harmony import */ var _dev_utils_1ca991a2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74520);
/*!
 * KoliBri - The accessible HTML-Standard
 */
const a11yCache=new Set,a11yHint=(e,t)=>{(!1===a11yCache.has(e)||(null==t?void 0:t.force))&&(a11yCache.add(e),_dev_utils_1ca991a2_js__WEBPACK_IMPORTED_MODULE_0__.L.debug([e].concat((null==t?void 0:t.details)||[]),{classifier:"✋ a11y",forceLog:!!(null==t?void 0:t.force),overwriteStyle:"; background-color: #09f"}))},deprecatedCache=new Set,deprecatedHint=(e,t)=>{(!1===deprecatedCache.has(e)||(null==t?void 0:t.force))&&(deprecatedCache.add(e),_dev_utils_1ca991a2_js__WEBPACK_IMPORTED_MODULE_0__.L.warn([e].concat((null==t?void 0:t.details)||[]),{classifier:"🔥 deprecated",forceLog:!!(null==t?void 0:t.force),overwriteStyle:"; background-color: #f00"}))},devCache=new Set,devHint=(e,t)=>{(!1===devCache.has(e)||(null==t?void 0:t.force))&&(devCache.add(e),_dev_utils_1ca991a2_js__WEBPACK_IMPORTED_MODULE_0__.L.debug([e].concat((null==t?void 0:t.details)||[]),{classifier:"💻 dev",forceLog:!!(null==t?void 0:t.force),overwriteStyle:"; background-color: #f09"}))},devWarning=(e,t)=>{(!1===devCache.has(e)||(null==t?void 0:t.force))&&(devCache.add(e),_dev_utils_1ca991a2_js__WEBPACK_IMPORTED_MODULE_0__.L.warn([e].concat((null==t?void 0:t.details)||[]),{classifier:"⚠️ dev",forceLog:!!(null==t?void 0:t.force),overwriteStyle:"; background-color: #f09"}))},featureCache=new Set,featureHint=(e,t=!1,r)=>{(!1===featureCache.has(e)||(null==r?void 0:r.force))&&(featureCache.add(e),e+=!0===t?" ✅":"",_dev_utils_1ca991a2_js__WEBPACK_IMPORTED_MODULE_0__.L.debug([e].concat((null==r?void 0:r.details)||[]),{classifier:"🌟 feature",forceLog:!!(null==r?void 0:r.force),overwriteStyle:"; background-color: #309"}))};devHint("Wir freuen uns über jedes Feedback, Kommentare, Screenshots oder Demo-Links von einer auf KoliBri-basierenden Anwendung (kolibri@itzbund.de). Vielen Dank!");const uiUxCache=new Set,uiUxHint=(e,t)=>{(!1===uiUxCache.has(e)||(null==t?void 0:t.force))&&(uiUxCache.add(e),_dev_utils_1ca991a2_js__WEBPACK_IMPORTED_MODULE_0__.L.debug([e].concat((null==t?void 0:t.details)||[]),{classifier:"📑 ui/ux",forceLog:!!(null==t?void 0:t.force),overwriteStyle:"; background-color: #060;"}))},a11yHintDisabled=()=>{a11yHint('"Disabled" schränkt die Zugänglichkeit und Sichtbarkeit ein. Wir empfehlen aus Sicht der Barrierefreiheit readonly- statt disabled-Attribut zu verwenden.\n- https://uxdesign.cc/is-it-ok-to-grey-out-disabled-buttons-8afa74a0fae')},a11yHintLabelingLandmarks=e=>{"string"==typeof e&&""!==e||a11yHint("Manche Strukturelemente, wie bspw. der nav-Tag, können mehrfach in einer Webseite verwendet werden. Damit die gleichnamigen Strukturelemente voneinander unterschieden werden können, ist es erforderlich ein Aria-Label zu setzen.\n- https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/Navigation_Role#accessibility_concerns")},uiUxHintMillerscheZahl=(e,t=8)=>{t>7&&uiUxHint(`[${e}] Innerhalb von Navigationsstrukturen wird empfohlen nicht mehr als 7 Menüpunkte zu verwenden.\n\nLinks:\n- https://de.ryte.com/wiki/Millersche_Zahl\n- https://de.wikipedia.org/wiki/Millersche_Zahl`)};var n=.2126,r=.7152,t=.0722,e=1/12.92;function u(e){return Math.pow((e+.055)/1.055,2.4)}function a(o){var a=o[0]/255,i=o[1]/255,l=o[2]/255,s=a<=.03928?a*e:u(a),c=i<=.03928?i*e:u(i),d=l<=.03928?l*e:u(l);return s*n+c*r+d*t}function i(e){var t=255;8===(e=e.replace(/^#/,"")).length&&(t=parseInt(e.slice(6,8),16),e=e.substring(0,6)),4===e.length&&(t=parseInt(e.slice(3,4).repeat(2),16),e=e.substring(0,3)),3===e.length&&(e=e[0]+e[0]+e[1]+e[1]+e[2]+e[2]);var r=parseInt(e,16);return[r>>16,r>>8&255,255&r,t]}function c(e,t){return(Math.max(e,t)+.05)/(Math.min(e,t)+.05)}function o(e,t){return c(a(e),a(t))}function s(e,t){return o(i(e),i(t))}function f(e){return e>=7?"AAA":e>=4.5?"AA":e>=3?"AA Large":"Fail"}var rgbaConvert={exports:{}};function arr(e){var t=parse(e);return 3==t.length?t.concat(255):(t[3]=Math.round(t[3]),t)}function obj(e){var t=parse(e);return{r:t[0],g:t[1],b:t[2],a:3==t.length?255:Math.round(t[3])}}function css(e){var t=parse(e);return 3==t.length&&t.push(255),255==t[3]?"rgb("+t[0]+", "+t[1]+", "+t[2]+")":0==t[3]?"rgba("+t[0]+", "+t[1]+", "+t[2]+", 0)":"rgba("+t[0]+", "+t[1]+", "+t[2]+", "+String(t[3]/255).substr(1)+")"}function hex(e){3==(t=parse(e)).length&&t.push(255);var t,r=255==t[3],o=num2hex(t[0]),n=num2hex(t[1]),a=num2hex(t[2]),i=isshort(o,n,a,t=num2hex(Math.round(t[3])));return r?i?"#"+o.charAt(0)+n.charAt(0)+a.charAt(0):"#"+o+n+a:i?"#"+o.charAt(0)+n.charAt(0)+a.charAt(0)+t.charAt(0):"#"+o+n+a+t}function num(e){var t=parse(e);return 3==t.length?t.push(255):t[3]=Math.round(t[3]),(t[3]<<24>>>0|t[0]<<16|t[1]<<8|t[2])>>>0}function parse(e){return"string"==typeof e?name(e=e.toLowerCase())||hex3(e)||hex6(e)||rgb(e)||rgba(e)||[0,0,0,255]:object(e)||array(e)||number(e)||[0,0,0,255]}function num2hex(e){var t=e.toString(16);return 1==t.length?"0"+t:t}function isshort(e,t,r,o){var n=["ff","00","11","22","33","44","55","66","77","88","99","aa","bb","cc","dd","ee"];return-1!=n.indexOf(e)&&-1!=n.indexOf(t)&&-1!=n.indexOf(r)&&-1!=n.indexOf(o)}function name(e){return"red"==e?[255,0,0]:"green"==e?[0,255,0]:"blue"==e?[0,0,255]:"black"==e?[0,0,0]:"white"==e?[255,255,255]:"cyan"==e?[0,255,255]:"gray"==e||"grey"==e?[128,128,128]:"magenta"==e||"pink"==e?[255,0,255]:"yellow"==e?[255,255,0]:void 0}function hex2num(e){return 1==e.length?parseInt(e+e,16):parseInt(e,16)}function hex3(e){var t=e.replace(/^#/,""),r=t.length;if(3==r||4==r){var o=hex2num(t[0]),n=hex2num(t[1]),a=hex2num(t[2]),i=3==r?255:hex2num(t[3]);if(isNaN(o)||isNaN(n)||isNaN(a)||isNaN(i))return;return[o,n,a,i]}}function hex6(e){var t=e.replace(/^#/,""),r=t.length;if(6==r||8==r){var o=hex2num(t.slice(0,2)),n=hex2num(t.slice(2,4)),a=hex2num(t.slice(4,6)),i=6==r?255:hex2num(t.slice(6,8));if(isNaN(o)||isNaN(n)||isNaN(a)||isNaN(i))return;return[o,n,a,i]}}function getnum(e,t){return"number"!=typeof e||!0===t&&Math.floor(e)!==e?-1:e>=0&&e<=255?e:-1}function object(e){if("[object Object]"===Object.prototype.toString.call(e)&&Object.getPrototypeOf(e)===Object.getPrototypeOf({})){var t=getnum(null!=e.r?e.r:null!=e.red?e.red:0,!0),r=getnum(null!=e.g?e.g:null!=e.green?e.green:0,!0),o=getnum(null!=e.b?e.b:null!=e.blue?e.blue:0,!0),n=getnum(null!=e.a?e.a:null!=e.alpha?e.alpha:255,!0);if(-1!=t&&-1!=r&&-1!=o&&-1!=n)return[t,r,o,n]}}function array(e){if(Array.isArray(e)&&(3==e.length||4==e.length)){var t=getnum(e[0],!0),r=getnum(e[1],!0),o=getnum(e[2],!0),n=getnum(null!=e[3]?e[3]:255,!0);if(-1!=t&&-1!=r&&-1!=o&&-1!=n)return[t,r,o,n]}}function number(e){if("number"==typeof e&&Math.floor(e)==e&&e<=4294967295&&e>=0)return[e>>16&255,e>>8&255,255&e,e>>24&255]}function rgb(e){if("rgb("==e.substr(0,4)){var t=(e=e.match(/^rgb\(([^)]+)\)/)[1]).split(/ *, */).map(Number),r=getnum(t[0],!0),o=getnum(t[1],!0),n=getnum(t[2],!0);if(-1!=r&&-1!=o&&-1!=n)return[r,o,n,255]}}function rgba(e){if("rgba("==e.substr(0,5)){var t=(e=e.match(/^rgba\(([^)]+)\)/)[1]).split(/ *, */).map(Number),r=getnum(t[0],!0),o=getnum(t[1],!0),n=getnum(t[2],!0),a=getnum(255*t[3]);if(-1!=r&&-1!=o&&-1!=n&&-1!=a)return[r,o,n,a]}}rgbaConvert.exports=arr,rgbaConvert.exports.arr=arr,rgbaConvert.exports.obj=obj,rgbaConvert.exports.css=css,rgbaConvert.exports.hex=hex,rgbaConvert.exports.num=num;const rgba$1=rgbaConvert.exports,pushNodes=(e,t)=>{t.forEach((t=>{!1===e.has(t)&&e.add(t)}))},querySelectorAll=(e,t=document)=>{if(t instanceof Document||t instanceof HTMLElement||t instanceof ShadowRoot){const r=new Set;pushNodes(r,t.querySelectorAll(e));const o=t.querySelectorAll('[class*="hydrated"]');for(let t=0;t<o.length;t++){const n=o[t].shadowRoot;pushNodes(r,querySelectorAll(e,"object"==typeof n&&null!==n?n:o[t]))}return Array.from(r)}throw new Error("The parameter document for the method querySelectorAll is not type of Document, HTMLElement or ShadowRoot.")},querySelector=(e,t=document)=>{if(t instanceof Document||t instanceof HTMLElement||t instanceof ShadowRoot){let r=t.querySelector(e);if(null===r){const o=t.querySelectorAll('[class*="hydrated"]');for(let t=0;t<o.length;t++){const n=o[t].shadowRoot;if(r=querySelector(e,"object"==typeof n&&null!==n?n:o[t]),null!==r)break}}return r}throw new Error("The parameter document for the method querySelector is not type of Document, HTMLElement or ShadowRoot.")},OBJECT_OBJECT=/\[object Object\]/,objectObjectHandler=(e,t)=>{"string"==typeof e&&OBJECT_OBJECT.test(e)||t()},emptyStringByArrayHandler=(e,t)=>{"string"==typeof e&&""===e||t()},setEventTarget=(e,t)=>{(0,_dev_utils_1ca991a2_js__WEBPACK_IMPORTED_MODULE_0__.a)()&&(_dev_utils_1ca991a2_js__WEBPACK_IMPORTED_MODULE_0__.L.debug([e,t]),_dev_utils_1ca991a2_js__WEBPACK_IMPORTED_MODULE_0__.L.debug("↑ We propagate the (submit) event to this target.")),Object.defineProperty(e,"target",{value:t,writable:!1})},patchState=e=>{var t,r,o;null===(t=e.nextHooks)||void 0===t||t.forEach(((t,r)=>{var o;const n=t.get("beforePatch");"function"==typeof n&&n(null===(o=e.nextState)||void 0===o?void 0:o.get(r),e.nextState,e,r)})),(null===(r=e.nextState)||void 0===r?void 0:r.size)>0&&(e.state=Object.assign(Object.assign({},e.state),Object.fromEntries(e.nextState)),delete e.nextState,null===(o=e.nextHooks)||void 0===o||o.forEach(((t,r)=>{const o=t.get("afterPatch");"function"==typeof o&&o(e.state[r],e.state,e,r)}))),delete e.nextHooks},setState=(e,t,r,o={})=>{var n,a;void 0===e.nextHooks&&(e.nextHooks=new Map),void 0===e.nextState&&(e.nextState=new Map);e.nextHooks.get(t)instanceof Map==!1&&e.nextHooks.set(t,new Map),"function"==typeof o.afterPatch&&(null===(n=e.nextHooks.get(t))||void 0===n||n.set("afterPatch",o.afterPatch)),"function"==typeof o.beforePatch&&(null===(a=e.nextHooks.get(t))||void 0===a||a.set("beforePatch",o.beforePatch)),e.nextState.set(t,r),patchState(e)},logWarn=(e,t,r,o)=>{devHint(`[${e.constructor.name}] Der Property-Wert (${r}) für '${t}' ist nicht valide. Folgende Werte sind erlaubt: ${Array.from(o).join(", ")}`)};function watchValidator(e,t,r,o,n,a={}){r(n)?setState(e,t,n,a.hooks):void 0===n&&!0!==a.required&&r(a.defaultValue)?setState(e,t,a.defaultValue,a.hooks):(a.required||o.add(null),logWarn(e,t,n,o))}const watchBoolean=(e,t,r,o)=>{watchValidator(e,t,(e=>"boolean"==typeof e),new Set(["Boolean {true, false}"]),r,o)},watchString=(e,t,r,o={})=>{const n="number"==typeof o.minLength?null==o?void 0:o.minLength:0;watchValidator(e,t,(e=>"string"==typeof e&&e.length>=n&&(void 0===(null==o?void 0:o.maxLength)||e.length<=o.maxLength)),new Set(["String"]),r,o)},watchNumber=(e,t,r,o)=>{watchValidator(e,t,(e=>"number"==typeof e&&(void 0===(null==o?void 0:o.min)||"number"==typeof(null==o?void 0:o.min)&&e>=o.min)&&(void 0===(null==o?void 0:o.max)||"number"==typeof(null==o?void 0:o.max)&&e<=o.max)),new Set(["Number"]),r,o)},watchJsonArrayString=(e,t,r,o,n=(e=>e==e),a={})=>{emptyStringByArrayHandler(o,(()=>{objectObjectHandler(o,(()=>{void 0===o&&(o=[]);try{try{o=parseJson(o)}catch(e){}if(Array.isArray(o)){const i=o.find((e=>!r(e)));void 0===i&&n(o)?setState(e,t,o,a.hooks):objectObjectHandler(i,(()=>{throw _dev_utils_1ca991a2_js__WEBPACK_IMPORTED_MODULE_0__.L.debug(i),new Error("↑ Das Schema für das Property (_options) ist nicht valide. Der Wert wird nicht geändert.")}))}else objectObjectHandler(o,(()=>{throw _dev_utils_1ca991a2_js__WEBPACK_IMPORTED_MODULE_0__.L.debug(o),new Error("↑ Das Schema für das Property (_options) ist nicht valide. Der Wert wird nicht geändert.")}))}catch(e){_dev_utils_1ca991a2_js__WEBPACK_IMPORTED_MODULE_0__.L.debug(e)}}))}))},BOOLEAN=/^(true|false)$/,INTEGER=/^-?(0|[1-9]\d*)$/,FLOAT=/^-?(0.|[1-9]\d*.)\d*[1-9]$/,mapString2Unknown=e=>{const t=typeof e,r=`${e}`;if("string"==typeof e)if(BOOLEAN.test(e))e="true"===e;else if(INTEGER.test(e))e=parseInt(e);else if(FLOAT.test(e))e=parseFloat(e);else if(JSON_CHARS.test(e))try{e=parseJson(e)}catch(e){}return t!==typeof e&&devHint(`You have used a stringified property value (${r} to ${JSON.stringify(e)}) which type switched from ${t} to ${typeof e}!`),e},stringifyJson=e=>{try{return JSON.stringify(e).replace(/"/g,"'")}catch(t){throw _dev_utils_1ca991a2_js__WEBPACK_IMPORTED_MODULE_0__.L.warn(["stringifyJson",e]),_dev_utils_1ca991a2_js__WEBPACK_IMPORTED_MODULE_0__.L.error("↑ Das JSON konnte nicht in einen String umgewandelt werden. Es wird ein stringifizierbares JSON erwartet."),new Error}},JSON_CHARS=/^[{[]/,parseJson=e=>{if("string"==typeof e)try{return JSON.parse(e)}catch(t){if(JSON_CHARS.test(e))try{return JSON.parse(e.replace(/'/g,'"'))}catch(t){_dev_utils_1ca991a2_js__WEBPACK_IMPORTED_MODULE_0__.L.warn(["parseJson",e]),_dev_utils_1ca991a2_js__WEBPACK_IMPORTED_MODULE_0__.L.error("↑ Der JSON-String konnte nicht geparsed werden. Achten Sie darauf, dass einfache Anführungszeichen im Text maskiert werden (&#8216;).")}}throw new Error},mapBoolean2String=e=>"boolean"==typeof e?!0===e?"true":"false":void 0,mapStringOrBoolean2String=e=>"string"==typeof e?e:mapBoolean2String(e),koliBriQuerySelector=(e,t)=>querySelector(e,t||(0,_dev_utils_1ca991a2_js__WEBPACK_IMPORTED_MODULE_0__.g)()),koliBriQuerySelectorAll=(e,t)=>querySelectorAll(e,t||(0,_dev_utils_1ca991a2_js__WEBPACK_IMPORTED_MODULE_0__.g)());let DEFAULT_COLOR_CONTRAST=null;const getDefaultColorContrast=()=>(DEFAULT_COLOR_CONTRAST=DEFAULT_COLOR_CONTRAST||{backgroundColor:"#00000000",color:"#00000000",domNode:(0,_dev_utils_1ca991a2_js__WEBPACK_IMPORTED_MODULE_0__.g)().body,level:"Fail",score:1},DEFAULT_COLOR_CONTRAST),TRANSPARENT_REGEXP=/(\d+, ){3}0\)/,koliBriA11yColorContrast=(e,t=getDefaultColorContrast())=>{const r=getComputedStyle(e),o=TRANSPARENT_REGEXP.test(r.backgroundColor)?t.backgroundColor:rgba$1.hex(r.backgroundColor),n=TRANSPARENT_REGEXP.test(r.color)?t.color:rgba$1.hex(r.color),a=s(o,n),i={backgroundColor:o,color:n,domNode:e,level:f(a),score:a};return a<4.5&&_dev_utils_1ca991a2_js__WEBPACK_IMPORTED_MODULE_0__.L.error(["Color-Contrast-Error",{backgroundColor:i.backgroundColor,color:i.color,level:i.level,score:i.score},i.domNode]),i},koliBriQuerySelectorColors=(e,t=getDefaultColorContrast())=>{t.domNode instanceof HTMLElement&&(t=koliBriA11yColorContrast(t.domNode,t));const r=t.domNode.querySelector(e);if(null===r){const r=t.domNode.querySelectorAll('[class="hydrated"]');for(let o=0;o<r.length&&(t.domNode=r[o],null===(t=koliBriQuerySelectorColors(e,t)).domNode);o++);return t}return koliBriA11yColorContrast(r,t)};class KoliBriUtils{static queryHtmlElementColors(e,t,r=!1,o=!0){let n=null;if(!0===r||!1===KoliBriUtils.executionLock)if(!1===r&&(KoliBriUtils.cache.clear(),KoliBriUtils.cache.set(t.domNode,t),KoliBriUtils.executionLock=!0,!0===o&&_dev_utils_1ca991a2_js__WEBPACK_IMPORTED_MODULE_0__.L.debug("[KoliBriUtils] Color contrast analysis started...")),e===t.domNode)n=t;else{const r=new Set;if(t.domNode.shadowRoot){const e=t.domNode.shadowRoot.children;for(let t=0;t<e.length;t++)r.add(e[t])}const o=t.domNode;if("function"==typeof o.assignedNodes){const e=o.assignedNodes();for(let t=0;t<e.length;t++)e[t]instanceof HTMLElement&&r.add(e[t])}const a=t.domNode.children;for(let e=0;e<a.length;e++)r.add(a[e]);const i=Array.from(r);for(let r=0;r<i.length;r++){let o=KoliBriUtils.cache.get(i[r]);void 0===o&&(o=koliBriA11yColorContrast(i[r],t)),KoliBriUtils.cache.set(i[r],o);const a=KoliBriUtils.queryHtmlElementColors(e,o,!0,!1);if(null!==a){n=a;break}}}else _dev_utils_1ca991a2_js__WEBPACK_IMPORTED_MODULE_0__.L.debug("[KoliBriUtils] Call aborted because a color contrast analysis is currently being executed.");return!1===r&&(!0===o&&_dev_utils_1ca991a2_js__WEBPACK_IMPORTED_MODULE_0__.L.debug(`[KoliBriUtils] Color contrast analysis finished (${KoliBriUtils.cache.size} DOM elements are analysed).`),KoliBriUtils.executionLock=!1,KoliBriUtils.cache.clear()),n}}KoliBriUtils.executionLock=!1,KoliBriUtils.cache=new Map;class KoliBriDevHelper{}KoliBriDevHelper.patchTheme=_index_4a3076fc_js__WEBPACK_IMPORTED_MODULE_1__.U,KoliBriDevHelper.patchThemeTag=_index_4a3076fc_js__WEBPACK_IMPORTED_MODULE_1__.b,KoliBriDevHelper.querySelector=koliBriQuerySelector,KoliBriDevHelper.querySelectorAll=koliBriQuerySelectorAll,KoliBriDevHelper.stringifyJson=stringifyJson;

/***/ }),

/***/ 99747:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   v: () => (/* binding */ validateTabIndex)
/* harmony export */ });
/* harmony import */ var _prop_validators_28badc7d_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(29808);
/*!
 * KoliBri - The accessible HTML-Standard
 */
const options={hooks:{afterPatch:a=>{-1!==a&&0!==a&&(0,_prop_validators_28badc7d_js__WEBPACK_IMPORTED_MODULE_0__.a)("Don't Use Tabindex Greater than 0: https://adrianroselli.com/2014/11/dont-use-tabindex-greater-than-0.html")}}},validateTabIndex=(a,t)=>{(0,_prop_validators_28badc7d_js__WEBPACK_IMPORTED_MODULE_0__.k)(a,"_tabIndex",t,options)};

/***/ }),

/***/ 38036:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   v: () => (/* binding */ validateTooltipAlign)
/* harmony export */ });
/* harmony import */ var _align_d1a156ea_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10520);
/*!
 * KoliBri - The accessible HTML-Standard
 */
const validateTooltipAlign=(i,a)=>{(0,_align_d1a156ea_js__WEBPACK_IMPORTED_MODULE_0__.v)(i,"_tooltipAlign",a)};

/***/ })

};
;