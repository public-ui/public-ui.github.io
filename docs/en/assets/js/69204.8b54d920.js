/*! For license information please see 69204.8b54d920.js.LICENSE.txt */
"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[69204],{69204:(t,e,n)=>{n.r(e);class o{constructor(t,e){this.document=t,this.options=e,this.toastContainerElement=this.document.createElement("kol-toast-container"),this.document.body.prepend(this.toastContainerElement)}static getInstance(t,e){let n=this.instances.get(t);return n||(n=new o(t,e),this.instances.set(t,n)),n}dispose(){const t=this.toastContainerElement;t?(this.toastContainerElement=void 0,t.remove()):console.warn("Toaster service is already disposed.")}enqueue(t){var e,n;if(this.toastContainerElement&&"function"==typeof this.toastContainerElement.enqueue)return!t.alertVariant&&(null===(e=this.options)||void 0===e?void 0:e.defaultAlertVariant)&&(t.alertVariant=null===(n=this.options)||void 0===n?void 0:n.defaultAlertVariant),this.toastContainerElement.enqueue(t)}closeAll(){this.toastContainerElement&&"function"==typeof this.toastContainerElement.closeAll&&this.toastContainerElement.closeAll()}}var s,i;o.instances=new Map;const a=o.getInstance(document);a.enqueue({description:"Toasty",label:"Initial Toast",type:"warning"});let l=0;null===(s=document.getElementById("oneToast"))||void 0===s||s.addEventListener("kol-click",(()=>{a.enqueue({description:"Toasty "+ ++l,label:"Label",type:"warning"})})),null===(i=document.getElementById("manyToast"))||void 0===i||i.addEventListener("kol-click",(()=>{for(let t=0;t<5;t++)a.enqueue({description:"Toasty "+ ++l,label:"Label",type:"warning"})}))}}]);