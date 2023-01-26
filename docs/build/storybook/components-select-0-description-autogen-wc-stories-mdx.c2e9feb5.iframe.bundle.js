(self.webpackChunk_public_ui_storybook=self.webpackChunk_public_ui_storybook||[]).push([[4076],{"./src/components/select/0-description/autogen.wc.stories.mdx":(p,g,e)=>{"use strict";e.r(g),e.d(g,{__namedExportsOrder:()=>P,__page:()=>E,default:()=>A});var a=e("./node_modules/core-js/modules/es.object.keys.js"),d=e.n(a),_=e("./node_modules/core-js/modules/es.array.index-of.js"),t=e.n(_),r=e("./node_modules/core-js/modules/es.symbol.js"),u=e.n(r),f=e("./node_modules/core-js/modules/es.function.bind.js"),y=e.n(f),O=e("./node_modules/core-js/modules/es.object.assign.js"),I=e.n(O),K=e("./node_modules/react/index.js"),c=e("./node_modules/@mdx-js/react/dist/esm.js"),k=e("./node_modules/@storybook/addon-docs/dist/esm/index.js"),w=e("./src/components/select/0-description/autogen.readme.md"),j=e("./src/components/mermaid.tsx"),C=["components"];function h(){return h=Object.assign?Object.assign.bind():function(n){for(var s=1;s<arguments.length;s++){var i=arguments[s];for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(n[o]=i[o])}return n},h.apply(this,arguments)}function D(n,s){if(n==null)return{};var i=S(n,s),o,l;if(Object.getOwnPropertySymbols){var m=Object.getOwnPropertySymbols(n);for(l=0;l<m.length;l++)o=m[l],!(s.indexOf(o)>=0)&&Object.prototype.propertyIsEnumerable.call(n,o)&&(i[o]=n[o])}return i}function S(n,s){if(n==null)return{};var i={},o=Object.keys(n),l,m;for(m=0;m<o.length;m++)l=o[m],!(s.indexOf(l)>=0)&&(i[l]=n[l]);return i}var T={},x="wrapper";function v(n){var s=n.components,i=D(n,C);return(0,c.kt)(x,h({},T,i,{components:s,mdxType:"MDXLayout"}),(0,c.kt)(k.h_,{title:"Web Components/Select/Beschreibung",mdxType:"Meta"}),(0,c.kt)(k.dk,{mdxType:"Description"},w),(0,c.kt)("script",null,"() =>",(0,j.m)()))}v.displayName="MDXContent",v.isMDXComponent=!0;var E=function(){throw new Error("Docs-only story")};E.parameters={docsOnly:!0};var b={title:"Web Components/Select/Beschreibung",includeStories:["__page"]},M={};b.parameters=b.parameters||{},b.parameters.docs=Object.assign({},b.parameters.docs||{},{page:function(){return(0,c.kt)(k.aT,{mdxStoryNameToKey:M,mdxComponentAnnotations:b},(0,c.kt)(v,null))}});const A=b;var P=["__page"]},"./src/components/mermaid.tsx":(p,g,e)=>{"use strict";e.d(g,{G:()=>r,m:()=>t});var a=e("./node_modules/react/index.js"),d=e("./node_modules/mermaid/dist/mermaid.core.mjs");let _;const t=u=>{u&&d.Z.initialize(Object.assign({startOnLoad:!0},u)),clearTimeout(_),_=setTimeout(()=>{clearTimeout(_),d.Z.contentLoaded()},500)},r=({code:u,config:f,children:y})=>((0,a.useEffect)(()=>{t(f)},[]),a.createElement("div",null,a.createElement("div",{className:"mermaid"},u)));try{t.displayName="mermaidLoadContent",t.__docgenInfo={description:"",displayName:"mermaidLoadContent",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/mermaid.tsx#mermaidLoadContent"]={docgenInfo:t.__docgenInfo,name:"mermaidLoadContent",path:"src/components/mermaid.tsx#mermaidLoadContent"})}catch(u){}try{r.displayName="Mermaid",r.__docgenInfo={description:"",displayName:"Mermaid",props:{code:{defaultValue:null,description:"",name:"code",required:!0,type:{name:"string"}},config:{defaultValue:null,description:"",name:"config",required:!1,type:{name:"any"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/mermaid.tsx#Mermaid"]={docgenInfo:r.__docgenInfo,name:"Mermaid",path:"src/components/mermaid.tsx#Mermaid"})}catch(u){}},"./node_modules/moment-mini/locale sync recursive ^\\.\\/.*$":(p,g,e)=>{var a={"./locale":"./node_modules/moment-mini/locale/locale.js","./locale.js":"./node_modules/moment-mini/locale/locale.js"};function d(t){var r=_(t);return e(r)}function _(t){if(!e.o(a,t)){var r=new Error("Cannot find module '"+t+"'");throw r.code="MODULE_NOT_FOUND",r}return a[t]}d.keys=function(){return Object.keys(a)},d.resolve=_,p.exports=d,d.id="./node_modules/moment-mini/locale sync recursive ^\\.\\/.*$"},"./src/components/select/0-description/autogen.readme.md":p=>{"use strict";p.exports=`# Select

Die **Select**-Komponente erzeugt eine Auswahlliste, aus der eine oder mehrere vorgegebene M\xF6glichkeiten ausgew\xE4hlt werden k\xF6nnen.

## Konstruktion

### Code

> Um das Zusammenspiel von Komponenten (HTML) und Kontroller (TypeScript) gemeinsam darzustellen, wurden alle Code-Beispiele auf dieser Seite mit den Web Components im TSX geschrieben.

\`\`\`tsx
<kol-select
  _list="[{'label':'Herr','value':'0'},{'label':'Frau','value':'1'},{'label':'Firma','value':'2'}]"
  _value="['1']"
>
  Auswahlfeld
</kol-select>
<kol-select
  _list="[{'label':'Herr','value':'0'},{'label':'Frau','value':'1'},{'label':'Firma','value':'2'}]"
  _multiple
  _value="['0','2']"
>
  Auswahlfeld (Mehrfachauswahl)
</kol-select>
\`\`\`

### Beispiel

<kol-select _list="[{'label':'Herr','value':'0'},{'label':'Frau','value':'1'},{'label':'Firma','value':'2'}]" _value="['1']">Auswahlfeld</kol-select>

<kol-select _list="[{'label':'Herr','value':'0'},{'label':'Frau','value':'1'},{'label':'Firma','value':'2'}]" _multiple _value="['0','2']">Auswahlfeld (Mehrfachauswahl)</kol-select>

## Verwendung

Die Auswahlm\xF6glichkeiten, **_Option-List_**, werden \xFCber das Attribut **_\\_list_** als JSON-Objekt an die Komponente \xFCbergeben. Je Option m\xFCssen die Werte **\`label\`** und **\`value\`** angegeben werden.

Beispiel f\xFCr die Konstruktion des JSON-Objektes:

\`\`\`tsx
[
	{
		label: 'Herr',
		value: '0',
	},
	{
		label: 'Frau',
		value: '1',
	},
	{
		label: 'Firma',
		value: '2',
	},
];
\`\`\`

### Individuelle H\xF6he angeben

Mit der Property **\`_height\`** kann eine individuelle H\xF6he der Selectbox mittels CSS bestimmt werden. Die property erwartet einen String als \xDCbergabewert, der innerhalb des style-Attributes ausgegeben wird. Es ist daher erforderlich, auch die gew\xFCnschte Ausgabeeinheit, z.B. px oder em, mit zu \xFCbergeben.

\`\`\`tsx
<kol-select _height="85px"></kol-select>
\`\`\`

<!--### Best practices-->

## Barrierefreiheit

> Die optische Standardausgabe der Komponente ist auf die Umsetzung der Barrierefreiheit hin optimiert. Wenn Sie eigene Custom Styles verwenden, kann das zu einer Einschr\xE4nkung der Barrierefreiheit f\xFChren.

### Tastatursteuerung

| Taste               | Funktion                              |
| ------------------- | ------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| \`Tab\`               | Fokussiert das Auswahlfeld.           |
| \`Enter\`             | \xD6ffnet bzw.schlie\xDFt die Auswahlliste. |
| \`Pfeil-Tasten (oben | unten)\`                               | Wechselt in der Auswahlliste das aktivierte Element. Diese Funktion ist auch bei eingeklappter Auswahlliste aktiv. Bei Mehrfachauswahl muss zur Auswahl mehrerer Eintr\xE4ge zus\xE4tzlich die Shift-Taste gedr\xFCck gehalten werden. |

### \`Single-Select-Filter\` f\xFCr Select-Komponente

Die Select-Komponente liefert bei Auswahl eines Wertes eine Liste (Array) mit genau einem
Wert zur\xFCck (im Single-Modus). Das kann bei der weiteren Verarbeitung zu unn\xF6tigem Aufwand f\xFChren. Einfacher ist es hier, den Wert der Select-Komponente \xFCber einen <b>SingeSelectFormatter</b> zu Filtern. F\xFCgen Sie hierzu im Formular nachfolgende Klasse ein:

\`\`\`tsx
class SingleSelectFormatter extends AbstractFormatter {
	public format(value: unknown): unknown {
		return [value];
	}

	public parse(value: unknown): unknown {
		if (Array.isArray(value) && value.length > 0) {
			return value[0];
		}
		return value;
	}
}
\`\`\`

F\xFCgen Sie den Formatter anschlie\xDFend der Select-Komponente hinzu:

\`\`\`tsx
const singleSelectFormatHandler = new FormatHandler();
singleSelectFormatHandler.formatters.add([new SingleSelectFormatter()]);
(this.getInput('kategorie') as InputControl).setFormatHandler(singleSelectFormatHandler);
\`\`\`

Beachten Sie, dass der FormatHandler zun\xE4chst in die Form importiert wird.

\`\`\`tsx
import {
  xxx...,
  xxx...,
  FormatHandler,
} from '@leanup/form';
\`\`\`

## Links und Referenzen

- https://medium.com/@gavyn/til-autofocus-inputs-are-an-accessibility-problem-32ced60c3109

<!-- Auto Generated Below -->


## Eigenschaften

| Property             | Attribute     | Description                                                                                                                           | Type                                                                                                                                                                                                          | Default     |
| -------------------- | ------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| \`_accessKey\`         | \`_access-key\` | Gibt an, mit welcher Tastenkombination man das Input ausl\xF6sen oder fokussieren kann.                                                  | \`string | undefined\`                                                                                                                                                                                         | \`undefined\` |
| \`_alert\`             | \`_alert\`      | Gibt an, ob die Fehlermeldung vorgelesen werden soll, wenn es eine gibt.                                                              | \`boolean | undefined\`                                                                                                                                                                                        | \`true\`      |
| \`_disabled\`          | \`_disabled\`   | Gibt an, ob das Eingabefeld aktiviert oder deaktiviert ist.                                                                           | \`boolean | undefined\`                                                                                                                                                                                        | \`undefined\` |
| \`_error\`             | \`_error\`      | Gibt den Text f\xFCr eine Fehlermeldung an.                                                                                              | \`string | undefined\`                                                                                                                                                                                         | \`undefined\` |
| \`_height\`            | \`_height\`     | <span class="text-red-500">**[DEPRECATED]**</span> Use _size instead.<br/><br/>Gibt an, ob eine individuelle H\xF6he \xFCbergeben werden soll. | \`string | undefined\`                                                                                                                                                                                         | \`undefined\` |
| \`_hideLabel\`         | \`_hide-label\` | Gibt an, ob das Eingabefeld kein sichtbares Label haben soll.                                                                         | \`boolean | undefined\`                                                                                                                                                                                        | \`undefined\` |
| \`_hint\`              | \`_hint\`       | Gibt den Text f\xFCr eine Hinweistext an.                                                                                                | \`string | undefined\`                                                                                                                                                                                         | \`''\`        |
| \`_icon\`              | \`_icon\`       | Erm\xF6glicht das Anzeigen von Icons links und/oder rechts am Rand des Eingabefeldes.                                                    | \`string | undefined | { right: string | KoliBriCustomIcon; left?: string | KoliBriCustomIcon | undefined; } | { right?: string | KoliBriCustomIcon | undefined; left: string | KoliBriCustomIcon; }\` | \`undefined\` |
| \`_id\` _(required)_   | \`_id\`         | Gibt die technische ID des Eingabefeldes an.                                                                                          | \`string\`                                                                                                                                                                                                      | \`undefined\` |
| \`_list\` _(required)_ | \`_list\`       | Gibt den technischen Namen des Eingabefeldes an.                                                                                      | \`SelectOption<W3CInputValue>[] | string\`                                                                                                                                                                     | \`undefined\` |
| \`_multiple\`          | \`_multiple\`   | Gibt an, ob mehrere Werte eingegeben werden k\xF6nnen.                                                                                   | \`boolean | undefined\`                                                                                                                                                                                        | \`false\`     |
| \`_name\`              | \`_name\`       | Gibt den technischen Namen des Eingabefeldes an.                                                                                      | \`string | undefined\`                                                                                                                                                                                         | \`undefined\` |
| \`_on\`                | --            | Gibt die EventCallback-Funktionen f\xFCr das Input-Event an.                                                                             | \`InputTypeOnBlur & InputTypeOnClick & InputTypeOnChange & InputTypeOnFocus | undefined\`                                                                                                                      | \`undefined\` |
| \`_required\`          | \`_required\`   | Gibt an, ob die Selectbox ein Pflichtfeld ist.                                                                                        | \`boolean | undefined\`                                                                                                                                                                                        | \`undefined\` |
| \`_size\`              | \`_size\`       | Gibt an, wie viele Optionen im Drop-Down-Men\xFC sichtbar sein sollen.                                                                   | \`number | undefined\`                                                                                                                                                                                         | \`undefined\` |
| \`_tabIndex\`          | \`_tab-index\`  | Gibt an, welchen Tab-Index dieses Input hat.                                                                                          | \`number | undefined\`                                                                                                                                                                                         | \`undefined\` |
| \`_touched\`           | \`_touched\`    | Gibt an, ob dieses Eingabefeld von Nutzer:innen einmal besucht/ber\xFChrt wurde.                                                         | \`boolean | undefined\`                                                                                                                                                                                        | \`false\`     |
| \`_value\`             | \`_value\`      | Gibt den Wert des Eingabefeldes an.                                                                                                   | \`W3CInputValue[] | string | undefined\`                                                                                                                                                                      | \`undefined\` |


## Shadow Parts

| Part       | Description                               |
| ---------- | ----------------------------------------- |
| \`"select"\` | Erm\xF6glicht das Stylen des select-Knotens. |


## Abh\xE4ngigkeiten

### Verwendet von

 - kol-pagination

### Abh\xE4ngig von

- kol-input

### Graph
<div class="mermaid">
graph TD;
  kol-select --> kol-input
  kol-input --> kol-icon
  kol-input --> kol-button-wc
  kol-input --> kol-alert
  kol-button-wc --> kol-span-wc
  kol-button-wc --> kol-tooltip
  kol-span-wc --> kol-icon
  kol-tooltip --> kol-badge
  kol-badge --> kol-span-wc
  kol-badge --> kol-button-wc
  kol-alert --> kol-heading-wc
  kol-alert --> kol-button-wc
  kol-alert --> kol-icon
  kol-pagination --> kol-select
  style kol-select fill:#f9f,stroke:#333,stroke-width:4px
</div>

----------------------------------------------


`}}]);
