"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[21292],{98336:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>h,contentTitle:()=>o,default:()=>x,frontMatter:()=>d,metadata:()=>c,toc:()=>u});var i=t(76776),r=t(108);function l(e){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",hr:"hr",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.M)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"Synonyme: Img, Thumbnail"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)("kol-badge",{_label:"untested"})," Diese neue Komponente wird als ungetestet markiert, da der vollst\xe4ndige Barrierefreiheitstest noch aussteht. Der vollst\xe4ndige Test kann bei neuen Komponenten und Funktionalit\xe4ten auch erst nach einem abgeschlossenen Release erfolgen."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Die ",(0,i.jsx)(n.strong,{children:"Image"}),"-Komponente dient dazu, Bilder darzustellen."]}),"\n",(0,i.jsx)(n.h2,{id:"konstruktion",children:"Konstruktion"}),"\n",(0,i.jsxs)(n.p,{children:["Die Komponente ",(0,i.jsx)(n.strong,{children:"Image"})," wird \xfcber das HTML-Tag ",(0,i.jsx)(n.code,{children:"<kol-image>"})," erzeugt."]}),"\n",(0,i.jsx)(n.h3,{id:"code",children:"Code"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-html",children:'<kol-image _src="url-zum-bild.jpg" _alt="Beschreibung des Bildes"></kol-image>\n<kol-image _src="nur-dekoratives-bild.jpg" _alt=""></kol-image>\n<kol-image _src="hintergrundbild-der-hero-sektion.jpg" _alt="" _loading="eager"></kol-image>\n'})}),"\n",(0,i.jsx)(n.h3,{id:"beispiele",children:"Beispiele"}),"\n",(0,i.jsx)("kol-image",{_src:"https://placehold.co/100x100/cc006e/white",_alt:"Beispielbild: 100 \xd7 100"}),"\n",(0,i.jsx)(n.h2,{id:"verwendung",children:"Verwendung"}),"\n",(0,i.jsx)(n.h3,{id:"bilder-in-unterschiedlicher-aufl\xf6sung-undoder-seitenverh\xe4ltnis",children:"Bilder in unterschiedlicher Aufl\xf6sung und/oder Seitenverh\xe4ltnis"}),"\n",(0,i.jsxs)(n.p,{children:["Mittels ",(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"_srcset"})})," (und ",(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"_sizes"})}),") k\xf6nnen unterschiedliche Bilder f\xfcr unterschiedliche Aufl\xf6sungen und Pixeldichten (des Displays) hinterlegt werden, um auf gro\xdfen Bildschirmen scharfe Bilder zu liefern und auf kleinen Monitoren nicht unn\xf6tig Bandbreite zu verbrauchen.\nDes Weiteren k\xf6nnen mittels ",(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"_srcset"})})," auch verschiedene Dateiformate angegeben werden, um f\xfcr moderne Browser Bandbreite zu sparen, allerdings \xe4ltere Ger\xe4te weiterhin zu unterst\xfctzen.\nAuch bei Verwendung von ",(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"_srcset"})})," sollte ",(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"_src"})})," genutzt werden, da dies von den Browsern als letzte Option verwendet wird, sofern a) ",(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"srcset"})})," nicht unterst\xfctzt wird, oder b) dort kein passendes Bild gefunden wurde."]}),"\n",(0,i.jsx)("kol-link",{_href:"https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/srcset",_target:"_blank",_label:"MDN Artikel zu srcset"}),"\n",(0,i.jsx)("kol-link",{_href:"https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/sizes",_target:"_blank",_label:"MDN Artikel zu sizes"}),"\n",(0,i.jsxs)(n.p,{children:["F\xfcr weitere Infos zu ",(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"_srcset"})})," siehe ",(0,i.jsx)(n.a,{href:"#links-und-referenzen",children:"Links und Referenzen"})]}),"\n",(0,i.jsx)(n.h3,{id:"ladeverhalten",children:"Ladeverhalten"}),"\n",(0,i.jsxs)(n.p,{children:["Das Attribut ",(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"_loading"})})," ist optional. Gesetzt werden kann hier entweder ",(0,i.jsx)(n.code,{children:"eager"})," oder ",(0,i.jsx)(n.code,{children:"lazy"}),", sofern ungesetzt wird ",(0,i.jsx)(n.code,{children:"lazy"})," verwendet.\n",(0,i.jsx)(n.code,{children:"eager"})," sorgt f\xfcr ein Laden des Bildes direkt beim Betreten der Seite, bei ",(0,i.jsx)(n.code,{children:"lazy"})," l\xe4dt der Browser das Bild erst, kurz bevor es sichtbar wird. In der Regel muss ",(0,i.jsx)(n.code,{children:"eager"})," nicht gesetzt werden, setzen Sie es nur sofern Ladeverz\xf6gerungen auftreten, oder das Bild sich sicher im, bei Betreten der Seite, sichtbaren Bereich befindet. (z.B.: Logo im Header oder Hero)"]}),"\n",(0,i.jsx)("kol-link",{_href:"https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/loading",_target:"_blank",_label:"MDN Artikel zu loading"}),"\n",(0,i.jsx)(n.h2,{id:"barrierefreiheit",children:"Barrierefreiheit"}),"\n",(0,i.jsx)(n.h3,{id:"alternativtext",children:"Alternativtext"}),"\n",(0,i.jsxs)(n.p,{children:["Das Attribut ",(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"_alt"})})," ist verpflichtend, kann jedoch bei rein dekorativen Bildern leer (",(0,i.jsx)(n.code,{children:'_alt=""'}),") gelassen werden.\nDiese Beschreibung wird von Screenreadern vorgelesen und von Browsern angezeigt, wenn das Bild nicht geladen werden kann/soll."]}),"\n",(0,i.jsx)(n.h2,{id:"links-und-referenzen",children:"Links und Referenzen"}),"\n",(0,i.jsxs)(n.p,{children:["Ausf\xfchrliche Erkl\xe4rung zu ",(0,i.jsx)(n.code,{children:"_srcset"})," und ",(0,i.jsx)(n.code,{children:"_sizes"}),": ",(0,i.jsx)("kol-link",{_href:"https://www.mediaevent.de/html/srcset.html",_target:"_blank"})]}),"\n",(0,i.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Property"}),(0,i.jsx)(n.th,{children:"Attribute"}),(0,i.jsx)(n.th,{children:"Description"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{children:"Default"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsxs)(n.td,{children:[(0,i.jsx)(n.code,{children:"_alt"})," ",(0,i.jsx)(n.em,{children:"(required)"})]}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"_alt"})}),(0,i.jsx)(n.td,{children:"Setzt den alternativen Text."}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"string"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"undefined"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"_loading"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"_loading"})}),(0,i.jsx)(n.td,{children:"Defines the loading mode for the image."}),(0,i.jsxs)(n.td,{children:[(0,i.jsx)(n.code,{children:'"eager"'})," | ",(0,i.jsx)(n.code,{children:'"lazy"'})," | ",(0,i.jsx)(n.code,{children:"undefined"})]}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"'lazy'"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"_sizes"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"_sizes"})}),(0,i.jsx)(n.td,{children:"Defines the image sizes for different screen resolutions, supporting _srcset."}),(0,i.jsxs)(n.td,{children:[(0,i.jsx)(n.code,{children:"string"})," | ",(0,i.jsx)(n.code,{children:"undefined"})]}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"undefined"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsxs)(n.td,{children:[(0,i.jsx)(n.code,{children:"_src"})," ",(0,i.jsx)(n.em,{children:"(required)"})]}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"_src"})}),(0,i.jsxs)(n.td,{children:["Sets the image ",(0,i.jsx)(n.code,{children:"src"})," attribute to the given string."]}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"string"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"undefined"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"_srcset"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"_srcset"})}),(0,i.jsx)(n.td,{children:"Setzt eine Liste von Quell-URLs mit Breiten der Bilder."}),(0,i.jsxs)(n.td,{children:[(0,i.jsx)(n.code,{children:"string"})," | ",(0,i.jsx)(n.code,{children:"undefined"})]}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"undefined"})})]})]})]}),"\n",(0,i.jsx)(n.hr,{})]})}function s(e={}){const{wrapper:n}={...(0,r.M)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}t(37704);var a=t(54592);const d={title:"Image",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die Image-Komponente.",tags:["Image","Beschreibung","Spezifikation","Beispiele"]},o=void 0,c={id:"components/image",title:"Image",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die Image-Komponente.",source:"@site/docs/30-components/image.mdx",sourceDirName:"30-components",slug:"/components/image",permalink:"/en/docs/next/components/image",draft:!1,unlisted:!1,tags:[{inline:!0,label:"Image",permalink:"/en/docs/next/tags/image"},{inline:!0,label:"Beschreibung",permalink:"/en/docs/next/tags/beschreibung"},{inline:!0,label:"Spezifikation",permalink:"/en/docs/next/tags/spezifikation"},{inline:!0,label:"Beispiele",permalink:"/en/docs/next/tags/beispiele"}],version:"current",frontMatter:{title:"Image",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die Image-Komponente.",tags:["Image","Beschreibung","Spezifikation","Beispiele"]},sidebar:"tutorialSidebar",previous:{title:"Icon",permalink:"/en/docs/next/components/icon"},next:{title:"IndentedText",permalink:"/en/docs/next/components/indented-text"}},h={},u=[{value:"Konstruktion",id:"konstruktion",level:2},{value:"Code",id:"code",level:3},{value:"Beispiele",id:"beispiele",level:3},{value:"Verwendung",id:"verwendung",level:2},{value:"Bilder in unterschiedlicher Aufl\xf6sung und/oder Seitenverh\xe4ltnis",id:"bilder-in-unterschiedlicher-aufl\xf6sung-undoder-seitenverh\xe4ltnis",level:3},{value:"Ladeverhalten",id:"ladeverhalten",level:3},{value:"Barrierefreiheit",id:"barrierefreiheit",level:2},{value:"Alternativtext",id:"alternativtext",level:3},{value:"Links und Referenzen",id:"links-und-referenzen",level:2},{value:"Properties",id:"properties",level:2},{value:"Live-Editor",id:"live-editor",level:2}];function p(e){const n={h2:"h2",...(0,r.M)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s,{}),"\n",(0,i.jsx)(n.h2,{id:"live-editor",children:"Live-Editor"}),"\n",(0,i.jsx)(a.o,{component:"image"})]})}function x(e={}){const{wrapper:n}={...(0,r.M)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}},37704:(e,n,t)=>{t.d(n,{Q:()=>o});var i=t(64992),r=t(80924),l=t(76776);const s=function(e,n,t,i,r){return void 0===r&&(r="editor"),`${e}&module=${i}&initialpath=%23%2F${n}%2F${t}&view=${r}`},a={width:"100%",height:"500px",border:"0",overflow:"hidden"},d=e=>{let{url:n}=e;return(0,l.jsxs)("div",{className:"m-2",children:[(0,l.jsx)("iframe",{src:n,style:a,title:"kolibri-public-ui-code-samples",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}),(0,l.jsx)(i.GQ,{_href:n,_label:"",_target:"codesandbox",children:(0,l.jsx)("img",{alt:"CodeSandbox-Schalter",src:"https://codesandbox.io/static/img/play-codesandbox.svg"})})]})},o=e=>{let{component:n,sample:t}=e;const[o,c]=(0,r.useState)("Preview"),h="https://codesandbox.io/embed/kolibri-public-ui-react-samples-w5u37c?fontsize=14&hidenavigation=1&autoresize=1&theme=dark",u=`%2Fsrc%2Fsamples%2F${n}%2F${t}`,p={angular:`${u}.html`,react:`${u}.tsx`,vue:`${u}.vue`,webcomponent:`${u}.html`},x=`/sample-react/#/${n}/${t}?hideMenus`,m={onSelect:(e,n)=>{switch(n){case 1:c((()=>"Angular"));break;case 2:c((()=>"React"));break;case 3:c((()=>"Vue"));break;case 4:c((()=>"Web Component"));break;default:c((()=>"Preview"))}}};return(0,l.jsxs)(i._,{className:"w-full",_label:"Code-Beispiel",_on:m,_tabs:[{_label:"Vorschau"},{_disabled:!0,_label:"Angular"},{_label:"React"},{_disabled:!0,_label:"Vue"},{_disabled:!0,_label:"Web Component"}],children:[(0,l.jsx)("div",{children:"Preview"===o&&(0,l.jsx)("iframe",{src:x,style:a,title:"kolibri-public-ui-code-samples",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"})}),(0,l.jsx)("div",{children:"Angular"===o&&(0,l.jsx)(d,{url:s(h,n,t,p.angular)})}),(0,l.jsx)("div",{children:"React"===o&&(0,l.jsx)(d,{url:s(h,n,t,p.react)})}),(0,l.jsx)("div",{children:"Vue"===o&&(0,l.jsx)(d,{url:s(h,n,t,p.vue)})}),(0,l.jsx)("div",{children:"Web Component"===o&&(0,l.jsx)(d,{url:s(h,n,t,p.webcomponent)})})]})}},54592:(e,n,t)=>{t.d(n,{o:()=>v});var i=t(592),r=t(64992),l=t(80924),s=t(73700),a=t(76776);function d(e){const{label:n,name:t,update:i,value:s}=e;return(0,l.useEffect)((()=>{s||i(t,"#000000")}),[]),(0,a.jsx)(r.eK,{_label:"",_on:{onInput:(e,n)=>i(t,n)},_value:s,children:(0,a.jsx)("span",{slot:"expert",children:n})})}function o(e){const{attribute:n,label:t,update:i}=e,[s,d]=(0,l.useState)(""),[o,c]=(0,l.useState)(""),[h,u]=(0,l.useState)(""),[p,x]=(0,l.useState)("");let m=!1,b=!1,g=!1,j=!1;n.type.includes("KoliBriAllIcon")?(m=!0,b=!0,g=!0,j=!0):(n.type.includes("KoliBriVerticalIcon")&&(g=!0,j=!0),n.type.includes("KoliBriHorizontalIcon")&&(m=!0,b=!0)),(0,l.useEffect)((()=>{if(!s||o||h||p){const e={};s&&(e.left=`codicon codicon-${s}`),o&&(e.right=`codicon codicon-${o}`),h&&(e.top=`codicon codicon-${h}`),p&&(e.bottom=`codicon codicon-${p}`),Object.keys(e).length&&i(n.name,JSON.stringify(e))}else i(n.name,`codicon codicon-${s}`)}),[s,o,h,p]);const f=["home","arrow-up","arrow-right","arrow-down","arrow-left"];return(0,a.jsxs)("div",{children:[t,m?(0,a.jsx)(r.Si,{_label:"Links",children:(0,a.jsx)("div",{className:"flex flex-wrap gap-2 p-2",children:f.map((e=>(0,a.jsx)(r.qC,{_icons:`codicon codicon-${e}`,_hideLabel:!0,_label:"",_on:{onClick:()=>d(e)}},e)))})}):"",b?(0,a.jsx)(r.Si,{_label:"Rechts",children:(0,a.jsx)("div",{className:"flex flex-wrap gap-2 p-2",children:f.map((e=>(0,a.jsx)(r.qC,{_icons:`codicon codicon-${e}`,_hideLabel:!0,_label:"",_on:{onClick:()=>c(e)}},e)))})}):"",g?(0,a.jsx)(r.Si,{_label:"Oben",children:(0,a.jsx)("div",{className:"flex flex-wrap gap-2 p-2",children:f.map((e=>(0,a.jsx)(r.qC,{_icons:`codicon codicon-${e}`,_hideLabel:!0,_label:"",_on:{onClick:()=>u(e)}},e)))})}):"",j?(0,a.jsx)(r.Si,{_label:"Unten",children:(0,a.jsx)("div",{className:"flex flex-wrap gap-2 p-2",children:f.map((e=>(0,a.jsx)(r.qC,{_icons:`codicon codicon-${e}`,_hideLabel:!0,_label:"",_on:{onClick:()=>x(e)}},e)))})}):""]})}function c(e){const{name:n,label:t,types:i,update:l,value:s}=e,d=[];function o(e){return{label:e,value:e}}return i.includes("undefined")?(d.push({label:"-",value:void 0}),d.push(...i.filter((e=>"undefined"!==e)).map(o))):d.push(...i.filter((e=>"undefined"!==e)).map(o)),(0,a.jsx)(r.qy,{className:"my-2",_label:"",_options:JSON.stringify(d),_on:{onInput:(e,t)=>l(n,t[0])},_value:s?[s]:void 0,children:(0,a.jsx)("span",{slot:"expert",children:t})})}function h(e){const{attribute:n,update:t,value:i}=e,s=(0,l.useMemo)((()=>{let e=n.type.replace(/\\?"/g,"").split(" | ");return e=e.filter((e=>"KoliBriAllIcon ignorieren"!==e)),1===e.length?e[0]:e.includes("string")?"string":e.includes("number")?"number":e.includes("boolean")?"boolean":""}),[n]),h=(0,l.useMemo)((()=>{const e=n.type.split(" | ").map((e=>e.replace(/\\?"/g,""))),l=(0,a.jsx)(r.s1,{_label:n.description,children:n.name});switch(n.name){case"_color":return(0,a.jsx)(d,{name:n.name,label:l,update:t,value:i});case"_icons":return(0,a.jsx)(o,{attribute:n,label:l,update:t,value:i});default:switch(s){case"string":return(0,a.jsx)(r.Uh,{className:"my-2",_label:"",_on:{onInput:(e,i)=>t(n.name,i)},_value:i||"",children:(0,a.jsx)("span",{slot:"expert",children:l})});case"number":return(0,a.jsx)(r.QL,{className:"my-2",_label:"",_on:{onInput:(e,i)=>t(n.name,i)},_value:i,children:(0,a.jsx)("span",{slot:"expert",children:l})});case"boolean":return(0,a.jsx)(r.Q7,{className:"my-2",_checked:!0===i,_label:"",_on:{onInput:(e,i)=>t(n.name,i)},_variant:"switch",_value:!0,children:(0,a.jsx)("span",{slot:"expert",children:l})});default:return e.length>1?(0,a.jsx)(c,{label:l,name:n.name,types:e,update:t,value:i}):(0,a.jsxs)("p",{children:["Attribut: '",n.name,"'",(0,a.jsx)("br",{}),"Typ: '",n.type,"'"]})}}}),[n,i]);return(0,a.jsx)(a.Fragment,{children:h})}var u=t(63136),p=t(28256),x=t(39452),m=t.n(x);function b(e){const{tag:n,params:t}=e,i=Object.entries(t).filter((e=>"defaultValues"!==e[0]));let r="";const s=(0,l.useMemo)((()=>{let e="";return i.filter((e=>e[0].startsWith("slot-"))).forEach((n=>{const t=n[1],i=n[0].split("-")[1];if(t)if(t.match(/^<.*?>/)?.length){const n=t.indexOf(">");e+=t.substring(0,n)+` slot="${i}"`+t.substring(n)}else e+=`<div slot="${i}">${t}</div>`})),e}),[t]),d=i.filter((e=>!e[0].startsWith("slot-"))).filter((e=>!t.defaultValues.includes(e[0])));for(const[l,a]of d)if(a){let e="";switch(typeof a){case"string":e=` ${l}="${a.replace(/"/g,"'")}"`;break;case"number":e=` ${l}="${a.toString()}"`;break;case"boolean":e=a?` ${l}`:"";break;case"object":e=` ${l}="${JSON.stringify(a)}"`;break;default:e="Never give up hope, one day everything will be fixed."}r+=e}const o=`<kol-${n}${r}>${s}</kol-${n}>`;let c;try{c=(0,p.format)(o,{plugins:[m()],printWidth:80}).replace(/;\n$/,"")}catch(h){c=`\x3c!-- Formatter-Error: Slot-Markup is not valid HTML for formatting. --\x3e\n${o}`}return(0,a.jsx)("div",{className:"h-48 rounded-md overflow-hidden",children:(0,a.jsx)(u.cp,{defaultLanguage:"html",height:"100%",options:{automaticLayout:!0,fontSize:16,lineNumbers:"off",readOnly:!0},value:c})})}function g(e){const n=Object.fromEntries(Object.entries(e.params).filter((e=>{let[n]=e;return!n.startsWith("slot-")}))),t=Object.entries(e.params).filter((e=>{let[n]=e;return n.startsWith("slot-")})),i={abbr:r.s1,accordion:r.IP,alert:r.mW,avatar:r.aq,badge:r.cX,breadcrumb:r.If,button:r.qC,"button-group":r.Os,"button-link":r.u_,card:r.Yh,details:r.Si,form:r.OO,heading:r.ch,icon:r.SA,image:r.iu,"indented-text":r.MV,"input-checkbox":r.Q7,"input-color":r.eK,"input-date":r.QZ,"input-email":r.kN,"input-file":r.Ex,"input-number":r.QL,"input-password":r.EH,"input-radio":r.wJ,"input-range":r.Ef,"input-text":r.Uh,kolibri:r.aY,link:r.GQ,"link-button":r._k,"link-group":r.O_,logo:r.ae,modal:r.cT,nav:r.Y4,pagination:r.kj,progress:r.O0,quote:r.SY,select:r.qy,"skip-nav":r.Ig,spin:r.kP,"split-button":r.a,symbol:r.OM,table:r.Y9,tabs:r._,textarea:r.DG,version:r.k1}[e.tag];return i?(0,a.jsx)(i,{...n,children:t.map((e=>(0,a.jsx)("div",{slot:e[0].replace("slot-","").replace("default",""),dangerouslySetInnerHTML:{__html:e[1]}},e[0])))}):(0,a.jsx)("div",{children:"Tag not implemented"})}function j(e){const{description:n,name:t,update:i,value:r}=e;return(0,a.jsxs)("div",{className:"bg-gray-100 my-2 rounded-lg p-2 border border-gray-300 border-solid",children:[(0,a.jsx)("b",{children:t||"default"}),": ",n,(0,a.jsx)("br",{}),(0,a.jsx)(u.GW,{defaultLanguage:"html",height:"5em",onChange:e=>i(`slot-${t}`,e||""),options:{automaticLayout:!0,fontSize:16,lineNumbers:"off"},value:r})]})}const f=["_smart-button","_icon-align"],_={abbr:{"slot-default":"Abbr"},accordion:{"slot-default":"Accordion content"},tabs:{_tabs:'[{"_label":"Tab 1"},{"_label":"Tab 2", "_on": {"onClose": true} },{"_label":"Tab 3"}]'},breadcrumb:{_links:"[{'_label':'Startseite','_href':'#/'},{'_label':'Unterseite der Startseite','_href':'#/unterseite'},{'_label':'Unterseite der Unterseite','_href':'#/unterseite/unterseite'}]"},form:{"_required-text":"Bitte alle Felder ausf\xfcllen."},image:{_src:"https://placehold.co/100x100/cc006e/white"},"link-group":{_links:"[{'_label':'Startseite','_href':'#/'},{'_label':'Unterseite der Startseite','_href':'#/unterseite'},{'_label':'Unterseite der Unterseite','_href':'#/unterseite/unterseite'}]"},nav:{_links:"[{'_label':'Startseite','_href':'#/'},{'_label':'Unterseite der Startseite','_href':'#/unterseite'},{'_label':'Unterseite der Unterseite','_href':'#/unterseite/unterseite'}]"},pagination:{_total:"100",_page:"6"},quote:{_quote:"Hello World"},select:{_options:"[{'label':'Herr','value':0},{'label':'Frau','value':1}]"},"skip-nav":{_links:"[{'_label':'Navigation','_href':'#nav'},{'_label':'Inhalt','_href':'#main'},{'_label':'Kontakt','_href':'#kontakt'},{'_label':'Links','_href':'#links'}]"},table:{_headers:'{"horizontal":[[{"label":"Montag","key":"montag"}]]}',_data:'[{"montag":"Zelle1"},{"montag":"Zelle2"}]',_pagination:'{"page":2}'}};function v(e){const[n,t]=(0,l.useState)(function(){const e={};return Object.values(i.Q).forEach((n=>{const t=n.name.replace("kol-","");e[t]={defaultValues:[]},n.attributes.forEach((n=>{void 0!==n.defaultValue&&(e[t][n.name]=n.defaultValue.replace(/'/g,""),e[t].defaultValues.push(n.name)),void 0!==_[t]?.[n.name]&&(e[t][n.name]=_[t][n.name])})),n.slots.forEach((n=>{const i=`slot-${n.name||"default"}`,r=_[t]?.[i];r&&(e[t][i]=r)}))})),e}()),[d,o]=(0,l.useState)("badge");(0,l.useEffect)((()=>{e.component&&o(e.component.replace("kol-",""))}),[e.component]),(0,l.useEffect)((()=>{!!i.Q.find((e=>e.name===`kol-${d}`))?.attributes.find((e=>"_label"===e.name))&&!n[d]?._label&&u("_label","Label-Text");!!i.Q.find((e=>e.name===`kol-${d}`))?.attributes.find((e=>"_heading"===e.name))&&!n[d]?._heading&&u("_heading","Heading-Text")}),[d]);const c=(0,l.useMemo)((()=>n[d]||{}),[n,d]);function u(e,n){t((t=>{const i={...t[d],[e]:n,defaultValues:t[d].defaultValues.filter((n=>n!==e))};return{...t,[d]:i}}))}const p=Object.values(i.Q).find((e=>e.name===`kol-${d}`));return(0,a.jsx)(s.c,{children:()=>(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(r.cX,{class:"mb-2",_label:"Beta",_color:"#b00"}),(0,a.jsxs)("div",{className:"grid lg:grid-cols-3 gap-2",children:[(0,a.jsxs)(r._,{className:"col-span-2",_label:"Wechselnavigation zwischen Viewer und Code",_tabs:[{_label:"Viewer"},{_label:"Code"}],children:[(0,a.jsx)("div",{className:"p-2",children:(0,a.jsx)(g,{tag:d,params:c})}),(0,a.jsx)("div",{className:"lg:col-span-2",children:(0,a.jsx)(b,{params:c,tag:d})})]}),(0,a.jsxs)("div",{className:"grid gap-4 p-2 border-0 border-l border-solid",children:[(0,a.jsx)(r.ch,{_level:3,_label:"Konfigurator"}),(0,a.jsxs)("div",{children:[(0,a.jsx)(r.ch,{_level:4,_label:"Properties"}),(0,a.jsxs)("div",{className:"max-h-96 p-2 overflow-auto mb-4",children:[p&&p.attributes.map((e=>(0,a.jsx)(a.Fragment,{children:!f.includes(e.name)&&!e.description.startsWith("Deprecated:")&&(0,a.jsx)(h,{attribute:e,update:u,value:c[e.name]},e.name)}))),p&&0===p.attributes.length&&(0,a.jsx)("span",{className:"text-gray-500",children:"Keine Properties vorhanden"})]}),(0,a.jsx)(r.ch,{_level:4,_label:"Slots"}),(0,a.jsxs)("div",{className:"max-h-56 p-2 overflow-auto",children:[p&&p.slots.map((e=>(0,a.jsx)(j,{description:e.description,name:e.name||"default",update:u,value:c["slot-"+(e.name||"default")]},e.name))),p&&0===p.slots.length&&(0,a.jsx)("span",{className:"text-gray-500",children:"Keine Slots vorhanden"})]})]})]})]})]})})}}}]);