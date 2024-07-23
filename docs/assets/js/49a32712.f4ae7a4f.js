"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[56592],{14788:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>t,metadata:()=>l,toc:()=>a});var r=i(76776),s=i(108);const t={},o="Migration",l={id:"migration",title:"Migration",description:"Einleitung",source:"@site/versioned_docs/version-2.0/50-migration.mdx",sourceDirName:".",slug:"/migration",permalink:"/docs/2.0/migration",draft:!1,unlisted:!1,tags:[],version:"2.0",sidebarPosition:50,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Roadmap",permalink:"/docs/2.0/project/roadmap"},next:{title:"Testergebnisse",permalink:"/docs/2.0/test-results"}},d={},a=[{value:"Einleitung",id:"einleitung",level:2},{value:"Migration von Version 1 auf Version 2",id:"migration-von-version-1-auf-version-2",level:2},{value:"Hinweise zum Upgrade auf Version 2",id:"hinweise-zum-upgrade-auf-version-2",level:3},{value:"Breaking Changes f\xfcr Version 2",id:"breaking-changes-f\xfcr-version-2",level:3},{value:"Migration durchf\xfchren",id:"migration-durchf\xfchren",level:2},{value:"Migration mit Migrationstool",id:"migration-mit-migrationstool",level:3},{value:"Migration manuell durchf\xfchren",id:"migration-manuell-durchf\xfchren",level:3}];function u(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.M)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"migration",children:"Migration"}),"\n",(0,r.jsx)(n.h2,{id:"einleitung",children:"Einleitung"}),"\n",(0,r.jsx)(n.p,{children:"Neue Major-Versionen von KoliBri werden mit dem Ziel entwickelt, die Wartung und Pflege zu vereinfachen und Weiterentwicklung zu f\xf6rdern."}),"\n",(0,r.jsx)(n.p,{children:"Dies bedeutet, dass ggf. Komponenten, Eigenschaften oder Funktionalit\xe4ten entfernt werden und technologische Voraussetzungen geschaffen werden, um einen zuk\xfcnftigen innovativen Wandel zu beg\xfcnstigt."}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Wartungs- und Pflegestrategie:"}),(0,r.jsx)("br",{}),"\nWir werden immer die neuste und die vorherige Major-Version von KoliBri pflegen. Dies bedeutet, dass wir f\xfcr diese Versionen Fehler beheben und Sicherheitsl\xfccken schlie\xdfen. F\xfcr alle anderen Versionen werden wir ohne Weiteres keine Fehlerbehebungen oder Sicherheitsupdates mehr bereitstellen."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Weiterentwicklung:"}),(0,r.jsx)("br",{}),"\nWir werden immer die neuste Major-Version von KoliBri weiterentwickeln. Dies bedeutet, dass wir f\xfcr diese Versionen neue Features und Funktionalit\xe4ten bereitstellen. F\xfcr alle anderen Versionen werden wir ohne Weiteres keine neuen Features oder Funktionalit\xe4ten mehr bereitstellen."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Vor der Migration einen lauff\xe4higen Stand sichern:"}),(0,r.jsx)("br",{}),"\nBevor die Migration erfolgt, empfehlen wir einen lauff\xe4higen Stand einzuchecken und somit keine uncommiteten \xc4nderungen auf dem zu migrierenden Quellcode zu haben. W\xe4hrend und nach der Migration k\xf6nnen so alle \xc4nderungen gut nachvollzogen und gepr\xfcft werden."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Migrationstool:"}),(0,r.jsx)("br",{}),"\nWir stellen ein Migrationstool bereit, welches generell die Migration von Quellcode mit KoliBri unterst\xfctzt. Dieses Tool ist in der Lage, die meisten Breaking Changes automatisch zu migrieren. Weitere Informationen finden Sie in der ",(0,r.jsx)(n.a,{href:"https://www.npmjs.com/package/@public-ui/kolibri-cli",children:"Tool-Dokumentation (EN)"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Hilfe und Feedback:"}),(0,r.jsx)("br",{}),"\nSollte es Probleme bei der Migration geben, stehen wir gerne zur Verf\xfcgung. Bitte er\xf6ffnen Sie ein ",(0,r.jsx)(n.a,{href:"https://github.com/public-ui/kolibri/issues/new/choose",children:"Issue auf GitHub"}),"."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"migration-von-version-1-auf-version-2",children:"Migration von Version 1 auf Version 2"}),"\n",(0,r.jsx)(n.h3,{id:"hinweise-zum-upgrade-auf-version-2",children:"Hinweise zum Upgrade auf Version 2"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Neue Eigenschaften in Version 2 bereits ab Version 1.7 verf\xfcgbar:"}),(0,r.jsx)("br",{}),"\nDie meisten neuen Eigenschaften, die in Version 2 eingef\xfchrt werden, sind bereits ab der Version 1.7 und h\xf6her verf\xfcgbar. Dies bedeutet, dass Anwendungen, die auf Version 1.7 oder h\xf6her basieren, m\xf6glicherweise bereits \xfcber die erforderlichen Funktionen verf\xfcgen, um eine reibungslose Migration zu erm\xf6glichen."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Entfernte Eigenschaften, Komponenten und Funktionalit\xe4ten waren in Version 1.7 und h\xf6her bereits als veraltet markiert:"}),(0,r.jsx)("br",{}),"\nAlle Eigenschaften, Komponenten und Funktionalit\xe4ten, die in Version 2 entfernt wurden, waren in Version 1.7 und h\xf6her bereits als veraltet (",(0,r.jsx)(n.code,{children:"deprecated"}),") gekennzeichnet. Wenn Sie also regelm\xe4\xdfig Ihre Codebasis aktualisiert haben, sollten Sie bereits darauf vorbereitet sein, diese Elemente zu ersetzen."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Migration ab Version 1.7 minimiert potenzielle \xc4nderungen:"}),(0,r.jsx)("br",{}),"\nEine Migration von Version 1.7 und h\xf6her auf Version 2 wird voraussichtlich die geringsten Anpassungen erfordern. Die Wahrscheinlichkeit von Inkompatibilit\xe4ten ist niedrig, da die meisten \xc4nderungen und Entfernungen bereits in den vorherigen Versionen als veraltet markiert wurden."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Migration ab Version 1.4 ist m\xf6glich:"}),(0,r.jsx)("br",{}),"\nObwohl eine Migration ab Version 1.7 empfohlen wird, ist es auch m\xf6glich, von Version 1.4 auf Version 2 zu migrieren. Beachten Sie jedoch, dass dies m\xf6glicherweise zus\xe4tzliche Anpassungen erfordert, da einige der notwendigen Funktionen m\xf6glicherweise erst ab Version 1.7 verf\xfcgbar sind."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Vereinfachte Registrierung beachten:"}),(0,r.jsx)("br",{}),"\nWir haben in Version 1 und f\xfcr Version 2 die Modularisierung von KoliBri vereinfacht. Das Modul ",(0,r.jsx)(n.code,{children:"@public-ui/core"})," wurde entfernt und die Funktionalit\xe4ten in das Modul ",(0,r.jsx)(n.code,{children:"@public-ui/components"})," verschoben."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-diff",children:" - import { register } from '@public-ui/core';\n + import { register } from '@public-ui/components';\n import { defineCustomElements } from '@public-ui/components/dist/loader';\n import { MyTheme } from '...';\n await register(MyTheme, defineCustomElements);\n"})}),"\n",(0,r.jsx)(n.h3,{id:"breaking-changes-f\xfcr-version-2",children:"Breaking Changes f\xfcr Version 2"}),"\n",(0,r.jsxs)(n.p,{children:["Mehr Informationen zu Breaking Changes finden Sie in der Dokumentation ",(0,r.jsx)(n.a,{href:"https://github.com/public-ui/kolibri/blob/develop/docs/BREAKING_CHANGES.v2.md",children:"BREAKING_CHANGES.v2.md (EN)"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"migration-durchf\xfchren",children:"Migration durchf\xfchren"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["[!TIP]\nWir empfehlen, die Migration mit dem Migrationstool durchzuf\xfchren. Dieses Tool ist in der Lage, die meisten Breaking Changes automatisch zu migrieren. Weitere Informationen finden Sie in der ",(0,r.jsx)(n.a,{href:"https://www.npmjs.com/package/@public-ui/kolibri-cli",children:"Tool-Dokumentation (EN)"}),"."]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"migration-mit-migrationstool",children:"Migration mit Migrationstool"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Vorbereitung:"}),(0,r.jsx)("br",{}),"\nDas Projekt ist auf einer fr\xfcheren Version, alle Abh\xe4ngigkeiten sind installiert, das Projekt ist lauff\xe4hig und alle \xc4nderungen sind eingecheckt und sicher gepusht."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Migration ausf\xfchren:"}),(0,r.jsx)("br",{}),"\nF\xfchren Sie den folgenden Befehl aus, um das Migration auszuf\xfchren: ",(0,r.jsx)(n.code,{children:"npx @public-ui/kolibri-cli migrate src"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Migration pr\xfcfen:"}),(0,r.jsx)("br",{}),"\nPr\xfcfen Sie die \xc4nderungen und f\xfchren Sie die Anwendung aus, um sicherzustellen, dass alles wie erwartet funktioniert."]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"migration-manuell-durchf\xfchren",children:"Migration manuell durchf\xfchren"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Vorbereitung:"}),(0,r.jsx)("br",{}),"\nDas Projekt ist auf einer fr\xfcheren Version, alle Abh\xe4ngigkeiten sind installiert, das Projekt ist lauff\xe4hig und alle \xc4nderungen sind eingecheckt und sicher gepusht."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Migration durchf\xfchren:"}),(0,r.jsx)("br",{}),"\nF\xfchren Sie die Migration durch, indem Sie die Breaking Changes in der jeweiligen Dokumentation."]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,s.M)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},108:(e,n,i)=>{i.d(n,{I:()=>l,M:()=>o});var r=i(80924);const s={},t=r.createContext(s);function o(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);