"use strict";
exports.id = 1125;
exports.ids = [1125];
exports.modules = {

/***/ 31125:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

;// CONCATENATED MODULE: ./node_modules/.pnpm/@public-ui+components@2.0.4/node_modules/@public-ui/components/dist/esm/toaster-bd34d3c2.js
/*!
 * KoliBri - The accessible HTML-Standard
 */
class ToasterService{constructor(t,e){this.document=t,this.options=e,this.toastContainerElement=this.document.createElement("kol-toast-container"),this.document.body.prepend(this.toastContainerElement)}static getInstance(t,e){let n=this.instances.get(t);return n||(n=new ToasterService(t,e),this.instances.set(t,n)),n}dispose(){const t=this.toastContainerElement;t?(this.toastContainerElement=void 0,t.remove()):console.warn("Toaster service is already disposed.")}enqueue(t){var e,n;if(this.toastContainerElement&&"function"==typeof this.toastContainerElement.enqueue)return!t.alertVariant&&(null===(e=this.options)||void 0===e?void 0:e.defaultAlertVariant)&&(t.alertVariant=null===(n=this.options)||void 0===n?void 0:n.defaultAlertVariant),this.toastContainerElement.enqueue(t)}closeAll(){this.toastContainerElement&&"function"==typeof this.toastContainerElement.closeAll&&this.toastContainerElement.closeAll()}}ToasterService.instances=new Map;
;// CONCATENATED MODULE: ./node_modules/.pnpm/@public-ui+components@2.0.4/node_modules/@public-ui/components/dist/esm/toaster-f89ddf4f.js
/*!
 * KoliBri - The accessible HTML-Standard
 */
var _a,_b;const toaster=ToasterService.getInstance(document);toaster.enqueue({description:"Toasty",label:"Initial Toast",type:"warning"});let myToastId=0;null===(_a=document.getElementById("oneToast"))||void 0===_a||_a.addEventListener("kol-click",(()=>{toaster.enqueue({description:"Toasty "+ ++myToastId,label:"Label",type:"warning"})})),null===(_b=document.getElementById("manyToast"))||void 0===_b||_b.addEventListener("kol-click",(()=>{for(let e=0;e<5;e++)toaster.enqueue({description:"Toasty "+ ++myToastId,label:"Label",type:"warning"})}));

/***/ })

};
;