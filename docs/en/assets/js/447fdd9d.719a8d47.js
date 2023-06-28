"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[2],{46741:(e,t,n)=>{n.d(t,{_:()=>d});var a=n(17520),l=n(50959);const r=function(e,t,n,a,l){return void 0===l&&(l="editor"),`${e}&module=${a}&initialpath=%23%2F${t}%2F${n}&view=${l}`},i={width:"100%",height:"500px",border:"0",overflow:"hidden"},o=e=>{let{url:t}=e;return l.createElement("div",{className:"m-2"},l.createElement("iframe",{src:t,style:i,title:"kolibri-public-ui-code-samples",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}),l.createElement(a.Nv,{_href:t,_label:"",_target:"codesandbox"},l.createElement("img",{alt:"CodeSandbox-Schalter",src:"https://codesandbox.io/static/img/play-codesandbox.svg"})))},d=e=>{let{component:t,sample:n}=e;const[d,s]=(0,l.useState)("Preview"),m="https://codesandbox.io/embed/kolibri-public-ui-react-samples-w5u37c?fontsize=14&hidenavigation=1&autoresize=1&theme=dark",c=`%2Fsrc%2Fsamples%2F${t}%2F${n}`,u={angular:`${c}.html`,react:`${c}.tsx`,vue:`${c}.vue`,webcomponent:`${c}.html`},p=`/sample-react/#/${t}/${n}`,k={onSelect:(e,t)=>{switch(t){case 1:s((()=>"Angular"));break;case 2:s((()=>"React"));break;case 3:s((()=>"Vue"));break;case 4:s((()=>"Web Component"));break;default:s((()=>"Preview"))}}};return l.createElement(a.UD,{className:"w-full",_ariaLabel:"Code-Beispiel",_on:k,_tabs:[{_label:"Vorschau"},{_disabled:!0,_label:"Angular"},{_label:"React"},{_disabled:!0,_label:"Vue"},{_disabled:!0,_label:"Web Component"}]},l.createElement("div",null,"Preview"===d&&l.createElement("iframe",{src:p,style:i,title:"kolibri-public-ui-code-samples",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"})),l.createElement("div",null,"Angular"===d&&l.createElement(o,{url:r(m,t,n,u.angular)})),l.createElement("div",null,"React"===d&&l.createElement(o,{url:r(m,t,n,u.react)})),l.createElement("div",null,"Vue"===d&&l.createElement(o,{url:r(m,t,n,u.vue)})),l.createElement("div",null,"Web Component"===d&&l.createElement(o,{url:r(m,t,n,u.webcomponent)})))}},16072:(e,t,n)=>{n.d(t,{_:()=>N});var a=n(23438),l=n(17520),r=n(50959),i=n(84886);function o(e){const{attribute:t,label:n,update:a,value:i}=e,[o,d]=(0,r.useState)(""),[s,m]=(0,r.useState)(""),[c,u]=(0,r.useState)(""),[p,k]=(0,r.useState)("");let g=!1,b=!1,h=!1,f=!1;t.type.includes("KoliBriAllIcon")?(g=!0,b=!0,h=!0,f=!0):(t.type.includes("KoliBriVerticalIcon")&&(h=!0,f=!0),t.type.includes("KoliBriHorizontalIcon")&&(g=!0,b=!0)),(0,r.useEffect)((()=>{if(!o||s||c||p){const e={};o&&(e.left=`codicon codicon-${o}`),s&&(e.right=`codicon codicon-${s}`),c&&(e.top=`codicon codicon-${c}`),p&&(e.bottom=`codicon codicon-${p}`),Object.keys(e).length&&a(t.name,JSON.stringify(e))}else a(t.name,`codicon codicon-${o}`)}),[o,s,c,p]);const N=["home","arrow-up","arrow-right","arrow-down","arrow-left"];return r.createElement("div",null,n,g?r.createElement(l.ox,{_summary:"Links"},r.createElement("div",{className:"flex flex-wrap"},N.map((e=>r.createElement(l.ic,{key:e,_icon:`codicon codicon-${e}`,_hideLabel:!0,_label:"",_on:{onClick:t=>d(e)}}))))):"",b?r.createElement(l.ox,{_summary:"Rechts"},r.createElement("div",{className:"flex flex-wrap"},N.map((e=>r.createElement(l.ic,{key:e,_icon:`codicon codicon-${e}`,_hideLabel:!0,_label:"",_on:{onClick:t=>m(e)}}))))):"",h?r.createElement(l.ox,{_summary:"Oben"},r.createElement("div",{className:"flex flex-wrap"},N.map((e=>r.createElement(l.ic,{key:e,_icon:`codicon codicon-${e}`,_hideLabel:!0,_label:"",_on:{onClick:t=>u(e)}}))))):"",f?r.createElement(l.ox,{_summary:"Unten"},r.createElement("div",{className:"flex flex-wrap"},N.map((e=>r.createElement(l.ic,{key:e,_icon:`codicon codicon-${e}`,_hideLabel:!0,_label:"",_on:{onClick:t=>k(e)}}))))):"")}function d(e){const{label:t,name:n,update:a,value:i}=e;return(0,r.useEffect)((()=>{i||a(n,"#000000")}),[]),r.createElement(l.Np,{_on:{onChange:(e,t)=>a(n,t)},_value:i},t)}function s(e){const{name:t,label:n,types:a,update:i,value:o}=e,d=[];function s(e){return{label:e,value:e}}return a.includes("undefined")?(d.push({label:"-",value:void 0}),d.push(...a.filter((e=>"undefined"!==e)).map(s))):d.push(...a.filter((e=>"undefined"!==e)).map(s)),r.createElement(l.r7,{className:"my-2",_list:JSON.stringify(d),_on:{onChange:(e,n)=>i(t,n[0])},_value:o},n)}function m(e){const{attribute:t,update:n,value:a}=e,i=(0,r.useMemo)((()=>{let e=t.type.replace(/\\?"/g,"").split(" | ");return e=e.filter((e=>"KoliBriAllIcon ignorieren"!==e)),1===e.length?e[0]:e.includes("string")?"string":e.includes("number")?"number":e.includes("boolean")?"boolean":""}),[t]),m=(0,r.useMemo)((()=>{const e=t.type.split(" | ").map((e=>e.replace(/\\?"/g,""))),m=r.createElement(l.T5,{_title:t.description},t.name);switch(t.name){case"_color":return r.createElement(d,{name:t.name,label:m,update:n,value:a});case"_icon":return r.createElement(o,{attribute:t,label:m,update:n,value:a});default:switch(i){case"string":return r.createElement(l.WD,{className:"my-2",_on:{onChange:(e,a)=>n(t.name,a)},_value:a||""},m);case"number":return r.createElement(l.c2,{className:"my-2",_on:{onChange:(e,a)=>n(t.name,a)},_value:a},m);case"boolean":return r.createElement(l.TE,{className:"my-2",_checked:a,_on:{onChange:(e,a)=>n(t.name,a)},_variant:"switch"},m);default:return e.length>1?r.createElement(s,{label:m,name:t.name,types:e,update:n,value:a}):r.createElement("p",null,"Attribut: '",t.name,"'",r.createElement("br",null),"Typ: '",t.type,"'")}}}),[t,a]);return r.createElement(r.Fragment,null,m)}var c=n(45413),u=n(77192),p=n(85630),k=n.n(p);function g(e){const{tag:t,params:n}=e,a=Object.entries(n).filter((e=>"defaultValues"!==e[0]));let l="";const i=(0,r.useMemo)((()=>{let e="";return a.filter((e=>e[0].startsWith("slot-"))).forEach((t=>{const n=t[1],a=t[0].split("-")[1];if(n)if(n.match(/^<.*?>/)?.length){const t=n.indexOf(">");e+=n.substring(0,t)+` slot="${a}"`+n.substring(t)}else e+=`<div slot="${a}">${n}</div>`})),e}),[n]),o=a.filter((e=>!e[0].startsWith("slot-"))).filter((e=>!n.defaultValues.includes(e[0])));for(const[r,c]of o)if(c){let e="";switch(typeof c){case"string":e=` ${r}="${c.replace(/"/g,"'")}"`;break;case"number":e=` ${r}="${c.toString()}"`;break;case"boolean":e=c?` ${r}`:"";break;case"object":e=` ${r}="${JSON.stringify(c)}"`;break;default:e="Never give up hope, one day everything will be fixed."}l+=e}const d=`<kol-${t}${l}>${i}</kol-${t}>`;let s;try{s=(0,u.format)(d,{plugins:[k()],printWidth:80}).replace(/;\n$/,"")}catch(m){s=`\x3c!-- Formatter-Error: Slot-Markup is not valid HTML for formatting. --\x3e\n${d}`}return r.createElement("div",{className:"h-48 rounded-md overflow-hidden"},r.createElement(c.ZP,{defaultLanguage:"html",height:"100%",options:{automaticLayout:!0,fontSize:16,lineNumbers:"off",readOnly:!0},value:s}))}function b(e){const t={};Object.entries(e.params).filter((e=>!e[0].startsWith("slot-"))).forEach((e=>{t[e[0]]=e[1]}));const n=Object.entries(e.params).filter((e=>e[0].startsWith("slot-"))),a={abbr:l.T5,accordion:l.RZ,alert:l.K5,badge:l.Er,breadcrumb:l.lo,button:l.ic,"button-group":l.uz,"button-link":l.f6,card:l.Gc,details:l.ox,form:l.m5,heading:l.HA,icon:l.Jl,image:l.Cd,"indented-text":l.CV,"input-checkbox":l.TE,"input-color":l.Np,"input-date":l.O,"input-email":l.Lj,"input-file":l.CX,"input-number":l.c2,"input-password":l.z5,"input-radio":l.sy,"input-range":l.TQ,"input-text":l.WD,kolibri:l.Vs,link:l.Nv,"link-button":l.Kc,"link-group":l.$o,logo:l.QK,modal:l.Ud,nav:l.MA,pagination:l.Q4,popover:l.hV,progress:l.WR,quote:l.VZ,select:l.r7,"skip-nav":l.P,spin:l.qq,symbol:l.is,table:l.Vp,tabs:l.UD,textarea:l.Qs,toast:l.CO,tooltip:l.Ze,version:l.u_}[e.tag];return a?r.createElement(a,t,n.map((e=>r.createElement("div",{key:e[0],slot:e[0].replace("slot-",""),dangerouslySetInnerHTML:{__html:e[1]}})))):r.createElement("div",null,"Tag not implemented")}function h(e){const{description:t,name:n,update:a,value:l}=e;return r.createElement("div",{className:"bg-gray-100 my-2 rounded-lg p-2 border border-gray-300 border-solid"},r.createElement("b",null,n||"default"),": ",t,r.createElement("br",null),r.createElement(c.ML,{defaultLanguage:"html",height:"5em",onChange:e=>a(`slot-${n}`,e||""),options:{automaticLayout:!0,fontSize:16,lineNumbers:"off"},value:l}))}const f=["_smart-button","_icon-align"];function N(e){const[t,n]=(0,r.useState)(function(){const e={};return Object.values(a.p).forEach((t=>{const n=t.name.replace("kol-","");e[n]={defaultValues:[]},t.attributes.forEach((t=>{t.defaultValue&&(e[n][t.name]=t.defaultValue.replaceAll("'",""),e[n].defaultValues.push(t.name))}))})),e}()),[o,d]=(0,r.useState)("badge");(0,r.useEffect)((()=>{e.component&&d(e.component.replace("kol-",""))}),[e.component]),(0,r.useEffect)((()=>{!!a.p.find((e=>e.name===`kol-${o}`))?.attributes.find((e=>"_label"===e.name))&&!t[o]?._label&&c("_label","Label-Text");!!a.p.find((e=>e.name===`kol-${o}`))?.attributes.find((e=>"_heading"===e.name))&&!t[o]?._heading&&c("_heading","Heading-Text")}),[o]);const s=(0,r.useMemo)((()=>t[o]||{}),[t,o]);function c(e,t){n((n=>{const a={...n[o],[e]:t,defaultValues:n[o].defaultValues.filter((t=>t!==e))};return{...n,[o]:a}}))}const u=Object.values(a.p).find((e=>e.name===`kol-${o}`));return r.createElement(i.Z,null,(()=>r.createElement(r.Fragment,null,r.createElement(l.Er,{class:"mb-2",_label:"Beta",_color:"#b00"}),r.createElement("div",{className:"grid lg:grid-cols-3 gap-2"},r.createElement(l.UD,{className:"col-span-2",_ariaLabel:"Wechselnavigation zwischen Viewer und Code",_tabs:[{_label:"Viewer"},{_label:"Code"}]},r.createElement("div",{className:"p-2"},r.createElement(b,{tag:o,params:s})),r.createElement("div",{className:"lg:col-span-2"},r.createElement(g,{params:s,tag:o}))),r.createElement("div",{className:"grid gap-4 p-2 border-0 border-l border-solid"},r.createElement(l.HA,{_level:3,_label:"Konfigurator"}),r.createElement("div",null,r.createElement(l.HA,{_level:4,_label:"Properties"}),r.createElement("div",{className:"max-h-96 p-2 overflow-scroll mb-4"},u&&u.attributes.map((e=>r.createElement(r.Fragment,null,!f.includes(e.name)&&r.createElement(m,{key:e.name,attribute:e,update:c,value:s[e.name]})))),u&&0===u.slots.length&&r.createElement("span",{className:"text-gray-500"},"Keine Properties vorhanden")),r.createElement(l.HA,{_level:4,_label:"Slots"}),r.createElement("div",{className:"max-h-56 p-2 overflow-scroll"},u&&u.slots.map((e=>r.createElement(h,{key:e.name,description:e.description,name:e.name,update:c,value:s["slot-"+e.name]}))),u&&0===u.slots.length&&r.createElement("span",{className:"text-gray-500"},"Keine Slots vorhanden"))))))))}},3752:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>h,frontMatter:()=>m,metadata:()=>u,toc:()=>k});var a=n(15882),l=(n(50959),n(17942));const r={toc:[{value:"Konstruktion",id:"konstruktion",level:2},{value:"Code",id:"code",level:3},{value:"Beispiel",id:"beispiel",level:3},{value:"Verwendung",id:"verwendung",level:2},{value:"\xdcberschrift",id:"\xfcberschrift",level:3},{value:"\xdcberschriftenebene",id:"\xfcberschriftenebene",level:3},{value:"Typ des Alert",id:"typ-des-alert",level:3},{value:"Inhalt des Alert",id:"inhalt-des-alert",level:3},{value:"Variante des Alert",id:"variante-des-alert",level:3},{value:"Best practices",id:"best-practices",level:3},{value:"Anwendungsf\xe4lle",id:"anwendungsf\xe4lle",level:3},{value:"Barrierefreiheit",id:"barrierefreiheit",level:2},{value:"Links und Referenzen",id:"links-und-referenzen",level:2},{value:"Properties",id:"properties",level:2},{value:"Slots",id:"slots",level:2},{value:"Dependencies",id:"dependencies",level:2},{value:"Used by",id:"used-by",level:3},{value:"Depends on",id:"depends-on",level:3},{value:"Graph",id:"graph",level:3}]},i="wrapper";function o(e){let{components:t,...n}=e;return(0,l.kt)(i,(0,a.Z)({},r,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Die ",(0,l.kt)("strong",{parentName:"p"},"Alert"),"-Komponente gibt ein optisches Feedback an die Nutzer:innen. Sie besteht aus einem farblich gestalteten Container, einer \xdcberschrift, einem Inhaltstext sowie einem Icon. Das verwendete Icon und die farbliche Gestaltung sind abh\xe4ngig vom Typ ",(0,l.kt)("inlineCode",{parentName:"p"},"_type")," des Alert."),(0,l.kt)("h2",{id:"konstruktion"},"Konstruktion"),(0,l.kt)("h3",{id:"code"},"Code"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'<kol-alert _label="\xdcberschrift im Alert" _level="1" _type="success" _variant="msg">Textbereich im Alert</kol-alert>\n<kol-alert _label="\xdcberschrift im Alert" _level="2" _type="info" _variant="card">Textbereich im Alert</kol-alert>\n')),(0,l.kt)("h3",{id:"beispiel"},"Beispiel"),(0,l.kt)("p",null,(0,l.kt)("kol-alert",{_label:"\xdcberschrift im Alert",_level:"1",_type:"success",_variant:"msg"},"Textbereich im Alert"),"\n",(0,l.kt)("kol-alert",{_label:"\xdcberschrift im Alert",_level:"2",_type:"info",_variant:"card"},"Textbereich im Alert")),(0,l.kt)("h2",{id:"verwendung"},"Verwendung"),(0,l.kt)("h3",{id:"\xfcberschrift"},"\xdcberschrift"),(0,l.kt)("p",null,"Die ",(0,l.kt)("strong",{parentName:"p"},"\xdcberschrift")," der Alert-Komponente wird \xfcber das Attribut ",(0,l.kt)("inlineCode",{parentName:"p"},"_heading")," bestimmt."),(0,l.kt)("h3",{id:"\xfcberschriftenebene"},"\xdcberschriftenebene"),(0,l.kt)("p",null,"Die \xdcberschriftenebene wird durch das Attribut ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"_level"))," \xfcbergeben. M\xf6glich sind die Level ",(0,l.kt)("strong",{parentName:"p"},"1")," bis ",(0,l.kt)("strong",{parentName:"p"},"6")),(0,l.kt)("h3",{id:"typ-des-alert"},"Typ des Alert"),(0,l.kt)("p",null,"Die ",(0,l.kt)("strong",{parentName:"p"},"Alert"),"-Komponente bietet ",(0,l.kt)("strong",{parentName:"p"},"vier")," unterschiedliche Typen, die sich jeweils auf die farbliche Gestaltung und das verwendetet Icon im Alert beziehen. Zur Wahl stehen:"),(0,l.kt)("ul",null,(0,l.kt)("li",null,"Success"),(0,l.kt)("li",null,"Error"),(0,l.kt)("li",null,"Info"),(0,l.kt)("li",null,"Warning")),(0,l.kt)("p",null,"Der Typ eines Alert wird \xfcber das Attribut ",(0,l.kt)("inlineCode",{parentName:"p"},"_type")," festgelegt."),(0,l.kt)("h3",{id:"inhalt-des-alert"},"Inhalt des Alert"),(0,l.kt)("p",null,"Der Inhalt des Alert wird zwischen das \xf6ffnende Element ",(0,l.kt)("inlineCode",{parentName:"p"},"<kol-alert>")," und das schlie\xdfende ",(0,l.kt)("inlineCode",{parentName:"p"},"</kol-alert>")," geschrieben. Der Inhalt kann aus beliebigem ",(0,l.kt)("strong",{parentName:"p"},"HTML-Code"),", aber auch aus weiteren ",(0,l.kt)("strong",{parentName:"p"},"KoliBri"),"-Komponenten bestehen."),(0,l.kt)("h3",{id:"variante-des-alert"},"Variante des Alert"),(0,l.kt)("p",null,"\xdcber das Attribut ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"_variant"))," kann festgelegt werden, in welcher Darstellungsvariante das Alert angezeigt wird. ",(0,l.kt)("inlineCode",{parentName:"p"},"msg")," l\xe4sst die linke, farbig hinterlegte Spalte mit dem Icon \xfcber die gesamte H\xf6he des Alerts gehen, ",(0,l.kt)("inlineCode",{parentName:"p"},"card")," setzt die linke Spalte nur neben die \xdcberchrift."),(0,l.kt)("h3",{id:"best-practices"},"Best practices"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Verwenden Sie die ",(0,l.kt)("strong",{parentName:"li"},"Alert"),"-Komponente an geeigneten Positionen auf Ihrer Webseite, um Informationen im richtigen Zusammenhang darzustellen."),(0,l.kt)("li",{parentName:"ul"},"Verwenden Sie immer den richtigen ",(0,l.kt)("strong",{parentName:"li"},"Type")," der ",(0,l.kt)("strong",{parentName:"li"},"Alert"),"-Komponente, um bei den Benutzer:innen die gew\xfcnschte Reaktion zu erzeugen. Vermeiden Sie bspw. den Typ ",(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("em",{parentName:"strong"},"Error")),", wenn Sie auf den erfolgreichen Abschluss eines Speichervorgangs hinweisen m\xf6chten."),(0,l.kt)("li",{parentName:"ul"},"Vermeiden Sie, zu viele ",(0,l.kt)("strong",{parentName:"li"},"Alert"),"-Komponenten auf einer Seite zu platzieren, da der Informationsgehalt von den Benutzer:innen dann oft nicht mehr als besonders wichtig wahrgenommen wird.")),(0,l.kt)("h3",{id:"anwendungsf\xe4lle"},"Anwendungsf\xe4lle"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Verwenden Sie die ",(0,l.kt)("strong",{parentName:"li"},"Alert"),"-Komponente, wenn Sie die Benutzer:innen auf Fehler bei der Eingabe in Formularen hinweisen m\xf6chten."),(0,l.kt)("li",{parentName:"ul"},"Verwenden Sie die ",(0,l.kt)("strong",{parentName:"li"},"Alert"),"-Komponente, um Nutzer:innen auf die erfolgreiche Ausf\xfchrung von Funktionen hinzuweisen, z.B. ",(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"strong"},"Ihre Anfrage wurde erfolgreich gespeichert")),"."),(0,l.kt)("li",{parentName:"ul"},"Verwenden Sie die ",(0,l.kt)("strong",{parentName:"li"},"Alert"),"-Komponente, um Nutzer:innen weitere Informationen zu einem Thema zur Verf\xfcgung zu stellen.")),(0,l.kt)("h2",{id:"barrierefreiheit"},"Barrierefreiheit"),(0,l.kt)("p",null,"Die ",(0,l.kt)("strong",{parentName:"p"},"Alert"),"-Komponente wurde auf die Darstellung mit h\xf6chstm\xf6glichen Kontrast optimiert."),(0,l.kt)("p",null,"Das zus\xe4tzliche Icon (je nach gew\xe4hltem Typ) gew\xe4hrleistet, dass die Information vom Nutzer nicht allein \xfcber die Farbe klassifiziert werden muss."),(0,l.kt)("p",null,"Bei der ",(0,l.kt)("strong",{parentName:"p"},"Alert"),"-Komponente wurden insbesondere folgende Punkte der Barrierefreiheit betrachtet:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Die Schriftfarbe ist entweder wei\xdf oder schwarz."),(0,l.kt)("li",{parentName:"ul"},"Die Schriftfarbe ist abh\xe4ngig von der Hintergrundfarbe und wechselt immer auf die Schriftfarbe mit dem gr\xf6\xdferen Farbkontrast zur Hintergrundfarbe."),(0,l.kt)("li",{parentName:"ul"},"Ist der Farbkontrast f\xfcr AA nicht ausreichend, wird die Hintergrundfarbe \xfcberschrieben.")),(0,l.kt)("h2",{id:"links-und-referenzen"},"Links und Referenzen"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.w3.org/TR/wai-aria-practices/#alert"},"https://www.w3.org/TR/wai-aria-practices/#alert"))),(0,l.kt)("h2",{id:"properties"},"Properties"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Property"),(0,l.kt)("th",{parentName:"tr",align:null},"Attribute"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_alert")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_alert")),(0,l.kt)("td",{parentName:"tr",align:null},"Gibt an, ob der Screenreader die Meldung aktiv vorlesen soll."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"boolean")," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},"undefined")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"false"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_hasCloser")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_has-closer")),(0,l.kt)("td",{parentName:"tr",align:null},"Gibt an, ob die Komponente einen Schlie\xdfen-Schalter hat."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"boolean")," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},"undefined")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"false"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_heading")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_heading")),(0,l.kt)("td",{parentName:"tr",align:null},"Gibt die Beschriftung der Komponente an."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},"undefined")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_level")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_level")),(0,l.kt)("td",{parentName:"tr",align:null},"Gibt an, welchen H-Level von 1 bis 6 die \xdcberschrift hat. Oder bei 0, ob es keine \xdcberschrift ist und als fett gedruckter Text angezeigt werden soll."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"0")," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},"1")," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},"2")," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},"3")," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},"4")," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},"5")," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},"6")," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},"undefined")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"1"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_on")),(0,l.kt)("td",{parentName:"tr",align:null},"--"),(0,l.kt)("td",{parentName:"tr",align:null},"Gibt die EventCallback-Function f\xfcr das Schlie\xdfen des Alerts an."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"undefined")," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},"{ onClose?: EventCallback<Event>")," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},"undefined; }")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_type")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_type")),(0,l.kt)("td",{parentName:"tr",align:null},"Setzt den Typ der Komponente oder des interaktiven Elements in der Komponente an."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'"default"')," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},'"error"')," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},'"info"')," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},'"success"')," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},'"warning"')," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},"undefined")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"'default'"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_variant")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_variant")),(0,l.kt)("td",{parentName:"tr",align:null},"Gibt an, welche Variante der Darstellung genutzt werden soll."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'"card"')," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},'"msg"')," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},"undefined")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"'msg'"))))),(0,l.kt)("h2",{id:"slots"},"Slots"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Slot"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Der Inhalt der Meldung.")))),(0,l.kt)("h2",{id:"dependencies"},"Dependencies"),(0,l.kt)("h3",{id:"used-by"},"Used by"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"."},"kol-alert"))),(0,l.kt)("h3",{id:"depends-on"},"Depends on"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"./heading"},"kol-heading-wc")),(0,l.kt)("li",{parentName:"ul"},"kol-button-wc"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"./icon"},"kol-icon"))),(0,l.kt)("h3",{id:"graph"},"Graph"),(0,l.kt)("mermaid",{value:"graph TD;\n  kol-alert-wc --\x3e kol-heading-wc\n  kol-alert-wc --\x3e kol-button-wc\n  kol-alert-wc --\x3e kol-icon\n  kol-button-wc --\x3e kol-span-wc\n  kol-button-wc --\x3e kol-tooltip\n  kol-span-wc --\x3e kol-icon\n  kol-tooltip --\x3e kol-span-wc\n  kol-alert --\x3e kol-alert-wc\n  style kol-alert-wc fill:#f9f,stroke:#333,stroke-width:4px"}),(0,l.kt)("hr",null))}o.isMDXComponent=!0;var d=n(46741),s=n(16072);const m={title:"Alert",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die Alert-Komponente.",tags:["Alert","Beschreibung","Spezifikation","Beispiele"]},c=void 0,u={unversionedId:"components/alert",id:"components/alert",title:"Alert",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die Alert-Komponente.",source:"@site/docs/30-components/alert.mdx",sourceDirName:"30-components",slug:"/components/alert",permalink:"/en/docs/components/alert",draft:!1,tags:[{label:"Alert",permalink:"/en/docs/tags/alert"},{label:"Beschreibung",permalink:"/en/docs/tags/beschreibung"},{label:"Spezifikation",permalink:"/en/docs/tags/spezifikation"},{label:"Beispiele",permalink:"/en/docs/tags/beispiele"}],version:"current",frontMatter:{title:"Alert",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die Alert-Komponente.",tags:["Alert","Beschreibung","Spezifikation","Beispiele"]},sidebar:"tutorialSidebar",previous:{title:"Accordion",permalink:"/en/docs/components/accordion"},next:{title:"Badge",permalink:"/en/docs/components/badge"}},p={},k=[{value:"Live-Editor",id:"live-editor",level:2},{value:"Beispiele",id:"beispiele",level:2},{value:"Einfachs Meldungen",id:"einfachs-meldungen",level:3},{value:"Card oder als Msg",id:"card-oder-als-msg",level:3},{value:"Mit HTML-Struktur",id:"mit-html-struktur",level:3}],g={toc:k},b="wrapper";function h(e){let{components:t,...n}=e;return(0,l.kt)(b,(0,a.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)(o,{mdxType:"Readme"}),(0,l.kt)("h2",{id:"live-editor"},"Live-Editor"),(0,l.kt)(s._,{component:"alert",mdxType:"LiveEditorCompact"}),(0,l.kt)("h2",{id:"beispiele"},"Beispiele"),(0,l.kt)("h3",{id:"einfachs-meldungen"},"Einfachs Meldungen"),(0,l.kt)(d._,{component:"alert",sample:"basic",mdxType:"Configurator"}),(0,l.kt)("h3",{id:"card-oder-als-msg"},"Card oder als Msg"),(0,l.kt)(d._,{component:"alert",sample:"card-msg",mdxType:"Configurator"}),(0,l.kt)("h3",{id:"mit-html-struktur"},"Mit HTML-Struktur"),(0,l.kt)(d._,{component:"alert",sample:"html",mdxType:"Configurator"}))}h.isMDXComponent=!0}}]);