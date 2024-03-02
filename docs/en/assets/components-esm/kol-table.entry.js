/*!
 * KoliBri - The accessible HTML-Standard
 */
import{r as registerInstance,h,H as Host}from"./index-62e5924b.js";import{m as setState,w as watchValidator,aq as emptyStringByArrayHandler,ar as validatePaginationPosition,v as validateLabel,C as watchString,u as parseJson,t as objectObjectHandler,h as devHint}from"./index-de9d4ee0.js";import{a as translate}from"./i18n-8b7a6ddc.js";import"./index-8cb3c3b2.js";import"./dev.utils-744f41b3.js";const defaultStyleCss="/*\n * This file contains all rules for accessibility.\n */\n@layer kol-global {\n  :host {\n    /*\n     * Minimum size of interactive elements.\n     */\n    --a11y-min-size: 44px;\n    /*\n     * No element should be used without a background and font color whose contrast ratio has\n     * not been checked. By initially setting the background color to white and the font color\n     * to black, the contrast ratio is ensured and explicit adjustment is forced.\n     */\n    background-color: white;\n    color: black;\n    /*\n     * Verdana is an accessible font that can be used without requiring additional loading time.\n     */\n    font-family: Verdana;\n  }\n  * {\n    /*\n     * This rule enables the word dividing for all texts. That is important for high zoom levels.\n     */\n    hyphens: auto;\n    /*\n     * Letter spacing is required for all texts.\n     */\n    letter-spacing: inherit;\n    /*\n     * This rule enables the word dividing for all texts. That is important for high zoom levels.\n     */\n    word-break: break-word;\n    /*\n     * Word spacing is required for all texts.\n     */\n    word-spacing: inherit;\n  }\n  /*\n   * All interactive elements should have a minimum size of 44px.\n   */\n  /* input:not([type='checkbox'], [type='radio'], [type='range']), */\n  /* option, */\n  /* select, */\n  /* textarea, */\n  [role=button],\n  button:not([role=link]),\n  kol-input .input {\n    min-height: var(--a11y-min-size);\n    min-width: var(--a11y-min-size);\n  }\n  /*\n   * Some interactive elements should not inherit the font-family and font-size.\n   */\n  a,\n  button,\n  h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6,\n  input,\n  option,\n  select,\n  textarea {\n    /*\n     * All elements should inherit the font family from his parent element.\n     */\n    font-family: inherit;\n    /*\n     * All elements should inherit the font size from his parent element.\n     */\n    font-size: inherit;\n  }\n}\n/**\n * Sometimes we need the semantic element for accessibility reasons,\n * but we don't want to show it.\n *\n * - https://www.a11yproject.com/posts/how-to-hide-content/\n */\n.visually-hidden {\n  clip: rect(0 0 0 0);\n  clip-path: inset(50%);\n  height: 1px;\n  overflow: hidden;\n  position: absolute;\n  white-space: nowrap;\n  width: 1px;\n}\n\n@layer kol-global {\n  /*\n   * Dieses CSS stellt sicher, dass der Standard-Style\n   * von A und Button resettet werden.\n   */\n  :is(a, button) {\n    background-color: transparent;\n    border: none;\n    margin: 0;\n    padding: 0;\n    width: 100%; /* 100% needed for custom width from outside */\n  }\n  /*\n   * Ensure elements with hidden attribute to be actually not visible\n   * @see https://meowni.ca/hidden.is.a.lie.html\n   */\n  [hidden] {\n    display: none !important;\n  }\n}\n@layer kol-global {\n  :host {\n    /*\n     * The max-width is needed to prevent the table from overflowing the\n     * parent node, if the table is wider than the parent node.\n     */\n    max-width: 100%;\n  }\n  * {\n    /*\n     * We prefer to box-sizing: border-box for all elements.\n     */\n    box-sizing: border-box;\n  }\n  /* KolSpan is a layout component with icons in all directions and a label text in the middle. */\n  kol-span-wc {\n    display: grid;\n    place-items: center;\n  }\n  /* The sub span in KolSpan is the horizontal span with icon left and right and the label text in the middle. */\n  kol-span-wc > span {\n    display: flex;\n    place-items: center;\n  }\n  a,\n  button {\n    cursor: pointer;\n  }\n  .hidden {\n    display: none;\n    visibility: hidden;\n  }\n  /* This is the text label. */\n  .hide-label > kol-span-wc > span > span {\n    display: none;\n  }\n  /* Reset browser agent style. */\n  button:disabled {\n    color: unset;\n  }\n  .disabled label,\n  .disabled:focus-within label,\n  [aria-disabled=true],\n  [aria-disabled=true]:focus,\n  [disabled],\n  [disabled]:focus {\n    cursor: not-allowed !important;\n    opacity: 0.5 !important;\n    outline: none !important;\n  }\n  [aria-disabled=true]:focus kol-span-wc,\n  [disabled]:focus kol-span-wc {\n    outline: none !important;\n  }\n}\n@layer kol-component {\n  :host {\n    display: block;\n  }\n}\n@layer kol-component {\n  :host {\n    display: grid;\n  }\n  :host > div.table {\n    max-width: 100%;\n    overflow-x: auto;\n    overflow-y: hidden;\n  }\n  :host > div.table table {\n    width: 100%;\n  }\n  caption {\n    text-align: start;\n  }\n  caption:focus {\n    outline: 0 !important;\n  }\n  .table:has(caption:focus) {\n    /* @see https://remysharp.com/til/css/focus-ring-default-styles */\n    outline: 5px auto Highlight;\n    outline: 5px auto -webkit-focus-ring-color;\n    outline-offset: 2px;\n  }\n  .table-sort-button .button {\n    color: inherit;\n  }\n  th.align-left {\n    text-align: left;\n  }\n  th.align-left .table-sort-button .button-inner {\n    justify-items: start;\n  }\n  th.align-center {\n    text-align: center;\n  }\n  th.align-center .table-sort-button .button-inner {\n    justify-items: center;\n  }\n  th.align-right {\n    text-align: right;\n  }\n  th.align-right .table-sort-button .button-inner {\n    justify-items: end;\n  }\n  div.pagination kol-pagination {\n    display: flex;\n    flex-wrap: wrap;\n  }\n  div.pagination,\n  div.pagination > div:last-child {\n    display: grid;\n    place-items: center;\n  }\n  @media (max-width: 1024px) {\n    div.pagination kol-pagination {\n      flex-direction: column;\n    }\n  }\n  @media (min-width: 1024px) {\n    div.pagination,\n    div.pagination > div:last-child {\n      grid-auto-flow: column;\n    }\n    div.pagination kol-pagination {\n      display: flex;\n    }\n  }\n}",KolTableDefaultStyle0=defaultStyleCss,PAGINATION_OPTIONS=[10,20,50,100],CELL_REFS=new Map,paginationValidator=t=>!0===t||""===t||"object"==typeof t&&null!==t,KolTable=class{constructor(t){registerInstance(this,t),this.horizontal=!0,this.sortDirections=new Map,this.sortData=[],this.showPagination=!1,this.pageStartSlice=0,this.pageEndSlice=10,this.disableSort=!1,this.sortedColumnHead={label:"",key:"",sortDirection:"NOS"},this.setSortDirection=(t,e)=>{this.sortDirections.clear(),this.sortDirections.set(t,e),this.sortFunction=t},this.handlePagination={onClick:(t,e)=>{var n;"function"==typeof(null===(n=this.state._pagination._on)||void 0===n?void 0:n.onClick)&&this.state._pagination._on.onClick(t,e),setState(this,"_pagination",Object.assign(Object.assign({},this.state._pagination),{_page:e}))},onChangePage:(t,e)=>{var n;"function"==typeof(null===(n=this.state._pagination._on)||void 0===n?void 0:n.onChangePage)&&this.state._pagination._on.onChangePage(t,e),setState(this,"_pagination",Object.assign(Object.assign({},this.state._pagination),{_page:e}))},onChangePageSize:(t,e)=>{var n;"function"==typeof(null===(n=this.state._pagination._on)||void 0===n?void 0:n.onChangePageSize)&&this.state._pagination._on.onChangePageSize(t,e),setState(this,"_pagination",Object.assign(Object.assign({},this.state._pagination),{_pageSize:e})),setState(this,"_pageSize",e)}},this.updateSortedData=(t=this.sortedColumnHead)=>{if(this.disableSort)return void setState(this,"_sortedData",this.state._data);let e=this.state._data;if(this.sortData.length>0)e=this.state._data.sort(((t,e)=>{for(let n=0;n<this.sortData.length;n++){const i=this.sortData[n],a=i.compareFn(t,e);if(0!==a)return"ASC"===i.direction?a:-a}return 0}));else if("function"==typeof this.sortFunction)switch(this.sortDirections.get(this.sortFunction)){case"ASC":e=this.sortFunction([...this.state._data]),this.sortedColumnHead={label:t.label,key:t.key,sortDirection:"ASC"};break;case"DESC":e=this.sortFunction([...this.state._data]).reverse(),this.sortedColumnHead={label:t.label,key:t.key,sortDirection:"DESC"};break;default:e=[...this.state._data],this.sortedColumnHead={label:"",key:"",sortDirection:"NOS"}}setState(this,"_sortedData",e)},this.renderTableRow=(t,e)=>h("tr",{key:`tbody-${e}`},t.map(((t,n)=>this.renderTableCell(t,e,n)))),this.renderTableCell=(t,e,n)=>{if(!1===t.asTd){const i=t;let a,o="NOS",s="codicon codicon-fold";if(!this.disableSort){if(i.key){const t=this.sortData.find((t=>t.key===i.key));if(t)switch(o=t.direction,t.direction){case"ASC":s="codicon codicon-chevron-up",a="ascending";break;case"DESC":s="codicon codicon-chevron-down",a="descending"}}if(i.key===this.sortedColumnHead.key)switch(o=this.sortedColumnHead.sortDirection,this.sortedColumnHead.sortDirection){case"ASC":s="codicon codicon-chevron-up",a="ascending";break;case"DESC":s="codicon codicon-chevron-down",a="descending"}}return h("th",{key:`tbody-${e}-${n}-${i.label}`,scope:"number"==typeof i.rowSpan&&i.rowSpan>1?"rowgroup":"row",colSpan:i.colSpan,rowSpan:i.rowSpan,style:{textAlign:i.textAlign,width:i.width},"aria-sort":a,"data-sort":`sort-${o}`},h("div",{class:"w-full flex gap-1 items-center"},h("div",{class:{"w-full":!0,[i.textAlign]:"string"==typeof i.textAlign&&i.textAlign.length>0},style:{textAlign:i.textAlign}},i.label),!this.disableSort&&("function"==typeof i.compareFn||"function"==typeof i.sort)&&h("kol-button",{exportparts:"icon",_icons:s,_hideLabel:!0,_label:translate("kol-change-order",{placeholders:{colLabel:i.label}}),_on:{onClick:()=>this.changeCellSort(i)},_variant:"ghost"})))}return h("td",{key:`tbody-${e}-${n}-${t.label}`,class:{[t.textAlign]:"string"==typeof t.textAlign&&t.textAlign.length>0},colSpan:t.colSpan,rowSpan:t.rowSpan,style:{textAlign:t.textAlign,width:t.width},ref:"function"==typeof t.render?e=>{this.cellRender(t,e)}:void 0},"function"!=typeof t.render?t.label:"")},this.renderFoot=()=>{const t=this.createDataField(this.state._dataFoot,this.state._headers,!0);return h("tfoot",null,t.map(this.renderTableRow))},this.tableDivElementHasScrollbar=!1,this._allowMultiSort=void 0,this._data=void 0,this._dataFoot=void 0,this._headers=void 0,this._label=void 0,this._minWidth=void 0,this._pagination=void 0,this._paginationPosition="bottom",this.state={_allowMultiSort:!1,_data:[],_dataFoot:[],_headers:{horizontal:[],vertical:[]},_label:"",_pagination:{_page:1,_pageSize:10,_max:0},_sortedData:[],_paginationPosition:"bottom"}}validateAllowMultiSort(t){watchValidator(this,"_allowMultiSort",(()=>!0),new Set(["boolean"]),t,{defaultValue:!1})}validateData(t){emptyStringByArrayHandler(t,(()=>{objectObjectHandler(t,(()=>{void 0===t&&(t=[]);try{t=parseJson(t)}catch(t){}Array.isArray(t)&&void 0===t.find((t=>!("object"==typeof t&&null!==t)))&&setState(this,"_data",t,{afterPatch:()=>{setTimeout(this.updateSortedData)}})}))}))}validateDataFoot(t){emptyStringByArrayHandler(t,(()=>{objectObjectHandler(t,(()=>{void 0===t&&(t=[]);try{t=parseJson(t)}catch(t){}Array.isArray(t)&&void 0===t.find((t=>!("object"==typeof t&&null!==t)))&&setState(this,"_dataFoot",t,{afterPatch:()=>{setTimeout(this.updateSortedData)}})}))}))}validatePaginationPosition(t){validatePaginationPosition(this,t)}changeCellSort(t){var e;if("function"==typeof t.compareFn){this.state._allowMultiSort||t.key==(null===(e=this.sortData[0])||void 0===e?void 0:e.key)||(this.sortData=[]);const n=this.sortData.findIndex((e=>e.key===t.key));if(n>=0){const t=this.sortData[n];switch(t.direction){case"ASC":t.direction="DESC";break;case"DESC":this.sortData.splice(n,1);break;default:t.direction="ASC"}}else t.key&&this.sortData.push({label:t.label,key:t.key,compareFn:t.compareFn,direction:"ASC"});this.updateSortedData(t)}else if("function"==typeof t.sort){switch(this.sortFunction=t.sort,this.sortDirections.get(this.sortFunction)){case"ASC":this.setSortDirection(this.sortFunction,"DESC");break;case"DESC":this.setSortDirection(this.sortFunction,"NOS");break;default:this.setSortDirection(this.sortFunction,"ASC")}this.updateSortedData(t)}}validateHeaders(t){emptyStringByArrayHandler(t,(()=>{objectObjectHandler(t,(()=>{try{t=parseJson(t)}catch(t){}watchValidator(this,"_headers",(t=>"object"==typeof t&&null!==t),new Set(["KoliBriTableHeaders"]),t,{hooks:{beforePatch:t=>{var e,n,i,a;const o=t=>{let e=!1;t.forEach((t=>{const n=t.key;if(!n)return;const i=t.sortDirection;"ASC"!==i&&"DESC"!==i||("function"==typeof t.compareFn?((this.state._allowMultiSort||0===this.sortData.length)&&this.sortData.push({label:t.label,key:n,compareFn:t.compareFn,direction:i}),e=!0):"function"==typeof t.sort&&(this.setSortDirection(t.sort,i),setTimeout((()=>this.updateSortedData({key:n,label:t.label,sortDirection:i})))))})),e&&setTimeout((()=>this.updateSortedData()))},s=t;null===(e=s.horizontal)||void 0===e||e.forEach(o),null===(n=s.vertical)||void 0===n||n.forEach(o),s.horizontal&&s.vertical&&(null===(i=s.horizontal)||void 0===i?void 0:i.length)>0&&(null===(a=s.vertical)||void 0===a?void 0:a.length)>0&&(this.disableSort=!0,devHint("Table: You can not sort the table data, if horizontal and vertical headers are defined at the same time. (https://github.com/public-ui/kolibri/issues/2372)"))}}})}))}))}validateLabel(t){validateLabel(this,t,{required:!0})}validateMinWidth(t){watchString(this,"_minWidth",t,{defaultValue:void 0})}validatePagination(t){try{t=parseJson(t)}catch(t){}this.showPagination=paginationValidator(t),watchValidator(this,"_pagination",paginationValidator,new Set(["boolean","KoliBriTablePagination"]),t,{defaultValue:{_page:1,_pageSize:10,_max:0}})}componentDidRender(){this.checkDivElementScrollbar()}componentDidLoad(){this.tableDivElement&&ResizeObserver&&(this.tableDivElementResizeObserver=new ResizeObserver(this.checkDivElementScrollbar.bind(this)),this.tableDivElementResizeObserver.observe(this.tableDivElement))}disconnectedCallback(){var t;null===(t=this.tableDivElementResizeObserver)||void 0===t||t.disconnect()}checkDivElementScrollbar(){this.tableDivElement&&(this.tableDivElementHasScrollbar=this.tableDivElement.scrollWidth>this.tableDivElement.clientWidth)}componentWillLoad(){this.validateAllowMultiSort(this._allowMultiSort),this.validateData(this._data),this.validateDataFoot(this._dataFoot),this.validateHeaders(this._headers),this.validateLabel(this._label),this.validateMinWidth(this._minWidth),this.validatePagination(this._pagination),this.validatePaginationPosition(this._paginationPosition)}getNumberOfCols(t,e){let n=0;return t.forEach((t=>{let e=0;t.forEach((t=>{var n;return e+=null!==(n=t.colSpan)&&void 0!==n?n:1})),n<e&&(n=e)})),0===n&&(n=e.length),n}getNumberOfRows(t,e){let n=0;return t.forEach((t=>{let e=0;t.forEach((t=>{var n;return e+=null!==(n=t.rowSpan)&&void 0!==n?n:1})),n<e&&(n=e)})),0===n?n=e.length:n-=this.state._dataFoot.length,n}filterHeaderKeys(t){const e=[];return t.forEach((t=>{t.forEach((t=>{"string"==typeof t.key&&e.push(t)}))})),e}getPrimaryHeader(t){var e,n;let i=this.filterHeaderKeys(null!==(e=t.horizontal)&&void 0!==e?e:[]);return this.horizontal=!0,0===i.length&&(i=this.filterHeaderKeys(null!==(n=t.vertical)&&void 0!==n?n:[]),i.length>0&&(this.horizontal=!1)),i}createDataField(t,e,n){e.horizontal=Array.isArray(null==e?void 0:e.horizontal)?e.horizontal:[],e.vertical=Array.isArray(null==e?void 0:e.vertical)?e.vertical:[];const i=this.getPrimaryHeader(e),a=this.getNumberOfCols(e.horizontal,t);let o=this.getNumberOfRows(e.vertical,t),s=0;n&&(s=o,o+=this.state._dataFoot.length);const l=[],r=[],h=[];e.vertical.forEach(((t,e)=>{r[e]=0,h[e]=[]}));for(let d=s;d<o;d++){const o=[];e.vertical.forEach(((t,e)=>{let n=0;if(h[e].forEach((t=>n+=t)),n<=d){const i=t[d-n+r[e]];if("object"==typeof i){o.push(Object.assign(Object.assign({},i),{asTd:!1,data:{}}));let t=1;if("number"==typeof i.rowSpan&&i.rowSpan>1&&(t=i.rowSpan),h[e].push(t),"number"==typeof i.colSpan&&i.colSpan>1)for(let n=1;n<i.colSpan;n++)h[e+n].push(t);r[e]++}}}));for(let e=0;e<a;e++)if(!0===this.horizontal){const a=n?this.state._dataFoot[d-s]:t[d];"object"==typeof i[e]&&null!==i[e]&&"string"==typeof i[e].key&&"object"==typeof a&&null!==a&&o.push(Object.assign(Object.assign({},i[e]),{colSpan:void 0,data:a,label:a[i[e].key],rowSpan:void 0}))}else"object"==typeof i[d]&&null!==i[d]&&"string"==typeof i[d].key&&"object"==typeof t[e]&&null!==t[e]&&o.push(Object.assign(Object.assign({},i[d]),{colSpan:void 0,data:t[e],label:t[e][i[d].key],rowSpan:void 0}));l.push(o)}if(0===t.length){let t=0,n=0;Array.isArray(e.horizontal)&&e.horizontal.length>0&&e.horizontal[0].forEach((e=>{t+=e.colSpan||1})),Array.isArray(e.vertical)&&e.vertical.length>0&&(t-=e.vertical.length,e.vertical[0].forEach((t=>{n+=t.rowSpan||1})));const i={colSpan:t,label:translate("kol-no-entries"),render:void 0,rowSpan:Math.max(n,1)};0===l.length?l.push([i]):l[0].push(i)}return l}selectDisplayedData(t,e,n){return"number"==typeof e&&e>0&&"number"==typeof n&&n>0?(this.pageStartSlice=e*(n-1),this.pageEndSlice=e*n>t.length?t.length:e*n,t.slice(this.pageStartSlice,this.pageEndSlice)):(this.pageStartSlice=0,this.pageEndSlice=t.length,t)}cellRender(t,e){e&&(clearTimeout(CELL_REFS.get(e)),CELL_REFS.set(e,setTimeout((()=>{clearTimeout(CELL_REFS.get(e));const n=t.render(e,{asTd:t.asTd,label:t.label,textAlign:t.textAlign,width:t.width},t.data,this.state._data);"string"==typeof n&&(e.textContent=n)}))))}renderPagination(){return h("div",{class:"pagination"},h("span",null,translate("kol-table-visible-range",{placeholders:{start:this.pageEndSlice>0?(this.pageStartSlice+1).toString():"0",end:this.pageEndSlice.toString(),total:this.state._pagination&&this.state._pagination._max>0?this.state._pagination._max.toString():Array.isArray(this.state._data)?this.state._data.length.toString():"0"}})),h("div",null,h("kol-pagination",{_boundaryCount:this.state._pagination._boundaryCount,_customClass:this.state._pagination._customClass,_on:this.handlePagination,_page:this.state._pagination._page,_pageSize:this.state._pagination._pageSize,_pageSizeOptions:this.state._pagination._pageSizeOptions||PAGINATION_OPTIONS,_siblingCount:this.state._pagination._siblingCount,_tooltipAlign:"bottom",_max:this.state._pagination._max||this.state._pagination._max||this.state._data.length,_label:translate("kol-table-pagination-label",{placeholders:{label:this.state._label}})})))}render(){var t,e;const n=this.selectDisplayedData(this.state._sortedData,this.showPagination?null!==(e=null===(t=this.state._pagination)||void 0===t?void 0:t._pageSize)&&void 0!==e?e:10:this.state._sortedData.length,this.state._pagination._page||1),i=this.createDataField(n,this.state._headers),a="top"===this._paginationPosition||"both"===this._paginationPosition?this.renderPagination():null,o="bottom"===this._paginationPosition||"both"===this._paginationPosition?this.renderPagination():null;return h(Host,{key:"c80e2161228b007200b23aded2c8b255ffd582dd"},this.pageEndSlice>0&&this.showPagination&&a,h("div",{key:"35e2f73b819963d715745efec48af99aad147f15",ref:t=>this.tableDivElement=t,class:"table",tabindex:"-1",onMouseDown:t=>{t.preventDefault()}},h("table",{key:"9545cfeb02836fc388d97b47ac40de61940709d0",style:{minWidth:this.state._minWidth}},h("caption",{key:"39a640e4b0cf65a1506adc4697753c14a244e07f",tabindex:this.tableDivElementHasScrollbar?"0":void 0},this.state._label),Array.isArray(this.state._headers.horizontal)&&h("thead",null,this.state._headers.horizontal.map(((t,e)=>h("tr",{key:`thead-${e}`},t.map(((t,n)=>{if(!0===t.asTd)return h("td",{key:`thead-${e}-${n}-${t.label}`,class:{[t.textAlign]:"string"==typeof t.textAlign&&t.textAlign.length>0},colSpan:t.colSpan,rowSpan:t.rowSpan,style:{textAlign:t.textAlign,width:t.width},ref:"function"==typeof t.render?e=>{this.cellRender(t,e)}:void 0},"function"!=typeof t.render?t.label:"");{const i=t;let a,o="NOS",s="codicon codicon-fold";if(i.key){const t=this.sortData.find((t=>t.key===i.key));if(t)switch(o=t.direction,t.direction){case"ASC":s="codicon codicon-chevron-up",a="ascending";break;case"DESC":s="codicon codicon-chevron-down",a="descending"}}if(i.key===this.sortedColumnHead.key)switch(o=this.sortedColumnHead.sortDirection,this.sortedColumnHead.sortDirection){case"ASC":s="codicon codicon-chevron-up",a="ascending";break;case"DESC":s="codicon codicon-chevron-down",a="descending"}return h("th",{class:t.textAlign?`align-${t.textAlign}`:void 0,key:`thead-${e}-${n}-${i.label}`,scope:"number"==typeof i.colSpan&&i.colSpan>1?"colgroup":"col",colSpan:i.colSpan,rowSpan:i.rowSpan,style:{width:t.width},"aria-sort":a,"data-sort":`sort-${o}`},this.disableSort||"function"!=typeof i.compareFn&&"function"!=typeof i.sort?t.label:h("kol-button-wc",{class:"table-sort-button",exportparts:"icon",_icons:{right:s},_label:t.label,_on:{onClick:()=>this.changeCellSort(i)}}))}})))))),h("tbody",{key:"d1fcfe215ffe10354cd944182bdbfb70a55d4106"},i.map(this.renderTableRow)),this.state._dataFoot.length>0?this.renderFoot():"")),this.pageEndSlice>0&&this.showPagination&&o)}static get watchers(){return{_allowMultiSort:["validateAllowMultiSort"],_data:["validateData"],_dataFoot:["validateDataFoot"],_paginationPosition:["validatePaginationPosition"],_headers:["validateHeaders"],_label:["validateLabel"],_minWidth:["validateMinWidth"],_pagination:["validatePagination"]}}};KolTable.style={default:KolTableDefaultStyle0};export{KolTable as kol_table};