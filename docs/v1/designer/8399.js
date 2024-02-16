/*! For license information please see 8399.js.LICENSE.txt */
"use strict";(self.webpackChunk_public_ui_designer=self.webpackChunk_public_ui_designer||[]).push([[8399],{60349:(e,t,i)=>{i.d(t,{v:()=>n});var a=i(45006);const s=new Set([...new Set(['"left", "right"']),...new Set(['"bottom", "top"'])]),n=(e,t,i)=>{(0,a.w)(e,t,(e=>"bottom"===e||"left"===e||"right"===e||"top"===e),s,i,{defaultValue:"top"})}},24662:(e,t,i)=>{i.d(t,{a:()=>r,b:()=>o,c:()=>s,v:()=>n});var a=i(45006);const s=(e,t)=>{(0,a.d)(e,"_role",t)},n=(e,t)=>{(0,a.d)(e,"_ariaControls",t)},l=(e,t,i)=>{(0,a.w)(e,t,(e=>"date"===e||"location"===e||"page"===e||"step"===e||"time"===e||!0===e||!1===e),new Set(["String {data, location, page, step, time}","boolean"]),i)},r=(e,t)=>{l(e,"_ariaCurrent",t)},o=(e,t)=>{l(e,"_listenAriaCurrent",t)}},91152:(e,t,i)=>{i.d(t,{v:()=>s});var a=i(45006);const s=(e,t,i={})=>{(0,a.a)(e,"_hideLabel",t,i)}},46718:(e,t,i)=>{i.d(t,{a:()=>d});var a=i(55691),s=i(92805);const n={error:"Fehler",warning:"Warnung",info:"Hinweis",success:"Erfolg",message:"Nachricht",close:"Schließen","form-description":"Formular-Felder, die mit einem Sternchen (*) gekennzeichnet sind, sind Pflichtangaben.",of:"von",characters:"Zeichen",new:"Neu","no-entries":"Es sind keine Einträge vorhanden.","change-order":"Sortierung von {{colLabel}} ändern","action-running":"Aktion wird ausgeführt...","action-done":"Aktion abgeschlossen",pagination:"Paginierung","page-first":"Direkt zur ersten Seite","page-back":"Eine Seite zurück","page-next":"Eine Seite weiter","page-last":"Direkt zur letzten Seite","entries-per-site":"Einträge pro Seite",page:"Seite","page-current":"Seite {{page}}","page-selected":"Seite {{page}} ist ausgewählt","page-per-site":"{{entries}} Einträge pro Seite","nav-maximize":"Navigation maximieren","nav-minimize":"Navigation minimieren","logo-description":"Logo {{orgShort}}. Bundesadler mit Flaggenstab und Schriftzug {{orgLong}}","open-link-in-tab":"Öffnet in neuem Tab.","kolibri-logo":"Logo von KoliBri","table-pagination-label":"Paginierung für die Tabelle {{label}}","avatar-alt":"Avatar von {{name}}","toast-close-all":"Alle schließen",version:"Versionsnummer","error-list":"Fehlerliste","error-list-message":"Bitte korrigieren Sie folgende Fehler:"},l={error:"Error",warning:"Warning",info:"Note",success:"Success",message:"Message",close:"Close","form-description":"Form fields marked with an asterisk (*) are mandatory.",of:"of",characters:"characters",new:"New","no-entries":"No entries available.","change-order":"Change order of {{colLabel}}","action-running":"Action is running...","action-done":"Action done",pagination:"Pagination","page-first":"Directly to the first page","page-back":"One page back","page-next":"One page further","page-last":"Directly to the last page","entries-per-site":"Entries per page",page:"Page","page-current":"Page {{page}}","page-selected":"Page {{page}} is selected","page-per-site":"{{entries}} entries per page","nav-maximize":"Maximize","nav-minimize":"Minimize","logo-description":"Logo {{orgShort}}. Federal eagle with flag staff and lettering {{orgLong}}","open-link-in-tab":"Opens in new tab.","kolibri-logo":"KoliBri logo","table-pagination-label":"Pagination for table {{label}}","avatar-alt":"Avatar of {{name}}","toast-close-all":"Close all",version:"Version number","error-list":"Error list","error-list-message":"Please correct the following errors"},r=e=>Object.keys(e).reduce(((t,i)=>(t[`kol-${i}`]=e[i],t)),{}),o=new Set([e=>e("en",r(l)),e=>e("de",r(n))]),d=(e,t)=>{const i=(0,a.g)();if(void 0===i)return(0,s.d)("[I18n] I18nService not available! Please call the global register function."),e;let n=i.translate(e,t);return n===e&&((0,s.d)("[I18n] Locales not initialized! Initialize default locales automatically."),o.forEach((e=>e(((e,t)=>(i.addResourceBundle(e,t),e))))),n=i.translate(e,t)),n}},2225:(e,t,i)=>{i.d(t,{i:()=>r,v:()=>o,w:()=>d});var a=i(45006),s=i(48125);const n=(e,t,i)=>{(0,s.c)(i)?e[t]=i:(0,s.i)(i,1)&&(e[t]={icon:i})},l=e=>{var t,i,a;if(null===(t=e.nextState)||void 0===t?void 0:t.has("_icons")){const t=null===(i=e.nextState)||void 0===i?void 0:i.get("_icons");null===(a=e.nextState)||void 0===a||a.set("_icons",(e=>{let t={};return(0,s.i)(e,1)?t={left:{icon:e}}:"object"==typeof e&&null!==e&&(n(t,"top",e.top),n(t,"right",e.right),n(t,"bottom",e.bottom),n(t,"left",e.left)),t})(t))}},r=e=>"object"==typeof e&&null!==e&&(void 0===e.style||(0,s.b)(e.style))&&(0,s.i)(e.icon,1),o=(e,t,i={})=>{(0,a.o)(t,(()=>{var n;try{t=(0,a.p)(t)}catch(e){}(0,a.w)(e,"_icons",(e=>null===e||(0,s.i)(e,1)||"object"==typeof e&&null!==e&&((0,s.i)(e.left,1)||r(e.left)||(0,s.i)(e.right,1)||r(e.right)||(0,s.i)(e.top,1)||r(e.top)||(0,s.i)(e.bottom,1)||r(e.bottom))),new Set(["KoliBriIcon"]),t,Object.assign(Object.assign({},i),{defaultValue:{},hooks:{afterPatch:null===(n=i.hooks)||void 0===n?void 0:n.afterPatch,beforePatch:(e,t,a,s)=>{var n,r;"function"==typeof(null===(n=i.hooks)||void 0===n?void 0:n.beforePatch)&&(null===(r=i.hooks)||void 0===r||r.beforePatch(e,t,a,s)),l(a)}}}))}))},d=(e,t)=>{(0,a.w)(e,"_iconAlign",(e=>"left"===e||"right"===e),new Set(["Alignment {left, right, top, bottom}"]),t,{hooks:{beforePatch:()=>{l(e)}}})}},48399:(e,t,i)=>{i.r(t),i.d(t,{kol_link_wc:()=>_});var a=i(25262),s=i(46718),n=i(24662),l=i(45006),r=i(91152),o=i(2225),d=i(31195),h=i(96882),c=i(92805),g=i(48125),v=i(90437);const _=class{constructor(e){(0,a.r)(this,e),this.catchRef=e=>{this.ref=e,(0,g.a)(this.host,this.ref)},this.onClick=e=>{var t,i;"function"==typeof(null===(t=this.state._on)||void 0===t?void 0:t.onClick)&&(e.preventDefault(),e.stopPropagation(),(0,l.f)(e,this.ref),null===(i=this.state._on)||void 0===i||i.onClick(e,this.state._href))},this.getRenderValues=()=>{let e={};"string"==typeof this.state._selector&&(e={role:"link",tabIndex:0,onClick:()=>{(0,l.j)(this.state._selector)},onKeyPress:()=>{(0,l.j)(this.state._selector)}});const t="string"==typeof this.state._target&&"_self"!==this.state._target,i={href:"string"==typeof this.state._href&&this.state._href.length>0?this.state._href:"javascript:void(0);",target:"string"==typeof this.state._target&&this.state._target.length>0?this.state._target:void 0,rel:t?"noopener":void 0,download:"string"==typeof this.state._download?this.state._download:void 0};return"image"!==this.state._useCase&&!0!==this.state._hideLabel||this.state._label||(0,c.d)("[KolLink] Es muss ein Aria-Label gesetzt werden, wenn eine Grafik verlinkt oder der _hide-label gesetzt ist."),{isExternal:t,tagAttrs:i,goToProps:e}},this.unsubscribeAriaCurrentSubject=l.h.subscribe((e=>{try{this.state._listenAriaCurrent&&this.state._listenAriaCurrent===e.ariaCurrent&&(this.state._href===e.href?this.validateAriaCurrent(e.ariaCurrent):this.validateAriaCurrent(!1))}catch(e){(0,c.h)("The aria-current event is not valid.")}})),this._ariaControls=void 0,this._ariaCurrent=void 0,this._ariaExpanded=void 0,this._ariaLabel=void 0,this._ariaSelected=void 0,this._disabled=!1,this._download=void 0,this._hideLabel=!1,this._href=void 0,this._icon=void 0,this._icons=void 0,this._iconAlign=void 0,this._iconOnly=void 0,this._label=void 0,this._listenAriaCurrent=void 0,this._on=void 0,this._role=void 0,this._selector=void 0,this._stealth=!1,this._tabIndex=void 0,this._target=void 0,this._tooltipAlign="right",this._useCase="text",this.state={_href:"",_icons:{}}}render(){const{isExternal:e,tagAttrs:t,goToProps:i}=this.getRenderValues(),n=(0,g.s)(this.state._label);return(0,a.h)(a.H,null,(0,a.h)("a",Object.assign({ref:this.catchRef},t,{"aria-controls":this.state._ariaControls,"aria-current":this.state._ariaCurrent,"aria-expanded":(0,l.i)(this.state._ariaExpanded),"aria-label":this.state._hideLabel&&"string"==typeof this.state._label?`${this.state._label}${e?` (${(0,s.a)("kol-open-link-in-tab")})`:""}`:void 0,"aria-selected":(0,l.i)(this.state._ariaSelected),class:{disabled:!0===this.state._disabled,"skip ":!1!==this.state._stealth,"icon-only":!0===this.state._hideLabel,"hide-label":!0===this.state._hideLabel,"external-link":e}},this.state._on,{onClick:this.onClick,onKeyPress:this.onClick},i,{role:this.state._role,tabIndex:this.state._tabIndex}),(0,a.h)("kol-span-wc",{_icons:this.state._icons,_hideLabel:this.state._hideLabel,_label:n?"":this.state._label||this.state._href},(0,a.h)("slot",{name:"expert",slot:"expert"})),e&&(0,a.h)("kol-icon",{class:"external-link-icon",_label:this.state._hideLabel?"":(0,s.a)("kol-open-link-in-tab"),_icons:"codicon codicon-link-external","aria-hidden":this.state._hideLabel})),(0,a.h)("kol-tooltip-wc",{"aria-hidden":"true",hidden:n||!this.state._hideLabel,_align:this.state._tooltipAlign,_label:this.state._label||this.state._href}))}validateAriaControls(e){(0,n.v)(this,e)}validateAriaCurrent(e){(0,n.a)(this,e)}validateAriaExpanded(e){(0,l.a)(this,"_ariaExpanded",e)}validateAriaLabel(e){this.validateLabel(e)}validateAriaSelected(e){((e,t)=>{(0,l.a)(e,"_ariaSelected",t)})(this,e)}validateDisabled(e){(0,l.a)(this,"_disabled",e),!0===e&&(0,c.g)()}validateDownload(e){((e,t)=>{(0,l.d)(e,"_download",t)})(this,e)}validateHideLabel(e){(0,r.v)(this,e)}validateHref(e){((e,t,i={})=>{(0,l.d)(e,"_href",t,i)})(this,e,{required:!0})}validateIcon(e){this.validateIcons(e)}validateIcons(e){(0,o.v)(this,e)}validateIconAlign(e){(0,o.w)(this,e)}validateIconOnly(e){this.validateHideLabel(e)}validateLabel(e){(0,d.a)(this,e)}validateListenAriaCurrent(e){(0,n.b)(this,e)}validateOn(e){((e,t)=>{"object"==typeof t&&"function"==typeof(null==t?void 0:t.onClick)&&(e.state=Object.assign(Object.assign({},e.state),{_on:t}))})(this,e)}validateRole(e){(0,n.c)(this,e)}validateSelector(e){(0,l.d)(this,"_selector",e)}validateStealth(e){((e,t)=>{(0,l.a)(e,"_stealth",t)})(this,e)}validateTabIndex(e){(0,v.v)(this,e)}validateTarget(e){((e,t)=>{(0,l.d)(e,"_target",t)})(this,e)}validateTooltipAlign(e){(0,h.v)(this,e)}validateUseCase(e){"string"==typeof e&&(this.state=Object.assign(Object.assign({},this.state),{_useCase:e}))}componentWillLoad(){var e;this.validateAriaControls(this._ariaControls),this.validateAriaCurrent(this._ariaCurrent),this.validateAriaExpanded(this._ariaExpanded),this.validateAriaSelected(this._ariaSelected),this.validateDisabled(this._disabled),this.validateDownload(this._download),this.validateHideLabel(this._hideLabel||this._iconOnly),this.validateHref(this._href),this.validateIcon(this._icons||this._icon),this.validateIconAlign(this._iconAlign),this.validateLabel(null!==(e=this._label)&&void 0!==e?e:this._ariaLabel),this.validateListenAriaCurrent(this._listenAriaCurrent),this.validateOn(this._on),this.validateRole(this._role),this.validateSelector(this._selector),this.validateStealth(this._stealth),this.validateTabIndex(this._tabIndex),this.validateTarget(this._target),this.validateTooltipAlign(this._tooltipAlign),this.validateUseCase(this._useCase)}disconnectedCallback(){this.unsubscribeAriaCurrentSubject.unsubscribe()}get host(){return(0,a.g)(this)}static get watchers(){return{_ariaControls:["validateAriaControls"],_ariaCurrent:["validateAriaCurrent"],_ariaExpanded:["validateAriaExpanded"],_ariaLabel:["validateAriaLabel"],_ariaSelected:["validateAriaSelected"],_disabled:["validateDisabled"],_download:["validateDownload"],_hideLabel:["validateHideLabel"],_href:["validateHref"],_icon:["validateIcon"],_icons:["validateIcons"],_iconAlign:["validateIconAlign"],_iconOnly:["validateIconOnly"],_label:["validateLabel"],_listenAriaCurrent:["validateListenAriaCurrent"],_on:["validateOn"],_role:["validateRole"],_selector:["validateSelector"],_stealth:["validateStealth"],_tabIndex:["validateTabIndex"],_target:["validateTarget"],_tooltipAlign:["validateTooltipAlign"],_useCase:["validateUseCase"]}}}},31195:(e,t,i)=>{i.d(t,{a:()=>c,c:()=>o,h:()=>r,v:()=>h});var a=i(92805),s=i(45006);const n=/[a-zA-Z0-9äöüÄÖÜß]/g,l=/^\d+$/;function r(e,t=1){return function(e){var t;return"string"==typeof e&&(null===(t=e.match(n))||void 0===t?void 0:t.length)||0}(e)>=t}function o(e){return l.test(e)}const d=new Set(["string"]),h=(e,t,i={})=>{(0,s.w)(e,"_label",(e=>"string"==typeof e),d,t,function(e){var t;return Object.assign(Object.assign({},e),{hooks:{afterPatch:(t,i,s,n)=>{var l,d;"function"==typeof(null===(l=e.hooks)||void 0===l?void 0:l.afterPatch)&&(null===(d=e.hooks)||void 0===d||d.afterPatch(t,i,s,n)),"string"==typeof t&&!1===r(t,3)&&!1===o(t)&&(0,a.a)(`The heading or label ("${t}") is not accessible. A label should consist of at least three readable characters.`),"string"==typeof t&&t.length>80&&(0,a.u)("A heading or label should not be longer than 80 characters.")},beforePatch:null===(t=e.hooks)||void 0===t?void 0:t.beforePatch}})}(i))},c=h},90437:(e,t,i)=>{i.d(t,{v:()=>l});var a=i(92805),s=i(45006);const n={hooks:{afterPatch:e=>{-1!==e&&0!==e&&(0,a.a)("Don’t Use Tabindex Greater than 0: https://adrianroselli.com/2014/11/dont-use-tabindex-greater-than-0.html")}}},l=(e,t)=>{(0,s.e)(e,"_tabIndex",t,n)}},96882:(e,t,i)=>{i.d(t,{v:()=>s});var a=i(60349);const s=(e,t)=>{(0,a.v)(e,"_tooltipAlign",t)}}}]);