/*! For license information please see 3569.js.LICENSE.txt */
"use strict";(self.webpackChunk_public_ui_designer=self.webpackChunk_public_ui_designer||[]).push([[3569],{18276:(e,t,a)=>{a.d(t,{i:()=>l,n:()=>r,r:()=>s});var o=a(32152),i=a(61375);const n=()=>{let e=(0,o.d)().KoliBri;return void 0===e&&(e={},Object.defineProperty((0,o.d)(),"KoliBri",{value:e,writable:!1})),e},l=()=>{(()=>{const e=(0,o.g)().querySelector('meta[name="kolibri"]');if(e&&e.hasAttribute("content")){const t=e.getAttribute("content");"string"==typeof t&&((0,o.s)(t.includes("dev-mode=true")),(0,o.b)(t.includes("experimental-mode=true")),(0,o.c)(t.includes("color-contrast-analysis=true")))}})(),o.L.debug("\n,--. ,--.         ,--. ,--. ,-----.           ,--.\n|  .'   /  ,---.  |  | `--' |  |) /_  ,--.--. `--'\n|  .   '  | .-. | |  | ,--. |  .-.  \\ |  .--' ,--.\n|  |\\   \\ | '-' | |  | |  | |  '--' / |  |    |  |\n`--' `--´  `---´  `--' `--' `------´  `--'    `--'\n🚹 The accessible HTML-Standard | 👉 https://public-ui.github.io | 2.1.1\n\t",{forceLog:!0})},s=()=>{!0!==n().adviceShown&&(Object.defineProperty(n(),"adviceShown",{get:function(){return!0}}),o.L.debug("\nYou are using the KoliBri component library. If you have any suggestions for improvement or find a problem, please contact us:\n\nTicket: https://github.com/public-ui/kolibri/issues/new/choose (for privacy reasons, please use email)\nEmail: kolibri@itzbund.de\n"))};let r=()=>Math.floor(16777215*Math.random()).toString(16);"test"===i.p&&(r=()=>"nonce")},23602:(e,t,a)=>{function o(e){e.stopImmediatePropagation(),e.stopPropagation()}function i(e,t,a){t&&function(e,t,a){const o=e.dispatchEvent(function(e,t){return new CustomEvent(`kol-${e}`,{bubbles:!0,cancelable:!0,composed:!0,detail:t})}(t,a))}(t,e,a)}function n(e){e.preventDefault(),o(e)}a.d(t,{p:()=>n,s:()=>o,t:()=>i})},68157:(e,t,a)=>{a.d(t,{t:()=>n});var o=a(96308),i=a(61375);let n=(e,t)=>{var a;return(null!==(a=(0,o.g)())&&void 0!==a?a:(0,o.i)("de")).translate(e,t)};"test"===i.p&&(n=e=>e)},73569:(e,t,a)=>{a.r(t),a.d(t,{kol_table_stateless_wc:()=>b});var o,i,n=a(15632),l=a(27756),s=a(68157),r=a(23602),c=a(18276),d=a(788),h=a(61375),u=a(56843),v=a(72707);(i=o||(o={})).onBlur="onBlur",i.onChange="onChange",i.onClick="onClick",i.onDblClick="onDblClick",i.onFocus="onFocus",i.onInput="onInput",i.onKeyDown="onKeyDown",i.onKeyPress="onKeyPress",i.onKeyUp="onKeyUp",i.onMouseDown="onMouseDown",i.onMouseMove="onMouseMove",i.onMouseOut="onMouseOut",i.onMouseOver="onMouseOver",i.onMouseUp="onMouseUp",i.onReset="onReset",i.onSelect="onSelect",i.onSort="onSort",i.onSelectionChange="onSelectionChange",i.onSubmit="onSubmit";const b=class{constructor(e){(0,n.r)(this,e),this.horizontal=!0,this.cellsToRenderTimeouts=new Map,this.dataToKeyMap=new Map,this.renderTableRow=(e,t)=>{var a,o;let i=String(t);return this.horizontal&&(null===(a=e[0])||void 0===a?void 0:a.data)&&(i=null!==(o=this.getDataKey(e[0].data))&&void 0!==o?o:i),(0,n.h)("tr",{key:`row-${i}`},this.renderSelectionCell(e,t),e.map(((e,a)=>this.renderTableCell(e,t,a))))},this.renderTableCell=(e,t,a)=>{let o=`${t}-${a}-${e.label}`;if(e.data){const i=this.getDataKey(e.data);o=this.horizontal?i?`${i}-${a}`:o:i?`${i}-${t}`:o}return!1===e.asTd?this.renderHeadingCell(e,t,a):(0,n.h)("td",{key:`cell-${o}`,class:{[e.textAlign]:"string"==typeof e.textAlign&&e.textAlign.length>0},colSpan:e.colSpan,rowSpan:e.rowSpan,style:{textAlign:e.textAlign,width:e.width},ref:"function"==typeof e.render?t=>{this.cellRender(e,t)}:void 0},"function"!=typeof e.render?e.label:"")},this.state={_data:[],_label:"",_headerCells:{horizontal:[],vertical:[]}},this.tableDivElementHasScrollbar=!1,this._data=void 0,this._dataFoot=void 0,this._headerCells=void 0,this._label=void 0,this._minWidth=void 0,this._on=void 0,this._selection=void 0}validateData(e){(0,u.v)(this,e,{beforePatch:e=>{this.updateDataToKeyMap(e)}})}validateDataFoot(e){(0,u.a)(this,e)}validateHeaderCells(e){((e,t)=>{(0,d.t)(t,(()=>{(0,d.o)(t,(()=>{try{t=(0,d.p)(t)}catch(e){}(0,d.w)(e,"_headerCells",(e=>"object"==typeof e&&null!==e),new Set(["TableHeaderCellsPropType"]),t)}))}))})(this,e)}validateLabel(e){(0,v.v)(this,e,{required:!0})}validateMinWidth(e){(0,d.i)(this,"_minWidth",e,{defaultValue:void 0})}validateOn(e){((e,t)=>{(0,d.w)(e,"_on",(e=>"object"==typeof e&&null!==e),new Set(["TableCallbacksPropType {Events.onSort, Events.onSelectionChange}"]),t)})(this,e)}validateSelection(e){((e,t)=>{var a;(a="string"==typeof t?(()=>{try{return(0,d.p)(t)}catch(e){return}})():t)&&(0,h.c)(a)&&"function"==typeof a.label&&(!a.selectedKeys||Array.isArray(a.selectedKeys))&&(0,d.s)(e,"_selection",t)})(this,e)}componentDidRender(){this.checkDivElementScrollbar()}componentDidLoad(){this.tableDivElement&&ResizeObserver&&(this.tableDivElementResizeObserver=new ResizeObserver(this.checkDivElementScrollbar.bind(this)),this.tableDivElementResizeObserver.observe(this.tableDivElement))}disconnectedCallback(){var e;null===(e=this.tableDivElementResizeObserver)||void 0===e||e.disconnect()}checkDivElementScrollbar(){this.tableDivElement&&(this.tableDivElementHasScrollbar=this.tableDivElement.scrollWidth>this.tableDivElement.clientWidth)}updateDataToKeyMap(e){e.forEach((e=>{this.dataToKeyMap.has(e)||this.dataToKeyMap.set(e,(0,c.n)())})),this.dataToKeyMap.forEach(((t,a)=>{e.includes(a)||this.dataToKeyMap.delete(a)}))}getDataKey(e){return this.dataToKeyMap.get(e)}cellRender(e,t){t&&(clearTimeout(this.cellsToRenderTimeouts.get(t)),this.cellsToRenderTimeouts.set(t,setTimeout((()=>{if("function"==typeof e.render){const a=e.render(t,e,e.data,this.state._data);"string"==typeof a&&(t.textContent=a)}}))))}getNumberOfCols(e,t){let a=0;return e.forEach((e=>{let t=0;e.forEach((e=>{var a;return t+=null!==(a=e.colSpan)&&void 0!==a?a:1})),a<t&&(a=t)})),0===a&&(a=t.length),a}getNumberOfRows(e,t){var a;let o=0;return e.forEach((e=>{let t=0;e.forEach((e=>{var a;return t+=null!==(a=e.rowSpan)&&void 0!==a?a:1})),o<t&&(o=t)})),0===o?o=t.length:o-=(null===(a=this.state._dataFoot)||void 0===a?void 0:a.length)||0,o}filterHeaderKeys(e){const t=[];return e.forEach((e=>{e.forEach((e=>{"string"==typeof e.key&&t.push(e)}))})),t}getPrimaryHeader(e){var t,a;let o=this.filterHeaderKeys(null!==(t=e.horizontal)&&void 0!==t?t:[]);return this.horizontal=!0,0===o.length&&(o=this.filterHeaderKeys(null!==(a=e.vertical)&&void 0!==a?a:[]),o.length>0&&(this.horizontal=!1)),o}createDataField(e,t,a){var o;t.horizontal=Array.isArray(null==t?void 0:t.horizontal)?t.horizontal:[],t.vertical=Array.isArray(null==t?void 0:t.vertical)?t.vertical:[];const i=this.getPrimaryHeader(t),n=this.getNumberOfCols(t.horizontal,e);let l=this.getNumberOfRows(t.vertical,e),r=0;a&&(r=l,l+=(null===(o=this.state._dataFoot)||void 0===o?void 0:o.length)||0);const c=[],d=[],h=[];t.vertical.forEach(((e,t)=>{d[t]=0,h[t]=[]}));for(let o=r;o<l;o++){const l=[];t.vertical.forEach(((e,t)=>{let a=0;if(h[t].forEach((e=>a+=e)),a<=o){const i=e[o-a+d[t]];if("object"==typeof i){l.push(Object.assign(Object.assign({},i),{asTd:!1,data:{}}));let e=1;if("number"==typeof i.rowSpan&&i.rowSpan>1&&(e=i.rowSpan),h[t].push(e),"number"==typeof i.colSpan&&i.colSpan>1)for(let a=1;a<i.colSpan;a++)h[t+a].push(e);d[t]++}}}));for(let t=0;t<n;t++)if(!0===this.horizontal){const n=a&&this.state._dataFoot?this.state._dataFoot[o-r]:e[o];"object"==typeof i[t]&&null!==i[t]&&"string"==typeof i[t].key&&"object"==typeof n&&null!==n&&l.push(Object.assign(Object.assign({},i[t]),{colSpan:void 0,data:n,label:n[i[t].key],rowSpan:void 0}))}else"object"==typeof i[o]&&null!==i[o]&&"string"==typeof i[o].key&&"object"==typeof e[t]&&null!==e[t]&&l.push(Object.assign(Object.assign({},i[o]),{colSpan:void 0,data:e[t],label:e[t][i[o].key],rowSpan:void 0}));c.push(l)}if(0===e.length){let e=0,a=0;Array.isArray(t.horizontal)&&t.horizontal.length>0&&t.horizontal[0].forEach((t=>{e+=t.colSpan||1})),Array.isArray(t.vertical)&&t.vertical.length>0&&(e-=t.vertical.length,t.vertical[0].forEach((e=>{a+=e.rowSpan||1})));const o={colSpan:e,label:(0,s.t)("kol-no-entries"),render:void 0,rowSpan:Math.max(a,1)};0===c.length?c.push([o]):c[0].push(o)}return c}componentWillLoad(){this.validateData(this._data),this.validateDataFoot(this._dataFoot),this.validateHeaderCells(this._headerCells),this.validateLabel(this._label),this.validateMinWidth(this._minWidth),this.validateOn(this._on),this.validateSelection(this._selection)}renderSelectionCell(e,t){var a,i,s;if(this.state._selection){const c=null!==(a=this.state._selection.keyPropertyName)&&void 0!==a?a:"id",d=e.find((e=>e.key===c));if(d){const e=(null==d?void 0:d.data)[c],a=null===(s=null===(i=this.state._selection)||void 0===i?void 0:i.selectedKeys)||void 0===s?void 0:s.includes(e),h=this.state._selection.label(d.data);return(0,n.h)("td",{key:`tbody-${t}-selection`,class:"selection-cell"},(0,n.h)(l.w,{_label:h,_hideLabel:!0,_checked:a,_tooltipAlign:"right",_on:{onInput:(t,a)=>{var i,n;if(null===(i=this.state._selection)||void 0===i?void 0:i.selectedKeys){const i=a?[...this.state._selection.selectedKeys,e]:this.state._selection.selectedKeys.filter((t=>t!==e));(0,r.t)("selection-change",this.host,i),"function"==typeof(null===(n=this.state._on)||void 0===n?void 0:n[o.onSelectionChange])&&this.state._on[o.onSelectionChange](t,i)}}}}))}}return""}renderHeadingCell(e,t,a){let o,i="codicon codicon-fold";if(e.sortDirection)switch(e.sortDirection){case"ASC":i="codicon codicon-chevron-up",o="ascending";break;case"DESC":i="codicon codicon-chevron-down",o="descending"}return(0,n.h)("th",{key:`${t}-${a}-${e.label}`,class:e.textAlign?`align-${e.textAlign}`:void 0,scope:"number"==typeof e.colSpan&&e.colSpan>1?"colgroup":"col",colSpan:e.colSpan,rowSpan:e.rowSpan,style:{width:e.width},"aria-sort":o,"data-sort":`sort-${e.sortDirection}`},e.sortDirection?(0,n.h)(l.c,{class:"table-sort-button",exportparts:"icon",_icons:{right:i},_label:e.label,_on:{onClick:t=>{var a;"function"==typeof(null===(a=this.state._on)||void 0===a?void 0:a.onSort)&&e.key&&e.sortDirection&&this.state._on.onSort(t,{key:e.key,currentSortDirection:e.sortDirection})}}}):e.label)}renderFoot(){if(!this.state._dataFoot||0===this.state._dataFoot.length)return"";const e=this.createDataField(this.state._dataFoot,this.state._headerCells,!0);return(0,n.h)("tfoot",null,e.map(this.renderTableRow))}render(){const e=this.createDataField(this.state._data,this.state._headerCells);return(0,n.h)(n.H,{key:"1674fb7ab899c0098a312c938c6311b8966687ad",class:"kol-table-stateless-wc"},(0,n.h)("div",{key:"5a705ad1cfd82c9e137c7a1aa3e9250db3b679b5",ref:e=>this.tableDivElement=e,class:"table",tabindex:this.tableDivElementHasScrollbar?"-1":void 0},(0,n.h)("table",{key:"027b8f0e87050291b9fc7ad6132fca166d74587c",style:{minWidth:this.state._minWidth}},(0,n.h)("div",{key:"4be66ae604e40ac0220c90094b0a37d5c7f34f91",class:"focus-element",tabindex:this.tableDivElementHasScrollbar?"0":void 0,"aria-describedby":"caption"}," "),(0,n.h)("caption",{key:"414c49cc7be0cdbe48260b232e63de7d6a1c70fe",id:"caption"},this.state._label),Array.isArray(this.state._headerCells.horizontal)&&(0,n.h)("thead",{key:"851404469bd24ae4e826115ee4cffe56e94f4231"},this.state._headerCells.horizontal.map(((e,t)=>(0,n.h)("tr",{key:`thead-${t}`},this.state._selection&&(0,n.h)("td",{key:"thead-selection",class:"selection-header-cell"}),e.map(((e,a)=>!0===e.asTd?(0,n.h)("td",{key:`thead-${t}-${a}-${e.label}`,class:{[e.textAlign]:"string"==typeof e.textAlign&&e.textAlign.length>0},colSpan:e.colSpan,rowSpan:e.rowSpan,style:{textAlign:e.textAlign,width:e.width},ref:"function"==typeof e.render?t=>{this.cellRender(e,t)}:void 0},"function"!=typeof e.render?e.label:""):this.renderHeadingCell(e,t,a))))))),(0,n.h)("tbody",{key:"1024a2ab0ec473830f31ca5fe164c9953d4cfdbc"},e.map(this.renderTableRow)),this.renderFoot())))}get host(){return(0,n.g)(this)}static get watchers(){return{_data:["validateData"],_dataFoot:["validateDataFoot"],_headerCells:["validateHeaderCells"],_label:["validateLabel"],_minWidth:["validateMinWidth"],_on:["validateOn"],_selection:["validateSelection"]}}}},72707:(e,t,a)=>{a.d(t,{a:()=>h,b:()=>s,c:()=>r,h:()=>i,v:()=>d});var o=a(788);const i=[0,1,2,3,4,5,6],n=/[a-zA-Z0-9äöüÄÖÜß]/g,l=/^\d+$/;function s(e,t=1){return function(e){var t;return"string"==typeof e&&(null===(t=e.match(n))||void 0===t?void 0:t.length)||0}(e)>=t}function r(e){return l.test(e)}const c=new Set(["string"]),d=(e,t,a={})=>{(0,o.w)(e,"_label",(e=>"string"==typeof e),c,t,function(e){var t;return Object.assign(Object.assign({},e),{hooks:{afterPatch:(t,a,i,n)=>{var l,c;"function"==typeof(null===(l=e.hooks)||void 0===l?void 0:l.afterPatch)&&(null===(c=e.hooks)||void 0===c||c.afterPatch(t,a,i,n)),"string"==typeof t&&!1===s(t,3)&&!1===r(t)&&(0,o.a)(`The heading or label ("${t}") is not accessible. A label should consist of at least three readable characters.`),"string"==typeof t&&t.length>80&&(0,o.u)("A heading or label should not be longer than 80 characters.")},beforePatch:null===(t=e.hooks)||void 0===t?void 0:t.beforePatch}})}(a))},h=d},56843:(e,t,a)=>{a.d(t,{a:()=>n,v:()=>i});var o=a(788);const i=(e,t,a)=>{(0,o.t)(t,(()=>{(0,o.o)(t,(()=>{void 0===t&&(t=[]);try{t=(0,o.p)(t)}catch(e){}Array.isArray(t)&&t.every((e=>"object"==typeof e&&null!==e))&&(0,o.s)(e,"_data",t,a)}))}))},n=(e,t,a)=>{(0,o.t)(t,(()=>{(0,o.o)(t,(()=>{void 0===t&&(t=[]);try{t=(0,o.p)(t)}catch(e){}Array.isArray(t)&&t.every((e=>"object"==typeof e&&null!==e))&&(0,o.s)(e,"_dataFoot",t,a)}))}))}}}]);