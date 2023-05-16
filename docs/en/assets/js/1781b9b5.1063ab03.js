"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[5247],{17942:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var o=n(50959);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=o.createContext({}),s=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=s(e.components);return o.createElement(c.Provider,{value:t},e.children)},h="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},f=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),h=s(n),f=i,u=h["".concat(c,".").concat(f)]||h[f]||m[f]||a;return n?o.createElement(u,r(r({ref:t},p),{},{components:n})):o.createElement(u,r({ref:t},p))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,r=new Array(a);r[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[h]="string"==typeof e?e:i,r[1]=l;for(var s=2;s<a;s++)r[s]=n[s];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}f.displayName="MDXCreateElement"},69763:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var o=n(15882),i=(n(50959),n(17942));const a={authors:"deleonio",tags:["theming","icon","font"]},r="How can I change icons in the theme?",l={permalink:"/en/blog/2023/05/12/",source:"@site/i18n/en/docusaurus-plugin-content-blog/2023-05-12.mdx",title:"How can I change icons in the theme?",description:"Today we want to show in a short blog post how you can change the default icons via the theming (Theme Designer).",date:"2023-05-12T00:00:00.000Z",formattedDate:"May 12, 2023",tags:[{label:"theming",permalink:"/en/blog/tags/theming"},{label:"icon",permalink:"/en/blog/tags/icon"},{label:"font",permalink:"/en/blog/tags/font"}],readingTime:2.07,hasTruncateMarker:!1,authors:[{name:"Martin Oppitz",title:"Architekt@ITZBund & Creator of KoliBri",url:"https://github.com/deleonio",imageURL:"https://avatars.githubusercontent.com/u/6279703",key:"deleonio"}],frontMatter:{authors:"deleonio",tags:["theming","icon","font"]},nextItem:{title:"Ank\xfcndigung Release 1.5",permalink:"/en/blog/2023/05/03/"}},c={authorsImageUrls:[void 0]},s=[{value:"1. Integrate icon font",id:"1-integrate-icon-font",level:2},{value:"Store icon font in the theme",id:"store-icon-font-in-the-theme",level:2},{value:"Change default icons in theme",id:"change-default-icons-in-theme",level:2},{value:"Why can&#39;t I change the font size?",id:"why-cant-i-change-the-font-size",level:3}],p={toc:s},h="wrapper";function m(e){let{components:t,...n}=e;return(0,i.kt)(h,(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Today we want to show in a short blog post how you can change the default icons via the theming (Theme Designer)."),(0,i.kt)("h2",{id:"1-integrate-icon-font"},"1. Integrate icon font"),(0,i.kt)("p",null,"In order for icons to be displayed, the desired icon font (e.g. Font Awesome Free) must first be integrated into the website (HTML). This is usually done using the following HTML:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<head>\n    <link rel="stylesheet" href="assets/fontawesome-free/css/all.min.css" />\n</head>\n')),(0,i.kt)("h2",{id:"store-icon-font-in-the-theme"},"Store icon font in the theme"),(0,i.kt)("p",null,"The KoliBri icon component encapsulates the icon font and therefore needs to know the CSS definitions of the icon identifiers selected in the design system.\nTo do this, the CSS must be copied from the same CSS file as from 1. into the theme and stored with it."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Open Theme Designer"),(0,i.kt)("li",{parentName:"ol"},"Select theme"),(0,i.kt)("li",{parentName:"ol"},"Select icon component"),(0,i.kt)("li",{parentName:"ol"},"Switch to component styling"),(0,i.kt)("li",{parentName:"ol"},"Paste CSS from icon font and save"),(0,i.kt)("li",{parentName:"ol"},"Apply theme to project")),(0,i.kt)("h2",{id:"change-default-icons-in-theme"},"Change default icons in theme"),(0,i.kt)("p",null,"Changing an icon is easy if the following principle is clear. All icons are represented by the web component ",(0,i.kt)("inlineCode",{parentName:"p"},"kol-icon"),". This component\nalways exports the ",(0,i.kt)("inlineCode",{parentName:"p"},"icon")," part. A part provides access to specified CSS properties within a web component. See that as an example\nlike this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-css"},"kol-icon::part(icon) {\n    font-family: 'Font Awesome 6 Free';\n    font-weight: 900;\n}\nkol-icon::part(icon):before {\n    content: '\ud83d\ude03';\n}\n")),(0,i.kt)("p",null,"In order to change an icon via the designer, the following steps have to be carried out:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Open Theme Designer"),(0,i.kt)("li",{parentName:"ol"},"Select theme"),(0,i.kt)("li",{parentName:"ol"},"Select component where an icon should be changed"),(0,i.kt)("li",{parentName:"ol"},"Switch to component styling"),(0,i.kt)("li",{parentName:"ol"},"Determine specific selector on an icon"),(0,i.kt)("li",{parentName:"ol"},"Use specific selector to customize font and content"),(0,i.kt)("li",{parentName:"ol"},"Save Component CSS"),(0,i.kt)("li",{parentName:"ol"},"Apply theme to project")),(0,i.kt)("p",null,"Here is a more complex example of pagination:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-css"},"kol-button::part(icon) {\n    font-family: 'Font Awesome 6 Free';\n    font-weight: 900;\n}\nkol-button.first::part(icon):before,\nkol-button.previous::part(icon):before,\nkol-button.next::part(icon):before,\nkol-button.last::part(icon):before {\n    content: '\ud83d\ude03';\n}\n")),(0,i.kt)("p",null,"##FAQ"),(0,i.kt)("h3",{id:"why-cant-i-change-the-font-size"},"Why can't I change the font size?"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-css"},"kol-icon::part(icon) {\n    font-family: 'Font Awesome 6 Free';\n    font-size: 2rem !important;\n    font-weight: 900;\n}\n")),(0,i.kt)("p",null,"The reason lies in the ",(0,i.kt)("inlineCode",{parentName:"p"},"font")," CSS definition in the icon font itself and in the need to set the font size\napply (inherit) when setting icons from outside."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-css"},".codicon[class*='codicon-'] {\n    font: 16px / 1 codicon;\n}\n:host > i,\n:host > i::before {\n    font-size: inherit !important;\n}\n")),(0,i.kt)("p",null,"If you want to adjust the size of an icon, you can do this from the outside."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-css"},"kol-icon {\n    font-size: 2rem;\n}\n")))}m.isMDXComponent=!0}}]);