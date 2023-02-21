/*! For license information please see 1521.79d212a3.js.LICENSE.txt */
"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[1521],{81521:(t,e,a)=>{a.r(e),a.d(e,{kol_nav:()=>d});var o=a(43206),i=a(80731),r=a(78477),n=a(23677),l=a(42562);const s=[],c=t=>{const e=s.indexOf(t);e>=0&&s.splice(e,1)},d=class{constructor(t){(0,o.r)(this,t),this.onClick=t=>{t._active=!1===t._active,this.state=Object.assign({},this.state)},this.hasActiveChild=t=>!!(Array.isArray(t._children)&&t._children.length>0)&&t._children.some(this.hasActiveChild),this.linkList=t=>(0,o.h)("ul",{class:{flex:0===t.deep&&"horizontal"===this.state._orientation},part:`nav ${this.state._orientation}`},t.links.map(((e,a)=>(0,o.h)("li",{key:a,part:`li ${0===t.deep?this.state._orientation:"vertical"}${e._active?" selected":""}${a<t.links.length-1?"":" last"}`},Array.isArray(e._children)&&e._children.length>0?(0,o.h)("div",{class:"h-full"},(0,o.h)("div",{class:{"h-full":!0}},(0,o.h)("kol-link-wc",{class:"block w-full h-full",exportparts:"icon,link,span"+(!0===e._active?",selected":""),_ariaLabel:!0===this.state._compact||!0===e._iconOnly?e._label:void 0,_ariaExpanded:!0===e._active,_disabled:e._disabled,_href:"javascript:void(0)",_icon:!0===this.state._collapsible?!0===e._active?"fa-solid fa-minus":"fa-solid fa-plus":"string"==typeof e._icon?e._icon:"fa-solid fa-link-slash",_iconOnly:!0===this.state._compact||!0===e._iconOnly,_label:e._label,onClick:()=>this.onClick(e)})),!0===e._active&&(0,o.h)("div",{class:{expanded:!0,active:!0===e._active,"active-child":this.hasActiveChild(e),"absolute ":0===t.deep&&"horizontal"===this.state._orientation}},(0,o.h)(this.linkList,{links:e._children,deep:t.deep+1}))):(0,o.h)("div",{class:{"h-full":!0,"text-center":!0===this.state._compact||!0===e._iconOnly}},(0,o.h)("kol-link-wc",{class:{"block w-full h-full":!0,active:!0===e._active},exportparts:"icon,link,span"+(!0===e._active?",selected":""),_ariaCurrent:!0===e._active&&this.state._ariaCurrentValue,_ariaLabel:!0===this.state._compact||!0===e._iconOnly?e._label:void 0,_href:e._href,_icon:"string"==typeof e._icon?e._icon:"fa-solid fa-link-slash","_icon-only":!0===this.state._compact||!0===e._iconOnly,_label:e._label,_on:e._on,_selector:e._selector,_tooltipAlign:e._tooltipAlign,_target:e._target})))))),this._ariaCurrentValue=!1,this._ariaLabel=void 0,this._collapsible=!1,this._compact=!1,this._hasCompactButton=!1,this._orientation="vertical",this._links=void 0,this._variant="primary",this.state={_ariaCurrentValue:!1,_ariaLabel:"\u2026",_collapsible:!0,_hasCompactButton:!1,_links:[],_orientation:"vertical",_variant:"primary"}}render(){let t=this.state._hasCompactButton;return"horizontal"===this.state._orientation&&!0===this.state._hasCompactButton&&(t=!1,(0,i.d)("[KolNav] Wenn eine horizontale Navigation verwendet wird, kann die Option _hasCompactButton nicht aktiviert werden.")),(0,o.h)(o.H,null,(0,o.h)("div",{class:{[this.state._orientation]:!0,"inline-block":!0===this.state._compact,[this.state._variant]:!0}},(0,o.h)("nav",{"aria-label":this.state._ariaLabel,id:"nav",part:"nav"},(0,o.h)(this.linkList,{links:this.state._links,deep:0})),t&&(0,o.h)("div",{class:"mt-2 w-full text-center"},(0,o.h)("kol-button",{exportparts:"button,ghost",_ariaControls:"nav",_ariaExpanded:!0===this.state._compact,_ariaLabel:(0,l.a)(this.state._compact?"kol-nav-maximize":"kol-nav-minimize"),_icon:this.state._compact?"fa-solid fa-angles-right":"fa-solid fa-angles-left",_iconOnly:!0,_label:(0,l.a)(this.state._compact?"kol-nav-maximize":"kol-nav-minimize"),_on:{onClick:()=>{this.state=Object.assign(Object.assign({},this.state),{_compact:!1===this.state._compact})}},_tooltipAlign:"right",_variant:"ghost"}))))}validateAriaCurrentValue(t){(0,r.a)(this,"_ariaCurrentValue",(t=>!0===t||"date"===t||"location"===t||"page"===t||"step"===t||"time"===t),new Set(["boolean","String {data, location, page, step, time}"]),t)}validateAriaLabel(t){(0,r.w)(this,"_ariaLabel",t,{hooks:{afterPatch:()=>{s.includes(this.state._ariaLabel)&&(0,i.d)(`[KolNav] Das Aria-Label "${this.state._ariaLabel}" wurde f\xfcr die Rolle Navigation mehrfach verwendet!`),s.push(this.state._ariaLabel)},beforePatch:()=>{c(this.state._ariaLabel)}},required:!0}),(0,i.b)(t)}validateCollapsible(t){(0,r.b)(this,"_collapsible",t)}validateCompact(t){(0,r.b)(this,"_compact",t)}validateHasCompactButton(t){(0,r.b)(this,"_hasCompactButton",t)}validateLinks(t){(0,n.w)("KolNav",this,t),(0,i.d)("[KolNav] Die Navigationsstruktur wird noch nicht rekursiv validiert.")}validateOrientation(t){(0,r.a)(this,"_orientation",(t=>"horizontal"===t||"vertical"===t),new Set(["Orientation {horizontal, vertical}"]),t,{defaultValue:"vertical"})}validateVariant(t){(0,r.a)(this,"_variant",(t=>"primary"===t||"secondary"===t),new Set(["KoliBriNavVariant {primary, secondary}"]),t,{defaultValue:"primary"})}componentWillLoad(){this.validateAriaCurrentValue(this._ariaCurrentValue),this.validateAriaLabel(this._ariaLabel),this.validateCollapsible(this._collapsible),this.validateCompact(this._compact),this.validateHasCompactButton(this._hasCompactButton),this.validateLinks(this._links),this.validateOrientation(this._orientation),this.validateVariant(this._variant)}disconnectedCallback(){c(this.state._ariaLabel)}static get watchers(){return{_ariaCurrentValue:["validateAriaCurrentValue"],_ariaLabel:["validateAriaLabel"],_collapsible:["validateCollapsible"],_compact:["validateCompact"],_hasCompactButton:["validateHasCompactButton"],_links:["validateLinks"],_orientation:["validateOrientation"],_variant:["validateVariant"]}}};d.style={default:":host{--kolibri-border-color:#e0e0e0;--kolibri-border-radius:0.125rem;--kolibri-border-width:1px;--kolibri-color-error:#f44336;--kolibri-color-info:#2196f3;--kolibri-color-success:#4caf50;--kolibri-color-warning:#ff9800;--kolibri-color-primary:#3f51b5;--kolibri-color-secondary:#ff4081;--kolibri-color-normal:#9e9e9e;--kolibri-color-danger:#f44336;--kolibri-color-ghost:#f5f5f5;--kolibri-color-disabled:#bdbdbd;--kolibri-color-text:#222222;--kolibri-color-visited:#9c27b0;--kolibri-font-family:Verdana, Arial, Tahoma, Helvetica, sans-serif;--kolibri-font-size:16px;--kolibri-spacing:0.25rem}*{hyphens:auto;letter-spacing:inherit;word-break:break-word;word-spacing:inherit}*{box-sizing:border-box;font-family:var(--kolibri-font-family)}kol-icon{color:inherit}kol-span-wc{display:grid;place-items:center;width:100%}kol-span-wc>span{display:flex;gap:var(--kolibri-spacing);place-items:center}a,button,input,select,textarea{cursor:pointer}a.icon-only>kol-span-wc>span>span,button.icon-only>kol-span-wc>span>span{display:none}a{display:inline-flex;place-items:baseline}button{background-color:transparent;border-width:0}h1,h2,h3,h4,h5,h6{font-size:1rem;margin:0}:host>div{display:inline-block}"}},78477:(t,e,a)=>{a.d(e,{K:()=>at,a:()=>H,b:()=>j,c:()=>C,d:()=>B,e:()=>z,f:()=>E,g:()=>O,h:()=>K,i:()=>tt,j:()=>W,k:()=>I,l:()=>et,m:()=>D,n:()=>Q,o:()=>A,p:()=>J,q:()=>F,r:()=>c,s:()=>M,t:()=>X,u:()=>V,w:()=>$});var o=a(58272),i=a(80731),r=a(21591);const n=(t,e)=>{e.forEach((e=>{!1===t.has(e)&&t.add(e)}))},l=(t,e=document)=>{if(e instanceof Document||e instanceof HTMLElement||e instanceof ShadowRoot){const a=new Set;n(a,e.querySelectorAll(t));const o=e.querySelectorAll('[class*="hydrated"]');for(let e=0;e<o.length;e++){const i=o[e].shadowRoot;n(a,l(t,"object"==typeof i&&null!==i?i:o[e]))}return Array.from(a)}throw new Error("The parameter document for the method querySelectorAll is not type of Document, HTMLElement or ShadowRoot.")},s=(t,e=document)=>{if(e instanceof Document||e instanceof HTMLElement||e instanceof ShadowRoot){let a=e.querySelector(t);if(null===a){const o=e.querySelectorAll('[class*="hydrated"]');for(let e=0;e<o.length;e++){const i=o[e].shadowRoot;if(a=s(t,"object"==typeof i&&null!==i?i:o[e]),null!==a)break}}return a}throw new Error("The parameter document for the method querySelector is not type of Document, HTMLElement or ShadowRoot.")};var c=b,d=b,h=function(t){var e=v(t);return{r:e[0],g:e[1],b:e[2],a:3==e.length?255:Math.round(e[3])}},u=function(t){var e=v(t);return 3==e.length&&e.push(255),255==e[3]?"rgb("+e[0]+", "+e[1]+", "+e[2]+")":0==e[3]?"rgba("+e[0]+", "+e[1]+", "+e[2]+", 0)":"rgba("+e[0]+", "+e[1]+", "+e[2]+", "+String(e[3]/255).substr(1)+")"},f=function(t){3==(e=v(t)).length&&e.push(255);var e,a=255==e[3],o=m(e[0]),i=m(e[1]),r=m(e[2]),n=function(t,e,a,o){var i=["ff","00","11","22","33","44","55","66","77","88","99","aa","bb","cc","dd","ee"];return-1!=i.indexOf(t)&&-1!=i.indexOf(e)&&-1!=i.indexOf(a)&&-1!=i.indexOf(o)}(o,i,r,e=m(Math.round(e[3])));return a?n?"#"+o.charAt(0)+i.charAt(0)+r.charAt(0):"#"+o+i+r:n?"#"+o.charAt(0)+i.charAt(0)+r.charAt(0)+e.charAt(0):"#"+o+i+r+e},p=function(t){var e=v(t);return 3==e.length?e.push(255):e[3]=Math.round(e[3]),(e[3]<<24>>>0|e[0]<<16|e[1]<<8|e[2])>>>0};function b(t){var e=v(t);return 3==e.length?e.concat(255):(e[3]=Math.round(e[3]),e)}function v(t){return"string"==typeof t?function(t){return"red"==t?[255,0,0]:"green"==t?[0,255,0]:"blue"==t?[0,0,255]:"black"==t?[0,0,0]:"white"==t?[255,255,255]:"cyan"==t?[0,255,255]:"gray"==t||"grey"==t?[128,128,128]:"magenta"==t||"pink"==t?[255,0,255]:"yellow"==t?[255,255,0]:void 0}(t=t.toLowerCase())||function(t){var e=t.replace(/^#/,""),a=e.length;if(3==a||4==a){var o=g(e[0]),i=g(e[1]),r=g(e[2]),n=3==a?255:g(e[3]);if(isNaN(o)||isNaN(i)||isNaN(r)||isNaN(n))return;return[o,i,r,n]}}(t)||function(t){var e=t.replace(/^#/,""),a=e.length;if(6==a||8==a){var o=g(e.slice(0,2)),i=g(e.slice(2,4)),r=g(e.slice(4,6)),n=6==a?255:g(e.slice(6,8));if(isNaN(o)||isNaN(i)||isNaN(r)||isNaN(n))return;return[o,i,r,n]}}(t)||function(t){if("rgb("==t.substr(0,4)){var e=(t=t.match(/^rgb\(([^)]+)\)/)[1]).split(/ *, */).map(Number),a=_(e[0],!0),o=_(e[1],!0),i=_(e[2],!0);if(-1!=a&&-1!=o&&-1!=i)return[a,o,i,255]}}(t)||function(t){if("rgba("==t.substr(0,5)){var e=(t=t.match(/^rgba\(([^)]+)\)/)[1]).split(/ *, */).map(Number),a=_(e[0],!0),o=_(e[1],!0),i=_(e[2],!0),r=_(255*e[3]);if(-1!=a&&-1!=o&&-1!=i&&-1!=r)return[a,o,i,r]}}(t)||[0,0,0,255]:function(t){if("[object Object]"===Object.prototype.toString.call(t)&&Object.getPrototypeOf(t)===Object.getPrototypeOf({})){var e=_(null!=t.r?t.r:null!=t.red?t.red:0,!0),a=_(null!=t.g?t.g:null!=t.green?t.green:0,!0),o=_(null!=t.b?t.b:null!=t.blue?t.blue:0,!0),i=_(null!=t.a?t.a:null!=t.alpha?t.alpha:255,!0);if(-1!=e&&-1!=a&&-1!=o&&-1!=i)return[e,a,o,i]}}(t)||function(t){if(Array.isArray(t)&&(3==t.length||4==t.length)){var e=_(t[0],!0),a=_(t[1],!0),o=_(t[2],!0),i=_(null!=t[3]?t[3]:255,!0);if(-1!=e&&-1!=a&&-1!=o&&-1!=i)return[e,a,o,i]}}(t)||function(t){if("number"==typeof t&&Math.floor(t)==t&&t<=4294967295&&t>=0)return[t>>16&255,t>>8&255,255&t,t>>24&255]}(t)||[0,0,0,255]}function m(t){var e=t.toString(16);return 1==e.length?"0"+e:e}function g(t){return 1==t.length?parseInt(t+t,16):parseInt(t,16)}function _(t,e){return"number"!=typeof t||!0===e&&Math.floor(t)!==t?-1:t>=0&&t<=255?t:-1}c.arr=d,c.obj=h,c.css=u,c.hex=f,c.num=p;var y=1/12.92;function k(t){return Math.pow((t+.055)/1.055,2.4)}function w(t){var e=t[0]/255,a=t[1]/255,o=t[2]/255;return.2126*(e<=.03928?e*y:k(e))+.7152*(a<=.03928?a*y:k(a))+.0722*(o<=.03928?o*y:k(o))}function L(t){var e=255;8===(t=t.replace(/^#/,"")).length&&(e=parseInt(t.slice(6,8),16),t=t.substring(0,6)),4===t.length&&(e=parseInt(t.slice(3,4).repeat(2),16),t=t.substring(0,3)),3===t.length&&(t=t[0]+t[0]+t[1]+t[1]+t[2]+t[2]);var a=parseInt(t,16);return[a>>16,a>>8&255,255&a,e]}function x(t,e){return function(t,e){return(Math.max(t,e)+.05)/(Math.min(t,e)+.05)}(w(t),w(e))}function C(t,e){return x(L(t),L(e))}function S(t){return t>=7?"AAA":t>=4.5?"AA":t>=3?"AA Large":"Fail"}const N=/\[object Object\]/,A=(t,e)=>{"string"==typeof t&&N.test(t)||e()},O=(t,e)=>{"string"==typeof t&&""===t||e()},E=(t,e)=>{(0,r.b)()&&(r.L.debug([t,e]),r.L.debug("\u2191 We propagate the (submit) event to this target.")),Object.defineProperty(t,"target",{value:e,writable:!1})},M=(t,e,a,o={})=>{var i,r;void 0===t.nextHooks&&(t.nextHooks=new Map),void 0===t.nextState&&(t.nextState=new Map),t.nextState.get(e)!==a&&(t.nextHooks.get(e)instanceof Map==0&&t.nextHooks.set(e,new Map),"function"==typeof o.afterPatch&&(null===(i=t.nextHooks.get(e))||void 0===i||i.set("afterPatch",o.afterPatch)),"function"==typeof o.beforePatch&&(null===(r=t.nextHooks.get(e))||void 0===r||r.set("beforePatch",o.beforePatch)),t.nextState.set(e,a),(t=>{var e,a,o;null===(e=t.nextHooks)||void 0===e||e.forEach(((e,a)=>{var o;const i=e.get("beforePatch");"function"==typeof i&&i(null===(o=t.nextState)||void 0===o?void 0:o.get(a),t.nextState,t,a)})),(null===(a=t.nextState)||void 0===a?void 0:a.size)>0&&(t.state=Object.assign(Object.assign({},t.state),Object.fromEntries(t.nextState)),delete t.nextState,null===(o=t.nextHooks)||void 0===o||o.forEach(((e,a)=>{const o=e.get("afterPatch");"function"==typeof o&&o(t.state[a],t.state,t,a)}))),delete t.nextHooks})(t))},H=(t,e,a,o,r,n={})=>{a(r)?M(t,e,r,null==n?void 0:n.hooks):void 0===r||null===r&&(void 0===(null==n?void 0:n.required)||!1===(null==n?void 0:n.required))?M(t,e,null==n?void 0:n.defaultValue,null==n?void 0:n.hooks):(void 0!==(null==n?void 0:n.required)&&!1!==(null==n?void 0:n.required)||o.add(null),((t,e,a,o)=>{(0,i.d)(`[${t.constructor.name}] Der Property-Wert (${a}) f\xfcr '${e}' ist nicht valide. Folgende Werte sind erlaubt: ${Array.from(o).join(", ")}`)})(t,e,r,o))},j=(t,e,a,o)=>{H(t,e,(t=>"boolean"==typeof t),new Set(["Boolean {true, false}"]),a,o)},$=(t,e,a,o={})=>{const i="number"==typeof o.minLength?null==o?void 0:o.minLength:0;H(t,e,(t=>"string"==typeof t&&t.length>=i),new Set([`String (Mindestl\xe4nge ${i})`]),a,o)},z=(t,e,a,o)=>{H(t,e,(t=>"number"==typeof t&&(void 0===(null==o?void 0:o.min)||"number"==typeof(null==o?void 0:o.min)&&t>=o.min)&&(void 0===(null==o?void 0:o.max)||"number"==typeof(null==o?void 0:o.max)&&t<=o.max)),new Set(["Number"]),a,o)},B=(t,e,a,o,i=(t=>t==t),n={})=>{O(o,(()=>{A(o,(()=>{void 0===o&&(o=[]);try{try{o=J(o)}catch(t){}if(Array.isArray(o)){const l=o.find((t=>!a(t)));void 0===l&&i(o)?M(t,e,o,n.hooks):A(l,(()=>{throw r.L.debug(l),new Error("\u2191 Das Schema f\xfcr das Property (_options) ist nicht valide. Der Wert wird nicht ge\xe4ndert.")}))}else A(o,(()=>{throw r.L.debug(o),new Error("\u2191 Das Schema f\xfcr das Property (_options) ist nicht valide. Der Wert wird nicht ge\xe4ndert.")}))}catch(t){r.L.debug(t)}}))}))},T=/^(true|false)$/,q=/^-?(0|[1-9]\d*)$/,P=/^-?(0.|[1-9]\d*.)\d*[1-9]$/,D=t=>{const e=typeof t,a=`${t}`;if("string"==typeof t)if(T.test(t))t="true"===t;else if(q.test(t))t=parseInt(t);else if(P.test(t))t=parseFloat(t);else if(R.test(t))try{t=J(t)}catch(t){}return e!==typeof t&&(0,i.d)(`You have used a stringified property value (${a} to ${JSON.stringify(t)}) which type switched from ${e} to ${typeof t}!`),t},V=t=>{try{return JSON.stringify(t).replace(/"/g,"'")}catch(e){throw r.L.warn(["stringifyJson",t]),r.L.error("\u2191 Das JSON konnte nicht in einen String umgewandelt werden. Es wird ein stringifizierbares JSON erwartet."),new Error}},R=/^[{[]/,J=t=>{if("string"==typeof t)try{return JSON.parse(t)}catch(e){if(R.test(t))try{return JSON.parse(t.replace(/'/g,'"'))}catch(e){r.L.warn(["parseJson",t]),r.L.error("\u2191 Der JSON-String konnte nicht geparsed werden. Achten Sie darauf, dass einfache Anf\xfchrungszeichen im Text maskiert werden (&#8216;).")}}throw new Error},K=t=>"boolean"==typeof t?!0===t?"true":"false":void 0,W=t=>"string"==typeof t?t:K(t),I=(t,e)=>s(t,e||(0,r.g)()),F=(t,e)=>l(t,e||(0,r.g)());let U=null;const Y=()=>(U=U||{backgroundColor:"#00000000",color:"#00000000",domNode:(0,r.g)().body,level:"Fail",score:1},U),G=/(\d+, ){3}0\)/,Q=(t,e=Y())=>{const a=getComputedStyle(t),o=G.test(a.backgroundColor)?e.backgroundColor:c.hex(a.backgroundColor),i=G.test(a.color)?e.color:c.hex(a.color),n=C(o,i),l={backgroundColor:o,color:i,domNode:t,level:S(n),score:n};return n<4.5&&r.L.error(["Color-Contrast-Error",{backgroundColor:l.backgroundColor,color:l.color,level:l.level,score:l.score},l.domNode]),l},X=(t,e=Y())=>{e.domNode instanceof HTMLElement&&(e=Q(e.domNode,e));const a=e.domNode.querySelector(t);if(null===a){const a=e.domNode.querySelectorAll('[class="hydrated"]');for(let o=0;o<a.length&&(e.domNode=a[o],null===(e=X(t,e)).domNode);o++);return e}return Q(a,e)},Z=(t,e=window)=>{t instanceof HTMLElement?(e.scrollTo({behavior:"smooth",top:t.getBoundingClientRect().top+(0,r.a)().pageYOffset-50}),t.focus()):(0,i.d)("Das HTMLElement ist nicht valide, zu dem gescrollt werden soll.")},tt=(t,e)=>{if((t instanceof Document||t instanceof HTMLElement||t instanceof ShadowRoot)&&"string"==typeof e){(0,i.d)("Bei der Methode querySelectorAll wurden die Parameter document, selector in selector, document getauscht, da der Parameter selector nicht, allerdings der Parameter document optional sein kann.");const a=`${e}`;e=t,t=a}if("string"==typeof t){const a=I(t,e);a instanceof HTMLElement?Z(a):(0,i.d)(`Es konnte kein HTMLElement mit dem Selector (${t}) gefunden werden, zu dem gescrollt werden soll.`)}else(0,i.d)("Der Selector ist nicht valide, zu dem gescrollt werden soll.")};class et{static queryHtmlElementColors(t,e,a=!1,o=!0){let i=null;if(!0===a||!1===et.executionLock)if(!1===a&&(et.cache.clear(),et.cache.set(e.domNode,e),et.executionLock=!0,!0===o&&r.L.debug("[KoliBriUtils] Color contrast analysis started...")),t===e.domNode)i=e;else{const a=new Set;if(e.domNode.shadowRoot){const t=e.domNode.shadowRoot.children;for(let e=0;e<t.length;e++)a.add(t[e])}const o=e.domNode;if("function"==typeof o.assignedNodes){const t=o.assignedNodes();for(let e=0;e<t.length;e++)t[e]instanceof HTMLElement&&a.add(t[e])}const r=e.domNode.children;for(let t=0;t<r.length;t++)a.add(r[t]);const n=Array.from(a);for(let l=0;l<n.length;l++){let a=et.cache.get(n[l]);void 0===a&&(a=Q(n[l],e)),et.cache.set(n[l],a);const o=et.queryHtmlElementColors(t,a,!0,!1);if(null!==o){i=o;break}}}else r.L.debug("[KoliBriUtils] Call aborted because a color contrast analysis is currently being executed.");return!1===a&&(!0===o&&r.L.debug(`[KoliBriUtils] Color contrast analysis finished (${et.cache.size} DOM elements are analysed).`),et.executionLock=!1,et.cache.clear()),i}}et.executionLock=!1,et.cache=new Map;class at{}at.patchTheme=o.p,at.patchThemeTag=o.a,at.querySelector=I,at.querySelectorAll=F,at.scrollByHTMLElement=Z,at.scrollBySelector=tt,at.stringifyJson=V},23677:(t,e,a)=>{a.d(e,{w:()=>r});var o=a(80731),i=a(78477);const r=(t,e,a)=>{(0,i.d)(e,"_links",(t=>"object"==typeof t&&"string"==typeof t._label),a),(0,o.u)(t,e.state._links.length)}}}]);