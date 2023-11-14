/*! For license information please see 68571.3ac7e25e.js.LICENSE.txt */ "use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[68571],{39204:(e,a,t)=>{t.d(a,{v:()=>n});var i=t(44468);const n=(e,a)=>{(0,i.a)(e,"_hasCloser",a)}},56523:(e,a,t)=>{t.d(a,{a:()=>c});var i=t(65702),n=t(43536);const l={error:"Fehler",warning:"Warnung",info:"Hinweis",success:"Erfolg",message:"Nachricht",close:"Schlie\xdfen","form-description":"Formular-Felder, die mit einem Sternchen (*) gekennzeichnet sind, sind Pflichtangaben.",of:"von",characters:"Zeichen",new:"Neu","no-entries":"Es sind keine Eintr\xe4ge vorhanden.","change-order":"Sortierung von {{colLabel}} \xe4ndern","action-running":"Aktion wird ausgef\xfchrt...","action-done":"Aktion abgeschlossen",pagination:"Paginierung","page-first":"Direkt zur ersten Seite","page-back":"Eine Seite zur\xfcck","page-next":"Eine Seite weiter","page-last":"Direkt zur letzten Seite","entries-per-site":"Eintr\xe4ge pro Seite","page-current":"Seite {{page}}","page-selected":"Seite {{page}} ist ausgew\xe4hlt","page-per-site":"{{entries}} Eintr\xe4ge pro Seite","nav-maximize":"Navigation maximieren","nav-minimize":"Navigation minimieren","logo-description":"Logo {{orgShort}}. Bundesadler mit Flaggenstab und Schriftzug {{orgLong}}","open-link-in-tab":"Der Link wird in einem neuen Tab ge\xf6ffnet.","kolibri-logo":"Logo von KoliBri","sort-descending":"Spalte {{column}} absteigend sortiert","sort-ascending":"Spalte {{column}} aufsteigend sortiert","sort-none":"Spalte {{column}} nicht sortiert","table-pagination-label":"Paginierung f\xfcr die Tabelle {{label}}","avatar-alt":"Avatar von {{name}}","toast-close-all":"Alle schlie\xdfen"},s={error:"Error",warning:"Warning",info:"Note",success:"Success",message:"Message",close:"Close","form-description":"Form fields marked with an asterisk (*) are mandatory.",of:"of",characters:"characters",new:"New","no-entries":"No entries available.","change-order":"Change order of {{colLabel}}","action-running":"Action is running...","action-done":"Action done",pagination:"Pagination","page-first":"Directly to the first page","page-back":"One page back","page-next":"One page further","page-last":"Directly to the last page","entries-per-site":"Entries per page","page-current":"Page {{page}}","page-selected":"Page {{page}} is selected","page-per-site":"{{entries}} entries per page","nav-maximize":"Maximize navigation","nav-minimize":"Minimize navigation","logo-description":"Logo {{orgShort}}. Federal eagle with flag staff and lettering {{orgLong}}","open-link-in-tab":"The link will open in a new tab.","kolibri-logo":"KoliBri logo","sort-descending":"sorted column {{column}} descending","sort-ascending":"sorted column {{column}} ascending","sort-none":"column {{column}} not sorted","table-pagination-label":"Pagination for table {{label}}","avatar-alt":"Avatar of {{name}}","toast-close-all":"Close all"},r=e=>Object.keys(e).reduce(((a,t)=>(a[`kol-${t}`]=e[t],a)),{}),o=new Set([e=>e("en",r(s)),e=>e("de",r(l))]),c=(e,a)=>{const t=(0,i.g)();if(void 0===t)return(0,n.d)("[I18n] I18nService not available! Please call the global register function."),e;let l=t.translate(e,a);return l===e&&((0,n.d)("[I18n] Locales not initialized! Initialize default locales automatically."),o.forEach((e=>e(((e,a)=>(t.addResourceBundle(e,a),e))))),l=t.translate(e,a)),l}},68571:(e,a,t)=>{t.r(a),t.d(a,{kol_alert_wc:()=>u,kol_heading_wc:()=>b});var i=t(56809),n=t(56523),l=t(39204),s=t(39161),r=t(86712),o=t(44468),c=t(80194);const h=["default","info","success","warning","error"],d=["card","msg"],g=e=>(0,i.h)("kol-icon",{class:"heading-icon",_label:"string"==typeof e.label&&e.label.length>0?"":e.ariaLabel,_icons:e.icon}),v=e=>{switch(e.type){case"error":return(0,i.h)(g,{ariaLabel:(0,n.a)("kol-error"),icon:"codicon codicon-error",label:e.label});case"info":return(0,i.h)(g,{ariaLabel:(0,n.a)("kol-info"),icon:"codicon codicon-info",label:e.label});case"warning":return(0,i.h)(g,{ariaLabel:(0,n.a)("kol-warning"),icon:"codicon codicon-warning",label:e.label});case"success":return(0,i.h)(g,{ariaLabel:(0,n.a)("kol-success"),icon:"codicon codicon-pass",label:e.label});default:return(0,i.h)(g,{ariaLabel:(0,n.a)("kol-message"),icon:"codicon codicon-comment",label:e.label})}},u=class{constructor(e){(0,i.r)(this,e),this.close=()=>{var e;void 0!==(null===(e=this._on)||void 0===e?void 0:e.onClose)&&this._on.onClose(new Event("Close"))},this.on={onClick:this.close},this.validateOnValue=e=>"object"==typeof e&&null!==e&&"function"==typeof e.onClose,this._alert=!1,this._hasCloser=!1,this._label=void 0,this._level=1,this._on=void 0,this._type="default",this._variant="msg",this.state={_level:1}}render(){var e;if(this.state._alert){try{r.L.debug(["Navigator should vibrate ...",navigator.vibrate([100,75,100,75,100])])}catch(e){r.L.debug("Navigator does not support vibration.")}setTimeout((()=>{this.validateAlert(!1)}),1e4)}return(0,i.h)(i.H,{class:{[this.state._type]:!0,[this.state._variant]:!0,hasCloser:!!this.state._hasCloser},role:this.state._alert?"alert":void 0},(0,i.h)("div",{class:"heading"},(0,i.h)(v,{label:this.state._label,type:this.state._type}),(0,i.h)("div",null,"string"==typeof this.state._label&&(null===(e=this.state._label)||void 0===e?void 0:e.length)>0&&(0,i.h)("kol-heading-wc",{_label:this.state._label,_level:this.state._level}),"msg"===this._variant&&(0,i.h)("div",{class:"content"},(0,i.h)("slot",null))),this.state._hasCloser&&(0,i.h)("kol-button-wc",{class:"close",_hideLabel:!0,_icons:{left:{icon:"codicon codicon-close"}},_label:(0,n.a)("kol-close"),_on:this.on,_tooltipAlign:"left"})),"card"===this._variant&&(0,i.h)("div",{class:"content"},(0,i.h)("slot",null)))}validateAlert(e){(0,o.a)(this,"_alert",e)}validateHasCloser(e){(0,l.v)(this,e)}validateLabel(e){(0,s.v)(this,e)}validateLevel(e){(0,c.w)(this,e)}validateOn(e){this.validateOnValue(e)&&(0,o.s)(this,"_on",{onClose:e.onClose})}validateType(e){(0,o.w)(this,"_type",(e=>"string"==typeof e&&h.includes(e)),new Set(`String {${h.join(", ")}`),e)}validateVariant(e){(0,o.w)(this,"_variant",(e=>"string"==typeof e&&d.includes(e)),new Set(`AlertVariant {${d.join(", ")}`),e)}componentWillLoad(){this.validateAlert(this._alert),this.validateHasCloser(this._hasCloser),this.validateLabel(this._label),this.validateLevel(this._level),this.validateOn(this._on),this.validateType(this._type),this.validateVariant(this._variant)}static get watchers(){return{_alert:["validateAlert"],_hasCloser:["validateHasCloser"],_label:["validateLabel"],_level:["validateLevel"],_on:["validateOn"],_type:["validateType"],_variant:["validateVariant"]}}},b=class{constructor(e){(0,i.r)(this,e),this.renderHeadline=(e,a)=>{switch(a){case 1:return(0,i.h)("h1",{class:"headline"},e,(0,i.h)("slot",{name:"expert"}));case 2:return(0,i.h)("h2",{class:"headline"},e,(0,i.h)("slot",{name:"expert"}));case 3:return(0,i.h)("h3",{class:"headline"},e,(0,i.h)("slot",{name:"expert"}));case 4:return(0,i.h)("h4",{class:"headline"},e,(0,i.h)("slot",{name:"expert"}));case 5:return(0,i.h)("h5",{class:"headline"},e,(0,i.h)("slot",{name:"expert"}));case 6:return(0,i.h)("h6",{class:"headline"},e,(0,i.h)("slot",{name:"expert"}));default:return(0,i.h)("strong",{class:"headline"},e,(0,i.h)("slot",{name:"expert"}))}},this.renderSecondaryHeadline=(e,a)=>{switch(a){case 1:return(0,i.h)("span",{class:"secondary-headline"},e);case 2:return(0,i.h)("h2",{class:"secondary-headline"},e);case 3:return(0,i.h)("h3",{class:"secondary-headline"},e);case 4:return(0,i.h)("h4",{class:"secondary-headline"},e);case 5:return(0,i.h)("h5",{class:"secondary-headline"},e);case 6:return(0,i.h)("h6",{class:"secondary-headline"},e);default:return(0,i.h)("strong",{class:"secondary-headline"},e)}},this._label=void 0,this._level=1,this._secondaryHeadline=void 0,this.state={_label:"",_level:1}}validateLabel(e){(0,s.a)(this,e)}validateLevel(e){(0,c.w)(this,e)}validateSecondaryHeadline(e){(0,o.d)(this,"_secondaryHeadline",e)}componentWillLoad(){this.validateLabel(this._label),this.validateLevel(this._level),this.validateSecondaryHeadline(this._secondaryHeadline)}render(){return(0,i.h)(i.H,null,"string"==typeof this.state._secondaryHeadline&&this.state._secondaryHeadline.length>0?(0,i.h)("hgroup",null,this.renderHeadline(this.state._label,this.state._level),this.state._secondaryHeadline&&this.renderSecondaryHeadline(this.state._secondaryHeadline,this.state._level+1)):this.renderHeadline(this.state._label,this.state._level))}static get watchers(){return{_label:["validateLabel"],_level:["validateLevel"],_secondaryHeadline:["validateSecondaryHeadline"]}}}},39161:(e,a,t)=>{t.d(a,{a:()=>d,c:()=>o,h:()=>r,v:()=>h});var i=t(43536),n=t(44468);const l=/[a-zA-Z0-9\xe4\xf6\xfc\xc4\xd6\xdc\xdf]/g,s=/^\d+$/;function r(e,a=1){return function(e){var a;return"string"==typeof e&&(null===(a=e.match(l))||void 0===a?void 0:a.length)||0}(e)>=a}function o(e){return s.test(e)}const c=new Set(["string"]),h=(e,a,t={})=>{(0,n.w)(e,"_label",(e=>"string"==typeof e),c,a,function(e){var a;return{hooks:{afterPatch:(a,t,n,l)=>{var s,c;"function"==typeof(null===(s=e.hooks)||void 0===s?void 0:s.afterPatch)&&(null===(c=e.hooks)||void 0===c||c.afterPatch(a,t,n,l)),"string"==typeof a&&!1===r(a,3)&&!1===o(a)&&(0,i.a)(`The heading or label ("${a}") is not accessible. A label should consist of at least three readable characters.`),"string"==typeof a&&a.length>80&&(0,i.u)("A heading or label should not be longer than 80 characters.")},beforePatch:null===(a=e.hooks)||void 0===a?void 0:a.beforePatch}}}(t))},d=h},80194:(e,a,t)=>{t.d(a,{w:()=>l});var i=t(44468);const n=[0,1,2,3,4,5,6],l=(e,a)=>{(0,i.w)(e,"_level",(e=>"number"==typeof e&&n.includes(e)),new Set([`Number {${n.join(", ")}`]),a,{defaultValue:1,required:!0})}}}]);