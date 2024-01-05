"use strict";
exports.id = 6432;
exports.ids = [6432];
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

/***/ 7040:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   v: () => (/* binding */ validateAccessKey)
/* harmony export */ });
/* harmony import */ var _prop_validators_c9100bb0_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(45366);
/*!
 * KoliBri - The accessible HTML-Standard
 */
const validateAccessKey=(a,s)=>{(0,_prop_validators_c9100bb0_js__WEBPACK_IMPORTED_MODULE_0__.d)(a,"_accessKey",s)};

/***/ }),

/***/ 1645:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   a: () => (/* binding */ validateAlign),
/* harmony export */   v: () => (/* binding */ validateAlignment)
/* harmony export */ });
/* harmony import */ var _prop_validators_c9100bb0_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(45366);
/*!
 * KoliBri - The accessible HTML-Standard
 */
const horizontalAlignOptions=["left","right"],verticalAlignOptions=["top","bottom"],alignPropTypeOptions=[...horizontalAlignOptions,...verticalAlignOptions],validateAlign=(t,i)=>{validateAlignment(t,"_align",i)},validateAlignment=(t,i,a)=>{(0,_prop_validators_c9100bb0_js__WEBPACK_IMPORTED_MODULE_0__.w)(t,i,(t=>"string"==typeof t&&alignPropTypeOptions.includes(t)),new Set(alignPropTypeOptions),a,{defaultValue:"top"})};

/***/ }),

/***/ 33512:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   v: () => (/* binding */ validateAlternativeButtonLinkRole)
/* harmony export */ });
/* harmony import */ var _prop_validators_c9100bb0_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(45366);
/*!
 * KoliBri - The accessible HTML-Standard
 */
const validateAlternativeButtonLinkRole=(t,a)=>{(0,_prop_validators_c9100bb0_js__WEBPACK_IMPORTED_MODULE_0__.d)(t,"_role",a)};

/***/ }),

/***/ 65975:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   v: () => (/* binding */ validateHideLabel)
/* harmony export */ });
/* harmony import */ var _prop_validators_c9100bb0_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(45366);
/*!
 * KoliBri - The accessible HTML-Standard
 */
const validateHideLabel=(a,e,o={})=>{(0,_prop_validators_c9100bb0_js__WEBPACK_IMPORTED_MODULE_0__.a)(a,"_hideLabel",e,o)};

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

/***/ 85489:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   i: () => (/* binding */ isIcon),
/* harmony export */   v: () => (/* binding */ validateIcons)
/* harmony export */ });
/* harmony import */ var _prop_validators_c9100bb0_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(45366);
/* harmony import */ var _reuse_d79ab469_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26366);
/*!
 * KoliBri - The accessible HTML-Standard
 */
const mapCustomIcon=(t,o,i)=>{(0,_reuse_d79ab469_js__WEBPACK_IMPORTED_MODULE_0__.c)(i)?t[o]=i:(0,_reuse_d79ab469_js__WEBPACK_IMPORTED_MODULE_0__.i)(i,1)&&(t[o]={icon:i})},mapIconProp2State=t=>{let o={};return (0,_reuse_d79ab469_js__WEBPACK_IMPORTED_MODULE_0__.i)(t,1)?o={left:{icon:t}}:"object"==typeof t&&null!==t&&(mapCustomIcon(o,"top",t.top),mapCustomIcon(o,"right",t.right),mapCustomIcon(o,"bottom",t.bottom),mapCustomIcon(o,"left",t.left)),o},beforePatchIcon=t=>{var o,i,s;if(null===(o=t.nextState)||void 0===o?void 0:o.has("_icons")){const o=null===(i=t.nextState)||void 0===i?void 0:i.get("_icons");null===(s=t.nextState)||void 0===s||s.set("_icons",mapIconProp2State(o))}},isIcon=t=>"object"==typeof t&&null!==t&&(void 0===t.style||(0,_reuse_d79ab469_js__WEBPACK_IMPORTED_MODULE_0__.b)(t.style))&&(0,_reuse_d79ab469_js__WEBPACK_IMPORTED_MODULE_0__.i)(t.icon,1),validateIcons=(t,o)=>{(0,_prop_validators_c9100bb0_js__WEBPACK_IMPORTED_MODULE_1__.o)(o,(()=>{try{o=(0,_prop_validators_c9100bb0_js__WEBPACK_IMPORTED_MODULE_1__.p)(o)}catch(t){}(0,_prop_validators_c9100bb0_js__WEBPACK_IMPORTED_MODULE_1__.w)(t,"_icons",(t=>null===t||(0,_reuse_d79ab469_js__WEBPACK_IMPORTED_MODULE_0__.i)(t,1)||"object"==typeof t&&null!==t&&((0,_reuse_d79ab469_js__WEBPACK_IMPORTED_MODULE_0__.i)(t.left,1)||isIcon(t.left)||(0,_reuse_d79ab469_js__WEBPACK_IMPORTED_MODULE_0__.i)(t.right,1)||isIcon(t.right)||(0,_reuse_d79ab469_js__WEBPACK_IMPORTED_MODULE_0__.i)(t.top,1)||isIcon(t.top)||(0,_reuse_d79ab469_js__WEBPACK_IMPORTED_MODULE_0__.i)(t.bottom,1)||isIcon(t.bottom))),new Set(["KoliBriIcon"]),o,{hooks:{beforePatch:(o,i)=>{null===o&&i.set("_icons",{}),beforePatchIcon(t)}},required:!0})}))};

/***/ }),

/***/ 76432:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  kol_link_wc: () => (/* binding */ KolLinkWc)
});

// EXTERNAL MODULE: ./node_modules/.pnpm/@public-ui+components@2.0.3/node_modules/@public-ui/components/dist/esm/index-5dfe6d77.js
var index_5dfe6d77 = __webpack_require__(73536);
// EXTERNAL MODULE: ./node_modules/.pnpm/@public-ui+components@2.0.3/node_modules/@public-ui/components/dist/esm/i18n-565c326b.js
var i18n_565c326b = __webpack_require__(55213);
// EXTERNAL MODULE: ./node_modules/.pnpm/@public-ui+components@2.0.3/node_modules/@public-ui/components/dist/esm/alternative-button-link-role-03c7dc90.js
var alternative_button_link_role_03c7dc90 = __webpack_require__(33512);
// EXTERNAL MODULE: ./node_modules/.pnpm/@public-ui+components@2.0.3/node_modules/@public-ui/components/dist/esm/prop.validators-c9100bb0.js
var prop_validators_c9100bb0 = __webpack_require__(45366);
// EXTERNAL MODULE: ./node_modules/.pnpm/@public-ui+components@2.0.3/node_modules/@public-ui/components/dist/esm/icons-5c4d2e57.js
var icons_5c4d2e57 = __webpack_require__(85489);
// EXTERNAL MODULE: ./node_modules/.pnpm/@public-ui+components@2.0.3/node_modules/@public-ui/components/dist/esm/label-5f92bb62.js
var label_5f92bb62 = __webpack_require__(61568);
// EXTERNAL MODULE: ./node_modules/.pnpm/@public-ui+components@2.0.3/node_modules/@public-ui/components/dist/esm/tooltip-align-36b445e5.js
var tooltip_align_36b445e5 = __webpack_require__(6022);
// EXTERNAL MODULE: ./node_modules/.pnpm/@public-ui+components@2.0.3/node_modules/@public-ui/components/dist/esm/a11y.tipps-2a54fd3e.js
var a11y_tipps_2a54fd3e = __webpack_require__(83254);
// EXTERNAL MODULE: ./node_modules/.pnpm/@public-ui+components@2.0.3/node_modules/@public-ui/components/dist/esm/reuse-d79ab469.js
var reuse_d79ab469 = __webpack_require__(26366);
// EXTERNAL MODULE: ./node_modules/.pnpm/@public-ui+components@2.0.3/node_modules/@public-ui/components/dist/esm/tab-index-4eba9292.js
var tab_index_4eba9292 = __webpack_require__(93827);
// EXTERNAL MODULE: ./node_modules/.pnpm/@public-ui+components@2.0.3/node_modules/@public-ui/components/dist/esm/hide-label-12ff810a.js
var hide_label_12ff810a = __webpack_require__(65975);
// EXTERNAL MODULE: ./node_modules/.pnpm/@public-ui+components@2.0.3/node_modules/@public-ui/components/dist/esm/access-key-65ff36eb.js
var access_key_65ff36eb = __webpack_require__(7040);
;// CONCATENATED MODULE: ./node_modules/.pnpm/@public-ui+components@2.0.3/node_modules/@public-ui/components/dist/esm/ariaCurrentService-6fe36ebc.js
/*!
 * KoliBri - The accessible HTML-Standard
 */
let currentLocation;const subscribers=[],setCurrentLocation=r=>{currentLocation=r,subscribers.forEach((s=>{s(r)}))},onLocationChange=(r,s=!0)=>(s&&"string"==typeof currentLocation&&r(currentLocation),subscribers.push(r),()=>{const s=subscribers.indexOf(r);s>=0&&subscribers.splice(s,1)});
;// CONCATENATED MODULE: ./node_modules/.pnpm/@public-ui+components@2.0.3/node_modules/@public-ui/components/dist/esm/kol-link-wc.entry.js
/*!
 * KoliBri - The accessible HTML-Standard
 */
const validateDownload=(t,e)=>{(0,prop_validators_c9100bb0.d)(t,"_download",e)},validateHref=(t,e,a={})=>{(0,prop_validators_c9100bb0.d)(t,"_href",e,a)},validateLinkCallbacks=(t,e)=>{"object"==typeof e&&"function"==typeof(null==e?void 0:e.onClick)&&(t.state=Object.assign(Object.assign({},t.state),{_on:e}))},validateLinkTarget=(t,e)=>{(0,prop_validators_c9100bb0.d)(t,"_target",e)},ariaCurrentValuePropTypeOptions=["date","location","page","step","time","true","false"],validateAriaCurrentValue=(t,e)=>{(0,prop_validators_c9100bb0.w)(t,"_ariaCurrentValue",(t=>"string"==typeof t&&ariaCurrentValuePropTypeOptions.includes(t)),new Set([`AriaCurrentValue {${ariaCurrentValuePropTypeOptions.join(", ")}`]),e,{defaultValue:"page"})},KolLinkWc=class{constructor(t){(0,index_5dfe6d77.r)(this,t),this.catchRef=t=>{this.ref=t,(0,reuse_d79ab469.a)(this.host,this.ref)},this.onClick=t=>{var e,a;"function"==typeof(null===(e=this.state._on)||void 0===e?void 0:e.onClick)&&(t.preventDefault(),t.stopPropagation(),(0,prop_validators_c9100bb0.f)(t,this.ref),null===(a=this.state._on)||void 0===a||a.onClick(t,this.state._href))},this.getRenderValues=()=>{const t="string"==typeof this.state._target&&"_self"!==this.state._target,e={href:"string"==typeof this.state._href&&this.state._href.length>0?this.state._href:"javascript:void(0);",target:"string"==typeof this.state._target&&this.state._target.length>0?this.state._target:void 0,rel:t?"noopener":void 0,download:"string"==typeof this.state._download?this.state._download:void 0};return!0!==this.state._hideLabel||this.state._label||(0,a11y_tipps_2a54fd3e.d)("[KolLink] Es muss ein Aria-Label gesetzt werden, wenn _hide-label gesetzt ist."),{isExternal:t,tagAttrs:e}},this._accessKey=void 0,this._ariaCurrentValue=void 0,this._download=void 0,this._hideLabel=!1,this._href=void 0,this._icons=void 0,this._label=void 0,this._on=void 0,this._role=void 0,this._tabIndex=void 0,this._target=void 0,this._tooltipAlign="right",this.state={_href:"…",_icons:{},_ariaCurrentValue:"page"}}render(){const{isExternal:t,tagAttrs:e}=this.getRenderValues(),a=(0,reuse_d79ab469.s)(this.state._label);return (0,index_5dfe6d77.h)(index_5dfe6d77.H,null,(0,index_5dfe6d77.h)("a",Object.assign({ref:this.catchRef},e,{accessKey:this.state._accessKey,"aria-current":this.state._ariaCurrent,"aria-label":t&&this.state._hideLabel&&"string"==typeof this.state._label?`${this.state._label} (${(0,i18n_565c326b.a)("kol-open-link-in-tab")})`:void 0,class:{"external-link":t,"hide-label":!0===this.state._hideLabel}},this.state._on,{onClick:this.onClick,onKeyPress:this.onClick,role:this.state._role,tabIndex:this.state._tabIndex}),(0,index_5dfe6d77.h)("kol-span-wc",{_accessKey:this.state._accessKey,_icons:this.state._icons,_hideLabel:this.state._hideLabel,_label:a?"":this.state._label||this.state._href},(0,index_5dfe6d77.h)("slot",{name:"expert",slot:"expert"})),t&&(0,index_5dfe6d77.h)("kol-icon",{class:"external-link-icon",_label:(0,i18n_565c326b.a)("kol-open-link-in-tab"),_icons:"codicon codicon-link-external","aria-hidden":this.state._hideLabel})),(0,index_5dfe6d77.h)("kol-tooltip-wc",{"aria-hidden":"true",hidden:a||!this.state._hideLabel,_accessKey:this.state._accessKey,_align:this.state._tooltipAlign,_label:this.state._label||this.state._href}))}validateAccessKey(t){(0,access_key_65ff36eb.v)(this,t)}validateAriaCurrentValue(t){validateAriaCurrentValue(this,t)}validateDownload(t){validateDownload(this,t)}validateHideLabel(t){(0,hide_label_12ff810a.v)(this,t)}validateHref(t){validateHref(this,t)}validateIcons(t){(0,icons_5c4d2e57.v)(this,t)}validateLabel(t){(0,label_5f92bb62.a)(this,t)}validateOn(t){validateLinkCallbacks(this,t)}validateRole(t){(0,alternative_button_link_role_03c7dc90.v)(this,t)}validateTabIndex(t){(0,tab_index_4eba9292.v)(this,t)}validateTarget(t){validateLinkTarget(this,t)}validateTooltipAlign(t){(0,tooltip_align_36b445e5.v)(this,t)}componentWillLoad(){this.validateAccessKey(this._accessKey),this.validateAriaCurrentValue(this._ariaCurrentValue),this.validateDownload(this._download),this.validateHideLabel(this._hideLabel),this.validateHref(this._href),this.validateIcons(this._icons),this.validateLabel(this._label),this.validateOn(this._on),this.validateRole(this._role),this.validateTabIndex(this._tabIndex),this.validateTarget(this._target),this.validateTooltipAlign(this._tooltipAlign),this.unsubscribeOnLocationChange=onLocationChange((t=>{this.state._ariaCurrent=t===this.state._href?this.state._ariaCurrentValue:void 0}))}disconnectedCallback(){this.unsubscribeOnLocationChange&&this.unsubscribeOnLocationChange()}get host(){return (0,index_5dfe6d77.g)(this)}static get watchers(){return{_accessKey:["validateAccessKey"],_ariaCurrentValue:["validateAriaCurrentValue"],_download:["validateDownload"],_hideLabel:["validateHideLabel"],_href:["validateHref"],_icons:["validateIcons"],_label:["validateLabel"],_on:["validateOn"],_role:["validateRole"],_tabIndex:["validateTabIndex"],_target:["validateTarget"],_tooltipAlign:["validateTooltipAlign"]}}};

/***/ }),

/***/ 61568:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   a: () => (/* binding */ validateLabelWithExpertSlot),
/* harmony export */   c: () => (/* binding */ containsOnlyNumbers),
/* harmony export */   h: () => (/* binding */ hasEnoughReadableChars),
/* harmony export */   v: () => (/* binding */ validateLabel)
/* harmony export */ });
/* harmony import */ var _a11y_tipps_2a54fd3e_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(83254);
/* harmony import */ var _prop_validators_c9100bb0_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(45366);
/*!
 * KoliBri - The accessible HTML-Standard
 */
const READABLE_CHARS=/[a-zA-Z0-9äöüÄÖÜß]/g,ONLY_NUMBERS=/^\d+$/;function countReadableChars(a){var t;return"string"==typeof a&&(null===(t=a.match(READABLE_CHARS))||void 0===t?void 0:t.length)||0}function hasEnoughReadableChars(a,t=1){return countReadableChars(a)>=t}function containsOnlyNumbers(a){return ONLY_NUMBERS.test(a)}function getValidationOptions(a){var t;return{hooks:{afterPatch:(t,e,o,n)=>{var i,l;"function"==typeof(null===(i=a.hooks)||void 0===i?void 0:i.afterPatch)&&(null===(l=a.hooks)||void 0===l||l.afterPatch(t,e,o,n)),"string"==typeof t&&!1===hasEnoughReadableChars(t,3)&&!1===containsOnlyNumbers(t)&&(0,_a11y_tipps_2a54fd3e_js__WEBPACK_IMPORTED_MODULE_0__.a)(`The heading or label ("${t}") is not accessible. A label should consist of at least three readable characters.`),"string"==typeof t&&t.length>80&&(0,_a11y_tipps_2a54fd3e_js__WEBPACK_IMPORTED_MODULE_0__.u)("A heading or label should not be longer than 80 characters.")},beforePatch:null===(t=a.hooks)||void 0===t?void 0:t.beforePatch}}}const LABEL_VALUES=new Set(["string"]),validateLabel=(a,t,e={})=>{(0,_prop_validators_c9100bb0_js__WEBPACK_IMPORTED_MODULE_1__.w)(a,"_label",(a=>"string"==typeof a),LABEL_VALUES,t,getValidationOptions(e))},validateLabelWithExpertSlot=validateLabel;

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

/***/ }),

/***/ 93827:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   v: () => (/* binding */ validateTabIndex)
/* harmony export */ });
/* harmony import */ var _a11y_tipps_2a54fd3e_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(83254);
/* harmony import */ var _prop_validators_c9100bb0_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(45366);
/*!
 * KoliBri - The accessible HTML-Standard
 */
const options={hooks:{afterPatch:a=>{-1!==a&&0!==a&&(0,_a11y_tipps_2a54fd3e_js__WEBPACK_IMPORTED_MODULE_0__.a)("Don’t Use Tabindex Greater than 0: https://adrianroselli.com/2014/11/dont-use-tabindex-greater-than-0.html")}}},validateTabIndex=(a,t)=>{(0,_prop_validators_c9100bb0_js__WEBPACK_IMPORTED_MODULE_1__.e)(a,"_tabIndex",t,options)};

/***/ }),

/***/ 6022:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   v: () => (/* binding */ validateTooltipAlign)
/* harmony export */ });
/* harmony import */ var _alignment_3ca6c7b4_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1645);
/*!
 * KoliBri - The accessible HTML-Standard
 */
const validateTooltipAlign=(i,t)=>{(0,_alignment_3ca6c7b4_js__WEBPACK_IMPORTED_MODULE_0__.v)(i,"_tooltipAlign",t)};

/***/ })

};
;