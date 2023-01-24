(self.webpackChunk_public_ui_storybook=self.webpackChunk_public_ui_storybook||[]).push([[706],{"./src/components/form/0-description/autogen.react.stories.mdx":(f,E,e)=>{"use strict";e.r(E),e.d(E,{__namedExportsOrder:()=>R,__page:()=>j,default:()=>A});var d=e("./node_modules/core-js/modules/es.object.keys.js"),m=e.n(d),i=e("./node_modules/core-js/modules/es.array.index-of.js"),o=e.n(i),_=e("./node_modules/core-js/modules/es.symbol.js"),l=e.n(_),O=e("./node_modules/core-js/modules/es.function.bind.js"),v=e.n(O),b=e("./node_modules/core-js/modules/es.object.assign.js"),K=e.n(b),B=e("./node_modules/react/index.js"),u=e("./node_modules/@mdx-js/react/dist/esm.js"),y=e("./node_modules/@storybook/addon-docs/dist/esm/index.js"),M=e("./src/components/form/0-description/autogen.readme.md"),C=e("./src/components/mermaid.tsx"),D=["components"];function k(){return k=Object.assign?Object.assign.bind():function(n){for(var s=1;s<arguments.length;s++){var r=arguments[s];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(n[t]=r[t])}return n},k.apply(this,arguments)}function x(n,s){if(n==null)return{};var r=P(n,s),t,a;if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(n);for(a=0;a<c.length;a++)t=c[a],!(s.indexOf(t)>=0)&&Object.prototype.propertyIsEnumerable.call(n,t)&&(r[t]=n[t])}return r}function P(n,s){if(n==null)return{};var r={},t=Object.keys(n),a,c;for(c=0;c<t.length;c++)a=t[c],!(s.indexOf(a)>=0)&&(r[a]=n[a]);return r}var T={},h="wrapper";function g(n){var s=n.components,r=x(n,D);return(0,u.kt)(h,k({},T,r,{components:s,mdxType:"MDXLayout"}),(0,u.kt)(y.h_,{title:"React/Form/Beschreibung",mdxType:"Meta"}),(0,u.kt)(y.dk,{mdxType:"Description"},M),(0,u.kt)("script",null,"() =>",(0,C.m)()))}g.displayName="MDXContent",g.isMDXComponent=!0;var j=function(){throw new Error("Docs-only story")};j.parameters={docsOnly:!0};var p={title:"React/Form/Beschreibung",includeStories:["__page"]},L={};p.parameters=p.parameters||{},p.parameters.docs=Object.assign({},p.parameters.docs||{},{page:function(){return(0,u.kt)(y.aT,{mdxStoryNameToKey:L,mdxComponentAnnotations:p},(0,u.kt)(g,null))}});const A=p;var R=["__page"]},"./src/components/mermaid.tsx":(f,E,e)=>{"use strict";e.d(E,{G:()=>_,m:()=>o});var d=e("./node_modules/react/index.js"),m=e("./node_modules/mermaid/dist/mermaid.core.mjs");let i;const o=l=>{l&&m.Z.initialize(Object.assign({startOnLoad:!0},l)),clearTimeout(i),i=setTimeout(()=>{clearTimeout(i),m.Z.contentLoaded()},500)},_=({code:l,config:O,children:v})=>((0,d.useEffect)(()=>{o(O)},[]),d.createElement("div",null,d.createElement("div",{className:"mermaid"},l)));try{o.displayName="mermaidLoadContent",o.__docgenInfo={description:"",displayName:"mermaidLoadContent",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/mermaid.tsx#mermaidLoadContent"]={docgenInfo:o.__docgenInfo,name:"mermaidLoadContent",path:"src/components/mermaid.tsx#mermaidLoadContent"})}catch(l){}try{_.displayName="Mermaid",_.__docgenInfo={description:"",displayName:"Mermaid",props:{code:{defaultValue:null,description:"",name:"code",required:!0,type:{name:"string"}},config:{defaultValue:null,description:"",name:"config",required:!1,type:{name:"any"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/mermaid.tsx#Mermaid"]={docgenInfo:_.__docgenInfo,name:"Mermaid",path:"src/components/mermaid.tsx#Mermaid"})}catch(l){}},"./node_modules/moment-mini/locale sync recursive ^\\.\\/.*$":(f,E,e)=>{var d={"./locale":"./node_modules/moment-mini/locale/locale.js","./locale.js":"./node_modules/moment-mini/locale/locale.js"};function m(o){var _=i(o);return e(_)}function i(o){if(!e.o(d,o)){var _=new Error("Cannot find module '"+o+"'");throw _.code="MODULE_NOT_FOUND",_}return d[o]}m.keys=function(){return Object.keys(d)},m.resolve=i,f.exports=m,m.id="./node_modules/moment-mini/locale sync recursive ^\\.\\/.*$"},"./src/components/form/0-description/autogen.readme.md":f=>{"use strict";f.exports=`# Form

Die **Form**-Komponente dient dazu alle Eingabefelder zu umschlie\xDFen, den Hinweistext f\xFCr Pflichtfelder korrekt zu positionieren und die Events \`submit\` und \`reset\` weiterzuleiten.

## Konstruktion

### Code

> Um das Zusammenspiel von Komponenten (HTML) und Kontroller (TypeScript) gemeinsam darzustellen, wurden alle Code-Beispiele auf dieser Seite mit den Web Components im TSX geschrieben.

\`\`\`html
<kol-form>
	<kol-input-text _id="firstname">Vorname</kol-input-text>
	<kol-input-text _id="lastname">Nachname</kol-input-text>
</kol-form>
\`\`\`

### Beispiel

<kol-form>
	<kol-input-text _id="firstname">Vorname</kol-input-text>
	<kol-input-text _id="lastname">Nachname</kol-input-text>
</kol-form>

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
