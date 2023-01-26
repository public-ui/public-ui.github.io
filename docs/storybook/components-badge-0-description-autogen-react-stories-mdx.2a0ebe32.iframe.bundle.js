(self.webpackChunk_public_ui_storybook=self.webpackChunk_public_ui_storybook||[]).push([[3666],{"./src/components/badge/0-description/autogen.react.stories.mdx":(b,f,e)=>{"use strict";e.r(f),e.d(f,{__namedExportsOrder:()=>x,__page:()=>E,default:()=>K});var a=e("./node_modules/core-js/modules/es.object.keys.js"),l=e.n(a),_=e("./node_modules/core-js/modules/es.array.index-of.js"),o=e.n(_),t=e("./node_modules/core-js/modules/es.symbol.js"),u=e.n(t),h=e("./node_modules/core-js/modules/es.function.bind.js"),y=e.n(h),O=e("./node_modules/core-js/modules/es.object.assign.js"),M=e.n(O),S=e("./node_modules/react/index.js"),m=e("./node_modules/@mdx-js/react/dist/esm.js"),p=e("./node_modules/@storybook/addon-docs/dist/esm/index.js"),w=e("./src/components/badge/0-description/autogen.readme.md"),C=e("./src/components/mermaid.tsx"),A=["components"];function k(){return k=Object.assign?Object.assign.bind():function(n){for(var s=1;s<arguments.length;s++){var r=arguments[s];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(n[i]=r[i])}return n},k.apply(this,arguments)}function I(n,s){if(n==null)return{};var r=v(n,s),i,d;if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(n);for(d=0;d<c.length;d++)i=c[d],!(s.indexOf(i)>=0)&&Object.prototype.propertyIsEnumerable.call(n,i)&&(r[i]=n[i])}return r}function v(n,s){if(n==null)return{};var r={},i=Object.keys(n),d,c;for(c=0;c<i.length;c++)d=i[c],!(s.indexOf(d)>=0)&&(r[d]=n[d]);return r}var j={},D="wrapper";function B(n){var s=n.components,r=I(n,A);return(0,m.kt)(D,k({},j,r,{components:s,mdxType:"MDXLayout"}),(0,m.kt)(p.h_,{title:"React/Badge/Beschreibung",mdxType:"Meta"}),(0,m.kt)(p.dk,{mdxType:"Description"},w),(0,m.kt)("script",null,"() =>",(0,C.m)()))}B.displayName="MDXContent",B.isMDXComponent=!0;var E=function(){throw new Error("Docs-only story")};E.parameters={docsOnly:!0};var g={title:"React/Badge/Beschreibung",includeStories:["__page"]},T={};g.parameters=g.parameters||{},g.parameters.docs=Object.assign({},g.parameters.docs||{},{page:function(){return(0,m.kt)(p.aT,{mdxStoryNameToKey:T,mdxComponentAnnotations:g},(0,m.kt)(B,null))}});const K=g;var x=["__page"]},"./src/components/mermaid.tsx":(b,f,e)=>{"use strict";e.d(f,{G:()=>t,m:()=>o});var a=e("./node_modules/react/index.js"),l=e("./node_modules/mermaid/dist/mermaid.core.mjs");let _;const o=u=>{u&&l.Z.initialize(Object.assign({startOnLoad:!0},u)),clearTimeout(_),_=setTimeout(()=>{clearTimeout(_),l.Z.contentLoaded()},500)},t=({code:u,config:h,children:y})=>((0,a.useEffect)(()=>{o(h)},[]),a.createElement("div",null,a.createElement("div",{className:"mermaid"},u)));try{o.displayName="mermaidLoadContent",o.__docgenInfo={description:"",displayName:"mermaidLoadContent",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/mermaid.tsx#mermaidLoadContent"]={docgenInfo:o.__docgenInfo,name:"mermaidLoadContent",path:"src/components/mermaid.tsx#mermaidLoadContent"})}catch(u){}try{t.displayName="Mermaid",t.__docgenInfo={description:"",displayName:"Mermaid",props:{code:{defaultValue:null,description:"",name:"code",required:!0,type:{name:"string"}},config:{defaultValue:null,description:"",name:"config",required:!1,type:{name:"any"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/mermaid.tsx#Mermaid"]={docgenInfo:t.__docgenInfo,name:"Mermaid",path:"src/components/mermaid.tsx#Mermaid"})}catch(u){}},"./node_modules/moment-mini/locale sync recursive ^\\.\\/.*$":(b,f,e)=>{var a={"./locale":"./node_modules/moment-mini/locale/locale.js","./locale.js":"./node_modules/moment-mini/locale/locale.js"};function l(o){var t=_(o);return e(t)}function _(o){if(!e.o(a,o)){var t=new Error("Cannot find module '"+o+"'");throw t.code="MODULE_NOT_FOUND",t}return a[o]}l.keys=function(){return Object.keys(a)},l.resolve=_,b.exports=l,l.id="./node_modules/moment-mini/locale sync recursive ^\\.\\/.*$"},"./src/components/badge/0-description/autogen.readme.md":b=>{"use strict";b.exports=`# Badge

Mit **Badges** k\xF6nnen Sie bestimmte Informationen auf Ihrer Webseite optisch hervorheben.
KoliBri bietet neben der Angabe der Hintergrundfarbe und automatischer Berechnung der Textfarbe auch die M\xF6glichkeit, einem Badge ein Icon und/oder einen anderen Schriftschnitt mitzugeben.

## Konstruktion

### Code

> Um das Zusammenspiel von Komponenten (HTML) und Kontroller (TypeScript) gemeinsam darzustellen, wurden alle Code-Beispiele auf dieser Seite mit den Web Components im TSX geschrieben.

\`\`\`tsx
<kol-badge _label="Beispieltext" _color="#000000" _icon="home" _icon-align="right" style={{ fontWeight: '600' }}></kol-badge>
\`\`\`

### Beispiel

<kol-badge _label="Beispieltext" _color="#000000" _icon="home" _icon-align="right"></kol-badge>

## Verwendung

### Label im Badge

Der Text, der im Badge angezeigt werden soll, wird \xFCber das Attribut **\\_label** \xFCbergeben. Der Text kann neben Sonderzeichen auch Umlaute oder Leerzeichen enthalten.
Das Element \`<kol-badge></kol-badge>\` beinhaltet selbst keinen Text.

### Hintergrundfarbe des Badge

Ein Badge, ohne weitere Angaben zur Hintergrundfarbe, wird standardm\xE4\xDFig mit hellgrauer Schriftfarbe auf schwarzem Hintergrund angezeigt. \xDCber das Attribut **\\_color** k\xF6nnen andere Hintergrundfarben gew\xE4hlt werden.

Die Angabe der gew\xFCnschten Hintergrundfarbe erfolgt in hexadezimaler Schreibweise, z.B. **\\_color="#000000"** f\xFCr schwarz.

Die Textfarbe wird automatisch als Kontrastfarbe zur gew\xE4hlten Hintergrundfarbe errechnet.

### Anzeige eines Icon im Badge

KoliBri stellt die komplette Bibliothek von **Icofont** zur Verf\xFCgung. Sie k\xF6nnen daher optional im Badge ein Icon aus Icofont anzeigen lassen. Bestimmen Sie das Icon \xFCber das Attribut **\\_icon="_Name des Icon_"**.

Eine \xDCbersicht \xFCber die zur Verf\xFCgung stehenden Icons in KoliBri finden Sie [hier](https://icofont.com/icons)

### Position des Icon

Das Icon kann zus\xE4tzlich entweder links oder rechts vom Text angezeigt werden. Verwenden Sie f\xFCr die Angabe der Ausgabeposition das Attribut **\\_icon-align=""**.
Als Wert k\xF6nnen Sie \`_icon-align="left"\` oder \`_icon-align="right"\` angeben.

### Nur Icon anzeigen

Mit dem Attribut **\`_icon-only\`** kann festgelegt werden, dass nur das mit dem Attribut **\`_icon\`** gew\xE4hlte Icon angezeigt wird. Der Wert im Attribut **\`_label\`** wird in diesem Fall ignoriert.

### Schriftschnitt

\xDCber Stylinganweisungen im Attribut **style** k\xF6nnen Sie den Schriftschnitt im Badge festlegen. Das Attribut **style** erwartet als Wert ein Objekt.
\`style={{ fontWeight: '600' }}\`

### Best practices

- Verwenden Sie Badges, um wichtige Informationen in unmittelbarer N\xE4he des jeweiligen Elements anzuzeigen.
- Verwenden Sie Badges, um auf ge\xE4nderte Werte oder einen ge\xE4nderten Status aufmerksam zu machen.
- Ein Badge weist den Benutzer darauf hin, dass etwas neu erzeugt oder aktualisiert wurde, z. B. ein \u201Eungelesener Bericht\u201C oder eine Aktivit\xE4tsbenachrichtigung.
- Behalten Sie in gleichen Anwendungsf\xE4llen immer die gleiche Position des Badges bei, um ein einheitliches Erscheinungsbild zu gew\xE4hrleisten.

## Anwendungsf\xE4lle

### Badge als Aufz\xE4hlungszeichen verwenden

<ul class="m-0 p-0">
  <li class="flex gap-2">
    <kol-badge _label="1" _color="#0747a6"></kol-badge>
    <kol-heading _level="2">
    Auswahl Anliegen
    </kol-heading>
  </li>
  <li class="flex gap-2">
    <kol-badge _label="2" _color="#0747a6"></kol-badge>
    <kol-heading _level="2">
    Auswahl Amtsstelle
    </kol-heading>
  </li>
  <li class="flex gap-2">
    <kol-badge _label="3" _color="#0747a6"></kol-badge>
    <kol-heading _level="2">
    Terminauswahl
    </kol-heading>
  </li>
</ul>

## Barrierefreiheit

> Die optische Standardausgabe der Komponente ist auf die Umsetzung der Barrierefreiheit hin optimiert. Wenn Sie eigene Custom Styles verwenden, kann das zu einer Einschr\xE4nkung der Barrierefreiheit f\xFChren.

F\xFCr die Einhaltung der Regeln zur Barrierefreiheit, ist ein optimaler Kontrast zwischen der Hintergrundfarbe und Textfarbe des Badge zwingend erforderlich. KoliBri bietet daher eine automatische Berechnung der Textfarbe aus der gew\xE4hlten Hintergrundfarbe heraus. M\xF6glich sind die Textfarben **schwarz** und **wei\xDF**, die in Abh\xE4ngigkeit zur Hintergrundfarbe ausgegeben werden.

Die zus\xE4tzliche Ausgabe eines **Icon** gew\xE4hrleistet, dass der Nutzer auch hier\xFCber die Art der Information erfassen kann.

<kol-alert _type="info">Eine explizite Angabe der Textfarbe ist nicht m\xF6glich.</kol-alert>

<!--## Links und Referenzen

<!-- Auto Generated Below -->


## Eigenschaften

| Property              | Attribute       | Description                                                                                                                        | Type                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | Default                  |
| --------------------- | --------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------ |
| \`_color\`              | \`_color\`        | Gibt die Farbe des Hintergrundes bzw. der Schrift an.                                                                              | \`string | undefined | { backgroundColor: string; color: string; }\`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | \`Nationalfarben.Schwarz\` |
| \`_icon\`               | \`_icon\`         | Gibt einen Identifier eines Icons aus den Icofont's an. (https://icofont.com/)                                                     | \`string | undefined | { top: string | KoliBriCustomIcon; right?: string | KoliBriCustomIcon | undefined; bottom?: string | KoliBriCustomIcon | undefined; left?: string | KoliBriCustomIcon | undefined; } | { top?: string | KoliBriCustomIcon | undefined; right: string | KoliBriCustomIcon; bottom?: string | KoliBriCustomIcon | undefined; left?: string | KoliBriCustomIcon | undefined; } | { top?: string | KoliBriCustomIcon | undefined; right?: string | KoliBriCustomIcon | undefined; bottom: string | KoliBriCustomIcon; left?: string | KoliBriCustomIcon | undefined; } | { top?: string | KoliBriCustomIcon | undefined; right?: string | KoliBriCustomIcon | undefined; bottom?: string | KoliBriCustomIcon | undefined; left: string | KoliBriCustomIcon; }\` | \`undefined\`              |
| \`_iconAlign\`          | \`_icon-align\`   | <span class="text-red-500">**[DEPRECATED]**</span> <br/><br/>Gibt an, ob das Icon entweder links oder rechts dargestellt werden soll. | \`"bottom" | "left" | "right" | "top" | undefined\`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | \`'left'\`                 |
| \`_iconOnly\`           | \`_icon-only\`    | Gibt an, ob nur das Icon angezeigt wird.                                                                                           | \`boolean | undefined\`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | \`false\`                  |
| \`_label\` _(required)_ | \`_label\`        | Gibt den Label-Text des Badges an.                                                                                                 | \`string\`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | \`undefined\`              |
| \`_smartButton\`        | \`_smart-button\` | Erm\xF6glicht einen Schalter ins das Eingabefeld mit einer beliebigen Aktion zu einzuf\xFCgen (nur Icon-Only).                           | \`string | undefined | { _label: string; } & { _ariaControls?: string | undefined; _ariaCurrent?: AriaCurrent | undefined; _ariaExpanded?: boolean | undefined; _ariaLabel?: string | undefined; _ariaSelected?: boolean | undefined; _disabled?: boolean | undefined; _icon?: Stringified<KoliBriIconProp> | undefined; _iconAlign?: Alignment | undefined; _iconOnly?: boolean | undefined; _role?: "tab" | undefined; _tabIndex?: number | undefined; _tooltipAlign?: Alignment | undefined; _accessKey?: string | undefined; _id?: string | undefined; _on?: KoliBriButtonCallbacks<unknown> | undefined; _type?: KoliBriButtonType | undefined; _value?: unknown; _customClass?: string | undefined; _variant?: KoliBriButtonVariant | undefined; }\`                                      | \`undefined\`              |


## Abh\xE4ngigkeiten

### Verwendet von

 - kol-tooltip
 - kol-version

### Abh\xE4ngig von

- kol-span-wc
- kol-button-wc

### Graph
<div class="mermaid">
graph TD;
  kol-badge --> kol-span-wc
  kol-badge --> kol-button-wc
  kol-span-wc --> kol-icon
  kol-button-wc --> kol-span-wc
  kol-button-wc --> kol-tooltip
  kol-tooltip --> kol-badge
  kol-version --> kol-badge
  style kol-badge fill:#f9f,stroke:#333,stroke-width:4px
</div>

----------------------------------------------


`}}]);
