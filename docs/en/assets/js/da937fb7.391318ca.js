"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[2654],{91892:(e,t,n)=>{n.d(t,{O:()=>f});var s=n(25054),r=n(80746),i=n(50959),l=n(76393),o=n(71010);const d=["Abbr","Accordion","Alert","Badge","Breadcrumb","Button","ButtonGroup","ButtonLink","Card","Details","Heading","Icon","IndentedText","InputCheckbox","InputColor","InputDate","InputEmail","InputFile"];async function a(e,t){return await(0,l.Z)(e,{sheet:t})}function u(e,t){return void 0===t&&(t={}),new Promise((n=>{0===e.length&&n(t);const s=e.shift(),{sheet:r,promise:i}=s;i.then((s=>{t[r]=s,n(u(e,t))}))}))}const c=async()=>{try{const e=await fetch("/test-results/bitv-test.xlsx"),t=await e.blob(),n=await(0,o.Z)(t),s=[];return n.forEach((e=>{d.includes(e)&&s.push({sheet:e,promise:a(t,e)})})),u(s)}catch(e){throw Error(`Excel file not found: ${e}`)}};function h(e,t){let n=0,s=0;for(let r=2;r<e.length;r++)switch(s++,e[r][t]){case"erf\xfcllt":n++;break;case"nicht erf\xfcllt":case"teilweise erf\xfcllt":break;default:s--}return`${n}/${s}`}const g=()=>{const[e,t]=(0,i.useState)([]);return(0,i.useEffect)((()=>{c().then((e=>{console.log(e);const n=[];for(const t in e)n.push((s=t,r=e[t],{component:s,bmf:h(r,2),zoll:h(r,4)}));var s,r;t(n),console.log(n)})).catch((e=>{console.warn(e)}))}),[]),i.createElement(r.Vp,{_caption:"\xdcbersicht der Testergebnisse der KoliBri-Komponenten",_headers:{horizontal:[[{label:"Component",key:"component"},{label:"BMF",key:"bmf",textAlign:"center"},{label:"Zoll (v2)",key:"zoll",textAlign:"center"}]]},_data:e})},f=()=>i.createElement(s.Z,null,(()=>i.createElement(g,null)))},81834:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>o,default:()=>g,frontMatter:()=>l,metadata:()=>d,toc:()=>u});var s=n(15882),r=(n(50959),n(17942)),i=n(91892);const l={title:"Testergebnisse",description:"Die Testergebnisse aus den BITV-Tests zu allen Komponenten und vom ITZBund gepflegten Themes werden hier ver\xf6ffentlicht."},o="Testergebnisse",d={unversionedId:"test-results",id:"version-1.5.3/test-results",title:"Testergebnisse",description:"Die Testergebnisse aus den BITV-Tests zu allen Komponenten und vom ITZBund gepflegten Themes werden hier ver\xf6ffentlicht.",source:"@site/versioned_docs/version-1.5.3/60-test-results.mdx",sourceDirName:".",slug:"/test-results",permalink:"/en/docs/1.5.3/test-results",draft:!1,tags:[],version:"1.5.3",sidebarPosition:60,frontMatter:{title:"Testergebnisse",description:"Die Testergebnisse aus den BITV-Tests zu allen Komponenten und vom ITZBund gepflegten Themes werden hier ver\xf6ffentlicht."},sidebar:"tutorialSidebar",previous:{title:"Form handling",permalink:"/en/docs/1.5.3/formular-handling"},next:{title:"Changelog und Backlog",permalink:"/en/docs/1.5.3/changelog"}},a={},u=[{value:"BITV-Test",id:"bitv-test",level:2},{value:"Ergebnisse",id:"ergebnisse",level:2}],c={toc:u},h="wrapper";function g(e){let{components:t,...n}=e;return(0,r.kt)(h,(0,s.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"testergebnisse"},"Testergebnisse"),(0,r.kt)("p",null,"Auf dieser Seite werden regelm\xe4\xdfig die Testergebnisse der Komponenten und Themes ver\xf6ffentlicht, die durch das ITZBund gepflegt werden. Die Tests werden mit dem ",(0,r.kt)("a",{parentName:"p",href:"https://www.bitvtest.de/bitv_test.html"},"BITV-Test")," durchgef\xfchrt."),(0,r.kt)("h2",{id:"bitv-test"},"BITV-Test"),(0,r.kt)("p",null,"Der ",(0,r.kt)("a",{parentName:"p",href:"https://www.bitvtest.de/bitv_test.html"},"BITV-Test")," ist ein Pr\xfcfverfahren zur \xdcberpr\xfcfung der Barrierefreiheit von Websites gem\xe4\xdf der Barrierefreie-Informationstechnik-Verordnung (BITV) in Deutschland. Dabei werden verschiedene Kriterien und Richtlinien ber\xfccksichtigt, um sicherzustellen, dass Menschen mit Behinderungen die Website problemlos nutzen k\xf6nnen. Der Test umfasst Aspekte wie die Zug\xe4nglichkeit von Inhalten f\xfcr Screenreader, die Anpassungsf\xe4higkeit der Website f\xfcr verschiedene Ger\xe4te und Bildschirmgr\xf6\xdfen, die Verwendung geeigneter Farbkontraste f\xfcr Menschen mit Sehbehinderungen, die Bereitstellung alternativer Texte f\xfcr Bilder und die Vermeidung von Technologien, die Zug\xe4nglichkeitsprobleme verursachen k\xf6nnen. Durch den ",(0,r.kt)("a",{parentName:"p",href:"https://www.bitvtest.de/bitv_test.html"},"BITV-Test")," k\xf6nnen Website-Betreiber sicherstellen, dass ihre Websites den gesetzlichen Anforderungen an Barrierefreiheit entsprechen und eine gleichberechtigte Nutzung f\xfcr alle Benutzer erm\xf6glichen."),(0,r.kt)("h2",{id:"ergebnisse"},"Ergebnisse"),(0,r.kt)("p",null,"In der folgenden Tabelle sind die Testergebnisse der Komponenten und Themes aufgelistet, die durch das ITZBund gepflegt werden. Die Ergebnisse werden regelm\xe4\xdfig aktualisiert."),(0,r.kt)(i.O,{mdxType:"BitvTestResults"}))}g.isMDXComponent=!0}}]);