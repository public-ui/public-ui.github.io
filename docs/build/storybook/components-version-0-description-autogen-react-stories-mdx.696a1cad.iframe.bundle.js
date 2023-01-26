(self.webpackChunk_public_ui_storybook=self.webpackChunk_public_ui_storybook||[]).push([[1647],{"./src/components/version/0-description/autogen.react.stories.mdx":(g,k,e)=>{"use strict";e.r(k),e.d(k,{__namedExportsOrder:()=>L,__page:()=>O,default:()=>K});var i=e("./node_modules/core-js/modules/es.object.keys.js"),d=e.n(i),m=e("./node_modules/core-js/modules/es.array.index-of.js"),o=e.n(m),t=e("./node_modules/core-js/modules/es.symbol.js"),l=e.n(t),b=e("./node_modules/core-js/modules/es.function.bind.js"),v=e.n(b),j=e("./node_modules/core-js/modules/es.object.assign.js"),B=e.n(j),R=e("./node_modules/react/index.js"),u=e("./node_modules/@mdx-js/react/dist/esm.js"),f=e("./node_modules/@storybook/addon-docs/dist/esm/index.js"),D=e("./src/components/version/0-description/autogen.readme.md"),M=e("./src/components/mermaid.tsx"),h=["components"];function E(){return E=Object.assign?Object.assign.bind():function(n){for(var _=1;_<arguments.length;_++){var s=arguments[_];for(var r in s)Object.prototype.hasOwnProperty.call(s,r)&&(n[r]=s[r])}return n},E.apply(this,arguments)}function T(n,_){if(n==null)return{};var s=C(n,_),r,a;if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(n);for(a=0;a<c.length;a++)r=c[a],!(_.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(n,r)&&(s[r]=n[r])}return s}function C(n,_){if(n==null)return{};var s={},r=Object.keys(n),a,c;for(c=0;c<r.length;c++)a=r[c],!(_.indexOf(a)>=0)&&(s[a]=n[a]);return s}var P={},A="wrapper";function y(n){var _=n.components,s=T(n,h);return(0,u.kt)(A,E({},P,s,{components:_,mdxType:"MDXLayout"}),(0,u.kt)(f.h_,{title:"React/Version/Beschreibung",mdxType:"Meta"}),(0,u.kt)(f.dk,{mdxType:"Description"},D),(0,u.kt)("script",null,"() =>",(0,M.m)()))}y.displayName="MDXContent",y.isMDXComponent=!0;var O=function(){throw new Error("Docs-only story")};O.parameters={docsOnly:!0};var p={title:"React/Version/Beschreibung",includeStories:["__page"]},x={};p.parameters=p.parameters||{},p.parameters.docs=Object.assign({},p.parameters.docs||{},{page:function(){return(0,u.kt)(f.aT,{mdxStoryNameToKey:x,mdxComponentAnnotations:p},(0,u.kt)(y,null))}});const K=p;var L=["__page"]},"./src/components/mermaid.tsx":(g,k,e)=>{"use strict";e.d(k,{G:()=>t,m:()=>o});var i=e("./node_modules/react/index.js"),d=e("./node_modules/mermaid/dist/mermaid.core.mjs");let m;const o=l=>{l&&d.Z.initialize(Object.assign({startOnLoad:!0},l)),clearTimeout(m),m=setTimeout(()=>{clearTimeout(m),d.Z.contentLoaded()},500)},t=({code:l,config:b,children:v})=>((0,i.useEffect)(()=>{o(b)},[]),i.createElement("div",null,i.createElement("div",{className:"mermaid"},l)));try{o.displayName="mermaidLoadContent",o.__docgenInfo={description:"",displayName:"mermaidLoadContent",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/mermaid.tsx#mermaidLoadContent"]={docgenInfo:o.__docgenInfo,name:"mermaidLoadContent",path:"src/components/mermaid.tsx#mermaidLoadContent"})}catch(l){}try{t.displayName="Mermaid",t.__docgenInfo={description:"",displayName:"Mermaid",props:{code:{defaultValue:null,description:"",name:"code",required:!0,type:{name:"string"}},config:{defaultValue:null,description:"",name:"config",required:!1,type:{name:"any"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/mermaid.tsx#Mermaid"]={docgenInfo:t.__docgenInfo,name:"Mermaid",path:"src/components/mermaid.tsx#Mermaid"})}catch(l){}},"./node_modules/moment-mini/locale sync recursive ^\\.\\/.*$":(g,k,e)=>{var i={"./locale":"./node_modules/moment-mini/locale/locale.js","./locale.js":"./node_modules/moment-mini/locale/locale.js"};function d(o){var t=m(o);return e(t)}function m(o){if(!e.o(i,o)){var t=new Error("Cannot find module '"+o+"'");throw t.code="MODULE_NOT_FOUND",t}return i[o]}d.keys=function(){return Object.keys(i)},d.resolve=m,g.exports=d,d.id="./node_modules/moment-mini/locale sync recursive ^\\.\\/.*$"},"./src/components/version/0-description/autogen.readme.md":g=>{"use strict";g.exports=`# Version

Die **Version**-Komponente stellt kurze Inhalte auf einem farbigen Hintergrund dar. Die **Version**-Komponente ist mit der **Tag**-Komponente eng verwandt, bietet aber nur ein Attribut zur Konfiguration. Sie ist optimiert f\xFCr die
Angabe z.B. von Versionen einer Seite.

## Konstruktion

### Code

> Um das Zusammenspiel von Komponenten (HTML) und Kontroller (TypeScript) gemeinsam darzustellen, wurden alle Code-Beispiele auf dieser Seite mit den Web Components im TSX geschrieben.

\`\`\`tsx
<div>
	<kol-version _version="1.0.0"></kol-version>
</div>
\`\`\`

### Beispiel

<kol-version _version="1.0.0"></kol-version>

## Verwendung

F\xFCr die Konfiguration steht das Attribut \`_label_\` zur Verf\xFCgung und nimmt einen beliebigen Text auf, der in der Komponente angezeigt wird.

Die **Version** wird standardm\xE4\xDFig als **_Inline-Element_** ausgegeben.

Bitte beachten Sie, dass innerhalb der Komponente dem Text aus dem Attribut **\\_version** ein **"v"** vorangestellt wird.

<!--### Best practices

### Anwendungsf\xE4lle-->

## Barrierefreiheit

> Die optische Standardausgabe der Komponente ist auf die Umsetzung der Barrierefreiheit hin optimiert. Wenn Sie eigene Custom Styles verwenden, kann das zu einer Einschr\xE4nkung der Barrierefreiheit f\xFChren.

<!--## Links und Referenzen

<!-- Auto Generated Below -->


## Eigenschaften

| Property                | Attribute  | Description                          | Type     | Default     |
| ----------------------- | ---------- | ------------------------------------ | -------- | ----------- |
| \`_version\` _(required)_ | \`_version\` | Gibt die Versionsnummer als Text an. | \`string\` | \`undefined\` |


## Abh\xE4ngigkeiten

### Abh\xE4ngig von

- kol-badge

### Graph
<div class="mermaid">
graph TD;
  kol-version --> kol-badge
  kol-badge --> kol-span-wc
  kol-badge --> kol-button-wc
  kol-span-wc --> kol-icon
  kol-button-wc --> kol-span-wc
  kol-button-wc --> kol-tooltip
  kol-tooltip --> kol-badge
  style kol-version fill:#f9f,stroke:#333,stroke-width:4px
</div>

----------------------------------------------


`}}]);
