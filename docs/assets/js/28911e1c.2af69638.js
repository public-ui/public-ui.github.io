"use strict";(self.webpackChunk_public_ui_docusaurus=self.webpackChunk_public_ui_docusaurus||[]).push([[7296],{9613:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(9496);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,u=d(e,["components","mdxType","originalType","parentName"]),p=l(n),m=i,f=p["".concat(s,".").concat(m)]||p[m]||c[m]||o;return n?r.createElement(f,a(a({ref:t},u),{},{components:n})):r.createElement(f,a({ref:t},u))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=m;var d={};for(var s in t)hasOwnProperty.call(t,s)&&(d[s]=t[s]);d.originalType=e,d[p]="string"==typeof e?e:i,a[1]=d;for(var l=2;l<o;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},126:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>d,toc:()=>l});var r=n(5882),i=(n(9496),n(9613));const o={},a="IndentedText",d={unversionedId:"components/indented-text/readme",id:"components/indented-text/readme",title:"IndentedText",description:"Heben Sie einzelne Informationen auf Ihrer Webseite optisch mit der IndentedText-Komponente hervor. Die Komponente eignet sich nicht nur f\xfcr besondere Abschnitte auf der Webseite, sondern auch beispielsweise f\xfcr Zitate.",source:"@site/docs/30-components/indented-text/readme.md",sourceDirName:"30-components/indented-text",slug:"/components/indented-text/",permalink:"/docs/components/indented-text/",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/30-components/indented-text/readme.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"IconIcofont",permalink:"/docs/components/icon-icofont/"},next:{title:"InputAdapterLeanup",permalink:"/docs/components/input-adapter-leanup/"}},s={},l=[{value:"Konstruktion",id:"konstruktion",level:2},{value:"Code",id:"code",level:3},{value:"Beispiel",id:"beispiel",level:3},{value:"Verwendung",id:"verwendung",level:2},{value:"Best practices",id:"best-practices",level:3},{value:"Anwendungsf\xe4lle",id:"anwendungsf\xe4lle",level:3},{value:"Barrierefreiheit",id:"barrierefreiheit",level:2},{value:"Dependencies",id:"dependencies",level:2},{value:"Used by",id:"used-by",level:3},{value:"Graph",id:"graph",level:3}],u={toc:l};function p(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"indentedtext"},"IndentedText"),(0,i.kt)("p",null,"Heben Sie einzelne Informationen auf Ihrer Webseite optisch mit der ",(0,i.kt)("strong",{parentName:"p"},"IndentedText"),"-Komponente hervor. Die Komponente eignet sich nicht nur f\xfcr besondere Abschnitte auf der Webseite, sondern auch beispielsweise f\xfcr Zitate."),(0,i.kt)("p",null,"In der Komponente kann beliebiger HTML-Code verwendet werden."),(0,i.kt)("h2",{id:"konstruktion"},"Konstruktion"),(0,i.kt)("h3",{id:"code"},"Code"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"<kol-indented-text>\n    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At\n    vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit\n    amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt.\n</kol-indented-text>\n")),(0,i.kt)("h3",{id:"beispiel"},"Beispiel"),(0,i.kt)("kol-indented-text",null,"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt."),(0,i.kt)("h2",{id:"verwendung"},"Verwendung"),(0,i.kt)("p",null,"Die Komponente besitzt keine weiteren Attribute. Der hervorzuhebende Text wird zwischen das \xf6ffnende und das schlie\xdfende Tag geschrieben."),(0,i.kt)("h3",{id:"best-practices"},"Best practices"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Verwenden Sie die ",(0,i.kt)("strong",{parentName:"li"},"IndentedText"),"-Komponente, um erg\xe4nzende Informationen zu einem Hauptthema optisch hervorzuheben."),(0,i.kt)("li",{parentName:"ul"},"Vermeiden Sie, wichtige Informationen in der Komponente auszugeben, die eine Aktion der Nutzer:innen erfordern."),(0,i.kt)("li",{parentName:"ul"},"Vermeiden Sie, viele ",(0,i.kt)("strong",{parentName:"li"},"IndentedText"),"-Komponenten auf einer Einzelseite zu integrieren, da hierdurch die \xdcbersichtlichkeit sinkt.")),(0,i.kt)("h3",{id:"anwendungsf\xe4lle"},"Anwendungsf\xe4lle"),(0,i.kt)("p",null,"Verwenden Sie die ",(0,i.kt)("strong",{parentName:"p"},"IndentedText"),"-Komponente, um Textpassagen oder Informationen optisch hervorzuheben."),(0,i.kt)("h2",{id:"barrierefreiheit"},"Barrierefreiheit"),(0,i.kt)("h2",{id:"dependencies"},"Dependencies"),(0,i.kt)("h3",{id:"used-by"},"Used by"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"../details"},"kol-details")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"../form"},"kol-form"))),(0,i.kt)("h3",{id:"graph"},"Graph"),(0,i.kt)("mermaid",{value:"graph TD;\n  kol-details --\x3e kol-indented-text\n  kol-form --\x3e kol-indented-text\n  style kol-indented-text fill:#f9f,stroke:#333,stroke-width:4px"}),(0,i.kt)("hr",null))}p.isMDXComponent=!0}}]);