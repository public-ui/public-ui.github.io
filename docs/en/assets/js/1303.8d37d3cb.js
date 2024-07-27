"use strict"; exports.id = 1303; exports.ids = [1303]; exports.modules = { /***/ 67276: /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => { /* harmony export */ __webpack_require__.d(__webpack_exports__, { /* harmony export */ i: () => (/* binding */ initKoliBri), /* harmony export */ n: () => (/* binding */ nonce), /* harmony export */ r: () => (/* binding */ renderDevAdvice) /* harmony export */ }); /* harmony import */ var _index_022cbbb8_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(65224); /* harmony import */ var _reuse_108ee8f5_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(28968); /* harmony import */ var _dev_utils_1ca991a2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20444); /*! * KoliBri - The accessible HTML-Standard */ const initMeta=()=>{const e=(0,_dev_utils_1ca991a2_js__WEBPACK_IMPORTED_MODULE_0__.g)().querySelector('meta[name="kolibri"]');if(e&&e.hasAttribute("content")){const t=e.getAttribute("content");"string"==typeof t&&((0,_dev_utils_1ca991a2_js__WEBPACK_IMPORTED_MODULE_0__.s)(t.includes("dev-mode=true")),(0,_dev_utils_1ca991a2_js__WEBPACK_IMPORTED_MODULE_0__.b)(t.includes("experimental-mode=true")),(0,_dev_utils_1ca991a2_js__WEBPACK_IMPORTED_MODULE_0__.c)(t.includes("color-contrast-analysis=true")))}},getKoliBri=()=>{let e=(0,_dev_utils_1ca991a2_js__WEBPACK_IMPORTED_MODULE_0__.d)().KoliBri;return void 0===e&&(e={},Object.defineProperty((0,_dev_utils_1ca991a2_js__WEBPACK_IMPORTED_MODULE_0__.d)(),"KoliBri",{value:e,writable:!1})),e},initKoliBri=()=>{initMeta(),_dev_utils_1ca991a2_js__WEBPACK_IMPORTED_MODULE_0__.L.debug(`\n,--. ,--. ,--. ,--. ,-----. ,--.\n| .' / ,---. | | \`--' | |) /_ ,--.--. \`--'\n| . ' | .-. | | | ,--. | .-. \\ | .--' ,--.\n| |\\ \\ | '-' | | | | | | '--' / | | | |\n\`--' \`--´ \`---´ \`--' \`--' \`------´ \`--' \`--'\n🚹 The accessible HTML-Standard | 👉 https://public-ui.github.io | ${_index_022cbbb8_js__WEBPACK_IMPORTED_MODULE_1__.E.kolibriVersion}\n\t`,{forceLog:!0})},renderDevAdvice=()=>{!0!==getKoliBri().adviceShown&&(Object.defineProperty(getKoliBri(),"adviceShown",{get:function(){return!0}}),_dev_utils_1ca991a2_js__WEBPACK_IMPORTED_MODULE_0__.L.debug("\nYou are using the KoliBri component library. If you have any suggestions for improvement or find a problem, please contact us:\n\nTicket: https://github.com/public-ui/kolibri/issues/new/choose (for privacy reasons, please use email)\nEmail: kolibri@itzbund.de\n"))};let nonce=()=>Math.floor(16777215*Math.random()).toString(16);"test"===_reuse_108ee8f5_js__WEBPACK_IMPORTED_MODULE_2__.p&&(nonce=()=>"nonce"); /***/ }), /***/ 98852: /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => { /* harmony export */ __webpack_require__.d(__webpack_exports__, { /* harmony export */ t: () => (/* binding */ translate) /* harmony export */ }); /* harmony import */ var _i18n_3dcfca85_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(46892); /* harmony import */ var _reuse_108ee8f5_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(28968); /*! * KoliBri - The accessible HTML-Standard */ let translate=(t,e)=>{var n;return(null!==(n=(0,_i18n_3dcfca85_js__WEBPACK_IMPORTED_MODULE_0__.g)())&&void 0!==n?n:(0,_i18n_3dcfca85_js__WEBPACK_IMPORTED_MODULE_0__.i)("de")).translate(t,e)};"test"===_reuse_108ee8f5_js__WEBPACK_IMPORTED_MODULE_1__.p&&(translate=t=>t); /***/ }), /***/ 61303: /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => { __webpack_require__.r(__webpack_exports__); /* harmony export */ __webpack_require__.d(__webpack_exports__, { /* harmony export */ kol_toast_container: () => (/* binding */ KolToastContainer) /* harmony export */ }); /* harmony import */ var _index_022cbbb8_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(65224); /* harmony import */ var _i18n_59fb5a46_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(98852); /* harmony import */ var _dev_utils_500c6d3b_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(67276); /* harmony import */ var _component_names_5dd1e02a_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(63792); /*! * KoliBri - The accessible HTML-Standard */ const InternalToast=({key:t,onClose:s,onRef:e,toastState:a})=>(0,_index_022cbbb8_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:`toast ${a.status}`,key:t},(0,_index_022cbbb8_js__WEBPACK_IMPORTED_MODULE_0__.h)(_component_names_5dd1e02a_js__WEBPACK_IMPORTED_MODULE_1__.u,{class:"alert",_alert:!0,_label:a.toast.label,_level:0,_hasCloser:!0,_type:a.toast.type,_variant:a.toast.alertVariant||"card",_on:{onClose:s}},(0,_index_022cbbb8_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{ref:e},"string"==typeof a.toast.description?a.toast.description:null))),defaultStyleCss="@layer kol-component {\n :host {\n display: flex;\n flex-direction: column;\n font-size: calc(16rem / var(--kolibri-root-font-size, 16));\n position: fixed;\n z-index: 200;\n }\n .close-all {\n align-self: flex-end;\n }\n}",KolToastContainerDefaultStyle0=defaultStyleCss,TRANSITION_TIMEOUT=300,KolToastContainer=class{constructor(t){(0,_index_022cbbb8_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,t),this.knownRenderFunctions=new Set,this.state={_toastStates:[]}}async enqueue(t){const s={toast:t,status:"adding",id:`toast-${(0,_dev_utils_500c6d3b_js__WEBPACK_IMPORTED_MODULE_2__.n)()}`};return this.state=Object.assign(Object.assign({},this.state),{_toastStates:[s,...this.state._toastStates]}),setTimeout((()=>{this.state=Object.assign(Object.assign({},this.state),{_toastStates:this.state._toastStates.map((t=>t.id===s.id&&"removing"!==t.status?Object.assign(Object.assign({},t),{status:"settled"}):t))})}),300),()=>{this.handleClose(s)}}handleClose(t){this.state=Object.assign(Object.assign({},this.state),{_toastStates:this.state._toastStates.map((s=>(s.id===t.id&&(s.status="removing"),s)))}),setTimeout((()=>{this.state=Object.assign(Object.assign({},this.state),{_toastStates:this.state._toastStates.filter((s=>s.id!==t.id))})}),300)}async closeAll(t=!1){if(t)this.state=Object.assign(Object.assign({},this.state),{_toastStates:[]});else{const t=[...this.state._toastStates];this.state=Object.assign(Object.assign({},this.state),{_toastStates:t.map((t=>Object.assign(Object.assign({},t),{status:"removing"})))}),setTimeout((()=>{this.state=Object.assign(Object.assign({},this.state),{_toastStates:this.state._toastStates.filter((s=>t.every((t=>t.id!==s.id))))})}),300)}}handleToastRef(t,s){s&&"function"==typeof t.toast.render&&!this.knownRenderFunctions.has(t.toast.render)&&(this.knownRenderFunctions.add(t.toast.render),t.toast.render(s,{close:()=>this.handleClose(t)}))}render(){return (0,_index_022cbbb8_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_022cbbb8_js__WEBPACK_IMPORTED_MODULE_0__.H,{key:"4d7752f9c0213f4f307f79934a7c36ed0dc62087",class:"kol-toast-container"},this.state._toastStates.length>1&&(0,_index_022cbbb8_js__WEBPACK_IMPORTED_MODULE_0__.h)(_component_names_5dd1e02a_js__WEBPACK_IMPORTED_MODULE_1__.o,{key:"8837aeb34d2d0185e7c69997da07eeb95119177a",_label:(0,_i18n_59fb5a46_js__WEBPACK_IMPORTED_MODULE_3__.t)("kol-toast-close-all"),class:"close-all",_on:{onClick:()=>{this.closeAll()}}}),this.state._toastStates.map((t=>(0,_index_022cbbb8_js__WEBPACK_IMPORTED_MODULE_0__.h)(InternalToast,{key:t.id,onClose:()=>this.handleClose(t),onRef:s=>this.handleToastRef(t,s),toastState:t}))))}};KolToastContainer.style={default:KolToastContainerDefaultStyle0}; /***/ }), /***/ 28968: /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => { /* harmony export */ __webpack_require__.d(__webpack_exports__, { /* harmony export */ S: () => (/* binding */ STATE_CHANGE_EVENT), /* harmony export */ a: () => (/* binding */ isStyle), /* harmony export */ b: () => (/* binding */ isObject), /* harmony export */ c: () => (/* binding */ propagateFocus), /* harmony export */ h: () => (/* binding */ handleSlotContent), /* harmony export */ i: () => (/* binding */ isString), /* harmony export */ p: () => (/* binding */ processEnv), /* harmony export */ s: () => (/* binding */ showExpertSlot) /* harmony export */ }); /*! * KoliBri - The accessible HTML-Standard */ const isObject=t=>"object"==typeof t&&null!==t,isString=(t,e=0)=>"string"==typeof t&&t.length>=e,isStyle=t=>{if("object"!=typeof t||null===t)return isString(t,1);for(const e in t)if(!1===isString(e,1))return!1;return!0},STATE_CHANGE_EVENT=new Event("StateChange"),propagateFocus=(t,e)=>{isObject(t)&&t&&(t.focus=t=>null==e?void 0:e.focus(t))};let processEnv="development";try{processEnv="production"}catch(t){processEnv="production"}const handleSlotContent=(t,e,s)=>{if(t&&e&&"string"==typeof s){const o=t.querySelector(`[slot="${s}"]`);o&&e.appendChild(o)}},showExpertSlot=t=>""===t; /***/ }) }; ;