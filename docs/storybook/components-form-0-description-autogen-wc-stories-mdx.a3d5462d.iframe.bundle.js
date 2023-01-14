(self.webpackChunk_public_ui_storybook=self.webpackChunk_public_ui_storybook||[]).push([[7093],{"./src/components/form/0-description/autogen.wc.stories.mdx":(f,E,e)=>{"use strict";e.r(E),e.d(E,{__namedExportsOrder:()=>B,__page:()=>v,default:()=>A});var d=e("./node_modules/core-js/modules/es.object.keys.js"),m=e.n(d),i=e("./node_modules/core-js/modules/es.array.index-of.js"),o=e.n(i),r=e("./node_modules/core-js/modules/es.symbol.js"),c=e.n(r),y=e("./node_modules/core-js/modules/es.function.bind.js"),k=e.n(y),C=e("./node_modules/core-js/modules/es.object.assign.js"),K=e.n(C),R=e("./node_modules/react/index.js"),l=e("./node_modules/@mdx-js/react/dist/esm.js"),O=e("./node_modules/@storybook/addon-docs/dist/esm/index.js"),b=e("./src/components/form/0-description/autogen.readme.md"),M=e("./src/components/mermaid.tsx"),D=["components"];function g(){return g=Object.assign?Object.assign.bind():function(n){for(var _=1;_<arguments.length;_++){var s=arguments[_];for(var t in s)Object.prototype.hasOwnProperty.call(s,t)&&(n[t]=s[t])}return n},g.apply(this,arguments)}function h(n,_){if(n==null)return{};var s=P(n,_),t,a;if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(n);for(a=0;a<u.length;a++)t=u[a],!(_.indexOf(t)>=0)&&Object.prototype.propertyIsEnumerable.call(n,t)&&(s[t]=n[t])}return s}function P(n,_){if(n==null)return{};var s={},t=Object.keys(n),a,u;for(u=0;u<t.length;u++)a=t[u],!(_.indexOf(a)>=0)&&(s[a]=n[a]);return s}var T={},x="wrapper";function j(n){var _=n.components,s=h(n,D);return(0,l.kt)(x,g({},T,s,{components:_,mdxType:"MDXLayout"}),(0,l.kt)(O.h_,{title:"Web Components/Form/Beschreibung",mdxType:"Meta"}),(0,l.kt)(O.dk,{mdxType:"Description"},b),(0,l.kt)("script",null,"() =>",(0,M.m)()))}j.displayName="MDXContent",j.isMDXComponent=!0;var v=function(){throw new Error("Docs-only story")};v.parameters={docsOnly:!0};var p={title:"Web Components/Form/Beschreibung",includeStories:["__page"]},L={};p.parameters=p.parameters||{},p.parameters.docs=Object.assign({},p.parameters.docs||{},{page:function(){return(0,l.kt)(O.aT,{mdxStoryNameToKey:L,mdxComponentAnnotations:p},(0,l.kt)(j,null))}});const A=p;var B=["__page"]},"./src/components/mermaid.tsx":(f,E,e)=>{"use strict";e.d(E,{G:()=>r,m:()=>o});var d=e("./node_modules/react/index.js"),m=e("./node_modules/mermaid/dist/mermaid.core.mjs");let i;const o=c=>{c&&m.Z.initialize(Object.assign({startOnLoad:!0},c)),clearTimeout(i),i=setTimeout(()=>{clearTimeout(i),m.Z.contentLoaded()},500)},r=({code:c,config:y,children:k})=>((0,d.useEffect)(()=>{o(y)},[]),d.createElement("div",null,d.createElement("div",{className:"mermaid"},c)));try{o.displayName="mermaidLoadContent",o.__docgenInfo={description:"",displayName:"mermaidLoadContent",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/mermaid.tsx#mermaidLoadContent"]={docgenInfo:o.__docgenInfo,name:"mermaidLoadContent",path:"src/components/mermaid.tsx#mermaidLoadContent"})}catch(c){}try{r.displayName="Mermaid",r.__docgenInfo={description:"",displayName:"Mermaid",props:{code:{defaultValue:null,description:"",name:"code",required:!0,type:{name:"string"}},config:{defaultValue:null,description:"",name:"config",required:!1,type:{name:"any"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/mermaid.tsx#Mermaid"]={docgenInfo:r.__docgenInfo,name:"Mermaid",path:"src/components/mermaid.tsx#Mermaid"})}catch(c){}},"./node_modules/moment-mini/locale sync recursive ^\\.\\/.*$":(f,E,e)=>{var d={"./locale":"./node_modules/moment-mini/locale/locale.js","./locale.js":"./node_modules/moment-mini/locale/locale.js"};function m(o){var r=i(o);return e(r)}function i(o){if(!e.o(d,o)){var r=new Error("Cannot find module '"+o+"'");throw r.code="MODULE_NOT_FOUND",r}return d[o]}m.keys=function(){return Object.keys(d)},m.resolve=i,f.exports=m,m.id="./node_modules/moment-mini/locale sync recursive ^\\.\\/.*$"},"./src/components/form/0-description/autogen.readme.md":f=>{"use strict";f.exports=`# Form

## Konstruktion

### Code

> Um das Zusammenspiel von Komponenten (HTML) und Kontroller (TypeScript) gemeinsam darzustellen, wurden alle Code-Beispiele auf dieser Seite mit den Web Components im TSX geschrieben.

### Beispiel

## Verwendung

### Anwendungsf\xE4lle

### Best practices

## Barrierefreiheit

> Die optische Standardausgabe der Komponente ist auf die Umsetzung der Barrierefreiheit hin optimiert. Wenn Sie eigene Custom Styles verwenden, kann das zu einer Einschr\xE4nkung der Barrierefreiheit f\xFChren.

## Links und Referenzen

<!-- Auto Generated Below -->


## Eigenschaften

| Property        | Attribute        | Description                                                   | Type                                                                                                          | Default     |
| --------------- | ---------------- | ------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ----------- |
| \`_on\`           | --               | Gibt die EventCallback-Funktionen f\xFCr die Form-Events an.     | \`undefined | { onSubmit?: EventCallback<Event> | undefined; onReset?: EventCallback<Event> | undefined; }\` | \`undefined\` |
| \`_requiredText\` | \`_required-text\` | Gibt an, ob der Pflichtfeld-Hinweis eingeblendet werden soll. | \`boolean | string | undefined\`                                                                              | \`true\`      |


## Abh\xE4ngigkeiten

### Abh\xE4ngig von

- kol-indented-text

### Graph
<div class="mermaid">
graph TD;
  kol-form --> kol-indented-text
  style kol-form fill:#f9f,stroke:#333,stroke-width:4px
</div>

----------------------------------------------


`}}]);
