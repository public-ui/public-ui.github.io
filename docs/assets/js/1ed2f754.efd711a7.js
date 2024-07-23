"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[66320],{67872:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>d,default:()=>u,frontMatter:()=>l,metadata:()=>a,toc:()=>c});var s=i(76776),r=i(108),t=i(64992);const l={title:"Ank\xfcndigung Release 1.5",authors:"deleonio",tags:["release","neuerungen"]},d="Ank\xfcndigung - Release 1.5",a={permalink:"/blog/2023/05/03/",source:"@site/blog/2023-05-03.mdx",title:"Ank\xfcndigung Release 1.5",description:"Das Release 1.5 wird bald ver\xf6ffentlicht und bringt zahlreiche neue Komponenten, Verbesserungen und ein vereinfachtes Theming mit.",date:"2023-05-03T00:00:00.000Z",tags:[{inline:!0,label:"release",permalink:"/blog/tags/release"},{inline:!0,label:"neuerungen",permalink:"/blog/tags/neuerungen"}],readingTime:4.195,hasTruncateMarker:!1,authors:[{name:"Martin Oppitz",title:"Architekt@ITZBund & Creator of KoliBri",url:"https://github.com/deleonio",imageURL:"https://avatars.githubusercontent.com/u/6279703",key:"deleonio"}],frontMatter:{title:"Ank\xfcndigung Release 1.5",authors:"deleonio",tags:["release","neuerungen"]},unlisted:!1,prevItem:{title:"Wie kann ich Icons im Theme \xe4ndern?",permalink:"/blog/2023/05/12/"},nextItem:{title:"Wie style ich eine Komponente?",permalink:"/blog/2023/02/23/"}},o={authorsImageUrls:[void 0]},c=[];function h(e){const n={code:"code",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.M)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"Das Release 1.5 wird bald ver\xf6ffentlicht und bringt zahlreiche neue Komponenten, Verbesserungen und ein vereinfachtes Theming mit."}),"\n",(0,s.jsx)(n.p,{children:"Die wichtigsten \xc4nderungen sind:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Neue Komponenten"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Image"}),"\n",(0,s.jsx)(n.li,{children:"Popover"}),"\n",(0,s.jsx)(n.li,{children:"SplitButton"}),"\n",(0,s.jsx)(n.li,{children:"ToggleButton (s. InputCheckbox)"}),"\n",(0,s.jsx)(n.li,{children:"Quote"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Verbesserungen"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Performance"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Die Performance wurde durch die \xfcberdimensionierten CSS-Definitionen in der Icon-Komponente beeintr\xe4chtigt. Hintergrund sind die vielen Icon-Selectoren in den Icon-Fonts. F\xfcr ein Design System wird jedoch nur ein Bruchteil dieser CSS-Definitionen wirklich ben\xf6tigt. F\xfcr die Komponenten haben wir uns f\xfcr die schlanke Icon-Font von Visual Studio Code (Codicon) entschieden und Icofont und Font-Awesome standardm\xe4\xdfig entfernt (kann wieder nachger\xfcstet werden). Somit bringt dieses Release eine erhebliche Performance-Verbesserung beim Rendern der Komponenten mit sich."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Assets (Fonts und Icons)"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Versionen der Icon-Fonts wurden aktualisiert"}),"\n",(0,s.jsx)(n.li,{children:"Assets wurden auf die Themes aufgeteilt, wo sie relevant sind. Dadurch k\xf6nnen die KoliBri-Artefakt (NPM-Paket) verkleinert und somit schneller heruntergeladen und installiert werden."}),"\n",(0,s.jsxs)(n.li,{children:["Durch das Hinterlegen eines Postinstall-Scripts k\xf6nnen die Assets nach jeder Installation der KoliBri-Pakete automatisch in den ",(0,s.jsx)(n.code,{children:"public/assets"}),"-Ordner kopiert werden.","\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'\t// package.json\n\t"scripts": {\n\t\t\u2026\n\t\t"postinstall": "npm-run-all postinstall:*",\n\t\t"postinstall:components-assets": "cpy \\"node_modules/@public-ui/components/assets/**/*\\" public/assets --dot",\n\t\t"postinstall:themes-assets": "cpy \\"node_modules/@public-ui/themes/assets/**/*\\" public/assets --dot",\n\t},\n\t"devDependencies": {\n\t\t"cpy-cli": "^4.2.0",\n\t\t"npm-run-all": "^4.1.5",\n\t\t\u2026\n\t}\n'})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["Anschlie\xdfend einem ",(0,s.jsx)(n.code,{children:"npm i"})," (",(0,s.jsx)(n.code,{children:"pnpm i"}),") ausf\xfchren, damit alle Assets automatisch in den ",(0,s.jsx)(n.code,{children:"public/assets"}),"-Ordner kopiert werden."]}),"\n",(0,s.jsxs)(n.li,{children:["Damit die Assets nicht mit eingecheckt werden m\xfcssen, kann man sie in der ",(0,s.jsx)(n.code,{children:".gitignore"}),"-Datei ausschlie\xdfen.","\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-gitignore",children:"# .gitignore\n/public/assets/bundes/\n/public/assets/codicons/\n/public/assets/fontawesome-free/\n/public/assets/icofont/\n/public/assets/kreon/\n/public/assets/material-icons/\n/public/assets/material-symbols/\n/public/assets/noto-sans/\n/public/assets/roboto/\n/public/assets/tabler-icons/\n/public/assets/kolibri.ico\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["Weitere Icon-Fonts wurden in Themes verwendet:","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Microsoft Codicons"}),"\n",(0,s.jsx)(n.li,{children:"Google Material Icons"}),"\n",(0,s.jsx)(n.li,{children:"Google Material Symbols"}),"\n",(0,s.jsx)(n.li,{children:"Tabler Icons"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Refactorings"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Ein paar Komponenten haben wir refactored, um die Funktionalit\xe4ten zu erweitern und die Wartbarkeit zu verbessern."}),"\n",(0,s.jsxs)(n.li,{children:["Accordion","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Der Header des Accordions wird jetzt mittels KoliBri-Heading, -Button und -Span umgesetzt."}),"\n",(0,s.jsx)(n.li,{children:"Accordions lassen sich jetzt auch animiert auf- und zuklappen."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["Alert","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Die Konstruktion der Alerts wurde \xfcberarbeitet, um die volle Flexibilit\xe4t f\xfcr die Gestaltung zu erm\xf6glichen."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["Heading","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Die Heading-Komponente wurde mit einem Expert-Slot versehen."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["Inputs, Select und Textarea","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Die Konstruktion aller Eingabefelder wurde \xfcberarbeitet, um die Gestaltbarkeit und Wartbarkeit zu verbessern."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["Nav","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Aufklappbare Untermen\xfcs haben jetzt einen separaten Expand-Button. So kann der eigentliche Men\xfcpunkt unabh\xe4ngig vom Auf- und Zuklappen verwendet werden."}),"\n",(0,s.jsx)(n.li,{children:"Men\xfcpunkte k\xf6nnen jetzt Links, Buttons oder auch reiner Text sein."}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.li,{children:"Table\nDie Pagination befindet sich jetzt im DOM immer oben, um den blinden Nutzenden eine schnellere Navigation zu erm\xf6glichen. F\xfcr sehende Nutzende kann die Pagination \xfcber das Theming entweder \xfcber oder unter der Tabelle angezeigt werden."}),"\n",(0,s.jsxs)(n.li,{children:["Tabs","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Die Tabs verwenden jetzt die KoliBri-Button-Komponente."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["Tooltip","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Der Tooltip ist nur f\xfcr die interne Verwendung in KoliBri-Komponenten gedacht. Um die Gestaltbarkeit zu verbessern, wird der Tooltip jetzt ohne Shadow-Root bereitgestellt. Sollte die Komponente au\xdferhalb von KoliBri verwendet werden, muss das Styling in das CSS-Styling des Projekts (Webseite, App) hinzugef\xfcgt werden."}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.li,{children:"Alle relevante Themes wurden bzgl. der Refactorings \xfcberarbeitet"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Adapter"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Neuer Adapter f\xfcr Angular 16 hinzugef\xfcgt"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"KoliBri-CLI"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Templates","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Die Templates wurden \xfcberarbeitet und aktualisiert."}),"\n",(0,s.jsx)(n.li,{children:"Angular-Template auf Version 16 aktualisiert"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Expert-Slot"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Der Expert-Slot kann verwendet werden, um beliebiges HTML anstatt des Text-Labels auf eigene Verantwortung einf\xfcgen zu k\xf6nnen."}),"\n",(0,s.jsxs)(n.li,{children:["Bei der Einf\xfchrung eines Expert-Slots, wird in der Regel das Property ",(0,s.jsx)(n.code,{children:"_label"})," Pflicht. Entweder enth\xe4lt das Label einen Text, der dann ohne Slot angezeigt wird. Oder es ist leer und der Expert-Slot wird aktiviert.","\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-html",children:'<kol-heading _label="Inhalt einer H4-\xdcberschrift" _level="4"></kol-heading>\n<kol-heading _label="" _level="4">\n\t<span slot="expert"> Inhalt einer H4-\xdcberschrift \u2026 </span>\n</kol-heading>\n'})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["Heading: Die Heading erm\xf6glicht jetzt das Einf\xfcgen beliebiger Inhalte im Expert-Modus. Hierzu wurde das erforderliche Property ",(0,s.jsx)(n.code,{children:"_label"})," eingef\xfchrt. L\xe4sst man das Property leer (",(0,s.jsx)(n.code,{children:'_label=""'}),"), wird er Expert-Slot aktiviert."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Theming"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Basis-Styling: Wir haben das CSS auf den Komponenten auf das Wesentliche reduziert. Das Styling beinhaltet prim\xe4r nur noch Layout-Definitionen ohne Farben, Abst\xe4nde und Tokens. Somit kann das Erstellen von eigenen Themes deutlich vereinfacht werden."}),"\n",(0,s.jsx)(n.li,{children:"Alle unsere Themes wurden bez\xfcglich der neuen Basis-Styling-Definitionen angepasst und konnten dadurch deutlich vereinfacht werden."}),"\n",(0,s.jsxs)(n.li,{children:["Neue Themes","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Theme der Europ\xe4ischen Kommission"}),"\n",(0,s.jsx)(n.li,{children:"Theme der Europ\xe4ischen Union"}),"\n",(0,s.jsx)(n.li,{children:"Theme f\xfcr die neue Version des Design System Zoll (v2)"}),"\n",(0,s.jsx)(n.li,{children:"Theme des Bundes Styleguides (Bundesregierung)"}),"\n",(0,s.jsx)(n.li,{children:"Theme des Bundeszentralamt f\xfcr Steuern (WIP)"}),"\n",(0,s.jsx)(n.li,{children:"Theme des Freistaats Th\xfcringen (f\xfcr Demozwecke)"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Dokumentation"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Code-Beispiele","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Es gibt eine Beispiel-Anwendung (",(0,s.jsx)(t.GQ,{_href:"/sample-react/#/handout",_label:"Sample-App",_target:"samples"}),") mit zahlreichen Code-Beispielen."]}),"\n",(0,s.jsx)(n.li,{children:"Code-Beispiele wurden erweitert und aktualisiert"}),"\n",(0,s.jsx)(n.li,{children:"Beispiel-Anwendung kann ausgecheckt und lokal gestartet werden (ist im KoliBri-Repository)."}),"\n",(0,s.jsx)(n.li,{children:"Code-Bespiele werden jetzt in der Dokumentation angezeigt."}),"\n",(0,s.jsx)(n.li,{children:"Code-Beispiele beinhaltet eine Handout-Sicht f\xfcr Pr\xe4sentationen von Themes."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["Texte","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Die Texte wurde \xfcberarbeitet und aktualisiert."}),"\n",(0,s.jsx)(n.li,{children:"Die Texte wurde auf Englisch \xfcbersetzt."}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.li,{children:"Live-Editor (beta): Alle Komponenten k\xf6nnen jetzt live umkonfiguriert werden. Die \xc4nderungen werden daneben im Viewer direkt auf der Komponente angezeigt."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Funktionalit\xe4ten"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Der Link erm\xf6glicht jetzt die Angabe eines Dateinames f\xfcr den Download-Link."}),"\n",(0,s.jsx)(n.li,{children:"Der Progress kann jetzt auch den Fortschritt als lesbaren Text anzeigen und eine Bezeichnung haben."}),"\n"]}),"\n"]}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,r.M)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},108:(e,n,i)=>{i.d(n,{I:()=>d,M:()=>l});var s=i(80924);const r={},t=s.createContext(r);function l(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);