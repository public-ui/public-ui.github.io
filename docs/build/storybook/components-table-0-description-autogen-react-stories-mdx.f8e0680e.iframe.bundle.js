(self.webpackChunk_public_ui_storybook=self.webpackChunk_public_ui_storybook||[]).push([[5583],{"./src/components/table/0-description/autogen.react.stories.mdx":(g,p,e)=>{"use strict";e.r(p),e.d(p,{__namedExportsOrder:()=>A,__page:()=>T,default:()=>M});var s=e("./node_modules/core-js/modules/es.object.keys.js"),d=e.n(s),u=e("./node_modules/core-js/modules/es.array.index-of.js"),t=e.n(u),r=e("./node_modules/core-js/modules/es.symbol.js"),_=e.n(r),h=e("./node_modules/core-js/modules/es.function.bind.js"),y=e.n(h),v=e("./node_modules/core-js/modules/es.object.assign.js"),C=e.n(v),K=e("./node_modules/react/index.js"),c=e("./node_modules/@mdx-js/react/dist/esm.js"),k=e("./node_modules/@storybook/addon-docs/dist/esm/index.js"),D=e("./src/components/table/0-description/autogen.readme.md"),E=e("./src/components/mermaid.tsx"),O=["components"];function f(){return f=Object.assign?Object.assign.bind():function(n){for(var a=1;a<arguments.length;a++){var o=arguments[a];for(var i in o)Object.prototype.hasOwnProperty.call(o,i)&&(n[i]=o[i])}return n},f.apply(this,arguments)}function S(n,a){if(n==null)return{};var o=P(n,a),i,l;if(Object.getOwnPropertySymbols){var m=Object.getOwnPropertySymbols(n);for(l=0;l<m.length;l++)i=m[l],!(a.indexOf(i)>=0)&&Object.prototype.propertyIsEnumerable.call(n,i)&&(o[i]=n[i])}return o}function P(n,a){if(n==null)return{};var o={},i=Object.keys(n),l,m;for(m=0;m<i.length;m++)l=i[m],!(a.indexOf(l)>=0)&&(o[l]=n[l]);return o}var z={},j="wrapper";function w(n){var a=n.components,o=S(n,O);return(0,c.kt)(j,f({},z,o,{components:a,mdxType:"MDXLayout"}),(0,c.kt)(k.h_,{title:"React/Table/Beschreibung",mdxType:"Meta"}),(0,c.kt)(k.dk,{mdxType:"Description"},D),(0,c.kt)("script",null,"() =>",(0,E.m)()))}w.displayName="MDXContent",w.isMDXComponent=!0;var T=function(){throw new Error("Docs-only story")};T.parameters={docsOnly:!0};var b={title:"React/Table/Beschreibung",includeStories:["__page"]},B={};b.parameters=b.parameters||{},b.parameters.docs=Object.assign({},b.parameters.docs||{},{page:function(){return(0,c.kt)(k.aT,{mdxStoryNameToKey:B,mdxComponentAnnotations:b},(0,c.kt)(w,null))}});const M=b;var A=["__page"]},"./src/components/mermaid.tsx":(g,p,e)=>{"use strict";e.d(p,{G:()=>r,m:()=>t});var s=e("./node_modules/react/index.js"),d=e("./node_modules/mermaid/dist/mermaid.core.mjs");let u;const t=_=>{_&&d.Z.initialize(Object.assign({startOnLoad:!0},_)),clearTimeout(u),u=setTimeout(()=>{clearTimeout(u),d.Z.contentLoaded()},500)},r=({code:_,config:h,children:y})=>((0,s.useEffect)(()=>{t(h)},[]),s.createElement("div",null,s.createElement("div",{className:"mermaid"},_)));try{t.displayName="mermaidLoadContent",t.__docgenInfo={description:"",displayName:"mermaidLoadContent",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/mermaid.tsx#mermaidLoadContent"]={docgenInfo:t.__docgenInfo,name:"mermaidLoadContent",path:"src/components/mermaid.tsx#mermaidLoadContent"})}catch(_){}try{r.displayName="Mermaid",r.__docgenInfo={description:"",displayName:"Mermaid",props:{code:{defaultValue:null,description:"",name:"code",required:!0,type:{name:"string"}},config:{defaultValue:null,description:"",name:"config",required:!1,type:{name:"any"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/mermaid.tsx#Mermaid"]={docgenInfo:r.__docgenInfo,name:"Mermaid",path:"src/components/mermaid.tsx#Mermaid"})}catch(_){}},"./node_modules/moment-mini/locale sync recursive ^\\.\\/.*$":(g,p,e)=>{var s={"./locale":"./node_modules/moment-mini/locale/locale.js","./locale.js":"./node_modules/moment-mini/locale/locale.js"};function d(t){var r=u(t);return e(r)}function u(t){if(!e.o(s,t)){var r=new Error("Cannot find module '"+t+"'");throw r.code="MODULE_NOT_FOUND",r}return s[t]}d.keys=function(){return Object.keys(s)},d.resolve=u,g.exports=d,d.id="./node_modules/moment-mini/locale sync recursive ^\\.\\/.*$"},"./src/components/table/0-description/autogen.readme.md":g=>{"use strict";g.exports=`# Table

Die **Table**-Komponente dient prim\xE4r der \xFCbersichtlichen Darstellung von Datenmengen. Dabei ist sie so ausgelegt, dass sie alle von den Daten abh\xE4ngige Werte automatisch ermittelt und die Tabelle entsprechend darstellt. Hierzu geh\xF6ren beispielsweise die optionalen Funktionalit\xE4ten Spaltensortierung oder Pagination.

<kol-indented-text _summary="Backend-seitige Pagination">
	Bei sehr gro\xDFen Datenmengen ist auch eine manuelle Nutzung der Table-Komponente m\xF6glich. Das bedeutet, dass die Tabelle seitenweise "manuell" bef\xFCllt wird. Hierzu kann einfach anstatt der Table-Pagination eine "eigene" Pagination unter der Tabelle mittels der Pagination-Komponente verwendet werden.
</kol-indented-text>

## Konstruktion

Die Table-Komponente ist so konstruiert, dass nicht der gesamte Tabellenaufbau im Markup selbst beschrieben werden muss. Wie genau die Tabelle Markup-spezifisch aufgebaut werden muss, um barrierefrei zu sein, \xFCbernimmt die Komponente selbst.

**Beispiel**, wie es nicht gedacht ist:

\`\`\`html
<kol-table>
	<kol-tr>
		<kol-th>\u2026</kol-th>
		\u2026
	</kol-tr>
	\u2026
</kol-table>
\`\`\`

**Beispiel**, wie es gedacht ist:

\`\`\`html
<div>
	<kol-table _caption="\u2026" _headers="\u2026" _data="\u2026" _pagination="\u2026"></kol-table>
</div>
\`\`\`

Dadurch, dass die Table-Komponente das valide und barrierefreie Markup dynamisch "zusammenbaut", kann die komplexe Auszeichnung f\xFCr die assistive Systeme dem/der Entwickler:in abgenommen werden.

### Funktionalit\xE4ten

Die Table-Komponente unterst\xFCtzt folgende Funktionalit\xE4ten:

- Tabellenbeschreibung durch ein \`caption\`-Attribut.
- Mehrzeilige Spalten\xFCberschriften in horizontaler oder vertikaler Richtung.
- Sortierfunktion f\xFCr entweder horizontale und vertikale Ausrichtung.
- Unterschiedliche Render-Funktion f\xFCr die Zellen.
- Pagination f\xFCr die Tabelle.

Die Table-Komponente unterst\xFCtzt folgende Funktionalit\xE4ten **nicht**:

- Das Filtern der Tabelle ist aktuell nicht innerhalb der Tabelle vorgesehen.
- Das Ausw\xE4hlen von Zeilen ist aktuell in der Tabelle nicht vorgesehen.

> Beides k\xF6nnte jedoch mittels der Render-Funktion umgesetzt werden.

### Typen

### Pagination

\xDCber die Property \`_pagination\` kann optional eine Vielzahl zus\xE4tzlicher Properties zur Steuerung der Pagination \xFCbergeben werden. Die genaue Beschreibung der Optionen ist in der Pagination-Spezifikation zu finden.

#### KoliBriTableHeaders

\`\`\`ts
{
  horizontal: [
    [
      {
        label: string,
        key?: string,
        colsSpan?: number,
        rowSpan?: number,
        useTdInsteadOfTh?: boolean,
        render?: (data) => string,
        sort?: (data) => data,
      },
      \u2026
    ],
    \u2026
  ],
  vertical: [
    [
      {
        label: string,
        key?: string,
        colsSpan?: number,
        rowSpan?: number,
        useTdInsteadOfTh?: boolean,
        render?: (data) => string,
        sort?: (data) => data,
      },
      \u2026
    ],
    \u2026
  ],
};
\`\`\`

#### KoliBriTablePaginationStates

Die Tabellen-Komponente verwendet intern die Pagination-Komponente die sich mit den gleichen Properties steuern l\xE4sst. Die Steuerung wird in der Beschreibung der Pagination-Komponente erl\xE4utert.

### Code

> Um das Zusammenspiel von Komponenten (HTML) und Kontroller (TypeScript) gemeinsam darzustellen, wurden alle Code-Beispiele auf dieser Seite mit den Web Components im TSX geschrieben.

\`\`\`html
<kol-table _caption="Tabellenbeschreibung" _headers="{'horizontal': [[{'label':'Montag','key':'montag'}]]}" _pagination="[{'page':2}]"></kol-table>
\`\`\`

### Beispiel

<kol-table _caption="Nur Vertikal Header, Daten Vertikal, Pagination" _headers="{'horizontal':[[{'label':'Montag','key':'montag'}]]}" _data="[{'montag':'Zelle1'},{'montag':'Zelle2'}]" _pagination="{'page':2}"></kol-table>

## Verwendung

### Sortierung

- Zu jedem Header kann man eine Sortierfunktion definieren.
- Es ist maximal nur eine Sortierfunktion aktiviert oder keine.
- Bei dem Rendern der Daten in die Tabelle muss jetzt gepr\xFCft werden, ob eine Sortierung aktiv ist und vorher die Daten durch die Funktion sortiert werden.
- Aktuell wird nicht unterst\xFCtzt, dass bei zweidimensionalen Headern, die Header der jeweils anderen Header-Seite mitsortiert werden. Bei der Anforderung der Sortierung empfehlen wir die Verwendung nur einer Header-Dimension (entweder horizontal oder vertikal).

<!--### Best practices

### Anwendungsf\xE4lle-->

## Barrierefreiheit

> Die optische Standardausgabe der Komponente ist auf die Umsetzung der Barrierefreiheit hin optimiert. Wenn Sie eigene Custom Styles verwenden, kann das zu einer Einschr\xE4nkung der Barrierefreiheit f\xFChren.

Bei der Table-Komponente werden zahlreiche Attribut-Definitionen dem Tabellen-Markup hinzugef\xFCgt, um die Screenreader bestm\xF6glich zu unterst\xFCtzen.

Aktuell werden folgende Attribute von der Komponente gemanaged: \`role\`, \`scope\` und \`aria-\\*\`.

Das hei\xDFt beispielsweise, dass bei den Spalten\xFCberschriften automatisch entweder die Rolle \`colheader\` oder \`rowheader\` gesetzt wird. Dar\xFCber hinaus wird der Scope entweder auf \`col\`/\`colgroup\` oder \`row\`/\`rowgroup\` gesetzt. \xC4hnlich dieser Automatismen werden auch die \`aria-\\*\`-Attribute je nach Relevanz gesetzt.

Warum die Tabelle einen **Tabindex** hat, wird auf der folgenden Webseite beschrieben: https://dequeuniversity.com/rules/axe/3.5/scrollable-region-focusable

### Pagination ohne/mit Label

Bei der Tabelle kann die Pagination optional hinzugef\xFCgt werden. Die Steuerelemente der Pagination haben hierbei keine sichtbaren Labels, weil das eine \xFCbliche Darstellung ist (State-of-the-art). F\xFCr den Screenreader-Nutzenden werden alle Steuerelemente genauso vorgelesen, als w\xFCrde es ein sichtbares Label geben (KoliBri-Inputs).
Nun bleibt aus Sicht der Barrierefreiheit nur noch zu beurteilen, ob f\xFCr sehende Nutzende die Steuerung auch barrierefrei ist.

Sichtweisen:

<ol type="a">
  <li>Dem sehenden Nutzenden erschlie\xDFt sich durch die aussagekr\xE4ftigen Beschriftungen der Optionen das Verhalten der Steuerelement, auch ohne zus\xE4tzliches Label. Die Steuerelemente der Pagination k\xF6nnen optisch kompakter dargestellt werden.</li>
  <li>Dem sehenden Nutzenden werden Labels angezeigt, um auf das Verhalten der Steuerelement schlie\xDFen zu k\xF6nnen. Dadurch k\xF6nnen die Beschriftungen der Optionen k\xFCrzer erfolgen. Die Steuerelemente der Pagination werden tendenziell durch das zus\xE4tzliche Label optisch mehr Platz ben\xF6tigen.
	Wenn die Select-Auswahl ein Label bekommt, dann muss konsequenterweise auch die Seitenauswahl ein Label erhalten.</li>
</ol>

**Betrachtung:** Der informelle Teil (Label) f\xFCr das Verst\xE4ndnis muss in der Sichtweise **a** durch die Optionsbeschriftung und bei Sichtweise **b** durch das explizite Label abgebildet werden.

> **Aus Sicht der Barrierefreiheit sind beide Sichtweise barrierefrei.** (?!)

**L\xF6sungsentscheidung:** Es w\xE4re m\xF6glich, die Pagination mit um einen \`_labelled\`-Modus zu erweitern, um somit den Projekten beide Sichtweisen anbieten zu k\xF6nnen.

### Verwendung von Role

Die Auszeichnung der Rolle (\`role\`) f\xFChrt bei manchen Screenreadern zu Problemen. Da der Fokus der Table-Komponente auf der Darstellung von Daten liegt und somit der semantische Aufbau auf der HTML-Table beruht, sollte das Vorlesen auch ohne zus\xE4tzliche Rollenauszeichnung gut funktionieren (Retest).

_Lediglich die Rollen \`columnheader\` und \`rowheader\` wird beibehalten, da die Tabellenk\xF6pfe (\`th\`) in entweder Spalten- oder Zeilen-orientiert sind._

## Links und Referenzen

- https://www.w3.org/WAI/tutorials/tables/
- https://www.barrierefreies-webdesign.de/knowhow/datentabellen/scope.html
- https://developer.mozilla.org/de/docs/Web/Accessibility/ARIA/ARIA_Live_Regions
- https://tollwerk.de/projekte/tipps-techniken-inklusiv-barrierefrei/aria-live-regionen
- https://www.barrierefreies-webdesign.de/knowhow/live-regions/attribute.html
- https://www.digitala11y.com/aria-sort-properties/
- https://dequeuniversity.com/library/aria/table-sortable
- https://www.maxability.co.in/2016/06/07/aria-sort-property/
- https://developer.mozilla.org/en-US/docs/Web/API/Element/ariaSort
- https://tollwerk.de/projekte/tipps-techniken-inklusiv-barrierefrei/aria-live-regionen
- https://stackoverflow.com/questions/1312236/
- https://dequeuniversity.com/rules/axe/3.5/scrollable-region-focusable

<!-- Auto Generated Below -->


## Eigenschaften

| Property                | Attribute     | Description                                                             | Type                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | Default     |
| ----------------------- | ------------- | ----------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| \`_caption\` _(required)_ | \`_caption\`    | Gibt den  Titel oder eine Legende mit Erkl\xE4rungen zur Tabelle an.       | \`string\`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | \`undefined\` |
| \`_data\` _(required)_    | \`_data\`       | Gibt die Daten an, die f\xFCr die Erstellung der Tabelle verwendet werden. | \`KoliBriDataType[] | string\`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | \`undefined\` |
| \`_headers\` _(required)_ | \`_headers\`    | Gibt die horizontalen und vertikalen Header f\xFCr die Tabelle an.         | \`string | { horizontal?: KoliBriTableHeaderCell[][] | undefined; vertical?: KoliBriTableHeaderCell[][] | undefined; }\`                                                                                                                                                                                                                                                                                                                                                                                                                         | \`undefined\` |
| \`_minWidth\`             | \`_min-width\`  | Gibt an, die minimale Breite der Tabelle an.                            | \`string | undefined\`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | \`undefined\` |
| \`_pagination\`           | \`_pagination\` | Gibt an, ob die Daten geteilt in Seiten angezeigt wird.                 | \`boolean | string | undefined | { _page: number; } & { _on?: KoliBriPaginationButtonCallbacks | undefined; _page?: number | undefined; _total?: number | undefined; _customClass?: string | undefined; _variant?: KoliBriButtonVariant | undefined; _boundaryCount?: number | undefined; _hasButtons?: boolean | Stringified<PaginationHasButton> | undefined; _pageSize?: number | undefined; _pageSizeOptions?: Stringified<number[]> | undefined; _siblingCount?: number | undefined; _tooltipAlign?: Alignment | undefined; }\` | \`undefined\` |


## Abh\xE4ngigkeiten

### Abh\xE4ngig von

- kol-button
- kol-pagination

### Graph
<div class="mermaid">
graph TD;
  kol-table --> kol-button
  kol-table --> kol-pagination
  kol-button --> kol-button-wc
  kol-button-wc --> kol-span-wc
  kol-button-wc --> kol-tooltip
  kol-span-wc --> kol-icon
  kol-tooltip --> kol-badge
  kol-badge --> kol-span-wc
  kol-badge --> kol-button-wc
  kol-pagination --> kol-button
  kol-pagination --> kol-select
  kol-pagination --> kol-button-wc
  kol-select --> kol-input
  kol-input --> kol-icon
  kol-input --> kol-button-wc
  kol-input --> kol-alert
  kol-alert --> kol-heading-wc
  kol-alert --> kol-button-wc
  kol-alert --> kol-icon
  style kol-table fill:#f9f,stroke:#333,stroke-width:4px
</div>

----------------------------------------------


`}}]);
