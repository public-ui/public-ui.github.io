"use strict"; exports.id = 5822; exports.ids = [5822]; exports.modules = { /***/ 32588: /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => { /* harmony export */ __webpack_require__.d(__webpack_exports__, { /* harmony export */ "a": () => (/* binding */ translate) /* harmony export */ }); /* unused harmony export t */ /* harmony import */ var _index_fef6600b_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73489); /* harmony import */ var _a11y_tipps_1cea9822_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13118); /*! * KoliBri - The accessible HTML-Standard */ const locale_de={error:"Fehler",warning:"Warnung",info:"Hinweis",success:"Erfolg",message:"Nachricht",close:"Schließen","form-description":"Formular-Felder, die mit einem Sternchen (*) gekennzeichnet sind, sind Pflichtangaben.",of:"von",characters:"Zeichen",new:"Neu","no-entries":"Es sind keine Einträge vorhanden.","change-order":"Sortierung von {{colLabel}} ändern","action-running":"Aktion wird ausgeführt...","action-done":"Aktion abgeschlossen","page-first":"Direkt zur ersten Seite","page-back":"Eine Seite zurück","page-next":"Eine Seite weiter","page-last":"Direkt zur letzten Seite","entries-per-site":"Einträge pro Seite","page-current":"Seite {{page}}","page-selected":"Seite {{page}} ist ausgewählt","page-per-site":"{{entries}} Einträge pro Seite","nav-maximize":"Navigation maximieren","nav-minimize":"Navigation minimieren","logo-description":"Logo {{orgShort}}. Bundesadler mit Flaggenstab und Schriftzug {{orgLong}}","open-link-in-tab":"Der Link wird in einem neuen Tab geöffnet.","kolibri-logo":"Logo von KoliBri"},locale_en={error:"Error",warning:"Warning",info:"Note",success:"Success",message:"Message",close:"Close","form-description":"Form fields marked with an asterisk (*) are mandatory.",of:"of",characters:"characters",new:"New","no-entries":"No entries available.","change-order":"Change order of {{colLabel}}","action-running":"Action is running...","action-done":"Action done","page-first":"Directly to the first page","page-back":"One page back","page-next":"One page further","page-last":"Directly to the last page","entries-per-site":"Entries per page","page-current":"Page {{page}}","page-selected":"Page {{page}} is selected","page-per-site":"{{entries}} entries per page","nav-maximize":"Maximize","nav-minimize":"Minimize","logo-description":"Logo {{orgShort}}. Federal eagle with flag staff and lettering {{orgLong}}","open-link-in-tab":"The link will open in a new tab.","kolibri-logo":"KoliBri logo"},mapLocaleKeys=e=>Object.keys(e).reduce(((n,i)=>(n[`kol-${i}`]=e[i],n)),{}),translations=new Set([e=>e("en",mapLocaleKeys(locale_en)),e=>e("de",mapLocaleKeys(locale_de))]),translate=(e,n)=>{const i=(0,_index_fef6600b_js__WEBPACK_IMPORTED_MODULE_0__.g)();if(void 0===i)return (0,_a11y_tipps_1cea9822_js__WEBPACK_IMPORTED_MODULE_1__.d)("[I18n] I18nService not available! Please call the global register function."),e;let a=i.translate(e,n);return a===e&&((0,_a11y_tipps_1cea9822_js__WEBPACK_IMPORTED_MODULE_1__.d)("[I18n] Locales not initialized! Initialize default locales automatically."),translations.forEach((e=>e(((e,n)=>(i.addResourceBundle(e,n),e))))),a=i.translate(e,n)),a}; /***/ }), /***/ 15822: /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => { __webpack_require__.r(__webpack_exports__); /* harmony export */ __webpack_require__.d(__webpack_exports__, { /* harmony export */ "kol_spin": () => (/* binding */ KolSpin) /* harmony export */ }); /* harmony import */ var _index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16784); /* harmony import */ var _prop_validators_e402ad49_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(43681); /* harmony import */ var _i18n_cbc21d6e_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(32588); /*! * KoliBri - The accessible HTML-Standard */ const defaultStyleCss=":host{--a11y-min-size:44px}*{hyphens:auto;letter-spacing:inherit;word-break:break-word;word-spacing:inherit}[role='button'],button:not([role='link']),kol-input .input{min-height:var(--a11y-min-size);min-width:var(--a11y-min-size)}a,button,h1,h2,h3,h4,h5,h6,input,option,select,textarea{font-family:inherit;font-size:inherit}:is(a,button){background-color:transparent;border:none;margin:0;padding:0;width:100%;}:host{max-width:100%}*{box-sizing:border-box}kol-span-wc{display:grid;place-items:center}kol-span-wc>span{display:flex;place-items:center}a,button{cursor:pointer}a,button,input,option,select,textarea{font-family:inherit}.icon-only>kol-span-wc>span>span{display:none}.spin{display:inline-block;height:1rem;position:relative;width:3rem}.spin span{animation-timing-function:cubic-bezier(0, 1, 1, 0);border-radius:50%;border:0.1rem solid #fff;height:0.8rem;position:absolute;top:0.1rem;width:0.8rem}.spin span:first-child{background-color:#fc0;z-index:0;animation:2s infinite spin1;left:0.1rem}.spin span:nth-child(2){background-color:red;z-index:1;animation:2s infinite spin2;left:0.1rem}.spin span:nth-child(3){background-color:#000;z-index:1;animation:2s infinite spin2;left:1.1rem}.spin span:nth-child(4){background-color:#666;z-index:0;animation:2s infinite spin3;left:2.1rem}@keyframes spin1{0%{transform:scale(0)}100%{transform:scale(1)}}@keyframes spin2{0%{transform:translate(0, 0)}100%{transform:translate(1rem, 0)}}@keyframes spin3{0%{transform:scale(1)}100%{transform:scale(0)}}",KolSpin=class{constructor(i){(0,_index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,i),this.showToggled=!1,this._show=!1,this.state={}}render(){return (0,_index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_0__.H,null,this.state._show?(0,_index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_0__.h)("span",{"aria-busy":"true","aria-label":(0,_i18n_cbc21d6e_js__WEBPACK_IMPORTED_MODULE_1__.a)("kol-action-running"),"aria-live":"polite",class:"spin",role:"alert"},(0,_index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_0__.h)("span",{class:"bg-spin-1"}),(0,_index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_0__.h)("span",{class:"bg-spin-2"}),(0,_index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_0__.h)("span",{class:"bg-spin-3"}),(0,_index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_0__.h)("span",{class:"bg-neutral"})):this.showToggled&&(0,_index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_0__.h)("span",{"aria-label":(0,_i18n_cbc21d6e_js__WEBPACK_IMPORTED_MODULE_1__.a)("kol-action-done"),"aria-busy":"false","aria-live":"polite",role:"alert"}))}validateShow(i){this.showToggled=!0===this.state._show&&!1===this._show,(0,_prop_validators_e402ad49_js__WEBPACK_IMPORTED_MODULE_2__.b)(this,"_show",i)}componentWillLoad(){this.validateShow(this._show)}static get watchers(){return{_show:["validateShow"]}}};KolSpin.style={default:defaultStyleCss}; /***/ }) }; ;