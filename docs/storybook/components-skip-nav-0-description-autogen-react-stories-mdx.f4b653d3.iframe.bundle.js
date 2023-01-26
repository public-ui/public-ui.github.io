(self.webpackChunk_public_ui_storybook=self.webpackChunk_public_ui_storybook||[]).push([[4044],{"./src/components/skip-nav/0-description/autogen.react.stories.mdx":(p,b,e)=>{"use strict";e.r(b),e.d(b,{__namedExportsOrder:()=>A,__page:()=>h,default:()=>x});var a=e("./node_modules/core-js/modules/es.object.keys.js"),d=e.n(a),l=e("./node_modules/core-js/modules/es.array.index-of.js"),o=e.n(l),r=e("./node_modules/core-js/modules/es.symbol.js"),m=e.n(r),f=e("./node_modules/core-js/modules/es.function.bind.js"),O=e.n(f),y=e("./node_modules/core-js/modules/es.object.assign.js"),B=e.n(y),K=e("./node_modules/react/index.js"),u=e("./node_modules/@mdx-js/react/dist/esm.js"),g=e("./node_modules/@storybook/addon-docs/dist/esm/index.js"),j=e("./src/components/skip-nav/0-description/autogen.readme.md"),M=e("./src/components/mermaid.tsx"),T=["components"];function v(){return v=Object.assign?Object.assign.bind():function(n){for(var i=1;i<arguments.length;i++){var s=arguments[i];for(var t in s)Object.prototype.hasOwnProperty.call(s,t)&&(n[t]=s[t])}return n},v.apply(this,arguments)}function D(n,i){if(n==null)return{};var s=L(n,i),t,_;if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(n);for(_=0;_<c.length;_++)t=c[_],!(i.indexOf(t)>=0)&&Object.prototype.propertyIsEnumerable.call(n,t)&&(s[t]=n[t])}return s}function L(n,i){if(n==null)return{};var s={},t=Object.keys(n),_,c;for(c=0;c<t.length;c++)_=t[c],!(i.indexOf(_)>=0)&&(s[_]=n[_]);return s}var C={},P="wrapper";function E(n){var i=n.components,s=D(n,T);return(0,u.kt)(P,v({},C,s,{components:i,mdxType:"MDXLayout"}),(0,u.kt)(g.h_,{title:"React/SkipNav/Beschreibung",mdxType:"Meta"}),(0,u.kt)(g.dk,{mdxType:"Description"},j),(0,u.kt)("script",null,"() =>",(0,M.m)()))}E.displayName="MDXContent",E.isMDXComponent=!0;var h=function(){throw new Error("Docs-only story")};h.parameters={docsOnly:!0};var k={title:"React/SkipNav/Beschreibung",includeStories:["__page"]},S={};k.parameters=k.parameters||{},k.parameters.docs=Object.assign({},k.parameters.docs||{},{page:function(){return(0,u.kt)(g.aT,{mdxStoryNameToKey:S,mdxComponentAnnotations:k},(0,u.kt)(E,null))}});const x=k;var A=["__page"]},"./src/components/mermaid.tsx":(p,b,e)=>{"use strict";e.d(b,{G:()=>r,m:()=>o});var a=e("./node_modules/react/index.js"),d=e("./node_modules/mermaid/dist/mermaid.core.mjs");let l;const o=m=>{m&&d.Z.initialize(Object.assign({startOnLoad:!0},m)),clearTimeout(l),l=setTimeout(()=>{clearTimeout(l),d.Z.contentLoaded()},500)},r=({code:m,config:f,children:O})=>((0,a.useEffect)(()=>{o(f)},[]),a.createElement("div",null,a.createElement("div",{className:"mermaid"},m)));try{o.displayName="mermaidLoadContent",o.__docgenInfo={description:"",displayName:"mermaidLoadContent",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/mermaid.tsx#mermaidLoadContent"]={docgenInfo:o.__docgenInfo,name:"mermaidLoadContent",path:"src/components/mermaid.tsx#mermaidLoadContent"})}catch(m){}try{r.displayName="Mermaid",r.__docgenInfo={description:"",displayName:"Mermaid",props:{code:{defaultValue:null,description:"",name:"code",required:!0,type:{name:"string"}},config:{defaultValue:null,description:"",name:"config",required:!1,type:{name:"any"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/mermaid.tsx#Mermaid"]={docgenInfo:r.__docgenInfo,name:"Mermaid",path:"src/components/mermaid.tsx#Mermaid"})}catch(m){}},"./node_modules/moment-mini/locale sync recursive ^\\.\\/.*$":(p,b,e)=>{var a={"./locale":"./node_modules/moment-mini/locale/locale.js","./locale.js":"./node_modules/moment-mini/locale/locale.js"};function d(o){var r=l(o);return e(r)}function l(o){if(!e.o(a,o)){var r=new Error("Cannot find module '"+o+"'");throw r.code="MODULE_NOT_FOUND",r}return a[o]}d.keys=function(){return Object.keys(a)},d.resolve=l,p.exports=d,d.id="./node_modules/moment-mini/locale sync recursive ^\\.\\/.*$"},"./src/components/skip-nav/0-description/autogen.readme.md":p=>{"use strict";p.exports=`# SkipNav

Mit Hilfe der **SkipNav**-Komponente kann eine versteckte Navigation erzeugt werden. Sie dient dazu, Sehbehinderten das \xDCberspringen von Seitenbereichen zu erm\xF6glichen. Sie wird nur nach Anspringen durch die **Tab-Taste** sichtbar.

## Konstruktion

### Code

> Um das Zusammenspiel von Komponenten (HTML) und Kontroller (TypeScript) gemeinsam darzustellen, wurden alle Code-Beispiele auf dieser Seite mit den Web Components im TSX geschrieben.

\`\`\`tsx
<kol-skip-nav
	_aria-label="Ein versteckter Link"
	_links="[{'_label':'Navigation','_href':'#nav'},{'_label':'Inhalt','_href':'#main'},{'_label':'Kontakt','_href':'#kontakt'},{'_label':'Links','_href':'#links'}]"
></kol-skip-nav>
\`\`\`

### Beispiel

Um die **SkipNav** sehen zu k\xF6nnen, klicken Sie auf den Text **_Beispiel_** und gehen dann mit der Tab-Taste einen Schritt weiter.

<kol-skip-nav _aria-label="Ein versteckter Link" _links="[{'_label':'Navigation','_href':'#nav'},{'_label':'Inhalt','_href':'#main'},{'_label':'Kontakt','_href':'#kontakt'},{'_label':'Links','_href':'#links'}]"></kol-skip-nav>

## Verwendung

Die **SkipNav** wird durch \xDCbergabe eines JSON-Objekts erzeugt, das f\xFCr das Rendern der versteckten Links zust\xE4ndig ist.

\`\`\`tsx
[
	{
		_label: 'Navigation',
		_href: '#nav',
	},
	{
		_label: 'Inhalt',
		_href: '#main',
	},
];
\`\`\`

<!--### Best practices

### Anwendungsf\xE4lle-->

## Barrierefreiheit

> Die optische Standardausgabe der Komponente ist auf die Umsetzung der Barrierefreiheit hin optimiert. Wenn Sie eigene Custom Styles verwenden, kann das zu einer Einschr\xE4nkung der Barrierefreiheit f\xFChren.

### Tastatursteuerung

| Taste   | Funktion                                                              |
| ------- | --------------------------------------------------------------------- |
| \`Tab\`   | Fokussiert die SkipNav und erm\xF6glicht das Durchlaufen der Men\xFCpunkte. |
| \`Enter\` | Ruft den Link des fokussierten Men\xFCpunkts auf.                        |

## Links und Referenzen

- https://webaim.org/techniques/skipnav/

<!-- Auto Generated Below -->


## Eigenschaften

| Property                  | Attribute     | Description                                                                  | Type                       | Default     |
| ------------------------- | ------------- | ---------------------------------------------------------------------------- | -------------------------- | ----------- |
| \`_ariaLabel\` _(required)_ | \`_aria-label\` | Gibt den Text an, der die Navigation von anderen Navigationen differenziert. | \`string\`                   | \`undefined\` |
| \`_links\` _(required)_     | \`_links\`      | Ist die Liste der unsichtbaren Links.                                        | \`NavLinkProps[] | string\` | \`undefined\` |


## Shadow Parts

| Part     | Description                      |
| -------- | -------------------------------- |
| \`"link"\` | Erm\xF6glicht das Stylen der Links. |


## Abh\xE4ngigkeiten

### Abh\xE4ngig von

- kol-link

### Graph
<div class="mermaid">
graph TD;
  kol-skip-nav --> kol-link
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
  style kol-skip-nav fill:#f9f,stroke:#333,stroke-width:4px
</div>

----------------------------------------------


`}}]);
