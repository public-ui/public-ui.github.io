"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[5974],{2189:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>d,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var s=t(11527),r=t(16034),i=t(91694);const l={title:"Testergebnisse",description:"Die Testergebnisse aus den BITV-Tests zu allen Komponenten und vom ITZBund gepflegten Themes werden hier ver\xf6ffentlicht."},d="Testergebnisse",o={id:"test-results",title:"Testergebnisse",description:"Die Testergebnisse aus den BITV-Tests zu allen Komponenten und vom ITZBund gepflegten Themes werden hier ver\xf6ffentlicht.",source:"@site/versioned_docs/version-1.7/60-test-results.mdx",sourceDirName:".",slug:"/test-results",permalink:"/en/docs/test-results",draft:!1,unlisted:!1,tags:[],version:"1.7",sidebarPosition:60,frontMatter:{title:"Testergebnisse",description:"Die Testergebnisse aus den BITV-Tests zu allen Komponenten und vom ITZBund gepflegten Themes werden hier ver\xf6ffentlicht."},sidebar:"tutorialSidebar",previous:{title:"Form handling",permalink:"/en/docs/formular-handling"},next:{title:"Changelog und Backlog",permalink:"/en/docs/changelog"}},a={},c=[{value:"BITV-Test",id:"bitv-test",level:2},{value:"Ergebnisse",id:"ergebnisse",level:2}];function h(e){const n={a:"a",h1:"h1",h2:"h2",p:"p",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"testergebnisse",children:"Testergebnisse"}),"\n",(0,s.jsxs)(n.p,{children:["Auf dieser Seite werden regelm\xe4\xdfig die Testergebnisse der Komponenten und Themes ver\xf6ffentlicht, die durch das ITZBund gepflegt werden. Die Tests werden mit dem ",(0,s.jsx)(n.a,{href:"https://www.bitvtest.de/bitv_test.html",children:"BITV-Test"})," durchgef\xfchrt."]}),"\n",(0,s.jsx)(n.h2,{id:"bitv-test",children:"BITV-Test"}),"\n",(0,s.jsxs)(n.p,{children:["Der ",(0,s.jsx)(n.a,{href:"https://www.bitvtest.de/bitv_test.html",children:"BITV-Test"})," ist ein Pr\xfcfverfahren zur \xdcberpr\xfcfung der Barrierefreiheit von Websites gem\xe4\xdf der Barrierefreie-Informationstechnik-Verordnung (BITV) in Deutschland. Dabei werden verschiedene Kriterien und Richtlinien ber\xfccksichtigt, um sicherzustellen, dass Menschen mit Behinderungen die Website problemlos nutzen k\xf6nnen. Der Test umfasst Aspekte wie die Zug\xe4nglichkeit von Inhalten f\xfcr Screenreader, die Anpassungsf\xe4higkeit der Website f\xfcr verschiedene Ger\xe4te und Bildschirmgr\xf6\xdfen, die Verwendung geeigneter Farbkontraste f\xfcr Menschen mit Sehbehinderungen, die Bereitstellung alternativer Texte f\xfcr Bilder und die Vermeidung von Technologien, die Zug\xe4nglichkeitsprobleme verursachen k\xf6nnen. Durch den ",(0,s.jsx)(n.a,{href:"https://www.bitvtest.de/bitv_test.html",children:"BITV-Test"})," k\xf6nnen Website-Betreiber sicherstellen, dass ihre Websites den gesetzlichen Anforderungen an Barrierefreiheit entsprechen und eine gleichberechtigte Nutzung f\xfcr alle Benutzer erm\xf6glichen."]}),"\n",(0,s.jsx)(n.h2,{id:"ergebnisse",children:"Ergebnisse"}),"\n",(0,s.jsx)(n.p,{children:"In der folgenden Tabelle sind die Testergebnisse der Komponenten und Themes aufgelistet, die durch das ITZBund gepflegt werden. Die Ergebnisse werden regelm\xe4\xdfig aktualisiert."}),"\n",(0,s.jsx)(i.O,{})]})}function u(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},91694:(e,n,t)=>{t.d(n,{O:()=>b});var s=t(39125),r=t(22684),i=t(50959),l=t(46956),d=t(78367);const o=["Abbr","Accordion","Alert","Badge","Breadcrumb","Button","ButtonGroup","ButtonLink","Card","Details","Heading","Icon","IndentedText","InputCheckbox","InputColor","InputDate","InputEmail","InputFile"];async function a(e,n){return await(0,l.Z)(e,{sheet:n})}function c(e,n){return void 0===n&&(n={}),new Promise((t=>{0===e.length&&t(n);const s=e.shift(),{sheet:r,promise:i}=s;i.then((s=>{n[r]=s,t(c(e,n))}))}))}const h=async()=>{try{const e=await fetch("/test-results/bitv-test.xlsx"),n=await e.blob(),t=await(0,d.Z)(n),s=[];return t.forEach((e=>{o.includes(e)&&s.push({sheet:e,promise:a(n,e)})})),c(s)}catch(e){throw Error(`Excel file not found: ${e}`)}};var u=t(11527);function g(e,n){let t=0,s=0;for(let r=2;r<e.length;r++)switch(s++,e[r][n]){case"erf\xfcllt":t++;break;case"nicht erf\xfcllt":case"teilweise erf\xfcllt":break;default:s--}return`${t}/${s}`}const f=()=>{const[e,n]=(0,i.useState)([]);return(0,i.useEffect)((()=>{h().then((e=>{console.log(e);const t=[];for(const n in e)t.push((s=n,r=e[n],{component:s,bmf:g(r,2),zoll:g(r,4)}));var s,r;n(t),console.log(t)})).catch((e=>{console.warn(e)}))}),[]),(0,u.jsx)(r.Vp,{_label:"\xdcbersicht der Testergebnisse der KoliBri-Komponenten",_headers:{horizontal:[[{label:"Component",key:"component"},{label:"BMF",key:"bmf",textAlign:"center"},{label:"Zoll (v2)",key:"zoll",textAlign:"center"}]]},_data:e})},b=()=>(0,u.jsx)(s.Z,{children:()=>(0,u.jsx)(f,{})})}}]);