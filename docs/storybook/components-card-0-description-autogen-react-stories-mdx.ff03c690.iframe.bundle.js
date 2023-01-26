(self.webpackChunk_public_ui_storybook=self.webpackChunk_public_ui_storybook||[]).push([[749],{"./src/components/card/0-description/autogen.react.stories.mdx":(p,b,e)=>{"use strict";e.r(b),e.d(b,{__namedExportsOrder:()=>K,__page:()=>E,default:()=>x});var s=e("./node_modules/core-js/modules/es.object.keys.js"),l=e.n(s),m=e("./node_modules/core-js/modules/es.array.index-of.js"),t=e.n(m),i=e("./node_modules/core-js/modules/es.symbol.js"),_=e.n(i),g=e("./node_modules/core-js/modules/es.function.bind.js"),C=e.n(g),T=e("./node_modules/core-js/modules/es.object.assign.js"),w=e.n(T),I=e("./node_modules/react/index.js"),c=e("./node_modules/@mdx-js/react/dist/esm.js"),f=e("./node_modules/@storybook/addon-docs/dist/esm/index.js"),B=e("./src/components/card/0-description/autogen.readme.md"),y=e("./src/components/mermaid.tsx"),D=["components"];function k(){return k=Object.assign?Object.assign.bind():function(n){for(var a=1;a<arguments.length;a++){var o=arguments[a];for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(n[r]=o[r])}return n},k.apply(this,arguments)}function O(n,a){if(n==null)return{};var o=S(n,a),r,d;if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(n);for(d=0;d<u.length;d++)r=u[d],!(a.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(n,r)&&(o[r]=n[r])}return o}function S(n,a){if(n==null)return{};var o={},r=Object.keys(n),d,u;for(u=0;u<r.length;u++)d=r[u],!(a.indexOf(d)>=0)&&(o[d]=n[d]);return o}var j={},M="wrapper";function v(n){var a=n.components,o=O(n,D);return(0,c.kt)(M,k({},j,o,{components:a,mdxType:"MDXLayout"}),(0,c.kt)(f.h_,{title:"React/Card/Beschreibung",mdxType:"Meta"}),(0,c.kt)(f.dk,{mdxType:"Description"},B),(0,c.kt)("script",null,"() =>",(0,y.m)()))}v.displayName="MDXContent",v.isMDXComponent=!0;var E=function(){throw new Error("Docs-only story")};E.parameters={docsOnly:!0};var h={title:"React/Card/Beschreibung",includeStories:["__page"]},L={};h.parameters=h.parameters||{},h.parameters.docs=Object.assign({},h.parameters.docs||{},{page:function(){return(0,c.kt)(f.aT,{mdxStoryNameToKey:L,mdxComponentAnnotations:h},(0,c.kt)(v,null))}});const x=h;var K=["__page"]},"./src/components/mermaid.tsx":(p,b,e)=>{"use strict";e.d(b,{G:()=>i,m:()=>t});var s=e("./node_modules/react/index.js"),l=e("./node_modules/mermaid/dist/mermaid.core.mjs");let m;const t=_=>{_&&l.Z.initialize(Object.assign({startOnLoad:!0},_)),clearTimeout(m),m=setTimeout(()=>{clearTimeout(m),l.Z.contentLoaded()},500)},i=({code:_,config:g,children:C})=>((0,s.useEffect)(()=>{t(g)},[]),s.createElement("div",null,s.createElement("div",{className:"mermaid"},_)));try{t.displayName="mermaidLoadContent",t.__docgenInfo={description:"",displayName:"mermaidLoadContent",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/mermaid.tsx#mermaidLoadContent"]={docgenInfo:t.__docgenInfo,name:"mermaidLoadContent",path:"src/components/mermaid.tsx#mermaidLoadContent"})}catch(_){}try{i.displayName="Mermaid",i.__docgenInfo={description:"",displayName:"Mermaid",props:{code:{defaultValue:null,description:"",name:"code",required:!0,type:{name:"string"}},config:{defaultValue:null,description:"",name:"config",required:!1,type:{name:"any"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/mermaid.tsx#Mermaid"]={docgenInfo:i.__docgenInfo,name:"Mermaid",path:"src/components/mermaid.tsx#Mermaid"})}catch(_){}},"./node_modules/moment-mini/locale sync recursive ^\\.\\/.*$":(p,b,e)=>{var s={"./locale":"./node_modules/moment-mini/locale/locale.js","./locale.js":"./node_modules/moment-mini/locale/locale.js"};function l(t){var i=m(t);return e(i)}function m(t){if(!e.o(s,t)){var i=new Error("Cannot find module '"+t+"'");throw i.code="MODULE_NOT_FOUND",i}return s[t]}l.keys=function(){return Object.keys(s)},l.resolve=m,p.exports=l,l.id="./node_modules/moment-mini/locale sync recursive ^\\.\\/.*$"},"./src/components/card/0-description/autogen.readme.md":p=>{"use strict";p.exports=`# Card

Um einzelne Bereiche Ihrer Webseite optisch hervorzuheben, bietet sich die **Card**-Komponente an. Mit ihrer Hilfe k\xF6nnen Sie Ihre Inhalte sehr einfach strukturieren.

Die **Card**-Komponente besteht aus einem **_Titel-Bereich_**, einem **_Inhalts-Bereich_** und einem **_Fu\xDF-Bereich_**.

Der **Titel-Bereich** wird in einer gr\xF6\xDFeren Schrift dargestellt. Der **Inhalts-Bereich** ist optisch durch eine horizontale Trennlinie unterhalb des Titel-Bereichs abgetrennt und wird in der Standardschrift ausgegeben.
Der **Fu\xDF-Bereich** wird optional durch ein Attribut aktiviert und stellt dann Platz f\xFCr weitere Inhalte, z.B. eine **Button**-Komponente bereit. Der Fu\xDF-Bereich ist optisch durch eine horizontale Trennlinie vom Inhalts-Bereich abgetrennt.

## Konstruktion

### Code

> Um das Zusammenspiel von Komponenten (HTML) und Kontroller (TypeScript) gemeinsam darzustellen, wurden alle Code-Beispiele auf dieser Seite mit den Web Components im TSX geschrieben.

\`\`\`tsx
<kol-card _heading="Testtitel" _has-footer _max-height="vh2">
	<div slot="header">Text im Header-Bereich</div>
	<div slot="content">
		Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
		At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
		dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos
		et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
	</div>
	<div slot="footer">Weiterer Beispieltext im Fu\xDF-Bereich</div>
</kol-card>
\`\`\`

### Beispiel

<kol-card _heading="Testtitel" _has-footer _max-height="vh2">
<div slot="header">Text im Header-Bereich</div>
  <div slot="content">
    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore
    magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd
    gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing
    elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero
    eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
    dolor sit amet.
  </div>
  <div slot="footer">Weiterer Beispieltext im Fu\xDF-Bereich</div>
</kol-card>

## Verwendung

### Einfache Standard-Card

In der Standardansicht besteht eine **Card** aus einem Titel-Bereich, der ohne setzen des Attributs **\\_heading** mit drei Punkten angezeigt wird, und einem leeren Inhalts-Bereich.
Die horizontale Trennlinie zwischen beiden Bereichen setzt KoliBri automatisch.

### Titel der Card-Komponente

Den Titel der Card bestimmen Sie durch Setzen des Attributs **\\_heading="Ihr Titel"**. Hier k\xF6nnen Sie beliebigen Text, auch Sonderzeichen und Umlaute, eingeben.
Beachten Sie, dass **HTML-Code** nicht erlaubt ist.

### Gr\xF6\xDFe des Titels

Der **Titel** der Card kann als H1-H6 ausgegeben werden. Die Gr\xF6\xDFe wird \xFCber das Attribut \`_level\`\xFCbergeben. Erlaubt sind die Werte 1 - 6.

### Inhalt im Header-Bereich der Card-Komponente

Den Inhalt im Header-Bereich der Card bestimmen Sie durch Einf\xFCgen eines **Inhalts-Containers** innerhalb des \`<kol-card></kol-card>-Elements\`. Der Container muss als Attribut **slot="header"** enthalten. Hier k\xF6nnen Sie beliebigen Text, auch Sonderzeichen und Umlaute, eingeben.
Auch **HTML-Code** k\xF6nnen sie hier einf\xFCgen. Dieser wird ausgewertet und anschlie\xDFend als normaler Text ausgegeben. Sie k\xF6nnen im Fu\xDF-Bereich aber auch andere KoliBri-Komponenten einf\xFCgen, wie z.B. die **Button**-Komponente.

Bitte beachten Sie, dass Sie zwar ein beliebiges HTML-Tag als Inhalts-Container verwenden k\xF6nnen, es aber empfohlen wird ein \`<div></div>\`-Tag zu verwenden.

\`\`\`tsx
<kol-card _heading="Beispiel" _level="1">
	<div slot="header">Text im Header-Bereich</div>
</kol-card>
\`\`\`

### Inhalt der Card-Komponente

Den Inhalt der Card bestimmen Sie durch Einf\xFCgen eines **Inhalts-Containers** innerhalb des \`<kol-card></kol-card>-Elements\`. Der Container muss als Attribut **slot="content"** enthalten. Hier k\xF6nnen Sie beliebigen Text, auch Sonderzeichen und Umlaute, eingeben.
Auch **HTML-Code** k\xF6nnen sie hier einf\xFCgen. Dieser wird ausgewertet und anschlie\xDFend als normaler Text ausgegeben.

Bitte beachten Sie, dass Sie zwar ein beliebiges HTML-Tag als Inhalts-Container verwenden k\xF6nnen, es aber empfohlen wird ein \`<div></div>\`-Tag zu verwenden.

\`\`\`tsx
<kol-card _heading="Beispiel" _level="1">
	<div slot="content">Text im Inhalts-Bereich</div>
</kol-card>
\`\`\`

### Inhalt im Fu\xDF-Bereich der Card-Komponente

Den Inhalt im Fu\xDF-Bereich der Card bestimmen Sie durch Einf\xFCgen eines **Inhalts-Containers** innerhalb des \`<kol-card></kol-card>-Elements\`. Der Container muss als Attribut **slot="footer"** enthalten. Hier k\xF6nnen Sie beliebigen Text, auch Sonderzeichen und Umlaute, eingeben.
Auch **HTML-Code** k\xF6nnen sie hier einf\xFCgen. Dieser wird ausgewertet und anschlie\xDFend als normaler Text ausgegeben. Sie k\xF6nnen im Fu\xDF-Bereich aber auch andere KoliBri-Komponenten einf\xFCgen, wie z.B. die **Button**-Komponente.

Bitte beachten Sie, dass Sie zwar ein beliebiges HTML-Tag als Inhalts-Container verwenden k\xF6nnen, es aber empfohlen wird ein \`<div></div>\`-Tag zu verwenden.

Wenn Sie den Fu\xDF-Bereich der Card-Komponente nutzen m\xF6chten, achten Sie darauf das Attribut **\\_has-footer** im Element \`<kol-card>\` zu setzen

\`\`\`tsx
<kol-card _heading="Beispiel" _level="1" _has-footer>
	<div slot="footer">Text im Fu\xDF-Bereich</div>
</kol-card>
\`\`\`

### Best practices

- Verwenden Sie die **Card**-Komponente, um in sich geschlossene Themenbereiche optisch zu kapseln.
- Verwenden Sie die **Card**-Komponente, um Ihre Inhalte semantisch zu strukturieren.
- Vermeiden Sie, zu viele Cards auf einer Inhaltsseite zu verwenden.
- Vermeiden Sie, wichtige Inhalte innerhalb der Card-Komponente zu platzieren, wenn sich die zugeh\xF6rigen Aktions-Elemente (Buttons, Links, etc.) nicht innerhalb der gleichen Card befinden.

### Anwendungsf\xE4lle

Hierzu sind unter **\\*Beispiele** einige exemplarische Anwendungsf\xE4lle dargestellt..

#### Einf\xFCgen weiterer KoliBri-Komponenten in die Card-Komponente

Es ist auch m\xF6glich andere Komponenten der KoliBri-Bibliothek innerhalb der **Card**-Komponente zu verwenden. Hierzu ist unter **Beispiele** ein exemplarisches

## Barrierefreiheit

> Die optische Standardausgabe der Komponente ist auf die Umsetzung der Barrierefreiheit hin optimiert. Wenn Sie eigene Custom Styles verwenden, kann das zu einer Einschr\xE4nkung der Barrierefreiheit f\xFChren.

<!--## Links und Referenzen

<!-- Auto Generated Below -->


## Eigenschaften

| Property                | Attribute     | Description                                                                                                                            | Type                                      | Default     |
| ----------------------- | ------------- | -------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------- | ----------- |
| \`_hasFooter\`            | \`_has-footer\` | Gibt an, ob die Card einen Footer-Bereich hat.                                                                                         | \`boolean | undefined\`                    | \`false\`     |
| \`_heading\` _(required)_ | \`_heading\`    | Gibt die \xDCberschrift der Card an.                                                                                                      | \`string\`                                  | \`undefined\` |
| \`_headline\`             | \`_headline\`   | <span class="text-red-500">**[DEPRECATED]**</span> Verwende stattdessen das Property _heading.<br/><br/>Gibt die \xDCberschrift der Card an. | \`string | undefined\`                     | \`undefined\` |
| \`_level\`                | \`_level\`      | Gibt an, welchen H-Level von 1 bis 6 die \xDCberschrift hat.                                                                              | \`1 | 2 | 3 | 4 | 5 | 6 | undefined\` | \`1\`         |


## Slots

| Slot        | Description                                                                                      |
| ----------- | ------------------------------------------------------------------------------------------------ |
| \`"content"\` | Erm\xF6glicht das Einf\xFCgen beliebigen HTML's in den Inhaltsbereich der Card.                        |
| \`"footer"\`  | Erm\xF6glicht das Einf\xFCgen beliebigen HTML's in den Fu\xDFbereich der Card.                            |
| \`"header"\`  | Erm\xF6glicht das Einf\xFCgen beliebigen HTML's in den Kopfbereich unterhalb der \xDCberschrift der Card. |


## Shadow Parts

| Part     | Description |
| -------- | ----------- |
| \`"card"\` | TBD         |


## Abh\xE4ngigkeiten

### Abh\xE4ngig von

- kol-heading-wc

### Graph
<div class="mermaid">
graph TD;
  kol-card --> kol-heading-wc
  style kol-card fill:#f9f,stroke:#333,stroke-width:4px
</div>

----------------------------------------------


`}}]);
