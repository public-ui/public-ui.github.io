(self.webpackChunk_public_ui_storybook=self.webpackChunk_public_ui_storybook||[]).push([[7370],{"./src/components/mermaid.tsx":(s,d,o)=>{"use strict";o.d(d,{G:()=>n,m:()=>e});var i=o("./node_modules/react/index.js"),t=o("./node_modules/mermaid/dist/mermaid.core.mjs");let r;const e=l=>{l&&t.Z.initialize(Object.assign({startOnLoad:!0},l)),clearTimeout(r),r=setTimeout(()=>{clearTimeout(r),t.Z.contentLoaded()},500)},n=({code:l,config:a,children:c})=>((0,i.useEffect)(()=>{e(a)},[]),i.createElement("div",null,i.createElement("div",{className:"mermaid"},l)));try{e.displayName="mermaidLoadContent",e.__docgenInfo={description:"",displayName:"mermaidLoadContent",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/mermaid.tsx#mermaidLoadContent"]={docgenInfo:e.__docgenInfo,name:"mermaidLoadContent",path:"src/components/mermaid.tsx#mermaidLoadContent"})}catch(l){}try{n.displayName="Mermaid",n.__docgenInfo={description:"",displayName:"Mermaid",props:{code:{defaultValue:null,description:"",name:"code",required:!0,type:{name:"string"}},config:{defaultValue:null,description:"",name:"config",required:!1,type:{name:"any"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/mermaid.tsx#Mermaid"]={docgenInfo:n.__docgenInfo,name:"Mermaid",path:"src/components/mermaid.tsx#Mermaid"})}catch(l){}},"./node_modules/moment-mini/locale sync recursive ^\\.\\/.*$":(s,d,o)=>{var i={"./locale":"./node_modules/moment-mini/locale/locale.js","./locale.js":"./node_modules/moment-mini/locale/locale.js"};function t(e){var n=r(e);return o(n)}function r(e){if(!o.o(i,e)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return i[e]}t.keys=function(){return Object.keys(i)},t.resolve=r,s.exports=t,t.id="./node_modules/moment-mini/locale sync recursive ^\\.\\/.*$"},"./src/components/link/0-description/autogen.readme.md":s=>{"use strict";s.exports='# Link\n\nDie **Link**-Komponente rendert einen auf Barrierefreiheit optimierten Link, der als Text, als Icon oder auch in Kombination ausgegeben werden kann.\nM\xF6glich ist auch die Ausgabe eines versteckten Links.\n\nDer Link wird standardm\xE4\xDFig in klassischer Form mit Unterstrich ausgegeben, der jedoch \xFCber ein Attribut auch ohne CSS entfernt werden kann. Weitere Informationen zu Custom Styles finden Sie weiter unten.\n\nBeachten Sie, dass die Komponente automatisch ein Padding links und rechts zum umgebenden Text erzeugt. Sie kann daher im Flie\xDFtext ohne\nEingabe von Leerzeichen eingef\xFCgt werden. Zus\xE4tzliche Leerzeichen vergr\xF6\xDFern den Abstand zum umgebenden Text.\n\n## Konstruktion\n\n### Code\n\n> Um das Zusammenspiel von Komponenten (HTML) und Kontroller (TypeScript) gemeinsam darzustellen, wurden alle Code-Beispiele auf dieser Seite mit den Web Components im TSX geschrieben.\n\n```tsx\n<kol-link _href="https://www.w3.org" _target="_self" _underline="false">\n	Hier steht ein Link\n</kol-link>\n```\n\n### Beispiel\n\n<p>\n   In diesem Absatz wird ein Link gesetzt, der keine weiteren Attribute enth\xE4lt.\n  <kol-link _href="https://www.w3.org">Hier steht ein Link</kol-link> Er wird standardm\xE4\xDFig als <i>\n    <b>inline-Element</b>\n    </i> ausgegeben.\n</p>\n\n## Verwendung\n\n### Link innerhalb eines Flie\xDFtextes, mit unterschiedlichen **\\_display**-Werten\n\n <p>\n    In diesem Absatz wird ein Link gesetzt, der einmal als inline-block-Element ausgegeben wird.\n    <kol-link _display="inline-block">\n      Ich bin ein Link als <b>inline-block-Element</b>\n    </kol-link>, damit kann man mir per CSS-Styles eine Breite, eine H\xF6he und andere Eigenschaften zuweisen.\n    Danach folgt ein Link, der als block-Element ausgegeben wird.\n  <kol-link _display="block">\n      Ich bin ein Link als <b>block-Element</b>\n    </kol-link>,\n    daher gehe ich \xFCber die ganze Breite des Eltern-Elements erzeuge so einen Zeilenumbruch.\n</p>\n\n### Link innerhalb eines Flie\xDFtextes mit Icon und Text\n\n  <p>\n    <kol-link _icon="home">Ich bin ein Link mit Icon links</kol-link><br/>\n    <kol-link _icon="home" _icon-align="right">\n      Ich bin ein Link mit Icon rechts\n    </kol-link>\n    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea optio deleniti fuga quos molestias, voluptate nobis\n    nemo, incidunt excepturi facilis, amet ducimus minus quae corporis eligendi cum distinctio. Fugit, repellendus.\n    <kol-link _icon="home">Ich bin ein Link mit Icon links</kol-link>. Lorem, ipsum dolor sit amet consectetur adipisicing\n    elit. Ea optio deleniti fuga quos molestias, voluptate nobis nemo, incidunt excepturi <kol-link\n      _icon="home"\n      _icon-align="right"\n    >\n      Ich bin ein Link mit Icon rechts\n    </kol-link>\n    facilis, amet ducimus minus quae corporis eligendi cum distinctio. Fugit, repellendus.\n\n  </p>\n\n### Link mit und ohne Unterstrich\n\n  <p>\n    <kol-link _icon="home">Ich bin ein Link in Standardausgabe mit Unterstrich</kol-link><br/>\n    <kol-link _icon="home" _underline="false">\n      Ich bin ein Link in Standardausgabe ohne Unterstrich\n    </kol-link>\n\n  </p>\n\n<!--### Best practices\n\n### Anwendungsf\xE4lle-->\n\n## Barrierefreiheit\n\n> Die optische Standardausgabe der Komponente ist auf die Umsetzung der Barrierefreiheit hin optimiert. Wenn Sie eigene Custom Styles verwenden, kann das zu einer Einschr\xE4nkung der Barrierefreiheit f\xFChren.\n\n### Tastatursteuerung\n\n| Taste   | Funktion                        |\n| ------- | ------------------------------- |\n| `Tab`   | Fokussiert das Link-Element.    |\n| `Enter` | Ruft den hinterlegten Link auf. |\n\n<!--## Links und Referenzen\n\n<!-- Auto Generated Below -->\n\n\n## Eigenschaften\n\n| Property              | Attribute             | Description                                                                                                                                                                                                                               | Type                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | Default                                        |\n| --------------------- | --------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------- |\n| `_ariaControls`       | `_aria-controls`      | Gibt an, welche Elemente kontrolliert werden.  (https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-controls)                                                                                                 | `string | undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | `undefined`                                    |\n| `_ariaCurrent`        | `_aria-current`       | Gibt an, welchen aktuellen Auswahlstatus der Link hat. (https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-current)                                                                                          | `"date" | "location" | "page" | "step" | "time" | boolean | undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | `undefined`                                    |\n| `_ariaExpanded`       | `_aria-expanded`      | Gibt an, ob durch den Link etwas aufgeklappt wurde. (https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-expanded)                                                                                            | `boolean | undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | `undefined`                                    |\n| `_ariaLabel`          | `_aria-label`         | Gibt einen beschreibenden Text des Links an.  (https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-label)                                                                                                     | `string | undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | `\'\'`                                           |\n| `_ariaSelected`       | `_aria-selected`      | Gibt an, ob der Link gerade ausgew\xE4hlt ist. (https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-selected)                                                                                                    | `boolean | undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | `undefined`                                    |\n| `_disabled`           | `_disabled`           | Gibt an, ob der Link deaktiviert ist.                                                                                                                                                                                                     | `boolean | undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | `false`                                        |\n| `_fill`               | `_fill`               | <span class="text-red-500">**[DEPRECATED]**</span> Das Styling sollte stets \xFCber CSS erfolgen.<br/><br/>Gibt an, ob der Link die gesamte zur Verf\xFCgung stehende Breite ausf\xFCllt.                                                             | `boolean | undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | `false`                                        |\n| `_href`               | `_href`               | Gibt die Ziel-Url des Links an.                                                                                                                                                                                                           | `string | undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | `\'\'`                                           |\n| `_icon`               | `_icon`               | Gibt den Class-Identifier eines Icons eine eingebunden Icofont an. (z.B. https://icofont.com/)                                                                                                                                            | `string | undefined | { top: string | KoliBriCustomIcon; right?: string | KoliBriCustomIcon | undefined; bottom?: string | KoliBriCustomIcon | undefined; left?: string | KoliBriCustomIcon | undefined; } | { top?: string | KoliBriCustomIcon | undefined; right: string | KoliBriCustomIcon; bottom?: string | KoliBriCustomIcon | undefined; left?: string | KoliBriCustomIcon | undefined; } | { top?: string | KoliBriCustomIcon | undefined; right?: string | KoliBriCustomIcon | undefined; bottom: string | KoliBriCustomIcon; left?: string | KoliBriCustomIcon | undefined; } | { top?: string | KoliBriCustomIcon | undefined; right?: string | KoliBriCustomIcon | undefined; bottom?: string | KoliBriCustomIcon | undefined; left: string | KoliBriCustomIcon; }` | `undefined`                                    |\n| `_iconAlign`          | `_icon-align`         | <span style="color:red">**[DEPRECATED]**</span> Wird durch das neue flexibleren Icon-Typ abgedeckt.<br/><br/>Gibt an, ob das Icon entweder links oder rechts dargestellt werden soll.                                                     | `"left" | "right" | undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | `\'left\'`                                       |\n| `_iconOnly`           | `_icon-only`          | Gibt an, ob nur das Icon angezeigt wird.                                                                                                                                                                                                  | `boolean | undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | `false`                                        |\n| `_label` _(required)_ | `_label`              | Gibt den Label f\xFCr die Beschriftung der Schaltfl\xE4che an.                                                                                                                                                                                  | `string`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | `undefined`                                    |\n| `_on`                 | --                    | <span style="color:red">**[DEPRECATED]**</span> Hierzu sollte statt Link- die ButtonLink-Komponente verwendet werden.<br/><br/>Gibt die EventCallback-Funktionen f\xFCr den Link an.                                                         | `undefined | { onClick?: EventCallback<Event> | undefined; }`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | `undefined`                                    |\n| `_part`               | `_part`               | <span style="color:red">**[DEPRECATED]**</span> Das Styling sollte stets \xFCber CSS erfolgen.<br/><br/>Gibt den Identifier f\xFCr den CSS-Part an, um das Icon von Au\xDFen \xE4ndern zu k\xF6nnen. (https://meowni.ca/posts/part-theme-explainer/) /** | `string | undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | `undefined`                                    |\n| `_role`               | `_role`               | Gibt an, welche Role der Schalter hat.                                                                                                                                                                                                    | `"tab" | undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | `undefined`                                    |\n| `_selector`           | `_selector`           | <span style="color:red">**[DEPRECATED]**</span> Das Styling sollte stets \xFCber CSS erfolgen.<br/><br/>Gibt die ID eines DOM-Elements, zu dem gesprungen werden soll, aus.                                                                  | `string | undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | `undefined`                                    |\n| `_stealth`            | `_stealth`            | <span style="color:red">**[DEPRECATED]**</span> Das Styling sollte stets \xFCber CSS erfolgen.<br/><br/>Gibt an, ob der Link nur beim Fokus sichtbar ist.                                                                                    | `boolean | undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | `false`                                        |\n| `_tabIndex`           | `_tab-index`          | Gibt an, welchen Tab-Index der Button hat. (https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex)                                                                                                                 | `number | undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | `undefined`                                    |\n| `_target`             | `_target`             | Definiert das Verhalten, bei dem der Link ge\xF6ffnet werden soll.                                                                                                                                                                           | `string | undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | `undefined`                                    |\n| `_targetDescription`  | `_target-description` | Gibt die Beschreibung an, wenn der Link in einem anderen Programm ge\xF6ffnet wird.                                                                                                                                                          | `string | undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | `\'Der Link wird in einem neuen Tab ge\xF6ffnet.\'` |\n| `_tooltipAlign`       | `_tooltip-align`      | Gibt an, ob der Tooltip entweder oben, rechts, unten oder links angezeigt werden soll.                                                                                                                                                    | `"bottom" | "left" | "right" | "top" | undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | `\'right\'`                                      |\n| `_underline`          | `_underline`          | <span style="color:red">**[DEPRECATED]**</span> Das Styling sollte stets \xFCber CSS erfolgen.<br/><br/>Gibt an, ob die Links unterstrichen dargestellt werden.                                                                              | `boolean | undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | `true`                                         |\n| `_useCase`            | `_use-case`           | <span style="color:red">**[DEPRECATED]**</span> Das Styling sollte stets \xFCber CSS erfolgen.<br/><br/>Gibt den Verwendungsfall des Links an.                                                                                               | `"image" | "nav" | "text" | undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | `\'text\'`                                       |\n\n\n## Shadow Parts\n\n| Part       | Description                               |\n| ---------- | ----------------------------------------- |\n| `"hidden"` | Erm\xF6glicht das Ausblenden des Linktextes. |\n| `"link"`   | Erm\xF6glicht das Stylen des Links.          |\n| `"span"`   | Erm\xF6glicht das Stylen des Linktextes.     |\n\n\n## Abh\xE4ngigkeiten\n\n### Verwendet von\n\n - kol-breadcrumb\n - kol-input-adapter-leanup\n - kol-link-group\n - kol-skip-nav\n\n### Abh\xE4ngig von\n\n- kol-link-wc\n\n### Graph\n<div class="mermaid">\ngraph TD;\n  kol-link --> kol-link-wc\n  kol-link-wc --> kol-span-wc\n  kol-link-wc --> kol-icon\n  kol-link-wc --> kol-tooltip\n  kol-span-wc --> kol-icon\n  kol-tooltip --> kol-badge\n  kol-badge --> kol-span-wc\n  kol-badge --> kol-button-wc\n  kol-button-wc --> kol-span-wc\n  kol-button-wc --> kol-tooltip\n  kol-breadcrumb --> kol-link\n  kol-input-adapter-leanup --> kol-link\n  kol-link-group --> kol-link\n  kol-skip-nav --> kol-link\n  style kol-link fill:#f9f,stroke:#333,stroke-width:4px\n</div>\n\n----------------------------------------------\n\n\n'}}]);
