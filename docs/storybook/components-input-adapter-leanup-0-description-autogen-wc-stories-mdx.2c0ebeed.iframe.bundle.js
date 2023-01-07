(self.webpackChunk_public_ui_storybook=self.webpackChunk_public_ui_storybook||[]).push([[4502],{"./src/components/input-adapter-leanup/0-description/autogen.wc.stories.mdx":(g,k,e)=>{"use strict";e.r(k),e.d(k,{__namedExportsOrder:()=>P,__page:()=>y,default:()=>T});var i=e("./node_modules/core-js/modules/es.object.keys.js"),l=e.n(i),m=e("./node_modules/core-js/modules/es.array.index-of.js"),t=e.n(m),r=e("./node_modules/core-js/modules/es.symbol.js"),u=e.n(r),h=e("./node_modules/core-js/modules/es.function.bind.js"),O=e.n(h),v=e("./node_modules/core-js/modules/es.object.assign.js"),x=e.n(v),K=e("./node_modules/react/index.js"),p=e("./node_modules/@mdx-js/react/dist/esm.js"),b=e("./node_modules/@storybook/addon-docs/dist/esm/index.js"),w=e("./src/components/input-adapter-leanup/0-description/autogen.readme.md"),C=e("./src/components/mermaid.tsx"),D=["components"];function E(){return E=Object.assign?Object.assign.bind():function(n){for(var s=1;s<arguments.length;s++){var a=arguments[s];for(var o in a)Object.prototype.hasOwnProperty.call(a,o)&&(n[o]=a[o])}return n},E.apply(this,arguments)}function j(n,s){if(n==null)return{};var a=I(n,s),o,d;if(Object.getOwnPropertySymbols){var _=Object.getOwnPropertySymbols(n);for(d=0;d<_.length;d++)o=_[d],!(s.indexOf(o)>=0)&&(!Object.prototype.propertyIsEnumerable.call(n,o)||(a[o]=n[o]))}return a}function I(n,s){if(n==null)return{};var a={},o=Object.keys(n),d,_;for(_=0;_<o.length;_++)d=o[_],!(s.indexOf(d)>=0)&&(a[d]=n[d]);return a}var L={},M="wrapper";function f(n){var s=n.components,a=j(n,D);return(0,p.kt)(M,E({},L,a,{components:s,mdxType:"MDXLayout"}),(0,p.kt)(b.h_,{title:"Web Components/InputAdapterLeanup/Beschreibung",mdxType:"Meta"}),(0,p.kt)(b.dk,{mdxType:"Description"},w),(0,p.kt)("script",null,"() =>",(0,C.m)()))}f.displayName="MDXContent",f.isMDXComponent=!0;var y=function(){throw new Error("Docs-only story")};y.parameters={docsOnly:!0};var c={title:"Web Components/InputAdapterLeanup/Beschreibung",includeStories:["__page"]},A={};c.parameters=c.parameters||{},c.parameters.docs=Object.assign({},c.parameters.docs||{},{page:function(){return(0,p.kt)(b.aT,{mdxStoryNameToKey:A,mdxComponentAnnotations:c},(0,p.kt)(f,null))}});const T=c;var P=["__page"]},"./src/components/mermaid.tsx":(g,k,e)=>{"use strict";e.d(k,{G:()=>r,m:()=>t});var i=e("./node_modules/react/index.js"),l=e("./node_modules/mermaid/dist/mermaid.core.mjs");let m;const t=u=>{u&&l.Z.initialize(Object.assign({startOnLoad:!0},u)),clearTimeout(m),m=setTimeout(()=>{clearTimeout(m),l.Z.contentLoaded()},500)},r=({code:u,config:h,children:O})=>((0,i.useEffect)(()=>{t(h)},[]),i.createElement("div",null,i.createElement("div",{className:"mermaid"},u)));try{t.displayName="mermaidLoadContent",t.__docgenInfo={description:"",displayName:"mermaidLoadContent",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/mermaid.tsx#mermaidLoadContent"]={docgenInfo:t.__docgenInfo,name:"mermaidLoadContent",path:"src/components/mermaid.tsx#mermaidLoadContent"})}catch(u){}try{r.displayName="Mermaid",r.__docgenInfo={description:"",displayName:"Mermaid",props:{code:{defaultValue:null,description:"",name:"code",required:!0,type:{name:"string"}},config:{defaultValue:null,description:"",name:"config",required:!1,type:{name:"any"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/mermaid.tsx#Mermaid"]={docgenInfo:r.__docgenInfo,name:"Mermaid",path:"src/components/mermaid.tsx#Mermaid"})}catch(u){}},"./node_modules/moment-mini/locale sync recursive ^\\.\\/.*$":(g,k,e)=>{var i={"./locale":"./node_modules/moment-mini/locale/locale.js","./locale.js":"./node_modules/moment-mini/locale/locale.js"};function l(t){var r=m(t);return e(r)}function m(t){if(!e.o(i,t)){var r=new Error("Cannot find module '"+t+"'");throw r.code="MODULE_NOT_FOUND",r}return i[t]}l.keys=function(){return Object.keys(i)},l.resolve=m,g.exports=l,l.id="./node_modules/moment-mini/locale sync recursive ^\\.\\/.*$"},"./src/components/input-adapter-leanup/0-description/autogen.readme.md":g=>{"use strict";g.exports=`# InputAdapterLeanup

Die **InputAdapterLeanup**-Komponente wird im Zusammenhang mit der Nutzung von beliebigen Input-Komponenten innerhalb eines Formulars verwendet. Sie dient als technischer Container, der die jeweilige Input-Komponente als Control \xFCbergeben wird. Auf diese Weise wird die vollst\xE4ndige, datenseitige Steuerung der Input-Komponente \xFCber das **InputAdapterLeanup** gew\xE4hrleistet. Die Input-Komponente dient allein der optischen bzw. layouttechnischen Ausgabe.

## \u{1F525} Refactoring

> Der Leanup-Adapter erm\xF6glicht das Framework-agnostische Handlen von Formularen, deren Werte, Validatoren, Formattern, Parsern und vieles mehr. Initial wurde der Adapter innerhalb von KoliBri umgesetzt, da zun\xE4chst die Funktionalit\xE4t im Fokus stand. Nun erfolgen \xC4nderungen (Refactorings) alles in den richtigen Dom\xE4nen zu verorten. Dazu muss die Komponente \`KolInputAdapterLeanup\` durch eine Leanup-Komponente (\`LeanInputAdapter\`) ersetzt und in die Verantwortung des Leanup-Teams gegeben werden. Dies ist mittlerweile geschehen und wie folgt nutzbar.

### Installation

\`npm i @leanup/form @leanup/kolibri-components\` und optional f\xFCr React \`npm i @leanup/kolibri-react\`

### Integration

#### Statische Integration (HTML)

\`\`\`html
...
<head>
	...
	<script type="module" src="assets/@public-ui/components/www/build/kolibri.esm.js"><\/script>
	<script type="module" src="assets/@leanup/kolibri-components/www/build/leanup.esm.js"><\/script>
	...
</head>
...
\`\`\`

#### Dynamische Integration (JavaScript)

\`\`\`tsx
import { defineCustomElements as kolElements } from '@public-ui/components/dist/loader';
import { defineCustomElements as leanElements } from '@leanup/kolibri-components/dist/loader';
import { BMF } from '@public-ui/themes';

register([BMF], [kolElements, leanElements])
	.then(() => {
		const htmlElement = document.querySelector<HTMLDivElement>('div#app');
		if (htmlElement instanceof HTMLElement) {
			const root = createRoot(htmlElement);
			root.render(
				<Router>
					<AppComponent />
				</Router>
			);
		}
	})
	.catch(console.warn);
\`\`\`

### Verwendung

#### Statische Verwendung (HTML)

\`\`\`html
<lean-input-adapter _control="...">
	<kol-input-text ... />
</lean-input-adapter>
\`\`\`

#### Dynamische Verwendung (JavaScript)

\`\`\`jsx
<LeanInputAdapter _control="...">
	<KolInputText ... />
</LeanInputAdapter>
\`\`\`

## Konfiguration

Die **InputAdapterLeanup**-Komponente wird \xFCber das Hauptelement \`<kol-input-adapter-leanup'></kol-input-adapter-leanup>\` erzeugt. Ihm wird mit dem Attribut \`_control\` die gew\xFCnschte Input-Komponente \xFCbergeben. Innerhalb der **InputAdapterLeanup**-Komponente wird die eigentliche Input-Komponente geschrieben.

### Code

> Um das Zusammenspiel von Komponenten (HTML) und Kontroller (TypeScript) gemeinsam darzustellen, wurden alle Code-Beispiele auf dieser Seite mit den Web Components im TSX geschrieben.

\`\`\`tsx
<kol-input-adapter-leanup _control={this.ctrl.formLocation.getInput('location') as InputControl}>
	<kol-input-text _placeholder="Platzhaltertext" _type="text">
		Eingabefeld
	</kol-input-text>
</kol-input-adapter-leanup>
\`\`\`

### Beispiel

<kol-input-text _placeholder="Platzhaltertext" _type="text">Eingabefeld</kol-input-text>

## Verwendung

### Verwaltete Properties

Die Adapter-Komponente verwaltet folgende Properties automatisch, **die dann nicht mehr direkt an der reinen KoliBri-Komponente gesetzt werden k\xF6nnen**:

| Property     | Erl\xE4uterung                                                                                                                                            |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| \`_checked\`   | Handelt es sich bei der Eingabekomponente um eine Checkbox und ist der \`_value\` gleich \`true\`, dann wird \`_checked\` \`true\` gesetzt, ansonsten \`false\`. |
| \`_disabled\`  | \xDCber das \`Form\`- und \`InputControl\` kann k\xF6nnen alle bzw. ein Eingabefeld aktiviert und deaktiviert werden.                                            |
| \`_error\`     | Das \`Form-\` und \`InputControl\` werten automatisch die relevanten Validatoren aus und setzt die Fehlermeldung entsprechend.                             |
| \`_id\`        | Die eindeutige ID eines Eingabefeldes kann aus der Formularstruktur des \`FormControl\`'s und des enthaltenen \`InputControl\`'s abgeleitet werden.        |
| \`_name\`      | Der Name des Eingabefeldes kann aus dem \`InputControl\`'s abgeleitet werden.                                                                            |
| \`_on\`        | Der Adapter h\xE4ngt sich mit einem zus\xE4tzlichen Change-Listener in die Eingabekomponente ein, um \xC4nderungen \xFCbernehmen zu k\xF6nnen.                        |
| \`_required\`  | \xDCber das \`InputControl\` kann ein Eingabefeld erforderlich oder nicht erforderlich gesetzt werden.                                                      |
| \`_value\`     | Der Wert eines Eingabefeldes entspricht dem sogenannten View-Value des \`InputControl\`'s.                                                               |
| \`Label-Text\` | Wenn ein Label im \`InputControl\` gesetzt ist, dann wird es beim Rendern im HTML \xFCbernommen.                                                            |

<!--### Best practices

### Anwendungsf\xE4lle

## Links und Referenzen

<!-- Auto Generated Below -->


> **[DEPRECATED]** Use the separated lean-input-adapter from the \`@leanup/kolibri-components\` package.

## Abh\xE4ngigkeiten

### Abh\xE4ngig von

- kol-alert
- kol-link

### Graph
<div class="mermaid">
graph TD;
  kol-input-adapter-leanup --> kol-alert
  kol-input-adapter-leanup --> kol-link
  kol-alert --> kol-heading-wc
  kol-alert --> kol-button-wc
  kol-alert --> kol-icon
  kol-button-wc --> kol-span-wc
  kol-button-wc --> kol-tooltip
  kol-span-wc --> kol-icon
  kol-tooltip --> kol-badge
  kol-badge --> kol-span-wc
  kol-badge --> kol-button-wc
  kol-link --> kol-link-wc
  kol-link-wc --> kol-span-wc
  kol-link-wc --> kol-icon
  kol-link-wc --> kol-tooltip
  style kol-input-adapter-leanup fill:#f9f,stroke:#333,stroke-width:4px
</div>

----------------------------------------------


`}}]);
