/*! For license information please see 16950.9e4bb8f6.js.LICENSE.txt */
"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[16950],{16950:(e,t,n)=>{n.r(t);class s{constructor(e){this.document=e,this.toastContainerElement=this.document.createElement("kol-toast-container"),this.document.body.prepend(this.toastContainerElement)}static getInstance(e){let t=this.instances.get(e);return t||(t=new s(e),this.instances.set(e,t)),t}dispose(){const e=this.toastContainerElement;e?(this.toastContainerElement=void 0,e.remove()):console.warn("Toaster service is already disposed.")}async enqueue(e){this.toastContainerElement&&"function"==typeof this.toastContainerElement.enqueue&&await this.toastContainerElement.enqueue(e)}}var o,a;s.instances=new Map;const i=s.getInstance(document);i.enqueue({description:"Toasty",label:"Initial Toast",type:"warning"});let l=0;null===(o=document.getElementById("oneToast"))||void 0===o||o.addEventListener("kol-click",(()=>{i.enqueue({description:"Toasty "+ ++l,label:"Label",type:"warning"})})),null===(a=document.getElementById("manyToast"))||void 0===a||a.addEventListener("kol-click",(()=>{for(let e=0;e<5;e++)i.enqueue({description:"Toasty "+ ++l,label:"Label",type:"warning"})}))}}]);