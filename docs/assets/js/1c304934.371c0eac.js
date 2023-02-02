"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[8924],{9613:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>c});var a=n(9496);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),p=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(o.Provider,{value:t},e.children)},m="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,u=d(e,["components","mdxType","originalType","parentName"]),m=p(n),k=r,c=m["".concat(o,".").concat(k)]||m[k]||s[k]||l;return n?a.createElement(c,i(i({ref:t},u),{},{components:n})):a.createElement(c,i({ref:t},u))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=k;var d={};for(var o in t)hasOwnProperty.call(t,o)&&(d[o]=t[o]);d.originalType=e,d[m]="string"==typeof e?e:r,i[1]=d;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},816:(e,t,n)=>{n.d(t,{_:()=>o});var a=n(8556),r=n(9496);const l=function(e,t,n,a,r){return void 0===r&&(r="editor"),`${e}&module=${a}&initialpath=%23%2F${t}%2F${n}&view=${r}`},i={width:"100%",height:"500px",border:"0",overflow:"hidden"},d=e=>{let{url:t}=e;return r.createElement("div",{className:"m-2"},r.createElement("iframe",{src:t,style:i,title:"kolibri-public-ui-code-samples",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}),r.createElement(a.Nv,{_href:t,_label:"",_target:"codesandbox"},r.createElement("img",{alt:"CodeSandbox-Schalter",src:"https://codesandbox.io/static/img/play-codesandbox.svg"})))},o=e=>{let{component:t,sample:n}=e;const[i,o]=(0,r.useState)("Preview"),p="https://codesandbox.io/embed/kolibri-public-ui-react-samples-w5u37c?fontsize=14&hidenavigation=1&autoresize=1&theme=dark",u=`%2Fsrc%2Fsamples%2F${t}%2F${n}`,m={angular:`${u}.html`,react:`${u}.tsx`,vue:`${u}.vue`,webcomponent:`${u}.html`},s={onSelect:(e,t)=>{switch(t){case 1:o((()=>"Angular"));break;case 2:o((()=>"React"));break;case 3:o((()=>"Vue"));break;case 4:o((()=>"Web Component"));break;default:o((()=>"Preview"))}}};return r.createElement(a.UD,{_ariaLabel:"Code-Beispiel",_on:s,_tabs:[{_label:"Vorschau"},{_disabled:!0,_label:"Angular"},{_label:"React"},{_disabled:!0,_label:"Vue"},{_disabled:!0,_label:"Web Component"}]},r.createElement("div",null,"Preview"===i&&r.createElement(d,{url:l(p,t,n,m.react,"preview")})),r.createElement("div",null,"Angular"===i&&r.createElement(d,{url:l(p,t,n,m.angular)})),r.createElement("div",null,"React"===i&&r.createElement(d,{url:l(p,t,n,m.react)})),r.createElement("div",null,"Vue"===i&&r.createElement(d,{url:l(p,t,n,m.vue)})),r.createElement("div",null,"Web Component"===i&&r.createElement(d,{url:l(p,t,n,m.webcomponent)})))}},4167:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>p,default:()=>c,frontMatter:()=>o,metadata:()=>u,toc:()=>s});var a=n(5882),r=(n(9496),n(9613));const l={toc:[{value:"Konstruktion",id:"konstruktion",level:2},{value:"Code",id:"code",level:3},{value:"Beispiel",id:"beispiel",level:3},{value:"Verwendung",id:"verwendung",level:2},{value:"Best practices",id:"best-practices",level:3},{value:"Barrierefreiheit",id:"barrierefreiheit",level:2},{value:"Tastatursteuerung",id:"tastatursteuerung",level:3},{value:"Links und Referenzen",id:"links-und-referenzen",level:2},{value:"Properties",id:"properties",level:2},{value:"Dependencies",id:"dependencies",level:2},{value:"Depends on",id:"depends-on",level:3},{value:"Graph",id:"graph",level:3}]};function i(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Der Input-Typ ",(0,r.kt)("strong",{parentName:"p"},"Color")," erzeugt ein Auswahlfeld f\xfcr die Definition einer beliebigen Farbe. Die Angabe der Farbe kann in hexadezimaler Schreibweise, in RGB-Schreibweise oder in HSL-Schreibweise erfolgen. M\xf6glich ist die Auswahl einer Farbe \xfcber einen Picker oder auch die exakte Eingabe von Farbwerten."),(0,r.kt)("h2",{id:"konstruktion"},"Konstruktion"),(0,r.kt)("h3",{id:"code"},"Code"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'<kol-input-color _id="meine_farbe" _name="meine_farbe" _value="#ff0000">\n    Hintergrundfarbe\n</kol-input-color>\n')),(0,r.kt)("h3",{id:"beispiel"},"Beispiel"),(0,r.kt)("p",null,(0,r.kt)("kol-input-color",{_id:"meine_farbe",_name:"meine_farbe",_value:"#ff0000"},"Hintergrundfarbe")),(0,r.kt)("h2",{id:"verwendung"},"Verwendung"),(0,r.kt)("p",null,"Stellen Sie die Default-Farbe \xfcber das Attribut ",(0,r.kt)("inlineCode",{parentName:"p"},"_value")," ein. Verwenden Sie hierf\xfcr eine hexadezimale Schreibweise (#xxxxxx)."),(0,r.kt)("h3",{id:"best-practices"},"Best practices"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Achten Sie darauf, die Pflichtfelder ",(0,r.kt)("inlineCode",{parentName:"li"},"id")," und ",(0,r.kt)("inlineCode",{parentName:"li"},"name")," korrekt zu setzen.")),(0,r.kt)("h2",{id:"barrierefreiheit"},"Barrierefreiheit"),(0,r.kt)("p",null,"Beachten Sie, dass die ",(0,r.kt)("strong",{parentName:"p"},"InputColor"),"-Komponente nicht vollst\xe4ndig barrierefrei ist. Die Auswahl einer Farbe ist \xfcber Tastatursteuerung m\xf6glich. Die Ausgabe der gew\xe4hlten Farbe \xfcber Screenreader ist jedoch technisch eingeschr\xe4nkt."),(0,r.kt)("p",null,"F\xfcr eine vollst\xe4ndige Barrierefreiheit pr\xfcfen Sie die Verwendung einer vorgefertigten Farbauswahlliste, z.B. \xfcber Checkboxen oder Select-Felder."),(0,r.kt)("p",null,"Achten Sie darauf, jeder Checkbox ein Label zuzuweisen, da dieses von Screenreadern vorgelesen wird und so eine eindeutige Identifikation des Eingabefeldes erm\xf6glicht."),(0,r.kt)("h3",{id:"tastatursteuerung"},"Tastatursteuerung"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Taste"),(0,r.kt)("th",{parentName:"tr",align:null},"Funktion"),(0,r.kt)("th",{parentName:"tr",align:null}))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Tab")),(0,r.kt)("td",{parentName:"tr",align:null},"Fokussiert das Eingabefeld. Bei ge\xf6ffnetem Dialogfeld kann mit der Tab-Taste zwischen den Steuerfeldern gewechselt werden."),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Enter")),(0,r.kt)("td",{parentName:"tr",align:null},"\xd6ffnet bzw. schlie\xdft das Dialogfeld der Komponente. Bei fokussierter Pipette wird mit der Enter-Taste die Funktion ",(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("em",{parentName:"strong"},"Pipette"))," gestartet."),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ESC")),(0,r.kt)("td",{parentName:"tr",align:null},"Beendet die Pipetten-Funktion. ."),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"`Pfeil-Tasten (rechts"),(0,r.kt)("td",{parentName:"tr",align:null},"links)`"),(0,r.kt)("td",{parentName:"tr",align:null},"Verschieben bei fokussiertem Feld ",(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("em",{parentName:"strong"},"Farbspektrum"))," den Auswahlpunkt.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"`Pfeil-Tasten (oben"),(0,r.kt)("td",{parentName:"tr",align:null},"unten)`"),(0,r.kt)("td",{parentName:"tr",align:null},"\xc4ndert bei fokussiertem Feld ",(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("em",{parentName:"strong"},"Farbsystem"))," die Auswahl.")))),(0,r.kt)("h2",{id:"links-und-referenzen"},"Links und Referenzen"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://medium.com/@gavyn/til-autofocus-inputs-are-an-accessibility-problem-32ced60c3109"},"https://medium.com/@gavyn/til-autofocus-inputs-are-an-accessibility-problem-32ced60c3109")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.jotform.com/blog/html5-datalists-what-you-need-to-know-78024/"},"https://www.jotform.com/blog/html5-datalists-what-you-need-to-know-78024/"))),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Attribute"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_accessKey")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_access-key")),(0,r.kt)("td",{parentName:"tr",align:null},"Gibt an, mit welcher Tastenkombination man das Input ausl\xf6sen oder fokussieren kann."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string \\| undefined")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_alert")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_alert")),(0,r.kt)("td",{parentName:"tr",align:null},"Gibt an, ob die Fehlermeldung vorgelesen werden soll, wenn es eine gibt."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"boolean \\| undefined")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"true"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_autoComplete")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_auto-complete")),(0,r.kt)("td",{parentName:"tr",align:null},"Gibt an, ob das Eingabefeld autovervollst\xe4ndigt werden kann."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"off" \\| "on" \\| undefined')),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_disabled")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_disabled")),(0,r.kt)("td",{parentName:"tr",align:null},"Gibt an, ob das Eingabefeld aktiviert oder deaktiviert ist."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"boolean \\| undefined")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_error")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_error")),(0,r.kt)("td",{parentName:"tr",align:null},"Gibt den Text f\xfcr eine Fehlermeldung an."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string \\| undefined")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_hideLabel")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_hide-label")),(0,r.kt)("td",{parentName:"tr",align:null},"Gibt an, ob das Eingabefeld kein sichtbares Label haben soll."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"boolean \\| undefined")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_hint")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_hint")),(0,r.kt)("td",{parentName:"tr",align:null},"Gibt den Text f\xfcr eine Hinweistext an."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string \\| undefined")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"''"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_icon")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_icon")),(0,r.kt)("td",{parentName:"tr",align:null},"Erm\xf6glicht das Anzeigen von Icons links und/oder rechts am Rand des Eingabefeldes."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string \\| undefined \\| { right: string \\| KoliBriCustomIcon; left?: string \\| KoliBriCustomIcon \\| undefined; } \\| { right?: string \\| KoliBriCustomIcon \\| undefined; left: string \\| KoliBriCustomIcon; }")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_id")," ",(0,r.kt)("em",{parentName:"td"},"(required)")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_id")),(0,r.kt)("td",{parentName:"tr",align:null},"Gibt die technische ID des Eingabefeldes an."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_list")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_list")),(0,r.kt)("td",{parentName:"tr",align:null},"Gibt die Liste der Vorschlagsw\xf6rter an."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string \\| string[] \\| undefined")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_name")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_name")),(0,r.kt)("td",{parentName:"tr",align:null},"Gibt den technischen Namen des Eingabefeldes an."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string \\| undefined")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_on")),(0,r.kt)("td",{parentName:"tr",align:null},"--"),(0,r.kt)("td",{parentName:"tr",align:null},"Gibt die EventCallback-Funktionen f\xfcr das Input-Event an."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"InputTypeOnBlur & InputTypeOnClick & InputTypeOnChange & InputTypeOnFocus \\| undefined")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_smartButton")),(0,r.kt)("td",{parentName:"tr",align:null},"--"),(0,r.kt)("td",{parentName:"tr",align:null},"Erm\xf6glicht einen Schalter ins das Eingabefeld mit einer beliebigen Aktion zu einzuf\xfcgen (nur Icon-Only)."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'undefined \\| { _label: string; } & { _ariaControls?: string \\| undefined; _ariaCurrent?: AriaCurrent \\| undefined; _ariaExpanded?: boolean \\| undefined; _ariaLabel?: string \\| undefined; _ariaSelected?: boolean \\| undefined; _disabled?: boolean \\| undefined; _icon?: Stringified<KoliBriIconProp> \\| undefined; _iconAlign?: Alignment \\| undefined; _iconOnly?: boolean \\| undefined; _role?: "tab" \\| undefined; _tabIndex?: number \\| undefined; _tooltipAlign?: Alignment \\| undefined; _accessKey?: string \\| undefined; _id?: string \\| undefined; _on?: KoliBriButtonCallbacks<unknown> \\| undefined; _type?: KoliBriButtonType \\| undefined; _value?: unknown; _customClass?: string \\| undefined; _variant?: KoliBriButtonVariant \\| undefined; }')),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_tabIndex")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_tab-index")),(0,r.kt)("td",{parentName:"tr",align:null},"Gibt an, welchen Tab-Index dieses Input hat."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"number \\| undefined")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_touched")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_touched")),(0,r.kt)("td",{parentName:"tr",align:null},"Gibt an, ob dieses Eingabefeld von Nutzer:innen einmal besucht/ber\xfchrt wurde."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"boolean \\| undefined")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_value")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_value")),(0,r.kt)("td",{parentName:"tr",align:null},"Gibt den Wert des Eingabefeldes an."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string \\| undefined")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"undefined"))))),(0,r.kt)("h2",{id:"dependencies"},"Dependencies"),(0,r.kt)("h3",{id:"depends-on"},"Depends on"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"kol-input")),(0,r.kt)("h3",{id:"graph"},"Graph"),(0,r.kt)("mermaid",{value:"graph TD;\n  kol-input-color --\x3e kol-input\n  kol-input --\x3e kol-icon\n  kol-input --\x3e kol-button-wc\n  kol-input --\x3e kol-alert\n  kol-button-wc --\x3e kol-span-wc\n  kol-button-wc --\x3e kol-tooltip\n  kol-span-wc --\x3e kol-icon\n  kol-tooltip --\x3e kol-badge\n  kol-badge --\x3e kol-span-wc\n  kol-badge --\x3e kol-button-wc\n  kol-alert --\x3e kol-heading-wc\n  kol-alert --\x3e kol-button-wc\n  kol-alert --\x3e kol-icon\n  style kol-input-color fill:#f9f,stroke:#333,stroke-width:4px"}),(0,r.kt)("hr",null))}i.isMDXComponent=!0;var d=n(816);const o={title:"InputColor",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die InputColor-Komponente.",tags:["InputColor","Beschreibung","Spezifikation","Beispiele"]},p=void 0,u={unversionedId:"components/input-color",id:"components/input-color",title:"InputColor",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die InputColor-Komponente.",source:"@site/docs/30-components/input-color.mdx",sourceDirName:"30-components",slug:"/components/input-color",permalink:"/docs/components/input-color",draft:!1,tags:[{label:"InputColor",permalink:"/docs/tags/input-color"},{label:"Beschreibung",permalink:"/docs/tags/beschreibung"},{label:"Spezifikation",permalink:"/docs/tags/spezifikation"},{label:"Beispiele",permalink:"/docs/tags/beispiele"}],version:"current",frontMatter:{title:"InputColor",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die InputColor-Komponente.",tags:["InputColor","Beschreibung","Spezifikation","Beispiele"]},sidebar:"tutorialSidebar",previous:{title:"InputCheckbox",permalink:"/docs/components/input-checkbox"},next:{title:"InputDate",permalink:"/docs/components/input-date"}},m={},s=[{value:"Beispiele",id:"beispiele",level:2}],k={toc:s};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(i,{mdxType:"Readme"}),(0,r.kt)("h2",{id:"beispiele"},"Beispiele"),(0,r.kt)(d._,{component:"input-color",sample:"basic",mdxType:"Configurator"}))}c.isMDXComponent=!0}}]);