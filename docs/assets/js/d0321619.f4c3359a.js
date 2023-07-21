"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[1842],{63739:(e,t,n)=>{n.d(t,{_:()=>d});var a=n(32234),l=n(50959);const i=function(e,t,n,a,l){return void 0===l&&(l="editor"),`${e}&module=${a}&initialpath=%23%2F${t}%2F${n}&view=${l}`},r={width:"100%",height:"500px",border:"0",overflow:"hidden"},o=e=>{let{url:t}=e;return l.createElement("div",{className:"m-2"},l.createElement("iframe",{src:t,style:r,title:"kolibri-public-ui-code-samples",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}),l.createElement(a.Nv,{_href:t,_label:"",_target:"codesandbox"},l.createElement("img",{alt:"CodeSandbox-Schalter",src:"https://codesandbox.io/static/img/play-codesandbox.svg"})))},d=e=>{let{component:t,sample:n}=e;const[d,s]=(0,l.useState)("Preview"),m="https://codesandbox.io/embed/kolibri-public-ui-react-samples-w5u37c?fontsize=14&hidenavigation=1&autoresize=1&theme=dark",u=`%2Fsrc%2Fsamples%2F${t}%2F${n}`,p={angular:`${u}.html`,react:`${u}.tsx`,vue:`${u}.vue`,webcomponent:`${u}.html`},c=`/sample-react/#/${t}/${n}`,k={onSelect:(e,t)=>{switch(t){case 1:s((()=>"Angular"));break;case 2:s((()=>"React"));break;case 3:s((()=>"Vue"));break;case 4:s((()=>"Web Component"));break;default:s((()=>"Preview"))}}};return l.createElement(a.UD,{className:"w-full",_ariaLabel:"Code-Beispiel",_on:k,_tabs:[{_label:"Vorschau"},{_disabled:!0,_label:"Angular"},{_label:"React"},{_disabled:!0,_label:"Vue"},{_disabled:!0,_label:"Web Component"}]},l.createElement("div",null,"Preview"===d&&l.createElement("iframe",{src:c,style:r,title:"kolibri-public-ui-code-samples",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"})),l.createElement("div",null,"Angular"===d&&l.createElement(o,{url:i(m,t,n,p.angular)})),l.createElement("div",null,"React"===d&&l.createElement(o,{url:i(m,t,n,p.react)})),l.createElement("div",null,"Vue"===d&&l.createElement(o,{url:i(m,t,n,p.vue)})),l.createElement("div",null,"Web Component"===d&&l.createElement(o,{url:i(m,t,n,p.webcomponent)})))}},49433:(e,t,n)=>{n.d(t,{_:()=>f});var a=n(30322),l=n(32234),i=n(50959),r=n(90787);function o(e){const{attribute:t,label:n,update:a,value:r}=e,[o,d]=(0,i.useState)(""),[s,m]=(0,i.useState)(""),[u,p]=(0,i.useState)(""),[c,k]=(0,i.useState)("");let b=!1,g=!1,N=!1,h=!1;t.type.includes("KoliBriAllIcon")?(b=!0,g=!0,N=!0,h=!0):(t.type.includes("KoliBriVerticalIcon")&&(N=!0,h=!0),t.type.includes("KoliBriHorizontalIcon")&&(b=!0,g=!0)),(0,i.useEffect)((()=>{if(!o||s||u||c){const e={};o&&(e.left=`codicon codicon-${o}`),s&&(e.right=`codicon codicon-${s}`),u&&(e.top=`codicon codicon-${u}`),c&&(e.bottom=`codicon codicon-${c}`),Object.keys(e).length&&a(t.name,JSON.stringify(e))}else a(t.name,`codicon codicon-${o}`)}),[o,s,u,c]);const f=["home","arrow-up","arrow-right","arrow-down","arrow-left"];return i.createElement("div",null,n,b?i.createElement(l.ox,{_summary:"Links"},i.createElement("div",{className:"flex flex-wrap"},f.map((e=>i.createElement(l.ic,{key:e,_icon:`codicon codicon-${e}`,_hideLabel:!0,_label:"",_on:{onClick:t=>d(e)}}))))):"",g?i.createElement(l.ox,{_summary:"Rechts"},i.createElement("div",{className:"flex flex-wrap"},f.map((e=>i.createElement(l.ic,{key:e,_icon:`codicon codicon-${e}`,_hideLabel:!0,_label:"",_on:{onClick:t=>m(e)}}))))):"",N?i.createElement(l.ox,{_summary:"Oben"},i.createElement("div",{className:"flex flex-wrap"},f.map((e=>i.createElement(l.ic,{key:e,_icon:`codicon codicon-${e}`,_hideLabel:!0,_label:"",_on:{onClick:t=>p(e)}}))))):"",h?i.createElement(l.ox,{_summary:"Unten"},i.createElement("div",{className:"flex flex-wrap"},f.map((e=>i.createElement(l.ic,{key:e,_icon:`codicon codicon-${e}`,_hideLabel:!0,_label:"",_on:{onClick:t=>k(e)}}))))):"")}function d(e){const{label:t,name:n,update:a,value:r}=e;return(0,i.useEffect)((()=>{r||a(n,"#000000")}),[]),i.createElement(l.Np,{_on:{onChange:(e,t)=>a(n,t)},_value:r},t)}function s(e){const{name:t,label:n,types:a,update:r,value:o}=e,d=[];function s(e){return{label:e,value:e}}return a.includes("undefined")?(d.push({label:"-",value:void 0}),d.push(...a.filter((e=>"undefined"!==e)).map(s))):d.push(...a.filter((e=>"undefined"!==e)).map(s)),i.createElement(l.r7,{className:"my-2",_list:JSON.stringify(d),_on:{onChange:(e,n)=>r(t,n[0])},_value:o},n)}function m(e){const{attribute:t,update:n,value:a}=e,r=(0,i.useMemo)((()=>{let e=t.type.replace(/\\?"/g,"").split(" | ");return e=e.filter((e=>"KoliBriAllIcon ignorieren"!==e)),1===e.length?e[0]:e.includes("string")?"string":e.includes("number")?"number":e.includes("boolean")?"boolean":""}),[t]),m=(0,i.useMemo)((()=>{const e=t.type.split(" | ").map((e=>e.replace(/\\?"/g,""))),m=i.createElement(l.T5,{_title:t.description},t.name);switch(t.name){case"_color":return i.createElement(d,{name:t.name,label:m,update:n,value:a});case"_icon":return i.createElement(o,{attribute:t,label:m,update:n,value:a});default:switch(r){case"string":return i.createElement(l.WD,{className:"my-2",_on:{onChange:(e,a)=>n(t.name,a)},_value:a||""},m);case"number":return i.createElement(l.c2,{className:"my-2",_on:{onChange:(e,a)=>n(t.name,a)},_value:a},m);case"boolean":return i.createElement(l.TE,{className:"my-2",_checked:a,_on:{onChange:(e,a)=>n(t.name,a)},_variant:"switch"},m);default:return e.length>1?i.createElement(s,{label:m,name:t.name,types:e,update:n,value:a}):i.createElement("p",null,"Attribut: '",t.name,"'",i.createElement("br",null),"Typ: '",t.type,"'")}}}),[t,a]);return i.createElement(i.Fragment,null,m)}var u=n(80376),p=n(77192),c=n(85630),k=n.n(c);function b(e){const{tag:t,params:n}=e,a=Object.entries(n).filter((e=>"defaultValues"!==e[0]));let l="";const r=(0,i.useMemo)((()=>{let e="";return a.filter((e=>e[0].startsWith("slot-"))).forEach((t=>{const n=t[1],a=t[0].split("-")[1];if(n)if(n.match(/^<.*?>/)?.length){const t=n.indexOf(">");e+=n.substring(0,t)+` slot="${a}"`+n.substring(t)}else e+=`<div slot="${a}">${n}</div>`})),e}),[n]),o=a.filter((e=>!e[0].startsWith("slot-"))).filter((e=>!n.defaultValues.includes(e[0])));for(const[i,u]of o)if(u){let e="";switch(typeof u){case"string":e=` ${i}="${u.replace(/"/g,"'")}"`;break;case"number":e=` ${i}="${u.toString()}"`;break;case"boolean":e=u?` ${i}`:"";break;case"object":e=` ${i}="${JSON.stringify(u)}"`;break;default:e="Never give up hope, one day everything will be fixed."}l+=e}const d=`<kol-${t}${l}>${r}</kol-${t}>`;let s;try{s=(0,p.format)(d,{plugins:[k()],printWidth:80}).replace(/;\n$/,"")}catch(m){s=`\x3c!-- Formatter-Error: Slot-Markup is not valid HTML for formatting. --\x3e\n${d}`}return i.createElement("div",{className:"h-48 rounded-md overflow-hidden"},i.createElement(u.ZP,{defaultLanguage:"html",height:"100%",options:{automaticLayout:!0,fontSize:16,lineNumbers:"off",readOnly:!0},value:s}))}function g(e){const t={};Object.entries(e.params).filter((e=>!e[0].startsWith("slot-"))).forEach((e=>{t[e[0]]=e[1]}));const n=Object.entries(e.params).filter((e=>e[0].startsWith("slot-"))),a={abbr:l.T5,accordion:l.RZ,alert:l.K5,badge:l.Er,breadcrumb:l.lo,button:l.ic,"button-group":l.uz,"button-link":l.f6,card:l.Gc,details:l.ox,form:l.m5,heading:l.HA,icon:l.Jl,image:l.Cd,"indented-text":l.CV,"input-checkbox":l.TE,"input-color":l.Np,"input-date":l.O,"input-email":l.Lj,"input-file":l.CX,"input-number":l.c2,"input-password":l.z5,"input-radio":l.sy,"input-range":l.TQ,"input-text":l.WD,kolibri:l.Vs,link:l.Nv,"link-button":l.Kc,"link-group":l.$o,logo:l.QK,modal:l.Ud,nav:l.MA,pagination:l.Q4,popover:l.hV,progress:l.WR,quote:l.VZ,select:l.r7,"skip-nav":l.P,spin:l.qq,symbol:l.is,table:l.Vp,tabs:l.UD,textarea:l.Qs,toast:l.CO,tooltip:l.Ze,version:l.u_}[e.tag];return a?i.createElement(a,t,n.map((e=>i.createElement("div",{key:e[0],slot:e[0].replace("slot-",""),dangerouslySetInnerHTML:{__html:e[1]}})))):i.createElement("div",null,"Tag not implemented")}function N(e){const{description:t,name:n,update:a,value:l}=e;return i.createElement("div",{className:"bg-gray-100 my-2 rounded-lg p-2 border border-gray-300 border-solid"},i.createElement("b",null,n||"default"),": ",t,i.createElement("br",null),i.createElement(u.ML,{defaultLanguage:"html",height:"5em",onChange:e=>a(`slot-${n}`,e||""),options:{automaticLayout:!0,fontSize:16,lineNumbers:"off"},value:l}))}const h=["_smart-button","_icon-align"];function f(e){const[t,n]=(0,i.useState)(function(){const e={};return Object.values(a.p).forEach((t=>{const n=t.name.replace("kol-","");e[n]={defaultValues:[]},t.attributes.forEach((t=>{t.defaultValue&&(e[n][t.name]=t.defaultValue.replaceAll("'",""),e[n].defaultValues.push(t.name))}))})),e}()),[o,d]=(0,i.useState)("badge");(0,i.useEffect)((()=>{e.component&&d(e.component.replace("kol-",""))}),[e.component]),(0,i.useEffect)((()=>{!!a.p.find((e=>e.name===`kol-${o}`))?.attributes.find((e=>"_label"===e.name))&&!t[o]?._label&&u("_label","Label-Text");!!a.p.find((e=>e.name===`kol-${o}`))?.attributes.find((e=>"_heading"===e.name))&&!t[o]?._heading&&u("_heading","Heading-Text")}),[o]);const s=(0,i.useMemo)((()=>t[o]||{}),[t,o]);function u(e,t){n((n=>{const a={...n[o],[e]:t,defaultValues:n[o].defaultValues.filter((t=>t!==e))};return{...n,[o]:a}}))}const p=Object.values(a.p).find((e=>e.name===`kol-${o}`));return i.createElement(r.Z,null,(()=>i.createElement(i.Fragment,null,i.createElement(l.Er,{class:"mb-2",_label:"Beta",_color:"#b00"}),i.createElement("div",{className:"grid lg:grid-cols-3 gap-2"},i.createElement(l.UD,{className:"col-span-2",_ariaLabel:"Wechselnavigation zwischen Viewer und Code",_tabs:[{_label:"Viewer"},{_label:"Code"}]},i.createElement("div",{className:"p-2"},i.createElement(g,{tag:o,params:s})),i.createElement("div",{className:"lg:col-span-2"},i.createElement(b,{params:s,tag:o}))),i.createElement("div",{className:"grid gap-4 p-2 border-0 border-l border-solid"},i.createElement(l.HA,{_level:3,_label:"Konfigurator"}),i.createElement("div",null,i.createElement(l.HA,{_level:4,_label:"Properties"}),i.createElement("div",{className:"max-h-96 p-2 overflow-scroll mb-4"},p&&p.attributes.map((e=>i.createElement(i.Fragment,null,!h.includes(e.name)&&i.createElement(m,{key:e.name,attribute:e,update:u,value:s[e.name]})))),p&&0===p.slots.length&&i.createElement("span",{className:"text-gray-500"},"Keine Properties vorhanden")),i.createElement(l.HA,{_level:4,_label:"Slots"}),i.createElement("div",{className:"max-h-56 p-2 overflow-scroll"},p&&p.slots.map((e=>i.createElement(N,{key:e.name,description:e.description,name:e.name,update:u,value:s["slot-"+e.name]}))),p&&0===p.slots.length&&i.createElement("span",{className:"text-gray-500"},"Keine Slots vorhanden"))))))))}},48244:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>u,default:()=>N,frontMatter:()=>m,metadata:()=>p,toc:()=>k});var a=n(15882),l=(n(50959),n(17942));const i={toc:[{value:"Konstruktion",id:"konstruktion",level:2},{value:"Code",id:"code",level:3},{value:"Beispiel",id:"beispiel",level:3},{value:"Verwendung",id:"verwendung",level:2},{value:"Beschriftung",id:"beschriftung",level:3},{value:"Icon",id:"icon",level:3},{value:"Schaltfl\xe4che ohne Text",id:"schaltfl\xe4che-ohne-text",level:3},{value:"Darstellung angeben",id:"darstellung-angeben",level:3},{value:"Best practices",id:"best-practices",level:3},{value:"Barrierefreiheit",id:"barrierefreiheit",level:2},{value:"Tastatursteuerung",id:"tastatursteuerung",level:3},{value:"Links und Referenzen",id:"links-und-referenzen",level:2},{value:"Properties",id:"properties",level:2},{value:"Dependencies",id:"dependencies",level:2},{value:"Used by",id:"used-by",level:3},{value:"Depends on",id:"depends-on",level:3},{value:"Graph",id:"graph",level:3}]},r="wrapper";function o(e){let{components:t,...n}=e;return(0,l.kt)(r,(0,a.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Buttons")," dienen dazu, Benutzer:innen Auswahlm\xf6glichkeiten f\xfcr Aktionen anzuzeigen und diese in einer klaren Hierarchie anzuordnen. Sie helfen Nutzer:innen, die wichtigsten Aktionen einer Seite oder innerhalb eines Viewports zu finden und erm\xf6glichen es ihnen, diese Aktionen auszuf\xfchren. Die Beschriftung des Buttons wird verwendet, um Nutzer:innen klar anzuzeigen, welche Aktion ausgel\xf6st wird. Buttons erm\xf6glichen es Nutzer:innen, eine \xc4nderung zu best\xe4tigen, Schritte in einer Aufgabe abzuschlie\xdfen oder Entscheidungen zu treffen."),(0,l.kt)("h2",{id:"konstruktion"},"Konstruktion"),(0,l.kt)("h3",{id:"code"},"Code"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'<kol-button _label="Primary" _variant="primary"></kol-button>\n<kol-button _label="Secondary" _variant="secondary"></kol-button>\n<kol-button _label="Normal" _variant="normal"></kol-button>\n<kol-button _label="Danger" _variant="danger"></kol-button>\n<kol-button _label="Ghost" _variant="ghost"></kol-button>\n')),(0,l.kt)("h3",{id:"beispiel"},"Beispiel"),(0,l.kt)("p",null,"Default"),(0,l.kt)("div",{className:"flex flex-wrap gap-2"},(0,l.kt)("kol-button",{_label:"Primary",_variant:"primary"}),(0,l.kt)("kol-button",{_label:"Secondary",_variant:"secondary"}),(0,l.kt)("kol-button",{_label:"Normal",_variant:"normal"}),(0,l.kt)("kol-button",{_label:"Danger",_variant:"danger"}),(0,l.kt)("kol-button",{_label:"Ghost",_variant:"ghost"})),(0,l.kt)("p",null,"Disabled"),(0,l.kt)("div",{className:"flex flex-wrap gap-2"},(0,l.kt)("kol-button",{_label:"Primary",_variant:"primary",_disabled:!0}),(0,l.kt)("kol-button",{_label:"Secondary",_variant:"secondary",_disabled:!0}),(0,l.kt)("kol-button",{_label:"Normal",_variant:"normal",_disabled:!0}),(0,l.kt)("kol-button",{_label:"Danger",_variant:"danger",_disabled:!0}),(0,l.kt)("kol-button",{_label:"Ghost",_variant:"ghost",_disabled:!0})),(0,l.kt)("h2",{id:"verwendung"},"Verwendung"),(0,l.kt)("h3",{id:"beschriftung"},"Beschriftung"),(0,l.kt)("p",null,"F\xfcr die eindeutige Beschriftung des Buttons nutzen Sie das Attribut ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"_label")),".\n",(0,l.kt)("inlineCode",{parentName:"p"},'_label="Schaltfl\xe4chenbeschriftung"')),(0,l.kt)("h3",{id:"icon"},"Icon"),(0,l.kt)("p",null,"Ein Icon (",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"_icon")),") kann entweder als String angegeben werden, oder als Objekt.\nAls String \xfcbergeben Sie die Iconklasse (z.B.: ",(0,l.kt)("inlineCode",{parentName:"p"},'_icon="codicon codicon-home'),"), das Icon wird links vom Text angezeigt.\nDas Objekt ist vom Typ ",(0,l.kt)("inlineCode",{parentName:"p"},"KoliBriAllIcon"),", kann also einen oder mehrere der Schl\xfcssel ",(0,l.kt)("inlineCode",{parentName:"p"},"top"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"right"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"bottom")," und ",(0,l.kt)("inlineCode",{parentName:"p"},"left")," besitzen. Diese sind dann entweder String (siehe oben) oder ein Objekt vom Typ ",(0,l.kt)("inlineCode",{parentName:"p"},"KoliBriCustomIcon"),", welches aus ",(0,l.kt)("inlineCode",{parentName:"p"},"icon")," (String, siehe oben) und ",(0,l.kt)("inlineCode",{parentName:"p"},"style")," (optional, Styleobjekt) besteht."),(0,l.kt)("p",null,(0,l.kt)("kol-link",{_href:"https://microsoft.github.io/vscode-codicons/dist/codicon.html",_target:"_blank",_label:"\xdcbersicht Codicons"})),(0,l.kt)("h3",{id:"schaltfl\xe4che-ohne-text"},"Schaltfl\xe4che ohne Text"),(0,l.kt)("p",null,"Mittels ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"_hide-label"))," wird die Schaltfl\xe4che nur das icon anzeigen (",(0,l.kt)("kol-link",{_href:"#icon",_label:"siehe icon"}),")"),(0,l.kt)("p",null,(0,l.kt)("kol-alert",{_type:"info"},"Beachten Sie, dass das Attribut ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"_label"))," auch dann gesetzt werden muss, wenn nur ein Icon angezeigt werden soll, dieses wird von Screenreadern vorgelesen und in den Tooltip gesetzt.")),(0,l.kt)("h3",{id:"darstellung-angeben"},"Darstellung angeben"),(0,l.kt)("p",null,"Zur Steuerung der Darstellung verwenden Sie das Attribut ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"_variant")),". Der Standardwert ist ",(0,l.kt)("inlineCode",{parentName:"p"},"primary"),", alternativ kann auch ",(0,l.kt)("inlineCode",{parentName:"p"},"primary"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"secondary"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"normal"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"danger"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"ghost"),", oder ",(0,l.kt)("inlineCode",{parentName:"p"},"custom")," gesetzt werden.",(0,l.kt)("br",null)),(0,l.kt)("p",null,"\xdcber die Verwendung des Wertes ",(0,l.kt)("inlineCode",{parentName:"p"},"custom")," kann eine eigene Darstellung gew\xe4hlt werden. Verpflichtend ist in diesem Fall das Setzen des Attribut ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"_custom-class")),", damit die Schaltfl\xe4che im Shadow-Dom mittels CSS selektiert werden kann."),(0,l.kt)("h3",{id:"best-practices"},"Best practices"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Verwenden Sie eine prim\xe4re Schaltfl\xe4che f\xfcr die n\xe4chstbeste Aktion. Verbleibende Calls-to-Action sollten als sekund\xe4re Schaltfl\xe4che dargestellt werden."),(0,l.kt)("li",{parentName:"ul"},"Verwenden Sie Schaltfl\xe4chen an einheitlichen Stellen in der Benutzeroberfl\xe4che, um die Benutzererfahrung zu verbessern."),(0,l.kt)("li",{parentName:"ul"},"Verwenden Sie nur eine prim\xe4re Schaltfl\xe4che je Viewport. Auf der gesamten Seite kann ein Button-Style beliebig oft auftreten."),(0,l.kt)("li",{parentName:"ul"},"Die Beschriftung des Button muss die Aktion beschreiben, die die Schaltfl\xe4che ausf\xfchrt. Sie sollte ein Verb enthalten (z.B. Speichern). Verwenden Sie pr\xe4gnante, spezifische, selbsterkl\xe4rende Beschriftungen."),(0,l.kt)("li",{parentName:"ul"},'Schaltfl\xe4chenbeschriftungen sollten immer dann auch ein Nomen enthalten, wenn es Raum f\xfcr Interpretationen dar\xfcber gibt, wof\xfcr das Verb zust\xe4ndig ist. Verwenden Sie keine generischen Bezeichnungen wie "OK", insbesondere nicht im Fehlerfall. Fehler sind nie "OK".'),(0,l.kt)("li",{parentName:"ul"},'Verwenden Sie nicht mehrere Buttons im Style "prim\xe4r" innerhalb einer Gruppierung.'),(0,l.kt)("li",{parentName:"ul"},"Verwenden Sie Buttons nicht als Link oder als Navigationselement.")),(0,l.kt)("h2",{id:"barrierefreiheit"},"Barrierefreiheit"),(0,l.kt)("p",null,"F\xfcr Menschen mit einem eingeschr\xe4nkten Sichtfeld ist die Positionierung des ",(0,l.kt)("strong",{parentName:"p"},"Icons")," im Button links von der Beschriftung optimal."),(0,l.kt)("p",null,"Probleme mit Disabled-Status"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Darstellung Kontraste"),(0,l.kt)("li",{parentName:"ul"},"M\xf6glichkeit des Nutzerfeedbacks")),(0,l.kt)("h3",{id:"tastatursteuerung"},"Tastatursteuerung"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Taste"),(0,l.kt)("th",{parentName:"tr",align:null},"Funktion"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Tab")),(0,l.kt)("td",{parentName:"tr",align:null},"Springt den einzelnen Button an und fokussiert ihn.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Enter")),(0,l.kt)("td",{parentName:"tr",align:null},"F\xfchrt die onClick-Methode der fokussierten Schaltfl\xe4che aus.")))),(0,l.kt)("h2",{id:"links-und-referenzen"},"Links und Referenzen"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("kol-link",{_href:"https://www.w3.org/TR/wai-aria-practices/#button",_target:"_blank"}))),(0,l.kt)("h2",{id:"properties"},"Properties"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Property"),(0,l.kt)("th",{parentName:"tr",align:null},"Attribute"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_accessKey")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_access-key")),(0,l.kt)("td",{parentName:"tr",align:null},"Gibt an, mit welcher Tastenkombination man das interaktive Element der Komponente ausl\xf6sen oder fokussieren kann."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},"undefined")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_ariaControls")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_aria-controls")),(0,l.kt)("td",{parentName:"tr",align:null},"Gibt an, welche Elemente kontrolliert werden. (",(0,l.kt)("a",{parentName:"td",href:"https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-controls"},"https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-controls"),")"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},"undefined")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_ariaCurrent")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_aria-current")),(0,l.kt)("td",{parentName:"tr",align:null},"Gibt an, welchen aktuellen Auswahlstatus das interaktive Element der Komponente hat. (",(0,l.kt)("a",{parentName:"td",href:"https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-current"},"https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-current"),")"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'"date"')," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},'"location"')," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},'"page"')," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},'"step"')," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},'"time"')," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},"boolean")," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},"undefined")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_ariaExpanded")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_aria-expanded")),(0,l.kt)("td",{parentName:"tr",align:null},"Gibt an, ob durch das interaktive Element in der Komponente etwas aufgeklappt wurde. (",(0,l.kt)("a",{parentName:"td",href:"https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-expanded"},"https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-expanded"),")"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"boolean")," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},"undefined")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_ariaLabel")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_aria-label")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{className:"text-red-500"},(0,l.kt)("strong",{parentName:"td"},"[DEPRECATED]"))," use _label instead",(0,l.kt)("br",null),(0,l.kt)("br",null),"Setzt die sichtbare oder semantische Beschriftung der Komponente (z.B. Aria-Label, Label, Headline, Caption, Summary usw.)."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},"undefined")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_ariaSelected")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_aria-selected")),(0,l.kt)("td",{parentName:"tr",align:null},"Gibt an, ob interaktive Element in der Komponente ausgew\xe4hlt ist (z.B. role=tab). (",(0,l.kt)("a",{parentName:"td",href:"https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-selected"},"https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-selected"),")"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"boolean")," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},"undefined")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_customClass")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_custom-class")),(0,l.kt)("td",{parentName:"tr",align:null},'Gibt an, welche Custom-Class \xfcbergeben werden soll, wenn _variant="custom" gesetzt ist.'),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},"undefined")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_disabled")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_disabled")),(0,l.kt)("td",{parentName:"tr",align:null},"Deaktiviert das interaktive Element in der Komponente und erlaubt keine Interaktion mehr damit."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"boolean")," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},"undefined")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"false"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_hideLabel")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_hide-label")),(0,l.kt)("td",{parentName:"tr",align:null},"Blendet die Beschriftung (Label) aus und zeigt sie stattdessen mittels eines Tooltips an."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"boolean")," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},"undefined")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"false"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_icon")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_icon")),(0,l.kt)("td",{parentName:"tr",align:null},"Setzt die Iconklasse (z.B.: ",(0,l.kt)("inlineCode",{parentName:"td"},'_icon="codicon codicon-home'),")."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"KoliBriHorizontalIcon & KoliBriVerticalIcon")," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},"string")," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},"undefined")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_iconAlign")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_icon-align")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{className:"text-red-500"},(0,l.kt)("strong",{parentName:"td"},"[DEPRECATED]"))," ",(0,l.kt)("br",null),(0,l.kt)("br",null),"Deprecated: Gibt an, ob das Icon links oder rechts von der Beschriftung angezeigt werden soll."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'"bottom"')," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},'"left"')," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},'"right"')," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},'"top"')," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},"undefined")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_iconOnly")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_icon-only")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{className:"text-red-500"},(0,l.kt)("strong",{parentName:"td"},"[DEPRECATED]"))," use _hide-label",(0,l.kt)("br",null),(0,l.kt)("br",null),"Blendet die Beschriftung (Label) aus und zeigt sie stattdessen mittels eines Tooltips an."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"boolean")," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},"undefined")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_id")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_id")),(0,l.kt)("td",{parentName:"tr",align:null},"Gibt die interne ID des prim\xe4ren Elements in der Komponente an."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},"undefined")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_label")," ",(0,l.kt)("em",{parentName:"td"},"(required)")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_label")),(0,l.kt)("td",{parentName:"tr",align:null},"Setzt die sichtbare oder semantische Beschriftung der Komponente (z.B. Aria-Label, Label, Headline, Caption, Summary usw.)."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"boolean")," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_on")),(0,l.kt)("td",{parentName:"tr",align:null},"--"),(0,l.kt)("td",{parentName:"tr",align:null},"Gibt die EventCallback-Funktionen f\xfcr die Button-Events an."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"undefined")," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},"{ onClick?: EventValueOrEventCallback<MouseEvent, unknown>")," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},"undefined; onMouseDown?: EventCallback<MouseEvent>")," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},"undefined; }")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_role")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_role")),(0,l.kt)("td",{parentName:"tr",align:null},"Gibt die Rolle des prim\xe4ren Elements in der Komponente an."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'"button"')," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},'"link"')," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},'"tab"')," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},"undefined")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_tabIndex")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_tab-index")),(0,l.kt)("td",{parentName:"tr",align:null},"Gibt an, welchen Tab-Index das prim\xe4re Element in der Komponente hat. (",(0,l.kt)("a",{parentName:"td",href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex"},"https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex"),")"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"number")," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},"undefined")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_tooltipAlign")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_tooltip-align")),(0,l.kt)("td",{parentName:"tr",align:null},"Gibt an, ob der Tooltip bevorzugt entweder oben, rechts, unten oder links angezeigt werden soll."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'"bottom"')," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},'"left"')," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},'"right"')," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},'"top"')," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},"undefined")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"'top'"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_type")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_type")),(0,l.kt)("td",{parentName:"tr",align:null},"Setzt den Typ der Komponente oder des interaktiven Elements in der Komponente an."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'"button"')," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},'"reset"')," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},'"submit"')," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},"undefined")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"'button'"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_value")),(0,l.kt)("td",{parentName:"tr",align:null},"--"),(0,l.kt)("td",{parentName:"tr",align:null},"Gibt einen Wert an, den der Schalter bei einem Klick zur\xfcckgibt."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"unknown")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_variant")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_variant")),(0,l.kt)("td",{parentName:"tr",align:null},"Gibt an, welche Variante der Darstellung genutzt werden soll."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'"custom"')," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},'"danger"')," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},'"ghost"')," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},'"normal"')," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},'"primary"')," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},'"secondary"')," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},'"tertiary"')," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},"undefined")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"'normal'"))))),(0,l.kt)("h2",{id:"dependencies"},"Dependencies"),(0,l.kt)("h3",{id:"used-by"},"Used by"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"./nav"},"kol-nav")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"./pagination"},"kol-pagination")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"./table"},"kol-table"))),(0,l.kt)("h3",{id:"depends-on"},"Depends on"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"kol-button-wc")),(0,l.kt)("h3",{id:"graph"},"Graph"),(0,l.kt)("mermaid",{value:"graph TD;\n  kol-button --\x3e kol-button-wc\n  kol-button-wc --\x3e kol-span-wc\n  kol-button-wc --\x3e kol-tooltip\n  kol-span-wc --\x3e kol-icon\n  kol-tooltip --\x3e kol-span-wc\n  kol-nav --\x3e kol-button\n  kol-pagination --\x3e kol-button\n  kol-table --\x3e kol-button\n  style kol-button fill:#f9f,stroke:#333,stroke-width:4px"}),(0,l.kt)("hr",null))}o.isMDXComponent=!0;var d=n(63739),s=n(49433);const m={title:"Button",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die Button-Komponente.",tags:["Button","Beschreibung","Spezifikation","Beispiele"]},u=void 0,p={unversionedId:"components/button",id:"components/button",title:"Button",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die Button-Komponente.",source:"@site/docs/30-components/button.mdx",sourceDirName:"30-components",slug:"/components/button",permalink:"/docs/components/button",draft:!1,tags:[{label:"Button",permalink:"/docs/tags/button"},{label:"Beschreibung",permalink:"/docs/tags/beschreibung"},{label:"Spezifikation",permalink:"/docs/tags/spezifikation"},{label:"Beispiele",permalink:"/docs/tags/beispiele"}],version:"current",frontMatter:{title:"Button",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die Button-Komponente.",tags:["Button","Beschreibung","Spezifikation","Beispiele"]},sidebar:"tutorialSidebar",previous:{title:"ButtonLink",permalink:"/docs/components/button-link"},next:{title:"Card",permalink:"/docs/components/card"}},c={},k=[{value:"Live-Editor",id:"live-editor",level:2},{value:"Beispiele",id:"beispiele",level:2},{value:"Buttons",id:"buttons",level:3},{value:"Icon-Buttons",id:"icon-buttons",level:3},{value:"Button mit Icons",id:"button-mit-icons",level:3},{value:"Buttons mit einheitlicher Breite",id:"buttons-mit-einheitlicher-breite",level:3}],b={toc:k},g="wrapper";function N(e){let{components:t,...n}=e;return(0,l.kt)(g,(0,a.Z)({},b,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)(o,{mdxType:"Readme"}),(0,l.kt)("h2",{id:"live-editor"},"Live-Editor"),(0,l.kt)(s._,{component:"button",mdxType:"LiveEditorCompact"}),(0,l.kt)("h2",{id:"beispiele"},"Beispiele"),(0,l.kt)("h3",{id:"buttons"},"Buttons"),(0,l.kt)(d._,{component:"button",sample:"basic",mdxType:"Configurator"}),(0,l.kt)("h3",{id:"icon-buttons"},"Icon-Buttons"),(0,l.kt)(d._,{component:"button",sample:"icon-only",mdxType:"Configurator"}),(0,l.kt)("h3",{id:"button-mit-icons"},"Button mit Icons"),(0,l.kt)(d._,{component:"button",sample:"icons",mdxType:"Configurator"}),(0,l.kt)("h3",{id:"buttons-mit-einheitlicher-breite"},"Buttons mit einheitlicher Breite"),(0,l.kt)(d._,{component:"button",sample:"width",mdxType:"Configurator"}))}N.isMDXComponent=!0}}]);