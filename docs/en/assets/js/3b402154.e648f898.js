"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[7342],{53808:(e,t,n)=>{n.d(t,{_:()=>d});var a=n(98587),l=n(50959);const i=function(e,t,n,a,l){return void 0===l&&(l="editor"),`${e}&module=${a}&initialpath=%23%2F${t}%2F${n}&view=${l}`},r={width:"100%",height:"500px",border:"0",overflow:"hidden"},o=e=>{let{url:t}=e;return l.createElement("div",{className:"m-2"},l.createElement("iframe",{src:t,style:r,title:"kolibri-public-ui-code-samples",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}),l.createElement(a.Nv,{_href:t,_label:"",_target:"codesandbox"},l.createElement("img",{alt:"CodeSandbox-Schalter",src:"https://codesandbox.io/static/img/play-codesandbox.svg"})))},d=e=>{let{component:t,sample:n}=e;const[d,s]=(0,l.useState)("Preview"),u="https://codesandbox.io/embed/kolibri-public-ui-react-samples-w5u37c?fontsize=14&hidenavigation=1&autoresize=1&theme=dark",m=`%2Fsrc%2Fsamples%2F${t}%2F${n}`,c={angular:`${m}.html`,react:`${m}.tsx`,vue:`${m}.vue`,webcomponent:`${m}.html`},p=`/sample-react/#/${t}/${n}`,k={onSelect:(e,t)=>{switch(t){case 1:s((()=>"Angular"));break;case 2:s((()=>"React"));break;case 3:s((()=>"Vue"));break;case 4:s((()=>"Web Component"));break;default:s((()=>"Preview"))}}};return l.createElement(a.UD,{className:"w-full",_ariaLabel:"Code-Beispiel",_on:k,_tabs:[{_label:"Vorschau"},{_disabled:!0,_label:"Angular"},{_label:"React"},{_disabled:!0,_label:"Vue"},{_disabled:!0,_label:"Web Component"}]},l.createElement("div",null,"Preview"===d&&l.createElement("iframe",{src:p,style:r,title:"kolibri-public-ui-code-samples",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"})),l.createElement("div",null,"Angular"===d&&l.createElement(o,{url:i(u,t,n,c.angular)})),l.createElement("div",null,"React"===d&&l.createElement(o,{url:i(u,t,n,c.react)})),l.createElement("div",null,"Vue"===d&&l.createElement(o,{url:i(u,t,n,c.vue)})),l.createElement("div",null,"Web Component"===d&&l.createElement(o,{url:i(u,t,n,c.webcomponent)})))}},13995:(e,t,n)=>{n.d(t,{_:()=>v});var a=n(9053),l=n(98587),i=n(50959),r=n(90391);function o(e){const{attribute:t,label:n,update:a,value:r}=e,[o,d]=(0,i.useState)(""),[s,u]=(0,i.useState)(""),[m,c]=(0,i.useState)(""),[p,k]=(0,i.useState)("");let g=!1,b=!1,h=!1,N=!1;t.type.includes("KoliBriAllIcon")?(g=!0,b=!0,h=!0,N=!0):(t.type.includes("KoliBriVerticalIcon")&&(h=!0,N=!0),t.type.includes("KoliBriHorizontalIcon")&&(g=!0,b=!0)),(0,i.useEffect)((()=>{if(!o||s||m||p){const e={};o&&(e.left=`codicon codicon-${o}`),s&&(e.right=`codicon codicon-${s}`),m&&(e.top=`codicon codicon-${m}`),p&&(e.bottom=`codicon codicon-${p}`),Object.keys(e).length&&a(t.name,JSON.stringify(e))}else a(t.name,`codicon codicon-${o}`)}),[o,s,m,p]);const v=["home","arrow-up","arrow-right","arrow-down","arrow-left"];return i.createElement("div",null,n,g?i.createElement(l.ox,{_summary:"Links"},i.createElement("div",{className:"flex flex-wrap"},v.map((e=>i.createElement(l.ic,{key:e,_icon:`codicon codicon-${e}`,_hideLabel:!0,_label:"",_on:{onClick:t=>d(e)}}))))):"",b?i.createElement(l.ox,{_summary:"Rechts"},i.createElement("div",{className:"flex flex-wrap"},v.map((e=>i.createElement(l.ic,{key:e,_icon:`codicon codicon-${e}`,_hideLabel:!0,_label:"",_on:{onClick:t=>u(e)}}))))):"",h?i.createElement(l.ox,{_summary:"Oben"},i.createElement("div",{className:"flex flex-wrap"},v.map((e=>i.createElement(l.ic,{key:e,_icon:`codicon codicon-${e}`,_hideLabel:!0,_label:"",_on:{onClick:t=>c(e)}}))))):"",N?i.createElement(l.ox,{_summary:"Unten"},i.createElement("div",{className:"flex flex-wrap"},v.map((e=>i.createElement(l.ic,{key:e,_icon:`codicon codicon-${e}`,_hideLabel:!0,_label:"",_on:{onClick:t=>k(e)}}))))):"")}function d(e){const{label:t,name:n,update:a,value:r}=e;return(0,i.useEffect)((()=>{r||a(n,"#000000")}),[]),i.createElement(l.Np,{_on:{onChange:(e,t)=>a(n,t)},_value:r},t)}function s(e){const{name:t,label:n,types:a,update:r,value:o}=e,d=[];function s(e){return{label:e,value:e}}return a.includes("undefined")?(d.push({label:"-",value:void 0}),d.push(...a.filter((e=>"undefined"!==e)).map(s))):d.push(...a.filter((e=>"undefined"!==e)).map(s)),i.createElement(l.r7,{className:"my-2",_list:JSON.stringify(d),_on:{onChange:(e,n)=>r(t,n[0])},_value:o},n)}function u(e){const{attribute:t,update:n,value:a}=e,r=(0,i.useMemo)((()=>{let e=t.type.replace(/\\?"/g,"").split(" | ");return e=e.filter((e=>"KoliBriAllIcon ignorieren"!==e)),1===e.length?e[0]:e.includes("string")?"string":e.includes("number")?"number":e.includes("boolean")?"boolean":""}),[t]),u=(0,i.useMemo)((()=>{const e=t.type.split(" | ").map((e=>e.replace(/\\?"/g,""))),u=i.createElement(l.T5,{_title:t.description},t.name);switch(t.name){case"_color":return i.createElement(d,{name:t.name,label:u,update:n,value:a});case"_icon":return i.createElement(o,{attribute:t,label:u,update:n,value:a});default:switch(r){case"string":return i.createElement(l.WD,{className:"my-2",_on:{onChange:(e,a)=>n(t.name,a)},_value:a||""},u);case"number":return i.createElement(l.c2,{className:"my-2",_on:{onChange:(e,a)=>n(t.name,a)},_value:a},u);case"boolean":return i.createElement(l.TE,{className:"my-2",_checked:a,_on:{onChange:(e,a)=>n(t.name,a)},_variant:"switch"},u);default:return e.length>1?i.createElement(s,{label:u,name:t.name,types:e,update:n,value:a}):i.createElement("p",null,"Attribut: '",t.name,"'",i.createElement("br",null),"Typ: '",t.type,"'")}}}),[t,a]);return i.createElement(i.Fragment,null,u)}var m=n(80376),c=n(77192),p=n(85630),k=n.n(p);function g(e){const{tag:t,params:n}=e,a=Object.entries(n).filter((e=>"defaultValues"!==e[0]));let l="";const r=(0,i.useMemo)((()=>{let e="";return a.filter((e=>e[0].startsWith("slot-"))).forEach((t=>{const n=t[1],a=t[0].split("-")[1];if(n)if(n.match(/^<.*?>/)?.length){const t=n.indexOf(">");e+=n.substring(0,t)+` slot="${a}"`+n.substring(t)}else e+=`<div slot="${a}">${n}</div>`})),e}),[n]),o=a.filter((e=>!e[0].startsWith("slot-"))).filter((e=>!n.defaultValues.includes(e[0])));for(const[i,m]of o)if(m){let e="";switch(typeof m){case"string":e=` ${i}="${m.replace(/"/g,"'")}"`;break;case"number":e=` ${i}="${m.toString()}"`;break;case"boolean":e=m?` ${i}`:"";break;case"object":e=` ${i}="${JSON.stringify(m)}"`;break;default:e="Never give up hope, one day everything will be fixed."}l+=e}const d=`<kol-${t}${l}>${r}</kol-${t}>`;let s;try{s=(0,c.format)(d,{plugins:[k()],printWidth:80}).replace(/;\n$/,"")}catch(u){s=`\x3c!-- Formatter-Error: Slot-Markup is not valid HTML for formatting. --\x3e\n${d}`}return i.createElement("div",{className:"h-48 rounded-md overflow-hidden"},i.createElement(m.ZP,{defaultLanguage:"html",height:"100%",options:{automaticLayout:!0,fontSize:16,lineNumbers:"off",readOnly:!0},value:s}))}function b(e){const t={};Object.entries(e.params).filter((e=>!e[0].startsWith("slot-"))).forEach((e=>{t[e[0]]=e[1]}));const n=Object.entries(e.params).filter((e=>e[0].startsWith("slot-"))),a={abbr:l.T5,accordion:l.RZ,alert:l.K5,badge:l.Er,breadcrumb:l.lo,button:l.ic,"button-group":l.uz,"button-link":l.f6,card:l.Gc,details:l.ox,form:l.m5,heading:l.HA,icon:l.Jl,image:l.Cd,"indented-text":l.CV,"input-checkbox":l.TE,"input-color":l.Np,"input-date":l.O,"input-email":l.Lj,"input-file":l.CX,"input-number":l.c2,"input-password":l.z5,"input-radio":l.sy,"input-range":l.TQ,"input-text":l.WD,kolibri:l.Vs,link:l.Nv,"link-button":l.Kc,"link-group":l.$o,logo:l.QK,modal:l.Ud,nav:l.MA,pagination:l.Q4,popover:l.hV,progress:l.WR,quote:l.VZ,select:l.r7,"skip-nav":l.P,spin:l.qq,symbol:l.is,table:l.Vp,tabs:l.UD,textarea:l.Qs,toast:l.CO,tooltip:l.Ze,version:l.u_}[e.tag];return a?i.createElement(a,t,n.map((e=>i.createElement("div",{key:e[0],slot:e[0].replace("slot-",""),dangerouslySetInnerHTML:{__html:e[1]}})))):i.createElement("div",null,"Tag not implemented")}function h(e){const{description:t,name:n,update:a,value:l}=e;return i.createElement("div",{className:"bg-gray-100 my-2 rounded-lg p-2 border border-gray-300 border-solid"},i.createElement("b",null,n||"default"),": ",t,i.createElement("br",null),i.createElement(m.ML,{defaultLanguage:"html",height:"5em",onChange:e=>a(`slot-${n}`,e||""),options:{automaticLayout:!0,fontSize:16,lineNumbers:"off"},value:l}))}const N=["_smart-button","_icon-align"];function v(e){const[t,n]=(0,i.useState)(function(){const e={};return Object.values(a.p).forEach((t=>{const n=t.name.replace("kol-","");e[n]={defaultValues:[]},t.attributes.forEach((t=>{t.defaultValue&&(e[n][t.name]=t.defaultValue.replaceAll("'",""),e[n].defaultValues.push(t.name))}))})),e}()),[o,d]=(0,i.useState)("badge");(0,i.useEffect)((()=>{e.component&&d(e.component.replace("kol-",""))}),[e.component]),(0,i.useEffect)((()=>{!!a.p.find((e=>e.name===`kol-${o}`))?.attributes.find((e=>"_label"===e.name))&&!t[o]?._label&&m("_label","Label-Text");!!a.p.find((e=>e.name===`kol-${o}`))?.attributes.find((e=>"_heading"===e.name))&&!t[o]?._heading&&m("_heading","Heading-Text")}),[o]);const s=(0,i.useMemo)((()=>t[o]||{}),[t,o]);function m(e,t){n((n=>{const a={...n[o],[e]:t,defaultValues:n[o].defaultValues.filter((t=>t!==e))};return{...n,[o]:a}}))}const c=Object.values(a.p).find((e=>e.name===`kol-${o}`));return i.createElement(r.Z,null,(()=>i.createElement(i.Fragment,null,i.createElement(l.Er,{class:"mb-2",_label:"Beta",_color:"#b00"}),i.createElement("div",{className:"grid lg:grid-cols-3 gap-2"},i.createElement(l.UD,{className:"col-span-2",_ariaLabel:"Wechselnavigation zwischen Viewer und Code",_tabs:[{_label:"Viewer"},{_label:"Code"}]},i.createElement("div",{className:"p-2"},i.createElement(b,{tag:o,params:s})),i.createElement("div",{className:"lg:col-span-2"},i.createElement(g,{params:s,tag:o}))),i.createElement("div",{className:"grid gap-4 p-2 border-0 border-l border-solid"},i.createElement(l.HA,{_level:3,_label:"Konfigurator"}),i.createElement("div",null,i.createElement(l.HA,{_level:4,_label:"Properties"}),i.createElement("div",{className:"max-h-96 p-2 overflow-scroll mb-4"},c&&c.attributes.map((e=>i.createElement(i.Fragment,null,!N.includes(e.name)&&i.createElement(u,{key:e.name,attribute:e,update:m,value:s[e.name]})))),c&&0===c.slots.length&&i.createElement("span",{className:"text-gray-500"},"Keine Properties vorhanden")),i.createElement(l.HA,{_level:4,_label:"Slots"}),i.createElement("div",{className:"max-h-56 p-2 overflow-scroll"},c&&c.slots.map((e=>i.createElement(h,{key:e.name,description:e.description,name:e.name,update:m,value:s["slot-"+e.name]}))),c&&0===c.slots.length&&i.createElement("span",{className:"text-gray-500"},"Keine Slots vorhanden"))))))))}},45583:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>m,default:()=>h,frontMatter:()=>u,metadata:()=>c,toc:()=>k});var a=n(15882),l=(n(50959),n(17942));const i={toc:[{value:"Konstruktion",id:"konstruktion",level:2},{value:"Code",id:"code",level:3},{value:"Beispiel",id:"beispiel",level:3},{value:"Verwendung",id:"verwendung",level:2},{value:"Links in der Navigationsleiste definieren",id:"links-in-der-navigationsleiste-definieren",level:3},{value:"Kompakte Navigationsleiste anzeigen",id:"kompakte-navigationsleiste-anzeigen",level:3},{value:"Umschalter normale/kompakte Darstellung",id:"umschalter-normalekompakte-darstellung",level:3},{value:"Umschaltung horizontale/vertikale Ausrichtung",id:"umschaltung-horizontalevertikale-ausrichtung",level:3},{value:"Best practices",id:"best-practices",level:3},{value:"Anwendungsf\xe4lle",id:"anwendungsf\xe4lle",level:3},{value:"Barrierefreiheit",id:"barrierefreiheit",level:2},{value:"Tastatursteuerung",id:"tastatursteuerung",level:3},{value:"Properties",id:"properties",level:2},{value:"Dependencies",id:"dependencies",level:2},{value:"Depends on",id:"depends-on",level:3},{value:"Graph",id:"graph",level:3}]},r="wrapper";function o(e){let{components:t,...n}=e;return(0,l.kt)(r,(0,a.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Eine ",(0,l.kt)("strong",{parentName:"p"},"Navigationsleiste")," ist eine Gruppe von verwandten Links oder Navigationselementen, die durch Anklicken eine Aktion ausf\xfchren oder Inhalte anzeigen. Sie navigiert Nutzer:innen direkt zu bestimmten Inhalten der aktuellen Seite oder zu externen Seiten. Au\xdferdem dient sie Nutzer:innen (\xe4hnlich wie Registerkarten) als Steuerelement, um Inhalte anzuzeigen, auszublenden und zwischen ihnen zu wechseln."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"KoliBri")," stellt eine umfangreich konfigurierbare, vertikale oder horizontale ",(0,l.kt)("strong",{parentName:"p"},"Navigationsleiste")," zur Verf\xfcgung, die mehrere Ebenen darstellen und in der Breite variiert werden kann.\n\xdcbergeordnete Men\xfcpunkte die Untermen\xfcpunkte enthalten, werden mit einem ",(0,l.kt)("strong",{parentName:"p"},"Plus-Icon")," am rechten Rand angezeigt. Wird der \xfcbergeordnete Men\xfcpunkt mit dem Plus-Icon ge\xf6ffnet, \xe4ndert sich das Plus-Icon automatisch zu einem ",(0,l.kt)("strong",{parentName:"p"},"Minus-Icon"),", mit dem der Men\xfcpunkt wieder geschlossen werden kann."),(0,l.kt)("p",null,"Aktive Men\xfcpunkte werden mit einer farbigen Markierung dargestellt."),(0,l.kt)("p",null,"\xdcber eine optionale Schaltfl\xe4che unterhalb der Navigation kann die Breite der ",(0,l.kt)("strong",{parentName:"p"},"Nav"),"-Komponente ver\xe4ndert werden. In der kleinsten Breite werden die Men\xfctitel ausgeblendet und nur\nnoch die Icons ausgegeben."),(0,l.kt)("h2",{id:"konstruktion"},"Konstruktion"),(0,l.kt)("h3",{id:"code"},"Code"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},"<kol-nav\n    _label=\"Navigation\"\n    _links=\"[\n    {\n        _href: 'startseite',\n        _icon: 'codicon codicon-home',\n        _label: 'Startseite',\n        _children: [\n            { _href: 'startseite/1-untermenuepunkt', _icon: 'codicon codicon-home', _label: '1. Untermen\xfcpunkt' },\n            { _href: 'startseite/2-untermenuepunkt', _icon: 'codicon codicon-home', _label: '2. Untermen\xfcpunkt' },\n        ],\n    },\n    { _href: 'unterseite', _icon: 'codicon codicon-home', _label: '2. Men\xfcpunkt' },\n]\"\n    _has-compact-button\n></kol-nav>\n")),(0,l.kt)("h3",{id:"beispiel"},"Beispiel"),(0,l.kt)("p",null,(0,l.kt)("kol-nav",{_label:"Navigation",_links:"[{'_href':'startseite','_icon':'codicon codicon-home','_label':'Startseite','_children':[{'_href':'startseite/1-untermenuepunkt','_icon':'codicon codicon-home','_label':'1. Untermen\xfcpunkt'},{'_href':'startseite/2-untermenuepunkt','_icon':'codicon codicon-home','_label':'2. Untermen\xfcpunkt'}]},{'_href':'unterseite','_icon':'codicon codicon-home','_label':'2. Men\xfcpunkt'}]","_has-compact-button":!0})),(0,l.kt)("h2",{id:"verwendung"},"Verwendung"),(0,l.kt)("h3",{id:"links-in-der-navigationsleiste-definieren"},"Links in der Navigationsleiste definieren"),(0,l.kt)("p",null,"Die Navigationsstruktur wird als Objekt oder JSON-String an das Attribut ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"_links"))," \xfcbergeben. Die Struktur ist als Wert/Parameter-Paar aufgebaut:\nUm Untermen\xfcpunkte zu erzeugen, erweitern Sie die JSON-Struktur um das zus\xe4tzliche Attribut ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"_children"))," im \xfcbergeordneten Element."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"[\n    {\n        _href: 'startseite',\n        _icon: 'codicon codicon-home',\n        _label: 'Startseite',\n        _children: [\n            { _href: 'startseite/1-untermenuepunkt', _icon: 'codicon codicon-home', _label: '1. Untermen\xfcpunkt' },\n            { _href: 'startseite/2-untermenuepunkt', _icon: 'codicon codicon-home', _label: '2. Untermen\xfcpunkt' },\n        ],\n    },\n    { _href: 'unterseite', _icon: 'codicon codicon-home', _label: '2. Men\xfcpunkt' },\n];\n")),(0,l.kt)("h3",{id:"kompakte-navigationsleiste-anzeigen"},"Kompakte Navigationsleiste anzeigen"),(0,l.kt)("p",null,"Um die Navigationsleiste in der kompakten Darstellung auszugeben, setzen Sie das Attribut ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"_compact")),"."),(0,l.kt)("h3",{id:"umschalter-normalekompakte-darstellung"},"Umschalter normale/kompakte Darstellung"),(0,l.kt)("p",null,"Um eine Schaltfl\xe4che einzublenden, die die kompakte Darstellung an/aus schaltet, setzen Sie das Attribut ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"_hasCompact-button")),".\nDiese Schaltfl\xe4che erscheint unterhalb der Navigation und wird nur bei vertikaler Ausrichtung angezeigt."),(0,l.kt)("h3",{id:"umschaltung-horizontalevertikale-ausrichtung"},"Umschaltung horizontale/vertikale Ausrichtung"),(0,l.kt)("p",null,"Die Ausrichtung der Navigationsleiste kann mit dem Attribut ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"_orientation"))," umgeschaltet werden. M\xf6gliche Werte sind:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"horizontal")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"vertical"))),(0,l.kt)("h3",{id:"best-practices"},"Best practices"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Verwenden Sie ",(0,l.kt)("strong",{parentName:"li"},"Navigationsleisten"),", um ",(0,l.kt)("strong",{parentName:"li"},"Navigation")," oder navigations\xe4hnliche Aktionen darzustellen (z. B. interne oder externe Links, Abmelden, Kontrolle der Sichtbarkeit auf der Seite)."),(0,l.kt)("li",{parentName:"ul"},"Verwenden Sie das Label, um eine klare und pr\xe4zise Beschreibung des Inhalts zu diesem bestimmten Navigationselement bereitzustellen."),(0,l.kt)("li",{parentName:"ul"},"Verwenden Sie keine ",(0,l.kt)("strong",{parentName:"li"},"Navigationsleisten")," f\xfcr Aktionen, die besser als Schaltfl\xe4chen dargestellt werden (z. B. \u201eSpeichern\u201c, \u201eL\xf6schen\u201c, \u201eArtikel in den Warenkorb legen\u201c)."),(0,l.kt)("li",{parentName:"ul"},"Stapeln Sie nicht mehrere ",(0,l.kt)("strong",{parentName:"li"},"Navigationsleisten")," direkt nebeneinander."),(0,l.kt)("li",{parentName:"ul"},"Verwenden Sie keine ",(0,l.kt)("strong",{parentName:"li"},"Navigationsleisten")," zum Vergleichen von Inhalten (z. B. unterschiedliche Leistungen)."),(0,l.kt)("li",{parentName:"ul"},"Ber\xfccksichtigen Sie die Anzahl der Navigationselemente, die Sie in die ",(0,l.kt)("strong",{parentName:"li"},"Navigationsleiste")," einf\xfcgen. Wenn Sie das Gef\xfchl haben, dass die Zahl zu gro\xdf wird, ziehen Sie alternative Ans\xe4tze zur Pr\xe4sentation des Inhalts in Betracht oder verwenden Sie ein anderes Navigationsmuster/eine andere Komponente.")),(0,l.kt)("h3",{id:"anwendungsf\xe4lle"},"Anwendungsf\xe4lle"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Verwenden Sie ",(0,l.kt)("strong",{parentName:"li"},"Navigationsleisten")," als In-Page-Navigation auf einer Landingpage."),(0,l.kt)("li",{parentName:"ul"},"Verwenden Sie ",(0,l.kt)("strong",{parentName:"li"},"Navigationsleisten"),", um verwandte Informationen auf einer Landingpage zu organisieren."),(0,l.kt)("li",{parentName:"ul"},"Nutzen Sie ",(0,l.kt)("strong",{parentName:"li"},"Navigationsleisten"),", um Angebote oder Vorteile in verschiedene Kategorien einzuordnen (z.B. Formulare)."),(0,l.kt)("li",{parentName:"ul"},"Verwenden Sie ",(0,l.kt)("strong",{parentName:"li"},"Navigationsleisten"),", um FAQs in verschiedene Kategorien zu unterteilen.")),(0,l.kt)("h2",{id:"barrierefreiheit"},"Barrierefreiheit"),(0,l.kt)("h3",{id:"tastatursteuerung"},"Tastatursteuerung"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Taste"),(0,l.kt)("th",{parentName:"tr",align:null},"Funktion"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Tab")),(0,l.kt)("td",{parentName:"tr",align:null},"Fokussiert den ersten Men\xfcpunkt in der Navigation. Nachfolgend kann mit der Tab-Taste jeder Men\xfcpunkt angesprungen werden. Wenn der Has-compact-Button aktiviert wurde, ist dieser ebenfalls mit der Tab-Taste erreichbar.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Enter")),(0,l.kt)("td",{parentName:"tr",align:null},"Klappt Unterpunkte auf/zu, sofern eine Ausklappschaltfl\xe4che fokussiert ist, aktiviert die Schaltfl\xe4che oder \xf6ffnet den Link anderenfalls.")))),(0,l.kt)("h2",{id:"properties"},"Properties"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Property"),(0,l.kt)("th",{parentName:"tr",align:null},"Attribute"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_ariaCurrentValue")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_aria-current-value")),(0,l.kt)("td",{parentName:"tr",align:null},"Gibt den Wert von aria-current an, der bei dem aktuellen Kontext innerhalb der Navigation verwendet werden soll."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'"date"')," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},'"location"')," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},'"page"')," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},'"step"')," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},'"time"')," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},"boolean")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"false"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_ariaLabel")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_aria-label")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{className:"text-red-500"},(0,l.kt)("strong",{parentName:"td"},"[DEPRECATED]"))," use _label instead",(0,l.kt)("br",null),(0,l.kt)("br",null),"Setzt die sichtbare oder semantische Beschriftung der Komponente (z.B. Aria-Label, Label, Headline, Caption, Summary usw.)."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},"undefined")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_collapsible")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_collapsible")),(0,l.kt)("td",{parentName:"tr",align:null},"Gibt an, ob Knoten in der Navigation zusammengeklappt werden k\xf6nnen. Ist standardm\xe4\xdfig aktiv."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"boolean")," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},"undefined")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"true"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_compact")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_compact")),(0,l.kt)("td",{parentName:"tr",align:null},"Gibt an, ob die Navigation kompakt angezeigt wird."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"boolean")," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},"undefined")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"false"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_hasCompactButton")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_has-compact-button")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{className:"text-red-500"},(0,l.kt)("strong",{parentName:"td"},"[DEPRECATED]"))," Version 2",(0,l.kt)("br",null),(0,l.kt)("br",null),"Gibt an, ob die Navigation eine zus\xe4tzliche Schaltfl\xe4che zum Aus- und Einklappen der Navigation anzeigen soll."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"boolean")," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},"undefined")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"false"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_label")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_label")),(0,l.kt)("td",{parentName:"tr",align:null},"Setzt die sichtbare oder semantische Beschriftung der Komponente (z.B. Aria-Label, Label, Headline, Caption, Summary usw.)."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},"undefined")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_links")," ",(0,l.kt)("em",{parentName:"td"},"(required)")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_links")),(0,l.kt)("td",{parentName:"tr",align:null},"Gibt die Liste der darzustellenden Button, Links oder Texte an."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"ButtonOrLinkOrTextWithChildrenProps[]")," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_orientation")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_orientation")),(0,l.kt)("td",{parentName:"tr",align:null},"Gibt die horizontale oder vertikale Ausrichtung der Komponente an."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'"horizontal"')," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},'"vertical"')," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},"undefined")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"'vertical'"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_variant")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_variant")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{className:"text-red-500"},(0,l.kt)("strong",{parentName:"td"},"[DEPRECATED]"))," This property is deprecated and will be removed in the next major version.",(0,l.kt)("br",null),(0,l.kt)("br",null),"Gibt an, welche Variante der Darstellung genutzt werden soll."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'"primary"')," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},'"secondary"')," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},"undefined")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"'primary'"))))),(0,l.kt)("h2",{id:"dependencies"},"Dependencies"),(0,l.kt)("h3",{id:"depends-on"},"Depends on"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"kol-button-link-text-switch"),(0,l.kt)("li",{parentName:"ul"},"kol-button-wc"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"./button"},"kol-button"))),(0,l.kt)("h3",{id:"graph"},"Graph"),(0,l.kt)("mermaid",{value:"graph TD;\n  kol-nav --\x3e kol-button-link-text-switch\n  kol-nav --\x3e kol-button-wc\n  kol-nav --\x3e kol-button\n  kol-button-link-text-switch --\x3e kol-button-wc\n  kol-button-link-text-switch --\x3e kol-link-wc\n  kol-button-link-text-switch --\x3e kol-span-wc\n  kol-button-wc --\x3e kol-span-wc\n  kol-button-wc --\x3e kol-tooltip\n  kol-span-wc --\x3e kol-icon\n  kol-tooltip --\x3e kol-span-wc\n  kol-link-wc --\x3e kol-span-wc\n  kol-link-wc --\x3e kol-icon\n  kol-link-wc --\x3e kol-tooltip\n  kol-button --\x3e kol-button-wc\n  style kol-nav fill:#f9f,stroke:#333,stroke-width:4px"}),(0,l.kt)("hr",null))}o.isMDXComponent=!0;var d=n(53808),s=n(13995);const u={title:"Nav",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die Nav-Komponente.",tags:["Nav","Beschreibung","Spezifikation","Beispiele"]},m=void 0,c={unversionedId:"components/nav",id:"components/nav",title:"Nav",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die Nav-Komponente.",source:"@site/docs/30-components/nav.mdx",sourceDirName:"30-components",slug:"/components/nav",permalink:"/en/docs/components/nav",draft:!1,tags:[{label:"Nav",permalink:"/en/docs/tags/nav"},{label:"Beschreibung",permalink:"/en/docs/tags/beschreibung"},{label:"Spezifikation",permalink:"/en/docs/tags/spezifikation"},{label:"Beispiele",permalink:"/en/docs/tags/beispiele"}],version:"current",frontMatter:{title:"Nav",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die Nav-Komponente.",tags:["Nav","Beschreibung","Spezifikation","Beispiele"]},sidebar:"tutorialSidebar",previous:{title:"Modal",permalink:"/en/docs/components/modal"},next:{title:"Pagination",permalink:"/en/docs/components/pagination"}},p={},k=[{value:"Live-Editor",id:"live-editor",level:2},{value:"Beispiele",id:"beispiele",level:2}],g={toc:k},b="wrapper";function h(e){let{components:t,...n}=e;return(0,l.kt)(b,(0,a.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)(o,{mdxType:"Readme"}),(0,l.kt)("h2",{id:"live-editor"},"Live-Editor"),(0,l.kt)(s._,{component:"nav",mdxType:"LiveEditorCompact"}),(0,l.kt)("h2",{id:"beispiele"},"Beispiele"),(0,l.kt)(d._,{component:"nav",sample:"basic",mdxType:"Configurator"}),(0,l.kt)(d._,{component:"nav",sample:"horizontal",mdxType:"Configurator"}))}h.isMDXComponent=!0}}]);