"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[977],{9613:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>k});var r=n(9496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=r.createContext({}),p=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(d.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,d=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),c=p(n),m=a,k=c["".concat(d,".").concat(m)]||c[m]||u[m]||i;return n?r.createElement(k,l(l({ref:t},s),{},{components:n})):r.createElement(k,l({ref:t},s))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o[c]="string"==typeof e?e:a,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},816:(e,t,n)=>{n.d(t,{_:()=>d});var r=n(3843),a=n(9496);const i=function(e,t,n,r,a){return void 0===a&&(a="editor"),`${e}&module=${r}&initialpath=%23%2F${t}%2F${n}&view=${a}`},l={width:"100%",height:"500px",border:"0",overflow:"hidden"},o=e=>{let{url:t}=e;return a.createElement("div",{className:"m-2"},a.createElement("iframe",{src:t,style:l,title:"kolibri-public-ui-code-samples",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}),a.createElement(r.Nv,{_href:t,_label:"",_target:"codesandbox"},a.createElement("img",{alt:"CodeSandbox-Schalter",src:"https://codesandbox.io/static/img/play-codesandbox.svg"})))},d=e=>{let{component:t,sample:n}=e;const[l,d]=(0,a.useState)("Preview"),p="https://codesandbox.io/embed/kolibri-public-ui-react-samples-w5u37c?fontsize=14&hidenavigation=1&autoresize=1&theme=dark",s=`%2Fsrc%2Fsamples%2F${t}%2F${n}`,c={angular:`${s}.html`,react:`${s}.tsx`,vue:`${s}.vue`,webcomponent:`${s}.html`},u={onSelect:(e,t)=>{switch(t){case 1:d((()=>"Angular"));break;case 2:d((()=>"React"));break;case 3:d((()=>"Vue"));break;case 4:d((()=>"Web Component"));break;default:d((()=>"Preview"))}}};return a.createElement(r.UD,{_ariaLabel:"Code-Beispiel",_on:u,_tabs:[{_label:"Vorschau"},{_disabled:!0,_label:"Angular"},{_label:"React"},{_disabled:!0,_label:"Vue"},{_disabled:!0,_label:"Web Component"}]},a.createElement("div",null,"Preview"===l&&a.createElement(o,{url:i(p,t,n,c.react,"preview")})),a.createElement("div",null,"Angular"===l&&a.createElement(o,{url:i(p,t,n,c.angular)})),a.createElement("div",null,"React"===l&&a.createElement(o,{url:i(p,t,n,c.react)})),a.createElement("div",null,"Vue"===l&&a.createElement(o,{url:i(p,t,n,c.vue)})),a.createElement("div",null,"Web Component"===l&&a.createElement(o,{url:i(p,t,n,c.webcomponent)})))}},3507:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>k,frontMatter:()=>d,metadata:()=>s,toc:()=>u});var r=n(5882),a=(n(9496),n(9613));const i={toc:[{value:"Konstruktion",id:"konstruktion",level:2},{value:"Code",id:"code",level:3},{value:"Beispiel",id:"beispiel",level:3},{value:"Verwendung",id:"verwendung",level:2},{value:"Best practices",id:"best-practices",level:3},{value:"Barrierefreiheit",id:"barrierefreiheit",level:2},{value:"Properties",id:"properties",level:2},{value:"Dependencies",id:"dependencies",level:2},{value:"Used by",id:"used-by",level:3},{value:"Graph",id:"graph",level:3}]};function l(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Die ",(0,a.kt)("strong",{parentName:"p"},"Heading"),"-Komponente kann \xfcberall dort verwendet werden, wo eine \xdcberschrift angezeigt werden soll. Durch die Verwendung der unterschiedlichen Gr\xf6\xdfen, lassen sich Inhalte klar strukturieren und Seiten wirkungsvoll und abwechslungsreich pr\xe4sentieren. Sie trennt Styling von Semantik und erm\xf6glicht Flexibilit\xe4t."),(0,a.kt)("h2",{id:"konstruktion"},"Konstruktion"),(0,a.kt)("h3",{id:"code"},"Code"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<div>\n    <kol-heading _level="1">Inhalt einer H1-\xdcberschrift</kol-heading>\n</div>\n')),(0,a.kt)("h3",{id:"beispiel"},"Beispiel"),(0,a.kt)("p",null,(0,a.kt)("kol-heading",{_level:"1"},"Inhalt einer H1-\xdcberschrift")),(0,a.kt)("h2",{id:"verwendung"},"Verwendung"),(0,a.kt)("p",null,"Geben Sie mit dem Attribut ",(0,a.kt)("inlineCode",{parentName:"p"},"_level")," das H-Element an, das Sie ausgeben m\xf6chten. M\xf6glich sind H1 bis H6."),(0,a.kt)("h3",{id:"best-practices"},"Best practices"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Achten Sie bei der Verwendung von Headings auf die empfohlene Semantik f\xfcr die Suchmaschinenoptimierung."),(0,a.kt)("li",{parentName:"ul"},"Setzen Sie Headings in verschiedenen Gr\xf6\xdfen ein, um eine sinnvolle Struktur Ihrer Inhalte zu erzeugen."),(0,a.kt)("li",{parentName:"ul"},"Kombinieren Sie die ",(0,a.kt)("strong",{parentName:"li"},"Heading"),"-Komponente mit allen anderen ",(0,a.kt)("strong",{parentName:"li"},"KoliBri"),"-Komponenten. Setzen Sie sie im Inhaltsbereich der Komponenten ein.")),(0,a.kt)("h2",{id:"barrierefreiheit"},"Barrierefreiheit"),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Property"),(0,a.kt)("th",{parentName:"tr",align:null},"Attribute"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Default"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"_label")," ",(0,a.kt)("em",{parentName:"td"},"(required)")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"_label")),(0,a.kt)("td",{parentName:"tr",align:null},"Gibt den Text der \xdcberschrift an."),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"string")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"_level")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"_level")),(0,a.kt)("td",{parentName:"tr",align:null},"Gibt an, welchen H-Level von 1 bis 6 die \xdcberschrift hat. Oder ob es keine \xdcberschrift ist, sondern nur fett gedruckt."),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"0 \\| 1 \\| 2 \\| 3 \\| 4 \\| 5 \\| 6 \\| undefined")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"1"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"_overline")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"_overline")),(0,a.kt)("td",{parentName:"tr",align:null},"Gibt den Text der zus\xe4tzlichen Beschriftung an."),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"string \\| undefined")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"''"))))),(0,a.kt)("h2",{id:"dependencies"},"Dependencies"),(0,a.kt)("h3",{id:"used-by"},"Used by"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"./accordion"},"kol-accordion")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"./alert"},"kol-alert")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"./card"},"kol-card")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"."},"kol-heading")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"./link-group"},"kol-link-group"))),(0,a.kt)("h3",{id:"graph"},"Graph"),(0,a.kt)("mermaid",{value:"graph TD;\n  kol-accordion --\x3e kol-heading-wc\n  kol-alert --\x3e kol-heading-wc\n  kol-card --\x3e kol-heading-wc\n  kol-heading --\x3e kol-heading-wc\n  kol-link-group --\x3e kol-heading-wc\n  style kol-heading-wc fill:#f9f,stroke:#333,stroke-width:4px"}),(0,a.kt)("hr",null))}l.isMDXComponent=!0;var o=n(816);const d={title:"Heading",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die Heading-Komponente.",tags:["Heading","Beschreibung","Spezifikation","Beispiele"]},p=void 0,s={unversionedId:"components/heading",id:"components/heading",title:"Heading",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die Heading-Komponente.",source:"@site/docs/30-components/heading.mdx",sourceDirName:"30-components",slug:"/components/heading",permalink:"/docs/components/heading",draft:!1,tags:[{label:"Heading",permalink:"/docs/tags/heading"},{label:"Beschreibung",permalink:"/docs/tags/beschreibung"},{label:"Spezifikation",permalink:"/docs/tags/spezifikation"},{label:"Beispiele",permalink:"/docs/tags/beispiele"}],version:"current",frontMatter:{title:"Heading",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die Heading-Komponente.",tags:["Heading","Beschreibung","Spezifikation","Beispiele"]},sidebar:"tutorialSidebar",previous:{title:"Form",permalink:"/docs/components/form"},next:{title:"IconFontAwesome",permalink:"/docs/components/icon-font-awesome"}},c={},u=[{value:"Beispiele",id:"beispiele",level:2}],m={toc:u};function k(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(l,{mdxType:"Readme"}),(0,a.kt)("h2",{id:"beispiele"},"Beispiele"),(0,a.kt)(o._,{component:"heading",sample:"basic",mdxType:"Configurator"}),(0,a.kt)(o._,{component:"heading",sample:"paragraph",mdxType:"Configurator"}),(0,a.kt)(o._,{component:"heading",sample:"badged",mdxType:"Configurator"}))}k.isMDXComponent=!0}}]);