"use strict";
exports.id = 6950;
exports.ids = [6950];
exports.modules = {

/***/ 16950:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

;// CONCATENATED MODULE: ./node_modules/.pnpm/@public-ui+components@2.0.0-rc.6/node_modules/@public-ui/components/dist/esm/toaster-2063df5a.js
/*!
 * KoliBri - The accessible HTML-Standard
 */
class ToasterService{constructor(e){this.document=e,this.toastContainerElement=this.document.createElement("kol-toast-container"),this.document.body.prepend(this.toastContainerElement)}static getInstance(e){let t=this.instances.get(e);return t||(t=new ToasterService(e),this.instances.set(e,t)),t}dispose(){const e=this.toastContainerElement;e?(this.toastContainerElement=void 0,e.remove()):console.warn("Toaster service is already disposed.")}async enqueue(e){this.toastContainerElement&&"function"==typeof this.toastContainerElement.enqueue&&await this.toastContainerElement.enqueue(e)}}ToasterService.instances=new Map;
;// CONCATENATED MODULE: ./node_modules/.pnpm/@public-ui+components@2.0.0-rc.6/node_modules/@public-ui/components/dist/esm/toaster-6901baa3.js
/*!
 * KoliBri - The accessible HTML-Standard
 */
var _a,_b;const toaster=ToasterService.getInstance(document);toaster.enqueue({description:"Toasty",label:"Initial Toast",type:"warning"});let myToastId=0;null===(_a=document.getElementById("oneToast"))||void 0===_a||_a.addEventListener("kol-click",(()=>{toaster.enqueue({description:"Toasty "+ ++myToastId,label:"Label",type:"warning"})})),null===(_b=document.getElementById("manyToast"))||void 0===_b||_b.addEventListener("kol-click",(()=>{for(let e=0;e<5;e++)toaster.enqueue({description:"Toasty "+ ++myToastId,label:"Label",type:"warning"})}));

/***/ })

};
;