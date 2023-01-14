(self.webpackChunk_public_ui_storybook=self.webpackChunk_public_ui_storybook||[]).push([[5618],{"./src/components/abbr/0-description/autogen.react.stories.mdx":(b,g,e)=>{"use strict";e.r(g),e.d(g,{__namedExportsOrder:()=>K,__page:()=>O,default:()=>B});var _=e("./node_modules/core-js/modules/es.object.keys.js"),d=e.n(_),m=e("./node_modules/core-js/modules/es.array.index-of.js"),o=e.n(m),r=e("./node_modules/core-js/modules/es.symbol.js"),l=e.n(r),k=e("./node_modules/core-js/modules/es.function.bind.js"),h=e.n(k),j=e("./node_modules/core-js/modules/es.object.assign.js"),x=e.n(j),R=e("./node_modules/react/index.js"),u=e("./node_modules/@mdx-js/react/dist/esm.js"),f=e("./node_modules/@storybook/addon-docs/dist/esm/index.js"),T=e("./src/components/abbr/0-description/autogen.readme.md"),A=e("./src/components/mermaid.tsx"),v=["components"];function E(){return E=Object.assign?Object.assign.bind():function(n){for(var i=1;i<arguments.length;i++){var s=arguments[i];for(var t in s)Object.prototype.hasOwnProperty.call(s,t)&&(n[t]=s[t])}return n},E.apply(this,arguments)}function D(n,i){if(n==null)return{};var s=M(n,i),t,a;if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(n);for(a=0;a<c.length;a++)t=c[a],!(i.indexOf(t)>=0)&&Object.prototype.propertyIsEnumerable.call(n,t)&&(s[t]=n[t])}return s}function M(n,i){if(n==null)return{};var s={},t=Object.keys(n),a,c;for(c=0;c<t.length;c++)a=t[c],!(i.indexOf(a)>=0)&&(s[a]=n[a]);return s}var C={},P="wrapper";function y(n){var i=n.components,s=D(n,v);return(0,u.kt)(P,E({},C,s,{components:i,mdxType:"MDXLayout"}),(0,u.kt)(f.h_,{title:"React/Abbr/Beschreibung",mdxType:"Meta"}),(0,u.kt)(f.dk,{mdxType:"Description"},T),(0,u.kt)("script",null,"() =>",(0,A.m)()))}y.displayName="MDXContent",y.isMDXComponent=!0;var O=function(){throw new Error("Docs-only story")};O.parameters={docsOnly:!0};var p={title:"React/Abbr/Beschreibung",includeStories:["__page"]},L={};p.parameters=p.parameters||{},p.parameters.docs=Object.assign({},p.parameters.docs||{},{page:function(){return(0,u.kt)(f.aT,{mdxStoryNameToKey:L,mdxComponentAnnotations:p},(0,u.kt)(y,null))}});const B=p;var K=["__page"]},"./src/components/mermaid.tsx":(b,g,e)=>{"use strict";e.d(g,{G:()=>r,m:()=>o});var _=e("./node_modules/react/index.js"),d=e("./node_modules/mermaid/dist/mermaid.core.mjs");let m;const o=l=>{l&&d.Z.initialize(Object.assign({startOnLoad:!0},l)),clearTimeout(m),m=setTimeout(()=>{clearTimeout(m),d.Z.contentLoaded()},500)},r=({code:l,config:k,children:h})=>((0,_.useEffect)(()=>{o(k)},[]),_.createElement("div",null,_.createElement("div",{className:"mermaid"},l)));try{o.displayName="mermaidLoadContent",o.__docgenInfo={description:"",displayName:"mermaidLoadContent",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/mermaid.tsx#mermaidLoadContent"]={docgenInfo:o.__docgenInfo,name:"mermaidLoadContent",path:"src/components/mermaid.tsx#mermaidLoadContent"})}catch(l){}try{r.displayName="Mermaid",r.__docgenInfo={description:"",displayName:"Mermaid",props:{code:{defaultValue:null,description:"",name:"code",required:!0,type:{name:"string"}},config:{defaultValue:null,description:"",name:"config",required:!1,type:{name:"any"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/mermaid.tsx#Mermaid"]={docgenInfo:r.__docgenInfo,name:"Mermaid",path:"src/components/mermaid.tsx#Mermaid"})}catch(l){}},"./node_modules/moment-mini/locale sync recursive ^\\.\\/.*$":(b,g,e)=>{var _={"./locale":"./node_modules/moment-mini/locale/locale.js","./locale.js":"./node_modules/moment-mini/locale/locale.js"};function d(o){var r=m(o);return e(r)}function m(o){if(!e.o(_,o)){var r=new Error("Cannot find module '"+o+"'");throw r.code="MODULE_NOT_FOUND",r}return _[o]}d.keys=function(){return Object.keys(_)},d.resolve=m,b.exports=d,d.id="./node_modules/moment-mini/locale sync recursive ^\\.\\/.*$"},"./src/components/abbr/0-description/autogen.readme.md":b=>{"use strict";b.exports=`# Abbr

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
