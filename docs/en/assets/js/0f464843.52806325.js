"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[84936],{63052:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>d,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var n=t(2488),r=t(16592),a=t(57920);const i={},o="Frameworks",l={id:"get-started/frameworks",title:"Frameworks",description:"KoliBri can be used to implement web-based user interfaces.",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-1.5/10-get-started/5-frameworks.mdx",sourceDirName:"10-get-started",slug:"/get-started/frameworks",permalink:"/en/docs/1.5/get-started/frameworks",draft:!1,unlisted:!1,tags:[],version:"1.5",sidebarPosition:5,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"First steps",permalink:"/en/docs/1.5/get-started/first-steps"},next:{title:"Playground",permalink:"/en/docs/1.5/get-started/playground"}},d={},c=[{value:"Installation",id:"installation",level:2},{value:"Integration variants",id:"integration-variants",level:2},{value:"Client-Side frameworks",id:"client-side-frameworks",level:3},{value:"Server-Side-Frameworks",id:"server-side-frameworks",level:3},{value:"Aktuelle Trends",id:"aktuelle-trends",level:2}];function h(e){const s={h1:"h1",h2:"h2",h3:"h3",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.M)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h1,{id:"frameworks",children:"Frameworks"}),"\n",(0,n.jsx)("kol-alert",{_type:"success",children:(0,n.jsxs)(s.p,{children:[(0,n.jsx)("b",{children:"KoliBri"})," can be used to implement web-based user interfaces."]})}),"\n",(0,n.jsx)(s.h2,{id:"installation",children:"Installation"}),"\n",(0,n.jsxs)(s.p,{children:["All packages/artifacts of KoliBri are provided versioned in the public ",(0,n.jsx)("kol-link",{_href:"https://www.npmjs.com/search?q=%40public-ui",_target:"npmjs",children:"NPM-Registry"}),"."]}),"\n",(0,n.jsx)(a.Y9,{_caption:"Packages overview",_headers:{horizontal:[[{label:"Package",key:"name"},{label:"Description",key:"desc"}]]},_data:[{name:"create-kolibri",desc:"CLI to create new project based on KoliBri."},{name:"@public-ui/components",desc:"Includes the accessible Web Components without styling."},{name:"@public-ui/core",desc:"Contains central functionalities for a component library."},{name:"@public-ui/schema",desc:"Contains the scheme for the KoliBri base components."},{name:"@public-ui/themes",desc:"Includes numerous themes for the KoliBri base components."},{name:"@public-ui/react",desc:"Adapter for the React framework."},{name:"@public-ui/solid",desc:"Adapter for the Solid framework."},{name:"@public-ui/angular-v17",desc:"Adapter f\xfcr das Framework Angular v17."},{name:"@public-ui/angular-v16",desc:"Adapter f\xfcr das Framework Angular v16."},{name:"@public-ui/angular-v15",desc:"Adapter for the Angular v15 framework."},{name:"@public-ui/angular-v14",desc:"Adapter for the Angular v14 framework."},{name:"@public-ui/angular-v13",desc:"Adapter for the Angular v13 framework."},{name:"@public-ui/angular-v12",desc:"Adapter for the Angular v12 framework."},{name:"@public-ui/angular-v11",desc:"Adapter for the Angular v11 framework."},{name:"@public-ui/preact",desc:"Adapter for the Preact framework."},{name:"@public-ui/vue",desc:"Adapter for the Vue framework."},{name:"@public-ui/hydrate",desc:"Contains functions to generate HTML strings of the components (SSR)."},{name:"<s>@public-ui/angular</s>",desc:"This package is deprecated because Angular requires version-specific adapters."}]}),"\n",(0,n.jsx)(s.h2,{id:"integration-variants",children:"Integration variants"}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)("b",{children:"KoliBri"})," is currently offered in the following variants:"]}),"\n",(0,n.jsx)(s.h3,{id:"client-side-frameworks",children:"Client-Side frameworks"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Static websites"}),(0,n.jsx)(s.th,{children:"Dynamic web applications"})]})}),(0,n.jsx)(s.tbody,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Technically, Web Components, such as those included in KoliBri, are universally reusable, as is standard HTML."}),(0,n.jsx)(s.td,{children:"For implementation of dynamic web applications there are a number of frameworks for which KoliBri can be reused. Depending on the framework, the deployment of KoliBri is different. Particularly well suited are JSX/TSX based frameworks, such as React or Solid, since here the maximum possibilities of type support and autocompletion are possible. In contrast, frameworks with their own template languages, such as Angular, Vue or Svelte, the development support can be differently easily implemented."})]})})]}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Framework"}),(0,n.jsx)(s.th,{})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)("img",{src:"/assets/webcomponent.png",width:"150",alt:"Web Component logo"})}),(0,n.jsxs)(s.td,{children:[(0,n.jsx)("b",{children:"Web Components"}),(0,n.jsx)("br",{}),"All components of ",(0,n.jsx)("b",{children:"KoliBri"})," are implemented according to the Web Components Standard. Thus, the components can usually be reused in all modern projects. ",(0,n.jsx)("kol-alert",{_type:"info",children:"KoliBri can be integrated like jQuery and is therefore also interesting for server-side rendering, such as PHP or JSF."})]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)("img",{src:"/assets/react.png",width:"150",alt:"React logo"})}),(0,n.jsxs)(s.td,{children:[(0,n.jsx)("b",{children:"React-Components"})," (",(0,n.jsx)("kol-icon",{"_aira-label":"",_icons:"icofont-star"})," recommended)",(0,n.jsx)("br",{}),"As an alternative to the pure Web Components, we offer an adapter for ",(0,n.jsx)(s.strong,{children:"React"}),". This ensures that the Web Component integrates as seamlessly and fully typed as possible into the development."]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)("img",{src:"/assets/solid.png",width:"150",alt:"Solid logo"})}),(0,n.jsxs)(s.td,{children:[(0,n.jsx)("b",{children:"Solid-Components"}),(0,n.jsx)("br",{}),"As an alternative to the pure Web Components, we offer an adapter for ",(0,n.jsx)(s.strong,{children:"Solid"}),". This ensures that the Web Component integrates as seamlessly and fully typed as possible into the development."]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)("img",{src:"/assets/angular.png",width:"150",alt:"Angular logo"})}),(0,n.jsxs)(s.td,{children:[(0,n.jsx)("b",{children:"Angular-Components"})," (>= 11)",(0,n.jsx)("br",{}),"As an alternative to the pure Web Components, we offer an adapter for ",(0,n.jsx)(s.strong,{children:"Angular"}),". This ensures that the Web Component integrates as seamlessly and fully typed as possible into the development."]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)("img",{src:"/assets/vue.png",width:"150",alt:"Vue logo"})}),(0,n.jsxs)(s.td,{children:[(0,n.jsx)("b",{children:"Vue-Components"})," ",(0,n.jsx)("br",{}),"Alternativ zu den reinen Web Componenten bieten wir einen Adapter f\xfcr ",(0,n.jsx)(s.strong,{children:"Vue"})," an. Es wird so sichergestellt, dass sich die Web Component m\xf6glichst nahtlos und voll typisiert in die Entwicklung integriert."]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)("img",{src:"/assets/preact.png",width:"150",alt:"Preact logo"})}),(0,n.jsxs)(s.td,{children:[(0,n.jsx)("b",{children:"Preact-Components"})," (experimental)",(0,n.jsx)("br",{}),"As an alternative to the pure Web Components, we offer an adapter for ",(0,n.jsx)(s.strong,{children:"Preact"}),". This ensures that the Web Component integrates as seamlessly and fully typed as possible into the development."]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)("img",{src:"/assets/svelte.png",width:"150",alt:"Svelte logo"})}),(0,n.jsxs)(s.td,{children:[(0,n.jsx)("b",{children:"Svelte-Components"})," (open)",(0,n.jsx)("br",{}),"As an alternative to the pure Web Components, we offer an adapter for ",(0,n.jsx)(s.strong,{children:"Svelte"}),". This ensures that the Web Component integrates as seamlessly and fully typed as possible into the development."]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)("img",{src:"/assets/ember.png",width:"150",alt:"Ember logo"})}),(0,n.jsxs)(s.td,{children:[(0,n.jsx)("b",{children:"Ember-Components"})," (open)",(0,n.jsx)("br",{}),"As an alternative to the pure Web Components, we offer an adapter for ",(0,n.jsx)(s.strong,{children:"Ember"}),". This ensures that the Web Component integrates as seamlessly and fully typed as possible into the development."]})]})]})]}),"\n",(0,n.jsx)(s.h3,{id:"server-side-frameworks",children:"Server-Side-Frameworks"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Framework"}),(0,n.jsx)(s.th,{})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)("img",{src:"/assets/astro.png",width:"150",alt:"Astro logo"})}),(0,n.jsxs)(s.td,{children:["The integration is done using the ",(0,n.jsx)("b",{children:"React and Preact components"}),". The framework components are rendered server-side and the web components are rendered client-side."]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)("img",{src:"/assets/next.js.png",width:"150",alt:"Next.js logo"})}),(0,n.jsxs)(s.td,{children:["The integration is done through the ",(0,n.jsx)("b",{children:"React-Components"})," (CSR of the Web Components). The framework components are rendered on the server side and the Web Components on the client side."]})]})]})]}),"\n",(0,n.jsx)(s.h2,{id:"aktuelle-trends",children:"Aktuelle Trends"}),"\n",(0,n.jsx)("iframe",{src:"https://npmtrends.com/@angular/core-vs-next-vs-preact-vs-react-vs-vue-vs-astro-vs-svelte",style:{width:"100%",border:"0",height:"800px"}})]})}function p(e={}){const{wrapper:s}={...(0,r.M)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},16592:(e,s,t)=>{t.d(s,{I:()=>o,M:()=>i});var n=t(96651);const r={},a=n.createContext(r);function i(e){const s=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),n.createElement(a.Provider,{value:s},e.children)}}}]);