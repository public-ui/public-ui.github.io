/*! For license information please see 19704.5e3b274e.js.LICENSE.txt */
"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[19704],{40168:(e,t,n)=>{n.d(t,{a:()=>a,v:()=>r});var o=n(70728);const r=(e,t,n)=>{(0,o.w)(e,t,(e=>"string"==typeof e&&i.includes(e)),new Set(i),n,{defaultValue:"top"})},i=["left","right","top","bottom"],a=(e,t)=>{r(e,"_align",t)}},89656:(e,t,n)=>{n.d(t,{i:()=>l,n:()=>c,r:()=>s});var o=n(65224),r=n(28968),i=n(20444);const a=()=>{let e=(0,i.d)().KoliBri;return void 0===e&&(e={},Object.defineProperty((0,i.d)(),"KoliBri",{value:e,writable:!1})),e},l=()=>{(()=>{const e=(0,i.g)().querySelector('meta[name="kolibri"]');if(e&&e.hasAttribute("content")){const t=e.getAttribute("content");"string"==typeof t&&((0,i.s)(t.includes("dev-mode=true")),(0,i.b)(t.includes("experimental-mode=true")),(0,i.c)(t.includes("color-contrast-analysis=true")))}})(),i.L.debug(`\n,--. ,--.         ,--. ,--. ,-----.           ,--.\n|  .'   /  ,---.  |  | \`--' |  |) /_  ,--.--. \`--'\n|  .   '  | .-. | |  | ,--. |  .-.  \\ |  .--' ,--.\n|  |\\   \\ | '-' | |  | |  | |  '--' / |  |    |  |\n\`--' \`--\xb4  \`---\xb4  \`--' \`--' \`------\xb4  \`--'    \`--'\n\ud83d\udeb9 The accessible HTML-Standard | \ud83d\udc49 https://public-ui.github.io | ${o.E.kolibriVersion}\n\t`,{forceLog:!0})},s=()=>{!0!==a().adviceShown&&(Object.defineProperty(a(),"adviceShown",{get:function(){return!0}}),i.L.debug("\nYou are using the KoliBri component library. If you have any suggestions for improvement or find a problem, please contact us:\n\nTicket: https://github.com/public-ui/kolibri/issues/new/choose (for privacy reasons, please use email)\nEmail: kolibri@itzbund.de\n"))};let c=()=>Math.floor(16777215*Math.random()).toString(16);"test"===r.p&&(c=()=>"nonce")},97324:(e,t,n)=>{n.r(t),n.d(t,{kol_abbr:()=>s});var o=n(65224),r=n(89656),i=n(63792),a=n(97876),l=n(51592);const s=class{constructor(e){(0,o.r)(this,e),this.nonce=(0,r.n)(),this._label=void 0,this._tooltipAlign="top",this.state={_label:"",_tooltipAlign:"top"}}render(){return(0,o.h)(o.H,{key:"598d706f074db11649d068894821a214d3373d11",class:"kol-abbr"},(0,o.h)("abbr",{key:"cea033577a07ea9cbc48cf32f2afa798b2f70c1b","aria-labelledby":this.nonce,role:"definition",tabindex:"0",title:this.state._label},(0,o.h)("span",{key:"f28a0dacfb9e1d5807f763e03401e1b71c0414c3",title:""},(0,o.h)("slot",{key:"c72ee140bfc1c43d781a5309c07f9a47689d6f4e"}))),(0,o.h)(i.a,{key:"2743bb91c1b770375bda8e19668e7ad698b10baa",_align:this.state._tooltipAlign,_id:this.nonce,_label:this.state._label}))}validateLabel(e){(0,a.v)(this,e,{required:!0})}validateTooltipAlign(e){(0,l.v)(this,e)}componentWillLoad(){this.validateLabel(this._label),this.validateTooltipAlign(this._tooltipAlign)}static get watchers(){return{_label:["validateLabel"],_tooltipAlign:["validateTooltipAlign"]}}};s.style={default:"/*\n * This file contains all rules for accessibility.\n */\n@layer kol-global {\n  :host {\n    /*\n     * Minimum size of interactive elements.\n     */\n    --a11y-min-size: 44px;\n    /*\n     * No element should be used without a background and font color whose contrast ratio has\n     * not been checked. By initially setting the background color to white and the font color\n     * to black, the contrast ratio is ensured and explicit adjustment is forced.\n     */\n    background-color: white;\n    color: black;\n    /*\n     * Verdana is an accessible font that can be used without requiring additional loading time.\n     */\n    font-family: Verdana;\n  }\n  * {\n    /*\n     * This rule enables the word dividing for all texts. That is important for high zoom levels.\n     */\n    hyphens: auto;\n    /*\n     * Letter spacing is required for all texts.\n     */\n    letter-spacing: inherit;\n    /*\n     * This rule enables the word dividing for all texts. That is important for high zoom levels.\n     */\n    word-break: break-word;\n    /*\n     * Word spacing is required for all texts.\n     */\n    word-spacing: inherit;\n  }\n  /*\n   * All interactive elements should have a minimum size of 44px.\n   */\n  /* input:not([type='checkbox'], [type='radio'], [type='range']), */\n  /* option, */\n  /* select, */\n  /* textarea, */\n  [role=button],\n  button:not([role=link]),\n  .kol-input .input {\n    min-height: var(--a11y-min-size);\n    min-width: var(--a11y-min-size);\n  }\n  /*\n   * Some interactive elements should not inherit the font-family and font-size.\n   */\n  a,\n  button,\n  h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6,\n  input,\n  option,\n  select,\n  textarea {\n    /*\n     * All elements should inherit the font family from his parent element.\n     */\n    font-family: inherit;\n    /*\n     * All elements should inherit the font size from his parent element.\n     */\n    font-size: inherit;\n  }\n}\n/**\n * Sometimes we need the semantic element for accessibility reasons,\n * but we don't want to show it.\n *\n * - https://www.a11yproject.com/posts/how-to-hide-content/\n */\n.visually-hidden {\n  clip: rect(0 0 0 0);\n  clip-path: inset(50%);\n  height: 1px;\n  overflow: hidden;\n  position: absolute;\n  white-space: nowrap;\n  width: 1px;\n}\n\n@layer kol-global {\n  /*\n   * Dieses CSS stellt sicher, dass der Standard-Style\n   * von A und Button resettet werden.\n   */\n  :is(a, button) {\n    background-color: transparent;\n    border: none;\n    margin: 0;\n    padding: 0;\n    width: 100%; /* 100% needed for custom width from outside */\n  }\n  /*\n   * Ensure elements with hidden attribute to be actually not visible\n   * @see https://meowni.ca/hidden.is.a.lie.html\n   */\n  [hidden] {\n    display: none !important;\n  }\n}\n@layer kol-global {\n  :host {\n    /*\n     * The max-width is needed to prevent the table from overflowing the\n     * parent node, if the table is wider than the parent node.\n     */\n    max-width: 100%;\n  }\n  * {\n    /*\n     * We prefer to box-sizing: border-box for all elements.\n     */\n    box-sizing: border-box;\n  }\n  /* KolSpan is a layout component with icons in all directions and a label text in the middle. */\n  .kol-span-wc {\n    display: grid;\n    place-items: center;\n  }\n  /* The sub span in KolSpan is the horizontal span with icon left and right and the label text in the middle. */\n  .kol-span-wc > span {\n    display: flex;\n    place-items: center;\n  }\n  a,\n  button {\n    cursor: pointer;\n  }\n  /* This is the text label. */\n  .hide-label > .kol-span-wc > span > span {\n    display: none;\n  }\n  /* Reset browser agent style. */\n  button:disabled {\n    color: unset;\n  }\n  .disabled label,\n  .disabled:focus-within label,\n  [aria-disabled=true],\n  [aria-disabled=true]:focus,\n  [disabled],\n  [disabled]:focus {\n    cursor: not-allowed;\n    opacity: 0.5;\n    outline: none;\n  }\n  [aria-disabled=true]:focus .kol-span-wc,\n  [disabled]:focus .kol-span-wc {\n    outline: none !important;\n  }\n}\n@layer kol-component {\n  :host {\n    font-size: calc(16rem / var(--kolibri-root-font-size, 16));\n  }\n  :host > abbr {\n    cursor: help;\n  }\n}"}},97876:(e,t,n)=>{n.d(t,{a:()=>u,b:()=>l,c:()=>s,h:()=>r,v:()=>d});var o=n(70728);const r=[0,1,2,3,4,5,6],i=/[a-zA-Z0-9\xe4\xf6\xfc\xc4\xd6\xdc\xdf]/g,a=/^\d+$/;function l(e,t=1){return function(e){var t;return"string"==typeof e&&(null===(t=e.match(i))||void 0===t?void 0:t.length)||0}(e)>=t}function s(e){return a.test(e)}const c=new Set(["string"]),d=(e,t,n={})=>{(0,o.w)(e,"_label",(e=>"string"==typeof e),c,t,function(e){var t;return Object.assign(Object.assign({},e),{hooks:{afterPatch:(t,n,r,i)=>{var a,c;"function"==typeof(null===(a=e.hooks)||void 0===a?void 0:a.afterPatch)&&(null===(c=e.hooks)||void 0===c||c.afterPatch(t,n,r,i)),"string"==typeof t&&!1===l(t,3)&&!1===s(t)&&(0,o.a)(`The heading or label ("${t}") is not accessible. A label should consist of at least three readable characters.`),"string"==typeof t&&t.length>80&&(0,o.u)("A heading or label should not be longer than 80 characters.")},beforePatch:null===(t=e.hooks)||void 0===t?void 0:t.beforePatch}})}(n))},u=d},70728:(e,t,n)=>{n.d(t,{A:()=>de,B:()=>ae,C:()=>ue,D:()=>ee,K:()=>fe,a:()=>a,b:()=>V,c:()=>g,d:()=>T,e:()=>m,f:()=>f,g:()=>Y,h:()=>y,i:()=>F,j:()=>d,k:()=>U,l:()=>u,m:()=>X,n:()=>s,o:()=>B,p:()=>ne,q:()=>K,r:()=>q,s:()=>I,t:()=>J,u:()=>p,v:()=>ie,w:()=>W,x:()=>oe,y:()=>re,z:()=>he});var o=n(44312),r=n(20444);const i=new Set,a=(e,t)=>{(!1===i.has(e)||(null==t?void 0:t.force))&&(i.add(e),r.L.debug([e].concat((null==t?void 0:t.details)||[]),{classifier:"\u270b a11y",forceLog:!!(null==t?void 0:t.force),overwriteStyle:"; background-color: #09f"}))},l=new Set,s=(e,t)=>{(!1===l.has(e)||(null==t?void 0:t.force))&&(l.add(e),r.L.warn([e].concat((null==t?void 0:t.details)||[]),{classifier:"\ud83d\udd25 deprecated",forceLog:!!(null==t?void 0:t.force),overwriteStyle:"; background-color: #f00"}))},c=new Set,d=(e,t)=>{(!1===c.has(e)||(null==t?void 0:t.force))&&(c.add(e),r.L.debug([e].concat((null==t?void 0:t.details)||[]),{classifier:"\ud83d\udcbb dev",forceLog:!!(null==t?void 0:t.force),overwriteStyle:"; background-color: #f09"}))},u=(e,t)=>{(!1===c.has(e)||(null==t?void 0:t.force))&&(c.add(e),r.L.warn([e].concat((null==t?void 0:t.details)||[]),{classifier:"\u26a0\ufe0f dev",forceLog:!!(null==t?void 0:t.force),overwriteStyle:"; background-color: #f09"}))},h=new Set,f=(e,t=!1,n)=>{(!1===h.has(e)||(null==n?void 0:n.force))&&(h.add(e),e+=!0===t?" \u2705":"",r.L.debug([e].concat((null==n?void 0:n.details)||[]),{classifier:"\ud83c\udf1f feature",forceLog:!!(null==n?void 0:n.force),overwriteStyle:"; background-color: #309"}))};d("We appreciate any feedback, comments, screenshots, or demo links of an application based on KoliBri (kolibri@itzbund.de). Thank you!");const b=new Set,p=(e,t)=>{(!1===b.has(e)||(null==t?void 0:t.force))&&(b.add(e),r.L.debug([e].concat((null==t?void 0:t.details)||[]),{classifier:"\ud83d\udcd1 ui/ux",forceLog:!!(null==t?void 0:t.force),overwriteStyle:"; background-color: #060;"}))},g=()=>{a('"Disabled" limits accessibility and visibility. From an accessibility perspective, we recommend using the readonly attribute instead of disabled.\n- https://uxdesign.cc/is-it-ok-to-grey-out-disabled-buttons-8afa74a0fae')},m=e=>{"string"==typeof e&&""!==e||a("Some structural elements, such as the nav tag, can be used multiple times on a webpage. To distinguish between similarly named structural elements, it is necessary to set an ARIA label.\n- https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/Navigation_Role#accessibility_concerns")},y=(e,t=8)=>{t>7&&p(`[${e}] Within navigation structures, it is recommended to use no more than 7 menu items.\n\nLink:\n- https://en.wikipedia.org/wiki/The_Magical_Number_Seven,_Plus_or_Minus_Two`)};var v=.2126,w=.7152,k=.0722,x=1/12.92;function S(e){return Math.pow((e+.055)/1.055,2.4)}function A(e){var t=e[0]/255,n=e[1]/255,o=e[2]/255,r=t<=.03928?t*x:S(t),i=n<=.03928?n*x:S(n),a=o<=.03928?o*x:S(o);return r*v+i*w+a*k}function L(e){var t=255;8===(e=e.replace(/^#/,"")).length&&(t=parseInt(e.slice(6,8),16),e=e.substring(0,6)),4===e.length&&(t=parseInt(e.slice(3,4).repeat(2),16),e=e.substring(0,3)),3===e.length&&(e=e[0]+e[0]+e[1]+e[1]+e[2]+e[2]);var n=parseInt(e,16);return[n>>16,n>>8&255,255&n,t]}function N(e,t){return function(e,t){return(Math.max(e,t)+.05)/(Math.min(e,t)+.05)}(A(e),A(t))}function T(e,t){return N(L(e),L(t))}function _(e){return e>=7?"AAA":e>=4.5?"AA":e>=3?"AA Large":"Fail"}var M={exports:{}};function O(e){var t=j(e);return 3==t.length?t.concat(255):(t[3]=Math.round(t[3]),t)}function j(e){return"string"==typeof e?function(e){return"red"==e?[255,0,0]:"green"==e?[0,255,0]:"blue"==e?[0,0,255]:"black"==e?[0,0,0]:"white"==e?[255,255,255]:"cyan"==e?[0,255,255]:"gray"==e||"grey"==e?[128,128,128]:"magenta"==e||"pink"==e?[255,0,255]:"yellow"==e?[255,255,0]:void 0}(e=e.toLowerCase())||function(e){var t=e.replace(/^#/,""),n=t.length;if(3==n||4==n){var o=C(t[0]),r=C(t[1]),i=C(t[2]),a=3==n?255:C(t[3]);if(isNaN(o)||isNaN(r)||isNaN(i)||isNaN(a))return;return[o,r,i,a]}}(e)||function(e){var t=e.replace(/^#/,""),n=t.length;if(6==n||8==n){var o=C(t.slice(0,2)),r=C(t.slice(2,4)),i=C(t.slice(4,6)),a=6==n?255:C(t.slice(6,8));if(isNaN(o)||isNaN(r)||isNaN(i)||isNaN(a))return;return[o,r,i,a]}}(e)||function(e){if("rgb("==e.substr(0,4)){var t=(e=e.match(/^rgb\(([^)]+)\)/)[1]).split(/ *, */).map(Number),n=E(t[0],!0),o=E(t[1],!0),r=E(t[2],!0);if(-1!=n&&-1!=o&&-1!=r)return[n,o,r,255]}}(e)||function(e){if("rgba("==e.substr(0,5)){var t=(e=e.match(/^rgba\(([^)]+)\)/)[1]).split(/ *, */).map(Number),n=E(t[0],!0),o=E(t[1],!0),r=E(t[2],!0),i=E(255*t[3]);if(-1!=n&&-1!=o&&-1!=r&&-1!=i)return[n,o,r,i]}}(e)||[0,0,0,255]:function(e){if("[object Object]"===Object.prototype.toString.call(e)&&Object.getPrototypeOf(e)===Object.getPrototypeOf({})){var t=E(null!=e.r?e.r:null!=e.red?e.red:0,!0),n=E(null!=e.g?e.g:null!=e.green?e.green:0,!0),o=E(null!=e.b?e.b:null!=e.blue?e.blue:0,!0),r=E(null!=e.a?e.a:null!=e.alpha?e.alpha:255,!0);if(-1!=t&&-1!=n&&-1!=o&&-1!=r)return[t,n,o,r]}}(e)||function(e){if(Array.isArray(e)&&(3==e.length||4==e.length)){var t=E(e[0],!0),n=E(e[1],!0),o=E(e[2],!0),r=E(null!=e[3]?e[3]:255,!0);if(-1!=t&&-1!=n&&-1!=o&&-1!=r)return[t,n,o,r]}}(e)||function(e){if("number"==typeof e&&Math.floor(e)==e&&e<=4294967295&&e>=0)return[e>>16&255,e>>8&255,255&e,e>>24&255]}(e)||[0,0,0,255]}function z(e){var t=e.toString(16);return 1==t.length?"0"+t:t}function C(e){return 1==e.length?parseInt(e+e,16):parseInt(e,16)}function E(e,t){return"number"!=typeof e||!0===t&&Math.floor(e)!==e?-1:e>=0&&e<=255?e:-1}M.exports=O,M.exports.arr=O,M.exports.obj=function(e){var t=j(e);return{r:t[0],g:t[1],b:t[2],a:3==t.length?255:Math.round(t[3])}},M.exports.css=function(e){var t=j(e);return 3==t.length&&t.push(255),255==t[3]?"rgb("+t[0]+", "+t[1]+", "+t[2]+")":0==t[3]?"rgba("+t[0]+", "+t[1]+", "+t[2]+", 0)":"rgba("+t[0]+", "+t[1]+", "+t[2]+", "+String(t[3]/255).substr(1)+")"},M.exports.hex=function(e){3==(t=j(e)).length&&t.push(255);var t,n=255==t[3],o=z(t[0]),r=z(t[1]),i=z(t[2]),a=function(e,t,n,o){var r=["ff","00","11","22","33","44","55","66","77","88","99","aa","bb","cc","dd","ee"];return-1!=r.indexOf(e)&&-1!=r.indexOf(t)&&-1!=r.indexOf(n)&&-1!=r.indexOf(o)}(o,r,i,t=z(Math.round(t[3])));return n?a?"#"+o.charAt(0)+r.charAt(0)+i.charAt(0):"#"+o+r+i:a?"#"+o.charAt(0)+r.charAt(0)+i.charAt(0)+t.charAt(0):"#"+o+r+i+t},M.exports.num=function(e){var t=j(e);return 3==t.length?t.push(255):t[3]=Math.round(t[3]),(t[3]<<24>>>0|t[0]<<16|t[1]<<8|t[2])>>>0};const q=M.exports,H=(e,t)=>{t.forEach((t=>{!1===e.has(t)&&e.add(t)}))},P=(e,t=document)=>{if(t instanceof Document||t instanceof HTMLElement||t instanceof ShadowRoot){const n=new Set;H(n,t.querySelectorAll(e));const o=t.querySelectorAll('[class*="hydrated"]');for(let t=0;t<o.length;t++){const r=o[t].shadowRoot;H(n,P(e,"object"==typeof r&&null!==r?r:o[t]))}return Array.from(n)}throw new Error("The parameter document for the method querySelectorAll is not type of Document, HTMLElement or ShadowRoot.")},$=(e,t=document)=>{if(t instanceof Document||t instanceof HTMLElement||t instanceof ShadowRoot){let n=t.querySelector(e);if(null===n){const o=t.querySelectorAll('[class*="hydrated"]');for(let t=0;t<o.length;t++){const r=o[t].shadowRoot;if(n=$(e,"object"==typeof r&&null!==r?r:o[t]),null!==n)break}}return n}throw new Error("The parameter document for the method querySelector is not type of Document, HTMLElement or ShadowRoot.")},R=/\[object Object\]/,B=(e,t)=>{"string"==typeof e&&R.test(e)||t()},J=(e,t)=>{"string"==typeof e&&""===e||t()},K=(e,t)=>{(0,r.a)()&&(r.L.debug([e,t]),r.L.debug("\u2191 We propagate the (submit) event to this target.")),Object.defineProperty(e,"target",{value:t,writable:!1})},I=(e,t,n,o={})=>{var r,i;void 0===e.nextHooks&&(e.nextHooks=new Map),void 0===e.nextState&&(e.nextState=new Map),e.nextHooks.get(t)instanceof Map==0&&e.nextHooks.set(t,new Map),"function"==typeof o.afterPatch&&(null===(r=e.nextHooks.get(t))||void 0===r||r.set("afterPatch",o.afterPatch)),"function"==typeof o.beforePatch&&(null===(i=e.nextHooks.get(t))||void 0===i||i.set("beforePatch",o.beforePatch)),e.nextState.set(t,n),(e=>{var t,n,o;null===(t=e.nextHooks)||void 0===t||t.forEach(((t,n)=>{var o;const r=t.get("beforePatch");"function"==typeof r&&r(null===(o=e.nextState)||void 0===o?void 0:o.get(n),e.nextState,e,n)})),(null===(n=e.nextState)||void 0===n?void 0:n.size)>0&&(e.state=Object.assign(Object.assign({},e.state),Object.fromEntries(e.nextState)),delete e.nextState,null===(o=e.nextHooks)||void 0===o||o.forEach(((t,n)=>{const o=t.get("afterPatch");"function"==typeof o&&o(e.state[n],e.state,e,n)}))),delete e.nextHooks})(e)},D=(e,t,n,o)=>{d(`[${e.constructor.name}] The property value: (${n}) for '${t}' is not valid. Allowed values are: ${Array.from(o).join(", ")}`)};function W(e,t,n,o,r,i={}){n(r)?I(e,t,r,i.hooks):void 0===r&&!0!==i.required&&n(i.defaultValue)?I(e,t,i.defaultValue,i.hooks):(i.required||o.add(null),D(e,t,r,o))}const V=(e,t,n,o)=>{W(e,t,(e=>"boolean"==typeof e),new Set(["Boolean {true, false}"]),n,o)},F=(e,t,n,o={})=>{const r="number"==typeof o.minLength?null==o?void 0:o.minLength:0;W(e,t,(e=>"string"==typeof e&&e.length>=r&&(void 0===(null==o?void 0:o.maxLength)||e.length<=o.maxLength)),new Set(["String"]),n,o)},U=(e,t,n,o)=>{W(e,t,(e=>"number"==typeof e&&(void 0===(null==o?void 0:o.min)||"number"==typeof(null==o?void 0:o.min)&&e>=o.min)&&(void 0===(null==o?void 0:o.max)||"number"==typeof(null==o?void 0:o.max)&&e<=o.max)),new Set(["Number"]),n,o)},Y=(e,t,n,o,i=(e=>e==e),a={})=>{J(o,(()=>{B(o,(()=>{void 0===o&&(o=[]);try{try{o=ne(o)}catch(e){}if(Array.isArray(o)){const l=o.find((e=>!n(e)));void 0===l&&i(o)?I(e,t,o,a.hooks):B(l,(()=>{throw r.L.debug(l),new Error("\u2191 The schema for the property (_options) is not valid. The value will not be changed.")}))}else B(o,(()=>{throw r.L.debug(o),new Error("\u2191 The schema for the property (_options) is not valid. The value will not be changed.")}))}catch(e){r.L.debug(e)}}))}))},Z=/^(true|false)$/,G=/^-?(0|[1-9]\d*)$/,Q=/^-?(0.|[1-9]\d*.)\d*[1-9]$/,X=e=>{const t=typeof e,n=`${e}`;if("string"==typeof e)if(Z.test(e))e="true"===e;else if(G.test(e))e=parseInt(e);else if(Q.test(e))e=parseFloat(e);else if(te.test(e))try{e=ne(e)}catch(e){}return t!==typeof e&&d(`You have used a stringified property value (${n} to ${JSON.stringify(e)}) which type switched from ${t} to ${typeof e}!`),e},ee=e=>{try{return JSON.stringify(e).replace(/"/g,"'")}catch(k){throw r.L.warn(["stringifyJson",e]),r.L.error("\u2191 The JSON could not be converted to a string. A stringifiable JSON is expected."),new Error}},te=/^[{[]/,ne=e=>{if("string"==typeof e)try{return JSON.parse(e)}catch(k){if(te.test(e))try{return JSON.parse(e.replace(/'/g,'"'))}catch(k){r.L.warn(["parseJson",e]),r.L.error("\u2191 The JSON string could not be parsed. Make sure that single quotes in the text are escaped (&#8216;).")}}throw new Error},oe=e=>"boolean"==typeof e?!0===e?"true":"false":void 0,re=e=>"string"==typeof e?e:oe(e),ie=(e,t)=>$(e,t||(0,r.g)()),ae=(e,t)=>P(e,t||(0,r.g)());let le=null;const se=()=>(le=le||{backgroundColor:"#00000000",color:"#00000000",domNode:(0,r.g)().body,level:"Fail",score:1},le),ce=/(\d+, ){3}0\)/,de=(e,t=se())=>{const n=getComputedStyle(e),o=ce.test(n.backgroundColor)?t.backgroundColor:q.hex(n.backgroundColor),i=ce.test(n.color)?t.color:q.hex(n.color),a=T(o,i),l={backgroundColor:o,color:i,domNode:e,level:_(a),score:a};return a<4.5&&r.L.error(["Color-Contrast-Error",{backgroundColor:l.backgroundColor,color:l.color,level:l.level,score:l.score},l.domNode]),l},ue=(e,t=se())=>{t.domNode instanceof HTMLElement&&(t=de(t.domNode,t));const n=t.domNode.querySelector(e);if(null===n){const n=t.domNode.querySelectorAll('[class="hydrated"]');for(let o=0;o<n.length&&(t.domNode=n[o],null===(t=ue(e,t)).domNode);o++);return t}return de(n,t)};class he{static queryHtmlElementColors(e,t,n=!1,o=!0){let i=null;if(!0===n||!1===he.executionLock)if(!1===n&&(he.cache.clear(),he.cache.set(t.domNode,t),he.executionLock=!0,!0===o&&r.L.debug("[KoliBriUtils] Color contrast analysis started...")),e===t.domNode)i=t;else{const n=new Set;if(t.domNode.shadowRoot){const e=t.domNode.shadowRoot.children;for(let t=0;t<e.length;t++)n.add(e[t])}const o=t.domNode;if("function"==typeof o.assignedNodes){const e=o.assignedNodes();for(let t=0;t<e.length;t++)e[t]instanceof HTMLElement&&n.add(e[t])}const r=t.domNode.children;for(let e=0;e<r.length;e++)n.add(r[e]);const a=Array.from(n);for(let l=0;l<a.length;l++){let n=he.cache.get(a[l]);void 0===n&&(n=de(a[l],t)),he.cache.set(a[l],n);const o=he.queryHtmlElementColors(e,n,!0,!1);if(null!==o){i=o;break}}}else r.L.debug("[KoliBriUtils] Call aborted because a color contrast analysis is currently being executed.");return!1===n&&(!0===o&&r.L.debug(`[KoliBriUtils] Color contrast analysis finished (${he.cache.size} DOM elements are analysed).`),he.executionLock=!1,he.cache.clear()),i}}he.executionLock=!1,he.cache=new Map;class fe{}fe.getCssStyle=o.p,fe.patchTheme=o.x,fe.patchThemeTag=o.z,fe.querySelector=ie,fe.querySelectorAll=ae,fe.stringifyJson=ee},28968:(e,t,n)=>{n.d(t,{S:()=>a,a:()=>i,b:()=>o,c:()=>l,h:()=>c,i:()=>r,p:()=>s,s:()=>d});const o=e=>"object"==typeof e&&null!==e,r=(e,t=0)=>"string"==typeof e&&e.length>=t,i=e=>{if("object"!=typeof e||null===e)return r(e,1);for(const t in e)if(!1===r(t,1))return!1;return!0},a=new Event("StateChange"),l=(e,t)=>{o(e)&&e&&(e.focus=e=>null==t?void 0:t.focus(e))};let s="development";try{s="production"}catch(u){s="production"}const c=(e,t,n)=>{if(e&&t&&"string"==typeof n){const o=e.querySelector(`[slot="${n}"]`);o&&t.appendChild(o)}},d=e=>""===e},51592:(e,t,n)=>{n.d(t,{v:()=>r});var o=n(40168);const r=(e,t)=>{(0,o.v)(e,"_tooltipAlign",t)}}}]);