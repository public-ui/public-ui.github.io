/*! For license information please see 8525.js.LICENSE.txt */
"use strict";(self.webpackChunk_public_ui_designer=self.webpackChunk_public_ui_designer||[]).push([[8525],{46623:(e,i,t)=>{t.d(i,{a:()=>c});var a=t(3537),n=t(43306);const o={error:"Fehler",warning:"Warnung",info:"Hinweis",success:"Erfolg",message:"Nachricht",close:"Schließen","form-description":"Formular-Felder, die mit einem Sternchen (*) gekennzeichnet sind, sind Pflichtangaben.",of:"von",characters:"Zeichen",new:"Neu","no-entries":"Es sind keine Einträge vorhanden.","change-order":"Sortierung von {{colLabel}} ändern","action-running":"Aktion wird ausgeführt...","action-done":"Aktion abgeschlossen","page-first":"Direkt zur ersten Seite","page-back":"Eine Seite zurück","page-next":"Eine Seite weiter","page-last":"Direkt zur letzten Seite","entries-per-site":"Einträge pro Seite","page-current":"Seite {{page}}","page-selected":"Seite {{page}} ist ausgewählt","page-per-site":"{{entries}} Einträge pro Seite","nav-maximize":"Navigation maximieren","nav-minimize":"Navigation minimieren","logo-description":"Logo {{orgShort}}. Bundesadler mit Flaggenstab und Schriftzug {{orgLong}}","open-link-in-tab":"Der Link wird in einem neuen Tab geöffnet.","kolibri-logo":"Logo von KoliBri"},r={error:"Error",warning:"Warning",info:"Note",success:"Success",message:"Message",close:"Close","form-description":"Form fields marked with an asterisk (*) are mandatory.",of:"of",characters:"characters",new:"New","no-entries":"No entries available.","change-order":"Change order of {{colLabel}}","action-running":"Action is running...","action-done":"Action done","page-first":"Directly to the first page","page-back":"One page back","page-next":"One page further","page-last":"Directly to the last page","entries-per-site":"Entries per page","page-current":"Page {{page}}","page-selected":"Page {{page}} is selected","page-per-site":"{{entries}} entries per page","nav-maximize":"Maximize","nav-minimize":"Minimize","logo-description":"Logo {{orgShort}}. Federal eagle with flag staff and lettering {{orgLong}}","open-link-in-tab":"The link will open in a new tab.","kolibri-logo":"KoliBri logo"},s=e=>Object.keys(e).reduce(((i,t)=>(i[`kol-${t}`]=e[t],i)),{}),l=new Set([e=>e("en",s(r)),e=>e("de",s(o))]),c=(e,i)=>{const t=(0,a.g)();if(void 0===t)return(0,n.d)("[I18n] I18nService not available! Please call the global register function."),e;let o=t.translate(e,i);return o===e&&((0,n.d)("[I18n] Locales not initialized! Initialize default locales automatically."),l.forEach((e=>e(((e,i)=>(t.addResourceBundle(e,i),e))))),o=t.translate(e,i)),o}},87670:(e,i,t)=>{t.r(i),t.d(i,{kol_alert:()=>d});var a=t(99459),n=t(8376),o=t(57758),r=t(46623),s=t(56420);const l=e=>(0,a.h)("kol-icon",{class:"heading-icon",_ariaLabel:"string"==typeof e.heading&&e.heading.length>0?"":e.ariaLabel,_icon:e.icon}),c=e=>{switch(e.type){case"error":return(0,a.h)(l,{ariaLabel:(0,r.a)("kol-error"),icon:"codicon codicon-error",heading:e.heading});case"info":return(0,a.h)(l,{ariaLabel:(0,r.a)("kol-info"),icon:"codicon codicon-info",heading:e.heading});case"warning":return(0,a.h)(l,{ariaLabel:(0,r.a)("kol-warning"),icon:"codicon codicon-warning",heading:e.heading});case"success":return(0,a.h)(l,{ariaLabel:(0,r.a)("kol-success"),icon:"codicon codicon-pass",heading:e.heading});default:return(0,a.h)(l,{ariaLabel:(0,r.a)("kol-message"),icon:"codicon codicon-comment",heading:e.heading})}},d=class{constructor(e){(0,a.r)(this,e),this.close=()=>{var e;void 0!==(null===(e=this._on)||void 0===e?void 0:e.onClose)&&this._on.onClose(new Event("Close"))},this.on={onClick:this.close},this.validateOnValue=e=>"object"==typeof e&&null!==e&&"function"==typeof e.onClose,this._alert=!1,this._hasCloser=!1,this._heading=void 0,this._level=1,this._on=void 0,this._type="default",this._variant="msg",this.state={_level:1}}render(){var e;if(this.state._alert){try{s.L.debug(["Navigator should vibrate ...",navigator.vibrate([100,75,100,75,100])])}catch(e){s.L.debug("Navigator does not support vibration.")}setTimeout((()=>{this.validateAlert(!1)}),1e4)}return(0,a.h)(a.H,null,(0,a.h)("div",{class:{[this.state._type]:!0,[this.state._variant]:!0},role:this.state._alert?"alert":void 0},(0,a.h)("div",{class:"heading"},(0,a.h)(c,{heading:this.state._heading,type:this.state._type}),(0,a.h)("div",null,"string"==typeof this.state._heading&&(null===(e=this.state._heading)||void 0===e?void 0:e.length)>0&&(0,a.h)("kol-heading-wc",{_headline:this.state._heading,_level:this.state._level}),"msg"===this._variant&&(0,a.h)("div",{class:"content"},(0,a.h)("slot",null))),this.state._hasCloser&&(0,a.h)("kol-button-wc",{class:"close",_icon:{left:{icon:"codicon codicon-close"}},_iconOnly:!0,_label:(0,r.a)("kol-close"),_on:this.on,_tooltipAlign:"left"})),"card"===this._variant&&(0,a.h)("div",{class:"content"},(0,a.h)("slot",null))))}validateAlert(e){(0,n.b)(this,"_alert",e)}validateHasCloser(e){(0,n.b)(this,"_hasCloser",e)}validateHeading(e){(0,n.w)(this,"_heading",e)}validateLevel(e){(0,o.w)(this,e)}validateOn(e){this.validateOnValue(e)&&(0,n.s)(this,"_on",{onClose:e.onClose})}validateType(e){(0,n.a)(this,"_type",(e=>"string"==typeof e&&("default"===e||"error"===e||"info"===e||"success"===e||"warning"===e)),new Set("String {success, info, warning, error}"),e)}validateVariant(e){(0,n.a)(this,"_variant",(e=>"card"===e||"msg"===e),new Set("AlertVariant {card, msg}"),e)}componentWillLoad(){this.validateAlert(this._alert),this.validateHasCloser(this._hasCloser),this.validateHeading(this._heading),this.validateLevel(this._level),this.validateOn(this._on),this.validateType(this._type),this.validateVariant(this._variant)}static get watchers(){return{_alert:["validateAlert"],_hasCloser:["validateHasCloser"],_heading:["validateHeading"],_level:["validateLevel"],_on:["validateOn"],_type:["validateType"],_variant:["validateVariant"]}}};d.style={default:":host{--a11y-min-size:44px}*{hyphens:auto;letter-spacing:inherit;word-break:break-word;word-spacing:inherit}*[role='button'],button:not([role='link']),input[type='color'],input[type='date'],input[type='datetime-local'],input[type='email'],input[type='file'],input[type='month'],input[type='number'],input[type='password'],input[type='search'],input[type='tel'],input[type='text'],input[type='time'],input[type='url'],input[type='week'],option,select,textarea{min-height:var(--a11y-min-size);min-width:var(--a11y-min-size)}:is(a,button){background-color:transparent;border:none;margin:0;padding:0;width:100%;}:host{max-width:100%}*{box-sizing:border-box}kol-span-wc{display:grid;place-items:center}kol-span-wc>span{display:flex;place-items:center}a,button,input[type='checkbox'],input[type='color'],input[type='file'],input[type='radio'],option,select{cursor:pointer;font-family:inherit;font-size:inherit}.icon-only>kol-span-wc>span>span{display:none}:host{display:block}:host>div{display:grid;place-items:stretch;overflow:hidden}.heading{display:grid;grid-template-columns:auto 1fr auto;place-items:center}.heading>div{display:grid;justify-self:start}.heading .heading-icon{align-items:center;align-self:stretch;display:inline-flex}"}},57758:(e,i,t)=>{t.d(i,{w:()=>n});var a=t(8376);const n=(e,i)=>{(0,a.a)(e,"_level",(e=>"number"==typeof e&&1<=e&&e<=6),new Set(["Number {1, 2, 3, 4, 5, 6}"]),i,{defaultValue:1,required:!0})}}}]);