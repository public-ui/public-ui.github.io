(self.webpackChunk_public_ui_storybook=self.webpackChunk_public_ui_storybook||[]).push([[3784],{"./src/components/icon/0-description/autogen.react.stories.mdx":(f,k,e)=>{"use strict";e.r(k),e.d(k,{__namedExportsOrder:()=>x,__page:()=>b,default:()=>L});var i=e("./node_modules/core-js/modules/es.object.keys.js"),d=e.n(i),c=e("./node_modules/core-js/modules/es.array.index-of.js"),o=e.n(c),r=e("./node_modules/core-js/modules/es.symbol.js"),m=e.n(r),g=e("./node_modules/core-js/modules/es.function.bind.js"),h=e.n(g),j=e("./node_modules/core-js/modules/es.object.assign.js"),S=e.n(j),R=e("./node_modules/react/index.js"),u=e("./node_modules/@mdx-js/react/dist/esm.js"),E=e("./node_modules/@storybook/addon-docs/dist/esm/index.js"),D=e("./src/components/icon/0-description/autogen.readme.md"),M=e("./src/components/mermaid.tsx"),v=["components"];function y(){return y=Object.assign?Object.assign.bind():function(n){for(var a=1;a<arguments.length;a++){var s=arguments[a];for(var t in s)Object.prototype.hasOwnProperty.call(s,t)&&(n[t]=s[t])}return n},y.apply(this,arguments)}function C(n,a){if(n==null)return{};var s=P(n,a),t,_;if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(n);for(_=0;_<l.length;_++)t=l[_],!(a.indexOf(t)>=0)&&Object.prototype.propertyIsEnumerable.call(n,t)&&(s[t]=n[t])}return s}function P(n,a){if(n==null)return{};var s={},t=Object.keys(n),_,l;for(l=0;l<t.length;l++)_=t[l],!(a.indexOf(_)>=0)&&(s[_]=n[_]);return s}var T={},A="wrapper";function O(n){var a=n.components,s=C(n,v);return(0,u.kt)(A,y({},T,s,{components:a,mdxType:"MDXLayout"}),(0,u.kt)(E.h_,{title:"React/Icon/Beschreibung",mdxType:"Meta"}),(0,u.kt)(E.dk,{mdxType:"Description"},D),(0,u.kt)("script",null,"() =>",(0,M.m)()))}O.displayName="MDXContent",O.isMDXComponent=!0;var b=function(){throw new Error("Docs-only story")};b.parameters={docsOnly:!0};var p={title:"React/Icon/Beschreibung",includeStories:["__page"]},I={};p.parameters=p.parameters||{},p.parameters.docs=Object.assign({},p.parameters.docs||{},{page:function(){return(0,u.kt)(E.aT,{mdxStoryNameToKey:I,mdxComponentAnnotations:p},(0,u.kt)(O,null))}});const L=p;var x=["__page"]},"./src/components/mermaid.tsx":(f,k,e)=>{"use strict";e.d(k,{G:()=>r,m:()=>o});var i=e("./node_modules/react/index.js"),d=e("./node_modules/mermaid/dist/mermaid.core.mjs");let c;const o=m=>{m&&d.Z.initialize(Object.assign({startOnLoad:!0},m)),clearTimeout(c),c=setTimeout(()=>{clearTimeout(c),d.Z.contentLoaded()},500)},r=({code:m,config:g,children:h})=>((0,i.useEffect)(()=>{o(g)},[]),i.createElement("div",null,i.createElement("div",{className:"mermaid"},m)));try{o.displayName="mermaidLoadContent",o.__docgenInfo={description:"",displayName:"mermaidLoadContent",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/mermaid.tsx#mermaidLoadContent"]={docgenInfo:o.__docgenInfo,name:"mermaidLoadContent",path:"src/components/mermaid.tsx#mermaidLoadContent"})}catch(m){}try{r.displayName="Mermaid",r.__docgenInfo={description:"",displayName:"Mermaid",props:{code:{defaultValue:null,description:"",name:"code",required:!0,type:{name:"string"}},config:{defaultValue:null,description:"",name:"config",required:!1,type:{name:"any"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/mermaid.tsx#Mermaid"]={docgenInfo:r.__docgenInfo,name:"Mermaid",path:"src/components/mermaid.tsx#Mermaid"})}catch(m){}},"./node_modules/moment-mini/locale sync recursive ^\\.\\/.*$":(f,k,e)=>{var i={"./locale":"./node_modules/moment-mini/locale/locale.js","./locale.js":"./node_modules/moment-mini/locale/locale.js"};function d(o){var r=c(o);return e(r)}function c(o){if(!e.o(i,o)){var r=new Error("Cannot find module '"+o+"'");throw r.code="MODULE_NOT_FOUND",r}return i[o]}d.keys=function(){return Object.keys(i)},d.resolve=c,f.exports=d,d.id="./node_modules/moment-mini/locale sync recursive ^\\.\\/.*$"},"./src/components/icon/0-description/autogen.readme.md":f=>{"use strict";f.exports=`# Icon

Mit Hilfe der **Icon**-Komponente k\xF6nnen Icons aus der Icon-Bibliothek an beliebigen Positionen erzeugt werden. Die Ausgabe des Icon kann \xFCber Attribute gesteuert werden und erfolgt barrierefrei. Die Ausgabe erfolgt standardm\xE4\xDFig als **_inline_**-Element.

## Konstruktion

Die Komponente **Icon** wird \xFCber das HTML-Element \`<kol-icon></kol-icon>\` erzeugt.

### Code

> Um das Zusammenspiel von Komponenten (HTML) und Kontroller (TypeScript) gemeinsam darzustellen, wurden alle Code-Beispiele auf dieser Seite mit den Web Components im TSX geschrieben.

\`\`\`tsx
<kol-icon _aria-label="" _icon="fa-solid fa-house"></kol-icon>
\`\`\`

### Beispiel

<kol-icon _aria-label="" _icon="fa-solid fa-house"></kol-icon>

## Verwendung

### Icon

Verwenden Sie das Attribut \`_icon\` um das anzuzeigende Icon festzulegen.

### Best practices

## Barrierefreiheit

> Die optische Standardausgabe der Komponente ist auf die Umsetzung der Barrierefreiheit hin optimiert. Wenn Sie eigene Custom Styles verwenden, kann das zu einer Einschr\xE4nkung der Barrierefreiheit f\xFChren.

### Aria-Hidden

Die Auszeichnung \`aria-hidden\` ist eigentlich nicht erforderlich, da die aktuellen Screenreader, wie NVDA und JAWS, es auch ohne \`aria-hidden\` nicht vorlesen.

Referenz: <https://www.w3.org/TR/wai-aria/states_and_properties#aria-hidden>

## Links und Referenzen

<!-- Auto Generated Below -->


## Eigenschaften

| Property                  | Attribute     | Description                                                                                                                                                                                                                               | Type                  | Default     |
| ------------------------- | ------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------- | ----------- |
| \`_ariaLabel\` _(required)_ | \`_aria-label\` | Gibt das Aria-Label am Icon an.                                                                                                                                                                                                           | \`string\`              | \`undefined\` |
| \`_icon\` _(required)_      | \`_icon\`       | Gibt einen Identifier eines Icons aus den Icon's an.                                                                                                                                                                                      | \`string\`              | \`undefined\` |
| \`_part\`                   | \`_part\`       | <span class="text-red-500">**[DEPRECATED]**</span> Das Styling sollte stets \xFCber CSS erfolgen.<br/><br/>Gibt den Identifier f\xFCr den CSS-Part an, um das Icon von Au\xDFen \xE4ndern zu k\xF6nnen. (https://meowni.ca/posts/part-theme-explainer/) /** | \`string | undefined\` | \`undefined\` |


## Abh\xE4ngigkeiten

### Verwendet von

 - kol-accordion
 - kol-alert
 - kol-breadcrumb
 - kol-details
 - kol-icon-font-awesome
 - kol-icon-icofont
 - kol-input
 - kol-link-wc
 - kol-span-wc

### Graph
<div class="mermaid">
graph TD;
  kol-accordion --> kol-icon
  kol-alert --> kol-icon
  kol-breadcrumb --> kol-icon
  kol-details --> kol-icon
  kol-icon-font-awesome --> kol-icon
  kol-icon-icofont --> kol-icon
  kol-input --> kol-icon
  kol-link-wc --> kol-icon
  kol-span-wc --> kol-icon
  style kol-icon fill:#f9f,stroke:#333,stroke-width:4px
</div>

----------------------------------------------


`}}]);
