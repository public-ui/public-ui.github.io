"use strict";
exports.id = 542;
exports.ids = [542];
exports.modules = {

/***/ 60542:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

;// CONCATENATED MODULE: ./node_modules/.pnpm/@public-ui+components@1.7.0-rc.17/node_modules/@public-ui/components/dist/esm/toaster-2dda6584.js
/*!
 * KoliBri - The accessible HTML-Standard
 */
class ToasterService{constructor(e){this.document=e,this.toastContainerElement=this.document.createElement("kol-toast-container"),this.document.body.prepend(this.toastContainerElement)}static getInstance(e){let t=this.instances.get(e);return t||(t=new ToasterService(e),this.instances.set(e,t)),t}dispose(){const e=this.toastContainerElement;e?(this.toastContainerElement=void 0,e.remove()):console.warn("Toaster service is already disposed.")}async enqueue(e){var t;await(null===(t=this.toastContainerElement)||void 0===t?void 0:t.enqueue(e))}}ToasterService.instances=new Map;
;// CONCATENATED MODULE: ./node_modules/.pnpm/@public-ui+components@1.7.0-rc.17/node_modules/@public-ui/components/dist/esm/toaster-1ee75e55.js
/*!
 * KoliBri - The accessible HTML-Standard
 */
var _a,_b;const toaster=ToasterService.getInstance(document);toaster.enqueue({description:"Toasty",label:"Initial Toast",type:"warning"});let myToastId=0;null===(_a=document.getElementById("oneToast"))||void 0===_a||_a.addEventListener("kol-click",(()=>{toaster.enqueue({description:"Toasty "+ ++myToastId,label:"Label",type:"warning"})})),null===(_b=document.getElementById("manyToast"))||void 0===_b||_b.addEventListener("kol-click",(()=>{for(let e=0;e<5;e++)toaster.enqueue({description:"Toasty "+ ++myToastId,label:"Label",type:"warning"})}));

/***/ })

};
;