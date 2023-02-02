"use strict"; exports.id = 873; exports.ids = [873]; exports.modules = { /***/ 40873: /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => { __webpack_require__.r(__webpack_exports__); /* harmony export */ __webpack_require__.d(__webpack_exports__, { /* harmony export */ "kol_link": () => (/* binding */ KolLink) /* harmony export */ }); /* harmony import */ var _index_0dce65d2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16310); /* harmony import */ var _reuse_2f7da8fc_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(34877); /*! * KoliBri - The accessible HTML-Standard */ const defaultStyleCss="@windicss; *{box-sizing:border-box;font-size:inherit;hyphens:auto;letter-spacing:inherit;word-break:break-word;word-spacing:inherit}kol-heading-wc{font-weight:700}kol-icon{color:inherit}kol-span-wc{display:grid;place-items:center;width:100%}kol-span-wc>span{display:flex;gap:0.25rem;place-items:center}a,button{cursor:pointer}a.icon-only>kol-span-wc>span>span,button.icon-only>kol-span-wc>span>span{display:none}a{display:inline-flex;place-items:baseline}button{border-width:0}:host>*{width:inherit;word-spacing:inherit}:host a{overflow:inherit;text-overflow:inherit}:host a:active{text-decoration:none}:host a:focus,:host a:hover{text-decoration-thickness:3px}:host a.kol-visited:visited{color:var(--kolibri-color-visited)}:host a .screen-reader-only{position:absolute;width:1px;clip:rect(0 0 0 0);overflow:hidden}:host a.skip{left:-99999px;overflow:hidden;position:absolute;z-index:9999999}:host a.skip:focus{background:white;box-shadow:0 0 0.5rem 0.5rem white;left:unset;position:unset}",KolLink=class{constructor(t){(0,_index_0dce65d2_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,t),this.catchRef=t=>{this.ref=t,(0,_reuse_2f7da8fc_js__WEBPACK_IMPORTED_MODULE_1__.p)(this.host,this.ref)},this._ariaControls=void 0,this._ariaCurrent=void 0,this._ariaExpanded=void 0,this._ariaLabel="",this._ariaSelected=void 0,this._disabled=!1,this._href=void 0,this._icon=void 0,this._iconAlign="left",this._iconOnly=!1,this._label=void 0,this._on=void 0,this._role=void 0,this._selector=void 0,this._stealth=!1,this._tabIndex=void 0,this._target=void 0,this._targetDescription="Der Link wird in einem neuen Tab geöffnet.",this._tooltipAlign="right",this._useCase="text"}render(){return (0,_index_0dce65d2_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_0dce65d2_js__WEBPACK_IMPORTED_MODULE_0__.H,null,(0,_index_0dce65d2_js__WEBPACK_IMPORTED_MODULE_0__.h)("kol-link-wc",{ref:this.catchRef,_ariaControls:this._ariaControls,_ariaCurrent:this._ariaCurrent,_ariaExpanded:this._ariaExpanded,_ariaLabel:this._ariaLabel,_ariaSelected:this._ariaSelected,_disabled:this._disabled,_href:this._href,_icon:this._icon,_iconAlign:this._iconAlign,_iconOnly:this._iconOnly,_label:this._label,_on:this._on,_role:this._role,_selector:this._selector,_stealth:this._stealth,_tabIndex:this._tabIndex,_target:this._target,_targetDescription:this._targetDescription,_tooltipAlign:this._tooltipAlign,_useCase:this._useCase},(0,_index_0dce65d2_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{name:"expert",slot:"expert"}),(0,_index_0dce65d2_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{slot:"expert"})))}get host(){return (0,_index_0dce65d2_js__WEBPACK_IMPORTED_MODULE_0__.g)(this)}};KolLink.style={default:defaultStyleCss}; /***/ }), /***/ 34877: /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => { /* harmony export */ __webpack_require__.d(__webpack_exports__, { /* harmony export */ "p": () => (/* binding */ propergateFocus), /* harmony export */ "s": () => (/* binding */ smartSetTimeout) /* harmony export */ }); /* harmony import */ var _validator_2e4f8df6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(45359); /*! * KoliBri - The accessible HTML-Standard */ const propergateFocus=(t,o)=>{(0,_validator_2e4f8df6_js__WEBPACK_IMPORTED_MODULE_0__.i)(t)&&t&&(t.focus=t=>null==o?void 0:o.focus(t))},smartSetTimeout=(t,o)=>{const e=setTimeout((()=>{clearTimeout(e),t()}),o)}; /***/ }), /***/ 45359: /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => { /* harmony export */ __webpack_require__.d(__webpack_exports__, { /* harmony export */ "S": () => (/* binding */ STATE_CHANGE_EVENT), /* harmony export */ "a": () => (/* binding */ isString), /* harmony export */ "b": () => (/* binding */ isStyle), /* harmony export */ "c": () => (/* binding */ isEmptyOrPrefixOf), /* harmony export */ "i": () => (/* binding */ isObject) /* harmony export */ }); /*! * KoliBri - The accessible HTML-Standard */ const isObject=t=>"object"==typeof t&&null!==t,isString=(t,e=0)=>"string"==typeof t&&t.length>=e,isStyle=t=>{if("object"!=typeof t||null===t)return isString(t,1);for(const e in t)if(!1===isString(e,1))return!1;return!0},isPrefixOf=(t,e)=>new RegExp(`^${t}`).test(e),isEmptyOrPrefixOf=(t,e)=>0===e.length||isPrefixOf(t,e),STATE_CHANGE_EVENT=new Event("StateChange"); /***/ }) }; ;