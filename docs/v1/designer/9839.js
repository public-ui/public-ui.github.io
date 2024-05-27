/*! For license information please see 9839.js.LICENSE.txt */
"use strict";(self.webpackChunk_public_ui_designer=self.webpackChunk_public_ui_designer||[]).push([[9839],{96815:(e,i,n)=>{n.d(i,{t:()=>c});var a=n(460),t=n(82559);const r={error:"Fehler",warning:"Warnung",info:"Hinweis",success:"Erfolg",message:"Nachricht",close:"Schließen","form-description":"Formular-Felder, die mit einem Sternchen (*) gekennzeichnet sind, sind Pflichtangaben.",of:"von",characters:"Zeichen",new:"Neu","no-entries":"Es sind keine Einträge vorhanden.","change-order":"Sortierung von {{colLabel}} ändern","action-running":"Aktion wird ausgeführt...","action-done":"Aktion abgeschlossen",pagination:"Paginierung","page-first":"Direkt zur ersten Seite","page-back":"Eine Seite zurück","page-next":"Eine Seite weiter","page-last":"Direkt zur letzten Seite","entries-per-site":"Einträge pro Seite",page:"Seite","page-current":"Seite {{page}}","page-selected":"Seite {{page}} ist ausgewählt","page-per-site":"{{entries}} Einträge pro Seite","nav-maximize":"Navigation maximieren","nav-minimize":"Navigation minimieren","logo-description":"Logo {{orgShort}}. Bundesadler mit Flaggenstab und Schriftzug {{orgLong}}","open-link-in-tab":"Öffnet in neuem Tab.","kolibri-logo":"Logo von KoliBri","table-pagination-label":"Paginierung für die Tabelle {{label}}","avatar-alt":"Avatar von {{name}}","toast-close-all":"Alle schließen",version:"Versionsnummer","error-list":"Fehlerliste","error-list-message":"Bitte korrigieren Sie folgende Fehler:"},o={error:"Error",warning:"Warning",info:"Note",success:"Success",message:"Message",close:"Close","form-description":"Form fields marked with an asterisk (*) are mandatory.",of:"of",characters:"characters",new:"New","no-entries":"No entries available.","change-order":"Change order of {{colLabel}}","action-running":"Action is running...","action-done":"Action done",pagination:"Pagination","page-first":"Directly to the first page","page-back":"One page back","page-next":"One page further","page-last":"Directly to the last page","entries-per-site":"Entries per page",page:"Page","page-current":"Page {{page}}","page-selected":"Page {{page}} is selected","page-per-site":"{{entries}} entries per page","nav-maximize":"Maximize","nav-minimize":"Minimize","logo-description":"Logo {{orgShort}}. Federal eagle with flag staff and lettering {{orgLong}}","open-link-in-tab":"Opens in new tab.","kolibri-logo":"KoliBri logo","table-pagination-label":"Pagination for table {{label}}","avatar-alt":"Avatar of {{name}}","toast-close-all":"Close all",version:"Version number","error-list":"Error list","error-list-message":"Please correct the following errors"},s=e=>Object.keys(e).reduce(((i,n)=>(i[`kol-${n}`]=e[n],i)),{}),l=new Set([e=>e("en",s(o)),e=>e("de",s(r))]);let c=(e,i)=>{const n=(0,a.g)();let t=n.translate(e,i);return t===e&&(n.addTranslations(l),t=n.translate(e,i)),t};"test"===t.p&&(c=e=>e)},49839:(e,i,n)=>{n.r(i),n.d(i,{kol_spin:()=>s});var a=n(74643),t=n(96815),r=n(65346),o=n(39240);const s=class{constructor(e){(0,a.r)(this,e),this.showToggled=!1,this._show=!1,this._variant="dot",this.state={_variant:"dot"}}render(){return(0,a.h)(a.H,{key:"c8b7873c8f1336b9514b7c5972bd7803c7a8b1d3",class:"kol-spin"},this.state._show?(0,a.h)("span",{"aria-busy":"true","aria-label":(0,t.t)("kol-action-running"),"aria-live":"polite",class:{spin:!0,[this.state._variant]:!0},role:"alert"},function(e){switch(e){case"cycle":return(0,a.h)("span",{class:"loader"});case"none":return(0,a.h)("slot",{name:"expert"});default:return(0,a.h)(a.F,null,(0,a.h)("span",{class:"bg-spin-1"}),(0,a.h)("span",{class:"bg-spin-2"}),(0,a.h)("span",{class:"bg-spin-3"}),(0,a.h)("span",{class:"bg-neutral"}))}}(this.state._variant)):this.showToggled&&(0,a.h)("span",{"aria-label":(0,t.t)("kol-action-done"),"aria-busy":"false","aria-live":"polite",role:"alert"}))}validateShow(e){this.showToggled=!0===this.state._show&&!1===this._show,(0,r.v)(this,e)}validateVariant(e){((e,i)=>{(0,o.w)(e,"_variant",(e=>"cycle"===e||"dot"===e||"none"===e),new Set(["cycle","dot","none"]),i)})(this,e)}componentWillLoad(){this.validateShow(this._show),this.validateVariant(this._variant)}static get watchers(){return{_show:["validateShow"],_variant:["validateVariant"]}}};s.style={default:':host{--a11y-min-size:44px;background-color:white;color:black;font-family:Verdana}*{hyphens:auto;letter-spacing:inherit;word-break:break-word;word-spacing:inherit}[role=button],button:not([role=link]),.kol-input .input{min-height:var(--a11y-min-size);min-width:var(--a11y-min-size)}a,button,h1,h2,h3,h4,h5,h6,input,option,select,textarea{font-family:inherit;font-size:inherit}.visually-hidden{clip:rect(0 0 0 0);clip-path:inset(50%);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px}:is(a,button){background-color:transparent;border:none;margin:0;padding:0;width:100%;}[hidden]{display:none !important}:host{max-width:100%}*{box-sizing:border-box}.kol-span-wc{display:grid;place-items:center}.kol-span-wc>span{display:flex;place-items:center}a,button{cursor:pointer}.icon-only>.kol-span-wc>span>span{display:none}.hidden{display:none;visibility:hidden}.spin.cycle{width:calc(48rem / var(--kolibri-root-font-size, 16));height:calc(48rem / var(--kolibri-root-font-size, 16))}.spin.cycle>.loader{display:block;width:100%;height:100%;border-radius:50%;position:relative;animation:2s linear infinite rotate}.spin.cycle>.loader::before{content:"";box-sizing:border-box;position:absolute;inset:0px;border-radius:50%;border:5px solid #333;animation:3s linear infinite prixClipFix}@keyframes rotate{100%{transform:rotate(360deg)}}@keyframes prixClipFix{0%{border-color:#fff;clip-path:polygon(50% 50%, 0 0, 0 0, 0 0, 0 0, 0 0)}25%{border-color:#666;clip-path:polygon(50% 50%, 0 0, 100% 0, 100% 0, 100% 0, 100% 0)}50%{border-color:#fc0;clip-path:polygon(50% 50%, 0 0, 100% 0, 100% 100%, 100% 100%, 100% 100%)}75%{border-color:red;clip-path:polygon(50% 50%, 0 0, 100% 0, 100% 100%, 0 100%, 0 100%)}100%{border-color:#000;clip-path:polygon(50% 50%, 0 0, 100% 0, 100% 100%, 0 100%, 0 0)}}@media (prefers-reduced-motion){.spin.cycle>.loader{animation-duration:4s}.spin.cycle>.loader::before{animation-duration:6s}}.spin.dot{height:calc(16rem / var(--kolibri-root-font-size, 16));width:calc(48rem / var(--kolibri-root-font-size, 16))}.spin.dot>span{animation-timing-function:cubic-bezier(0, 1, 1, 0);border-radius:50%;border:calc(1.6rem / var(--kolibri-root-font-size, 16)) solid #fff;height:calc(12.8rem / var(--kolibri-root-font-size, 16));position:absolute;top:calc(1.6rem / var(--kolibri-root-font-size, 16));width:calc(12.8rem / var(--kolibri-root-font-size, 16))}.spin.dot>span:first-child{background-color:#fc0;z-index:0;animation:1s infinite spin1;left:calc(0.16rem / var(--kolibri-root-font-size, 16))}.spin.dot>span:nth-child(2){background-color:red;z-index:1;animation:1s infinite spin2;left:calc(0.16rem / var(--kolibri-root-font-size, 16))}.spin.dot>span:nth-child(3){background-color:#000;z-index:1;animation:1s infinite spin2;left:calc(17.6rem / var(--kolibri-root-font-size, 16))}.spin.dot>span:nth-child(4){background-color:#666;z-index:0;animation:1s infinite spin3;left:calc(33.6rem / var(--kolibri-root-font-size, 16))}@keyframes spin1{0%{transform:scale(0)}100%{transform:scale(1)}}@keyframes spin2{0%{transform:translate(0, 0)}100%{transform:translate(calc(16rem / var(--kolibri-root-font-size, 16)), 0)}}@keyframes spin3{0%{transform:scale(1)}100%{transform:scale(0)}}@media (prefers-reduced-motion){.spin.dot>span:first-child,.spin.dot>span:nth-child(2),.spin.dot>span:nth-child(3),.spin.dot>span:nth-child(4){animation-duration:2s}}.spin{display:block;padding:calc(2rem / var(--kolibri-root-font-size, 16));position:relative}'}},65346:(e,i,n)=>{n.d(i,{v:()=>t});var a=n(39240);const t=(e,i,n)=>{(0,a.a)(e,"_show",i,n)}}}]);