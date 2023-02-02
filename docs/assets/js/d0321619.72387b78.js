"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[1842],{9613:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>c});var a=n(9496);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),u=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=u(e.components);return a.createElement(d.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,d=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),p=u(n),k=r,c=p["".concat(d,".").concat(k)]||p[k]||m[k]||i;return n?a.createElement(c,l(l({ref:t},s),{},{components:n})):a.createElement(c,l({ref:t},s))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=k;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o[p]="string"==typeof e?e:r,l[1]=o;for(var u=2;u<i;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},816:(e,t,n)=>{n.d(t,{_:()=>d});var a=n(8556),r=n(9496);const i=function(e,t,n,a,r){return void 0===r&&(r="editor"),`${e}&module=${a}&initialpath=%23%2F${t}%2F${n}&view=${r}`},l={width:"100%",height:"500px",border:"0",overflow:"hidden"},o=e=>{let{url:t}=e;return r.createElement("div",{className:"m-2"},r.createElement("iframe",{src:t,style:l,title:"kolibri-public-ui-code-samples",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}),r.createElement(a.Nv,{_href:t,_label:"",_target:"codesandbox"},r.createElement("img",{alt:"CodeSandbox-Schalter",src:"https://codesandbox.io/static/img/play-codesandbox.svg"})))},d=e=>{let{component:t,sample:n}=e;const[l,d]=(0,r.useState)("Preview"),u="https://codesandbox.io/embed/kolibri-public-ui-react-samples-w5u37c?fontsize=14&hidenavigation=1&autoresize=1&theme=dark",s=`%2Fsrc%2Fsamples%2F${t}%2F${n}`,p={angular:`${s}.html`,react:`${s}.tsx`,vue:`${s}.vue`,webcomponent:`${s}.html`},m={onSelect:(e,t)=>{switch(t){case 1:d((()=>"Angular"));break;case 2:d((()=>"React"));break;case 3:d((()=>"Vue"));break;case 4:d((()=>"Web Component"));break;default:d((()=>"Preview"))}}};return r.createElement(a.UD,{_ariaLabel:"Code-Beispiel",_on:m,_tabs:[{_label:"Vorschau"},{_disabled:!0,_label:"Angular"},{_label:"React"},{_disabled:!0,_label:"Vue"},{_disabled:!0,_label:"Web Component"}]},r.createElement("div",null,"Preview"===l&&r.createElement(o,{url:i(u,t,n,p.react,"preview")})),r.createElement("div",null,"Angular"===l&&r.createElement(o,{url:i(u,t,n,p.angular)})),r.createElement("div",null,"React"===l&&r.createElement(o,{url:i(u,t,n,p.react)})),r.createElement("div",null,"Vue"===l&&r.createElement(o,{url:i(u,t,n,p.vue)})),r.createElement("div",null,"Web Component"===l&&r.createElement(o,{url:i(u,t,n,p.webcomponent)})))}},8080:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>u,default:()=>c,frontMatter:()=>d,metadata:()=>s,toc:()=>m});var a=n(5882),r=(n(9496),n(9613));const i={toc:[{value:"Konstruktion",id:"konstruktion",level:2},{value:"Code",id:"code",level:3},{value:"Beispiel",id:"beispiel",level:3},{value:"Verwendung",id:"verwendung",level:2},{value:"Beschriftung",id:"beschriftung",level:3},{value:"Button mit Icon",id:"button-mit-icon",level:3},{value:"Nur Icon im Button anzeigen",id:"nur-icon-im-button-anzeigen",level:3},{value:"Style angeben",id:"style-angeben",level:3},{value:"Best practices",id:"best-practices",level:3},{value:"Barrierefreiheit",id:"barrierefreiheit",level:2},{value:"Tastatursteuerung",id:"tastatursteuerung",level:3},{value:"Links und Referenzen",id:"links-und-referenzen",level:2},{value:"Properties",id:"properties",level:2},{value:"Dependencies",id:"dependencies",level:2},{value:"Used by",id:"used-by",level:3},{value:"Depends on",id:"depends-on",level:3},{value:"Graph",id:"graph",level:3}]};function l(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Buttons")," dienen dazu, Benutzer:innen Auswahlm\xf6glichkeiten f\xfcr Aktionen anzuzeigen und diese in einer klaren Hierarchie anzuordnen. Sie helfen Nutzer:innen, die wichtigsten Aktionen einer Seite oder innerhalb eines Viewports zu finden und erm\xf6glichen es ihm, diese Aktionen auszuf\xfchren. Die Beschriftung des Buttons wird verwendet, um Nutzer:innen klar anzuzeigen, welche Aktion ausgel\xf6st wird. Buttons erm\xf6glichen es Nutzer:innen, eine \xc4nderung zu best\xe4tigen, Schritte in einer Aufgabe abzuschlie\xdfen oder Entscheidungen zu treffen."),(0,r.kt)("h2",{id:"konstruktion"},"Konstruktion"),(0,r.kt)("h3",{id:"code"},"Code"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'<kol-button _label="Primary" _variant="primary"></kol-button>\n<kol-button _label="Secondary" _variant="secondary"></kol-button>\n<kol-button _label="Normal" _variant="normal"></kol-button>\n<kol-button _label="Secondary" _variant="danger"></kol-button>\n<kol-button _label="Ghost" _variant="ghost"></kol-button>\n<kol-button _label="Custom" _variant="custom" _custom-class="myClass"></kol-button>\n')),(0,r.kt)("h3",{id:"beispiel"},"Beispiel"),(0,r.kt)("p",null,"Default"),(0,r.kt)("div",{class:"flex gap-2"},(0,r.kt)("kol-button",{_label:"Primary",_variant:"primary"}),(0,r.kt)("kol-button",{_label:"Secondary",_variant:"secondary"}),(0,r.kt)("kol-button",{_label:"Normal",_variant:"normal"}),(0,r.kt)("kol-button",{_label:"Danger",_variant:"danger"}),(0,r.kt)("kol-button",{_label:"Ghost",_variant:"ghost"}),(0,r.kt)("kol-button",{_label:"Custom",_variant:"custom","_custom-class":"myClass"})),(0,r.kt)("p",null,"Disabled"),(0,r.kt)("div",{class:"flex gap-2"},(0,r.kt)("kol-button",{_label:"Primary",_variant:"primary",_disabled:!0}),(0,r.kt)("kol-button",{_label:"Secondary",_variant:"secondary",_disabled:!0}),(0,r.kt)("kol-button",{_label:"Normal",_variant:"normal",_disabled:!0}),(0,r.kt)("kol-button",{_label:"Danger",_variant:"danger",_disabled:!0}),(0,r.kt)("kol-button",{_label:"Ghost",_variant:"ghost",_disabled:!0}),(0,r.kt)("kol-button",{_label:"Custom",_variant:"custom","_custom-class":"myClass",_disabled:!0})),(0,r.kt)("h2",{id:"verwendung"},"Verwendung"),(0,r.kt)("h3",{id:"beschriftung"},"Beschriftung"),(0,r.kt)("p",null,"F\xfcr die eindeutige Beschriftung des Buttons nutzen Sie das Attribut ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"_label")),".\n",(0,r.kt)("inlineCode",{parentName:"p"},'_label="Buttonbeschriftung"')),(0,r.kt)("h3",{id:"button-mit-icon"},"Button mit Icon"),(0,r.kt)("p",null,"\xdcber das Attribut ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"_icon"))," wird eine JSON-Struktur \xfcbergeben, mit der alle Paramater zu Anzeige des Icon im Button festgelegt wird."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"_icon =\n    \"{'top': {'style': {'font-size': '200%', 'transform': 'rotate(45deg)'}, 'icon': 'fa-solid fa-arrow-up'},'right': {'icon': 'fa-solid fa-arrow-right'},'bottom': {'icon': 'fa-solid fa-arrow-down'},'left': {'icon': 'fa-solid fa-arrow-left'}}\";\n")),(0,r.kt)("p",null,"Es ist m\xf6glich, ein Icon an jeder Position des Button anzuzeigen, sowie die Ausgabe mehrerer Icons im Button. Jedes Icon erh\xe4lt in der JSON-Struktur einen eigenen Abschnitt, in dem seine Properties festgelegt werden."),(0,r.kt)("p",null,"Jeder Abschnitt beginnt mit der gew\xfcnschten Position des Icon im Button:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"top"),(0,r.kt)("li",{parentName:"ul"},"bottom"),(0,r.kt)("li",{parentName:"ul"},"right"),(0,r.kt)("li",{parentName:"ul"},"left")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"\"{'top': {weitere Properties}\";\n")),(0,r.kt)("p",null,"Als weitere Properties zur Konfiguration des Icon stehen zur Verf\xfcgung:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"icon: legt das anzuzeigende Icon aus der Icofont-Bibliothek fest.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"\"{'top': {'icon':'fa-solid fa-arrow-up'}\";\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"style: \xfcbergibt ggfls. eigene CSS-Stylinganweisungen an das Icon, wie z.B. font-size, transform oder color.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"\"{'top': {'style': {'font-size':'200%','color':'#040404','transform':'rotate(45deg)'},'icon':'fa-solid fa-arrow-up'}\";\n")),(0,r.kt)("p",null,"Eine \xdcbersicht \xfcber die zur Verf\xfcgung stehenden Icons in KoliBri finden Sie ",(0,r.kt)("a",{parentName:"p",href:"https://icofont.com/icons"},"hier")),(0,r.kt)("h3",{id:"nur-icon-im-button-anzeigen"},"Nur Icon im Button anzeigen"),(0,r.kt)("p",null,"In der ",(0,r.kt)("strong",{parentName:"p"},"Button"),"-Komponente kann auf die Beschriftung auch verzichtet werden. Hierzu wird das Attribut ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"_iconOnly"))," gesetzt."),(0,r.kt)("p",null,"Beachten Sie, dass das Attribut ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"_label"))," auch dann gesetzt werden muss, wenn nur ein Icon angezeigt werden soll. Die Komponente gibt in diesem Fall drei Punkte (...) als Platzhalter aus."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},'_icon-only="true"')),(0,r.kt)("h3",{id:"style-angeben"},"Style angeben"),(0,r.kt)("p",null,"Die Button-Komponente kann als prim\xe4rer oder sekund\xe4rer Button ausgegeben werden. Zur Steuerung verwenden Sie das Attribut ",(0,r.kt)("inlineCode",{parentName:"p"},'_variant="primary/secondary/normal/danger/ghost/custom"'),". Als Default-Wert wird ein Button als ",(0,r.kt)("strong",{parentName:"p"},"primary")," gerendert.",(0,r.kt)("br",null)),(0,r.kt)("p",null,"Bei Verwendung des Attribut ",(0,r.kt)("strong",{parentName:"p"},"_",'variant="custom"')," kann der Entwickler f\xfcr den Button eigene Styles realisieren. Verpflichtend ist in diesem Fall das Setzen des Attribut ",(0,r.kt)("strong",{parentName:"p"},"_","custom-class"),", damit das Button-Element im Shadow-Dom mittels CSS selektiert werden kann."),(0,r.kt)("h3",{id:"best-practices"},"Best practices"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Verwenden Sie eine prim\xe4re Schaltfl\xe4che f\xfcr die n\xe4chstbeste Aktion. Verbleibende Calls-to-Action sollten als sekund\xe4re Schaltfl\xe4che dargestellt werden."),(0,r.kt)("li",{parentName:"ul"},"Verwenden Sie Schaltfl\xe4chen an einheitlichen Stellen in der Benutzeroberfl\xe4che, um die Benutzererfahrung zu verbessern."),(0,r.kt)("li",{parentName:"ul"},"Verwenden Sie nur eine prim\xe4re Schaltfl\xe4che je Viewport. Auf der gesamten Seite kann ein Button-Style beliebig oft auftreten."),(0,r.kt)("li",{parentName:"ul"},"Die Beschriftung des Button muss die Aktion beschreiben, die die Schaltfl\xe4che ausf\xfchrt. Sie sollte ein Verb enthalten (z.B. Speichern). Verwenden Sie pr\xe4gnante, spezifische, selbsterkl\xe4rende Beschriftungen."),(0,r.kt)("li",{parentName:"ul"},'Schaltfl\xe4chenbeschriftungen sollten immer dann auch ein Nomen enthalten, wenn es Raum f\xfcr Interpretationen dar\xfcber gibt, wof\xfcr das Verb zust\xe4ndig ist. Verwenden Sie keine generischen Bezeichnungen wie "OK", insbesondere nicht im Fehlerfall. Fehler sind nie "OK".'),(0,r.kt)("li",{parentName:"ul"},"Wenn Sie mehrere Buttons kombinieren oder anordnen m\xf6chten, verwenden Sie die ",(0,r.kt)("strong",{parentName:"li"},"ButtonGroup"),"-Komponente."),(0,r.kt)("li",{parentName:"ul"},'Verwenden Sie nicht mehrere Buttons im Style "prim\xe4r" in einer ',(0,r.kt)("strong",{parentName:"li"},"ButtonGroup"),"."),(0,r.kt)("li",{parentName:"ul"},"Verwenden Sie Buttons nicht als Link oder als Navigationselement.")),(0,r.kt)("h2",{id:"barrierefreiheit"},"Barrierefreiheit"),(0,r.kt)("p",null,"F\xfcr Menschen mit einem eingeschr\xe4nkten Sichtfeld ist die Positionierung des ",(0,r.kt)("strong",{parentName:"p"},"Icons")," im Button links von der Beschriftung optimal (",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},'_icon-align="left"')),", bzw. kein ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"_icon-align")),")."),(0,r.kt)("p",null,"Ebenfalls aus Gr\xfcnden optimaler Barrierefreiheit verzichtet KoliBri bei der ",(0,r.kt)("strong",{parentName:"p"},"Button"),"-Komponente auf den Status ",(0,r.kt)("strong",{parentName:"p"},"disabled"),"."),(0,r.kt)("p",null,"Probleme mit Disabled-Status"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Darstellung Kontraste"),(0,r.kt)("li",{parentName:"ul"},"M\xf6glichkeit des Nutzerfeedbacks")),(0,r.kt)("h3",{id:"tastatursteuerung"},"Tastatursteuerung"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Taste"),(0,r.kt)("th",{parentName:"tr",align:null},"Funktion"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Tab")),(0,r.kt)("td",{parentName:"tr",align:null},"Springt den einzelnen Button an und fokussiert ihn.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Enter")),(0,r.kt)("td",{parentName:"tr",align:null},"\xd6ffnet den Link des fokussierten Button oder f\xfchrt dessen onClick-Methode aus.")))),(0,r.kt)("h2",{id:"links-und-referenzen"},"Links und Referenzen"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.w3.org/TR/wai-aria-practices/#button"},"https://www.w3.org/TR/wai-aria-practices/#button"))),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Attribute"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_accessKey")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_access-key")),(0,r.kt)("td",{parentName:"tr",align:null},"Gibt an, mit welcher Tastenkombination man den Button ausl\xf6sen oder fokussieren kann."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string \\| undefined")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_ariaControls")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_aria-controls")),(0,r.kt)("td",{parentName:"tr",align:null},"Gibt an, welche Elemente kontrolliert werden.  (",(0,r.kt)("a",{parentName:"td",href:"https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-controls"},"https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-controls"),")"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string \\| undefined")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_ariaCurrent")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_aria-current")),(0,r.kt)("td",{parentName:"tr",align:null},"Gibt an, welchen aktuellen Auswahlstatus der Button hat. (",(0,r.kt)("a",{parentName:"td",href:"https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-current"},"https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-current"),")"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"date" \\| "location" \\| "page" \\| "step" \\| "time" \\| boolean \\| undefined')),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_ariaExpanded")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_aria-expanded")),(0,r.kt)("td",{parentName:"tr",align:null},"Gibt an, ob durch den Button etwas aufgeklappt wurde. (",(0,r.kt)("a",{parentName:"td",href:"https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-expanded"},"https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-expanded"),")"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"boolean \\| undefined")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_ariaLabel")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_aria-label")),(0,r.kt)("td",{parentName:"tr",align:null},"Gibt einen beschreibenden Text des Buttons an.  (",(0,r.kt)("a",{parentName:"td",href:"https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-label"},"https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-label"),")"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string \\| undefined")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"''"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_ariaSelected")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_aria-selected")),(0,r.kt)("td",{parentName:"tr",align:null},"Gibt an, ob Element ausgew\xe4hlt ist (role=tab). (",(0,r.kt)("a",{parentName:"td",href:"https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-selected"},"https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-selected"),")"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"boolean \\| undefined")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_customClass")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_custom-class")),(0,r.kt)("td",{parentName:"tr",align:null},'Gibt an, welche Custom-Class \xfcbergeben werden soll, wenn _variant="custom" gesetzt ist.'),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string \\| undefined")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_disabled")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_disabled")),(0,r.kt)("td",{parentName:"tr",align:null},"Gibt an, ob der Button deaktiviert ist."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"boolean \\| undefined")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_icon")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_icon")),(0,r.kt)("td",{parentName:"tr",align:null},"Gibt den Class-Identifier eines Icons eine eingebunden Icofont an. (z.B. ",(0,r.kt)("a",{parentName:"td",href:"https://icofont.com/"},"https://icofont.com/"),")"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string \\| undefined \\| { top: string \\| KoliBriCustomIcon; right?: string \\| KoliBriCustomIcon \\| undefined; bottom?: string \\| KoliBriCustomIcon \\| undefined; left?: string \\| KoliBriCustomIcon \\| undefined; } \\| { top?: string \\| KoliBriCustomIcon \\| undefined; right: string \\| KoliBriCustomIcon; bottom?: string \\| KoliBriCustomIcon \\| undefined; left?: string \\| KoliBriCustomIcon \\| undefined; } \\| { top?: string \\| KoliBriCustomIcon \\| undefined; right?: string \\| KoliBriCustomIcon \\| undefined; bottom: string \\| KoliBriCustomIcon; left?: string \\| KoliBriCustomIcon \\| undefined; } \\| { top?: string \\| KoliBriCustomIcon \\| undefined; right?: string \\| KoliBriCustomIcon \\| undefined; bottom?: string \\| KoliBriCustomIcon \\| undefined; left: string \\| KoliBriCustomIcon; }")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_iconAlign")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_icon-align")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{class:"text-red-500"},(0,r.kt)("strong",{parentName:"td"},"[DEPRECATED]"))," ",(0,r.kt)("br",null),(0,r.kt)("br",null),"Gibt an, ob das Icon links oder rechts dargestellt werden soll."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"bottom" \\| "left" \\| "right" \\| "top" \\| undefined')),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"'left'"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_iconOnly")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_icon-only")),(0,r.kt)("td",{parentName:"tr",align:null},"Gibt an, ob nur das Icon angezeigt wird."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"boolean \\| undefined")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_id")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_id")),(0,r.kt)("td",{parentName:"tr",align:null},"Gibt die ID der Schaltfl\xe4che an. (Selection, Testing)"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string \\| undefined")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_label")," ",(0,r.kt)("em",{parentName:"td"},"(required)")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_label")),(0,r.kt)("td",{parentName:"tr",align:null},"Gibt den Label f\xfcr die Beschriftung der Schaltfl\xe4che an."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_on")),(0,r.kt)("td",{parentName:"tr",align:null},"--"),(0,r.kt)("td",{parentName:"tr",align:null},"Gibt die EventCallback-Funktionen f\xfcr die Button-Events an."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"undefined \\| { onClick?: EventValueCallback<MouseEvent, unknown> \\| undefined; onMouseDown?: EventCallback<MouseEvent> \\| undefined; }")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_role")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_role")),(0,r.kt)("td",{parentName:"tr",align:null},"Gibt an, welche Role der Schalter hat."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"tab" \\| undefined')),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_tabIndex")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_tab-index")),(0,r.kt)("td",{parentName:"tr",align:null},"Gibt an, welchen Tab-Index der Button hat. (",(0,r.kt)("a",{parentName:"td",href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex"},"https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex"),")"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"number \\| undefined")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_tooltipAlign")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_tooltip-align")),(0,r.kt)("td",{parentName:"tr",align:null},"Gibt an, ob der Tooltip oben, rechts, unten oder links angezeigt werden soll."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"bottom" \\| "left" \\| "right" \\| "top" \\| undefined')),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"'top'"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_type")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_type")),(0,r.kt)("td",{parentName:"tr",align:null},"Gibt an, welche Typ der Button hat."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"button" \\| "reset" \\| "submit" \\| undefined')),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"'button'"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_value")),(0,r.kt)("td",{parentName:"tr",align:null},"--"),(0,r.kt)("td",{parentName:"tr",align:null},"Gibt einen Wert an, den der Schalter bei einem Klick zur\xfcckgibt."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"unknown")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_variant")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_variant")),(0,r.kt)("td",{parentName:"tr",align:null},"Gibt an, welche Auspr\xe4gung der Button hat."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"custom" \\| "danger" \\| "ghost" \\| "normal" \\| "primary" \\| "secondary" \\| undefined')),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"'normal'"))))),(0,r.kt)("h2",{id:"dependencies"},"Dependencies"),(0,r.kt)("h3",{id:"used-by"},"Used by"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"./nav"},"kol-nav")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"./pagination"},"kol-pagination")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"./table"},"kol-table"))),(0,r.kt)("h3",{id:"depends-on"},"Depends on"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"kol-button-wc")),(0,r.kt)("h3",{id:"graph"},"Graph"),(0,r.kt)("mermaid",{value:"graph TD;\n  kol-button --\x3e kol-button-wc\n  kol-button-wc --\x3e kol-span-wc\n  kol-button-wc --\x3e kol-tooltip\n  kol-span-wc --\x3e kol-icon\n  kol-tooltip --\x3e kol-badge\n  kol-badge --\x3e kol-span-wc\n  kol-badge --\x3e kol-button-wc\n  kol-nav --\x3e kol-button\n  kol-pagination --\x3e kol-button\n  kol-table --\x3e kol-button\n  style kol-button fill:#f9f,stroke:#333,stroke-width:4px"}),(0,r.kt)("hr",null))}l.isMDXComponent=!0;var o=n(816);const d={title:"Button",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die Button-Komponente.",tags:["Button","Beschreibung","Spezifikation","Beispiele"]},u=void 0,s={unversionedId:"components/button",id:"components/button",title:"Button",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die Button-Komponente.",source:"@site/docs/30-components/button.mdx",sourceDirName:"30-components",slug:"/components/button",permalink:"/docs/components/button",draft:!1,tags:[{label:"Button",permalink:"/docs/tags/button"},{label:"Beschreibung",permalink:"/docs/tags/beschreibung"},{label:"Spezifikation",permalink:"/docs/tags/spezifikation"},{label:"Beispiele",permalink:"/docs/tags/beispiele"}],version:"current",frontMatter:{title:"Button",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die Button-Komponente.",tags:["Button","Beschreibung","Spezifikation","Beispiele"]},sidebar:"tutorialSidebar",previous:{title:"ButtonLink",permalink:"/docs/components/button-link"},next:{title:"Card",permalink:"/docs/components/card"}},p={},m=[{value:"Beispiele",id:"beispiele",level:2},{value:"Buttons",id:"buttons",level:3},{value:"Icon-Buttons",id:"icon-buttons",level:3},{value:"Button mit Icons",id:"button-mit-icons",level:3},{value:"Buttons mit einheitlicher Breite",id:"buttons-mit-einheitlicher-breite",level:3}],k={toc:m};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(l,{mdxType:"Readme"}),(0,r.kt)("h2",{id:"beispiele"},"Beispiele"),(0,r.kt)("h3",{id:"buttons"},"Buttons"),(0,r.kt)(o._,{component:"button",sample:"basic",mdxType:"Configurator"}),(0,r.kt)("h3",{id:"icon-buttons"},"Icon-Buttons"),(0,r.kt)(o._,{component:"button",sample:"icon-only",mdxType:"Configurator"}),(0,r.kt)("h3",{id:"button-mit-icons"},"Button mit Icons"),(0,r.kt)(o._,{component:"button",sample:"icons",mdxType:"Configurator"}),(0,r.kt)("h3",{id:"buttons-mit-einheitlicher-breite"},"Buttons mit einheitlicher Breite"),(0,r.kt)(o._,{component:"button",sample:"width",mdxType:"Configurator"}))}c.isMDXComponent=!0}}]);