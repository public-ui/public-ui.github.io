"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[40128],{54560:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>u,contentTitle:()=>o,default:()=>b,frontMatter:()=>a,metadata:()=>h,toc:()=>x});var d=i(76776),s=i(108);function r(e){const n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",hr:"hr",li:"li",mermaid:"mermaid",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.M)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.p,{children:["Der Input-Typ ",(0,d.jsx)(n.strong,{children:"Date"})," erzeugt ein Eingabefeld f\xfcr Datumswerte. Diese k\xf6nnen konkrete Daten sein, aber auch Wochen, Monate oder Zeitangaben."]}),"\n",(0,d.jsx)(n.h2,{id:"konstruktion",children:"Konstruktion"}),"\n",(0,d.jsx)(n.h3,{id:"code",children:"Code"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-html",children:'<kol-input-date _id="mein_datum" _name="mein_datum" _type="date">Erstellungsdatum</kol-input-date>\n'})}),"\n",(0,d.jsx)(n.h3,{id:"beispiel",children:"Beispiel"}),"\n",(0,d.jsx)("kol-input-date",{_id:"mein_datum",_name:"mein_datum",_type:"date",children:"Erstellungsdatum"}),"\n",(0,d.jsx)(n.h2,{id:"verwendung",children:"Verwendung"}),"\n",(0,d.jsxs)(n.p,{children:["Die ",(0,d.jsx)(n.strong,{children:"InputDate"}),"-Komponente kann f\xfcr die Erfassung von Daten verwendet werden. Es verwendet intern die InputNumber-Komponente."]}),"\n",(0,d.jsxs)("kol-alert",{_type:"info",children:["Beachten Sie, dass im ",(0,d.jsx)(n.strong,{children:"Firefox"})," nicht alle ",(0,d.jsx)(n.strong,{children:(0,d.jsx)(n.code,{children:"_types"})})," der ",(0,d.jsx)(n.strong,{children:"InputDate"}),"-Komponente funktional sind. Es werden bei den Typen ",(0,d.jsx)(n.code,{children:"month"}),", ",(0,d.jsx)(n.code,{children:"time"})," und ",(0,d.jsx)(n.code,{children:"week"})," keine Auswahldialoge angezeigt."]}),"\n",(0,d.jsx)(n.p,{children:"Die Komponente zeichnet sich dadurch aus, dass sie zahlreiche Ziffern-basierte Eingabemuster unterst\xfctzt. Hierbei ist es wichtig zu beachten, dass sich das Verhalten bei der Eingabe von Browser zu Browser und Ger\xe4te zu Ger\xe4t unterscheiden kann. Beispielsweise ist es m\xf6glich beim Datum, 01.01.999999 einzugeben, auch wenn max=2022-02-02 ist. Der Feldwert ist aber trotzdem 2022-02-02."}),"\n",(0,d.jsx)(n.h3,{id:"best-practices",children:"Best practices"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["Achten sie darauf ",(0,d.jsx)(n.code,{children:"id"})," und ",(0,d.jsx)(n.code,{children:"name"})," korrekt zu setzen, damit die Daten beim Formular Absenden mitgesendet werden."]}),"\n"]}),"\n",(0,d.jsx)(n.h2,{id:"barrierefreiheit",children:"Barrierefreiheit"}),"\n",(0,d.jsxs)(n.p,{children:["Die Icons in der Komponente sind per Tab-Taste nicht erreichbar. Die Auswahlhilfen der Komponente werden \xfcber die ",(0,d.jsx)(n.strong,{children:"Leertaste"})," ge\xf6ffnet. So erhalten Sie beispielsweise beim Typ ",(0,d.jsx)(n.strong,{children:"date"})," ein Kalendermodul, \xfcber das per Maus oder \xfcber die Tastatur das gew\xfcnschte Datum ausgew\xe4hlt werden kann. Die manuelle Eingabe der Werte ist alternativ m\xf6glich."]}),"\n",(0,d.jsx)(n.h3,{id:"tastatursteuerung",children:"Tastatursteuerung"}),"\n",(0,d.jsxs)(n.p,{children:["Das Eingabefeld f\xfcr Zeitangaben gibt es in unterschiedlichen Auspr\xe4gungen (Datum, Uhrzeit u.a). Mit der ",(0,d.jsx)(n.code,{children:"Tab"}),"-Taste wird der Fokus auf das Eingabefeld gesetzt. Anschlie\xdfend kann mittels der ",(0,d.jsx)(n.code,{children:"Leer"}),"-Taste das ger\xe4tespezifische Auswahldialog ge\xf6ffent werden."]}),"\n",(0,d.jsxs)(n.blockquote,{children:["\n",(0,d.jsxs)(n.p,{children:["Hinweis: Wir haben in unseren Tests festgestellt, dass es je nach Browser-Version manchmal m\xf6glich ist, das Kalender-Icon anzufokusieren und mal nicht. Ohne das sich die Implementierung der Komponente ge\xe4ndert hat. Warum das so ist ist uns noch nicht bekannt. Nichtsdestotrotz ist das \xd6ffnen des Auswahldialogs immer mittels der ",(0,d.jsx)(n.code,{children:"Leer"}),"-Taste m\xf6glich."]}),"\n"]}),"\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Taste"}),(0,d.jsx)(n.th,{children:"Funktion"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"Tab"})}),(0,d.jsxs)(n.td,{children:["Fokussiert das Eingabefeld. Nach erhalt des Fokus wechselt die ",(0,d.jsx)(n.code,{children:"Tab"}),"-Taste durch die Eingabebereiche. Danach erst wechselt die ",(0,d.jsx)(n.code,{children:"Tab"}),"-Taste zum n\xe4chsten Eingabefeld."]})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"Leer"})}),(0,d.jsxs)(n.td,{children:["Wenn das Eingabefeld fokussiert ist, kann im Browser mit der ",(0,d.jsx)(n.code,{children:"Leer"}),"-Taste ein Auswahldialog aufgerufen bzw. geschlossen werden. Die Navigation und Auswahl erfolgt hier mit Hilfe der ",(0,d.jsx)(n.code,{children:"Tab"}),"-Taste, der ",(0,d.jsx)(n.code,{children:"Pfeil"}),"-Tasten und der Best\xe4tigung mittes ",(0,d.jsx)(n.code,{children:"Enter"}),"-Taste."]})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"Pfeil-Tasten (links / rechts)"})}),(0,d.jsxs)(n.td,{children:["Wenn das Eingabefeld fokussiert ist, kann mit den ",(0,d.jsx)(n.code,{children:"Pfeil"}),"-Tasten zwischen den Eingabebereichen gewechselt werden."]})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"Pfeil-Tasten (oben / unten)"})}),(0,d.jsxs)(n.td,{children:["Wenn ein Eingabebereich aktiviert ist, k\xf6nnen mit den ",(0,d.jsx)(n.code,{children:"Pfeil"}),"-Tasten oben und unten die Werte ver\xe4ndert werden."]})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"Esc"})}),(0,d.jsxs)(n.td,{children:["Ist ein Auswahldialog verf\xfcgbar, kann dieser alternativ zur ",(0,d.jsx)(n.code,{children:"Leer"}),"-Taste oder auch mit der ",(0,d.jsx)(n.code,{children:"Esc"}),"-Taste geschlossen werden."]})]})]})]}),"\n",(0,d.jsx)(n.h2,{id:"links-und-referenzen",children:"Links und Referenzen"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.a,{href:"https://www.w3.org/TR/2012/WD-html-markup-20120329/input.date.html",children:"https://www.w3.org/TR/2012/WD-html-markup-20120329/input.date.html"})}),"\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.a,{href:"https://www.hassellinclusion.com/blog/input-type-date-ready-for-use/",children:"https://www.hassellinclusion.com/blog/input-type-date-ready-for-use/"})}),"\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.a,{href:"https://a11ysupport.io/tech/html/input(type-date)_element",children:"https://a11ysupport.io/tech/html/input(type-date)_element"})}),"\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.a,{href:"https://medium.com/@gavyn/til-autofocus-inputs-are-an-accessibility-problem-32ced60c3109",children:"https://medium.com/@gavyn/til-autofocus-inputs-are-an-accessibility-problem-32ced60c3109"})}),"\n"]}),"\n",(0,d.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Property"}),(0,d.jsx)(n.th,{children:"Attribute"}),(0,d.jsx)(n.th,{children:"Description"}),(0,d.jsx)(n.th,{children:"Type"}),(0,d.jsx)(n.th,{children:"Default"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"_accessKey"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"_access-key"})}),(0,d.jsx)(n.td,{children:"Gibt an, mit welcher Tastenkombination man das Input ausl\xf6sen oder fokussieren kann."}),(0,d.jsxs)(n.td,{children:[(0,d.jsx)(n.code,{children:"string"})," | ",(0,d.jsx)(n.code,{children:"undefined"})]}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"undefined"})})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"_alert"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"_alert"})}),(0,d.jsx)(n.td,{children:"Gibt an, ob die Fehlermeldung vorgelesen werden soll, wenn es eine gibt."}),(0,d.jsxs)(n.td,{children:[(0,d.jsx)(n.code,{children:"boolean"})," | ",(0,d.jsx)(n.code,{children:"undefined"})]}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"true"})})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"_autoComplete"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"_auto-complete"})}),(0,d.jsx)(n.td,{children:"Gibt an, ob das Eingabefeld autovervollst\xe4ndigt werden kann."}),(0,d.jsxs)(n.td,{children:[(0,d.jsx)(n.code,{children:'"off"'})," | ",(0,d.jsx)(n.code,{children:'"on"'})," | ",(0,d.jsx)(n.code,{children:"undefined"})]}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"undefined"})})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"_disabled"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"_disabled"})}),(0,d.jsx)(n.td,{children:"Setzt das Feld in einen inaktiven Zustand, in dem es keine Interaktion erlaubt."}),(0,d.jsxs)(n.td,{children:[(0,d.jsx)(n.code,{children:"boolean"})," | ",(0,d.jsx)(n.code,{children:"undefined"})]}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"undefined"})})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"_error"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"_error"})}),(0,d.jsx)(n.td,{children:"Gibt den Text f\xfcr eine Fehlermeldung an."}),(0,d.jsxs)(n.td,{children:[(0,d.jsx)(n.code,{children:"string"})," | ",(0,d.jsx)(n.code,{children:"undefined"})]}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"undefined"})})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"_hideLabel"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"_hide-label"})}),(0,d.jsx)(n.td,{children:"Versteckt das sichtbare Label des Elements."}),(0,d.jsxs)(n.td,{children:[(0,d.jsx)(n.code,{children:"boolean"})," | ",(0,d.jsx)(n.code,{children:"undefined"})]}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"undefined"})})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"_hint"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"_hint"})}),(0,d.jsx)(n.td,{children:"Gibt den Hinweistext an."}),(0,d.jsxs)(n.td,{children:[(0,d.jsx)(n.code,{children:"string"})," | ",(0,d.jsx)(n.code,{children:"undefined"})]}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"''"})})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"_icon"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"_icon"})}),(0,d.jsx)(n.td,{children:"Erm\xf6glicht das Anzeigen von Icons links und/oder rechts am Rand des Eingabefeldes."}),(0,d.jsxs)(n.td,{children:[(0,d.jsx)(n.code,{children:"string"})," | ",(0,d.jsx)(n.code,{children:"undefined"})," | ",(0,d.jsx)(n.code,{children:"{ right?: IconOrIconClass"})," | ",(0,d.jsx)(n.code,{children:"undefined; left?: IconOrIconClass"})," | ",(0,d.jsx)(n.code,{children:"undefined; }"})]}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"undefined"})})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"_id"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"_id"})}),(0,d.jsx)(n.td,{children:"Gibt die technische ID des Eingabefeldes an."}),(0,d.jsxs)(n.td,{children:[(0,d.jsx)(n.code,{children:"string"})," | ",(0,d.jsx)(n.code,{children:"undefined"})]}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"undefined"})})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"_list"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"_list"})}),(0,d.jsx)(n.td,{children:"Gibt die Liste der Vorschlagszahlen an."}),(0,d.jsxs)(n.td,{children:[(0,d.jsx)(n.code,{children:"string"})," | ",(0,d.jsx)(n.code,{children:"string[]"})," | ",(0,d.jsx)(n.code,{children:"undefined"})]}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"undefined"})})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"_max"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"_max"})}),(0,d.jsx)(n.td,{children:"Gibt den gr\xf6\xdftm\xf6glichen Datumswert an."}),(0,d.jsxs)(n.td,{children:[(0,d.jsx)(n.code,{children:"Date"})," | ",(0,d.jsx)(n.code,{children:"${number}-${number}-${number}T${number}:${number}:${number}"})," | ",(0,d.jsx)(n.code,{children:"${number}-${number}-${number}T${number}:${number}"})," | ",(0,d.jsx)(n.code,{children:"${number}-${number}-${number}"})," | ",(0,d.jsx)(n.code,{children:"${number}-${number}"})," | ",(0,d.jsx)(n.code,{children:"${number}-W${number}"})," | ",(0,d.jsx)(n.code,{children:"${number}:${number}:${number}"})," | ",(0,d.jsx)(n.code,{children:"${number}:${number}"})," | ",(0,d.jsx)(n.code,{children:"undefined"})]}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"undefined"})})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"_min"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"_min"})}),(0,d.jsx)(n.td,{children:"Gibt den kleinstm\xf6glichen Datumswert an."}),(0,d.jsxs)(n.td,{children:[(0,d.jsx)(n.code,{children:"Date"})," | ",(0,d.jsx)(n.code,{children:"${number}-${number}-${number}T${number}:${number}:${number}"})," | ",(0,d.jsx)(n.code,{children:"${number}-${number}-${number}T${number}:${number}"})," | ",(0,d.jsx)(n.code,{children:"${number}-${number}-${number}"})," | ",(0,d.jsx)(n.code,{children:"${number}-${number}"})," | ",(0,d.jsx)(n.code,{children:"${number}-W${number}"})," | ",(0,d.jsx)(n.code,{children:"${number}:${number}:${number}"})," | ",(0,d.jsx)(n.code,{children:"${number}:${number}"})," | ",(0,d.jsx)(n.code,{children:"undefined"})]}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"undefined"})})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"_name"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"_name"})}),(0,d.jsx)(n.td,{children:"Gibt den technischen Namen des Eingabefeldes an."}),(0,d.jsxs)(n.td,{children:[(0,d.jsx)(n.code,{children:"string"})," | ",(0,d.jsx)(n.code,{children:"undefined"})]}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"undefined"})})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"_on"})}),(0,d.jsx)(n.td,{children:"--"}),(0,d.jsx)(n.td,{children:"Gibt die EventCallback-Funktionen f\xfcr das Input-Event an."}),(0,d.jsxs)(n.td,{children:[(0,d.jsx)(n.code,{children:"InputTypeOnBlur & InputTypeOnClick & InputTypeOnChange & InputTypeOnFocus"})," | ",(0,d.jsx)(n.code,{children:"undefined"})]}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"undefined"})})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"_readOnly"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"_read-only"})}),(0,d.jsx)(n.td,{children:"Setzt das Eingabefeld in den schreibgesch\xfctzten Modus."}),(0,d.jsxs)(n.td,{children:[(0,d.jsx)(n.code,{children:"boolean"})," | ",(0,d.jsx)(n.code,{children:"undefined"})]}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"undefined"})})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"_required"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"_required"})}),(0,d.jsx)(n.td,{children:"Macht das Eingabeelement zu einem Pflichtfeld."}),(0,d.jsxs)(n.td,{children:[(0,d.jsx)(n.code,{children:"boolean"})," | ",(0,d.jsx)(n.code,{children:"undefined"})]}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"undefined"})})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"_smartButton"})}),(0,d.jsx)(n.td,{children:"--"}),(0,d.jsx)(n.td,{children:"Erm\xf6glicht eine Schaltfl\xe4che ins das Eingabefeld mit einer beliebigen Aktion zu einzuf\xfcgen (ohne label)."}),(0,d.jsxs)(n.td,{children:[(0,d.jsx)(n.code,{children:"undefined"})," | ",(0,d.jsx)(n.code,{children:"{ _label: string; } & { _ariaControls?: string"})," | ",(0,d.jsx)(n.code,{children:"undefined; _ariaLabel?: string"})," | ",(0,d.jsx)(n.code,{children:"undefined; _icon?: Stringified<KoliBriIconProp>"})," | ",(0,d.jsx)(n.code,{children:"undefined; _iconAlign?: Alignment"})," | ",(0,d.jsx)(n.code,{children:"undefined; _iconOnly?: boolean"})," | ",(0,d.jsx)(n.code,{children:"undefined; _role?: AlternativButtonLinkRole"})," | ",(0,d.jsx)(n.code,{children:"undefined; _tabIndex?: number"})," | ",(0,d.jsx)(n.code,{children:"undefined; _tooltipAlign?: Alignment"})," | ",(0,d.jsx)(n.code,{children:"undefined; _ariaCurrent?: AriaCurrent"})," | ",(0,d.jsx)(n.code,{children:"undefined; _ariaExpanded?: boolean"})," | ",(0,d.jsx)(n.code,{children:"undefined; _ariaSelected?: boolean"})," | ",(0,d.jsx)(n.code,{children:"undefined; _disabled?: boolean"})," | ",(0,d.jsx)(n.code,{children:"undefined; _accessKey?: string"})," | ",(0,d.jsx)(n.code,{children:"undefined; _id?: string"})," | ",(0,d.jsx)(n.code,{children:"undefined; _on?: KoliBriButtonCallbacks<unknown>"})," | ",(0,d.jsx)(n.code,{children:"undefined; _type?: KoliBriButtonType"})," | ",(0,d.jsx)(n.code,{children:"undefined; _value?: unknown; _variant?: KoliBriButtonVariant"})," | ",(0,d.jsx)(n.code,{children:"undefined; _customClass?: string"})," | ",(0,d.jsx)(n.code,{children:"undefined; }"})]}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"undefined"})})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"_step"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"_step"})}),(0,d.jsx)(n.td,{children:"Gibt die Schrittweite der Wertver\xe4nderung an"}),(0,d.jsxs)(n.td,{children:[(0,d.jsx)(n.code,{children:"number"})," | ",(0,d.jsx)(n.code,{children:"undefined"})]}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"undefined"})})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"_tabIndex"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"_tab-index"})}),(0,d.jsx)(n.td,{children:"Gibt an, welchen Tab-Index dieses Input hat."}),(0,d.jsxs)(n.td,{children:[(0,d.jsx)(n.code,{children:"number"})," | ",(0,d.jsx)(n.code,{children:"undefined"})]}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"undefined"})})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"_touched"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"_touched"})}),(0,d.jsxs)(n.td,{children:["Gibt an, ob dieses Eingabefeld von Nutzer",":innen"," einmal besucht/ber\xfchrt wurde."]}),(0,d.jsxs)(n.td,{children:[(0,d.jsx)(n.code,{children:"boolean"})," | ",(0,d.jsx)(n.code,{children:"undefined"})]}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"false"})})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"_type"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"_type"})}),(0,d.jsx)(n.td,{children:"Gibt den Typ des Eingabefeldes an."}),(0,d.jsxs)(n.td,{children:[(0,d.jsx)(n.code,{children:'"date"'})," | ",(0,d.jsx)(n.code,{children:'"datetime-local"'})," | ",(0,d.jsx)(n.code,{children:'"month"'})," | ",(0,d.jsx)(n.code,{children:'"time"'})," | ",(0,d.jsx)(n.code,{children:'"week"'})]}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"'date'"})})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"_value"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"_value"})}),(0,d.jsx)(n.td,{children:"Gibt den Wert des Eingabefeldes an."}),(0,d.jsxs)(n.td,{children:[(0,d.jsx)(n.code,{children:"Date"})," | ",(0,d.jsx)(n.code,{children:"${number}-${number}-${number}T${number}:${number}:${number}"})," | ",(0,d.jsx)(n.code,{children:"${number}-${number}-${number}T${number}:${number}"})," | ",(0,d.jsx)(n.code,{children:"${number}-${number}-${number}"})," | ",(0,d.jsx)(n.code,{children:"${number}-${number}"})," | ",(0,d.jsx)(n.code,{children:"${number}-W${number}"})," | ",(0,d.jsx)(n.code,{children:"${number}:${number}:${number}"})," | ",(0,d.jsx)(n.code,{children:"${number}:${number}"})," | ",(0,d.jsx)(n.code,{children:"null"})," | ",(0,d.jsx)(n.code,{children:"undefined"})]}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"undefined"})})]})]})]}),"\n",(0,d.jsx)(n.h2,{id:"slots",children:"Slots"}),"\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Slot"}),(0,d.jsx)(n.th,{children:"Description"})]})}),(0,d.jsx)(n.tbody,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{}),(0,d.jsx)(n.td,{children:"Die Beschriftung des Eingabefeldes."})]})})]}),"\n",(0,d.jsx)(n.h2,{id:"dependencies",children:"Dependencies"}),"\n",(0,d.jsx)(n.h3,{id:"depends-on",children:"Depends on"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.a,{href:"./input-number",children:"kol-input-number"})}),"\n"]}),"\n",(0,d.jsx)(n.h3,{id:"graph",children:"Graph"}),"\n",(0,d.jsx)(n.mermaid,{value:"graph TD;\n  kol-input-date --\x3e kol-input-number\n  kol-input-number --\x3e kol-input\n  kol-input --\x3e kol-icon\n  kol-input --\x3e kol-button-wc\n  kol-input --\x3e kol-alert\n  kol-button-wc --\x3e kol-span-wc\n  kol-button-wc --\x3e kol-tooltip\n  kol-span-wc --\x3e kol-icon\n  kol-tooltip --\x3e kol-span-wc\n  kol-alert --\x3e kol-alert-wc\n  kol-alert-wc --\x3e kol-heading-wc\n  kol-alert-wc --\x3e kol-button-wc\n  kol-alert-wc --\x3e kol-icon\n  style kol-input-date fill:#f9f,stroke:#333,stroke-width:4px"}),"\n",(0,d.jsx)(n.hr,{})]})}function t(e={}){const{wrapper:n}={...(0,s.M)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(r,{...e})}):r(e)}var l=i(37704),c=i(54592);const a={title:"InputDate",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die InputDate-Komponente.",tags:["InputDate","Beschreibung","Spezifikation","Beispiele"]},o=void 0,h={id:"components/input-date",title:"InputDate",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die InputDate-Komponente.",source:"@site/versioned_docs/version-1.5/30-components/input-date.mdx",sourceDirName:"30-components",slug:"/components/input-date",permalink:"/docs/1.5/components/input-date",draft:!1,unlisted:!1,tags:[{inline:!0,label:"InputDate",permalink:"/docs/1.5/tags/input-date"},{inline:!0,label:"Beschreibung",permalink:"/docs/1.5/tags/beschreibung"},{inline:!0,label:"Spezifikation",permalink:"/docs/1.5/tags/spezifikation"},{inline:!0,label:"Beispiele",permalink:"/docs/1.5/tags/beispiele"}],version:"1.5",frontMatter:{title:"InputDate",description:"Beschreibung, Spezifikation und Beispiele f\xfcr die InputDate-Komponente.",tags:["InputDate","Beschreibung","Spezifikation","Beispiele"]},sidebar:"tutorialSidebar",previous:{title:"InputColor",permalink:"/docs/1.5/components/input-color"},next:{title:"InputEmail",permalink:"/docs/1.5/components/input-email"}},u={},x=[{value:"Konstruktion",id:"konstruktion",level:2},{value:"Code",id:"code",level:3},{value:"Beispiel",id:"beispiel",level:3},{value:"Verwendung",id:"verwendung",level:2},{value:"Best practices",id:"best-practices",level:3},{value:"Barrierefreiheit",id:"barrierefreiheit",level:2},{value:"Tastatursteuerung",id:"tastatursteuerung",level:3},{value:"Links und Referenzen",id:"links-und-referenzen",level:2},{value:"Properties",id:"properties",level:2},{value:"Slots",id:"slots",level:2},{value:"Dependencies",id:"dependencies",level:2},{value:"Depends on",id:"depends-on",level:3},{value:"Graph",id:"graph",level:3},{value:"Live-Editor",id:"live-editor",level:2},{value:"Beispiele",id:"beispiele",level:2}];function j(e){const n={h2:"h2",...(0,s.M)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(t,{}),"\n",(0,d.jsx)(n.h2,{id:"live-editor",children:"Live-Editor"}),"\n",(0,d.jsx)(c.o,{component:"input-date"}),"\n",(0,d.jsx)(n.h2,{id:"beispiele",children:"Beispiele"}),"\n",(0,d.jsx)(l.Q,{component:"input-date",sample:"basic"})]})}function b(e={}){const{wrapper:n}={...(0,s.M)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(j,{...e})}):j(e)}},37704:(e,n,i)=>{i.d(n,{Q:()=>a});var d=i(33920),s=i(80924),r=i(76776);const t=function(e,n,i,d,s){return void 0===s&&(s="editor"),`${e}&module=${d}&initialpath=%23%2F${n}%2F${i}&view=${s}`},l={width:"100%",height:"500px",border:"0",overflow:"hidden"},c=e=>{let{url:n}=e;return(0,r.jsxs)("div",{className:"m-2",children:[(0,r.jsx)("iframe",{src:n,style:l,title:"kolibri-public-ui-code-samples",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}),(0,r.jsx)(d.GQ,{_href:n,_label:"",_target:"codesandbox",children:(0,r.jsx)("img",{alt:"CodeSandbox-Schalter",src:"https://codesandbox.io/static/img/play-codesandbox.svg"})})]})},a=e=>{let{component:n,sample:i}=e;const[a,o]=(0,s.useState)("Preview"),h="https://codesandbox.io/embed/kolibri-public-ui-react-samples-w5u37c?fontsize=14&hidenavigation=1&autoresize=1&theme=dark",u=`%2Fsrc%2Fsamples%2F${n}%2F${i}`,x={angular:`${u}.html`,react:`${u}.tsx`,vue:`${u}.vue`,webcomponent:`${u}.html`},j=`/sample-react/#/${n}/${i}?hideMenus`,b={onSelect:(e,n)=>{switch(n){case 1:o((()=>"Angular"));break;case 2:o((()=>"React"));break;case 3:o((()=>"Vue"));break;case 4:o((()=>"Web Component"));break;default:o((()=>"Preview"))}}};return(0,r.jsxs)(d._,{className:"w-full",_label:"Code-Beispiel",_on:b,_tabs:[{_label:"Vorschau"},{_disabled:!0,_label:"Angular"},{_label:"React"},{_disabled:!0,_label:"Vue"},{_disabled:!0,_label:"Web Component"}],children:[(0,r.jsx)("div",{children:"Preview"===a&&(0,r.jsx)("iframe",{src:j,style:l,title:"kolibri-public-ui-code-samples",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"})}),(0,r.jsx)("div",{children:"Angular"===a&&(0,r.jsx)(c,{url:t(h,n,i,x.angular)})}),(0,r.jsx)("div",{children:"React"===a&&(0,r.jsx)(c,{url:t(h,n,i,x.react)})}),(0,r.jsx)("div",{children:"Vue"===a&&(0,r.jsx)(c,{url:t(h,n,i,x.vue)})}),(0,r.jsx)("div",{children:"Web Component"===a&&(0,r.jsx)(c,{url:t(h,n,i,x.webcomponent)})})]})}},54592:(e,n,i)=>{i.d(n,{o:()=>k});var d=i(52266),s=i(33920),r=i(80924),t=i(73700),l=i(76776);function c(e){const{label:n,name:i,update:d,value:t}=e;return(0,r.useEffect)((()=>{t||d(i,"#000000")}),[]),(0,l.jsx)(s.eK,{_label:"",_on:{onInput:(e,n)=>d(i,n)},_value:t,children:(0,l.jsx)("span",{slot:"expert",children:n})})}function a(e){const{attribute:n,label:i,update:d}=e,[t,c]=(0,r.useState)(""),[a,o]=(0,r.useState)(""),[h,u]=(0,r.useState)(""),[x,j]=(0,r.useState)("");let b=!1,m=!1,p=!1,f=!1;n.type.includes("KoliBriAllIcon")?(b=!0,m=!0,p=!0,f=!0):(n.type.includes("KoliBriVerticalIcon")&&(p=!0,f=!0),n.type.includes("KoliBriHorizontalIcon")&&(b=!0,m=!0)),(0,r.useEffect)((()=>{if(!t||a||h||x){const e={};t&&(e.left=`codicon codicon-${t}`),a&&(e.right=`codicon codicon-${a}`),h&&(e.top=`codicon codicon-${h}`),x&&(e.bottom=`codicon codicon-${x}`),Object.keys(e).length&&d(n.name,JSON.stringify(e))}else d(n.name,`codicon codicon-${t}`)}),[t,a,h,x]);const g=["home","arrow-up","arrow-right","arrow-down","arrow-left"];return(0,l.jsxs)("div",{children:[i,b?(0,l.jsx)(s.Si,{_label:"Links",children:(0,l.jsx)("div",{className:"flex flex-wrap gap-2 p-2",children:g.map((e=>(0,l.jsx)(s.qC,{_icons:`codicon codicon-${e}`,_hideLabel:!0,_label:"",_on:{onClick:()=>c(e)}},e)))})}):"",m?(0,l.jsx)(s.Si,{_label:"Rechts",children:(0,l.jsx)("div",{className:"flex flex-wrap gap-2 p-2",children:g.map((e=>(0,l.jsx)(s.qC,{_icons:`codicon codicon-${e}`,_hideLabel:!0,_label:"",_on:{onClick:()=>o(e)}},e)))})}):"",p?(0,l.jsx)(s.Si,{_label:"Oben",children:(0,l.jsx)("div",{className:"flex flex-wrap gap-2 p-2",children:g.map((e=>(0,l.jsx)(s.qC,{_icons:`codicon codicon-${e}`,_hideLabel:!0,_label:"",_on:{onClick:()=>u(e)}},e)))})}):"",f?(0,l.jsx)(s.Si,{_label:"Unten",children:(0,l.jsx)("div",{className:"flex flex-wrap gap-2 p-2",children:g.map((e=>(0,l.jsx)(s.qC,{_icons:`codicon codicon-${e}`,_hideLabel:!0,_label:"",_on:{onClick:()=>j(e)}},e)))})}):""]})}function o(e){const{name:n,label:i,types:d,update:r,value:t}=e,c=[];function a(e){return{label:e,value:e}}return d.includes("undefined")?(c.push({label:"-",value:void 0}),c.push(...d.filter((e=>"undefined"!==e)).map(a))):c.push(...d.filter((e=>"undefined"!==e)).map(a)),(0,l.jsx)(s.qy,{className:"my-2",_label:"",_options:JSON.stringify(c),_on:{onInput:(e,i)=>r(n,i[0])},_value:t?[t]:void 0,children:(0,l.jsx)("span",{slot:"expert",children:i})})}function h(e){const{attribute:n,update:i,value:d}=e,t=(0,r.useMemo)((()=>{let e=n.type.replace(/\\?"/g,"").split(" | ");return e=e.filter((e=>"KoliBriAllIcon ignorieren"!==e)),1===e.length?e[0]:e.includes("string")?"string":e.includes("number")?"number":e.includes("boolean")?"boolean":""}),[n]),h=(0,r.useMemo)((()=>{const e=n.type.split(" | ").map((e=>e.replace(/\\?"/g,""))),r=(0,l.jsx)(s.s1,{_label:n.description,children:n.name});switch(n.name){case"_color":return(0,l.jsx)(c,{name:n.name,label:r,update:i,value:d});case"_icons":return(0,l.jsx)(a,{attribute:n,label:r,update:i,value:d});default:switch(t){case"string":return(0,l.jsx)(s.Uh,{className:"my-2",_label:"",_on:{onInput:(e,d)=>i(n.name,d)},_value:d||"",children:(0,l.jsx)("span",{slot:"expert",children:r})});case"number":return(0,l.jsx)(s.QL,{className:"my-2",_label:"",_on:{onInput:(e,d)=>i(n.name,d)},_value:d,children:(0,l.jsx)("span",{slot:"expert",children:r})});case"boolean":return(0,l.jsx)(s.Q7,{className:"my-2",_checked:!0===d,_label:"",_on:{onInput:(e,d)=>i(n.name,d)},_variant:"switch",_value:!0,children:(0,l.jsx)("span",{slot:"expert",children:r})});default:return e.length>1?(0,l.jsx)(o,{label:r,name:n.name,types:e,update:i,value:d}):(0,l.jsxs)("p",{children:["Attribut: '",n.name,"'",(0,l.jsx)("br",{}),"Typ: '",n.type,"'"]})}}}),[n,d]);return(0,l.jsx)(l.Fragment,{children:h})}var u=i(63136),x=i(28256),j=i(39452),b=i.n(j);function m(e){const{tag:n,params:i}=e,d=Object.entries(i).filter((e=>"defaultValues"!==e[0]));let s="";const t=(0,r.useMemo)((()=>{let e="";return d.filter((e=>e[0].startsWith("slot-"))).forEach((n=>{const i=n[1],d=n[0].split("-")[1];if(i)if(i.match(/^<.*?>/)?.length){const n=i.indexOf(">");e+=i.substring(0,n)+` slot="${d}"`+i.substring(n)}else e+=`<div slot="${d}">${i}</div>`})),e}),[i]),c=d.filter((e=>!e[0].startsWith("slot-"))).filter((e=>!i.defaultValues.includes(e[0])));for(const[r,l]of c)if(l){let e="";switch(typeof l){case"string":e=` ${r}="${l.replace(/"/g,"'")}"`;break;case"number":e=` ${r}="${l.toString()}"`;break;case"boolean":e=l?` ${r}`:"";break;case"object":e=` ${r}="${JSON.stringify(l)}"`;break;default:e="Never give up hope, one day everything will be fixed."}s+=e}const a=`<kol-${n}${s}>${t}</kol-${n}>`;let o;try{o=(0,x.format)(a,{plugins:[b()],printWidth:80}).replace(/;\n$/,"")}catch(h){o=`\x3c!-- Formatter-Error: Slot-Markup is not valid HTML for formatting. --\x3e\n${a}`}return(0,l.jsx)("div",{className:"h-48 rounded-md overflow-hidden",children:(0,l.jsx)(u.cp,{defaultLanguage:"html",height:"100%",options:{automaticLayout:!0,fontSize:16,lineNumbers:"off",readOnly:!0},value:o})})}function p(e){const n=Object.fromEntries(Object.entries(e.params).filter((e=>{let[n]=e;return!n.startsWith("slot-")}))),i=Object.entries(e.params).filter((e=>{let[n]=e;return n.startsWith("slot-")})),d={abbr:s.s1,accordion:s.IP,alert:s.mW,avatar:s.aq,badge:s.cX,breadcrumb:s.If,button:s.qC,"button-group":s.Os,"button-link":s.u_,card:s.Yh,details:s.Si,form:s.OO,heading:s.ch,icon:s.SA,image:s.iu,"indented-text":s.MV,"input-checkbox":s.Q7,"input-color":s.eK,"input-date":s.QZ,"input-email":s.kN,"input-file":s.Ex,"input-number":s.QL,"input-password":s.EH,"input-radio":s.wJ,"input-range":s.Ef,"input-text":s.Uh,kolibri:s.aY,link:s.GQ,"link-button":s._k,"link-group":s.O_,logo:s.ae,modal:s.cT,nav:s.Y4,pagination:s.kj,progress:s.O0,quote:s.SY,select:s.qy,"skip-nav":s.Ig,spin:s.kP,"split-button":s.a,symbol:s.OM,table:s.Y9,tabs:s._,textarea:s.DG,version:s.k1}[e.tag];return d?(0,l.jsx)(d,{...n,children:i.map((e=>(0,l.jsx)("div",{slot:e[0].replace("slot-","").replace("default",""),dangerouslySetInnerHTML:{__html:e[1]}},e[0])))}):(0,l.jsx)("div",{children:"Tag not implemented"})}function f(e){const{description:n,name:i,update:d,value:s}=e;return(0,l.jsxs)("div",{className:"bg-gray-100 my-2 rounded-lg p-2 border border-gray-300 border-solid",children:[(0,l.jsx)("b",{children:i||"default"}),": ",n,(0,l.jsx)("br",{}),(0,l.jsx)(u.GW,{defaultLanguage:"html",height:"5em",onChange:e=>d(`slot-${i}`,e||""),options:{automaticLayout:!0,fontSize:16,lineNumbers:"off"},value:s})]})}const g=["_smart-button","_icon-align"],_={abbr:{"slot-default":"Abbr"},accordion:{"slot-default":"Accordion content"},tabs:{_tabs:'[{"_label":"Tab 1"},{"_label":"Tab 2", "_on": {"onClose": true} },{"_label":"Tab 3"}]'},breadcrumb:{_links:"[{'_label':'Startseite','_href':'#/'},{'_label':'Unterseite der Startseite','_href':'#/unterseite'},{'_label':'Unterseite der Unterseite','_href':'#/unterseite/unterseite'}]"},form:{"_required-text":"Bitte alle Felder ausf\xfcllen."},image:{_src:"https://placehold.co/100x100/cc006e/white"},"link-group":{_links:"[{'_label':'Startseite','_href':'#/'},{'_label':'Unterseite der Startseite','_href':'#/unterseite'},{'_label':'Unterseite der Unterseite','_href':'#/unterseite/unterseite'}]"},nav:{_links:"[{'_label':'Startseite','_href':'#/'},{'_label':'Unterseite der Startseite','_href':'#/unterseite'},{'_label':'Unterseite der Unterseite','_href':'#/unterseite/unterseite'}]"},pagination:{_total:"100",_page:"6"},quote:{_quote:"Hello World"},select:{_options:"[{'label':'Herr','value':0},{'label':'Frau','value':1}]"},"skip-nav":{_links:"[{'_label':'Navigation','_href':'#nav'},{'_label':'Inhalt','_href':'#main'},{'_label':'Kontakt','_href':'#kontakt'},{'_label':'Links','_href':'#links'}]"},table:{_headers:'{"horizontal":[[{"label":"Montag","key":"montag"}]]}',_data:'[{"montag":"Zelle1"},{"montag":"Zelle2"}]',_pagination:'{"page":2}'}};function k(e){const[n,i]=(0,r.useState)(function(){const e={};return Object.values(d.Q).forEach((n=>{const i=n.name.replace("kol-","");e[i]={defaultValues:[]},n.attributes.forEach((n=>{void 0!==n.defaultValue&&(e[i][n.name]=n.defaultValue.replace(/'/g,""),e[i].defaultValues.push(n.name)),void 0!==_[i]?.[n.name]&&(e[i][n.name]=_[i][n.name])})),n.slots.forEach((n=>{const d=`slot-${n.name||"default"}`,s=_[i]?.[d];s&&(e[i][d]=s)}))})),e}()),[c,a]=(0,r.useState)("badge");(0,r.useEffect)((()=>{e.component&&a(e.component.replace("kol-",""))}),[e.component]),(0,r.useEffect)((()=>{!!d.Q.find((e=>e.name===`kol-${c}`))?.attributes.find((e=>"_label"===e.name))&&!n[c]?._label&&u("_label","Label-Text");!!d.Q.find((e=>e.name===`kol-${c}`))?.attributes.find((e=>"_heading"===e.name))&&!n[c]?._heading&&u("_heading","Heading-Text")}),[c]);const o=(0,r.useMemo)((()=>n[c]||{}),[n,c]);function u(e,n){i((i=>{const d={...i[c],[e]:n,defaultValues:i[c].defaultValues.filter((n=>n!==e))};return{...i,[c]:d}}))}const x=Object.values(d.Q).find((e=>e.name===`kol-${c}`));return(0,l.jsx)(t.c,{children:()=>(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(s.cX,{class:"mb-2",_label:"Beta",_color:"#b00"}),(0,l.jsxs)("div",{className:"grid lg:grid-cols-3 gap-2",children:[(0,l.jsxs)(s._,{className:"col-span-2",_label:"Wechselnavigation zwischen Viewer und Code",_tabs:[{_label:"Viewer"},{_label:"Code"}],children:[(0,l.jsx)("div",{className:"p-2",children:(0,l.jsx)(p,{tag:c,params:o})}),(0,l.jsx)("div",{className:"lg:col-span-2",children:(0,l.jsx)(m,{params:o,tag:c})})]}),(0,l.jsxs)("div",{className:"grid gap-4 p-2 border-0 border-l border-solid",children:[(0,l.jsx)(s.ch,{_level:3,_label:"Konfigurator"}),(0,l.jsxs)("div",{children:[(0,l.jsx)(s.ch,{_level:4,_label:"Properties"}),(0,l.jsxs)("div",{className:"max-h-96 p-2 overflow-auto mb-4",children:[x&&x.attributes.map((e=>(0,l.jsx)(l.Fragment,{children:!g.includes(e.name)&&!e.description.startsWith("Deprecated:")&&(0,l.jsx)(h,{attribute:e,update:u,value:o[e.name]},e.name)}))),x&&0===x.attributes.length&&(0,l.jsx)("span",{className:"text-gray-500",children:"Keine Properties vorhanden"})]}),(0,l.jsx)(s.ch,{_level:4,_label:"Slots"}),(0,l.jsxs)("div",{className:"max-h-56 p-2 overflow-auto",children:[x&&x.slots.map((e=>(0,l.jsx)(f,{description:e.description,name:e.name||"default",update:u,value:o["slot-"+(e.name||"default")]},e.name))),x&&0===x.slots.length&&(0,l.jsx)("span",{className:"text-gray-500",children:"Keine Slots vorhanden"})]})]})]})]})]})})}}}]);