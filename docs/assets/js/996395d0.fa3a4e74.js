"use strict";(self.webpackChunk_public_ui_docusaurus=self.webpackChunk_public_ui_docusaurus||[]).push([[4128],{9613:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>b});var r=n(9496);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,o=e.originalType,u=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),c=p(n),k=l,b=c["".concat(u,".").concat(k)]||c[k]||d[k]||o;return n?r.createElement(b,i(i({ref:t},s),{},{components:n})):r.createElement(b,i({ref:t},s))}));function b(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=n.length,i=new Array(o);i[0]=k;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a[c]="string"==typeof e?e:l,i[1]=a;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},6120:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>u,toc:()=>s});var r=n(5882),l=(n(9496),n(9613)),o=n(2431);const i={slug:"/konzepte/expert-slot",title:"Expert-Slot",description:"TODO",tags:["Architektur","arc42","Konzept"]},a=void 0,u={unversionedId:"concepts/expert-slot",id:"concepts/expert-slot",title:"Expert-Slot",description:"TODO",source:"@site/docs/20-concepts/08-expert-slot.mdx",sourceDirName:"20-concepts",slug:"/konzepte/expert-slot",permalink:"/docs/konzepte/expert-slot",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/20-concepts/08-expert-slot.mdx",tags:[{label:"Architektur",permalink:"/docs/tags/architektur"},{label:"arc42",permalink:"/docs/tags/arc-42"},{label:"Konzept",permalink:"/docs/tags/konzept"}],version:"current",sidebarPosition:8,frontMatter:{slug:"/konzepte/expert-slot",title:"Expert-Slot",description:"TODO",tags:["Architektur","arc42","Konzept"]},sidebar:"tutorialSidebar",previous:{title:"Swippling",permalink:"/docs/konzepte/swippling"},next:{title:"Internationalisierung",permalink:"/docs/concepts/internationalisierung"}},p={},s=[{value:"Motivation",id:"motivation",level:2},{value:"&quot;Expert&quot;-Slot",id:"expert-slot",level:2},{value:"Komponentenliste",id:"komponentenliste",level:3}],c={toc:s};function d(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"motivation"},"Motivation"),(0,l.kt)("p",null,(0,l.kt)("strong",null,(0,l.kt)("kol-abbr",{"_tooltip-align":"right",_title:"Komponenten-Bibliothek f\xfcr die Barrierefreiheit"},"KoliBri"))," ",'stellt in sich geschlossene barrierefreie Komponenten bereit und l\xe4sst hierzu die "Bef\xfcllung" der Komponenten i.d.R. nur \xfcber die Properties der Komponenten zu. Hierbei werden alle von au\xdfen reingegebenen Property-Werte validiert und auf den internen State gemappt.'),(0,l.kt)("p",null,(0,l.kt)("kol-indented-text",null,(0,l.kt)("strong",null,"Hierdurch behalten wir die Kontrolle \xfcber die Komponenten und deren semantische Konstruktion."))),(0,l.kt)("p",null,"Um jedoch die Wiederverwendbarkeit von"," ",(0,l.kt)("strong",null,(0,l.kt)("kol-abbr",{"_tooltip-align":"right",_title:"Komponenten-Bibliothek f\xfcr die Barrierefreiheit"},"KoliBri"))," ","weiter zu verbessern, werden wir die Flexiblit\xe4t durch einen sogenannten ",(0,l.kt)("strong",null,"Experten"),"-Modus erweitern. Der ",(0,l.kt)("strong",null,"Experten"),"-Modus definiert den Punkt, wo der ",(0,l.kt)("strong",null,"Experte")," oder die ",(0,l.kt)("strong",null,"Expertin")," mehr Gestaltungraum innerhalb der Komponente erh\xe4lt und daf\xfcr im Gegenzug die Verantwortung f\xfcr die Barrierefreiheit \xfcbernimmt."),(0,l.kt)("h2",{id:"expert-slot"},'"Expert"-Slot'),(0,l.kt)("p",null,'Mittels dem "Expert"-Slot kann die interne Konstruktion einiger Komponenten "\xfcberschrieben" werden. Gegebenenfalls ist es erforderlich an der Komponente die regul\xe4r geforderten Property-Werte auf ',(0,l.kt)("code",null,"leer")," zu setzen."),(0,l.kt)("h3",{id:"komponentenliste"},"Komponentenliste"),(0,l.kt)("ul",null,(0,l.kt)("li",null,"Badge"),(0,l.kt)("li",null,"Button"),(0,l.kt)("li",null,"ButtonLink"),(0,l.kt)("li",null,"Input, Select und Textarea bzgl. ",(0,l.kt)("code",null,"label")," (Refactoring ausstehend)"),(0,l.kt)("li",null,"Link bzgl. ",(0,l.kt)("code",null,"innerHTML")," (Refactoring ausstehend)"),(0,l.kt)("li",null,"LinkButton"),(0,l.kt)("li",null,"Tooltip ",(0,l.kt)("code",null,"innerHTML")," (Refactoring ausstehend)")),(0,l.kt)("p",null,(0,l.kt)("kol-heading",{_level:3},"Beispiel")),(0,l.kt)("p",null,"Ein Button wird regul\xe4r wie folgt verwendet:"),(0,l.kt)(o.ic,{_label:"Ich bin ein Schalter",mdxType:"KolButton"}),(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},'<KolButton _label="Ich bin ein Schalter"></KolButton>\n')),(0,l.kt)("p",null,"Mit dem Expert-Slot kann der Button jetzt auch so verwendet werden:"),(0,l.kt)(o.ic,{_label:"",mdxType:"KolButton"},(0,l.kt)("span",{slot:"expert"},"Ich bin mehr als nur ein Schalter")),(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},'<KolButton _label="">\n    <span slot="expert">Ich bin mehr als nur ein Schalter</span>\n</KolButton>\n')),(0,l.kt)("p",null,(0,l.kt)("kol-alert",{_type:"info"},(0,l.kt)("strong",null,"\xdcber das Property ",(0,l.kt)("code",null,'slot="expert"')," wird ein nachvollziehbarer \xdcbergabepunkt erm\xf6glicht und der Kontext-Wechsel klar definiert."))))}d.isMDXComponent=!0}}]);