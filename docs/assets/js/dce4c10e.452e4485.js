"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[27316],{45852:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>h,contentTitle:()=>l,default:()=>x,frontMatter:()=>d,metadata:()=>c,toc:()=>a});var t=i(2488),r=i(16592);function s(e){const n={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",hr:"hr",li:"li",mermaid:"mermaid",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.M)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)("kol-alert",{_type:"warning",children:["Die ",(0,t.jsx)(n.strong,{children:"Tooltip"}),"-Komponente wird innerhalb von KoliBri verwendet und ist nicht daf\xfcr vorgesehen in der Anwendungsentwicklung verwendet zu werden. Denn der Tooltip ist nur dann wirklich barrierefrei, wenn von einem Referenzelement auf das Tooltip verwiesen wird."]}),"\n",(0,t.jsxs)(n.p,{children:["Die ",(0,t.jsx)(n.strong,{children:"Tooltip"}),"-Komponente implementiert das Gegenst\xfcck zum ",(0,t.jsx)(n.code,{children:"Aria-Label"}),". Es ist also explizit nur daf\xfcr vorgesehen, dem/der Nutzer",":in"," ohne Screenreader die Beschriftung eines Elementes anzuzeigen."]}),"\n",(0,t.jsxs)(n.p,{children:["Ein ge\xf6ffneter Tooltip l\xe4sst sich mit der ",(0,t.jsx)(n.code,{children:"Escape"}),"-Taste schlie\xdfen, um ggf. \xfcberlagerte Seiteninformationen wieder sichtbar zu machen."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Hinweis:"})," Damit der Tooltip korrekt ausgerichtet wird, darf das Referenz-Element nicht ",(0,t.jsx)(n.code,{children:"display: inline"})," haben."]}),"\n",(0,t.jsx)(n.h2,{id:"barrierefreiheit",children:"Barrierefreiheit"}),"\n",(0,t.jsxs)(n.p,{children:["Die Tooltip-Komponente wird bei Fokus oder bei Bewegen der Maus \xfcber dem Referenzelement angezeigt und dient ausschlie\xdflich dem/der sehenden Nutzer",":in"," ohne Screenreader die Beschriftung (Aria-Label) lesen zu k\xf6nnen. Der Text des Tooltips ist selbst nicht mit der Tastatur erreichbar und zudem mittels Aria-Hidden f\xfcr die Screenreader versteckt."]}),"\n",(0,t.jsx)("kol-alert",{_type:"info",children:(0,t.jsx)(n.p,{children:"Aus Sicht des Barrierefreiheitstests k\xf6nnen Tooltips ignoriert werden, solange zudem von der Entwicklung sichergestellt wurde, dass der Tooltip-Text auch in gleicher Weise vom Screenreader vorgelesen wird."})}),"\n",(0,t.jsx)(n.h2,{id:"breite",children:"Breite"}),"\n",(0,t.jsxs)(n.p,{children:["Die Breite des Tooltips richtet sich normalerweise nach ihrem Inhalt.\nUm die Breite eines Tooltips zu konfigurieren, kann auf dem umgebenden Container eine ",(0,t.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties",children:"CSS-Custom-Property"})," wie folgt definiert werden:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-css",children:".container {\n --kol-tooltip-width': '40rem';\n}\n"})}),"\n",(0,t.jsx)(n.h2,{id:"links-und-referenzen",children:"Links und Referenzen"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)("kol-link",{_href:"https://tollwerk.de/projekte/tipps-techniken-inklusiv-barrierefrei/titel-tooltips-toggletips",_target:"_blank"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Property"}),(0,t.jsx)(n.th,{children:"Attribute"}),(0,t.jsx)(n.th,{children:"Description"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Default"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"_accessKey"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"_access-key"})}),(0,t.jsx)(n.td,{children:"Defines the elements access key."}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:"string"})," | ",(0,t.jsx)(n.code,{children:"undefined"})]}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"undefined"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"_align"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"_align"})}),(0,t.jsx)(n.td,{children:"Defines the alignment of the tooltip, popover or tabs in relation to the element."}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:'"bottom"'})," | ",(0,t.jsx)(n.code,{children:'"left"'})," | ",(0,t.jsx)(n.code,{children:'"right"'})," | ",(0,t.jsx)(n.code,{children:'"top"'})," | ",(0,t.jsx)(n.code,{children:"undefined"})]}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"'top'"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"_id"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"_id"})}),(0,t.jsx)(n.td,{children:"Defines the internal ID of the primary component element."}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:"string"})," | ",(0,t.jsx)(n.code,{children:"undefined"})]}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"undefined"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:"_label"})," ",(0,t.jsx)(n.em,{children:"(required)"})]}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"_label"})}),(0,t.jsx)(n.td,{children:"Defines the visible or semantic label of the component (e.g. aria-label, label, headline, caption, summary, etc.)."}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"string"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"undefined"})})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"dependencies",children:"Dependencies"}),"\n",(0,t.jsx)(n.h3,{id:"used-by",children:"Used by"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"./abbr",children:"kol-abbr"})}),"\n",(0,t.jsx)(n.li,{children:"kol-button-wc"}),"\n",(0,t.jsx)(n.li,{children:"kol-input"}),"\n",(0,t.jsx)(n.li,{children:"kol-link-wc"}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"depends-on",children:"Depends on"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"kol-span-wc"}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"graph",children:"Graph"}),"\n",(0,t.jsx)(n.mermaid,{value:"graph TD;\n kol-tooltip-wc --\x3e kol-span-wc\n kol-span-wc --\x3e kol-icon\n kol-abbr --\x3e kol-tooltip-wc\n kol-button-wc --\x3e kol-tooltip-wc\n kol-input --\x3e kol-tooltip-wc\n kol-link-wc --\x3e kol-tooltip-wc\n style kol-tooltip-wc stroke:#333,stroke-width:4px"}),"\n",(0,t.jsx)(n.hr,{})]})}function o(e={}){const{wrapper:n}={...(0,r.M)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(s,{...e})}):s(e)}const d={title:"Tooltip",description:"Beschreibung und Spezifikation f\xfcr die Tooltip-Komponente.",tags:["Tooltip","Beschreibung","Spezifikation"]},l=void 0,c={id:"components/tooltip",title:"Tooltip",description:"Beschreibung und Spezifikation f\xfcr die Tooltip-Komponente.",source:"@site/versioned_docs/version-2.0/30-components/tooltip.mdx",sourceDirName:"30-components",slug:"/components/tooltip",permalink:"/docs/components/tooltip",draft:!1,unlisted:!1,tags:[{label:"Tooltip",permalink:"/docs/tags/tooltip"},{label:"Beschreibung",permalink:"/docs/tags/beschreibung"},{label:"Spezifikation",permalink:"/docs/tags/spezifikation"}],version:"2.0",frontMatter:{title:"Tooltip",description:"Beschreibung und Spezifikation f\xfcr die Tooltip-Komponente.",tags:["Tooltip","Beschreibung","Spezifikation"]},sidebar:"tutorialSidebar",previous:{title:"Toaster",permalink:"/docs/components/toaster"},next:{title:"Tree Item",permalink:"/docs/components/tree-item"}},h={},a=[];function p(e){return(0,t.jsx)(o,{})}function x(e={}){const{wrapper:n}={...(0,r.M)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(p,{...e})}):p()}},16592:(e,n,i)=>{i.d(n,{I:()=>d,M:()=>o});var t=i(96651);const r={},s=t.createContext(r);function o(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);