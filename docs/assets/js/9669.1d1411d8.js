/*! For license information please see 9669.1d1411d8.js.LICENSE.txt */ "use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[9669],{30266:(e,i,n)=>{n.d(i,{a:()=>c});var a=n(11770),t=n(60090);const r={error:"Fehler",warning:"Warnung",info:"Hinweis",success:"Erfolg",message:"Nachricht",close:"Schlie\xdfen","form-description":"Formular-Felder, die mit einem Sternchen (*) gekennzeichnet sind, sind Pflichtangaben.",of:"von",characters:"Zeichen",new:"Neu","no-entries":"Es sind keine Eintr\xe4ge vorhanden.","change-order":"Sortierung von {{colLabel}} \xe4ndern","action-running":"Aktion wird ausgef\xfchrt...","action-done":"Aktion abgeschlossen","page-first":"Direkt zur ersten Seite","page-back":"Eine Seite zur\xfcck","page-next":"Eine Seite weiter","page-last":"Direkt zur letzten Seite","entries-per-site":"Eintr\xe4ge pro Seite","page-current":"Seite {{page}}","page-selected":"Seite {{page}} ist ausgew\xe4hlt","page-per-site":"{{entries}} Eintr\xe4ge pro Seite","nav-maximize":"Navigation maximieren","nav-minimize":"Navigation minimieren","logo-description":"Logo {{orgShort}}. Bundesadler mit Flaggenstab und Schriftzug {{orgLong}}","open-link-in-tab":"Der Link wird in einem neuen Tab ge\xf6ffnet.","kolibri-logo":"Logo von KoliBri"},o={error:"Error",warning:"Warning",info:"Note",success:"Success",message:"Message",close:"Close","form-description":"Form fields marked with an asterisk (*) are mandatory.",of:"of",characters:"characters",new:"New","no-entries":"No entries available.","change-order":"Change order of {{colLabel}}","action-running":"Action is running...","action-done":"Action done","page-first":"Directly to the first page","page-back":"One page back","page-next":"One page further","page-last":"Directly to the last page","entries-per-site":"Entries per page","page-current":"Page {{page}}","page-selected":"Page {{page}} is selected","page-per-site":"{{entries}} entries per page","nav-maximize":"Maximize","nav-minimize":"Minimize","logo-description":"Logo {{orgShort}}. Federal eagle with flag staff and lettering {{orgLong}}","open-link-in-tab":"The link will open in a new tab.","kolibri-logo":"KoliBri logo"},s=e=>Object.keys(e).reduce(((i,n)=>(i[`kol-${n}`]=e[n],i)),{}),l=new Set([e=>e("en",s(o)),e=>e("de",s(r))]),c=(e,i)=>{const n=(0,a.g)();if(void 0===n)return(0,t.d)("[I18n] I18nService not available! Please call the global register function."),e;let r=n.translate(e,i);return r===e&&((0,t.d)("[I18n] Locales not initialized! Initialize default locales automatically."),l.forEach((e=>e(((e,i)=>(n.addResourceBundle(e,i),e))))),r=n.translate(e,i)),r}},49669:(e,i,n)=>{n.r(i),n.d(i,{kol_spin:()=>o});var a=n(21622),t=n(85982),r=n(30266);const o=class{constructor(e){(0,a.r)(this,e),this.showToggled=!1,this._show=!1,this.state={}}render(){return(0,a.h)(a.H,null,this.state._show?(0,a.h)("span",{"aria-busy":"true","aria-label":(0,r.a)("kol-action-running"),"aria-live":"polite",class:"spin",role:"alert"},(0,a.h)("span",{class:"bg-spin-1"}),(0,a.h)("span",{class:"bg-spin-2"}),(0,a.h)("span",{class:"bg-spin-3"}),(0,a.h)("span",{class:"bg-neutral"})):this.showToggled&&(0,a.h)("span",{"aria-label":(0,r.a)("kol-action-done"),"aria-busy":"false","aria-live":"polite",role:"alert"}))}validateShow(e){this.showToggled=!0===this.state._show&&!1===this._show,(0,t.b)(this,"_show",e)}componentWillLoad(){this.validateShow(this._show)}static get watchers(){return{_show:["validateShow"]}}};o.style={default:":host{--a11y-min-size:44px}*{hyphens:auto;letter-spacing:inherit;word-break:break-word;word-spacing:inherit}[role='button'],button:not([role='link']),kol-input .input{min-height:var(--a11y-min-size);min-width:var(--a11y-min-size)}a,button,h1,h2,h3,h4,h5,h6,input,option,select,textarea{font-family:inherit}:is(a,button){background-color:transparent;border:none;margin:0;padding:0;width:100%;}:host{max-width:100%}*{box-sizing:border-box}kol-span-wc{display:grid;place-items:center}kol-span-wc>span{display:flex;place-items:center}a,button{cursor:pointer}a,button,input,option,select,textarea{font-family:inherit}.icon-only>kol-span-wc>span>span{display:none}.spin{display:inline-block;height:1rem;position:relative;width:3rem}.spin span{animation-timing-function:cubic-bezier(0, 1, 1, 0);border-radius:50%;border:0.1rem solid #fff;height:0.8rem;position:absolute;top:0.1rem;width:0.8rem}.spin span:first-child{background-color:#fc0;z-index:0;animation:2s infinite spin1;left:0.1rem}.spin span:nth-child(2){background-color:red;z-index:1;animation:2s infinite spin2;left:0.1rem}.spin span:nth-child(3){background-color:#000;z-index:1;animation:2s infinite spin2;left:1.1rem}.spin span:nth-child(4){background-color:#666;z-index:0;animation:2s infinite spin3;left:2.1rem}@keyframes spin1{0%{transform:scale(0)}100%{transform:scale(1)}}@keyframes spin2{0%{transform:translate(0, 0)}100%{transform:translate(1rem, 0)}}@keyframes spin3{0%{transform:scale(1)}100%{transform:scale(0)}}"}}}]);