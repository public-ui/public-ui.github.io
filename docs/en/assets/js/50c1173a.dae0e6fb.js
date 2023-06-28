"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[1339],{46741:(e,t,a)=>{a.d(t,{_:()=>c});var n=a(17520),l=a(50959);const o=function(e,t,a,n,l){return void 0===l&&(l="editor"),`${e}&module=${n}&initialpath=%23%2F${t}%2F${a}&view=${l}`},i={width:"100%",height:"500px",border:"0",overflow:"hidden"},r=e=>{let{url:t}=e;return l.createElement("div",{className:"m-2"},l.createElement("iframe",{src:t,style:i,title:"kolibri-public-ui-code-samples",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}),l.createElement(n.Nv,{_href:t,_label:"",_target:"codesandbox"},l.createElement("img",{alt:"CodeSandbox-Schalter",src:"https://codesandbox.io/static/img/play-codesandbox.svg"})))},c=e=>{let{component:t,sample:a}=e;const[c,s]=(0,l.useState)("Preview"),m="https://codesandbox.io/embed/kolibri-public-ui-react-samples-w5u37c?fontsize=14&hidenavigation=1&autoresize=1&theme=dark",u=`%2Fsrc%2Fsamples%2F${t}%2F${a}`,d={angular:`${u}.html`,react:`${u}.tsx`,vue:`${u}.vue`,webcomponent:`${u}.html`},p=`/sample-react/#/${t}/${a}`,b={onSelect:(e,t)=>{switch(t){case 1:s((()=>"Angular"));break;case 2:s((()=>"React"));break;case 3:s((()=>"Vue"));break;case 4:s((()=>"Web Component"));break;default:s((()=>"Preview"))}}};return l.createElement(n.UD,{className:"w-full",_ariaLabel:"Code-Beispiel",_on:b,_tabs:[{_label:"Vorschau"},{_disabled:!0,_label:"Angular"},{_label:"React"},{_disabled:!0,_label:"Vue"},{_disabled:!0,_label:"Web Component"}]},l.createElement("div",null,"Preview"===c&&l.createElement("iframe",{src:p,style:i,title:"kolibri-public-ui-code-samples",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"})),l.createElement("div",null,"Angular"===c&&l.createElement(r,{url:o(m,t,a,d.angular)})),l.createElement("div",null,"React"===c&&l.createElement(r,{url:o(m,t,a,d.react)})),l.createElement("div",null,"Vue"===c&&l.createElement(r,{url:o(m,t,a,d.vue)})),l.createElement("div",null,"Web Component"===c&&l.createElement(r,{url:o(m,t,a,d.webcomponent)})))}},16072:(e,t,a)=>{a.d(t,{_:()=>E});var n=a(23438),l=a(17520),o=a(50959),i=a(84886);function r(e){const{attribute:t,label:a,update:n,value:i}=e,[r,c]=(0,o.useState)(""),[s,m]=(0,o.useState)(""),[u,d]=(0,o.useState)(""),[p,b]=(0,o.useState)("");let f=!1,g=!1,h=!1,v=!1;t.type.includes("KoliBriAllIcon")?(f=!0,g=!0,h=!0,v=!0):(t.type.includes("KoliBriVerticalIcon")&&(h=!0,v=!0),t.type.includes("KoliBriHorizontalIcon")&&(f=!0,g=!0)),(0,o.useEffect)((()=>{if(!r||s||u||p){const e={};r&&(e.left=`codicon codicon-${r}`),s&&(e.right=`codicon codicon-${s}`),u&&(e.top=`codicon codicon-${u}`),p&&(e.bottom=`codicon codicon-${p}`),Object.keys(e).length&&n(t.name,JSON.stringify(e))}else n(t.name,`codicon codicon-${r}`)}),[r,s,u,p]);const E=["home","arrow-up","arrow-right","arrow-down","arrow-left"];return o.createElement("div",null,a,f?o.createElement(l.ox,{_summary:"Links"},o.createElement("div",{className:"flex flex-wrap"},E.map((e=>o.createElement(l.ic,{key:e,_icon:`codicon codicon-${e}`,_hideLabel:!0,_label:"",_on:{onClick:t=>c(e)}}))))):"",g?o.createElement(l.ox,{_summary:"Rechts"},o.createElement("div",{className:"flex flex-wrap"},E.map((e=>o.createElement(l.ic,{key:e,_icon:`codicon codicon-${e}`,_hideLabel:!0,_label:"",_on:{onClick:t=>m(e)}}))))):"",h?o.createElement(l.ox,{_summary:"Oben"},o.createElement("div",{className:"flex flex-wrap"},E.map((e=>o.createElement(l.ic,{key:e,_icon:`codicon codicon-${e}`,_hideLabel:!0,_label:"",_on:{onClick:t=>d(e)}}))))):"",v?o.createElement(l.ox,{_summary:"Unten"},o.createElement("div",{className:"flex flex-wrap"},E.map((e=>o.createElement(l.ic,{key:e,_icon:`codicon codicon-${e}`,_hideLabel:!0,_label:"",_on:{onClick:t=>b(e)}}))))):"")}function c(e){const{label:t,name:a,update:n,value:i}=e;return(0,o.useEffect)((()=>{i||n(a,"#000000")}),[]),o.createElement(l.Np,{_on:{onChange:(e,t)=>n(a,t)},_value:i},t)}function s(e){const{name:t,label:a,types:n,update:i,value:r}=e,c=[];function s(e){return{label:e,value:e}}return n.includes("undefined")?(c.push({label:"-",value:void 0}),c.push(...n.filter((e=>"undefined"!==e)).map(s))):c.push(...n.filter((e=>"undefined"!==e)).map(s)),o.createElement(l.r7,{className:"my-2",_list:JSON.stringify(c),_on:{onChange:(e,a)=>i(t,a[0])},_value:r},a)}function m(e){const{attribute:t,update:a,value:n}=e,i=(0,o.useMemo)((()=>{let e=t.type.replace(/\\?"/g,"").split(" | ");return e=e.filter((e=>"KoliBriAllIcon ignorieren"!==e)),1===e.length?e[0]:e.includes("string")?"string":e.includes("number")?"number":e.includes("boolean")?"boolean":""}),[t]),m=(0,o.useMemo)((()=>{const e=t.type.split(" | ").map((e=>e.replace(/\\?"/g,""))),m=o.createElement(l.T5,{_title:t.description},t.name);switch(t.name){case"_color":return o.createElement(c,{name:t.name,label:m,update:a,value:n});case"_icon":return o.createElement(r,{attribute:t,label:m,update:a,value:n});default:switch(i){case"string":return o.createElement(l.WD,{className:"my-2",_on:{onChange:(e,n)=>a(t.name,n)},_value:n||""},m);case"number":return o.createElement(l.c2,{className:"my-2",_on:{onChange:(e,n)=>a(t.name,n)},_value:n},m);case"boolean":return o.createElement(l.TE,{className:"my-2",_checked:n,_on:{onChange:(e,n)=>a(t.name,n)},_variant:"switch"},m);default:return e.length>1?o.createElement(s,{label:m,name:t.name,types:e,update:a,value:n}):o.createElement("p",null,"Attribut: '",t.name,"'",o.createElement("br",null),"Typ: '",t.type,"'")}}}),[t,n]);return o.createElement(o.Fragment,null,m)}var u=a(45413),d=a(77192),p=a(85630),b=a.n(p);function f(e){const{tag:t,params:a}=e,n=Object.entries(a).filter((e=>"defaultValues"!==e[0]));let l="";const i=(0,o.useMemo)((()=>{let e="";return n.filter((e=>e[0].startsWith("slot-"))).forEach((t=>{const a=t[1],n=t[0].split("-")[1];if(a)if(a.match(/^<.*?>/)?.length){const t=a.indexOf(">");e+=a.substring(0,t)+` slot="${n}"`+a.substring(t)}else e+=`<div slot="${n}">${a}</div>`})),e}),[a]),r=n.filter((e=>!e[0].startsWith("slot-"))).filter((e=>!a.defaultValues.includes(e[0])));for(const[o,u]of r)if(u){let e="";switch(typeof u){case"string":e=` ${o}="${u.replace(/"/g,"'")}"`;break;case"number":e=` ${o}="${u.toString()}"`;break;case"boolean":e=u?` ${o}`:"";break;case"object":e=` ${o}="${JSON.stringify(u)}"`;break;default:e="Never give up hope, one day everything will be fixed."}l+=e}const c=`<kol-${t}${l}>${i}</kol-${t}>`;let s;try{s=(0,d.format)(c,{plugins:[b()],printWidth:80}).replace(/;\n$/,"")}catch(m){s=`\x3c!-- Formatter-Error: Slot-Markup is not valid HTML for formatting. --\x3e\n${c}`}return o.createElement("div",{className:"h-48 rounded-md overflow-hidden"},o.createElement(u.ZP,{defaultLanguage:"html",height:"100%",options:{automaticLayout:!0,fontSize:16,lineNumbers:"off",readOnly:!0},value:s}))}function g(e){const t={};Object.entries(e.params).filter((e=>!e[0].startsWith("slot-"))).forEach((e=>{t[e[0]]=e[1]}));const a=Object.entries(e.params).filter((e=>e[0].startsWith("slot-"))),n={abbr:l.T5,accordion:l.RZ,alert:l.K5,badge:l.Er,breadcrumb:l.lo,button:l.ic,"button-group":l.uz,"button-link":l.f6,card:l.Gc,details:l.ox,form:l.m5,heading:l.HA,icon:l.Jl,image:l.Cd,"indented-text":l.CV,"input-checkbox":l.TE,"input-color":l.Np,"input-date":l.O,"input-email":l.Lj,"input-file":l.CX,"input-number":l.c2,"input-password":l.z5,"input-radio":l.sy,"input-range":l.TQ,"input-text":l.WD,kolibri:l.Vs,link:l.Nv,"link-button":l.Kc,"link-group":l.$o,logo:l.QK,modal:l.Ud,nav:l.MA,pagination:l.Q4,popover:l.hV,progress:l.WR,quote:l.VZ,select:l.r7,"skip-nav":l.P,spin:l.qq,symbol:l.is,table:l.Vp,tabs:l.UD,textarea:l.Qs,toast:l.CO,tooltip:l.Ze,version:l.u_}[e.tag];return n?o.createElement(n,t,a.map((e=>o.createElement("div",{key:e[0],slot:e[0].replace("slot-",""),dangerouslySetInnerHTML:{__html:e[1]}})))):o.createElement("div",null,"Tag not implemented")}function h(e){const{description:t,name:a,update:n,value:l}=e;return o.createElement("div",{className:"bg-gray-100 my-2 rounded-lg p-2 border border-gray-300 border-solid"},o.createElement("b",null,a||"default"),": ",t,o.createElement("br",null),o.createElement(u.ML,{defaultLanguage:"html",height:"5em",onChange:e=>n(`slot-${a}`,e||""),options:{automaticLayout:!0,fontSize:16,lineNumbers:"off"},value:l}))}const v=["_smart-button","_icon-align"];function E(e){const[t,a]=(0,o.useState)(function(){const e={};return Object.values(n.p).forEach((t=>{const a=t.name.replace("kol-","");e[a]={defaultValues:[]},t.attributes.forEach((t=>{t.defaultValue&&(e[a][t.name]=t.defaultValue.replaceAll("'",""),e[a].defaultValues.push(t.name))}))})),e}()),[r,c]=(0,o.useState)("badge");(0,o.useEffect)((()=>{e.component&&c(e.component.replace("kol-",""))}),[e.component]),(0,o.useEffect)((()=>{!!n.p.find((e=>e.name===`kol-${r}`))?.attributes.find((e=>"_label"===e.name))&&!t[r]?._label&&u("_label","Label-Text");!!n.p.find((e=>e.name===`kol-${r}`))?.attributes.find((e=>"_heading"===e.name))&&!t[r]?._heading&&u("_heading","Heading-Text")}),[r]);const s=(0,o.useMemo)((()=>t[r]||{}),[t,r]);function u(e,t){a((a=>{const n={...a[r],[e]:t,defaultValues:a[r].defaultValues.filter((t=>t!==e))};return{...a,[r]:n}}))}const d=Object.values(n.p).find((e=>e.name===`kol-${r}`));return o.createElement(i.Z,null,(()=>o.createElement(o.Fragment,null,o.createElement(l.Er,{class:"mb-2",_label:"Beta",_color:"#b00"}),o.createElement("div",{className:"grid lg:grid-cols-3 gap-2"},o.createElement(l.UD,{className:"col-span-2",_ariaLabel:"Wechselnavigation zwischen Viewer und Code",_tabs:[{_label:"Viewer"},{_label:"Code"}]},o.createElement("div",{className:"p-2"},o.createElement(g,{tag:r,params:s})),o.createElement("div",{className:"lg:col-span-2"},o.createElement(f,{params:s,tag:r}))),o.createElement("div",{className:"grid gap-4 p-2 border-0 border-l border-solid"},o.createElement(l.HA,{_level:3,_label:"Konfigurator"}),o.createElement("div",null,o.createElement(l.HA,{_level:4,_label:"Properties"}),o.createElement("div",{className:"max-h-96 p-2 overflow-scroll mb-4"},d&&d.attributes.map((e=>o.createElement(o.Fragment,null,!v.includes(e.name)&&o.createElement(m,{key:e.name,attribute:e,update:u,value:s[e.name]})))),d&&0===d.slots.length&&o.createElement("span",{className:"text-gray-500"},"Keine Properties vorhanden")),o.createElement(l.HA,{_level:4,_label:"Slots"}),o.createElement("div",{className:"max-h-56 p-2 overflow-scroll"},d&&d.slots.map((e=>o.createElement(h,{key:e.name,description:e.description,name:e.name,update:u,value:s["slot-"+e.name]}))),d&&0===d.slots.length&&o.createElement("span",{className:"text-gray-500"},"Keine Slots vorhanden"))))))))}},44297:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>m});var n=a(15882),l=(a(50959),a(17942)),o=(a(46741),a(16072));const i={title:"KoliBri",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die KoliBri-Komponente.",tags:["KoliBri","Beschreibung","Spezifikation","Beispiele"]},r=void 0,c={unversionedId:"components/kolibri",id:"components/kolibri",title:"KoliBri",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die KoliBri-Komponente.",source:"@site/docs/30-components/kolibri.mdx",sourceDirName:"30-components",slug:"/components/kolibri",permalink:"/en/docs/components/kolibri",draft:!1,tags:[{label:"KoliBri",permalink:"/en/docs/tags/koli-bri"},{label:"Beschreibung",permalink:"/en/docs/tags/beschreibung"},{label:"Spezifikation",permalink:"/en/docs/tags/spezifikation"},{label:"Beispiele",permalink:"/en/docs/tags/beispiele"}],version:"current",frontMatter:{title:"KoliBri",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die KoliBri-Komponente.",tags:["KoliBri","Beschreibung","Spezifikation","Beispiele"]},sidebar:"tutorialSidebar",previous:{title:"InputText",permalink:"/en/docs/components/input-text"},next:{title:"LinkButton",permalink:"/en/docs/components/link-button"}},s={},m=[{value:"Live-Editor",id:"live-editor",level:2}],u={toc:m},d="wrapper";function p(e){let{components:t,...a}=e;return(0,l.kt)(d,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"live-editor"},"Live-Editor"),(0,l.kt)(o._,{component:"kolibri",mdxType:"LiveEditorCompact"}))}p.isMDXComponent=!0}}]);