"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[4492],{53352:(t,e,a)=>{a.r(e),a.d(e,{default:()=>h});a(80924);var s=a(95880),r=a(1244),l=a(33820),n=a(26748),c=a(20088),i=a(83076),o=a(62504),g=a(76776);function u(t){let{title:e}=t;return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(r.U7,{title:e}),(0,g.jsx)(i.c,{tag:"doc_tags_list"})]})}function d(t){let{tags:e,title:a}=t;return(0,g.jsx)(r.cr,{className:(0,s.c)(l.W.page.docsTagsListPage),children:(0,g.jsx)("div",{className:"container margin-vert--lg",children:(0,g.jsx)("div",{className:"row",children:(0,g.jsxs)("main",{className:"col col--8 col--offset-2",children:[(0,g.jsx)(o.c,{as:"h1",children:a}),(0,g.jsx)(c.c,{tags:e})]})})})})}function h(t){const e=(0,n.K)();return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(u,{...t,title:e}),(0,g.jsx)(d,{...t,title:e})]})}},14632:(t,e,a)=>{a.d(e,{c:()=>c});a(80924);var s=a(95880),r=a(92080);const l={tag:"tag_CTyX",tagRegular:"tagRegular_cc0G",tagWithCount:"tagWithCount_eWvx"};var n=a(76776);function c(t){let{permalink:e,label:a,count:c,description:i}=t;return(0,n.jsxs)(r.c,{href:e,title:i,className:(0,s.c)(l.tag,c?l.tagWithCount:l.tagRegular),children:[a,c&&(0,n.jsx)("span",{children:c})]})}},20088:(t,e,a)=>{a.d(e,{c:()=>o});a(80924);var s=a(26748),r=a(14632),l=a(62504);const n={tag:"tag_roE6"};var c=a(76776);function i(t){let{letterEntry:e}=t;return(0,c.jsxs)("article",{children:[(0,c.jsx)(l.c,{as:"h2",id:e.letter,children:e.letter}),(0,c.jsx)("ul",{className:"padding--none",children:e.tags.map((t=>(0,c.jsx)("li",{className:n.tag,children:(0,c.jsx)(r.c,{...t})},t.permalink)))}),(0,c.jsx)("hr",{})]})}function o(t){let{tags:e}=t;const a=(0,s.M)(e);return(0,c.jsx)("section",{className:"margin-vert--lg",children:a.map((t=>(0,c.jsx)(i,{letterEntry:t},t.letter)))})}},26748:(t,e,a)=>{a.d(e,{K:()=>r,M:()=>l});var s=a(22016);const r=()=>(0,s.G)({id:"theme.tags.tagsPageTitle",message:"Tags",description:"The title of the tag list page"});function l(t){const e={};return Object.values(t).forEach((t=>{const a=function(t){return t[0].toUpperCase()}(t.label);e[a]??=[],e[a].push(t)})),Object.entries(e).sort(((t,e)=>{let[a]=t,[s]=e;return a.localeCompare(s)})).map((t=>{let[e,a]=t;return{letter:e,tags:a.sort(((t,e)=>t.label.localeCompare(e.label)))}}))}}}]);