"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[1903],{17942:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var r=n(50959);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),d=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=d(n),c=a,g=m["".concat(s,".").concat(c)]||m[c]||p[c]||i;return n?r.createElement(g,l(l({ref:t},u),{},{components:n})):r.createElement(g,l({ref:t},u))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[m]="string"==typeof e?e:a,l[1]=o;for(var d=2;d<i;d++)l[d]=n[d];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},82081:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>c,frontMatter:()=>l,metadata:()=>s,toc:()=>u});var r=n(15882),a=(n(50959),n(17942)),i=n(17520);const l={},o="Frameworks",s={unversionedId:"get-started/frameworks",id:"get-started/frameworks",title:"Frameworks",description:"KoliBri kann zur Umsetzung webbasierten Benutzeroberfl\xe4chen verwendet werden.",source:"@site/docs/10-get-started/5-frameworks.mdx",sourceDirName:"10-get-started",slug:"/get-started/frameworks",permalink:"/docs/get-started/frameworks",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Erste Schritte",permalink:"/docs/get-started/first-steps"},next:{title:"Playground",permalink:"/docs/get-started/playground"}},d={},u=[{value:"Installation",id:"installation",level:2},{value:"Integrationsvarianten",id:"integrationsvarianten",level:2},{value:"Client-Side-Frameworks",id:"client-side-frameworks",level:3},{value:"Server-Side-Frameworks",id:"server-side-frameworks",level:3},{value:"Aktuelle Trends",id:"aktuelle-trends",level:2}],m={toc:u},p="wrapper";function c(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"frameworks"},"Frameworks"),(0,a.kt)("kol-alert",{_type:"success"},(0,a.kt)("b",null,"KoliBri")," kann zur Umsetzung webbasierten Benutzeroberfl\xe4chen verwendet werden."),(0,a.kt)("h2",{id:"installation"},"Installation"),(0,a.kt)("p",null,"Alle Pakete/Artefakte von KoliBri werden in der \xf6ffentlichen ",(0,a.kt)("kol-link",{_href:"https://www.npmjs.com/search?q=%40public-ui",_target:"npmjs"},"NPM-Registry")," versioniert bereitgestellt."),(0,a.kt)(i.Vp,{_caption:"\xdcbersicht der Pakete",_headers:{horizontal:[[{label:"Paket",key:"name"},{label:"Erl\xe4uterung",key:"desc"}]]},_data:[{name:"create-kolibri",desc:"CLI zum Erstellen neuer Projekt auf KoliBri-Basis."},{name:"@public-ui/components",desc:"Beinhaltet die barrierefreien Web Components ohne Styling."},{name:"@public-ui/core",desc:"Beinhaltet zentrale Funktionalit\xe4ten f\xfcr eine Komponenten-Bibliothek."},{name:"@public-ui/schema",desc:"Beinhaltet das Schema f\xfcr die KoliBri-Basiskomponenten."},{name:"@public-ui/themes",desc:"Beinhaltet zahlreiche Themes f\xfcr die KoliBri-Basiskomponenten."},{name:"@public-ui/react",desc:"Adapter f\xfcr das Framework React."},{name:"@public-ui/solid",desc:"Adapter f\xfcr das Framework Solid."},{name:"@public-ui/angular-v15",desc:"Adapter f\xfcr das Framework Angular v15."},{name:"@public-ui/angular-v14",desc:"Adapter f\xfcr das Framework Angular v14."},{name:"@public-ui/angular-v13",desc:"Adapter f\xfcr das Framework Angular v13."},{name:"@public-ui/angular-v12",desc:"Adapter f\xfcr das Framework Angular v12."},{name:"@public-ui/angular-v11",desc:"Adapter f\xfcr das Framework Angular v11."},{name:"@public-ui/preact",desc:"Adapter f\xfcr das Framework Preact."},{name:"@public-ui/vue",desc:"Adapter f\xfcr das Framework Vue."},{name:"@public-ui/hydrate",desc:"Beinhaltet Funktionen zum Generieren von HTML-Strings der Komponenten (SSR)."},{name:"<s>@public-ui/angular</s>",desc:"Dieses Paket ist veraltet, weil Angular versionsspezifische Adapter ben\xf6tigt."}],mdxType:"KolTable"}),(0,a.kt)("h2",{id:"integrationsvarianten"},"Integrationsvarianten"),(0,a.kt)("b",null,"KoliBri")," wird aktuell in folgenden Varianten angeboten:",(0,a.kt)("h3",{id:"client-side-frameworks"},"Client-Side-Frameworks"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Statische Webseiten"),(0,a.kt)("th",{parentName:"tr",align:null},"Dynamische Webanwendungen"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Technische sind Web Components, wie sie in KoliBri enthalten sind, wie auch Standard HTML universell wiederverwendbar."),(0,a.kt)("td",{parentName:"tr",align:null},"F\xfcr Umsetzung von dynamischen Webanwendungen gibt es eine Reihe von Frameworks f\xfcr die KoliBri wiederverwendet werden kann. Abh\xe4ngig vom Framework ist die Bereitstellung von KoliBri unterschiedlich. Besonders gut geeignet sind dabei JSX/TSX basierte Frameworks, wie React oder Solid, da hier die maximalen M\xf6glichkeiten der Typ-Unterst\xfctzung und Autovervollst\xe4ndung m\xf6glich sind. Hingegen bei Frameworks mit eigener Template-Sprachen, wie Angular, Vue oder Svelte, ist die Entwicklungsunterst\xfctzung unterschiedlich gut umsetzbar.")))),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Framework"),(0,a.kt)("th",{parentName:"tr",align:null}))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("img",{src:"/assets/webcomponent.png",width:"150",alt:"Logo von Web Component"})),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("b",null,"Web Components"),(0,a.kt)("br",null),"Alle Komponenten von ",(0,a.kt)("b",null,"KoliBri")," sind gem\xe4\xdf dem Web Components Standard umgesetzt. Somit k\xf6nnen die Komponenten in der Regel in allen modernen Projekten wiederverwendet werden. ",(0,a.kt)("kol-alert",{_type:"info"},"KoliBri l\xe4sst sich einbinden wie jQuery und ist somit auch f\xfcr Server-Side-Rendering, wie PHP, JSF usw., interessant."))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("img",{src:"/assets/react.png",width:"150",alt:"Logo von React"})),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("b",null,"React-Components")," (",(0,a.kt)("kol-icon",{"_aira-label":"",_icon:"icofont-star"})," empfohlen)",(0,a.kt)("br",null),"Alternativ zu den reinen Web Componenten bieten wir einen Adapter f\xfcr ",(0,a.kt)("strong",{parentName:"td"},"React")," an. Es wird so sichergestellt, dass sich die Web Component m\xf6glichst nahtlos und voll typisiert in die Entwicklung integriert.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("img",{src:"/assets/solid.png",width:"150",alt:"Logo von Solid"})),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("b",null,"Solid-Components"),(0,a.kt)("br",null),"Alternativ zu den reinen Web Components bieten wir einen Adapter f\xfcr ",(0,a.kt)("strong",{parentName:"td"},"Solid")," an. Es wird so sichergestellt, dass sich die Web Component m\xf6glichst nahtlos und voll typisiert in die Entwicklung integriert.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("img",{src:"/assets/angular.png",width:"150",alt:"Logo von Angular"})),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("b",null,"Angular-Components")," (>= 11)",(0,a.kt)("br",null),"Alternativ zu den reinen Web Components bieten wir einen Adapter f\xfcr ",(0,a.kt)("strong",{parentName:"td"},"Angular")," an. Es wird so sichergestellt, dass sich die Web Component m\xf6glichst nahtlos und voll typisiert in die Entwicklung integriert.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("img",{src:"/assets/vue.png",width:"150",alt:"Logo von Vue"})),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("b",null,"Vue-Components")," ",(0,a.kt)("br",null),"Alternativ zu den reinen Web Components bieten wir einen Adapter f\xfcr ",(0,a.kt)("strong",{parentName:"td"},"Vue")," an. Es wird so sichergestellt, dass sich die Web Component m\xf6glichst nahtlos und voll typisiert in die Entwicklung integriert.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("img",{src:"/assets/preact.png",width:"150",alt:"Logo von Preact"})),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("b",null,"Preact-Components")," (experimentell)",(0,a.kt)("br",null),"Alternativ zu den reinen Web Components bieten wir einen Adapter f\xfcr ",(0,a.kt)("strong",{parentName:"td"},"Preact")," an. Es wird so sichergestellt, dass sich die Web Component m\xf6glichst nahtlos und voll typisiert in die Entwicklung integriert.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("img",{src:"/assets/svelte.png",width:"150",alt:"Logo von Svelte"})),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("b",null,"Svelte-Components")," (offen)",(0,a.kt)("br",null),"Alternativ zu den reinen Web Components bieten wir einen Adapter f\xfcr ",(0,a.kt)("strong",{parentName:"td"},"Svelte")," an. Es wird so sichergestellt, dass sich die Web Component m\xf6glichst nahtlos und voll typisiert in die Entwicklung integriert.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("img",{src:"/assets/ember.png",width:"150",alt:"Logo von Ember"})),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("b",null,"Ember-Components")," (offen)",(0,a.kt)("br",null),"Alternativ zu den reinen Web Components bieten wir einen Adapter f\xfcr ",(0,a.kt)("strong",{parentName:"td"},"Ember")," an. Es wird so sichergestellt, dass sich die Web Component m\xf6glichst nahtlos und voll typisiert in die Entwicklung integriert.")))),(0,a.kt)("h3",{id:"server-side-frameworks"},"Server-Side-Frameworks"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Framework"),(0,a.kt)("th",{parentName:"tr",align:null}))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("img",{src:"/assets/astro.png",width:"150",alt:"Logo von Astro"})),(0,a.kt)("td",{parentName:"tr",align:null},"Die Integration erfolgt mittels der ",(0,a.kt)("b",null,"React- und Preact-Components"),". Hierbei werden die Framework-Componentens Server-seitig und die Web Components Client-seitig gerendert.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("img",{src:"/assets/next.js.png",width:"150",alt:"Logo von Next.js"})),(0,a.kt)("td",{parentName:"tr",align:null},"Die Integration erfolgt mittels der ",(0,a.kt)("b",null,"React-Components")," (CSR der Web Components). Hierbei werden die Framework-Componentens Server-seitig und die Web Components Client-seitig gerendert.")))),(0,a.kt)("h2",{id:"aktuelle-trends"},"Aktuelle Trends"),(0,a.kt)("iframe",{src:"https://npmtrends.com/@angular/core-vs-next-vs-preact-vs-react-vs-vue-vs-astro-vs-svelte",style:{width:"100%",border:"0",height:"800px"}}))}c.isMDXComponent=!0}}]);