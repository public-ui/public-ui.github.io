"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[4565],{17942:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var a=n(50959);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var d=a.createContext({}),s=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(d.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,d=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(n),p=i,k=u["".concat(d,".").concat(p)]||u[p]||m[p]||r;return n?a.createElement(k,o(o({ref:t},c),{},{components:n})):a.createElement(k,o({ref:t},c))}));function k(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=p;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l[u]="string"==typeof e?e:i,o[1]=l;for(var s=2;s<r;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},6096:(e,t,n)=>{n.d(t,{_:()=>d});var a=n(52260),i=n(50959);const r=function(e,t,n,a,i){return void 0===i&&(i="editor"),`${e}&module=${a}&initialpath=%23%2F${t}%2F${n}&view=${i}`},o={width:"100%",height:"500px",border:"0",overflow:"hidden"},l=e=>{let{url:t}=e;return i.createElement("div",{className:"m-2"},i.createElement("iframe",{src:t,style:o,title:"kolibri-public-ui-code-samples",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}),i.createElement(a.Nv,{_href:t,_label:"",_target:"codesandbox"},i.createElement("img",{alt:"CodeSandbox-Schalter",src:"https://codesandbox.io/static/img/play-codesandbox.svg"})))},d=e=>{let{component:t,sample:n}=e;const[o,d]=(0,i.useState)("Preview"),s="https://codesandbox.io/embed/kolibri-public-ui-react-samples-w5u37c?fontsize=14&hidenavigation=1&autoresize=1&theme=dark",c=`%2Fsrc%2Fsamples%2F${t}%2F${n}`,u={angular:`${c}.html`,react:`${c}.tsx`,vue:`${c}.vue`,webcomponent:`${c}.html`},m={onSelect:(e,t)=>{switch(t){case 1:d((()=>"Angular"));break;case 2:d((()=>"React"));break;case 3:d((()=>"Vue"));break;case 4:d((()=>"Web Component"));break;default:d((()=>"Preview"))}}};return i.createElement(a.UD,{className:"w-full",_ariaLabel:"Code-Beispiel",_on:m,_tabs:[{_label:"Vorschau"},{_disabled:!0,_label:"Angular"},{_label:"React"},{_disabled:!0,_label:"Vue"},{_disabled:!0,_label:"Web Component"}]},i.createElement("div",null,"Preview"===o&&i.createElement(l,{url:r(s,t,n,u.react,"preview")})),i.createElement("div",null,"Angular"===o&&i.createElement(l,{url:r(s,t,n,u.angular)})),i.createElement("div",null,"React"===o&&i.createElement(l,{url:r(s,t,n,u.react)})),i.createElement("div",null,"Vue"===o&&i.createElement(l,{url:r(s,t,n,u.vue)})),i.createElement("div",null,"Web Component"===o&&i.createElement(l,{url:r(s,t,n,u.webcomponent)})))}},79039:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>c,default:()=>b,frontMatter:()=>s,metadata:()=>u,toc:()=>p});var a=n(15882),i=(n(50959),n(17942));const r={toc:[{value:"Konstruktion",id:"konstruktion",level:2},{value:"Code",id:"code",level:3},{value:"Beispiel",id:"beispiel",level:3},{value:"Verwendung",id:"verwendung",level:2},{value:"\xdcberschrift im Accordion-Tab",id:"\xfcberschrift-im-accordion-tab",level:3},{value:"\xdcberschriftenebene",id:"\xfcberschriftenebene",level:3},{value:"Inhalt im Kopfbereich des Accordion",id:"inhalt-im-kopfbereich-des-accordion",level:3},{value:"Inhalt des Accordion",id:"inhalt-des-accordion",level:3},{value:"Accordion ge\xf6ffnet anzeigen",id:"accordion-ge\xf6ffnet-anzeigen",level:3},{value:"Best practices",id:"best-practices",level:3},{value:"Anwendungsf\xe4lle",id:"anwendungsf\xe4lle",level:3},{value:"Barrierefreiheit",id:"barrierefreiheit",level:2},{value:"Tastatursteuerung",id:"tastatursteuerung",level:3},{value:"Links und Referenzen",id:"links-und-referenzen",level:2},{value:"Properties",id:"properties",level:2},{value:"Slots",id:"slots",level:2},{value:"Dependencies",id:"dependencies",level:2},{value:"Depends on",id:"depends-on",level:3},{value:"Graph",id:"graph",level:3}]},o="wrapper";function l(e){let{components:t,...n}=e;return(0,i.kt)(o,(0,a.Z)({},r,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Die ",(0,i.kt)("strong",{parentName:"p"},"Accordion"),"-Komponente ist ein Aufklapp-Men\xfc. Klickt man auf den Kopfbereich, bestehend aus Icon und \xdcberschrift, klappt der Inhalt mit zus\xe4tzlichen Informationen auf. Somit ist es ein interaktives Navigationselement, welches dazu dient, umfangreiche Inhalte platzsparend darzustellen."),(0,i.kt)("p",null,"Accordions kommen immer dann zum Einsatz, wenn einem thematischen Oberbegriff zugeordnete Inhalte angezeigt oder verborgen werden sollen. Sie erlauben umfangreichere Detailinformationen zu einem Oberbegriff, als es aus Gr\xfcnden der \xdcbersichtlichkeit eigentlich sinnvoll w\xe4re. Sie \xfcberlassen es den Besucher:innen selbst, ob sie sich diese Informationen anzeigen lassen m\xf6chten."),(0,i.kt)("h2",{id:"konstruktion"},"Konstruktion"),(0,i.kt)("h3",{id:"code"},"Code"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<div class="grid gap-2">\n    <kol-accordion _heading="Element 1">\n        <div slot="content">\n            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam\n            voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.\n            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam\n            voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.\n        </div>\n        <div slot="header">Inhalt eines Header</div>\n    </kol-accordion>\n    <kol-accordion _heading="Element 2">\n        <div slot="header">Inhalt im Header</div>\n        <div slot="content">\n            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam\n            voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.\n            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam\n            voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.\n        </div>\n        <div slot="footer">Inhalt im Footer</div>\n    </kol-accordion>\n</div>\n')),(0,i.kt)("h3",{id:"beispiel"},"Beispiel"),(0,i.kt)("div",{class:"grid gap-2"},(0,i.kt)("kol-accordion",{_heading:"Element 1"},(0,i.kt)("div",{slot:"content"},"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."),(0,i.kt)("div",{slot:"header"},"Inhalt eines Header")),(0,i.kt)("kol-accordion",{_heading:"Element 2"},(0,i.kt)("div",{slot:"header"},"Inhalt im Header"),(0,i.kt)("div",{slot:"content"},"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."),(0,i.kt)("div",{slot:"footer"},"Inhalt im Footer"))),(0,i.kt)("h2",{id:"verwendung"},"Verwendung"),(0,i.kt)("h3",{id:"\xfcberschrift-im-accordion-tab"},"\xdcberschrift im Accordion-Tab"),(0,i.kt)("p",null,"Der Text, der als \xdcberschrift im Accordion-Tab angezeigt werden soll, wird durch das Attribut ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"_heading"))," \xfcbergeben. Der Text kann neben Sonderzeichen auch Umlaute oder Leerzeichen enthalten."),(0,i.kt)("h3",{id:"\xfcberschriftenebene"},"\xdcberschriftenebene"),(0,i.kt)("p",null,"Die \xdcberschriftenebene wird durch das Attribut ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"_level"))," \xfcbergeben. M\xf6glich sind die Level ",(0,i.kt)("strong",{parentName:"p"},"1")," bis ",(0,i.kt)("strong",{parentName:"p"},"6")),(0,i.kt)("h3",{id:"inhalt-im-kopfbereich-des-accordion"},"Inhalt im Kopfbereich des Accordion"),(0,i.kt)("p",null,"Ein optisch abgetrennter Inhalt im Kopfbereich des Accordions wird \xfcber einen eigenen Slot \xfcbergeben. Gibt es diesen Slot nicht oder wird er leer \xfcbergeben, ist der Kopfbereich nicht sichtbar."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},'<div slot="header">Inhalt im Kopfbereich</div>'))),(0,i.kt)("h3",{id:"inhalt-des-accordion"},"Inhalt des Accordion"),(0,i.kt)("p",null,"Der Hauptinhalt des Accordions wird \xfcber einen eigenen Slot \xfcbergeben."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},'<div slot="content">Inhalt im Kopfbereich</div>'))),(0,i.kt)("h3",{id:"accordion-ge\xf6ffnet-anzeigen"},"Accordion ge\xf6ffnet anzeigen"),(0,i.kt)("p",null,"Standardm\xe4\xdfig wird das Accordion nach dem Laden der Seite im geschlossenen Zustand angezeigt. Soll das Accordion ge\xf6ffnet angezeigt werden, setzen Sie das Attribut ",(0,i.kt)("strong",{parentName:"p"},"_","open")," zus\xe4tzlich ein."),(0,i.kt)("h3",{id:"best-practices"},"Best practices"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Verwenden Sie ein Accordion, um lange Textabschnitte unter einem thematischen Oberbegriff zusammenzufassen"),(0,i.kt)("li",{parentName:"ul"},"Verwenden Sie ein Accordion, um weniger wichtige Informationen, als Erg\xe4nzung zu Hauptinformationen, zur Verf\xfcgung zu stellen."),(0,i.kt)("li",{parentName:"ul"},"Mit einem Accordion k\xf6nnen Sie die L\xe4nge Ihrer Webseite deutlich reduzieren und stellen gleichzeitig die Erreichbarkeit aller Informationen f\xfcr die Nutzer:innen sicher."),(0,i.kt)("li",{parentName:"ul"},"Verwenden Sie eindeutige \xdcberschriften, um die Nutzer:innen auf die weiteren Informationen des Accordions hinzuweisen."),(0,i.kt)("li",{parentName:"ul"},"Vermeiden Sie, wichtige ",(0,i.kt)("inlineCode",{parentName:"li"},"Call-To-Action"),"-Elemente innerhalb eines Accordions zu verbergen."),(0,i.kt)("li",{parentName:"ul"},"Lassen Sie Fehlermeldungen nicht innerhalb des Accordions anzeigen, um zu vermeiden, dass Nutzer:innen wichtige Informationen \xfcbersehen."),(0,i.kt)("li",{parentName:"ul"},"Verwenden Sie ein Accordion nicht als Auswahl-Element f\xfcr Nutzer:innen."),(0,i.kt)("li",{parentName:"ul"},"Verwenden Sie ein Accordion nicht, um wichtige Informationen zu rechtlichen Angaben oder zum Datenschutz anzuzeigen.")),(0,i.kt)("h3",{id:"anwendungsf\xe4lle"},"Anwendungsf\xe4lle"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"H\xe4ufig gestellte Fragen (FAQ)")),(0,i.kt)("h2",{id:"barrierefreiheit"},"Barrierefreiheit"),(0,i.kt)("p",null,"In der ",(0,i.kt)("strong",{parentName:"p"},"Accordion"),"-Komponente wird das \xd6ffnen-/Schlie\xdfen-Icon links ausgerichtet, um Nutzer:innen mit eingeschr\xe4nktem Sichtfeld eine bessere Bedienbarkeit zu erm\xf6glichen."),(0,i.kt)("p",null,"Es wurde bewusst auf die Verwendung von Icons, wie z.B. ",(0,i.kt)("inlineCode",{parentName:"p"},"<")," oder ",(0,i.kt)("inlineCode",{parentName:"p"},">")," verzichtet. Die Verwendung der Icons ",(0,i.kt)("inlineCode",{parentName:"p"},"+")," und ",(0,i.kt)("inlineCode",{parentName:"p"},"-")," gew\xe4hrleistet eine bessere Sicht- und Erkennbarkeit bez\xfcglich des Ge\xf6ffnet- und Geschlossen-Status."),(0,i.kt)("p",null,"Bei der farblichen Gestaltung wurde besonders Wert auf einen h\xf6chstm\xf6glichen Kontrast in der\nStandardansicht gelegt."),(0,i.kt)("h3",{id:"tastatursteuerung"},"Tastatursteuerung"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Taste"),(0,i.kt)("th",{parentName:"tr",align:null},"Funktion"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Tab")),(0,i.kt)("td",{parentName:"tr",align:null},"Springt die einzelnen Accordion-Tabs an.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Enter")),(0,i.kt)("td",{parentName:"tr",align:null},"\xd6ffnet bzw. schlie\xdft den fokussierten Accordion-Tab.")))),(0,i.kt)("h2",{id:"links-und-referenzen"},"Links und Referenzen"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.w3.org/TR/wai-aria-practices/#accordion"},"https://www.w3.org/TR/wai-aria-practices/#accordion"))),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Property"),(0,i.kt)("th",{parentName:"tr",align:null},"Attribute"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Default"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"_heading")," ",(0,i.kt)("em",{parentName:"td"},"(required)")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"_heading")),(0,i.kt)("td",{parentName:"tr",align:null},"Gibt die \xdcberschrift des Accordions an."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"_level")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"_level")),(0,i.kt)("td",{parentName:"tr",align:null},"Setzt den H-Level, von 1 bis 6, der \xdcberschrift."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"0")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"1")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"2")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"3")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"4")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"5")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"6")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"undefined")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"1"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"_on")),(0,i.kt)("td",{parentName:"tr",align:null},"--"),(0,i.kt)("td",{parentName:"tr",align:null},"Gibt die EventCallback-Funktionen an."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"undefined")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"{ onClick?: EventValueOrEventCallback<Event, boolean>")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"undefined; }")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"_open")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"_open")),(0,i.kt)("td",{parentName:"tr",align:null},"Gibt an, ob das Accordion ge\xf6ffnet ist."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"boolean")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"undefined")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"false"))))),(0,i.kt)("h2",{id:"slots"},"Slots"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Slot"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},'"content"')),(0,i.kt)("td",{parentName:"tr",align:null},"Erm\xf6glicht das Einf\xfcgen beliebigen HTML's in den Inhaltsbereich des Accordions.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},'"header"')),(0,i.kt)("td",{parentName:"tr",align:null},"Erm\xf6glicht das Einf\xfcgen beliebigen HTML's in den Kopfbereich des Accordions.")))),(0,i.kt)("h2",{id:"dependencies"},"Dependencies"),(0,i.kt)("h3",{id:"depends-on"},"Depends on"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"./heading"},"kol-heading-wc")),(0,i.kt)("li",{parentName:"ul"},"kol-button-wc")),(0,i.kt)("h3",{id:"graph"},"Graph"),(0,i.kt)("mermaid",{value:"graph TD;\n  kol-accordion --\x3e kol-heading-wc\n  kol-accordion --\x3e kol-button-wc\n  kol-button-wc --\x3e kol-span-wc\n  kol-button-wc --\x3e kol-tooltip\n  kol-span-wc --\x3e kol-icon\n  kol-tooltip --\x3e kol-span-wc\n  style kol-accordion fill:#f9f,stroke:#333,stroke-width:4px"}),(0,i.kt)("hr",null))}l.isMDXComponent=!0;var d=n(6096);const s={title:"Accordion",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die Accordion-Komponente.",tags:["Accordion","Beschreibung","Spezifikation","Beispiele"]},c=void 0,u={unversionedId:"components/accordion",id:"components/accordion",title:"Accordion",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die Accordion-Komponente.",source:"@site/docs/30-components/accordion.mdx",sourceDirName:"30-components",slug:"/components/accordion",permalink:"/docs/components/accordion",draft:!1,tags:[{label:"Accordion",permalink:"/docs/tags/accordion"},{label:"Beschreibung",permalink:"/docs/tags/beschreibung"},{label:"Spezifikation",permalink:"/docs/tags/spezifikation"},{label:"Beispiele",permalink:"/docs/tags/beispiele"}],version:"current",frontMatter:{title:"Accordion",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die Accordion-Komponente.",tags:["Accordion","Beschreibung","Spezifikation","Beispiele"]},sidebar:"tutorialSidebar",previous:{title:"Abbr",permalink:"/docs/components/abbr"},next:{title:"Alert",permalink:"/docs/components/alert"}},m={},p=[{value:"Beispiele",id:"beispiele",level:2},{value:"Einfache Accordions",id:"einfache-accordions",level:3},{value:"Accordions mit \xdcberschriften",id:"accordions-mit-\xfcberschriften",level:3},{value:"Accordions mit Header-Slot",id:"accordions-mit-header-slot",level:3}],k={toc:p},g="wrapper";function b(e){let{components:t,...n}=e;return(0,i.kt)(g,(0,a.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(l,{mdxType:"Readme"}),(0,i.kt)("h2",{id:"beispiele"},"Beispiele"),(0,i.kt)("h3",{id:"einfache-accordions"},"Einfache Accordions"),(0,i.kt)(d._,{component:"accordion",sample:"basic",mdxType:"Configurator"}),(0,i.kt)("h3",{id:"accordions-mit-\xfcberschriften"},"Accordions mit \xdcberschriften"),(0,i.kt)(d._,{component:"accordion",sample:"headlines",mdxType:"Configurator"}),(0,i.kt)("h3",{id:"accordions-mit-header-slot"},"Accordions mit Header-Slot"),(0,i.kt)(d._,{component:"accordion",sample:"header",mdxType:"Configurator"}))}b.isMDXComponent=!0}}]);