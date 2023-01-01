"use strict";(self.webpackChunk_public_ui_docusaurus=self.webpackChunk_public_ui_docusaurus||[]).push([[6940],{9613:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var a=n(9496);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var d=a.createContext({}),u=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(d.Provider,{value:t},e.children)},k="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,d=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),k=u(n),s=l,g=k["".concat(d,".").concat(s)]||k[s]||m[s]||r;return n?a.createElement(g,i(i({ref:t},p),{},{components:n})):a.createElement(g,i({ref:t},p))}));function g(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,i=new Array(r);i[0]=s;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o[k]="string"==typeof e?e:l,i[1]=o;for(var u=2;u<r;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},1703:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>k,frontMatter:()=>r,metadata:()=>o,toc:()=>u});var a=n(5882),l=(n(9496),n(9613));const r={},i="Pagination",o={unversionedId:"components/pagination/readme",id:"components/pagination/readme",title:"Pagination",description:"Mit Hilfe der Paginierung-Komponente lassen sich umfangreiche Inhalte auf der Seite",source:"@site/docs/30-components/pagination/readme.md",sourceDirName:"30-components/pagination",slug:"/components/pagination/",permalink:"/docs/components/pagination/",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/30-components/pagination/readme.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Nav",permalink:"/docs/components/nav/"},next:{title:"Progress",permalink:"/docs/components/progress/"}},d={},u=[{value:"Konstruktion",id:"konstruktion",level:2},{value:"Code",id:"code",level:3},{value:"Beispiel",id:"beispiel",level:3},{value:"Verwendung",id:"verwendung",level:2},{value:"Anwendungsf\xe4lle",id:"anwendungsf\xe4lle",level:3},{value:"Barrierefreiheit",id:"barrierefreiheit",level:2},{value:"Properties",id:"properties",level:2},{value:"Dependencies",id:"dependencies",level:2},{value:"Used by",id:"used-by",level:3},{value:"Depends on",id:"depends-on",level:3},{value:"Graph",id:"graph",level:3}],p={toc:u};function k(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"pagination"},"Pagination"),(0,l.kt)("p",null,"Mit Hilfe der ",(0,l.kt)("b",null,"Paginierung-Komponente")," lassen sich umfangreiche Inhalte auf der Seite\nin handliche Abschnitte unterteilen. Diese k\xf6nnen dann \xfcber die Paginierung der Reihe nach\ndurchlaufen werden."),(0,l.kt)("h2",{id:"konstruktion"},"Konstruktion"),(0,l.kt)("h3",{id:"code"},"Code"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},'<div>\n    <kol-pagination _total="100" _page="6"></kol-pagination>\n    <kol-pagination _total="100" _page="6" _sibling-count="2"></kol-pagination>\n    <kol-pagination _total="100" _page="6" _sibling-count="0" _boundary-count="2"></kol-pagination>\n</div>\n')),(0,l.kt)("h3",{id:"beispiel"},"Beispiel"),(0,l.kt)("div",{class:"grid gap-2"},(0,l.kt)("kol-heading",{_level:"3"},"Standardausgabe nur mit aktuellem Element"),(0,l.kt)("kol-pagination",{_total:"100",_page:"6"}),(0,l.kt)("kol-heading",{_level:"3"},"Ausgabe 2 Elemente links und rechts dem aktuellen Element (_sibling)"),(0,l.kt)("kol-pagination",{_total:"100",_page:"6","_sibling-count":"2"}),(0,l.kt)("kol-heading",{_level:"3"},"Ausgabe 2 Elemente links und rechts (_boundary-count)"),(0,l.kt)("kol-pagination",{_total:"100",_page:"6","_sibling-count":"0","_boundary-count":"2"})),(0,l.kt)("h2",{id:"verwendung"},"Verwendung"),(0,l.kt)("p",null,"Die Pagination-Komponente kann \xfcber Ihre Properties konfiguriert werden."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Die Property ",(0,l.kt)("inlineCode",{parentName:"li"},"_total")," bestimmt die Anzahl der Elemente.\nOhne weitere Properties werden immer das erste und die letzte Element angezeigt, die dazwischen liegenden durch Punkte symbolisiert.",(0,l.kt)("br",null)),(0,l.kt)("li",{parentName:"ul"},"\xdcber die Property ",(0,l.kt)("inlineCode",{parentName:"li"},"boundary-count")," wird die Anzahl von Elementen bestimmt, die in der Pagination-Komponente rechts und links angezeigt werden, w\xe4hrend die \xfcbrigen Elemente durch Punkte symbolisiert werden. Die Einstellung ",(0,l.kt)("inlineCode",{parentName:"li"},"boundary-count")," = 2 und ",(0,l.kt)("inlineCode",{parentName:"li"},"_count")," = 10 h\xe4tte zur Folge, das links die Elemente 1 und 2 und rechts die Elemente 9 und 10 angezeigt werden, w\xe4hrend die Elemente 3 bis 8 durch Punkte symbolisiert werden.",(0,l.kt)("br",null)),(0,l.kt)("li",{parentName:"ul"},"Die Property ",(0,l.kt)("inlineCode",{parentName:"li"},"_page")," legt das gerade aktive Element fest. Dieses wird farblich hervorgehoben dargestellt."),(0,l.kt)("li",{parentName:"ul"},"\xdcber die Property ",(0,l.kt)("inlineCode",{parentName:"li"},"_sibling-count")," kann festgelegt werden, wie viele Elemente links und rechts des aktuellen Elements angezeigt werden sollen. Der Wert 2 h\xe4tte also zur Folge, da\xdf zwei Elemente links und rechts des\naktuellen Elements angezeigt werden.")),(0,l.kt)("h3",{id:"anwendungsf\xe4lle"},"Anwendungsf\xe4lle"),(0,l.kt)("p",null,"Die ",(0,l.kt)("strong",{parentName:"p"},"Pagination"),"-Komponente kann auf vielf\xe4ltige Art eingesetzt werden. Insbesondere dort, wo\nauf einer Inhaltsseite umfangreiche Inhalte dargestellt werden sollen, kann sie zur Verbesserung der Struktur und \xdcbersichtlichkeit eingesetzt werden.",(0,l.kt)("br",null),"\nKlassische Anwendungsbereiche einer Paginierung sind z.B. Blog-\xe4hnliche Inhalte oder auch listenartige Layouts, wie z.B. Tabellen. Auch f\xfcr bestimmte Navigationsaufgaben innerhalb einer Seite kann die Paginierung gut verwendet werden."),(0,l.kt)("h2",{id:"barrierefreiheit"},"Barrierefreiheit"),(0,l.kt)("h2",{id:"properties"},"Properties"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Property"),(0,l.kt)("th",{parentName:"tr",align:null},"Attribute"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_boundaryCount")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_boundary-count")),(0,l.kt)("td",{parentName:"tr",align:null},"Gibt an, wie viele Seiten neben den am Rand liegenden Pfeil-Schaltern angezeigt werden sollen."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"number \\| undefined")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"1"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_customClass")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_custom-class")),(0,l.kt)("td",{parentName:"tr",align:null},"Gibt an, welche Custom-Class \xfcbergeben werden soll, wenn ","_",'variant="custom" gesetzt ist.'),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string \\| undefined")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_hasButtons")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_has-buttons")),(0,l.kt)("td",{parentName:"tr",align:null},"Gibt an, welche Sprung-Schalter sichtbar sein sollen."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"boolean \\| string \\| undefined \\| { first: boolean; last: boolean; next: boolean; previous: boolean; }")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_on")," ",(0,l.kt)("em",{parentName:"td"},"(required)")),(0,l.kt)("td",{parentName:"tr",align:null},"--"),(0,l.kt)("td",{parentName:"tr",align:null},"Gibt an, auf welche Callback-Events reagiert werden."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"{ onChangePage?: EventValueCallback<Event, number> \\| undefined; onChangePageSize?: EventValueCallback<Event, number> \\| undefined; onClick?: EventValueCallback<Event, number> \\| undefined; }")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_page")," ",(0,l.kt)("em",{parentName:"td"},"(required)")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_page")),(0,l.kt)("td",{parentName:"tr",align:null},"Gibt an, welche Seite aktuell ausgew\xe4hlt ist."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"number")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_pageSize")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_page-size")),(0,l.kt)("td",{parentName:"tr",align:null},"Gibt an, wie viele Eintr\xe4ge pro Seite angezeigt werden."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"number")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"1"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_pageSizeOptions")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_page-size-options")),(0,l.kt)("td",{parentName:"tr",align:null},"Gibt an, welche Optionen f\xfcr die Seitenl\xe4nge angeboten werden."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"number[] \\| string")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"[]"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_siblingCount")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_sibling-count")),(0,l.kt)("td",{parentName:"tr",align:null},"Gibt an, wie viele Seiten neben dem aktuell ausgew\xe4hlten Seite angezeigt werden."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"number \\| undefined")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"1"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_tooltipAlign")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_tooltip-align")),(0,l.kt)("td",{parentName:"tr",align:null},"Gibt an, ob der Tooltip oben, rechts, unten oder links angezeigt werden."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'"bottom" \\| "left" \\| "right" \\| "top" \\| undefined')),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"'top'"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_total")," ",(0,l.kt)("em",{parentName:"td"},"(required)")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_total")),(0,l.kt)("td",{parentName:"tr",align:null},"Gibt an, wie viele Eintr\xe4ge mit der Pagination gehandelt werden."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"number")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_variant")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_variant")),(0,l.kt)("td",{parentName:"tr",align:null},"Gibt an, welche Button-Variante verwendet werden soll."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'"custom" \\| "danger" \\| "ghost" \\| "normal" \\| "primary" \\| "secondary" \\| undefined')),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"'normal'"))))),(0,l.kt)("h2",{id:"dependencies"},"Dependencies"),(0,l.kt)("h3",{id:"used-by"},"Used by"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"../table"},"kol-table"))),(0,l.kt)("h3",{id:"depends-on"},"Depends on"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"../button"},"kol-button")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"../select"},"kol-select")),(0,l.kt)("li",{parentName:"ul"},"kol-button-wc")),(0,l.kt)("h3",{id:"graph"},"Graph"),(0,l.kt)("mermaid",{value:"graph TD;\n  kol-pagination --\x3e kol-button\n  kol-pagination --\x3e kol-select\n  kol-pagination --\x3e kol-button-wc\n  kol-button --\x3e kol-button-wc\n  kol-button-wc --\x3e kol-span-wc\n  kol-button-wc --\x3e kol-tooltip\n  kol-span-wc --\x3e kol-icon\n  kol-tooltip --\x3e kol-badge\n  kol-badge --\x3e kol-span-wc\n  kol-badge --\x3e kol-button-wc\n  kol-select --\x3e kol-input\n  kol-input --\x3e kol-icon\n  kol-input --\x3e kol-button-wc\n  kol-input --\x3e kol-alert\n  kol-alert --\x3e kol-heading-wc\n  kol-alert --\x3e kol-button-wc\n  kol-alert --\x3e kol-icon\n  kol-table --\x3e kol-pagination\n  style kol-pagination fill:#f9f,stroke:#333,stroke-width:4px"}),(0,l.kt)("hr",null))}k.isMDXComponent=!0}}]);