"use strict"; exports.id = 5504; exports.ids = [5504]; exports.modules = { /***/ 75504: /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => { __webpack_require__.r(__webpack_exports__); /* harmony export */ __webpack_require__.d(__webpack_exports__, { /* harmony export */ "kol_version": () => (/* binding */ KolVersion) /* harmony export */ }); /* harmony import */ var _index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(21156); /* harmony import */ var _prop_validators_e402ad49_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(15248); /*! * KoliBri - The accessible HTML-Standard */ var Farbspektrum;!function(e){e.Violett="#5f316e",e.Dunkelrot="#780f2d",e.Rot="#c0003c",e.Orange="#cd5038",e.Hellorange="#f7bb3d",e.Gelb="#f9e03a",e["Hellgrün"]="#c1ca31",e.Oliv="#597c39",e["Dunkelgrün"]="#005c45",e["Grün"]="#00854a",e["Türkis"]="#00818b",e.Hellblau="#80cdec",e.Blau="#0077b6",e.Petrol="#007194",e.Dunkelblau="#004b76",e.Dunkelgrau="#576164",e.Hellgrau="#bec5c9"}(Farbspektrum||(Farbspektrum={}));const defaultStyleCss=":host{--a11y-min-size:44px}*{hyphens:auto;letter-spacing:inherit;word-break:break-word;word-spacing:inherit}*[role='button'],button:not([role='link']),input[type='color'],input[type='date'],input[type='datetime-local'],input[type='email'],input[type='file'],input[type='month'],input[type='number'],input[type='password'],input[type='search'],input[type='tel'],input[type='text'],input[type='time'],input[type='url'],input[type='week'],option,select,textarea{min-height:var(--a11y-min-size);min-width:var(--a11y-min-size)}:is(a,button){background-color:transparent;border:none;margin:0;padding:0;width:100%;}:host{max-width:100%}*{box-sizing:border-box}kol-span-wc{display:grid;place-items:center}kol-span-wc>span{display:flex;place-items:center}a,button,input[type='checkbox'],input[type='color'],input[type='file'],input[type='radio'],option,select{cursor:pointer;font-family:inherit;font-size:inherit}.icon-only>kol-span-wc>span>span{display:none}",KolVersion=class{constructor(e){(0,_index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,e),this._version=void 0,this.state={_version:"0.0.0-alpha.0"}}render(){return (0,_index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_0__.h)("kol-badge",{_color:Farbspektrum.Hellgrau,_icon:"codicon codicon-versions",_label:`v${this.state._version}`})}validateVersion(e){(0,_prop_validators_e402ad49_js__WEBPACK_IMPORTED_MODULE_1__.w)(this,"_version",e,{required:!0})}componentWillLoad(){this.validateVersion(this._version)}static get watchers(){return{_version:["validateVersion"]}}};KolVersion.style={default:defaultStyleCss}; /***/ }) }; ;