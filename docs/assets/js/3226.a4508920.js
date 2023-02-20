"use strict";
exports.id = 3226;
exports.ids = [3226];
exports.modules = {

/***/ 23226:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "kol_link_group": () => (/* binding */ KolLinkGroup)
/* harmony export */ });
/* harmony import */ var _index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(55640);
/* harmony import */ var _a11y_tipps_353a7f35_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16105);
/* harmony import */ var _prop_validators_88dff60e_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(39895);
/* harmony import */ var _validation_63fb9e79_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(86192);
/* harmony import */ var _validation_29598b1e_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2905);
/*!
 * KoliBri - The accessible HTML-Standard
 */
const defaultStyleCss=":host{--kolibri-border-color:#e0e0e0;--kolibri-border-radius:0.125rem;--kolibri-border-width:1px;--kolibri-color-error:#f44336;--kolibri-color-info:#2196f3;--kolibri-color-success:#4caf50;--kolibri-color-warning:#ff9800;--kolibri-color-primary:#3f51b5;--kolibri-color-secondary:#ff4081;--kolibri-color-normal:#9e9e9e;--kolibri-color-danger:#f44336;--kolibri-color-ghost:#f5f5f5;--kolibri-color-disabled:#bdbdbd;--kolibri-color-text:#222222;--kolibri-color-visited:#9c27b0;--kolibri-font-family:Verdana, Arial, Tahoma, Helvetica, sans-serif;--kolibri-font-size:16px;--kolibri-spacing:0.25rem}*{hyphens:auto;letter-spacing:inherit;word-break:break-word;word-spacing:inherit}*{box-sizing:border-box;font-family:var(--kolibri-font-family)}kol-icon{color:inherit}kol-span-wc{display:grid;place-items:center;width:100%}kol-span-wc>span{display:flex;gap:var(--kolibri-spacing);place-items:center}a,button,input,select,textarea{cursor:pointer}a.icon-only>kol-span-wc>span>span,button.icon-only>kol-span-wc>span>span{display:none}a{display:inline-flex;place-items:baseline}button{background-color:transparent;border-width:0}h1,h2,h3,h4,h5,h6{font-size:1rem;margin:0}",ListItem=i=>{const t=[];return i.links.map(((e,a)=>{t.push((0,_index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_0__.h)("li",{key:a,class:{ident:a>0&&"vertical"===i.orientation,"list-none":0===a&&"horizontal"===i.orientation},style:{listStyleType:i.listStyleType}},(0,_index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_0__.h)("kol-link",Object.assign({},e))))})),t},KolLinkGroup=class{constructor(i){(0,_index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,i),this.isUl=!0,this._ariaLabel=void 0,this._listStyleType=void 0,this._heading=void 0,this._level=void 0,this._links=void 0,this._ordered=void 0,this._orientation="vertical",this.state={_ariaLabel:"…",_listStyleType:"disc",_links:[],_orientation:"vertical"}}render(){var i;return (0,_index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_0__.h)("nav",{"aria-label":this.state._ariaLabel,class:{vertical:"vertical"===this.state._orientation,horizontal:"horizontal"===this.state._orientation}},"string"==typeof this.state._heading&&(null===(i=this.state._heading)||void 0===i?void 0:i.length)>0&&(0,_index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_0__.h)("kol-heading-wc",{_label:this.state._heading,_level:this.state._level}),!1===this.isUl?(0,_index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_0__.h)("ol",null,(0,_index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_0__.h)(ListItem,{links:this.state._links,orientation:this.state._orientation,listStyleType:this.state._listStyleType})):(0,_index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_0__.h)("ul",null,(0,_index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_0__.h)(ListItem,{links:this.state._links,orientation:this.state._orientation,listStyleType:this.state._listStyleType})))}validateAriaLabel(i){(0,_prop_validators_88dff60e_js__WEBPACK_IMPORTED_MODULE_1__.w)(this,"_ariaLabel",i,{required:!0}),(0,_a11y_tipps_353a7f35_js__WEBPACK_IMPORTED_MODULE_2__.b)(i)}validateListStyleType(i){(0,_prop_validators_88dff60e_js__WEBPACK_IMPORTED_MODULE_1__.a)(this,"_listStyleType",(i=>{switch(i){case"disc":case"circle":case"square":case"none":return this.isUl=!0,!0;case"decimal":case"decimal-leading-zero":case"lower-alpha":case"lower-latin":case"lower-greek":case"lower-roman":case"upper-alpha":case"upper-latin":case"upper-roman":return this.isUl=!1,!0;default:return!1}}),new Set(["https://www.w3schools.com/tags/tag_ol.asp"]),i)}validateHeading(i){(0,_prop_validators_88dff60e_js__WEBPACK_IMPORTED_MODULE_1__.w)(this,"_heading",i)}validateLevel(i){(0,_validation_63fb9e79_js__WEBPACK_IMPORTED_MODULE_3__.w)(this,i)}validateLinks(i){(0,_validation_29598b1e_js__WEBPACK_IMPORTED_MODULE_4__.w)("KolLinkGroup",this,i)}validateOrdered(i){(0,_prop_validators_88dff60e_js__WEBPACK_IMPORTED_MODULE_1__.b)(this,"_ordered",i)}validateOrientation(i){(0,_prop_validators_88dff60e_js__WEBPACK_IMPORTED_MODULE_1__.a)(this,"_orientation",(i=>"horizontal"===i||"vertical"===i),new Set(["Orientation {horizontal, vertical}"]),i,{defaultValue:"vertical"})}componentWillLoad(){this.validateAriaLabel(this._ariaLabel),this.validateListStyleType(this._listStyleType),this.validateHeading(this._heading),this.validateLevel(this._level),this.validateLinks(this._links),this.validateOrientation(this._orientation)}static get watchers(){return{_ariaLabel:["validateAriaLabel"],_listStyleType:["validateListStyleType"],_heading:["validateHeading"],_level:["validateLevel"],_links:["validateLinks"],_ordered:["validateOrdered"],_orientation:["validateOrientation"]}}};KolLinkGroup.style={default:defaultStyleCss};

/***/ }),

/***/ 2905:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "w": () => (/* binding */ watchNavLinks)
/* harmony export */ });
/* harmony import */ var _a11y_tipps_353a7f35_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16105);
/* harmony import */ var _prop_validators_88dff60e_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(39895);
/*!
 * KoliBri - The accessible HTML-Standard
 */
const watchNavLinks=(t,a,s)=>{(0,_prop_validators_88dff60e_js__WEBPACK_IMPORTED_MODULE_0__.d)(a,"_links",(t=>"object"==typeof t&&"string"==typeof t._label),s),(0,_a11y_tipps_353a7f35_js__WEBPACK_IMPORTED_MODULE_1__.u)(t,a.state._links.length)};

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