/*! For license information please see 4468.js.LICENSE.txt */
"use strict";(self.webpackChunk_public_ui_designer=self.webpackChunk_public_ui_designer||[]).push([[4468],{46718:(e,t,a)=>{a.d(t,{a:()=>g});var s=a(55691),i=a(92805);const n={error:"Fehler",warning:"Warnung",info:"Hinweis",success:"Erfolg",message:"Nachricht",close:"Schließen","form-description":"Formular-Felder, die mit einem Sternchen (*) gekennzeichnet sind, sind Pflichtangaben.",of:"von",characters:"Zeichen",new:"Neu","no-entries":"Es sind keine Einträge vorhanden.","change-order":"Sortierung von {{colLabel}} ändern","action-running":"Aktion wird ausgeführt...","action-done":"Aktion abgeschlossen",pagination:"Paginierung","page-first":"Direkt zur ersten Seite","page-back":"Eine Seite zurück","page-next":"Eine Seite weiter","page-last":"Direkt zur letzten Seite","entries-per-site":"Einträge pro Seite",page:"Seite","page-current":"Seite {{page}}","page-selected":"Seite {{page}} ist ausgewählt","page-per-site":"{{entries}} Einträge pro Seite","nav-maximize":"Navigation maximieren","nav-minimize":"Navigation minimieren","logo-description":"Logo {{orgShort}}. Bundesadler mit Flaggenstab und Schriftzug {{orgLong}}","open-link-in-tab":"Öffnet in neuem Tab.","kolibri-logo":"Logo von KoliBri","table-pagination-label":"Paginierung für die Tabelle {{label}}","avatar-alt":"Avatar von {{name}}","toast-close-all":"Alle schließen",version:"Versionsnummer","error-list":"Fehlerliste","error-list-message":"Bitte korrigieren Sie folgende Fehler:"},o={error:"Error",warning:"Warning",info:"Note",success:"Success",message:"Message",close:"Close","form-description":"Form fields marked with an asterisk (*) are mandatory.",of:"of",characters:"characters",new:"New","no-entries":"No entries available.","change-order":"Change order of {{colLabel}}","action-running":"Action is running...","action-done":"Action done",pagination:"Pagination","page-first":"Directly to the first page","page-back":"One page back","page-next":"One page further","page-last":"Directly to the last page","entries-per-site":"Entries per page",page:"Page","page-current":"Page {{page}}","page-selected":"Page {{page}} is selected","page-per-site":"{{entries}} entries per page","nav-maximize":"Maximize","nav-minimize":"Minimize","logo-description":"Logo {{orgShort}}. Federal eagle with flag staff and lettering {{orgLong}}","open-link-in-tab":"Opens in new tab.","kolibri-logo":"KoliBri logo","table-pagination-label":"Pagination for table {{label}}","avatar-alt":"Avatar of {{name}}","toast-close-all":"Close all",version:"Version number","error-list":"Error list","error-list-message":"Please correct the following errors"},r=e=>Object.keys(e).reduce(((t,a)=>(t[`kol-${a}`]=e[a],t)),{}),l=new Set([e=>e("en",r(o)),e=>e("de",r(n))]),g=(e,t)=>{const a=(0,s.g)();if(void 0===a)return(0,i.d)("[I18n] I18nService not available! Please call the global register function."),e;let n=a.translate(e,t);return n===e&&((0,i.d)("[I18n] Locales not initialized! Initialize default locales automatically."),l.forEach((e=>e(((e,t)=>(a.addResourceBundle(e,t),e))))),n=a.translate(e,t)),n}},54468:(e,t,a)=>{a.r(t),a.d(t,{kol_toast_container:()=>l});var s=a(25262),i=a(46718),n=a(38037),o=(e,t,a)=>new Promise(((s,i)=>{var n=e=>{try{r(a.next(e))}catch(e){i(e)}},o=e=>{try{r(a.throw(e))}catch(e){i(e)}},r=e=>e.done?s(e.value):Promise.resolve(e.value).then(n,o);r((a=a.apply(e,t)).next())}));const r=({toastState:e,onClose:t,key:a})=>(0,s.h)("div",{class:`toast ${e.status}`,key:a},(0,s.h)("kol-alert",{class:"alert",_alert:!0,_label:e.toast.label,_level:0,_hasCloser:!0,_type:e.toast.type,_variant:"card",_on:{onClose:t}},(0,s.h)("div",{ref:a=>{"function"==typeof e.toast.render&&a&&e.toast.render(a,{close:()=>t()})}},"string"==typeof e.toast.description?e.toast.description:null))),l=class{constructor(e){(0,s.r)(this,e),this.state={_toastStates:[]}}enqueue(e){return o(this,null,(function*(){const t={toast:e,status:"adding",id:`toast-${(0,n.n)()}`};return this.state=Object.assign(Object.assign({},this.state),{_toastStates:[t,...this.state._toastStates]}),setTimeout((()=>{this.state=Object.assign(Object.assign({},this.state),{_toastStates:this.state._toastStates.map((e=>e.id===t.id?Object.assign(Object.assign({},e),{status:"settled"}):e))})}),300),()=>{this.handleClose(t)}}))}handleClose(e){this.state=Object.assign(Object.assign({},this.state),{_toastStates:this.state._toastStates.map((t=>(t.id===e.id&&(t.status="removing"),t)))}),setTimeout((()=>{this.state=Object.assign(Object.assign({},this.state),{_toastStates:this.state._toastStates.filter((t=>t.id!==e.id))})}),300)}closeAll(){return o(this,null,(function*(){this.state=Object.assign(Object.assign({},this.state),{_toastStates:this.state._toastStates.map((e=>Object.assign(Object.assign({},e),{status:"removing"})))}),setTimeout((()=>{this.state=Object.assign(Object.assign({},this.state),{_toastStates:[]})}),300)}))}render(){return(0,s.h)(s.F,null,this.state._toastStates.length>1&&(0,s.h)("kol-button",{_label:(0,i.a)("kol-toast-close-all"),class:"close-all",_on:{onClick:()=>{this.closeAll()}}}),this.state._toastStates.map((e=>(0,s.h)(r,{toastState:e,onClose:()=>this.handleClose(e),key:e.id}))))}};l.style={default:"@layer kol-component {\n\t:host {\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t\tposition: fixed;\n\t\tz-index: 200;\n\t}\n\n\t.close-all {\n\t\talign-self: flex-end;\n\t}\n}\n"}}}]);