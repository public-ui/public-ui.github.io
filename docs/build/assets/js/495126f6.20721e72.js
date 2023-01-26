"use strict";(self.webpackChunk_public_ui_website=self.webpackChunk_public_ui_website||[]).push([[8808],{9613:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>b});var r=n(9496);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=i,b=u["".concat(s,".").concat(m)]||u[m]||c[m]||a;return n?r.createElement(b,o(o({ref:t},d),{},{components:n})):r.createElement(b,o({ref:t},d))}));function b(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:i,o[1]=l;for(var p=2;p<a;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},816:(e,t,n)=>{n.d(t,{_:()=>s});var r=n(7770),i=n(9496);const a=function(e,t,n,r,i){return void 0===i&&(i="editor"),`${e}&module=${r}&initialpath=%23%2F${t}%2F${n}&view=${i}`},o={width:"100%",height:"500px",border:"0",overflow:"hidden"},l=e=>{let{url:t}=e;return i.createElement("div",{className:"m-2"},i.createElement("iframe",{src:t,style:o,title:"kolibri-public-ui-code-samples",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}),i.createElement(r.Nv,{_href:t,_label:"",_target:"codesandbox"},i.createElement("img",{alt:"CodeSandbox-Schalter",src:"https://codesandbox.io/static/img/play-codesandbox.svg"})))},s=e=>{let{component:t,sample:n}=e;const[o,s]=(0,i.useState)("Preview"),p="https://codesandbox.io/embed/kolibri-public-ui-react-samples-w5u37c?fontsize=14&hidenavigation=1&autoresize=1&theme=dark",d=`%2Fsrc%2Fsamples%2F${t}%2F${n}`,u={angular:`${d}.html`,react:`${d}.tsx`,vue:`${d}.vue`,webcomponent:`${d}.html`},c={onSelect:(e,t)=>{switch(t){case 1:s((()=>"Angular"));break;case 2:s((()=>"React"));break;case 3:s((()=>"Vue"));break;case 4:s((()=>"Web Component"));break;default:s((()=>"Preview"))}}};return i.createElement(r.UD,{_ariaLabel:"Code-Beispiel",_on:c,_tabs:[{_label:"Vorschau"},{_disabled:!0,_label:"Angular"},{_label:"React"},{_disabled:!0,_label:"Vue"},{_disabled:!0,_label:"Web Component"}]},i.createElement("div",null,"Preview"===o&&i.createElement(l,{url:a(p,t,n,u.react,"preview")})),i.createElement("div",null,"Angular"===o&&i.createElement(l,{url:a(p,t,n,u.angular)})),i.createElement("div",null,"React"===o&&i.createElement(l,{url:a(p,t,n,u.react)})),i.createElement("div",null,"Vue"===o&&i.createElement(l,{url:a(p,t,n,u.vue)})),i.createElement("div",null,"Web Component"===o&&i.createElement(l,{url:a(p,t,n,u.webcomponent)})))}},3461:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>p,default:()=>b,frontMatter:()=>s,metadata:()=>d,toc:()=>c});var r=n(5882),i=(n(9496),n(9613));const a={toc:[{value:"Konstruktion",id:"konstruktion",level:2},{value:"Code",id:"code",level:3},{value:"Beispiel",id:"beispiel",level:3},{value:"Verwendung",id:"verwendung",level:2},{value:"Barrierefreiheit",id:"barrierefreiheit",level:2},{value:"Properties",id:"properties",level:2},{value:"Dependencies",id:"dependencies",level:2},{value:"Depends on",id:"depends-on",level:3},{value:"Graph",id:"graph",level:3}]};function o(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},a,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Die ",(0,i.kt)("strong",{parentName:"p"},"Version"),"-Komponente stellt kurze Inhalte auf einem farbigen Hintergrund dar. Die ",(0,i.kt)("strong",{parentName:"p"},"Version"),"-Komponente ist mit der ",(0,i.kt)("strong",{parentName:"p"},"Tag"),"-Komponente eng verwandt, bietet aber nur ein Attribut zur Konfiguration. Sie ist optimiert f\xfcr die\nAngabe z.B. von Versionen einer Seite."),(0,i.kt)("h2",{id:"konstruktion"},"Konstruktion"),(0,i.kt)("h3",{id:"code"},"Code"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},'<div>\n    <kol-version _version="1.0.0"></kol-version>\n</div>\n')),(0,i.kt)("h3",{id:"beispiel"},"Beispiel"),(0,i.kt)("p",null,(0,i.kt)("kol-version",{_version:"1.0.0"})),(0,i.kt)("h2",{id:"verwendung"},"Verwendung"),(0,i.kt)("p",null,"F\xfcr die Konfiguration steht das Attribut ",(0,i.kt)("inlineCode",{parentName:"p"},"_label_")," zur Verf\xfcgung und nimmt einen beliebigen Text auf, der in der Komponente angezeigt wird."),(0,i.kt)("p",null,"Die ",(0,i.kt)("strong",{parentName:"p"},"Version")," wird standardm\xe4\xdfig als ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"Inline-Element"))," ausgegeben."),(0,i.kt)("p",null,"Bitte beachten Sie, dass innerhalb der Komponente dem Text aus dem Attribut ",(0,i.kt)("strong",{parentName:"p"},"_","version")," ein ",(0,i.kt)("strong",{parentName:"p"},'"v"')," vorangestellt wird."),(0,i.kt)("h2",{id:"barrierefreiheit"},"Barrierefreiheit"),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Property"),(0,i.kt)("th",{parentName:"tr",align:null},"Attribute"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Default"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"_version")," ",(0,i.kt)("em",{parentName:"td"},"(required)")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"_version")),(0,i.kt)("td",{parentName:"tr",align:null},"Gibt die Versionsnummer als Text an."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"undefined"))))),(0,i.kt)("h2",{id:"dependencies"},"Dependencies"),(0,i.kt)("h3",{id:"depends-on"},"Depends on"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"./badge"},"kol-badge"))),(0,i.kt)("h3",{id:"graph"},"Graph"),(0,i.kt)("mermaid",{value:"graph TD;\n  kol-version --\x3e kol-badge\n  kol-badge --\x3e kol-span-wc\n  kol-badge --\x3e kol-button-wc\n  kol-span-wc --\x3e kol-icon\n  kol-button-wc --\x3e kol-span-wc\n  kol-button-wc --\x3e kol-tooltip\n  kol-tooltip --\x3e kol-badge\n  style kol-version fill:#f9f,stroke:#333,stroke-width:4px"}),(0,i.kt)("hr",null))}o.isMDXComponent=!0;var l=n(816);const s={title:"Version",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die Version-Komponente.",tags:["Version","Beschreibung","Spezifikation","Beispiele"]},p=void 0,d={unversionedId:"components/version",id:"components/version",title:"Version",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die Version-Komponente.",source:"@site/docs/30-components/version.mdx",sourceDirName:"30-components",slug:"/components/version",permalink:"/docs/components/version",draft:!1,tags:[{label:"Version",permalink:"/docs/tags/version"},{label:"Beschreibung",permalink:"/docs/tags/beschreibung"},{label:"Spezifikation",permalink:"/docs/tags/spezifikation"},{label:"Beispiele",permalink:"/docs/tags/beispiele"}],version:"current",frontMatter:{title:"Version",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die Version-Komponente.",tags:["Version","Beschreibung","Spezifikation","Beispiele"]},sidebar:"tutorialSidebar",previous:{title:"Tooltip",permalink:"/docs/components/tooltip"},next:{title:"Formular-Handling",permalink:"/docs/formular-handling"}},u={},c=[{value:"Beispiele",id:"beispiele",level:2},{value:"Version",id:"version",level:3}],m={toc:c};function b(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(o,{mdxType:"Readme"}),(0,i.kt)("h2",{id:"beispiele"},"Beispiele"),(0,i.kt)("h3",{id:"version"},"Version"),(0,i.kt)(l._,{component:"version",sample:"basic",mdxType:"Configurator"}))}b.isMDXComponent=!0}}]);