"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[48288],{97856:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>p,frontMatter:()=>d,metadata:()=>c,toc:()=>h});var s=t(76776),i=t(108);function r(e){const n={code:"code",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.M)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["Mit dem ",(0,s.jsx)(n.strong,{children:"Toast"}),"-Service geben Sie ein optisches Feedback an die Nutzer",":innen",". Sie wird am Kopf des Browserfenster\nangezeigt, bis sie geschlossen wird. Werden mehrere Toasts ge\xf6ffnet, ohne das die bisherigen geschlossen wurden, so werden diese untereinander angezeigt."]}),"\n",(0,s.jsx)(n.h2,{id:"konstruktion",children:"Konstruktion"}),"\n",(0,s.jsx)(n.p,{children:"Die Toast-Komponenten werden nicht direkt verwendet, sondern immer \xfcber den ToasterService konstruiert."}),"\n",(0,s.jsx)(n.h3,{id:"code",children:"Code"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"import { ToasterService } from '@public-ui/components';\n\n// Get the toaster instance for the current HTML document.\nconst toaster = ToasterService.getInstance(document);\n\n// Enqueue a new toast to the toaster to display:\ntoaster.enqueue({\n\tlabel: 'This is the title',\n\tdescription: 'Magna eu sit adipisicing cillum amet esse in aute quis in dolore.',\n\ttype: 'info',\n});\n"})}),"\n",(0,s.jsx)(n.h3,{id:"weitere-service-methoden",children:"Weitere Service-Methoden"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"closeAll"}),": Schlie\xdft alle Toasts"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"dispose"}),": Entfernt den Toast Container. Die Toaster-Instanz kann nicht weiter genutzt werden."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"verwendung",children:"Verwendung"}),"\n",(0,s.jsx)(n.h3,{id:"\xfcberschrift",children:"\xdcberschrift"}),"\n",(0,s.jsxs)(n.p,{children:["Verwenden Sie das Attribut ",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"_label"})}),", um die \xdcberschrift des Toasts zu bestimmen."]}),"\n",(0,s.jsx)(n.h3,{id:"inhalt",children:"Inhalt"}),"\n",(0,s.jsxs)(n.p,{children:["Verwenden Sie das Attribut ",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"_description"})}),", um den Text-Inhalt des Toasts zu bestimmen."]}),"\n",(0,s.jsxs)(n.p,{children:["Alternativ zur statischen Description k\xf6nnen Sie \xfcber das Attribut ",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"_render"})})," eine eigene Render-Funktion definieren. Diese wird mit einer Referenz zum\nHTMLElement der Toast-Komponente aufgerufen. Zudem wird auch ein Objekt \xfcbergeben, das eine ",(0,s.jsx)(n.code,{children:"close"}),"-Funktion zum Schlie\xdfen des Toasts bereitstellt."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"const closeToast = toaster.enqueue({\n\trender: (element: HTMLElement, { close }) => {\n\t\telement.textContent = 'Mein Inhalt';\n\t\tconst customCloseButton = document.createElement('button');\n\t\tcustomCloseButton.textContent = 'Toast schlie\xdfen';\n\t\telement.appendChild(customCloseButton);\n\t\tcustomCloseButton.addEventListener('click', close, { once: true });\n\t},\n});\n\n/* Optional: Toast wieder schlie\xdfen mit `closeToast()` */\n"})}),"\n",(0,s.jsx)(n.h3,{id:"anzeigetyp-des-toast",children:"Anzeigetyp des Toast"}),"\n",(0,s.jsxs)(n.p,{children:["Verwenden Sie das Attribut ",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"_type"})}),", um den Typ des Toasts festzulegen. M\xf6gliche Werte sind:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"default"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"error"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"info"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"success"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"warning"})}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"methods",children:"Methods"}),"\n",(0,s.jsx)(n.h3,{id:"closeall",children:"closeAll"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"closeAll() => Promise<void>"})}),"\n",(0,s.jsx)(n.h4,{id:"returns",children:"Returns"}),"\n",(0,s.jsxs)(n.p,{children:["Type: ",(0,s.jsx)(n.code,{children:"Promise<void>"})]}),"\n",(0,s.jsx)(n.h3,{id:"enqueuetoast-toast--promise--void",children:(0,s.jsx)(n.code,{children:"enqueue(toast: Toast) => Promise<() => void>"})}),"\n",(0,s.jsx)(n.h4,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Name"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"toast"})}),(0,s.jsxs)(n.td,{children:[(0,s.jsx)(n.code,{children:"{ description?: string"})," | ",(0,s.jsx)(n.code,{children:"undefined; render?: ((nodeRef: HTMLElement, options: { close: () => void; }) => void)"})," | ",(0,s.jsx)(n.code,{children:"undefined; label: string; type: AlertType; }"})]}),(0,s.jsx)(n.td,{})]})})]}),"\n",(0,s.jsx)(n.h4,{id:"returns-1",children:"Returns"}),"\n",(0,s.jsxs)(n.p,{children:["Type: ",(0,s.jsx)(n.code,{children:"Promise<() => void>"})]}),"\n",(0,s.jsx)(n.hr,{})]})}function o(e={}){const{wrapper:n}={...(0,i.M)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(r,{...e})}):r(e)}const d={title:"Toaster",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die Toaster-Komponente.",tags:["Toaster","Beschreibung","Spezifikation","Beispiele"]},l=void 0,c={id:"components/toaster",title:"Toaster",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die Toaster-Komponente.",source:"@site/versioned_docs/version-1.7/30-components/toaster.mdx",sourceDirName:"30-components",slug:"/components/toaster",permalink:"/en/docs/1.7/components/toaster",draft:!1,unlisted:!1,tags:[{inline:!0,label:"Toaster",permalink:"/en/docs/1.7/tags/toaster"},{inline:!0,label:"Beschreibung",permalink:"/en/docs/1.7/tags/beschreibung"},{inline:!0,label:"Spezifikation",permalink:"/en/docs/1.7/tags/spezifikation"},{inline:!0,label:"Beispiele",permalink:"/en/docs/1.7/tags/beispiele"}],version:"1.7",frontMatter:{title:"Toaster",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die Toaster-Komponente.",tags:["Toaster","Beschreibung","Spezifikation","Beispiele"]},sidebar:"tutorialSidebar",previous:{title:"Toast",permalink:"/en/docs/1.7/components/toast"},next:{title:"Tooltip",permalink:"/en/docs/1.7/components/tooltip"}},a={},h=[{value:"Konstruktion",id:"konstruktion",level:2},{value:"Code",id:"code",level:3},{value:"Weitere Service-Methoden",id:"weitere-service-methoden",level:3},{value:"Verwendung",id:"verwendung",level:2},{value:"\xdcberschrift",id:"\xfcberschrift",level:3},{value:"Inhalt",id:"inhalt",level:3},{value:"Anzeigetyp des Toast",id:"anzeigetyp-des-toast",level:3},{value:"Methods",id:"methods",level:2},{value:"closeAll",id:"closeall",level:3},{value:"Returns",id:"returns",level:4},{value:"<code>enqueue(toast: Toast) =&gt; Promise&lt;() =&gt; void&gt;</code>",id:"enqueuetoast-toast--promise--void",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns-1",level:4}];function u(e){return(0,s.jsx)(o,{})}function p(e={}){const{wrapper:n}={...(0,i.M)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(u,{...e})}):u()}},108:(e,n,t)=>{t.d(n,{I:()=>d,M:()=>o});var s=t(80924);const i={},r=s.createContext(i);function o(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);