"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[56184],{64964:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>d,frontMatter:()=>s,metadata:()=>c,toc:()=>l});var t=i(2488),o=i(16592);const s={slug:"/concepts/swizzling",title:"Swizzling",description:"More complex component requirements can be enabled using Swizzling.",tags:["architecture","arc42","concept"]},r=void 0,c={id:"concepts/swizzling",title:"Swizzling",description:"More complex component requirements can be enabled using Swizzling.",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-1.5/20-concepts/07-swizzling.md",sourceDirName:"20-concepts",slug:"/concepts/swizzling",permalink:"/en/docs/1.5/concepts/swizzling",draft:!1,unlisted:!1,tags:[{label:"architecture",permalink:"/en/docs/1.5/tags/architecture"},{label:"arc42",permalink:"/en/docs/1.5/tags/arc-42"},{label:"concept",permalink:"/en/docs/1.5/tags/concept"}],version:"1.5",sidebarPosition:7,frontMatter:{slug:"/concepts/swizzling",title:"Swizzling",description:"More complex component requirements can be enabled using Swizzling.",tags:["architecture","arc42","concept"]},sidebar:"tutorialSidebar",previous:{title:"Scss",permalink:"/en/docs/1.5/concepts/styling/scss"},next:{title:"Expert-slot",permalink:"/en/docs/1.5/concepts/expert-slot"}},a={},l=[{value:"Motivation",id:"motivation",level:2},{value:"Definition",id:"definition",level:2},{value:"Variants",id:"variants",level:2},{value:"Wrapping",id:"wrapping",level:3},{value:"Overwriting",id:"overwriting",level:3}];function p(e){const n={h2:"h2",h3:"h3",p:"p",...(0,o.M)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"motivation",children:"Motivation"}),"\n",(0,t.jsx)(n.p,{children:"Numerous, sometimes complex requirements for components of design systems or component libraries would not have to be considered over and over again if there were small-scale, easily reusable basic components to carry these requirements."}),"\n",(0,t.jsx)(n.h2,{id:"definition",children:"Definition"}),"\n",(0,t.jsx)(n.p,{children:"Swizzling is defined as the possibility of either modifying an existing component from the outside or replacing the internal construction. Both pay off in high reusability."}),"\n",(0,t.jsx)(n.h2,{id:"variants",children:"Variants"}),"\n",(0,t.jsx)(n.h3,{id:"wrapping",children:"Wrapping"}),"\n",(0,t.jsx)(n.p,{children:"The easiest method to customize a KoliBri component is wrapping. Here, an own component is built around the KoliBri component (decorator pattern) and individualized on the outside."}),"\n",(0,t.jsx)(n.h3,{id:"overwriting",children:"Overwriting"}),"\n",(0,t.jsxs)(n.p,{children:["Another variant of swizzling is the overwriting of the inner component construction. In Web Components, this is often done using slots. In KoliBri, we have introduced the ",(0,t.jsx)("kol-link",{_href:"expert-slot",_label:"expert slots"})," for this purpose."]})]})}function d(e={}){const{wrapper:n}={...(0,o.M)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},16592:(e,n,i)=>{i.d(n,{I:()=>c,M:()=>r});var t=i(96651);const o={},s=t.createContext(o);function r(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);