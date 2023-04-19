"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[2227],{49613:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>g});var r=n(59496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),m=p(n),c=a,g=m["".concat(s,".").concat(c)]||m[c]||u[c]||l;return n?r.createElement(g,i(i({ref:t},d),{},{components:n})):r.createElement(g,i({ref:t},d))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[m]="string"==typeof e?e:a,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},91194:(e,t,n)=>{n.d(t,{_:()=>s});var r=n(1325),a=n(59496);const l=function(e,t,n,r,a){return void 0===a&&(a="editor"),`${e}&module=${r}&initialpath=%23%2F${t}%2F${n}&view=${a}`},i={width:"100%",height:"500px",border:"0",overflow:"hidden"},o=e=>{let{url:t}=e;return a.createElement("div",{className:"m-2"},a.createElement("iframe",{src:t,style:i,title:"kolibri-public-ui-code-samples",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}),a.createElement(r.Nv,{_href:t,_label:"",_target:"codesandbox"},a.createElement("img",{alt:"CodeSandbox-Schalter",src:"https://codesandbox.io/static/img/play-codesandbox.svg"})))},s=e=>{let{component:t,sample:n}=e;const[i,s]=(0,a.useState)("Preview"),p="https://codesandbox.io/embed/kolibri-public-ui-react-samples-w5u37c?fontsize=14&hidenavigation=1&autoresize=1&theme=dark",d=`%2Fsrc%2Fsamples%2F${t}%2F${n}`,m={angular:`${d}.html`,react:`${d}.tsx`,vue:`${d}.vue`,webcomponent:`${d}.html`},u={onSelect:(e,t)=>{switch(t){case 1:s((()=>"Angular"));break;case 2:s((()=>"React"));break;case 3:s((()=>"Vue"));break;case 4:s((()=>"Web Component"));break;default:s((()=>"Preview"))}}};return a.createElement(r.UD,{className:"w-full",_ariaLabel:"Code-Beispiel",_on:u,_tabs:[{_label:"Vorschau"},{_disabled:!0,_label:"Angular"},{_label:"React"},{_disabled:!0,_label:"Vue"},{_disabled:!0,_label:"Web Component"}]},a.createElement("div",null,"Preview"===i&&a.createElement(o,{url:l(p,t,n,m.react,"preview")})),a.createElement("div",null,"Angular"===i&&a.createElement(o,{url:l(p,t,n,m.angular)})),a.createElement("div",null,"React"===i&&a.createElement(o,{url:l(p,t,n,m.react)})),a.createElement("div",null,"Vue"===i&&a.createElement(o,{url:l(p,t,n,m.vue)})),a.createElement("div",null,"Web Component"===i&&a.createElement(o,{url:l(p,t,n,m.webcomponent)})))}},10111:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>p,default:()=>g,frontMatter:()=>s,metadata:()=>d,toc:()=>u});var r=n(15882),a=(n(59496),n(49613));const l={toc:[{value:"Konstruktion",id:"konstruktion",level:2},{value:"Code",id:"code",level:3},{value:"Beispiel",id:"beispiel",level:3},{value:"Verwendung",id:"verwendung",level:2},{value:"Links und Referenzen",id:"links-und-referenzen",level:2},{value:"Properties",id:"properties",level:2}]};function i(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Die ",(0,a.kt)("strong",{parentName:"p"},"Progress"),"-Komponente erzeugt einen Fortschrittsbalken, \xfcber den eine optische R\xfcckmeldung gegeben werden kann."),(0,a.kt)("h2",{id:"konstruktion"},"Konstruktion"),(0,a.kt)("h3",{id:"code"},"Code"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<div>\n    <kol-progress _type="bar" _max="100" _value="20"></kol-progress>\n</div>\n')),(0,a.kt)("h3",{id:"beispiel"},"Beispiel"),(0,a.kt)("p",null,(0,a.kt)("kol-progress",{_type:"bar",_max:"100",_value:"20"})),(0,a.kt)("h2",{id:"verwendung"},"Verwendung"),(0,a.kt)("p",null,"Verwenden Sie das Attribut ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"_type")),", um die optische Ausgabe der Komponente zu steuern. M\xf6gliche Werte sind:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"bar"),": f\xfcr eine Ausgabe als horizontaler Fortschrittsbalken"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"cycle"),": f\xfcr eine Ausgabe als kreisf\xf6rmiger Fortschrittsbalken")),(0,a.kt)("p",null,"Verwenden Sie das Attribut ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"_max")),", um den maximalen Wert der Komponente zu bestimmen, das Minimum ist immer 0."),(0,a.kt)("p",null,"Verwenden Sie das Attribut ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"_value")),", um den aktuellen Wert der Komponente zu bestimmen."),(0,a.kt)("h2",{id:"links-und-referenzen"},"Links und Referenzen"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/de/docs/Web/HTML/Element/progress"},"https://developer.mozilla.org/de/docs/Web/HTML/Element/progress")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_progressbar_role"},"https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_progressbar_role"))),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Property"),(0,a.kt)("th",{parentName:"tr",align:null},"Attribute"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Default"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"_max")," ",(0,a.kt)("em",{parentName:"td"},"(required)")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"_max")),(0,a.kt)("td",{parentName:"tr",align:null},"Gibt an, bei welchem Wert die Fortschrittsanzeige abgeschlossen ist."),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"number")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"_type")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"_type")),(0,a.kt)("td",{parentName:"tr",align:null},"Gibt an, ob der Prozess als Balken oder Kreis dargestellt wird."),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},'"bar" \\| "cycle" \\| undefined')),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"_unit")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"_unit")),(0,a.kt)("td",{parentName:"tr",align:null},"Setzt die Einheit der Fortschrittswerte. (wird nicht angezeigt)"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"string \\| undefined")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"'%'"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"_value")," ",(0,a.kt)("em",{parentName:"td"},"(required)")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"_value")),(0,a.kt)("td",{parentName:"tr",align:null},"Gibt an, wie weit die Anzeige fortgeschritten ist."),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"number")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"undefined"))))),(0,a.kt)("hr",null))}i.isMDXComponent=!0;var o=n(91194);const s={title:"Progress",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die Progress-Komponente.",tags:["Progress","Beschreibung","Spezifikation","Beispiele"]},p=void 0,d={unversionedId:"components/progress",id:"components/progress",title:"Progress",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die Progress-Komponente.",source:"@site/docs/30-components/progress.mdx",sourceDirName:"30-components",slug:"/components/progress",permalink:"/docs/components/progress",draft:!1,tags:[{label:"Progress",permalink:"/docs/tags/progress"},{label:"Beschreibung",permalink:"/docs/tags/beschreibung"},{label:"Spezifikation",permalink:"/docs/tags/spezifikation"},{label:"Beispiele",permalink:"/docs/tags/beispiele"}],version:"current",frontMatter:{title:"Progress",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die Progress-Komponente.",tags:["Progress","Beschreibung","Spezifikation","Beispiele"]},sidebar:"tutorialSidebar",previous:{title:"Pagination",permalink:"/docs/components/pagination"},next:{title:"Quote",permalink:"/docs/components/quote"}},m={},u=[{value:"Beispiele",id:"beispiele",level:2}],c={toc:u};function g(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(i,{mdxType:"Readme"}),(0,a.kt)("h2",{id:"beispiele"},"Beispiele"),(0,a.kt)(o._,{component:"progress",sample:"basic",mdxType:"Configurator"}))}g.isMDXComponent=!0}}]);