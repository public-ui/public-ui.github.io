(self.webpackChunk_public_ui_storybook=self.webpackChunk_public_ui_storybook||[]).push([[2954],{"./src/components/mermaid.tsx":(s,l,o)=>{"use strict";o.d(l,{G:()=>n,m:()=>e});var t=o("./node_modules/react/index.js"),i=o("./node_modules/mermaid/dist/mermaid.core.mjs");let r;const e=a=>{a&&i.Z.initialize(Object.assign({startOnLoad:!0},a)),clearTimeout(r),r=setTimeout(()=>{clearTimeout(r),i.Z.contentLoaded()},500)},n=({code:a,config:d,children:u})=>((0,t.useEffect)(()=>{e(d)},[]),t.createElement("div",null,t.createElement("div",{className:"mermaid"},a)));try{e.displayName="mermaidLoadContent",e.__docgenInfo={description:"",displayName:"mermaidLoadContent",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/mermaid.tsx#mermaidLoadContent"]={docgenInfo:e.__docgenInfo,name:"mermaidLoadContent",path:"src/components/mermaid.tsx#mermaidLoadContent"})}catch(a){}try{n.displayName="Mermaid",n.__docgenInfo={description:"",displayName:"Mermaid",props:{code:{defaultValue:null,description:"",name:"code",required:!0,type:{name:"string"}},config:{defaultValue:null,description:"",name:"config",required:!1,type:{name:"any"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/mermaid.tsx#Mermaid"]={docgenInfo:n.__docgenInfo,name:"Mermaid",path:"src/components/mermaid.tsx#Mermaid"})}catch(a){}},"./node_modules/moment-mini/locale sync recursive ^\\.\\/.*$":(s,l,o)=>{var t={"./locale":"./node_modules/moment-mini/locale/locale.js","./locale.js":"./node_modules/moment-mini/locale/locale.js"};function i(e){var n=r(e);return o(n)}function r(e){if(!o.o(t,e)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return t[e]}i.keys=function(){return Object.keys(t)},i.resolve=r,s.exports=i,i.id="./node_modules/moment-mini/locale sync recursive ^\\.\\/.*$"},"./src/components/button/0-description/autogen.readme.md":s=>{"use strict";s.exports=`# Button

**Buttons** dienen dazu, Benutzer:innen Auswahlm\xF6glichkeiten f\xFCr Aktionen anzuzeigen und diese in einer klaren Hierarchie anzuordnen. Sie helfen Nutzer:innen, die wichtigsten Aktionen einer Seite oder innerhalb eines Viewports zu finden und erm\xF6glichen es ihm, diese Aktionen auszuf\xFChren. Die Beschriftung des Buttons wird verwendet, um Nutzer:innen klar anzuzeigen, welche Aktion ausgel\xF6st wird. Buttons erm\xF6glichen es Nutzer:innen, eine \xC4nderung zu best\xE4tigen, Schritte in einer Aufgabe abzuschlie\xDFen oder Entscheidungen zu treffen.

## Konstruktion

### Code

> Um das Zusammenspiel von Komponenten (HTML) und Kontroller (TypeScript) gemeinsam darzustellen, wurden alle Code-Beispiele auf dieser Seite mit den Web Components im TSX geschrieben.

\`\`\`tsx
<kol-button _label="Primary" _variant="primary"></kol-button>
<kol-button _label="Secondary" _variant="secondary"></kol-button>
<kol-button _label="Normal" _variant="normal"></kol-button>
<kol-button _label="Secondary" _variant="danger"></kol-button>
<kol-button _label="Ghost" _variant="ghost"></kol-button>
<kol-button _label="Custom" _variant="custom" _custom-class="myClass"></kol-button>
\`\`\`

### Beispiel

Default

<div class="flex gap-2">
  <kol-button _label="Primary" _variant="primary"></kol-button>
  <kol-button _label="Secondary" _variant="secondary"></kol-button>
  <kol-button _label="Normal" _variant="normal"></kol-button>
  <kol-button _label="Danger" _variant="danger"></kol-button>
  <kol-button _label="Ghost" _variant="ghost"></kol-button>
  <kol-button _label="Custom" _variant="custom" _custom-class="myClass"></kol-button>
</div>

Disabled

<div class="flex gap-2">
  <kol-button _label="Primary" _variant="primary" _disabled></kol-button>
  <kol-button _label="Secondary" _variant="secondary" _disabled></kol-button>
  <kol-button _label="Normal" _variant="normal" _disabled></kol-button>
  <kol-button _label="Danger" _variant="danger" _disabled></kol-button>
  <kol-button _label="Ghost" _variant="ghost" _disabled></kol-button>
  <kol-button _label="Custom" _variant="custom" _custom-class="myClass" _disabled></kol-button>
</div>

## Verwendung

### Beschriftung

F\xFCr die eindeutige Beschriftung des Buttons nutzen Sie das Attribut **\`_label\`**.
\`_label="Buttonbeschriftung"\`

### Button mit Icon

\xDCber das Attribut **\`_icon\`** wird eine JSON-Struktur \xFCbergeben, mit der alle Paramater zu Anzeige des Icon im Button festgelegt wird.

\`\`\`tsx
_icon =
	"{'top': {'style': {'font-size': '200%', 'transform': 'rotate(45deg)'}, 'icon': 'fa-solid fa-arrow-up'},'right': {'icon': 'fa-solid fa-arrow-right'},'bottom': {'icon': 'fa-solid fa-arrow-down'},'left': {'icon': 'fa-solid fa-arrow-left'}}";
\`\`\`

Es ist m\xF6glich, ein Icon an jeder Position des Button anzuzeigen, sowie die Ausgabe mehrerer Icons im Button. Jedes Icon erh\xE4lt in der JSON-Struktur einen eigenen Abschnitt, in dem seine Properties festgelegt werden.

Jeder Abschnitt beginnt mit der gew\xFCnschten Position des Icon im Button:

- top
- bottom
- right
- left

\`\`\`tsx
"{'top': {weitere Properties}";
\`\`\`

Als weitere Properties zur Konfiguration des Icon stehen zur Verf\xFCgung:

- icon: legt das anzuzeigende Icon aus der Icofont-Bibliothek fest.

\`\`\`tsx
"{'top': {'icon':'fa-solid fa-arrow-up'}";
\`\`\`

- style: \xFCbergibt ggfls. eigene CSS-Stylinganweisungen an das Icon, wie z.B. font-size, transform oder color.

\`\`\`tsx
"{'top': {'style': {'font-size':'200%','color':'#040404','transform':'rotate(45deg)'},'icon':'fa-solid fa-arrow-up'}";
\`\`\`

Eine \xDCbersicht \xFCber die zur Verf\xFCgung stehenden Icons in KoliBri finden Sie [hier](https://icofont.com/icons)

### Nur Icon im Button anzeigen

In der **Button**-Komponente kann auf die Beschriftung auch verzichtet werden. Hierzu wird das Attribut **\`_iconOnly\`** gesetzt.

Beachten Sie, dass das Attribut **\`_label\`** auch dann gesetzt werden muss, wenn nur ein Icon angezeigt werden soll. Die Komponente gibt in diesem Fall drei Punkte (...) als Platzhalter aus.

\`_icon-only="true"\`

### Style angeben

Die Button-Komponente kann als prim\xE4rer oder sekund\xE4rer Button ausgegeben werden. Zur Steuerung verwenden Sie das Attribut \`_variant="primary/secondary/normal/danger/ghost/custom"\`. Als Default-Wert wird ein Button als **primary** gerendert.<br/>

Bei Verwendung des Attribut **\\_variant="custom"** kann der Entwickler f\xFCr den Button eigene Styles realisieren. Verpflichtend ist in diesem Fall das Setzen des Attribut **\\_custom-class**, damit das Button-Element im Shadow-Dom mittels CSS selektiert werden kann.

### Best practices

- Verwenden Sie eine prim\xE4re Schaltfl\xE4che f\xFCr die n\xE4chstbeste Aktion. Verbleibende Calls-to-Action sollten als sekund\xE4re Schaltfl\xE4che dargestellt werden.
- Verwenden Sie Schaltfl\xE4chen an einheitlichen Stellen in der Benutzeroberfl\xE4che, um die Benutzererfahrung zu verbessern.
- Verwenden Sie nur eine prim\xE4re Schaltfl\xE4che je Viewport. Auf der gesamten Seite kann ein Button-Style beliebig oft auftreten.
- Die Beschriftung des Button muss die Aktion beschreiben, die die Schaltfl\xE4che ausf\xFChrt. Sie sollte ein Verb enthalten (z.B. Speichern). Verwenden Sie pr\xE4gnante, spezifische, selbsterkl\xE4rende Beschriftungen.
- Schaltfl\xE4chenbeschriftungen sollten immer dann auch ein Nomen enthalten, wenn es Raum f\xFCr Interpretationen dar\xFCber gibt, wof\xFCr das Verb zust\xE4ndig ist. Verwenden Sie keine generischen Bezeichnungen wie "OK", insbesondere nicht im Fehlerfall. Fehler sind nie "OK".
- Wenn Sie mehrere Buttons kombinieren oder anordnen m\xF6chten, verwenden Sie die **ButtonGroup**-Komponente.
- Verwenden Sie nicht mehrere Buttons im Style "prim\xE4r" in einer **ButtonGroup**.
- Verwenden Sie Buttons nicht als Link oder als Navigationselement.

## Barrierefreiheit

> Die optische Standardausgabe der Komponente ist auf die Umsetzung der Barrierefreiheit hin optimiert. Wenn Sie eigene Custom Styles verwenden, kann das zu einer Einschr\xE4nkung der Barrierefreiheit f\xFChren.

F\xFCr Menschen mit einem eingeschr\xE4nkten Sichtfeld ist die Positionierung des **Icons** im Button links von der Beschriftung optimal (**\`_icon-align="left"\`**, bzw. kein **\`_icon-align\`**).

Ebenfalls aus Gr\xFCnden optimaler Barrierefreiheit verzichtet KoliBri bei der **Button**-Komponente auf den Status **disabled**.

Probleme mit Disabled-Status

- Darstellung Kontraste
- M\xF6glichkeit des Nutzerfeedbacks

### Tastatursteuerung

| Taste   | Funktion                                                                       |
| ------- | ------------------------------------------------------------------------------ |
| \`Tab\`   | Springt den einzelnen Button an und fokussiert ihn.                            |
| \`Enter\` | \xD6ffnet den Link des fokussierten Button oder f\xFChrt dessen onClick-Methode aus. |

## Links und Referenzen

- https://www.w3.org/TR/wai-aria-practices/#button

<!-- Auto Generated Below -->


## Eigenschaften

| Property              | Attribute        | Description                                                                                                                                        | Type                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | Default     |
| --------------------- | ---------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| \`_accessKey\`          | \`_access-key\`    | Gibt an, mit welcher Tastenkombination man den Button ausl\xF6sen oder fokussieren kann.                                                              | \`string | undefined\`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | \`undefined\` |
| \`_ariaControls\`       | \`_aria-controls\` | Gibt an, welche Elemente kontrolliert werden.  (https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-controls)          | \`string | undefined\`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | \`undefined\` |
| \`_ariaCurrent\`        | \`_aria-current\`  | Gibt an, welchen aktuellen Auswahlstatus der Button hat. (https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-current) | \`"date" | "location" | "page" | "step" | "time" | boolean | undefined\`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | \`undefined\` |
| \`_ariaExpanded\`       | \`_aria-expanded\` | Gibt an, ob durch den Button etwas aufgeklappt wurde. (https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-expanded)   | \`boolean | undefined\`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | \`undefined\` |
| \`_ariaLabel\`          | \`_aria-label\`    | Gibt einen beschreibenden Text des Buttons an.  (https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-label)            | \`string | undefined\`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | \`''\`        |
| \`_ariaSelected\`       | \`_aria-selected\` | Gibt an, ob Element ausgew\xE4hlt ist (role=tab). (https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-selected)          | \`boolean | undefined\`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | \`undefined\` |
| \`_customClass\`        | \`_custom-class\`  | Gibt an, welche Custom-Class \xFCbergeben werden soll, wenn _variant="custom" gesetzt ist.                                                            | \`string | undefined\`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | \`undefined\` |
| \`_disabled\`           | \`_disabled\`      | Gibt an, ob der Button deaktiviert ist.                                                                                                            | \`boolean | undefined\`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | \`false\`     |
| \`_icon\`               | \`_icon\`          | Gibt den Class-Identifier eines Icons eine eingebunden Icofont an. (z.B. https://icofont.com/)                                                     | \`string | undefined | { top: string | KoliBriCustomIcon; right?: string | KoliBriCustomIcon | undefined; bottom?: string | KoliBriCustomIcon | undefined; left?: string | KoliBriCustomIcon | undefined; } | { top?: string | KoliBriCustomIcon | undefined; right: string | KoliBriCustomIcon; bottom?: string | KoliBriCustomIcon | undefined; left?: string | KoliBriCustomIcon | undefined; } | { top?: string | KoliBriCustomIcon | undefined; right?: string | KoliBriCustomIcon | undefined; bottom: string | KoliBriCustomIcon; left?: string | KoliBriCustomIcon | undefined; } | { top?: string | KoliBriCustomIcon | undefined; right?: string | KoliBriCustomIcon | undefined; bottom?: string | KoliBriCustomIcon | undefined; left: string | KoliBriCustomIcon; }\` | \`undefined\` |
| \`_iconAlign\`          | \`_icon-align\`    | <span class="text-red-500">**[DEPRECATED]**</span> <br/><br/>Gibt an, ob das Icon links oder rechts dargestellt werden soll.                          | \`"left" | "right" | undefined\`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | \`'left'\`    |
| \`_iconOnly\`           | \`_icon-only\`     | Gibt an, ob nur das Icon angezeigt wird.                                                                                                           | \`boolean | undefined\`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | \`false\`     |
| \`_id\`                 | \`_id\`            | Gibt die ID der Schaltfl\xE4che an. (Selection, Testing)                                                                                              | \`string | undefined\`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | \`undefined\` |
| \`_label\` _(required)_ | \`_label\`         | Gibt den Label f\xFCr die Beschriftung der Schaltfl\xE4che an.                                                                                           | \`string\`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | \`undefined\` |
| \`_on\`                 | --               | Gibt die EventCallback-Funktionen f\xFCr die Button-Events an.                                                                                        | \`undefined | { onClick?: EventValueCallback<MouseEvent, unknown> | undefined; onMouseDown?: EventCallback<MouseEvent> | undefined; }\`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | \`undefined\` |
| \`_role\`               | \`_role\`          | Gibt an, welche Role der Schalter hat.                                                                                                             | \`"tab" | undefined\`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | \`undefined\` |
| \`_tabIndex\`           | \`_tab-index\`     | Gibt an, welchen Tab-Index der Button hat. (https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex)                          | \`number | undefined\`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | \`undefined\` |
| \`_tooltipAlign\`       | \`_tooltip-align\` | Gibt an, ob der Tooltip oben, rechts, unten oder links angezeigt werden soll.                                                                      | \`"bottom" | "left" | "right" | "top" | undefined\`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | \`'top'\`     |
| \`_type\`               | \`_type\`          | Gibt an, welche Typ der Button hat.                                                                                                                | \`"button" | "reset" | "submit" | undefined\`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | \`'button'\`  |
| \`_value\`              | --               | Gibt einen Wert an, den der Schalter bei einem Klick zur\xFCckgibt.                                                                                   | \`unknown\`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | \`undefined\` |
| \`_variant\`            | \`_variant\`       | Gibt an, welche Auspr\xE4gung der Button hat.                                                                                                         | \`"custom" | "danger" | "ghost" | "normal" | "primary" | "secondary" | undefined\`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | \`'normal'\`  |


## Abh\xE4ngigkeiten

### Verwendet von

 - kol-nav
 - kol-pagination
 - kol-table

### Abh\xE4ngig von

- kol-button-wc

### Graph
<div class="mermaid">
graph TD;
  kol-button --> kol-button-wc
  kol-button-wc --> kol-span-wc
  kol-button-wc --> kol-tooltip
  kol-span-wc --> kol-icon
  kol-tooltip --> kol-badge
  kol-badge --> kol-span-wc
  kol-badge --> kol-button-wc
  kol-nav --> kol-button
  kol-pagination --> kol-button
  kol-table --> kol-button
  style kol-button fill:#f9f,stroke:#333,stroke-width:4px
</div>

----------------------------------------------


`}}]);
