(self.webpackChunk_public_ui_storybook=self.webpackChunk_public_ui_storybook||[]).push([[7597],{"./src/components/spin/0-description/autogen.wc.stories.mdx":(f,g,e)=>{"use strict";e.r(g),e.d(g,{__namedExportsOrder:()=>B,__page:()=>j,default:()=>A});var d=e("./node_modules/core-js/modules/es.object.keys.js"),i=e.n(d),m=e("./node_modules/core-js/modules/es.array.index-of.js"),o=e.n(m),r=e("./node_modules/core-js/modules/es.symbol.js"),u=e.n(r),E=e("./node_modules/core-js/modules/es.function.bind.js"),b=e.n(E),v=e("./node_modules/core-js/modules/es.object.assign.js"),x=e.n(v),w=e("./node_modules/react/index.js"),l=e("./node_modules/@mdx-js/react/dist/esm.js"),y=e("./node_modules/@storybook/addon-docs/dist/esm/index.js"),k=e("./src/components/spin/0-description/autogen.readme.md"),D=e("./src/components/mermaid.tsx"),M=["components"];function O(){return O=Object.assign?Object.assign.bind():function(n){for(var _=1;_<arguments.length;_++){var s=arguments[_];for(var t in s)Object.prototype.hasOwnProperty.call(s,t)&&(n[t]=s[t])}return n},O.apply(this,arguments)}function C(n,_){if(n==null)return{};var s=L(n,_),t,a;if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(n);for(a=0;a<c.length;a++)t=c[a],!(_.indexOf(t)>=0)&&Object.prototype.propertyIsEnumerable.call(n,t)&&(s[t]=n[t])}return s}function L(n,_){if(n==null)return{};var s={},t=Object.keys(n),a,c;for(c=0;c<t.length;c++)a=t[c],!(_.indexOf(a)>=0)&&(s[a]=n[a]);return s}var P={},T="wrapper";function h(n){var _=n.components,s=C(n,M);return(0,l.kt)(T,O({},P,s,{components:_,mdxType:"MDXLayout"}),(0,l.kt)(y.h_,{title:"Web Components/Spin/Beschreibung",mdxType:"Meta"}),(0,l.kt)(y.dk,{mdxType:"Description"},k),(0,l.kt)("script",null,"() =>",(0,D.m)()))}h.displayName="MDXContent",h.isMDXComponent=!0;var j=function(){throw new Error("Docs-only story")};j.parameters={docsOnly:!0};var p={title:"Web Components/Spin/Beschreibung",includeStories:["__page"]},S={};p.parameters=p.parameters||{},p.parameters.docs=Object.assign({},p.parameters.docs||{},{page:function(){return(0,l.kt)(y.aT,{mdxStoryNameToKey:S,mdxComponentAnnotations:p},(0,l.kt)(h,null))}});const A=p;var B=["__page"]},"./src/components/mermaid.tsx":(f,g,e)=>{"use strict";e.d(g,{G:()=>r,m:()=>o});var d=e("./node_modules/react/index.js"),i=e("./node_modules/mermaid/dist/mermaid.core.mjs");let m;const o=u=>{u&&i.Z.initialize(Object.assign({startOnLoad:!0},u)),clearTimeout(m),m=setTimeout(()=>{clearTimeout(m),i.Z.contentLoaded()},500)},r=({code:u,config:E,children:b})=>((0,d.useEffect)(()=>{o(E)},[]),d.createElement("div",null,d.createElement("div",{className:"mermaid"},u)));try{o.displayName="mermaidLoadContent",o.__docgenInfo={description:"",displayName:"mermaidLoadContent",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/mermaid.tsx#mermaidLoadContent"]={docgenInfo:o.__docgenInfo,name:"mermaidLoadContent",path:"src/components/mermaid.tsx#mermaidLoadContent"})}catch(u){}try{r.displayName="Mermaid",r.__docgenInfo={description:"",displayName:"Mermaid",props:{code:{defaultValue:null,description:"",name:"code",required:!0,type:{name:"string"}},config:{defaultValue:null,description:"",name:"config",required:!1,type:{name:"any"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/mermaid.tsx#Mermaid"]={docgenInfo:r.__docgenInfo,name:"Mermaid",path:"src/components/mermaid.tsx#Mermaid"})}catch(u){}},"./node_modules/moment-mini/locale sync recursive ^\\.\\/.*$":(f,g,e)=>{var d={"./locale":"./node_modules/moment-mini/locale/locale.js","./locale.js":"./node_modules/moment-mini/locale/locale.js"};function i(o){var r=m(o);return e(r)}function m(o){if(!e.o(d,o)){var r=new Error("Cannot find module '"+o+"'");throw r.code="MODULE_NOT_FOUND",r}return d[o]}i.keys=function(){return Object.keys(d)},i.resolve=m,f.exports=i,i.id="./node_modules/moment-mini/locale sync recursive ^\\.\\/.*$"},"./src/components/spin/0-description/autogen.readme.md":f=>{"use strict";f.exports=`# Spin

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
