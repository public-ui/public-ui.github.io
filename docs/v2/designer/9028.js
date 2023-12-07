/*! For license information please see 9028.js.LICENSE.txt */
"use strict";(self.webpackChunk_public_ui_designer=self.webpackChunk_public_ui_designer||[]).push([[9028],{98312:(e,n,t)=>{t.d(n,{a:()=>c});var a=t(80114),i=t(21824);const o={error:"Fehler",warning:"Warnung",info:"Hinweis",success:"Erfolg",message:"Nachricht",close:"Schließen","form-description":"Formular-Felder, die mit einem Sternchen (*) gekennzeichnet sind, sind Pflichtangaben.",of:"von",characters:"Zeichen",new:"Neu","no-entries":"Es sind keine Einträge vorhanden.","change-order":"Sortierung von {{colLabel}} ändern","action-running":"Aktion wird ausgeführt...","action-done":"Aktion abgeschlossen",pagination:"Paginierung","page-first":"Direkt zur ersten Seite","page-back":"Eine Seite zurück","page-next":"Eine Seite weiter","page-last":"Direkt zur letzten Seite","entries-per-site":"Einträge pro Seite","page-current":"Seite {{page}}","page-selected":"Seite {{page}} ist ausgewählt","page-per-site":"{{entries}} Einträge pro Seite","nav-maximize":"Navigation maximieren","nav-minimize":"Navigation minimieren","logo-description":"Logo {{orgShort}}. Bundesadler mit Flaggenstab und Schriftzug {{orgLong}}","open-link-in-tab":"Der Link wird in einem neuen Tab geöffnet.","kolibri-logo":"Logo von KoliBri","sort-ascending":"Die Spalte {{column}} ist aufsteigend{{multi}} sortiert.","sort-descending":"Die Spalte {{column}} ist absteigend{{multi}} sortiert.","sort-then-ascending":", dann die Spalte {{column}} aufsteigend","sort-then-descending":", dann die Spalte {{column}} absteigend","sort-then-last-ascending":" und dann die Spalte {{column}} aufsteigend","sort-then-last-descending":" und dann die Spalte {{column}} absteigend","sort-none":"Spalte {{column}} nicht sortiert","table-sort-none":"Keine Spalte ist sortiert.","table-pagination-label":"Paginierung für die Tabelle {{label}}","avatar-alt":"Avatar von {{name}}","toast-close-all":"Alle schließen"},r={error:"Error",warning:"Warning",info:"Note",success:"Success",message:"Message",close:"Close","form-description":"Form fields marked with an asterisk (*) are mandatory.",of:"of",characters:"characters",new:"New","no-entries":"No entries available.","change-order":"Change order of {{colLabel}}","action-running":"Action is running...","action-done":"Action done",pagination:"Pagination","page-first":"Directly to the first page","page-back":"One page back","page-next":"One page further","page-last":"Directly to the last page","entries-per-site":"Entries per page","page-current":"Page {{page}}","page-selected":"Page {{page}} is selected","page-per-site":"{{entries}} entries per page","nav-maximize":"Maximize navigation","nav-minimize":"Minimize navigation","logo-description":"Logo {{orgShort}}. Federal eagle with flag staff and lettering {{orgLong}}","open-link-in-tab":"The link will open in a new tab.","kolibri-logo":"KoliBri logo","sort-descending":"Sorted column {{column}} descending{{multi}}","sort-ascending":"Sorted column {{column}} ascending{{multi}}","sort-then-ascending":", then column {{column}} acending","sort-then-descending":", then column {{column}} descending","sort-then-last-ascending":" and then column {{column}} acending","sort-then-last-descending":" and then column {{column}} descending","sort-none":"column {{column}} not sorted","table-sort-none":"No column is sorted.","table-pagination-label":"Pagination for table {{label}}","avatar-alt":"Avatar of {{name}}","toast-close-all":"Close all"},l=e=>Object.keys(e).reduce(((n,t)=>(n[`kol-${t}`]=e[t],n)),{}),s=new Set([e=>e("en",l(r)),e=>e("de",l(o))]),c=(e,n)=>{const t=(0,a.g)();if(void 0===t)return(0,i.d)("[I18n] I18nService not available! Please call the global register function."),e;let o=t.translate(e,n);return o===e&&((0,i.d)("[I18n] Locales not initialized! Initialize default locales automatically."),s.forEach((e=>e(((e,n)=>(t.addResourceBundle(e,n),e))))),o=t.translate(e,n)),o}},39028:(e,n,t)=>{t.r(n),t.d(n,{kol_symbol:()=>l});var a=t(95946),i=t(98312),o=t(93580),r=t(47363);const l=class{constructor(e){(0,a.r)(this,e),this._label=void 0,this._symbol=void 0,this.state={_label:(0,i.a)("kol-warning"),_symbol:"…"}}render(){return(0,a.h)(a.H,null,(0,a.h)("span",{"aria-label":this.state._label,role:"term"},this.state._symbol))}validateLabel(e){(0,o.v)(this,e)}validateSymbol(e){(0,r.d)(this,"_symbol",e,{required:!0})}componentWillLoad(){this.validateLabel(this._label),this.validateSymbol(this._symbol)}static get watchers(){return{_label:["validateLabel"],_symbol:["validateSymbol"]}}}},93580:(e,n,t)=>{t.d(n,{a:()=>d,c:()=>s,h:()=>l,v:()=>g});var a=t(21824),i=t(47363);const o=/[a-zA-Z0-9äöüÄÖÜß]/g,r=/^\d+$/;function l(e,n=1){return function(e){var n;return"string"==typeof e&&(null===(n=e.match(o))||void 0===n?void 0:n.length)||0}(e)>=n}function s(e){return r.test(e)}const c=new Set(["string"]),g=(e,n,t={})=>{(0,i.w)(e,"_label",(e=>"string"==typeof e),c,n,function(e){var n;return{hooks:{afterPatch:(n,t,i,o)=>{var r,c;"function"==typeof(null===(r=e.hooks)||void 0===r?void 0:r.afterPatch)&&(null===(c=e.hooks)||void 0===c||c.afterPatch(n,t,i,o)),"string"==typeof n&&!1===l(n,3)&&!1===s(n)&&(0,a.a)(`The heading or label ("${n}") is not accessible. A label should consist of at least three readable characters.`),"string"==typeof n&&n.length>80&&(0,a.u)("A heading or label should not be longer than 80 characters.")},beforePatch:null===(n=e.hooks)||void 0===n?void 0:n.beforePatch}}}(t))},d=g}}]);