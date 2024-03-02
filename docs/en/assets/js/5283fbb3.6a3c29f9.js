"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[52312],{18232:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>c,default:()=>x,frontMatter:()=>d,metadata:()=>l,toc:()=>h});var s=t(2488),i=t(16592);function r(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",mermaid:"mermaid",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.M)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["Mit dem ",(0,s.jsx)(n.strong,{children:"Toast"}),"-Service geben Sie ein optisches Feedback an die Nutzer",":innen",". Sie wird am Kopf des Browserfenster\nangezeigt, bis sie geschlossen wird. Werden mehrere Toasts ge\xf6ffnet, ohne das die bisherigen geschlossen wurden, so werden diese untereinander angezeigt."]}),"\n",(0,s.jsx)(n.h2,{id:"konstruktion",children:"Konstruktion"}),"\n",(0,s.jsx)(n.p,{children:"Die Toast-Komponenten werden nicht direkt verwendet, sondern immer \xfcber den ToasterService konstruiert."}),"\n",(0,s.jsx)(n.h3,{id:"code",children:"Code"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"import { ToasterService } from '@public-ui/components';\n\n// Get the toaster instance for the current HTML document.\nconst toaster = ToasterService.getInstance(document, {\n  defaultAlertType: 'msg', // Standard: 'card'\n}});\n\n// Enqueue a new toast to the toaster to display:\ntoaster.enqueue({\n\tlabel: 'This is the title',\n\tdescription: 'Magna eu sit adipisicing cillum amet esse in aute quis in dolore.',\n\ttype: 'info',\n\talertType: 'msg', // Standard: 'card'\n});\n"})}),"\n",(0,s.jsx)(n.h3,{id:"weitere-service-methoden",children:"Weitere Service-Methoden"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"closeAll"}),": Schlie\xdft alle Toasts"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"dispose"}),": Entfernt den Toast Container. Die Toaster-Instanz kann nicht weiter genutzt werden."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"verwendung",children:"Verwendung"}),"\n",(0,s.jsx)(n.h3,{id:"\xfcberschrift",children:"\xdcberschrift"}),"\n",(0,s.jsxs)(n.p,{children:["Verwenden Sie das Attribut ",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"_label"})}),", um die \xdcberschrift des Toasts zu bestimmen."]}),"\n",(0,s.jsx)(n.h3,{id:"inhalt",children:"Inhalt"}),"\n",(0,s.jsxs)(n.p,{children:["Verwenden Sie das Attribut ",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"_description"})}),", um den Text-Inhalt des Toasts zu bestimmen."]}),"\n",(0,s.jsxs)(n.p,{children:["Alternativ zur statischen Description k\xf6nnen Sie \xfcber das Attribut ",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"_render"})})," eine eigene Render-Funktion definieren. Diese wird mit einer Referenz zum\nHTMLElement der Toast-Komponente aufgerufen. Zudem wird auch ein Objekt \xfcbergeben, das eine ",(0,s.jsx)(n.code,{children:"close"}),"-Funktion zum Schlie\xdfen des Toasts bereitstellt."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"const closeToast = toaster.enqueue({\n\trender: (element: HTMLElement, { close }) => {\n\t\telement.textContent = 'Mein Inhalt';\n\t\tconst customCloseButton = document.createElement('button');\n\t\tcustomCloseButton.textContent = 'Toast schlie\xdfen';\n\t\telement.appendChild(customCloseButton);\n\t\tcustomCloseButton.addEventListener('click', close, { once: true });\n\t},\n});\n\n/* Optional: Toast wieder schlie\xdfen mit `closeToast()` */\n"})}),"\n",(0,s.jsx)(n.h3,{id:"anzeigetyp-des-toast",children:"Anzeigetyp des Toast"}),"\n",(0,s.jsxs)(n.p,{children:["Verwenden Sie das Attribut ",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"_type"})}),", um den Typ des Toasts festzulegen. M\xf6gliche Werte sind:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"default"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"error"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"info"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"success"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"warning"})}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"methods",children:"Methods"}),"\n",(0,s.jsx)(n.h3,{id:"closeall",children:"closeAll"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"closeAll() => Promise<void>"})}),"\n",(0,s.jsx)(n.h4,{id:"returns",children:"Returns"}),"\n",(0,s.jsxs)(n.p,{children:["Type: ",(0,s.jsx)(n.code,{children:"Promise<void>"})]}),"\n",(0,s.jsx)(n.h3,{id:"enqueuetoast-toast--promise--void",children:(0,s.jsx)(n.code,{children:"enqueue(toast: Toast) => Promise<() => void>"})}),"\n",(0,s.jsx)(n.h4,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Name"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"toast"})}),(0,s.jsxs)(n.td,{children:[(0,s.jsx)(n.code,{children:"{ description?: string"})," | ",(0,s.jsx)(n.code,{children:"undefined; render?: ((nodeRef: HTMLElement, options: { close: () => void; }) => void)"})," | ",(0,s.jsx)(n.code,{children:'undefined; label: string; type: "error"'})," | ",(0,s.jsx)(n.code,{children:'"warning"'})," | ",(0,s.jsx)(n.code,{children:'"info"'})," | ",(0,s.jsx)(n.code,{children:'"success"'})," | ",(0,s.jsx)(n.code,{children:'"default"; alertVariant?: "card"'})," | ",(0,s.jsx)(n.code,{children:'"msg"'})," | ",(0,s.jsx)(n.code,{children:"undefined; }"})]}),(0,s.jsx)(n.td,{})]})})]}),"\n",(0,s.jsx)(n.h4,{id:"returns-1",children:"Returns"}),"\n",(0,s.jsxs)(n.p,{children:["Type: ",(0,s.jsx)(n.code,{children:"Promise<() => void>"})]}),"\n",(0,s.jsx)(n.h2,{id:"dependencies",children:"Dependencies"}),"\n",(0,s.jsx)(n.h3,{id:"depends-on",children:"Depends on"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"./button",children:"kol-button"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"./alert",children:"kol-alert"})}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"graph",children:"Graph"}),"\n",(0,s.jsx)(n.mermaid,{value:"graph TD;\n  kol-toast-container --\x3e kol-button\n  kol-toast-container --\x3e kol-alert\n  kol-button --\x3e kol-button-wc\n  kol-button-wc --\x3e kol-span-wc\n  kol-button-wc --\x3e kol-tooltip-wc\n  kol-span-wc --\x3e kol-icon\n  kol-tooltip-wc --\x3e kol-span-wc\n  kol-alert --\x3e kol-alert-wc\n  kol-alert-wc --\x3e kol-heading-wc\n  kol-alert-wc --\x3e kol-button-wc\n  kol-alert-wc --\x3e kol-icon\n  style kol-toast-container stroke:#333,stroke-width:4px"}),"\n",(0,s.jsx)(n.hr,{})]})}function o(e={}){const{wrapper:n}={...(0,i.M)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(r,{...e})}):r(e)}const d={title:"Toaster",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die Toast-Komponente.",tags:["Toast","Beschreibung","Spezifikation","Beispiele"]},c=void 0,l={id:"components/toaster",title:"Toaster",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die Toast-Komponente.",source:"@site/versioned_docs/version-2.0/30-components/toaster.mdx",sourceDirName:"30-components",slug:"/components/toaster",permalink:"/en/docs/components/toaster",draft:!1,unlisted:!1,tags:[{label:"Toast",permalink:"/en/docs/tags/toast"},{label:"Beschreibung",permalink:"/en/docs/tags/beschreibung"},{label:"Spezifikation",permalink:"/en/docs/tags/spezifikation"},{label:"Beispiele",permalink:"/en/docs/tags/beispiele"}],version:"2.0",frontMatter:{title:"Toaster",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die Toast-Komponente.",tags:["Toast","Beschreibung","Spezifikation","Beispiele"]},sidebar:"tutorialSidebar",previous:{title:"Textarea",permalink:"/en/docs/components/textarea"},next:{title:"Tooltip",permalink:"/en/docs/components/tooltip"}},a={},h=[];function u(e){return(0,s.jsx)(o,{})}function x(e={}){const{wrapper:n}={...(0,i.M)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(u,{...e})}):u()}},16592:(e,n,t)=>{t.d(n,{I:()=>d,M:()=>o});var s=t(96651);const i={},r=s.createContext(i);function o(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);