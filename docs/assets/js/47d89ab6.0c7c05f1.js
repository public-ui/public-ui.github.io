"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[5783],{17942:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>g});var r=n(50959);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),u=p(n),c=a,g=u["".concat(s,".").concat(c)]||u[c]||d[c]||i;return n?r.createElement(g,o(o({ref:t},m),{},{components:n})):r.createElement(g,o({ref:t},m))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},6096:(e,t,n)=>{n.d(t,{_:()=>s});var r=n(52260),a=n(50959);const i=function(e,t,n,r,a){return void 0===a&&(a="editor"),`${e}&module=${r}&initialpath=%23%2F${t}%2F${n}&view=${a}`},o={width:"100%",height:"500px",border:"0",overflow:"hidden"},l=e=>{let{url:t}=e;return a.createElement("div",{className:"m-2"},a.createElement("iframe",{src:t,style:o,title:"kolibri-public-ui-code-samples",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}),a.createElement(r.Nv,{_href:t,_label:"",_target:"codesandbox"},a.createElement("img",{alt:"CodeSandbox-Schalter",src:"https://codesandbox.io/static/img/play-codesandbox.svg"})))},s=e=>{let{component:t,sample:n}=e;const[o,s]=(0,a.useState)("Preview"),p="https://codesandbox.io/embed/kolibri-public-ui-react-samples-w5u37c?fontsize=14&hidenavigation=1&autoresize=1&theme=dark",m=`%2Fsrc%2Fsamples%2F${t}%2F${n}`,u={angular:`${m}.html`,react:`${m}.tsx`,vue:`${m}.vue`,webcomponent:`${m}.html`},d={onSelect:(e,t)=>{switch(t){case 1:s((()=>"Angular"));break;case 2:s((()=>"React"));break;case 3:s((()=>"Vue"));break;case 4:s((()=>"Web Component"));break;default:s((()=>"Preview"))}}};return a.createElement(r.UD,{className:"w-full",_ariaLabel:"Code-Beispiel",_on:d,_tabs:[{_label:"Vorschau"},{_disabled:!0,_label:"Angular"},{_label:"React"},{_disabled:!0,_label:"Vue"},{_disabled:!0,_label:"Web Component"}]},a.createElement("div",null,"Preview"===o&&a.createElement(l,{url:i(p,t,n,u.react,"preview")})),a.createElement("div",null,"Angular"===o&&a.createElement(l,{url:i(p,t,n,u.angular)})),a.createElement("div",null,"React"===o&&a.createElement(l,{url:i(p,t,n,u.react)})),a.createElement("div",null,"Vue"===o&&a.createElement(l,{url:i(p,t,n,u.vue)})),a.createElement("div",null,"Web Component"===o&&a.createElement(l,{url:i(p,t,n,u.webcomponent)})))}},80399:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>m,default:()=>b,frontMatter:()=>p,metadata:()=>u,toc:()=>c});var r=n(15882),a=(n(50959),n(17942));const i={toc:[{value:"Konstruktion",id:"konstruktion",level:2},{value:"Code",id:"code",level:3},{value:"Beispiel",id:"beispiel",level:3},{value:"Verwendung",id:"verwendung",level:2},{value:"Barrierefreiheit",id:"barrierefreiheit",level:2},{value:"Properties",id:"properties",level:2}]},o="wrapper";function l(e){let{components:t,...n}=e;return(0,a.kt)(o,(0,r.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Mit Hilfe der ",(0,a.kt)("strong",{parentName:"p"},"Logo"),"-Komponente k\xf6nnen an beliebigen Positionen die Logos verschiedener Bundesinstitutionen ausgegeben werden. Das Logo wird dabei aus einer Sammlung von SVG-Grafiken zusammengesetzt, die fertig konstruiert vorliegen."),(0,a.kt)("h2",{id:"konstruktion"},"Konstruktion"),(0,a.kt)("h3",{id:"code"},"Code"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<kol-logo _org_="BReg"></kol-logo>\n')),(0,a.kt)("h3",{id:"beispiel"},"Beispiel"),(0,a.kt)("p",null,(0,a.kt)("kol-logo",{_org_:"BReg"})),(0,a.kt)("h2",{id:"verwendung"},"Verwendung"),(0,a.kt)("p",null,"Das Attribut ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"_org"))," wird f\xfcr die Definition des gew\xfcnschten Logos verwendet. Es sind folgende Parameter m\xf6glich:"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"BReg")," = ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"Die Bundesregierung"))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"BMF")," = ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"Bundesministerium der Finanzen"))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"BMI")," = ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"Bundesministerium des Innern, f\xfcr Bau und Heimat"))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"AA")," = ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"Ausw\xe4rtiges Amt"))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"BMWi")," = ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"Bundesministerium f\xfcr Wirtschaft und Energie"))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"BMJV")," = ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"Bundesministerium der Justiz und f\xfcr Verbraucherschutz"))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"BMAS")," = ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"Bundesministerium f\xfcr Arbeit und Soziales"))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"BMVg")," = ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"Bundesministerium der Verteidigung"))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"BMEL")," = ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"Bundesministerium f\xfcr Ern\xe4hrung und Landwirtschaft"))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"BMFSFJ")," = ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"Bundesministerium f\xfcr Familie, Senioren, Frauen und Jugend"))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"BMG")," = ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"Bundesministerium f\xfcr Gesundheit"))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"BMVI")," = ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"Bundesministerium f\xfcr Verkehr und digitale Infrastruktur"))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"BMU")," = ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"Bundesministerium f\xfcr Umwelt, Naturschutz und nukleare Sicherheit"))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"BMBF")," = ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"Bundesministerium f\xfcr Bildung und Forschung"))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"BMZ")," = ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"Bundesministerium f\xfcr wirtschaftliche Zusammenarbeit und Entwicklung"))),(0,a.kt)("h2",{id:"barrierefreiheit"},"Barrierefreiheit"),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Property"),(0,a.kt)("th",{parentName:"tr",align:null},"Attribute"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Default"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"_abbr")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"_abbr")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("span",{class:"text-red-500"},(0,a.kt)("strong",{parentName:"td"},"[DEPRECATED]"))," Verwende stattdessen das Property _org.",(0,a.kt)("br",null),(0,a.kt)("br",null),"Gibt die Abk\xfcrzung eines Ministeriums, eines Amts oder einer Bundesanstalt an."),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"Bundesamt")," ","|"," ",(0,a.kt)("inlineCode",{parentName:"td"},"Bundesanstalt")," ","|"," ",(0,a.kt)("inlineCode",{parentName:"td"},"Bundesministerium")," ","|"," ",(0,a.kt)("inlineCode",{parentName:"td"},"undefined")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"_org")," ",(0,a.kt)("em",{parentName:"td"},"(required)")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"_org")),(0,a.kt)("td",{parentName:"tr",align:null},"Gibt die Abk\xfcrzung eines Ministeriums, eines Amts oder einer Bundesanstalt an."),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"Bundesamt")," ","|"," ",(0,a.kt)("inlineCode",{parentName:"td"},"Bundesanstalt")," ","|"," ",(0,a.kt)("inlineCode",{parentName:"td"},"Bundesministerium")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"undefined"))))),(0,a.kt)("hr",null))}l.isMDXComponent=!0;var s=n(6096);const p={title:"Logo",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die Logo-Komponente.",tags:["Logo","Beschreibung","Spezifikation","Beispiele"]},m=void 0,u={unversionedId:"components/logo",id:"components/logo",title:"Logo",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die Logo-Komponente.",source:"@site/docs/30-components/logo.mdx",sourceDirName:"30-components",slug:"/components/logo",permalink:"/docs/components/logo",draft:!1,tags:[{label:"Logo",permalink:"/docs/tags/logo"},{label:"Beschreibung",permalink:"/docs/tags/beschreibung"},{label:"Spezifikation",permalink:"/docs/tags/spezifikation"},{label:"Beispiele",permalink:"/docs/tags/beispiele"}],version:"current",frontMatter:{title:"Logo",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die Logo-Komponente.",tags:["Logo","Beschreibung","Spezifikation","Beispiele"]},sidebar:"tutorialSidebar",previous:{title:"Link",permalink:"/docs/components/link"},next:{title:"Modal",permalink:"/docs/components/modal"}},d={},c=[{value:"Beispiele",id:"beispiele",level:2}],g={toc:c},k="wrapper";function b(e){let{components:t,...n}=e;return(0,a.kt)(k,(0,r.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(l,{mdxType:"Readme"}),(0,a.kt)("h2",{id:"beispiele"},"Beispiele"),(0,a.kt)(s._,{component:"logo",sample:"basic",mdxType:"Configurator"}))}b.isMDXComponent=!0}}]);