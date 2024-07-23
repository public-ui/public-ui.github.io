"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[93464],{17565:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>h,contentTitle:()=>c,default:()=>d,frontMatter:()=>s,metadata:()=>l,toc:()=>a});var o=t(76776),i=t(108);const s={authors:"deleonio",tags:["theming","icon","font"]},c="How can I change icons in the theme?",l={permalink:"/en/blog/2023/05/12/",source:"@site/i18n/en/docusaurus-plugin-content-blog/2023-05-12.mdx",title:"How can I change icons in the theme?",description:"Today we want to show in a short blog post how you can change the default icons via the theming (Theme Designer).",date:"2023-05-12T00:00:00.000Z",tags:[{inline:!0,label:"theming",permalink:"/en/blog/tags/theming"},{inline:!0,label:"icon",permalink:"/en/blog/tags/icon"},{inline:!0,label:"font",permalink:"/en/blog/tags/font"}],readingTime:2.28,hasTruncateMarker:!1,authors:[{name:"Martin Oppitz",title:"Architekt@ITZBund & Creator of KoliBri",url:"https://github.com/deleonio",imageURL:"https://avatars.githubusercontent.com/u/6279703",key:"deleonio"}],frontMatter:{authors:"deleonio",tags:["theming","icon","font"]},unlisted:!1,prevItem:{title:"How can I add a custom button type?",permalink:"/en/blog/2023/06/05/"},nextItem:{title:"Announcement Release 1.5",permalink:"/en/blog/2023/05/03/"}},h={authorsImageUrls:[void 0]},a=[{value:"1. Integrate icon font",id:"1-integrate-icon-font",level:2},{value:"Store icon font in the theme",id:"store-icon-font-in-the-theme",level:2},{value:"Change default icons in theme",id:"change-default-icons-in-theme",level:2},{value:"FAQ",id:"faq",level:2},{value:"Why is the icon hanging a bit lower in the KolIcon?",id:"why-is-the-icon-hanging-a-bit-lower-in-the-kolicon",level:3},{value:"Why can&#39;t I change the font size?",id:"why-cant-i-change-the-font-size",level:3}];function r(e){const n={code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",...(0,i.M)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:"Today we want to show in a short blog post how you can change the default icons via the theming (Theme Designer)."}),"\n",(0,o.jsx)(n.h2,{id:"1-integrate-icon-font",children:"1. Integrate icon font"}),"\n",(0,o.jsx)(n.p,{children:"In order for icons to be displayed, the desired icon font (e.g. Font Awesome Free) must first be integrated into the website (HTML). This is usually done using the following HTML:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-html",children:'<head>\n\t<link rel="stylesheet" href="assets/fontawesome-free/css/all.min.css">\n</head>\n'})}),"\n",(0,o.jsx)(n.h2,{id:"store-icon-font-in-the-theme",children:"Store icon font in the theme"}),"\n",(0,o.jsx)(n.p,{children:"The KoliBri icon component encapsulates the icon font and therefore needs to know the CSS definitions of the icon identifiers selected in the design system.\nTo do this, the CSS must be copied from the same CSS file as from 1. into the theme and stored with it."}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsx)(n.li,{children:"Open Theme Designer"}),"\n",(0,o.jsx)(n.li,{children:"Select theme"}),"\n",(0,o.jsx)(n.li,{children:"Select icon component"}),"\n",(0,o.jsx)(n.li,{children:"Switch to component styling"}),"\n",(0,o.jsx)(n.li,{children:"Paste CSS from icon font and save"}),"\n",(0,o.jsx)(n.li,{children:"Apply theme to project"}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"change-default-icons-in-theme",children:"Change default icons in theme"}),"\n",(0,o.jsxs)(n.p,{children:["Changing an icon is easy if the following principle is clear. All icons are represented by the web component ",(0,o.jsx)(n.code,{children:"kol-icon"}),". This component\nalways exports the ",(0,o.jsx)(n.code,{children:"icon"})," part. A part provides access to specified CSS properties within a web component. See that as an example\nlike this:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-css",children:"kol-icon::part(icon) {\n\tfont-family: 'Font Awesome 6 Free';\n\tfont-weight: 900;\n}\nkol-icon::part(icon):before {\n\tcontent: '\ud83d\ude03';\n}\n"})}),"\n",(0,o.jsx)(n.p,{children:"In order to change an icon via the designer, the following steps have to be carried out:"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsx)(n.li,{children:"Open Theme Designer"}),"\n",(0,o.jsx)(n.li,{children:"Select theme"}),"\n",(0,o.jsx)(n.li,{children:"Select component where an icon should be changed"}),"\n",(0,o.jsx)(n.li,{children:"Switch to component styling"}),"\n",(0,o.jsx)(n.li,{children:"Determine specific selector on an icon"}),"\n",(0,o.jsx)(n.li,{children:"Use specific selector to customize font and content"}),"\n",(0,o.jsx)(n.li,{children:"Save Component CSS"}),"\n",(0,o.jsx)(n.li,{children:"Apply theme to project"}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"Here is a more complex example of pagination:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-css",children:"kol-button::part(icon) {\n\tfont-family: 'Font Awesome 6 Free';\n\tfont-weight: 900;\n}\nkol-button.first::part(icon):before,\nkol-button.previous::part(icon):before,\nkol-button.next::part(icon):before,\nkol-button.last::part(icon):before {\n\tcontent: '\ud83d\ude03';\n}\n"})}),"\n",(0,o.jsx)(n.h2,{id:"faq",children:"FAQ"}),"\n",(0,o.jsx)(n.h3,{id:"why-is-the-icon-hanging-a-bit-lower-in-the-kolicon",children:"Why is the icon hanging a bit lower in the KolIcon?"}),"\n",(0,o.jsxs)(n.p,{children:["With the CSS definition ",(0,o.jsx)(n.code,{children:"display:contents;"})," on the kol-icon tag, the icon is properly aligned. The alignment of the icon component within other components always depends on the specific use."]}),"\n",(0,o.jsx)(n.h3,{id:"why-cant-i-change-the-font-size",children:"Why can't I change the font size?"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-css",children:"kol-icon::part(icon) {\n\tfont-family: 'Font Awesome 6 Free';\n\tfont-size: 2rem !important;\n\tfont-weight: 900;\n}\n"})}),"\n",(0,o.jsxs)(n.p,{children:["The reason lies in the ",(0,o.jsx)(n.code,{children:"font"})," CSS definition in the icon font itself and in the need to set the font size\napply (inherit) when setting icons from outside."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-css",children:".codicon[class*='codicon-'] {\n\tfont: 16px / 1 codicon;\n}\n:host > i,\n:host > i::before {\n\tfont-size: inherit !important;\n}\n"})}),"\n",(0,o.jsx)(n.p,{children:"If you want to adjust the size of an icon, you can do this from the outside."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-css",children:"kol-icon {\n\tfont-size: 2rem;\n}\n"})})]})}function d(e={}){const{wrapper:n}={...(0,i.M)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(r,{...e})}):r(e)}},108:(e,n,t)=>{t.d(n,{I:()=>l,M:()=>c});var o=t(80924);const i={},s=o.createContext(i);function c(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);