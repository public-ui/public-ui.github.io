"use strict";
exports.id = 6168;
exports.ids = [6168];
exports.modules = {

/***/ 67276:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   i: () => (/* binding */ initKoliBri),
/* harmony export */   n: () => (/* binding */ nonce),
/* harmony export */   r: () => (/* binding */ renderDevAdvice)
/* harmony export */ });
/* harmony import */ var _index_022cbbb8_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(65224);
/* harmony import */ var _reuse_108ee8f5_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(28968);
/* harmony import */ var _dev_utils_1ca991a2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20444);
/*!
 * KoliBri - The accessible HTML-Standard
 */
const initMeta=()=>{const e=(0,_dev_utils_1ca991a2_js__WEBPACK_IMPORTED_MODULE_0__.g)().querySelector('meta[name="kolibri"]');if(e&&e.hasAttribute("content")){const t=e.getAttribute("content");"string"==typeof t&&((0,_dev_utils_1ca991a2_js__WEBPACK_IMPORTED_MODULE_0__.s)(t.includes("dev-mode=true")),(0,_dev_utils_1ca991a2_js__WEBPACK_IMPORTED_MODULE_0__.b)(t.includes("experimental-mode=true")),(0,_dev_utils_1ca991a2_js__WEBPACK_IMPORTED_MODULE_0__.c)(t.includes("color-contrast-analysis=true")))}},getKoliBri=()=>{let e=(0,_dev_utils_1ca991a2_js__WEBPACK_IMPORTED_MODULE_0__.d)().KoliBri;return void 0===e&&(e={},Object.defineProperty((0,_dev_utils_1ca991a2_js__WEBPACK_IMPORTED_MODULE_0__.d)(),"KoliBri",{value:e,writable:!1})),e},initKoliBri=()=>{initMeta(),_dev_utils_1ca991a2_js__WEBPACK_IMPORTED_MODULE_0__.L.debug(`\n,--. ,--.         ,--. ,--. ,-----.           ,--.\n|  .'   /  ,---.  |  | \`--' |  |) /_  ,--.--. \`--'\n|  .   '  | .-. | |  | ,--. |  .-.  \\ |  .--' ,--.\n|  |\\   \\ | '-' | |  | |  | |  '--' / |  |    |  |\n\`--' \`--´  \`---´  \`--' \`--' \`------´  \`--'    \`--'\n🚹 The accessible HTML-Standard | 👉 https://public-ui.github.io | ${_index_022cbbb8_js__WEBPACK_IMPORTED_MODULE_1__.E.kolibriVersion}\n\t`,{forceLog:!0})},renderDevAdvice=()=>{!0!==getKoliBri().adviceShown&&(Object.defineProperty(getKoliBri(),"adviceShown",{get:function(){return!0}}),_dev_utils_1ca991a2_js__WEBPACK_IMPORTED_MODULE_0__.L.debug("\nYou are using the KoliBri component library. If you have any suggestions for improvement or find a problem, please contact us:\n\nTicket: https://github.com/public-ui/kolibri/issues/new/choose (for privacy reasons, please use email)\nEmail: kolibri@itzbund.de\n"))};let nonce=()=>Math.floor(16777215*Math.random()).toString(16);"test"===_reuse_108ee8f5_js__WEBPACK_IMPORTED_MODULE_2__.p&&(nonce=()=>"nonce");

/***/ }),

/***/ 59832:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   v: () => (/* binding */ validateHref)
/* harmony export */ });
/* harmony import */ var _prop_validators_db70e3c4_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(70728);
/*!
 * KoliBri - The accessible HTML-Standard
 */
const validateHref=(a,r,t={})=>{(0,_prop_validators_db70e3c4_js__WEBPACK_IMPORTED_MODULE_0__.i)(a,"_href",r,t)};

/***/ }),

/***/ 13788:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   kol_tree_item_wc: () => (/* binding */ KolTreeItemWc)
/* harmony export */ });
/* harmony import */ var _index_022cbbb8_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(65224);
/* harmony import */ var _component_names_5dd1e02a_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(63792);
/* harmony import */ var _dev_utils_500c6d3b_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(67276);
/* harmony import */ var _prop_validators_db70e3c4_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(70728);
/* harmony import */ var _label_20475610_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(75496);
/* harmony import */ var _open_5b527658_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7252);
/* harmony import */ var _href_74f1c87f_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(59832);
/*!
 * KoliBri - The accessible HTML-Standard
 */
const validateActive=(e,t,a)=>{(0,_prop_validators_db70e3c4_js__WEBPACK_IMPORTED_MODULE_0__.b)(e,"_active",t,a)},KolTreeItemWc=class{constructor(e){(0,_index_022cbbb8_js__WEBPACK_IMPORTED_MODULE_1__.r)(this,e),this.groupId=`tree-group-${(0,_dev_utils_500c6d3b_js__WEBPACK_IMPORTED_MODULE_2__.n)()}`,this.renderIcon=e=>(0,_index_022cbbb8_js__WEBPACK_IMPORTED_MODULE_1__.h)(_component_names_5dd1e02a_js__WEBPACK_IMPORTED_MODULE_3__.g,{class:"toggle-button-icon",_label:e.label,_icons:e.icon}),this.level=void 0,this.state={_active:!1,_hasChildren:!1,_href:"",_label:"",_open:!1},this._active=void 0,this._label=void 0,this._open=void 0,this._href=void 0}render(){const{_href:e,_active:t,_hasChildren:a,_open:i,_label:s}=this.state;return (0,_index_022cbbb8_js__WEBPACK_IMPORTED_MODULE_1__.h)(_index_022cbbb8_js__WEBPACK_IMPORTED_MODULE_1__.H,{key:"b809b4ed4fdbff0238384909f6394c5c9aa13480",onSlotchange:this.handleSlotchange.bind(this),class:"kol-tree-item-wc"},(0,_index_022cbbb8_js__WEBPACK_IMPORTED_MODULE_1__.h)("li",{key:"db1b9a71d369f9fc0bcdfba6e22d0c2f6af7a414",class:"tree-item",style:{"--level":`${this.level}`}},(0,_index_022cbbb8_js__WEBPACK_IMPORTED_MODULE_1__.h)(_component_names_5dd1e02a_js__WEBPACK_IMPORTED_MODULE_3__.n,{key:"c9a810511651e63203fb27d63259864445f59b29",class:{"tree-link":!0,"first-level":0===this.level,active:Boolean(t)},_href:e,_label:"",_role:"treeitem",_tabIndex:t?0:-1,_ariaExpanded:i,_ariaOwns:a?this.groupId:void 0,ref:e=>this.linkElement=e},(0,_index_022cbbb8_js__WEBPACK_IMPORTED_MODULE_1__.h)("span",{key:"fd5dcb0bf876292d5303420095cb437d9f757f37",slot:"expert"},a&&(0,_index_022cbbb8_js__WEBPACK_IMPORTED_MODULE_1__.h)("span",{key:"468187d12a690f7fc5ccc09570d7b2bebd6cee24",class:"toggle-button",onClick:e=>i?void this.handleCollapseClick(e):void this.handleExpandClick(e)},this.renderIcon({icon:"codicon codicon-"+(i?"chevron-down":"chevron-right"),label:i?"Vorschläge öffnen":"Vorschläge schließen"}))," ",s)),(0,_index_022cbbb8_js__WEBPACK_IMPORTED_MODULE_1__.h)("ul",{key:"2b414e97ffa358b9332573194d450cf8c548a6d6",hidden:!a||!i,role:"group",id:this.groupId},(0,_index_022cbbb8_js__WEBPACK_IMPORTED_MODULE_1__.h)("slot",{key:"8ea7a3d44e0acb4626b23070dd044b17688313c5"}))))}validateActive(e){validateActive(this,e||!1)}validateLabel(e){(0,_label_20475610_js__WEBPACK_IMPORTED_MODULE_4__.v)(this,e)}validateOpen(e){(0,_open_5b527658_js__WEBPACK_IMPORTED_MODULE_5__.v)(this,e)}validateHref(e){(0,_href_74f1c87f_js__WEBPACK_IMPORTED_MODULE_6__.v)(this,e)}componentWillLoad(){this.validateActive(this._active),this.validateLabel(this._label),this.validateOpen(this._open),this.validateHref(this._href),this.checkForChildren(),this.determineTreeItemDepth()}determineTreeItemDepth(){let e=0,t=this.host.parentNode.host.parentNode;for(;null!==t&&t.tagName.toLowerCase()!==_component_names_5dd1e02a_js__WEBPACK_IMPORTED_MODULE_3__.z&&t!==document.body;)t=t.parentElement,e+=1;this.level=e}handleSlotchange(){this.checkForChildren()}checkForChildren(){var e,t;this.state=Object.assign(Object.assign({},this.state),{_hasChildren:Boolean(null===(t=null===(e=this.host.querySelector("slot"))||void 0===e?void 0:e.assignedElements)||void 0===t?void 0:t.call(e).length)})}async focusLink(){await this.linkElement.kolFocus()}async handleExpandClick(e){e.preventDefault(),await this.linkElement.kolFocus(),await this.expand()}async expand(){this.state._hasChildren&&(this.state=Object.assign(Object.assign({},this.state),{_open:!0}))}async handleCollapseClick(e){e.preventDefault(),this.linkElement.focus(),await this.collapse()}async collapse(){this.state._hasChildren&&(this.state=Object.assign(Object.assign({},this.state),{_open:!1}))}async isOpen(){var e;return null!==(e=this.state._open)&&void 0!==e&&e}get host(){return (0,_index_022cbbb8_js__WEBPACK_IMPORTED_MODULE_1__.g)(this)}static get watchers(){return{_active:["validateActive"],_label:["validateLabel"],_open:["validateOpen"],_href:["validateHref"]}}};

/***/ }),

/***/ 75496:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   a: () => (/* binding */ validateLabelWithExpertSlot),
/* harmony export */   b: () => (/* binding */ hasEnoughReadableChars),
/* harmony export */   c: () => (/* binding */ containsOnlyNumbers),
/* harmony export */   h: () => (/* binding */ headingLevelOptions),
/* harmony export */   v: () => (/* binding */ validateLabel)
/* harmony export */ });
/* harmony import */ var _prop_validators_db70e3c4_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(70728);
/*!
 * KoliBri - The accessible HTML-Standard
 */
const headingLevelOptions=[0,1,2,3,4,5,6],READABLE_CHARS=/[a-zA-Z0-9äöüÄÖÜß]/g,ONLY_NUMBERS=/^\d+$/;function countReadableChars(a){var t;return"string"==typeof a&&(null===(t=a.match(READABLE_CHARS))||void 0===t?void 0:t.length)||0}function hasEnoughReadableChars(a,t=1){return countReadableChars(a)>=t}function containsOnlyNumbers(a){return ONLY_NUMBERS.test(a)}function getValidationOptions(a){var t;return Object.assign(Object.assign({},a),{hooks:{afterPatch:(t,e,n,o)=>{var i,s;"function"==typeof(null===(i=a.hooks)||void 0===i?void 0:i.afterPatch)&&(null===(s=a.hooks)||void 0===s||s.afterPatch(t,e,n,o)),"string"==typeof t&&!1===hasEnoughReadableChars(t,3)&&!1===containsOnlyNumbers(t)&&(0,_prop_validators_db70e3c4_js__WEBPACK_IMPORTED_MODULE_0__.a)(`The heading or label ("${t}") is not accessible. A label should consist of at least three readable characters.`),"string"==typeof t&&t.length>80&&(0,_prop_validators_db70e3c4_js__WEBPACK_IMPORTED_MODULE_0__.u)("A heading or label should not be longer than 80 characters.")},beforePatch:null===(t=a.hooks)||void 0===t?void 0:t.beforePatch}})}const LABEL_VALUES=new Set(["string"]),validateLabel=(a,t,e={})=>{(0,_prop_validators_db70e3c4_js__WEBPACK_IMPORTED_MODULE_0__.w)(a,"_label",(a=>"string"==typeof a),LABEL_VALUES,t,getValidationOptions(e))},validateLabelWithExpertSlot=validateLabel;

/***/ }),

/***/ 7252:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   v: () => (/* binding */ validateOpen)
/* harmony export */ });
/* harmony import */ var _prop_validators_db70e3c4_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(70728);
/*!
 * KoliBri - The accessible HTML-Standard
 */
const validateOpen=(a,o,e)=>{(0,_prop_validators_db70e3c4_js__WEBPACK_IMPORTED_MODULE_0__.b)(a,"_open",o,e)};

/***/ }),

/***/ 70728:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ koliBriA11yColorContrast),
/* harmony export */   B: () => (/* binding */ koliBriQuerySelectorAll),
/* harmony export */   C: () => (/* binding */ koliBriQuerySelectorColors),
/* harmony export */   D: () => (/* binding */ stringifyJson),
/* harmony export */   K: () => (/* binding */ KoliBriDevHelper),
/* harmony export */   a: () => (/* binding */ a11yHint),
/* harmony export */   b: () => (/* binding */ watchBoolean),
/* harmony export */   c: () => (/* binding */ a11yHintDisabled),
/* harmony export */   d: () => (/* binding */ s),
/* harmony export */   e: () => (/* binding */ a11yHintLabelingLandmarks),
/* harmony export */   f: () => (/* binding */ featureHint),
/* harmony export */   g: () => (/* binding */ watchJsonArrayString),
/* harmony export */   h: () => (/* binding */ uiUxHintMillerscheZahl),
/* harmony export */   i: () => (/* binding */ watchString),
/* harmony export */   j: () => (/* binding */ devHint),
/* harmony export */   k: () => (/* binding */ watchNumber),
/* harmony export */   l: () => (/* binding */ devWarning),
/* harmony export */   m: () => (/* binding */ mapString2Unknown),
/* harmony export */   n: () => (/* binding */ deprecatedHint),
/* harmony export */   o: () => (/* binding */ objectObjectHandler),
/* harmony export */   p: () => (/* binding */ parseJson),
/* harmony export */   q: () => (/* binding */ setEventTarget),
/* harmony export */   r: () => (/* binding */ rgba$1),
/* harmony export */   s: () => (/* binding */ setState),
/* harmony export */   t: () => (/* binding */ emptyStringByArrayHandler),
/* harmony export */   u: () => (/* binding */ uiUxHint),
/* harmony export */   v: () => (/* binding */ koliBriQuerySelector),
/* harmony export */   w: () => (/* binding */ watchValidator),
/* harmony export */   x: () => (/* binding */ mapBoolean2String),
/* harmony export */   y: () => (/* binding */ mapStringOrBoolean2String),
/* harmony export */   z: () => (/* binding */ KoliBriUtils)
/* harmony export */ });
/* harmony import */ var _index_db4aa6e4_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(44312);
/* harmony import */ var _dev_utils_1ca991a2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20444);
/*!
 * KoliBri - The accessible HTML-Standard
 */
const a11yCache=new Set,a11yHint=(e,t)=>{(!1===a11yCache.has(e)||(null==t?void 0:t.force))&&(a11yCache.add(e),_dev_utils_1ca991a2_js__WEBPACK_IMPORTED_MODULE_0__.L.debug([e].concat((null==t?void 0:t.details)||[]),{classifier:"✋ a11y",forceLog:!!(null==t?void 0:t.force),overwriteStyle:"; background-color: #09f"}))},deprecatedCache=new Set,deprecatedHint=(e,t)=>{(!1===deprecatedCache.has(e)||(null==t?void 0:t.force))&&(deprecatedCache.add(e),_dev_utils_1ca991a2_js__WEBPACK_IMPORTED_MODULE_0__.L.warn([e].concat((null==t?void 0:t.details)||[]),{classifier:"🔥 deprecated",forceLog:!!(null==t?void 0:t.force),overwriteStyle:"; background-color: #f00"}))},devCache=new Set,devHint=(e,t)=>{(!1===devCache.has(e)||(null==t?void 0:t.force))&&(devCache.add(e),_dev_utils_1ca991a2_js__WEBPACK_IMPORTED_MODULE_0__.L.debug([e].concat((null==t?void 0:t.details)||[]),{classifier:"💻 dev",forceLog:!!(null==t?void 0:t.force),overwriteStyle:"; background-color: #f09"}))},devWarning=(e,t)=>{(!1===devCache.has(e)||(null==t?void 0:t.force))&&(devCache.add(e),_dev_utils_1ca991a2_js__WEBPACK_IMPORTED_MODULE_0__.L.warn([e].concat((null==t?void 0:t.details)||[]),{classifier:"⚠️ dev",forceLog:!!(null==t?void 0:t.force),overwriteStyle:"; background-color: #f09"}))},featureCache=new Set,featureHint=(e,t=!1,r)=>{(!1===featureCache.has(e)||(null==r?void 0:r.force))&&(featureCache.add(e),e+=!0===t?" ✅":"",_dev_utils_1ca991a2_js__WEBPACK_IMPORTED_MODULE_0__.L.debug([e].concat((null==r?void 0:r.details)||[]),{classifier:"🌟 feature",forceLog:!!(null==r?void 0:r.force),overwriteStyle:"; background-color: #309"}))};devHint("We appreciate any feedback, comments, screenshots, or demo links of an application based on KoliBri (kolibri@itzbund.de). Thank you!");const uiUxCache=new Set,uiUxHint=(e,t)=>{(!1===uiUxCache.has(e)||(null==t?void 0:t.force))&&(uiUxCache.add(e),_dev_utils_1ca991a2_js__WEBPACK_IMPORTED_MODULE_0__.L.debug([e].concat((null==t?void 0:t.details)||[]),{classifier:"📑 ui/ux",forceLog:!!(null==t?void 0:t.force),overwriteStyle:"; background-color: #060;"}))},a11yHintDisabled=()=>{a11yHint('"Disabled" limits accessibility and visibility. From an accessibility perspective, we recommend using the readonly attribute instead of disabled.\n- https://uxdesign.cc/is-it-ok-to-grey-out-disabled-buttons-8afa74a0fae')},a11yHintLabelingLandmarks=e=>{"string"==typeof e&&""!==e||a11yHint("Some structural elements, such as the nav tag, can be used multiple times on a webpage. To distinguish between similarly named structural elements, it is necessary to set an ARIA label.\n- https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/Navigation_Role#accessibility_concerns")},uiUxHintMillerscheZahl=(e,t=8)=>{t>7&&uiUxHint(`[${e}] Within navigation structures, it is recommended to use no more than 7 menu items.\n\nLink:\n- https://en.wikipedia.org/wiki/The_Magical_Number_Seven,_Plus_or_Minus_Two`)};var n=.2126,r=.7152,t=.0722,e=1/12.92;function u(e){return Math.pow((e+.055)/1.055,2.4)}function a(o){var a=o[0]/255,i=o[1]/255,l=o[2]/255,s=a<=.03928?a*e:u(a),c=i<=.03928?i*e:u(i),d=l<=.03928?l*e:u(l);return s*n+c*r+d*t}function i(e){var t=255;8===(e=e.replace(/^#/,"")).length&&(t=parseInt(e.slice(6,8),16),e=e.substring(0,6)),4===e.length&&(t=parseInt(e.slice(3,4).repeat(2),16),e=e.substring(0,3)),3===e.length&&(e=e[0]+e[0]+e[1]+e[1]+e[2]+e[2]);var r=parseInt(e,16);return[r>>16,r>>8&255,255&r,t]}function c(e,t){return(Math.max(e,t)+.05)/(Math.min(e,t)+.05)}function o(e,t){return c(a(e),a(t))}function s(e,t){return o(i(e),i(t))}function f(e){return e>=7?"AAA":e>=4.5?"AA":e>=3?"AA Large":"Fail"}var rgbaConvert={exports:{}};function arr(e){var t=parse(e);return 3==t.length?t.concat(255):(t[3]=Math.round(t[3]),t)}function obj(e){var t=parse(e);return{r:t[0],g:t[1],b:t[2],a:3==t.length?255:Math.round(t[3])}}function css(e){var t=parse(e);return 3==t.length&&t.push(255),255==t[3]?"rgb("+t[0]+", "+t[1]+", "+t[2]+")":0==t[3]?"rgba("+t[0]+", "+t[1]+", "+t[2]+", 0)":"rgba("+t[0]+", "+t[1]+", "+t[2]+", "+String(t[3]/255).substr(1)+")"}function hex(e){3==(t=parse(e)).length&&t.push(255);var t,r=255==t[3],o=num2hex(t[0]),n=num2hex(t[1]),a=num2hex(t[2]),i=isshort(o,n,a,t=num2hex(Math.round(t[3])));return r?i?"#"+o.charAt(0)+n.charAt(0)+a.charAt(0):"#"+o+n+a:i?"#"+o.charAt(0)+n.charAt(0)+a.charAt(0)+t.charAt(0):"#"+o+n+a+t}function num(e){var t=parse(e);return 3==t.length?t.push(255):t[3]=Math.round(t[3]),(t[3]<<24>>>0|t[0]<<16|t[1]<<8|t[2])>>>0}function parse(e){return"string"==typeof e?name(e=e.toLowerCase())||hex3(e)||hex6(e)||rgb(e)||rgba(e)||[0,0,0,255]:object(e)||array(e)||number(e)||[0,0,0,255]}function num2hex(e){var t=e.toString(16);return 1==t.length?"0"+t:t}function isshort(e,t,r,o){var n=["ff","00","11","22","33","44","55","66","77","88","99","aa","bb","cc","dd","ee"];return-1!=n.indexOf(e)&&-1!=n.indexOf(t)&&-1!=n.indexOf(r)&&-1!=n.indexOf(o)}function name(e){return"red"==e?[255,0,0]:"green"==e?[0,255,0]:"blue"==e?[0,0,255]:"black"==e?[0,0,0]:"white"==e?[255,255,255]:"cyan"==e?[0,255,255]:"gray"==e||"grey"==e?[128,128,128]:"magenta"==e||"pink"==e?[255,0,255]:"yellow"==e?[255,255,0]:void 0}function hex2num(e){return 1==e.length?parseInt(e+e,16):parseInt(e,16)}function hex3(e){var t=e.replace(/^#/,""),r=t.length;if(3==r||4==r){var o=hex2num(t[0]),n=hex2num(t[1]),a=hex2num(t[2]),i=3==r?255:hex2num(t[3]);if(isNaN(o)||isNaN(n)||isNaN(a)||isNaN(i))return;return[o,n,a,i]}}function hex6(e){var t=e.replace(/^#/,""),r=t.length;if(6==r||8==r){var o=hex2num(t.slice(0,2)),n=hex2num(t.slice(2,4)),a=hex2num(t.slice(4,6)),i=6==r?255:hex2num(t.slice(6,8));if(isNaN(o)||isNaN(n)||isNaN(a)||isNaN(i))return;return[o,n,a,i]}}function getnum(e,t){return"number"!=typeof e||!0===t&&Math.floor(e)!==e?-1:e>=0&&e<=255?e:-1}function object(e){if("[object Object]"===Object.prototype.toString.call(e)&&Object.getPrototypeOf(e)===Object.getPrototypeOf({})){var t=getnum(null!=e.r?e.r:null!=e.red?e.red:0,!0),r=getnum(null!=e.g?e.g:null!=e.green?e.green:0,!0),o=getnum(null!=e.b?e.b:null!=e.blue?e.blue:0,!0),n=getnum(null!=e.a?e.a:null!=e.alpha?e.alpha:255,!0);if(-1!=t&&-1!=r&&-1!=o&&-1!=n)return[t,r,o,n]}}function array(e){if(Array.isArray(e)&&(3==e.length||4==e.length)){var t=getnum(e[0],!0),r=getnum(e[1],!0),o=getnum(e[2],!0),n=getnum(null!=e[3]?e[3]:255,!0);if(-1!=t&&-1!=r&&-1!=o&&-1!=n)return[t,r,o,n]}}function number(e){if("number"==typeof e&&Math.floor(e)==e&&e<=4294967295&&e>=0)return[e>>16&255,e>>8&255,255&e,e>>24&255]}function rgb(e){if("rgb("==e.substr(0,4)){var t=(e=e.match(/^rgb\(([^)]+)\)/)[1]).split(/ *, */).map(Number),r=getnum(t[0],!0),o=getnum(t[1],!0),n=getnum(t[2],!0);if(-1!=r&&-1!=o&&-1!=n)return[r,o,n,255]}}function rgba(e){if("rgba("==e.substr(0,5)){var t=(e=e.match(/^rgba\(([^)]+)\)/)[1]).split(/ *, */).map(Number),r=getnum(t[0],!0),o=getnum(t[1],!0),n=getnum(t[2],!0),a=getnum(255*t[3]);if(-1!=r&&-1!=o&&-1!=n&&-1!=a)return[r,o,n,a]}}rgbaConvert.exports=arr,rgbaConvert.exports.arr=arr,rgbaConvert.exports.obj=obj,rgbaConvert.exports.css=css,rgbaConvert.exports.hex=hex,rgbaConvert.exports.num=num;const rgba$1=rgbaConvert.exports,pushNodes=(e,t)=>{t.forEach((t=>{!1===e.has(t)&&e.add(t)}))},querySelectorAll=(e,t=document)=>{if(t instanceof Document||t instanceof HTMLElement||t instanceof ShadowRoot){const r=new Set;pushNodes(r,t.querySelectorAll(e));const o=t.querySelectorAll('[class*="hydrated"]');for(let t=0;t<o.length;t++){const n=o[t].shadowRoot;pushNodes(r,querySelectorAll(e,"object"==typeof n&&null!==n?n:o[t]))}return Array.from(r)}throw new Error("The parameter document for the method querySelectorAll is not type of Document, HTMLElement or ShadowRoot.")},querySelector=(e,t=document)=>{if(t instanceof Document||t instanceof HTMLElement||t instanceof ShadowRoot){let r=t.querySelector(e);if(null===r){const o=t.querySelectorAll('[class*="hydrated"]');for(let t=0;t<o.length;t++){const n=o[t].shadowRoot;if(r=querySelector(e,"object"==typeof n&&null!==n?n:o[t]),null!==r)break}}return r}throw new Error("The parameter document for the method querySelector is not type of Document, HTMLElement or ShadowRoot.")},OBJECT_OBJECT=/\[object Object\]/,objectObjectHandler=(e,t)=>{"string"==typeof e&&OBJECT_OBJECT.test(e)||t()},emptyStringByArrayHandler=(e,t)=>{"string"==typeof e&&""===e||t()},setEventTarget=(e,t)=>{(0,_dev_utils_1ca991a2_js__WEBPACK_IMPORTED_MODULE_0__.a)()&&(_dev_utils_1ca991a2_js__WEBPACK_IMPORTED_MODULE_0__.L.debug([e,t]),_dev_utils_1ca991a2_js__WEBPACK_IMPORTED_MODULE_0__.L.debug("↑ We propagate the (submit) event to this target.")),Object.defineProperty(e,"target",{value:t,writable:!1})},patchState=e=>{var t,r,o;null===(t=e.nextHooks)||void 0===t||t.forEach(((t,r)=>{var o;const n=t.get("beforePatch");"function"==typeof n&&n(null===(o=e.nextState)||void 0===o?void 0:o.get(r),e.nextState,e,r)})),(null===(r=e.nextState)||void 0===r?void 0:r.size)>0&&(e.state=Object.assign(Object.assign({},e.state),Object.fromEntries(e.nextState)),delete e.nextState,null===(o=e.nextHooks)||void 0===o||o.forEach(((t,r)=>{const o=t.get("afterPatch");"function"==typeof o&&o(e.state[r],e.state,e,r)}))),delete e.nextHooks},setState=(e,t,r,o={})=>{var n,a;void 0===e.nextHooks&&(e.nextHooks=new Map),void 0===e.nextState&&(e.nextState=new Map);e.nextHooks.get(t)instanceof Map==!1&&e.nextHooks.set(t,new Map),"function"==typeof o.afterPatch&&(null===(n=e.nextHooks.get(t))||void 0===n||n.set("afterPatch",o.afterPatch)),"function"==typeof o.beforePatch&&(null===(a=e.nextHooks.get(t))||void 0===a||a.set("beforePatch",o.beforePatch)),e.nextState.set(t,r),patchState(e)},logWarn=(e,t,r,o)=>{devHint(`[${e.constructor.name}] The property value: (${r}) for '${t}' is not valid. Allowed values are: ${Array.from(o).join(", ")}`)};function watchValidator(e,t,r,o,n,a={}){r(n)?setState(e,t,n,a.hooks):void 0===n&&!0!==a.required&&r(a.defaultValue)?setState(e,t,a.defaultValue,a.hooks):(a.required||o.add(null),logWarn(e,t,n,o))}const watchBoolean=(e,t,r,o)=>{watchValidator(e,t,(e=>"boolean"==typeof e),new Set(["Boolean {true, false}"]),r,o)},watchString=(e,t,r,o={})=>{const n="number"==typeof o.minLength?null==o?void 0:o.minLength:0;watchValidator(e,t,(e=>"string"==typeof e&&e.length>=n&&(void 0===(null==o?void 0:o.maxLength)||e.length<=o.maxLength)),new Set(["String"]),r,o)},watchNumber=(e,t,r,o)=>{watchValidator(e,t,(e=>"number"==typeof e&&(void 0===(null==o?void 0:o.min)||"number"==typeof(null==o?void 0:o.min)&&e>=o.min)&&(void 0===(null==o?void 0:o.max)||"number"==typeof(null==o?void 0:o.max)&&e<=o.max)),new Set(["Number"]),r,o)},watchJsonArrayString=(e,t,r,o,n=(e=>e==e),a={})=>{emptyStringByArrayHandler(o,(()=>{objectObjectHandler(o,(()=>{void 0===o&&(o=[]);try{try{o=parseJson(o)}catch(e){}if(Array.isArray(o)){const i=o.find((e=>!r(e)));void 0===i&&n(o)?setState(e,t,o,a.hooks):objectObjectHandler(i,(()=>{throw _dev_utils_1ca991a2_js__WEBPACK_IMPORTED_MODULE_0__.L.debug(i),new Error("↑ The schema for the property (_options) is not valid. The value will not be changed.")}))}else objectObjectHandler(o,(()=>{throw _dev_utils_1ca991a2_js__WEBPACK_IMPORTED_MODULE_0__.L.debug(o),new Error("↑ The schema for the property (_options) is not valid. The value will not be changed.")}))}catch(e){_dev_utils_1ca991a2_js__WEBPACK_IMPORTED_MODULE_0__.L.debug(e)}}))}))},BOOLEAN=/^(true|false)$/,INTEGER=/^-?(0|[1-9]\d*)$/,FLOAT=/^-?(0.|[1-9]\d*.)\d*[1-9]$/,mapString2Unknown=e=>{const t=typeof e,r=`${e}`;if("string"==typeof e)if(BOOLEAN.test(e))e="true"===e;else if(INTEGER.test(e))e=parseInt(e);else if(FLOAT.test(e))e=parseFloat(e);else if(JSON_CHARS.test(e))try{e=parseJson(e)}catch(e){}return t!==typeof e&&devHint(`You have used a stringified property value (${r} to ${JSON.stringify(e)}) which type switched from ${t} to ${typeof e}!`),e},stringifyJson=e=>{try{return JSON.stringify(e).replace(/"/g,"'")}catch(t){throw _dev_utils_1ca991a2_js__WEBPACK_IMPORTED_MODULE_0__.L.warn(["stringifyJson",e]),_dev_utils_1ca991a2_js__WEBPACK_IMPORTED_MODULE_0__.L.error("↑ The JSON could not be converted to a string. A stringifiable JSON is expected."),new Error}},JSON_CHARS=/^[{[]/,parseJson=e=>{if("string"==typeof e)try{return JSON.parse(e)}catch(t){if(JSON_CHARS.test(e))try{return JSON.parse(e.replace(/'/g,'"'))}catch(t){_dev_utils_1ca991a2_js__WEBPACK_IMPORTED_MODULE_0__.L.warn(["parseJson",e]),_dev_utils_1ca991a2_js__WEBPACK_IMPORTED_MODULE_0__.L.error("↑ The JSON string could not be parsed. Make sure that single quotes in the text are escaped (&#8216;).")}}throw new Error},mapBoolean2String=e=>"boolean"==typeof e?!0===e?"true":"false":void 0,mapStringOrBoolean2String=e=>"string"==typeof e?e:mapBoolean2String(e),koliBriQuerySelector=(e,t)=>querySelector(e,t||(0,_dev_utils_1ca991a2_js__WEBPACK_IMPORTED_MODULE_0__.g)()),koliBriQuerySelectorAll=(e,t)=>querySelectorAll(e,t||(0,_dev_utils_1ca991a2_js__WEBPACK_IMPORTED_MODULE_0__.g)());let DEFAULT_COLOR_CONTRAST=null;const getDefaultColorContrast=()=>(DEFAULT_COLOR_CONTRAST=DEFAULT_COLOR_CONTRAST||{backgroundColor:"#00000000",color:"#00000000",domNode:(0,_dev_utils_1ca991a2_js__WEBPACK_IMPORTED_MODULE_0__.g)().body,level:"Fail",score:1},DEFAULT_COLOR_CONTRAST),TRANSPARENT_REGEXP=/(\d+, ){3}0\)/,koliBriA11yColorContrast=(e,t=getDefaultColorContrast())=>{const r=getComputedStyle(e),o=TRANSPARENT_REGEXP.test(r.backgroundColor)?t.backgroundColor:rgba$1.hex(r.backgroundColor),n=TRANSPARENT_REGEXP.test(r.color)?t.color:rgba$1.hex(r.color),a=s(o,n),i={backgroundColor:o,color:n,domNode:e,level:f(a),score:a};return a<4.5&&_dev_utils_1ca991a2_js__WEBPACK_IMPORTED_MODULE_0__.L.error(["Color-Contrast-Error",{backgroundColor:i.backgroundColor,color:i.color,level:i.level,score:i.score},i.domNode]),i},koliBriQuerySelectorColors=(e,t=getDefaultColorContrast())=>{t.domNode instanceof HTMLElement&&(t=koliBriA11yColorContrast(t.domNode,t));const r=t.domNode.querySelector(e);if(null===r){const r=t.domNode.querySelectorAll('[class="hydrated"]');for(let o=0;o<r.length&&(t.domNode=r[o],null===(t=koliBriQuerySelectorColors(e,t)).domNode);o++);return t}return koliBriA11yColorContrast(r,t)};class KoliBriUtils{static queryHtmlElementColors(e,t,r=!1,o=!0){let n=null;if(!0===r||!1===KoliBriUtils.executionLock)if(!1===r&&(KoliBriUtils.cache.clear(),KoliBriUtils.cache.set(t.domNode,t),KoliBriUtils.executionLock=!0,!0===o&&_dev_utils_1ca991a2_js__WEBPACK_IMPORTED_MODULE_0__.L.debug("[KoliBriUtils] Color contrast analysis started...")),e===t.domNode)n=t;else{const r=new Set;if(t.domNode.shadowRoot){const e=t.domNode.shadowRoot.children;for(let t=0;t<e.length;t++)r.add(e[t])}const o=t.domNode;if("function"==typeof o.assignedNodes){const e=o.assignedNodes();for(let t=0;t<e.length;t++)e[t]instanceof HTMLElement&&r.add(e[t])}const a=t.domNode.children;for(let e=0;e<a.length;e++)r.add(a[e]);const i=Array.from(r);for(let r=0;r<i.length;r++){let o=KoliBriUtils.cache.get(i[r]);void 0===o&&(o=koliBriA11yColorContrast(i[r],t)),KoliBriUtils.cache.set(i[r],o);const a=KoliBriUtils.queryHtmlElementColors(e,o,!0,!1);if(null!==a){n=a;break}}}else _dev_utils_1ca991a2_js__WEBPACK_IMPORTED_MODULE_0__.L.debug("[KoliBriUtils] Call aborted because a color contrast analysis is currently being executed.");return!1===r&&(!0===o&&_dev_utils_1ca991a2_js__WEBPACK_IMPORTED_MODULE_0__.L.debug(`[KoliBriUtils] Color contrast analysis finished (${KoliBriUtils.cache.size} DOM elements are analysed).`),KoliBriUtils.executionLock=!1,KoliBriUtils.cache.clear()),n}}KoliBriUtils.executionLock=!1,KoliBriUtils.cache=new Map;class KoliBriDevHelper{}KoliBriDevHelper.getCssStyle=_index_db4aa6e4_js__WEBPACK_IMPORTED_MODULE_1__.p,KoliBriDevHelper.patchTheme=_index_db4aa6e4_js__WEBPACK_IMPORTED_MODULE_1__.x,KoliBriDevHelper.patchThemeTag=_index_db4aa6e4_js__WEBPACK_IMPORTED_MODULE_1__.z,KoliBriDevHelper.querySelector=koliBriQuerySelector,KoliBriDevHelper.querySelectorAll=koliBriQuerySelectorAll,KoliBriDevHelper.stringifyJson=stringifyJson;

/***/ }),

/***/ 28968:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   S: () => (/* binding */ STATE_CHANGE_EVENT),
/* harmony export */   a: () => (/* binding */ isStyle),
/* harmony export */   b: () => (/* binding */ isObject),
/* harmony export */   c: () => (/* binding */ propagateFocus),
/* harmony export */   h: () => (/* binding */ handleSlotContent),
/* harmony export */   i: () => (/* binding */ isString),
/* harmony export */   p: () => (/* binding */ processEnv),
/* harmony export */   s: () => (/* binding */ showExpertSlot)
/* harmony export */ });
/*!
 * KoliBri - The accessible HTML-Standard
 */
const isObject=t=>"object"==typeof t&&null!==t,isString=(t,e=0)=>"string"==typeof t&&t.length>=e,isStyle=t=>{if("object"!=typeof t||null===t)return isString(t,1);for(const e in t)if(!1===isString(e,1))return!1;return!0},STATE_CHANGE_EVENT=new Event("StateChange"),propagateFocus=(t,e)=>{isObject(t)&&t&&(t.focus=t=>null==e?void 0:e.focus(t))};let processEnv="development";try{processEnv="production"}catch(t){processEnv="production"}const handleSlotContent=(t,e,s)=>{if(t&&e&&"string"==typeof s){const o=t.querySelector(`[slot="${s}"]`);o&&e.appendChild(o)}},showExpertSlot=t=>""===t;

/***/ })

};
;