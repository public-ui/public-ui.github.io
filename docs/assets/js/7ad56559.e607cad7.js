"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[4943],{17942:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>k});var r=t(50959);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=r.createContext({}),d=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=d(e.components);return r.createElement(s.Provider,{value:n},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=d(t),m=i,k=c["".concat(s,".").concat(m)]||c[m]||p[m]||a;return t?r.createElement(k,l(l({ref:n},u),{},{components:t})):r.createElement(k,l({ref:n},u))}));function k(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,l=new Array(a);l[0]=m;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o[c]="string"==typeof e?e:i,l[1]=o;for(var d=2;d<a;d++)l[d]=t[d];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},64717:(e,n,t)=>{t.d(n,{_:()=>s});var r=t(95982),i=t(50959);const a=function(e,n,t,r,i){return void 0===i&&(i="editor"),`${e}&module=${r}&initialpath=%23%2F${n}%2F${t}&view=${i}`},l={width:"100%",height:"500px",border:"0",overflow:"hidden"},o=e=>{let{url:n}=e;return i.createElement("div",{className:"m-2"},i.createElement("iframe",{src:n,style:l,title:"kolibri-public-ui-code-samples",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}),i.createElement(r.Nv,{_href:n,_label:"",_target:"codesandbox"},i.createElement("img",{alt:"CodeSandbox-Schalter",src:"https://codesandbox.io/static/img/play-codesandbox.svg"})))},s=e=>{let{component:n,sample:t}=e;const[l,s]=(0,i.useState)("Preview"),d="https://codesandbox.io/embed/kolibri-public-ui-react-samples-w5u37c?fontsize=14&hidenavigation=1&autoresize=1&theme=dark",u=`%2Fsrc%2Fsamples%2F${n}%2F${t}`,c={angular:`${u}.html`,react:`${u}.tsx`,vue:`${u}.vue`,webcomponent:`${u}.html`},p={onSelect:(e,n)=>{switch(n){case 1:s((()=>"Angular"));break;case 2:s((()=>"React"));break;case 3:s((()=>"Vue"));break;case 4:s((()=>"Web Component"));break;default:s((()=>"Preview"))}}};return i.createElement(r.UD,{className:"w-full",_ariaLabel:"Code-Beispiel",_on:p,_tabs:[{_label:"Vorschau"},{_disabled:!0,_label:"Angular"},{_label:"React"},{_disabled:!0,_label:"Vue"},{_disabled:!0,_label:"Web Component"}]},i.createElement("div",null,"Preview"===l&&i.createElement(o,{url:a(d,n,t,c.react,"preview")})),i.createElement("div",null,"Angular"===l&&i.createElement(o,{url:a(d,n,t,c.angular)})),i.createElement("div",null,"React"===l&&i.createElement(o,{url:a(d,n,t,c.react)})),i.createElement("div",null,"Vue"===l&&i.createElement(o,{url:a(d,n,t,c.vue)})),i.createElement("div",null,"Web Component"===l&&i.createElement(o,{url:a(d,n,t,c.webcomponent)})))}},73626:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>u,default:()=>g,frontMatter:()=>d,metadata:()=>c,toc:()=>m});var r=t(15882),i=(t(50959),t(17942));const a={toc:[{value:"Funktionsweise",id:"funktionsweise",level:2},{value:"Konstruktion",id:"konstruktion",level:2},{value:"Code",id:"code",level:3},{value:"Beispiel",id:"beispiel",level:3},{value:"Verwendung",id:"verwendung",level:2},{value:"Definition der Links",id:"definition-der-links",level:3},{value:"Best practices",id:"best-practices",level:3},{value:"Anwendungsf\xe4lle",id:"anwendungsf\xe4lle",level:3},{value:"Barrierefreiheit",id:"barrierefreiheit",level:2},{value:"Tastatursteuerung",id:"tastatursteuerung",level:3},{value:"Links und Referenzen",id:"links-und-referenzen",level:2},{value:"Properties",id:"properties",level:2},{value:"Dependencies",id:"dependencies",level:2},{value:"Depends on",id:"depends-on",level:3},{value:"Graph",id:"graph",level:3}]},l="wrapper";function o(e){let{components:n,...t}=e;return(0,i.kt)(l,(0,r.Z)({},a,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Mit Hilfe der ",(0,i.kt)("strong",{parentName:"p"},"Breadcrumb"),"-Komponente kann der Pfad zur aktuellen Position einer Webseite in einer hierarchischen Struktur dargestellt werden."),(0,i.kt)("h2",{id:"funktionsweise"},"Funktionsweise"),(0,i.kt)("p",null,"Die ",(0,i.kt)("strong",{parentName:"p"},"Breadcrumb"),"-Komponente zeigt die aktuelle Position einer Webseite in einer horizontalen Navigationsstruktur an. Das jeweils letzte Element rechts stellt die aktuelle Seite selbst dar.\nDiese ist nicht mit einem link versehen. Alle Elemente links der aktuellen Seite sind mit einem Link auf die verkn\xfcpfte Seite versehen."),(0,i.kt)("h2",{id:"konstruktion"},"Konstruktion"),(0,i.kt)("h3",{id:"code"},"Code"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<div>\n    <kol-breadcrumb _links=\'[{"_label":"Startseite","_href":"#/"},{"_label":"Unterseite von Startseite","_href":"#/unterseite"}]\'></kol-breadcrumb>\n</div>\n')),(0,i.kt)("h3",{id:"beispiel"},"Beispiel"),(0,i.kt)("p",null,(0,i.kt)("kol-breadcrumb",{_links:'[{"_label":"Startseite","_href":"#/"},{"_label":"Unterseite von Startseite","_href":"#/unterseite"}]'})),(0,i.kt)("h2",{id:"verwendung"},"Verwendung"),(0,i.kt)("h3",{id:"definition-der-links"},"Definition der Links"),(0,i.kt)("p",null,"Das Attribut ",(0,i.kt)("strong",{parentName:"p"},"_","links")," erwartet die \xdcbergabe eines JSON-Objekts, aus dem sich der Aufbau der anzuzeigenden Breadcrumb-Pfade ergibt. Das JSON-Objekt \xfcbergibt beliebig viele Elemente, die jeweils eine Anzahl an Eigenschaften und Werten bereitstellen."),(0,i.kt)("p",null,"Jede Eigenschaft und der zugeh\xf6rige Wert m\xfcssen in doppelten Anf\xfchrungszeichen gesetzt werden."),(0,i.kt)("p",null,"Einzelne Elemente werden in geschweiften Klammern und durch ",(0,i.kt)("strong",{parentName:"p"},"Komma")," separiert geschrieben."),(0,i.kt)("p",null,"Das gesamte JSON-Objekt muss in eckigen Klammern an das Attribut ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"_links"))," \xfcbergeben werden."),(0,i.kt)("b",null,"Folgende Eigenschaften stehen zur Verf\xfcgung:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"_href"))," \xfcbergibt den Link, der f\xfcr dieses Element verwendet werden soll."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"_icon"))," (optional) \xfcbergibt den Namen des Icon, wenn zus\xe4tzlich zum Text des Elements noch ein Icon angezeigt werden soll. Es stehen die ",(0,i.kt)("kol-link",{_href:"https://microsoft.github.io/vscode-codicons/dist/codicon.html",_label:"Codicons"})," zur Verf\xfcgung"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"_iconOnly"))," (optional). Wenn der Wert auf ",(0,i.kt)("strong",{parentName:"li"},"true")," gesetzt wird, erscheint im Link ausschlie\xdflich das Icon, ohne weiteren Text. Die Eigenschaft ",(0,i.kt)("inlineCode",{parentName:"li"},"_icon")," muss gesetzt werden."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"_label"))," \xfcbergibt den Text, der f\xfcr dieses Element angezeigt werden soll.")),(0,i.kt)("p",null,"Beispiel f\xfcr ein JSON-Objekt, das an das Attribut ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"_links"))," \xfcbergeben wird:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-JSON"},"[\n  { '_label': 'Startseite', '_href': '#/', '_icon': 'codicon codicon-home', '_iconOnly': true },\n  { '_label': '1. Unterseite', '_href': '/unterseite_eins' },\n  { '_label': '2. Unterseite', '_href': '/unterseite_zwei' }\n]\n")),(0,i.kt)("p",null,(0,i.kt)("kol-breadcrumb",{_links:'[{"_label":"Startseite","_href":"#/","_icon":"codicon codicon-home","_icon-only": "true"},{"_label":"1. Unterseite","_href":"#/1_unterseite"},{"_label":"2. Unterseite","_href":"#/2_unterseite"}]'})),(0,i.kt)("h3",{id:"best-practices"},"Best practices"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Die ",(0,i.kt)("strong",{parentName:"li"},"Breadcrumb"),"-Komponente ist ein wichtiges Element f\xfcr eine effektive Suchmaschinenoptimierung Ihrer Webseite."),(0,i.kt)("li",{parentName:"ul"},"Auch f\xfcr Benutzer:innen der Webseite bietet eine Breadcrumb-Navigation zus\xe4tzliche \xdcbersicht."),(0,i.kt)("li",{parentName:"ul"},"Positionieren Sie die Breadcrumb m\xf6glichst weit oben auf Ihren Inhaltsseiten, um zu gew\xe4hrleisten, dass Suchmaschinen diese als zus\xe4tzliche Informationsquelle zur Struktur Ihrer Webseite nutzen k\xf6nnen."),(0,i.kt)("li",{parentName:"ul"},"Positionieren Sie die Breadcrumb-Komponente auf jeder Inhaltsseite Ihre Webseite. Sie gew\xe4hrleisten so, dass sich Besucher:innen jederzeit zurecht finden und die aktuelle Position erkennen k\xf6nnen."),(0,i.kt)("li",{parentName:"ul"},"Vermeiden Sie, die Breadcrumb-Navigation auf der Startseite zu positionieren."),(0,i.kt)("li",{parentName:"ul"},"Verwenden Sie eine Breadcrumb-Navigation nur dann, wenn sie f\xfcr Benutzer:innen einen wirklichen Mehrwert bieten."),(0,i.kt)("li",{parentName:"ul"},"Auf mobilen Varianten einer Webseite ist eine Breadcrumb-Navigation m\xf6glicherweise nicht sinnvoll.")),(0,i.kt)("h3",{id:"anwendungsf\xe4lle"},"Anwendungsf\xe4lle"),(0,i.kt)("p",null,"Eine Breadcrumb-Navigation ist auf einer gro\xdfen Mehrzahl der aktuellen Webseiten zu finden. Somit beschreibt der klassische Anwendungsfall den generellen Einbau dieser Komponente."),(0,i.kt)("h2",{id:"barrierefreiheit"},"Barrierefreiheit"),(0,i.kt)("p",null,"Achten Sie im Sinne der optimalen Barrierefreiheit darauf, das Attribut ",(0,i.kt)("inlineCode",{parentName:"p"},"_aria-label")," korrekt auszuzeichnen. Beachten Sie diesen Hinweis insbesondere dann, wenn Sie die Option ",(0,i.kt)("inlineCode",{parentName:"p"},"_icon-only")," verwenden und so auf einen beschreibenden Text im Link verzichten w\xfcrden."),(0,i.kt)("p",null,"Beachten Sie, dass auch das letzte Element in der Breadcrumb-Komponente per Tab-Taste angesprungen werden kann, obwohl dort kein Link hinterlegt ist. Hierdurch kann auch dieses Element von Screenreader erreicht und vorgelesen werden."),(0,i.kt)("h3",{id:"tastatursteuerung"},"Tastatursteuerung"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Taste"),(0,i.kt)("th",{parentName:"tr",align:null},"Funktion"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Tab")),(0,i.kt)("td",{parentName:"tr",align:null},"Springt die einzelnen Elemente der Breadcrumb-Navigation an.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Enter")),(0,i.kt)("td",{parentName:"tr",align:null},"\xd6ffnet den Link des aktuellen Elements.")))),(0,i.kt)("h2",{id:"links-und-referenzen"},"Links und Referenzen"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.w3.org/TR/wai-aria-practices/#breadcrumb"},"https://www.w3.org/TR/wai-aria-practices/#breadcrumb"))),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Property"),(0,i.kt)("th",{parentName:"tr",align:null},"Attribute"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Default"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"_ariaLabel")," ",(0,i.kt)("em",{parentName:"td"},"(required)")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"_aria-label")),(0,i.kt)("td",{parentName:"tr",align:null},"Gibt den Text an, der die Navigation von anderen Navigationen differenziert."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"_links")," ",(0,i.kt)("em",{parentName:"td"},"(required)")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"_links")),(0,i.kt)("td",{parentName:"tr",align:null},"Setzt die Liste der darzustellenden Links."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"LinkProps[] \\| string")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"undefined"))))),(0,i.kt)("h2",{id:"dependencies"},"Dependencies"),(0,i.kt)("h3",{id:"depends-on"},"Depends on"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"./icon"},"kol-icon")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"./link"},"kol-link"))),(0,i.kt)("h3",{id:"graph"},"Graph"),(0,i.kt)("mermaid",{value:"graph TD;\n  kol-breadcrumb --\x3e kol-icon\n  kol-breadcrumb --\x3e kol-link\n  kol-link --\x3e kol-link-wc\n  kol-link-wc --\x3e kol-span-wc\n  kol-link-wc --\x3e kol-icon\n  kol-link-wc --\x3e kol-tooltip\n  kol-span-wc --\x3e kol-icon\n  kol-tooltip --\x3e kol-span-wc\n  style kol-breadcrumb fill:#f9f,stroke:#333,stroke-width:4px"}),(0,i.kt)("hr",null))}o.isMDXComponent=!0;var s=t(64717);const d={title:"Breadcrumb",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die Breadcrumb-Komponente.",tags:["Breadcrumb","Beschreibung","Spezifikation","Beispiele"]},u=void 0,c={unversionedId:"components/breadcrumb",id:"components/breadcrumb",title:"Breadcrumb",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die Breadcrumb-Komponente.",source:"@site/docs/30-components/breadcrumb.mdx",sourceDirName:"30-components",slug:"/components/breadcrumb",permalink:"/docs/components/breadcrumb",draft:!1,tags:[{label:"Breadcrumb",permalink:"/docs/tags/breadcrumb"},{label:"Beschreibung",permalink:"/docs/tags/beschreibung"},{label:"Spezifikation",permalink:"/docs/tags/spezifikation"},{label:"Beispiele",permalink:"/docs/tags/beispiele"}],version:"current",frontMatter:{title:"Breadcrumb",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die Breadcrumb-Komponente.",tags:["Breadcrumb","Beschreibung","Spezifikation","Beispiele"]},sidebar:"tutorialSidebar",previous:{title:"Badge",permalink:"/docs/components/badge"},next:{title:"ButtonGroup",permalink:"/docs/components/button-group"}},p={},m=[{value:"Beispiele",id:"beispiele",level:2}],k={toc:m},b="wrapper";function g(e){let{components:n,...t}=e;return(0,i.kt)(b,(0,r.Z)({},k,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)(o,{mdxType:"Readme"}),(0,i.kt)("h2",{id:"beispiele"},"Beispiele"),(0,i.kt)(s._,{component:"breadcrumb",sample:"basic",mdxType:"Configurator"}))}g.isMDXComponent=!0}}]);