(self.webpackChunk_public_ui_storybook=self.webpackChunk_public_ui_storybook||[]).push([[3630],{"./src/components/details/0-description/autogen.wc.stories.mdx":(g,f,e)=>{"use strict";e.r(f),e.d(f,{__namedExportsOrder:()=>x,__page:()=>E,default:()=>K});var a=e("./node_modules/core-js/modules/es.object.keys.js"),m=e.n(a),l=e("./node_modules/core-js/modules/es.array.index-of.js"),t=e.n(l),r=e("./node_modules/core-js/modules/es.symbol.js"),_=e.n(r),b=e("./node_modules/core-js/modules/es.function.bind.js"),v=e.n(b),D=e("./node_modules/core-js/modules/es.object.assign.js"),I=e.n(D),S=e("./node_modules/react/index.js"),c=e("./node_modules/@mdx-js/react/dist/esm.js"),h=e("./node_modules/@storybook/addon-docs/dist/esm/index.js"),O=e("./src/components/details/0-description/autogen.readme.md"),j=e("./src/components/mermaid.tsx"),L=["components"];function k(){return k=Object.assign?Object.assign.bind():function(n){for(var s=1;s<arguments.length;s++){var i=arguments[s];for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(n[o]=i[o])}return n},k.apply(this,arguments)}function M(n,s){if(n==null)return{};var i=T(n,s),o,d;if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(n);for(d=0;d<u.length;d++)o=u[d],!(s.indexOf(o)>=0)&&Object.prototype.propertyIsEnumerable.call(n,o)&&(i[o]=n[o])}return i}function T(n,s){if(n==null)return{};var i={},o=Object.keys(n),d,u;for(u=0;u<o.length;u++)d=o[u],!(s.indexOf(d)>=0)&&(i[d]=n[d]);return i}var C={},A="wrapper";function y(n){var s=n.components,i=M(n,L);return(0,c.kt)(A,k({},C,i,{components:s,mdxType:"MDXLayout"}),(0,c.kt)(h.h_,{title:"Web Components/Details/Beschreibung",mdxType:"Meta"}),(0,c.kt)(h.dk,{mdxType:"Description"},O),(0,c.kt)("script",null,"() =>",(0,j.m)()))}y.displayName="MDXContent",y.isMDXComponent=!0;var E=function(){throw new Error("Docs-only story")};E.parameters={docsOnly:!0};var p={title:"Web Components/Details/Beschreibung",includeStories:["__page"]},P={};p.parameters=p.parameters||{},p.parameters.docs=Object.assign({},p.parameters.docs||{},{page:function(){return(0,c.kt)(h.aT,{mdxStoryNameToKey:P,mdxComponentAnnotations:p},(0,c.kt)(y,null))}});const K=p;var x=["__page"]},"./src/components/mermaid.tsx":(g,f,e)=>{"use strict";e.d(f,{G:()=>r,m:()=>t});var a=e("./node_modules/react/index.js"),m=e("./node_modules/mermaid/dist/mermaid.core.mjs");let l;const t=_=>{_&&m.Z.initialize(Object.assign({startOnLoad:!0},_)),clearTimeout(l),l=setTimeout(()=>{clearTimeout(l),m.Z.contentLoaded()},500)},r=({code:_,config:b,children:v})=>((0,a.useEffect)(()=>{t(b)},[]),a.createElement("div",null,a.createElement("div",{className:"mermaid"},_)));try{t.displayName="mermaidLoadContent",t.__docgenInfo={description:"",displayName:"mermaidLoadContent",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/mermaid.tsx#mermaidLoadContent"]={docgenInfo:t.__docgenInfo,name:"mermaidLoadContent",path:"src/components/mermaid.tsx#mermaidLoadContent"})}catch(_){}try{r.displayName="Mermaid",r.__docgenInfo={description:"",displayName:"Mermaid",props:{code:{defaultValue:null,description:"",name:"code",required:!0,type:{name:"string"}},config:{defaultValue:null,description:"",name:"config",required:!1,type:{name:"any"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/mermaid.tsx#Mermaid"]={docgenInfo:r.__docgenInfo,name:"Mermaid",path:"src/components/mermaid.tsx#Mermaid"})}catch(_){}},"./node_modules/moment-mini/locale sync recursive ^\\.\\/.*$":(g,f,e)=>{var a={"./locale":"./node_modules/moment-mini/locale/locale.js","./locale.js":"./node_modules/moment-mini/locale/locale.js"};function m(t){var r=l(t);return e(r)}function l(t){if(!e.o(a,t)){var r=new Error("Cannot find module '"+t+"'");throw r.code="MODULE_NOT_FOUND",r}return a[t]}m.keys=function(){return Object.keys(a)},m.resolve=l,g.exports=m,m.id="./node_modules/moment-mini/locale sync recursive ^\\.\\/.*$"},"./src/components/details/0-description/autogen.readme.md":g=>{"use strict";g.exports=`# Details

Mit Hilfe der **Detail**-Komponente k\xF6nnen weiterf\xFChrende Informationen zun\xE4chst mit einem kurzen Einleitungstext angezeigt werden, die erst nach Klick
durch die Nutzer:innen auf ein Pfeil-Icon in voller Gr\xF6\xDFe aufgeklappt werden.

Die **Detail**-Komponente stellt sich standardm\xE4\xDFig als einzeiliges Layout-Element dar, das aus einem Pfeil-Icon und einem nachfolgenden,
kurzen Einleitungstext gebildet wird. Der eigentliche Inhalt der Komponente wird erst nach Klick auf das Icon nach unten hin ge\xF6ffnet. Das Pfeil-Icon \xE4ndert dabei
seine Ausrichtung von **_rechts_** nach **_unten_**.<br/>Analog l\xE4sst sich die Komponente auch wieder schlie\xDFen und der Inhalt damit verbergen.

## Konstruktion

Der gew\xFCnschte Inhalt wird zwischen \xF6ffnendem und schlie\xDFendem Element notiert.

### Code

> Um das Zusammenspiel von Komponenten (HTML) und Kontroller (TypeScript) gemeinsam darzustellen, wurden alle Code-Beispiele auf dieser Seite mit den Web Components im TSX geschrieben.

\`\`\`tsx
<kol-details _summary="Ihre \xDCberschrift" _open>
	Ihr Text im Detail-Bereich
</kol-details>
\`\`\`

### Beispiel

<kol-details _summary="Nach Laden der Seite geschlossen">
  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
  dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita
  kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
  sadipscing elitr, sed diam nonumy eirmod tempor invidunt.
</kol-details>

## Verwendung

### Ge\xF6ffnet anzeigen

Verwenden Sie das Attribut \`_open\`, um die Komponente beim Anzeigen ge\xF6ffnet darzustellen.

### Einleitungstext

Verwenden Sie das Attribut \`_summary\`, um den Text zu definieren, der als \xDCberschrift angezeigt werden soll.

### Best practices

- Verwenden Sie die **Detail**-Komponente, um erg\xE4nzende Inhalte zu einem Hauptthema platzsparend anzuordnen.
- Die **Detail**-Komponente eignet sich gut f\xFCr die Realisierung einer FAQ-Seite, wobei die Frage \xFCber das Attribut \`_summary\` und die Antwort im Inhaltsbereich ausgegeben werden kann.
- Vermeiden Sie es, wichtige Informationen, die z.B. rechtliche Aspekte betreffen, in einem verborgenen Bereich auszugeben. Es kann nicht sichergestellt werden, dass der Benutzer diese Informationen auch sicher liest.
- Vermeiden Sie es, zu viele **Detail**-Komponenten zu verwenden, da die \xDCbersichtlichkeit der Seite hierunter leiden kann.

### Anwendungsf\xE4lle

#### Details-Komponente innerhalb eines Flie\xDFtextes

<div>
    <p>
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
      dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita
      kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
      sadipscing elitr, sed diam nonumy eirmod tempor invidunt.
    </p>
    <kol-details _summary="Nach Laden der Seite geschlossen">
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
      dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita
      kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
      sadipscing elitr, sed diam nonumy eirmod tempor invidunt.
    </kol-details>
    <p>
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
      dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita
      kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
      sadipscing elitr, sed diam nonumy eirmod tempor invidunt.
    </p>
  </div>

## Barrierefreiheit

> Die optische Standardausgabe der Komponente ist auf die Umsetzung der Barrierefreiheit hin optimiert. Wenn Sie eigene Custom Styles verwenden, kann das zu einer Einschr\xE4nkung der Barrierefreiheit f\xFChren.

- Die **Details**-Komponente bietet sich an, um eine Kontext-sensitive Hilfe f\xFCr die Barrierefreiheit umzusetzen.

### Tastatursteuerung

| Taste   | Funktion                                        |
| ------- | ----------------------------------------------- |
| \`Tab\`   | Fokussiert die Details-Komponente.              |
| \`Enter\` | \xD6ffnet bzw. schlie\xDFt den Inhalt der Komponente. |

## Links und Referenzen

- https://www.w3.org/TR/UNDERSTANDING-WCAG20/minimize-error-context-help.html

<!-- Auto Generated Below -->


## Eigenschaften

| Property                | Attribute  | Description                                                       | Type                   | Default     |
| ----------------------- | ---------- | ----------------------------------------------------------------- | ---------------------- | ----------- |
| \`_open\`                 | \`_open\`    | Gibt an, ob die Detailbeschreibung ge\xF6ffnet oder geschlossen ist. | \`boolean | undefined\` | \`false\`     |
| \`_summary\` _(required)_ | \`_summary\` | Gibt die Zusammenfassung der Detailbeschreibung an.               | \`string\`               | \`undefined\` |


## Abh\xE4ngigkeiten

### Abh\xE4ngig von

- kol-icon
- kol-indented-text

### Graph
<div class="mermaid">
graph TD;
  kol-details --> kol-icon
  kol-details --> kol-indented-text
  style kol-details fill:#f9f,stroke:#333,stroke-width:4px
</div>

----------------------------------------------


`}}]);
