(self.webpackChunk_public_ui_storybook=self.webpackChunk_public_ui_storybook||[]).push([[1031],{"./src/components/icon/0-description/autogen.wc.stories.mdx":(k,f,e)=>{"use strict";e.r(f),e.d(f,{__namedExportsOrder:()=>x,__page:()=>O,default:()=>L});var _=e("./node_modules/core-js/modules/es.object.keys.js"),d=e.n(_),l=e("./node_modules/core-js/modules/es.array.index-of.js"),o=e.n(l),t=e("./node_modules/core-js/modules/es.symbol.js"),c=e.n(t),b=e("./node_modules/core-js/modules/es.function.bind.js"),h=e.n(b),j=e("./node_modules/core-js/modules/es.object.assign.js"),S=e.n(j),B=e("./node_modules/react/index.js"),u=e("./node_modules/@mdx-js/react/dist/esm.js"),g=e("./node_modules/@storybook/addon-docs/dist/esm/index.js"),D=e("./src/components/icon/0-description/autogen.readme.md"),C=e("./src/components/mermaid.tsx"),M=["components"];function E(){return E=Object.assign?Object.assign.bind():function(n){for(var i=1;i<arguments.length;i++){var s=arguments[i];for(var r in s)Object.prototype.hasOwnProperty.call(s,r)&&(n[r]=s[r])}return n},E.apply(this,arguments)}function v(n,i){if(n==null)return{};var s=P(n,i),r,a;if(Object.getOwnPropertySymbols){var m=Object.getOwnPropertySymbols(n);for(a=0;a<m.length;a++)r=m[a],!(i.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(n,r)&&(s[r]=n[r])}return s}function P(n,i){if(n==null)return{};var s={},r=Object.keys(n),a,m;for(m=0;m<r.length;m++)a=r[m],!(i.indexOf(a)>=0)&&(s[a]=n[a]);return s}var T={},A="wrapper";function y(n){var i=n.components,s=v(n,M);return(0,u.kt)(A,E({},T,s,{components:i,mdxType:"MDXLayout"}),(0,u.kt)(g.h_,{title:"Web Components/Icon/Beschreibung",mdxType:"Meta"}),(0,u.kt)(g.dk,{mdxType:"Description"},D),(0,u.kt)("script",null,"() =>",(0,C.m)()))}y.displayName="MDXContent",y.isMDXComponent=!0;var O=function(){throw new Error("Docs-only story")};O.parameters={docsOnly:!0};var p={title:"Web Components/Icon/Beschreibung",includeStories:["__page"]},I={};p.parameters=p.parameters||{},p.parameters.docs=Object.assign({},p.parameters.docs||{},{page:function(){return(0,u.kt)(g.aT,{mdxStoryNameToKey:I,mdxComponentAnnotations:p},(0,u.kt)(y,null))}});const L=p;var x=["__page"]},"./src/components/mermaid.tsx":(k,f,e)=>{"use strict";e.d(f,{G:()=>t,m:()=>o});var _=e("./node_modules/react/index.js"),d=e("./node_modules/mermaid/dist/mermaid.core.mjs");let l;const o=c=>{c&&d.Z.initialize(Object.assign({startOnLoad:!0},c)),clearTimeout(l),l=setTimeout(()=>{clearTimeout(l),d.Z.contentLoaded()},500)},t=({code:c,config:b,children:h})=>((0,_.useEffect)(()=>{o(b)},[]),_.createElement("div",null,_.createElement("div",{className:"mermaid"},c)));try{o.displayName="mermaidLoadContent",o.__docgenInfo={description:"",displayName:"mermaidLoadContent",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/mermaid.tsx#mermaidLoadContent"]={docgenInfo:o.__docgenInfo,name:"mermaidLoadContent",path:"src/components/mermaid.tsx#mermaidLoadContent"})}catch(c){}try{t.displayName="Mermaid",t.__docgenInfo={description:"",displayName:"Mermaid",props:{code:{defaultValue:null,description:"",name:"code",required:!0,type:{name:"string"}},config:{defaultValue:null,description:"",name:"config",required:!1,type:{name:"any"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/mermaid.tsx#Mermaid"]={docgenInfo:t.__docgenInfo,name:"Mermaid",path:"src/components/mermaid.tsx#Mermaid"})}catch(c){}},"./node_modules/moment-mini/locale sync recursive ^\\.\\/.*$":(k,f,e)=>{var _={"./locale":"./node_modules/moment-mini/locale/locale.js","./locale.js":"./node_modules/moment-mini/locale/locale.js"};function d(o){var t=l(o);return e(t)}function l(o){if(!e.o(_,o)){var t=new Error("Cannot find module '"+o+"'");throw t.code="MODULE_NOT_FOUND",t}return _[o]}d.keys=function(){return Object.keys(_)},d.resolve=l,k.exports=d,d.id="./node_modules/moment-mini/locale sync recursive ^\\.\\/.*$"},"./src/components/icon/0-description/autogen.readme.md":k=>{"use strict";k.exports=`# Icon

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
