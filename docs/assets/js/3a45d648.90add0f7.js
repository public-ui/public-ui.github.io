"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[1360],{22888:(e,n,t)=>{t.d(n,{Z:()=>d,p:()=>o});var i=t(94602),r=t(80746),s=t(50959);const o=()=>s.createElement(r.T5,{_title:(0,i.I)({id:"custom.component-library-for-the-accessibility",message:"Komponentenbibliothek f\xfcr die Barrierefreiheit"})},"KoliBri"),d=o},41345:(e,n,t)=>{t.d(n,{G$:()=>o});var i=t(50959),r=t(18717);let s;const o=e=>{let{code:n,config:t}=e;return(0,i.useEffect)((()=>{(e=>{e&&r.N.initialize(Object.assign({startOnLoad:!0},e)),clearTimeout(s),s=setTimeout((()=>{clearTimeout(s),r.N.contentLoaded()}),500)})(t)}),[]),i.createElement("div",null,i.createElement("div",{className:"mermaid"},n))}},98370:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>m,contentTitle:()=>a,default:()=>b,frontMatter:()=>l,metadata:()=>g,toc:()=>p});var i=t(15882),r=(t(50959),t(17942)),s=t(80746),o=t(22888),d=t(41345);const l={},a="Theming",g={unversionedId:"concepts/styling/theming",id:"version-1.5.3/concepts/styling/theming",title:"Theming",description:"<img",source:"@site/versioned_docs/version-1.5.3/20-concepts/05-styling/34-theming.mdx",sourceDirName:"20-concepts/05-styling",slug:"/concepts/styling/theming",permalink:"/docs/1.5.3/concepts/styling/theming",draft:!1,tags:[],version:"1.5.3",sidebarPosition:34,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Testvorgehen",permalink:"/docs/1.5.3/concepts/test"},next:{title:"Designer",permalink:"/docs/1.5.3/concepts/styling/designer"}},m={},p=[],u=(c="MermaidDesignProcess",function(e){return console.warn("Component "+c+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",e)});var c;const k={toc:p},h="wrapper";function b(e){let{components:n,...t}=e;return(0,r.kt)(h,(0,i.Z)({},k,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"theming"},"Theming"),(0,r.kt)("kol-alert",{_type:"info"},(0,r.kt)("img",{width:"100%",src:"/assets/theme-switch.png",alt:"Zeigt, wo der Schalter zum Umschalten des Themes in der Toolbar ist."}),(0,r.kt)("p",null,(0,r.kt)("kol-icon",{_icon:"codicon codicon-arrow-right"}),"\xdcber den Schalter in der Toolbar oben k\xf6nnen Sie das Theme von unserer Seite (KoliBri) umschalten.")),(0,r.kt)("br",null),(0,r.kt)("p",null,"Das Einzigartige an ",(0,r.kt)(o.p,{mdxType:"KoliBri"})," ist die ",(0,r.kt)("strong",null,"Referenzimplementierung")," von Komponenten, die von Grund auf"," ",(0,r.kt)("strong",null,"semantisch W3C- und WCAG-konform")," und damit ",(0,r.kt)("strong",null,"vollst\xe4ndig barrierefrei")," bez\xfcglich der assistiven Unterst\xfctzung sind. Alle Komponenten werden dabei als"," ",(0,r.kt)(s.Nv,{_href:"https://developer.mozilla.org/en-US/docs/Web/Web_Components?retiredLocale=de",_target:"mozilla",mdxType:"KolLink"},"Web Components")," ","umgesetzt und sind somit in allen webbasierten Projekten wiederverwendbar. In der folgenden Abbildung werden diese Komponenten durch die grau-gestrichelten Formen in der Mitte dargestellt."),(0,r.kt)("p",null,(0,r.kt)(s.CV,{mdxType:"KolIndentedText"},(0,r.kt)("strong",null,"1. KoliBri-Komponenten k\xf6nnten als Basis f\xfcr alle Design Systeme oder Komponenten-Bibliotheken wiederverwendet werden."))),(0,r.kt)("img",{src:"/assets/abgrenzung.jpg",alt:"Darstellung, wie die Komponenten mittels verschiedener Styleguides zu kundenspezifischen Komponenten werden."}),(0,r.kt)("p",null,"Im ersten Release (v1.0) hatte ",(0,r.kt)(o.p,{mdxType:"KoliBri"})," noch direkt das Individualisieren des Standard-Designs mittels sogenannter"," ",(0,r.kt)("strong",null,(0,r.kt)(s.Nv,{_href:"https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties",_target:"mozilla",mdxType:"KolLink"},"CSS-Properties"))," ","(",(0,r.kt)(s.Nv,{_href:"https://uxdesign.cc/design-tokens-for-dummies-8acebf010d71",_target:"uxdesign",mdxType:"KolLink"},"Design-Tokens"),", ",(0,r.kt)(s.Nv,{_href:"https://tailwindcss.com",_target:"tailwindcss",mdxType:"KolLink"},"Tailwind CSS"),") umgesetzt. Mit der Umsetzung weiterer Themes haben wir jedoch festgestellt, dass wir immer mehr CSS-Properties einf\xfchren m\xfcssten, um die Flexiblit\xe4t f\xfcr das gew\xfcnschte Design/UX (Corporate Design/Styleguide) umsetzen zu k\xf6nnen. Im Zweifel m\xfcsste f\xfcr jede Anpassbarkeit ein separates Property vorgesehen werden. Am Beispiel des ",(0,r.kt)(s.Nv,{_href:"https://mui.com/material-ui/api/button/#css",_target:"mui",mdxType:"KolLink"},"MUI-Button CSS")," ist gut erkennbar, wie die CSS-Properties (Design Token) immer mehr werden."),(0,r.kt)("p",null,(0,r.kt)(s.CV,{mdxType:"KolIndentedText"},(0,r.kt)("strong",null,"2. Wir haben das ganze CSS vollst\xe4ndig von den Components entkoppelt (like"," ",(0,r.kt)(s.Nv,{_href:"https://styled-components.com",_target:"styled-components",mdxType:"KolLink"},"Styled-Components"),")."))),(0,r.kt)("p",null,"Mithilfe des Designers kann ein \u201eMandant\u201c die Komponenten einzeln und vollst\xe4ndig unabh\xe4ngig voneinander mit der gesamten CSS-Freiheit gestalten. Innerhalb eines \u201eMandanten\u201c-Themes k\xf6nnen eigene CSS-Properties eingef\xfchrt werden. Die Nutzung von CSS-Properties (Design-Tokens) bleibt somit auf Theme-Ebene erhalten, jedoch mit einem viel kleineren und pflegbaren Scope."),(0,r.kt)("p",null,(0,r.kt)(s.CV,{mdxType:"KolIndentedText"},(0,r.kt)("strong",null,"3. KoliBri erm\xf6glicht die Wiederverwendung getesteter, barrierefreier und robuster Komponenten(-konstruktionen) bei nahezu individuellem Design und stellt damit einen im Rahmen der Barrierefreiheit frei gestaltbaren HTML-Standard dar."))),(0,r.kt)("p",null,"Im folgenden Diagramm wird ein beispielhafter Design-Prozess mit KoliBri dargestellt, der vollkommen unabh\xe4ngig vom KoliBri-Team angewendet werden kann."),(0,r.kt)(u,{mdxType:"MermaidDesignProcess"}),(0,r.kt)(d.G$,{code:"\nstateDiagram-v2\n\tdirection LR\n\ts1: <strong>Spezifikation</strong>\n\ts1: UI/UX-Team\n\ts2: <strong>Design-Tokens</strong>\n\ts2: JSON\n\ts3: <strong>Style-Files</strong>\n\ts3: CSS\n\ts4: <strong>Designer</strong>\n\ts4: KoliBri\n\ts5: <strong>Theme</strong>\n\ts5: KoliBri\n\tnote right of s1\n\t\t<strong>Tools:</strong> Adobe XD, Figma, Sketch u.a.\n\t\t<strong>Technik:</strong> CSS-Properties, Design-Tokens\n\tend note\n\tnote right of s2\n\t\tExport-<strong>Plugin</strong>\n\tend note\n\tnote right of s3\n\t\tSet of CSS-Properties\n\tend note\n\tnote right of s5\n\t\tSharable <strong>NPM-Paket</strong>\n\tend note\n\t[*] --\x3e s1\n\ts1 --\x3e s2 : Plugin\n\ts2 --\x3e s3 : Script\n\ts3 --\x3e s5\n\ts1 --\x3e s4\n\ts4 --\x3e s5\n\ts5 --\x3e [*]",mdxType:"Mermaid"}),(0,r.kt)("p",null,"Das UI/UX-Team spezifiziert beispielsweise mit Figma die Komponenten ihres Design-Systems. Bei der \xdcberf\xfchrung der Spezifikation in die Realisierung wird das Design in Form von reinem CSS mittels des"," ",(0,r.kt)(s.Nv,{_href:"/docs/concepts/styling/designer",mdxType:"KolLink"},"KoliBri-Designers")," auf die Basis-Komponenten \u201e\xfcbertragen\u201c. Wenn im eigenen Design-System eine Individualisierbarkeit gew\xfcnscht ist, k\xf6nnen im Designer daf\xfcr CSS-Properties oder Design-Tokens definiert werden. Damit das eigene Theme \xfcber Projekte hinweg geteilt werden kann, wird das Theme in ein NPM-Paket paketiert und kann \xfcber eine beliebige Registry bereitgestellt werden."),(0,r.kt)("p",null,(0,r.kt)(s.ox,{_summary:"Design-Tokens",mdxType:"KolDetails"},"Optional k\xf6nnen beispielsweise aus Figma, mittels Design-Tokens, Design-Schemata exportiert werden. Diese k\xf6nnen dann in separate CSS-Dateien \xfcberf\xfchrt werden, die die jeweiligen Werte zu den CSS-Properties enthalten. Sp\xe4ter wird eine dieser CSS-Dateien verwendet, um das konkrete Design in Kombination mit den Web Components und dem Theme in der Webseite anzuwenden.")),(0,r.kt)("p",null,(0,r.kt)(s.ox,{_summary:"Dark-Mode",mdxType:"KolDetails"},'Optional kann auch ein "Dark-Mode"-Theme umgesetzt werden. Hierzu kann das erforderliche CSS in den Globals des KoliBri-Themes hinterlegt werden.')),(0,r.kt)(s.K5,{_heading:"KoliBri-Factory",_type:"info",_variant:"card",mdxType:"KolAlert"},(0,r.kt)("p",null,"Eigene spezifische Komponenten, die nicht von KoliBri bereitgestellt werden und leider nicht zu den KoliBri-Komponenten passen, k\xf6nnen in eigenen Komponenten-Bibliotheken aufgebaut und unabh\xe4ngig gepflegt werden. Hierf\xfcr bieten wir die sogenannte ",(0,r.kt)("strong",null,"KoliBri-Factory")," (Stack) an (siehe"," ",(0,r.kt)(s.Nv,{_href:"https://github.com/public-ui/kolibri/blob/main/docs/ARCHITECTURE.md#erweitert",_target:"github",mdxType:"KolLink"},"Modularisierung"),").")))}b.isMDXComponent=!0}}]);