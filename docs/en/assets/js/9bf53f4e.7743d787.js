"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[81258],{41250:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>l,default:()=>u,frontMatter:()=>c,metadata:()=>r,toc:()=>d});var s=n(11527),o=n(16034),i=n(65636);const c={authors:"deleonio",tags:["theming","styling","button"]},l="How can I add a custom button type?",r={permalink:"/en/blog/2023/06/05/",source:"@site/i18n/en/docusaurus-plugin-content-blog/2023-06-05.mdx",title:"How can I add a custom button type?",description:"Basically, each component can be freely styled within its HTML structure.",date:"2023-06-05T00:00:00.000Z",formattedDate:"June 5, 2023",tags:[{label:"theming",permalink:"/en/blog/tags/theming"},{label:"styling",permalink:"/en/blog/tags/styling"},{label:"button",permalink:"/en/blog/tags/button"}],readingTime:1.94,hasTruncateMarker:!1,authors:[{name:"Martin Oppitz",title:"Architekt@ITZBund & Creator of KoliBri",url:"https://github.com/deleonio",imageURL:"https://avatars.githubusercontent.com/u/6279703",key:"deleonio"}],frontMatter:{authors:"deleonio",tags:["theming","styling","button"]},unlisted:!1,prevItem:{title:"Ank\xfcndigung Release 1.6",permalink:"/en/blog/2023/06/08/"},nextItem:{title:"How can I change icons in the theme?",permalink:"/en/blog/2023/05/12/"}},a={authorsImageUrls:[void 0]},d=[{value:"Button and custom class",id:"button-and-custom-class",level:2},{value:"Store custom class in the theme",id:"store-custom-class-in-the-theme",level:3},{value:"Use custom class",id:"use-custom-class",level:3},{value:"Style the icon in the button from the outside",id:"style-the-icon-in-the-button-from-the-outside",level:2}];function h(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:"Basically, each component can be freely styled within its HTML structure."}),"\n",(0,s.jsx)(t.p,{children:"With the help of our designer or the SCSS script, existing themes can be adapted or your own themes can be created."}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"/en/docs/concepts/styling/designer",children:"Designer"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"/en/docs/concepts/styling/scss",children:"SCSS-Script"})}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"button-and-custom-class",children:"Button and custom class"}),"\n",(0,s.jsx)(t.p,{children:"The button/switch has 5 types derived from the design language of the design systems:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"primary: switch for main action (e.g. save)"}),"\n",(0,s.jsx)(t.li,{children:"secondary: switch for secondary action (e.g. cancel)"}),"\n",(0,s.jsx)(t.li,{children:"normal/tertiary: switch for tertiary action (e.g. back)"}),"\n",(0,s.jsx)(t.li,{children:'danger: switch for "dangerous" actions (e.g. delete)'}),"\n",(0,s.jsx)(t.li,{children:'ghost: switch for "inconspicuous" actions (e.g. help)'}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"In addition to these basic types, other types can be added using a custom class.\nTo do this, however, all custom classes must be stored in the CSS of the theme."}),"\n",(0,s.jsx)("kol-details",{_summary:"Why?",_open:!0,children:(0,s.jsx)(t.p,{children:"In the implementation, a coordinated design system /design language should not be arbitrarily changed or expanded. All\ndefined custom buttons will be already provided when the theme was created and their use is described in the\ndocumentation of your own design system."})}),"\n",(0,s.jsx)(t.h3,{id:"store-custom-class-in-the-theme",children:"Store custom class in the theme"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsx)(t.li,{children:"Open Theme Designer"}),"\n",(0,s.jsx)(t.li,{children:"Select theme"}),"\n",(0,s.jsx)(t.li,{children:"Select Button component"}),"\n",(0,s.jsx)(t.li,{children:"Switch to component styling"}),"\n",(0,s.jsxs)(t.li,{children:["Enter and save CSS for the custom button (look at ",(0,s.jsx)(t.code,{children:"primary"}),")"]}),"\n",(0,s.jsx)(t.li,{children:"Theme in project \xfcbernehmen"}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["Example of custom class ",(0,s.jsx)(t.code,{children:"loading"}),":"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-css",children:".loading :is(a, button) > kol-span-wc kol-icon {\n\tanimation: spin 2.5s infinite linear;\n\tdisplay: block;\n}\n/* https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion#toning_down_the_animation_scaling */\n@media (prefers-reduced-motion) {\n\t.loading :is(a, button) > kol-span-wc kol-icon {\n\t\tanimation-duration: 5s;\n\t}\n}\n@keyframes spin {\n\tfrom {\n\t\ttransform: rotate(0deg);\n\t}\n\tto {\n\t\ttransform: rotate(360deg);\n\t}\n}\n"})}),"\n",(0,s.jsx)(t.h3,{id:"use-custom-class",children:"Use custom class"}),"\n",(0,s.jsxs)(t.p,{children:["To switch to custom mode, the property ",(0,s.jsx)(t.code,{children:"_variant"})," must be set to ",(0,s.jsx)(t.code,{children:"custom"}),". Thereafter\nany predefined custom classes can be passed via the property ",(0,s.jsx)(t.code,{children:"_custom-class"}),"."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-html",children:'<kol-button _custom-class="loading" _label="Save" variant="custom"></kol-button>\n'})}),"\n",(0,s.jsx)(t.h2,{id:"style-the-icon-in-the-button-from-the-outside",children:"Style the icon in the button from the outside"}),"\n",(0,s.jsxs)(t.p,{children:["It is possible to transfer an icon style to the button. To do this, the desired style must be passed to the property ",(0,s.jsx)(t.code,{children:"_icon"}),"."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-tsx",children:"<KolButton\n\t_icons={{\n\t\tleft: {\n\t\t\ticon: 'codicon codicon-home',\n\t\t\tstyle: {\n\t\t\t\tcolor: 'red',\n\t\t\t\t'font-size': '300%',\n\t\t\t},\n\t\t},\n\t}}\n\t_label=\"Switch with big red icon\"\n></KolButton>\n"})}),"\n",(0,s.jsx)(i.ic,{_icons:{left:{icon:"codicon codicon-home",style:{color:"red","font-size":"300%"}}},_label:"Switch with big red icon"})]})}function u(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},16034:(e,t,n)=>{n.d(t,{Z:()=>l,a:()=>c});var s=n(50959);const o={},i=s.createContext(o);function c(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);