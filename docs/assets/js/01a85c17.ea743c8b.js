"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[4013],{65985:(e,t,a)=>{a.d(t,{Z:()=>E});var l=a(50959),r=a(45924),n=a(98152),s=a(6098),i=a(81941),c=a(93216);const m={sidebar:"sidebar_DwfA",sidebarItemTitle:"sidebarItemTitle_yAFD",sidebarItemList:"sidebarItemList_ArzH",sidebarItem:"sidebarItem_E1Tn",sidebarItemLink:"sidebarItemLink_rz4d",sidebarItemLinkActive:"sidebarItemLinkActive_z0nh"};function o(e){let{sidebar:t}=e;return l.createElement("aside",{className:"col col--3"},l.createElement("nav",{className:(0,r.Z)(m.sidebar,"thin-scrollbar"),"aria-label":(0,c.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},l.createElement("div",{className:(0,r.Z)(m.sidebarItemTitle,"margin-bottom--md")},t.title),l.createElement("ul",{className:(0,r.Z)(m.sidebarItemList,"clean-list")},t.items.map((e=>l.createElement("li",{key:e.permalink,className:m.sidebarItem},l.createElement(i.Z,{isNavLink:!0,to:e.permalink,className:m.sidebarItemLink,activeClassName:m.sidebarItemLinkActive},e.title)))))))}var d=a(69378);function g(e){let{sidebar:t}=e;return l.createElement("ul",{className:"menu__list"},t.items.map((e=>l.createElement("li",{key:e.permalink,className:"menu__list-item"},l.createElement(i.Z,{isNavLink:!0,to:e.permalink,className:"menu__link",activeClassName:"menu__link--active"},e.title)))))}function u(e){return l.createElement(d.Zo,{component:g,props:e})}function b(e){let{sidebar:t}=e;const a=(0,s.i)();return t?.items.length?"mobile"===a?l.createElement(u,{sidebar:t}):l.createElement(o,{sidebar:t}):null}function E(e){const{sidebar:t,toc:a,children:s,...i}=e,c=t&&t.items.length>0;return l.createElement(n.Z,i,l.createElement("div",{className:"container margin-vert--lg"},l.createElement("div",{className:"row"},l.createElement(b,{sidebar:t}),l.createElement("main",{className:(0,r.Z)("col",{"col--7":c,"col--9 col--offset-1":!c}),itemScope:!0,itemType:"http://schema.org/Blog"},s),a&&l.createElement("div",{className:"col col--2"},a))))}},67796:(e,t,a)=>{a.r(t),a.d(t,{default:()=>d});var l=a(50959),r=a(45924),n=a(27112),s=a(40533),i=a(24832),c=a(65985),m=a(44319),o=a(95392);function d(e){let{tags:t,sidebar:a}=e;const d=(0,n.M)();return l.createElement(s.FG,{className:(0,r.Z)(i.k.wrapper.blogPages,i.k.page.blogTagsListPage)},l.createElement(s.d,{title:d}),l.createElement(o.Z,{tag:"blog_tags_list"}),l.createElement(c.Z,{sidebar:a},l.createElement("h1",null,d),l.createElement(m.Z,{tags:t})))}},26152:(e,t,a)=>{a.d(t,{Z:()=>i});var l=a(50959),r=a(45924),n=a(81941);const s={tag:"tag_k3n4",tagRegular:"tagRegular_xmOd",tagWithCount:"tagWithCount_ZLe_"};function i(e){let{permalink:t,label:a,count:i}=e;return l.createElement(n.Z,{href:t,className:(0,r.Z)(s.tag,i?s.tagWithCount:s.tagRegular)},a,i&&l.createElement("span",null,i))}},44319:(e,t,a)=>{a.d(t,{Z:()=>c});var l=a(50959),r=a(27112),n=a(26152);const s={tag:"tag_fw8c"};function i(e){let{letterEntry:t}=e;return l.createElement("article",null,l.createElement("h2",null,t.letter),l.createElement("ul",{className:"padding--none"},t.tags.map((e=>l.createElement("li",{key:e.permalink,className:s.tag},l.createElement(n.Z,e))))),l.createElement("hr",null))}function c(e){let{tags:t}=e;const a=(0,r.P)(t);return l.createElement("section",{className:"margin-vert--lg"},a.map((e=>l.createElement(i,{key:e.letter,letterEntry:e}))))}},27112:(e,t,a)=>{a.d(t,{M:()=>r,P:()=>n});var l=a(93216);const r=()=>(0,l.I)({id:"theme.tags.tagsPageTitle",message:"Tags",description:"The title of the tag list page"});function n(e){const t={};return Object.values(e).forEach((e=>{const a=function(e){return e[0].toUpperCase()}(e.label);t[a]??=[],t[a].push(e)})),Object.entries(t).sort(((e,t)=>{let[a]=e,[l]=t;return a.localeCompare(l)})).map((e=>{let[t,a]=e;return{letter:t,tags:a.sort(((e,t)=>e.label.localeCompare(t.label)))}}))}}}]);