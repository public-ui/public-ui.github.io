"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[8993],{17942:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>s});var a=n(50959);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var o=a.createContext({}),p=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(o.Provider,{value:t},e.children)},k="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,u=d(e,["components","mdxType","originalType","parentName"]),k=p(n),m=i,s=k["".concat(o,".").concat(m)]||k[m]||c[m]||r;return n?a.createElement(s,l(l({ref:t},u),{},{components:n})):a.createElement(s,l({ref:t},u))}));function s(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=m;var d={};for(var o in t)hasOwnProperty.call(t,o)&&(d[o]=t[o]);d.originalType=e,d[k]="string"==typeof e?e:i,l[1]=d;for(var p=2;p<r;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},64717:(e,t,n)=>{n.d(t,{_:()=>o});var a=n(95982),i=n(50959);const r=function(e,t,n,a,i){return void 0===i&&(i="editor"),`${e}&module=${a}&initialpath=%23%2F${t}%2F${n}&view=${i}`},l={width:"100%",height:"500px",border:"0",overflow:"hidden"},d=e=>{let{url:t}=e;return i.createElement("div",{className:"m-2"},i.createElement("iframe",{src:t,style:l,title:"kolibri-public-ui-code-samples",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}),i.createElement(a.Nv,{_href:t,_label:"",_target:"codesandbox"},i.createElement("img",{alt:"CodeSandbox-Schalter",src:"https://codesandbox.io/static/img/play-codesandbox.svg"})))},o=e=>{let{component:t,sample:n}=e;const[l,o]=(0,i.useState)("Preview"),p="https://codesandbox.io/embed/kolibri-public-ui-react-samples-w5u37c?fontsize=14&hidenavigation=1&autoresize=1&theme=dark",u=`%2Fsrc%2Fsamples%2F${t}%2F${n}`,k={angular:`${u}.html`,react:`${u}.tsx`,vue:`${u}.vue`,webcomponent:`${u}.html`},c={onSelect:(e,t)=>{switch(t){case 1:o((()=>"Angular"));break;case 2:o((()=>"React"));break;case 3:o((()=>"Vue"));break;case 4:o((()=>"Web Component"));break;default:o((()=>"Preview"))}}};return i.createElement(a.UD,{className:"w-full",_ariaLabel:"Code-Beispiel",_on:c,_tabs:[{_label:"Vorschau"},{_disabled:!0,_label:"Angular"},{_label:"React"},{_disabled:!0,_label:"Vue"},{_disabled:!0,_label:"Web Component"}]},i.createElement("div",null,"Preview"===l&&i.createElement(d,{url:r(p,t,n,k.react,"preview")})),i.createElement("div",null,"Angular"===l&&i.createElement(d,{url:r(p,t,n,k.angular)})),i.createElement("div",null,"React"===l&&i.createElement(d,{url:r(p,t,n,k.react)})),i.createElement("div",null,"Vue"===l&&i.createElement(d,{url:r(p,t,n,k.vue)})),i.createElement("div",null,"Web Component"===l&&i.createElement(d,{url:r(p,t,n,k.webcomponent)})))}},52405:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>u,default:()=>g,frontMatter:()=>p,metadata:()=>k,toc:()=>m});var a=n(15882),i=(n(50959),n(17942));const r={toc:[{value:"Konstruktion",id:"konstruktion",level:2},{value:"Code",id:"code",level:3},{value:"Beispiel",id:"beispiel",level:3},{value:"Verwendung",id:"verwendung",level:2},{value:"Varianten",id:"varianten",level:3},{value:"Best practices",id:"best-practices",level:3},{value:"Barrierefreiheit",id:"barrierefreiheit",level:2},{value:"Tastatursteuerung",id:"tastatursteuerung",level:3},{value:"Links und Referenzen",id:"links-und-referenzen",level:2},{value:"Properties",id:"properties",level:2},{value:"Dependencies",id:"dependencies",level:2},{value:"Depends on",id:"depends-on",level:3},{value:"Graph",id:"graph",level:3}]},l="wrapper";function d(e){let{components:t,...n}=e;return(0,i.kt)(l,(0,a.Z)({},r,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Der Input-Typ ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"Checkbox"))," generiert eine rechteckige Box, die durch Anklicken aktiviert und wieder deaktiviert wird. In aktiviertem Zustand befindet sich ein farbiger Haken in der Box."),(0,i.kt)("h2",{id:"konstruktion"},"Konstruktion"),(0,i.kt)("h3",{id:"code"},"Code"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<kol-input-checkbox _id="checkbox">Ich stimme der <kol-link _href="#" _label="Datenschutzerkl\xe4rung" _target="document"></kol-link> zu.</kol-input-checkbox>\n<kol-input-checkbox _id="switch" _variant="switch">Geburtsdatum anzeigen?</kol-input-checkbox>\n<kol-input-checkbox _checked _id="button" _variant="button">Schalter aktiviert</kol-input-checkbox>\n<kol-input-checkbox _id="button" _variant="button">Schalter deaktiviert</kol-input-checkbox>\n')),(0,i.kt)("h3",{id:"beispiel"},"Beispiel"),(0,i.kt)("p",null,(0,i.kt)("kol-input-checkbox",{_id:"checkbox"},"Ich stimme der ",(0,i.kt)("kol-link",{_href:"#",_label:"Datenschutzerkl\xe4rung",_target:"document"})," zu."),"\n",(0,i.kt)("kol-input-checkbox",{_id:"switch",_variant:"switch"},"Geburtsdatum anzeigen?"),"\n",(0,i.kt)("kol-input-checkbox",{_checked:!0,_id:"button",_variant:"button"},"Schalter aktiviert"),"\n",(0,i.kt)("kol-input-checkbox",{_id:"button",_variant:"button"},"Schalter deaktiviert")),(0,i.kt)("h2",{id:"verwendung"},"Verwendung"),(0,i.kt)("p",null,"Checkboxen werden als Einzelelement oder als Liste beliebig vieler Checkboxen verwendet. Sie erm\xf6glichen den Nutzer:innen, aus einer vordefinierten Anzahl von M\xf6glichkeiten eine oder mehrere auszuw\xe4hlen."),(0,i.kt)("h3",{id:"varianten"},"Varianten"),(0,i.kt)("p",null,"Mittels des Attributs ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"_variant"))," k\xf6nnen folgende Varianten ausgew\xe4hlt werden (Beispiele siehe oben):"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"button"),": wechselt das Icon je nach Zustand (Beispiel 3+4)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"switch"),": verwandelt die Checkbox in einen horizontalen Schalter, hierbei gilt rechts als aktiv und links als inaktiv. (Beispiel 2)")),(0,i.kt)("h3",{id:"best-practices"},"Best practices"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Verwenden Sie eine einzelne Checkbox, wenn Sie von den Nutzer:innen eine einfach Best\xe4tigung w\xfcnschen, z.B. Akzeptieren der Datenschutzerkl\xe4rung."),(0,i.kt)("li",{parentName:"ul"},"Verwenden Sie eine Gruppe von Checkboxen, um den Nutzer:innen die M\xf6glichkeit zu geben einen oder mehrere Werte auszuw\xe4hlen.")),(0,i.kt)("h2",{id:"barrierefreiheit"},"Barrierefreiheit"),(0,i.kt)("p",null,"Vermeiden Sie die Verwendung von vielen Checkboxen auf einer Seite, da Ihre Inhalte hierdurch schnell un\xfcbersichtlich und lang werden. Pr\xfcfen Sie in solchen Anwendungsf\xe4llen die Verwendung einer ",(0,i.kt)("kol-link",{_href:"/docs/components/select"},"Select-Box mit ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"_multiple"))),"."),(0,i.kt)("p",null,"Achten Sie darauf, jeder Checkbox ein Label zuzuweisen, da dieses von Screenreadern vorgelesen wird und so eine eindeutige Identifikation des Eingabefeldes erm\xf6glicht."),(0,i.kt)("h3",{id:"tastatursteuerung"},"Tastatursteuerung"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Taste"),(0,i.kt)("th",{parentName:"tr",align:null},"Funktion"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Tab")),(0,i.kt)("td",{parentName:"tr",align:null},"Fokussiert die Checkbox bzw. erm\xf6glicht den Wechsel zwischen Checkboxen einer Liste.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Leer")),(0,i.kt)("td",{parentName:"tr",align:null},"Aktiviert bzw. deaktiviert die Checkbox. Der Zustand ",(0,i.kt)("strong",{parentName:"td"},(0,i.kt)("em",{parentName:"strong"},"Indeterminate"))," ist \xfcber die Tastatur nicht herzustellen.")))),(0,i.kt)("h2",{id:"links-und-referenzen"},"Links und Referenzen"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.w3.org/TR/wai-aria-practices/#checkbox"},"https://www.w3.org/TR/wai-aria-practices/#checkbox")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://medium.com/@gavyn/til-autofocus-inputs-are-an-accessibility-problem-32ced60c3109"},"https://medium.com/@gavyn/til-autofocus-inputs-are-an-accessibility-problem-32ced60c3109"))),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Property"),(0,i.kt)("th",{parentName:"tr",align:null},"Attribute"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Default"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"_accessKey")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"_access-key")),(0,i.kt)("td",{parentName:"tr",align:null},"Gibt an, mit welcher Tastenkombination man das Input ausl\xf6sen oder fokussieren kann."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"string \\| undefined")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"_alert")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"_alert")),(0,i.kt)("td",{parentName:"tr",align:null},"Gibt an, ob die Fehlermeldung vorgelesen werden soll, wenn es eine gibt."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"boolean \\| undefined")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"true"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"_checked")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"_checked")),(0,i.kt)("td",{parentName:"tr",align:null},"Gibt an, ob die Checkbox ausgew\xe4hlt ist oder nicht. (kann gelesen und gesetzt werden)"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"boolean \\| undefined")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"false"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"_disabled")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"_disabled")),(0,i.kt)("td",{parentName:"tr",align:null},"Setzt das Feld in einen inaktiven Zustand, in dem es keine Interaktion erlaubt."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"boolean \\| undefined")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"_error")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"_error")),(0,i.kt)("td",{parentName:"tr",align:null},"Gibt den Text f\xfcr eine Fehlermeldung an."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"string \\| undefined")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"_hideLabel")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"_hide-label")),(0,i.kt)("td",{parentName:"tr",align:null},"Versteckt das sichtbare Label des Elements."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"boolean \\| undefined")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"_hint")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"_hint")),(0,i.kt)("td",{parentName:"tr",align:null},"Gibt den Hinweistext an."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"string \\| undefined")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"''"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"_icon")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"_icon")),(0,i.kt)("td",{parentName:"tr",align:null},"Erm\xf6glicht das \xdcberschreiben der Icons f\xfcr die Checkbox."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"string \\| undefined \\| { checked: string; indeterminate?: string \\| undefined; unchecked?: string \\| undefined; } & { checked?: string \\| undefined; indeterminate: string; unchecked?: string \\| undefined; } & { checked?: string \\| undefined; indeterminate?: string \\| undefined; unchecked: string; }")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"_id")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"_id")),(0,i.kt)("td",{parentName:"tr",align:null},"Gibt die technische ID des Eingabefeldes an."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"string \\| undefined")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"_indeterminate")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"_indeterminate")),(0,i.kt)("td",{parentName:"tr",align:null},"Gibt an, ob die Checkbox weder ausgew\xe4hlt noch nicht ausgew\xe4hlt ist."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"boolean \\| undefined")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"_name")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"_name")),(0,i.kt)("td",{parentName:"tr",align:null},"Gibt den technischen Namen des Eingabefeldes an."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"string \\| undefined")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"_on")),(0,i.kt)("td",{parentName:"tr",align:null},"--"),(0,i.kt)("td",{parentName:"tr",align:null},"Gibt die EventCallback-Funktionen f\xfcr das Input-Event an."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"InputTypeOnBlur & InputTypeOnClick & InputTypeOnChange & InputTypeOnFocus \\| undefined")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"_required")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"_required")),(0,i.kt)("td",{parentName:"tr",align:null},"Macht das Eingabeelement zu einem Pflichtfeld."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"boolean \\| undefined")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"_tabIndex")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"_tab-index")),(0,i.kt)("td",{parentName:"tr",align:null},"Gibt an, welchen Tab-Index dieses Input hat."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"number \\| undefined")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"_touched")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"_touched")),(0,i.kt)("td",{parentName:"tr",align:null},"Gibt an, ob dieses Eingabefeld von Nutzer:innen einmal besucht/ber\xfchrt wurde."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"boolean \\| undefined")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"false"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"_type")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"_type")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("span",{class:"text-red-500"},(0,i.kt)("strong",{parentName:"td"},"[DEPRECATED]"))," Verwende stattdessen das Attribute _variant.",(0,i.kt)("br",null),(0,i.kt)("br",null),"Gibt an, welchen Type das Input haben soll."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},'"button" \\| "checkbox" \\| "switch" \\| undefined')),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"_value")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"_value")),(0,i.kt)("td",{parentName:"tr",align:null},"Gibt den Schl\xfcssel/Namen der Checkbox an. ({ ","[value]",": ","[checked]"," })"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"string \\| undefined")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"_variant")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"_variant")),(0,i.kt)("td",{parentName:"tr",align:null},"Gibt an, welchen Type das Input haben soll."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},'"button" \\| "checkbox" \\| "switch" \\| undefined')),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"undefined"))))),(0,i.kt)("h2",{id:"dependencies"},"Dependencies"),(0,i.kt)("h3",{id:"depends-on"},"Depends on"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"kol-input"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"./icon"},"kol-icon"))),(0,i.kt)("h3",{id:"graph"},"Graph"),(0,i.kt)("mermaid",{value:"graph TD;\n  kol-input-checkbox --\x3e kol-input\n  kol-input-checkbox --\x3e kol-icon\n  kol-input --\x3e kol-icon\n  kol-input --\x3e kol-button-wc\n  kol-input --\x3e kol-alert\n  kol-button-wc --\x3e kol-span-wc\n  kol-button-wc --\x3e kol-tooltip\n  kol-span-wc --\x3e kol-icon\n  kol-tooltip --\x3e kol-span-wc\n  kol-alert --\x3e kol-heading-wc\n  kol-alert --\x3e kol-button-wc\n  kol-alert --\x3e kol-icon\n  style kol-input-checkbox fill:#f9f,stroke:#333,stroke-width:4px"}),(0,i.kt)("hr",null))}d.isMDXComponent=!0;var o=n(64717);const p={title:"InputCheckbox",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die InputCheckbox-Komponente.",tags:["InputCheckbox","Beschreibung","Spezifikation","Beispiele"]},u=void 0,k={unversionedId:"components/input-checkbox",id:"components/input-checkbox",title:"InputCheckbox",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die InputCheckbox-Komponente.",source:"@site/docs/30-components/input-checkbox.mdx",sourceDirName:"30-components",slug:"/components/input-checkbox",permalink:"/docs/components/input-checkbox",draft:!1,tags:[{label:"InputCheckbox",permalink:"/docs/tags/input-checkbox"},{label:"Beschreibung",permalink:"/docs/tags/beschreibung"},{label:"Spezifikation",permalink:"/docs/tags/spezifikation"},{label:"Beispiele",permalink:"/docs/tags/beispiele"}],version:"current",frontMatter:{title:"InputCheckbox",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die InputCheckbox-Komponente.",tags:["InputCheckbox","Beschreibung","Spezifikation","Beispiele"]},sidebar:"tutorialSidebar",previous:{title:"InputAdapterLeanup",permalink:"/docs/components/input-adapter-leanup"},next:{title:"InputColor",permalink:"/docs/components/input-color"}},c={},m=[{value:"Beispiele",id:"beispiele",level:2}],s={toc:m},b="wrapper";function g(e){let{components:t,...n}=e;return(0,i.kt)(b,(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(d,{mdxType:"Readme"}),(0,i.kt)("h2",{id:"beispiele"},"Beispiele"),(0,i.kt)(o._,{component:"input-checkbox",sample:"basic",mdxType:"Configurator"}))}g.isMDXComponent=!0}}]);