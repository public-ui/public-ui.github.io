"use strict";
exports.id = 6160;
exports.ids = [6160];
exports.modules = {

/***/ 67824:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   F: () => (/* binding */ FormFieldMsg)
/* harmony export */ });
/* harmony import */ var _index_360ad69b_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(86104);
/* harmony import */ var _component_names_e522484e_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(60848);
/*!
 * KoliBri - The accessible HTML-Standard
 */
const FormFieldMsg=({_alert:r,_msg:e,_hideError:o,_id:i})=>(0,_index_360ad69b_js__WEBPACK_IMPORTED_MODULE_0__.h)(_component_names_e522484e_js__WEBPACK_IMPORTED_MODULE_1__.d,Object.assign({"aria-hidden":"true",id:`${i}-error`,_alert:r,_type:"error",class:{error:!0,"visually-hidden":!0===o}},e),(null==e?void 0:e._description)||void 0);

/***/ }),

/***/ 9824:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   t: () => (/* binding */ translate)
/* harmony export */ });
/* harmony import */ var _i18n_ebe0c4cb_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(77352);
/* harmony import */ var _reuse_b66836de_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(63312);
/*!
 * KoliBri - The accessible HTML-Standard
 */
let translate=(e,t)=>{var n;return(null!==(n=(0,_i18n_ebe0c4cb_js__WEBPACK_IMPORTED_MODULE_0__.g)())&&void 0!==n?n:(0,_i18n_ebe0c4cb_js__WEBPACK_IMPORTED_MODULE_0__.i)("de")).translate(e,t)};"test"===_reuse_b66836de_js__WEBPACK_IMPORTED_MODULE_1__.p&&(translate=e=>e);

/***/ }),

/***/ 66160:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   kol_input: () => (/* binding */ KolInputWc)
/* harmony export */ });
/* harmony import */ var _index_360ad69b_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(86104);
/* harmony import */ var _i18n_342bc196_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9824);
/* harmony import */ var _form_field_msg_2aa85958_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(67824);
/* harmony import */ var _component_names_e522484e_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(60848);
/* harmony import */ var _reuse_b66836de_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(63312);
/*!
 * KoliBri - The accessible HTML-Standard
 */
function r(t){var e,i,s="";if("string"==typeof t||"number"==typeof t)s+=t;else if("object"==typeof t)if(Array.isArray(t)){var o=t.length;for(e=0;e<o;e++)t[e]&&(i=r(t[e]))&&(s&&(s+=" "),s+=i)}else for(i in t)t[i]&&(s&&(s+=" "),s+=i);return s}function clsx(){for(var t,e,i=0,s="",o=arguments.length;i<o;i++)(t=arguments[i])&&(e=r(t))&&(s&&(s+=" "),s+=e);return s}const KolInputWc=class{constructor(t){(0,_index_360ad69b_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,t),this.slotName="input",this.catchInputSlot=t=>{(0,_reuse_b66836de_js__WEBPACK_IMPORTED_MODULE_1__.h)(this.host,t,this.slotName)},this._accessKey=void 0,this._alert=!0,this._currentLength=void 0,this._disabled=!1,this._hasCounter=!1,this._hideError=!1,this._hideLabel=!1,this._hint="",this._icons=void 0,this._id=void 0,this._label=void 0,this._maxLength=void 0,this._msg=void 0,this._readOnly=!1,this._renderNoLabel=!1,this._required=!1,this._slotName=void 0,this._suggestions=void 0,this._smartButton=void 0,this._tooltipAlign="top",this._touched=!1}componentWillRender(){this.slotName=this._slotName?this._slotName:"input"}getIconStyles(t){return t&&"object"==typeof t&&t.style?t.style:{}}render(){var t,e,i,s,o,a,l,n,r,d,c,_;const b=Boolean("error"===(null===(t=this._msg)||void 0===t?void 0:t._type)&&this._msg._description&&(null===(e=this._msg._description)||void 0===e?void 0:e.length)>0),u=!this._readOnly&&b&&!0===this._touched,f=Boolean(u||"error"!==(null===(i=this._msg)||void 0===i?void 0:i._type)&&(null===(s=this._msg)||void 0===s?void 0:s._description)),g=(0,_reuse_b66836de_js__WEBPACK_IMPORTED_MODULE_1__.s)(this._label),m="string"==typeof this._hint&&this._hint.length>0,p=!g&&this._hideLabel;return (0,_index_360ad69b_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_360ad69b_js__WEBPACK_IMPORTED_MODULE_0__.H,{key:"9c06a3c09f115feeb894dc7591756ec10667eca5",class:clsx("kol-input",this.getModifierClassNameByMsgType(),{disabled:!0===this._disabled,error:!0===u,"read-only":!0===this._readOnly,required:!0===this._required,touched:!0===this._touched,"hidden-error":!0===this._hideError})},(0,_index_360ad69b_js__WEBPACK_IMPORTED_MODULE_0__.h)("label",{key:"1422b4945c13e4b88d284dfae59e969cb080f3e4",class:"input-label",id:p?void 0:`${this._id}-label`,hidden:p,htmlFor:this._id},(0,_index_360ad69b_js__WEBPACK_IMPORTED_MODULE_0__.h)("span",{key:"de58719c55353655e34db3a85443f4b3063201e4",class:"input-label-span"},(0,_index_360ad69b_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{key:"558aa3c075ef092de6d192beb325f2defd406aca",name:"label"}))),m&&(0,_index_360ad69b_js__WEBPACK_IMPORTED_MODULE_0__.h)("span",{key:"c29aeeabea1c1c48ebc8c060ee5f085a65582f95",class:"hint",id:`${this._id}-hint`},this._hint),(0,_index_360ad69b_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"77a150ca760d8b26ec7e2a2cb2ebb6190ed3c748",class:{input:!0,"icon-left":"object"==typeof(null===(o=this._icons)||void 0===o?void 0:o.left),"icon-right":"object"==typeof(null===(a=this._icons)||void 0===a?void 0:a.right)}},(null===(l=this._icons)||void 0===l?void 0:l.left)&&(0,_index_360ad69b_js__WEBPACK_IMPORTED_MODULE_0__.h)(_component_names_e522484e_js__WEBPACK_IMPORTED_MODULE_2__.g,{key:"91485bd06330be0fbf6de460773b9bf2e4e8c1ba",_label:"",_icons:(null===(n=this._icons)||void 0===n?void 0:n.left).icon,style:this.getIconStyles(null===(r=this._icons)||void 0===r?void 0:r.left)}),(0,_index_360ad69b_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"00f88767c05428529c9d1ce274ae6c8a03f2e259",ref:this.catchInputSlot,id:this.slotName,class:"input-slot"}),"object"==typeof this._smartButton&&null!==this._smartButton&&(0,_index_360ad69b_js__WEBPACK_IMPORTED_MODULE_0__.h)(_component_names_e522484e_js__WEBPACK_IMPORTED_MODULE_2__.c,{key:"4ca328a780e2a95dd18ab0fb8f57654e6ee9f43b",_customClass:this._smartButton._customClass,_disabled:this._smartButton._disabled,_icons:this._smartButton._icons,_hideLabel:!0,_id:this._smartButton._id,_label:this._smartButton._label,_on:this._smartButton._on,_tooltipAlign:this._smartButton._tooltipAlign,_variant:this._smartButton._variant}),(null===(d=this._icons)||void 0===d?void 0:d.right)&&(0,_index_360ad69b_js__WEBPACK_IMPORTED_MODULE_0__.h)(_component_names_e522484e_js__WEBPACK_IMPORTED_MODULE_2__.g,{key:"4daf4db4e8a669cdd8c749b7296ab1b2da1e4a06",_label:"",_icons:(null===(c=this._icons)||void 0===c?void 0:c.right).icon,style:this.getIconStyles(null===(_=this._icons)||void 0===_?void 0:_.right)})),p&&(0,_index_360ad69b_js__WEBPACK_IMPORTED_MODULE_0__.h)(_component_names_e522484e_js__WEBPACK_IMPORTED_MODULE_2__.a,{key:"2abc09595c2b383aa48b9af5f73f77ea3ea48169","aria-hidden":"true",class:"input-tooltip",_accessKey:this._accessKey,_align:this._tooltipAlign,_id:this._hideLabel?`${this._id}-label`:void 0,_label:this._label}),f&&(0,_index_360ad69b_js__WEBPACK_IMPORTED_MODULE_0__.h)(_form_field_msg_2aa85958_js__WEBPACK_IMPORTED_MODULE_3__.F,{key:"682d59034d314a11bc1fa39940f5f9457e5f8ef8",_alert:this._alert,_hideError:this._hideError,_msg:this._msg,_id:this._id}),Array.isArray(this._suggestions)&&this._suggestions.length>0&&(0,_index_360ad69b_js__WEBPACK_IMPORTED_MODULE_0__.h)("datalist",{key:"5f06bd47b6d135c9154412f1c3f8a4f2cf2b13ee",id:`${this._id}-list`},this._suggestions.map((t=>(0,_index_360ad69b_js__WEBPACK_IMPORTED_MODULE_0__.h)("option",{value:t})))),this._hasCounter&&(0,_index_360ad69b_js__WEBPACK_IMPORTED_MODULE_0__.h)("span",{key:"8baec4fa545909af2598ec851451b34fbaefafb7",class:"counter","aria-atomic":"true","aria-live":"polite"},this._currentLength,this._maxLength&&(0,_index_360ad69b_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_360ad69b_js__WEBPACK_IMPORTED_MODULE_0__.F,null,(0,_index_360ad69b_js__WEBPACK_IMPORTED_MODULE_0__.h)("span",{key:"56d16164763271aac8302a6063bcdd675f679191","aria-label":(0,_i18n_342bc196_js__WEBPACK_IMPORTED_MODULE_4__.t)("kol-of"),role:"img"},"/"),this._maxLength)," ",(0,_index_360ad69b_js__WEBPACK_IMPORTED_MODULE_0__.h)("span",{key:"cb75b8e24b69db57c8536185ad287024f732ec28"},(0,_i18n_342bc196_js__WEBPACK_IMPORTED_MODULE_4__.t)("kol-characters"))))}getModifierClassNameByMsgType(){var t,e;if(null===(t=this._msg)||void 0===t?void 0:t._type)return{default:"msg-type-default",info:"msg-type-info",success:"msg-type-success",warning:"msg-type-warning",error:"msg-type-error"}[null===(e=this._msg)||void 0===e?void 0:e._type]}get host(){return (0,_index_360ad69b_js__WEBPACK_IMPORTED_MODULE_0__.g)(this)}};

/***/ })

};
;