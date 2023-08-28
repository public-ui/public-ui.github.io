"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[83494],{17942:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>c});var a=n(50959);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),s=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(o.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,p=d(e,["components","mdxType","originalType","parentName"]),u=s(n),k=r,c=u["".concat(o,".").concat(k)]||u[k]||m[k]||i;return n?a.createElement(c,l(l({ref:t},p),{},{components:n})):a.createElement(c,l({ref:t},p))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=k;var d={};for(var o in t)hasOwnProperty.call(t,o)&&(d[o]=t[o]);d.originalType=e,d[u]="string"==typeof e?e:r,l[1]=d;for(var s=2;s<i;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},60884:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>d,toc:()=>s});var a=n(15882),r=(n(50959),n(17942));const i={},l=void 0,d={unversionedId:"readmes/avatar/readme",id:"version-1.6.1/readmes/avatar/readme",title:"readme",description:"Die Avatar-Komponente zeigt entweder ein kleines Bild des Users oder dessen Initialen an, falls kein Bild vorhanden ist.",source:"@site/versioned_docs/version-1.6.1/readmes/avatar/readme.md",sourceDirName:"readmes/avatar",slug:"/readmes/avatar/",permalink:"/en/docs/readmes/avatar/",draft:!1,tags:[],version:"1.6.1",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"readme",permalink:"/en/docs/readmes/alert/"},next:{title:"readme",permalink:"/en/docs/readmes/badge/"}},o={},s=[{value:"Konstruktion",id:"konstruktion",level:2},{value:"Code",id:"code",level:3},{value:"Beispiele",id:"beispiele",level:3},{value:"Verwendung",id:"verwendung",level:2},{value:"Mit Bild",id:"mit-bild",level:3},{value:"Ohne Bild",id:"ohne-bild",level:3},{value:"Anwendungsf\xe4lle",id:"anwendungsf\xe4lle",level:3},{value:"Barrierefreiheit",id:"barrierefreiheit",level:2},{value:"Properties",id:"properties",level:2},{value:"Dependencies",id:"dependencies",level:2},{value:"Used by",id:"used-by",level:3},{value:"Graph",id:"graph",level:3}],p={toc:s},u="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Die ",(0,r.kt)("strong",{parentName:"p"},"Avatar"),"-Komponente zeigt entweder ein kleines Bild des Users oder dessen Initialen an, falls kein Bild vorhanden ist."),(0,r.kt)("h2",{id:"konstruktion"},"Konstruktion"),(0,r.kt)("h3",{id:"code"},"Code"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<kol-avatar _label="Erika Maria Mustermann"></kol-avatar>\n<kol-avatar _label="Erika"></kol-avatar>\n<kol-avatar _src="https://www.w3schools.com/howto/img_avatar.png" _label="Erika Maria Mustermann"></kol-avatar>\n')),(0,r.kt)("h3",{id:"beispiele"},"Beispiele"),(0,r.kt)("p",null,(0,r.kt)("kol-avatar",{_label:"Erika Maria Mustermann"}),"\n",(0,r.kt)("kol-avatar",{_label:"Erika"}),"\n",(0,r.kt)("kol-avatar",{_src:"https://www.w3schools.com/howto/img_avatar.png",_label:"Erika Maria Mustermann"})),(0,r.kt)("h2",{id:"verwendung"},"Verwendung"),(0,r.kt)("h3",{id:"mit-bild"},"Mit Bild"),(0,r.kt)("p",null,"In der Standard-Ansicht zeigt die ",(0,r.kt)("strong",{parentName:"p"},"Avatar"),"-Komponente ein Avatar-Bild. Hierzu muss das Attribut ",(0,r.kt)("inlineCode",{parentName:"p"},"_src")," mit einer URL zum Bild angegeben werden.",(0,r.kt)("br",{parentName:"p"}),"\n","Zus\xe4tzlich ist es notwendig, das ",(0,r.kt)("inlineCode",{parentName:"p"},"_label"),"-Attribut mit dem Namen des Benutzers anzugeben, damit ein Alternativtext ausgezeichnet werden kann."),(0,r.kt)("h3",{id:"ohne-bild"},"Ohne Bild"),(0,r.kt)("p",null,"Die ",(0,r.kt)("strong",{parentName:"p"},"Avatar"),"-Komponente kann auch ohne ",(0,r.kt)("inlineCode",{parentName:"p"},"_src"),"-Attribut verwendet werden und zeigt in diesem Fall die Initialen des Benutzers, basierend auf dem\n",(0,r.kt)("inlineCode",{parentName:"p"},"_label"),"-Attribut."),(0,r.kt)("h3",{id:"anwendungsf\xe4lle"},"Anwendungsf\xe4lle"),(0,r.kt)("p",null,"Verwenden Sie die ",(0,r.kt)("strong",{parentName:"p"},"Avatar"),"-Komponente, um das Bild eines Users anzuzeigen."),(0,r.kt)("h2",{id:"barrierefreiheit"},"Barrierefreiheit"),(0,r.kt)("p",null,"Bei der ",(0,r.kt)("strong",{parentName:"p"},"Avatar"),"-Komponente wurden insbesondere folgende Punkte der Barrierefreiheit betrachtet:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Die Komponente ist mit einem Beschreibungstext, der den Namen des Users beinhaltet, als aria-label ausgezeichnet."),(0,r.kt)("li",{parentName:"ul"},"Die Initialen, die alternativ zum Avatar-Bild gezeigt werden, werden als rein visuelles, semantisch nicht relevantes Element betrachtet und f\xfcr Screenreader\nentsprechend versteckt.")),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Attribute"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_label")," ",(0,r.kt)("em",{parentName:"td"},"(required)")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_label")),(0,r.kt)("td",{parentName:"tr",align:null},"Defines the visible or semantic label of the component (e.g. aria-label, label, headline, caption, summary, etc.)."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_src")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_src")),(0,r.kt)("td",{parentName:"tr",align:null},"Sets the image ",(0,r.kt)("inlineCode",{parentName:"td"},"src")," attribute to the given string."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},"undefined")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"undefined"))))),(0,r.kt)("h2",{id:"dependencies"},"Dependencies"),(0,r.kt)("h3",{id:"used-by"},"Used by"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"."},"kol-avatar"))),(0,r.kt)("h3",{id:"graph"},"Graph"),(0,r.kt)("mermaid",{value:"graph TD;\n  kol-avatar --\x3e kol-avatar-wc\n  style kol-avatar-wc fill:#f9f,stroke:#333,stroke-width:4px"}),(0,r.kt)("hr",null))}m.isMDXComponent=!0}}]);