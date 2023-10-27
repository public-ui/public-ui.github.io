"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[93428],{9091:(e,t,a)=>{a.d(t,{_:()=>s});var n=a(23083),l=a(50959);const r=function(e,t,a,n,l){return void 0===l&&(l="editor"),`${e}&module=${n}&initialpath=%23%2F${t}%2F${a}&view=${l}`},i={width:"100%",height:"500px",border:"0",overflow:"hidden"},o=e=>{let{url:t}=e;return l.createElement("div",{className:"m-2"},l.createElement("iframe",{src:t,style:i,title:"kolibri-public-ui-code-samples",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}),l.createElement(n.Nv,{_href:t,_label:"",_target:"codesandbox"},l.createElement("img",{alt:"CodeSandbox-Schalter",src:"https://codesandbox.io/static/img/play-codesandbox.svg"})))},s=e=>{let{component:t,sample:a}=e;const[s,d]=(0,l.useState)("Preview"),c="https://codesandbox.io/embed/kolibri-public-ui-react-samples-w5u37c?fontsize=14&hidenavigation=1&autoresize=1&theme=dark",m=`%2Fsrc%2Fsamples%2F${t}%2F${a}`,u={angular:`${m}.html`,react:`${m}.tsx`,vue:`${m}.vue`,webcomponent:`${m}.html`},p=`/sample-react/#/${t}/${a}?hideMenus`,b={onSelect:(e,t)=>{switch(t){case 1:d((()=>"Angular"));break;case 2:d((()=>"React"));break;case 3:d((()=>"Vue"));break;case 4:d((()=>"Web Component"));break;default:d((()=>"Preview"))}}};return l.createElement(n.UD,{className:"w-full",_label:"Code-Beispiel",_on:b,_tabs:[{_label:"Vorschau"},{_disabled:!0,_label:"Angular"},{_label:"React"},{_disabled:!0,_label:"Vue"},{_disabled:!0,_label:"Web Component"}]},l.createElement("div",null,"Preview"===s&&l.createElement("iframe",{src:p,style:i,title:"kolibri-public-ui-code-samples",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"})),l.createElement("div",null,"Angular"===s&&l.createElement(o,{url:r(c,t,a,u.angular)})),l.createElement("div",null,"React"===s&&l.createElement(o,{url:r(c,t,a,u.react)})),l.createElement("div",null,"Vue"===s&&l.createElement(o,{url:r(c,t,a,u.vue)})),l.createElement("div",null,"Web Component"===s&&l.createElement(o,{url:r(c,t,a,u.webcomponent)})))}},25433:(e,t,a)=>{a.d(t,{_:()=>_});var n=a(59673),l=a(23083),r=a(50959),i=a(60112);function o(e){const{label:t,name:a,update:n,value:i}=e;return(0,r.useEffect)((()=>{i||n(a,"#000000")}),[]),r.createElement(l.Np,{_label:"",_on:{onChange:(e,t)=>n(a,t)},_value:i},r.createElement("span",{slot:"expert"},t))}function s(e){const{attribute:t,label:a,update:n}=e,[i,o]=(0,r.useState)(""),[s,d]=(0,r.useState)(""),[c,m]=(0,r.useState)(""),[u,p]=(0,r.useState)("");let b=!1,k=!1,h=!1,g=!1;t.type.includes("KoliBriAllIcon")?(b=!0,k=!0,h=!0,g=!0):(t.type.includes("KoliBriVerticalIcon")&&(h=!0,g=!0),t.type.includes("KoliBriHorizontalIcon")&&(b=!0,k=!0)),(0,r.useEffect)((()=>{if(!i||s||c||u){const e={};i&&(e.left=`codicon codicon-${i}`),s&&(e.right=`codicon codicon-${s}`),c&&(e.top=`codicon codicon-${c}`),u&&(e.bottom=`codicon codicon-${u}`),Object.keys(e).length&&n(t.name,JSON.stringify(e))}else n(t.name,`codicon codicon-${i}`)}),[i,s,c,u]);const f=["home","arrow-up","arrow-right","arrow-down","arrow-left"];return r.createElement("div",null,a,b?r.createElement(l.ox,{_label:"Links"},r.createElement("div",{className:"flex flex-wrap"},f.map((e=>r.createElement(l.ic,{key:e,_icons:`codicon codicon-${e}`,_hideLabel:!0,_label:"",_on:{onClick:()=>o(e)}}))))):"",k?r.createElement(l.ox,{_label:"Rechts"},r.createElement("div",{className:"flex flex-wrap"},f.map((e=>r.createElement(l.ic,{key:e,_icons:`codicon codicon-${e}`,_hideLabel:!0,_label:"",_on:{onClick:()=>d(e)}}))))):"",h?r.createElement(l.ox,{_label:"Oben"},r.createElement("div",{className:"flex flex-wrap"},f.map((e=>r.createElement(l.ic,{key:e,_icons:`codicon codicon-${e}`,_hideLabel:!0,_label:"",_on:{onClick:()=>m(e)}}))))):"",g?r.createElement(l.ox,{_label:"Unten"},r.createElement("div",{className:"flex flex-wrap"},f.map((e=>r.createElement(l.ic,{key:e,_icons:`codicon codicon-${e}`,_hideLabel:!0,_label:"",_on:{onClick:()=>p(e)}}))))):"")}function d(e){const{name:t,label:a,types:n,update:i,value:o}=e,s=[];function d(e){return{label:e,value:e}}return n.includes("undefined")?(s.push({label:"-",value:void 0}),s.push(...n.filter((e=>"undefined"!==e)).map(d))):s.push(...n.filter((e=>"undefined"!==e)).map(d)),r.createElement(l.r7,{className:"my-2",_label:"",_options:JSON.stringify(s),_on:{onChange:(e,a)=>i(t,a[0])},_value:o?[o]:void 0},r.createElement("span",{slot:"expert"},a))}function c(e){const{attribute:t,update:a,value:n}=e,i=(0,r.useMemo)((()=>{let e=t.type.replace(/\\?"/g,"").split(" | ");return e=e.filter((e=>"KoliBriAllIcon ignorieren"!==e)),1===e.length?e[0]:e.includes("string")?"string":e.includes("number")?"number":e.includes("boolean")?"boolean":""}),[t]),c=(0,r.useMemo)((()=>{const e=t.type.split(" | ").map((e=>e.replace(/\\?"/g,""))),c=r.createElement(l.T5,{_label:t.description},t.name);switch(t.name){case"_color":return r.createElement(o,{name:t.name,label:c,update:a,value:n});case"_icon":return r.createElement(s,{attribute:t,label:c,update:a,value:n});default:switch(i){case"string":return r.createElement(l.WD,{className:"my-2",_label:"",_on:{onChange:(e,n)=>a(t.name,n)},_value:n||""},r.createElement("span",{slot:"expert"},c));case"number":return r.createElement(l.c2,{className:"my-2",_label:"",_on:{onChange:(e,n)=>a(t.name,n)},_value:n},r.createElement("span",{slot:"expert"},c));case"boolean":return r.createElement(l.TE,{className:"my-2",_checked:!0===n,_label:"",_on:{onChange:(e,n)=>a(t.name,n)},_variant:"switch",_value:!0},r.createElement("span",{slot:"expert"},c));default:return e.length>1?r.createElement(d,{label:c,name:t.name,types:e,update:a,value:n}):r.createElement("p",null,"Attribut: '",t.name,"'",r.createElement("br",null),"Typ: '",t.type,"'")}}}),[t,n]);return r.createElement(r.Fragment,null,c)}var m=a(22115),u=a(77192),p=a(85630),b=a.n(p);function k(e){const{tag:t,params:a}=e,n=Object.entries(a).filter((e=>"defaultValues"!==e[0]));let l="";const i=(0,r.useMemo)((()=>{let e="";return n.filter((e=>e[0].startsWith("slot-"))).forEach((t=>{const a=t[1],n=t[0].split("-")[1];if(a)if(a.match(/^<.*?>/)?.length){const t=a.indexOf(">");e+=a.substring(0,t)+` slot="${n}"`+a.substring(t)}else e+=`<div slot="${n}">${a}</div>`})),e}),[a]),o=n.filter((e=>!e[0].startsWith("slot-"))).filter((e=>!a.defaultValues.includes(e[0])));for(const[r,m]of o)if(m){let e="";switch(typeof m){case"string":e=` ${r}="${m.replace(/"/g,"'")}"`;break;case"number":e=` ${r}="${m.toString()}"`;break;case"boolean":e=m?` ${r}`:"";break;case"object":e=` ${r}="${JSON.stringify(m)}"`;break;default:e="Never give up hope, one day everything will be fixed."}l+=e}const s=`<kol-${t}${l}>${i}</kol-${t}>`;let d;try{d=(0,u.format)(s,{plugins:[b()],printWidth:80}).replace(/;\n$/,"")}catch(c){d=`\x3c!-- Formatter-Error: Slot-Markup is not valid HTML for formatting. --\x3e\n${s}`}return r.createElement("div",{className:"h-48 rounded-md overflow-hidden"},r.createElement(m.ZP,{defaultLanguage:"html",height:"100%",options:{automaticLayout:!0,fontSize:16,lineNumbers:"off",readOnly:!0},value:d}))}function h(e){const t=Object.fromEntries(Object.entries(e.params).filter((e=>{let[t]=e;return!t.startsWith("slot-")}))),a=Object.entries(e.params).filter((e=>{let[t]=e;return t.startsWith("slot-")})),n={abbr:l.T5,accordion:l.RZ,alert:l.K5,avatar:l.Ek,badge:l.Er,breadcrumb:l.lo,button:l.ic,"button-group":l.uz,"button-link":l.f6,card:l.Gc,details:l.ox,form:l.m5,heading:l.HA,icon:l.Jl,image:l.Cd,"indented-text":l.CV,"input-checkbox":l.TE,"input-color":l.Np,"input-date":l.O,"input-email":l.Lj,"input-file":l.CX,"input-number":l.c2,"input-password":l.z5,"input-radio":l.sy,"input-range":l.TQ,"input-text":l.WD,kolibri:l.Vs,link:l.Nv,"link-button":l.Kc,"link-group":l.$o,logo:l.QK,modal:l.Ud,nav:l.MA,pagination:l.Q4,popover:l.hV,progress:l.WR,quote:l.VZ,select:l.r7,"skip-nav":l.P,spin:l.qq,"split-button":l.KJ,symbol:l.is,table:l.Vp,tabs:l.UD,textarea:l.Qs,toast:l.KolToast,version:l.u_}[e.tag];return n?r.createElement(n,t,a.map((e=>r.createElement("div",{key:e[0],slot:e[0].replace("slot-","").replace("default",""),dangerouslySetInnerHTML:{__html:e[1]}})))):r.createElement("div",null,"Tag not implemented")}function g(e){const{description:t,name:a,update:n,value:l}=e;return r.createElement("div",{className:"bg-gray-100 my-2 rounded-lg p-2 border border-gray-300 border-solid"},r.createElement("b",null,a||"default"),": ",t,r.createElement("br",null),r.createElement(m.ML,{defaultLanguage:"html",height:"5em",onChange:e=>n(`slot-${a}`,e||""),options:{automaticLayout:!0,fontSize:16,lineNumbers:"off"},value:l}))}const f=["_smart-button","_icon-align"],v={abbr:{"slot-default":"Abbr"},accordion:{"slot-default":"Accordion content"},tabs:{_tabs:'[{"_label":"Tab 1"},{"_label":"Tab 2", "_on": {"onClose": true} },{"_label":"Tab 3"}]'},breadcrumb:{_links:"[{'_label':'Startseite','_href':'#/'},{'_label':'Unterseite der Startseite','_href':'#/unterseite'},{'_label':'Unterseite der Unterseite','_href':'#/unterseite/unterseite'}]"},form:{"_required-text":"Bitte alle Felder ausf\xfcllen."},image:{_src:"https://placehold.co/100x100/cc006e/white"},"link-group":{_links:"[{'_label':'Startseite','_href':'#/'},{'_label':'Unterseite der Startseite','_href':'#/unterseite'},{'_label':'Unterseite der Unterseite','_href':'#/unterseite/unterseite'}]"},nav:{_links:"[{'_label':'Startseite','_href':'#/'},{'_label':'Unterseite der Startseite','_href':'#/unterseite'},{'_label':'Unterseite der Unterseite','_href':'#/unterseite/unterseite'}]"},pagination:{_total:"100",_page:"6"},quote:{_quote:"Hello World"},select:{_options:"[{'label':'Herr','value':0},{'label':'Frau','value':1}]"},"skip-nav":{_links:"[{'_label':'Navigation','_href':'#nav'},{'_label':'Inhalt','_href':'#main'},{'_label':'Kontakt','_href':'#kontakt'},{'_label':'Links','_href':'#links'}]"},table:{_headers:'{"horizontal":[[{"label":"Montag","key":"montag"}]]}',_data:'[{"montag":"Zelle1"},{"montag":"Zelle2"}]',_pagination:'{"page":2}'}};function _(e){const[t,a]=(0,r.useState)(function(){const e={};return Object.values(n.p).forEach((t=>{const a=t.name.replace("kol-","");e[a]={defaultValues:[]},t.attributes.forEach((t=>{void 0!==t.defaultValue&&(e[a][t.name]=t.defaultValue.replace(/'/g,""),e[a].defaultValues.push(t.name)),void 0!==v[a]?.[t.name]&&(e[a][t.name]=v[a][t.name])})),t.slots.forEach((t=>{const n=`slot-${t.name||"default"}`,l=v[a]?.[n];l&&(e[a][n]=l)}))})),e}()),[o,s]=(0,r.useState)("badge");(0,r.useEffect)((()=>{e.component&&s(e.component.replace("kol-",""))}),[e.component]),(0,r.useEffect)((()=>{!!n.p.find((e=>e.name===`kol-${o}`))?.attributes.find((e=>"_label"===e.name))&&!t[o]?._label&&m("_label","Label-Text");!!n.p.find((e=>e.name===`kol-${o}`))?.attributes.find((e=>"_heading"===e.name))&&!t[o]?._heading&&m("_heading","Heading-Text")}),[o]);const d=(0,r.useMemo)((()=>t[o]||{}),[t,o]);function m(e,t){a((a=>{const n={...a[o],[e]:t,defaultValues:a[o].defaultValues.filter((t=>t!==e))};return{...a,[o]:n}}))}const u=Object.values(n.p).find((e=>e.name===`kol-${o}`));return r.createElement(i.Z,null,(()=>r.createElement(r.Fragment,null,r.createElement(l.Er,{class:"mb-2",_label:"Beta",_color:"#b00"}),r.createElement("div",{className:"grid lg:grid-cols-3 gap-2"},r.createElement(l.UD,{className:"col-span-2",_label:"Wechselnavigation zwischen Viewer und Code",_tabs:[{_label:"Viewer"},{_label:"Code"}]},r.createElement("div",{className:"p-2"},r.createElement(h,{tag:o,params:d})),r.createElement("div",{className:"lg:col-span-2"},r.createElement(k,{params:d,tag:o}))),r.createElement("div",{className:"grid gap-4 p-2 border-0 border-l border-solid"},r.createElement(l.HA,{_level:3,_label:"Konfigurator"}),r.createElement("div",null,r.createElement(l.HA,{_level:4,_label:"Properties"}),r.createElement("div",{className:"max-h-96 p-2 overflow-auto mb-4"},u&&u.attributes.map((e=>r.createElement(r.Fragment,null,!f.includes(e.name)&&!e.description.startsWith("Deprecated:")&&r.createElement(c,{key:e.name,attribute:e,update:m,value:d[e.name]})))),u&&0===u.attributes.length&&r.createElement("span",{className:"text-gray-500"},"Keine Properties vorhanden")),r.createElement(l.HA,{_level:4,_label:"Slots"}),r.createElement("div",{className:"max-h-56 p-2 overflow-auto"},u&&u.slots.map((e=>r.createElement(g,{key:e.name,description:e.description,name:e.name||"default",update:m,value:d["slot-"+(e.name||"default")]}))),u&&0===u.slots.length&&r.createElement("span",{className:"text-gray-500"},"Keine Slots vorhanden"))))))))}},41002:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>m,default:()=>g,frontMatter:()=>c,metadata:()=>u,toc:()=>b});var n=a(52319),l=(a(50959),a(17942));const r={toc:[{value:"Konstruktion",id:"konstruktion",level:2},{value:"Code",id:"code",level:3},{value:"Beispiel",id:"beispiel",level:3},{value:"Verwendung",id:"verwendung",level:2},{value:"Einfache Standard-Card",id:"einfache-standard-card",level:3},{value:"Titel der Card-Komponente",id:"titel-der-card-komponente",level:3},{value:"Inhalts-Container",id:"inhalts-container",level:3},{value:"Best practices",id:"best-practices",level:3},{value:"Properties",id:"properties",level:2},{value:"Slots",id:"slots",level:2},{value:"Dependencies",id:"dependencies",level:2},{value:"Depends on",id:"depends-on",level:3},{value:"Graph",id:"graph",level:3}]},i="wrapper";function o(e){let{components:t,...a}=e;return(0,l.kt)(i,(0,n.Z)({},r,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Um einzelne Bereiche Ihrer Webseite optisch hervorzuheben, bietet sich die ",(0,l.kt)("strong",{parentName:"p"},"Card"),"-Komponente an. Mit ihrer Hilfe k\xf6nnen Sie Ihre Inhalte sehr einfach strukturieren."),(0,l.kt)("p",null,"Die ",(0,l.kt)("strong",{parentName:"p"},"Card"),"-Komponente besteht aus einem ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("em",{parentName:"strong"},"Titel-Bereich")),", einem ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("em",{parentName:"strong"},"Inhalts-Bereich")),"."),(0,l.kt)("p",null,"Der ",(0,l.kt)("strong",{parentName:"p"},"Titel-Bereich")," wird in einer gr\xf6\xdferen Schrift dargestellt. Der ",(0,l.kt)("strong",{parentName:"p"},"Inhalts-Bereich")," ist optisch durch eine horizontale Trennlinie unterhalb des Titel-Bereichs abgetrennt und wird in der Standardschrift ausgegeben."),(0,l.kt)("h2",{id:"konstruktion"},"Konstruktion"),(0,l.kt)("h3",{id:"code"},"Code"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'<kol-card _label="Testtitel">\n    <div>\n        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.\n        At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum\n        dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos\n        et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.\n    </div>\n</kol-card>\n')),(0,l.kt)("h3",{id:"beispiel"},"Beispiel"),(0,l.kt)("kol-card",{_label:"Testtitel"},(0,l.kt)("div",null,"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.")),(0,l.kt)("h2",{id:"verwendung"},"Verwendung"),(0,l.kt)("h3",{id:"einfache-standard-card"},"Einfache Standard-Card"),(0,l.kt)("p",null,"In der Standardansicht besteht eine ",(0,l.kt)("strong",{parentName:"p"},"Card")," aus einem Titel-Bereich, und einem leeren Inhalts-Bereich.\nDie horizontale Trennlinie zwischen beiden Bereichen setzt KoliBri automatisch."),(0,l.kt)("h3",{id:"titel-der-card-komponente"},"Titel der Card-Komponente"),(0,l.kt)("p",null,"Den Titel der Card bestimmen Sie durch Setzen des Attributs ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"_label")),". Hier k\xf6nnen Sie beliebigen Text, auch Sonderzeichen und Umlaute, eingeben.\nBeachten Sie, dass ",(0,l.kt)("strong",{parentName:"p"},"HTML-Code")," nicht erlaubt ist. Sofern nicht gesetzt werden drei Punkte dargestellt.\nDie \xdcberschriftenebene des Titels wird durch das Attribut ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"_level"))," \xfcbergeben. M\xf6glich sind die Level ",(0,l.kt)("strong",{parentName:"p"},"1")," bis ",(0,l.kt)("strong",{parentName:"p"},"6")),(0,l.kt)("h3",{id:"inhalts-container"},"Inhalts-Container"),(0,l.kt)("p",null,"Die Inhalte im Content-Bereich der Card bestimmen Sie durch Einf\xfcgen eines ",(0,l.kt)("strong",{parentName:"p"},"Inhalts-Containers")," innerhalb des ",(0,l.kt)("inlineCode",{parentName:"p"},"<kol-card></kol-card>-Elements"),". Hier k\xf6nnen Sie beliebigen ",(0,l.kt)("strong",{parentName:"p"},"HTML-Code")," einf\xfcgen."),(0,l.kt)("p",null,"Bitte beachten Sie, dass Sie zwar ein beliebiges HTML-Tag als Inhalts-Container verwenden k\xf6nnen, es aber empfohlen wird ein ",(0,l.kt)("inlineCode",{parentName:"p"},"<div></div>"),"-Tag zu verwenden."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'<kol-card _label="Beispiel" _level="1">\n    <div>Text im Inhalts-Bereich</div>\n</kol-card>\n')),(0,l.kt)("h3",{id:"best-practices"},"Best practices"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Verwenden Sie die ",(0,l.kt)("strong",{parentName:"li"},"Card"),"-Komponente, um in sich geschlossene Themenbereiche optisch zu kapseln."),(0,l.kt)("li",{parentName:"ul"},"Verwenden Sie die ",(0,l.kt)("strong",{parentName:"li"},"Card"),"-Komponente, um Ihre Inhalte semantisch zu strukturieren."),(0,l.kt)("li",{parentName:"ul"},"Vermeiden Sie, zu viele Cards auf einer Inhaltsseite zu verwenden."),(0,l.kt)("li",{parentName:"ul"},"Vermeiden Sie, wichtige Inhalte innerhalb der Card-Komponente zu platzieren, wenn sich die zugeh\xf6rigen Aktions-Elemente (Buttons, Links, etc.) nicht innerhalb der gleichen Card befinden.")),(0,l.kt)("h2",{id:"properties"},"Properties"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Property"),(0,l.kt)("th",{parentName:"tr",align:null},"Attribute"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_hasCloser")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_has-closer")),(0,l.kt)("td",{parentName:"tr",align:null},"Defines whether the element can be closed."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"boolean")," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},"undefined")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"false"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_label")," ",(0,l.kt)("em",{parentName:"td"},"(required)")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_label")),(0,l.kt)("td",{parentName:"tr",align:null},"Defines the visible or semantic label of the component (e.g. aria-label, label, headline, caption, summary, etc.)."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_level")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_level")),(0,l.kt)("td",{parentName:"tr",align:null},"Defines which H-level from 1-6 the heading has. 0 specifies no heading and is shown as bold text."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"0")," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},"1")," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},"2")," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},"3")," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},"4")," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},"5")," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},"6")," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},"undefined")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"1"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_on")),(0,l.kt)("td",{parentName:"tr",align:null},"--"),(0,l.kt)("td",{parentName:"tr",align:null},"Defines the event callback functions for the component."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"undefined")," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},"{ onClose?: EventCallback<Event>")," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},"undefined; }")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"undefined"))))),(0,l.kt)("h2",{id:"slots"},"Slots"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Slot"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Erm\xf6glicht das Einf\xfcgen beliebigen HTML's in den Inhaltsbereich der Card.")))),(0,l.kt)("h2",{id:"dependencies"},"Dependencies"),(0,l.kt)("h3",{id:"depends-on"},"Depends on"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"./heading"},"kol-heading-wc")),(0,l.kt)("li",{parentName:"ul"},"kol-button-wc")),(0,l.kt)("h3",{id:"graph"},"Graph"),(0,l.kt)("mermaid",{value:"graph TD;\n  kol-card --\x3e kol-heading-wc\n  kol-card --\x3e kol-button-wc\n  kol-button-wc --\x3e kol-span-wc\n  kol-button-wc --\x3e kol-tooltip-wc\n  kol-span-wc --\x3e kol-icon\n  kol-tooltip-wc --\x3e kol-span-wc\n  style kol-card fill:#f9f,stroke:#333,stroke-width:4px"}),(0,l.kt)("hr",null))}o.isMDXComponent=!0;var s=a(9091),d=a(25433);const c={title:"Card",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die Card-Komponente.",tags:["Card","Beschreibung","Spezifikation","Beispiele"]},m=void 0,u={unversionedId:"components/card",id:"components/card",title:"Card",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die Card-Komponente.",source:"@site/docs/30-components/card.mdx",sourceDirName:"30-components",slug:"/components/card",permalink:"/docs/next/components/card",draft:!1,tags:[{label:"Card",permalink:"/docs/next/tags/card"},{label:"Beschreibung",permalink:"/docs/next/tags/beschreibung"},{label:"Spezifikation",permalink:"/docs/next/tags/spezifikation"},{label:"Beispiele",permalink:"/docs/next/tags/beispiele"}],version:"current",frontMatter:{title:"Card",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die Card-Komponente.",tags:["Card","Beschreibung","Spezifikation","Beispiele"]},sidebar:"tutorialSidebar",previous:{title:"Button",permalink:"/docs/next/components/button"},next:{title:"Details",permalink:"/docs/next/components/details"}},p={},b=[{value:"Live-Editor",id:"live-editor",level:2},{value:"Beispiele",id:"beispiele",level:2},{value:"Card",id:"card",level:3},{value:"Best\xe4tigingscard",id:"best\xe4tigingscard",level:3},{value:"Cards im Grid-Flu\xdf",id:"cards-im-grid-flu\xdf",level:3},{value:"Card als Artikelliste",id:"card-als-artikelliste",level:3}],k={toc:b},h="wrapper";function g(e){let{components:t,...a}=e;return(0,l.kt)(h,(0,n.Z)({},k,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)(o,{mdxType:"Readme"}),(0,l.kt)("h2",{id:"live-editor"},"Live-Editor"),(0,l.kt)(d._,{component:"card",mdxType:"LiveEditorCompact"}),(0,l.kt)("h2",{id:"beispiele"},"Beispiele"),(0,l.kt)("h3",{id:"card"},"Card"),(0,l.kt)(s._,{component:"card",sample:"basic",mdxType:"Configurator"}),(0,l.kt)("h3",{id:"best\xe4tigingscard"},"Best\xe4tigingscard"),(0,l.kt)(s._,{component:"card",sample:"confirm",mdxType:"Configurator"}),(0,l.kt)("h3",{id:"cards-im-grid-flu\xdf"},"Cards im Grid-Flu\xdf"),(0,l.kt)(s._,{component:"card",sample:"flex",mdxType:"Configurator"}),(0,l.kt)("h3",{id:"card-als-artikelliste"},"Card als Artikelliste"),(0,l.kt)(s._,{component:"card",sample:"selection",mdxType:"Configurator"}))}g.isMDXComponent=!0}}]);