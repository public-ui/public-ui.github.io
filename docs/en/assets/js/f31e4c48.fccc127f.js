"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[22042],{17942:(e,t,n)=>{n.d(t,{Zo:()=>k,kt:()=>c});var r=n(50959);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),d=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},k=function(e){var t=d(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,p=e.parentName,k=o(e,["components","mdxType","originalType","parentName"]),u=d(n),m=i,c=u["".concat(p,".").concat(m)]||u[m]||s[m]||l;return n?r.createElement(c,a(a({ref:t},k),{},{components:n})):r.createElement(c,a({ref:t},k))}));function c(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,a=new Array(l);a[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[u]="string"==typeof e?e:i,a[1]=o;for(var d=2;d<l;d++)a[d]=n[d];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},54842:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>s,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var r=n(15882),i=(n(50959),n(17942));const l={},a=void 0,o={unversionedId:"readmes/tooltip/readme",id:"version-1.6.1/readmes/tooltip/readme",title:"readme",description:"Die Tooltip-Komponente wird innerhalb von KoliBri verwendet und ist nicht daf\xfcr vorgesehen in der Anwendungsentwicklung verwendet zu werden. Denn der Tooltip ist nur dann wirklich barrierefrei, wenn von einem Referenzelement auf das Tooltip verwiesen wird.",source:"@site/versioned_docs/version-1.6.1/readmes/tooltip/readme.md",sourceDirName:"readmes/tooltip",slug:"/readmes/tooltip/",permalink:"/en/docs/readmes/tooltip/",draft:!1,tags:[],version:"1.6.1",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"readme",permalink:"/en/docs/readmes/toast/"},next:{title:"readme",permalink:"/en/docs/readmes/version/"}},p={},d=[{value:"Barrierefreiheit",id:"barrierefreiheit",level:2},{value:"Links und Referenzen",id:"links-und-referenzen",level:2},{value:"Properties",id:"properties",level:2},{value:"Dependencies",id:"dependencies",level:2},{value:"Used by",id:"used-by",level:3},{value:"Depends on",id:"depends-on",level:3},{value:"Graph",id:"graph",level:3}],k={toc:d},u="wrapper";function s(e){let{components:t,...n}=e;return(0,i.kt)(u,(0,r.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("kol-alert",{_type:"warning"},"Die ",(0,i.kt)("strong",{parentName:"p"},"Tooltip"),"-Komponente wird innerhalb von KoliBri verwendet und ist nicht daf\xfcr vorgesehen in der Anwendungsentwicklung verwendet zu werden. Denn der Tooltip ist nur dann wirklich barrierefrei, wenn von einem Referenzelement auf das Tooltip verwiesen wird.")),(0,i.kt)("p",null,"Die ",(0,i.kt)("strong",{parentName:"p"},"Tooltip"),"-Komponente implementiert das Gegenst\xfcck zum ",(0,i.kt)("inlineCode",{parentName:"p"},"Aria-Label"),". Es ist also explizit nur daf\xfcr vorgesehen, dem/der Nutzer:in ohne Screenreader die Beschriftung eines Elementes anzuzeigen."),(0,i.kt)("p",null,"Ein ge\xf6ffneter Tooltip l\xe4sst sich mit der ",(0,i.kt)("inlineCode",{parentName:"p"},"Escape"),"-Taste schlie\xdfen, um ggf. \xfcberlagerte Seiteninformationen wieder sichtbar zu machen."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Hinweis:")," Damit der Tooltip korrekt ausgerichtet wird, darf das Referenz-Element nicht ",(0,i.kt)("inlineCode",{parentName:"p"},"display: inline")," haben."),(0,i.kt)("h2",{id:"barrierefreiheit"},"Barrierefreiheit"),(0,i.kt)("p",null,"Die Tooltip-Komponente wird bei Fokus oder bei Bewegen der Maus \xfcber dem Referenzelement angezeigt und dient ausschlie\xdflich dem/der sehenden Nutzer:in ohne Screenreader die Beschriftung (Aria-Label) lesen zu k\xf6nnen. Der Text des Tooltips ist selbst nicht mit der Tastatur erreichbar und zudem mittels Aria-Hidden f\xfcr die Screenreader versteckt."),(0,i.kt)("kol-alert",{_type:"info"},"Aus Sicht des Barrierefreiheitstests k\xf6nnen Tooltips ignoriert werden, solange zudem von der Entwicklung sichergestellt wurde, dass der Tooltip-Text auch in gleicher Weise vom Screenreader vorgelesen wird."),(0,i.kt)("h2",{id:"links-und-referenzen"},"Links und Referenzen"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("kol-link",{_href:"https://tollwerk.de/projekte/tipps-techniken-inklusiv-barrierefrei/titel-tooltips-toggletips",_label:"https://tollwerk.de/projekte/tipps-techniken-inklusiv-barrierefrei/titel-tooltips-toggletips",_target:"_blank"}))),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Property"),(0,i.kt)("th",{parentName:"tr",align:null},"Attribute"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Default"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"_align")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"_align")),(0,i.kt)("td",{parentName:"tr",align:null},"Defines the alignment of the tooltip in relation to the parent element."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},'"bottom"')," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},'"left"')," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},'"right"')," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},'"top"')," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"undefined")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"'top'"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"_id")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"_id")),(0,i.kt)("td",{parentName:"tr",align:null},"Defines the internal ID of the primary component element."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"string")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"undefined")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"_label")," ",(0,i.kt)("em",{parentName:"td"},"(required)")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"_label")),(0,i.kt)("td",{parentName:"tr",align:null},"Defines the visible or semantic label of the component (e.g. aria-label, label, headline, caption, summary, etc.)."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"undefined"))))),(0,i.kt)("h2",{id:"dependencies"},"Dependencies"),(0,i.kt)("h3",{id:"used-by"},"Used by"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"./abbr"},"kol-abbr")),(0,i.kt)("li",{parentName:"ul"},"kol-button-wc"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"./input-checkbox"},"kol-input-checkbox")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"./input-color"},"kol-input-color")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"./input-date"},"kol-input-date")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"./input-email"},"kol-input-email")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"./input-file"},"kol-input-file")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"./input-number"},"kol-input-number")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"./input-password"},"kol-input-password")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"./input-radio"},"kol-input-radio")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"./input-range"},"kol-input-range")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"./input-text"},"kol-input-text")),(0,i.kt)("li",{parentName:"ul"},"kol-link-wc"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"./select"},"kol-select")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"./textarea"},"kol-textarea"))),(0,i.kt)("h3",{id:"depends-on"},"Depends on"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"kol-span-wc")),(0,i.kt)("h3",{id:"graph"},"Graph"),(0,i.kt)("mermaid",{value:"graph TD;\n  kol-tooltip-wc --\x3e kol-span-wc\n  kol-span-wc --\x3e kol-icon\n  kol-abbr --\x3e kol-tooltip-wc\n  kol-button-wc --\x3e kol-tooltip-wc\n  kol-input-checkbox --\x3e kol-tooltip-wc\n  kol-input-color --\x3e kol-tooltip-wc\n  kol-input-date --\x3e kol-tooltip-wc\n  kol-input-email --\x3e kol-tooltip-wc\n  kol-input-file --\x3e kol-tooltip-wc\n  kol-input-number --\x3e kol-tooltip-wc\n  kol-input-password --\x3e kol-tooltip-wc\n  kol-input-radio --\x3e kol-tooltip-wc\n  kol-input-range --\x3e kol-tooltip-wc\n  kol-input-text --\x3e kol-tooltip-wc\n  kol-link-wc --\x3e kol-tooltip-wc\n  kol-select --\x3e kol-tooltip-wc\n  kol-textarea --\x3e kol-tooltip-wc\n  style kol-tooltip-wc fill:#f9f,stroke:#333,stroke-width:4px"}),(0,i.kt)("hr",null))}s.isMDXComponent=!0}}]);