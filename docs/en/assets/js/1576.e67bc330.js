"use strict";
exports.id = 1576;
exports.ids = [1576];
exports.modules = {

/***/ 56520:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   F: () => (/* binding */ FormFieldMsg)
/* harmony export */ });
/* harmony import */ var _index_b5e5a1b4_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(41336);
/* harmony import */ var _component_names_068dc2ae_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(45016);
/*!
 * KoliBri - The accessible HTML-Standard
 */
const FormFieldMsg=({_alert:r,_msg:e,_hideError:o,_id:i})=>(0,_index_b5e5a1b4_js__WEBPACK_IMPORTED_MODULE_0__.h)(_component_names_068dc2ae_js__WEBPACK_IMPORTED_MODULE_1__.d,Object.assign({"aria-hidden":"true",id:`${i}-error`,_alert:r,_type:"error",class:{error:!0,"visually-hidden":!0===o}},e),(null==e?void 0:e._description)||void 0);

/***/ }),

/***/ 53844:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   t: () => (/* binding */ translate)
/* harmony export */ });
/* harmony import */ var _i18n_66b52d13_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4995);
/* harmony import */ var _reuse_108ee8f5_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(78728);
/*!
 * KoliBri - The accessible HTML-Standard
 */
let translate=(t,e)=>{var n;return(null!==(n=(0,_i18n_66b52d13_js__WEBPACK_IMPORTED_MODULE_0__.g)())&&void 0!==n?n:(0,_i18n_66b52d13_js__WEBPACK_IMPORTED_MODULE_0__.i)("de")).translate(t,e)};"test"===_reuse_108ee8f5_js__WEBPACK_IMPORTED_MODULE_1__.p&&(translate=t=>t);

/***/ }),

/***/ 41576:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   kol_input: () => (/* binding */ KolInputWc)
/* harmony export */ });
/* harmony import */ var _index_b5e5a1b4_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(41336);
/* harmony import */ var _i18n_2cbb513e_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(53844);
/* harmony import */ var _form_field_msg_60b6ca7c_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(56520);
/* harmony import */ var _component_names_068dc2ae_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(45016);
/* harmony import */ var _reuse_108ee8f5_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(78728);
/*!
 * KoliBri - The accessible HTML-Standard
 */
function r(t){var e,i,s="";if("string"==typeof t||"number"==typeof t)s+=t;else if("object"==typeof t)if(Array.isArray(t)){var o=t.length;for(e=0;e<o;e++)t[e]&&(i=r(t[e]))&&(s&&(s+=" "),s+=i)}else for(i in t)t[i]&&(s&&(s+=" "),s+=i);return s}function clsx(){for(var t,e,i=0,s="",o=arguments.length;i<o;i++)(t=arguments[i])&&(e=r(t))&&(s&&(s+=" "),s+=e);return s}const KolInputWc=class{constructor(t){(0,_index_b5e5a1b4_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,t),this.slotName="input",this.catchInputSlot=t=>{(0,_reuse_108ee8f5_js__WEBPACK_IMPORTED_MODULE_1__.h)(this.host,t,this.slotName)},this._accessKey=void 0,this._alert=!0,this._currentLength=void 0,this._disabled=!1,this._hasCounter=!1,this._hideError=!1,this._hideLabel=!1,this._hint="",this._icons=void 0,this._id=void 0,this._label=void 0,this._maxLength=void 0,this._msg=void 0,this._readOnly=!1,this._renderNoLabel=!1,this._required=!1,this._slotName=void 0,this._suggestions=void 0,this._smartButton=void 0,this._tooltipAlign="top",this._touched=!1}componentWillRender(){this.slotName=this._slotName?this._slotName:"input"}getIconStyles(t){return t&&"object"==typeof t&&t.style?t.style:{}}render(){var t,e,i,s,o,a,l,n,r,d,_,c;const b=Boolean("error"===(null===(t=this._msg)||void 0===t?void 0:t._type)&&this._msg._description&&(null===(e=this._msg._description)||void 0===e?void 0:e.length)>0),u=!this._readOnly&&b&&!0===this._touched,g=Boolean(u||"error"!==(null===(i=this._msg)||void 0===i?void 0:i._type)&&(null===(s=this._msg)||void 0===s?void 0:s._description)),f=(0,_reuse_108ee8f5_js__WEBPACK_IMPORTED_MODULE_1__.s)(this._label),m="string"==typeof this._hint&&this._hint.length>0,p=!f&&this._hideLabel;return (0,_index_b5e5a1b4_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_b5e5a1b4_js__WEBPACK_IMPORTED_MODULE_0__.H,{key:"8f4ba7be771e2794dba0bbea4c93de58237f2b02",class:clsx("kol-input",this.getModifierClassNameByMsgType(),{disabled:!0===this._disabled,error:!0===u,"read-only":!0===this._readOnly,required:!0===this._required,touched:!0===this._touched,"hidden-error":!0===this._hideError})},(0,_index_b5e5a1b4_js__WEBPACK_IMPORTED_MODULE_0__.h)("label",{key:"c4397e40e8d492187c1bae3bbe4be1b6449bc9d9",class:"input-label",id:p?void 0:`${this._id}-label`,hidden:p,htmlFor:this._id},(0,_index_b5e5a1b4_js__WEBPACK_IMPORTED_MODULE_0__.h)("span",{key:"543c3749b69fdde2ebc88ae7a342143f352b4e01",class:"input-label-span"},(0,_index_b5e5a1b4_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{key:"f1c24dabbbd1d75dbe37ee774b3ad52567bbefbf",name:"label"}))),m&&(0,_index_b5e5a1b4_js__WEBPACK_IMPORTED_MODULE_0__.h)("span",{key:"adb87f975d975a866e22a55838eafb409f362729",class:"hint",id:`${this._id}-hint`},this._hint),(0,_index_b5e5a1b4_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"38f52cdf606c001800b0f93a9e48542b3c0d59e3",class:{input:!0,"icon-left":"object"==typeof(null===(o=this._icons)||void 0===o?void 0:o.left),"icon-right":"object"==typeof(null===(a=this._icons)||void 0===a?void 0:a.right)}},(null===(l=this._icons)||void 0===l?void 0:l.left)&&(0,_index_b5e5a1b4_js__WEBPACK_IMPORTED_MODULE_0__.h)(_component_names_068dc2ae_js__WEBPACK_IMPORTED_MODULE_2__.g,{key:"5af1b04137afa941269af05dd35a684c21384d46",_label:"",_icons:(null===(n=this._icons)||void 0===n?void 0:n.left).icon,style:this.getIconStyles(null===(r=this._icons)||void 0===r?void 0:r.left)}),(0,_index_b5e5a1b4_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"a32419d39395a44a61ee9abd6d3b3f785345c6ab",ref:this.catchInputSlot,id:this.slotName,class:"input-slot"}),"object"==typeof this._smartButton&&null!==this._smartButton&&(0,_index_b5e5a1b4_js__WEBPACK_IMPORTED_MODULE_0__.h)(_component_names_068dc2ae_js__WEBPACK_IMPORTED_MODULE_2__.c,{key:"f09aecd73a43a2452a83b31badc9a9d8a48e202a",_customClass:this._smartButton._customClass,_disabled:this._smartButton._disabled,_icons:this._smartButton._icons,_hideLabel:!0,_id:this._smartButton._id,_label:this._smartButton._label,_on:this._smartButton._on,_tooltipAlign:this._smartButton._tooltipAlign,_variant:this._smartButton._variant}),(null===(d=this._icons)||void 0===d?void 0:d.right)&&(0,_index_b5e5a1b4_js__WEBPACK_IMPORTED_MODULE_0__.h)(_component_names_068dc2ae_js__WEBPACK_IMPORTED_MODULE_2__.g,{key:"49140be539ede37df384be1dce9f3db2d4f774d9",_label:"",_icons:(null===(_=this._icons)||void 0===_?void 0:_.right).icon,style:this.getIconStyles(null===(c=this._icons)||void 0===c?void 0:c.right)})),p&&(0,_index_b5e5a1b4_js__WEBPACK_IMPORTED_MODULE_0__.h)(_component_names_068dc2ae_js__WEBPACK_IMPORTED_MODULE_2__.a,{key:"9192e8e543ade06f365baacc1c7e5012d48e6d94","aria-hidden":"true",class:"input-tooltip",_accessKey:this._accessKey,_align:this._tooltipAlign,_id:this._hideLabel?`${this._id}-label`:void 0,_label:this._label}),g&&(0,_index_b5e5a1b4_js__WEBPACK_IMPORTED_MODULE_0__.h)(_form_field_msg_60b6ca7c_js__WEBPACK_IMPORTED_MODULE_3__.F,{key:"cc846ab34c1aa368b16a135a40dd59ae03268a5d",_alert:this._alert,_hideError:this._hideError,_msg:this._msg,_id:this._id}),Array.isArray(this._suggestions)&&this._suggestions.length>0&&(0,_index_b5e5a1b4_js__WEBPACK_IMPORTED_MODULE_0__.h)("datalist",{key:"015c7ff9403fc46bcbd3056e6ec757af46044418",id:`${this._id}-list`},this._suggestions.map((t=>(0,_index_b5e5a1b4_js__WEBPACK_IMPORTED_MODULE_0__.h)("option",{value:t})))),this._hasCounter&&(0,_index_b5e5a1b4_js__WEBPACK_IMPORTED_MODULE_0__.h)("span",{key:"b558e392516d0ed5fbb41a327b467f9e330a4980",class:"counter","aria-atomic":"true","aria-live":"polite"},this._currentLength,this._maxLength&&(0,_index_b5e5a1b4_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_b5e5a1b4_js__WEBPACK_IMPORTED_MODULE_0__.F,null,(0,_index_b5e5a1b4_js__WEBPACK_IMPORTED_MODULE_0__.h)("span",{key:"9ea2c55e5a88a3ea87f295b76b88540fd004ebe0","aria-label":(0,_i18n_2cbb513e_js__WEBPACK_IMPORTED_MODULE_4__.t)("kol-of"),role:"img"},"/"),this._maxLength)," ",(0,_index_b5e5a1b4_js__WEBPACK_IMPORTED_MODULE_0__.h)("span",{key:"613f73ee31fb7fada22737c9a2172bb17d37264f"},(0,_i18n_2cbb513e_js__WEBPACK_IMPORTED_MODULE_4__.t)("kol-characters"))))}getModifierClassNameByMsgType(){var t,e;if(null===(t=this._msg)||void 0===t?void 0:t._type)return{default:"msg-type-default",info:"msg-type-info",success:"msg-type-success",warning:"msg-type-warning",error:"msg-type-error"}[null===(e=this._msg)||void 0===e?void 0:e._type]}get host(){return (0,_index_b5e5a1b4_js__WEBPACK_IMPORTED_MODULE_0__.g)(this)}};

/***/ }),

/***/ 78728:
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