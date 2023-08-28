"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[55658],{63739:(e,t,n)=>{n.d(t,{_:()=>s});var a=n(57349),l=n(50959);const i=function(e,t,n,a,l){return void 0===l&&(l="editor"),`${e}&module=${a}&initialpath=%23%2F${t}%2F${n}&view=${l}`},r={width:"100%",height:"500px",border:"0",overflow:"hidden"},o=e=>{let{url:t}=e;return l.createElement("div",{className:"m-2"},l.createElement("iframe",{src:t,style:r,title:"kolibri-public-ui-code-samples",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}),l.createElement(a.Nv,{_href:t,_label:"",_target:"codesandbox"},l.createElement("img",{alt:"CodeSandbox-Schalter",src:"https://codesandbox.io/static/img/play-codesandbox.svg"})))},s=e=>{let{component:t,sample:n}=e;const[s,c]=(0,l.useState)("Preview"),d="https://codesandbox.io/embed/kolibri-public-ui-react-samples-w5u37c?fontsize=14&hidenavigation=1&autoresize=1&theme=dark",m=`%2Fsrc%2Fsamples%2F${t}%2F${n}`,p={angular:`${m}.html`,react:`${m}.tsx`,vue:`${m}.vue`,webcomponent:`${m}.html`},u=`/sample-react/#/${t}/${n}`,k={onSelect:(e,t)=>{switch(t){case 1:c((()=>"Angular"));break;case 2:c((()=>"React"));break;case 3:c((()=>"Vue"));break;case 4:c((()=>"Web Component"));break;default:c((()=>"Preview"))}}};return l.createElement(a.UD,{className:"w-full",_ariaLabel:"Code-Beispiel",_on:k,_tabs:[{_label:"Vorschau"},{_disabled:!0,_label:"Angular"},{_label:"React"},{_disabled:!0,_label:"Vue"},{_disabled:!0,_label:"Web Component"}]},l.createElement("div",null,"Preview"===s&&l.createElement("iframe",{src:u,style:r,title:"kolibri-public-ui-code-samples",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"})),l.createElement("div",null,"Angular"===s&&l.createElement(o,{url:i(d,t,n,p.angular)})),l.createElement("div",null,"React"===s&&l.createElement(o,{url:i(d,t,n,p.react)})),l.createElement("div",null,"Vue"===s&&l.createElement(o,{url:i(d,t,n,p.vue)})),l.createElement("div",null,"Web Component"===s&&l.createElement(o,{url:i(d,t,n,p.webcomponent)})))}},31617:(e,t,n)=>{n.d(t,{_:()=>N});var a=n(6826),l=n(57349),i=n(50959),r=n(29886);function o(e){const{label:t,name:n,update:a,value:r}=e;return(0,i.useEffect)((()=>{r||a(n,"#000000")}),[]),i.createElement(l.Np,{_on:{onChange:(e,t)=>a(n,t)},_value:r},t)}function s(e){const{attribute:t,label:n,update:a}=e,[r,o]=(0,i.useState)(""),[s,c]=(0,i.useState)(""),[d,m]=(0,i.useState)(""),[p,u]=(0,i.useState)("");let k=!1,b=!1,g=!1,h=!1;t.type.includes("KoliBriAllIcon")?(k=!0,b=!0,g=!0,h=!0):(t.type.includes("KoliBriVerticalIcon")&&(g=!0,h=!0),t.type.includes("KoliBriHorizontalIcon")&&(k=!0,b=!0)),(0,i.useEffect)((()=>{if(!r||s||d||p){const e={};r&&(e.left=`codicon codicon-${r}`),s&&(e.right=`codicon codicon-${s}`),d&&(e.top=`codicon codicon-${d}`),p&&(e.bottom=`codicon codicon-${p}`),Object.keys(e).length&&a(t.name,JSON.stringify(e))}else a(t.name,`codicon codicon-${r}`)}),[r,s,d,p]);const f=["home","arrow-up","arrow-right","arrow-down","arrow-left"];return i.createElement("div",null,n,k?i.createElement(l.ox,{_summary:"Links"},i.createElement("div",{className:"flex flex-wrap"},f.map((e=>i.createElement(l.ic,{key:e,_icon:`codicon codicon-${e}`,_hideLabel:!0,_label:"",_on:{onClick:()=>o(e)}}))))):"",b?i.createElement(l.ox,{_summary:"Rechts"},i.createElement("div",{className:"flex flex-wrap"},f.map((e=>i.createElement(l.ic,{key:e,_icon:`codicon codicon-${e}`,_hideLabel:!0,_label:"",_on:{onClick:()=>c(e)}}))))):"",g?i.createElement(l.ox,{_summary:"Oben"},i.createElement("div",{className:"flex flex-wrap"},f.map((e=>i.createElement(l.ic,{key:e,_icon:`codicon codicon-${e}`,_hideLabel:!0,_label:"",_on:{onClick:()=>m(e)}}))))):"",h?i.createElement(l.ox,{_summary:"Unten"},i.createElement("div",{className:"flex flex-wrap"},f.map((e=>i.createElement(l.ic,{key:e,_icon:`codicon codicon-${e}`,_hideLabel:!0,_label:"",_on:{onClick:()=>u(e)}}))))):"")}function c(e){const{name:t,label:n,types:a,update:r,value:o}=e,s=[];function c(e){return{label:e,value:e}}return a.includes("undefined")?(s.push({label:"-",value:void 0}),s.push(...a.filter((e=>"undefined"!==e)).map(c))):s.push(...a.filter((e=>"undefined"!==e)).map(c)),i.createElement(l.r7,{className:"my-2",_list:JSON.stringify(s),_on:{onChange:(e,n)=>r(t,n[0])},_value:o?[o]:void 0},n)}function d(e){const{attribute:t,update:n,value:a}=e,r=(0,i.useMemo)((()=>{let e=t.type.replace(/\\?"/g,"").split(" | ");return e=e.filter((e=>"KoliBriAllIcon ignorieren"!==e)),1===e.length?e[0]:e.includes("string")?"string":e.includes("number")?"number":e.includes("boolean")?"boolean":""}),[t]),d=(0,i.useMemo)((()=>{const e=t.type.split(" | ").map((e=>e.replace(/\\?"/g,""))),d=i.createElement(l.T5,{_title:t.description},t.name);switch(t.name){case"_color":return i.createElement(o,{name:t.name,label:d,update:n,value:a});case"_icon":return i.createElement(s,{attribute:t,label:d,update:n,value:a});default:switch(r){case"string":return i.createElement(l.WD,{className:"my-2",_label:!1,_on:{onChange:(e,a)=>n(t.name,a)},_value:a||""},d);case"number":return i.createElement(l.c2,{className:"my-2",_label:!1,_on:{onChange:(e,a)=>n(t.name,a)},_value:a},d);case"boolean":return i.createElement(l.TE,{className:"my-2",_checked:!0===a,_label:!1,_on:{onChange:(e,a)=>n(t.name,a)},_variant:"switch",_value:!0},d);default:return e.length>1?i.createElement(c,{label:d,name:t.name,types:e,update:n,value:a}):i.createElement("p",null,"Attribut: '",t.name,"'",i.createElement("br",null),"Typ: '",t.type,"'")}}}),[t,a]);return i.createElement(i.Fragment,null,d)}var m=n(6453),p=n(77192),u=n(85630),k=n.n(u);function b(e){const{tag:t,params:n}=e,a=Object.entries(n).filter((e=>"defaultValues"!==e[0]));let l="";const r=(0,i.useMemo)((()=>{let e="";return a.filter((e=>e[0].startsWith("slot-"))).forEach((t=>{const n=t[1],a=t[0].split("-")[1];if(n)if(n.match(/^<.*?>/)?.length){const t=n.indexOf(">");e+=n.substring(0,t)+` slot="${a}"`+n.substring(t)}else e+=`<div slot="${a}">${n}</div>`})),e}),[n]),o=a.filter((e=>!e[0].startsWith("slot-"))).filter((e=>!n.defaultValues.includes(e[0])));for(const[i,m]of o)if(m){let e="";switch(typeof m){case"string":e=` ${i}="${m.replace(/"/g,"'")}"`;break;case"number":e=` ${i}="${m.toString()}"`;break;case"boolean":e=m?` ${i}`:"";break;case"object":e=` ${i}="${JSON.stringify(m)}"`;break;default:e="Never give up hope, one day everything will be fixed."}l+=e}const s=`<kol-${t}${l}>${r}</kol-${t}>`;let c;try{c=(0,p.format)(s,{plugins:[k()],printWidth:80}).replace(/;\n$/,"")}catch(d){c=`\x3c!-- Formatter-Error: Slot-Markup is not valid HTML for formatting. --\x3e\n${s}`}return i.createElement("div",{className:"h-48 rounded-md overflow-hidden"},i.createElement(m.ZP,{defaultLanguage:"html",height:"100%",options:{automaticLayout:!0,fontSize:16,lineNumbers:"off",readOnly:!0},value:c}))}function g(e){const t={};Object.entries(e.params).filter((e=>!e[0].startsWith("slot-"))).forEach((e=>{t[e[0]]=e[1]}));const n=Object.entries(e.params).filter((e=>e[0].startsWith("slot-"))),a={abbr:l.T5,accordion:l.RZ,alert:l.K5,avatar:l.Ek,badge:l.Er,breadcrumb:l.lo,button:l.ic,"button-group":l.uz,"button-link":l.f6,card:l.Gc,details:l.ox,form:l.m5,heading:l.HA,icon:l.Jl,image:l.Cd,"indented-text":l.CV,"input-checkbox":l.TE,"input-color":l.Np,"input-date":l.O,"input-email":l.Lj,"input-file":l.CX,"input-number":l.c2,"input-password":l.z5,"input-radio":l.sy,"input-range":l.TQ,"input-text":l.WD,kolibri:l.Vs,link:l.Nv,"link-button":l.Kc,"link-group":l.$o,logo:l.QK,modal:l.Ud,nav:l.MA,pagination:l.Q4,popover:l.hV,progress:l.WR,quote:l.VZ,select:l.r7,"skip-nav":l.P,spin:l.qq,"split-button":l.KJ,symbol:l.is,table:l.Vp,tabs:l.UD,textarea:l.Qs,toast:l.CO,version:l.u_}[e.tag];return a?i.createElement(a,t,n.map((e=>i.createElement("div",{key:e[0],slot:e[0].replace("slot-",""),dangerouslySetInnerHTML:{__html:e[1]}})))):i.createElement("div",null,"Tag not implemented")}function h(e){const{description:t,name:n,update:a,value:l}=e;return i.createElement("div",{className:"bg-gray-100 my-2 rounded-lg p-2 border border-gray-300 border-solid"},i.createElement("b",null,n||"default"),": ",t,i.createElement("br",null),i.createElement(m.ML,{defaultLanguage:"html",height:"5em",onChange:e=>a(`slot-${n}`,e||""),options:{automaticLayout:!0,fontSize:16,lineNumbers:"off"},value:l}))}const f=["_smart-button","_icon-align"];function N(e){const[t,n]=(0,i.useState)(function(){const e={};return Object.values(a.p).forEach((t=>{const n=t.name.replace("kol-","");e[n]={defaultValues:[]},t.attributes.forEach((t=>{t.defaultValue&&(e[n][t.name]=t.defaultValue.replace(/'/g,""),e[n].defaultValues.push(t.name))}))})),e}()),[o,s]=(0,i.useState)("badge");(0,i.useEffect)((()=>{e.component&&s(e.component.replace("kol-",""))}),[e.component]),(0,i.useEffect)((()=>{!!a.p.find((e=>e.name===`kol-${o}`))?.attributes.find((e=>"_label"===e.name))&&!t[o]?._label&&m("_label","Label-Text");!!a.p.find((e=>e.name===`kol-${o}`))?.attributes.find((e=>"_heading"===e.name))&&!t[o]?._heading&&m("_heading","Heading-Text")}),[o]);const c=(0,i.useMemo)((()=>t[o]||{}),[t,o]);function m(e,t){n((n=>{const a={...n[o],[e]:t,defaultValues:n[o].defaultValues.filter((t=>t!==e))};return{...n,[o]:a}}))}const p=Object.values(a.p).find((e=>e.name===`kol-${o}`));return i.createElement(r.Z,null,(()=>i.createElement(i.Fragment,null,i.createElement(l.Er,{class:"mb-2",_label:"Beta",_color:"#b00"}),i.createElement("div",{className:"grid lg:grid-cols-3 gap-2"},i.createElement(l.UD,{className:"col-span-2",_ariaLabel:"Wechselnavigation zwischen Viewer und Code",_tabs:[{_label:"Viewer"},{_label:"Code"}]},i.createElement("div",{className:"p-2"},i.createElement(g,{tag:o,params:c})),i.createElement("div",{className:"lg:col-span-2"},i.createElement(b,{params:c,tag:o}))),i.createElement("div",{className:"grid gap-4 p-2 border-0 border-l border-solid"},i.createElement(l.HA,{_level:3,_label:"Konfigurator"}),i.createElement("div",null,i.createElement(l.HA,{_level:4,_label:"Properties"}),i.createElement("div",{className:"max-h-96 p-2 overflow-auto mb-4"},p&&p.attributes.map((e=>i.createElement(i.Fragment,null,!f.includes(e.name)&&!e.description.startsWith("Deprecated:")&&i.createElement(d,{key:e.name,attribute:e,update:m,value:c[e.name]})))),p&&0===p.attributes.length&&i.createElement("span",{className:"text-gray-500"},"Keine Properties vorhanden")),i.createElement(l.HA,{_level:4,_label:"Slots"}),i.createElement("div",{className:"max-h-56 p-2 overflow-auto"},p&&p.slots.map((e=>i.createElement(h,{key:e.name,description:e.description,name:e.name,update:m,value:c["slot-"+e.name]}))),p&&0===p.slots.length&&i.createElement("span",{className:"text-gray-500"},"Keine Slots vorhanden"))))))))}},87051:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>c,default:()=>b,frontMatter:()=>s,metadata:()=>d,toc:()=>p});var a=n(15882),l=(n(50959),n(17942)),i=n(52801),r=n(63739),o=n(31617);const s={title:"Icon",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die Icon-Komponente.",tags:["Icon","Beschreibung","Spezifikation","Beispiele"]},c=void 0,d={unversionedId:"components/icon",id:"components/icon",title:"Icon",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die Icon-Komponente.",source:"@site/docs/30-components/icon.mdx",sourceDirName:"30-components",slug:"/components/icon",permalink:"/docs/next/components/icon",draft:!1,tags:[{label:"Icon",permalink:"/docs/next/tags/icon"},{label:"Beschreibung",permalink:"/docs/next/tags/beschreibung"},{label:"Spezifikation",permalink:"/docs/next/tags/spezifikation"},{label:"Beispiele",permalink:"/docs/next/tags/beispiele"}],version:"current",frontMatter:{title:"Icon",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die Icon-Komponente.",tags:["Icon","Beschreibung","Spezifikation","Beispiele"]},sidebar:"tutorialSidebar",previous:{title:"IconIcofont",permalink:"/docs/next/components/icon-icofont"},next:{title:"Image",permalink:"/docs/next/components/image"}},m={},p=[{value:"Live-Editor",id:"live-editor",level:2},{value:"Beispiele",id:"beispiele",level:2}],u={toc:p},k="wrapper";function b(e){let{components:t,...n}=e;return(0,l.kt)(k,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)(i.default,{mdxType:"Readme"}),(0,l.kt)("h2",{id:"live-editor"},"Live-Editor"),(0,l.kt)(o._,{component:"icon",mdxType:"LiveEditorCompact"}),(0,l.kt)("h2",{id:"beispiele"},"Beispiele"),(0,l.kt)(r._,{component:"icon",sample:"basic",mdxType:"Configurator"}))}b.isMDXComponent=!0},52801:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var a=n(15882),l=(n(50959),n(17942));const i={},r=void 0,o={unversionedId:"readmes/icon/readme",id:"readmes/icon/readme",title:"readme",description:"Mit Hilfe der Icon-Komponente k\xf6nnen Icons aus eingebundenen Icon-Fonts an beliebigen Positionen dargestellt werden. Die Ausgabe des Icon kann \xfcber das Attribut _icon gesteuert werden und erfolgt durch das Attribut _label barrierefrei. Die Ausgabe erfolgt standardm\xe4\xdfig als inline-Element.",source:"@site/docs/readmes/icon/readme.md",sourceDirName:"readmes/icon",slug:"/readmes/icon/",permalink:"/docs/next/readmes/icon/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"readme",permalink:"/docs/next/readmes/heading/"},next:{title:"readme",permalink:"/docs/next/readmes/icon-font-awesome/"}},s={},c=[{value:"Konstruktion",id:"konstruktion",level:2},{value:"Code",id:"code",level:3},{value:"Beispiel",id:"beispiel",level:3},{value:"Icon",id:"icon",level:3},{value:"Barrierefreiheit",id:"barrierefreiheit",level:2},{value:"Aria-Label",id:"aria-label",level:3},{value:"Links und Referenzen",id:"links-und-referenzen",level:2},{value:"Properties",id:"properties",level:2},{value:"Shadow Parts",id:"shadow-parts",level:2},{value:"Dependencies",id:"dependencies",level:2},{value:"Used by",id:"used-by",level:3},{value:"Graph",id:"graph",level:3}],d={toc:c},m="wrapper";function p(e){let{components:t,...n}=e;return(0,l.kt)(m,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Mit Hilfe der ",(0,l.kt)("strong",{parentName:"p"},"Icon"),"-Komponente k\xf6nnen Icons aus eingebundenen Icon-Fonts an beliebigen Positionen dargestellt werden. Die Ausgabe des Icon kann \xfcber das Attribut ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"_icon"))," gesteuert werden und erfolgt durch das Attribut ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"_label"))," barrierefrei. Die Ausgabe erfolgt standardm\xe4\xdfig als ",(0,l.kt)("em",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"em"},"inline")),"-Element."),(0,l.kt)("p",null,"Aktuell werden die Icons von ",(0,l.kt)("kol-link",{_href:"https://microsoft.github.io/vscode-codicons/dist/codicon.html",_label:"https://microsoft.github.io/vscode-codicons/dist/codicon.html",_target:"_blank",_label:"Codicons"})," unterst\xfctzt."),(0,l.kt)("p",null,(0,l.kt)("kol-alert",{_heading:"Hinweis",_type:"info"},"Es ist wichtig, dass in der Rahmenseite (",(0,l.kt)("inlineCode",{parentName:"p"},"index.html"),") die CSS-Dateie(n) der Icon-Font(s) eingebunden ist/sind.")),(0,l.kt)("h2",{id:"konstruktion"},"Konstruktion"),(0,l.kt)("p",null,"Die Komponente ",(0,l.kt)("strong",{parentName:"p"},"Icon")," wird \xfcber das HTML-Tag ",(0,l.kt)("inlineCode",{parentName:"p"},"kol-icon")," erzeugt."),(0,l.kt)("h3",{id:"code"},"Code"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'<kol-icon _label="Zu Hause" _icon="codicon codicon-home"></kol-icon>\n')),(0,l.kt)("h3",{id:"beispiel"},"Beispiel"),(0,l.kt)("p",null,(0,l.kt)("kol-icon",{_label:"Zu Hause",_icon:"codicon codicon-home"})),(0,l.kt)("h3",{id:"icon"},"Icon"),(0,l.kt)("p",null,"Das Icon (",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"_icon")),") kann entweder als String angegeben werden, oder als Objekt.\nAls String \xfcbergeben Sie die Iconklasse (z.B.: ",(0,l.kt)("inlineCode",{parentName:"p"},'_icon="codicon codicon-home'),"), das Icon wird links vom Text angezeigt.\nDas Objekt ist vom Typ ",(0,l.kt)("inlineCode",{parentName:"p"},"KoliBriAllIcon"),", kann also einen oder mehrere der Schl\xfcssel ",(0,l.kt)("inlineCode",{parentName:"p"},"top"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"right"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"bottom")," und ",(0,l.kt)("inlineCode",{parentName:"p"},"left")," besitzen. Diese sind dann entweder String (siehe oben) oder ein Objekt vom Typ ",(0,l.kt)("inlineCode",{parentName:"p"},"KoliBriCustomIcon"),", welches aus ",(0,l.kt)("inlineCode",{parentName:"p"},"icon")," (String, siehe oben) und ",(0,l.kt)("inlineCode",{parentName:"p"},"style")," (optional, Styleobjekt) besteht."),(0,l.kt)("p",null,(0,l.kt)("kol-link",{_href:"https://microsoft.github.io/vscode-codicons/dist/codicon.html",_label:"https://microsoft.github.io/vscode-codicons/dist/codicon.html",_target:"_blank",_label:"\xdcbersicht Codicons"})),(0,l.kt)("h2",{id:"barrierefreiheit"},"Barrierefreiheit"),(0,l.kt)("p",null,"Wichtig ist bei Kontext-relevanten Grafiken, dass sie beschriftet werden."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("kol-link",{_href:"",_label:""}),(0,l.kt)("a",{parentName:"li",href:"https://www.w3.org/WAI/ARIA/apg/practices/names-and-descriptions/"},"https://www.w3.org/WAI/ARIA/apg/practices/names-and-descriptions/"))),(0,l.kt)("h3",{id:"aria-label"},"Aria-Label"),(0,l.kt)("p",null,"Mittels der Auszeichnung ",(0,l.kt)("inlineCode",{parentName:"p"},"aria-label")," muss ein Kontext-relevantes Icon beschriftet werden."),(0,l.kt)("h2",{id:"links-und-referenzen"},"Links und Referenzen"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("kol-link",{_href:"https://github.com/microsoft/vscode-codicons",_label:"https://github.com/microsoft/vscode-codicons",_target:"_blank",_label:"Codicons"})),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("kol-link",{_href:"https://fontawesome.com",_label:"https://fontawesome.com",_target:"_blank",_label:"Font-Awesome"})),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("kol-link",{_href:"https://icofont.com",_label:"https://icofont.com",_target:"_blank",_label:"Icofont"}))),(0,l.kt)("h2",{id:"properties"},"Properties"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Property"),(0,l.kt)("th",{parentName:"tr",align:null},"Attribute"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_ariaLabel")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_aria-label")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{className:"text-red-500"},(0,l.kt)("strong",{parentName:"td"},"[DEPRECATED]"))," use ","_","label instead",(0,l.kt)("br",null),(0,l.kt)("br",null),"Deprecated: Setzt die semantische Beschriftung der Komponente."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},"undefined")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_icon")," ",(0,l.kt)("em",{parentName:"td"},"(required)")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_icon")),(0,l.kt)("td",{parentName:"tr",align:null},"Defines the icon classnames (e.g. ",(0,l.kt)("inlineCode",{parentName:"td"},'_icon="fa-solid fa-user"'),")."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_label")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_label")),(0,l.kt)("td",{parentName:"tr",align:null},"Defines the visible or semantic label of the component (e.g. aria-label, label, headline, caption, summary, etc.)."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},"undefined")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_part")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_part")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{className:"text-red-500"},(0,l.kt)("strong",{parentName:"td"},"[DEPRECATED]"))," Das Styling sollte stets \xfcber CSS erfolgen.",(0,l.kt)("br",null),(0,l.kt)("br",null),"Deprecated: Gibt den Identifier f\xfcr den CSS-Part an, um das Icon von Au\xdfen \xe4ndern zu k\xf6nnen. (",(0,l.kt)("a",{parentName:"td",href:"https://meowni.ca/posts/part-theme-explainer/"},"https://meowni.ca/posts/part-theme-explainer/"),")"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},"undefined")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"undefined"))))),(0,l.kt)("h2",{id:"shadow-parts"},"Shadow Parts"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Part"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'"icon"')),(0,l.kt)("td",{parentName:"tr",align:null},"Erm\xf6glicht das Styling des inneren Icons.")))),(0,l.kt)("h2",{id:"dependencies"},"Dependencies"),(0,l.kt)("h3",{id:"used-by"},"Used by"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"./alert"},"kol-alert-wc")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"./breadcrumb"},"kol-breadcrumb")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"./details"},"kol-details")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"./icon-font-awesome"},"kol-icon-font-awesome")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"./icon-icofont"},"kol-icon-icofont")),(0,l.kt)("li",{parentName:"ul"},"kol-input"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"./input-checkbox"},"kol-input-checkbox")),(0,l.kt)("li",{parentName:"ul"},"kol-link-wc"),(0,l.kt)("li",{parentName:"ul"},"kol-span-wc")),(0,l.kt)("h3",{id:"graph"},"Graph"),(0,l.kt)("mermaid",{value:"graph TD;\n  kol-alert-wc --\x3e kol-icon\n  kol-breadcrumb --\x3e kol-icon\n  kol-details --\x3e kol-icon\n  kol-icon-font-awesome --\x3e kol-icon\n  kol-icon-icofont --\x3e kol-icon\n  kol-input --\x3e kol-icon\n  kol-input-checkbox --\x3e kol-icon\n  kol-link-wc --\x3e kol-icon\n  kol-span-wc --\x3e kol-icon\n  style kol-icon fill:#f9f,stroke:#333,stroke-width:4px"}),(0,l.kt)("hr",null))}p.isMDXComponent=!0}}]);