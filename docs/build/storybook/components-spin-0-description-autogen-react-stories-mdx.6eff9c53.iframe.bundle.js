(self.webpackChunk_public_ui_storybook=self.webpackChunk_public_ui_storybook||[]).push([[1153],{"./src/components/spin/0-description/autogen.react.stories.mdx":(f,g,e)=>{"use strict";e.r(g),e.d(g,{__namedExportsOrder:()=>B,__page:()=>O,default:()=>A});var i=e("./node_modules/core-js/modules/es.object.keys.js"),a=e.n(i),m=e("./node_modules/core-js/modules/es.array.index-of.js"),o=e.n(m),t=e("./node_modules/core-js/modules/es.symbol.js"),l=e.n(t),E=e("./node_modules/core-js/modules/es.function.bind.js"),h=e.n(E),j=e("./node_modules/core-js/modules/es.object.assign.js"),x=e.n(j),R=e("./node_modules/react/index.js"),c=e("./node_modules/@mdx-js/react/dist/esm.js"),b=e("./node_modules/@storybook/addon-docs/dist/esm/index.js"),v=e("./src/components/spin/0-description/autogen.readme.md"),D=e("./src/components/mermaid.tsx"),M=["components"];function k(){return k=Object.assign?Object.assign.bind():function(n){for(var _=1;_<arguments.length;_++){var s=arguments[_];for(var r in s)Object.prototype.hasOwnProperty.call(s,r)&&(n[r]=s[r])}return n},k.apply(this,arguments)}function C(n,_){if(n==null)return{};var s=L(n,_),r,d;if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(n);for(d=0;d<u.length;d++)r=u[d],!(_.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(n,r)&&(s[r]=n[r])}return s}function L(n,_){if(n==null)return{};var s={},r=Object.keys(n),d,u;for(u=0;u<r.length;u++)d=r[u],!(_.indexOf(d)>=0)&&(s[d]=n[d]);return s}var P={},T="wrapper";function y(n){var _=n.components,s=C(n,M);return(0,c.kt)(T,k({},P,s,{components:_,mdxType:"MDXLayout"}),(0,c.kt)(b.h_,{title:"React/Spin/Beschreibung",mdxType:"Meta"}),(0,c.kt)(b.dk,{mdxType:"Description"},v),(0,c.kt)("script",null,"() =>",(0,D.m)()))}y.displayName="MDXContent",y.isMDXComponent=!0;var O=function(){throw new Error("Docs-only story")};O.parameters={docsOnly:!0};var p={title:"React/Spin/Beschreibung",includeStories:["__page"]},S={};p.parameters=p.parameters||{},p.parameters.docs=Object.assign({},p.parameters.docs||{},{page:function(){return(0,c.kt)(b.aT,{mdxStoryNameToKey:S,mdxComponentAnnotations:p},(0,c.kt)(y,null))}});const A=p;var B=["__page"]},"./src/components/mermaid.tsx":(f,g,e)=>{"use strict";e.d(g,{G:()=>t,m:()=>o});var i=e("./node_modules/react/index.js"),a=e("./node_modules/mermaid/dist/mermaid.core.mjs");let m;const o=l=>{l&&a.Z.initialize(Object.assign({startOnLoad:!0},l)),clearTimeout(m),m=setTimeout(()=>{clearTimeout(m),a.Z.contentLoaded()},500)},t=({code:l,config:E,children:h})=>((0,i.useEffect)(()=>{o(E)},[]),i.createElement("div",null,i.createElement("div",{className:"mermaid"},l)));try{o.displayName="mermaidLoadContent",o.__docgenInfo={description:"",displayName:"mermaidLoadContent",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/mermaid.tsx#mermaidLoadContent"]={docgenInfo:o.__docgenInfo,name:"mermaidLoadContent",path:"src/components/mermaid.tsx#mermaidLoadContent"})}catch(l){}try{t.displayName="Mermaid",t.__docgenInfo={description:"",displayName:"Mermaid",props:{code:{defaultValue:null,description:"",name:"code",required:!0,type:{name:"string"}},config:{defaultValue:null,description:"",name:"config",required:!1,type:{name:"any"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/mermaid.tsx#Mermaid"]={docgenInfo:t.__docgenInfo,name:"Mermaid",path:"src/components/mermaid.tsx#Mermaid"})}catch(l){}},"./node_modules/moment-mini/locale sync recursive ^\\.\\/.*$":(f,g,e)=>{var i={"./locale":"./node_modules/moment-mini/locale/locale.js","./locale.js":"./node_modules/moment-mini/locale/locale.js"};function a(o){var t=m(o);return e(t)}function m(o){if(!e.o(i,o)){var t=new Error("Cannot find module '"+o+"'");throw t.code="MODULE_NOT_FOUND",t}return i[o]}a.keys=function(){return Object.keys(i)},a.resolve=m,f.exports=a,a.id="./node_modules/moment-mini/locale sync recursive ^\\.\\/.*$"},"./src/components/spin/0-description/autogen.readme.md":f=>{"use strict";f.exports=`# Spin

Lader, wie die **Spin**-Komponente, informieren die Nutzer:innen \xFCber Lade- oder Rechenvorg\xE4nge, die vom System ausgef\xFChrt werden. Der Fortschritt kann durch eine wiederholte Animation kommuniziert werden.

## Konstruktion

### Code

> Um das Zusammenspiel von Komponenten (HTML) und Kontroller (TypeScript) gemeinsam darzustellen, wurden alle Code-Beispiele auf dieser Seite mit den Web Components im TSX geschrieben.

\`\`\`tsx
<div>
	<kol-spin _show />
</div>
\`\`\`

### Beispiel

<kol-spin _show></kol-spin>

## Verwendung

Verwenden Sie das Attribut \`_show\` um festzulegen, ob der Spin angezeigt wird.

### Best practices

- Verwenden Sie Lader, um die Nutzer:innen \xFCber einen Ladezustand oder einen laufenden Prozess zu informieren.
- Verwenden Sie Lader an konsistenten Stellen in der Benutzeroberfl\xE4che, um die Benutzererfahrung zu verbessern.
- Verwenden Sie einen Lader, um anzuzeigen, wie viel Arbeit noch \xFCbrig ist, bevor das Ergebnis angezeigt werden kann.

### Anwendungsf\xE4lle

- Abrufen neuer oder aktualisierter Suchergebnisse.
- Einloggen in gesch\xFCtzte Bereiche.
- Download von Inhalten.
- Laden von umfangreichen Inhalten, z.B. Videos.

## Barrierefreiheit

> Die optische Standardausgabe der Komponente ist auf die Umsetzung der Barrierefreiheit hin optimiert. Wenn Sie eigene Custom Styles verwenden, kann das zu einer Einschr\xE4nkung der Barrierefreiheit f\xFChren.

<!--## Links und Referenzen

<!-- Auto Generated Below -->


## Eigenschaften

| Property | Attribute | Description                                               | Type                   | Default |
| -------- | --------- | --------------------------------------------------------- | ---------------------- | ------- |
| \`_show\`  | \`_show\`   | Gibt an, ob die Ladeanzeige eingeblendet wird oder nicht. | \`boolean | undefined\` | \`false\` |


----------------------------------------------


`}}]);
