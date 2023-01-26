(self.webpackChunk_public_ui_storybook=self.webpackChunk_public_ui_storybook||[]).push([[8260],{"./src/components/heading/0-description/autogen.wc.stories.mdx":(g,k,e)=>{"use strict";e.r(k),e.d(k,{__namedExportsOrder:()=>x,__page:()=>y,default:()=>K});var _=e("./node_modules/core-js/modules/es.object.keys.js"),a=e.n(_),l=e("./node_modules/core-js/modules/es.array.index-of.js"),o=e.n(l),t=e("./node_modules/core-js/modules/es.symbol.js"),m=e.n(t),h=e("./node_modules/core-js/modules/es.function.bind.js"),O=e.n(h),v=e("./node_modules/core-js/modules/es.object.assign.js"),A=e.n(v),B=e("./node_modules/react/index.js"),u=e("./node_modules/@mdx-js/react/dist/esm.js"),f=e("./node_modules/@storybook/addon-docs/dist/esm/index.js"),j=e("./src/components/heading/0-description/autogen.readme.md"),D=e("./src/components/mermaid.tsx"),M=["components"];function b(){return b=Object.assign?Object.assign.bind():function(n){for(var i=1;i<arguments.length;i++){var s=arguments[i];for(var r in s)Object.prototype.hasOwnProperty.call(s,r)&&(n[r]=s[r])}return n},b.apply(this,arguments)}function C(n,i){if(n==null)return{};var s=P(n,i),r,d;if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(n);for(d=0;d<c.length;d++)r=c[d],!(i.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(n,r)&&(s[r]=n[r])}return s}function P(n,i){if(n==null)return{};var s={},r=Object.keys(n),d,c;for(c=0;c<r.length;c++)d=r[c],!(i.indexOf(d)>=0)&&(s[d]=n[d]);return s}var T={},S="wrapper";function E(n){var i=n.components,s=C(n,M);return(0,u.kt)(S,b({},T,s,{components:i,mdxType:"MDXLayout"}),(0,u.kt)(f.h_,{title:"Web Components/Heading/Beschreibung",mdxType:"Meta"}),(0,u.kt)(f.dk,{mdxType:"Description"},j),(0,u.kt)("script",null,"() =>",(0,D.m)()))}E.displayName="MDXContent",E.isMDXComponent=!0;var y=function(){throw new Error("Docs-only story")};y.parameters={docsOnly:!0};var p={title:"Web Components/Heading/Beschreibung",includeStories:["__page"]},L={};p.parameters=p.parameters||{},p.parameters.docs=Object.assign({},p.parameters.docs||{},{page:function(){return(0,u.kt)(f.aT,{mdxStoryNameToKey:L,mdxComponentAnnotations:p},(0,u.kt)(E,null))}});const K=p;var x=["__page"]},"./src/components/mermaid.tsx":(g,k,e)=>{"use strict";e.d(k,{G:()=>t,m:()=>o});var _=e("./node_modules/react/index.js"),a=e("./node_modules/mermaid/dist/mermaid.core.mjs");let l;const o=m=>{m&&a.Z.initialize(Object.assign({startOnLoad:!0},m)),clearTimeout(l),l=setTimeout(()=>{clearTimeout(l),a.Z.contentLoaded()},500)},t=({code:m,config:h,children:O})=>((0,_.useEffect)(()=>{o(h)},[]),_.createElement("div",null,_.createElement("div",{className:"mermaid"},m)));try{o.displayName="mermaidLoadContent",o.__docgenInfo={description:"",displayName:"mermaidLoadContent",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/mermaid.tsx#mermaidLoadContent"]={docgenInfo:o.__docgenInfo,name:"mermaidLoadContent",path:"src/components/mermaid.tsx#mermaidLoadContent"})}catch(m){}try{t.displayName="Mermaid",t.__docgenInfo={description:"",displayName:"Mermaid",props:{code:{defaultValue:null,description:"",name:"code",required:!0,type:{name:"string"}},config:{defaultValue:null,description:"",name:"config",required:!1,type:{name:"any"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/mermaid.tsx#Mermaid"]={docgenInfo:t.__docgenInfo,name:"Mermaid",path:"src/components/mermaid.tsx#Mermaid"})}catch(m){}},"./node_modules/moment-mini/locale sync recursive ^\\.\\/.*$":(g,k,e)=>{var _={"./locale":"./node_modules/moment-mini/locale/locale.js","./locale.js":"./node_modules/moment-mini/locale/locale.js"};function a(o){var t=l(o);return e(t)}function l(o){if(!e.o(_,o)){var t=new Error("Cannot find module '"+o+"'");throw t.code="MODULE_NOT_FOUND",t}return _[o]}a.keys=function(){return Object.keys(_)},a.resolve=l,g.exports=a,a.id="./node_modules/moment-mini/locale sync recursive ^\\.\\/.*$"},"./src/components/heading/0-description/autogen.readme.md":g=>{"use strict";g.exports=`# Heading

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
