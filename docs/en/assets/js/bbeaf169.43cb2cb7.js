"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[3200],{17942:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var o=n(50959);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,h=m["".concat(s,".").concat(d)]||m[d]||p[d]||r;return n?o.createElement(h,i(i({ref:t},u),{},{components:n})):o.createElement(h,i({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<r;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},56688:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var o=n(15882),a=(n(50959),n(17942)),r=n(98599);const i={authors:"deleonio",tags:["theming","styling","button"]},l="How can I add a custom button type?",s={permalink:"/en/blog/2023/06/05/",source:"@site/i18n/en/docusaurus-plugin-content-blog/2023-06-05.mdx",title:"How can I add a custom button type?",description:"Basically, each component can be freely styled within its HTML structure.",date:"2023-06-05T00:00:00.000Z",formattedDate:"June 5, 2023",tags:[{label:"theming",permalink:"/en/blog/tags/theming"},{label:"styling",permalink:"/en/blog/tags/styling"},{label:"button",permalink:"/en/blog/tags/button"}],readingTime:1.94,hasTruncateMarker:!1,authors:[{name:"Martin Oppitz",title:"Architekt@ITZBund & Creator of KoliBri",url:"https://github.com/deleonio",imageURL:"https://avatars.githubusercontent.com/u/6279703",key:"deleonio"}],frontMatter:{authors:"deleonio",tags:["theming","styling","button"]},prevItem:{title:"Ank\xfcndigung Release 1.6",permalink:"/en/blog/2023/06/08/"},nextItem:{title:"How can I change icons in the theme?",permalink:"/en/blog/2023/05/12/"}},c={authorsImageUrls:[void 0]},u=[{value:"Button and custom class",id:"button-and-custom-class",level:2},{value:"Store custom class in the theme",id:"store-custom-class-in-the-theme",level:3},{value:"Use custom class",id:"use-custom-class",level:3},{value:"Style the icon in the button from the outside",id:"style-the-icon-in-the-button-from-the-outside",level:2}],m={toc:u},p="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,o.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Basically, each component can be freely styled within its HTML structure."),(0,a.kt)("p",null,"With the help of our designer or the SCSS script, existing themes can be adapted or your own themes can be created."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/en/docs/concepts/styling/designer"},"Designer")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/en/docs/concepts/styling/scss"},"SCSS-Script"))),(0,a.kt)("h2",{id:"button-and-custom-class"},"Button and custom class"),(0,a.kt)("p",null,"The button/switch has 5 types derived from the design language of the design systems:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"primary: switch for main action (e.g. save)"),(0,a.kt)("li",{parentName:"ul"},"secondary: switch for secondary action (e.g. cancel)"),(0,a.kt)("li",{parentName:"ul"},"normal/tertiary: switch for tertiary action (e.g. back)"),(0,a.kt)("li",{parentName:"ul"},'danger: switch for "dangerous" actions (e.g. delete)'),(0,a.kt)("li",{parentName:"ul"},'ghost: switch for "inconspicuous" actions (e.g. help)')),(0,a.kt)("p",null,"In addition to these basic types, other types can be added using a custom class.\nTo do this, however, all custom classes must be stored in the CSS of the theme."),(0,a.kt)("kol-details",{_summary:"Why?",_open:!0},"In the implementation, a coordinated design system /design language should not be arbitrarily changed or expanded. All defined custom buttons will be already provided when the theme was created and their use is described in the documentation of your own design system."),(0,a.kt)("h3",{id:"store-custom-class-in-the-theme"},"Store custom class in the theme"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Open Theme Designer"),(0,a.kt)("li",{parentName:"ol"},"Select theme"),(0,a.kt)("li",{parentName:"ol"},"Select Button component"),(0,a.kt)("li",{parentName:"ol"},"Switch to component styling"),(0,a.kt)("li",{parentName:"ol"},"Enter and save CSS for the custom button (look at ",(0,a.kt)("inlineCode",{parentName:"li"},"primary"),")"),(0,a.kt)("li",{parentName:"ol"},"Theme in project \xfcbernehmen")),(0,a.kt)("p",null,"Example of custom class ",(0,a.kt)("inlineCode",{parentName:"p"},"loading"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-css"},".loading :is(a, button) > kol-span-wc kol-icon {\n    animation: spin 2.5s infinite linear;\n    display: block;\n}\n/* https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion#toning_down_the_animation_scaling */\n@media (prefers-reduced-motion) {\n    .loading :is(a, button) > kol-span-wc kol-icon {\n        animation-duration: 5s;\n    }\n}\n@keyframes spin {\n    from {\n        transform: rotate(0deg);\n    }\n    to {\n        transform: rotate(360deg);\n    }\n}\n")),(0,a.kt)("h3",{id:"use-custom-class"},"Use custom class"),(0,a.kt)("p",null,"To switch to custom mode, the property ",(0,a.kt)("inlineCode",{parentName:"p"},"_variant")," must be set to ",(0,a.kt)("inlineCode",{parentName:"p"},"custom"),". Thereafter\nany predefined custom classes can be passed via the property ",(0,a.kt)("inlineCode",{parentName:"p"},"_custom-class"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<kol-button _custom-class="loading" _label="Save" variant="custom"></kol-button>\n')),(0,a.kt)("h2",{id:"style-the-icon-in-the-button-from-the-outside"},"Style the icon in the button from the outside"),(0,a.kt)("p",null,"It is possible to transfer an icon style to the button. To do this, the desired style must be passed to the property ",(0,a.kt)("inlineCode",{parentName:"p"},"_icon"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"<KolButton\n    _icon={{\n        left: {\n            icon: 'codicon codicon-home',\n            style: {\n                color: 'red',\n                'font-size': '300%',\n            },\n        },\n    }}\n    _label=\"Switch with big red icon\"\n></KolButton>\n")),(0,a.kt)(r.ic,{_icon:{left:{icon:"codicon codicon-home",style:{color:"red","font-size":"300%"}}},_label:"Switch with big red icon",mdxType:"KolButton"}))}d.isMDXComponent=!0}}]);