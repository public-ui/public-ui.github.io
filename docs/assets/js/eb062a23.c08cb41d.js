"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[56112],{15984:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>u,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var t=i(76776),r=i(108);const s={title:"Sicherheit",description:"Auf dieser Seite werden das Sicherheitskonzept zu KoliBri beschrieben.",tags:["Architektur","Konzept","Sicherheit","Rechtliches"]},l="Sicherheitskonzept",o={id:"concepts/sicherheit",title:"Sicherheit",description:"Auf dieser Seite werden das Sicherheitskonzept zu KoliBri beschrieben.",source:"@site/versioned_docs/version-1.7/20-concepts/15-sicherheit.mdx",sourceDirName:"20-concepts",slug:"/concepts/sicherheit",permalink:"/docs/1.7/concepts/sicherheit",draft:!1,unlisted:!1,tags:[{inline:!0,label:"Architektur",permalink:"/docs/1.7/tags/architektur"},{inline:!0,label:"Konzept",permalink:"/docs/1.7/tags/konzept"},{inline:!0,label:"Sicherheit",permalink:"/docs/1.7/tags/sicherheit"},{inline:!0,label:"Rechtliches",permalink:"/docs/1.7/tags/rechtliches"}],version:"1.7",sidebarPosition:15,frontMatter:{title:"Sicherheit",description:"Auf dieser Seite werden das Sicherheitskonzept zu KoliBri beschrieben.",tags:["Architektur","Konzept","Sicherheit","Rechtliches"]},sidebar:"tutorialSidebar",previous:{title:"Datenschutz",permalink:"/docs/1.7/concepts/datenschutz"},next:{title:"Komponenten",permalink:"/docs/1.7/components/"}},d={},c=[{value:"Einleitung",id:"einleitung",level:2},{value:"Initialer Commit",id:"initialer-commit",level:2},{value:"Ma\xdfnahmen",id:"ma\xdfnahmen",level:2},{value:"Code Review",id:"code-review",level:3},{value:"Contributor",id:"contributor",level:3}];function h(e){const n={h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.M)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"sicherheitskonzept",children:"Sicherheitskonzept"}),"\n",(0,t.jsx)(n.h2,{id:"einleitung",children:"Einleitung"}),"\n",(0,t.jsx)(n.p,{children:"Im Manifest wird der Fokus der Komponenten-Bibliothek definiert. Bezogen auf die Sicherheit k\xf6nnen folgende Punkte herausgestellt werden:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Das Ziel der Bibliothek ist es, konsistente und barrierefreie Benutzeroberfl\xe4chen f\xfcr webbasierte Projekte bereitzustellen."}),"\n",(0,t.jsx)(n.li,{children:"Dabei beschr\xe4nkt sich der technische Scope der Bibliothek ausschlie\xdflich auf die Pr\xe4sentationsschicht."}),"\n",(0,t.jsx)(n.li,{children:"Zudem beinhalten die Komponenten keinerlei fachlichen Bezug und sind vollkommen allgemeing\xfcltig konzipiert."}),"\n",(0,t.jsx)(n.li,{children:"Jeglicher fachlicher Kontext wird einer Komponente von au\xdfen \u201ereingegeben\u201c und lediglich dargestellt."}),"\n",(0,t.jsx)(n.li,{children:"Es gibt dar\xfcber hinaus keinerlei Daten\xfcbertragungsfunktionalit\xe4ten und -speicherung."}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"initialer-commit",children:"Initialer Commit"}),"\n",(0,t.jsx)(n.p,{children:"Bevor der Quellcode ver\xf6ffentlicht wurde, wurden u. a. folgende Reviews durchgef\xfchrt:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Qualit\xe4tssicherung:"})," Grunds\xe4tzlich werden alle sinnvollen qualit\xe4tssteigernden Werkzeuge eingesetzt, die automatisiert und permanent den Quellcode pr\xfcfen (z. B. ESLint, TS-Prune, Tests, DepCheck, Prettier, Axe u. v. m.)."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Automatisches Code-Review:"})," Mittels Teamscale wurde der gesamte Quellcode \xfcberpr\xfcft. Hierbei kamen u. a. Tools wie ESLint, Prettier und zahlreiche Pr\xfcfschritte zur Einhaltung der JavaScript/TypeScript-Programmierrichtlinien des ITZBund zum Einsatz."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Manuelles Code-Review:"})," Zus\xe4tzlich wurde ein Code-Review mittels eines Dienstleisters durchgef\xfchrt, um die Aufbereitung f\xfcr ein \xf6ffentliches Repository bestm\xf6glich umzusetzen."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Lizenz-Pr\xfcfung:"})," Bei der Auswahl der Open-Source-Lizenz folgen wir den Bestrebungen der Europ\xe4ischen Kommission mit der European Union Public Licence v1.2."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"ma\xdfnahmen",children:"Ma\xdfnahmen"}),"\n",(0,t.jsx)(n.p,{children:"In diesen Abschnitt wird beschrieben, welche Ma\xdfnahmen ergriffen werden, um die Sicherheit dauerhaft sicherzustellen."}),"\n",(0,t.jsx)(n.h3,{id:"code-review",children:"Code Review"}),"\n",(0,t.jsx)(n.p,{children:"Alle Git-Repositories sind so konfiguriert, dass \xc4nderungen ausschlie\xdflich \xfcber einen Pull Request verbunden mit einem\nmanuellen Code Review erfolgen k\xf6nnen. Wird eine \xc4nderung \xfcber einen Pull Request bereitgestellt, starten erst einmal alle\neingerichteten Pr\xfcf-Pipelines automatisch und geben \xfcber die Erf\xfcllung aller Qualit\xe4tsma\xdfst\xe4be Feedback. Ist die \xc4nderung\nvollst\xe4ndig und alle automatisierten Pr\xfcfungen waren erfolgreich, muss ein manuelles Review eines Core-Team-Mitglieds erfolgen.\nHierbei darf ein Core-Mitglied nicht seine eigene \xc4nderung mergen."}),"\n",(0,t.jsx)(n.p,{children:"Beim Review ist besonders auf folgende Punkte zu achten:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"der Code darf keine personenbezogenen Daten oder Markennamen enthalten"}),"\n",(0,t.jsx)(n.li,{children:"der Contributor muss die CLA akzeptiert haben"}),"\n",(0,t.jsx)(n.li,{children:"der Umfang der Code-\xc4nderung muss reviewbar sein (kleinteilig)"}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"contributor",children:"Contributor"}),"\n",(0,t.jsx)(n.p,{children:"Es gibt interne und externe Contributoren (Beitragende). Interne Contributoren (Core-Team) haben umfangreiche Berechtigungen im Git-Repository und damit direkt am Quellcode und den daraus entstehenden Artefakten. Die externen Contributoren hingegen haben jeweils ein eigenes Git-Repository, sogenannt Forks oder eine Kopie. Auf die geforkten Git-Repositories oder Kopie haben wir (Core-Team) keinen Einfluss."})]})}function u(e={}){const{wrapper:n}={...(0,r.M)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},108:(e,n,i)=>{i.d(n,{I:()=>o,M:()=>l});var t=i(80924);const r={},s=t.createContext(r);function l(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);