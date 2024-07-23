"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[11476],{4460:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>h,contentTitle:()=>o,default:()=>x,frontMatter:()=>d,metadata:()=>c,toc:()=>u});var l=i(76776),t=i(108);function r(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.M)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("kol-alert",{_type:"warning",_variant:"card",children:(0,l.jsxs)(n.p,{children:[(0,l.jsx)("kol-badge",{_color:"#fb4509",_label:"Deprecated"})," KolTable ist veraltet, bitte stattdessen ",(0,l.jsx)("kol-link",{_label:"KolTableStateful",_href:"https://github.com/public-ui/kolibri/blob/develop/packages/components/src/components/table-stateless/readme.md"})," verwenden, die API und Funktionalit\xe4t sind identisch."]})}),"\n",(0,l.jsxs)(n.p,{children:["Die ",(0,l.jsx)(n.strong,{children:"Table"}),"-Komponente dient prim\xe4r der \xfcbersichtlichen Darstellung von Datenmengen. Dabei ist sie so ausgelegt, dass sie alle von den Daten abh\xe4ngige Werte automatisch ermittelt und die Tabelle entsprechend darstellt. Hierzu geh\xf6ren beispielsweise die optionalen Funktionalit\xe4ten Spaltensortierung oder Pagination."]}),"\n",(0,l.jsx)("kol-indented-text",{_summary:"Backend-seitige Pagination",children:(0,l.jsx)(n.p,{children:'Bei sehr gro\xdfen Datenmengen ist auch eine manuelle Nutzung der Table-Komponente m\xf6glich. Das bedeutet, dass die Tabelle seitenweise "manuell" bef\xfcllt wird. Hierzu kann einfach anstatt der Table-Pagination eine "eigene" Pagination unter der Tabelle mittels der Pagination-Komponente verwendet werden.'})}),"\n",(0,l.jsx)(n.h2,{id:"konstruktion",children:"Konstruktion"}),"\n",(0,l.jsx)(n.p,{children:"Die Table-Komponente ist so konstruiert, dass nicht der gesamte Tabellenaufbau im Markup selbst beschrieben werden muss. Wie genau die Tabelle Markup-spezifisch aufgebaut werden muss, um barrierefrei zu sein, \xfcbernimmt die Komponente selbst."}),"\n",(0,l.jsxs)(n.p,{children:["Dadurch, dass die Table-Komponente das valide und barrierefreie Markup dynamisch zusammenbaut, kann die komplexe Auszeichnung f\xfcr die assistive Systeme dem/der Entwickler",":in"," abgenommen werden."]}),"\n",(0,l.jsx)(n.h3,{id:"funktionalit\xe4ten",children:"Funktionalit\xe4ten"}),"\n",(0,l.jsx)(n.p,{children:"Die Table-Komponente unterst\xfctzt folgende Funktionalit\xe4ten:"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["Tabellenbeschreibung durch ein ",(0,l.jsx)(n.strong,{children:(0,l.jsx)(n.code,{children:"label"})}),"-Attribut."]}),"\n",(0,l.jsx)(n.li,{children:"Mehrzeilige Spalten\xfcberschriften in horizontaler oder vertikaler Richtung."}),"\n",(0,l.jsx)(n.li,{children:"Sortierfunktion f\xfcr entweder horizontale und vertikale Ausrichtung."}),"\n",(0,l.jsx)(n.li,{children:"Unterschiedliche Render-Funktion f\xfcr die Zellen."}),"\n",(0,l.jsx)(n.li,{children:"Pagination f\xfcr die Tabelle."}),"\n"]}),"\n",(0,l.jsxs)(n.p,{children:["Die Table-Komponente unterst\xfctzt folgende Funktionalit\xe4ten ",(0,l.jsx)(n.strong,{children:"nicht"}),":"]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Das Filtern der Tabelle ist aktuell nicht innerhalb der Tabelle vorgesehen."}),"\n",(0,l.jsx)(n.li,{children:"Das Ausw\xe4hlen von Zeilen ist aktuell in der Tabelle nicht vorgesehen."}),"\n"]}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsx)(n.p,{children:"Beides k\xf6nnte jedoch mittels der Render-Funktion umgesetzt werden."}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"pagination",children:"Pagination"}),"\n",(0,l.jsxs)(n.p,{children:["\xdcber das Attribut ",(0,l.jsx)(n.strong,{children:(0,l.jsx)(n.code,{children:"_pagination"})})," kann optional eine Vielzahl zus\xe4tzlicher Properties zur Steuerung der Pagination \xfcbergeben werden. Die genaue Beschreibung der Optionen ist auf der Seite ",(0,l.jsx)("kol-link",{_href:"/docs/components/pagination",_label:"/docs/components/pagination",_label:"Pagination"})," zu finden."]}),"\n",(0,l.jsx)(n.h4,{id:"kolibritableheaders",children:"KoliBriTableHeaders"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-ts",children:"{\n  horizontal: [\n    [\n      {\n        label: string,\n        key?: string,\n        colsSpan?: number,\n        rowSpan?: number,\n        useTdInsteadOfTh?: boolean,\n        render?: (data) => string,\n        sort?: (data) => data,\n      },\n      \u2026\n    ],\n    \u2026\n  ],\n  vertical: [\n    [\n      {\n        label: string,\n        key?: string,\n        colsSpan?: number,\n        rowSpan?: number,\n        useTdInsteadOfTh?: boolean,\n        render?: (data) => string,\n        sort?: (data) => data,\n      },\n      \u2026\n    ],\n    \u2026\n  ],\n};\n"})}),"\n",(0,l.jsx)(n.h3,{id:"code",children:"Code"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-html",children:'<kol-table _label="Tabellenbeschreibung" _headers=\'{"horizontal": [[{"label":"Montag","key":"montag"}]]}\' _pagination=\'[{"page":2}]\'></kol-table>\n'})}),"\n",(0,l.jsx)(n.h3,{id:"beispiel",children:"Beispiel"}),"\n",(0,l.jsx)("kol-table",{_label:"Nur Vertikal Header, Daten Vertikal, Pagination",_headers:'{"horizontal":[[{"label":"Montag","key":"montag"}]]}',_data:'[{"montag":"Zelle1"},{"montag":"Zelle2"}]',_pagination:'{"page":2}'}),"\n",(0,l.jsx)(n.h2,{id:"verwendung",children:"Verwendung"}),"\n",(0,l.jsx)(n.h3,{id:"sortierung",children:"Sortierung"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Zu jedem Header kann man eine Sortierfunktion definieren."}),"\n",(0,l.jsx)(n.li,{children:"Es ist exakt eine oder keine Sortierfunktion aktiviert."}),"\n",(0,l.jsx)(n.li,{children:"Aktuell wird nicht unterst\xfctzt, dass bei zweidimensionalen Headern, die Header der jeweils anderen Header-Seite mit sortiert werden. Bei der Anforderung der Sortierung empfehlen wir die Verwendung nur einer Header-Dimension (entweder horizontal oder vertikal)."}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"render-funktion",children:"Render Funktion"}),"\n",(0,l.jsxs)(n.p,{children:["Die ",(0,l.jsx)(n.code,{children:"render"})," Funktion kann auf verschiedene Arten wie folgt verwendet werden.",(0,l.jsx)(n.br,{}),"\n","Alle Methoden sind auch in diesem Beispiel demonstriert: ",(0,l.jsx)(n.a,{href:"https://github.com/public-ui/kolibri/blob/23ebb42d1ce3c8d1e4c74a5c7972842d5e4203fe/packages/samples/react/src/components/table/render-cell.tsx#L34",children:"render-cell.tsx"})]}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsx)(n.li,{children:"String R\xfcckgabewert:"}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-tsx",children:"{\n  render: (_el, cell) => `Index: ${cell.label}`,\n}\n"})}),"\n",(0,l.jsxs)(n.ol,{start:"2",children:["\n",(0,l.jsx)(n.li,{children:"Node mit textContent f\xfcllen"}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-tsx",children:"{\n  render: (el, cell) => {\n    el.textContent = `Index: ${cell.label}`;\n  },\n}\n"})}),"\n",(0,l.jsxs)(n.ol,{start:"3",children:["\n",(0,l.jsx)(n.li,{children:"Node mit innerHTML f\xfcllen - \u26a0\ufe0f Hierbei unbedingt darauf achten, Werte zu sanitizen, um XXS vermeiden."}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-tsx",children:"{\n  render: (el, cell) => {\n    el.innerHTML = `<strong>${cell.label}</strong>`;\n  },\n}\n"})}),"\n",(0,l.jsxs)(n.ol,{start:"4",children:["\n",(0,l.jsx)(n.li,{children:"React render-function verwenden"}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-tsx",children:'import { createReactRenderElement } from \'@public-ui/react\';\n{\n  render: (el) => {\n    getRoot(createReactRenderElement(el)).render(\n      <div>\n        <KolInputText _label="Input" />\n        <KolButton _label="Save" />\n      </div>,\n    );\n  },\n}\n'})}),"\n",(0,l.jsx)(n.h2,{id:"barrierefreiheit",children:"Barrierefreiheit"}),"\n",(0,l.jsx)(n.p,{children:"Bei der Table-Komponente werden zahlreiche Attribut-Definitionen dem Tabellen-Markup hinzugef\xfcgt, um die Screenreader bestm\xf6glich zu unterst\xfctzen."}),"\n",(0,l.jsxs)(n.p,{children:["Aktuell werden folgende Attribute von der Komponente verwaltet: ",(0,l.jsx)(n.code,{children:"role"}),", ",(0,l.jsx)(n.code,{children:"scope"})," und ",(0,l.jsx)(n.code,{children:"aria-\\*"}),"."]}),"\n",(0,l.jsxs)(n.p,{children:["Das hei\xdft beispielsweise, dass bei den Spalten\xfcberschriften automatisch entweder die Rolle ",(0,l.jsx)(n.code,{children:"colheader"})," oder ",(0,l.jsx)(n.code,{children:"rowheader"})," gesetzt wird. Dar\xfcber hinaus wird der Scope entweder auf ",(0,l.jsx)(n.code,{children:"col"}),"/",(0,l.jsx)(n.code,{children:"colgroup"})," oder ",(0,l.jsx)(n.code,{children:"row"}),"/",(0,l.jsx)(n.code,{children:"rowgroup"})," gesetzt. \xc4hnlich dieser Automatismen werden auch die ",(0,l.jsx)(n.code,{children:"aria-\\*"}),"-Attribute je nach Relevanz gesetzt."]}),"\n",(0,l.jsxs)(n.p,{children:["Warum die Tabelle einen ",(0,l.jsx)(n.strong,{children:"Tabindex"})," hat, wird auf der folgenden Webseite beschrieben: ",(0,l.jsx)("kol-link",{_href:"",_label:""}),(0,l.jsx)(n.a,{href:"https://dequeuniversity.com/rules/axe/3.5/scrollable-region-focusable",children:"https://dequeuniversity.com/rules/axe/3.5/scrollable-region-focusable"})]}),"\n",(0,l.jsx)(n.h2,{id:"links-und-referenzen",children:"Links und Referenzen"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)("kol-link",{_href:"https://www.w3.org/WAI/tutorials/tables/",_target:"_blank"}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)("kol-link",{_href:"https://www.barrierefreies-webdesign.de/knowhow/datentabellen/scope.html",_target:"_blank"}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)("kol-link",{_href:"https://developer.mozilla.org/de/docs/Web/Accessibility/ARIA/ARIA_Live_Regions",_target:"_blank"}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)("kol-link",{_href:"https://tollwerk.de/projekte/tipps-techniken-inklusiv-barrierefrei/aria-live-regionen",_target:"_blank"}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)("kol-link",{_href:"https://www.barrierefreies-webdesign.de/knowhow/live-regions/attribute.html",_target:"_blank"}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)("kol-link",{_href:"https://www.digitala11y.com/aria-sort-properties/",_target:"_blank"}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)("kol-link",{_href:"https://dequeuniversity.com/library/aria/table-sortable",_target:"_blank"}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)("kol-link",{_href:"https://www.maxability.co.in/2016/06/07/aria-sort-property/",_target:"_blank"}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)("kol-link",{_href:"https://developer.mozilla.org/en-US/docs/Web/API/Element/ariaSort",_target:"_blank"}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)("kol-link",{_href:"https://tollwerk.de/projekte/tipps-techniken-inklusiv-barrierefrei/aria-live-regionen",_target:"_blank"}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)("kol-link",{_href:"https://stackoverflow.com/questions/1312236/",_target:"_blank"}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)("kol-link",{_href:"https://dequeuniversity.com/rules/axe/3.5/scrollable-region-focusable",_target:"_blank"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"[DEPRECATED]"})," Use KolTableStateful instead."]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"Property"}),(0,l.jsx)(n.th,{children:"Attribute"}),(0,l.jsx)(n.th,{children:"Description"}),(0,l.jsx)(n.th,{children:"Type"}),(0,l.jsx)(n.th,{children:"Default"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"_allowMultiSort"})}),(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"_allow-multi-sort"})}),(0,l.jsx)(n.td,{children:"Defines whether to allow multi sort."}),(0,l.jsxs)(n.td,{children:[(0,l.jsx)(n.code,{children:"boolean"})," | ",(0,l.jsx)(n.code,{children:"undefined"})]}),(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"undefined"})})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsxs)(n.td,{children:[(0,l.jsx)(n.code,{children:"_data"})," ",(0,l.jsx)(n.em,{children:"(required)"})]}),(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"_data"})}),(0,l.jsx)(n.td,{children:"Defines the primary table data."}),(0,l.jsxs)(n.td,{children:[(0,l.jsx)(n.code,{children:"KoliBriTableDataType[]"})," | ",(0,l.jsx)(n.code,{children:"string"})]}),(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"undefined"})})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"_dataFoot"})}),(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"_data-foot"})}),(0,l.jsx)(n.td,{children:"Defines the data for the table footer."}),(0,l.jsxs)(n.td,{children:[(0,l.jsx)(n.code,{children:"KoliBriTableDataType[]"})," | ",(0,l.jsx)(n.code,{children:"string"})," | ",(0,l.jsx)(n.code,{children:"undefined"})]}),(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"undefined"})})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsxs)(n.td,{children:[(0,l.jsx)(n.code,{children:"_headers"})," ",(0,l.jsx)(n.em,{children:"(required)"})]}),(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"_headers"})}),(0,l.jsx)(n.td,{children:"Defines the horizontal and vertical table headers."}),(0,l.jsxs)(n.td,{children:[(0,l.jsx)(n.code,{children:"string"})," | ",(0,l.jsx)(n.code,{children:"{ horizontal?: KoliBriTableHeaderCellWithLogic[][]"})," | ",(0,l.jsx)(n.code,{children:"undefined; vertical?: KoliBriTableHeaderCellWithLogic[][]"})," | ",(0,l.jsx)(n.code,{children:"undefined; }"})]}),(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"undefined"})})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsxs)(n.td,{children:[(0,l.jsx)(n.code,{children:"_label"})," ",(0,l.jsx)(n.em,{children:"(required)"})]}),(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"_label"})}),(0,l.jsx)(n.td,{children:"Defines the visible or semantic label of the component (e.g. aria-label, label, headline, caption, summary, etc.)."}),(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"string"})}),(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"undefined"})})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"_minWidth"})}),(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"_min-width"})}),(0,l.jsx)(n.td,{children:"Defines the table min-width."}),(0,l.jsxs)(n.td,{children:[(0,l.jsx)(n.code,{children:"string"})," | ",(0,l.jsx)(n.code,{children:"undefined"})]}),(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"undefined"})})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"_on"})}),(0,l.jsx)(n.td,{children:"--"}),(0,l.jsx)(n.td,{children:"Defines the callback functions for table events."}),(0,l.jsxs)(n.td,{children:[(0,l.jsx)(n.code,{children:"undefined"})," | ",(0,l.jsx)(n.code,{children:"{ onSelectionChange?: EventValueOrEventCallback<Event, StatefulSelectionChangeEventPayload>"})," | ",(0,l.jsx)(n.code,{children:"undefined; }"})]}),(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"undefined"})})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"_pagination"})}),(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"_pagination"})}),(0,l.jsx)(n.td,{children:"Defines whether to show the data distributed over multiple pages."}),(0,l.jsxs)(n.td,{children:[(0,l.jsx)(n.code,{children:"boolean"})," | ",(0,l.jsx)(n.code,{children:"string"})," | ",(0,l.jsx)(n.code,{children:"undefined"})," | ",(0,l.jsx)(n.code,{children:"{ _page: number; } & { _on?: KoliBriPaginationButtonCallbacks"})," | ",(0,l.jsx)(n.code,{children:"undefined; _page?: number"})," | ",(0,l.jsx)(n.code,{children:"undefined; _max?: number"})," | ",(0,l.jsx)(n.code,{children:"undefined; _boundaryCount?: number"})," | ",(0,l.jsx)(n.code,{children:"undefined; _hasButtons?: boolean"})," | ",(0,l.jsx)(n.code,{children:"Stringified<PaginationHasButton>"})," | ",(0,l.jsx)(n.code,{children:"undefined; _pageSize?: number"})," | ",(0,l.jsx)(n.code,{children:"undefined; _pageSizeOptions?: Stringified<number[]>"})," | ",(0,l.jsx)(n.code,{children:"undefined; _siblingCount?: number"})," | ",(0,l.jsx)(n.code,{children:"undefined; _customClass?: string"})," | ",(0,l.jsx)(n.code,{children:"undefined; _label?: string"})," | ",(0,l.jsx)(n.code,{children:"undefined; _tooltipAlign?: AlignPropType"})," | ",(0,l.jsx)(n.code,{children:"undefined; }"})]}),(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"undefined"})})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"_paginationPosition"})}),(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"_pagination-position"})}),(0,l.jsx)(n.td,{children:"Controls the position of the pagination."}),(0,l.jsxs)(n.td,{children:[(0,l.jsx)(n.code,{children:'"both"'})," | ",(0,l.jsx)(n.code,{children:'"bottom"'})," | ",(0,l.jsx)(n.code,{children:'"top"'})," | ",(0,l.jsx)(n.code,{children:"undefined"})]}),(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"'bottom'"})})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"_selection"})}),(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"_selection"})}),(0,l.jsx)(n.td,{children:"Defines how rows can be selected and the current selection."}),(0,l.jsxs)(n.td,{children:[(0,l.jsx)(n.code,{children:"string"})," | ",(0,l.jsx)(n.code,{children:"undefined"})," | ",(0,l.jsx)(n.code,{children:"({ label: (row: KoliBriTableDataType) => string; keyPropertyName?: string"})," | ",(0,l.jsx)(n.code,{children:"undefined; selectedKeys?: string[]"})," | ",(0,l.jsx)(n.code,{children:"undefined; })"})]}),(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"undefined"})})]})]})]}),"\n",(0,l.jsx)(n.hr,{})]})}function s(e={}){const{wrapper:n}={...(0,t.M)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(r,{...e})}):r(e)}i(37704);var a=i(54592);const d={title:"Table",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die Table-Komponente.",tags:["Table","Beschreibung","Spezifikation","Beispiele"]},o=void 0,c={id:"components/table",title:"Table",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die Table-Komponente.",source:"@site/versioned_docs/version-2.1/30-components/table.mdx",sourceDirName:"30-components",slug:"/components/table",permalink:"/en/docs/components/table",draft:!1,unlisted:!1,tags:[{inline:!0,label:"Table",permalink:"/en/docs/tags/table"},{inline:!0,label:"Beschreibung",permalink:"/en/docs/tags/beschreibung"},{inline:!0,label:"Spezifikation",permalink:"/en/docs/tags/spezifikation"},{inline:!0,label:"Beispiele",permalink:"/en/docs/tags/beispiele"}],version:"2.1",frontMatter:{title:"Table",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die Table-Komponente.",tags:["Table","Beschreibung","Spezifikation","Beispiele"]},sidebar:"tutorialSidebar",previous:{title:"Split-Button",permalink:"/en/docs/components/split-button"},next:{title:"Tabs",permalink:"/en/docs/components/tabs"}},h={},u=[{value:"Konstruktion",id:"konstruktion",level:2},{value:"Funktionalit\xe4ten",id:"funktionalit\xe4ten",level:3},{value:"Pagination",id:"pagination",level:3},{value:"KoliBriTableHeaders",id:"kolibritableheaders",level:4},{value:"Code",id:"code",level:3},{value:"Beispiel",id:"beispiel",level:3},{value:"Verwendung",id:"verwendung",level:2},{value:"Sortierung",id:"sortierung",level:3},{value:"Render Funktion",id:"render-funktion",level:3},{value:"Barrierefreiheit",id:"barrierefreiheit",level:2},{value:"Links und Referenzen",id:"links-und-referenzen",level:2},{value:"Properties",id:"properties",level:2},{value:"Live-Editor",id:"live-editor",level:2}];function b(e){const n={h2:"h2",...(0,t.M)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(s,{}),"\n",(0,l.jsx)(n.h2,{id:"live-editor",children:"Live-Editor"}),"\n",(0,l.jsx)(a.o,{component:"table"})]})}function x(e={}){const{wrapper:n}={...(0,t.M)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(b,{...e})}):b(e)}},37704:(e,n,i)=>{i.d(n,{Q:()=>o});var l=i(64992),t=i(80924),r=i(76776);const s=function(e,n,i,l,t){return void 0===t&&(t="editor"),`${e}&module=${l}&initialpath=%23%2F${n}%2F${i}&view=${t}`},a={width:"100%",height:"500px",border:"0",overflow:"hidden"},d=e=>{let{url:n}=e;return(0,r.jsxs)("div",{className:"m-2",children:[(0,r.jsx)("iframe",{src:n,style:a,title:"kolibri-public-ui-code-samples",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}),(0,r.jsx)(l.GQ,{_href:n,_label:"",_target:"codesandbox",children:(0,r.jsx)("img",{alt:"CodeSandbox-Schalter",src:"https://codesandbox.io/static/img/play-codesandbox.svg"})})]})},o=e=>{let{component:n,sample:i}=e;const[o,c]=(0,t.useState)("Preview"),h="https://codesandbox.io/embed/kolibri-public-ui-react-samples-w5u37c?fontsize=14&hidenavigation=1&autoresize=1&theme=dark",u=`%2Fsrc%2Fsamples%2F${n}%2F${i}`,b={angular:`${u}.html`,react:`${u}.tsx`,vue:`${u}.vue`,webcomponent:`${u}.html`},x=`/sample-react/#/${n}/${i}?hideMenus`,p={onSelect:(e,n)=>{switch(n){case 1:c((()=>"Angular"));break;case 2:c((()=>"React"));break;case 3:c((()=>"Vue"));break;case 4:c((()=>"Web Component"));break;default:c((()=>"Preview"))}}};return(0,r.jsxs)(l._,{className:"w-full",_label:"Code-Beispiel",_on:p,_tabs:[{_label:"Vorschau"},{_disabled:!0,_label:"Angular"},{_label:"React"},{_disabled:!0,_label:"Vue"},{_disabled:!0,_label:"Web Component"}],children:[(0,r.jsx)("div",{children:"Preview"===o&&(0,r.jsx)("iframe",{src:x,style:a,title:"kolibri-public-ui-code-samples",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"})}),(0,r.jsx)("div",{children:"Angular"===o&&(0,r.jsx)(d,{url:s(h,n,i,b.angular)})}),(0,r.jsx)("div",{children:"React"===o&&(0,r.jsx)(d,{url:s(h,n,i,b.react)})}),(0,r.jsx)("div",{children:"Vue"===o&&(0,r.jsx)(d,{url:s(h,n,i,b.vue)})}),(0,r.jsx)("div",{children:"Web Component"===o&&(0,r.jsx)(d,{url:s(h,n,i,b.webcomponent)})})]})}},54592:(e,n,i)=>{i.d(n,{o:()=>k});var l=i(592),t=i(64992),r=i(80924),s=i(73700),a=i(76776);function d(e){const{label:n,name:i,update:l,value:s}=e;return(0,r.useEffect)((()=>{s||l(i,"#000000")}),[]),(0,a.jsx)(t.eK,{_label:"",_on:{onInput:(e,n)=>l(i,n)},_value:s,children:(0,a.jsx)("span",{slot:"expert",children:n})})}function o(e){const{attribute:n,label:i,update:l}=e,[s,d]=(0,r.useState)(""),[o,c]=(0,r.useState)(""),[h,u]=(0,r.useState)(""),[b,x]=(0,r.useState)("");let p=!1,j=!1,m=!1,g=!1;n.type.includes("KoliBriAllIcon")?(p=!0,j=!0,m=!0,g=!0):(n.type.includes("KoliBriVerticalIcon")&&(m=!0,g=!0),n.type.includes("KoliBriHorizontalIcon")&&(p=!0,j=!0)),(0,r.useEffect)((()=>{if(!s||o||h||b){const e={};s&&(e.left=`codicon codicon-${s}`),o&&(e.right=`codicon codicon-${o}`),h&&(e.top=`codicon codicon-${h}`),b&&(e.bottom=`codicon codicon-${b}`),Object.keys(e).length&&l(n.name,JSON.stringify(e))}else l(n.name,`codicon codicon-${s}`)}),[s,o,h,b]);const f=["home","arrow-up","arrow-right","arrow-down","arrow-left"];return(0,a.jsxs)("div",{children:[i,p?(0,a.jsx)(t.Si,{_label:"Links",children:(0,a.jsx)("div",{className:"flex flex-wrap gap-2 p-2",children:f.map((e=>(0,a.jsx)(t.qC,{_icons:`codicon codicon-${e}`,_hideLabel:!0,_label:"",_on:{onClick:()=>d(e)}},e)))})}):"",j?(0,a.jsx)(t.Si,{_label:"Rechts",children:(0,a.jsx)("div",{className:"flex flex-wrap gap-2 p-2",children:f.map((e=>(0,a.jsx)(t.qC,{_icons:`codicon codicon-${e}`,_hideLabel:!0,_label:"",_on:{onClick:()=>c(e)}},e)))})}):"",m?(0,a.jsx)(t.Si,{_label:"Oben",children:(0,a.jsx)("div",{className:"flex flex-wrap gap-2 p-2",children:f.map((e=>(0,a.jsx)(t.qC,{_icons:`codicon codicon-${e}`,_hideLabel:!0,_label:"",_on:{onClick:()=>u(e)}},e)))})}):"",g?(0,a.jsx)(t.Si,{_label:"Unten",children:(0,a.jsx)("div",{className:"flex flex-wrap gap-2 p-2",children:f.map((e=>(0,a.jsx)(t.qC,{_icons:`codicon codicon-${e}`,_hideLabel:!0,_label:"",_on:{onClick:()=>x(e)}},e)))})}):""]})}function c(e){const{name:n,label:i,types:l,update:r,value:s}=e,d=[];function o(e){return{label:e,value:e}}return l.includes("undefined")?(d.push({label:"-",value:void 0}),d.push(...l.filter((e=>"undefined"!==e)).map(o))):d.push(...l.filter((e=>"undefined"!==e)).map(o)),(0,a.jsx)(t.qy,{className:"my-2",_label:"",_options:JSON.stringify(d),_on:{onInput:(e,i)=>r(n,i[0])},_value:s?[s]:void 0,children:(0,a.jsx)("span",{slot:"expert",children:i})})}function h(e){const{attribute:n,update:i,value:l}=e,s=(0,r.useMemo)((()=>{let e=n.type.replace(/\\?"/g,"").split(" | ");return e=e.filter((e=>"KoliBriAllIcon ignorieren"!==e)),1===e.length?e[0]:e.includes("string")?"string":e.includes("number")?"number":e.includes("boolean")?"boolean":""}),[n]),h=(0,r.useMemo)((()=>{const e=n.type.split(" | ").map((e=>e.replace(/\\?"/g,""))),r=(0,a.jsx)(t.s1,{_label:n.description,children:n.name});switch(n.name){case"_color":return(0,a.jsx)(d,{name:n.name,label:r,update:i,value:l});case"_icons":return(0,a.jsx)(o,{attribute:n,label:r,update:i,value:l});default:switch(s){case"string":return(0,a.jsx)(t.Uh,{className:"my-2",_label:"",_on:{onInput:(e,l)=>i(n.name,l)},_value:l||"",children:(0,a.jsx)("span",{slot:"expert",children:r})});case"number":return(0,a.jsx)(t.QL,{className:"my-2",_label:"",_on:{onInput:(e,l)=>i(n.name,l)},_value:l,children:(0,a.jsx)("span",{slot:"expert",children:r})});case"boolean":return(0,a.jsx)(t.Q7,{className:"my-2",_checked:!0===l,_label:"",_on:{onInput:(e,l)=>i(n.name,l)},_variant:"switch",_value:!0,children:(0,a.jsx)("span",{slot:"expert",children:r})});default:return e.length>1?(0,a.jsx)(c,{label:r,name:n.name,types:e,update:i,value:l}):(0,a.jsxs)("p",{children:["Attribut: '",n.name,"'",(0,a.jsx)("br",{}),"Typ: '",n.type,"'"]})}}}),[n,l]);return(0,a.jsx)(a.Fragment,{children:h})}var u=i(63136),b=i(28256),x=i(39452),p=i.n(x);function j(e){const{tag:n,params:i}=e,l=Object.entries(i).filter((e=>"defaultValues"!==e[0]));let t="";const s=(0,r.useMemo)((()=>{let e="";return l.filter((e=>e[0].startsWith("slot-"))).forEach((n=>{const i=n[1],l=n[0].split("-")[1];if(i)if(i.match(/^<.*?>/)?.length){const n=i.indexOf(">");e+=i.substring(0,n)+` slot="${l}"`+i.substring(n)}else e+=`<div slot="${l}">${i}</div>`})),e}),[i]),d=l.filter((e=>!e[0].startsWith("slot-"))).filter((e=>!i.defaultValues.includes(e[0])));for(const[r,a]of d)if(a){let e="";switch(typeof a){case"string":e=` ${r}="${a.replace(/"/g,"'")}"`;break;case"number":e=` ${r}="${a.toString()}"`;break;case"boolean":e=a?` ${r}`:"";break;case"object":e=` ${r}="${JSON.stringify(a)}"`;break;default:e="Never give up hope, one day everything will be fixed."}t+=e}const o=`<kol-${n}${t}>${s}</kol-${n}>`;let c;try{c=(0,b.format)(o,{plugins:[p()],printWidth:80}).replace(/;\n$/,"")}catch(h){c=`\x3c!-- Formatter-Error: Slot-Markup is not valid HTML for formatting. --\x3e\n${o}`}return(0,a.jsx)("div",{className:"h-48 rounded-md overflow-hidden",children:(0,a.jsx)(u.cp,{defaultLanguage:"html",height:"100%",options:{automaticLayout:!0,fontSize:16,lineNumbers:"off",readOnly:!0},value:c})})}function m(e){const n=Object.fromEntries(Object.entries(e.params).filter((e=>{let[n]=e;return!n.startsWith("slot-")}))),i=Object.entries(e.params).filter((e=>{let[n]=e;return n.startsWith("slot-")})),l={abbr:t.s1,accordion:t.IP,alert:t.mW,avatar:t.aq,badge:t.cX,breadcrumb:t.If,button:t.qC,"button-group":t.Os,"button-link":t.u_,card:t.Yh,details:t.Si,form:t.OO,heading:t.ch,icon:t.SA,image:t.iu,"indented-text":t.MV,"input-checkbox":t.Q7,"input-color":t.eK,"input-date":t.QZ,"input-email":t.kN,"input-file":t.Ex,"input-number":t.QL,"input-password":t.EH,"input-radio":t.wJ,"input-range":t.Ef,"input-text":t.Uh,kolibri:t.aY,link:t.GQ,"link-button":t._k,"link-group":t.O_,logo:t.ae,modal:t.cT,nav:t.Y4,pagination:t.kj,progress:t.O0,quote:t.SY,select:t.qy,"skip-nav":t.Ig,spin:t.kP,"split-button":t.a,symbol:t.OM,table:t.Y9,tabs:t._,textarea:t.DG,version:t.k1}[e.tag];return l?(0,a.jsx)(l,{...n,children:i.map((e=>(0,a.jsx)("div",{slot:e[0].replace("slot-","").replace("default",""),dangerouslySetInnerHTML:{__html:e[1]}},e[0])))}):(0,a.jsx)("div",{children:"Tag not implemented"})}function g(e){const{description:n,name:i,update:l,value:t}=e;return(0,a.jsxs)("div",{className:"bg-gray-100 my-2 rounded-lg p-2 border border-gray-300 border-solid",children:[(0,a.jsx)("b",{children:i||"default"}),": ",n,(0,a.jsx)("br",{}),(0,a.jsx)(u.GW,{defaultLanguage:"html",height:"5em",onChange:e=>l(`slot-${i}`,e||""),options:{automaticLayout:!0,fontSize:16,lineNumbers:"off"},value:t})]})}const f=["_smart-button","_icon-align"],_={abbr:{"slot-default":"Abbr"},accordion:{"slot-default":"Accordion content"},tabs:{_tabs:'[{"_label":"Tab 1"},{"_label":"Tab 2", "_on": {"onClose": true} },{"_label":"Tab 3"}]'},breadcrumb:{_links:"[{'_label':'Startseite','_href':'#/'},{'_label':'Unterseite der Startseite','_href':'#/unterseite'},{'_label':'Unterseite der Unterseite','_href':'#/unterseite/unterseite'}]"},form:{"_required-text":"Bitte alle Felder ausf\xfcllen."},image:{_src:"https://placehold.co/100x100/cc006e/white"},"link-group":{_links:"[{'_label':'Startseite','_href':'#/'},{'_label':'Unterseite der Startseite','_href':'#/unterseite'},{'_label':'Unterseite der Unterseite','_href':'#/unterseite/unterseite'}]"},nav:{_links:"[{'_label':'Startseite','_href':'#/'},{'_label':'Unterseite der Startseite','_href':'#/unterseite'},{'_label':'Unterseite der Unterseite','_href':'#/unterseite/unterseite'}]"},pagination:{_total:"100",_page:"6"},quote:{_quote:"Hello World"},select:{_options:"[{'label':'Herr','value':0},{'label':'Frau','value':1}]"},"skip-nav":{_links:"[{'_label':'Navigation','_href':'#nav'},{'_label':'Inhalt','_href':'#main'},{'_label':'Kontakt','_href':'#kontakt'},{'_label':'Links','_href':'#links'}]"},table:{_headers:'{"horizontal":[[{"label":"Montag","key":"montag"}]]}',_data:'[{"montag":"Zelle1"},{"montag":"Zelle2"}]',_pagination:'{"page":2}'}};function k(e){const[n,i]=(0,r.useState)(function(){const e={};return Object.values(l.Q).forEach((n=>{const i=n.name.replace("kol-","");e[i]={defaultValues:[]},n.attributes.forEach((n=>{void 0!==n.defaultValue&&(e[i][n.name]=n.defaultValue.replace(/'/g,""),e[i].defaultValues.push(n.name)),void 0!==_[i]?.[n.name]&&(e[i][n.name]=_[i][n.name])})),n.slots.forEach((n=>{const l=`slot-${n.name||"default"}`,t=_[i]?.[l];t&&(e[i][l]=t)}))})),e}()),[d,o]=(0,r.useState)("badge");(0,r.useEffect)((()=>{e.component&&o(e.component.replace("kol-",""))}),[e.component]),(0,r.useEffect)((()=>{!!l.Q.find((e=>e.name===`kol-${d}`))?.attributes.find((e=>"_label"===e.name))&&!n[d]?._label&&u("_label","Label-Text");!!l.Q.find((e=>e.name===`kol-${d}`))?.attributes.find((e=>"_heading"===e.name))&&!n[d]?._heading&&u("_heading","Heading-Text")}),[d]);const c=(0,r.useMemo)((()=>n[d]||{}),[n,d]);function u(e,n){i((i=>{const l={...i[d],[e]:n,defaultValues:i[d].defaultValues.filter((n=>n!==e))};return{...i,[d]:l}}))}const b=Object.values(l.Q).find((e=>e.name===`kol-${d}`));return(0,a.jsx)(s.c,{children:()=>(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.cX,{class:"mb-2",_label:"Beta",_color:"#b00"}),(0,a.jsxs)("div",{className:"grid lg:grid-cols-3 gap-2",children:[(0,a.jsxs)(t._,{className:"col-span-2",_label:"Wechselnavigation zwischen Viewer und Code",_tabs:[{_label:"Viewer"},{_label:"Code"}],children:[(0,a.jsx)("div",{className:"p-2",children:(0,a.jsx)(m,{tag:d,params:c})}),(0,a.jsx)("div",{className:"lg:col-span-2",children:(0,a.jsx)(j,{params:c,tag:d})})]}),(0,a.jsxs)("div",{className:"grid gap-4 p-2 border-0 border-l border-solid",children:[(0,a.jsx)(t.ch,{_level:3,_label:"Konfigurator"}),(0,a.jsxs)("div",{children:[(0,a.jsx)(t.ch,{_level:4,_label:"Properties"}),(0,a.jsxs)("div",{className:"max-h-96 p-2 overflow-auto mb-4",children:[b&&b.attributes.map((e=>(0,a.jsx)(a.Fragment,{children:!f.includes(e.name)&&!e.description.startsWith("Deprecated:")&&(0,a.jsx)(h,{attribute:e,update:u,value:c[e.name]},e.name)}))),b&&0===b.attributes.length&&(0,a.jsx)("span",{className:"text-gray-500",children:"Keine Properties vorhanden"})]}),(0,a.jsx)(t.ch,{_level:4,_label:"Slots"}),(0,a.jsxs)("div",{className:"max-h-56 p-2 overflow-auto",children:[b&&b.slots.map((e=>(0,a.jsx)(g,{description:e.description,name:e.name||"default",update:u,value:c["slot-"+(e.name||"default")]},e.name))),b&&0===b.slots.length&&(0,a.jsx)("span",{className:"text-gray-500",children:"Keine Slots vorhanden"})]})]})]})]})]})})}}}]);