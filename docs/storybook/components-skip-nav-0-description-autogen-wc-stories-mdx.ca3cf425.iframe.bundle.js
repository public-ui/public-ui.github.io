(self.webpackChunk_public_ui_storybook=self.webpackChunk_public_ui_storybook||[]).push([[2539],{"./src/components/skip-nav/0-description/autogen.wc.stories.mdx":(k,f,e)=>{"use strict";e.r(f),e.d(f,{__namedExportsOrder:()=>A,__page:()=>b,default:()=>x});var i=e("./node_modules/core-js/modules/es.object.keys.js"),d=e.n(i),m=e("./node_modules/core-js/modules/es.array.index-of.js"),o=e.n(m),s=e("./node_modules/core-js/modules/es.symbol.js"),l=e.n(s),g=e("./node_modules/core-js/modules/es.function.bind.js"),O=e.n(g),y=e("./node_modules/core-js/modules/es.object.assign.js"),B=e.n(y),K=e("./node_modules/react/index.js"),u=e("./node_modules/@mdx-js/react/dist/esm.js"),v=e("./node_modules/@storybook/addon-docs/dist/esm/index.js"),j=e("./src/components/skip-nav/0-description/autogen.readme.md"),M=e("./src/components/mermaid.tsx"),T=["components"];function E(){return E=Object.assign?Object.assign.bind():function(n){for(var r=1;r<arguments.length;r++){var a=arguments[r];for(var t in a)Object.prototype.hasOwnProperty.call(a,t)&&(n[t]=a[t])}return n},E.apply(this,arguments)}function D(n,r){if(n==null)return{};var a=C(n,r),t,_;if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(n);for(_=0;_<c.length;_++)t=c[_],!(r.indexOf(t)>=0)&&Object.prototype.propertyIsEnumerable.call(n,t)&&(a[t]=n[t])}return a}function C(n,r){if(n==null)return{};var a={},t=Object.keys(n),_,c;for(c=0;c<t.length;c++)_=t[c],!(r.indexOf(_)>=0)&&(a[_]=n[_]);return a}var L={},P="wrapper";function h(n){var r=n.components,a=D(n,T);return(0,u.kt)(P,E({},L,a,{components:r,mdxType:"MDXLayout"}),(0,u.kt)(v.h_,{title:"Web Components/SkipNav/Beschreibung",mdxType:"Meta"}),(0,u.kt)(v.dk,{mdxType:"Description"},j),(0,u.kt)("script",null,"() =>",(0,M.m)()))}h.displayName="MDXContent",h.isMDXComponent=!0;var b=function(){throw new Error("Docs-only story")};b.parameters={docsOnly:!0};var p={title:"Web Components/SkipNav/Beschreibung",includeStories:["__page"]},S={};p.parameters=p.parameters||{},p.parameters.docs=Object.assign({},p.parameters.docs||{},{page:function(){return(0,u.kt)(v.aT,{mdxStoryNameToKey:S,mdxComponentAnnotations:p},(0,u.kt)(h,null))}});const x=p;var A=["__page"]},"./src/components/mermaid.tsx":(k,f,e)=>{"use strict";e.d(f,{G:()=>s,m:()=>o});var i=e("./node_modules/react/index.js"),d=e("./node_modules/mermaid/dist/mermaid.core.mjs");let m;const o=l=>{l&&d.Z.initialize(Object.assign({startOnLoad:!0},l)),clearTimeout(m),m=setTimeout(()=>{clearTimeout(m),d.Z.contentLoaded()},500)},s=({code:l,config:g,children:O})=>((0,i.useEffect)(()=>{o(g)},[]),i.createElement("div",null,i.createElement("div",{className:"mermaid"},l)));try{o.displayName="mermaidLoadContent",o.__docgenInfo={description:"",displayName:"mermaidLoadContent",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/mermaid.tsx#mermaidLoadContent"]={docgenInfo:o.__docgenInfo,name:"mermaidLoadContent",path:"src/components/mermaid.tsx#mermaidLoadContent"})}catch(l){}try{s.displayName="Mermaid",s.__docgenInfo={description:"",displayName:"Mermaid",props:{code:{defaultValue:null,description:"",name:"code",required:!0,type:{name:"string"}},config:{defaultValue:null,description:"",name:"config",required:!1,type:{name:"any"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/mermaid.tsx#Mermaid"]={docgenInfo:s.__docgenInfo,name:"Mermaid",path:"src/components/mermaid.tsx#Mermaid"})}catch(l){}},"./node_modules/moment-mini/locale sync recursive ^\\.\\/.*$":(k,f,e)=>{var i={"./locale":"./node_modules/moment-mini/locale/locale.js","./locale.js":"./node_modules/moment-mini/locale/locale.js"};function d(o){var s=m(o);return e(s)}function m(o){if(!e.o(i,o)){var s=new Error("Cannot find module '"+o+"'");throw s.code="MODULE_NOT_FOUND",s}return i[o]}d.keys=function(){return Object.keys(i)},d.resolve=m,k.exports=d,d.id="./node_modules/moment-mini/locale sync recursive ^\\.\\/.*$"},"./src/components/skip-nav/0-description/autogen.readme.md":k=>{"use strict";k.exports=`# SkipNav

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
