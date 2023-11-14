"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[83682],{13670:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>r,metadata:()=>c,toc:()=>a});var i=n(11527),o=n(16034);const r={slug:"/concepts/form-input",title:"Inputs, Select und Textarea",description:"KoliBri creates accessible HTML compositions and strictly adheres to the W3C specification.",tags:["architecture","arc42","concept"]},s=void 0,c={id:"concepts/formular",title:"Inputs, Select und Textarea",description:"KoliBri creates accessible HTML compositions and strictly adheres to the W3C specification.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/20-concepts/09-formular.mdx",sourceDirName:"20-concepts",slug:"/concepts/form-input",permalink:"/en/docs/next/concepts/form-input",draft:!1,unlisted:!1,tags:[{label:"architecture",permalink:"/en/docs/next/tags/architecture"},{label:"arc42",permalink:"/en/docs/next/tags/arc-42"},{label:"concept",permalink:"/en/docs/next/tags/concept"}],version:"current",sidebarPosition:9,frontMatter:{slug:"/concepts/form-input",title:"Inputs, Select und Textarea",description:"KoliBri creates accessible HTML compositions and strictly adheres to the W3C specification.",tags:["architecture","arc42","concept"]},sidebar:"tutorialSidebar",previous:{title:"Expert-slot",permalink:"/en/docs/next/concepts/expert-slot"},next:{title:"Privacy",permalink:"/en/docs/next/concepts/datenschutz"}},l={},a=[{value:"Vergleich zum HTML-Tag &lt;input&gt;",id:"vergleich-zum-html-tag-input",level:2},{value:"Division",id:"division",level:2}];function p(e){const t={h2:"h2",p:"p",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.p,{children:["As part of the refactoring to improve the developer experience, we have restructured the input components and converted them into separate components according to the ",(0,i.jsx)("kol-link",{_href:"https://html.spec.whatwg.org/multipage/input.html",_target:"w3c",children:"W3C-Aufteilung"}),".\nIn this way, the respective components only provide the properties that also have a function for the respective type. Properties that were previously maintained but had no function were removed from the programming."]}),"\n",(0,i.jsx)(t.h2,{id:"vergleich-zum-html-tag-input",children:"Vergleich zum HTML-Tag <input>"}),"\n",(0,i.jsxs)("p",{children:[(0,i.jsxs)(t.p,{children:["If you look at the"," "]}),(0,i.jsx)("kol-link",{_href:"https://developer.mozilla.org/de/docs/Web/HTML/Element/Input",_target:"mozilla",children:(0,i.jsxs)(t.p,{children:[(0,i.jsx)("code",{children:"<input>"}),"-tag"]})})," ",(0,i.jsx)(t.p,{children:", then all types of an input field are implemented with only one tag (component). This results in the fact that all properties (attributes/properties) are\npossible, but have no function depending on the type."})]}),"\n",(0,i.jsx)("p",{children:(0,i.jsxs)(t.p,{children:["This implementation of the standard ",(0,i.jsx)("code",{children:"<input>"})," tag leads to the fact that usually more properties are offered than actually fit functionally\nto the type of the input field. This can lead to misunderstandings during development."]})}),"\n",(0,i.jsx)(t.h2,{id:"division",children:"Division"}),"\n",(0,i.jsx)("p",{children:(0,i.jsxs)(t.p,{children:["The different types of input fields have been divided into the following ",(0,i.jsx)("b",{children:"KoliBri"})," components:"]})}),"\n",(0,i.jsxs)("ul",{children:[(0,i.jsx)("li",{children:"KolInputCheckbox"}),(0,i.jsx)("li",{children:"KolInputColor"}),(0,i.jsx)("li",{children:"KolInputDate (ab v1.1.10)"}),(0,i.jsx)("li",{children:"KolInputEmail"}),(0,i.jsx)("li",{children:"KolInputFile"}),(0,i.jsx)("li",{children:"KolInputLocalDateTime (open, part of KolInputDate)"}),(0,i.jsx)("li",{children:"KolInputNumber"}),(0,i.jsx)("li",{children:"KolInputPassword"}),(0,i.jsx)("li",{children:"KolInputRadio (KolInputRadioGroup is replaced)"}),(0,i.jsx)("li",{children:"KolInputRange"}),(0,i.jsx)("li",{children:"KolInputText"}),(0,i.jsx)("li",{children:"KolSelect"}),(0,i.jsx)("li",{children:"KolTextarea"})]})]})}function d(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}},16034:(e,t,n)=>{n.d(t,{Z:()=>c,a:()=>s});var i=n(50959);const o={},r=i.createContext(o);function s(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);