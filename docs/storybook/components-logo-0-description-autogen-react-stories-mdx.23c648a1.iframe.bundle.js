(self.webpackChunk_public_ui_storybook=self.webpackChunk_public_ui_storybook||[]).push([[8896],{"./src/components/logo/0-description/autogen.react.stories.mdx":(p,f,e)=>{"use strict";e.r(f),e.d(f,{__namedExportsOrder:()=>R,__page:()=>O,default:()=>T});var _=e("./node_modules/core-js/modules/es.object.keys.js"),a=e.n(_),m=e("./node_modules/core-js/modules/es.array.index-of.js"),o=e.n(m),r=e("./node_modules/core-js/modules/es.symbol.js"),u=e.n(r),E=e("./node_modules/core-js/modules/es.function.bind.js"),M=e.n(E),j=e("./node_modules/core-js/modules/es.object.assign.js"),x=e.n(j),S=e("./node_modules/react/index.js"),l=e("./node_modules/@mdx-js/react/dist/esm.js"),B=e("./node_modules/@storybook/addon-docs/dist/esm/index.js"),D=e("./src/components/logo/0-description/autogen.readme.md"),h=e("./src/components/mermaid.tsx"),k=["components"];function y(){return y=Object.assign?Object.assign.bind():function(n){for(var i=1;i<arguments.length;i++){var s=arguments[i];for(var t in s)Object.prototype.hasOwnProperty.call(s,t)&&(n[t]=s[t])}return n},y.apply(this,arguments)}function v(n,i){if(n==null)return{};var s=L(n,i),t,d;if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(n);for(d=0;d<c.length;d++)t=c[d],!(i.indexOf(t)>=0)&&(!Object.prototype.propertyIsEnumerable.call(n,t)||(s[t]=n[t]))}return s}function L(n,i){if(n==null)return{};var s={},t=Object.keys(n),d,c;for(c=0;c<t.length;c++)d=t[c],!(i.indexOf(d)>=0)&&(s[d]=n[d]);return s}var P={},C="wrapper";function b(n){var i=n.components,s=v(n,k);return(0,l.kt)(C,y({},P,s,{components:i,mdxType:"MDXLayout"}),(0,l.kt)(B.h_,{title:"React/Logo/Beschreibung",mdxType:"Meta"}),(0,l.kt)(B.dk,{mdxType:"Description"},D),(0,l.kt)("script",null,"() =>",(0,h.m)()))}b.displayName="MDXContent",b.isMDXComponent=!0;var O=function(){throw new Error("Docs-only story")};O.parameters={docsOnly:!0};var g={title:"React/Logo/Beschreibung",includeStories:["__page"]},A={};g.parameters=g.parameters||{},g.parameters.docs=Object.assign({},g.parameters.docs||{},{page:function(){return(0,l.kt)(B.aT,{mdxStoryNameToKey:A,mdxComponentAnnotations:g},(0,l.kt)(b,null))}});const T=g;var R=["__page"]},"./src/components/mermaid.tsx":(p,f,e)=>{"use strict";e.d(f,{G:()=>r,m:()=>o});var _=e("./node_modules/react/index.js"),a=e("./node_modules/mermaid/dist/mermaid.core.mjs");let m;const o=u=>{u&&a.Z.initialize(Object.assign({startOnLoad:!0},u)),clearTimeout(m),m=setTimeout(()=>{clearTimeout(m),a.Z.contentLoaded()},500)},r=({code:u,config:E,children:M})=>((0,_.useEffect)(()=>{o(E)},[]),_.createElement("div",null,_.createElement("div",{className:"mermaid"},u)));try{o.displayName="mermaidLoadContent",o.__docgenInfo={description:"",displayName:"mermaidLoadContent",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/mermaid.tsx#mermaidLoadContent"]={docgenInfo:o.__docgenInfo,name:"mermaidLoadContent",path:"src/components/mermaid.tsx#mermaidLoadContent"})}catch(u){}try{r.displayName="Mermaid",r.__docgenInfo={description:"",displayName:"Mermaid",props:{code:{defaultValue:null,description:"",name:"code",required:!0,type:{name:"string"}},config:{defaultValue:null,description:"",name:"config",required:!1,type:{name:"any"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/mermaid.tsx#Mermaid"]={docgenInfo:r.__docgenInfo,name:"Mermaid",path:"src/components/mermaid.tsx#Mermaid"})}catch(u){}},"./node_modules/moment-mini/locale sync recursive ^\\.\\/.*$":(p,f,e)=>{var _={"./locale":"./node_modules/moment-mini/locale/locale.js","./locale.js":"./node_modules/moment-mini/locale/locale.js"};function a(o){var r=m(o);return e(r)}function m(o){if(!e.o(_,o)){var r=new Error("Cannot find module '"+o+"'");throw r.code="MODULE_NOT_FOUND",r}return _[o]}a.keys=function(){return Object.keys(_)},a.resolve=m,p.exports=a,a.id="./node_modules/moment-mini/locale sync recursive ^\\.\\/.*$"},"./src/components/logo/0-description/autogen.readme.md":p=>{"use strict";p.exports=`# Logo

Mit Hilfe der **Logo**-Komponente k\xF6nnen an beliebigen Positionen Logos ausgegeben werden. Die zur Verf\xFCgung stehenden Logos entstammen aus dem Umfeld
der Bundesinstitutionen. Die **Logo**-Komponente rendert an beliebiger Position auf der Webseite ein Logo, das \xFCber ein Attribut definiert wird. Das Logo wird dabei aus einer
Sammlung von SVG-Grafiken zusammengesetzt, die fertig konstruiert vorliegen. Die Ausgabe des Logos kann \xFCber das Attribut **style** definiert werden.

## Konstruktion

### Code

> Um das Zusammenspiel von Komponenten (HTML) und Kontroller (TypeScript) gemeinsam darzustellen, wurden alle Code-Beispiele auf dieser Seite mit den Web Components im TSX geschrieben.

\`\`\`tsx
<div>
	<kol-logo _abbr="BReg"></kol-logo>
</div>
\`\`\`

### Beispiel

<kol-logo _abbr="BReg"></kol-logo>

## Verwendung

Das Attribut \`_abbr\` wird f\xFCr die Definition des gew\xFCnschten Logos verwendet. Es sind folgende Parameter m\xF6glich:

**BReg** = **_Die Bundesregierung_**

**BMF** = **_Bundesministerium der Finanzen_**

**BMI** = **_Bundesministerium des Innern, f\xFCr Bau und Heimat_**

**AA** = **_Ausw\xE4rtiges Amt_**

**BMWi** = **_Bundesministerium f\xFCr Wirtschaft und Energie_**

**BMJV** = **_Bundesministerium der Justiz und f\xFCr Verbraucherschutz_**

**BMAS** = **_Bundesministerium f\xFCr Arbeit und Soziales_**

**BMVg** = **_Bundesministerium der Verteidigung_**

**BMEL** = **_Bundesministerium f\xFCr Ern\xE4hrung und Landwirtschaft_**

**BMFSFJ** = **_Bundesministerium f\xFCr Familie, Senioren, Frauen und Jugend_**

**BMG** = **_Bundesministerium f\xFCr Gesundheit_**

**BMVI** = **_Bundesministerium f\xFCr Verkehr und digitale Infrastruktur_**

**BMU** = **_Bundesministerium f\xFCr Umwelt, Naturschutz und nukleare Sicherheit_**

**BMBF** = **_Bundesministerium f\xFCr Bildung und Forschung_**

**BMZ** = **_Bundesministerium f\xFCr wirtschaftliche Zusammenarbeit und Entwicklung_**

<!--### Best practices

### Anwendungsf\xE4lle-->

## Barrierefreiheit

> Die optische Standardausgabe der Komponente ist auf die Umsetzung der Barrierefreiheit hin optimiert. Wenn Sie eigene Custom Styles verwenden, kann das zu einer Einschr\xE4nkung der Barrierefreiheit f\xFChren.

<!--## Links und Referenzen

<!-- Auto Generated Below -->


## Eigenschaften

| Property            | Attribute | Description                                                                                                                                                                     | Type                                                           | Default     |
| ------------------- | --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------- | ----------- |
| \`_abbr\`             | \`_abbr\`   | <span class="text-red-500">**[DEPRECATED]**</span> Verwende stattdessen das Property _org.<br/><br/>Gibt die Abk\xFCrzung eines Ministeriums, eines Amts oder einer Bundesanstalt an. | \`Bundesamt | Bundesanstalt | Bundesministerium | undefined\` | \`undefined\` |
| \`_org\` _(required)_ | \`_org\`    | Gibt die Abk\xFCrzung eines Ministeriums, eines Amts oder einer Bundesanstalt an.                                                                                                  | \`Bundesamt | Bundesanstalt | Bundesministerium\`              | \`undefined\` |


----------------------------------------------


`}}]);
