"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[99270],{92053:(e,t,n)=>{n.d(t,{I:()=>l});var r=n(50959);const o=new Map;o.set("avatar",new Set),o.set("toolbar",new Set),o.set("tree",new Set),o.set("list",new Set),o.set("",new Set(["button-group","icon-font-awesome","icon-icofont","input-radio-group","link-group","symbol"]));const l=()=>r.createElement(r.Fragment,null,r.createElement("table",null,r.createElement("thead",null,r.createElement("tr",null,r.createElement("th",null,"New Component"),r.createElement("th",null,"Deprecated Components"))),r.createElement("tbody",null,Array.from(o.keys()).map((e=>{const t=Array.from(o.get(e)||[]);return r.createElement("tr",{key:e},r.createElement("td",null,e),r.createElement("td",{dangerouslySetInnerHTML:{__html:t.join(", ")}}))})))),r.createElement("p",null,r.createElement("small",null,r.createElement("sup",null,"*")," Betrifft nur Typen, die eigentlich Varianten meinen.")))},71874:(e,t,n)=>{n.d(t,{C:()=>l});var r=n(50959);const o=new Map;o.set("_align",new Set(["_tabs-align"])),o.set("_dataFoot",new Set([""])),o.set("_hide-button",new Set(["_has-buttons (?)"])),o.set("_hide-label",new Set(["_compact","_icon-only"])),o.set("_label",new Set(["_alt","_aria-label","_caption","_heading","_headline","_summary","_symbol","_title"])),o.set("_max",new Set(["_total"])),o.set("_row",new Set(["_size"])),o.set("_variant",new Set(["_type<sup>*</sup>"])),o.set("_show",new Set(["_show-dropdown"])),o.set("",new Set(["_has-footer","_height","_icon-align","_list","_part","_role","_show-duration","_stealth","_selector","_useCase"]));const l=()=>r.createElement(r.Fragment,null,r.createElement("table",null,r.createElement("thead",null,r.createElement("tr",null,r.createElement("th",null,"New Property"),r.createElement("th",null,"Deprecated Properties"))),r.createElement("tbody",null,Array.from(o.keys()).map((e=>{const t=Array.from(o.get(e)||[]);return r.createElement("tr",{key:e},r.createElement("td",null,e),r.createElement("td",{dangerouslySetInnerHTML:{__html:t.join(", ")}}))})))),r.createElement("p",null,r.createElement("small",null,r.createElement("sup",null,"*")," Betrifft nur Typen, die eigentlich Varianten meinen.")))},71814:(e,t,n)=>{n.d(t,{f:()=>p});var r=n(50959),o=n(59673);const l=["kol-alert-wc","kol-avatar-wc","kol-all","kol-button-group","kol-button-group-wc","kol-button-link-text-switch","kol-button-wc","kol-color","kol-counter","kol-heading-wc","kol-icon-font-awesome","kol-icon-icofont","kol-input","kol-input-adapter-leanup","kol-input-radio-group","kol-kolibri","kol-logo","kol-link-group","kol-link-wc","kol-span","kol-span-wc","kol-symbol","kol-tooltip-wc","kol-version"],s=new Map,a=new Map;o.p.forEach((e=>{if(-1===l.indexOf(e.name)){const t=e.name.replace("kol-","");!1===s.has(t)&&s.set(t,{desc:e.description,props:new Set}),e.attributes.forEach((e=>{if(!1===a.has(e.name)){const t=new Map;t.set("components",new Set),t.set("descriptions",new Set),t.set("types",new Set),a.set(e.name,t)}const n=a.get(e.name);n&&(n.get("components").add(t),n.get("descriptions").add(e.description),n.get("types").add(e.type.replace(/ \| undefined/g,"")))}))}}));const i=new Map;i.set("components",new Set(["kol-pagination"])),i.set("descriptions",new Set(["Versteckt entweder den Zur\xfcck- oder Weiter-Schalter, oder beide Schalter."])),i.set("types",new Set(['"previous" | "next" | "both"'])),a.set("_hide-button",i);const c=["_alt","_aria-label","_caption","_compact","_has-compact-button","_has-footer","_heading","_headline","_icon-align","_icon-only","_list","_part","_role","_title","_total","_selector","_show-duration","_size","_stealth","_summary","_tabs-align","_use-case"],p=()=>{let e=0;return r.createElement("table",null,r.createElement("thead",null,r.createElement("tr",null,r.createElement("th",null,"#"),r.createElement("th",null,"Property"),r.createElement("th",null,"Components"),r.createElement("th",null,"Descriptions"),r.createElement("th",null,"Types"))),r.createElement("tbody",null,Array.from(a.keys()).map(((t,n)=>{if(c.includes(t))return null;e++;const o=Array.from(a.get(t)?.get("components")||[]),l=Array.from(a.get(t)?.get("descriptions")||[]),s=Array.from(a.get(t)?.get("types")||[]);return r.createElement("tr",{key:t},r.createElement("td",null,e),r.createElement("td",{style:{backgroundColor:c.includes(t)?"#fbc":void 0}},t),r.createElement("td",null,o.join(", ")),r.createElement("td",{style:{backgroundColor:l.length>1?"#fbc":void 0},dangerouslySetInnerHTML:{__html:l.join("<hr>")}}),r.createElement("td",{style:{backgroundColor:s.length>1?"#fbc":void 0},dangerouslySetInnerHTML:{__html:s.join("<hr>")}}))}))))}},42879:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>k,frontMatter:()=>i,metadata:()=>p,toc:()=>d});var r=n(52319),o=(n(50959),n(17942)),l=n(71814),s=n(71874),a=n(92053);const i={title:"Properties",description:"The properties of the component are described on this page.",tags:["Characteristics","Properties","Attributes","Concept"]},c=void 0,p={unversionedId:"concepts/properties",id:"version-1.7/concepts/properties",title:"Properties",description:"The properties of the component are described on this page.",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-1.7/20-concepts/02-properties.mdx",sourceDirName:"20-concepts",slug:"/concepts/properties",permalink:"/en/docs/concepts/properties",draft:!1,tags:[{label:"Characteristics",permalink:"/en/docs/tags/characteristics"},{label:"Properties",permalink:"/en/docs/tags/properties"},{label:"Attributes",permalink:"/en/docs/tags/attributes"},{label:"Concept",permalink:"/en/docs/tags/concept"}],version:"1.7",sidebarPosition:2,frontMatter:{title:"Properties",description:"The properties of the component are described on this page.",tags:["Characteristics","Properties","Attributes","Concept"]},sidebar:"tutorialSidebar",previous:{title:"Architecture",permalink:"/en/docs/concepts/architecture"},next:{title:"Test procedure",permalink:"/en/docs/concepts/testprocedure"}},u={},d=[{value:"Current status",id:"current-status",level:2},{value:"Deprecated Properties",id:"deprecated-properties",level:2},{value:"Obsolete components",id:"obsolete-components",level:2}],m={toc:d},h="wrapper";function k(e){let{components:t,...n}=e;return(0,o.kt)(h,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The aim is to use uniform properties across all components to make it easier to learn. The following requirements are defined for this:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Only one property name for similar properties"),(0,o.kt)("li",{parentName:"ul"},"If possible, uniform descriptions for the same property names"),(0,o.kt)("li",{parentName:"ul"},"If possible, uniform types with the same property names"),(0,o.kt)("li",{parentName:"ul"},"Minimize the number of different properties, descriptions and types")),(0,o.kt)("h2",{id:"current-status"},"Current status"),(0,o.kt)(l.f,{mdxType:"PropertiesOverview"}),(0,o.kt)("h2",{id:"deprecated-properties"},"Deprecated Properties"),(0,o.kt)("p",null,"The traits listed in the table below replace numerous deprecated traits (13 von 99, ~13%)."),(0,o.kt)(s.C,{mdxType:"PropertiesDeprecated"}),(0,o.kt)("h2",{id:"obsolete-components"},"Obsolete components"),(0,o.kt)("p",null,"The components listed in the following table will be superseded or removed."),(0,o.kt)(a.I,{mdxType:"ComponentsDeprecated"}))}k.isMDXComponent=!0}}]);