/*! For license information please see 9028.js.LICENSE.txt */
"use strict";(self.webpackChunk_public_ui_sample_react=self.webpackChunk_public_ui_sample_react||[]).push([[9028],{7113:(e,i,a)=>{a.d(i,{a:()=>g});var n=a(1793),r=a(2120);const t={error:"Fehler",warning:"Warnung",info:"Hinweis",success:"Erfolg",message:"Nachricht",close:"Schließen","form-description":"Formular-Felder, die mit einem Sternchen (*) gekennzeichnet sind, sind Pflichtangaben.",of:"von",characters:"Zeichen",new:"Neu","no-entries":"Es sind keine Einträge vorhanden.","change-order":"Sortierung von {{colLabel}} ändern","action-running":"Aktion wird ausgeführt...","action-done":"Aktion abgeschlossen","page-first":"Direkt zur ersten Seite","page-back":"Eine Seite zurück","page-next":"Eine Seite weiter","page-last":"Direkt zur letzten Seite","entries-per-site":"Einträge pro Seite","page-current":"Seite {{page}}","page-selected":"Seite {{page}} ist ausgewählt","page-per-site":"{{entries}} Einträge pro Seite","nav-maximize":"Navigation maximieren","nav-minimize":"Navigation minimieren","logo-description":"Logo {{orgShort}}. Bundesadler mit Flaggenstab und Schriftzug {{orgLong}}","open-link-in-tab":"Der Link wird in einem neuen Tab geöffnet.","kolibri-logo":"Logo von KoliBri"},o={error:"Error",warning:"Warning",info:"Note",success:"Success",message:"Message",close:"Close","form-description":"Form fields marked with an asterisk (*) are mandatory.",of:"of",characters:"characters",new:"New","no-entries":"No entries available.","change-order":"Change order of {{colLabel}}","action-running":"Action is running...","action-done":"Action done","page-first":"Directly to the first page","page-back":"One page back","page-next":"One page further","page-last":"Directly to the last page","entries-per-site":"Entries per page","page-current":"Page {{page}}","page-selected":"Page {{page}} is selected","page-per-site":"{{entries}} entries per page","nav-maximize":"Maximize","nav-minimize":"Minimize","logo-description":"Logo {{orgShort}}. Federal eagle with flag staff and lettering {{orgLong}}","open-link-in-tab":"The link will open in a new tab.","kolibri-logo":"KoliBri logo"},s=e=>Object.keys(e).reduce(((i,a)=>(i[`kol-${a}`]=e[a],i)),{}),l=new Set([e=>e("en",s(o)),e=>e("de",s(t))]),g=(e,i)=>{const a=(0,n.g)();if(void 0===a)return(0,r.d)("[I18n] I18nService not available! Please call the global register function."),e;let t=a.translate(e,i);return t===e&&((0,r.d)("[I18n] Locales not initialized! Initialize default locales automatically."),l.forEach((e=>e(((e,i)=>(a.addResourceBundle(e,i),e))))),t=a.translate(e,i)),t}},9028:(e,i,a)=>{a.r(i),a.d(i,{kol_symbol:()=>o});var n=a(9258),r=a(3320),t=a(7113);const o=class{constructor(e){(0,n.r)(this,e),this._ariaLabel=void 0,this._symbol=void 0,this.state={_ariaLabel:(0,t.a)("kol-warning"),_symbol:"…"}}render(){return(0,n.h)(n.H,null,(0,n.h)("span",{"aria-label":this.state._ariaLabel,role:"term"},this.state._symbol))}validateAriaLabel(e){(0,r.w)(this,"_ariaLabel",e,{required:!0})}validateSymbol(e){(0,r.w)(this,"_symbol",e,{required:!0})}componentWillLoad(){this.validateAriaLabel(this._ariaLabel),this.validateSymbol(this._symbol)}static get watchers(){return{_ariaLabel:["validateAriaLabel"],_symbol:["validateSymbol"]}}}}}]);