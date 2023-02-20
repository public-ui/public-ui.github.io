"use strict";
exports.id = 7190;
exports.ids = [7190];
exports.modules = {

/***/ 67190:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "kol_heading_wc": () => (/* binding */ KolHeadingWc),
/* harmony export */   "kol_input": () => (/* binding */ KolInput)
/* harmony export */ });
/* harmony import */ var _index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(55640);
/* harmony import */ var _validation_63fb9e79_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(86192);
/* harmony import */ var _prop_validators_88dff60e_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(39895);
/*!
 * KoliBri - The accessible HTML-Standard
 */
const KolHeadingWc=class{constructor(t){(0,_index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,t),this.renderHeadline=(t,i)=>{switch(i){case 1:return (0,_index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_0__.h)("h1",{class:"headline"},t,(0,_index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",null));case 2:return (0,_index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_0__.h)("h2",{class:"headline"},t,(0,_index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",null));case 3:return (0,_index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_0__.h)("h3",{class:"headline"},t,(0,_index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",null));case 4:return (0,_index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_0__.h)("h4",{class:"headline"},t,(0,_index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",null));case 5:return (0,_index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_0__.h)("h5",{class:"headline"},t,(0,_index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",null));case 6:return (0,_index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_0__.h)("h6",{class:"headline"},t,(0,_index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",null));default:return (0,_index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_0__.h)("strong",{class:"headline"},t,(0,_index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",null))}},this._level=1,this._label=void 0,this._overline="",this.state={_label:""}}validateLabel(t){(0,_prop_validators_88dff60e_js__WEBPACK_IMPORTED_MODULE_1__.w)(this,"_label",t)}validateLevel(t){(0,_validation_63fb9e79_js__WEBPACK_IMPORTED_MODULE_2__.w)(this,t)}validateOverline(t){(0,_prop_validators_88dff60e_js__WEBPACK_IMPORTED_MODULE_1__.w)(this,"_overline",t)}componentWillLoad(){this.validateLabel(this._label),this.validateLevel(this._level),this.validateOverline(this._overline)}render(){return (0,_index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_0__.H,null,this.renderHeadline(this.state._label,this.state._level),this.state._overline&&(0,_index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_0__.h)("span",{class:"overline"},this.state._overline))}static get watchers(){return{_label:["validateLabel"],_level:["validateLevel"],_overline:["validateOverline"]}}},KolInput=class{constructor(t){(0,_index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,t),this._alert=!0,this._disabled=!1,this._error="",this._hideLabel=!1,this._hint="",this._icon=void 0,this._id=void 0,this._list=void 0,this._readOnly=!1,this._renderNoLabel=!1,this._required=!1,this._smartButton=void 0,this._touched=!1}render(){var t,i,e,s;const l="string"==typeof this._error&&this._error.length>0&&!0===this._touched,a="string"==typeof this._hint&&this._hint.length>0,n=!0===this._hideLabel&&!0!==this._required;return (0,_index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_0__.H,{class:{disabled:!0===this._disabled,error:!0===l,"read-only":!0===this._readOnly,required:!0===this._required,touched:!0===this._touched}},!1===this._renderNoLabel&&(0,_index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_0__.h)("label",{htmlFor:this._id,id:`${this._id}-label`,style:{height:n?"0":void 0,margin:n?"0":void 0,padding:n?"0":void 0,visibility:n?"hidden":void 0}},(0,_index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_0__.h)("span",null,(0,_index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{name:"label"}))),a&&(0,_index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_0__.h)("span",{class:"hint",id:`${this._id}-hint`},this._hint),(0,_index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:{input:!0,"icon-left":"object"==typeof(null===(t=this._icon)||void 0===t?void 0:t.left),"icon-right":"object"==typeof(null===(i=this._icon)||void 0===i?void 0:i.right)}},(0,_index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"icons"},(null===(e=this._icon)||void 0===e?void 0:e.left)?(0,_index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_0__.h)("kol-icon",{_ariaLabel:"",_icon:this._icon.left.icon}):(0,_index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_0__.h)("i",null),(null===(s=this._icon)||void 0===s?void 0:s.right)?(0,_index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_0__.h)("kol-icon",{_ariaLabel:"",_icon:this._icon.right.icon}):(0,_index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_0__.h)("i",null)),(0,_index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{name:"input"}),"object"==typeof this._smartButton&&null!==this._smartButton&&(0,_index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_0__.h)("kol-button-wc",{_ariaLabel:this._smartButton._ariaLabel,_customClass:this._smartButton._customClass,_disabled:this._smartButton._disabled,_icon:this._smartButton._icon,_iconOnly:!0,_id:this._smartButton._id,_label:this._smartButton._label,_on:this._smartButton._on,_tooltipAlign:this._smartButton._tooltipAlign,_variant:this._smartButton._variant})),l&&(0,_index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_0__.h)("kol-alert",{class:"error",id:`${this._id}-error`,_alert:this._alert,_type:"error",_variant:"msg"},this._error),Array.isArray(this._list)&&this._list.length>0&&(0,_index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_0__.h)("datalist",{id:`${this._id}-list`},this._list.map((t=>(0,_index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_0__.h)("option",{value:t})))))}};

/***/ }),

/***/ 86192:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "w": () => (/* binding */ watchHeadingLevel)
/* harmony export */ });
/* harmony import */ var _prop_validators_88dff60e_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(39895);
/*!
 * KoliBri - The accessible HTML-Standard
 */
const watchHeadingLevel=(e,a)=>{(0,_prop_validators_88dff60e_js__WEBPACK_IMPORTED_MODULE_0__.a)(e,"_level",(e=>"number"==typeof e&&1<=e&&e<=6),new Set(["Number {1, 2, 3, 4, 5, 6}"]),a,{defaultValue:1,required:!0})};

/***/ })

};
;