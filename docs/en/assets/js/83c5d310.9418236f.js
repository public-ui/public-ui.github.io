"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[56607],{17942:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>h});var n=r(50959);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=s(r),m=i,h=p["".concat(l,".").concat(m)]||p[m]||d[m]||o;return r?n.createElement(h,a(a({ref:t},u),{},{components:r})):n.createElement(h,a({ref:t},u))}));function h(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[p]="string"==typeof e?e:i,a[1]=c;for(var s=2;s<o;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},37108:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var n=r(15882),i=(r(50959),r(17942));const o={title:"Security",description:"This page describes the security concept for KoliBri.",tags:["architecture","concept","security","legal"]},a="Security conecpt",c={unversionedId:"concepts/sicherheit",id:"version-1.5.3/concepts/sicherheit",title:"Security",description:"This page describes the security concept for KoliBri.",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-1.5.3/20-concepts/15-sicherheit.mdx",sourceDirName:"20-concepts",slug:"/concepts/sicherheit",permalink:"/en/docs/1.5.3/concepts/sicherheit",draft:!1,tags:[{label:"architecture",permalink:"/en/docs/1.5.3/tags/architecture"},{label:"concept",permalink:"/en/docs/1.5.3/tags/concept"},{label:"security",permalink:"/en/docs/1.5.3/tags/security"},{label:"legal",permalink:"/en/docs/1.5.3/tags/legal"}],version:"1.5.3",sidebarPosition:15,frontMatter:{title:"Security",description:"This page describes the security concept for KoliBri.",tags:["architecture","concept","security","legal"]},sidebar:"tutorialSidebar",previous:{title:"Privacy",permalink:"/en/docs/1.5.3/concepts/datenschutz"},next:{title:"Komponenten",permalink:"/en/docs/1.5.3/components/"}},l={},s=[{value:"Introduction",id:"introduction",level:2},{value:"Initial commit",id:"initial-commit",level:2},{value:"Measures",id:"measures",level:2},{value:"Code Review",id:"code-review",level:3},{value:"Contributor",id:"contributor",level:3}],u={toc:s},p="wrapper";function d(e){let{components:t,...r}=e;return(0,i.kt)(p,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"security-conecpt"},"Security conecpt"),(0,i.kt)("h2",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"The manifest defines the focus of the component library. In terms of security, the following points can be highlighted:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The goal of the library is to provide consistent and accessible user interfaces for web-based projects."),(0,i.kt)("li",{parentName:"ul"},"The technical Scope of the library is limited thereby exclusively to the presentation layer."),(0,i.kt)("li",{parentName:"ul"},"In addition, the components do not contain any technical reference and are completely valid conceived."),(0,i.kt)("li",{parentName:"ul"},"Any technical context is given to a component from the outside into the component and is represented only."),(0,i.kt)("li",{parentName:"ul"},"There are beyond that no data transfer functionalities and storage.")),(0,i.kt)("h2",{id:"initial-commit"},"Initial commit"),(0,i.kt)("p",null,"Before the source code was published, the following reviews were performed, among others:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Quality assurance:")," Basically, all reasonable quality-enhancing tools are used, which check the source code automatically and permanently (e.g. ESLint, TS-Prune, Tests, DepCheck, Prettier, Axe and many more)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Automatic code review:")," Using Teamscale, the entire source code was reviewed. Tools such as ESLint, Prettier and numerous test steps for compliance with the JavaScript/TypeScript programming guidelines of the ITZBund were used."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Manual code review:")," In addition, a code review was performed using a service provider to best implement the preparation for a public repository."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"License review:")," For the selection of the open-source license, we follow the efforts of the European Commission with the European Union Public Licence v1.2.")),(0,i.kt)("h2",{id:"measures"},"Measures"),(0,i.kt)("p",null,"This section describes the measures taken to ensure safety on a permanent basis."),(0,i.kt)("h3",{id:"code-review"},"Code Review"),(0,i.kt)("p",null,"All Git repositories are configured so that changes can only be made via a pull request combined with a manual code review. manual code review. When a change is deployed via a pull request, all established review pipelines are set up review pipelines start automatically and provide feedback on the fulfillment of all quality benchmarks. If the change is is complete and all automated checks have been successful, a manual review by a core team member must take place. A core member may not merge his or her own change."),(0,i.kt)("p",null,"During the review, special attention must be paid to the following points:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"the code must not contain any personal data or brand names"),(0,i.kt)("li",{parentName:"ul"},"The contributor must have accepted the CLA"),(0,i.kt)("li",{parentName:"ul"},"the scope of the code change must be reviewable (small-scale)")),(0,i.kt)("h3",{id:"contributor"},"Contributor"),(0,i.kt)("p",null,"There are internal and external contributors (contributors). Internal contributors (core team) have extensive permissions in the Git repository and so directly on the source code and the resulting artifacts. External contributors, on the other hand, each have their Git repository, called forks or a copy. We (core team) have no influence on the forked Git repositories or copy."))}d.isMDXComponent=!0}}]);