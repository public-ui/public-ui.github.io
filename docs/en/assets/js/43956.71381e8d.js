/*! For license information please see 43956.71381e8d.js.LICENSE.txt */
"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[43956],{66336:(t,e,n)=>{n.r(e),n.d(e,{kol_table_stateful:()=>u});var i=n(65224),a=n(98852),o=n(63792),s=n(29140),l=n(99491),r=n(70728),h=n(97876);const d=["top","bottom","both"],c=[10,20,50,100],p=t=>!0===t||""===t||"object"==typeof t&&null!==t,u=class{constructor(t){(0,i.r)(this,t),this.sortDirections=new Map,this.sortData=[],this.showPagination=!1,this.pageStartSlice=0,this.pageEndSlice=10,this.disableSort=!1,this.sortedColumnHead={label:"",key:"",sortDirection:"NOS"},this.setSortDirection=(t,e)=>{this.sortDirections.clear(),this.sortDirections.set(t,e),this.sortFunction=t},this.handlePagination={onClick:(t,e)=>{var n;"function"==typeof(null===(n=this.state._pagination._on)||void 0===n?void 0:n.onClick)&&this.state._pagination._on.onClick(t,e),(0,r.s)(this,"_pagination",Object.assign(Object.assign({},this.state._pagination),{_page:e}))},onChangePage:(t,e)=>{var n;"function"==typeof(null===(n=this.state._pagination._on)||void 0===n?void 0:n.onChangePage)&&this.state._pagination._on.onChangePage(t,e),(0,r.s)(this,"_pagination",Object.assign(Object.assign({},this.state._pagination),{_page:e}))},onChangePageSize:(t,e)=>{var n;"function"==typeof(null===(n=this.state._pagination._on)||void 0===n?void 0:n.onChangePageSize)&&this.state._pagination._on.onChangePageSize(t,e),(0,r.s)(this,"_pagination",Object.assign(Object.assign({},this.state._pagination),{_pageSize:e})),(0,r.s)(this,"_pageSize",e)}},this.updateSortedData=(t=this.sortedColumnHead)=>{if(this.disableSort)return void(0,r.s)(this,"_sortedData",this.state._data);let e=this.state._data;if(this.sortData.length>0)e=this.state._data.sort(((t,e)=>{for(let n=0;n<this.sortData.length;n++){const i=this.sortData[n],a=i.compareFn(t,e);if(0!==a)return"ASC"===i.direction?a:-a}return 0}));else if("function"==typeof this.sortFunction)switch(this.sortDirections.get(this.sortFunction)){case"ASC":e=this.sortFunction([...this.state._data]),this.sortedColumnHead={label:t.label,key:t.key,sortDirection:"ASC"};break;case"DESC":e=this.sortFunction([...this.state._data]).reverse(),this.sortedColumnHead={label:t.label,key:t.key,sortDirection:"DESC"};break;default:e=[...this.state._data],this.sortedColumnHead={label:"",key:"",sortDirection:"NOS"}}(0,r.s)(this,"_sortedData",e)},this._allowMultiSort=void 0,this._data=void 0,this._dataFoot=void 0,this._headers=void 0,this._label=void 0,this._minWidth=void 0,this._pagination=void 0,this._paginationPosition="bottom",this._selection=void 0,this._on=void 0,this.state={_allowMultiSort:!1,_data:[],_dataFoot:[],_headers:{horizontal:[],vertical:[]},_label:"",_pagination:{_page:1,_pageSize:10,_max:0},_sortedData:[],_paginationPosition:"bottom"}}validateAllowMultiSort(t){(0,r.w)(this,"_allowMultiSort",(()=>!0),new Set(["boolean"]),t,{defaultValue:!1})}validateData(t){(0,l.v)(this,t,{afterPatch:()=>{setTimeout(this.updateSortedData)}})}validateDataFoot(t){(0,l.a)(this,t,{afterPatch:()=>{setTimeout(this.updateSortedData)}})}validatePaginationPosition(t){((t,e)=>{(0,r.w)(t,"_paginationPosition",(t=>"string"==typeof t&&d.includes(t)),new Set([`PaginationPositionPropType {${d.join(", ")}`]),e,{defaultValue:"bottom"})})(this,t)}changeCellSort(t){var e;if("function"==typeof t.compareFn){this.state._allowMultiSort||t.key==(null===(e=this.sortData[0])||void 0===e?void 0:e.key)||(this.sortData=[]);const n=this.sortData.findIndex((e=>e.key===t.key));if(n>=0){const t=this.sortData[n];switch(t.direction){case"ASC":t.direction="DESC";break;case"DESC":this.sortData.splice(n,1);break;default:t.direction="ASC"}}else t.key&&this.sortData.push({label:t.label,key:t.key,compareFn:t.compareFn,direction:"ASC"});this.updateSortedData(t)}else if("function"==typeof t.sort){switch(this.sortFunction=t.sort,this.sortDirections.get(this.sortFunction)){case"ASC":this.setSortDirection(this.sortFunction,"DESC");break;case"DESC":this.setSortDirection(this.sortFunction,"NOS");break;default:this.setSortDirection(this.sortFunction,"ASC")}this.updateSortedData(t)}}validateHeaders(t){(0,r.t)(t,(()=>{(0,r.o)(t,(()=>{try{t=(0,r.p)(t)}catch(t){}(0,r.w)(this,"_headers",(t=>"object"==typeof t&&null!==t),new Set(["KoliBriTableHeaders"]),t,{hooks:{beforePatch:t=>{var e,n,i,a;const o=t=>{let e=!1;t.forEach((t=>{const n=t.key;if(!n)return;const i=t.sortDirection;"ASC"!==i&&"DESC"!==i||("function"==typeof t.compareFn?((this.state._allowMultiSort||0===this.sortData.length)&&this.sortData.push({label:t.label,key:n,compareFn:t.compareFn,direction:i}),e=!0):"function"==typeof t.sort&&(this.setSortDirection(t.sort,i),setTimeout((()=>this.updateSortedData({key:n,label:t.label,sortDirection:i})))))})),e&&setTimeout((()=>this.updateSortedData()))},s=t;null===(e=s.horizontal)||void 0===e||e.forEach(o),null===(n=s.vertical)||void 0===n||n.forEach(o),s.horizontal&&s.vertical&&(null===(i=s.horizontal)||void 0===i?void 0:i.length)>0&&(null===(a=s.vertical)||void 0===a?void 0:a.length)>0&&(this.disableSort=!0,(0,r.j)("Table: You can not sort the table data, if horizontal and vertical headers are defined at the same time. (https://github.com/public-ui/kolibri/issues/2372)"))}}})}))}))}validateLabel(t){(0,h.v)(this,t,{required:!0})}validateMinWidth(t){(0,r.i)(this,"_minWidth",t,{defaultValue:void 0})}validateSelection(t){(0,l.b)(this,t)}validateOn(t){(0,l.c)(this,t)}validatePagination(t){try{t=(0,r.p)(t)}catch(t){}this.showPagination=p(t),(0,r.w)(this,"_pagination",p,new Set(["boolean","KoliBriTablePagination"]),t,{defaultValue:{_page:1,_pageSize:10,_max:0}})}componentWillLoad(){this.validateAllowMultiSort(this._allowMultiSort),this.validateData(this._data),this.validateDataFoot(this._dataFoot),this.validateHeaders(this._headers),this.validateLabel(this._label),this.validateMinWidth(this._minWidth),this.validatePagination(this._pagination),this.validatePaginationPosition(this._paginationPosition),this.validateSelection(this._selection)}selectDisplayedData(t,e,n){return"number"==typeof e&&e>0&&"number"==typeof n&&n>0?(this.pageStartSlice=e*(n-1),this.pageEndSlice=e*n>t.length?t.length:e*n,t.slice(this.pageStartSlice,this.pageEndSlice)):(this.pageStartSlice=0,this.pageEndSlice=t.length,t)}renderPagination(){return(0,i.h)("div",{class:"pagination"},(0,i.h)("span",null,(0,a.t)("kol-table-visible-range",{placeholders:{start:this.pageEndSlice>0?(this.pageStartSlice+1).toString():"0",end:this.pageEndSlice.toString(),total:this.state._pagination&&this.state._pagination._max>0?this.state._pagination._max.toString():Array.isArray(this.state._data)?this.state._data.length.toString():"0"}})),(0,i.h)("div",null,(0,i.h)(o.t,{_boundaryCount:this.state._pagination._boundaryCount,_customClass:this.state._pagination._customClass,_on:this.handlePagination,_page:this.state._pagination._page,_pageSize:this.state._pagination._pageSize,_pageSizeOptions:this.state._pagination._pageSizeOptions||c,_siblingCount:this.state._pagination._siblingCount,_tooltipAlign:"bottom",_max:this.state._pagination._max||this.state._pagination._max||this.state._data.length,_label:(0,a.t)("kol-table-pagination-label",{placeholders:{label:this.state._label}})})))}getHeaderCellSortState(t){if(!this.disableSort&&("function"==typeof t.compareFn||"function"==typeof t.sort)){if(t.key===this.sortedColumnHead.key)return this.sortedColumnHead.sortDirection;if(t.key){const e=this.sortData.find((e=>e.key===t.key));if(null==e?void 0:e.direction)return e.direction}return"NOS"}}handleSort({key:t}){const e=[...(this.state._headers.horizontal||[]).flat(),...(this.state._headers.vertical||[]).flat()].find((e=>e.key===t));e&&this.changeCellSort(e)}getSelectedData(t){var e;if(this.state._selection){const n=null!==(e=this.state._selection.keyPropertyName)&&void 0!==e?e:"id";if(n)return this.state._sortedData.filter((e=>t.includes(e[n])))}return[]}handleSelectionChange(t,e){var n;this.state._selection&&(this.state=Object.assign(Object.assign({},this.state),{_selection:Object.assign(Object.assign({},this.state._selection),{selectedKeys:e})}));const i=this.getSelectedData(e);(0,s.t)("selection-change",this.host,i),"function"==typeof(null===(n=this.state._on)||void 0===n?void 0:n[l.E.onSelectionChange])&&this.state._on[l.E.onSelectionChange](t,i)}async getSelection(){var t;const e=(null===(t=this.state._selection)||void 0===t?void 0:t.selectedKeys)||[];return this.getSelectedData(e)}render(){var t,e,n,a;const s=this.selectDisplayedData(this.state._sortedData,this.showPagination?null!==(e=null===(t=this.state._pagination)||void 0===t?void 0:t._pageSize)&&void 0!==e?e:10:this.state._sortedData.length,this.state._pagination._page||1),l="top"===this._paginationPosition||"both"===this._paginationPosition?this.renderPagination():null,r="bottom"===this._paginationPosition||"both"===this._paginationPosition?this.renderPagination():null,h={horizontal:null===(n=this.state._headers.horizontal)||void 0===n?void 0:n.map((t=>t.map((t=>Object.assign(Object.assign({},t),{sortDirection:this.getHeaderCellSortState(t)}))))),vertical:null===(a=this.state._headers.vertical)||void 0===a?void 0:a.map((t=>t.map((t=>Object.assign(Object.assign({},t),{sortDirection:this.getHeaderCellSortState(t)})))))};return(0,i.h)(i.H,{key:"4c4f2713068a1618167ef2b51d7f8c2aa088ae6f",class:"kol-table-stateful"},this.pageEndSlice>0&&this.showPagination&&l,(0,i.h)(o.r,{key:"9b6bd641a61881e49814851acb5b12c1cf0f1e94",_data:s,_headerCells:h,_label:this.state._label,_dataFoot:this.state._dataFoot,_minWidth:this.state._minWidth,_on:{onSort:(t,e)=>{this.handleSort(e)},onSelectionChange:(t,e)=>{this.handleSelectionChange(t,e)}},_selection:this.state._selection}),this.pageEndSlice>0&&this.showPagination&&r)}get host(){return(0,i.g)(this)}static get watchers(){return{_allowMultiSort:["validateAllowMultiSort"],_data:["validateData"],_dataFoot:["validateDataFoot"],_paginationPosition:["validatePaginationPosition"],_headers:["validateHeaders"],_label:["validateLabel"],_minWidth:["validateMinWidth"],_selection:["validateSelection"],_on:["validateOn"],_pagination:["validatePagination"]}}};u.style={default:"/*\n * This file contains all rules for accessibility.\n */\n@layer kol-global {\n  :host {\n    /*\n     * Minimum size of interactive elements.\n     */\n    --a11y-min-size: 44px;\n    /*\n     * No element should be used without a background and font color whose contrast ratio has\n     * not been checked. By initially setting the background color to white and the font color\n     * to black, the contrast ratio is ensured and explicit adjustment is forced.\n     */\n    background-color: white;\n    color: black;\n    /*\n     * Verdana is an accessible font that can be used without requiring additional loading time.\n     */\n    font-family: Verdana;\n  }\n  * {\n    /*\n     * This rule enables the word dividing for all texts. That is important for high zoom levels.\n     */\n    hyphens: auto;\n    /*\n     * Letter spacing is required for all texts.\n     */\n    letter-spacing: inherit;\n    /*\n     * This rule enables the word dividing for all texts. That is important for high zoom levels.\n     */\n    word-break: break-word;\n    /*\n     * Word spacing is required for all texts.\n     */\n    word-spacing: inherit;\n  }\n  /*\n   * All interactive elements should have a minimum size of 44px.\n   */\n  /* input:not([type='checkbox'], [type='radio'], [type='range']), */\n  /* option, */\n  /* select, */\n  /* textarea, */\n  [role=button],\n  button:not([role=link]),\n  .kol-input .input {\n    min-height: var(--a11y-min-size);\n    min-width: var(--a11y-min-size);\n  }\n  /*\n   * Some interactive elements should not inherit the font-family and font-size.\n   */\n  a,\n  button,\n  h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6,\n  input,\n  option,\n  select,\n  textarea {\n    /*\n     * All elements should inherit the font family from his parent element.\n     */\n    font-family: inherit;\n    /*\n     * All elements should inherit the font size from his parent element.\n     */\n    font-size: inherit;\n  }\n}\n/**\n * Sometimes we need the semantic element for accessibility reasons,\n * but we don't want to show it.\n *\n * - https://www.a11yproject.com/posts/how-to-hide-content/\n */\n.visually-hidden {\n  clip: rect(0 0 0 0);\n  clip-path: inset(50%);\n  height: 1px;\n  overflow: hidden;\n  position: absolute;\n  white-space: nowrap;\n  width: 1px;\n}\n\n@layer kol-global {\n  /*\n   * Dieses CSS stellt sicher, dass der Standard-Style\n   * von A und Button resettet werden.\n   */\n  :is(a, button) {\n    background-color: transparent;\n    border: none;\n    margin: 0;\n    padding: 0;\n    width: 100%; /* 100% needed for custom width from outside */\n  }\n  /*\n   * Ensure elements with hidden attribute to be actually not visible\n   * @see https://meowni.ca/hidden.is.a.lie.html\n   */\n  [hidden] {\n    display: none !important;\n  }\n}\n@layer kol-global {\n  :host {\n    /*\n     * The max-width is needed to prevent the table from overflowing the\n     * parent node, if the table is wider than the parent node.\n     */\n    max-width: 100%;\n  }\n  * {\n    /*\n     * We prefer to box-sizing: border-box for all elements.\n     */\n    box-sizing: border-box;\n  }\n  /* KolSpan is a layout component with icons in all directions and a label text in the middle. */\n  .kol-span-wc {\n    display: grid;\n    place-items: center;\n  }\n  /* The sub span in KolSpan is the horizontal span with icon left and right and the label text in the middle. */\n  .kol-span-wc > span {\n    display: flex;\n    place-items: center;\n  }\n  a,\n  button {\n    cursor: pointer;\n  }\n  /* This is the text label. */\n  .hide-label > .kol-span-wc > span > span {\n    display: none;\n  }\n  /* Reset browser agent style. */\n  button:disabled {\n    color: unset;\n  }\n  .disabled label,\n  .disabled:focus-within label,\n  [aria-disabled=true],\n  [aria-disabled=true]:focus,\n  [disabled],\n  [disabled]:focus {\n    cursor: not-allowed;\n    opacity: 0.5;\n    outline: none;\n  }\n  [aria-disabled=true]:focus .kol-span-wc,\n  [disabled]:focus .kol-span-wc {\n    outline: none !important;\n  }\n}\n@layer kol-component {\n  :host {\n    display: block;\n  }\n}\n@layer kol-component {\n  :root {\n    font-size: calc(16rem / var(--kolibri-root-font-size, 16));\n  }\n  div.pagination .kol-pagination {\n    display: flex;\n    flex-wrap: wrap;\n  }\n  div.pagination,\n  div.pagination > div:last-child {\n    display: grid;\n    place-items: center;\n  }\n  @media (max-width: 1024px) {\n    div.pagination .kol-pagination {\n      flex-direction: column;\n    }\n  }\n  @media (min-width: 1024px) {\n    div.pagination,\n    div.pagination > div:last-child {\n      grid-auto-flow: column;\n    }\n    div.pagination .kol-pagination {\n      display: flex;\n    }\n  }\n}\n@layer kol-component {\n  :host,\n  .kol-table-stateless-wc {\n    display: block;\n    font-size: calc(16rem / var(--kolibri-root-font-size, 16));\n  }\n  .table {\n    max-width: 100%;\n    overflow-x: auto;\n    overflow-y: hidden;\n  }\n  table {\n    width: 100%;\n  }\n  caption {\n    text-align: start;\n  }\n  .focus-element {\n    font-size: 0;\n  }\n  .focus-element:focus {\n    outline: 0 !important;\n  }\n  .table:has(.focus-element:focus) {\n    /* @see https://remysharp.com/til/css/focus-ring-default-styles */\n    outline: 5px auto Highlight;\n    outline: 5px auto -webkit-focus-ring-color;\n    outline-offset: 2px;\n  }\n  .table-sort-button .button {\n    color: inherit;\n  }\n  tbody th,\n  th.align-left {\n    text-align: left;\n  }\n  tbody th .table-sort-button .button-inner,\n  th.align-left .table-sort-button .button-inner {\n    justify-items: start;\n  }\n  th.align-center {\n    text-align: center;\n  }\n  th.align-center .table-sort-button .button-inner {\n    justify-items: center;\n  }\n  th.align-right {\n    text-align: right;\n  }\n  th.align-right .table-sort-button .button-inner {\n    justify-items: end;\n  }\n  .selection-header-cell {\n    width: 0;\n  }\n  .selection-cell {\n    white-space: nowrap;\n  }\n}"}}}]);