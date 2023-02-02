"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[8862],{9613:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>b});var r=n(9496);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var d=r.createContext({}),s=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(d.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,d=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=s(n),m=i,b=c["".concat(d,".").concat(m)]||c[m]||p[m]||o;return n?r.createElement(b,a(a({ref:t},u),{},{components:n})):r.createElement(b,a({ref:t},u))}));function b(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=m;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l[c]="string"==typeof e?e:i,a[1]=l;for(var s=2;s<o;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},816:(e,t,n)=>{n.d(t,{_:()=>d});var r=n(8556),i=n(9496);const o=function(e,t,n,r,i){return void 0===i&&(i="editor"),`${e}&module=${r}&initialpath=%23%2F${t}%2F${n}&view=${i}`},a={width:"100%",height:"500px",border:"0",overflow:"hidden"},l=e=>{let{url:t}=e;return i.createElement("div",{className:"m-2"},i.createElement("iframe",{src:t,style:a,title:"kolibri-public-ui-code-samples",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}),i.createElement(r.Nv,{_href:t,_label:"",_target:"codesandbox"},i.createElement("img",{alt:"CodeSandbox-Schalter",src:"https://codesandbox.io/static/img/play-codesandbox.svg"})))},d=e=>{let{component:t,sample:n}=e;const[a,d]=(0,i.useState)("Preview"),s="https://codesandbox.io/embed/kolibri-public-ui-react-samples-w5u37c?fontsize=14&hidenavigation=1&autoresize=1&theme=dark",u=`%2Fsrc%2Fsamples%2F${t}%2F${n}`,c={angular:`${u}.html`,react:`${u}.tsx`,vue:`${u}.vue`,webcomponent:`${u}.html`},p={onSelect:(e,t)=>{switch(t){case 1:d((()=>"Angular"));break;case 2:d((()=>"React"));break;case 3:d((()=>"Vue"));break;case 4:d((()=>"Web Component"));break;default:d((()=>"Preview"))}}};return i.createElement(r.UD,{_ariaLabel:"Code-Beispiel",_on:p,_tabs:[{_label:"Vorschau"},{_disabled:!0,_label:"Angular"},{_label:"React"},{_disabled:!0,_label:"Vue"},{_disabled:!0,_label:"Web Component"}]},i.createElement("div",null,"Preview"===a&&i.createElement(l,{url:o(s,t,n,c.react,"preview")})),i.createElement("div",null,"Angular"===a&&i.createElement(l,{url:o(s,t,n,c.angular)})),i.createElement("div",null,"React"===a&&i.createElement(l,{url:o(s,t,n,c.react)})),i.createElement("div",null,"Vue"===a&&i.createElement(l,{url:o(s,t,n,c.vue)})),i.createElement("div",null,"Web Component"===a&&i.createElement(l,{url:o(s,t,n,c.webcomponent)})))}},120:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>b,frontMatter:()=>d,metadata:()=>u,toc:()=>p});var r=n(5882),i=(n(9496),n(9613));const o={toc:[{value:"Konstruktion",id:"konstruktion",level:2},{value:"Code",id:"code",level:3},{value:"Beispiel",id:"beispiel",level:3},{value:"Verwendung",id:"verwendung",level:2},{value:"Best practices",id:"best-practices",level:3},{value:"Anwendungsf\xe4lle",id:"anwendungsf\xe4lle",level:3},{value:"Barrierefreiheit",id:"barrierefreiheit",level:2},{value:"Dependencies",id:"dependencies",level:2},{value:"Used by",id:"used-by",level:3},{value:"Graph",id:"graph",level:3}]};function a(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},o,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Heben Sie einzelne Informationen auf Ihrer Webseite optisch mit der ",(0,i.kt)("strong",{parentName:"p"},"IndentedText"),"-Komponente hervor. Die Komponente eignet sich nicht nur f\xfcr besondere Abschnitte auf der Webseite, sondern auch beispielsweise f\xfcr Zitate."),(0,i.kt)("p",null,"In der Komponente kann beliebiger HTML-Code verwendet werden."),(0,i.kt)("h2",{id:"konstruktion"},"Konstruktion"),(0,i.kt)("h3",{id:"code"},"Code"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"<kol-indented-text>\n    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At\n    vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit\n    amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt.\n</kol-indented-text>\n")),(0,i.kt)("h3",{id:"beispiel"},"Beispiel"),(0,i.kt)("kol-indented-text",null,"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt."),(0,i.kt)("h2",{id:"verwendung"},"Verwendung"),(0,i.kt)("p",null,"Die Komponente besitzt keine weiteren Attribute. Der hervorzuhebende Text wird zwischen das \xf6ffnende und das schlie\xdfende Tag geschrieben."),(0,i.kt)("h3",{id:"best-practices"},"Best practices"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Verwenden Sie die ",(0,i.kt)("strong",{parentName:"li"},"IndentedText"),"-Komponente, um erg\xe4nzende Informationen zu einem Hauptthema optisch hervorzuheben."),(0,i.kt)("li",{parentName:"ul"},"Vermeiden Sie, wichtige Informationen in der Komponente auszugeben, die eine Aktion der Nutzer:innen erfordern."),(0,i.kt)("li",{parentName:"ul"},"Vermeiden Sie, viele ",(0,i.kt)("strong",{parentName:"li"},"IndentedText"),"-Komponenten auf einer Einzelseite zu integrieren, da hierdurch die \xdcbersichtlichkeit sinkt.")),(0,i.kt)("h3",{id:"anwendungsf\xe4lle"},"Anwendungsf\xe4lle"),(0,i.kt)("p",null,"Verwenden Sie die ",(0,i.kt)("strong",{parentName:"p"},"IndentedText"),"-Komponente, um Textpassagen oder Informationen optisch hervorzuheben."),(0,i.kt)("h2",{id:"barrierefreiheit"},"Barrierefreiheit"),(0,i.kt)("h2",{id:"dependencies"},"Dependencies"),(0,i.kt)("h3",{id:"used-by"},"Used by"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"./details"},"kol-details")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"./form"},"kol-form"))),(0,i.kt)("h3",{id:"graph"},"Graph"),(0,i.kt)("mermaid",{value:"graph TD;\n  kol-details --\x3e kol-indented-text\n  kol-form --\x3e kol-indented-text\n  style kol-indented-text fill:#f9f,stroke:#333,stroke-width:4px"}),(0,i.kt)("hr",null))}a.isMDXComponent=!0;var l=n(816);const d={title:"IndentedText",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die IndentedText-Komponente.",tags:["IndentedText","Beschreibung","Spezifikation","Beispiele"]},s=void 0,u={unversionedId:"components/indented-text",id:"components/indented-text",title:"IndentedText",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die IndentedText-Komponente.",source:"@site/docs/30-components/indented-text.mdx",sourceDirName:"30-components",slug:"/components/indented-text",permalink:"/docs/components/indented-text",draft:!1,tags:[{label:"IndentedText",permalink:"/docs/tags/indented-text"},{label:"Beschreibung",permalink:"/docs/tags/beschreibung"},{label:"Spezifikation",permalink:"/docs/tags/spezifikation"},{label:"Beispiele",permalink:"/docs/tags/beispiele"}],version:"current",frontMatter:{title:"IndentedText",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die IndentedText-Komponente.",tags:["IndentedText","Beschreibung","Spezifikation","Beispiele"]},sidebar:"tutorialSidebar",previous:{title:"Icon",permalink:"/docs/components/icon"},next:{title:"InputAdapterLeanup",permalink:"/docs/components/input-adapter-leanup"}},c={},p=[{value:"Beispiele",id:"beispiele",level:2}],m={toc:p};function b(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(a,{mdxType:"Readme"}),(0,i.kt)("h2",{id:"beispiele"},"Beispiele"),(0,i.kt)(l._,{component:"indented-text",sample:"basic",mdxType:"Configurator"}))}b.isMDXComponent=!0}}]);