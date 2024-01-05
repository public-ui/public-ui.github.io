"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[83011],{62917:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>a,default:()=>g,frontMatter:()=>l,metadata:()=>d,toc:()=>u});var r=i(11527),t=i(16034),s=i(65636);const l={title:"Eigene Themes unabh\xe4ngig umsetzen",authors:"deleonio",tags:["theme","style","styleguide","corporate design","design system"]},a="Eigene Themes unabh\xe4ngig umsetzen",d={permalink:"/en/blog/2023/02/02/",source:"@site/blog/2023-02-02.mdx",title:"Eigene Themes unabh\xe4ngig umsetzen",description:"Ein gro\xdfer Vorteil von KoliBri liegt in seiner besonders guten Wiederverwendbarkeit und hohen Flexiblit\xe4t. Denn auf",date:"2023-02-02T00:00:00.000Z",formattedDate:"February 2, 2023",tags:[{label:"theme",permalink:"/en/blog/tags/theme"},{label:"style",permalink:"/en/blog/tags/style"},{label:"styleguide",permalink:"/en/blog/tags/styleguide"},{label:"corporate design",permalink:"/en/blog/tags/corporate-design"},{label:"design system",permalink:"/en/blog/tags/design-system"}],readingTime:3.67,hasTruncateMarker:!1,authors:[{name:"Martin Oppitz",title:"Architekt@ITZBund & Creator of KoliBri",url:"https://github.com/deleonio",imageURL:"https://avatars.githubusercontent.com/u/6279703",key:"deleonio"}],frontMatter:{title:"Eigene Themes unabh\xe4ngig umsetzen",authors:"deleonio",tags:["theme","style","styleguide","corporate design","design system"]},unlisted:!1,prevItem:{title:"Wie style ich eine Komponente?",permalink:"/en/blog/2023/02/23/"},nextItem:{title:"Button and link components",permalink:"/en/blog/2023/01/09/"}},o={authorsImageUrls:[void 0]},u=[{value:"R\xfcckblick",id:"r\xfcckblick",level:2},{value:"Migration",id:"migration",level:2},{value:"Eigenes Theme erstellen",id:"eigenes-theme-erstellen",level:2},{value:"Rationale",id:"rationale",level:3},{value:"Umsetzung",id:"umsetzung",level:3}];function h(e){const n={blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"Ein gro\xdfer Vorteil von KoliBri liegt in seiner besonders guten Wiederverwendbarkeit und hohen Flexiblit\xe4t. Denn auf\nBasis der semantisch barrierefreien Komponenten, in denen alle technische und gesetzliche Anforderungen umgesetzt\nsind, k\xf6nnen eigene Themes unabh\xe4ngig erstellt werden."}),"\n",(0,r.jsx)(n.h2,{id:"r\xfcckblick",children:"R\xfcckblick"}),"\n",(0,r.jsx)(n.p,{children:"KoliBri wurde als internes Projekt des ITZBund realisiert und hat sich nat\xfcrlich dabei anfangs vor allem auf die Bed\xfcrfnisse interner\nProjekte fokussiert. Hierbei sind in erster Linie zahlreiche Themes umgesetzt worden, die nur intern Anwendung finden."}),"\n",(0,r.jsx)(s.Vp,{_label:"Liste ausgew\xe4hlter internen Themes",_headers:{horizontal:[[{label:"Name",width:"5em",key:"name"},{label:"Verwendung",key:"usage"}]]},_data:[{name:"BMF",usage:"Verwendung im BMF f\xfcr die Modernisierung der Haushaltsverfahren"},{name:"DESY",usage:"Verwendung f\xfcr das Portal im Umfeld der Generalzolldirektion"},{name:"MAPZoll",usage:"Verwendung f\xfcr das Mitarbeiterportal im Umfeld der Generalzolldirektion"},{name:"Zoll",usage:"Verwendung f\xfcr das neue Mitarbeiterportal im Umfeld der Generalzolldirektion"}]}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(n.p,{children:"Dar\xfcber hinaus wurden auch einige Themes zum Zwecke der Verbesserung umgesetzt, die als Proof-of-Concepts (PoC) dienten."}),"\n",(0,r.jsx)(s.Vp,{_label:"Liste ausgew\xe4hlter PoC-Themes",_headers:{horizontal:[[{label:"Name",width:"5em",key:"name"},{label:"Verwendung",key:"usage"}]]},_data:[{name:"BY",usage:"Umsetzung des Online-Styleguides der Bayerischen Staatsregierung als Proof-of-Concept zur Verifizierung und Verbesserung der KoliBri-Komponenten"},{name:"HH",usage:"Umsetzung des Styleguides der Hansestadt Hamburg als Proof-of-Concept zur Verifizierung und Verbesserung der KoliBri-Komponenten"},{name:"TH",usage:"Umsetzung des Styleguides des Freistaates Th\xfcringens als Proof-of-Concept zur Verifizierung und Verbesserung der KoliBri-Komponenten"}]}),"\n",(0,r.jsx)(n.h2,{id:"migration",children:"Migration"}),"\n",(0,r.jsx)(n.p,{children:"Wir beschreiben jetzt hier in der Migration einfach mal, wie wir das im ITZBund exemplarisch umgesetzt haben, weil dass sicher\nein interessanter Aspekt f\xfcr andere Beh\xf6rden, Organisationen und Unternehmen ist, wie sie eigene Themes intern bereitstellen\nk\xf6nnen."}),"\n",(0,r.jsx)(n.p,{children:"Im Grunde haben wir ein neues Repository angelegt und ein Theme-Projekt erstellt (siehe n\xe4chsten Abschnitt), in dem wir alle\ninternen Themes pflegen. Wir haben erstmal alle Themes in einem Repository, weil wir das f\xfcr die Entwicklung aktuell einfacher\nfinden. Es ist aber auch m\xf6glich, die Themes in unterschiedlichen Repositories jeweils einzeln zu pflegen."}),"\n",(0,r.jsxs)(n.p,{children:["Mittels des TypeScript-Compilers wird das Theme-Projekt in ein JavaScript-Projekt kompiliert und als NPM-Paket ",(0,r.jsx)("code",{children:"@itzbund/interne-kolibri-themes"}),"\nin unsere interne NPM-Registry versioniert gepublished."]}),"\n",(0,r.jsxs)(n.p,{children:["Damit die entwickelnden Projekte jetzt das neue Theme-Paket installieren und verwenden k\xf6nnen, muss zun\xe4chst die NPM-Konfiguration ",(0,r.jsx)("code",{children:".npmrc"}),"\nim Projekt-Verzeichnis erweitert und die neue Abh\xe4ngigkeit in die ",(0,r.jsx)("code",{children:"package.json"})," hinzugef\xfcgt werden."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:".npmrc"})})," (kann mit im Projekt-Verzeichnis liegen oder im Home-Verzeichnis des Benutzers)"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"@itzbund:registry=https://<url-zur-internen-registry>\n"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"package.json"})})," (im Projekt-Verzeichnis)"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n\t"dependencies": {\n\t\t"@itzbund/interne-kolibri-themes": "1.0.0"\n\t}\n}\n'})}),"\n",(0,r.jsx)(n.h2,{id:"eigenes-theme-erstellen",children:"Eigenes Theme erstellen"}),"\n",(0,r.jsx)(n.p,{children:"In diesem Abschnitt wollen wir einen kurzen Einblick geben, wie einfach es ist, ein eigenes Theme zu erstellen."}),"\n",(0,r.jsx)(n.h3,{id:"rationale",children:"Rationale"}),"\n",(0,r.jsxs)(n.p,{children:["Einer der wichtigsten Punkte, die man verstehen muss, liegt darin, dass KoliBri sich auf kleinteilige\nh\xe4ufig wiederverwendete Komponenten konzentriert (mehr hierzu im ",(0,r.jsx)(s.Nv,{_href:"/docs/manifest",_label:"Manifest"}),").\nDas f\xfchrt dazu, dass wir uns vorallem auf standardisierbare Komponenten fokussieren. Deutlicher wird dies,\nwenn wir uns vorstellen, eine redundante Umsetzung einer Basis-Komponente unter Beachtung der technischen und\ngesetzlichen Anforderungen zu entwickeln und am Ende feststellen - die verh\xe4lt sich ja genauso, wie eine KoliBri-\nKomponente und ist nahezu gleich semantisch aufgebaut. Insbesondere die technisch semantischen Vorgaben des W3C\nf\xfcr die assistive Unterst\xfctzung (Barrierefreiheit) f\xf6rdern das Standardisierungspotenzial."]}),"\n",(0,r.jsx)(n.p,{children:"Wir k\xf6nnen somit von einer hohen \xdcberdeckung von Komponenten ausgehen, die allgemein jedes Design System oder\nKomponenten-Bibliothek beinhalten und sich in der KoliBri-Sammlung verwendbar wiederfinden. Durch das Kompositionsprinzip\nkann einfach die passende Teilmenge aus KoliBri ausgew\xe4hlt und wiederverwendet werden. Alle nicht vereinbarten Komponenten\nk\xf6nnen unabh\xe4ngig von KoliBri und unternehmensspezifisch umgesetzt werden."}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Hinweis:"})," Es ist immer m\xf6glich eine Konstellation gegen die Wiederverwendung einer KoliBri-Komponenten aufzustellen,\ndie auf die Abweichung von der Referenzimplementierung abzielt. Es ist nicht unsere Entscheidung ob die aufgezeigte\nAbweichung eine vollst\xe4ndige Eigenentwicklung wirtschaftlich und \xf6konomisch rechtfertigt. Wir bieten eine L\xf6sung an, die\nvon alle frei und gepr\xfcft genutzt werden kann."]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"umsetzung",children:"Umsetzung"}),"\n",(0,r.jsxs)(n.p,{children:["Mit Hilfe der KoliBri-CLI (",(0,r.jsx)("code",{children:"npm init kolibri my-theme"}),") kann ein neues Theme-Projekt generiert werden. Das Theme-Projekt\nist ein TypeScript-Projekt und beinhalten schon ein Dummy-Theme. Mit Hilfe des KoliBri-Designers kann dann ein Theme\ninteraktiv auf den Basis-Komponenten erstellt, gespeichert, geladen und weiter gepflegt werden. Der vom Designer generierte Code wird\neinfach in das Theme-Projekt kopiert und kann dann mit dem TypeScript-Compiler kompiliert werden. Anschlie\xdfend kann es mittels NPM\neine interne oder in die \xf6ffentliche NPM-Registry gepublished werden."]})]})}function g(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},16034:(e,n,i)=>{i.d(n,{Z:()=>a,a:()=>l});var r=i(50959);const t={},s=r.createContext(t);function l(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);</url-zur-internen-registry>