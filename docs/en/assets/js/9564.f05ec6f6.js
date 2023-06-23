/*! For license information please see 9564.f05ec6f6.js.LICENSE.txt */
"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[9564],{99072:(e,t,n)=>{n.d(t,{a:()=>i,b:()=>m,c:()=>b,d:()=>c,e:()=>l,f:()=>u,g:()=>p,h:()=>d,u:()=>f});var a=n(31391);const r=new Set,i=e=>{!1===r.has(e)&&(r.add(e),a.L.debug(e,{classifier:"\u270b a11y",overwriteStyle:"; background-color: #09f"}))},o=new Set,l=e=>{!1===o.has(e)&&(o.add(e),a.L.warn(e,{classifier:"\ud83d\udd25 deprecated",forceLog:!0,overwriteStyle:"; background-color: #f00"}))},s=new Set,c=e=>{!1===s.has(e)&&(s.add(e),a.L.debug(e,{classifier:"\ud83d\udcbb dev",overwriteStyle:"; background-color: #f09"}))},d=e=>{!1===s.has(e)&&(s.add(e),a.L.warn(e,{classifier:"\ud83d\udcbb dev",overwriteStyle:"; background-color: #f09"}))},h=new Set,u=(e,t=!1)=>{!1===h.has(e)&&(h.add(e),e+=!0===t?" \u2705":"",a.L.debug(e,{classifier:"\ud83c\udf1f feature",overwriteStyle:"; background-color: #309"}))};c("Wir freuen uns \xfcber jedes Feedback, Kommentare, Screenshots oder Demo-Links von einer auf KoliBri-basierenden Anwendung (kolibri@itzbund.de). Vielen Dank!");const g=new Set,f=e=>{!1===g.has(e)&&(g.add(e),a.L.debug(e,{classifier:"\ud83d\udcd1 ui/ux",overwriteStyle:"; background-color: #060;"}))},p=()=>{i('"Disabled" schr\xe4nkt die Zug\xe4nglichkeit und Sichtbarkeit ein. Wir empfehlen aus Sicht der Barrierefreiheit readonly- statt disabled-Attribut zu verwenden.\n- https://uxdesign.cc/is-it-ok-to-grey-out-disabled-buttons-8afa74a0fae')},m=e=>{"string"==typeof e&&""!==e||i("Manche Strukturelemente, wie bspw. der nav-Tag, k\xf6nnen mehrfach in einer Webseite verwendet werden. Damit die gleichnamigen Strukturelemente voneinander unterschieden werden k\xf6nnen, ist es erforderlich ein Aria-Label zu setzen.\n- https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/Navigation_Role#accessibility_concerns")},b=(e,t=8)=>{t>7&&f(`[${e}] Innerhalb von Navigationsstrukturen wird empfohlen nicht mehr als 7 Men\xfcpunkte zu verwenden.\n\nLinks:\n- https://de.ryte.com/wiki/Millersche_Zahl\n- https://de.wikipedia.org/wiki/Millersche_Zahl`)}},93174:(e,t,n)=>{n.d(t,{a:()=>c});var a=n(68861),r=n(99072);const i={error:"Fehler",warning:"Warnung",info:"Hinweis",success:"Erfolg",message:"Nachricht",close:"Schlie\xdfen","form-description":"Formular-Felder, die mit einem Sternchen (*) gekennzeichnet sind, sind Pflichtangaben.",of:"von",characters:"Zeichen",new:"Neu","no-entries":"Es sind keine Eintr\xe4ge vorhanden.","change-order":"Sortierung von {{colLabel}} \xe4ndern","action-running":"Aktion wird ausgef\xfchrt...","action-done":"Aktion abgeschlossen","page-first":"Direkt zur ersten Seite","page-back":"Eine Seite zur\xfcck","page-next":"Eine Seite weiter","page-last":"Direkt zur letzten Seite","entries-per-site":"Eintr\xe4ge pro Seite","page-current":"Seite {{page}}","page-selected":"Seite {{page}} ist ausgew\xe4hlt","page-per-site":"{{entries}} Eintr\xe4ge pro Seite","nav-maximize":"Navigation maximieren","nav-minimize":"Navigation minimieren","logo-description":"Logo {{orgShort}}. Bundesadler mit Flaggenstab und Schriftzug {{orgLong}}","open-link-in-tab":"Der Link wird in einem neuen Tab ge\xf6ffnet.","kolibri-logo":"Logo von KoliBri"},o={error:"Error",warning:"Warning",info:"Note",success:"Success",message:"Message",close:"Close","form-description":"Form fields marked with an asterisk (*) are mandatory.",of:"of",characters:"characters",new:"New","no-entries":"No entries available.","change-order":"Change order of {{colLabel}}","action-running":"Action is running...","action-done":"Action done","page-first":"Directly to the first page","page-back":"One page back","page-next":"One page further","page-last":"Directly to the last page","entries-per-site":"Entries per page","page-current":"Page {{page}}","page-selected":"Page {{page}} is selected","page-per-site":"{{entries}} entries per page","nav-maximize":"Maximize","nav-minimize":"Minimize","logo-description":"Logo {{orgShort}}. Federal eagle with flag staff and lettering {{orgLong}}","open-link-in-tab":"The link will open in a new tab.","kolibri-logo":"KoliBri logo"},l=e=>Object.keys(e).reduce(((t,n)=>(t[`kol-${n}`]=e[n],t)),{}),s=new Set([e=>e("en",l(o)),e=>e("de",l(i))]),c=(e,t)=>{const n=(0,a.g)();if(void 0===n)return(0,r.d)("[I18n] I18nService not available! Please call the global register function."),e;let i=n.translate(e,t);return i===e&&((0,r.d)("[I18n] Locales not initialized! Initialize default locales automatically."),s.forEach((e=>e(((e,t)=>(n.addResourceBundle(e,t),e))))),i=n.translate(e,t)),i}},49564:(e,t,n)=>{n.r(t),n.d(t,{kol_nav:()=>d});var a=n(94335),r=n(93174),i=n(99072),o=n(47091),l=n(42321);const s=[],c=e=>{const t=s.indexOf(e);t>=0&&s.splice(t,1)},d=class{constructor(e){(0,a.r)(this,e),this.onClick=e=>{e._active=!e._active,this.state=Object.assign({},this.state)},this.hasActiveChild=e=>!!(Array.isArray(e._children)&&e._children.length>0)&&e._children.some(this.hasActiveChild),this.linkList=e=>(0,a.h)("ul",{class:"list "+(0===e.deep&&"horizontal"===e.orientation?" horizontal":" vertical"),"data-deep":e.deep},e.links.map(((t,n)=>this.li(e.collapsible,e.compact,e.deep,n,t,e.orientation)))),this._ariaCurrentValue=!1,this._ariaLabel=void 0,this._collapsible=!0,this._compact=!1,this._hasCompactButton=!1,this._orientation="vertical",this._links=void 0,this._variant="primary",this.state={_ariaCurrentValue:!1,_ariaLabel:"\u2026",_collapsible:!0,_hasCompactButton:!1,_links:[],_orientation:"vertical",_variant:"primary"}}entry(e,t,n,r,i){return(0,a.h)("div",{class:"entry"},(0,a.h)("kol-button-link-text-switch",{"_has-children":n,"_hide-label":t,_link:r,_selected:i}),n?this.expandButton(e,r,i):"")}expandButton(e,t,n){return(0,a.h)("kol-button-wc",{class:"expand-button",_ariaExpanded:n,_disabled:!e,_icon:"codicon codicon-"+(n?"remove":"add"),_hideLabel:!0,_label:`Untermen\xfc zu ${t._label} ${n?"schlie\xdfen":"\xf6ffnen"}`,_on:{onClick:()=>this.onClick(t)}})}li(e,t,n,r,i,o){const l=Array.isArray(i._children)&&i._children.length>0,s=!!i._active,c=l&&!!i._active;return(0,a.h)("li",{class:{expanded:c,selected:s,"has-children":l},key:r},this.entry(e,t,l,i,s),l&&s?(0,a.h)(this.linkList,{collapsible:e,compact:t,deep:n+1,links:i._children||[],orientation:o}):"")}render(){let e=this.state._hasCompactButton;"horizontal"===this.state._orientation&&!0===this.state._hasCompactButton&&(e=!1,(0,i.h)("[KolNav] Wenn eine horizontale Navigation verwendet wird, kann die Option _hasCompactButton nicht aktiviert werden."));const t=!0===this.state._collapsible,n=!0===this.state._compact,o=this.state._orientation;return(0,a.h)(a.H,null,(0,a.h)("div",{class:{[o]:!0,[this.state._variant]:!0}},(0,a.h)("nav",{"aria-label":this.state._ariaLabel,id:"nav"},(0,a.h)(this.linkList,{collapsible:t,compact:n,deep:0,links:this.state._links,orientation:o})),e&&(0,a.h)("div",{class:"mt-2 w-full compact"},(0,a.h)("kol-button",{_ariaControls:"nav",_ariaExpanded:!n,_icon:n?"codicon codicon-chevron-right":"codicon codicon-chevron-left",_hideLabel:!0,_label:(0,r.a)(n?"kol-nav-maximize":"kol-nav-minimize"),_on:{onClick:()=>{this.state=Object.assign(Object.assign({},this.state),{_compact:!1===this.state._compact})}},_tooltipAlign:"right",_variant:"ghost"}))))}validateAriaCurrentValue(e){(0,o.a)(this,"_ariaCurrentValue",(e=>!0===e||"date"===e||"location"===e||"page"===e||"step"===e||"time"===e),new Set(["boolean","String {data, location, page, step, time}"]),e)}validateAriaLabel(e){(0,o.w)(this,"_ariaLabel",e,{hooks:{afterPatch:()=>{s.includes(this.state._ariaLabel)&&(0,i.d)(`[KolNav] Das Aria-Label "${this.state._ariaLabel}" wurde f\xfcr die Rolle Navigation mehrfach verwendet!`),s.push(this.state._ariaLabel)},beforePatch:()=>{c(this.state._ariaLabel)}},required:!0}),(0,i.b)(e)}validateCollapsible(e){((e,t)=>{(0,o.b)(e,"_collapsible",t)})(this,e)}validateCompact(e){((e,t)=>{(0,o.b)(e,"_compact",t)})(this,e)}validateHasCompactButton(e){((e,t)=>{(0,o.b)(e,"_hasCompactButton",t)})(this,e)}validateLinks(e){(0,l.w)("KolNav",this,e),(0,i.d)("[KolNav] Die Navigationsstruktur wird noch nicht rekursiv validiert.")}validateOrientation(e){(0,o.a)(this,"_orientation",(e=>"horizontal"===e||"vertical"===e),new Set(["Orientation {horizontal, vertical}"]),e,{defaultValue:"vertical"})}validateVariant(e){(0,o.a)(this,"_variant",(e=>"primary"===e||"secondary"===e),new Set(["KoliBriNavVariant {primary, secondary}"]),e,{defaultValue:"primary"})}componentWillLoad(){this.validateAriaCurrentValue(this._ariaCurrentValue),this.validateAriaLabel(this._ariaLabel),this.validateCollapsible(this._collapsible),this.validateCompact(this._compact),this.validateHasCompactButton(this._hasCompactButton),this.validateLinks(this._links),this.validateOrientation(this._orientation),this.validateVariant(this._variant)}disconnectedCallback(){c(this.state._ariaLabel)}static get watchers(){return{_ariaCurrentValue:["validateAriaCurrentValue"],_ariaLabel:["validateAriaLabel"],_collapsible:["validateCollapsible"],_compact:["validateCompact"],_hasCompactButton:["validateHasCompactButton"],_links:["validateLinks"],_orientation:["validateOrientation"],_variant:["validateVariant"]}}};d.style={default:":host{--a11y-min-size:44px;font-size:inherit}*{hyphens:auto;letter-spacing:inherit;word-break:break-word;word-spacing:inherit}[role='button'],button:not([role='link']),kol-input .input{min-height:var(--a11y-min-size);min-width:var(--a11y-min-size)}a,button,h1,h2,h3,h4,h5,h6,input,option,select,textarea{font-family:inherit;font-size:inherit}:is(a,button){background-color:transparent;border:none;margin:0;padding:0;width:100%;}:host{max-width:100%}*{box-sizing:border-box}kol-span-wc{display:grid;place-items:center}kol-span-wc>span{display:flex;place-items:center}a,button{cursor:pointer}button,input,option,select,textarea{font-family:inherit}.icon-only>kol-span-wc>span>span{display:none}:host>div{display:grid;place-items:center}nav{width:100%}.list{display:flex;list-style:none;margin:0;padding:0}.list.vertical{flex-direction:column}.entry{display:flex}.entry kol-button-wc:first-child,.entry kol-link-wc,.entry kol-span-wc{flex-grow:1}.entry kol-span-wc{justify-items:start}"}},47091:(e,t,n)=>{n.d(t,{K:()=>oe,a:()=>j,b:()=>P,c:()=>C,d:()=>q,e:()=>$,f:()=>B,g:()=>M,h:()=>U,i:()=>re,j:()=>Z,k:()=>Y,l:()=>ie,m:()=>W,n:()=>te,o:()=>O,p:()=>J,q:()=>G,r:()=>c,s:()=>H,t:()=>ne,u:()=>I,w:()=>T});var a=n(99072),r=n(31391),i=n(98901);const o=(e,t)=>{t.forEach((t=>{!1===e.has(t)&&e.add(t)}))},l=(e,t=document)=>{if(t instanceof Document||t instanceof HTMLElement||t instanceof ShadowRoot){const n=new Set;o(n,t.querySelectorAll(e));const a=t.querySelectorAll('[class*="hydrated"]');for(let t=0;t<a.length;t++){const r=a[t].shadowRoot;o(n,l(e,"object"==typeof r&&null!==r?r:a[t]))}return Array.from(n)}throw new Error("The parameter document for the method querySelectorAll is not type of Document, HTMLElement or ShadowRoot.")},s=(e,t=document)=>{if(t instanceof Document||t instanceof HTMLElement||t instanceof ShadowRoot){let n=t.querySelector(e);if(null===n){const a=t.querySelectorAll('[class*="hydrated"]');for(let t=0;t<a.length;t++){const r=a[t].shadowRoot;if(n=s(e,"object"==typeof r&&null!==r?r:a[t]),null!==n)break}}return n}throw new Error("The parameter document for the method querySelector is not type of Document, HTMLElement or ShadowRoot.")};var c=p,d=p,h=function(e){var t=m(e);return{r:t[0],g:t[1],b:t[2],a:3==t.length?255:Math.round(t[3])}},u=function(e){var t=m(e);return 3==t.length&&t.push(255),255==t[3]?"rgb("+t[0]+", "+t[1]+", "+t[2]+")":0==t[3]?"rgba("+t[0]+", "+t[1]+", "+t[2]+", 0)":"rgba("+t[0]+", "+t[1]+", "+t[2]+", "+String(t[3]/255).substr(1)+")"},g=function(e){3==(t=m(e)).length&&t.push(255);var t,n=255==t[3],a=b(t[0]),r=b(t[1]),i=b(t[2]),o=function(e,t,n,a){var r=["ff","00","11","22","33","44","55","66","77","88","99","aa","bb","cc","dd","ee"];return-1!=r.indexOf(e)&&-1!=r.indexOf(t)&&-1!=r.indexOf(n)&&-1!=r.indexOf(a)}(a,r,i,t=b(Math.round(t[3])));return n?o?"#"+a.charAt(0)+r.charAt(0)+i.charAt(0):"#"+a+r+i:o?"#"+a.charAt(0)+r.charAt(0)+i.charAt(0)+t.charAt(0):"#"+a+r+i+t},f=function(e){var t=m(e);return 3==t.length?t.push(255):t[3]=Math.round(t[3]),(t[3]<<24>>>0|t[0]<<16|t[1]<<8|t[2])>>>0};function p(e){var t=m(e);return 3==t.length?t.concat(255):(t[3]=Math.round(t[3]),t)}function m(e){return"string"==typeof e?function(e){return"red"==e?[255,0,0]:"green"==e?[0,255,0]:"blue"==e?[0,0,255]:"black"==e?[0,0,0]:"white"==e?[255,255,255]:"cyan"==e?[0,255,255]:"gray"==e||"grey"==e?[128,128,128]:"magenta"==e||"pink"==e?[255,0,255]:"yellow"==e?[255,255,0]:void 0}(e=e.toLowerCase())||function(e){var t=e.replace(/^#/,""),n=t.length;if(3==n||4==n){var a=v(t[0]),r=v(t[1]),i=v(t[2]),o=3==n?255:v(t[3]);if(isNaN(a)||isNaN(r)||isNaN(i)||isNaN(o))return;return[a,r,i,o]}}(e)||function(e){var t=e.replace(/^#/,""),n=t.length;if(6==n||8==n){var a=v(t.slice(0,2)),r=v(t.slice(2,4)),i=v(t.slice(4,6)),o=6==n?255:v(t.slice(6,8));if(isNaN(a)||isNaN(r)||isNaN(i)||isNaN(o))return;return[a,r,i,o]}}(e)||function(e){if("rgb("==e.substr(0,4)){var t=(e=e.match(/^rgb\(([^)]+)\)/)[1]).split(/ *, */).map(Number),n=y(t[0],!0),a=y(t[1],!0),r=y(t[2],!0);if(-1!=n&&-1!=a&&-1!=r)return[n,a,r,255]}}(e)||function(e){if("rgba("==e.substr(0,5)){var t=(e=e.match(/^rgba\(([^)]+)\)/)[1]).split(/ *, */).map(Number),n=y(t[0],!0),a=y(t[1],!0),r=y(t[2],!0),i=y(255*t[3]);if(-1!=n&&-1!=a&&-1!=r&&-1!=i)return[n,a,r,i]}}(e)||[0,0,0,255]:function(e){if("[object Object]"===Object.prototype.toString.call(e)&&Object.getPrototypeOf(e)===Object.getPrototypeOf({})){var t=y(null!=e.r?e.r:null!=e.red?e.red:0,!0),n=y(null!=e.g?e.g:null!=e.green?e.green:0,!0),a=y(null!=e.b?e.b:null!=e.blue?e.blue:0,!0),r=y(null!=e.a?e.a:null!=e.alpha?e.alpha:255,!0);if(-1!=t&&-1!=n&&-1!=a&&-1!=r)return[t,n,a,r]}}(e)||function(e){if(Array.isArray(e)&&(3==e.length||4==e.length)){var t=y(e[0],!0),n=y(e[1],!0),a=y(e[2],!0),r=y(null!=e[3]?e[3]:255,!0);if(-1!=t&&-1!=n&&-1!=a&&-1!=r)return[t,n,a,r]}}(e)||function(e){if("number"==typeof e&&Math.floor(e)==e&&e<=4294967295&&e>=0)return[e>>16&255,e>>8&255,255&e,e>>24&255]}(e)||[0,0,0,255]}function b(e){var t=e.toString(16);return 1==t.length?"0"+t:t}function v(e){return 1==e.length?parseInt(e+e,16):parseInt(e,16)}function y(e,t){return"number"!=typeof e||!0===t&&Math.floor(e)!==e?-1:e>=0&&e<=255?e:-1}c.arr=d,c.obj=h,c.css=u,c.hex=g,c.num=f;var k=.2126,w=.7152,_=.0722,S=1/12.92;function L(e){return Math.pow((e+.055)/1.055,2.4)}function x(e){var t=e[0]/255,n=e[1]/255,a=e[2]/255,r=t<=.03928?t*S:L(t),i=n<=.03928?n*S:L(n),o=a<=.03928?a*S:L(a);return r*k+i*w+o*_}function N(e){var t=255;8===(e=e.replace(/^#/,"")).length&&(t=parseInt(e.slice(6,8),16),e=e.substring(0,6)),4===e.length&&(t=parseInt(e.slice(3,4).repeat(2),16),e=e.substring(0,3)),3===e.length&&(e=e[0]+e[0]+e[1]+e[1]+e[2]+e[2]);var n=parseInt(e,16);return[n>>16,n>>8&255,255&n,t]}function A(e,t){return function(e,t){return(Math.max(e,t)+.05)/(Math.min(e,t)+.05)}(x(e),x(t))}function C(e,t){return A(N(e),N(t))}function z(e){return e>=7?"AAA":e>=4.5?"AA":e>=3?"AA Large":"Fail"}const E=/\[object Object\]/,O=(e,t)=>{"string"==typeof e&&E.test(e)||t()},M=(e,t)=>{"string"==typeof e&&""===e||t()},B=(e,t)=>{(0,r.b)()&&(r.L.debug([e,t]),r.L.debug("\u2191 We propagate the (submit) event to this target.")),Object.defineProperty(e,"target",{value:t,writable:!1})},H=(e,t,n,a={})=>{var r,i;void 0===e.nextHooks&&(e.nextHooks=new Map),void 0===e.nextState&&(e.nextState=new Map),e.nextState.get(t)!==n&&(e.nextHooks.get(t)instanceof Map==0&&e.nextHooks.set(t,new Map),"function"==typeof a.afterPatch&&(null===(r=e.nextHooks.get(t))||void 0===r||r.set("afterPatch",a.afterPatch)),"function"==typeof a.beforePatch&&(null===(i=e.nextHooks.get(t))||void 0===i||i.set("beforePatch",a.beforePatch)),e.nextState.set(t,n),(e=>{var t,n,a;null===(t=e.nextHooks)||void 0===t||t.forEach(((t,n)=>{var a;const r=t.get("beforePatch");"function"==typeof r&&r(null===(a=e.nextState)||void 0===a?void 0:a.get(n),e.nextState,e,n)})),(null===(n=e.nextState)||void 0===n?void 0:n.size)>0&&(e.state=Object.assign(Object.assign({},e.state),Object.fromEntries(e.nextState)),delete e.nextState,null===(a=e.nextHooks)||void 0===a||a.forEach(((t,n)=>{const a=t.get("afterPatch");"function"==typeof a&&a(e.state[n],e.state,e,n)}))),delete e.nextHooks})(e))},D=(e,t,n,r)=>{(0,a.d)(`[${e.constructor.name}] Der Property-Wert (${n}) f\xfcr '${t}' ist nicht valide. Folgende Werte sind erlaubt: ${Array.from(r).join(", ")}`)};function j(e,t,n,a,r,i={}){n(r)?H(e,t,r,i.hooks):null!=r||i.required?(i.required||a.add(null),D(e,t,r,a)):H(e,t,i.defaultValue,i.hooks)}const P=(e,t,n,a)=>{j(e,t,(e=>"boolean"==typeof e),new Set(["Boolean {true, false}"]),n,a)},T=(e,t,n,a={})=>{const r="number"==typeof a.minLength?null==a?void 0:a.minLength:0;j(e,t,(e=>"string"==typeof e&&e.length>=r&&(void 0===(null==a?void 0:a.maxLength)||e.length<=a.maxLength)),new Set(["String"]),n,a)},$=(e,t,n,a)=>{j(e,t,(e=>"number"==typeof e&&(void 0===(null==a?void 0:a.min)||"number"==typeof(null==a?void 0:a.min)&&e>=a.min)&&(void 0===(null==a?void 0:a.max)||"number"==typeof(null==a?void 0:a.max)&&e<=a.max)),new Set(["Number"]),n,a)},q=(e,t,n,a,i=(e=>e==e),o={})=>{M(a,(()=>{O(a,(()=>{void 0===a&&(a=[]);try{try{a=J(a)}catch(e){}if(Array.isArray(a)){const l=a.find((e=>!n(e)));void 0===l&&i(a)?H(e,t,a,o.hooks):O(l,(()=>{throw r.L.debug(l),new Error("\u2191 Das Schema f\xfcr das Property (_options) ist nicht valide. Der Wert wird nicht ge\xe4ndert.")}))}else O(a,(()=>{throw r.L.debug(a),new Error("\u2191 Das Schema f\xfcr das Property (_options) ist nicht valide. Der Wert wird nicht ge\xe4ndert.")}))}catch(e){r.L.debug(e)}}))}))},V=/^(true|false)$/,R=/^-?(0|[1-9]\d*)$/,K=/^-?(0.|[1-9]\d*.)\d*[1-9]$/,W=e=>{const t=typeof e,n=`${e}`;if("string"==typeof e)if(V.test(e))e="true"===e;else if(R.test(e))e=parseInt(e);else if(K.test(e))e=parseFloat(e);else if(F.test(e))try{e=J(e)}catch(e){}return t!==typeof e&&(0,a.d)(`You have used a stringified property value (${n} to ${JSON.stringify(e)}) which type switched from ${t} to ${typeof e}!`),e},I=e=>{try{return JSON.stringify(e).replace(/"/g,"'")}catch(_){throw r.L.warn(["stringifyJson",e]),r.L.error("\u2191 Das JSON konnte nicht in einen String umgewandelt werden. Es wird ein stringifizierbares JSON erwartet."),new Error}},F=/^[{[]/,J=e=>{if("string"==typeof e)try{return JSON.parse(e)}catch(_){if(F.test(e))try{return JSON.parse(e.replace(/'/g,'"'))}catch(_){r.L.warn(["parseJson",e]),r.L.error("\u2191 Der JSON-String konnte nicht geparsed werden. Achten Sie darauf, dass einfache Anf\xfchrungszeichen im Text maskiert werden (&#8216;).")}}throw new Error},U=e=>"boolean"==typeof e?!0===e?"true":"false":void 0,Z=e=>"string"==typeof e?e:U(e),Y=(e,t)=>s(e,t||(0,r.g)()),G=(e,t)=>l(e,t||(0,r.g)());let Q=null;const X=()=>(Q=Q||{backgroundColor:"#00000000",color:"#00000000",domNode:(0,r.g)().body,level:"Fail",score:1},Q),ee=/(\d+, ){3}0\)/,te=(e,t=X())=>{const n=getComputedStyle(e),a=ee.test(n.backgroundColor)?t.backgroundColor:c.hex(n.backgroundColor),i=ee.test(n.color)?t.color:c.hex(n.color),o=C(a,i),l={backgroundColor:a,color:i,domNode:e,level:z(o),score:o};return o<4.5&&r.L.error(["Color-Contrast-Error",{backgroundColor:l.backgroundColor,color:l.color,level:l.level,score:l.score},l.domNode]),l},ne=(e,t=X())=>{t.domNode instanceof HTMLElement&&(t=te(t.domNode,t));const n=t.domNode.querySelector(e);if(null===n){const n=t.domNode.querySelectorAll('[class="hydrated"]');for(let a=0;a<n.length&&(t.domNode=n[a],null===(t=ne(e,t)).domNode);a++);return t}return te(n,t)},ae=(e,t=window)=>{e instanceof HTMLElement?(t.scrollTo({behavior:"smooth",top:e.getBoundingClientRect().top+(0,r.a)().pageYOffset-50}),e.focus()):(0,a.d)("Das HTMLElement ist nicht valide, zu dem gescrollt werden soll.")},re=(e,t)=>{if((e instanceof Document||e instanceof HTMLElement||e instanceof ShadowRoot)&&"string"==typeof t){(0,a.d)("Bei der Methode querySelectorAll wurden die Parameter document, selector in selector, document getauscht, da der Parameter selector nicht, allerdings der Parameter document optional sein kann.");const n=`${t}`;t=e,e=n}if("string"==typeof e){const n=Y(e,t);n instanceof HTMLElement?ae(n):(0,a.d)(`Es konnte kein HTMLElement mit dem Selector (${e}) gefunden werden, zu dem gescrollt werden soll.`)}else(0,a.d)("Der Selector ist nicht valide, zu dem gescrollt werden soll.")};class ie{static queryHtmlElementColors(e,t,n=!1,a=!0){let i=null;if(!0===n||!1===ie.executionLock)if(!1===n&&(ie.cache.clear(),ie.cache.set(t.domNode,t),ie.executionLock=!0,!0===a&&r.L.debug("[KoliBriUtils] Color contrast analysis started...")),e===t.domNode)i=t;else{const n=new Set;if(t.domNode.shadowRoot){const e=t.domNode.shadowRoot.children;for(let t=0;t<e.length;t++)n.add(e[t])}const a=t.domNode;if("function"==typeof a.assignedNodes){const e=a.assignedNodes();for(let t=0;t<e.length;t++)e[t]instanceof HTMLElement&&n.add(e[t])}const r=t.domNode.children;for(let e=0;e<r.length;e++)n.add(r[e]);const o=Array.from(n);for(let l=0;l<o.length;l++){let n=ie.cache.get(o[l]);void 0===n&&(n=te(o[l],t)),ie.cache.set(o[l],n);const a=ie.queryHtmlElementColors(e,n,!0,!1);if(null!==a){i=a;break}}}else r.L.debug("[KoliBriUtils] Call aborted because a color contrast analysis is currently being executed.");return!1===n&&(!0===a&&r.L.debug(`[KoliBriUtils] Color contrast analysis finished (${ie.cache.size} DOM elements are analysed).`),ie.executionLock=!1,ie.cache.clear()),i}}ie.executionLock=!1,ie.cache=new Map;class oe{}oe.patchTheme=i.p,oe.patchThemeTag=i.a,oe.querySelector=Y,oe.querySelectorAll=G,oe.scrollByHTMLElement=ae,oe.scrollBySelector=re,oe.stringifyJson=I},42321:(e,t,n)=>{n.d(t,{w:()=>i});var a=n(99072),r=n(47091);const i=(e,t,n)=>{(0,r.d)(t,"_links",(e=>"object"==typeof e&&"string"==typeof e._label),n),(0,a.c)(e,t.state._links.length)}}}]);