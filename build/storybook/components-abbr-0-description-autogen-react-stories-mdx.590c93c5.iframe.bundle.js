(self.webpackChunk_public_ui_storybook=self.webpackChunk_public_ui_storybook||[]).push([[5618],{"./src/components/abbr/0-description/autogen.react.stories.mdx":(p,g,e)=>{"use strict";e.r(g),e.d(g,{__namedExportsOrder:()=>K,__page:()=>O,default:()=>B});var _=e("./node_modules/core-js/modules/es.object.keys.js"),d=e.n(_),l=e("./node_modules/core-js/modules/es.array.index-of.js"),n=e.n(l),r=e("./node_modules/core-js/modules/es.symbol.js"),m=e.n(r),k=e("./node_modules/core-js/modules/es.function.bind.js"),h=e.n(k),j=e("./node_modules/core-js/modules/es.object.assign.js"),x=e.n(j),R=e("./node_modules/react/index.js"),u=e("./node_modules/@mdx-js/react/dist/esm.js"),f=e("./node_modules/@storybook/addon-docs/dist/esm/index.js"),T=e("./src/components/abbr/0-description/autogen.readme.md"),A=e("./src/components/mermaid.tsx"),v=["components"];function E(){return E=Object.assign?Object.assign.bind():function(o){for(var s=1;s<arguments.length;s++){var i=arguments[s];for(var t in i)Object.prototype.hasOwnProperty.call(i,t)&&(o[t]=i[t])}return o},E.apply(this,arguments)}function D(o,s){if(o==null)return{};var i=M(o,s),t,a;if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(o);for(a=0;a<c.length;a++)t=c[a],!(s.indexOf(t)>=0)&&Object.prototype.propertyIsEnumerable.call(o,t)&&(i[t]=o[t])}return i}function M(o,s){if(o==null)return{};var i={},t=Object.keys(o),a,c;for(c=0;c<t.length;c++)a=t[c],!(s.indexOf(a)>=0)&&(i[a]=o[a]);return i}var C={},P="wrapper";function y(o){var s=o.components,i=D(o,v);return(0,u.kt)(P,E({},C,i,{components:s,mdxType:"MDXLayout"}),(0,u.kt)(f.h_,{title:"React/Abbr/Beschreibung",mdxType:"Meta"}),(0,u.kt)(f.dk,{mdxType:"Description"},T),(0,u.kt)("script",null,"() =>",(0,A.m)()))}y.displayName="MDXContent",y.isMDXComponent=!0;var O=function(){throw new Error("Docs-only story")};O.parameters={docsOnly:!0};var b={title:"React/Abbr/Beschreibung",includeStories:["__page"]},L={};b.parameters=b.parameters||{},b.parameters.docs=Object.assign({},b.parameters.docs||{},{page:function(){return(0,u.kt)(f.aT,{mdxStoryNameToKey:L,mdxComponentAnnotations:b},(0,u.kt)(y,null))}});const B=b;var K=["__page"]},"./src/components/mermaid.tsx":(p,g,e)=>{"use strict";e.d(g,{G:()=>r,m:()=>n});var _=e("./node_modules/react/index.js"),d=e("./node_modules/mermaid/dist/mermaid.core.mjs");let l;const n=m=>{m&&d.Z.initialize(Object.assign({startOnLoad:!0},m)),clearTimeout(l),l=setTimeout(()=>{clearTimeout(l),d.Z.contentLoaded()},500)},r=({code:m,config:k,children:h})=>((0,_.useEffect)(()=>{n(k)},[]),_.createElement("div",null,_.createElement("div",{className:"mermaid"},m)));try{n.displayName="mermaidLoadContent",n.__docgenInfo={description:"",displayName:"mermaidLoadContent",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/mermaid.tsx#mermaidLoadContent"]={docgenInfo:n.__docgenInfo,name:"mermaidLoadContent",path:"src/components/mermaid.tsx#mermaidLoadContent"})}catch(m){}try{r.displayName="Mermaid",r.__docgenInfo={description:"",displayName:"Mermaid",props:{code:{defaultValue:null,description:"",name:"code",required:!0,type:{name:"string"}},config:{defaultValue:null,description:"",name:"config",required:!1,type:{name:"any"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/mermaid.tsx#Mermaid"]={docgenInfo:r.__docgenInfo,name:"Mermaid",path:"src/components/mermaid.tsx#Mermaid"})}catch(m){}},"./node_modules/moment-mini/locale sync recursive ^\\.\\/.*$":(p,g,e)=>{var _={"./locale":"./node_modules/moment-mini/locale/locale.js","./locale.js":"./node_modules/moment-mini/locale/locale.js"};function d(n){var r=l(n);return e(r)}function l(n){if(!e.o(_,n)){var r=new Error("Cannot find module '"+n+"'");throw r.code="MODULE_NOT_FOUND",r}return _[n]}d.keys=function(){return Object.keys(_)},d.resolve=l,p.exports=d,d.id="./node_modules/moment-mini/locale sync recursive ^\\.\\/.*$"},"./src/components/abbr/0-description/autogen.readme.md":p=>{"use strict";p.exports=`# Abbr

Die **Abbr**-Komponente implementiert den HTML-Tag \`abbr\`, wobei hier jedoch der Tooltip barrierefrei ist.
Der Tooltip f\xFCr die Beschreibung wird bei Focus oder Hover der **Abbr**-Komponente angezeigt und vorgelesen.

## Konstruktion

### Code

> Um das Zusammenspiel von Komponenten (HTML) und Kontroller (TypeScript) gemeinsam darzustellen, wurden alle Code-Beispiele auf dieser Seite mit den Web Components im TSX geschrieben.

\`\`\`tsx
<kol-abbr _title="Abk\xFCrzung" _tooltip-align="top">
	Abbr
</kol-abbr>
\`\`\`

### Beispiel

<p>Ich bin eine <kol-abbr _title="Abk\xFCrzung" _tooltip-align="top">Abbr</kol-abbr> mit Tooltip oben.</p>
<p>Ich bin eine <kol-abbr _title="Abk\xFCrzung" _tooltip-align="right">Abbr</kol-abbr> mit Tooltip rechts.</p>
<p>Ich bin eine <kol-abbr _title="Abk\xFCrzung" _tooltip-align="bottom">Abbr</kol-abbr> mit Tooltip unten.</p>
<p>Ich bin eine <kol-abbr _title="Abk\xFCrzung" _tooltip-align="left">Abbr</kol-abbr> mit Tooltip links.</p>

## Verwendung

### Angabe der Beschreibung zur Abk\xFCrzung

Die eigentliche Beschreibung wird \xFCber das Attribut **\`_title\`** \xFCbergeben.

### Ausrichtung des Tooltip

\xDCber das Attribut **\`_tooltip-align\`** wird die Positionierung des ToolTip, relativ zur Abk\xFCrzung, festgelegt.

<!--### Best practices

### Anwendungsf\xE4lle-->

## Barrierefreiheit

> Die optische Standardausgabe der Komponente ist auf die Umsetzung der Barrierefreiheit hin optimiert. Wenn Sie eigene Custom Styles verwenden, kann das zu einer Einschr\xE4nkung der Barrierefreiheit f\xFChren.

Die Abbr-Komponente wurde von KoliBri umgesetzt, weil der Standard-Tooltip nicht barrierefrei bzgl. der Skalierung ist. Mittels der KoliBri-Komponente zoomt der Tooltip proportional zu seinem Text mit und wird vorgelesen.

## Links und Referenzen

- https://developer.mozilla.org/de/docs/Web/HTML/Element/abbr

<!-- Auto Generated Below -->


## Eigenschaften

| Property              | Attribute        | Description                                                                            | Type                                                  | Default     |
| --------------------- | ---------------- | -------------------------------------------------------------------------------------- | ----------------------------------------------------- | ----------- |
| \`_title\` _(required)_ | \`_title\`         | Dieses Property gibt die Beschreibung oder Erl\xE4uterung der Abk\xFCrzung an.               | \`string\`                                              | \`undefined\` |
| \`_tooltipAlign\`       | \`_tooltip-align\` | Gibt an, ob der Tooltip entweder oben, rechts, unten oder links angezeigt werden soll. | \`"bottom" | "left" | "right" | "top" | undefined\` | \`'top'\`     |


## Abh\xE4ngigkeiten

### Abh\xE4ngig von

- kol-tooltip

### Graph
<div class="mermaid">
graph TD;
  kol-abbr --> kol-tooltip
  kol-tooltip --> kol-badge
  kol-badge --> kol-span-wc
  kol-badge --> kol-button-wc
  kol-span-wc --> kol-icon
  kol-button-wc --> kol-span-wc
  kol-button-wc --> kol-tooltip
  style kol-abbr fill:#f9f,stroke:#333,stroke-width:4px
</div>

----------------------------------------------


`}}]);
