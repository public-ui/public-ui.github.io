"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[4943],{9613:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>k});var r=n(9496);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),d=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=d(n),m=i,k=p["".concat(s,".").concat(m)]||p[m]||c[m]||a;return n?r.createElement(k,l(l({ref:t},u),{},{components:n})):r.createElement(k,l({ref:t},u))}));function k(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,l=new Array(a);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[p]="string"==typeof e?e:i,l[1]=o;for(var d=2;d<a;d++)l[d]=n[d];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},816:(e,t,n)=>{n.d(t,{_:()=>s});var r=n(375),i=n(9496);const a=function(e,t,n,r,i){return void 0===i&&(i="editor"),`${e}&module=${r}&initialpath=%23%2F${t}%2F${n}&view=${i}`},l={width:"100%",height:"500px",border:"0",overflow:"hidden"},o=e=>{let{url:t}=e;return i.createElement("div",{className:"m-2"},i.createElement("iframe",{src:t,style:l,title:"kolibri-public-ui-code-samples",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}),i.createElement(r.Nv,{_href:t,_label:"",_target:"codesandbox"},i.createElement("img",{alt:"CodeSandbox-Schalter",src:"https://codesandbox.io/static/img/play-codesandbox.svg"})))},s=e=>{let{component:t,sample:n}=e;const[l,s]=(0,i.useState)("Preview"),d="https://codesandbox.io/embed/kolibri-public-ui-react-samples-w5u37c?fontsize=14&hidenavigation=1&autoresize=1&theme=dark",u=`%2Fsrc%2Fsamples%2F${t}%2F${n}`,p={angular:`${u}.html`,react:`${u}.tsx`,vue:`${u}.vue`,webcomponent:`${u}.html`},c={onSelect:(e,t)=>{switch(t){case 1:s((()=>"Angular"));break;case 2:s((()=>"React"));break;case 3:s((()=>"Vue"));break;case 4:s((()=>"Web Component"));break;default:s((()=>"Preview"))}}};return i.createElement(r.UD,{_ariaLabel:"Code-Beispiel",_on:c,_tabs:[{_label:"Vorschau"},{_disabled:!0,_label:"Angular"},{_label:"React"},{_disabled:!0,_label:"Vue"},{_disabled:!0,_label:"Web Component"}]},i.createElement("div",null,"Preview"===l&&i.createElement(o,{url:a(d,t,n,p.react,"preview")})),i.createElement("div",null,"Angular"===l&&i.createElement(o,{url:a(d,t,n,p.angular)})),i.createElement("div",null,"React"===l&&i.createElement(o,{url:a(d,t,n,p.react)})),i.createElement("div",null,"Vue"===l&&i.createElement(o,{url:a(d,t,n,p.vue)})),i.createElement("div",null,"Web Component"===l&&i.createElement(o,{url:a(d,t,n,p.webcomponent)})))}},5956:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>d,default:()=>k,frontMatter:()=>s,metadata:()=>u,toc:()=>c});var r=n(5882),i=(n(9496),n(9613));const a={toc:[{value:"Funktionsweise",id:"funktionsweise",level:2},{value:"Konstruktion",id:"konstruktion",level:2},{value:"Code",id:"code",level:3},{value:"Beispiel",id:"beispiel",level:3},{value:"Verwendung",id:"verwendung",level:2},{value:"Definition der Links",id:"definition-der-links",level:3},{value:"Best practices",id:"best-practices",level:3},{value:"Anwendungsf\xe4lle",id:"anwendungsf\xe4lle",level:3},{value:"Barrierefreiheit",id:"barrierefreiheit",level:2},{value:"Tastatursteuerung",id:"tastatursteuerung",level:3},{value:"Links und Referenzen",id:"links-und-referenzen",level:2},{value:"Properties",id:"properties",level:2},{value:"Shadow Parts",id:"shadow-parts",level:2},{value:"Dependencies",id:"dependencies",level:2},{value:"Depends on",id:"depends-on",level:3},{value:"Graph",id:"graph",level:3}]};function l(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},a,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Mit Hilfe der ",(0,i.kt)("strong",{parentName:"p"},"Breadcrumb"),"-Komponente kann der Pfad zur aktuellen Position einer Webseite in einer hierarchischen Struktur dargestellt werden."),(0,i.kt)("h2",{id:"funktionsweise"},"Funktionsweise"),(0,i.kt)("p",null,"Die ",(0,i.kt)("strong",{parentName:"p"},"Breadcrumb"),"-Komponente zeigt die aktuelle Position einer Webseite in einer horizontalen Navigationsstruktur an. Das jeweils letzte Element rechts stellt die aktuelle Seite selbst dar.\nDiese ist nicht mit einem link versehen. Alle Elemente links der aktuellen Seite sind mit einem Link auf die verkn\xfcpfte Seite versehen."),(0,i.kt)("h2",{id:"konstruktion"},"Konstruktion"),(0,i.kt)("h3",{id:"code"},"Code"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},'<div>\n    <kol-breadcrumb _links=\'[{"_label":"Startseite","_href":"#/"},{"_label":"Unterseite von Startseite","_href":"#/unterseite"}]\'></kol-breadcrumb>\n</div>\n')),(0,i.kt)("h3",{id:"beispiel"},"Beispiel"),(0,i.kt)("p",null,(0,i.kt)("kol-breadcrumb",{_links:'[{"_label":"Startseite","_href":"#/"},{"_label":"Unterseite von Startseite","_href":"#/unterseite"}]'})),(0,i.kt)("h2",{id:"verwendung"},"Verwendung"),(0,i.kt)("h3",{id:"definition-der-links"},"Definition der Links"),(0,i.kt)("p",null,"Das Attribut ",(0,i.kt)("strong",{parentName:"p"},"_","links")," erwartet die \xdcbergabe eines JSON-Objekts, aus dem sich der Aufbau der anzuzeigenden Breadcrumb-Pfade ergibt. Das JSON-Objekt \xfcbergibt beliebig viele Elemente, die jeweils eine Anzahl an Eigenschaften und Werten bereitstellen."),(0,i.kt)("p",null,"Jede Eigenschaft und der zugeh\xf6rige Wert m\xfcssen in doppelten Anf\xfchrungszeichen gesetzt werden."),(0,i.kt)("p",null,"Einzelne Elemente werden in geschweiften Klammern und durch ",(0,i.kt)("strong",{parentName:"p"},"Komma")," separiert geschrieben."),(0,i.kt)("p",null,"Das gesamte JSON-Objekt muss in eckigen Klammern an das Attribut ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"_links"))," \xfcbergeben werden."),(0,i.kt)("b",null,"Folgende Eigenschaften stehen zur Verf\xfcgung:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"_href"))," \xfcbergibt den Link, der f\xfcr dieses Element verwendet werden soll."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"_icon"))," (optional) \xfcbergibt den Namen des Icon, wenn zus\xe4tzlich zum Text des Elements noch ein Icon angezeigt werden soll. Es stehen alle Icons aus der ",(0,i.kt)("strong",{parentName:"li"},"Icofont-Bibliothek")," zur Verf\xfcgung"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"_iconOnly"))," (optional). Wenn der Wert auf ",(0,i.kt)("strong",{parentName:"li"},"true")," gesetzt wird, erscheint im Link ausschlie\xdflich das Icon, ohne weiteren Text. Die Eigenschaft ",(0,i.kt)("inlineCode",{parentName:"li"},"_icon")," muss gesetzt werden."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"_label"))," \xfcbergibt den Text, der f\xfcr dieses Element angezeigt werden soll."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"_links"))," \xfcbergibt den Pfadaufbau der Komponente als JSON-Objekt.")),(0,i.kt)("p",null,"Beispiel f\xfcr ein JSON-Objekt, das an das Attribut ",(0,i.kt)("strong",{parentName:"p"},"_","links")," \xfcbergeben wird:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"[\n    {\n        _label: 'Startseite',\n        _href: '#/',\n        _icon: 'home',\n        _iconOnly: true,\n    },\n    {\n        _label: '1. Unterseite',\n        _href: '/1_unterseite',\n    },\n    {\n        _label: '2. Unterseite',\n        _href: '/2_unterseite',\n    },\n];\n")),(0,i.kt)("p",null,(0,i.kt)("kol-breadcrumb",{_links:'[{"_label":"Startseite","_href":"#/","_icon":"home","_icon-only": "true"},{"_label":"1. Unterseite","_href":"#/1_unterseite"},{"_label":"2. Unterseite","_href":"#/2_unterseite"}]'})),(0,i.kt)("h3",{id:"best-practices"},"Best practices"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Die ",(0,i.kt)("strong",{parentName:"li"},"Breadcrumb"),"-Komponente ist ein wichtiges Element f\xfcr eine effektive Suchmaschinenoptimierung Ihrer Webseite."),(0,i.kt)("li",{parentName:"ul"},"Auch f\xfcr Benutzer:innen der Webseite bietet eine Breadcrumb-Navigation zus\xe4tzliche \xdcbersicht."),(0,i.kt)("li",{parentName:"ul"},"Positionieren Sie die Breadcrumb m\xf6glichst weit oben auf Ihren Inhaltsseiten, um zu gew\xe4hrleisten, dass Suchmaschinen diese als zus\xe4tzliche Informationsquelle zur Struktur Ihrer Webseite nutzen k\xf6nnen."),(0,i.kt)("li",{parentName:"ul"},"Positionieren Sie die Breadcrumb-Komponente auf jeder Inhaltsseite Ihre Webseite. Sie gew\xe4hrleisten so, dass sich Besucher:innen jederzeit zurecht finden und die aktuelle Position erkennen k\xf6nnen."),(0,i.kt)("li",{parentName:"ul"},"Vermeiden Sie, die Breadcrumb-Navigation auf der Startseite zu positionieren."),(0,i.kt)("li",{parentName:"ul"},"Verwenden Sie eine Breadcrumb-Navigation nur dann, wenn sie f\xfcr Benutzer:innen einen wirklichen Mehrwert bieten."),(0,i.kt)("li",{parentName:"ul"},"Auf mobilen Varianten einer Webseite ist eine Breadcrumb-Navigation m\xf6glicherweise nicht sinnvoll.")),(0,i.kt)("h3",{id:"anwendungsf\xe4lle"},"Anwendungsf\xe4lle"),(0,i.kt)("p",null,"Eine Breadcrumb-Navigation ist auf einer gro\xdfen Mehrzahl der aktuellen Webseiten zu finden. Somit beschreibt der klassische Anwendungsfall den generellen Einbau dieser Komponente."),(0,i.kt)("h2",{id:"barrierefreiheit"},"Barrierefreiheit"),(0,i.kt)("p",null,"Achten Sie im Sinne der optimalen Barrierefreiheit darauf, das Attribut ",(0,i.kt)("inlineCode",{parentName:"p"},"_aria-label")," korrekt auszuzeichnen. Beachten Sie diesen Hinweis insbesondere dann, wenn Sie die Option ",(0,i.kt)("inlineCode",{parentName:"p"},"_icon-only")," verwenden und so auf einen beschreibenden Text im Link verzichten w\xfcrden."),(0,i.kt)("p",null,"Beachten Sie, dass auch das letzte Element in der Breadcrumb-Komponente per Tab-Taste angesprungen werden kann, obwohl dort kein Link hinterlegt ist. Hierdurch kann auch dieses Element von Screenreader erreicht und vorgelesen werden."),(0,i.kt)("h3",{id:"tastatursteuerung"},"Tastatursteuerung"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Taste"),(0,i.kt)("th",{parentName:"tr",align:null},"Funktion"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Tab")),(0,i.kt)("td",{parentName:"tr",align:null},"Springt die einzelnen Elemente der Breadcrumb-Navigation an.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Enter")),(0,i.kt)("td",{parentName:"tr",align:null},"\xd6ffnet den Link des aktuellen Elements.")))),(0,i.kt)("h2",{id:"links-und-referenzen"},"Links und Referenzen"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.w3.org/TR/wai-aria-practices/#breadcrumb"},"https://www.w3.org/TR/wai-aria-practices/#breadcrumb"))),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Property"),(0,i.kt)("th",{parentName:"tr",align:null},"Attribute"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Default"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"_ariaLabel")," ",(0,i.kt)("em",{parentName:"td"},"(required)")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"_aria-label")),(0,i.kt)("td",{parentName:"tr",align:null},"Gibt den Text an, der die Navigation von anderen Navigationen differenziert."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"_links")," ",(0,i.kt)("em",{parentName:"td"},"(required)")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"_links")),(0,i.kt)("td",{parentName:"tr",align:null},"Gibt die geordnete Liste der Seitenhierarchie in Links an."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"NavLinkProps[] \\| string")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"undefined"))))),(0,i.kt)("h2",{id:"shadow-parts"},"Shadow Parts"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Part"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},'"link"')),(0,i.kt)("td",{parentName:"tr",align:null},"Erm\xf6glicht das Stylen der Links.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},'"separator"')),(0,i.kt)("td",{parentName:"tr",align:null},"Erm\xf6glicht das \xc4ndern des Separator-Icons.")))),(0,i.kt)("h2",{id:"dependencies"},"Dependencies"),(0,i.kt)("h3",{id:"depends-on"},"Depends on"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"./icon"},"kol-icon")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"./link"},"kol-link"))),(0,i.kt)("h3",{id:"graph"},"Graph"),(0,i.kt)("mermaid",{value:"graph TD;\n  kol-breadcrumb --\x3e kol-icon\n  kol-breadcrumb --\x3e kol-link\n  kol-link --\x3e kol-link-wc\n  kol-link-wc --\x3e kol-span-wc\n  kol-link-wc --\x3e kol-icon\n  kol-link-wc --\x3e kol-tooltip\n  kol-span-wc --\x3e kol-icon\n  kol-tooltip --\x3e kol-badge\n  kol-badge --\x3e kol-span-wc\n  kol-badge --\x3e kol-button-wc\n  kol-button-wc --\x3e kol-span-wc\n  kol-button-wc --\x3e kol-tooltip\n  style kol-breadcrumb fill:#f9f,stroke:#333,stroke-width:4px"}),(0,i.kt)("hr",null))}l.isMDXComponent=!0;var o=n(816);const s={title:"Breadcrumb",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die Breadcrumb-Komponente.",tags:["Breadcrumb","Beschreibung","Spezifikation","Beispiele"]},d=void 0,u={unversionedId:"components/breadcrumb",id:"components/breadcrumb",title:"Breadcrumb",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die Breadcrumb-Komponente.",source:"@site/docs/30-components/breadcrumb.mdx",sourceDirName:"30-components",slug:"/components/breadcrumb",permalink:"/docs/components/breadcrumb",draft:!1,tags:[{label:"Breadcrumb",permalink:"/docs/tags/breadcrumb"},{label:"Beschreibung",permalink:"/docs/tags/beschreibung"},{label:"Spezifikation",permalink:"/docs/tags/spezifikation"},{label:"Beispiele",permalink:"/docs/tags/beispiele"}],version:"current",frontMatter:{title:"Breadcrumb",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die Breadcrumb-Komponente.",tags:["Breadcrumb","Beschreibung","Spezifikation","Beispiele"]},sidebar:"tutorialSidebar",previous:{title:"Badge",permalink:"/docs/components/badge"},next:{title:"ButtonGroup",permalink:"/docs/components/button-group"}},p={},c=[{value:"Beispiele",id:"beispiele",level:2}],m={toc:c};function k(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(l,{mdxType:"Readme"}),(0,i.kt)("h2",{id:"beispiele"},"Beispiele"),(0,i.kt)(o._,{component:"breadcrumb",sample:"basic",mdxType:"Configurator"}))}k.isMDXComponent=!0}}]);