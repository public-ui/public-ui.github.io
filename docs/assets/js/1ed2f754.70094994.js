"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[7183],{17942:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>c});var r=t(50959);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var o=r.createContext({}),s=function(e){var n=r.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=s(e.components);return r.createElement(o.Provider,{value:n},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},k=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),m=s(t),k=a,c=m["".concat(o,".").concat(k)]||m[k]||d[k]||i;return t?r.createElement(c,l(l({ref:n},p),{},{components:t})):r.createElement(c,l({ref:n},p))}));function c(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,l=new Array(i);l[0]=k;var u={};for(var o in n)hasOwnProperty.call(n,o)&&(u[o]=n[o]);u.originalType=e,u[m]="string"==typeof e?e:a,l[1]=u;for(var s=2;s<i;s++)l[s]=t[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}k.displayName="MDXCreateElement"},93871:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>u,default:()=>k,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var r=t(15882),a=(t(50959),t(17942)),i=t(6570);const l={slug:"release-1.5",title:"Ank\xfcndigung Release 1.5",authors:"deleonio",tags:["release","neuerungen"]},u="Ank\xfcndigung - Release 1.5",o={permalink:"/blog/release-1.5",source:"@site/blog/2023-05-03.mdx",title:"Ank\xfcndigung Release 1.5",description:"Das Release 1.5 wird bald ver\xf6ffentlicht und bringt zahlreiche neue Komponenten, Verbesserungen und ein vereinfachtes Theming mit.",date:"2023-05-03T00:00:00.000Z",formattedDate:"3. Mai 2023",tags:[{label:"release",permalink:"/blog/tags/release"},{label:"neuerungen",permalink:"/blog/tags/neuerungen"}],readingTime:3.725,hasTruncateMarker:!1,authors:[{name:"Martin Oppitz",title:"Architekt@ITZBund & Creator of KoliBri",url:"https://github.com/deleonio",imageURL:"https://avatars.githubusercontent.com/u/6279703",key:"deleonio"}],frontMatter:{slug:"release-1.5",title:"Ank\xfcndigung Release 1.5",authors:"deleonio",tags:["release","neuerungen"]},prevItem:{title:"Wie kann ich Icons im Theme \xe4ndern?",permalink:"/blog/change-icons-via-theming"},nextItem:{title:"Wie style ich eine Komponente?",permalink:"/blog/wie-style-ich-eine-komponente"}},s={authorsImageUrls:[void 0]},p=[],m={toc:p},d="wrapper";function k(e){let{components:n,...t}=e;return(0,a.kt)(d,(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Das Release 1.5 wird bald ver\xf6ffentlicht und bringt zahlreiche neue Komponenten, Verbesserungen und ein vereinfachtes Theming mit."),(0,a.kt)("p",null,"Die wichtigsten \xc4nderungen sind:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Neue Komponenten"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Image"),(0,a.kt)("li",{parentName:"ul"},"Popover"),(0,a.kt)("li",{parentName:"ul"},"SplitButton"),(0,a.kt)("li",{parentName:"ul"},"ToggleButton (s. InputCheckbox)"),(0,a.kt)("li",{parentName:"ul"},"Quote"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Verbesserungen"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Performance"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Die Performance wurde durch die \xfcberdimensionierten CSS-Definitionen in der Icon-Komponente beeintr\xe4chtigt. Hintergrund sind die vielen Icon-Selectoren in den Icon-Fonts. F\xfcr ein Design System wird jedoch nur ein Bruchteil dieser CSS-Definitionen wirklich ben\xf6tigt. F\xfcr die Komponenten haben wir uns f\xfcr die schlanke Icon-Font von Visual Studio Code (Codicon) entschieden und Icofont und Font-Awesome standardm\xe4\xdfig entfernt (kann wieder nachger\xfcstet werden). Somit bringt dieses Release eine erhebliche Performance-Verbesserung beim Rendern der Komponenten mit sich."))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Assets (Fonts und Icons)"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Versionen der Icon-Fonts wurden aktualisiert"),(0,a.kt)("li",{parentName:"ul"},"Assets wurden auf die Themes aufgeteilt, wo sie relevant sind. Dadurch k\xf6nnen die KoliBri-Artefakt (NPM-Paket) verkleinert und somit schneller heruntergeladen und installiert werden."),(0,a.kt)("li",{parentName:"ul"},"Durch das Hinterlegen eines Postinstall-Scripts k\xf6nnen die Assets nach jeder Installation der KoliBri-Pakete automatisch in den ",(0,a.kt)("inlineCode",{parentName:"li"},"public/assets"),"-Ordner kopiert werden.",(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-json"},'    // package.json\n    "scripts": {\n        \u2026\n        "postinstall": "npm-run-all postinstall:*",\n        "postinstall:components-assets": "cpy \\"node_modules/@public-ui/components/assets/**/*\\" public/assets --dot",\n        "postinstall:themes-assets": "cpy \\"node_modules/@public-ui/themes/assets/**/*\\" public/assets --dot",\n    },\n    "devDependencies": {\n        "cpy-cli": "^4.2.0",\n        "npm-run-all": "^4.1.5",\n        \u2026\n    }\n'))),(0,a.kt)("li",{parentName:"ul"},"Weitere Icon-Fonts wurden in Themes verwendet:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Microsoft Codicons"),(0,a.kt)("li",{parentName:"ul"},"Google Material Icons"),(0,a.kt)("li",{parentName:"ul"},"Google Material Symbols"),(0,a.kt)("li",{parentName:"ul"},"Tabler Icons"))))))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Refactorings"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Ein paar Komponenten haben wir refactored, um die Funktionalit\xe4ten zu erweitern und die Wartbarkeit zu verbessern."),(0,a.kt)("li",{parentName:"ul"},"Accordion",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Der Header des Accordions wird jetzt mittels KoliBri-Heading, -Button und -Span umgesetzt."),(0,a.kt)("li",{parentName:"ul"},"Accordions lassen sich jetzt auch animiert auf- und zuklappen."))),(0,a.kt)("li",{parentName:"ul"},"Alert",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Die Konstruktion der Alerts wurde \xfcberarbeitet, um die volle Flexibilit\xe4t f\xfcr die Gestaltung zu erm\xf6glichen."))),(0,a.kt)("li",{parentName:"ul"},"Heading",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Die Heading-Komponente wurde mit einem Expert-Slot versehen."))),(0,a.kt)("li",{parentName:"ul"},"Inputs, Select und Textarea",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Die Konstruktion aller Eingabefelder wurde \xfcberarbeitet, um die Gestaltbarkeit und Wartbarkeit zu verbessern."))),(0,a.kt)("li",{parentName:"ul"},"Nav",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Aufklappbare Untermen\xfcs haben jetzt einen separaten Expand-Button. So kann der eigentliche Men\xfcpunkt unabh\xe4ngig vom Auf- und Zuklappen verwendet werden."),(0,a.kt)("li",{parentName:"ul"},"Men\xfcpunkte k\xf6nnen jetzt Links, Buttons oder auch reiner Text sein."))),(0,a.kt)("li",{parentName:"ul"},"Table\nDie Pagination befindet sich jetzt im DOM immer oben, um den blinden Nutzenden eine schnellere Navigation zu erm\xf6glichen. F\xfcr sehende Nutzende kann die Pagination \xfcber das Theming entweder \xfcber oder unter der Tabelle angezeigt werden."),(0,a.kt)("li",{parentName:"ul"},"Tabs",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Die Tabs verwenden jetzt die KoliBri-Button-Komponente."))),(0,a.kt)("li",{parentName:"ul"},"Alle relevante Themes wurden bzgl. der Refactorings \xfcberarbeitet"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Adapter"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Neuer Adapter f\xfcr Angular 16 hinzugef\xfcgt"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"KoliBri-CLI"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Templates",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Die Templates wurden \xfcberarbeitet und aktualisiert."),(0,a.kt)("li",{parentName:"ul"},"Angular-Template auf Version 16 aktualisiert"))))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Expert-Slot"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Der Expert-Slot kann verwendet werden, um beliebiges HTML anstatt des Text-Labels auf eigene Verantwortung einf\xfcgen zu k\xf6nnen."),(0,a.kt)("li",{parentName:"ul"},"Bei der Einf\xfchrung eines Expert-Slots, wird in der Regel das Property ",(0,a.kt)("inlineCode",{parentName:"li"},"_label")," Pflicht. Entweder enth\xe4lt das Label einen Text, der dann ohne Slot angezeigt wird. Oder es ist leer und der Expert-Slot wird aktiviert.",(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<kol-heading _label="Inhalt einer H4-\xdcberschrift" _level="4"></kol-heading>\n<kol-heading _label="" _level="4">\n    <span slot="expert"> Inhalt einer H4-\xdcberschrift \u2026 </span>\n</kol-heading>\n'))),(0,a.kt)("li",{parentName:"ul"},"Heading: Die Heading erm\xf6glicht jetzt das Einf\xfcgen beliebiger Inhalte im Expert-Modus. Hierzu wurde das erforderliche Property ",(0,a.kt)("inlineCode",{parentName:"li"},"_label")," eingef\xfchrt. L\xe4sst man das Property leer (",(0,a.kt)("inlineCode",{parentName:"li"},'_label=""'),"), wird er Expert-Slot aktiviert."))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Theming"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Basis-Styling: Wir haben das CSS auf den Komponenten auf das Wesentliche reduziert. Das Styling beinhaltet prim\xe4r nur noch Layout-Definitionen ohne Farben, Abst\xe4nde und Tokens. Somit kann das Erstellen von eigenen Themes deutlich vereinfacht werden."),(0,a.kt)("li",{parentName:"ul"},"Alle unsere Themes wurden bez\xfcglich der neuen Basis-Styling-Definitionen angepasst und konnten dadurch deutlich vereinfacht werden."),(0,a.kt)("li",{parentName:"ul"},"Neue Themes",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Theme der Europ\xe4ischen Kommission"),(0,a.kt)("li",{parentName:"ul"},"Theme der Europ\xe4ischen Union"),(0,a.kt)("li",{parentName:"ul"},"Theme f\xfcr die neue Version des Design System Zoll (v2)"),(0,a.kt)("li",{parentName:"ul"},"Theme des Bundes Styleguides (Bundesregierung)"),(0,a.kt)("li",{parentName:"ul"},"Theme des Bundeszentralamt f\xfcr Steuern (WIP)"),(0,a.kt)("li",{parentName:"ul"},"Theme des Freistaats Th\xfcringen (f\xfcr Demozwecke)"))))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Dokumentation"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Code-Beispiele",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Es gibt eine Beispiel-Anwendung (",(0,a.kt)(i.Nv,{_href:"/sample-react/#/handout",_label:"Sample-App",_target:"samples",mdxType:"KolLink"}),") mit zahlreichen Code-Beispielen."),(0,a.kt)("li",{parentName:"ul"},"Code-Beispiele wurden erweitert und aktualisiert"),(0,a.kt)("li",{parentName:"ul"},"Beispiel-Anwendung kann ausgecheckt und lokal gestartet werden (ist im KoliBri-Repository)."),(0,a.kt)("li",{parentName:"ul"},"Code-Bespiele werden jetzt in der Dokumentation angezeigt."),(0,a.kt)("li",{parentName:"ul"},"Code-Beispiele beinhaltet eine Handout-Sicht f\xfcr Pr\xe4sentationen von Themes."))),(0,a.kt)("li",{parentName:"ul"},"Texte",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Die Texte wurde \xfcberarbeitet und aktualisiert."),(0,a.kt)("li",{parentName:"ul"},"Die Texte wurde auf Englisch \xfcbersetzt."))),(0,a.kt)("li",{parentName:"ul"},"Live-Editor (beta): Alle Komponenten k\xf6nnen jetzt live umkonfiguriert werden. Die \xc4nderungen werden daneben im Viewer direkt auf der Komponente angezeigt."))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Funktionalit\xe4ten"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Der Link erm\xf6glicht jetzt die Angabe eines Dateinames f\xfcr den Download-Link."),(0,a.kt)("li",{parentName:"ul"},"Der Progress kann jetzt auch den Fortschritt als lesbaren Text anzeigen und eine Bezeichnung haben.")))))}k.isMDXComponent=!0}}]);