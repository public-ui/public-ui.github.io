"use strict";(self.webpackChunk_public_ui_website=self.webpackChunk_public_ui_website||[]).push([[3751],{233:(e,t,a)=>{a.r(t),a.d(t,{default:()=>u});var l=a(9496),n=a(5924),r=a(9065),c=a(2108),s=a(5991),m=a(5608),i=a(2018),o=a(2664);function u(e){let{tags:t}=e;const a=(0,r.M)();return l.createElement(c.FG,{className:(0,n.Z)(s.k.wrapper.docsPages,s.k.page.docsTagsListPage)},l.createElement(c.d,{title:a}),l.createElement(o.Z,{tag:"doc_tags_list"}),l.createElement(m.Z,null,l.createElement("div",{className:"container margin-vert--lg"},l.createElement("div",{className:"row"},l.createElement("main",{className:"col col--8 col--offset-2"},l.createElement("h1",null,a),l.createElement(i.Z,{tags:t}))))))}},5881:(e,t,a)=>{a.d(t,{Z:()=>i});var l=a(9496),n=a(5924),r=a(5020);const c="tag_E8pN",s="tagRegular_MeXt",m="tagWithCount_uYgD";function i(e){let{permalink:t,label:a,count:i}=e;return l.createElement(r.Z,{href:t,className:(0,n.Z)(c,i?m:s)},a,i&&l.createElement("span",null,i))}},2018:(e,t,a)=>{a.d(t,{Z:()=>m});var l=a(9496),n=a(9065),r=a(5881);const c="tag_cxpv";function s(e){let{letterEntry:t}=e;return l.createElement("article",null,l.createElement("h2",null,t.letter),l.createElement("ul",{className:"padding--none"},t.tags.map((e=>l.createElement("li",{key:e.permalink,className:c},l.createElement(r.Z,e))))),l.createElement("hr",null))}function m(e){let{tags:t}=e;const a=(0,n.P)(t);return l.createElement("section",{className:"margin-vert--lg"},a.map((e=>l.createElement(s,{key:e.letter,letterEntry:e}))))}},9065:(e,t,a)=>{a.d(t,{M:()=>n,P:()=>r});var l=a(2926);const n=()=>(0,l.I)({id:"theme.tags.tagsPageTitle",message:"Tags",description:"The title of the tag list page"});function r(e){const t={};return Object.values(e).forEach((e=>{const a=function(e){return e[0].toUpperCase()}(e.label);t[a]??=[],t[a].push(e)})),Object.entries(t).sort(((e,t)=>{let[a]=e,[l]=t;return a.localeCompare(l)})).map((e=>{let[t,a]=e;return{letter:t,tags:a.sort(((e,t)=>e.label.localeCompare(t.label)))}}))}}}]);