"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[1520],{17942:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>c});var a=n(50959);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var d=a.createContext({}),p=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=p(e.components);return a.createElement(d.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,d=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),u=p(n),k=i,c=u["".concat(d,".").concat(k)]||u[k]||m[k]||r;return n?a.createElement(c,l(l({ref:t},s),{},{components:n})):a.createElement(c,l({ref:t},s))}));function c(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=k;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o[u]="string"==typeof e?e:i,l[1]=o;for(var p=2;p<r;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},6096:(e,t,n)=>{n.d(t,{_:()=>d});var a=n(52260),i=n(50959);const r=function(e,t,n,a,i){return void 0===i&&(i="editor"),`${e}&module=${a}&initialpath=%23%2F${t}%2F${n}&view=${i}`},l={width:"100%",height:"500px",border:"0",overflow:"hidden"},o=e=>{let{url:t}=e;return i.createElement("div",{className:"m-2"},i.createElement("iframe",{src:t,style:l,title:"kolibri-public-ui-code-samples",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}),i.createElement(a.Nv,{_href:t,_label:"",_target:"codesandbox"},i.createElement("img",{alt:"CodeSandbox-Schalter",src:"https://codesandbox.io/static/img/play-codesandbox.svg"})))},d=e=>{let{component:t,sample:n}=e;const[l,d]=(0,i.useState)("Preview"),p="https://codesandbox.io/embed/kolibri-public-ui-react-samples-w5u37c?fontsize=14&hidenavigation=1&autoresize=1&theme=dark",s=`%2Fsrc%2Fsamples%2F${t}%2F${n}`,u={angular:`${s}.html`,react:`${s}.tsx`,vue:`${s}.vue`,webcomponent:`${s}.html`},m={onSelect:(e,t)=>{switch(t){case 1:d((()=>"Angular"));break;case 2:d((()=>"React"));break;case 3:d((()=>"Vue"));break;case 4:d((()=>"Web Component"));break;default:d((()=>"Preview"))}}};return i.createElement(a.UD,{className:"w-full",_ariaLabel:"Code-Beispiel",_on:m,_tabs:[{_label:"Vorschau"},{_disabled:!0,_label:"Angular"},{_label:"React"},{_disabled:!0,_label:"Vue"},{_disabled:!0,_label:"Web Component"}]},i.createElement("div",null,"Preview"===l&&i.createElement(o,{url:r(p,t,n,u.react,"preview")})),i.createElement("div",null,"Angular"===l&&i.createElement(o,{url:r(p,t,n,u.angular)})),i.createElement("div",null,"React"===l&&i.createElement(o,{url:r(p,t,n,u.react)})),i.createElement("div",null,"Vue"===l&&i.createElement(o,{url:r(p,t,n,u.vue)})),i.createElement("div",null,"Web Component"===l&&i.createElement(o,{url:r(p,t,n,u.webcomponent)})))}},65548:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>s,default:()=>g,frontMatter:()=>p,metadata:()=>u,toc:()=>k});var a=n(15882),i=(n(50959),n(17942));const r={toc:[{value:"Konstruktion",id:"konstruktion",level:2},{value:"Funktionalit\xe4ten",id:"funktionalit\xe4ten",level:3},{value:"Pagination",id:"pagination",level:3},{value:"KoliBriTableHeaders",id:"kolibritableheaders",level:4},{value:"Code",id:"code",level:3},{value:"Beispiel",id:"beispiel",level:3},{value:"Verwendung",id:"verwendung",level:2},{value:"Sortierung",id:"sortierung",level:3},{value:"Barrierefreiheit",id:"barrierefreiheit",level:2},{value:"Links und Referenzen",id:"links-und-referenzen",level:2},{value:"Properties",id:"properties",level:2},{value:"Dependencies",id:"dependencies",level:2},{value:"Depends on",id:"depends-on",level:3},{value:"Graph",id:"graph",level:3}]},l="wrapper";function o(e){let{components:t,...n}=e;return(0,i.kt)(l,(0,a.Z)({},r,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"k# Table"),(0,i.kt)("p",null,"Die ",(0,i.kt)("strong",{parentName:"p"},"Table"),"-Komponente dient prim\xe4r der \xfcbersichtlichen Darstellung von Datenmengen. Dabei ist sie so ausgelegt, dass sie alle von den Daten abh\xe4ngige Werte automatisch ermittelt und die Tabelle entsprechend darstellt. Hierzu geh\xf6ren beispielsweise die optionalen Funktionalit\xe4ten Spaltensortierung oder Pagination."),(0,i.kt)("kol-indented-text",{_summary:"Backend-seitige Pagination"},'Bei sehr gro\xdfen Datenmengen ist auch eine manuelle Nutzung der Table-Komponente m\xf6glich. Das bedeutet, dass die Tabelle seitenweise "manuell" bef\xfcllt wird. Hierzu kann einfach anstatt der Table-Pagination eine "eigene" Pagination unter der Tabelle mittels der Pagination-Komponente verwendet werden.'),(0,i.kt)("h2",{id:"konstruktion"},"Konstruktion"),(0,i.kt)("p",null,"Die Table-Komponente ist so konstruiert, dass nicht der gesamte Tabellenaufbau im Markup selbst beschrieben werden muss. Wie genau die Tabelle Markup-spezifisch aufgebaut werden muss, um barrierefrei zu sein, \xfcbernimmt die Komponente selbst."),(0,i.kt)("p",null,"Dadurch, dass die Table-Komponente das valide und barrierefreie Markup dynamisch zusammenbaut, kann die komplexe Auszeichnung f\xfcr die assistive Systeme dem/der Entwickler:in abgenommen werden."),(0,i.kt)("h3",{id:"funktionalit\xe4ten"},"Funktionalit\xe4ten"),(0,i.kt)("p",null,"Die Table-Komponente unterst\xfctzt folgende Funktionalit\xe4ten:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Tabellenbeschreibung durch ein ",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"caption")),"-Attribut."),(0,i.kt)("li",{parentName:"ul"},"Mehrzeilige Spalten\xfcberschriften in horizontaler oder vertikaler Richtung."),(0,i.kt)("li",{parentName:"ul"},"Sortierfunktion f\xfcr entweder horizontale und vertikale Ausrichtung."),(0,i.kt)("li",{parentName:"ul"},"Unterschiedliche Render-Funktion f\xfcr die Zellen."),(0,i.kt)("li",{parentName:"ul"},"Pagination f\xfcr die Tabelle.")),(0,i.kt)("p",null,"Die Table-Komponente unterst\xfctzt folgende Funktionalit\xe4ten ",(0,i.kt)("strong",{parentName:"p"},"nicht"),":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Das Filtern der Tabelle ist aktuell nicht innerhalb der Tabelle vorgesehen."),(0,i.kt)("li",{parentName:"ul"},"Das Ausw\xe4hlen von Zeilen ist aktuell in der Tabelle nicht vorgesehen.")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Beides k\xf6nnte jedoch mittels der Render-Funktion umgesetzt werden.")),(0,i.kt)("h3",{id:"pagination"},"Pagination"),(0,i.kt)("p",null,"\xdcber das Attribut ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"_pagination"))," kann optional eine Vielzahl zus\xe4tzlicher Properties zur Steuerung der Pagination \xfcbergeben werden. Die genaue Beschreibung der Optionen ist auf der Seite ",(0,i.kt)("kol-link",{_href:"/docs/components/pagination",_label:"Pagination"})," zu finden."),(0,i.kt)("h4",{id:"kolibritableheaders"},"KoliBriTableHeaders"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"{\n  horizontal: [\n    [\n      {\n        label: string,\n        key?: string,\n        colsSpan?: number,\n        rowSpan?: number,\n        useTdInsteadOfTh?: boolean,\n        render?: (data) => string,\n        sort?: (data) => data,\n      },\n      \u2026\n    ],\n    \u2026\n  ],\n  vertical: [\n    [\n      {\n        label: string,\n        key?: string,\n        colsSpan?: number,\n        rowSpan?: number,\n        useTdInsteadOfTh?: boolean,\n        render?: (data) => string,\n        sort?: (data) => data,\n      },\n      \u2026\n    ],\n    \u2026\n  ],\n};\n")),(0,i.kt)("h3",{id:"code"},"Code"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},"<kol-table _caption=\"Tabellenbeschreibung\" _headers=\"{'horizontal': [[{'label':'Montag','key':'montag'}]]}\" _pagination=\"[{'page':2}]\"></kol-table>\n")),(0,i.kt)("h3",{id:"beispiel"},"Beispiel"),(0,i.kt)("p",null,(0,i.kt)("kol-table",{_caption:"Nur Vertikal Header, Daten Vertikal, Pagination",_headers:"{'horizontal':[[{'label':'Montag','key':'montag'}]]}",_data:"[{'montag':'Zelle1'},{'montag':'Zelle2'}]",_pagination:"{'page':2}"})),(0,i.kt)("h2",{id:"verwendung"},"Verwendung"),(0,i.kt)("h3",{id:"sortierung"},"Sortierung"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Zu jedem Header kann man eine Sortierfunktion definieren."),(0,i.kt)("li",{parentName:"ul"},"Es ist exakt eine oder keine Sortierfunktion aktiviert."),(0,i.kt)("li",{parentName:"ul"},"Aktuell wird nicht unterst\xfctzt, dass bei zweidimensionalen Headern, die Header der jeweils anderen Header-Seite mit sortiert werden. Bei der Anforderung der Sortierung empfehlen wir die Verwendung nur einer Header-Dimension (entweder horizontal oder vertikal).")),(0,i.kt)("h2",{id:"barrierefreiheit"},"Barrierefreiheit"),(0,i.kt)("p",null,"Bei der Table-Komponente werden zahlreiche Attribut-Definitionen dem Tabellen-Markup hinzugef\xfcgt, um die Screenreader bestm\xf6glich zu unterst\xfctzen."),(0,i.kt)("p",null,"Aktuell werden folgende Attribute von der Komponente verwaltet: ",(0,i.kt)("inlineCode",{parentName:"p"},"role"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"scope")," und ",(0,i.kt)("inlineCode",{parentName:"p"},"aria-\\*"),"."),(0,i.kt)("p",null,"Das hei\xdft beispielsweise, dass bei den Spalten\xfcberschriften automatisch entweder die Rolle ",(0,i.kt)("inlineCode",{parentName:"p"},"colheader")," oder ",(0,i.kt)("inlineCode",{parentName:"p"},"rowheader")," gesetzt wird. Dar\xfcber hinaus wird der Scope entweder auf ",(0,i.kt)("inlineCode",{parentName:"p"},"col"),"/",(0,i.kt)("inlineCode",{parentName:"p"},"colgroup")," oder ",(0,i.kt)("inlineCode",{parentName:"p"},"row"),"/",(0,i.kt)("inlineCode",{parentName:"p"},"rowgroup")," gesetzt. \xc4hnlich dieser Automatismen werden auch die ",(0,i.kt)("inlineCode",{parentName:"p"},"aria-\\*"),"-Attribute je nach Relevanz gesetzt."),(0,i.kt)("p",null,"Warum die Tabelle einen ",(0,i.kt)("strong",{parentName:"p"},"Tabindex")," hat, wird auf der folgenden Webseite beschrieben: ",(0,i.kt)("a",{parentName:"p",href:"https://dequeuniversity.com/rules/axe/3.5/scrollable-region-focusable"},"https://dequeuniversity.com/rules/axe/3.5/scrollable-region-focusable")),(0,i.kt)("h2",{id:"links-und-referenzen"},"Links und Referenzen"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.w3.org/WAI/tutorials/tables/"},"https://www.w3.org/WAI/tutorials/tables/")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.barrierefreies-webdesign.de/knowhow/datentabellen/scope.html"},"https://www.barrierefreies-webdesign.de/knowhow/datentabellen/scope.html")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/de/docs/Web/Accessibility/ARIA/ARIA_Live_Regions"},"https://developer.mozilla.org/de/docs/Web/Accessibility/ARIA/ARIA_Live_Regions")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://tollwerk.de/projekte/tipps-techniken-inklusiv-barrierefrei/aria-live-regionen"},"https://tollwerk.de/projekte/tipps-techniken-inklusiv-barrierefrei/aria-live-regionen")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.barrierefreies-webdesign.de/knowhow/live-regions/attribute.html"},"https://www.barrierefreies-webdesign.de/knowhow/live-regions/attribute.html")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.digitala11y.com/aria-sort-properties/"},"https://www.digitala11y.com/aria-sort-properties/")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://dequeuniversity.com/library/aria/table-sortable"},"https://dequeuniversity.com/library/aria/table-sortable")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.maxability.co.in/2016/06/07/aria-sort-property/"},"https://www.maxability.co.in/2016/06/07/aria-sort-property/")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/API/Element/ariaSort"},"https://developer.mozilla.org/en-US/docs/Web/API/Element/ariaSort")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://tollwerk.de/projekte/tipps-techniken-inklusiv-barrierefrei/aria-live-regionen"},"https://tollwerk.de/projekte/tipps-techniken-inklusiv-barrierefrei/aria-live-regionen")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://stackoverflow.com/questions/1312236/"},"https://stackoverflow.com/questions/1312236/")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://dequeuniversity.com/rules/axe/3.5/scrollable-region-focusable"},"https://dequeuniversity.com/rules/axe/3.5/scrollable-region-focusable"))),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Property"),(0,i.kt)("th",{parentName:"tr",align:null},"Attribute"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Default"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"_caption")," ",(0,i.kt)("em",{parentName:"td"},"(required)")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"_caption")),(0,i.kt)("td",{parentName:"tr",align:null},"Gibt den  Titel oder eine Legende mit Erkl\xe4rungen zur Tabelle an."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"_data")," ",(0,i.kt)("em",{parentName:"td"},"(required)")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"_data")),(0,i.kt)("td",{parentName:"tr",align:null},"Gibt die Daten an, die f\xfcr die Erstellung der Tabelle verwendet werden."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"KoliBriDataType[]")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"_headers")," ",(0,i.kt)("em",{parentName:"td"},"(required)")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"_headers")),(0,i.kt)("td",{parentName:"tr",align:null},"Gibt die horizontalen und vertikalen Header f\xfcr die Tabelle an."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"string")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"{ horizontal?: KoliBriTableHeaderCell[][]")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"undefined; vertical?: KoliBriTableHeaderCell[][]")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"undefined; }")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"_minWidth")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"_min-width")),(0,i.kt)("td",{parentName:"tr",align:null},"Gibt an, die minimale Breite der Tabelle an."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"string")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"undefined")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"_pagination")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"_pagination")),(0,i.kt)("td",{parentName:"tr",align:null},"Gibt an, ob die Daten geteilt in Seiten angezeigt wird."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"boolean")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"string")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"undefined")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"{ _page: number; } & { _on?: KoliBriPaginationButtonCallbacks")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"undefined; _page?: number")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"undefined; _total?: number")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"undefined; _customClass?: string")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"undefined; _variant?: KoliBriButtonVariant")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"undefined; _boundaryCount?: number")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"undefined; _hasButtons?: boolean")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"Stringified<PaginationHasButton>")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"undefined; _pageSize?: number")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"undefined; _pageSizeOptions?: Stringified<number[]>")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"undefined; _siblingCount?: number")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"undefined; _tooltipAlign?: Alignment")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"undefined; }")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"undefined"))))),(0,i.kt)("h2",{id:"dependencies"},"Dependencies"),(0,i.kt)("h3",{id:"depends-on"},"Depends on"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"./button"},"kol-button")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"./pagination"},"kol-pagination"))),(0,i.kt)("h3",{id:"graph"},"Graph"),(0,i.kt)("mermaid",{value:"graph TD;\n  kol-table --\x3e kol-button\n  kol-table --\x3e kol-pagination\n  kol-button --\x3e kol-button-wc\n  kol-button-wc --\x3e kol-span-wc\n  kol-button-wc --\x3e kol-tooltip\n  kol-span-wc --\x3e kol-icon\n  kol-tooltip --\x3e kol-span-wc\n  kol-pagination --\x3e kol-button\n  kol-pagination --\x3e kol-select\n  kol-pagination --\x3e kol-button-wc\n  kol-select --\x3e kol-input\n  kol-input --\x3e kol-icon\n  kol-input --\x3e kol-button-wc\n  kol-input --\x3e kol-alert\n  kol-alert --\x3e kol-heading-wc\n  kol-alert --\x3e kol-button-wc\n  kol-alert --\x3e kol-icon\n  style kol-table fill:#f9f,stroke:#333,stroke-width:4px"}),(0,i.kt)("hr",null))}o.isMDXComponent=!0;var d=n(6096);const p={title:"Table",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die Table-Komponente.",tags:["Table","Beschreibung","Spezifikation","Beispiele"]},s=void 0,u={unversionedId:"components/table",id:"components/table",title:"Table",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die Table-Komponente.",source:"@site/docs/30-components/table.mdx",sourceDirName:"30-components",slug:"/components/table",permalink:"/docs/components/table",draft:!1,tags:[{label:"Table",permalink:"/docs/tags/table"},{label:"Beschreibung",permalink:"/docs/tags/beschreibung"},{label:"Spezifikation",permalink:"/docs/tags/spezifikation"},{label:"Beispiele",permalink:"/docs/tags/beispiele"}],version:"current",frontMatter:{title:"Table",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die Table-Komponente.",tags:["Table","Beschreibung","Spezifikation","Beispiele"]},sidebar:"tutorialSidebar",previous:{title:"Spin",permalink:"/docs/components/spin"},next:{title:"Tabs",permalink:"/docs/components/tabs"}},m={},k=[{value:"Beispiele",id:"beispiele",level:2},{value:"Datum in Spalte sortieren",id:"datum-in-spalte-sortieren",level:3},{value:"Render Cell",id:"render-cell",level:3}],c={toc:k},b="wrapper";function g(e){let{components:t,...n}=e;return(0,i.kt)(b,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(o,{mdxType:"Readme"}),(0,i.kt)("h2",{id:"beispiele"},"Beispiele"),(0,i.kt)("h3",{id:"datum-in-spalte-sortieren"},"Datum in Spalte sortieren"),(0,i.kt)(d._,{component:"table",sample:"sort-date",mdxType:"Configurator"}),(0,i.kt)("h3",{id:"render-cell"},"Render Cell"),(0,i.kt)(d._,{component:"table",sample:"render-cell",mdxType:"Configurator"}))}g.isMDXComponent=!0}}]);