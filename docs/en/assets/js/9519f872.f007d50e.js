"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[7362],{31091:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>w,contentTitle:()=>b,default:()=>S,frontMatter:()=>k,metadata:()=>g,toc:()=>y});var r=n(15882),o=n(50959),l=n(17942),s=n(23302);const a=["kol-alert-wc","kol-all","kol-button-group","kol-color","kol-counter","kol-button-wc","kol-heading-wc","kol-icon-font-awesome","kol-icon-icofont","kol-input","kol-input-adapter-leanup","kol-input-radio-group","kol-kolibri","kol-logo","kol-link-group","kol-link-wc","kol-span","kol-span-wc","kol-symbol","kol-tooltip","kol-version"],i=new Map,c=new Map;s.p.forEach((e=>{if(-1===a.indexOf(e.name)){const t=e.name.replace("kol-","");!1===i.has(t)&&i.set(t,{desc:e.description,props:new Set}),e.attributes.forEach((e=>{if(!1===c.has(e.name)){const t=new Map;t.set("components",new Set),t.set("descriptions",new Set),t.set("types",new Set),c.set(e.name,t)}const n=c.get(e.name);n&&(n.get("components").add(t),n.get("descriptions").add(e.description),n.get("types").add(e.type.replace(/ \| undefined/g,"")))}))}}));const p=new Map;p.set("components",new Set(["kol-pagination"])),p.set("descriptions",new Set(["Versteckt entweder den Zur\xfcck- oder Weiter-Schalter, oder beide Schalter."])),p.set("types",new Set(['"previous" | "next" | "both"'])),c.set("_hide-button",p);const u=()=>o.createElement("table",null,o.createElement("thead",null,o.createElement("tr",null,o.createElement("th",null,"#"),o.createElement("th",null,"Property"),o.createElement("th",null,"Components"),o.createElement("th",null,"Descriptions"),o.createElement("th",null,"Types"))),o.createElement("tbody",null,Array.from(c.keys()).map(((e,t)=>{const n=Array.from(c.get(e)?.get("components")||[]),r=Array.from(c.get(e)?.get("descriptions")||[]),l=Array.from(c.get(e)?.get("types")||[]);return o.createElement("tr",{key:e},o.createElement("td",null,t),o.createElement("td",{style:{backgroundColor:["_alt","_aria-label","_caption","_compact","_has-compact-button","_has-footer","_heading","_headline","_icon-align","_icon-only","_list","_part","_role","_title","_total","_selector","_show-duration","_size","_srcset","_stealth","_summary","_tabs-align","_use-case"].includes(e)&&"#fbc"}},e),o.createElement("td",null,n.join(", ")),o.createElement("td",{style:{backgroundColor:r.length>1&&"#fbc"},dangerouslySetInnerHTML:{__html:r.join("<hr>")}}),o.createElement("td",{style:{backgroundColor:l.length>1&&"#fbc"},dangerouslySetInnerHTML:{__html:l.join("<hr>")}}))})))),m=new Map;m.set("_align",new Set(["_tabs-align"])),m.set("_dataFoot",new Set([""])),m.set("_hide-button",new Set(["_has-buttons (?)"])),m.set("_hide-label",new Set(["_compact","_icon-only"])),m.set("_label",new Set(["_alt","_aria-label","_caption","_heading","_headline","_summary","_symbol","_title"])),m.set("_max",new Set(["_total"])),m.set("_row",new Set(["_size"])),m.set("_variant",new Set(["_type<sup>*</sup>"])),m.set("_src",new Set(["_srcset"])),m.set("_show",new Set(["_show-dropdown"])),m.set("",new Set(["_has-footer","_height","_icon-align","_list","_part","_role","_show-duration","_stealth","_selector","_useCase"]));const d=()=>o.createElement(o.Fragment,null,o.createElement("table",null,o.createElement("thead",null,o.createElement("tr",null,o.createElement("th",null,"New Property"),o.createElement("th",null,"Deprecated Properties"))),o.createElement("tbody",null,Array.from(m.keys()).map((e=>{const t=Array.from(m.get(e)||[]);return o.createElement("tr",{key:e},o.createElement("td",null,e),o.createElement("td",{dangerouslySetInnerHTML:{__html:t.join(", ")}}))})))),o.createElement("p",null,o.createElement("small",null,o.createElement("sup",null,"*")," Betrifft nur Typen, die eigentlich Varianten meinen."))),h=new Map;h.set("avatar",new Set),h.set("toolbar",new Set),h.set("tree",new Set),h.set("list",new Set),h.set("",new Set(["button-group","icon-font-awesome","icon-icofont","input-radio-group","link-group","symbol"]));const _=()=>o.createElement(o.Fragment,null,o.createElement("table",null,o.createElement("thead",null,o.createElement("tr",null,o.createElement("th",null,"New Component"),o.createElement("th",null,"Deprecated Components"))),o.createElement("tbody",null,Array.from(h.keys()).map((e=>{const t=Array.from(h.get(e)||[]);return o.createElement("tr",{key:e},o.createElement("td",null,e),o.createElement("td",{dangerouslySetInnerHTML:{__html:t.join(", ")}}))})))),o.createElement("p",null,o.createElement("small",null,o.createElement("sup",null,"*")," Betrifft nur Typen, die eigentlich Varianten meinen."))),k={title:"Properties",description:"The properties of the component are described on this page.",tags:["Characteristics","Properties","Attributes","Concept"]},b=void 0,g={unversionedId:"concepts/properties",id:"concepts/properties",title:"Properties",description:"The properties of the component are described on this page.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/20-concepts/02-properties.mdx",sourceDirName:"20-concepts",slug:"/concepts/properties",permalink:"/en/docs/concepts/properties",draft:!1,tags:[{label:"Characteristics",permalink:"/en/docs/tags/characteristics"},{label:"Properties",permalink:"/en/docs/tags/properties"},{label:"Attributes",permalink:"/en/docs/tags/attributes"},{label:"Concept",permalink:"/en/docs/tags/concept"}],version:"current",sidebarPosition:2,frontMatter:{title:"Properties",description:"The properties of the component are described on this page.",tags:["Characteristics","Properties","Attributes","Concept"]},sidebar:"tutorialSidebar",previous:{title:"Architecture",permalink:"/en/docs/concepts/architecture"},next:{title:"Test procedure",permalink:"/en/docs/concepts/testprocedure"}},w={},y=[{value:"Current status",id:"current-status",level:2},{value:"Deprecated Properties",id:"deprecated-properties",level:2},{value:"Obsolete components",id:"obsolete-components",level:2}],f={toc:y},E="wrapper";function S(e){let{components:t,...n}=e;return(0,l.kt)(E,(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"The aim is to use uniform properties across all components to make it easier to learn. The following requirements are defined for this:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Only one property name for similar properties"),(0,l.kt)("li",{parentName:"ul"},"If possible, uniform descriptions for the same property names"),(0,l.kt)("li",{parentName:"ul"},"If possible, uniform types with the same property names"),(0,l.kt)("li",{parentName:"ul"},"Minimize the number of different properties, descriptions and types")),(0,l.kt)("h2",{id:"current-status"},"Current status"),(0,l.kt)(u,{mdxType:"PropertiesOverview"}),(0,l.kt)("h2",{id:"deprecated-properties"},"Deprecated Properties"),(0,l.kt)("p",null,"The traits listed in the table below replace numerous deprecated traits (13 von 99, ~13%)."),(0,l.kt)(d,{mdxType:"PropertiesDeprecated"}),(0,l.kt)("h2",{id:"obsolete-components"},"Obsolete components"),(0,l.kt)("p",null,"The components listed in the following table will be superseded or removed."),(0,l.kt)(_,{mdxType:"ComponentsDeprecated"}))}S.isMDXComponent=!0}}]);