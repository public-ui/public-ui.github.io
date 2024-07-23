/*! For license information please see 62804.4efe263a.js.LICENSE.txt */
"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[62804],{62804:(e,t,n)=>{n.r(t),n.d(t,{kol_breadcrumb:()=>c});var o=n(41336),r=n(26720),a=n(23008),i=n(45016),l=n(8596),s=n(21200);const c=class{constructor(e){(0,o.r)(this,e),this.renderLink=(e,t)=>{const n=this.state._links.length-1;return(0,o.h)("li",{key:t},0!==t&&(0,o.h)(i.g,{_label:"",_icons:"codicon codicon-chevron-right"}),t===n?(0,o.h)("span",null,e._hideLabel?(0,o.h)(i.g,{_label:e._label,_icons:"string"==typeof e._icons?e._icons:"codicon codicon-symbol-event"}):(0,o.h)(o.F,null,e._label)):(0,o.h)(i.h,Object.assign({},e)))},this._label=void 0,this._links=void 0,this.state={_label:"",_links:[]}}render(){return(0,o.h)(o.H,{key:"1cfa36fa9a381d7b470854ec4a550b54817e37d6",class:"kol-breadcrumb"},(0,o.h)("nav",{key:"d913f0b8853e65302801b62abb9ee1a7911ba264","aria-label":this.state._label},(0,o.h)("ul",{key:"9719d99bcfedb925e819b0abf14977692fdabc76"},0===this.state._links.length&&(0,o.h)("li",{key:"1681efdfcdb0eb6d31fe0baf14efa89208ef04e9"},(0,o.h)(i.g,{key:"21f1969a164aaa85d48a8e985e2e788be10a5135",_label:"",_icons:"codicon codicon-home"}),"\u2026"),this.state._links.map(this.renderLink))))}validateLabel(e,t,n=!1){n||(0,r.r)(this.state._label),(0,s.v)(this,e,{required:!0}),(0,l.e)(e),(0,r.a)(this.state._label)}validateLinks(e){(0,a.w)("KolBreadcrumb",this,e)}componentWillLoad(){this.validateLabel(this._label,void 0,!0),this.validateLinks(this._links)}disconnectedCallback(){(0,r.r)(this.state._label)}static get watchers(){return{_label:["validateLabel"],_links:["validateLinks"]}}};c.style={default:"/*\n * This file contains all rules for accessibility.\n */\n@layer kol-global {\n  :host {\n    /*\n     * Minimum size of interactive elements.\n     */\n    --a11y-min-size: 44px;\n    /*\n     * No element should be used without a background and font color whose contrast ratio has\n     * not been checked. By initially setting the background color to white and the font color\n     * to black, the contrast ratio is ensured and explicit adjustment is forced.\n     */\n    background-color: white;\n    color: black;\n    /*\n     * Verdana is an accessible font that can be used without requiring additional loading time.\n     */\n    font-family: Verdana;\n  }\n  * {\n    /*\n     * This rule enables the word dividing for all texts. That is important for high zoom levels.\n     */\n    hyphens: auto;\n    /*\n     * Letter spacing is required for all texts.\n     */\n    letter-spacing: inherit;\n    /*\n     * This rule enables the word dividing for all texts. That is important for high zoom levels.\n     */\n    word-break: break-word;\n    /*\n     * Word spacing is required for all texts.\n     */\n    word-spacing: inherit;\n  }\n  /*\n   * All interactive elements should have a minimum size of 44px.\n   */\n  /* input:not([type='checkbox'], [type='radio'], [type='range']), */\n  /* option, */\n  /* select, */\n  /* textarea, */\n  [role=button],\n  button:not([role=link]),\n  .kol-input .input {\n    min-height: var(--a11y-min-size);\n    min-width: var(--a11y-min-size);\n  }\n  /*\n   * Some interactive elements should not inherit the font-family and font-size.\n   */\n  a,\n  button,\n  h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6,\n  input,\n  option,\n  select,\n  textarea {\n    /*\n     * All elements should inherit the font family from his parent element.\n     */\n    font-family: inherit;\n    /*\n     * All elements should inherit the font size from his parent element.\n     */\n    font-size: inherit;\n  }\n}\n/**\n * Sometimes we need the semantic element for accessibility reasons,\n * but we don't want to show it.\n *\n * - https://www.a11yproject.com/posts/how-to-hide-content/\n */\n.visually-hidden {\n  clip: rect(0 0 0 0);\n  clip-path: inset(50%);\n  height: 1px;\n  overflow: hidden;\n  position: absolute;\n  white-space: nowrap;\n  width: 1px;\n}\n\n@layer kol-global {\n  /*\n   * Dieses CSS stellt sicher, dass der Standard-Style\n   * von A und Button resettet werden.\n   */\n  :is(a, button) {\n    background-color: transparent;\n    border: none;\n    margin: 0;\n    padding: 0;\n    width: 100%; /* 100% needed for custom width from outside */\n  }\n  /*\n   * Ensure elements with hidden attribute to be actually not visible\n   * @see https://meowni.ca/hidden.is.a.lie.html\n   */\n  [hidden] {\n    display: none !important;\n  }\n}\n@layer kol-global {\n  :host {\n    /*\n     * The max-width is needed to prevent the table from overflowing the\n     * parent node, if the table is wider than the parent node.\n     */\n    max-width: 100%;\n  }\n  * {\n    /*\n     * We prefer to box-sizing: border-box for all elements.\n     */\n    box-sizing: border-box;\n  }\n  /* KolSpan is a layout component with icons in all directions and a label text in the middle. */\n  .kol-span-wc {\n    display: grid;\n    place-items: center;\n  }\n  /* The sub span in KolSpan is the horizontal span with icon left and right and the label text in the middle. */\n  .kol-span-wc > span {\n    display: flex;\n    place-items: center;\n  }\n  a,\n  button {\n    cursor: pointer;\n  }\n  /* This is the text label. */\n  .hide-label > .kol-span-wc > span > span {\n    display: none;\n  }\n  /* Reset browser agent style. */\n  button:disabled {\n    color: unset;\n  }\n  .disabled label,\n  .disabled:focus-within label,\n  [aria-disabled=true],\n  [aria-disabled=true]:focus,\n  [disabled],\n  [disabled]:focus {\n    cursor: not-allowed;\n    opacity: 0.5;\n    outline: none;\n  }\n  [aria-disabled=true]:focus .kol-span-wc,\n  [disabled]:focus .kol-span-wc {\n    outline: none !important;\n  }\n}\n@layer kol-component {\n  :host {\n    font-size: calc(16rem / var(--kolibri-root-font-size, 16));\n  }\n  li,\n  ul {\n    margin: 0;\n    padding: 0;\n    list-style: none;\n    display: flex;\n    gap: 0.5em;\n    flex-wrap: wrap;\n    place-items: center;\n  }\n  .kol-icon::part(separator) {\n    font-weight: 900;\n    font-size: 0.7em;\n  }\n  .kol-icon::part(separator):before {\n    content: \"\\f054\";\n    font-family: \"Font Awesome 6 Free\";\n  }\n}"}},21200:(e,t,n)=>{n.d(t,{a:()=>u,b:()=>l,c:()=>s,h:()=>r,v:()=>d});var o=n(8596);const r=[0,1,2,3,4,5,6],a=/[a-zA-Z0-9\xe4\xf6\xfc\xc4\xd6\xdc\xdf]/g,i=/^\d+$/;function l(e,t=1){return function(e){var t;return"string"==typeof e&&(null===(t=e.match(a))||void 0===t?void 0:t.length)||0}(e)>=t}function s(e){return i.test(e)}const c=new Set(["string"]),d=(e,t,n={})=>{(0,o.w)(e,"_label",(e=>"string"==typeof e),c,t,function(e){var t;return Object.assign(Object.assign({},e),{hooks:{afterPatch:(t,n,r,a)=>{var i,c;"function"==typeof(null===(i=e.hooks)||void 0===i?void 0:i.afterPatch)&&(null===(c=e.hooks)||void 0===c||c.afterPatch(t,n,r,a)),"string"==typeof t&&!1===l(t,3)&&!1===s(t)&&(0,o.a)(`The heading or label ("${t}") is not accessible. A label should consist of at least three readable characters.`),"string"==typeof t&&t.length>80&&(0,o.u)("A heading or label should not be longer than 80 characters.")},beforePatch:null===(t=e.hooks)||void 0===t?void 0:t.beforePatch}})}(n))},u=d},8596:(e,t,n)=>{n.d(t,{A:()=>de,B:()=>ie,C:()=>ue,D:()=>ee,K:()=>fe,a:()=>i,b:()=>W,c:()=>g,d:()=>_,e:()=>m,f:()=>f,g:()=>Y,h:()=>y,i:()=>U,j:()=>d,k:()=>V,l:()=>u,m:()=>X,n:()=>s,o:()=>J,p:()=>ne,q:()=>D,r:()=>E,s:()=>I,t:()=>B,u:()=>p,v:()=>ae,w:()=>F,x:()=>oe,y:()=>re,z:()=>he});var o=n(32864),r=n(72032);const a=new Set,i=(e,t)=>{(!1===a.has(e)||(null==t?void 0:t.force))&&(a.add(e),r.L.debug([e].concat((null==t?void 0:t.details)||[]),{classifier:"\u270b a11y",forceLog:!!(null==t?void 0:t.force),overwriteStyle:"; background-color: #09f"}))},l=new Set,s=(e,t)=>{(!1===l.has(e)||(null==t?void 0:t.force))&&(l.add(e),r.L.warn([e].concat((null==t?void 0:t.details)||[]),{classifier:"\ud83d\udd25 deprecated",forceLog:!!(null==t?void 0:t.force),overwriteStyle:"; background-color: #f00"}))},c=new Set,d=(e,t)=>{(!1===c.has(e)||(null==t?void 0:t.force))&&(c.add(e),r.L.debug([e].concat((null==t?void 0:t.details)||[]),{classifier:"\ud83d\udcbb dev",forceLog:!!(null==t?void 0:t.force),overwriteStyle:"; background-color: #f09"}))},u=(e,t)=>{(!1===c.has(e)||(null==t?void 0:t.force))&&(c.add(e),r.L.warn([e].concat((null==t?void 0:t.details)||[]),{classifier:"\u26a0\ufe0f dev",forceLog:!!(null==t?void 0:t.force),overwriteStyle:"; background-color: #f09"}))},h=new Set,f=(e,t=!1,n)=>{(!1===h.has(e)||(null==n?void 0:n.force))&&(h.add(e),e+=!0===t?" \u2705":"",r.L.debug([e].concat((null==n?void 0:n.details)||[]),{classifier:"\ud83c\udf1f feature",forceLog:!!(null==n?void 0:n.force),overwriteStyle:"; background-color: #309"}))};d("We appreciate any feedback, comments, screenshots, or demo links of an application based on KoliBri (kolibri@itzbund.de). Thank you!");const b=new Set,p=(e,t)=>{(!1===b.has(e)||(null==t?void 0:t.force))&&(b.add(e),r.L.debug([e].concat((null==t?void 0:t.details)||[]),{classifier:"\ud83d\udcd1 ui/ux",forceLog:!!(null==t?void 0:t.force),overwriteStyle:"; background-color: #060;"}))},g=()=>{i('"Disabled" limits accessibility and visibility. From an accessibility perspective, we recommend using the readonly attribute instead of disabled.\n- https://uxdesign.cc/is-it-ok-to-grey-out-disabled-buttons-8afa74a0fae')},m=e=>{"string"==typeof e&&""!==e||i("Some structural elements, such as the nav tag, can be used multiple times on a webpage. To distinguish between similarly named structural elements, it is necessary to set an ARIA label.\n- https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/Navigation_Role#accessibility_concerns")},y=(e,t=8)=>{t>7&&p(`[${e}] Within navigation structures, it is recommended to use no more than 7 menu items.\n\nLink:\n- https://en.wikipedia.org/wiki/The_Magical_Number_Seven,_Plus_or_Minus_Two`)};var v=.2126,w=.7152,k=.0722,x=1/12.92;function S(e){return Math.pow((e+.055)/1.055,2.4)}function L(e){var t=e[0]/255,n=e[1]/255,o=e[2]/255,r=t<=.03928?t*x:S(t),a=n<=.03928?n*x:S(n),i=o<=.03928?o*x:S(o);return r*v+a*w+i*k}function N(e){var t=255;8===(e=e.replace(/^#/,"")).length&&(t=parseInt(e.slice(6,8),16),e=e.substring(0,6)),4===e.length&&(t=parseInt(e.slice(3,4).repeat(2),16),e=e.substring(0,3)),3===e.length&&(e=e[0]+e[0]+e[1]+e[1]+e[2]+e[2]);var n=parseInt(e,16);return[n>>16,n>>8&255,255&n,t]}function A(e,t){return function(e,t){return(Math.max(e,t)+.05)/(Math.min(e,t)+.05)}(L(e),L(t))}function _(e,t){return A(N(e),N(t))}function T(e){return e>=7?"AAA":e>=4.5?"AA":e>=3?"AA Large":"Fail"}var O={exports:{}};function M(e){var t=z(e);return 3==t.length?t.concat(255):(t[3]=Math.round(t[3]),t)}function z(e){return"string"==typeof e?function(e){return"red"==e?[255,0,0]:"green"==e?[0,255,0]:"blue"==e?[0,0,255]:"black"==e?[0,0,0]:"white"==e?[255,255,255]:"cyan"==e?[0,255,255]:"gray"==e||"grey"==e?[128,128,128]:"magenta"==e||"pink"==e?[255,0,255]:"yellow"==e?[255,255,0]:void 0}(e=e.toLowerCase())||function(e){var t=e.replace(/^#/,""),n=t.length;if(3==n||4==n){var o=C(t[0]),r=C(t[1]),a=C(t[2]),i=3==n?255:C(t[3]);if(isNaN(o)||isNaN(r)||isNaN(a)||isNaN(i))return;return[o,r,a,i]}}(e)||function(e){var t=e.replace(/^#/,""),n=t.length;if(6==n||8==n){var o=C(t.slice(0,2)),r=C(t.slice(2,4)),a=C(t.slice(4,6)),i=6==n?255:C(t.slice(6,8));if(isNaN(o)||isNaN(r)||isNaN(a)||isNaN(i))return;return[o,r,a,i]}}(e)||function(e){if("rgb("==e.substr(0,4)){var t=(e=e.match(/^rgb\(([^)]+)\)/)[1]).split(/ *, */).map(Number),n=q(t[0],!0),o=q(t[1],!0),r=q(t[2],!0);if(-1!=n&&-1!=o&&-1!=r)return[n,o,r,255]}}(e)||function(e){if("rgba("==e.substr(0,5)){var t=(e=e.match(/^rgba\(([^)]+)\)/)[1]).split(/ *, */).map(Number),n=q(t[0],!0),o=q(t[1],!0),r=q(t[2],!0),a=q(255*t[3]);if(-1!=n&&-1!=o&&-1!=r&&-1!=a)return[n,o,r,a]}}(e)||[0,0,0,255]:function(e){if("[object Object]"===Object.prototype.toString.call(e)&&Object.getPrototypeOf(e)===Object.getPrototypeOf({})){var t=q(null!=e.r?e.r:null!=e.red?e.red:0,!0),n=q(null!=e.g?e.g:null!=e.green?e.green:0,!0),o=q(null!=e.b?e.b:null!=e.blue?e.blue:0,!0),r=q(null!=e.a?e.a:null!=e.alpha?e.alpha:255,!0);if(-1!=t&&-1!=n&&-1!=o&&-1!=r)return[t,n,o,r]}}(e)||function(e){if(Array.isArray(e)&&(3==e.length||4==e.length)){var t=q(e[0],!0),n=q(e[1],!0),o=q(e[2],!0),r=q(null!=e[3]?e[3]:255,!0);if(-1!=t&&-1!=n&&-1!=o&&-1!=r)return[t,n,o,r]}}(e)||function(e){if("number"==typeof e&&Math.floor(e)==e&&e<=4294967295&&e>=0)return[e>>16&255,e>>8&255,255&e,e>>24&255]}(e)||[0,0,0,255]}function j(e){var t=e.toString(16);return 1==t.length?"0"+t:t}function C(e){return 1==e.length?parseInt(e+e,16):parseInt(e,16)}function q(e,t){return"number"!=typeof e||!0===t&&Math.floor(e)!==e?-1:e>=0&&e<=255?e:-1}O.exports=M,O.exports.arr=M,O.exports.obj=function(e){var t=z(e);return{r:t[0],g:t[1],b:t[2],a:3==t.length?255:Math.round(t[3])}},O.exports.css=function(e){var t=z(e);return 3==t.length&&t.push(255),255==t[3]?"rgb("+t[0]+", "+t[1]+", "+t[2]+")":0==t[3]?"rgba("+t[0]+", "+t[1]+", "+t[2]+", 0)":"rgba("+t[0]+", "+t[1]+", "+t[2]+", "+String(t[3]/255).substr(1)+")"},O.exports.hex=function(e){3==(t=z(e)).length&&t.push(255);var t,n=255==t[3],o=j(t[0]),r=j(t[1]),a=j(t[2]),i=function(e,t,n,o){var r=["ff","00","11","22","33","44","55","66","77","88","99","aa","bb","cc","dd","ee"];return-1!=r.indexOf(e)&&-1!=r.indexOf(t)&&-1!=r.indexOf(n)&&-1!=r.indexOf(o)}(o,r,a,t=j(Math.round(t[3])));return n?i?"#"+o.charAt(0)+r.charAt(0)+a.charAt(0):"#"+o+r+a:i?"#"+o.charAt(0)+r.charAt(0)+a.charAt(0)+t.charAt(0):"#"+o+r+a+t},O.exports.num=function(e){var t=z(e);return 3==t.length?t.push(255):t[3]=Math.round(t[3]),(t[3]<<24>>>0|t[0]<<16|t[1]<<8|t[2])>>>0};const E=O.exports,H=(e,t)=>{t.forEach((t=>{!1===e.has(t)&&e.add(t)}))},P=(e,t=document)=>{if(t instanceof Document||t instanceof HTMLElement||t instanceof ShadowRoot){const n=new Set;H(n,t.querySelectorAll(e));const o=t.querySelectorAll('[class*="hydrated"]');for(let t=0;t<o.length;t++){const r=o[t].shadowRoot;H(n,P(e,"object"==typeof r&&null!==r?r:o[t]))}return Array.from(n)}throw new Error("The parameter document for the method querySelectorAll is not type of Document, HTMLElement or ShadowRoot.")},$=(e,t=document)=>{if(t instanceof Document||t instanceof HTMLElement||t instanceof ShadowRoot){let n=t.querySelector(e);if(null===n){const o=t.querySelectorAll('[class*="hydrated"]');for(let t=0;t<o.length;t++){const r=o[t].shadowRoot;if(n=$(e,"object"==typeof r&&null!==r?r:o[t]),null!==n)break}}return n}throw new Error("The parameter document for the method querySelector is not type of Document, HTMLElement or ShadowRoot.")},R=/\[object Object\]/,J=(e,t)=>{"string"==typeof e&&R.test(e)||t()},B=(e,t)=>{"string"==typeof e&&""===e||t()},D=(e,t)=>{(0,r.a)()&&(r.L.debug([e,t]),r.L.debug("\u2191 We propagate the (submit) event to this target.")),Object.defineProperty(e,"target",{value:t,writable:!1})},I=(e,t,n,o={})=>{var r,a;void 0===e.nextHooks&&(e.nextHooks=new Map),void 0===e.nextState&&(e.nextState=new Map),e.nextHooks.get(t)instanceof Map==0&&e.nextHooks.set(t,new Map),"function"==typeof o.afterPatch&&(null===(r=e.nextHooks.get(t))||void 0===r||r.set("afterPatch",o.afterPatch)),"function"==typeof o.beforePatch&&(null===(a=e.nextHooks.get(t))||void 0===a||a.set("beforePatch",o.beforePatch)),e.nextState.set(t,n),(e=>{var t,n,o;null===(t=e.nextHooks)||void 0===t||t.forEach(((t,n)=>{var o;const r=t.get("beforePatch");"function"==typeof r&&r(null===(o=e.nextState)||void 0===o?void 0:o.get(n),e.nextState,e,n)})),(null===(n=e.nextState)||void 0===n?void 0:n.size)>0&&(e.state=Object.assign(Object.assign({},e.state),Object.fromEntries(e.nextState)),delete e.nextState,null===(o=e.nextHooks)||void 0===o||o.forEach(((t,n)=>{const o=t.get("afterPatch");"function"==typeof o&&o(e.state[n],e.state,e,n)}))),delete e.nextHooks})(e)},K=(e,t,n,o)=>{d(`[${e.constructor.name}] The property value: (${n}) for '${t}' is not valid. Allowed values are: ${Array.from(o).join(", ")}`)};function F(e,t,n,o,r,a={}){n(r)?I(e,t,r,a.hooks):void 0===r&&!0!==a.required&&n(a.defaultValue)?I(e,t,a.defaultValue,a.hooks):(a.required||o.add(null),K(e,t,r,o))}const W=(e,t,n,o)=>{F(e,t,(e=>"boolean"==typeof e),new Set(["Boolean {true, false}"]),n,o)},U=(e,t,n,o={})=>{const r="number"==typeof o.minLength?null==o?void 0:o.minLength:0;F(e,t,(e=>"string"==typeof e&&e.length>=r&&(void 0===(null==o?void 0:o.maxLength)||e.length<=o.maxLength)),new Set(["String"]),n,o)},V=(e,t,n,o)=>{F(e,t,(e=>"number"==typeof e&&(void 0===(null==o?void 0:o.min)||"number"==typeof(null==o?void 0:o.min)&&e>=o.min)&&(void 0===(null==o?void 0:o.max)||"number"==typeof(null==o?void 0:o.max)&&e<=o.max)),new Set(["Number"]),n,o)},Y=(e,t,n,o,a=(e=>e==e),i={})=>{B(o,(()=>{J(o,(()=>{void 0===o&&(o=[]);try{try{o=ne(o)}catch(e){}if(Array.isArray(o)){const l=o.find((e=>!n(e)));void 0===l&&a(o)?I(e,t,o,i.hooks):J(l,(()=>{throw r.L.debug(l),new Error("\u2191 The schema for the property (_options) is not valid. The value will not be changed.")}))}else J(o,(()=>{throw r.L.debug(o),new Error("\u2191 The schema for the property (_options) is not valid. The value will not be changed.")}))}catch(e){r.L.debug(e)}}))}))},Z=/^(true|false)$/,G=/^-?(0|[1-9]\d*)$/,Q=/^-?(0.|[1-9]\d*.)\d*[1-9]$/,X=e=>{const t=typeof e,n=`${e}`;if("string"==typeof e)if(Z.test(e))e="true"===e;else if(G.test(e))e=parseInt(e);else if(Q.test(e))e=parseFloat(e);else if(te.test(e))try{e=ne(e)}catch(e){}return t!==typeof e&&d(`You have used a stringified property value (${n} to ${JSON.stringify(e)}) which type switched from ${t} to ${typeof e}!`),e},ee=e=>{try{return JSON.stringify(e).replace(/"/g,"'")}catch(k){throw r.L.warn(["stringifyJson",e]),r.L.error("\u2191 The JSON could not be converted to a string. A stringifiable JSON is expected."),new Error}},te=/^[{[]/,ne=e=>{if("string"==typeof e)try{return JSON.parse(e)}catch(k){if(te.test(e))try{return JSON.parse(e.replace(/'/g,'"'))}catch(k){r.L.warn(["parseJson",e]),r.L.error("\u2191 The JSON string could not be parsed. Make sure that single quotes in the text are escaped (&#8216;).")}}throw new Error},oe=e=>"boolean"==typeof e?!0===e?"true":"false":void 0,re=e=>"string"==typeof e?e:oe(e),ae=(e,t)=>$(e,t||(0,r.g)()),ie=(e,t)=>P(e,t||(0,r.g)());let le=null;const se=()=>(le=le||{backgroundColor:"#00000000",color:"#00000000",domNode:(0,r.g)().body,level:"Fail",score:1},le),ce=/(\d+, ){3}0\)/,de=(e,t=se())=>{const n=getComputedStyle(e),o=ce.test(n.backgroundColor)?t.backgroundColor:E.hex(n.backgroundColor),a=ce.test(n.color)?t.color:E.hex(n.color),i=_(o,a),l={backgroundColor:o,color:a,domNode:e,level:T(i),score:i};return i<4.5&&r.L.error(["Color-Contrast-Error",{backgroundColor:l.backgroundColor,color:l.color,level:l.level,score:l.score},l.domNode]),l},ue=(e,t=se())=>{t.domNode instanceof HTMLElement&&(t=de(t.domNode,t));const n=t.domNode.querySelector(e);if(null===n){const n=t.domNode.querySelectorAll('[class="hydrated"]');for(let o=0;o<n.length&&(t.domNode=n[o],null===(t=ue(e,t)).domNode);o++);return t}return de(n,t)};class he{static queryHtmlElementColors(e,t,n=!1,o=!0){let a=null;if(!0===n||!1===he.executionLock)if(!1===n&&(he.cache.clear(),he.cache.set(t.domNode,t),he.executionLock=!0,!0===o&&r.L.debug("[KoliBriUtils] Color contrast analysis started...")),e===t.domNode)a=t;else{const n=new Set;if(t.domNode.shadowRoot){const e=t.domNode.shadowRoot.children;for(let t=0;t<e.length;t++)n.add(e[t])}const o=t.domNode;if("function"==typeof o.assignedNodes){const e=o.assignedNodes();for(let t=0;t<e.length;t++)e[t]instanceof HTMLElement&&n.add(e[t])}const r=t.domNode.children;for(let e=0;e<r.length;e++)n.add(r[e]);const i=Array.from(n);for(let l=0;l<i.length;l++){let n=he.cache.get(i[l]);void 0===n&&(n=de(i[l],t)),he.cache.set(i[l],n);const o=he.queryHtmlElementColors(e,n,!0,!1);if(null!==o){a=o;break}}}else r.L.debug("[KoliBriUtils] Call aborted because a color contrast analysis is currently being executed.");return!1===n&&(!0===o&&r.L.debug(`[KoliBriUtils] Color contrast analysis finished (${he.cache.size} DOM elements are analysed).`),he.executionLock=!1,he.cache.clear()),a}}he.executionLock=!1,he.cache=new Map;class fe{}fe.getCssStyle=o.p,fe.patchTheme=o.x,fe.patchThemeTag=o.z,fe.querySelector=ae,fe.querySelectorAll=ie,fe.stringifyJson=ee},26720:(e,t,n)=>{n.d(t,{a:()=>a,r:()=>i});var o=n(72032);const r=new Set;function a(e){r.has(e)?o.L.error(`There already is a nav element with the label "${e}"`,{forceLog:!0}):r.add(e)}function i(e){r.delete(e)}},23008:(e,t,n)=>{n.d(t,{w:()=>r});var o=n(8596);const r=(e,t,n)=>{(0,o.g)(t,"_links",(e=>"object"==typeof e&&("string"==typeof e._href||"string"==typeof e._label)),n),(0,o.h)(e,t.state._links.length)}}}]);