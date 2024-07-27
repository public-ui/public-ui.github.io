"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[80208],{93660:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>x,contentTitle:()=>d,default:()=>j,frontMatter:()=>s,metadata:()=>c,toc:()=>h});var r=n(76776),l=n(108),i=n(33920);const s={title:"Expert-Slot",description:"Mittels des Expert-Modus bieten wir mehr eigenverantwortliche Freiheiten an.",tags:["Architektur","arc42","Konzept"]},d=void 0,c={id:"concepts/expert-slot",title:"Expert-Slot",description:"Mittels des Expert-Modus bieten wir mehr eigenverantwortliche Freiheiten an.",source:"@site/versioned_docs/version-2.1/20-concepts/08-expert-slot.mdx",sourceDirName:"20-concepts",slug:"/concepts/expert-slot",permalink:"/docs/concepts/expert-slot",draft:!1,unlisted:!1,tags:[{inline:!0,label:"Architektur",permalink:"/docs/tags/architektur"},{inline:!0,label:"arc42",permalink:"/docs/tags/arc-42"},{inline:!0,label:"Konzept",permalink:"/docs/tags/konzept"}],version:"2.1",sidebarPosition:8,frontMatter:{title:"Expert-Slot",description:"Mittels des Expert-Modus bieten wir mehr eigenverantwortliche Freiheiten an.",tags:["Architektur","arc42","Konzept"]},sidebar:"tutorialSidebar",previous:{title:"Swizzling",permalink:"/docs/concepts/swizzling"},next:{title:"Inputs, Select und Textarea",permalink:"/docs/concepts/formular"}},x={},h=[{value:"Motivation",id:"motivation",level:2},{value:"&quot;Expert&quot;-Slot",id:"expert-slot",level:2},{value:"Komponentenliste",id:"komponentenliste",level:3},{value:"Beispiel",id:"beispiel",level:3}];function o(e){const t={blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,l.M)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"motivation",children:"Motivation"}),"\n",(0,r.jsxs)("p",{children:[(0,r.jsx)("strong",{children:(0,r.jsx)("kol-abbr",{"_tooltip-align":"right",_label:"Komponenten-Bibliothek f\xfcr die Barrierefreiheit",children:(0,r.jsx)(t.p,{children:"KoliBri"})})})," ",(0,r.jsx)(t.p,{children:"stellt in sich geschlossene und barrierefreie Komponenten bereit und l\xe4sst hierzu die \u201eBef\xfcllung\u201c der Komponenten i.\nd. R. nur \xfcber die Properties der Komponenten zu. Alle von au\xdfen eingehenden Property-Werte werden validiert und auf\nden internen State gemappt."})]}),"\n",(0,r.jsx)("p",{children:(0,r.jsx)("kol-indented-text",{children:(0,r.jsx)("strong",{children:"Hierdurch behalten wir die Kontrolle \xfcber die Komponenten und deren semantische Konstruktion."})})}),"\n",(0,r.jsxs)("p",{children:[(0,r.jsxs)(t.p,{children:["Um jedoch die Wiederverwendbarkeit von"," "]}),(0,r.jsx)("strong",{children:(0,r.jsx)("kol-abbr",{"_tooltip-align":"right",_label:"Komponenten-Bibliothek f\xfcr die Barrierefreiheit",children:(0,r.jsx)(t.p,{children:"KoliBri"})})})," ",(0,r.jsxs)(t.p,{children:["weiter zu verbessern, werden wir die Flexibilit\xe4t durch einen sogenannten ",(0,r.jsx)("strong",{children:"Experten"}),"-Modus erweitern.\nDer ",(0,r.jsx)("strong",{children:"Experten"}),"-Modus definiert den Punkt, wo der ",(0,r.jsx)("strong",{children:"Experte"})," oder die"," ","\n",(0,r.jsx)("strong",{children:"Expertin"})," mehr Gestaltungsraum innerhalb der Komponente erh\xe4lt und daf\xfcr im Gegenzug die Verantwortung\nf\xfcr die Barrierefreiheit \xfcbernimmt."]})]}),"\n",(0,r.jsx)(t.h2,{id:"expert-slot",children:'"Expert"-Slot'}),"\n",(0,r.jsx)("p",{children:(0,r.jsxs)(t.p,{children:["Mittels dem \u201eExpert\u201c-Slot kann die interne Konstruktion einiger Komponenten \u201e\xfcberschrieben\u201c werden. Gegebenenfalls ist\nes erforderlich an der Komponente, die regul\xe4r geforderten Property-Werte auf ",(0,r.jsx)("code",{children:"leer"})," zu setzen."]})}),"\n",(0,r.jsx)(t.h3,{id:"komponentenliste",children:"Komponentenliste"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{style:{textAlign:"right"},children:"Komponente"}),(0,r.jsx)(t.th,{style:{textAlign:"center"},children:"Verf\xfcgbar ab"}),(0,r.jsx)(t.th,{style:{textAlign:"center"},children:"Slot-Name"}),(0,r.jsx)(t.th,{style:{textAlign:"center"},children:"Ohne Slot-Name"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"right"},children:"Badge"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"-"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)("code",{children:"expert"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"}})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"right"},children:"Button"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"1.1.10"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)("code",{children:"expert"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"}})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"right"},children:"ButtonLink"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"1.1.15"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)("code",{children:"expert"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"}})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"right"},children:"ButtonToggle"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"-"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)("code",{children:"expert"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"}})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"right"},children:"Heading"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"1.3.0"}),(0,r.jsxs)(t.td,{style:{textAlign:"center"},children:[(0,r.jsx)("code",{children:"expert"})," | ",(0,r.jsx)("code",{})]}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)("sup",{children:"*"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"right"},children:"InputCheckbox"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"-"}),(0,r.jsxs)(t.td,{style:{textAlign:"center"},children:[(0,r.jsx)("code",{children:"expert"})," | ",(0,r.jsx)("code",{})]}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)("sup",{children:"*"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"right"},children:"InputDate"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"-"}),(0,r.jsxs)(t.td,{style:{textAlign:"center"},children:[(0,r.jsx)("code",{children:"expert"})," | ",(0,r.jsx)("code",{})]}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)("sup",{children:"*"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"right"},children:"InputEmail"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"-"}),(0,r.jsxs)(t.td,{style:{textAlign:"center"},children:[(0,r.jsx)("code",{children:"expert"})," | ",(0,r.jsx)("code",{})]}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)("sup",{children:"*"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"right"},children:"InputNumber"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"-"}),(0,r.jsxs)(t.td,{style:{textAlign:"center"},children:[(0,r.jsx)("code",{children:"expert"})," | ",(0,r.jsx)("code",{})]}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)("sup",{children:"*"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"right"},children:"InputPassword"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"-"}),(0,r.jsxs)(t.td,{style:{textAlign:"center"},children:[(0,r.jsx)("code",{children:"expert"})," | ",(0,r.jsx)("code",{})]}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)("sup",{children:"*"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"right"},children:"InputRange"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"-"}),(0,r.jsxs)(t.td,{style:{textAlign:"center"},children:[(0,r.jsx)("code",{children:"expert"})," | ",(0,r.jsx)("code",{})]}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)("sup",{children:"*"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"right"},children:"InputRadio"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"-"}),(0,r.jsxs)(t.td,{style:{textAlign:"center"},children:[(0,r.jsx)("code",{children:"expert"})," | ",(0,r.jsx)("code",{})]}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)("sup",{children:"*"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"right"},children:"InputText"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"-"}),(0,r.jsxs)(t.td,{style:{textAlign:"center"},children:[(0,r.jsx)("code",{children:"expert"})," | ",(0,r.jsx)("code",{})]}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)("sup",{children:"*"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"right"},children:"Select"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"-"}),(0,r.jsxs)(t.td,{style:{textAlign:"center"},children:[(0,r.jsx)("code",{children:"expert"})," | ",(0,r.jsx)("code",{})]}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)("sup",{children:"*"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"right"},children:"Textarea"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"-"}),(0,r.jsxs)(t.td,{style:{textAlign:"center"},children:[(0,r.jsx)("code",{children:"expert"})," | ",(0,r.jsx)("code",{})]}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)("sup",{children:"*"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"right"},children:"Link"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"1.1.16"}),(0,r.jsxs)(t.td,{style:{textAlign:"center"},children:[(0,r.jsx)("code",{children:"expert"})," | ",(0,r.jsx)("code",{})]}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)("sup",{children:"*"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"right"},children:"LinkButton"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"1.1.16"}),(0,r.jsxs)(t.td,{style:{textAlign:"center"},children:[(0,r.jsx)("code",{children:"expert"})," | ",(0,r.jsx)("code",{})]}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)("sup",{children:"*"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"right"},children:"Span"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"1.1.10"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)("code",{children:"expert"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"}})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"right"},children:"Tooltip"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"-"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)("code",{children:"expert"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"}})]})]})]}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)("sup",{children:"*"})," Der leer Slot-Name wird nur aufgrund der Abw\xe4rtskompatibilit\xe4t bis zu Major-Release 2 unterst\xfctzt."]}),"\n"]}),"\n",(0,r.jsx)(t.h3,{id:"beispiel",children:"Beispiel"}),"\n",(0,r.jsx)("p",{children:"Ein Button wird regul\xe4r wie folgt verwendet:"}),"\n",(0,r.jsx)(i.qC,{_label:"Ich bin ein Schalter"}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:'<kolbutton _label="Ich bin ein Schalter"></kolbutton>\n'})}),"\n",(0,r.jsx)("p",{children:"Mit dem Expert-Slot kann der Button jetzt auch so verwendet werden:"}),"\n",(0,r.jsx)(i.qC,{_label:"",children:(0,r.jsx)("span",{slot:"expert",children:"Ich bin mehr als nur ein Schalter"})}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:'<kolbutton _label="">\n\t<span slot="expert">Ich bin mehr als nur ein Schalter</span>\n</kolbutton>\n'})}),"\n",(0,r.jsx)("p",{children:(0,r.jsx)("kol-alert",{_type:"info",children:(0,r.jsx)("strong",{children:(0,r.jsxs)(t.p,{children:["\xdcber das Property ",(0,r.jsx)("code",{children:'slot="expert"'})," wird ein nachvollziehbarer \xdcbergabepunkt erm\xf6glicht und der\nKontext-Wechsel klar definiert."]})})})})]})}function j(e={}){const{wrapper:t}={...(0,l.M)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},108:(e,t,n)=>{n.d(t,{I:()=>d,M:()=>s});var r=n(80924);const l={},i=r.createContext(l);function s(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:s(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);