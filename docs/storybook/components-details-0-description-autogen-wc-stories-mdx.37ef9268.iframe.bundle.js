(self.webpackChunk_public_ui_storybook=self.webpackChunk_public_ui_storybook||[]).push([[3630],{"./src/components/details/0-description/autogen.wc.stories.mdx":(g,f,e)=>{"use strict";e.r(f),e.d(f,{__namedExportsOrder:()=>x,__page:()=>k,default:()=>K});var a=e("./node_modules/core-js/modules/es.object.keys.js"),m=e.n(a),_=e("./node_modules/core-js/modules/es.array.index-of.js"),t=e.n(_),s=e("./node_modules/core-js/modules/es.symbol.js"),u=e.n(s),h=e("./node_modules/core-js/modules/es.function.bind.js"),v=e.n(h),D=e("./node_modules/core-js/modules/es.object.assign.js"),I=e.n(D),S=e("./node_modules/react/index.js"),c=e("./node_modules/@mdx-js/react/dist/esm.js"),y=e("./node_modules/@storybook/addon-docs/dist/esm/index.js"),O=e("./src/components/details/0-description/autogen.readme.md"),j=e("./src/components/mermaid.tsx"),L=["components"];function b(){return b=Object.assign?Object.assign.bind():function(n){for(var i=1;i<arguments.length;i++){var r=arguments[i];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(n[o]=r[o])}return n},b.apply(this,arguments)}function M(n,i){if(n==null)return{};var r=T(n,i),o,d;if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(n);for(d=0;d<l.length;d++)o=l[d],!(i.indexOf(o)>=0)&&(!Object.prototype.propertyIsEnumerable.call(n,o)||(r[o]=n[o]))}return r}function T(n,i){if(n==null)return{};var r={},o=Object.keys(n),d,l;for(l=0;l<o.length;l++)d=o[l],!(i.indexOf(d)>=0)&&(r[d]=n[d]);return r}var C={},A="wrapper";function E(n){var i=n.components,r=M(n,L);return(0,c.kt)(A,b({},C,r,{components:i,mdxType:"MDXLayout"}),(0,c.kt)(y.h_,{title:"Web Components/Details/Beschreibung",mdxType:"Meta"}),(0,c.kt)(y.dk,{mdxType:"Description"},O),(0,c.kt)("script",null,"() =>",(0,j.m)()))}E.displayName="MDXContent",E.isMDXComponent=!0;var k=function(){throw new Error("Docs-only story")};k.parameters={docsOnly:!0};var p={title:"Web Components/Details/Beschreibung",includeStories:["__page"]},P={};p.parameters=p.parameters||{},p.parameters.docs=Object.assign({},p.parameters.docs||{},{page:function(){return(0,c.kt)(y.aT,{mdxStoryNameToKey:P,mdxComponentAnnotations:p},(0,c.kt)(E,null))}});const K=p;var x=["__page"]},"./src/components/mermaid.tsx":(g,f,e)=>{"use strict";e.d(f,{G:()=>s,m:()=>t});var a=e("./node_modules/react/index.js"),m=e("./node_modules/mermaid/dist/mermaid.core.mjs");let _;const t=u=>{u&&m.Z.initialize(Object.assign({startOnLoad:!0},u)),clearTimeout(_),_=setTimeout(()=>{clearTimeout(_),m.Z.contentLoaded()},500)},s=({code:u,config:h,children:v})=>((0,a.useEffect)(()=>{t(h)},[]),a.createElement("div",null,a.createElement("div",{className:"mermaid"},u)));try{t.displayName="mermaidLoadContent",t.__docgenInfo={description:"",displayName:"mermaidLoadContent",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/mermaid.tsx#mermaidLoadContent"]={docgenInfo:t.__docgenInfo,name:"mermaidLoadContent",path:"src/components/mermaid.tsx#mermaidLoadContent"})}catch(u){}try{s.displayName="Mermaid",s.__docgenInfo={description:"",displayName:"Mermaid",props:{code:{defaultValue:null,description:"",name:"code",required:!0,type:{name:"string"}},config:{defaultValue:null,description:"",name:"config",required:!1,type:{name:"any"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/mermaid.tsx#Mermaid"]={docgenInfo:s.__docgenInfo,name:"Mermaid",path:"src/components/mermaid.tsx#Mermaid"})}catch(u){}},"./node_modules/moment-mini/locale sync recursive ^\\.\\/.*$":(g,f,e)=>{var a={"./locale":"./node_modules/moment-mini/locale/locale.js","./locale.js":"./node_modules/moment-mini/locale/locale.js"};function m(t){var s=_(t);return e(s)}function _(t){if(!e.o(a,t)){var s=new Error("Cannot find module '"+t+"'");throw s.code="MODULE_NOT_FOUND",s}return a[t]}m.keys=function(){return Object.keys(a)},m.resolve=_,g.exports=m,m.id="./node_modules/moment-mini/locale sync recursive ^\\.\\/.*$"},"./src/components/details/0-description/autogen.readme.md":g=>{"use strict";g.exports=`# Details

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
