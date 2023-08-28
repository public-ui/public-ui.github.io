"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[58626],{17942:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>m});var r=t(50959);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=r.createContext({}),u=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},c=function(e){var n=u(e.components);return r.createElement(l.Provider,{value:n},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),d=u(t),f=i,m=d["".concat(l,".").concat(f)]||d[f]||p[f]||o;return t?r.createElement(m,s(s({ref:n},c),{},{components:t})):r.createElement(m,s({ref:n},c))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,s=new Array(o);s[0]=f;var a={};for(var l in n)hasOwnProperty.call(n,l)&&(a[l]=n[l]);a.originalType=e,a[d]="string"==typeof e?e:i,s[1]=a;for(var u=2;u<o;u++)s[u]=t[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},65087:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>a,toc:()=>u});var r=t(15882),i=(t(50959),t(17942));const o={title:"Testvorgehen",description:"Auf dieser Seite wird das Testkonzept beschrieben.",tags:["Barrierefreiheit","BIK BITV","Konzept"]},s="Testvorgehen",a={unversionedId:"concepts/test",id:"concepts/test",title:"Testvorgehen",description:"Auf dieser Seite wird das Testkonzept beschrieben.",source:"@site/docs/20-concepts/03-test.md",sourceDirName:"20-concepts",slug:"/concepts/test",permalink:"/docs/next/concepts/test",draft:!1,tags:[{label:"Barrierefreiheit",permalink:"/docs/next/tags/barrierefreiheit"},{label:"BIK BITV",permalink:"/docs/next/tags/bik-bitv"},{label:"Konzept",permalink:"/docs/next/tags/konzept"}],version:"current",sidebarPosition:3,frontMatter:{title:"Testvorgehen",description:"Auf dieser Seite wird das Testkonzept beschrieben.",tags:["Barrierefreiheit","BIK BITV","Konzept"]},sidebar:"tutorialSidebar",previous:{title:"Eigenschaften",permalink:"/docs/next/concepts/properties"},next:{title:"Theming",permalink:"/docs/next/concepts/styling/theming"}},l={},u=[{value:"Test neuer Komponenten und Funktionalit\xe4ten",id:"test-neuer-komponenten-und-funktionalit\xe4ten",level:2},{value:"Testergebnisse und Transparenz",id:"testergebnisse-und-transparenz",level:2}],c={toc:u},d="wrapper";function p(e){let{components:n,...t}=e;return(0,i.kt)(d,(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"testvorgehen"},"Testvorgehen"),(0,i.kt)("p",null,"Nur durch umfangreiche und kontinuierliche Durchf\xfchrung von Tests k\xf6nnen die Funktionalit\xe4t und die Barrierefreiheit als elementare Qualit\xe4tsziele von KoliBri dauerhaft sichergestellt werden."),(0,i.kt)("p",null,"Zur Sicherstellung der korrekten Funktionsweise der Komponenten werden dabei etablierte Test-Methoden wie Unit-Test, Snapshot-Test und visuelle Screenshot-Tests angewendet."),(0,i.kt)("p",null,"Um die Barrierefreiheit der KoliBri-Komponentenbibliothek zu gew\xe4hrleisten, wurde ein Testvorgehen basierend auf dem BIK BITV-Test etabliert, das an die Besonderheiten der Entwicklung von Web Components angepasst wurde. Dazu wurden die einzelnen Pr\xfcfschritte des BIK BITV-Tests hinsichtlich ihrer Anwendbarkeit auf jede zu testende Komponenten \xfcberpr\xfcft und somit ein auf die Komponentenbibliothek abgestimmter Testkatalog definiert. Die Verantwortung f\xfcr die Durchf\xfchrung obliegt dabei dem ITZBund-internen Barrierefreiheitstestteam."),(0,i.kt)("h2",{id:"test-neuer-komponenten-und-funktionalit\xe4ten"},"Test neuer Komponenten und Funktionalit\xe4ten"),(0,i.kt)("p",null,"Neue Komponenten oder Funktionalit\xe4ten k\xf6nnen als ungetestet markiert sein, da der vollst\xe4ndige Barrierefreiheitstest noch aussteht. Der vollst\xe4ndige Test kann bei neuen Komponenten und Funktionalit\xe4ten ggf. erst nach einem abgeschlossenen Release erfolgen."),(0,i.kt)("h2",{id:"testergebnisse-und-transparenz"},"Testergebnisse und Transparenz"),(0,i.kt)("p",null,"Wir arbeiten aktuell daran alle Test-Ergebnisse in die Komponent-Dokumentation zu \xfcbernehmen, um eine bestm\xf6gliche Transparenz zu erm\xf6glichen. So ist es m\xf6glich den Test-Umfang zu sehen, nachvollziehen zu k\xf6nnen und ggf. Hinweise geben zu k\xf6nnen, wo der Test verbessert werden kann."))}p.isMDXComponent=!0}}]);