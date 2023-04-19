"use strict"; exports.id = 956; exports.ids = [956]; exports.modules = { /***/ 30690: /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => { /* harmony export */ __webpack_require__.d(__webpack_exports__, { /* harmony export */ "a": () => (/* binding */ translate) /* harmony export */ }); /* unused harmony export t */ /* harmony import */ var _index_a007a589_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(43225); /* harmony import */ var _a11y_tipps_1cea9822_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(55037); /*! * KoliBri - The accessible HTML-Standard */ const locale_de={error:"Fehler",warning:"Warnung",info:"Hinweis",success:"Erfolg",message:"Nachricht",close:"Schließen","form-description":"Formular-Felder, die mit einem Sternchen (*) gekennzeichnet sind, sind Pflichtangaben.",of:"von",characters:"Zeichen",new:"Neu","no-entries":"Es sind keine Einträge vorhanden.","change-order":"Sortierung von {{colLabel}} ändern","action-running":"Aktion wird ausgeführt...","action-done":"Aktion abgeschlossen","page-first":"Direkt zur ersten Seite","page-back":"Eine Seite zurück","page-next":"Eine Seite weiter","page-last":"Direkt zur letzten Seite","entries-per-site":"Einträge pro Seite","page-current":"Seite {{page}}","page-selected":"Seite {{page}} ist ausgewählt","page-per-site":"{{entries}} Einträge pro Seite","nav-maximize":"Navigation maximieren","nav-minimize":"Navigation minimieren","logo-description":"Logo {{orgShort}}. Bundesadler mit Flaggenstab und Schriftzug {{orgLong}}","open-link-in-tab":"Der Link wird in einem neuen Tab geöffnet.","kolibri-logo":"Logo von KoliBri"},locale_en={error:"Error",warning:"Warning",info:"Note",success:"Success",message:"Message",close:"Close","form-description":"Form fields marked with an asterisk (*) are mandatory.",of:"of",characters:"characters",new:"New","no-entries":"No entries available.","change-order":"Change order of {{colLabel}}","action-running":"Action is running...","action-done":"Action done","page-first":"Directly to the first page","page-back":"One page back","page-next":"One page further","page-last":"Directly to the last page","entries-per-site":"Entries per page","page-current":"Page {{page}}","page-selected":"Page {{page}} is selected","page-per-site":"{{entries}} entries per page","nav-maximize":"Maximize","nav-minimize":"Minimize","logo-description":"Logo {{orgShort}}. Federal eagle with flag staff and lettering {{orgLong}}","open-link-in-tab":"The link will open in a new tab.","kolibri-logo":"KoliBri logo"},mapLocaleKeys=e=>Object.keys(e).reduce(((n,i)=>(n[`kol-${i}`]=e[i],n)),{}),translations=new Set([e=>e("en",mapLocaleKeys(locale_en)),e=>e("de",mapLocaleKeys(locale_de))]),translate=(e,n)=>{const i=(0,_index_a007a589_js__WEBPACK_IMPORTED_MODULE_0__.g)();if(void 0===i)return (0,_a11y_tipps_1cea9822_js__WEBPACK_IMPORTED_MODULE_1__.d)("[I18n] I18nService not available! Please call the global register function."),e;let a=i.translate(e,n);return a===e&&((0,_a11y_tipps_1cea9822_js__WEBPACK_IMPORTED_MODULE_1__.d)("[I18n] Locales not initialized! Initialize default locales automatically."),translations.forEach((e=>e(((e,n)=>(i.addResourceBundle(e,n),e))))),a=i.translate(e,n)),a}; /***/ }), /***/ 10956: /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => { __webpack_require__.r(__webpack_exports__); /* harmony export */ __webpack_require__.d(__webpack_exports__, { /* harmony export */ "kol_nav": () => (/* binding */ KolNav) /* harmony export */ }); /* harmony import */ var _index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7793); /* harmony import */ var _i18n_c97dc260_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(30690); /* harmony import */ var _a11y_tipps_1cea9822_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(55037); /* harmony import */ var _prop_validators_e402ad49_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(37746); /* harmony import */ var _validation_ab9a6c0d_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(97236); /*! * KoliBri - The accessible HTML-Standard */ const validateCollapsible=(a,t)=>{(0,_prop_validators_e402ad49_js__WEBPACK_IMPORTED_MODULE_0__.b)(a,"_collapsible",t)},validateCompact=(a,t)=>{(0,_prop_validators_e402ad49_js__WEBPACK_IMPORTED_MODULE_0__.b)(a,"_compact",t)},validateHasCompactButton=(a,t)=>{(0,_prop_validators_e402ad49_js__WEBPACK_IMPORTED_MODULE_0__.b)(a,"_hasCompactButton",t)},defaultStyleCss=":host{--a11y-min-size:44px}*{hyphens:auto;letter-spacing:inherit;word-break:break-word;word-spacing:inherit}*[role='button'],button:not([role='link']){min-height:var(--a11y-min-size);min-width:var(--a11y-min-size)}a,button,h1,h2,h3,h4,h5,h6,input,option,select,textarea{font-family:inherit}:is(a,button){background-color:transparent;border:none;margin:0;padding:0;width:100%;}:host{max-width:100%}*{box-sizing:border-box}kol-span-wc{display:grid;place-items:center}kol-span-wc>span{display:flex;place-items:center}a,button{cursor:pointer}a,button,input,option,select,textarea{font-family:inherit}.icon-only>kol-span-wc>span>span{display:none}.list{display:flex;list-style:none;margin:0px;padding:0px}.list.vertical{flex-direction:column}.entry{display:flex}.entry kol-button-wc:first-child,.entry kol-link-wc,.entry kol-span-wc{flex-grow:1}",UNIQUE_ARIA_LABEL=[],removeAriaLabel=a=>{const t=UNIQUE_ARIA_LABEL.indexOf(a);t>=0&&UNIQUE_ARIA_LABEL.splice(t,1)},KolNav=class{constructor(a){(0,_index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_1__.r)(this,a),this.onClick=a=>{a._active=!a._active,this.state=Object.assign({},this.state)},this.hasActiveChild=a=>!!(Array.isArray(a._children)&&a._children.length>0)&&a._children.some(this.hasActiveChild),this.linkList=a=>(0,_index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_1__.h)("ul",{class:"list "+(0===a.deep&&"horizontal"===a.orientation?" horizontal":" vertical"),"data-deep":a.deep},a.links.map(((t,i)=>this.li(a.collapsible,a.compact,a.deep,i,t,a.orientation)))),this._ariaCurrentValue=!1,this._ariaLabel=void 0,this._collapsible=!0,this._compact=!1,this._hasCompactButton=!1,this._orientation="vertical",this._links=void 0,this._variant="primary",this.state={_ariaCurrentValue:!1,_ariaLabel:"…",_collapsible:!0,_hasCompactButton:!1,_links:[],_orientation:"vertical",_variant:"primary"}}button(a,t,i,e,n,l){return (0,_index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_1__.h)("kol-button-wc",{_ariaExpanded:a,_disabled:i,_icon:e||"-",_iconOnly:t,_label:n,_on:l})}text(a,t,i){return (0,_index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_1__.h)("kol-span-wc",{_icon:t||"-",_iconOnly:a,_label:i})}entry(a,t,i,e,n,l,o){return (0,_index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_1__.h)("div",{class:{entry:!0,"has-children":i,selected:l,expanded:n,"text-center":o}},this.buttonOrLinkOrText(t,e,l),i?this.expandButton(a,e,l):"")}expandButton(a,t,i){return (0,_index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_1__.h)("kol-button-wc",{class:"expand-button",_disabled:!a,_icon:"codicon codicon-"+(i?"remove":"add"),_iconOnly:!0,_label:`Untermenü zu ${t._label} ${i?"schließen":"öffnen"}`,_on:{onClick:()=>this.onClick(t)}})}li(a,t,i,e,n,l){const o=Array.isArray(n._children)&&n._children.length>0,s=!!n._active,r=o&&!!n._active,c=t;return (0,_index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_1__.h)("li",{class:{expanded:r,selected:s,"has-children":o},key:e},this.entry(a,t,o,n,r,s,c),o&&s?(0,_index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_1__.h)(this.linkList,{collapsible:a,compact:t,deep:i+1,links:n._children||[],orientation:l}):"")}link(a,t,i,e,n){return (0,_index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_1__.h)("kol-link-wc",{_ariaExpanded:a,_href:i,_icon:e||"-",_iconOnly:t,_label:n})}buttonOrLinkOrText(a,t,i){return t._on?this.button(i,a,!0===t._disabled,t._icon,t._label,t._on):t._href?this.link(i,a,t._href,t._icon,t._label):this.text(a,t._icon,t._label)}render(){let a=this.state._hasCompactButton;"horizontal"===this.state._orientation&&!0===this.state._hasCompactButton&&(a=!1,(0,_a11y_tipps_1cea9822_js__WEBPACK_IMPORTED_MODULE_2__.g)("[KolNav] Wenn eine horizontale Navigation verwendet wird, kann die Option _hasCompactButton nicht aktiviert werden."));const t=!0===this.state._collapsible,i=!0===this.state._compact,e=this.state._orientation;return (0,_index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_1__.h)(_index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_1__.H,null,(0,_index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_1__.h)("div",{class:{[e]:!0,[this.state._variant]:!0}},(0,_index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_1__.h)("nav",{"aria-label":this.state._ariaLabel,id:"nav"},(0,_index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_1__.h)(this.linkList,{collapsible:t,compact:i,deep:0,links:this.state._links,orientation:e})),a&&(0,_index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_1__.h)("div",{class:"mt-2 w-full text-center"},(0,_index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_1__.h)("kol-button",{_ariaControls:"nav",_ariaExpanded:i,_icon:i?"codicon codicon-chevron-right":"codicon codicon-chevron-left",_iconOnly:!0,_label:(0,_i18n_c97dc260_js__WEBPACK_IMPORTED_MODULE_3__.a)(i?"kol-nav-maximize":"kol-nav-minimize"),_on:{onClick:()=>{this.state=Object.assign(Object.assign({},this.state),{_compact:!1===this.state._compact})}},_tooltipAlign:"right",_variant:"ghost"}))))}validateAriaCurrentValue(a){(0,_prop_validators_e402ad49_js__WEBPACK_IMPORTED_MODULE_0__.a)(this,"_ariaCurrentValue",(a=>!0===a||"date"===a||"location"===a||"page"===a||"step"===a||"time"===a),new Set(["boolean","String {data, location, page, step, time}"]),a)}validateAriaLabel(a){(0,_prop_validators_e402ad49_js__WEBPACK_IMPORTED_MODULE_0__.w)(this,"_ariaLabel",a,{hooks:{afterPatch:()=>{UNIQUE_ARIA_LABEL.includes(this.state._ariaLabel)&&(0,_a11y_tipps_1cea9822_js__WEBPACK_IMPORTED_MODULE_2__.d)(`[KolNav] Das Aria-Label "${this.state._ariaLabel}" wurde für die Rolle Navigation mehrfach verwendet!`),UNIQUE_ARIA_LABEL.push(this.state._ariaLabel)},beforePatch:()=>{removeAriaLabel(this.state._ariaLabel)}},required:!0}),(0,_a11y_tipps_1cea9822_js__WEBPACK_IMPORTED_MODULE_2__.b)(a)}validateCollapsible(a){validateCollapsible(this,a)}validateCompact(a){validateCompact(this,a)}validateHasCompactButton(a){validateHasCompactButton(this,a)}validateLinks(a){(0,_validation_ab9a6c0d_js__WEBPACK_IMPORTED_MODULE_4__.w)("KolNav",this,a),(0,_a11y_tipps_1cea9822_js__WEBPACK_IMPORTED_MODULE_2__.d)("[KolNav] Die Navigationsstruktur wird noch nicht rekursiv validiert.")}validateOrientation(a){(0,_prop_validators_e402ad49_js__WEBPACK_IMPORTED_MODULE_0__.a)(this,"_orientation",(a=>"horizontal"===a||"vertical"===a),new Set(["Orientation {horizontal, vertical}"]),a,{defaultValue:"vertical"})}validateVariant(a){(0,_prop_validators_e402ad49_js__WEBPACK_IMPORTED_MODULE_0__.a)(this,"_variant",(a=>"primary"===a||"secondary"===a),new Set(["KoliBriNavVariant {primary, secondary}"]),a,{defaultValue:"primary"})}componentWillLoad(){this.validateAriaCurrentValue(this._ariaCurrentValue),this.validateAriaLabel(this._ariaLabel),this.validateCollapsible(this._collapsible),this.validateCompact(this._compact),this.validateHasCompactButton(this._hasCompactButton),this.validateLinks(this._links),this.validateOrientation(this._orientation),this.validateVariant(this._variant)}disconnectedCallback(){removeAriaLabel(this.state._ariaLabel)}static get watchers(){return{_ariaCurrentValue:["validateAriaCurrentValue"],_ariaLabel:["validateAriaLabel"],_collapsible:["validateCollapsible"],_compact:["validateCompact"],_hasCompactButton:["validateHasCompactButton"],_links:["validateLinks"],_orientation:["validateOrientation"],_variant:["validateVariant"]}}};KolNav.style={default:defaultStyleCss}; /***/ }), /***/ 97236: /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => { /* harmony export */ __webpack_require__.d(__webpack_exports__, { /* harmony export */ "w": () => (/* binding */ watchNavLinks) /* harmony export */ }); /* harmony import */ var _a11y_tipps_1cea9822_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(55037); /* harmony import */ var _prop_validators_e402ad49_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(37746); /*! * KoliBri - The accessible HTML-Standard */ const watchNavLinks=(t,a,s)=>{(0,_prop_validators_e402ad49_js__WEBPACK_IMPORTED_MODULE_0__.d)(a,"_links",(t=>"object"==typeof t&&"string"==typeof t._label),s),(0,_a11y_tipps_1cea9822_js__WEBPACK_IMPORTED_MODULE_1__.u)(t,a.state._links.length)}; /***/ }) }; ;