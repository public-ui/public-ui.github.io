"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[61434],{17942:(e,n,t)=>{t.d(n,{Zo:()=>k,kt:()=>m});var r=t(50959);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=r.createContext({}),d=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},k=function(e){var n=d(e.components);return r.createElement(u.Provider,{value:n},e.children)},s="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},c=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,k=o(e,["components","mdxType","originalType","parentName"]),s=d(t),c=a,m=s["".concat(u,".").concat(c)]||s[c]||p[c]||i;return t?r.createElement(m,l(l({ref:n},k),{},{components:t})):r.createElement(m,l({ref:n},k))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,l=new Array(i);l[0]=c;var o={};for(var u in n)hasOwnProperty.call(n,u)&&(o[u]=n[u]);o.originalType=e,o[s]="string"==typeof e?e:a,l[1]=o;for(var d=2;d<i;d++)l[d]=t[d];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}c.displayName="MDXCreateElement"},17422:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var r=t(15882),a=(t(50959),t(17942));const i={title:"Button- und Link-Komponenten",authors:"deleonio",tags:["button","link"]},l=void 0,o={permalink:"/blog/2023/01/09/",source:"@site/blog/2023-01-09.mdx",title:"Button- und Link-Komponenten",description:"Wir bieten heute die Varianten von Button, ButtonLink, Link und LinkButton an. Zuk\xfcnftig werden wir zus\xe4tzlich den ButtonToggle (Toogle-Button) anbieten. Optisch gibt es Buttons die genau wie Links aussehen und Links die genauso wie Buttons aussehen.",date:"2023-01-09T00:00:00.000Z",formattedDate:"9. Januar 2023",tags:[{label:"button",permalink:"/blog/tags/button"},{label:"link",permalink:"/blog/tags/link"}],readingTime:2.9,hasTruncateMarker:!1,authors:[{name:"Martin Oppitz",title:"Architekt@ITZBund & Creator of KoliBri",url:"https://github.com/deleonio",imageURL:"https://avatars.githubusercontent.com/u/6279703",key:"deleonio"}],frontMatter:{title:"Button- und Link-Komponenten",authors:"deleonio",tags:["button","link"]},prevItem:{title:"Eigene Themes unabh\xe4ngig umsetzen",permalink:"/blog/2023/02/02/"},nextItem:{title:"\xdcbersetzungen",permalink:"/blog/2023/01/04/"}},u={authorsImageUrls:[void 0]},d=[{value:"Motivation",id:"motivation",level:2},{value:"Herausforderungen",id:"herausforderungen",level:2},{value:"React-Router",id:"react-router",level:3},{value:"Server-Side-Rendering",id:"server-side-rendering",level:3},{value:"L\xf6sung",id:"l\xf6sung",level:2}],k={toc:d},s="wrapper";function p(e){let{components:n,...t}=e;return(0,a.kt)(s,(0,r.Z)({},k,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Wir bieten heute die Varianten von Button, ButtonLink, Link und LinkButton an. Zuk\xfcnftig werden wir zus\xe4tzlich den ButtonToggle (Toogle-Button) anbieten. Optisch gibt es Buttons die genau wie Links aussehen und Links die genauso wie Buttons aussehen."),(0,a.kt)("p",null,"In der folgenden Tabelle wir eine \xdcbersicht \xfcber die Unterschiede dargestellt:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"center"},"Merkmal"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Link"),(0,a.kt)("th",{parentName:"tr",align:"center"},"LinkButton"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Button"),(0,a.kt)("th",{parentName:"tr",align:"center"},"ButtonLink"),(0,a.kt)("th",{parentName:"tr",align:"center"},"ToogleButton",(0,a.kt)("sup",null,"*")))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"Design"),(0,a.kt)("td",{parentName:"tr",align:"center"},"Link"),(0,a.kt)("td",{parentName:"tr",align:"center"},"Button"),(0,a.kt)("td",{parentName:"tr",align:"center"},"Button"),(0,a.kt)("td",{parentName:"tr",align:"center"},"Link"),(0,a.kt)("td",{parentName:"tr",align:"center"},"Button")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"Semantik"),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("inlineCode",{parentName:"td"},"a")),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("inlineCode",{parentName:"td"},"a")),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("inlineCode",{parentName:"td"},"button")),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("inlineCode",{parentName:"td"},"button")),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("inlineCode",{parentName:"td"},"input"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("inlineCode",{parentName:"td"},"_href")),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2795"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2795"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2796"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2796"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2796")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("inlineCode",{parentName:"td"},"_on")),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2795"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2795"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2795"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2795"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2795")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("inlineCode",{parentName:"td"},"focus()")),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2795"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2795"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2795"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2795"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2795")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"Wert"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2796"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2796"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2796"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2796"),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("inlineCode",{parentName:"td"},"boolean"))))),(0,a.kt)("small",null,(0,a.kt)("sup",null,"*"),' Der Toogle-Button wurde als Variante der Checkbox umgesetzt, weil es ein Schalter mit maximal zwei Zust\xe4nden (entweder "an" oder "aus") ist.'),(0,a.kt)("h2",{id:"motivation"},"Motivation"),(0,a.kt)("p",null,"KoliBri strebt neben einer hohe Standardkonformit\xe4t auch eine sehr gute Wiederverwendbarkeit (Developer Experience DX) an.\nDiese wird durch die Einheitlichkeit zu den HTML-Attributen und dem sparsamen Umgang mit zus\xe4tzlichen Properties adressiert."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Rationale:")," Wenn wir bei einer Link-Komponente, die zum Navigieren gedacht ist, die beiden Verhalten ",(0,a.kt)("strong",{parentName:"p"},"Navigieren")," und ",(0,a.kt)("strong",{parentName:"p"},"Klick ohne Navigieren"),"\nanbieten w\xfcrden, dann h\xe4tten wir einen Widerspruch im Verhalten. Auch bei der Verwendung in der Entwicklung m\xfcssten wir die Properties ",(0,a.kt)("inlineCode",{parentName:"p"},"_href")," und ",(0,a.kt)("inlineCode",{parentName:"p"},"_on"),"\noptional machen und wir k\xf6nnten nicht mehr vor der Falschverwendung warnen (Statische Codepr\xfcfung).")),(0,a.kt)("h2",{id:"herausforderungen"},"Herausforderungen"),(0,a.kt)("p",null,"Diese strenge Auslegung kann dazu f\xfchren, dass es bei der Entwicklung mit anderen Bibliotheken und Frameworks zu Problemen kommt.\nVor allem dann, wenn diese bei einem Link einen Klick erwarten."),(0,a.kt)("h3",{id:"react-router"},"React-Router"),(0,a.kt)("p",null,"Der React-Router bildet das Navigieren \xfcber Klicks ab. Bei der Verwendung mit der Link-Komponente gibt es unterschiedliche M\xf6glichkeiten der Implementierung."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Wrapping:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'<Link to="/">\n    <KolLink _href="">Home</KolLink>\n</Link>\n<Link to="/test">\n    <KolLink _href="">Test</KolLink>\n</Link>\n')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Per Klick:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'<KolButtonLink\n    _label="Home"\n    _on={{\n        onClick: () => navigate("/")\n    }}\n>\n    Home\n</KolButtonLink>\n<KolButtonLink\n    _label="Test"\n    _on={{\n        onClick: () => navigate("/test")\n    }}\n>\n    Test\n</KolButtonLink>\n')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"React-Link:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'<KolLink\n    _href=""\n    _label="Home"\n    onClick={() => navigate("/")}\n>\n    Home\n</KolLink>\n<KolLink\n    _href=""\n    _label="Test"\n    onClick={() => navigate("/test")}\n>\n    Test\n</KolLink>\n')),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Hinweis:")," ",(0,a.kt)("inlineCode",{parentName:"p"},'_href=""')," ist eigentlich nicht erlaubt.")),(0,a.kt)("p",null,"Hier gibt es auch ein kleines Code-Beispiel zum ",(0,a.kt)("kol-link",{_href:"https://codesandbox.io/s/kolibri-sample-react-link-sample-1jgz8v?file=/src/Navigation.tsx:0-112",_label:"",_target:"sandbox"},"Navigieren mit React-Router"),"."),(0,a.kt)("p",null,"Die angegebenen Beispiele zeigen, dass die Link- und ButtonLink-Komponente f\xfcr die direkte Nutzung mit React-Router geeignet sind. Allerdings wird die Link-Komponente auch innerhalb anderer KoliBri-Komponenten verwendet. ",(0,a.kt)("strong",{parentName:"p"},"Wo das so nicht funktionieren w\xfcrde!")),(0,a.kt)("h3",{id:"server-side-rendering"},"Server-Side-Rendering"),(0,a.kt)("p",null,"Das Server-Side-Rendering ist sehr \xe4hnlich zum React-Router, weil dieser technisch sehr stark durch das Framework Remix getrieben ist.\nRemix ist ein Framework zum Erstellen von hybriden Client- und Server-Side-Webapplications. Das hei\xdft die Implementierung unterscheiden sich nicht, ob ich die Anwendung sp\xe4ter als Client- oder Server-seitige Anwendung bauen m\xf6chte.\nF\xfcr Server-Side-Anwendungen m\xfcssen die navigierenden Links mit einem Klick funktionieren, weil diese Anwendungen auf dem Server und nicht im Browser ausgef\xfchrt werden."),(0,a.kt)("p",null,"Um die Wiederverwendbarkeit von KoliBri auch f\xfcr Server-Side-Webapplications zu gew\xe4hrleisten, muss der Seitenwechsel auch durch ",(0,a.kt)("strong",{parentName:"p"},"Klick ohne Navigieren")," m\xf6glich sein."),(0,a.kt)("h2",{id:"l\xf6sung"},"L\xf6sung"),(0,a.kt)("p",null,"Um die Herausforderungen zu l\xf6sen, werden alle Komponenten, denen Link-Definitionen \xfcbergeben werden, erweitert. Wenn diesen Komponenten wahlweise auch ButtonLink-Definitionen \xfcbergeben werden k\xf6nnen, dann k\xf6nnen diese auch Klicks abbilden ohne zu Navigieren, sehen aber optisch weiterhin wie Links aus."),(0,a.kt)("p",null,"Folgende Komponenten m\xfcssen dazu noch erweitert werden:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Breadcrumb"),(0,a.kt)("li",{parentName:"ul"},"LinkGroup"),(0,a.kt)("li",{parentName:"ul"},"Nav"),(0,a.kt)("li",{parentName:"ul"},"SkipNav")))}p.isMDXComponent=!0}}]);