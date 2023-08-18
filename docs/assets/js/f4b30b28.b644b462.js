"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[8993],{63739:(e,t,n)=>{n.d(t,{_:()=>o});var a=n(17283),l=n(50959);const i=function(e,t,n,a,l){return void 0===l&&(l="editor"),`${e}&module=${a}&initialpath=%23%2F${t}%2F${n}&view=${l}`},r={width:"100%",height:"500px",border:"0",overflow:"hidden"},d=e=>{let{url:t}=e;return l.createElement("div",{className:"m-2"},l.createElement("iframe",{src:t,style:r,title:"kolibri-public-ui-code-samples",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}),l.createElement(a.Nv,{_href:t,_label:"",_target:"codesandbox"},l.createElement("img",{alt:"CodeSandbox-Schalter",src:"https://codesandbox.io/static/img/play-codesandbox.svg"})))},o=e=>{let{component:t,sample:n}=e;const[o,p]=(0,l.useState)("Preview"),u="https://codesandbox.io/embed/kolibri-public-ui-react-samples-w5u37c?fontsize=14&hidenavigation=1&autoresize=1&theme=dark",m=`%2Fsrc%2Fsamples%2F${t}%2F${n}`,c={angular:`${m}.html`,react:`${m}.tsx`,vue:`${m}.vue`,webcomponent:`${m}.html`},s=`/sample-react/#/${t}/${n}`,k={onSelect:(e,t)=>{switch(t){case 1:p((()=>"Angular"));break;case 2:p((()=>"React"));break;case 3:p((()=>"Vue"));break;case 4:p((()=>"Web Component"));break;default:p((()=>"Preview"))}}};return l.createElement(a.UD,{className:"w-full",_ariaLabel:"Code-Beispiel",_on:k,_tabs:[{_label:"Vorschau"},{_disabled:!0,_label:"Angular"},{_label:"React"},{_disabled:!0,_label:"Vue"},{_disabled:!0,_label:"Web Component"}]},l.createElement("div",null,"Preview"===o&&l.createElement("iframe",{src:s,style:r,title:"kolibri-public-ui-code-samples",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"})),l.createElement("div",null,"Angular"===o&&l.createElement(d,{url:i(u,t,n,c.angular)})),l.createElement("div",null,"React"===o&&l.createElement(d,{url:i(u,t,n,c.react)})),l.createElement("div",null,"Vue"===o&&l.createElement(d,{url:i(u,t,n,c.vue)})),l.createElement("div",null,"Web Component"===o&&l.createElement(d,{url:i(u,t,n,c.webcomponent)})))}},49433:(e,t,n)=>{n.d(t,{_:()=>f});var a=n(5926),l=n(17283),i=n(50959),r=n(29886);function d(e){const{attribute:t,label:n,update:a,value:r}=e,[d,o]=(0,i.useState)(""),[p,u]=(0,i.useState)(""),[m,c]=(0,i.useState)(""),[s,k]=(0,i.useState)("");let b=!1,N=!1,h=!1,g=!1;t.type.includes("KoliBriAllIcon")?(b=!0,N=!0,h=!0,g=!0):(t.type.includes("KoliBriVerticalIcon")&&(h=!0,g=!0),t.type.includes("KoliBriHorizontalIcon")&&(b=!0,N=!0)),(0,i.useEffect)((()=>{if(!d||p||m||s){const e={};d&&(e.left=`codicon codicon-${d}`),p&&(e.right=`codicon codicon-${p}`),m&&(e.top=`codicon codicon-${m}`),s&&(e.bottom=`codicon codicon-${s}`),Object.keys(e).length&&a(t.name,JSON.stringify(e))}else a(t.name,`codicon codicon-${d}`)}),[d,p,m,s]);const f=["home","arrow-up","arrow-right","arrow-down","arrow-left"];return i.createElement("div",null,n,b?i.createElement(l.ox,{_summary:"Links"},i.createElement("div",{className:"flex flex-wrap"},f.map((e=>i.createElement(l.ic,{key:e,_icon:`codicon codicon-${e}`,_hideLabel:!0,_label:"",_on:{onClick:t=>o(e)}}))))):"",N?i.createElement(l.ox,{_summary:"Rechts"},i.createElement("div",{className:"flex flex-wrap"},f.map((e=>i.createElement(l.ic,{key:e,_icon:`codicon codicon-${e}`,_hideLabel:!0,_label:"",_on:{onClick:t=>u(e)}}))))):"",h?i.createElement(l.ox,{_summary:"Oben"},i.createElement("div",{className:"flex flex-wrap"},f.map((e=>i.createElement(l.ic,{key:e,_icon:`codicon codicon-${e}`,_hideLabel:!0,_label:"",_on:{onClick:t=>c(e)}}))))):"",g?i.createElement(l.ox,{_summary:"Unten"},i.createElement("div",{className:"flex flex-wrap"},f.map((e=>i.createElement(l.ic,{key:e,_icon:`codicon codicon-${e}`,_hideLabel:!0,_label:"",_on:{onClick:t=>k(e)}}))))):"")}function o(e){const{label:t,name:n,update:a,value:r}=e;return(0,i.useEffect)((()=>{r||a(n,"#000000")}),[]),i.createElement(l.Np,{_on:{onChange:(e,t)=>a(n,t)},_value:r},t)}function p(e){const{name:t,label:n,types:a,update:r,value:d}=e,o=[];function p(e){return{label:e,value:e}}return a.includes("undefined")?(o.push({label:"-",value:void 0}),o.push(...a.filter((e=>"undefined"!==e)).map(p))):o.push(...a.filter((e=>"undefined"!==e)).map(p)),i.createElement(l.r7,{className:"my-2",_list:JSON.stringify(o),_on:{onChange:(e,n)=>r(t,n[0])},_value:d?[d]:void 0},n)}function u(e){const{attribute:t,update:n,value:a}=e,r=(0,i.useMemo)((()=>{let e=t.type.replace(/\\?"/g,"").split(" | ");return e=e.filter((e=>"KoliBriAllIcon ignorieren"!==e)),1===e.length?e[0]:e.includes("string")?"string":e.includes("number")?"number":e.includes("boolean")?"boolean":""}),[t]),u=(0,i.useMemo)((()=>{const e=t.type.split(" | ").map((e=>e.replace(/\\?"/g,""))),u=i.createElement(l.T5,{_title:t.description},t.name);switch(t.name){case"_color":return i.createElement(o,{name:t.name,label:u,update:n,value:a});case"_icon":return i.createElement(d,{attribute:t,label:u,update:n,value:a});default:switch(r){case"string":return i.createElement(l.WD,{className:"my-2",_label:!1,_on:{onChange:(e,a)=>n(t.name,a)},_value:a||""},u);case"number":return i.createElement(l.c2,{className:"my-2",_label:!1,_on:{onChange:(e,a)=>n(t.name,a)},_value:a},u);case"boolean":return i.createElement(l.TE,{className:"my-2",_checked:!0===a,_label:!1,_on:{onChange:(e,a)=>n(t.name,a)},_variant:"switch",_value:!0},u);default:return e.length>1?i.createElement(p,{label:u,name:t.name,types:e,update:n,value:a}):i.createElement("p",null,"Attribut: '",t.name,"'",i.createElement("br",null),"Typ: '",t.type,"'")}}}),[t,a]);return i.createElement(i.Fragment,null,u)}var m=n(20712),c=n(77192),s=n(85630),k=n.n(s);function b(e){const{tag:t,params:n}=e,a=Object.entries(n).filter((e=>"defaultValues"!==e[0]));let l="";const r=(0,i.useMemo)((()=>{let e="";return a.filter((e=>e[0].startsWith("slot-"))).forEach((t=>{const n=t[1],a=t[0].split("-")[1];if(n)if(n.match(/^<.*?>/)?.length){const t=n.indexOf(">");e+=n.substring(0,t)+` slot="${a}"`+n.substring(t)}else e+=`<div slot="${a}">${n}</div>`})),e}),[n]),d=a.filter((e=>!e[0].startsWith("slot-"))).filter((e=>!n.defaultValues.includes(e[0])));for(const[i,m]of d)if(m){let e="";switch(typeof m){case"string":e=` ${i}="${m.replace(/"/g,"'")}"`;break;case"number":e=` ${i}="${m.toString()}"`;break;case"boolean":e=m?` ${i}`:"";break;case"object":e=` ${i}="${JSON.stringify(m)}"`;break;default:e="Never give up hope, one day everything will be fixed."}l+=e}const o=`<kol-${t}${l}>${r}</kol-${t}>`;let p;try{p=(0,c.format)(o,{plugins:[k()],printWidth:80}).replace(/;\n$/,"")}catch(u){p=`\x3c!-- Formatter-Error: Slot-Markup is not valid HTML for formatting. --\x3e\n${o}`}return i.createElement("div",{className:"h-48 rounded-md overflow-hidden"},i.createElement(m.ZP,{defaultLanguage:"html",height:"100%",options:{automaticLayout:!0,fontSize:16,lineNumbers:"off",readOnly:!0},value:p}))}function N(e){const t={};Object.entries(e.params).filter((e=>!e[0].startsWith("slot-"))).forEach((e=>{t[e[0]]=e[1]}));const n=Object.entries(e.params).filter((e=>e[0].startsWith("slot-"))),a={abbr:l.T5,accordion:l.RZ,alert:l.K5,avatar:l.Ek,badge:l.Er,breadcrumb:l.lo,button:l.ic,"button-group":l.uz,"button-link":l.f6,card:l.Gc,details:l.ox,form:l.m5,heading:l.HA,icon:l.Jl,image:l.Cd,"indented-text":l.CV,"input-checkbox":l.TE,"input-color":l.Np,"input-date":l.O,"input-email":l.Lj,"input-file":l.CX,"input-number":l.c2,"input-password":l.z5,"input-radio":l.sy,"input-range":l.TQ,"input-text":l.WD,kolibri:l.Vs,link:l.Nv,"link-button":l.Kc,"link-group":l.$o,logo:l.QK,modal:l.Ud,nav:l.MA,pagination:l.Q4,popover:l.hV,progress:l.WR,quote:l.VZ,select:l.r7,"skip-nav":l.P,spin:l.qq,"split-button":l.KJ,symbol:l.is,table:l.Vp,tabs:l.UD,textarea:l.Qs,toast:l.CO,tooltip:l.Ze,version:l.u_}[e.tag];return a?i.createElement(a,t,n.map((e=>i.createElement("div",{key:e[0],slot:e[0].replace("slot-",""),dangerouslySetInnerHTML:{__html:e[1]}})))):i.createElement("div",null,"Tag not implemented")}function h(e){const{description:t,name:n,update:a,value:l}=e;return i.createElement("div",{className:"bg-gray-100 my-2 rounded-lg p-2 border border-gray-300 border-solid"},i.createElement("b",null,n||"default"),": ",t,i.createElement("br",null),i.createElement(m.ML,{defaultLanguage:"html",height:"5em",onChange:e=>a(`slot-${n}`,e||""),options:{automaticLayout:!0,fontSize:16,lineNumbers:"off"},value:l}))}const g=["_smart-button","_icon-align"];function f(e){const[t,n]=(0,i.useState)(function(){const e={};return Object.values(a.p).forEach((t=>{const n=t.name.replace("kol-","");e[n]={defaultValues:[]},t.attributes.forEach((t=>{t.defaultValue&&(e[n][t.name]=t.defaultValue.replaceAll("'",""),e[n].defaultValues.push(t.name))}))})),e}()),[d,o]=(0,i.useState)("badge");(0,i.useEffect)((()=>{e.component&&o(e.component.replace("kol-",""))}),[e.component]),(0,i.useEffect)((()=>{!!a.p.find((e=>e.name===`kol-${d}`))?.attributes.find((e=>"_label"===e.name))&&!t[d]?._label&&m("_label","Label-Text");!!a.p.find((e=>e.name===`kol-${d}`))?.attributes.find((e=>"_heading"===e.name))&&!t[d]?._heading&&m("_heading","Heading-Text")}),[d]);const p=(0,i.useMemo)((()=>t[d]||{}),[t,d]);function m(e,t){n((n=>{const a={...n[d],[e]:t,defaultValues:n[d].defaultValues.filter((t=>t!==e))};return{...n,[d]:a}}))}const c=Object.values(a.p).find((e=>e.name===`kol-${d}`));return i.createElement(r.Z,null,(()=>i.createElement(i.Fragment,null,i.createElement(l.Er,{class:"mb-2",_label:"Beta",_color:"#b00"}),i.createElement("div",{className:"grid lg:grid-cols-3 gap-2"},i.createElement(l.UD,{className:"col-span-2",_ariaLabel:"Wechselnavigation zwischen Viewer und Code",_tabs:[{_label:"Viewer"},{_label:"Code"}]},i.createElement("div",{className:"p-2"},i.createElement(N,{tag:d,params:p})),i.createElement("div",{className:"lg:col-span-2"},i.createElement(b,{params:p,tag:d}))),i.createElement("div",{className:"grid gap-4 p-2 border-0 border-l border-solid"},i.createElement(l.HA,{_level:3,_label:"Konfigurator"}),i.createElement("div",null,i.createElement(l.HA,{_level:4,_label:"Properties"}),i.createElement("div",{className:"max-h-96 p-2 overflow-auto mb-4"},c&&c.attributes.map((e=>i.createElement(i.Fragment,null,!g.includes(e.name)&&!e.description.startsWith("Deprecated:")&&i.createElement(u,{key:e.name,attribute:e,update:m,value:p[e.name]})))),c&&0===c.attributes.length&&i.createElement("span",{className:"text-gray-500"},"Keine Properties vorhanden")),i.createElement(l.HA,{_level:4,_label:"Slots"}),i.createElement("div",{className:"max-h-56 p-2 overflow-auto"},c&&c.slots.map((e=>i.createElement(h,{key:e.name,description:e.description,name:e.name,update:m,value:p["slot-"+e.name]}))),c&&0===c.slots.length&&i.createElement("span",{className:"text-gray-500"},"Keine Slots vorhanden"))))))))}},13585:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>m,default:()=>h,frontMatter:()=>u,metadata:()=>c,toc:()=>k});var a=n(15882),l=(n(50959),n(17942));const i={toc:[{value:"Konstruktion",id:"konstruktion",level:2},{value:"Code",id:"code",level:3},{value:"Beispiel",id:"beispiel",level:3},{value:"Verwendung",id:"verwendung",level:2},{value:"Varianten",id:"varianten",level:3},{value:"Best practices",id:"best-practices",level:3},{value:"Barrierefreiheit",id:"barrierefreiheit",level:2},{value:"Tastatursteuerung",id:"tastatursteuerung",level:3},{value:"Links und Referenzen",id:"links-und-referenzen",level:2},{value:"Properties",id:"properties",level:2},{value:"Slots",id:"slots",level:2},{value:"Dependencies",id:"dependencies",level:2},{value:"Depends on",id:"depends-on",level:3},{value:"Graph",id:"graph",level:3}]},r="wrapper";function d(e){let{components:t,...n}=e;return(0,l.kt)(r,(0,a.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Der Input-Typ ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("em",{parentName:"strong"},"Checkbox"))," generiert eine rechteckige Box, die durch Anklicken aktiviert und wieder deaktiviert wird. In aktiviertem Zustand befindet sich ein farbiger Haken in der Box."),(0,l.kt)("h2",{id:"konstruktion"},"Konstruktion"),(0,l.kt)("h3",{id:"code"},"Code"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'<kol-input-checkbox _id="checkbox"\n    >Ich stimme der <kol-link _href="#" _label="#" _label="Datenschutzerkl\xe4rung" _target="document"></kol-link> zu.</kol-input-checkbox\n>\n<kol-input-checkbox _id="switch" _variant="switch">Geburtsdatum anzeigen?</kol-input-checkbox>\n<kol-input-checkbox _checked _id="button" _variant="button">Schalter aktiviert</kol-input-checkbox>\n<kol-input-checkbox _id="button" _variant="button">Schalter deaktiviert</kol-input-checkbox>\n')),(0,l.kt)("h3",{id:"beispiel"},"Beispiel"),(0,l.kt)("p",null,(0,l.kt)("kol-input-checkbox",{_id:"checkbox"},"Ich stimme der ",(0,l.kt)("kol-link",{_href:"#",_label:"#",_label:"Datenschutzerkl\xe4rung",_target:"document"})," zu."),"\n",(0,l.kt)("kol-input-checkbox",{_id:"switch",_variant:"switch"},"Geburtsdatum anzeigen?"),"\n",(0,l.kt)("kol-input-checkbox",{_checked:!0,_id:"button",_variant:"button"},"Schalter aktiviert"),"\n",(0,l.kt)("kol-input-checkbox",{_id:"button",_variant:"button"},"Schalter deaktiviert")),(0,l.kt)("h2",{id:"verwendung"},"Verwendung"),(0,l.kt)("p",null,"Checkboxen werden als Einzelelement oder als Liste beliebig vieler Checkboxen verwendet. Sie erm\xf6glichen den Nutzer:innen, aus einer vordefinierten Anzahl von M\xf6glichkeiten eine oder mehrere auszuw\xe4hlen."),(0,l.kt)("h3",{id:"varianten"},"Varianten"),(0,l.kt)("p",null,"Mittels des Attributs ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"_variant"))," k\xf6nnen folgende Varianten ausgew\xe4hlt werden (Beispiele siehe oben):"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"button"),": wechselt das Icon je nach Zustand (Beispiel 3+4)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"switch"),": verwandelt die Checkbox in einen horizontalen Schalter, hierbei gilt rechts als aktiv und links als inaktiv. (Beispiel 2)")),(0,l.kt)("h3",{id:"best-practices"},"Best practices"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Verwenden Sie eine einzelne Checkbox, wenn Sie von den Nutzer:innen eine einfach Best\xe4tigung w\xfcnschen, z.B. Akzeptieren der Datenschutzerkl\xe4rung."),(0,l.kt)("li",{parentName:"ul"},"Verwenden Sie eine Gruppe von Checkboxen, um den Nutzer:innen die M\xf6glichkeit zu geben einen oder mehrere Werte auszuw\xe4hlen.")),(0,l.kt)("h2",{id:"barrierefreiheit"},"Barrierefreiheit"),(0,l.kt)("p",null,"Vermeiden Sie die Verwendung von vielen Checkboxen auf einer Seite, da Ihre Inhalte hierdurch schnell un\xfcbersichtlich und lang werden. Pr\xfcfen Sie in solchen Anwendungsf\xe4llen die Verwendung einer ",(0,l.kt)("kol-link",{_href:"/docs/components/select",_label:"/docs/components/select"},"Select-Box mit ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"_multiple"))),"."),(0,l.kt)("p",null,"Achten Sie darauf, jeder Checkbox ein Label zuzuweisen, da dieses von Screenreadern vorgelesen wird und so eine eindeutige Identifikation des Eingabefeldes erm\xf6glicht."),(0,l.kt)("h3",{id:"tastatursteuerung"},"Tastatursteuerung"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Taste"),(0,l.kt)("th",{parentName:"tr",align:null},"Funktion"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Tab")),(0,l.kt)("td",{parentName:"tr",align:null},"Fokussiert die Checkbox bzw. erm\xf6glicht den Wechsel zwischen Checkboxen einer Liste.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Leer")),(0,l.kt)("td",{parentName:"tr",align:null},"Aktiviert bzw. deaktiviert die Checkbox. Der Zustand ",(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("em",{parentName:"strong"},"Indeterminate"))," ist \xfcber die Tastatur nicht herzustellen.")))),(0,l.kt)("h2",{id:"links-und-referenzen"},"Links und Referenzen"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("kol-link",{_href:"https://www.w3.org/TR/wai-aria-practices/#checkbox",_label:"https://www.w3.org/TR/wai-aria-practices/#checkbox",_target:"_blank"})),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("kol-link",{_href:"https://medium.com/@gavyn/til-autofocus-inputs-are-an-accessibility-problem-32ced60c3109",_label:"https://medium.com/@gavyn/til-autofocus-inputs-are-an-accessibility-problem-32ced60c3109",_target:"_blank"}))),(0,l.kt)("h2",{id:"properties"},"Properties"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Property"),(0,l.kt)("th",{parentName:"tr",align:null},"Attribute"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_accessKey")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_access-key")),(0,l.kt)("td",{parentName:"tr",align:null},"Gibt an, mit welcher Tastenkombination man das interaktive Element der Komponente ausl\xf6sen oder fokussieren kann."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},"undefined")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_alert")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_alert")),(0,l.kt)("td",{parentName:"tr",align:null},"Gibt an, ob der Screenreader die Meldung aktiv vorlesen soll."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"boolean")," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},"undefined")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"true"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_checked")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_checked")),(0,l.kt)("td",{parentName:"tr",align:null},"Defines whether the checkbox is checked or not. Can be read and written. TODO: Change type back to ",(0,l.kt)("inlineCode",{parentName:"td"},"CheckedPropType")," after Stencil#4663 has been resolved"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"boolean")," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},"undefined")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"false"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_disabled")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_disabled")),(0,l.kt)("td",{parentName:"tr",align:null},"Makes the element not focusable and ignore all events. TODO: Change type back to ",(0,l.kt)("inlineCode",{parentName:"td"},"DisabledPropType")," after Stencil#4663 has been resolved"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"boolean")," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},"undefined")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_error")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_error")),(0,l.kt)("td",{parentName:"tr",align:null},"Gibt den Text f\xfcr eine Fehlermeldung an."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},"undefined")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_hideLabel")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_hide-label")),(0,l.kt)("td",{parentName:"tr",align:null},"Hides the label and shows the description in a Tooltip instead. TODO: Change type back to ",(0,l.kt)("inlineCode",{parentName:"td"},"HideLabelPropType")," after Stencil#4663 has been resolved."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"boolean")," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},"undefined")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_hint")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_hint")),(0,l.kt)("td",{parentName:"tr",align:null},"Gibt den Hinweistext an."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},"undefined")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"''"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_icon")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_icon")),(0,l.kt)("td",{parentName:"tr",align:null},"Defines the icon classnames."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},"undefined")," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},"{ checked: string; indeterminate?: string")," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},"undefined; unchecked?: string")," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},"undefined; } & { checked?: string")," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},"undefined; indeterminate: string; unchecked?: string")," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},"undefined; } & { checked?: string")," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},"undefined; indeterminate?: string")," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},"undefined; unchecked: string; }")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_id")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_id")),(0,l.kt)("td",{parentName:"tr",align:null},"Defines the internal ID of the primary component element."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},"undefined")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_indeterminate")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_indeterminate")),(0,l.kt)("td",{parentName:"tr",align:null},"Puts the checkbox in the indeterminate state, does not change the value of _checked. TODO: Change type back to ",(0,l.kt)("inlineCode",{parentName:"td"},"IndeterminatePropType")," after Stencil#4663 has been resolved"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"boolean")," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},"undefined")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_label")," ",(0,l.kt)("em",{parentName:"td"},"(required)")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_label")),(0,l.kt)("td",{parentName:"tr",align:null},"Setzt die sichtbare oder semantische Beschriftung der Komponente (z.B. Aria-Label, Label, Headline, Caption, Summary usw.)."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"boolean")," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_name")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_name")),(0,l.kt)("td",{parentName:"tr",align:null},"Defines the technical name of an input field."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},"undefined")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_on")),(0,l.kt)("td",{parentName:"tr",align:null},"--"),(0,l.kt)("td",{parentName:"tr",align:null},"Gibt die EventCallback-Funktionen f\xfcr das Input-Event an."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"InputTypeOnBlur & InputTypeOnClick & InputTypeOnChange & InputTypeOnFocus")," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},"undefined")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_required")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_required")),(0,l.kt)("td",{parentName:"tr",align:null},"Makes the input element required. TODO: Change type back to ",(0,l.kt)("inlineCode",{parentName:"td"},"RequiredPropType")," after Stencil#4663 has been resolved"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"boolean")," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},"undefined")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_tabIndex")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_tab-index")),(0,l.kt)("td",{parentName:"tr",align:null},"Gibt an, welchen Tab-Index das prim\xe4re Element in der Komponente hat. (",(0,l.kt)("a",{parentName:"td",href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex"},"https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex"),")"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"number")," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},"undefined")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_tooltipAlign")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_tooltip-align")),(0,l.kt)("td",{parentName:"tr",align:null},"Defines where to show the Tooltip preferably: top, right, bottom or left."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'"bottom"')," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},'"left"')," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},'"right"')," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},'"top"')," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},"undefined")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"'top'"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_touched")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_touched")),(0,l.kt)("td",{parentName:"tr",align:null},"Shows if the input was touched by a user. TODO: Change type back to ",(0,l.kt)("inlineCode",{parentName:"td"},"TouchedPropType")," after Stencil#4663 has been resolved"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"boolean")," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},"undefined")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"false"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_type")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_type")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{className:"text-red-500"},(0,l.kt)("strong",{parentName:"td"},"[DEPRECATED]"))," Verwende stattdessen das Attribute _variant.",(0,l.kt)("br",null),(0,l.kt)("br",null),"Deprecated: Gibt an, welche Variante der Darstellung genutzt werden soll."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'"button"')," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},'"checkbox"')," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},'"default"')," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},'"switch"')," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},"undefined")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_value")," ",(0,l.kt)("em",{parentName:"td"},"(required)")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_value")),(0,l.kt)("td",{parentName:"tr",align:null},"Gibt den Schl\xfcssel/Namen der Checkbox an. ({ ","[value]",": ","[checked]"," })"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"boolean")," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},"null")," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},"number")," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},"object")," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},"string")," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},"undefined")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_variant")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_variant")),(0,l.kt)("td",{parentName:"tr",align:null},"Gibt an, welche Variante der Darstellung genutzt werden soll."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'"button"')," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},'"checkbox"')," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},'"default"')," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},'"switch"')," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},"undefined")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"undefined"))))),(0,l.kt)("h2",{id:"slots"},"Slots"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Slot"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Die Beschriftung der Checkbox.")))),(0,l.kt)("h2",{id:"dependencies"},"Dependencies"),(0,l.kt)("h3",{id:"depends-on"},"Depends on"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"kol-input"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"./icon"},"kol-icon")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"./tooltip"},"kol-tooltip"))),(0,l.kt)("h3",{id:"graph"},"Graph"),(0,l.kt)("mermaid",{value:"graph TD;\n  kol-input-checkbox --\x3e kol-input\n  kol-input-checkbox --\x3e kol-icon\n  kol-input-checkbox --\x3e kol-tooltip\n  kol-input --\x3e kol-icon\n  kol-input --\x3e kol-button-wc\n  kol-input --\x3e kol-alert\n  kol-button-wc --\x3e kol-span-wc\n  kol-button-wc --\x3e kol-tooltip\n  kol-span-wc --\x3e kol-icon\n  kol-tooltip --\x3e kol-span-wc\n  kol-alert --\x3e kol-alert-wc\n  kol-alert-wc --\x3e kol-heading-wc\n  kol-alert-wc --\x3e kol-button-wc\n  kol-alert-wc --\x3e kol-icon\n  style kol-input-checkbox fill:#f9f,stroke:#333,stroke-width:4px"}),(0,l.kt)("hr",null))}d.isMDXComponent=!0;var o=n(63739),p=n(49433);const u={title:"InputCheckbox",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die InputCheckbox-Komponente.",tags:["InputCheckbox","Beschreibung","Spezifikation","Beispiele"]},m=void 0,c={unversionedId:"components/input-checkbox",id:"components/input-checkbox",title:"InputCheckbox",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die InputCheckbox-Komponente.",source:"@site/docs/30-components/input-checkbox.mdx",sourceDirName:"30-components",slug:"/components/input-checkbox",permalink:"/docs/components/input-checkbox",draft:!1,tags:[{label:"InputCheckbox",permalink:"/docs/tags/input-checkbox"},{label:"Beschreibung",permalink:"/docs/tags/beschreibung"},{label:"Spezifikation",permalink:"/docs/tags/spezifikation"},{label:"Beispiele",permalink:"/docs/tags/beispiele"}],version:"current",frontMatter:{title:"InputCheckbox",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die InputCheckbox-Komponente.",tags:["InputCheckbox","Beschreibung","Spezifikation","Beispiele"]},sidebar:"tutorialSidebar",previous:{title:"InputAdapterLeanup",permalink:"/docs/components/input-adapter-leanup"},next:{title:"InputColor",permalink:"/docs/components/input-color"}},s={},k=[{value:"Live-Editor",id:"live-editor",level:2},{value:"Beispiele",id:"beispiele",level:2}],b={toc:k},N="wrapper";function h(e){let{components:t,...n}=e;return(0,l.kt)(N,(0,a.Z)({},b,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)(d,{mdxType:"Readme"}),(0,l.kt)("h2",{id:"live-editor"},"Live-Editor"),(0,l.kt)(p._,{component:"input-checkbox",mdxType:"LiveEditorCompact"}),(0,l.kt)("h2",{id:"beispiele"},"Beispiele"),(0,l.kt)(o._,{component:"input-checkbox",sample:"basic",mdxType:"Configurator"}))}h.isMDXComponent=!0}}]);