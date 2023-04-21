"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[1621],{17942:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>N});var a=n(50959);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var o=a.createContext({}),m=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=m(e.components);return a.createElement(o.Provider,{value:t},e.children)},u="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,p=d(e,["components","mdxType","originalType","parentName"]),u=m(n),s=i,N=u["".concat(o,".").concat(s)]||u[s]||k[s]||r;return n?a.createElement(N,l(l({ref:t},p),{},{components:n})):a.createElement(N,l({ref:t},p))}));function N(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=s;var d={};for(var o in t)hasOwnProperty.call(t,o)&&(d[o]=t[o]);d.originalType=e,d[u]="string"==typeof e?e:i,l[1]=d;for(var m=2;m<r;m++)l[m]=n[m];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},6096:(e,t,n)=>{n.d(t,{_:()=>o});var a=n(52260),i=n(50959);const r=function(e,t,n,a,i){return void 0===i&&(i="editor"),`${e}&module=${a}&initialpath=%23%2F${t}%2F${n}&view=${i}`},l={width:"100%",height:"500px",border:"0",overflow:"hidden"},d=e=>{let{url:t}=e;return i.createElement("div",{className:"m-2"},i.createElement("iframe",{src:t,style:l,title:"kolibri-public-ui-code-samples",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}),i.createElement(a.Nv,{_href:t,_label:"",_target:"codesandbox"},i.createElement("img",{alt:"CodeSandbox-Schalter",src:"https://codesandbox.io/static/img/play-codesandbox.svg"})))},o=e=>{let{component:t,sample:n}=e;const[l,o]=(0,i.useState)("Preview"),m="https://codesandbox.io/embed/kolibri-public-ui-react-samples-w5u37c?fontsize=14&hidenavigation=1&autoresize=1&theme=dark",p=`%2Fsrc%2Fsamples%2F${t}%2F${n}`,u={angular:`${p}.html`,react:`${p}.tsx`,vue:`${p}.vue`,webcomponent:`${p}.html`},k={onSelect:(e,t)=>{switch(t){case 1:o((()=>"Angular"));break;case 2:o((()=>"React"));break;case 3:o((()=>"Vue"));break;case 4:o((()=>"Web Component"));break;default:o((()=>"Preview"))}}};return i.createElement(a.UD,{className:"w-full",_ariaLabel:"Code-Beispiel",_on:k,_tabs:[{_label:"Vorschau"},{_disabled:!0,_label:"Angular"},{_label:"React"},{_disabled:!0,_label:"Vue"},{_disabled:!0,_label:"Web Component"}]},i.createElement("div",null,"Preview"===l&&i.createElement(d,{url:r(m,t,n,u.react,"preview")})),i.createElement("div",null,"Angular"===l&&i.createElement(d,{url:r(m,t,n,u.angular)})),i.createElement("div",null,"React"===l&&i.createElement(d,{url:r(m,t,n,u.react)})),i.createElement("div",null,"Vue"===l&&i.createElement(d,{url:r(m,t,n,u.vue)})),i.createElement("div",null,"Web Component"===l&&i.createElement(d,{url:r(m,t,n,u.webcomponent)})))}},45551:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>k,contentTitle:()=>p,default:()=>c,frontMatter:()=>m,metadata:()=>u,toc:()=>s});var a=n(15882),i=(n(50959),n(17942));const r={toc:[{value:"Konstruktion",id:"konstruktion",level:2},{value:"Code",id:"code",level:3},{value:"Beispiel",id:"beispiel",level:3},{value:"Verwendung",id:"verwendung",level:2},{value:"Best practices",id:"best-practices",level:3},{value:"Barrierefreiheit",id:"barrierefreiheit",level:2},{value:"Tastatursteuerung",id:"tastatursteuerung",level:3},{value:"Links und Referenzen",id:"links-und-referenzen",level:2},{value:"Properties",id:"properties",level:2},{value:"Dependencies",id:"dependencies",level:2},{value:"Depends on",id:"depends-on",level:3},{value:"Graph",id:"graph",level:3}]},l="wrapper";function d(e){let{components:t,...n}=e;return(0,i.kt)(l,(0,a.Z)({},r,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Der Input-Typ ",(0,i.kt)("strong",{parentName:"p"},"Date")," erzeugt ein Eingabefeld f\xfcr Datumswerte. Diese k\xf6nnen konkrete Daten sein, aber auch Wochen, Monate oder Zeitangaben."),(0,i.kt)("h2",{id:"konstruktion"},"Konstruktion"),(0,i.kt)("h3",{id:"code"},"Code"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<kol-input-date _id="mein_datum" _name="mein_datum" _type="date">Erstellungsdatum</kol-input-date>\n')),(0,i.kt)("h3",{id:"beispiel"},"Beispiel"),(0,i.kt)("p",null,(0,i.kt)("kol-input-date",{_id:"mein_datum",_name:"mein_datum",_type:"date"},"Erstellungsdatum")),(0,i.kt)("h2",{id:"verwendung"},"Verwendung"),(0,i.kt)("p",null,"Die ",(0,i.kt)("strong",{parentName:"p"},"InputDate"),"-Komponente kann f\xfcr die Erfassung von Daten verwendet werden. Es verwendet intern die InputNumber-Komponente."),(0,i.kt)("p",null,(0,i.kt)("kol-alert",{_type:"info"},"Beachten Sie, dass im ",(0,i.kt)("strong",{parentName:"p"},"Firefox")," nicht alle ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"_types"))," der ",(0,i.kt)("strong",{parentName:"p"},"InputDate"),"-Komponente funktional sind. Es werden bei den Typen ",(0,i.kt)("inlineCode",{parentName:"p"},"month"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"time")," und ",(0,i.kt)("inlineCode",{parentName:"p"},"week")," keine Auswahldialoge angezeigt.")),(0,i.kt)("p",null,"Die Komponente zeichnet sich dadurch aus, dass sie zahlreiche Ziffern-basierte Eingabemuster unterst\xfctzt. Hierbei ist es wichtig zu beachten, dass sich das Verhalten bei der Eingabe von Browser zu Browser und Ger\xe4te zu Ger\xe4t unterscheiden kann. Beispielsweise ist es m\xf6glich beim Datum, 01.01.999999 einzugeben, auch wenn max=2022-02-02 ist. Der Feldwert ist aber trotzdem 2022-02-02."),(0,i.kt)("h3",{id:"best-practices"},"Best practices"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Achten sie darauf ",(0,i.kt)("inlineCode",{parentName:"li"},"id")," und ",(0,i.kt)("inlineCode",{parentName:"li"},"name")," korrekt zu setzen, damit die Daten beim Formular Absenden mitgesendet werden.")),(0,i.kt)("h2",{id:"barrierefreiheit"},"Barrierefreiheit"),(0,i.kt)("p",null,"Die Icons in der Komponente sind per Tab-Taste nicht erreichbar. Die Auswahlhilfen der Komponente werden \xfcber die ",(0,i.kt)("strong",{parentName:"p"},"Leertaste")," ge\xf6ffnet. So erhalten Sie beispielsweise beim Typ ",(0,i.kt)("strong",{parentName:"p"},"date")," ein Kalendermodul, \xfcber das per Maus oder \xfcber die Tastatur das gew\xfcnschte Datum ausgew\xe4hlt werden kann. Die manuelle Eingabe der Werte ist alternativ m\xf6glich."),(0,i.kt)("h3",{id:"tastatursteuerung"},"Tastatursteuerung"),(0,i.kt)("p",null,"Das Eingabefeld f\xfcr Zeitangaben gibt es in unterschiedlichen Auspr\xe4gungen (Datum, Uhrzeit u.a). Mit der ",(0,i.kt)("inlineCode",{parentName:"p"},"Tab"),"-Taste wird der Fokus auf das Eingabefeld gesetzt. Anschlie\xdfend kann mittels der ",(0,i.kt)("inlineCode",{parentName:"p"},"Leer"),"-Taste das ger\xe4tespezifische Auswahldialog ge\xf6ffent werden."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Hinweis: Wir haben in unseren Tests festgestellt, dass es je nach Browser-Version manchmal m\xf6glich ist, das Kalender-Icon anzufokusieren und mal nicht. Ohne das sich die Implementierung der Komponente ge\xe4ndert hat. Warum das so ist ist uns noch nicht bekannt. Nichtsdestotrotz ist das \xd6ffnen des Auswahldialogs immer mittels der ",(0,i.kt)("inlineCode",{parentName:"p"},"Leer"),"-Taste m\xf6glich.")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Taste"),(0,i.kt)("th",{parentName:"tr",align:null},"Funktion"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Tab")),(0,i.kt)("td",{parentName:"tr",align:null},"Fokussiert das Eingabefeld. Nach erhalt des Fokus wechselt die ",(0,i.kt)("inlineCode",{parentName:"td"},"Tab"),"-Taste durch die Eingabebereiche. Danach erst wechselt die ",(0,i.kt)("inlineCode",{parentName:"td"},"Tab"),"-Taste zum n\xe4chsten Eingabefeld.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Leer")),(0,i.kt)("td",{parentName:"tr",align:null},"Wenn das Eingabefeld fokussiert ist, kann im Browser mit der ",(0,i.kt)("inlineCode",{parentName:"td"},"Leer"),"-Taste ein Auswahldialog aufgerufen bzw. geschlossen werden. Die Navigation und Auswahl erfolgt hier mit Hilfe der ",(0,i.kt)("inlineCode",{parentName:"td"},"Tab"),"-Taste, der ",(0,i.kt)("inlineCode",{parentName:"td"},"Pfeil"),"-Tasten und der Best\xe4tigung mittes ",(0,i.kt)("inlineCode",{parentName:"td"},"Enter"),"-Taste.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Pfeil-Tasten (links / rechts)")),(0,i.kt)("td",{parentName:"tr",align:null},"Wenn das Eingabefeld fokussiert ist, kann mit den ",(0,i.kt)("inlineCode",{parentName:"td"},"Pfeil"),"-Tasten zwischen den Eingabebereichen gewechselt werden.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Pfeil-Tasten (oben / unten)")),(0,i.kt)("td",{parentName:"tr",align:null},"Wenn ein Eingabebereich aktiviert ist, k\xf6nnen mit den ",(0,i.kt)("inlineCode",{parentName:"td"},"Pfeil"),"-Tasten oben und unten die Werte ver\xe4ndert werden.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Esc")),(0,i.kt)("td",{parentName:"tr",align:null},"Ist ein Auswahldialog verf\xfcgbar, kann dieser alternativ zur ",(0,i.kt)("inlineCode",{parentName:"td"},"Leer"),"-Taste oder auch mit der ",(0,i.kt)("inlineCode",{parentName:"td"},"Esc"),"-Taste geschlossen werden.")))),(0,i.kt)("h2",{id:"links-und-referenzen"},"Links und Referenzen"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.w3.org/TR/2012/WD-html-markup-20120329/input.date.html"},"https://www.w3.org/TR/2012/WD-html-markup-20120329/input.date.html")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.hassellinclusion.com/blog/input-type-date-ready-for-use/"},"https://www.hassellinclusion.com/blog/input-type-date-ready-for-use/")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://a11ysupport.io/tech/html/input(type-date)_element"},"https://a11ysupport.io/tech/html/input(type-date)_element")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://medium.com/@gavyn/til-autofocus-inputs-are-an-accessibility-problem-32ced60c3109"},"https://medium.com/@gavyn/til-autofocus-inputs-are-an-accessibility-problem-32ced60c3109"))),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Property"),(0,i.kt)("th",{parentName:"tr",align:null},"Attribute"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Default"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"_accessKey")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"_access-key")),(0,i.kt)("td",{parentName:"tr",align:null},"Gibt an, mit welcher Tastenkombination man das Input ausl\xf6sen oder fokussieren kann."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"string")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"undefined")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"_alert")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"_alert")),(0,i.kt)("td",{parentName:"tr",align:null},"Gibt an, ob die Fehlermeldung vorgelesen werden soll, wenn es eine gibt."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"boolean")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"undefined")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"true"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"_autoComplete")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"_auto-complete")),(0,i.kt)("td",{parentName:"tr",align:null},"Gibt an, ob das Eingabefeld autovervollst\xe4ndigt werden kann."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},'"off"')," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},'"on"')," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"undefined")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"_disabled")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"_disabled")),(0,i.kt)("td",{parentName:"tr",align:null},"Setzt das Feld in einen inaktiven Zustand, in dem es keine Interaktion erlaubt."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"boolean")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"undefined")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"_error")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"_error")),(0,i.kt)("td",{parentName:"tr",align:null},"Gibt den Text f\xfcr eine Fehlermeldung an."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"string")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"undefined")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"_hideLabel")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"_hide-label")),(0,i.kt)("td",{parentName:"tr",align:null},"Versteckt das sichtbare Label des Elements."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"boolean")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"undefined")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"_hint")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"_hint")),(0,i.kt)("td",{parentName:"tr",align:null},"Gibt den Hinweistext an."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"string")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"undefined")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"''"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"_icon")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"_icon")),(0,i.kt)("td",{parentName:"tr",align:null},"Erm\xf6glicht das Anzeigen von Icons links und/oder rechts am Rand des Eingabefeldes."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"string")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"undefined")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"{ right?: IconOrIconClass")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"undefined; left?: IconOrIconClass")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"undefined; }")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"_id")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"_id")),(0,i.kt)("td",{parentName:"tr",align:null},"Gibt die technische ID des Eingabefeldes an."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"string")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"undefined")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"_list")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"_list")),(0,i.kt)("td",{parentName:"tr",align:null},"Gibt die Liste der Vorschlagszahlen an."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"string")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"string[]")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"undefined")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"_max")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"_max")),(0,i.kt)("td",{parentName:"tr",align:null},"Gibt den gr\xf6\xdftm\xf6glichen Datumswert an."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Date")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"${number}-${number}-${number}T${number}:${number}:${number}")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"${number}-${number}-${number}T${number}:${number}")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"${number}-${number}-${number}")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"${number}-${number}")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"${number}-W${number}")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"${number}:${number}:${number}")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"${number}:${number}")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"undefined")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"_min")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"_min")),(0,i.kt)("td",{parentName:"tr",align:null},"Gibt den kleinstm\xf6glichen Datumswert an."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Date")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"${number}-${number}-${number}T${number}:${number}:${number}")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"${number}-${number}-${number}T${number}:${number}")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"${number}-${number}-${number}")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"${number}-${number}")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"${number}-W${number}")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"${number}:${number}:${number}")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"${number}:${number}")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"undefined")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"_name")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"_name")),(0,i.kt)("td",{parentName:"tr",align:null},"Gibt den technischen Namen des Eingabefeldes an."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"string")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"undefined")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"_on")),(0,i.kt)("td",{parentName:"tr",align:null},"--"),(0,i.kt)("td",{parentName:"tr",align:null},"Gibt die EventCallback-Funktionen f\xfcr das Input-Event an."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"InputTypeOnBlur & InputTypeOnClick & InputTypeOnChange & InputTypeOnFocus")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"undefined")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"_readOnly")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"_read-only")),(0,i.kt)("td",{parentName:"tr",align:null},"Setzt das Eingabefeld in den schreibgesch\xfctzten Modus."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"boolean")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"undefined")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"_required")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"_required")),(0,i.kt)("td",{parentName:"tr",align:null},"Macht das Eingabeelement zu einem Pflichtfeld."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"boolean")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"undefined")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"_smartButton")),(0,i.kt)("td",{parentName:"tr",align:null},"--"),(0,i.kt)("td",{parentName:"tr",align:null},"Erm\xf6glicht eine Schaltfl\xe4che ins das Eingabefeld mit einer beliebigen Aktion zu einzuf\xfcgen (ohne label)."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"undefined")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"{ _label: string; } & { _ariaControls?: string")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"undefined; _ariaLabel?: string")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"undefined; _icon?: Stringified<KoliBriIconProp>")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"undefined; _iconAlign?: Alignment")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"undefined; _iconOnly?: boolean")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"undefined; _role?: AlternativButtonLinkRole")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"undefined; _tabIndex?: number")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"undefined; _tooltipAlign?: Alignment")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"undefined; _ariaCurrent?: AriaCurrent")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"undefined; _ariaExpanded?: boolean")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"undefined; _ariaSelected?: boolean")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"undefined; _disabled?: boolean")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"undefined; _accessKey?: string")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"undefined; _id?: string")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"undefined; _on?: KoliBriButtonCallbacks<unknown>")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"undefined; _type?: KoliBriButtonType")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"undefined; _value?: unknown; _variant?: KoliBriButtonVariant")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"undefined; _customClass?: string")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"undefined; }")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"_step")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"_step")),(0,i.kt)("td",{parentName:"tr",align:null},"Gibt die Schrittweite der Wertver\xe4nderung an"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"number")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"undefined")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"_tabIndex")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"_tab-index")),(0,i.kt)("td",{parentName:"tr",align:null},"Gibt an, welchen Tab-Index dieses Input hat."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"number")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"undefined")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"_touched")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"_touched")),(0,i.kt)("td",{parentName:"tr",align:null},"Gibt an, ob dieses Eingabefeld von Nutzer:innen einmal besucht/ber\xfchrt wurde."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"boolean")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"undefined")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"false"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"_type")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"_type")),(0,i.kt)("td",{parentName:"tr",align:null},"Gibt den Typ des Eingabefeldes an."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},'"date"')," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},'"datetime-local"')," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},'"month"')," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},'"time"')," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},'"week"')),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"'date'"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"_value")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"_value")),(0,i.kt)("td",{parentName:"tr",align:null},"Gibt den Wert des Eingabefeldes an."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Date")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"${number}-${number}-${number}T${number}:${number}:${number}")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"${number}-${number}-${number}T${number}:${number}")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"${number}-${number}-${number}")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"${number}-${number}")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"${number}-W${number}")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"${number}:${number}:${number}")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"${number}:${number}")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"null")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"undefined")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"undefined"))))),(0,i.kt)("h2",{id:"dependencies"},"Dependencies"),(0,i.kt)("h3",{id:"depends-on"},"Depends on"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"./input-number"},"kol-input-number"))),(0,i.kt)("h3",{id:"graph"},"Graph"),(0,i.kt)("mermaid",{value:"graph TD;\n  kol-input-date --\x3e kol-input-number\n  kol-input-number --\x3e kol-input\n  kol-input --\x3e kol-icon\n  kol-input --\x3e kol-button-wc\n  kol-input --\x3e kol-alert\n  kol-button-wc --\x3e kol-span-wc\n  kol-button-wc --\x3e kol-tooltip\n  kol-span-wc --\x3e kol-icon\n  kol-tooltip --\x3e kol-span-wc\n  kol-alert --\x3e kol-heading-wc\n  kol-alert --\x3e kol-button-wc\n  kol-alert --\x3e kol-icon\n  style kol-input-date fill:#f9f,stroke:#333,stroke-width:4px"}),(0,i.kt)("hr",null))}d.isMDXComponent=!0;var o=n(6096);const m={title:"InputDate",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die InputDate-Komponente.",tags:["InputDate","Beschreibung","Spezifikation","Beispiele"]},p=void 0,u={unversionedId:"components/input-date",id:"components/input-date",title:"InputDate",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die InputDate-Komponente.",source:"@site/docs/30-components/input-date.mdx",sourceDirName:"30-components",slug:"/components/input-date",permalink:"/docs/components/input-date",draft:!1,tags:[{label:"InputDate",permalink:"/docs/tags/input-date"},{label:"Beschreibung",permalink:"/docs/tags/beschreibung"},{label:"Spezifikation",permalink:"/docs/tags/spezifikation"},{label:"Beispiele",permalink:"/docs/tags/beispiele"}],version:"current",frontMatter:{title:"InputDate",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die InputDate-Komponente.",tags:["InputDate","Beschreibung","Spezifikation","Beispiele"]},sidebar:"tutorialSidebar",previous:{title:"InputColor",permalink:"/docs/components/input-color"},next:{title:"InputEmail",permalink:"/docs/components/input-email"}},k={},s=[{value:"Beispiele",id:"beispiele",level:2}],N={toc:s},b="wrapper";function c(e){let{components:t,...n}=e;return(0,i.kt)(b,(0,a.Z)({},N,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(d,{mdxType:"Readme"}),(0,i.kt)("h2",{id:"beispiele"},"Beispiele"),(0,i.kt)(o._,{component:"input-date",sample:"basic",mdxType:"Configurator"}))}c.isMDXComponent=!0}}]);