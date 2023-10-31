"use strict"; exports.id = 9325; exports.ids = [9325]; exports.modules = { /***/ 76772: /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => { /* harmony export */ __webpack_require__.d(__webpack_exports__, { /* harmony export */ a: () => (/* binding */ a11yHint), /* harmony export */ b: () => (/* binding */ a11yHintLabelingLandmarks), /* harmony export */ c: () => (/* binding */ uiUxHintMillerscheZahl), /* harmony export */ d: () => (/* binding */ devHint), /* harmony export */ e: () => (/* binding */ a11yHintDisabled), /* harmony export */ f: () => (/* binding */ featureHint), /* harmony export */ g: () => (/* binding */ devWarning), /* harmony export */ u: () => (/* binding */ uiUxHint) /* harmony export */ }); /* harmony import */ var _dev_utils_075f4e7b_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(37287); /*! * KoliBri - The accessible HTML-Standard */ const a11yCache=new Set,a11yHint=(e,i)=>{(!1===a11yCache.has(e)||(null==i?void 0:i.force))&&(a11yCache.add(e),_dev_utils_075f4e7b_js__WEBPACK_IMPORTED_MODULE_0__.L.debug([e].concat((null==i?void 0:i.details)||[]),{classifier:"✋ a11y",overwriteStyle:"; background-color: #09f"}))},devCache=new Set,devHint=(e,i)=>{(!1===devCache.has(e)||(null==i?void 0:i.force))&&(devCache.add(e),_dev_utils_075f4e7b_js__WEBPACK_IMPORTED_MODULE_0__.L.debug([e].concat((null==i?void 0:i.details)||[]),{classifier:"💻 dev",overwriteStyle:"; background-color: #f09"}))},devWarning=(e,i)=>{(!1===devCache.has(e)||(null==i?void 0:i.force))&&(devCache.add(e),_dev_utils_075f4e7b_js__WEBPACK_IMPORTED_MODULE_0__.L.warn([e].concat((null==i?void 0:i.details)||[]),{classifier:"💻 dev",overwriteStyle:"; background-color: #f09"}))},featureCache=new Set,featureHint=(e,i=!1,n)=>{(!1===featureCache.has(e)||(null==n?void 0:n.force))&&(featureCache.add(e),e+=!0===i?" ✅":"",_dev_utils_075f4e7b_js__WEBPACK_IMPORTED_MODULE_0__.L.debug([e].concat((null==n?void 0:n.details)||[]),{classifier:"🌟 feature",overwriteStyle:"; background-color: #309"}))};devHint("Wir freuen uns über jedes Feedback, Kommentare, Screenshots oder Demo-Links von einer auf KoliBri-basierenden Anwendung (kolibri@itzbund.de). Vielen Dank!");const uiUxCache=new Set,uiUxHint=(e,i)=>{(!1===uiUxCache.has(e)||(null==i?void 0:i.force))&&(uiUxCache.add(e),_dev_utils_075f4e7b_js__WEBPACK_IMPORTED_MODULE_0__.L.debug([e].concat((null==i?void 0:i.details)||[]),{classifier:"📑 ui/ux",overwriteStyle:"; background-color: #060;"}))},a11yHintDisabled=()=>{a11yHint('"Disabled" schränkt die Zugänglichkeit und Sichtbarkeit ein. Wir empfehlen aus Sicht der Barrierefreiheit readonly- statt disabled-Attribut zu verwenden.\n- https://uxdesign.cc/is-it-ok-to-grey-out-disabled-buttons-8afa74a0fae')},a11yHintLabelingLandmarks=e=>{"string"==typeof e&&""!==e||a11yHint("Manche Strukturelemente, wie bspw. der nav-Tag, können mehrfach in einer Webseite verwendet werden. Damit die gleichnamigen Strukturelemente voneinander unterschieden werden können, ist es erforderlich ein Aria-Label zu setzen.\n- https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/Navigation_Role#accessibility_concerns")},uiUxHintMillerscheZahl=(e,i=8)=>{i>7&&uiUxHint(`[${e}] Innerhalb von Navigationsstrukturen wird empfohlen nicht mehr als 7 Menüpunkte zu verwenden.\n\nLinks:\n- https://de.ryte.com/wiki/Millersche_Zahl\n- https://de.wikipedia.org/wiki/Millersche_Zahl`)}; /***/ }), /***/ 57948: /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => { /* harmony export */ __webpack_require__.d(__webpack_exports__, { /* harmony export */ a: () => (/* binding */ translate) /* harmony export */ }); /* unused harmony export t */ /* harmony import */ var _index_b79e4012_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(68722); /* harmony import */ var _a11y_tipps_06cd7c77_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(76772); /*! * KoliBri - The accessible HTML-Standard */ const locale_de={error:"Fehler",warning:"Warnung",info:"Hinweis",success:"Erfolg",message:"Nachricht",close:"Schließen","form-description":"Formular-Felder, die mit einem Sternchen (*) gekennzeichnet sind, sind Pflichtangaben.",of:"von",characters:"Zeichen",new:"Neu","no-entries":"Es sind keine Einträge vorhanden.","change-order":"Sortierung von {{colLabel}} ändern","action-running":"Aktion wird ausgeführt...","action-done":"Aktion abgeschlossen",pagination:"Paginierung","page-first":"Direkt zur ersten Seite","page-back":"Eine Seite zurück","page-next":"Eine Seite weiter","page-last":"Direkt zur letzten Seite","entries-per-site":"Einträge pro Seite","page-current":"Seite {{page}}","page-selected":"Seite {{page}} ist ausgewählt","page-per-site":"{{entries}} Einträge pro Seite","nav-maximize":"Navigation maximieren","nav-minimize":"Navigation minimieren","logo-description":"Logo {{orgShort}}. Bundesadler mit Flaggenstab und Schriftzug {{orgLong}}","open-link-in-tab":"Der Link wird in einem neuen Tab geöffnet.","kolibri-logo":"Logo von KoliBri","sort-descending":"Spalte {{column}} absteigend sortiert","sort-ascending":"Spalte {{column}} aufsteigend sortiert","sort-none":"Spalte {{column}} nicht sortiert","table-pagination-label":"Paginierung für die Tabelle {{label}}","avatar-alt":"Avatar von {{name}}","toast-close-all":"Alle schließen"},locale_en={error:"Error",warning:"Warning",info:"Note",success:"Success",message:"Message",close:"Close","form-description":"Form fields marked with an asterisk (*) are mandatory.",of:"of",characters:"characters",new:"New","no-entries":"No entries available.","change-order":"Change order of {{colLabel}}","action-running":"Action is running...","action-done":"Action done",pagination:"Pagination","page-first":"Directly to the first page","page-back":"One page back","page-next":"One page further","page-last":"Directly to the last page","entries-per-site":"Entries per page","page-current":"Page {{page}}","page-selected":"Page {{page}} is selected","page-per-site":"{{entries}} entries per page","nav-maximize":"Maximize navigation","nav-minimize":"Minimize navigation","logo-description":"Logo {{orgShort}}. Federal eagle with flag staff and lettering {{orgLong}}","open-link-in-tab":"The link will open in a new tab.","kolibri-logo":"KoliBri logo","sort-descending":"sorted column {{column}} descending","sort-ascending":"sorted column {{column}} ascending","sort-none":"column {{column}} not sorted","table-pagination-label":"Pagination for table {{label}}","avatar-alt":"Avatar of {{name}}","toast-close-all":"Close all"},mapLocaleKeys=e=>Object.keys(e).reduce(((n,a)=>(n[`kol-${a}`]=e[a],n)),{}),translations=new Set([e=>e("en",mapLocaleKeys(locale_en)),e=>e("de",mapLocaleKeys(locale_de))]),translate=(e,n)=>{const a=(0,_index_b79e4012_js__WEBPACK_IMPORTED_MODULE_0__.g)();if(void 0===a)return (0,_a11y_tipps_06cd7c77_js__WEBPACK_IMPORTED_MODULE_1__.d)("[I18n] I18nService not available! Please call the global register function."),e;let i=a.translate(e,n);return i===e&&((0,_a11y_tipps_06cd7c77_js__WEBPACK_IMPORTED_MODULE_1__.d)("[I18n] Locales not initialized! Initialize default locales automatically."),translations.forEach((e=>e(((e,n)=>(a.addResourceBundle(e,n),e))))),i=a.translate(e,n)),i}; /***/ }), /***/ 89325: /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => { __webpack_require__.r(__webpack_exports__); /* harmony export */ __webpack_require__.d(__webpack_exports__, { /* harmony export */ kol_input: () => (/* binding */ KolInput) /* harmony export */ }); /* harmony import */ var _index_9c30809b_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(97814); /* harmony import */ var _i18n_8ec5b30e_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(57948); /* harmony import */ var _reuse_b3566e4c_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67633); /*! * KoliBri - The accessible HTML-Standard */ const KolInput=class{constructor(t){(0,_index_9c30809b_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,t),this.slotName="input",this.catchInputSlot=t=>{(0,_reuse_b3566e4c_js__WEBPACK_IMPORTED_MODULE_1__.h)(this.host,t,this.slotName)},this._accessKey=void 0,this._alert=!0,this._currentLength=void 0,this._disabled=!1,this._error="",this._hasCounter=!1,this._hideError=!1,this._hideLabel=!1,this._hint="",this._icons=void 0,this._id=void 0,this._label=void 0,this._maxLength=void 0,this._readOnly=!1,this._renderNoLabel=!1,this._required=!1,this._slotName=void 0,this._suggestions=void 0,this._smartButton=void 0,this._tooltipAlign="top",this._touched=!1}componentWillRender(){this.slotName=this._slotName?this._slotName:"input"}getIconStyles(t){return t&&"object"==typeof t&&t.style?t.style:{}}render(){var t,i,s,e,o,l,n,r;const a="string"==typeof this._error&&this._error.length>0&&!0===this._touched,_=(0,_reuse_b3566e4c_js__WEBPACK_IMPORTED_MODULE_1__.s)(this._label),d="string"==typeof this._hint&&this._hint.length>0,c=!_&&this._hideLabel;return (0,_index_9c30809b_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_9c30809b_js__WEBPACK_IMPORTED_MODULE_0__.H,{class:{disabled:!0===this._disabled,error:!0===a,"read-only":!0===this._readOnly,required:!0===this._required,touched:!0===this._touched,"hidden-error":!0===this._hideError}},(0,_index_9c30809b_js__WEBPACK_IMPORTED_MODULE_0__.h)("label",{id:c?void 0:`${this._id}-label`,hidden:c,htmlFor:this._id},(0,_index_9c30809b_js__WEBPACK_IMPORTED_MODULE_0__.h)("span",null,(0,_index_9c30809b_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{name:"label"}))),d&&(0,_index_9c30809b_js__WEBPACK_IMPORTED_MODULE_0__.h)("span",{class:"hint",id:`${this._id}-hint`},this._hint),(0,_index_9c30809b_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:{input:!0,"icon-left":"object"==typeof(null===(t=this._icons)||void 0===t?void 0:t.left),"icon-right":"object"==typeof(null===(i=this._icons)||void 0===i?void 0:i.right)}},(null===(s=this._icons)||void 0===s?void 0:s.left)&&(0,_index_9c30809b_js__WEBPACK_IMPORTED_MODULE_0__.h)("kol-icon",{_label:"",_icons:(null===(e=this._icons)||void 0===e?void 0:e.left).icon,style:this.getIconStyles(null===(o=this._icons)||void 0===o?void 0:o.left)}),(0,_index_9c30809b_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{ref:this.catchInputSlot,id:this.slotName,class:"input-slot"}),"object"==typeof this._smartButton&&null!==this._smartButton&&(0,_index_9c30809b_js__WEBPACK_IMPORTED_MODULE_0__.h)("kol-button-wc",{_customClass:this._smartButton._customClass,_disabled:this._smartButton._disabled,_icons:this._smartButton._icons,_hideLabel:!0,_id:this._smartButton._id,_label:this._smartButton._label,_on:this._smartButton._on,_tooltipAlign:this._smartButton._tooltipAlign,_variant:this._smartButton._variant}),(null===(l=this._icons)||void 0===l?void 0:l.right)&&(0,_index_9c30809b_js__WEBPACK_IMPORTED_MODULE_0__.h)("kol-icon",{_label:"",_icons:(null===(n=this._icons)||void 0===n?void 0:n.right).icon,style:this.getIconStyles(null===(r=this._icons)||void 0===r?void 0:r.right)})),c&&(0,_index_9c30809b_js__WEBPACK_IMPORTED_MODULE_0__.h)("kol-tooltip-wc",{"aria-hidden":"true",class:"input-tooltip",_accessKey:this._accessKey,_align:this._tooltipAlign,_id:this._hideLabel?`${this._id}-label`:void 0,_label:this._label}),a&&(0,_index_9c30809b_js__WEBPACK_IMPORTED_MODULE_0__.h)("kol-alert",{_alert:this._alert,_type:"error",_variant:"msg","aria-hidden":this._hideError,class:"error"+(this._hideError?" hidden":""),id:`${this._id}-error`},this._error),Array.isArray(this._suggestions)&&this._suggestions.length>0&&(0,_index_9c30809b_js__WEBPACK_IMPORTED_MODULE_0__.h)("datalist",{id:`${this._id}-list`},this._suggestions.map((t=>(0,_index_9c30809b_js__WEBPACK_IMPORTED_MODULE_0__.h)("option",{value:t})))),this._hasCounter&&(0,_index_9c30809b_js__WEBPACK_IMPORTED_MODULE_0__.h)("span",{class:"counter","aria-atomic":"true","aria-live":"polite"},this._currentLength,this._maxLength&&(0,_index_9c30809b_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_9c30809b_js__WEBPACK_IMPORTED_MODULE_0__.F,null,(0,_index_9c30809b_js__WEBPACK_IMPORTED_MODULE_0__.h)("span",{"aria-label":(0,_i18n_8ec5b30e_js__WEBPACK_IMPORTED_MODULE_2__.a)("kol-of"),role:"img"},"/"),this._maxLength)," ",(0,_index_9c30809b_js__WEBPACK_IMPORTED_MODULE_0__.h)("span",null,(0,_i18n_8ec5b30e_js__WEBPACK_IMPORTED_MODULE_2__.a)("kol-characters"))))}get host(){return (0,_index_9c30809b_js__WEBPACK_IMPORTED_MODULE_0__.g)(this)}}; /***/ }) }; ;