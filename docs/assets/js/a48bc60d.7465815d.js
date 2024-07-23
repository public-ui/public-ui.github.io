"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[43820],{83264:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>l,metadata:()=>o,toc:()=>a});var t=i(76776),s=i(108);const l={},r="Erste Schritte",o={id:"get-started/first-steps",title:"Erste Schritte",description:"<kol-link",source:"@site/docs/10-get-started/1-first-steps.mdx",sourceDirName:"10-get-started",slug:"/get-started/first-steps",permalink:"/docs/next/get-started/first-steps",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"FAQ",permalink:"/docs/next/faq"},next:{title:"Frameworks",permalink:"/docs/next/get-started/frameworks"}},d={},a=[{value:"Neues Projekt erstellen",id:"neues-projekt-erstellen",level:2},{value:"Einbinden in ein bestehendes Projekt",id:"einbinden-in-ein-bestehendes-projekt",level:2},{value:"Einbinden von Schriftarten",id:"einbinden-von-schriftarten",level:3},{value:"Typescript",id:"typescript",level:3},{value:"I Vite + React",id:"i-vite--react",level:3},{value:"1. Installieren der KoliBri-Bibliotheken",id:"1-installieren-der-kolibri-bibliotheken",level:4},{value:"2. Integration",id:"2-integration",level:4},{value:"3. module einbinden",id:"3-module-einbinden",level:4},{value:"4. Beispiel",id:"4-beispiel",level:4},{value:"II Vite + Vue",id:"ii-vite--vue",level:3},{value:"1. Installieren der KoliBri-Bibliotheken",id:"1-installieren-der-kolibri-bibliotheken-1",level:4},{value:"2. Plugin",id:"2-plugin",level:4},{value:"3. module einbinden",id:"3-module-einbinden-1",level:4},{value:"4. Konfiguration anpassen",id:"4-konfiguration-anpassen",level:4},{value:"5. Beispiel",id:"5-beispiel",level:4},{value:"III React",id:"iii-react",level:3},{value:"1. Installieren der KoliBri-Bibliotheken",id:"1-installieren-der-kolibri-bibliotheken-2",level:4},{value:"2. Registrieren des KoliBri-Loaders",id:"2-registrieren-des-kolibri-loaders",level:4},{value:"3. Integration",id:"3-integration",level:4},{value:"4. Beispiel",id:"4-beispiel-1",level:4},{value:"IV ohne Framework",id:"iv-ohne-framework",level:3},{value:"V statische Webseite",id:"v-statische-webseite",level:3},{value:"Weitere Optionen",id:"weitere-optionen",level:2},{value:"Developer Tools",id:"developer-tools",level:3},{value:"Experimenteller Modus",id:"experimenteller-modus",level:3},{value:"Farbkontrastanalyse",id:"farbkontrastanalyse",level:3}];function c(e){const n={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.M)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"erste-schritte",children:"Erste Schritte"}),"\n",(0,t.jsx)("div",{class:"grid md:grid-cols-2 mb-4",children:(0,t.jsx)("kol-card",{_label:"Cheat Sheet herunterladen",_level:"2",children:(0,t.jsx)("kol-link",{slot:"",_href:"https://public-ui.github.io/cheat-sheet/",_icons:"codicon codicon-code",_label:"false",_target:"cheat-sheet",_label:"Klicken Sie hier, um sich das Cheat-Sheet zum Entwickeln anzuschauen und herunterzuladen."})})}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Hinweis:"})," F\xfcr Projekt im ITZBund gibt es ein vorgegebenes Seed-Projekt, welches \xfcber die internen Kommunikationswege angefragt werden kann."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"neues-projekt-erstellen",children:"Neues Projekt erstellen"}),"\n",(0,t.jsx)(n.p,{children:"Ein neues Projekt kann mit Hilfe des Kommandozeilenassistenten schnell erstellt werden."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"npm init kolibri@latest my-kolibri-app\n"})}),"\n",(0,t.jsx)("img",{src:"https://raw.githubusercontent.com/public-ui/.github/main/profile/create-kolibri.gif",alt:"Zeigt wie man mit create-kolibri eine neue App anlegen kann."}),"\n",(0,t.jsx)(n.h2,{id:"einbinden-in-ein-bestehendes-projekt",children:"Einbinden in ein bestehendes Projekt"}),"\n",(0,t.jsx)(n.h3,{id:"einbinden-von-schriftarten",children:"Einbinden von Schriftarten"}),"\n",(0,t.jsxs)(n.p,{children:["Schriftarten werden von Natur aus losgel\xf6st vom CSS geladen und m\xfcssen je nach ",(0,t.jsx)(n.strong,{children:"KoliBri"}),"-Theme in die projektspezifische Rahmenseite (",(0,t.jsx)(n.code,{children:"index.html"}),") eingebunden werden."]}),"\n",(0,t.jsxs)(n.p,{children:["Hierzu k\xf6nnen die in der Bibliothek mitgelieferten Schriftarten in die eigenen Assets kopiert werden: ",(0,t.jsx)(n.code,{children:"node_modules/@public-ui/themes/assets"}),", oder eigene verwendet werden."]}),"\n",(0,t.jsx)(n.p,{children:"Bitte importieren Sie nur die Schriftarten und Icons, die Sie verwenden, um unn\xf6tigen Datentransfer zu vermeiden."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-html",children:'<!DOCTYPE html>\n<html lang="de" dir="ltr">\n\t<head>\n\t\t<title>Webapplication | KoliBri</title>\n\t\t<meta charset="UTF-8" />\n\t\t<meta name="description" content="..." />\n\t\t<base href="/" />\n\t\t<meta name="viewport" content="width=device-width, initial-scale=1" />\n\t\t<link rel="shortcut icon" type="image/x-icon" href="assets/kolibri.ico" />\n\t\t<link rel="stylesheet" href="assets/bundes/style.css" />\n\t\t<link rel="stylesheet" href="assets/codicons/codicon.css" />\n\t\t<link rel="stylesheet" href="assets/fontawesome-free/css/all.min.css" />\n\t\t<link rel="stylesheet" href="assets/icofont/icofont.min.css" />\n\t\t<link rel="stylesheet" href="assets/kreon/style.css" />\n\t\t<link rel="stylesheet" href="assets/noto-sans/noto-sans.css" />\n\t\t<link rel="stylesheet" href="assets/material-icons/iconfont/material-icons.css" />\n\t\t<link rel="stylesheet" href="assets/material-symbols/index.css" />\n\t\t<link rel="stylesheet" href="assets/roboto/roboto.css" />\n\t\t<link rel="stylesheet" href="assets/tabler-icons/tabler-icons.css" />\n\t</head>\n</html>\n'})}),"\n",(0,t.jsx)(n.h3,{id:"typescript",children:"Typescript"}),"\n",(0,t.jsxs)(n.p,{children:["Um eine umf\xe4ngliche Codevervollst\xe4ndigung zu erhalten, ben\xf6tigen Sie folgenden Eintrag in der ",(0,t.jsx)(n.code,{children:"tsconfig.json"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "compilerOptions": {\n\t\t...\n    "moduleResolution": "Node",\n\t\t...\n  },\n\t...\n}\n'})}),"\n",(0,t.jsx)(n.h3,{id:"i-vite--react",children:"I Vite + React"}),"\n",(0,t.jsx)(n.h4,{id:"1-installieren-der-kolibri-bibliotheken",children:"1. Installieren der KoliBri-Bibliotheken"}),"\n",(0,t.jsxs)("kol-tabs",{_headers:"['npm', 'pnpm', 'yarn']",_tabs:'[{"_label":"NPM"},{"_label":"PNPM"},{"_label":"YARN"}]',children:[(0,t.jsx)("div",{children:"npm i @public-ui/components @public-ui/themes @public-ui/react"}),(0,t.jsx)("div",{children:"pnpm i @public-ui/components @public-ui/themes @public-ui/react"}),(0,t.jsx)("div",{children:"yarn add @public-ui/components @public-ui/themes @public-ui/react"})]}),"\n",(0,t.jsx)(n.h4,{id:"2-integration",children:"2. Integration"}),"\n",(0,t.jsx)(n.p,{children:"main.tsx"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-diff",children:'import React from "react";\nimport ReactDOM from "react-dom/client";\nimport App from "./App.tsx";\nimport "./index.css";\n\n+import { register } from "@public-ui/components";\n+import { defineCustomElements } from "@public-ui/components/dist/loader";\n+import { DEFAULT } from "@public-ui/themes";\n\n+register(DEFAULT, defineCustomElements)\n+  .then(() => {\n    ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(\n      <React.StrictMode>\n        <App />\n      </React.StrictMode>\n    );\n+  })\n+  .catch(console.warn);\n'})}),"\n",(0,t.jsx)(n.h4,{id:"3-module-einbinden",children:"3. module einbinden"}),"\n",(0,t.jsx)(n.p,{children:"index.html"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-diff",children:'<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <meta charset="UTF-8" />\n    <link rel="icon" type="image/svg+xml" href="/vite.svg" />\n    <meta name="viewport" content="width=device-width, initial-scale=1.0" />\n    <title>Vite + React + TS</title>\n+   <script type="module" src="/node_modules/@public-ui/components/dist/kolibri/kolibri.esm.js"><\/script>\n  </head>\n  <body>\n    <div id="root"></div>\n    <script type="module" src="/src/main.tsx"><\/script>\n  </body>\n</html>\n'})}),"\n",(0,t.jsx)(n.h4,{id:"4-beispiel",children:"4. Beispiel"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"import React from 'react';\nimport { KolSpin } from '@public-ui/react';\n\nexport const AppComponent = () => {\n\treturn (\n\t\t<div>\n\t\t\t<KolSpin _show />\n\t\t</div>\n\t);\n};\n"})}),"\n",(0,t.jsx)(n.h3,{id:"ii-vite--vue",children:"II Vite + Vue"}),"\n",(0,t.jsx)(n.h4,{id:"1-installieren-der-kolibri-bibliotheken-1",children:"1. Installieren der KoliBri-Bibliotheken"}),"\n",(0,t.jsxs)("kol-tabs",{_headers:"['npm', 'pnpm', 'yarn']",_tabs:'[{"_label":"NPM"},{"_label":"PNPM"},{"_label":"YARN"}]',children:[(0,t.jsx)("div",{children:"npm i @public-ui/components @public-ui/themes @public-ui/vue"}),(0,t.jsx)("div",{children:"pnpm i @public-ui/components @public-ui/themes @public-ui/vue"}),(0,t.jsx)("div",{children:"yarn add @public-ui/components @public-ui/themes @public-ui/vue"})]}),"\n",(0,t.jsx)(n.h4,{id:"2-plugin",children:"2. Plugin"}),"\n",(0,t.jsx)(n.p,{children:"kolibri.plugin.ts"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"import type { Plugin } from 'vue';\nimport { defineCustomElements } from '@public-ui/components/dist/loader';\nimport { register } from '@public-ui/components';\nimport { ITZBund } from '@public-ui/themes';\nexport const ComponentLibrary: Plugin = {\n\tinstall() {\n\t\tregister(ITZBund, defineCustomElements)\n\t\t\t.then(() => console.log('Components registered'))\n\t\t\t.catch(console.warn);\n\t},\n};\n"})}),"\n",(0,t.jsx)(n.p,{children:"main.ts:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-diff",children:"import { createApp } from 'vue'\nimport App from './App.vue'\nimport './assets/main.css'\n+ import { ComponentLibrary } from './vue.plugin'\n\nconst app = createApp(App)\n\n+ app.use(ComponentLibrary)\n\napp.mount('#app')\n"})}),"\n",(0,t.jsx)(n.h4,{id:"3-module-einbinden-1",children:"3. module einbinden"}),"\n",(0,t.jsx)(n.p,{children:"index.html"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-diff",children:'<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <meta charset="UTF-8" />\n    <link rel="icon" href="/favicon.ico" />\n    <meta name="viewport" content="width=device-width, initial-scale=1.0" />\n+   <script type="module" src="/node_modules/@public-ui/components/dist/kolibri/kolibri.esm.js"><\/script>\n    <title>Vite App</title>\n  </head>\n  <body>\n    <div id="app"></div>\n    <script type="module" src="/src/main.ts"><\/script>\n  </body>\n</html>\n'})}),"\n",(0,t.jsx)(n.h4,{id:"4-konfiguration-anpassen",children:"4. Konfiguration anpassen"}),"\n",(0,t.jsx)(n.p,{children:"vite.config.ts"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-diff",children:"import { fileURLToPath, URL } from 'node:url'\n\nimport { defineConfig } from 'vite'\nimport vue from '@vitejs/plugin-vue'\n\n// https://vitejs.dev/config/\nexport default defineConfig({\n-  plugins: [],\n+  plugins: [\n+    vue({\n+      template: {\n+        compilerOptions: {\n+          // treat all tags with a dash as custom elements\n+          isCustomElement: (tag) => tag.includes('-')\n+        }\n+      }\n+    })\n+  ],\n  resolve: {\n    alias: {\n      '@': fileURLToPath(new URL('./src', import.meta.url))\n    }\n  }\n})\n"})}),"\n",(0,t.jsx)(n.h4,{id:"5-beispiel",children:"5. Beispiel"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-html",children:'<KolInputText :_value="text" :_on="{ onChange: (e: unknown, v: string) => (text = v) }"></KolInputText>\n<KolButton _label="Text l\xf6schen" :_on="{ onClick: () => (text = \'\') }"></KolButton>\n'})}),"\n",(0,t.jsx)(n.p,{children:"Hinweis: KoliBri-Inputs \xfcbergeben in der Regel das Ursprungsevent als ersten Parameter und den Wert des Feldes als Zweiten."}),"\n",(0,t.jsx)(n.h3,{id:"iii-react",children:"III React"}),"\n",(0,t.jsx)(n.h4,{id:"1-installieren-der-kolibri-bibliotheken-2",children:"1. Installieren der KoliBri-Bibliotheken"}),"\n",(0,t.jsxs)("kol-tabs",{_headers:"['npm', 'pnpm', 'yarn']",_tabs:'[{"_label":"NPM"},{"_label":"PNPM"},{"_label":"YARN"}]',children:[(0,t.jsx)("div",{children:"npm i @public-ui/components @public-ui/themes @public-ui/react"}),(0,t.jsx)("div",{children:"pnpm i @public-ui/components @public-ui/themes @public-ui/react"}),(0,t.jsx)("div",{children:"yarn add @public-ui/components @public-ui/themes @public-ui/react"})]}),"\n",(0,t.jsx)(n.h4,{id:"2-registrieren-des-kolibri-loaders",children:"2. Registrieren des KoliBri-Loaders"}),"\n",(0,t.jsx)(n.p,{children:"Nachdem die Vorbereitungen abgeschlossen sind, muss nur noch der KoliBri-Loader registriert werden.\nEr sorgt daf\xfcr, dass die Web Components asynchron (lazy) nachgeladen werden, sobald sie in der Webseite verwendet werden."}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Methode"}),(0,t.jsx)(n.th,{children:"Erl\xe4uterung"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"register"}),(0,t.jsx)(n.td,{children:"Setzt ein Theme und registriert anschlie\xdfend den Loader"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"DEFAULT"}),(0,t.jsx)(n.td,{children:"Registriert den Loader f\xfcr z.B. das DEFAULT-Theme"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"defineCustomElements"}),(0,t.jsx)(n.td,{children:"Registriert den Loader f\xfcr die Web Components"})]})]})]}),"\n",(0,t.jsx)(n.h4,{id:"3-integration",children:"3. Integration"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"import React from 'react';\nimport ReactDOM from 'react-dom';\n\nimport { AppComponent } from './components/app/component';\n\nimport { register } from '@public-ui/core';\nimport { defineCustomElements } from '@public-ui/components/dist/loader';\nimport { DEFAULT } from '@public-ui/themes';\n\nregister(DEFAULT, defineCustomElements)\n\t.then(() => {\n\t\tconst htmlDivElement: HTMLDivElement | null = document.querySelector<HTMLDivElement>('div#app');\n\t\tif (htmlDivElement instanceof HTMLDivElement) {\n\t\t\tconst root = createRoot(htmlDivElement);\n\t\t\troot.render(<AppComponent />);\n\t\t}\n\t})\n\t.catch(console.warn);\n"})}),"\n",(0,t.jsx)(n.h4,{id:"4-beispiel-1",children:"4. Beispiel"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"import React from 'react';\nimport { KolSpin } from '@public-ui/react';\n\nexport const AppComponent = () => {\n\treturn (\n\t\t<div>\n\t\t\t<KolSpin _show />\n\t\t</div>\n\t);\n};\n"})}),"\n",(0,t.jsx)(n.h3,{id:"iv-ohne-framework",children:"IV ohne Framework"}),"\n",(0,t.jsxs)("kol-tabs",{_headers:"['npm', 'pnpm', 'yarn']",_tabs:'[{"_label":"NPM"},{"_label":"PNPM"},{"_label":"YARN"}]',children:[(0,t.jsx)("div",{children:"npm i @public-ui/components @public-ui/themes"}),(0,t.jsx)("div",{children:"pnpm i @public-ui/components @public-ui/themes"}),(0,t.jsx)("div",{children:"yarn add @public-ui/components @public-ui/themes"})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-diff",children:'<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <meta charset="UTF-8" />\n    <link rel="icon" type="image/svg+xml" href="/vite.svg" />\n    <meta name="viewport" content="width=device-width, initial-scale=1.0" />\n    <title>Title</title>\n+   <script type="module" src="/node_modules/@public-ui/components/dist/kolibri/kolibri.esm.js"><\/script>\n  </head>\n  <body>\n    <div id="app"></div>\n    <script type="module" src="/src/main.ts"><\/script>\n  </body>\n</html>\n'})}),"\n",(0,t.jsxs)(n.p,{children:["Um Codevervollst\xe4ndigung zu erhalten kann es notwendig sein ",(0,t.jsx)(n.code,{children:".vscode/settings.json"})," zu erstellen und Folgendes einzuf\xfcgen:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n\t"html.customData": ["./node_modules/@public-ui/components/vscode-custom-data.json"]\n}\n'})}),"\n",(0,t.jsxs)(n.p,{children:["Hierbei ist die Web-Component Schreibweise (kebab-case) zu verwenden. (z.B.: ",(0,t.jsx)(n.code,{children:'<kol-heading _label="">'}),")"]}),"\n",(0,t.jsx)(n.h3,{id:"v-statische-webseite",children:"V statische Webseite"}),"\n",(0,t.jsx)(n.p,{children:"Um KoliBri in eine statische Webseite einzubauen muss lediglich das folgende Script-Tag eingebunden werden.\nSofern Schriftarten und/oder Icons verwendet werden, m\xfcssen diese, wie oben beschrieben, eingebunden werden."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-html",children:"<script type=\"module\">\n\timport { register } from 'https://unpkg.com/@public-ui/components/dist/esm/index.js';\n\timport { defineCustomElements } from 'https://unpkg.com/@public-ui/components/dist/loader/index.js';\n\timport { ITZBund } from 'https://unpkg.com/@public-ui/themes/dist/index.mjs';\n\tregister(ITZBund, defineCustomElements).catch(console.warn);\n<\/script>\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Hierbei ist die Web-Component Schreibweise (kebab-case) zu verwenden. (z.B.: ",(0,t.jsx)(n.code,{children:'<kol-heading _label="">'}),")"]}),"\n",(0,t.jsx)(n.h2,{id:"weitere-optionen",children:"Weitere Optionen"}),"\n",(0,t.jsx)(n.h3,{id:"developer-tools",children:"Developer Tools"}),"\n",(0,t.jsx)(n.p,{children:"Mittels der folgenden Konfiguration in der HTML-Datei k\xf6nnen die Developer-Tools von KoliBri aktiviert werden."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-html",children:'\u2026\n<html>\n\t<head>\n\t\t<meta name="kolibri" content="dev-mode=true" />\n\t</head>\n\t\u2026\n</html>\n'})}),"\n",(0,t.jsx)(n.h3,{id:"experimenteller-modus",children:"Experimenteller Modus"}),"\n",(0,t.jsx)(n.p,{children:"Mittels der folgenden Konfiguration in der HTML-Datei kann der experimentelle Modus aktiviert werden."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-html",children:'\u2026\n<html>\n\t<head>\n\t\t<meta name="kolibri" content="experimental-mode=true" />\n\t</head>\n\t\u2026\n</html>\n'})}),"\n",(0,t.jsx)(n.h3,{id:"farbkontrastanalyse",children:"Farbkontrastanalyse"}),"\n",(0,t.jsx)(n.p,{children:"Um Farbkontrastfehler innerhalb des DOMs zu erkennen, k\xf6nnen Sie mittels der folgenden Konfiguration die Farbkontrastanalyse aktivieren."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-html",children:'\u2026\n<html>\n\t<head>\n\t\t<meta name="kolibri" content="color-constrast-analysis=true" />\n\t</head>\n\t\u2026\n</html>\n'})})]})}function h(e={}){const{wrapper:n}={...(0,s.M)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},108:(e,n,i)=>{i.d(n,{I:()=>o,M:()=>r});var t=i(80924);const s={},l=t.createContext(s);function r(e){const n=t.useContext(l);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),t.createElement(l.Provider,{value:n},e.children)}}}]);