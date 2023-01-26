(self.webpackChunk_public_ui_storybook=self.webpackChunk_public_ui_storybook||[]).push([[2778],{"./src/components/toast/0-description/autogen.wc.stories.mdx":(b,f,e)=>{"use strict";e.r(f),e.d(f,{__namedExportsOrder:()=>S,__page:()=>y,default:()=>L});var a=e("./node_modules/core-js/modules/es.object.keys.js"),_=e.n(a),l=e("./node_modules/core-js/modules/es.array.index-of.js"),o=e.n(l),r=e("./node_modules/core-js/modules/es.symbol.js"),m=e.n(r),g=e("./node_modules/core-js/modules/es.function.bind.js"),O=e.n(g),v=e("./node_modules/core-js/modules/es.object.assign.js"),B=e.n(v),x=e("./node_modules/react/index.js"),c=e("./node_modules/@mdx-js/react/dist/esm.js"),k=e("./node_modules/@storybook/addon-docs/dist/esm/index.js"),T=e("./src/components/toast/0-description/autogen.readme.md"),j=e("./src/components/mermaid.tsx"),M=["components"];function h(){return h=Object.assign?Object.assign.bind():function(n){for(var i=1;i<arguments.length;i++){var s=arguments[i];for(var t in s)Object.prototype.hasOwnProperty.call(s,t)&&(n[t]=s[t])}return n},h.apply(this,arguments)}function C(n,i){if(n==null)return{};var s=D(n,i),t,d;if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(n);for(d=0;d<u.length;d++)t=u[d],!(i.indexOf(t)>=0)&&Object.prototype.propertyIsEnumerable.call(n,t)&&(s[t]=n[t])}return s}function D(n,i){if(n==null)return{};var s={},t=Object.keys(n),d,u;for(u=0;u<t.length;u++)d=t[u],!(i.indexOf(d)>=0)&&(s[d]=n[d]);return s}var w={},A="wrapper";function E(n){var i=n.components,s=C(n,M);return(0,c.kt)(A,h({},w,s,{components:i,mdxType:"MDXLayout"}),(0,c.kt)(k.h_,{title:"Web Components/Toast/Beschreibung",mdxType:"Meta"}),(0,c.kt)(k.dk,{mdxType:"Description"},T),(0,c.kt)("script",null,"() =>",(0,j.m)()))}E.displayName="MDXContent",E.isMDXComponent=!0;var y=function(){throw new Error("Docs-only story")};y.parameters={docsOnly:!0};var p={title:"Web Components/Toast/Beschreibung",includeStories:["__page"]},P={};p.parameters=p.parameters||{},p.parameters.docs=Object.assign({},p.parameters.docs||{},{page:function(){return(0,c.kt)(k.aT,{mdxStoryNameToKey:P,mdxComponentAnnotations:p},(0,c.kt)(E,null))}});const L=p;var S=["__page"]},"./src/components/mermaid.tsx":(b,f,e)=>{"use strict";e.d(f,{G:()=>r,m:()=>o});var a=e("./node_modules/react/index.js"),_=e("./node_modules/mermaid/dist/mermaid.core.mjs");let l;const o=m=>{m&&_.Z.initialize(Object.assign({startOnLoad:!0},m)),clearTimeout(l),l=setTimeout(()=>{clearTimeout(l),_.Z.contentLoaded()},500)},r=({code:m,config:g,children:O})=>((0,a.useEffect)(()=>{o(g)},[]),a.createElement("div",null,a.createElement("div",{className:"mermaid"},m)));try{o.displayName="mermaidLoadContent",o.__docgenInfo={description:"",displayName:"mermaidLoadContent",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/mermaid.tsx#mermaidLoadContent"]={docgenInfo:o.__docgenInfo,name:"mermaidLoadContent",path:"src/components/mermaid.tsx#mermaidLoadContent"})}catch(m){}try{r.displayName="Mermaid",r.__docgenInfo={description:"",displayName:"Mermaid",props:{code:{defaultValue:null,description:"",name:"code",required:!0,type:{name:"string"}},config:{defaultValue:null,description:"",name:"config",required:!1,type:{name:"any"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/mermaid.tsx#Mermaid"]={docgenInfo:r.__docgenInfo,name:"Mermaid",path:"src/components/mermaid.tsx#Mermaid"})}catch(m){}},"./node_modules/moment-mini/locale sync recursive ^\\.\\/.*$":(b,f,e)=>{var a={"./locale":"./node_modules/moment-mini/locale/locale.js","./locale.js":"./node_modules/moment-mini/locale/locale.js"};function _(o){var r=l(o);return e(r)}function l(o){if(!e.o(a,o)){var r=new Error("Cannot find module '"+o+"'");throw r.code="MODULE_NOT_FOUND",r}return a[o]}_.keys=function(){return Object.keys(a)},_.resolve=l,b.exports=_,_.id="./node_modules/moment-mini/locale sync recursive ^\\.\\/.*$"},"./src/components/toast/0-description/autogen.readme.md":b=>{"use strict";b.exports=`# Toast

Mit der **Toast**-Komponente geben Sie ein optisches Feedback an die Nutzer:innen. Sie wird nur f\xFCr einen kurzen Zeitraum am Kopf des Browserfenster angezeigt und verschwindet danach automatisch.

Ein **Toast** wird nach dem Laden der Webseite am oberen Rand des Browserfenster f\xFCr f\xFCnf Sekunden angezeigt. Mit Ausblenden des **Toasts** wird dieser automatisch aus dem DOM entfernt. Wird er erneut ben\xF6tigt, muss er z.B. \xFCber eine JavaScript-Funktion nachgeladen werden.

## Konstruktion

### Code

> Um das Zusammenspiel von Komponenten (HTML) und Kontroller (TypeScript) gemeinsam darzustellen, wurden alle Code-Beispiele auf dieser Seite mit den Web Components im TSX geschrieben.

\`\`\`tsx
<kol-toast _heading="\xDCberschrift" _type="success">
	Web Component
</kol-toast>
\`\`\`

### Beispiel

<div class="d-grid gap-2">
  <kol-alert _heading="Erfolg" _type="success">Hier wird der Erfolg n\xE4her beschrieben.</kol-alert>
  <kol-alert _type="success" _show="false">Hier wird der Erfolg n\xE4her beschrieben.</kol-alert>
</div>

## Verwendung

### \xDCberschrift

Verwenden Sie das Attribut \`_heading\`, um die \xDCberschrift des Toasts zu bestimmen.

### Gr\xF6\xDFe der \xDCberschrift

Verwenden Sie das Attribut \`_level\`, um die Gr\xF6\xDFe der \xDCberschrift zu bestimmen. M\xF6glich sind die Werte 1 - 6.

### Anzeigen des Toasts

Verwenden Sie das Attribut \`_show\`, um den Toast manuell anzuzeigen.

### Anzeigedauer des Toast

Verwenden Sie das Attribut \`_showDuration\`, um die Anzeigedauer des Toasts festzulegen.

### Anzeigetyp des Toast

Verwenden Sie das Attribut \`_type\`, um den Typ des Toasts festzulegen.

<!--### Best practices

### Anwendungsf\xE4lle-->

## Barrierefreiheit

> Die optische Standardausgabe der Komponente ist auf die Umsetzung der Barrierefreiheit hin optimiert. Wenn Sie eigene Custom Styles verwenden, kann das zu einer Einschr\xE4nkung der Barrierefreiheit f\xFChren.

<!--## Links und Referenzen

<!-- Auto Generated Below -->


## Eigenschaften

| Property        | Attribute        | Description                                                                       | Type                                                                    | Default     |
| --------------- | ---------------- | --------------------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------- |
| \`_alert\`        | \`_alert\`         | Gibt an, ob der Screenreader die Meldung vorlesen soll.                           | \`boolean | undefined\`                                                  | \`true\`      |
| \`_hasCloser\`    | \`_has-closer\`    | Gibt an, ob der Toast ein Schlie\xDFen-Icon hat.                                     | \`boolean | undefined\`                                                  | \`false\`     |
| \`_heading\`      | \`_heading\`       | Gibt den Titel der Meldung an.                                                    | \`string | undefined\`                                                   | \`''\`        |
| \`_level\`        | \`_level\`         | Gibt an, welchen H-Level von 1 bis 6 die \xDCberschrift hat.                         | \`1 | 2 | 3 | 4 | 5 | 6 | undefined\`                               | \`1\`         |
| \`_on\`           | --               | Gibt die EventCallback-Function f\xFCr das Schlie\xDFen des Toasts an.                  | \`undefined | { onClose?: EventCallback<Event> | undefined; }\`         | \`undefined\` |
| \`_show\`         | \`_show\`          | Gibt an, ob der Toast eingeblendet wird.                                          | \`boolean | undefined\`                                                  | \`true\`      |
| \`_showDuration\` | \`_show-duration\` | Gibt an, wie viele Millisekunden der Toast eingeblendet werden soll.              | \`number | undefined\`                                                   | \`10000\`     |
| \`_type\`         | \`_type\`          | Gibt an, ob es sich um eine Erfolgs-, Info-, Warnung- oder Fehlermeldung handelt. | \`"default" | "error" | "info" | "success" | "warning" | undefined\` | \`'default'\` |


## Abh\xE4ngigkeiten

### Abh\xE4ngig von

- kol-alert

### Graph
<div class="mermaid">
graph TD;
  kol-toast --> kol-alert
  kol-alert --> kol-heading-wc
  kol-alert --> kol-button-wc
  kol-alert --> kol-icon
  kol-button-wc --> kol-span-wc
  kol-button-wc --> kol-tooltip
  kol-span-wc --> kol-icon
  kol-tooltip --> kol-badge
  kol-badge --> kol-span-wc
  kol-badge --> kol-button-wc
  style kol-toast fill:#f9f,stroke:#333,stroke-width:4px
</div>

----------------------------------------------


`}}]);
