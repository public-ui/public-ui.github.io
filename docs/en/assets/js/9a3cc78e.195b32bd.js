"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[76832],{17942:(t,e,n)=>{n.d(e,{Zo:()=>d,kt:()=>m});var r=n(50959);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var p=r.createContext({}),c=function(t){var e=r.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},d=function(t){var e=c(t.components);return r.createElement(p.Provider,{value:e},t.children)},k="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},s=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,p=t.parentName,d=i(t,["components","mdxType","originalType","parentName"]),k=c(n),s=a,m=k["".concat(p,".").concat(s)]||k[s]||u[s]||l;return n?r.createElement(m,o(o({ref:e},d),{},{components:n})):r.createElement(m,o({ref:e},d))}));function m(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,o=new Array(l);o[0]=s;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i[k]="string"==typeof t?t:a,o[1]=i;for(var c=2;c<l;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},71555:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>i,default:()=>s,frontMatter:()=>o,metadata:()=>p,toc:()=>d});var r=n(52319),a=(n(50959),n(17942)),l=n(23872);const o={slug:"/concepts/expert-slot",title:"Expert-slot",description:"Mittels des Expert-Modus bieten wir mehr eigenverantwortliche Freiheiten an.",tags:["Architektur","arc42","Konzept"]},i=void 0,p={unversionedId:"concepts/expert-slot",id:"version-1.7/concepts/expert-slot",title:"Expert-slot",description:"Mittels des Expert-Modus bieten wir mehr eigenverantwortliche Freiheiten an.",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-1.7/20-concepts/08-expert-slot.mdx",sourceDirName:"20-concepts",slug:"/concepts/expert-slot",permalink:"/en/docs/concepts/expert-slot",draft:!1,tags:[{label:"Architektur",permalink:"/en/docs/tags/architektur"},{label:"arc42",permalink:"/en/docs/tags/arc-42"},{label:"Konzept",permalink:"/en/docs/tags/konzept"}],version:"1.7",sidebarPosition:8,frontMatter:{slug:"/concepts/expert-slot",title:"Expert-slot",description:"Mittels des Expert-Modus bieten wir mehr eigenverantwortliche Freiheiten an.",tags:["Architektur","arc42","Konzept"]},sidebar:"tutorialSidebar",previous:{title:"Swizzling",permalink:"/en/docs/concepts/swizzling"},next:{title:"Inputs, Select und Textarea",permalink:"/en/docs/concepts/form-input"}},c={},d=[{value:"Motivation",id:"motivation",level:2},{value:"&quot;Expert&quot;-slot",id:"expert-slot",level:2},{value:"Component list",id:"component-list",level:3},{value:"Beispiel",id:"beispiel",level:3}],k={toc:d},u="wrapper";function s(t){let{components:e,...n}=t;return(0,a.kt)(u,(0,r.Z)({},k,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"motivation"},"Motivation"),(0,a.kt)("p",null,(0,a.kt)("strong",null,(0,a.kt)("kol-abbr",{"_tooltip-align":"right",_title:"Accessibility component library"},"KoliBri"))," ","provides self-contained and accessible components and allows the \u201cfilling\u201d of the components, usually only via the properties of the components. All incoming property values are validated and mapped to the internal state."),(0,a.kt)("p",null,(0,a.kt)("kol-indented-text",null,(0,a.kt)("strong",null,"Through this, we retain control over the components and their semantic construction."))),(0,a.kt)("p",null,"However, to further improve the reusability of"," ",(0,a.kt)("strong",null,(0,a.kt)("kol-abbr",{"_tooltip-align":"right",_title:"Accessibility component library"},"KoliBri"))," ",", we will extend the flexibility with a so-called ",(0,a.kt)("strong",null,"expert")," mode. The expert mode defines the point where the ",(0,a.kt)("strong",null,"expert")," gets more design space within the component and in return takes responsibility for accessibility."),(0,a.kt)("h2",{id:"expert-slot"},'"Expert"-slot'),(0,a.kt)("p",null,"The \u201cExpert\u201d slot can be used to \u201coverwrite\u201d the internal construction of some components. If necessary, it is necessary to set the regular required property values of the component to ",(0,a.kt)("code",null,"empty"),"."),(0,a.kt)("h3",{id:"component-list"},"Component list"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"right"},"Component"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Available from"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Slot name"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Without slot name"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"right"},"Badge"),(0,a.kt)("td",{parentName:"tr",align:"center"},"-"),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("code",null,"expert")),(0,a.kt)("td",{parentName:"tr",align:"center"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"right"},"Button"),(0,a.kt)("td",{parentName:"tr",align:"center"},"1.1.10"),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("code",null,"expert")),(0,a.kt)("td",{parentName:"tr",align:"center"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"right"},"ButtonLink"),(0,a.kt)("td",{parentName:"tr",align:"center"},"1.1.15"),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("code",null,"expert")),(0,a.kt)("td",{parentName:"tr",align:"center"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"right"},"ButtonToggle"),(0,a.kt)("td",{parentName:"tr",align:"center"},"-"),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("code",null,"expert")),(0,a.kt)("td",{parentName:"tr",align:"center"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"right"},"InputCheckbox"),(0,a.kt)("td",{parentName:"tr",align:"center"},"-"),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("code",null,"expert")," ","|"," ",(0,a.kt)("code",null)),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("sup",null,"*"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"right"},"InputDate"),(0,a.kt)("td",{parentName:"tr",align:"center"},"-"),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("code",null,"expert")," ","|"," ",(0,a.kt)("code",null)),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("sup",null,"*"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"right"},"InputEmail"),(0,a.kt)("td",{parentName:"tr",align:"center"},"-"),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("code",null,"expert")," ","|"," ",(0,a.kt)("code",null)),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("sup",null,"*"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"right"},"InputNumber"),(0,a.kt)("td",{parentName:"tr",align:"center"},"-"),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("code",null,"expert")," ","|"," ",(0,a.kt)("code",null)),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("sup",null,"*"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"right"},"InputPassword"),(0,a.kt)("td",{parentName:"tr",align:"center"},"-"),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("code",null,"expert")," ","|"," ",(0,a.kt)("code",null)),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("sup",null,"*"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"right"},"InputRange"),(0,a.kt)("td",{parentName:"tr",align:"center"},"-"),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("code",null,"expert")," ","|"," ",(0,a.kt)("code",null)),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("sup",null,"*"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"right"},"InputRadio"),(0,a.kt)("td",{parentName:"tr",align:"center"},"-"),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("code",null,"expert")," ","|"," ",(0,a.kt)("code",null)),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("sup",null,"*"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"right"},"InputText"),(0,a.kt)("td",{parentName:"tr",align:"center"},"-"),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("code",null,"expert")," ","|"," ",(0,a.kt)("code",null)),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("sup",null,"*"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"right"},"Select"),(0,a.kt)("td",{parentName:"tr",align:"center"},"-"),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("code",null,"expert")," ","|"," ",(0,a.kt)("code",null)),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("sup",null,"*"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"right"},"Textarea"),(0,a.kt)("td",{parentName:"tr",align:"center"},"-"),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("code",null,"expert")," ","|"," ",(0,a.kt)("code",null)),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("sup",null,"*"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"right"},"Link"),(0,a.kt)("td",{parentName:"tr",align:"center"},"1.1.16"),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("code",null,"expert")," ","|"," ",(0,a.kt)("code",null)),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("sup",null,"*"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"right"},"LinkButton"),(0,a.kt)("td",{parentName:"tr",align:"center"},"1.1.16"),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("code",null,"expert")," ","|"," ",(0,a.kt)("code",null)),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("sup",null,"*"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"right"},"Span"),(0,a.kt)("td",{parentName:"tr",align:"center"},"1.1.10"),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("code",null,"expert")),(0,a.kt)("td",{parentName:"tr",align:"center"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"right"},"Tooltip"),(0,a.kt)("td",{parentName:"tr",align:"center"},"-"),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("code",null,"expert")),(0,a.kt)("td",{parentName:"tr",align:"center"})))),(0,a.kt)("blockquote",null,(0,a.kt)("sup",null,"*")," The blank slot name is only supported due to backwards compatibility up to major release 2."),(0,a.kt)("h3",{id:"beispiel"},"Beispiel"),(0,a.kt)("p",null,"A button is regularly used as follows:"),(0,a.kt)(l.ic,{_label:"I am a button",mdxType:"KolButton"}),(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'<KolButton _label="I am a button"></KolButton>\n')),(0,a.kt)("p",null,"With the Expert slot, the button can now be used in this way:"),(0,a.kt)(l.ic,{_label:"",mdxType:"KolButton"},(0,a.kt)("span",{slot:"expert"},"I am more than just a button")),(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'<KolButton _label="">\n    <span slot="expert">I am more than just a button</span>\n</KolButton>\n')),(0,a.kt)("p",null,(0,a.kt)("kol-alert",{_type:"info"},(0,a.kt)("strong",null,"The property ",(0,a.kt)("code",null,'slot="expert"')," enables a traceable handover point and clearly defines the context change."))))}s.isMDXComponent=!0}}]);