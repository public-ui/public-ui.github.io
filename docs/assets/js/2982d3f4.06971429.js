"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[47181],{17942:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>g});var r=t(50959);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var a=r.createContext({}),c=function(e){var n=r.useContext(a),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},d=function(e){var n=c(e.components);return r.createElement(a.Provider,{value:n},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,s=e.originalType,a=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),p=c(t),m=i,g=p["".concat(a,".").concat(m)]||p[m]||u[m]||s;return t?r.createElement(g,l(l({ref:n},d),{},{components:t})):r.createElement(g,l({ref:n},d))}));function g(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var s=t.length,l=new Array(s);l[0]=m;var o={};for(var a in n)hasOwnProperty.call(n,a)&&(o[a]=n[a]);o.originalType=e,o[p]="string"==typeof e?e:i,l[1]=o;for(var c=2;c<s;c++)l[c]=t[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},77535:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>u,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var r=t(15882),i=(t(50959),t(17942));const s={title:"Scss",description:"Auf dieser Seite wird beschrieben, wie Scss zur Erstellung von KoliBri-Themes verwendet werden kann."},l="Scss",o={unversionedId:"concepts/styling/scss",id:"version-1.6.0/concepts/styling/scss",title:"Scss",description:"Auf dieser Seite wird beschrieben, wie Scss zur Erstellung von KoliBri-Themes verwendet werden kann.",source:"@site/versioned_docs/version-1.6.0/20-concepts/05-styling/40-scss.md",sourceDirName:"20-concepts/05-styling",slug:"/concepts/styling/scss",permalink:"/docs/1.6.0/concepts/styling/scss",draft:!1,tags:[],version:"1.6.0",sidebarPosition:40,frontMatter:{title:"Scss",description:"Auf dieser Seite wird beschrieben, wie Scss zur Erstellung von KoliBri-Themes verwendet werden kann."},sidebar:"tutorialSidebar",previous:{title:"Designer",permalink:"/docs/1.6.0/concepts/styling/designer"},next:{title:"Swizzling",permalink:"/docs/1.6.0/concepts/swizzling"}},a={},c=[{value:"Hintergrund",id:"hintergrund",level:2},{value:"Erstellung",id:"erstellung",level:2},{value:"Prototyping",id:"prototyping",level:3},{value:"Bundling",id:"bundling",level:3},{value:"Patching",id:"patching",level:3},{value:"Referenzprojekt",id:"referenzprojekt",level:2}],d={toc:c},p="wrapper";function u(e){let{components:n,...t}=e;return(0,i.kt)(p,(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"scss"},"Scss"),(0,i.kt)("p",null,"Dieser Artikel beschreibt, wie Scss zur Erstellung von KoliBri-Themes genutzt werden kann."),(0,i.kt)("kol-alert",{_heading:"Designer oder Scss",_type:"info",_variant:"card"},"KoliBri bietet zum Erstellen von Themes auch einen ",(0,i.kt)("kol-link",{_href:"/docs/concepts/styling/designer",_label:"Designer"})," an. Je nach pers\xf6nlichen Pr\xe4ferenzen kann Scss oder der Designer verwendet werden."),(0,i.kt)("br",null),(0,i.kt)("p",null,"Scss ist eine Erweiterung von CSS, die es erm\xf6glicht, Variablen, Funktionen, Mixins und vieles mehr zu verwenden. Scss kann f\xfcr die Erstellung von KoliBri-Themes genutzt. Hierf\xfcr hat das Entwicklungsteam vom Projekt ",(0,i.kt)("kol-link",{_href:"https://gitlab.opencode.de/kern-designsystem/pattern-library",_label:"KERN",_target:"kern"})," ein Build-Script geschrieben, um aus Scss-Dateien die entsprechenden KoliBri-Themes zu generieren."),(0,i.kt)("h2",{id:"hintergrund"},"Hintergrund"),(0,i.kt)("p",null,"Wir haben in den ",(0,i.kt)("kol-link",{_href:"/docs/faq",_label:"FAQ"})," beschrieben, warum wir CSS in JavaScript verwalten. Das bedeutet, dass das einfach Einbinden von CSS in der Rahmenseite nicht die KoliBri-Komponenten styled. Denn jede Komponente wei\xdf \xfcber JavaScript selbst, welches CSS es verwenden soll. Das CSS muss also in JavaScript verpackt werden, so dass es bei der Ausf\xfchrung der Web Component geladen werden kann."),(0,i.kt)("h2",{id:"erstellung"},"Erstellung"),(0,i.kt)("p",null,"Um ein Theme zu erstellen, kann in grob drei Schritten vorgegangen werden:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Erste Schritte:")," Ein Theme prototypisch erstellen"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Paketierung:")," Theme-Paket erstellen und bauen"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Optimierung:")," Theme-Paket laden und durch Patchen modifizieren")),(0,i.kt)("h3",{id:"prototyping"},"Prototyping"),(0,i.kt)("p",null,"Im ersten Schritt empfiehlt es sich zun\xe4chst mit der Art und Weise des Themings vertraut zu machen. Hierzu kann man einfach in einem KoliBri-Projekt (z.B. einer App) bei der Registrierung der KoliBri-Komponenten inline ein Theme zu erstellen und zu laden."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"import { register } from '@public-ui/components';\nimport { defineCustomElements } from '@public-ui/components/dist/loader';\nimport { KoliBri } from '@public-ui/schema';\n\n// ts-prune-ignore-next\nexport default (): void => {\n    register(\n        KoliBri.createTheme('my-theme-identifier', {\n            'KOL-BUTTON': `button {\n        background-color: #000;\n        color: #fff;\n        padding: .5em .75em;\n      }`,\n        }),\n        defineCustomElements,\n        {\n            theme: {\n                detect: 'fixed',\n                name: 'my-theme-identifier',\n            },\n        }\n    ).catch(console.warn);\n};\n")),(0,i.kt)("h3",{id:"bundling"},"Bundling"),(0,i.kt)("p",null,"Im zweiten Schritt sollte ein eigenst\xe4ndiges JavaScript-Projekt angelegt werden. Den Aufbau und die Scripte k\xf6nnen der Scss-Ansatz vom KERN-Team entnommen werden. Das Projekt hat grob folgende Struktur und kann um eigenen Code erweitert werden:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"/scripts/\n  compileAll.js\n  compileOne.js\n  sassCompiler.js\n/src/\n  /themes/\n    /my-theme/\n      *.scss\n/package.json\n")),(0,i.kt)("p",null,"Die ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json")," beinhaltet folgende wesentliche Scripte:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "scripts": {\n        "build": "unbuild",\n        "compile": "node scripts/compileOne.js",\n        "compile-all": "node scripts/compileAll.js",\n        "compile-all-and-build": "npm run compile-all && npm run build",\n        "prepack": "npm run compile-all-and-build"\n    },\n    "dependencies": {\n        "sass": "1.62.1"\n    },\n    "devDependencies": {\n        "@public-ui/components": "1.5.1",\n        "@public-ui/schema": "1.5.1",\n        "@types/node": "18.16.14",\n        "typescript": "5.0.4",\n        "unbuild": "1.1.2"\n    },\n    "peerDependencies": {\n        "@public-ui/components": "1.5.1"\n    }\n}\n')),(0,i.kt)("p",null,"Mittels ",(0,i.kt)("inlineCode",{parentName:"p"},"npm pack")," kann ein Theme kompiliert werden. Das Ergebnis ist ein JavaScript-Modul, welches das Theme enth\xe4lt. Dieses kann dann in einem KoliBri-Projekt \xfcber die Register-Methode geladen werden."),(0,i.kt)("h3",{id:"patching"},"Patching"),(0,i.kt)("p",null,"M\xf6chte man sp\xe4ter das Theme optimieren, ist es m\xf6glich dies \xfcber das Patching zu tun. Hierzu wird das Theme-Paket geladen und die entsprechenden CSS-Regeln \xfcberschrieben. Das Patching kann in einem KoliBri-Projekt erfolgen."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"import { register, KoliBriDevHelper } from '@public-ui/components';\nimport { defineCustomElements } from '@public-ui/components/dist/loader';\nimport { KoliBri } from '@public-ui/schema';\n\n// ts-prune-ignore-next\nexport default (): void => {\n    register(\n        KoliBri.createTheme('my-theme-identifier', {\n            'KOL-BUTTON': `button {\n        background-color: #000;\n        color: #fff;\n        padding: .5em .75em;\n      }`,\n        }),\n        defineCustomElements,\n        {\n            theme: {\n                detect: 'fixed',\n                name: 'my-theme-identifier',\n            },\n        }\n    )\n        .then(() => {\n            KoliBriDevHelper.patchTheme('my-theme-identifier', {\n                'KOL-BUTTON': `button {\n          background-color: #fff;\n          color: #000;\n        }`,\n            });\n        })\n        .catch(console.warn);\n};\n")),(0,i.kt)("p",null,"Identifizierte \xc4nderungen k\xf6nnen dann sp\xe4ter wieder in den Scss-Dateien \xfcbernommen werden."),(0,i.kt)("h2",{id:"referenzprojekt"},"Referenzprojekt"),(0,i.kt)("p",null,"Mehr zur Umsetzung des Scss-Ansatzen findet sich im ",(0,i.kt)("kol-link",{_href:"https://gitlab.opencode.de/kern-designsystem/pattern-library/-/tree/main/packages/themes",_label:"Git-Repository von KERN",_target:"kern"}),"."))}u.isMDXComponent=!0}}]);