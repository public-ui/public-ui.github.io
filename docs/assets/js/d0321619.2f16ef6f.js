"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[67362],{35756:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>u,contentTitle:()=>a,default:()=>b,frontMatter:()=>o,metadata:()=>h,toc:()=>x});var t=i(76776),s=i(108);function l(e){const n={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.M)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Buttons"})," dienen dazu, Benutzer",":innen"," Auswahlm\xf6glichkeiten f\xfcr Aktionen anzuzeigen und diese in einer klaren Hierarchie anzuordnen. Sie helfen Nutzer",":innen",", die wichtigsten Aktionen einer Seite oder innerhalb eines Viewports zu finden und erm\xf6glichen es ihnen, diese Aktionen auszuf\xfchren. Die Beschriftung des Buttons wird verwendet, um Nutzer",":innen"," klar anzuzeigen, welche Aktion ausgel\xf6st wird. Buttons erm\xf6glichen es Nutzer",":innen",", eine \xc4nderung zu best\xe4tigen, Schritte in einer Aufgabe abzuschlie\xdfen oder Entscheidungen zu treffen."]}),"\n",(0,t.jsx)(n.h2,{id:"konstruktion",children:"Konstruktion"}),"\n",(0,t.jsx)(n.h3,{id:"code",children:"Code"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-html",children:'<kol-button _label="Primary" _variant="primary"></kol-button>\n<kol-button _label="Secondary" _variant="secondary"></kol-button>\n<kol-button _label="Normal" _variant="normal"></kol-button>\n<kol-button _label="Danger" _variant="danger"></kol-button>\n<kol-button _label="Ghost" _variant="ghost"></kol-button>\n'})}),"\n",(0,t.jsx)(n.h3,{id:"events",children:"Events"}),"\n",(0,t.jsxs)(n.p,{children:["Events der Komponente k\xf6nnen \xfcber eine ",(0,t.jsx)(n.code,{children:"_on"}),"-Property behandelt werden, die aus einem Objekt mit verschiedenen Callback-Funktionen besteht:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"kolibriElement._on = {\n\tonFocus: (event) => {\n\t\t/* Do something on focus */\n\t},\n\tonClick: (event, value) => {\n\t\t/* Do something with value or event */\n\t},\n\t// ...\n};\n"})}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Event"}),(0,t.jsx)(n.th,{children:"Ausl\xf6ser"}),(0,t.jsx)(n.th,{children:"Value"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"onFocus"}),(0,t.jsx)(n.td,{children:"Element wird fokussiert"}),(0,t.jsx)(n.td,{children:"-"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"onMouseDown"}),(0,t.jsxs)(n.td,{children:["Element wird angeklickt (entspricht nativem ",(0,t.jsx)(n.code,{children:"mouseDown"}),"-Event)"]}),(0,t.jsx)(n.td,{children:"-"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"onClick"}),(0,t.jsxs)(n.td,{children:["Element wird angeklickt (entspricht nativem ",(0,t.jsx)(n.code,{children:"click"}),"-Event)"]}),(0,t.jsxs)(n.td,{children:["Definierter ",(0,t.jsx)(n.code,{children:"_value"})]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"onBlur"}),(0,t.jsx)(n.td,{children:"Element verliert Fokus"}),(0,t.jsx)(n.td,{children:"-"})]})]})]}),"\n",(0,t.jsx)(n.h3,{id:"beispiel",children:"Beispiel"}),"\n",(0,t.jsx)(n.p,{children:"Default"}),"\n",(0,t.jsxs)("div",{className:"flex flex-wrap gap-2",children:[(0,t.jsx)("kol-button",{_label:"Primary",_variant:"primary"}),(0,t.jsx)("kol-button",{_label:"Secondary",_variant:"secondary"}),(0,t.jsx)("kol-button",{_label:"Normal",_variant:"normal"}),(0,t.jsx)("kol-button",{_label:"Danger",_variant:"danger"}),(0,t.jsx)("kol-button",{_label:"Ghost",_variant:"ghost"})]}),"\n",(0,t.jsx)(n.p,{children:"Disabled"}),"\n",(0,t.jsxs)("div",{className:"flex flex-wrap gap-2",children:[(0,t.jsx)("kol-button",{_label:"Primary",_variant:"primary",_disabled:!0}),(0,t.jsx)("kol-button",{_label:"Secondary",_variant:"secondary",_disabled:!0}),(0,t.jsx)("kol-button",{_label:"Normal",_variant:"normal",_disabled:!0}),(0,t.jsx)("kol-button",{_label:"Danger",_variant:"danger",_disabled:!0}),(0,t.jsx)("kol-button",{_label:"Ghost",_variant:"ghost",_disabled:!0})]}),"\n",(0,t.jsx)(n.h2,{id:"verwendung",children:"Verwendung"}),"\n",(0,t.jsx)(n.h3,{id:"beschriftung",children:"Beschriftung"}),"\n",(0,t.jsxs)(n.p,{children:["F\xfcr die eindeutige Beschriftung des Buttons nutzen Sie das Attribut ",(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"_label"})}),".\n",(0,t.jsx)(n.code,{children:'_label="Schaltfl\xe4chenbeschriftung"'})]}),"\n",(0,t.jsx)(n.h3,{id:"icons",children:"Icons"}),"\n",(0,t.jsxs)(n.p,{children:["Icons (",(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"_icons"})}),") kann entweder als String angegeben werden, oder als Objekt.\nAls String \xfcbergeben Sie die Iconklasse (z.B.: ",(0,t.jsx)(n.code,{children:'_icons="codicon codicon-home'}),"), das Icon wird links vom Text angezeigt.\nDas Objekt ist vom Typ ",(0,t.jsx)(n.code,{children:"KoliBriAllIcon"}),", kann also einen oder mehrere der Schl\xfcssel ",(0,t.jsx)(n.code,{children:"top"}),", ",(0,t.jsx)(n.code,{children:"right"}),", ",(0,t.jsx)(n.code,{children:"bottom"})," und ",(0,t.jsx)(n.code,{children:"left"})," besitzen. Diese sind dann entweder String (siehe oben) oder ein Objekt vom Typ ",(0,t.jsx)(n.code,{children:"KoliBriCustomIcon"}),", welches aus ",(0,t.jsx)(n.code,{children:"icon"})," (String, siehe oben) und ",(0,t.jsx)(n.code,{children:"style"})," (optional, Styleobjekt) besteht."]}),"\n",(0,t.jsx)("kol-link",{_href:"https://microsoft.github.io/vscode-codicons/dist/codicon.html",_target:"_blank",_label:"\xdcbersicht Codicons"}),"\n",(0,t.jsx)(n.h3,{id:"schaltfl\xe4che-ohne-text",children:"Schaltfl\xe4che ohne Text"}),"\n",(0,t.jsxs)(n.p,{children:["Mittels ",(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"_hide-label"})})," wird die Schaltfl\xe4che nur das icon anzeigen (",(0,t.jsx)("kol-link",{_href:"#icon",_label:"siehe icon"}),")"]}),"\n",(0,t.jsxs)("kol-alert",{_type:"info",children:["Beachten Sie, dass das Attribut ",(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"_label"})})," auch dann gesetzt werden muss, wenn nur ein Icon angezeigt werden soll, dieses wird von Screenreadern vorgelesen und in den Tooltip gesetzt."]}),"\n",(0,t.jsx)(n.h3,{id:"darstellung-angeben",children:"Darstellung angeben"}),"\n",(0,t.jsxs)(n.p,{children:["Zur Steuerung der Darstellung verwenden Sie das Attribut ",(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"_variant"})}),". Der Standardwert ist ",(0,t.jsx)(n.code,{children:"primary"}),", alternativ kann auch ",(0,t.jsx)(n.code,{children:"primary"}),", ",(0,t.jsx)(n.code,{children:"secondary"}),", ",(0,t.jsx)(n.code,{children:"normal"}),", ",(0,t.jsx)(n.code,{children:"danger"}),", ",(0,t.jsx)(n.code,{children:"ghost"}),", oder ",(0,t.jsx)(n.code,{children:"custom"})," gesetzt werden.",(0,t.jsx)("br",{})]}),"\n",(0,t.jsxs)(n.p,{children:["\xdcber die Verwendung des Wertes ",(0,t.jsx)(n.code,{children:"custom"})," kann eine eigene Darstellung gew\xe4hlt werden. Verpflichtend ist in diesem Fall das Setzen des Attribut ",(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"_custom-class"})}),", damit die Schaltfl\xe4che im Shadow-Dom mittels CSS selektiert werden kann."]}),"\n",(0,t.jsx)(n.h3,{id:"best-practices",children:"Best practices"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Verwenden Sie eine prim\xe4re Schaltfl\xe4che f\xfcr die n\xe4chstbeste Aktion. Verbleibende Calls-to-Action sollten als sekund\xe4re Schaltfl\xe4che dargestellt werden."}),"\n",(0,t.jsx)(n.li,{children:"Verwenden Sie Schaltfl\xe4chen an einheitlichen Stellen in der Benutzeroberfl\xe4che, um die Benutzererfahrung zu verbessern."}),"\n",(0,t.jsx)(n.li,{children:"Verwenden Sie nur eine prim\xe4re Schaltfl\xe4che je Viewport. Auf der gesamten Seite kann ein Button-Style beliebig oft auftreten."}),"\n",(0,t.jsx)(n.li,{children:"Die Beschriftung des Button muss die Aktion beschreiben, die die Schaltfl\xe4che ausf\xfchrt. Sie sollte ein Verb enthalten (z.B. Speichern). Verwenden Sie pr\xe4gnante, spezifische, selbsterkl\xe4rende Beschriftungen."}),"\n",(0,t.jsx)(n.li,{children:'Schaltfl\xe4chenbeschriftungen sollten immer dann auch ein Nomen enthalten, wenn es Raum f\xfcr Interpretationen dar\xfcber gibt, wof\xfcr das Verb zust\xe4ndig ist. Verwenden Sie keine generischen Bezeichnungen wie "OK", insbesondere nicht im Fehlerfall. Fehler sind nie "OK".'}),"\n",(0,t.jsx)(n.li,{children:'Verwenden Sie nicht mehrere Buttons im Style "prim\xe4r" innerhalb einer Gruppierung.'}),"\n",(0,t.jsx)(n.li,{children:"Verwenden Sie Buttons nicht als Link oder als Navigationselement."}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"barrierefreiheit",children:"Barrierefreiheit"}),"\n",(0,t.jsxs)(n.p,{children:["F\xfcr Menschen mit einem eingeschr\xe4nkten Sichtfeld ist die Positionierung des ",(0,t.jsx)(n.strong,{children:"Icons"})," im Button links von der Beschriftung optimal."]}),"\n",(0,t.jsx)(n.p,{children:"Probleme mit Disabled-Status"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Darstellung Kontraste"}),"\n",(0,t.jsx)(n.li,{children:"M\xf6glichkeit des Nutzerfeedbacks"}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"tastatursteuerung",children:"Tastatursteuerung"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Taste"}),(0,t.jsx)(n.th,{children:"Funktion"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"Tab"})}),(0,t.jsx)(n.td,{children:"Springt den einzelnen Button an und fokussiert ihn."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"Enter"})}),(0,t.jsx)(n.td,{children:"F\xfchrt die onClick-Methode der fokussierten Schaltfl\xe4che aus."})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"links-und-referenzen",children:"Links und Referenzen"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)("kol-link",{_href:"https://www.w3.org/TR/wai-aria-practices/#button",_target:"_blank"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Property"}),(0,t.jsx)(n.th,{children:"Attribute"}),(0,t.jsx)(n.th,{children:"Description"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Default"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"_accessKey"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"_access-key"})}),(0,t.jsx)(n.td,{children:"Defines the elements access key."}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:"string"})," | ",(0,t.jsx)(n.code,{children:"undefined"})]}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"undefined"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"_ariaControls"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"_aria-controls"})}),(0,t.jsxs)(n.td,{children:["Defines which elements are controlled by this component. (",(0,t.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-controls",children:"https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-controls"}),")"]}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:"string"})," | ",(0,t.jsx)(n.code,{children:"undefined"})]}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"undefined"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"_ariaExpanded"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"_aria-expanded"})}),(0,t.jsxs)(n.td,{children:["Defines whether the interactive element of the component expanded something. (",(0,t.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-expanded",children:"https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-expanded"}),")"]}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:"boolean"})," | ",(0,t.jsx)(n.code,{children:"undefined"})]}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"undefined"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"_ariaSelected"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"_aria-selected"})}),(0,t.jsxs)(n.td,{children:["Defines whether the interactive element of the component is selected (e.g. role=tab). (",(0,t.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-selected",children:"https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-selected"}),")"]}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:"boolean"})," | ",(0,t.jsx)(n.code,{children:"undefined"})]}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"undefined"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"_customClass"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"_custom-class"})}),(0,t.jsx)(n.td,{children:'Defines the custom class attribute if _variant="custom" is set.'}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:"string"})," | ",(0,t.jsx)(n.code,{children:"undefined"})]}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"undefined"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"_disabled"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"_disabled"})}),(0,t.jsx)(n.td,{children:"Makes the element not focusable and ignore all events."}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:"boolean"})," | ",(0,t.jsx)(n.code,{children:"undefined"})]}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"false"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"_hideLabel"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"_hide-label"})}),(0,t.jsx)(n.td,{children:"Hides the caption by default and displays the caption text with a tooltip when the interactive element is focused or the mouse is over it."}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:"boolean"})," | ",(0,t.jsx)(n.code,{children:"undefined"})]}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"false"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"_icons"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"_icons"})}),(0,t.jsxs)(n.td,{children:["Defines the icon classnames (e.g. ",(0,t.jsx)(n.code,{children:'_icons="fa-solid fa-user"'}),")."]}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:"KoliBriHorizontalIcons & KoliBriVerticalIcons"})," | ",(0,t.jsx)(n.code,{children:"string"})," | ",(0,t.jsx)(n.code,{children:"undefined"})]}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"undefined"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"_id"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"_id"})}),(0,t.jsx)(n.td,{children:"Defines the internal ID of the primary component element."}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:"string"})," | ",(0,t.jsx)(n.code,{children:"undefined"})]}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"undefined"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:"_label"})," ",(0,t.jsx)(n.em,{children:"(required)"})]}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"_label"})}),(0,t.jsxs)(n.td,{children:["Defines the visible or semantic label of the component (e.g. aria-label, label, headline, caption, summary, etc.). Set to ",(0,t.jsx)(n.code,{children:"false"})," to enable the expert slot."]}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"string"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"undefined"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"_name"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"_name"})}),(0,t.jsx)(n.td,{children:"Defines the technical name of an input field."}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:"string"})," | ",(0,t.jsx)(n.code,{children:"undefined"})]}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"undefined"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"_on"})}),(0,t.jsx)(n.td,{children:"--"}),(0,t.jsx)(n.td,{children:"Defines the callback functions for button events."}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:"undefined"})," | ",(0,t.jsx)(n.code,{children:"{ onClick?: EventValueOrEventCallback<MouseEvent, StencilUnknown>"})," | ",(0,t.jsx)(n.code,{children:"undefined; onMouseDown?: EventCallback<MouseEvent>"})," | ",(0,t.jsx)(n.code,{children:"undefined; }"})]}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"undefined"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"_role"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"_role"})}),(0,t.jsx)(n.td,{children:"Defines the role of the components primary element."}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:'"button"'})," | ",(0,t.jsx)(n.code,{children:'"link"'})," | ",(0,t.jsx)(n.code,{children:'"tab"'})," | ",(0,t.jsx)(n.code,{children:'"treeitem"'})," | ",(0,t.jsx)(n.code,{children:"undefined"})]}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"undefined"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"_tabIndex"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"_tab-index"})}),(0,t.jsxs)(n.td,{children:["Defines which tab-index the primary element of the component has. (",(0,t.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex",children:"https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex"}),")"]}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:"number"})," | ",(0,t.jsx)(n.code,{children:"undefined"})]}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"undefined"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"_tooltipAlign"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"_tooltip-align"})}),(0,t.jsx)(n.td,{children:"Defines where to show the Tooltip preferably: top, right, bottom or left."}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:'"bottom"'})," | ",(0,t.jsx)(n.code,{children:'"left"'})," | ",(0,t.jsx)(n.code,{children:'"right"'})," | ",(0,t.jsx)(n.code,{children:'"top"'})," | ",(0,t.jsx)(n.code,{children:"undefined"})]}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"'top'"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"_type"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"_type"})}),(0,t.jsx)(n.td,{children:"Defines either the type of the component or of the components interactive element."}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:'"button"'})," | ",(0,t.jsx)(n.code,{children:'"reset"'})," | ",(0,t.jsx)(n.code,{children:'"submit"'})," | ",(0,t.jsx)(n.code,{children:"undefined"})]}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"'button'"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"_value"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"_value"})}),(0,t.jsx)(n.td,{children:"Defines the value that the button emits on click."}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:"boolean"})," | ",(0,t.jsx)(n.code,{children:"null"})," | ",(0,t.jsx)(n.code,{children:"number"})," | ",(0,t.jsx)(n.code,{children:"object"})," | ",(0,t.jsx)(n.code,{children:"string"})," | ",(0,t.jsx)(n.code,{children:"undefined"})]}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"undefined"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"_variant"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"_variant"})}),(0,t.jsx)(n.td,{children:"Defines which variant should be used for presentation."}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:'"custom"'})," | ",(0,t.jsx)(n.code,{children:'"danger"'})," | ",(0,t.jsx)(n.code,{children:'"ghost"'})," | ",(0,t.jsx)(n.code,{children:'"normal"'})," | ",(0,t.jsx)(n.code,{children:'"primary"'})," | ",(0,t.jsx)(n.code,{children:'"secondary"'})," | ",(0,t.jsx)(n.code,{children:'"tertiary"'})," | ",(0,t.jsx)(n.code,{children:"undefined"})]}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"'normal'"})})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"methods",children:"Methods"}),"\n",(0,t.jsx)(n.h3,{id:"focus",children:"focus"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"focus() => Promise<void>"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)("span",{className:"text-red-500",children:(0,t.jsx)(n.strong,{children:"[DEPRECATED]"})})," Use kolFocus instead.",(0,t.jsx)("br",{}),(0,t.jsx)("br",{})]}),"\n",(0,t.jsx)(n.h4,{id:"returns",children:"Returns"}),"\n",(0,t.jsxs)(n.p,{children:["Type: ",(0,t.jsx)(n.code,{children:"Promise<void>"})]}),"\n",(0,t.jsx)(n.h3,{id:"getvalue--promisestringifiedstencilunknown--undefined",children:(0,t.jsx)(n.code,{children:"getValue() => Promise<Stringified<StencilUnknown> | undefined>"})}),"\n",(0,t.jsx)(n.h4,{id:"returns-1",children:"Returns"}),"\n",(0,t.jsxs)(n.p,{children:["Type: ",(0,t.jsx)(n.code,{children:"Promise<Stringified<StencilUnknown>>"})]}),"\n",(0,t.jsx)(n.h3,{id:"kolfocus--promisevoid",children:(0,t.jsx)(n.code,{children:"kolFocus() => Promise<void>"})}),"\n",(0,t.jsx)(n.h4,{id:"returns-2",children:"Returns"}),"\n",(0,t.jsxs)(n.p,{children:["Type: ",(0,t.jsx)(n.code,{children:"Promise<void>"})]}),"\n",(0,t.jsx)(n.hr,{})]})}function r(e={}){const{wrapper:n}={...(0,s.M)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}var d=i(37704),c=i(54592);const o={title:"Button",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die Button-Komponente.",tags:["Button","Beschreibung","Spezifikation","Beispiele"]},a=void 0,h={id:"components/button",title:"Button",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die Button-Komponente.",source:"@site/docs/30-components/button.mdx",sourceDirName:"30-components",slug:"/components/button",permalink:"/docs/next/components/button",draft:!1,unlisted:!1,tags:[{inline:!0,label:"Button",permalink:"/docs/next/tags/button"},{inline:!0,label:"Beschreibung",permalink:"/docs/next/tags/beschreibung"},{inline:!0,label:"Spezifikation",permalink:"/docs/next/tags/spezifikation"},{inline:!0,label:"Beispiele",permalink:"/docs/next/tags/beispiele"}],version:"current",frontMatter:{title:"Button",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die Button-Komponente.",tags:["Button","Beschreibung","Spezifikation","Beispiele"]},sidebar:"tutorialSidebar",previous:{title:"ButtonLink",permalink:"/docs/next/components/button-link"},next:{title:"Card",permalink:"/docs/next/components/card"}},u={},x=[{value:"Konstruktion",id:"konstruktion",level:2},{value:"Code",id:"code",level:3},{value:"Events",id:"events",level:3},{value:"Beispiel",id:"beispiel",level:3},{value:"Verwendung",id:"verwendung",level:2},{value:"Beschriftung",id:"beschriftung",level:3},{value:"Icons",id:"icons",level:3},{value:"Schaltfl\xe4che ohne Text",id:"schaltfl\xe4che-ohne-text",level:3},{value:"Darstellung angeben",id:"darstellung-angeben",level:3},{value:"Best practices",id:"best-practices",level:3},{value:"Barrierefreiheit",id:"barrierefreiheit",level:2},{value:"Tastatursteuerung",id:"tastatursteuerung",level:3},{value:"Links und Referenzen",id:"links-und-referenzen",level:2},{value:"Properties",id:"properties",level:2},{value:"Methods",id:"methods",level:2},{value:"focus",id:"focus",level:3},{value:"Returns",id:"returns",level:4},{value:"<code>getValue() =&gt; Promise&lt;Stringified&lt;StencilUnknown&gt; | undefined&gt;</code>",id:"getvalue--promisestringifiedstencilunknown--undefined",level:3},{value:"Returns",id:"returns-1",level:4},{value:"<code>kolFocus() =&gt; Promise&lt;void&gt;</code>",id:"kolfocus--promisevoid",level:3},{value:"Returns",id:"returns-2",level:4},{value:"Live-Editor",id:"live-editor",level:2},{value:"Beispiele",id:"beispiele",level:2},{value:"Buttons",id:"buttons",level:3},{value:"Icon-Buttons",id:"icon-buttons",level:3},{value:"Button mit Icons",id:"button-mit-icons",level:3},{value:"Buttons mit einheitlicher Breite",id:"buttons-mit-einheitlicher-breite",level:3}];function j(e){const n={h2:"h2",h3:"h3",...(0,s.M)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r,{}),"\n",(0,t.jsx)(n.h2,{id:"live-editor",children:"Live-Editor"}),"\n",(0,t.jsx)(c.o,{component:"button"}),"\n",(0,t.jsx)(n.h2,{id:"beispiele",children:"Beispiele"}),"\n",(0,t.jsx)(n.h3,{id:"buttons",children:"Buttons"}),"\n",(0,t.jsx)(d.Q,{component:"button",sample:"basic"}),"\n",(0,t.jsx)(n.h3,{id:"icon-buttons",children:"Icon-Buttons"}),"\n",(0,t.jsx)(d.Q,{component:"button",sample:"icon-only"}),"\n",(0,t.jsx)(n.h3,{id:"button-mit-icons",children:"Button mit Icons"}),"\n",(0,t.jsx)(d.Q,{component:"button",sample:"icons"}),"\n",(0,t.jsx)(n.h3,{id:"buttons-mit-einheitlicher-breite",children:"Buttons mit einheitlicher Breite"}),"\n",(0,t.jsx)(d.Q,{component:"button",sample:"width"})]})}function b(e={}){const{wrapper:n}={...(0,s.M)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(j,{...e})}):j(e)}},37704:(e,n,i)=>{i.d(n,{Q:()=>o});var t=i(33920),s=i(80924),l=i(76776);const r=function(e,n,i,t,s){return void 0===s&&(s="editor"),`${e}&module=${t}&initialpath=%23%2F${n}%2F${i}&view=${s}`},d={width:"100%",height:"500px",border:"0",overflow:"hidden"},c=e=>{let{url:n}=e;return(0,l.jsxs)("div",{className:"m-2",children:[(0,l.jsx)("iframe",{src:n,style:d,title:"kolibri-public-ui-code-samples",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}),(0,l.jsx)(t.GQ,{_href:n,_label:"",_target:"codesandbox",children:(0,l.jsx)("img",{alt:"CodeSandbox-Schalter",src:"https://codesandbox.io/static/img/play-codesandbox.svg"})})]})},o=e=>{let{component:n,sample:i}=e;const[o,a]=(0,s.useState)("Preview"),h="https://codesandbox.io/embed/kolibri-public-ui-react-samples-w5u37c?fontsize=14&hidenavigation=1&autoresize=1&theme=dark",u=`%2Fsrc%2Fsamples%2F${n}%2F${i}`,x={angular:`${u}.html`,react:`${u}.tsx`,vue:`${u}.vue`,webcomponent:`${u}.html`},j=`/sample-react/#/${n}/${i}?hideMenus`,b={onSelect:(e,n)=>{switch(n){case 1:a((()=>"Angular"));break;case 2:a((()=>"React"));break;case 3:a((()=>"Vue"));break;case 4:a((()=>"Web Component"));break;default:a((()=>"Preview"))}}};return(0,l.jsxs)(t._,{className:"w-full",_label:"Code-Beispiel",_on:b,_tabs:[{_label:"Vorschau"},{_disabled:!0,_label:"Angular"},{_label:"React"},{_disabled:!0,_label:"Vue"},{_disabled:!0,_label:"Web Component"}],children:[(0,l.jsx)("div",{children:"Preview"===o&&(0,l.jsx)("iframe",{src:j,style:d,title:"kolibri-public-ui-code-samples",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"})}),(0,l.jsx)("div",{children:"Angular"===o&&(0,l.jsx)(c,{url:r(h,n,i,x.angular)})}),(0,l.jsx)("div",{children:"React"===o&&(0,l.jsx)(c,{url:r(h,n,i,x.react)})}),(0,l.jsx)("div",{children:"Vue"===o&&(0,l.jsx)(c,{url:r(h,n,i,x.vue)})}),(0,l.jsx)("div",{children:"Web Component"===o&&(0,l.jsx)(c,{url:r(h,n,i,x.webcomponent)})})]})}},54592:(e,n,i)=>{i.d(n,{o:()=>_});var t=i(52266),s=i(33920),l=i(80924),r=i(73700),d=i(76776);function c(e){const{label:n,name:i,update:t,value:r}=e;return(0,l.useEffect)((()=>{r||t(i,"#000000")}),[]),(0,d.jsx)(s.eK,{_label:"",_on:{onInput:(e,n)=>t(i,n)},_value:r,children:(0,d.jsx)("span",{slot:"expert",children:n})})}function o(e){const{attribute:n,label:i,update:t}=e,[r,c]=(0,l.useState)(""),[o,a]=(0,l.useState)(""),[h,u]=(0,l.useState)(""),[x,j]=(0,l.useState)("");let b=!1,p=!1,m=!1,f=!1;n.type.includes("KoliBriAllIcon")?(b=!0,p=!0,m=!0,f=!0):(n.type.includes("KoliBriVerticalIcon")&&(m=!0,f=!0),n.type.includes("KoliBriHorizontalIcon")&&(b=!0,p=!0)),(0,l.useEffect)((()=>{if(!r||o||h||x){const e={};r&&(e.left=`codicon codicon-${r}`),o&&(e.right=`codicon codicon-${o}`),h&&(e.top=`codicon codicon-${h}`),x&&(e.bottom=`codicon codicon-${x}`),Object.keys(e).length&&t(n.name,JSON.stringify(e))}else t(n.name,`codicon codicon-${r}`)}),[r,o,h,x]);const g=["home","arrow-up","arrow-right","arrow-down","arrow-left"];return(0,d.jsxs)("div",{children:[i,b?(0,d.jsx)(s.Si,{_label:"Links",children:(0,d.jsx)("div",{className:"flex flex-wrap gap-2 p-2",children:g.map((e=>(0,d.jsx)(s.qC,{_icons:`codicon codicon-${e}`,_hideLabel:!0,_label:"",_on:{onClick:()=>c(e)}},e)))})}):"",p?(0,d.jsx)(s.Si,{_label:"Rechts",children:(0,d.jsx)("div",{className:"flex flex-wrap gap-2 p-2",children:g.map((e=>(0,d.jsx)(s.qC,{_icons:`codicon codicon-${e}`,_hideLabel:!0,_label:"",_on:{onClick:()=>a(e)}},e)))})}):"",m?(0,d.jsx)(s.Si,{_label:"Oben",children:(0,d.jsx)("div",{className:"flex flex-wrap gap-2 p-2",children:g.map((e=>(0,d.jsx)(s.qC,{_icons:`codicon codicon-${e}`,_hideLabel:!0,_label:"",_on:{onClick:()=>u(e)}},e)))})}):"",f?(0,d.jsx)(s.Si,{_label:"Unten",children:(0,d.jsx)("div",{className:"flex flex-wrap gap-2 p-2",children:g.map((e=>(0,d.jsx)(s.qC,{_icons:`codicon codicon-${e}`,_hideLabel:!0,_label:"",_on:{onClick:()=>j(e)}},e)))})}):""]})}function a(e){const{name:n,label:i,types:t,update:l,value:r}=e,c=[];function o(e){return{label:e,value:e}}return t.includes("undefined")?(c.push({label:"-",value:void 0}),c.push(...t.filter((e=>"undefined"!==e)).map(o))):c.push(...t.filter((e=>"undefined"!==e)).map(o)),(0,d.jsx)(s.qy,{className:"my-2",_label:"",_options:JSON.stringify(c),_on:{onInput:(e,i)=>l(n,i[0])},_value:r?[r]:void 0,children:(0,d.jsx)("span",{slot:"expert",children:i})})}function h(e){const{attribute:n,update:i,value:t}=e,r=(0,l.useMemo)((()=>{let e=n.type.replace(/\\?"/g,"").split(" | ");return e=e.filter((e=>"KoliBriAllIcon ignorieren"!==e)),1===e.length?e[0]:e.includes("string")?"string":e.includes("number")?"number":e.includes("boolean")?"boolean":""}),[n]),h=(0,l.useMemo)((()=>{const e=n.type.split(" | ").map((e=>e.replace(/\\?"/g,""))),l=(0,d.jsx)(s.s1,{_label:n.description,children:n.name});switch(n.name){case"_color":return(0,d.jsx)(c,{name:n.name,label:l,update:i,value:t});case"_icons":return(0,d.jsx)(o,{attribute:n,label:l,update:i,value:t});default:switch(r){case"string":return(0,d.jsx)(s.Uh,{className:"my-2",_label:"",_on:{onInput:(e,t)=>i(n.name,t)},_value:t||"",children:(0,d.jsx)("span",{slot:"expert",children:l})});case"number":return(0,d.jsx)(s.QL,{className:"my-2",_label:"",_on:{onInput:(e,t)=>i(n.name,t)},_value:t,children:(0,d.jsx)("span",{slot:"expert",children:l})});case"boolean":return(0,d.jsx)(s.Q7,{className:"my-2",_checked:!0===t,_label:"",_on:{onInput:(e,t)=>i(n.name,t)},_variant:"switch",_value:!0,children:(0,d.jsx)("span",{slot:"expert",children:l})});default:return e.length>1?(0,d.jsx)(a,{label:l,name:n.name,types:e,update:i,value:t}):(0,d.jsxs)("p",{children:["Attribut: '",n.name,"'",(0,d.jsx)("br",{}),"Typ: '",n.type,"'"]})}}}),[n,t]);return(0,d.jsx)(d.Fragment,{children:h})}var u=i(63136),x=i(28256),j=i(39452),b=i.n(j);function p(e){const{tag:n,params:i}=e,t=Object.entries(i).filter((e=>"defaultValues"!==e[0]));let s="";const r=(0,l.useMemo)((()=>{let e="";return t.filter((e=>e[0].startsWith("slot-"))).forEach((n=>{const i=n[1],t=n[0].split("-")[1];if(i)if(i.match(/^<.*?>/)?.length){const n=i.indexOf(">");e+=i.substring(0,n)+` slot="${t}"`+i.substring(n)}else e+=`<div slot="${t}">${i}</div>`})),e}),[i]),c=t.filter((e=>!e[0].startsWith("slot-"))).filter((e=>!i.defaultValues.includes(e[0])));for(const[l,d]of c)if(d){let e="";switch(typeof d){case"string":e=` ${l}="${d.replace(/"/g,"'")}"`;break;case"number":e=` ${l}="${d.toString()}"`;break;case"boolean":e=d?` ${l}`:"";break;case"object":e=` ${l}="${JSON.stringify(d)}"`;break;default:e="Never give up hope, one day everything will be fixed."}s+=e}const o=`<kol-${n}${s}>${r}</kol-${n}>`;let a;try{a=(0,x.format)(o,{plugins:[b()],printWidth:80}).replace(/;\n$/,"")}catch(h){a=`\x3c!-- Formatter-Error: Slot-Markup is not valid HTML for formatting. --\x3e\n${o}`}return(0,d.jsx)("div",{className:"h-48 rounded-md overflow-hidden",children:(0,d.jsx)(u.cp,{defaultLanguage:"html",height:"100%",options:{automaticLayout:!0,fontSize:16,lineNumbers:"off",readOnly:!0},value:a})})}function m(e){const n=Object.fromEntries(Object.entries(e.params).filter((e=>{let[n]=e;return!n.startsWith("slot-")}))),i=Object.entries(e.params).filter((e=>{let[n]=e;return n.startsWith("slot-")})),t={abbr:s.s1,accordion:s.IP,alert:s.mW,avatar:s.aq,badge:s.cX,breadcrumb:s.If,button:s.qC,"button-group":s.Os,"button-link":s.u_,card:s.Yh,details:s.Si,form:s.OO,heading:s.ch,icon:s.SA,image:s.iu,"indented-text":s.MV,"input-checkbox":s.Q7,"input-color":s.eK,"input-date":s.QZ,"input-email":s.kN,"input-file":s.Ex,"input-number":s.QL,"input-password":s.EH,"input-radio":s.wJ,"input-range":s.Ef,"input-text":s.Uh,kolibri:s.aY,link:s.GQ,"link-button":s._k,"link-group":s.O_,logo:s.ae,modal:s.cT,nav:s.Y4,pagination:s.kj,progress:s.O0,quote:s.SY,select:s.qy,"skip-nav":s.Ig,spin:s.kP,"split-button":s.a,symbol:s.OM,table:s.Y9,tabs:s._,textarea:s.DG,version:s.k1}[e.tag];return t?(0,d.jsx)(t,{...n,children:i.map((e=>(0,d.jsx)("div",{slot:e[0].replace("slot-","").replace("default",""),dangerouslySetInnerHTML:{__html:e[1]}},e[0])))}):(0,d.jsx)("div",{children:"Tag not implemented"})}function f(e){const{description:n,name:i,update:t,value:s}=e;return(0,d.jsxs)("div",{className:"bg-gray-100 my-2 rounded-lg p-2 border border-gray-300 border-solid",children:[(0,d.jsx)("b",{children:i||"default"}),": ",n,(0,d.jsx)("br",{}),(0,d.jsx)(u.GW,{defaultLanguage:"html",height:"5em",onChange:e=>t(`slot-${i}`,e||""),options:{automaticLayout:!0,fontSize:16,lineNumbers:"off"},value:s})]})}const g=["_smart-button","_icon-align"],v={abbr:{"slot-default":"Abbr"},accordion:{"slot-default":"Accordion content"},tabs:{_tabs:'[{"_label":"Tab 1"},{"_label":"Tab 2", "_on": {"onClose": true} },{"_label":"Tab 3"}]'},breadcrumb:{_links:"[{'_label':'Startseite','_href':'#/'},{'_label':'Unterseite der Startseite','_href':'#/unterseite'},{'_label':'Unterseite der Unterseite','_href':'#/unterseite/unterseite'}]"},form:{"_required-text":"Bitte alle Felder ausf\xfcllen."},image:{_src:"https://placehold.co/100x100/cc006e/white"},"link-group":{_links:"[{'_label':'Startseite','_href':'#/'},{'_label':'Unterseite der Startseite','_href':'#/unterseite'},{'_label':'Unterseite der Unterseite','_href':'#/unterseite/unterseite'}]"},nav:{_links:"[{'_label':'Startseite','_href':'#/'},{'_label':'Unterseite der Startseite','_href':'#/unterseite'},{'_label':'Unterseite der Unterseite','_href':'#/unterseite/unterseite'}]"},pagination:{_total:"100",_page:"6"},quote:{_quote:"Hello World"},select:{_options:"[{'label':'Herr','value':0},{'label':'Frau','value':1}]"},"skip-nav":{_links:"[{'_label':'Navigation','_href':'#nav'},{'_label':'Inhalt','_href':'#main'},{'_label':'Kontakt','_href':'#kontakt'},{'_label':'Links','_href':'#links'}]"},table:{_headers:'{"horizontal":[[{"label":"Montag","key":"montag"}]]}',_data:'[{"montag":"Zelle1"},{"montag":"Zelle2"}]',_pagination:'{"page":2}'}};function _(e){const[n,i]=(0,l.useState)(function(){const e={};return Object.values(t.Q).forEach((n=>{const i=n.name.replace("kol-","");e[i]={defaultValues:[]},n.attributes.forEach((n=>{void 0!==n.defaultValue&&(e[i][n.name]=n.defaultValue.replace(/'/g,""),e[i].defaultValues.push(n.name)),void 0!==v[i]?.[n.name]&&(e[i][n.name]=v[i][n.name])})),n.slots.forEach((n=>{const t=`slot-${n.name||"default"}`,s=v[i]?.[t];s&&(e[i][t]=s)}))})),e}()),[c,o]=(0,l.useState)("badge");(0,l.useEffect)((()=>{e.component&&o(e.component.replace("kol-",""))}),[e.component]),(0,l.useEffect)((()=>{!!t.Q.find((e=>e.name===`kol-${c}`))?.attributes.find((e=>"_label"===e.name))&&!n[c]?._label&&u("_label","Label-Text");!!t.Q.find((e=>e.name===`kol-${c}`))?.attributes.find((e=>"_heading"===e.name))&&!n[c]?._heading&&u("_heading","Heading-Text")}),[c]);const a=(0,l.useMemo)((()=>n[c]||{}),[n,c]);function u(e,n){i((i=>{const t={...i[c],[e]:n,defaultValues:i[c].defaultValues.filter((n=>n!==e))};return{...i,[c]:t}}))}const x=Object.values(t.Q).find((e=>e.name===`kol-${c}`));return(0,d.jsx)(r.c,{children:()=>(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(s.cX,{class:"mb-2",_label:"Beta",_color:"#b00"}),(0,d.jsxs)("div",{className:"grid lg:grid-cols-3 gap-2",children:[(0,d.jsxs)(s._,{className:"col-span-2",_label:"Wechselnavigation zwischen Viewer und Code",_tabs:[{_label:"Viewer"},{_label:"Code"}],children:[(0,d.jsx)("div",{className:"p-2",children:(0,d.jsx)(m,{tag:c,params:a})}),(0,d.jsx)("div",{className:"lg:col-span-2",children:(0,d.jsx)(p,{params:a,tag:c})})]}),(0,d.jsxs)("div",{className:"grid gap-4 p-2 border-0 border-l border-solid",children:[(0,d.jsx)(s.ch,{_level:3,_label:"Konfigurator"}),(0,d.jsxs)("div",{children:[(0,d.jsx)(s.ch,{_level:4,_label:"Properties"}),(0,d.jsxs)("div",{className:"max-h-96 p-2 overflow-auto mb-4",children:[x&&x.attributes.map((e=>(0,d.jsx)(d.Fragment,{children:!g.includes(e.name)&&!e.description.startsWith("Deprecated:")&&(0,d.jsx)(h,{attribute:e,update:u,value:a[e.name]},e.name)}))),x&&0===x.attributes.length&&(0,d.jsx)("span",{className:"text-gray-500",children:"Keine Properties vorhanden"})]}),(0,d.jsx)(s.ch,{_level:4,_label:"Slots"}),(0,d.jsxs)("div",{className:"max-h-56 p-2 overflow-auto",children:[x&&x.slots.map((e=>(0,d.jsx)(f,{description:e.description,name:e.name||"default",update:u,value:a["slot-"+(e.name||"default")]},e.name))),x&&0===x.slots.length&&(0,d.jsx)("span",{className:"text-gray-500",children:"Keine Slots vorhanden"})]})]})]})]})]})})}}}]);