"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[11e3],{13700:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>u,contentTitle:()=>o,default:()=>b,frontMatter:()=>c,metadata:()=>h,toc:()=>x});var l=i(76776),r=i(108);function t(e){const n={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",hr:"hr",li:"li",mermaid:"mermaid",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.M)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(n.p,{children:["Die ",(0,l.jsx)(n.strong,{children:"Alert"}),"-Komponente gibt ein optisches Feedback an die Nutzer",":innen",". Sie besteht aus einem farblich gestalteten Container, einer \xdcberschrift, einem Inhaltstext sowie einem Icon. Das verwendete Icon und die farbliche Gestaltung sind abh\xe4ngig vom Typ ",(0,l.jsx)(n.code,{children:"_type"})," des Alert."]}),"\n",(0,l.jsx)(n.h2,{id:"konstruktion",children:"Konstruktion"}),"\n",(0,l.jsx)(n.h3,{id:"code",children:"Code"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-html",children:'<kol-alert _label="\xdcberschrift im Alert" _level="1" _type="success" _variant="msg">Textbereich im Alert</kol-alert>\n<kol-alert _label="\xdcberschrift im Alert" _level="2" _type="info" _variant="card">Textbereich im Alert</kol-alert>\n'})}),"\n",(0,l.jsx)(n.h3,{id:"beispiel",children:"Beispiel"}),"\n",(0,l.jsx)("kol-alert",{_label:"\xdcberschrift im Alert",_level:"1",_type:"success",_variant:"msg",children:"Textbereich im Alert"}),"\n",(0,l.jsx)("kol-alert",{_label:"\xdcberschrift im Alert",_level:"2",_type:"info",_variant:"card",children:"Textbereich im Alert"}),"\n",(0,l.jsx)(n.h2,{id:"verwendung",children:"Verwendung"}),"\n",(0,l.jsx)(n.h3,{id:"\xfcberschrift",children:"\xdcberschrift"}),"\n",(0,l.jsxs)(n.p,{children:["Die ",(0,l.jsx)(n.strong,{children:"\xdcberschrift"})," der Alert-Komponente wird \xfcber das Attribut ",(0,l.jsx)(n.code,{children:"_label"})," bestimmt."]}),"\n",(0,l.jsx)(n.h3,{id:"\xfcberschriftenebene",children:"\xdcberschriftenebene"}),"\n",(0,l.jsxs)(n.p,{children:["Die \xdcberschriftenebene wird durch das Attribut ",(0,l.jsx)(n.strong,{children:(0,l.jsx)(n.code,{children:"_level"})})," \xfcbergeben. M\xf6glich sind die Level ",(0,l.jsx)(n.strong,{children:"1"})," bis ",(0,l.jsx)(n.strong,{children:"6"})]}),"\n",(0,l.jsx)(n.h3,{id:"typ-des-alert",children:"Typ des Alert"}),"\n",(0,l.jsxs)(n.p,{children:["Die ",(0,l.jsx)(n.strong,{children:"Alert"}),"-Komponente bietet ",(0,l.jsx)(n.strong,{children:"vier"})," unterschiedliche Typen, die sich jeweils auf die farbliche Gestaltung und das verwendetet Icon im Alert beziehen. Zur Wahl stehen:"]}),"\n",(0,l.jsxs)("ul",{children:[(0,l.jsx)("li",{children:"Success"}),(0,l.jsx)("li",{children:"Error"}),(0,l.jsx)("li",{children:"Info"}),(0,l.jsx)("li",{children:"Warning"})]}),"\n",(0,l.jsxs)(n.p,{children:["Der Typ eines Alert wird \xfcber das Attribut ",(0,l.jsx)(n.code,{children:"_type"})," festgelegt."]}),"\n",(0,l.jsx)(n.h3,{id:"inhalt-des-alert",children:"Inhalt des Alert"}),"\n",(0,l.jsxs)(n.p,{children:["Der Inhalt des Alert wird zwischen das \xf6ffnende Element ",(0,l.jsx)(n.code,{children:"<kol-alert>"})," und das schlie\xdfende ",(0,l.jsx)(n.code,{children:"</kol-alert>"})," geschrieben. Der Inhalt kann aus beliebigem ",(0,l.jsx)(n.strong,{children:"HTML-Code"}),", aber auch aus weiteren ",(0,l.jsx)(n.strong,{children:"KoliBri"}),"-Komponenten bestehen."]}),"\n",(0,l.jsx)(n.h3,{id:"variante-des-alert",children:"Variante des Alert"}),"\n",(0,l.jsxs)(n.p,{children:["\xdcber das Attribut ",(0,l.jsx)(n.strong,{children:(0,l.jsx)(n.code,{children:"_variant"})})," kann festgelegt werden, in welcher Darstellungsvariante das Alert angezeigt wird. ",(0,l.jsx)(n.code,{children:"msg"})," l\xe4sst die linke, farbig hinterlegte Spalte mit dem Icon \xfcber die gesamte H\xf6he des Alerts gehen, ",(0,l.jsx)(n.code,{children:"card"})," setzt die linke Spalte nur neben die \xdcberchrift."]}),"\n",(0,l.jsx)(n.h3,{id:"best-practices",children:"Best practices"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["Verwenden Sie die ",(0,l.jsx)(n.strong,{children:"Alert"}),"-Komponente an geeigneten Positionen auf Ihrer Webseite, um Informationen im richtigen Zusammenhang darzustellen."]}),"\n",(0,l.jsxs)(n.li,{children:["Verwenden Sie immer den richtigen ",(0,l.jsx)(n.strong,{children:"Type"})," der ",(0,l.jsx)(n.strong,{children:"Alert"}),"-Komponente, um bei den Benutzer",":innen"," die gew\xfcnschte Reaktion zu erzeugen. Vermeiden Sie bspw. den Typ ",(0,l.jsx)(n.strong,{children:(0,l.jsx)(n.em,{children:"Error"})}),", wenn Sie auf den erfolgreichen Abschluss eines Speichervorgangs hinweisen m\xf6chten."]}),"\n",(0,l.jsxs)(n.li,{children:["Vermeiden Sie, zu viele ",(0,l.jsx)(n.strong,{children:"Alert"}),"-Komponenten auf einer Seite zu platzieren, da der Informationsgehalt von den Benutzer",":innen"," dann oft nicht mehr als besonders wichtig wahrgenommen wird."]}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"anwendungsf\xe4lle",children:"Anwendungsf\xe4lle"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["Verwenden Sie die ",(0,l.jsx)(n.strong,{children:"Alert"}),"-Komponente, wenn Sie die Benutzer",":innen"," auf Fehler bei der Eingabe in Formularen hinweisen m\xf6chten."]}),"\n",(0,l.jsxs)(n.li,{children:["Verwenden Sie die ",(0,l.jsx)(n.strong,{children:"Alert"}),"-Komponente, um Nutzer",":innen"," auf die erfolgreiche Ausf\xfchrung von Funktionen hinzuweisen, z.B. ",(0,l.jsx)(n.strong,{children:(0,l.jsx)(n.code,{children:"Ihre Anfrage wurde erfolgreich gespeichert"})}),"."]}),"\n",(0,l.jsxs)(n.li,{children:["Verwenden Sie die ",(0,l.jsx)(n.strong,{children:"Alert"}),"-Komponente, um Nutzer",":innen"," weitere Informationen zu einem Thema zur Verf\xfcgung zu stellen."]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"barrierefreiheit",children:"Barrierefreiheit"}),"\n",(0,l.jsxs)(n.p,{children:["Die ",(0,l.jsx)(n.strong,{children:"Alert"}),"-Komponente wurde auf die Darstellung mit h\xf6chstm\xf6glichen Kontrast optimiert."]}),"\n",(0,l.jsx)(n.p,{children:"Das zus\xe4tzliche Icon (je nach gew\xe4hltem Typ) gew\xe4hrleistet, dass die Information vom Nutzer nicht allein \xfcber die Farbe klassifiziert werden muss."}),"\n",(0,l.jsxs)(n.p,{children:["Bei der ",(0,l.jsx)(n.strong,{children:"Alert"}),"-Komponente wurden insbesondere folgende Punkte der Barrierefreiheit betrachtet:"]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Die Schriftfarbe ist entweder wei\xdf oder schwarz."}),"\n",(0,l.jsx)(n.li,{children:"Die Schriftfarbe ist abh\xe4ngig von der Hintergrundfarbe und wechselt immer auf die Schriftfarbe mit dem gr\xf6\xdferen Farbkontrast zur Hintergrundfarbe."}),"\n",(0,l.jsx)(n.li,{children:"Ist der Farbkontrast f\xfcr AA nicht ausreichend, wird die Hintergrundfarbe \xfcberschrieben."}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"links-und-referenzen",children:"Links und Referenzen"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)("kol-link",{_href:"https://www.w3.org/TR/wai-aria-practices/#alert",_label:"https://www.w3.org/TR/wai-aria-practices/#alert",_target:"_blank"}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"Property"}),(0,l.jsx)(n.th,{children:"Attribute"}),(0,l.jsx)(n.th,{children:"Description"}),(0,l.jsx)(n.th,{children:"Type"}),(0,l.jsx)(n.th,{children:"Default"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"_alert"})}),(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"_alert"})}),(0,l.jsx)(n.td,{children:"Defines whether the screen-readers should read out the notification."}),(0,l.jsxs)(n.td,{children:[(0,l.jsx)(n.code,{children:"boolean"})," | ",(0,l.jsx)(n.code,{children:"undefined"})]}),(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"false"})})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"_hasCloser"})}),(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"_has-closer"})}),(0,l.jsx)(n.td,{children:"Defines whether the element can be closed."}),(0,l.jsxs)(n.td,{children:[(0,l.jsx)(n.code,{children:"boolean"})," | ",(0,l.jsx)(n.code,{children:"undefined"})]}),(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"false"})})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"_label"})}),(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"_label"})}),(0,l.jsx)(n.td,{children:"Defines the visible or semantic label of the component (e.g. aria-label, label, headline, caption, summary, etc.)."}),(0,l.jsxs)(n.td,{children:[(0,l.jsx)(n.code,{children:"string"})," | ",(0,l.jsx)(n.code,{children:"undefined"})]}),(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"undefined"})})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"_level"})}),(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"_level"})}),(0,l.jsx)(n.td,{children:"Defines which H-level from 1-6 the heading has. 0 specifies no heading and is shown as bold text."}),(0,l.jsxs)(n.td,{children:[(0,l.jsx)(n.code,{children:"0"})," | ",(0,l.jsx)(n.code,{children:"1"})," | ",(0,l.jsx)(n.code,{children:"2"})," | ",(0,l.jsx)(n.code,{children:"3"})," | ",(0,l.jsx)(n.code,{children:"4"})," | ",(0,l.jsx)(n.code,{children:"5"})," | ",(0,l.jsx)(n.code,{children:"6"})," | ",(0,l.jsx)(n.code,{children:"undefined"})]}),(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"1"})})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"_on"})}),(0,l.jsx)(n.td,{children:"--"}),(0,l.jsx)(n.td,{children:"Gibt die EventCallback-Function f\xfcr das Schlie\xdfen des Alerts an."}),(0,l.jsxs)(n.td,{children:[(0,l.jsx)(n.code,{children:"undefined"})," | ",(0,l.jsx)(n.code,{children:"{ onClose?: EventCallback<Event>"})," | ",(0,l.jsx)(n.code,{children:"undefined; }"})]}),(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"undefined"})})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"_type"})}),(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"_type"})}),(0,l.jsx)(n.td,{children:"Defines either the type of the component or of the components interactive element."}),(0,l.jsxs)(n.td,{children:[(0,l.jsx)(n.code,{children:'"default"'})," | ",(0,l.jsx)(n.code,{children:'"error"'})," | ",(0,l.jsx)(n.code,{children:'"info"'})," | ",(0,l.jsx)(n.code,{children:'"success"'})," | ",(0,l.jsx)(n.code,{children:'"warning"'})," | ",(0,l.jsx)(n.code,{children:"undefined"})]}),(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"'default'"})})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"_variant"})}),(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"_variant"})}),(0,l.jsx)(n.td,{children:"Defines which variant should be used for presentation."}),(0,l.jsxs)(n.td,{children:[(0,l.jsx)(n.code,{children:'"card"'})," | ",(0,l.jsx)(n.code,{children:'"msg"'})," | ",(0,l.jsx)(n.code,{children:"undefined"})]}),(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"'msg'"})})]})]})]}),"\n",(0,l.jsx)(n.h2,{id:"slots",children:"Slots"}),"\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"Slot"}),(0,l.jsx)(n.th,{children:"Description"})]})}),(0,l.jsx)(n.tbody,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{}),(0,l.jsx)(n.td,{children:"Der Inhalt der Meldung."})]})})]}),"\n",(0,l.jsx)(n.h2,{id:"dependencies",children:"Dependencies"}),"\n",(0,l.jsx)(n.h3,{id:"used-by",children:"Used by"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:".",children:"kol-alert"})}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"depends-on",children:"Depends on"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"./heading",children:"kol-heading-wc"})}),"\n",(0,l.jsx)(n.li,{children:"kol-button-wc"}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"./icon",children:"kol-icon"})}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"graph",children:"Graph"}),"\n",(0,l.jsx)(n.mermaid,{value:"graph TD;\n  kol-alert-wc --\x3e kol-heading-wc\n  kol-alert-wc --\x3e kol-button-wc\n  kol-alert-wc --\x3e kol-icon\n  kol-button-wc --\x3e kol-span-wc\n  kol-button-wc --\x3e kol-tooltip-wc\n  kol-span-wc --\x3e kol-icon\n  kol-tooltip-wc --\x3e kol-span-wc\n  kol-alert --\x3e kol-alert-wc\n  style kol-alert-wc fill:#f9f,stroke:#333,stroke-width:4px"}),"\n",(0,l.jsx)(n.hr,{})]})}function s(e={}){const{wrapper:n}={...(0,r.M)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(t,{...e})}):t(e)}var a=i(37704),d=i(54592);const c={title:"Alert",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die Alert-Komponente.",tags:["Alert","Beschreibung","Spezifikation","Beispiele"]},o=void 0,h={id:"components/alert",title:"Alert",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die Alert-Komponente.",source:"@site/versioned_docs/version-1.6/30-components/alert.mdx",sourceDirName:"30-components",slug:"/components/alert",permalink:"/en/docs/1.6/components/alert",draft:!1,unlisted:!1,tags:[{inline:!0,label:"Alert",permalink:"/en/docs/1.6/tags/alert"},{inline:!0,label:"Beschreibung",permalink:"/en/docs/1.6/tags/beschreibung"},{inline:!0,label:"Spezifikation",permalink:"/en/docs/1.6/tags/spezifikation"},{inline:!0,label:"Beispiele",permalink:"/en/docs/1.6/tags/beispiele"}],version:"1.6",frontMatter:{title:"Alert",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die Alert-Komponente.",tags:["Alert","Beschreibung","Spezifikation","Beispiele"]},sidebar:"tutorialSidebar",previous:{title:"Accordion",permalink:"/en/docs/1.6/components/accordion"},next:{title:"Avatar",permalink:"/en/docs/1.6/components/avatar"}},u={},x=[{value:"Konstruktion",id:"konstruktion",level:2},{value:"Code",id:"code",level:3},{value:"Beispiel",id:"beispiel",level:3},{value:"Verwendung",id:"verwendung",level:2},{value:"\xdcberschrift",id:"\xfcberschrift",level:3},{value:"\xdcberschriftenebene",id:"\xfcberschriftenebene",level:3},{value:"Typ des Alert",id:"typ-des-alert",level:3},{value:"Inhalt des Alert",id:"inhalt-des-alert",level:3},{value:"Variante des Alert",id:"variante-des-alert",level:3},{value:"Best practices",id:"best-practices",level:3},{value:"Anwendungsf\xe4lle",id:"anwendungsf\xe4lle",level:3},{value:"Barrierefreiheit",id:"barrierefreiheit",level:2},{value:"Links und Referenzen",id:"links-und-referenzen",level:2},{value:"Properties",id:"properties",level:2},{value:"Slots",id:"slots",level:2},{value:"Dependencies",id:"dependencies",level:2},{value:"Used by",id:"used-by",level:3},{value:"Depends on",id:"depends-on",level:3},{value:"Graph",id:"graph",level:3},{value:"Live-Editor",id:"live-editor",level:2},{value:"Beispiele",id:"beispiele",level:2},{value:"Einfachs Meldungen",id:"einfachs-meldungen",level:3},{value:"Card oder als Msg",id:"card-oder-als-msg",level:3},{value:"Mit HTML-Struktur",id:"mit-html-struktur",level:3}];function p(e){const n={h2:"h2",h3:"h3",...(0,r.M)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(s,{}),"\n",(0,l.jsx)(n.h2,{id:"live-editor",children:"Live-Editor"}),"\n",(0,l.jsx)(d.o,{component:"alert"}),"\n",(0,l.jsx)(n.h2,{id:"beispiele",children:"Beispiele"}),"\n",(0,l.jsx)(n.h3,{id:"einfachs-meldungen",children:"Einfachs Meldungen"}),"\n",(0,l.jsx)(a.Q,{component:"alert",sample:"basic"}),"\n",(0,l.jsx)(n.h3,{id:"card-oder-als-msg",children:"Card oder als Msg"}),"\n",(0,l.jsx)(a.Q,{component:"alert",sample:"card-msg"}),"\n",(0,l.jsx)(n.h3,{id:"mit-html-struktur",children:"Mit HTML-Struktur"}),"\n",(0,l.jsx)(a.Q,{component:"alert",sample:"html"})]})}function b(e={}){const{wrapper:n}={...(0,r.M)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(p,{...e})}):p(e)}},37704:(e,n,i)=>{i.d(n,{Q:()=>c});var l=i(64992),r=i(80924),t=i(76776);const s=function(e,n,i,l,r){return void 0===r&&(r="editor"),`${e}&module=${l}&initialpath=%23%2F${n}%2F${i}&view=${r}`},a={width:"100%",height:"500px",border:"0",overflow:"hidden"},d=e=>{let{url:n}=e;return(0,t.jsxs)("div",{className:"m-2",children:[(0,t.jsx)("iframe",{src:n,style:a,title:"kolibri-public-ui-code-samples",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}),(0,t.jsx)(l.GQ,{_href:n,_label:"",_target:"codesandbox",children:(0,t.jsx)("img",{alt:"CodeSandbox-Schalter",src:"https://codesandbox.io/static/img/play-codesandbox.svg"})})]})},c=e=>{let{component:n,sample:i}=e;const[c,o]=(0,r.useState)("Preview"),h="https://codesandbox.io/embed/kolibri-public-ui-react-samples-w5u37c?fontsize=14&hidenavigation=1&autoresize=1&theme=dark",u=`%2Fsrc%2Fsamples%2F${n}%2F${i}`,x={angular:`${u}.html`,react:`${u}.tsx`,vue:`${u}.vue`,webcomponent:`${u}.html`},p=`/sample-react/#/${n}/${i}?hideMenus`,b={onSelect:(e,n)=>{switch(n){case 1:o((()=>"Angular"));break;case 2:o((()=>"React"));break;case 3:o((()=>"Vue"));break;case 4:o((()=>"Web Component"));break;default:o((()=>"Preview"))}}};return(0,t.jsxs)(l._,{className:"w-full",_label:"Code-Beispiel",_on:b,_tabs:[{_label:"Vorschau"},{_disabled:!0,_label:"Angular"},{_label:"React"},{_disabled:!0,_label:"Vue"},{_disabled:!0,_label:"Web Component"}],children:[(0,t.jsx)("div",{children:"Preview"===c&&(0,t.jsx)("iframe",{src:p,style:a,title:"kolibri-public-ui-code-samples",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"})}),(0,t.jsx)("div",{children:"Angular"===c&&(0,t.jsx)(d,{url:s(h,n,i,x.angular)})}),(0,t.jsx)("div",{children:"React"===c&&(0,t.jsx)(d,{url:s(h,n,i,x.react)})}),(0,t.jsx)("div",{children:"Vue"===c&&(0,t.jsx)(d,{url:s(h,n,i,x.vue)})}),(0,t.jsx)("div",{children:"Web Component"===c&&(0,t.jsx)(d,{url:s(h,n,i,x.webcomponent)})})]})}},54592:(e,n,i)=>{i.d(n,{o:()=>_});var l=i(592),r=i(64992),t=i(80924),s=i(73700),a=i(76776);function d(e){const{label:n,name:i,update:l,value:s}=e;return(0,t.useEffect)((()=>{s||l(i,"#000000")}),[]),(0,a.jsx)(r.eK,{_label:"",_on:{onInput:(e,n)=>l(i,n)},_value:s,children:(0,a.jsx)("span",{slot:"expert",children:n})})}function c(e){const{attribute:n,label:i,update:l}=e,[s,d]=(0,t.useState)(""),[c,o]=(0,t.useState)(""),[h,u]=(0,t.useState)(""),[x,p]=(0,t.useState)("");let b=!1,j=!1,m=!1,f=!1;n.type.includes("KoliBriAllIcon")?(b=!0,j=!0,m=!0,f=!0):(n.type.includes("KoliBriVerticalIcon")&&(m=!0,f=!0),n.type.includes("KoliBriHorizontalIcon")&&(b=!0,j=!0)),(0,t.useEffect)((()=>{if(!s||c||h||x){const e={};s&&(e.left=`codicon codicon-${s}`),c&&(e.right=`codicon codicon-${c}`),h&&(e.top=`codicon codicon-${h}`),x&&(e.bottom=`codicon codicon-${x}`),Object.keys(e).length&&l(n.name,JSON.stringify(e))}else l(n.name,`codicon codicon-${s}`)}),[s,c,h,x]);const g=["home","arrow-up","arrow-right","arrow-down","arrow-left"];return(0,a.jsxs)("div",{children:[i,b?(0,a.jsx)(r.Si,{_label:"Links",children:(0,a.jsx)("div",{className:"flex flex-wrap gap-2 p-2",children:g.map((e=>(0,a.jsx)(r.qC,{_icons:`codicon codicon-${e}`,_hideLabel:!0,_label:"",_on:{onClick:()=>d(e)}},e)))})}):"",j?(0,a.jsx)(r.Si,{_label:"Rechts",children:(0,a.jsx)("div",{className:"flex flex-wrap gap-2 p-2",children:g.map((e=>(0,a.jsx)(r.qC,{_icons:`codicon codicon-${e}`,_hideLabel:!0,_label:"",_on:{onClick:()=>o(e)}},e)))})}):"",m?(0,a.jsx)(r.Si,{_label:"Oben",children:(0,a.jsx)("div",{className:"flex flex-wrap gap-2 p-2",children:g.map((e=>(0,a.jsx)(r.qC,{_icons:`codicon codicon-${e}`,_hideLabel:!0,_label:"",_on:{onClick:()=>u(e)}},e)))})}):"",f?(0,a.jsx)(r.Si,{_label:"Unten",children:(0,a.jsx)("div",{className:"flex flex-wrap gap-2 p-2",children:g.map((e=>(0,a.jsx)(r.qC,{_icons:`codicon codicon-${e}`,_hideLabel:!0,_label:"",_on:{onClick:()=>p(e)}},e)))})}):""]})}function o(e){const{name:n,label:i,types:l,update:t,value:s}=e,d=[];function c(e){return{label:e,value:e}}return l.includes("undefined")?(d.push({label:"-",value:void 0}),d.push(...l.filter((e=>"undefined"!==e)).map(c))):d.push(...l.filter((e=>"undefined"!==e)).map(c)),(0,a.jsx)(r.qy,{className:"my-2",_label:"",_options:JSON.stringify(d),_on:{onInput:(e,i)=>t(n,i[0])},_value:s?[s]:void 0,children:(0,a.jsx)("span",{slot:"expert",children:i})})}function h(e){const{attribute:n,update:i,value:l}=e,s=(0,t.useMemo)((()=>{let e=n.type.replace(/\\?"/g,"").split(" | ");return e=e.filter((e=>"KoliBriAllIcon ignorieren"!==e)),1===e.length?e[0]:e.includes("string")?"string":e.includes("number")?"number":e.includes("boolean")?"boolean":""}),[n]),h=(0,t.useMemo)((()=>{const e=n.type.split(" | ").map((e=>e.replace(/\\?"/g,""))),t=(0,a.jsx)(r.s1,{_label:n.description,children:n.name});switch(n.name){case"_color":return(0,a.jsx)(d,{name:n.name,label:t,update:i,value:l});case"_icons":return(0,a.jsx)(c,{attribute:n,label:t,update:i,value:l});default:switch(s){case"string":return(0,a.jsx)(r.Uh,{className:"my-2",_label:"",_on:{onInput:(e,l)=>i(n.name,l)},_value:l||"",children:(0,a.jsx)("span",{slot:"expert",children:t})});case"number":return(0,a.jsx)(r.QL,{className:"my-2",_label:"",_on:{onInput:(e,l)=>i(n.name,l)},_value:l,children:(0,a.jsx)("span",{slot:"expert",children:t})});case"boolean":return(0,a.jsx)(r.Q7,{className:"my-2",_checked:!0===l,_label:"",_on:{onInput:(e,l)=>i(n.name,l)},_variant:"switch",_value:!0,children:(0,a.jsx)("span",{slot:"expert",children:t})});default:return e.length>1?(0,a.jsx)(o,{label:t,name:n.name,types:e,update:i,value:l}):(0,a.jsxs)("p",{children:["Attribut: '",n.name,"'",(0,a.jsx)("br",{}),"Typ: '",n.type,"'"]})}}}),[n,l]);return(0,a.jsx)(a.Fragment,{children:h})}var u=i(63136),x=i(28256),p=i(39452),b=i.n(p);function j(e){const{tag:n,params:i}=e,l=Object.entries(i).filter((e=>"defaultValues"!==e[0]));let r="";const s=(0,t.useMemo)((()=>{let e="";return l.filter((e=>e[0].startsWith("slot-"))).forEach((n=>{const i=n[1],l=n[0].split("-")[1];if(i)if(i.match(/^<.*?>/)?.length){const n=i.indexOf(">");e+=i.substring(0,n)+` slot="${l}"`+i.substring(n)}else e+=`<div slot="${l}">${i}</div>`})),e}),[i]),d=l.filter((e=>!e[0].startsWith("slot-"))).filter((e=>!i.defaultValues.includes(e[0])));for(const[t,a]of d)if(a){let e="";switch(typeof a){case"string":e=` ${t}="${a.replace(/"/g,"'")}"`;break;case"number":e=` ${t}="${a.toString()}"`;break;case"boolean":e=a?` ${t}`:"";break;case"object":e=` ${t}="${JSON.stringify(a)}"`;break;default:e="Never give up hope, one day everything will be fixed."}r+=e}const c=`<kol-${n}${r}>${s}</kol-${n}>`;let o;try{o=(0,x.format)(c,{plugins:[b()],printWidth:80}).replace(/;\n$/,"")}catch(h){o=`\x3c!-- Formatter-Error: Slot-Markup is not valid HTML for formatting. --\x3e\n${c}`}return(0,a.jsx)("div",{className:"h-48 rounded-md overflow-hidden",children:(0,a.jsx)(u.cp,{defaultLanguage:"html",height:"100%",options:{automaticLayout:!0,fontSize:16,lineNumbers:"off",readOnly:!0},value:o})})}function m(e){const n=Object.fromEntries(Object.entries(e.params).filter((e=>{let[n]=e;return!n.startsWith("slot-")}))),i=Object.entries(e.params).filter((e=>{let[n]=e;return n.startsWith("slot-")})),l={abbr:r.s1,accordion:r.IP,alert:r.mW,avatar:r.aq,badge:r.cX,breadcrumb:r.If,button:r.qC,"button-group":r.Os,"button-link":r.u_,card:r.Yh,details:r.Si,form:r.OO,heading:r.ch,icon:r.SA,image:r.iu,"indented-text":r.MV,"input-checkbox":r.Q7,"input-color":r.eK,"input-date":r.QZ,"input-email":r.kN,"input-file":r.Ex,"input-number":r.QL,"input-password":r.EH,"input-radio":r.wJ,"input-range":r.Ef,"input-text":r.Uh,kolibri:r.aY,link:r.GQ,"link-button":r._k,"link-group":r.O_,logo:r.ae,modal:r.cT,nav:r.Y4,pagination:r.kj,progress:r.O0,quote:r.SY,select:r.qy,"skip-nav":r.Ig,spin:r.kP,"split-button":r.a,symbol:r.OM,table:r.Y9,tabs:r._,textarea:r.DG,version:r.k1}[e.tag];return l?(0,a.jsx)(l,{...n,children:i.map((e=>(0,a.jsx)("div",{slot:e[0].replace("slot-","").replace("default",""),dangerouslySetInnerHTML:{__html:e[1]}},e[0])))}):(0,a.jsx)("div",{children:"Tag not implemented"})}function f(e){const{description:n,name:i,update:l,value:r}=e;return(0,a.jsxs)("div",{className:"bg-gray-100 my-2 rounded-lg p-2 border border-gray-300 border-solid",children:[(0,a.jsx)("b",{children:i||"default"}),": ",n,(0,a.jsx)("br",{}),(0,a.jsx)(u.GW,{defaultLanguage:"html",height:"5em",onChange:e=>l(`slot-${i}`,e||""),options:{automaticLayout:!0,fontSize:16,lineNumbers:"off"},value:r})]})}const g=["_smart-button","_icon-align"],v={abbr:{"slot-default":"Abbr"},accordion:{"slot-default":"Accordion content"},tabs:{_tabs:'[{"_label":"Tab 1"},{"_label":"Tab 2", "_on": {"onClose": true} },{"_label":"Tab 3"}]'},breadcrumb:{_links:"[{'_label':'Startseite','_href':'#/'},{'_label':'Unterseite der Startseite','_href':'#/unterseite'},{'_label':'Unterseite der Unterseite','_href':'#/unterseite/unterseite'}]"},form:{"_required-text":"Bitte alle Felder ausf\xfcllen."},image:{_src:"https://placehold.co/100x100/cc006e/white"},"link-group":{_links:"[{'_label':'Startseite','_href':'#/'},{'_label':'Unterseite der Startseite','_href':'#/unterseite'},{'_label':'Unterseite der Unterseite','_href':'#/unterseite/unterseite'}]"},nav:{_links:"[{'_label':'Startseite','_href':'#/'},{'_label':'Unterseite der Startseite','_href':'#/unterseite'},{'_label':'Unterseite der Unterseite','_href':'#/unterseite/unterseite'}]"},pagination:{_total:"100",_page:"6"},quote:{_quote:"Hello World"},select:{_options:"[{'label':'Herr','value':0},{'label':'Frau','value':1}]"},"skip-nav":{_links:"[{'_label':'Navigation','_href':'#nav'},{'_label':'Inhalt','_href':'#main'},{'_label':'Kontakt','_href':'#kontakt'},{'_label':'Links','_href':'#links'}]"},table:{_headers:'{"horizontal":[[{"label":"Montag","key":"montag"}]]}',_data:'[{"montag":"Zelle1"},{"montag":"Zelle2"}]',_pagination:'{"page":2}'}};function _(e){const[n,i]=(0,t.useState)(function(){const e={};return Object.values(l.Q).forEach((n=>{const i=n.name.replace("kol-","");e[i]={defaultValues:[]},n.attributes.forEach((n=>{void 0!==n.defaultValue&&(e[i][n.name]=n.defaultValue.replace(/'/g,""),e[i].defaultValues.push(n.name)),void 0!==v[i]?.[n.name]&&(e[i][n.name]=v[i][n.name])})),n.slots.forEach((n=>{const l=`slot-${n.name||"default"}`,r=v[i]?.[l];r&&(e[i][l]=r)}))})),e}()),[d,c]=(0,t.useState)("badge");(0,t.useEffect)((()=>{e.component&&c(e.component.replace("kol-",""))}),[e.component]),(0,t.useEffect)((()=>{!!l.Q.find((e=>e.name===`kol-${d}`))?.attributes.find((e=>"_label"===e.name))&&!n[d]?._label&&u("_label","Label-Text");!!l.Q.find((e=>e.name===`kol-${d}`))?.attributes.find((e=>"_heading"===e.name))&&!n[d]?._heading&&u("_heading","Heading-Text")}),[d]);const o=(0,t.useMemo)((()=>n[d]||{}),[n,d]);function u(e,n){i((i=>{const l={...i[d],[e]:n,defaultValues:i[d].defaultValues.filter((n=>n!==e))};return{...i,[d]:l}}))}const x=Object.values(l.Q).find((e=>e.name===`kol-${d}`));return(0,a.jsx)(s.c,{children:()=>(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(r.cX,{class:"mb-2",_label:"Beta",_color:"#b00"}),(0,a.jsxs)("div",{className:"grid lg:grid-cols-3 gap-2",children:[(0,a.jsxs)(r._,{className:"col-span-2",_label:"Wechselnavigation zwischen Viewer und Code",_tabs:[{_label:"Viewer"},{_label:"Code"}],children:[(0,a.jsx)("div",{className:"p-2",children:(0,a.jsx)(m,{tag:d,params:o})}),(0,a.jsx)("div",{className:"lg:col-span-2",children:(0,a.jsx)(j,{params:o,tag:d})})]}),(0,a.jsxs)("div",{className:"grid gap-4 p-2 border-0 border-l border-solid",children:[(0,a.jsx)(r.ch,{_level:3,_label:"Konfigurator"}),(0,a.jsxs)("div",{children:[(0,a.jsx)(r.ch,{_level:4,_label:"Properties"}),(0,a.jsxs)("div",{className:"max-h-96 p-2 overflow-auto mb-4",children:[x&&x.attributes.map((e=>(0,a.jsx)(a.Fragment,{children:!g.includes(e.name)&&!e.description.startsWith("Deprecated:")&&(0,a.jsx)(h,{attribute:e,update:u,value:o[e.name]},e.name)}))),x&&0===x.attributes.length&&(0,a.jsx)("span",{className:"text-gray-500",children:"Keine Properties vorhanden"})]}),(0,a.jsx)(r.ch,{_level:4,_label:"Slots"}),(0,a.jsxs)("div",{className:"max-h-56 p-2 overflow-auto",children:[x&&x.slots.map((e=>(0,a.jsx)(f,{description:e.description,name:e.name||"default",update:u,value:o["slot-"+(e.name||"default")]},e.name))),x&&0===x.slots.length&&(0,a.jsx)("span",{className:"text-gray-500",children:"Keine Slots vorhanden"})]})]})]})]})]})})}}}]);