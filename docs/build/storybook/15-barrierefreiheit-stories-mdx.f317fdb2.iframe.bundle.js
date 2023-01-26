(self.webpackChunk_public_ui_storybook=self.webpackChunk_public_ui_storybook||[]).push([[3964],{"./node_modules/@storybook/addon-docs/dist/esm/index.js":(p,u,t)=>{"use strict";t.d(u,{Xz:()=>s.Canvas,aT:()=>s.AddContext,dk:()=>s.Description,h_:()=>s.Meta});var s=t("./node_modules/@storybook/addon-docs/dist/esm/blocks/index.js")},"./src/15-barrierefreiheit.stories.mdx":(p,u,t)=>{"use strict";t.r(u),t.d(u,{__namedExportsOrder:()=>T,__page:()=>x,default:()=>I});var s=t("./node_modules/core-js/modules/es.object.keys.js"),m=t.n(s),k=t("./node_modules/core-js/modules/es.array.index-of.js"),y=t.n(k),_=t("./node_modules/core-js/modules/es.symbol.js"),g=t.n(_),b=t("./node_modules/core-js/modules/es.function.bind.js"),E=t.n(b),c=t("./node_modules/core-js/modules/es.object.assign.js"),h=t.n(c),w=t("./node_modules/react/index.js"),e=t("./node_modules/@mdx-js/react/dist/esm.js"),j=t("./node_modules/@storybook/addon-docs/dist/esm/index.js"),O=["components"];function f(){return f=Object.assign?Object.assign.bind():function(n){for(var a=1;a<arguments.length;a++){var r=arguments[a];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(n[o]=r[o])}return n},f.apply(this,arguments)}function D(n,a){if(n==null)return{};var r=C(n,a),o,i;if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(n);for(i=0;i<d.length;i++)o=d[i],!(a.indexOf(o)>=0)&&Object.prototype.propertyIsEnumerable.call(n,o)&&(r[o]=n[o])}return r}function C(n,a){if(n==null)return{};var r={},o=Object.keys(n),i,d;for(d=0;d<o.length;d++)i=o[d],!(a.indexOf(i)>=0)&&(r[i]=n[i]);return r}var M={},K="wrapper";function v(n){var a=n.components,r=D(n,O);return(0,e.kt)(K,f({},M,r,{components:a,mdxType:"MDXLayout"}),(0,e.kt)(j.h_,{title:"Konzepte/Barrierefreiheit",id:"accessibility",mdxType:"Meta"}),(0,e.kt)("h1",{id:"barrierefreiheit"},"Barrierefreiheit"),(0,e.kt)("p",null,(0,e.kt)("strong",{parentName:"p"},"KoliBri"),` ist eine Komponenten-Bibliothek, die speziell f\xFCr die Verwendung auf barrierefreien
Webseiten und Webanwendungen entwickelt wurde.
Mit Hilfe von KoliBri sollen Menschen mit Einschr\xE4nkungen die M\xF6glichkeit bekommen,
Informationen und Services im Internet in optimaler Form erhalten zu k\xF6nnen.
KoliBri ist konsequent auf die besonderen Anforderungen hin entwickelt worden,
die `,(0,e.kt)("strong",{parentName:"p"},"Screenreader"),", ",(0,e.kt)("strong",{parentName:"p"},"Bildschirmlupen")," oder auch die ",(0,e.kt)("strong",{parentName:"p"},"Steuerung \xFCber die Tastatur"),`,
an eine Webseite oder Webanwendung stellen.`,(0,e.kt)("br",null),`
KoliBri verl\xE4sst sich nicht allein auf die Unterst\xFCtzung des Browsers, sondern setzt auf eine durchg\xE4ngige
Optimierung des HTML-Codes und der Elemente-Konstruktion, um m\xF6glichst allen digitalen Hilfsmitteln eine ideale
Basis f\xFCr die Ausgabe bzw. Darstellung von Inhalten im Browser zur Verf\xFCgung zu stellen.`),(0,e.kt)("h2",{id:"optimierung-f\xFCr-screenreader"},"Optimierung f\xFCr Screenreader"),(0,e.kt)("h2",{id:"optimierung-f\xFCr-bildschirmlupen-und-vergr\xF6\xDFerte-darstellung"},"Optimierung f\xFCr Bildschirmlupen und vergr\xF6\xDFerte Darstellung"),(0,e.kt)("h2",{id:"tastatursteuerung"},"Tastatursteuerung"),(0,e.kt)("p",null,`Grunds\xE4tzlich sind alle Webseiten und Webanwendungen sowohl mit der Maus, als auch mit der Tastatur bedienbar.
Jedoch sind nur wenige Webseiten so optimiert, dass eine l\xFCckenlose und schl\xFCssige Tastatursteuerung implementiert ist.
Auch hier setzt KoliBri mit einer optimalen Umsetzung zur tastaturgesteuerten Bedienung an. Alle Komponenten
werden zum einen mit einem klaren, kontraststarken Fokusrahmen markiert, sobald sie den Eingabefokus erhalten. Zum anderen sind auch komplexe
Komponenten, wie z.B. die Modal-Komponente, so konstruiert, dass sie sich grunds\xE4tzlich \xFCber Tab-Taste, Enter-Taste oder Pfeil-Tasten
erreichen und steuern lassen.`),(0,e.kt)("h2",{id:"focusrahmen"},"Focusrahmen"),(0,e.kt)("p",null,"Jede Komponente in ",(0,e.kt)("strong",{parentName:"p"},"KoliBri"),` ist so entwickelt worden, dass sie beim Erhalt des Eingabefokus von einem klaren und kontraststarken
Rahmen umgeben wird.`),(0,e.kt)("h2",{id:"klare-farbdarstellung"},"Klare Farbdarstellung"),(0,e.kt)("p",null,`Menschen mit Einschr\xE4nkungen sind h\xE4ufig darauf angewiesen, Inhalte mit einem m\xF6glichst hohen Kontrast
zu erhalten. So ist beispielsweise die Ausgabe von hellgrauem Text auf wei\xDFem Hintergrund aus designtechnischen
Gr\xFCnden sicher optisch attraktiv, jedoch f\xFCr Menschen mit Einschr\xE4nkungen des Sehverm\xF6gens nicht geeignet.`,(0,e.kt)("br",null),`
`,(0,e.kt)("strong",{parentName:"p"},"KoliBri")," verfolgt daher den Ansatz, alle Inhalte in einer klaren Designsprache mit optimalem Kontrast darzustellen."),(0,e.kt)("h3",{id:"beispiel-card-mit-schlechtem-kontrast"},"Beispiel: Card mit schlechtem Kontrast"),(0,e.kt)("div",{className:"card bg-light mb-2"},(0,e.kt)("div",{className:"card-header"},(0,e.kt)("h1",{className:"text-bold",style:{color:"#b1b1b1"}},"\xDCberschrift"),(0,e.kt)("div",{className:"card-body"},(0,e.kt)("div",{className:"row"},(0,e.kt)("div",{className:"col-12 col-sm-6",style:{color:"#b1b1b1"}},"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."),(0,e.kt)("div",{className:"col-12 col-sm-6",style:{color:"#b1b1b1"}},"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."))),(0,e.kt)("div",{className:"card-footer"},(0,e.kt)("a",{className:"btn btn-info"},"Weiterlesen")))),(0,e.kt)("h3",{id:"beispiel-card-mit-kolibri-umgesetzt"},"Beispiel: Card mit KoliBri umgesetzt"),(0,e.kt)("div",null,(0,e.kt)("kol-card",{_headline:"\xDCberschrift",_level:"1","_has-footer":!0},(0,e.kt)("div",{slot:"content"},(0,e.kt)("div",{className:"row"},(0,e.kt)("div",{className:"col-12"},(0,e.kt)("h1",{className:"text-bold"},"\xDCberschrift")),(0,e.kt)("div",{className:"col-12 col-sm-6"},"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."),(0,e.kt)("div",{className:"col-12 col-sm-6"},"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."))),(0,e.kt)("div",{slot:"footer"},(0,e.kt)("kol-button",{_label:"Weiterlesen",_cta:"primary"})))),(0,e.kt)("h2",{id:"technische-einschr\xE4nkungen-der-barrierefreiheit"},"Technische Einschr\xE4nkungen der Barrierefreiheit"),(0,e.kt)("h3",{id:"icons-in-den-input-komponenten"},"Icons in den Input-Komponenten"),(0,e.kt)("p",null,`In manchen Input-Komponenten werden laut Standard bzw. aufgrund der Browsertechnologie Icons angezeigt. Dies ist z.B.
bei der Input-Komponente `,(0,e.kt)("strong",{parentName:"p"},"InputNumber"),` der Fall. \xDCber die Icons werden unterschiedliche Funktionen angesteuert. Im Fall
von InputNumber vom Typ `,(0,e.kt)("strong",{parentName:"p"},(0,e.kt)("em",{parentName:"strong"},"Date")),` wird \xFCber das Icon ein ausklappbarer Kalender angezeigt, \xFCber den ein Datum
ausgew\xE4hlt werden kann.`,(0,e.kt)("br",null),`
Diese Icons sind aus technischen Gr\xFCnden in der Regel nicht \xFCber die Tastatur ansteuerbar. Es handelt sich nicht
um eine Einschr\xE4nkung seitens KoliBri.`),(0,e.kt)("p",null,"Im Firefox-Browser sind einige Typen der ",(0,e.kt)("strong",{parentName:"p"},"InputNumber"),`-Komponente aufgrund fehlender Implementierung nicht bzw. nur eingeschr\xE4nkt funktional.
Dies betrifft die Typen `,(0,e.kt)("strong",{parentName:"p"},"month"),", ",(0,e.kt)("strong",{parentName:"p"},"week")," und ",(0,e.kt)("strong",{parentName:"p"},"datetime"),"."))}v.displayName="MDXContent",v.isMDXComponent=!0;var x=function(){throw new Error("Docs-only story")};x.parameters={docsOnly:!0};var l={title:"Konzepte/Barrierefreiheit",id:"accessibility",includeStories:["__page"]},B={};l.parameters=l.parameters||{},l.parameters.docs=Object.assign({},l.parameters.docs||{},{page:function(){return(0,e.kt)(j.aT,{mdxStoryNameToKey:B,mdxComponentAnnotations:l},(0,e.kt)(v,null))}});const I=l;var T=["__page"]},"./node_modules/core-js/modules/es.array.index-of.js":(p,u,t)=>{"use strict";var s=t("./node_modules/core-js/internals/export.js"),m=t("./node_modules/core-js/internals/function-uncurry-this-clause.js"),k=t("./node_modules/core-js/internals/array-includes.js").indexOf,y=t("./node_modules/core-js/internals/array-method-is-strict.js"),_=m([].indexOf),g=!!_&&1/_([1],1,-0)<0,b=g||!y("indexOf");s({target:"Array",proto:!0,forced:b},{indexOf:function(c){var h=arguments.length>1?arguments[1]:void 0;return g?_(this,c,h)||0:k(this,c,h)}})},"./node_modules/core-js/modules/es.function.bind.js":(p,u,t)=>{var s=t("./node_modules/core-js/internals/export.js"),m=t("./node_modules/core-js/internals/function-bind.js");s({target:"Function",proto:!0,forced:Function.bind!==m},{bind:m})}}]);
