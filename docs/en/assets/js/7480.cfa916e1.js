"use strict";
exports.id = 7480;
exports.ids = [7480];
exports.modules = {

/***/ 87480:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _toaster_3755abc8_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(28324);
/*!
 * KoliBri - The accessible HTML-Standard
 */
var _a,_b;const toaster=_toaster_3755abc8_js__WEBPACK_IMPORTED_MODULE_0__.T.getInstance(document);toaster.enqueue({description:"Toasty",label:"Initial Toast",type:"warning"});let myToastId=0;null===(_a=document.getElementById("oneToast"))||void 0===_a||_a.addEventListener("kol-click",(()=>{toaster.enqueue({description:"Toasty "+ ++myToastId,label:"Label",type:"warning"})})),null===(_b=document.getElementById("manyToast"))||void 0===_b||_b.addEventListener("kol-click",(()=>{for(let e=0;e<5;e++)toaster.enqueue({description:"Toasty "+ ++myToastId,label:"Label",type:"warning"})}));

/***/ })

};
;