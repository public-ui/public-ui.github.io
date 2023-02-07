/*! For license information please see 9587.ae2e1943.js.LICENSE.txt */ "use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[9587],{1292:(e,t,i)=>{i.d(t,{a:()=>h});var a=i(3154),s=i(6038);const n={error:"Fehler",warning:"Warnung",info:"Hinweis",success:"Erfolg",message:"Nachricht",close:"Schlie\xdfen","form-description":"Formular-Felder, die mit einem Sternchen (*) gekennzeichnet sind, sind Pflichtangaben.",of:"von",characters:"Zeichen",new:"Neu","no-entries":"Es sind keine Eintr\xe4ge vorhanden.","change-order":"Sortierung von {{colLabel}} \xe4ndern","action-running":"Aktion wird ausgef\xfchrt...","action-done":"Aktion abgeschlossen","page-first":"Direkt zur ersten Seite","page-back":"Eine Seite zur\xfcck","page-next":"Eine Seite weiter","page-last":"Direkt zur letzten Seite","entries-per-site":"Eintr\xe4ge pro Seite","page-current":"Seite {{page}}","page-selected":"Seite {{page}} ist ausgew\xe4hlt","page-per-site":"{{entries}} Eintr\xe4ge pro Seite","nav-maximize":"Navigation maximieren","nav-minimize":"Navigation minimieren","logo-description":"Logo {{orgShort}}. Bundesadler mit Flaggenstab und Schriftzug {{orgLong}}","open-link-in-tab":"Der Link wird in einem neuen Tab ge\xf6ffnet.","kolibri-logo":"Logo von KoliBri"},r={error:"Error",warning:"Warning",info:"Note",success:"Success",message:"Message",close:"Close","form-description":"Form fields marked with an asterisk (*) are mandatory.",of:"of",characters:"characters",new:"New","no-entries":"No entries available.","change-order":"Change order of {{colLabel}}","action-running":"Action is running...","action-done":"Action done","page-first":"Directly to the first page","page-back":"One page back","page-next":"One page further","page-last":"Directly to the last page","entries-per-site":"Entries per page","page-current":"Page {{page}}","page-selected":"Page {{page}} is selected","page-per-site":"{{entries}} entries per page","nav-maximize":"Maximize","nav-minimize":"Minimize","logo-description":"Logo {{orgShort}}. Federal eagle with flag staff and lettering {{orgLong}}","open-link-in-tab":"The link will open in a new tab.","kolibri-logo":"KoliBri logo"},l=e=>Object.keys(e).reduce(((t,i)=>(t[`kol-${i}`]=e[i],t)),{}),o=new Set([e=>e("en",l(r)),e=>e("de",l(n))]),h=(e,t)=>{const i=(0,a.g)();if(void 0===i)return(0,s.d)("[I18n] I18nService not available! Please call the global register function."),e;let n=i.translate(e,t);return n===e&&((0,s.d)("[I18n] Locales not initialized! Initialize default locales automatically."),o.forEach((e=>e(((e,t)=>(i.addResourceBundle(e,t),e))))),n=i.translate(e,t)),n}},9587:(e,t,i)=>{i.r(t),i.d(t,{kol_link_wc:()=>_});var a=i(396),s=i(1292),n=i(3035),r=i(6038),l=i(333),o=i(466),h=i(3188),d=i(7610),c=i(5946),g=i(4840);const _=class{constructor(e){(0,a.r)(this,e),this.nonce=(0,l.n)(),this.catchRef=e=>{this.ref=e,(0,h.a)(this.host,this.ref)},this.onClick=e=>{var t,i;"function"==typeof(null===(t=this.state._on)||void 0===t?void 0:t.onClick)&&(e.preventDefault(),(0,o.e)(e,this.ref),null===(i=this.state._on)||void 0===i||i.onClick(e,this.state._href))},this.getRenderValues=()=>{let e={};"string"==typeof this.state._selector&&(e={role:"link",tabIndex:0,onClick:()=>{(0,o.h)(this.state._selector)},onKeyPress:()=>{(0,o.h)(this.state._selector)}});const t="string"==typeof this.state._target&&"_self"!==this.state._target,i={href:"string"==typeof this.state._href&&this.state._href.length>0?this.state._href:"javascript:void(0)",target:"string"==typeof this.state._target&&this.state._target.length>0?this.state._target:void 0,rel:t?"noopener":void 0};return"image"!==this.state._useCase&&!0!==this.state._iconOnly||"string"==typeof this.state._ariaLabel&&0!==this.state._ariaLabel.length||(0,r.d)("[KolLink] Es muss ein Aria-Label gesetzt werden, wenn eine Grafik verlinkt oder der Icon-Only-Modus verwendet wird."),{isExternal:t,tagAttrs:i,goToProps:e}},this._ariaControls=void 0,this._ariaCurrent=void 0,this._ariaExpanded=void 0,this._ariaLabel="",this._ariaSelected=void 0,this._disabled=!1,this._href=void 0,this._icon=void 0,this._iconAlign="left",this._iconOnly=!1,this._label=void 0,this._on=void 0,this._role=void 0,this._selector=void 0,this._stealth=!1,this._tabIndex=void 0,this._target=void 0,this._targetDescription=(0,s.a)("kol-open-link-in-tab"),this._tooltipAlign="right",this._useCase="text",this.state={_ariaLabel:"",_href:"javascript:void(0)",_icon:{},_iconAlign:"left",_label:""}}render(){const{isExternal:e,tagAttrs:t,goToProps:i}=this.getRenderValues();return(0,a.h)(a.H,null,(0,a.h)("a",Object.assign({ref:this.catchRef},t,{"aria-controls":this.state._ariaControls,"aria-current":this.state._ariaCurrent,"aria-expanded":(0,o.g)(this.state._ariaExpanded),"aria-labelledby":"image"===this.state._useCase||!0===this.state._iconOnly?this.nonce:void 0,"aria-selected":(0,o.g)(this.state._ariaSelected),class:{disabled:!0===this.state._disabled,"skip ":!1!==this.state._stealth,"icon-only":!0===this.state._iconOnly,"external-link":e}},this.state._on,{onClick:this.onClick,onKeyPress:this.onClick},i,{role:this.state._role,tabIndex:this.state._tabIndex}),(0,a.h)("kol-span-wc",{_icon:this._icon,_iconOnly:this._iconOnly,_label:this.state._ariaLabel||this.state._label},(0,a.h)("slot",{name:"expert",slot:"expert"})),e&&(0,a.h)("kol-icon",{class:"external-link-icon",_ariaLabel:this.state._targetDescription,_icon:"fa-solid fa-arrow-up-right-from-square"})),(!0===this.state._iconOnly||"image"===this.state._useCase)&&(0,a.h)("kol-tooltip",{"aria-hidden":"true",_align:this.state._tooltipAlign,_id:this.nonce,_label:this.state._ariaLabel||this.state._label}))}validateAriaControls(e){(0,o.w)(this,"_ariaControls",e)}validateAriaCurrent(e){(0,o.a)(this,"_ariaCurrent",(e=>!0===e||"date"===e||"location"===e||"page"===e||"step"===e||"time"===e),new Set(["boolean","String {data, location, page, step, time}"]),e)}validateAriaExpanded(e){(0,o.b)(this,"_ariaExpanded",e)}validateAriaLabel(e){(0,c.v)(this,e)}validateAriaSelected(e){(0,o.b)(this,"_ariaSelected",e)}validateDisabled(e){(0,o.b)(this,"_disabled",e),!0===e&&(0,r.e)()}validateHref(e){(0,o.w)(this,"_href",e)}validateIcon(e){(0,d.v)(this,e)}validateIconAlign(e){(0,d.w)(this,e)}validateIconOnly(e){(0,o.b)(this,"_iconOnly",e)}validateLabel(e){(0,c.a)(this,e)}validateOn(e){"object"==typeof e&&null!==e&&Object.prototype.hasOwnProperty.call(e,"onClick")&&"function"==typeof e.onClick&&(this.state=Object.assign(Object.assign({},this.state),{_on:e}))}validateRole(e){(0,o.w)(this,"_role",e)}validateSelector(e){(0,o.w)(this,"_selector",e)}validateStealth(e){(0,o.b)(this,"_stealth",e)}validateTabIndex(e){(0,g.v)(this,e)}validateTarget(e){(0,o.w)(this,"_target",e)}validateTargetDescription(e){(0,o.w)(this,"_targetDescription",e)}validateTooltipAlign(e){(0,n.w)(this,"_tooltipAlign",e)}validateUseCase(e){"string"==typeof e&&(this.state=Object.assign(Object.assign({},this.state),{_useCase:e}))}componentWillLoad(){this.validateAriaControls(this._ariaControls),this.validateAriaCurrent(this._ariaCurrent),this.validateAriaExpanded(this._ariaExpanded),this.validateAriaLabel(this._ariaLabel),this.validateAriaSelected(this._ariaSelected),this.validateDisabled(this._disabled),this.validateHref(this._href),this.validateIcon(this._icon),this.validateIconAlign(this._iconAlign),this.validateIconOnly(this._iconOnly),this.validateLabel(this._label),this.validateOn(this._on),this.validateRole(this._role),this.validateSelector(this._selector),this.validateStealth(this._stealth),this.validateTabIndex(this._tabIndex),this.validateTarget(this._target),this.validateTargetDescription(this._targetDescription),this.validateTooltipAlign(this._tooltipAlign),this.validateUseCase(this._useCase)}get host(){return(0,a.g)(this)}static get watchers(){return{_ariaControls:["validateAriaControls"],_ariaCurrent:["validateAriaCurrent"],_ariaExpanded:["validateAriaExpanded"],_ariaLabel:["validateAriaLabel"],_ariaSelected:["validateAriaSelected"],_disabled:["validateDisabled"],_href:["validateHref"],_icon:["validateIcon"],_iconAlign:["validateIconAlign"],_iconOnly:["validateIconOnly"],_label:["validateLabel"],_on:["validateOn"],_role:["validateRole"],_selector:["validateSelector"],_stealth:["validateStealth"],_tabIndex:["validateTabIndex"],_target:["validateTarget"],_targetDescription:["validateTargetDescription"],_tooltipAlign:["validateTooltipAlign"],_useCase:["validateUseCase"]}}}}}]);