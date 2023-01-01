import{f as d,h as _,j as p,ag as h,c as m,ah as u,l as n,ai as t,aj as a,y as s,F as f,ak as v,al as g,am as x,n as i,an as y,ao as b,m as k,ap as N,aq as w,_ as P}from"./nav-907e92d6.js";import{N as V}from"./NoteViewer-16f38175.js";import{u as j}from"./index-770ac0ee.js";const S={class:"m-4"},L={class:"mb-10"},T={class:"text-4xl font-bold mt-2"},z={class:"opacity-50"},B={class:"text-lg"},C={class:"font-bold flex gap-2"},H={class:"opacity-50"},D=t("div",{class:"flex-auto"},null,-1),F={key:0,class:"border-gray-400/50 mb-8"},M=d({__name:"PresenterPrint",setup(W){_(p),h(`
@page {
  size: A4;
  margin-top: 1.5cm;
  margin-bottom: 1cm;
}
* {
  -webkit-print-color-adjust: exact;
}
html,
html body,
html #app,
html #page-root {
  height: auto;
  overflow: auto !important;
}
`),j({title:`Notes - ${m.title}`});const r=u(()=>x.slice(0,-1).map(o=>{var l;return(l=o.meta)==null?void 0:l.slide}).filter(o=>o!==void 0&&o.notesHTML!==""));return(o,l)=>(i(),n("div",{id:"page-root",style:g(s(w))},[t("div",S,[t("div",L,[t("h1",T,a(s(m).title),1),t("div",z,a(new Date().toLocaleString()),1)]),(i(!0),n(f,null,v(s(r),(e,c)=>(i(),n("div",{key:c,class:"flex flex-col gap-4 break-inside-avoid-page"},[t("div",null,[t("h2",B,[t("div",C,[t("div",H,a(e==null?void 0:e.no)+"/"+a(s(y)),1),b(" "+a(e==null?void 0:e.title)+" ",1),D])]),k(V,{"note-html":e.notesHTML,class:"max-w-full"},null,8,["note-html"])]),c<s(r).length-1?(i(),n("hr",F)):N("v-if",!0)]))),128))])],4))}}),R=P(M,[["__file","/Users/moppitz/Workspace/kolibri/slidev/node_modules/.pnpm/@slidev+client@0.38.2_vite@4.0.3/node_modules/@slidev/client/internals/PresenterPrint.vue"]]);export{R as default};
