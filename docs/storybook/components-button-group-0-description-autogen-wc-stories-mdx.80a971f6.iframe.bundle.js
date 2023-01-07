(self.webpackChunk_public_ui_storybook=self.webpackChunk_public_ui_storybook||[]).push([[9823],{"./src/components/button-group/0-description/autogen.wc.stories.mdx":(h,b,e)=>{"use strict";e.r(b),e.d(b,{__namedExportsOrder:()=>K,__page:()=>B,default:()=>T});var a=e("./node_modules/core-js/modules/es.object.keys.js"),u=e.n(a),_=e("./node_modules/core-js/modules/es.array.index-of.js"),t=e.n(_),r=e("./node_modules/core-js/modules/es.symbol.js"),l=e.n(r),g=e("./node_modules/core-js/modules/es.function.bind.js"),E=e.n(g),O=e("./node_modules/core-js/modules/es.object.assign.js"),P=e.n(O),L=e("./node_modules/react/index.js"),c=e("./node_modules/@mdx-js/react/dist/esm.js"),f=e("./node_modules/@storybook/addon-docs/dist/esm/index.js"),v=e("./src/components/button-group/0-description/autogen.readme.md"),S=e("./src/components/mermaid.tsx"),j=["components"];function k(){return k=Object.assign?Object.assign.bind():function(n){for(var s=1;s<arguments.length;s++){var i=arguments[s];for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(n[o]=i[o])}return n},k.apply(this,arguments)}function D(n,s){if(n==null)return{};var i=w(n,s),o,d;if(Object.getOwnPropertySymbols){var m=Object.getOwnPropertySymbols(n);for(d=0;d<m.length;d++)o=m[d],!(s.indexOf(o)>=0)&&(!Object.prototype.propertyIsEnumerable.call(n,o)||(i[o]=n[o]))}return i}function w(n,s){if(n==null)return{};var i={},o=Object.keys(n),d,m;for(m=0;m<o.length;m++)d=o[m],!(s.indexOf(d)>=0)&&(i[d]=n[d]);return i}var M={},A="wrapper";function y(n){var s=n.components,i=D(n,j);return(0,c.kt)(A,k({},M,i,{components:s,mdxType:"MDXLayout"}),(0,c.kt)(f.h_,{title:"Web Components/ButtonGroup/Beschreibung",mdxType:"Meta"}),(0,c.kt)(f.dk,{mdxType:"Description"},v),(0,c.kt)("script",null,"() =>",(0,S.m)()))}y.displayName="MDXContent",y.isMDXComponent=!0;var B=function(){throw new Error("Docs-only story")};B.parameters={docsOnly:!0};var p={title:"Web Components/ButtonGroup/Beschreibung",includeStories:["__page"]},C={};p.parameters=p.parameters||{},p.parameters.docs=Object.assign({},p.parameters.docs||{},{page:function(){return(0,c.kt)(f.aT,{mdxStoryNameToKey:C,mdxComponentAnnotations:p},(0,c.kt)(y,null))}});const T=p;var K=["__page"]},"./src/components/mermaid.tsx":(h,b,e)=>{"use strict";e.d(b,{G:()=>r,m:()=>t});var a=e("./node_modules/react/index.js"),u=e("./node_modules/mermaid/dist/mermaid.core.mjs");let _;const t=l=>{l&&u.Z.initialize(Object.assign({startOnLoad:!0},l)),clearTimeout(_),_=setTimeout(()=>{clearTimeout(_),u.Z.contentLoaded()},500)},r=({code:l,config:g,children:E})=>((0,a.useEffect)(()=>{t(g)},[]),a.createElement("div",null,a.createElement("div",{className:"mermaid"},l)));try{t.displayName="mermaidLoadContent",t.__docgenInfo={description:"",displayName:"mermaidLoadContent",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/mermaid.tsx#mermaidLoadContent"]={docgenInfo:t.__docgenInfo,name:"mermaidLoadContent",path:"src/components/mermaid.tsx#mermaidLoadContent"})}catch(l){}try{r.displayName="Mermaid",r.__docgenInfo={description:"",displayName:"Mermaid",props:{code:{defaultValue:null,description:"",name:"code",required:!0,type:{name:"string"}},config:{defaultValue:null,description:"",name:"config",required:!1,type:{name:"any"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/mermaid.tsx#Mermaid"]={docgenInfo:r.__docgenInfo,name:"Mermaid",path:"src/components/mermaid.tsx#Mermaid"})}catch(l){}},"./node_modules/moment-mini/locale sync recursive ^\\.\\/.*$":(h,b,e)=>{var a={"./locale":"./node_modules/moment-mini/locale/locale.js","./locale.js":"./node_modules/moment-mini/locale/locale.js"};function u(t){var r=_(t);return e(r)}function _(t){if(!e.o(a,t)){var r=new Error("Cannot find module '"+t+"'");throw r.code="MODULE_NOT_FOUND",r}return a[t]}u.keys=function(){return Object.keys(a)},u.resolve=_,h.exports=u,u.id="./node_modules/moment-mini/locale sync recursive ^\\.\\/.*$"},"./src/components/button-group/0-description/autogen.readme.md":h=>{"use strict";h.exports=`# ButtonGroup

**Buttons** dienen dazu, Nutzer:innen Auswahlm\xF6glichkeiten f\xFCr Aktionen anzuzeigen und diese in einer klaren Hierarchie anzuordnen. Sie helfen den Nutzer:innen, die wichtigsten Aktionen einer Seite oder innerhalb eines Applikation zu finden und erm\xF6glichen es ihm, diese Aktionen auszuf\xFChren.

Die **ButtonGroup**-Komponente fasst mehrere Buttons zu einer optischen und funktionalen Einheit zusammen.

## Konstruktion

Die Komponente **ButtonGroup** besteht aus einem Hauptelement \`<kol-button-group></kol-button-group>\`. In ihm werden beliebig viele **Button**-Komponenten zu einer Gruppe zusammengefasst. Die einzelnen **Buttons** entsprechen in ihrer Konstruktion der Beschreibung
zur **Button**-Komponente.

### Code

> Um das Zusammenspiel von Komponenten (HTML) und Kontroller (TypeScript) gemeinsam darzustellen, wurden alle Code-Beispiele auf dieser Seite mit den Web Components im TSX geschrieben.

\`\`\`tsx
<kol-button-group>
  <kol-button _label="Speichern" _variant="primary"></<kol-button>
  <kol-button _label="Speichern & Schlie\xDFen" _variant="normal"></<kol-button>
  <kol-button _label="Abbrechen" _variant="secondary"></<kol-button>
  <kol-button _label="L\xF6schen" _variant="danger"></<kol-button>
  <kol-button _label="Ghost" _variant="ghost"></kol-button>
  <kol-button _label="Deaktiviert" _disabled></<kol-button>
</kol-button-group>
\`\`\`

### Beispiel

<kol-button-group> 
  <kol-button _label="Speichern" _variant="primary"></kol-button>
  <kol-button _label="Speichern & Schlie\xDFen" _variant="normal"></kol-button>
  <kol-button _label="Abbrechen" _variant="secondary"></kol-button>
  <kol-button _label="L\xF6schen" _variant="danger"></kol-button>
  <kol-button _label="Ghost" _variant="ghost"></kol-button>
  <kol-button _label="Deaktiviert" _disabled></kol-button>
</kol-button-group>

## Verwendung

### Einfache ButtonGroup

Im einfachsten Fall besteht die **ButtonGroup**-Komponente aus einer Liste beschrifteter Schaltfl\xE4chen. F\xFCr die Beschriftung der Buttons wird lediglich das Attribut **\`_label="Ihre Beschriftung"\`** verwendet.

### ButtonGroup mit Text, Icon und Text mit Icon

\xDCber das Attribut **\`_icon="xxx"\`** wird festgelegt, ob und welches Icon verwendet werden soll.

Eine \xDCbersicht \xFCber die zur Verf\xFCgung stehenden Icons in KoliBri finden Sie [hier](https://icofont.com/icons).

\xDCber das Attribut **\`_icon-only\`** legen Sie fest, ob nur das Icon angezeigt werden soll. Der Inhalt des Attributs **\`_label\`** wird nicht mehr angezeigt.

### Ausgabe verschiedener Styles f\xFCr Buttons in der ButtonGroup

F\xFCr die Standardausgabe eines Buttons stehen die Werte **primary**, **secondary**, **normal**, **danger** und **ghost** zur Verf\xFCgung. Hier\xFCber wird die farbliche Gestaltung des Buttons festgelegt.

### Optische Ausrichtung

\xDCber das Attribut **\`_nestled\`** kann eine optische Ausrichtung der ButtonGroup bestimmt werden. An der angegebenen Position werden die abgerundeten Ecken entfernt, so dass der Eindruck einer Button-Leiste entsteht. M\xF6glich sind die Werte \`bottom\`, \`top\`, \`left\`und \`right\`.

### Best practices

- Verwenden Sie eine prim\xE4re Schaltfl\xE4che f\xFCr die n\xE4chstbeste Aktion. Verbleibende Calls-to-Actions sollten als sekund\xE4re Schaltfl\xE4che dargestellt werden.
- Verwenden Sie Schaltfl\xE4chen an einheitlichen Stellen in der Benutzeroberfl\xE4che, um die Benutzererfahrung zu verbessern.
- Verwenden Sie nur eine prim\xE4re Schaltfl\xE4che je Viewport. Auf der gesamten Seite kann ein Button-Style beliebig oft auftreten.
- Die Beschriftung des Button muss die Aktion beschreiben, die die Schaltfl\xE4che ausf\xFChrt. Sie sollte ein Verb enthalten (z.B. Speichern). Verwenden Sie pr\xE4gnante, spezifische, selbsterkl\xE4rende Beschriftungen.
- Schaltfl\xE4chenbeschriftungen sollten immer dann auch ein Nomen enthalten, wenn es Raum f\xFCr Interpretationen dar\xFCber gibt, wof\xFCr das Verb zust\xE4ndig ist. Verwenden Sie keine generischen Bezeichnungen wie "OK", insbesondere nicht im Fehlerfall. Fehler sind nie "OK".
- Wenn Sie mehrere Buttons kombinieren oder anordnen m\xF6chten, verwenden Sie die **ButtonGroup**-Komponente.
- Verwenden Sie nicht mehrere Buttons im Style "prim\xE4r" in einer **ButtonGroup**.
- Verwenden Sie Buttons nicht als Link oder als Navigationselement.

## Barrierefreiheit

> Die optische Standardausgabe der Komponente ist auf die Umsetzung der Barrierefreiheit hin optimiert. Wenn Sie eigene Custom Styles verwenden, kann das zu einer Einschr\xE4nkung der Barrierefreiheit f\xFChren.

Bei Verwendung der **ButtonGroup**-Komponente sind keine besonderen Ma\xDFnahmen in Bezug auf die barrierefreiheit zu ber\xFCcksichtigen. Die innerhalb der ButtonGroup enthaltenen **Button**-Komponenten besitzen jedoch einige wichtige Aspekte in diesem Zusammenhang:

- In der Button-Komponente werden die optionalen **Icons** links ausgerichtet, um Nutzer\\*innen mit eingeschr\xE4nktem Sichtfeld eine bessere Bedienbarkeit zu erm\xF6glichen.
- Die Farben der **Variant-Typen** \`primary\`, \`secondary\`, \`normal\`, \`danger\` und \`ghost\` wurden in Hinblick auf bestm\xF6glichen Kontrast gew\xE4hlt. Die Schriftfarbe ist per default immer wei\xDF.

### Tastatursteuerung

| Taste   | Funktion                                                                       |
| ------- | ------------------------------------------------------------------------------ |
| \`Tab\`   | Springt den einzelnen Button der ButtonGroup an und fokussiert ihn.            |
| \`Enter\` | \xD6ffnet den Link des fokussierten Button oder f\xFChrt dessen onClick-Methode aus. |

## Links und Referenzen

- https://www.w3.org/TR/wai-aria-practices/#button

<!-- Auto Generated Below -->


## Abh\xE4ngigkeiten

### Verwendet von

 - kol-button-group
 - kol-tabs

### Graph
<div class="mermaid">
graph TD;
  kol-button-group --> kol-button-group-wc
  kol-tabs --> kol-button-group-wc
  style kol-button-group-wc fill:#f9f,stroke:#333,stroke-width:4px
</div>

----------------------------------------------


`}}]);
