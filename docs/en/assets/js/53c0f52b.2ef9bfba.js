"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[23712],{84428:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>h,contentTitle:()=>a,default:()=>g,frontMatter:()=>c,metadata:()=>d,toc:()=>p});var s=t(76776),i=t(108),o=t(64992),r=t(73624),l=t(68324);const c={},a="Theming",d={id:"concepts/styling/theming",title:"Theming",description:"<img",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-1.5/20-concepts/05-styling/34-theming.mdx",sourceDirName:"20-concepts/05-styling",slug:"/concepts/styling/theming",permalink:"/en/docs/1.5/concepts/styling/theming",draft:!1,unlisted:!1,tags:[],version:"1.5",sidebarPosition:34,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Device and browser specific issues",permalink:"/en/docs/1.5/concepts/known-issues"},next:{title:"Designer",permalink:"/en/docs/1.5/concepts/styling/designer"}},h={},p=[];function m(e){const n={h1:"h1",li:"li",ol:"ol",p:"p",...(0,i.M)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"theming",children:"Theming"}),"\n",(0,s.jsxs)("kol-alert",{_type:"info",children:[(0,s.jsx)("img",{width:"100%",src:"/assets/theme-switch.png",alt:"Shows where the switch for switching the theme is in the toolbar."}),(0,s.jsx)("p",{children:(0,s.jsxs)(n.p,{children:[(0,s.jsx)("kol-icon",{_icons:"codicon codicon-arrow-right"}),"You can switch the theme from our site (KoliBri) using the\nswitch in the toolbar above."]})})]}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsxs)("p",{children:[(0,s.jsxs)(n.p,{children:["The unique feature of ",(0,s.jsx)(r.k,{})," is the ",(0,s.jsx)("strong",{children:"reference implementation"})," of components that are"," ","\n",(0,s.jsx)("strong",{children:"semantically W3C- and WCAG-compliant"})," from the ground up and thus"," ","\n",(0,s.jsx)("strong",{children:"completely accessible"})," regarding assistive support. All components are implemented as"," "]}),(0,s.jsx)(o.GQ,{_href:"https://developer.mozilla.org/en-US/docs/Web/Web_Components?retiredLocale=de",_target:"mozilla",children:(0,s.jsx)(n.p,{children:"Web Components"})})," ",(0,s.jsx)(n.p,{children:"and are therefore reusable in all web-based projects. In the following figure, these components are represented by the\ngray-dashed shapes in the center."})]}),"\n",(0,s.jsx)("p",{children:(0,s.jsx)(o.MV,{children:(0,s.jsx)("strong",{children:"1. KoliBri components could be reused as a basis for all design systems or component libraries."})})}),"\n",(0,s.jsx)("img",{src:"/assets/abgrenzung.jpg",alt:"Illustration of how components become custom components using various style guides."}),"\n",(0,s.jsxs)("p",{children:[(0,s.jsxs)(n.p,{children:["In the first release (v1.0) ",(0,s.jsx)(r.k,{})," had directly implemented the individualization of the standard design using\nso-called"," "]}),(0,s.jsx)("strong",{children:(0,s.jsx)(o.GQ,{_href:"https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties",_target:"mozilla",children:(0,s.jsx)(n.p,{children:"CSS-Properties"})})})," ",(0,s.jsx)(n.p,{children:"("}),(0,s.jsx)(o.GQ,{_href:"https://uxdesign.cc/design-tokens-for-dummies-8acebf010d71",_target:"uxdesign",children:(0,s.jsx)(n.p,{children:"Design-Tokens"})}),(0,s.jsxs)(n.p,{children:[", ",(0,s.jsx)(o.GQ,{_href:"https://tailwindcss.com",_target:"tailwindcss",children:"\nTailwind CSS\n"}),"). With the implementation of further themes, however, we have found that we would have to introduce more and\nmore CSS-Properties to be able to implement the flexibility for the desired design/UX (Corporate Design/Style guide). In\ncase of doubt, a separate property would have to be provided for each customizability. The example of the"]}),(0,s.jsx)(o.GQ,{_href:"https://mui.com/material-ui/api/button/#css",_target:"mui",children:(0,s.jsx)(n.p,{children:"MUI-Button CSS"})})," ",(0,s.jsx)(n.p,{children:"shows well how the CSS properties (design tokens) become more and more."})]}),"\n",(0,s.jsx)("p",{children:(0,s.jsx)(o.MV,{children:(0,s.jsxs)("strong",{children:[(0,s.jsxs)(n.ol,{start:"2",children:["\n",(0,s.jsxs)(n.li,{children:["We have completely decoupled the whole CSS from the components (like"," "]}),"\n"]}),(0,s.jsx)(o.GQ,{_href:"https://styled-components.com",_target:"styled-components",children:(0,s.jsx)(n.p,{children:"Styled-Components"})}),(0,s.jsx)(n.p,{children:")."})]})})}),"\n",(0,s.jsx)("p",{children:(0,s.jsx)(n.p,{children:"Using the designer, a \u201cclient\u201d can design the components individually and completely independently with all the CSS\nfreedom. Within a \u201cclient\u201d theme, custom CSS properties can be introduced. The use of CSS properties (design tokens)\nis thus preserved at the theme level, but with a much smaller and maintainable scope."})}),"\n",(0,s.jsx)("p",{children:(0,s.jsx)(o.MV,{children:(0,s.jsx)("strong",{children:(0,s.jsxs)(n.ol,{start:"3",children:["\n",(0,s.jsx)(n.li,{children:"KoliBri allows the reuse of tested, accessible and robust components (constructions) with almost individual\ndesign and thus represents a freely customizable HTML standard in the context of accessibility."}),"\n"]})})})}),"\n",(0,s.jsx)("p",{children:(0,s.jsx)(n.p,{children:"The following diagram shows an exemplary design process with KoliBri, which can be applied completely independent of\nthe KoliBri team."})}),"\n",(0,s.jsx)(l.qs,{code:"\nstateDiagram-v2\n\tdirection LR\n\ts1: <strong>Specifikation</strong>\n\ts1: UI/UX-Team\n\ts2: <strong>Design-Tokens</strong>\n\ts2: JSON\n\ts3: <strong>Style-Files</strong>\n\ts3: CSS\n\ts4: <strong>Designer</strong>\n\ts4: KoliBri\n\ts5: <strong>Theme</strong>\n\ts5: KoliBri\n\tnote right of s1\n\t\t<strong>Tools:</strong> Adobe XD, Figma, Sketch u.a.\n\t\t<strong>Technique:</strong> CSS-Properties, Design-Tokens\n\tend note\n\tnote right of s2\n\t\tExport-<strong>Plugin</strong>\n\tend note\n\tnote right of s3\n\t\tSet of CSS-Properties\n\tend note\n\tnote right of s5\n\t\tSharable <strong>NPM-Paket</strong>\n\tend note\n\t[*] --\x3e s1\n\ts1 --\x3e s2 : Plugin\n\ts2 --\x3e s3 : Script\n\ts3 --\x3e s5\n\ts1 --\x3e s4\n\ts4 --\x3e s5\n\ts5 --\x3e [*]"}),"\n",(0,s.jsx)("p",{children:(0,s.jsxs)(n.p,{children:["For example, the UI/UX team specifies the components of their design system with Figma. When the specification is\ntransferred to implementation, the design is \u201ctransferred\u201d to the basic components in the form of pure CSS using"," ","\n",(0,s.jsx)(o.GQ,{_href:"/docs/concepts/styling/designer",children:"KoliBri-Designers"}),". If customizability is desired in your\ndesign system, CSS properties or design tokens can be defined in the Designer for this purpose. So that the own theme\ncan be shared across projects, the theme is packaged in an NPM package and can be made available via any registry."]})}),"\n",(0,s.jsx)("p",{children:(0,s.jsx)(o.Si,{_summary:"Design-Tokens",children:(0,s.jsx)(n.p,{children:"Optionally, design schemes can be exported from Figma, for example, using design tokens. These can then be\ntransferred into separate CSS files that contain the respective values for the CSS properties. Later, one of these\nCSS files is used to apply the concrete design in combination with the Web Components and the theme on the website."})})}),"\n",(0,s.jsx)("p",{children:(0,s.jsx)(o.Si,{_summary:"Dark-Mode",children:(0,s.jsx)(n.p,{children:"Optionally, a \u201cdark mode\u201d theme can also be implemented. For this, the required CSS can be stored in the globals of\nthe KoliBri theme."})})}),"\n",(0,s.jsx)(o.mW,{_heading:"KoliBri-Factory",_type:"info",_variant:"card",children:(0,s.jsxs)("p",{children:[(0,s.jsxs)(n.p,{children:["Own specific components, which are not provided by KoliBri and unfortunately do not fit to the KoliBri component\nvariety, can be built in own component libraries and maintained independently. For this purpose, we offer the\nso-called ",(0,s.jsx)("strong",{children:"KoliBri-Factory"})," (Stack) (see"," "]}),(0,s.jsx)(o.GQ,{_href:"https://github.com/public-ui/kolibri/blob/main/docs/ARCHITECTURE.md#erweitert",_target:"github",children:(0,s.jsx)(n.p,{children:"Modularization"})}),(0,s.jsx)(n.p,{children:")."})]})})]})}function g(e={}){const{wrapper:n}={...(0,i.M)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(m,{...e})}):m(e)}},73624:(e,n,t)=>{t.d(n,{c:()=>l,k:()=>r});var s=t(22016),i=t(64992),o=(t(80924),t(76776));const r=()=>(0,o.jsx)(i.s1,{_label:(0,s.G)({id:"custom.component-library-for-the-accessibility",message:"Komponentenbibliothek f\xfcr die Barrierefreiheit"}),children:"KoliBri"}),l=r},68324:(e,n,t)=>{t.d(n,{qs:()=>l});var s=t(80924),i=t(22438),o=t(76776);let r;const l=e=>{let{code:n,config:t}=e;return(0,s.useEffect)((()=>{(e=>{e&&i.N.initialize(Object.assign({startOnLoad:!0},e)),clearTimeout(r),r=setTimeout((()=>{clearTimeout(r),i.N.contentLoaded()}),500)})(t)}),[]),(0,o.jsx)("div",{children:(0,o.jsx)("div",{className:"mermaid",children:n})})}}}]);