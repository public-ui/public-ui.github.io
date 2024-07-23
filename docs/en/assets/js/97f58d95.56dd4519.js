"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[12972],{73464:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>u,contentTitle:()=>d,default:()=>x,frontMatter:()=>o,metadata:()=>c,toc:()=>h});var l=i(76776),t=i(108);function r(e){const n={code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.M)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(n.p,{children:["Die ",(0,l.jsx)(n.strong,{children:"LinkGroup"}),"-Komponente bildet einen umfassenden Container f\xfcr eine vertikale oder horizontale Liste von Links. Sie rendert eine auf Barrierefreiheit optimierte Liste von Links, die als Text, als Icon oder auch in Kombination ausgegeben werden kann. M\xf6glich ist auch die Ausgabe von versteckten Links."]}),"\n",(0,l.jsx)(n.h2,{id:"konstruktion",children:"Konstruktion"}),"\n",(0,l.jsx)(n.h3,{id:"hinweis-zur-version-3",children:"Hinweis zur Version 3"}),"\n",(0,l.jsxs)(n.p,{children:["Die ",(0,l.jsx)(n.code,{children:"KolLinkGroup"})," Komponente der Version 3 wurde als veraltet markiert (",(0,l.jsx)(n.code,{children:"deprecated"}),"), da sie keinen wesentlichen Beitrag zur Verbesserung der Barrierefreiheit bietet."]}),"\n",(0,l.jsxs)(n.h3,{id:"hinweis-zum-nav-tag",children:["Hinweis zum ",(0,l.jsx)(n.code,{children:"nav"})," Tag"]}),"\n",(0,l.jsxs)(n.p,{children:["Die Verwendung des ",(0,l.jsx)(n.code,{children:"nav"})," Tags wurde aus der ",(0,l.jsx)(n.code,{children:"KolLinkGroup"})," Komponente entfernt, da er keinen Beitrag f\xfcr die Barrierefreiheit leistet."]}),"\n",(0,l.jsx)(n.h3,{id:"code",children:"Code"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-html",children:"<kol-link-group\n\t_label=\"Einfache LinkGroup\"\n\t_links=\"[{'_label':'Link 1','_href':'https://www.w3.org'},{'_label':'Link 2','_href':'https://www.w3.org'},{'_label':'Link 3','_href':'https://www.w3.org'}]\"\n\t_list-style-type=\"disc\"\n\t_orientation=\"'vertical\"\n></kol-link-group>\n"})}),"\n",(0,l.jsx)(n.h3,{id:"beispiel",children:"Beispiel"}),"\n",(0,l.jsx)("kol-link-group",{_label:"Einfache LinkGroup",_links:"[{'_label':'Link 1','_href':'https://www.w3.org'},{'_label':'Link 2','_href':'https://www.w3.org'},{'_label':'Link 3','_href':'https://www.w3.org'}]","_list-style-type":"disc",_orientation:"'vertical"}),"\n",(0,l.jsx)(n.h2,{id:"verwendung",children:"Verwendung"}),"\n",(0,l.jsx)(n.h3,{id:"links",children:"Links"}),"\n",(0,l.jsxs)(n.p,{children:["Die auszugebenden Links werden als JSON-Objekt an das Attribut ",(0,l.jsx)(n.strong,{children:(0,l.jsx)(n.code,{children:"_links"})})," \xfcbergeben. Dort k\xf6nnen die Attribute des ",(0,l.jsx)("kol-link",{_href:"",_label:"Links"})," \xfcbergeben werden, ",(0,l.jsx)(n.strong,{children:(0,l.jsx)(n.code,{children:"_href"})})," und ",(0,l.jsx)(n.strong,{children:(0,l.jsx)(n.code,{children:"_label"})})," sind jedoch Pflicht."]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-js",children:"[\n\t{ _label: 'Link 1', _href: 'https://www.w3.org' },\n\t{ _label: 'Link 2', _href: 'https://www.w3.org' },\n\t{ _label: 'Link 3', _href: 'https://www.w3.org' },\n];\n"})}),"\n",(0,l.jsx)(n.h3,{id:"ausrichtung",children:"Ausrichtung"}),"\n",(0,l.jsxs)(n.p,{children:["\xdcber das Attribut ",(0,l.jsx)(n.strong,{children:(0,l.jsx)(n.code,{children:"_orientation"})})," kann die Ausrichtung der LinkGroup bestimmt werden. M\xf6gliche Werte sind ",(0,l.jsx)(n.code,{children:"horizontal"})," und ",(0,l.jsx)(n.code,{children:"vertical"})," (Standard)."]}),"\n",(0,l.jsx)(n.h3,{id:"list-style-type",children:"List-Style-Type"}),"\n",(0,l.jsxs)(n.p,{children:["\xdcber das Attribut ",(0,l.jsx)(n.strong,{children:(0,l.jsx)(n.code,{children:"_list-style-type"})})," kann bestimmt werden, mit welchem Symbol die einzelnen Zeilen der Group dargestellt werden sollen. Es stehen diese vier M\xf6glichkeiten zur Auswahl:"]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:"disc"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:"circle"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:"square"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:"none"})}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"anwendungsf\xe4lle",children:"Anwendungsf\xe4lle"}),"\n",(0,l.jsx)(n.h4,{id:"linkgroup-innerhalb-eines-flie\xdftextes",children:"LinkGroup innerhalb eines Flie\xdftextes"}),"\n",(0,l.jsxs)("p",{children:[(0,l.jsx)(n.p,{children:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea optio deleniti fuga quos molestias, voluptate nobis\nnemo, incidunt excepturi facilis, amet ducimus minus quae corporis eligendi cum distinctio. Fugit, repellendus."}),(0,l.jsx)("kol-link-group",{_label:"LinkGroup innerhalb eines Flie\xdftextes",_links:"[{'_label':'Link 1'},{'_label':'Link 2'},{'_label':'Link 3'}]"}),(0,l.jsx)(n.p,{children:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea optio deleniti fuga quos molestias, voluptate nobis\nnemo, incidunt excepturi facilis, amet ducimus minus quae corporis eligendi cum distinctio. Fugit, repellendus."})]}),"\n",(0,l.jsx)(n.h2,{id:"barrierefreiheit",children:"Barrierefreiheit"}),"\n",(0,l.jsx)(n.h3,{id:"tastatursteuerung",children:"Tastatursteuerung"}),"\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"Taste"}),(0,l.jsx)(n.th,{children:"Funktion"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"Tab"})}),(0,l.jsx)(n.td,{children:"Fokussiert das erste Element der LinkGroup."})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"Enter"})}),(0,l.jsx)(n.td,{children:"Ruft den hinterlegten Link auf."})]})]})]}),"\n",(0,l.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"Property"}),(0,l.jsx)(n.th,{children:"Attribute"}),(0,l.jsx)(n.th,{children:"Description"}),(0,l.jsx)(n.th,{children:"Type"}),(0,l.jsx)(n.th,{children:"Default"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"_label"})}),(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"_label"})}),(0,l.jsx)(n.td,{children:"Defines the visible or semantic label of the component (e.g. aria-label, label, headline, caption, summary, etc.)."}),(0,l.jsxs)(n.td,{children:[(0,l.jsx)(n.code,{children:"string"})," | ",(0,l.jsx)(n.code,{children:"undefined"})]}),(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"undefined"})})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsxs)(n.td,{children:[(0,l.jsx)(n.code,{children:"_links"})," ",(0,l.jsx)(n.em,{children:"(required)"})]}),(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"_links"})}),(0,l.jsx)(n.td,{children:"Defines the list of links to render."}),(0,l.jsxs)(n.td,{children:[(0,l.jsx)(n.code,{children:"LinkProps[]"})," | ",(0,l.jsx)(n.code,{children:"string"})]}),(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"undefined"})})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"_listStyleType"})}),(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"_list-style-type"})}),(0,l.jsx)(n.td,{children:"Gibt den List-Style-Typen f\xfcr ungeordnete Listen aus. Wird bei horizontalen LinkGroups als Trenner verwendet"}),(0,l.jsxs)(n.td,{children:[(0,l.jsx)(n.code,{children:'"circle"'})," | ",(0,l.jsx)(n.code,{children:'"decimal"'})," | ",(0,l.jsx)(n.code,{children:'"decimal-leading-zero"'})," | ",(0,l.jsx)(n.code,{children:'"disc"'})," | ",(0,l.jsx)(n.code,{children:'"lower-alpha"'})," | ",(0,l.jsx)(n.code,{children:'"lower-greek"'})," | ",(0,l.jsx)(n.code,{children:'"lower-latin"'})," | ",(0,l.jsx)(n.code,{children:'"lower-roman"'})," | ",(0,l.jsx)(n.code,{children:'"none"'})," | ",(0,l.jsx)(n.code,{children:'"square"'})," | ",(0,l.jsx)(n.code,{children:'"upper-alpha"'})," | ",(0,l.jsx)(n.code,{children:'"upper-latin"'})," | ",(0,l.jsx)(n.code,{children:'"upper-roman"'})," | ",(0,l.jsx)(n.code,{children:"undefined"})]}),(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"undefined"})})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"_orientation"})}),(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"_orientation"})}),(0,l.jsx)(n.td,{children:"Defines whether the orientation of the component is horizontal or vertical."}),(0,l.jsxs)(n.td,{children:[(0,l.jsx)(n.code,{children:'"horizontal"'})," | ",(0,l.jsx)(n.code,{children:'"vertical"'})," | ",(0,l.jsx)(n.code,{children:"undefined"})]}),(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"'vertical'"})})]})]})]}),"\n",(0,l.jsx)(n.hr,{})]})}function s(e={}){const{wrapper:n}={...(0,t.M)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(r,{...e})}):r(e)}i(37704);var a=i(54592);const o={title:"LinkGroup",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die LinkGroup-Komponente.",tags:["LinkGroup","Beschreibung","Spezifikation","Beispiele"]},d=void 0,c={id:"components/link-group",title:"LinkGroup",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die LinkGroup-Komponente.",source:"@site/versioned_docs/version-2.1/30-components/link-group.mdx",sourceDirName:"30-components",slug:"/components/link-group",permalink:"/en/docs/components/link-group",draft:!1,unlisted:!1,tags:[{inline:!0,label:"LinkGroup",permalink:"/en/docs/tags/link-group"},{inline:!0,label:"Beschreibung",permalink:"/en/docs/tags/beschreibung"},{inline:!0,label:"Spezifikation",permalink:"/en/docs/tags/spezifikation"},{inline:!0,label:"Beispiele",permalink:"/en/docs/tags/beispiele"}],version:"2.1",frontMatter:{title:"LinkGroup",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die LinkGroup-Komponente.",tags:["LinkGroup","Beschreibung","Spezifikation","Beispiele"]},sidebar:"tutorialSidebar",previous:{title:"LinkButton",permalink:"/en/docs/components/link-button"},next:{title:"Link",permalink:"/en/docs/components/link"}},u={},h=[{value:"Konstruktion",id:"konstruktion",level:2},{value:"Hinweis zur Version 3",id:"hinweis-zur-version-3",level:3},{value:"Hinweis zum <code>nav</code> Tag",id:"hinweis-zum-nav-tag",level:3},{value:"Code",id:"code",level:3},{value:"Beispiel",id:"beispiel",level:3},{value:"Verwendung",id:"verwendung",level:2},{value:"Links",id:"links",level:3},{value:"Ausrichtung",id:"ausrichtung",level:3},{value:"List-Style-Type",id:"list-style-type",level:3},{value:"Anwendungsf\xe4lle",id:"anwendungsf\xe4lle",level:3},{value:"LinkGroup innerhalb eines Flie\xdftextes",id:"linkgroup-innerhalb-eines-flie\xdftextes",level:4},{value:"Barrierefreiheit",id:"barrierefreiheit",level:2},{value:"Tastatursteuerung",id:"tastatursteuerung",level:3},{value:"Properties",id:"properties",level:2},{value:"Live-Editor",id:"live-editor",level:2}];function p(e){const n={h2:"h2",...(0,t.M)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(s,{}),"\n",(0,l.jsx)(n.h2,{id:"live-editor",children:"Live-Editor"}),"\n",(0,l.jsx)(a.o,{component:"link-group"})]})}function x(e={}){const{wrapper:n}={...(0,t.M)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(p,{...e})}):p(e)}},37704:(e,n,i)=>{i.d(n,{Q:()=>d});var l=i(64992),t=i(80924),r=i(76776);const s=function(e,n,i,l,t){return void 0===t&&(t="editor"),`${e}&module=${l}&initialpath=%23%2F${n}%2F${i}&view=${t}`},a={width:"100%",height:"500px",border:"0",overflow:"hidden"},o=e=>{let{url:n}=e;return(0,r.jsxs)("div",{className:"m-2",children:[(0,r.jsx)("iframe",{src:n,style:a,title:"kolibri-public-ui-code-samples",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}),(0,r.jsx)(l.GQ,{_href:n,_label:"",_target:"codesandbox",children:(0,r.jsx)("img",{alt:"CodeSandbox-Schalter",src:"https://codesandbox.io/static/img/play-codesandbox.svg"})})]})},d=e=>{let{component:n,sample:i}=e;const[d,c]=(0,t.useState)("Preview"),u="https://codesandbox.io/embed/kolibri-public-ui-react-samples-w5u37c?fontsize=14&hidenavigation=1&autoresize=1&theme=dark",h=`%2Fsrc%2Fsamples%2F${n}%2F${i}`,p={angular:`${h}.html`,react:`${h}.tsx`,vue:`${h}.vue`,webcomponent:`${h}.html`},x=`/sample-react/#/${n}/${i}?hideMenus`,b={onSelect:(e,n)=>{switch(n){case 1:c((()=>"Angular"));break;case 2:c((()=>"React"));break;case 3:c((()=>"Vue"));break;case 4:c((()=>"Web Component"));break;default:c((()=>"Preview"))}}};return(0,r.jsxs)(l._,{className:"w-full",_label:"Code-Beispiel",_on:b,_tabs:[{_label:"Vorschau"},{_disabled:!0,_label:"Angular"},{_label:"React"},{_disabled:!0,_label:"Vue"},{_disabled:!0,_label:"Web Component"}],children:[(0,r.jsx)("div",{children:"Preview"===d&&(0,r.jsx)("iframe",{src:x,style:a,title:"kolibri-public-ui-code-samples",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"})}),(0,r.jsx)("div",{children:"Angular"===d&&(0,r.jsx)(o,{url:s(u,n,i,p.angular)})}),(0,r.jsx)("div",{children:"React"===d&&(0,r.jsx)(o,{url:s(u,n,i,p.react)})}),(0,r.jsx)("div",{children:"Vue"===d&&(0,r.jsx)(o,{url:s(u,n,i,p.vue)})}),(0,r.jsx)("div",{children:"Web Component"===d&&(0,r.jsx)(o,{url:s(u,n,i,p.webcomponent)})})]})}},54592:(e,n,i)=>{i.d(n,{o:()=>k});var l=i(592),t=i(64992),r=i(80924),s=i(73700),a=i(76776);function o(e){const{label:n,name:i,update:l,value:s}=e;return(0,r.useEffect)((()=>{s||l(i,"#000000")}),[]),(0,a.jsx)(t.eK,{_label:"",_on:{onInput:(e,n)=>l(i,n)},_value:s,children:(0,a.jsx)("span",{slot:"expert",children:n})})}function d(e){const{attribute:n,label:i,update:l}=e,[s,o]=(0,r.useState)(""),[d,c]=(0,r.useState)(""),[u,h]=(0,r.useState)(""),[p,x]=(0,r.useState)("");let b=!1,m=!1,j=!1,g=!1;n.type.includes("KoliBriAllIcon")?(b=!0,m=!0,j=!0,g=!0):(n.type.includes("KoliBriVerticalIcon")&&(j=!0,g=!0),n.type.includes("KoliBriHorizontalIcon")&&(b=!0,m=!0)),(0,r.useEffect)((()=>{if(!s||d||u||p){const e={};s&&(e.left=`codicon codicon-${s}`),d&&(e.right=`codicon codicon-${d}`),u&&(e.top=`codicon codicon-${u}`),p&&(e.bottom=`codicon codicon-${p}`),Object.keys(e).length&&l(n.name,JSON.stringify(e))}else l(n.name,`codicon codicon-${s}`)}),[s,d,u,p]);const f=["home","arrow-up","arrow-right","arrow-down","arrow-left"];return(0,a.jsxs)("div",{children:[i,b?(0,a.jsx)(t.Si,{_label:"Links",children:(0,a.jsx)("div",{className:"flex flex-wrap gap-2 p-2",children:f.map((e=>(0,a.jsx)(t.qC,{_icons:`codicon codicon-${e}`,_hideLabel:!0,_label:"",_on:{onClick:()=>o(e)}},e)))})}):"",m?(0,a.jsx)(t.Si,{_label:"Rechts",children:(0,a.jsx)("div",{className:"flex flex-wrap gap-2 p-2",children:f.map((e=>(0,a.jsx)(t.qC,{_icons:`codicon codicon-${e}`,_hideLabel:!0,_label:"",_on:{onClick:()=>c(e)}},e)))})}):"",j?(0,a.jsx)(t.Si,{_label:"Oben",children:(0,a.jsx)("div",{className:"flex flex-wrap gap-2 p-2",children:f.map((e=>(0,a.jsx)(t.qC,{_icons:`codicon codicon-${e}`,_hideLabel:!0,_label:"",_on:{onClick:()=>h(e)}},e)))})}):"",g?(0,a.jsx)(t.Si,{_label:"Unten",children:(0,a.jsx)("div",{className:"flex flex-wrap gap-2 p-2",children:f.map((e=>(0,a.jsx)(t.qC,{_icons:`codicon codicon-${e}`,_hideLabel:!0,_label:"",_on:{onClick:()=>x(e)}},e)))})}):""]})}function c(e){const{name:n,label:i,types:l,update:r,value:s}=e,o=[];function d(e){return{label:e,value:e}}return l.includes("undefined")?(o.push({label:"-",value:void 0}),o.push(...l.filter((e=>"undefined"!==e)).map(d))):o.push(...l.filter((e=>"undefined"!==e)).map(d)),(0,a.jsx)(t.qy,{className:"my-2",_label:"",_options:JSON.stringify(o),_on:{onInput:(e,i)=>r(n,i[0])},_value:s?[s]:void 0,children:(0,a.jsx)("span",{slot:"expert",children:i})})}function u(e){const{attribute:n,update:i,value:l}=e,s=(0,r.useMemo)((()=>{let e=n.type.replace(/\\?"/g,"").split(" | ");return e=e.filter((e=>"KoliBriAllIcon ignorieren"!==e)),1===e.length?e[0]:e.includes("string")?"string":e.includes("number")?"number":e.includes("boolean")?"boolean":""}),[n]),u=(0,r.useMemo)((()=>{const e=n.type.split(" | ").map((e=>e.replace(/\\?"/g,""))),r=(0,a.jsx)(t.s1,{_label:n.description,children:n.name});switch(n.name){case"_color":return(0,a.jsx)(o,{name:n.name,label:r,update:i,value:l});case"_icons":return(0,a.jsx)(d,{attribute:n,label:r,update:i,value:l});default:switch(s){case"string":return(0,a.jsx)(t.Uh,{className:"my-2",_label:"",_on:{onInput:(e,l)=>i(n.name,l)},_value:l||"",children:(0,a.jsx)("span",{slot:"expert",children:r})});case"number":return(0,a.jsx)(t.QL,{className:"my-2",_label:"",_on:{onInput:(e,l)=>i(n.name,l)},_value:l,children:(0,a.jsx)("span",{slot:"expert",children:r})});case"boolean":return(0,a.jsx)(t.Q7,{className:"my-2",_checked:!0===l,_label:"",_on:{onInput:(e,l)=>i(n.name,l)},_variant:"switch",_value:!0,children:(0,a.jsx)("span",{slot:"expert",children:r})});default:return e.length>1?(0,a.jsx)(c,{label:r,name:n.name,types:e,update:i,value:l}):(0,a.jsxs)("p",{children:["Attribut: '",n.name,"'",(0,a.jsx)("br",{}),"Typ: '",n.type,"'"]})}}}),[n,l]);return(0,a.jsx)(a.Fragment,{children:u})}var h=i(63136),p=i(28256),x=i(39452),b=i.n(x);function m(e){const{tag:n,params:i}=e,l=Object.entries(i).filter((e=>"defaultValues"!==e[0]));let t="";const s=(0,r.useMemo)((()=>{let e="";return l.filter((e=>e[0].startsWith("slot-"))).forEach((n=>{const i=n[1],l=n[0].split("-")[1];if(i)if(i.match(/^<.*?>/)?.length){const n=i.indexOf(">");e+=i.substring(0,n)+` slot="${l}"`+i.substring(n)}else e+=`<div slot="${l}">${i}</div>`})),e}),[i]),o=l.filter((e=>!e[0].startsWith("slot-"))).filter((e=>!i.defaultValues.includes(e[0])));for(const[r,a]of o)if(a){let e="";switch(typeof a){case"string":e=` ${r}="${a.replace(/"/g,"'")}"`;break;case"number":e=` ${r}="${a.toString()}"`;break;case"boolean":e=a?` ${r}`:"";break;case"object":e=` ${r}="${JSON.stringify(a)}"`;break;default:e="Never give up hope, one day everything will be fixed."}t+=e}const d=`<kol-${n}${t}>${s}</kol-${n}>`;let c;try{c=(0,p.format)(d,{plugins:[b()],printWidth:80}).replace(/;\n$/,"")}catch(u){c=`\x3c!-- Formatter-Error: Slot-Markup is not valid HTML for formatting. --\x3e\n${d}`}return(0,a.jsx)("div",{className:"h-48 rounded-md overflow-hidden",children:(0,a.jsx)(h.cp,{defaultLanguage:"html",height:"100%",options:{automaticLayout:!0,fontSize:16,lineNumbers:"off",readOnly:!0},value:c})})}function j(e){const n=Object.fromEntries(Object.entries(e.params).filter((e=>{let[n]=e;return!n.startsWith("slot-")}))),i=Object.entries(e.params).filter((e=>{let[n]=e;return n.startsWith("slot-")})),l={abbr:t.s1,accordion:t.IP,alert:t.mW,avatar:t.aq,badge:t.cX,breadcrumb:t.If,button:t.qC,"button-group":t.Os,"button-link":t.u_,card:t.Yh,details:t.Si,form:t.OO,heading:t.ch,icon:t.SA,image:t.iu,"indented-text":t.MV,"input-checkbox":t.Q7,"input-color":t.eK,"input-date":t.QZ,"input-email":t.kN,"input-file":t.Ex,"input-number":t.QL,"input-password":t.EH,"input-radio":t.wJ,"input-range":t.Ef,"input-text":t.Uh,kolibri:t.aY,link:t.GQ,"link-button":t._k,"link-group":t.O_,logo:t.ae,modal:t.cT,nav:t.Y4,pagination:t.kj,progress:t.O0,quote:t.SY,select:t.qy,"skip-nav":t.Ig,spin:t.kP,"split-button":t.a,symbol:t.OM,table:t.Y9,tabs:t._,textarea:t.DG,version:t.k1}[e.tag];return l?(0,a.jsx)(l,{...n,children:i.map((e=>(0,a.jsx)("div",{slot:e[0].replace("slot-","").replace("default",""),dangerouslySetInnerHTML:{__html:e[1]}},e[0])))}):(0,a.jsx)("div",{children:"Tag not implemented"})}function g(e){const{description:n,name:i,update:l,value:t}=e;return(0,a.jsxs)("div",{className:"bg-gray-100 my-2 rounded-lg p-2 border border-gray-300 border-solid",children:[(0,a.jsx)("b",{children:i||"default"}),": ",n,(0,a.jsx)("br",{}),(0,a.jsx)(h.GW,{defaultLanguage:"html",height:"5em",onChange:e=>l(`slot-${i}`,e||""),options:{automaticLayout:!0,fontSize:16,lineNumbers:"off"},value:t})]})}const f=["_smart-button","_icon-align"],_={abbr:{"slot-default":"Abbr"},accordion:{"slot-default":"Accordion content"},tabs:{_tabs:'[{"_label":"Tab 1"},{"_label":"Tab 2", "_on": {"onClose": true} },{"_label":"Tab 3"}]'},breadcrumb:{_links:"[{'_label':'Startseite','_href':'#/'},{'_label':'Unterseite der Startseite','_href':'#/unterseite'},{'_label':'Unterseite der Unterseite','_href':'#/unterseite/unterseite'}]"},form:{"_required-text":"Bitte alle Felder ausf\xfcllen."},image:{_src:"https://placehold.co/100x100/cc006e/white"},"link-group":{_links:"[{'_label':'Startseite','_href':'#/'},{'_label':'Unterseite der Startseite','_href':'#/unterseite'},{'_label':'Unterseite der Unterseite','_href':'#/unterseite/unterseite'}]"},nav:{_links:"[{'_label':'Startseite','_href':'#/'},{'_label':'Unterseite der Startseite','_href':'#/unterseite'},{'_label':'Unterseite der Unterseite','_href':'#/unterseite/unterseite'}]"},pagination:{_total:"100",_page:"6"},quote:{_quote:"Hello World"},select:{_options:"[{'label':'Herr','value':0},{'label':'Frau','value':1}]"},"skip-nav":{_links:"[{'_label':'Navigation','_href':'#nav'},{'_label':'Inhalt','_href':'#main'},{'_label':'Kontakt','_href':'#kontakt'},{'_label':'Links','_href':'#links'}]"},table:{_headers:'{"horizontal":[[{"label":"Montag","key":"montag"}]]}',_data:'[{"montag":"Zelle1"},{"montag":"Zelle2"}]',_pagination:'{"page":2}'}};function k(e){const[n,i]=(0,r.useState)(function(){const e={};return Object.values(l.Q).forEach((n=>{const i=n.name.replace("kol-","");e[i]={defaultValues:[]},n.attributes.forEach((n=>{void 0!==n.defaultValue&&(e[i][n.name]=n.defaultValue.replace(/'/g,""),e[i].defaultValues.push(n.name)),void 0!==_[i]?.[n.name]&&(e[i][n.name]=_[i][n.name])})),n.slots.forEach((n=>{const l=`slot-${n.name||"default"}`,t=_[i]?.[l];t&&(e[i][l]=t)}))})),e}()),[o,d]=(0,r.useState)("badge");(0,r.useEffect)((()=>{e.component&&d(e.component.replace("kol-",""))}),[e.component]),(0,r.useEffect)((()=>{!!l.Q.find((e=>e.name===`kol-${o}`))?.attributes.find((e=>"_label"===e.name))&&!n[o]?._label&&h("_label","Label-Text");!!l.Q.find((e=>e.name===`kol-${o}`))?.attributes.find((e=>"_heading"===e.name))&&!n[o]?._heading&&h("_heading","Heading-Text")}),[o]);const c=(0,r.useMemo)((()=>n[o]||{}),[n,o]);function h(e,n){i((i=>{const l={...i[o],[e]:n,defaultValues:i[o].defaultValues.filter((n=>n!==e))};return{...i,[o]:l}}))}const p=Object.values(l.Q).find((e=>e.name===`kol-${o}`));return(0,a.jsx)(s.c,{children:()=>(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.cX,{class:"mb-2",_label:"Beta",_color:"#b00"}),(0,a.jsxs)("div",{className:"grid lg:grid-cols-3 gap-2",children:[(0,a.jsxs)(t._,{className:"col-span-2",_label:"Wechselnavigation zwischen Viewer und Code",_tabs:[{_label:"Viewer"},{_label:"Code"}],children:[(0,a.jsx)("div",{className:"p-2",children:(0,a.jsx)(j,{tag:o,params:c})}),(0,a.jsx)("div",{className:"lg:col-span-2",children:(0,a.jsx)(m,{params:c,tag:o})})]}),(0,a.jsxs)("div",{className:"grid gap-4 p-2 border-0 border-l border-solid",children:[(0,a.jsx)(t.ch,{_level:3,_label:"Konfigurator"}),(0,a.jsxs)("div",{children:[(0,a.jsx)(t.ch,{_level:4,_label:"Properties"}),(0,a.jsxs)("div",{className:"max-h-96 p-2 overflow-auto mb-4",children:[p&&p.attributes.map((e=>(0,a.jsx)(a.Fragment,{children:!f.includes(e.name)&&!e.description.startsWith("Deprecated:")&&(0,a.jsx)(u,{attribute:e,update:h,value:c[e.name]},e.name)}))),p&&0===p.attributes.length&&(0,a.jsx)("span",{className:"text-gray-500",children:"Keine Properties vorhanden"})]}),(0,a.jsx)(t.ch,{_level:4,_label:"Slots"}),(0,a.jsxs)("div",{className:"max-h-56 p-2 overflow-auto",children:[p&&p.slots.map((e=>(0,a.jsx)(g,{description:e.description,name:e.name||"default",update:h,value:c["slot-"+(e.name||"default")]},e.name))),p&&0===p.slots.length&&(0,a.jsx)("span",{className:"text-gray-500",children:"Keine Slots vorhanden"})]})]})]})]})]})})}}}]);