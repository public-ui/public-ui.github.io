/*! For license information please see 5387.js.LICENSE.txt */
"use strict";(self.webpackChunk_public_ui_designer=self.webpackChunk_public_ui_designer||[]).push([[5387],{11835:(t,a,i)=>{i.d(a,{w:()=>s});var e=i(27289);const s=(t,a,i)=>{(0,e.a)(t,a,(t=>"top"===t||"right"===t||"bottom"===t||"left"===t),new Set(["Alignment {top, right, buttom, left}"]),i,{defaultValue:"top"})}},81648:(t,a,i)=>{i.d(a,{a:()=>s,w:()=>o});var e=i(27289);const s=(t,a,i)=>{(0,e.a)(t,a,(t=>"button"===t||"reset"===t||"submit"===t),new Set(["KoliBriButtonType {button, reset, submit}"]),i)},o=(t,a,i)=>{(0,e.a)(t,a,(t=>"primary"===t||"secondary"===t||"normal"===t||"danger"===t||"ghost"===t||"custom"===t),new Set(["KoliBriButtonVariant {primary, secondary, normal, danger, ghost, custom}"]),i,{defaultValue:"normal"})}},55387:(t,a,i)=>{i.r(a),i.d(a,{kol_pagination:()=>u});var e=i(99459),s=i(11835),o=i(13136),n=i(27289),l=i(81648),h=i(52573),r=i(94981);const g={left:"fa-solid fa-angles-left"},_={left:"fa-solid fa-angle-left"},p={right:"fa-solid fa-angle-right"},c={right:"fa-solid fa-angles-right"},u=class{constructor(t){(0,e.r)(this,t),this.nonce=(0,o.n)(),this.calcCount=(t,a=1)=>Math.ceil(t/a),this.getCount=()=>this.calcCount(this.state._total,this.state._pageSize),this.onClick=(t,a)=>{"function"==typeof this.state._on.onClick&&this.state._on.onClick(t,a),this.onChangePage(t,a)},this.onChangePage=(t,a)=>{const i=setTimeout((()=>{clearTimeout(i),"function"==typeof this.state._on.onChangePage&&this.state._on.onChangePage(t,a)}))},this.onChangePageSize=(t,a)=>{if("number"==typeof(a=parseInt(a[0]))&&a>0&&this._pageSize!==a){this._pageSize=a;const i=setTimeout((()=>{clearTimeout(i),"function"==typeof this.state._on.onChangePageSize&&this.state._on.onChangePageSize(t,this._pageSize)}))}},this.onGoToFirst={onClick:t=>{this.onClick(t,1)}},this.onGoToEnd={onClick:t=>{this.onClick(t,this.getCount())}},this.onGoBackward={onClick:t=>{this.onClick(t,this.state._page-1)}},this.onGoForward={onClick:t=>{this.onClick(t,this.state._page+1)}},this.beforePageSize=(t,a)=>{let i=a.has("_pageSize")?a.get("_pageSize"):this.state._pageSize;const e=a.has("_pageSizeOptions")?a.get("_pageSizeOptions"):this.state._pageSizeOptions;if(Array.isArray(e)&&e.length>0){const t=e.find((t=>t.value===i));i=void 0===t?e[0].value:t.value,a.set("_pageSize",i)}const s=a.has("_page")?a.get("_page"):this.state._page,o=a.has("_total")?a.get("_total"):this.state._total;this.syncPage(a,s,a.get("_pageSize"),o)},this.syncPage=(t,a,i,e)=>{if(e>0){const s=this.calcCount(e,i);s>0&&(a>s?(t.set("_page",s),this.onChangePage(h.S,s)):a<1&&(t.set("_page",1),this.onChangePage(h.S,1)))}},this.beforePageSizeOptions=(t,a)=>{const i=[];if(Array.isArray(t))for(const a of t)"number"==typeof a&&i.push({label:(0,r.a)("kol-page-per-site",{placeholders:{entries:`${a}`}}),value:a});a.set("_pageSizeOptions",i),this.beforePageSize(i,a)},this._boundaryCount=1,this._customClass=void 0,this._hasButtons=void 0,this._page=void 0,this._pageSize=1,this._pageSizeOptions=[],this._on=void 0,this._siblingCount=1,this._tooltipAlign="top",this._total=void 0,this._variant="normal",this.state={_boundaryCount:1,_hasButtons:{first:!0,last:!0,next:!0,previous:!0},_on:{onClick:()=>null},_page:0,_pageSize:1,_pageSizeOptions:[],_siblingCount:1,_total:0,_variant:"normal"}}render(){var t;let a=!1;const i=this.getCount(),s=Array.from(Array(i).keys()).map((t=>t+1)).map((t=>t<=this.state._boundaryCount||t>i-this.state._boundaryCount||t>=this.state._page-this.state._siblingCount&&t<=this.state._page+this.state._siblingCount?(a=!0,this.state._page===t?this.getSelectedPageButton(t):this.getUnselectedPageButton(t)):!0===a?(a=!1,(0,e.h)("span",{key:`${this.nonce}-el-${t}`},"•••")):null));return(0,e.h)(e.H,null,(0,e.h)("div",null,this.state._hasButtons.first&&(0,e.h)("kol-button",{_customClass:this.state._customClass,_disabled:this.state._page<=1,_icon:g,_iconOnly:!0,_label:(0,r.a)("kol-page-first"),_on:this.onGoToFirst,_variant:this.state._variant,_tooltipAlign:this.state._tooltipAlign}),this.state._hasButtons.previous&&(0,e.h)("kol-button",{_customClass:this.state._customClass,_disabled:this.state._page<=1,_icon:_,_iconOnly:!0,_label:(0,r.a)("kol-page-back"),_on:this.onGoBackward,_variant:this.state._variant,_tooltipAlign:this.state._tooltipAlign}),s,this.state._hasButtons.next&&(0,e.h)("kol-button",{_customClass:this.state._customClass,_disabled:i<=this.state._page,_icon:p,_iconOnly:!0,_label:(0,r.a)("kol-page-next"),_on:this.onGoForward,_variant:this.state._variant,_tooltipAlign:this.state._tooltipAlign}),this.state._hasButtons.last&&(0,e.h)("kol-button",{_customClass:this.state._customClass,_disabled:i<=this.state._page,_icon:c,_iconOnly:!0,_label:(0,r.a)("kol-page-last"),_on:this.onGoToEnd,_variant:this.state._variant,_tooltipAlign:this.state._tooltipAlign})),(null===(t=this.state._pageSizeOptions)||void 0===t?void 0:t.length)>0&&(0,e.h)("kol-select",{_hideLabel:!0,_id:"pagination-size",_list:this.state._pageSizeOptions,_on:{onChange:this.onChangePageSize},_value:[this.state._pageSize]},(0,r.a)("kol-entries-per-site")))}getUnselectedPageButton(t){return(0,e.h)("kol-button",{key:`${this.nonce}-${t}`,_customClass:this.state._customClass,_ariaLabel:(0,r.a)("kol-page-current",{placeholders:{page:t.toFixed(0)}}),_label:`${t}`,_on:{onClick:a=>{this.onClick(a,t)}},_variant:this.state._variant})}getSelectedPageButton(t){return(0,e.h)("kol-button-wc",{class:"selected",key:`${this.nonce}-selected`,_customClass:this.state._customClass,_disabled:!0,_ariaCurrent:!0,_ariaLabel:(0,r.a)("kol-page-selected",{placeholders:{page:t.toFixed(0)}}),_label:`${t}`,_variant:this.state._variant})}validateBoundaryCount(t){(0,n.e)(this,"_boundaryCount",Math.max(0,null!=t?t:1))}validateCustomClass(t){(0,n.w)(this,"_customClass",t,{defaultValue:void 0})}validateHasButtons(t){(0,n.a)(this,"_hasButtons",(t=>"boolean"==typeof t||"string"==typeof t||"object"==typeof t&&null!==t),new Set(["Boolean","PaginationHasButton"]),t,{hooks:{beforePatch:(t,a)=>{if("boolean"==typeof t)a.set("_hasButtons",{first:t,last:t,next:t,previous:t});else{if("string"==typeof t)try{t=(0,n.p)(t)}catch(t){a.delete("_hasButtons")}"object"==typeof t&&null!==t&&a.set("_hasButtons",Object.assign(Object.assign({},this.state._hasButtons),{first:"boolean"==typeof t.first?!0===t.first:this.state._hasButtons.first,last:"boolean"==typeof t.last?!0===t.last:this.state._hasButtons.last,next:"boolean"==typeof t.next?!0===t.next:this.state._hasButtons.next,previous:"boolean"==typeof t.previous?!0===t.previous:this.state._hasButtons.previous}))}}}})}validateOn(t){"object"==typeof t&&null!==t&&(this.state=Object.assign(Object.assign({},this.state),{_on:t}))}validatePage(t){(0,n.e)(this,"_page",t,{hooks:{beforePatch:(t,a)=>{const i=a.has("_pageSize")?a.get("_pageSize"):this.state._pageSize,e=a.has("_total")?a.get("_total"):this.state._total;this.syncPage(a,t,i,e)}}})}validatePageSize(t){(0,n.e)(this,"_pageSize",t,{hooks:{beforePatch:this.beforePageSize}})}validatePageSizeOptions(t){(0,n.d)(this,"_pageSizeOptions",(t=>"number"==typeof t),t,void 0,{hooks:{beforePatch:this.beforePageSizeOptions}})}validateSiblingCount(t){(0,n.e)(this,"_siblingCount",Math.max(0,null!=t?t:1))}validateTotal(t){(0,n.e)(this,"_total",t,{hooks:{beforePatch:(t,a)=>{const i=a.has("_page")?a.get("_page"):this.state._page,e=a.has("_pageSize")?a.get("_pageSize"):this.state._pageSize;this.syncPage(a,i,e,t)}}})}validateTooltipAlign(t){(0,s.w)(this,"_tooltipAlign",t)}validateVariant(t){(0,l.w)(this,"_variant",t)}componentWillLoad(){this.validateBoundaryCount(this._boundaryCount),this.validateCustomClass(this._customClass),this.validateHasButtons(this._hasButtons),this.validateOn(this._on),this.validatePage(this._page),this.validatePageSize(this._pageSize),this.validatePageSizeOptions(this._pageSizeOptions),this.validateSiblingCount(this._siblingCount),this.validateTooltipAlign(this._tooltipAlign),this.validateTotal(this._total),this.validateVariant(this._variant),this.validatePage(this._page)}static get watchers(){return{_boundaryCount:["validateBoundaryCount"],_customClass:["validateCustomClass"],_hasButtons:["validateHasButtons"],_on:["validateOn"],_page:["validatePage"],_pageSize:["validatePageSize"],_pageSizeOptions:["validatePageSizeOptions"],_siblingCount:["validateSiblingCount"],_total:["validateTotal"],_tooltipAlign:["validateTooltipAlign"],_variant:["validateVariant"]}}};u.style={default:":host{--kolibri-border-color:#666;--kolibri-border-radius:0.125rem;--kolibri-border-width:1px;--kolibri-color-error:#f44336;--kolibri-color-info:#2196f3;--kolibri-color-success:#4caf50;--kolibri-color-warning:#ff9800;--kolibri-color-primary:#3f51b5;--kolibri-color-secondary:#ff4081;--kolibri-color-normal:#9e9e9e;--kolibri-color-danger:#f44336;--kolibri-color-ghost:#f5f5f5;--kolibri-color-disabled:#bdbdbd;--kolibri-color-text:#222222;--kolibri-color-visited:#9c27b0;--kolibri-font-family:Verdana, Arial, Tahoma, Helvetica, sans-serif;--kolibri-font-size:16px;--kolibri-spacing:0.25rem}:host{font-family:inherit;font-size:inherit}:host *{hyphens:auto;letter-spacing:inherit;word-break:break-word;word-spacing:inherit}:host{display:inline-block}a,button{background-color:transparent;border:none;font-size:inherit;margin:0;padding:0;transition-duration:0.5s;transition-property:background-color, color, border-color}:host{font-family:var(--kolibri-font-family);font-size:inherit}*{box-sizing:border-box}kol-icon{color:inherit}kol-span-wc{display:grid;gap:var(--kolibri-spacing);place-items:center}kol-span-wc>span{display:flex;gap:var(--kolibri-spacing);place-items:center}kol-span-wc>kol-icon,kol-span-wc>span>kol-icon{display:inline-grid;place-items:center;width:1em;height:1em}a,button,input,select,textarea{appearance:none;cursor:pointer}a.icon-only>kol-span-wc>span>span,button.icon-only>kol-span-wc>span>span{display:none}h1,h2,h3,h4,h5,h6{font-family:var(--kolibri-font-family);font-size:var(--kolibri-font-size);margin:0;padding:0}"}}}]);