var Le=Object.defineProperty,Me=Object.defineProperties;var Re=Object.getOwnPropertyDescriptors;var I=Object.getOwnPropertySymbols;var oe=Object.prototype.hasOwnProperty,se=Object.prototype.propertyIsEnumerable;var ne=(a,r,t)=>r in a?Le(a,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[r]=t,$=(a,r)=>{for(var t in r||(r={}))oe.call(r,t)&&ne(a,t,r[t]);if(I)for(var t of I(r))se.call(r,t)&&ne(a,t,r[t]);return a},J=(a,r)=>Me(a,Re(r));var ie=(a,r)=>{var t={};for(var l in a)oe.call(a,l)&&r.indexOf(l)<0&&(t[l]=a[l]);if(a!=null&&I)for(var l of I(a))r.indexOf(l)<0&&se.call(a,l)&&(t[l]=a[l]);return t};(self.webpackChunk_public_ui_storybook=self.webpackChunk_public_ui_storybook||[]).push([[6416],{"./src/34-theming.stories.mdx":(a,r,t)=>{"use strict";t.r(r),t.d(r,{__namedExportsOrder:()=>H,__page:()=>R,default:()=>G});var l=t("./node_modules/core-js/modules/es.object.keys.js"),x=t("./node_modules/core-js/modules/es.array.index-of.js"),k=t("./node_modules/core-js/modules/es.symbol.js"),p=t("./node_modules/core-js/modules/es.function.bind.js"),K=t("./node_modules/core-js/modules/es.object.assign.js"),y=t("./node_modules/react/index.js"),e=t("./node_modules/@mdx-js/react/dist/esm.js"),O=t("./node_modules/@storybook/addon-docs/dist/esm/index.js"),m=t("./node_modules/@public-ui/react/dist/index.mjs"),L=t("./src/snippets/kolibri.tsx"),P=t("./src/components/mermaid.tsx");const F=t.p+"static/media/abgrenzung.a3a3f1b1.jpg",n=t.p+"static/media/theme-switch.57230a5f.png";var z=["components"];function w(){return w=Object.assign?Object.assign.bind():function(c){for(var f=1;f<arguments.length;f++){var h=arguments[f];for(var g in h)Object.prototype.hasOwnProperty.call(h,g)&&(c[g]=h[g])}return c},w.apply(this,arguments)}function N(c,f){if(c==null)return{};var h=A(c,f),g,C;if(Object.getOwnPropertySymbols){var S=Object.getOwnPropertySymbols(c);for(C=0;C<S.length;C++)g=S[C],!(f.indexOf(g)>=0)&&Object.prototype.propertyIsEnumerable.call(c,g)&&(h[g]=c[g])}return h}function A(c,f){if(c==null)return{};var h={},g=Object.keys(c),C,S;for(S=0;S<g.length;S++)C=g[S],!(f.indexOf(C)>=0)&&(h[C]=c[C]);return h}var U=function(f){return function(g){return console.warn("Component "+f+" was not imported, exported, or provided by MDXProvider as global scope"),(0,e.kt)("div",g)}},W=U("MermaidDesignProcess"),X={},q="wrapper";function M(c){var f=c.components,h=N(c,z);return(0,e.kt)(q,w({},X,h,{components:f,mdxType:"MDXLayout"}),(0,e.kt)(O.h_,{title:"Konzepte/Theming/Konzept",id:"theming",mdxType:"Meta"}),(0,e.kt)("kol-alert",{_type:"info"},(0,e.kt)("img",{width:"100%",src:n,alt:"Zeigt wo der Schalter zum Umschalten des Themes im Toolbar ist"}),(0,e.kt)("p",null,(0,e.kt)("kol-icon",{_icon:"fa-solid fa-arrow-right"})," \xDCber den Schalter in der Toolbar oben, k\xF6nnen Sie das Theme von unserer Seite (KoliBri) umschalten.")),(0,e.kt)("kol-heading",{_level:"1"},"Theming"),(0,e.kt)("p",null,"Das Einzigartige an ",(0,e.kt)(L.p,{mdxType:"KoliBri"})," ist die ",(0,e.kt)("strong",null,"Referenzimplementierung")," von Komponenten, die von Grund auf"," ",(0,e.kt)("strong",null,"semantisch W3C- und WCAG-konform")," und damit ",(0,e.kt)("strong",null,"vollst\xE4ndig barrierefrei")," bez\xFCglich der assistiven Unterst\xFCtzung sind. Alle Komponenten werden dabei als"," ",(0,e.kt)(m.Nv,{_href:"https://developer.mozilla.org/en-US/docs/Web/Web_Components?retiredLocale=de",_target:"mozilla",mdxType:"KolLink"},"Web Components")," ","umgesetzt und sind somit in allen webbasierten Projekten wiederverwendbar. In der folgenden Abbildung werden diese Komponenten durch die grau-gestrichelten Formen in der Mitte dargestellt."),(0,e.kt)("p",null,(0,e.kt)(m.CV,{mdxType:"KolIndentedText"},(0,e.kt)("strong",null,"1. KoliBri-Komponenten k\xF6nnten als Basis f\xFCr alle Design Systeme oder Komponenten-Bibliotheken wiederverwendet werden."))),(0,e.kt)("img",{src:F,alt:"Darstellung, wie die Komponenten mittels verschiedener Styleguides zu kundenspezifischen Komponenten werden."}),(0,e.kt)("p",null,"Im ersten Release (v1.0) hatte ",(0,e.kt)(L.p,{mdxType:"KoliBri"})," noch direkt das Individualisieren des Standard-Designs mittels sogenannter"," ",(0,e.kt)("strong",null,(0,e.kt)(m.Nv,{_href:"https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties",_target:"mozilla",mdxType:"KolLink"},"CSS-Properties"))," ","(",(0,e.kt)(m.Nv,{_href:"https://uxdesign.cc/design-tokens-for-dummies-8acebf010d71",_target:"uxdesign",mdxType:"KolLink"},"Design-Tokens"),", ",(0,e.kt)(m.Nv,{_href:"https://tailwindcss.com",_target:"tailwindcss",mdxType:"KolLink"},"Tailwind CSS"),") umgesetzt. Mit der Umsetzung weiterer Themes haben wir jedoch festgestellt, dass wir immer mehr CSS-Properties einf\xFChren m\xFCssten, um die Flexiblit\xE4t f\xFCr das gew\xFCnschte Design/UX (Corporate Design/Styleguide) umsetzen zu k\xF6nnen. Im Zweifel m\xFCsste f\xFCr jede Anpassbarkeit ein separates Property vorgesehen werden. Am Beispiel des ",(0,e.kt)(m.Nv,{_href:"https://mui.com/material-ui/api/button/#css",_target:"mui",mdxType:"KolLink"},"MUI-Button CSS")," ist gut erkennbar, wie die CSS-Properties (Design Token) immer mehr werden."),(0,e.kt)("p",null,(0,e.kt)(m.CV,{mdxType:"KolIndentedText"},(0,e.kt)("strong",null,"2. Wir haben das ganze CSS vollst\xE4ndig von den Components entkoppelt (like"," ",(0,e.kt)(m.Nv,{_href:"https://styled-components.com",_target:"styled-components",mdxType:"KolLink"},"Styled-Components"),")."))),(0,e.kt)("p",null,'Mit Hilfe des Designers kann ein "Mandant" die Komponenten einzeln und vollst\xE4ndig unabh\xE4ngig voneinander mit der gesamten CSS-Freiheit gestalten. Innerhalb eines "Mandanten"-Themes k\xF6nnen eigene CSS-Properties eingef\xFChrt werden. Die Nutzung von CSS-Properties (Design-Tokens) bleibt somit auf Theme-Ebene erhalten, jedoch mit einem viel kleineren und pflegbareren Scope.'),(0,e.kt)("p",null,(0,e.kt)(m.CV,{mdxType:"KolIndentedText"},(0,e.kt)("strong",null,"3. KoliBri erm\xF6glicht die Wiederverwendung getesteter, barrierefreier und robuster Komponenten(-konstruktionen) bei nahezu individuellem Design und stellt damit einen im Rahmen der Barrierefreiheit frei gestaltbaren HTML-Standard dar."))),(0,e.kt)("p",null,"Im folgenden Diagramm wird ein beispielhafter Design-Prozess mit KoliBri dargestellt, der vollkommen unabh\xE4ngig vom KoliBri-Team angewendet werden kann."),(0,e.kt)(W,{mdxType:"MermaidDesignProcess"}),(0,e.kt)(P.G,{code:`
stateDiagram-v2
	direction LR
	s1: <strong>Spezifikation</strong>
	s1: UI/UX-Team
	s2: <strong>Design-Tokens</strong>
	s2: JSON
	s3: <strong>Style-Files</strong>
	s3: CSS
	s4: <strong>Designer</strong>
	s4: KoliBri
	s5: <strong>Theme</strong>
	s5: KoliBri
	note right of s1
		<strong>Tools:</strong> Adobe XD, Figma, Sketch u.a.
		<strong>Technik:</strong> CSS-Properties, Design-Tokens
	end note
	note right of s2
		Export-<strong>Plugin</strong>
	end note
	note right of s3
		Set of CSS-Properties
	end note
	note right of s5
		Sharable <strong>NPM-Paket</strong>
	end note
	[*] --> s1
	s1 --> s2 : Plugin
	s2 --> s3 : Script
	s3 --> s5
	s1 --> s4
	s4 --> s5
	s5 --> [*]`,mdxType:"Mermaid"}),(0,e.kt)("p",null,"Das UI/UX-Team spezifiziert beispielsweise mit Figma die Komponenten ihres Design Systems. Bei der \xDCberf\xFChrung der Spezifikation in die Realisierung, wird das Design in Form von reinem CSS mittels des"," ",(0,e.kt)(m.Nv,{_href:"iframe.html?id=designer--page",_target:"_self",mdxType:"KolLink"},"KoliBri-Designers")," ",'auf die Basis-Komponenten "\xFCbertragen". Ist im eigenen Design System eine Individualisierbarkeit gew\xFCscht, dann k\xF6nnen im Designer daf\xFCr CSS-Properties oder Design-Tokens definiert werden. Damit das eigene Theme \xFCber Projekte hinweg geteilt werden kann, wird das Theme in ein NPM-Paket paketiert und kann \xFCber eine beliebige Registry bereitgestellt werden.'),(0,e.kt)("p",null,(0,e.kt)(m.ox,{_summary:"Design-Tokens",mdxType:"KolDetails"},"Optional k\xF6nnen beispielsweise aus Figma, mittels Design-Tokens, Design-Schemata exportiert werden. Diese k\xF6nnen dann in separate CSS-Dateien \xFCberf\xFChrt werden, die die jeweiligen Werte zu den CSS-Properties enthalten. Sp\xE4ter wird eine dieser CSS-Dateien verwendet, um das konkrete Design in Kombination mit den Web Components und dem Theme in der Webseite anzuwenden.")),(0,e.kt)("p",null,(0,e.kt)(m.ox,{_summary:"Dark-Mode",mdxType:"KolDetails"},'Optional kann auch ein "Dark-Mode"-Theme umgesetzt werden. Hierzu kann das erforderliche CSS in den Globals des KoliBri-Themes hinterlegt werden.')),(0,e.kt)(m.K5,{_heading:"KoliBri-Factory",_type:"info",_variant:"card",mdxType:"KolAlert"},(0,e.kt)("p",null,"Eigene spezifische Komponenten die nicht von KoliBri bereitgestellt wird und die leider nicht zur KoliBri-Komponenten-Vielfalt passen, k\xF6nnen in eigenen Komponenten-Bibliotheken aufgebaut und unabh\xE4ngig gepflegt werden. Hierf\xFCr bieten wir die sogenannte ",(0,e.kt)("strong",null,"KoliBri-Factory")," (Stack) an (siehe"," ",(0,e.kt)(m.Nv,{_href:"https://github.com/public-ui/kolibri/blob/main/docs/ARCHITECTURE.md#erweitert",_target:"github",mdxType:"KolLink"},"Modularisierung"),").")))}M.displayName="MDXContent",M.isMDXComponent=!0;var R=function(){throw new Error("Docs-only story")};R.parameters={docsOnly:!0};var _={title:"Konzepte/Theming/Konzept",id:"theming",includeStories:["__page"]},V={};_.parameters=_.parameters||{},_.parameters.docs=Object.assign({},_.parameters.docs||{},{page:function(){return(0,e.kt)(O.aT,{mdxStoryNameToKey:V,mdxComponentAnnotations:_},(0,e.kt)(M,null))}});const G=_;var H=["__page"]},"./src/components/mermaid.tsx":(a,r,t)=>{"use strict";t.d(r,{G:()=>K,m:()=>p});var l=t("./node_modules/react/index.js"),x=t("./node_modules/mermaid/dist/mermaid.core.mjs");let k;const p=y=>{y&&x.Z.initialize(Object.assign({startOnLoad:!0},y)),clearTimeout(k),k=setTimeout(()=>{clearTimeout(k),x.Z.contentLoaded()},500)},K=({code:y,config:e,children:O})=>((0,l.useEffect)(()=>{p(e)},[]),l.createElement("div",null,l.createElement("div",{className:"mermaid"},y)));try{p.displayName="mermaidLoadContent",p.__docgenInfo={description:"",displayName:"mermaidLoadContent",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/mermaid.tsx#mermaidLoadContent"]={docgenInfo:p.__docgenInfo,name:"mermaidLoadContent",path:"src/components/mermaid.tsx#mermaidLoadContent"})}catch(y){}try{K.displayName="Mermaid",K.__docgenInfo={description:"",displayName:"Mermaid",props:{code:{defaultValue:null,description:"",name:"code",required:!0,type:{name:"string"}},config:{defaultValue:null,description:"",name:"config",required:!1,type:{name:"any"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/mermaid.tsx#Mermaid"]={docgenInfo:K.__docgenInfo,name:"Mermaid",path:"src/components/mermaid.tsx#Mermaid"})}catch(y){}},"./src/snippets/kolibri.tsx":(a,r,t)=>{"use strict";t.d(r,{p:()=>k});var l=t("./node_modules/@public-ui/react/dist/index.mjs"),x=t("./node_modules/react/index.js");const k=()=>x.createElement(l.T5,{"_tooltip-align":"right",_title:"Komponenten-Bibliothek f\xFCr die Barrierefreiheit"},"KoliBri");try{k.displayName="KoliBri",k.__docgenInfo={description:"",displayName:"KoliBri",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/snippets/kolibri.tsx#KoliBri"]={docgenInfo:k.__docgenInfo,name:"KoliBri",path:"src/snippets/kolibri.tsx#KoliBri"})}catch(p){}},"./node_modules/moment-mini/locale sync recursive ^\\.\\/.*$":(a,r,t)=>{var l={"./locale":"./node_modules/moment-mini/locale/locale.js","./locale.js":"./node_modules/moment-mini/locale/locale.js"};function x(p){var K=k(p);return t(K)}function k(p){if(!t.o(l,p)){var K=new Error("Cannot find module '"+p+"'");throw K.code="MODULE_NOT_FOUND",K}return l[p]}x.keys=function(){return Object.keys(l)},x.resolve=k,a.exports=x,x.id="./node_modules/moment-mini/locale sync recursive ^\\.\\/.*$"},"./node_modules/@public-ui/react/dist/index.mjs":(a,r,t)=>{"use strict";t.d(r,{$o:()=>fe,CO:()=>Oe,CV:()=>h,CX:()=>ae,Er:()=>A,Gc:()=>R,HA:()=>G,Jl:()=>H,K5:()=>N,Lj:()=>le,MA:()=>Ke,Np:()=>S,Nv:()=>ke,O:()=>re,P:()=>Se,Q4:()=>xe,QK:()=>he,Qs:()=>Ee,RZ:()=>w,T5:()=>z,TE:()=>C,TQ:()=>pe,UD:()=>De,Ud:()=>be,Vp:()=>Te,Vs:()=>ge,WD:()=>ue,WR:()=>Ce,Ze:()=>we,c2:()=>de,cJ:()=>c,ic:()=>W,is:()=>_e,lo:()=>U,m5:()=>V,ox:()=>_,qq:()=>ve,r7:()=>ye,rW:()=>f,sy:()=>me,u_:()=>je,uz:()=>X,z5:()=>ce});var l=t("./node_modules/react/index.js"),x=t("./node_modules/react-dom/index.js");const k=s=>s.toLowerCase().split("-").map(o=>o.charAt(0).toUpperCase()+o.slice(1)).join(""),p=s=>s.replace(/([A-Z])/g,o=>`-${o[0].toLowerCase()}`),K=(s,o,d={})=>{if(s instanceof Element){const u=y(s.classList,o,d);u!==""&&(s.className=u),Object.keys(o).forEach(i=>{if(!(i==="children"||i==="style"||i==="ref"||i==="class"||i==="className"||i==="forwardedRef"))if(i.indexOf("on")===0&&i[2]===i[2].toUpperCase()){const v=i.substring(2),b=v[0].toLowerCase()+v.substring(1);e(b)||O(s,b,o[i])}else s[i]=o[i],typeof o[i]==="string"&&s.setAttribute(p(i),o[i])})}},y=(s,o,d)=>{const u=o.className||o.class,i=d.className||d.class,v=m(s),b=m(u?u.split(" "):[]),j=m(i?i.split(" "):[]),E=[];return v.forEach(T=>{b.has(T)?(E.push(T),b.delete(T)):j.has(T)||E.push(T)}),b.forEach(T=>E.push(T)),E.join(" ")};/**
 * Checks if an event is supported in the current execution environment.
 * @license Modernizr 3.0.0pre (Custom Build) | MIT
 */const e=s=>{if(typeof document=="undefined")return!0;{const o="on"+s;let d=o in document;if(!d){const u=document.createElement("div");u.setAttribute(o,"return;"),d=typeof u[o]=="function"}return d}},O=(s,o,d)=>{const u=s.__events||(s.__events={}),i=u[o];i&&s.removeEventListener(o,i),s.addEventListener(o,u[o]=function(b){d&&d.call(this,b)})},m=s=>{const o=new Map;return s.forEach(d=>o.set(d,d)),o},L=(s,o)=>{typeof s=="function"?s(o):s!=null&&(s.current=o)},P=(...s)=>o=>{s.forEach(d=>{L(d,o)})},F=(s,o)=>{const d=(u,i)=>l.createElement(s,J($({},u),{forwardedRef:i}));return d.displayName=o,l.forwardRef(d)},n=(s,o,d,u)=>{u!==void 0&&u();const i=k(s),v=class extends l.Component{constructor(b){super(b),this.setComponentElRef=j=>{this.componentEl=j}}componentDidMount(){this.componentDidUpdate(this.props)}componentDidUpdate(b){K(this.componentEl,this.props,b)}render(){const te=this.props,{children:b,forwardedRef:j,style:E,className:T,ref:Fe}=te,ee=ie(te,["children","forwardedRef","style","className","ref"]);let Z=Object.keys(ee).reduce((Y,D)=>{const Q=ee[D];if(D.indexOf("on")===0&&D[2]===D[2].toUpperCase()){const B=D.substring(2).toLowerCase();typeof document!="undefined"&&e(B)&&(Y[D]=Q)}else{const B=typeof Q;(B==="string"||B==="boolean"||B==="number")&&(Y[p(D)]=Q)}return Y},{});d&&(Z=d(this.props,Z));const Be=J($({},Z),{ref:P(j,this.setComponentElRef),style:E});return(0,l.createElement)(s,Be,b)}static get displayName(){return i}};return o&&(v.contextType=o),F(v,i)},z=n("kol-abbr"),w=n("kol-accordion"),N=n("kol-alert"),A=n("kol-badge"),U=n("kol-breadcrumb"),W=n("kol-button"),X=n("kol-button-group"),q=null,M=null,R=n("kol-card"),_=n("kol-details"),V=n("kol-form"),G=n("kol-heading"),H=n("kol-icon"),c=n("kol-icon-font-awesome"),f=n("kol-icon-icofont"),h=n("kol-indented-text"),g=null,C=n("kol-input-checkbox"),S=n("kol-input-color"),re=n("kol-input-date"),le=n("kol-input-email"),ae=n("kol-input-file"),de=n("kol-input-number"),ce=n("kol-input-password"),me=n("kol-input-radio"),pe=n("kol-input-range"),ue=n("kol-input-text"),ge=n("kol-kolibri"),ke=n("kol-link"),Ie=null,fe=n("kol-link-group"),he=n("kol-logo"),be=n("kol-modal"),Ke=n("kol-nav"),xe=n("kol-pagination"),Ce=n("kol-progress"),ye=n("kol-select"),Se=n("kol-skip-nav"),Pe=null,ve=n("kol-spin"),_e=n("kol-symbol"),Te=n("kol-table"),De=n("kol-tabs"),Ee=n("kol-textarea"),Oe=n("kol-toast"),we=n("kol-tooltip"),je=n("kol-version")}}]);
