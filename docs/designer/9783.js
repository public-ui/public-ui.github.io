/*! For license information please see 9783.js.LICENSE.txt */
"use strict";(self.webpackChunk_public_ui_designer=self.webpackChunk_public_ui_designer||[]).push([[9783],{10172:(t,e,i)=>{i.d(e,{a:()=>h});var a=i(51201),o=i(49691);const n={error:"Fehler",warning:"Warnung",info:"Hinweis",success:"Erfolg",message:"Nachricht",close:"Schließen","form-description":"Formular-Felder, die mit einem Sternchen (*) gekennzeichnet sind, sind Pflichtangaben.",of:"von",characters:"Zeichen",new:"Neu","no-entries":"Es sind keine Einträge vorhanden.","change-order":"Sortierung von {{colLabel}} ändern","action-running":"Aktion wird ausgeführt...","action-done":"Aktion abgeschlossen","page-first":"Direkt zur ersten Seite","page-back":"Eine Seite zurück","page-next":"Eine Seite weiter","page-last":"Direkt zur letzten Seite","entries-per-site":"Einträge pro Seite","page-current":"Seite {{page}}","page-selected":"Seite {{page}} ist ausgewählt","page-per-site":"{{entries}} Einträge pro Seite","nav-maximize":"Navigation maximieren","nav-minimize":"Navigation minimieren","logo-description":"Logo {{orgShort}}. Bundesadler mit Flaggenstab und Schriftzug {{orgLong}}","open-link-in-tab":"Der Link wird in einem neuen Tab geöffnet.","kolibri-logo":"Logo von KoliBri","avatar-alt":"Avatar-Bild von {{name}}"},s={error:"Error",warning:"Warning",info:"Note",success:"Success",message:"Message",close:"Close","form-description":"Form fields marked with an asterisk (*) are mandatory.",of:"of",characters:"characters",new:"New","no-entries":"No entries available.","change-order":"Change order of {{colLabel}}","action-running":"Action is running...","action-done":"Action done","page-first":"Directly to the first page","page-back":"One page back","page-next":"One page further","page-last":"Directly to the last page","entries-per-site":"Entries per page","page-current":"Page {{page}}","page-selected":"Page {{page}} is selected","page-per-site":"{{entries}} entries per page","nav-maximize":"Maximize","nav-minimize":"Minimize","logo-description":"Logo {{orgShort}}. Federal eagle with flag staff and lettering {{orgLong}}","open-link-in-tab":"The link will open in a new tab.","kolibri-logo":"KoliBri logo","avatar-alt":"Avatar picture of {{name}}"},r=t=>Object.keys(t).reduce(((e,i)=>(e[`kol-${i}`]=t[i],e)),{}),l=new Set([t=>t("en",r(s)),t=>t("de",r(n))]),h=(t,e)=>{const i=(0,a.g)();if(void 0===i)return(0,o.d)("[I18n] I18nService not available! Please call the global register function."),t;let n=i.translate(t,e);return n===t&&((0,o.d)("[I18n] Locales not initialized! Initialize default locales automatically."),l.forEach((t=>t(((t,e)=>(i.addResourceBundle(t,e),t))))),n=i.translate(t,e)),n}},29783:(t,e,i)=>{i.r(e),i.d(e,{kol_table:()=>h});var a=i(90578),o=i(10172),n=i(49691),s=i(68575);const r=[10,20,50,100],l=new Map,h=class{constructor(t){(0,a.r)(this,t),this.horizontal=!0,this.sortDirections=new Map,this.showPagination=!1,this.pageStartSlice=0,this.pageEndSlice=10,this.disableSort=!1,this.setSortDirection=(t,e)=>{this.sortDirections.clear(),this.sortDirections.set(t,e),this.sortFunction=t},this.handlePagination={onClick:(t,e)=>{var i;"function"==typeof(null===(i=this.state._pagination._on)||void 0===i?void 0:i.onClick)&&this.state._pagination._on.onClick(t,e),(0,s.s)(this,"_pagination",Object.assign(Object.assign({},this.state._pagination),{_page:e}))},onChangePage:(t,e)=>{var i;"function"==typeof(null===(i=this.state._pagination._on)||void 0===i?void 0:i.onChangePage)&&this.state._pagination._on.onChangePage(t,e),(0,s.s)(this,"_pagination",Object.assign(Object.assign({},this.state._pagination),{_page:e}))},onChangePageSize:(t,e)=>{var i;"function"==typeof(null===(i=this.state._pagination._on)||void 0===i?void 0:i.onChangePageSize)&&this.state._pagination._on.onChangePageSize(t,e),(0,s.s)(this,"_pagination",Object.assign(Object.assign({},this.state._pagination),{_pageSize:e})),(0,s.s)(this,"_pageSize",e)}},this.beforePatchPagination=(t,e,i,a)=>{"_pagination"===a&&(this.showPagination=!0===t||""===t||"object"==typeof t&&null!==t)},this.updateSortedData=()=>{let t=this.state._data;if("function"==typeof this.sortFunction)switch(this.sortDirections.get(this.sortFunction)){case"NOS":t=[...this.state._data];break;case"ASC":t=this.sortFunction([...this.state._data]);break;default:t=this.sortFunction([...this.state._data]).reverse()}(0,s.s)(this,"_sortedData",t)},this.renderTableRow=(t,e)=>(0,a.h)("tr",{key:`tbody-${e}`},t.map(((t,i)=>this.renderTableCell(t,e,i)))),this.renderTableCell=(t,e,i)=>!1===t.asTd?(0,a.h)("th",{key:`tbody-${e}-${i}-${t.label}`,scope:"number"==typeof t.rowSpan&&t.rowSpan>1?"rowgroup":"row",colSpan:t.colSpan,rowSpan:t.rowSpan,style:{textAlign:t.textAlign,width:t.width},"aria-sort":this.disableSort||"function"!=typeof t.sort?void 0:t.sort!==this.sortFunction||"NOS"===this.sortDirections.get(t.sort)||void 0===this.sortDirections.get(t.sort)?"none":"ASC"===this.sortDirections.get(t.sort)?"ascending":"descending","data-sort":`sort-${this.sortDirections.get(t.sort)}`},(0,a.h)("div",{class:"w-full flex gap-1 items-center"},(0,a.h)("div",{class:{"w-full":!0,[t.textAlign]:"string"==typeof t.textAlign&&t.textAlign.length>0},innerHTML:t.label,style:{textAlign:t.textAlign}}),!this.disableSort&&"function"==typeof t.sort&&(0,a.h)("kol-button",{exportparts:"icon",_ariaLabel:(0,o.a)("kol-change-order",{placeholders:{colLabel:t.label}}),_icon:t.sort!==this.sortFunction||"NOS"===this.sortDirections.get(t.sort)||void 0===this.sortDirections.get(t.sort)?"codicon codicon-fold":"ASC"===this.sortDirections.get(t.sort)?"codicon codicon-chevron-up":"codicon codicon-chevron-down",_hideLabel:!0,_label:(0,o.a)("kol-change-order",{placeholders:{colLabel:t.label}}),_on:{onClick:()=>{if("function"==typeof t.sort){switch(this.sortFunction=t.sort,this.sortDirections.get(this.sortFunction)){case"ASC":this.setSortDirection(this.sortFunction,"DESC");break;case"DESC":this.setSortDirection(this.sortFunction,"NOS");break;default:this.setSortDirection(this.sortFunction,"ASC")}this.updateSortedData()}}},_variant:"ghost"}))):(0,a.h)("td",{key:`tbody-${e}-${i}-${t.label}`,class:{[t.textAlign]:"string"==typeof t.textAlign&&t.textAlign.length>0},colSpan:t.colSpan,rowSpan:t.rowSpan,style:{textAlign:t.textAlign,width:t.width},ref:"function"==typeof t.render?e=>{this.cellRender(t,e)}:void 0,innerHTML:"function"!=typeof t.render?t.label:""}),this.renderFoot=()=>{const t=this.createDataField(this.state._dataFoot,this.state._headers,!0);return(0,a.h)("tfoot",null,t.map(this.renderTableRow))},this._caption=void 0,this._data=void 0,this._dataFoot=void 0,this._headers=void 0,this._minWidth=void 0,this._pagination=void 0,this.state={_caption:"…",_data:[],_dataFoot:[],_headers:{horizontal:[],vertical:[]},_pagination:{_page:1,_pageSize:10,_total:0},_sortedData:[]}}validateCaption(t){(0,s.w)(this,"_caption",t,{required:!0})}validateData(t){(0,s.g)(t,(()=>{(0,s.o)(t,(()=>{void 0===t&&(t=[]);try{t=(0,s.p)(t)}catch(t){}Array.isArray(t)&&void 0===t.find((t=>!("object"==typeof t&&null!==t)))&&(0,s.s)(this,"_data",t,{afterPatch:()=>{setTimeout(this.updateSortedData)}})}))}))}validateDataFoot(t){(0,s.g)(t,(()=>{(0,s.o)(t,(()=>{void 0===t&&(t=[]);try{t=(0,s.p)(t)}catch(t){}Array.isArray(t)&&void 0===t.find((t=>!("object"==typeof t&&null!==t)))&&(0,s.s)(this,"_dataFoot",t,{afterPatch:()=>{setTimeout(this.updateSortedData)}})}))}))}validateHeaders(t){(0,s.g)(t,(()=>{(0,s.o)(t,(()=>{try{t=(0,s.p)(t)}catch(t){}(0,s.a)(this,"_headers",(t=>"object"==typeof t&&null!==t),new Set(["KoliBriTableHeaders"]),t,{hooks:{beforePatch:t=>{var e,i,a,o;const s=t;null===(e=s.horizontal)||void 0===e||e.forEach((t=>{t.forEach((t=>{"function"==typeof t.sort&&"string"==typeof t.sortDirection&&this.setSortDirection(t.sort,t.sortDirection)}))})),null===(i=s.vertical)||void 0===i||i.forEach((t=>{t.forEach((t=>{"function"==typeof t.sort&&"string"==typeof t.sortDirection&&this.setSortDirection(t.sort,t.sortDirection)}))})),s.horizontal&&s.vertical&&(null===(a=s.horizontal)||void 0===a?void 0:a.length)>0&&(null===(o=s.vertical)||void 0===o?void 0:o.length)>0&&(this.disableSort=!0,(0,n.d)("Table: You can not sort the table data, if horizontal and vertical headers are defined at the same time. (https://github.com/public-ui/kolibri/issues/2372)"))}}})}))}))}validateMinWidth(t){(0,s.w)(this,"_minWidth",t,{defaultValue:void 0})}validatePagination(t){try{t=(0,s.p)(t)}catch(t){}(0,s.a)(this,"_pagination",(()=>!0),new Set(["boolean","KoliBriTablePagination"]),t,{hooks:{beforePatch:this.beforePatchPagination}})}componentWillLoad(){this.validateCaption(this._caption),this.validateData(this._data),this.validateDataFoot(this._dataFoot),this.validateHeaders(this._headers),this.validateMinWidth(this._minWidth),this.validatePagination(this._pagination)}getNumberOfCols(t,e){let i=0;return t.forEach((t=>{let e=0;t.forEach((t=>{var i;return e+=null!==(i=t.colSpan)&&void 0!==i?i:1})),i<e&&(i=e)})),0===i&&(i=e.length),i}getNumberOfRows(t,e){let i=0;return t.forEach((t=>{let e=0;t.forEach((t=>{var i;return e+=null!==(i=t.rowSpan)&&void 0!==i?i:1})),i<e&&(i=e)})),0===i?i=e.length:i-=this.state._dataFoot.length,i}filterHeaderKeys(t){const e=[];return t.forEach((t=>{t.forEach((t=>{"string"==typeof t.key&&e.push(t)}))})),e}getPrimaryHeader(t){var e,i;let a=this.filterHeaderKeys(null!==(e=t.horizontal)&&void 0!==e?e:[]);return this.horizontal=!0,0===a.length&&(a=this.filterHeaderKeys(null!==(i=t.vertical)&&void 0!==i?i:[]),a.length>0&&(this.horizontal=!1)),a}createDataField(t,e,i){e.horizontal=Array.isArray(null==e?void 0:e.horizontal)?e.horizontal:[],e.vertical=Array.isArray(null==e?void 0:e.vertical)?e.vertical:[];const a=this.getPrimaryHeader(e),n=this.getNumberOfCols(e.horizontal,t);let s=this.getNumberOfRows(e.vertical,t),r=0;i&&(r=s,s+=this.state._dataFoot.length);const l=[],h=[],c=[];e.vertical.forEach(((t,e)=>{h[e]=0,c[e]=[]}));for(let o=r;o<s;o++){const s=[];e.vertical.forEach(((t,e)=>{let i=0;if(c[e].forEach((t=>i+=t)),i<=o){const a=t[o-i+h[e]];if("object"==typeof a){s.push(Object.assign(Object.assign({},a),{asTd:!1,data:{}}));let t=1;if("number"==typeof a.rowSpan&&a.rowSpan>1&&(t=a.rowSpan),c[e].push(t),"number"==typeof a.colSpan&&a.colSpan>1)for(let i=1;i<a.colSpan;i++)c[e+i].push(t);h[e]++}}}));for(let e=0;e<n;e++)if(!0===this.horizontal){const n=i?this.state._dataFoot[o-r]:t[o];"object"==typeof a[e]&&null!==a[e]&&"string"==typeof a[e].key&&"object"==typeof n&&null!==n&&s.push(Object.assign(Object.assign({},a[e]),{colSpan:void 0,data:n,label:n[a[e].key],rowSpan:void 0}))}else"object"==typeof a[o]&&null!==a[o]&&"string"==typeof a[o].key&&"object"==typeof t[e]&&null!==t[e]&&s.push(Object.assign(Object.assign({},a[o]),{colSpan:void 0,data:t[e],label:t[e][a[o].key],rowSpan:void 0}));l.push(s)}if(0===t.length){let t=0,i=0;Array.isArray(e.horizontal)&&e.horizontal.length>0&&e.horizontal[0].forEach((e=>{t+=e.colSpan||1})),Array.isArray(e.vertical)&&e.vertical.length>0&&(t-=e.vertical.length,e.vertical[0].forEach((t=>{i+=t.rowSpan||1})));const a={colSpan:t,label:(0,o.a)("kol-no-entries"),render:void 0,rowSpan:Math.max(i,1)};0===l.length?l.push([a]):l[0].push(a)}return l}selectDisplayedData(t,e,i){return"number"==typeof e&&e>0&&"number"==typeof i&&i>0?(this.pageStartSlice=e*(i-1),this.pageEndSlice=e*i>t.length?t.length:e*i,t.slice(this.pageStartSlice,this.pageEndSlice)):(this.pageStartSlice=0,this.pageEndSlice=t.length,t)}cellRender(t,e){e&&(clearTimeout(l.get(e)),l.set(e,setTimeout((()=>{clearTimeout(l.get(e));const i=t.render(e,{asTd:t.asTd,label:t.label,textAlign:t.textAlign,width:t.width},t.data,this.state._data);"string"==typeof i&&(e.innerHTML=i)}))))}render(){var t,e;const i=this.selectDisplayedData(this.state._sortedData,this.showPagination?null!==(e=null===(t=this.state._pagination)||void 0===t?void 0:t._pageSize)&&void 0!==e?e:10:this.state._sortedData.length,this.state._pagination._page||1),n=this.createDataField(i,this.state._headers);return(0,a.h)(a.H,null,this.pageEndSlice>0&&this.showPagination&&(0,a.h)("div",{class:"pagination"},(0,a.h)("span",null,"Einträge ",this.pageEndSlice>0?this.pageStartSlice+1:0," bis ",this.pageEndSlice," von"," ",this.state._pagination._total||(Array.isArray(this.state._data)?this.state._data.length:0)," angezeigt"),(0,a.h)("div",null,(0,a.h)("kol-pagination",{_boundaryCount:this.state._pagination._boundaryCount,_customClass:this.state._pagination._customClass,_on:this.handlePagination,_page:this.state._pagination._page,_pageSize:this.state._pagination._pageSize,_pageSizeOptions:this.state._pagination._pageSizeOptions||r,_siblingCount:this.state._pagination._siblingCount,_tooltipAlign:"bottom",_total:this.state._pagination._total||this.state._data.length}))),(0,a.h)("div",{class:"table",tabindex:"0"},(0,a.h)("table",{style:{minWidth:this.state._minWidth}},(0,a.h)("caption",null,this.state._caption),Array.isArray(this.state._headers.horizontal)&&(0,a.h)("thead",null,this.state._headers.horizontal.map(((t,e)=>(0,a.h)("tr",{key:`thead-${e}`},t.map(((t,i)=>!0===t.asTd?(0,a.h)("td",{key:`thead-${e}-${i}-${t.label}`,class:{[t.textAlign]:"string"==typeof t.textAlign&&t.textAlign.length>0},colSpan:t.colSpan,rowSpan:t.rowSpan,style:{textAlign:t.textAlign,width:t.width},ref:"function"==typeof t.render?e=>{this.cellRender(t,e)}:void 0,innerHTML:"function"!=typeof t.render?t.label:""}):(0,a.h)("th",{key:`thead-${e}-${i}-${t.label}`,scope:"number"==typeof t.colSpan&&t.colSpan>1?"colgroup":"col",colSpan:t.colSpan,rowSpan:t.rowSpan,style:{textAlign:t.textAlign,width:t.width},"aria-sort":this.disableSort||"function"!=typeof t.sort?void 0:t.sort!==this.sortFunction||"NOS"===this.sortDirections.get(t.sort)||void 0===this.sortDirections.get(t.sort)?"none":"ASC"===this.sortDirections.get(t.sort)?"ascending":"descending","data-sort":`sort-${this.sortDirections.get(t.sort)}`},(0,a.h)("div",{class:"w-full flex gap-1 items-center"},(0,a.h)("div",{class:{"w-full":!0,[t.textAlign]:"string"==typeof t.textAlign&&t.textAlign.length>0},innerHTML:t.label,style:{textAlign:t.textAlign}}),!this.disableSort&&"function"==typeof t.sort&&(0,a.h)("kol-button",{exportparts:"icon",_icon:t.sort!==this.sortFunction||"NOS"===this.sortDirections.get(t.sort)||void 0===this.sortDirections.get(t.sort)?"codicon codicon-fold":"ASC"===this.sortDirections.get(t.sort)?"codicon codicon-chevron-up":"codicon codicon-chevron-down",_hideLabel:!0,_label:(0,o.a)("kol-change-order",{placeholders:{colLabel:t.label}}),_on:{onClick:()=>{if("function"==typeof t.sort){switch(this.sortFunction=t.sort,this.sortDirections.get(this.sortFunction)){case"ASC":this.setSortDirection(this.sortFunction,"DESC");break;case"DESC":this.setSortDirection(this.sortFunction,"NOS");break;default:this.setSortDirection(this.sortFunction,"ASC")}this.updateSortedData()}}},_variant:"ghost"}))))))))),(0,a.h)("tbody",null,n.map(this.renderTableRow)),this.state._dataFoot.length>0?this.renderFoot():"")))}static get watchers(){return{_caption:["validateCaption"],_data:["validateData"],_dataFoot:["validateDataFoot"],_headers:["validateHeaders"],_minWidth:["validateMinWidth"],_pagination:["validatePagination"]}}};h.style={default:":host{--a11y-min-size:44px;font-size:inherit}*{hyphens:auto;letter-spacing:inherit;word-break:break-word;word-spacing:inherit}[role='button'],button:not([role='link']),kol-input .input{min-height:var(--a11y-min-size);min-width:var(--a11y-min-size)}a,button,h1,h2,h3,h4,h5,h6,input,option,select,textarea{font-family:inherit;font-size:inherit}:is(a,button){background-color:transparent;border:none;margin:0;padding:0;width:100%;}:host{max-width:100%}*{box-sizing:border-box}kol-span-wc{display:grid;place-items:center}kol-span-wc>span{display:flex;place-items:center}a,button{cursor:pointer}button,input,option,select,textarea{font-family:inherit}.icon-only>kol-span-wc>span>span{display:none}:host{display:block}:host{display:grid}:host>div.table{max-width:100%;order:1;overflow-x:auto;overflow-y:hidden}:host>div.table table{width:100%}th>div{display:grid;grid-template-columns:1fr auto;place-items:center}div.pagination{order:2}div.pagination,div.pagination>div:last-child{display:grid;place-items:center}@media (min-width: 1024px){div.pagination,div.pagination>div:last-child{grid-auto-flow:column}div.pagination kol-pagination{display:flex}}"}}}]);