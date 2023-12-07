/*! For license information please see 1117.js.LICENSE.txt */
"use strict";(self.webpackChunk_public_ui_sample_react=self.webpackChunk_public_ui_sample_react||[]).push([[1117],{2639:(e,a,t)=>{t.d(a,{a:()=>c});var n=t(2788),i=t(6931);const r={error:"Fehler",warning:"Warnung",info:"Hinweis",success:"Erfolg",message:"Nachricht",close:"Schließen","form-description":"Formular-Felder, die mit einem Sternchen (*) gekennzeichnet sind, sind Pflichtangaben.",of:"von",characters:"Zeichen",new:"Neu","no-entries":"Es sind keine Einträge vorhanden.","change-order":"Sortierung von {{colLabel}} ändern","action-running":"Aktion wird ausgeführt...","action-done":"Aktion abgeschlossen",pagination:"Paginierung","page-first":"Direkt zur ersten Seite","page-back":"Eine Seite zurück","page-next":"Eine Seite weiter","page-last":"Direkt zur letzten Seite","entries-per-site":"Einträge pro Seite","page-current":"Seite {{page}}","page-selected":"Seite {{page}} ist ausgewählt","page-per-site":"{{entries}} Einträge pro Seite","nav-maximize":"Navigation maximieren","nav-minimize":"Navigation minimieren","logo-description":"Logo {{orgShort}}. Bundesadler mit Flaggenstab und Schriftzug {{orgLong}}","open-link-in-tab":"Der Link wird in einem neuen Tab geöffnet.","kolibri-logo":"Logo von KoliBri","sort-descending":"Spalte {{column}} absteigend sortiert","sort-ascending":"Spalte {{column}} aufsteigend sortiert","sort-none":"Spalte {{column}} nicht sortiert","table-pagination-label":"Paginierung für die Tabelle {{label}}","avatar-alt":"Avatar von {{name}}","toast-close-all":"Alle schließen"},o={error:"Error",warning:"Warning",info:"Note",success:"Success",message:"Message",close:"Close","form-description":"Form fields marked with an asterisk (*) are mandatory.",of:"of",characters:"characters",new:"New","no-entries":"No entries available.","change-order":"Change order of {{colLabel}}","action-running":"Action is running...","action-done":"Action done",pagination:"Pagination","page-first":"Directly to the first page","page-back":"One page back","page-next":"One page further","page-last":"Directly to the last page","entries-per-site":"Entries per page","page-current":"Page {{page}}","page-selected":"Page {{page}} is selected","page-per-site":"{{entries}} entries per page","nav-maximize":"Maximize","nav-minimize":"Minimize","logo-description":"Logo {{orgShort}}. Federal eagle with flag staff and lettering {{orgLong}}","open-link-in-tab":"The link will open in a new tab.","kolibri-logo":"KoliBri logo","sort-descending":"sorted column {{column}} descending","sort-ascending":"sorted column {{column}} ascending","sort-none":"column {{column}} not sorted","table-pagination-label":"Pagination for table {{label}}","avatar-alt":"Avatar of {{name}}","toast-close-all":"Close all"},l=e=>Object.keys(e).reduce(((a,t)=>(a[`kol-${t}`]=e[t],a)),{}),s=new Set([e=>e("en",l(o)),e=>e("de",l(r))]),c=(e,a)=>{const t=(0,n.g)();if(void 0===t)return(0,i.d)("[I18n] I18nService not available! Please call the global register function."),e;let r=t.translate(e,a);return r===e&&((0,i.d)("[I18n] Locales not initialized! Initialize default locales automatically."),s.forEach((e=>e(((e,a)=>(t.addResourceBundle(e,a),e))))),r=t.translate(e,a)),r}},2647:(e,a,t)=>{t.d(a,{v:()=>i});var n=t(4688);const i=(e,a,t)=>{(0,n.d)(e,"_src",a,t)}},1117:(e,a,t)=>{t.r(a),t.d(a,{kol_avatar_wc:()=>s});var n=t(5946),i=t(2639),r=t(2647),o=t(8279);const l=e=>0===e.length?"":e[0].toUpperCase(),s=class{constructor(e){(0,n.r)(this,e),this._src=void 0,this._label=void 0,this.state={_src:"",_label:""}}render(){return(0,n.h)(n.H,null,(0,n.h)("div",{"aria-label":(0,i.a)("kol-avatar-alt",{placeholders:{name:this.state._label}}),class:"container",role:"img"},this.state._src?(0,n.h)("img",{alt:"","aria-hidden":"true",class:"image",src:this.state._src}):(0,n.h)("span",{"aria-hidden":"true",class:"initials"},(e=>{const a=e.split(/\s+/),t=a.at(0),n=a.at(-1);return a.length>=2&&t&&n?`${l(t)}${l(n)}`:l(e)})(this.state._label.trim()))))}validateSrc(e){(0,r.v)(this,e)}validateLabel(e){(0,o.v)(this,e)}componentWillLoad(){this.validateSrc(this._src),this.validateLabel(this._label)}static get watchers(){return{_src:["validateSrc"],_label:["validateLabel"]}}}},8279:(e,a,t)=>{t.d(a,{a:()=>d,c:()=>s,h:()=>l,v:()=>g});var n=t(6931),i=t(4688);const r=/[a-zA-Z0-9äöüÄÖÜß]/g,o=/^\d+$/;function l(e,a=1){return function(e){var a;return"string"==typeof e&&(null===(a=e.match(r))||void 0===a?void 0:a.length)||0}(e)>=a}function s(e){return o.test(e)}const c=new Set(["string"]),g=(e,a,t={})=>{(0,i.w)(e,"_label",(e=>"string"==typeof e),c,a,function(e){var a;return{hooks:{afterPatch:(a,t,i,r)=>{var o,c;"function"==typeof(null===(o=e.hooks)||void 0===o?void 0:o.afterPatch)&&(null===(c=e.hooks)||void 0===c||c.afterPatch(a,t,i,r)),"string"==typeof a&&!1===l(a,3)&&!1===s(a)&&(0,n.a)(`The heading or label ("${a}") is not accessible. A label should consist of at least three readable characters.`),"string"==typeof a&&a.length>80&&(0,n.u)("A heading or label should not be longer than 80 characters.")},beforePatch:null===(a=e.hooks)||void 0===a?void 0:a.beforePatch}}}(t))},d=g}}]);