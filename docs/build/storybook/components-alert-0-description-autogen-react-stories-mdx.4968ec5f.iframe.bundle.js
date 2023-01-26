(self.webpackChunk_public_ui_storybook=self.webpackChunk_public_ui_storybook||[]).push([[8479],{"./src/components/alert/0-description/autogen.react.stories.mdx":(h,b,e)=>{"use strict";e.r(b),e.d(b,{__namedExportsOrder:()=>K,__page:()=>E,default:()=>S});var a=e("./node_modules/core-js/modules/es.object.keys.js"),l=e.n(a),_=e("./node_modules/core-js/modules/es.array.index-of.js"),r=e.n(_),o=e("./node_modules/core-js/modules/es.symbol.js"),m=e.n(o),f=e("./node_modules/core-js/modules/es.function.bind.js"),v=e.n(f),w=e("./node_modules/core-js/modules/es.object.assign.js"),I=e.n(w),B=e("./node_modules/react/index.js"),c=e("./node_modules/@mdx-js/react/dist/esm.js"),g=e("./node_modules/@storybook/addon-docs/dist/esm/index.js"),A=e("./src/components/alert/0-description/autogen.readme.md"),O=e("./src/components/mermaid.tsx"),D=["components"];function k(){return k=Object.assign?Object.assign.bind():function(n){for(var s=1;s<arguments.length;s++){var i=arguments[s];for(var t in i)Object.prototype.hasOwnProperty.call(i,t)&&(n[t]=i[t])}return n},k.apply(this,arguments)}function j(n,s){if(n==null)return{};var i=T(n,s),t,d;if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(n);for(d=0;d<u.length;d++)t=u[d],!(s.indexOf(t)>=0)&&Object.prototype.propertyIsEnumerable.call(n,t)&&(i[t]=n[t])}return i}function T(n,s){if(n==null)return{};var i={},t=Object.keys(n),d,u;for(u=0;u<t.length;u++)d=t[u],!(s.indexOf(d)>=0)&&(i[d]=n[d]);return i}var C={},M="wrapper";function y(n){var s=n.components,i=j(n,D);return(0,c.kt)(M,k({},C,i,{components:s,mdxType:"MDXLayout"}),(0,c.kt)(g.h_,{title:"React/Alert/Beschreibung",mdxType:"Meta"}),(0,c.kt)(g.dk,{mdxType:"Description"},A),(0,c.kt)("script",null,"() =>",(0,O.m)()))}y.displayName="MDXContent",y.isMDXComponent=!0;var E=function(){throw new Error("Docs-only story")};E.parameters={docsOnly:!0};var p={title:"React/Alert/Beschreibung",includeStories:["__page"]},P={};p.parameters=p.parameters||{},p.parameters.docs=Object.assign({},p.parameters.docs||{},{page:function(){return(0,c.kt)(g.aT,{mdxStoryNameToKey:P,mdxComponentAnnotations:p},(0,c.kt)(y,null))}});const S=p;var K=["__page"]},"./src/components/mermaid.tsx":(h,b,e)=>{"use strict";e.d(b,{G:()=>o,m:()=>r});var a=e("./node_modules/react/index.js"),l=e("./node_modules/mermaid/dist/mermaid.core.mjs");let _;const r=m=>{m&&l.Z.initialize(Object.assign({startOnLoad:!0},m)),clearTimeout(_),_=setTimeout(()=>{clearTimeout(_),l.Z.contentLoaded()},500)},o=({code:m,config:f,children:v})=>((0,a.useEffect)(()=>{r(f)},[]),a.createElement("div",null,a.createElement("div",{className:"mermaid"},m)));try{r.displayName="mermaidLoadContent",r.__docgenInfo={description:"",displayName:"mermaidLoadContent",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/mermaid.tsx#mermaidLoadContent"]={docgenInfo:r.__docgenInfo,name:"mermaidLoadContent",path:"src/components/mermaid.tsx#mermaidLoadContent"})}catch(m){}try{o.displayName="Mermaid",o.__docgenInfo={description:"",displayName:"Mermaid",props:{code:{defaultValue:null,description:"",name:"code",required:!0,type:{name:"string"}},config:{defaultValue:null,description:"",name:"config",required:!1,type:{name:"any"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/mermaid.tsx#Mermaid"]={docgenInfo:o.__docgenInfo,name:"Mermaid",path:"src/components/mermaid.tsx#Mermaid"})}catch(m){}},"./node_modules/moment-mini/locale sync recursive ^\\.\\/.*$":(h,b,e)=>{var a={"./locale":"./node_modules/moment-mini/locale/locale.js","./locale.js":"./node_modules/moment-mini/locale/locale.js"};function l(r){var o=_(r);return e(o)}function _(r){if(!e.o(a,r)){var o=new Error("Cannot find module '"+r+"'");throw o.code="MODULE_NOT_FOUND",o}return a[r]}l.keys=function(){return Object.keys(a)},l.resolve=_,h.exports=l,l.id="./node_modules/moment-mini/locale sync recursive ^\\.\\/.*$"},"./src/components/alert/0-description/autogen.readme.md":h=>{"use strict";h.exports=`# Alert

Die **Alert**-Komponente gibt ein optisches Feedback an die Nutzer:innen. Sie besteht aus einem farblich gestalteten Container, einer \xDCberschrift, einem Inhaltstext sowie einem Icon. Das verwendete Icon und die farbliche Gestaltung sind abh\xE4ngig vom Typ \`_type\` des Alert.

## Konstruktion

### Code

> Um das Zusammenspiel von Komponenten (HTML) und Kontroller (TypeScript) gemeinsam darzustellen, wurden alle Code-Beispiele auf dieser Seite mit den Web Components im TSX geschrieben.

\`\`\`tsx
<kol-alert _alert _heading="\xDCberschrift im Alert" _level="1" _type="info" _variant="msg">
	Textbereich im Alert
</kol-alert>
\`\`\`

### Beispiel

<kol-alert _alert _heading="\xDCberschrift im Alert" _level="1" _type="info" _variant="msg">Textbereich im Alert</kol-alert>

## Verwendung

### \xDCberschrift

Die **\xDCberschrift** der Alert-Komponente wird \xFCber das Attribut \`_heading\` bestimmt.

### Gr\xF6\xDFe der \xDCberschrift

Die **Gr\xF6\xDFe** der \xDCberschrift wird \xFCber das Attribut \`_level\` bestimmt und l\xE4sst die Werte 1 - 6 zu.

### Typ des Alert

Die **Alert**-Komponente bietet **vier** unterschiedliche Typen, die sich jeweils auf die farbliche Gestaltung und das verwendetet Icon im Alert beziehen. Zur Wahl stehen:

<ul>
<li>Success</li>
<li>Error</li>
<li>Info</li>
<li>Warning</li>
</ul>

Der Typ eines Alert wird \xFCber das Attribut \`_type\` festgelegt.

### Inhalt des Alert

Der Inhalt des Alert wird zwischen das \xF6ffnende Element \`<kol-alert>\` und das schlie\xDFende \`</kol-alert>\` geschrieben. Der Inhalt kann aus beliebigem **HTML-Code**, aber auch aus weiteren **KoliBri**-Komponenten bestehen.

### Variante des Alert

\xDCber das Attribut **\`_variant\`** kann festgelegt werden, in welcher Darstellungsvariante das Alert angezeigt wird.

### Best practices

- Verwenden Sie die **Alert**-Komponente an geeigneten Positionen auf Ihrer Webseite, um Informationen im richtigen Zusammenhang darzustellen.
- Verwenden Sie immer den richtigen **Type** der **Alert**-Komponente, um bei den Benutzer:innen die gew\xFCnschte Reaktion zu erzeugen. Vermeiden Sie bspw. den Typ **_Error_**, wenn Sie auf den erfolgreichen Abschluss eines Speichervorgangs hinweisen m\xF6chten.
- Vermeiden Sie, zu viele **Alert**-Komponenten auf einer Seite zu platzieren, da der Informationsgehalt von den Benutzer:innen dann oft nicht mehr als besonders wichtig wahrgenommen wird.

### Anwendungsf\xE4lle

- Verwenden Sie die **Alert**-Komponente, wenn Sie die Benutzer:innen auf Fehler bei der Eingabe in Formularen hinweisen m\xF6chten.
- Verwenden Sie die **Alert**-Komponente, um Nutzer:innen auf die erfolgreiche Ausf\xFChrung von Funktionen hinzuweisen, z.B. **\`Ihre Anfrage wurde erfolgreich gespeichert\`**.
- Verwenden Sie die **Alert**-Komponente, um Nutzer:innen weitere Informationen zu einem Thema zur Verf\xFCgung zu stellen.

## Barrierefreiheit

> Die optische Standardausgabe der Komponente ist auf die Umsetzung der Barrierefreiheit hin optimiert. Wenn Sie eigene Custom Styles verwenden, kann das zu einer Einschr\xE4nkung der Barrierefreiheit f\xFChren.

Die **Alert**-Komponente wurde auf die Darstellung mit h\xF6chstm\xF6glichen Kontrast optimiert.

Das zus\xE4tzliche Icon (je nach gew\xE4hltem Typ) gew\xE4hrleistet, dass die Information vom Nutzer nicht allein \xFCber die Farbe klassifiziert werden muss.

Bei der **Alert**-Komponente wurden insbesondere folgende Punkte der Barrierefreiheit betrachtet:

- Die Schriftfarbe ist entweder wei\xDF oder schwarz.
- Die Schriftfarbe ist abh\xE4ngig von der Hintergrundfarbe und wechselt immer auf die Schriftfarbe mit dem gr\xF6\xDFeren Farbkontrast zur Hintergrundfarbe.
- Ist der Farbkontrast f\xFCr AA nicht ausreichend, wird die Hintergrundfarbe \xFCberschrieben.

## Links und Referenzen

- https://www.w3.org/TR/wai-aria-practices/#alert

<!-- Auto Generated Below -->


## Eigenschaften

| Property     | Attribute     | Description                                                                       | Type                                                                    | Default     |
| ------------ | ------------- | --------------------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------- |
| \`_alert\`     | \`_alert\`      | Gibt an, ob der Screenreader die Meldung vorlesen soll.                           | \`boolean | undefined\`                                                  | \`false\`     |
| \`_hasCloser\` | \`_has-closer\` | Gibt an, ob der Alert ein Schlie\xDFen-Icon hat.                                     | \`boolean | undefined\`                                                  | \`false\`     |
| \`_heading\`   | \`_heading\`    | Gibt den Titel der Meldung an.                                                    | \`string | undefined\`                                                   | \`undefined\` |
| \`_level\`     | \`_level\`      | Gibt an, welchen H-Level von 1 bis 6 die \xDCberschrift hat.                         | \`1 | 2 | 3 | 4 | 5 | 6 | undefined\`                               | \`1\`         |
| \`_on\`        | --            | Gibt die EventCallback-Function f\xFCr das Schlie\xDFen des Alerts an.                  | \`undefined | { onClose?: EventCallback<Event> | undefined; }\`         | \`undefined\` |
| \`_type\`      | \`_type\`       | Gibt an, ob es sich um eine Erfolgs-, Info-, Warnung- oder Fehlermeldung handelt. | \`"default" | "error" | "info" | "success" | "warning" | undefined\` | \`'default'\` |
| \`_variant\`   | \`_variant\`    | Gibt an, welche Benachrichtigungsvariante dargestellt wird.                       | \`"card" | "msg" | undefined\`                                          | \`'msg'\`     |


## Abh\xE4ngigkeiten

### Verwendet von

 - kol-input
 - kol-input-adapter-leanup
 - kol-input-radio
 - kol-toast

### Abh\xE4ngig von

- kol-heading-wc
- kol-button-wc
- kol-icon

### Graph
<div class="mermaid">
graph TD;
  kol-alert --> kol-heading-wc
  kol-alert --> kol-button-wc
  kol-alert --> kol-icon
  kol-button-wc --> kol-span-wc
  kol-button-wc --> kol-tooltip
  kol-span-wc --> kol-icon
  kol-tooltip --> kol-badge
  kol-badge --> kol-span-wc
  kol-badge --> kol-button-wc
  kol-input --> kol-alert
  kol-input-adapter-leanup --> kol-alert
  kol-input-radio --> kol-alert
  kol-toast --> kol-alert
  style kol-alert fill:#f9f,stroke:#333,stroke-width:4px
</div>

----------------------------------------------


`}}]);
