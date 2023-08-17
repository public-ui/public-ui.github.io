/*! For license information please see 9028.js.LICENSE.txt */
"use strict";(self.webpackChunk_public_ui_designer=self.webpackChunk_public_ui_designer||[]).push([[9028],{2680:(e,t,a)=>{a.d(t,{a:()=>c});var n=a(51201),i=a(9285);const r={error:"Fehler",warning:"Warnung",info:"Hinweis",success:"Erfolg",message:"Nachricht",close:"Schließen","form-description":"Formular-Felder, die mit einem Sternchen (*) gekennzeichnet sind, sind Pflichtangaben.",of:"von",characters:"Zeichen",new:"Neu","no-entries":"Es sind keine Einträge vorhanden.","change-order":"Sortierung von {{colLabel}} ändern","action-running":"Aktion wird ausgeführt...","action-done":"Aktion abgeschlossen","page-first":"Direkt zur ersten Seite","page-back":"Eine Seite zurück","page-next":"Eine Seite weiter","page-last":"Direkt zur letzten Seite","entries-per-site":"Einträge pro Seite","page-current":"Seite {{page}}","page-selected":"Seite {{page}} ist ausgewählt","page-per-site":"{{entries}} Einträge pro Seite","nav-maximize":"Navigation maximieren","nav-minimize":"Navigation minimieren","logo-description":"Logo {{orgShort}}. Bundesadler mit Flaggenstab und Schriftzug {{orgLong}}","open-link-in-tab":"Der Link wird in einem neuen Tab geöffnet.","kolibri-logo":"Logo von KoliBri","sort-descending":"Spalte {{column}} absteigend sortiert","sort-ascending":"Spalte {{column}} aufsteigend sortiert","sort-none":"Spalte {{column}} nicht sortiert","avatar-alt":"Avatar von {{name}}"},o={error:"Error",warning:"Warning",info:"Note",success:"Success",message:"Message",close:"Close","form-description":"Form fields marked with an asterisk (*) are mandatory.",of:"of",characters:"characters",new:"New","no-entries":"No entries available.","change-order":"Change order of {{colLabel}}","action-running":"Action is running...","action-done":"Action done","page-first":"Directly to the first page","page-back":"One page back","page-next":"One page further","page-last":"Directly to the last page","entries-per-site":"Entries per page","page-current":"Page {{page}}","page-selected":"Page {{page}} is selected","page-per-site":"{{entries}} entries per page","nav-maximize":"Maximize","nav-minimize":"Minimize","logo-description":"Logo {{orgShort}}. Federal eagle with flag staff and lettering {{orgLong}}","open-link-in-tab":"The link will open in a new tab.","kolibri-logo":"KoliBri logo","sort-descending":"sorted column {{column}} descending","sort-ascending":"sorted column {{column}} ascending","sort-none":"column {{column}} not sorted","avatar-alt":"Avatar of {{name}}"},l=e=>Object.keys(e).reduce(((t,a)=>(t[`kol-${a}`]=e[a],t)),{}),s=new Set([e=>e("en",l(o)),e=>e("de",l(r))]),c=(e,t)=>{const a=(0,n.g)();if(void 0===a)return(0,i.d)("[I18n] I18nService not available! Please call the global register function."),e;let r=a.translate(e,t);return r===e&&((0,i.d)("[I18n] Locales not initialized! Initialize default locales automatically."),s.forEach((e=>e(((e,t)=>(a.addResourceBundle(e,t),e))))),r=a.translate(e,t)),r}},39028:(e,t,a)=>{a.r(t),a.d(t,{kol_symbol:()=>l});var n=a(72108),i=a(2680),r=a(72241),o=a(46255);const l=class{constructor(e){(0,n.r)(this,e),this._ariaLabel=void 0,this._label=void 0,this._symbol=void 0,this.state={_label:(0,i.a)("kol-warning"),_symbol:"…"}}render(){return(0,n.h)(n.H,null,(0,n.h)("span",{"aria-label":this.state._label,role:"term"},this.state._symbol))}validateAriaLabel(e){this.validateLabel(e)}validateLabel(e){(0,r.v)(this,e)}validateSymbol(e){(0,o.d)(this,"_symbol",e,{required:!0})}componentWillLoad(){this.validateLabel(this._label||this._ariaLabel),this.validateSymbol(this._symbol)}static get watchers(){return{_ariaLabel:["validateAriaLabel"],_label:["validateLabel"],_symbol:["validateSymbol"]}}}},72241:(e,t,a)=>{a.d(t,{a:()=>u,c:()=>s,h:()=>l,v:()=>d});var n=a(9285),i=a(46255);const r=/[a-zA-Z0-9äöüÄÖÜß]/g,o=/^\d+$/;function l(e,t=1){return function(e){var t;return"string"==typeof e&&(null===(t=e.match(r))||void 0===t?void 0:t.length)||0}(e)>=t}function s(e){return o.test(e)}function c(e){var t;return{hooks:{afterPatch:(t,a,i,r)=>{var o,c;"function"==typeof(null===(o=e.hooks)||void 0===o?void 0:o.afterPatch)&&(null===(c=e.hooks)||void 0===c||c.afterPatch(t,a,i,r)),"string"==typeof t&&!1===l(t,3)&&!1===s(t)&&(0,n.a)(`The heading or label ("${t}") is not accessible. A label should consist of at least three readable characters.`),"string"==typeof t&&t.length>80&&(0,n.u)("A heading or label should not be longer than 80 characters.")},beforePatch:null===(t=e.hooks)||void 0===t?void 0:t.beforePatch}}}const g=new Set(["string"]),d=(e,t,a={})=>{(0,i.w)(e,"_label",(e=>"string"==typeof e),g,t,c(a))},h=new Set(["string","false"]),u=(e,t,a={})=>{""!==t&&"false"!==t||(t=!1),(0,i.w)(e,"_label",(e=>!1===e||"string"==typeof e),h,t,c(a))}}}]);