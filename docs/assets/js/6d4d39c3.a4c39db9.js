"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[86293],{93600:(e,t,n)=>{n.d(t,{I:()=>i});var r=n(50959);const l=new Map;l.set("avatar",new Set),l.set("toolbar",new Set),l.set("tree",new Set),l.set("list",new Set),l.set("",new Set(["button-group","icon-font-awesome","icon-icofont","input-radio-group","link-group","symbol"]));const i=()=>r.createElement(r.Fragment,null,r.createElement("table",null,r.createElement("thead",null,r.createElement("tr",null,r.createElement("th",null,"New Component"),r.createElement("th",null,"Deprecated Components"))),r.createElement("tbody",null,Array.from(l.keys()).map((e=>{const t=Array.from(l.get(e)||[]);return r.createElement("tr",{key:e},r.createElement("td",null,e),r.createElement("td",{dangerouslySetInnerHTML:{__html:t.join(", ")}}))})))),r.createElement("p",null,r.createElement("small",null,r.createElement("sup",null,"*")," Betrifft nur Typen, die eigentlich Varianten meinen.")))},37630:(e,t,n)=>{n.d(t,{C:()=>i});var r=n(50959);const l=new Map;l.set("_align",new Set(["_tabs-align"])),l.set("_dataFoot",new Set([""])),l.set("_hide-button",new Set(["_has-buttons (?)"])),l.set("_hide-label",new Set(["_compact","_icon-only"])),l.set("_label",new Set(["_alt","_aria-label","_caption","_heading","_headline","_summary","_symbol","_title"])),l.set("_max",new Set(["_total"])),l.set("_row",new Set(["_size"])),l.set("_variant",new Set(["_type<sup>*</sup>"])),l.set("_src",new Set(["_srcset"])),l.set("_show",new Set(["_show-dropdown"])),l.set("",new Set(["_has-footer","_height","_icon-align","_list","_part","_role","_show-duration","_stealth","_selector","_useCase"]));const i=()=>r.createElement(r.Fragment,null,r.createElement("table",null,r.createElement("thead",null,r.createElement("tr",null,r.createElement("th",null,"New Property"),r.createElement("th",null,"Deprecated Properties"))),r.createElement("tbody",null,Array.from(l.keys()).map((e=>{const t=Array.from(l.get(e)||[]);return r.createElement("tr",{key:e},r.createElement("td",null,e),r.createElement("td",{dangerouslySetInnerHTML:{__html:t.join(", ")}}))})))),r.createElement("p",null,r.createElement("small",null,r.createElement("sup",null,"*")," Betrifft nur Typen, die eigentlich Varianten meinen.")))},54677:(e,t,n)=>{n.d(t,{f:()=>d});var r=n(50959),l=n(6826);const i=["kol-alert-wc","kol-all","kol-button-group","kol-color","kol-counter","kol-button-wc","kol-heading-wc","kol-icon-font-awesome","kol-icon-icofont","kol-input","kol-input-adapter-leanup","kol-input-radio-group","kol-kolibri","kol-logo","kol-link-group","kol-link-wc","kol-span","kol-span-wc","kol-symbol","kol-tooltip","kol-version"],o=new Map,a=new Map;l.p.forEach((e=>{if(-1===i.indexOf(e.name)){const t=e.name.replace("kol-","");!1===o.has(t)&&o.set(t,{desc:e.description,props:new Set}),e.attributes.forEach((e=>{if(!1===a.has(e.name)){const t=new Map;t.set("components",new Set),t.set("descriptions",new Set),t.set("types",new Set),a.set(e.name,t)}const n=a.get(e.name);n&&(n.get("components").add(t),n.get("descriptions").add(e.description),n.get("types").add(e.type.replace(/ \| undefined/g,"")))}))}}));const s=new Map;s.set("components",new Set(["kol-pagination"])),s.set("descriptions",new Set(["Versteckt entweder den Zur\xfcck- oder Weiter-Schalter, oder beide Schalter."])),s.set("types",new Set(['"previous" | "next" | "both"'])),a.set("_hide-button",s);const c=["_alt","_aria-label","_caption","_compact","_has-compact-button","_has-footer","_heading","_headline","_icon-align","_icon-only","_list","_part","_role","_title","_total","_selector","_show-duration","_size","_srcset","_stealth","_summary","_tabs-align","_use-case"],d=()=>{let e=0;return r.createElement("table",null,r.createElement("thead",null,r.createElement("tr",null,r.createElement("th",null,"#"),r.createElement("th",null,"Property"),r.createElement("th",null,"Components"),r.createElement("th",null,"Descriptions"),r.createElement("th",null,"Types"))),r.createElement("tbody",null,Array.from(a.keys()).map(((t,n)=>{if(c.includes(t))return null;e++;const l=Array.from(a.get(t)?.get("components")||[]),i=Array.from(a.get(t)?.get("descriptions")||[]),o=Array.from(a.get(t)?.get("types")||[]);return r.createElement("tr",{key:t},r.createElement("td",null,e),r.createElement("td",{style:{backgroundColor:c.includes(t)?"#fbc":void 0}},t),r.createElement("td",null,l.join(", ")),r.createElement("td",{style:{backgroundColor:i.length>1?"#fbc":void 0},dangerouslySetInnerHTML:{__html:i.join("<hr>")}}),r.createElement("td",{style:{backgroundColor:o.length>1?"#fbc":void 0},dangerouslySetInnerHTML:{__html:o.join("<hr>")}}))}))))}},830:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>k,frontMatter:()=>s,metadata:()=>d,toc:()=>u});var r=n(15882),l=(n(50959),n(17942)),i=n(54677),o=n(37630),a=n(93600);const s={title:"Eigenschaften",description:"Die Eigenschaften der Komponente werden auf dieser Seite beschrieben.",tags:["Eigenschaften","Properties","Attribute","Konzept"]},c=void 0,d={unversionedId:"concepts/properties",id:"version-1.6.0/concepts/properties",title:"Eigenschaften",description:"Die Eigenschaften der Komponente werden auf dieser Seite beschrieben.",source:"@site/versioned_docs/version-1.6.0/20-concepts/02-properties.mdx",sourceDirName:"20-concepts",slug:"/concepts/properties",permalink:"/docs/1.6.0/concepts/properties",draft:!1,tags:[{label:"Eigenschaften",permalink:"/docs/1.6.0/tags/eigenschaften"},{label:"Properties",permalink:"/docs/1.6.0/tags/properties"},{label:"Attribute",permalink:"/docs/1.6.0/tags/attribute"},{label:"Konzept",permalink:"/docs/1.6.0/tags/konzept"}],version:"1.6.0",sidebarPosition:2,frontMatter:{title:"Eigenschaften",description:"Die Eigenschaften der Komponente werden auf dieser Seite beschrieben.",tags:["Eigenschaften","Properties","Attribute","Konzept"]},sidebar:"tutorialSidebar",previous:{title:"Architektur",permalink:"/docs/1.6.0/concepts/architecture"},next:{title:"Testvorgehen",permalink:"/docs/1.6.0/concepts/test"}},p={},u=[{value:"Aktueller Stand",id:"aktueller-stand",level:2},{value:"Veraltete Eigenschaften",id:"veraltete-eigenschaften",level:2},{value:"Veraltete Komponenten",id:"veraltete-komponenten",level:2},{value:"Weiter bestehende Komponenten",id:"weiter-bestehende-komponenten",level:3},{value:"Entfallende Komponenten",id:"entfallende-komponenten",level:3}],m={toc:u},h="wrapper";function k(e){let{components:t,...n}=e;return(0,l.kt)(h,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Ziel ist, m\xf6glichst \xfcber alle Komponenten einheitliche Eigenschaften (Properties) zu verwenden, um die Erlernbarkeit zu erleichtern. Folgende Anforderungen sind daf\xfcr definiert:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Nur ein Property-Name f\xfcr gleichartige Eigenschaften"),(0,l.kt)("li",{parentName:"ul"},"Wenn m\xf6glich, einheitliche Beschreibungen bei gleichen Property-Namen"),(0,l.kt)("li",{parentName:"ul"},"Wenn m\xf6glich, einheitliche Typen bei gleichen Property-Namen"),(0,l.kt)("li",{parentName:"ul"},"Anzahl an unterschiedlichen Eigenschaften, Beschreibungen und Typen minimieren")),(0,l.kt)("h2",{id:"aktueller-stand"},"Aktueller Stand"),(0,l.kt)(i.f,{mdxType:"PropertiesOverview"}),(0,l.kt)("h2",{id:"veraltete-eigenschaften"},"Veraltete Eigenschaften"),(0,l.kt)("p",null,"Die in der folgenden Tabelle aufgelisteten Eigenschaften l\xf6sen zahlreiche veraltete Eigenschaften (13 von 98, ~13%) ab."),(0,l.kt)(o.C,{mdxType:"PropertiesDeprecated"}),(0,l.kt)("h2",{id:"veraltete-komponenten"},"Veraltete Komponenten"),(0,l.kt)("p",null,"Mit der initialen Realisierung von KoliBri in Version 1 sind auch ein Paar Komponenten entstanden, die sich im Laufe der Zeit als nicht optimal erwiesen haben. Entweder sind Komponenten nicht gut verortet oder ihre Funktionsweise und Verwendung ist nicht gut. Diese Komponenten werden in Zukunft in Version 2 entweder in andere NPM-Pakete umziehen oder nicht mehr weiterentwickelt und sollten daher nicht mehr direkt aus KoliBri / Public-UI verwendet werden."),(0,l.kt)(a.I,{mdxType:"ComponentsDeprecated"}),(0,l.kt)("h3",{id:"weiter-bestehende-komponenten"},"Weiter bestehende Komponenten"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"ButtonGroup")," wird durch die Umsetzung der ",(0,l.kt)("inlineCode",{parentName:"li"},"Toolbar"),"-Komponente abgel\xf6st"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"LinkGroup")," wird durch die Umsetzung der ",(0,l.kt)("inlineCode",{parentName:"li"},"List"),"-Komponente abgel\xf6st"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Logo")," zieht in ein Bund-spezifisches Repository und NPM-Paket auf OpenCoDE um")),(0,l.kt)("h3",{id:"entfallende-komponenten"},"Entfallende Komponenten"),(0,l.kt)("p",null,"Alle anderen Komponenten werden mit der Version 2 ersatzlos gestrichen. Sie sind nicht mehr in der Dokumentation zu finden und werden auch nicht mehr \xfcber KoliBri / Public-UI verf\xfcgbar sein."))}k.isMDXComponent=!0}}]);