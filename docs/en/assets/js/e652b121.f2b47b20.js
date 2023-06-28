"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[7116],{46741:(e,t,n)=>{n.d(t,{_:()=>s});var a=n(17520),l=n(50959);const r=function(e,t,n,a,l){return void 0===l&&(l="editor"),`${e}&module=${a}&initialpath=%23%2F${t}%2F${n}&view=${l}`},i={width:"100%",height:"500px",border:"0",overflow:"hidden"},o=e=>{let{url:t}=e;return l.createElement("div",{className:"m-2"},l.createElement("iframe",{src:t,style:i,title:"kolibri-public-ui-code-samples",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}),l.createElement(a.Nv,{_href:t,_label:"",_target:"codesandbox"},l.createElement("img",{alt:"CodeSandbox-Schalter",src:"https://codesandbox.io/static/img/play-codesandbox.svg"})))},s=e=>{let{component:t,sample:n}=e;const[s,d]=(0,l.useState)("Preview"),m="https://codesandbox.io/embed/kolibri-public-ui-react-samples-w5u37c?fontsize=14&hidenavigation=1&autoresize=1&theme=dark",u=`%2Fsrc%2Fsamples%2F${t}%2F${n}`,c={angular:`${u}.html`,react:`${u}.tsx`,vue:`${u}.vue`,webcomponent:`${u}.html`},p=`/sample-react/#/${t}/${n}`,k={onSelect:(e,t)=>{switch(t){case 1:d((()=>"Angular"));break;case 2:d((()=>"React"));break;case 3:d((()=>"Vue"));break;case 4:d((()=>"Web Component"));break;default:d((()=>"Preview"))}}};return l.createElement(a.UD,{className:"w-full",_ariaLabel:"Code-Beispiel",_on:k,_tabs:[{_label:"Vorschau"},{_disabled:!0,_label:"Angular"},{_label:"React"},{_disabled:!0,_label:"Vue"},{_disabled:!0,_label:"Web Component"}]},l.createElement("div",null,"Preview"===s&&l.createElement("iframe",{src:p,style:i,title:"kolibri-public-ui-code-samples",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"})),l.createElement("div",null,"Angular"===s&&l.createElement(o,{url:r(m,t,n,c.angular)})),l.createElement("div",null,"React"===s&&l.createElement(o,{url:r(m,t,n,c.react)})),l.createElement("div",null,"Vue"===s&&l.createElement(o,{url:r(m,t,n,c.vue)})),l.createElement("div",null,"Web Component"===s&&l.createElement(o,{url:r(m,t,n,c.webcomponent)})))}},16072:(e,t,n)=>{n.d(t,{_:()=>N});var a=n(23438),l=n(17520),r=n(50959),i=n(84886);function o(e){const{attribute:t,label:n,update:a,value:i}=e,[o,s]=(0,r.useState)(""),[d,m]=(0,r.useState)(""),[u,c]=(0,r.useState)(""),[p,k]=(0,r.useState)("");let g=!1,b=!1,h=!1,f=!1;t.type.includes("KoliBriAllIcon")?(g=!0,b=!0,h=!0,f=!0):(t.type.includes("KoliBriVerticalIcon")&&(h=!0,f=!0),t.type.includes("KoliBriHorizontalIcon")&&(g=!0,b=!0)),(0,r.useEffect)((()=>{if(!o||d||u||p){const e={};o&&(e.left=`codicon codicon-${o}`),d&&(e.right=`codicon codicon-${d}`),u&&(e.top=`codicon codicon-${u}`),p&&(e.bottom=`codicon codicon-${p}`),Object.keys(e).length&&a(t.name,JSON.stringify(e))}else a(t.name,`codicon codicon-${o}`)}),[o,d,u,p]);const N=["home","arrow-up","arrow-right","arrow-down","arrow-left"];return r.createElement("div",null,n,g?r.createElement(l.ox,{_summary:"Links"},r.createElement("div",{className:"flex flex-wrap"},N.map((e=>r.createElement(l.ic,{key:e,_icon:`codicon codicon-${e}`,_hideLabel:!0,_label:"",_on:{onClick:t=>s(e)}}))))):"",b?r.createElement(l.ox,{_summary:"Rechts"},r.createElement("div",{className:"flex flex-wrap"},N.map((e=>r.createElement(l.ic,{key:e,_icon:`codicon codicon-${e}`,_hideLabel:!0,_label:"",_on:{onClick:t=>m(e)}}))))):"",h?r.createElement(l.ox,{_summary:"Oben"},r.createElement("div",{className:"flex flex-wrap"},N.map((e=>r.createElement(l.ic,{key:e,_icon:`codicon codicon-${e}`,_hideLabel:!0,_label:"",_on:{onClick:t=>c(e)}}))))):"",f?r.createElement(l.ox,{_summary:"Unten"},r.createElement("div",{className:"flex flex-wrap"},N.map((e=>r.createElement(l.ic,{key:e,_icon:`codicon codicon-${e}`,_hideLabel:!0,_label:"",_on:{onClick:t=>k(e)}}))))):"")}function s(e){const{label:t,name:n,update:a,value:i}=e;return(0,r.useEffect)((()=>{i||a(n,"#000000")}),[]),r.createElement(l.Np,{_on:{onChange:(e,t)=>a(n,t)},_value:i},t)}function d(e){const{name:t,label:n,types:a,update:i,value:o}=e,s=[];function d(e){return{label:e,value:e}}return a.includes("undefined")?(s.push({label:"-",value:void 0}),s.push(...a.filter((e=>"undefined"!==e)).map(d))):s.push(...a.filter((e=>"undefined"!==e)).map(d)),r.createElement(l.r7,{className:"my-2",_list:JSON.stringify(s),_on:{onChange:(e,n)=>i(t,n[0])},_value:o},n)}function m(e){const{attribute:t,update:n,value:a}=e,i=(0,r.useMemo)((()=>{let e=t.type.replace(/\\?"/g,"").split(" | ");return e=e.filter((e=>"KoliBriAllIcon ignorieren"!==e)),1===e.length?e[0]:e.includes("string")?"string":e.includes("number")?"number":e.includes("boolean")?"boolean":""}),[t]),m=(0,r.useMemo)((()=>{const e=t.type.split(" | ").map((e=>e.replace(/\\?"/g,""))),m=r.createElement(l.T5,{_title:t.description},t.name);switch(t.name){case"_color":return r.createElement(s,{name:t.name,label:m,update:n,value:a});case"_icon":return r.createElement(o,{attribute:t,label:m,update:n,value:a});default:switch(i){case"string":return r.createElement(l.WD,{className:"my-2",_on:{onChange:(e,a)=>n(t.name,a)},_value:a||""},m);case"number":return r.createElement(l.c2,{className:"my-2",_on:{onChange:(e,a)=>n(t.name,a)},_value:a},m);case"boolean":return r.createElement(l.TE,{className:"my-2",_checked:a,_on:{onChange:(e,a)=>n(t.name,a)},_variant:"switch"},m);default:return e.length>1?r.createElement(d,{label:m,name:t.name,types:e,update:n,value:a}):r.createElement("p",null,"Attribut: '",t.name,"'",r.createElement("br",null),"Typ: '",t.type,"'")}}}),[t,a]);return r.createElement(r.Fragment,null,m)}var u=n(45413),c=n(77192),p=n(85630),k=n.n(p);function g(e){const{tag:t,params:n}=e,a=Object.entries(n).filter((e=>"defaultValues"!==e[0]));let l="";const i=(0,r.useMemo)((()=>{let e="";return a.filter((e=>e[0].startsWith("slot-"))).forEach((t=>{const n=t[1],a=t[0].split("-")[1];if(n)if(n.match(/^<.*?>/)?.length){const t=n.indexOf(">");e+=n.substring(0,t)+` slot="${a}"`+n.substring(t)}else e+=`<div slot="${a}">${n}</div>`})),e}),[n]),o=a.filter((e=>!e[0].startsWith("slot-"))).filter((e=>!n.defaultValues.includes(e[0])));for(const[r,u]of o)if(u){let e="";switch(typeof u){case"string":e=` ${r}="${u.replace(/"/g,"'")}"`;break;case"number":e=` ${r}="${u.toString()}"`;break;case"boolean":e=u?` ${r}`:"";break;case"object":e=` ${r}="${JSON.stringify(u)}"`;break;default:e="Never give up hope, one day everything will be fixed."}l+=e}const s=`<kol-${t}${l}>${i}</kol-${t}>`;let d;try{d=(0,c.format)(s,{plugins:[k()],printWidth:80}).replace(/;\n$/,"")}catch(m){d=`\x3c!-- Formatter-Error: Slot-Markup is not valid HTML for formatting. --\x3e\n${s}`}return r.createElement("div",{className:"h-48 rounded-md overflow-hidden"},r.createElement(u.ZP,{defaultLanguage:"html",height:"100%",options:{automaticLayout:!0,fontSize:16,lineNumbers:"off",readOnly:!0},value:d}))}function b(e){const t={};Object.entries(e.params).filter((e=>!e[0].startsWith("slot-"))).forEach((e=>{t[e[0]]=e[1]}));const n=Object.entries(e.params).filter((e=>e[0].startsWith("slot-"))),a={abbr:l.T5,accordion:l.RZ,alert:l.K5,badge:l.Er,breadcrumb:l.lo,button:l.ic,"button-group":l.uz,"button-link":l.f6,card:l.Gc,details:l.ox,form:l.m5,heading:l.HA,icon:l.Jl,image:l.Cd,"indented-text":l.CV,"input-checkbox":l.TE,"input-color":l.Np,"input-date":l.O,"input-email":l.Lj,"input-file":l.CX,"input-number":l.c2,"input-password":l.z5,"input-radio":l.sy,"input-range":l.TQ,"input-text":l.WD,kolibri:l.Vs,link:l.Nv,"link-button":l.Kc,"link-group":l.$o,logo:l.QK,modal:l.Ud,nav:l.MA,pagination:l.Q4,popover:l.hV,progress:l.WR,quote:l.VZ,select:l.r7,"skip-nav":l.P,spin:l.qq,symbol:l.is,table:l.Vp,tabs:l.UD,textarea:l.Qs,toast:l.CO,tooltip:l.Ze,version:l.u_}[e.tag];return a?r.createElement(a,t,n.map((e=>r.createElement("div",{key:e[0],slot:e[0].replace("slot-",""),dangerouslySetInnerHTML:{__html:e[1]}})))):r.createElement("div",null,"Tag not implemented")}function h(e){const{description:t,name:n,update:a,value:l}=e;return r.createElement("div",{className:"bg-gray-100 my-2 rounded-lg p-2 border border-gray-300 border-solid"},r.createElement("b",null,n||"default"),": ",t,r.createElement("br",null),r.createElement(u.ML,{defaultLanguage:"html",height:"5em",onChange:e=>a(`slot-${n}`,e||""),options:{automaticLayout:!0,fontSize:16,lineNumbers:"off"},value:l}))}const f=["_smart-button","_icon-align"];function N(e){const[t,n]=(0,r.useState)(function(){const e={};return Object.values(a.p).forEach((t=>{const n=t.name.replace("kol-","");e[n]={defaultValues:[]},t.attributes.forEach((t=>{t.defaultValue&&(e[n][t.name]=t.defaultValue.replaceAll("'",""),e[n].defaultValues.push(t.name))}))})),e}()),[o,s]=(0,r.useState)("badge");(0,r.useEffect)((()=>{e.component&&s(e.component.replace("kol-",""))}),[e.component]),(0,r.useEffect)((()=>{!!a.p.find((e=>e.name===`kol-${o}`))?.attributes.find((e=>"_label"===e.name))&&!t[o]?._label&&u("_label","Label-Text");!!a.p.find((e=>e.name===`kol-${o}`))?.attributes.find((e=>"_heading"===e.name))&&!t[o]?._heading&&u("_heading","Heading-Text")}),[o]);const d=(0,r.useMemo)((()=>t[o]||{}),[t,o]);function u(e,t){n((n=>{const a={...n[o],[e]:t,defaultValues:n[o].defaultValues.filter((t=>t!==e))};return{...n,[o]:a}}))}const c=Object.values(a.p).find((e=>e.name===`kol-${o}`));return r.createElement(i.Z,null,(()=>r.createElement(r.Fragment,null,r.createElement(l.Er,{class:"mb-2",_label:"Beta",_color:"#b00"}),r.createElement("div",{className:"grid lg:grid-cols-3 gap-2"},r.createElement(l.UD,{className:"col-span-2",_ariaLabel:"Wechselnavigation zwischen Viewer und Code",_tabs:[{_label:"Viewer"},{_label:"Code"}]},r.createElement("div",{className:"p-2"},r.createElement(b,{tag:o,params:d})),r.createElement("div",{className:"lg:col-span-2"},r.createElement(g,{params:d,tag:o}))),r.createElement("div",{className:"grid gap-4 p-2 border-0 border-l border-solid"},r.createElement(l.HA,{_level:3,_label:"Konfigurator"}),r.createElement("div",null,r.createElement(l.HA,{_level:4,_label:"Properties"}),r.createElement("div",{className:"max-h-96 p-2 overflow-scroll mb-4"},c&&c.attributes.map((e=>r.createElement(r.Fragment,null,!f.includes(e.name)&&r.createElement(m,{key:e.name,attribute:e,update:u,value:d[e.name]})))),c&&0===c.slots.length&&r.createElement("span",{className:"text-gray-500"},"Keine Properties vorhanden")),r.createElement(l.HA,{_level:4,_label:"Slots"}),r.createElement("div",{className:"max-h-56 p-2 overflow-scroll"},c&&c.slots.map((e=>r.createElement(h,{key:e.name,description:e.description,name:e.name,update:u,value:d["slot-"+e.name]}))),c&&0===c.slots.length&&r.createElement("span",{className:"text-gray-500"},"Keine Slots vorhanden"))))))))}},98414:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>u,default:()=>h,frontMatter:()=>m,metadata:()=>c,toc:()=>k});var a=n(15882),l=(n(50959),n(17942));const r={toc:[{value:"Funktionsweise",id:"funktionsweise",level:2},{value:"Konstruktion",id:"konstruktion",level:2},{value:"Code",id:"code",level:3},{value:"Verwendung",id:"verwendung",level:2},{value:"Best practices",id:"best-practices",level:3},{value:"Anwendungsf\xe4lle",id:"anwendungsf\xe4lle",level:3},{value:"Barrierefreiheit",id:"barrierefreiheit",level:2},{value:"Tastatursteuerung",id:"tastatursteuerung",level:3},{value:"Links und Referenzen",id:"links-und-referenzen",level:2},{value:"Properties",id:"properties",level:2},{value:"Slots",id:"slots",level:2}]},i="wrapper";function o(e){let{components:t,...n}=e;return(0,l.kt)(i,(0,a.Z)({},r,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Mit Hilfe der ",(0,l.kt)("strong",{parentName:"p"},"Modal"),"-Komponente k\xf6nnen zus\xe4tzliche Informationen oder auch Eingabeformulare in einem Dialogfenster angezeigt werden. Ein offenes ",(0,l.kt)("strong",{parentName:"p"},"Modal")," kann via ",(0,l.kt)("strong",{parentName:"p"},"ESC")," geschlossen werden.\nDie ",(0,l.kt)("strong",{parentName:"p"},"Modal"),"-Komponente ist standardm\xe4\xdfig versteckt. Sie wird i.d.R. erst nach Klick auf einen Button oder sonstigem Trigger angezeigt. Dabei wird der Hintergrund des Fensters deaktiviert und allein der Inhalt des Modal-Fensters ist aktiv."),(0,l.kt)("h2",{id:"funktionsweise"},"Funktionsweise"),(0,l.kt)("p",null,"Das ",(0,l.kt)("strong",{parentName:"p"},"Modal")," realisiert die Basis f\xfcr barrierefreie Overlays und erm\xf6glicht es beliebige HTML-Inhalte anzuzeigen. Beispielsweise w\xe4re eine Dialog-Komponente eine Komposition aus einer Card-Komponente die in einer ",(0,l.kt)("strong",{parentName:"p"},"Modal"),"-Komponente eingef\xfcgt wird."),(0,l.kt)("p",null,"Sobald ein ",(0,l.kt)("strong",{parentName:"p"},"Modal")," ge\xf6ffnet wird, werden alle selektierbaren Elemente in der Webseite deaktiviert, au\xdfer die innerhalb des aktiven Modals."),(0,l.kt)("h2",{id:"konstruktion"},"Konstruktion"),(0,l.kt)("h3",{id:"code"},"Code"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'<kol-modal id="test-modal" _aria-label="Beschreibung zur Modalbox">\n    <kol-card _heading="Vorgang l\xf6schen" _has-footer style="background-color: bisque">\n        <p slot="content">Wollen Sie den Vorgang wirklich l\xf6schen?</p>\n        <div slot="footer">\n            <kol-button className="close-modal" _label="Ok" _variant="primary"></kol-button>\n            <kol-button className="close-modal" _label="Abbrechen"></kol-button>\n        </div>\n    </kol-card>\n</kol-modal>\n<kol-button id="modal-open-button" _label="Modal \xf6ffnen"></kol-button>\n<script>\n    const modal = document.querySelector(\'#test-modal\');\n    const modalOpenButton = document.querySelector(\'#modal-open-button\');\n    function openModal() {\n        modal._activeElement = modalOpenButton;\n        modal._open = true;\n    }\n    function closeModal() {\n        modal._activeElement = null;\n    }\n    document.querySelectorAll(\'.close-modal\').forEach((b) => (b._on = { onClick: closeModal }));\n    modalOpenButton._on = { onClick: openModal };\n<\/script>\n')),(0,l.kt)("h2",{id:"verwendung"},"Verwendung"),(0,l.kt)("p",null,"\xdcber das Attribut ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"_width"))," geben Sie die gew\xfcnschte Breite der Modalbox an. Sie wird in der gew\xe4hlten Gr\xf6\xdfe immer mittig auf dem Bildschirm angezeigt."),(0,l.kt)("p",null,"Da das Modal vom eigentlichen Modal entkoppelt ist, aber f\xfcr eine teilweisen Sperrung der Inhalte sorgt. Muss es auch eine M\xf6glichkeit bieten, das Schlie\xdfen (Sperrung aufheben) aus dem Modal-Kontext zu erm\xf6glichen."),(0,l.kt)("p",null,(0,l.kt)("kol-alert",{_type:"info"},"Es wird empfohlen einen Close-Button oben rechts einzubauen.")),(0,l.kt)("p",null,"Das ",(0,l.kt)("strong",{parentName:"p"},"Modal")," hat einen ",(0,l.kt)("inlineCode",{parentName:"p"},"z-index")," von ",(0,l.kt)("inlineCode",{parentName:"p"},"100"),"."),(0,l.kt)("h3",{id:"best-practices"},"Best practices"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Verwenden Sie die Modalbox, um weiterf\xfchrende Informationen zu einem Thema anzuzeigen."),(0,l.kt)("li",{parentName:"ul"},"Verwenden Sie die Modalbox, um umfangreiche Inhalte optisch kompakter zu gestalten."),(0,l.kt)("li",{parentName:"ul"},"Vermeiden Sie es, wichtige Informationen wie z.B. rechtliche Themen, auf die Nutzer:innen reagieren m\xfcssen, in Modalboxen zu platzieren.")),(0,l.kt)("h3",{id:"anwendungsf\xe4lle"},"Anwendungsf\xe4lle"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Nutzen Sie die Modalbox, als Erkl\xe4rungshilfe zu einzelnen Eingabefeldern in Formularen."),(0,l.kt)("li",{parentName:"ul"},"Nutzen Sie die Modalbox, um erg\xe4nzende Informationen erst nach Anforderung durch die Nutzer:innen anzuzeigen."),(0,l.kt)("li",{parentName:"ul"},"Nutzen Sie die Modalbox, um ein Feedback zu Speichervorg\xe4ngen oder \xe4hnliches anzuzeigen, z.B. ",(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("em",{parentName:"strong"},"Vielen Dank f\xfcr Ihre R\xfcckmeldung"))," nach Absenden eines Formulars.")),(0,l.kt)("h2",{id:"barrierefreiheit"},"Barrierefreiheit"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Die optische Standardausgabe der Komponente ist auf die Umsetzung der Barrierefreiheit hin optimiert. Wenn Sie eigene Custom Styles verwenden, kann das zu einer Einschr\xe4nkung der Barrierefreiheit f\xfchren.")),(0,l.kt)("p",null,"Das ",(0,l.kt)("strong",{parentName:"p"},"Modal")," ist so realisiert, dass der Fokus darauf liegt, wenn es ge\xf6ffnet wird. Elemente au\xdferhalb des Modals sind dann nicht mehr fokussierbar."),(0,l.kt)("p",null,"Wird das ",(0,l.kt)("strong",{parentName:"p"},"Modal")," geschlossen, liegt der Fokus wieder auf dem Element, welches unter ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"_activeElement"))," angegeben wurde."),(0,l.kt)("p",null,"Bei der Realisierung dieser Funktionalit\xe4t haben wir auf die Verwendung der CSS-Properties ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"user-select"))," und ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"pointer-events"))," verzichtet, um das Navigieren aus der Webseite in die Browser-Men\xfc's weiterhin zu erm\xf6glichen. Ebenfalls haben wir darauf verzichtet die ",(0,l.kt)("em",{parentName:"p"},"Event-Propagation")," zu manipulieren."),(0,l.kt)("p",null,"Achten Sie f\xfcr eine optimale Ausgabe der ",(0,l.kt)("strong",{parentName:"p"},"Modal"),"-Komponente in Screenreadern darauf, das Attribut ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"aria-label"))," korrekt zu setzen."),(0,l.kt)("p",null,"Des Weiteren gibt es immer nur maximal ein aktives Modal, welches alle selektierbaren Elemente deaktiviert au\xdfer die innerhalb des eigenen Modals. Hierbei ist zu beachten, dass KoliBri nur Elemente deaktiviert die sich im Browser-Seitenbereich befinden. Das Fokussieren den Browser-Men\xfc's ist weiterhin m\xf6glich."),(0,l.kt)("h3",{id:"tastatursteuerung"},"Tastatursteuerung"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Taste"),(0,l.kt)("th",{parentName:"tr",align:null},"Funktion"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Tab")),(0,l.kt)("td",{parentName:"tr",align:null},"Bei ge\xf6ffnetem Modal werden alle fokussierbaren Elemente der Reihenfolge nach angesprungen.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"ESC")),(0,l.kt)("td",{parentName:"tr",align:null},"Schlie\xdft das Modal.")))),(0,l.kt)("h2",{id:"links-und-referenzen"},"Links und Referenzen"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.w3.org/TR/wai-aria-practices/#dialog_modal"},"https://www.w3.org/TR/wai-aria-practices/#dialog_modal")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.w3.org/TR/wai-aria-practices-1.1/examples/dialog-modal/dialog.html"},"https://www.w3.org/TR/wai-aria-practices-1.1/examples/dialog-modal/dialog.html"))),(0,l.kt)("h2",{id:"properties"},"Properties"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Property"),(0,l.kt)("th",{parentName:"tr",align:null},"Attribute"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_activeElement")),(0,l.kt)("td",{parentName:"tr",align:null},"--"),(0,l.kt)("td",{parentName:"tr",align:null},"Gibt die Referenz auf das ausl\xf6sende HTML-Element an, wodurch das Modal ge\xf6ffnet wurde."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"HTMLElement")," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},"null")," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},"undefined")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_ariaLabel")," ",(0,l.kt)("em",{parentName:"td"},"(required)")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_aria-label")),(0,l.kt)("td",{parentName:"tr",align:null},"Setzt die sichtbare oder semantische Beschriftung der Komponente (z.B. Aria-Label, Label, Headline, Caption, Summary usw.)."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_on")),(0,l.kt)("td",{parentName:"tr",align:null},"--"),(0,l.kt)("td",{parentName:"tr",align:null},"Gibt die EventCallback-Function f\xfcr das Schlie\xdfen des Modals an."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"undefined")," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},"{ onClose?: EventCallback<Event>")," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},"undefined; }")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_width")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_width")),(0,l.kt)("td",{parentName:"tr",align:null},"Setzt die Breite des Modals. (max-width: 100%)."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},"undefined")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"'100%'"))))),(0,l.kt)("h2",{id:"slots"},"Slots"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Slot"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Der Inhalt des Modals.")))),(0,l.kt)("hr",null))}o.isMDXComponent=!0;var s=n(46741),d=n(16072);const m={title:"Modal",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die Modal-Komponente.",tags:["Modal","Beschreibung","Spezifikation","Beispiele"]},u=void 0,c={unversionedId:"components/modal",id:"components/modal",title:"Modal",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die Modal-Komponente.",source:"@site/docs/30-components/modal.mdx",sourceDirName:"30-components",slug:"/components/modal",permalink:"/en/docs/components/modal",draft:!1,tags:[{label:"Modal",permalink:"/en/docs/tags/modal"},{label:"Beschreibung",permalink:"/en/docs/tags/beschreibung"},{label:"Spezifikation",permalink:"/en/docs/tags/spezifikation"},{label:"Beispiele",permalink:"/en/docs/tags/beispiele"}],version:"current",frontMatter:{title:"Modal",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die Modal-Komponente.",tags:["Modal","Beschreibung","Spezifikation","Beispiele"]},sidebar:"tutorialSidebar",previous:{title:"Logo",permalink:"/en/docs/components/logo"},next:{title:"Nav",permalink:"/en/docs/components/nav"}},p={},k=[{value:"Live-Editor",id:"live-editor",level:2},{value:"Beispiele",id:"beispiele",level:2}],g={toc:k},b="wrapper";function h(e){let{components:t,...n}=e;return(0,l.kt)(b,(0,a.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)(o,{mdxType:"Readme"}),(0,l.kt)("h2",{id:"live-editor"},"Live-Editor"),(0,l.kt)(d._,{component:"modal",mdxType:"LiveEditorCompact"}),(0,l.kt)("h2",{id:"beispiele"},"Beispiele"),(0,l.kt)(s._,{component:"modal",sample:"basic",mdxType:"Configurator"}))}h.isMDXComponent=!0}}]);