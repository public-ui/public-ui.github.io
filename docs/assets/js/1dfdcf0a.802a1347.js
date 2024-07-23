"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[84256],{34908:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>c,toc:()=>d});var s=t(76776),i=t(108),r=t(64992);const l={authors:"deleonio",tags:["theming","styling","button"]},o="Wie kann ich einen eigenen Button-Typ hinzuf\xfcgen?",c={permalink:"/blog/2023/06/05/",source:"@site/blog/2023-06-05.mdx",title:"Wie kann ich einen eigenen Button-Typ hinzuf\xfcgen?",description:"Im Grunde ist es so, dass jede Komponente innerhalb ihrere HTML-Struktur frei gestylt werden kann.",date:"2023-06-05T00:00:00.000Z",tags:[{inline:!0,label:"theming",permalink:"/blog/tags/theming"},{inline:!0,label:"styling",permalink:"/blog/tags/styling"},{inline:!0,label:"button",permalink:"/blog/tags/button"}],readingTime:1.78,hasTruncateMarker:!1,authors:[{name:"Martin Oppitz",title:"Architekt@ITZBund & Creator of KoliBri",url:"https://github.com/deleonio",imageURL:"https://avatars.githubusercontent.com/u/6279703",key:"deleonio"}],frontMatter:{authors:"deleonio",tags:["theming","styling","button"]},unlisted:!1,prevItem:{title:"Ank\xfcndigung Release 1.6",permalink:"/blog/2023/06/08/"},nextItem:{title:"Wie kann ich Icons im Theme \xe4ndern?",permalink:"/blog/2023/05/12/"}},a={authorsImageUrls:[void 0]},d=[{value:"Button und Custom-Class",id:"button-und-custom-class",level:2},{value:"Custom-Class im Theme hinterlegen",id:"custom-class-im-theme-hinterlegen",level:3},{value:"Custom-Class verwenden",id:"custom-class-verwenden",level:3},{value:"Icon im Button von au\xdfen stylen",id:"icon-im-button-von-au\xdfen-stylen",level:2}];function h(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,i.M)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"Im Grunde ist es so, dass jede Komponente innerhalb ihrere HTML-Struktur frei gestylt werden kann."}),"\n",(0,s.jsx)(n.p,{children:"Mit Hilfe unsereres Designers oder dem SCSS-Script k\xf6nnen vorhandene Themes angepasst oder eigenes Theme erstellt werden."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/docs/concepts/styling/designer",children:"Designer"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/docs/concepts/styling/scss",children:"SCSS-Script"})}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"button-und-custom-class",children:"Button und Custom-Class"}),"\n",(0,s.jsx)(n.p,{children:"Beim Button/Schalter gibt es 5 Typen, die von der Design Sprache der Design Systeme abgeleitet wurden:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"primary: Schalter f\xfcr Hauptaktion (z.B. speichern)"}),"\n",(0,s.jsx)(n.li,{children:"secondary: Schalter f\xfcr Sekund\xe4raktion (z.B. abbrechen)"}),"\n",(0,s.jsx)(n.li,{children:"normal/tertiary: Schalter f\xfcr Terti\xe4raktion (z.B. zur\xfcck)"}),"\n",(0,s.jsx)(n.li,{children:'danger: Schalter f\xfcr "\u201egef\xe4hrliche\u201d Aktionen (z.B. l\xf6schen)'}),"\n",(0,s.jsxs)(n.li,{children:["ghost",":Schalter",' f\xfcr "unscheinbare\u201d Aktionen (z.B. Hilfe)']}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Neben diesen Basis-Typen k\xf6nnen noch weiterer Typen mittels Custom-Class hinzugef\xfcgt werden.\nDazu m\xfcssen jedoch alle Custom-Classes im CSS des Theme hinterlegt werden."}),"\n",(0,s.jsx)("kol-details",{_label:"Warum?",_open:!0,children:(0,s.jsx)(n.p,{children:"In der Umsetzung soll ein abgestimmtes Design System / Design Sprache nicht willk\xfcrlich ge\xe4ndert oder erweitert\nwerden. Alle definierten Custom-Buttons werden schon bei der Erstellung des Themes bereitgestellt und deren Verwendung\nin der Dokumentation des eigenen Design Systems beschrieben."})}),"\n",(0,s.jsx)(n.h3,{id:"custom-class-im-theme-hinterlegen",children:"Custom-Class im Theme hinterlegen"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Theme-Designer \xf6ffnen"}),"\n",(0,s.jsx)(n.li,{children:"Theme ausw\xe4hlen"}),"\n",(0,s.jsx)(n.li,{children:"Button-Komponente ausw\xe4hlen"}),"\n",(0,s.jsx)(n.li,{children:"Schalter auf Komponent-Styling umstellen"}),"\n",(0,s.jsxs)(n.li,{children:["CSS f\xfcr den Custom-Button eintragen und speichern (bei ",(0,s.jsx)(n.code,{children:"primary"})," abschauen)"]}),"\n",(0,s.jsx)(n.li,{children:"Theme in Projekt \xfcbernehmen"}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Beispiel f\xfcr Custom-Class ",(0,s.jsx)(n.code,{children:"loading"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-css",children:".loading :is(a, button) > kol-span-wc kol-icon {\n\tanimation: spin 2.5s infinite linear;\n\tdisplay: block;\n}\n/* https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion#toning_down_the_animation_scaling */\n@media (prefers-reduced-motion) {\n\t.loading :is(a, button) > kol-span-wc kol-icon {\n\t\tanimation-duration: 5s;\n\t}\n}\n@keyframes spin {\n\tfrom {\n\t\ttransform: rotate(0deg);\n\t}\n\tto {\n\t\ttransform: rotate(360deg);\n\t}\n}\n"})}),"\n",(0,s.jsx)(n.h3,{id:"custom-class-verwenden",children:"Custom-Class verwenden"}),"\n",(0,s.jsxs)(n.p,{children:["Um in den Custom-Modus zu schalten, muss das Property ",(0,s.jsx)(n.code,{children:"_variant"})," auf ",(0,s.jsx)(n.code,{children:"custom"})," gesetzt werden. Danach\nk\xf6nnen \xfcber das Property ",(0,s.jsx)(n.code,{children:"_custom-class"})," beliebige vordefinierte Custom-Classes \xfcbergeben werden."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-html",children:'<kol-button _custom-class="loading" _label="Speichern" variant="custom"></kol-button>\n'})}),"\n",(0,s.jsx)(n.h2,{id:"icon-im-button-von-au\xdfen-stylen",children:"Icon im Button von au\xdfen stylen"}),"\n",(0,s.jsxs)(n.p,{children:["Es ist m\xf6glich dem Button einen Icon-Style zu \xfcbergeben. Dazu muss dem Property ",(0,s.jsx)(n.code,{children:"_icon"})," der gew\xfcnschte Style \xfcbergeben werden."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",children:"<KolButton\n\t_icons={{\n\t\tleft: {\n\t\t\ticon: 'codicon codicon-home',\n\t\t\tstyle: {\n\t\t\t\tcolor: 'red',\n\t\t\t\t'font-size': '300%',\n\t\t\t},\n\t\t},\n\t}}\n\t_label=\"Schalter mit gro\xdfen roten Icon\"\n></KolButton>\n"})}),"\n",(0,s.jsx)(r.qC,{_icons:{left:{icon:"codicon codicon-home",style:{color:"red","font-size":"300%"}}},_label:"Schalter mit gro\xdfen roten Icon"})]})}function u(e={}){const{wrapper:n}={...(0,i.M)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},108:(e,n,t)=>{t.d(n,{I:()=>o,M:()=>l});var s=t(80924);const i={},r=s.createContext(i);function l(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);