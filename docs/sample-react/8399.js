/*! For license information please see 8399.js.LICENSE.txt */
"use strict";(self.webpackChunk_public_ui_sample_react=self.webpackChunk_public_ui_sample_react||[]).push([[8399],{3402:(e,t,i)=>{i.d(t,{a:()=>s,v:()=>n});var a=i(2996);const n=(e,t)=>{(0,a.a)(e,"_ariaCurrent",(e=>"date"===e||"location"===e||"page"===e||"step"===e||"time"===e||!0===e),new Set(["String {data, location, page, step, time}","boolean"]),t)},s=(e,t)=>{(0,a.b)(e,"_ariaSelected",t)}},9970:(e,t,i)=>{i.d(t,{w:()=>n});var a=i(2996);const n=(e,t,i)=>{(0,a.a)(e,t,(e=>"top"===e||"right"===e||"bottom"===e||"left"===e),new Set(["Alignment {top, right, buttom, left}"]),i,{defaultValue:"top"})}},3002:(e,t,i)=>{i.d(t,{v:()=>n});var a=i(2996);const n=(e,t)=>{(0,a.b)(e,"_hideLabel",t)}},3081:(e,t,i)=>{i.d(t,{a:()=>h});var a=i(6989),n=i(8242);const s={error:"Fehler",warning:"Warnung",info:"Hinweis",success:"Erfolg",message:"Nachricht",close:"Schließen","form-description":"Formular-Felder, die mit einem Sternchen (*) gekennzeichnet sind, sind Pflichtangaben.",of:"von",characters:"Zeichen",new:"Neu","no-entries":"Es sind keine Einträge vorhanden.","change-order":"Sortierung von {{colLabel}} ändern","action-running":"Aktion wird ausgeführt...","action-done":"Aktion abgeschlossen","page-first":"Direkt zur ersten Seite","page-back":"Eine Seite zurück","page-next":"Eine Seite weiter","page-last":"Direkt zur letzten Seite","entries-per-site":"Einträge pro Seite","page-current":"Seite {{page}}","page-selected":"Seite {{page}} ist ausgewählt","page-per-site":"{{entries}} Einträge pro Seite","nav-maximize":"Navigation maximieren","nav-minimize":"Navigation minimieren","logo-description":"Logo {{orgShort}}. Bundesadler mit Flaggenstab und Schriftzug {{orgLong}}","open-link-in-tab":"Der Link wird in einem neuen Tab geöffnet.","kolibri-logo":"Logo von KoliBri"},o={error:"Error",warning:"Warning",info:"Note",success:"Success",message:"Message",close:"Close","form-description":"Form fields marked with an asterisk (*) are mandatory.",of:"of",characters:"characters",new:"New","no-entries":"No entries available.","change-order":"Change order of {{colLabel}}","action-running":"Action is running...","action-done":"Action done","page-first":"Directly to the first page","page-back":"One page back","page-next":"One page further","page-last":"Directly to the last page","entries-per-site":"Entries per page","page-current":"Page {{page}}","page-selected":"Page {{page}} is selected","page-per-site":"{{entries}} entries per page","nav-maximize":"Maximize","nav-minimize":"Minimize","logo-description":"Logo {{orgShort}}. Federal eagle with flag staff and lettering {{orgLong}}","open-link-in-tab":"The link will open in a new tab.","kolibri-logo":"KoliBri logo"},l=e=>Object.keys(e).reduce(((t,i)=>(t[`kol-${i}`]=e[i],t)),{}),r=new Set([e=>e("en",l(o)),e=>e("de",l(s))]),h=(e,t)=>{const i=(0,a.g)();if(void 0===i)return(0,n.d)("[I18n] I18nService not available! Please call the global register function."),e;let s=i.translate(e,t);return s===e&&((0,n.d)("[I18n] Locales not initialized! Initialize default locales automatically."),r.forEach((e=>e(((e,t)=>(i.addResourceBundle(e,t),e))))),s=i.translate(e,t)),s}},9545:(e,t,i)=>{i.d(t,{i:()=>l,v:()=>r,w:()=>h});var a=i(2996),n=i(1383);const s=(e,t,i)=>{(0,n.c)(i)?e[t]=i:(0,n.i)(i,1)&&(e[t]={icon:i})},o=e=>{var t,i,a,o,l,r,h;if(null===(t=e.nextState)||void 0===t?void 0:t.has("_icon")){const t=null===(i=e.nextState)||void 0===i?void 0:i.get("_icon"),l=(null===(a=e.nextState)||void 0===a?void 0:a.get("_iconAlign"))||e.state._iconAlign;null===(o=e.nextState)||void 0===o||o.set("_icon",((e,t)=>{let i={};return(0,n.i)(e,1)?i="right"===t?{right:{icon:e}}:{left:{icon:e}}:"object"==typeof e&&null!==e&&(s(i,"top",e.top),s(i,"right",e.right),s(i,"bottom",e.bottom),s(i,"left",e.left)),i})(t,l))}else if(null===(l=e.nextState)||void 0===l?void 0:l.has("_iconAlign")){const t=e.state._iconAlign;null===(r=e.nextState)||void 0===r||r.set("_icon",{[t]:void 0,[null===(h=e.nextState)||void 0===h?void 0:h.get("_iconAlign")]:e.state._icon[t]})}},l=e=>"object"==typeof e&&null!==e&&(void 0===e.style||(0,n.b)(e.style))&&(0,n.i)(e.icon,1),r=(e,t)=>{(0,a.o)(t,(()=>{try{t=(0,a.p)(t)}catch(e){}(0,a.a)(e,"_icon",(e=>null===e||(0,n.i)(e,1)||"object"==typeof e&&null!==e&&((0,n.i)(e.left,1)||l(e.left)||(0,n.i)(e.right,1)||l(e.right)||(0,n.i)(e.top,1)||l(e.top)||(0,n.i)(e.bottom,1)||l(e.bottom))),new Set(["KoliBriIcon"]),t,{hooks:{beforePatch:(t,i)=>{null===t&&i.set("_icon",{}),o(e)}},required:!0})}))},h=(e,t)=>{(0,a.a)(e,"_iconAlign",(e=>"left"===e||"right"===e),new Set(["Alignment {left, right, top, bottom}"]),t,{hooks:{beforePatch:()=>{o(e)}}})}},8399:(e,t,i)=>{i.r(t),i.d(t,{kol_link_wc:()=>b});var a=i(578),n=i(3081),s=i(9970),o=i(8242),l=i(834),r=i(2996),h=i(1383),d=i(9545),c=i(618),g=i(4045),_=i(3402),v=i(3002);const b=class{constructor(e){(0,a.r)(this,e),this.nonce=(0,l.n)(),this.catchRef=e=>{this.ref=e,(0,h.a)(this.host,this.ref)},this.onClick=e=>{var t,i;"function"==typeof(null===(t=this.state._on)||void 0===t?void 0:t.onClick)&&(e.preventDefault(),(0,r.f)(e,this.ref),null===(i=this.state._on)||void 0===i||i.onClick(e,this.state._href))},this.getRenderValues=()=>{let e={};"string"==typeof this.state._selector&&(e={role:"link",tabIndex:0,onClick:()=>{(0,r.i)(this.state._selector)},onKeyPress:()=>{(0,r.i)(this.state._selector)}});const t="string"==typeof this.state._target&&"_self"!==this.state._target,i={href:"string"==typeof this.state._href&&this.state._href.length>0?this.state._href:"javascript:void(0);",target:"string"==typeof this.state._target&&this.state._target.length>0?this.state._target:void 0,rel:t?"noopener":void 0};return"image"!==this.state._useCase&&!0!==this.state._hideLabel||this.state._label||(0,o.d)("[KolLink] Es muss ein Aria-Label gesetzt werden, wenn eine Grafik verlinkt oder der _hide-label gesetzt ist."),{isExternal:t,tagAttrs:i,goToProps:e}},this._ariaControls=void 0,this._ariaCurrent=void 0,this._ariaExpanded=void 0,this._ariaLabel=void 0,this._ariaSelected=void 0,this._disabled=!1,this._download=!1,this._hideLabel=!1,this._href=void 0,this._icon=void 0,this._iconAlign=void 0,this._iconOnly=void 0,this._label=void 0,this._on=void 0,this._role=void 0,this._selector=void 0,this._stealth=!1,this._tabIndex=void 0,this._target=void 0,this._targetDescription=(0,n.a)("kol-open-link-in-tab"),this._tooltipAlign="right",this._useCase="text",this.state={_href:"…",_icon:{}}}render(){const{isExternal:e,tagAttrs:t,goToProps:i}=this.getRenderValues();return(0,a.h)(a.H,null,(0,a.h)("a",Object.assign({ref:this.catchRef},t,{"aria-controls":this.state._ariaControls,"aria-current":this.state._ariaCurrent,"aria-expanded":(0,r.h)(this.state._ariaExpanded),"aria-labelledby":"image"===this.state._useCase||!0===this.state._hideLabel?this.nonce:void 0,"aria-selected":(0,r.h)(this.state._ariaSelected),class:{disabled:!0===this.state._disabled,"skip ":!1!==this.state._stealth,"icon-only":!0===this.state._hideLabel,"hide-label":!0===this.state._hideLabel,"external-link":e}},this.state._on,{onClick:this.onClick,onKeyPress:this.onClick},i,{role:this.state._role,tabIndex:this.state._tabIndex}),(0,a.h)("kol-span-wc",{_icon:this._icon,_hideLabel:this._hideLabel,_label:this.state._label||this.state._href},(0,a.h)("slot",{name:"expert",slot:"expert"})),e&&(0,a.h)("kol-icon",{class:"external-link-icon",_label:this.state._targetDescription,_icon:"codicon codicon-link-external"})),(0,a.h)("kol-tooltip",{"aria-hidden":"true",hidden:!0!==this.state._hideLabel,_align:this.state._tooltipAlign,_id:this.nonce,_label:this.state._label||this.state._href}))}validateAriaControls(e){(0,r.w)(this,"_ariaControls",e)}validateAriaCurrent(e){(0,_.v)(this,e)}validateAriaExpanded(e){(0,r.b)(this,"_ariaExpanded",e)}validateAriaLabel(e){this.validateLabel(e)}validateAriaSelected(e){(0,_.a)(this,e)}validateDisabled(e){(0,r.b)(this,"_disabled",e),!0===e&&(0,o.g)()}validateDownload(e){((e,t)=>{"boolean"==typeof t?(0,r.b)(e,"_download",t):(0,r.w)(e,"_download",t)})(this,e)}validateHideLabel(e){(0,v.v)(this,e)}validateHref(e){((e,t,i={})=>{(0,r.w)(e,"_href",t,i)})(this,e)}validateIcon(e){(0,d.v)(this,e)}validateIconAlign(e){(0,d.w)(this,e)}validateIconOnly(e){this.validateHideLabel(e)}validateLabel(e){(0,c.v)(this,e)}validateOn(e){"object"==typeof e&&"function"==typeof(null==e?void 0:e.onClick)&&(this.state=Object.assign(Object.assign({},this.state),{_on:e}))}validateRole(e){(0,r.w)(this,"_role",e)}validateSelector(e){(0,r.w)(this,"_selector",e)}validateStealth(e){((e,t)=>{(0,r.b)(e,"_stealth",t)})(this,e)}validateTabIndex(e){(0,g.v)(this,e)}validateTarget(e){(0,r.w)(this,"_target",e)}validateTargetDescription(e){(0,r.w)(this,"_targetDescription",e)}validateTooltipAlign(e){(0,s.w)(this,"_tooltipAlign",e)}validateUseCase(e){"string"==typeof e&&(this.state=Object.assign(Object.assign({},this.state),{_useCase:e}))}componentWillLoad(){this.validateAriaControls(this._ariaControls),this.validateAriaCurrent(this._ariaCurrent),this.validateAriaExpanded(this._ariaExpanded),this.validateAriaSelected(this._ariaSelected),this.validateDisabled(this._disabled),this.validateDownload(this._download),this.validateHideLabel(this._hideLabel||this._iconOnly),this.validateHref(this._href),this.validateIcon(this._icon),this.validateIconAlign(this._iconAlign),this.validateLabel(this._label||this._ariaLabel),this.validateOn(this._on),this.validateRole(this._role),this.validateSelector(this._selector),this.validateStealth(this._stealth),this.validateTabIndex(this._tabIndex),this.validateTarget(this._target),this.validateTargetDescription(this._targetDescription),this.validateTooltipAlign(this._tooltipAlign),this.validateUseCase(this._useCase)}get host(){return(0,a.g)(this)}static get watchers(){return{_ariaControls:["validateAriaControls"],_ariaCurrent:["validateAriaCurrent"],_ariaExpanded:["validateAriaExpanded"],_ariaLabel:["validateAriaLabel"],_ariaSelected:["validateAriaSelected"],_disabled:["validateDisabled"],_download:["validateDownload"],_hideLabel:["validateHideLabel"],_href:["validateHref"],_icon:["validateIcon"],_iconAlign:["validateIconAlign"],_iconOnly:["validateIconOnly"],_label:["validateLabel"],_on:["validateOn"],_role:["validateRole"],_selector:["validateSelector"],_stealth:["validateStealth"],_tabIndex:["validateTabIndex"],_target:["validateTarget"],_targetDescription:["validateTargetDescription"],_tooltipAlign:["validateTooltipAlign"],_useCase:["validateUseCase"]}}}},618:(e,t,i)=>{i.d(t,{c:()=>r,h:()=>l,v:()=>h});var a=i(8242),n=i(2996);const s=/[a-zA-Z0-9äöüÄÖÜß]/g,o=/^\d+$/;function l(e,t=1){return function(e){var t;return"string"==typeof e&&(null===(t=e.match(s))||void 0===t?void 0:t.length)||0}(e)>=t}function r(e){return o.test(e)}const h=(e,t,i={})=>{var s;(0,n.w)(e,"_label",t,{hooks:{afterPatch:(e,t,n,s)=>{var o,h;"function"==typeof(null===(o=i.hooks)||void 0===o?void 0:o.afterPatch)&&(null===(h=i.hooks)||void 0===h||h.afterPatch(e,t,n,s)),"string"==typeof e&&!1===l(e,3)&&!1===r(e)&&(0,a.a)(`The heading or label ("${e}") is not accessible. A label should consist of at least three readable characters.`),"string"==typeof e&&e.length>80&&(0,a.u)("A heading or label should not be longer than 80 characters.")},beforePatch:null===(s=i.hooks)||void 0===s?void 0:s.beforePatch},required:!0})}},4045:(e,t,i)=>{i.d(t,{v:()=>o});var a=i(8242),n=i(2996);const s={hooks:{afterPatch:e=>{-1!==e&&0!==e&&(0,a.a)("Don’t Use Tabindex Greater than 0: https://adrianroselli.com/2014/11/dont-use-tabindex-greater-than-0.html")}}},o=(e,t)=>{(0,n.e)(e,"_tabIndex",t,s)}}}]);