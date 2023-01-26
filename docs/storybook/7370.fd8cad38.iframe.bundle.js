(self.webpackChunk_public_ui_storybook=self.webpackChunk_public_ui_storybook||[]).push([[7370],{"./src/components/mermaid.tsx":(s,d,o)=>{"use strict";o.d(d,{G:()=>n,m:()=>e});var i=o("./node_modules/react/index.js"),t=o("./node_modules/mermaid/dist/mermaid.core.mjs");let r;const e=l=>{l&&t.Z.initialize(Object.assign({startOnLoad:!0},l)),clearTimeout(r),r=setTimeout(()=>{clearTimeout(r),t.Z.contentLoaded()},500)},n=({code:l,config:a,children:c})=>((0,i.useEffect)(()=>{e(a)},[]),i.createElement("div",null,i.createElement("div",{className:"mermaid"},l)));try{e.displayName="mermaidLoadContent",e.__docgenInfo={description:"",displayName:"mermaidLoadContent",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/mermaid.tsx#mermaidLoadContent"]={docgenInfo:e.__docgenInfo,name:"mermaidLoadContent",path:"src/components/mermaid.tsx#mermaidLoadContent"})}catch(l){}try{n.displayName="Mermaid",n.__docgenInfo={description:"",displayName:"Mermaid",props:{code:{defaultValue:null,description:"",name:"code",required:!0,type:{name:"string"}},config:{defaultValue:null,description:"",name:"config",required:!1,type:{name:"any"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/mermaid.tsx#Mermaid"]={docgenInfo:n.__docgenInfo,name:"Mermaid",path:"src/components/mermaid.tsx#Mermaid"})}catch(l){}},"./node_modules/moment-mini/locale sync recursive ^\\.\\/.*$":(s,d,o)=>{var i={"./locale":"./node_modules/moment-mini/locale/locale.js","./locale.js":"./node_modules/moment-mini/locale/locale.js"};function t(e){var n=r(e);return o(n)}function r(e){if(!o.o(i,e)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return i[e]}t.keys=function(){return Object.keys(i)},t.resolve=r,s.exports=t,t.id="./node_modules/moment-mini/locale sync recursive ^\\.\\/.*$"},"./src/components/link/0-description/autogen.readme.md":s=>{"use strict";s.exports=`# Link

Die **Link**-Komponente rendert einen auf Barrierefreiheit optimierten Link, der als Text, als Icon oder auch in Kombination ausgegeben werden kann.
M\xF6glich ist auch die Ausgabe eines versteckten Links.

Der Link wird standardm\xE4\xDFig in klassischer Form mit Unterstrich ausgegeben, der jedoch \xFCber ein Attribut auch ohne CSS entfernt werden kann. Weitere Informationen zu Custom Styles finden Sie weiter unten.

Beachten Sie, dass die Komponente automatisch ein Padding links und rechts zum umgebenden Text erzeugt. Sie kann daher im Flie\xDFtext ohne
Eingabe von Leerzeichen eingef\xFCgt werden. Zus\xE4tzliche Leerzeichen vergr\xF6\xDFern den Abstand zum umgebenden Text.

## Konstruktion

### Code

> Um das Zusammenspiel von Komponenten (HTML) und Kontroller (TypeScript) gemeinsam darzustellen, wurden alle Code-Beispiele auf dieser Seite mit den Web Components im TSX geschrieben.

\`\`\`tsx
<kol-link _href="https://www.w3.org" _target="_self" _underline="false">
	Hier steht ein Link
</kol-link>
\`\`\`

### Beispiel

<p>
   In diesem Absatz wird ein Link gesetzt, der keine weiteren Attribute enth\xE4lt.
  <kol-link _href="https://www.w3.org">Hier steht ein Link</kol-link> Er wird standardm\xE4\xDFig als <i>
    <b>inline-Element</b>
    </i> ausgegeben.
</p>

## Verwendung

### Link innerhalb eines Flie\xDFtextes, mit unterschiedlichen **\\_display**-Werten

 <p>
    In diesem Absatz wird ein Link gesetzt, der einmal als inline-block-Element ausgegeben wird.
    <kol-link _display="inline-block">
      Ich bin ein Link als <b>inline-block-Element</b>
    </kol-link>, damit kann man mir per CSS-Styles eine Breite, eine H\xF6he und andere Eigenschaften zuweisen.
    Danach folgt ein Link, der als block-Element ausgegeben wird.
  <kol-link _display="block">
      Ich bin ein Link als <b>block-Element</b>
    </kol-link>,
    daher gehe ich \xFCber die ganze Breite des Eltern-Elements erzeuge so einen Zeilenumbruch.
</p>

### Link innerhalb eines Flie\xDFtextes mit Icon und Text

  <p>
    <kol-link _icon="home">Ich bin ein Link mit Icon links</kol-link><br/>
    <kol-link _icon="home" _icon-align="right">
      Ich bin ein Link mit Icon rechts
    </kol-link>
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea optio deleniti fuga quos molestias, voluptate nobis
    nemo, incidunt excepturi facilis, amet ducimus minus quae corporis eligendi cum distinctio. Fugit, repellendus.
    <kol-link _icon="home">Ich bin ein Link mit Icon links</kol-link>. Lorem, ipsum dolor sit amet consectetur adipisicing
    elit. Ea optio deleniti fuga quos molestias, voluptate nobis nemo, incidunt excepturi <kol-link
      _icon="home"
      _icon-align="right"
    >
      Ich bin ein Link mit Icon rechts
    </kol-link>
    facilis, amet ducimus minus quae corporis eligendi cum distinctio. Fugit, repellendus.

  </p>

### Link mit und ohne Unterstrich

  <p>
    <kol-link _icon="home">Ich bin ein Link in Standardausgabe mit Unterstrich</kol-link><br/>
    <kol-link _icon="home" _underline="false">
      Ich bin ein Link in Standardausgabe ohne Unterstrich
    </kol-link>

  </p>

<!--### Best practices

### Anwendungsf\xE4lle-->

## Barrierefreiheit

> Die optische Standardausgabe der Komponente ist auf die Umsetzung der Barrierefreiheit hin optimiert. Wenn Sie eigene Custom Styles verwenden, kann das zu einer Einschr\xE4nkung der Barrierefreiheit f\xFChren.

### Tastatursteuerung

| Taste   | Funktion                        |
| ------- | ------------------------------- |
| \`Tab\`   | Fokussiert das Link-Element.    |
| \`Enter\` | Ruft den hinterlegten Link auf. |

<!--## Links und Referenzen

<!-- Auto Generated Below -->


## Eigenschaften

| Property              | Attribute             | Description                                                                                                                                                                           | Type                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | Default                                        |
| --------------------- | --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------- |
| \`_ariaControls\`       | \`_aria-controls\`      | Gibt an, welche Elemente kontrolliert werden.  (https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-controls)                                             | \`string | undefined\`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | \`undefined\`                                    |
| \`_ariaCurrent\`        | \`_aria-current\`       | Gibt an, welchen aktuellen Auswahlstatus der Link hat. (https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-current)                                      | \`"date" | "location" | "page" | "step" | "time" | boolean | undefined\`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | \`undefined\`                                    |
| \`_ariaExpanded\`       | \`_aria-expanded\`      | Gibt an, ob durch den Link etwas aufgeklappt wurde. (https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-expanded)                                        | \`boolean | undefined\`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | \`undefined\`                                    |
| \`_ariaLabel\`          | \`_aria-label\`         | Gibt einen beschreibenden Text des Links an.  (https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-label)                                                 | \`string | undefined\`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | \`''\`                                           |
| \`_ariaSelected\`       | \`_aria-selected\`      | Gibt an, ob der Link gerade ausgew\xE4hlt ist. (https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-selected)                                                | \`boolean | undefined\`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | \`undefined\`                                    |
| \`_disabled\`           | \`_disabled\`           | Gibt an, ob der Link deaktiviert ist.                                                                                                                                                 | \`boolean | undefined\`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | \`false\`                                        |
| \`_href\` _(required)_  | \`_href\`               | Gibt die Ziel-Url des Links an.                                                                                                                                                       | \`string\`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | \`undefined\`                                    |
| \`_icon\`               | \`_icon\`               | Gibt den Class-Identifier eines Icons eine eingebunden Icofont an. (z.B. https://icofont.com/)                                                                                        | \`string | undefined | { top: string | KoliBriCustomIcon; right?: string | KoliBriCustomIcon | undefined; bottom?: string | KoliBriCustomIcon | undefined; left?: string | KoliBriCustomIcon | undefined; } | { top?: string | KoliBriCustomIcon | undefined; right: string | KoliBriCustomIcon; bottom?: string | KoliBriCustomIcon | undefined; left?: string | KoliBriCustomIcon | undefined; } | { top?: string | KoliBriCustomIcon | undefined; right?: string | KoliBriCustomIcon | undefined; bottom: string | KoliBriCustomIcon; left?: string | KoliBriCustomIcon | undefined; } | { top?: string | KoliBriCustomIcon | undefined; right?: string | KoliBriCustomIcon | undefined; bottom?: string | KoliBriCustomIcon | undefined; left: string | KoliBriCustomIcon; }\` | \`undefined\`                                    |
| \`_iconAlign\`          | \`_icon-align\`         | <span class="text-red-500">**[DEPRECATED]**</span> Wird durch das neue flexibleren Icon-Typ abgedeckt.<br/><br/>Gibt an, ob das Icon entweder links oder rechts dargestellt werden soll. | \`"bottom" | "left" | "right" | "top" | undefined\`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | \`'left'\`                                       |
| \`_iconOnly\`           | \`_icon-only\`          | Gibt an, ob nur das Icon angezeigt wird.                                                                                                                                              | \`boolean | undefined\`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | \`false\`                                        |
| \`_label\` _(required)_ | \`_label\`              | Gibt den Label f\xFCr die Beschriftung der Schaltfl\xE4che an.                                                                                                                              | \`string\`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | \`undefined\`                                    |
| \`_on\`                 | --                    | Gibt die EventCallback-Funktionen f\xFCr den Link an.                                                                                                                                    | \`undefined | { onClick?: EventValueCallback<Event, string> | undefined; }\`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | \`undefined\`                                    |
| \`_role\`               | \`_role\`               | Gibt an, welche Role der Schalter hat.                                                                                                                                                | \`"tab" | undefined\`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | \`undefined\`                                    |
| \`_selector\`           | \`_selector\`           | <span style="color:red">**[DEPRECATED]**</span> Das Styling sollte stets \xFCber CSS erfolgen.<br/><br/>Gibt die ID eines DOM-Elements, zu dem gesprungen werden soll, aus.              | \`string | undefined\`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | \`undefined\`                                    |
| \`_stealth\`            | \`_stealth\`            | <span style="color:red">**[DEPRECATED]**</span> Das Styling sollte stets \xFCber CSS erfolgen.<br/><br/>Gibt an, ob der Link nur beim Fokus sichtbar ist.                                | \`boolean | undefined\`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | \`false\`                                        |
| \`_tabIndex\`           | \`_tab-index\`          | Gibt an, welchen Tab-Index der Button hat. (https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex)                                                             | \`number | undefined\`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | \`undefined\`                                    |
| \`_target\`             | \`_target\`             | Definiert das Verhalten, bei dem der Link ge\xF6ffnet werden soll.                                                                                                                       | \`string | undefined\`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | \`undefined\`                                    |
| \`_targetDescription\`  | \`_target-description\` | Gibt die Beschreibung an, wenn der Link in einem anderen Programm ge\xF6ffnet wird.                                                                                                      | \`string | undefined\`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | \`'Der Link wird in einem neuen Tab ge\xF6ffnet.'\` |
| \`_tooltipAlign\`       | \`_tooltip-align\`      | Gibt an, ob der Tooltip entweder oben, rechts, unten oder links angezeigt werden soll.                                                                                                | \`"bottom" | "left" | "right" | "top" | undefined\`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | \`'right'\`                                      |
| \`_useCase\`            | \`_use-case\`           | <span style="color:red">**[DEPRECATED]**</span> Das Styling sollte stets \xFCber CSS erfolgen.<br/><br/>Gibt den Verwendungsfall des Links an.                                           | \`"image" | "nav" | "text" | undefined\`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | \`'text'\`                                       |


## Shadow Parts

| Part       | Description                               |
| ---------- | ----------------------------------------- |
| \`"hidden"\` | Erm\xF6glicht das Ausblenden des Linktextes. |
| \`"link"\`   | Erm\xF6glicht das Stylen des Links.          |
| \`"span"\`   | Erm\xF6glicht das Stylen des Linktextes.     |


## Abh\xE4ngigkeiten

### Verwendet von

 - kol-breadcrumb
 - kol-input-adapter-leanup
 - kol-link-group
 - kol-skip-nav

### Abh\xE4ngig von

- kol-link-wc

### Graph
<div class="mermaid">
graph TD;
  kol-link --> kol-link-wc
  kol-link-wc --> kol-span-wc
  kol-link-wc --> kol-icon
  kol-link-wc --> kol-tooltip
  kol-span-wc --> kol-icon
  kol-tooltip --> kol-badge
  kol-badge --> kol-span-wc
  kol-badge --> kol-button-wc
  kol-button-wc --> kol-span-wc
  kol-button-wc --> kol-tooltip
  kol-breadcrumb --> kol-link
  kol-input-adapter-leanup --> kol-link
  kol-link-group --> kol-link
  kol-skip-nav --> kol-link
  style kol-link fill:#f9f,stroke:#333,stroke-width:4px
</div>

----------------------------------------------


`}}]);
