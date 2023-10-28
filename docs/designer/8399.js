/*! For license information please see 8399.js.LICENSE.txt */
"use strict";(self.webpackChunk_public_ui_designer=self.webpackChunk_public_ui_designer||[]).push([[8399],{97056:(e,t,i)=>{i.d(t,{v:()=>n});var a=i(28330);const n=(e,t)=>{(0,a.d)(e,"_accessKey",t)}},78792:(e,t,i)=>{i.d(t,{v:()=>s});var a=i(28330);const n=new Set([...new Set(['"left", "right"']),...new Set(['"bottom", "top"'])]),s=(e,t,i)=>{(0,a.w)(e,t,(e=>"bottom"===e||"left"===e||"right"===e||"top"===e),n,i,{defaultValue:"top"})}},16376:(e,t,i)=>{i.d(t,{v:()=>n});var a=i(28330);const n=(e,t)=>{(0,a.d)(e,"_role",t)}},25422:(e,t,i)=>{i.d(t,{v:()=>n});var a=i(28330);const n=(e,t,i={})=>{(0,a.a)(e,"_hideLabel",t,i)}},40383:(e,t,i)=>{i.d(t,{a:()=>c});var a=i(59e3),n=i(8921);const s={error:"Fehler",warning:"Warnung",info:"Hinweis",success:"Erfolg",message:"Nachricht",close:"Schließen","form-description":"Formular-Felder, die mit einem Sternchen (*) gekennzeichnet sind, sind Pflichtangaben.",of:"von",characters:"Zeichen",new:"Neu","no-entries":"Es sind keine Einträge vorhanden.","change-order":"Sortierung von {{colLabel}} ändern","action-running":"Aktion wird ausgeführt...","action-done":"Aktion abgeschlossen",pagination:"Paginierung","page-first":"Direkt zur ersten Seite","page-back":"Eine Seite zurück","page-next":"Eine Seite weiter","page-last":"Direkt zur letzten Seite","entries-per-site":"Einträge pro Seite","page-current":"Seite {{page}}","page-selected":"Seite {{page}} ist ausgewählt","page-per-site":"{{entries}} Einträge pro Seite","nav-maximize":"Navigation maximieren","nav-minimize":"Navigation minimieren","logo-description":"Logo {{orgShort}}. Bundesadler mit Flaggenstab und Schriftzug {{orgLong}}","open-link-in-tab":"Der Link wird in einem neuen Tab geöffnet.","kolibri-logo":"Logo von KoliBri","sort-descending":"Spalte {{column}} absteigend sortiert","sort-ascending":"Spalte {{column}} aufsteigend sortiert","sort-none":"Spalte {{column}} nicht sortiert","table-pagination-label":"Paginierung für die Tabelle {{label}}","avatar-alt":"Avatar von {{name}}","toast-close-all":"Alle schließen"},o={error:"Error",warning:"Warning",info:"Note",success:"Success",message:"Message",close:"Close","form-description":"Form fields marked with an asterisk (*) are mandatory.",of:"of",characters:"characters",new:"New","no-entries":"No entries available.","change-order":"Change order of {{colLabel}}","action-running":"Action is running...","action-done":"Action done",pagination:"Pagination","page-first":"Directly to the first page","page-back":"One page back","page-next":"One page further","page-last":"Directly to the last page","entries-per-site":"Entries per page","page-current":"Page {{page}}","page-selected":"Page {{page}} is selected","page-per-site":"{{entries}} entries per page","nav-maximize":"Maximize navigation","nav-minimize":"Minimize navigation","logo-description":"Logo {{orgShort}}. Federal eagle with flag staff and lettering {{orgLong}}","open-link-in-tab":"The link will open in a new tab.","kolibri-logo":"KoliBri logo","sort-descending":"sorted column {{column}} descending","sort-ascending":"sorted column {{column}} ascending","sort-none":"column {{column}} not sorted","table-pagination-label":"Pagination for table {{label}}","avatar-alt":"Avatar of {{name}}","toast-close-all":"Close all"},r=e=>Object.keys(e).reduce(((t,i)=>(t[`kol-${i}`]=e[i],t)),{}),l=new Set([e=>e("en",r(o)),e=>e("de",r(s))]),c=(e,t)=>{const i=(0,a.g)();if(void 0===i)return(0,n.d)("[I18n] I18nService not available! Please call the global register function."),e;let s=i.translate(e,t);return s===e&&((0,n.d)("[I18n] Locales not initialized! Initialize default locales automatically."),l.forEach((e=>e(((e,t)=>(i.addResourceBundle(e,t),e))))),s=i.translate(e,t)),s}},88385:(e,t,i)=>{i.d(t,{i:()=>o,v:()=>r});var a=i(28330),n=i(74817);const s=(e,t,i)=>{(0,n.c)(i)?e[t]=i:(0,n.i)(i,1)&&(e[t]={icon:i})},o=e=>"object"==typeof e&&null!==e&&(void 0===e.style||(0,n.b)(e.style))&&(0,n.i)(e.icon,1),r=(e,t)=>{(0,a.o)(t,(()=>{try{t=(0,a.p)(t)}catch(e){}(0,a.w)(e,"_icons",(e=>null===e||(0,n.i)(e,1)||"object"==typeof e&&null!==e&&((0,n.i)(e.left,1)||o(e.left)||(0,n.i)(e.right,1)||o(e.right)||(0,n.i)(e.top,1)||o(e.top)||(0,n.i)(e.bottom,1)||o(e.bottom))),new Set(["KoliBriIcon"]),t,{hooks:{beforePatch:(t,i)=>{null===t&&i.set("_icons",{}),(e=>{var t,i,a;if(null===(t=e.nextState)||void 0===t?void 0:t.has("_icons")){const t=null===(i=e.nextState)||void 0===i?void 0:i.get("_icons");null===(a=e.nextState)||void 0===a||a.set("_icons",(e=>{let t={};return(0,n.i)(e,1)?t={left:{icon:e}}:"object"==typeof e&&null!==e&&(s(t,"top",e.top),s(t,"right",e.right),s(t,"bottom",e.bottom),s(t,"left",e.left)),t})(t))}})(e)}},required:!0})}))}},48399:(e,t,i)=>{i.r(t),i.d(t,{kol_link_wc:()=>b});var a=i(42054),n=i(40383),s=i(16376),o=i(28330),r=i(88385),l=i(11032),c=i(95059),h=i(8921),d=i(74817),g=i(6782),v=i(25422),u=i(97056);const _=(e,t,i)=>{(0,o.w)(e,t,(e=>"date"===e||"location"===e||"page"===e||"step"===e||"time"===e||!0===e||!1===e),new Set(["String {data, location, page, step, time}","boolean"]),i)},b=class{constructor(e){(0,a.r)(this,e),this.catchRef=e=>{this.ref=e,(0,d.a)(this.host,this.ref)},this.onClick=e=>{var t,i;"function"==typeof(null===(t=this.state._on)||void 0===t?void 0:t.onClick)&&(e.preventDefault(),e.stopPropagation(),(0,o.f)(e,this.ref),null===(i=this.state._on)||void 0===i||i.onClick(e,this.state._href))},this.getRenderValues=()=>{const e="string"==typeof this.state._target&&"_self"!==this.state._target,t={href:"string"==typeof this.state._href&&this.state._href.length>0?this.state._href:"javascript:void(0);",target:"string"==typeof this.state._target&&this.state._target.length>0?this.state._target:void 0,rel:e?"noopener":void 0,download:"string"==typeof this.state._download?this.state._download:void 0};return!0!==this.state._hideLabel||this.state._label||(0,h.d)("[KolLink] Es muss ein Aria-Label gesetzt werden _hide-label gesetzt ist."),{isExternal:e,tagAttrs:t}},this.unsubscribeAriaCurrentSubject=o.h.subscribe((e=>{try{this.state._listenAriaCurrent&&this.state._listenAriaCurrent===e.ariaCurrent&&(this.state._href===e.href?this.validateAriaCurrent(e.ariaCurrent):this.validateAriaCurrent(!1))}catch(e){(0,h.g)("The aria-current event is not valid.")}})),this._accessKey=void 0,this._download=void 0,this._hideLabel=!1,this._href=void 0,this._icons=void 0,this._label=void 0,this._listenAriaCurrent=void 0,this._on=void 0,this._role=void 0,this._tabIndex=void 0,this._target=void 0,this._targetDescription=(0,n.a)("kol-open-link-in-tab"),this._tooltipAlign="right",this.state={_href:"…",_icons:{}}}render(){const{isExternal:e,tagAttrs:t}=this.getRenderValues(),i=(0,d.s)(this.state._label);return(0,a.h)(a.H,null,(0,a.h)("a",Object.assign({ref:this.catchRef},t,{accessKey:this.state._accessKey,"aria-current":this.state._ariaCurrent,"aria-label":this.state._hideLabel&&"string"==typeof this.state._label?this.state._label:void 0,class:{"external-link":e,"hide-label":!0===this.state._hideLabel}},this.state._on,{onClick:this.onClick,onKeyPress:this.onClick,role:this.state._role,tabIndex:this.state._tabIndex}),(0,a.h)("kol-span-wc",{_accessKey:this.state._accessKey,_icons:this.state._icons,_hideLabel:this.state._hideLabel,_label:i?"":this.state._label||this.state._href},(0,a.h)("slot",{name:"expert",slot:"expert"})),e&&(0,a.h)("kol-icon",{class:"external-link-icon",_label:this.state._targetDescription,_icons:"codicon codicon-link-external"})),(0,a.h)("kol-tooltip-wc",{"aria-hidden":"true",hidden:i||!this.state._hideLabel,_accessKey:this.state._accessKey,_align:this.state._tooltipAlign,_label:this.state._label||this.state._href}))}validateAccessKey(e){(0,u.v)(this,e)}validateAriaCurrent(e){((e,t)=>{_(this,"_ariaCurrent",t)})(0,e)}validateDownload(e){((e,t)=>{(0,o.d)(e,"_download",t)})(this,e)}validateHideLabel(e){(0,v.v)(this,e)}validateHref(e){((e,t,i={})=>{(0,o.d)(e,"_href",t,i)})(this,e)}validateIcons(e){(0,r.v)(this,e)}validateLabel(e){(0,l.a)(this,e)}validateListenAriaCurrent(e){((e,t)=>{_(this,"_listenAriaCurrent",t)})(0,e)}validateOn(e){((e,t)=>{"object"==typeof t&&"function"==typeof(null==t?void 0:t.onClick)&&(e.state=Object.assign(Object.assign({},e.state),{_on:t}))})(this,e)}validateRole(e){(0,s.v)(this,e)}validateTabIndex(e){(0,g.v)(this,e)}validateTarget(e){((e,t)=>{(0,o.d)(e,"_target",t)})(this,e)}validateTargetDescription(e){(0,o.d)(this,"_targetDescription",e)}validateTooltipAlign(e){(0,c.v)(this,e)}componentWillLoad(){this.validateAccessKey(this._accessKey),this.validateDownload(this._download),this.validateHideLabel(this._hideLabel),this.validateHref(this._href),this.validateIcons(this._icons),this.validateLabel(this._label),this.validateListenAriaCurrent(this._listenAriaCurrent),this.validateOn(this._on),this.validateRole(this._role),this.validateTabIndex(this._tabIndex),this.validateTarget(this._target),this.validateTargetDescription(this._targetDescription),this.validateTooltipAlign(this._tooltipAlign)}disconnectedCallback(){this.unsubscribeAriaCurrentSubject.unsubscribe()}get host(){return(0,a.g)(this)}static get watchers(){return{_accessKey:["validateAccessKey"],_download:["validateDownload"],_hideLabel:["validateHideLabel"],_href:["validateHref"],_icons:["validateIcons"],_label:["validateLabel"],_listenAriaCurrent:["validateListenAriaCurrent"],_on:["validateOn"],_role:["validateRole"],_tabIndex:["validateTabIndex"],_target:["validateTarget"],_targetDescription:["validateTargetDescription"],_tooltipAlign:["validateTooltipAlign"]}}}},11032:(e,t,i)=>{i.d(t,{a:()=>d,c:()=>l,h:()=>r,v:()=>h});var a=i(8921),n=i(28330);const s=/[a-zA-Z0-9äöüÄÖÜß]/g,o=/^\d+$/;function r(e,t=1){return function(e){var t;return"string"==typeof e&&(null===(t=e.match(s))||void 0===t?void 0:t.length)||0}(e)>=t}function l(e){return o.test(e)}const c=new Set(["string"]),h=(e,t,i={})=>{(0,n.w)(e,"_label",(e=>"string"==typeof e),c,t,function(e){var t;return{hooks:{afterPatch:(t,i,n,s)=>{var o,c;"function"==typeof(null===(o=e.hooks)||void 0===o?void 0:o.afterPatch)&&(null===(c=e.hooks)||void 0===c||c.afterPatch(t,i,n,s)),"string"==typeof t&&!1===r(t,3)&&!1===l(t)&&(0,a.a)(`The heading or label ("${t}") is not accessible. A label should consist of at least three readable characters.`),"string"==typeof t&&t.length>80&&(0,a.u)("A heading or label should not be longer than 80 characters.")},beforePatch:null===(t=e.hooks)||void 0===t?void 0:t.beforePatch}}}(i))},d=h},6782:(e,t,i)=>{i.d(t,{v:()=>o});var a=i(8921),n=i(28330);const s={hooks:{afterPatch:e=>{-1!==e&&0!==e&&(0,a.a)("Don’t Use Tabindex Greater than 0: https://adrianroselli.com/2014/11/dont-use-tabindex-greater-than-0.html")}}},o=(e,t)=>{(0,n.e)(e,"_tabIndex",t,s)}},95059:(e,t,i)=>{i.d(t,{v:()=>n});var a=i(78792);const n=(e,t)=>{(0,a.v)(e,"_tooltipAlign",t)}}}]);