"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[91810],{45326:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>h,contentTitle:()=>c,default:()=>m,frontMatter:()=>a,metadata:()=>d,toc:()=>p});var i=t(11527),r=t(16034),s=t(34542),o=t(80163),l=t(99309);const a={title:"Eigenschaften",description:"Die Eigenschaften der Komponente werden auf dieser Seite beschrieben.",tags:["Eigenschaften","Properties","Attribute","Konzept"]},c=void 0,d={id:"concepts/properties",title:"Eigenschaften",description:"Die Eigenschaften der Komponente werden auf dieser Seite beschrieben.",source:"@site/versioned_docs/version-1.6/20-concepts/02-properties.mdx",sourceDirName:"20-concepts",slug:"/concepts/properties",permalink:"/en/docs/1.6/concepts/properties",draft:!1,unlisted:!1,tags:[{label:"Eigenschaften",permalink:"/en/docs/1.6/tags/eigenschaften"},{label:"Properties",permalink:"/en/docs/1.6/tags/properties"},{label:"Attribute",permalink:"/en/docs/1.6/tags/attribute"},{label:"Konzept",permalink:"/en/docs/1.6/tags/konzept"}],version:"1.6",sidebarPosition:2,frontMatter:{title:"Eigenschaften",description:"Die Eigenschaften der Komponente werden auf dieser Seite beschrieben.",tags:["Eigenschaften","Properties","Attribute","Konzept"]},sidebar:"tutorialSidebar",previous:{title:"Architektur",permalink:"/en/docs/1.6/concepts/architecture"},next:{title:"Testvorgehen",permalink:"/en/docs/1.6/concepts/test"}},h={},p=[{value:"Aktueller Stand",id:"aktueller-stand",level:2},{value:"Veraltete Eigenschaften",id:"veraltete-eigenschaften",level:2},{value:"Veraltete Komponenten",id:"veraltete-komponenten",level:2},{value:"Weiter bestehende Komponenten",id:"weiter-bestehende-komponenten",level:3},{value:"Entfallende Komponenten",id:"entfallende-komponenten",level:3}];function u(e){const n={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"Ziel ist, m\xf6glichst \xfcber alle Komponenten einheitliche Eigenschaften (Properties) zu verwenden, um die Erlernbarkeit zu erleichtern. Folgende Anforderungen sind daf\xfcr definiert:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Nur ein Property-Name f\xfcr gleichartige Eigenschaften"}),"\n",(0,i.jsx)(n.li,{children:"Wenn m\xf6glich, einheitliche Beschreibungen bei gleichen Property-Namen"}),"\n",(0,i.jsx)(n.li,{children:"Wenn m\xf6glich, einheitliche Typen bei gleichen Property-Namen"}),"\n",(0,i.jsx)(n.li,{children:"Anzahl an unterschiedlichen Eigenschaften, Beschreibungen und Typen minimieren"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"aktueller-stand",children:"Aktueller Stand"}),"\n",(0,i.jsx)(s.f,{}),"\n",(0,i.jsx)(n.h2,{id:"veraltete-eigenschaften",children:"Veraltete Eigenschaften"}),"\n",(0,i.jsx)(n.p,{children:"Die in der folgenden Tabelle aufgelisteten Eigenschaften l\xf6sen zahlreiche veraltete Eigenschaften (13 von 98, ~13%) ab."}),"\n",(0,i.jsx)(o.C,{}),"\n",(0,i.jsx)(n.h2,{id:"veraltete-komponenten",children:"Veraltete Komponenten"}),"\n",(0,i.jsx)(n.p,{children:"Mit der initialen Realisierung von KoliBri in Version 1 sind auch ein Paar Komponenten entstanden, die sich im Laufe der Zeit als nicht optimal erwiesen haben. Entweder sind Komponenten nicht gut verortet oder ihre Funktionsweise und Verwendung ist nicht gut. Diese Komponenten werden in Zukunft in Version 2 entweder in andere NPM-Pakete umziehen oder nicht mehr weiterentwickelt und sollten daher nicht mehr direkt aus KoliBri / Public-UI verwendet werden."}),"\n",(0,i.jsx)(l.I,{}),"\n",(0,i.jsx)(n.h3,{id:"weiter-bestehende-komponenten",children:"Weiter bestehende Komponenten"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"ButtonGroup"})," wird durch die Umsetzung der ",(0,i.jsx)(n.code,{children:"Toolbar"}),"-Komponente abgel\xf6st"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"LinkGroup"})," wird durch die Umsetzung der ",(0,i.jsx)(n.code,{children:"List"}),"-Komponente abgel\xf6st"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"Logo"})," zieht in ein Bund-spezifisches Repository und NPM-Paket auf OpenCoDE um"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"entfallende-komponenten",children:"Entfallende Komponenten"}),"\n",(0,i.jsx)(n.p,{children:"Alle anderen Komponenten werden mit der Version 2 ersatzlos gestrichen. Sie sind nicht mehr in der Dokumentation zu finden und werden auch nicht mehr \xfcber KoliBri / Public-UI verf\xfcgbar sein."})]})}function m(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},99309:(e,n,t)=>{t.d(n,{I:()=>s});t(50959);var i=t(11527);const r=new Map;r.set("avatar",new Set),r.set("toolbar",new Set),r.set("tree",new Set),r.set("list",new Set),r.set("",new Set(["button-group","icon-font-awesome","icon-icofont","input-radio-group","link-group","symbol"]));const s=()=>(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)("table",{children:[(0,i.jsx)("thead",{children:(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{children:"New Component"}),(0,i.jsx)("th",{children:"Deprecated Components"})]})}),(0,i.jsx)("tbody",{children:Array.from(r.keys()).map((e=>{const n=Array.from(r.get(e)||[]);return(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:e}),(0,i.jsx)("td",{dangerouslySetInnerHTML:{__html:n.join(", ")}})]},e)}))})]}),(0,i.jsx)("p",{children:(0,i.jsxs)("small",{children:[(0,i.jsx)("sup",{children:"*"})," Betrifft nur Typen, die eigentlich Varianten meinen."]})})]})},80163:(e,n,t)=>{t.d(n,{C:()=>s});t(50959);var i=t(11527);const r=new Map;r.set("_align",new Set(["_tabs-align"])),r.set("_dataFoot",new Set([""])),r.set("_hide-button",new Set(["_has-buttons (?)"])),r.set("_hide-label",new Set(["_compact","_icon-only"])),r.set("_label",new Set(["_alt","_aria-label","_caption","_heading","_headline","_summary","_symbol","_title"])),r.set("_max",new Set(["_total"])),r.set("_row",new Set(["_size"])),r.set("_variant",new Set(["_type<sup>*</sup>"])),r.set("_show",new Set(["_show-dropdown"])),r.set("",new Set(["_has-footer","_height","_icon-align","_list","_part","_role","_show-duration","_stealth","_selector","_useCase"]));const s=()=>(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)("table",{children:[(0,i.jsx)("thead",{children:(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{children:"New Property"}),(0,i.jsx)("th",{children:"Deprecated Properties"})]})}),(0,i.jsx)("tbody",{children:Array.from(r.keys()).map((e=>{const n=Array.from(r.get(e)||[]);return(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:e}),(0,i.jsx)("td",{dangerouslySetInnerHTML:{__html:n.join(", ")}})]},e)}))})]}),(0,i.jsx)("p",{children:(0,i.jsxs)("small",{children:[(0,i.jsx)("sup",{children:"*"})," Betrifft nur Typen, die eigentlich Varianten meinen."]})})]})},34542:(e,n,t)=>{t.d(n,{f:()=>d});t(50959);var i=t(53878),r=t(11527);const s=["kol-alert-wc","kol-avatar-wc","kol-all","kol-button-group","kol-button-group-wc","kol-button-link-text-switch","kol-button-wc","kol-color","kol-counter","kol-heading-wc","kol-icon-font-awesome","kol-icon-icofont","kol-input","kol-input-adapter-leanup","kol-input-radio-group","kol-kolibri","kol-logo","kol-link-group","kol-link-wc","kol-span","kol-span-wc","kol-symbol","kol-tooltip-wc","kol-version"],o=new Map,l=new Map;i.p.forEach((e=>{if(-1===s.indexOf(e.name)){const n=e.name.replace("kol-","");!1===o.has(n)&&o.set(n,{desc:e.description,props:new Set}),e.attributes.forEach((e=>{if(!1===l.has(e.name)){const n=new Map;n.set("components",new Set),n.set("descriptions",new Set),n.set("types",new Set),l.set(e.name,n)}const t=l.get(e.name);t&&(t.get("components").add(n),t.get("descriptions").add(e.description),t.get("types").add(e.type.replace(/ \| undefined/g,"")))}))}}));const a=new Map;a.set("components",new Set(["kol-pagination"])),a.set("descriptions",new Set(["Versteckt entweder den Zur\xfcck- oder Weiter-Schalter, oder beide Schalter."])),a.set("types",new Set(['"previous" | "next" | "both"'])),l.set("_hide-button",a);const c=["_alt","_aria-label","_caption","_compact","_has-compact-button","_has-footer","_heading","_headline","_icon-align","_icon-only","_list","_part","_role","_title","_total","_selector","_show-duration","_size","_stealth","_summary","_tabs-align","_use-case"],d=()=>{let e=0;return(0,r.jsxs)("table",{children:[(0,r.jsx)("thead",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:"#"}),(0,r.jsx)("th",{children:"Property"}),(0,r.jsx)("th",{children:"Components"}),(0,r.jsx)("th",{children:"Descriptions"}),(0,r.jsx)("th",{children:"Types"})]})}),(0,r.jsx)("tbody",{children:Array.from(l.keys()).map(((n,t)=>{if(c.includes(n))return null;e++;const i=Array.from(l.get(n)?.get("components")||[]),s=Array.from(l.get(n)?.get("descriptions")||[]),o=Array.from(l.get(n)?.get("types")||[]);return(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:e}),(0,r.jsx)("td",{style:{backgroundColor:c.includes(n)?"#fbc":void 0},children:n}),(0,r.jsx)("td",{children:i.join(", ")}),(0,r.jsx)("td",{style:{backgroundColor:s.length>1?"#fbc":void 0},dangerouslySetInnerHTML:{__html:s.join("<hr>")}}),(0,r.jsx)("td",{style:{backgroundColor:o.length>1?"#fbc":void 0},dangerouslySetInnerHTML:{__html:o.join("<hr>")}})]},n)}))})]})}}}]);