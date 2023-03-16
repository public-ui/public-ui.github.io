/*! For license information please see 4840.js.LICENSE.txt */
"use strict";(self.webpackChunk_public_ui_designer=self.webpackChunk_public_ui_designer||[]).push([[4840],{9200:(e,i,n)=>{n.d(i,{a:()=>c});var r=n(5142),o=n(65815);const a={error:"Fehler",warning:"Warnung",info:"Hinweis",success:"Erfolg",message:"Nachricht",close:"Schließen","form-description":"Formular-Felder, die mit einem Sternchen (*) gekennzeichnet sind, sind Pflichtangaben.",of:"von",characters:"Zeichen",new:"Neu","no-entries":"Es sind keine Einträge vorhanden.","change-order":"Sortierung von {{colLabel}} ändern","action-running":"Aktion wird ausgeführt...","action-done":"Aktion abgeschlossen","page-first":"Direkt zur ersten Seite","page-back":"Eine Seite zurück","page-next":"Eine Seite weiter","page-last":"Direkt zur letzten Seite","entries-per-site":"Einträge pro Seite","page-current":"Seite {{page}}","page-selected":"Seite {{page}} ist ausgewählt","page-per-site":"{{entries}} Einträge pro Seite","nav-maximize":"Navigation maximieren","nav-minimize":"Navigation minimieren","logo-description":"Logo {{orgShort}}. Bundesadler mit Flaggenstab und Schriftzug {{orgLong}}","open-link-in-tab":"Der Link wird in einem neuen Tab geöffnet.","kolibri-logo":"Logo von KoliBri"},t={error:"Error",warning:"Warning",info:"Note",success:"Success",message:"Message",close:"Close","form-description":"Form fields marked with an asterisk (*) are mandatory.",of:"of",characters:"characters",new:"New","no-entries":"No entries available.","change-order":"Change order of {{colLabel}}","action-running":"Action is running...","action-done":"Action done","page-first":"Directly to the first page","page-back":"One page back","page-next":"One page further","page-last":"Directly to the last page","entries-per-site":"Entries per page","page-current":"Page {{page}}","page-selected":"Page {{page}} is selected","page-per-site":"{{entries}} entries per page","nav-maximize":"Maximize","nav-minimize":"Minimize","logo-description":"Logo {{orgShort}}. Federal eagle with flag staff and lettering {{orgLong}}","open-link-in-tab":"The link will open in a new tab.","kolibri-logo":"KoliBri logo"},s=e=>Object.keys(e).reduce(((i,n)=>(i[`kol-${n}`]=e[n],i)),{}),l=new Set([e=>e("en",s(t)),e=>e("de",s(a))]),c=(e,i)=>{const n=(0,r.g)();if(void 0===n)return(0,o.d)("[I18n] I18nService not available! Please call the global register function."),e;let a=n.translate(e,i);return a===e&&((0,o.d)("[I18n] Locales not initialized! Initialize default locales automatically."),l.forEach((e=>e(((e,i)=>(n.addResourceBundle(e,i),e))))),a=n.translate(e,i)),a}},24840:(e,i,n)=>{n.r(i),n.d(i,{kol_spin:()=>t});var r=n(99459),o=n(80019),a=n(9200);const t=class{constructor(e){(0,r.r)(this,e),this.showToggled=!1,this._show=!1,this.state={}}render(){return(0,r.h)(r.H,null,this.state._show?(0,r.h)("span",{"aria-busy":"true","aria-label":(0,a.a)("kol-action-running"),"aria-live":"polite",class:"spin",role:"alert"},(0,r.h)("span",{class:"bg-spin-1"}),(0,r.h)("span",{class:"bg-spin-2"}),(0,r.h)("span",{class:"bg-spin-3"}),(0,r.h)("span",{class:"bg-neutral"})):this.showToggled&&(0,r.h)("span",{"aria-label":(0,a.a)("kol-action-done"),"aria-busy":"false","aria-live":"polite",role:"alert"}))}validateShow(e){this.showToggled=!0===this.state._show&&!1===this._show,(0,o.b)(this,"_show",e)}componentWillLoad(){this.validateShow(this._show)}static get watchers(){return{_show:["validateShow"]}}};t.style={default:":host{--kolibri-border-color:#666;--kolibri-border-radius:0.125rem;--kolibri-border-width:1px;--kolibri-color-error:#f44336;--kolibri-color-info:#2196f3;--kolibri-color-success:#4caf50;--kolibri-color-warning:#ff9800;--kolibri-color-primary:#3f51b5;--kolibri-color-secondary:#ff4081;--kolibri-color-normal:#9e9e9e;--kolibri-color-danger:#f44336;--kolibri-color-ghost:#f5f5f5;--kolibri-color-disabled:#bdbdbd;--kolibri-color-text:#222222;--kolibri-color-visited:#9c27b0;--kolibri-font-family:Verdana, Arial, Tahoma, Helvetica, sans-serif;--kolibri-font-size:16px;--kolibri-spacing:0.25rem}:host *{hyphens:auto;letter-spacing:inherit;word-break:break-word;word-spacing:inherit}a,button{background-color:transparent;border:none;font-size:inherit;margin:0;padding:0;transition-duration:0.5s;transition-property:background-color, color, border-color}:host{font-family:var(--kolibri-font-family);font-size:var(--kolibri-font-size)}*{box-sizing:border-box}kol-icon{color:inherit}kol-span-wc{display:grid;gap:var(--kolibri-spacing);place-items:center}kol-span-wc>span{display:flex;gap:var(--kolibri-spacing);place-items:center}kol-span-wc>kol-icon,kol-span-wc>span>kol-icon{display:inline-grid;place-items:center;width:1em;height:1em}a,button,input,select,textarea{appearance:none;cursor:pointer}.icon-only>kol-span-wc>span>span{display:none}h1,h2,h3,h4,h5,h6{font-family:var(--kolibri-font-family);font-size:var(--kolibri-font-size);margin:0;padding:0}.spin{display:inline-block;height:1rem;position:relative;width:3rem}.spin span{animation-timing-function:cubic-bezier(0, 1, 1, 0);border-color:#fff;border-radius:50%;border-style:solid;border-width:0.1rem;height:0.8rem;position:absolute;top:0.1rem;width:0.8rem}.spin span:nth-child(1){background-color:#fc0;z-index:0;animation:spin1 2s infinite;left:0.1rem}.spin span:nth-child(2){background-color:#f00;z-index:1;animation:spin2 2s infinite;left:0.1rem}.spin span:nth-child(3){background-color:#000;z-index:1;animation:spin2 2s infinite;left:1.1rem}.spin span:nth-child(4){background-color:#666;z-index:0;animation:spin3 2s infinite;left:2.1rem}@keyframes spin1{0%{transform:scale(0)}100%{transform:scale(1)}}@keyframes spin2{0%{transform:translate(0, 0)}100%{transform:translate(1rem, 0)}}@keyframes spin3{0%{transform:scale(1)}100%{transform:scale(0)}}"}}}]);