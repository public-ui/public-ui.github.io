"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[1077],{17942:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>b});var r=t(50959);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),d=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=d(e.components);return r.createElement(s.Provider,{value:n},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=d(t),m=a,b=p["".concat(s,".").concat(m)]||p[m]||u[m]||i;return t?r.createElement(b,l(l({ref:n},c),{},{components:t})):r.createElement(b,l({ref:n},c))}));function b(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,l=new Array(i);l[0]=m;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o[p]="string"==typeof e?e:a,l[1]=o;for(var d=2;d<i;d++)l[d]=t[d];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},88212:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var r=t(15882),a=(t(50959),t(17942));const i={title:"Wie style ich eine Komponente?",authors:"deleonio",tags:["theme","tutorial"]},l="Wie style ich eine Komponente?",o={permalink:"/blog/2023/02/23/",source:"@site/blog/2023-02-23.mdx",title:"Wie style ich eine Komponente?",description:"Am Beispiel der Badge-Komponente wollen wir einmal schauen, wie das Stylen funktioniert.",date:"2023-02-23T00:00:00.000Z",formattedDate:"23. Februar 2023",tags:[{label:"theme",permalink:"/blog/tags/theme"},{label:"tutorial",permalink:"/blog/tags/tutorial"}],readingTime:1.74,hasTruncateMarker:!1,authors:[{name:"Martin Oppitz",title:"Architekt@ITZBund & Creator of KoliBri",url:"https://github.com/deleonio",imageURL:"https://avatars.githubusercontent.com/u/6279703",key:"deleonio"}],frontMatter:{title:"Wie style ich eine Komponente?",authors:"deleonio",tags:["theme","tutorial"]},prevItem:{title:"Ank\xfcndigung Release 1.5",permalink:"/blog/2023/05/03/"},nextItem:{title:"Eigene Themes unabh\xe4ngig umsetzen",permalink:"/blog/2023/02/02/"}},s={authorsImageUrls:[void 0]},d=[{value:"Herausforderung",id:"herausforderung",level:2},{value:"L\xf6sung",id:"l\xf6sung",level:2},{value:"Idee 1",id:"idee-1",level:3},{value:"Idee 2",id:"idee-2",level:3}],c={toc:d},p="wrapper";function u(e){let{components:n,...t}=e;return(0,a.kt)(p,(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Am Beispiel der Badge-Komponente wollen wir einmal schauen, wie das Stylen funktioniert."),(0,a.kt)("h2",{id:"herausforderung"},"Herausforderung"),(0,a.kt)("p",null,"Die Badge-Komponente hat einen Smart-Button und der soll optisch kleiner aussehen, wie ein Button, der immer mindestens\n44px hoch und breit ist."),(0,a.kt)("ul",{className:"contains-task-list"},(0,a.kt)("li",{parentName:"ul",className:"task-list-item"},(0,a.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Bild einf\xfcgen vorher")),(0,a.kt)("p",null,"Wir sehen im nachfolgenden HTML-Snippet, dass der umschlie\xdfende Span die Badge-Hintergrundfarbe bestimmt. Da\nder Button innerhalb des Span ist, wird die Hintergrundfarbe auch auf den Button gesetzt. Der Button muss\nmindestens 44px hoch und breit sein, also wird auch der \xe4u\xdfere Span mindestens 44px hoch und breit.\n",(0,a.kt)("strong",{parentName:"p"},"Das wollen wir nicht.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<span class="smart-button" style="background-color: rgb(204, 222, 218); color: rgb(0, 78, 55);">\n    <kol-span-wc class="hydrated">\n        <span>\n            <span>Badge mit Schalter</span>\n        </span>\n    </kol-span-wc>\n    <kol-button-wc _icon-only="" class="hydrated">\n        <button aria-labelledby="cf22bf" class="normal icon-only" type="button">\n            <kol-span-wc class="icon-only hydrated" _icon-only="">\n                <span>\n                    <kol-icon class="icon left hydrated" style=""></kol-icon>\n                </span>\n            </kol-span-wc>\n        </button>\n        <kol-tooltip aria-hidden="true" class="hydrated">\n            <div id="floating" style="left: 1233.91px; top: 312.5px; display: none; visibility: hidden;">\n                <div id="arrow" style="left: 19px; bottom: -5px;"></div>\n                <kol-badge id="cf22bf" class="hydrated" style=""></kol-badge>\n            </div>\n        </kol-tooltip>\n    </kol-button-wc>\n</span>\n')),(0,a.kt)("h2",{id:"l\xf6sung"},"L\xf6sung"),(0,a.kt)("h3",{id:"idee-1"},"Idee 1"),(0,a.kt)("p",null,"Wir optimieren die Komponente, indem wir die Hintergrundfarbe vom umschlie\xdfenden Span entfernen und auf die beiden\ninneren Span-Elemente \xfcbertragen."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<span class="smart-button" style="color: rgb(0, 78, 55);">\n    <kol-span-wc class="hydrated" style="background-color: rgb(204, 222, 218);">\n        <span>\n            <span>Badge mit Schalter</span>\n        </span>\n    </kol-span-wc>\n    <kol-button-wc _icon-only="" class="hydrated">\n        <button aria-labelledby="cf22bf" class="normal icon-only" type="button">\n            <kol-span-wc class="icon-only hydrated" _icon-only="" style="background-color: rgb(204, 222, 218);">\n                <span>\n                    <kol-icon class="icon left hydrated" style=""></kol-icon>\n                </span>\n            </kol-span-wc>\n        </button>\n        <kol-tooltip aria-hidden="true" class="hydrated">\n            <div id="floating" style="left: 1233.91px; top: 312.5px; display: none; visibility: hidden;">\n                <div id="arrow" style="left: 19px; bottom: -5px;"></div>\n                <kol-badge id="cf22bf" class="hydrated" style=""></kol-badge>\n            </div>\n        </kol-tooltip>\n    </kol-button-wc>\n</span>\n')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Das geht aber nicht"),", weil wir an den 2. Span nicht rankommen. Wir m\xfcssen also eine andere L\xf6sung finden."),(0,a.kt)("h3",{id:"idee-2"},"Idee 2"),(0,a.kt)("p",null,"Es bleibt beim der initialen Komponenten-Konstruktion. Wir versuchen es mit CSS und erzwingen eine Zeilenh\xf6he f\xfcr\nden umschlie\xdfenden Span."),(0,a.kt)("ul",{className:"contains-task-list"},(0,a.kt)("li",{parentName:"ul",className:"task-list-item"},(0,a.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Bild Heihgt 1.75rem einf\xfcgen")),(0,a.kt)("p",null,"Wir sehen im Bild, dass der linke Rand des Button oben rausragt. Das k\xf6nnen wir aber leicht l\xf6sen, indem wir\nden linken Rand des Buttons auf 0 setzen und stattdessen einen rechten Rand am Text-Span setzen."))}u.isMDXComponent=!0}}]);