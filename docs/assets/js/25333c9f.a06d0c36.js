"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[7276],{19408:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>u,contentTitle:()=>o,default:()=>j,frontMatter:()=>c,metadata:()=>h,toc:()=>x});var l=i(76776),t=i(108);function r(e){const n={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",hr:"hr",li:"li",mermaid:"mermaid",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.M)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(n.p,{children:["Die Komponente ",(0,l.jsx)(n.strong,{children:"InputRadio"})," besteht aus einer Sammlung von Radio-Elementen und stellt so eine Auswahlm\xf6glichkeit zwischen verschiedenen Werten dar. Es kann immer nur ein einzelner Wert zur gleichen Zeit ausgew\xe4hlt werden. Ausgew\xe4hlte Radio-Elemente werden i.d.R. mit einem gef\xfcllten und optisch hervorgehobenen Kreis dargestellt."]}),"\n",(0,l.jsx)("kol-alert",{_alert:!0,_heading:"Hinweis",_level:"1",_type:"info",children:(0,l.jsx)(n.p,{children:"Das Input-Radio dient der Abbildung einer Auswahlm\xf6glichkeit bei der mindestens und maximal eine Auswahl getroffen werden kann. Das bedeutet, dass ein Input-Radio nicht einzeln vorkommen kann. Aufgrund dessen haben wir die Komponente als Listen-Komponente umgesetzt."})}),"\n",(0,l.jsx)("br",{}),"\n",(0,l.jsx)(n.h2,{id:"konstruktion",children:"Konstruktion"}),"\n",(0,l.jsx)(n.h3,{id:"code",children:"Code"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-html",children:'<kol-input-radio\n\t_id="anrede"\n\t_name="anrede"\n\t_list=\'[{"label":"Herr","value":"Herr"},{"label":"Frau","value":"Frau"}, {"label":"Firma","value":"Firma"}]\'\n></kol-input-radio>\n'})}),"\n",(0,l.jsx)(n.h3,{id:"beispiel",children:"Beispiel"}),"\n",(0,l.jsx)("kol-input-radio",{_id:"anrede",_name:"anrede",_list:'[{"label":"Herr","value":"Herr"},{"label":"Frau","value":"Frau"}, {"label":"Firma","value":"Firma"}]'}),"\n",(0,l.jsx)(n.h2,{id:"verwendung",children:"Verwendung"}),"\n",(0,l.jsxs)(n.p,{children:["Die einzelnen Radio-Elemente innerhalb der Komponente ** InputRadio** werden \xfcber dass Attribut ",(0,l.jsxs)(n.strong,{children:["_ ",(0,l.jsx)(n.em,{children:"list"})]})," als JSON-Objekt \xfcbergeben."]}),"\n",(0,l.jsx)(n.p,{children:"Das JSON-Objekt erwartet je Radio-Element folgende Werte:"}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:(0,l.jsx)(n.code,{children:"label"})})," = Beschriftung des Radio-Elements"]}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:(0,l.jsx)(n.code,{children:"value"})})," = Wert des Radio-Elements"]}),"\n",(0,l.jsx)(n.p,{children:"Beispiel f\xfcr die Erstellung des JSON-Objekts zur Definition der Radio-Elemente:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-html",children:"[ { label: 'Herr', value: 'Herr', }, { label: 'Frau', value: 'Frau', }, { label: 'Firma', value: 'Firma', }, ];\n"})}),"\n",(0,l.jsx)(n.h3,{id:"onchange",children:"onChange"}),"\n",(0,l.jsxs)(n.p,{children:["Dem EventHandler werden zwei Parameter \xfcbergeben, das urspr\xfcngliche Event und der Wert des ausgew\xe4hlten RadioButtons.\n",(0,l.jsx)("kol-alert",{_heading:"Hinweis f\xfcr Versionen <2",_type:"info",children:"event.target.value enth\xe4lt die Nummer der Checkbox mit einem '-' davor."})]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-jsx",children:"<kol-input-radio\n\t_id=\"anrede\"\n\t_name=\"anrede\"\n\t_list={[\n\t\t{ label: 'Herr', value: 'Herr' },\n\t\t{ label: 'Frau', value: 'Frau' },\n\t\t{ label: 'Firma', value: 'Firma' },\n\t]}\n\t_on={{ onChange: (_event, value) => setValue(value) }}\n></kol-input-radio>\n"})}),"\n",(0,l.jsx)(n.h3,{id:"best-practices",children:"Best practices"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["Achten sie darauf ",(0,l.jsx)(n.code,{children:"id"})," und ",(0,l.jsx)(n.code,{children:"name"})," korrekt zu setzen, damit die Daten beim Formular Absenden mitgesendet werden."]}),"\n",(0,l.jsxs)(n.li,{children:["Es wird immer mindestens ein Wert ausgew\xe4hlt. \xc4hnlich dem Verhalten einer Select-Auswahl. (",(0,l.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/radio#selecting_a_radio_button_by_default",children:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/radio#selecting_a_radio_button_by_default"}),")"]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"barrierefreiheit",children:"Barrierefreiheit"}),"\n",(0,l.jsx)(n.h3,{id:"tastatursteuerung",children:"Tastatursteuerung"}),"\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"Taste"}),(0,l.jsx)(n.th,{children:"Funktion"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"Tab"})}),(0,l.jsx)(n.td,{children:"Fokussiert das erste Radio-Element, aktiviert es aber nicht."})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"Leer"})}),(0,l.jsx)(n.td,{children:"Aktiviert das erste Radio-Element, nachdem die RadioGroup \xfcber die Tab-Taste angesprungen wurde."})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"Pfeil-Tasten"})}),(0,l.jsx)(n.td,{children:"Durchlaufen aller Radio-Elemente und aktiviert das gerade fokussierte Element."})]})]})]}),"\n",(0,l.jsx)(n.h2,{id:"links-und-referenzen",children:"Links und Referenzen"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"https://www.w3.org/TR/wai-aria-practices/#radiobutton",children:"https://www.w3.org/TR/wai-aria-practices/#radiobutton"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"https://www.w3schools.com/tags/att_input_type_radio.asp",children:"https://www.w3schools.com/tags/att_input_type_radio.asp"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/radio",children:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/radio"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"https://medium.com/@gavyn/til-autofocus-inputs-are-an-accessibility-problem-32ced60c3109",children:"https://medium.com/@gavyn/til-autofocus-inputs-are-an-accessibility-problem-32ced60c3109"})}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"Property"}),(0,l.jsx)(n.th,{children:"Attribute"}),(0,l.jsx)(n.th,{children:"Description"}),(0,l.jsx)(n.th,{children:"Type"}),(0,l.jsx)(n.th,{children:"Default"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"_accessKey"})}),(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"_access-key"})}),(0,l.jsx)(n.td,{children:"Gibt an, mit welcher Tastenkombination man das Input ausl\xf6sen oder fokussieren kann."}),(0,l.jsxs)(n.td,{children:[(0,l.jsx)(n.code,{children:"string"})," | ",(0,l.jsx)(n.code,{children:"undefined"})]}),(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"undefined"})})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"_alert"})}),(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"_alert"})}),(0,l.jsx)(n.td,{children:"Gibt an, ob die Fehlermeldung vorgelesen werden soll, wenn es eine gibt."}),(0,l.jsxs)(n.td,{children:[(0,l.jsx)(n.code,{children:"boolean"})," | ",(0,l.jsx)(n.code,{children:"undefined"})]}),(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"true"})})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"_disabled"})}),(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"_disabled"})}),(0,l.jsx)(n.td,{children:"Setzt das Feld in einen inaktiven Zustand, in dem es keine Interaktion erlaubt."}),(0,l.jsxs)(n.td,{children:[(0,l.jsx)(n.code,{children:"boolean"})," | ",(0,l.jsx)(n.code,{children:"undefined"})]}),(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"undefined"})})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"_error"})}),(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"_error"})}),(0,l.jsx)(n.td,{children:"Gibt den Text f\xfcr eine Fehlermeldung an."}),(0,l.jsxs)(n.td,{children:[(0,l.jsx)(n.code,{children:"string"})," | ",(0,l.jsx)(n.code,{children:"undefined"})]}),(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"undefined"})})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"_hideLabel"})}),(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"_hide-label"})}),(0,l.jsx)(n.td,{children:"Versteckt das sichtbare Label des Elements."}),(0,l.jsxs)(n.td,{children:[(0,l.jsx)(n.code,{children:"boolean"})," | ",(0,l.jsx)(n.code,{children:"undefined"})]}),(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"undefined"})})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"_hint"})}),(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"_hint"})}),(0,l.jsx)(n.td,{children:"Gibt den Hinweistext an."}),(0,l.jsxs)(n.td,{children:[(0,l.jsx)(n.code,{children:"string"})," | ",(0,l.jsx)(n.code,{children:"undefined"})]}),(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"''"})})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"_id"})}),(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"_id"})}),(0,l.jsx)(n.td,{children:"Gibt die technische ID des Eingabefeldes an."}),(0,l.jsxs)(n.td,{children:[(0,l.jsx)(n.code,{children:"string"})," | ",(0,l.jsx)(n.code,{children:"undefined"})]}),(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"undefined"})})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsxs)(n.td,{children:[(0,l.jsx)(n.code,{children:"_list"})," ",(0,l.jsx)(n.em,{children:"(required)"})]}),(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"_list"})}),(0,l.jsx)(n.td,{children:"Gibt die Liste der Optionen f\xfcr das Eingabefeld an."}),(0,l.jsxs)(n.td,{children:[(0,l.jsx)(n.code,{children:"Option<W3CInputValue>[]"})," | ",(0,l.jsx)(n.code,{children:"string"})]}),(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"undefined"})})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"_name"})}),(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"_name"})}),(0,l.jsx)(n.td,{children:"Gibt den technischen Namen des Eingabefeldes an."}),(0,l.jsxs)(n.td,{children:[(0,l.jsx)(n.code,{children:"string"})," | ",(0,l.jsx)(n.code,{children:"undefined"})]}),(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"undefined"})})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"_on"})}),(0,l.jsx)(n.td,{children:"--"}),(0,l.jsx)(n.td,{children:"Gibt die EventCallback-Funktionen f\xfcr das Input-Event an."}),(0,l.jsxs)(n.td,{children:[(0,l.jsx)(n.code,{children:"InputTypeOnBlur & InputTypeOnClick & InputTypeOnChange & InputTypeOnFocus"})," | ",(0,l.jsx)(n.code,{children:"undefined"})]}),(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"undefined"})})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"_orientation"})}),(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"_orientation"})}),(0,l.jsx)(n.td,{children:"Gibt die Ausrichtung der LinkList an."}),(0,l.jsxs)(n.td,{children:[(0,l.jsx)(n.code,{children:'"horizontal"'})," | ",(0,l.jsx)(n.code,{children:'"vertical"'})," | ",(0,l.jsx)(n.code,{children:"undefined"})]}),(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"'vertical'"})})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"_required"})}),(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"_required"})}),(0,l.jsx)(n.td,{children:"Macht das Eingabeelement zu einem Pflichtfeld."}),(0,l.jsxs)(n.td,{children:[(0,l.jsx)(n.code,{children:"boolean"})," | ",(0,l.jsx)(n.code,{children:"undefined"})]}),(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"undefined"})})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"_tabIndex"})}),(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"_tab-index"})}),(0,l.jsx)(n.td,{children:"Gibt an, welchen Tab-Index dieses Input hat."}),(0,l.jsxs)(n.td,{children:[(0,l.jsx)(n.code,{children:"number"})," | ",(0,l.jsx)(n.code,{children:"undefined"})]}),(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"undefined"})})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"_touched"})}),(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"_touched"})}),(0,l.jsxs)(n.td,{children:["Gibt an, ob dieses Eingabefeld von Nutzer",":innen"," einmal besucht/ber\xfchrt wurde."]}),(0,l.jsxs)(n.td,{children:[(0,l.jsx)(n.code,{children:"boolean"})," | ",(0,l.jsx)(n.code,{children:"undefined"})]}),(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"false"})})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"_value"})}),(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"_value"})}),(0,l.jsxs)(n.td,{children:["Gibt den Wert der Radio an. (Known Bug: ",(0,l.jsx)(n.a,{href:"https://github.com/ionic-team/stencil/issues/3902",children:"https://github.com/ionic-team/stencil/issues/3902"}),")"]}),(0,l.jsxs)(n.td,{children:[(0,l.jsx)(n.code,{children:"number"})," | ",(0,l.jsx)(n.code,{children:"string"})," | ",(0,l.jsx)(n.code,{children:"undefined"})]}),(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"undefined"})})]})]})]}),"\n",(0,l.jsx)(n.h2,{id:"slots",children:"Slots"}),"\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"Slot"}),(0,l.jsx)(n.th,{children:"Description"})]})}),(0,l.jsx)(n.tbody,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{}),(0,l.jsx)(n.td,{children:"Die Legende/\xdcberschrift der Radiobuttons."})]})})]}),"\n",(0,l.jsx)(n.h2,{id:"dependencies",children:"Dependencies"}),"\n",(0,l.jsx)(n.h3,{id:"used-by",children:"Used by"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"./input-radio-group",children:"kol-input-radio-group"})}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"depends-on",children:"Depends on"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"kol-input"}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"./alert",children:"kol-alert"})}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"graph",children:"Graph"}),"\n",(0,l.jsx)(n.mermaid,{value:"graph TD;\n  kol-input-radio --\x3e kol-input\n  kol-input-radio --\x3e kol-alert\n  kol-input --\x3e kol-icon\n  kol-input --\x3e kol-button-wc\n  kol-input --\x3e kol-alert\n  kol-button-wc --\x3e kol-span-wc\n  kol-button-wc --\x3e kol-tooltip\n  kol-span-wc --\x3e kol-icon\n  kol-tooltip --\x3e kol-span-wc\n  kol-alert --\x3e kol-alert-wc\n  kol-alert-wc --\x3e kol-heading-wc\n  kol-alert-wc --\x3e kol-button-wc\n  kol-alert-wc --\x3e kol-icon\n  kol-input-radio-group --\x3e kol-input-radio\n  style kol-input-radio fill:#f9f,stroke:#333,stroke-width:4px"}),"\n",(0,l.jsx)(n.hr,{})]})}function s(e={}){const{wrapper:n}={...(0,t.M)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(r,{...e})}):r(e)}var d=i(37704),a=i(54592);const c={title:"InputRadio",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die InputRadio-Komponente.",tags:["InputRadio","Beschreibung","Spezifikation","Beispiele"]},o=void 0,h={id:"components/input-radio",title:"InputRadio",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die InputRadio-Komponente.",source:"@site/versioned_docs/version-1.5/30-components/input-radio.mdx",sourceDirName:"30-components",slug:"/components/input-radio",permalink:"/docs/1.5/components/input-radio",draft:!1,unlisted:!1,tags:[{inline:!0,label:"InputRadio",permalink:"/docs/1.5/tags/input-radio"},{inline:!0,label:"Beschreibung",permalink:"/docs/1.5/tags/beschreibung"},{inline:!0,label:"Spezifikation",permalink:"/docs/1.5/tags/spezifikation"},{inline:!0,label:"Beispiele",permalink:"/docs/1.5/tags/beispiele"}],version:"1.5",frontMatter:{title:"InputRadio",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die InputRadio-Komponente.",tags:["InputRadio","Beschreibung","Spezifikation","Beispiele"]},sidebar:"tutorialSidebar",previous:{title:"InputRadioGroup",permalink:"/docs/1.5/components/input-radio-group"},next:{title:"InputRange",permalink:"/docs/1.5/components/input-range"}},u={},x=[{value:"Konstruktion",id:"konstruktion",level:2},{value:"Code",id:"code",level:3},{value:"Beispiel",id:"beispiel",level:3},{value:"Verwendung",id:"verwendung",level:2},{value:"onChange",id:"onchange",level:3},{value:"Best practices",id:"best-practices",level:3},{value:"Barrierefreiheit",id:"barrierefreiheit",level:2},{value:"Tastatursteuerung",id:"tastatursteuerung",level:3},{value:"Links und Referenzen",id:"links-und-referenzen",level:2},{value:"Properties",id:"properties",level:2},{value:"Slots",id:"slots",level:2},{value:"Dependencies",id:"dependencies",level:2},{value:"Used by",id:"used-by",level:3},{value:"Depends on",id:"depends-on",level:3},{value:"Graph",id:"graph",level:3},{value:"Live-Editor",id:"live-editor",level:2},{value:"Beispiele",id:"beispiele",level:2}];function p(e){const n={h2:"h2",...(0,t.M)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(s,{}),"\n",(0,l.jsx)(n.h2,{id:"live-editor",children:"Live-Editor"}),"\n",(0,l.jsx)(a.o,{component:"input-radio"}),"\n",(0,l.jsx)(n.h2,{id:"beispiele",children:"Beispiele"}),"\n",(0,l.jsx)(d.Q,{component:"input-radio",sample:"basic"})]})}function j(e={}){const{wrapper:n}={...(0,t.M)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(p,{...e})}):p(e)}},37704:(e,n,i)=>{i.d(n,{Q:()=>c});var l=i(64992),t=i(80924),r=i(76776);const s=function(e,n,i,l,t){return void 0===t&&(t="editor"),`${e}&module=${l}&initialpath=%23%2F${n}%2F${i}&view=${t}`},d={width:"100%",height:"500px",border:"0",overflow:"hidden"},a=e=>{let{url:n}=e;return(0,r.jsxs)("div",{className:"m-2",children:[(0,r.jsx)("iframe",{src:n,style:d,title:"kolibri-public-ui-code-samples",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}),(0,r.jsx)(l.GQ,{_href:n,_label:"",_target:"codesandbox",children:(0,r.jsx)("img",{alt:"CodeSandbox-Schalter",src:"https://codesandbox.io/static/img/play-codesandbox.svg"})})]})},c=e=>{let{component:n,sample:i}=e;const[c,o]=(0,t.useState)("Preview"),h="https://codesandbox.io/embed/kolibri-public-ui-react-samples-w5u37c?fontsize=14&hidenavigation=1&autoresize=1&theme=dark",u=`%2Fsrc%2Fsamples%2F${n}%2F${i}`,x={angular:`${u}.html`,react:`${u}.tsx`,vue:`${u}.vue`,webcomponent:`${u}.html`},p=`/sample-react/#/${n}/${i}?hideMenus`,j={onSelect:(e,n)=>{switch(n){case 1:o((()=>"Angular"));break;case 2:o((()=>"React"));break;case 3:o((()=>"Vue"));break;case 4:o((()=>"Web Component"));break;default:o((()=>"Preview"))}}};return(0,r.jsxs)(l._,{className:"w-full",_label:"Code-Beispiel",_on:j,_tabs:[{_label:"Vorschau"},{_disabled:!0,_label:"Angular"},{_label:"React"},{_disabled:!0,_label:"Vue"},{_disabled:!0,_label:"Web Component"}],children:[(0,r.jsx)("div",{children:"Preview"===c&&(0,r.jsx)("iframe",{src:p,style:d,title:"kolibri-public-ui-code-samples",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"})}),(0,r.jsx)("div",{children:"Angular"===c&&(0,r.jsx)(a,{url:s(h,n,i,x.angular)})}),(0,r.jsx)("div",{children:"React"===c&&(0,r.jsx)(a,{url:s(h,n,i,x.react)})}),(0,r.jsx)("div",{children:"Vue"===c&&(0,r.jsx)(a,{url:s(h,n,i,x.vue)})}),(0,r.jsx)("div",{children:"Web Component"===c&&(0,r.jsx)(a,{url:s(h,n,i,x.webcomponent)})})]})}},54592:(e,n,i)=>{i.d(n,{o:()=>v});var l=i(592),t=i(64992),r=i(80924),s=i(73700),d=i(76776);function a(e){const{label:n,name:i,update:l,value:s}=e;return(0,r.useEffect)((()=>{s||l(i,"#000000")}),[]),(0,d.jsx)(t.eK,{_label:"",_on:{onInput:(e,n)=>l(i,n)},_value:s,children:(0,d.jsx)("span",{slot:"expert",children:n})})}function c(e){const{attribute:n,label:i,update:l}=e,[s,a]=(0,r.useState)(""),[c,o]=(0,r.useState)(""),[h,u]=(0,r.useState)(""),[x,p]=(0,r.useState)("");let j=!1,b=!1,m=!1,g=!1;n.type.includes("KoliBriAllIcon")?(j=!0,b=!0,m=!0,g=!0):(n.type.includes("KoliBriVerticalIcon")&&(m=!0,g=!0),n.type.includes("KoliBriHorizontalIcon")&&(j=!0,b=!0)),(0,r.useEffect)((()=>{if(!s||c||h||x){const e={};s&&(e.left=`codicon codicon-${s}`),c&&(e.right=`codicon codicon-${c}`),h&&(e.top=`codicon codicon-${h}`),x&&(e.bottom=`codicon codicon-${x}`),Object.keys(e).length&&l(n.name,JSON.stringify(e))}else l(n.name,`codicon codicon-${s}`)}),[s,c,h,x]);const f=["home","arrow-up","arrow-right","arrow-down","arrow-left"];return(0,d.jsxs)("div",{children:[i,j?(0,d.jsx)(t.Si,{_label:"Links",children:(0,d.jsx)("div",{className:"flex flex-wrap gap-2 p-2",children:f.map((e=>(0,d.jsx)(t.qC,{_icons:`codicon codicon-${e}`,_hideLabel:!0,_label:"",_on:{onClick:()=>a(e)}},e)))})}):"",b?(0,d.jsx)(t.Si,{_label:"Rechts",children:(0,d.jsx)("div",{className:"flex flex-wrap gap-2 p-2",children:f.map((e=>(0,d.jsx)(t.qC,{_icons:`codicon codicon-${e}`,_hideLabel:!0,_label:"",_on:{onClick:()=>o(e)}},e)))})}):"",m?(0,d.jsx)(t.Si,{_label:"Oben",children:(0,d.jsx)("div",{className:"flex flex-wrap gap-2 p-2",children:f.map((e=>(0,d.jsx)(t.qC,{_icons:`codicon codicon-${e}`,_hideLabel:!0,_label:"",_on:{onClick:()=>u(e)}},e)))})}):"",g?(0,d.jsx)(t.Si,{_label:"Unten",children:(0,d.jsx)("div",{className:"flex flex-wrap gap-2 p-2",children:f.map((e=>(0,d.jsx)(t.qC,{_icons:`codicon codicon-${e}`,_hideLabel:!0,_label:"",_on:{onClick:()=>p(e)}},e)))})}):""]})}function o(e){const{name:n,label:i,types:l,update:r,value:s}=e,a=[];function c(e){return{label:e,value:e}}return l.includes("undefined")?(a.push({label:"-",value:void 0}),a.push(...l.filter((e=>"undefined"!==e)).map(c))):a.push(...l.filter((e=>"undefined"!==e)).map(c)),(0,d.jsx)(t.qy,{className:"my-2",_label:"",_options:JSON.stringify(a),_on:{onInput:(e,i)=>r(n,i[0])},_value:s?[s]:void 0,children:(0,d.jsx)("span",{slot:"expert",children:i})})}function h(e){const{attribute:n,update:i,value:l}=e,s=(0,r.useMemo)((()=>{let e=n.type.replace(/\\?"/g,"").split(" | ");return e=e.filter((e=>"KoliBriAllIcon ignorieren"!==e)),1===e.length?e[0]:e.includes("string")?"string":e.includes("number")?"number":e.includes("boolean")?"boolean":""}),[n]),h=(0,r.useMemo)((()=>{const e=n.type.split(" | ").map((e=>e.replace(/\\?"/g,""))),r=(0,d.jsx)(t.s1,{_label:n.description,children:n.name});switch(n.name){case"_color":return(0,d.jsx)(a,{name:n.name,label:r,update:i,value:l});case"_icons":return(0,d.jsx)(c,{attribute:n,label:r,update:i,value:l});default:switch(s){case"string":return(0,d.jsx)(t.Uh,{className:"my-2",_label:"",_on:{onInput:(e,l)=>i(n.name,l)},_value:l||"",children:(0,d.jsx)("span",{slot:"expert",children:r})});case"number":return(0,d.jsx)(t.QL,{className:"my-2",_label:"",_on:{onInput:(e,l)=>i(n.name,l)},_value:l,children:(0,d.jsx)("span",{slot:"expert",children:r})});case"boolean":return(0,d.jsx)(t.Q7,{className:"my-2",_checked:!0===l,_label:"",_on:{onInput:(e,l)=>i(n.name,l)},_variant:"switch",_value:!0,children:(0,d.jsx)("span",{slot:"expert",children:r})});default:return e.length>1?(0,d.jsx)(o,{label:r,name:n.name,types:e,update:i,value:l}):(0,d.jsxs)("p",{children:["Attribut: '",n.name,"'",(0,d.jsx)("br",{}),"Typ: '",n.type,"'"]})}}}),[n,l]);return(0,d.jsx)(d.Fragment,{children:h})}var u=i(63136),x=i(28256),p=i(39452),j=i.n(p);function b(e){const{tag:n,params:i}=e,l=Object.entries(i).filter((e=>"defaultValues"!==e[0]));let t="";const s=(0,r.useMemo)((()=>{let e="";return l.filter((e=>e[0].startsWith("slot-"))).forEach((n=>{const i=n[1],l=n[0].split("-")[1];if(i)if(i.match(/^<.*?>/)?.length){const n=i.indexOf(">");e+=i.substring(0,n)+` slot="${l}"`+i.substring(n)}else e+=`<div slot="${l}">${i}</div>`})),e}),[i]),a=l.filter((e=>!e[0].startsWith("slot-"))).filter((e=>!i.defaultValues.includes(e[0])));for(const[r,d]of a)if(d){let e="";switch(typeof d){case"string":e=` ${r}="${d.replace(/"/g,"'")}"`;break;case"number":e=` ${r}="${d.toString()}"`;break;case"boolean":e=d?` ${r}`:"";break;case"object":e=` ${r}="${JSON.stringify(d)}"`;break;default:e="Never give up hope, one day everything will be fixed."}t+=e}const c=`<kol-${n}${t}>${s}</kol-${n}>`;let o;try{o=(0,x.format)(c,{plugins:[j()],printWidth:80}).replace(/;\n$/,"")}catch(h){o=`\x3c!-- Formatter-Error: Slot-Markup is not valid HTML for formatting. --\x3e\n${c}`}return(0,d.jsx)("div",{className:"h-48 rounded-md overflow-hidden",children:(0,d.jsx)(u.cp,{defaultLanguage:"html",height:"100%",options:{automaticLayout:!0,fontSize:16,lineNumbers:"off",readOnly:!0},value:o})})}function m(e){const n=Object.fromEntries(Object.entries(e.params).filter((e=>{let[n]=e;return!n.startsWith("slot-")}))),i=Object.entries(e.params).filter((e=>{let[n]=e;return n.startsWith("slot-")})),l={abbr:t.s1,accordion:t.IP,alert:t.mW,avatar:t.aq,badge:t.cX,breadcrumb:t.If,button:t.qC,"button-group":t.Os,"button-link":t.u_,card:t.Yh,details:t.Si,form:t.OO,heading:t.ch,icon:t.SA,image:t.iu,"indented-text":t.MV,"input-checkbox":t.Q7,"input-color":t.eK,"input-date":t.QZ,"input-email":t.kN,"input-file":t.Ex,"input-number":t.QL,"input-password":t.EH,"input-radio":t.wJ,"input-range":t.Ef,"input-text":t.Uh,kolibri:t.aY,link:t.GQ,"link-button":t._k,"link-group":t.O_,logo:t.ae,modal:t.cT,nav:t.Y4,pagination:t.kj,progress:t.O0,quote:t.SY,select:t.qy,"skip-nav":t.Ig,spin:t.kP,"split-button":t.a,symbol:t.OM,table:t.Y9,tabs:t._,textarea:t.DG,version:t.k1}[e.tag];return l?(0,d.jsx)(l,{...n,children:i.map((e=>(0,d.jsx)("div",{slot:e[0].replace("slot-","").replace("default",""),dangerouslySetInnerHTML:{__html:e[1]}},e[0])))}):(0,d.jsx)("div",{children:"Tag not implemented"})}function g(e){const{description:n,name:i,update:l,value:t}=e;return(0,d.jsxs)("div",{className:"bg-gray-100 my-2 rounded-lg p-2 border border-gray-300 border-solid",children:[(0,d.jsx)("b",{children:i||"default"}),": ",n,(0,d.jsx)("br",{}),(0,d.jsx)(u.GW,{defaultLanguage:"html",height:"5em",onChange:e=>l(`slot-${i}`,e||""),options:{automaticLayout:!0,fontSize:16,lineNumbers:"off"},value:t})]})}const f=["_smart-button","_icon-align"],_={abbr:{"slot-default":"Abbr"},accordion:{"slot-default":"Accordion content"},tabs:{_tabs:'[{"_label":"Tab 1"},{"_label":"Tab 2", "_on": {"onClose": true} },{"_label":"Tab 3"}]'},breadcrumb:{_links:"[{'_label':'Startseite','_href':'#/'},{'_label':'Unterseite der Startseite','_href':'#/unterseite'},{'_label':'Unterseite der Unterseite','_href':'#/unterseite/unterseite'}]"},form:{"_required-text":"Bitte alle Felder ausf\xfcllen."},image:{_src:"https://placehold.co/100x100/cc006e/white"},"link-group":{_links:"[{'_label':'Startseite','_href':'#/'},{'_label':'Unterseite der Startseite','_href':'#/unterseite'},{'_label':'Unterseite der Unterseite','_href':'#/unterseite/unterseite'}]"},nav:{_links:"[{'_label':'Startseite','_href':'#/'},{'_label':'Unterseite der Startseite','_href':'#/unterseite'},{'_label':'Unterseite der Unterseite','_href':'#/unterseite/unterseite'}]"},pagination:{_total:"100",_page:"6"},quote:{_quote:"Hello World"},select:{_options:"[{'label':'Herr','value':0},{'label':'Frau','value':1}]"},"skip-nav":{_links:"[{'_label':'Navigation','_href':'#nav'},{'_label':'Inhalt','_href':'#main'},{'_label':'Kontakt','_href':'#kontakt'},{'_label':'Links','_href':'#links'}]"},table:{_headers:'{"horizontal":[[{"label":"Montag","key":"montag"}]]}',_data:'[{"montag":"Zelle1"},{"montag":"Zelle2"}]',_pagination:'{"page":2}'}};function v(e){const[n,i]=(0,r.useState)(function(){const e={};return Object.values(l.Q).forEach((n=>{const i=n.name.replace("kol-","");e[i]={defaultValues:[]},n.attributes.forEach((n=>{void 0!==n.defaultValue&&(e[i][n.name]=n.defaultValue.replace(/'/g,""),e[i].defaultValues.push(n.name)),void 0!==_[i]?.[n.name]&&(e[i][n.name]=_[i][n.name])})),n.slots.forEach((n=>{const l=`slot-${n.name||"default"}`,t=_[i]?.[l];t&&(e[i][l]=t)}))})),e}()),[a,c]=(0,r.useState)("badge");(0,r.useEffect)((()=>{e.component&&c(e.component.replace("kol-",""))}),[e.component]),(0,r.useEffect)((()=>{!!l.Q.find((e=>e.name===`kol-${a}`))?.attributes.find((e=>"_label"===e.name))&&!n[a]?._label&&u("_label","Label-Text");!!l.Q.find((e=>e.name===`kol-${a}`))?.attributes.find((e=>"_heading"===e.name))&&!n[a]?._heading&&u("_heading","Heading-Text")}),[a]);const o=(0,r.useMemo)((()=>n[a]||{}),[n,a]);function u(e,n){i((i=>{const l={...i[a],[e]:n,defaultValues:i[a].defaultValues.filter((n=>n!==e))};return{...i,[a]:l}}))}const x=Object.values(l.Q).find((e=>e.name===`kol-${a}`));return(0,d.jsx)(s.c,{children:()=>(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(t.cX,{class:"mb-2",_label:"Beta",_color:"#b00"}),(0,d.jsxs)("div",{className:"grid lg:grid-cols-3 gap-2",children:[(0,d.jsxs)(t._,{className:"col-span-2",_label:"Wechselnavigation zwischen Viewer und Code",_tabs:[{_label:"Viewer"},{_label:"Code"}],children:[(0,d.jsx)("div",{className:"p-2",children:(0,d.jsx)(m,{tag:a,params:o})}),(0,d.jsx)("div",{className:"lg:col-span-2",children:(0,d.jsx)(b,{params:o,tag:a})})]}),(0,d.jsxs)("div",{className:"grid gap-4 p-2 border-0 border-l border-solid",children:[(0,d.jsx)(t.ch,{_level:3,_label:"Konfigurator"}),(0,d.jsxs)("div",{children:[(0,d.jsx)(t.ch,{_level:4,_label:"Properties"}),(0,d.jsxs)("div",{className:"max-h-96 p-2 overflow-auto mb-4",children:[x&&x.attributes.map((e=>(0,d.jsx)(d.Fragment,{children:!f.includes(e.name)&&!e.description.startsWith("Deprecated:")&&(0,d.jsx)(h,{attribute:e,update:u,value:o[e.name]},e.name)}))),x&&0===x.attributes.length&&(0,d.jsx)("span",{className:"text-gray-500",children:"Keine Properties vorhanden"})]}),(0,d.jsx)(t.ch,{_level:4,_label:"Slots"}),(0,d.jsxs)("div",{className:"max-h-56 p-2 overflow-auto",children:[x&&x.slots.map((e=>(0,d.jsx)(g,{description:e.description,name:e.name||"default",update:u,value:o["slot-"+(e.name||"default")]},e.name))),x&&0===x.slots.length&&(0,d.jsx)("span",{className:"text-gray-500",children:"Keine Slots vorhanden"})]})]})]})]})]})})}}}]);