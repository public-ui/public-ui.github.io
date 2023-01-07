(self.webpackChunk_public_ui_storybook=self.webpackChunk_public_ui_storybook||[]).push([[2502],{"./src/components/tabs/0-description/autogen.react.stories.mdx":(g,h,e)=>{"use strict";e.r(h),e.d(h,{__namedExportsOrder:()=>I,__page:()=>T,default:()=>A});var o=e("./node_modules/core-js/modules/es.object.keys.js"),l=e.n(o),u=e("./node_modules/core-js/modules/es.array.index-of.js"),t=e.n(u),i=e("./node_modules/core-js/modules/es.symbol.js"),_=e.n(i),k=e("./node_modules/core-js/modules/es.function.bind.js"),w=e.n(k),E=e("./node_modules/core-js/modules/es.object.assign.js"),P=e.n(E),M=e("./node_modules/react/index.js"),c=e("./node_modules/@mdx-js/react/dist/esm.js"),p=e("./node_modules/@storybook/addon-docs/dist/esm/index.js"),y=e("./src/components/tabs/0-description/autogen.readme.md"),O=e("./src/components/mermaid.tsx"),R=["components"];function v(){return v=Object.assign?Object.assign.bind():function(n){for(var s=1;s<arguments.length;s++){var a=arguments[s];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(n[r]=a[r])}return n},v.apply(this,arguments)}function S(n,s){if(n==null)return{};var a=z(n,s),r,d;if(Object.getOwnPropertySymbols){var m=Object.getOwnPropertySymbols(n);for(d=0;d<m.length;d++)r=m[d],!(s.indexOf(r)>=0)&&(!Object.prototype.propertyIsEnumerable.call(n,r)||(a[r]=n[r]))}return a}function z(n,s){if(n==null)return{};var a={},r=Object.keys(n),d,m;for(m=0;m<r.length;m++)d=r[m],!(s.indexOf(d)>=0)&&(a[d]=n[d]);return a}var C={},D="wrapper";function f(n){var s=n.components,a=S(n,R);return(0,c.kt)(D,v({},C,a,{components:s,mdxType:"MDXLayout"}),(0,c.kt)(p.h_,{title:"React/Tabs/Beschreibung",mdxType:"Meta"}),(0,c.kt)(p.dk,{mdxType:"Description"},y),(0,c.kt)("script",null,"() =>",(0,O.m)()))}f.displayName="MDXContent",f.isMDXComponent=!0;var T=function(){throw new Error("Docs-only story")};T.parameters={docsOnly:!0};var b={title:"React/Tabs/Beschreibung",includeStories:["__page"]},j={};b.parameters=b.parameters||{},b.parameters.docs=Object.assign({},b.parameters.docs||{},{page:function(){return(0,c.kt)(p.aT,{mdxStoryNameToKey:j,mdxComponentAnnotations:b},(0,c.kt)(f,null))}});const A=b;var I=["__page"]},"./src/components/mermaid.tsx":(g,h,e)=>{"use strict";e.d(h,{G:()=>i,m:()=>t});var o=e("./node_modules/react/index.js"),l=e("./node_modules/mermaid/dist/mermaid.core.mjs");let u;const t=_=>{_&&l.Z.initialize(Object.assign({startOnLoad:!0},_)),clearTimeout(u),u=setTimeout(()=>{clearTimeout(u),l.Z.contentLoaded()},500)},i=({code:_,config:k,children:w})=>((0,o.useEffect)(()=>{t(k)},[]),o.createElement("div",null,o.createElement("div",{className:"mermaid"},_)));try{t.displayName="mermaidLoadContent",t.__docgenInfo={description:"",displayName:"mermaidLoadContent",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/mermaid.tsx#mermaidLoadContent"]={docgenInfo:t.__docgenInfo,name:"mermaidLoadContent",path:"src/components/mermaid.tsx#mermaidLoadContent"})}catch(_){}try{i.displayName="Mermaid",i.__docgenInfo={description:"",displayName:"Mermaid",props:{code:{defaultValue:null,description:"",name:"code",required:!0,type:{name:"string"}},config:{defaultValue:null,description:"",name:"config",required:!1,type:{name:"any"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/mermaid.tsx#Mermaid"]={docgenInfo:i.__docgenInfo,name:"Mermaid",path:"src/components/mermaid.tsx#Mermaid"})}catch(_){}},"./node_modules/moment-mini/locale sync recursive ^\\.\\/.*$":(g,h,e)=>{var o={"./locale":"./node_modules/moment-mini/locale/locale.js","./locale.js":"./node_modules/moment-mini/locale/locale.js"};function l(t){var i=u(t);return e(i)}function u(t){if(!e.o(o,t)){var i=new Error("Cannot find module '"+t+"'");throw i.code="MODULE_NOT_FOUND",i}return o[t]}l.keys=function(){return Object.keys(o)},l.resolve=u,g.exports=l,l.id="./node_modules/moment-mini/locale sync recursive ^\\.\\/.*$"},"./src/components/tabs/0-description/autogen.readme.md":g=>{"use strict";g.exports=`# Tabs

Die **Tabs**-Komponente wird verwendet, um verwandte Inhalte auf derselben Seite zu organisieren und zwischen ihnen zu navigieren. Tabs sorgen daf\xFCr, dass gro\xDFe Inhaltsmengen f\xFCr Nutzer:innen leichter organisiert werden k\xF6nnen. Tabs sind in Registerkartenleisten angeordnet, die als Registerkartengruppen bezeichnet werden, wobei die Registerkartenbeschriftung den Nutzer:innen einen Hinweis darauf gibt, welcher Inhalt angezeigt wird, wenn die Registerkarte ausgew\xE4hlt wird.

## Konstruktion

Nach dem Laden der Komponente wird die erste Registerkarte links automatisch optisch als **_aktiv_** hervorgehoben. Jede Registerkarte \xFCbernimmt den Status **_aktiv_** nach dem Anklicken. Der Status **_aktiv_** kann mit dem Attribut \`_selected (Index der Registerkarte)\` auch manuell gesetzt werden,
um z.B. die dritte anstelle der ersten Registerkarte aktiv zu setzen.
Die einzelnen Inhalte der Registerkarte werden in einem eigenen \`HTMLDivElement\` als \`<div>Inhalt der Registerkarte</div>\` innerhalb von \`<kol-tabs></kol-tabs>\` notiert.

Die Zuordnung der JSON-Objekte im Attribut **\\_tabs** zu den Div-Elementen erfolgt automatisch.

Typischer Aufbau einer **Tab**-Komponente:

### Code

> Um das Zusammenspiel von Komponenten (HTML) und Kontroller (TypeScript) gemeinsam darzustellen, wurden alle Code-Beispiele auf dieser Seite mit den Web Components im TSX geschrieben.

\`\`\`tsx
<kol-tabs _selected="0" _tabs='[{"_label":"Tab 1"},{"_label":"Tab 2", "_on": {"onClose": true}},{"_label":"Tab 3"}]'>
	<div>Inhalt von Tab 1</div>
	<div>Inhalt von Tab 2</div>
	<div>Inhalt von Tab 3</div>
</kol-tabs>
\`\`\`

### Beispiel

<kol-tabs _selected="0" _tabs='[{"_label":"Tab 1","_icon":"home"},{"_label":"Tab 2", "_on": {"onClose": true}},{"_label":"Tab 3"}]'>
  <div>Inhalt von Tab 1</div>
  <div>Inhalt von Tab 2</div>
  <div>Inhalt von Tab 3</div>
</kol-tabs>

## Verwendung

### Definition der Registerkarten

Die Registerkarten werden als JSON-Struktur an das Attribut \`_tabs\` \xFCbergeben. Die Struktur ist als Wert-/Parameter-Paar aufgebaut:

\`\`\`tsx
[
	{
		_label: 'Tab 1',
	},
	{
		_label: 'Tab 2',
		_disabled: true,
	},
	{
		_label: 'Tab 3',
		_icon: 'home',
		_on: { onClose: true },
	},
];
\`\`\`

### Registerkarte ausw\xE4hlen

Standardm\xE4\xDFig wird die erste Registerkarte von links aus als **_ausgew\xE4hlt_** angezeigt. Verwenden Sie das Attribut \`_selected\` und als Wert die **interne ID**, um eine andere Registerkarte als ausgew\xE4hlt zu setzen. Besitzt die **Tabs**-Komponente beispielsweise drei Tabs und soll das zweite Tab ausgew\xE4hlt werden, setzen Sie **1** als Wert f\xFCr \`_selected\` ein, da die ID immer von 0 aus hochgez\xE4hlt wird.

### Registerkarte deaktivieren

Um eine Registerkarte zu deaktivieren, verwenden Sie das Attribut \`_disabled\` und den Wert **true**.

### Close-Icon im Registekartenheader

Wenn Sie eine schlie\xDFbare Registerkarte ben\xF6tigen, k\xF6nnen Sie dies \xFCber das Attribut \`_on\` und den Wert **"onClose":true** realisieren.

### Best practices

- Verwenden Sie Registerkarten, um verwandte Inhalte so zu organisieren und zu gruppieren, dass der Benutzer keine Seite verlassen muss.
- Registerkarten sollten in einer einzelnen, scrollbaren (falls erforderlich) Zeile \xFCber dem Inhalt positioniert werden, auf den sie sich beziehen.
- Verwenden Sie die Registerkartenbezeichnung, um den Inhalt dieser Registerkarte klar und pr\xE4gnant zu beschreiben und zwischen den verschiedenen Abschnitten zu unterscheiden.
- Es sollte immer nur eine Registerkarte aktiv sein.
- Verwenden Sie keine Registerkarten, um eine Sequenz oder einen Verlauf von Inhalten zu erstellen, die der Benutzer in einer bestimmten Reihenfolge lesen soll.
- Verwenden Sie keine Registerkarten zum Vergleichen von Inhalten (z. B. unterschiedliche Spezifikationen).
- Verwenden Sie keine Registerkarten, um Benutzer zu einer anderen Seite zu navigieren.
- Ber\xFCcksichtigen Sie die Anzahl der Registerkarten, die Sie in die Registerkartengruppe aufnehmen. Wenn Sie das Gef\xFChl haben, dass die Zahl zu gro\xDF wird, sollten Sie den Inhalt weiter aufteilen oder ein anderes Navigationsmuster/eine andere Komponente verwenden.

### Anwendungsf\xE4lle

- Verwenden Sie Registerkarten, um verwandte Informationen auf einer Landingpage zu organisieren.
- \xDCber Registerkarten k\xF6nnen Sie z.B. Dienstleistungen oder Vorteile in verschiedene Kategorien einteilen.
- Verwenden Sie Registerkarten, um Benutzerprofile in verschiedene Abschnitte zu gliedern (z. B. pers\xF6nliche Informationen, Termine, aktive Services).
- Verwenden Sie Registerkarten, um FAQs in verschiedene Kategorien zu unterteilen.

## Barrierefreiheit

> Die optische Standardausgabe der Komponente ist auf die Umsetzung der Barrierefreiheit hin optimiert. Wenn Sie eigene Custom Styles verwenden, kann das zu einer Einschr\xE4nkung der Barrierefreiheit f\xFChren.

Ausgew\xE4hlte Tabs werden beim Anspringen mit der **Tab-Taste** mit einem deutlichen Focus-Rahmen umgeben. Die einzelnen Tabs k\xF6nnen mit den Pfeiltasten **links** und **rechts** durchlaufen werden.

Nach Anspringen eines Tabs kann mit Hilfe der **Tab-Taste** vom Header in den Inhaltsbereich der Registerkarte gewechselt werden.

Unabh\xE4ngig davon ob die Tab-Schalter oben, rechts, unten oder links angeordnet sind, bleibt die Tastatursteuerung gleich. Hintergrund ist, dass das Layout bei der Nutzung eines Screenreaders keine Rolle spielt. Eine unterschiedliche Pfeil-Tastensteuerung aufgrund der Layout-Anordnung w\xFCrde daher nicht dem \xFCblichen Bedienkonzept des W3C entsprechen.

### Tastatursteuerung

Bei der Umsetzung der Tastatursteuerung wurde sich an den Beispielen des W3C's orientiert.

Hier steht immer der beeintr\xE4chtige Nutzende im Vordergrund. Um m\xF6glichst effizient \xFCber die gesamte Seite/Anwendung zu navigieren, ist nur 1 Schalter aus der Tab-Serie fokussierbar. Sobald der Nutzende auf der Tab-Navigation selbst ist, werden die Pfeiltasten verwendet, um zwischen den Tabs selbst wechseln.

W3C-Samples:

- https://www.w3.org/WAI/ARIA/apg/example-index/tabs/tabs-manual.html
- https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/tab_role
- https://dequeuniversity.com/library/aria/tabpanel
- https://design-system.service.gov.uk/components/tabs/

| Taste                | Funktion                                                                                                |
| -------------------- | ------------------------------------------------------------------------------------------------------- | --------------------------- | --- |
| \`Tab\`                | Fokussiert den ersten aktiven Tab. Auf vorhandene Close-Icons k\xF6nnen mit der Tab-Taste erreicht werden. |
| \`Pfeil-Tasten (links | rechts)\`                                                                                                | Wechselt zwischen den Tabs. |     |

<!--## Links und Referenzen

<!-- Auto Generated Below -->


## Eigenschaften

| Property                  | Attribute     | Description                                                                           | Type                                                                                                                                                                                                                                | Default     |
| ------------------------- | ------------- | ------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| \`_ariaLabel\` _(required)_ | \`_aria-label\` | Gibt den Text an, der die Navigation von anderen Navigationen differenziert.          | \`string\`                                                                                                                                                                                                                            | \`undefined\` |
| \`_on\`                     | --            | Gibt die Liste der Callback-Funktionen an, die auf Events aufgerufen werden sollen.   | \`undefined | { onCreate?: EventCallback<Event> | { label: string; callback: EventCallback<Event>; } | undefined; } & { onSelect?: EventValueCallback<KeyboardEvent | PointerEvent | CustomEvent<any>, number> | undefined; }\` | \`undefined\` |
| \`_selected\`               | \`_selected\`   | Gibt an, welches Tab selektiert sein soll.                                            | \`number | undefined\`                                                                                                                                                                                                               | \`0\`         |
| \`_tabs\` _(required)_      | \`_tabs\`       | Gibt die geordnete Liste der Seitenhierarchie in Links an.                            | \`TabButtonProps[] | string\`                                                                                                                                                                                                        | \`undefined\` |
| \`_tabsAlign\`              | \`_tabs-align\` | Gibt an, ob die Tab-Schalter entweder oben, rechts, unten oder links angeordnet sind. | \`"bottom" | "left" | "right" | "top" | undefined\`                                                                                                                                                                               | \`'top'\`     |


## Abh\xE4ngigkeiten

### Abh\xE4ngig von

- kol-button-group-wc
- kol-button-wc

### Graph
<div class="mermaid">
graph TD;
  kol-tabs --> kol-button-group-wc
  kol-tabs --> kol-button-wc
  kol-button-wc --> kol-span-wc
  kol-button-wc --> kol-tooltip
  kol-span-wc --> kol-icon
  kol-tooltip --> kol-badge
  kol-badge --> kol-span-wc
  kol-badge --> kol-button-wc
  style kol-tabs fill:#f9f,stroke:#333,stroke-width:4px
</div>

----------------------------------------------


`}}]);
