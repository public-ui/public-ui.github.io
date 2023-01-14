(self.webpackChunk_public_ui_storybook=self.webpackChunk_public_ui_storybook||[]).push([[1647],{"./src/components/version/0-description/autogen.react.stories.mdx":(g,f,e)=>{"use strict";e.r(f),e.d(f,{__namedExportsOrder:()=>L,__page:()=>k,default:()=>K});var a=e("./node_modules/core-js/modules/es.object.keys.js"),i=e.n(a),m=e("./node_modules/core-js/modules/es.array.index-of.js"),o=e.n(m),r=e("./node_modules/core-js/modules/es.symbol.js"),c=e.n(r),E=e("./node_modules/core-js/modules/es.function.bind.js"),b=e.n(E),j=e("./node_modules/core-js/modules/es.object.assign.js"),B=e.n(j),R=e("./node_modules/react/index.js"),l=e("./node_modules/@mdx-js/react/dist/esm.js"),y=e("./node_modules/@storybook/addon-docs/dist/esm/index.js"),D=e("./src/components/version/0-description/autogen.readme.md"),M=e("./src/components/mermaid.tsx"),h=["components"];function O(){return O=Object.assign?Object.assign.bind():function(n){for(var _=1;_<arguments.length;_++){var s=arguments[_];for(var t in s)Object.prototype.hasOwnProperty.call(s,t)&&(n[t]=s[t])}return n},O.apply(this,arguments)}function T(n,_){if(n==null)return{};var s=C(n,_),t,d;if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(n);for(d=0;d<u.length;d++)t=u[d],!(_.indexOf(t)>=0)&&Object.prototype.propertyIsEnumerable.call(n,t)&&(s[t]=n[t])}return s}function C(n,_){if(n==null)return{};var s={},t=Object.keys(n),d,u;for(u=0;u<t.length;u++)d=t[u],!(_.indexOf(d)>=0)&&(s[d]=n[d]);return s}var P={},A="wrapper";function v(n){var _=n.components,s=T(n,h);return(0,l.kt)(A,O({},P,s,{components:_,mdxType:"MDXLayout"}),(0,l.kt)(y.h_,{title:"React/Version/Beschreibung",mdxType:"Meta"}),(0,l.kt)(y.dk,{mdxType:"Description"},D),(0,l.kt)("script",null,"() =>",(0,M.m)()))}v.displayName="MDXContent",v.isMDXComponent=!0;var k=function(){throw new Error("Docs-only story")};k.parameters={docsOnly:!0};var p={title:"React/Version/Beschreibung",includeStories:["__page"]},x={};p.parameters=p.parameters||{},p.parameters.docs=Object.assign({},p.parameters.docs||{},{page:function(){return(0,l.kt)(y.aT,{mdxStoryNameToKey:x,mdxComponentAnnotations:p},(0,l.kt)(v,null))}});const K=p;var L=["__page"]},"./src/components/mermaid.tsx":(g,f,e)=>{"use strict";e.d(f,{G:()=>r,m:()=>o});var a=e("./node_modules/react/index.js"),i=e("./node_modules/mermaid/dist/mermaid.core.mjs");let m;const o=c=>{c&&i.Z.initialize(Object.assign({startOnLoad:!0},c)),clearTimeout(m),m=setTimeout(()=>{clearTimeout(m),i.Z.contentLoaded()},500)},r=({code:c,config:E,children:b})=>((0,a.useEffect)(()=>{o(E)},[]),a.createElement("div",null,a.createElement("div",{className:"mermaid"},c)));try{o.displayName="mermaidLoadContent",o.__docgenInfo={description:"",displayName:"mermaidLoadContent",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/mermaid.tsx#mermaidLoadContent"]={docgenInfo:o.__docgenInfo,name:"mermaidLoadContent",path:"src/components/mermaid.tsx#mermaidLoadContent"})}catch(c){}try{r.displayName="Mermaid",r.__docgenInfo={description:"",displayName:"Mermaid",props:{code:{defaultValue:null,description:"",name:"code",required:!0,type:{name:"string"}},config:{defaultValue:null,description:"",name:"config",required:!1,type:{name:"any"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/mermaid.tsx#Mermaid"]={docgenInfo:r.__docgenInfo,name:"Mermaid",path:"src/components/mermaid.tsx#Mermaid"})}catch(c){}},"./node_modules/moment-mini/locale sync recursive ^\\.\\/.*$":(g,f,e)=>{var a={"./locale":"./node_modules/moment-mini/locale/locale.js","./locale.js":"./node_modules/moment-mini/locale/locale.js"};function i(o){var r=m(o);return e(r)}function m(o){if(!e.o(a,o)){var r=new Error("Cannot find module '"+o+"'");throw r.code="MODULE_NOT_FOUND",r}return a[o]}i.keys=function(){return Object.keys(a)},i.resolve=m,g.exports=i,i.id="./node_modules/moment-mini/locale sync recursive ^\\.\\/.*$"},"./src/components/version/0-description/autogen.readme.md":g=>{"use strict";g.exports=`# Version

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
