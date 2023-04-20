"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[977],{17942:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>k});var r=n(50959);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=r.createContext({}),p=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(d.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,d=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),c=p(n),m=a,k=c["".concat(d,".").concat(m)]||c[m]||u[m]||l;return n?r.createElement(k,i(i({ref:t},s),{},{components:n})):r.createElement(k,i({ref:t},s))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o[c]="string"==typeof e?e:a,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},64717:(e,t,n)=>{n.d(t,{_:()=>d});var r=n(95982),a=n(50959);const l=function(e,t,n,r,a){return void 0===a&&(a="editor"),`${e}&module=${r}&initialpath=%23%2F${t}%2F${n}&view=${a}`},i={width:"100%",height:"500px",border:"0",overflow:"hidden"},o=e=>{let{url:t}=e;return a.createElement("div",{className:"m-2"},a.createElement("iframe",{src:t,style:i,title:"kolibri-public-ui-code-samples",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}),a.createElement(r.Nv,{_href:t,_label:"",_target:"codesandbox"},a.createElement("img",{alt:"CodeSandbox-Schalter",src:"https://codesandbox.io/static/img/play-codesandbox.svg"})))},d=e=>{let{component:t,sample:n}=e;const[i,d]=(0,a.useState)("Preview"),p="https://codesandbox.io/embed/kolibri-public-ui-react-samples-w5u37c?fontsize=14&hidenavigation=1&autoresize=1&theme=dark",s=`%2Fsrc%2Fsamples%2F${t}%2F${n}`,c={angular:`${s}.html`,react:`${s}.tsx`,vue:`${s}.vue`,webcomponent:`${s}.html`},u={onSelect:(e,t)=>{switch(t){case 1:d((()=>"Angular"));break;case 2:d((()=>"React"));break;case 3:d((()=>"Vue"));break;case 4:d((()=>"Web Component"));break;default:d((()=>"Preview"))}}};return a.createElement(r.UD,{className:"w-full",_ariaLabel:"Code-Beispiel",_on:u,_tabs:[{_label:"Vorschau"},{_disabled:!0,_label:"Angular"},{_label:"React"},{_disabled:!0,_label:"Vue"},{_disabled:!0,_label:"Web Component"}]},a.createElement("div",null,"Preview"===i&&a.createElement(o,{url:l(p,t,n,c.react,"preview")})),a.createElement("div",null,"Angular"===i&&a.createElement(o,{url:l(p,t,n,c.angular)})),a.createElement("div",null,"React"===i&&a.createElement(o,{url:l(p,t,n,c.react)})),a.createElement("div",null,"Vue"===i&&a.createElement(o,{url:l(p,t,n,c.vue)})),a.createElement("div",null,"Web Component"===i&&a.createElement(o,{url:l(p,t,n,c.webcomponent)})))}},42588:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>g,frontMatter:()=>p,metadata:()=>c,toc:()=>m});var r=n(15882),a=(n(50959),n(17942));const l={toc:[{value:"Konstruktion",id:"konstruktion",level:2},{value:"Code",id:"code",level:3},{value:"Beispiel",id:"beispiel",level:3},{value:"Verwendung",id:"verwendung",level:2},{value:"Best practices",id:"best-practices",level:3},{value:"Barrierefreiheit",id:"barrierefreiheit",level:2},{value:"Properties",id:"properties",level:2},{value:"Dependencies",id:"dependencies",level:2},{value:"Used by",id:"used-by",level:3},{value:"Graph",id:"graph",level:3}]},i="wrapper";function o(e){let{components:t,...n}=e;return(0,a.kt)(i,(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Die ",(0,a.kt)("strong",{parentName:"p"},"Heading"),"-Komponente kann \xfcberall dort verwendet werden, wo eine \xdcberschrift angezeigt werden soll. Durch die Verwendung der unterschiedlichen Gr\xf6\xdfen, lassen sich Inhalte klar strukturieren und Seiten wirkungsvoll und abwechslungsreich pr\xe4sentieren. Sie trennt Styling von Semantik und erm\xf6glicht Flexibilit\xe4t."),(0,a.kt)("h2",{id:"konstruktion"},"Konstruktion"),(0,a.kt)("h3",{id:"code"},"Code"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<kol-heading _level="1" _label="Inhalt einer H1-\xdcberschrift"></kol-heading>\n<kol-heading _level="2" _label="Inhalt einer H2-\xdcberschrift"></kol-heading>\n<kol-heading _level="3" _label="Inhalt einer H3-\xdcberschrift"></kol-heading>\n<kol-heading _level="4" _label="Inhalt einer H4-\xdcberschrift"></kol-heading>\n<kol-heading _level="5" _label="Inhalt einer H5-\xdcberschrift"></kol-heading>\n<kol-heading _level="6" _label="Inhalt einer H6-\xdcberschrift"></kol-heading>\n')),(0,a.kt)("h3",{id:"beispiel"},"Beispiel"),(0,a.kt)("p",null,(0,a.kt)("kol-heading",{_level:"1",_label:"Inhalt einer H1-\xdcberschrift"}),"\n",(0,a.kt)("kol-heading",{_level:"2",_label:"Inhalt einer H2-\xdcberschrift"}),"\n",(0,a.kt)("kol-heading",{_level:"3",_label:"Inhalt einer H3-\xdcberschrift"}),"\n",(0,a.kt)("kol-heading",{_level:"4",_label:"Inhalt einer H4-\xdcberschrift"}),"\n",(0,a.kt)("kol-heading",{_level:"5",_label:"Inhalt einer H5-\xdcberschrift"}),"\n",(0,a.kt)("kol-heading",{_level:"6",_label:"Inhalt einer H6-\xdcberschrift"})),(0,a.kt)("h2",{id:"verwendung"},"Verwendung"),(0,a.kt)("p",null,"Die \xdcberschriftenebene wird durch das Attribut ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"_level"))," \xfcbergeben. M\xf6glich sind die Level ",(0,a.kt)("strong",{parentName:"p"},"1")," bis ",(0,a.kt)("strong",{parentName:"p"},"6")),(0,a.kt)("h3",{id:"best-practices"},"Best practices"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Achten Sie bei der Verwendung von Headings auf die empfohlene Semantik f\xfcr die Suchmaschinenoptimierung."),(0,a.kt)("li",{parentName:"ul"},"Setzen Sie Headings in verschiedenen Gr\xf6\xdfen ein, um eine sinnvolle Struktur Ihrer Inhalte zu erzeugen.")),(0,a.kt)("h2",{id:"barrierefreiheit"},"Barrierefreiheit"),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Property"),(0,a.kt)("th",{parentName:"tr",align:null},"Attribute"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Default"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"_headline")," ",(0,a.kt)("em",{parentName:"td"},"(required)")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"_headline")),(0,a.kt)("td",{parentName:"tr",align:null},"Gibt den Text der \xdcberschrift an."),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"string")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"_level")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"_level")),(0,a.kt)("td",{parentName:"tr",align:null},"Setzt den H-Level, von 1 bis 6, der \xdcberschrift."),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"0 \\| 1 \\| 2 \\| 3 \\| 4 \\| 5 \\| 6 \\| undefined")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"1"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"_secondaryHeadline")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"_secondary-headline")),(0,a.kt)("td",{parentName:"tr",align:null},"Setzt den Text einer weiteren \xdcberschrift, einen Level kleiner, unter der Ersten."),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"string \\| undefined")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"undefined"))))),(0,a.kt)("h2",{id:"dependencies"},"Dependencies"),(0,a.kt)("h3",{id:"used-by"},"Used by"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"./accordion"},"kol-accordion")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"./alert"},"kol-alert")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"./card"},"kol-card")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"."},"kol-heading")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"./link-group"},"kol-link-group"))),(0,a.kt)("h3",{id:"graph"},"Graph"),(0,a.kt)("mermaid",{value:"graph TD;\n  kol-accordion --\x3e kol-heading-wc\n  kol-alert --\x3e kol-heading-wc\n  kol-card --\x3e kol-heading-wc\n  kol-heading --\x3e kol-heading-wc\n  kol-link-group --\x3e kol-heading-wc\n  style kol-heading-wc fill:#f9f,stroke:#333,stroke-width:4px"}),(0,a.kt)("hr",null))}o.isMDXComponent=!0;var d=n(64717);const p={title:"Heading",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die Heading-Komponente.",tags:["Heading","Beschreibung","Spezifikation","Beispiele"]},s=void 0,c={unversionedId:"components/heading",id:"components/heading",title:"Heading",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die Heading-Komponente.",source:"@site/docs/30-components/heading.mdx",sourceDirName:"30-components",slug:"/components/heading",permalink:"/docs/components/heading",draft:!1,tags:[{label:"Heading",permalink:"/docs/tags/heading"},{label:"Beschreibung",permalink:"/docs/tags/beschreibung"},{label:"Spezifikation",permalink:"/docs/tags/spezifikation"},{label:"Beispiele",permalink:"/docs/tags/beispiele"}],version:"current",frontMatter:{title:"Heading",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die Heading-Komponente.",tags:["Heading","Beschreibung","Spezifikation","Beispiele"]},sidebar:"tutorialSidebar",previous:{title:"Form",permalink:"/docs/components/form"},next:{title:"IconFontAwesome",permalink:"/docs/components/icon-font-awesome"}},u={},m=[{value:"Beispiele",id:"beispiele",level:2}],k={toc:m},h="wrapper";function g(e){let{components:t,...n}=e;return(0,a.kt)(h,(0,r.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(o,{mdxType:"Readme"}),(0,a.kt)("h2",{id:"beispiele"},"Beispiele"),(0,a.kt)(d._,{component:"heading",sample:"basic",mdxType:"Configurator"}),(0,a.kt)(d._,{component:"heading",sample:"paragraph",mdxType:"Configurator"}),(0,a.kt)(d._,{component:"heading",sample:"badged",mdxType:"Configurator"}))}g.isMDXComponent=!0}}]);