"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[8820],{36840:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>r,metadata:()=>a,toc:()=>c});var o=t(76776),i=t(108);const r={title:"Form handling",description:"This page describes how complex forms can be implemented with KoliBri.",tags:["architekture","form","conzept"]},s=void 0,a={id:"formular-handling",title:"Form handling",description:"This page describes how complex forms can be implemented with KoliBri.",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-1.7/41-formular-handling.mdx",sourceDirName:".",slug:"/formular-handling",permalink:"/en/docs/1.7/formular-handling",draft:!1,unlisted:!1,tags:[{inline:!0,label:"architekture",permalink:"/en/docs/1.7/tags/architekture"},{inline:!0,label:"form",permalink:"/en/docs/1.7/tags/form"},{inline:!0,label:"conzept",permalink:"/en/docs/1.7/tags/conzept"}],version:"1.7",sidebarPosition:41,frontMatter:{title:"Form handling",description:"This page describes how complex forms can be implemented with KoliBri.",tags:["architekture","form","conzept"]},sidebar:"tutorialSidebar",previous:{title:"Roadmap",permalink:"/en/docs/1.7/project/roadmap"},next:{title:"Testergebnisse",permalink:"/en/docs/1.7/test-results"}},l={},c=[{value:"Design approaches",id:"design-approaches",level:2},{value:"Input-components",id:"input-components",level:2},{value:"Handling adapters",id:"handling-adapters",level:2},{value:"Lean-Input adapters",id:"lean-input-adapters",level:3},{value:"Installation",id:"installation",level:4},{value:"Integration",id:"integration",level:4},{value:"Usage",id:"usage",level:4}];function p(e){const n={blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",strong:"strong",...(0,i.M)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:["Almost all ",(0,o.jsx)(n.strong,{children:"KoliBri"})," components are used to implement and encapsulate specific accessible HTML components and belong to the ",(0,o.jsx)(n.strong,{children:"View"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["In order to be able to implement very dynamic and complex forms, numerous functionalities such as change listeners, validators, formatter and others are required.\nThis logic should be implemented decoupled from the view and belong to the ",(0,o.jsx)(n.strong,{children:"controller"}),"."]}),"\n",(0,o.jsx)(n.h2,{id:"design-approaches",children:"Design approaches"}),"\n",(0,o.jsxs)(n.p,{children:["In ",(0,o.jsx)("kol-abbr",{_title:"Single-Page-Application",children:"SPA"})," development, a distinction is often made between the ",(0,o.jsx)("i",{children:"template-driven"})," and ",(0,o.jsx)("i",{children:"model-driven"})," approach."]}),"\n",(0,o.jsx)(n.p,{children:"The template-driven approach means that the form logic is also implemented in the template, i.e. the view. This can be shameful, but also lead to confusing code."}),"\n",(0,o.jsx)(n.p,{children:"The model-driven approach, on the other hand, means that the form logic is implemented in the model, i.e. the controller. This initially leads to more effort, but it also leads to decoupled, more maintainable code."}),"\n",(0,o.jsx)("kol-alert",{_type:"info",children:(0,o.jsxs)(n.p,{children:["In ",(0,o.jsx)(n.strong,{children:"KoliBri"})," the form components are decoupled from the form handling. This has the advantage that the components can be reused more universally. Quasi like the HTML itself as well."]})}),"\n",(0,o.jsx)(n.h2,{id:"input-components",children:"Input-components"}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.strong,{children:"input"})," components are the components that can be used to make form inputs. That means primarily ",(0,o.jsx)("kol-link",{_href:"/docs/konzepte/formular-input",children:"inputs, select and textarea"}),"."]}),"\n",(0,o.jsx)(n.h2,{id:"handling-adapters",children:"Handling adapters"}),"\n",(0,o.jsxs)(n.p,{children:["As described above, the form handling is decoupled from the ",(0,o.jsx)(n.strong,{children:"input"})," components. Thus, each development team can decide for itself which form handling is suitable, depending on the framework used."]}),"\n",(0,o.jsx)("kol-alert",{_type:"info",children:(0,o.jsxs)(n.p,{children:["The form handling is then ",(0,o.jsx)(n.strong,{children:"coupled"})," with the ",(0,o.jsx)(n.strong,{children:"input"})," components via an ",(0,o.jsx)(n.strong,{children:"adapter"})," component that dynamically synchronizes the state of the components."]})}),"\n",(0,o.jsx)(n.h3,{id:"lean-input-adapters",children:"Lean-Input adapters"}),"\n",(0,o.jsxs)(n.p,{children:["For development with TypeScript, ",(0,o.jsx)(n.strong,{children:"KoliBri"})," provides the ",(0,o.jsx)(n.strong,{children:"adapter"})," component for the form handling library ",(0,o.jsx)("kol-link",{_href:"https://www.npmjs.com/package/@leanup/form",_label:"@leanup/form",_target:"npmjs"}),"."]}),"\n",(0,o.jsx)(n.h4,{id:"installation",children:"Installation"}),"\n",(0,o.jsx)(n.p,{children:"The adapter can be installed via the public NPM registry:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"npm i @leanup/form @leanup/kolibri-components @leanup/kolibri-react\n"})}),"\n",(0,o.jsx)(n.h4,{id:"integration",children:"Integration"}),"\n",(0,o.jsx)(n.p,{children:"When integrating, it is important to note that the Leanup components must be registered first."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-html",children:"<head>\n\t<script type=\"module\">\n\t\timport { register } from 'https://unpkg.com/@public-ui/components@1.4.0-rc.6';\n\t\timport { defineCustomElements as kolibri } from 'https://unpkg.com/@public-ui/components@1.4.0-rc.6/dist/loader';\n\t\timport { defineCustomElements as leanup } from 'https://unpkg.com/@leanup/kolibri-components@1.0.5/dist/loader';\n\t\timport { BMF } from 'https://unpkg.com/@public-ui/themes@1.4.0-rc.6';\n\t\tregister([BMF], [kolibri, leanup])\n\t\t\t.catch(console.warn);\n\t<\/script>\n</head>\n<body>\n\t<kol-spin _show>\n</body>\n"})}),"\n",(0,o.jsx)(n.p,{children:"Or for React:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:"import React from 'react';\nimport ReactDOM from 'react-dom';\n\nimport { AppComponent } from './components/app/component';\n\nimport { register } from '@public-ui/components';\nimport { defineCustomElements as kolibri } from '@public-ui/components/dist/loader';\nimport { defineCustomElements as leanup } from '@leanup/kolibri-components/dist/loader';\nimport { BMF } from '@public-ui/themes';\n\nregister([BMF], [kolibri, leanup])\n\t.then(() => {\n\t\tconst htmlDivElement: HTMLDivElement | null = document.querySelector<HTMLDivElement>('div#app');\n\t\tif (htmlDivElement instanceof HTMLDivElement) {\n\t\t\tconst root = createRoot(htmlDivElement);\n\t\t\troot.render(<AppComponent />);\n\t\t}\n\t})\n\t.catch(console.warn);\n"})}),"\n",(0,o.jsx)(n.h4,{id:"usage",children:"Usage"}),"\n",(0,o.jsx)(n.p,{children:"As the name (adapter) suggests, the component represents the synchronization between the specific form logic (controller) and the form representation (view). The implementation in the HTML code takes the form of an enclosing tag."}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Example (schematic):"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-html",children:'<lean-input-adapter>\n\t<kol-input-text>Country</kol-input-text>\n</lean-input-adapter>\n\n<lean-input-adapter>\n\t<kol-select _list="Germany, Austria, Switzerland, etc.">Country</kol-select>\n</lean-input-adapter>\n'})}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsx)(n.p,{children:"In plain HTML, the controls must be attached to the adapter nodes after DOM construction for the reactive behavior to work."}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"Or for React:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:'<LeanInputAdapter _control={landControl as InputControl}>\n\t<KolInputText>Country</KolInputText>\n</LeanInputAdapter>\n\n<LeanInputAdapter _control={landControl as InputControl}>\n\t<KolSelect _list="Germany, Austria, Switzerland, etc.">Country</KolSelect>\n</LeanInputAdapter>\n'})}),"\n",(0,o.jsx)("kol-alert",{_type:"info",children:(0,o.jsx)(n.p,{children:"In this example, it is nice to see that the model is decoupled from the representation. So whether a form value is represented as a text input field or as a select field is irrelevant at the model level."})}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.strong,{children:"adapter"})," component encloses the ",(0,o.jsx)(n.strong,{children:"input"})," component of KoliBri and thereby ensures the synchronization between model and representation."]})]})}function d(e={}){const{wrapper:n}={...(0,i.M)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(p,{...e})}):p(e)}},108:(e,n,t)=>{t.d(n,{I:()=>a,M:()=>s});var o=t(80924);const i={},r=o.createContext(i);function s(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);