/*! For license information please see 5387.js.LICENSE.txt */
"use strict";(self.webpackChunk_public_ui_designer=self.webpackChunk_public_ui_designer||[]).push([[5387],{69970:(t,e,i)=>{i.d(e,{w:()=>s});var a=i(32996);const s=(t,e,i)=>{(0,a.a)(t,e,(t=>"top"===t||"right"===t||"bottom"===t||"left"===t),new Set(["Alignment {top, right, buttom, left}"]),i,{defaultValue:"top"})}},34365:(t,e,i)=>{i.d(e,{a:()=>s,w:()=>o});var a=i(32996);const s=(t,e,i)=>{(0,a.a)(t,e,(t=>"button"===t||"reset"===t||"submit"===t),new Set(["KoliBriButtonType {button, reset, submit}"]),i)},o=(t,e,i)=>{(0,a.a)(t,e,(t=>"primary"===t||"secondary"===t||"normal"===t||"danger"===t||"ghost"===t||"custom"===t),new Set(["KoliBriButtonVariant {primary, secondary, normal, danger, ghost, custom}"]),i,{defaultValue:"normal"})}},32863:(t,e,i)=>{i.d(e,{a:()=>h});var a=i(51201),s=i(28242);const o={error:"Fehler",warning:"Warnung",info:"Hinweis",success:"Erfolg",message:"Nachricht",close:"Schließen","form-description":"Formular-Felder, die mit einem Sternchen (*) gekennzeichnet sind, sind Pflichtangaben.",of:"von",characters:"Zeichen",new:"Neu","no-entries":"Es sind keine Einträge vorhanden.","change-order":"Sortierung von {{colLabel}} ändern","action-running":"Aktion wird ausgeführt...","action-done":"Aktion abgeschlossen","page-first":"Direkt zur ersten Seite","page-back":"Eine Seite zurück","page-next":"Eine Seite weiter","page-last":"Direkt zur letzten Seite","entries-per-site":"Einträge pro Seite","page-current":"Seite {{page}}","page-selected":"Seite {{page}} ist ausgewählt","page-per-site":"{{entries}} Einträge pro Seite","nav-maximize":"Navigation maximieren","nav-minimize":"Navigation minimieren","logo-description":"Logo {{orgShort}}. Bundesadler mit Flaggenstab und Schriftzug {{orgLong}}","open-link-in-tab":"Der Link wird in einem neuen Tab geöffnet.","kolibri-logo":"Logo von KoliBri"},n={error:"Error",warning:"Warning",info:"Note",success:"Success",message:"Message",close:"Close","form-description":"Form fields marked with an asterisk (*) are mandatory.",of:"of",characters:"characters",new:"New","no-entries":"No entries available.","change-order":"Change order of {{colLabel}}","action-running":"Action is running...","action-done":"Action done","page-first":"Directly to the first page","page-back":"One page back","page-next":"One page further","page-last":"Directly to the last page","entries-per-site":"Entries per page","page-current":"Page {{page}}","page-selected":"Page {{page}} is selected","page-per-site":"{{entries}} entries per page","nav-maximize":"Maximize","nav-minimize":"Minimize","logo-description":"Logo {{orgShort}}. Federal eagle with flag staff and lettering {{orgLong}}","open-link-in-tab":"The link will open in a new tab.","kolibri-logo":"KoliBri logo"},l=t=>Object.keys(t).reduce(((e,i)=>(e[`kol-${i}`]=t[i],e)),{}),r=new Set([t=>t("en",l(n)),t=>t("de",l(o))]),h=(t,e)=>{const i=(0,a.g)();if(void 0===i)return(0,s.d)("[I18n] I18nService not available! Please call the global register function."),t;let o=i.translate(t,e);return o===t&&((0,s.d)("[I18n] Locales not initialized! Initialize default locales automatically."),r.forEach((t=>t(((t,e)=>(i.addResourceBundle(t,e),t))))),o=i.translate(t,e)),o}},55387:(t,e,i)=>{i.r(e),i.d(e,{kol_pagination:()=>_});var a=i(90578),s=i(32863),o=i(69970),n=i(70834),l=i(32996),r=i(11383),h=i(34365);const g={left:"codicon codicon-debug-reverse-continue"},c={left:"codicon codicon-chevron-left"},p={right:"codicon codicon-chevron-right"},u={right:"codicon codicon-debug-continue"},_=class{constructor(t){(0,a.r)(this,t),this.nonce=(0,n.n)(),this.calcCount=(t,e=1)=>Math.ceil(t/e),this.getCount=()=>this.calcCount(this.state._total,this.state._pageSize),this.onClick=(t,e)=>{"function"==typeof this.state._on.onClick&&this.state._on.onClick(t,e),this.onChangePage(t,e)},this.onChangePage=(t,e)=>{const i=setTimeout((()=>{clearTimeout(i),"function"==typeof this.state._on.onChangePage&&this.state._on.onChangePage(t,e)}))},this.onChangePageSize=(t,e)=>{if("number"==typeof(e=parseInt(e[0]))&&e>0&&this._pageSize!==e){this._pageSize=e;const i=setTimeout((()=>{clearTimeout(i),"function"==typeof this.state._on.onChangePageSize&&this.state._on.onChangePageSize(t,this._pageSize)}))}},this.onGoToFirst={onClick:t=>{this.onClick(t,1)}},this.onGoToEnd={onClick:t=>{this.onClick(t,this.getCount())}},this.onGoBackward={onClick:t=>{this.onClick(t,this.state._page-1)}},this.onGoForward={onClick:t=>{this.onClick(t,this.state._page+1)}},this.beforePageSize=(t,e)=>{let i=e.has("_pageSize")?e.get("_pageSize"):this.state._pageSize;const a=e.has("_pageSizeOptions")?e.get("_pageSizeOptions"):this.state._pageSizeOptions;if(Array.isArray(a)&&a.length>0){const t=a.find((t=>t.value===i));i=void 0===t?a[0].value:t.value,e.set("_pageSize",i)}const s=e.has("_page")?e.get("_page"):this.state._page,o=e.has("_total")?e.get("_total"):this.state._total;this.syncPage(e,s,e.get("_pageSize"),o)},this.syncPage=(t,e,i,a)=>{if(a>0){const s=this.calcCount(a,i);s>0&&(e>s?(t.set("_page",s),this.onChangePage(r.S,s)):e<1&&(t.set("_page",1),this.onChangePage(r.S,1)))}},this.beforePageSizeOptions=(t,e)=>{const i=[];if(Array.isArray(t))for(const e of t)"number"==typeof e&&i.push({label:(0,s.a)("kol-page-per-site",{placeholders:{entries:`${e}`}}),value:e});e.set("_pageSizeOptions",i),this.beforePageSize(i,e)},this._boundaryCount=1,this._customClass=void 0,this._hasButtons=!0,this._page=void 0,this._pageSize=1,this._pageSizeOptions=[],this._on=void 0,this._siblingCount=1,this._tooltipAlign="top",this._total=void 0,this._variant="normal",this.state={_boundaryCount:1,_hasButtons:{first:!0,last:!0,next:!0,previous:!0},_on:{onClick:()=>null},_page:0,_pageSize:1,_pageSizeOptions:[],_siblingCount:1,_total:0,_variant:"normal"}}render(){var t;let e=!1;const i=this.getCount(),o=Array.from(Array(i).keys()).map((t=>t+1)).map((t=>t<=this.state._boundaryCount||t>i-this.state._boundaryCount||t>=this.state._page-this.state._siblingCount&&t<=this.state._page+this.state._siblingCount?(e=!0,this.state._page===t?this.getSelectedPageButton(t):this.getUnselectedPageButton(t)):!0===e?(e=!1,(0,a.h)("span",{class:"separator",key:`${this.nonce}-el-${t}`})):null));return(0,a.h)(a.H,null,(0,a.h)("div",null,this.state._hasButtons.first&&(0,a.h)("kol-button",{class:"first",exportparts:"icon",_customClass:this.state._customClass,_disabled:this.state._page<=1,_icon:g,_hideLabel:!0,_label:(0,s.a)("kol-page-first"),_on:this.onGoToFirst,_variant:this.state._variant,_tooltipAlign:this.state._tooltipAlign}),this.state._hasButtons.previous&&(0,a.h)("kol-button",{class:"previous",exportparts:"icon",_customClass:this.state._customClass,_disabled:this.state._page<=1,_icon:c,_hideLabel:!0,_label:(0,s.a)("kol-page-back"),_on:this.onGoBackward,_variant:this.state._variant,_tooltipAlign:this.state._tooltipAlign}),o,this.state._hasButtons.next&&(0,a.h)("kol-button",{class:"next",exportparts:"icon",_customClass:this.state._customClass,_disabled:i<=this.state._page,_icon:p,_hideLabel:!0,_label:(0,s.a)("kol-page-next"),_on:this.onGoForward,_variant:this.state._variant,_tooltipAlign:this.state._tooltipAlign}),this.state._hasButtons.last&&(0,a.h)("kol-button",{class:"last",exportparts:"icon",_customClass:this.state._customClass,_disabled:i<=this.state._page,_icon:u,_hideLabel:!0,_label:(0,s.a)("kol-page-last"),_on:this.onGoToEnd,_variant:this.state._variant,_tooltipAlign:this.state._tooltipAlign})),(null===(t=this.state._pageSizeOptions)||void 0===t?void 0:t.length)>0&&(0,a.h)("kol-select",{_hideLabel:!0,_id:"pagination-size",_label:(0,s.a)("kol-entries-per-site"),_list:this.state._pageSizeOptions,_on:{onChange:this.onChangePageSize},_value:[this.state._pageSize]}))}getUnselectedPageButton(t){return(0,a.h)("kol-button",{exportparts:"icon",key:`${this.nonce}-${t}`,_customClass:this.state._customClass,_label:`${t}`,_on:{onClick:e=>{this.onClick(e,t)}},_variant:this.state._variant})}getSelectedPageButton(t){return(0,a.h)("kol-button-wc",{class:"selected",key:`${this.nonce}-selected`,_customClass:this.state._customClass,_disabled:!0,_ariaCurrent:!0,_label:`${t}`,_variant:this.state._variant})}validateBoundaryCount(t){(0,l.e)(this,"_boundaryCount",Math.max(0,null!=t?t:1))}validateCustomClass(t){(0,l.w)(this,"_customClass",t,{defaultValue:void 0})}validateHasButtons(t){(0,l.a)(this,"_hasButtons",(t=>"boolean"==typeof t||"string"==typeof t||"object"==typeof t&&null!==t),new Set(["Boolean","PaginationHasButton"]),t,{hooks:{beforePatch:(t,e)=>{if("boolean"==typeof t)e.set("_hasButtons",{first:t,last:t,next:t,previous:t});else{if("string"==typeof t)try{t=(0,l.p)(t)}catch(t){e.delete("_hasButtons")}"object"==typeof t&&null!==t&&e.set("_hasButtons",Object.assign(Object.assign({},this.state._hasButtons),{first:"boolean"==typeof t.first?!0===t.first:this.state._hasButtons.first,last:"boolean"==typeof t.last?!0===t.last:this.state._hasButtons.last,next:"boolean"==typeof t.next?!0===t.next:this.state._hasButtons.next,previous:"boolean"==typeof t.previous?!0===t.previous:this.state._hasButtons.previous}))}}}})}validateOn(t){"object"==typeof t&&null!==t&&(this.state=Object.assign(Object.assign({},this.state),{_on:t}))}validatePage(t){(0,l.e)(this,"_page",t,{hooks:{beforePatch:(t,e)=>{const i=e.has("_pageSize")?e.get("_pageSize"):this.state._pageSize,a=e.has("_total")?e.get("_total"):this.state._total;this.syncPage(e,t,i,a)}}})}validatePageSize(t){(0,l.e)(this,"_pageSize",t,{hooks:{beforePatch:this.beforePageSize}})}validatePageSizeOptions(t){(0,l.d)(this,"_pageSizeOptions",(t=>"number"==typeof t),t,void 0,{hooks:{beforePatch:this.beforePageSizeOptions}})}validateSiblingCount(t){(0,l.e)(this,"_siblingCount",Math.max(0,null!=t?t:1))}validateTotal(t){(0,l.e)(this,"_total",t,{hooks:{beforePatch:(t,e)=>{const i=e.has("_page")?e.get("_page"):this.state._page,a=e.has("_pageSize")?e.get("_pageSize"):this.state._pageSize;this.syncPage(e,i,a,t)}}})}validateTooltipAlign(t){(0,o.w)(this,"_tooltipAlign",t)}validateVariant(t){(0,h.w)(this,"_variant",t)}componentWillLoad(){this.validateBoundaryCount(this._boundaryCount),this.validateCustomClass(this._customClass),this.validateHasButtons(this._hasButtons),this.validateOn(this._on),this.validatePage(this._page),this.validatePageSize(this._pageSize),this.validatePageSizeOptions(this._pageSizeOptions),this.validateSiblingCount(this._siblingCount),this.validateTooltipAlign(this._tooltipAlign),this.validateTotal(this._total),this.validateVariant(this._variant),this.validatePage(this._page)}static get watchers(){return{_boundaryCount:["validateBoundaryCount"],_customClass:["validateCustomClass"],_hasButtons:["validateHasButtons"],_on:["validateOn"],_page:["validatePage"],_pageSize:["validatePageSize"],_pageSizeOptions:["validatePageSizeOptions"],_siblingCount:["validateSiblingCount"],_total:["validateTotal"],_tooltipAlign:["validateTooltipAlign"],_variant:["validateVariant"]}}};_.style={default:":host{--a11y-min-size:44px;font-size:inherit}*{hyphens:auto;letter-spacing:inherit;word-break:break-word;word-spacing:inherit}[role='button'],button:not([role='link']),kol-input .input{min-height:var(--a11y-min-size);min-width:var(--a11y-min-size)}a,button,h1,h2,h3,h4,h5,h6,input,option,select,textarea{font-family:inherit;font-size:inherit}:is(a,button){background-color:transparent;border:none;margin:0;padding:0;width:100%;}:host{max-width:100%}*{box-sizing:border-box}kol-span-wc{display:grid;place-items:center}kol-span-wc>span{display:flex;place-items:center}a,button{cursor:pointer}button,input,option,select,textarea{font-family:inherit}.icon-only>kol-span-wc>span>span{display:none}.separator:before{content:'•••'}"}}}]);