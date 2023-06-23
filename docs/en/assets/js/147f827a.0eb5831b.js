"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[4930],{17942:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>c});var r=n(50959);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},k="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),k=p(n),d=a,c=k["".concat(u,".").concat(d)]||k[d]||s[d]||i;return n?r.createElement(c,l(l({ref:t},m),{},{components:n})):r.createElement(c,l({ref:t},m))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o[k]="string"==typeof e?e:a,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},36085:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>u,toc:()=>m});var r=n(15882),a=(n(50959),n(17942)),i=n(17520);const l={title:"Ank\xfcndigung Release 1.6",authors:"deleonio",tags:["release","neuerungen"]},o=void 0,u={permalink:"/en/blog/2023/06/08/",source:"@site/blog/2023-06-08.mdx",title:"Ank\xfcndigung Release 1.6",description:"WIP: Dieser Artikel wird immer wieder entwicklungsbegleitend aktualisiert.",date:"2023-06-08T00:00:00.000Z",formattedDate:"June 8, 2023",tags:[{label:"release",permalink:"/en/blog/tags/release"},{label:"neuerungen",permalink:"/en/blog/tags/neuerungen"}],readingTime:1.01,hasTruncateMarker:!1,authors:[{name:"Martin Oppitz",title:"Architekt@ITZBund & Creator of KoliBri",url:"https://github.com/deleonio",imageURL:"https://avatars.githubusercontent.com/u/6279703",key:"deleonio"}],frontMatter:{title:"Ank\xfcndigung Release 1.6",authors:"deleonio",tags:["release","neuerungen"]},nextItem:{title:"How can I add a custom button type?",permalink:"/en/blog/2023/06/05/"}},p={authorsImageUrls:[void 0]},m=[],k={toc:m},s="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(s,(0,r.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"WIP:")," Dieser Artikel wird immer wieder entwicklungsbegleitend aktualisiert.")),(0,a.kt)("h1",{id:"ank\xfcndigung---release-16"},"Ank\xfcndigung - Release 1.6"),(0,a.kt)("p",null,"Die wichtigsten \xc4nderungen sind:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Verbesserungen"),(0,a.kt)("li",{parentName:"ul"},"Refactorings",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Vereinheitlichung von Properties der Komponenten (siehe ",(0,a.kt)(i.Nv,{_href:"/docs/concepts/properties",_label:"Eigenschaften",mdxType:"KolLink"}),"-Konzept)",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"_alignment")," vom Popover in ",(0,a.kt)("inlineCode",{parentName:"li"},"_align")," umbenannt"),(0,a.kt)("li",{parentName:"ul"},"Typ ",(0,a.kt)("inlineCode",{parentName:"li"},"Alignment")," wurde intern in ",(0,a.kt)("inlineCode",{parentName:"li"},"Align")," umbenannt"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"_label")," wird in Version 2 folgende Properties ersetzen:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"_aria-label")," von Breadcrumb, Button, ButtonLink, Icon, Link, LinkButton, Modal, Nav, SkipNav, SplitButton, Symbol und Tabs"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"_caption")," von Quote und Table"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"_heading")," von Accordion, Alert, Card und Toast"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"_headline")," von Card"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"_quote")," von Quote (?)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"_summary")," von Details"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"_symbol")," von Symbol"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"_title")," von Abbr"))),(0,a.kt)("li",{parentName:"ul"},"Properties, die zuk\xfcnftig nicht mehr ben\xf6tigt werden",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"_has-footer")," von Card"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"_height_")," von Select"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"_icon-align")," ..."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"_part")," ..."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"_show-dropdown")," ..."))))))),(0,a.kt)("li",{parentName:"ul"},"Expert-Slot",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Alle Inputs-, Select- und Textarea-Komponenten haben nun einen Expert-Slot und das ",(0,a.kt)("inlineCode",{parentName:"li"},"_label")," ist Pflicht. Wenn das ",(0,a.kt)("inlineCode",{parentName:"li"},'_label=""')," leer bleibt, dann wird das Label \xfcber den Slot, wie gewohnt angezeigt."),(0,a.kt)("li",{parentName:"ul"},"Code-Replacement - am besten einzeln ersetzen:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"(<Kol(Button|Button|Link|Heading|Input[^>]+|Link|LinkButton|Select|Textarea))>(\\n?\\t*)([^\\n]+)[^<]+<\\/Kol(Button|Button|Link|Heading|Input[^>]+|Link|LinkButton|Select|Textarea)>")," -> ",(0,a.kt)("inlineCode",{parentName:"li"},'$1 _label="$5" />')))))),(0,a.kt)("li",{parentName:"ul"},"Theming"),(0,a.kt)("li",{parentName:"ul"},"Dokumentation"),(0,a.kt)("li",{parentName:"ul"},"Adapter",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Vaadin: Optimierungen am Code-Generator"),(0,a.kt)("li",{parentName:"ul"},"JSF: Verbesserung f\xfcr statische/klassische Formulare (experimental)")))))}d.isMDXComponent=!0}}]);