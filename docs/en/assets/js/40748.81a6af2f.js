/*! For license information please see 40748.81a6af2f.js.LICENSE.txt */ (self.webpackChunkroot=self.webpackChunkroot||[]).push([[40748],{40748:()=>{const e=[{order:0,shipped:!1,date:new Date("1981-05-26T21:33:43.612Z")},{order:1,shipped:!0,date:new Date("1971-04-25T19:44:17.014Z")},{order:2,shipped:!1,date:new Date("1986-07-10T11:39:29.539Z")}],t={horizontal:[[{label:"#",key:"order",render:(e,t)=>`Index: ${t.label}`},{label:"Status",key:"shipped",render:(e,t)=>{t.label?e.textContent="Order has been dispatched \ud83d\ude9a":e.textContent="Order pending \ud83d\udce6"}},{label:"Date (string)",key:"date",render:(e,t)=>{e.innerHTML=`<strong>${Intl.DateTimeFormat("de-DE").format(t.label)}</strong>`},sort:e=>e.sort(((e,t)=>e.date.getTime()-t.date.getTime()))}]]},a=document.getElementById("table-container"),n=document.createElement("kol-table");n._label="Table example with render functions",n._data=e,n._headers=t,null==a||a.appendChild(n)}}]);