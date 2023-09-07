"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[74886],{17942:(t,e,n)=>{n.d(e,{Zo:()=>m,kt:()=>u});var r=n(50959);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var p=r.createContext({}),d=function(t){var e=r.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},m=function(t){var e=d(t.components);return r.createElement(p.Provider,{value:e},t.children)},c="mdxType",k={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},g=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,i=t.originalType,p=t.parentName,m=o(t,["components","mdxType","originalType","parentName"]),c=d(n),g=a,u=c["".concat(p,".").concat(g)]||c[g]||k[g]||i;return n?r.createElement(u,l(l({ref:e},m),{},{components:n})):r.createElement(u,l({ref:e},m))}));function u(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=n.length,l=new Array(i);l[0]=g;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o[c]="string"==typeof t?t:a,l[1]=o;for(var d=2;d<i;d++)l[d]=n[d];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},1248:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>l,default:()=>k,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var r=n(15882),a=(n(50959),n(17942));const i={title:"Aria-Attributen bei Button- und Link",authors:"deleonio",tags:["aria","button","link"]},l=void 0,o={permalink:"/blog/2023/07/26/",source:"@site/blog/2023-07-26.mdx",title:"Aria-Attributen bei Button- und Link",description:"Bei der Entwicklung von KoliBri ist die Frage aufgekommen, welche Aria-Attributen bei den Button- und Link-Komponenten unterst\xfctzen werden sollen.",date:"2023-07-26T00:00:00.000Z",formattedDate:"26. Juli 2023",tags:[{label:"aria",permalink:"/blog/tags/aria"},{label:"button",permalink:"/blog/tags/button"},{label:"link",permalink:"/blog/tags/link"}],readingTime:1.185,hasTruncateMarker:!1,authors:[{name:"Martin Oppitz",title:"Architekt@ITZBund & Creator of KoliBri",url:"https://github.com/deleonio",imageURL:"https://avatars.githubusercontent.com/u/6279703",key:"deleonio"}],frontMatter:{title:"Aria-Attributen bei Button- und Link",authors:"deleonio",tags:["aria","button","link"]},prevItem:{title:"Formular-Handling mit React Hook Form",permalink:"/blog/2023/08/29/"},nextItem:{title:"KoliBri - intuitiv erlernen",permalink:"/blog/2023/07/11/"}},p={authorsImageUrls:[void 0]},d=[],m={toc:d},c="wrapper";function k(t){let{components:e,...n}=t;return(0,a.kt)(c,(0,r.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Bei der Entwicklung von KoliBri ist die Frage aufgekommen, welche Aria-Attributen bei den Button- und Link-Komponenten unterst\xfctzen werden sollen."),(0,a.kt)("p",null,"In der folgenden Tabelle wir eine \xdcbersicht \xfcber die Unterschiede dargestellt:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"center"},"Merkmal"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Link"),(0,a.kt)("th",{parentName:"tr",align:"center"},"LinkButton"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Button"),(0,a.kt)("th",{parentName:"tr",align:"center"},"ButtonLink"),(0,a.kt)("th",{parentName:"tr",align:"center"},"ToogleButton",(0,a.kt)("sup",null,"1")))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"Design"),(0,a.kt)("td",{parentName:"tr",align:"center"},"Link"),(0,a.kt)("td",{parentName:"tr",align:"center"},"Button"),(0,a.kt)("td",{parentName:"tr",align:"center"},"Button"),(0,a.kt)("td",{parentName:"tr",align:"center"},"Link"),(0,a.kt)("td",{parentName:"tr",align:"center"},"Button")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"Semantik"),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("inlineCode",{parentName:"td"},"a")),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("inlineCode",{parentName:"td"},"a")),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("inlineCode",{parentName:"td"},"button")),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("inlineCode",{parentName:"td"},"button")),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("inlineCode",{parentName:"td"},"input"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("inlineCode",{parentName:"td"},"_ariaControls")),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2796"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2796"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2795"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2795"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2753")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("inlineCode",{parentName:"td"},"_ariaCurrent"),(0,a.kt)("sup",null,"2")),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2795"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2795"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2796"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2796"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2753")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("inlineCode",{parentName:"td"},"_ariaExpanded")),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2796"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2796"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2795"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2795"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2753")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("inlineCode",{parentName:"td"},"_ariaSelected")),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2796"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2796"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2795"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2795"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2753")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("inlineCode",{parentName:"td"},"_disabled")),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2796"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2796"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2795"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2795"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2795")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("inlineCode",{parentName:"td"},"_href")),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2795"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2795"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2796"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2796"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2796")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("inlineCode",{parentName:"td"},"_on")),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2795"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2795"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2795"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2795"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2795")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("inlineCode",{parentName:"td"},"_value")),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2796"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2796"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2795"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2795"),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("inlineCode",{parentName:"td"},"boolean"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("inlineCode",{parentName:"td"},"focus()")),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2795"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2795"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2795"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2795"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2795")))),(0,a.kt)("small",null,(0,a.kt)("sup",null,"1"),' Der Toogle-Button wurde als Variante der Checkbox umgesetzt, weil es ein Schalter mit maximal zwei Zust\xe4nden (entweder "an" oder "aus") ist.',(0,a.kt)("br",null),(0,a.kt)("sup",null,"2")," Das `_ariaCurrent`-Attribut wird zuk\xfcnftig \xfcber ein Event statt ein Property gesetzt."))}k.isMDXComponent=!0}}]);