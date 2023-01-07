(self.webpackChunk_public_ui_storybook=self.webpackChunk_public_ui_storybook||[]).push([[188],{"./src/components/progress/0-description/autogen.wc.stories.mdx":(g,f,e)=>{"use strict";e.r(f),e.d(f,{__namedExportsOrder:()=>K,__page:()=>j,default:()=>L});var a=e("./node_modules/core-js/modules/es.object.keys.js"),i=e.n(a),m=e("./node_modules/core-js/modules/es.array.index-of.js"),o=e.n(m),r=e("./node_modules/core-js/modules/es.symbol.js"),u=e.n(r),y=e("./node_modules/core-js/modules/es.function.bind.js"),h=e.n(y),v=e("./node_modules/core-js/modules/es.object.assign.js"),B=e.n(v),R=e("./node_modules/react/index.js"),l=e("./node_modules/@mdx-js/react/dist/esm.js"),E=e("./node_modules/@storybook/addon-docs/dist/esm/index.js"),k=e("./src/components/progress/0-description/autogen.readme.md"),M=e("./src/components/mermaid.tsx"),C=["components"];function b(){return b=Object.assign?Object.assign.bind():function(n){for(var _=1;_<arguments.length;_++){var s=arguments[_];for(var t in s)Object.prototype.hasOwnProperty.call(s,t)&&(n[t]=s[t])}return n},b.apply(this,arguments)}function D(n,_){if(n==null)return{};var s=P(n,_),t,d;if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(n);for(d=0;d<c.length;d++)t=c[d],!(_.indexOf(t)>=0)&&(!Object.prototype.propertyIsEnumerable.call(n,t)||(s[t]=n[t]))}return s}function P(n,_){if(n==null)return{};var s={},t=Object.keys(n),d,c;for(c=0;c<t.length;c++)d=t[c],!(_.indexOf(d)>=0)&&(s[d]=n[d]);return s}var T={},A="wrapper";function O(n){var _=n.components,s=D(n,C);return(0,l.kt)(A,b({},T,s,{components:_,mdxType:"MDXLayout"}),(0,l.kt)(E.h_,{title:"Web Components/Progress/Beschreibung",mdxType:"Meta"}),(0,l.kt)(E.dk,{mdxType:"Description"},k),(0,l.kt)("script",null,"() =>",(0,M.m)()))}O.displayName="MDXContent",O.isMDXComponent=!0;var j=function(){throw new Error("Docs-only story")};j.parameters={docsOnly:!0};var p={title:"Web Components/Progress/Beschreibung",includeStories:["__page"]},x={};p.parameters=p.parameters||{},p.parameters.docs=Object.assign({},p.parameters.docs||{},{page:function(){return(0,l.kt)(E.aT,{mdxStoryNameToKey:x,mdxComponentAnnotations:p},(0,l.kt)(O,null))}});const L=p;var K=["__page"]},"./src/components/mermaid.tsx":(g,f,e)=>{"use strict";e.d(f,{G:()=>r,m:()=>o});var a=e("./node_modules/react/index.js"),i=e("./node_modules/mermaid/dist/mermaid.core.mjs");let m;const o=u=>{u&&i.Z.initialize(Object.assign({startOnLoad:!0},u)),clearTimeout(m),m=setTimeout(()=>{clearTimeout(m),i.Z.contentLoaded()},500)},r=({code:u,config:y,children:h})=>((0,a.useEffect)(()=>{o(y)},[]),a.createElement("div",null,a.createElement("div",{className:"mermaid"},u)));try{o.displayName="mermaidLoadContent",o.__docgenInfo={description:"",displayName:"mermaidLoadContent",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/mermaid.tsx#mermaidLoadContent"]={docgenInfo:o.__docgenInfo,name:"mermaidLoadContent",path:"src/components/mermaid.tsx#mermaidLoadContent"})}catch(u){}try{r.displayName="Mermaid",r.__docgenInfo={description:"",displayName:"Mermaid",props:{code:{defaultValue:null,description:"",name:"code",required:!0,type:{name:"string"}},config:{defaultValue:null,description:"",name:"config",required:!1,type:{name:"any"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/mermaid.tsx#Mermaid"]={docgenInfo:r.__docgenInfo,name:"Mermaid",path:"src/components/mermaid.tsx#Mermaid"})}catch(u){}},"./node_modules/moment-mini/locale sync recursive ^\\.\\/.*$":(g,f,e)=>{var a={"./locale":"./node_modules/moment-mini/locale/locale.js","./locale.js":"./node_modules/moment-mini/locale/locale.js"};function i(o){var r=m(o);return e(r)}function m(o){if(!e.o(a,o)){var r=new Error("Cannot find module '"+o+"'");throw r.code="MODULE_NOT_FOUND",r}return a[o]}i.keys=function(){return Object.keys(a)},i.resolve=m,g.exports=i,i.id="./node_modules/moment-mini/locale sync recursive ^\\.\\/.*$"},"./src/components/progress/0-description/autogen.readme.md":g=>{"use strict";g.exports=`# Progress

Die **Progress**-Komponente erzeugt einen Fortschrittsbalken, \xFCber den eine optische R\xFCckmeldung gegeben werden kann.

## Konstruktion

### Code

> Um das Zusammenspiel von Komponenten (HTML) und Kontroller (TypeScript) gemeinsam darzustellen, wurden alle Code-Beispiele auf dieser Seite mit den Web Components im TSX geschrieben.

\`\`\`tsx
<div>
	<kol-progress _type="bar" _max="100" _value="20"></kol-progress>
</div>
\`\`\`

### Beispiel

<kol-progress _type="bar" _max="100" _value="20"></kol-progress>

## Verwendung

Verwenden Sie das Attribut \`_type\`, um die optische Ausgabe der Komponente zu steuern. M\xF6gliche Werte sind:

- **bar** f\xFCr eine Ausgabe als horizontaler Fortschrittsbalken
- **cycle** f\xFCr eine Ausgabe als kreisf\xF6rmiger Fortschrittsbalken

Verwenden Sie das Attribut \`_max\`, um den maximalen Wert der Komponente zu bestimmen.

Verwenden Sie das Attribut \`_value\`, um den aktuellen Wert der Komponente zu bestimmen.

<!--### Best practices

### Anwendungsf\xE4lle-->

## Barrierefreiheit

> Die optische Standardausgabe der Komponente ist auf die Umsetzung der Barrierefreiheit hin optimiert. Wenn Sie eigene Custom Styles verwenden, kann das zu einer Einschr\xE4nkung der Barrierefreiheit f\xFChren.

## Links und Referenzen

- https://developer.mozilla.org/de/docs/Web/HTML/Element/progress
- https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_progressbar_role

<!-- Auto Generated Below -->


## Eigenschaften

| Property              | Attribute | Description                                                          | Type                            | Default     |
| --------------------- | --------- | -------------------------------------------------------------------- | ------------------------------- | ----------- |
| \`_max\` _(required)_   | \`_max\`    | Gibt an, bei welchem Wert die Fortschrittsanzeige abgeschlossen ist. | \`number\`                        | \`undefined\` |
| \`_type\`               | \`_type\`   | Gibt an, ob der Prozess als Balken oder Kreis dargestellt wird.      | \`"bar" | "cycle" | undefined\` | \`undefined\` |
| \`_unit\`               | \`_unit\`   | Gibt die Einheit der Fortschrittswerte an.                           | \`string | undefined\`           | \`'%'\`       |
| \`_value\` _(required)_ | \`_value\`  | Gibt an, wie weit die Anzeige fortgeschritten ist.                   | \`number\`                        | \`undefined\` |


----------------------------------------------


`}}]);
