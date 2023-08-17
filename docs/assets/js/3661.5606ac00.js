/*! For license information please see 3661.5606ac00.js.LICENSE.txt */ "use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[3661],{42193:(t,e,i)=>{i.d(e,{v:()=>r});var a=i(35532);const n=new Set(['"left", "right"']),s=new Set(['"bottom", "top"']),o=new Set([...n,...s]),r=(t,e,i)=>{(0,a.w)(t,e,(t=>"bottom"===t||"left"===t||"right"===t||"top"===t),o,i,{defaultValue:"top"})}},41095:(t,e,i)=>{i.d(e,{a:()=>o,b:()=>r,c:()=>l,v:()=>n});var a=i(35532);const n=(t,e)=>{(0,a.d)(t,"_ariaControls",e)},s=(t,e,i)=>{(0,a.w)(t,e,(t=>"date"===t||"location"===t||"page"===t||"step"===t||"time"===t||!0===t||!1===t),new Set(["String {data, location, page, step, time}","boolean"]),i)},o=(t,e)=>{s(t,"_ariaCurrent",e)},r=(t,e)=>{s(t,"_listenAriaCurrent",e)},l=(t,e)=>{(0,a.d)(t,"_role",e)}},99921:(t,e,i)=>{i.d(e,{v:()=>n});var a=i(35532);const n=(t,e)=>{(0,a.a)(t,"_hideLabel",e)}},59593:(t,e,i)=>{i.d(e,{a:()=>d});var a=i(73897),n=i(34885);const s={error:"Fehler",warning:"Warnung",info:"Hinweis",success:"Erfolg",message:"Nachricht",close:"Schlie\xdfen","form-description":"Formular-Felder, die mit einem Sternchen (*) gekennzeichnet sind, sind Pflichtangaben.",of:"von",characters:"Zeichen",new:"Neu","no-entries":"Es sind keine Eintr\xe4ge vorhanden.","change-order":"Sortierung von {{colLabel}} \xe4ndern","action-running":"Aktion wird ausgef\xfchrt...","action-done":"Aktion abgeschlossen","page-first":"Direkt zur ersten Seite","page-back":"Eine Seite zur\xfcck","page-next":"Eine Seite weiter","page-last":"Direkt zur letzten Seite","entries-per-site":"Eintr\xe4ge pro Seite","page-current":"Seite {{page}}","page-selected":"Seite {{page}} ist ausgew\xe4hlt","page-per-site":"{{entries}} Eintr\xe4ge pro Seite","nav-maximize":"Navigation maximieren","nav-minimize":"Navigation minimieren","logo-description":"Logo {{orgShort}}. Bundesadler mit Flaggenstab und Schriftzug {{orgLong}}","open-link-in-tab":"Der Link wird in einem neuen Tab ge\xf6ffnet.","kolibri-logo":"Logo von KoliBri","sort-descending":"Spalte {{column}} absteigend sortiert","sort-ascending":"Spalte {{column}} aufsteigend sortiert","sort-none":"Spalte {{column}} nicht sortiert","avatar-alt":"Avatar von {{name}}"},o={error:"Error",warning:"Warning",info:"Note",success:"Success",message:"Message",close:"Close","form-description":"Form fields marked with an asterisk (*) are mandatory.",of:"of",characters:"characters",new:"New","no-entries":"No entries available.","change-order":"Change order of {{colLabel}}","action-running":"Action is running...","action-done":"Action done","page-first":"Directly to the first page","page-back":"One page back","page-next":"One page further","page-last":"Directly to the last page","entries-per-site":"Entries per page","page-current":"Page {{page}}","page-selected":"Page {{page}} is selected","page-per-site":"{{entries}} entries per page","nav-maximize":"Maximize","nav-minimize":"Minimize","logo-description":"Logo {{orgShort}}. Federal eagle with flag staff and lettering {{orgLong}}","open-link-in-tab":"The link will open in a new tab.","kolibri-logo":"KoliBri logo","sort-descending":"sorted column {{column}} descending","sort-ascending":"sorted column {{column}} ascending","sort-none":"column {{column}} not sorted","avatar-alt":"Avatar of {{name}}"},r=t=>Object.keys(t).reduce(((e,i)=>(e[`kol-${i}`]=t[i],e)),{}),l=new Set([t=>t("en",r(o)),t=>t("de",r(s))]),d=(t,e)=>{const i=(0,a.g)();if(void 0===i)return(0,n.d)("[I18n] I18nService not available! Please call the global register function."),t;let s=i.translate(t,e);return s===t&&((0,n.d)("[I18n] Locales not initialized! Initialize default locales automatically."),l.forEach((t=>t(((t,e)=>(i.addResourceBundle(t,e),t))))),s=i.translate(t,e)),s}},98082:(t,e,i)=>{i.d(e,{i:()=>r,v:()=>l,w:()=>d});var a=i(35532),n=i(91892);const s=(t,e,i)=>{(0,n.c)(i)?t[e]=i:(0,n.i)(i,1)&&(t[e]={icon:i})},o=t=>{var e,i,a,o,r,l,d;if(null===(e=t.nextState)||void 0===e?void 0:e.has("_icon")){const e=null===(i=t.nextState)||void 0===i?void 0:i.get("_icon"),r=(null===(a=t.nextState)||void 0===a?void 0:a.get("_iconAlign"))||t.state._iconAlign;null===(o=t.nextState)||void 0===o||o.set("_icon",((t,e)=>{let i={};return(0,n.i)(t,1)?i="right"===e?{right:{icon:t}}:{left:{icon:t}}:"object"==typeof t&&null!==t&&(s(i,"top",t.top),s(i,"right",t.right),s(i,"bottom",t.bottom),s(i,"left",t.left)),i})(e,r))}else if(null===(r=t.nextState)||void 0===r?void 0:r.has("_iconAlign")){const e=t.state._iconAlign;null===(l=t.nextState)||void 0===l||l.set("_icon",{[e]:void 0,[null===(d=t.nextState)||void 0===d?void 0:d.get("_iconAlign")]:t.state._icon[e]})}},r=t=>"object"==typeof t&&null!==t&&(void 0===t.style||(0,n.b)(t.style))&&(0,n.i)(t.icon,1),l=(t,e)=>{(0,a.o)(e,(()=>{try{e=(0,a.p)(e)}catch(t){}(0,a.w)(t,"_icon",(t=>null===t||(0,n.i)(t,1)||"object"==typeof t&&null!==t&&((0,n.i)(t.left,1)||r(t.left)||(0,n.i)(t.right,1)||r(t.right)||(0,n.i)(t.top,1)||r(t.top)||(0,n.i)(t.bottom,1)||r(t.bottom))),new Set(["KoliBriIcon"]),e,{hooks:{beforePatch:(e,i)=>{null===e&&i.set("_icon",{}),o(t)}},required:!0})}))},d=(t,e)=>{(0,a.w)(t,"_iconAlign",(t=>"left"===t||"right"===t),new Set(["Alignment {left, right, top, bottom}"]),e,{hooks:{beforePatch:()=>{o(t)}}})}},33661:(t,e,i)=>{i.r(e),i.d(e,{kol_link_wc:()=>_});var a=i(29004),n=i(59593),s=i(41095),o=i(35532),r=i(99921),l=i(98082),d=i(90988),h=i(34885),c=i(91892),g=i(90073),v=i(49725);const _=class{constructor(t){(0,a.r)(this,t),this.catchRef=t=>{this.ref=t,(0,c.a)(this.host,this.ref)},this.onClick=t=>{var e,i;"function"==typeof(null===(e=this.state._on)||void 0===e?void 0:e.onClick)&&(t.preventDefault(),t.stopPropagation(),(0,o.f)(t,this.ref),null===(i=this.state._on)||void 0===i||i.onClick(t,this.state._href))},this.getRenderValues=()=>{let t={};"string"==typeof this.state._selector&&(t={role:"link",tabIndex:0,onClick:()=>{(0,o.j)(this.state._selector)},onKeyPress:()=>{(0,o.j)(this.state._selector)}});const e="string"==typeof this.state._target&&"_self"!==this.state._target,i={href:"string"==typeof this.state._href&&this.state._href.length>0?this.state._href:"javascript:void(0);",target:"string"==typeof this.state._target&&this.state._target.length>0?this.state._target:void 0,rel:e?"noopener":void 0};return"image"!==this.state._useCase&&!0!==this.state._hideLabel||this.state._label||(0,h.d)("[KolLink] Es muss ein Aria-Label gesetzt werden, wenn eine Grafik verlinkt oder der _hide-label gesetzt ist."),{isExternal:e,tagAttrs:i,goToProps:t}},this.unsubscribeAriaCurrentSubject=o.h.subscribe((t=>{try{this.state._listenAriaCurrent&&this.state._listenAriaCurrent===t.ariaCurrent&&(this.state._href===t.href?this.validateAriaCurrent(t.ariaCurrent):this.validateAriaCurrent(!1))}catch(t){(0,h.g)("The aria-current event is not valid.")}})),this._ariaControls=void 0,this._ariaCurrent=void 0,this._ariaExpanded=void 0,this._ariaLabel=void 0,this._ariaSelected=void 0,this._disabled=!1,this._download=!1,this._hideLabel=!1,this._href=void 0,this._icon=void 0,this._iconAlign=void 0,this._iconOnly=void 0,this._label=void 0,this._listenAriaCurrent=void 0,this._on=void 0,this._role=void 0,this._selector=void 0,this._stealth=!1,this._tabIndex=void 0,this._target=void 0,this._targetDescription=(0,n.a)("kol-open-link-in-tab"),this._tooltipAlign="right",this._useCase="text",this.state={_href:"\u2026",_icon:{},_label:!1}}render(){const{isExternal:t,tagAttrs:e,goToProps:i}=this.getRenderValues(),n=!1===this.state._label;return(0,a.h)(a.H,null,(0,a.h)("a",Object.assign({ref:this.catchRef},e,{"aria-controls":this.state._ariaControls,"aria-current":this.state._ariaCurrent,"aria-expanded":(0,o.i)(this.state._ariaExpanded),"aria-label":this.state._hideLabel&&"string"==typeof this.state._label?this.state._label:void 0,"aria-selected":(0,o.i)(this.state._ariaSelected),class:{disabled:!0===this.state._disabled,"skip ":!1!==this.state._stealth,"icon-only":!0===this.state._hideLabel,"hide-label":!0===this.state._hideLabel,"external-link":t}},this.state._on,{onClick:this.onClick,onKeyPress:this.onClick},i,{role:this.state._role,tabIndex:this.state._tabIndex}),(0,a.h)("kol-span-wc",{_icon:this.state._icon,_hideLabel:this.state._hideLabel,_label:!n&&(this.state._label||this.state._href)},(0,a.h)("slot",{name:"expert",slot:"expert"})),t&&(0,a.h)("kol-icon",{class:"external-link-icon",_label:this.state._targetDescription,_icon:"codicon codicon-link-external"})),(0,a.h)("kol-tooltip",{"aria-hidden":"true",hidden:n||!this.state._hideLabel,_align:this.state._tooltipAlign,_label:this.state._label||this.state._href}))}validateAriaControls(t){(0,s.v)(this,t)}validateAriaCurrent(t){(0,s.a)(this,t)}validateAriaExpanded(t){(0,o.a)(this,"_ariaExpanded",t)}validateAriaLabel(t){this.validateLabel(t)}validateAriaSelected(t){((t,e)=>{(0,o.a)(t,"_ariaSelected",e)})(this,t)}validateDisabled(t){(0,o.a)(this,"_disabled",t),!0===t&&(0,h.h)()}validateDownload(t){((t,e)=>{"boolean"==typeof e?(0,o.a)(t,"_download",e):(0,o.d)(t,"_download",e)})(this,t)}validateHideLabel(t){(0,r.v)(this,t)}validateHref(t){((t,e,i={})=>{(0,o.d)(t,"_href",e,i)})(this,t)}validateIcon(t){(0,l.v)(this,t)}validateIconAlign(t){(0,l.w)(this,t)}validateIconOnly(t){this.validateHideLabel(t)}validateLabel(t){(0,d.a)(this,t)}validateListenAriaCurrent(t){(0,s.b)(this,t)}validateOn(t){"object"==typeof t&&"function"==typeof(null==t?void 0:t.onClick)&&(this.state=Object.assign(Object.assign({},this.state),{_on:t}))}validateRole(t){(0,s.c)(this,t)}validateSelector(t){(0,o.d)(this,"_selector",t)}validateStealth(t){((t,e)=>{(0,o.a)(t,"_stealth",e)})(this,t)}validateTabIndex(t){(0,g.v)(this,t)}validateTarget(t){((t,e)=>{(0,o.d)(t,"_target",e)})(this,t)}validateTargetDescription(t){(0,o.d)(this,"_targetDescription",t)}validateTooltipAlign(t){(0,v.v)(this,t)}validateUseCase(t){"string"==typeof t&&(this.state=Object.assign(Object.assign({},this.state),{_useCase:t}))}componentWillLoad(){this.validateAriaControls(this._ariaControls),this.validateAriaCurrent(this._ariaCurrent),this.validateAriaExpanded(this._ariaExpanded),this.validateAriaSelected(this._ariaSelected),this.validateDisabled(this._disabled),this.validateDownload(this._download),this.validateHideLabel(this._hideLabel||this._iconOnly),this.validateHref(this._href),this.validateIcon(this._icon),this.validateIconAlign(this._iconAlign),this.validateLabel(this._label||this._ariaLabel),this.validateListenAriaCurrent(this._listenAriaCurrent),this.validateOn(this._on),this.validateRole(this._role),this.validateSelector(this._selector),this.validateStealth(this._stealth),this.validateTabIndex(this._tabIndex),this.validateTarget(this._target),this.validateTargetDescription(this._targetDescription),this.validateTooltipAlign(this._tooltipAlign),this.validateUseCase(this._useCase)}disconnectedCallback(){this.unsubscribeAriaCurrentSubject.unsubscribe()}get host(){return(0,a.g)(this)}static get watchers(){return{_ariaControls:["validateAriaControls"],_ariaCurrent:["validateAriaCurrent"],_ariaExpanded:["validateAriaExpanded"],_ariaLabel:["validateAriaLabel"],_ariaSelected:["validateAriaSelected"],_disabled:["validateDisabled"],_download:["validateDownload"],_hideLabel:["validateHideLabel"],_href:["validateHref"],_icon:["validateIcon"],_iconAlign:["validateIconAlign"],_iconOnly:["validateIconOnly"],_label:["validateLabel"],_listenAriaCurrent:["validateListenAriaCurrent"],_on:["validateOn"],_role:["validateRole"],_selector:["validateSelector"],_stealth:["validateStealth"],_tabIndex:["validateTabIndex"],_target:["validateTarget"],_targetDescription:["validateTargetDescription"],_tooltipAlign:["validateTooltipAlign"],_useCase:["validateUseCase"]}}}},90988:(t,e,i)=>{i.d(e,{a:()=>v,c:()=>l,h:()=>r,v:()=>c});var a=i(34885),n=i(35532);const s=/[a-zA-Z0-9\xe4\xf6\xfc\xc4\xd6\xdc\xdf]/g,o=/^\d+$/;function r(t,e=1){return function(t){var e;return"string"==typeof t&&(null===(e=t.match(s))||void 0===e?void 0:e.length)||0}(t)>=e}function l(t){return o.test(t)}function d(t){var e;return{hooks:{afterPatch:(e,i,n,s)=>{var o,d;"function"==typeof(null===(o=t.hooks)||void 0===o?void 0:o.afterPatch)&&(null===(d=t.hooks)||void 0===d||d.afterPatch(e,i,n,s)),"string"==typeof e&&!1===r(e,3)&&!1===l(e)&&(0,a.a)(`The heading or label ("${e}") is not accessible. A label should consist of at least three readable characters.`),"string"==typeof e&&e.length>80&&(0,a.u)("A heading or label should not be longer than 80 characters.")},beforePatch:null===(e=t.hooks)||void 0===e?void 0:e.beforePatch}}}const h=new Set(["string"]),c=(t,e,i={})=>{(0,n.w)(t,"_label",(t=>"string"==typeof t),h,e,d(i))},g=new Set(["string","false"]),v=(t,e,i={})=>{""!==e&&"false"!==e||(e=!1),(0,n.w)(t,"_label",(t=>!1===t||"string"==typeof t),g,e,d(i))}},90073:(t,e,i)=>{i.d(e,{v:()=>o});var a=i(34885),n=i(35532);const s={hooks:{afterPatch:t=>{-1!==t&&0!==t&&(0,a.a)("Don\u2019t Use Tabindex Greater than 0: https://adrianroselli.com/2014/11/dont-use-tabindex-greater-than-0.html")}}},o=(t,e)=>{(0,n.e)(t,"_tabIndex",e,s)}},49725:(t,e,i)=>{i.d(e,{v:()=>n});var a=i(42193);const n=(t,e)=>{(0,a.v)(t,"_align",e)}}}]);