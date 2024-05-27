"use strict";
exports.id = 4956;
exports.ids = [4956];
exports.modules = {

/***/ 36108:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   F: () => (/* binding */ FormFieldMsg)
/* harmony export */ });
/* harmony import */ var _index_40be4caf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(33432);
/* harmony import */ var _component_names_791b1799_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(83852);
/*!
 * KoliBri - The accessible HTML-Standard
 */
const FormFieldMsg=({_alert:r,_msg:e,_hideError:o,_id:i})=>(0,_index_40be4caf_js__WEBPACK_IMPORTED_MODULE_0__.h)(_component_names_791b1799_js__WEBPACK_IMPORTED_MODULE_1__.d,Object.assign({"aria-hidden":"true",id:`${i}-error`,_alert:r,_type:"error",class:{error:!0,"visually-hidden":!0===o}},e),(null==e?void 0:e._description)||void 0);

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

/***/ 84956:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   kol_input: () => (/* binding */ KolInput)
/* harmony export */ });
/* harmony import */ var _index_40be4caf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(33432);
/* harmony import */ var _i18n_a7081f2c_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(69320);
/* harmony import */ var _form_field_msg_5b00ea20_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(36108);
/* harmony import */ var _component_names_791b1799_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(83852);
/* harmony import */ var _reuse_b66836de_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(31604);
/*!
 * KoliBri - The accessible HTML-Standard
 */
function r(t){var i,s,e="";if("string"==typeof t||"number"==typeof t)e+=t;else if("object"==typeof t)if(Array.isArray(t)){var o=t.length;for(i=0;i<o;i++)t[i]&&(s=r(t[i]))&&(e&&(e+=" "),e+=s)}else for(s in t)t[s]&&(e&&(e+=" "),e+=s);return e}function clsx(){for(var t,i,s=0,e="",o=arguments.length;s<o;s++)(t=arguments[s])&&(i=r(t))&&(e&&(e+=" "),e+=i);return e}const KolInput=class{constructor(t){(0,_index_40be4caf_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,t),this.slotName="input",this.catchInputSlot=t=>{(0,_reuse_b66836de_js__WEBPACK_IMPORTED_MODULE_1__.h)(this.host,t,this.slotName)},this._accessKey=void 0,this._alert=!0,this._currentLength=void 0,this._disabled=!1,this._hasCounter=!1,this._hideError=!1,this._hideLabel=!1,this._hint="",this._icons=void 0,this._id=void 0,this._label=void 0,this._maxLength=void 0,this._msg=void 0,this._readOnly=!1,this._renderNoLabel=!1,this._required=!1,this._slotName=void 0,this._suggestions=void 0,this._smartButton=void 0,this._tooltipAlign="top",this._touched=!1}componentWillRender(){this.slotName=this._slotName?this._slotName:"input"}getIconStyles(t){return t&&"object"==typeof t&&t.style?t.style:{}}render(){var t,i,s,e,o,a,l,n,r,d,c,_;const u=Boolean("error"===(null===(t=this._msg)||void 0===t?void 0:t._type)&&this._msg._description&&(null===(i=this._msg._description)||void 0===i?void 0:i.length)>0),b=!this._readOnly&&u&&!0===this._touched,f=Boolean(b||"error"!==(null===(s=this._msg)||void 0===s?void 0:s._type)&&(null===(e=this._msg)||void 0===e?void 0:e._description)),g=(0,_reuse_b66836de_js__WEBPACK_IMPORTED_MODULE_1__.s)(this._label),m="string"==typeof this._hint&&this._hint.length>0,p=!g&&this._hideLabel;return (0,_index_40be4caf_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_40be4caf_js__WEBPACK_IMPORTED_MODULE_0__.H,{key:"b072543f7641ef363994245d06c7f2bd764f753f",class:clsx("kol-input",this.getModifierClassNameByMsgType(),{disabled:!0===this._disabled,error:!0===b,"read-only":!0===this._readOnly,required:!0===this._required,touched:!0===this._touched,"hidden-error":!0===this._hideError})},(0,_index_40be4caf_js__WEBPACK_IMPORTED_MODULE_0__.h)("label",{key:"c1477c93278760eb904c8be41af9e2d616172455",class:"input-label",id:p?void 0:`${this._id}-label`,hidden:p,htmlFor:this._id},(0,_index_40be4caf_js__WEBPACK_IMPORTED_MODULE_0__.h)("span",{key:"56168b5b34ff6cb4fcf61ee06b10319ac4e5011a",class:"input-label-span"},(0,_index_40be4caf_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{key:"a5d86e031f9de5ab58df928c01b6f3495afa73aa",name:"label"}))),m&&(0,_index_40be4caf_js__WEBPACK_IMPORTED_MODULE_0__.h)("span",{key:"9eb13cd9be0d8f3b292e4741b9b5e3a30f87ea57",class:"hint",id:`${this._id}-hint`},this._hint),(0,_index_40be4caf_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"544a5b66396437d9d204377a26b5a7f8b4920aa7",class:{input:!0,"icon-left":"object"==typeof(null===(o=this._icons)||void 0===o?void 0:o.left),"icon-right":"object"==typeof(null===(a=this._icons)||void 0===a?void 0:a.right)}},(null===(l=this._icons)||void 0===l?void 0:l.left)&&(0,_index_40be4caf_js__WEBPACK_IMPORTED_MODULE_0__.h)(_component_names_791b1799_js__WEBPACK_IMPORTED_MODULE_2__.g,{key:"52f24a7649e61ba65586fa4fcd718af977188b2d",_label:"",_icons:(null===(n=this._icons)||void 0===n?void 0:n.left).icon,style:this.getIconStyles(null===(r=this._icons)||void 0===r?void 0:r.left)}),(0,_index_40be4caf_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"ca294a18ec2654cf6f645ff3c3fd0810acc671a7",ref:this.catchInputSlot,id:this.slotName,class:"input-slot"}),"object"==typeof this._smartButton&&null!==this._smartButton&&(0,_index_40be4caf_js__WEBPACK_IMPORTED_MODULE_0__.h)(_component_names_791b1799_js__WEBPACK_IMPORTED_MODULE_2__.c,{key:"bf192702fd5569ad649a0df9468b0ed269263226",_customClass:this._smartButton._customClass,_disabled:this._smartButton._disabled,_icons:this._smartButton._icons,_hideLabel:!0,_id:this._smartButton._id,_label:this._smartButton._label,_on:this._smartButton._on,_tooltipAlign:this._smartButton._tooltipAlign,_variant:this._smartButton._variant}),(null===(d=this._icons)||void 0===d?void 0:d.right)&&(0,_index_40be4caf_js__WEBPACK_IMPORTED_MODULE_0__.h)(_component_names_791b1799_js__WEBPACK_IMPORTED_MODULE_2__.g,{key:"cdbd580ebe51b27dbf57a23cf6cb4b9a0dc52c93",_label:"",_icons:(null===(c=this._icons)||void 0===c?void 0:c.right).icon,style:this.getIconStyles(null===(_=this._icons)||void 0===_?void 0:_.right)})),p&&(0,_index_40be4caf_js__WEBPACK_IMPORTED_MODULE_0__.h)(_component_names_791b1799_js__WEBPACK_IMPORTED_MODULE_2__.a,{key:"36299e559eaaf1542fa14aee60ea18ce5ad43d27","aria-hidden":"true",class:"input-tooltip",_accessKey:this._accessKey,_align:this._tooltipAlign,_id:this._hideLabel?`${this._id}-label`:void 0,_label:this._label}),f&&(0,_index_40be4caf_js__WEBPACK_IMPORTED_MODULE_0__.h)(_form_field_msg_5b00ea20_js__WEBPACK_IMPORTED_MODULE_3__.F,{key:"1ef7bb15638c51e4905126e53d55c0bd78401014",_alert:this._alert,_hideError:this._hideError,_msg:this._msg,_id:this._id}),Array.isArray(this._suggestions)&&this._suggestions.length>0&&(0,_index_40be4caf_js__WEBPACK_IMPORTED_MODULE_0__.h)("datalist",{key:"2140b9cf07bc0cc2cd6b68d96c51aea78261c7b6",id:`${this._id}-list`},this._suggestions.map((t=>(0,_index_40be4caf_js__WEBPACK_IMPORTED_MODULE_0__.h)("option",{value:t})))),this._hasCounter&&(0,_index_40be4caf_js__WEBPACK_IMPORTED_MODULE_0__.h)("span",{key:"25ca509e7a4a52187a3b6fc47d66c4d03a241b23",class:"counter","aria-atomic":"true","aria-live":"polite"},this._currentLength,this._maxLength&&(0,_index_40be4caf_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_40be4caf_js__WEBPACK_IMPORTED_MODULE_0__.F,null,(0,_index_40be4caf_js__WEBPACK_IMPORTED_MODULE_0__.h)("span",{key:"1ed61d7a3113d4a5dcfa88988d16d5c0521c8501","aria-label":(0,_i18n_a7081f2c_js__WEBPACK_IMPORTED_MODULE_4__.t)("kol-of"),role:"img"},"/"),this._maxLength)," ",(0,_index_40be4caf_js__WEBPACK_IMPORTED_MODULE_0__.h)("span",{key:"c460083b600b8b402dc533987cbc542824476036"},(0,_i18n_a7081f2c_js__WEBPACK_IMPORTED_MODULE_4__.t)("kol-characters"))))}getModifierClassNameByMsgType(){var t,i;if(null===(t=this._msg)||void 0===t?void 0:t._type)return{default:"msg-type-default",info:"msg-type-info",success:"msg-type-success",warning:"msg-type-warning",error:"msg-type-error"}[null===(i=this._msg)||void 0===i?void 0:i._type]}get host(){return (0,_index_40be4caf_js__WEBPACK_IMPORTED_MODULE_0__.g)(this)}};

/***/ })

};
;