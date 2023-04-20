"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[1621],{17942:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>N});var a=n(50959);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),o=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=o(e.components);return a.createElement(u.Provider,{value:t},e.children)},p="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,u=e.parentName,m=d(e,["components","mdxType","originalType","parentName"]),p=o(n),k=r,N=p["".concat(u,".").concat(k)]||p[k]||s[k]||i;return n?a.createElement(N,l(l({ref:t},m),{},{components:n})):a.createElement(N,l({ref:t},m))}));function N(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=k;var d={};for(var u in t)hasOwnProperty.call(t,u)&&(d[u]=t[u]);d.originalType=e,d[p]="string"==typeof e?e:r,l[1]=d;for(var o=2;o<i;o++)l[o]=n[o];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},64717:(e,t,n)=>{n.d(t,{_:()=>u});var a=n(95982),r=n(50959);const i=function(e,t,n,a,r){return void 0===r&&(r="editor"),`${e}&module=${a}&initialpath=%23%2F${t}%2F${n}&view=${r}`},l={width:"100%",height:"500px",border:"0",overflow:"hidden"},d=e=>{let{url:t}=e;return r.createElement("div",{className:"m-2"},r.createElement("iframe",{src:t,style:l,title:"kolibri-public-ui-code-samples",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}),r.createElement(a.Nv,{_href:t,_label:"",_target:"codesandbox"},r.createElement("img",{alt:"CodeSandbox-Schalter",src:"https://codesandbox.io/static/img/play-codesandbox.svg"})))},u=e=>{let{component:t,sample:n}=e;const[l,u]=(0,r.useState)("Preview"),o="https://codesandbox.io/embed/kolibri-public-ui-react-samples-w5u37c?fontsize=14&hidenavigation=1&autoresize=1&theme=dark",m=`%2Fsrc%2Fsamples%2F${t}%2F${n}`,p={angular:`${m}.html`,react:`${m}.tsx`,vue:`${m}.vue`,webcomponent:`${m}.html`},s={onSelect:(e,t)=>{switch(t){case 1:u((()=>"Angular"));break;case 2:u((()=>"React"));break;case 3:u((()=>"Vue"));break;case 4:u((()=>"Web Component"));break;default:u((()=>"Preview"))}}};return r.createElement(a.UD,{className:"w-full",_ariaLabel:"Code-Beispiel",_on:s,_tabs:[{_label:"Vorschau"},{_disabled:!0,_label:"Angular"},{_label:"React"},{_disabled:!0,_label:"Vue"},{_disabled:!0,_label:"Web Component"}]},r.createElement("div",null,"Preview"===l&&r.createElement(d,{url:i(o,t,n,p.react,"preview")})),r.createElement("div",null,"Angular"===l&&r.createElement(d,{url:i(o,t,n,p.angular)})),r.createElement("div",null,"React"===l&&r.createElement(d,{url:i(o,t,n,p.react)})),r.createElement("div",null,"Vue"===l&&r.createElement(d,{url:i(o,t,n,p.vue)})),r.createElement("div",null,"Web Component"===l&&r.createElement(d,{url:i(o,t,n,p.webcomponent)})))}},24566:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>m,default:()=>c,frontMatter:()=>o,metadata:()=>p,toc:()=>k});var a=n(15882),r=(n(50959),n(17942));const i={toc:[{value:"Konstruktion",id:"konstruktion",level:2},{value:"Code",id:"code",level:3},{value:"Beispiel",id:"beispiel",level:3},{value:"Verwendung",id:"verwendung",level:2},{value:"Best practices",id:"best-practices",level:3},{value:"Barrierefreiheit",id:"barrierefreiheit",level:2},{value:"Tastatursteuerung",id:"tastatursteuerung",level:3},{value:"Links und Referenzen",id:"links-und-referenzen",level:2},{value:"Properties",id:"properties",level:2},{value:"Dependencies",id:"dependencies",level:2},{value:"Depends on",id:"depends-on",level:3},{value:"Graph",id:"graph",level:3}]},l="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(l,(0,a.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Der Input-Typ ",(0,r.kt)("strong",{parentName:"p"},"Date")," erzeugt ein Eingabefeld f\xfcr Datumswerte. Diese k\xf6nnen konkrete Daten sein, aber auch Wochen, Monate oder Zeitangaben."),(0,r.kt)("h2",{id:"konstruktion"},"Konstruktion"),(0,r.kt)("h3",{id:"code"},"Code"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<kol-input-date _id="mein_datum" _name="mein_datum" _type="date">Erstellungsdatum</kol-input-date>\n')),(0,r.kt)("h3",{id:"beispiel"},"Beispiel"),(0,r.kt)("p",null,(0,r.kt)("kol-input-date",{_id:"mein_datum",_name:"mein_datum",_type:"date"},"Erstellungsdatum")),(0,r.kt)("h2",{id:"verwendung"},"Verwendung"),(0,r.kt)("p",null,"Die ",(0,r.kt)("strong",{parentName:"p"},"InputDate"),"-Komponente kann f\xfcr die Erfassung von Daten verwendet werden. Es verwendet intern die InputNumber-Komponente."),(0,r.kt)("p",null,(0,r.kt)("kol-alert",{_type:"info"},"Beachten Sie, dass im ",(0,r.kt)("strong",{parentName:"p"},"Firefox")," nicht alle ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"_types"))," der ",(0,r.kt)("strong",{parentName:"p"},"InputDate"),"-Komponente funktional sind. Es werden bei den Typen ",(0,r.kt)("inlineCode",{parentName:"p"},"month"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"time")," und ",(0,r.kt)("inlineCode",{parentName:"p"},"week")," keine Auswahldialoge angezeigt.")),(0,r.kt)("p",null,"Die Komponente zeichnet sich dadurch aus, dass sie zahlreiche Ziffern-basierte Eingabemuster unterst\xfctzt. Hierbei ist es wichtig zu beachten, dass sich das Verhalten bei der Eingabe von Browser zu Browser und Ger\xe4te zu Ger\xe4t unterscheiden kann. Beispielsweise ist es m\xf6glich beim Datum, 01.01.999999 einzugeben, auch wenn max=2022-02-02 ist. Der Feldwert ist aber trotzdem 2022-02-02."),(0,r.kt)("h3",{id:"best-practices"},"Best practices"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Achten sie darauf ",(0,r.kt)("inlineCode",{parentName:"li"},"id")," und ",(0,r.kt)("inlineCode",{parentName:"li"},"name")," korrekt zu setzen, damit die Daten beim Formular Absenden mitgesendet werden.")),(0,r.kt)("h2",{id:"barrierefreiheit"},"Barrierefreiheit"),(0,r.kt)("p",null,"Die Icons in der Komponente sind per Tab-Taste nicht erreichbar. Die Auswahlhilfen der Komponente werden \xfcber die ",(0,r.kt)("strong",{parentName:"p"},"Leertaste")," ge\xf6ffnet. So erhalten Sie beispielsweise beim Typ ",(0,r.kt)("strong",{parentName:"p"},"date")," ein Kalendermodul, \xfcber das per Maus oder \xfcber die Tastatur das gew\xfcnschte Datum ausgew\xe4hlt werden kann. Die manuelle Eingabe der Werte ist alternativ m\xf6glich."),(0,r.kt)("h3",{id:"tastatursteuerung"},"Tastatursteuerung"),(0,r.kt)("p",null,"Das Eingabefeld f\xfcr Zeitangaben gibt es in unterschiedlichen Auspr\xe4gungen (Datum, Uhrzeit u.a). Mit der ",(0,r.kt)("inlineCode",{parentName:"p"},"Tab"),"-Taste wird der Fokus auf das Eingabefeld gesetzt. Anschlie\xdfend kann mittels der ",(0,r.kt)("inlineCode",{parentName:"p"},"Leer"),"-Taste das ger\xe4tespezifische Auswahldialog ge\xf6ffent werden."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Hinweis: Wir haben in unseren Tests festgestellt, dass es je nach Browser-Version manchmal m\xf6glich ist, das Kalender-Icon anzufokusieren und mal nicht. Ohne das sich die Implementierung der Komponente ge\xe4ndert hat. Warum das so ist ist uns noch nicht bekannt. Nichtsdestotrotz ist das \xd6ffnen des Auswahldialogs immer mittels der ",(0,r.kt)("inlineCode",{parentName:"p"},"Leer"),"-Taste m\xf6glich.")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Taste"),(0,r.kt)("th",{parentName:"tr",align:null},"Funktion"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Tab")),(0,r.kt)("td",{parentName:"tr",align:null},"Fokussiert das Eingabefeld. Nach erhalt des Fokus wechselt die ",(0,r.kt)("inlineCode",{parentName:"td"},"Tab"),"-Taste durch die Eingabebereiche. Danach erst wechselt die ",(0,r.kt)("inlineCode",{parentName:"td"},"Tab"),"-Taste zum n\xe4chsten Eingabefeld.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Leer")),(0,r.kt)("td",{parentName:"tr",align:null},"Wenn das Eingabefeld fokussiert ist, kann im Browser mit der ",(0,r.kt)("inlineCode",{parentName:"td"},"Leer"),"-Taste ein Auswahldialog aufgerufen bzw. geschlossen werden. Die Navigation und Auswahl erfolgt hier mit Hilfe der ",(0,r.kt)("inlineCode",{parentName:"td"},"Tab"),"-Taste, der ",(0,r.kt)("inlineCode",{parentName:"td"},"Pfeil"),"-Tasten und der Best\xe4tigung mittes ",(0,r.kt)("inlineCode",{parentName:"td"},"Enter"),"-Taste.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Pfeil-Tasten (links / rechts)")),(0,r.kt)("td",{parentName:"tr",align:null},"Wenn das Eingabefeld fokussiert ist, kann mit den ",(0,r.kt)("inlineCode",{parentName:"td"},"Pfeil"),"-Tasten zwischen den Eingabebereichen gewechselt werden.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Pfeil-Tasten (oben / unten)")),(0,r.kt)("td",{parentName:"tr",align:null},"Wenn ein Eingabebereich aktiviert ist, k\xf6nnen mit den ",(0,r.kt)("inlineCode",{parentName:"td"},"Pfeil"),"-Tasten oben und unten die Werte ver\xe4ndert werden.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Esc")),(0,r.kt)("td",{parentName:"tr",align:null},"Ist ein Auswahldialog verf\xfcgbar, kann dieser alternativ zur ",(0,r.kt)("inlineCode",{parentName:"td"},"Leer"),"-Taste oder auch mit der ",(0,r.kt)("inlineCode",{parentName:"td"},"Esc"),"-Taste geschlossen werden.")))),(0,r.kt)("h2",{id:"links-und-referenzen"},"Links und Referenzen"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.w3.org/TR/2012/WD-html-markup-20120329/input.date.html"},"https://www.w3.org/TR/2012/WD-html-markup-20120329/input.date.html")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.hassellinclusion.com/blog/input-type-date-ready-for-use/"},"https://www.hassellinclusion.com/blog/input-type-date-ready-for-use/")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://a11ysupport.io/tech/html/input(type-date)_element"},"https://a11ysupport.io/tech/html/input(type-date)_element")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://medium.com/@gavyn/til-autofocus-inputs-are-an-accessibility-problem-32ced60c3109"},"https://medium.com/@gavyn/til-autofocus-inputs-are-an-accessibility-problem-32ced60c3109"))),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Attribute"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_accessKey")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_access-key")),(0,r.kt)("td",{parentName:"tr",align:null},"Gibt an, mit welcher Tastenkombination man das Input ausl\xf6sen oder fokussieren kann."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string \\| undefined")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_alert")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_alert")),(0,r.kt)("td",{parentName:"tr",align:null},"Gibt an, ob die Fehlermeldung vorgelesen werden soll, wenn es eine gibt."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"boolean \\| undefined")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"true"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_autoComplete")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_auto-complete")),(0,r.kt)("td",{parentName:"tr",align:null},"Gibt an, ob das Eingabefeld autovervollst\xe4ndigt werden kann."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"off" \\| "on" \\| undefined')),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_disabled")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_disabled")),(0,r.kt)("td",{parentName:"tr",align:null},"Setzt das Feld in einen inaktiven Zustand, in dem es keine Interaktion erlaubt."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"boolean \\| undefined")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_error")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_error")),(0,r.kt)("td",{parentName:"tr",align:null},"Gibt den Text f\xfcr eine Fehlermeldung an."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string \\| undefined")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_hideLabel")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_hide-label")),(0,r.kt)("td",{parentName:"tr",align:null},"Versteckt das sichtbare Label des Elements."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"boolean \\| undefined")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_hint")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_hint")),(0,r.kt)("td",{parentName:"tr",align:null},"Gibt den Hinweistext an."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string \\| undefined")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"''"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_icon")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_icon")),(0,r.kt)("td",{parentName:"tr",align:null},"Erm\xf6glicht das Anzeigen von Icons links und/oder rechts am Rand des Eingabefeldes."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string \\| undefined \\| { right?: IconOrIconClass \\| undefined; left?: IconOrIconClass \\| undefined; }")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_id")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_id")),(0,r.kt)("td",{parentName:"tr",align:null},"Gibt die technische ID des Eingabefeldes an."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string \\| undefined")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_list")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_list")),(0,r.kt)("td",{parentName:"tr",align:null},"Gibt die Liste der Vorschlagszahlen an."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string \\| string[] \\| undefined")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_max")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_max")),(0,r.kt)("td",{parentName:"tr",align:null},"Gibt den gr\xf6\xdftm\xf6glichen Datumswert an."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Date \\| "),"${number}-${number}-${number}T${number}:${number}:${number}",(0,r.kt)("inlineCode",{parentName:"td"},"\\|"),"${number}-${number}-${number}T${number}:${number}",(0,r.kt)("inlineCode",{parentName:"td"},"\\|"),"${number}-${number}-${number}",(0,r.kt)("inlineCode",{parentName:"td"},"\\|"),"${number}-${number}",(0,r.kt)("inlineCode",{parentName:"td"},"\\|"),"${number}-W${number}",(0,r.kt)("inlineCode",{parentName:"td"},"\\|"),"${number}:${number}:${number}",(0,r.kt)("inlineCode",{parentName:"td"},"\\|"),"${number}:${number}",(0,r.kt)("inlineCode",{parentName:"td"}," \\| undefined")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_min")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_min")),(0,r.kt)("td",{parentName:"tr",align:null},"Gibt den kleinstm\xf6glichen Datumswert an."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Date \\| "),"${number}-${number}-${number}T${number}:${number}:${number}",(0,r.kt)("inlineCode",{parentName:"td"},"\\|"),"${number}-${number}-${number}T${number}:${number}",(0,r.kt)("inlineCode",{parentName:"td"},"\\|"),"${number}-${number}-${number}",(0,r.kt)("inlineCode",{parentName:"td"},"\\|"),"${number}-${number}",(0,r.kt)("inlineCode",{parentName:"td"},"\\|"),"${number}-W${number}",(0,r.kt)("inlineCode",{parentName:"td"},"\\|"),"${number}:${number}:${number}",(0,r.kt)("inlineCode",{parentName:"td"},"\\|"),"${number}:${number}",(0,r.kt)("inlineCode",{parentName:"td"}," \\| undefined")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_name")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_name")),(0,r.kt)("td",{parentName:"tr",align:null},"Gibt den technischen Namen des Eingabefeldes an."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string \\| undefined")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_on")),(0,r.kt)("td",{parentName:"tr",align:null},"--"),(0,r.kt)("td",{parentName:"tr",align:null},"Gibt die EventCallback-Funktionen f\xfcr das Input-Event an."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"InputTypeOnBlur & InputTypeOnClick & InputTypeOnChange & InputTypeOnFocus \\| undefined")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_readOnly")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_read-only")),(0,r.kt)("td",{parentName:"tr",align:null},"Setzt das Eingabefeld in den schreibgesch\xfctzten Modus."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"boolean \\| undefined")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_required")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_required")),(0,r.kt)("td",{parentName:"tr",align:null},"Macht das Eingabeelement zu einem Pflichtfeld."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"boolean \\| undefined")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_smartButton")),(0,r.kt)("td",{parentName:"tr",align:null},"--"),(0,r.kt)("td",{parentName:"tr",align:null},"Erm\xf6glicht eine Schaltfl\xe4che ins das Eingabefeld mit einer beliebigen Aktion zu einzuf\xfcgen (ohne label)."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"undefined \\| { _label: string; } & { _ariaControls?: string \\| undefined; _ariaLabel?: string \\| undefined; _icon?: Stringified<KoliBriIconProp> \\| undefined; _iconAlign?: Alignment \\| undefined; _iconOnly?: boolean \\| undefined; _role?: AlternativButtonLinkRole \\| undefined; _tabIndex?: number \\| undefined; _tooltipAlign?: Alignment \\| undefined; _ariaCurrent?: AriaCurrent \\| undefined; _ariaExpanded?: boolean \\| undefined; _ariaSelected?: boolean \\| undefined; _disabled?: boolean \\| undefined; _accessKey?: string \\| undefined; _id?: string \\| undefined; _on?: KoliBriButtonCallbacks<unknown> \\| undefined; _type?: KoliBriButtonType \\| undefined; _value?: unknown; _variant?: KoliBriButtonVariant \\| undefined; _customClass?: string \\| undefined; }")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_step")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_step")),(0,r.kt)("td",{parentName:"tr",align:null},"Gibt die Schrittweite der Wertver\xe4nderung an"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"number \\| undefined")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_tabIndex")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_tab-index")),(0,r.kt)("td",{parentName:"tr",align:null},"Gibt an, welchen Tab-Index dieses Input hat."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"number \\| undefined")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_touched")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_touched")),(0,r.kt)("td",{parentName:"tr",align:null},"Gibt an, ob dieses Eingabefeld von Nutzer:innen einmal besucht/ber\xfchrt wurde."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"boolean \\| undefined")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_type")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_type")),(0,r.kt)("td",{parentName:"tr",align:null},"Gibt den Typ des Eingabefeldes an."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"date" \\| "datetime-local" \\| "month" \\| "time" \\| "week"')),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"'date'"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_value")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_value")),(0,r.kt)("td",{parentName:"tr",align:null},"Gibt den Wert des Eingabefeldes an."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Date \\| "),"${number}-${number}-${number}T${number}:${number}:${number}",(0,r.kt)("inlineCode",{parentName:"td"},"\\|"),"${number}-${number}-${number}T${number}:${number}",(0,r.kt)("inlineCode",{parentName:"td"},"\\|"),"${number}-${number}-${number}",(0,r.kt)("inlineCode",{parentName:"td"},"\\|"),"${number}-${number}",(0,r.kt)("inlineCode",{parentName:"td"},"\\|"),"${number}-W${number}",(0,r.kt)("inlineCode",{parentName:"td"},"\\|"),"${number}:${number}:${number}",(0,r.kt)("inlineCode",{parentName:"td"},"\\|"),"${number}:${number}",(0,r.kt)("inlineCode",{parentName:"td"}," \\| null \\| undefined")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"undefined"))))),(0,r.kt)("h2",{id:"dependencies"},"Dependencies"),(0,r.kt)("h3",{id:"depends-on"},"Depends on"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"./input-number"},"kol-input-number"))),(0,r.kt)("h3",{id:"graph"},"Graph"),(0,r.kt)("mermaid",{value:"graph TD;\n  kol-input-date --\x3e kol-input-number\n  kol-input-number --\x3e kol-input\n  kol-input --\x3e kol-icon\n  kol-input --\x3e kol-button-wc\n  kol-input --\x3e kol-alert\n  kol-button-wc --\x3e kol-span-wc\n  kol-button-wc --\x3e kol-tooltip\n  kol-span-wc --\x3e kol-icon\n  kol-tooltip --\x3e kol-span-wc\n  kol-alert --\x3e kol-heading-wc\n  kol-alert --\x3e kol-button-wc\n  kol-alert --\x3e kol-icon\n  style kol-input-date fill:#f9f,stroke:#333,stroke-width:4px"}),(0,r.kt)("hr",null))}d.isMDXComponent=!0;var u=n(64717);const o={title:"InputDate",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die InputDate-Komponente.",tags:["InputDate","Beschreibung","Spezifikation","Beispiele"]},m=void 0,p={unversionedId:"components/input-date",id:"components/input-date",title:"InputDate",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die InputDate-Komponente.",source:"@site/docs/30-components/input-date.mdx",sourceDirName:"30-components",slug:"/components/input-date",permalink:"/docs/components/input-date",draft:!1,tags:[{label:"InputDate",permalink:"/docs/tags/input-date"},{label:"Beschreibung",permalink:"/docs/tags/beschreibung"},{label:"Spezifikation",permalink:"/docs/tags/spezifikation"},{label:"Beispiele",permalink:"/docs/tags/beispiele"}],version:"current",frontMatter:{title:"InputDate",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die InputDate-Komponente.",tags:["InputDate","Beschreibung","Spezifikation","Beispiele"]},sidebar:"tutorialSidebar",previous:{title:"InputColor",permalink:"/docs/components/input-color"},next:{title:"InputEmail",permalink:"/docs/components/input-email"}},s={},k=[{value:"Beispiele",id:"beispiele",level:2}],N={toc:k},b="wrapper";function c(e){let{components:t,...n}=e;return(0,r.kt)(b,(0,a.Z)({},N,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(d,{mdxType:"Readme"}),(0,r.kt)("h2",{id:"beispiele"},"Beispiele"),(0,r.kt)(u._,{component:"input-date",sample:"basic",mdxType:"Configurator"}))}c.isMDXComponent=!0}}]);