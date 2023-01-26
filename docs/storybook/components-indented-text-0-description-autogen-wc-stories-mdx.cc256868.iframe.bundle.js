(self.webpackChunk_public_ui_storybook=self.webpackChunk_public_ui_storybook||[]).push([[6916],{"./src/components/indented-text/0-description/autogen.wc.stories.mdx":(k,f,e)=>{"use strict";e.r(f),e.d(f,{__namedExportsOrder:()=>K,__page:()=>O,default:()=>I});var d=e("./node_modules/core-js/modules/es.object.keys.js"),_=e.n(d),m=e("./node_modules/core-js/modules/es.array.index-of.js"),o=e.n(m),r=e("./node_modules/core-js/modules/es.symbol.js"),l=e.n(r),b=e("./node_modules/core-js/modules/es.function.bind.js"),h=e.n(b),v=e("./node_modules/core-js/modules/es.object.assign.js"),A=e.n(v),S=e("./node_modules/react/index.js"),c=e("./node_modules/@mdx-js/react/dist/esm.js"),g=e("./node_modules/@storybook/addon-docs/dist/esm/index.js"),j=e("./src/components/indented-text/0-description/autogen.readme.md"),T=e("./src/components/mermaid.tsx"),x=["components"];function y(){return y=Object.assign?Object.assign.bind():function(n){for(var i=1;i<arguments.length;i++){var s=arguments[i];for(var t in s)Object.prototype.hasOwnProperty.call(s,t)&&(n[t]=s[t])}return n},y.apply(this,arguments)}function M(n,i){if(n==null)return{};var s=C(n,i),t,a;if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(n);for(a=0;a<u.length;a++)t=u[a],!(i.indexOf(t)>=0)&&Object.prototype.propertyIsEnumerable.call(n,t)&&(s[t]=n[t])}return s}function C(n,i){if(n==null)return{};var s={},t=Object.keys(n),a,u;for(u=0;u<t.length;u++)a=t[u],!(i.indexOf(a)>=0)&&(s[a]=n[a]);return s}var D={},L="wrapper";function E(n){var i=n.components,s=M(n,x);return(0,c.kt)(L,y({},D,s,{components:i,mdxType:"MDXLayout"}),(0,c.kt)(g.h_,{title:"Web Components/IndentedText/Beschreibung",mdxType:"Meta"}),(0,c.kt)(g.dk,{mdxType:"Description"},j),(0,c.kt)("script",null,"() =>",(0,T.m)()))}E.displayName="MDXContent",E.isMDXComponent=!0;var O=function(){throw new Error("Docs-only story")};O.parameters={docsOnly:!0};var p={title:"Web Components/IndentedText/Beschreibung",includeStories:["__page"]},P={};p.parameters=p.parameters||{},p.parameters.docs=Object.assign({},p.parameters.docs||{},{page:function(){return(0,c.kt)(g.aT,{mdxStoryNameToKey:P,mdxComponentAnnotations:p},(0,c.kt)(E,null))}});const I=p;var K=["__page"]},"./src/components/mermaid.tsx":(k,f,e)=>{"use strict";e.d(f,{G:()=>r,m:()=>o});var d=e("./node_modules/react/index.js"),_=e("./node_modules/mermaid/dist/mermaid.core.mjs");let m;const o=l=>{l&&_.Z.initialize(Object.assign({startOnLoad:!0},l)),clearTimeout(m),m=setTimeout(()=>{clearTimeout(m),_.Z.contentLoaded()},500)},r=({code:l,config:b,children:h})=>((0,d.useEffect)(()=>{o(b)},[]),d.createElement("div",null,d.createElement("div",{className:"mermaid"},l)));try{o.displayName="mermaidLoadContent",o.__docgenInfo={description:"",displayName:"mermaidLoadContent",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/mermaid.tsx#mermaidLoadContent"]={docgenInfo:o.__docgenInfo,name:"mermaidLoadContent",path:"src/components/mermaid.tsx#mermaidLoadContent"})}catch(l){}try{r.displayName="Mermaid",r.__docgenInfo={description:"",displayName:"Mermaid",props:{code:{defaultValue:null,description:"",name:"code",required:!0,type:{name:"string"}},config:{defaultValue:null,description:"",name:"config",required:!1,type:{name:"any"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/mermaid.tsx#Mermaid"]={docgenInfo:r.__docgenInfo,name:"Mermaid",path:"src/components/mermaid.tsx#Mermaid"})}catch(l){}},"./node_modules/moment-mini/locale sync recursive ^\\.\\/.*$":(k,f,e)=>{var d={"./locale":"./node_modules/moment-mini/locale/locale.js","./locale.js":"./node_modules/moment-mini/locale/locale.js"};function _(o){var r=m(o);return e(r)}function m(o){if(!e.o(d,o)){var r=new Error("Cannot find module '"+o+"'");throw r.code="MODULE_NOT_FOUND",r}return d[o]}_.keys=function(){return Object.keys(d)},_.resolve=m,k.exports=_,_.id="./node_modules/moment-mini/locale sync recursive ^\\.\\/.*$"},"./src/components/indented-text/0-description/autogen.readme.md":k=>{"use strict";k.exports=`# IndentedText

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
