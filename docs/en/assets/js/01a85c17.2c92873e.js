"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[58412],{45140:(e,t,s)=>{s.d(t,{c:()=>v});var a=s(80924),i=s(95880),r=s(11488),n=s(40576),l=s(92080),c=s(22016),o=s(12624),d=s(55540);function m(e){const{pathname:t}=(0,o.IT)();return(0,a.useMemo)((()=>e.filter((e=>function(e,t){return!(e.unlisted&&!(0,d.Sc)(e.permalink,t))}(e,t)))),[e,t])}const u={sidebar:"sidebar_yzO1",sidebarItemTitle:"sidebarItemTitle_Lked",sidebarItemList:"sidebarItemList_JnTz",sidebarItem:"sidebarItem_cncZ",sidebarItemLink:"sidebarItemLink_nMmx",sidebarItemLinkActive:"sidebarItemLinkActive_UiJ0"};var g=s(76776);function b(e){let{sidebar:t}=e;const s=m(t.items);return(0,g.jsx)("aside",{className:"col col--3",children:(0,g.jsxs)("nav",{className:(0,i.c)(u.sidebar,"thin-scrollbar"),"aria-label":(0,c.G)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"}),children:[(0,g.jsx)("div",{className:(0,i.c)(u.sidebarItemTitle,"margin-bottom--md"),children:t.title}),(0,g.jsx)("ul",{className:(0,i.c)(u.sidebarItemList,"clean-list"),children:s.map((e=>(0,g.jsx)("li",{className:u.sidebarItem,children:(0,g.jsx)(l.c,{isNavLink:!0,to:e.permalink,className:u.sidebarItemLink,activeClassName:u.sidebarItemLinkActive,children:e.title})},e.permalink)))})]})})}var h=s(76028);function x(e){let{sidebar:t}=e;const s=m(t.items);return(0,g.jsx)("ul",{className:"menu__list",children:s.map((e=>(0,g.jsx)("li",{className:"menu__list-item",children:(0,g.jsx)(l.c,{isNavLink:!0,to:e.permalink,className:"menu__link",activeClassName:"menu__link--active",children:e.title})},e.permalink)))})}function j(e){return(0,g.jsx)(h.Mx,{component:x,props:e})}function p(e){let{sidebar:t}=e;const s=(0,n.U)();return t?.items.length?"mobile"===s?(0,g.jsx)(j,{sidebar:t}):(0,g.jsx)(b,{sidebar:t}):null}function v(e){const{sidebar:t,toc:s,children:a,...n}=e,l=t&&t.items.length>0;return(0,g.jsx)(r.c,{...n,children:(0,g.jsx)("div",{className:"container margin-vert--lg",children:(0,g.jsxs)("div",{className:"row",children:[(0,g.jsx)(p,{sidebar:t}),(0,g.jsx)("main",{className:(0,i.c)("col",{"col--7":l,"col--9 col--offset-1":!l}),children:a}),s&&(0,g.jsx)("div",{className:"col col--2",children:s})]})})})}},87888:(e,t,s)=>{s.r(t),s.d(t,{default:()=>u});s(80924);var a=s(95880),i=s(26748),r=s(1244),n=s(33820),l=s(45140),c=s(10616),o=s(83076),d=s(99616),m=s(76776);function u(e){let{tags:t,sidebar:s}=e;const u=(0,i.K)();return(0,m.jsxs)(r.cr,{className:(0,a.c)(n.W.wrapper.blogPages,n.W.page.blogTagsListPage),children:[(0,m.jsx)(r.U7,{title:u}),(0,m.jsx)(o.c,{tag:"blog_tags_list"}),(0,m.jsxs)(l.c,{sidebar:s,children:[(0,m.jsx)(d.c,{as:"h1",children:u}),(0,m.jsx)(c.c,{tags:t})]})]})}},3484:(e,t,s)=>{s.d(t,{c:()=>l});s(80924);var a=s(95880),i=s(92080);const r={tag:"tag_CTyX",tagRegular:"tagRegular_cc0G",tagWithCount:"tagWithCount_eWvx"};var n=s(76776);function l(e){let{permalink:t,label:s,count:l,description:c}=e;return(0,n.jsxs)(i.c,{href:t,title:c,className:(0,a.c)(r.tag,l?r.tagWithCount:r.tagRegular),children:[s,l&&(0,n.jsx)("span",{children:l})]})}},10616:(e,t,s)=>{s.d(t,{c:()=>o});s(80924);var a=s(26748),i=s(3484),r=s(99616);const n={tag:"tag_roE6"};var l=s(76776);function c(e){let{letterEntry:t}=e;return(0,l.jsxs)("article",{children:[(0,l.jsx)(r.c,{as:"h2",id:t.letter,children:t.letter}),(0,l.jsx)("ul",{className:"padding--none",children:t.tags.map((e=>(0,l.jsx)("li",{className:n.tag,children:(0,l.jsx)(i.c,{...e})},e.permalink)))}),(0,l.jsx)("hr",{})]})}function o(e){let{tags:t}=e;const s=(0,a.M)(t);return(0,l.jsx)("section",{className:"margin-vert--lg",children:s.map((e=>(0,l.jsx)(c,{letterEntry:e},e.letter)))})}},26748:(e,t,s)=>{s.d(t,{K:()=>i,M:()=>r});var a=s(22016);const i=()=>(0,a.G)({id:"theme.tags.tagsPageTitle",message:"Tags",description:"The title of the tag list page"});function r(e){const t={};return Object.values(e).forEach((e=>{const s=function(e){return e[0].toUpperCase()}(e.label);t[s]??=[],t[s].push(e)})),Object.entries(t).sort(((e,t)=>{let[s]=e,[a]=t;return s.localeCompare(a)})).map((e=>{let[t,s]=e;return{letter:t,tags:s.sort(((e,t)=>e.label.localeCompare(t.label)))}}))}}}]);