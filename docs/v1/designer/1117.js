/*! For license information please see 1117.js.LICENSE.txt */
"use strict";(self.webpackChunk_public_ui_designer=self.webpackChunk_public_ui_designer||[]).push([[1117],{85490:(e,a,t)=>{t.d(a,{a:()=>c});var i=t(98995),n=t(88089);const r={error:"Fehler",warning:"Warnung",info:"Hinweis",success:"Erfolg",message:"Nachricht",close:"Schließen","form-description":"Formular-Felder, die mit einem Sternchen (*) gekennzeichnet sind, sind Pflichtangaben.",of:"von",characters:"Zeichen",new:"Neu","no-entries":"Es sind keine Einträge vorhanden.","change-order":"Sortierung von {{colLabel}} ändern","action-running":"Aktion wird ausgeführt...","action-done":"Aktion abgeschlossen",pagination:"Paginierung","page-first":"Direkt zur ersten Seite","page-back":"Eine Seite zurück","page-next":"Eine Seite weiter","page-last":"Direkt zur letzten Seite","entries-per-site":"Einträge pro Seite","page-current":"Seite {{page}}","page-selected":"Seite {{page}} ist ausgewählt","page-per-site":"{{entries}} Einträge pro Seite","nav-maximize":"Navigation maximieren","nav-minimize":"Navigation minimieren","logo-description":"Logo {{orgShort}}. Bundesadler mit Flaggenstab und Schriftzug {{orgLong}}","open-link-in-tab":"Öffnet in neuem Tab.","kolibri-logo":"Logo von KoliBri","table-pagination-label":"Paginierung für die Tabelle {{label}}","avatar-alt":"Avatar von {{name}}","toast-close-all":"Alle schließen",version:"Versionsnummer"},o={error:"Error",warning:"Warning",info:"Note",success:"Success",message:"Message",close:"Close","form-description":"Form fields marked with an asterisk (*) are mandatory.",of:"of",characters:"characters",new:"New","no-entries":"No entries available.","change-order":"Change order of {{colLabel}}","action-running":"Action is running...","action-done":"Action done",pagination:"Pagination","page-first":"Directly to the first page","page-back":"One page back","page-next":"One page further","page-last":"Directly to the last page","entries-per-site":"Entries per page","page-current":"Page {{page}}","page-selected":"Page {{page}} is selected","page-per-site":"{{entries}} entries per page","nav-maximize":"Maximize","nav-minimize":"Minimize","logo-description":"Logo {{orgShort}}. Federal eagle with flag staff and lettering {{orgLong}}","open-link-in-tab":"Opens in new tab.","kolibri-logo":"KoliBri logo","table-pagination-label":"Pagination for table {{label}}","avatar-alt":"Avatar of {{name}}","toast-close-all":"Close all",version:"Version number"},s=e=>Object.keys(e).reduce(((a,t)=>(a[`kol-${t}`]=e[t],a)),{}),l=new Set([e=>e("en",s(o)),e=>e("de",s(r))]),c=(e,a)=>{const t=(0,i.g)();if(void 0===t)return(0,n.d)("[I18n] I18nService not available! Please call the global register function."),e;let r=t.translate(e,a);return r===e&&((0,n.d)("[I18n] Locales not initialized! Initialize default locales automatically."),l.forEach((e=>e(((e,a)=>(t.addResourceBundle(e,a),e))))),r=t.translate(e,a)),r}},21668:(e,a,t)=>{t.d(a,{v:()=>n});var i=t(67248);const n=(e,a,t)=>{(0,i.d)(e,"_src",a,t)}},1117:(e,a,t)=>{t.r(a),t.d(a,{kol_avatar_wc:()=>l});var i=t(25262),n=t(85490),r=t(21668),o=t(94972);const s=e=>0===e.length?"":e[0].toUpperCase(),l=class{constructor(e){(0,i.r)(this,e),this._src=void 0,this._label=void 0,this.state={_src:"",_label:"…"}}render(){return(0,i.h)(i.H,null,(0,i.h)("div",{"aria-label":(0,n.a)("kol-avatar-alt",{placeholders:{name:this.state._label}}),class:"container",role:"img"},this.state._src?(0,i.h)("img",{alt:"","aria-hidden":"true",class:"image",src:this.state._src}):(0,i.h)("span",{"aria-hidden":"true",class:"initials"},(e=>{const a=e.split(/\s+/),t=a.at(0),i=a.at(-1);return a.length>=2&&t&&i?`${s(t)}${s(i)}`:s(e)})(this.state._label.trim()))))}validateSrc(e){(0,r.v)(this,e)}validateLabel(e){(0,o.v)(this,e,{required:!0})}componentWillLoad(){this.validateSrc(this._src),this.validateLabel(this._label)}static get watchers(){return{_src:["validateSrc"],_label:["validateLabel"]}}}},94972:(e,a,t)=>{t.d(a,{a:()=>h,c:()=>l,h:()=>s,v:()=>g});var i=t(88089),n=t(67248);const r=/[a-zA-Z0-9äöüÄÖÜß]/g,o=/^\d+$/;function s(e,a=1){return function(e){var a;return"string"==typeof e&&(null===(a=e.match(r))||void 0===a?void 0:a.length)||0}(e)>=a}function l(e){return o.test(e)}const c=new Set(["string"]),g=(e,a,t={})=>{(0,n.w)(e,"_label",(e=>"string"==typeof e),c,a,function(e){var a;return Object.assign(Object.assign({},e),{hooks:{afterPatch:(a,t,n,r)=>{var o,c;"function"==typeof(null===(o=e.hooks)||void 0===o?void 0:o.afterPatch)&&(null===(c=e.hooks)||void 0===c||c.afterPatch(a,t,n,r)),"string"==typeof a&&!1===s(a,3)&&!1===l(a)&&(0,i.a)(`The heading or label ("${a}") is not accessible. A label should consist of at least three readable characters.`),"string"==typeof a&&a.length>80&&(0,i.u)("A heading or label should not be longer than 80 characters.")},beforePatch:null===(a=e.hooks)||void 0===a?void 0:a.beforePatch}})}(t))},h=g}}]);