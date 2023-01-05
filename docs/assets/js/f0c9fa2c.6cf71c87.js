"use strict";(self.webpackChunk_public_ui_docusaurus=self.webpackChunk_public_ui_docusaurus||[]).push([[1641],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>c});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var b=r.createContext({}),p=function(e){var t=r.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(b.Provider,{value:t},e.children)},d="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,b=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),d=p(n),s=i,c=d["".concat(b,".").concat(s)]||d[s]||k[s]||l;return n?r.createElement(c,o(o({ref:t},u),{},{components:n})):r.createElement(c,o({ref:t},u))}));function c(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,o=new Array(l);o[0]=s;var a={};for(var b in t)hasOwnProperty.call(t,b)&&(a[b]=t[b]);a.originalType=e,a[d]="string"==typeof e?e:i,o[1]=a;for(var p=2;p<l;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},5934:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>b,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>a,toc:()=>p});var r=n(7462),i=(n(7294),n(3905));const l={},o="Abbr",a={unversionedId:"components/abbr/readme",id:"components/abbr/readme",title:"Abbr",description:"Die Abbr-Komponente implementiert den HTML-Tag abbr, wobei hier jedoch der Tooltip barrierefrei ist.",source:"@site/docs/30-components/abbr/readme.md",sourceDirName:"30-components/abbr",slug:"/components/abbr/",permalink:"/docs/components/abbr/",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/30-components/abbr/readme.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Komponenten",permalink:"/docs/category/komponenten"},next:{title:"Beispiele f\xfcr Abbr-Komponente",permalink:"/docs/components/abbr/samples"}},b={},p=[{value:"Konstruktion",id:"konstruktion",level:2},{value:"Code",id:"code",level:3},{value:"Beispiel",id:"beispiel",level:3},{value:"Verwendung",id:"verwendung",level:2},{value:"Angabe der Beschreibung zur Abk\xfcrzung",id:"angabe-der-beschreibung-zur-abk\xfcrzung",level:3},{value:"Ausrichtung des Tooltip",id:"ausrichtung-des-tooltip",level:3},{value:"Barrierefreiheit",id:"barrierefreiheit",level:2},{value:"Links und Referenzen",id:"links-und-referenzen",level:2},{value:"Properties",id:"properties",level:2},{value:"Dependencies",id:"dependencies",level:2},{value:"Depends on",id:"depends-on",level:3},{value:"Graph",id:"graph",level:3}],u={toc:p};function d(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"abbr"},"Abbr"),(0,i.kt)("p",null,"Die ",(0,i.kt)("strong",{parentName:"p"},"Abbr"),"-Komponente implementiert den HTML-Tag ",(0,i.kt)("inlineCode",{parentName:"p"},"abbr"),", wobei hier jedoch der Tooltip barrierefrei ist.\nDer Tooltip f\xfcr die Beschreibung wird bei Focus oder Hover der ",(0,i.kt)("strong",{parentName:"p"},"Abbr"),"-Komponente angezeigt und vorgelesen."),(0,i.kt)("h2",{id:"konstruktion"},"Konstruktion"),(0,i.kt)("h3",{id:"code"},"Code"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'Ich bin <kol-abbr _title="Abk\xfcrzung">z.B.</kol-abbr> eine Abk\xfcrzung.<br />\nIch bin <kol-abbr _title="Abk\xfcrzung" _tooltip-align="right">z.B.</kol-abbr> eine Abk\xfcrzung (rechts).<br />\nIch bin <kol-abbr _title="Abk\xfcrzung" _tooltip-align="bottom">z.B.</kol-abbr> eine Abk\xfcrzung (unten).<br />\nIch bin <kol-abbr _title="Abk\xfcrzung" _tooltip-align="left">z.B.</kol-abbr> eine Abk\xfcrzung (links).<br />\nIch bin <kol-abbr _title="Abk\xfcrzung" _tooltip-align="top">z.B.</kol-abbr> eine Abk\xfcrzung (oben).\n')),(0,i.kt)("h3",{id:"beispiel"},"Beispiel"),(0,i.kt)("p",null,"Ich bin ",(0,i.kt)("kol-abbr",{_title:"Abk\xfcrzung"},"z.B.")," eine Abk\xfcrzung.",(0,i.kt)("br",null),"\nIch bin ",(0,i.kt)("kol-abbr",{_title:"Abk\xfcrzung","_tooltip-align":"right"},"z.B.")," eine Abk\xfcrzung (rechts).",(0,i.kt)("br",null),"\nIch bin ",(0,i.kt)("kol-abbr",{_title:"Abk\xfcrzung","_tooltip-align":"bottom"},"z.B.")," eine Abk\xfcrzung (unten).",(0,i.kt)("br",null),"\nIch bin ",(0,i.kt)("kol-abbr",{_title:"Abk\xfcrzung","_tooltip-align":"left"},"z.B.")," eine Abk\xfcrzung (links).",(0,i.kt)("br",null),"\nIch bin ",(0,i.kt)("kol-abbr",{_title:"Abk\xfcrzung","_tooltip-align":"top"},"z.B.")," eine Abk\xfcrzung (oben)."),(0,i.kt)("h2",{id:"verwendung"},"Verwendung"),(0,i.kt)("h3",{id:"angabe-der-beschreibung-zur-abk\xfcrzung"},"Angabe der Beschreibung zur Abk\xfcrzung"),(0,i.kt)("p",null,"Die eigentliche Beschreibung wird \xfcber das Attribut ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"_title"))," \xfcbergeben."),(0,i.kt)("h3",{id:"ausrichtung-des-tooltip"},"Ausrichtung des Tooltip"),(0,i.kt)("p",null,"\xdcber das Attribut ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"_tooltip-align"))," wird die Positionierung des ToolTip, relativ zur Abk\xfcrzung, festgelegt."),(0,i.kt)("h2",{id:"barrierefreiheit"},"Barrierefreiheit"),(0,i.kt)("p",null,"Die Abbr-Komponente wurde von KoliBri umgesetzt, weil der Standard-Tooltip nicht barrierefrei bzgl. der Skalierung ist. Mittels der KoliBri-Komponente zoomt der Tooltip proportional zu seinem Text mit und wird vorgelesen."),(0,i.kt)("h2",{id:"links-und-referenzen"},"Links und Referenzen"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/de/docs/Web/HTML/Element/abbr"},"https://developer.mozilla.org/de/docs/Web/HTML/Element/abbr"))),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Property"),(0,i.kt)("th",{parentName:"tr",align:null},"Attribute"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Default"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"_title")," ",(0,i.kt)("em",{parentName:"td"},"(required)")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"_title")),(0,i.kt)("td",{parentName:"tr",align:null},"Dieses Property gibt die Beschreibung oder Erl\xe4uterung der Abk\xfcrzung an."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"_tooltipAlign")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"_tooltip-align")),(0,i.kt)("td",{parentName:"tr",align:null},"Gibt an, ob der Tooltip entweder oben, rechts, unten oder links angezeigt werden soll."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},'"bottom" \\| "left" \\| "right" \\| "top" \\| undefined')),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"'top'"))))),(0,i.kt)("h2",{id:"dependencies"},"Dependencies"),(0,i.kt)("h3",{id:"depends-on"},"Depends on"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"../tooltip"},"kol-tooltip"))),(0,i.kt)("h3",{id:"graph"},"Graph"),(0,i.kt)("mermaid",{value:"graph TD;\n  kol-abbr --\x3e kol-tooltip\n  kol-tooltip --\x3e kol-badge\n  kol-badge --\x3e kol-span-wc\n  kol-badge --\x3e kol-button-wc\n  kol-span-wc --\x3e kol-icon\n  kol-button-wc --\x3e kol-span-wc\n  kol-button-wc --\x3e kol-tooltip\n  style kol-abbr fill:#f9f,stroke:#333,stroke-width:4px"}),(0,i.kt)("hr",null))}d.isMDXComponent=!0}}]);