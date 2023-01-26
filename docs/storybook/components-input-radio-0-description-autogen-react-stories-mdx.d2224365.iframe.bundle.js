(self.webpackChunk_public_ui_storybook=self.webpackChunk_public_ui_storybook||[]).push([[221],{"./src/components/input-radio/0-description/autogen.react.stories.mdx":(b,k,e)=>{"use strict";e.r(k),e.d(k,{__namedExportsOrder:()=>A,__page:()=>O,default:()=>L});var s=e("./node_modules/core-js/modules/es.object.keys.js"),l=e.n(s),_=e("./node_modules/core-js/modules/es.array.index-of.js"),t=e.n(_),i=e("./node_modules/core-js/modules/es.symbol.js"),u=e.n(i),f=e("./node_modules/core-js/modules/es.function.bind.js"),v=e.n(f),y=e("./node_modules/core-js/modules/es.object.assign.js"),I=e.n(y),x=e("./node_modules/react/index.js"),c=e("./node_modules/@mdx-js/react/dist/esm.js"),g=e("./node_modules/@storybook/addon-docs/dist/esm/index.js"),j=e("./src/components/input-radio/0-description/autogen.readme.md"),T=e("./src/components/mermaid.tsx"),D=["components"];function h(){return h=Object.assign?Object.assign.bind():function(n){for(var a=1;a<arguments.length;a++){var r=arguments[a];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(n[o]=r[o])}return n},h.apply(this,arguments)}function w(n,a){if(n==null)return{};var r=M(n,a),o,d;if(Object.getOwnPropertySymbols){var m=Object.getOwnPropertySymbols(n);for(d=0;d<m.length;d++)o=m[d],!(a.indexOf(o)>=0)&&Object.prototype.propertyIsEnumerable.call(n,o)&&(r[o]=n[o])}return r}function M(n,a){if(n==null)return{};var r={},o=Object.keys(n),d,m;for(m=0;m<o.length;m++)d=o[m],!(a.indexOf(d)>=0)&&(r[d]=n[d]);return r}var R={},C="wrapper";function E(n){var a=n.components,r=w(n,D);return(0,c.kt)(C,h({},R,r,{components:a,mdxType:"MDXLayout"}),(0,c.kt)(g.h_,{title:"React/InputRadio/Beschreibung",mdxType:"Meta"}),(0,c.kt)(g.dk,{mdxType:"Description"},j),(0,c.kt)("script",null,"() =>",(0,T.m)()))}E.displayName="MDXContent",E.isMDXComponent=!0;var O=function(){throw new Error("Docs-only story")};O.parameters={docsOnly:!0};var p={title:"React/InputRadio/Beschreibung",includeStories:["__page"]},P={};p.parameters=p.parameters||{},p.parameters.docs=Object.assign({},p.parameters.docs||{},{page:function(){return(0,c.kt)(g.aT,{mdxStoryNameToKey:P,mdxComponentAnnotations:p},(0,c.kt)(E,null))}});const L=p;var A=["__page"]},"./src/components/mermaid.tsx":(b,k,e)=>{"use strict";e.d(k,{G:()=>i,m:()=>t});var s=e("./node_modules/react/index.js"),l=e("./node_modules/mermaid/dist/mermaid.core.mjs");let _;const t=u=>{u&&l.Z.initialize(Object.assign({startOnLoad:!0},u)),clearTimeout(_),_=setTimeout(()=>{clearTimeout(_),l.Z.contentLoaded()},500)},i=({code:u,config:f,children:v})=>((0,s.useEffect)(()=>{t(f)},[]),s.createElement("div",null,s.createElement("div",{className:"mermaid"},u)));try{t.displayName="mermaidLoadContent",t.__docgenInfo={description:"",displayName:"mermaidLoadContent",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/mermaid.tsx#mermaidLoadContent"]={docgenInfo:t.__docgenInfo,name:"mermaidLoadContent",path:"src/components/mermaid.tsx#mermaidLoadContent"})}catch(u){}try{i.displayName="Mermaid",i.__docgenInfo={description:"",displayName:"Mermaid",props:{code:{defaultValue:null,description:"",name:"code",required:!0,type:{name:"string"}},config:{defaultValue:null,description:"",name:"config",required:!1,type:{name:"any"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/mermaid.tsx#Mermaid"]={docgenInfo:i.__docgenInfo,name:"Mermaid",path:"src/components/mermaid.tsx#Mermaid"})}catch(u){}},"./node_modules/moment-mini/locale sync recursive ^\\.\\/.*$":(b,k,e)=>{var s={"./locale":"./node_modules/moment-mini/locale/locale.js","./locale.js":"./node_modules/moment-mini/locale/locale.js"};function l(t){var i=_(t);return e(i)}function _(t){if(!e.o(s,t)){var i=new Error("Cannot find module '"+t+"'");throw i.code="MODULE_NOT_FOUND",i}return s[t]}l.keys=function(){return Object.keys(s)},l.resolve=_,b.exports=l,l.id="./node_modules/moment-mini/locale sync recursive ^\\.\\/.*$"},"./src/components/input-radio/0-description/autogen.readme.md":b=>{"use strict";b.exports=`# InputRadio

Die Komponente ** InputRadio** besteht aus einer Sammlung von Radio-Elementen und stellt so eine Auswahlm\xF6glichkeit zwischen verschiedenen Werten dar. Es kann immer nur ein einzelner Wert zur gleichen Zeit ausgew\xE4hlt werden. Ausgew\xE4hlte Radio-Elemente werden i.d.R. mit einem gef\xFCllten und optisch hervorgehobenen Kreis dargestellt.

<kol-alert _alert _heading="Hinweis" _level="1" _type="info">
  Das Input-Radio dient der Abbildung einer Auswahlm\xF6glichkeit bei der mindestens und maximal eine Auswahl getroffen werden kann. Das bedeutet, dass ein Input-Radio nicht einzeln vorkommen kann. Aufgrund dessen haben wir die Komponente als Listen-Komponente umgesetzt.
</kol-alert><br/>

## Konstruktion

### Code

> Um das Zusammenspiel von Komponenten (HTML) und Kontroller (TypeScript) gemeinsam darzustellen, wurden alle Code-Beispiele auf dieser Seite mit den Web Components im TSX geschrieben.

\`\`\`tsx
<kol-input-radio
	_id="anrede"
	_name="anrede"
	_list='[{"label":"Herr","value":"Herr"},{"label":"Frau","value":"Frau"}, {"label":"Firma","value":"Firma"}]'
></kol-input-radio>
\`\`\`

### Beispiel

<kol-input-radio _id="anrede" _name="anrede" _list='[{"label":"Herr","value":"Herr"},{"label":"Frau","value":"Frau"}, {"label":"Firma","value":"Firma"}]'></kol-input-radio>

## Verwendung

Die einzelnen Radio-Elemente innerhalb der Komponente ** InputRadio** werden \xFCber dass Attribut **_\\_list_** als JSON-Objekt \xFCbergeben.

Das JSON-Objekt erwartet je Radio-Element folgende Werte:

**\`label\`** = Beschriftung des Radio-Elements

**\`value\`** = Wert des Radio-Elements

Beispiel f\xFCr die Erstellung des JSON-Objekts zur Definition der Radio-Elemente:

\`\`\`tsx
[
	{
		label: 'Herr',
		value: 'Herr',
	},
	{
		label: 'Frau',
		value: 'Frau',
	},
	{
		label: 'Firma',
		value: 'Firma',
	},
];
\`\`\`

### Best practices

- Achten sie darauf, die Pflichtfelder \`id\` und \`name\` korrekt zu setzen.
- Es wird immer mindestens ein Wert ausgew\xE4hlt. \xC4hnlich dem Verhalten einer Select-Auswahl. (https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/radio#selecting_a_radio_button_by_default)

## Barrierefreiheit

> Die optische Standardausgabe der Komponente ist auf die Umsetzung der Barrierefreiheit hin optimiert. Wenn Sie eigene Custom Styles verwenden, kann das zu einer Einschr\xE4nkung der Barrierefreiheit f\xFChren.

### Tastatursteuerung

| Taste          | Funktion                                                                                         |
| -------------- | ------------------------------------------------------------------------------------------------ |
| \`Tab\`          | Fokussiert das erste Radio-Element, aktiviert es aber nicht aus.                                 |
| \`Leer\`         | Aktiviert das erste Radio-Element, nachdem die RadioGroup \xFCber die Tab-Taste angesprungen wurde. |
| \`Pfeil-Tasten\` | Durchlaufen alle Radio-Elemente und aktivieren das gerade fokussierte Element.                   |

## Links und Referenzen

- https://www.w3.org/TR/wai-aria-practices/#radiobutton
- https://www.w3schools.com/tags/att_input_type_radio.asp
- https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/radio
- https://medium.com/@gavyn/til-autofocus-inputs-are-an-accessibility-problem-32ced60c3109

<!-- Auto Generated Below -->


## Eigenschaften

| Property             | Attribute      | Description                                                                                | Type                                                                                     | Default      |
| -------------------- | -------------- | ------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------- | ------------ |
| \`_accessKey\`         | \`_access-key\`  | Gibt an, mit welcher Tastenkombination man das Input ausl\xF6sen oder fokussieren kann.       | \`string | undefined\`                                                                    | \`undefined\`  |
| \`_alert\`             | \`_alert\`       | Gibt an, ob die Fehlermeldung vorgelesen werden soll, wenn es eine gibt.                   | \`boolean | undefined\`                                                                   | \`true\`       |
| \`_disabled\`          | \`_disabled\`    | Gibt an, ob das Eingabefeld aktiviert oder deaktiviert ist.                                | \`boolean | undefined\`                                                                   | \`undefined\`  |
| \`_error\`             | \`_error\`       | Gibt den Text f\xFCr eine Fehlermeldung an.                                                   | \`string | undefined\`                                                                    | \`undefined\`  |
| \`_hideLabel\`         | \`_hide-label\`  | Gibt an, ob das Eingabefeld kein sichtbares Label haben soll.                              | \`boolean | undefined\`                                                                   | \`undefined\`  |
| \`_hint\`              | \`_hint\`        | Gibt den Text f\xFCr eine Hinweistext an.                                                     | \`string | undefined\`                                                                    | \`''\`         |
| \`_id\` _(required)_   | \`_id\`          | Gibt die technische ID des Eingabefeldes an.                                               | \`string\`                                                                                 | \`undefined\`  |
| \`_list\` _(required)_ | \`_list\`        | Gibt die Liste der Optionen f\xFCr das Eingabefeld an.                                        | \`Option<W3CInputValue>[] | string\`                                                      | \`undefined\`  |
| \`_name\`              | \`_name\`        | Gibt den technischen Namen des Eingabefeldes an.                                           | \`string | undefined\`                                                                    | \`undefined\`  |
| \`_on\`                | --             | Gibt die EventCallback-Funktionen f\xFCr das Input-Event an.                                  | \`InputTypeOnBlur & InputTypeOnClick & InputTypeOnChange & InputTypeOnFocus | undefined\` | \`undefined\`  |
| \`_orientation\`       | \`_orientation\` | Gibt die Ausrichtung der LinkList an.                                                      | \`"horizontal" | "vertical" | undefined\`                                                | \`'vertical'\` |
| \`_required\`          | \`_required\`    | Gibt an, ob das Eingabefeld ein Pflichtfeld ist.                                           | \`boolean | undefined\`                                                                   | \`undefined\`  |
| \`_tabIndex\`          | \`_tab-index\`   | Gibt an, welchen Tab-Index dieses Input hat.                                               | \`number | undefined\`                                                                    | \`undefined\`  |
| \`_touched\`           | \`_touched\`     | Gibt an, ob dieses Eingabefeld von Nutzer:innen einmal besucht/ber\xFChrt wurde.              | \`boolean | undefined\`                                                                   | \`false\`      |
| \`_value\`             | \`_value\`       | Gibt den Wert der Radio an. (Known Bug: https://github.com/ionic-team/stencil/issues/3902) | \`number | string | undefined\`                                                          | \`undefined\`  |


## Abh\xE4ngigkeiten

### Verwendet von

 - kol-input-radio-group

### Abh\xE4ngig von

- kol-input
- kol-alert

### Graph
<div class="mermaid">
graph TD;
  kol-input-radio --> kol-input
  kol-input-radio --> kol-alert
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
  kol-input-radio-group --> kol-input-radio
  style kol-input-radio fill:#f9f,stroke:#333,stroke-width:4px
</div>

----------------------------------------------


`}}]);
