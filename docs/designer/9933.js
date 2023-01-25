/*! For license information please see 9933.js.LICENSE.txt */
"use strict";(self.webpackChunk_public_ui_designer=self.webpackChunk_public_ui_designer||[]).push([[9933],{29783:(t,i,e)=>{e.r(i),e.d(i,{kol_table:()=>l});var a=e(46266),o=e(51539),n=e(68854);const s=[10,20,50,100],r=new Map,l=class{constructor(t){(0,a.r)(this,t),this.horizontal=!0,this.sortDirections=new Map,this.showPagination=!1,this.pageStartSlice=0,this.pageEndSlice=10,this.setSortDirection=(t,i)=>{this.sortDirections.clear(),this.sortDirections.set(t,i),this.sortFunction=t},this.handlePagination={onClick:(t,i)=>{var e;"function"==typeof(null===(e=this.state._pagination._on)||void 0===e?void 0:e.onClick)&&this.state._pagination._on.onClick(t,i),(0,o.s)(this,"_pagination",Object.assign(Object.assign({},this.state._pagination),{_page:i}))},onChangePage:(t,i)=>{var e;"function"==typeof(null===(e=this.state._pagination._on)||void 0===e?void 0:e.onChangePage)&&this.state._pagination._on.onChangePage(t,i),(0,o.s)(this,"_pagination",Object.assign(Object.assign({},this.state._pagination),{_page:i}))},onChangePageSize:(t,i)=>{var e;"function"==typeof(null===(e=this.state._pagination._on)||void 0===e?void 0:e.onChangePageSize)&&this.state._pagination._on.onChangePageSize(t,i),(0,o.s)(this,"_pagination",Object.assign(Object.assign({},this.state._pagination),{_pageSize:i})),(0,o.s)(this,"_pageSize",i)}},this.beforePatchPagination=(t,i,e,a)=>{"_pagination"===a&&(this.showPagination=!0===t||""===t||"object"==typeof t&&null!==t)},this.updateSortedData=()=>{let t=this.state._data;if("function"==typeof this.sortFunction)switch(this.sortDirections.get(this.sortFunction)){case"NOS":t=[...this.state._data];break;case"ASC":t=this.sortFunction([...this.state._data]);break;default:t=this.sortFunction([...this.state._data]).reverse()}(0,o.s)(this,"_sortedData",t)},this._caption=void 0,this._data=void 0,this._headers=void 0,this._minWidth=void 0,this._pagination=void 0,this.state={_caption:"",_data:[],_headers:{horizontal:[],vertical:[]},_pagination:{_page:1,_pageSize:10,_total:0},_sortedData:[]}}validateCaption(t){(0,o.w)(this,"_caption",t,{required:!0})}validateData(t){(0,o.f)(t,(()=>{(0,o.o)(t,(()=>{void 0===t&&(t=[]);try{t=(0,o.p)(t)}catch(t){}Array.isArray(t)&&void 0===t.find((t=>!("object"==typeof t&&null!==t)))&&(0,o.s)(this,"_data",t,{afterPatch:()=>{const t=setTimeout((()=>{clearTimeout(t),this.updateSortedData()}))}})}))}))}validateHeaders(t){(0,o.f)(t,(()=>{(0,o.o)(t,(()=>{try{t=(0,o.p)(t)}catch(t){}(0,o.a)(this,"_headers",(t=>"object"==typeof t&&null!==t),new Set(["KoliBriTableHeaders"]),t,{hooks:{beforePatch:t=>{var i,e;const a=t;null===(i=a.horizontal)||void 0===i||i.forEach((t=>{t.forEach((t=>{"function"==typeof t.sort&&"string"==typeof t.sortDirection&&this.setSortDirection(t.sort,t.sortDirection)}))})),null===(e=a.vertical)||void 0===e||e.forEach((t=>{t.forEach((t=>{"function"==typeof t.sort&&"string"==typeof t.sortDirection&&this.setSortDirection(t.sort,t.sortDirection)}))}))}}})}))}))}validateMinWidth(t){(0,o.w)(this,"_minWidth",t,{defaultValue:void 0})}validatePagination(t){try{t=(0,o.p)(t)}catch(t){}(0,o.a)(this,"_pagination",(()=>!0),new Set(["boolean","KoliBriTablePagination"]),t,{hooks:{beforePatch:this.beforePatchPagination}})}componentWillLoad(){this.validateCaption(this._caption),this.validateData(this._data),this.validateHeaders(this._headers),this.validateMinWidth(this._minWidth),this.validatePagination(this._pagination)}getNumberOfCols(t,i){let e=0;return t.forEach((t=>{let i=0;t.forEach((t=>{var e;return i+=null!==(e=t.colSpan)&&void 0!==e?e:1})),e<i&&(e=i)})),0===e&&(e=i.length),e}getNumberOfRows(t,i){let e=0;return t.forEach((t=>{let i=0;t.forEach((t=>{var e;return i+=null!==(e=t.rowSpan)&&void 0!==e?e:1})),e<i&&(e=i)})),0===e&&(e=i.length),e}filterHeaderKeys(t){const i=[];return t.forEach((t=>{t.forEach((t=>{"string"==typeof t.key&&i.push(t)}))})),i}getPrimaryHeader(t){var i,e;let a=this.filterHeaderKeys(null!==(i=t.horizontal)&&void 0!==i?i:[]);return this.horizontal=!0,0===a.length&&(a=this.filterHeaderKeys(null!==(e=t.vertical)&&void 0!==e?e:[]),a.length>0&&(this.horizontal=!1)),a}createDataField(t,i){i.horizontal=Array.isArray(null==i?void 0:i.horizontal)?i.horizontal:[],i.vertical=Array.isArray(null==i?void 0:i.vertical)?i.vertical:[];const e=this.getPrimaryHeader(i),a=this.getNumberOfCols(i.horizontal,t),o=this.getNumberOfRows(i.vertical,t),s=[],r=[],l=[];i.vertical.forEach(((t,i)=>{r[i]=0,l[i]=[]}));for(let n=0;n<o;n++){const o=[];i.vertical.forEach(((t,i)=>{let e=0;if(l[i].forEach((t=>e+=t)),e<=n){const a=t[n-e+r[i]];if("object"==typeof a){o.push(Object.assign(Object.assign({},a),{asTd:!1,data:{}}));let t=1;if("number"==typeof a.rowSpan&&a.rowSpan>1&&(t=a.rowSpan),l[i].push(t),"number"==typeof a.colSpan&&a.colSpan>1)for(let e=1;e<a.colSpan;e++)l[i+e].push(t);r[i]++}}}));for(let i=0;i<a;i++)!0===this.horizontal?"object"==typeof e[i]&&null!==e[i]&&"string"==typeof e[i].key&&"object"==typeof t[n]&&null!==t[n]&&o.push(Object.assign(Object.assign({},e[i]),{colSpan:void 0,data:t[n],label:t[n][e[i].key],rowSpan:void 0})):"object"==typeof e[n]&&null!==e[n]&&"string"==typeof e[n].key&&"object"==typeof t[i]&&null!==t[i]&&o.push(Object.assign(Object.assign({},e[n]),{colSpan:void 0,data:t[i],label:t[i][e[n].key],rowSpan:void 0}));s.push(o)}if(0===t.length){let t=0,e=0;Array.isArray(i.horizontal)&&i.horizontal.length>0&&i.horizontal[0].forEach((i=>{t+=i.colSpan||1})),Array.isArray(i.vertical)&&i.vertical.length>0&&(t-=i.vertical.length,i.vertical[0].forEach((t=>{e+=t.rowSpan||1})));const a={colSpan:t,label:(0,n.a)("kol-no-entries"),render:void 0,rowSpan:Math.max(e,1)};0===s.length?s.push([a]):s[0].push(a)}return s}selectDisplayedData(t,i,e){return"number"==typeof i&&i>0&&"number"==typeof e&&e>0?(this.pageStartSlice=i*(e-1),this.pageEndSlice=i*e>t.length?t.length:i*e,t.slice(this.pageStartSlice,this.pageEndSlice)):(this.pageStartSlice=0,this.pageEndSlice=t.length,t)}cellRender(t,i){i&&(clearTimeout(r.get(i)),r.set(i,setTimeout((()=>{if(clearTimeout(r.get(i)),"function"==typeof t.render){const e=t.render(i,{asTd:t.asTd,label:t.label,textAlign:t.textAlign,width:t.width},t.data,this.state._data);"string"==typeof e&&(i.innerHTML=e)}}))))}render(){var t,i;const e=this.selectDisplayedData(this.state._sortedData,this.showPagination?null!==(i=null===(t=this.state._pagination)||void 0===t?void 0:t._pageSize)&&void 0!==i?i:10:this.state._sortedData.length,this.state._pagination._page||1),o=this.createDataField(e,this.state._headers);return(0,a.h)(a.H,null,(0,a.h)("div",{tabindex:"0"},(0,a.h)("table",{style:{minWidth:this.state._minWidth}},(0,a.h)("caption",null,this.state._caption),Array.isArray(this.state._headers.horizontal)&&(0,a.h)("thead",null,this.state._headers.horizontal.map(((t,i)=>(0,a.h)("tr",{key:`thead-${i}`},t.map(((t,e)=>!0===t.asTd?(0,a.h)("td",{key:`thead-${i}-${e}-${t.label}`,class:{[t.textAlign]:"string"==typeof t.textAlign&&t.textAlign.length>0},colSpan:t.colSpan,rowSpan:t.rowSpan,style:{textAlign:t.textAlign,width:t.width},ref:"function"==typeof t.render?i=>{this.cellRender(t,i)}:void 0,innerHTML:"function"!=typeof t.render?t.label:""}):(0,a.h)("th",{key:`thead-${i}-${e}-${t.label}`,scope:"number"==typeof t.colSpan&&t.colSpan>1?"colgroup":"col",colSpan:t.colSpan,rowSpan:t.rowSpan,style:{textAlign:t.textAlign,width:t.width},"aria-sort":"function"==typeof t.sort?t.sort!==this.sortFunction||"NOS"===this.sortDirections.get(t.sort)||void 0===this.sortDirections.get(t.sort)?"none":"ASC"===this.sortDirections.get(t.sort)?"ascending":"descending":void 0,"data-sort":`sort-${this.sortDirections.get(t.sort)}`},(0,a.h)("div",{class:"w-full flex gap-1 items-center"},(0,a.h)("div",{class:{"w-full":!0,[t.textAlign]:"string"==typeof t.textAlign&&t.textAlign.length>0},innerHTML:t.label,style:{textAlign:t.textAlign}}),"function"==typeof t.sort&&(0,a.h)("kol-button",{exportparts:"button,ghost",_ariaLabel:(0,n.a)("kol-change-order",{placeholders:{colLabel:t.label}}),_icon:t.sort!==this.sortFunction||"NOS"===this.sortDirections.get(t.sort)||void 0===this.sortDirections.get(t.sort)?"fas fa-sort":"ASC"===this.sortDirections.get(t.sort)?"fas fa-sort-up":"fas fa-sort-down",_iconOnly:!0,_label:(0,n.a)("kol-change-order",{placeholders:{colLabel:t.label}}),_on:{onClick:()=>{if("function"==typeof t.sort){switch(this.sortFunction=t.sort,this.sortDirections.get(this.sortFunction)){case"ASC":this.setSortDirection(this.sortFunction,"DESC");break;case"DESC":this.setSortDirection(this.sortFunction,"NOS");break;default:this.setSortDirection(this.sortFunction,"ASC")}this.updateSortedData()}}},_variant:"ghost"}))))))))),(0,a.h)("tbody",null,o.map(((t,i)=>(0,a.h)("tr",{key:`tbody-${i}`},t.map(((t,e)=>!1===t.asTd?(0,a.h)("th",{key:`tbody-${i}-${e}-${t.label}`,scope:"number"==typeof t.rowSpan&&t.rowSpan>1?"rowgroup":"row",colSpan:t.colSpan,rowSpan:t.rowSpan,style:{textAlign:t.textAlign,width:t.width},"aria-sort":"function"==typeof t.sort?t.sort!==this.sortFunction||"NOS"===this.sortDirections.get(t.sort)||void 0===this.sortDirections.get(t.sort)?"none":"ASC"===this.sortDirections.get(t.sort)?"ascending":"descending":void 0,"data-sort":`sort-${this.sortDirections.get(t.sort)}`},(0,a.h)("div",{class:"w-full flex gap-1 items-center"},(0,a.h)("div",{class:{"w-full":!0,[t.textAlign]:"string"==typeof t.textAlign&&t.textAlign.length>0},innerHTML:t.label,style:{textAlign:t.textAlign}}),"function"==typeof t.sort&&(0,a.h)("kol-button",{exportparts:"button,ghost",_ariaLabel:(0,n.a)("kol-change-order",{placeholders:{colLabel:t.label}}),_icon:t.sort!==this.sortFunction||"NOS"===this.sortDirections.get(t.sort)||void 0===this.sortDirections.get(t.sort)?"fas fa-sort":"ASC"===this.sortDirections.get(t.sort)?"fas fa-sort-up":"fas fa-sort-down",_iconOnly:!0,_label:(0,n.a)("kol-change-order",{placeholders:{colLabel:t.label}}),_on:{onClick:()=>{if("function"==typeof t.sort){switch(this.sortFunction=t.sort,this.sortDirections.get(this.sortFunction)){case"ASC":this.setSortDirection(this.sortFunction,"DESC");break;case"DESC":this.setSortDirection(this.sortFunction,"NOS");break;default:this.setSortDirection(this.sortFunction,"ASC")}this.updateSortedData()}}},_variant:"ghost"}))):(0,a.h)("td",{key:`tbody-${i}-${e}-${t.label}`,class:{[t.textAlign]:"string"==typeof t.textAlign&&t.textAlign.length>0},colSpan:t.colSpan,rowSpan:t.rowSpan,style:{textAlign:t.textAlign,width:t.width},ref:"function"==typeof t.render?i=>{this.cellRender(t,i)}:void 0,innerHTML:"function"!=typeof t.render?t.label:""}))))))))),this.pageEndSlice>0&&this.showPagination&&(0,a.h)("div",{class:"pagination"},(0,a.h)("span",null,"Einträge ",this.pageEndSlice>0?this.pageStartSlice+1:0," bis ",this.pageEndSlice," von"," ",this.state._pagination._total||(Array.isArray(this.state._data)?this.state._data.length:0)," angezeigt"),(0,a.h)("div",null,(0,a.h)("kol-pagination",{_boundaryCount:this.state._pagination._boundaryCount,_customClass:this.state._pagination._customClass,_on:this.handlePagination,_page:this.state._pagination._page,_pageSize:this.state._pagination._pageSize,_pageSizeOptions:this.state._pagination._pageSizeOptions||s,_siblingCount:this.state._pagination._siblingCount,_tooltipAlign:"bottom",_total:this.state._pagination._total||this.state._data.length}))))}static get watchers(){return{_caption:["validateCaption"],_data:["validateData"],_headers:["validateHeaders"],_minWidth:["validateMinWidth"],_pagination:["validatePagination"]}}};l.style={default:"@windicss; *{box-sizing:border-box;font-size:inherit;hyphens:auto;letter-spacing:inherit;word-break:break-word;word-spacing:inherit}kol-heading-wc{font-weight:700}kol-icon{color:inherit}kol-span-wc{display:grid;place-items:center;width:100%}kol-span-wc>span{display:flex;gap:0.25rem;place-items:center}a,button{cursor:pointer}a.icon-only>kol-span-wc>span>span,button.icon-only>kol-span-wc>span>span{display:none}a{display:inline-flex;place-items:baseline}button{border-width:0}"}}}]);