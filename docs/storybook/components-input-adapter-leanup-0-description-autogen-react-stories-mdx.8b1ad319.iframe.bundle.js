(self.webpackChunk_public_ui_storybook=self.webpackChunk_public_ui_storybook||[]).push([[3864],{"./src/components/input-adapter-leanup/0-description/autogen.react.stories.mdx":(k,E,e)=>{"use strict";e.r(E),e.d(E,{__namedExportsOrder:()=>R,__page:()=>j,default:()=>x});var r=e("./node_modules/core-js/modules/es.object.keys.js"),m=e.n(r),l=e("./node_modules/core-js/modules/es.array.index-of.js"),n=e.n(l),_=e("./node_modules/core-js/modules/es.symbol.js"),i=e.n(_),O=e("./node_modules/core-js/modules/es.function.bind.js"),M=e.n(O),D=e("./node_modules/core-js/modules/es.object.assign.js"),I=e.n(D),B=e("./node_modules/react/index.js"),u=e("./node_modules/@mdx-js/react/dist/esm.js"),y=e("./node_modules/@storybook/addon-docs/dist/esm/index.js"),v=e("./src/components/input-adapter-leanup/0-description/autogen.readme.md"),b=e("./src/components/mermaid.tsx"),C=["components"];function f(){return f=Object.assign?Object.assign.bind():function(o){for(var s=1;s<arguments.length;s++){var a=arguments[s];for(var t in a)Object.prototype.hasOwnProperty.call(a,t)&&(o[t]=a[t])}return o},f.apply(this,arguments)}function P(o,s){if(o==null)return{};var a=T(o,s),t,d;if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(o);for(d=0;d<c.length;d++)t=c[d],!(s.indexOf(t)>=0)&&(!Object.prototype.propertyIsEnumerable.call(o,t)||(a[t]=o[t]))}return a}function T(o,s){if(o==null)return{};var a={},t=Object.keys(o),d,c;for(c=0;c<t.length;c++)d=t[c],!(s.indexOf(d)>=0)&&(a[d]=o[d]);return a}var h={},L="wrapper";function g(o){var s=o.components,a=P(o,C);return(0,u.kt)(L,f({},h,a,{components:s,mdxType:"MDXLayout"}),(0,u.kt)(y.h_,{title:"React/InputAdapterLeanup/Beschreibung",mdxType:"Meta"}),(0,u.kt)(y.dk,{mdxType:"Description"},v),(0,u.kt)("script",null,"() =>",(0,b.m)()))}g.displayName="MDXContent",g.isMDXComponent=!0;var j=function(){throw new Error("Docs-only story")};j.parameters={docsOnly:!0};var p={title:"React/InputAdapterLeanup/Beschreibung",includeStories:["__page"]},A={};p.parameters=p.parameters||{},p.parameters.docs=Object.assign({},p.parameters.docs||{},{page:function(){return(0,u.kt)(y.aT,{mdxStoryNameToKey:A,mdxComponentAnnotations:p},(0,u.kt)(g,null))}});const x=p;var R=["__page"]},"./src/components/mermaid.tsx":(k,E,e)=>{"use strict";e.d(E,{G:()=>_,m:()=>n});var r=e("./node_modules/react/index.js"),m=e("./node_modules/mermaid/dist/mermaid.core.mjs");let l;const n=i=>{i&&m.Z.initialize(Object.assign({startOnLoad:!0},i)),clearTimeout(l),l=setTimeout(()=>{clearTimeout(l),m.Z.contentLoaded()},500)},_=({code:i,config:O,children:M})=>((0,r.useEffect)(()=>{n(O)},[]),r.createElement("div",null,r.createElement("div",{className:"mermaid"},i)));try{n.displayName="mermaidLoadContent",n.__docgenInfo={description:"",displayName:"mermaidLoadContent",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/mermaid.tsx#mermaidLoadContent"]={docgenInfo:n.__docgenInfo,name:"mermaidLoadContent",path:"src/components/mermaid.tsx#mermaidLoadContent"})}catch(i){}try{_.displayName="Mermaid",_.__docgenInfo={description:"",displayName:"Mermaid",props:{code:{defaultValue:null,description:"",name:"code",required:!0,type:{name:"string"}},config:{defaultValue:null,description:"",name:"config",required:!1,type:{name:"any"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/mermaid.tsx#Mermaid"]={docgenInfo:_.__docgenInfo,name:"Mermaid",path:"src/components/mermaid.tsx#Mermaid"})}catch(i){}},"./node_modules/moment-mini/locale sync recursive ^\\.\\/.*$":(k,E,e)=>{var r={"./locale":"./node_modules/moment-mini/locale/locale.js","./locale.js":"./node_modules/moment-mini/locale/locale.js"};function m(n){var _=l(n);return e(_)}function l(n){if(!e.o(r,n)){var _=new Error("Cannot find module '"+n+"'");throw _.code="MODULE_NOT_FOUND",_}return r[n]}m.keys=function(){return Object.keys(r)},m.resolve=l,k.exports=m,m.id="./node_modules/moment-mini/locale sync recursive ^\\.\\/.*$"},"./src/components/input-adapter-leanup/0-description/autogen.readme.md":k=>{"use strict";k.exports=`# InputAdapterLeanup

<!-- Auto Generated Below -->


> **[DEPRECATED]** Use the separated lean-input-adapter from the \`@leanup/kolibri-components\` package.

## Abh\xE4ngigkeiten

### Abh\xE4ngig von

- kol-alert
- kol-link

### Graph
<div class="mermaid">
graph TD;
  kol-input-adapter-leanup --> kol-alert
  kol-input-adapter-leanup --> kol-link
  kol-alert --> kol-heading-wc
  kol-alert --> kol-button-wc
  kol-alert --> kol-icon
  kol-button-wc --> kol-span-wc
  kol-button-wc --> kol-tooltip
  kol-span-wc --> kol-icon
  kol-tooltip --> kol-badge
  kol-badge --> kol-span-wc
  kol-badge --> kol-button-wc
  kol-link --> kol-link-wc
  kol-link-wc --> kol-span-wc
  kol-link-wc --> kol-icon
  kol-link-wc --> kol-tooltip
  style kol-input-adapter-leanup fill:#f9f,stroke:#333,stroke-width:4px
</div>

----------------------------------------------


`}}]);
