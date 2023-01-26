(self.webpackChunk_public_ui_storybook=self.webpackChunk_public_ui_storybook||[]).push([[4502],{"./src/components/input-adapter-leanup/0-description/autogen.wc.stories.mdx":(k,E,e)=>{"use strict";e.r(E),e.d(E,{__namedExportsOrder:()=>R,__page:()=>g,default:()=>x});var a=e("./node_modules/core-js/modules/es.object.keys.js"),l=e.n(a),i=e("./node_modules/core-js/modules/es.array.index-of.js"),n=e.n(i),_=e("./node_modules/core-js/modules/es.symbol.js"),m=e.n(_),O=e("./node_modules/core-js/modules/es.function.bind.js"),j=e.n(O),M=e("./node_modules/core-js/modules/es.object.assign.js"),I=e.n(M),B=e("./node_modules/react/index.js"),u=e("./node_modules/@mdx-js/react/dist/esm.js"),b=e("./node_modules/@storybook/addon-docs/dist/esm/index.js"),D=e("./src/components/input-adapter-leanup/0-description/autogen.readme.md"),v=e("./src/components/mermaid.tsx"),C=["components"];function y(){return y=Object.assign?Object.assign.bind():function(o){for(var s=1;s<arguments.length;s++){var r=arguments[s];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(o[t]=r[t])}return o},y.apply(this,arguments)}function P(o,s){if(o==null)return{};var r=T(o,s),t,d;if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(o);for(d=0;d<c.length;d++)t=c[d],!(s.indexOf(t)>=0)&&Object.prototype.propertyIsEnumerable.call(o,t)&&(r[t]=o[t])}return r}function T(o,s){if(o==null)return{};var r={},t=Object.keys(o),d,c;for(c=0;c<t.length;c++)d=t[c],!(s.indexOf(d)>=0)&&(r[d]=o[d]);return r}var h={},L="wrapper";function f(o){var s=o.components,r=P(o,C);return(0,u.kt)(L,y({},h,r,{components:s,mdxType:"MDXLayout"}),(0,u.kt)(b.h_,{title:"Web Components/InputAdapterLeanup/Beschreibung",mdxType:"Meta"}),(0,u.kt)(b.dk,{mdxType:"Description"},D),(0,u.kt)("script",null,"() =>",(0,v.m)()))}f.displayName="MDXContent",f.isMDXComponent=!0;var g=function(){throw new Error("Docs-only story")};g.parameters={docsOnly:!0};var p={title:"Web Components/InputAdapterLeanup/Beschreibung",includeStories:["__page"]},A={};p.parameters=p.parameters||{},p.parameters.docs=Object.assign({},p.parameters.docs||{},{page:function(){return(0,u.kt)(b.aT,{mdxStoryNameToKey:A,mdxComponentAnnotations:p},(0,u.kt)(f,null))}});const x=p;var R=["__page"]},"./src/components/mermaid.tsx":(k,E,e)=>{"use strict";e.d(E,{G:()=>_,m:()=>n});var a=e("./node_modules/react/index.js"),l=e("./node_modules/mermaid/dist/mermaid.core.mjs");let i;const n=m=>{m&&l.Z.initialize(Object.assign({startOnLoad:!0},m)),clearTimeout(i),i=setTimeout(()=>{clearTimeout(i),l.Z.contentLoaded()},500)},_=({code:m,config:O,children:j})=>((0,a.useEffect)(()=>{n(O)},[]),a.createElement("div",null,a.createElement("div",{className:"mermaid"},m)));try{n.displayName="mermaidLoadContent",n.__docgenInfo={description:"",displayName:"mermaidLoadContent",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/mermaid.tsx#mermaidLoadContent"]={docgenInfo:n.__docgenInfo,name:"mermaidLoadContent",path:"src/components/mermaid.tsx#mermaidLoadContent"})}catch(m){}try{_.displayName="Mermaid",_.__docgenInfo={description:"",displayName:"Mermaid",props:{code:{defaultValue:null,description:"",name:"code",required:!0,type:{name:"string"}},config:{defaultValue:null,description:"",name:"config",required:!1,type:{name:"any"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/mermaid.tsx#Mermaid"]={docgenInfo:_.__docgenInfo,name:"Mermaid",path:"src/components/mermaid.tsx#Mermaid"})}catch(m){}},"./node_modules/moment-mini/locale sync recursive ^\\.\\/.*$":(k,E,e)=>{var a={"./locale":"./node_modules/moment-mini/locale/locale.js","./locale.js":"./node_modules/moment-mini/locale/locale.js"};function l(n){var _=i(n);return e(_)}function i(n){if(!e.o(a,n)){var _=new Error("Cannot find module '"+n+"'");throw _.code="MODULE_NOT_FOUND",_}return a[n]}l.keys=function(){return Object.keys(a)},l.resolve=i,k.exports=l,l.id="./node_modules/moment-mini/locale sync recursive ^\\.\\/.*$"},"./src/components/input-adapter-leanup/0-description/autogen.readme.md":k=>{"use strict";k.exports=`# InputAdapterLeanup

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
