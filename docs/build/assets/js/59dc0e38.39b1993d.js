"use strict";(self.webpackChunk_public_ui_website=self.webpackChunk_public_ui_website||[]).push([[7370],{9613:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>b});var r=n(9496);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=i,b=d["".concat(u,".").concat(m)]||d[m]||c[m]||a;return n?r.createElement(b,o(o({ref:t},p),{},{components:n})):r.createElement(b,o({ref:t},p))}));function b(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=m;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[d]="string"==typeof e?e:i,o[1]=l;for(var s=2;s<a;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},816:(e,t,n)=>{n.d(t,{_:()=>u});var r=n(7770),i=n(9496);const a=function(e,t,n,r,i){return void 0===i&&(i="editor"),`${e}&module=${r}&initialpath=%23%2F${t}%2F${n}&view=${i}`},o={width:"100%",height:"500px",border:"0",overflow:"hidden"},l=e=>{let{url:t}=e;return i.createElement("div",{className:"m-2"},i.createElement("iframe",{src:t,style:o,title:"kolibri-public-ui-code-samples",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}),i.createElement(r.Nv,{_href:t,_label:"",_target:"codesandbox"},i.createElement("img",{alt:"CodeSandbox-Schalter",src:"https://codesandbox.io/static/img/play-codesandbox.svg"})))},u=e=>{let{component:t,sample:n}=e;const[o,u]=(0,i.useState)("Preview"),s="https://codesandbox.io/embed/kolibri-public-ui-react-samples-w5u37c?fontsize=14&hidenavigation=1&autoresize=1&theme=dark",p=`%2Fsrc%2Fsamples%2F${t}%2F${n}`,d={angular:`${p}.html`,react:`${p}.tsx`,vue:`${p}.vue`,webcomponent:`${p}.html`},c={onSelect:(e,t)=>{switch(t){case 1:u((()=>"Angular"));break;case 2:u((()=>"React"));break;case 3:u((()=>"Vue"));break;case 4:u((()=>"Web Component"));break;default:u((()=>"Preview"))}}};return i.createElement(r.UD,{_ariaLabel:"Code-Beispiel",_on:c,_tabs:[{_label:"Vorschau"},{_disabled:!0,_label:"Angular"},{_label:"React"},{_disabled:!0,_label:"Vue"},{_disabled:!0,_label:"Web Component"}]},i.createElement("div",null,"Preview"===o&&i.createElement(l,{url:a(s,t,n,d.react,"preview")})),i.createElement("div",null,"Angular"===o&&i.createElement(l,{url:a(s,t,n,d.angular)})),i.createElement("div",null,"React"===o&&i.createElement(l,{url:a(s,t,n,d.react)})),i.createElement("div",null,"Vue"===o&&i.createElement(l,{url:a(s,t,n,d.vue)})),i.createElement("div",null,"Web Component"===o&&i.createElement(l,{url:a(s,t,n,d.webcomponent)})))}},7279:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>b,frontMatter:()=>u,metadata:()=>p,toc:()=>c});var r=n(5882),i=(n(9496),n(9613));const a={toc:[{value:"Konstruktion",id:"konstruktion",level:2},{value:"Code",id:"code",level:3},{value:"Beispiel",id:"beispiel",level:3},{value:"Verwendung",id:"verwendung",level:2},{value:"Einfache ButtonGroup",id:"einfache-buttongroup",level:3},{value:"ButtonGroup mit Text, Icon und Text mit Icon",id:"buttongroup-mit-text-icon-und-text-mit-icon",level:3},{value:"Ausgabe verschiedener Styles f\xfcr Buttons in der ButtonGroup",id:"ausgabe-verschiedener-styles-f\xfcr-buttons-in-der-buttongroup",level:3},{value:"Optische Ausrichtung",id:"optische-ausrichtung",level:3},{value:"Best practices",id:"best-practices",level:3},{value:"Barrierefreiheit",id:"barrierefreiheit",level:2},{value:"Tastatursteuerung",id:"tastatursteuerung",level:3},{value:"Links und Referenzen",id:"links-und-referenzen",level:2},{value:"Dependencies",id:"dependencies",level:2},{value:"Used by",id:"used-by",level:3},{value:"Graph",id:"graph",level:3}]};function o(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},a,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Buttons")," dienen dazu, Nutzer:innen Auswahlm\xf6glichkeiten f\xfcr Aktionen anzuzeigen und diese in einer klaren Hierarchie anzuordnen. Sie helfen den Nutzer:innen, die wichtigsten Aktionen einer Seite oder innerhalb eines Applikation zu finden und erm\xf6glichen es ihm, diese Aktionen auszuf\xfchren."),(0,i.kt)("p",null,"Die ",(0,i.kt)("strong",{parentName:"p"},"ButtonGroup"),"-Komponente fasst mehrere Buttons zu einer optischen und funktionalen Einheit zusammen."),(0,i.kt)("h2",{id:"konstruktion"},"Konstruktion"),(0,i.kt)("p",null,"Die Komponente ",(0,i.kt)("strong",{parentName:"p"},"ButtonGroup")," besteht aus einem Hauptelement ",(0,i.kt)("inlineCode",{parentName:"p"},"<kol-button-group></kol-button-group>"),". In ihm werden beliebig viele ",(0,i.kt)("strong",{parentName:"p"},"Button"),"-Komponenten zu einer Gruppe zusammengefasst. Die einzelnen ",(0,i.kt)("strong",{parentName:"p"},"Buttons")," entsprechen in ihrer Konstruktion der Beschreibung\nzur ",(0,i.kt)("strong",{parentName:"p"},"Button"),"-Komponente."),(0,i.kt)("h3",{id:"code"},"Code"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},'<kol-button-group>\n  <kol-button _label="Speichern" _variant="primary"></<kol-button>\n  <kol-button _label="Speichern & Schlie\xdfen" _variant="normal"></<kol-button>\n  <kol-button _label="Abbrechen" _variant="secondary"></<kol-button>\n  <kol-button _label="L\xf6schen" _variant="danger"></<kol-button>\n  <kol-button _label="Ghost" _variant="ghost"></kol-button>\n  <kol-button _label="Deaktiviert" _disabled></<kol-button>\n</kol-button-group>\n')),(0,i.kt)("h3",{id:"beispiel"},"Beispiel"),(0,i.kt)("kol-button-group",null,(0,i.kt)("kol-button",{_label:"Speichern",_variant:"primary"}),(0,i.kt)("kol-button",{_label:"Speichern & Schlie\xdfen",_variant:"normal"}),(0,i.kt)("kol-button",{_label:"Abbrechen",_variant:"secondary"}),(0,i.kt)("kol-button",{_label:"L\xf6schen",_variant:"danger"}),(0,i.kt)("kol-button",{_label:"Ghost",_variant:"ghost"}),(0,i.kt)("kol-button",{_label:"Deaktiviert",_disabled:!0})),(0,i.kt)("h2",{id:"verwendung"},"Verwendung"),(0,i.kt)("h3",{id:"einfache-buttongroup"},"Einfache ButtonGroup"),(0,i.kt)("p",null,"Im einfachsten Fall besteht die ",(0,i.kt)("strong",{parentName:"p"},"ButtonGroup"),"-Komponente aus einer Liste beschrifteter Schaltfl\xe4chen. F\xfcr die Beschriftung der Buttons wird lediglich das Attribut ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},'_label="Ihre Beschriftung"'))," verwendet."),(0,i.kt)("h3",{id:"buttongroup-mit-text-icon-und-text-mit-icon"},"ButtonGroup mit Text, Icon und Text mit Icon"),(0,i.kt)("p",null,"\xdcber das Attribut ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},'_icon="xxx"'))," wird festgelegt, ob und welches Icon verwendet werden soll."),(0,i.kt)("p",null,"Eine \xdcbersicht \xfcber die zur Verf\xfcgung stehenden Icons in KoliBri finden Sie ",(0,i.kt)("a",{parentName:"p",href:"https://icofont.com/icons"},"hier"),"."),(0,i.kt)("p",null,"\xdcber das Attribut ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"_icon-only"))," legen Sie fest, ob nur das Icon angezeigt werden soll. Der Inhalt des Attributs ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"_label"))," wird nicht mehr angezeigt."),(0,i.kt)("h3",{id:"ausgabe-verschiedener-styles-f\xfcr-buttons-in-der-buttongroup"},"Ausgabe verschiedener Styles f\xfcr Buttons in der ButtonGroup"),(0,i.kt)("p",null,"F\xfcr die Standardausgabe eines Buttons stehen die Werte ",(0,i.kt)("strong",{parentName:"p"},"primary"),", ",(0,i.kt)("strong",{parentName:"p"},"secondary"),", ",(0,i.kt)("strong",{parentName:"p"},"normal"),", ",(0,i.kt)("strong",{parentName:"p"},"danger")," und ",(0,i.kt)("strong",{parentName:"p"},"ghost")," zur Verf\xfcgung. Hier\xfcber wird die farbliche Gestaltung des Buttons festgelegt."),(0,i.kt)("h3",{id:"optische-ausrichtung"},"Optische Ausrichtung"),(0,i.kt)("p",null,"\xdcber das Attribut ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"_nestled"))," kann eine optische Ausrichtung der ButtonGroup bestimmt werden. An der angegebenen Position werden die abgerundeten Ecken entfernt, so dass der Eindruck einer Button-Leiste entsteht. M\xf6glich sind die Werte ",(0,i.kt)("inlineCode",{parentName:"p"},"bottom"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"top"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"left"),"und ",(0,i.kt)("inlineCode",{parentName:"p"},"right"),"."),(0,i.kt)("h3",{id:"best-practices"},"Best practices"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Verwenden Sie eine prim\xe4re Schaltfl\xe4che f\xfcr die n\xe4chstbeste Aktion. Verbleibende Calls-to-Actions sollten als sekund\xe4re Schaltfl\xe4che dargestellt werden."),(0,i.kt)("li",{parentName:"ul"},"Verwenden Sie Schaltfl\xe4chen an einheitlichen Stellen in der Benutzeroberfl\xe4che, um die Benutzererfahrung zu verbessern."),(0,i.kt)("li",{parentName:"ul"},"Verwenden Sie nur eine prim\xe4re Schaltfl\xe4che je Viewport. Auf der gesamten Seite kann ein Button-Style beliebig oft auftreten."),(0,i.kt)("li",{parentName:"ul"},"Die Beschriftung des Button muss die Aktion beschreiben, die die Schaltfl\xe4che ausf\xfchrt. Sie sollte ein Verb enthalten (z.B. Speichern). Verwenden Sie pr\xe4gnante, spezifische, selbsterkl\xe4rende Beschriftungen."),(0,i.kt)("li",{parentName:"ul"},'Schaltfl\xe4chenbeschriftungen sollten immer dann auch ein Nomen enthalten, wenn es Raum f\xfcr Interpretationen dar\xfcber gibt, wof\xfcr das Verb zust\xe4ndig ist. Verwenden Sie keine generischen Bezeichnungen wie "OK", insbesondere nicht im Fehlerfall. Fehler sind nie "OK".'),(0,i.kt)("li",{parentName:"ul"},"Wenn Sie mehrere Buttons kombinieren oder anordnen m\xf6chten, verwenden Sie die ",(0,i.kt)("strong",{parentName:"li"},"ButtonGroup"),"-Komponente."),(0,i.kt)("li",{parentName:"ul"},'Verwenden Sie nicht mehrere Buttons im Style "prim\xe4r" in einer ',(0,i.kt)("strong",{parentName:"li"},"ButtonGroup"),"."),(0,i.kt)("li",{parentName:"ul"},"Verwenden Sie Buttons nicht als Link oder als Navigationselement.")),(0,i.kt)("h2",{id:"barrierefreiheit"},"Barrierefreiheit"),(0,i.kt)("p",null,"Bei Verwendung der ",(0,i.kt)("strong",{parentName:"p"},"ButtonGroup"),"-Komponente sind keine besonderen Ma\xdfnahmen in Bezug auf die barrierefreiheit zu ber\xfccksichtigen. Die innerhalb der ButtonGroup enthaltenen ",(0,i.kt)("strong",{parentName:"p"},"Button"),"-Komponenten besitzen jedoch einige wichtige Aspekte in diesem Zusammenhang:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"In der Button-Komponente werden die optionalen ",(0,i.kt)("strong",{parentName:"li"},"Icons")," links ausgerichtet, um Nutzer","*","innen mit eingeschr\xe4nktem Sichtfeld eine bessere Bedienbarkeit zu erm\xf6glichen."),(0,i.kt)("li",{parentName:"ul"},"Die Farben der ",(0,i.kt)("strong",{parentName:"li"},"Variant-Typen")," ",(0,i.kt)("inlineCode",{parentName:"li"},"primary"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"secondary"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"normal"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"danger")," und ",(0,i.kt)("inlineCode",{parentName:"li"},"ghost")," wurden in Hinblick auf bestm\xf6glichen Kontrast gew\xe4hlt. Die Schriftfarbe ist per default immer wei\xdf.")),(0,i.kt)("h3",{id:"tastatursteuerung"},"Tastatursteuerung"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Taste"),(0,i.kt)("th",{parentName:"tr",align:null},"Funktion"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Tab")),(0,i.kt)("td",{parentName:"tr",align:null},"Springt den einzelnen Button der ButtonGroup an und fokussiert ihn.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Enter")),(0,i.kt)("td",{parentName:"tr",align:null},"\xd6ffnet den Link des fokussierten Button oder f\xfchrt dessen onClick-Methode aus.")))),(0,i.kt)("h2",{id:"links-und-referenzen"},"Links und Referenzen"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.w3.org/TR/wai-aria-practices/#button"},"https://www.w3.org/TR/wai-aria-practices/#button"))),(0,i.kt)("h2",{id:"dependencies"},"Dependencies"),(0,i.kt)("h3",{id:"used-by"},"Used by"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"."},"kol-button-group")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"./tabs"},"kol-tabs"))),(0,i.kt)("h3",{id:"graph"},"Graph"),(0,i.kt)("mermaid",{value:"graph TD;\n  kol-button-group --\x3e kol-button-group-wc\n  kol-tabs --\x3e kol-button-group-wc\n  style kol-button-group-wc fill:#f9f,stroke:#333,stroke-width:4px"}),(0,i.kt)("hr",null))}o.isMDXComponent=!0;var l=n(816);const u={title:"ButtonGroup",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die ButtonGroup-Komponente.",tags:["ButtonGroup","Beschreibung","Spezifikation","Beispiele"]},s=void 0,p={unversionedId:"components/button-group",id:"components/button-group",title:"ButtonGroup",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die ButtonGroup-Komponente.",source:"@site/docs/30-components/button-group.mdx",sourceDirName:"30-components",slug:"/components/button-group",permalink:"/docs/components/button-group",draft:!1,tags:[{label:"ButtonGroup",permalink:"/docs/tags/button-group"},{label:"Beschreibung",permalink:"/docs/tags/beschreibung"},{label:"Spezifikation",permalink:"/docs/tags/spezifikation"},{label:"Beispiele",permalink:"/docs/tags/beispiele"}],version:"current",frontMatter:{title:"ButtonGroup",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die ButtonGroup-Komponente.",tags:["ButtonGroup","Beschreibung","Spezifikation","Beispiele"]},sidebar:"tutorialSidebar",previous:{title:"Breadcrumb",permalink:"/docs/components/breadcrumb"},next:{title:"ButtonLink",permalink:"/docs/components/button-link"}},d={},c=[{value:"Beispiele",id:"beispiele",level:2},{value:"ButtonGroup",id:"buttongroup",level:3}],m={toc:c};function b(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(o,{mdxType:"Readme"}),(0,i.kt)("h2",{id:"beispiele"},"Beispiele"),(0,i.kt)("h3",{id:"buttongroup"},"ButtonGroup"),(0,i.kt)(l._,{component:"button-group",sample:"basic",mdxType:"Configurator"}))}b.isMDXComponent=!0}}]);