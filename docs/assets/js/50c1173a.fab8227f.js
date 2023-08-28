"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[21339],{63739:(e,t,a)=>{a.d(t,{_:()=>c});var n=a(57349),l=a(50959);const i=function(e,t,a,n,l){return void 0===l&&(l="editor"),`${e}&module=${n}&initialpath=%23%2F${t}%2F${a}&view=${l}`},o={width:"100%",height:"500px",border:"0",overflow:"hidden"},r=e=>{let{url:t}=e;return l.createElement("div",{className:"m-2"},l.createElement("iframe",{src:t,style:o,title:"kolibri-public-ui-code-samples",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}),l.createElement(n.Nv,{_href:t,_label:"",_target:"codesandbox"},l.createElement("img",{alt:"CodeSandbox-Schalter",src:"https://codesandbox.io/static/img/play-codesandbox.svg"})))},c=e=>{let{component:t,sample:a}=e;const[c,s]=(0,l.useState)("Preview"),m="https://codesandbox.io/embed/kolibri-public-ui-react-samples-w5u37c?fontsize=14&hidenavigation=1&autoresize=1&theme=dark",u=`%2Fsrc%2Fsamples%2F${t}%2F${a}`,d={angular:`${u}.html`,react:`${u}.tsx`,vue:`${u}.vue`,webcomponent:`${u}.html`},p=`/sample-react/#/${t}/${a}`,b={onSelect:(e,t)=>{switch(t){case 1:s((()=>"Angular"));break;case 2:s((()=>"React"));break;case 3:s((()=>"Vue"));break;case 4:s((()=>"Web Component"));break;default:s((()=>"Preview"))}}};return l.createElement(n.UD,{className:"w-full",_ariaLabel:"Code-Beispiel",_on:b,_tabs:[{_label:"Vorschau"},{_disabled:!0,_label:"Angular"},{_label:"React"},{_disabled:!0,_label:"Vue"},{_disabled:!0,_label:"Web Component"}]},l.createElement("div",null,"Preview"===c&&l.createElement("iframe",{src:p,style:o,title:"kolibri-public-ui-code-samples",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"})),l.createElement("div",null,"Angular"===c&&l.createElement(r,{url:i(m,t,a,d.angular)})),l.createElement("div",null,"React"===c&&l.createElement(r,{url:i(m,t,a,d.react)})),l.createElement("div",null,"Vue"===c&&l.createElement(r,{url:i(m,t,a,d.vue)})),l.createElement("div",null,"Web Component"===c&&l.createElement(r,{url:i(m,t,a,d.webcomponent)})))}},31617:(e,t,a)=>{a.d(t,{_:()=>E});var n=a(6826),l=a(57349),i=a(50959),o=a(29886);function r(e){const{label:t,name:a,update:n,value:o}=e;return(0,i.useEffect)((()=>{o||n(a,"#000000")}),[]),i.createElement(l.Np,{_on:{onChange:(e,t)=>n(a,t)},_value:o},t)}function c(e){const{attribute:t,label:a,update:n}=e,[o,r]=(0,i.useState)(""),[c,s]=(0,i.useState)(""),[m,u]=(0,i.useState)(""),[d,p]=(0,i.useState)("");let b=!1,f=!1,g=!1,h=!1;t.type.includes("KoliBriAllIcon")?(b=!0,f=!0,g=!0,h=!0):(t.type.includes("KoliBriVerticalIcon")&&(g=!0,h=!0),t.type.includes("KoliBriHorizontalIcon")&&(b=!0,f=!0)),(0,i.useEffect)((()=>{if(!o||c||m||d){const e={};o&&(e.left=`codicon codicon-${o}`),c&&(e.right=`codicon codicon-${c}`),m&&(e.top=`codicon codicon-${m}`),d&&(e.bottom=`codicon codicon-${d}`),Object.keys(e).length&&n(t.name,JSON.stringify(e))}else n(t.name,`codicon codicon-${o}`)}),[o,c,m,d]);const v=["home","arrow-up","arrow-right","arrow-down","arrow-left"];return i.createElement("div",null,a,b?i.createElement(l.ox,{_summary:"Links"},i.createElement("div",{className:"flex flex-wrap"},v.map((e=>i.createElement(l.ic,{key:e,_icon:`codicon codicon-${e}`,_hideLabel:!0,_label:"",_on:{onClick:()=>r(e)}}))))):"",f?i.createElement(l.ox,{_summary:"Rechts"},i.createElement("div",{className:"flex flex-wrap"},v.map((e=>i.createElement(l.ic,{key:e,_icon:`codicon codicon-${e}`,_hideLabel:!0,_label:"",_on:{onClick:()=>s(e)}}))))):"",g?i.createElement(l.ox,{_summary:"Oben"},i.createElement("div",{className:"flex flex-wrap"},v.map((e=>i.createElement(l.ic,{key:e,_icon:`codicon codicon-${e}`,_hideLabel:!0,_label:"",_on:{onClick:()=>u(e)}}))))):"",h?i.createElement(l.ox,{_summary:"Unten"},i.createElement("div",{className:"flex flex-wrap"},v.map((e=>i.createElement(l.ic,{key:e,_icon:`codicon codicon-${e}`,_hideLabel:!0,_label:"",_on:{onClick:()=>p(e)}}))))):"")}function s(e){const{name:t,label:a,types:n,update:o,value:r}=e,c=[];function s(e){return{label:e,value:e}}return n.includes("undefined")?(c.push({label:"-",value:void 0}),c.push(...n.filter((e=>"undefined"!==e)).map(s))):c.push(...n.filter((e=>"undefined"!==e)).map(s)),i.createElement(l.r7,{className:"my-2",_list:JSON.stringify(c),_on:{onChange:(e,a)=>o(t,a[0])},_value:r?[r]:void 0},a)}function m(e){const{attribute:t,update:a,value:n}=e,o=(0,i.useMemo)((()=>{let e=t.type.replace(/\\?"/g,"").split(" | ");return e=e.filter((e=>"KoliBriAllIcon ignorieren"!==e)),1===e.length?e[0]:e.includes("string")?"string":e.includes("number")?"number":e.includes("boolean")?"boolean":""}),[t]),m=(0,i.useMemo)((()=>{const e=t.type.split(" | ").map((e=>e.replace(/\\?"/g,""))),m=i.createElement(l.T5,{_title:t.description},t.name);switch(t.name){case"_color":return i.createElement(r,{name:t.name,label:m,update:a,value:n});case"_icon":return i.createElement(c,{attribute:t,label:m,update:a,value:n});default:switch(o){case"string":return i.createElement(l.WD,{className:"my-2",_label:!1,_on:{onChange:(e,n)=>a(t.name,n)},_value:n||""},m);case"number":return i.createElement(l.c2,{className:"my-2",_label:!1,_on:{onChange:(e,n)=>a(t.name,n)},_value:n},m);case"boolean":return i.createElement(l.TE,{className:"my-2",_checked:!0===n,_label:!1,_on:{onChange:(e,n)=>a(t.name,n)},_variant:"switch",_value:!0},m);default:return e.length>1?i.createElement(s,{label:m,name:t.name,types:e,update:a,value:n}):i.createElement("p",null,"Attribut: '",t.name,"'",i.createElement("br",null),"Typ: '",t.type,"'")}}}),[t,n]);return i.createElement(i.Fragment,null,m)}var u=a(6453),d=a(77192),p=a(85630),b=a.n(p);function f(e){const{tag:t,params:a}=e,n=Object.entries(a).filter((e=>"defaultValues"!==e[0]));let l="";const o=(0,i.useMemo)((()=>{let e="";return n.filter((e=>e[0].startsWith("slot-"))).forEach((t=>{const a=t[1],n=t[0].split("-")[1];if(a)if(a.match(/^<.*?>/)?.length){const t=a.indexOf(">");e+=a.substring(0,t)+` slot="${n}"`+a.substring(t)}else e+=`<div slot="${n}">${a}</div>`})),e}),[a]),r=n.filter((e=>!e[0].startsWith("slot-"))).filter((e=>!a.defaultValues.includes(e[0])));for(const[i,u]of r)if(u){let e="";switch(typeof u){case"string":e=` ${i}="${u.replace(/"/g,"'")}"`;break;case"number":e=` ${i}="${u.toString()}"`;break;case"boolean":e=u?` ${i}`:"";break;case"object":e=` ${i}="${JSON.stringify(u)}"`;break;default:e="Never give up hope, one day everything will be fixed."}l+=e}const c=`<kol-${t}${l}>${o}</kol-${t}>`;let s;try{s=(0,d.format)(c,{plugins:[b()],printWidth:80}).replace(/;\n$/,"")}catch(m){s=`\x3c!-- Formatter-Error: Slot-Markup is not valid HTML for formatting. --\x3e\n${c}`}return i.createElement("div",{className:"h-48 rounded-md overflow-hidden"},i.createElement(u.ZP,{defaultLanguage:"html",height:"100%",options:{automaticLayout:!0,fontSize:16,lineNumbers:"off",readOnly:!0},value:s}))}function g(e){const t={};Object.entries(e.params).filter((e=>!e[0].startsWith("slot-"))).forEach((e=>{t[e[0]]=e[1]}));const a=Object.entries(e.params).filter((e=>e[0].startsWith("slot-"))),n={abbr:l.T5,accordion:l.RZ,alert:l.K5,avatar:l.Ek,badge:l.Er,breadcrumb:l.lo,button:l.ic,"button-group":l.uz,"button-link":l.f6,card:l.Gc,details:l.ox,form:l.m5,heading:l.HA,icon:l.Jl,image:l.Cd,"indented-text":l.CV,"input-checkbox":l.TE,"input-color":l.Np,"input-date":l.O,"input-email":l.Lj,"input-file":l.CX,"input-number":l.c2,"input-password":l.z5,"input-radio":l.sy,"input-range":l.TQ,"input-text":l.WD,kolibri:l.Vs,link:l.Nv,"link-button":l.Kc,"link-group":l.$o,logo:l.QK,modal:l.Ud,nav:l.MA,pagination:l.Q4,popover:l.hV,progress:l.WR,quote:l.VZ,select:l.r7,"skip-nav":l.P,spin:l.qq,"split-button":l.KJ,symbol:l.is,table:l.Vp,tabs:l.UD,textarea:l.Qs,toast:l.CO,version:l.u_}[e.tag];return n?i.createElement(n,t,a.map((e=>i.createElement("div",{key:e[0],slot:e[0].replace("slot-",""),dangerouslySetInnerHTML:{__html:e[1]}})))):i.createElement("div",null,"Tag not implemented")}function h(e){const{description:t,name:a,update:n,value:l}=e;return i.createElement("div",{className:"bg-gray-100 my-2 rounded-lg p-2 border border-gray-300 border-solid"},i.createElement("b",null,a||"default"),": ",t,i.createElement("br",null),i.createElement(u.ML,{defaultLanguage:"html",height:"5em",onChange:e=>n(`slot-${a}`,e||""),options:{automaticLayout:!0,fontSize:16,lineNumbers:"off"},value:l}))}const v=["_smart-button","_icon-align"];function E(e){const[t,a]=(0,i.useState)(function(){const e={};return Object.values(n.p).forEach((t=>{const a=t.name.replace("kol-","");e[a]={defaultValues:[]},t.attributes.forEach((t=>{t.defaultValue&&(e[a][t.name]=t.defaultValue.replace(/'/g,""),e[a].defaultValues.push(t.name))}))})),e}()),[r,c]=(0,i.useState)("badge");(0,i.useEffect)((()=>{e.component&&c(e.component.replace("kol-",""))}),[e.component]),(0,i.useEffect)((()=>{!!n.p.find((e=>e.name===`kol-${r}`))?.attributes.find((e=>"_label"===e.name))&&!t[r]?._label&&u("_label","Label-Text");!!n.p.find((e=>e.name===`kol-${r}`))?.attributes.find((e=>"_heading"===e.name))&&!t[r]?._heading&&u("_heading","Heading-Text")}),[r]);const s=(0,i.useMemo)((()=>t[r]||{}),[t,r]);function u(e,t){a((a=>{const n={...a[r],[e]:t,defaultValues:a[r].defaultValues.filter((t=>t!==e))};return{...a,[r]:n}}))}const d=Object.values(n.p).find((e=>e.name===`kol-${r}`));return i.createElement(o.Z,null,(()=>i.createElement(i.Fragment,null,i.createElement(l.Er,{class:"mb-2",_label:"Beta",_color:"#b00"}),i.createElement("div",{className:"grid lg:grid-cols-3 gap-2"},i.createElement(l.UD,{className:"col-span-2",_ariaLabel:"Wechselnavigation zwischen Viewer und Code",_tabs:[{_label:"Viewer"},{_label:"Code"}]},i.createElement("div",{className:"p-2"},i.createElement(g,{tag:r,params:s})),i.createElement("div",{className:"lg:col-span-2"},i.createElement(f,{params:s,tag:r}))),i.createElement("div",{className:"grid gap-4 p-2 border-0 border-l border-solid"},i.createElement(l.HA,{_level:3,_label:"Konfigurator"}),i.createElement("div",null,i.createElement(l.HA,{_level:4,_label:"Properties"}),i.createElement("div",{className:"max-h-96 p-2 overflow-auto mb-4"},d&&d.attributes.map((e=>i.createElement(i.Fragment,null,!v.includes(e.name)&&!e.description.startsWith("Deprecated:")&&i.createElement(m,{key:e.name,attribute:e,update:u,value:s[e.name]})))),d&&0===d.attributes.length&&i.createElement("span",{className:"text-gray-500"},"Keine Properties vorhanden")),i.createElement(l.HA,{_level:4,_label:"Slots"}),i.createElement("div",{className:"max-h-56 p-2 overflow-auto"},d&&d.slots.map((e=>i.createElement(h,{key:e.name,description:e.description,name:e.name,update:u,value:s["slot-"+e.name]}))),d&&0===d.slots.length&&i.createElement("span",{className:"text-gray-500"},"Keine Slots vorhanden"))))))))}},71025:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>m});var n=a(15882),l=(a(50959),a(17942)),i=(a(63739),a(31617));const o={title:"KoliBri",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die KoliBri-Komponente.",tags:["KoliBri","Beschreibung","Spezifikation","Beispiele"]},r=void 0,c={unversionedId:"components/kolibri",id:"components/kolibri",title:"KoliBri",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die KoliBri-Komponente.",source:"@site/docs/30-components/kolibri.mdx",sourceDirName:"30-components",slug:"/components/kolibri",permalink:"/docs/next/components/kolibri",draft:!1,tags:[{label:"KoliBri",permalink:"/docs/next/tags/koli-bri"},{label:"Beschreibung",permalink:"/docs/next/tags/beschreibung"},{label:"Spezifikation",permalink:"/docs/next/tags/spezifikation"},{label:"Beispiele",permalink:"/docs/next/tags/beispiele"}],version:"current",frontMatter:{title:"KoliBri",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die KoliBri-Komponente.",tags:["KoliBri","Beschreibung","Spezifikation","Beispiele"]},sidebar:"tutorialSidebar",previous:{title:"InputText",permalink:"/docs/next/components/input-text"},next:{title:"LinkButton",permalink:"/docs/next/components/link-button"}},s={},m=[{value:"Live-Editor",id:"live-editor",level:2}],u={toc:m},d="wrapper";function p(e){let{components:t,...a}=e;return(0,l.kt)(d,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"live-editor"},"Live-Editor"),(0,l.kt)(i._,{component:"kolibri",mdxType:"LiveEditorCompact"}))}p.isMDXComponent=!0}}]);