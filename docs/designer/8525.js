/*! For license information please see 8525.js.LICENSE.txt */
"use strict";(self.webpackChunk_public_ui_designer=self.webpackChunk_public_ui_designer||[]).push([[8525],{9200:(e,i,a)=>{a.d(i,{a:()=>c});var r=a(5142),o=a(65815);const n={error:"Fehler",warning:"Warnung",info:"Hinweis",success:"Erfolg",message:"Nachricht",close:"Schließen","form-description":"Formular-Felder, die mit einem Sternchen (*) gekennzeichnet sind, sind Pflichtangaben.",of:"von",characters:"Zeichen",new:"Neu","no-entries":"Es sind keine Einträge vorhanden.","change-order":"Sortierung von {{colLabel}} ändern","action-running":"Aktion wird ausgeführt...","action-done":"Aktion abgeschlossen","page-first":"Direkt zur ersten Seite","page-back":"Eine Seite zurück","page-next":"Eine Seite weiter","page-last":"Direkt zur letzten Seite","entries-per-site":"Einträge pro Seite","page-current":"Seite {{page}}","page-selected":"Seite {{page}} ist ausgewählt","page-per-site":"{{entries}} Einträge pro Seite","nav-maximize":"Navigation maximieren","nav-minimize":"Navigation minimieren","logo-description":"Logo {{orgShort}}. Bundesadler mit Flaggenstab und Schriftzug {{orgLong}}","open-link-in-tab":"Der Link wird in einem neuen Tab geöffnet.","kolibri-logo":"Logo von KoliBri"},t={error:"Error",warning:"Warning",info:"Note",success:"Success",message:"Message",close:"Close","form-description":"Form fields marked with an asterisk (*) are mandatory.",of:"of",characters:"characters",new:"New","no-entries":"No entries available.","change-order":"Change order of {{colLabel}}","action-running":"Action is running...","action-done":"Action done","page-first":"Directly to the first page","page-back":"One page back","page-next":"One page further","page-last":"Directly to the last page","entries-per-site":"Entries per page","page-current":"Page {{page}}","page-selected":"Page {{page}} is selected","page-per-site":"{{entries}} entries per page","nav-maximize":"Maximize","nav-minimize":"Minimize","logo-description":"Logo {{orgShort}}. Federal eagle with flag staff and lettering {{orgLong}}","open-link-in-tab":"The link will open in a new tab.","kolibri-logo":"KoliBri logo"},l=e=>Object.keys(e).reduce(((i,a)=>(i[`kol-${a}`]=e[a],i)),{}),s=new Set([e=>e("en",l(t)),e=>e("de",l(n))]),c=(e,i)=>{const a=(0,r.g)();if(void 0===a)return(0,o.d)("[I18n] I18nService not available! Please call the global register function."),e;let n=a.translate(e,i);return n===e&&((0,o.d)("[I18n] Locales not initialized! Initialize default locales automatically."),s.forEach((e=>e(((e,i)=>(a.addResourceBundle(e,i),e))))),n=a.translate(e,i)),n}},87670:(e,i,a)=>{a.r(i),a.d(i,{kol_alert:()=>d});var r=a(99459),o=a(80019),n=a(68106),t=a(9200),l=a(13136);const s=e=>(0,r.h)("kol-icon",{class:"heading-icon",_ariaLabel:"string"==typeof e.heading&&e.heading.length>0?"":e.ariaLabel,_icon:e.icon}),c=e=>{switch(e.type){case"error":return(0,r.h)(s,{ariaLabel:(0,t.a)("kol-error"),icon:"fa-solid fa-circle-xmark",heading:e.heading});case"info":return(0,r.h)(s,{ariaLabel:(0,t.a)("kol-info"),icon:"fa-solid fa-circle-info",heading:e.heading});case"warning":return(0,r.h)(s,{ariaLabel:(0,t.a)("kol-warning"),icon:"fa-solid fa-triangle-exclamation",heading:e.heading});case"success":return(0,r.h)(s,{ariaLabel:(0,t.a)("kol-success"),icon:"fa-solid fa-circle-check",heading:e.heading});default:return(0,r.h)(s,{ariaLabel:(0,t.a)("kol-message"),icon:"fa-regular fa-comment",heading:e.heading})}},d=class{constructor(e){(0,r.r)(this,e),this.close=()=>{var e;void 0!==(null===(e=this._on)||void 0===e?void 0:e.onClose)&&this._on.onClose(new Event("Close"))},this.on={onClick:this.close},this.validateOnValue=e=>"object"==typeof e&&null!==e&&"function"==typeof e.onClose,this._alert=!1,this._hasCloser=!1,this._heading=void 0,this._level=1,this._on=void 0,this._type="default",this._variant="msg",this.state={_level:1}}render(){var e;if(this.state._alert){try{l.L.debug(["Navigator should vibrate ...",navigator.vibrate([100,75,100,75,100])])}catch(e){l.L.debug("Navigator does not support vibration.")}setTimeout((()=>{this.validateAlert(!1)}),1e4)}return(0,r.h)(r.H,null,(0,r.h)("div",{class:{[this.state._type]:!0,[this.state._variant]:!0},role:this.state._alert?"alert":void 0},(0,r.h)("div",{class:"heading"},(0,r.h)(c,{heading:this.state._heading,type:this.state._type}),(0,r.h)("div",null,"string"==typeof this.state._heading&&(null===(e=this.state._heading)||void 0===e?void 0:e.length)>0&&(0,r.h)("kol-heading-wc",{_headline:this.state._heading,_level:this.state._level}),"msg"===this._variant&&(0,r.h)("div",{class:"content"},(0,r.h)("slot",null))),this.state._hasCloser&&(0,r.h)("kol-button-wc",{class:"close",_icon:{left:{icon:"fa-solid fa-xmark"}},_iconOnly:!0,_label:(0,t.a)("kol-close"),_on:this.on,_tooltipAlign:"left"})),"card"===this._variant&&(0,r.h)("div",{class:"content"},(0,r.h)("slot",null))))}validateAlert(e){(0,o.b)(this,"_alert",e)}validateHasCloser(e){(0,o.b)(this,"_hasCloser",e)}validateHeading(e){(0,o.w)(this,"_heading",e)}validateLevel(e){(0,n.w)(this,e)}validateOn(e){this.validateOnValue(e)&&(0,o.s)(this,"_on",{onClose:e.onClose})}validateType(e){(0,o.a)(this,"_type",(e=>"string"==typeof e&&("default"===e||"error"===e||"info"===e||"success"===e||"warning"===e)),new Set("String {success, info, warning, error}"),e)}validateVariant(e){(0,o.a)(this,"_variant",(e=>"card"===e||"msg"===e),new Set("AlertVariant {card, msg}"),e)}componentWillLoad(){this.validateAlert(this._alert),this.validateHasCloser(this._hasCloser),this.validateHeading(this._heading),this.validateLevel(this._level),this.validateOn(this._on),this.validateType(this._type),this.validateVariant(this._variant)}static get watchers(){return{_alert:["validateAlert"],_hasCloser:["validateHasCloser"],_heading:["validateHeading"],_level:["validateLevel"],_on:["validateOn"],_type:["validateType"],_variant:["validateVariant"]}}};d.style={default:":host{--kolibri-border-color:#666;--kolibri-border-radius:0.125rem;--kolibri-border-width:1px;--kolibri-color-error:#f44336;--kolibri-color-info:#2196f3;--kolibri-color-success:#4caf50;--kolibri-color-warning:#ff9800;--kolibri-color-primary:#3f51b5;--kolibri-color-secondary:#ff4081;--kolibri-color-normal:#9e9e9e;--kolibri-color-danger:#f44336;--kolibri-color-ghost:#f5f5f5;--kolibri-color-disabled:#bdbdbd;--kolibri-color-text:#222222;--kolibri-color-visited:#9c27b0;--kolibri-font-family:Verdana, Arial, Tahoma, Helvetica, sans-serif;--kolibri-font-size:16px;--kolibri-spacing:0.25rem}:host *{hyphens:auto;letter-spacing:inherit;word-break:break-word;word-spacing:inherit}a,button{background-color:transparent;border:none;font-size:inherit;margin:0;padding:0;transition-duration:0.5s;transition-property:background-color, color, border-color}:host{font-family:var(--kolibri-font-family);font-size:var(--kolibri-font-size)}*{box-sizing:border-box}kol-icon{color:inherit}kol-span-wc{display:grid;gap:var(--kolibri-spacing);place-items:center}kol-span-wc>span{display:flex;gap:var(--kolibri-spacing);place-items:center}kol-span-wc>kol-icon,kol-span-wc>span>kol-icon{display:inline-grid;place-items:center;width:1em;height:1em}a,button,input,select,textarea{appearance:none;cursor:pointer}.icon-only>kol-span-wc>span>span{display:none}h1,h2,h3,h4,h5,h6{font-family:var(--kolibri-font-family);font-size:var(--kolibri-font-size);margin:0;padding:0}:host{display:inline-block}:host>div{background-color:white;border-radius:var(--kolibri-border-radius);border-style:solid;border-width:calc(2 * var(--kolibri-border-width));display:inline-grid;place-items:stretch;overflow:hidden;width:100%}.heading{display:flex;gap:var(--kolibri-spacing);place-items:center}.heading>div{display:grid;gap:var(--kolibri-spacing);margin:var(--kolibri-spacing) var(--kolibri-spacing) var(--kolibri-spacing) 0}.heading .heading-icon{align-items:center;align-self:stretch;display:inline-flex;color:white;padding:calc(2 * var(--kolibri-spacing))}.card>.heading .heading-icon{border-radius:0 0 var(--kolibri-border-radius) 0}.heading .close button{min-width:44px;min-height:44px}.card>.content{padding:var(--kolibri-spacing)}.default{border-color:var(--kolibri-color-normal)}.default .heading-icon{background-color:var(--kolibri-color-normal)}.error{border-color:var(--kolibri-color-error)}.error .heading-icon{background-color:var(--kolibri-color-error)}.info{border-color:var(--kolibri-color-info)}.info .heading-icon{background-color:var(--kolibri-color-info)}.success{border-color:var(--kolibri-color-success)}.success .heading-icon{background-color:var(--kolibri-color-success)}.warning{border-color:var(--kolibri-color-warning)}.warning .heading-icon{background-color:var(--kolibri-color-warning)}"}},68106:(e,i,a)=>{a.d(i,{w:()=>o});var r=a(80019);const o=(e,i)=>{(0,r.a)(e,"_level",(e=>"number"==typeof e&&1<=e&&e<=6),new Set(["Number {1, 2, 3, 4, 5, 6}"]),i,{defaultValue:1,required:!0})}}}]);