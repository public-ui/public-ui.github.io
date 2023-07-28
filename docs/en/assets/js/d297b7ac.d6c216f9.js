"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[2071],{63739:(e,t,n)=>{n.d(t,{_:()=>s});var a=n(14422),l=n(50959);const r=function(e,t,n,a,l){return void 0===l&&(l="editor"),`${e}&module=${a}&initialpath=%23%2F${t}%2F${n}&view=${l}`},i={width:"100%",height:"500px",border:"0",overflow:"hidden"},o=e=>{let{url:t}=e;return l.createElement("div",{className:"m-2"},l.createElement("iframe",{src:t,style:i,title:"kolibri-public-ui-code-samples",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}),l.createElement(a.Nv,{_href:t,_label:"",_target:"codesandbox"},l.createElement("img",{alt:"CodeSandbox-Schalter",src:"https://codesandbox.io/static/img/play-codesandbox.svg"})))},s=e=>{let{component:t,sample:n}=e;const[s,d]=(0,l.useState)("Preview"),m="https://codesandbox.io/embed/kolibri-public-ui-react-samples-w5u37c?fontsize=14&hidenavigation=1&autoresize=1&theme=dark",c=`%2Fsrc%2Fsamples%2F${t}%2F${n}`,u={angular:`${c}.html`,react:`${c}.tsx`,vue:`${c}.vue`,webcomponent:`${c}.html`},p=`/sample-react/#/${t}/${n}`,g={onSelect:(e,t)=>{switch(t){case 1:d((()=>"Angular"));break;case 2:d((()=>"React"));break;case 3:d((()=>"Vue"));break;case 4:d((()=>"Web Component"));break;default:d((()=>"Preview"))}}};return l.createElement(a.UD,{className:"w-full",_ariaLabel:"Code-Beispiel",_on:g,_tabs:[{_label:"Vorschau"},{_disabled:!0,_label:"Angular"},{_label:"React"},{_disabled:!0,_label:"Vue"},{_disabled:!0,_label:"Web Component"}]},l.createElement("div",null,"Preview"===s&&l.createElement("iframe",{src:p,style:i,title:"kolibri-public-ui-code-samples",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"})),l.createElement("div",null,"Angular"===s&&l.createElement(o,{url:r(m,t,n,u.angular)})),l.createElement("div",null,"React"===s&&l.createElement(o,{url:r(m,t,n,u.react)})),l.createElement("div",null,"Vue"===s&&l.createElement(o,{url:r(m,t,n,u.vue)})),l.createElement("div",null,"Web Component"===s&&l.createElement(o,{url:r(m,t,n,u.webcomponent)})))}},49433:(e,t,n)=>{n.d(t,{_:()=>v});var a=n(10844),l=n(14422),r=n(50959),i=n(90787);function o(e){const{attribute:t,label:n,update:a,value:i}=e,[o,s]=(0,r.useState)(""),[d,m]=(0,r.useState)(""),[c,u]=(0,r.useState)(""),[p,g]=(0,r.useState)("");let k=!1,b=!1,h=!1,f=!1;t.type.includes("KoliBriAllIcon")?(k=!0,b=!0,h=!0,f=!0):(t.type.includes("KoliBriVerticalIcon")&&(h=!0,f=!0),t.type.includes("KoliBriHorizontalIcon")&&(k=!0,b=!0)),(0,r.useEffect)((()=>{if(!o||d||c||p){const e={};o&&(e.left=`codicon codicon-${o}`),d&&(e.right=`codicon codicon-${d}`),c&&(e.top=`codicon codicon-${c}`),p&&(e.bottom=`codicon codicon-${p}`),Object.keys(e).length&&a(t.name,JSON.stringify(e))}else a(t.name,`codicon codicon-${o}`)}),[o,d,c,p]);const v=["home","arrow-up","arrow-right","arrow-down","arrow-left"];return r.createElement("div",null,n,k?r.createElement(l.ox,{_summary:"Links"},r.createElement("div",{className:"flex flex-wrap"},v.map((e=>r.createElement(l.ic,{key:e,_icon:`codicon codicon-${e}`,_hideLabel:!0,_label:"",_on:{onClick:t=>s(e)}}))))):"",b?r.createElement(l.ox,{_summary:"Rechts"},r.createElement("div",{className:"flex flex-wrap"},v.map((e=>r.createElement(l.ic,{key:e,_icon:`codicon codicon-${e}`,_hideLabel:!0,_label:"",_on:{onClick:t=>m(e)}}))))):"",h?r.createElement(l.ox,{_summary:"Oben"},r.createElement("div",{className:"flex flex-wrap"},v.map((e=>r.createElement(l.ic,{key:e,_icon:`codicon codicon-${e}`,_hideLabel:!0,_label:"",_on:{onClick:t=>u(e)}}))))):"",f?r.createElement(l.ox,{_summary:"Unten"},r.createElement("div",{className:"flex flex-wrap"},v.map((e=>r.createElement(l.ic,{key:e,_icon:`codicon codicon-${e}`,_hideLabel:!0,_label:"",_on:{onClick:t=>g(e)}}))))):"")}function s(e){const{label:t,name:n,update:a,value:i}=e;return(0,r.useEffect)((()=>{i||a(n,"#000000")}),[]),r.createElement(l.Np,{_on:{onChange:(e,t)=>a(n,t)},_value:i},t)}function d(e){const{name:t,label:n,types:a,update:i,value:o}=e,s=[];function d(e){return{label:e,value:e}}return a.includes("undefined")?(s.push({label:"-",value:void 0}),s.push(...a.filter((e=>"undefined"!==e)).map(d))):s.push(...a.filter((e=>"undefined"!==e)).map(d)),r.createElement(l.r7,{className:"my-2",_list:JSON.stringify(s),_on:{onChange:(e,n)=>i(t,n[0])},_value:o},n)}function m(e){const{attribute:t,update:n,value:a}=e,i=(0,r.useMemo)((()=>{let e=t.type.replace(/\\?"/g,"").split(" | ");return e=e.filter((e=>"KoliBriAllIcon ignorieren"!==e)),1===e.length?e[0]:e.includes("string")?"string":e.includes("number")?"number":e.includes("boolean")?"boolean":""}),[t]),m=(0,r.useMemo)((()=>{const e=t.type.split(" | ").map((e=>e.replace(/\\?"/g,""))),m=r.createElement(l.T5,{_title:t.description},t.name);switch(t.name){case"_color":return r.createElement(s,{name:t.name,label:m,update:n,value:a});case"_icon":return r.createElement(o,{attribute:t,label:m,update:n,value:a});default:switch(i){case"string":return r.createElement(l.WD,{className:"my-2",_on:{onChange:(e,a)=>n(t.name,a)},_value:a||""},m);case"number":return r.createElement(l.c2,{className:"my-2",_on:{onChange:(e,a)=>n(t.name,a)},_value:a},m);case"boolean":return r.createElement(l.TE,{className:"my-2",_checked:a,_on:{onChange:(e,a)=>n(t.name,a)},_variant:"switch"},m);default:return e.length>1?r.createElement(d,{label:m,name:t.name,types:e,update:n,value:a}):r.createElement("p",null,"Attribut: '",t.name,"'",r.createElement("br",null),"Typ: '",t.type,"'")}}}),[t,a]);return r.createElement(r.Fragment,null,m)}var c=n(80376),u=n(77192),p=n(85630),g=n.n(p);function k(e){const{tag:t,params:n}=e,a=Object.entries(n).filter((e=>"defaultValues"!==e[0]));let l="";const i=(0,r.useMemo)((()=>{let e="";return a.filter((e=>e[0].startsWith("slot-"))).forEach((t=>{const n=t[1],a=t[0].split("-")[1];if(n)if(n.match(/^<.*?>/)?.length){const t=n.indexOf(">");e+=n.substring(0,t)+` slot="${a}"`+n.substring(t)}else e+=`<div slot="${a}">${n}</div>`})),e}),[n]),o=a.filter((e=>!e[0].startsWith("slot-"))).filter((e=>!n.defaultValues.includes(e[0])));for(const[r,c]of o)if(c){let e="";switch(typeof c){case"string":e=` ${r}="${c.replace(/"/g,"'")}"`;break;case"number":e=` ${r}="${c.toString()}"`;break;case"boolean":e=c?` ${r}`:"";break;case"object":e=` ${r}="${JSON.stringify(c)}"`;break;default:e="Never give up hope, one day everything will be fixed."}l+=e}const s=`<kol-${t}${l}>${i}</kol-${t}>`;let d;try{d=(0,u.format)(s,{plugins:[g()],printWidth:80}).replace(/;\n$/,"")}catch(m){d=`\x3c!-- Formatter-Error: Slot-Markup is not valid HTML for formatting. --\x3e\n${s}`}return r.createElement("div",{className:"h-48 rounded-md overflow-hidden"},r.createElement(c.ZP,{defaultLanguage:"html",height:"100%",options:{automaticLayout:!0,fontSize:16,lineNumbers:"off",readOnly:!0},value:d}))}function b(e){const t={};Object.entries(e.params).filter((e=>!e[0].startsWith("slot-"))).forEach((e=>{t[e[0]]=e[1]}));const n=Object.entries(e.params).filter((e=>e[0].startsWith("slot-"))),a={abbr:l.T5,accordion:l.RZ,alert:l.K5,avatar:l.Ek,badge:l.Er,breadcrumb:l.lo,button:l.ic,"button-group":l.uz,"button-link":l.f6,card:l.Gc,details:l.ox,form:l.m5,heading:l.HA,icon:l.Jl,image:l.Cd,"indented-text":l.CV,"input-checkbox":l.TE,"input-color":l.Np,"input-date":l.O,"input-email":l.Lj,"input-file":l.CX,"input-number":l.c2,"input-password":l.z5,"input-radio":l.sy,"input-range":l.TQ,"input-text":l.WD,kolibri:l.Vs,link:l.Nv,"link-button":l.Kc,"link-group":l.$o,logo:l.QK,modal:l.Ud,nav:l.MA,pagination:l.Q4,popover:l.hV,progress:l.WR,quote:l.VZ,select:l.r7,"skip-nav":l.P,spin:l.qq,symbol:l.is,table:l.Vp,tabs:l.UD,textarea:l.Qs,toast:l.CO,tooltip:l.Ze,version:l.u_}[e.tag];return a?r.createElement(a,t,n.map((e=>r.createElement("div",{key:e[0],slot:e[0].replace("slot-",""),dangerouslySetInnerHTML:{__html:e[1]}})))):r.createElement("div",null,"Tag not implemented")}function h(e){const{description:t,name:n,update:a,value:l}=e;return r.createElement("div",{className:"bg-gray-100 my-2 rounded-lg p-2 border border-gray-300 border-solid"},r.createElement("b",null,n||"default"),": ",t,r.createElement("br",null),r.createElement(c.ML,{defaultLanguage:"html",height:"5em",onChange:e=>a(`slot-${n}`,e||""),options:{automaticLayout:!0,fontSize:16,lineNumbers:"off"},value:l}))}const f=["_smart-button","_icon-align"];function v(e){const[t,n]=(0,r.useState)(function(){const e={};return Object.values(a.p).forEach((t=>{const n=t.name.replace("kol-","");e[n]={defaultValues:[]},t.attributes.forEach((t=>{t.defaultValue&&(e[n][t.name]=t.defaultValue.replaceAll("'",""),e[n].defaultValues.push(t.name))}))})),e}()),[o,s]=(0,r.useState)("badge");(0,r.useEffect)((()=>{e.component&&s(e.component.replace("kol-",""))}),[e.component]),(0,r.useEffect)((()=>{!!a.p.find((e=>e.name===`kol-${o}`))?.attributes.find((e=>"_label"===e.name))&&!t[o]?._label&&c("_label","Label-Text");!!a.p.find((e=>e.name===`kol-${o}`))?.attributes.find((e=>"_heading"===e.name))&&!t[o]?._heading&&c("_heading","Heading-Text")}),[o]);const d=(0,r.useMemo)((()=>t[o]||{}),[t,o]);function c(e,t){n((n=>{const a={...n[o],[e]:t,defaultValues:n[o].defaultValues.filter((t=>t!==e))};return{...n,[o]:a}}))}const u=Object.values(a.p).find((e=>e.name===`kol-${o}`));return r.createElement(i.Z,null,(()=>r.createElement(r.Fragment,null,r.createElement(l.Er,{class:"mb-2",_label:"Beta",_color:"#b00"}),r.createElement("div",{className:"grid lg:grid-cols-3 gap-2"},r.createElement(l.UD,{className:"col-span-2",_ariaLabel:"Wechselnavigation zwischen Viewer und Code",_tabs:[{_label:"Viewer"},{_label:"Code"}]},r.createElement("div",{className:"p-2"},r.createElement(b,{tag:o,params:d})),r.createElement("div",{className:"lg:col-span-2"},r.createElement(k,{params:d,tag:o}))),r.createElement("div",{className:"grid gap-4 p-2 border-0 border-l border-solid"},r.createElement(l.HA,{_level:3,_label:"Konfigurator"}),r.createElement("div",null,r.createElement(l.HA,{_level:4,_label:"Properties"}),r.createElement("div",{className:"max-h-96 p-2 overflow-auto mb-4"},u&&u.attributes.map((e=>r.createElement(r.Fragment,null,!f.includes(e.name)&&r.createElement(m,{key:e.name,attribute:e,update:c,value:d[e.name]})))),u&&0===u.slots.length&&r.createElement("span",{className:"text-gray-500"},"Keine Properties vorhanden")),r.createElement(l.HA,{_level:4,_label:"Slots"}),r.createElement("div",{className:"max-h-56 p-2 overflow-auto"},u&&u.slots.map((e=>r.createElement(h,{key:e.name,description:e.description,name:e.name,update:c,value:d["slot-"+e.name]}))),u&&0===u.slots.length&&r.createElement("span",{className:"text-gray-500"},"Keine Slots vorhanden"))))))))}},77242:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>h,frontMatter:()=>m,metadata:()=>u,toc:()=>g});var a=n(15882),l=(n(50959),n(17942));const r={toc:[{value:"Konstruktion",id:"konstruktion",level:2},{value:"Code",id:"code",level:3},{value:"Beispiele",id:"beispiele",level:3},{value:"Verwendung",id:"verwendung",level:2},{value:"Bilder in unterschiedlicher Aufl\xf6sung und/oder Seitenverh\xe4ltnis",id:"bilder-in-unterschiedlicher-aufl\xf6sung-undoder-seitenverh\xe4ltnis",level:3},{value:"Ladeverhalten",id:"ladeverhalten",level:3},{value:"Barrierefreiheit",id:"barrierefreiheit",level:2},{value:"Alternativtext",id:"alternativtext",level:3},{value:"Links und Referenzen",id:"links-und-referenzen",level:2},{value:"Properties",id:"properties",level:2}]},i="wrapper";function o(e){let{components:t,...n}=e;return(0,l.kt)(i,(0,a.Z)({},r,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("kol-badge",{_label:"untested"})," Diese neue Komponente wird als ungetestet markiert, da der vollst\xe4ndige Barrierefreiheitstest noch aussteht. Der vollst\xe4ndige Test kann bei neuen Komponenten und Funktionalit\xe4ten auch erst nach einem abgeschlossenen Release erfolgen.")),(0,l.kt)("p",null,"Die ",(0,l.kt)("strong",{parentName:"p"},"Image"),"-Komponente dient dazu, Bilder darzustellen."),(0,l.kt)("h2",{id:"konstruktion"},"Konstruktion"),(0,l.kt)("p",null,"Die Komponente ",(0,l.kt)("strong",{parentName:"p"},"Image")," wird \xfcber das HTML-Tag ",(0,l.kt)("inlineCode",{parentName:"p"},"<kol-image>")," erzeugt."),(0,l.kt)("h3",{id:"code"},"Code"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'<kol-image _src="url-zum-bild.jpg" _alt="Beschreibung des Bildes"></kol-image>\n<kol-image _src="nur-dekoratives-bild.jpg" _alt=""></kol-image>\n<kol-image _src="hintergrundbild-der-hero-sektion.jpg" _alt="" _loading="eager"></kol-image>\n')),(0,l.kt)("h3",{id:"beispiele"},"Beispiele"),(0,l.kt)("p",null,(0,l.kt)("kol-image",{_src:"url-zum-bild.jpg",_alt:"Beschreibung des Bildes"}),"\n",(0,l.kt)("kol-image",{_src:"nur-dekoratives-bild.jpg",_alt:""}),"\n",(0,l.kt)("kol-image",{_src:"hintergrundbild-der-hero-sektion.jpg",_alt:"",_loading:"eager"})),(0,l.kt)("h2",{id:"verwendung"},"Verwendung"),(0,l.kt)("h3",{id:"bilder-in-unterschiedlicher-aufl\xf6sung-undoder-seitenverh\xe4ltnis"},"Bilder in unterschiedlicher Aufl\xf6sung und/oder Seitenverh\xe4ltnis"),(0,l.kt)("p",null,"Mittels ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"_srcset"))," (und ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"_sizes")),") k\xf6nnen unterschiedliche Bilder f\xfcr unterschiedliche Aufl\xf6sungen und Pixeldichten (des Displays) hinterlegt werden, um auf gro\xdfen Bildschirmen scharfe Bilder zu liefern und auf kleinen Monitoren nicht unn\xf6tig Bandbreite zu verbrauchen.\nDes Weiteren k\xf6nnen mittels ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"_srcset"))," auch verschiedene Dateiformate angegeben werden, um f\xfcr moderne Browser Bandbreite zu sparen, allerdings \xe4ltere Ger\xe4te weiterhin zu unterst\xfctzen.\nAuch bei Verwendung von ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"_srcset"))," sollte ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"_src"))," genutzt werden, da dies von den Browsern als letzte Option verwendet wird, sofern a) ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"srcset"))," nicht unterst\xfctzt wird, oder b) dort kein passendes Bild gefunden wurde.\n",(0,l.kt)("kol-link",{_href:"https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/srcset",_label:"https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/srcset",_target:"_blank",_label:"MDN Artikel zu srcset"}),"\n",(0,l.kt)("kol-link",{_href:"https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/sizes",_label:"https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/sizes",_target:"_blank",_label:"MDN Artikel zu sizes"}),"\nF\xfcr weitere Infos zu ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"_srcset"))," siehe ",(0,l.kt)("a",{parentName:"p",href:"#links-und-referenzen"},"Links und Referenzen")),(0,l.kt)("h3",{id:"ladeverhalten"},"Ladeverhalten"),(0,l.kt)("p",null,"Das Attribut ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"_loading"))," ist optional. Gesetzt werden kann hier entweder ",(0,l.kt)("inlineCode",{parentName:"p"},"eager")," oder ",(0,l.kt)("inlineCode",{parentName:"p"},"lazy"),", sofern ungesetzt wird ",(0,l.kt)("inlineCode",{parentName:"p"},"lazy")," verwendet.\n",(0,l.kt)("inlineCode",{parentName:"p"},"eager")," sorgt f\xfcr ein Laden des Bildes direkt beim Betreten der Seite, bei ",(0,l.kt)("inlineCode",{parentName:"p"},"lazy")," l\xe4dt der Browser das Bild erst, kurz bevor es sichtbar wird. In der Regel muss ",(0,l.kt)("inlineCode",{parentName:"p"},"eager")," nicht gesetzt werden, setzen Sie es nur sofern Ladeverz\xf6gerungen auftreten, oder das Bild sich sicher im, bei Betreten der Seite, sichtbaren Bereich befindet. (z.B.: Logo im Header oder Hero)\n",(0,l.kt)("kol-link",{_href:"https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/loading",_label:"https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/loading",_target:"_blank",_label:"MDN Artikel zu loading"})),(0,l.kt)("h2",{id:"barrierefreiheit"},"Barrierefreiheit"),(0,l.kt)("h3",{id:"alternativtext"},"Alternativtext"),(0,l.kt)("p",null,"Das Attribut ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"_alt"))," ist verpflichtend, kann jedoch bei rein dekorativen Bildern leer (",(0,l.kt)("inlineCode",{parentName:"p"},'_alt=""'),") gelassen werden.\nDiese Beschreibung wird von Screenreadern vorgelesen und von Browsern angezeigt, wenn das Bild nicht geladen werden kann/soll."),(0,l.kt)("h2",{id:"links-und-referenzen"},"Links und Referenzen"),(0,l.kt)("p",null,"Ausf\xfchrliche Erkl\xe4rung zu ",(0,l.kt)("inlineCode",{parentName:"p"},"_srcset")," und ",(0,l.kt)("inlineCode",{parentName:"p"},"_sizes"),": ",(0,l.kt)("kol-link",{_href:"https://www.mediaevent.de/html/srcset.html",_label:"https://www.mediaevent.de/html/srcset.html",_target:"_blank"})),(0,l.kt)("h2",{id:"properties"},"Properties"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Property"),(0,l.kt)("th",{parentName:"tr",align:null},"Attribute"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_alt")," ",(0,l.kt)("em",{parentName:"td"},"(required)")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_alt")),(0,l.kt)("td",{parentName:"tr",align:null},"Setzt den alternativen Text."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_loading")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_loading")),(0,l.kt)("td",{parentName:"tr",align:null},"Setzt den Lademodus."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'"eager"')," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},'"lazy"')," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},"undefined")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"'lazy'"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_sizes")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_sizes")),(0,l.kt)("td",{parentName:"tr",align:null},"Setzt Gr\xf6\xdfen f\xfcr unterschiedliche Aufl\xf6sungen, unterst\xfctzend f\xfcr _srcset."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},"undefined")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_src")," ",(0,l.kt)("em",{parentName:"td"},"(required)")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_src")),(0,l.kt)("td",{parentName:"tr",align:null},"Setzt die Quell-URL des Bildes."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_srcset")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_srcset")),(0,l.kt)("td",{parentName:"tr",align:null},"Setzt eine Liste von Quell-URLs mit Breiten der Bilder."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},"undefined")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"undefined"))))),(0,l.kt)("hr",null))}o.isMDXComponent=!0;var s=n(63739),d=n(49433);const m={title:"Image",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die Image-Komponente.",tags:["Image","Beschreibung","Spezifikation","Beispiele"]},c=void 0,u={unversionedId:"components/image",id:"components/image",title:"Image",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die Image-Komponente.",source:"@site/docs/30-components/image.mdx",sourceDirName:"30-components",slug:"/components/image",permalink:"/en/docs/components/image",draft:!1,tags:[{label:"Image",permalink:"/en/docs/tags/image"},{label:"Beschreibung",permalink:"/en/docs/tags/beschreibung"},{label:"Spezifikation",permalink:"/en/docs/tags/spezifikation"},{label:"Beispiele",permalink:"/en/docs/tags/beispiele"}],version:"current",frontMatter:{title:"Image",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die Image-Komponente.",tags:["Image","Beschreibung","Spezifikation","Beispiele"]},sidebar:"tutorialSidebar",previous:{title:"Icon",permalink:"/en/docs/components/icon"},next:{title:"IndentedText",permalink:"/en/docs/components/indented-text"}},p={},g=[{value:"Live-Editor",id:"live-editor",level:2},{value:"Beispiele",id:"beispiele",level:2}],k={toc:g},b="wrapper";function h(e){let{components:t,...n}=e;return(0,l.kt)(b,(0,a.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)(o,{mdxType:"Readme"}),(0,l.kt)("h2",{id:"live-editor"},"Live-Editor"),(0,l.kt)(d._,{component:"image",mdxType:"LiveEditorCompact"}),(0,l.kt)("h2",{id:"beispiele"},"Beispiele"),(0,l.kt)(s._,{component:"image",sample:"basic",mdxType:"Configurator"}))}h.isMDXComponent=!0}}]);