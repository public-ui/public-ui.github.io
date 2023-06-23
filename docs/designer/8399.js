/*! For license information please see 8399.js.LICENSE.txt */
"use strict";(self.webpackChunk_public_ui_designer=self.webpackChunk_public_ui_designer||[]).push([[8399],{89687:(e,t,i)=>{i.d(t,{a:()=>o,v:()=>s});var a=i(4300);const s=(e,t)=>{(0,a.a)(e,"_ariaCurrent",(e=>"date"===e||"location"===e||"page"===e||"step"===e||"time"===e||!0===e),new Set(["String {data, location, page, step, time}","boolean"]),t)},o=(e,t)=>{(0,a.b)(e,"_ariaSelected",t)}},5277:(e,t,i)=>{i.d(t,{w:()=>s});var a=i(4300);const s=(e,t,i)=>{(0,a.a)(e,t,(e=>"top"===e||"right"===e||"bottom"===e||"left"===e),new Set(["Alignment {top, right, buttom, left}"]),i,{defaultValue:"top"})}},48858:(e,t,i)=>{i.d(t,{v:()=>s});var a=i(4300);const s=(e,t)=>{(0,a.b)(e,"_hideLabel",t)}},61900:(e,t,i)=>{i.d(t,{a:()=>h});var a=i(7788),s=i(25858);const o={error:"Fehler",warning:"Warnung",info:"Hinweis",success:"Erfolg",message:"Nachricht",close:"Schließen","form-description":"Formular-Felder, die mit einem Sternchen (*) gekennzeichnet sind, sind Pflichtangaben.",of:"von",characters:"Zeichen",new:"Neu","no-entries":"Es sind keine Einträge vorhanden.","change-order":"Sortierung von {{colLabel}} ändern","action-running":"Aktion wird ausgeführt...","action-done":"Aktion abgeschlossen","page-first":"Direkt zur ersten Seite","page-back":"Eine Seite zurück","page-next":"Eine Seite weiter","page-last":"Direkt zur letzten Seite","entries-per-site":"Einträge pro Seite","page-current":"Seite {{page}}","page-selected":"Seite {{page}} ist ausgewählt","page-per-site":"{{entries}} Einträge pro Seite","nav-maximize":"Navigation maximieren","nav-minimize":"Navigation minimieren","logo-description":"Logo {{orgShort}}. Bundesadler mit Flaggenstab und Schriftzug {{orgLong}}","open-link-in-tab":"Der Link wird in einem neuen Tab geöffnet.","kolibri-logo":"Logo von KoliBri"},n={error:"Error",warning:"Warning",info:"Note",success:"Success",message:"Message",close:"Close","form-description":"Form fields marked with an asterisk (*) are mandatory.",of:"of",characters:"characters",new:"New","no-entries":"No entries available.","change-order":"Change order of {{colLabel}}","action-running":"Action is running...","action-done":"Action done","page-first":"Directly to the first page","page-back":"One page back","page-next":"One page further","page-last":"Directly to the last page","entries-per-site":"Entries per page","page-current":"Page {{page}}","page-selected":"Page {{page}} is selected","page-per-site":"{{entries}} entries per page","nav-maximize":"Maximize","nav-minimize":"Minimize","logo-description":"Logo {{orgShort}}. Federal eagle with flag staff and lettering {{orgLong}}","open-link-in-tab":"The link will open in a new tab.","kolibri-logo":"KoliBri logo"},l=e=>Object.keys(e).reduce(((t,i)=>(t[`kol-${i}`]=e[i],t)),{}),r=new Set([e=>e("en",l(n)),e=>e("de",l(o))]),h=(e,t)=>{const i=(0,a.g)();if(void 0===i)return(0,s.d)("[I18n] I18nService not available! Please call the global register function."),e;let o=i.translate(e,t);return o===e&&((0,s.d)("[I18n] Locales not initialized! Initialize default locales automatically."),r.forEach((e=>e(((e,t)=>(i.addResourceBundle(e,t),e))))),o=i.translate(e,t)),o}},33552:(e,t,i)=>{i.d(t,{i:()=>l,v:()=>r,w:()=>h});var a=i(4300),s=i(7269);const o=(e,t,i)=>{(0,s.d)(i)?e[t]=i:(0,s.b)(i,1)&&(e[t]={icon:i})},n=e=>{var t,i,a,n,l,r,h;if(null===(t=e.nextState)||void 0===t?void 0:t.has("_icon")){const t=null===(i=e.nextState)||void 0===i?void 0:i.get("_icon"),l=(null===(a=e.nextState)||void 0===a?void 0:a.get("_iconAlign"))||e.state._iconAlign;null===(n=e.nextState)||void 0===n||n.set("_icon",((e,t)=>{let i={};return(0,s.b)(e,1)?i="right"===t?{right:{icon:e}}:{left:{icon:e}}:"object"==typeof e&&null!==e&&(o(i,"top",e.top),o(i,"right",e.right),o(i,"bottom",e.bottom),o(i,"left",e.left)),i})(t,l))}else if(null===(l=e.nextState)||void 0===l?void 0:l.has("_iconAlign")){const t=e.state._iconAlign;null===(r=e.nextState)||void 0===r||r.set("_icon",{[t]:void 0,[null===(h=e.nextState)||void 0===h?void 0:h.get("_iconAlign")]:e.state._icon[t]})}},l=e=>"object"==typeof e&&null!==e&&(void 0===e.style||(0,s.c)(e.style))&&(0,s.b)(e.icon,1),r=(e,t)=>{(0,a.o)(t,(()=>{try{t=(0,a.p)(t)}catch(e){}(0,a.a)(e,"_icon",(e=>null===e||(0,s.b)(e,1)||"object"==typeof e&&null!==e&&((0,s.b)(e.left,1)||l(e.left)||(0,s.b)(e.right,1)||l(e.right)||(0,s.b)(e.top,1)||l(e.top)||(0,s.b)(e.bottom,1)||l(e.bottom))),new Set(["KoliBriIcon"]),t,{hooks:{beforePatch:(t,i)=>{null===t&&i.set("_icon",{}),n(e)}},required:!0})}))},h=(e,t)=>{(0,a.a)(e,"_iconAlign",(e=>"left"===e||"right"===e),new Set(["Alignment {left, right, top, bottom}"]),t,{hooks:{beforePatch:()=>{n(e)}}})}},48399:(e,t,i)=>{i.r(t),i.d(t,{kol_link_wc:()=>b});var a=i(6419),s=i(61900),o=i(5277),n=i(25858),l=i(99311),r=i(4300),h=i(7269),d=i(33552),c=i(44066),g=i(23196),_=i(89687),v=i(48858);const b=class{constructor(e){(0,a.r)(this,e),this.nonce=(0,l.n)(),this.catchRef=e=>{this.ref=e,(0,h.a)(this.host,this.ref)},this.onClick=e=>{var t,i;"function"==typeof(null===(t=this.state._on)||void 0===t?void 0:t.onClick)&&(e.preventDefault(),(0,r.f)(e,this.ref),null===(i=this.state._on)||void 0===i||i.onClick(e,this.state._href))},this.getRenderValues=()=>{let e={};"string"==typeof this.state._selector&&(e={role:"link",tabIndex:0,onClick:()=>{(0,r.i)(this.state._selector)},onKeyPress:()=>{(0,r.i)(this.state._selector)}});const t="string"==typeof this.state._target&&"_self"!==this.state._target,i={href:"string"==typeof this.state._href&&this.state._href.length>0?this.state._href:"javascript:void(0)",target:"string"==typeof this.state._target&&this.state._target.length>0?this.state._target:void 0,rel:t?"noopener":void 0};return"image"!==this.state._useCase&&!0!==this.state._hideLabel||"string"==typeof this.state._ariaLabel&&0!==this.state._ariaLabel.length||(0,n.d)("[KolLink] Es muss ein Aria-Label gesetzt werden, wenn eine Grafik verlinkt oder der _hide-label gesetzt ist."),{isExternal:t,tagAttrs:i,goToProps:e}},this._ariaControls=void 0,this._ariaCurrent=void 0,this._ariaExpanded=void 0,this._ariaLabel=void 0,this._ariaSelected=void 0,this._disabled=!1,this._download=!1,this._hideLabel=!1,this._href=void 0,this._icon=void 0,this._iconAlign=void 0,this._iconOnly=void 0,this._label=void 0,this._on=void 0,this._role=void 0,this._selector=void 0,this._stealth=!1,this._tabIndex=void 0,this._target=void 0,this._targetDescription=(0,s.a)("kol-open-link-in-tab"),this._tooltipAlign="right",this._useCase="text",this.state={_href:"javascript:void(0)",_icon:{},_label:""}}render(){const{isExternal:e,tagAttrs:t,goToProps:i}=this.getRenderValues();return(0,a.h)(a.H,null,(0,a.h)("a",Object.assign({ref:this.catchRef},t,{"aria-controls":this.state._ariaControls,"aria-current":this.state._ariaCurrent,"aria-expanded":(0,r.h)(this.state._ariaExpanded),"aria-labelledby":"image"===this.state._useCase||!0===this.state._hideLabel?this.nonce:void 0,"aria-selected":(0,r.h)(this.state._ariaSelected),class:{disabled:!0===this.state._disabled,"skip ":!1!==this.state._stealth,"icon-only":!0===this.state._hideLabel,"hide-label":!0===this.state._hideLabel,"external-link":e}},this.state._on,{onClick:this.onClick,onKeyPress:this.onClick},i,{role:this.state._role,tabIndex:this.state._tabIndex}),(0,a.h)("kol-span-wc",{_icon:this._icon,_hideLabel:this._hideLabel,_label:this.state._label},(0,a.h)("slot",{name:"expert",slot:"expert"})),e&&(0,a.h)("kol-icon",{class:"external-link-icon",_ariaLabel:this.state._targetDescription,_icon:"codicon codicon-link-external"})),(0,a.h)("kol-tooltip",{"aria-hidden":"true",hidden:!0!==this.state._hideLabel,_align:this.state._tooltipAlign,_id:this.nonce,_label:this.state._ariaLabel||this.state._label}))}validateAriaControls(e){(0,r.w)(this,"_ariaControls",e)}validateAriaCurrent(e){(0,_.v)(this,e)}validateAriaExpanded(e){(0,r.b)(this,"_ariaExpanded",e)}validateAriaLabel(e){(0,g.a)(this,e)}validateAriaSelected(e){(0,_.a)(this,e)}validateDisabled(e){(0,r.b)(this,"_disabled",e),!0===e&&(0,n.g)()}validateDownload(e){((e,t)=>{"boolean"==typeof t?(0,r.b)(e,"_download",t):(0,r.w)(e,"_download",t)})(this,e)}validateHideLabel(e){(0,v.v)(this,e)}validateHref(e){(0,r.w)(this,"_href",e)}validateIcon(e){(0,d.v)(this,e)}validateIconAlign(e){(0,d.w)(this,e)}validateIconOnly(e){this.validateHideLabel(e)}validateLabel(e){(0,g.b)(this,e)}validateOn(e){"object"==typeof e&&"function"==typeof(null==e?void 0:e.onClick)&&(this.state=Object.assign(Object.assign({},this.state),{_on:e}))}validateRole(e){(0,r.w)(this,"_role",e)}validateSelector(e){(0,r.w)(this,"_selector",e)}validateStealth(e){((e,t)=>{(0,r.b)(e,"_stealth",t)})(this,e)}validateTabIndex(e){(0,c.v)(this,e)}validateTarget(e){(0,r.w)(this,"_target",e)}validateTargetDescription(e){(0,r.w)(this,"_targetDescription",e)}validateTooltipAlign(e){(0,o.w)(this,"_tooltipAlign",e)}validateUseCase(e){"string"==typeof e&&(this.state=Object.assign(Object.assign({},this.state),{_useCase:e}))}componentWillLoad(){this.validateAriaControls(this._ariaControls),this.validateAriaCurrent(this._ariaCurrent),this.validateAriaExpanded(this._ariaExpanded),this.validateAriaLabel(this._ariaLabel),this.validateAriaSelected(this._ariaSelected),this.validateDisabled(this._disabled),this.validateDownload(this._download),this.validateHideLabel(this._hideLabel||this._iconOnly),this.validateHref(this._href),this.validateIcon(this._icon),this.validateIconAlign(this._iconAlign),this.validateLabel(this._label),this.validateOn(this._on),this.validateRole(this._role),this.validateSelector(this._selector),this.validateStealth(this._stealth),this.validateTabIndex(this._tabIndex),this.validateTarget(this._target),this.validateTargetDescription(this._targetDescription),this.validateTooltipAlign(this._tooltipAlign),this.validateUseCase(this._useCase)}get host(){return(0,a.g)(this)}static get watchers(){return{_ariaControls:["validateAriaControls"],_ariaCurrent:["validateAriaCurrent"],_ariaExpanded:["validateAriaExpanded"],_ariaLabel:["validateAriaLabel"],_ariaSelected:["validateAriaSelected"],_disabled:["validateDisabled"],_download:["validateDownload"],_hideLabel:["validateHideLabel"],_href:["validateHref"],_icon:["validateIcon"],_iconAlign:["validateIconAlign"],_iconOnly:["validateIconOnly"],_label:["validateLabel"],_on:["validateOn"],_role:["validateRole"],_selector:["validateSelector"],_stealth:["validateStealth"],_tabIndex:["validateTabIndex"],_target:["validateTarget"],_targetDescription:["validateTargetDescription"],_tooltipAlign:["validateTooltipAlign"],_useCase:["validateUseCase"]}}}},23196:(e,t,i)=>{i.d(t,{a:()=>c,b:()=>_,c:()=>h,h:()=>r,v:()=>g});var a=i(25858),s=i(4300),o=i(7269);const n=/[a-zA-Z0-9äöüÄÖÜß]/g,l=/^\d+$/;function r(e,t=1){return function(e){var t;return"string"==typeof e&&(null===(t=e.match(n))||void 0===t?void 0:t.length)||0}(e)>=t}function h(e){return l.test(e)}const d=(e,t,i,s)=>{const n=t.has("_ariaLabel")?t.get("_ariaLabel"):i.state._ariaLabel;if("string"==typeof n){const e=t.has("_label")?t.get("_label"):i.state._label;!1===(0,o.i)(e,n)&&("_ariaLabel"===s?t.set("_label",n):t.set("_ariaLabel",void 0),(0,a.a)("The different Aria label is not barrier-free. A different Aria label must start with the label text for reasons of accessibility for voice control."))}},c=(e,t)=>{((e,t,i={})=>{var o;(0,s.w)(e,"_ariaLabel",t,{hooks:{afterPatch:(e,t,s,o)=>{var n,l;"function"==typeof(null===(n=i.hooks)||void 0===n?void 0:n.afterPatch)&&(null===(l=i.hooks)||void 0===l||l.afterPatch(e,t,s,o)),"string"==typeof e&&e.length>0&&!1===r(e,3)&&!1===h(e)&&(0,a.a)(`The different aria label ("${e}") is not accessible. A different aria label should consist of at least three readable characters.`)},beforePatch:null===(o=i.hooks)||void 0===o?void 0:o.beforePatch}})})(e,t,{hooks:{beforePatch:d}})},g=(e,t,i={})=>{var o;(0,s.w)(e,"_label",t,{hooks:{afterPatch:(e,t,s,o)=>{var n,l;"function"==typeof(null===(n=i.hooks)||void 0===n?void 0:n.afterPatch)&&(null===(l=i.hooks)||void 0===l||l.afterPatch(e,t,s,o)),"string"==typeof e&&!1===r(e,3)&&!1===h(e)&&(0,a.a)(`The heading or label ("${e}") is not accessible. A label should consist of at least three readable characters.`),"string"==typeof e&&e.length>80&&(0,a.u)("A heading or label should not be longer than 80 characters.")},beforePatch:null===(o=i.hooks)||void 0===o?void 0:o.beforePatch},required:!0})},_=(e,t)=>{g(e,t,{hooks:{beforePatch:d}})}},44066:(e,t,i)=>{i.d(t,{v:()=>n});var a=i(25858),s=i(4300);const o={hooks:{afterPatch:e=>{-1!==e&&0!==e&&(0,a.a)("Don’t Use Tabindex Greater than 0: https://adrianroselli.com/2014/11/dont-use-tabindex-greater-than-0.html")}}},n=(e,t)=>{(0,s.e)(e,"_tabIndex",t,o)}}}]);