"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[24054],{9481:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>x,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>h,toc:()=>u});var t=i(11527),d=i(16034);function s(e){const n={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",hr:"hr",li:"li",mermaid:"mermaid",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["Der Input-Typ ",(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.em,{children:"Checkbox"})})," generiert eine rechteckige Box, die durch Anklicken aktiviert und wieder deaktiviert wird. In aktiviertem Zustand befindet sich ein farbiger Haken in der Box."]}),"\n",(0,t.jsx)(n.h2,{id:"konstruktion",children:"Konstruktion"}),"\n",(0,t.jsx)(n.h3,{id:"code",children:"Code"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-html",children:'<kol-input-checkbox _label="false">Ich stimme der <kol-link _href="#" _label="Datenschutzerkl\xe4rung"></kol-link> zu.</kol-input-checkbox>\n<kol-input-checkbox _variant="switch" _label="Geburtsdatum anzeigen?"></kol-input-checkbox>\n<kol-input-checkbox _variant="button" _label="Schalter aktiviert" _checked></kol-input-checkbox>\n<kol-input-checkbox _variant="button" _label="Schalter deaktiviert"></kol-input-checkbox>\n'})}),"\n",(0,t.jsx)(n.h3,{id:"beispiel",children:"Beispiel"}),"\n",(0,t.jsxs)("kol-input-checkbox",{_label:"false",children:["Ich stimme der ",(0,t.jsx)("kol-link",{_href:"#",_label:"Datenschutzerkl\xe4rung"})," zu."]}),"\n",(0,t.jsx)("kol-input-checkbox",{_variant:"switch",_label:"Geburtsdatum anzeigen?"}),"\n",(0,t.jsx)("kol-input-checkbox",{_variant:"button",_label:"Schalter aktiviert",_checked:!0}),"\n",(0,t.jsx)("kol-input-checkbox",{_variant:"button",_label:"Schalter deaktiviert"}),"\n",(0,t.jsx)(n.h2,{id:"verwendung",children:"Verwendung"}),"\n",(0,t.jsxs)(n.p,{children:["Checkboxen werden als Einzelelement oder als Liste beliebig vieler Checkboxen verwendet. Sie erm\xf6glichen den Nutzer",":innen",", aus einer vordefinierten Anzahl von M\xf6glichkeiten eine oder mehrere auszuw\xe4hlen."]}),"\n",(0,t.jsx)(n.h3,{id:"varianten",children:"Varianten"}),"\n",(0,t.jsxs)(n.p,{children:["Mittels des Attributs ",(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"_variant"})})," k\xf6nnen folgende Varianten ausgew\xe4hlt werden (Beispiele siehe oben):"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"button"}),": wechselt das Icon je nach Zustand (Beispiel 3+4)"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"switch"}),": verwandelt die Checkbox in einen horizontalen Schalter, hierbei gilt rechts als aktiv und links als inaktiv. (Beispiel 2)"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"best-practices",children:"Best practices"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Verwenden Sie eine einzelne Checkbox, wenn Sie von den Nutzer",":innen"," eine einfach Best\xe4tigung w\xfcnschen, z.B. Akzeptieren der Datenschutzerkl\xe4rung."]}),"\n",(0,t.jsxs)(n.li,{children:["Verwenden Sie eine Gruppe von Checkboxen, um den Nutzer",":innen"," die M\xf6glichkeit zu geben einen oder mehrere Werte auszuw\xe4hlen."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"barrierefreiheit",children:"Barrierefreiheit"}),"\n",(0,t.jsxs)(n.p,{children:["Vermeiden Sie die Verwendung von vielen Checkboxen auf einer Seite, da Ihre Inhalte hierdurch schnell un\xfcbersichtlich und lang werden. Pr\xfcfen Sie in solchen Anwendungsf\xe4llen die Verwendung einer ",(0,t.jsxs)("kol-link",{_href:"/docs/components/select",_label:"/docs/components/select",children:["Select-Box mit ",(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"_multiple"})})]}),"."]}),"\n",(0,t.jsx)(n.p,{children:"Achten Sie darauf, jeder Checkbox ein Label zuzuweisen, da dieses von Screenreadern vorgelesen wird und so eine eindeutige Identifikation des Eingabefeldes erm\xf6glicht."}),"\n",(0,t.jsx)(n.h3,{id:"tastatursteuerung",children:"Tastatursteuerung"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Taste"}),(0,t.jsx)(n.th,{children:"Funktion"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"Tab"})}),(0,t.jsx)(n.td,{children:"Fokussiert die Checkbox bzw. erm\xf6glicht den Wechsel zwischen Checkboxen einer Liste."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"Leer"})}),(0,t.jsxs)(n.td,{children:["Aktiviert bzw. deaktiviert die Checkbox. Der Zustand ",(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.em,{children:"Indeterminate"})})," ist \xfcber die Tastatur nicht herzustellen."]})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"links-und-referenzen",children:"Links und Referenzen"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)("kol-link",{_href:"https://www.w3.org/TR/wai-aria-practices/#checkbox",_label:"https://www.w3.org/TR/wai-aria-practices/#checkbox",_target:"_blank"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)("kol-link",{_href:"https://medium.com/@gavyn/til-autofocus-inputs-are-an-accessibility-problem-32ced60c3109",_label:"https://medium.com/@gavyn/til-autofocus-inputs-are-an-accessibility-problem-32ced60c3109",_target:"_blank"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Property"}),(0,t.jsx)(n.th,{children:"Attribute"}),(0,t.jsx)(n.th,{children:"Description"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Default"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"_accessKey"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"_access-key"})}),(0,t.jsx)(n.td,{children:"Defines which key combination can be used to trigger or focus the interactive element of the component."}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:"string"})," | ",(0,t.jsx)(n.code,{children:"undefined"})]}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"undefined"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"_alert"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"_alert"})}),(0,t.jsx)(n.td,{children:"Defines whether the screen-readers should read out the notification."}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:"boolean"})," | ",(0,t.jsx)(n.code,{children:"undefined"})]}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"true"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"_checked"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"_checked"})}),(0,t.jsx)(n.td,{children:"Defines whether the checkbox is checked or not. Can be read and written."}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:"boolean"})," | ",(0,t.jsx)(n.code,{children:"undefined"})]}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"false"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"_disabled"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"_disabled"})}),(0,t.jsx)(n.td,{children:"Makes the element not focusable and ignore all events."}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:"boolean"})," | ",(0,t.jsx)(n.code,{children:"undefined"})]}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"false"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"_error"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"_error"})}),(0,t.jsx)(n.td,{children:"Defines the error message text."}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:"string"})," | ",(0,t.jsx)(n.code,{children:"undefined"})]}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"undefined"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"_hideError"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"_hide-error"})}),(0,t.jsx)(n.td,{children:"Hides the error message but leaves it in the DOM for the input's aria-describedby."}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:"boolean"})," | ",(0,t.jsx)(n.code,{children:"undefined"})]}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"false"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"_hideLabel"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"_hide-label"})}),(0,t.jsx)(n.td,{children:"Hides the caption by default and displays the caption text with a tooltip when the interactive element is focused or the mouse is over it."}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:"boolean"})," | ",(0,t.jsx)(n.code,{children:"undefined"})]}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"false"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"_hint"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"_hint"})}),(0,t.jsx)(n.td,{children:"Defines the hint text."}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:"string"})," | ",(0,t.jsx)(n.code,{children:"undefined"})]}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"''"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"_icon"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"_icon"})}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)("span",{className:"text-red-500",children:(0,t.jsx)(n.strong,{children:"[DEPRECATED]"})})," Use _icons.",(0,t.jsx)("br",{}),(0,t.jsx)("br",{})]}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:"string"})," | ",(0,t.jsx)(n.code,{children:"undefined"})," | ",(0,t.jsx)(n.code,{children:"{ checked: string; indeterminate?: string"})," | ",(0,t.jsx)(n.code,{children:"undefined; unchecked?: string"})," | ",(0,t.jsx)(n.code,{children:"undefined; }"})," | ",(0,t.jsx)(n.code,{children:"{ checked?: string"})," | ",(0,t.jsx)(n.code,{children:"undefined; indeterminate: string; unchecked?: string"})," | ",(0,t.jsx)(n.code,{children:"undefined; }"})," | ",(0,t.jsx)(n.code,{children:"{ checked?: string"})," | ",(0,t.jsx)(n.code,{children:"undefined; indeterminate?: string"})," | ",(0,t.jsx)(n.code,{children:"undefined; unchecked: string; }"})]}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"undefined"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"_icons"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"_icons"})}),(0,t.jsxs)(n.td,{children:["Defines the icon classnames (e.g. ",(0,t.jsx)(n.code,{children:'_icons="fa-solid fa-user"'}),")."]}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:"string"})," | ",(0,t.jsx)(n.code,{children:"undefined"})," | ",(0,t.jsx)(n.code,{children:"{ checked: string; indeterminate?: string"})," | ",(0,t.jsx)(n.code,{children:"undefined; unchecked?: string"})," | ",(0,t.jsx)(n.code,{children:"undefined; }"})," | ",(0,t.jsx)(n.code,{children:"{ checked?: string"})," | ",(0,t.jsx)(n.code,{children:"undefined; indeterminate: string; unchecked?: string"})," | ",(0,t.jsx)(n.code,{children:"undefined; }"})," | ",(0,t.jsx)(n.code,{children:"{ checked?: string"})," | ",(0,t.jsx)(n.code,{children:"undefined; indeterminate?: string"})," | ",(0,t.jsx)(n.code,{children:"undefined; unchecked: string; }"})]}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"undefined"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"_id"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"_id"})}),(0,t.jsx)(n.td,{children:"Defines the internal ID of the primary component element."}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:"string"})," | ",(0,t.jsx)(n.code,{children:"undefined"})]}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"undefined"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"_indeterminate"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"_indeterminate"})}),(0,t.jsx)(n.td,{children:"Puts the checkbox in the indeterminate state, does not change the value of _checked."}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:"boolean"})," | ",(0,t.jsx)(n.code,{children:"undefined"})]}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"undefined"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"_label"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"_label"})}),(0,t.jsxs)(n.td,{children:["Defines the visible or semantic label of the component (e.g. aria-label, label, headline, caption, summary, etc.). Set to ",(0,t.jsx)(n.code,{children:"false"})," to enable the expert slot."]}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:"string"})," | ",(0,t.jsx)(n.code,{children:"undefined"})]}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"undefined"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"_name"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"_name"})}),(0,t.jsx)(n.td,{children:"Defines the technical name of an input field."}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:"string"})," | ",(0,t.jsx)(n.code,{children:"undefined"})]}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"undefined"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"_on"})}),(0,t.jsx)(n.td,{children:"--"}),(0,t.jsx)(n.td,{children:"Gibt die EventCallback-Funktionen f\xfcr das Input-Event an."}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:"InputTypeOnBlur & InputTypeOnClick & InputTypeOnChange & InputTypeOnFocus"})," | ",(0,t.jsx)(n.code,{children:"undefined"})]}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"undefined"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"_required"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"_required"})}),(0,t.jsx)(n.td,{children:"Makes the input element required."}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:"boolean"})," | ",(0,t.jsx)(n.code,{children:"undefined"})]}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"false"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"_tabIndex"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"_tab-index"})}),(0,t.jsxs)(n.td,{children:["Defines which tab-index the primary element of the component has. (",(0,t.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex",children:"https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex"}),")"]}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:"number"})," | ",(0,t.jsx)(n.code,{children:"undefined"})]}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"undefined"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"_tooltipAlign"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"_tooltip-align"})}),(0,t.jsx)(n.td,{children:"Defines where to show the Tooltip preferably: top, right, bottom or left."}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:'"bottom"'})," | ",(0,t.jsx)(n.code,{children:'"left"'})," | ",(0,t.jsx)(n.code,{children:'"right"'})," | ",(0,t.jsx)(n.code,{children:'"top"'})," | ",(0,t.jsx)(n.code,{children:"undefined"})]}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"'top'"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"_touched"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"_touched"})}),(0,t.jsx)(n.td,{children:"Shows if the input was touched by a user."}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:"boolean"})," | ",(0,t.jsx)(n.code,{children:"undefined"})]}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"false"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"_type"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"_type"})}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)("span",{className:"text-red-500",children:(0,t.jsx)(n.strong,{children:"[DEPRECATED]"})})," Verwende stattdessen das Attribute _variant.",(0,t.jsx)("br",{}),(0,t.jsx)("br",{}),"Deprecated: Defines which variant should be used for presentation."]}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:'"button"'})," | ",(0,t.jsx)(n.code,{children:'"checkbox"'})," | ",(0,t.jsx)(n.code,{children:'"default"'})," | ",(0,t.jsx)(n.code,{children:'"switch"'})," | ",(0,t.jsx)(n.code,{children:"undefined"})]}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"undefined"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"_value"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"_value"})}),(0,t.jsx)(n.td,{children:"Defines the value of the input."}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:"boolean"})," | ",(0,t.jsx)(n.code,{children:"null"})," | ",(0,t.jsx)(n.code,{children:"number"})," | ",(0,t.jsx)(n.code,{children:"object"})," | ",(0,t.jsx)(n.code,{children:"string"})," | ",(0,t.jsx)(n.code,{children:"undefined"})]}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"true"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"_variant"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"_variant"})}),(0,t.jsx)(n.td,{children:"Defines which variant should be used for presentation."}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:'"button"'})," | ",(0,t.jsx)(n.code,{children:'"checkbox"'})," | ",(0,t.jsx)(n.code,{children:'"default"'})," | ",(0,t.jsx)(n.code,{children:'"switch"'})," | ",(0,t.jsx)(n.code,{children:"undefined"})]}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"undefined"})})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"slots",children:"Slots"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Slot"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"Die Beschriftung der Checkbox."})]})})]}),"\n",(0,t.jsx)(n.h2,{id:"dependencies",children:"Dependencies"}),"\n",(0,t.jsx)(n.h3,{id:"depends-on",children:"Depends on"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"kol-input"}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"./icon",children:"kol-icon"})}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"graph",children:"Graph"}),"\n",(0,t.jsx)(n.mermaid,{value:"graph TD;\n  kol-input-checkbox --\x3e kol-input\n  kol-input-checkbox --\x3e kol-icon\n  kol-input --\x3e kol-icon\n  kol-input --\x3e kol-button-wc\n  kol-input --\x3e kol-tooltip-wc\n  kol-input --\x3e kol-alert\n  kol-button-wc --\x3e kol-span-wc\n  kol-button-wc --\x3e kol-tooltip-wc\n  kol-span-wc --\x3e kol-icon\n  kol-tooltip-wc --\x3e kol-span-wc\n  kol-alert --\x3e kol-alert-wc\n  kol-alert-wc --\x3e kol-heading-wc\n  kol-alert-wc --\x3e kol-button-wc\n  kol-alert-wc --\x3e kol-icon\n  style kol-input-checkbox fill:#f9f,stroke:#333,stroke-width:4px"}),"\n",(0,t.jsx)(n.hr,{})]})}function l(e={}){const{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(s,{...e})}):s(e)}var r=i(35863),c=i(94383);const o={title:"InputCheckbox",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die InputCheckbox-Komponente.",tags:["InputCheckbox","Beschreibung","Spezifikation","Beispiele"]},a=void 0,h={id:"components/input-checkbox",title:"InputCheckbox",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die InputCheckbox-Komponente.",source:"@site/versioned_docs/version-1.7/30-components/input-checkbox.mdx",sourceDirName:"30-components",slug:"/components/input-checkbox",permalink:"/en/docs/1.7/components/input-checkbox",draft:!1,unlisted:!1,tags:[{label:"InputCheckbox",permalink:"/en/docs/1.7/tags/input-checkbox"},{label:"Beschreibung",permalink:"/en/docs/1.7/tags/beschreibung"},{label:"Spezifikation",permalink:"/en/docs/1.7/tags/spezifikation"},{label:"Beispiele",permalink:"/en/docs/1.7/tags/beispiele"}],version:"1.7",frontMatter:{title:"InputCheckbox",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die InputCheckbox-Komponente.",tags:["InputCheckbox","Beschreibung","Spezifikation","Beispiele"]},sidebar:"tutorialSidebar",previous:{title:"InputAdapterLeanup",permalink:"/en/docs/1.7/components/input-adapter-leanup"},next:{title:"InputColor",permalink:"/en/docs/1.7/components/input-color"}},x={},u=[{value:"Live-Editor",id:"live-editor",level:2},{value:"Beispiele",id:"beispiele",level:2}];function j(e){const n={h2:"h2",...(0,d.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(l,{}),"\n",(0,t.jsx)(n.h2,{id:"live-editor",children:"Live-Editor"}),"\n",(0,t.jsx)(c._,{component:"input-checkbox"}),"\n",(0,t.jsx)(n.h2,{id:"beispiele",children:"Beispiele"}),"\n",(0,t.jsx)(r._,{component:"input-checkbox",sample:"basic"})]})}function p(e={}){const{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(j,{...e})}):j(e)}},35863:(e,n,i)=>{i.d(n,{_:()=>o});var t=i(65636),d=i(50959),s=i(11527);const l=function(e,n,i,t,d){return void 0===d&&(d="editor"),`${e}&module=${t}&initialpath=%23%2F${n}%2F${i}&view=${d}`},r={width:"100%",height:"500px",border:"0",overflow:"hidden"},c=e=>{let{url:n}=e;return(0,s.jsxs)("div",{className:"m-2",children:[(0,s.jsx)("iframe",{src:n,style:r,title:"kolibri-public-ui-code-samples",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}),(0,s.jsx)(t.Nv,{_href:n,_label:"",_target:"codesandbox",children:(0,s.jsx)("img",{alt:"CodeSandbox-Schalter",src:"https://codesandbox.io/static/img/play-codesandbox.svg"})})]})},o=e=>{let{component:n,sample:i}=e;const[o,a]=(0,d.useState)("Preview"),h="https://codesandbox.io/embed/kolibri-public-ui-react-samples-w5u37c?fontsize=14&hidenavigation=1&autoresize=1&theme=dark",x=`%2Fsrc%2Fsamples%2F${n}%2F${i}`,u={angular:`${x}.html`,react:`${x}.tsx`,vue:`${x}.vue`,webcomponent:`${x}.html`},j=`/sample-react/#/${n}/${i}?hideMenus`,p={onSelect:(e,n)=>{switch(n){case 1:a((()=>"Angular"));break;case 2:a((()=>"React"));break;case 3:a((()=>"Vue"));break;case 4:a((()=>"Web Component"));break;default:a((()=>"Preview"))}}};return(0,s.jsxs)(t.UD,{className:"w-full",_label:"Code-Beispiel",_on:p,_tabs:[{_label:"Vorschau"},{_disabled:!0,_label:"Angular"},{_label:"React"},{_disabled:!0,_label:"Vue"},{_disabled:!0,_label:"Web Component"}],children:[(0,s.jsx)("div",{children:"Preview"===o&&(0,s.jsx)("iframe",{src:j,style:r,title:"kolibri-public-ui-code-samples",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"})}),(0,s.jsx)("div",{children:"Angular"===o&&(0,s.jsx)(c,{url:l(h,n,i,u.angular)})}),(0,s.jsx)("div",{children:"React"===o&&(0,s.jsx)(c,{url:l(h,n,i,u.react)})}),(0,s.jsx)("div",{children:"Vue"===o&&(0,s.jsx)(c,{url:l(h,n,i,u.vue)})}),(0,s.jsx)("div",{children:"Web Component"===o&&(0,s.jsx)(c,{url:l(h,n,i,u.webcomponent)})})]})}},94383:(e,n,i)=>{i.d(n,{_:()=>_});var t=i(58801),d=i(65636),s=i(50959),l=i(1206),r=i(11527);function c(e){const{label:n,name:i,update:t,value:l}=e;return(0,s.useEffect)((()=>{l||t(i,"#000000")}),[]),(0,r.jsx)(d.Np,{_label:"",_on:{onChange:(e,n)=>t(i,n)},_value:l,children:(0,r.jsx)("span",{slot:"expert",children:n})})}function o(e){const{attribute:n,label:i,update:t}=e,[l,c]=(0,s.useState)(""),[o,a]=(0,s.useState)(""),[h,x]=(0,s.useState)(""),[u,j]=(0,s.useState)("");let p=!1,b=!1,m=!1,f=!1;n.type.includes("KoliBriAllIcon")?(p=!0,b=!0,m=!0,f=!0):(n.type.includes("KoliBriVerticalIcon")&&(m=!0,f=!0),n.type.includes("KoliBriHorizontalIcon")&&(p=!0,b=!0)),(0,s.useEffect)((()=>{if(!l||o||h||u){const e={};l&&(e.left=`codicon codicon-${l}`),o&&(e.right=`codicon codicon-${o}`),h&&(e.top=`codicon codicon-${h}`),u&&(e.bottom=`codicon codicon-${u}`),Object.keys(e).length&&t(n.name,JSON.stringify(e))}else t(n.name,`codicon codicon-${l}`)}),[l,o,h,u]);const k=["home","arrow-up","arrow-right","arrow-down","arrow-left"];return(0,r.jsxs)("div",{children:[i,p?(0,r.jsx)(d.ox,{_label:"Links",children:(0,r.jsx)("div",{className:"flex flex-wrap gap-2 p-2",children:k.map((e=>(0,r.jsx)(d.ic,{_icons:`codicon codicon-${e}`,_hideLabel:!0,_label:"",_on:{onClick:()=>c(e)}},e)))})}):"",b?(0,r.jsx)(d.ox,{_label:"Rechts",children:(0,r.jsx)("div",{className:"flex flex-wrap gap-2 p-2",children:k.map((e=>(0,r.jsx)(d.ic,{_icons:`codicon codicon-${e}`,_hideLabel:!0,_label:"",_on:{onClick:()=>a(e)}},e)))})}):"",m?(0,r.jsx)(d.ox,{_label:"Oben",children:(0,r.jsx)("div",{className:"flex flex-wrap gap-2 p-2",children:k.map((e=>(0,r.jsx)(d.ic,{_icons:`codicon codicon-${e}`,_hideLabel:!0,_label:"",_on:{onClick:()=>x(e)}},e)))})}):"",f?(0,r.jsx)(d.ox,{_label:"Unten",children:(0,r.jsx)("div",{className:"flex flex-wrap gap-2 p-2",children:k.map((e=>(0,r.jsx)(d.ic,{_icons:`codicon codicon-${e}`,_hideLabel:!0,_label:"",_on:{onClick:()=>j(e)}},e)))})}):""]})}function a(e){const{name:n,label:i,types:t,update:s,value:l}=e,c=[];function o(e){return{label:e,value:e}}return t.includes("undefined")?(c.push({label:"-",value:void 0}),c.push(...t.filter((e=>"undefined"!==e)).map(o))):c.push(...t.filter((e=>"undefined"!==e)).map(o)),(0,r.jsx)(d.r7,{className:"my-2",_label:"",_options:JSON.stringify(c),_on:{onChange:(e,i)=>s(n,i[0])},_value:l?[l]:void 0,children:(0,r.jsx)("span",{slot:"expert",children:i})})}function h(e){const{attribute:n,update:i,value:t}=e,l=(0,s.useMemo)((()=>{let e=n.type.replace(/\\?"/g,"").split(" | ");return e=e.filter((e=>"KoliBriAllIcon ignorieren"!==e)),1===e.length?e[0]:e.includes("string")?"string":e.includes("number")?"number":e.includes("boolean")?"boolean":""}),[n]),h=(0,s.useMemo)((()=>{const e=n.type.split(" | ").map((e=>e.replace(/\\?"/g,""))),s=(0,r.jsx)(d.T5,{_label:n.description,children:n.name});switch(n.name){case"_color":return(0,r.jsx)(c,{name:n.name,label:s,update:i,value:t});case"_icons":return(0,r.jsx)(o,{attribute:n,label:s,update:i,value:t});default:switch(l){case"string":return(0,r.jsx)(d.WD,{className:"my-2",_label:"",_on:{onChange:(e,t)=>i(n.name,t)},_value:t||"",children:(0,r.jsx)("span",{slot:"expert",children:s})});case"number":return(0,r.jsx)(d.c2,{className:"my-2",_label:"",_on:{onChange:(e,t)=>i(n.name,t)},_value:t,children:(0,r.jsx)("span",{slot:"expert",children:s})});case"boolean":return(0,r.jsx)(d.TE,{className:"my-2",_checked:!0===t,_label:"",_on:{onChange:(e,t)=>i(n.name,t)},_variant:"switch",_value:!0,children:(0,r.jsx)("span",{slot:"expert",children:s})});default:return e.length>1?(0,r.jsx)(a,{label:s,name:n.name,types:e,update:i,value:t}):(0,r.jsxs)("p",{children:["Attribut: '",n.name,"'",(0,r.jsx)("br",{}),"Typ: '",n.type,"'"]})}}}),[n,t]);return(0,r.jsx)(r.Fragment,{children:h})}var x=i(22115),u=i(77192),j=i(85630),p=i.n(j);function b(e){const{tag:n,params:i}=e,t=Object.entries(i).filter((e=>"defaultValues"!==e[0]));let d="";const l=(0,s.useMemo)((()=>{let e="";return t.filter((e=>e[0].startsWith("slot-"))).forEach((n=>{const i=n[1],t=n[0].split("-")[1];if(i)if(i.match(/^<.*?>/)?.length){const n=i.indexOf(">");e+=i.substring(0,n)+` slot="${t}"`+i.substring(n)}else e+=`<div slot="${t}">${i}</div>`})),e}),[i]),c=t.filter((e=>!e[0].startsWith("slot-"))).filter((e=>!i.defaultValues.includes(e[0])));for(const[s,r]of c)if(r){let e="";switch(typeof r){case"string":e=` ${s}="${r.replace(/"/g,"'")}"`;break;case"number":e=` ${s}="${r.toString()}"`;break;case"boolean":e=r?` ${s}`:"";break;case"object":e=` ${s}="${JSON.stringify(r)}"`;break;default:e="Never give up hope, one day everything will be fixed."}d+=e}const o=`<kol-${n}${d}>${l}</kol-${n}>`;let a;try{a=(0,u.format)(o,{plugins:[p()],printWidth:80}).replace(/;\n$/,"")}catch(h){a=`\x3c!-- Formatter-Error: Slot-Markup is not valid HTML for formatting. --\x3e\n${o}`}return(0,r.jsx)("div",{className:"h-48 rounded-md overflow-hidden",children:(0,r.jsx)(x.ZP,{defaultLanguage:"html",height:"100%",options:{automaticLayout:!0,fontSize:16,lineNumbers:"off",readOnly:!0},value:a})})}function m(e){const n=Object.fromEntries(Object.entries(e.params).filter((e=>{let[n]=e;return!n.startsWith("slot-")}))),i=Object.entries(e.params).filter((e=>{let[n]=e;return n.startsWith("slot-")})),t={abbr:d.T5,accordion:d.RZ,alert:d.K5,avatar:d.Ek,badge:d.Er,breadcrumb:d.lo,button:d.ic,"button-group":d.uz,"button-link":d.f6,card:d.Gc,details:d.ox,form:d.m5,heading:d.HA,icon:d.Jl,image:d.Cd,"indented-text":d.CV,"input-checkbox":d.TE,"input-color":d.Np,"input-date":d.O,"input-email":d.Lj,"input-file":d.CX,"input-number":d.c2,"input-password":d.z5,"input-radio":d.sy,"input-range":d.TQ,"input-text":d.WD,kolibri:d.Vs,link:d.Nv,"link-button":d.Kc,"link-group":d.$o,logo:d.QK,modal:d.Ud,nav:d.MA,pagination:d.Q4,progress:d.WR,quote:d.VZ,select:d.r7,"skip-nav":d.P,spin:d.qq,"split-button":d.KJ,symbol:d.is,table:d.Vp,tabs:d.UD,textarea:d.Qs,version:d.u_}[e.tag];return t?(0,r.jsx)(t,{...n,children:i.map((e=>(0,r.jsx)("div",{slot:e[0].replace("slot-","").replace("default",""),dangerouslySetInnerHTML:{__html:e[1]}},e[0])))}):(0,r.jsx)("div",{children:"Tag not implemented"})}function f(e){const{description:n,name:i,update:t,value:d}=e;return(0,r.jsxs)("div",{className:"bg-gray-100 my-2 rounded-lg p-2 border border-gray-300 border-solid",children:[(0,r.jsx)("b",{children:i||"default"}),": ",n,(0,r.jsx)("br",{}),(0,r.jsx)(x.ML,{defaultLanguage:"html",height:"5em",onChange:e=>t(`slot-${i}`,e||""),options:{automaticLayout:!0,fontSize:16,lineNumbers:"off"},value:d})]})}const k=["_smart-button","_icon-align"],g={abbr:{"slot-default":"Abbr"},accordion:{"slot-default":"Accordion content"},tabs:{_tabs:'[{"_label":"Tab 1"},{"_label":"Tab 2", "_on": {"onClose": true} },{"_label":"Tab 3"}]'},breadcrumb:{_links:"[{'_label':'Startseite','_href':'#/'},{'_label':'Unterseite der Startseite','_href':'#/unterseite'},{'_label':'Unterseite der Unterseite','_href':'#/unterseite/unterseite'}]"},form:{"_required-text":"Bitte alle Felder ausf\xfcllen."},image:{_src:"https://placehold.co/100x100/cc006e/white"},"link-group":{_links:"[{'_label':'Startseite','_href':'#/'},{'_label':'Unterseite der Startseite','_href':'#/unterseite'},{'_label':'Unterseite der Unterseite','_href':'#/unterseite/unterseite'}]"},nav:{_links:"[{'_label':'Startseite','_href':'#/'},{'_label':'Unterseite der Startseite','_href':'#/unterseite'},{'_label':'Unterseite der Unterseite','_href':'#/unterseite/unterseite'}]"},pagination:{_total:"100",_page:"6"},quote:{_quote:"Hello World"},select:{_options:"[{'label':'Herr','value':0},{'label':'Frau','value':1}]"},"skip-nav":{_links:"[{'_label':'Navigation','_href':'#nav'},{'_label':'Inhalt','_href':'#main'},{'_label':'Kontakt','_href':'#kontakt'},{'_label':'Links','_href':'#links'}]"},table:{_headers:'{"horizontal":[[{"label":"Montag","key":"montag"}]]}',_data:'[{"montag":"Zelle1"},{"montag":"Zelle2"}]',_pagination:'{"page":2}'}};function _(e){const[n,i]=(0,s.useState)(function(){const e={};return Object.values(t.p).forEach((n=>{const i=n.name.replace("kol-","");e[i]={defaultValues:[]},n.attributes.forEach((n=>{void 0!==n.defaultValue&&(e[i][n.name]=n.defaultValue.replace(/'/g,""),e[i].defaultValues.push(n.name)),void 0!==g[i]?.[n.name]&&(e[i][n.name]=g[i][n.name])})),n.slots.forEach((n=>{const t=`slot-${n.name||"default"}`,d=g[i]?.[t];d&&(e[i][t]=d)}))})),e}()),[c,o]=(0,s.useState)("badge");(0,s.useEffect)((()=>{e.component&&o(e.component.replace("kol-",""))}),[e.component]),(0,s.useEffect)((()=>{!!t.p.find((e=>e.name===`kol-${c}`))?.attributes.find((e=>"_label"===e.name))&&!n[c]?._label&&x("_label","Label-Text");!!t.p.find((e=>e.name===`kol-${c}`))?.attributes.find((e=>"_heading"===e.name))&&!n[c]?._heading&&x("_heading","Heading-Text")}),[c]);const a=(0,s.useMemo)((()=>n[c]||{}),[n,c]);function x(e,n){i((i=>{const t={...i[c],[e]:n,defaultValues:i[c].defaultValues.filter((n=>n!==e))};return{...i,[c]:t}}))}const u=Object.values(t.p).find((e=>e.name===`kol-${c}`));return(0,r.jsx)(l.Z,{children:()=>(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(d.Er,{class:"mb-2",_label:"Beta",_color:"#b00"}),(0,r.jsxs)("div",{className:"grid lg:grid-cols-3 gap-2",children:[(0,r.jsxs)(d.UD,{className:"col-span-2",_label:"Wechselnavigation zwischen Viewer und Code",_tabs:[{_label:"Viewer"},{_label:"Code"}],children:[(0,r.jsx)("div",{className:"p-2",children:(0,r.jsx)(m,{tag:c,params:a})}),(0,r.jsx)("div",{className:"lg:col-span-2",children:(0,r.jsx)(b,{params:a,tag:c})})]}),(0,r.jsxs)("div",{className:"grid gap-4 p-2 border-0 border-l border-solid",children:[(0,r.jsx)(d.HA,{_level:3,_label:"Konfigurator"}),(0,r.jsxs)("div",{children:[(0,r.jsx)(d.HA,{_level:4,_label:"Properties"}),(0,r.jsxs)("div",{className:"max-h-96 p-2 overflow-auto mb-4",children:[u&&u.attributes.map((e=>(0,r.jsx)(r.Fragment,{children:!k.includes(e.name)&&!e.description.startsWith("Deprecated:")&&(0,r.jsx)(h,{attribute:e,update:x,value:a[e.name]},e.name)}))),u&&0===u.attributes.length&&(0,r.jsx)("span",{className:"text-gray-500",children:"Keine Properties vorhanden"})]}),(0,r.jsx)(d.HA,{_level:4,_label:"Slots"}),(0,r.jsxs)("div",{className:"max-h-56 p-2 overflow-auto",children:[u&&u.slots.map((e=>(0,r.jsx)(f,{description:e.description,name:e.name||"default",update:x,value:a["slot-"+(e.name||"default")]},e.name))),u&&0===u.slots.length&&(0,r.jsx)("span",{className:"text-gray-500",children:"Keine Slots vorhanden"})]})]})]})]})]})})}}}]);