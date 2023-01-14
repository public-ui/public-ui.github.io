(self.webpackChunk_public_ui_storybook=self.webpackChunk_public_ui_storybook||[]).push([[8622],{"./src/components/accordion/0-description/autogen.wc.stories.mdx":(h,p,e)=>{"use strict";e.r(p),e.d(p,{__namedExportsOrder:()=>C,__page:()=>k,default:()=>M});var a=e("./node_modules/core-js/modules/es.object.keys.js"),c=e.n(a),m=e("./node_modules/core-js/modules/es.array.index-of.js"),o=e.n(m),i=e("./node_modules/core-js/modules/es.symbol.js"),l=e.n(i),b=e("./node_modules/core-js/modules/es.function.bind.js"),y=e.n(b),A=e("./node_modules/core-js/modules/es.object.assign.js"),I=e.n(A),P=e("./node_modules/react/index.js"),_=e("./node_modules/@mdx-js/react/dist/esm.js"),f=e("./node_modules/@storybook/addon-docs/dist/esm/index.js"),O=e("./src/components/accordion/0-description/autogen.readme.md"),S=e("./src/components/mermaid.tsx"),j=["components"];function v(){return v=Object.assign?Object.assign.bind():function(n){for(var s=1;s<arguments.length;s++){var r=arguments[s];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(n[t]=r[t])}return n},v.apply(this,arguments)}function T(n,s){if(n==null)return{};var r=D(n,s),t,d;if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(n);for(d=0;d<u.length;d++)t=u[d],!(s.indexOf(t)>=0)&&Object.prototype.propertyIsEnumerable.call(n,t)&&(r[t]=n[t])}return r}function D(n,s){if(n==null)return{};var r={},t=Object.keys(n),d,u;for(u=0;u<t.length;u++)d=t[u],!(s.indexOf(d)>=0)&&(r[d]=n[d]);return r}var w={},L="wrapper";function E(n){var s=n.components,r=T(n,j);return(0,_.kt)(L,v({},w,r,{components:s,mdxType:"MDXLayout"}),(0,_.kt)(f.h_,{title:"Web Components/Accordion/Beschreibung",mdxType:"Meta"}),(0,_.kt)(f.dk,{mdxType:"Description"},O),(0,_.kt)("script",null,"() =>",(0,S.m)()))}E.displayName="MDXContent",E.isMDXComponent=!0;var k=function(){throw new Error("Docs-only story")};k.parameters={docsOnly:!0};var g={title:"Web Components/Accordion/Beschreibung",includeStories:["__page"]},z={};g.parameters=g.parameters||{},g.parameters.docs=Object.assign({},g.parameters.docs||{},{page:function(){return(0,_.kt)(f.aT,{mdxStoryNameToKey:z,mdxComponentAnnotations:g},(0,_.kt)(E,null))}});const M=g;var C=["__page"]},"./src/components/mermaid.tsx":(h,p,e)=>{"use strict";e.d(p,{G:()=>i,m:()=>o});var a=e("./node_modules/react/index.js"),c=e("./node_modules/mermaid/dist/mermaid.core.mjs");let m;const o=l=>{l&&c.Z.initialize(Object.assign({startOnLoad:!0},l)),clearTimeout(m),m=setTimeout(()=>{clearTimeout(m),c.Z.contentLoaded()},500)},i=({code:l,config:b,children:y})=>((0,a.useEffect)(()=>{o(b)},[]),a.createElement("div",null,a.createElement("div",{className:"mermaid"},l)));try{o.displayName="mermaidLoadContent",o.__docgenInfo={description:"",displayName:"mermaidLoadContent",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/mermaid.tsx#mermaidLoadContent"]={docgenInfo:o.__docgenInfo,name:"mermaidLoadContent",path:"src/components/mermaid.tsx#mermaidLoadContent"})}catch(l){}try{i.displayName="Mermaid",i.__docgenInfo={description:"",displayName:"Mermaid",props:{code:{defaultValue:null,description:"",name:"code",required:!0,type:{name:"string"}},config:{defaultValue:null,description:"",name:"config",required:!1,type:{name:"any"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/mermaid.tsx#Mermaid"]={docgenInfo:i.__docgenInfo,name:"Mermaid",path:"src/components/mermaid.tsx#Mermaid"})}catch(l){}},"./node_modules/moment-mini/locale sync recursive ^\\.\\/.*$":(h,p,e)=>{var a={"./locale":"./node_modules/moment-mini/locale/locale.js","./locale.js":"./node_modules/moment-mini/locale/locale.js"};function c(o){var i=m(o);return e(i)}function m(o){if(!e.o(a,o)){var i=new Error("Cannot find module '"+o+"'");throw i.code="MODULE_NOT_FOUND",i}return a[o]}c.keys=function(){return Object.keys(a)},c.resolve=m,h.exports=c,c.id="./node_modules/moment-mini/locale sync recursive ^\\.\\/.*$"},"./src/components/accordion/0-description/autogen.readme.md":h=>{"use strict";h.exports=`# Accordion

Die **Accordion**-Komponente ist ein Aufklapp-Men\xFC. Klickt man auf den Kopfbereich, bestehend aus Icon und \xDCberschrift, \xF6ffnet sich ein Textfeld mit zus\xE4tzlichen Informationen. Somit ist es ein interaktives Navigationselement, welches dazu dient, umfangreiche Inhalte platzsparend darzustellen.

Accordions kommen immer dann zum Einsatz, wenn einem thematischen Oberbegriff zugeordnete Inhalte angezeigt oder verborgen werden sollen. Sie erlauben umfangreichere Detailinformationen zu einem Oberbegriff, als es aus Gr\xFCnden der \xDCbersichtlichkeit eigentlich sinnvoll w\xE4re. Sie \xFCberlassen es den Besucher:innen selbst, ob sie sich diese Informationen anzeigen lassen m\xF6chten.

## Konstruktion

### Code

> Um das Zusammenspiel von Komponenten (HTML) und Kontroller (TypeScript) gemeinsam darzustellen, wurden alle Code-Beispiele auf dieser Seite mit den Web Components im TSX geschrieben.

\`\`\`tsx
<kol-accordion _heading="\xDCberschrift" _level="1" _open>
	<div slot="content">Beispieltext</div>
</kol-accordion>
\`\`\`

### Beispiel

<div class="grid gap-2">
  <kol-accordion _heading="Element 1">
    <div slot="content">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</div>
    <div slot="header">Inhalt eines Header</div>
  </kol-accordion>
  <kol-accordion _heading="Element 2">
    <div slot="content">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</div>
  </kol-accordion>
  <kol-accordion _heading="Element 3">
    <div slot="content">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</div>
    <div slot="header">Inhalt eines Header</div>
  </kol-accordion>
</div>

## Verwendung

### \xDCberschrift im Accordion-Tab

Der Text, der als \xDCberschrift im Accordion-Tab angezeigt werden soll, wird durch das Attribut **\\_heading** \xFCbergeben. Der Text kann neben Sonderzeichen auch Umlaute oder Leerzeichen enthalten.

### Gr\xF6\xDFe der \xDCberschrift

Die Schriftgr\xF6\xDFe, mit der die \xDCberschrift im Accordion-Tab angezeigt wird, wird durch das Attribut **\\_level** \xFCbergeben. M\xF6glich sind die Level **1** bis **6**

### Inhalt im Kopfbereich des Accordion

Ein optisch abgetrennter Inhalt im Kopfbereich des Accordions wird \xFCber einen eigenen Slot \xFCbergeben. Gibt es diesen Slot nicht oder wird er leer \xFCbergeben, ist der Kopfbereich nicht sichtbar.

**\`<div slot="header">Inhalt im Kopfbereich</div>\`**

### Inhalt des Accordion

Der Hauptinhalt des Accordions wird \xFCber einen eigenen Slot \xFCbergeben.

**\`<div slot="content">Inhalt im Kopfbereich</div>\`**

### Accordion ge\xF6ffnet anzeigen

Standardm\xE4\xDFig wird das Accordion nach dem Laden der Seite im geschlossenen Zustand angezeigt. Soll das Accordion ge\xF6ffnet angezeigt werden, setzen Sie das Attribut **\\_open** zus\xE4tzlich ein.

### Best practices

- Verwenden Sie ein Accordion, um lange Textabschnitte unter einem thematischen Oberbegriff zusammenzufassen
- Verwenden Sie ein Accordion, um weniger wichtige Informationen, als Erg\xE4nzung zu Hauptinformationen, zur Verf\xFCgung zu stellen.
- Mit einem Accordion k\xF6nnen Sie die L\xE4nge Ihrer Webseite deutlich reduzieren und stellen gleichzeitig die Erreichbarkeit aller Informationen f\xFCr die Nutzer:innen sicher.
- Verwenden Sie eindeutige \xDCberschriften, um die Nutzer:innen auf die weiteren Informationen des Accordions hinzuweisen.
- Vermeiden Sie, wichtige \`Call-To-Action\`-Elemente innerhalb eines Accordions zu verbergen.
- Lassen Sie Fehlermeldungen nicht innerhalb des Accordions anzeigen, um zu vermeiden, dass Nutzer:innen wichtige Informationen \xFCbersehen.
- Verwenden Sie ein Accordion nicht als Auswahl-Element f\xFCr Nutzer:innen.
- Verwenden Sie ein Accordion nicht, um wichtige Informationen zu rechtlichen Angaben oder zum Datenschutz anzuzeigen.

### Anwendungsf\xE4lle

- H\xE4ufig gestellte Fragen (FAQ)

## Barrierefreiheit

> Die optische Standardausgabe der Komponente ist auf die Umsetzung der Barrierefreiheit hin optimiert. Wenn Sie eigene Custom Styles verwenden, kann das zu einer Einschr\xE4nkung der Barrierefreiheit f\xFChren.

In der **Accordion**-Komponente wird das \xD6ffnen-/Schlie\xDFen-Icon links ausgerichtet, um Nutzer:innen mit eingeschr\xE4nktem Sichtfeld eine bessere Bedienbarkeit zu erm\xF6glichen.

Es wurde bewusst auf die Verwendung von Icons, wie z.B. \`<\` oder \`>\` verzichtet. Die Verwendung der Icons \`+\` und \`-\` gew\xE4hrleistet eine bessere Sicht- und Erkennbarkeit bez\xFCglich des Ge\xF6ffnet- und Geschlossen-Status.

Bei der farblichen Gestaltung wurde besonders Wert auf einen h\xF6chstm\xF6glichen Kontrast in der
Standardansicht gelegt.

### Tastatursteuerung

| Taste   | Funktion                                             |
| ------- | ---------------------------------------------------- |
| \`Tab\`   | Springt die einzelnen Accordion-Tabs an.             |
| \`Enter\` | \xD6ffnet bzw. schlie\xDFt den fokussierten Accordion-Tab. |

## Links und Referenzen

- https://www.w3.org/TR/wai-aria-practices/#accordion

<!-- Auto Generated Below -->


## Eigenschaften

| Property                | Attribute  | Description                                               | Type                                                                          | Default     |
| ----------------------- | ---------- | --------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------- |
| \`_heading\` _(required)_ | \`_heading\` | Gibt die \xDCberschrift des Accordions an.                   | \`string\`                                                                      | \`undefined\` |
| \`_level\`                | \`_level\`   | Gibt an, welchen H-Level von 1 bis 6 die \xDCberschrift hat. | \`1 | 2 | 3 | 4 | 5 | 6 | undefined\`                                     | \`1\`         |
| \`_on\`                   | --         | Gibt die EventCallback-Funktionen an.                     | \`undefined | { onClick?: EventValueCallback<Event, boolean> | undefined; }\` | \`undefined\` |
| \`_open\`                 | \`_open\`    | Gibt an, ob das Accordion ge\xF6ffnet ist.                   | \`boolean | undefined\`                                                        | \`false\`     |


## Slots

| Slot        | Description                                                                     |
| ----------- | ------------------------------------------------------------------------------- |
| \`"content"\` | Erm\xF6glicht das Einf\xFCgen beliebigen HTML's in den Inhaltsbereich des Accordions. |
| \`"header"\`  | Erm\xF6glicht das Einf\xFCgen beliebigen HTML's in den Kopfbereich des Accordions.    |


## Shadow Parts

| Part          | Description                                                 |
| ------------- | ----------------------------------------------------------- |
| \`"accordion"\` | Erm\xF6glicht das Stylen des \xE4u\xDFeren Container des Accordions. |
| \`"close"\`     | Erm\xF6glicht das Stylen des geschlossenen Zustands und Icons. |
| \`"content"\`   | Erm\xF6glicht das Stylen des Inhaltsbereichs.                  |
| \`"header"\`    | Erm\xF6glicht das Stylen des Kopfbereichs.                     |
| \`"icon"\`      | Erm\xF6glicht das Stylen der Icons.                            |
| \`"open"\`      | Erm\xF6glicht das Stylen des ge\xF6ffneten Zustands und Icons.    |


## Abh\xE4ngigkeiten

### Abh\xE4ngig von

- kol-heading-wc
- kol-icon

### Graph
<div class="mermaid">
graph TD;
  kol-accordion --> kol-heading-wc
  kol-accordion --> kol-icon
  style kol-accordion fill:#f9f,stroke:#333,stroke-width:4px
</div>

----------------------------------------------


`}}]);
