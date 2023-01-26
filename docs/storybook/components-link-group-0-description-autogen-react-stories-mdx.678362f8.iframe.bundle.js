(self.webpackChunk_public_ui_storybook=self.webpackChunk_public_ui_storybook||[]).push([[667],{"./src/components/link-group/0-description/autogen.react.stories.mdx":(k,b,e)=>{"use strict";e.r(b),e.d(b,{__namedExportsOrder:()=>x,__page:()=>L,default:()=>P});var a=e("./node_modules/core-js/modules/es.object.keys.js"),d=e.n(a),_=e("./node_modules/core-js/modules/es.array.index-of.js"),o=e.n(_),t=e("./node_modules/core-js/modules/es.symbol.js"),u=e.n(t),g=e("./node_modules/core-js/modules/es.function.bind.js"),E=e.n(g),w=e("./node_modules/core-js/modules/es.object.assign.js"),S=e.n(w),B=e("./node_modules/react/index.js"),c=e("./node_modules/@mdx-js/react/dist/esm.js"),f=e("./node_modules/@storybook/addon-docs/dist/esm/index.js"),O=e("./src/components/link-group/0-description/autogen.readme.md"),v=e("./src/components/mermaid.tsx"),j=["components"];function h(){return h=Object.assign?Object.assign.bind():function(n){for(var s=1;s<arguments.length;s++){var r=arguments[s];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(n[i]=r[i])}return n},h.apply(this,arguments)}function D(n,s){if(n==null)return{};var r=T(n,s),i,l;if(Object.getOwnPropertySymbols){var m=Object.getOwnPropertySymbols(n);for(l=0;l<m.length;l++)i=m[l],!(s.indexOf(i)>=0)&&Object.prototype.propertyIsEnumerable.call(n,i)&&(r[i]=n[i])}return r}function T(n,s){if(n==null)return{};var r={},i=Object.keys(n),l,m;for(m=0;m<i.length;m++)l=i[m],!(s.indexOf(l)>=0)&&(r[l]=n[l]);return r}var M={},C="wrapper";function y(n){var s=n.components,r=D(n,j);return(0,c.kt)(C,h({},M,r,{components:s,mdxType:"MDXLayout"}),(0,c.kt)(f.h_,{title:"React/LinkGroup/Beschreibung",mdxType:"Meta"}),(0,c.kt)(f.dk,{mdxType:"Description"},O),(0,c.kt)("script",null,"() =>",(0,v.m)()))}y.displayName="MDXContent",y.isMDXComponent=!0;var L=function(){throw new Error("Docs-only story")};L.parameters={docsOnly:!0};var p={title:"React/LinkGroup/Beschreibung",includeStories:["__page"]},A={};p.parameters=p.parameters||{},p.parameters.docs=Object.assign({},p.parameters.docs||{},{page:function(){return(0,c.kt)(f.aT,{mdxStoryNameToKey:A,mdxComponentAnnotations:p},(0,c.kt)(y,null))}});const P=p;var x=["__page"]},"./src/components/mermaid.tsx":(k,b,e)=>{"use strict";e.d(b,{G:()=>t,m:()=>o});var a=e("./node_modules/react/index.js"),d=e("./node_modules/mermaid/dist/mermaid.core.mjs");let _;const o=u=>{u&&d.Z.initialize(Object.assign({startOnLoad:!0},u)),clearTimeout(_),_=setTimeout(()=>{clearTimeout(_),d.Z.contentLoaded()},500)},t=({code:u,config:g,children:E})=>((0,a.useEffect)(()=>{o(g)},[]),a.createElement("div",null,a.createElement("div",{className:"mermaid"},u)));try{o.displayName="mermaidLoadContent",o.__docgenInfo={description:"",displayName:"mermaidLoadContent",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/mermaid.tsx#mermaidLoadContent"]={docgenInfo:o.__docgenInfo,name:"mermaidLoadContent",path:"src/components/mermaid.tsx#mermaidLoadContent"})}catch(u){}try{t.displayName="Mermaid",t.__docgenInfo={description:"",displayName:"Mermaid",props:{code:{defaultValue:null,description:"",name:"code",required:!0,type:{name:"string"}},config:{defaultValue:null,description:"",name:"config",required:!1,type:{name:"any"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/mermaid.tsx#Mermaid"]={docgenInfo:t.__docgenInfo,name:"Mermaid",path:"src/components/mermaid.tsx#Mermaid"})}catch(u){}},"./node_modules/moment-mini/locale sync recursive ^\\.\\/.*$":(k,b,e)=>{var a={"./locale":"./node_modules/moment-mini/locale/locale.js","./locale.js":"./node_modules/moment-mini/locale/locale.js"};function d(o){var t=_(o);return e(t)}function _(o){if(!e.o(a,o)){var t=new Error("Cannot find module '"+o+"'");throw t.code="MODULE_NOT_FOUND",t}return a[o]}d.keys=function(){return Object.keys(a)},d.resolve=_,k.exports=d,d.id="./node_modules/moment-mini/locale sync recursive ^\\.\\/.*$"},"./src/components/link-group/0-description/autogen.readme.md":k=>{"use strict";k.exports=`# LinkGroup

Die **LinkGroup**-Komponente bildet einen umfassenden Container f\xFCr eine listenartige, vertikale oder horizontale Darstellung von Links. Sie rendert eine auf Barrierefreiheit optimierte Liste von Links, die als Text, als Icon oder auch in Kombination ausgegeben werden kann. M\xF6glich ist auch die Ausgabe von versteckten Links.

## Konstruktion

### Code

> Um das Zusammenspiel von Komponenten (HTML) und Kontroller (TypeScript) gemeinsam darzustellen, wurden alle Code-Beispiele auf dieser Seite mit den Web Components im TSX geschrieben.

\`\`\`tsx
<kol-link-group
	_aria-label="Einfache LinkGroup"
	_caption="\xDCberschrift der LinkGroup"
	_links="[{'_label':'Link 1','_href':'https://www.w3.org'},{'_label':'Link 2','_href':'https://www.w3.org'},{'_label':'Link 3','_href':'https://www.w3.org'}]"
	_list-style-type="disc"
	_orientation="'vertical"
></kol-link-group>
\`\`\`

### Beispiel

<kol-link-group _aria-label="Einfache LinkGroup" _caption="\xDCberschrift der LinkGroup" _links="[{'_label':'Link 1','_href':'https://www.w3.org'},{'_label':'Link 2','_href':'https://www.w3.org'},{'_label':'Link 3','_href':'https://www.w3.org'}]" _list-style-type="disc" _orientation="'vertical"></kol-link-group>

## Verwendung

### Links

Die auszugebenden Links werden als JSON-Objekt an das Attribut \`_links\` \xFCbergeben.

\`\`\`tsx
[
	{ _label: 'Link 1', _href: 'https://www.w3.org' },
	{ _label: 'Link 2', _href: 'https://www.w3.org' },
	{ _label: 'Link 3', _href: 'https://www.w3.org' },
];
\`\`\`

Die Konstruktion der einzelnen **Links**, die innerhalb der JSON-Struktur \xFCber das Attribut **\\_links** \xFCbergeben wird, ist im Abschnitt **Links** beschrieben.

### \xDCberschrift

Die \xDCberschrift der LinkGroup wird \xFCber das Attribut \`_caption\` \xFCbergeben.

### Ausrichtung

\xDCber das Attribut \`_orientation\` kann die Ausrichtung der LinkGroup bestimmt werden. Standardwert ist \`_orientation="vertical"\`. F\xFCr eine horizontale Anzeige den Wert \`horizontal\` verwenden.

### List-Style-Type

\xDCber das Attribut \`_list-style-type\` kann bestimmt werden, mit welchem Symbol die einzelnen Zeilen der Group dargestellt werden sollen. Es stehen vier M\xF6glichkeiten zur Auswahl.

- \`disc\`
- \`circle\`
- \`square\`
- \`none\`

<!--### Best practices-->

### Anwendungsf\xE4lle

#### LinkGroup innerhalb eines Flie\xDFtextes

<p>
  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea optio deleniti fuga quos molestias, voluptate nobis
  nemo, incidunt excepturi facilis, amet ducimus minus quae corporis eligendi cum distinctio. Fugit, repellendus.

<kol-link-group _aria-label="LinkGroup innerhalb eines Flie\xDFtextes" _links="[{'_label':'Link 1'},{'_label':'Link 2'},{'_label':'Link 3'}]"></kol-link-group>

Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea optio deleniti fuga quos molestias, voluptate nobis
nemo, incidunt excepturi facilis, amet ducimus minus quae corporis eligendi cum distinctio. Fugit, repellendus.

</p>

## Barrierefreiheit

> Die optische Standardausgabe der Komponente ist auf die Umsetzung der Barrierefreiheit hin optimiert. Wenn Sie eigene Custom Styles verwenden, kann das zu einer Einschr\xE4nkung der Barrierefreiheit f\xFChren.

### Tastatursteuerung

| Taste   | Funktion                                    |
| ------- | ------------------------------------------- |
| \`Tab\`   | Fokussiert das erste Element der LinkGroup. |
| \`Enter\` | Ruft den hinterlegten Link auf.             |

<!--## Links und Referenzen

<!-- Auto Generated Below -->


## Eigenschaften

| Property                  | Attribute          | Description                                                                                                                                                                                           | Type                                                                                                                                                                                                                  | Default      |
| ------------------------- | ------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------ |
| \`_ariaLabel\` _(required)_ | \`_aria-label\`      | Gibt den Text an, der die Navigation von anderen Navigationen differenziert.                                                                                                                          | \`string\`                                                                                                                                                                                                              | \`undefined\`  |
| \`_heading\`                | \`_heading\`         | Gibt die optionale \xDCberschrift zur Link-Gruppe an.                                                                                                                                                    | \`string | undefined\`                                                                                                                                                                                                 | \`undefined\`  |
| \`_level\`                  | \`_level\`           | Gibt die geordnete Liste der Seitenhierarchie in Links an.                                                                                                                                            | \`1 | 2 | 3 | 4 | 5 | 6 | undefined\`                                                                                                                                                                             | \`undefined\`  |
| \`_links\` _(required)_     | \`_links\`           | Gibt die geordnete Liste der Seitenhierarchie in Links an.                                                                                                                                            | \`NavLinkProps[] | string\`                                                                                                                                                                                            | \`undefined\`  |
| \`_listStyleType\`          | \`_list-style-type\` | Gibt den List-Style-Typen f\xFCr ungeordnete Listen aus. Wird bei horizontalen LinkGroups als Trenner verwendet                                                                                          | \`"circle" | "decimal" | "decimal-leading-zero" | "disc" | "lower-alpha" | "lower-greek" | "lower-latin" | "lower-roman" | "none" | "square" | "upper-alpha" | "upper-latin" | "upper-roman" | undefined\` | \`undefined\`  |
| \`_ordered\`                | \`_ordered\`         | <span class="text-red-500">**[DEPRECATED]**</span> Wird mittels der Property _list-style-type automatisch gesteuert. Gibt an, ob eine Ordered- oder eine Unordered-List verwendet werden soll.<br/><br/> | \`boolean | undefined\`                                                                                                                                                                                                | \`undefined\`  |
| \`_orientation\`            | \`_orientation\`     | Gibt die Ausrichtung der LinkList an.                                                                                                                                                                 | \`"horizontal" | "vertical" | undefined\`                                                                                                                                                                             | \`'vertical'\` |


## Abh\xE4ngigkeiten

### Abh\xE4ngig von

- kol-heading-wc
- kol-link

### Graph
<div class="mermaid">
graph TD;
  kol-link-group --> kol-heading-wc
  kol-link-group --> kol-link
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
  style kol-link-group fill:#f9f,stroke:#333,stroke-width:4px
</div>

----------------------------------------------


`}}]);
