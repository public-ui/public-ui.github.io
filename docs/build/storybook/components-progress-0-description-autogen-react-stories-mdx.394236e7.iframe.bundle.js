(self.webpackChunk_public_ui_storybook=self.webpackChunk_public_ui_storybook||[]).push([[312],{"./src/components/progress/0-description/autogen.react.stories.mdx":(g,b,e)=>{"use strict";e.r(b),e.d(b,{__namedExportsOrder:()=>K,__page:()=>O,default:()=>L});var i=e("./node_modules/core-js/modules/es.object.keys.js"),d=e.n(i),m=e("./node_modules/core-js/modules/es.array.index-of.js"),o=e.n(m),t=e("./node_modules/core-js/modules/es.symbol.js"),l=e.n(t),f=e("./node_modules/core-js/modules/es.function.bind.js"),j=e.n(f),h=e("./node_modules/core-js/modules/es.object.assign.js"),R=e.n(h),B=e("./node_modules/react/index.js"),u=e("./node_modules/@mdx-js/react/dist/esm.js"),y=e("./node_modules/@storybook/addon-docs/dist/esm/index.js"),v=e("./src/components/progress/0-description/autogen.readme.md"),M=e("./src/components/mermaid.tsx"),D=["components"];function E(){return E=Object.assign?Object.assign.bind():function(n){for(var _=1;_<arguments.length;_++){var s=arguments[_];for(var r in s)Object.prototype.hasOwnProperty.call(s,r)&&(n[r]=s[r])}return n},E.apply(this,arguments)}function P(n,_){if(n==null)return{};var s=C(n,_),r,a;if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(n);for(a=0;a<c.length;a++)r=c[a],!(_.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(n,r)&&(s[r]=n[r])}return s}function C(n,_){if(n==null)return{};var s={},r=Object.keys(n),a,c;for(c=0;c<r.length;c++)a=r[c],!(_.indexOf(a)>=0)&&(s[a]=n[a]);return s}var T={},A="wrapper";function k(n){var _=n.components,s=P(n,D);return(0,u.kt)(A,E({},T,s,{components:_,mdxType:"MDXLayout"}),(0,u.kt)(y.h_,{title:"React/Progress/Beschreibung",mdxType:"Meta"}),(0,u.kt)(y.dk,{mdxType:"Description"},v),(0,u.kt)("script",null,"() =>",(0,M.m)()))}k.displayName="MDXContent",k.isMDXComponent=!0;var O=function(){throw new Error("Docs-only story")};O.parameters={docsOnly:!0};var p={title:"React/Progress/Beschreibung",includeStories:["__page"]},x={};p.parameters=p.parameters||{},p.parameters.docs=Object.assign({},p.parameters.docs||{},{page:function(){return(0,u.kt)(y.aT,{mdxStoryNameToKey:x,mdxComponentAnnotations:p},(0,u.kt)(k,null))}});const L=p;var K=["__page"]},"./src/components/mermaid.tsx":(g,b,e)=>{"use strict";e.d(b,{G:()=>t,m:()=>o});var i=e("./node_modules/react/index.js"),d=e("./node_modules/mermaid/dist/mermaid.core.mjs");let m;const o=l=>{l&&d.Z.initialize(Object.assign({startOnLoad:!0},l)),clearTimeout(m),m=setTimeout(()=>{clearTimeout(m),d.Z.contentLoaded()},500)},t=({code:l,config:f,children:j})=>((0,i.useEffect)(()=>{o(f)},[]),i.createElement("div",null,i.createElement("div",{className:"mermaid"},l)));try{o.displayName="mermaidLoadContent",o.__docgenInfo={description:"",displayName:"mermaidLoadContent",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/mermaid.tsx#mermaidLoadContent"]={docgenInfo:o.__docgenInfo,name:"mermaidLoadContent",path:"src/components/mermaid.tsx#mermaidLoadContent"})}catch(l){}try{t.displayName="Mermaid",t.__docgenInfo={description:"",displayName:"Mermaid",props:{code:{defaultValue:null,description:"",name:"code",required:!0,type:{name:"string"}},config:{defaultValue:null,description:"",name:"config",required:!1,type:{name:"any"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/mermaid.tsx#Mermaid"]={docgenInfo:t.__docgenInfo,name:"Mermaid",path:"src/components/mermaid.tsx#Mermaid"})}catch(l){}},"./node_modules/moment-mini/locale sync recursive ^\\.\\/.*$":(g,b,e)=>{var i={"./locale":"./node_modules/moment-mini/locale/locale.js","./locale.js":"./node_modules/moment-mini/locale/locale.js"};function d(o){var t=m(o);return e(t)}function m(o){if(!e.o(i,o)){var t=new Error("Cannot find module '"+o+"'");throw t.code="MODULE_NOT_FOUND",t}return i[o]}d.keys=function(){return Object.keys(i)},d.resolve=m,g.exports=d,d.id="./node_modules/moment-mini/locale sync recursive ^\\.\\/.*$"},"./src/components/progress/0-description/autogen.readme.md":g=>{"use strict";g.exports=`# Progress

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
