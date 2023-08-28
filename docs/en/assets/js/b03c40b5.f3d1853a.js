"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[13294],{63739:(e,t,n)=>{n.d(t,{_:()=>d});var a=n(57349),l=n(50959);const i=function(e,t,n,a,l){return void 0===l&&(l="editor"),`${e}&module=${a}&initialpath=%23%2F${t}%2F${n}&view=${l}`},r={width:"100%",height:"500px",border:"0",overflow:"hidden"},o=e=>{let{url:t}=e;return l.createElement("div",{className:"m-2"},l.createElement("iframe",{src:t,style:r,title:"kolibri-public-ui-code-samples",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}),l.createElement(a.Nv,{_href:t,_label:"",_target:"codesandbox"},l.createElement("img",{alt:"CodeSandbox-Schalter",src:"https://codesandbox.io/static/img/play-codesandbox.svg"})))},d=e=>{let{component:t,sample:n}=e;const[d,s]=(0,l.useState)("Preview"),u="https://codesandbox.io/embed/kolibri-public-ui-react-samples-w5u37c?fontsize=14&hidenavigation=1&autoresize=1&theme=dark",p=`%2Fsrc%2Fsamples%2F${t}%2F${n}`,m={angular:`${p}.html`,react:`${p}.tsx`,vue:`${p}.vue`,webcomponent:`${p}.html`},c=`/sample-react/#/${t}/${n}`,k={onSelect:(e,t)=>{switch(t){case 1:s((()=>"Angular"));break;case 2:s((()=>"React"));break;case 3:s((()=>"Vue"));break;case 4:s((()=>"Web Component"));break;default:s((()=>"Preview"))}}};return l.createElement(a.UD,{className:"w-full",_ariaLabel:"Code-Beispiel",_on:k,_tabs:[{_label:"Vorschau"},{_disabled:!0,_label:"Angular"},{_label:"React"},{_disabled:!0,_label:"Vue"},{_disabled:!0,_label:"Web Component"}]},l.createElement("div",null,"Preview"===d&&l.createElement("iframe",{src:c,style:r,title:"kolibri-public-ui-code-samples",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"})),l.createElement("div",null,"Angular"===d&&l.createElement(o,{url:i(u,t,n,m.angular)})),l.createElement("div",null,"React"===d&&l.createElement(o,{url:i(u,t,n,m.react)})),l.createElement("div",null,"Vue"===d&&l.createElement(o,{url:i(u,t,n,m.vue)})),l.createElement("div",null,"Web Component"===d&&l.createElement(o,{url:i(u,t,n,m.webcomponent)})))}},31617:(e,t,n)=>{n.d(t,{_:()=>v});var a=n(6826),l=n(57349),i=n(50959),r=n(29886);function o(e){const{label:t,name:n,update:a,value:r}=e;return(0,i.useEffect)((()=>{r||a(n,"#000000")}),[]),i.createElement(l.Np,{_on:{onChange:(e,t)=>a(n,t)},_value:r},t)}function d(e){const{attribute:t,label:n,update:a}=e,[r,o]=(0,i.useState)(""),[d,s]=(0,i.useState)(""),[u,p]=(0,i.useState)(""),[m,c]=(0,i.useState)("");let k=!1,b=!1,g=!1,h=!1;t.type.includes("KoliBriAllIcon")?(k=!0,b=!0,g=!0,h=!0):(t.type.includes("KoliBriVerticalIcon")&&(g=!0,h=!0),t.type.includes("KoliBriHorizontalIcon")&&(k=!0,b=!0)),(0,i.useEffect)((()=>{if(!r||d||u||m){const e={};r&&(e.left=`codicon codicon-${r}`),d&&(e.right=`codicon codicon-${d}`),u&&(e.top=`codicon codicon-${u}`),m&&(e.bottom=`codicon codicon-${m}`),Object.keys(e).length&&a(t.name,JSON.stringify(e))}else a(t.name,`codicon codicon-${r}`)}),[r,d,u,m]);const f=["home","arrow-up","arrow-right","arrow-down","arrow-left"];return i.createElement("div",null,n,k?i.createElement(l.ox,{_summary:"Links"},i.createElement("div",{className:"flex flex-wrap"},f.map((e=>i.createElement(l.ic,{key:e,_icon:`codicon codicon-${e}`,_hideLabel:!0,_label:"",_on:{onClick:()=>o(e)}}))))):"",b?i.createElement(l.ox,{_summary:"Rechts"},i.createElement("div",{className:"flex flex-wrap"},f.map((e=>i.createElement(l.ic,{key:e,_icon:`codicon codicon-${e}`,_hideLabel:!0,_label:"",_on:{onClick:()=>s(e)}}))))):"",g?i.createElement(l.ox,{_summary:"Oben"},i.createElement("div",{className:"flex flex-wrap"},f.map((e=>i.createElement(l.ic,{key:e,_icon:`codicon codicon-${e}`,_hideLabel:!0,_label:"",_on:{onClick:()=>p(e)}}))))):"",h?i.createElement(l.ox,{_summary:"Unten"},i.createElement("div",{className:"flex flex-wrap"},f.map((e=>i.createElement(l.ic,{key:e,_icon:`codicon codicon-${e}`,_hideLabel:!0,_label:"",_on:{onClick:()=>c(e)}}))))):"")}function s(e){const{name:t,label:n,types:a,update:r,value:o}=e,d=[];function s(e){return{label:e,value:e}}return a.includes("undefined")?(d.push({label:"-",value:void 0}),d.push(...a.filter((e=>"undefined"!==e)).map(s))):d.push(...a.filter((e=>"undefined"!==e)).map(s)),i.createElement(l.r7,{className:"my-2",_list:JSON.stringify(d),_on:{onChange:(e,n)=>r(t,n[0])},_value:o?[o]:void 0},n)}function u(e){const{attribute:t,update:n,value:a}=e,r=(0,i.useMemo)((()=>{let e=t.type.replace(/\\?"/g,"").split(" | ");return e=e.filter((e=>"KoliBriAllIcon ignorieren"!==e)),1===e.length?e[0]:e.includes("string")?"string":e.includes("number")?"number":e.includes("boolean")?"boolean":""}),[t]),u=(0,i.useMemo)((()=>{const e=t.type.split(" | ").map((e=>e.replace(/\\?"/g,""))),u=i.createElement(l.T5,{_title:t.description},t.name);switch(t.name){case"_color":return i.createElement(o,{name:t.name,label:u,update:n,value:a});case"_icon":return i.createElement(d,{attribute:t,label:u,update:n,value:a});default:switch(r){case"string":return i.createElement(l.WD,{className:"my-2",_label:!1,_on:{onChange:(e,a)=>n(t.name,a)},_value:a||""},u);case"number":return i.createElement(l.c2,{className:"my-2",_label:!1,_on:{onChange:(e,a)=>n(t.name,a)},_value:a},u);case"boolean":return i.createElement(l.TE,{className:"my-2",_checked:!0===a,_label:!1,_on:{onChange:(e,a)=>n(t.name,a)},_variant:"switch",_value:!0},u);default:return e.length>1?i.createElement(s,{label:u,name:t.name,types:e,update:n,value:a}):i.createElement("p",null,"Attribut: '",t.name,"'",i.createElement("br",null),"Typ: '",t.type,"'")}}}),[t,a]);return i.createElement(i.Fragment,null,u)}var p=n(6453),m=n(77192),c=n(85630),k=n.n(c);function b(e){const{tag:t,params:n}=e,a=Object.entries(n).filter((e=>"defaultValues"!==e[0]));let l="";const r=(0,i.useMemo)((()=>{let e="";return a.filter((e=>e[0].startsWith("slot-"))).forEach((t=>{const n=t[1],a=t[0].split("-")[1];if(n)if(n.match(/^<.*?>/)?.length){const t=n.indexOf(">");e+=n.substring(0,t)+` slot="${a}"`+n.substring(t)}else e+=`<div slot="${a}">${n}</div>`})),e}),[n]),o=a.filter((e=>!e[0].startsWith("slot-"))).filter((e=>!n.defaultValues.includes(e[0])));for(const[i,p]of o)if(p){let e="";switch(typeof p){case"string":e=` ${i}="${p.replace(/"/g,"'")}"`;break;case"number":e=` ${i}="${p.toString()}"`;break;case"boolean":e=p?` ${i}`:"";break;case"object":e=` ${i}="${JSON.stringify(p)}"`;break;default:e="Never give up hope, one day everything will be fixed."}l+=e}const d=`<kol-${t}${l}>${r}</kol-${t}>`;let s;try{s=(0,m.format)(d,{plugins:[k()],printWidth:80}).replace(/;\n$/,"")}catch(u){s=`\x3c!-- Formatter-Error: Slot-Markup is not valid HTML for formatting. --\x3e\n${d}`}return i.createElement("div",{className:"h-48 rounded-md overflow-hidden"},i.createElement(p.ZP,{defaultLanguage:"html",height:"100%",options:{automaticLayout:!0,fontSize:16,lineNumbers:"off",readOnly:!0},value:s}))}function g(e){const t={};Object.entries(e.params).filter((e=>!e[0].startsWith("slot-"))).forEach((e=>{t[e[0]]=e[1]}));const n=Object.entries(e.params).filter((e=>e[0].startsWith("slot-"))),a={abbr:l.T5,accordion:l.RZ,alert:l.K5,avatar:l.Ek,badge:l.Er,breadcrumb:l.lo,button:l.ic,"button-group":l.uz,"button-link":l.f6,card:l.Gc,details:l.ox,form:l.m5,heading:l.HA,icon:l.Jl,image:l.Cd,"indented-text":l.CV,"input-checkbox":l.TE,"input-color":l.Np,"input-date":l.O,"input-email":l.Lj,"input-file":l.CX,"input-number":l.c2,"input-password":l.z5,"input-radio":l.sy,"input-range":l.TQ,"input-text":l.WD,kolibri:l.Vs,link:l.Nv,"link-button":l.Kc,"link-group":l.$o,logo:l.QK,modal:l.Ud,nav:l.MA,pagination:l.Q4,popover:l.hV,progress:l.WR,quote:l.VZ,select:l.r7,"skip-nav":l.P,spin:l.qq,"split-button":l.KJ,symbol:l.is,table:l.Vp,tabs:l.UD,textarea:l.Qs,toast:l.CO,version:l.u_}[e.tag];return a?i.createElement(a,t,n.map((e=>i.createElement("div",{key:e[0],slot:e[0].replace("slot-",""),dangerouslySetInnerHTML:{__html:e[1]}})))):i.createElement("div",null,"Tag not implemented")}function h(e){const{description:t,name:n,update:a,value:l}=e;return i.createElement("div",{className:"bg-gray-100 my-2 rounded-lg p-2 border border-gray-300 border-solid"},i.createElement("b",null,n||"default"),": ",t,i.createElement("br",null),i.createElement(p.ML,{defaultLanguage:"html",height:"5em",onChange:e=>a(`slot-${n}`,e||""),options:{automaticLayout:!0,fontSize:16,lineNumbers:"off"},value:l}))}const f=["_smart-button","_icon-align"];function v(e){const[t,n]=(0,i.useState)(function(){const e={};return Object.values(a.p).forEach((t=>{const n=t.name.replace("kol-","");e[n]={defaultValues:[]},t.attributes.forEach((t=>{t.defaultValue&&(e[n][t.name]=t.defaultValue.replace(/'/g,""),e[n].defaultValues.push(t.name))}))})),e}()),[o,d]=(0,i.useState)("badge");(0,i.useEffect)((()=>{e.component&&d(e.component.replace("kol-",""))}),[e.component]),(0,i.useEffect)((()=>{!!a.p.find((e=>e.name===`kol-${o}`))?.attributes.find((e=>"_label"===e.name))&&!t[o]?._label&&p("_label","Label-Text");!!a.p.find((e=>e.name===`kol-${o}`))?.attributes.find((e=>"_heading"===e.name))&&!t[o]?._heading&&p("_heading","Heading-Text")}),[o]);const s=(0,i.useMemo)((()=>t[o]||{}),[t,o]);function p(e,t){n((n=>{const a={...n[o],[e]:t,defaultValues:n[o].defaultValues.filter((t=>t!==e))};return{...n,[o]:a}}))}const m=Object.values(a.p).find((e=>e.name===`kol-${o}`));return i.createElement(r.Z,null,(()=>i.createElement(i.Fragment,null,i.createElement(l.Er,{class:"mb-2",_label:"Beta",_color:"#b00"}),i.createElement("div",{className:"grid lg:grid-cols-3 gap-2"},i.createElement(l.UD,{className:"col-span-2",_ariaLabel:"Wechselnavigation zwischen Viewer und Code",_tabs:[{_label:"Viewer"},{_label:"Code"}]},i.createElement("div",{className:"p-2"},i.createElement(g,{tag:o,params:s})),i.createElement("div",{className:"lg:col-span-2"},i.createElement(b,{params:s,tag:o}))),i.createElement("div",{className:"grid gap-4 p-2 border-0 border-l border-solid"},i.createElement(l.HA,{_level:3,_label:"Konfigurator"}),i.createElement("div",null,i.createElement(l.HA,{_level:4,_label:"Properties"}),i.createElement("div",{className:"max-h-96 p-2 overflow-auto mb-4"},m&&m.attributes.map((e=>i.createElement(i.Fragment,null,!f.includes(e.name)&&!e.description.startsWith("Deprecated:")&&i.createElement(u,{key:e.name,attribute:e,update:p,value:s[e.name]})))),m&&0===m.attributes.length&&i.createElement("span",{className:"text-gray-500"},"Keine Properties vorhanden")),i.createElement(l.HA,{_level:4,_label:"Slots"}),i.createElement("div",{className:"max-h-56 p-2 overflow-auto"},m&&m.slots.map((e=>i.createElement(h,{key:e.name,description:e.description,name:e.name,update:p,value:s["slot-"+e.name]}))),m&&0===m.slots.length&&i.createElement("span",{className:"text-gray-500"},"Keine Slots vorhanden"))))))))}},31180:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>b,frontMatter:()=>d,metadata:()=>u,toc:()=>m});var a=n(15882),l=(n(50959),n(17942)),i=n(18030),r=n(63739),o=n(31617);const d={title:"Table",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die Table-Komponente.",tags:["Table","Beschreibung","Spezifikation","Beispiele"]},s=void 0,u={unversionedId:"components/table",id:"version-1.6.0/components/table",title:"Table",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die Table-Komponente.",source:"@site/versioned_docs/version-1.6.0/30-components/table.mdx",sourceDirName:"30-components",slug:"/components/table",permalink:"/en/docs/1.6.0/components/table",draft:!1,tags:[{label:"Table",permalink:"/en/docs/1.6.0/tags/table"},{label:"Beschreibung",permalink:"/en/docs/1.6.0/tags/beschreibung"},{label:"Spezifikation",permalink:"/en/docs/1.6.0/tags/spezifikation"},{label:"Beispiele",permalink:"/en/docs/1.6.0/tags/beispiele"}],version:"1.6.0",frontMatter:{title:"Table",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die Table-Komponente.",tags:["Table","Beschreibung","Spezifikation","Beispiele"]},sidebar:"tutorialSidebar",previous:{title:"Split-Button",permalink:"/en/docs/1.6.0/components/split-button"},next:{title:"Tabs",permalink:"/en/docs/1.6.0/components/tabs"}},p={},m=[{value:"Live-Editor",id:"live-editor",level:2},{value:"Beispiele",id:"beispiele",level:2},{value:"Datum in Spalte sortieren",id:"datum-in-spalte-sortieren",level:3},{value:"Render Cell",id:"render-cell",level:3}],c={toc:m},k="wrapper";function b(e){let{components:t,...n}=e;return(0,l.kt)(k,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)(i.default,{mdxType:"Readme"}),(0,l.kt)("h2",{id:"live-editor"},"Live-Editor"),(0,l.kt)(o._,{component:"table",mdxType:"LiveEditorCompact"}),(0,l.kt)("h2",{id:"beispiele"},"Beispiele"),(0,l.kt)("h3",{id:"datum-in-spalte-sortieren"},"Datum in Spalte sortieren"),(0,l.kt)(r._,{component:"table",sample:"sort-date",mdxType:"Configurator"}),(0,l.kt)("h3",{id:"render-cell"},"Render Cell"),(0,l.kt)(r._,{component:"table",sample:"render-cell",mdxType:"Configurator"}))}b.isMDXComponent=!0},18030:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var a=n(15882),l=(n(50959),n(17942));const i={},r=void 0,o={unversionedId:"readmes/table/readme",id:"version-1.6.0/readmes/table/readme",title:"readme",description:"Die Table-Komponente dient prim\xe4r der \xfcbersichtlichen Darstellung von Datenmengen. Dabei ist sie so ausgelegt, dass sie alle von den Daten abh\xe4ngige Werte automatisch ermittelt und die Tabelle entsprechend darstellt. Hierzu geh\xf6ren beispielsweise die optionalen Funktionalit\xe4ten Spaltensortierung oder Pagination.",source:"@site/versioned_docs/version-1.6.0/readmes/table/readme.md",sourceDirName:"readmes/table",slug:"/readmes/table/",permalink:"/en/docs/1.6.0/readmes/table/",draft:!1,tags:[],version:"1.6.0",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"readme",permalink:"/en/docs/1.6.0/readmes/symbol/"},next:{title:"readme",permalink:"/en/docs/1.6.0/readmes/tabs/"}},d={},s=[{value:"Konstruktion",id:"konstruktion",level:2},{value:"Funktionalit\xe4ten",id:"funktionalit\xe4ten",level:3},{value:"Pagination",id:"pagination",level:3},{value:"KoliBriTableHeaders",id:"kolibritableheaders",level:4},{value:"Code",id:"code",level:3},{value:"Beispiel",id:"beispiel",level:3},{value:"Verwendung",id:"verwendung",level:2},{value:"Sortierung",id:"sortierung",level:3},{value:"Barrierefreiheit",id:"barrierefreiheit",level:2},{value:"Links und Referenzen",id:"links-und-referenzen",level:2},{value:"Properties",id:"properties",level:2},{value:"Dependencies",id:"dependencies",level:2},{value:"Depends on",id:"depends-on",level:3},{value:"Graph",id:"graph",level:3}],u={toc:s},p="wrapper";function m(e){let{components:t,...n}=e;return(0,l.kt)(p,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Die ",(0,l.kt)("strong",{parentName:"p"},"Table"),"-Komponente dient prim\xe4r der \xfcbersichtlichen Darstellung von Datenmengen. Dabei ist sie so ausgelegt, dass sie alle von den Daten abh\xe4ngige Werte automatisch ermittelt und die Tabelle entsprechend darstellt. Hierzu geh\xf6ren beispielsweise die optionalen Funktionalit\xe4ten Spaltensortierung oder Pagination."),(0,l.kt)("kol-indented-text",{_summary:"Backend-seitige Pagination"},'Bei sehr gro\xdfen Datenmengen ist auch eine manuelle Nutzung der Table-Komponente m\xf6glich. Das bedeutet, dass die Tabelle seitenweise "manuell" bef\xfcllt wird. Hierzu kann einfach anstatt der Table-Pagination eine "eigene" Pagination unter der Tabelle mittels der Pagination-Komponente verwendet werden.'),(0,l.kt)("h2",{id:"konstruktion"},"Konstruktion"),(0,l.kt)("p",null,"Die Table-Komponente ist so konstruiert, dass nicht der gesamte Tabellenaufbau im Markup selbst beschrieben werden muss. Wie genau die Tabelle Markup-spezifisch aufgebaut werden muss, um barrierefrei zu sein, \xfcbernimmt die Komponente selbst."),(0,l.kt)("p",null,"Dadurch, dass die Table-Komponente das valide und barrierefreie Markup dynamisch zusammenbaut, kann die komplexe Auszeichnung f\xfcr die assistive Systeme dem/der Entwickler:in abgenommen werden."),(0,l.kt)("h3",{id:"funktionalit\xe4ten"},"Funktionalit\xe4ten"),(0,l.kt)("p",null,"Die Table-Komponente unterst\xfctzt folgende Funktionalit\xe4ten:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Tabellenbeschreibung durch ein ",(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"strong"},"label")),"-Attribut."),(0,l.kt)("li",{parentName:"ul"},"Mehrzeilige Spalten\xfcberschriften in horizontaler oder vertikaler Richtung."),(0,l.kt)("li",{parentName:"ul"},"Sortierfunktion f\xfcr entweder horizontale und vertikale Ausrichtung."),(0,l.kt)("li",{parentName:"ul"},"Unterschiedliche Render-Funktion f\xfcr die Zellen."),(0,l.kt)("li",{parentName:"ul"},"Pagination f\xfcr die Tabelle.")),(0,l.kt)("p",null,"Die Table-Komponente unterst\xfctzt folgende Funktionalit\xe4ten ",(0,l.kt)("strong",{parentName:"p"},"nicht"),":"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Das Filtern der Tabelle ist aktuell nicht innerhalb der Tabelle vorgesehen."),(0,l.kt)("li",{parentName:"ul"},"Das Ausw\xe4hlen von Zeilen ist aktuell in der Tabelle nicht vorgesehen.")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Beides k\xf6nnte jedoch mittels der Render-Funktion umgesetzt werden.")),(0,l.kt)("h3",{id:"pagination"},"Pagination"),(0,l.kt)("p",null,"\xdcber das Attribut ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"_pagination"))," kann optional eine Vielzahl zus\xe4tzlicher Properties zur Steuerung der Pagination \xfcbergeben werden. Die genaue Beschreibung der Optionen ist auf der Seite ",(0,l.kt)("kol-link",{_href:"/docs/components/pagination",_label:"/docs/components/pagination",_label:"Pagination"})," zu finden."),(0,l.kt)("h4",{id:"kolibritableheaders"},"KoliBriTableHeaders"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"{\n  horizontal: [\n    [\n      {\n        label: string,\n        key?: string,\n        colsSpan?: number,\n        rowSpan?: number,\n        useTdInsteadOfTh?: boolean,\n        render?: (data) => string,\n        sort?: (data) => data,\n      },\n      \u2026\n    ],\n    \u2026\n  ],\n  vertical: [\n    [\n      {\n        label: string,\n        key?: string,\n        colsSpan?: number,\n        rowSpan?: number,\n        useTdInsteadOfTh?: boolean,\n        render?: (data) => string,\n        sort?: (data) => data,\n      },\n      \u2026\n    ],\n    \u2026\n  ],\n};\n")),(0,l.kt)("h3",{id:"code"},"Code"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},"<kol-table\n    _label=\"Tabellenbeschreibung\"\n    _headers=\"{'horizontal': [[{'label':'Montag','key':'montag'}]]}\"\n    _pagination=\"[{'page':2}]\"\n></kol-table>\n")),(0,l.kt)("h3",{id:"beispiel"},"Beispiel"),(0,l.kt)("p",null,(0,l.kt)("kol-table",{_label:"Nur Vertikal Header, Daten Vertikal, Pagination",_headers:"{'horizontal':[[{'label':'Montag','key':'montag'}]]}",_data:"[{'montag':'Zelle1'},{'montag':'Zelle2'}]",_pagination:"{'page':2}"})),(0,l.kt)("h2",{id:"verwendung"},"Verwendung"),(0,l.kt)("h3",{id:"sortierung"},"Sortierung"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Zu jedem Header kann man eine Sortierfunktion definieren."),(0,l.kt)("li",{parentName:"ul"},"Es ist exakt eine oder keine Sortierfunktion aktiviert."),(0,l.kt)("li",{parentName:"ul"},"Aktuell wird nicht unterst\xfctzt, dass bei zweidimensionalen Headern, die Header der jeweils anderen Header-Seite mit sortiert werden. Bei der Anforderung der Sortierung empfehlen wir die Verwendung nur einer Header-Dimension (entweder horizontal oder vertikal).")),(0,l.kt)("h2",{id:"barrierefreiheit"},"Barrierefreiheit"),(0,l.kt)("p",null,"Bei der Table-Komponente werden zahlreiche Attribut-Definitionen dem Tabellen-Markup hinzugef\xfcgt, um die Screenreader bestm\xf6glich zu unterst\xfctzen."),(0,l.kt)("p",null,"Aktuell werden folgende Attribute von der Komponente verwaltet: ",(0,l.kt)("inlineCode",{parentName:"p"},"role"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"scope")," und ",(0,l.kt)("inlineCode",{parentName:"p"},"aria-\\*"),"."),(0,l.kt)("p",null,"Das hei\xdft beispielsweise, dass bei den Spalten\xfcberschriften automatisch entweder die Rolle ",(0,l.kt)("inlineCode",{parentName:"p"},"colheader")," oder ",(0,l.kt)("inlineCode",{parentName:"p"},"rowheader")," gesetzt wird. Dar\xfcber hinaus wird der Scope entweder auf ",(0,l.kt)("inlineCode",{parentName:"p"},"col"),"/",(0,l.kt)("inlineCode",{parentName:"p"},"colgroup")," oder ",(0,l.kt)("inlineCode",{parentName:"p"},"row"),"/",(0,l.kt)("inlineCode",{parentName:"p"},"rowgroup")," gesetzt. \xc4hnlich dieser Automatismen werden auch die ",(0,l.kt)("inlineCode",{parentName:"p"},"aria-\\*"),"-Attribute je nach Relevanz gesetzt."),(0,l.kt)("p",null,"Warum die Tabelle einen ",(0,l.kt)("strong",{parentName:"p"},"Tabindex")," hat, wird auf der folgenden Webseite beschrieben: ",(0,l.kt)("kol-link",{_href:"",_label:""}),(0,l.kt)("a",{parentName:"p",href:"https://dequeuniversity.com/rules/axe/3.5/scrollable-region-focusable"},"https://dequeuniversity.com/rules/axe/3.5/scrollable-region-focusable")),(0,l.kt)("h2",{id:"links-und-referenzen"},"Links und Referenzen"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("kol-link",{_href:"https://www.w3.org/WAI/tutorials/tables/",_label:"https://www.w3.org/WAI/tutorials/tables/",_target:"_blank"})),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("kol-link",{_href:"https://www.barrierefreies-webdesign.de/knowhow/datentabellen/scope.html",_label:"https://www.barrierefreies-webdesign.de/knowhow/datentabellen/scope.html",_target:"_blank"})),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("kol-link",{_href:"https://developer.mozilla.org/de/docs/Web/Accessibility/ARIA/ARIA_Live_Regions",_label:"https://developer.mozilla.org/de/docs/Web/Accessibility/ARIA/ARIA_Live_Regions",_target:"_blank"})),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("kol-link",{_href:"https://tollwerk.de/projekte/tipps-techniken-inklusiv-barrierefrei/aria-live-regionen",_label:"https://tollwerk.de/projekte/tipps-techniken-inklusiv-barrierefrei/aria-live-regionen",_target:"_blank"})),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("kol-link",{_href:"https://www.barrierefreies-webdesign.de/knowhow/live-regions/attribute.html",_label:"https://www.barrierefreies-webdesign.de/knowhow/live-regions/attribute.html",_target:"_blank"})),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("kol-link",{_href:"https://www.digitala11y.com/aria-sort-properties/",_label:"https://www.digitala11y.com/aria-sort-properties/",_target:"_blank"})),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("kol-link",{_href:"https://dequeuniversity.com/library/aria/table-sortable",_label:"https://dequeuniversity.com/library/aria/table-sortable",_target:"_blank"})),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("kol-link",{_href:"https://www.maxability.co.in/2016/06/07/aria-sort-property/",_label:"https://www.maxability.co.in/2016/06/07/aria-sort-property/",_target:"_blank"})),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("kol-link",{_href:"https://developer.mozilla.org/en-US/docs/Web/API/Element/ariaSort",_label:"https://developer.mozilla.org/en-US/docs/Web/API/Element/ariaSort",_target:"_blank"})),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("kol-link",{_href:"https://tollwerk.de/projekte/tipps-techniken-inklusiv-barrierefrei/aria-live-regionen",_label:"https://tollwerk.de/projekte/tipps-techniken-inklusiv-barrierefrei/aria-live-regionen",_target:"_blank"})),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("kol-link",{_href:"https://stackoverflow.com/questions/1312236/",_label:"https://stackoverflow.com/questions/1312236/",_target:"_blank"})),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("kol-link",{_href:"https://dequeuniversity.com/rules/axe/3.5/scrollable-region-focusable",_label:"https://dequeuniversity.com/rules/axe/3.5/scrollable-region-focusable",_target:"_blank"}))),(0,l.kt)("h2",{id:"properties"},"Properties"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Property"),(0,l.kt)("th",{parentName:"tr",align:null},"Attribute"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_caption")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_caption")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{className:"text-red-500"},(0,l.kt)("strong",{parentName:"td"},"[DEPRECATED]"))," Use ","_","label.",(0,l.kt)("br",null),(0,l.kt)("br",null),"Deprecated: Defines the visible caption of the component."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},"undefined")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_data")," ",(0,l.kt)("em",{parentName:"td"},"(required)")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_data")),(0,l.kt)("td",{parentName:"tr",align:null},"Defines the primary table data."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"KoliBriTableDataType[]")," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_dataFoot")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_data-foot")),(0,l.kt)("td",{parentName:"tr",align:null},"Defines the data for the table footer."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"KoliBriTableDataType[]")," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},"string")," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},"undefined")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_headers")," ",(0,l.kt)("em",{parentName:"td"},"(required)")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_headers")),(0,l.kt)("td",{parentName:"tr",align:null},"Defines the horizontal and vertical table headers."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},"{ horizontal?: KoliBriTableHeaderCell[][]")," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},"undefined; vertical?: KoliBriTableHeaderCell[][]")," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},"undefined; }")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_label")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_label")),(0,l.kt)("td",{parentName:"tr",align:null},"Defines the visible or semantic label of the component (e.g. aria-label, label, headline, caption, summary, etc.)."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},"undefined")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_minWidth")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_min-width")),(0,l.kt)("td",{parentName:"tr",align:null},"Defines the table min-width."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},"undefined")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_pagination")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_pagination")),(0,l.kt)("td",{parentName:"tr",align:null},"Defines whether to show the data distributed over multiple pages."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"boolean")," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},"string")," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},"undefined")," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},"{ _page: number; } & { _on?: KoliBriPaginationButtonCallbacks")," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},"undefined; _page?: number")," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},"undefined; _total?: number")," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},"undefined; _boundaryCount?: number")," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},"undefined; _hasButtons?: boolean")," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},"Stringified<PaginationHasButton>")," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},"undefined; _pageSize?: number")," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},"undefined; _pageSizeOptions?: Stringified<number[]>")," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},"undefined; _siblingCount?: number")," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},"undefined; _customClass?: string")," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},"undefined; _variant?: ButtonVariantPropType")," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},"undefined; _label?: string")," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},"undefined; _tooltipAlign?: AlignPropType")," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},"undefined; }")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"undefined"))))),(0,l.kt)("h2",{id:"dependencies"},"Dependencies"),(0,l.kt)("h3",{id:"depends-on"},"Depends on"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"./button"},"kol-button")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"./pagination"},"kol-pagination"))),(0,l.kt)("h3",{id:"graph"},"Graph"),(0,l.kt)("mermaid",{value:"graph TD;\n  kol-table --\x3e kol-button\n  kol-table --\x3e kol-pagination\n  kol-button --\x3e kol-button-wc\n  kol-button-wc --\x3e kol-span-wc\n  kol-button-wc --\x3e kol-tooltip-wc\n  kol-span-wc --\x3e kol-icon\n  kol-tooltip-wc --\x3e kol-span-wc\n  kol-pagination --\x3e kol-button\n  kol-pagination --\x3e kol-select\n  kol-pagination --\x3e kol-button-wc\n  kol-select --\x3e kol-input\n  kol-select --\x3e kol-tooltip-wc\n  kol-input --\x3e kol-icon\n  kol-input --\x3e kol-button-wc\n  kol-input --\x3e kol-alert\n  kol-alert --\x3e kol-alert-wc\n  kol-alert-wc --\x3e kol-heading-wc\n  kol-alert-wc --\x3e kol-button-wc\n  kol-alert-wc --\x3e kol-icon\n  style kol-table fill:#f9f,stroke:#333,stroke-width:4px"}),(0,l.kt)("hr",null))}m.isMDXComponent=!0}}]);