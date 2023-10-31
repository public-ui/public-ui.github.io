"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[68056],{17942:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>b});var a=n(50959);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=c(n),m=r,b=u["".concat(s,".").concat(m)]||u[m]||d[m]||l;return n?a.createElement(b,i(i({ref:t},p),{},{components:n})):a.createElement(b,i({ref:t},p))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[u]="string"==typeof e?e:r,i[1]=o;for(var c=2;c<l;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},88445:(e,t,n)=>{n.d(t,{d:()=>a});const a=function(e,t,n){return void 0===n&&(n="/"),e?`${e}${n}${t}`:`${t}`}},45304:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>b,frontMatter:()=>o,metadata:()=>c,toc:()=>u});var a=n(52319),r=(n(50959),n(17942)),l=n(23872),i=n(88445);const o={title:"Gesundheitszustand",description:"Es ist wichtig, dass alle Module von KoliBriaktuell und gesund bleiben.",tags:["Architektur","arc42","Qualit\xe4t"]},s=void 0,c={unversionedId:"health-state",id:"version-1.7/health-state",title:"Gesundheitszustand",description:"Es ist wichtig, dass alle Module von KoliBriaktuell und gesund bleiben.",source:"@site/versioned_docs/version-1.7/90-health-state.mdx",sourceDirName:".",slug:"/health-state",permalink:"/docs/health-state",draft:!1,tags:[{label:"Architektur",permalink:"/docs/tags/architektur"},{label:"arc42",permalink:"/docs/tags/arc-42"},{label:"Qualit\xe4t",permalink:"/docs/tags/qualitat"}],version:"1.7",sidebarPosition:90,frontMatter:{title:"Gesundheitszustand",description:"Es ist wichtig, dass alle Module von KoliBriaktuell und gesund bleiben.",tags:["Architektur","arc42","Qualit\xe4t"]},sidebar:"tutorialSidebar",previous:{title:"Changelog und Backlog",permalink:"/docs/changelog"},next:{title:"Impressum",permalink:"/docs/impressum"}},p={},u=[],d={toc:u},m="wrapper";function b(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"In der nachfolgenden Tabelle werden zahlreiche Informationen zu den Paketen angezeigt, um einen \xdcberblick \xfcber deren Gesundheitszustand zu erhalten."),(0,r.kt)(l.Vp,{className:"col-12",_label:"Liste von Statuswerte zu den Paketen",_minWidth:"95em",_headers:{horizontal:[[{label:"Package",key:"name",render:(e,t,n)=>`${(0,i.d)(n.scope,n.name)}`,width:"15em"},{label:"Version",key:"name",textAlign:"center",render:(e,t,n)=>`<kol-link _href="https://www.npmjs.com/package/${(0,i.d)(n.scope,n.name)}" _target="npmjs" _label="">\n\t<img alt="" src="https://img.shields.io/npm/v/${(0,i.d)(n.scope,n.name)}" />\n</kol-link>`},{label:"Downloads",key:"name",textAlign:"center",render:(e,t,n)=>`<kol-link _href="https://npmcharts.com/compare/${(0,i.d)(n.scope,n.name)}" _target="npmcharts" _label="">\n\t<img alt="" src="https://img.shields.io/npm/dt/${(0,i.d)(n.scope,n.name)}.svg" />\n</kol-link>`},{label:"Quality",key:"name",textAlign:"center",render:()=>'<img alt="" src="https://packagequality.com/shield/create-kolibri.svg" />'},{label:"Install size",key:"name",textAlign:"center",render:(e,t,n)=>`<kol-link _href="https://packagephobia.com/result?p=${(0,i.d)(n.scope,n.name)}" _target="packagephobia" _label="">\n\t<img alt="" src="https://packagephobia.now.sh/badge?p=${(0,i.d)(n.scope,n.name)}" />\n</kol-link>`},{label:"Dependencies",key:"name",textAlign:"center",render:(e,t,n)=>`<kol-link _href="https://libraries.io/npm/${(0,i.d)(n.scope,n.name,"%2F")}" _target="libraries" _label="">\n\t<img alt="" src="https://img.shields.io/librariesio/release/npm/${(0,i.d)(n.scope,n.name)}" />\n</kol-link>`},{label:"Health",key:"name",render:(e,t,n)=>`<kol-link _href="https://snyk.io/advisor/npm-package/${(0,i.d)(n.scope,n.name)}" _target="snyk" _label="">\n\t<img alt="" src="https://snyk.io/advisor/npm-package/${(0,i.d)(n.scope,n.name)}/badge.svg" />\n</kol-link>`},{label:"Vulnerabilities*",key:"name",textAlign:"center",render:(e,t,n)=>`<kol-link _href="https://snyk.io/advisor/npm-package/${(0,i.d)(n.scope,n.name,"%2F")}" _target="snyk" _label="">\n\t<img alt="" src="https://snyk.io/test/npm/${(0,i.d)(n.scope,n.name)}/badge.svg" />\n</kol-link>`}]]},_data:[{scope:"@public-ui",name:"components"},{scope:"@public-ui",name:"core"},{scope:"@public-ui",name:"schema"},{scope:"@public-ui",name:"themes"},{scope:"@public-ui",name:"angular-v15"},{scope:"@public-ui",name:"angular-v14"},{scope:"@public-ui",name:"angular-v13"},{scope:"@public-ui",name:"angular-v12"},{scope:"@public-ui",name:"angular-v11"},{scope:"@public-ui",name:"preact"},{scope:"@public-ui",name:"react"},{scope:"@public-ui",name:"solid"},{scope:"@public-ui",name:"vue"},{scope:"@public-ui",name:"hydrate"}],mdxType:"KolTable"}),(0,r.kt)("div",{style:{display:"block",padding:"1rem"}}))}b.isMDXComponent=!0}}]);