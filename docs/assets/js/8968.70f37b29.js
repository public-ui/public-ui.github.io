/*! For license information please see 8968.70f37b29.js.LICENSE.txt */
"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[8968],{90076:(e,t,n)=>{n.d(t,{v:()=>i});var o=n(70728);const i=(e,t,n={})=>{(0,o.b)(e,"_hideLabel",t,n)}},98852:(e,t,n)=>{n.d(t,{t:()=>a});var o=n(46892),i=n(28968);let a=(e,t)=>{var n;return(null!==(n=(0,o.g)())&&void 0!==n?n:(0,o.i)("de")).translate(e,t)};"test"===i.p&&(a=e=>e)},8968:(e,t,n)=>{n.r(t),n.d(t,{kol_nav:()=>h});var o=n(65224),i=n(98852),a=n(9820),l=n(59712),r=n(63792),s=n(70728),d=n(90076),c=n(75496);const h=class{constructor(e){(0,o.r)(this,e),this.handleToggleExpansionClick=e=>{e&&(this.state._expandedChildren.includes(e)?this.collapseChildren(e):this.expandChildren(e))},this.linkList=e=>(0,o.h)("ul",{class:"list "+(0===e.deep&&"horizontal"===e.orientation?" horizontal":" vertical"),"data-deep":e.deep},e.links.map(((t,n)=>this.li(e.collapsible,e.hideLabel,e.deep,n,t,e.orientation)))),this._collapsible=!0,this._hasCompactButton=!1,this._hasIconsWhenExpanded=!1,this._hideLabel=!1,this._label=void 0,this._links=void 0,this._orientation="vertical",this.state={_collapsible:!0,_hasCompactButton:!1,_hasIconsWhenExpanded:!1,_hideLabel:!1,_label:"",_links:[],_orientation:"vertical",_expandedChildren:[]}}expandChildren(e){this.state=Object.assign(Object.assign({},this.state),{_expandedChildren:[...this.state._expandedChildren,e]})}collapseChildren(e){this.state=Object.assign(Object.assign({},this.state),{_expandedChildren:this.state._expandedChildren.filter((t=>t!=e))})}entry(e,t,n,i,a){const l=this.state._hasIconsWhenExpanded||this.state._hideLabel?i._icons||(this.state._hideLabel?"codicon codicon-symbol-method":void 0):void 0;return(0,o.h)("div",{class:{entry:!0,"hide-label":t}},(e=>"string"==typeof e._href)(i)?(0,o.h)(r.n,Object.assign({class:"entry-item"},i,{_hideLabel:t,_icons:l})):(0,o.h)(r.c,{class:"entry-item",_label:i._label,_hideLabel:t,_icons:l,_on:{onClick:(e,t)=>{(e=>{var t;return void 0===e._href&&"function"==typeof(null===(t=e._on)||void 0===t?void 0:t.onClick)})(i)&&"function"==typeof i._on.onClick?i._on.onClick(e,t):this.handleToggleExpansionClick(i._children)}}}),n?this.expandButton(e,i,a):"")}expandButton(e,t,n){return(0,o.h)(r.c,{class:"expand-button",_ariaExpanded:n,_disabled:!e,_icons:"codicon codicon-"+(n?"remove":"add"),_hideLabel:!0,_label:`${(0,i.t)(n?"kol-nav-label-close":"kol-nav-label-open",{placeholders:{label:t._label}})}`,_on:{onClick:()=>this.handleToggleExpansionClick(t._children)}})}li(e,t,n,i,a,l){const r=!!a._active,s=Array.isArray(a._children)&&a._children.length>0,d=Boolean(a._children&&this.state._expandedChildren.includes(a._children));return(0,o.h)("li",{class:{active:r,expanded:d,"has-children":s},key:i},this.entry(e,t,s,a,d),d&&(0,o.h)(this.linkList,{collapsible:e,hideLabel:t,deep:n+1,links:a._children||[],orientation:l}))}initializeExpandedChildren(){const e=t=>{if(t._active)return t._children&&this.expandChildren(t._children),!0;if(t._children)for(const n of t._children)if(e(n))return this.expandChildren(t._children),!0;return!1};this.state._links.forEach(e)}render(){let e=this.state._hasCompactButton;"horizontal"===this.state._orientation&&!0===this.state._hasCompactButton&&(e=!1,(0,s.l)("[KolNav] Wenn eine horizontale Navigation verwendet wird, kann die Option _hasCompactButton nicht aktiviert werden."));const t=!0===this.state._collapsible,n=!0===this.state._hideLabel,a=this.state._orientation;return(0,o.h)(o.H,{key:"ad305888a9a44b97ab2c5c17ecb746bedfc29ea0",class:"kol-nav"},(0,o.h)("div",{key:"347730ba86f73875ed8aec6de6c0d0e5bd98bd66",class:{nav:!0,[a]:!0,"is-compact":this.state._hideLabel}},(0,o.h)("nav",{key:"9e80ad4e14e09fb5cd268802d06ae72d47cae9ad","aria-label":this.state._label,id:"nav"},(0,o.h)(this.linkList,{key:"9806875ae93b0320bbf82979c8ed4a5a0466f630",collapsible:t,hideLabel:n,deep:0,links:this.state._links,orientation:a})),e&&(0,o.h)("div",{key:"26e0048f9c260311519592828553e34fdb9b51fe",class:"compact"},(0,o.h)(r.o,{key:"23dee1535d08bede377ee8add4d5ea31e7d7e3b3",_ariaControls:"nav",_ariaExpanded:!n,_icons:n?"codicon codicon-chevron-right":"codicon codicon-chevron-left",_hideLabel:!0,_label:(0,i.t)(n?"kol-nav-maximize":"kol-nav-minimize"),_on:{onClick:()=>{this.state=Object.assign(Object.assign({},this.state),{_hideLabel:!1===this.state._hideLabel})}},_tooltipAlign:"right",_variant:"ghost"}))))}validateCollapsible(e){((e,t)=>{(0,s.b)(e,"_collapsible",t)})(this,e)}validateHasCompactButton(e){((e,t)=>{(0,s.b)(e,"_hasCompactButton",t)})(this,e)}validateHasIconsWhenExpanded(e){((e,t)=>{(0,s.b)(e,"_hasIconsWhenExpanded",t)})(this,e)}validateHideLabel(e){(0,d.v)(this,e)}validateLabel(e,t,n=!1){n||(0,a.r)(this.state._label),(0,c.v)(this,e,{required:!0}),(0,s.e)(e),(0,a.a)(this.state._label)}validateLinks(e){(0,l.w)("KolNav",this,e),(0,s.j)("[KolNav] The navigation structure is not yet validated recursively.")}validateOrientation(e){(0,s.w)(this,"_orientation",(e=>"horizontal"===e||"vertical"===e),new Set(["Orientation {horizontal, vertical}"]),e,{defaultValue:"vertical"})}componentWillLoad(){this.validateCollapsible(this._collapsible),this.validateHideLabel(this._hideLabel),this.validateHasCompactButton(this._hasCompactButton),this.validateHasIconsWhenExpanded(this._hasIconsWhenExpanded),this.validateLabel(this._label,void 0,!0),this.validateLinks(this._links),this.validateOrientation(this._orientation),this.initializeExpandedChildren()}disconnectedCallback(){(0,a.r)(this.state._label)}static get watchers(){return{_collapsible:["validateCollapsible"],_hasCompactButton:["validateHasCompactButton"],_hasIconsWhenExpanded:["validateHasIconsWhenExpanded"],_hideLabel:["validateHideLabel"],_label:["validateLabel"],_links:["validateLinks"],_orientation:["validateOrientation"]}}};h.style={default:"/*\n * This file contains all rules for accessibility.\n */\n@layer kol-global {\n  :host {\n    /*\n     * Minimum size of interactive elements.\n     */\n    --a11y-min-size: 44px;\n    /*\n     * No element should be used without a background and font color whose contrast ratio has\n     * not been checked. By initially setting the background color to white and the font color\n     * to black, the contrast ratio is ensured and explicit adjustment is forced.\n     */\n    background-color: white;\n    color: black;\n    /*\n     * Verdana is an accessible font that can be used without requiring additional loading time.\n     */\n    font-family: Verdana;\n  }\n  * {\n    /*\n     * This rule enables the word dividing for all texts. That is important for high zoom levels.\n     */\n    hyphens: auto;\n    /*\n     * Letter spacing is required for all texts.\n     */\n    letter-spacing: inherit;\n    /*\n     * This rule enables the word dividing for all texts. That is important for high zoom levels.\n     */\n    word-break: break-word;\n    /*\n     * Word spacing is required for all texts.\n     */\n    word-spacing: inherit;\n  }\n  /*\n   * All interactive elements should have a minimum size of 44px.\n   */\n  /* input:not([type='checkbox'], [type='radio'], [type='range']), */\n  /* option, */\n  /* select, */\n  /* textarea, */\n  [role=button],\n  button:not([role=link]),\n  .kol-input .input {\n    min-height: var(--a11y-min-size);\n    min-width: var(--a11y-min-size);\n  }\n  /*\n   * Some interactive elements should not inherit the font-family and font-size.\n   */\n  a,\n  button,\n  h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6,\n  input,\n  option,\n  select,\n  textarea {\n    /*\n     * All elements should inherit the font family from his parent element.\n     */\n    font-family: inherit;\n    /*\n     * All elements should inherit the font size from his parent element.\n     */\n    font-size: inherit;\n  }\n}\n/**\n * Sometimes we need the semantic element for accessibility reasons,\n * but we don't want to show it.\n *\n * - https://www.a11yproject.com/posts/how-to-hide-content/\n */\n.visually-hidden {\n  clip: rect(0 0 0 0);\n  clip-path: inset(50%);\n  height: 1px;\n  overflow: hidden;\n  position: absolute;\n  white-space: nowrap;\n  width: 1px;\n}\n\n@layer kol-global {\n  /*\n   * Dieses CSS stellt sicher, dass der Standard-Style\n   * von A und Button resettet werden.\n   */\n  :is(a, button) {\n    background-color: transparent;\n    border: none;\n    margin: 0;\n    padding: 0;\n    width: 100%; /* 100% needed for custom width from outside */\n  }\n  /*\n   * Ensure elements with hidden attribute to be actually not visible\n   * @see https://meowni.ca/hidden.is.a.lie.html\n   */\n  [hidden] {\n    display: none !important;\n  }\n}\n@layer kol-global {\n  :host {\n    /*\n     * The max-width is needed to prevent the table from overflowing the\n     * parent node, if the table is wider than the parent node.\n     */\n    max-width: 100%;\n  }\n  * {\n    /*\n     * We prefer to box-sizing: border-box for all elements.\n     */\n    box-sizing: border-box;\n  }\n  /* KolSpan is a layout component with icons in all directions and a label text in the middle. */\n  .kol-span-wc {\n    display: grid;\n    place-items: center;\n  }\n  /* The sub span in KolSpan is the horizontal span with icon left and right and the label text in the middle. */\n  .kol-span-wc > span {\n    display: flex;\n    place-items: center;\n  }\n  a,\n  button {\n    cursor: pointer;\n  }\n  /* This is the text label. */\n  .hide-label > .kol-span-wc > span > span {\n    display: none;\n  }\n  /* Reset browser agent style. */\n  button:disabled {\n    color: unset;\n  }\n  .disabled label,\n  .disabled:focus-within label,\n  [aria-disabled=true],\n  [aria-disabled=true]:focus,\n  [disabled],\n  [disabled]:focus {\n    cursor: not-allowed;\n    opacity: 0.5;\n    outline: none;\n  }\n  [aria-disabled=true]:focus .kol-span-wc,\n  [disabled]:focus .kol-span-wc {\n    outline: none !important;\n  }\n}\n@layer kol-component {\n  :host {\n    font-size: calc(16rem / var(--kolibri-root-font-size, 16));\n  }\n  :host > div {\n    display: grid;\n    place-items: center;\n  }\n  :not(.is-compact) nav {\n    width: 100%;\n  }\n  .list {\n    display: flex;\n    list-style: none;\n    margin: 0;\n    padding: 0;\n  }\n  .list.vertical {\n    flex-direction: column;\n  }\n  .entry {\n    display: flex;\n  }\n  .entry-item {\n    flex-grow: 1;\n  }\n}"}},75496:(e,t,n)=>{n.d(t,{a:()=>h,b:()=>r,c:()=>s,h:()=>i,v:()=>c});var o=n(70728);const i=[0,1,2,3,4,5,6],a=/[a-zA-Z0-9\xe4\xf6\xfc\xc4\xd6\xdc\xdf]/g,l=/^\d+$/;function r(e,t=1){return function(e){var t;return"string"==typeof e&&(null===(t=e.match(a))||void 0===t?void 0:t.length)||0}(e)>=t}function s(e){return l.test(e)}const d=new Set(["string"]),c=(e,t,n={})=>{(0,o.w)(e,"_label",(e=>"string"==typeof e),d,t,function(e){var t;return Object.assign(Object.assign({},e),{hooks:{afterPatch:(t,n,i,a)=>{var l,d;"function"==typeof(null===(l=e.hooks)||void 0===l?void 0:l.afterPatch)&&(null===(d=e.hooks)||void 0===d||d.afterPatch(t,n,i,a)),"string"==typeof t&&!1===r(t,3)&&!1===s(t)&&(0,o.a)(`The heading or label ("${t}") is not accessible. A label should consist of at least three readable characters.`),"string"==typeof t&&t.length>80&&(0,o.u)("A heading or label should not be longer than 80 characters.")},beforePatch:null===(t=e.hooks)||void 0===t?void 0:t.beforePatch}})}(n))},h=c},70728:(e,t,n)=>{n.d(t,{A:()=>ce,B:()=>le,C:()=>he,D:()=>ee,K:()=>fe,a:()=>l,b:()=>V,c:()=>g,d:()=>N,e:()=>v,f:()=>f,g:()=>Y,h:()=>m,i:()=>F,j:()=>c,k:()=>U,l:()=>h,m:()=>X,n:()=>s,o:()=>P,p:()=>ne,q:()=>R,r:()=>M,s:()=>J,t:()=>W,u:()=>b,v:()=>ae,w:()=>D,x:()=>oe,y:()=>ie,z:()=>ue});var o=n(44312),i=n(20444);const a=new Set,l=(e,t)=>{(!1===a.has(e)||(null==t?void 0:t.force))&&(a.add(e),i.L.debug([e].concat((null==t?void 0:t.details)||[]),{classifier:"\u270b a11y",forceLog:!!(null==t?void 0:t.force),overwriteStyle:"; background-color: #09f"}))},r=new Set,s=(e,t)=>{(!1===r.has(e)||(null==t?void 0:t.force))&&(r.add(e),i.L.warn([e].concat((null==t?void 0:t.details)||[]),{classifier:"\ud83d\udd25 deprecated",forceLog:!!(null==t?void 0:t.force),overwriteStyle:"; background-color: #f00"}))},d=new Set,c=(e,t)=>{(!1===d.has(e)||(null==t?void 0:t.force))&&(d.add(e),i.L.debug([e].concat((null==t?void 0:t.details)||[]),{classifier:"\ud83d\udcbb dev",forceLog:!!(null==t?void 0:t.force),overwriteStyle:"; background-color: #f09"}))},h=(e,t)=>{(!1===d.has(e)||(null==t?void 0:t.force))&&(d.add(e),i.L.warn([e].concat((null==t?void 0:t.details)||[]),{classifier:"\u26a0\ufe0f dev",forceLog:!!(null==t?void 0:t.force),overwriteStyle:"; background-color: #f09"}))},u=new Set,f=(e,t=!1,n)=>{(!1===u.has(e)||(null==n?void 0:n.force))&&(u.add(e),e+=!0===t?" \u2705":"",i.L.debug([e].concat((null==n?void 0:n.details)||[]),{classifier:"\ud83c\udf1f feature",forceLog:!!(null==n?void 0:n.force),overwriteStyle:"; background-color: #309"}))};c("We appreciate any feedback, comments, screenshots, or demo links of an application based on KoliBri (kolibri@itzbund.de). Thank you!");const p=new Set,b=(e,t)=>{(!1===p.has(e)||(null==t?void 0:t.force))&&(p.add(e),i.L.debug([e].concat((null==t?void 0:t.details)||[]),{classifier:"\ud83d\udcd1 ui/ux",forceLog:!!(null==t?void 0:t.force),overwriteStyle:"; background-color: #060;"}))},g=()=>{l('"Disabled" limits accessibility and visibility. From an accessibility perspective, we recommend using the readonly attribute instead of disabled.\n- https://uxdesign.cc/is-it-ok-to-grey-out-disabled-buttons-8afa74a0fae')},v=e=>{"string"==typeof e&&""!==e||l("Some structural elements, such as the nav tag, can be used multiple times on a webpage. To distinguish between similarly named structural elements, it is necessary to set an ARIA label.\n- https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/Navigation_Role#accessibility_concerns")},m=(e,t=8)=>{t>7&&b(`[${e}] Within navigation structures, it is recommended to use no more than 7 menu items.\n\nLink:\n- https://en.wikipedia.org/wiki/The_Magical_Number_Seven,_Plus_or_Minus_Two`)};var y=.2126,w=.7152,_=.0722,k=1/12.92;function x(e){return Math.pow((e+.055)/1.055,2.4)}function L(e){var t=e[0]/255,n=e[1]/255,o=e[2]/255,i=t<=.03928?t*k:x(t),a=n<=.03928?n*k:x(n),l=o<=.03928?o*k:x(o);return i*y+a*w+l*_}function S(e){var t=255;8===(e=e.replace(/^#/,"")).length&&(t=parseInt(e.slice(6,8),16),e=e.substring(0,6)),4===e.length&&(t=parseInt(e.slice(3,4).repeat(2),16),e=e.substring(0,3)),3===e.length&&(e=e[0]+e[0]+e[1]+e[1]+e[2]+e[2]);var n=parseInt(e,16);return[n>>16,n>>8&255,255&n,t]}function C(e,t){return function(e,t){return(Math.max(e,t)+.05)/(Math.min(e,t)+.05)}(L(e),L(t))}function N(e,t){return C(S(e),S(t))}function A(e){return e>=7?"AAA":e>=4.5?"AA":e>=3?"AA Large":"Fail"}var E={exports:{}};function O(e){var t=T(e);return 3==t.length?t.concat(255):(t[3]=Math.round(t[3]),t)}function T(e){return"string"==typeof e?function(e){return"red"==e?[255,0,0]:"green"==e?[0,255,0]:"blue"==e?[0,0,255]:"black"==e?[0,0,0]:"white"==e?[255,255,255]:"cyan"==e?[0,255,255]:"gray"==e||"grey"==e?[128,128,128]:"magenta"==e||"pink"==e?[255,0,255]:"yellow"==e?[255,255,0]:void 0}(e=e.toLowerCase())||function(e){var t=e.replace(/^#/,""),n=t.length;if(3==n||4==n){var o=j(t[0]),i=j(t[1]),a=j(t[2]),l=3==n?255:j(t[3]);if(isNaN(o)||isNaN(i)||isNaN(a)||isNaN(l))return;return[o,i,a,l]}}(e)||function(e){var t=e.replace(/^#/,""),n=t.length;if(6==n||8==n){var o=j(t.slice(0,2)),i=j(t.slice(2,4)),a=j(t.slice(4,6)),l=6==n?255:j(t.slice(6,8));if(isNaN(o)||isNaN(i)||isNaN(a)||isNaN(l))return;return[o,i,a,l]}}(e)||function(e){if("rgb("==e.substr(0,4)){var t=(e=e.match(/^rgb\(([^)]+)\)/)[1]).split(/ *, */).map(Number),n=H(t[0],!0),o=H(t[1],!0),i=H(t[2],!0);if(-1!=n&&-1!=o&&-1!=i)return[n,o,i,255]}}(e)||function(e){if("rgba("==e.substr(0,5)){var t=(e=e.match(/^rgba\(([^)]+)\)/)[1]).split(/ *, */).map(Number),n=H(t[0],!0),o=H(t[1],!0),i=H(t[2],!0),a=H(255*t[3]);if(-1!=n&&-1!=o&&-1!=i&&-1!=a)return[n,o,i,a]}}(e)||[0,0,0,255]:function(e){if("[object Object]"===Object.prototype.toString.call(e)&&Object.getPrototypeOf(e)===Object.getPrototypeOf({})){var t=H(null!=e.r?e.r:null!=e.red?e.red:0,!0),n=H(null!=e.g?e.g:null!=e.green?e.green:0,!0),o=H(null!=e.b?e.b:null!=e.blue?e.blue:0,!0),i=H(null!=e.a?e.a:null!=e.alpha?e.alpha:255,!0);if(-1!=t&&-1!=n&&-1!=o&&-1!=i)return[t,n,o,i]}}(e)||function(e){if(Array.isArray(e)&&(3==e.length||4==e.length)){var t=H(e[0],!0),n=H(e[1],!0),o=H(e[2],!0),i=H(null!=e[3]?e[3]:255,!0);if(-1!=t&&-1!=n&&-1!=o&&-1!=i)return[t,n,o,i]}}(e)||function(e){if("number"==typeof e&&Math.floor(e)==e&&e<=4294967295&&e>=0)return[e>>16&255,e>>8&255,255&e,e>>24&255]}(e)||[0,0,0,255]}function z(e){var t=e.toString(16);return 1==t.length?"0"+t:t}function j(e){return 1==e.length?parseInt(e+e,16):parseInt(e,16)}function H(e,t){return"number"!=typeof e||!0===t&&Math.floor(e)!==e?-1:e>=0&&e<=255?e:-1}E.exports=O,E.exports.arr=O,E.exports.obj=function(e){var t=T(e);return{r:t[0],g:t[1],b:t[2],a:3==t.length?255:Math.round(t[3])}},E.exports.css=function(e){var t=T(e);return 3==t.length&&t.push(255),255==t[3]?"rgb("+t[0]+", "+t[1]+", "+t[2]+")":0==t[3]?"rgba("+t[0]+", "+t[1]+", "+t[2]+", 0)":"rgba("+t[0]+", "+t[1]+", "+t[2]+", "+String(t[3]/255).substr(1)+")"},E.exports.hex=function(e){3==(t=T(e)).length&&t.push(255);var t,n=255==t[3],o=z(t[0]),i=z(t[1]),a=z(t[2]),l=function(e,t,n,o){var i=["ff","00","11","22","33","44","55","66","77","88","99","aa","bb","cc","dd","ee"];return-1!=i.indexOf(e)&&-1!=i.indexOf(t)&&-1!=i.indexOf(n)&&-1!=i.indexOf(o)}(o,i,a,t=z(Math.round(t[3])));return n?l?"#"+o.charAt(0)+i.charAt(0)+a.charAt(0):"#"+o+i+a:l?"#"+o.charAt(0)+i.charAt(0)+a.charAt(0)+t.charAt(0):"#"+o+i+a+t},E.exports.num=function(e){var t=T(e);return 3==t.length?t.push(255):t[3]=Math.round(t[3]),(t[3]<<24>>>0|t[0]<<16|t[1]<<8|t[2])>>>0};const M=E.exports,B=(e,t)=>{t.forEach((t=>{!1===e.has(t)&&e.add(t)}))},q=(e,t=document)=>{if(t instanceof Document||t instanceof HTMLElement||t instanceof ShadowRoot){const n=new Set;B(n,t.querySelectorAll(e));const o=t.querySelectorAll('[class*="hydrated"]');for(let t=0;t<o.length;t++){const i=o[t].shadowRoot;B(n,q(e,"object"==typeof i&&null!==i?i:o[t]))}return Array.from(n)}throw new Error("The parameter document for the method querySelectorAll is not type of Document, HTMLElement or ShadowRoot.")},$=(e,t=document)=>{if(t instanceof Document||t instanceof HTMLElement||t instanceof ShadowRoot){let n=t.querySelector(e);if(null===n){const o=t.querySelectorAll('[class*="hydrated"]');for(let t=0;t<o.length;t++){const i=o[t].shadowRoot;if(n=$(e,"object"==typeof i&&null!==i?i:o[t]),null!==n)break}}return n}throw new Error("The parameter document for the method querySelector is not type of Document, HTMLElement or ShadowRoot.")},I=/\[object Object\]/,P=(e,t)=>{"string"==typeof e&&I.test(e)||t()},W=(e,t)=>{"string"==typeof e&&""===e||t()},R=(e,t)=>{(0,i.a)()&&(i.L.debug([e,t]),i.L.debug("\u2191 We propagate the (submit) event to this target.")),Object.defineProperty(e,"target",{value:t,writable:!1})},J=(e,t,n,o={})=>{var i,a;void 0===e.nextHooks&&(e.nextHooks=new Map),void 0===e.nextState&&(e.nextState=new Map),e.nextHooks.get(t)instanceof Map==0&&e.nextHooks.set(t,new Map),"function"==typeof o.afterPatch&&(null===(i=e.nextHooks.get(t))||void 0===i||i.set("afterPatch",o.afterPatch)),"function"==typeof o.beforePatch&&(null===(a=e.nextHooks.get(t))||void 0===a||a.set("beforePatch",o.beforePatch)),e.nextState.set(t,n),(e=>{var t,n,o;null===(t=e.nextHooks)||void 0===t||t.forEach(((t,n)=>{var o;const i=t.get("beforePatch");"function"==typeof i&&i(null===(o=e.nextState)||void 0===o?void 0:o.get(n),e.nextState,e,n)})),(null===(n=e.nextState)||void 0===n?void 0:n.size)>0&&(e.state=Object.assign(Object.assign({},e.state),Object.fromEntries(e.nextState)),delete e.nextState,null===(o=e.nextHooks)||void 0===o||o.forEach(((t,n)=>{const o=t.get("afterPatch");"function"==typeof o&&o(e.state[n],e.state,e,n)}))),delete e.nextHooks})(e)},K=(e,t,n,o)=>{c(`[${e.constructor.name}] The property value: (${n}) for '${t}' is not valid. Allowed values are: ${Array.from(o).join(", ")}`)};function D(e,t,n,o,i,a={}){n(i)?J(e,t,i,a.hooks):void 0===i&&!0!==a.required&&n(a.defaultValue)?J(e,t,a.defaultValue,a.hooks):(a.required||o.add(null),K(e,t,i,o))}const V=(e,t,n,o)=>{D(e,t,(e=>"boolean"==typeof e),new Set(["Boolean {true, false}"]),n,o)},F=(e,t,n,o={})=>{const i="number"==typeof o.minLength?null==o?void 0:o.minLength:0;D(e,t,(e=>"string"==typeof e&&e.length>=i&&(void 0===(null==o?void 0:o.maxLength)||e.length<=o.maxLength)),new Set(["String"]),n,o)},U=(e,t,n,o)=>{D(e,t,(e=>"number"==typeof e&&(void 0===(null==o?void 0:o.min)||"number"==typeof(null==o?void 0:o.min)&&e>=o.min)&&(void 0===(null==o?void 0:o.max)||"number"==typeof(null==o?void 0:o.max)&&e<=o.max)),new Set(["Number"]),n,o)},Y=(e,t,n,o,a=(e=>e==e),l={})=>{W(o,(()=>{P(o,(()=>{void 0===o&&(o=[]);try{try{o=ne(o)}catch(e){}if(Array.isArray(o)){const r=o.find((e=>!n(e)));void 0===r&&a(o)?J(e,t,o,l.hooks):P(r,(()=>{throw i.L.debug(r),new Error("\u2191 The schema for the property (_options) is not valid. The value will not be changed.")}))}else P(o,(()=>{throw i.L.debug(o),new Error("\u2191 The schema for the property (_options) is not valid. The value will not be changed.")}))}catch(e){i.L.debug(e)}}))}))},Z=/^(true|false)$/,G=/^-?(0|[1-9]\d*)$/,Q=/^-?(0.|[1-9]\d*.)\d*[1-9]$/,X=e=>{const t=typeof e,n=`${e}`;if("string"==typeof e)if(Z.test(e))e="true"===e;else if(G.test(e))e=parseInt(e);else if(Q.test(e))e=parseFloat(e);else if(te.test(e))try{e=ne(e)}catch(e){}return t!==typeof e&&c(`You have used a stringified property value (${n} to ${JSON.stringify(e)}) which type switched from ${t} to ${typeof e}!`),e},ee=e=>{try{return JSON.stringify(e).replace(/"/g,"'")}catch(_){throw i.L.warn(["stringifyJson",e]),i.L.error("\u2191 The JSON could not be converted to a string. A stringifiable JSON is expected."),new Error}},te=/^[{[]/,ne=e=>{if("string"==typeof e)try{return JSON.parse(e)}catch(_){if(te.test(e))try{return JSON.parse(e.replace(/'/g,'"'))}catch(_){i.L.warn(["parseJson",e]),i.L.error("\u2191 The JSON string could not be parsed. Make sure that single quotes in the text are escaped (&#8216;).")}}throw new Error},oe=e=>"boolean"==typeof e?!0===e?"true":"false":void 0,ie=e=>"string"==typeof e?e:oe(e),ae=(e,t)=>$(e,t||(0,i.g)()),le=(e,t)=>q(e,t||(0,i.g)());let re=null;const se=()=>(re=re||{backgroundColor:"#00000000",color:"#00000000",domNode:(0,i.g)().body,level:"Fail",score:1},re),de=/(\d+, ){3}0\)/,ce=(e,t=se())=>{const n=getComputedStyle(e),o=de.test(n.backgroundColor)?t.backgroundColor:M.hex(n.backgroundColor),a=de.test(n.color)?t.color:M.hex(n.color),l=N(o,a),r={backgroundColor:o,color:a,domNode:e,level:A(l),score:l};return l<4.5&&i.L.error(["Color-Contrast-Error",{backgroundColor:r.backgroundColor,color:r.color,level:r.level,score:r.score},r.domNode]),r},he=(e,t=se())=>{t.domNode instanceof HTMLElement&&(t=ce(t.domNode,t));const n=t.domNode.querySelector(e);if(null===n){const n=t.domNode.querySelectorAll('[class="hydrated"]');for(let o=0;o<n.length&&(t.domNode=n[o],null===(t=he(e,t)).domNode);o++);return t}return ce(n,t)};class ue{static queryHtmlElementColors(e,t,n=!1,o=!0){let a=null;if(!0===n||!1===ue.executionLock)if(!1===n&&(ue.cache.clear(),ue.cache.set(t.domNode,t),ue.executionLock=!0,!0===o&&i.L.debug("[KoliBriUtils] Color contrast analysis started...")),e===t.domNode)a=t;else{const n=new Set;if(t.domNode.shadowRoot){const e=t.domNode.shadowRoot.children;for(let t=0;t<e.length;t++)n.add(e[t])}const o=t.domNode;if("function"==typeof o.assignedNodes){const e=o.assignedNodes();for(let t=0;t<e.length;t++)e[t]instanceof HTMLElement&&n.add(e[t])}const i=t.domNode.children;for(let e=0;e<i.length;e++)n.add(i[e]);const l=Array.from(n);for(let r=0;r<l.length;r++){let n=ue.cache.get(l[r]);void 0===n&&(n=ce(l[r],t)),ue.cache.set(l[r],n);const o=ue.queryHtmlElementColors(e,n,!0,!1);if(null!==o){a=o;break}}}else i.L.debug("[KoliBriUtils] Call aborted because a color contrast analysis is currently being executed.");return!1===n&&(!0===o&&i.L.debug(`[KoliBriUtils] Color contrast analysis finished (${ue.cache.size} DOM elements are analysed).`),ue.executionLock=!1,ue.cache.clear()),a}}ue.executionLock=!1,ue.cache=new Map;class fe{}fe.getCssStyle=o.p,fe.patchTheme=o.x,fe.patchThemeTag=o.z,fe.querySelector=ae,fe.querySelectorAll=le,fe.stringifyJson=ee},28968:(e,t,n)=>{n.d(t,{S:()=>l,a:()=>a,b:()=>o,c:()=>r,h:()=>d,i:()=>i,p:()=>s,s:()=>c});const o=e=>"object"==typeof e&&null!==e,i=(e,t=0)=>"string"==typeof e&&e.length>=t,a=e=>{if("object"!=typeof e||null===e)return i(e,1);for(const t in e)if(!1===i(t,1))return!1;return!0},l=new Event("StateChange"),r=(e,t)=>{o(e)&&e&&(e.focus=e=>null==t?void 0:t.focus(e))};let s="development";try{s="production"}catch(h){s="production"}const d=(e,t,n)=>{if(e&&t&&"string"==typeof n){const o=e.querySelector(`[slot="${n}"]`);o&&t.appendChild(o)}},c=e=>""===e},9820:(e,t,n)=>{n.d(t,{a:()=>a,r:()=>l});var o=n(20444);const i=new Set;function a(e){i.has(e)?o.L.error(`There already is a nav element with the label "${e}"`,{forceLog:!0}):i.add(e)}function l(e){i.delete(e)}},59712:(e,t,n)=>{n.d(t,{w:()=>i});var o=n(70728);const i=(e,t,n)=>{(0,o.g)(t,"_links",(e=>"object"==typeof e&&("string"==typeof e._href||"string"==typeof e._label)),n),(0,o.h)(e,t.state._links.length)}}}]);