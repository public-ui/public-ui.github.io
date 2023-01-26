/*! For license information please see 382.ea329ad8.js.LICENSE.txt */
"use strict";(self.webpackChunk_public_ui_website=self.webpackChunk_public_ui_website||[]).push([[382],{5148:(t,e,a)=>{a.d(e,{w:()=>i});var s=a(3837);const i=(t,e,a)=>{(0,s.a)(t,e,(t=>"top"===t||"right"===t||"bottom"===t||"left"===t),new Set(["Alignment {top, right, buttom, left}"]),a,{defaultValue:"top"})}},1914:(t,e,a)=>{a.d(e,{a:()=>i,w:()=>o});var s=a(3837);const i=(t,e,a)=>{(0,s.a)(t,e,(t=>"button"===t||"reset"===t||"submit"===t),new Set(["KoliBriButtonType {button, reset, submit}"]),a)},o=(t,e,a)=>{(0,s.a)(t,e,(t=>"primary"===t||"secondary"===t||"normal"===t||"danger"===t||"ghost"===t||"custom"===t),new Set(["KoliBriButtonVariant {primary, secondary, normal, danger, ghost, custom}"]),a,{defaultValue:"normal"})}},382:(t,e,a)=>{a.r(e),a.d(e,{kol_pagination:()=>c});var s=a(4250),i=a(5148),o=a(2292),n=a(3837),l=a(1914),h=a(6831),_=a(1584);const g={left:"fa-solid fa-angles-left"},r={left:"fa-solid fa-angle-left"},p={right:"fa-solid fa-angle-right"},u={right:"fa-solid fa-angles-right"},c=class{constructor(t){(0,s.r)(this,t),this.nonce=(0,o.n)(),this.calcCount=(t,e=1)=>Math.ceil(t/e),this.getCount=()=>this.calcCount(this.state._total,this.state._pageSize),this.onClick=(t,e)=>{"function"==typeof this.state._on.onClick&&this.state._on.onClick(t,e),this.onChangePage(t,e)},this.onChangePage=(t,e)=>{const a=setTimeout((()=>{clearTimeout(a),"function"==typeof this.state._on.onChangePage&&this.state._on.onChangePage(t,e)}))},this.onChangePageSize=(t,e)=>{if("number"==typeof(e=parseInt(e[0]))&&e>0&&this._pageSize!==e){this._pageSize=e;const a=setTimeout((()=>{clearTimeout(a),"function"==typeof this.state._on.onChangePageSize&&this.state._on.onChangePageSize(t,this._pageSize)}))}},this.onGoToFirst={onClick:t=>{this.onClick(t,1)}},this.onGoToEnd={onClick:t=>{this.onClick(t,this.getCount())}},this.onGoBackward={onClick:t=>{this.onClick(t,this.state._page-1)}},this.onGoForward={onClick:t=>{this.onClick(t,this.state._page+1)}},this.beforePageSize=(t,e)=>{let a=e.has("_pageSize")?e.get("_pageSize"):this.state._pageSize;const s=e.has("_pageSizeOptions")?e.get("_pageSizeOptions"):this.state._pageSizeOptions;if(Array.isArray(s)&&s.length>0){const t=s.find((t=>t.value===a));a=void 0===t?s[0].value:t.value,e.set("_pageSize",a)}const i=e.has("_page")?e.get("_page"):this.state._page,o=e.has("_total")?e.get("_total"):this.state._total;this.syncPage(e,i,e.get("_pageSize"),o)},this.syncPage=(t,e,a,s)=>{if(s>0){const i=this.calcCount(s,a);i>0&&(e>i?(t.set("_page",i),this.onChangePage(h.S,i)):e<1&&(t.set("_page",1),this.onChangePage(h.S,1)))}},this.beforePageSizeOptions=(t,e)=>{const a=[];if(Array.isArray(t))for(const s of t)"number"==typeof s&&a.push({label:(0,_.a)("kol-page-per-site",{placeholders:{entries:`${s}`}}),value:s});e.set("_pageSizeOptions",a),this.beforePageSize(a,e)},this._boundaryCount=1,this._customClass=void 0,this._hasButtons=void 0,this._page=void 0,this._pageSize=1,this._pageSizeOptions=[],this._on=void 0,this._siblingCount=1,this._tooltipAlign="top",this._total=void 0,this._variant="normal",this.state={_boundaryCount:1,_hasButtons:{first:!0,last:!0,next:!0,previous:!0},_on:{onClick:()=>null},_page:0,_pageSize:1,_pageSizeOptions:[],_siblingCount:1,_total:0,_variant:"normal"}}render(){var t;let e=!1;const a=this.getCount(),i=Array.from(Array(a).keys()).map((t=>t+1)).map((t=>t<=this.state._boundaryCount||t>a-this.state._boundaryCount||t>=this.state._page-this.state._siblingCount&&t<=this.state._page+this.state._siblingCount?(e=!0,this.state._page===t?this.getSelectedPageButton(t):this.getUnselectedPageButton(t)):!0===e?(e=!1,(0,s.h)("span",{key:`${this.nonce}-el-${t}`},"\u2022\u2022\u2022")):null));return(0,s.h)(s.H,null,(0,s.h)("div",null,this.state._hasButtons.first&&(0,s.h)("kol-button",{_customClass:this.state._customClass,_disabled:this.state._page<=1,_icon:g,_iconOnly:!0,_label:(0,_.a)("kol-page-first"),_on:this.onGoToFirst,_variant:this.state._variant,_tooltipAlign:this.state._tooltipAlign}),this.state._hasButtons.previous&&(0,s.h)("kol-button",{_customClass:this.state._customClass,_disabled:this.state._page<=1,_icon:r,_iconOnly:!0,_label:(0,_.a)("kol-page-back"),_on:this.onGoBackward,_variant:this.state._variant,_tooltipAlign:this.state._tooltipAlign}),i,this.state._hasButtons.next&&(0,s.h)("kol-button",{_customClass:this.state._customClass,_disabled:a<=this.state._page,_icon:p,_iconOnly:!0,_label:(0,_.a)("kol-page-next"),_on:this.onGoForward,_variant:this.state._variant,_tooltipAlign:this.state._tooltipAlign}),this.state._hasButtons.last&&(0,s.h)("kol-button",{_customClass:this.state._customClass,_disabled:a<=this.state._page,_icon:u,_iconOnly:!0,_label:(0,_.a)("kol-page-last"),_on:this.onGoToEnd,_variant:this.state._variant,_tooltipAlign:this.state._tooltipAlign})),(null===(t=this.state._pageSizeOptions)||void 0===t?void 0:t.length)>0&&(0,s.h)("kol-select",{_hideLabel:!0,_id:"pagination-size",_list:this.state._pageSizeOptions,_on:{onChange:this.onChangePageSize},_value:[this.state._pageSize]},(0,_.a)("kol-entries-per-site")))}getUnselectedPageButton(t){return(0,s.h)("kol-button",{key:`${this.nonce}-${t}`,_customClass:this.state._customClass,_ariaLabel:(0,_.a)("kol-page-current",{placeholders:{page:t.toFixed(0)}}),_label:`${t}`,_on:{onClick:e=>{this.onClick(e,t)}},_variant:this.state._variant})}getSelectedPageButton(t){return(0,s.h)("kol-button-wc",{class:"selected",key:`${this.nonce}-selected`,_customClass:this.state._customClass,_disabled:!0,_ariaCurrent:!0,_ariaLabel:(0,_.a)("kol-page-selected",{placeholders:{page:t.toFixed(0)}}),_label:`${t}`,_variant:this.state._variant})}validateBoundaryCount(t){(0,n.d)(this,"_boundaryCount",Math.max(0,null!=t?t:1))}validateCustomClass(t){(0,n.w)(this,"_customClass",t,{defaultValue:void 0})}validateHasButtons(t){(0,n.a)(this,"_hasButtons",(t=>"boolean"==typeof t||"string"==typeof t||"object"==typeof t&&null!==t),new Set(["Boolean","PaginationHasButton"]),t,{hooks:{beforePatch:(t,e)=>{if("boolean"==typeof t)e.set("_hasButtons",{first:t,last:t,next:t,previous:t});else{if("string"==typeof t)try{t=(0,n.p)(t)}catch(t){e.delete("_hasButtons")}"object"==typeof t&&null!==t&&e.set("_hasButtons",Object.assign(Object.assign({},this.state._hasButtons),{first:"boolean"==typeof t.first?!0===t.first:this.state._hasButtons.first,last:"boolean"==typeof t.last?!0===t.last:this.state._hasButtons.last,next:"boolean"==typeof t.next?!0===t.next:this.state._hasButtons.next,previous:"boolean"==typeof t.previous?!0===t.previous:this.state._hasButtons.previous}))}}}})}validateOn(t){"object"==typeof t&&null!==t&&(this.state=Object.assign(Object.assign({},this.state),{_on:t}))}validatePage(t){(0,n.d)(this,"_page",t,{hooks:{beforePatch:(t,e)=>{const a=e.has("_pageSize")?e.get("_pageSize"):this.state._pageSize,s=e.has("_total")?e.get("_total"):this.state._total;this.syncPage(e,t,a,s)}}})}validatePageSize(t){(0,n.d)(this,"_pageSize",t,{hooks:{beforePatch:this.beforePageSize}})}validatePageSizeOptions(t){(0,n.c)(this,"_pageSizeOptions",(t=>"number"==typeof t),t,void 0,{hooks:{beforePatch:this.beforePageSizeOptions}})}validateSiblingCount(t){(0,n.d)(this,"_siblingCount",Math.max(0,null!=t?t:1))}validateTotal(t){(0,n.d)(this,"_total",t,{hooks:{beforePatch:(t,e)=>{const a=e.has("_page")?e.get("_page"):this.state._page,s=e.has("_pageSize")?e.get("_pageSize"):this.state._pageSize;this.syncPage(e,a,s,t)}}})}validateTooltipAlign(t){(0,i.w)(this,"_tooltipAlign",t)}validateVariant(t){(0,l.w)(this,"_variant",t)}componentWillLoad(){this.validateBoundaryCount(this._boundaryCount),this.validateCustomClass(this._customClass),this.validateHasButtons(this._hasButtons),this.validateOn(this._on),this.validatePage(this._page),this.validatePageSize(this._pageSize),this.validatePageSizeOptions(this._pageSizeOptions),this.validateSiblingCount(this._siblingCount),this.validateTooltipAlign(this._tooltipAlign),this.validateTotal(this._total),this.validateVariant(this._variant),this.validatePage(this._page)}static get watchers(){return{_boundaryCount:["validateBoundaryCount"],_customClass:["validateCustomClass"],_hasButtons:["validateHasButtons"],_on:["validateOn"],_page:["validatePage"],_pageSize:["validatePageSize"],_pageSizeOptions:["validatePageSizeOptions"],_siblingCount:["validateSiblingCount"],_total:["validateTotal"],_tooltipAlign:["validateTooltipAlign"],_variant:["validateVariant"]}}};c.style={default:"@windicss; *{box-sizing:border-box;font-size:inherit;hyphens:auto;letter-spacing:inherit;word-break:break-word;word-spacing:inherit}kol-heading-wc{font-weight:700}kol-icon{color:inherit}kol-span-wc{display:grid;place-items:center;width:100%}kol-span-wc>span{display:flex;gap:0.25rem;place-items:center}a,button{cursor:pointer}a.icon-only>kol-span-wc>span>span,button.icon-only>kol-span-wc>span>span{display:none}a{display:inline-flex;place-items:baseline}button{border-width:0}"}},6831:(t,e,a)=>{a.d(e,{S:()=>l,a:()=>i,b:()=>o,c:()=>n,i:()=>s});const s=t=>"object"==typeof t&&null!==t,i=(t,e=0)=>"string"==typeof t&&t.length>=e,o=t=>{if("object"!=typeof t||null===t)return i(t,1);for(const e in t)if(!1===i(e,1))return!1;return!0},n=(t,e)=>0===e.length||((t,e)=>0===e.length&&new RegExp(`^${t}`).test(e))(t,e),l=new Event("StateChange")}}]);