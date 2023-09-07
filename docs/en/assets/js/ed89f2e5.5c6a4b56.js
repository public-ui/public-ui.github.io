"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[92527],{94555:(e,t,n)=>{n.d(t,{ZP:()=>o});var a=n(15882),l=(n(50959),n(17942));const r={toc:[{value:"Funktionsweise",id:"funktionsweise",level:2},{value:"Konstruktion",id:"konstruktion",level:2},{value:"Code",id:"code",level:3},{value:"Verwendung",id:"verwendung",level:2},{value:"Best practices",id:"best-practices",level:3},{value:"Anwendungsf\xe4lle",id:"anwendungsf\xe4lle",level:3},{value:"Barrierefreiheit",id:"barrierefreiheit",level:2},{value:"Tastatursteuerung",id:"tastatursteuerung",level:3},{value:"Links und Referenzen",id:"links-und-referenzen",level:2},{value:"Properties",id:"properties",level:2},{value:"Slots",id:"slots",level:2}]},i="wrapper";function o(e){let{components:t,...n}=e;return(0,l.kt)(i,(0,a.Z)({},r,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Mit Hilfe der ",(0,l.kt)("strong",{parentName:"p"},"Modal"),"-Komponente k\xf6nnen zus\xe4tzliche Informationen oder auch Eingabeformulare in einem Dialogfenster angezeigt werden. Ein offenes ",(0,l.kt)("strong",{parentName:"p"},"Modal")," kann via ",(0,l.kt)("strong",{parentName:"p"},"ESC")," geschlossen werden.\nDie ",(0,l.kt)("strong",{parentName:"p"},"Modal"),"-Komponente ist standardm\xe4\xdfig versteckt. Sie wird i.d.R. erst nach Klick auf einen Button oder sonstigem Trigger angezeigt. Dabei wird der Hintergrund des Fensters deaktiviert und allein der Inhalt des Modal-Fensters ist aktiv."),(0,l.kt)("h2",{id:"funktionsweise"},"Funktionsweise"),(0,l.kt)("p",null,"Das ",(0,l.kt)("strong",{parentName:"p"},"Modal")," realisiert die Basis f\xfcr barrierefreie Overlays und erm\xf6glicht es beliebige HTML-Inhalte anzuzeigen. Beispielsweise w\xe4re eine Dialog-Komponente eine Komposition aus einer Card-Komponente die in einer ",(0,l.kt)("strong",{parentName:"p"},"Modal"),"-Komponente eingef\xfcgt wird."),(0,l.kt)("p",null,"Sobald ein ",(0,l.kt)("strong",{parentName:"p"},"Modal")," ge\xf6ffnet wird, werden alle selektierbaren Elemente in der Webseite deaktiviert, au\xdfer die innerhalb des aktiven Modals."),(0,l.kt)("h2",{id:"konstruktion"},"Konstruktion"),(0,l.kt)("h3",{id:"code"},"Code"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'<kol-modal id="test-modal" _aria-label="Beschreibung zur Modalbox">\n    <kol-card _heading="Vorgang l\xf6schen" _has-footer style="background-color: bisque">\n        <p slot="content">Wollen Sie den Vorgang wirklich l\xf6schen?</p>\n        <div slot="footer">\n            <kol-button className="close-modal" _label="Ok" _variant="primary"></kol-button>\n            <kol-button className="close-modal" _label="Abbrechen"></kol-button>\n        </div>\n    </kol-card>\n</kol-modal>\n<kol-button id="modal-open-button" _label="Modal \xf6ffnen"></kol-button>\n<script>\n    const modal = document.querySelector(\'#test-modal\');\n    const modalOpenButton = document.querySelector(\'#modal-open-button\');\n    function openModal() {\n        modal._activeElement = modalOpenButton;\n        modal._open = true;\n    }\n    function closeModal() {\n        modal._activeElement = null;\n    }\n    document.querySelectorAll(\'.close-modal\').forEach((b) => (b._on = { onClick: closeModal }));\n    modalOpenButton._on = { onClick: openModal };\n<\/script>\n')),(0,l.kt)("h2",{id:"verwendung"},"Verwendung"),(0,l.kt)("p",null,"\xdcber das Attribut ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"_width"))," geben Sie die gew\xfcnschte Breite der Modalbox an. Sie wird in der gew\xe4hlten Gr\xf6\xdfe immer mittig auf dem Bildschirm angezeigt."),(0,l.kt)("p",null,"Da das Modal vom eigentlichen Modal entkoppelt ist, aber f\xfcr eine teilweisen Sperrung der Inhalte sorgt. Muss es auch eine M\xf6glichkeit bieten, das Schlie\xdfen (Sperrung aufheben) aus dem Modal-Kontext zu erm\xf6glichen."),(0,l.kt)("p",null,(0,l.kt)("kol-alert",{_type:"info"},"Es wird empfohlen einen Close-Button oben rechts einzubauen.")),(0,l.kt)("p",null,"Das ",(0,l.kt)("strong",{parentName:"p"},"Modal")," hat einen ",(0,l.kt)("inlineCode",{parentName:"p"},"z-index")," von ",(0,l.kt)("inlineCode",{parentName:"p"},"100"),"."),(0,l.kt)("h3",{id:"best-practices"},"Best practices"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Verwenden Sie die Modalbox, um weiterf\xfchrende Informationen zu einem Thema anzuzeigen."),(0,l.kt)("li",{parentName:"ul"},"Verwenden Sie die Modalbox, um umfangreiche Inhalte optisch kompakter zu gestalten."),(0,l.kt)("li",{parentName:"ul"},"Vermeiden Sie es, wichtige Informationen wie z.B. rechtliche Themen, auf die Nutzer:innen reagieren m\xfcssen, in Modalboxen zu platzieren.")),(0,l.kt)("h3",{id:"anwendungsf\xe4lle"},"Anwendungsf\xe4lle"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Nutzen Sie die Modalbox, als Erkl\xe4rungshilfe zu einzelnen Eingabefeldern in Formularen."),(0,l.kt)("li",{parentName:"ul"},"Nutzen Sie die Modalbox, um erg\xe4nzende Informationen erst nach Anforderung durch die Nutzer:innen anzuzeigen."),(0,l.kt)("li",{parentName:"ul"},"Nutzen Sie die Modalbox, um ein Feedback zu Speichervorg\xe4ngen oder \xe4hnliches anzuzeigen, z.B. ",(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("em",{parentName:"strong"},"Vielen Dank f\xfcr Ihre R\xfcckmeldung"))," nach Absenden eines Formulars.")),(0,l.kt)("h2",{id:"barrierefreiheit"},"Barrierefreiheit"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Die optische Standardausgabe der Komponente ist auf die Umsetzung der Barrierefreiheit hin optimiert. Wenn Sie eigene Custom Styles verwenden, kann das zu einer Einschr\xe4nkung der Barrierefreiheit f\xfchren.")),(0,l.kt)("p",null,"Das ",(0,l.kt)("strong",{parentName:"p"},"Modal")," ist so realisiert, dass der Fokus darauf liegt, wenn es ge\xf6ffnet wird. Elemente au\xdferhalb des Modals sind dann nicht mehr fokussierbar."),(0,l.kt)("p",null,"Wird das ",(0,l.kt)("strong",{parentName:"p"},"Modal")," geschlossen, liegt der Fokus wieder auf dem Element, welches unter ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"_activeElement"))," angegeben wurde."),(0,l.kt)("p",null,"Bei der Realisierung dieser Funktionalit\xe4t haben wir auf die Verwendung der CSS-Properties ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"user-select"))," und ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"pointer-events"))," verzichtet, um das Navigieren aus der Webseite in die Browser-Men\xfc's weiterhin zu erm\xf6glichen. Ebenfalls haben wir darauf verzichtet die ",(0,l.kt)("em",{parentName:"p"},"Event-Propagation")," zu manipulieren."),(0,l.kt)("p",null,"Achten Sie f\xfcr eine optimale Ausgabe der ",(0,l.kt)("strong",{parentName:"p"},"Modal"),"-Komponente in Screenreadern darauf, das Attribut ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"aria-label"))," korrekt zu setzen."),(0,l.kt)("p",null,"Des Weiteren gibt es immer nur maximal ein aktives Modal, welches alle selektierbaren Elemente deaktiviert au\xdfer die innerhalb des eigenen Modals. Hierbei ist zu beachten, dass KoliBri nur Elemente deaktiviert die sich im Browser-Seitenbereich befinden. Das Fokussieren den Browser-Men\xfc's ist weiterhin m\xf6glich."),(0,l.kt)("h3",{id:"tastatursteuerung"},"Tastatursteuerung"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Taste"),(0,l.kt)("th",{parentName:"tr",align:null},"Funktion"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Tab")),(0,l.kt)("td",{parentName:"tr",align:null},"Bei ge\xf6ffnetem Modal werden alle fokussierbaren Elemente der Reihenfolge nach angesprungen.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"ESC")),(0,l.kt)("td",{parentName:"tr",align:null},"Schlie\xdft das Modal.")))),(0,l.kt)("h2",{id:"links-und-referenzen"},"Links und Referenzen"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.w3.org/TR/wai-aria-practices/#dialog_modal"},"https://www.w3.org/TR/wai-aria-practices/#dialog_modal")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.w3.org/TR/wai-aria-practices-1.1/examples/dialog-modal/dialog.html"},"https://www.w3.org/TR/wai-aria-practices-1.1/examples/dialog-modal/dialog.html"))),(0,l.kt)("h2",{id:"properties"},"Properties"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Property"),(0,l.kt)("th",{parentName:"tr",align:null},"Attribute"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_activeElement")),(0,l.kt)("td",{parentName:"tr",align:null},"--"),(0,l.kt)("td",{parentName:"tr",align:null},"Gibt die Referenz auf das ausl\xf6sende HTML-Element an, wodurch das Modal ge\xf6ffnet wurde."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"HTMLElement")," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},"null")," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},"undefined")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_ariaLabel")," ",(0,l.kt)("em",{parentName:"td"},"(required)")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_aria-label")),(0,l.kt)("td",{parentName:"tr",align:null},"Gibt den Text an, der die Navigation von anderen Navigationen differenziert."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_on")),(0,l.kt)("td",{parentName:"tr",align:null},"--"),(0,l.kt)("td",{parentName:"tr",align:null},"Gibt die EventCallback-Function f\xfcr das Schlie\xdfen des Modals an."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"undefined")," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},"{ onClose?: EventCallback<Event>")," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},"undefined; }")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_width")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_width")),(0,l.kt)("td",{parentName:"tr",align:null},"Setzt die Breite des Modals. (max-width: 100%)."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},"undefined")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"'100%'"))))),(0,l.kt)("h2",{id:"slots"},"Slots"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Slot"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Der Inhalt des Modals.")))),(0,l.kt)("hr",null))}o.isMDXComponent=!0},63739:(e,t,n)=>{n.d(t,{_:()=>s});var a=n(80746),l=n(50959);const r=function(e,t,n,a,l){return void 0===l&&(l="editor"),`${e}&module=${a}&initialpath=%23%2F${t}%2F${n}&view=${l}`},i={width:"100%",height:"500px",border:"0",overflow:"hidden"},o=e=>{let{url:t}=e;return l.createElement("div",{className:"m-2"},l.createElement("iframe",{src:t,style:i,title:"kolibri-public-ui-code-samples",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}),l.createElement(a.Nv,{_href:t,_label:"",_target:"codesandbox"},l.createElement("img",{alt:"CodeSandbox-Schalter",src:"https://codesandbox.io/static/img/play-codesandbox.svg"})))},s=e=>{let{component:t,sample:n}=e;const[s,d]=(0,l.useState)("Preview"),u="https://codesandbox.io/embed/kolibri-public-ui-react-samples-w5u37c?fontsize=14&hidenavigation=1&autoresize=1&theme=dark",m=`%2Fsrc%2Fsamples%2F${t}%2F${n}`,c={angular:`${m}.html`,react:`${m}.tsx`,vue:`${m}.vue`,webcomponent:`${m}.html`},p=`/sample-react/#/${t}/${n}`,g={onSelect:(e,t)=>{switch(t){case 1:d((()=>"Angular"));break;case 2:d((()=>"React"));break;case 3:d((()=>"Vue"));break;case 4:d((()=>"Web Component"));break;default:d((()=>"Preview"))}}};return l.createElement(a.UD,{className:"w-full",_ariaLabel:"Code-Beispiel",_on:g,_tabs:[{_label:"Vorschau"},{_disabled:!0,_label:"Angular"},{_label:"React"},{_disabled:!0,_label:"Vue"},{_disabled:!0,_label:"Web Component"}]},l.createElement("div",null,"Preview"===s&&l.createElement("iframe",{src:p,style:i,title:"kolibri-public-ui-code-samples",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"})),l.createElement("div",null,"Angular"===s&&l.createElement(o,{url:r(u,t,n,c.angular)})),l.createElement("div",null,"React"===s&&l.createElement(o,{url:r(u,t,n,c.react)})),l.createElement("div",null,"Vue"===s&&l.createElement(o,{url:r(u,t,n,c.vue)})),l.createElement("div",null,"Web Component"===s&&l.createElement(o,{url:r(u,t,n,c.webcomponent)})))}},67084:(e,t,n)=>{n.d(t,{_:()=>N});var a=n(90301),l=n(80746),r=n(50959),i=n(25054);function o(e){const{label:t,name:n,update:a,value:i}=e;return(0,r.useEffect)((()=>{i||a(n,"#000000")}),[]),r.createElement(l.Np,{_on:{onChange:(e,t)=>a(n,t)},_value:i},t)}function s(e){const{attribute:t,label:n,update:a}=e,[i,o]=(0,r.useState)(""),[s,d]=(0,r.useState)(""),[u,m]=(0,r.useState)(""),[c,p]=(0,r.useState)("");let g=!1,k=!1,b=!1,h=!1;t.type.includes("KoliBriAllIcon")?(g=!0,k=!0,b=!0,h=!0):(t.type.includes("KoliBriVerticalIcon")&&(b=!0,h=!0),t.type.includes("KoliBriHorizontalIcon")&&(g=!0,k=!0)),(0,r.useEffect)((()=>{if(!i||s||u||c){const e={};i&&(e.left=`codicon codicon-${i}`),s&&(e.right=`codicon codicon-${s}`),u&&(e.top=`codicon codicon-${u}`),c&&(e.bottom=`codicon codicon-${c}`),Object.keys(e).length&&a(t.name,JSON.stringify(e))}else a(t.name,`codicon codicon-${i}`)}),[i,s,u,c]);const f=["home","arrow-up","arrow-right","arrow-down","arrow-left"];return r.createElement("div",null,n,g?r.createElement(l.ox,{_summary:"Links"},r.createElement("div",{className:"flex flex-wrap"},f.map((e=>r.createElement(l.ic,{key:e,_icon:`codicon codicon-${e}`,_hideLabel:!0,_label:"",_on:{onClick:()=>o(e)}}))))):"",k?r.createElement(l.ox,{_summary:"Rechts"},r.createElement("div",{className:"flex flex-wrap"},f.map((e=>r.createElement(l.ic,{key:e,_icon:`codicon codicon-${e}`,_hideLabel:!0,_label:"",_on:{onClick:()=>d(e)}}))))):"",b?r.createElement(l.ox,{_summary:"Oben"},r.createElement("div",{className:"flex flex-wrap"},f.map((e=>r.createElement(l.ic,{key:e,_icon:`codicon codicon-${e}`,_hideLabel:!0,_label:"",_on:{onClick:()=>m(e)}}))))):"",h?r.createElement(l.ox,{_summary:"Unten"},r.createElement("div",{className:"flex flex-wrap"},f.map((e=>r.createElement(l.ic,{key:e,_icon:`codicon codicon-${e}`,_hideLabel:!0,_label:"",_on:{onClick:()=>p(e)}}))))):"")}function d(e){const{name:t,label:n,types:a,update:i,value:o}=e,s=[];function d(e){return{label:e,value:e}}return a.includes("undefined")?(s.push({label:"-",value:void 0}),s.push(...a.filter((e=>"undefined"!==e)).map(d))):s.push(...a.filter((e=>"undefined"!==e)).map(d)),r.createElement(l.r7,{className:"my-2",_list:JSON.stringify(s),_on:{onChange:(e,n)=>i(t,n[0])},_value:o?[o]:void 0},n)}function u(e){const{attribute:t,update:n,value:a}=e,i=(0,r.useMemo)((()=>{let e=t.type.replace(/\\?"/g,"").split(" | ");return e=e.filter((e=>"KoliBriAllIcon ignorieren"!==e)),1===e.length?e[0]:e.includes("string")?"string":e.includes("number")?"number":e.includes("boolean")?"boolean":""}),[t]),u=(0,r.useMemo)((()=>{const e=t.type.split(" | ").map((e=>e.replace(/\\?"/g,""))),u=r.createElement(l.T5,{_title:t.description},t.name);switch(t.name){case"_color":return r.createElement(o,{name:t.name,label:u,update:n,value:a});case"_icon":return r.createElement(s,{attribute:t,label:u,update:n,value:a});default:switch(i){case"string":return r.createElement(l.WD,{className:"my-2",_label:!1,_on:{onChange:(e,a)=>n(t.name,a)},_value:a||""},u);case"number":return r.createElement(l.c2,{className:"my-2",_label:!1,_on:{onChange:(e,a)=>n(t.name,a)},_value:a},u);case"boolean":return r.createElement(l.TE,{className:"my-2",_checked:!0===a,_label:!1,_on:{onChange:(e,a)=>n(t.name,a)},_variant:"switch",_value:!0},u);default:return e.length>1?r.createElement(d,{label:u,name:t.name,types:e,update:n,value:a}):r.createElement("p",null,"Attribut: '",t.name,"'",r.createElement("br",null),"Typ: '",t.type,"'")}}}),[t,a]);return r.createElement(r.Fragment,null,u)}var m=n(6453),c=n(77192),p=n(85630),g=n.n(p);function k(e){const{tag:t,params:n}=e,a=Object.entries(n).filter((e=>"defaultValues"!==e[0]));let l="";const i=(0,r.useMemo)((()=>{let e="";return a.filter((e=>e[0].startsWith("slot-"))).forEach((t=>{const n=t[1],a=t[0].split("-")[1];if(n)if(n.match(/^<.*?>/)?.length){const t=n.indexOf(">");e+=n.substring(0,t)+` slot="${a}"`+n.substring(t)}else e+=`<div slot="${a}">${n}</div>`})),e}),[n]),o=a.filter((e=>!e[0].startsWith("slot-"))).filter((e=>!n.defaultValues.includes(e[0])));for(const[r,m]of o)if(m){let e="";switch(typeof m){case"string":e=` ${r}="${m.replace(/"/g,"'")}"`;break;case"number":e=` ${r}="${m.toString()}"`;break;case"boolean":e=m?` ${r}`:"";break;case"object":e=` ${r}="${JSON.stringify(m)}"`;break;default:e="Never give up hope, one day everything will be fixed."}l+=e}const s=`<kol-${t}${l}>${i}</kol-${t}>`;let d;try{d=(0,c.format)(s,{plugins:[g()],printWidth:80}).replace(/;\n$/,"")}catch(u){d=`\x3c!-- Formatter-Error: Slot-Markup is not valid HTML for formatting. --\x3e\n${s}`}return r.createElement("div",{className:"h-48 rounded-md overflow-hidden"},r.createElement(m.ZP,{defaultLanguage:"html",height:"100%",options:{automaticLayout:!0,fontSize:16,lineNumbers:"off",readOnly:!0},value:d}))}function b(e){const t=Object.fromEntries(Object.entries(e.params).filter((e=>{let[t]=e;return!t.startsWith("slot-")}))),n=Object.entries(e.params).filter((e=>{let[t]=e;return t.startsWith("slot-")})),a={abbr:l.T5,accordion:l.RZ,alert:l.K5,avatar:l.Ek,badge:l.Er,breadcrumb:l.lo,button:l.ic,"button-group":l.uz,"button-link":l.f6,card:l.Gc,details:l.ox,form:l.m5,heading:l.HA,icon:l.Jl,image:l.Cd,"indented-text":l.CV,"input-checkbox":l.TE,"input-color":l.Np,"input-date":l.O,"input-email":l.Lj,"input-file":l.CX,"input-number":l.c2,"input-password":l.z5,"input-radio":l.sy,"input-range":l.TQ,"input-text":l.WD,kolibri:l.Vs,link:l.Nv,"link-button":l.Kc,"link-group":l.$o,logo:l.QK,modal:l.Ud,nav:l.MA,pagination:l.Q4,popover:l.hV,progress:l.WR,quote:l.VZ,select:l.r7,"skip-nav":l.P,spin:l.qq,"split-button":l.KJ,symbol:l.is,table:l.Vp,tabs:l.UD,textarea:l.Qs,toast:l.CO,version:l.u_}[e.tag];return a?r.createElement(a,t,n.map((e=>r.createElement("div",{key:e[0],slot:e[0].replace("slot-","").replace("default",""),dangerouslySetInnerHTML:{__html:e[1]}})))):r.createElement("div",null,"Tag not implemented")}function h(e){const{description:t,name:n,update:a,value:l}=e;return r.createElement("div",{className:"bg-gray-100 my-2 rounded-lg p-2 border border-gray-300 border-solid"},r.createElement("b",null,n||"default"),": ",t,r.createElement("br",null),r.createElement(m.ML,{defaultLanguage:"html",height:"5em",onChange:e=>a(`slot-${n}`,e||""),options:{automaticLayout:!0,fontSize:16,lineNumbers:"off"},value:l}))}const f=["_smart-button","_icon-align"],v={abbr:{"slot-default":"Abbr"},accordion:{"slot-default":"Accordion content"},tabs:{_tabs:'[{"_label":"Tab 1"},{"_label":"Tab 2", "_on": {"onClose": true} },{"_label":"Tab 3"}]'},breadcrumb:{_links:"[{'_label':'Startseite','_href':'#/'},{'_label':'Unterseite der Startseite','_href':'#/unterseite'},{'_label':'Unterseite der Unterseite','_href':'#/unterseite/unterseite'}]"},form:{"_required-text":"Bitte alle Felder ausf\xfcllen."},image:{_src:"https://placehold.co/100x100/cc006e/white"},"link-group":{_links:"[{'_label':'Startseite','_href':'#/'},{'_label':'Unterseite der Startseite','_href':'#/unterseite'},{'_label':'Unterseite der Unterseite','_href':'#/unterseite/unterseite'}]"},nav:{_links:"[{'_label':'Startseite','_href':'#/'},{'_label':'Unterseite der Startseite','_href':'#/unterseite'},{'_label':'Unterseite der Unterseite','_href':'#/unterseite/unterseite'}]"},pagination:{_total:"100",_page:"6"},quote:{_quote:"Hello World"},select:{_options:"[{'label':'Herr','value':0},{'label':'Frau','value':1}]"},"skip-nav":{_links:"[{'_label':'Navigation','_href':'#nav'},{'_label':'Inhalt','_href':'#main'},{'_label':'Kontakt','_href':'#kontakt'},{'_label':'Links','_href':'#links'}]"},table:{_headers:'{"horizontal":[[{"label":"Montag","key":"montag"}]]}',_data:'[{"montag":"Zelle1"},{"montag":"Zelle2"}]',_pagination:'{"page":2}'}};function N(e){const[t,n]=(0,r.useState)(function(){const e={};return Object.values(a.p).forEach((t=>{const n=t.name.replace("kol-","");e[n]={defaultValues:[]},t.attributes.forEach((t=>{void 0!==t.defaultValue&&(e[n][t.name]=t.defaultValue.replace(/'/g,""),e[n].defaultValues.push(t.name)),void 0!==v[n]?.[t.name]&&(e[n][t.name]=v[n][t.name])})),t.slots.forEach((t=>{const a=`slot-${t.name||"default"}`,l=v[n]?.[a];l&&(e[n][a]=l)}))})),e}()),[o,s]=(0,r.useState)("badge");(0,r.useEffect)((()=>{e.component&&s(e.component.replace("kol-",""))}),[e.component]),(0,r.useEffect)((()=>{!!a.p.find((e=>e.name===`kol-${o}`))?.attributes.find((e=>"_label"===e.name))&&!t[o]?._label&&m("_label","Label-Text");!!a.p.find((e=>e.name===`kol-${o}`))?.attributes.find((e=>"_heading"===e.name))&&!t[o]?._heading&&m("_heading","Heading-Text")}),[o]);const d=(0,r.useMemo)((()=>t[o]||{}),[t,o]);function m(e,t){n((n=>{const a={...n[o],[e]:t,defaultValues:n[o].defaultValues.filter((t=>t!==e))};return{...n,[o]:a}}))}const c=Object.values(a.p).find((e=>e.name===`kol-${o}`));return r.createElement(i.Z,null,(()=>r.createElement(r.Fragment,null,r.createElement(l.Er,{class:"mb-2",_label:"Beta",_color:"#b00"}),r.createElement("div",{className:"grid lg:grid-cols-3 gap-2"},r.createElement(l.UD,{className:"col-span-2",_ariaLabel:"Wechselnavigation zwischen Viewer und Code",_tabs:[{_label:"Viewer"},{_label:"Code"}]},r.createElement("div",{className:"p-2"},r.createElement(b,{tag:o,params:d})),r.createElement("div",{className:"lg:col-span-2"},r.createElement(k,{params:d,tag:o}))),r.createElement("div",{className:"grid gap-4 p-2 border-0 border-l border-solid"},r.createElement(l.HA,{_level:3,_label:"Konfigurator"}),r.createElement("div",null,r.createElement(l.HA,{_level:4,_label:"Properties"}),r.createElement("div",{className:"max-h-96 p-2 overflow-auto mb-4"},c&&c.attributes.map((e=>r.createElement(r.Fragment,null,!f.includes(e.name)&&!e.description.startsWith("Deprecated:")&&r.createElement(u,{key:e.name,attribute:e,update:m,value:d[e.name]})))),c&&0===c.attributes.length&&r.createElement("span",{className:"text-gray-500"},"Keine Properties vorhanden")),r.createElement(l.HA,{_level:4,_label:"Slots"}),r.createElement("div",{className:"max-h-56 p-2 overflow-auto"},c&&c.slots.map((e=>r.createElement(h,{key:e.name,description:e.description,name:e.name||"default",update:m,value:d["slot-"+(e.name||"default")]}))),c&&0===c.slots.length&&r.createElement("span",{className:"text-gray-500"},"Keine Slots vorhanden"))))))))}},96391:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>d,default:()=>k,frontMatter:()=>s,metadata:()=>u,toc:()=>c});var a=n(15882),l=(n(50959),n(17942)),r=n(94555),i=n(63739),o=n(67084);const s={title:"Dialog",description:"Beschreibung, Spezifikation und Beispiele f\xfcr Dialog/Modal.",tags:["Dialog","Modal","Beschreibung","Spezifikation","Beispiele"]},d=void 0,u={unversionedId:"components/dialog",id:"version-1.5.3/components/dialog",title:"Dialog",description:"Beschreibung, Spezifikation und Beispiele f\xfcr Dialog/Modal.",source:"@site/versioned_docs/version-1.5.3/30-components/dialog.mdx",sourceDirName:"30-components",slug:"/components/dialog",permalink:"/en/docs/1.5.3/components/dialog",draft:!1,tags:[{label:"Dialog",permalink:"/en/docs/1.5.3/tags/dialog"},{label:"Modal",permalink:"/en/docs/1.5.3/tags/modal"},{label:"Beschreibung",permalink:"/en/docs/1.5.3/tags/beschreibung"},{label:"Spezifikation",permalink:"/en/docs/1.5.3/tags/spezifikation"},{label:"Beispiele",permalink:"/en/docs/1.5.3/tags/beispiele"}],version:"1.5.3",frontMatter:{title:"Dialog",description:"Beschreibung, Spezifikation und Beispiele f\xfcr Dialog/Modal.",tags:["Dialog","Modal","Beschreibung","Spezifikation","Beispiele"]},sidebar:"tutorialSidebar",previous:{title:"Details",permalink:"/en/docs/1.5.3/components/details"},next:{title:"Form",permalink:"/en/docs/1.5.3/components/form"}},m={},c=[{value:"Live-Editor",id:"live-editor",level:2},{value:"Beispiele",id:"beispiele",level:2}],p={toc:c},g="wrapper";function k(e){let{components:t,...n}=e;return(0,l.kt)(g,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)(r.ZP,{mdxType:"Readme"}),(0,l.kt)("h2",{id:"live-editor"},"Live-Editor"),(0,l.kt)(o._,{component:"modal",mdxType:"LiveEditorCompact"}),(0,l.kt)("h2",{id:"beispiele"},"Beispiele"),(0,l.kt)(i._,{component:"modal",sample:"basic",mdxType:"Configurator"}))}k.isMDXComponent=!0}}]);