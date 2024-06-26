"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[75092],{26800:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var i=t(76776),l=t(108);const s={},r="First steps",o={id:"get-started/first-steps",title:"First steps",description:"Click here to view and download the cheat sheet for developing.",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-1.6/10-get-started/1-first-steps.mdx",sourceDirName:"10-get-started",slug:"/get-started/first-steps",permalink:"/en/docs/1.6/get-started/first-steps",draft:!1,unlisted:!1,tags:[],version:"1.6",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"FAQ",permalink:"/en/docs/1.6/faq"},next:{title:"Frameworks",permalink:"/en/docs/1.6/get-started/frameworks"}},a={},c=[{value:"Create a new project",id:"create-a-new-project",level:2},{value:"Integration into existing projects",id:"integration-into-existing-projects",level:2},{value:"Embedding fonts",id:"embedding-fonts",level:3},{value:"Typescript",id:"typescript",level:3},{value:"I Vite + React",id:"i-vite--react",level:3},{value:"1. Installing the KoliBri libraries",id:"1-installing-the-kolibri-libraries",level:4},{value:"2. Integration",id:"2-integration",level:4},{value:"3. Inclde modules",id:"3-inclde-modules",level:4},{value:"4. Example",id:"4-example",level:4},{value:"II Vite + Vue",id:"ii-vite--vue",level:3},{value:"1. Installing the KoliBri libraries",id:"1-installing-the-kolibri-libraries-1",level:4},{value:"2. Plugin",id:"2-plugin",level:4},{value:"3. module einbinden",id:"3-module-einbinden",level:4},{value:"4. Konfiguration anpassen",id:"4-konfiguration-anpassen",level:4},{value:"5. Beispiel",id:"5-beispiel",level:4},{value:"III React",id:"iii-react",level:3},{value:"1. Installing the KoliBri libraries",id:"1-installing-the-kolibri-libraries-2",level:4},{value:"2. Registrieren des KoliBri-Loaders",id:"2-registrieren-des-kolibri-loaders",level:4},{value:"3. Integration",id:"3-integration",level:4},{value:"4. Example",id:"4-example-1",level:4},{value:"IV without any framework",id:"iv-without-any-framework",level:3},{value:"V static website",id:"v-static-website",level:3},{value:"additional features",id:"additional-features",level:2},{value:"Developer Tools",id:"developer-tools",level:3},{value:"Experimental mode",id:"experimental-mode",level:3},{value:"Color contrast analysis",id:"color-contrast-analysis",level:3},{value:"3. Registering the component loaders",id:"3-registering-the-component-loaders",level:3},{value:"Variant A: Static project",id:"variant-a-static-project",level:4},{value:"Variant B: React project",id:"variant-b-react-project",level:4},{value:"Integration",id:"integration",level:5},{value:"Install adapter",id:"install-adapter",level:5},{value:"Use component",id:"use-component",level:5},{value:"Special features",id:"special-features",level:2},{value:"Developer tools",id:"developer-tools-1",level:3},{value:"Experimental mode / lab",id:"experimental-mode--lab",level:3},{value:"Color-Contrast-Analysis",id:"color-contrast-analysis-1",level:3}];function d(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,l.M)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"first-steps",children:"First steps"}),"\n",(0,i.jsx)("div",{class:"grid md:grid-cols-2 mb-4",children:(0,i.jsx)("kol-card",{_headline:"Download Cheat Sheet",_level:"2",children:(0,i.jsx)("kol-link",{slot:"content",_useCase:"nav",_href:"https://public-ui.github.io/cheat-sheet/",_target:"cheat-sheet",children:(0,i.jsxs)("div",{className:"d-flex gap-4 py-2",children:[(0,i.jsx)("kol-link",{className:"homepage",_icons:"codicon codicon-code"}),(0,i.jsx)("span",{children:"Click here to view and download the cheat sheet for developing."})]})})})}),"\n",(0,i.jsx)(n.h2,{id:"create-a-new-project",children:"Create a new project"}),"\n",(0,i.jsx)(n.p,{children:"A new project can be created quickly using the command line wizard."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"npm init kolibri@latest my-kolibri-app\n"})}),"\n",(0,i.jsx)("img",{src:"https://raw.githubusercontent.com/public-ui/.github/main/profile/create-kolibri.gif",alt:"Shows how to create a new app with create-kolibri."}),"\n",(0,i.jsx)(n.h2,{id:"integration-into-existing-projects",children:"Integration into existing projects"}),"\n",(0,i.jsx)(n.h3,{id:"embedding-fonts",children:"Embedding fonts"}),"\n",(0,i.jsx)(n.p,{children:"Fonts are loaded by nature detached from the CSS and must be included in the frame page (HTML file) depending on the KoliBri theme (style guide)."}),"\n",(0,i.jsx)(n.p,{children:"For this purpose, the fonts supplied in the library can be copied into your own assets."}),"\n",(0,i.jsx)(n.p,{children:"Please check which files You need and only import those to minimize traffic."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-html",children:'<!DOCTYPE html>\n<html lang="de" dir="ltr">\n\t<head>\n\t\t<title>Webapplication | KoliBri</title>\n\t\t<meta charset="UTF-8" />\n\t\t<meta name="description" content="..." />\n\t\t<base href="/" />\n\t\t<meta name="viewport" content="width=device-width, initial-scale=1" />\n\t\t<link rel="shortcut icon" type="image/x-icon" href="assets/kolibri.ico" />\n\t\t<link rel="stylesheet" href="assets/bundes/style.css" />\n\t\t<link rel="stylesheet" href="assets/codicons/codicon.css" />\n\t\t<link rel="stylesheet" href="assets/fontawesome-free/css/all.min.css" />\n\t\t<link rel="stylesheet" href="assets/icofont/icofont.min.css" />\n\t\t<link rel="stylesheet" href="assets/noto-sans/noto-sans.css" />\n\t\t<link rel="stylesheet" href="assets/kreon/style.css" />\n\t\t<link rel="stylesheet" href="assets/material-icons/iconfont/material-icons.css" />\n\t\t<link rel="stylesheet" href="assets/material-symbols/index.css" />\n\t\t<link rel="stylesheet" href="assets/roboto/roboto.css" />\n\t\t<link rel="stylesheet" href="assets/tabler-icons/tabler-icons.css" />\n\t</head>\n</html>\n'})}),"\n",(0,i.jsx)(n.h3,{id:"typescript",children:"Typescript"}),"\n",(0,i.jsxs)(n.p,{children:["To get full code completion, add these lines to ",(0,i.jsx)(n.code,{children:"tsconfig.json"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "compilerOptions": {\n\t\t...\n    "moduleResolution": "Node",\n\t\t...\n  },\n\t...\n}\n'})}),"\n",(0,i.jsx)(n.h3,{id:"i-vite--react",children:"I Vite + React"}),"\n",(0,i.jsx)(n.h4,{id:"1-installing-the-kolibri-libraries",children:"1. Installing the KoliBri libraries"}),"\n",(0,i.jsxs)("kol-tabs",{_headers:"['npm', 'pnpm', 'yarn']",_tabs:'[{"_label":"NPM"},{"_label":"PNPM"},{"_label":"YARN"}]',children:[(0,i.jsx)("div",{children:"npm i @public-ui/components @public-ui/themes @public-ui/react"}),(0,i.jsx)("div",{children:"pnpm i @public-ui/components @public-ui/themes @public-ui/react"}),(0,i.jsx)("div",{children:"yarn add @public-ui/components @public-ui/themes @public-ui/react"})]}),"\n",(0,i.jsx)(n.h4,{id:"2-integration",children:"2. Integration"}),"\n",(0,i.jsx)(n.p,{children:"main.tsx"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-diff",children:'import React from "react";\nimport ReactDOM from "react-dom/client";\nimport App from "./App.tsx";\nimport "./index.css";\n\n+import { register } from "@public-ui/components";\n+import { defineCustomElements } from "@public-ui/components/dist/loader";\n+import { DEFAULT } from "@public-ui/themes";\n\n+register(DEFAULT, defineCustomElements)\n+  .then(() => {\n    ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(\n      <React.StrictMode>\n        <App />\n      </React.StrictMode>\n    );\n+  })\n+  .catch(console.warn);\n'})}),"\n",(0,i.jsx)(n.h4,{id:"3-inclde-modules",children:"3. Inclde modules"}),"\n",(0,i.jsx)(n.p,{children:"index.html"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-diff",children:'<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <meta charset="UTF-8" />\n    <link rel="icon" type="image/svg+xml" href="/vite.svg" />\n    <meta name="viewport" content="width=device-width, initial-scale=1.0" />\n    <title>Vite + React + TS</title>\n+   <script type="module" src="/node_modules/@public-ui/components/dist/kolibri/kolibri.esm.js"><\/script>\n  </head>\n  <body>\n    <div id="root"></div>\n    <script type="module" src="/src/main.tsx"><\/script>\n  </body>\n</html>\n'})}),"\n",(0,i.jsx)(n.h4,{id:"4-example",children:"4. Example"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-tsx",children:"import React from 'react';\nimport { KolSpin } from '@public-ui/react';\n\nexport const AppComponent = () => {\n\treturn (\n\t\t<div>\n\t\t\t<KolSpin _show />\n\t\t</div>\n\t);\n};\n"})}),"\n",(0,i.jsx)(n.h3,{id:"ii-vite--vue",children:"II Vite + Vue"}),"\n",(0,i.jsx)(n.h4,{id:"1-installing-the-kolibri-libraries-1",children:"1. Installing the KoliBri libraries"}),"\n",(0,i.jsxs)("kol-tabs",{_headers:"['npm', 'pnpm', 'yarn']",_tabs:'[{"_label":"NPM"},{"_label":"PNPM"},{"_label":"YARN"}]',children:[(0,i.jsx)("div",{children:"npm i @public-ui/components @public-ui/themes @public-ui/vue"}),(0,i.jsx)("div",{children:"pnpm i @public-ui/components @public-ui/themes @public-ui/vue"}),(0,i.jsx)("div",{children:"yarn add @public-ui/components @public-ui/themes @public-ui/vue"})]}),"\n",(0,i.jsx)(n.h4,{id:"2-plugin",children:"2. Plugin"}),"\n",(0,i.jsx)(n.p,{children:"kolibri.plugin.ts"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"import type { Plugin } from 'vue';\nimport { defineCustomElements } from '@public-ui/components/dist/loader';\nimport { register } from '@public-ui/components';\nimport { ITZBund } from '@public-ui/themes';\nexport const ComponentLibrary: Plugin = {\n\tinstall() {\n\t\tregister(ITZBund, defineCustomElements)\n\t\t\t.then(() => console.log('Components registered'))\n\t\t\t.catch(console.warn);\n\t},\n};\n"})}),"\n",(0,i.jsx)(n.p,{children:"main.ts:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-diff",children:"import { createApp } from 'vue'\nimport App from './App.vue'\nimport './assets/main.css'\n+ import { ComponentLibrary } from './vue.plugin'\n\nconst app = createApp(App)\n\n+ app.use(ComponentLibrary)\n\napp.mount('#app')\n"})}),"\n",(0,i.jsx)(n.h4,{id:"3-module-einbinden",children:"3. module einbinden"}),"\n",(0,i.jsx)(n.p,{children:"index.html"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-diff",children:'<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <meta charset="UTF-8" />\n    <link rel="icon" href="/favicon.ico" />\n    <meta name="viewport" content="width=device-width, initial-scale=1.0" />\n+   <script type="module" src="/node_modules/@public-ui/components/dist/kolibri/kolibri.esm.js"><\/script>\n    <title>Vite + Vue + TS</title>\n  </head>\n  <body>\n    <div id="app"></div>\n    <script type="module" src="/src/main.ts"><\/script>\n  </body>\n</html>\n'})}),"\n",(0,i.jsx)(n.h4,{id:"4-konfiguration-anpassen",children:"4. Konfiguration anpassen"}),"\n",(0,i.jsx)(n.p,{children:"vite.config.ts"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-diff",children:"import { fileURLToPath, URL } from 'node:url'\n\nimport { defineConfig } from 'vite'\nimport vue from '@vitejs/plugin-vue'\n\n// https://vitejs.dev/config/\nexport default defineConfig({\n-  plugins: [],\n+  plugins: [\n+    vue({\n+      template: {\n+        compilerOptions: {\n+          // treat all tags with a dash as custom elements\n+          isCustomElement: (tag) => tag.includes('-')\n+        }\n+      }\n+    })\n+  ],\n  resolve: {\n    alias: {\n      '@': fileURLToPath(new URL('./src', import.meta.url))\n    }\n  }\n})\n"})}),"\n",(0,i.jsx)(n.h4,{id:"5-beispiel",children:"5. Beispiel"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-html",children:'<KolInputText :_value="text" :_on="{ onChange: (e: unknown, v: string) => (text = v) }"></KolInputText>\n<KolButton _label="Text l\xf6schen" :_on="{ onClick: () => (text = \'\') }"></KolButton>\n'})}),"\n",(0,i.jsx)(n.p,{children:"Hinweis: KoliBri-Inputs \xfcbergeben in der Regel das Ursprungsevent als ersten Parameter und den Wert des Feldes als Zweiten."}),"\n",(0,i.jsx)(n.h3,{id:"iii-react",children:"III React"}),"\n",(0,i.jsx)(n.h4,{id:"1-installing-the-kolibri-libraries-2",children:"1. Installing the KoliBri libraries"}),"\n",(0,i.jsxs)("kol-tabs",{_headers:"['npm', 'pnpm', 'yarn']",_tabs:'[{"_label":"NPM"},{"_label":"PNPM"},{"_label":"YARN"}]',children:[(0,i.jsx)("div",{children:"npm i @public-ui/components @public-ui/themes @public-ui/react"}),(0,i.jsx)("div",{children:"pnpm i @public-ui/components @public-ui/themes @public-ui/react"}),(0,i.jsx)("div",{children:"yarn add @public-ui/components @public-ui/themes @public-ui/react"})]}),"\n",(0,i.jsx)(n.h4,{id:"2-registrieren-des-kolibri-loaders",children:"2. Registrieren des KoliBri-Loaders"}),"\n",(0,i.jsx)(n.p,{children:"After the preparations are completed, only the KoliBri loader has to be registered.\nIt ensures that the Web Components are reloaded asynchronously (lazy) as soon as they are used in the web page."}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Method"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"register"}),(0,i.jsx)(n.td,{children:"Sets a theme and then registers the loader"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"DEFAULT"}),(0,i.jsx)(n.td,{children:"Registers the loader for e.g. the DEFAULT theme"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"defineCustomElements"}),(0,i.jsx)(n.td,{children:"Registers the Loader for the Web Components"})]})]})]}),"\n",(0,i.jsx)(n.h4,{id:"3-integration",children:"3. Integration"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-tsx",children:"import React from 'react';\nimport ReactDOM from 'react-dom';\n\nimport { AppComponent } from './components/app/component';\n\nimport { register } from '@public-ui/core';\nimport { defineCustomElements } from '@public-ui/components/dist/loader';\nimport { DEFAULT } from '@public-ui/themes';\n\nregister(DEFAULT, defineCustomElements)\n\t.then(() => {\n\t\tconst htmlDivElement: HTMLDivElement | null = document.querySelector<HTMLDivElement>('div#app');\n\t\tif (htmlDivElement instanceof HTMLDivElement) {\n\t\t\tconst root = createRoot(htmlDivElement);\n\t\t\troot.render(<AppComponent />);\n\t\t}\n\t})\n\t.catch(console.warn);\n"})}),"\n",(0,i.jsx)(n.h4,{id:"4-example-1",children:"4. Example"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-tsx",children:"import React from 'react';\nimport { KolSpin } from '@public-ui/react';\n\nexport const AppComponent = () => {\n\treturn (\n\t\t<div>\n\t\t\t<KolSpin _show />\n\t\t</div>\n\t);\n};\n"})}),"\n",(0,i.jsx)(n.h3,{id:"iv-without-any-framework",children:"IV without any framework"}),"\n",(0,i.jsxs)("kol-tabs",{_headers:"['npm', 'pnpm', 'yarn']",_tabs:'[{"_label":"NPM"},{"_label":"PNPM"},{"_label":"YARN"}]',children:[(0,i.jsx)("div",{children:"npm i @public-ui/components @public-ui/themes"}),(0,i.jsx)("div",{children:"pnpm i @public-ui/components @public-ui/themes"}),(0,i.jsx)("div",{children:"yarn add @public-ui/components @public-ui/themes"})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-diff",children:'<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <meta charset="UTF-8" />\n    <link rel="icon" type="image/svg+xml" href="/vite.svg" />\n    <meta name="viewport" content="width=device-width, initial-scale=1.0" />\n    <title>Title</title>\n+   <script type="module" src="/node_modules/@public-ui/components/dist/kolibri/kolibri.esm.js"><\/script>\n  </head>\n  <body>\n    <div id="app"></div>\n    <script type="module" src="/src/main.ts"><\/script>\n  </body>\n</html>\n'})}),"\n",(0,i.jsxs)(n.p,{children:["To get code completion it may be necessary to create ",(0,i.jsx)(n.code,{children:".vscode/settings.json"})," and insert the following:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n\t"html.customData": ["./node_modules/@public-ui/components/vscode-custom-data.json"]\n}\n'})}),"\n",(0,i.jsxs)(n.p,{children:["Here the web component notation (kebab-case) is to be used. (e.g.: ",(0,i.jsx)(n.code,{children:"<kol-heading>"}),")"]}),"\n",(0,i.jsx)(n.h3,{id:"v-static-website",children:"V static website"}),"\n",(0,i.jsx)(n.p,{children:"To include KoliBri in a static web page you only have to include the following script tag.\nIf fonts and/or icons are used, they must be included as described above."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-html",children:"<script type=\"module\">\n\timport { register } from 'https://unpkg.com/@public-ui/components/dist/esm/index.js';\n\timport { defineCustomElements } from 'https://unpkg.com/@public-ui/components/dist/loader/index.js';\n\timport { ITZBund } from 'https://unpkg.com/@public-ui/themes/dist/index.mjs';\n\tregister(ITZBund, defineCustomElements).catch(console.warn);\n<\/script>\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Here the web component notation (kebab-case) is to be used. (e.g.: ",(0,i.jsx)(n.code,{children:"<kol-heading>"}),")"]}),"\n",(0,i.jsx)(n.h2,{id:"additional-features",children:"additional features"}),"\n",(0,i.jsx)(n.h3,{id:"developer-tools",children:"Developer Tools"}),"\n",(0,i.jsx)(n.p,{children:"By means of the following configuration in the HTML file the developer tools of KoliBri can be activated."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-html",children:'\u2026\n<html>\n\t<head>\n\t\t<meta name="kolibri" content="dev-mode=true" />\n\t</head>\n\t\u2026\n</html>\n'})}),"\n",(0,i.jsx)(n.h3,{id:"experimental-mode",children:"Experimental mode"}),"\n",(0,i.jsx)(n.p,{children:"By means of the following configuration in the HTML file the experimental mode can be activated."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-html",children:'\u2026\n<html>\n\t<head>\n\t\t<meta name="kolibri" content="experimental-mode=true" />\n\t</head>\n\t\u2026\n</html>\n'})}),"\n",(0,i.jsx)(n.h3,{id:"color-contrast-analysis",children:"Color contrast analysis"}),"\n",(0,i.jsx)(n.p,{children:"To detect color contrast errors within the DOM, you can enable color contrast analysis using the following configuration."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-html",children:'\u2026\n<html>\n\t<head>\n\t\t<meta name="kolibri" content="color-constrast-analysis=true" />\n\t</head>\n\t\u2026\n</html>\n'})}),"\n",(0,i.jsx)(n.h3,{id:"3-registering-the-component-loaders",children:"3. Registering the component loaders"}),"\n",(0,i.jsx)(n.p,{children:"After the preparations are complete, only the component loader needs to be registered.\nIt ensures that the Web Components are reloaded asychronously (lazy) as soon as they are used in the web page."}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Method"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"register"}),(0,i.jsx)(n.td,{children:"Sets a theme and then registers the loader"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"BMF"}),(0,i.jsx)(n.td,{children:"Registers the loader for e.g. the BMF theme"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"defineCustomElements"}),(0,i.jsx)(n.td,{children:"Registers the loader for the Web Components"})]})]})]}),"\n",(0,i.jsx)(n.h4,{id:"variant-a-static-project",children:"Variant A: Static project"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-html",children:"<head>\n\t<script type=\"module\">\n\t\timport { register } from 'https://unpkg.com/@public-ui/components@1.4.0-rc.6';\n\t\timport { defineCustomElements } from 'https://unpkg.com/@public-ui/components@1.4.0-rc.6/dist/loader';\n\t\timport { BMF } from 'https://unpkg.com/@public-ui/themes@1.4.0-rc.6';\n\t\tregister([BMF], defineCustomElements)\n\t\t\t.then(() => {})\n\t\t\t.catch(console.warn);\n\t<\/script>\n</head>\n<body>\n\t<kol-spin _show>\n</body>\n"})}),"\n",(0,i.jsx)(n.h4,{id:"variant-b-react-project",children:"Variant B: React project"}),"\n",(0,i.jsx)(n.h5,{id:"integration",children:"Integration"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-tsx",children:"import React from 'react';\nimport ReactDOM from 'react-dom';\n\nimport { AppComponent } from './components/app/component';\n\nimport { register } from '@public-ui/components';\nimport { defineCustomElements } from '@public-ui/components/dist/loader';\nimport { BMF } from '@public-ui/themes';\n\nregister(BMF, defineCustomElements)\n\t.then(() => {\n\t\tconst htmlDivElement: HTMLDivElement | null = document.querySelector<HTMLDivElement>('div#app');\n\t\tif (htmlDivElement instanceof HTMLDivElement) {\n\t\t\tconst root = createRoot(htmlDivElement);\n\t\t\troot.render(<AppComponent />);\n\t\t}\n\t})\n\t.catch(console.warn);\n"})}),"\n",(0,i.jsx)(n.h5,{id:"install-adapter",children:"Install adapter"}),"\n",(0,i.jsx)(n.p,{children:"An adapter is available for React that allows seamless and typed usage in TSX."}),"\n",(0,i.jsxs)(n.p,{children:["NPM ",(0,i.jsx)(n.code,{children:"npm i @public-ui/react"})," or"]}),"\n",(0,i.jsxs)(n.p,{children:["PNPM ",(0,i.jsx)(n.code,{children:"pnpm i @public-ui/react"})," or"]}),"\n",(0,i.jsxs)(n.p,{children:["YARN ",(0,i.jsx)(n.code,{children:"yarn add @public-ui/react"})]}),"\n",(0,i.jsx)(n.h5,{id:"use-component",children:"Use component"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-tsx",children:"import React, { FunctionComponent } from 'react';\nimport { KolSpin } from '@public-ui/react';\n\nexport const App: FunctionComponent = () => <KolSpin _show />;\n"})}),"\n",(0,i.jsx)("hr",{}),"\n",(0,i.jsx)("hr",{}),"\n",(0,i.jsx)(n.h2,{id:"special-features",children:"Special features"}),"\n",(0,i.jsx)(n.h3,{id:"developer-tools-1",children:"Developer tools"}),"\n",(0,i.jsx)(n.p,{children:"By using the following configuration in the HTML file the developer tools of KoliBri can be activated."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-html",children:'\u2026\n<html>\n\t<head>\n\t\t<meta name="kolibri" content="dev-mode=true" />\n\t\t\x3c!-- <meta name="kolibri" content="dev-mode=true,experimental-mode=true" /> --\x3e\n\t</head>\n\t\u2026\n</html>\n'})}),"\n",(0,i.jsx)(n.h3,{id:"experimental-mode--lab",children:"Experimental mode / lab"}),"\n",(0,i.jsx)(n.p,{children:"By using the following configuration in the HTML file the experimental mode can be activated."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-html",children:'\u2026\n<html>\n\t<head>\n\t\t<meta name="kolibri" content="experimental-mode=true" />\n\t</head>\n\t\u2026\n</html>\n'})}),"\n",(0,i.jsx)(n.h3,{id:"color-contrast-analysis-1",children:"Color-Contrast-Analysis"}),"\n",(0,i.jsx)(n.p,{children:"The color contrast analysis allows detecting color contrast errors within the DOM. By adding the following configuration to the meta tag, the color contrast analysis is enabled."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-html",children:'\u2026\n<html>\n\t<head>\n\t\t<meta name="kolibri" content="color-constrast-analysis=true" />\n\t</head>\n\t\u2026\n</html>\n'})})]})}function h(e={}){const{wrapper:n}={...(0,l.M)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},108:(e,n,t)=>{t.d(n,{I:()=>o,M:()=>r});var i=t(80924);const l={},s=i.createContext(l);function r(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:r(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);