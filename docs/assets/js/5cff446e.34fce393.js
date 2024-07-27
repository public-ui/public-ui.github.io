"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[25808],{94568:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>h,contentTitle:()=>c,default:()=>m,frontMatter:()=>d,metadata:()=>u,toc:()=>p});var t=i(76776),l=i(108);function a(e){const n={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",hr:"hr",li:"li",mermaid:"mermaid",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.M)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["Mit Hilfe der ",(0,t.jsx)(n.strong,{children:"SkipNav"}),"-Komponente kann eine versteckte Navigation erzeugt werden. Sie dient dazu, Sehbehinderten das \xdcberspringen von Seitenbereichen zu erm\xf6glichen. Sie wird nur nach Anspringen durch die ",(0,t.jsx)(n.strong,{children:"Tab-Taste"})," sichtbar."]}),"\n",(0,t.jsx)(n.h2,{id:"konstruktion",children:"Konstruktion"}),"\n",(0,t.jsx)(n.h3,{id:"code",children:"Code"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-html",children:"<kol-skip-nav\n\t_aria-label=\"Ein versteckter Link\"\n\t_links=\"[{'_label':'Navigation','_href':'#nav'},{'_label':'Inhalt','_href':'#main'},{'_label':'Kontakt','_href':'#kontakt'},{'_label':'Links','_href':'#links'}]\"\n></kol-skip-nav>\n"})}),"\n",(0,t.jsx)(n.h3,{id:"beispiel",children:"Beispiel"}),"\n",(0,t.jsxs)(n.p,{children:["Um die ",(0,t.jsx)(n.strong,{children:"SkipNav"})," sehen zu k\xf6nnen, klicken Sie auf diesen Text und gehen dann mit der Tab-Taste einen Schritt weiter."]}),"\n",(0,t.jsx)("kol-skip-nav",{"_aria-label":"Ein versteckter Link",_links:"[{'_label':'Navigation','_href':'#nav'},{'_label':'Inhalt','_href':'#main'},{'_label':'Kontakt','_href':'#kontakt'},{'_label':'Links','_href':'#links'}]"}),"\n",(0,t.jsx)(n.h2,{id:"verwendung",children:"Verwendung"}),"\n",(0,t.jsxs)(n.p,{children:["Die ",(0,t.jsx)(n.strong,{children:"SkipNav"})," wird durch \xdcbergabe eines JSON-Objekts erzeugt, das f\xfcr das Rendern der versteckten Links zust\xe4ndig ist."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"[\n\t{ _label: 'Navigation', _href: '#nav' },\n\t{ _label: 'Inhalt', _href: '#main' },\n\t{ _label: 'Kontakt', _href: '#kontakt' },\n\t{ _label: 'Links', _href: '#links' },\n];\n"})}),"\n",(0,t.jsx)(n.h3,{id:"tastatursteuerung",children:"Tastatursteuerung"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Taste"}),(0,t.jsx)(n.th,{children:"Funktion"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"Tab"})}),(0,t.jsx)(n.td,{children:"Fokussiert die SkipNav und erm\xf6glicht das Durchlaufen der Men\xfcpunkte."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"Enter"})}),(0,t.jsx)(n.td,{children:"Ruft den Link des fokussierten Men\xfcpunkts auf."})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"links-und-referenzen",children:"Links und Referenzen"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://webaim.org/techniques/skipnav/",children:"https://webaim.org/techniques/skipnav/"})}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Property"}),(0,t.jsx)(n.th,{children:"Attribute"}),(0,t.jsx)(n.th,{children:"Description"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Default"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:"_ariaLabel"})," ",(0,t.jsx)(n.em,{children:"(required)"})]}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"_aria-label"})}),(0,t.jsx)(n.td,{children:"Gibt den Text an, der die Navigation von anderen Navigationen differenziert."}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"string"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"undefined"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:"_links"})," ",(0,t.jsx)(n.em,{children:"(required)"})]}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"_links"})}),(0,t.jsx)(n.td,{children:"Setzt die Liste der darzustellenden Links."}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:"LinkProps[]"})," | ",(0,t.jsx)(n.code,{children:"string"})]}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"undefined"})})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"dependencies",children:"Dependencies"}),"\n",(0,t.jsx)(n.h3,{id:"depends-on",children:"Depends on"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"./link",children:"kol-link"})}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"graph",children:"Graph"}),"\n",(0,t.jsx)(n.mermaid,{value:"graph TD;\n  kol-skip-nav --\x3e kol-link\n  kol-link --\x3e kol-link-wc\n  kol-link-wc --\x3e kol-span-wc\n  kol-link-wc --\x3e kol-icon\n  kol-link-wc --\x3e kol-tooltip\n  kol-span-wc --\x3e kol-icon\n  kol-tooltip --\x3e kol-span-wc\n  style kol-skip-nav fill:#f9f,stroke:#333,stroke-width:4px"}),"\n",(0,t.jsx)(n.hr,{})]})}function s(e={}){const{wrapper:n}={...(0,l.M)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}var r=i(37704),o=i(54592);const d={title:"SkipNav",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die SkipNav-Komponente.",tags:["SkipNav","Beschreibung","Spezifikation","Beispiele"]},c=void 0,u={id:"components/skip-nav",title:"SkipNav",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die SkipNav-Komponente.",source:"@site/versioned_docs/version-1.5/30-components/skip-nav.mdx",sourceDirName:"30-components",slug:"/components/skip-nav",permalink:"/docs/1.5/components/skip-nav",draft:!1,unlisted:!1,tags:[{inline:!0,label:"SkipNav",permalink:"/docs/1.5/tags/skip-nav"},{inline:!0,label:"Beschreibung",permalink:"/docs/1.5/tags/beschreibung"},{inline:!0,label:"Spezifikation",permalink:"/docs/1.5/tags/spezifikation"},{inline:!0,label:"Beispiele",permalink:"/docs/1.5/tags/beispiele"}],version:"1.5",frontMatter:{title:"SkipNav",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die SkipNav-Komponente.",tags:["SkipNav","Beschreibung","Spezifikation","Beispiele"]},sidebar:"tutorialSidebar",previous:{title:"Select",permalink:"/docs/1.5/components/select"},next:{title:"Span",permalink:"/docs/1.5/components/span"}},h={},p=[{value:"Konstruktion",id:"konstruktion",level:2},{value:"Code",id:"code",level:3},{value:"Beispiel",id:"beispiel",level:3},{value:"Verwendung",id:"verwendung",level:2},{value:"Tastatursteuerung",id:"tastatursteuerung",level:3},{value:"Links und Referenzen",id:"links-und-referenzen",level:2},{value:"Properties",id:"properties",level:2},{value:"Dependencies",id:"dependencies",level:2},{value:"Depends on",id:"depends-on",level:3},{value:"Graph",id:"graph",level:3},{value:"Live-Editor",id:"live-editor",level:2},{value:"Beispiele",id:"beispiele",level:2}];function b(e){const n={h2:"h2",...(0,l.M)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s,{}),"\n",(0,t.jsx)(n.h2,{id:"live-editor",children:"Live-Editor"}),"\n",(0,t.jsx)(o.o,{component:"skip-nav"}),"\n",(0,t.jsx)(n.h2,{id:"beispiele",children:"Beispiele"}),"\n",(0,t.jsx)(r.Q,{component:"skip-nav",sample:"basic"})]})}function m(e={}){const{wrapper:n}={...(0,l.M)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(b,{...e})}):b(e)}},37704:(e,n,i)=>{i.d(n,{Q:()=>d});var t=i(33920),l=i(80924),a=i(76776);const s=function(e,n,i,t,l){return void 0===l&&(l="editor"),`${e}&module=${t}&initialpath=%23%2F${n}%2F${i}&view=${l}`},r={width:"100%",height:"500px",border:"0",overflow:"hidden"},o=e=>{let{url:n}=e;return(0,a.jsxs)("div",{className:"m-2",children:[(0,a.jsx)("iframe",{src:n,style:r,title:"kolibri-public-ui-code-samples",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}),(0,a.jsx)(t.GQ,{_href:n,_label:"",_target:"codesandbox",children:(0,a.jsx)("img",{alt:"CodeSandbox-Schalter",src:"https://codesandbox.io/static/img/play-codesandbox.svg"})})]})},d=e=>{let{component:n,sample:i}=e;const[d,c]=(0,l.useState)("Preview"),u="https://codesandbox.io/embed/kolibri-public-ui-react-samples-w5u37c?fontsize=14&hidenavigation=1&autoresize=1&theme=dark",h=`%2Fsrc%2Fsamples%2F${n}%2F${i}`,p={angular:`${h}.html`,react:`${h}.tsx`,vue:`${h}.vue`,webcomponent:`${h}.html`},b=`/sample-react/#/${n}/${i}?hideMenus`,m={onSelect:(e,n)=>{switch(n){case 1:c((()=>"Angular"));break;case 2:c((()=>"React"));break;case 3:c((()=>"Vue"));break;case 4:c((()=>"Web Component"));break;default:c((()=>"Preview"))}}};return(0,a.jsxs)(t._,{className:"w-full",_label:"Code-Beispiel",_on:m,_tabs:[{_label:"Vorschau"},{_disabled:!0,_label:"Angular"},{_label:"React"},{_disabled:!0,_label:"Vue"},{_disabled:!0,_label:"Web Component"}],children:[(0,a.jsx)("div",{children:"Preview"===d&&(0,a.jsx)("iframe",{src:b,style:r,title:"kolibri-public-ui-code-samples",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"})}),(0,a.jsx)("div",{children:"Angular"===d&&(0,a.jsx)(o,{url:s(u,n,i,p.angular)})}),(0,a.jsx)("div",{children:"React"===d&&(0,a.jsx)(o,{url:s(u,n,i,p.react)})}),(0,a.jsx)("div",{children:"Vue"===d&&(0,a.jsx)(o,{url:s(u,n,i,p.vue)})}),(0,a.jsx)("div",{children:"Web Component"===d&&(0,a.jsx)(o,{url:s(u,n,i,p.webcomponent)})})]})}},54592:(e,n,i)=>{i.d(n,{o:()=>g});var t=i(52266),l=i(33920),a=i(80924),s=i(73700),r=i(76776);function o(e){const{label:n,name:i,update:t,value:s}=e;return(0,a.useEffect)((()=>{s||t(i,"#000000")}),[]),(0,r.jsx)(l.eK,{_label:"",_on:{onInput:(e,n)=>t(i,n)},_value:s,children:(0,r.jsx)("span",{slot:"expert",children:n})})}function d(e){const{attribute:n,label:i,update:t}=e,[s,o]=(0,a.useState)(""),[d,c]=(0,a.useState)(""),[u,h]=(0,a.useState)(""),[p,b]=(0,a.useState)("");let m=!1,x=!1,f=!1,k=!1;n.type.includes("KoliBriAllIcon")?(m=!0,x=!0,f=!0,k=!0):(n.type.includes("KoliBriVerticalIcon")&&(f=!0,k=!0),n.type.includes("KoliBriHorizontalIcon")&&(m=!0,x=!0)),(0,a.useEffect)((()=>{if(!s||d||u||p){const e={};s&&(e.left=`codicon codicon-${s}`),d&&(e.right=`codicon codicon-${d}`),u&&(e.top=`codicon codicon-${u}`),p&&(e.bottom=`codicon codicon-${p}`),Object.keys(e).length&&t(n.name,JSON.stringify(e))}else t(n.name,`codicon codicon-${s}`)}),[s,d,u,p]);const j=["home","arrow-up","arrow-right","arrow-down","arrow-left"];return(0,r.jsxs)("div",{children:[i,m?(0,r.jsx)(l.Si,{_label:"Links",children:(0,r.jsx)("div",{className:"flex flex-wrap gap-2 p-2",children:j.map((e=>(0,r.jsx)(l.qC,{_icons:`codicon codicon-${e}`,_hideLabel:!0,_label:"",_on:{onClick:()=>o(e)}},e)))})}):"",x?(0,r.jsx)(l.Si,{_label:"Rechts",children:(0,r.jsx)("div",{className:"flex flex-wrap gap-2 p-2",children:j.map((e=>(0,r.jsx)(l.qC,{_icons:`codicon codicon-${e}`,_hideLabel:!0,_label:"",_on:{onClick:()=>c(e)}},e)))})}):"",f?(0,r.jsx)(l.Si,{_label:"Oben",children:(0,r.jsx)("div",{className:"flex flex-wrap gap-2 p-2",children:j.map((e=>(0,r.jsx)(l.qC,{_icons:`codicon codicon-${e}`,_hideLabel:!0,_label:"",_on:{onClick:()=>h(e)}},e)))})}):"",k?(0,r.jsx)(l.Si,{_label:"Unten",children:(0,r.jsx)("div",{className:"flex flex-wrap gap-2 p-2",children:j.map((e=>(0,r.jsx)(l.qC,{_icons:`codicon codicon-${e}`,_hideLabel:!0,_label:"",_on:{onClick:()=>b(e)}},e)))})}):""]})}function c(e){const{name:n,label:i,types:t,update:a,value:s}=e,o=[];function d(e){return{label:e,value:e}}return t.includes("undefined")?(o.push({label:"-",value:void 0}),o.push(...t.filter((e=>"undefined"!==e)).map(d))):o.push(...t.filter((e=>"undefined"!==e)).map(d)),(0,r.jsx)(l.qy,{className:"my-2",_label:"",_options:JSON.stringify(o),_on:{onInput:(e,i)=>a(n,i[0])},_value:s?[s]:void 0,children:(0,r.jsx)("span",{slot:"expert",children:i})})}function u(e){const{attribute:n,update:i,value:t}=e,s=(0,a.useMemo)((()=>{let e=n.type.replace(/\\?"/g,"").split(" | ");return e=e.filter((e=>"KoliBriAllIcon ignorieren"!==e)),1===e.length?e[0]:e.includes("string")?"string":e.includes("number")?"number":e.includes("boolean")?"boolean":""}),[n]),u=(0,a.useMemo)((()=>{const e=n.type.split(" | ").map((e=>e.replace(/\\?"/g,""))),a=(0,r.jsx)(l.s1,{_label:n.description,children:n.name});switch(n.name){case"_color":return(0,r.jsx)(o,{name:n.name,label:a,update:i,value:t});case"_icons":return(0,r.jsx)(d,{attribute:n,label:a,update:i,value:t});default:switch(s){case"string":return(0,r.jsx)(l.Uh,{className:"my-2",_label:"",_on:{onInput:(e,t)=>i(n.name,t)},_value:t||"",children:(0,r.jsx)("span",{slot:"expert",children:a})});case"number":return(0,r.jsx)(l.QL,{className:"my-2",_label:"",_on:{onInput:(e,t)=>i(n.name,t)},_value:t,children:(0,r.jsx)("span",{slot:"expert",children:a})});case"boolean":return(0,r.jsx)(l.Q7,{className:"my-2",_checked:!0===t,_label:"",_on:{onInput:(e,t)=>i(n.name,t)},_variant:"switch",_value:!0,children:(0,r.jsx)("span",{slot:"expert",children:a})});default:return e.length>1?(0,r.jsx)(c,{label:a,name:n.name,types:e,update:i,value:t}):(0,r.jsxs)("p",{children:["Attribut: '",n.name,"'",(0,r.jsx)("br",{}),"Typ: '",n.type,"'"]})}}}),[n,t]);return(0,r.jsx)(r.Fragment,{children:u})}var h=i(63136),p=i(28256),b=i(39452),m=i.n(b);function x(e){const{tag:n,params:i}=e,t=Object.entries(i).filter((e=>"defaultValues"!==e[0]));let l="";const s=(0,a.useMemo)((()=>{let e="";return t.filter((e=>e[0].startsWith("slot-"))).forEach((n=>{const i=n[1],t=n[0].split("-")[1];if(i)if(i.match(/^<.*?>/)?.length){const n=i.indexOf(">");e+=i.substring(0,n)+` slot="${t}"`+i.substring(n)}else e+=`<div slot="${t}">${i}</div>`})),e}),[i]),o=t.filter((e=>!e[0].startsWith("slot-"))).filter((e=>!i.defaultValues.includes(e[0])));for(const[a,r]of o)if(r){let e="";switch(typeof r){case"string":e=` ${a}="${r.replace(/"/g,"'")}"`;break;case"number":e=` ${a}="${r.toString()}"`;break;case"boolean":e=r?` ${a}`:"";break;case"object":e=` ${a}="${JSON.stringify(r)}"`;break;default:e="Never give up hope, one day everything will be fixed."}l+=e}const d=`<kol-${n}${l}>${s}</kol-${n}>`;let c;try{c=(0,p.format)(d,{plugins:[m()],printWidth:80}).replace(/;\n$/,"")}catch(u){c=`\x3c!-- Formatter-Error: Slot-Markup is not valid HTML for formatting. --\x3e\n${d}`}return(0,r.jsx)("div",{className:"h-48 rounded-md overflow-hidden",children:(0,r.jsx)(h.cp,{defaultLanguage:"html",height:"100%",options:{automaticLayout:!0,fontSize:16,lineNumbers:"off",readOnly:!0},value:c})})}function f(e){const n=Object.fromEntries(Object.entries(e.params).filter((e=>{let[n]=e;return!n.startsWith("slot-")}))),i=Object.entries(e.params).filter((e=>{let[n]=e;return n.startsWith("slot-")})),t={abbr:l.s1,accordion:l.IP,alert:l.mW,avatar:l.aq,badge:l.cX,breadcrumb:l.If,button:l.qC,"button-group":l.Os,"button-link":l.u_,card:l.Yh,details:l.Si,form:l.OO,heading:l.ch,icon:l.SA,image:l.iu,"indented-text":l.MV,"input-checkbox":l.Q7,"input-color":l.eK,"input-date":l.QZ,"input-email":l.kN,"input-file":l.Ex,"input-number":l.QL,"input-password":l.EH,"input-radio":l.wJ,"input-range":l.Ef,"input-text":l.Uh,kolibri:l.aY,link:l.GQ,"link-button":l._k,"link-group":l.O_,logo:l.ae,modal:l.cT,nav:l.Y4,pagination:l.kj,progress:l.O0,quote:l.SY,select:l.qy,"skip-nav":l.Ig,spin:l.kP,"split-button":l.a,symbol:l.OM,table:l.Y9,tabs:l._,textarea:l.DG,version:l.k1}[e.tag];return t?(0,r.jsx)(t,{...n,children:i.map((e=>(0,r.jsx)("div",{slot:e[0].replace("slot-","").replace("default",""),dangerouslySetInnerHTML:{__html:e[1]}},e[0])))}):(0,r.jsx)("div",{children:"Tag not implemented"})}function k(e){const{description:n,name:i,update:t,value:l}=e;return(0,r.jsxs)("div",{className:"bg-gray-100 my-2 rounded-lg p-2 border border-gray-300 border-solid",children:[(0,r.jsx)("b",{children:i||"default"}),": ",n,(0,r.jsx)("br",{}),(0,r.jsx)(h.GW,{defaultLanguage:"html",height:"5em",onChange:e=>t(`slot-${i}`,e||""),options:{automaticLayout:!0,fontSize:16,lineNumbers:"off"},value:l})]})}const j=["_smart-button","_icon-align"],v={abbr:{"slot-default":"Abbr"},accordion:{"slot-default":"Accordion content"},tabs:{_tabs:'[{"_label":"Tab 1"},{"_label":"Tab 2", "_on": {"onClose": true} },{"_label":"Tab 3"}]'},breadcrumb:{_links:"[{'_label':'Startseite','_href':'#/'},{'_label':'Unterseite der Startseite','_href':'#/unterseite'},{'_label':'Unterseite der Unterseite','_href':'#/unterseite/unterseite'}]"},form:{"_required-text":"Bitte alle Felder ausf\xfcllen."},image:{_src:"https://placehold.co/100x100/cc006e/white"},"link-group":{_links:"[{'_label':'Startseite','_href':'#/'},{'_label':'Unterseite der Startseite','_href':'#/unterseite'},{'_label':'Unterseite der Unterseite','_href':'#/unterseite/unterseite'}]"},nav:{_links:"[{'_label':'Startseite','_href':'#/'},{'_label':'Unterseite der Startseite','_href':'#/unterseite'},{'_label':'Unterseite der Unterseite','_href':'#/unterseite/unterseite'}]"},pagination:{_total:"100",_page:"6"},quote:{_quote:"Hello World"},select:{_options:"[{'label':'Herr','value':0},{'label':'Frau','value':1}]"},"skip-nav":{_links:"[{'_label':'Navigation','_href':'#nav'},{'_label':'Inhalt','_href':'#main'},{'_label':'Kontakt','_href':'#kontakt'},{'_label':'Links','_href':'#links'}]"},table:{_headers:'{"horizontal":[[{"label":"Montag","key":"montag"}]]}',_data:'[{"montag":"Zelle1"},{"montag":"Zelle2"}]',_pagination:'{"page":2}'}};function g(e){const[n,i]=(0,a.useState)(function(){const e={};return Object.values(t.Q).forEach((n=>{const i=n.name.replace("kol-","");e[i]={defaultValues:[]},n.attributes.forEach((n=>{void 0!==n.defaultValue&&(e[i][n.name]=n.defaultValue.replace(/'/g,""),e[i].defaultValues.push(n.name)),void 0!==v[i]?.[n.name]&&(e[i][n.name]=v[i][n.name])})),n.slots.forEach((n=>{const t=`slot-${n.name||"default"}`,l=v[i]?.[t];l&&(e[i][t]=l)}))})),e}()),[o,d]=(0,a.useState)("badge");(0,a.useEffect)((()=>{e.component&&d(e.component.replace("kol-",""))}),[e.component]),(0,a.useEffect)((()=>{!!t.Q.find((e=>e.name===`kol-${o}`))?.attributes.find((e=>"_label"===e.name))&&!n[o]?._label&&h("_label","Label-Text");!!t.Q.find((e=>e.name===`kol-${o}`))?.attributes.find((e=>"_heading"===e.name))&&!n[o]?._heading&&h("_heading","Heading-Text")}),[o]);const c=(0,a.useMemo)((()=>n[o]||{}),[n,o]);function h(e,n){i((i=>{const t={...i[o],[e]:n,defaultValues:i[o].defaultValues.filter((n=>n!==e))};return{...i,[o]:t}}))}const p=Object.values(t.Q).find((e=>e.name===`kol-${o}`));return(0,r.jsx)(s.c,{children:()=>(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(l.cX,{class:"mb-2",_label:"Beta",_color:"#b00"}),(0,r.jsxs)("div",{className:"grid lg:grid-cols-3 gap-2",children:[(0,r.jsxs)(l._,{className:"col-span-2",_label:"Wechselnavigation zwischen Viewer und Code",_tabs:[{_label:"Viewer"},{_label:"Code"}],children:[(0,r.jsx)("div",{className:"p-2",children:(0,r.jsx)(f,{tag:o,params:c})}),(0,r.jsx)("div",{className:"lg:col-span-2",children:(0,r.jsx)(x,{params:c,tag:o})})]}),(0,r.jsxs)("div",{className:"grid gap-4 p-2 border-0 border-l border-solid",children:[(0,r.jsx)(l.ch,{_level:3,_label:"Konfigurator"}),(0,r.jsxs)("div",{children:[(0,r.jsx)(l.ch,{_level:4,_label:"Properties"}),(0,r.jsxs)("div",{className:"max-h-96 p-2 overflow-auto mb-4",children:[p&&p.attributes.map((e=>(0,r.jsx)(r.Fragment,{children:!j.includes(e.name)&&!e.description.startsWith("Deprecated:")&&(0,r.jsx)(u,{attribute:e,update:h,value:c[e.name]},e.name)}))),p&&0===p.attributes.length&&(0,r.jsx)("span",{className:"text-gray-500",children:"Keine Properties vorhanden"})]}),(0,r.jsx)(l.ch,{_level:4,_label:"Slots"}),(0,r.jsxs)("div",{className:"max-h-56 p-2 overflow-auto",children:[p&&p.slots.map((e=>(0,r.jsx)(k,{description:e.description,name:e.name||"default",update:h,value:c["slot-"+(e.name||"default")]},e.name))),p&&0===p.slots.length&&(0,r.jsx)("span",{className:"text-gray-500",children:"Keine Slots vorhanden"})]})]})]})]})]})})}}}]);