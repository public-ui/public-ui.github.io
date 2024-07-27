"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[40930],{10744:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>u,contentTitle:()=>c,default:()=>b,frontMatter:()=>d,metadata:()=>h,toc:()=>m});var t=i(76776),r=i(108);function s(e){const n={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",hr:"hr",li:"li",mermaid:"mermaid",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.M)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["Die ",(0,t.jsx)(n.strong,{children:"Accordion"}),"-Komponente ist ein Aufklapp-Men\xfc. Klickt man auf den Kopfbereich, bestehend aus Icon und \xdcberschrift, klappt der Inhalt mit zus\xe4tzlichen Informationen auf. Somit ist es ein interaktives Navigationselement, welches dazu dient, umfangreiche Inhalte platzsparend darzustellen."]}),"\n",(0,t.jsxs)(n.p,{children:["Accordions kommen immer dann zum Einsatz, wenn einem thematischen Oberbegriff zugeordnete Inhalte angezeigt oder verborgen werden sollen. Sie erlauben umfangreichere Detailinformationen zu einem Oberbegriff, als es aus Gr\xfcnden der \xdcbersichtlichkeit eigentlich sinnvoll w\xe4re. Sie \xfcberlassen es den Besucher",":innen"," selbst, ob sie sich diese Informationen anzeigen lassen m\xf6chten."]}),"\n",(0,t.jsx)(n.h2,{id:"konstruktion",children:"Konstruktion"}),"\n",(0,t.jsx)(n.h3,{id:"code",children:"Code"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-html",children:'<div className="grid gap-2">\n\t<kol-accordion _heading="Element 1">\n\t\t<div slot="content">\n\t\t\tLorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam\n\t\t\tvoluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.\n\t\t\tLorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam\n\t\t\tvoluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.\n\t\t</div>\n\t\t<div slot="header">Inhalt eines Header</div>\n\t</kol-accordion>\n\t<kol-accordion _heading="Element 2">\n\t\t<div slot="header">Inhalt im Header</div>\n\t\t<div slot="content">\n\t\t\tLorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam\n\t\t\tvoluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.\n\t\t\tLorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam\n\t\t\tvoluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.\n\t\t</div>\n\t\t<div slot="footer">Inhalt im Footer</div>\n\t</kol-accordion>\n</div>\n'})}),"\n",(0,t.jsx)(n.h3,{id:"beispiel",children:"Beispiel"}),"\n",(0,t.jsxs)("div",{className:"grid gap-2",children:[(0,t.jsxs)("kol-accordion",{_heading:"Element 1",children:[(0,t.jsx)("div",{slot:"content",children:(0,t.jsx)(n.p,{children:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam\nvoluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.\nLorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam\nvoluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."})}),(0,t.jsx)("div",{slot:"header",children:"Inhalt eines Header"})]}),(0,t.jsxs)("kol-accordion",{_heading:"Element 2",children:[(0,t.jsx)("div",{slot:"header",children:"Inhalt im Header"}),(0,t.jsx)("div",{slot:"content",children:(0,t.jsx)(n.p,{children:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam\nvoluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.\nLorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam\nvoluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."})}),(0,t.jsx)("div",{slot:"footer",children:"Inhalt im Footer"})]})]}),"\n",(0,t.jsx)(n.h2,{id:"verwendung",children:"Verwendung"}),"\n",(0,t.jsx)(n.h3,{id:"\xfcberschrift-im-accordion-tab",children:"\xdcberschrift im Accordion-Tab"}),"\n",(0,t.jsxs)(n.p,{children:["Der Text, der als \xdcberschrift im Accordion-Tab angezeigt werden soll, wird durch das Attribut ",(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"_heading"})})," \xfcbergeben. Der Text kann neben Sonderzeichen auch Umlaute oder Leerzeichen enthalten."]}),"\n",(0,t.jsx)(n.h3,{id:"\xfcberschriftenebene",children:"\xdcberschriftenebene"}),"\n",(0,t.jsxs)(n.p,{children:["Die \xdcberschriftenebene wird durch das Attribut ",(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"_level"})})," \xfcbergeben. M\xf6glich sind die Level ",(0,t.jsx)(n.strong,{children:"1"})," bis ",(0,t.jsx)(n.strong,{children:"6"})]}),"\n",(0,t.jsx)(n.h3,{id:"inhalt-im-kopfbereich-des-accordion",children:"Inhalt im Kopfbereich des Accordion"}),"\n",(0,t.jsx)(n.p,{children:"Ein optisch abgetrennter Inhalt im Kopfbereich des Accordions wird \xfcber einen eigenen Slot \xfcbergeben. Gibt es diesen Slot nicht oder wird er leer \xfcbergeben, ist der Kopfbereich nicht sichtbar."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:'<div slot="header">Inhalt im Kopfbereich</div>'})})}),"\n",(0,t.jsx)(n.h3,{id:"inhalt-des-accordion",children:"Inhalt des Accordion"}),"\n",(0,t.jsx)(n.p,{children:"Der Hauptinhalt des Accordions wird \xfcber einen eigenen Slot \xfcbergeben."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:'<div slot="content">Inhalt im Kopfbereich</div>'})})}),"\n",(0,t.jsx)(n.h3,{id:"accordion-ge\xf6ffnet-anzeigen",children:"Accordion ge\xf6ffnet anzeigen"}),"\n",(0,t.jsx)(n.p,{children:"Standardm\xe4\xdfig wird das Accordion nach dem Laden der Seite im geschlossenen Zustand angezeigt. Soll das Accordion ge\xf6ffnet angezeigt werden, setzen Sie das Attribut ** _open** zus\xe4tzlich ein."}),"\n",(0,t.jsx)(n.h3,{id:"best-practices",children:"Best practices"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Verwenden Sie ein Accordion, um lange Textabschnitte unter einem thematischen Oberbegriff zusammenzufassen"}),"\n",(0,t.jsx)(n.li,{children:"Verwenden Sie ein Accordion, um weniger wichtige Informationen, als Erg\xe4nzung zu Hauptinformationen, zur Verf\xfcgung zu stellen."}),"\n",(0,t.jsxs)(n.li,{children:["Mit einem Accordion k\xf6nnen Sie die L\xe4nge Ihrer Webseite deutlich reduzieren und stellen gleichzeitig die Erreichbarkeit aller Informationen f\xfcr die Nutzer",":innen"," sicher."]}),"\n",(0,t.jsxs)(n.li,{children:["Verwenden Sie eindeutige \xdcberschriften, um die Nutzer",":innen"," auf die weiteren Informationen des Accordions hinzuweisen."]}),"\n",(0,t.jsxs)(n.li,{children:["Vermeiden Sie, wichtige ",(0,t.jsx)(n.code,{children:"Call-To-Action"}),"-Elemente innerhalb eines Accordions zu verbergen."]}),"\n",(0,t.jsxs)(n.li,{children:["Lassen Sie Fehlermeldungen nicht innerhalb des Accordions anzeigen, um zu vermeiden, dass Nutzer",":innen"," wichtige Informationen \xfcbersehen."]}),"\n",(0,t.jsxs)(n.li,{children:["Verwenden Sie ein Accordion nicht als Auswahl-Element f\xfcr Nutzer",":innen","."]}),"\n",(0,t.jsx)(n.li,{children:"Verwenden Sie ein Accordion nicht, um wichtige Informationen zu rechtlichen Angaben oder zum Datenschutz anzuzeigen."}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"anwendungsf\xe4lle",children:"Anwendungsf\xe4lle"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"H\xe4ufig gestellte Fragen (FAQ)"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"barrierefreiheit",children:"Barrierefreiheit"}),"\n",(0,t.jsxs)(n.p,{children:["In der ",(0,t.jsx)(n.strong,{children:"Accordion"}),"-Komponente wird das \xd6ffnen-/Schlie\xdfen-Icon links ausgerichtet, um Nutzer",":innen"," mit eingeschr\xe4nktem Sichtfeld eine bessere Bedienbarkeit zu erm\xf6glichen."]}),"\n",(0,t.jsxs)(n.p,{children:["Es wurde bewusst auf die Verwendung von Icons, wie z.B. ",(0,t.jsx)(n.code,{children:"<"})," oder ",(0,t.jsx)(n.code,{children:">"})," verzichtet. Die Verwendung der Icons ",(0,t.jsx)(n.code,{children:"+"})," und ",(0,t.jsx)(n.code,{children:"-"})," gew\xe4hrleistet eine bessere Sicht- und Erkennbarkeit bez\xfcglich des Ge\xf6ffnet- und Geschlossen-Status."]}),"\n",(0,t.jsx)(n.p,{children:"Bei der farblichen Gestaltung wurde besonders Wert auf einen h\xf6chstm\xf6glichen Kontrast in der\nStandardansicht gelegt."}),"\n",(0,t.jsx)(n.h3,{id:"tastatursteuerung",children:"Tastatursteuerung"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Taste"}),(0,t.jsx)(n.th,{children:"Funktion"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"Tab"})}),(0,t.jsx)(n.td,{children:"Springt die einzelnen Accordion-Tabs an."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"Enter"})}),(0,t.jsx)(n.td,{children:"\xd6ffnet bzw. schlie\xdft den fokussierten Accordion-Tab."})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"links-und-referenzen",children:"Links und Referenzen"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://www.w3.org/TR/wai-aria-practices/#accordion",children:"https://www.w3.org/TR/wai-aria-practices/#accordion"})}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Property"}),(0,t.jsx)(n.th,{children:"Attribute"}),(0,t.jsx)(n.th,{children:"Description"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Default"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:"_heading"})," ",(0,t.jsx)(n.em,{children:"(required)"})]}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"_heading"})}),(0,t.jsx)(n.td,{children:"Gibt die \xdcberschrift des Accordions an."}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"string"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"undefined"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"_level"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"_level"})}),(0,t.jsx)(n.td,{children:"Setzt den H-Level, von 1 bis 6, der \xdcberschrift."}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:"0"})," | ",(0,t.jsx)(n.code,{children:"1"})," | ",(0,t.jsx)(n.code,{children:"2"})," | ",(0,t.jsx)(n.code,{children:"3"})," | ",(0,t.jsx)(n.code,{children:"4"})," | ",(0,t.jsx)(n.code,{children:"5"})," | ",(0,t.jsx)(n.code,{children:"6"})," | ",(0,t.jsx)(n.code,{children:"undefined"})]}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"1"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"_on"})}),(0,t.jsx)(n.td,{children:"--"}),(0,t.jsx)(n.td,{children:"Gibt die EventCallback-Funktionen an."}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:"undefined"})," | ",(0,t.jsx)(n.code,{children:"{ onClick?: EventValueOrEventCallback<Event, boolean>"})," | ",(0,t.jsx)(n.code,{children:"undefined; }"})]}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"undefined"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"_open"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"_open"})}),(0,t.jsx)(n.td,{children:"Gibt an, ob das Accordion ge\xf6ffnet ist."}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:"boolean"})," | ",(0,t.jsx)(n.code,{children:"undefined"})]}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"false"})})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"slots",children:"Slots"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Slot"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"Erm\xf6glicht das Einf\xfcgen beliebigen HTML's in den Inhaltsbereich des Accordions."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:'"content"'})}),(0,t.jsx)(n.td,{children:"Erm\xf6glicht das Einf\xfcgen beliebigen HTML's in den Inhaltsbereich des Accordions."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:'"header"'})}),(0,t.jsx)(n.td,{children:"Deprecated f\xfcr Version 2: Erm\xf6glicht das Einf\xfcgen beliebigen HTML's in den Kopfbereich des Accordions."})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"dependencies",children:"Dependencies"}),"\n",(0,t.jsx)(n.h3,{id:"depends-on",children:"Depends on"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"./heading",children:"kol-heading-wc"})}),"\n",(0,t.jsx)(n.li,{children:"kol-button-wc"}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"graph",children:"Graph"}),"\n",(0,t.jsx)(n.mermaid,{value:"graph TD;\n  kol-accordion --\x3e kol-heading-wc\n  kol-accordion --\x3e kol-button-wc\n  kol-button-wc --\x3e kol-span-wc\n  kol-button-wc --\x3e kol-tooltip\n  kol-span-wc --\x3e kol-icon\n  kol-tooltip --\x3e kol-span-wc\n  style kol-accordion fill:#f9f,stroke:#333,stroke-width:4px"}),"\n",(0,t.jsx)(n.hr,{})]})}function l(e={}){const{wrapper:n}={...(0,r.M)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(s,{...e})}):s(e)}var a=i(37704),o=i(54592);const d={title:"Accordion",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die Accordion-Komponente.",tags:["Accordion","Beschreibung","Spezifikation","Beispiele"]},c=void 0,h={id:"components/accordion",title:"Accordion",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die Accordion-Komponente.",source:"@site/versioned_docs/version-1.5/30-components/accordion.mdx",sourceDirName:"30-components",slug:"/components/accordion",permalink:"/docs/1.5/components/accordion",draft:!1,unlisted:!1,tags:[{inline:!0,label:"Accordion",permalink:"/docs/1.5/tags/accordion"},{inline:!0,label:"Beschreibung",permalink:"/docs/1.5/tags/beschreibung"},{inline:!0,label:"Spezifikation",permalink:"/docs/1.5/tags/spezifikation"},{inline:!0,label:"Beispiele",permalink:"/docs/1.5/tags/beispiele"}],version:"1.5",frontMatter:{title:"Accordion",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die Accordion-Komponente.",tags:["Accordion","Beschreibung","Spezifikation","Beispiele"]},sidebar:"tutorialSidebar",previous:{title:"Abbr",permalink:"/docs/1.5/components/abbr"},next:{title:"Alert",permalink:"/docs/1.5/components/alert"}},u={},m=[{value:"Konstruktion",id:"konstruktion",level:2},{value:"Code",id:"code",level:3},{value:"Beispiel",id:"beispiel",level:3},{value:"Verwendung",id:"verwendung",level:2},{value:"\xdcberschrift im Accordion-Tab",id:"\xfcberschrift-im-accordion-tab",level:3},{value:"\xdcberschriftenebene",id:"\xfcberschriftenebene",level:3},{value:"Inhalt im Kopfbereich des Accordion",id:"inhalt-im-kopfbereich-des-accordion",level:3},{value:"Inhalt des Accordion",id:"inhalt-des-accordion",level:3},{value:"Accordion ge\xf6ffnet anzeigen",id:"accordion-ge\xf6ffnet-anzeigen",level:3},{value:"Best practices",id:"best-practices",level:3},{value:"Anwendungsf\xe4lle",id:"anwendungsf\xe4lle",level:3},{value:"Barrierefreiheit",id:"barrierefreiheit",level:2},{value:"Tastatursteuerung",id:"tastatursteuerung",level:3},{value:"Links und Referenzen",id:"links-und-referenzen",level:2},{value:"Properties",id:"properties",level:2},{value:"Slots",id:"slots",level:2},{value:"Dependencies",id:"dependencies",level:2},{value:"Depends on",id:"depends-on",level:3},{value:"Graph",id:"graph",level:3},{value:"Live-Editor",id:"live-editor",level:2},{value:"Beispiele",id:"beispiele",level:2},{value:"Einfache Accordions",id:"einfache-accordions",level:3},{value:"Accordions mit \xdcberschriften",id:"accordions-mit-\xfcberschriften",level:3},{value:"Accordions mit Header-Slot",id:"accordions-mit-header-slot",level:3}];function p(e){const n={h2:"h2",h3:"h3",...(0,r.M)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(l,{}),"\n",(0,t.jsx)(n.h2,{id:"live-editor",children:"Live-Editor"}),"\n",(0,t.jsx)(o.o,{component:"accordion"}),"\n",(0,t.jsx)(n.h2,{id:"beispiele",children:"Beispiele"}),"\n",(0,t.jsx)(n.h3,{id:"einfache-accordions",children:"Einfache Accordions"}),"\n",(0,t.jsx)(a.Q,{component:"accordion",sample:"basic"}),"\n",(0,t.jsx)(n.h3,{id:"accordions-mit-\xfcberschriften",children:"Accordions mit \xdcberschriften"}),"\n",(0,t.jsx)(a.Q,{component:"accordion",sample:"headlines"}),"\n",(0,t.jsx)(n.h3,{id:"accordions-mit-header-slot",children:"Accordions mit Header-Slot"}),"\n",(0,t.jsx)(a.Q,{component:"accordion",sample:"header"})]})}function b(e={}){const{wrapper:n}={...(0,r.M)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},37704:(e,n,i)=>{i.d(n,{Q:()=>d});var t=i(33920),r=i(80924),s=i(76776);const l=function(e,n,i,t,r){return void 0===r&&(r="editor"),`${e}&module=${t}&initialpath=%23%2F${n}%2F${i}&view=${r}`},a={width:"100%",height:"500px",border:"0",overflow:"hidden"},o=e=>{let{url:n}=e;return(0,s.jsxs)("div",{className:"m-2",children:[(0,s.jsx)("iframe",{src:n,style:a,title:"kolibri-public-ui-code-samples",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}),(0,s.jsx)(t.GQ,{_href:n,_label:"",_target:"codesandbox",children:(0,s.jsx)("img",{alt:"CodeSandbox-Schalter",src:"https://codesandbox.io/static/img/play-codesandbox.svg"})})]})},d=e=>{let{component:n,sample:i}=e;const[d,c]=(0,r.useState)("Preview"),h="https://codesandbox.io/embed/kolibri-public-ui-react-samples-w5u37c?fontsize=14&hidenavigation=1&autoresize=1&theme=dark",u=`%2Fsrc%2Fsamples%2F${n}%2F${i}`,m={angular:`${u}.html`,react:`${u}.tsx`,vue:`${u}.vue`,webcomponent:`${u}.html`},p=`/sample-react/#/${n}/${i}?hideMenus`,b={onSelect:(e,n)=>{switch(n){case 1:c((()=>"Angular"));break;case 2:c((()=>"React"));break;case 3:c((()=>"Vue"));break;case 4:c((()=>"Web Component"));break;default:c((()=>"Preview"))}}};return(0,s.jsxs)(t._,{className:"w-full",_label:"Code-Beispiel",_on:b,_tabs:[{_label:"Vorschau"},{_disabled:!0,_label:"Angular"},{_label:"React"},{_disabled:!0,_label:"Vue"},{_disabled:!0,_label:"Web Component"}],children:[(0,s.jsx)("div",{children:"Preview"===d&&(0,s.jsx)("iframe",{src:p,style:a,title:"kolibri-public-ui-code-samples",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"})}),(0,s.jsx)("div",{children:"Angular"===d&&(0,s.jsx)(o,{url:l(h,n,i,m.angular)})}),(0,s.jsx)("div",{children:"React"===d&&(0,s.jsx)(o,{url:l(h,n,i,m.react)})}),(0,s.jsx)("div",{children:"Vue"===d&&(0,s.jsx)(o,{url:l(h,n,i,m.vue)})}),(0,s.jsx)("div",{children:"Web Component"===d&&(0,s.jsx)(o,{url:l(h,n,i,m.webcomponent)})})]})}},54592:(e,n,i)=>{i.d(n,{o:()=>k});var t=i(52266),r=i(33920),s=i(80924),l=i(73700),a=i(76776);function o(e){const{label:n,name:i,update:t,value:l}=e;return(0,s.useEffect)((()=>{l||t(i,"#000000")}),[]),(0,a.jsx)(r.eK,{_label:"",_on:{onInput:(e,n)=>t(i,n)},_value:l,children:(0,a.jsx)("span",{slot:"expert",children:n})})}function d(e){const{attribute:n,label:i,update:t}=e,[l,o]=(0,s.useState)(""),[d,c]=(0,s.useState)(""),[h,u]=(0,s.useState)(""),[m,p]=(0,s.useState)("");let b=!1,x=!1,g=!1,j=!1;n.type.includes("KoliBriAllIcon")?(b=!0,x=!0,g=!0,j=!0):(n.type.includes("KoliBriVerticalIcon")&&(g=!0,j=!0),n.type.includes("KoliBriHorizontalIcon")&&(b=!0,x=!0)),(0,s.useEffect)((()=>{if(!l||d||h||m){const e={};l&&(e.left=`codicon codicon-${l}`),d&&(e.right=`codicon codicon-${d}`),h&&(e.top=`codicon codicon-${h}`),m&&(e.bottom=`codicon codicon-${m}`),Object.keys(e).length&&t(n.name,JSON.stringify(e))}else t(n.name,`codicon codicon-${l}`)}),[l,d,h,m]);const f=["home","arrow-up","arrow-right","arrow-down","arrow-left"];return(0,a.jsxs)("div",{children:[i,b?(0,a.jsx)(r.Si,{_label:"Links",children:(0,a.jsx)("div",{className:"flex flex-wrap gap-2 p-2",children:f.map((e=>(0,a.jsx)(r.qC,{_icons:`codicon codicon-${e}`,_hideLabel:!0,_label:"",_on:{onClick:()=>o(e)}},e)))})}):"",x?(0,a.jsx)(r.Si,{_label:"Rechts",children:(0,a.jsx)("div",{className:"flex flex-wrap gap-2 p-2",children:f.map((e=>(0,a.jsx)(r.qC,{_icons:`codicon codicon-${e}`,_hideLabel:!0,_label:"",_on:{onClick:()=>c(e)}},e)))})}):"",g?(0,a.jsx)(r.Si,{_label:"Oben",children:(0,a.jsx)("div",{className:"flex flex-wrap gap-2 p-2",children:f.map((e=>(0,a.jsx)(r.qC,{_icons:`codicon codicon-${e}`,_hideLabel:!0,_label:"",_on:{onClick:()=>u(e)}},e)))})}):"",j?(0,a.jsx)(r.Si,{_label:"Unten",children:(0,a.jsx)("div",{className:"flex flex-wrap gap-2 p-2",children:f.map((e=>(0,a.jsx)(r.qC,{_icons:`codicon codicon-${e}`,_hideLabel:!0,_label:"",_on:{onClick:()=>p(e)}},e)))})}):""]})}function c(e){const{name:n,label:i,types:t,update:s,value:l}=e,o=[];function d(e){return{label:e,value:e}}return t.includes("undefined")?(o.push({label:"-",value:void 0}),o.push(...t.filter((e=>"undefined"!==e)).map(d))):o.push(...t.filter((e=>"undefined"!==e)).map(d)),(0,a.jsx)(r.qy,{className:"my-2",_label:"",_options:JSON.stringify(o),_on:{onInput:(e,i)=>s(n,i[0])},_value:l?[l]:void 0,children:(0,a.jsx)("span",{slot:"expert",children:i})})}function h(e){const{attribute:n,update:i,value:t}=e,l=(0,s.useMemo)((()=>{let e=n.type.replace(/\\?"/g,"").split(" | ");return e=e.filter((e=>"KoliBriAllIcon ignorieren"!==e)),1===e.length?e[0]:e.includes("string")?"string":e.includes("number")?"number":e.includes("boolean")?"boolean":""}),[n]),h=(0,s.useMemo)((()=>{const e=n.type.split(" | ").map((e=>e.replace(/\\?"/g,""))),s=(0,a.jsx)(r.s1,{_label:n.description,children:n.name});switch(n.name){case"_color":return(0,a.jsx)(o,{name:n.name,label:s,update:i,value:t});case"_icons":return(0,a.jsx)(d,{attribute:n,label:s,update:i,value:t});default:switch(l){case"string":return(0,a.jsx)(r.Uh,{className:"my-2",_label:"",_on:{onInput:(e,t)=>i(n.name,t)},_value:t||"",children:(0,a.jsx)("span",{slot:"expert",children:s})});case"number":return(0,a.jsx)(r.QL,{className:"my-2",_label:"",_on:{onInput:(e,t)=>i(n.name,t)},_value:t,children:(0,a.jsx)("span",{slot:"expert",children:s})});case"boolean":return(0,a.jsx)(r.Q7,{className:"my-2",_checked:!0===t,_label:"",_on:{onInput:(e,t)=>i(n.name,t)},_variant:"switch",_value:!0,children:(0,a.jsx)("span",{slot:"expert",children:s})});default:return e.length>1?(0,a.jsx)(c,{label:s,name:n.name,types:e,update:i,value:t}):(0,a.jsxs)("p",{children:["Attribut: '",n.name,"'",(0,a.jsx)("br",{}),"Typ: '",n.type,"'"]})}}}),[n,t]);return(0,a.jsx)(a.Fragment,{children:h})}var u=i(63136),m=i(28256),p=i(39452),b=i.n(p);function x(e){const{tag:n,params:i}=e,t=Object.entries(i).filter((e=>"defaultValues"!==e[0]));let r="";const l=(0,s.useMemo)((()=>{let e="";return t.filter((e=>e[0].startsWith("slot-"))).forEach((n=>{const i=n[1],t=n[0].split("-")[1];if(i)if(i.match(/^<.*?>/)?.length){const n=i.indexOf(">");e+=i.substring(0,n)+` slot="${t}"`+i.substring(n)}else e+=`<div slot="${t}">${i}</div>`})),e}),[i]),o=t.filter((e=>!e[0].startsWith("slot-"))).filter((e=>!i.defaultValues.includes(e[0])));for(const[s,a]of o)if(a){let e="";switch(typeof a){case"string":e=` ${s}="${a.replace(/"/g,"'")}"`;break;case"number":e=` ${s}="${a.toString()}"`;break;case"boolean":e=a?` ${s}`:"";break;case"object":e=` ${s}="${JSON.stringify(a)}"`;break;default:e="Never give up hope, one day everything will be fixed."}r+=e}const d=`<kol-${n}${r}>${l}</kol-${n}>`;let c;try{c=(0,m.format)(d,{plugins:[b()],printWidth:80}).replace(/;\n$/,"")}catch(h){c=`\x3c!-- Formatter-Error: Slot-Markup is not valid HTML for formatting. --\x3e\n${d}`}return(0,a.jsx)("div",{className:"h-48 rounded-md overflow-hidden",children:(0,a.jsx)(u.cp,{defaultLanguage:"html",height:"100%",options:{automaticLayout:!0,fontSize:16,lineNumbers:"off",readOnly:!0},value:c})})}function g(e){const n=Object.fromEntries(Object.entries(e.params).filter((e=>{let[n]=e;return!n.startsWith("slot-")}))),i=Object.entries(e.params).filter((e=>{let[n]=e;return n.startsWith("slot-")})),t={abbr:r.s1,accordion:r.IP,alert:r.mW,avatar:r.aq,badge:r.cX,breadcrumb:r.If,button:r.qC,"button-group":r.Os,"button-link":r.u_,card:r.Yh,details:r.Si,form:r.OO,heading:r.ch,icon:r.SA,image:r.iu,"indented-text":r.MV,"input-checkbox":r.Q7,"input-color":r.eK,"input-date":r.QZ,"input-email":r.kN,"input-file":r.Ex,"input-number":r.QL,"input-password":r.EH,"input-radio":r.wJ,"input-range":r.Ef,"input-text":r.Uh,kolibri:r.aY,link:r.GQ,"link-button":r._k,"link-group":r.O_,logo:r.ae,modal:r.cT,nav:r.Y4,pagination:r.kj,progress:r.O0,quote:r.SY,select:r.qy,"skip-nav":r.Ig,spin:r.kP,"split-button":r.a,symbol:r.OM,table:r.Y9,tabs:r._,textarea:r.DG,version:r.k1}[e.tag];return t?(0,a.jsx)(t,{...n,children:i.map((e=>(0,a.jsx)("div",{slot:e[0].replace("slot-","").replace("default",""),dangerouslySetInnerHTML:{__html:e[1]}},e[0])))}):(0,a.jsx)("div",{children:"Tag not implemented"})}function j(e){const{description:n,name:i,update:t,value:r}=e;return(0,a.jsxs)("div",{className:"bg-gray-100 my-2 rounded-lg p-2 border border-gray-300 border-solid",children:[(0,a.jsx)("b",{children:i||"default"}),": ",n,(0,a.jsx)("br",{}),(0,a.jsx)(u.GW,{defaultLanguage:"html",height:"5em",onChange:e=>t(`slot-${i}`,e||""),options:{automaticLayout:!0,fontSize:16,lineNumbers:"off"},value:r})]})}const f=["_smart-button","_icon-align"],v={abbr:{"slot-default":"Abbr"},accordion:{"slot-default":"Accordion content"},tabs:{_tabs:'[{"_label":"Tab 1"},{"_label":"Tab 2", "_on": {"onClose": true} },{"_label":"Tab 3"}]'},breadcrumb:{_links:"[{'_label':'Startseite','_href':'#/'},{'_label':'Unterseite der Startseite','_href':'#/unterseite'},{'_label':'Unterseite der Unterseite','_href':'#/unterseite/unterseite'}]"},form:{"_required-text":"Bitte alle Felder ausf\xfcllen."},image:{_src:"https://placehold.co/100x100/cc006e/white"},"link-group":{_links:"[{'_label':'Startseite','_href':'#/'},{'_label':'Unterseite der Startseite','_href':'#/unterseite'},{'_label':'Unterseite der Unterseite','_href':'#/unterseite/unterseite'}]"},nav:{_links:"[{'_label':'Startseite','_href':'#/'},{'_label':'Unterseite der Startseite','_href':'#/unterseite'},{'_label':'Unterseite der Unterseite','_href':'#/unterseite/unterseite'}]"},pagination:{_total:"100",_page:"6"},quote:{_quote:"Hello World"},select:{_options:"[{'label':'Herr','value':0},{'label':'Frau','value':1}]"},"skip-nav":{_links:"[{'_label':'Navigation','_href':'#nav'},{'_label':'Inhalt','_href':'#main'},{'_label':'Kontakt','_href':'#kontakt'},{'_label':'Links','_href':'#links'}]"},table:{_headers:'{"horizontal":[[{"label":"Montag","key":"montag"}]]}',_data:'[{"montag":"Zelle1"},{"montag":"Zelle2"}]',_pagination:'{"page":2}'}};function k(e){const[n,i]=(0,s.useState)(function(){const e={};return Object.values(t.Q).forEach((n=>{const i=n.name.replace("kol-","");e[i]={defaultValues:[]},n.attributes.forEach((n=>{void 0!==n.defaultValue&&(e[i][n.name]=n.defaultValue.replace(/'/g,""),e[i].defaultValues.push(n.name)),void 0!==v[i]?.[n.name]&&(e[i][n.name]=v[i][n.name])})),n.slots.forEach((n=>{const t=`slot-${n.name||"default"}`,r=v[i]?.[t];r&&(e[i][t]=r)}))})),e}()),[o,d]=(0,s.useState)("badge");(0,s.useEffect)((()=>{e.component&&d(e.component.replace("kol-",""))}),[e.component]),(0,s.useEffect)((()=>{!!t.Q.find((e=>e.name===`kol-${o}`))?.attributes.find((e=>"_label"===e.name))&&!n[o]?._label&&u("_label","Label-Text");!!t.Q.find((e=>e.name===`kol-${o}`))?.attributes.find((e=>"_heading"===e.name))&&!n[o]?._heading&&u("_heading","Heading-Text")}),[o]);const c=(0,s.useMemo)((()=>n[o]||{}),[n,o]);function u(e,n){i((i=>{const t={...i[o],[e]:n,defaultValues:i[o].defaultValues.filter((n=>n!==e))};return{...i,[o]:t}}))}const m=Object.values(t.Q).find((e=>e.name===`kol-${o}`));return(0,a.jsx)(l.c,{children:()=>(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(r.cX,{class:"mb-2",_label:"Beta",_color:"#b00"}),(0,a.jsxs)("div",{className:"grid lg:grid-cols-3 gap-2",children:[(0,a.jsxs)(r._,{className:"col-span-2",_label:"Wechselnavigation zwischen Viewer und Code",_tabs:[{_label:"Viewer"},{_label:"Code"}],children:[(0,a.jsx)("div",{className:"p-2",children:(0,a.jsx)(g,{tag:o,params:c})}),(0,a.jsx)("div",{className:"lg:col-span-2",children:(0,a.jsx)(x,{params:c,tag:o})})]}),(0,a.jsxs)("div",{className:"grid gap-4 p-2 border-0 border-l border-solid",children:[(0,a.jsx)(r.ch,{_level:3,_label:"Konfigurator"}),(0,a.jsxs)("div",{children:[(0,a.jsx)(r.ch,{_level:4,_label:"Properties"}),(0,a.jsxs)("div",{className:"max-h-96 p-2 overflow-auto mb-4",children:[m&&m.attributes.map((e=>(0,a.jsx)(a.Fragment,{children:!f.includes(e.name)&&!e.description.startsWith("Deprecated:")&&(0,a.jsx)(h,{attribute:e,update:u,value:c[e.name]},e.name)}))),m&&0===m.attributes.length&&(0,a.jsx)("span",{className:"text-gray-500",children:"Keine Properties vorhanden"})]}),(0,a.jsx)(r.ch,{_level:4,_label:"Slots"}),(0,a.jsxs)("div",{className:"max-h-56 p-2 overflow-auto",children:[m&&m.slots.map((e=>(0,a.jsx)(j,{description:e.description,name:e.name||"default",update:u,value:c["slot-"+(e.name||"default")]},e.name))),m&&0===m.slots.length&&(0,a.jsx)("span",{className:"text-gray-500",children:"Keine Slots vorhanden"})]})]})]})]})]})})}}}]);