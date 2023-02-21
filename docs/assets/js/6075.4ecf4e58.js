/*! For license information please see 6075.4ecf4e58.js.LICENSE.txt */
"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[6075],{72991:(e,t,o)=>{o.d(t,{I:()=>d,g:()=>s});var n=o(80731),r=o(78477),i=o(1431),a=o(21591);const s=e=>{const t="string"==typeof e._error&&e._error.length>0&&!0===e._touched,o="string"==typeof e._hint&&e._hint.length>0,n=[];return!0===t&&n.push(`${e._id}-error`),!0===o&&n.push(`${e._id}-hint`),{hasError:t,hasHint:o,ariaDiscribedBy:n}},l=(0,a.b)();class c{constructor(e,t,o){var n,r,i,a,s;if(this.syncFormAssociatedName=()=>{var e;l&&(null===(e=this.formAssociated)||void 0===e||e.setAttribute("name",this.component.state._name||this.component.state._id))},this.setFormAssociatedValue=(e=null)=>{var t;l&&(null===(t=this.formAssociated)||void 0===t||t.setAttribute("value",e))},this.component=e,this.name=t,this.host=o,l){this.formAssociated=document.createElement("input"),this.formAssociated.setAttribute("type","hidden");const e=(null===(n=this.host)||void 0===n?void 0:n.children)||[];for(let t=0;t<e.length;t++)"INPUT"===(null===(r=this.host)||void 0===r?void 0:r.children[t].tagName)&&(null===(i=this.host)||void 0===i||i.removeChild(null===(a=this.host)||void 0===a?void 0:a.children[t]));null===(s=this.host)||void 0===s||s.appendChild(this.formAssociated)}}validateAlert(e){(0,r.b)(this.component,"_alert",e)}validateTouched(e){(0,r.b)(this.component,"_touched",e)}componentWillLoad(){this.validateAlert(this.component._alert),this.validateTouched(this.component._touched)}}class d extends c{constructor(e,t,o){super(e,t,o),this.hideLabel=!1,this.onFacade={onBlur:this.onBlur.bind(this),onChange:this.onChange.bind(this),onClick:this.onClick.bind(this),onFocus:this.onFocus.bind(this)},this.component=e}validateAccessKey(e){(0,r.w)(this.component,"_accessKey",e)}validateAdjustHeight(e){(0,r.b)(this.component,"_adjustHeight",e)}validateDisabled(e){(0,r.b)(this.component,"_disabled",e),!0===e&&(0,n.e)()}validateError(e){(0,r.w)(this.component,"_error",e)}validateHideLabel(e){(0,r.b)(this.component,"_hideLabel",e)}validateHint(e){(0,r.w)(this.component,"_hint",e)}validateId(e){(0,r.w)(this.component,"_id",e,{hooks:{afterPatch:this.syncFormAssociatedName}}),void 0===e&&(0,n.d)("Eine eindeutige ID an den Eingabefeldern ist nicht zwingend erforderlich, k\xf6nnte aber f\xfcr die E2E-Tests relevant sein.")}validateName(e){(0,r.w)(this.component,"_name",e,{hooks:{afterPatch:this.syncFormAssociatedName}}),void 0===e&&(0,n.d)("Ein Name an den Eingabefeldern ist nicht zwingend erforderlich, kann aber f\xfcr die Autocomplete-Funktion des Eingabefeldes relevant sein.")}validateOn(e){"object"==typeof e&&(0,r.s)(this.component,"_on",e)}validateSmartButton(e){(0,r.o)(e,(()=>{try{e=(0,r.p)(e)}catch(e){}(0,r.s)(this.component,"_smartButton",e)}))}validateTabIndex(e){(0,i.v)(this.component,e)}componentWillLoad(){super.componentWillLoad(),this.validateAccessKey(this.component._accessKey),this.validateAdjustHeight(this.component._adjustHeight),this.validateError(this.component._error),this.validateDisabled(this.component._disabled),this.validateHideLabel(this.component._hideLabel),this.validateHint(this.component._hint),this.validateId(this.component._id),this.validateName(this.component._name),this.validateSmartButton(this.component._smartButton),this.validateOn(this.component._on),this.validateTabIndex(this.component._tabIndex),this.syncFormAssociatedName()}onBlur(e){var t;this.component._alert=!0,this.component._touched=!0,"function"==typeof(null===(t=this.component._on)||void 0===t?void 0:t.onBlur)&&this.component._on.onBlur(e)}onChange(e){var t;this.setFormAssociatedValue(e.target.value),"function"==typeof(null===(t=this.component._on)||void 0===t?void 0:t.onChange)&&this.component._on.onChange(e,e.target.value)}onClick(e){var t;"function"==typeof(null===(t=this.component._on)||void 0===t?void 0:t.onClick)&&this.component._on.onClick(e)}onFocus(e){var t;this.component._alert=!0,"function"==typeof(null===(t=this.component._on)||void 0===t?void 0:t.onFocus)&&this.component._on.onFocus(e)}setValue(e,t){var o;this.setFormAssociatedValue(t),"function"==typeof(null===(o=this.component._on)||void 0===o?void 0:o.onChange)&&this.component._on.onChange(e,t)}}},26075:(e,t,o)=>{o.d(t,{I:()=>l});var n=o(78477),r=o(64529),i=o(2634),a=o(72991);const s=(e,t)=>{const o=e;"object"==typeof o&&null!==o&&((0,r.i)(o.right,1)&&(o.right={icon:o.right}),(0,r.i)(o.left,1)&&(o.left={icon:o.left}),t.set("_icon",o))};class l extends a.I{constructor(e,t,o){super(e,t,o),this.component=e}validateIcon(e){(0,n.o)(e,(()=>{try{e=(0,n.p)(e)}catch(e){}(0,n.a)(this.component,"_icon",(e=>"object"==typeof e&&null!==e&&((0,r.i)(e.left,1)||(0,i.i)(e.left)||(0,r.i)(e.right,1)||(0,i.i)(e.right))),new Set(["KoliBriHorizontalIcon"]),e,{hooks:{beforePatch:s},required:!0})}))}componentWillLoad(){super.componentWillLoad(),this.validateIcon(this.component._icon)}}},2634:(e,t,o)=>{o.d(t,{i:()=>l,v:()=>c,w:()=>d});var n=o(80731),r=o(78477),i=o(64529);const a=(e,t,o)=>{(0,i.c)(o)?e[t]=o:(0,i.i)(o,1)&&(e[t]={icon:o})},s=e=>{var t,o,n,r,s,l,c;if(null===(t=e.nextState)||void 0===t?void 0:t.has("_icon")){const t=null===(o=e.nextState)||void 0===o?void 0:o.get("_icon"),s=(null===(n=e.nextState)||void 0===n?void 0:n.get("_iconAlign"))||e.state._iconAlign;null===(r=e.nextState)||void 0===r||r.set("_icon",((e,t)=>{let o={};return(0,i.i)(e,1)?o="right"===t?{right:{icon:e}}:{left:{icon:e}}:"object"==typeof e&&null!==e&&(a(o,"top",e.top),a(o,"right",e.right),a(o,"bottom",e.bottom),a(o,"left",e.left)),o})(t,s))}else if(null===(s=e.nextState)||void 0===s?void 0:s.has("_iconAlign")){const t=e.state._iconAlign;null===(l=e.nextState)||void 0===l||l.set("_icon",{[t]:void 0,[null===(c=e.nextState)||void 0===c?void 0:c.get("_iconAlign")]:e.state._icon[t]})}},l=e=>"object"==typeof e&&null!==e&&(void 0===e.style||(0,i.b)(e.style))&&(0,i.i)(e.icon,1),c=(e,t)=>{(0,r.o)(t,(()=>{try{t=(0,r.p)(t)}catch(e){}(0,r.a)(e,"_icon",(e=>null===e||(0,i.i)(e,1)||"object"==typeof e&&null!==e&&((0,i.i)(e.left,1)||l(e.left)||(0,i.i)(e.right,1)||l(e.right)||(0,i.i)(e.top,1)||l(e.top)||(0,i.i)(e.bottom,1)||l(e.bottom))),new Set(["KoliBriIcon"]),t,{hooks:{beforePatch:(t,o)=>{null===t&&o.set("_icon",{}),s(e)}},required:!0})}))},d=(e,t)=>{(0,r.a)(e,"_iconAlign",(e=>"left"===e||"right"===e),new Set(["Alignment {left, right, top, bottom}"]),t,{hooks:{beforePatch:()=>{s(e)},afterPatch:e=>{(0,n.c)(`Das Property _icon-align bzw. _iconAlign ist veraltet (value: ${e}). Die Ausrichtung der Icon's kann jetzt direkt \xfcber das _icon-Property vorgenommen werden. (v1.1.10: https://public-ui.github.io/docs/changelog#1110---11112022)`)}}})}},78477:(e,t,o)=>{o.d(t,{K:()=>oe,a:()=>j,b:()=>P,c:()=>N,d:()=>D,e:()=>T,f:()=>H,g:()=>C,h:()=>K,i:()=>ee,j:()=>R,k:()=>W,l:()=>te,m:()=>$,n:()=>Q,o:()=>E,p:()=>J,q:()=>U,r:()=>c,s:()=>M,t:()=>X,u:()=>F,w:()=>O});var n=o(58272),r=o(80731),i=o(21591);const a=(e,t)=>{t.forEach((t=>{!1===e.has(t)&&e.add(t)}))},s=(e,t=document)=>{if(t instanceof Document||t instanceof HTMLElement||t instanceof ShadowRoot){const o=new Set;a(o,t.querySelectorAll(e));const n=t.querySelectorAll('[class*="hydrated"]');for(let t=0;t<n.length;t++){const r=n[t].shadowRoot;a(o,s(e,"object"==typeof r&&null!==r?r:n[t]))}return Array.from(o)}throw new Error("The parameter document for the method querySelectorAll is not type of Document, HTMLElement or ShadowRoot.")},l=(e,t=document)=>{if(t instanceof Document||t instanceof HTMLElement||t instanceof ShadowRoot){let o=t.querySelector(e);if(null===o){const n=t.querySelectorAll('[class*="hydrated"]');for(let t=0;t<n.length;t++){const r=n[t].shadowRoot;if(o=l(e,"object"==typeof r&&null!==r?r:n[t]),null!==o)break}}return o}throw new Error("The parameter document for the method querySelector is not type of Document, HTMLElement or ShadowRoot.")};var c=p,d=p,h=function(e){var t=g(e);return{r:t[0],g:t[1],b:t[2],a:3==t.length?255:Math.round(t[3])}},u=function(e){var t=g(e);return 3==t.length&&t.push(255),255==t[3]?"rgb("+t[0]+", "+t[1]+", "+t[2]+")":0==t[3]?"rgba("+t[0]+", "+t[1]+", "+t[2]+", 0)":"rgba("+t[0]+", "+t[1]+", "+t[2]+", "+String(t[3]/255).substr(1)+")"},f=function(e){3==(t=g(e)).length&&t.push(255);var t,o=255==t[3],n=v(t[0]),r=v(t[1]),i=v(t[2]),a=function(e,t,o,n){var r=["ff","00","11","22","33","44","55","66","77","88","99","aa","bb","cc","dd","ee"];return-1!=r.indexOf(e)&&-1!=r.indexOf(t)&&-1!=r.indexOf(o)&&-1!=r.indexOf(n)}(n,r,i,t=v(Math.round(t[3])));return o?a?"#"+n.charAt(0)+r.charAt(0)+i.charAt(0):"#"+n+r+i:a?"#"+n.charAt(0)+r.charAt(0)+i.charAt(0)+t.charAt(0):"#"+n+r+i+t},m=function(e){var t=g(e);return 3==t.length?t.push(255):t[3]=Math.round(t[3]),(t[3]<<24>>>0|t[0]<<16|t[1]<<8|t[2])>>>0};function p(e){var t=g(e);return 3==t.length?t.concat(255):(t[3]=Math.round(t[3]),t)}function g(e){return"string"==typeof e?function(e){return"red"==e?[255,0,0]:"green"==e?[0,255,0]:"blue"==e?[0,0,255]:"black"==e?[0,0,0]:"white"==e?[255,255,255]:"cyan"==e?[0,255,255]:"gray"==e||"grey"==e?[128,128,128]:"magenta"==e||"pink"==e?[255,0,255]:"yellow"==e?[255,255,0]:void 0}(e=e.toLowerCase())||function(e){var t=e.replace(/^#/,""),o=t.length;if(3==o||4==o){var n=b(t[0]),r=b(t[1]),i=b(t[2]),a=3==o?255:b(t[3]);if(isNaN(n)||isNaN(r)||isNaN(i)||isNaN(a))return;return[n,r,i,a]}}(e)||function(e){var t=e.replace(/^#/,""),o=t.length;if(6==o||8==o){var n=b(t.slice(0,2)),r=b(t.slice(2,4)),i=b(t.slice(4,6)),a=6==o?255:b(t.slice(6,8));if(isNaN(n)||isNaN(r)||isNaN(i)||isNaN(a))return;return[n,r,i,a]}}(e)||function(e){if("rgb("==e.substr(0,4)){var t=(e=e.match(/^rgb\(([^)]+)\)/)[1]).split(/ *, */).map(Number),o=y(t[0],!0),n=y(t[1],!0),r=y(t[2],!0);if(-1!=o&&-1!=n&&-1!=r)return[o,n,r,255]}}(e)||function(e){if("rgba("==e.substr(0,5)){var t=(e=e.match(/^rgba\(([^)]+)\)/)[1]).split(/ *, */).map(Number),o=y(t[0],!0),n=y(t[1],!0),r=y(t[2],!0),i=y(255*t[3]);if(-1!=o&&-1!=n&&-1!=r&&-1!=i)return[o,n,r,i]}}(e)||[0,0,0,255]:function(e){if("[object Object]"===Object.prototype.toString.call(e)&&Object.getPrototypeOf(e)===Object.getPrototypeOf({})){var t=y(null!=e.r?e.r:null!=e.red?e.red:0,!0),o=y(null!=e.g?e.g:null!=e.green?e.green:0,!0),n=y(null!=e.b?e.b:null!=e.blue?e.blue:0,!0),r=y(null!=e.a?e.a:null!=e.alpha?e.alpha:255,!0);if(-1!=t&&-1!=o&&-1!=n&&-1!=r)return[t,o,n,r]}}(e)||function(e){if(Array.isArray(e)&&(3==e.length||4==e.length)){var t=y(e[0],!0),o=y(e[1],!0),n=y(e[2],!0),r=y(null!=e[3]?e[3]:255,!0);if(-1!=t&&-1!=o&&-1!=n&&-1!=r)return[t,o,n,r]}}(e)||function(e){if("number"==typeof e&&Math.floor(e)==e&&e<=4294967295&&e>=0)return[e>>16&255,e>>8&255,255&e,e>>24&255]}(e)||[0,0,0,255]}function v(e){var t=e.toString(16);return 1==t.length?"0"+t:t}function b(e){return 1==e.length?parseInt(e+e,16):parseInt(e,16)}function y(e,t){return"number"!=typeof e||!0===t&&Math.floor(e)!==e?-1:e>=0&&e<=255?e:-1}c.arr=d,c.obj=h,c.css=u,c.hex=f,c.num=m;var w=1/12.92;function _(e){return Math.pow((e+.055)/1.055,2.4)}function S(e){var t=e[0]/255,o=e[1]/255,n=e[2]/255;return.2126*(t<=.03928?t*w:_(t))+.7152*(o<=.03928?o*w:_(o))+.0722*(n<=.03928?n*w:_(n))}function A(e){var t=255;8===(e=e.replace(/^#/,"")).length&&(t=parseInt(e.slice(6,8),16),e=e.substring(0,6)),4===e.length&&(t=parseInt(e.slice(3,4).repeat(2),16),e=e.substring(0,3)),3===e.length&&(e=e[0]+e[0]+e[1]+e[1]+e[2]+e[2]);var o=parseInt(e,16);return[o>>16,o>>8&255,255&o,t]}function k(e,t){return function(e,t){return(Math.max(e,t)+.05)/(Math.min(e,t)+.05)}(S(e),S(t))}function N(e,t){return k(A(e),A(t))}function x(e){return e>=7?"AAA":e>=4.5?"AA":e>=3?"AA Large":"Fail"}const L=/\[object Object\]/,E=(e,t)=>{"string"==typeof e&&L.test(e)||t()},C=(e,t)=>{"string"==typeof e&&""===e||t()},H=(e,t)=>{(0,i.b)()&&(i.L.debug([e,t]),i.L.debug("\u2191 We propagate the (submit) event to this target.")),Object.defineProperty(e,"target",{value:t,writable:!1})},M=(e,t,o,n={})=>{var r,i;void 0===e.nextHooks&&(e.nextHooks=new Map),void 0===e.nextState&&(e.nextState=new Map),e.nextState.get(t)!==o&&(e.nextHooks.get(t)instanceof Map==0&&e.nextHooks.set(t,new Map),"function"==typeof n.afterPatch&&(null===(r=e.nextHooks.get(t))||void 0===r||r.set("afterPatch",n.afterPatch)),"function"==typeof n.beforePatch&&(null===(i=e.nextHooks.get(t))||void 0===i||i.set("beforePatch",n.beforePatch)),e.nextState.set(t,o),(e=>{var t,o,n;null===(t=e.nextHooks)||void 0===t||t.forEach(((t,o)=>{var n;const r=t.get("beforePatch");"function"==typeof r&&r(null===(n=e.nextState)||void 0===n?void 0:n.get(o),e.nextState,e,o)})),(null===(o=e.nextState)||void 0===o?void 0:o.size)>0&&(e.state=Object.assign(Object.assign({},e.state),Object.fromEntries(e.nextState)),delete e.nextState,null===(n=e.nextHooks)||void 0===n||n.forEach(((t,o)=>{const n=t.get("afterPatch");"function"==typeof n&&n(e.state[o],e.state,e,o)}))),delete e.nextHooks})(e))},j=(e,t,o,n,i,a={})=>{o(i)?M(e,t,i,null==a?void 0:a.hooks):void 0===i||null===i&&(void 0===(null==a?void 0:a.required)||!1===(null==a?void 0:a.required))?M(e,t,null==a?void 0:a.defaultValue,null==a?void 0:a.hooks):(void 0!==(null==a?void 0:a.required)&&!1!==(null==a?void 0:a.required)||n.add(null),((e,t,o,n)=>{(0,r.d)(`[${e.constructor.name}] Der Property-Wert (${o}) f\xfcr '${t}' ist nicht valide. Folgende Werte sind erlaubt: ${Array.from(n).join(", ")}`)})(e,t,i,n))},P=(e,t,o,n)=>{j(e,t,(e=>"boolean"==typeof e),new Set(["Boolean {true, false}"]),o,n)},O=(e,t,o,n={})=>{const r="number"==typeof n.minLength?null==n?void 0:n.minLength:0;j(e,t,(e=>"string"==typeof e&&e.length>=r),new Set([`String (Mindestl\xe4nge ${r})`]),o,n)},T=(e,t,o,n)=>{j(e,t,(e=>"number"==typeof e&&(void 0===(null==n?void 0:n.min)||"number"==typeof(null==n?void 0:n.min)&&e>=n.min)&&(void 0===(null==n?void 0:n.max)||"number"==typeof(null==n?void 0:n.max)&&e<=n.max)),new Set(["Number"]),o,n)},D=(e,t,o,n,r=(e=>e==e),a={})=>{C(n,(()=>{E(n,(()=>{void 0===n&&(n=[]);try{try{n=J(n)}catch(e){}if(Array.isArray(n)){const s=n.find((e=>!o(e)));void 0===s&&r(n)?M(e,t,n,a.hooks):E(s,(()=>{throw i.L.debug(s),new Error("\u2191 Das Schema f\xfcr das Property (_options) ist nicht valide. Der Wert wird nicht ge\xe4ndert.")}))}else E(n,(()=>{throw i.L.debug(n),new Error("\u2191 Das Schema f\xfcr das Property (_options) ist nicht valide. Der Wert wird nicht ge\xe4ndert.")}))}catch(e){i.L.debug(e)}}))}))},I=/^(true|false)$/,q=/^-?(0|[1-9]\d*)$/,B=/^-?(0.|[1-9]\d*.)\d*[1-9]$/,$=e=>{const t=typeof e,o=`${e}`;if("string"==typeof e)if(I.test(e))e="true"===e;else if(q.test(e))e=parseInt(e);else if(B.test(e))e=parseFloat(e);else if(z.test(e))try{e=J(e)}catch(e){}return t!==typeof e&&(0,r.d)(`You have used a stringified property value (${o} to ${JSON.stringify(e)}) which type switched from ${t} to ${typeof e}!`),e},F=e=>{try{return JSON.stringify(e).replace(/"/g,"'")}catch(t){throw i.L.warn(["stringifyJson",e]),i.L.error("\u2191 Das JSON konnte nicht in einen String umgewandelt werden. Es wird ein stringifizierbares JSON erwartet."),new Error}},z=/^[{[]/,J=e=>{if("string"==typeof e)try{return JSON.parse(e)}catch(t){if(z.test(e))try{return JSON.parse(e.replace(/'/g,'"'))}catch(t){i.L.warn(["parseJson",e]),i.L.error("\u2191 Der JSON-String konnte nicht geparsed werden. Achten Sie darauf, dass einfache Anf\xfchrungszeichen im Text maskiert werden (&#8216;).")}}throw new Error},K=e=>"boolean"==typeof e?!0===e?"true":"false":void 0,R=e=>"string"==typeof e?e:K(e),W=(e,t)=>l(e,t||(0,i.g)()),U=(e,t)=>s(e,t||(0,i.g)());let V=null;const Y=()=>(V=V||{backgroundColor:"#00000000",color:"#00000000",domNode:(0,i.g)().body,level:"Fail",score:1},V),G=/(\d+, ){3}0\)/,Q=(e,t=Y())=>{const o=getComputedStyle(e),n=G.test(o.backgroundColor)?t.backgroundColor:c.hex(o.backgroundColor),r=G.test(o.color)?t.color:c.hex(o.color),a=N(n,r),s={backgroundColor:n,color:r,domNode:e,level:x(a),score:a};return a<4.5&&i.L.error(["Color-Contrast-Error",{backgroundColor:s.backgroundColor,color:s.color,level:s.level,score:s.score},s.domNode]),s},X=(e,t=Y())=>{t.domNode instanceof HTMLElement&&(t=Q(t.domNode,t));const o=t.domNode.querySelector(e);if(null===o){const o=t.domNode.querySelectorAll('[class="hydrated"]');for(let n=0;n<o.length&&(t.domNode=o[n],null===(t=X(e,t)).domNode);n++);return t}return Q(o,t)},Z=(e,t=window)=>{e instanceof HTMLElement?(t.scrollTo({behavior:"smooth",top:e.getBoundingClientRect().top+(0,i.a)().pageYOffset-50}),e.focus()):(0,r.d)("Das HTMLElement ist nicht valide, zu dem gescrollt werden soll.")},ee=(e,t)=>{if((e instanceof Document||e instanceof HTMLElement||e instanceof ShadowRoot)&&"string"==typeof t){(0,r.d)("Bei der Methode querySelectorAll wurden die Parameter document, selector in selector, document getauscht, da der Parameter selector nicht, allerdings der Parameter document optional sein kann.");const o=`${t}`;t=e,e=o}if("string"==typeof e){const o=W(e,t);o instanceof HTMLElement?Z(o):(0,r.d)(`Es konnte kein HTMLElement mit dem Selector (${e}) gefunden werden, zu dem gescrollt werden soll.`)}else(0,r.d)("Der Selector ist nicht valide, zu dem gescrollt werden soll.")};class te{static queryHtmlElementColors(e,t,o=!1,n=!0){let r=null;if(!0===o||!1===te.executionLock)if(!1===o&&(te.cache.clear(),te.cache.set(t.domNode,t),te.executionLock=!0,!0===n&&i.L.debug("[KoliBriUtils] Color contrast analysis started...")),e===t.domNode)r=t;else{const o=new Set;if(t.domNode.shadowRoot){const e=t.domNode.shadowRoot.children;for(let t=0;t<e.length;t++)o.add(e[t])}const n=t.domNode;if("function"==typeof n.assignedNodes){const e=n.assignedNodes();for(let t=0;t<e.length;t++)e[t]instanceof HTMLElement&&o.add(e[t])}const i=t.domNode.children;for(let e=0;e<i.length;e++)o.add(i[e]);const a=Array.from(o);for(let s=0;s<a.length;s++){let o=te.cache.get(a[s]);void 0===o&&(o=Q(a[s],t)),te.cache.set(a[s],o);const n=te.queryHtmlElementColors(e,o,!0,!1);if(null!==n){r=n;break}}}else i.L.debug("[KoliBriUtils] Call aborted because a color contrast analysis is currently being executed.");return!1===o&&(!0===n&&i.L.debug(`[KoliBriUtils] Color contrast analysis finished (${te.cache.size} DOM elements are analysed).`),te.executionLock=!1,te.cache.clear()),r}}te.executionLock=!1,te.cache=new Map;class oe{}oe.patchTheme=n.p,oe.patchThemeTag=n.a,oe.querySelector=W,oe.querySelectorAll=U,oe.scrollByHTMLElement=Z,oe.scrollBySelector=ee,oe.stringifyJson=F},1431:(e,t,o)=>{o.d(t,{v:()=>a});var n=o(80731),r=o(78477);const i={hooks:{afterPatch:e=>{-1!==e&&0!==e&&(0,n.a)("Don\u2019t Use Tabindex Greater than 0: https://adrianroselli.com/2014/11/dont-use-tabindex-greater-than-0.html")}}},a=(e,t)=>{(0,r.e)(e,"_tabIndex",t,i)}}}]);