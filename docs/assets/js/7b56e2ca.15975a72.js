"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[12075],{2684:(e,n,i)=>{i.d(n,{ZP:()=>s});var t=i(11527),l=i(16034);function r(e){const n={blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["Vielen Dank, dass Sie diese Komponente zur Umsetzung eines Modals verwenden wollen. Inzwischen ist das native ",(0,t.jsx)(n.code,{children:"<dialog>"})," Element sehr gut unterst\xfctzt (",(0,t.jsx)("kol-link",{_href:"https://caniuse.com/?search=dialog",_label:"https://caniuse.com/?search=dialog",_target:"_blank",_label:"caniuse"}),"), barrierefrei, einfach zu benutzen und performanter (da nativ), daher empfehlen wir dieses zu verwenden. Wenn Sie aufgrund von Abw\xe4rtskompatibilit\xe4t, oder weil Sie die ",(0,t.jsx)(n.strong,{children:"Modal"}),"-Komponente bereits eingebaut haben, die Dokumentation zu unserem KolModal suchen, finden Sie diese etwas weiter unten. Die ",(0,t.jsx)(n.strong,{children:"Modal"}),"-Komponente wird in Version 2 noch zur Verf\xfcgung stehen."]}),"\n",(0,t.jsxs)(n.h2,{id:"verwendung-von-dialog-tag",children:["Verwendung von ",(0,t.jsx)(n.code,{children:"dialog"}),"-Tag"]}),"\n",(0,t.jsxs)(n.p,{children:["Die Dokumentation des ",(0,t.jsx)(n.code,{children:"<dialog>"})," finden Sie ",(0,t.jsx)("kol-link",{_href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog",_label:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog",_target:"_blank",_label:"hier(MDN)"}),".\nDas ",(0,t.jsx)(n.strong,{children:"Dialog"}),"-Element kann wie jedes andere HTML-Tag verwendet werden, alle Elemente innerhalb werden wie gewohnt dargestellt.\nDer Dialog ist standardm\xe4\xdfig nicht sichtbar, \xfcber das Setzen des Attributs ",(0,t.jsx)(n.code,{children:"open"}),", oder \xfcber die Funktionen ",(0,t.jsx)(n.code,{children:"show()"})," und ",(0,t.jsx)(n.code,{children:"showModal()"})," wird er sichtbar.\n",(0,t.jsx)(n.code,{children:"open"})," und ",(0,t.jsx)(n.code,{children:"show()"})," \xf6ffnen das Element mit ",(0,t.jsx)(n.code,{children:"position: absolute"}),", w\xe4hrend ",(0,t.jsx)(n.code,{children:"showModal()"})," ",(0,t.jsx)(n.code,{children:"position: fixed"})," setzt."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Beide Varianten haben eine ",(0,t.jsx)(n.code,{children:"max-width"}),", die unter ",(0,t.jsx)(n.code,{children:"box-sizing: content-box"})," der gesamten Bildschirmbreite entspricht (bzw des ",(0,t.jsx)(n.code,{children:"position"})," Elters)"]}),"\n",(0,t.jsxs)(n.li,{children:["Die Modalvariante hat einen Hintergrund, der eine sanfte Abdunklung verursacht (unser Tipp: die Opacity der Hintergrundfarbe erh\xf6hen), der \xfcber ",(0,t.jsx)(n.code,{children:"::backdrop"})," gestylt werden kann und Klickevents auf den Dialog weiterleitet."]}),"\n",(0,t.jsxs)(n.li,{children:["Die Modalvariante ist in der Bildschirmmitte zentriert (via ",(0,t.jsx)(n.code,{children:"margin: auto"}),", kann von CSS Resets \xfcberschrieben werden)"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"modal",children:"Modal"}),"\n",(0,t.jsxs)(n.p,{children:["Mit Hilfe der ",(0,t.jsx)(n.strong,{children:"Modal"}),"-Komponente k\xf6nnen zus\xe4tzliche Informationen oder auch Eingabeformulare in einem Dialogfenster angezeigt werden. Ein offenes ",(0,t.jsx)(n.strong,{children:"Modal"})," kann via ",(0,t.jsx)(n.strong,{children:"ESC"})," geschlossen werden.\nDie ",(0,t.jsx)(n.strong,{children:"Modal"}),"-Komponente ist standardm\xe4\xdfig versteckt. Sie wird i.d.R. erst nach Klick auf einen Button oder sonstigem Trigger angezeigt. Dabei wird der Hintergrund des Fensters deaktiviert und allein der Inhalt des Modal-Fensters ist aktiv."]}),"\n",(0,t.jsx)(n.h3,{id:"funktionsweise",children:"Funktionsweise"}),"\n",(0,t.jsxs)(n.p,{children:["Das ",(0,t.jsx)(n.strong,{children:"Modal"})," realisiert die Basis f\xfcr barrierefreie Overlays und erm\xf6glicht es beliebige HTML-Inhalte anzuzeigen. Beispielsweise w\xe4re eine Dialog-Komponente eine Komposition aus einer Card-Komponente die in einer ",(0,t.jsx)(n.strong,{children:"Modal"}),"-Komponente eingef\xfcgt wird."]}),"\n",(0,t.jsxs)(n.p,{children:["Sobald ein ",(0,t.jsx)(n.strong,{children:"Modal"})," ge\xf6ffnet wird, werden alle selektierbaren Elemente in der Webseite deaktiviert, au\xdfer die innerhalb des aktiven Modals."]}),"\n",(0,t.jsx)(n.h3,{id:"konstruktion",children:"Konstruktion"}),"\n",(0,t.jsx)(n.h4,{id:"code",children:"Code"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-html",children:'<kol-modal id="test-modal" _label="Beschreibung zur Modalbox">\n\t<kol-card _heading="Vorgang l\xf6schen" _has-footer style="background-color: bisque">\n\t\t<p slot="content">Wollen Sie den Vorgang wirklich l\xf6schen?</p>\n\t\t<div slot="footer">\n\t\t\t<kol-button className="close-modal" _label="Ok" _variant="primary"></kol-button>\n\t\t\t<kol-button className="close-modal" _label="Abbrechen"></kol-button>\n\t\t</div>\n\t</kol-card>\n</kol-modal>\n<kol-button id="modal-open-button" _label="Modal \xf6ffnen"></kol-button>\n<script>\n\tconst modal = document.querySelector(\'#test-modal\');\n\tconst modalOpenButton = document.querySelector(\'#modal-open-button\');\n\tfunction openModal() {\n\t\tmodal._activeElement = modalOpenButton;\n\t\tmodal._open = true;\n\t}\n\tfunction closeModal() {\n\t\tmodal._activeElement = null;\n\t}\n\tdocument.querySelectorAll(\'.close-modal\').forEach((b) => (b._on = { onClick: closeModal }));\n\tmodalOpenButton._on = { onClick: openModal };\n<\/script>\n'})}),"\n",(0,t.jsx)(n.h3,{id:"verwendung",children:"Verwendung"}),"\n",(0,t.jsxs)(n.p,{children:["\xdcber das Attribut ",(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"_width"})})," geben Sie die gew\xfcnschte Breite der Modalbox an. Sie wird in der gew\xe4hlten Gr\xf6\xdfe immer mittig auf dem Bildschirm angezeigt."]}),"\n",(0,t.jsx)(n.p,{children:"Da das Modal vom eigentlichen Modal entkoppelt ist, aber f\xfcr eine teilweisen Sperrung der Inhalte sorgt. Muss es auch eine M\xf6glichkeit bieten, das Schlie\xdfen (Sperrung aufheben) aus dem Modal-Kontext zu erm\xf6glichen."}),"\n",(0,t.jsx)("kol-alert",{_type:"info",children:"Es wird empfohlen einen Close-Button oben rechts einzubauen."}),"\n",(0,t.jsxs)(n.p,{children:["Das ",(0,t.jsx)(n.strong,{children:"Modal"})," hat einen ",(0,t.jsx)(n.code,{children:"z-index"})," von ",(0,t.jsx)(n.code,{children:"100"}),"."]}),"\n",(0,t.jsx)(n.h4,{id:"best-practices",children:"Best practices"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Verwenden Sie die Modalbox, um weiterf\xfchrende Informationen zu einem Thema anzuzeigen."}),"\n",(0,t.jsx)(n.li,{children:"Verwenden Sie die Modalbox, um umfangreiche Inhalte optisch kompakter zu gestalten."}),"\n",(0,t.jsxs)(n.li,{children:["Vermeiden Sie es, wichtige Informationen wie z.B. rechtliche Themen, auf die Nutzer",":innen"," reagieren m\xfcssen, in Modalboxen zu platzieren."]}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"anwendungsf\xe4lle",children:"Anwendungsf\xe4lle"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Nutzen Sie die Modalbox, als Erkl\xe4rungshilfe zu einzelnen Eingabefeldern in Formularen."}),"\n",(0,t.jsxs)(n.li,{children:["Nutzen Sie die Modalbox, um erg\xe4nzende Informationen erst nach Anforderung durch die Nutzer",":innen"," anzuzeigen."]}),"\n",(0,t.jsxs)(n.li,{children:["Nutzen Sie die Modalbox, um ein Feedback zu Speichervorg\xe4ngen oder \xe4hnliches anzuzeigen, z.B. ",(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.em,{children:"Vielen Dank f\xfcr Ihre R\xfcckmeldung"})})," nach Absenden eines Formulars."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"barrierefreiheit",children:"Barrierefreiheit"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"Die optische Standardausgabe der Komponente ist auf die Umsetzung der Barrierefreiheit hin optimiert. Wenn Sie eigene Custom Styles verwenden, kann das zu einer Einschr\xe4nkung der Barrierefreiheit f\xfchren."}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Das ",(0,t.jsx)(n.strong,{children:"Modal"})," ist so realisiert, dass der Fokus darauf liegt, wenn es ge\xf6ffnet wird. Elemente au\xdferhalb des Modals sind dann nicht mehr fokussierbar."]}),"\n",(0,t.jsxs)(n.p,{children:["Wird das ",(0,t.jsx)(n.strong,{children:"Modal"})," geschlossen, liegt der Fokus wieder auf dem Element, welches unter ",(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"_activeElement"})})," angegeben wurde."]}),"\n",(0,t.jsxs)(n.p,{children:["Bei der Realisierung dieser Funktionalit\xe4t haben wir auf die Verwendung der CSS-Properties ",(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"user-select"})})," und ",(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"pointer-events"})})," verzichtet, um das Navigieren aus der Webseite in die Browser-Men\xfc's weiterhin zu erm\xf6glichen. Ebenfalls haben wir darauf verzichtet die ",(0,t.jsx)(n.em,{children:"Event-Propagation"})," zu manipulieren."]}),"\n",(0,t.jsxs)(n.p,{children:["Achten Sie f\xfcr eine optimale Ausgabe der ",(0,t.jsx)(n.strong,{children:"Modal"}),"-Komponente in Screenreadern darauf, das Attribut ",(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"aria-label"})})," korrekt zu setzen."]}),"\n",(0,t.jsx)(n.p,{children:"Des Weiteren gibt es immer nur maximal ein aktives Modal, welches alle selektierbaren Elemente deaktiviert au\xdfer die innerhalb des eigenen Modals. Hierbei ist zu beachten, dass KoliBri nur Elemente deaktiviert die sich im Browser-Seitenbereich befinden. Das Fokussieren den Browser-Men\xfc's ist weiterhin m\xf6glich."}),"\n",(0,t.jsx)(n.h4,{id:"tastatursteuerung",children:"Tastatursteuerung"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Taste"}),(0,t.jsx)(n.th,{children:"Funktion"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"Tab"})}),(0,t.jsx)(n.td,{children:"Bei ge\xf6ffnetem Modal werden alle fokussierbaren Elemente der Reihenfolge nach angesprungen."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"ESC"})}),(0,t.jsx)(n.td,{children:"Schlie\xdft das Modal."})]})]})]}),"\n",(0,t.jsx)(n.h3,{id:"links-und-referenzen",children:"Links und Referenzen"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)("kol-link",{_href:"https://www.w3.org/TR/wai-aria-practices/#dialog_modal",_label:"https://www.w3.org/TR/wai-aria-practices/#dialog_modal",_target:"_blank"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)("kol-link",{_href:"https://www.w3.org/TR/wai-aria-practices-1.1/examples/dialog-modal/dialog.html",_label:"https://www.w3.org/TR/wai-aria-practices-1.1/examples/dialog-modal/dialog.html",_target:"_blank"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Property"}),(0,t.jsx)(n.th,{children:"Attribute"}),(0,t.jsx)(n.th,{children:"Description"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Default"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"_activeElement"})}),(0,t.jsx)(n.td,{children:"--"}),(0,t.jsx)(n.td,{children:"Gibt die Referenz auf das ausl\xf6sende HTML-Element an, wodurch das Modal ge\xf6ffnet wurde."}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:"HTMLElement"})," | ",(0,t.jsx)(n.code,{children:"null"})," | ",(0,t.jsx)(n.code,{children:"undefined"})]}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"undefined"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"_ariaLabel"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"_aria-label"})}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)("span",{className:"text-red-500",children:(0,t.jsx)(n.strong,{children:"[DEPRECATED]"})})," use _label instead",(0,t.jsx)("br",{}),(0,t.jsx)("br",{}),"Deprecated: Setzt die semantische Beschriftung der Komponente."]}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:"string"})," | ",(0,t.jsx)(n.code,{children:"undefined"})]}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"undefined"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"_label"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"_label"})}),(0,t.jsx)(n.td,{children:"Defines the visible or semantic label of the component (e.g. aria-label, label, headline, caption, summary, etc.)."}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:"string"})," | ",(0,t.jsx)(n.code,{children:"undefined"})]}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"undefined"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"_on"})}),(0,t.jsx)(n.td,{children:"--"}),(0,t.jsx)(n.td,{children:"Gibt die EventCallback-Function f\xfcr das Schlie\xdfen des Modals an."}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:"undefined"})," | ",(0,t.jsx)(n.code,{children:"({ onClose?: (() => void)"})," | ",(0,t.jsx)(n.code,{children:"undefined; })"})]}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"undefined"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"_width"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"_width"})}),(0,t.jsx)(n.td,{children:"Defines the width of the modal. (max-width: 100%)"}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:"string"})," | ",(0,t.jsx)(n.code,{children:"undefined"})]}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"'100%'"})})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"slots",children:"Slots"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Slot"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"Der Inhalt des Modals."})]})})]}),"\n",(0,t.jsx)(n.hr,{})]})}function s(e={}){const{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(r,{...e})}):r(e)}},5063:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>a,default:()=>u,frontMatter:()=>s,metadata:()=>d,toc:()=>c});var t=i(11527),l=i(16034),r=i(2684);i(35863),i(94383);const s={title:"Dialog",description:"Beschreibung, Spezifikation und Beispiele f\xfcr Dialog/Modal.",tags:["Dialog","Modal","Beschreibung","Spezifikation","Beispiele"]},a=void 0,d={id:"components/dialog",title:"Dialog",description:"Beschreibung, Spezifikation und Beispiele f\xfcr Dialog/Modal.",source:"@site/versioned_docs/version-1.7/30-components/dialog.mdx",sourceDirName:"30-components",slug:"/components/dialog",permalink:"/docs/1.7/components/dialog",draft:!1,unlisted:!1,tags:[{label:"Dialog",permalink:"/docs/1.7/tags/dialog"},{label:"Modal",permalink:"/docs/1.7/tags/modal"},{label:"Beschreibung",permalink:"/docs/1.7/tags/beschreibung"},{label:"Spezifikation",permalink:"/docs/1.7/tags/spezifikation"},{label:"Beispiele",permalink:"/docs/1.7/tags/beispiele"}],version:"1.7",frontMatter:{title:"Dialog",description:"Beschreibung, Spezifikation und Beispiele f\xfcr Dialog/Modal.",tags:["Dialog","Modal","Beschreibung","Spezifikation","Beispiele"]},sidebar:"tutorialSidebar",previous:{title:"Details",permalink:"/docs/1.7/components/details"},next:{title:"Form",permalink:"/docs/1.7/components/form"}},o={},c=[];function h(e){return(0,t.jsx)(r.ZP,{})}function u(e={}){const{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h()}},35863:(e,n,i)=>{i.d(n,{_:()=>o});var t=i(65636),l=i(50959),r=i(11527);const s=function(e,n,i,t,l){return void 0===l&&(l="editor"),`${e}&module=${t}&initialpath=%23%2F${n}%2F${i}&view=${l}`},a={width:"100%",height:"500px",border:"0",overflow:"hidden"},d=e=>{let{url:n}=e;return(0,r.jsxs)("div",{className:"m-2",children:[(0,r.jsx)("iframe",{src:n,style:a,title:"kolibri-public-ui-code-samples",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}),(0,r.jsx)(t.Nv,{_href:n,_label:"",_target:"codesandbox",children:(0,r.jsx)("img",{alt:"CodeSandbox-Schalter",src:"https://codesandbox.io/static/img/play-codesandbox.svg"})})]})},o=e=>{let{component:n,sample:i}=e;const[o,c]=(0,l.useState)("Preview"),h="https://codesandbox.io/embed/kolibri-public-ui-react-samples-w5u37c?fontsize=14&hidenavigation=1&autoresize=1&theme=dark",u=`%2Fsrc%2Fsamples%2F${n}%2F${i}`,m={angular:`${u}.html`,react:`${u}.tsx`,vue:`${u}.vue`,webcomponent:`${u}.html`},x=`/sample-react/#/${n}/${i}?hideMenus`,p={onSelect:(e,n)=>{switch(n){case 1:c((()=>"Angular"));break;case 2:c((()=>"React"));break;case 3:c((()=>"Vue"));break;case 4:c((()=>"Web Component"));break;default:c((()=>"Preview"))}}};return(0,r.jsxs)(t.UD,{className:"w-full",_label:"Code-Beispiel",_on:p,_tabs:[{_label:"Vorschau"},{_disabled:!0,_label:"Angular"},{_label:"React"},{_disabled:!0,_label:"Vue"},{_disabled:!0,_label:"Web Component"}],children:[(0,r.jsx)("div",{children:"Preview"===o&&(0,r.jsx)("iframe",{src:x,style:a,title:"kolibri-public-ui-code-samples",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"})}),(0,r.jsx)("div",{children:"Angular"===o&&(0,r.jsx)(d,{url:s(h,n,i,m.angular)})}),(0,r.jsx)("div",{children:"React"===o&&(0,r.jsx)(d,{url:s(h,n,i,m.react)})}),(0,r.jsx)("div",{children:"Vue"===o&&(0,r.jsx)(d,{url:s(h,n,i,m.vue)})}),(0,r.jsx)("div",{children:"Web Component"===o&&(0,r.jsx)(d,{url:s(h,n,i,m.webcomponent)})})]})}},94383:(e,n,i)=>{i.d(n,{_:()=>k});var t=i(58801),l=i(65636),r=i(50959),s=i(1206),a=i(11527);function d(e){const{label:n,name:i,update:t,value:s}=e;return(0,r.useEffect)((()=>{s||t(i,"#000000")}),[]),(0,a.jsx)(l.Np,{_label:"",_on:{onChange:(e,n)=>t(i,n)},_value:s,children:(0,a.jsx)("span",{slot:"expert",children:n})})}function o(e){const{attribute:n,label:i,update:t}=e,[s,d]=(0,r.useState)(""),[o,c]=(0,r.useState)(""),[h,u]=(0,r.useState)(""),[m,x]=(0,r.useState)("");let p=!1,b=!1,g=!1,j=!1;n.type.includes("KoliBriAllIcon")?(p=!0,b=!0,g=!0,j=!0):(n.type.includes("KoliBriVerticalIcon")&&(g=!0,j=!0),n.type.includes("KoliBriHorizontalIcon")&&(p=!0,b=!0)),(0,r.useEffect)((()=>{if(!s||o||h||m){const e={};s&&(e.left=`codicon codicon-${s}`),o&&(e.right=`codicon codicon-${o}`),h&&(e.top=`codicon codicon-${h}`),m&&(e.bottom=`codicon codicon-${m}`),Object.keys(e).length&&t(n.name,JSON.stringify(e))}else t(n.name,`codicon codicon-${s}`)}),[s,o,h,m]);const f=["home","arrow-up","arrow-right","arrow-down","arrow-left"];return(0,a.jsxs)("div",{children:[i,p?(0,a.jsx)(l.ox,{_label:"Links",children:(0,a.jsx)("div",{className:"flex flex-wrap gap-2 p-2",children:f.map((e=>(0,a.jsx)(l.ic,{_icons:`codicon codicon-${e}`,_hideLabel:!0,_label:"",_on:{onClick:()=>d(e)}},e)))})}):"",b?(0,a.jsx)(l.ox,{_label:"Rechts",children:(0,a.jsx)("div",{className:"flex flex-wrap gap-2 p-2",children:f.map((e=>(0,a.jsx)(l.ic,{_icons:`codicon codicon-${e}`,_hideLabel:!0,_label:"",_on:{onClick:()=>c(e)}},e)))})}):"",g?(0,a.jsx)(l.ox,{_label:"Oben",children:(0,a.jsx)("div",{className:"flex flex-wrap gap-2 p-2",children:f.map((e=>(0,a.jsx)(l.ic,{_icons:`codicon codicon-${e}`,_hideLabel:!0,_label:"",_on:{onClick:()=>u(e)}},e)))})}):"",j?(0,a.jsx)(l.ox,{_label:"Unten",children:(0,a.jsx)("div",{className:"flex flex-wrap gap-2 p-2",children:f.map((e=>(0,a.jsx)(l.ic,{_icons:`codicon codicon-${e}`,_hideLabel:!0,_label:"",_on:{onClick:()=>x(e)}},e)))})}):""]})}function c(e){const{name:n,label:i,types:t,update:r,value:s}=e,d=[];function o(e){return{label:e,value:e}}return t.includes("undefined")?(d.push({label:"-",value:void 0}),d.push(...t.filter((e=>"undefined"!==e)).map(o))):d.push(...t.filter((e=>"undefined"!==e)).map(o)),(0,a.jsx)(l.r7,{className:"my-2",_label:"",_options:JSON.stringify(d),_on:{onChange:(e,i)=>r(n,i[0])},_value:s?[s]:void 0,children:(0,a.jsx)("span",{slot:"expert",children:i})})}function h(e){const{attribute:n,update:i,value:t}=e,s=(0,r.useMemo)((()=>{let e=n.type.replace(/\\?"/g,"").split(" | ");return e=e.filter((e=>"KoliBriAllIcon ignorieren"!==e)),1===e.length?e[0]:e.includes("string")?"string":e.includes("number")?"number":e.includes("boolean")?"boolean":""}),[n]),h=(0,r.useMemo)((()=>{const e=n.type.split(" | ").map((e=>e.replace(/\\?"/g,""))),r=(0,a.jsx)(l.T5,{_label:n.description,children:n.name});switch(n.name){case"_color":return(0,a.jsx)(d,{name:n.name,label:r,update:i,value:t});case"_icons":return(0,a.jsx)(o,{attribute:n,label:r,update:i,value:t});default:switch(s){case"string":return(0,a.jsx)(l.WD,{className:"my-2",_label:"",_on:{onChange:(e,t)=>i(n.name,t)},_value:t||"",children:(0,a.jsx)("span",{slot:"expert",children:r})});case"number":return(0,a.jsx)(l.c2,{className:"my-2",_label:"",_on:{onChange:(e,t)=>i(n.name,t)},_value:t,children:(0,a.jsx)("span",{slot:"expert",children:r})});case"boolean":return(0,a.jsx)(l.TE,{className:"my-2",_checked:!0===t,_label:"",_on:{onChange:(e,t)=>i(n.name,t)},_variant:"switch",_value:!0,children:(0,a.jsx)("span",{slot:"expert",children:r})});default:return e.length>1?(0,a.jsx)(c,{label:r,name:n.name,types:e,update:i,value:t}):(0,a.jsxs)("p",{children:["Attribut: '",n.name,"'",(0,a.jsx)("br",{}),"Typ: '",n.type,"'"]})}}}),[n,t]);return(0,a.jsx)(a.Fragment,{children:h})}var u=i(22115),m=i(77192),x=i(85630),p=i.n(x);function b(e){const{tag:n,params:i}=e,t=Object.entries(i).filter((e=>"defaultValues"!==e[0]));let l="";const s=(0,r.useMemo)((()=>{let e="";return t.filter((e=>e[0].startsWith("slot-"))).forEach((n=>{const i=n[1],t=n[0].split("-")[1];if(i)if(i.match(/^<.*?>/)?.length){const n=i.indexOf(">");e+=i.substring(0,n)+` slot="${t}"`+i.substring(n)}else e+=`<div slot="${t}">${i}</div>`})),e}),[i]),d=t.filter((e=>!e[0].startsWith("slot-"))).filter((e=>!i.defaultValues.includes(e[0])));for(const[r,a]of d)if(a){let e="";switch(typeof a){case"string":e=` ${r}="${a.replace(/"/g,"'")}"`;break;case"number":e=` ${r}="${a.toString()}"`;break;case"boolean":e=a?` ${r}`:"";break;case"object":e=` ${r}="${JSON.stringify(a)}"`;break;default:e="Never give up hope, one day everything will be fixed."}l+=e}const o=`<kol-${n}${l}>${s}</kol-${n}>`;let c;try{c=(0,m.format)(o,{plugins:[p()],printWidth:80}).replace(/;\n$/,"")}catch(h){c=`\x3c!-- Formatter-Error: Slot-Markup is not valid HTML for formatting. --\x3e\n${o}`}return(0,a.jsx)("div",{className:"h-48 rounded-md overflow-hidden",children:(0,a.jsx)(u.ZP,{defaultLanguage:"html",height:"100%",options:{automaticLayout:!0,fontSize:16,lineNumbers:"off",readOnly:!0},value:c})})}function g(e){const n=Object.fromEntries(Object.entries(e.params).filter((e=>{let[n]=e;return!n.startsWith("slot-")}))),i=Object.entries(e.params).filter((e=>{let[n]=e;return n.startsWith("slot-")})),t={abbr:l.T5,accordion:l.RZ,alert:l.K5,avatar:l.Ek,badge:l.Er,breadcrumb:l.lo,button:l.ic,"button-group":l.uz,"button-link":l.f6,card:l.Gc,details:l.ox,form:l.m5,heading:l.HA,icon:l.Jl,image:l.Cd,"indented-text":l.CV,"input-checkbox":l.TE,"input-color":l.Np,"input-date":l.O,"input-email":l.Lj,"input-file":l.CX,"input-number":l.c2,"input-password":l.z5,"input-radio":l.sy,"input-range":l.TQ,"input-text":l.WD,kolibri:l.Vs,link:l.Nv,"link-button":l.Kc,"link-group":l.$o,logo:l.QK,modal:l.Ud,nav:l.MA,pagination:l.Q4,progress:l.WR,quote:l.VZ,select:l.r7,"skip-nav":l.P,spin:l.qq,"split-button":l.KJ,symbol:l.is,table:l.Vp,tabs:l.UD,textarea:l.Qs,version:l.u_}[e.tag];return t?(0,a.jsx)(t,{...n,children:i.map((e=>(0,a.jsx)("div",{slot:e[0].replace("slot-","").replace("default",""),dangerouslySetInnerHTML:{__html:e[1]}},e[0])))}):(0,a.jsx)("div",{children:"Tag not implemented"})}function j(e){const{description:n,name:i,update:t,value:l}=e;return(0,a.jsxs)("div",{className:"bg-gray-100 my-2 rounded-lg p-2 border border-gray-300 border-solid",children:[(0,a.jsx)("b",{children:i||"default"}),": ",n,(0,a.jsx)("br",{}),(0,a.jsx)(u.ML,{defaultLanguage:"html",height:"5em",onChange:e=>t(`slot-${i}`,e||""),options:{automaticLayout:!0,fontSize:16,lineNumbers:"off"},value:l})]})}const f=["_smart-button","_icon-align"],_={abbr:{"slot-default":"Abbr"},accordion:{"slot-default":"Accordion content"},tabs:{_tabs:'[{"_label":"Tab 1"},{"_label":"Tab 2", "_on": {"onClose": true} },{"_label":"Tab 3"}]'},breadcrumb:{_links:"[{'_label':'Startseite','_href':'#/'},{'_label':'Unterseite der Startseite','_href':'#/unterseite'},{'_label':'Unterseite der Unterseite','_href':'#/unterseite/unterseite'}]"},form:{"_required-text":"Bitte alle Felder ausf\xfcllen."},image:{_src:"https://placehold.co/100x100/cc006e/white"},"link-group":{_links:"[{'_label':'Startseite','_href':'#/'},{'_label':'Unterseite der Startseite','_href':'#/unterseite'},{'_label':'Unterseite der Unterseite','_href':'#/unterseite/unterseite'}]"},nav:{_links:"[{'_label':'Startseite','_href':'#/'},{'_label':'Unterseite der Startseite','_href':'#/unterseite'},{'_label':'Unterseite der Unterseite','_href':'#/unterseite/unterseite'}]"},pagination:{_total:"100",_page:"6"},quote:{_quote:"Hello World"},select:{_options:"[{'label':'Herr','value':0},{'label':'Frau','value':1}]"},"skip-nav":{_links:"[{'_label':'Navigation','_href':'#nav'},{'_label':'Inhalt','_href':'#main'},{'_label':'Kontakt','_href':'#kontakt'},{'_label':'Links','_href':'#links'}]"},table:{_headers:'{"horizontal":[[{"label":"Montag","key":"montag"}]]}',_data:'[{"montag":"Zelle1"},{"montag":"Zelle2"}]',_pagination:'{"page":2}'}};function k(e){const[n,i]=(0,r.useState)(function(){const e={};return Object.values(t.p).forEach((n=>{const i=n.name.replace("kol-","");e[i]={defaultValues:[]},n.attributes.forEach((n=>{void 0!==n.defaultValue&&(e[i][n.name]=n.defaultValue.replace(/'/g,""),e[i].defaultValues.push(n.name)),void 0!==_[i]?.[n.name]&&(e[i][n.name]=_[i][n.name])})),n.slots.forEach((n=>{const t=`slot-${n.name||"default"}`,l=_[i]?.[t];l&&(e[i][t]=l)}))})),e}()),[d,o]=(0,r.useState)("badge");(0,r.useEffect)((()=>{e.component&&o(e.component.replace("kol-",""))}),[e.component]),(0,r.useEffect)((()=>{!!t.p.find((e=>e.name===`kol-${d}`))?.attributes.find((e=>"_label"===e.name))&&!n[d]?._label&&u("_label","Label-Text");!!t.p.find((e=>e.name===`kol-${d}`))?.attributes.find((e=>"_heading"===e.name))&&!n[d]?._heading&&u("_heading","Heading-Text")}),[d]);const c=(0,r.useMemo)((()=>n[d]||{}),[n,d]);function u(e,n){i((i=>{const t={...i[d],[e]:n,defaultValues:i[d].defaultValues.filter((n=>n!==e))};return{...i,[d]:t}}))}const m=Object.values(t.p).find((e=>e.name===`kol-${d}`));return(0,a.jsx)(s.Z,{children:()=>(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(l.Er,{class:"mb-2",_label:"Beta",_color:"#b00"}),(0,a.jsxs)("div",{className:"grid lg:grid-cols-3 gap-2",children:[(0,a.jsxs)(l.UD,{className:"col-span-2",_label:"Wechselnavigation zwischen Viewer und Code",_tabs:[{_label:"Viewer"},{_label:"Code"}],children:[(0,a.jsx)("div",{className:"p-2",children:(0,a.jsx)(g,{tag:d,params:c})}),(0,a.jsx)("div",{className:"lg:col-span-2",children:(0,a.jsx)(b,{params:c,tag:d})})]}),(0,a.jsxs)("div",{className:"grid gap-4 p-2 border-0 border-l border-solid",children:[(0,a.jsx)(l.HA,{_level:3,_label:"Konfigurator"}),(0,a.jsxs)("div",{children:[(0,a.jsx)(l.HA,{_level:4,_label:"Properties"}),(0,a.jsxs)("div",{className:"max-h-96 p-2 overflow-auto mb-4",children:[m&&m.attributes.map((e=>(0,a.jsx)(a.Fragment,{children:!f.includes(e.name)&&!e.description.startsWith("Deprecated:")&&(0,a.jsx)(h,{attribute:e,update:u,value:c[e.name]},e.name)}))),m&&0===m.attributes.length&&(0,a.jsx)("span",{className:"text-gray-500",children:"Keine Properties vorhanden"})]}),(0,a.jsx)(l.HA,{_level:4,_label:"Slots"}),(0,a.jsxs)("div",{className:"max-h-56 p-2 overflow-auto",children:[m&&m.slots.map((e=>(0,a.jsx)(j,{description:e.description,name:e.name||"default",update:u,value:c["slot-"+(e.name||"default")]},e.name))),m&&0===m.slots.length&&(0,a.jsx)("span",{className:"text-gray-500",children:"Keine Slots vorhanden"})]})]})]})]})]})})}}}]);