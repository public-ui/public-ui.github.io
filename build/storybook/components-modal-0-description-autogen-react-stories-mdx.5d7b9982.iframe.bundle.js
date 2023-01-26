(self.webpackChunk_public_ui_storybook=self.webpackChunk_public_ui_storybook||[]).push([[7030],{"./src/components/modal/0-description/autogen.react.stories.mdx":(b,f,e)=>{"use strict";e.r(f),e.d(f,{__namedExportsOrder:()=>x,__page:()=>E,default:()=>B});var s=e("./node_modules/core-js/modules/es.object.keys.js"),l=e.n(s),_=e("./node_modules/core-js/modules/es.array.index-of.js"),o=e.n(_),r=e("./node_modules/core-js/modules/es.symbol.js"),m=e.n(r),h=e("./node_modules/core-js/modules/es.function.bind.js"),v=e.n(h),w=e("./node_modules/core-js/modules/es.object.assign.js"),P=e.n(w),K=e("./node_modules/react/index.js"),c=e("./node_modules/@mdx-js/react/dist/esm.js"),p=e("./node_modules/@storybook/addon-docs/dist/esm/index.js"),y=e("./src/components/modal/0-description/autogen.readme.md"),O=e("./src/components/mermaid.tsx"),C=["components"];function k(){return k=Object.assign?Object.assign.bind():function(n){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(n[i]=t[i])}return n},k.apply(this,arguments)}function D(n,a){if(n==null)return{};var t=S(n,a),i,d;if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(n);for(d=0;d<u.length;d++)i=u[d],!(a.indexOf(i)>=0)&&Object.prototype.propertyIsEnumerable.call(n,i)&&(t[i]=n[i])}return t}function S(n,a){if(n==null)return{};var t={},i=Object.keys(n),d,u;for(u=0;u<i.length;u++)d=i[u],!(a.indexOf(d)>=0)&&(t[d]=n[d]);return t}var z={},j="wrapper";function M(n){var a=n.components,t=D(n,C);return(0,c.kt)(j,k({},z,t,{components:a,mdxType:"MDXLayout"}),(0,c.kt)(p.h_,{title:"React/Modal/Beschreibung",mdxType:"Meta"}),(0,c.kt)(p.dk,{mdxType:"Description"},y),(0,c.kt)("script",null,"() =>",(0,O.m)()))}M.displayName="MDXContent",M.isMDXComponent=!0;var E=function(){throw new Error("Docs-only story")};E.parameters={docsOnly:!0};var g={title:"React/Modal/Beschreibung",includeStories:["__page"]},T={};g.parameters=g.parameters||{},g.parameters.docs=Object.assign({},g.parameters.docs||{},{page:function(){return(0,c.kt)(p.aT,{mdxStoryNameToKey:T,mdxComponentAnnotations:g},(0,c.kt)(M,null))}});const B=g;var x=["__page"]},"./src/components/mermaid.tsx":(b,f,e)=>{"use strict";e.d(f,{G:()=>r,m:()=>o});var s=e("./node_modules/react/index.js"),l=e("./node_modules/mermaid/dist/mermaid.core.mjs");let _;const o=m=>{m&&l.Z.initialize(Object.assign({startOnLoad:!0},m)),clearTimeout(_),_=setTimeout(()=>{clearTimeout(_),l.Z.contentLoaded()},500)},r=({code:m,config:h,children:v})=>((0,s.useEffect)(()=>{o(h)},[]),s.createElement("div",null,s.createElement("div",{className:"mermaid"},m)));try{o.displayName="mermaidLoadContent",o.__docgenInfo={description:"",displayName:"mermaidLoadContent",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/mermaid.tsx#mermaidLoadContent"]={docgenInfo:o.__docgenInfo,name:"mermaidLoadContent",path:"src/components/mermaid.tsx#mermaidLoadContent"})}catch(m){}try{r.displayName="Mermaid",r.__docgenInfo={description:"",displayName:"Mermaid",props:{code:{defaultValue:null,description:"",name:"code",required:!0,type:{name:"string"}},config:{defaultValue:null,description:"",name:"config",required:!1,type:{name:"any"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/mermaid.tsx#Mermaid"]={docgenInfo:r.__docgenInfo,name:"Mermaid",path:"src/components/mermaid.tsx#Mermaid"})}catch(m){}},"./node_modules/moment-mini/locale sync recursive ^\\.\\/.*$":(b,f,e)=>{var s={"./locale":"./node_modules/moment-mini/locale/locale.js","./locale.js":"./node_modules/moment-mini/locale/locale.js"};function l(o){var r=_(o);return e(r)}function _(o){if(!e.o(s,o)){var r=new Error("Cannot find module '"+o+"'");throw r.code="MODULE_NOT_FOUND",r}return s[o]}l.keys=function(){return Object.keys(s)},l.resolve=_,b.exports=l,l.id="./node_modules/moment-mini/locale sync recursive ^\\.\\/.*$"},"./src/components/modal/0-description/autogen.readme.md":b=>{"use strict";b.exports=`# Modal

Mit Hilfe der **Modal**-Komponente k\xF6nnen zus\xE4tzliche Informationen oder auch Eingabeformulare in einem
Dialogfenster angezeigt werden. Sie wird nach Klick auf einen Button aufgerufen und \xFCber ein eigenes
Close-Icon wieder geschlossen. Die **Modal**-Komponente basiert auf der **Card**-Komponente und ist standardm\xE4\xDFig versteckt. Sie wird i.d.R.
erst nach Klick auf einen Button oder sonstigem Trigger angezeigt. Dabei wird der Hintergrund des Fensters deaktiviert und allein der Inhalt
des Modal-Fensters ist aktiv. Das **Modal**-Fenster wird \xFCber ein **Close-Icon** oben rechts im Kopfbereich wieder
geschlossen.

## Funktionsweise

Das **Modal** realisiert die Basis f\xFCr barrierefreie Overlays und erm\xF6glicht es beliebige HTML-Inhalte anzuzeigen. Beispielsweise w\xE4re eine Dialog-Komponente eine Komposition aus einer Card-Komponente die in einer **Modal**-Komponente eingef\xFCgt wird.

Sobald ein **Modal** ge\xF6ffnet wird, werden alle selektierbaren Elemente in der Webseite deaktiviert, au\xDFer die innerhalb des aktiven Modals.

Werden mehrere **Modale** nach einander ge\xF6ffnet, dann wird immer nur das letzte ge\xF6ffnete angezeigt. Die **Modale** werden nach dem _Last In \u2013 First Out_ -Prinzip (LIFO) angezeigt, wobei die einzelnen **Modale** in beliebiger Reihenfolge wieder geschlossen werden k\xF6nnen.

## Konstruktion

### Code

> Um das Zusammenspiel von Komponenten (HTML) und Kontroller (TypeScript) gemeinsam darzustellen, wurden alle Code-Beispiele auf dieser Seite mit den Web Components im TSX geschrieben.

> Um das Zusammenspiel von Komponenten (HTML) und Controller (TypeScript) gemeinsam darzustellen, wurden alle Code-Beispiele auf dieser Seite mit den Web Components im TSX geschrieben.

\`\`\`tsx
<kol-modal
  _activeElement={this.state.activeElement}
  _aria-label="Beschreibung zur Modalbox"
  _on={{
    onClick: (event: Event) => {
      this.setState({
        activeElement: null // schlie\xDFt das Modal
      })
    }
  }}
  _width="400px"
>
  <kol-card _heading="Vorgang l\xF6schen" _has-footer>
    <p slot="content">Wollen Sie den Vorgang wirklich l\xF6schen?</p>
    <div slot="footer">
      <kol-button _label="Ok" _variant="primary"></kol-button>
      <kol-button _label="Abbrechen"></kol-button>
    </div>
  </kol-card>
</kol-modal>
<kol-button
  _on={{
    onClick: (event: Event) => {
      this.setState({
        activeElement: event.target as HTMLElement // \xF6ffnen das Modal
      })
    }
  }}
  _label="Modal \xF6ffnen"
></kol-button>
\`\`\`

## Verwendung

\xDCber das Attribut \`_width\` geben Sie die gew\xFCnschte Breite der Modalbox an. Sie wird in der gew\xE4hlten Gr\xF6\xDFe immer mittig auf dem Bildschirm angezeigt.

Da das Modal vom eigentlichen Modal entkoppelt ist, aber f\xFCr eine teilweisen Sperrung der Inhalte sorgt. Muss es auch eine M\xF6glichkeit bieten, das Schlie\xDFen (Sperrung aufheben) aus dem Modal-Kontext zu erm\xF6glichen. Das wird durch einen optionalen Schlie\xDFen-Button rechts oben in der Ecke sichergestellt.

<kol-alert _type="info">Standardm\xE4\xDFig wird die Modalbox mit einem **Close-Button** oben rechts gerendert. Diese Position ist aktuell fix und kann nicht ge\xE4ndert werden. Es ist aber m\xF6glich innerhalb der Modalbox einen eigenen Close-Button einzubauen und den Standardbutton auszublenden.</kol-alert>

### Best practices

- Verwenden Sie die Modalbox, um weiterf\xFChrende Informationen zu einem Thema anzuzeigen.
- Verwenden Sie die Modalbox, um umfangreiche Inhalte optisch kompakter zu gestalten.
- Vermeiden Sie es, wichtige Informationen wie z.B. rechtliche Themen, auf die Nutzer:innen reagieren m\xFCssen, in Modalboxen zu platzieren.

### Anwendungsf\xE4lle

- Nutzen Sie die Modalbox, als Erkl\xE4rungshilfe zu einzelnen Eingabefeldern in Formularen.
- Nutzen Sie die Modalbox, um erg\xE4nzende Informationen erst nach Anforderung durch die Nutzer:innen anzuzeigen.
- Nutzen Sie die Modalbox, um ein Feedback zu Speichervorg\xE4ngen oder \xE4hnliches anzuzeigen, z.B. **_Vielen Dank f\xFCr Ihre R\xFCckmeldung_** nach Absenden eines Formulars.

## Barrierefreiheit

> Die optische Standardausgabe der Komponente ist auf die Umsetzung der Barrierefreiheit hin optimiert. Wenn Sie eigene Custom Styles verwenden, kann das zu einer Einschr\xE4nkung der Barrierefreiheit f\xFChren.

> Die optische Standardausgabe der Komponente ist auf die Umsetzung der Barrierefreiheit hin optimiert. Wenn Sie eigene Custom Styles verwenden, kann das zu einer Einschr\xE4nkung der Barrierefreiheit f\xFChren.

Das **Modal** ist so realisiert, dass der Fokus darauf liegt, wenn es ge\xF6ffnet wird. Elemente au\xDFerhalb des Modals sind dann nicht mehr fokussierbar.

Wird das **Modal** geschlossen, liegt der Fokus wieder auf dem Element, welches urspr\xFCnglich das **Modal** ge\xF6ffnet hatte.

Bei der Realisierung dieser Funktionalit\xE4t haben wir auf die Verwendung der CSS-Properties \`user-select\` und \`pointer-events\` verzichtet, um das Navigieren aus der Webseite in die Browser-Men\xFC's weiterhin zu erm\xF6glichen. Ebenfalls haben wir darauf verzichtet die _Event-Propagation_ zu manipulieren.

Achten Sie f\xFCr eine optimale Ausgabe der **Modal**-Komponente in Screenreadern darauf, das Attribut **\`aria-label\`** korrekt zu setzen.

Beim \xD6ffnen eines Modals, muss der Entwickler:in das aktive Element \xFCbergeben, zu dem nach dem Schlie\xDFen des Modals automatisch der Fokus gesetzt werden soll.

Des Weiteren gibt es immer nur maximal ein aktives Modal, welches alle selektierbaren Elemente deaktiviert au\xDFer die innerhalb des eigenen Modals. Hierbei ist zu beachten, dass KoliBri nur Elemente deaktiviert die sich im Browser-Seitenbereich befinden. Das Fokussieren den Browser-Men\xFC's ist weiterhin m\xF6glich.

Zus\xE4tzlich stellt die Komponente sicher, dass die Darstellung beliebiger Inhalte bei beliebiger Zoomstufe barrierefrei bleibt. Hierzu wird ein vertikaler Scroll-Balken bei bedarf verwendet.

### Tastatursteuerung

| Taste   | Funktion                                                                                                                                                                         |
| ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| \`Tab\`   | Fokussiert den Aufrufbutton des Modal. Bei ge\xF6ffnetem Modal werden alle fokussierbaren Elemente der Reihenfolge nach angesprungen, insbesondere auch der Close-Button des Modal. |
| \`Enter\` | \xD6ffnet das Modal.                                                                                                                                                                |
| \`Leer\`  | \xD6ffnet das Modal.                                                                                                                                                                |

## Links und Referenzen

- https://www.w3.org/TR/wai-aria-practices/#dialog_modal
- https://www.w3.org/TR/wai-aria-practices-1.1/examples/dialog-modal/dialog.html

<!-- Auto Generated Below -->


## Eigenschaften

| Property                  | Attribute     | Description                                                                             | Type                                                            | Default     |
| ------------------------- | ------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------- | ----------- |
| \`_activeElement\`          | --            | Gibt die Referenz auf das ausl\xF6sende HTML-Element an, wodurch das Modal ge\xF6ffnet wurde. | \`HTMLElement | null | undefined\`                              | \`undefined\` |
| \`_ariaLabel\` _(required)_ | \`_aria-label\` | Gibt den Text an, der die Navigation von anderen Navigationen differenziert.            | \`string\`                                                        | \`undefined\` |
| \`_on\`                     | --            | Gibt die EventCallback-Function f\xFCr das Schlie\xDFen des Modals an.                        | \`undefined | { onClose?: EventCallback<Event> | undefined; }\` | \`undefined\` |
| \`_show\`                   | \`_show\`       | Gibt an, ob das Modal angezeigt wird.                                                   | \`boolean | undefined\`                                          | \`false\`     |
| \`_width\`                  | \`_width\`      | Gibt an, wie breit der Anzeigebereich sein soll (<= max-width: 100%).                   | \`string | undefined\`                                           | \`'100%'\`    |


----------------------------------------------


`}}]);
