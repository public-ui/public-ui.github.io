"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[1393],{49613:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>c});var a=n(59496);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),s=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(d.Provider,{value:t},e.children)},p="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,d=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=s(n),m=r,c=p["".concat(d,".").concat(m)]||p[m]||k[m]||i;return n?a.createElement(c,l(l({ref:t},u),{},{components:n})):a.createElement(c,l({ref:t},u))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o[p]="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},74308:(e,t,n)=>{n.d(t,{_:()=>d});var a=n(31861),r=n(59496);const i=function(e,t,n,a,r){return void 0===r&&(r="editor"),`${e}&module=${a}&initialpath=%23%2F${t}%2F${n}&view=${r}`},l={width:"100%",height:"500px",border:"0",overflow:"hidden"},o=e=>{let{url:t}=e;return r.createElement("div",{className:"m-2"},r.createElement("iframe",{src:t,style:l,title:"kolibri-public-ui-code-samples",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}),r.createElement(a.Nv,{_href:t,_label:"",_target:"codesandbox"},r.createElement("img",{alt:"CodeSandbox-Schalter",src:"https://codesandbox.io/static/img/play-codesandbox.svg"})))},d=e=>{let{component:t,sample:n}=e;const[l,d]=(0,r.useState)("Preview"),s="https://codesandbox.io/embed/kolibri-public-ui-react-samples-w5u37c?fontsize=14&hidenavigation=1&autoresize=1&theme=dark",u=`%2Fsrc%2Fsamples%2F${t}%2F${n}`,p={angular:`${u}.html`,react:`${u}.tsx`,vue:`${u}.vue`,webcomponent:`${u}.html`},k={onSelect:(e,t)=>{switch(t){case 1:d((()=>"Angular"));break;case 2:d((()=>"React"));break;case 3:d((()=>"Vue"));break;case 4:d((()=>"Web Component"));break;default:d((()=>"Preview"))}}};return r.createElement(a.UD,{className:"w-full",_ariaLabel:"Code-Beispiel",_on:k,_tabs:[{_label:"Vorschau"},{_disabled:!0,_label:"Angular"},{_label:"React"},{_disabled:!0,_label:"Vue"},{_disabled:!0,_label:"Web Component"}]},r.createElement("div",null,"Preview"===l&&r.createElement(o,{url:i(s,t,n,p.react,"preview")})),r.createElement("div",null,"Angular"===l&&r.createElement(o,{url:i(s,t,n,p.angular)})),r.createElement("div",null,"React"===l&&r.createElement(o,{url:i(s,t,n,p.react)})),r.createElement("div",null,"Vue"===l&&r.createElement(o,{url:i(s,t,n,p.vue)})),r.createElement("div",null,"Web Component"===l&&r.createElement(o,{url:i(s,t,n,p.webcomponent)})))}},43965:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>c,frontMatter:()=>d,metadata:()=>u,toc:()=>k});var a=n(15882),r=(n(59496),n(49613));const i={toc:[{value:"Konstruktion",id:"konstruktion",level:2},{value:"Code",id:"code",level:3},{value:"Beispiel",id:"beispiel",level:3},{value:"Verwendung",id:"verwendung",level:2},{value:"Definition der Registerkarten",id:"definition-der-registerkarten",level:3},{value:"Registerkarte ausw\xe4hlen",id:"registerkarte-ausw\xe4hlen",level:3},{value:"Registerkarte deaktivieren",id:"registerkarte-deaktivieren",level:3},{value:"Close-Icon im Registekartenheader",id:"close-icon-im-registekartenheader",level:3},{value:"Best practices",id:"best-practices",level:3},{value:"Anwendungsf\xe4lle",id:"anwendungsf\xe4lle",level:3},{value:"Barrierefreiheit",id:"barrierefreiheit",level:2},{value:"Tastatursteuerung",id:"tastatursteuerung",level:3},{value:"Properties",id:"properties",level:2},{value:"CSS Custom Properties",id:"css-custom-properties",level:2},{value:"Dependencies",id:"dependencies",level:2},{value:"Depends on",id:"depends-on",level:3},{value:"Graph",id:"graph",level:3}]};function l(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Die ",(0,r.kt)("strong",{parentName:"p"},"Tabs"),"-Komponente wird verwendet, um verwandte Inhalte auf derselben Seite zu organisieren und zwischen ihnen zu navigieren. Tabs sorgen daf\xfcr, dass gro\xdfe Inhaltsmengen f\xfcr Nutzer:innen leichter organisiert werden k\xf6nnen. Tabs sind in Registerkartenleisten angeordnet, die als Registerkartengruppen bezeichnet werden, wobei die Registerkartenbeschriftung den Nutzer:innen einen Hinweis darauf gibt, welcher Inhalt angezeigt wird, wenn die Registerkarte ausgew\xe4hlt wird."),(0,r.kt)("h2",{id:"konstruktion"},"Konstruktion"),(0,r.kt)("p",null,"Nach dem Laden der Komponente wird die erste Registerkarte links automatisch optisch als ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"aktiv"))," hervorgehoben. Jede Registerkarte \xfcbernimmt den Status ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"aktiv"))," nach dem Anklicken. Der Status ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"aktiv"))," kann mit dem Attribut ",(0,r.kt)("inlineCode",{parentName:"p"},"_selected (Index der Registerkarte)")," auch manuell gesetzt werden,\num z.B. die dritte anstelle der ersten Registerkarte aktiv zu setzen.\nDie einzelnen Inhalte der Registerkarte werden in einem eigenen ",(0,r.kt)("inlineCode",{parentName:"p"},"HTMLDivElement")," als ",(0,r.kt)("inlineCode",{parentName:"p"},"<div>Inhalt der Registerkarte</div>")," innerhalb von ",(0,r.kt)("inlineCode",{parentName:"p"},"<kol-tabs></kol-tabs>")," notiert."),(0,r.kt)("p",null,"Die Zuordnung der JSON-Objekte im Attribut ",(0,r.kt)("strong",{parentName:"p"},"_","tabs")," zu den Div-Elementen erfolgt automatisch."),(0,r.kt)("p",null,"Typischer Aufbau einer ",(0,r.kt)("strong",{parentName:"p"},"Tab"),"-Komponente:"),(0,r.kt)("h3",{id:"code"},"Code"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<kol-tabs _selected="0" _tabs=\'[{"_label":"Tab 1"},{"_label":"Tab 2", "_on": {"onClose": true}},{"_label":"Tab 3"}]\'>\n    <div>Inhalt von Tab 1</div>\n    <div>Inhalt von Tab 2</div>\n    <div>Inhalt von Tab 3</div>\n</kol-tabs>\n')),(0,r.kt)("h3",{id:"beispiel"},"Beispiel"),(0,r.kt)("kol-tabs",{_selected:"0",_tabs:'[{"_label":"Tab 1","_icon":"home"},{"_label":"Tab 2", "_on": {"onClose": true}},{"_label":"Tab 3"}]'},(0,r.kt)("div",null,"Inhalt von Tab 1"),(0,r.kt)("div",null,"Inhalt von Tab 2"),(0,r.kt)("div",null,"Inhalt von Tab 3")),(0,r.kt)("h2",{id:"verwendung"},"Verwendung"),(0,r.kt)("h3",{id:"definition-der-registerkarten"},"Definition der Registerkarten"),(0,r.kt)("p",null,"Die Registerkarten werden als JSON-Struktur an das Attribut ",(0,r.kt)("inlineCode",{parentName:"p"},"_tabs")," \xfcbergeben. Die Struktur ist als Wert-/Parameter-Paar aufgebaut:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},"[ { _label: 'Tab 1', }, { _label: 'Tab 2', _disabled: true, }, { _label: 'Tab 3', _icon: 'home', _on: { onClose: true }, }, ];\n")),(0,r.kt)("h3",{id:"registerkarte-ausw\xe4hlen"},"Registerkarte ausw\xe4hlen"),(0,r.kt)("p",null,"Standardm\xe4\xdfig wird die erste Registerkarte von links aus als ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"ausgew\xe4hlt"))," angezeigt. Verwenden Sie das Attribut ",(0,r.kt)("inlineCode",{parentName:"p"},"_selected")," und als Wert die ",(0,r.kt)("strong",{parentName:"p"},"interne ID"),", um eine andere Registerkarte als ausgew\xe4hlt zu setzen. Besitzt die ",(0,r.kt)("strong",{parentName:"p"},"Tabs"),"-Komponente beispielsweise drei Tabs und soll das zweite Tab ausgew\xe4hlt werden, setzen Sie ",(0,r.kt)("strong",{parentName:"p"},"1")," als Wert f\xfcr ",(0,r.kt)("inlineCode",{parentName:"p"},"_selected")," ein, da die ID immer von 0 aus hochgez\xe4hlt wird."),(0,r.kt)("h3",{id:"registerkarte-deaktivieren"},"Registerkarte deaktivieren"),(0,r.kt)("p",null,"Um eine Registerkarte zu deaktivieren, verwenden Sie das Attribut ",(0,r.kt)("inlineCode",{parentName:"p"},"_disabled")," und den Wert ",(0,r.kt)("strong",{parentName:"p"},"true"),"."),(0,r.kt)("h3",{id:"close-icon-im-registekartenheader"},"Close-Icon im Registekartenheader"),(0,r.kt)("p",null,"Wenn Sie eine schlie\xdfbare Registerkarte ben\xf6tigen, k\xf6nnen Sie dies \xfcber das Attribut ",(0,r.kt)("inlineCode",{parentName:"p"},"_on")," und den Wert ",(0,r.kt)("strong",{parentName:"p"},'"onClose":true')," realisieren."),(0,r.kt)("h3",{id:"best-practices"},"Best practices"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Verwenden Sie Registerkarten, um verwandte Inhalte so zu organisieren und zu gruppieren, dass der Benutzer keine Seite verlassen muss."),(0,r.kt)("li",{parentName:"ul"},"Registerkarten sollten in einer einzelnen, scrollbaren (falls erforderlich) Zeile \xfcber dem Inhalt positioniert werden, auf den sie sich beziehen."),(0,r.kt)("li",{parentName:"ul"},"Verwenden Sie die Registerkartenbezeichnung, um den Inhalt dieser Registerkarte klar und pr\xe4gnant zu beschreiben und zwischen den verschiedenen Abschnitten zu unterscheiden."),(0,r.kt)("li",{parentName:"ul"},"Es sollte immer nur eine Registerkarte aktiv sein."),(0,r.kt)("li",{parentName:"ul"},"Verwenden Sie keine Registerkarten, um eine Sequenz oder einen Verlauf von Inhalten zu erstellen, die der Benutzer in einer bestimmten Reihenfolge lesen soll."),(0,r.kt)("li",{parentName:"ul"},"Verwenden Sie keine Registerkarten zum Vergleichen von Inhalten (z. B. unterschiedliche Spezifikationen)."),(0,r.kt)("li",{parentName:"ul"},"Verwenden Sie keine Registerkarten, um Benutzer zu einer anderen Seite zu navigieren."),(0,r.kt)("li",{parentName:"ul"},"Ber\xfccksichtigen Sie die Anzahl der Registerkarten, die Sie in die Registerkartengruppe aufnehmen. Wenn Sie das Gef\xfchl haben, dass die Zahl zu gro\xdf wird, sollten Sie den Inhalt weiter aufteilen oder ein anderes Navigationsmuster/eine andere Komponente verwenden.")),(0,r.kt)("h3",{id:"anwendungsf\xe4lle"},"Anwendungsf\xe4lle"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Verwenden Sie Registerkarten, um verwandte Informationen auf einer Landingpage zu organisieren."),(0,r.kt)("li",{parentName:"ul"},"\xdcber Registerkarten k\xf6nnen Sie z.B. Dienstleistungen oder Vorteile in verschiedene Kategorien einteilen."),(0,r.kt)("li",{parentName:"ul"},"Verwenden Sie Registerkarten, um Benutzerprofile in verschiedene Abschnitte zu gliedern (z. B. pers\xf6nliche Informationen, Termine, aktive Services)."),(0,r.kt)("li",{parentName:"ul"},"Verwenden Sie Registerkarten, um FAQs in verschiedene Kategorien zu unterteilen.")),(0,r.kt)("h2",{id:"barrierefreiheit"},"Barrierefreiheit"),(0,r.kt)("p",null,"Ausgew\xe4hlte Tabs werden beim Anspringen mit der ",(0,r.kt)("strong",{parentName:"p"},"Tab-Taste")," mit einem deutlichen Focus-Rahmen umgeben. Die einzelnen Tabs k\xf6nnen mit den Pfeiltasten ",(0,r.kt)("strong",{parentName:"p"},"links")," und ",(0,r.kt)("strong",{parentName:"p"},"rechts")," durchlaufen werden."),(0,r.kt)("p",null,"Nach Anspringen eines Tabs kann mit Hilfe der ",(0,r.kt)("strong",{parentName:"p"},"Tab-Taste")," vom Header in den Inhaltsbereich der Registerkarte gewechselt werden."),(0,r.kt)("p",null,"Unabh\xe4ngig davon ob die Tab-Schalter oben, rechts, unten oder links angeordnet sind, bleibt die Tastatursteuerung gleich. Hintergrund ist, dass das Layout bei der Nutzung eines Screenreaders keine Rolle spielt. Eine unterschiedliche Pfeil-Tastensteuerung aufgrund der Layout-Anordnung w\xfcrde daher nicht dem \xfcblichen Bedienkonzept des W3C entsprechen."),(0,r.kt)("h3",{id:"tastatursteuerung"},"Tastatursteuerung"),(0,r.kt)("p",null,"Bei der Umsetzung der Tastatursteuerung wurde sich an den Beispielen des W3C's orientiert."),(0,r.kt)("p",null,"Hier steht immer der beeintr\xe4chtige Nutzende im Vordergrund. Um m\xf6glichst effizient \xfcber die gesamte Seite/Anwendung zu navigieren, ist nur 1 Schalter aus der Tab-Serie fokussierbar. Sobald der Nutzende auf der Tab-Navigation selbst ist, werden die Pfeiltasten verwendet, um zwischen den Tabs selbst wechseln."),(0,r.kt)("p",null,"W3C-Samples:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.w3.org/WAI/ARIA/apg/example-index/tabs/tabs-manual.html"},"https://www.w3.org/WAI/ARIA/apg/example-index/tabs/tabs-manual.html")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/tab_role"},"https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/tab_role")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://dequeuniversity.com/library/aria/tabpanel"},"https://dequeuniversity.com/library/aria/tabpanel")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://design-system.service.gov.uk/components/tabs/"},"https://design-system.service.gov.uk/components/tabs/"))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Taste"),(0,r.kt)("th",{parentName:"tr",align:null},"Funktion"),(0,r.kt)("th",{parentName:"tr",align:null}),(0,r.kt)("th",{parentName:"tr",align:null}))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Tab")),(0,r.kt)("td",{parentName:"tr",align:null},"Fokussiert den ersten aktiven Tab. Auf vorhandene Close-Icons k\xf6nnen mit der Tab-Taste erreicht werden."),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"`Pfeil-Tasten (links"),(0,r.kt)("td",{parentName:"tr",align:null},"rechts)`"),(0,r.kt)("td",{parentName:"tr",align:null},"Wechselt zwischen den Tabs."),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Attribute"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_ariaLabel")," ",(0,r.kt)("em",{parentName:"td"},"(required)")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_aria-label")),(0,r.kt)("td",{parentName:"tr",align:null},"Gibt den Text an, der die Navigation von anderen Navigationen differenziert."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_on")),(0,r.kt)("td",{parentName:"tr",align:null},"--"),(0,r.kt)("td",{parentName:"tr",align:null},"Gibt die Liste der Callback-Funktionen an, die auf Events aufgerufen werden sollen."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"undefined \\| { onCreate?: EventCallback<Event> \\| { label: string; callback: EventCallback<Event>; } \\| undefined; } & { onSelect?: EventValueOrEventCallback<MouseEvent \\| KeyboardEvent \\| CustomEvent<any> \\| PointerEvent, number> \\| undefined; }")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_selected")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_selected")),(0,r.kt)("td",{parentName:"tr",align:null},"Gibt an, welches Tab selektiert sein soll."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"number \\| undefined")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"0"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_tabs")," ",(0,r.kt)("em",{parentName:"td"},"(required)")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_tabs")),(0,r.kt)("td",{parentName:"tr",align:null},"Gibt die geordnete Liste der Seitenhierarchie in Links an."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"TabButtonProps[] \\| string")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_tabsAlign")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_tabs-align")),(0,r.kt)("td",{parentName:"tr",align:null},"Gibt an, ob die Tab-Schalter entweder oben, rechts, unten oder links angeordnet sind."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"bottom" \\| "left" \\| "right" \\| "top" \\| undefined')),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"'top'"))))),(0,r.kt)("h2",{id:"css-custom-properties"},"CSS Custom Properties"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--kolibri-border-color")),(0,r.kt)("td",{parentName:"tr",align:null},"Default color of the border.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--kolibri-border-radius")),(0,r.kt)("td",{parentName:"tr",align:null},"Default radius of the border.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--kolibri-border-width")),(0,r.kt)("td",{parentName:"tr",align:null},"Default width of the border.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--kolibri-color-danger")),(0,r.kt)("td",{parentName:"tr",align:null},"Default color of the danger.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--kolibri-color-disabled")),(0,r.kt)("td",{parentName:"tr",align:null},"Default color of the disabled.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--kolibri-color-error")),(0,r.kt)("td",{parentName:"tr",align:null},"Default color of the error.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--kolibri-color-ghost")),(0,r.kt)("td",{parentName:"tr",align:null},"Default color of the ghost.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--kolibri-color-info")),(0,r.kt)("td",{parentName:"tr",align:null},"Default color of the info.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--kolibri-color-normal")),(0,r.kt)("td",{parentName:"tr",align:null},"Default color of the normal.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--kolibri-color-primary")),(0,r.kt)("td",{parentName:"tr",align:null},"Default color of the primary.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--kolibri-color-secondary")),(0,r.kt)("td",{parentName:"tr",align:null},"Default color of the secondary.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--kolibri-color-success")),(0,r.kt)("td",{parentName:"tr",align:null},"Default color of the success.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--kolibri-color-text")),(0,r.kt)("td",{parentName:"tr",align:null},"Default color of the text.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--kolibri-color-visited")),(0,r.kt)("td",{parentName:"tr",align:null},"Default color of the visited.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--kolibri-color-warning")),(0,r.kt)("td",{parentName:"tr",align:null},"Default color of the warning.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--kolibri-font-family")),(0,r.kt)("td",{parentName:"tr",align:null},"Default font family.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--kolibri-font-size")),(0,r.kt)("td",{parentName:"tr",align:null},"Default font size.")))),(0,r.kt)("h2",{id:"dependencies"},"Dependencies"),(0,r.kt)("h3",{id:"depends-on"},"Depends on"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"./button-group"},"kol-button-group-wc")),(0,r.kt)("li",{parentName:"ul"},"kol-button-wc")),(0,r.kt)("h3",{id:"graph"},"Graph"),(0,r.kt)("mermaid",{value:"graph TD;\n  kol-tabs --\x3e kol-button-group-wc\n  kol-tabs --\x3e kol-button-wc\n  kol-button-wc --\x3e kol-span-wc\n  kol-button-wc --\x3e kol-tooltip\n  kol-span-wc --\x3e kol-icon\n  kol-tooltip --\x3e kol-badge\n  kol-badge --\x3e kol-span-wc\n  kol-badge --\x3e kol-button-wc\n  style kol-tabs fill:#f9f,stroke:#333,stroke-width:4px"}),(0,r.kt)("hr",null))}l.isMDXComponent=!0;var o=n(74308);const d={title:"Tabs",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die Tabs-Komponente.",tags:["Tabs","Beschreibung","Spezifikation","Beispiele"]},s=void 0,u={unversionedId:"components/tabs",id:"components/tabs",title:"Tabs",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die Tabs-Komponente.",source:"@site/docs/30-components/tabs.mdx",sourceDirName:"30-components",slug:"/components/tabs",permalink:"/docs/components/tabs",draft:!1,tags:[{label:"Tabs",permalink:"/docs/tags/tabs"},{label:"Beschreibung",permalink:"/docs/tags/beschreibung"},{label:"Spezifikation",permalink:"/docs/tags/spezifikation"},{label:"Beispiele",permalink:"/docs/tags/beispiele"}],version:"current",frontMatter:{title:"Tabs",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die Tabs-Komponente.",tags:["Tabs","Beschreibung","Spezifikation","Beispiele"]},sidebar:"tutorialSidebar",previous:{title:"Table",permalink:"/docs/components/table"},next:{title:"Textarea",permalink:"/docs/components/textarea"}},p={},k=[{value:"Beispiele",id:"beispiele",level:2}],m={toc:k};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(l,{mdxType:"Readme"}),(0,r.kt)("h2",{id:"beispiele"},"Beispiele"),(0,r.kt)(o._,{component:"tabs",sample:"basic",mdxType:"Configurator"}))}c.isMDXComponent=!0}}]);