/*! For license information please see 7884.js.LICENSE.txt */
"use strict";(self.webpackChunk_public_ui_sample_react=self.webpackChunk_public_ui_sample_react||[]).push([[7884],{4802:(e,t,i)=>{i.d(t,{F:()=>r});var a=i(4566),s=i(5109);const r=({_alert:e,_error:t,_hideError:i,_id:r})=>(0,a.h)(s.l,{"aria-hidden":"true",id:`${r}-error`,_alert:e,_type:"error",class:{error:!0,"visually-hidden":!0===i}},t)},5716:(e,t,i)=>{i.d(t,{t:()=>h});var a=i(1511),s=i(4186);const r={error:"Fehler",warning:"Warnung",info:"Hinweis",success:"Erfolg",message:"Nachricht",close:"Schließen","form-description":"Formular-Felder, die mit einem Sternchen (*) gekennzeichnet sind, sind Pflichtangaben.",of:"von",characters:"Zeichen",new:"Neu","no-entries":"Es sind keine Einträge vorhanden.","change-order":"Sortierung von {{colLabel}} ändern","action-running":"Aktion wird ausgeführt...","action-done":"Aktion abgeschlossen",pagination:"Paginierung","page-first":"Direkt zur ersten Seite","page-back":"Eine Seite zurück","page-next":"Eine Seite weiter","page-last":"Direkt zur letzten Seite","entries-per-site":"Einträge pro Seite",page:"Seite","page-current":"Seite {{page}}","page-selected":"Seite {{page}} ist ausgewählt","page-per-site":"{{entries}} Einträge pro Seite","nav-maximize":"Navigation maximieren","nav-minimize":"Navigation minimieren","logo-description":"Logo {{orgShort}}. Bundesadler mit Flaggenstab und Schriftzug {{orgLong}}","open-link-in-tab":"Öffnet in neuem Tab.","kolibri-logo":"Logo von KoliBri","table-pagination-label":"Paginierung für die Tabelle {{label}}","avatar-alt":"Avatar von {{name}}","toast-close-all":"Alle schließen",version:"Versionsnummer","error-list":"Fehlerliste","error-list-message":"Bitte korrigieren Sie folgende Fehler:"},n={error:"Error",warning:"Warning",info:"Note",success:"Success",message:"Message",close:"Close","form-description":"Form fields marked with an asterisk (*) are mandatory.",of:"of",characters:"characters",new:"New","no-entries":"No entries available.","change-order":"Change order of {{colLabel}}","action-running":"Action is running...","action-done":"Action done",pagination:"Pagination","page-first":"Directly to the first page","page-back":"One page back","page-next":"One page further","page-last":"Directly to the last page","entries-per-site":"Entries per page",page:"Page","page-current":"Page {{page}}","page-selected":"Page {{page}} is selected","page-per-site":"{{entries}} entries per page","nav-maximize":"Maximize","nav-minimize":"Minimize","logo-description":"Logo {{orgShort}}. Federal eagle with flag staff and lettering {{orgLong}}","open-link-in-tab":"Opens in new tab.","kolibri-logo":"KoliBri logo","table-pagination-label":"Pagination for table {{label}}","avatar-alt":"Avatar of {{name}}","toast-close-all":"Close all",version:"Version number","error-list":"Error list","error-list-message":"Please correct the following errors"},o=e=>Object.keys(e).reduce(((t,i)=>(t[`kol-${i}`]=e[i],t)),{}),l=new Set([e=>e("en",o(n)),e=>e("de",o(r))]);let h=(e,t)=>{const i=(0,a.g)();let s=i.translate(e,t);return s===e&&(i.addTranslations(l),s=i.translate(e,t)),s};"test"===s.p&&(h=e=>e)},7884:(e,t,i)=>{i.r(t),i.d(t,{kol_input:()=>l});var a=i(4566),s=i(5716),r=i(4186),n=i(4802),o=i(5109);const l=class{constructor(e){(0,a.r)(this,e),this.slotName="input",this.catchInputSlot=e=>{(0,r.h)(this.host,e,this.slotName)},this._alert=!0,this._currentLength=void 0,this._disabled=!1,this._error="",this._hasCounter=!1,this._hideError=!1,this._hideLabel=!1,this._hint="",this._icon=void 0,this._icons=void 0,this._id=void 0,this._label=void 0,this._maxLength=void 0,this._readOnly=!1,this._renderNoLabel=!1,this._required=!1,this._slotName=void 0,this._suggestions=void 0,this._smartButton=void 0,this._tooltipAlign="top",this._touched=!1}componentWillRender(){this.slotName=this._slotName?this._slotName:"input"}getIconsProp(){return this._icons||this._icon}getIconStyles(e){return e&&"object"==typeof e&&e.style?e.style:{}}render(){var e,t,i,l,h,d,c,g;const _=!this._readOnly&&"string"==typeof this._error&&this._error.length>0&&!0===this._touched,b=(0,r.s)(this._label),p="string"==typeof this._hint&&this._hint.length>0,u=!b&&this._hideLabel;return(0,a.h)(a.H,{key:"731a14d6ad6af139d339243dd7f9c97a30965e32",class:{"kol-input":!0,disabled:!0===this._disabled,error:!0===_,"read-only":!0===this._readOnly,required:!0===this._required,touched:!0===this._touched,"hidden-error":!0===this._hideError}},(0,a.h)("label",{key:"2dcc840dc6820f7bf47c192a6fc8370b991915e9",class:"input-label",id:u?void 0:`${this._id}-label`,hidden:u,htmlFor:this._id},(0,a.h)("span",{key:"9116aaa1552a3c91d6eaf7ae1fe4debe9acb11cb"},(0,a.h)("slot",{key:"8fdf110ba861cef54fb44510757d9681db2dcfd0",name:"label"}))),p&&(0,a.h)("span",{key:"d5fbd55c2eb45d2468658e9968c8936d3e26335d",class:"hint",id:`${this._id}-hint`},this._hint),(0,a.h)("div",{key:"cc81c027ed3b0721c334c67e8b3f3f1b18217d56",class:{input:!0,"icon-left":"object"==typeof(null===(e=this.getIconsProp())||void 0===e?void 0:e.left),"icon-right":"object"==typeof(null===(t=this.getIconsProp())||void 0===t?void 0:t.right)}},(null===(i=this.getIconsProp())||void 0===i?void 0:i.left)&&(0,a.h)(o.h,{key:"8441bdf3d3cd68a2cf73a09289643bddea06868d",_ariaLabel:"",_icons:(null===(l=this.getIconsProp())||void 0===l?void 0:l.left).icon,style:this.getIconStyles(null===(h=this.getIconsProp())||void 0===h?void 0:h.left)}),(0,a.h)("div",{key:"df1c78ab3f44659c7a186e693b8bc6c6ddace1c7",ref:this.catchInputSlot,id:this.slotName,class:"input-slot"}),"object"==typeof this._smartButton&&null!==this._smartButton&&(0,a.h)(o.d,{key:"23b120ff56896c2a4d3e08fff29f64bb5538110e",_customClass:this._smartButton._customClass,_disabled:this._smartButton._disabled,_icons:this._smartButton._icons,_hideLabel:!0,_id:this._smartButton._id,_label:this._smartButton._label,_on:this._smartButton._on,_tooltipAlign:this._smartButton._tooltipAlign,_variant:this._smartButton._variant}),(null===(d=this.getIconsProp())||void 0===d?void 0:d.right)&&(0,a.h)(o.h,{key:"a4cb4056a471745cbb311047af9fddebfeae4f9f",_ariaLabel:"",_icons:(null===(c=this.getIconsProp())||void 0===c?void 0:c.right).icon,style:this.getIconStyles(null===(g=this.getIconsProp())||void 0===g?void 0:g.right)})),u&&(0,a.h)(o.b,{key:"46ea79260ee647772f62ecc862d25d8b4cb97698","aria-hidden":"true",class:"input-tooltip",_align:this._tooltipAlign,_id:this._hideLabel?`${this._id}-label`:void 0,_label:this._label}),_&&(0,a.h)(n.F,{key:"e23a28ebee6fe3fd71a03b13f12ebb712c1dd09a",_alert:this._alert,_hideError:this._hideError,_error:this._error,_id:this._id}),Array.isArray(this._suggestions)&&this._suggestions.length>0&&(0,a.h)("datalist",{key:"d8592b8356ce0a6ee2f7cd25efe84df4b38e21e8",id:`${this._id}-list`},this._suggestions.map((e=>(0,a.h)("option",{value:e})))),this._hasCounter&&(0,a.h)("span",{key:"707ef6d6042e62504302d02aa6e4885111d93408",class:"counter","aria-atomic":"true","aria-live":"polite"},this._currentLength,this._maxLength&&(0,a.h)(a.F,{key:"e60efcdb88587d3937d95dc56bd228ef7ea95e21"},(0,a.h)("span",{key:"ca27c03984df238d0a7c78c8558879d94579628e","aria-label":(0,s.t)("kol-of"),role:"img"},"/"),this._maxLength)," ",(0,a.h)("span",{key:"08cda711b874e2294d663caa3c7144911929a0ba"},(0,s.t)("kol-characters"))))}get host(){return(0,a.g)(this)}}}}]);