"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[73432],{96152:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>u,contentTitle:()=>c,default:()=>x,frontMatter:()=>o,metadata:()=>h,toc:()=>b});var t=i(76776),r=i(108);function s(e){const n={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",hr:"hr",li:"li",mermaid:"mermaid",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.M)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["Die ",(0,t.jsx)(n.strong,{children:"Tabs"}),"-Komponente wird verwendet, um verwandte Inhalte auf derselben Seite zu organisieren und zwischen ihnen zu navigieren. Tabs sorgen daf\xfcr, dass gro\xdfe Inhaltsmengen f\xfcr Nutzer",":innen"," leichter organisiert werden k\xf6nnen. Tabs sind in Registerkartenleisten angeordnet, die als Registerkartengruppen bezeichnet werden, wobei die Registerkartenbeschriftung den Nutzer",":innen"," einen Hinweis darauf gibt, welcher Inhalt angezeigt wird, wenn die Registerkarte ausgew\xe4hlt wird."]}),"\n",(0,t.jsx)(n.h2,{id:"konstruktion",children:"Konstruktion"}),"\n",(0,t.jsxs)(n.p,{children:["Nach dem Laden der Komponente wird die erste Registerkarte links automatisch optisch als ",(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.em,{children:"aktiv"})})," hervorgehoben. Jede Registerkarte \xfcbernimmt den Status ",(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.em,{children:"aktiv"})})," nach dem Anklicken. Der Status ",(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.em,{children:"aktiv"})})," kann mit dem Attribut ",(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"_selected"})})," auch manuell auf den Index der Registrierkarte gesetzt werden.\nDie einzelnen Inhalte der Registerkarte werden in einem eigenen ",(0,t.jsx)(n.code,{children:"HTMLDivElement"})," als ",(0,t.jsx)(n.code,{children:"<div>Inhalt der Registerkarte</div>"})," innerhalb von ",(0,t.jsx)(n.code,{children:"<kol-tabs></kol-tabs>"})," notiert."]}),"\n",(0,t.jsxs)(n.p,{children:["Die Zuordnung der Daten im Attribut ",(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"_tabs"})})," zu den Div-Elementen erfolgt automatisch."]}),"\n",(0,t.jsx)(n.h3,{id:"code",children:"Code"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-html",children:'<kol-tabs _selected="0" _tabs=\'[{"_label":"Tab 1","_icon":"codicon codicon-home"},{"_label":"Tab 2", "_on": {"onClose": true}},{"_label":"Tab 3"}]\'>\n\t<div>Inhalt von Tab 1</div>\n\t<div>Inhalt von Tab 2</div>\n\t<div>Inhalt von Tab 3</div>\n</kol-tabs>\n'})}),"\n",(0,t.jsx)(n.h3,{id:"beispiel",children:"Beispiel"}),"\n",(0,t.jsxs)("kol-tabs",{_selected:"0",_tabs:'[{"_label":"Tab 1","_icon":"codicon codicon-home"},{"_label":"Tab 2", "_on": {"onClose": true}},{"_label":"Tab 3"}]',children:[(0,t.jsx)("div",{children:"Inhalt von Tab 1"}),(0,t.jsx)("div",{children:"Inhalt von Tab 2"}),(0,t.jsx)("div",{children:"Inhalt von Tab 3"})]}),"\n",(0,t.jsx)(n.h2,{id:"verwendung",children:"Verwendung"}),"\n",(0,t.jsx)(n.h3,{id:"definition-der-registerkarten",children:"Definition der Registerkarten"}),"\n",(0,t.jsxs)(n.p,{children:["Die Daten f\xfcr die Registerkarten k\xf6nnen als Objekte oder JSON-String an das Attribut ",(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"_tabs"})})," \xfcbergeben werden."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'[{ "_label": "Tab 1", "_icon": "codicon codicon-home" }, { "_label": "Tab 2", "_on": { "onClose": true } }, { "_label": "Tab 3" }]\n'})}),"\n",(0,t.jsx)(n.h3,{id:"registerkarte-deaktivieren",children:"Registerkarte deaktivieren"}),"\n",(0,t.jsxs)(n.p,{children:["Um eine Registerkarte zu deaktivieren, verwenden Sie das Attribut ",(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"_disabled"})}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"close-icon-im-registekartenheader",children:"Close-Icon im Registekartenheader"}),"\n",(0,t.jsxs)(n.p,{children:["Wenn Sie eine schlie\xdfbare Registerkarte ben\xf6tigen, k\xf6nnen Sie dies \xfcber das Attribut ",(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"_on"})})," und den Wert ",(0,t.jsxs)(n.strong,{children:['"onClose"',":true"]})," realisieren."]}),"\n",(0,t.jsx)(n.h3,{id:"best-practices",children:"Best practices"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Verwenden Sie Registerkarten, um verwandte Inhalte so zu organisieren und zu gruppieren, dass Nutzer",":innen"," die Seite nicht verlassen m\xfcssen."]}),"\n",(0,t.jsx)(n.li,{children:"Registerkarten sollten in einer einzelnen, scrollbaren (falls erforderlich) Zeile \xfcber dem Inhalt positioniert werden, auf den sie sich beziehen."}),"\n",(0,t.jsx)(n.li,{children:"Verwenden Sie die Registerkartenbezeichnung, um den Inhalt dieser Registerkarte klar und pr\xe4gnant zu beschreiben und zwischen den verschiedenen Abschnitten zu unterscheiden."}),"\n",(0,t.jsx)(n.li,{children:"Verwenden Sie Registerkarten nicht, um eine Sequenz oder einen Verlauf von Inhalten zu erstellen, die der Benutzer in einer bestimmten Reihenfolge lesen soll."}),"\n",(0,t.jsx)(n.li,{children:"Verwenden Sie Registerkarten nicht zum Vergleichen von Inhalten (z. B. unterschiedliche Spezifikationen)."}),"\n",(0,t.jsx)(n.li,{children:"Ber\xfccksichtigen Sie die Anzahl der Registerkarten, die Sie in die Registerkartengruppe aufnehmen. Wenn Sie das Gef\xfchl haben, dass die Zahl zu gro\xdf wird, sollten Sie den Inhalt weiter aufteilen oder ein anderes Navigationsmuster/eine andere Komponente verwenden."}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"anwendungsf\xe4lle",children:"Anwendungsf\xe4lle"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\xdcber Registerkarten k\xf6nnen Sie z.B. Dienstleistungen oder Vorteile in verschiedene Kategorien einteilen."}),"\n",(0,t.jsx)(n.li,{children:"Verwenden Sie Registerkarten, um Benutzerprofile in verschiedene Abschnitte zu gliedern (z. B. pers\xf6nliche Informationen, Termine, aktive Services)."}),"\n",(0,t.jsx)(n.li,{children:"Verwenden Sie Registerkarten, um FAQs in verschiedene Kategorien zu unterteilen."}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"barrierefreiheit",children:"Barrierefreiheit"}),"\n",(0,t.jsx)(n.h3,{id:"tastatursteuerung",children:"Tastatursteuerung"}),"\n",(0,t.jsxs)(n.p,{children:["Ausgew\xe4hlte Tabs werden beim Anspringen mit der ",(0,t.jsx)(n.strong,{children:"Tab-Taste"})," mit einem deutlichen Focus-Rahmen umgeben. Die einzelnen Tabs k\xf6nnen mit den Pfeiltasten ",(0,t.jsx)(n.strong,{children:"links"})," und ",(0,t.jsx)(n.strong,{children:"rechts"})," durchlaufen werden."]}),"\n",(0,t.jsxs)(n.p,{children:["Nach Anspringen eines Tabs kann mit Hilfe der ",(0,t.jsx)(n.strong,{children:"Tab-Taste"})," vom Header in den Inhaltsbereich der Registerkarte gewechselt werden."]}),"\n",(0,t.jsx)(n.p,{children:"Unabh\xe4ngig davon ob die Tab-Schalter oben, rechts, unten oder links angeordnet sind, bleibt die Tastatursteuerung gleich. Hintergrund ist, dass das Layout bei der Nutzung eines Screenreaders keine Rolle spielt. Eine unterschiedliche Pfeil-Tastensteuerung aufgrund der Layout-Anordnung w\xfcrde daher nicht dem \xfcblichen Bedienkonzept des W3C entsprechen."}),"\n",(0,t.jsx)(n.p,{children:"Bei der Umsetzung der Tastatursteuerung wurde sich an den Beispielen des W3C's orientiert."}),"\n",(0,t.jsx)(n.p,{children:"Hier steht immer der beeintr\xe4chtige Nutzende im Vordergrund. Um m\xf6glichst effizient \xfcber die gesamte Seite/Anwendung zu navigieren, ist nur 1 Schalter aus der Tab-Serie fokussierbar. Sobald der Nutzende auf der Tab-Navigation selbst ist, werden die Pfeiltasten verwendet, um zwischen den Tabs selbst wechseln."}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Taste"}),(0,t.jsx)(n.th,{children:"Funktion"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"Tab"})}),(0,t.jsx)(n.td,{children:"Fokussiert den ersten aktiven Tab. Auf vorhandene Close-Icons k\xf6nnen mit der Tab-Taste erreicht werden."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:"Pfeil-Tasten (links"})," | ",(0,t.jsx)(n.code,{children:"rechts)"})]}),(0,t.jsx)(n.td,{children:"Wechselt zwischen den Tabs."})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"links-und-referenzen",children:"Links und Referenzen"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://www.w3.org/WAI/ARIA/apg/example-index/tabs/tabs-manual.html",children:"https://www.w3.org/WAI/ARIA/apg/example-index/tabs/tabs-manual.html"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/tab_role",children:"https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/tab_role"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://dequeuniversity.com/library/aria/tabpanel",children:"https://dequeuniversity.com/library/aria/tabpanel"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://design-system.service.gov.uk/components/tabs/",children:"https://design-system.service.gov.uk/components/tabs/"})}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Property"}),(0,t.jsx)(n.th,{children:"Attribute"}),(0,t.jsx)(n.th,{children:"Description"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Default"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:"_ariaLabel"})," ",(0,t.jsx)(n.em,{children:"(required)"})]}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"_aria-label"})}),(0,t.jsx)(n.td,{children:"Gibt den Text an, der die Navigation von anderen Navigationen differenziert."}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"string"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"undefined"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"_on"})}),(0,t.jsx)(n.td,{children:"--"}),(0,t.jsx)(n.td,{children:"Gibt die Liste der Callback-Funktionen an, die auf Events aufgerufen werden sollen."}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:"undefined"})," | ",(0,t.jsx)(n.code,{children:"{ onCreate?: EventCallback<Event>"})," | ",(0,t.jsx)(n.code,{children:"{ label: string; callback: EventCallback<Event>; }"})," | ",(0,t.jsx)(n.code,{children:"undefined; } & { onSelect?: EventValueOrEventCallback<MouseEvent"})," | ",(0,t.jsx)(n.code,{children:"CustomEvent<any>"})," | ",(0,t.jsx)(n.code,{children:"KeyboardEvent"})," | ",(0,t.jsx)(n.code,{children:"PointerEvent, number>"})," | ",(0,t.jsx)(n.code,{children:"undefined; }"})]}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"undefined"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"_selected"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"_selected"})}),(0,t.jsx)(n.td,{children:"Gibt an, welches Tab selektiert sein soll."}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:"number"})," | ",(0,t.jsx)(n.code,{children:"undefined"})]}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"0"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:"_tabs"})," ",(0,t.jsx)(n.em,{children:"(required)"})]}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"_tabs"})}),(0,t.jsx)(n.td,{children:"Setzt die Daten f\xfcr die Registrierkarten."}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:"TabButtonProps[]"})," | ",(0,t.jsx)(n.code,{children:"string"})]}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"undefined"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"_tabsAlign"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"_tabs-align"})}),(0,t.jsx)(n.td,{children:"Setzt die Position der Registrierkarten."}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:'"bottom"'})," | ",(0,t.jsx)(n.code,{children:'"left"'})," | ",(0,t.jsx)(n.code,{children:'"right"'})," | ",(0,t.jsx)(n.code,{children:'"top"'})," | ",(0,t.jsx)(n.code,{children:"undefined"})]}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"'top'"})})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"dependencies",children:"Dependencies"}),"\n",(0,t.jsx)(n.h3,{id:"depends-on",children:"Depends on"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"./button-group",children:"kol-button-group-wc"})}),"\n",(0,t.jsx)(n.li,{children:"kol-button-wc"}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"graph",children:"Graph"}),"\n",(0,t.jsx)(n.mermaid,{value:"graph TD;\n  kol-tabs --\x3e kol-button-group-wc\n  kol-tabs --\x3e kol-button-wc\n  kol-button-wc --\x3e kol-span-wc\n  kol-button-wc --\x3e kol-tooltip\n  kol-span-wc --\x3e kol-icon\n  kol-tooltip --\x3e kol-span-wc\n  style kol-tabs fill:#f9f,stroke:#333,stroke-width:4px"}),"\n",(0,t.jsx)(n.hr,{})]})}function l(e={}){const{wrapper:n}={...(0,r.M)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(s,{...e})}):s(e)}var a=i(37704),d=i(54592);const o={title:"Tabs",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die Tabs-Komponente.",tags:["Tabs","Beschreibung","Spezifikation","Beispiele"]},c=void 0,h={id:"components/tabs",title:"Tabs",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die Tabs-Komponente.",source:"@site/versioned_docs/version-1.5/30-components/tabs.mdx",sourceDirName:"30-components",slug:"/components/tabs",permalink:"/en/docs/1.5/components/tabs",draft:!1,unlisted:!1,tags:[{inline:!0,label:"Tabs",permalink:"/en/docs/1.5/tags/tabs"},{inline:!0,label:"Beschreibung",permalink:"/en/docs/1.5/tags/beschreibung"},{inline:!0,label:"Spezifikation",permalink:"/en/docs/1.5/tags/spezifikation"},{inline:!0,label:"Beispiele",permalink:"/en/docs/1.5/tags/beispiele"}],version:"1.5",frontMatter:{title:"Tabs",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die Tabs-Komponente.",tags:["Tabs","Beschreibung","Spezifikation","Beispiele"]},sidebar:"tutorialSidebar",previous:{title:"Table",permalink:"/en/docs/1.5/components/table"},next:{title:"Textarea",permalink:"/en/docs/1.5/components/textarea"}},u={},b=[{value:"Konstruktion",id:"konstruktion",level:2},{value:"Code",id:"code",level:3},{value:"Beispiel",id:"beispiel",level:3},{value:"Verwendung",id:"verwendung",level:2},{value:"Definition der Registerkarten",id:"definition-der-registerkarten",level:3},{value:"Registerkarte deaktivieren",id:"registerkarte-deaktivieren",level:3},{value:"Close-Icon im Registekartenheader",id:"close-icon-im-registekartenheader",level:3},{value:"Best practices",id:"best-practices",level:3},{value:"Anwendungsf\xe4lle",id:"anwendungsf\xe4lle",level:3},{value:"Barrierefreiheit",id:"barrierefreiheit",level:2},{value:"Tastatursteuerung",id:"tastatursteuerung",level:3},{value:"Links und Referenzen",id:"links-und-referenzen",level:2},{value:"Properties",id:"properties",level:2},{value:"Dependencies",id:"dependencies",level:2},{value:"Depends on",id:"depends-on",level:3},{value:"Graph",id:"graph",level:3},{value:"Live-Editor",id:"live-editor",level:2},{value:"Beispiele",id:"beispiele",level:2}];function p(e){const n={h2:"h2",...(0,r.M)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(l,{}),"\n",(0,t.jsx)(n.h2,{id:"live-editor",children:"Live-Editor"}),"\n",(0,t.jsx)(d.o,{component:"tabs"}),"\n",(0,t.jsx)(n.h2,{id:"beispiele",children:"Beispiele"}),"\n",(0,t.jsx)(a.Q,{component:"tabs",sample:"basic"})]})}function x(e={}){const{wrapper:n}={...(0,r.M)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},37704:(e,n,i)=>{i.d(n,{Q:()=>o});var t=i(64992),r=i(80924),s=i(76776);const l=function(e,n,i,t,r){return void 0===r&&(r="editor"),`${e}&module=${t}&initialpath=%23%2F${n}%2F${i}&view=${r}`},a={width:"100%",height:"500px",border:"0",overflow:"hidden"},d=e=>{let{url:n}=e;return(0,s.jsxs)("div",{className:"m-2",children:[(0,s.jsx)("iframe",{src:n,style:a,title:"kolibri-public-ui-code-samples",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}),(0,s.jsx)(t.GQ,{_href:n,_label:"",_target:"codesandbox",children:(0,s.jsx)("img",{alt:"CodeSandbox-Schalter",src:"https://codesandbox.io/static/img/play-codesandbox.svg"})})]})},o=e=>{let{component:n,sample:i}=e;const[o,c]=(0,r.useState)("Preview"),h="https://codesandbox.io/embed/kolibri-public-ui-react-samples-w5u37c?fontsize=14&hidenavigation=1&autoresize=1&theme=dark",u=`%2Fsrc%2Fsamples%2F${n}%2F${i}`,b={angular:`${u}.html`,react:`${u}.tsx`,vue:`${u}.vue`,webcomponent:`${u}.html`},p=`/sample-react/#/${n}/${i}?hideMenus`,x={onSelect:(e,n)=>{switch(n){case 1:c((()=>"Angular"));break;case 2:c((()=>"React"));break;case 3:c((()=>"Vue"));break;case 4:c((()=>"Web Component"));break;default:c((()=>"Preview"))}}};return(0,s.jsxs)(t._,{className:"w-full",_label:"Code-Beispiel",_on:x,_tabs:[{_label:"Vorschau"},{_disabled:!0,_label:"Angular"},{_label:"React"},{_disabled:!0,_label:"Vue"},{_disabled:!0,_label:"Web Component"}],children:[(0,s.jsx)("div",{children:"Preview"===o&&(0,s.jsx)("iframe",{src:p,style:a,title:"kolibri-public-ui-code-samples",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"})}),(0,s.jsx)("div",{children:"Angular"===o&&(0,s.jsx)(d,{url:l(h,n,i,b.angular)})}),(0,s.jsx)("div",{children:"React"===o&&(0,s.jsx)(d,{url:l(h,n,i,b.react)})}),(0,s.jsx)("div",{children:"Vue"===o&&(0,s.jsx)(d,{url:l(h,n,i,b.vue)})}),(0,s.jsx)("div",{children:"Web Component"===o&&(0,s.jsx)(d,{url:l(h,n,i,b.webcomponent)})})]})}},54592:(e,n,i)=>{i.d(n,{o:()=>k});var t=i(592),r=i(64992),s=i(80924),l=i(73700),a=i(76776);function d(e){const{label:n,name:i,update:t,value:l}=e;return(0,s.useEffect)((()=>{l||t(i,"#000000")}),[]),(0,a.jsx)(r.eK,{_label:"",_on:{onInput:(e,n)=>t(i,n)},_value:l,children:(0,a.jsx)("span",{slot:"expert",children:n})})}function o(e){const{attribute:n,label:i,update:t}=e,[l,d]=(0,s.useState)(""),[o,c]=(0,s.useState)(""),[h,u]=(0,s.useState)(""),[b,p]=(0,s.useState)("");let x=!1,m=!1,g=!1,j=!1;n.type.includes("KoliBriAllIcon")?(x=!0,m=!0,g=!0,j=!0):(n.type.includes("KoliBriVerticalIcon")&&(g=!0,j=!0),n.type.includes("KoliBriHorizontalIcon")&&(x=!0,m=!0)),(0,s.useEffect)((()=>{if(!l||o||h||b){const e={};l&&(e.left=`codicon codicon-${l}`),o&&(e.right=`codicon codicon-${o}`),h&&(e.top=`codicon codicon-${h}`),b&&(e.bottom=`codicon codicon-${b}`),Object.keys(e).length&&t(n.name,JSON.stringify(e))}else t(n.name,`codicon codicon-${l}`)}),[l,o,h,b]);const f=["home","arrow-up","arrow-right","arrow-down","arrow-left"];return(0,a.jsxs)("div",{children:[i,x?(0,a.jsx)(r.Si,{_label:"Links",children:(0,a.jsx)("div",{className:"flex flex-wrap gap-2 p-2",children:f.map((e=>(0,a.jsx)(r.qC,{_icons:`codicon codicon-${e}`,_hideLabel:!0,_label:"",_on:{onClick:()=>d(e)}},e)))})}):"",m?(0,a.jsx)(r.Si,{_label:"Rechts",children:(0,a.jsx)("div",{className:"flex flex-wrap gap-2 p-2",children:f.map((e=>(0,a.jsx)(r.qC,{_icons:`codicon codicon-${e}`,_hideLabel:!0,_label:"",_on:{onClick:()=>c(e)}},e)))})}):"",g?(0,a.jsx)(r.Si,{_label:"Oben",children:(0,a.jsx)("div",{className:"flex flex-wrap gap-2 p-2",children:f.map((e=>(0,a.jsx)(r.qC,{_icons:`codicon codicon-${e}`,_hideLabel:!0,_label:"",_on:{onClick:()=>u(e)}},e)))})}):"",j?(0,a.jsx)(r.Si,{_label:"Unten",children:(0,a.jsx)("div",{className:"flex flex-wrap gap-2 p-2",children:f.map((e=>(0,a.jsx)(r.qC,{_icons:`codicon codicon-${e}`,_hideLabel:!0,_label:"",_on:{onClick:()=>p(e)}},e)))})}):""]})}function c(e){const{name:n,label:i,types:t,update:s,value:l}=e,d=[];function o(e){return{label:e,value:e}}return t.includes("undefined")?(d.push({label:"-",value:void 0}),d.push(...t.filter((e=>"undefined"!==e)).map(o))):d.push(...t.filter((e=>"undefined"!==e)).map(o)),(0,a.jsx)(r.qy,{className:"my-2",_label:"",_options:JSON.stringify(d),_on:{onInput:(e,i)=>s(n,i[0])},_value:l?[l]:void 0,children:(0,a.jsx)("span",{slot:"expert",children:i})})}function h(e){const{attribute:n,update:i,value:t}=e,l=(0,s.useMemo)((()=>{let e=n.type.replace(/\\?"/g,"").split(" | ");return e=e.filter((e=>"KoliBriAllIcon ignorieren"!==e)),1===e.length?e[0]:e.includes("string")?"string":e.includes("number")?"number":e.includes("boolean")?"boolean":""}),[n]),h=(0,s.useMemo)((()=>{const e=n.type.split(" | ").map((e=>e.replace(/\\?"/g,""))),s=(0,a.jsx)(r.s1,{_label:n.description,children:n.name});switch(n.name){case"_color":return(0,a.jsx)(d,{name:n.name,label:s,update:i,value:t});case"_icons":return(0,a.jsx)(o,{attribute:n,label:s,update:i,value:t});default:switch(l){case"string":return(0,a.jsx)(r.Uh,{className:"my-2",_label:"",_on:{onInput:(e,t)=>i(n.name,t)},_value:t||"",children:(0,a.jsx)("span",{slot:"expert",children:s})});case"number":return(0,a.jsx)(r.QL,{className:"my-2",_label:"",_on:{onInput:(e,t)=>i(n.name,t)},_value:t,children:(0,a.jsx)("span",{slot:"expert",children:s})});case"boolean":return(0,a.jsx)(r.Q7,{className:"my-2",_checked:!0===t,_label:"",_on:{onInput:(e,t)=>i(n.name,t)},_variant:"switch",_value:!0,children:(0,a.jsx)("span",{slot:"expert",children:s})});default:return e.length>1?(0,a.jsx)(c,{label:s,name:n.name,types:e,update:i,value:t}):(0,a.jsxs)("p",{children:["Attribut: '",n.name,"'",(0,a.jsx)("br",{}),"Typ: '",n.type,"'"]})}}}),[n,t]);return(0,a.jsx)(a.Fragment,{children:h})}var u=i(63136),b=i(28256),p=i(39452),x=i.n(p);function m(e){const{tag:n,params:i}=e,t=Object.entries(i).filter((e=>"defaultValues"!==e[0]));let r="";const l=(0,s.useMemo)((()=>{let e="";return t.filter((e=>e[0].startsWith("slot-"))).forEach((n=>{const i=n[1],t=n[0].split("-")[1];if(i)if(i.match(/^<.*?>/)?.length){const n=i.indexOf(">");e+=i.substring(0,n)+` slot="${t}"`+i.substring(n)}else e+=`<div slot="${t}">${i}</div>`})),e}),[i]),d=t.filter((e=>!e[0].startsWith("slot-"))).filter((e=>!i.defaultValues.includes(e[0])));for(const[s,a]of d)if(a){let e="";switch(typeof a){case"string":e=` ${s}="${a.replace(/"/g,"'")}"`;break;case"number":e=` ${s}="${a.toString()}"`;break;case"boolean":e=a?` ${s}`:"";break;case"object":e=` ${s}="${JSON.stringify(a)}"`;break;default:e="Never give up hope, one day everything will be fixed."}r+=e}const o=`<kol-${n}${r}>${l}</kol-${n}>`;let c;try{c=(0,b.format)(o,{plugins:[x()],printWidth:80}).replace(/;\n$/,"")}catch(h){c=`\x3c!-- Formatter-Error: Slot-Markup is not valid HTML for formatting. --\x3e\n${o}`}return(0,a.jsx)("div",{className:"h-48 rounded-md overflow-hidden",children:(0,a.jsx)(u.cp,{defaultLanguage:"html",height:"100%",options:{automaticLayout:!0,fontSize:16,lineNumbers:"off",readOnly:!0},value:c})})}function g(e){const n=Object.fromEntries(Object.entries(e.params).filter((e=>{let[n]=e;return!n.startsWith("slot-")}))),i=Object.entries(e.params).filter((e=>{let[n]=e;return n.startsWith("slot-")})),t={abbr:r.s1,accordion:r.IP,alert:r.mW,avatar:r.aq,badge:r.cX,breadcrumb:r.If,button:r.qC,"button-group":r.Os,"button-link":r.u_,card:r.Yh,details:r.Si,form:r.OO,heading:r.ch,icon:r.SA,image:r.iu,"indented-text":r.MV,"input-checkbox":r.Q7,"input-color":r.eK,"input-date":r.QZ,"input-email":r.kN,"input-file":r.Ex,"input-number":r.QL,"input-password":r.EH,"input-radio":r.wJ,"input-range":r.Ef,"input-text":r.Uh,kolibri:r.aY,link:r.GQ,"link-button":r._k,"link-group":r.O_,logo:r.ae,modal:r.cT,nav:r.Y4,pagination:r.kj,progress:r.O0,quote:r.SY,select:r.qy,"skip-nav":r.Ig,spin:r.kP,"split-button":r.a,symbol:r.OM,table:r.Y9,tabs:r._,textarea:r.DG,version:r.k1}[e.tag];return t?(0,a.jsx)(t,{...n,children:i.map((e=>(0,a.jsx)("div",{slot:e[0].replace("slot-","").replace("default",""),dangerouslySetInnerHTML:{__html:e[1]}},e[0])))}):(0,a.jsx)("div",{children:"Tag not implemented"})}function j(e){const{description:n,name:i,update:t,value:r}=e;return(0,a.jsxs)("div",{className:"bg-gray-100 my-2 rounded-lg p-2 border border-gray-300 border-solid",children:[(0,a.jsx)("b",{children:i||"default"}),": ",n,(0,a.jsx)("br",{}),(0,a.jsx)(u.GW,{defaultLanguage:"html",height:"5em",onChange:e=>t(`slot-${i}`,e||""),options:{automaticLayout:!0,fontSize:16,lineNumbers:"off"},value:r})]})}const f=["_smart-button","_icon-align"],v={abbr:{"slot-default":"Abbr"},accordion:{"slot-default":"Accordion content"},tabs:{_tabs:'[{"_label":"Tab 1"},{"_label":"Tab 2", "_on": {"onClose": true} },{"_label":"Tab 3"}]'},breadcrumb:{_links:"[{'_label':'Startseite','_href':'#/'},{'_label':'Unterseite der Startseite','_href':'#/unterseite'},{'_label':'Unterseite der Unterseite','_href':'#/unterseite/unterseite'}]"},form:{"_required-text":"Bitte alle Felder ausf\xfcllen."},image:{_src:"https://placehold.co/100x100/cc006e/white"},"link-group":{_links:"[{'_label':'Startseite','_href':'#/'},{'_label':'Unterseite der Startseite','_href':'#/unterseite'},{'_label':'Unterseite der Unterseite','_href':'#/unterseite/unterseite'}]"},nav:{_links:"[{'_label':'Startseite','_href':'#/'},{'_label':'Unterseite der Startseite','_href':'#/unterseite'},{'_label':'Unterseite der Unterseite','_href':'#/unterseite/unterseite'}]"},pagination:{_total:"100",_page:"6"},quote:{_quote:"Hello World"},select:{_options:"[{'label':'Herr','value':0},{'label':'Frau','value':1}]"},"skip-nav":{_links:"[{'_label':'Navigation','_href':'#nav'},{'_label':'Inhalt','_href':'#main'},{'_label':'Kontakt','_href':'#kontakt'},{'_label':'Links','_href':'#links'}]"},table:{_headers:'{"horizontal":[[{"label":"Montag","key":"montag"}]]}',_data:'[{"montag":"Zelle1"},{"montag":"Zelle2"}]',_pagination:'{"page":2}'}};function k(e){const[n,i]=(0,s.useState)(function(){const e={};return Object.values(t.Q).forEach((n=>{const i=n.name.replace("kol-","");e[i]={defaultValues:[]},n.attributes.forEach((n=>{void 0!==n.defaultValue&&(e[i][n.name]=n.defaultValue.replace(/'/g,""),e[i].defaultValues.push(n.name)),void 0!==v[i]?.[n.name]&&(e[i][n.name]=v[i][n.name])})),n.slots.forEach((n=>{const t=`slot-${n.name||"default"}`,r=v[i]?.[t];r&&(e[i][t]=r)}))})),e}()),[d,o]=(0,s.useState)("badge");(0,s.useEffect)((()=>{e.component&&o(e.component.replace("kol-",""))}),[e.component]),(0,s.useEffect)((()=>{!!t.Q.find((e=>e.name===`kol-${d}`))?.attributes.find((e=>"_label"===e.name))&&!n[d]?._label&&u("_label","Label-Text");!!t.Q.find((e=>e.name===`kol-${d}`))?.attributes.find((e=>"_heading"===e.name))&&!n[d]?._heading&&u("_heading","Heading-Text")}),[d]);const c=(0,s.useMemo)((()=>n[d]||{}),[n,d]);function u(e,n){i((i=>{const t={...i[d],[e]:n,defaultValues:i[d].defaultValues.filter((n=>n!==e))};return{...i,[d]:t}}))}const b=Object.values(t.Q).find((e=>e.name===`kol-${d}`));return(0,a.jsx)(l.c,{children:()=>(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(r.cX,{class:"mb-2",_label:"Beta",_color:"#b00"}),(0,a.jsxs)("div",{className:"grid lg:grid-cols-3 gap-2",children:[(0,a.jsxs)(r._,{className:"col-span-2",_label:"Wechselnavigation zwischen Viewer und Code",_tabs:[{_label:"Viewer"},{_label:"Code"}],children:[(0,a.jsx)("div",{className:"p-2",children:(0,a.jsx)(g,{tag:d,params:c})}),(0,a.jsx)("div",{className:"lg:col-span-2",children:(0,a.jsx)(m,{params:c,tag:d})})]}),(0,a.jsxs)("div",{className:"grid gap-4 p-2 border-0 border-l border-solid",children:[(0,a.jsx)(r.ch,{_level:3,_label:"Konfigurator"}),(0,a.jsxs)("div",{children:[(0,a.jsx)(r.ch,{_level:4,_label:"Properties"}),(0,a.jsxs)("div",{className:"max-h-96 p-2 overflow-auto mb-4",children:[b&&b.attributes.map((e=>(0,a.jsx)(a.Fragment,{children:!f.includes(e.name)&&!e.description.startsWith("Deprecated:")&&(0,a.jsx)(h,{attribute:e,update:u,value:c[e.name]},e.name)}))),b&&0===b.attributes.length&&(0,a.jsx)("span",{className:"text-gray-500",children:"Keine Properties vorhanden"})]}),(0,a.jsx)(r.ch,{_level:4,_label:"Slots"}),(0,a.jsxs)("div",{className:"max-h-56 p-2 overflow-auto",children:[b&&b.slots.map((e=>(0,a.jsx)(j,{description:e.description,name:e.name||"default",update:u,value:c["slot-"+(e.name||"default")]},e.name))),b&&0===b.slots.length&&(0,a.jsx)("span",{className:"text-gray-500",children:"Keine Slots vorhanden"})]})]})]})]})]})})}}}]);