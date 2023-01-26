(self.webpackChunk_public_ui_storybook=self.webpackChunk_public_ui_storybook||[]).push([[706],{"./src/components/form/0-description/autogen.react.stories.mdx":(f,k,e)=>{"use strict";e.r(k),e.d(k,{__namedExportsOrder:()=>R,__page:()=>g,default:()=>A});var i=e("./node_modules/core-js/modules/es.object.keys.js"),a=e.n(i),m=e("./node_modules/core-js/modules/es.array.index-of.js"),n=e.n(m),r=e("./node_modules/core-js/modules/es.symbol.js"),l=e.n(r),E=e("./node_modules/core-js/modules/es.function.bind.js"),j=e.n(E),v=e("./node_modules/core-js/modules/es.object.assign.js"),K=e.n(v),B=e("./node_modules/react/index.js"),u=e("./node_modules/@mdx-js/react/dist/esm.js"),b=e("./node_modules/@storybook/addon-docs/dist/esm/index.js"),M=e("./src/components/form/0-description/autogen.readme.md"),C=e("./src/components/mermaid.tsx"),D=["components"];function O(){return O=Object.assign?Object.assign.bind():function(o){for(var s=1;s<arguments.length;s++){var _=arguments[s];for(var t in _)Object.prototype.hasOwnProperty.call(_,t)&&(o[t]=_[t])}return o},O.apply(this,arguments)}function x(o,s){if(o==null)return{};var _=P(o,s),t,d;if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(o);for(d=0;d<c.length;d++)t=c[d],!(s.indexOf(t)>=0)&&Object.prototype.propertyIsEnumerable.call(o,t)&&(_[t]=o[t])}return _}function P(o,s){if(o==null)return{};var _={},t=Object.keys(o),d,c;for(c=0;c<t.length;c++)d=t[c],!(s.indexOf(d)>=0)&&(_[d]=o[d]);return _}var T={},h="wrapper";function y(o){var s=o.components,_=x(o,D);return(0,u.kt)(h,O({},T,_,{components:s,mdxType:"MDXLayout"}),(0,u.kt)(b.h_,{title:"React/Form/Beschreibung",mdxType:"Meta"}),(0,u.kt)(b.dk,{mdxType:"Description"},M),(0,u.kt)("script",null,"() =>",(0,C.m)()))}y.displayName="MDXContent",y.isMDXComponent=!0;var g=function(){throw new Error("Docs-only story")};g.parameters={docsOnly:!0};var p={title:"React/Form/Beschreibung",includeStories:["__page"]},L={};p.parameters=p.parameters||{},p.parameters.docs=Object.assign({},p.parameters.docs||{},{page:function(){return(0,u.kt)(b.aT,{mdxStoryNameToKey:L,mdxComponentAnnotations:p},(0,u.kt)(y,null))}});const A=p;var R=["__page"]},"./src/components/mermaid.tsx":(f,k,e)=>{"use strict";e.d(k,{G:()=>r,m:()=>n});var i=e("./node_modules/react/index.js"),a=e("./node_modules/mermaid/dist/mermaid.core.mjs");let m;const n=l=>{l&&a.Z.initialize(Object.assign({startOnLoad:!0},l)),clearTimeout(m),m=setTimeout(()=>{clearTimeout(m),a.Z.contentLoaded()},500)},r=({code:l,config:E,children:j})=>((0,i.useEffect)(()=>{n(E)},[]),i.createElement("div",null,i.createElement("div",{className:"mermaid"},l)));try{n.displayName="mermaidLoadContent",n.__docgenInfo={description:"",displayName:"mermaidLoadContent",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/mermaid.tsx#mermaidLoadContent"]={docgenInfo:n.__docgenInfo,name:"mermaidLoadContent",path:"src/components/mermaid.tsx#mermaidLoadContent"})}catch(l){}try{r.displayName="Mermaid",r.__docgenInfo={description:"",displayName:"Mermaid",props:{code:{defaultValue:null,description:"",name:"code",required:!0,type:{name:"string"}},config:{defaultValue:null,description:"",name:"config",required:!1,type:{name:"any"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/mermaid.tsx#Mermaid"]={docgenInfo:r.__docgenInfo,name:"Mermaid",path:"src/components/mermaid.tsx#Mermaid"})}catch(l){}},"./node_modules/moment-mini/locale sync recursive ^\\.\\/.*$":(f,k,e)=>{var i={"./locale":"./node_modules/moment-mini/locale/locale.js","./locale.js":"./node_modules/moment-mini/locale/locale.js"};function a(n){var r=m(n);return e(r)}function m(n){if(!e.o(i,n)){var r=new Error("Cannot find module '"+n+"'");throw r.code="MODULE_NOT_FOUND",r}return i[n]}a.keys=function(){return Object.keys(i)},a.resolve=m,f.exports=a,a.id="./node_modules/moment-mini/locale sync recursive ^\\.\\/.*$"},"./src/components/form/0-description/autogen.readme.md":f=>{"use strict";f.exports=`# Form

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
