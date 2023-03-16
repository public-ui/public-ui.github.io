/*! For license information please see 9108.015606b3.js.LICENSE.txt */
"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[9108],{9108:(t,e,o)=>{o.r(e),o.d(e,{kol_table:()=>l});var i=o(60356),n=o(216),a=o(50672);const r=[10,20,50,100],s=new Map,l=class{constructor(t){(0,i.r)(this,t),this.horizontal=!0,this.sortDirections=new Map,this.showPagination=!1,this.pageStartSlice=0,this.pageEndSlice=10,this.setSortDirection=(t,e)=>{this.sortDirections.clear(),this.sortDirections.set(t,e),this.sortFunction=t},this.handlePagination={onClick:(t,e)=>{var o;"function"==typeof(null===(o=this.state._pagination._on)||void 0===o?void 0:o.onClick)&&this.state._pagination._on.onClick(t,e),(0,n.s)(this,"_pagination",Object.assign(Object.assign({},this.state._pagination),{_page:e}))},onChangePage:(t,e)=>{var o;"function"==typeof(null===(o=this.state._pagination._on)||void 0===o?void 0:o.onChangePage)&&this.state._pagination._on.onChangePage(t,e),(0,n.s)(this,"_pagination",Object.assign(Object.assign({},this.state._pagination),{_page:e}))},onChangePageSize:(t,e)=>{var o;"function"==typeof(null===(o=this.state._pagination._on)||void 0===o?void 0:o.onChangePageSize)&&this.state._pagination._on.onChangePageSize(t,e),(0,n.s)(this,"_pagination",Object.assign(Object.assign({},this.state._pagination),{_pageSize:e})),(0,n.s)(this,"_pageSize",e)}},this.beforePatchPagination=(t,e,o,i)=>{"_pagination"===i&&(this.showPagination=!0===t||""===t||"object"==typeof t&&null!==t)},this.updateSortedData=()=>{let t=this.state._data;if("function"==typeof this.sortFunction)switch(this.sortDirections.get(this.sortFunction)){case"NOS":t=[...this.state._data];break;case"ASC":t=this.sortFunction([...this.state._data]);break;default:t=this.sortFunction([...this.state._data]).reverse()}(0,n.s)(this,"_sortedData",t)},this._caption=void 0,this._data=void 0,this._headers=void 0,this._minWidth=void 0,this._pagination=void 0,this.state={_caption:"",_data:[],_headers:{horizontal:[],vertical:[]},_pagination:{_page:1,_pageSize:10,_total:0},_sortedData:[]}}validateCaption(t){(0,n.w)(this,"_caption",t,{required:!0})}validateData(t){(0,n.g)(t,(()=>{(0,n.o)(t,(()=>{void 0===t&&(t=[]);try{t=(0,n.p)(t)}catch(t){}Array.isArray(t)&&void 0===t.find((t=>!("object"==typeof t&&null!==t)))&&(0,n.s)(this,"_data",t,{afterPatch:()=>{const t=setTimeout((()=>{clearTimeout(t),this.updateSortedData()}))}})}))}))}validateHeaders(t){(0,n.g)(t,(()=>{(0,n.o)(t,(()=>{try{t=(0,n.p)(t)}catch(t){}(0,n.a)(this,"_headers",(t=>"object"==typeof t&&null!==t),new Set(["KoliBriTableHeaders"]),t,{hooks:{beforePatch:t=>{var e,o;const i=t;null===(e=i.horizontal)||void 0===e||e.forEach((t=>{t.forEach((t=>{"function"==typeof t.sort&&"string"==typeof t.sortDirection&&this.setSortDirection(t.sort,t.sortDirection)}))})),null===(o=i.vertical)||void 0===o||o.forEach((t=>{t.forEach((t=>{"function"==typeof t.sort&&"string"==typeof t.sortDirection&&this.setSortDirection(t.sort,t.sortDirection)}))}))}}})}))}))}validateMinWidth(t){(0,n.w)(this,"_minWidth",t,{defaultValue:void 0})}validatePagination(t){try{t=(0,n.p)(t)}catch(t){}(0,n.a)(this,"_pagination",(()=>!0),new Set(["boolean","KoliBriTablePagination"]),t,{hooks:{beforePatch:this.beforePatchPagination}})}componentWillLoad(){this.validateCaption(this._caption),this.validateData(this._data),this.validateHeaders(this._headers),this.validateMinWidth(this._minWidth),this.validatePagination(this._pagination)}getNumberOfCols(t,e){let o=0;return t.forEach((t=>{let e=0;t.forEach((t=>{var o;return e+=null!==(o=t.colSpan)&&void 0!==o?o:1})),o<e&&(o=e)})),0===o&&(o=e.length),o}getNumberOfRows(t,e){let o=0;return t.forEach((t=>{let e=0;t.forEach((t=>{var o;return e+=null!==(o=t.rowSpan)&&void 0!==o?o:1})),o<e&&(o=e)})),0===o&&(o=e.length),o}filterHeaderKeys(t){const e=[];return t.forEach((t=>{t.forEach((t=>{"string"==typeof t.key&&e.push(t)}))})),e}getPrimaryHeader(t){var e,o;let i=this.filterHeaderKeys(null!==(e=t.horizontal)&&void 0!==e?e:[]);return this.horizontal=!0,0===i.length&&(i=this.filterHeaderKeys(null!==(o=t.vertical)&&void 0!==o?o:[]),i.length>0&&(this.horizontal=!1)),i}createDataField(t,e){e.horizontal=Array.isArray(null==e?void 0:e.horizontal)?e.horizontal:[],e.vertical=Array.isArray(null==e?void 0:e.vertical)?e.vertical:[];const o=this.getPrimaryHeader(e),i=this.getNumberOfCols(e.horizontal,t),n=this.getNumberOfRows(e.vertical,t),r=[],s=[],l=[];e.vertical.forEach(((t,e)=>{s[e]=0,l[e]=[]}));for(let a=0;a<n;a++){const n=[];e.vertical.forEach(((t,e)=>{let o=0;if(l[e].forEach((t=>o+=t)),o<=a){const i=t[a-o+s[e]];if("object"==typeof i){n.push(Object.assign(Object.assign({},i),{asTd:!1,data:{}}));let t=1;if("number"==typeof i.rowSpan&&i.rowSpan>1&&(t=i.rowSpan),l[e].push(t),"number"==typeof i.colSpan&&i.colSpan>1)for(let o=1;o<i.colSpan;o++)l[e+o].push(t);s[e]++}}}));for(let e=0;e<i;e++)!0===this.horizontal?"object"==typeof o[e]&&null!==o[e]&&"string"==typeof o[e].key&&"object"==typeof t[a]&&null!==t[a]&&n.push(Object.assign(Object.assign({},o[e]),{colSpan:void 0,data:t[a],label:t[a][o[e].key],rowSpan:void 0})):"object"==typeof o[a]&&null!==o[a]&&"string"==typeof o[a].key&&"object"==typeof t[e]&&null!==t[e]&&n.push(Object.assign(Object.assign({},o[a]),{colSpan:void 0,data:t[e],label:t[e][o[a].key],rowSpan:void 0}));r.push(n)}if(0===t.length){let t=0,o=0;Array.isArray(e.horizontal)&&e.horizontal.length>0&&e.horizontal[0].forEach((e=>{t+=e.colSpan||1})),Array.isArray(e.vertical)&&e.vertical.length>0&&(t-=e.vertical.length,e.vertical[0].forEach((t=>{o+=t.rowSpan||1})));const i={colSpan:t,label:(0,a.a)("kol-no-entries"),render:void 0,rowSpan:Math.max(o,1)};0===r.length?r.push([i]):r[0].push(i)}return r}selectDisplayedData(t,e,o){return"number"==typeof e&&e>0&&"number"==typeof o&&o>0?(this.pageStartSlice=e*(o-1),this.pageEndSlice=e*o>t.length?t.length:e*o,t.slice(this.pageStartSlice,this.pageEndSlice)):(this.pageStartSlice=0,this.pageEndSlice=t.length,t)}cellRender(t,e){e&&(clearTimeout(s.get(e)),s.set(e,setTimeout((()=>{if(clearTimeout(s.get(e)),"function"==typeof t.render){const o=t.render(e,{asTd:t.asTd,label:t.label,textAlign:t.textAlign,width:t.width},t.data,this.state._data);"string"==typeof o&&(e.innerHTML=o)}}))))}render(){var t,e;const o=this.selectDisplayedData(this.state._sortedData,this.showPagination?null!==(e=null===(t=this.state._pagination)||void 0===t?void 0:t._pageSize)&&void 0!==e?e:10:this.state._sortedData.length,this.state._pagination._page||1),n=this.createDataField(o,this.state._headers);return(0,i.h)(i.H,null,(0,i.h)("div",{tabindex:"0"},(0,i.h)("table",{style:{minWidth:this.state._minWidth}},(0,i.h)("caption",null,this.state._caption),Array.isArray(this.state._headers.horizontal)&&(0,i.h)("thead",null,this.state._headers.horizontal.map(((t,e)=>(0,i.h)("tr",{key:`thead-${e}`},t.map(((t,o)=>!0===t.asTd?(0,i.h)("td",{key:`thead-${e}-${o}-${t.label}`,class:{[t.textAlign]:"string"==typeof t.textAlign&&t.textAlign.length>0},colSpan:t.colSpan,rowSpan:t.rowSpan,style:{textAlign:t.textAlign,width:t.width},ref:"function"==typeof t.render?e=>{this.cellRender(t,e)}:void 0,innerHTML:"function"!=typeof t.render?t.label:""}):(0,i.h)("th",{key:`thead-${e}-${o}-${t.label}`,scope:"number"==typeof t.colSpan&&t.colSpan>1?"colgroup":"col",colSpan:t.colSpan,rowSpan:t.rowSpan,style:{textAlign:t.textAlign,width:t.width},"aria-sort":"function"==typeof t.sort?t.sort!==this.sortFunction||"NOS"===this.sortDirections.get(t.sort)||void 0===this.sortDirections.get(t.sort)?"none":"ASC"===this.sortDirections.get(t.sort)?"ascending":"descending":void 0,"data-sort":`sort-${this.sortDirections.get(t.sort)}`},(0,i.h)("div",{class:"w-full flex gap-1 items-center"},(0,i.h)("div",{class:{"w-full":!0,[t.textAlign]:"string"==typeof t.textAlign&&t.textAlign.length>0},innerHTML:t.label,style:{textAlign:t.textAlign}}),"function"==typeof t.sort&&(0,i.h)("kol-button",{exportparts:"button,ghost",_ariaLabel:(0,a.a)("kol-change-order",{placeholders:{colLabel:t.label}}),_icon:t.sort!==this.sortFunction||"NOS"===this.sortDirections.get(t.sort)||void 0===this.sortDirections.get(t.sort)?"fas fa-sort":"ASC"===this.sortDirections.get(t.sort)?"fas fa-sort-up":"fas fa-sort-down",_iconOnly:!0,_label:(0,a.a)("kol-change-order",{placeholders:{colLabel:t.label}}),_on:{onClick:()=>{if("function"==typeof t.sort){switch(this.sortFunction=t.sort,this.sortDirections.get(this.sortFunction)){case"ASC":this.setSortDirection(this.sortFunction,"DESC");break;case"DESC":this.setSortDirection(this.sortFunction,"NOS");break;default:this.setSortDirection(this.sortFunction,"ASC")}this.updateSortedData()}}},_variant:"ghost"}))))))))),(0,i.h)("tbody",null,n.map(((t,e)=>(0,i.h)("tr",{key:`tbody-${e}`},t.map(((t,o)=>!1===t.asTd?(0,i.h)("th",{key:`tbody-${e}-${o}-${t.label}`,scope:"number"==typeof t.rowSpan&&t.rowSpan>1?"rowgroup":"row",colSpan:t.colSpan,rowSpan:t.rowSpan,style:{textAlign:t.textAlign,width:t.width},"aria-sort":"function"==typeof t.sort?t.sort!==this.sortFunction||"NOS"===this.sortDirections.get(t.sort)||void 0===this.sortDirections.get(t.sort)?"none":"ASC"===this.sortDirections.get(t.sort)?"ascending":"descending":void 0,"data-sort":`sort-${this.sortDirections.get(t.sort)}`},(0,i.h)("div",{class:"w-full flex gap-1 items-center"},(0,i.h)("div",{class:{"w-full":!0,[t.textAlign]:"string"==typeof t.textAlign&&t.textAlign.length>0},innerHTML:t.label,style:{textAlign:t.textAlign}}),"function"==typeof t.sort&&(0,i.h)("kol-button",{exportparts:"button,ghost",_ariaLabel:(0,a.a)("kol-change-order",{placeholders:{colLabel:t.label}}),_icon:t.sort!==this.sortFunction||"NOS"===this.sortDirections.get(t.sort)||void 0===this.sortDirections.get(t.sort)?"fas fa-sort":"ASC"===this.sortDirections.get(t.sort)?"fas fa-sort-up":"fas fa-sort-down",_iconOnly:!0,_label:(0,a.a)("kol-change-order",{placeholders:{colLabel:t.label}}),_on:{onClick:()=>{if("function"==typeof t.sort){switch(this.sortFunction=t.sort,this.sortDirections.get(this.sortFunction)){case"ASC":this.setSortDirection(this.sortFunction,"DESC");break;case"DESC":this.setSortDirection(this.sortFunction,"NOS");break;default:this.setSortDirection(this.sortFunction,"ASC")}this.updateSortedData()}}},_variant:"ghost"}))):(0,i.h)("td",{key:`tbody-${e}-${o}-${t.label}`,class:{[t.textAlign]:"string"==typeof t.textAlign&&t.textAlign.length>0},colSpan:t.colSpan,rowSpan:t.rowSpan,style:{textAlign:t.textAlign,width:t.width},ref:"function"==typeof t.render?e=>{this.cellRender(t,e)}:void 0,innerHTML:"function"!=typeof t.render?t.label:""}))))))))),this.pageEndSlice>0&&this.showPagination&&(0,i.h)("div",{class:"pagination"},(0,i.h)("span",null,"Eintr\xe4ge ",this.pageEndSlice>0?this.pageStartSlice+1:0," bis ",this.pageEndSlice," von"," ",this.state._pagination._total||(Array.isArray(this.state._data)?this.state._data.length:0)," angezeigt"),(0,i.h)("div",null,(0,i.h)("kol-pagination",{_boundaryCount:this.state._pagination._boundaryCount,_customClass:this.state._pagination._customClass,_on:this.handlePagination,_page:this.state._pagination._page,_pageSize:this.state._pagination._pageSize,_pageSizeOptions:this.state._pagination._pageSizeOptions||r,_siblingCount:this.state._pagination._siblingCount,_tooltipAlign:"bottom",_total:this.state._pagination._total||this.state._data.length}))))}static get watchers(){return{_caption:["validateCaption"],_data:["validateData"],_headers:["validateHeaders"],_minWidth:["validateMinWidth"],_pagination:["validatePagination"]}}};l.style={default:":host{--kolibri-border-color:#666;--kolibri-border-radius:0.125rem;--kolibri-border-width:1px;--kolibri-color-error:#f44336;--kolibri-color-info:#2196f3;--kolibri-color-success:#4caf50;--kolibri-color-warning:#ff9800;--kolibri-color-primary:#3f51b5;--kolibri-color-secondary:#ff4081;--kolibri-color-normal:#9e9e9e;--kolibri-color-danger:#f44336;--kolibri-color-ghost:#f5f5f5;--kolibri-color-disabled:#bdbdbd;--kolibri-color-text:#222222;--kolibri-color-visited:#9c27b0;--kolibri-font-family:Verdana, Arial, Tahoma, Helvetica, sans-serif;--kolibri-font-size:16px;--kolibri-spacing:0.25rem}:host{font-family:inherit;font-size:inherit}:host *{hyphens:auto;letter-spacing:inherit;word-break:break-word;word-spacing:inherit}:host{display:inline-block}a,button{background-color:transparent;border:none;font-size:inherit;margin:0;padding:0;transition-duration:0.5s;transition-property:background-color, color, border-color}:host{font-family:var(--kolibri-font-family);font-size:inherit}*{box-sizing:border-box}kol-icon{color:inherit}kol-span-wc{display:grid;gap:var(--kolibri-spacing);place-items:center}kol-span-wc>span{display:flex;gap:var(--kolibri-spacing);place-items:center}kol-span-wc>kol-icon,kol-span-wc>span>kol-icon{display:inline-grid;place-items:center;width:1em;height:1em}a,button,input,select,textarea{appearance:none;cursor:pointer}a.icon-only>kol-span-wc>span>span,button.icon-only>kol-span-wc>span>span{display:none}h1,h2,h3,h4,h5,h6{font-family:var(--kolibri-font-family);font-size:var(--kolibri-font-size);margin:0;padding:0}:host>div{overflow-x:auto;overflow-y:hidden}table{width:100%}th>div{display:grid;grid-template-columns:1fr auto;place-items:center;gap:0.25em}div.pagination{padding:0.5em}div.pagination,div.pagination>div:last-child{display:grid;place-items:center;gap:0.5em}@media (min-width: 1024px){div.pagination,div.pagination>div:last-child{grid-auto-flow:column}div.pagination kol-pagination{display:flex;gap:calc(4 * var(--kolibri-spacing))}}"}},216:(t,e,o)=>{o.d(e,{K:()=>ot,a:()=>z,b:()=>P,c:()=>x,d:()=>T,e:()=>M,f:()=>O,g:()=>N,h:()=>J,i:()=>tt,j:()=>K,k:()=>I,l:()=>et,m:()=>q,n:()=>Q,o:()=>E,p:()=>B,q:()=>U,r:()=>c,s:()=>L,t:()=>X,u:()=>R,w:()=>H});var i=o(37072),n=o(99945),a=o(87435);const r=(t,e)=>{e.forEach((e=>{!1===t.has(e)&&t.add(e)}))},s=(t,e=document)=>{if(e instanceof Document||e instanceof HTMLElement||e instanceof ShadowRoot){const o=new Set;r(o,e.querySelectorAll(t));const i=e.querySelectorAll('[class*="hydrated"]');for(let e=0;e<i.length;e++){const n=i[e].shadowRoot;r(o,s(t,"object"==typeof n&&null!==n?n:i[e]))}return Array.from(o)}throw new Error("The parameter document for the method querySelectorAll is not type of Document, HTMLElement or ShadowRoot.")},l=(t,e=document)=>{if(e instanceof Document||e instanceof HTMLElement||e instanceof ShadowRoot){let o=e.querySelector(t);if(null===o){const i=e.querySelectorAll('[class*="hydrated"]');for(let e=0;e<i.length;e++){const n=i[e].shadowRoot;if(o=l(t,"object"==typeof n&&null!==n?n:i[e]),null!==o)break}}return o}throw new Error("The parameter document for the method querySelector is not type of Document, HTMLElement or ShadowRoot.")};var c=f,h=f,d=function(t){var e=b(t);return{r:e[0],g:e[1],b:e[2],a:3==e.length?255:Math.round(e[3])}},g=function(t){var e=b(t);return 3==e.length&&e.push(255),255==e[3]?"rgb("+e[0]+", "+e[1]+", "+e[2]+")":0==e[3]?"rgba("+e[0]+", "+e[1]+", "+e[2]+", 0)":"rgba("+e[0]+", "+e[1]+", "+e[2]+", "+String(e[3]/255).substr(1)+")"},u=function(t){3==(e=b(t)).length&&e.push(255);var e,o=255==e[3],i=y(e[0]),n=y(e[1]),a=y(e[2]),r=function(t,e,o,i){var n=["ff","00","11","22","33","44","55","66","77","88","99","aa","bb","cc","dd","ee"];return-1!=n.indexOf(t)&&-1!=n.indexOf(e)&&-1!=n.indexOf(o)&&-1!=n.indexOf(i)}(i,n,a,e=y(Math.round(e[3])));return o?r?"#"+i.charAt(0)+n.charAt(0)+a.charAt(0):"#"+i+n+a:r?"#"+i.charAt(0)+n.charAt(0)+a.charAt(0)+e.charAt(0):"#"+i+n+a+e},p=function(t){var e=b(t);return 3==e.length?e.push(255):e[3]=Math.round(e[3]),(e[3]<<24>>>0|e[0]<<16|e[1]<<8|e[2])>>>0};function f(t){var e=b(t);return 3==e.length?e.concat(255):(e[3]=Math.round(e[3]),e)}function b(t){return"string"==typeof t?function(t){return"red"==t?[255,0,0]:"green"==t?[0,255,0]:"blue"==t?[0,0,255]:"black"==t?[0,0,0]:"white"==t?[255,255,255]:"cyan"==t?[0,255,255]:"gray"==t||"grey"==t?[128,128,128]:"magenta"==t||"pink"==t?[255,0,255]:"yellow"==t?[255,255,0]:void 0}(t=t.toLowerCase())||function(t){var e=t.replace(/^#/,""),o=e.length;if(3==o||4==o){var i=v(e[0]),n=v(e[1]),a=v(e[2]),r=3==o?255:v(e[3]);if(isNaN(i)||isNaN(n)||isNaN(a)||isNaN(r))return;return[i,n,a,r]}}(t)||function(t){var e=t.replace(/^#/,""),o=e.length;if(6==o||8==o){var i=v(e.slice(0,2)),n=v(e.slice(2,4)),a=v(e.slice(4,6)),r=6==o?255:v(e.slice(6,8));if(isNaN(i)||isNaN(n)||isNaN(a)||isNaN(r))return;return[i,n,a,r]}}(t)||function(t){if("rgb("==t.substr(0,4)){var e=(t=t.match(/^rgb\(([^)]+)\)/)[1]).split(/ *, */).map(Number),o=m(e[0],!0),i=m(e[1],!0),n=m(e[2],!0);if(-1!=o&&-1!=i&&-1!=n)return[o,i,n,255]}}(t)||function(t){if("rgba("==t.substr(0,5)){var e=(t=t.match(/^rgba\(([^)]+)\)/)[1]).split(/ *, */).map(Number),o=m(e[0],!0),i=m(e[1],!0),n=m(e[2],!0),a=m(255*e[3]);if(-1!=o&&-1!=i&&-1!=n&&-1!=a)return[o,i,n,a]}}(t)||[0,0,0,255]:function(t){if("[object Object]"===Object.prototype.toString.call(t)&&Object.getPrototypeOf(t)===Object.getPrototypeOf({})){var e=m(null!=t.r?t.r:null!=t.red?t.red:0,!0),o=m(null!=t.g?t.g:null!=t.green?t.green:0,!0),i=m(null!=t.b?t.b:null!=t.blue?t.blue:0,!0),n=m(null!=t.a?t.a:null!=t.alpha?t.alpha:255,!0);if(-1!=e&&-1!=o&&-1!=i&&-1!=n)return[e,o,i,n]}}(t)||function(t){if(Array.isArray(t)&&(3==t.length||4==t.length)){var e=m(t[0],!0),o=m(t[1],!0),i=m(t[2],!0),n=m(null!=t[3]?t[3]:255,!0);if(-1!=e&&-1!=o&&-1!=i&&-1!=n)return[e,o,i,n]}}(t)||function(t){if("number"==typeof t&&Math.floor(t)==t&&t<=4294967295&&t>=0)return[t>>16&255,t>>8&255,255&t,t>>24&255]}(t)||[0,0,0,255]}function y(t){var e=t.toString(16);return 1==e.length?"0"+e:e}function v(t){return 1==t.length?parseInt(t+t,16):parseInt(t,16)}function m(t,e){return"number"!=typeof t||!0===e&&Math.floor(t)!==t?-1:t>=0&&t<=255?t:-1}c.arr=h,c.obj=d,c.css=g,c.hex=u,c.num=p;var S=1/12.92;function w(t){return Math.pow((t+.055)/1.055,2.4)}function _(t){var e=t[0]/255,o=t[1]/255,i=t[2]/255;return.2126*(e<=.03928?e*S:w(e))+.7152*(o<=.03928?o*S:w(o))+.0722*(i<=.03928?i*S:w(i))}function k(t){var e=255;8===(t=t.replace(/^#/,"")).length&&(e=parseInt(t.slice(6,8),16),t=t.substring(0,6)),4===t.length&&(e=parseInt(t.slice(3,4).repeat(2),16),t=t.substring(0,3)),3===t.length&&(t=t[0]+t[0]+t[1]+t[1]+t[2]+t[2]);var o=parseInt(t,16);return[o>>16,o>>8&255,255&o,e]}function A(t,e){return function(t,e){return(Math.max(t,e)+.05)/(Math.min(t,e)+.05)}(_(t),_(e))}function x(t,e){return A(k(t),k(e))}function D(t){return t>=7?"AAA":t>=4.5?"AA":t>=3?"AA Large":"Fail"}const C=/\[object Object\]/,E=(t,e)=>{"string"==typeof t&&C.test(t)||e()},N=(t,e)=>{"string"==typeof t&&""===t||e()},O=(t,e)=>{(0,a.b)()&&(a.L.debug([t,e]),a.L.debug("\u2191 We propagate the (submit) event to this target.")),Object.defineProperty(t,"target",{value:e,writable:!1})},L=(t,e,o,i={})=>{var n,a;void 0===t.nextHooks&&(t.nextHooks=new Map),void 0===t.nextState&&(t.nextState=new Map),t.nextState.get(e)!==o&&(t.nextHooks.get(e)instanceof Map==0&&t.nextHooks.set(e,new Map),"function"==typeof i.afterPatch&&(null===(n=t.nextHooks.get(e))||void 0===n||n.set("afterPatch",i.afterPatch)),"function"==typeof i.beforePatch&&(null===(a=t.nextHooks.get(e))||void 0===a||a.set("beforePatch",i.beforePatch)),t.nextState.set(e,o),(t=>{var e,o,i;null===(e=t.nextHooks)||void 0===e||e.forEach(((e,o)=>{var i;const n=e.get("beforePatch");"function"==typeof n&&n(null===(i=t.nextState)||void 0===i?void 0:i.get(o),t.nextState,t,o)})),(null===(o=t.nextState)||void 0===o?void 0:o.size)>0&&(t.state=Object.assign(Object.assign({},t.state),Object.fromEntries(t.nextState)),delete t.nextState,null===(i=t.nextHooks)||void 0===i||i.forEach(((e,o)=>{const i=e.get("afterPatch");"function"==typeof i&&i(t.state[o],t.state,t,o)}))),delete t.nextHooks})(t))},z=(t,e,o,i,a,r={})=>{o(a)?L(t,e,a,null==r?void 0:r.hooks):void 0===a||null===a&&(void 0===(null==r?void 0:r.required)||!1===(null==r?void 0:r.required))?L(t,e,null==r?void 0:r.defaultValue,null==r?void 0:r.hooks):(void 0!==(null==r?void 0:r.required)&&!1!==(null==r?void 0:r.required)||i.add(null),((t,e,o,i)=>{(0,n.d)(`[${t.constructor.name}] Der Property-Wert (${o}) f\xfcr '${e}' ist nicht valide. Folgende Werte sind erlaubt: ${Array.from(i).join(", ")}`)})(t,e,a,i))},P=(t,e,o,i)=>{z(t,e,(t=>"boolean"==typeof t),new Set(["Boolean {true, false}"]),o,i)},H=(t,e,o,i={})=>{const n="number"==typeof i.minLength?null==i?void 0:i.minLength:0;z(t,e,(t=>"string"==typeof t&&t.length>=n&&(void 0===(null==i?void 0:i.maxLength)||t.length<=i.maxLength)),new Set(["String"]),o,i)},M=(t,e,o,i)=>{z(t,e,(t=>"number"==typeof t&&(void 0===(null==i?void 0:i.min)||"number"==typeof(null==i?void 0:i.min)&&t>=i.min)&&(void 0===(null==i?void 0:i.max)||"number"==typeof(null==i?void 0:i.max)&&t<=i.max)),new Set(["Number"]),o,i)},T=(t,e,o,i,n=(t=>t==t),r={})=>{N(i,(()=>{E(i,(()=>{void 0===i&&(i=[]);try{try{i=B(i)}catch(t){}if(Array.isArray(i)){const s=i.find((t=>!o(t)));void 0===s&&n(i)?L(t,e,i,r.hooks):E(s,(()=>{throw a.L.debug(s),new Error("\u2191 Das Schema f\xfcr das Property (_options) ist nicht valide. Der Wert wird nicht ge\xe4ndert.")}))}else E(i,(()=>{throw a.L.debug(i),new Error("\u2191 Das Schema f\xfcr das Property (_options) ist nicht valide. Der Wert wird nicht ge\xe4ndert.")}))}catch(t){a.L.debug(t)}}))}))},j=/^(true|false)$/,$=/^-?(0|[1-9]\d*)$/,F=/^-?(0.|[1-9]\d*.)\d*[1-9]$/,q=t=>{const e=typeof t,o=`${t}`;if("string"==typeof t)if(j.test(t))t="true"===t;else if($.test(t))t=parseInt(t);else if(F.test(t))t=parseFloat(t);else if(W.test(t))try{t=B(t)}catch(t){}return e!==typeof t&&(0,n.d)(`You have used a stringified property value (${o} to ${JSON.stringify(t)}) which type switched from ${e} to ${typeof t}!`),t},R=t=>{try{return JSON.stringify(t).replace(/"/g,"'")}catch(e){throw a.L.warn(["stringifyJson",t]),a.L.error("\u2191 Das JSON konnte nicht in einen String umgewandelt werden. Es wird ein stringifizierbares JSON erwartet."),new Error}},W=/^[{[]/,B=t=>{if("string"==typeof t)try{return JSON.parse(t)}catch(e){if(W.test(t))try{return JSON.parse(t.replace(/'/g,'"'))}catch(e){a.L.warn(["parseJson",t]),a.L.error("\u2191 Der JSON-String konnte nicht geparsed werden. Achten Sie darauf, dass einfache Anf\xfchrungszeichen im Text maskiert werden (&#8216;).")}}throw new Error},J=t=>"boolean"==typeof t?!0===t?"true":"false":void 0,K=t=>"string"==typeof t?t:J(t),I=(t,e)=>l(t,e||(0,a.g)()),U=(t,e)=>s(t,e||(0,a.g)());let V=null;const Y=()=>(V=V||{backgroundColor:"#00000000",color:"#00000000",domNode:(0,a.g)().body,level:"Fail",score:1},V),G=/(\d+, ){3}0\)/,Q=(t,e=Y())=>{const o=getComputedStyle(t),i=G.test(o.backgroundColor)?e.backgroundColor:c.hex(o.backgroundColor),n=G.test(o.color)?e.color:c.hex(o.color),r=x(i,n),s={backgroundColor:i,color:n,domNode:t,level:D(r),score:r};return r<4.5&&a.L.error(["Color-Contrast-Error",{backgroundColor:s.backgroundColor,color:s.color,level:s.level,score:s.score},s.domNode]),s},X=(t,e=Y())=>{e.domNode instanceof HTMLElement&&(e=Q(e.domNode,e));const o=e.domNode.querySelector(t);if(null===o){const o=e.domNode.querySelectorAll('[class="hydrated"]');for(let i=0;i<o.length&&(e.domNode=o[i],null===(e=X(t,e)).domNode);i++);return e}return Q(o,e)},Z=(t,e=window)=>{t instanceof HTMLElement?(e.scrollTo({behavior:"smooth",top:t.getBoundingClientRect().top+(0,a.a)().pageYOffset-50}),t.focus()):(0,n.d)("Das HTMLElement ist nicht valide, zu dem gescrollt werden soll.")},tt=(t,e)=>{if((t instanceof Document||t instanceof HTMLElement||t instanceof ShadowRoot)&&"string"==typeof e){(0,n.d)("Bei der Methode querySelectorAll wurden die Parameter document, selector in selector, document getauscht, da der Parameter selector nicht, allerdings der Parameter document optional sein kann.");const o=`${e}`;e=t,t=o}if("string"==typeof t){const o=I(t,e);o instanceof HTMLElement?Z(o):(0,n.d)(`Es konnte kein HTMLElement mit dem Selector (${t}) gefunden werden, zu dem gescrollt werden soll.`)}else(0,n.d)("Der Selector ist nicht valide, zu dem gescrollt werden soll.")};class et{static queryHtmlElementColors(t,e,o=!1,i=!0){let n=null;if(!0===o||!1===et.executionLock)if(!1===o&&(et.cache.clear(),et.cache.set(e.domNode,e),et.executionLock=!0,!0===i&&a.L.debug("[KoliBriUtils] Color contrast analysis started...")),t===e.domNode)n=e;else{const o=new Set;if(e.domNode.shadowRoot){const t=e.domNode.shadowRoot.children;for(let e=0;e<t.length;e++)o.add(t[e])}const i=e.domNode;if("function"==typeof i.assignedNodes){const t=i.assignedNodes();for(let e=0;e<t.length;e++)t[e]instanceof HTMLElement&&o.add(t[e])}const a=e.domNode.children;for(let t=0;t<a.length;t++)o.add(a[t]);const r=Array.from(o);for(let s=0;s<r.length;s++){let o=et.cache.get(r[s]);void 0===o&&(o=Q(r[s],e)),et.cache.set(r[s],o);const i=et.queryHtmlElementColors(t,o,!0,!1);if(null!==i){n=i;break}}}else a.L.debug("[KoliBriUtils] Call aborted because a color contrast analysis is currently being executed.");return!1===o&&(!0===i&&a.L.debug(`[KoliBriUtils] Color contrast analysis finished (${et.cache.size} DOM elements are analysed).`),et.executionLock=!1,et.cache.clear()),n}}et.executionLock=!1,et.cache=new Map;class ot{}ot.patchTheme=i.p,ot.patchThemeTag=i.a,ot.querySelector=I,ot.querySelectorAll=U,ot.scrollByHTMLElement=Z,ot.scrollBySelector=tt,ot.stringifyJson=R}}]);