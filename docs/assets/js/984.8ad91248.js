"use strict";
exports.id = 984;
exports.ids = [984];
exports.modules = {

/***/ 30984:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "kol_heading_wc": () => (/* binding */ KolHeadingWc),
/* harmony export */   "kol_input": () => (/* binding */ KolInput)
/* harmony export */ });
/* harmony import */ var _index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(21156);
/* harmony import */ var _prop_validators_e402ad49_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(15248);
/* harmony import */ var _validation_b331e3a7_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3683);
/*!
 * KoliBri - The accessible HTML-Standard
 */
const KolHeadingWc=class{constructor(e){(0,_index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,e),this.renderHeadline=(e,t)=>{switch(t){case 1:return (0,_index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_0__.h)("h1",{class:"headline"},e,(0,_index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",null));case 2:return (0,_index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_0__.h)("h2",{class:"headline"},e,(0,_index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",null));case 3:return (0,_index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_0__.h)("h3",{class:"headline"},e,(0,_index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",null));case 4:return (0,_index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_0__.h)("h4",{class:"headline"},e,(0,_index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",null));case 5:return (0,_index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_0__.h)("h5",{class:"headline"},e,(0,_index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",null));case 6:return (0,_index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_0__.h)("h6",{class:"headline"},e,(0,_index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",null));default:return (0,_index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_0__.h)("strong",{class:"headline"},e,(0,_index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",null))}},this.renderSecondaryHeadline=(e,t)=>{switch(t){case 1:return (0,_index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_0__.h)("h1",{class:"secondary-headline"},e);case 2:return (0,_index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_0__.h)("h2",{class:"secondary-headline"},e);case 3:return (0,_index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_0__.h)("h3",{class:"secondary-headline"},e);case 4:return (0,_index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_0__.h)("h4",{class:"secondary-headline"},e);case 5:return (0,_index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_0__.h)("h5",{class:"secondary-headline"},e);case 6:return (0,_index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_0__.h)("h6",{class:"secondary-headline"},e);default:return (0,_index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_0__.h)("strong",{class:"secondary-headline"},e)}},this._headline=void 0,this._level=1,this._secondaryHeadline=void 0,this.state={_headline:"…",_level:1}}validateHeadline(e){(0,_prop_validators_e402ad49_js__WEBPACK_IMPORTED_MODULE_1__.w)(this,"_headline",e)}validateLevel(e){(0,_validation_b331e3a7_js__WEBPACK_IMPORTED_MODULE_2__.w)(this,e)}validateSecondaryHeadline(e){(0,_prop_validators_e402ad49_js__WEBPACK_IMPORTED_MODULE_1__.w)(this,"_secondaryHeadline",e)}componentWillLoad(){this.validateHeadline(this._headline),this.validateLevel(this._level),this.validateSecondaryHeadline(this._secondaryHeadline)}render(){return (0,_index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_0__.H,null,"string"==typeof this.state._secondaryHeadline&&this.state._secondaryHeadline.length>0?(0,_index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_0__.h)("hgroup",null,this.renderHeadline(this.state._headline,this.state._level),this.state._secondaryHeadline&&this.renderSecondaryHeadline(this.state._secondaryHeadline,this.state._level+1)):this.renderHeadline(this.state._headline,this.state._level))}static get watchers(){return{_headline:["validateHeadline"],_level:["validateLevel"],_secondaryHeadline:["validateSecondaryHeadline"]}}},KolInput=class{constructor(e){(0,_index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,e),this._alert=!0,this._disabled=!1,this._error="",this._hideLabel=!1,this._hint="",this._icon=void 0,this._id=void 0,this._list=void 0,this._readOnly=!1,this._renderNoLabel=!1,this._required=!1,this._smartButton=void 0,this._touched=!1}render(){var e,t,i,s;const a="string"==typeof this._error&&this._error.length>0&&!0===this._touched,l="string"==typeof this._hint&&this._hint.length>0,n=!0===this._hideLabel&&!0!==this._required;return (0,_index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_0__.H,{class:{disabled:!0===this._disabled,error:!0===a,"read-only":!0===this._readOnly,required:!0===this._required,touched:!0===this._touched}},!1===this._renderNoLabel&&(0,_index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_0__.h)("label",{id:`${this._id}-label`,hidden:n,htmlFor:this._id},(0,_index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_0__.h)("span",null,(0,_index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{name:"label"}))),l&&(0,_index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_0__.h)("span",{class:"hint",id:`${this._id}-hint`},this._hint),(0,_index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:{input:!0,"icon-left":"object"==typeof(null===(e=this._icon)||void 0===e?void 0:e.left),"icon-right":"object"==typeof(null===(t=this._icon)||void 0===t?void 0:t.right)}},(null===(i=this._icon)||void 0===i?void 0:i.left)?(0,_index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_0__.h)("kol-icon",{_ariaLabel:"",_icon:this._icon.left.icon}):(0,_index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_0__.h)("i",null),(0,_index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{name:"input"}),"object"==typeof this._smartButton&&null!==this._smartButton&&(0,_index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_0__.h)("kol-button-wc",{_ariaLabel:this._smartButton._ariaLabel,_customClass:this._smartButton._customClass,_disabled:this._smartButton._disabled,_icon:this._smartButton._icon,_iconOnly:!0,_id:this._smartButton._id,_label:this._smartButton._label,_on:this._smartButton._on,_tooltipAlign:this._smartButton._tooltipAlign,_variant:this._smartButton._variant}),(null===(s=this._icon)||void 0===s?void 0:s.right)?(0,_index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_0__.h)("kol-icon",{_ariaLabel:"",_icon:this._icon.right.icon}):(0,_index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_0__.h)("i",null)),a&&(0,_index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_0__.h)("kol-alert",{class:"error",id:`${this._id}-error`,_alert:this._alert,_type:"error",_variant:"msg"},this._error),Array.isArray(this._list)&&this._list.length>0&&(0,_index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_0__.h)("datalist",{id:`${this._id}-list`},this._list.map((e=>(0,_index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_0__.h)("option",{value:e})))))}};

/***/ }),

/***/ 3683:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "w": () => (/* binding */ watchHeadingLevel)
/* harmony export */ });
/* harmony import */ var _prop_validators_e402ad49_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15248);
/*!
 * KoliBri - The accessible HTML-Standard
 */
const watchHeadingLevel=(e,a)=>{(0,_prop_validators_e402ad49_js__WEBPACK_IMPORTED_MODULE_0__.a)(e,"_level",(e=>"number"==typeof e&&1<=e&&e<=6),new Set(["Number {1, 2, 3, 4, 5, 6}"]),a,{defaultValue:1,required:!0})};

/***/ })

};
;