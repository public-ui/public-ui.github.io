"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[75732],{9091:(e,t,a)=>{a.d(t,{_:()=>s});var l=a(23083),n=a(50959);const r=function(e,t,a,l,n){return void 0===n&&(n="editor"),`${e}&module=${l}&initialpath=%23%2F${t}%2F${a}&view=${n}`},i={width:"100%",height:"500px",border:"0",overflow:"hidden"},o=e=>{let{url:t}=e;return n.createElement("div",{className:"m-2"},n.createElement("iframe",{src:t,style:i,title:"kolibri-public-ui-code-samples",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}),n.createElement(l.Nv,{_href:t,_label:"",_target:"codesandbox"},n.createElement("img",{alt:"CodeSandbox-Schalter",src:"https://codesandbox.io/static/img/play-codesandbox.svg"})))},s=e=>{let{component:t,sample:a}=e;const[s,c]=(0,n.useState)("Preview"),u="https://codesandbox.io/embed/kolibri-public-ui-react-samples-w5u37c?fontsize=14&hidenavigation=1&autoresize=1&theme=dark",m=`%2Fsrc%2Fsamples%2F${t}%2F${a}`,d={angular:`${m}.html`,react:`${m}.tsx`,vue:`${m}.vue`,webcomponent:`${m}.html`},p=`/sample-react/#/${t}/${a}?hideMenus`,b={onSelect:(e,t)=>{switch(t){case 1:c((()=>"Angular"));break;case 2:c((()=>"React"));break;case 3:c((()=>"Vue"));break;case 4:c((()=>"Web Component"));break;default:c((()=>"Preview"))}}};return n.createElement(l.UD,{className:"w-full",_label:"Code-Beispiel",_on:b,_tabs:[{_label:"Vorschau"},{_disabled:!0,_label:"Angular"},{_label:"React"},{_disabled:!0,_label:"Vue"},{_disabled:!0,_label:"Web Component"}]},n.createElement("div",null,"Preview"===s&&n.createElement("iframe",{src:p,style:i,title:"kolibri-public-ui-code-samples",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"})),n.createElement("div",null,"Angular"===s&&n.createElement(o,{url:r(u,t,a,d.angular)})),n.createElement("div",null,"React"===s&&n.createElement(o,{url:r(u,t,a,d.react)})),n.createElement("div",null,"Vue"===s&&n.createElement(o,{url:r(u,t,a,d.vue)})),n.createElement("div",null,"Web Component"===s&&n.createElement(o,{url:r(u,t,a,d.webcomponent)})))}},25433:(e,t,a)=>{a.d(t,{_:()=>E});var l=a(59673),n=a(23083),r=a(50959),i=a(60112);function o(e){const{label:t,name:a,update:l,value:i}=e;return(0,r.useEffect)((()=>{i||l(a,"#000000")}),[]),r.createElement(n.Np,{_label:"",_on:{onChange:(e,t)=>l(a,t)},_value:i},r.createElement("span",{slot:"expert"},t))}function s(e){const{attribute:t,label:a,update:l}=e,[i,o]=(0,r.useState)(""),[s,c]=(0,r.useState)(""),[u,m]=(0,r.useState)(""),[d,p]=(0,r.useState)("");let b=!1,f=!1,_=!1,g=!1;t.type.includes("KoliBriAllIcon")?(b=!0,f=!0,_=!0,g=!0):(t.type.includes("KoliBriVerticalIcon")&&(_=!0,g=!0),t.type.includes("KoliBriHorizontalIcon")&&(b=!0,f=!0)),(0,r.useEffect)((()=>{if(!i||s||u||d){const e={};i&&(e.left=`codicon codicon-${i}`),s&&(e.right=`codicon codicon-${s}`),u&&(e.top=`codicon codicon-${u}`),d&&(e.bottom=`codicon codicon-${d}`),Object.keys(e).length&&l(t.name,JSON.stringify(e))}else l(t.name,`codicon codicon-${i}`)}),[i,s,u,d]);const h=["home","arrow-up","arrow-right","arrow-down","arrow-left"];return r.createElement("div",null,a,b?r.createElement(n.ox,{_label:"Links"},r.createElement("div",{className:"flex flex-wrap"},h.map((e=>r.createElement(n.ic,{key:e,_icons:`codicon codicon-${e}`,_hideLabel:!0,_label:"",_on:{onClick:()=>o(e)}}))))):"",f?r.createElement(n.ox,{_label:"Rechts"},r.createElement("div",{className:"flex flex-wrap"},h.map((e=>r.createElement(n.ic,{key:e,_icons:`codicon codicon-${e}`,_hideLabel:!0,_label:"",_on:{onClick:()=>c(e)}}))))):"",_?r.createElement(n.ox,{_label:"Oben"},r.createElement("div",{className:"flex flex-wrap"},h.map((e=>r.createElement(n.ic,{key:e,_icons:`codicon codicon-${e}`,_hideLabel:!0,_label:"",_on:{onClick:()=>m(e)}}))))):"",g?r.createElement(n.ox,{_label:"Unten"},r.createElement("div",{className:"flex flex-wrap"},h.map((e=>r.createElement(n.ic,{key:e,_icons:`codicon codicon-${e}`,_hideLabel:!0,_label:"",_on:{onClick:()=>p(e)}}))))):"")}function c(e){const{name:t,label:a,types:l,update:i,value:o}=e,s=[];function c(e){return{label:e,value:e}}return l.includes("undefined")?(s.push({label:"-",value:void 0}),s.push(...l.filter((e=>"undefined"!==e)).map(c))):s.push(...l.filter((e=>"undefined"!==e)).map(c)),r.createElement(n.r7,{className:"my-2",_label:"",_options:JSON.stringify(s),_on:{onChange:(e,a)=>i(t,a[0])},_value:o?[o]:void 0},r.createElement("span",{slot:"expert"},a))}function u(e){const{attribute:t,update:a,value:l}=e,i=(0,r.useMemo)((()=>{let e=t.type.replace(/\\?"/g,"").split(" | ");return e=e.filter((e=>"KoliBriAllIcon ignorieren"!==e)),1===e.length?e[0]:e.includes("string")?"string":e.includes("number")?"number":e.includes("boolean")?"boolean":""}),[t]),u=(0,r.useMemo)((()=>{const e=t.type.split(" | ").map((e=>e.replace(/\\?"/g,""))),u=r.createElement(n.T5,{_label:t.description},t.name);switch(t.name){case"_color":return r.createElement(o,{name:t.name,label:u,update:a,value:l});case"_icon":return r.createElement(s,{attribute:t,label:u,update:a,value:l});default:switch(i){case"string":return r.createElement(n.WD,{className:"my-2",_label:"",_on:{onChange:(e,l)=>a(t.name,l)},_value:l||""},r.createElement("span",{slot:"expert"},u));case"number":return r.createElement(n.c2,{className:"my-2",_label:"",_on:{onChange:(e,l)=>a(t.name,l)},_value:l},r.createElement("span",{slot:"expert"},u));case"boolean":return r.createElement(n.TE,{className:"my-2",_checked:!0===l,_label:"",_on:{onChange:(e,l)=>a(t.name,l)},_variant:"switch",_value:!0},r.createElement("span",{slot:"expert"},u));default:return e.length>1?r.createElement(c,{label:u,name:t.name,types:e,update:a,value:l}):r.createElement("p",null,"Attribut: '",t.name,"'",r.createElement("br",null),"Typ: '",t.type,"'")}}}),[t,l]);return r.createElement(r.Fragment,null,u)}var m=a(22115),d=a(77192),p=a(85630),b=a.n(p);function f(e){const{tag:t,params:a}=e,l=Object.entries(a).filter((e=>"defaultValues"!==e[0]));let n="";const i=(0,r.useMemo)((()=>{let e="";return l.filter((e=>e[0].startsWith("slot-"))).forEach((t=>{const a=t[1],l=t[0].split("-")[1];if(a)if(a.match(/^<.*?>/)?.length){const t=a.indexOf(">");e+=a.substring(0,t)+` slot="${l}"`+a.substring(t)}else e+=`<div slot="${l}">${a}</div>`})),e}),[a]),o=l.filter((e=>!e[0].startsWith("slot-"))).filter((e=>!a.defaultValues.includes(e[0])));for(const[r,m]of o)if(m){let e="";switch(typeof m){case"string":e=` ${r}="${m.replace(/"/g,"'")}"`;break;case"number":e=` ${r}="${m.toString()}"`;break;case"boolean":e=m?` ${r}`:"";break;case"object":e=` ${r}="${JSON.stringify(m)}"`;break;default:e="Never give up hope, one day everything will be fixed."}n+=e}const s=`<kol-${t}${n}>${i}</kol-${t}>`;let c;try{c=(0,d.format)(s,{plugins:[b()],printWidth:80}).replace(/;\n$/,"")}catch(u){c=`\x3c!-- Formatter-Error: Slot-Markup is not valid HTML for formatting. --\x3e\n${s}`}return r.createElement("div",{className:"h-48 rounded-md overflow-hidden"},r.createElement(m.ZP,{defaultLanguage:"html",height:"100%",options:{automaticLayout:!0,fontSize:16,lineNumbers:"off",readOnly:!0},value:c}))}function _(e){const t=Object.fromEntries(Object.entries(e.params).filter((e=>{let[t]=e;return!t.startsWith("slot-")}))),a=Object.entries(e.params).filter((e=>{let[t]=e;return t.startsWith("slot-")})),l={abbr:n.T5,accordion:n.RZ,alert:n.K5,avatar:n.Ek,badge:n.Er,breadcrumb:n.lo,button:n.ic,"button-group":n.uz,"button-link":n.f6,card:n.Gc,details:n.ox,form:n.m5,heading:n.HA,icon:n.Jl,image:n.Cd,"indented-text":n.CV,"input-checkbox":n.TE,"input-color":n.Np,"input-date":n.O,"input-email":n.Lj,"input-file":n.CX,"input-number":n.c2,"input-password":n.z5,"input-radio":n.sy,"input-range":n.TQ,"input-text":n.WD,kolibri:n.Vs,link:n.Nv,"link-button":n.Kc,"link-group":n.$o,logo:n.QK,modal:n.Ud,nav:n.MA,pagination:n.Q4,popover:n.hV,progress:n.WR,quote:n.VZ,select:n.r7,"skip-nav":n.P,spin:n.qq,"split-button":n.KJ,symbol:n.is,table:n.Vp,tabs:n.UD,textarea:n.Qs,toast:n.KolToast,version:n.u_}[e.tag];return l?r.createElement(l,t,a.map((e=>r.createElement("div",{key:e[0],slot:e[0].replace("slot-","").replace("default",""),dangerouslySetInnerHTML:{__html:e[1]}})))):r.createElement("div",null,"Tag not implemented")}function g(e){const{description:t,name:a,update:l,value:n}=e;return r.createElement("div",{className:"bg-gray-100 my-2 rounded-lg p-2 border border-gray-300 border-solid"},r.createElement("b",null,a||"default"),": ",t,r.createElement("br",null),r.createElement(m.ML,{defaultLanguage:"html",height:"5em",onChange:e=>l(`slot-${a}`,e||""),options:{automaticLayout:!0,fontSize:16,lineNumbers:"off"},value:n}))}const h=["_smart-button","_icon-align"],v={abbr:{"slot-default":"Abbr"},accordion:{"slot-default":"Accordion content"},tabs:{_tabs:'[{"_label":"Tab 1"},{"_label":"Tab 2", "_on": {"onClose": true} },{"_label":"Tab 3"}]'},breadcrumb:{_links:"[{'_label':'Startseite','_href':'#/'},{'_label':'Unterseite der Startseite','_href':'#/unterseite'},{'_label':'Unterseite der Unterseite','_href':'#/unterseite/unterseite'}]"},form:{"_required-text":"Bitte alle Felder ausf\xfcllen."},image:{_src:"https://placehold.co/100x100/cc006e/white"},"link-group":{_links:"[{'_label':'Startseite','_href':'#/'},{'_label':'Unterseite der Startseite','_href':'#/unterseite'},{'_label':'Unterseite der Unterseite','_href':'#/unterseite/unterseite'}]"},nav:{_links:"[{'_label':'Startseite','_href':'#/'},{'_label':'Unterseite der Startseite','_href':'#/unterseite'},{'_label':'Unterseite der Unterseite','_href':'#/unterseite/unterseite'}]"},pagination:{_total:"100",_page:"6"},quote:{_quote:"Hello World"},select:{_options:"[{'label':'Herr','value':0},{'label':'Frau','value':1}]"},"skip-nav":{_links:"[{'_label':'Navigation','_href':'#nav'},{'_label':'Inhalt','_href':'#main'},{'_label':'Kontakt','_href':'#kontakt'},{'_label':'Links','_href':'#links'}]"},table:{_headers:'{"horizontal":[[{"label":"Montag","key":"montag"}]]}',_data:'[{"montag":"Zelle1"},{"montag":"Zelle2"}]',_pagination:'{"page":2}'}};function E(e){const[t,a]=(0,r.useState)(function(){const e={};return Object.values(l.p).forEach((t=>{const a=t.name.replace("kol-","");e[a]={defaultValues:[]},t.attributes.forEach((t=>{void 0!==t.defaultValue&&(e[a][t.name]=t.defaultValue.replace(/'/g,""),e[a].defaultValues.push(t.name)),void 0!==v[a]?.[t.name]&&(e[a][t.name]=v[a][t.name])})),t.slots.forEach((t=>{const l=`slot-${t.name||"default"}`,n=v[a]?.[l];n&&(e[a][l]=n)}))})),e}()),[o,s]=(0,r.useState)("badge");(0,r.useEffect)((()=>{e.component&&s(e.component.replace("kol-",""))}),[e.component]),(0,r.useEffect)((()=>{!!l.p.find((e=>e.name===`kol-${o}`))?.attributes.find((e=>"_label"===e.name))&&!t[o]?._label&&m("_label","Label-Text");!!l.p.find((e=>e.name===`kol-${o}`))?.attributes.find((e=>"_heading"===e.name))&&!t[o]?._heading&&m("_heading","Heading-Text")}),[o]);const c=(0,r.useMemo)((()=>t[o]||{}),[t,o]);function m(e,t){a((a=>{const l={...a[o],[e]:t,defaultValues:a[o].defaultValues.filter((t=>t!==e))};return{...a,[o]:l}}))}const d=Object.values(l.p).find((e=>e.name===`kol-${o}`));return r.createElement(i.Z,null,(()=>r.createElement(r.Fragment,null,r.createElement(n.Er,{class:"mb-2",_label:"Beta",_color:"#b00"}),r.createElement("div",{className:"grid lg:grid-cols-3 gap-2"},r.createElement(n.UD,{className:"col-span-2",_label:"Wechselnavigation zwischen Viewer und Code",_tabs:[{_label:"Viewer"},{_label:"Code"}]},r.createElement("div",{className:"p-2"},r.createElement(_,{tag:o,params:c})),r.createElement("div",{className:"lg:col-span-2"},r.createElement(f,{params:c,tag:o}))),r.createElement("div",{className:"grid gap-4 p-2 border-0 border-l border-solid"},r.createElement(n.HA,{_level:3,_label:"Konfigurator"}),r.createElement("div",null,r.createElement(n.HA,{_level:4,_label:"Properties"}),r.createElement("div",{className:"max-h-96 p-2 overflow-auto mb-4"},d&&d.attributes.map((e=>r.createElement(r.Fragment,null,!h.includes(e.name)&&!e.description.startsWith("Deprecated:")&&r.createElement(u,{key:e.name,attribute:e,update:m,value:c[e.name]})))),d&&0===d.attributes.length&&r.createElement("span",{className:"text-gray-500"},"Keine Properties vorhanden")),r.createElement(n.HA,{_level:4,_label:"Slots"}),r.createElement("div",{className:"max-h-56 p-2 overflow-auto"},d&&d.slots.map((e=>r.createElement(g,{key:e.name,description:e.description,name:e.name||"default",update:m,value:c["slot-"+(e.name||"default")]}))),d&&0===d.slots.length&&r.createElement("span",{className:"text-gray-500"},"Keine Slots vorhanden"))))))))}},80838:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var l=a(52319),n=(a(50959),a(17942)),r=(a(9091),a(25433));const i={title:"KoliBri",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die KoliBri-Komponente.",tags:["KoliBri","Beschreibung","Spezifikation","Beispiele"]},o=void 0,s={unversionedId:"components/kolibri",id:"version-1.7/components/kolibri",title:"KoliBri",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die KoliBri-Komponente.",source:"@site/versioned_docs/version-1.7/30-components/kolibri.mdx",sourceDirName:"30-components",slug:"/components/kolibri",permalink:"/en/docs/components/kolibri",draft:!1,tags:[{label:"KoliBri",permalink:"/en/docs/tags/koli-bri"},{label:"Beschreibung",permalink:"/en/docs/tags/beschreibung"},{label:"Spezifikation",permalink:"/en/docs/tags/spezifikation"},{label:"Beispiele",permalink:"/en/docs/tags/beispiele"}],version:"1.7",frontMatter:{title:"KoliBri",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die KoliBri-Komponente.",tags:["KoliBri","Beschreibung","Spezifikation","Beispiele"]},sidebar:"tutorialSidebar",previous:{title:"InputText",permalink:"/en/docs/components/input-text"},next:{title:"LinkButton",permalink:"/en/docs/components/link-button"}},c={},u=[{value:"Live-Editor",id:"live-editor",level:2}],m={toc:u},d="wrapper";function p(e){let{components:t,...a}=e;return(0,n.kt)(d,(0,l.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"live-editor"},"Live-Editor"),(0,n.kt)(r._,{component:"kolibri",mdxType:"LiveEditorCompact"}))}p.isMDXComponent=!0}}]);