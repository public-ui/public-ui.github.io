"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[1230],{49613:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(59496);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),p=l(n),h=i,f=p["".concat(s,".").concat(h)]||p[h]||d[h]||o;return n?r.createElement(f,c(c({ref:t},u),{},{components:n})):r.createElement(f,c({ref:t},u))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,c=new Array(o);c[0]=h;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a[p]="string"==typeof e?e:i,c[1]=a;for(var l=2;l<o;l++)c[l]=n[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},65158:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>p,frontMatter:()=>o,metadata:()=>a,toc:()=>l});var r=n(15882),i=(n(59496),n(49613));const o={title:"Datenschutz",description:"Auf dieser Seite werden das Datenschutzkonzept zu KoliBri beschrieben.",tags:["Architektur","Datenschutz","Konzept"]},c="Datenschutzkonzept",a={unversionedId:"concepts/datenschutz",id:"concepts/datenschutz",title:"Datenschutz",description:"Auf dieser Seite werden das Datenschutzkonzept zu KoliBri beschrieben.",source:"@site/docs/20-concepts/10-datenschutz.mdx",sourceDirName:"20-concepts",slug:"/concepts/datenschutz",permalink:"/docs/concepts/datenschutz",draft:!1,tags:[{label:"Architektur",permalink:"/docs/tags/architektur"},{label:"Datenschutz",permalink:"/docs/tags/datenschutz"},{label:"Konzept",permalink:"/docs/tags/konzept"}],version:"current",sidebarPosition:10,frontMatter:{title:"Datenschutz",description:"Auf dieser Seite werden das Datenschutzkonzept zu KoliBri beschrieben.",tags:["Architektur","Datenschutz","Konzept"]},sidebar:"tutorialSidebar",previous:{title:"Inputs, Select und Textarea",permalink:"/docs/konzepte/formular-input"},next:{title:"Sicherheit",permalink:"/docs/concepts/sicherheit"}},s={},l=[{value:"Einleitung",id:"einleitung",level:2}],u={toc:l};function p(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"datenschutzkonzept"},"Datenschutzkonzept"),(0,i.kt)("p",null,"Dieses Konzept greift die aus Sicht des Datenschutz relevanten Aspekte der Komponenten-Bibliothek KoliBri\nauf und erl\xe4utert diese."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Die ",(0,i.kt)("kol-link",{_href:"/docs/datenschutz"},"Datenschutzerkl\xe4rung")," bzgl. des Open Source-Vorgehen\nwird in einem separaten Dokumente beschrieben.")),(0,i.kt)("h2",{id:"einleitung"},"Einleitung"),(0,i.kt)("p",null,"Die Komponenten-Bibliothek KoliBri hat einen ganz klaren und fokussierten Zielbereich seiner technisch\nfunktionalen Auspr\xe4gung, die ausf\xfchrlich im ",(0,i.kt)("kol-link",{_href:"/docs/manifest"},"Manifest")," beschrieben wird."),(0,i.kt)("p",null,"KoliBri ist eine Sammlung von kleinteiligen, semantisch barrierefreien und flexibel wiederverwendbaren Webcomponents\nohne jegliche Fachlogik oder sonstigen datenverarbeitetenden Funktionalit\xe4ten. Sie beinhaltet insbesondere keine\nFunktionalit\xe4ten zum Versenden von Daten. Das Ziel ist ausschlie\xdflich eine semantisch barrierefreie HTML-Auszeichnung\nder verschiedenen Elemente (Komponenten) in verschiedenen Styleguides sicherzustellen."))}p.isMDXComponent=!0}}]);