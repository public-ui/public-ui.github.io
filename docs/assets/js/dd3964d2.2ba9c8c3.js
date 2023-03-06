"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[8542],{49613:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var r=n(59496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=c(n),d=a,g=u["".concat(s,".").concat(d)]||u[d]||m[d]||i;return n?r.createElement(g,l(l({ref:t},p),{},{components:n})):r.createElement(g,l({ref:t},p))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[u]="string"==typeof e?e:a,l[1]=o;for(var c=2;c<i;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},83579:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>u});var r=n(15882),a=(n(59496),n(49613)),i=n(4343);const l=function(e,t,n){return void 0===n&&(n="/"),e?`${e}${n}${t}`:`${t}`},o={title:"Gesundheitszustand",description:"Es ist wichtig, dass alle Module von KoliBriaktuell und gesund bleiben.",tags:["Architektur","arc42","Qualit\xe4t"]},s=void 0,c={unversionedId:"health-state",id:"health-state",title:"Gesundheitszustand",description:"Es ist wichtig, dass alle Module von KoliBriaktuell und gesund bleiben.",source:"@site/docs/90-health-state.mdx",sourceDirName:".",slug:"/health-state",permalink:"/docs/health-state",draft:!1,tags:[{label:"Architektur",permalink:"/docs/tags/architektur"},{label:"arc42",permalink:"/docs/tags/arc-42"},{label:"Qualit\xe4t",permalink:"/docs/tags/qualitat"}],version:"current",sidebarPosition:90,frontMatter:{title:"Gesundheitszustand",description:"Es ist wichtig, dass alle Module von KoliBriaktuell und gesund bleiben.",tags:["Architektur","arc42","Qualit\xe4t"]},sidebar:"tutorialSidebar",previous:{title:"Changelog und Backlog",permalink:"/docs/changelog"},next:{title:"Impressum",permalink:"/docs/impressum"}},p={},u=[],m={toc:u};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"In der nachfolgenden Tabelle werden zahlreiche Informationen zu den Paketen angezeigt, um einen \xdcberblick \xfcber deren Gesundheitszustand zu erhalten."),(0,a.kt)(i.Vp,{className:"col-12",_caption:"Liste von Statuswerte zu den Paketen",_minWidth:"95em",_headers:{horizontal:[[{label:"Package",key:"name",render:(e,t,n)=>`${l(n.scope,n.name)}`,width:"15em"},{label:"Version",key:"name",textAlign:"center",render:(e,t,n)=>`<kol-link _href="https://www.npmjs.com/package/${l(n.scope,n.name)}" _target="npmjs">\n\t<img alt="" src="https://img.shields.io/npm/v/${l(n.scope,n.name)}" />\n</kol-link>`},{label:"Downloads",key:"name",textAlign:"center",render:(e,t,n)=>`<kol-link _href="https://npmcharts.com/compare/${l(n.scope,n.name)}" _target="npmcharts">\n\t<img alt="" src="https://img.shields.io/npm/dt/${l(n.scope,n.name)}.svg" />\n</kol-link>`},{label:"Quality",key:"name",textAlign:"center",render:()=>'<img alt="" src="https://packagequality.com/shield/create-kolibri.svg" />'},{label:"Install size",key:"name",textAlign:"center",render:(e,t,n)=>`<kol-link _href="https://packagephobia.com/result?p=${l(n.scope,n.name)}" _target="packagephobia">\n\t<img alt="" src="https://packagephobia.now.sh/badge?p=${l(n.scope,n.name)}" />\n</kol-link>`},{label:"Dependencies",key:"name",textAlign:"center",render:(e,t,n)=>`<kol-link _href="https://libraries.io/npm/${l(n.scope,n.name,"%2F")}" _target="libraries">\n\t<img alt="" src="https://img.shields.io/librariesio/release/npm/${l(n.scope,n.name)}" />\n</kol-link>`},{label:"Health",key:"name",render:(e,t,n)=>`<kol-link _href="https://snyk.io/advisor/npm-package/${l(n.scope,n.name)}" _target="snyk">\n\t<img alt="" src="https://snyk.io/advisor/npm-package/${l(n.scope,n.name)}/badge.svg" />\n</kol-link>`},{label:"Vulnerabilities*",key:"name",textAlign:"center",render:(e,t,n)=>`<kol-link _href="https://snyk.io/advisor/npm-package/${l(n.scope,n.name,"%2F")}" _target="snyk">\n\t<img alt="" src="https://snyk.io/test/npm/${l(n.scope,n.name)}/badge.svg" />\n</kol-link>`}]]},_data:[{scope:"@public-ui",name:"components"},{scope:"@public-ui",name:"core"},{scope:"@public-ui",name:"schema"},{scope:"@public-ui",name:"themes"},{scope:"@public-ui",name:"angular-v15"},{scope:"@public-ui",name:"angular-v14"},{scope:"@public-ui",name:"angular-v13"},{scope:"@public-ui",name:"angular-v12"},{scope:"@public-ui",name:"angular-v11"},{scope:"@public-ui",name:"preact"},{scope:"@public-ui",name:"react"},{scope:"@public-ui",name:"solid"},{scope:"@public-ui",name:"vue"},{scope:"@public-ui",name:"hydrate"}],mdxType:"KolTable"}),(0,a.kt)("div",{style:{display:"block",padding:"1rem"}}))}d.isMDXComponent=!0}}]);