"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[62744],{53120:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>u,contentTitle:()=>d,default:()=>m,frontMatter:()=>c,metadata:()=>h,toc:()=>p});var t=i(76776),l=i(108);function s(e){const n={code:"code",em:"em",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.M)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["Mit Hilfe der ",(0,t.jsx)(n.strong,{children:"Icon"}),"-Komponente k\xf6nnen Icons aus eingebundenen Icon-Fonts an beliebigen Positionen dargestellt werden. Die Ausgabe des Icon kann \xfcber das Attribut ",(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"_icon"})})," gesteuert werden und erfolgt durch das Attribut ",(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"_label"})})," barrierefrei. Die Ausgabe erfolgt standardm\xe4\xdfig als ",(0,t.jsx)(n.em,{children:(0,t.jsx)(n.code,{children:"inline"})}),"-Element."]}),"\n",(0,t.jsxs)(n.p,{children:["Aktuell werden die Icons von ",(0,t.jsx)("kol-link",{_href:"https://microsoft.github.io/vscode-codicons/dist/codicon.html",_target:"_blank",_label:"Codicons"})," unterst\xfctzt."]}),"\n",(0,t.jsxs)("kol-alert",{_heading:"Hinweis",_type:"info",children:["Es ist wichtig, dass in der Rahmenseite (",(0,t.jsx)(n.code,{children:"index.html"}),") die CSS-Dateie(n) der Icon-Font(s) eingebunden ist/sind."]}),"\n",(0,t.jsx)(n.h2,{id:"konstruktion",children:"Konstruktion"}),"\n",(0,t.jsxs)(n.p,{children:["Die Komponente ",(0,t.jsx)(n.strong,{children:"Icon"})," wird \xfcber das HTML-Tag ",(0,t.jsx)(n.code,{children:"kol-icon"})," erzeugt."]}),"\n",(0,t.jsx)(n.h3,{id:"code",children:"Code"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-html",children:'<kol-icon _label="Zu Hause" _icons="codicon codicon-home"></kol-icon>\n'})}),"\n",(0,t.jsx)(n.h3,{id:"beispiel",children:"Beispiel"}),"\n",(0,t.jsx)("kol-icon",{_label:"Zu Hause",_icons:"codicon codicon-home"}),"\n",(0,t.jsx)(n.h3,{id:"icons",children:"Icons"}),"\n",(0,t.jsxs)(n.p,{children:["Die Property ",(0,t.jsx)(n.code,{children:"_icons"})," erwartet einen String mit den Klassennamen der zu zeigenden Icons (z.B.: ",(0,t.jsx)(n.code,{children:'_icons="codicon codicon-home'}),")."]}),"\n",(0,t.jsx)("kol-link",{_href:"https://microsoft.github.io/vscode-codicons/dist/codicon.html",_target:"_blank",_label:"\xdcbersicht Codicons"}),"\n",(0,t.jsx)(n.h2,{id:"barrierefreiheit",children:"Barrierefreiheit"}),"\n",(0,t.jsx)(n.p,{children:"Wichtig ist bei Kontext-relevanten Grafiken, dass sie beschriftet werden."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)("kol-link",{_href:"https://www.w3.org/WAI/ARIA/apg/practices/names-and-descriptions/"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"label",children:"Label"}),"\n",(0,t.jsxs)(n.p,{children:["Mittels der Property ",(0,t.jsx)(n.code,{children:"_label"})," muss ein Kontext-relevantes Icon beschriftet werden."]}),"\n",(0,t.jsx)(n.h2,{id:"links-und-referenzen",children:"Links und Referenzen"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)("kol-link",{_href:"https://github.com/microsoft/vscode-codicons",_target:"_blank",_label:"Codicons"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)("kol-link",{_href:"https://fontawesome.com",_target:"_blank",_label:"Font-Awesome"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)("kol-link",{_href:"https://icofont.com",_target:"_blank",_label:"Icofont"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Property"}),(0,t.jsx)(n.th,{children:"Attribute"}),(0,t.jsx)(n.th,{children:"Description"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Default"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:"_icons"})," ",(0,t.jsx)(n.em,{children:"(required)"})]}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"_icons"})}),(0,t.jsxs)(n.td,{children:["Defines the icon classnames (e.g. ",(0,t.jsx)(n.code,{children:'_icons="fa-solid fa-user"'}),")."]}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"string"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"undefined"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:"_label"})," ",(0,t.jsx)(n.em,{children:"(required)"})]}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"_label"})}),(0,t.jsx)(n.td,{children:"Defines the visible or semantic label of the component (e.g. aria-label, label, headline, caption, summary, etc.)."}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"string"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"undefined"})})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"shadow-parts",children:"Shadow Parts"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Part"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:'"icon"'})}),(0,t.jsx)(n.td,{children:"Erm\xf6glicht das Styling des inneren Icons."})]})})]}),"\n",(0,t.jsx)(n.hr,{})]})}function r(e={}){const{wrapper:n}={...(0,l.M)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(s,{...e})}):s(e)}var a=i(37704),o=i(54592);const c={title:"Icon",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die Icon-Komponente.",tags:["Icon","Beschreibung","Spezifikation","Beispiele"]},d=void 0,h={id:"components/icon",title:"Icon",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die Icon-Komponente.",source:"@site/docs/30-components/icon.mdx",sourceDirName:"30-components",slug:"/components/icon",permalink:"/docs/next/components/icon",draft:!1,unlisted:!1,tags:[{inline:!0,label:"Icon",permalink:"/docs/next/tags/icon"},{inline:!0,label:"Beschreibung",permalink:"/docs/next/tags/beschreibung"},{inline:!0,label:"Spezifikation",permalink:"/docs/next/tags/spezifikation"},{inline:!0,label:"Beispiele",permalink:"/docs/next/tags/beispiele"}],version:"current",frontMatter:{title:"Icon",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die Icon-Komponente.",tags:["Icon","Beschreibung","Spezifikation","Beispiele"]},sidebar:"tutorialSidebar",previous:{title:"Heading",permalink:"/docs/next/components/heading"},next:{title:"Image",permalink:"/docs/next/components/image"}},u={},p=[{value:"Konstruktion",id:"konstruktion",level:2},{value:"Code",id:"code",level:3},{value:"Beispiel",id:"beispiel",level:3},{value:"Icons",id:"icons",level:3},{value:"Barrierefreiheit",id:"barrierefreiheit",level:2},{value:"Label",id:"label",level:3},{value:"Links und Referenzen",id:"links-und-referenzen",level:2},{value:"Properties",id:"properties",level:2},{value:"Shadow Parts",id:"shadow-parts",level:2},{value:"Live-Editor",id:"live-editor",level:2},{value:"Beispiele",id:"beispiele",level:2}];function b(e){const n={h2:"h2",...(0,l.M)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r,{}),"\n",(0,t.jsx)(n.h2,{id:"live-editor",children:"Live-Editor"}),"\n",(0,t.jsx)(o.o,{component:"icon"}),"\n",(0,t.jsx)(n.h2,{id:"beispiele",children:"Beispiele"}),"\n",(0,t.jsx)(a.Q,{component:"icon",sample:"basic"})]})}function m(e={}){const{wrapper:n}={...(0,l.M)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(b,{...e})}):b(e)}},37704:(e,n,i)=>{i.d(n,{Q:()=>c});var t=i(64992),l=i(80924),s=i(76776);const r=function(e,n,i,t,l){return void 0===l&&(l="editor"),`${e}&module=${t}&initialpath=%23%2F${n}%2F${i}&view=${l}`},a={width:"100%",height:"500px",border:"0",overflow:"hidden"},o=e=>{let{url:n}=e;return(0,s.jsxs)("div",{className:"m-2",children:[(0,s.jsx)("iframe",{src:n,style:a,title:"kolibri-public-ui-code-samples",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}),(0,s.jsx)(t.GQ,{_href:n,_label:"",_target:"codesandbox",children:(0,s.jsx)("img",{alt:"CodeSandbox-Schalter",src:"https://codesandbox.io/static/img/play-codesandbox.svg"})})]})},c=e=>{let{component:n,sample:i}=e;const[c,d]=(0,l.useState)("Preview"),h="https://codesandbox.io/embed/kolibri-public-ui-react-samples-w5u37c?fontsize=14&hidenavigation=1&autoresize=1&theme=dark",u=`%2Fsrc%2Fsamples%2F${n}%2F${i}`,p={angular:`${u}.html`,react:`${u}.tsx`,vue:`${u}.vue`,webcomponent:`${u}.html`},b=`/sample-react/#/${n}/${i}?hideMenus`,m={onSelect:(e,n)=>{switch(n){case 1:d((()=>"Angular"));break;case 2:d((()=>"React"));break;case 3:d((()=>"Vue"));break;case 4:d((()=>"Web Component"));break;default:d((()=>"Preview"))}}};return(0,s.jsxs)(t._,{className:"w-full",_label:"Code-Beispiel",_on:m,_tabs:[{_label:"Vorschau"},{_disabled:!0,_label:"Angular"},{_label:"React"},{_disabled:!0,_label:"Vue"},{_disabled:!0,_label:"Web Component"}],children:[(0,s.jsx)("div",{children:"Preview"===c&&(0,s.jsx)("iframe",{src:b,style:a,title:"kolibri-public-ui-code-samples",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"})}),(0,s.jsx)("div",{children:"Angular"===c&&(0,s.jsx)(o,{url:r(h,n,i,p.angular)})}),(0,s.jsx)("div",{children:"React"===c&&(0,s.jsx)(o,{url:r(h,n,i,p.react)})}),(0,s.jsx)("div",{children:"Vue"===c&&(0,s.jsx)(o,{url:r(h,n,i,p.vue)})}),(0,s.jsx)("div",{children:"Web Component"===c&&(0,s.jsx)(o,{url:r(h,n,i,p.webcomponent)})})]})}},54592:(e,n,i)=>{i.d(n,{o:()=>v});var t=i(592),l=i(64992),s=i(80924),r=i(73700),a=i(76776);function o(e){const{label:n,name:i,update:t,value:r}=e;return(0,s.useEffect)((()=>{r||t(i,"#000000")}),[]),(0,a.jsx)(l.eK,{_label:"",_on:{onInput:(e,n)=>t(i,n)},_value:r,children:(0,a.jsx)("span",{slot:"expert",children:n})})}function c(e){const{attribute:n,label:i,update:t}=e,[r,o]=(0,s.useState)(""),[c,d]=(0,s.useState)(""),[h,u]=(0,s.useState)(""),[p,b]=(0,s.useState)("");let m=!1,x=!1,f=!1,j=!1;n.type.includes("KoliBriAllIcon")?(m=!0,x=!0,f=!0,j=!0):(n.type.includes("KoliBriVerticalIcon")&&(f=!0,j=!0),n.type.includes("KoliBriHorizontalIcon")&&(m=!0,x=!0)),(0,s.useEffect)((()=>{if(!r||c||h||p){const e={};r&&(e.left=`codicon codicon-${r}`),c&&(e.right=`codicon codicon-${c}`),h&&(e.top=`codicon codicon-${h}`),p&&(e.bottom=`codicon codicon-${p}`),Object.keys(e).length&&t(n.name,JSON.stringify(e))}else t(n.name,`codicon codicon-${r}`)}),[r,c,h,p]);const g=["home","arrow-up","arrow-right","arrow-down","arrow-left"];return(0,a.jsxs)("div",{children:[i,m?(0,a.jsx)(l.Si,{_label:"Links",children:(0,a.jsx)("div",{className:"flex flex-wrap gap-2 p-2",children:g.map((e=>(0,a.jsx)(l.qC,{_icons:`codicon codicon-${e}`,_hideLabel:!0,_label:"",_on:{onClick:()=>o(e)}},e)))})}):"",x?(0,a.jsx)(l.Si,{_label:"Rechts",children:(0,a.jsx)("div",{className:"flex flex-wrap gap-2 p-2",children:g.map((e=>(0,a.jsx)(l.qC,{_icons:`codicon codicon-${e}`,_hideLabel:!0,_label:"",_on:{onClick:()=>d(e)}},e)))})}):"",f?(0,a.jsx)(l.Si,{_label:"Oben",children:(0,a.jsx)("div",{className:"flex flex-wrap gap-2 p-2",children:g.map((e=>(0,a.jsx)(l.qC,{_icons:`codicon codicon-${e}`,_hideLabel:!0,_label:"",_on:{onClick:()=>u(e)}},e)))})}):"",j?(0,a.jsx)(l.Si,{_label:"Unten",children:(0,a.jsx)("div",{className:"flex flex-wrap gap-2 p-2",children:g.map((e=>(0,a.jsx)(l.qC,{_icons:`codicon codicon-${e}`,_hideLabel:!0,_label:"",_on:{onClick:()=>b(e)}},e)))})}):""]})}function d(e){const{name:n,label:i,types:t,update:s,value:r}=e,o=[];function c(e){return{label:e,value:e}}return t.includes("undefined")?(o.push({label:"-",value:void 0}),o.push(...t.filter((e=>"undefined"!==e)).map(c))):o.push(...t.filter((e=>"undefined"!==e)).map(c)),(0,a.jsx)(l.qy,{className:"my-2",_label:"",_options:JSON.stringify(o),_on:{onInput:(e,i)=>s(n,i[0])},_value:r?[r]:void 0,children:(0,a.jsx)("span",{slot:"expert",children:i})})}function h(e){const{attribute:n,update:i,value:t}=e,r=(0,s.useMemo)((()=>{let e=n.type.replace(/\\?"/g,"").split(" | ");return e=e.filter((e=>"KoliBriAllIcon ignorieren"!==e)),1===e.length?e[0]:e.includes("string")?"string":e.includes("number")?"number":e.includes("boolean")?"boolean":""}),[n]),h=(0,s.useMemo)((()=>{const e=n.type.split(" | ").map((e=>e.replace(/\\?"/g,""))),s=(0,a.jsx)(l.s1,{_label:n.description,children:n.name});switch(n.name){case"_color":return(0,a.jsx)(o,{name:n.name,label:s,update:i,value:t});case"_icons":return(0,a.jsx)(c,{attribute:n,label:s,update:i,value:t});default:switch(r){case"string":return(0,a.jsx)(l.Uh,{className:"my-2",_label:"",_on:{onInput:(e,t)=>i(n.name,t)},_value:t||"",children:(0,a.jsx)("span",{slot:"expert",children:s})});case"number":return(0,a.jsx)(l.QL,{className:"my-2",_label:"",_on:{onInput:(e,t)=>i(n.name,t)},_value:t,children:(0,a.jsx)("span",{slot:"expert",children:s})});case"boolean":return(0,a.jsx)(l.Q7,{className:"my-2",_checked:!0===t,_label:"",_on:{onInput:(e,t)=>i(n.name,t)},_variant:"switch",_value:!0,children:(0,a.jsx)("span",{slot:"expert",children:s})});default:return e.length>1?(0,a.jsx)(d,{label:s,name:n.name,types:e,update:i,value:t}):(0,a.jsxs)("p",{children:["Attribut: '",n.name,"'",(0,a.jsx)("br",{}),"Typ: '",n.type,"'"]})}}}),[n,t]);return(0,a.jsx)(a.Fragment,{children:h})}var u=i(63136),p=i(28256),b=i(39452),m=i.n(b);function x(e){const{tag:n,params:i}=e,t=Object.entries(i).filter((e=>"defaultValues"!==e[0]));let l="";const r=(0,s.useMemo)((()=>{let e="";return t.filter((e=>e[0].startsWith("slot-"))).forEach((n=>{const i=n[1],t=n[0].split("-")[1];if(i)if(i.match(/^<.*?>/)?.length){const n=i.indexOf(">");e+=i.substring(0,n)+` slot="${t}"`+i.substring(n)}else e+=`<div slot="${t}">${i}</div>`})),e}),[i]),o=t.filter((e=>!e[0].startsWith("slot-"))).filter((e=>!i.defaultValues.includes(e[0])));for(const[s,a]of o)if(a){let e="";switch(typeof a){case"string":e=` ${s}="${a.replace(/"/g,"'")}"`;break;case"number":e=` ${s}="${a.toString()}"`;break;case"boolean":e=a?` ${s}`:"";break;case"object":e=` ${s}="${JSON.stringify(a)}"`;break;default:e="Never give up hope, one day everything will be fixed."}l+=e}const c=`<kol-${n}${l}>${r}</kol-${n}>`;let d;try{d=(0,p.format)(c,{plugins:[m()],printWidth:80}).replace(/;\n$/,"")}catch(h){d=`\x3c!-- Formatter-Error: Slot-Markup is not valid HTML for formatting. --\x3e\n${c}`}return(0,a.jsx)("div",{className:"h-48 rounded-md overflow-hidden",children:(0,a.jsx)(u.cp,{defaultLanguage:"html",height:"100%",options:{automaticLayout:!0,fontSize:16,lineNumbers:"off",readOnly:!0},value:d})})}function f(e){const n=Object.fromEntries(Object.entries(e.params).filter((e=>{let[n]=e;return!n.startsWith("slot-")}))),i=Object.entries(e.params).filter((e=>{let[n]=e;return n.startsWith("slot-")})),t={abbr:l.s1,accordion:l.IP,alert:l.mW,avatar:l.aq,badge:l.cX,breadcrumb:l.If,button:l.qC,"button-group":l.Os,"button-link":l.u_,card:l.Yh,details:l.Si,form:l.OO,heading:l.ch,icon:l.SA,image:l.iu,"indented-text":l.MV,"input-checkbox":l.Q7,"input-color":l.eK,"input-date":l.QZ,"input-email":l.kN,"input-file":l.Ex,"input-number":l.QL,"input-password":l.EH,"input-radio":l.wJ,"input-range":l.Ef,"input-text":l.Uh,kolibri:l.aY,link:l.GQ,"link-button":l._k,"link-group":l.O_,logo:l.ae,modal:l.cT,nav:l.Y4,pagination:l.kj,progress:l.O0,quote:l.SY,select:l.qy,"skip-nav":l.Ig,spin:l.kP,"split-button":l.a,symbol:l.OM,table:l.Y9,tabs:l._,textarea:l.DG,version:l.k1}[e.tag];return t?(0,a.jsx)(t,{...n,children:i.map((e=>(0,a.jsx)("div",{slot:e[0].replace("slot-","").replace("default",""),dangerouslySetInnerHTML:{__html:e[1]}},e[0])))}):(0,a.jsx)("div",{children:"Tag not implemented"})}function j(e){const{description:n,name:i,update:t,value:l}=e;return(0,a.jsxs)("div",{className:"bg-gray-100 my-2 rounded-lg p-2 border border-gray-300 border-solid",children:[(0,a.jsx)("b",{children:i||"default"}),": ",n,(0,a.jsx)("br",{}),(0,a.jsx)(u.GW,{defaultLanguage:"html",height:"5em",onChange:e=>t(`slot-${i}`,e||""),options:{automaticLayout:!0,fontSize:16,lineNumbers:"off"},value:l})]})}const g=["_smart-button","_icon-align"],_={abbr:{"slot-default":"Abbr"},accordion:{"slot-default":"Accordion content"},tabs:{_tabs:'[{"_label":"Tab 1"},{"_label":"Tab 2", "_on": {"onClose": true} },{"_label":"Tab 3"}]'},breadcrumb:{_links:"[{'_label':'Startseite','_href':'#/'},{'_label':'Unterseite der Startseite','_href':'#/unterseite'},{'_label':'Unterseite der Unterseite','_href':'#/unterseite/unterseite'}]"},form:{"_required-text":"Bitte alle Felder ausf\xfcllen."},image:{_src:"https://placehold.co/100x100/cc006e/white"},"link-group":{_links:"[{'_label':'Startseite','_href':'#/'},{'_label':'Unterseite der Startseite','_href':'#/unterseite'},{'_label':'Unterseite der Unterseite','_href':'#/unterseite/unterseite'}]"},nav:{_links:"[{'_label':'Startseite','_href':'#/'},{'_label':'Unterseite der Startseite','_href':'#/unterseite'},{'_label':'Unterseite der Unterseite','_href':'#/unterseite/unterseite'}]"},pagination:{_total:"100",_page:"6"},quote:{_quote:"Hello World"},select:{_options:"[{'label':'Herr','value':0},{'label':'Frau','value':1}]"},"skip-nav":{_links:"[{'_label':'Navigation','_href':'#nav'},{'_label':'Inhalt','_href':'#main'},{'_label':'Kontakt','_href':'#kontakt'},{'_label':'Links','_href':'#links'}]"},table:{_headers:'{"horizontal":[[{"label":"Montag","key":"montag"}]]}',_data:'[{"montag":"Zelle1"},{"montag":"Zelle2"}]',_pagination:'{"page":2}'}};function v(e){const[n,i]=(0,s.useState)(function(){const e={};return Object.values(t.Q).forEach((n=>{const i=n.name.replace("kol-","");e[i]={defaultValues:[]},n.attributes.forEach((n=>{void 0!==n.defaultValue&&(e[i][n.name]=n.defaultValue.replace(/'/g,""),e[i].defaultValues.push(n.name)),void 0!==_[i]?.[n.name]&&(e[i][n.name]=_[i][n.name])})),n.slots.forEach((n=>{const t=`slot-${n.name||"default"}`,l=_[i]?.[t];l&&(e[i][t]=l)}))})),e}()),[o,c]=(0,s.useState)("badge");(0,s.useEffect)((()=>{e.component&&c(e.component.replace("kol-",""))}),[e.component]),(0,s.useEffect)((()=>{!!t.Q.find((e=>e.name===`kol-${o}`))?.attributes.find((e=>"_label"===e.name))&&!n[o]?._label&&u("_label","Label-Text");!!t.Q.find((e=>e.name===`kol-${o}`))?.attributes.find((e=>"_heading"===e.name))&&!n[o]?._heading&&u("_heading","Heading-Text")}),[o]);const d=(0,s.useMemo)((()=>n[o]||{}),[n,o]);function u(e,n){i((i=>{const t={...i[o],[e]:n,defaultValues:i[o].defaultValues.filter((n=>n!==e))};return{...i,[o]:t}}))}const p=Object.values(t.Q).find((e=>e.name===`kol-${o}`));return(0,a.jsx)(r.c,{children:()=>(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(l.cX,{class:"mb-2",_label:"Beta",_color:"#b00"}),(0,a.jsxs)("div",{className:"grid lg:grid-cols-3 gap-2",children:[(0,a.jsxs)(l._,{className:"col-span-2",_label:"Wechselnavigation zwischen Viewer und Code",_tabs:[{_label:"Viewer"},{_label:"Code"}],children:[(0,a.jsx)("div",{className:"p-2",children:(0,a.jsx)(f,{tag:o,params:d})}),(0,a.jsx)("div",{className:"lg:col-span-2",children:(0,a.jsx)(x,{params:d,tag:o})})]}),(0,a.jsxs)("div",{className:"grid gap-4 p-2 border-0 border-l border-solid",children:[(0,a.jsx)(l.ch,{_level:3,_label:"Konfigurator"}),(0,a.jsxs)("div",{children:[(0,a.jsx)(l.ch,{_level:4,_label:"Properties"}),(0,a.jsxs)("div",{className:"max-h-96 p-2 overflow-auto mb-4",children:[p&&p.attributes.map((e=>(0,a.jsx)(a.Fragment,{children:!g.includes(e.name)&&!e.description.startsWith("Deprecated:")&&(0,a.jsx)(h,{attribute:e,update:u,value:d[e.name]},e.name)}))),p&&0===p.attributes.length&&(0,a.jsx)("span",{className:"text-gray-500",children:"Keine Properties vorhanden"})]}),(0,a.jsx)(l.ch,{_level:4,_label:"Slots"}),(0,a.jsxs)("div",{className:"max-h-56 p-2 overflow-auto",children:[p&&p.slots.map((e=>(0,a.jsx)(j,{description:e.description,name:e.name||"default",update:u,value:d["slot-"+(e.name||"default")]},e.name))),p&&0===p.slots.length&&(0,a.jsx)("span",{className:"text-gray-500",children:"Keine Slots vorhanden"})]})]})]})]})]})})}}}]);