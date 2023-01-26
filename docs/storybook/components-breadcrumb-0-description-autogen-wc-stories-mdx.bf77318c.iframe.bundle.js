(self.webpackChunk_public_ui_storybook=self.webpackChunk_public_ui_storybook||[]).push([[1471],{"./src/components/breadcrumb/0-description/autogen.wc.stories.mdx":(k,p,e)=>{"use strict";e.r(p),e.d(p,{__namedExportsOrder:()=>L,__page:()=>O,default:()=>C});var a=e("./node_modules/core-js/modules/es.object.keys.js"),l=e.n(a),_=e("./node_modules/core-js/modules/es.array.index-of.js"),t=e.n(_),i=e("./node_modules/core-js/modules/es.symbol.js"),m=e.n(i),h=e("./node_modules/core-js/modules/es.function.bind.js"),v=e.n(h),y=e("./node_modules/core-js/modules/es.object.assign.js"),z=e.n(y),A=e("./node_modules/react/index.js"),c=e("./node_modules/@mdx-js/react/dist/esm.js"),g=e("./node_modules/@storybook/addon-docs/dist/esm/index.js"),j=e("./src/components/breadcrumb/0-description/autogen.readme.md"),w=e("./src/components/mermaid.tsx"),S=["components"];function f(){return f=Object.assign?Object.assign.bind():function(n){for(var s=1;s<arguments.length;s++){var o=arguments[s];for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(n[r]=o[r])}return n},f.apply(this,arguments)}function D(n,s){if(n==null)return{};var o=B(n,s),r,d;if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(n);for(d=0;d<u.length;d++)r=u[d],!(s.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(n,r)&&(o[r]=n[r])}return o}function B(n,s){if(n==null)return{};var o={},r=Object.keys(n),d,u;for(u=0;u<r.length;u++)d=r[u],!(s.indexOf(d)>=0)&&(o[d]=n[d]);return o}var P={},T="wrapper";function E(n){var s=n.components,o=D(n,S);return(0,c.kt)(T,f({},P,o,{components:s,mdxType:"MDXLayout"}),(0,c.kt)(g.h_,{title:"Web Components/Breadcrumb/Beschreibung",mdxType:"Meta"}),(0,c.kt)(g.dk,{mdxType:"Description"},j),(0,c.kt)("script",null,"() =>",(0,w.m)()))}E.displayName="MDXContent",E.isMDXComponent=!0;var O=function(){throw new Error("Docs-only story")};O.parameters={docsOnly:!0};var b={title:"Web Components/Breadcrumb/Beschreibung",includeStories:["__page"]},M={};b.parameters=b.parameters||{},b.parameters.docs=Object.assign({},b.parameters.docs||{},{page:function(){return(0,c.kt)(g.aT,{mdxStoryNameToKey:M,mdxComponentAnnotations:b},(0,c.kt)(E,null))}});const C=b;var L=["__page"]},"./src/components/mermaid.tsx":(k,p,e)=>{"use strict";e.d(p,{G:()=>i,m:()=>t});var a=e("./node_modules/react/index.js"),l=e("./node_modules/mermaid/dist/mermaid.core.mjs");let _;const t=m=>{m&&l.Z.initialize(Object.assign({startOnLoad:!0},m)),clearTimeout(_),_=setTimeout(()=>{clearTimeout(_),l.Z.contentLoaded()},500)},i=({code:m,config:h,children:v})=>((0,a.useEffect)(()=>{t(h)},[]),a.createElement("div",null,a.createElement("div",{className:"mermaid"},m)));try{t.displayName="mermaidLoadContent",t.__docgenInfo={description:"",displayName:"mermaidLoadContent",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/mermaid.tsx#mermaidLoadContent"]={docgenInfo:t.__docgenInfo,name:"mermaidLoadContent",path:"src/components/mermaid.tsx#mermaidLoadContent"})}catch(m){}try{i.displayName="Mermaid",i.__docgenInfo={description:"",displayName:"Mermaid",props:{code:{defaultValue:null,description:"",name:"code",required:!0,type:{name:"string"}},config:{defaultValue:null,description:"",name:"config",required:!1,type:{name:"any"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/mermaid.tsx#Mermaid"]={docgenInfo:i.__docgenInfo,name:"Mermaid",path:"src/components/mermaid.tsx#Mermaid"})}catch(m){}},"./node_modules/moment-mini/locale sync recursive ^\\.\\/.*$":(k,p,e)=>{var a={"./locale":"./node_modules/moment-mini/locale/locale.js","./locale.js":"./node_modules/moment-mini/locale/locale.js"};function l(t){var i=_(t);return e(i)}function _(t){if(!e.o(a,t)){var i=new Error("Cannot find module '"+t+"'");throw i.code="MODULE_NOT_FOUND",i}return a[t]}l.keys=function(){return Object.keys(a)},l.resolve=_,k.exports=l,l.id="./node_modules/moment-mini/locale sync recursive ^\\.\\/.*$"},"./src/components/breadcrumb/0-description/autogen.readme.md":k=>{"use strict";k.exports=`# Breadcrumb

Mit Hilfe der **Breadcrumb**-Komponente kann der Pfad zur aktuellen Position einer Webseite in einer hierarchischen Struktur dargestellt werden.

## Funktionsweise

Die **Breadcrumb**-Komponente zeigt die aktuelle Position einer Webseite in einer horizontalen Navigationsstruktur an. Das jeweils letzte Element rechts stellt die aktuelle Seite selbst dar.
Diese ist nicht mit einem link versehen. Alle Elemente links der aktuellen Seite sind mit einem Link auf die verkn\xFCpfte Seite versehen.

## Konstruktion

### Code

> Um das Zusammenspiel von Komponenten (HTML) und Kontroller (TypeScript) gemeinsam darzustellen, wurden alle Code-Beispiele auf dieser Seite mit den Web Components im TSX geschrieben.

\`\`\`tsx
<div>
	<kol-breadcrumb _links='[{"_label":"Startseite","_href":"#/"},{"_label":"Unterseite von Startseite","_href":"#/unterseite"}]'></kol-breadcrumb>
</div>
\`\`\`

### Beispiel

<kol-breadcrumb _links='[{"_label":"Startseite","_href":"#/"},{"_label":"Unterseite von Startseite","_href":"#/unterseite"}]'></kol-breadcrumb>

## Verwendung

### Definition der Links

Das Attribut **\\_links** erwartet die \xDCbergabe eines JSON-Objekts, aus dem sich der Aufbau der anzuzeigenden Breadcrumb-Pfade ergibt. Das JSON-Objekt \xFCbergibt beliebig viele Elemente, die jeweils eine Anzahl an Eigenschaften und Werten bereitstellen.

Jede Eigenschaft und der zugeh\xF6rige Wert m\xFCssen in doppelten Anf\xFChrungszeichen gesetzt werden.

Einzelne Elemente werden in geschweiften Klammern und durch **Komma** separiert geschrieben.

Das gesamte JSON-Objekt muss in eckigen Klammern an das Attribut **\`_links\`** \xFCbergeben werden.

<b>Folgende Eigenschaften stehen zur Verf\xFCgung:</b>

- **\`_href\`** \xFCbergibt den Link, der f\xFCr dieses Element verwendet werden soll.
- **\`_icon\`** (optional) \xFCbergibt den Namen des Icon, wenn zus\xE4tzlich zum Text des Elements noch ein Icon angezeigt werden soll. Es stehen alle Icons aus der **Icofont-Bibliothek** zur Verf\xFCgung
- **\`_iconOnly\`** (optional). Wenn der Wert auf **true** gesetzt wird, erscheint im Link ausschlie\xDFlich das Icon, ohne weiteren Text. Die Eigenschaft \`_icon\` muss gesetzt werden.
- **\`_label\`** \xFCbergibt den Text, der f\xFCr dieses Element angezeigt werden soll.
- **\`_links\`** \xFCbergibt den Pfadaufbau der Komponente als JSON-Objekt.

Beispiel f\xFCr ein JSON-Objekt, das an das Attribut **\\_links** \xFCbergeben wird:

\`\`\`tsx
[
	{
		_label: 'Startseite',
		_href: '#/',
		_icon: 'home',
		_iconOnly: true,
	},
	{
		_label: '1. Unterseite',
		_href: '/1_unterseite',
	},
	{
		_label: '2. Unterseite',
		_href: '/2_unterseite',
	},
];
\`\`\`

<kol-breadcrumb _links='[{"_label":"Startseite","_href":"#/","_icon":"home","_icon-only": "true"},{"_label":"1. Unterseite","_href":"#/1_unterseite"},{"_label":"2. Unterseite","_href":"#/2_unterseite"}]'></kol-breadcrumb>

### Best practices

- Die **Breadcrumb**-Komponente ist ein wichtiges Element f\xFCr eine effektive Suchmaschinenoptimierung Ihrer Webseite.
- Auch f\xFCr Benutzer:innen der Webseite bietet eine Breadcrumb-Navigation zus\xE4tzliche \xDCbersicht.
- Positionieren Sie die Breadcrumb m\xF6glichst weit oben auf Ihren Inhaltsseiten, um zu gew\xE4hrleisten, dass Suchmaschinen diese als zus\xE4tzliche Informationsquelle zur Struktur Ihrer Webseite nutzen k\xF6nnen.
- Positionieren Sie die Breadcrumb-Komponente auf jeder Inhaltsseite Ihre Webseite. Sie gew\xE4hrleisten so, dass sich Besucher:innen jederzeit zurecht finden und die aktuelle Position erkennen k\xF6nnen.
- Vermeiden Sie, die Breadcrumb-Navigation auf der Startseite zu positionieren.
- Verwenden Sie eine Breadcrumb-Navigation nur dann, wenn sie f\xFCr Benutzer:innen einen wirklichen Mehrwert bieten.
- Auf mobilen Varianten einer Webseite ist eine Breadcrumb-Navigation m\xF6glicherweise nicht sinnvoll.

### Anwendungsf\xE4lle

Eine Breadcrumb-Navigation ist auf einer gro\xDFen Mehrzahl der aktuellen Webseiten zu finden. Somit beschreibt der klassische Anwendungsfall den generellen Einbau dieser Komponente.

## Barrierefreiheit

> Die optische Standardausgabe der Komponente ist auf die Umsetzung der Barrierefreiheit hin optimiert. Wenn Sie eigene Custom Styles verwenden, kann das zu einer Einschr\xE4nkung der Barrierefreiheit f\xFChren.

Achten Sie im Sinne der optimalen Barrierefreiheit darauf, das Attribut \`_aria-label\` korrekt auszuzeichnen. Beachten Sie diesen Hinweis insbesondere dann, wenn Sie die Option \`_icon-only\` verwenden und so auf einen beschreibenden Text im Link verzichten w\xFCrden.

Beachten Sie, dass auch das letzte Element in der Breadcrumb-Komponente per Tab-Taste angesprungen werden kann, obwohl dort kein Link hinterlegt ist. Hierdurch kann auch dieses Element von Screenreader erreicht und vorgelesen werden.

### Tastatursteuerung

| Taste   | Funktion                                                     |
| ------- | ------------------------------------------------------------ |
| \`Tab\`   | Springt die einzelnen Elemente der Breadcrumb-Navigation an. |
| \`Enter\` | \xD6ffnet den Link des aktuellen Elements.                      |

## Links und Referenzen

- https://www.w3.org/TR/wai-aria-practices/#breadcrumb

<!-- Auto Generated Below -->


## Eigenschaften

| Property                  | Attribute     | Description                                                                  | Type                       | Default     |
| ------------------------- | ------------- | ---------------------------------------------------------------------------- | -------------------------- | ----------- |
| \`_ariaLabel\` _(required)_ | \`_aria-label\` | Gibt den Text an, der die Navigation von anderen Navigationen differenziert. | \`string\`                   | \`undefined\` |
| \`_links\` _(required)_     | \`_links\`      | Gibt die geordnete Liste der Seitenhierarchie in Links an.                   | \`NavLinkProps[] | string\` | \`undefined\` |


## Shadow Parts

| Part          | Description                                |
| ------------- | ------------------------------------------ |
| \`"link"\`      | Erm\xF6glicht das Stylen der Links.           |
| \`"separator"\` | Erm\xF6glicht das \xC4ndern des Separator-Icons. |


## Abh\xE4ngigkeiten

### Abh\xE4ngig von

- kol-icon
- kol-link

### Graph
<div class="mermaid">
graph TD;
  kol-breadcrumb --> kol-icon
  kol-breadcrumb --> kol-link
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
  style kol-breadcrumb fill:#f9f,stroke:#333,stroke-width:4px
</div>

----------------------------------------------


`}}]);
