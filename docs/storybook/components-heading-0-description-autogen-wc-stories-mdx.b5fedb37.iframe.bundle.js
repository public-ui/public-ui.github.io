(self.webpackChunk_public_ui_storybook=self.webpackChunk_public_ui_storybook||[]).push([[8260],{"./src/components/heading/0-description/autogen.wc.stories.mdx":(g,h,e)=>{"use strict";e.r(h),e.d(h,{__namedExportsOrder:()=>x,__page:()=>O,default:()=>K});var a=e("./node_modules/core-js/modules/es.object.keys.js"),_=e.n(a),m=e("./node_modules/core-js/modules/es.array.index-of.js"),o=e.n(m),r=e("./node_modules/core-js/modules/es.symbol.js"),l=e.n(r),f=e("./node_modules/core-js/modules/es.function.bind.js"),v=e.n(f),j=e("./node_modules/core-js/modules/es.object.assign.js"),A=e.n(j),B=e("./node_modules/react/index.js"),u=e("./node_modules/@mdx-js/react/dist/esm.js"),E=e("./node_modules/@storybook/addon-docs/dist/esm/index.js"),b=e("./src/components/heading/0-description/autogen.readme.md"),D=e("./src/components/mermaid.tsx"),M=["components"];function k(){return k=Object.assign?Object.assign.bind():function(n){for(var d=1;d<arguments.length;d++){var s=arguments[d];for(var t in s)Object.prototype.hasOwnProperty.call(s,t)&&(n[t]=s[t])}return n},k.apply(this,arguments)}function C(n,d){if(n==null)return{};var s=P(n,d),t,i;if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(n);for(i=0;i<c.length;i++)t=c[i],!(d.indexOf(t)>=0)&&Object.prototype.propertyIsEnumerable.call(n,t)&&(s[t]=n[t])}return s}function P(n,d){if(n==null)return{};var s={},t=Object.keys(n),i,c;for(c=0;c<t.length;c++)i=t[c],!(d.indexOf(i)>=0)&&(s[i]=n[i]);return s}var T={},S="wrapper";function y(n){var d=n.components,s=C(n,M);return(0,u.kt)(S,k({},T,s,{components:d,mdxType:"MDXLayout"}),(0,u.kt)(E.h_,{title:"Web Components/Heading/Beschreibung",mdxType:"Meta"}),(0,u.kt)(E.dk,{mdxType:"Description"},b),(0,u.kt)("script",null,"() =>",(0,D.m)()))}y.displayName="MDXContent",y.isMDXComponent=!0;var O=function(){throw new Error("Docs-only story")};O.parameters={docsOnly:!0};var p={title:"Web Components/Heading/Beschreibung",includeStories:["__page"]},L={};p.parameters=p.parameters||{},p.parameters.docs=Object.assign({},p.parameters.docs||{},{page:function(){return(0,u.kt)(E.aT,{mdxStoryNameToKey:L,mdxComponentAnnotations:p},(0,u.kt)(y,null))}});const K=p;var x=["__page"]},"./src/components/mermaid.tsx":(g,h,e)=>{"use strict";e.d(h,{G:()=>r,m:()=>o});var a=e("./node_modules/react/index.js"),_=e("./node_modules/mermaid/dist/mermaid.core.mjs");let m;const o=l=>{l&&_.Z.initialize(Object.assign({startOnLoad:!0},l)),clearTimeout(m),m=setTimeout(()=>{clearTimeout(m),_.Z.contentLoaded()},500)},r=({code:l,config:f,children:v})=>((0,a.useEffect)(()=>{o(f)},[]),a.createElement("div",null,a.createElement("div",{className:"mermaid"},l)));try{o.displayName="mermaidLoadContent",o.__docgenInfo={description:"",displayName:"mermaidLoadContent",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/mermaid.tsx#mermaidLoadContent"]={docgenInfo:o.__docgenInfo,name:"mermaidLoadContent",path:"src/components/mermaid.tsx#mermaidLoadContent"})}catch(l){}try{r.displayName="Mermaid",r.__docgenInfo={description:"",displayName:"Mermaid",props:{code:{defaultValue:null,description:"",name:"code",required:!0,type:{name:"string"}},config:{defaultValue:null,description:"",name:"config",required:!1,type:{name:"any"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/mermaid.tsx#Mermaid"]={docgenInfo:r.__docgenInfo,name:"Mermaid",path:"src/components/mermaid.tsx#Mermaid"})}catch(l){}},"./node_modules/moment-mini/locale sync recursive ^\\.\\/.*$":(g,h,e)=>{var a={"./locale":"./node_modules/moment-mini/locale/locale.js","./locale.js":"./node_modules/moment-mini/locale/locale.js"};function _(o){var r=m(o);return e(r)}function m(o){if(!e.o(a,o)){var r=new Error("Cannot find module '"+o+"'");throw r.code="MODULE_NOT_FOUND",r}return a[o]}_.keys=function(){return Object.keys(a)},_.resolve=m,g.exports=_,_.id="./node_modules/moment-mini/locale sync recursive ^\\.\\/.*$"},"./src/components/heading/0-description/autogen.readme.md":g=>{"use strict";g.exports=`# Heading

Die **Heading**-Komponente kann \xFCberall dort verwendet werden, wo eine \xDCberschrift angezeigt werden soll. Durch die Verwendung der unterschiedlichen Gr\xF6\xDFen, lassen sich Inhalte klar strukturieren und Seiten wirkungsvoll und abwechslungsreich pr\xE4sentieren. Sie trennt Styling von Semantik und erm\xF6glicht Flexibilit\xE4t.

## Konstruktion

### Code

> Um das Zusammenspiel von Komponenten (HTML) und Kontroller (TypeScript) gemeinsam darzustellen, wurden alle Code-Beispiele auf dieser Seite mit den Web Components im TSX geschrieben.

\`\`\`tsx
<div>
	<kol-heading _level="1">Inhalt einer H1-\xDCberschrift</kol-heading>
</div>
\`\`\`

### Beispiel

<kol-heading _level="1">Inhalt einer H1-\xDCberschrift</kol-heading>

## Verwendung

Geben Sie mit dem Attribut \`_level\` das H-Element an, das Sie ausgeben m\xF6chten. M\xF6glich sind H1 bis H6.

### Best practices

- Achten Sie bei der Verwendung von Headings auf die empfohlene Semantik f\xFCr die Suchmaschinenoptimierung.
- Setzen Sie Headings in verschiedenen Gr\xF6\xDFen ein, um eine sinnvolle Struktur Ihrer Inhalte zu erzeugen.
- Kombinieren Sie die **Heading**-Komponente mit allen anderen **KoliBri**-Komponenten. Setzen Sie sie im Inhaltsbereich der Komponenten ein.

## Barrierefreiheit

> Die optische Standardausgabe der Komponente ist auf die Umsetzung der Barrierefreiheit hin optimiert. Wenn Sie eigene Custom Styles verwenden, kann das zu einer Einschr\xE4nkung der Barrierefreiheit f\xFChren.

<!--## Links und Referenzen

<!-- Auto Generated Below -->


## Eigenschaften

| Property | Attribute | Description                                               | Type                                      | Default |
| -------- | --------- | --------------------------------------------------------- | ----------------------------------------- | ------- |
| \`_level\` | \`_level\`  | Gibt an, welchen H-Level von 1 bis 6 die \xDCberschrift hat. | \`1 | 2 | 3 | 4 | 5 | 6 | undefined\` | \`1\`     |


## Abh\xE4ngigkeiten

### Verwendet von

 - kol-accordion
 - kol-alert
 - kol-card
 - kol-heading
 - kol-link-group

### Graph
<div class="mermaid">
graph TD;
  kol-accordion --> kol-heading-wc
  kol-alert --> kol-heading-wc
  kol-card --> kol-heading-wc
  kol-heading --> kol-heading-wc
  kol-link-group --> kol-heading-wc
  style kol-heading-wc fill:#f9f,stroke:#333,stroke-width:4px
</div>

----------------------------------------------


`}}]);
