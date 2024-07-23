"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[2640],{53356:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>p,frontMatter:()=>s,metadata:()=>o,toc:()=>d});var n=l(76776),a=l(108),i=(l(37704),l(54592));const s={title:"KoliBri",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die KoliBri-Komponente.",tags:["KoliBri","Beschreibung","Spezifikation","Beispiele"]},r=void 0,o={id:"components/kolibri",title:"KoliBri",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die KoliBri-Komponente.",source:"@site/versioned_docs/version-1.7/30-components/kolibri.mdx",sourceDirName:"30-components",slug:"/components/kolibri",permalink:"/en/docs/1.7/components/kolibri",draft:!1,unlisted:!1,tags:[{inline:!0,label:"KoliBri",permalink:"/en/docs/1.7/tags/koli-bri"},{inline:!0,label:"Beschreibung",permalink:"/en/docs/1.7/tags/beschreibung"},{inline:!0,label:"Spezifikation",permalink:"/en/docs/1.7/tags/spezifikation"},{inline:!0,label:"Beispiele",permalink:"/en/docs/1.7/tags/beispiele"}],version:"1.7",frontMatter:{title:"KoliBri",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die KoliBri-Komponente.",tags:["KoliBri","Beschreibung","Spezifikation","Beispiele"]},sidebar:"tutorialSidebar",previous:{title:"InputText",permalink:"/en/docs/1.7/components/input-text"},next:{title:"LinkButton",permalink:"/en/docs/1.7/components/link-button"}},c={},d=[{value:"Live-Editor",id:"live-editor",level:2}];function u(e){const t={h2:"h2",...(0,a.M)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"live-editor",children:"Live-Editor"}),"\n",(0,n.jsx)(i.o,{component:"kolibri"})]})}function p(e={}){const{wrapper:t}={...(0,a.M)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},37704:(e,t,l)=>{l.d(t,{Q:()=>c});var n=l(64992),a=l(80924),i=l(76776);const s=function(e,t,l,n,a){return void 0===a&&(a="editor"),`${e}&module=${n}&initialpath=%23%2F${t}%2F${l}&view=${a}`},r={width:"100%",height:"500px",border:"0",overflow:"hidden"},o=e=>{let{url:t}=e;return(0,i.jsxs)("div",{className:"m-2",children:[(0,i.jsx)("iframe",{src:t,style:r,title:"kolibri-public-ui-code-samples",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}),(0,i.jsx)(n.GQ,{_href:t,_label:"",_target:"codesandbox",children:(0,i.jsx)("img",{alt:"CodeSandbox-Schalter",src:"https://codesandbox.io/static/img/play-codesandbox.svg"})})]})},c=e=>{let{component:t,sample:l}=e;const[c,d]=(0,a.useState)("Preview"),u="https://codesandbox.io/embed/kolibri-public-ui-react-samples-w5u37c?fontsize=14&hidenavigation=1&autoresize=1&theme=dark",p=`%2Fsrc%2Fsamples%2F${t}%2F${l}`,b={angular:`${p}.html`,react:`${p}.tsx`,vue:`${p}.vue`,webcomponent:`${p}.html`},m=`/sample-react/#/${t}/${l}?hideMenus`,h={onSelect:(e,t)=>{switch(t){case 1:d((()=>"Angular"));break;case 2:d((()=>"React"));break;case 3:d((()=>"Vue"));break;case 4:d((()=>"Web Component"));break;default:d((()=>"Preview"))}}};return(0,i.jsxs)(n._,{className:"w-full",_label:"Code-Beispiel",_on:h,_tabs:[{_label:"Vorschau"},{_disabled:!0,_label:"Angular"},{_label:"React"},{_disabled:!0,_label:"Vue"},{_disabled:!0,_label:"Web Component"}],children:[(0,i.jsx)("div",{children:"Preview"===c&&(0,i.jsx)("iframe",{src:m,style:r,title:"kolibri-public-ui-code-samples",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"})}),(0,i.jsx)("div",{children:"Angular"===c&&(0,i.jsx)(o,{url:s(u,t,l,b.angular)})}),(0,i.jsx)("div",{children:"React"===c&&(0,i.jsx)(o,{url:s(u,t,l,b.react)})}),(0,i.jsx)("div",{children:"Vue"===c&&(0,i.jsx)(o,{url:s(u,t,l,b.vue)})}),(0,i.jsx)("div",{children:"Web Component"===c&&(0,i.jsx)(o,{url:s(u,t,l,b.webcomponent)})})]})}},54592:(e,t,l)=>{l.d(t,{o:()=>j});var n=l(592),a=l(64992),i=l(80924),s=l(73700),r=l(76776);function o(e){const{label:t,name:l,update:n,value:s}=e;return(0,i.useEffect)((()=>{s||n(l,"#000000")}),[]),(0,r.jsx)(a.eK,{_label:"",_on:{onInput:(e,t)=>n(l,t)},_value:s,children:(0,r.jsx)("span",{slot:"expert",children:t})})}function c(e){const{attribute:t,label:l,update:n}=e,[s,o]=(0,i.useState)(""),[c,d]=(0,i.useState)(""),[u,p]=(0,i.useState)(""),[b,m]=(0,i.useState)("");let h=!1,f=!1,_=!1,g=!1;t.type.includes("KoliBriAllIcon")?(h=!0,f=!0,_=!0,g=!0):(t.type.includes("KoliBriVerticalIcon")&&(_=!0,g=!0),t.type.includes("KoliBriHorizontalIcon")&&(h=!0,f=!0)),(0,i.useEffect)((()=>{if(!s||c||u||b){const e={};s&&(e.left=`codicon codicon-${s}`),c&&(e.right=`codicon codicon-${c}`),u&&(e.top=`codicon codicon-${u}`),b&&(e.bottom=`codicon codicon-${b}`),Object.keys(e).length&&n(t.name,JSON.stringify(e))}else n(t.name,`codicon codicon-${s}`)}),[s,c,u,b]);const x=["home","arrow-up","arrow-right","arrow-down","arrow-left"];return(0,r.jsxs)("div",{children:[l,h?(0,r.jsx)(a.Si,{_label:"Links",children:(0,r.jsx)("div",{className:"flex flex-wrap gap-2 p-2",children:x.map((e=>(0,r.jsx)(a.qC,{_icons:`codicon codicon-${e}`,_hideLabel:!0,_label:"",_on:{onClick:()=>o(e)}},e)))})}):"",f?(0,r.jsx)(a.Si,{_label:"Rechts",children:(0,r.jsx)("div",{className:"flex flex-wrap gap-2 p-2",children:x.map((e=>(0,r.jsx)(a.qC,{_icons:`codicon codicon-${e}`,_hideLabel:!0,_label:"",_on:{onClick:()=>d(e)}},e)))})}):"",_?(0,r.jsx)(a.Si,{_label:"Oben",children:(0,r.jsx)("div",{className:"flex flex-wrap gap-2 p-2",children:x.map((e=>(0,r.jsx)(a.qC,{_icons:`codicon codicon-${e}`,_hideLabel:!0,_label:"",_on:{onClick:()=>p(e)}},e)))})}):"",g?(0,r.jsx)(a.Si,{_label:"Unten",children:(0,r.jsx)("div",{className:"flex flex-wrap gap-2 p-2",children:x.map((e=>(0,r.jsx)(a.qC,{_icons:`codicon codicon-${e}`,_hideLabel:!0,_label:"",_on:{onClick:()=>m(e)}},e)))})}):""]})}function d(e){const{name:t,label:l,types:n,update:i,value:s}=e,o=[];function c(e){return{label:e,value:e}}return n.includes("undefined")?(o.push({label:"-",value:void 0}),o.push(...n.filter((e=>"undefined"!==e)).map(c))):o.push(...n.filter((e=>"undefined"!==e)).map(c)),(0,r.jsx)(a.qy,{className:"my-2",_label:"",_options:JSON.stringify(o),_on:{onInput:(e,l)=>i(t,l[0])},_value:s?[s]:void 0,children:(0,r.jsx)("span",{slot:"expert",children:l})})}function u(e){const{attribute:t,update:l,value:n}=e,s=(0,i.useMemo)((()=>{let e=t.type.replace(/\\?"/g,"").split(" | ");return e=e.filter((e=>"KoliBriAllIcon ignorieren"!==e)),1===e.length?e[0]:e.includes("string")?"string":e.includes("number")?"number":e.includes("boolean")?"boolean":""}),[t]),u=(0,i.useMemo)((()=>{const e=t.type.split(" | ").map((e=>e.replace(/\\?"/g,""))),i=(0,r.jsx)(a.s1,{_label:t.description,children:t.name});switch(t.name){case"_color":return(0,r.jsx)(o,{name:t.name,label:i,update:l,value:n});case"_icons":return(0,r.jsx)(c,{attribute:t,label:i,update:l,value:n});default:switch(s){case"string":return(0,r.jsx)(a.Uh,{className:"my-2",_label:"",_on:{onInput:(e,n)=>l(t.name,n)},_value:n||"",children:(0,r.jsx)("span",{slot:"expert",children:i})});case"number":return(0,r.jsx)(a.QL,{className:"my-2",_label:"",_on:{onInput:(e,n)=>l(t.name,n)},_value:n,children:(0,r.jsx)("span",{slot:"expert",children:i})});case"boolean":return(0,r.jsx)(a.Q7,{className:"my-2",_checked:!0===n,_label:"",_on:{onInput:(e,n)=>l(t.name,n)},_variant:"switch",_value:!0,children:(0,r.jsx)("span",{slot:"expert",children:i})});default:return e.length>1?(0,r.jsx)(d,{label:i,name:t.name,types:e,update:l,value:n}):(0,r.jsxs)("p",{children:["Attribut: '",t.name,"'",(0,r.jsx)("br",{}),"Typ: '",t.type,"'"]})}}}),[t,n]);return(0,r.jsx)(r.Fragment,{children:u})}var p=l(63136),b=l(28256),m=l(39452),h=l.n(m);function f(e){const{tag:t,params:l}=e,n=Object.entries(l).filter((e=>"defaultValues"!==e[0]));let a="";const s=(0,i.useMemo)((()=>{let e="";return n.filter((e=>e[0].startsWith("slot-"))).forEach((t=>{const l=t[1],n=t[0].split("-")[1];if(l)if(l.match(/^<.*?>/)?.length){const t=l.indexOf(">");e+=l.substring(0,t)+` slot="${n}"`+l.substring(t)}else e+=`<div slot="${n}">${l}</div>`})),e}),[l]),o=n.filter((e=>!e[0].startsWith("slot-"))).filter((e=>!l.defaultValues.includes(e[0])));for(const[i,r]of o)if(r){let e="";switch(typeof r){case"string":e=` ${i}="${r.replace(/"/g,"'")}"`;break;case"number":e=` ${i}="${r.toString()}"`;break;case"boolean":e=r?` ${i}`:"";break;case"object":e=` ${i}="${JSON.stringify(r)}"`;break;default:e="Never give up hope, one day everything will be fixed."}a+=e}const c=`<kol-${t}${a}>${s}</kol-${t}>`;let d;try{d=(0,b.format)(c,{plugins:[h()],printWidth:80}).replace(/;\n$/,"")}catch(u){d=`\x3c!-- Formatter-Error: Slot-Markup is not valid HTML for formatting. --\x3e\n${c}`}return(0,r.jsx)("div",{className:"h-48 rounded-md overflow-hidden",children:(0,r.jsx)(p.cp,{defaultLanguage:"html",height:"100%",options:{automaticLayout:!0,fontSize:16,lineNumbers:"off",readOnly:!0},value:d})})}function _(e){const t=Object.fromEntries(Object.entries(e.params).filter((e=>{let[t]=e;return!t.startsWith("slot-")}))),l=Object.entries(e.params).filter((e=>{let[t]=e;return t.startsWith("slot-")})),n={abbr:a.s1,accordion:a.IP,alert:a.mW,avatar:a.aq,badge:a.cX,breadcrumb:a.If,button:a.qC,"button-group":a.Os,"button-link":a.u_,card:a.Yh,details:a.Si,form:a.OO,heading:a.ch,icon:a.SA,image:a.iu,"indented-text":a.MV,"input-checkbox":a.Q7,"input-color":a.eK,"input-date":a.QZ,"input-email":a.kN,"input-file":a.Ex,"input-number":a.QL,"input-password":a.EH,"input-radio":a.wJ,"input-range":a.Ef,"input-text":a.Uh,kolibri:a.aY,link:a.GQ,"link-button":a._k,"link-group":a.O_,logo:a.ae,modal:a.cT,nav:a.Y4,pagination:a.kj,progress:a.O0,quote:a.SY,select:a.qy,"skip-nav":a.Ig,spin:a.kP,"split-button":a.a,symbol:a.OM,table:a.Y9,tabs:a._,textarea:a.DG,version:a.k1}[e.tag];return n?(0,r.jsx)(n,{...t,children:l.map((e=>(0,r.jsx)("div",{slot:e[0].replace("slot-","").replace("default",""),dangerouslySetInnerHTML:{__html:e[1]}},e[0])))}):(0,r.jsx)("div",{children:"Tag not implemented"})}function g(e){const{description:t,name:l,update:n,value:a}=e;return(0,r.jsxs)("div",{className:"bg-gray-100 my-2 rounded-lg p-2 border border-gray-300 border-solid",children:[(0,r.jsx)("b",{children:l||"default"}),": ",t,(0,r.jsx)("br",{}),(0,r.jsx)(p.GW,{defaultLanguage:"html",height:"5em",onChange:e=>n(`slot-${l}`,e||""),options:{automaticLayout:!0,fontSize:16,lineNumbers:"off"},value:a})]})}const x=["_smart-button","_icon-align"],v={abbr:{"slot-default":"Abbr"},accordion:{"slot-default":"Accordion content"},tabs:{_tabs:'[{"_label":"Tab 1"},{"_label":"Tab 2", "_on": {"onClose": true} },{"_label":"Tab 3"}]'},breadcrumb:{_links:"[{'_label':'Startseite','_href':'#/'},{'_label':'Unterseite der Startseite','_href':'#/unterseite'},{'_label':'Unterseite der Unterseite','_href':'#/unterseite/unterseite'}]"},form:{"_required-text":"Bitte alle Felder ausf\xfcllen."},image:{_src:"https://placehold.co/100x100/cc006e/white"},"link-group":{_links:"[{'_label':'Startseite','_href':'#/'},{'_label':'Unterseite der Startseite','_href':'#/unterseite'},{'_label':'Unterseite der Unterseite','_href':'#/unterseite/unterseite'}]"},nav:{_links:"[{'_label':'Startseite','_href':'#/'},{'_label':'Unterseite der Startseite','_href':'#/unterseite'},{'_label':'Unterseite der Unterseite','_href':'#/unterseite/unterseite'}]"},pagination:{_total:"100",_page:"6"},quote:{_quote:"Hello World"},select:{_options:"[{'label':'Herr','value':0},{'label':'Frau','value':1}]"},"skip-nav":{_links:"[{'_label':'Navigation','_href':'#nav'},{'_label':'Inhalt','_href':'#main'},{'_label':'Kontakt','_href':'#kontakt'},{'_label':'Links','_href':'#links'}]"},table:{_headers:'{"horizontal":[[{"label":"Montag","key":"montag"}]]}',_data:'[{"montag":"Zelle1"},{"montag":"Zelle2"}]',_pagination:'{"page":2}'}};function j(e){const[t,l]=(0,i.useState)(function(){const e={};return Object.values(n.Q).forEach((t=>{const l=t.name.replace("kol-","");e[l]={defaultValues:[]},t.attributes.forEach((t=>{void 0!==t.defaultValue&&(e[l][t.name]=t.defaultValue.replace(/'/g,""),e[l].defaultValues.push(t.name)),void 0!==v[l]?.[t.name]&&(e[l][t.name]=v[l][t.name])})),t.slots.forEach((t=>{const n=`slot-${t.name||"default"}`,a=v[l]?.[n];a&&(e[l][n]=a)}))})),e}()),[o,c]=(0,i.useState)("badge");(0,i.useEffect)((()=>{e.component&&c(e.component.replace("kol-",""))}),[e.component]),(0,i.useEffect)((()=>{!!n.Q.find((e=>e.name===`kol-${o}`))?.attributes.find((e=>"_label"===e.name))&&!t[o]?._label&&p("_label","Label-Text");!!n.Q.find((e=>e.name===`kol-${o}`))?.attributes.find((e=>"_heading"===e.name))&&!t[o]?._heading&&p("_heading","Heading-Text")}),[o]);const d=(0,i.useMemo)((()=>t[o]||{}),[t,o]);function p(e,t){l((l=>{const n={...l[o],[e]:t,defaultValues:l[o].defaultValues.filter((t=>t!==e))};return{...l,[o]:n}}))}const b=Object.values(n.Q).find((e=>e.name===`kol-${o}`));return(0,r.jsx)(s.c,{children:()=>(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.cX,{class:"mb-2",_label:"Beta",_color:"#b00"}),(0,r.jsxs)("div",{className:"grid lg:grid-cols-3 gap-2",children:[(0,r.jsxs)(a._,{className:"col-span-2",_label:"Wechselnavigation zwischen Viewer und Code",_tabs:[{_label:"Viewer"},{_label:"Code"}],children:[(0,r.jsx)("div",{className:"p-2",children:(0,r.jsx)(_,{tag:o,params:d})}),(0,r.jsx)("div",{className:"lg:col-span-2",children:(0,r.jsx)(f,{params:d,tag:o})})]}),(0,r.jsxs)("div",{className:"grid gap-4 p-2 border-0 border-l border-solid",children:[(0,r.jsx)(a.ch,{_level:3,_label:"Konfigurator"}),(0,r.jsxs)("div",{children:[(0,r.jsx)(a.ch,{_level:4,_label:"Properties"}),(0,r.jsxs)("div",{className:"max-h-96 p-2 overflow-auto mb-4",children:[b&&b.attributes.map((e=>(0,r.jsx)(r.Fragment,{children:!x.includes(e.name)&&!e.description.startsWith("Deprecated:")&&(0,r.jsx)(u,{attribute:e,update:p,value:d[e.name]},e.name)}))),b&&0===b.attributes.length&&(0,r.jsx)("span",{className:"text-gray-500",children:"Keine Properties vorhanden"})]}),(0,r.jsx)(a.ch,{_level:4,_label:"Slots"}),(0,r.jsxs)("div",{className:"max-h-56 p-2 overflow-auto",children:[b&&b.slots.map((e=>(0,r.jsx)(g,{description:e.description,name:e.name||"default",update:p,value:d["slot-"+(e.name||"default")]},e.name))),b&&0===b.slots.length&&(0,r.jsx)("span",{className:"text-gray-500",children:"Keine Slots vorhanden"})]})]})]})]})]})})}}}]);