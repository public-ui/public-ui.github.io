(self.webpackChunk_public_ui_storybook=self.webpackChunk_public_ui_storybook||[]).push([[7688],{"./src/components/tooltip/0-description/autogen.wc.stories.mdx":(g,f,e)=>{"use strict";e.r(f),e.d(f,{__namedExportsOrder:()=>x,__page:()=>y,default:()=>A});var d=e("./node_modules/core-js/modules/es.object.keys.js"),_=e.n(d),m=e("./node_modules/core-js/modules/es.array.index-of.js"),o=e.n(m),r=e("./node_modules/core-js/modules/es.symbol.js"),l=e.n(r),k=e("./node_modules/core-js/modules/es.function.bind.js"),O=e.n(k),v=e("./node_modules/core-js/modules/es.object.assign.js"),B=e.n(v),K=e("./node_modules/react/index.js"),u=e("./node_modules/@mdx-js/react/dist/esm.js"),E=e("./node_modules/@storybook/addon-docs/dist/esm/index.js"),T=e("./src/components/tooltip/0-description/autogen.readme.md"),j=e("./src/components/mermaid.tsx"),D=["components"];function b(){return b=Object.assign?Object.assign.bind():function(n){for(var i=1;i<arguments.length;i++){var s=arguments[i];for(var t in s)Object.prototype.hasOwnProperty.call(s,t)&&(n[t]=s[t])}return n},b.apply(this,arguments)}function M(n,i){if(n==null)return{};var s=w(n,i),t,a;if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(n);for(a=0;a<c.length;a++)t=c[a],!(i.indexOf(t)>=0)&&(!Object.prototype.propertyIsEnumerable.call(n,t)||(s[t]=n[t]))}return s}function w(n,i){if(n==null)return{};var s={},t=Object.keys(n),a,c;for(c=0;c<t.length;c++)a=t[c],!(i.indexOf(a)>=0)&&(s[a]=n[a]);return s}var C={},P="wrapper";function h(n){var i=n.components,s=M(n,D);return(0,u.kt)(P,b({},C,s,{components:i,mdxType:"MDXLayout"}),(0,u.kt)(E.h_,{title:"Web Components/Tooltip/Beschreibung",mdxType:"Meta"}),(0,u.kt)(E.dk,{mdxType:"Description"},T),(0,u.kt)("script",null,"() =>",(0,j.m)()))}h.displayName="MDXContent",h.isMDXComponent=!0;var y=function(){throw new Error("Docs-only story")};y.parameters={docsOnly:!0};var p={title:"Web Components/Tooltip/Beschreibung",includeStories:["__page"]},L={};p.parameters=p.parameters||{},p.parameters.docs=Object.assign({},p.parameters.docs||{},{page:function(){return(0,u.kt)(E.aT,{mdxStoryNameToKey:L,mdxComponentAnnotations:p},(0,u.kt)(h,null))}});const A=p;var x=["__page"]},"./src/components/mermaid.tsx":(g,f,e)=>{"use strict";e.d(f,{G:()=>r,m:()=>o});var d=e("./node_modules/react/index.js"),_=e("./node_modules/mermaid/dist/mermaid.core.mjs");let m;const o=l=>{l&&_.Z.initialize(Object.assign({startOnLoad:!0},l)),clearTimeout(m),m=setTimeout(()=>{clearTimeout(m),_.Z.contentLoaded()},500)},r=({code:l,config:k,children:O})=>((0,d.useEffect)(()=>{o(k)},[]),d.createElement("div",null,d.createElement("div",{className:"mermaid"},l)));try{o.displayName="mermaidLoadContent",o.__docgenInfo={description:"",displayName:"mermaidLoadContent",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/mermaid.tsx#mermaidLoadContent"]={docgenInfo:o.__docgenInfo,name:"mermaidLoadContent",path:"src/components/mermaid.tsx#mermaidLoadContent"})}catch(l){}try{r.displayName="Mermaid",r.__docgenInfo={description:"",displayName:"Mermaid",props:{code:{defaultValue:null,description:"",name:"code",required:!0,type:{name:"string"}},config:{defaultValue:null,description:"",name:"config",required:!1,type:{name:"any"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/mermaid.tsx#Mermaid"]={docgenInfo:r.__docgenInfo,name:"Mermaid",path:"src/components/mermaid.tsx#Mermaid"})}catch(l){}},"./node_modules/moment-mini/locale sync recursive ^\\.\\/.*$":(g,f,e)=>{var d={"./locale":"./node_modules/moment-mini/locale/locale.js","./locale.js":"./node_modules/moment-mini/locale/locale.js"};function _(o){var r=m(o);return e(r)}function m(o){if(!e.o(d,o)){var r=new Error("Cannot find module '"+o+"'");throw r.code="MODULE_NOT_FOUND",r}return d[o]}_.keys=function(){return Object.keys(d)},_.resolve=m,g.exports=_,_.id="./node_modules/moment-mini/locale sync recursive ^\\.\\/.*$"},"./src/components/tooltip/0-description/autogen.readme.md":g=>{"use strict";g.exports=`# Tooltip

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
