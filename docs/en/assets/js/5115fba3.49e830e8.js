"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[85135],{86660:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var i=t(76776),r=t(108);const o={title:"Security",description:"This page describes the security concept for KoliBri.",tags:["architecture","concept","security","legal"]},s="Security conecpt",c={id:"concepts/sicherheit",title:"Security",description:"This page describes the security concept for KoliBri.",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-1.5/20-concepts/15-sicherheit.mdx",sourceDirName:"20-concepts",slug:"/concepts/sicherheit",permalink:"/en/docs/1.5/concepts/sicherheit",draft:!1,unlisted:!1,tags:[{inline:!0,label:"architecture",permalink:"/en/docs/1.5/tags/architecture"},{inline:!0,label:"concept",permalink:"/en/docs/1.5/tags/concept"},{inline:!0,label:"security",permalink:"/en/docs/1.5/tags/security"},{inline:!0,label:"legal",permalink:"/en/docs/1.5/tags/legal"}],version:"1.5",sidebarPosition:15,frontMatter:{title:"Security",description:"This page describes the security concept for KoliBri.",tags:["architecture","concept","security","legal"]},sidebar:"tutorialSidebar",previous:{title:"Privacy",permalink:"/en/docs/1.5/concepts/datenschutz"},next:{title:"Komponenten",permalink:"/en/docs/1.5/components/"}},a={},l=[{value:"Introduction",id:"introduction",level:2},{value:"Initial commit",id:"initial-commit",level:2},{value:"Measures",id:"measures",level:2},{value:"Code Review",id:"code-review",level:3},{value:"Contributor",id:"contributor",level:3}];function h(e){const n={h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.M)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"security-conecpt",children:"Security conecpt"}),"\n",(0,i.jsx)(n.h2,{id:"introduction",children:"Introduction"}),"\n",(0,i.jsx)(n.p,{children:"The manifest defines the focus of the component library. In terms of security, the following points can be highlighted:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"The goal of the library is to provide consistent and accessible user interfaces for web-based projects."}),"\n",(0,i.jsx)(n.li,{children:"The technical Scope of the library is limited thereby exclusively to the presentation layer."}),"\n",(0,i.jsx)(n.li,{children:"In addition, the components do not contain any technical reference and are completely valid conceived."}),"\n",(0,i.jsx)(n.li,{children:"Any technical context is given to a component from the outside into the component and is represented only."}),"\n",(0,i.jsx)(n.li,{children:"There are beyond that no data transfer functionalities and storage."}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"initial-commit",children:"Initial commit"}),"\n",(0,i.jsx)(n.p,{children:"Before the source code was published, the following reviews were performed, among others:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Quality assurance:"})," Basically, all reasonable quality-enhancing tools are used, which check the source code automatically and permanently (e.g. ESLint, TS-Prune, Tests, DepCheck, Prettier, Axe and many more)."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Automatic code review:"})," Using Teamscale, the entire source code was reviewed. Tools such as ESLint, Prettier and numerous test steps for compliance with the JavaScript/TypeScript programming guidelines of the ITZBund were used."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Manual code review:"})," In addition, a code review was performed using a service provider to best implement the preparation for a public repository."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"License review:"})," For the selection of the open-source license, we follow the efforts of the European Commission with the European Union Public Licence v1.2."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"measures",children:"Measures"}),"\n",(0,i.jsx)(n.p,{children:"This section describes the measures taken to ensure safety on a permanent basis."}),"\n",(0,i.jsx)(n.h3,{id:"code-review",children:"Code Review"}),"\n",(0,i.jsx)(n.p,{children:"All Git repositories are configured so that changes can only be made via a pull request combined with a manual code review. manual code review. When a change is deployed via a pull request, all established review pipelines are set up review pipelines start automatically and provide feedback on the fulfillment of all quality benchmarks. If the change is is complete and all automated checks have been successful, a manual review by a core team member must take place. A core member may not merge his or her own change."}),"\n",(0,i.jsx)(n.p,{children:"During the review, special attention must be paid to the following points:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"the code must not contain any personal data or brand names"}),"\n",(0,i.jsx)(n.li,{children:"The contributor must have accepted the CLA"}),"\n",(0,i.jsx)(n.li,{children:"the scope of the code change must be reviewable (small-scale)"}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"contributor",children:"Contributor"}),"\n",(0,i.jsx)(n.p,{children:"There are internal and external contributors (contributors). Internal contributors (core team) have extensive permissions in the Git repository and so directly on the source code and the resulting artifacts. External contributors, on the other hand, each have their Git repository, called forks or a copy. We (core team) have no influence on the forked Git repositories or copy."})]})}function d(e={}){const{wrapper:n}={...(0,r.M)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},108:(e,n,t)=>{t.d(n,{I:()=>c,M:()=>s});var i=t(80924);const r={},o=i.createContext(r);function s(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);