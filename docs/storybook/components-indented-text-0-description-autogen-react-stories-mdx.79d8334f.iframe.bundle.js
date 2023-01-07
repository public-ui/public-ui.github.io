(self.webpackChunk_public_ui_storybook=self.webpackChunk_public_ui_storybook||[]).push([[3064],{"./src/components/indented-text/0-description/autogen.react.stories.mdx":(f,g,e)=>{"use strict";e.r(g),e.d(g,{__namedExportsOrder:()=>K,__page:()=>k,default:()=>I});var a=e("./node_modules/core-js/modules/es.object.keys.js"),m=e.n(a),_=e("./node_modules/core-js/modules/es.array.index-of.js"),o=e.n(_),r=e("./node_modules/core-js/modules/es.symbol.js"),u=e.n(r),y=e("./node_modules/core-js/modules/es.function.bind.js"),v=e.n(y),j=e("./node_modules/core-js/modules/es.object.assign.js"),A=e.n(j),S=e("./node_modules/react/index.js"),l=e("./node_modules/@mdx-js/react/dist/esm.js"),E=e("./node_modules/@storybook/addon-docs/dist/esm/index.js"),b=e("./src/components/indented-text/0-description/autogen.readme.md"),T=e("./src/components/mermaid.tsx"),x=["components"];function O(){return O=Object.assign?Object.assign.bind():function(n){for(var d=1;d<arguments.length;d++){var s=arguments[d];for(var t in s)Object.prototype.hasOwnProperty.call(s,t)&&(n[t]=s[t])}return n},O.apply(this,arguments)}function M(n,d){if(n==null)return{};var s=D(n,d),t,i;if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(n);for(i=0;i<c.length;i++)t=c[i],!(d.indexOf(t)>=0)&&(!Object.prototype.propertyIsEnumerable.call(n,t)||(s[t]=n[t]))}return s}function D(n,d){if(n==null)return{};var s={},t=Object.keys(n),i,c;for(c=0;c<t.length;c++)i=t[c],!(d.indexOf(i)>=0)&&(s[i]=n[i]);return s}var C={},L="wrapper";function h(n){var d=n.components,s=M(n,x);return(0,l.kt)(L,O({},C,s,{components:d,mdxType:"MDXLayout"}),(0,l.kt)(E.h_,{title:"React/IndentedText/Beschreibung",mdxType:"Meta"}),(0,l.kt)(E.dk,{mdxType:"Description"},b),(0,l.kt)("script",null,"() =>",(0,T.m)()))}h.displayName="MDXContent",h.isMDXComponent=!0;var k=function(){throw new Error("Docs-only story")};k.parameters={docsOnly:!0};var p={title:"React/IndentedText/Beschreibung",includeStories:["__page"]},P={};p.parameters=p.parameters||{},p.parameters.docs=Object.assign({},p.parameters.docs||{},{page:function(){return(0,l.kt)(E.aT,{mdxStoryNameToKey:P,mdxComponentAnnotations:p},(0,l.kt)(h,null))}});const I=p;var K=["__page"]},"./src/components/mermaid.tsx":(f,g,e)=>{"use strict";e.d(g,{G:()=>r,m:()=>o});var a=e("./node_modules/react/index.js"),m=e("./node_modules/mermaid/dist/mermaid.core.mjs");let _;const o=u=>{u&&m.Z.initialize(Object.assign({startOnLoad:!0},u)),clearTimeout(_),_=setTimeout(()=>{clearTimeout(_),m.Z.contentLoaded()},500)},r=({code:u,config:y,children:v})=>((0,a.useEffect)(()=>{o(y)},[]),a.createElement("div",null,a.createElement("div",{className:"mermaid"},u)));try{o.displayName="mermaidLoadContent",o.__docgenInfo={description:"",displayName:"mermaidLoadContent",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/mermaid.tsx#mermaidLoadContent"]={docgenInfo:o.__docgenInfo,name:"mermaidLoadContent",path:"src/components/mermaid.tsx#mermaidLoadContent"})}catch(u){}try{r.displayName="Mermaid",r.__docgenInfo={description:"",displayName:"Mermaid",props:{code:{defaultValue:null,description:"",name:"code",required:!0,type:{name:"string"}},config:{defaultValue:null,description:"",name:"config",required:!1,type:{name:"any"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/mermaid.tsx#Mermaid"]={docgenInfo:r.__docgenInfo,name:"Mermaid",path:"src/components/mermaid.tsx#Mermaid"})}catch(u){}},"./node_modules/moment-mini/locale sync recursive ^\\.\\/.*$":(f,g,e)=>{var a={"./locale":"./node_modules/moment-mini/locale/locale.js","./locale.js":"./node_modules/moment-mini/locale/locale.js"};function m(o){var r=_(o);return e(r)}function _(o){if(!e.o(a,o)){var r=new Error("Cannot find module '"+o+"'");throw r.code="MODULE_NOT_FOUND",r}return a[o]}m.keys=function(){return Object.keys(a)},m.resolve=_,f.exports=m,m.id="./node_modules/moment-mini/locale sync recursive ^\\.\\/.*$"},"./src/components/indented-text/0-description/autogen.readme.md":f=>{"use strict";f.exports=`# IndentedText

Heben Sie einzelne Informationen auf Ihrer Webseite optisch mit der **IndentedText**-Komponente hervor. Die Komponente eignet sich nicht nur f\xFCr besondere Abschnitte auf der Webseite, sondern auch beispielsweise f\xFCr Zitate.

In der Komponente kann beliebiger HTML-Code verwendet werden.

## Konstruktion

### Code

> Um das Zusammenspiel von Komponenten (HTML) und Kontroller (TypeScript) gemeinsam darzustellen, wurden alle Code-Beispiele auf dieser Seite mit den Web Components im TSX geschrieben.

\`\`\`tsx
<kol-indented-text>
	Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At
	vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
	amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt.
</kol-indented-text>
\`\`\`

### Beispiel

<kol-indented-text>
  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing
  elitr, sed diam nonumy eirmod tempor invidunt.
</kol-indented-text>

## Verwendung

Die Komponente besitzt keine weiteren Attribute. Der hervorzuhebende Text wird zwischen das \xF6ffnende und das schlie\xDFende Tag geschrieben.

### Best practices

- Verwenden Sie die **IndentedText**-Komponente, um erg\xE4nzende Informationen zu einem Hauptthema optisch hervorzuheben.
- Vermeiden Sie, wichtige Informationen in der Komponente auszugeben, die eine Aktion der Nutzer:innen erfordern.
- Vermeiden Sie, viele **IndentedText**-Komponenten auf einer Einzelseite zu integrieren, da hierdurch die \xDCbersichtlichkeit sinkt.

### Anwendungsf\xE4lle

Verwenden Sie die **IndentedText**-Komponente, um Textpassagen oder Informationen optisch hervorzuheben.

## Barrierefreiheit

> Die optische Standardausgabe der Komponente ist auf die Umsetzung der Barrierefreiheit hin optimiert. Wenn Sie eigene Custom Styles verwenden, kann das zu einer Einschr\xE4nkung der Barrierefreiheit f\xFChren.

<!--## Links und Referenzen

<!-- Auto Generated Below -->


## Abh\xE4ngigkeiten

### Verwendet von

 - kol-details
 - kol-form

### Graph
<div class="mermaid">
graph TD;
  kol-details --> kol-indented-text
  kol-form --> kol-indented-text
  style kol-indented-text fill:#f9f,stroke:#333,stroke-width:4px
</div>

----------------------------------------------


`}}]);
