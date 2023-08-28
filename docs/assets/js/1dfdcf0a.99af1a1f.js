"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[81509],{17942:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>g});var r=t(50959);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),u=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=u(e.components);return r.createElement(s.Provider,{value:n},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=u(t),d=o,g=m["".concat(s,".").concat(d)]||m[d]||p[d]||a;return t?r.createElement(g,l(l({ref:n},c),{},{components:t})):r.createElement(g,l({ref:n},c))}));function g(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,l=new Array(a);l[0]=d;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i[m]="string"==typeof e?e:o,l[1]=i;for(var u=2;u<a;u++)l[u]=t[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},69885:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var r=t(15882),o=(t(50959),t(17942)),a=t(57349);const l={authors:"deleonio",tags:["theming","styling","button"]},i="Wie kann ich einen eigenen Button-Typ hinzuf\xfcgen?",s={permalink:"/blog/2023/06/05/",source:"@site/blog/2023-06-05.mdx",title:"Wie kann ich einen eigenen Button-Typ hinzuf\xfcgen?",description:"Im Grunde ist es so, dass jede Komponente innerhalb ihrere HTML-Struktur frei gestylt werden kann.",date:"2023-06-05T00:00:00.000Z",formattedDate:"5. Juni 2023",tags:[{label:"theming",permalink:"/blog/tags/theming"},{label:"styling",permalink:"/blog/tags/styling"},{label:"button",permalink:"/blog/tags/button"}],readingTime:1.78,hasTruncateMarker:!1,authors:[{name:"Martin Oppitz",title:"Architekt@ITZBund & Creator of KoliBri",url:"https://github.com/deleonio",imageURL:"https://avatars.githubusercontent.com/u/6279703",key:"deleonio"}],frontMatter:{authors:"deleonio",tags:["theming","styling","button"]},prevItem:{title:"Ank\xfcndigung Release 1.6",permalink:"/blog/2023/06/08/"},nextItem:{title:"Wie kann ich Icons im Theme \xe4ndern?",permalink:"/blog/2023/05/12/"}},u={authorsImageUrls:[void 0]},c=[{value:"Button und Custom-Class",id:"button-und-custom-class",level:2},{value:"Custom-Class im Theme hinterlegen",id:"custom-class-im-theme-hinterlegen",level:3},{value:"Custom-Class verwenden",id:"custom-class-verwenden",level:3},{value:"Icon im Button von au\xdfen stylen",id:"icon-im-button-von-au\xdfen-stylen",level:2}],m={toc:c},p="wrapper";function d(e){let{components:n,...t}=e;return(0,o.kt)(p,(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Im Grunde ist es so, dass jede Komponente innerhalb ihrere HTML-Struktur frei gestylt werden kann."),(0,o.kt)("p",null,"Mit Hilfe unsereres Designers oder dem SCSS-Script k\xf6nnen vorhandene Themes angepasst oder eigenes Theme erstellt werden."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/concepts/styling/designer"},"Designer")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/concepts/styling/scss"},"SCSS-Script"))),(0,o.kt)("h2",{id:"button-und-custom-class"},"Button und Custom-Class"),(0,o.kt)("p",null,"Beim Button/Schalter gibt es 5 Typen, die von der Design Sprache der Design Systeme abgeleitet wurden:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"primary: Schalter f\xfcr Hauptaktion (z.B. speichern)"),(0,o.kt)("li",{parentName:"ul"},"secondary: Schalter f\xfcr Sekund\xe4raktion (z.B. abbrechen)"),(0,o.kt)("li",{parentName:"ul"},"normal/tertiary: Schalter f\xfcr Terti\xe4raktion (z.B. zur\xfcck)"),(0,o.kt)("li",{parentName:"ul"},'danger: Schalter f\xfcr "\u201egef\xe4hrliche\u201d Aktionen (z.B. l\xf6schen)'),(0,o.kt)("li",{parentName:"ul"},'ghost:Schalter f\xfcr "unscheinbare\u201d Aktionen (z.B. Hilfe)')),(0,o.kt)("p",null,"Neben diesen Basis-Typen k\xf6nnen noch weiterer Typen mittels Custom-Class hinzugef\xfcgt werden.\nDazu m\xfcssen jedoch alle Custom-Classes im CSS des Theme hinterlegt werden."),(0,o.kt)("kol-details",{_summary:"Warum?",_open:!0},"In der Umsetzung soll ein abgestimmtes Design System / Design Sprache nicht willk\xfcrlich ge\xe4ndert oder erweitert werden. Alle definierten Custom-Buttons werden schon bei der Erstellung des Themes bereitgestellt und deren Verwendung in der Dokumentation des eigenen Design Systems beschrieben."),(0,o.kt)("h3",{id:"custom-class-im-theme-hinterlegen"},"Custom-Class im Theme hinterlegen"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Theme-Designer \xf6ffnen"),(0,o.kt)("li",{parentName:"ol"},"Theme ausw\xe4hlen"),(0,o.kt)("li",{parentName:"ol"},"Button-Komponente ausw\xe4hlen"),(0,o.kt)("li",{parentName:"ol"},"Schalter auf Komponent-Styling umstellen"),(0,o.kt)("li",{parentName:"ol"},"CSS f\xfcr den Custom-Button eintragen und speichern (bei ",(0,o.kt)("inlineCode",{parentName:"li"},"primary")," abschauen)"),(0,o.kt)("li",{parentName:"ol"},"Theme in Projekt \xfcbernehmen")),(0,o.kt)("p",null,"Beispiel f\xfcr Custom-Class ",(0,o.kt)("inlineCode",{parentName:"p"},"loading"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-css"},".loading :is(a, button) > kol-span-wc kol-icon {\n    animation: spin 2.5s infinite linear;\n    display: block;\n}\n/* https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion#toning_down_the_animation_scaling */\n@media (prefers-reduced-motion) {\n    .loading :is(a, button) > kol-span-wc kol-icon {\n        animation-duration: 5s;\n    }\n}\n@keyframes spin {\n    from {\n        transform: rotate(0deg);\n    }\n    to {\n        transform: rotate(360deg);\n    }\n}\n")),(0,o.kt)("h3",{id:"custom-class-verwenden"},"Custom-Class verwenden"),(0,o.kt)("p",null,"Um in den Custom-Modus zu schalten, muss das Property ",(0,o.kt)("inlineCode",{parentName:"p"},"_variant")," auf ",(0,o.kt)("inlineCode",{parentName:"p"},"custom")," gesetzt werden. Danach\nk\xf6nnen \xfcber das Property ",(0,o.kt)("inlineCode",{parentName:"p"},"_custom-class")," beliebige vordefinierte Custom-Classes \xfcbergeben werden."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<kol-button _custom-class="loading" _label="Speichern" variant="custom"></kol-button>\n')),(0,o.kt)("h2",{id:"icon-im-button-von-au\xdfen-stylen"},"Icon im Button von au\xdfen stylen"),(0,o.kt)("p",null,"Es ist m\xf6glich dem Button einen Icon-Style zu \xfcbergeben. Dazu muss dem Property ",(0,o.kt)("inlineCode",{parentName:"p"},"_icon")," der gew\xfcnschte Style \xfcbergeben werden."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"<KolButton\n    _icon={{\n        left: {\n            icon: 'codicon codicon-home',\n            style: {\n                color: 'red',\n                'font-size': '300%',\n            },\n        },\n    }}\n    _label=\"Schalter mit gro\xdfen roten Icon\"\n></KolButton>\n")),(0,o.kt)(a.ic,{_icon:{left:{icon:"codicon codicon-home",style:{color:"red","font-size":"300%"}}},_label:"Schalter mit gro\xdfen roten Icon",mdxType:"KolButton"}))}d.isMDXComponent=!0}}]);