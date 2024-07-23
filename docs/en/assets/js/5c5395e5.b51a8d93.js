"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[337],{10242:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>c,default:()=>b,frontMatter:()=>d,metadata:()=>u,toc:()=>h});var i=t(76776),l=t(108);function s(e){const n={code:"code",em:"em",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.M)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["Ladeanzeigen, wie die ",(0,i.jsx)(n.strong,{children:"Spin"}),"-Komponente, informieren die Nutzer",":innen"," \xfcber Lade- oder Rechenvorg\xe4nge, die vom System ausgef\xfchrt werden. Der Fortschritt kann durch eine wiederholte Animation kommuniziert werden."]}),"\n",(0,i.jsx)(n.h2,{id:"konstruktion",children:"Konstruktion"}),"\n",(0,i.jsx)(n.h3,{id:"code",children:"Code"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-html",children:'<style>\n\t/* https://github.com/vineethtrv/css-loader */\n\t.loader {\n\t\tanimation: rotation 2s linear infinite;\n\t\tborder-color: #444;\n\t\tborder-radius: 50%;\n\t\tborder-style: solid solid dotted dotted;\n\t\tborder-width: 3px;\n\t\tbox-sizing: border-box;\n\t\tdisplay: inline-block;\n\t\theight: 48px;\n\t\tposition: relative;\n\t\twidth: 48px;\n\t}\n\t.loader::after {\n\t\tanimation: rotationBack 1s linear infinite;\n\t\tborder-color: #ff3d00;\n\t\tborder-radius: 50%;\n\t\tborder-style: solid solid dotted;\n\t\tborder-width: 3px;\n\t\tbox-sizing: border-box;\n\t\tbottom: 0;\n\t\tcontent: \'\';\n\t\theight: 24px;\n\t\tleft: 0;\n\t\tmargin: auto;\n\t\tposition: absolute;\n\t\tright: 0;\n\t\ttop: 0;\n\t\ttransform-origin: center center;\n\t\twidth: 24px;\n\t}\n\n\t@keyframes rotation {\n\t\t0% {\n\t\t\ttransform: rotate(0deg);\n\t\t}\n\t\t100% {\n\t\t\ttransform: rotate(360deg);\n\t\t}\n\t}\n\t@keyframes rotationBack {\n\t\t0% {\n\t\t\ttransform: rotate(0deg);\n\t\t}\n\t\t100% {\n\t\t\ttransform: rotate(-360deg);\n\t\t}\n\t}\n\n\t/* https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion#toning_down_the_animation_scaling */\n\t@media (prefers-reduced-motion) {\n\t\t.loader {\n\t\t\tanimation-duration: 6s;\n\t\t}\n\t\t.loader::after {\n\t\t\tanimation-duration: 3s;\n\t\t}\n\t}\n</style>\n<div>\n\t<kol-spin _show></kol-spin>\n\t<kol-spin _show _variant="cycle"></kol-spin>\n\t\x3c!-- for a11y experts - own animation --\x3e\n\t<kol-spin _show _variant="none">\n\t\t\x3c!-- slot for own animation : https://github.com/vineethtrv/css-loader --\x3e\n\t\t<span className="loader" slot="expert"></span>\n\t</kol-spin>\n</div>\n'})}),"\n",(0,i.jsxs)("kol-alert",{_heading:"Reduce Motion",_level:"4",_type:"warning",children:[(0,i.jsx)(n.p,{children:"Wenn m\xf6glich sollte stets auf Animationen verzichtet werden. Wenn Animationen genutzt werden, sollte immer darauf geachtet werden, eine Variante mit reduzierter Animationsgeschwindigkeit anzubieten. Mehr Informationen dazu findet sich hier:"}),(0,i.jsx)("kol-link",{_href:"https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion",_label:"https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion",_target:"_blank"})]}),"\n",(0,i.jsx)(n.h3,{id:"beispiel",children:"Beispiel"}),"\n",(0,i.jsx)("kol-spin",{_show:!0}),"\n",(0,i.jsx)("kol-spin",{_show:!0,_variant:"cycle"}),"\n",(0,i.jsx)("kol-spin",{_show:!0,_variant:"none",children:(0,i.jsx)("span",{className:"loader",slot:"expert"})}),"\n",(0,i.jsxs)("kol-details",{_summary:"CSS Loaders & Spinners",_open:!0,children:[(0,i.jsxs)(n.p,{children:["Es gibt im Internet viele verschiedene CSS Loaders und Spinners. Beispielsweise bietet ",(0,i.jsx)(n.em,{children:"Vineeth"})," eine ganze Reihe interessanter CSS Loaders an. Diese k\xf6nnen auch in der KoliBri Bibliothek genutzt werden. Dazu muss lediglich der Link zu der entsprechenden CSS Datei in den Head der HTML Datei eingebunden werden. Anschlie\xdfend kann die gew\xfcnschte Animation \xfcber den Expert-Slot in die KoliBri-Komponente eingebunden werden. Hier sind einige Beispiele (ohne reduzierte Animationsgeschwindigkeit):"]}),(0,i.jsx)("kol-link",{_href:"https://github.com/vineethtrv/css-loader",_label:"https://github.com/vineethtrv/css-loader",_target:"_blank",_target:"_blank"})]}),"\n",(0,i.jsx)(n.h2,{id:"verwendung",children:"Verwendung"}),"\n",(0,i.jsxs)(n.p,{children:["Verwenden Sie das Attribut ",(0,i.jsx)(n.code,{children:"_show"})," um festzulegen, ob der Spin angezeigt wird."]}),"\n",(0,i.jsx)(n.h3,{id:"best-practices",children:"Best practices"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Verwenden Sie Ladeanzeigen, um die Nutzer",":innen"," \xfcber einen Ladezustand oder einen laufenden Prozess zu informieren."]}),"\n",(0,i.jsx)(n.li,{children:"Verwenden Sie Ladeanzeigen an konsistenten Stellen in der Benutzeroberfl\xe4che, um die Benutzererfahrung zu verbessern."}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"anwendungsf\xe4lle",children:"Anwendungsf\xe4lle"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Abrufen neuer oder aktualisierter Suchergebnisse."}),"\n",(0,i.jsx)(n.li,{children:"Einloggen in gesch\xfctzte Bereiche."}),"\n",(0,i.jsx)(n.li,{children:"Download von Inhalten."}),"\n",(0,i.jsx)(n.li,{children:"Laden von umfangreichen Inhalten, z.B. Videos."}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Property"}),(0,i.jsx)(n.th,{children:"Attribute"}),(0,i.jsx)(n.th,{children:"Description"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{children:"Default"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"_show"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"_show"})}),(0,i.jsx)(n.td,{children:"Makes the element show up."}),(0,i.jsxs)(n.td,{children:[(0,i.jsx)(n.code,{children:"boolean"})," | ",(0,i.jsx)(n.code,{children:"undefined"})]}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"false"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"_variant"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"_variant"})}),(0,i.jsx)(n.td,{children:"Defines which variant should be used for presentation."}),(0,i.jsxs)(n.td,{children:[(0,i.jsx)(n.code,{children:'"cycle"'})," | ",(0,i.jsx)(n.code,{children:'"dot"'})," | ",(0,i.jsx)(n.code,{children:'"none"'})," | ",(0,i.jsx)(n.code,{children:"undefined"})]}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"'dot'"})})]})]})]}),"\n",(0,i.jsx)(n.hr,{})]})}function r(e={}){const{wrapper:n}={...(0,l.M)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(s,{...e})}):s(e)}var a=t(37704),o=t(54592);const d={title:"Spin",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die Spin-Komponente.",tags:["Spin","Beschreibung","Spezifikation","Beispiele"]},c=void 0,u={id:"components/spin",title:"Spin",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die Spin-Komponente.",source:"@site/versioned_docs/version-1.6/30-components/spin.mdx",sourceDirName:"30-components",slug:"/components/spin",permalink:"/en/docs/1.6/components/spin",draft:!1,unlisted:!1,tags:[{inline:!0,label:"Spin",permalink:"/en/docs/1.6/tags/spin"},{inline:!0,label:"Beschreibung",permalink:"/en/docs/1.6/tags/beschreibung"},{inline:!0,label:"Spezifikation",permalink:"/en/docs/1.6/tags/spezifikation"},{inline:!0,label:"Beispiele",permalink:"/en/docs/1.6/tags/beispiele"}],version:"1.6",frontMatter:{title:"Spin",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die Spin-Komponente.",tags:["Spin","Beschreibung","Spezifikation","Beispiele"]},sidebar:"tutorialSidebar",previous:{title:"Span",permalink:"/en/docs/1.6/components/span"},next:{title:"Split-Button",permalink:"/en/docs/1.6/components/split-button"}},p={},h=[{value:"Konstruktion",id:"konstruktion",level:2},{value:"Code",id:"code",level:3},{value:"Beispiel",id:"beispiel",level:3},{value:"Verwendung",id:"verwendung",level:2},{value:"Best practices",id:"best-practices",level:3},{value:"Anwendungsf\xe4lle",id:"anwendungsf\xe4lle",level:3},{value:"Properties",id:"properties",level:2},{value:"Live-Editor",id:"live-editor",level:2},{value:"Beispiele",id:"beispiele",level:2}];function m(e){const n={h2:"h2",...(0,l.M)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r,{}),"\n",(0,i.jsx)(n.h2,{id:"live-editor",children:"Live-Editor"}),"\n",(0,i.jsx)(o.o,{component:"spin"}),"\n",(0,i.jsx)(n.h2,{id:"beispiele",children:"Beispiele"}),"\n",(0,i.jsx)(a.Q,{component:"spin",sample:"basic"})]})}function b(e={}){const{wrapper:n}={...(0,l.M)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(m,{...e})}):m(e)}},37704:(e,n,t)=>{t.d(n,{Q:()=>d});var i=t(64992),l=t(80924),s=t(76776);const r=function(e,n,t,i,l){return void 0===l&&(l="editor"),`${e}&module=${i}&initialpath=%23%2F${n}%2F${t}&view=${l}`},a={width:"100%",height:"500px",border:"0",overflow:"hidden"},o=e=>{let{url:n}=e;return(0,s.jsxs)("div",{className:"m-2",children:[(0,s.jsx)("iframe",{src:n,style:a,title:"kolibri-public-ui-code-samples",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}),(0,s.jsx)(i.GQ,{_href:n,_label:"",_target:"codesandbox",children:(0,s.jsx)("img",{alt:"CodeSandbox-Schalter",src:"https://codesandbox.io/static/img/play-codesandbox.svg"})})]})},d=e=>{let{component:n,sample:t}=e;const[d,c]=(0,l.useState)("Preview"),u="https://codesandbox.io/embed/kolibri-public-ui-react-samples-w5u37c?fontsize=14&hidenavigation=1&autoresize=1&theme=dark",p=`%2Fsrc%2Fsamples%2F${n}%2F${t}`,h={angular:`${p}.html`,react:`${p}.tsx`,vue:`${p}.vue`,webcomponent:`${p}.html`},m=`/sample-react/#/${n}/${t}?hideMenus`,b={onSelect:(e,n)=>{switch(n){case 1:c((()=>"Angular"));break;case 2:c((()=>"React"));break;case 3:c((()=>"Vue"));break;case 4:c((()=>"Web Component"));break;default:c((()=>"Preview"))}}};return(0,s.jsxs)(i._,{className:"w-full",_label:"Code-Beispiel",_on:b,_tabs:[{_label:"Vorschau"},{_disabled:!0,_label:"Angular"},{_label:"React"},{_disabled:!0,_label:"Vue"},{_disabled:!0,_label:"Web Component"}],children:[(0,s.jsx)("div",{children:"Preview"===d&&(0,s.jsx)("iframe",{src:m,style:a,title:"kolibri-public-ui-code-samples",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"})}),(0,s.jsx)("div",{children:"Angular"===d&&(0,s.jsx)(o,{url:r(u,n,t,h.angular)})}),(0,s.jsx)("div",{children:"React"===d&&(0,s.jsx)(o,{url:r(u,n,t,h.react)})}),(0,s.jsx)("div",{children:"Vue"===d&&(0,s.jsx)(o,{url:r(u,n,t,h.vue)})}),(0,s.jsx)("div",{children:"Web Component"===d&&(0,s.jsx)(o,{url:r(u,n,t,h.webcomponent)})})]})}},54592:(e,n,t)=>{t.d(n,{o:()=>v});var i=t(592),l=t(64992),s=t(80924),r=t(73700),a=t(76776);function o(e){const{label:n,name:t,update:i,value:r}=e;return(0,s.useEffect)((()=>{r||i(t,"#000000")}),[]),(0,a.jsx)(l.eK,{_label:"",_on:{onInput:(e,n)=>i(t,n)},_value:r,children:(0,a.jsx)("span",{slot:"expert",children:n})})}function d(e){const{attribute:n,label:t,update:i}=e,[r,o]=(0,s.useState)(""),[d,c]=(0,s.useState)(""),[u,p]=(0,s.useState)(""),[h,m]=(0,s.useState)("");let b=!1,x=!1,g=!1,f=!1;n.type.includes("KoliBriAllIcon")?(b=!0,x=!0,g=!0,f=!0):(n.type.includes("KoliBriVerticalIcon")&&(g=!0,f=!0),n.type.includes("KoliBriHorizontalIcon")&&(b=!0,x=!0)),(0,s.useEffect)((()=>{if(!r||d||u||h){const e={};r&&(e.left=`codicon codicon-${r}`),d&&(e.right=`codicon codicon-${d}`),u&&(e.top=`codicon codicon-${u}`),h&&(e.bottom=`codicon codicon-${h}`),Object.keys(e).length&&i(n.name,JSON.stringify(e))}else i(n.name,`codicon codicon-${r}`)}),[r,d,u,h]);const _=["home","arrow-up","arrow-right","arrow-down","arrow-left"];return(0,a.jsxs)("div",{children:[t,b?(0,a.jsx)(l.Si,{_label:"Links",children:(0,a.jsx)("div",{className:"flex flex-wrap gap-2 p-2",children:_.map((e=>(0,a.jsx)(l.qC,{_icons:`codicon codicon-${e}`,_hideLabel:!0,_label:"",_on:{onClick:()=>o(e)}},e)))})}):"",x?(0,a.jsx)(l.Si,{_label:"Rechts",children:(0,a.jsx)("div",{className:"flex flex-wrap gap-2 p-2",children:_.map((e=>(0,a.jsx)(l.qC,{_icons:`codicon codicon-${e}`,_hideLabel:!0,_label:"",_on:{onClick:()=>c(e)}},e)))})}):"",g?(0,a.jsx)(l.Si,{_label:"Oben",children:(0,a.jsx)("div",{className:"flex flex-wrap gap-2 p-2",children:_.map((e=>(0,a.jsx)(l.qC,{_icons:`codicon codicon-${e}`,_hideLabel:!0,_label:"",_on:{onClick:()=>p(e)}},e)))})}):"",f?(0,a.jsx)(l.Si,{_label:"Unten",children:(0,a.jsx)("div",{className:"flex flex-wrap gap-2 p-2",children:_.map((e=>(0,a.jsx)(l.qC,{_icons:`codicon codicon-${e}`,_hideLabel:!0,_label:"",_on:{onClick:()=>m(e)}},e)))})}):""]})}function c(e){const{name:n,label:t,types:i,update:s,value:r}=e,o=[];function d(e){return{label:e,value:e}}return i.includes("undefined")?(o.push({label:"-",value:void 0}),o.push(...i.filter((e=>"undefined"!==e)).map(d))):o.push(...i.filter((e=>"undefined"!==e)).map(d)),(0,a.jsx)(l.qy,{className:"my-2",_label:"",_options:JSON.stringify(o),_on:{onInput:(e,t)=>s(n,t[0])},_value:r?[r]:void 0,children:(0,a.jsx)("span",{slot:"expert",children:t})})}function u(e){const{attribute:n,update:t,value:i}=e,r=(0,s.useMemo)((()=>{let e=n.type.replace(/\\?"/g,"").split(" | ");return e=e.filter((e=>"KoliBriAllIcon ignorieren"!==e)),1===e.length?e[0]:e.includes("string")?"string":e.includes("number")?"number":e.includes("boolean")?"boolean":""}),[n]),u=(0,s.useMemo)((()=>{const e=n.type.split(" | ").map((e=>e.replace(/\\?"/g,""))),s=(0,a.jsx)(l.s1,{_label:n.description,children:n.name});switch(n.name){case"_color":return(0,a.jsx)(o,{name:n.name,label:s,update:t,value:i});case"_icons":return(0,a.jsx)(d,{attribute:n,label:s,update:t,value:i});default:switch(r){case"string":return(0,a.jsx)(l.Uh,{className:"my-2",_label:"",_on:{onInput:(e,i)=>t(n.name,i)},_value:i||"",children:(0,a.jsx)("span",{slot:"expert",children:s})});case"number":return(0,a.jsx)(l.QL,{className:"my-2",_label:"",_on:{onInput:(e,i)=>t(n.name,i)},_value:i,children:(0,a.jsx)("span",{slot:"expert",children:s})});case"boolean":return(0,a.jsx)(l.Q7,{className:"my-2",_checked:!0===i,_label:"",_on:{onInput:(e,i)=>t(n.name,i)},_variant:"switch",_value:!0,children:(0,a.jsx)("span",{slot:"expert",children:s})});default:return e.length>1?(0,a.jsx)(c,{label:s,name:n.name,types:e,update:t,value:i}):(0,a.jsxs)("p",{children:["Attribut: '",n.name,"'",(0,a.jsx)("br",{}),"Typ: '",n.type,"'"]})}}}),[n,i]);return(0,a.jsx)(a.Fragment,{children:u})}var p=t(63136),h=t(28256),m=t(39452),b=t.n(m);function x(e){const{tag:n,params:t}=e,i=Object.entries(t).filter((e=>"defaultValues"!==e[0]));let l="";const r=(0,s.useMemo)((()=>{let e="";return i.filter((e=>e[0].startsWith("slot-"))).forEach((n=>{const t=n[1],i=n[0].split("-")[1];if(t)if(t.match(/^<.*?>/)?.length){const n=t.indexOf(">");e+=t.substring(0,n)+` slot="${i}"`+t.substring(n)}else e+=`<div slot="${i}">${t}</div>`})),e}),[t]),o=i.filter((e=>!e[0].startsWith("slot-"))).filter((e=>!t.defaultValues.includes(e[0])));for(const[s,a]of o)if(a){let e="";switch(typeof a){case"string":e=` ${s}="${a.replace(/"/g,"'")}"`;break;case"number":e=` ${s}="${a.toString()}"`;break;case"boolean":e=a?` ${s}`:"";break;case"object":e=` ${s}="${JSON.stringify(a)}"`;break;default:e="Never give up hope, one day everything will be fixed."}l+=e}const d=`<kol-${n}${l}>${r}</kol-${n}>`;let c;try{c=(0,h.format)(d,{plugins:[b()],printWidth:80}).replace(/;\n$/,"")}catch(u){c=`\x3c!-- Formatter-Error: Slot-Markup is not valid HTML for formatting. --\x3e\n${d}`}return(0,a.jsx)("div",{className:"h-48 rounded-md overflow-hidden",children:(0,a.jsx)(p.cp,{defaultLanguage:"html",height:"100%",options:{automaticLayout:!0,fontSize:16,lineNumbers:"off",readOnly:!0},value:c})})}function g(e){const n=Object.fromEntries(Object.entries(e.params).filter((e=>{let[n]=e;return!n.startsWith("slot-")}))),t=Object.entries(e.params).filter((e=>{let[n]=e;return n.startsWith("slot-")})),i={abbr:l.s1,accordion:l.IP,alert:l.mW,avatar:l.aq,badge:l.cX,breadcrumb:l.If,button:l.qC,"button-group":l.Os,"button-link":l.u_,card:l.Yh,details:l.Si,form:l.OO,heading:l.ch,icon:l.SA,image:l.iu,"indented-text":l.MV,"input-checkbox":l.Q7,"input-color":l.eK,"input-date":l.QZ,"input-email":l.kN,"input-file":l.Ex,"input-number":l.QL,"input-password":l.EH,"input-radio":l.wJ,"input-range":l.Ef,"input-text":l.Uh,kolibri:l.aY,link:l.GQ,"link-button":l._k,"link-group":l.O_,logo:l.ae,modal:l.cT,nav:l.Y4,pagination:l.kj,progress:l.O0,quote:l.SY,select:l.qy,"skip-nav":l.Ig,spin:l.kP,"split-button":l.a,symbol:l.OM,table:l.Y9,tabs:l._,textarea:l.DG,version:l.k1}[e.tag];return i?(0,a.jsx)(i,{...n,children:t.map((e=>(0,a.jsx)("div",{slot:e[0].replace("slot-","").replace("default",""),dangerouslySetInnerHTML:{__html:e[1]}},e[0])))}):(0,a.jsx)("div",{children:"Tag not implemented"})}function f(e){const{description:n,name:t,update:i,value:l}=e;return(0,a.jsxs)("div",{className:"bg-gray-100 my-2 rounded-lg p-2 border border-gray-300 border-solid",children:[(0,a.jsx)("b",{children:t||"default"}),": ",n,(0,a.jsx)("br",{}),(0,a.jsx)(p.GW,{defaultLanguage:"html",height:"5em",onChange:e=>i(`slot-${t}`,e||""),options:{automaticLayout:!0,fontSize:16,lineNumbers:"off"},value:l})]})}const _=["_smart-button","_icon-align"],j={abbr:{"slot-default":"Abbr"},accordion:{"slot-default":"Accordion content"},tabs:{_tabs:'[{"_label":"Tab 1"},{"_label":"Tab 2", "_on": {"onClose": true} },{"_label":"Tab 3"}]'},breadcrumb:{_links:"[{'_label':'Startseite','_href':'#/'},{'_label':'Unterseite der Startseite','_href':'#/unterseite'},{'_label':'Unterseite der Unterseite','_href':'#/unterseite/unterseite'}]"},form:{"_required-text":"Bitte alle Felder ausf\xfcllen."},image:{_src:"https://placehold.co/100x100/cc006e/white"},"link-group":{_links:"[{'_label':'Startseite','_href':'#/'},{'_label':'Unterseite der Startseite','_href':'#/unterseite'},{'_label':'Unterseite der Unterseite','_href':'#/unterseite/unterseite'}]"},nav:{_links:"[{'_label':'Startseite','_href':'#/'},{'_label':'Unterseite der Startseite','_href':'#/unterseite'},{'_label':'Unterseite der Unterseite','_href':'#/unterseite/unterseite'}]"},pagination:{_total:"100",_page:"6"},quote:{_quote:"Hello World"},select:{_options:"[{'label':'Herr','value':0},{'label':'Frau','value':1}]"},"skip-nav":{_links:"[{'_label':'Navigation','_href':'#nav'},{'_label':'Inhalt','_href':'#main'},{'_label':'Kontakt','_href':'#kontakt'},{'_label':'Links','_href':'#links'}]"},table:{_headers:'{"horizontal":[[{"label":"Montag","key":"montag"}]]}',_data:'[{"montag":"Zelle1"},{"montag":"Zelle2"}]',_pagination:'{"page":2}'}};function v(e){const[n,t]=(0,s.useState)(function(){const e={};return Object.values(i.Q).forEach((n=>{const t=n.name.replace("kol-","");e[t]={defaultValues:[]},n.attributes.forEach((n=>{void 0!==n.defaultValue&&(e[t][n.name]=n.defaultValue.replace(/'/g,""),e[t].defaultValues.push(n.name)),void 0!==j[t]?.[n.name]&&(e[t][n.name]=j[t][n.name])})),n.slots.forEach((n=>{const i=`slot-${n.name||"default"}`,l=j[t]?.[i];l&&(e[t][i]=l)}))})),e}()),[o,d]=(0,s.useState)("badge");(0,s.useEffect)((()=>{e.component&&d(e.component.replace("kol-",""))}),[e.component]),(0,s.useEffect)((()=>{!!i.Q.find((e=>e.name===`kol-${o}`))?.attributes.find((e=>"_label"===e.name))&&!n[o]?._label&&p("_label","Label-Text");!!i.Q.find((e=>e.name===`kol-${o}`))?.attributes.find((e=>"_heading"===e.name))&&!n[o]?._heading&&p("_heading","Heading-Text")}),[o]);const c=(0,s.useMemo)((()=>n[o]||{}),[n,o]);function p(e,n){t((t=>{const i={...t[o],[e]:n,defaultValues:t[o].defaultValues.filter((n=>n!==e))};return{...t,[o]:i}}))}const h=Object.values(i.Q).find((e=>e.name===`kol-${o}`));return(0,a.jsx)(r.c,{children:()=>(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(l.cX,{class:"mb-2",_label:"Beta",_color:"#b00"}),(0,a.jsxs)("div",{className:"grid lg:grid-cols-3 gap-2",children:[(0,a.jsxs)(l._,{className:"col-span-2",_label:"Wechselnavigation zwischen Viewer und Code",_tabs:[{_label:"Viewer"},{_label:"Code"}],children:[(0,a.jsx)("div",{className:"p-2",children:(0,a.jsx)(g,{tag:o,params:c})}),(0,a.jsx)("div",{className:"lg:col-span-2",children:(0,a.jsx)(x,{params:c,tag:o})})]}),(0,a.jsxs)("div",{className:"grid gap-4 p-2 border-0 border-l border-solid",children:[(0,a.jsx)(l.ch,{_level:3,_label:"Konfigurator"}),(0,a.jsxs)("div",{children:[(0,a.jsx)(l.ch,{_level:4,_label:"Properties"}),(0,a.jsxs)("div",{className:"max-h-96 p-2 overflow-auto mb-4",children:[h&&h.attributes.map((e=>(0,a.jsx)(a.Fragment,{children:!_.includes(e.name)&&!e.description.startsWith("Deprecated:")&&(0,a.jsx)(u,{attribute:e,update:p,value:c[e.name]},e.name)}))),h&&0===h.attributes.length&&(0,a.jsx)("span",{className:"text-gray-500",children:"Keine Properties vorhanden"})]}),(0,a.jsx)(l.ch,{_level:4,_label:"Slots"}),(0,a.jsxs)("div",{className:"max-h-56 p-2 overflow-auto",children:[h&&h.slots.map((e=>(0,a.jsx)(f,{description:e.description,name:e.name||"default",update:p,value:c["slot-"+(e.name||"default")]},e.name))),h&&0===h.slots.length&&(0,a.jsx)("span",{className:"text-gray-500",children:"Keine Slots vorhanden"})]})]})]})]})]})})}}}]);