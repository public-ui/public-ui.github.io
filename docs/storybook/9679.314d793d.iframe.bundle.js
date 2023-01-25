"use strict";(self.webpackChunk_public_ui_storybook=self.webpackChunk_public_ui_storybook||[]).push([[9679],{"./node_modules/@public-ui/components/dist/esm/kol-table.entry.js":(k,w,f)=>{f.r(w),f.d(w,{kol_table:()=>D});var n=f("./node_modules/@public-ui/components/dist/esm/index-1a5ffdc0.js"),h=f("./node_modules/@public-ui/components/dist/esm/prop.validators-4fa47ba8.js"),_=f("./node_modules/@public-ui/components/dist/esm/i18n-0f680f1b.js");/*!
 * KoliBri - The accessible HTML-Standard
 */const A="@windicss; *{box-sizing:border-box;font-size:inherit;hyphens:auto;letter-spacing:inherit;word-break:break-word;word-spacing:inherit}kol-heading-wc{font-weight:700}kol-icon{color:inherit}kol-span-wc{display:grid;place-items:center;width:100%}kol-span-wc>span{display:flex;gap:0.25rem;place-items:center}a,button{cursor:pointer}a.icon-only>kol-span-wc>span>span,button.icon-only>kol-span-wc>span>span{display:none}a{display:inline-flex;place-items:baseline}button{border-width:0}",m=[10,20,50,100],b=new Map,D=class{constructor(i){(0,n.r)(this,i),this.horizontal=!0,this.sortDirections=new Map,this.showPagination=!1,this.pageStartSlice=0,this.pageEndSlice=10,this.setSortDirection=(e,a)=>{this.sortDirections.clear(),this.sortDirections.set(e,a),this.sortFunction=e},this.handlePagination={onClick:(e,a)=>{var o;typeof((o=this.state._pagination._on)===null||o===void 0?void 0:o.onClick)=="function"&&this.state._pagination._on.onClick(e,a),(0,h.s)(this,"_pagination",Object.assign(Object.assign({},this.state._pagination),{_page:a}))},onChangePage:(e,a)=>{var o;typeof((o=this.state._pagination._on)===null||o===void 0?void 0:o.onChangePage)=="function"&&this.state._pagination._on.onChangePage(e,a),(0,h.s)(this,"_pagination",Object.assign(Object.assign({},this.state._pagination),{_page:a}))},onChangePageSize:(e,a)=>{var o;typeof((o=this.state._pagination._on)===null||o===void 0?void 0:o.onChangePageSize)=="function"&&this.state._pagination._on.onChangePageSize(e,a),(0,h.s)(this,"_pagination",Object.assign(Object.assign({},this.state._pagination),{_pageSize:a})),(0,h.s)(this,"_pageSize",a)}},this.beforePatchPagination=(e,a,o,l)=>{l==="_pagination"&&(this.showPagination=e===!0||e===""||typeof e=="object"&&e!==null)},this.updateSortedData=()=>{let e=this.state._data;if(typeof this.sortFunction=="function")switch(this.sortDirections.get(this.sortFunction)){case"NOS":e=[...this.state._data];break;case"ASC":e=this.sortFunction([...this.state._data]);break;default:e=this.sortFunction([...this.state._data]).reverse()}(0,h.s)(this,"_sortedData",e)},this._caption=void 0,this._data=void 0,this._headers=void 0,this._minWidth=void 0,this._pagination=void 0,this.state={_caption:"",_data:[],_headers:{horizontal:[],vertical:[]},_pagination:{_page:1,_pageSize:10,_total:0},_sortedData:[]}}validateCaption(i){(0,h.w)(this,"_caption",i,{required:!0})}validateData(i){(0,h.f)(i,()=>{(0,h.o)(i,()=>{i===void 0&&(i=[]);try{i=(0,h.p)(i)}catch(e){}Array.isArray(i)&&i.find(e=>!(typeof e=="object"&&e!==null))===void 0&&(0,h.s)(this,"_data",i,{afterPatch:()=>{const e=setTimeout(()=>{clearTimeout(e),this.updateSortedData()})}})})})}validateHeaders(i){(0,h.f)(i,()=>{(0,h.o)(i,()=>{try{i=(0,h.p)(i)}catch(e){}(0,h.a)(this,"_headers",e=>typeof e=="object"&&e!==null,new Set(["KoliBriTableHeaders"]),i,{hooks:{beforePatch:e=>{var a,o;const l=e;(a=l.horizontal)===null||a===void 0||a.forEach(r=>{r.forEach(t=>{typeof t.sort=="function"&&typeof t.sortDirection=="string"&&this.setSortDirection(t.sort,t.sortDirection)})}),(o=l.vertical)===null||o===void 0||o.forEach(r=>{r.forEach(t=>{typeof t.sort=="function"&&typeof t.sortDirection=="string"&&this.setSortDirection(t.sort,t.sortDirection)})})}}})})})}validateMinWidth(i){(0,h.w)(this,"_minWidth",i,{defaultValue:void 0})}validatePagination(i){try{i=(0,h.p)(i)}catch(e){}(0,h.a)(this,"_pagination",()=>!0,new Set(["boolean","KoliBriTablePagination"]),i,{hooks:{beforePatch:this.beforePatchPagination}})}componentWillLoad(){this.validateCaption(this._caption),this.validateData(this._data),this.validateHeaders(this._headers),this.validateMinWidth(this._minWidth),this.validatePagination(this._pagination)}getNumberOfCols(i,e){let a=0;return i.forEach(o=>{let l=0;o.forEach(r=>{var t;return l+=(t=r.colSpan)!==null&&t!==void 0?t:1}),a<l&&(a=l)}),a===0&&(a=e.length),a}getNumberOfRows(i,e){let a=0;return i.forEach(o=>{let l=0;o.forEach(r=>{var t;return l+=(t=r.rowSpan)!==null&&t!==void 0?t:1}),a<l&&(a=l)}),a===0&&(a=e.length),a}filterHeaderKeys(i){const e=[];return i.forEach(a=>{a.forEach(o=>{typeof o.key=="string"&&e.push(o)})}),e}getPrimaryHeader(i){var e,a;let o=this.filterHeaderKeys((e=i.horizontal)!==null&&e!==void 0?e:[]);return this.horizontal=!0,o.length===0&&(o=this.filterHeaderKeys((a=i.vertical)!==null&&a!==void 0?a:[]),o.length>0&&(this.horizontal=!1)),o}createDataField(i,e){e.horizontal=Array.isArray(e==null?void 0:e.horizontal)?e.horizontal:[],e.vertical=Array.isArray(e==null?void 0:e.vertical)?e.vertical:[];const a=this.getPrimaryHeader(e),o=this.getNumberOfCols(e.horizontal,i),l=this.getNumberOfRows(e.vertical,i),r=[],t=[],d=[];e.vertical.forEach((s,p)=>{t[p]=0,d[p]=[]});for(let s=0;s<l;s++){const p=[];e.vertical.forEach((c,u)=>{let y=0;if(d[u].forEach(g=>y+=g),y<=s){const g=c[s-y+t[u]];if(typeof g=="object"){p.push(Object.assign(Object.assign({},g),{asTd:!1,data:{}}));let S=1;if(typeof g.rowSpan=="number"&&g.rowSpan>1&&(S=g.rowSpan),d[u].push(S),typeof g.colSpan=="number"&&g.colSpan>1)for(let v=1;v<g.colSpan;v++)d[u+v].push(S);t[u]++}}});for(let c=0;c<o;c++)this.horizontal===!0?typeof a[c]=="object"&&a[c]!==null&&typeof a[c].key=="string"&&typeof i[s]=="object"&&i[s]!==null&&p.push(Object.assign(Object.assign({},a[c]),{colSpan:void 0,data:i[s],label:i[s][a[c].key],rowSpan:void 0})):typeof a[s]=="object"&&a[s]!==null&&typeof a[s].key=="string"&&typeof i[c]=="object"&&i[c]!==null&&p.push(Object.assign(Object.assign({},a[s]),{colSpan:void 0,data:i[c],label:i[c][a[s].key],rowSpan:void 0}));r.push(p)}if(i.length===0){let s=0,p=0;Array.isArray(e.horizontal)&&e.horizontal.length>0&&e.horizontal[0].forEach(u=>{s+=u.colSpan||1}),Array.isArray(e.vertical)&&e.vertical.length>0&&(s-=e.vertical.length,e.vertical[0].forEach(u=>{p+=u.rowSpan||1}));const c={colSpan:s,label:(0,_.a)("kol-no-entries"),render:void 0,rowSpan:Math.max(p,1)};r.length===0?r.push([c]):r[0].push(c)}return r}selectDisplayedData(i,e,a){return typeof e=="number"&&e>0&&typeof a=="number"&&a>0?(this.pageStartSlice=e*(a-1),this.pageEndSlice=e*a>i.length?i.length:e*a,i.slice(this.pageStartSlice,this.pageEndSlice)):(this.pageStartSlice=0,this.pageEndSlice=i.length,i)}cellRender(i,e){e&&(clearTimeout(b.get(e)),b.set(e,setTimeout(()=>{if(clearTimeout(b.get(e)),typeof i.render=="function"){const a=i.render(e,{asTd:i.asTd,label:i.label,textAlign:i.textAlign,width:i.width},i.data,this.state._data);typeof a=="string"&&(e.innerHTML=a)}})))}render(){var i,e;const a=this.selectDisplayedData(this.state._sortedData,this.showPagination?(e=(i=this.state._pagination)===null||i===void 0?void 0:i._pageSize)!==null&&e!==void 0?e:10:this.state._sortedData.length,this.state._pagination._page||1),o=this.createDataField(a,this.state._headers);return(0,n.h)(n.H,null,(0,n.h)("div",{tabindex:"0"},(0,n.h)("table",{style:{minWidth:this.state._minWidth}},(0,n.h)("caption",null,this.state._caption),Array.isArray(this.state._headers.horizontal)&&(0,n.h)("thead",null,this.state._headers.horizontal.map((l,r)=>(0,n.h)("tr",{key:`thead-${r}`},l.map((t,d)=>t.asTd===!0?(0,n.h)("td",{key:`thead-${r}-${d}-${t.label}`,class:{[t.textAlign]:typeof t.textAlign=="string"&&t.textAlign.length>0},colSpan:t.colSpan,rowSpan:t.rowSpan,style:{textAlign:t.textAlign,width:t.width},ref:typeof t.render=="function"?s=>{this.cellRender(t,s)}:void 0,innerHTML:typeof t.render!="function"?t.label:""}):(0,n.h)("th",{key:`thead-${r}-${d}-${t.label}`,scope:typeof t.colSpan=="number"&&t.colSpan>1?"colgroup":"col",colSpan:t.colSpan,rowSpan:t.rowSpan,style:{textAlign:t.textAlign,width:t.width},"aria-sort":typeof t.sort=="function"?t.sort!==this.sortFunction||this.sortDirections.get(t.sort)==="NOS"||this.sortDirections.get(t.sort)===void 0?"none":this.sortDirections.get(t.sort)==="ASC"?"ascending":"descending":void 0,"data-sort":`sort-${this.sortDirections.get(t.sort)}`},(0,n.h)("div",{class:"w-full flex gap-1 items-center"},(0,n.h)("div",{class:{"w-full":!0,[t.textAlign]:typeof t.textAlign=="string"&&t.textAlign.length>0},innerHTML:t.label,style:{textAlign:t.textAlign}}),typeof t.sort=="function"&&(0,n.h)("kol-button",{exportparts:"button,ghost",_ariaLabel:(0,_.a)("kol-change-order",{placeholders:{colLabel:t.label}}),_icon:t.sort!==this.sortFunction||this.sortDirections.get(t.sort)==="NOS"||this.sortDirections.get(t.sort)===void 0?"fas fa-sort":this.sortDirections.get(t.sort)==="ASC"?"fas fa-sort-up":"fas fa-sort-down",_iconOnly:!0,_label:(0,_.a)("kol-change-order",{placeholders:{colLabel:t.label}}),_on:{onClick:()=>{if(typeof t.sort=="function"){switch(this.sortFunction=t.sort,this.sortDirections.get(this.sortFunction)){case"ASC":this.setSortDirection(this.sortFunction,"DESC");break;case"DESC":this.setSortDirection(this.sortFunction,"NOS");break;default:this.setSortDirection(this.sortFunction,"ASC")}this.updateSortedData()}}},_variant:"ghost"}))))))),(0,n.h)("tbody",null,o.map((l,r)=>(0,n.h)("tr",{key:`tbody-${r}`},l.map((t,d)=>t.asTd===!1?(0,n.h)("th",{key:`tbody-${r}-${d}-${t.label}`,scope:typeof t.rowSpan=="number"&&t.rowSpan>1?"rowgroup":"row",colSpan:t.colSpan,rowSpan:t.rowSpan,style:{textAlign:t.textAlign,width:t.width},"aria-sort":typeof t.sort=="function"?t.sort!==this.sortFunction||this.sortDirections.get(t.sort)==="NOS"||this.sortDirections.get(t.sort)===void 0?"none":this.sortDirections.get(t.sort)==="ASC"?"ascending":"descending":void 0,"data-sort":`sort-${this.sortDirections.get(t.sort)}`},(0,n.h)("div",{class:"w-full flex gap-1 items-center"},(0,n.h)("div",{class:{"w-full":!0,[t.textAlign]:typeof t.textAlign=="string"&&t.textAlign.length>0},innerHTML:t.label,style:{textAlign:t.textAlign}}),typeof t.sort=="function"&&(0,n.h)("kol-button",{exportparts:"button,ghost",_ariaLabel:(0,_.a)("kol-change-order",{placeholders:{colLabel:t.label}}),_icon:t.sort!==this.sortFunction||this.sortDirections.get(t.sort)==="NOS"||this.sortDirections.get(t.sort)===void 0?"fas fa-sort":this.sortDirections.get(t.sort)==="ASC"?"fas fa-sort-up":"fas fa-sort-down",_iconOnly:!0,_label:(0,_.a)("kol-change-order",{placeholders:{colLabel:t.label}}),_on:{onClick:()=>{if(typeof t.sort=="function"){switch(this.sortFunction=t.sort,this.sortDirections.get(this.sortFunction)){case"ASC":this.setSortDirection(this.sortFunction,"DESC");break;case"DESC":this.setSortDirection(this.sortFunction,"NOS");break;default:this.setSortDirection(this.sortFunction,"ASC")}this.updateSortedData()}}},_variant:"ghost"}))):(0,n.h)("td",{key:`tbody-${r}-${d}-${t.label}`,class:{[t.textAlign]:typeof t.textAlign=="string"&&t.textAlign.length>0},colSpan:t.colSpan,rowSpan:t.rowSpan,style:{textAlign:t.textAlign,width:t.width},ref:typeof t.render=="function"?s=>{this.cellRender(t,s)}:void 0,innerHTML:typeof t.render!="function"?t.label:""}))))))),this.pageEndSlice>0&&this.showPagination&&(0,n.h)("div",{class:"pagination"},(0,n.h)("span",null,"Eintr\xE4ge ",this.pageEndSlice>0?this.pageStartSlice+1:0," bis ",this.pageEndSlice," von"," ",this.state._pagination._total||(Array.isArray(this.state._data)?this.state._data.length:0)," angezeigt"),(0,n.h)("div",null,(0,n.h)("kol-pagination",{_boundaryCount:this.state._pagination._boundaryCount,_customClass:this.state._pagination._customClass,_on:this.handlePagination,_page:this.state._pagination._page,_pageSize:this.state._pagination._pageSize,_pageSizeOptions:this.state._pagination._pageSizeOptions||m,_siblingCount:this.state._pagination._siblingCount,_tooltipAlign:"bottom",_total:this.state._pagination._total||this.state._data.length}))))}static get watchers(){return{_caption:["validateCaption"],_data:["validateData"],_headers:["validateHeaders"],_minWidth:["validateMinWidth"],_pagination:["validatePagination"]}}};D.style={default:A}}}]);
