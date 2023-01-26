(self.webpackChunk_public_ui_storybook=self.webpackChunk_public_ui_storybook||[]).push([[5894],{"./src/components/tooltip/0-description/autogen.react.stories.mdx":(k,g,e)=>{"use strict";e.r(g),e.d(g,{__namedExportsOrder:()=>x,__page:()=>y,default:()=>A});var _=e("./node_modules/core-js/modules/es.object.keys.js"),a=e.n(_),l=e("./node_modules/core-js/modules/es.array.index-of.js"),o=e.n(l),r=e("./node_modules/core-js/modules/es.symbol.js"),m=e.n(r),b=e("./node_modules/core-js/modules/es.function.bind.js"),O=e.n(b),v=e("./node_modules/core-js/modules/es.object.assign.js"),B=e.n(v),R=e("./node_modules/react/index.js"),u=e("./node_modules/@mdx-js/react/dist/esm.js"),f=e("./node_modules/@storybook/addon-docs/dist/esm/index.js"),T=e("./src/components/tooltip/0-description/autogen.readme.md"),j=e("./src/components/mermaid.tsx"),D=["components"];function E(){return E=Object.assign?Object.assign.bind():function(n){for(var s=1;s<arguments.length;s++){var i=arguments[s];for(var t in i)Object.prototype.hasOwnProperty.call(i,t)&&(n[t]=i[t])}return n},E.apply(this,arguments)}function M(n,s){if(n==null)return{};var i=w(n,s),t,d;if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(n);for(d=0;d<c.length;d++)t=c[d],!(s.indexOf(t)>=0)&&Object.prototype.propertyIsEnumerable.call(n,t)&&(i[t]=n[t])}return i}function w(n,s){if(n==null)return{};var i={},t=Object.keys(n),d,c;for(c=0;c<t.length;c++)d=t[c],!(s.indexOf(d)>=0)&&(i[d]=n[d]);return i}var C={},P="wrapper";function h(n){var s=n.components,i=M(n,D);return(0,u.kt)(P,E({},C,i,{components:s,mdxType:"MDXLayout"}),(0,u.kt)(f.h_,{title:"React/Tooltip/Beschreibung",mdxType:"Meta"}),(0,u.kt)(f.dk,{mdxType:"Description"},T),(0,u.kt)("script",null,"() =>",(0,j.m)()))}h.displayName="MDXContent",h.isMDXComponent=!0;var y=function(){throw new Error("Docs-only story")};y.parameters={docsOnly:!0};var p={title:"React/Tooltip/Beschreibung",includeStories:["__page"]},L={};p.parameters=p.parameters||{},p.parameters.docs=Object.assign({},p.parameters.docs||{},{page:function(){return(0,u.kt)(f.aT,{mdxStoryNameToKey:L,mdxComponentAnnotations:p},(0,u.kt)(h,null))}});const A=p;var x=["__page"]},"./src/components/mermaid.tsx":(k,g,e)=>{"use strict";e.d(g,{G:()=>r,m:()=>o});var _=e("./node_modules/react/index.js"),a=e("./node_modules/mermaid/dist/mermaid.core.mjs");let l;const o=m=>{m&&a.Z.initialize(Object.assign({startOnLoad:!0},m)),clearTimeout(l),l=setTimeout(()=>{clearTimeout(l),a.Z.contentLoaded()},500)},r=({code:m,config:b,children:O})=>((0,_.useEffect)(()=>{o(b)},[]),_.createElement("div",null,_.createElement("div",{className:"mermaid"},m)));try{o.displayName="mermaidLoadContent",o.__docgenInfo={description:"",displayName:"mermaidLoadContent",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/mermaid.tsx#mermaidLoadContent"]={docgenInfo:o.__docgenInfo,name:"mermaidLoadContent",path:"src/components/mermaid.tsx#mermaidLoadContent"})}catch(m){}try{r.displayName="Mermaid",r.__docgenInfo={description:"",displayName:"Mermaid",props:{code:{defaultValue:null,description:"",name:"code",required:!0,type:{name:"string"}},config:{defaultValue:null,description:"",name:"config",required:!1,type:{name:"any"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/mermaid.tsx#Mermaid"]={docgenInfo:r.__docgenInfo,name:"Mermaid",path:"src/components/mermaid.tsx#Mermaid"})}catch(m){}},"./node_modules/moment-mini/locale sync recursive ^\\.\\/.*$":(k,g,e)=>{var _={"./locale":"./node_modules/moment-mini/locale/locale.js","./locale.js":"./node_modules/moment-mini/locale/locale.js"};function a(o){var r=l(o);return e(r)}function l(o){if(!e.o(_,o)){var r=new Error("Cannot find module '"+o+"'");throw r.code="MODULE_NOT_FOUND",r}return _[o]}a.keys=function(){return Object.keys(_)},a.resolve=l,k.exports=a,a.id="./node_modules/moment-mini/locale sync recursive ^\\.\\/.*$"},"./src/components/tooltip/0-description/autogen.readme.md":k=>{"use strict";k.exports=`# Tooltip

<kol-alert _type="warning">Die **Tooltip**-Komponente wird innerhalb von KoliBri verwendet und ist nicht daf\xFCr vorgesehen in der Anwendungsentwicklung verwendet zu werden. Denn der Tooltip ist nur dann wirklich barrierefrei, wenn von einem Referenzelement auf das Tooltip verwiesen wird.</kol-alert>

Die **Tooltip**-Komponente implementiert das Gegenst\xFCck zum \`Aria-Label\`. Es ist also explizit nur daf\xFCr vorgesehen, dem/der Nutzer:in ohne Screenreader die Beschriftung eines Elementes anzuzeigen.

Ein ge\xF6ffneter Tooltip l\xE4sst sich mit der \`Escape\`-Taste schlie\xDFen, um ggf. \xFCberlagerte Seiteninformationen wieder sichtbar zu machen.

**Hinweis:** Damit der Tooltip korrekt ausgerichtet wird, muss f\xFCr das vorrangehende Referenz-Element \`inline-block\` gesetzt werden.

## Barrierefreiheit

> Die optische Standardausgabe der Komponente ist auf die Umsetzung der Barrierefreiheit hin optimiert. Wenn Sie eigene Custom Styles verwenden, kann das zu einer Einschr\xE4nkung der Barrierefreiheit f\xFChren.

Die Tooltip-Komponente wird bei Focus oder Hover angezeigt und dient ausschlie\xDFlich dem/der sehenden Nutzer:in ohne Screenreader die Beschriftung (Aria-Label) lesen zu k\xF6nnen. Der Text des Tooltips ist selbst nicht mit der Tastatur erreichbar und zudem mittels Aria-Hidden f\xFCr die Screenreader versteckt.

<kol-alert _type="info">
Aus Sicht des Barrierefreiheitstests k\xF6nnen Tooltips ignoriert werden, solange zudem von der Entwicklung sichergestellt wurde, dass der Tooltip-Text auch in gleicher Weise vom Screenreader vorgelesen wird.
</kol-alert>

## Links und Referenzen

- https://tollwerk.de/projekte/tipps-techniken-inklusiv-barrierefrei/titel-tooltips-toggletips

<!-- Auto Generated Below -->


## Eigenschaften

| Property              | Attribute | Description                                                                                            | Type                                                  | Default     |
| --------------------- | --------- | ------------------------------------------------------------------------------------------------------ | ----------------------------------------------------- | ----------- |
| \`_align\`              | \`_align\`  | Gibt an, ob der Tooltip oben, rechts, unten oder links angezeigt werden soll.                          | \`"bottom" | "left" | "right" | "top" | undefined\` | \`'top'\`     |
| \`_id\`                 | \`_id\`     | Gibt die ID an, wenn z.B. Aria-Labelledby (Link) verwendet wird.                                       | \`string | undefined\`                                 | \`undefined\` |
| \`_label\` _(required)_ | \`_label\`  | Das Label gibt an, welcher Text in dem Tooltip beim Fokussieren oder Maus-dr\xFCberfahren angezeigt wird. | \`string\`                                              | \`undefined\` |


## Abh\xE4ngigkeiten

### Verwendet von

 - kol-abbr
 - kol-button-wc
 - kol-link-wc

### Abh\xE4ngig von

- kol-badge

### Graph
<div class="mermaid">
graph TD;
  kol-tooltip --> kol-badge
  kol-badge --> kol-span-wc
  kol-badge --> kol-button-wc
  kol-span-wc --> kol-icon
  kol-button-wc --> kol-tooltip
  kol-abbr --> kol-tooltip
  kol-link-wc --> kol-tooltip
  style kol-tooltip fill:#f9f,stroke:#333,stroke-width:4px
</div>

----------------------------------------------


`}}]);
