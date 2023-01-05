/*! For license information please see 9679.849455f7.js.LICENSE.txt */
"use strict";(self.webpackChunk_public_ui_docusaurus=self.webpackChunk_public_ui_docusaurus||[]).push([[9679],{5149:(t,n,e)=>{e.d(n,{a:()=>u,b:()=>s,c:()=>g,d:()=>c,e:()=>o,f:()=>h,u:()=>f});var i=e(7738);const a=new Set,o=t=>{!1===a.has(t)&&(a.add(t),i.L.info(t,{classifier:"\u270ba11y",overwriteStyle:"; background-color: #09f"}))},r=new Set,s=t=>{!1===r.has(t)&&(r.add(t),i.L.warn(t,{classifier:"\ud83d\udd25deprecated",forceLog:!0,overwriteStyle:"; background-color: #f00"}))},l=new Set,c=t=>{!1===l.has(t)&&(l.add(t),i.L.debug(t,{classifier:"\ud83d\udcbbdev",overwriteStyle:"; background-color: #f09"}))},d=new Set,h=(t,n=!1)=>{!1===d.has(t)&&(d.add(t),t+=!0===n?" \u2705":"",i.L.debug(t,{classifier:"\ud83c\udf1ffeature",overwriteStyle:"; background-color: #309"}))};c("Wir freuen uns \xfcber jedes Feedback, Kommentare, Screenshots oder Demo-Links von einer auf KoliBri-basierenden Anwendung (kolibri@itzbund.de). Vielen Dank!");const p=new Set,g=()=>{o('"Disabled" schr\xe4nkt die Zug\xe4nglichkeit und Sichtbarkeit ein. Wir empfehlen aus Sicht der Barrierefreiheit readonly- statt disabled-Attribut zu verwenden.\n- https://uxdesign.cc/is-it-ok-to-grey-out-disabled-buttons-8afa74a0fae')},u=t=>{"string"==typeof t&&""!==t||o("Manche Strukturelemente, wie bspw. der nav-Tag, k\xf6nnen mehrfach in einer Webseite verwendet werden. Damit die gleichnamigen Strukturelemente voneinander unterschieden werden k\xf6nnen, ist es erforderlich ein Aria-Label zu setzen.\n- https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/Navigation_Role#accessibility_concerns")},f=(t,n=8)=>{var e;n>7&&(e=`[${t}] Innerhalb von Navigationsstrukturen wird empfohlen nicht mehr als 7 Men\xfcpunkte zu verwenden.\n\nLinks:\n- https://de.ryte.com/wiki/Millersche_Zahl\n- https://de.wikipedia.org/wiki/Millersche_Zahl`,!1===p.has(e)&&(p.add(e),i.L.debug(e,{classifier:"\ud83d\udcd1ui/ux",overwriteStyle:"; background-color: #060;"})))}},4340:(t,n,e)=>{e.d(n,{f:()=>c,s:()=>l});var i=1/12.92;function a(t){return Math.pow((t+.055)/1.055,2.4)}function o(t){var n=t[0]/255,e=t[1]/255,o=t[2]/255;return.2126*(n<=.03928?n*i:a(n))+.7152*(e<=.03928?e*i:a(e))+.0722*(o<=.03928?o*i:a(o))}function r(t){var n=255;8===(t=t.replace(/^#/,"")).length&&(n=parseInt(t.slice(6,8),16),t=t.substring(0,6)),4===t.length&&(n=parseInt(t.slice(3,4).repeat(2),16),t=t.substring(0,3)),3===t.length&&(t=t[0]+t[0]+t[1]+t[1]+t[2]+t[2]);var e=parseInt(t,16);return[e>>16,e>>8&255,255&e,n]}function s(t,n){return function(t,n){return(Math.max(t,n)+.05)/(Math.min(t,n)+.05)}(o(t),o(n))}function l(t,n){return s(r(t),r(n))}function c(t){return t>=7?"AAA":t>=4.5?"AA":t>=3?"AA Large":"Fail"}},9679:(t,n,e)=>{e.r(n),e.d(n,{kol_table:()=>s});var i=e(914),a=e(6645);const o=[10,20,50,100],r=new Map,s=class{constructor(t){(0,i.r)(this,t),this.horizontal=!0,this.sortDirections=new Map,this.showPagination=!1,this.pageStartSlice=0,this.pageEndSlice=10,this.setSortDirection=(t,n)=>{this.sortDirections.clear(),this.sortDirections.set(t,n),this.sortFunction=t},this.handlePagination={onClick:(t,n)=>{var e;"function"==typeof(null===(e=this.state._pagination._on)||void 0===e?void 0:e.onClick)&&this.state._pagination._on.onClick(t,n),(0,a.s)(this,"_pagination",Object.assign(Object.assign({},this.state._pagination),{_page:n}))},onChangePage:(t,n)=>{var e;"function"==typeof(null===(e=this.state._pagination._on)||void 0===e?void 0:e.onChangePage)&&this.state._pagination._on.onChangePage(t,n),(0,a.s)(this,"_pagination",Object.assign(Object.assign({},this.state._pagination),{_page:n}))},onChangePageSize:(t,n)=>{var e;"function"==typeof(null===(e=this.state._pagination._on)||void 0===e?void 0:e.onChangePageSize)&&this.state._pagination._on.onChangePageSize(t,n),(0,a.s)(this,"_pagination",Object.assign(Object.assign({},this.state._pagination),{_pageSize:n})),(0,a.s)(this,"_pageSize",n)}},this.beforePatchPagination=(t,n,e,i)=>{"_pagination"===i&&(this.showPagination=!0===t||""===t||"object"==typeof t&&null!==t)},this.updateSortedData=()=>{let t=this.state._data;if("function"==typeof this.sortFunction)switch(this.sortDirections.get(this.sortFunction)){case"NOS":t=[...this.state._data];break;case"ASC":t=this.sortFunction([...this.state._data]);break;default:t=this.sortFunction([...this.state._data]).reverse()}(0,a.s)(this,"_sortedData",t)},this._caption=void 0,this._data=void 0,this._headers=void 0,this._minWidth=void 0,this._pagination=void 0,this.state={_caption:"",_data:[],_headers:{horizontal:[],vertical:[]},_pagination:{_page:1,_pageSize:10,_total:0},_sortedData:[]}}validateCaption(t){(0,a.w)(this,"_caption",t,{required:!0})}validateData(t){(0,a.f)(t,(()=>{(0,a.o)(t,(()=>{void 0===t&&(t=[]);try{t=(0,a.p)(t)}catch(t){}Array.isArray(t)&&void 0===t.find((t=>!("object"==typeof t&&null!==t)))&&(0,a.s)(this,"_data",t,{afterPatch:()=>{const t=setTimeout((()=>{clearTimeout(t),this.updateSortedData()}))}})}))}))}validateHeaders(t){(0,a.f)(t,(()=>{(0,a.o)(t,(()=>{try{t=(0,a.p)(t)}catch(t){}(0,a.a)(this,"_headers",(t=>"object"==typeof t&&null!==t),new Set(["KoliBriTableHeaders"]),t,{hooks:{beforePatch:t=>{var n,e;const i=t;null===(n=i.horizontal)||void 0===n||n.forEach((t=>{t.forEach((t=>{"function"==typeof t.sort&&"string"==typeof t.sortDirection&&this.setSortDirection(t.sort,t.sortDirection)}))})),null===(e=i.vertical)||void 0===e||e.forEach((t=>{t.forEach((t=>{"function"==typeof t.sort&&"string"==typeof t.sortDirection&&this.setSortDirection(t.sort,t.sortDirection)}))}))}}})}))}))}validateMinWidth(t){(0,a.w)(this,"_minWidth",t,{defaultValue:void 0})}validatePagination(t){try{t=(0,a.p)(t)}catch(t){}(0,a.a)(this,"_pagination",(()=>!0),new Set(["boolean","KoliBriTablePagination"]),t,{hooks:{beforePatch:this.beforePatchPagination}})}componentWillLoad(){this.validateCaption(this._caption),this.validateData(this._data),this.validateHeaders(this._headers),this.validateMinWidth(this._minWidth),this.validatePagination(this._pagination)}getNumberOfCols(t,n){let e=0;return t.forEach((t=>{let n=0;t.forEach((t=>{var e;return n+=null!==(e=t.colSpan)&&void 0!==e?e:1})),e<n&&(e=n)})),0===e&&(e=n.length),e}getNumberOfRows(t,n){let e=0;return t.forEach((t=>{let n=0;t.forEach((t=>{var e;return n+=null!==(e=t.rowSpan)&&void 0!==e?e:1})),e<n&&(e=n)})),0===e&&(e=n.length),e}filterHeaderKeys(t){const n=[];return t.forEach((t=>{t.forEach((t=>{"string"==typeof t.key&&n.push(t)}))})),n}getPrimaryHeader(t){var n,e;let i=this.filterHeaderKeys(null!==(n=t.horizontal)&&void 0!==n?n:[]);return this.horizontal=!0,0===i.length&&(i=this.filterHeaderKeys(null!==(e=t.vertical)&&void 0!==e?e:[]),i.length>0&&(this.horizontal=!1)),i}createDataField(t,n){n.horizontal=Array.isArray(null==n?void 0:n.horizontal)?n.horizontal:[],n.vertical=Array.isArray(null==n?void 0:n.vertical)?n.vertical:[];const e=this.getPrimaryHeader(n),i=this.getNumberOfCols(n.horizontal,t),a=this.getNumberOfRows(n.vertical,t),o=[],r=[],s=[];n.vertical.forEach(((t,n)=>{r[n]=0,s[n]=[]}));for(let l=0;l<a;l++){const a=[];n.vertical.forEach(((t,n)=>{let e=0;if(s[n].forEach((t=>e+=t)),e<=l){const i=t[l-e+r[n]];if("object"==typeof i){a.push(Object.assign(Object.assign({},i),{asTd:!1,data:{}}));let t=1;if("number"==typeof i.rowSpan&&i.rowSpan>1&&(t=i.rowSpan),s[n].push(t),"number"==typeof i.colSpan&&i.colSpan>1)for(let e=1;e<i.colSpan;e++)s[n+e].push(t);r[n]++}}}));for(let n=0;n<i;n++)!0===this.horizontal?"object"==typeof e[n]&&null!==e[n]&&"string"==typeof e[n].key&&"object"==typeof t[l]&&null!==t[l]&&a.push(Object.assign(Object.assign({},e[n]),{colSpan:void 0,data:t[l],label:t[l][e[n].key],rowSpan:void 0})):"object"==typeof e[l]&&null!==e[l]&&"string"==typeof e[l].key&&"object"==typeof t[n]&&null!==t[n]&&a.push(Object.assign(Object.assign({},e[l]),{colSpan:void 0,data:t[n],label:t[n][e[l].key],rowSpan:void 0}));o.push(a)}if(0===t.length){let t=0,e=0;Array.isArray(n.horizontal)&&n.horizontal.length>0&&n.horizontal[0].forEach((n=>{t+=n.colSpan||1})),Array.isArray(n.vertical)&&n.vertical.length>0&&(t-=n.vertical.length,n.vertical[0].forEach((t=>{e+=t.rowSpan||1})));const i={colSpan:t,label:"Es sind keine Eintr\xe4ge vorhanden.",render:void 0,rowSpan:Math.max(e,1)};0===o.length?o.push([i]):o[0].push(i)}return o}selectDisplayedData(t,n,e){return"number"==typeof n&&n>0&&"number"==typeof e&&e>0?(this.pageStartSlice=n*(e-1),this.pageEndSlice=n*e>t.length?t.length:n*e,t.slice(this.pageStartSlice,this.pageEndSlice)):(this.pageStartSlice=0,this.pageEndSlice=t.length,t)}cellRender(t,n){n instanceof HTMLElement&&(clearTimeout(r.get(n)),r.set(n,setTimeout((()=>{if(clearTimeout(r.get(n)),"function"==typeof t.render){const e=t.render(n,{asTd:t.asTd,label:t.label,textAlign:t.textAlign,width:t.width},t.data,this.state._data);"string"==typeof e&&(n.innerHTML=e)}}))))}render(){var t,n;const e=this.selectDisplayedData(this.state._sortedData,this.showPagination?null!==(n=null===(t=this.state._pagination)||void 0===t?void 0:t._pageSize)&&void 0!==n?n:10:this.state._sortedData.length,this.state._pagination._page||1),a=this.createDataField(e,this.state._headers);return(0,i.h)(i.H,null,(0,i.h)("div",{tabindex:"0"},(0,i.h)("table",{style:{minWidth:this.state._minWidth}},(0,i.h)("caption",null,this.state._caption),Array.isArray(this.state._headers.horizontal)&&(0,i.h)("thead",null,this.state._headers.horizontal.map(((t,n)=>(0,i.h)("tr",{key:`thead-${n}`},t.map(((t,e)=>!0===t.asTd?(0,i.h)("td",{key:`thead-${n}-${e}-${t.label}`,class:{[t.textAlign]:"string"==typeof t.textAlign&&t.textAlign.length>0},colSpan:t.colSpan,rowSpan:t.rowSpan,style:{textAlign:t.textAlign,width:t.width},ref:"function"==typeof t.render?n=>{this.cellRender(t,n)}:void 0,innerHTML:"function"!=typeof t.render?t.label:""}):(0,i.h)("th",{key:`thead-${n}-${e}-${t.label}`,scope:"number"==typeof t.colSpan&&t.colSpan>1?"colgroup":"col",colSpan:t.colSpan,rowSpan:t.rowSpan,style:{width:t.width},"aria-sort":"function"==typeof t.sort?t.sort!==this.sortFunction||"NOS"===this.sortDirections.get(t.sort)||void 0===this.sortDirections.get(t.sort)?"none":"ASC"===this.sortDirections.get(t.sort)?"ascending":"descending":void 0,"data-sort":`sort-${this.sortDirections.get(t.sort)}`},(0,i.h)("div",{class:"w-full flex gap-1 items-center"},(0,i.h)("div",{class:{"w-full":!0,[t.textAlign]:"string"==typeof t.textAlign&&t.textAlign.length>0},innerHTML:t.label,style:{textAlign:t.textAlign}}),"function"==typeof t.sort&&(0,i.h)("kol-button",{exportparts:"button,ghost",_ariaLabel:"Sortierung von "+t.label+" \xe4ndern",_icon:t.sort!==this.sortFunction||"NOS"===this.sortDirections.get(t.sort)||void 0===this.sortDirections.get(t.sort)?"fas fa-sort":"ASC"===this.sortDirections.get(t.sort)?"fas fa-sort-up":"fas fa-sort-down",_iconOnly:!0,_label:"Sortierung von "+t.label+" \xe4ndern",_on:{onClick:()=>{if("function"==typeof t.sort){switch(this.sortFunction=t.sort,this.sortDirections.get(this.sortFunction)){case"ASC":this.setSortDirection(this.sortFunction,"DESC");break;case"DESC":this.setSortDirection(this.sortFunction,"NOS");break;default:this.setSortDirection(this.sortFunction,"ASC")}this.updateSortedData()}}},_variant:"ghost"}))))))))),(0,i.h)("tbody",null,a.map(((t,n)=>(0,i.h)("tr",{key:`tbody-${n}`},t.map(((t,e)=>!1===t.asTd?(0,i.h)("th",{key:`tbody-${n}-${e}-${t.label}`,scope:"number"==typeof t.rowSpan&&t.rowSpan>1?"rowgroup":"row",colSpan:t.colSpan,rowSpan:t.rowSpan,style:{width:t.width},"aria-sort":"function"==typeof t.sort?t.sort!==this.sortFunction||"NOS"===this.sortDirections.get(t.sort)||void 0===this.sortDirections.get(t.sort)?"none":"ASC"===this.sortDirections.get(t.sort)?"ascending":"descending":void 0,"data-sort":`sort-${this.sortDirections.get(t.sort)}`},(0,i.h)("div",{class:"w-full flex gap-1 items-center"},(0,i.h)("div",{class:{"w-full":!0,[t.textAlign]:"string"==typeof t.textAlign&&t.textAlign.length>0},innerHTML:t.label,style:{textAlign:t.textAlign}}),"function"==typeof t.sort&&(0,i.h)("kol-button",{exportparts:"button,ghost",_ariaLabel:"Sortierung von "+t.label+" \xe4ndern",_icon:t.sort!==this.sortFunction||"NOS"===this.sortDirections.get(t.sort)||void 0===this.sortDirections.get(t.sort)?"fas fa-sort":"ASC"===this.sortDirections.get(t.sort)?"fas fa-sort-up":"fas fa-sort-down",_iconOnly:!0,_label:"Sortierung von "+t.label+" \xe4ndern",_on:{onClick:()=>{if("function"==typeof t.sort){switch(this.sortFunction=t.sort,this.sortDirections.get(this.sortFunction)){case"ASC":this.setSortDirection(this.sortFunction,"DESC");break;case"DESC":this.setSortDirection(this.sortFunction,"NOS");break;default:this.setSortDirection(this.sortFunction,"ASC")}this.updateSortedData()}}},_variant:"ghost"}))):(0,i.h)("td",{key:`tbody-${n}-${e}-${t.label}`,class:{[t.textAlign]:"string"==typeof t.textAlign&&t.textAlign.length>0},colSpan:t.colSpan,rowSpan:t.rowSpan,style:{textAlign:t.textAlign,width:t.width},ref:"function"==typeof t.render?n=>{this.cellRender(t,n)}:void 0,innerHTML:"function"!=typeof t.render?t.label:""}))))))))),this.pageEndSlice>0&&this.showPagination&&(0,i.h)("div",{class:"pagination"},(0,i.h)("span",null,"Eintr\xe4ge ",this.pageEndSlice>0?this.pageStartSlice+1:0," bis ",this.pageEndSlice," von"," ",this.state._pagination._total||(Array.isArray(this.state._data)?this.state._data.length:0)," angezeigt"),(0,i.h)("div",null,(0,i.h)("kol-pagination",{_boundaryCount:this.state._pagination._boundaryCount,_customClass:this.state._pagination._customClass,_on:this.handlePagination,_page:this.state._pagination._page,_pageSize:this.state._pagination._pageSize,_pageSizeOptions:this.state._pagination._pageSizeOptions||o,_siblingCount:this.state._pagination._siblingCount,_tooltipAlign:"bottom",_total:this.state._pagination._total||this.state._data.length}))))}static get watchers(){return{_caption:["validateCaption"],_data:["validateData"],_headers:["validateHeaders"],_minWidth:["validateMinWidth"],_pagination:["validatePagination"]}}};s.style={default:'/* windicss-touch: 1639175625181 */\n/* windicss-touch: 1649810622229 */\n/* windicss layer base */\n*, ::before, ::after {\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n  border-width: 0;\n  border-style: solid;\n  border-color: var(--kolibri-border-color);\n}\n* {\n  --tw-ring-inset: var(--tw-empty,/*!*/ /*!*/);\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: var(--kolibri-color);\n  --tw-ring-color: rgba(undefined, 0.5);\n  --tw-ring-offset-shadow: 0 0 #0000;\n  --tw-ring-shadow: 0 0 #0000;\n  --tw-shadow: 0 0 #0000;\n}\n:root {\n  -moz-tab-size: 4;\n  -o-tab-size: 4;\n  tab-size: 4;\n}\n:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n:-moz-ui-invalid {\n  box-shadow: none;\n}\n::moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n::-webkit-inner-spin-button, ::-webkit-outer-spin-button {\n  height: auto;\n}\n::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n::-webkit-file-upload-button {\n  -webkit-appearance: button;\n  font: inherit;\n}\n[type=\'search\'] {\n  -webkit-appearance: textfield;\n  outline-offset: -2px;\n}\nabbr[title] {\n  -webkit-text-decoration: underline dotted;\n  text-decoration: underline dotted;\n}\na {\n  color: inherit;\n  text-decoration: inherit;\n}\nbody {\n  margin: 0;\n  font-family: inherit;\n  line-height: inherit;\n}\nb, strong {\n  font-weight: bolder;\n}\nbutton, select {\n  text-transform: none;\n}\nbutton, [type=\'button\'], [type=\'reset\'], [type=\'submit\'] {\n  -webkit-appearance: button;\n}\nbutton {\n  background-color: transparent;\n  background-image: none;\n}\nbutton, [role="button"] {\n  cursor: pointer;\n}\ncode {\n  font-size: 1em;\n  font-family: ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;\n}\nfieldset {\n  margin: 0;\n  padding: 0;\n}\nhtml {\n  -webkit-text-size-adjust: 100%;\n  font-family: ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";\n  line-height: 1.5;\n}\nh1, p, h2, h3, h4, h5, h6 {\n  margin: 0;\n}\nh1, h2, h3, h4, h5, h6 {\n  font-size: inherit;\n  font-weight: inherit;\n}\ninput, button, optgroup, select, textarea {\n  font-family: inherit;\n  font-size: 100%;\n  line-height: 1.15;\n  margin: 0;\n  padding: 0;\n  line-height: inherit;\n  color: inherit;\n}\ninput::placeholder {\n  opacity: 1;\n  color: #9ca3af;\n}\ninput::webkit-input-placeholder {\n  opacity: 1;\n  color: #9ca3af;\n}\ninput::-moz-placeholder {\n  opacity: 1;\n  color: #9ca3af;\n}\ninput:-ms-input-placeholder {\n  opacity: 1;\n  color: #9ca3af;\n}\ninput::-ms-input-placeholder {\n  opacity: 1;\n  color: #9ca3af;\n}\nlegend {\n  padding: 0;\n}\nprogress {\n  vertical-align: baseline;\n}\nsmall {\n  font-size: 80%;\n}\nsvg {\n  display: block;\n  vertical-align: middle;\n}\ntable {\n  text-indent: 0;\n  border-color: inherit;\n  border-collapse: collapse;\n}\ntextarea {\n  resize: vertical;\n}\ntextarea::placeholder {\n  opacity: 1;\n  color: #9ca3af;\n}\ntextarea::webkit-input-placeholder {\n  opacity: 1;\n  color: #9ca3af;\n}\ntextarea::-moz-placeholder {\n  opacity: 1;\n  color: #9ca3af;\n}\ntextarea:-ms-input-placeholder {\n  opacity: 1;\n  color: #9ca3af;\n}\ntextarea::-ms-input-placeholder {\n  opacity: 1;\n  color: #9ca3af;\n}\nul, ol {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n/* windicss layer components */\n/* windicss layer utilities */\n.container {\n  width: 100%;\n}\n@media (min-width: 640px) {\n  .container {\n    max-width: 640px;\n  }\n}\n@media (min-width: 768px) {\n  .container {\n    max-width: 768px;\n  }\n}\n@media (min-width: 1024px) {\n  .container {\n    max-width: 1024px;\n  }\n}\n@media (min-width: 1280px) {\n  .container {\n    max-width: 1280px;\n  }\n}\n@media (min-width: 1536px) {\n  .container {\n    max-width: 1536px;\n  }\n}\n.bg-normal {\n  background-color: var(--kolibri-color-normal);\n}\n.bg-white {\n  --tw-bg-opacity: 1;\n  background-color: rgba(255, 255, 255, var(--tw-bg-opacity));\n}\n.bg-spin-1 {\n  background-color: var(--kolibri-color-spin-1);\n}\n.bg-spin-2 {\n  background-color: var(--kolibri-color-spin-2);\n}\n.bg-spin-3 {\n  background-color: var(--kolibri-color-spin-3);\n}\n.rounded {\n  border-radius: var(--kolibri-border-radius);\n}\n.border-1 {\n  border-width: 1px;\n}\n.cursor-pointer {\n  cursor: pointer;\n}\n.block {\n  display: block;\n}\n.inline-block {\n  display: inline-block;\n}\n.flex {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: -webkit-flex;\n  display: flex;\n}\n.inline-flex {\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: -webkit-inline-flex;\n  display: inline-flex;\n}\n.table {\n  display: table;\n}\n.grid {\n  display: -ms-grid;\n  display: grid;\n}\n.hidden {\n  display: none;\n}\n.flex-wrap {\n  -ms-flex-wrap: wrap;\n  -webkit-flex-wrap: wrap;\n  flex-wrap: wrap;\n}\n.items-center {\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  -webkit-align-items: center;\n  align-items: center;\n}\n.content-center {\n  -ms-flex-line-pack: center;\n  -webkit-align-content: center;\n  align-content: center;\n}\n.font-80 {\n  font-weight: 80;\n}\n.font-60 {\n  font-weight: 60;\n}\n.h-full {\n  height: 100%;\n}\n.h-0 {\n  height: 0px;\n}\n.h-0\\.41c-2\\.42\\2c 0-4\\.82-1\\.57-4\\.82-3\\.58c0\\.05-0\\.98\\2c 0\\.43-1\\.91\\2c 1\\.07-2\\.65c0\\.3\\2c 0\\.05\\2c 0\\.61\\2c 0\\.09\\2c 0\\.92\\2c 0\\.09c1\\.1\\2c 0\\2c 1\\.69-0\\.58\\2c 1\\.74-1\\.16 {\n  height: 0.29rem;\n}\n.text-sm {\n  font-size: 0.875rem;\n  line-height: 1.25rem;\n}\n.text-2xl {\n  font-size: 1.5rem;\n  line-height: 2rem;\n}\n.text-lg {\n  font-size: 1.125rem;\n  line-height: 1.75rem;\n}\n.leading-normal {\n  line-height: 1.5;\n}\n.list-none {\n  list-style-type: none;\n}\n.list-disc {\n  list-style-type: disc;\n}\n.list-decimal {\n  list-style-type: decimal;\n}\n.mx-auto {\n  margin-left: auto;\n  margin-right: auto;\n}\n.mb-1 {\n  margin-bottom: calc(1 * var(--kolibri-spacing));\n}\n.mt-2 {\n  margin-top: calc(2 * var(--kolibri-spacing));\n}\n.mt-4 {\n  margin-top: calc(4 * var(--kolibri-spacing));\n}\n.mr-2 {\n  margin-right: calc(2 * var(--kolibri-spacing));\n}\n.ml-2 {\n  margin-left: calc(2 * var(--kolibri-spacing));\n}\n.outline {\n  outline-style: solid;\n}\n.overflow-hidden {\n  overflow: hidden;\n}\n.overflow-y-visible {\n  overflow-y: visible;\n}\n.p-2 {\n  padding: calc(2 * var(--kolibri-spacing));\n}\n.p-4 {\n  padding: calc(4 * var(--kolibri-spacing));\n}\n.px {\n  padding-left: 1px;\n  padding-right: 1px;\n}\n.py-2 {\n  padding-top: calc(2 * var(--kolibri-spacing));\n  padding-bottom: calc(2 * var(--kolibri-spacing));\n}\n.pl-8 {\n  padding-left: 2rem;\n}\n.pb-2 {\n  padding-bottom: calc(2 * var(--kolibri-spacing));\n}\n.tab {\n  -moz-tab-size: 4;\n  -o-tab-size: 4;\n  tab-size: 4;\n}\n.absolute {\n  position: absolute;\n}\n.text-center {\n  text-align: center;\n}\n.hover\\:text-primary:hover {\n  color: var(--kolibri-color-primary);\n}\n.text-normal {\n  color: var(--kolibri-color-normal);\n}\n.italic {\n  font-style: italic;\n}\n.underline {\n  -webkit-text-decoration-line: underline;\n  text-decoration-line: underline;\n}\n.indent {\n  text-indent: 1.5rem;\n}\n.visible {\n  visibility: visible;\n}\n.w-full {\n  width: 100%;\n}\n.w-4\\/5 {\n  width: 80%;\n}\n.z-50 {\n  z-index: 50;\n}\n.gap-1 {\n  grid-gap: calc(1 * var(--kolibri-spacing));\n  gap: calc(1 * var(--kolibri-spacing));\n}\n.gap-2 {\n  grid-gap: calc(2 * var(--kolibri-spacing));\n  gap: calc(2 * var(--kolibri-spacing));\n}\n.grid-flow-col {\n  grid-auto-flow: column;\n}\n.transform {\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-translate-z: 0;\n  --tw-rotate: 0;\n  --tw-rotate-x: 0;\n  --tw-rotate-y: 0;\n  --tw-rotate-z: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-scale-z: 1;\n  -webkit-transform: translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) translateZ(var(--tw-translate-z)) rotate(var(--tw-rotate)) rotateX(var(--tw-rotate-x)) rotateY(var(--tw-rotate-y)) rotateZ(var(--tw-rotate-z)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)) scaleZ(var(--tw-scale-z));\n  -ms-transform: translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) translateZ(var(--tw-translate-z)) rotate(var(--tw-rotate)) rotateX(var(--tw-rotate-x)) rotateY(var(--tw-rotate-y)) rotateZ(var(--tw-rotate-z)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)) scaleZ(var(--tw-scale-z));\n  transform: translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) translateZ(var(--tw-translate-z)) rotate(var(--tw-rotate)) rotateX(var(--tw-rotate-x)) rotateY(var(--tw-rotate-y)) rotateZ(var(--tw-rotate-z)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)) scaleZ(var(--tw-scale-z));\n}\n.animate {\n  -webkit-animation-iteration-count: 1;\n  animation-iteration-count: 1;\n}\n.filter {\n  --tw-blur: var(--tw-empty,/*!*/ /*!*/);\n  --tw-brightness: var(--tw-empty,/*!*/ /*!*/);\n  --tw-contrast: var(--tw-empty,/*!*/ /*!*/);\n  --tw-grayscale: var(--tw-empty,/*!*/ /*!*/);\n  --tw-hue-rotate: var(--tw-empty,/*!*/ /*!*/);\n  --tw-invert: var(--tw-empty,/*!*/ /*!*/);\n  --tw-saturate: var(--tw-empty,/*!*/ /*!*/);\n  --tw-sepia: var(--tw-empty,/*!*/ /*!*/);\n  --tw-drop-shadow: var(--tw-empty,/*!*/ /*!*/);\n  -webkit-filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);\n  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);\n}\n.blur {\n  -webkit-backdrop-filter: blur(8px);\n  backdrop-filter: blur(8px);\n}\n:host * {\n  -ms-hyphens: var(--kolibri-hyphens);\n  -webkit-hyphens: var(--kolibri-hyphens);\n  hyphens: var(--kolibri-hyphens);\n  font-family: var(--kolibri-font-family);\n  line-height: var(--kolibri-line-height);\n  word-break: break-word;\n}\n\n:host {\n  overflow: hidden;\n}\n:host > div {\n  overflow-x: auto;\n  border-radius: var(--kolibri-border-radius);\n  border-style: solid;\n  border-width: 1px;\n}\n:host > div table {\n  border: 0;\n  width: 100%;\n}\n:host > div table tr {\n  border-top-style: solid;\n  border-top-width: 1px;\n  padding-top: calc(1 * var(--kolibri-spacing));\n  padding-bottom: calc(1 * var(--kolibri-spacing));\n  padding-left: calc(2 * var(--kolibri-spacing));\n  padding-right: calc(2 * var(--kolibri-spacing));\n}\n:host > div table tr th, :host > div table tr td {\n  border-right-style: solid;\n  border-right-width: 1px;\n  padding-top: calc(1 * var(--kolibri-spacing));\n  padding-bottom: calc(1 * var(--kolibri-spacing));\n  padding-left: calc(2 * var(--kolibri-spacing));\n  padding-right: calc(2 * var(--kolibri-spacing));\n}\n:host > div table tr th:last-child,\n:host > div table tr td:last-child {\n  border: 0;\n}\n:host > div table tr th, :host > div table tr .th {\n  --tw-bg-opacity: 1;\n  background-color: rgba(229, 231, 235, var(--tw-bg-opacity));\n}\n:host > div table tr:nth-child(even) {\n  --tw-bg-opacity: 1;\n  background-color: rgba(243, 244, 246, var(--tw-bg-opacity));\n}\n:host > div table tr:nth-child(odd) {\n  @apply white;\n}\n:host > div.pagination {\n  border-style: none;\n  display: -ms-grid;\n  display: grid;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  -webkit-align-items: center;\n  align-items: center;\n  -ms-flex-line-pack: center;\n  -webkit-align-content: center;\n  align-content: center;\n  padding-top: calc(2 * var(--kolibri-spacing));\n  padding-left: calc(1 * var(--kolibri-spacing));\n  padding-right: calc(1 * var(--kolibri-spacing));\n  width: 100%;\n  grid-gap: calc(2 * var(--kolibri-spacing));\n  gap: calc(2 * var(--kolibri-spacing));\n  grid-auto-flow: column;\n}\n:host > div.pagination > div::last-child {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  -webkit-align-items: center;\n  align-items: center;\n  -ms-grid-column-align: end;\n  justify-self: end;\n  grid-gap: calc(2 * var(--kolibri-spacing));\n  gap: calc(2 * var(--kolibri-spacing));\n}'}},6645:(t,n,e)=>{e.d(n,{K:()=>U,a:()=>z,b:()=>D,c:()=>C,d:()=>N,e:()=>_,f:()=>x,g:()=>$,h:()=>I,i:()=>F,j:()=>J,k:()=>R,l:()=>Z,m:()=>j,n:()=>q,o:()=>S,p:()=>T,q:()=>K,r:()=>d,s:()=>A,t:()=>P,w:()=>E});var i=e(4340),a=e(5149),o=e(7738),r=e(4776);const s=(t,n)=>{n.forEach((n=>{!1===t.has(n)&&t.add(n)}))},l=(t,n=document)=>{if(n instanceof Document||n instanceof HTMLElement||n instanceof ShadowRoot){const e=new Set;s(e,n.querySelectorAll(t));const i=n.querySelectorAll('[class*="hydrated"]');for(let n=0;n<i.length;n++){const a=i[n].shadowRoot;s(e,l(t,"object"==typeof a&&null!==a?a:i[n]))}return Array.from(e)}throw new Error("The parameter document for the method querySelectorAll is not type of Document, HTMLElement or ShadowRoot.")},c=(t,n=document)=>{if(n instanceof Document||n instanceof HTMLElement||n instanceof ShadowRoot){let e=n.querySelector(t);if(null===e){const i=n.querySelectorAll('[class*="hydrated"]');for(let n=0;n<i.length;n++){const a=i[n].shadowRoot;if(e=c(t,"object"==typeof a&&null!==a?a:i[n]),null!==e)break}}return e}throw new Error("The parameter document for the method querySelector is not type of Document, HTMLElement or ShadowRoot.")};var d=b,h=b,p=function(t){var n=w(t);return{r:n[0],g:n[1],b:n[2],a:3==n.length?255:Math.round(n[3])}},g=function(t){var n=w(t);return 3==n.length&&n.push(255),255==n[3]?"rgb("+n[0]+", "+n[1]+", "+n[2]+")":0==n[3]?"rgba("+n[0]+", "+n[1]+", "+n[2]+", 0)":"rgba("+n[0]+", "+n[1]+", "+n[2]+", "+String(n[3]/255).substr(1)+")"},u=function(t){3==(n=w(t)).length&&n.push(255);var n,e=255==n[3],i=v(n[0]),a=v(n[1]),o=v(n[2]),r=function(t,n,e,i){var a=["ff","00","11","22","33","44","55","66","77","88","99","aa","bb","cc","dd","ee"];return-1!=a.indexOf(t)&&-1!=a.indexOf(n)&&-1!=a.indexOf(e)&&-1!=a.indexOf(i)}(i,a,o,n=v(Math.round(n[3])));return e?r?"#"+i.charAt(0)+a.charAt(0)+o.charAt(0):"#"+i+a+o:r?"#"+i.charAt(0)+a.charAt(0)+o.charAt(0)+n.charAt(0):"#"+i+a+o+n},f=function(t){var n=w(t);return 3==n.length?n.push(255):n[3]=Math.round(n[3]),(n[3]<<24>>>0|n[0]<<16|n[1]<<8|n[2])>>>0};function b(t){var n=w(t);return 3==n.length?n.concat(255):(n[3]=Math.round(n[3]),n)}function w(t){return"string"==typeof t?function(t){return"red"==t?[255,0,0]:"green"==t?[0,255,0]:"blue"==t?[0,0,255]:"black"==t?[0,0,0]:"white"==t?[255,255,255]:"cyan"==t?[0,255,255]:"gray"==t||"grey"==t?[128,128,128]:"magenta"==t||"pink"==t?[255,0,255]:"yellow"==t?[255,255,0]:void 0}(t=t.toLowerCase())||function(t){var n=t.replace(/^#/,""),e=n.length;if(3==e||4==e){var i=y(n[0]),a=y(n[1]),o=y(n[2]),r=3==e?255:y(n[3]);if(isNaN(i)||isNaN(a)||isNaN(o)||isNaN(r))return;return[i,a,o,r]}}(t)||function(t){var n=t.replace(/^#/,""),e=n.length;if(6==e||8==e){var i=y(n.slice(0,2)),a=y(n.slice(2,4)),o=y(n.slice(4,6)),r=6==e?255:y(n.slice(6,8));if(isNaN(i)||isNaN(a)||isNaN(o)||isNaN(r))return;return[i,a,o,r]}}(t)||function(t){if("rgb("==t.substr(0,4)){var n=(t=t.match(/^rgb\(([^)]+)\)/)[1]).split(/ *, */).map(Number),e=m(n[0],!0),i=m(n[1],!0),a=m(n[2],!0);if(-1!=e&&-1!=i&&-1!=a)return[e,i,a,255]}}(t)||function(t){if("rgba("==t.substr(0,5)){var n=(t=t.match(/^rgba\(([^)]+)\)/)[1]).split(/ *, */).map(Number),e=m(n[0],!0),i=m(n[1],!0),a=m(n[2],!0),o=m(255*n[3]);if(-1!=e&&-1!=i&&-1!=a&&-1!=o)return[e,i,a,o]}}(t)||[0,0,0,255]:function(t){if("[object Object]"===Object.prototype.toString.call(t)&&Object.getPrototypeOf(t)===Object.getPrototypeOf({})){var n=m(null!=t.r?t.r:null!=t.red?t.red:0,!0),e=m(null!=t.g?t.g:null!=t.green?t.green:0,!0),i=m(null!=t.b?t.b:null!=t.blue?t.blue:0,!0),a=m(null!=t.a?t.a:null!=t.alpha?t.alpha:255,!0);if(-1!=n&&-1!=e&&-1!=i&&-1!=a)return[n,e,i,a]}}(t)||function(t){if(Array.isArray(t)&&(3==t.length||4==t.length)){var n=m(t[0],!0),e=m(t[1],!0),i=m(t[2],!0),a=m(null!=t[3]?t[3]:255,!0);if(-1!=n&&-1!=e&&-1!=i&&-1!=a)return[n,e,i,a]}}(t)||function(t){if("number"==typeof t&&Math.floor(t)==t&&t<=4294967295&&t>=0)return[t>>16&255,t>>8&255,255&t,t>>24&255]}(t)||[0,0,0,255]}function v(t){var n=t.toString(16);return 1==n.length?"0"+n:n}function y(t){return 1==t.length?parseInt(t+t,16):parseInt(t,16)}function m(t,n){return"number"!=typeof t||!0===n&&Math.floor(t)!==t?-1:t>=0&&t<=255?t:-1}d.arr=h,d.obj=p,d.css=g,d.hex=u,d.num=f;const k=/\[object Object\]/,S=(t,n)=>{"string"==typeof t&&k.test(t)||n()},x=(t,n)=>{"string"==typeof t&&""===t||n()},_=(t,n)=>{(0,o.b)()&&(console.log(t,n),(0,a.d)("\u2191 We propagate the (submit) event to this target.")),Object.defineProperty(t,"target",{value:n,writable:!1})},A=(t,n,e,i={})=>{var a,o;void 0===t.nextHooks&&(t.nextHooks=new Map),void 0===t.nextState&&(t.nextState=new Map),t.nextState.get(n)!==e&&(t.nextHooks.get(n)instanceof Map==0&&t.nextHooks.set(n,new Map),"function"==typeof i.afterPatch&&(null===(a=t.nextHooks.get(n))||void 0===a||a.set("afterPatch",i.afterPatch)),"function"==typeof i.beforePatch&&(null===(o=t.nextHooks.get(n))||void 0===o||o.set("beforePatch",i.beforePatch)),t.nextState.set(n,e),(t=>{var n,e,i;null===(n=t.nextHooks)||void 0===n||n.forEach(((n,e)=>{var i;const a=n.get("beforePatch");"function"==typeof a&&a(null===(i=t.nextState)||void 0===i?void 0:i.get(e),t.nextState,t,e)})),(null===(e=t.nextState)||void 0===e?void 0:e.size)>0&&(t.state=Object.assign(Object.assign({},t.state),Object.fromEntries(t.nextState)),delete t.nextState,null===(i=t.nextHooks)||void 0===i||i.forEach(((n,e)=>{const i=n.get("afterPatch");"function"==typeof i&&i(t.state[e],t.state,t,e)}))),delete t.nextHooks})(t))},z=(t,n,e,i,o,r={})=>{e(o)?A(t,n,o,null==r?void 0:r.hooks):void 0===o||null===o&&(void 0===(null==r?void 0:r.required)||!1===(null==r?void 0:r.required))?A(t,n,null==r?void 0:r.defaultValue,null==r?void 0:r.hooks):(void 0!==(null==r?void 0:r.required)&&!1!==(null==r?void 0:r.required)||i.add(null),((t,n,e,i)=>{(0,a.d)(`[${t.constructor.name}] Der Property-Wert (${e}) f\xfcr '${n}' ist nicht valide. Folgende Werte sind erlaubt: ${Array.from(i).join(", ")}`)})(t,n,o,i))},D=(t,n,e,i)=>{z(t,n,(t=>"boolean"==typeof t),new Set(["Boolean {true, false}"]),e,i)},E=(t,n,e,i={})=>{const a="number"==typeof i.minLength?null==i?void 0:i.minLength:0;z(t,n,(t=>"string"==typeof t&&t.length>=a),new Set([`String (Mindestl\xe4nge ${a})`]),e,i)},N=(t,n,e,i)=>{z(t,n,(t=>"number"==typeof t&&(void 0===(null==i?void 0:i.min)||"number"==typeof(null==i?void 0:i.min)&&t>=i.min)&&(void 0===(null==i?void 0:i.max)||"number"==typeof(null==i?void 0:i.max)&&t<=i.max)),new Set(["Number"]),e,i)},C=(t,n,e,i,o=(t=>t==t),r={})=>{x(i,(()=>{S(i,(()=>{void 0===i&&(i=[]);try{try{i=T(i)}catch(t){}if(Array.isArray(i)){const a=i.find((t=>!e(t)));void 0===a&&o(i)?A(t,n,i,r.hooks):S(a,(()=>{throw console.log(a),new Error("\u2191 Das Schema f\xfcr das Property (_options) ist nicht valide. Der Wert wird nicht ge\xe4ndert.")}))}else S(i,(()=>{throw console.log(i),new Error("\u2191 Das Schema f\xfcr das Property (_options) ist nicht valide. Der Wert wird nicht ge\xe4ndert.")}))}catch(t){(0,a.d)("Known bug: Zeichenkettenliste (string[])")}}))}))},O=/^(true|false)$/,M=/^-?(0|[1-9]\d*)$/,L=/^-?(0.|[1-9]\d*.)\d*[1-9]$/,j=t=>{const n=typeof t,e=`${t}`;if("string"==typeof t)if(O.test(t))t="true"===t;else if(M.test(t))t=parseInt(t);else if(L.test(t))t=parseFloat(t);else if(H.test(t))try{t=T(t)}catch(t){}return n!==typeof t&&(0,a.d)(`You have used a stringified property value (${e} to ${JSON.stringify(t)}) which type switched from ${n} to ${typeof t}!`),t},P=t=>{try{return JSON.stringify(t).replace(/"/g,"'")}catch(n){throw o.L.warn(["stringifyJson",t]),o.L.error("\u2191 Das JSON konnte nicht in einen String umgewandelt werden. Es wird ein stringifizierbares JSON erwartet."),new Error}},H=/^[{[]/,T=t=>{if("string"==typeof t)try{return JSON.parse(t)}catch(n){if(H.test(t))try{return JSON.parse(t.replace(/'/g,'"'))}catch(n){o.L.warn(["parseJson",t]),o.L.error("\u2191 Der JSON-String konnte nicht geparsed werden. Achten Sie darauf, dass einfache Anf\xfchrungszeichen im Text maskiert werden (&#8216;).")}}throw new Error},$=t=>"boolean"==typeof t?!0===t?"true":"false":void 0,F=t=>"string"==typeof t?t:$(t),R=(t,n)=>c(t,n||(0,o.g)()),q=(t,n)=>l(t,n||(0,o.g)());let W=null;const B=()=>(W=W||{backgroundColor:"#00000000",color:"#00000000",domNode:(0,o.g)().body,level:"Fail",score:1},W),Y=/(\d+, ){3}0\)/,Z=(t,n=B())=>{const e=getComputedStyle(t),a=Y.test(e.backgroundColor)?n.backgroundColor:d.hex(e.backgroundColor),r=Y.test(e.color)?n.color:d.hex(e.color),s=(0,i.s)(a,r),l={backgroundColor:a,color:r,domNode:t,level:(0,i.f)(s),score:s};return s<4.5&&o.L.error(["Color-Contrast-Error",{backgroundColor:l.backgroundColor,color:l.color,level:l.level,score:l.score},l.domNode]),l},K=(t,n=B())=>{n.domNode instanceof HTMLElement&&(n=Z(n.domNode,n));const e=n.domNode.querySelector(t);if(null===e){const e=n.domNode.querySelectorAll('[class="hydrated"]');for(let i=0;i<e.length&&(n.domNode=e[i],null===(n=K(t,n)).domNode);i++);return n}return Z(e,n)},X=(t,n=window)=>{t instanceof HTMLElement?(n.scrollTo({behavior:"smooth",top:t.getBoundingClientRect().top+(0,o.a)().pageYOffset-50}),t.focus()):(0,a.d)("Das HTMLElement ist nicht valide, zu dem gescrollt werden soll.")},I=(t,n)=>{if((t instanceof Document||t instanceof HTMLElement||t instanceof ShadowRoot)&&"string"==typeof n){(0,a.d)("Bei der Methode querySelectorAll wurden die Parameter document, selector in selector, document getauscht, da der Parameter selector nicht, allerdings der Parameter document optional sein kann.");const e=`${n}`;n=t,t=e}if("string"==typeof t){const e=R(t,n);e instanceof HTMLElement?X(e):(0,a.d)(`Es konnte kein HTMLElement mit dem Selector (${t}) gefunden werden, zu dem gescrollt werden soll.`)}else(0,a.d)("Der Selector ist nicht valide, zu dem gescrollt werden soll.")};class J{static queryHtmlElementColors(t,n,e=!1,i=!0){let a=null;if(!0===e||!1===J.executionLock)if(!1===e&&(J.cache.clear(),J.cache.set(n.domNode,n),J.executionLock=!0,!0===i&&o.L.debug("[KoliBriUtils] Color contrast analysis started...")),t===n.domNode)a=n;else{const e=new Set;if(n.domNode.shadowRoot){const t=n.domNode.shadowRoot.children;for(let n=0;n<t.length;n++)e.add(t[n])}const i=n.domNode;if("function"==typeof i.assignedNodes){const t=i.assignedNodes();for(let n=0;n<t.length;n++)t[n]instanceof HTMLElement&&e.add(t[n])}const o=n.domNode.children;for(let t=0;t<o.length;t++)e.add(o[t]);const r=Array.from(e);for(let s=0;s<r.length;s++){let e=J.cache.get(r[s]);void 0===e&&(e=Z(r[s],n)),J.cache.set(r[s],e);const i=J.queryHtmlElementColors(t,e,!0,!1);if(null!==i){a=i;break}}}else o.L.debug("[KoliBriUtils] Call aborted because a color contrast analysis is currently being executed.");return!1===e&&(!0===i&&o.L.debug(`[KoliBriUtils] Color contrast analysis finished (${J.cache.size} DOM elements are analysed).`),J.executionLock=!1,J.cache.clear()),a}}J.executionLock=!1,J.cache=new Map;class U{}U.patchTheme=r.p,U.patchThemeTag=r.a,U.querySelector=R,U.querySelectorAll=q,U.scrollByHTMLElement=X,U.scrollBySelector=I,U.stringifyJson=P}}]);