(self.webpackChunk_public_ui_storybook=self.webpackChunk_public_ui_storybook||[]).push([[1207],{"./src/components/nav/0-description/autogen.react.stories.mdx":(k,p,e)=>{"use strict";e.r(p),e.d(p,{__namedExportsOrder:()=>P,__page:()=>E,default:()=>T});var s=e("./node_modules/core-js/modules/es.object.keys.js"),l=e.n(s),u=e("./node_modules/core-js/modules/es.array.index-of.js"),t=e.n(u),r=e("./node_modules/core-js/modules/es.symbol.js"),_=e.n(r),h=e("./node_modules/core-js/modules/es.function.bind.js"),w=e.n(h),y=e("./node_modules/core-js/modules/es.object.assign.js"),B=e.n(y),L=e("./node_modules/react/index.js"),c=e("./node_modules/@mdx-js/react/dist/esm.js"),b=e("./node_modules/@storybook/addon-docs/dist/esm/index.js"),O=e("./src/components/nav/0-description/autogen.readme.md"),S=e("./src/components/mermaid.tsx"),z=["components"];function v(){return v=Object.assign?Object.assign.bind():function(n){for(var o=1;o<arguments.length;o++){var a=arguments[o];for(var i in a)Object.prototype.hasOwnProperty.call(a,i)&&(n[i]=a[i])}return n},v.apply(this,arguments)}function M(n,o){if(n==null)return{};var a=N(n,o),i,d;if(Object.getOwnPropertySymbols){var m=Object.getOwnPropertySymbols(n);for(d=0;d<m.length;d++)i=m[d],!(o.indexOf(i)>=0)&&(!Object.prototype.propertyIsEnumerable.call(n,i)||(a[i]=n[i]))}return a}function N(n,o){if(n==null)return{};var a={},i=Object.keys(n),d,m;for(m=0;m<i.length;m++)d=i[m],!(o.indexOf(d)>=0)&&(a[d]=n[d]);return a}var D={},j="wrapper";function f(n){var o=n.components,a=M(n,z);return(0,c.kt)(j,v({},D,a,{components:o,mdxType:"MDXLayout"}),(0,c.kt)(b.h_,{title:"React/Nav/Beschreibung",mdxType:"Meta"}),(0,c.kt)(b.dk,{mdxType:"Description"},O),(0,c.kt)("script",null,"() =>",(0,S.m)()))}f.displayName="MDXContent",f.isMDXComponent=!0;var E=function(){throw new Error("Docs-only story")};E.parameters={docsOnly:!0};var g={title:"React/Nav/Beschreibung",includeStories:["__page"]},A={};g.parameters=g.parameters||{},g.parameters.docs=Object.assign({},g.parameters.docs||{},{page:function(){return(0,c.kt)(b.aT,{mdxStoryNameToKey:A,mdxComponentAnnotations:g},(0,c.kt)(f,null))}});const T=g;var P=["__page"]},"./src/components/mermaid.tsx":(k,p,e)=>{"use strict";e.d(p,{G:()=>r,m:()=>t});var s=e("./node_modules/react/index.js"),l=e("./node_modules/mermaid/dist/mermaid.core.mjs");let u;const t=_=>{_&&l.Z.initialize(Object.assign({startOnLoad:!0},_)),clearTimeout(u),u=setTimeout(()=>{clearTimeout(u),l.Z.contentLoaded()},500)},r=({code:_,config:h,children:w})=>((0,s.useEffect)(()=>{t(h)},[]),s.createElement("div",null,s.createElement("div",{className:"mermaid"},_)));try{t.displayName="mermaidLoadContent",t.__docgenInfo={description:"",displayName:"mermaidLoadContent",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/mermaid.tsx#mermaidLoadContent"]={docgenInfo:t.__docgenInfo,name:"mermaidLoadContent",path:"src/components/mermaid.tsx#mermaidLoadContent"})}catch(_){}try{r.displayName="Mermaid",r.__docgenInfo={description:"",displayName:"Mermaid",props:{code:{defaultValue:null,description:"",name:"code",required:!0,type:{name:"string"}},config:{defaultValue:null,description:"",name:"config",required:!1,type:{name:"any"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/mermaid.tsx#Mermaid"]={docgenInfo:r.__docgenInfo,name:"Mermaid",path:"src/components/mermaid.tsx#Mermaid"})}catch(_){}},"./node_modules/moment-mini/locale sync recursive ^\\.\\/.*$":(k,p,e)=>{var s={"./locale":"./node_modules/moment-mini/locale/locale.js","./locale.js":"./node_modules/moment-mini/locale/locale.js"};function l(t){var r=u(t);return e(r)}function u(t){if(!e.o(s,t)){var r=new Error("Cannot find module '"+t+"'");throw r.code="MODULE_NOT_FOUND",r}return s[t]}l.keys=function(){return Object.keys(s)},l.resolve=u,k.exports=l,l.id="./node_modules/moment-mini/locale sync recursive ^\\.\\/.*$"},"./src/components/nav/0-description/autogen.readme.md":k=>{"use strict";k.exports=`# Nav

Eine **Navigationsleiste** ist eine Gruppe von verwandten Links oder \u201ENavigationselementen\u201C, die durch Anklicken eine Aktion ausf\xFChren oder Inhalte anzeigen. Sie navigiert Nutzer:innen direkt zu bestimmten Inhalten der aktuellen Seite oder zu externen Seiten. Au\xDFerdem dient sie Nutzer:innen (\xE4hnlich wie Registerkarten) als Steuerelement, um Inhalte anzuzeigen, auszublenden und zwischen ihnen zu wechseln. Dabei werden h\xE4ufig animierte \xDCberg\xE4nge verwendet.

Die **Nav**-Komponente stellt eine vollwertige vertikale , bzw. horizontale **Navigationsleiste** bereit. Sie kann mehrere Ebenen enthalten und in verschiedenen Breiten ausgegeben werden. Die **Nav**-Komponente repr\xE4sentiert die Struktur der Webseite und hat so eine fundamentale Bedeutung sowohl f\xFCr Nutzer:innen, als auch f\xFCr Suchmaschinen.

**KoliBri** stellt eine umfangreich konfigurierbare, vertikale oder horizontale **Navigationsleiste** zur Verf\xFCgung, die mehrere Ebenen darstellen und in der Breite variiert werden kann.
Men\xFCpunkte der obersten Ebene, wie z.B. die Startseite, werden stets \xFCber die ganze Breite der **Navigation** gestreckt. Nachfolgende Ebenen, als direkte Kindelemente, werden auf der linken Seite
etwas einger\xFCckt ausgegeben. \xDCbergeordnete Men\xFCpunkte die Untermen\xFCpunkte enthalten, werden mit einem **Plus-Icon** am linken Rand angezeigt. Wird der \xFCbergeordnete Men\xFCpunkt mit dem Plus-Icon ge\xF6ffnet, \xE4ndert sich
das Plus-Icon automatisch zu einem **Minus-Icon**, mit dem der Men\xFCpunkt wieder geschlossen werden kann.

Aktive Men\xFCpunkte werden mit einer farbigen Markierung dargestellt.

\xDCber ein **Doppelpfeil-Icon** unterhalb der Navigation kann die Breite der **Nav**-Komponente ver\xE4ndert werden. In der kleinsten Breite werden die Men\xFCtitel ausgeblendet und nur
noch die Icons ausgegeben.

## Konstruktion

### Code

> Um das Zusammenspiel von Komponenten (HTML) und Kontroller (TypeScript) gemeinsam darzustellen, wurden alle Code-Beispiele auf dieser Seite mit den Web Components im TSX geschrieben.

\`\`\`tsx
<kol-nav
	_links='[{_"label":"Startseite", "_href":"startseite"},{_"label":"Unterseite von Startseite", "_href":"unterseite"}]'
	_has-compact-button="true"
></kol-nav>
\`\`\`

### Beispiel

<kol-nav _ariaLabel="Navigation" _links='[{"_label":"Startseite","_href":"startseite", "_children":[{"_label":"1. Untermen\xFCpunkt","_href":"startseite/1-untermenuepunkt"},{"_label":"2. Untermen\xFCpunkt","_href":"startseite/2-untermenuepunkt"}]},{"_label":"2. Men\xFCpunkt","_href":"unterseite"}]' _has-compact-button></kol-nav>

## Verwendung

### Links in der Navigationsleiste definieren

Die Navigationsstruktur wird als JSON-Struktur an das Attribut \`_links_\` \xFCbergeben. Die Struktur ist als Wert/Parameter-Paar aufgebaut:

\`\`\`tsx
[
  {"_label":"Startseite", "_href":"startseite"},
  {"_label":"Unterseite 1":"_href":"unterseite1"},
  {"_label":"Unterseite 2":"_href":"unterseite2"}
]
\`\`\`

Um Untermen\xFCpunkte zu erzeugen, erweitern Sie die JSON-Struktur um das zus\xE4tzliche Attribut \`_children\` im \xFCbergeordneten Element.

\`\`\`tsx
[
	{
		_label: 'Startseite',
		_href: 'startseite',
		_children: [
			{ _label: '1. Untermen\xFCpunkt', _href: 'startseite/1-untermenuepunkt' },
			{ _label: '2. Untermen\xFCpunkt', _href: 'startseite/2-untermenuepunkt' },
		],
	},
	{ _label: '2. Men\xFCpunkt', _href: 'unterseite' },
];
\`\`\`

### Kompakte Navigationsleiste anzeigen

Um die Navigationsleiste in der kompakten Darstellung auszugeben, setzen Sie das Attribut \`_compact="true"\`.

### Umschalter normale/kompakte Darstellung

Um zwischen beiden Darstellungen umschalten zu k\xF6nnen, kann \xFCber das Attribut \`_hasCompactButton="true"\`
ein Link unterhalb der Navigationsleiste angezeigt werden.

### Umschaltung horizontale/vertikale Ausrichtung

Die Navigationsleiste kann mit dem Attribut \`_orientation\` zwischen horizontaler und vertikaler Ausrichtung umgeschaltet werden. M\xF6gliche Werte sind:<br/>

- \`horizontal\`
- \`vertical\`

### Best practices

- Verwenden Sie **Navigationsleisten**, um **Navigation** oder navigations\xE4hnliche Aktionen darzustellen (z. B. interne oder externe Links, Abmelden, Kontrolle der Sichtbarkeit auf der Seite).
- Verwenden Sie das Label, um eine klare und pr\xE4zise Beschreibung des Inhalts zu diesem bestimmten Navigationselement bereitzustellen.
- Verwenden Sie keine **Navigationsleisten** f\xFCr Aktionen, die besser als Schaltfl\xE4chen dargestellt werden (z. B. \u201ESpeichern\u201C, \u201EL\xF6schen\u201C, \u201EArtikel in den Warenkorb legen\u201C).
- Stapeln Sie nicht mehrere **Navigationsleisten** direkt nebeneinander.
- Verwenden Sie keine **Navigationsleisten** zum Vergleichen von Inhalten (z. B. unterschiedliche Leistungen).
- Ber\xFCcksichtigen Sie die Anzahl der Navigationselemente, die Sie in die **Navigationsleiste** einf\xFCgen. Wenn Sie das Gef\xFChl haben, dass die Zahl zu gro\xDF wird, ziehen Sie alternative Ans\xE4tze zur Pr\xE4sentation des Inhalts in Betracht oder verwenden Sie ein anderes Navigationsmuster/eine andere Komponente.
- Wenn ein Men\xFCpunkt Kindelemente besitzt, bewirkt die Enter-Taste das \xD6ffnen des n\xE4chsten Kindelements. Es ist in diesem Fall nicht m\xF6glich den Link im Elternelement mit der Enter-Taste auszuf\xFChren.

### Anwendungsf\xE4lle

- Verwenden Sie **Navigationsleisten** als In-Page-Navigation auf einer Landingpage.
- Verwenden Sie **Navigationsleisten**, um verwandte Informationen auf einer Landingpage zu organisieren.
- Nutzen Sie **Navigationsleisten**, um Angebote oder Vorteile in verschiedene Kategorien einzuordnen (z.B. Formulare).
- Verwenden Sie **Navigationsleisten**, um FAQs in verschiedene Kategorien zu unterteilen.

## Barrierefreiheit

> Die optische Standardausgabe der Komponente ist auf die Umsetzung der Barrierefreiheit hin optimiert. Wenn Sie eigene Custom Styles verwenden, kann das zu einer Einschr\xE4nkung der Barrierefreiheit f\xFChren.

### Tastatursteuerung

| Taste   | Funktion                                                                                                                                                                                                                   |
| ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| \`Tab\`   | Fokussiert den ersten Men\xFCpunkt in der Navigation. Nachfolgend kann mit der Tab-Taste jeder Men\xFCpunkt angesprungen werden. Wenn der Has-compact-Button aktiviert wurde, ist dieser ebenfalls mit der Tab-Taste erreichbar. |
| \`Enter\` | \xD6ffnet bzw.schlie\xDFt den fokussierten Men\xFCpunkt. Besitzt der fokussierte Men\xFCpunkt kein weiteres Kindelement, wird mit der Enter-Taste der eigentliche Link Aufgerufen.                                                     |

<!--## Links und Referenzen

<!-- Auto Generated Below -->


## Eigenschaften

| Property                  | Attribute             | Description                                                                                                      | Type                                                            | Default      |
| ------------------------- | --------------------- | ---------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------- | ------------ |
| \`_ariaCurrentValue\`       | \`_aria-current-value\` | Gibt den Wert von aria-current an, der bei dem aktuellen Kontext innerhalb der Navigation verwendet werden soll. | \`"date" | "location" | "page" | "step" | "time" | boolean\` | \`false\`      |
| \`_ariaLabel\` _(required)_ | \`_aria-label\`         | Gibt den Text an, der die Navigation von anderen Navigationen differenziert.                                     | \`string\`                                                        | \`undefined\`  |
| \`_collapsible\`            | \`_collapsible\`        | Gibt an, ob Knoten in der Navigation zusammengeklappt werden k\xF6nnen. Ist standardm\xE4\xDFig aktiv.                    | \`boolean | undefined\`                                          | \`false\`      |
| \`_compact\`                | \`_compact\`            | Gibt an, ob die Navigation kompakt angezeigt wird.                                                               | \`boolean | undefined\`                                          | \`false\`      |
| \`_hasCompactButton\`       | \`_has-compact-button\` | Gibt an, ob die Navigation eine zus\xE4tzliche Schaltfl\xE4che zum Aus- und Einklappen der Navigation anzeigen soll.   | \`boolean | undefined\`                                          | \`false\`      |
| \`_links\` _(required)_     | \`_links\`              | Gibt die geordnete Liste der Seitenhierarchie an.                                                                | \`NavLinkWithChildrenProps[] | string\`                          | \`undefined\`  |
| \`_orientation\`            | \`_orientation\`        | Gibt die Ausrichtung der Navigation an.                                                                          | \`"horizontal" | "vertical" | undefined\`                       | \`'vertical'\` |
| \`_variant\`                | \`_variant\`            | Gibt an, welche Auspr\xE4gung der Button hat.                                                                       | \`"primary" | "secondary" | undefined\`                         | \`'primary'\`  |


## Shadow Parts

| Part    | Description |
| ------- | ----------- |
| \`"nav"\` | TBD         |


## Abh\xE4ngigkeiten

### Abh\xE4ngig von

- kol-link-wc
- kol-button

### Graph
<div class="mermaid">
graph TD;
  kol-nav --> kol-link-wc
  kol-nav --> kol-button
  kol-link-wc --> kol-span-wc
  kol-link-wc --> kol-icon
  kol-link-wc --> kol-tooltip
  kol-span-wc --> kol-icon
  kol-tooltip --> kol-badge
  kol-badge --> kol-span-wc
  kol-badge --> kol-button-wc
  kol-button-wc --> kol-span-wc
  kol-button-wc --> kol-tooltip
  kol-button --> kol-button-wc
  style kol-nav fill:#f9f,stroke:#333,stroke-width:4px
</div>

----------------------------------------------


`}}]);
