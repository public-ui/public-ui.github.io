(self.webpackChunk_public_ui_storybook=self.webpackChunk_public_ui_storybook||[]).push([[3347],{"./src/components/pagination/0-description/autogen.react.stories.mdx":(p,b,e)=>{"use strict";e.r(b),e.d(b,{__namedExportsOrder:()=>L,__page:()=>y,default:()=>S});var s=e("./node_modules/core-js/modules/es.object.keys.js"),l=e.n(s),_=e("./node_modules/core-js/modules/es.array.index-of.js"),t=e.n(_),a=e("./node_modules/core-js/modules/es.symbol.js"),u=e.n(a),k=e("./node_modules/core-js/modules/es.function.bind.js"),v=e.n(k),w=e("./node_modules/core-js/modules/es.object.assign.js"),B=e.n(w),x=e("./node_modules/react/index.js"),c=e("./node_modules/@mdx-js/react/dist/esm.js"),h=e("./node_modules/@storybook/addon-docs/dist/esm/index.js"),O=e("./src/components/pagination/0-description/autogen.readme.md"),P=e("./src/components/mermaid.tsx"),j=["components"];function f(){return f=Object.assign?Object.assign.bind():function(n){for(var r=1;r<arguments.length;r++){var i=arguments[r];for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(n[o]=i[o])}return n},f.apply(this,arguments)}function C(n,r){if(n==null)return{};var i=D(n,r),o,d;if(Object.getOwnPropertySymbols){var m=Object.getOwnPropertySymbols(n);for(d=0;d<m.length;d++)o=m[d],!(r.indexOf(o)>=0)&&Object.prototype.propertyIsEnumerable.call(n,o)&&(i[o]=n[o])}return i}function D(n,r){if(n==null)return{};var i={},o=Object.keys(n),d,m;for(m=0;m<o.length;m++)d=o[m],!(r.indexOf(d)>=0)&&(i[d]=n[d]);return i}var M={},T="wrapper";function E(n){var r=n.components,i=C(n,j);return(0,c.kt)(T,f({},M,i,{components:r,mdxType:"MDXLayout"}),(0,c.kt)(h.h_,{title:"React/Pagination/Beschreibung",mdxType:"Meta"}),(0,c.kt)(h.dk,{mdxType:"Description"},O),(0,c.kt)("script",null,"() =>",(0,P.m)()))}E.displayName="MDXContent",E.isMDXComponent=!0;var y=function(){throw new Error("Docs-only story")};y.parameters={docsOnly:!0};var g={title:"React/Pagination/Beschreibung",includeStories:["__page"]},A={};g.parameters=g.parameters||{},g.parameters.docs=Object.assign({},g.parameters.docs||{},{page:function(){return(0,c.kt)(h.aT,{mdxStoryNameToKey:A,mdxComponentAnnotations:g},(0,c.kt)(E,null))}});const S=g;var L=["__page"]},"./src/components/mermaid.tsx":(p,b,e)=>{"use strict";e.d(b,{G:()=>a,m:()=>t});var s=e("./node_modules/react/index.js"),l=e("./node_modules/mermaid/dist/mermaid.core.mjs");let _;const t=u=>{u&&l.Z.initialize(Object.assign({startOnLoad:!0},u)),clearTimeout(_),_=setTimeout(()=>{clearTimeout(_),l.Z.contentLoaded()},500)},a=({code:u,config:k,children:v})=>((0,s.useEffect)(()=>{t(k)},[]),s.createElement("div",null,s.createElement("div",{className:"mermaid"},u)));try{t.displayName="mermaidLoadContent",t.__docgenInfo={description:"",displayName:"mermaidLoadContent",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/mermaid.tsx#mermaidLoadContent"]={docgenInfo:t.__docgenInfo,name:"mermaidLoadContent",path:"src/components/mermaid.tsx#mermaidLoadContent"})}catch(u){}try{a.displayName="Mermaid",a.__docgenInfo={description:"",displayName:"Mermaid",props:{code:{defaultValue:null,description:"",name:"code",required:!0,type:{name:"string"}},config:{defaultValue:null,description:"",name:"config",required:!1,type:{name:"any"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/mermaid.tsx#Mermaid"]={docgenInfo:a.__docgenInfo,name:"Mermaid",path:"src/components/mermaid.tsx#Mermaid"})}catch(u){}},"./node_modules/moment-mini/locale sync recursive ^\\.\\/.*$":(p,b,e)=>{var s={"./locale":"./node_modules/moment-mini/locale/locale.js","./locale.js":"./node_modules/moment-mini/locale/locale.js"};function l(t){var a=_(t);return e(a)}function _(t){if(!e.o(s,t)){var a=new Error("Cannot find module '"+t+"'");throw a.code="MODULE_NOT_FOUND",a}return s[t]}l.keys=function(){return Object.keys(s)},l.resolve=_,p.exports=l,l.id="./node_modules/moment-mini/locale sync recursive ^\\.\\/.*$"},"./src/components/pagination/0-description/autogen.readme.md":p=>{"use strict";p.exports=`# Pagination

Mit Hilfe der <b>Paginierung-Komponente</b> lassen sich umfangreiche Inhalte auf der Seite
in handliche Abschnitte unterteilen. Diese k\xF6nnen dann \xFCber die Paginierung der Reihe nach
durchlaufen werden.

## Konstruktion

### Code

> Um das Zusammenspiel von Komponenten (HTML) und Kontroller (TypeScript) gemeinsam darzustellen, wurden alle Code-Beispiele auf dieser Seite mit den Web Components im TSX geschrieben.

\`\`\`tsx
<div>
	<kol-pagination _total="100" _page="6"></kol-pagination>
	<kol-pagination _total="100" _page="6" _sibling-count="2"></kol-pagination>
	<kol-pagination _total="100" _page="6" _sibling-count="0" _boundary-count="2"></kol-pagination>
</div>
\`\`\`

### Beispiel

<div class="grid gap-2">
  <kol-heading _level="3">Standardausgabe nur mit aktuellem Element</kol-heading>
  <kol-pagination _total="100" _page="6"></kol-pagination>
  <kol-heading _level="3">Ausgabe 2 Elemente links und rechts dem aktuellen Element (_sibling)</kol-heading>
  <kol-pagination _total="100" _page="6" _sibling-count="2"></kol-pagination>
  <kol-heading _level="3">Ausgabe 2 Elemente links und rechts (_boundary-count)</kol-heading>
  <kol-pagination _total="100" _page="6" _sibling-count="0" _boundary-count="2"></kol-pagination>
</div>

## Verwendung

Die Pagination-Komponente kann \xFCber Ihre Properties konfiguriert werden.

- Die Property \`_total\` bestimmt die Anzahl der Elemente.
  Ohne weitere Properties werden immer das erste und die letzte Element angezeigt, die dazwischen liegenden durch Punkte symbolisiert.<br/>
- \xDCber die Property \`boundary-count\` wird die Anzahl von Elementen bestimmt, die in der Pagination-Komponente rechts und links angezeigt werden, w\xE4hrend die \xFCbrigen Elemente durch Punkte symbolisiert werden. Die Einstellung \`boundary-count\` = 2 und \`_count\` = 10 h\xE4tte zur Folge, das links die Elemente 1 und 2 und rechts die Elemente 9 und 10 angezeigt werden, w\xE4hrend die Elemente 3 bis 8 durch Punkte symbolisiert werden.<br/>
- Die Property \`_page\` legt das gerade aktive Element fest. Dieses wird farblich hervorgehoben dargestellt.
- \xDCber die Property \`_sibling-count\` kann festgelegt werden, wie viele Elemente links und rechts des aktuellen Elements angezeigt werden sollen. Der Wert 2 h\xE4tte also zur Folge, da\xDF zwei Elemente links und rechts des
  aktuellen Elements angezeigt werden.

<!-- ### Best practices -->

### Anwendungsf\xE4lle

Die **Pagination**-Komponente kann auf vielf\xE4ltige Art eingesetzt werden. Insbesondere dort, wo
auf einer Inhaltsseite umfangreiche Inhalte dargestellt werden sollen, kann sie zur Verbesserung der Struktur und \xDCbersichtlichkeit eingesetzt werden.<br/>
Klassische Anwendungsbereiche einer Paginierung sind z.B. Blog-\xE4hnliche Inhalte oder auch listenartige Layouts, wie z.B. Tabellen. Auch f\xFCr bestimmte Navigationsaufgaben innerhalb einer Seite kann die Paginierung gut verwendet werden.

## Barrierefreiheit

> Die optische Standardausgabe der Komponente ist auf die Umsetzung der Barrierefreiheit hin optimiert. Wenn Sie eigene Custom Styles verwenden, kann das zu einer Einschr\xE4nkung der Barrierefreiheit f\xFChren.

<!-- ## Links und Referenzen -->

<!-- Auto Generated Below -->


## Eigenschaften

| Property              | Attribute            | Description                                                                                    | Type                                                                                                                                                                                              | Default     |
| --------------------- | -------------------- | ---------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| \`_boundaryCount\`      | \`_boundary-count\`    | Gibt an, wie viele Seiten neben den am Rand liegenden Pfeil-Schaltern angezeigt werden sollen. | \`number | undefined\`                                                                                                                                                                             | \`1\`         |
| \`_customClass\`        | \`_custom-class\`      | Gibt an, welche Custom-Class \xFCbergeben werden soll, wenn _variant="custom" gesetzt ist.        | \`string | undefined\`                                                                                                                                                                             | \`undefined\` |
| \`_hasButtons\`         | \`_has-buttons\`       | Gibt an, welche Sprung-Schalter sichtbar sein sollen.                                          | \`boolean | string | undefined | { first: boolean; last: boolean; next: boolean; previous: boolean; }\`                                                                                          | \`undefined\` |
| \`_on\` _(required)_    | --                   | Gibt an, auf welche Callback-Events reagiert werden.                                           | \`{ onChangePage?: EventValueCallback<Event, number> | undefined; onChangePageSize?: EventValueCallback<Event, number> | undefined; onClick?: EventValueCallback<Event, number> | undefined; }\` | \`undefined\` |
| \`_page\` _(required)_  | \`_page\`              | Gibt an, welche Seite aktuell ausgew\xE4hlt ist.                                                  | \`number\`                                                                                                                                                                                          | \`undefined\` |
| \`_pageSize\`           | \`_page-size\`         | Gibt an, wie viele Eintr\xE4ge pro Seite angezeigt werden.                                        | \`number\`                                                                                                                                                                                          | \`1\`         |
| \`_pageSizeOptions\`    | \`_page-size-options\` | Gibt an, welche Optionen f\xFCr die Seitenl\xE4nge angeboten werden.                                 | \`number[] | string\`                                                                                                                                                                              | \`[]\`        |
| \`_siblingCount\`       | \`_sibling-count\`     | Gibt an, wie viele Seiten neben dem aktuell ausgew\xE4hlten Seite angezeigt werden.               | \`number | undefined\`                                                                                                                                                                             | \`1\`         |
| \`_tooltipAlign\`       | \`_tooltip-align\`     | Gibt an, ob der Tooltip oben, rechts, unten oder links angezeigt werden.                       | \`"bottom" | "left" | "right" | "top" | undefined\`                                                                                                                                             | \`'top'\`     |
| \`_total\` _(required)_ | \`_total\`             | Gibt an, wie viele Eintr\xE4ge mit der Pagination gehandelt werden.                               | \`number\`                                                                                                                                                                                          | \`undefined\` |
| \`_variant\`            | \`_variant\`           | Gibt an, welche Button-Variante verwendet werden soll.                                         | \`"custom" | "danger" | "ghost" | "normal" | "primary" | "secondary" | undefined\`                                                                                                            | \`'normal'\`  |


## Abh\xE4ngigkeiten

### Verwendet von

 - kol-table

### Abh\xE4ngig von

- kol-button
- kol-select
- kol-button-wc

### Graph
<div class="mermaid">
graph TD;
  kol-pagination --> kol-button
  kol-pagination --> kol-select
  kol-pagination --> kol-button-wc
  kol-button --> kol-button-wc
  kol-button-wc --> kol-span-wc
  kol-button-wc --> kol-tooltip
  kol-span-wc --> kol-icon
  kol-tooltip --> kol-badge
  kol-badge --> kol-span-wc
  kol-badge --> kol-button-wc
  kol-select --> kol-input
  kol-input --> kol-icon
  kol-input --> kol-button-wc
  kol-input --> kol-alert
  kol-alert --> kol-heading-wc
  kol-alert --> kol-button-wc
  kol-alert --> kol-icon
  kol-table --> kol-pagination
  style kol-pagination fill:#f9f,stroke:#333,stroke-width:4px
</div>

----------------------------------------------


`}}]);
