"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[7342],{49613:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>c});var a=n(59496);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var d=a.createContext({}),s=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(d.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,d=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=s(n),k=i,c=p["".concat(d,".").concat(k)]||p[k]||m[k]||r;return n?a.createElement(c,l(l({ref:t},u),{},{components:n})):a.createElement(c,l({ref:t},u))}));function c(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=k;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o[p]="string"==typeof e?e:i,l[1]=o;for(var s=2;s<r;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},91194:(e,t,n)=>{n.d(t,{_:()=>d});var a=n(1325),i=n(59496);const r=function(e,t,n,a,i){return void 0===i&&(i="editor"),`${e}&module=${a}&initialpath=%23%2F${t}%2F${n}&view=${i}`},l={width:"100%",height:"500px",border:"0",overflow:"hidden"},o=e=>{let{url:t}=e;return i.createElement("div",{className:"m-2"},i.createElement("iframe",{src:t,style:l,title:"kolibri-public-ui-code-samples",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}),i.createElement(a.Nv,{_href:t,_label:"",_target:"codesandbox"},i.createElement("img",{alt:"CodeSandbox-Schalter",src:"https://codesandbox.io/static/img/play-codesandbox.svg"})))},d=e=>{let{component:t,sample:n}=e;const[l,d]=(0,i.useState)("Preview"),s="https://codesandbox.io/embed/kolibri-public-ui-react-samples-w5u37c?fontsize=14&hidenavigation=1&autoresize=1&theme=dark",u=`%2Fsrc%2Fsamples%2F${t}%2F${n}`,p={angular:`${u}.html`,react:`${u}.tsx`,vue:`${u}.vue`,webcomponent:`${u}.html`},m={onSelect:(e,t)=>{switch(t){case 1:d((()=>"Angular"));break;case 2:d((()=>"React"));break;case 3:d((()=>"Vue"));break;case 4:d((()=>"Web Component"));break;default:d((()=>"Preview"))}}};return i.createElement(a.UD,{className:"w-full",_ariaLabel:"Code-Beispiel",_on:m,_tabs:[{_label:"Vorschau"},{_disabled:!0,_label:"Angular"},{_label:"React"},{_disabled:!0,_label:"Vue"},{_disabled:!0,_label:"Web Component"}]},i.createElement("div",null,"Preview"===l&&i.createElement(o,{url:r(s,t,n,p.react,"preview")})),i.createElement("div",null,"Angular"===l&&i.createElement(o,{url:r(s,t,n,p.angular)})),i.createElement("div",null,"React"===l&&i.createElement(o,{url:r(s,t,n,p.react)})),i.createElement("div",null,"Vue"===l&&i.createElement(o,{url:r(s,t,n,p.vue)})),i.createElement("div",null,"Web Component"===l&&i.createElement(o,{url:r(s,t,n,p.webcomponent)})))}},83688:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>c,frontMatter:()=>d,metadata:()=>u,toc:()=>m});var a=n(15882),i=(n(59496),n(49613));const r={toc:[{value:"Konstruktion",id:"konstruktion",level:2},{value:"Code",id:"code",level:3},{value:"Beispiel",id:"beispiel",level:3},{value:"Verwendung",id:"verwendung",level:2},{value:"Links in der Navigationsleiste definieren",id:"links-in-der-navigationsleiste-definieren",level:3},{value:"Kompakte Navigationsleiste anzeigen",id:"kompakte-navigationsleiste-anzeigen",level:3},{value:"Umschalter normale/kompakte Darstellung",id:"umschalter-normalekompakte-darstellung",level:3},{value:"Umschaltung horizontale/vertikale Ausrichtung",id:"umschaltung-horizontalevertikale-ausrichtung",level:3},{value:"Best practices",id:"best-practices",level:3},{value:"Anwendungsf\xe4lle",id:"anwendungsf\xe4lle",level:3},{value:"Barrierefreiheit",id:"barrierefreiheit",level:2},{value:"Tastatursteuerung",id:"tastatursteuerung",level:3},{value:"Properties",id:"properties",level:2},{value:"Dependencies",id:"dependencies",level:2},{value:"Depends on",id:"depends-on",level:3},{value:"Graph",id:"graph",level:3}]};function l(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},r,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Eine ",(0,i.kt)("strong",{parentName:"p"},"Navigationsleiste")," ist eine Gruppe von verwandten Links oder Navigationselementen, die durch Anklicken eine Aktion ausf\xfchren oder Inhalte anzeigen. Sie navigiert Nutzer:innen direkt zu bestimmten Inhalten der aktuellen Seite oder zu externen Seiten. Au\xdferdem dient sie Nutzer:innen (\xe4hnlich wie Registerkarten) als Steuerelement, um Inhalte anzuzeigen, auszublenden und zwischen ihnen zu wechseln."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"KoliBri")," stellt eine umfangreich konfigurierbare, vertikale oder horizontale ",(0,i.kt)("strong",{parentName:"p"},"Navigationsleiste")," zur Verf\xfcgung, die mehrere Ebenen darstellen und in der Breite variiert werden kann.\n\xdcbergeordnete Men\xfcpunkte die Untermen\xfcpunkte enthalten, werden mit einem ",(0,i.kt)("strong",{parentName:"p"},"Plus-Icon")," am rechten Rand angezeigt. Wird der \xfcbergeordnete Men\xfcpunkt mit dem Plus-Icon ge\xf6ffnet, \xe4ndert sich das Plus-Icon automatisch zu einem ",(0,i.kt)("strong",{parentName:"p"},"Minus-Icon"),", mit dem der Men\xfcpunkt wieder geschlossen werden kann."),(0,i.kt)("p",null,"Aktive Men\xfcpunkte werden mit einer farbigen Markierung dargestellt."),(0,i.kt)("p",null,"\xdcber eine optionale Schaltfl\xe4che unterhalb der Navigation kann die Breite der ",(0,i.kt)("strong",{parentName:"p"},"Nav"),"-Komponente ver\xe4ndert werden. In der kleinsten Breite werden die Men\xfctitel ausgeblendet und nur\nnoch die Icons ausgegeben."),(0,i.kt)("h2",{id:"konstruktion"},"Konstruktion"),(0,i.kt)("h3",{id:"code"},"Code"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},"<kol-nav\n    _ariaLabel=\"Navigation\"\n    _links=\"[\n    {\n        _href: 'startseite',\n        _icon: 'codicon codicon-home',\n        _label: 'Startseite',\n        _children: [\n            { _href: 'startseite/1-untermenuepunkt', _icon: 'codicon codicon-home', _label: '1. Untermen\xfcpunkt' },\n            { _href: 'startseite/2-untermenuepunkt', _icon: 'codicon codicon-home', _label: '2. Untermen\xfcpunkt' },\n        ],\n    },\n    { _href: 'unterseite', _icon: 'codicon codicon-home', _label: '2. Men\xfcpunkt' },\n]\"\n    _has-compact-button\n></kol-nav>\n")),(0,i.kt)("h3",{id:"beispiel"},"Beispiel"),(0,i.kt)("p",null,(0,i.kt)("kol-nav",{_ariaLabel:"Navigation",_links:"[{_href: 'startseite',_icon: 'codicon codicon-home',_label: 'Startseite',_children: [{ _href: 'startseite/1-untermenuepunkt', _icon: 'codicon codicon-home', _label: '1. Untermen\xfcpunkt' },{ _href: 'startseite/2-untermenuepunkt', _icon: 'codicon codicon-home', _label: '2. Untermen\xfcpunkt' },],},{ _href: 'unterseite', _icon: 'codicon codicon-home', _label: '2. Men\xfcpunkt' }]","_has-compact-button":!0})),(0,i.kt)("h2",{id:"verwendung"},"Verwendung"),(0,i.kt)("h3",{id:"links-in-der-navigationsleiste-definieren"},"Links in der Navigationsleiste definieren"),(0,i.kt)("p",null,"Die Navigationsstruktur wird als Objekt oder JSON-String an das Attribut ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"_links"))," \xfcbergeben. Die Struktur ist als Wert/Parameter-Paar aufgebaut:\nUm Untermen\xfcpunkte zu erzeugen, erweitern Sie die JSON-Struktur um das zus\xe4tzliche Attribut ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"_children"))," im \xfcbergeordneten Element."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"[\n    {\n        _href: 'startseite',\n        _icon: 'codicon codicon-home',\n        _label: 'Startseite',\n        _children: [\n            { _href: 'startseite/1-untermenuepunkt', _icon: 'codicon codicon-home', _label: '1. Untermen\xfcpunkt' },\n            { _href: 'startseite/2-untermenuepunkt', _icon: 'codicon codicon-home', _label: '2. Untermen\xfcpunkt' },\n        ],\n    },\n    { _href: 'unterseite', _icon: 'codicon codicon-home', _label: '2. Men\xfcpunkt' },\n];\n")),(0,i.kt)("h3",{id:"kompakte-navigationsleiste-anzeigen"},"Kompakte Navigationsleiste anzeigen"),(0,i.kt)("p",null,"Um die Navigationsleiste in der kompakten Darstellung auszugeben, setzen Sie das Attribut ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"_compact")),"."),(0,i.kt)("h3",{id:"umschalter-normalekompakte-darstellung"},"Umschalter normale/kompakte Darstellung"),(0,i.kt)("p",null,"Um eine Schaltfl\xe4che einzublenden, die die kompakte Darstellung an/aus schaltet, setzen Sie das Attribut ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"_hasCompact-button")),".\nDiese Schaltfl\xe4che erscheint unterhalb der Navigation und wird nur bei vertikaler Ausrichtung angezeigt."),(0,i.kt)("h3",{id:"umschaltung-horizontalevertikale-ausrichtung"},"Umschaltung horizontale/vertikale Ausrichtung"),(0,i.kt)("p",null,"Die Ausrichtung der Navigationsleiste kann mit dem Attribut ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"_orientation"))," umgeschaltet werden. M\xf6gliche Werte sind:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"horizontal")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"vertical"))),(0,i.kt)("h3",{id:"best-practices"},"Best practices"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Verwenden Sie ",(0,i.kt)("strong",{parentName:"li"},"Navigationsleisten"),", um ",(0,i.kt)("strong",{parentName:"li"},"Navigation")," oder navigations\xe4hnliche Aktionen darzustellen (z. B. interne oder externe Links, Abmelden, Kontrolle der Sichtbarkeit auf der Seite)."),(0,i.kt)("li",{parentName:"ul"},"Verwenden Sie das Label, um eine klare und pr\xe4zise Beschreibung des Inhalts zu diesem bestimmten Navigationselement bereitzustellen."),(0,i.kt)("li",{parentName:"ul"},"Verwenden Sie keine ",(0,i.kt)("strong",{parentName:"li"},"Navigationsleisten")," f\xfcr Aktionen, die besser als Schaltfl\xe4chen dargestellt werden (z. B. \u201eSpeichern\u201c, \u201eL\xf6schen\u201c, \u201eArtikel in den Warenkorb legen\u201c)."),(0,i.kt)("li",{parentName:"ul"},"Stapeln Sie nicht mehrere ",(0,i.kt)("strong",{parentName:"li"},"Navigationsleisten")," direkt nebeneinander."),(0,i.kt)("li",{parentName:"ul"},"Verwenden Sie keine ",(0,i.kt)("strong",{parentName:"li"},"Navigationsleisten")," zum Vergleichen von Inhalten (z. B. unterschiedliche Leistungen)."),(0,i.kt)("li",{parentName:"ul"},"Ber\xfccksichtigen Sie die Anzahl der Navigationselemente, die Sie in die ",(0,i.kt)("strong",{parentName:"li"},"Navigationsleiste")," einf\xfcgen. Wenn Sie das Gef\xfchl haben, dass die Zahl zu gro\xdf wird, ziehen Sie alternative Ans\xe4tze zur Pr\xe4sentation des Inhalts in Betracht oder verwenden Sie ein anderes Navigationsmuster/eine andere Komponente.")),(0,i.kt)("h3",{id:"anwendungsf\xe4lle"},"Anwendungsf\xe4lle"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Verwenden Sie ",(0,i.kt)("strong",{parentName:"li"},"Navigationsleisten")," als In-Page-Navigation auf einer Landingpage."),(0,i.kt)("li",{parentName:"ul"},"Verwenden Sie ",(0,i.kt)("strong",{parentName:"li"},"Navigationsleisten"),", um verwandte Informationen auf einer Landingpage zu organisieren."),(0,i.kt)("li",{parentName:"ul"},"Nutzen Sie ",(0,i.kt)("strong",{parentName:"li"},"Navigationsleisten"),", um Angebote oder Vorteile in verschiedene Kategorien einzuordnen (z.B. Formulare)."),(0,i.kt)("li",{parentName:"ul"},"Verwenden Sie ",(0,i.kt)("strong",{parentName:"li"},"Navigationsleisten"),", um FAQs in verschiedene Kategorien zu unterteilen.")),(0,i.kt)("h2",{id:"barrierefreiheit"},"Barrierefreiheit"),(0,i.kt)("h3",{id:"tastatursteuerung"},"Tastatursteuerung"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Taste"),(0,i.kt)("th",{parentName:"tr",align:null},"Funktion"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Tab")),(0,i.kt)("td",{parentName:"tr",align:null},"Fokussiert den ersten Men\xfcpunkt in der Navigation. Nachfolgend kann mit der Tab-Taste jeder Men\xfcpunkt angesprungen werden. Wenn der Has-compact-Button aktiviert wurde, ist dieser ebenfalls mit der Tab-Taste erreichbar.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Enter")),(0,i.kt)("td",{parentName:"tr",align:null},"Klappt Unterpunkte auf/zu, sofern eine Ausklappschaltfl\xe4che fokussiert ist, aktiviert die Schaltfl\xe4che oder \xf6ffnet den Link anderenfalls.")))),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Property"),(0,i.kt)("th",{parentName:"tr",align:null},"Attribute"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Default"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"_ariaCurrentValue")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"_aria-current-value")),(0,i.kt)("td",{parentName:"tr",align:null},"Gibt den Wert von aria-current an, der bei dem aktuellen Kontext innerhalb der Navigation verwendet werden soll."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},'"date" \\| "location" \\| "page" \\| "step" \\| "time" \\| boolean')),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"false"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"_ariaLabel")," ",(0,i.kt)("em",{parentName:"td"},"(required)")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"_aria-label")),(0,i.kt)("td",{parentName:"tr",align:null},"Gibt den Text an, der die Navigation von anderen Navigationen differenziert."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"_collapsible")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"_collapsible")),(0,i.kt)("td",{parentName:"tr",align:null},"Gibt an, ob Knoten in der Navigation zusammengeklappt werden k\xf6nnen. Ist standardm\xe4\xdfig aktiv."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"boolean \\| undefined")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"true"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"_compact")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"_compact")),(0,i.kt)("td",{parentName:"tr",align:null},"Gibt an, ob die Navigation kompakt angezeigt wird."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"boolean \\| undefined")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"false"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"_hasCompactButton")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"_has-compact-button")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("span",{class:"text-red-500"},(0,i.kt)("strong",{parentName:"td"},"[DEPRECATED]"))," Version 2",(0,i.kt)("br",null),(0,i.kt)("br",null),"Gibt an, ob die Navigation eine zus\xe4tzliche Schaltfl\xe4che zum Aus- und Einklappen der Navigation anzeigen soll."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"boolean \\| undefined")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"false"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"_links")," ",(0,i.kt)("em",{parentName:"td"},"(required)")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"_links")),(0,i.kt)("td",{parentName:"tr",align:null},"Gibt die geordnete Liste der Seitenhierarchie an."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"ButtonOrLinkOrTextWithChildrenProps[] \\| string")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"_orientation")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"_orientation")),(0,i.kt)("td",{parentName:"tr",align:null},"Gibt die Ausrichtung der Navigation an."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},'"horizontal" \\| "vertical" \\| undefined')),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"'vertical'"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"_variant")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"_variant")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("span",{class:"text-red-500"},(0,i.kt)("strong",{parentName:"td"},"[DEPRECATED]"))," This property is deprecated and will be removed in the next major version.",(0,i.kt)("br",null),(0,i.kt)("br",null),"Stellt verschiedene Varianten der Navigation zur Verf\xfcgung."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},'"primary" \\| "secondary" \\| undefined')),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"'primary'"))))),(0,i.kt)("h2",{id:"dependencies"},"Dependencies"),(0,i.kt)("h3",{id:"depends-on"},"Depends on"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"kol-button-wc"),(0,i.kt)("li",{parentName:"ul"},"kol-span-wc"),(0,i.kt)("li",{parentName:"ul"},"kol-link-wc"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"./button"},"kol-button"))),(0,i.kt)("h3",{id:"graph"},"Graph"),(0,i.kt)("mermaid",{value:"graph TD;\n  kol-nav --\x3e kol-button-wc\n  kol-nav --\x3e kol-span-wc\n  kol-nav --\x3e kol-link-wc\n  kol-nav --\x3e kol-button\n  kol-button-wc --\x3e kol-span-wc\n  kol-button-wc --\x3e kol-tooltip\n  kol-span-wc --\x3e kol-icon\n  kol-tooltip --\x3e kol-span-wc\n  kol-link-wc --\x3e kol-span-wc\n  kol-link-wc --\x3e kol-icon\n  kol-link-wc --\x3e kol-tooltip\n  kol-button --\x3e kol-button-wc\n  style kol-nav fill:#f9f,stroke:#333,stroke-width:4px"}),(0,i.kt)("hr",null))}l.isMDXComponent=!0;var o=n(91194);const d={title:"Nav",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die Nav-Komponente.",tags:["Nav","Beschreibung","Spezifikation","Beispiele"]},s=void 0,u={unversionedId:"components/nav",id:"components/nav",title:"Nav",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die Nav-Komponente.",source:"@site/docs/30-components/nav.mdx",sourceDirName:"30-components",slug:"/components/nav",permalink:"/docs/components/nav",draft:!1,tags:[{label:"Nav",permalink:"/docs/tags/nav"},{label:"Beschreibung",permalink:"/docs/tags/beschreibung"},{label:"Spezifikation",permalink:"/docs/tags/spezifikation"},{label:"Beispiele",permalink:"/docs/tags/beispiele"}],version:"current",frontMatter:{title:"Nav",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die Nav-Komponente.",tags:["Nav","Beschreibung","Spezifikation","Beispiele"]},sidebar:"tutorialSidebar",previous:{title:"Modal",permalink:"/docs/components/modal"},next:{title:"Pagination",permalink:"/docs/components/pagination"}},p={},m=[{value:"Beispiele",id:"beispiele",level:2}],k={toc:m};function c(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(l,{mdxType:"Readme"}),(0,i.kt)("h2",{id:"beispiele"},"Beispiele"),(0,i.kt)(o._,{component:"nav",sample:"basic",mdxType:"Configurator"}),(0,i.kt)(o._,{component:"nav",sample:"horizontal",mdxType:"Configurator"}))}c.isMDXComponent=!0}}]);