"use strict";
exports.id = 3187;
exports.ids = [3187];
exports.modules = {

/***/ 57750:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": () => (/* binding */ translate)
/* harmony export */ });
/* unused harmony export t */
/* harmony import */ var _index_f3c76945_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57783);
/* harmony import */ var _a11y_tipps_5ca36877_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(36840);
/*!
 * KoliBri - The accessible HTML-Standard
 */
const locale_de={error:"Fehler",warning:"Warnung",info:"Hinweis",success:"Erfolg",message:"Nachricht",close:"Schließen","form-description":"Formular-Felder, die mit einem Sternchen (*) gekennzeichnet sind, sind Pflichtangaben.",of:"von",characters:"Zeichen",new:"Neu","no-entries":"Es sind keine Einträge vorhanden.","change-order":"Sortierung von {{colLabel}} ändern","action-running":"Aktion wird ausgeführt...","action-done":"Aktion abgeschlossen","page-first":"Direkt zur ersten Seite","page-back":"Eine Seite zurück","page-next":"Eine Seite weiter","page-last":"Direkt zur letzten Seite","entries-per-site":"Einträge pro Seite","page-current":"Seite {{page}}","page-selected":"Seite {{page}} ist ausgewählt","page-per-site":"{{entries}} Einträge pro Seite","nav-maximize":"Navigation maximieren","nav-minimize":"Navigation minimieren","logo-description":"Logo {{orgShort}}. Bundesadler mit Flaggenstab und Schriftzug {{orgLong}}","open-link-in-tab":"Der Link wird in einem neuen Tab geöffnet.","kolibri-logo":"Logo von KoliBri"},locale_en={error:"Error",warning:"Warning",info:"Note",success:"Success",message:"Message",close:"Close","form-description":"Form fields marked with an asterisk (*) are mandatory.",of:"of",characters:"characters",new:"New","no-entries":"No entries available.","change-order":"Change order of {{colLabel}}","action-running":"Action is running...","action-done":"Action done","page-first":"Directly to the first page","page-back":"One page back","page-next":"One page further","page-last":"Directly to the last page","entries-per-site":"Entries per page","page-current":"Page {{page}}","page-selected":"Page {{page}} is selected","page-per-site":"{{entries}} entries per page","nav-maximize":"Maximize","nav-minimize":"Minimize","logo-description":"Logo {{orgShort}}. Federal eagle with flag staff and lettering {{orgLong}}","open-link-in-tab":"The link will open in a new tab.","kolibri-logo":"KoliBri logo"},mapLocaleKeys=e=>Object.keys(e).reduce(((n,i)=>(n[`kol-${i}`]=e[i],n)),{}),translations=new Set([e=>e("en",mapLocaleKeys(locale_en)),e=>e("de",mapLocaleKeys(locale_de))]),translate=(e,n)=>{const i=(0,_index_f3c76945_js__WEBPACK_IMPORTED_MODULE_0__.g)();if(void 0===i)return (0,_a11y_tipps_5ca36877_js__WEBPACK_IMPORTED_MODULE_1__.d)("[I18n] I18nService not available! Please call the global register function."),e;let a=i.translate(e,n);return a===e&&((0,_a11y_tipps_5ca36877_js__WEBPACK_IMPORTED_MODULE_1__.d)("[I18n] Locales not initialized! Initialize default locales automatically."),translations.forEach((e=>e(((e,n)=>(i.addResourceBundle(e,n),e))))),a=i.translate(e,n)),a};

/***/ }),

/***/ 53187:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "kol_tabs": () => (/* binding */ KolTabs)
/* harmony export */ });
/* harmony import */ var _index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(51642);
/* harmony import */ var _a11y_tipps_5ca36877_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(36840);
/* harmony import */ var _prop_validators_1f3db013_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(754);
/* harmony import */ var _i18n_97355570_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(57750);
/* harmony import */ var _dev_utils_bedce29d_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(14680);
/*!
 * KoliBri - The accessible HTML-Standard
 */
const AVAILABLE_HORIZONTAL_ALIGNMENT_VALUES=new Set(['"left", "right"']),AVAILABLE_VERTICAL_ALIGNMENT_VALUES=new Set(['"bottom", "top"']),AVAILABLE_ALIGNMENT_VALUES=new Set([...AVAILABLE_HORIZONTAL_ALIGNMENT_VALUES,...AVAILABLE_VERTICAL_ALIGNMENT_VALUES]),validateAlignment=(t,e,a)=>{(0,_prop_validators_1f3db013_js__WEBPACK_IMPORTED_MODULE_0__.a)(t,e,(t=>"bottom"===t||"left"===t||"right"===t||"top"===t),AVAILABLE_ALIGNMENT_VALUES,a)},defaultStyleCss=":host{--a11y-min-size:44px}*{hyphens:auto;letter-spacing:inherit;word-break:break-word;word-spacing:inherit}*[role='button'],button:not([role='link']),input[type='color'],input[type='date'],input[type='datetime-local'],input[type='email'],input[type='file'],input[type='month'],input[type='number'],input[type='password'],input[type='search'],input[type='tel'],input[type='text'],input[type='time'],input[type='url'],input[type='week'],option,select,textarea{min-height:var(--a11y-min-size);min-width:var(--a11y-min-size)}:is(a,button){background-color:transparent;border:none;margin:0;padding:0;width:100%;}:host{max-width:100%}*{box-sizing:border-box}kol-span-wc{display:grid;place-items:center}kol-span-wc>span{display:flex;place-items:center}a,button,input[type='checkbox'],input[type='color'],input[type='file'],input[type='radio'],option,select{cursor:pointer;font-family:inherit;font-size:inherit}.icon-only>kol-span-wc>span>span{display:none}:host{display:block}kol-button-group-wc{display:inline-flex;flex-wrap:wrap}kol-button-group-wc button{border:0;border-bottom-color:transparent;border-bottom-style:solid;display:block}div[role='tabpanel']{height:100%}div.grid{height:100%}:host>.tabs-align-right{display:grid;grid-template-columns:1fr auto}:host>.tabs-align-right kol-button-group-wc{display:grid;order:2}:host>.tabs-align-left{display:grid;grid-template-columns:auto 1fr}:host>.tabs-align-left kol-button-group-wc{display:grid;order:0}:host>.tabs-align-bottom{display:grid;grid-template-rows:1fr auto}:host>.tabs-align-bottom kol-button-group-wc{order:2}:host>.tabs-align-bottom kol-button-group-wc>div{display:flex}:host>.tabs-align-bottom>kol-button-group-wc>div>div:first-child{margin:0px 1em 0px 0px}:host>.tabs-align-bottom>kol-button-group-wc>div>div{margin:0px 1em}:host>.tabs-align-top{display:grid;grid-template-rows:auto 1fr}:host>.tabs-align-top kol-button-group-wc{order:0}:host>.tabs-align-top kol-button-group-wc>div{display:flex}:host>.tabs-align-top>kol-button-group-wc>div>div:first-child{margin:0px 1em 0px 0px}:host>.tabs-align-top>kol-button-group-wc>div>div{margin:0px 1em}:host>div{display:grid}:host>.tabs-align-left kol-button-group-wc,:host>.tabs-align-top kol-button-group-wc{order:0}:host>.tabs-align-bottom kol-button-group-wc,:host>.tabs-align-right kol-button-group-wc{order:1}:host>div.tabs-align-left kol-button-group-wc>div,:host>div.tabs-align-left kol-button-group-wc>div>div,:host>div.tabs-align-right kol-button-group-wc>div,:host>div.tabs-align-right kol-button-group-wc>div>div{display:grid}:host>div.tabs-align-left kol-button-group-wc>div>div kol-button-wc,:host>div.tabs-align-right kol-button-group-wc>div>div kol-button-wc{width:100%}:host>div.tabs-align-bottom kol-button-group-wc div,:host>div.tabs-align-top kol-button-group-wc div{display:flex;flex-wrap:wrap}",KolTabs=class{constructor(t){(0,_index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_1__.r)(this,t),this.onCreateLabel=`${(0,_i18n_97355570_js__WEBPACK_IMPORTED_MODULE_2__.a)("kol-new")} …`,this.showCreateTab=!1,this.nextPossibleTabIndex=(t,e,a)=>{if(a>0){if(e+a<t.length)return t[e+a]._disabled?this.nextPossibleTabIndex(t,e,a+1):e+a}else if(a<0&&e+a>=0)return t[e+a]._disabled?this.nextPossibleTabIndex(t,e,a-1):e+a;return e},this.onKeyDown=t=>{const e=setTimeout((()=>{clearTimeout(e);let a=null;switch(t.key){case"ArrowRight":a=this.nextPossibleTabIndex(this.state._tabs,this.state._selected,1);break;case"ArrowLeft":a=this.nextPossibleTabIndex(this.state._tabs,this.state._selected,-1)}null!==a&&this.onSelect(t,a,!0)}),250)},this.onClickSelect=(t,e)=>{this.onSelect(t,e,!0)},this.onMouseDown=t=>{t.stopPropagation()},this.callbacks={onClick:this.onClickSelect,onMouseDown:this.onMouseDown},this.catchTabPanelHost=t=>{this.tabPanelHost=t},this.selectNextNotDisabledTab=(t,e,a=!0,i)=>{if(t>e.length-1&&(t=e.length-1),t<0&&(t=0),Array.isArray(e)&&e[t]&&e[t]._disabled){if(!0===a){if(t<e.length-1)return this.selectNextNotDisabledTab(t+1,e,!0,i||t);t=i||t,a=!1}if(!1===a){if(t>0)return this.selectNextNotDisabledTab(t-1,e,!1,i||t);(0,_a11y_tipps_5ca36877_js__WEBPACK_IMPORTED_MODULE_3__.d)("[KolTabs] Alle Tabs sind deaktiviert und somit kann kein Tab angezeigt werden.")}}return t},this.syncSelectedAndTabs=(t,e,a,i)=>{let o,s;o="_selected"===i?t:this.state._selected,s="_tabs"===i?t:this.state._tabs,s.length>0&&e.set("_selected",this.selectNextNotDisabledTab(o,s))},this.handleTabPanels=()=>{var t,e,a;if(this.tabPanelHost instanceof HTMLDivElement)for(let i=this.tabPanelHost.children.length;i<this.state._tabs.length;i++){const o=document.createElement("div");o.setAttribute("aria-labelledby",`tab-${i}`),o.setAttribute("id",`tabpanel-${i}`),o.setAttribute("role","tabpanel"),o.setAttribute("hidden","");const s=document.createElement("slot");s.setAttribute("name",`tabpanel-slot-${i}`),o.appendChild(s),this.tabPanelHost.appendChild(o),(null===(t=this.host)||void 0===t?void 0:t.children)instanceof HTMLCollection&&(null===(e=this.host)||void 0===e?void 0:e.children[i])&&(null===(a=this.host)||void 0===a||a.children[i].setAttribute("slot",`tabpanel-slot-${i}`))}},this.onCreate=t=>{var e,a;t.stopPropagation(),"function"==typeof(null===(e=this.state._on)||void 0===e?void 0:e.onCreate)&&(null===(a=this.state._on)||void 0===a||a.onCreate(t))},this._ariaLabel=void 0,this._on=void 0,this._selected=0,this._tabs=void 0,this._tabsAlign="top",this.state={_ariaLabel:"…",_selected:0,_tabs:[],_tabsAlign:"top"}}renderButtonGroup(){return (0,_index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_1__.h)("kol-button-group-wc",{role:"tablist","aria-label":this.state._ariaLabel,onKeyDown:this.onKeyDown},this.state._tabs.map(((t,e)=>(0,_index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_1__.h)("kol-button-wc",{_disabled:t._disabled,_icon:t._icon,_iconOnly:t._iconOnly,_label:t._label&&t._label,_on:this.callbacks,_tabIndex:this.state._selected===e?0:-1,_tooltipAlign:t._tooltipAlign,_variant:this.state._selected===e?"custom":void 0,_customClass:this.state._selected===e?"selected":void 0,_ariaControls:`tabpanel-${e}`,_ariaSelected:this.state._selected===e,_id:`tab-${e}`,_role:"tab",_value:e}))),this.showCreateTab&&(0,_index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_1__.h)("kol-button-wc",{class:"create-button",_label:this.onCreateLabel,_on:{onClick:this.onCreate}}))}render(){return (0,_index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_1__.h)(_index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_1__.H,null,(0,_index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_1__.h)("div",{ref:t=>{this.tabPanelsElement=t},class:{[`tabs-align-${this.state._tabsAlign}`]:!0}},this.renderButtonGroup(),(0,_index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_1__.h)("div",{ref:this.catchTabPanelHost})))}validateAriaLabel(t){(0,_prop_validators_1f3db013_js__WEBPACK_IMPORTED_MODULE_0__.w)(this,"_ariaLabel",t,{required:!0}),(0,_a11y_tipps_5ca36877_js__WEBPACK_IMPORTED_MODULE_3__.b)(t)}validateOn(t){if("object"==typeof t&&null!==t){(0,_a11y_tipps_5ca36877_js__WEBPACK_IMPORTED_MODULE_3__.f)("[KolTabs] Prüfen, wie man auch einen EventCallback einzeln ändern kann.");const e={};"function"!=typeof t.onCreate&&"object"!=typeof t.onCreate||("object"==typeof t.onCreate?("string"==typeof t.onCreate.label&&t.onCreate.label.length>0?this.onCreateLabel=t.onCreate.label:_dev_utils_bedce29d_js__WEBPACK_IMPORTED_MODULE_4__.L.debug("[KolTabs] Der Label-Text für Neu in {\n  onCreate: {\n    label: string (!),\n    callback: Function\n  }\n} ist nicht korrekt gesetzt."),"function"==typeof t.onCreate.callback?e.onCreate=t.onCreate.callback:_dev_utils_bedce29d_js__WEBPACK_IMPORTED_MODULE_4__.L.debug("[KolTabs] Die onCreate-Callback-Funktion für Neu in {\n  onCreate: {\n    label: string,\n    callback: Function (!)\n  }\n} ist nicht korrekt gesetzt.")):e.onCreate=t.onCreate,this.showCreateTab="function"==typeof e.onCreate),"function"==typeof t.onSelect&&(e.onSelect=t.onSelect),(0,_prop_validators_1f3db013_js__WEBPACK_IMPORTED_MODULE_0__.s)(this,"_on",e)}}validateSelected(t){(0,_prop_validators_1f3db013_js__WEBPACK_IMPORTED_MODULE_0__.e)(this,"_selected",t,{hooks:{beforePatch:this.syncSelectedAndTabs}})}validateTabs(t){(0,_prop_validators_1f3db013_js__WEBPACK_IMPORTED_MODULE_0__.d)(this,"_tabs",(t=>"object"==typeof t&&null!==t&&"string"==typeof t._label&&t._label.length>0),t,void 0,{hooks:{beforePatch:this.syncSelectedAndTabs}}),(0,_a11y_tipps_5ca36877_js__WEBPACK_IMPORTED_MODULE_3__.u)("KolTabs",this.state._tabs.length)}validateTabsAlign(t){validateAlignment(this,"_tabsAlign",t)}componentWillLoad(){this.validateAriaLabel(this._ariaLabel),this.validateOn(this._on),this.validateSelected(this._selected),this.validateTabs(this._tabs),this.validateTabsAlign(this._tabsAlign)}componentDidRender(){if(this.handleTabPanels(),this.tabPanelHost instanceof HTMLDivElement)for(let t=0;t<this.tabPanelHost.children.length;t++)t!==this.state._selected?this.tabPanelHost.children[t].setAttribute("hidden",""):this.tabPanelHost.children[t].removeAttribute("hidden")}onSelect(t,e,a=!1){var i,o;this._selected=e,"function"==typeof(null===(i=this._on)||void 0===i?void 0:i.onSelect)&&(null===(o=this._on)||void 0===o||o.onSelect(t,e)),!0===a&&(this.selectedTimeout=setTimeout((()=>{if(clearTimeout(this.selectedTimeout),this.tabPanelsElement){const t=(0,_prop_validators_1f3db013_js__WEBPACK_IMPORTED_MODULE_0__.k)(`button#tab-${e}`,this.tabPanelsElement);null==t||t.focus()}}),250))}get host(){return (0,_index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_1__.g)(this)}static get watchers(){return{_ariaLabel:["validateAriaLabel"],_on:["validateOn"],_selected:["validateSelected"],_tabs:["validateTabs"],_tabsAlign:["validateTabsAlign"]}}};KolTabs.style={default:defaultStyleCss};

/***/ })

};
;