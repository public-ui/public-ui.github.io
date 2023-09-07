"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[33171],{17942:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var o=n(50959);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),h=a,m=d["".concat(s,".").concat(h)]||d[h]||u[h]||r;return n?o.createElement(m,i(i({ref:t},p),{},{components:n})):o.createElement(m,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<r;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},61142:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var o=n(15882),a=(n(50959),n(17942));const r={title:"History",tags:["historical"]},i=void 0,l={unversionedId:"project/history",id:"project/history",title:"History",description:"We would like to give you the opportunity to read about the development of KoliBri and have collected all the groundbreaking events for you on this page.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/40-project/01-history.md",sourceDirName:"40-project",slug:"/project/history",permalink:"/en/docs/next/project/history",draft:!1,tags:[{label:"historical",permalink:"/en/docs/next/tags/historical"}],version:"current",sidebarPosition:1,frontMatter:{title:"History",tags:["historical"]},sidebar:"tutorialSidebar",previous:{title:"Version",permalink:"/en/docs/next/components/version"},next:{title:"Licence",permalink:"/en/docs/next/project/license"}},s={},c=[{value:"Decision <code>Q2/2020</code>",id:"decision-q22020",level:2},{value:"Prototype <code>Q3/2020</code>",id:"prototype-q32020",level:2},{value:"Project <code>2021</code>",id:"project-2021",level:2},{value:"Maturity phase <code>2022</code>",id:"maturity-phase-2022",level:2},{value:"Open source approval <code>Q3/2022</code>",id:"open-source-approval-q32022",level:2},{value:"Open source-collaboration <code>2023</code>",id:"open-source-collaboration-2023",level:2},{value:"Prospect <code>2023</code>",id:"prospect-2023",level:2},{value:"Challenge",id:"challenge",level:3},{value:"1st challenge",id:"1st-challenge",level:4},{value:"2nd challenge",id:"2nd-challenge",level:4}],p={toc:c},d="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"We would like to give you the opportunity to read about the development of KoliBri and have collected all the groundbreaking events for you on this page.")),(0,a.kt)("h2",{id:"decision-q22020"},"Decision ",(0,a.kt)("inlineCode",{parentName:"h2"},"Q2/2020")),(0,a.kt)("p",null,"In public administration, we are legally obligated to make all digital offerings accessible to everyone. Furthermore, we want to implement our digital products as efficiently and flexibly as possible, and this requires sound and consolidated standards."),(0,a.kt)("p",null,"In deciding to create our own component library from scratch, we were largely guided by the goals of the ITZBund and the federal government's IT strategy. In addition, the maturity of the Web component standard, combined with the final replacement of Internet Explorer, played a major role at the time."),(0,a.kt)("p",null,"Existing UI libraries were very design-driven and framework-specific. Semantic accessibility was not a focus when components were designed. In addition, most of the libraries in question, as popular as they are, are outside of our scope to quickly implement requirements within the scope of our legislation."),(0,a.kt)("p",null,"For us, it was important in making the decision to be as independent and sovereign as possible. With the breakthrough of the Web Component Standard, we can implement a single-source strategy and build all components from the ground up with the guidelines of the W3C, WCAG and BITV, and continuously improve them."),(0,a.kt)("p",null,"The free design of the components comes only at the end and participates from the self-contained accessible base components. By having the UI/UX designers deal with the restrictive components, you always have the accessibility and technical side in mind."),(0,a.kt)("p",null,"With KoliBri as a standard, we also create a place where everyone can interact, regardless of developer, designer or tester. ",(0,a.kt)("strong",{parentName:"p"},"The knowledge, experience and feedback of all contributes to the improvement of the standard.")),(0,a.kt)("h2",{id:"prototype-q32020"},"Prototype ",(0,a.kt)("inlineCode",{parentName:"h2"},"Q3/2020")),(0,a.kt)("p",null,"In mid-2020, we created a prototype using a TSX-based framework to realize the vision. Thanks to the prototype and a detailed project description, the desired goals, we were able to initiate an internal project to create standardized, flexible and accessible components."),(0,a.kt)("h2",{id:"project-2021"},"Project ",(0,a.kt)("inlineCode",{parentName:"h2"},"2021")),(0,a.kt)("p",null,"At the beginning of 2021, we started with an internal project and initially implemented the most important components and coordinated the test procedure. After conducting an initial full BITV test, we found the first reference projects in the ITZBund during the course of the year that used KoliBri and gave us feedback. With the help of the feedback, we were able to specifically expand the scope of the components and the functionalities. At the end of 2021, we were able to successfully complete our project with more than 40 components instead of the originally planned approx. 20 and have moved into the maturity phase."),(0,a.kt)("h2",{id:"maturity-phase-2022"},"Maturity phase ",(0,a.kt)("inlineCode",{parentName:"h2"},"2022")),(0,a.kt)("p",null,"We now knew that the technology was powerful and concentrated on supplying the projects in the best possible way. Surprisingly, the number of components has hardly changed. Rather, we massively expanded the functionality of the existing components and improved their flexibility. Also, the idea of the possibilities of reusing semantically accessible base components led us to a modular and decoupled architecture. Finally, we also moved away from token-based theming because it does not offer completely free stylability. Using the component styling approach, we have developed the theme designer and will further simplify and improve the creation and maintenance of themes."),(0,a.kt)("h2",{id:"open-source-approval-q32022"},"Open source approval ",(0,a.kt)("inlineCode",{parentName:"h2"},"Q3/2022")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"KoliBri")," was ",(0,a.kt)("strong",{parentName:"p"},"approved")," for ",(0,a.kt)("strong",{parentName:"p"},"open source")," development by the ",(0,a.kt)("strong",{parentName:"p"},"ITZBund")," to be accessible to all and to be continuously improved and extended from the feedback of the community."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"KoliBri")," offers optimal reusability for this because it is \u2026"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"small")," - ",(0,a.kt)("span",{class:"text-gray-500"},"small-scale components"),","),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"fast")," - ",(0,a.kt)("span",{class:"text-gray-500"},"automated DevOps pipelines"),","),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"nimble")," - ",(0,a.kt)("span",{class:"text-gray-500"},"framework-agnostic")," and"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"colorful")," - ",(0,a.kt)("span",{class:"text-gray-500"},"decoupled theming"),".")),(0,a.kt)("h2",{id:"open-source-collaboration-2023"},"Open source-collaboration ",(0,a.kt)("inlineCode",{parentName:"h2"},"2023")),(0,a.kt)("p",null,'We want to build a broad community around the topic "small flexible accessible web components", KoliBri for short. KoliBri as an accessible webcomponent library is free to use and should be developed collaboratively.'),(0,a.kt)("p",null,'Why this is worthwhile can be derived from the guidelines of KoliBri. The focus is on small frequently occurring components and their HTML construction. These HTML constructions must be solved namely as a rule by all development teams, which must provide accessible web-based user interfaces. If one looks attentively with the "accessibility glasses" in the Web, one notices that for example the Button with the Tooltip, all nearly the same implemented.\nAnd this is exactly what KoliBri addresses with the small-part components. We turn the openly specified HTML (not readily accessible) into semantic accessible HTML components by means of web components, which can be reused flexibly and customizable for your own design systems and web projects.'),(0,a.kt)("h2",{id:"prospect-2023"},"Prospect ",(0,a.kt)("inlineCode",{parentName:"h2"},"2023")),(0,a.kt)("p",null,"Today we can serve almost all web-based realization projects with the KoliBri components. We want to further strengthen this field and expand the community."),(0,a.kt)("h3",{id:"challenge"},"Challenge"),(0,a.kt)("p",null,"For the future, we are taking on even more exciting challenges to further expand the reuse benefits of KoliBri."),(0,a.kt)("h4",{id:"1st-challenge"},"1st challenge"),(0,a.kt)("p",null,"We want the KoliBri components to be pre-rendered server-side, so that they can be used in any CMS system SEO optimized."),(0,a.kt)("h4",{id:"2nd-challenge"},"2nd challenge"),(0,a.kt)("p",null,"We want to develop the Theme Designer into a real tool that lets the user reuse existing patterns immediately during styling and helps prevent accessibility mistakes in their own design."))}u.isMDXComponent=!0}}]);