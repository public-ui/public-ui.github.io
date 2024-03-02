"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[16372],{40940:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>c,toc:()=>h});var i=t(2488),l=t(16592);function r(e){const n={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",hr:"hr",li:"li",mermaid:"mermaid",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.M)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)("kol-alert",{_type:"warning",children:["Die ",(0,i.jsx)(n.strong,{children:"Tooltip"}),"-Komponente wird innerhalb von KoliBri verwendet und ist nicht daf\xfcr vorgesehen in der Anwendungsentwicklung verwendet zu werden. Denn der Tooltip ist nur dann wirklich barrierefrei, wenn von einem Referenzelement auf das Tooltip verwiesen wird."]}),"\n",(0,i.jsxs)(n.p,{children:["Die ",(0,i.jsx)(n.strong,{children:"Tooltip"}),"-Komponente implementiert das Gegenst\xfcck zum ",(0,i.jsx)(n.code,{children:"Aria-Label"}),". Es ist also explizit nur daf\xfcr vorgesehen, dem/der Nutzer",":in"," ohne Screenreader die Beschriftung eines Elementes anzuzeigen."]}),"\n",(0,i.jsxs)(n.p,{children:["Ein ge\xf6ffneter Tooltip l\xe4sst sich mit der ",(0,i.jsx)(n.code,{children:"Escape"}),"-Taste schlie\xdfen, um ggf. \xfcberlagerte Seiteninformationen wieder sichtbar zu machen."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Hinweis:"})," Damit der Tooltip korrekt ausgerichtet wird, darf das Referenz-Element nicht ",(0,i.jsx)(n.code,{children:"display: inline"})," haben."]}),"\n",(0,i.jsx)(n.h2,{id:"barrierefreiheit",children:"Barrierefreiheit"}),"\n",(0,i.jsxs)(n.p,{children:["Die Tooltip-Komponente wird bei Fokus oder bei Bewegen der Maus \xfcber dem Referenzelement angezeigt und dient ausschlie\xdflich dem/der sehenden Nutzer",":in"," ohne Screenreader die Beschriftung (Aria-Label) lesen zu k\xf6nnen. Der Text des Tooltips ist selbst nicht mit der Tastatur erreichbar und zudem mittels Aria-Hidden f\xfcr die Screenreader versteckt."]}),"\n",(0,i.jsx)("kol-alert",{_type:"info",children:(0,i.jsx)(n.p,{children:"Aus Sicht des Barrierefreiheitstests k\xf6nnen Tooltips ignoriert werden, solange zudem von der Entwicklung sichergestellt wurde, dass der Tooltip-Text auch in gleicher Weise vom Screenreader vorgelesen wird."})}),"\n",(0,i.jsx)(n.h2,{id:"breite",children:"Breite"}),"\n",(0,i.jsxs)(n.p,{children:["Die Breite des Tooltips richtet sich normalerweise nach ihrem Inhalt.\nUm die Breite eines Tooltips zu konfigurieren, kann auf dem umgebenden Container eine ",(0,i.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties",children:"CSS-Custom-Property"})," wie folgt definiert werden:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-css",children:".container {\n  --kol-tooltip-width': '40rem';\n}\n"})}),"\n",(0,i.jsx)(n.h2,{id:"links-und-referenzen",children:"Links und Referenzen"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)("kol-link",{_href:"https://tollwerk.de/projekte/tipps-techniken-inklusiv-barrierefrei/titel-tooltips-toggletips",_label:"https://tollwerk.de/projekte/tipps-techniken-inklusiv-barrierefrei/titel-tooltips-toggletips",_target:"_blank"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Property"}),(0,i.jsx)(n.th,{children:"Attribute"}),(0,i.jsx)(n.th,{children:"Description"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{children:"Default"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"_align"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"_align"})}),(0,i.jsx)(n.td,{children:"Defines the alignment of the tooltip, popover or tabs in relation to the element."}),(0,i.jsxs)(n.td,{children:[(0,i.jsx)(n.code,{children:'"bottom"'})," | ",(0,i.jsx)(n.code,{children:'"left"'})," | ",(0,i.jsx)(n.code,{children:'"right"'})," | ",(0,i.jsx)(n.code,{children:'"top"'})," | ",(0,i.jsx)(n.code,{children:"undefined"})]}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"'top'"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"_id"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"_id"})}),(0,i.jsx)(n.td,{children:"Defines the internal ID of the primary component element."}),(0,i.jsxs)(n.td,{children:[(0,i.jsx)(n.code,{children:"string"})," | ",(0,i.jsx)(n.code,{children:"undefined"})]}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"undefined"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsxs)(n.td,{children:[(0,i.jsx)(n.code,{children:"_label"})," ",(0,i.jsx)(n.em,{children:"(required)"})]}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"_label"})}),(0,i.jsx)(n.td,{children:"Defines the visible or semantic label of the component (e.g. aria-label, label, headline, caption, summary, etc.)."}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"string"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"undefined"})})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"dependencies",children:"Dependencies"}),"\n",(0,i.jsx)(n.h3,{id:"used-by",children:"Used by"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"./abbr",children:"kol-abbr"})}),"\n",(0,i.jsx)(n.li,{children:"kol-button-wc"}),"\n",(0,i.jsx)(n.li,{children:"kol-input"}),"\n",(0,i.jsx)(n.li,{children:"kol-link-wc"}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"depends-on",children:"Depends on"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"kol-span-wc"}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"graph",children:"Graph"}),"\n",(0,i.jsx)(n.mermaid,{value:"graph TD;\n  kol-tooltip-wc --\x3e kol-span-wc\n  kol-span-wc --\x3e kol-icon\n  kol-abbr --\x3e kol-tooltip-wc\n  kol-button-wc --\x3e kol-tooltip-wc\n  kol-input --\x3e kol-tooltip-wc\n  kol-link-wc --\x3e kol-tooltip-wc\n  style kol-tooltip-wc fill:#f9f,stroke:#333,stroke-width:4px"}),"\n",(0,i.jsx)(n.hr,{})]})}function s(e={}){const{wrapper:n}={...(0,l.M)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(r,{...e})}):r(e)}t(37704),t(54592);const a={title:"Tooltip",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die Tooltip-Komponente.",tags:["Tooltip","Beschreibung","Spezifikation","Beispiele"]},o=void 0,c={id:"components/tooltip",title:"Tooltip",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die Tooltip-Komponente.",source:"@site/versioned_docs/version-1.7/30-components/tooltip.mdx",sourceDirName:"30-components",slug:"/components/tooltip",permalink:"/en/docs/1.7/components/tooltip",draft:!1,unlisted:!1,tags:[{label:"Tooltip",permalink:"/en/docs/1.7/tags/tooltip"},{label:"Beschreibung",permalink:"/en/docs/1.7/tags/beschreibung"},{label:"Spezifikation",permalink:"/en/docs/1.7/tags/spezifikation"},{label:"Beispiele",permalink:"/en/docs/1.7/tags/beispiele"}],version:"1.7",frontMatter:{title:"Tooltip",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die Tooltip-Komponente.",tags:["Tooltip","Beschreibung","Spezifikation","Beispiele"]},sidebar:"tutorialSidebar",previous:{title:"Toaster",permalink:"/en/docs/1.7/components/toaster"},next:{title:"Version",permalink:"/en/docs/1.7/components/version"}},d={},h=[];function u(e){return(0,i.jsx)(s,{})}function p(e={}){const{wrapper:n}={...(0,l.M)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(u,{...e})}):u()}},37704:(e,n,t)=>{t.d(n,{Q:()=>c});var i=t(57920),l=t(96651),r=t(2488);const s=function(e,n,t,i,l){return void 0===l&&(l="editor"),`${e}&module=${i}&initialpath=%23%2F${n}%2F${t}&view=${l}`},a={width:"100%",height:"500px",border:"0",overflow:"hidden"},o=e=>{let{url:n}=e;return(0,r.jsxs)("div",{className:"m-2",children:[(0,r.jsx)("iframe",{src:n,style:a,title:"kolibri-public-ui-code-samples",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}),(0,r.jsx)(i.GQ,{_href:n,_label:"",_target:"codesandbox",children:(0,r.jsx)("img",{alt:"CodeSandbox-Schalter",src:"https://codesandbox.io/static/img/play-codesandbox.svg"})})]})},c=e=>{let{component:n,sample:t}=e;const[c,d]=(0,l.useState)("Preview"),h="https://codesandbox.io/embed/kolibri-public-ui-react-samples-w5u37c?fontsize=14&hidenavigation=1&autoresize=1&theme=dark",u=`%2Fsrc%2Fsamples%2F${n}%2F${t}`,p={angular:`${u}.html`,react:`${u}.tsx`,vue:`${u}.vue`,webcomponent:`${u}.html`},m=`/sample-react/#/${n}/${t}?hideMenus`,b={onSelect:(e,n)=>{switch(n){case 1:d((()=>"Angular"));break;case 2:d((()=>"React"));break;case 3:d((()=>"Vue"));break;case 4:d((()=>"Web Component"));break;default:d((()=>"Preview"))}}};return(0,r.jsxs)(i._,{className:"w-full",_label:"Code-Beispiel",_on:b,_tabs:[{_label:"Vorschau"},{_disabled:!0,_label:"Angular"},{_label:"React"},{_disabled:!0,_label:"Vue"},{_disabled:!0,_label:"Web Component"}],children:[(0,r.jsx)("div",{children:"Preview"===c&&(0,r.jsx)("iframe",{src:m,style:a,title:"kolibri-public-ui-code-samples",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"})}),(0,r.jsx)("div",{children:"Angular"===c&&(0,r.jsx)(o,{url:s(h,n,t,p.angular)})}),(0,r.jsx)("div",{children:"React"===c&&(0,r.jsx)(o,{url:s(h,n,t,p.react)})}),(0,r.jsx)("div",{children:"Vue"===c&&(0,r.jsx)(o,{url:s(h,n,t,p.vue)})}),(0,r.jsx)("div",{children:"Web Component"===c&&(0,r.jsx)(o,{url:s(h,n,t,p.webcomponent)})})]})}},54592:(e,n,t)=>{t.d(n,{o:()=>k});var i=t(36016),l=t(57920),r=t(96651),s=t(99588),a=t(2488);function o(e){const{label:n,name:t,update:i,value:s}=e;return(0,r.useEffect)((()=>{s||i(t,"#000000")}),[]),(0,a.jsx)(l.eK,{_label:"",_on:{onChange:(e,n)=>i(t,n)},_value:s,children:(0,a.jsx)("span",{slot:"expert",children:n})})}function c(e){const{attribute:n,label:t,update:i}=e,[s,o]=(0,r.useState)(""),[c,d]=(0,r.useState)(""),[h,u]=(0,r.useState)(""),[p,m]=(0,r.useState)("");let b=!1,x=!1,f=!1,g=!1;n.type.includes("KoliBriAllIcon")?(b=!0,x=!0,f=!0,g=!0):(n.type.includes("KoliBriVerticalIcon")&&(f=!0,g=!0),n.type.includes("KoliBriHorizontalIcon")&&(b=!0,x=!0)),(0,r.useEffect)((()=>{if(!s||c||h||p){const e={};s&&(e.left=`codicon codicon-${s}`),c&&(e.right=`codicon codicon-${c}`),h&&(e.top=`codicon codicon-${h}`),p&&(e.bottom=`codicon codicon-${p}`),Object.keys(e).length&&i(n.name,JSON.stringify(e))}else i(n.name,`codicon codicon-${s}`)}),[s,c,h,p]);const j=["home","arrow-up","arrow-right","arrow-down","arrow-left"];return(0,a.jsxs)("div",{children:[t,b?(0,a.jsx)(l.Si,{_label:"Links",children:(0,a.jsx)("div",{className:"flex flex-wrap gap-2 p-2",children:j.map((e=>(0,a.jsx)(l.qC,{_icons:`codicon codicon-${e}`,_hideLabel:!0,_label:"",_on:{onClick:()=>o(e)}},e)))})}):"",x?(0,a.jsx)(l.Si,{_label:"Rechts",children:(0,a.jsx)("div",{className:"flex flex-wrap gap-2 p-2",children:j.map((e=>(0,a.jsx)(l.qC,{_icons:`codicon codicon-${e}`,_hideLabel:!0,_label:"",_on:{onClick:()=>d(e)}},e)))})}):"",f?(0,a.jsx)(l.Si,{_label:"Oben",children:(0,a.jsx)("div",{className:"flex flex-wrap gap-2 p-2",children:j.map((e=>(0,a.jsx)(l.qC,{_icons:`codicon codicon-${e}`,_hideLabel:!0,_label:"",_on:{onClick:()=>u(e)}},e)))})}):"",g?(0,a.jsx)(l.Si,{_label:"Unten",children:(0,a.jsx)("div",{className:"flex flex-wrap gap-2 p-2",children:j.map((e=>(0,a.jsx)(l.qC,{_icons:`codicon codicon-${e}`,_hideLabel:!0,_label:"",_on:{onClick:()=>m(e)}},e)))})}):""]})}function d(e){const{name:n,label:t,types:i,update:r,value:s}=e,o=[];function c(e){return{label:e,value:e}}return i.includes("undefined")?(o.push({label:"-",value:void 0}),o.push(...i.filter((e=>"undefined"!==e)).map(c))):o.push(...i.filter((e=>"undefined"!==e)).map(c)),(0,a.jsx)(l.qy,{className:"my-2",_label:"",_options:JSON.stringify(o),_on:{onChange:(e,t)=>r(n,t[0])},_value:s?[s]:void 0,children:(0,a.jsx)("span",{slot:"expert",children:t})})}function h(e){const{attribute:n,update:t,value:i}=e,s=(0,r.useMemo)((()=>{let e=n.type.replace(/\\?"/g,"").split(" | ");return e=e.filter((e=>"KoliBriAllIcon ignorieren"!==e)),1===e.length?e[0]:e.includes("string")?"string":e.includes("number")?"number":e.includes("boolean")?"boolean":""}),[n]),h=(0,r.useMemo)((()=>{const e=n.type.split(" | ").map((e=>e.replace(/\\?"/g,""))),r=(0,a.jsx)(l.s1,{_label:n.description,children:n.name});switch(n.name){case"_color":return(0,a.jsx)(o,{name:n.name,label:r,update:t,value:i});case"_icons":return(0,a.jsx)(c,{attribute:n,label:r,update:t,value:i});default:switch(s){case"string":return(0,a.jsx)(l.Uh,{className:"my-2",_label:"",_on:{onChange:(e,i)=>t(n.name,i)},_value:i||"",children:(0,a.jsx)("span",{slot:"expert",children:r})});case"number":return(0,a.jsx)(l.QL,{className:"my-2",_label:"",_on:{onChange:(e,i)=>t(n.name,i)},_value:i,children:(0,a.jsx)("span",{slot:"expert",children:r})});case"boolean":return(0,a.jsx)(l.Q7,{className:"my-2",_checked:!0===i,_label:"",_on:{onChange:(e,i)=>t(n.name,i)},_variant:"switch",_value:!0,children:(0,a.jsx)("span",{slot:"expert",children:r})});default:return e.length>1?(0,a.jsx)(d,{label:r,name:n.name,types:e,update:t,value:i}):(0,a.jsxs)("p",{children:["Attribut: '",n.name,"'",(0,a.jsx)("br",{}),"Typ: '",n.type,"'"]})}}}),[n,i]);return(0,a.jsx)(a.Fragment,{children:h})}var u=t(47184),p=t(28256),m=t(39452),b=t.n(m);function x(e){const{tag:n,params:t}=e,i=Object.entries(t).filter((e=>"defaultValues"!==e[0]));let l="";const s=(0,r.useMemo)((()=>{let e="";return i.filter((e=>e[0].startsWith("slot-"))).forEach((n=>{const t=n[1],i=n[0].split("-")[1];if(t)if(t.match(/^<.*?>/)?.length){const n=t.indexOf(">");e+=t.substring(0,n)+` slot="${i}"`+t.substring(n)}else e+=`<div slot="${i}">${t}</div>`})),e}),[t]),o=i.filter((e=>!e[0].startsWith("slot-"))).filter((e=>!t.defaultValues.includes(e[0])));for(const[r,a]of o)if(a){let e="";switch(typeof a){case"string":e=` ${r}="${a.replace(/"/g,"'")}"`;break;case"number":e=` ${r}="${a.toString()}"`;break;case"boolean":e=a?` ${r}`:"";break;case"object":e=` ${r}="${JSON.stringify(a)}"`;break;default:e="Never give up hope, one day everything will be fixed."}l+=e}const c=`<kol-${n}${l}>${s}</kol-${n}>`;let d;try{d=(0,p.format)(c,{plugins:[b()],printWidth:80}).replace(/;\n$/,"")}catch(h){d=`\x3c!-- Formatter-Error: Slot-Markup is not valid HTML for formatting. --\x3e\n${c}`}return(0,a.jsx)("div",{className:"h-48 rounded-md overflow-hidden",children:(0,a.jsx)(u.cp,{defaultLanguage:"html",height:"100%",options:{automaticLayout:!0,fontSize:16,lineNumbers:"off",readOnly:!0},value:d})})}function f(e){const n=Object.fromEntries(Object.entries(e.params).filter((e=>{let[n]=e;return!n.startsWith("slot-")}))),t=Object.entries(e.params).filter((e=>{let[n]=e;return n.startsWith("slot-")})),i={abbr:l.s1,accordion:l.IP,alert:l.mW,avatar:l.aq,badge:l.cX,breadcrumb:l.If,button:l.qC,"button-group":l.Os,"button-link":l.u_,card:l.Yh,details:l.Si,form:l.OO,heading:l.ch,icon:l.SA,image:l.iu,"indented-text":l.MV,"input-checkbox":l.Q7,"input-color":l.eK,"input-date":l.QZ,"input-email":l.kN,"input-file":l.Ex,"input-number":l.QL,"input-password":l.EH,"input-radio":l.wJ,"input-range":l.Ef,"input-text":l.Uh,kolibri:l.aY,link:l.GQ,"link-button":l._k,"link-group":l.O_,logo:l.ae,modal:l.cT,nav:l.Y4,pagination:l.kj,progress:l.O0,quote:l.SY,select:l.qy,"skip-nav":l.Ig,spin:l.kP,"split-button":l.a,symbol:l.OM,table:l.Y9,tabs:l._,textarea:l.DG,version:l.k1}[e.tag];return i?(0,a.jsx)(i,{...n,children:t.map((e=>(0,a.jsx)("div",{slot:e[0].replace("slot-","").replace("default",""),dangerouslySetInnerHTML:{__html:e[1]}},e[0])))}):(0,a.jsx)("div",{children:"Tag not implemented"})}function g(e){const{description:n,name:t,update:i,value:l}=e;return(0,a.jsxs)("div",{className:"bg-gray-100 my-2 rounded-lg p-2 border border-gray-300 border-solid",children:[(0,a.jsx)("b",{children:t||"default"}),": ",n,(0,a.jsx)("br",{}),(0,a.jsx)(u.GW,{defaultLanguage:"html",height:"5em",onChange:e=>i(`slot-${t}`,e||""),options:{automaticLayout:!0,fontSize:16,lineNumbers:"off"},value:l})]})}const j=["_smart-button","_icon-align"],_={abbr:{"slot-default":"Abbr"},accordion:{"slot-default":"Accordion content"},tabs:{_tabs:'[{"_label":"Tab 1"},{"_label":"Tab 2", "_on": {"onClose": true} },{"_label":"Tab 3"}]'},breadcrumb:{_links:"[{'_label':'Startseite','_href':'#/'},{'_label':'Unterseite der Startseite','_href':'#/unterseite'},{'_label':'Unterseite der Unterseite','_href':'#/unterseite/unterseite'}]"},form:{"_required-text":"Bitte alle Felder ausf\xfcllen."},image:{_src:"https://placehold.co/100x100/cc006e/white"},"link-group":{_links:"[{'_label':'Startseite','_href':'#/'},{'_label':'Unterseite der Startseite','_href':'#/unterseite'},{'_label':'Unterseite der Unterseite','_href':'#/unterseite/unterseite'}]"},nav:{_links:"[{'_label':'Startseite','_href':'#/'},{'_label':'Unterseite der Startseite','_href':'#/unterseite'},{'_label':'Unterseite der Unterseite','_href':'#/unterseite/unterseite'}]"},pagination:{_total:"100",_page:"6"},quote:{_quote:"Hello World"},select:{_options:"[{'label':'Herr','value':0},{'label':'Frau','value':1}]"},"skip-nav":{_links:"[{'_label':'Navigation','_href':'#nav'},{'_label':'Inhalt','_href':'#main'},{'_label':'Kontakt','_href':'#kontakt'},{'_label':'Links','_href':'#links'}]"},table:{_headers:'{"horizontal":[[{"label":"Montag","key":"montag"}]]}',_data:'[{"montag":"Zelle1"},{"montag":"Zelle2"}]',_pagination:'{"page":2}'}};function k(e){const[n,t]=(0,r.useState)(function(){const e={};return Object.values(i.Q).forEach((n=>{const t=n.name.replace("kol-","");e[t]={defaultValues:[]},n.attributes.forEach((n=>{void 0!==n.defaultValue&&(e[t][n.name]=n.defaultValue.replace(/'/g,""),e[t].defaultValues.push(n.name)),void 0!==_[t]?.[n.name]&&(e[t][n.name]=_[t][n.name])})),n.slots.forEach((n=>{const i=`slot-${n.name||"default"}`,l=_[t]?.[i];l&&(e[t][i]=l)}))})),e}()),[o,c]=(0,r.useState)("badge");(0,r.useEffect)((()=>{e.component&&c(e.component.replace("kol-",""))}),[e.component]),(0,r.useEffect)((()=>{!!i.Q.find((e=>e.name===`kol-${o}`))?.attributes.find((e=>"_label"===e.name))&&!n[o]?._label&&u("_label","Label-Text");!!i.Q.find((e=>e.name===`kol-${o}`))?.attributes.find((e=>"_heading"===e.name))&&!n[o]?._heading&&u("_heading","Heading-Text")}),[o]);const d=(0,r.useMemo)((()=>n[o]||{}),[n,o]);function u(e,n){t((t=>{const i={...t[o],[e]:n,defaultValues:t[o].defaultValues.filter((n=>n!==e))};return{...t,[o]:i}}))}const p=Object.values(i.Q).find((e=>e.name===`kol-${o}`));return(0,a.jsx)(s.c,{children:()=>(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(l.cX,{class:"mb-2",_label:"Beta",_color:"#b00"}),(0,a.jsxs)("div",{className:"grid lg:grid-cols-3 gap-2",children:[(0,a.jsxs)(l._,{className:"col-span-2",_label:"Wechselnavigation zwischen Viewer und Code",_tabs:[{_label:"Viewer"},{_label:"Code"}],children:[(0,a.jsx)("div",{className:"p-2",children:(0,a.jsx)(f,{tag:o,params:d})}),(0,a.jsx)("div",{className:"lg:col-span-2",children:(0,a.jsx)(x,{params:d,tag:o})})]}),(0,a.jsxs)("div",{className:"grid gap-4 p-2 border-0 border-l border-solid",children:[(0,a.jsx)(l.ch,{_level:3,_label:"Konfigurator"}),(0,a.jsxs)("div",{children:[(0,a.jsx)(l.ch,{_level:4,_label:"Properties"}),(0,a.jsxs)("div",{className:"max-h-96 p-2 overflow-auto mb-4",children:[p&&p.attributes.map((e=>(0,a.jsx)(a.Fragment,{children:!j.includes(e.name)&&!e.description.startsWith("Deprecated:")&&(0,a.jsx)(h,{attribute:e,update:u,value:d[e.name]},e.name)}))),p&&0===p.attributes.length&&(0,a.jsx)("span",{className:"text-gray-500",children:"Keine Properties vorhanden"})]}),(0,a.jsx)(l.ch,{_level:4,_label:"Slots"}),(0,a.jsxs)("div",{className:"max-h-56 p-2 overflow-auto",children:[p&&p.slots.map((e=>(0,a.jsx)(g,{description:e.description,name:e.name||"default",update:u,value:d["slot-"+(e.name||"default")]},e.name))),p&&0===p.slots.length&&(0,a.jsx)("span",{className:"text-gray-500",children:"Keine Slots vorhanden"})]})]})]})]})]})})}}}]);