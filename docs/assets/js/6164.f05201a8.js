"use strict";
exports.id = 6164;
exports.ids = [6164];
exports.modules = {

/***/ 39108:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "w": () => (/* binding */ watchTooltipAlignment)
/* harmony export */ });
/* harmony import */ var _prop_validators_e402ad49_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10723);
/*!
 * KoliBri - The accessible HTML-Standard
 */
const watchTooltipAlignment=(t,o,a)=>{(0,_prop_validators_e402ad49_js__WEBPACK_IMPORTED_MODULE_0__.a)(t,o,(t=>"top"===t||"right"===t||"bottom"===t||"left"===t),new Set(["Alignment {top, right, buttom, left}"]),a,{defaultValue:"top"})};

/***/ }),

/***/ 18695:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": () => (/* binding */ watchButtonType),
/* harmony export */   "w": () => (/* binding */ watchButtonVariant)
/* harmony export */ });
/* harmony import */ var _prop_validators_e402ad49_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10723);
/*!
 * KoliBri - The accessible HTML-Standard
 */
const watchButtonType=(t,a,o)=>{(0,_prop_validators_e402ad49_js__WEBPACK_IMPORTED_MODULE_0__.a)(t,a,(t=>"button"===t||"reset"===t||"submit"===t),new Set(["KoliBriButtonType {button, reset, submit}"]),o)},watchButtonVariant=(t,a,o)=>{(0,_prop_validators_e402ad49_js__WEBPACK_IMPORTED_MODULE_0__.a)(t,a,(t=>"primary"===t||"secondary"===t||"normal"===t||"danger"===t||"ghost"===t||"custom"===t),new Set(["KoliBriButtonVariant {primary, secondary, normal, danger, ghost, custom}"]),o,{defaultValue:"normal"})};

/***/ }),

/***/ 23817:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": () => (/* binding */ propagateResetEventToForm),
/* harmony export */   "p": () => (/* binding */ propagateSubmitEventToForm)
/* harmony export */ });
/* harmony import */ var _a11y_tipps_1cea9822_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(50289);
/* harmony import */ var _dev_utils_157f0499_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(82664);
/* harmony import */ var _prop_validators_e402ad49_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10723);
/*!
 * KoliBri - The accessible HTML-Standard
 */
const searchFormElement=e=>{for((0,_dev_utils_157f0499_js__WEBPACK_IMPORTED_MODULE_0__.b)()&&((0,_a11y_tipps_1cea9822_js__WEBPACK_IMPORTED_MODULE_1__.d)("↓ Search form element start."),console.log(e));e instanceof HTMLElement&&"FORM"!==e.tagName&&"KOL-FORM"!==e.tagName;)e=e.parentElement instanceof HTMLElement?e.parentElement:e.parentNode instanceof ShadowRoot?e.parentNode.host:null,(0,_dev_utils_157f0499_js__WEBPACK_IMPORTED_MODULE_0__.b)()&&console.log(e);return (0,_dev_utils_157f0499_js__WEBPACK_IMPORTED_MODULE_0__.b)()&&(0,_a11y_tipps_1cea9822_js__WEBPACK_IMPORTED_MODULE_1__.d)("↑ Search form element finished."),e},propagateResetEventToForm=(e={})=>{const t=searchFormElement(e.form);if(t instanceof HTMLElement){const e=new Event("reset",{bubbles:!0,cancelable:!0});if("FORM"===t.tagName)(0,_prop_validators_e402ad49_js__WEBPACK_IMPORTED_MODULE_2__.f)(e,t),t.dispatchEvent(e);else if("KOL-FORM"===t.tagName){(0,_prop_validators_e402ad49_js__WEBPACK_IMPORTED_MODULE_2__.f)(e,_prop_validators_e402ad49_js__WEBPACK_IMPORTED_MODULE_2__.K.querySelector("form",t));const o=t;"object"==typeof o._on&&null!==typeof o._on&&"function"==typeof o._on.onReset&&o._on.onReset(e)}}},propagateSubmitEventToForm=(e={})=>{const t=searchFormElement(e.form);if(t instanceof HTMLElement){const e=new SubmitEvent("submit",{bubbles:!0,cancelable:!0,submitter:t});if("FORM"===t.tagName)(0,_prop_validators_e402ad49_js__WEBPACK_IMPORTED_MODULE_2__.f)(e,t),t.dispatchEvent(e);else if("KOL-FORM"===t.tagName){(0,_prop_validators_e402ad49_js__WEBPACK_IMPORTED_MODULE_2__.f)(e,_prop_validators_e402ad49_js__WEBPACK_IMPORTED_MODULE_2__.K.querySelector("form",t));const o=t;"object"==typeof o._on&&null!==typeof o._on&&"function"==typeof o._on.onSubmit&&o._on.onSubmit(e)}}};

/***/ }),

/***/ 27249:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": () => (/* binding */ validateDisabled),
/* harmony export */   "v": () => (/* binding */ validateAriaExpanded)
/* harmony export */ });
/* harmony import */ var _prop_validators_e402ad49_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10723);
/*!
 * KoliBri - The accessible HTML-Standard
 */
const validateAriaExpanded=(a,d)=>{(0,_prop_validators_e402ad49_js__WEBPACK_IMPORTED_MODULE_0__.b)(a,"_ariaExpanded",d)},validateDisabled=(a,d)=>{(0,_prop_validators_e402ad49_js__WEBPACK_IMPORTED_MODULE_0__.b)(a,"_disabled",d)};

/***/ }),

/***/ 98217:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "i": () => (/* binding */ isIcon),
/* harmony export */   "v": () => (/* binding */ validateIcon),
/* harmony export */   "w": () => (/* binding */ watchIconAlign)
/* harmony export */ });
/* harmony import */ var _prop_validators_e402ad49_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10723);
/* harmony import */ var _reuse_3a02afb9_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(95180);
/*!
 * KoliBri - The accessible HTML-Standard
 */
const mapCustomIcon=(t,o,i)=>{(0,_reuse_3a02afb9_js__WEBPACK_IMPORTED_MODULE_0__.d)(i)?t[o]=i:(0,_reuse_3a02afb9_js__WEBPACK_IMPORTED_MODULE_0__.b)(i,1)&&(t[o]={icon:i})},mapIconProp2State=(t,o)=>{let i={};if((0,_reuse_3a02afb9_js__WEBPACK_IMPORTED_MODULE_0__.b)(t,1))if("right"===o)i={right:{icon:t}};else i={left:{icon:t}};else"object"==typeof t&&null!==t&&(mapCustomIcon(i,"top",t.top),mapCustomIcon(i,"right",t.right),mapCustomIcon(i,"bottom",t.bottom),mapCustomIcon(i,"left",t.left));return i},beforePatchIcon=t=>{var o,i,n,e,c,a,s;if(null===(o=t.nextState)||void 0===o?void 0:o.has("_icon")){const o=null===(i=t.nextState)||void 0===i?void 0:i.get("_icon"),c=(null===(n=t.nextState)||void 0===n?void 0:n.get("_iconAlign"))||t.state._iconAlign;null===(e=t.nextState)||void 0===e||e.set("_icon",mapIconProp2State(o,c))}else if(null===(c=t.nextState)||void 0===c?void 0:c.has("_iconAlign")){const o=t.state._iconAlign;null===(a=t.nextState)||void 0===a||a.set("_icon",{[o]:void 0,[null===(s=t.nextState)||void 0===s?void 0:s.get("_iconAlign")]:t.state._icon[o]})}},isIcon=t=>"object"==typeof t&&null!==t&&(void 0===t.style||(0,_reuse_3a02afb9_js__WEBPACK_IMPORTED_MODULE_0__.c)(t.style))&&(0,_reuse_3a02afb9_js__WEBPACK_IMPORTED_MODULE_0__.b)(t.icon,1),validateIcon=(t,o)=>{(0,_prop_validators_e402ad49_js__WEBPACK_IMPORTED_MODULE_1__.o)(o,(()=>{try{o=(0,_prop_validators_e402ad49_js__WEBPACK_IMPORTED_MODULE_1__.p)(o)}catch(t){}(0,_prop_validators_e402ad49_js__WEBPACK_IMPORTED_MODULE_1__.a)(t,"_icon",(t=>null===t||(0,_reuse_3a02afb9_js__WEBPACK_IMPORTED_MODULE_0__.b)(t,1)||"object"==typeof t&&null!==t&&((0,_reuse_3a02afb9_js__WEBPACK_IMPORTED_MODULE_0__.b)(t.left,1)||isIcon(t.left)||(0,_reuse_3a02afb9_js__WEBPACK_IMPORTED_MODULE_0__.b)(t.right,1)||isIcon(t.right)||(0,_reuse_3a02afb9_js__WEBPACK_IMPORTED_MODULE_0__.b)(t.top,1)||isIcon(t.top)||(0,_reuse_3a02afb9_js__WEBPACK_IMPORTED_MODULE_0__.b)(t.bottom,1)||isIcon(t.bottom))),new Set(["KoliBriIcon"]),o,{hooks:{beforePatch:(o,i)=>{null===o&&i.set("_icon",{}),beforePatchIcon(t)}},required:!0})}))},watchIconAlign=(t,o)=>{(0,_prop_validators_e402ad49_js__WEBPACK_IMPORTED_MODULE_1__.a)(t,"_iconAlign",(t=>"left"===t||"right"===t),new Set(["Alignment {left, right, top, bottom}"]),o,{hooks:{beforePatch:()=>{beforePatchIcon(t)}}})};

/***/ }),

/***/ 96164:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "kol_button_wc": () => (/* binding */ KolButtonWc),
/* harmony export */   "kol_heading_wc": () => (/* binding */ KolHeadingWc),
/* harmony export */   "kol_span_wc": () => (/* binding */ KolSpanWc)
/* harmony export */ });
/* harmony import */ var _index_0e29e47a_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(97571);
/* harmony import */ var _button_link_0f3cba87_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(39108);
/* harmony import */ var _a11y_tipps_1cea9822_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(50289);
/* harmony import */ var _dev_utils_157f0499_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(82664);
/* harmony import */ var _prop_validators_e402ad49_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(10723);
/* harmony import */ var _reuse_3a02afb9_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(95180);
/* harmony import */ var _icon_00018c54_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(98217);
/* harmony import */ var _label_d51b1a57_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(16147);
/* harmony import */ var _tab_index_63d1379d_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(37681);
/* harmony import */ var _controller_873db1b1_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(23817);
/* harmony import */ var _controller_0b0c0e12_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(18695);
/* harmony import */ var _disabled_52196242_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(27249);
/* harmony import */ var _validation_a42d9cc9_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(91211);
/*!
 * KoliBri - The accessible HTML-Standard
 */
const KolButtonWc=class{constructor(t){(0,_index_0e29e47a_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,t),this.nonce=(0,_dev_utils_157f0499_js__WEBPACK_IMPORTED_MODULE_1__.n)(),this.catchRef=t=>{this.ref=t,(0,_reuse_3a02afb9_js__WEBPACK_IMPORTED_MODULE_2__.a)(this.host,this.ref)},this.onClick=t=>{var a,e;"submit"===this.state._type?(0,_controller_873db1b1_js__WEBPACK_IMPORTED_MODULE_3__.p)({form:this.host,ref:this.ref}):"reset"===this.state._type?(0,_controller_873db1b1_js__WEBPACK_IMPORTED_MODULE_3__.a)({form:this.host,ref:this.ref}):"function"==typeof(null===(a=this.state._on)||void 0===a?void 0:a.onClick)?(t.stopPropagation(),(0,_prop_validators_e402ad49_js__WEBPACK_IMPORTED_MODULE_4__.f)(t,this.ref),null===(e=this.state._on)||void 0===e||e.onClick(t,this.state._value)):(0,_a11y_tipps_1cea9822_js__WEBPACK_IMPORTED_MODULE_5__.g)("There was no button click callback configured! (_on.onClick)")},this._accessKey=void 0,this._ariaControls=void 0,this._ariaCurrent=void 0,this._ariaExpanded=void 0,this._ariaLabel=void 0,this._ariaSelected=void 0,this._customClass=void 0,this._disabled=!1,this._icon=void 0,this._iconAlign=void 0,this._iconOnly=!1,this._id=void 0,this._label=void 0,this._on=void 0,this._role=void 0,this._tabIndex=void 0,this._tooltipAlign="top",this._type="button",this._value=void 0,this._variant="normal",this.state={_icon:{},_label:"…",_on:{},_type:"button",_variant:"normal"}}render(){return (0,_index_0e29e47a_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_0e29e47a_js__WEBPACK_IMPORTED_MODULE_0__.H,null,(0,_index_0e29e47a_js__WEBPACK_IMPORTED_MODULE_0__.h)("button",Object.assign({ref:this.catchRef,accessKey:this.state._accessKey,"aria-controls":this.state._ariaControls,"aria-current":(0,_prop_validators_e402ad49_js__WEBPACK_IMPORTED_MODULE_4__.j)(this.state._ariaCurrent),"aria-expanded":(0,_prop_validators_e402ad49_js__WEBPACK_IMPORTED_MODULE_4__.h)(this.state._ariaExpanded),"aria-label":!1===this.state._iconOnly?this.state._ariaLabel:void 0,"aria-labelledby":!0===this.state._iconOnly?this.nonce:void 0,"aria-selected":(0,_prop_validators_e402ad49_js__WEBPACK_IMPORTED_MODULE_4__.j)(this.state._ariaSelected),class:{[this.state._variant]:"custom"!==this.state._variant,[this.state._customClass]:"custom"===this.state._variant&&"string"==typeof this.state._customClass&&this.state._customClass.length>0,"icon-only":!0===this.state._iconOnly},disabled:this.state._disabled,id:this.state._id},this.state._on,{onClick:this.onClick,role:this.state._role,tabIndex:this.state._tabIndex,type:this.state._type}),(0,_index_0e29e47a_js__WEBPACK_IMPORTED_MODULE_0__.h)("kol-span-wc",{_icon:this._icon,_iconOnly:this._iconOnly,_label:this.state._label},(0,_index_0e29e47a_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{name:"expert",slot:"expert"}))),!0===this.state._iconOnly&&(0,_index_0e29e47a_js__WEBPACK_IMPORTED_MODULE_0__.h)("kol-tooltip",{"aria-hidden":"true",_align:this.state._tooltipAlign,_id:this.nonce,_label:this.state._ariaLabel||this.state._label}))}validateAccessKey(t){(0,_prop_validators_e402ad49_js__WEBPACK_IMPORTED_MODULE_4__.w)(this,"_accessKey",t)}validateAriaControls(t){(0,_prop_validators_e402ad49_js__WEBPACK_IMPORTED_MODULE_4__.w)(this,"_ariaControls",t)}validateAriaCurrent(t){(0,_prop_validators_e402ad49_js__WEBPACK_IMPORTED_MODULE_4__.a)(this,"_ariaControls",(t=>!0===t||"date"===t||"location"===t||"page"===t||"step"===t||"time"===t),new Set(["boolean","String {data, location, page, step, time}"]),t)}validateAriaExpanded(t){(0,_disabled_52196242_js__WEBPACK_IMPORTED_MODULE_6__.v)(this,t)}validateAriaLabel(t){(0,_label_d51b1a57_js__WEBPACK_IMPORTED_MODULE_7__.a)(this,t)}validateAriaSelected(t){(0,_prop_validators_e402ad49_js__WEBPACK_IMPORTED_MODULE_4__.b)(this,"_ariaSelected",t)}validateCustomClass(t){(0,_prop_validators_e402ad49_js__WEBPACK_IMPORTED_MODULE_4__.w)(this,"_customClass",t,{defaultValue:void 0})}validateDisabled(t){(0,_disabled_52196242_js__WEBPACK_IMPORTED_MODULE_6__.a)(this,t),!0===t&&(0,_a11y_tipps_1cea9822_js__WEBPACK_IMPORTED_MODULE_5__.e)()}validateIcon(t){(0,_icon_00018c54_js__WEBPACK_IMPORTED_MODULE_8__.v)(this,t)}validateIconAlign(t){(0,_icon_00018c54_js__WEBPACK_IMPORTED_MODULE_8__.w)(this,t)}validateIconOnly(t){(0,_prop_validators_e402ad49_js__WEBPACK_IMPORTED_MODULE_4__.b)(this,"_iconOnly",t,{defaultValue:!1})}validateId(t){(0,_prop_validators_e402ad49_js__WEBPACK_IMPORTED_MODULE_4__.w)(this,"_id",t)}validateLabel(t){(0,_label_d51b1a57_js__WEBPACK_IMPORTED_MODULE_7__.b)(this,t)}validateOn(t){"object"==typeof t&&null!==t&&(this.state=Object.assign(Object.assign({},this.state),{_on:t}))}validateRole(t){(0,_prop_validators_e402ad49_js__WEBPACK_IMPORTED_MODULE_4__.w)(this,"_role",t)}validateTabIndex(t){(0,_tab_index_63d1379d_js__WEBPACK_IMPORTED_MODULE_9__.v)(this,t)}validateTooltipAlign(t){(0,_button_link_0f3cba87_js__WEBPACK_IMPORTED_MODULE_10__.w)(this,"_tooltipAlign",t)}validateType(t){(0,_controller_0b0c0e12_js__WEBPACK_IMPORTED_MODULE_11__.a)(this,"_type",t)}validateValue(t){(0,_prop_validators_e402ad49_js__WEBPACK_IMPORTED_MODULE_4__.s)(this,"_value",t)}validateVariant(t){(0,_controller_0b0c0e12_js__WEBPACK_IMPORTED_MODULE_11__.w)(this,"_variant",t)}componentWillLoad(){this.validateAccessKey(this._accessKey),this.validateAriaControls(this._ariaControls),this.validateAriaCurrent(this._ariaCurrent),this.validateAriaExpanded(this._ariaExpanded),this.validateAriaLabel(this._ariaLabel),this.validateAriaSelected(this._ariaSelected),this.validateCustomClass(this._customClass),this.validateDisabled(this._disabled),this.validateIcon(this._icon),this.validateIconAlign(this._iconAlign),this.validateIconOnly(this._iconOnly),this.validateId(this._id),this.validateLabel(this._label),this.validateOn(this._on),this.validateRole(this._role),this.validateTabIndex(this._tabIndex),this.validateTooltipAlign(this._tooltipAlign),this.validateType(this._type),this.validateValue(this._value),this.validateVariant(this._variant)}get host(){return (0,_index_0e29e47a_js__WEBPACK_IMPORTED_MODULE_0__.g)(this)}static get watchers(){return{_accessKey:["validateAccessKey"],_ariaControls:["validateAriaControls"],_ariaCurrent:["validateAriaCurrent"],_ariaExpanded:["validateAriaExpanded"],_ariaLabel:["validateAriaLabel"],_ariaSelected:["validateAriaSelected"],_customClass:["validateCustomClass"],_disabled:["validateDisabled"],_icon:["validateIcon"],_iconAlign:["validateIconAlign"],_iconOnly:["validateIconOnly"],_id:["validateId"],_label:["validateLabel"],_on:["validateOn"],_role:["validateRole"],_tabIndex:["validateTabIndex"],_tooltipAlign:["validateTooltipAlign"],_type:["validateType"],_value:["validateValue"],_variant:["validateVariant"]}}},KolHeadingWc=class{constructor(t){(0,_index_0e29e47a_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,t),this.renderHeadline=(t,a)=>{switch(a){case 1:return (0,_index_0e29e47a_js__WEBPACK_IMPORTED_MODULE_0__.h)("h1",{class:"headline"},t,(0,_index_0e29e47a_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",null));case 2:return (0,_index_0e29e47a_js__WEBPACK_IMPORTED_MODULE_0__.h)("h2",{class:"headline"},t,(0,_index_0e29e47a_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",null));case 3:return (0,_index_0e29e47a_js__WEBPACK_IMPORTED_MODULE_0__.h)("h3",{class:"headline"},t,(0,_index_0e29e47a_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",null));case 4:return (0,_index_0e29e47a_js__WEBPACK_IMPORTED_MODULE_0__.h)("h4",{class:"headline"},t,(0,_index_0e29e47a_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",null));case 5:return (0,_index_0e29e47a_js__WEBPACK_IMPORTED_MODULE_0__.h)("h5",{class:"headline"},t,(0,_index_0e29e47a_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",null));case 6:return (0,_index_0e29e47a_js__WEBPACK_IMPORTED_MODULE_0__.h)("h6",{class:"headline"},t,(0,_index_0e29e47a_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",null));default:return (0,_index_0e29e47a_js__WEBPACK_IMPORTED_MODULE_0__.h)("strong",{class:"headline"},t,(0,_index_0e29e47a_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",null))}},this.renderSecondaryHeadline=(t,a)=>{switch(a){case 1:return (0,_index_0e29e47a_js__WEBPACK_IMPORTED_MODULE_0__.h)("span",{class:"secondary-headline"},t);case 2:return (0,_index_0e29e47a_js__WEBPACK_IMPORTED_MODULE_0__.h)("h2",{class:"secondary-headline"},t);case 3:return (0,_index_0e29e47a_js__WEBPACK_IMPORTED_MODULE_0__.h)("h3",{class:"secondary-headline"},t);case 4:return (0,_index_0e29e47a_js__WEBPACK_IMPORTED_MODULE_0__.h)("h4",{class:"secondary-headline"},t);case 5:return (0,_index_0e29e47a_js__WEBPACK_IMPORTED_MODULE_0__.h)("h5",{class:"secondary-headline"},t);case 6:return (0,_index_0e29e47a_js__WEBPACK_IMPORTED_MODULE_0__.h)("h6",{class:"secondary-headline"},t);default:return (0,_index_0e29e47a_js__WEBPACK_IMPORTED_MODULE_0__.h)("strong",{class:"secondary-headline"},t)}},this._label=void 0,this._level=1,this._secondaryHeadline=void 0,this.state={_label:"…",_level:1}}validateLabel(t){(0,_prop_validators_e402ad49_js__WEBPACK_IMPORTED_MODULE_4__.w)(this,"_label",t)}validateLevel(t){(0,_validation_a42d9cc9_js__WEBPACK_IMPORTED_MODULE_12__.w)(this,t)}validateSecondaryHeadline(t){(0,_prop_validators_e402ad49_js__WEBPACK_IMPORTED_MODULE_4__.w)(this,"_secondaryHeadline",t)}componentWillLoad(){this.validateLabel(this._label),this.validateLevel(this._level),this.validateSecondaryHeadline(this._secondaryHeadline)}render(){return (0,_index_0e29e47a_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_0e29e47a_js__WEBPACK_IMPORTED_MODULE_0__.H,null,"string"==typeof this.state._secondaryHeadline&&this.state._secondaryHeadline.length>0?(0,_index_0e29e47a_js__WEBPACK_IMPORTED_MODULE_0__.h)("hgroup",null,this.renderHeadline(this.state._label,this.state._level),this.state._secondaryHeadline&&this.renderSecondaryHeadline(this.state._secondaryHeadline,this.state._level+1)):this.renderHeadline(this.state._label,this.state._level))}static get watchers(){return{_label:["validateLabel"],_level:["validateLevel"],_secondaryHeadline:["validateSecondaryHeadline"]}}},KolSpanWc=class{constructor(t){(0,_index_0e29e47a_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,t),this._icon=void 0,this._iconOnly=!1,this._label=void 0,this.state={_icon:{},_iconOnly:!1,_label:"…"}}render(){const t=this.state._label.length>0;return (0,_index_0e29e47a_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_0e29e47a_js__WEBPACK_IMPORTED_MODULE_0__.H,{class:{"icon-only":this.state._iconOnly}},this.state._icon.top&&(0,_index_0e29e47a_js__WEBPACK_IMPORTED_MODULE_0__.h)("kol-icon",{class:"icon top",style:this.state._icon.top.style,_ariaLabel:"",_icon:this.state._icon.top.icon}),(0,_index_0e29e47a_js__WEBPACK_IMPORTED_MODULE_0__.h)("span",null,this.state._icon.left&&(0,_index_0e29e47a_js__WEBPACK_IMPORTED_MODULE_0__.h)("kol-icon",{class:"icon left",style:this.state._icon.left.style,_ariaLabel:"",_icon:this.state._icon.left.icon}),!0!==this.state._iconOnly&&this.state._label.length>0?(0,_index_0e29e47a_js__WEBPACK_IMPORTED_MODULE_0__.h)("span",null,this.state._label):"",(0,_index_0e29e47a_js__WEBPACK_IMPORTED_MODULE_0__.h)("span",{"aria-hidden":t?"true":void 0,hidden:t},(0,_index_0e29e47a_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{name:"expert"})),this.state._icon.right&&(0,_index_0e29e47a_js__WEBPACK_IMPORTED_MODULE_0__.h)("kol-icon",{class:"icon right",style:this.state._icon.right.style,_ariaLabel:"",_icon:this.state._icon.right.icon})),this.state._icon.bottom&&(0,_index_0e29e47a_js__WEBPACK_IMPORTED_MODULE_0__.h)("kol-icon",{class:"icon bottom",style:this.state._icon.bottom.style,_ariaLabel:"",_icon:this.state._icon.bottom.icon}))}validateIcon(t){(0,_icon_00018c54_js__WEBPACK_IMPORTED_MODULE_8__.v)(this,t)}validateIconOnly(t){(0,_prop_validators_e402ad49_js__WEBPACK_IMPORTED_MODULE_4__.b)(this,"_iconOnly",t)}validateLabel(t){(0,_label_d51b1a57_js__WEBPACK_IMPORTED_MODULE_7__.b)(this,t)}componentWillLoad(){this.validateIcon(this._icon),this.validateIconOnly(this._iconOnly),this.validateLabel(this._label)}static get watchers(){return{_icon:["validateIcon"],_iconOnly:["validateIconOnly"],_label:["validateLabel"]}}};

/***/ }),

/***/ 16147:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": () => (/* binding */ validateAriaLabelWithLabel),
/* harmony export */   "b": () => (/* binding */ validateLabelWithAriaLabel),
/* harmony export */   "c": () => (/* binding */ containsOnlyNumbers),
/* harmony export */   "h": () => (/* binding */ hasEnoughReadableChars),
/* harmony export */   "v": () => (/* binding */ validateLabel)
/* harmony export */ });
/* harmony import */ var _a11y_tipps_1cea9822_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(50289);
/* harmony import */ var _prop_validators_e402ad49_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10723);
/* harmony import */ var _reuse_3a02afb9_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(95180);
/*!
 * KoliBri - The accessible HTML-Standard
 */
const READABLE_CHARS=/[a-zA-Z0-9äöüÄÖÜß]/g,ONLY_NUMBERS=/^\d+$/;function countReadableChars(a){var e;return"string"==typeof a&&(null===(e=a.match(READABLE_CHARS))||void 0===e?void 0:e.length)||0}function hasEnoughReadableChars(a,e=1){return countReadableChars(a)>=e}function containsOnlyNumbers(a){return ONLY_NUMBERS.test(a)}const syncAriaLabelBeforePatch=(a,e,i,t)=>{const r=e.has("_ariaLabel")?e.get("_ariaLabel"):i.state._ariaLabel;if("string"==typeof r){const a=e.has("_label")?e.get("_label"):i.state._label;!1===(0,_reuse_3a02afb9_js__WEBPACK_IMPORTED_MODULE_0__.i)(a,r)&&("_ariaLabel"===t?e.set("_label",r):e.set("_ariaLabel",void 0),(0,_a11y_tipps_1cea9822_js__WEBPACK_IMPORTED_MODULE_1__.a)("Das abweichende Aria-Label ist nicht barrierefrei. Ein abweichendes Aria-Label muss aus Gründern der Barrierefreiheit für die Sprachsteuerung mit dem Label-Text beginnen."))}},validateAriaLabel=(a,e,i={})=>{var t;(0,_prop_validators_e402ad49_js__WEBPACK_IMPORTED_MODULE_2__.w)(a,"_ariaLabel",e,{hooks:{afterPatch:(a,e,t,r)=>{var n,s;"function"==typeof(null===(n=i.hooks)||void 0===n?void 0:n.afterPatch)&&(null===(s=i.hooks)||void 0===s||s.afterPatch(a,e,t,r)),"string"==typeof a&&a.length>0&&!1===hasEnoughReadableChars(a,3)&&!1===containsOnlyNumbers(a)&&(0,_a11y_tipps_1cea9822_js__WEBPACK_IMPORTED_MODULE_1__.a)(`Ein abweichendes Aria-Label (${a}) ist nicht barrierefrei. Ein abweichendes Aria-Label sollte aus mindestens drei lesbaren Zeichen bestehen.`)},beforePatch:null===(t=i.hooks)||void 0===t?void 0:t.beforePatch}})},validateAriaLabelWithLabel=(a,e)=>{validateAriaLabel(a,e,{hooks:{beforePatch:syncAriaLabelBeforePatch}})},validateLabel=(a,e,i={})=>{var t;(0,_prop_validators_e402ad49_js__WEBPACK_IMPORTED_MODULE_2__.w)(a,"_label",e,{hooks:{afterPatch:(a,e,t,r)=>{var n,s;"function"==typeof(null===(n=i.hooks)||void 0===n?void 0:n.afterPatch)&&(null===(s=i.hooks)||void 0===s||s.afterPatch(a,e,t,r)),"string"==typeof a&&!1===hasEnoughReadableChars(a,3)&&!1===containsOnlyNumbers(a)&&(0,_a11y_tipps_1cea9822_js__WEBPACK_IMPORTED_MODULE_1__.a)(`Ein Label (${a}) ist nicht barrierefrei. Ein Label sollte aus mindestens drei lesbaren Zeichen bestehen.`)},beforePatch:null===(t=i.hooks)||void 0===t?void 0:t.beforePatch},required:!0})},validateLabelWithAriaLabel=(a,e)=>{validateLabel(a,e,{hooks:{beforePatch:syncAriaLabelBeforePatch}})};

/***/ }),

/***/ 37681:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "v": () => (/* binding */ validateTabIndex)
/* harmony export */ });
/* harmony import */ var _a11y_tipps_1cea9822_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(50289);
/* harmony import */ var _prop_validators_e402ad49_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10723);
/*!
 * KoliBri - The accessible HTML-Standard
 */
const options={hooks:{afterPatch:a=>{-1!==a&&0!==a&&(0,_a11y_tipps_1cea9822_js__WEBPACK_IMPORTED_MODULE_0__.a)("Don’t Use Tabindex Greater than 0: https://adrianroselli.com/2014/11/dont-use-tabindex-greater-than-0.html")}}},validateTabIndex=(a,t)=>{(0,_prop_validators_e402ad49_js__WEBPACK_IMPORTED_MODULE_1__.e)(a,"_tabIndex",t,options)};

/***/ }),

/***/ 91211:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "w": () => (/* binding */ watchHeadingLevel)
/* harmony export */ });
/* harmony import */ var _prop_validators_e402ad49_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10723);
/*!
 * KoliBri - The accessible HTML-Standard
 */
const watchHeadingLevel=(e,a)=>{(0,_prop_validators_e402ad49_js__WEBPACK_IMPORTED_MODULE_0__.a)(e,"_level",(e=>"number"==typeof e&&0<=e&&e<=6),new Set(["Number {0, 1, 2, 3, 4, 5, 6}"]),a,{defaultValue:1,required:!0})};

/***/ })

};
;