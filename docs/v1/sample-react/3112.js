/*! For license information please see 3112.js.LICENSE.txt */
"use strict";(self.webpackChunk_public_ui_sample_react=self.webpackChunk_public_ui_sample_react||[]).push([[3112],{7759:(e,a,t)=>{t.d(a,{v:()=>n});var i=t(3409);const n=(e,a)=>{(0,i.a)(e,"_hasCloser",a)}},5716:(e,a,t)=>{t.d(a,{t:()=>c});var i=t(1511),n=t(4186);const o={error:"Fehler",warning:"Warnung",info:"Hinweis",success:"Erfolg",message:"Nachricht",close:"Schließen","form-description":"Formular-Felder, die mit einem Sternchen (*) gekennzeichnet sind, sind Pflichtangaben.",of:"von",characters:"Zeichen",new:"Neu","no-entries":"Es sind keine Einträge vorhanden.","change-order":"Sortierung von {{colLabel}} ändern","action-running":"Aktion wird ausgeführt...","action-done":"Aktion abgeschlossen",pagination:"Paginierung","page-first":"Direkt zur ersten Seite","page-back":"Eine Seite zurück","page-next":"Eine Seite weiter","page-last":"Direkt zur letzten Seite","entries-per-site":"Einträge pro Seite",page:"Seite","page-current":"Seite {{page}}","page-selected":"Seite {{page}} ist ausgewählt","page-per-site":"{{entries}} Einträge pro Seite","nav-maximize":"Navigation maximieren","nav-minimize":"Navigation minimieren","logo-description":"Logo {{orgShort}}. Bundesadler mit Flaggenstab und Schriftzug {{orgLong}}","open-link-in-tab":"Öffnet in neuem Tab.","kolibri-logo":"Logo von KoliBri","table-pagination-label":"Paginierung für die Tabelle {{label}}","avatar-alt":"Avatar von {{name}}","toast-close-all":"Alle schließen",version:"Versionsnummer","error-list":"Fehlerliste","error-list-message":"Bitte korrigieren Sie folgende Fehler:"},s={error:"Error",warning:"Warning",info:"Note",success:"Success",message:"Message",close:"Close","form-description":"Form fields marked with an asterisk (*) are mandatory.",of:"of",characters:"characters",new:"New","no-entries":"No entries available.","change-order":"Change order of {{colLabel}}","action-running":"Action is running...","action-done":"Action done",pagination:"Pagination","page-first":"Directly to the first page","page-back":"One page back","page-next":"One page further","page-last":"Directly to the last page","entries-per-site":"Entries per page",page:"Page","page-current":"Page {{page}}","page-selected":"Page {{page}} is selected","page-per-site":"{{entries}} entries per page","nav-maximize":"Maximize","nav-minimize":"Minimize","logo-description":"Logo {{orgShort}}. Federal eagle with flag staff and lettering {{orgLong}}","open-link-in-tab":"Opens in new tab.","kolibri-logo":"KoliBri logo","table-pagination-label":"Pagination for table {{label}}","avatar-alt":"Avatar of {{name}}","toast-close-all":"Close all",version:"Version number","error-list":"Error list","error-list-message":"Please correct the following errors"},r=e=>Object.keys(e).reduce(((a,t)=>(a[`kol-${t}`]=e[t],a)),{}),l=new Set([e=>e("en",r(s)),e=>e("de",r(o))]);let c=(e,a)=>{const t=(0,i.g)();let n=t.translate(e,a);return n===e&&(t.addTranslations(l),n=t.translate(e,a)),n};"test"===n.p&&(c=e=>e)},3112:(e,a,t)=>{t.r(a),t.d(a,{kol_card:()=>d});var i=t(4566),n=t(5716),o=t(7759),s=t(3409),r=t(88),l=t(5885),c=t(5109);const d=class{constructor(e){(0,i.r)(this,e),this.close=()=>{var e;void 0!==(null===(e=this._on)||void 0===e?void 0:e.onClose)&&this._on.onClose(new Event("Close"))},this.on={onClick:this.close},this.validateOnValue=e=>"object"==typeof e&&null!==e&&"function"==typeof e.onClose,this._on=void 0,this._hasCloser=!1,this._hasFooter=!1,this._heading=void 0,this._headline=void 0,this._label=void 0,this._level=1,this.state={_label:"…"}}render(){return(0,i.h)(i.H,{key:"124cc1ea88301507fbcf91a103b7bbd74c4be319",class:"kol-card"},(0,i.h)("div",{key:"6847cd72577caa30ac4c11f96d2aae9a0435a22d",class:"card"},(0,i.h)("div",{key:"87fc33df1894225fd0b36e8c06285eb00fe923d4",class:"header"},(0,i.h)(c.c,{key:"6020577acaa9f720b79a379e13e05fefe8c71117",_label:this.state._label,_level:this.state._level}),(0,i.h)("slot",{key:"c690fb86c22e71f41448c28166161f3b92953760",name:"header"})),(0,i.h)("div",{key:"46307628392de457a461d9695bc5f05d61773199",class:"content"},(0,i.h)("slot",{key:"e62cee3b83ebe65c2915db644d44277a171264cf",name:"content"}),(0,i.h)("slot",{key:"b0951657bd28f8e65d3ef1767bd678e1156689c8"})),this.state._hasFooter&&(0,i.h)("div",{key:"3e2ba79b5f0b9ddd6037ee2c03e1e6d9b47c8984",class:"footer"},(0,i.h)("slot",{key:"842ab1fa8b0255a29ed85e8a384e03db4c4ba955",name:"footer"})),this.state._hasCloser&&(0,i.h)(c.d,{key:"e3781c6f540a4a2bb6df9c5c4dbbf2476f3e61ea",class:"close",_hideLabel:!0,_icons:{left:{icon:"codicon codicon-close"}},_label:(0,n.t)("kol-close"),_on:this.on,_tooltipAlign:"left"})))}validateOn(e){this.validateOnValue(e)&&(0,s.s)(this,"_on",{onClose:e.onClose})}validateHasCloser(e){(0,o.v)(this,e)}validateHasFooter(e){((e,a)=>{(0,s.a)(e,"_hasFooter",a)})(this,e)}validateHeading(e){this.validateLabel(e)}validateHeadline(e){this.validateLabel(e)}validateLabel(e){(0,r.v)(this,e,{defaultValue:"…"})}validateLevel(e){(0,l.w)(this,e)}componentWillLoad(){this.validateHasCloser(this._hasCloser),this.validateHasFooter(this._hasFooter),this.validateLabel(this._label||this._heading||this._headline),this.validateLevel(this._level),this.validateOn(this._on)}static get watchers(){return{_on:["validateOn"],_hasCloser:["validateHasCloser"],_hasFooter:["validateHasFooter"],_heading:["validateHeading"],_headline:["validateHeadline"],_label:["validateLabel"],_level:["validateLevel"]}}};d.style={default:":host{--a11y-min-size:44px;background-color:white;color:black;font-family:Verdana}*{hyphens:auto;letter-spacing:inherit;word-break:break-word;word-spacing:inherit}[role=button],button:not([role=link]),.kol-input .input{min-height:var(--a11y-min-size);min-width:var(--a11y-min-size)}a,button,h1,h2,h3,h4,h5,h6,input,option,select,textarea{font-family:inherit;font-size:inherit}.visually-hidden{clip:rect(0 0 0 0);clip-path:inset(50%);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px}:is(a,button){background-color:transparent;border:none;margin:0;padding:0;width:100%;}[hidden]{display:none !important}:host{max-width:100%}*{box-sizing:border-box}.kol-span-wc{display:grid;place-items:center}.kol-span-wc>span{display:flex;place-items:center}a,button{cursor:pointer}.icon-only>.kol-span-wc>span>span{display:none}.hidden{display:none;visibility:hidden}:host>div.card{height:100%;position:relative}.close{position:absolute;top:0;right:0}"}},88:(e,a,t)=>{t.d(a,{a:()=>h,c:()=>l,h:()=>r,v:()=>d});var i=t(216),n=t(3409);const o=/[a-zA-Z0-9äöüÄÖÜß]/g,s=/^\d+$/;function r(e,a=1){return function(e){var a;return"string"==typeof e&&(null===(a=e.match(o))||void 0===a?void 0:a.length)||0}(e)>=a}function l(e){return s.test(e)}const c=new Set(["string"]),d=(e,a,t={})=>{(0,n.w)(e,"_label",(e=>"string"==typeof e),c,a,function(e){var a;return Object.assign(Object.assign({},e),{hooks:{afterPatch:(a,t,n,o)=>{var s,c;"function"==typeof(null===(s=e.hooks)||void 0===s?void 0:s.afterPatch)&&(null===(c=e.hooks)||void 0===c||c.afterPatch(a,t,n,o)),"string"==typeof a&&!1===r(a,3)&&!1===l(a)&&(0,i.a)(`The heading or label ("${a}") is not accessible. A label should consist of at least three readable characters.`),"string"==typeof a&&a.length>80&&(0,i.u)("A heading or label should not be longer than 80 characters.")},beforePatch:null===(a=e.hooks)||void 0===a?void 0:a.beforePatch}})}(t))},h=d},5885:(e,a,t)=>{t.d(a,{w:()=>n});var i=t(3409);const n=(e,a)=>{(0,i.w)(e,"_level",(e=>"number"==typeof e&&0<=e&&e<=6),new Set(["Number {0, 1, 2, 3, 4, 5, 6}"]),a,{defaultValue:1,required:!0})}}}]);