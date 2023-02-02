/*! For license information please see 1864.2b24df2a.js.LICENSE.txt */
"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[1864],{2082:(e,t,n)=>{n.d(t,{a:()=>p,b:()=>s,c:()=>f,d:()=>c,e:()=>r,f:()=>h,u:()=>m});var o=n(2373);const i=new Set,r=e=>{!1===i.has(e)&&(i.add(e),o.L.info(e,{classifier:"\u270ba11y",overwriteStyle:"; background-color: #09f"}))},a=new Set,s=e=>{!1===a.has(e)&&(a.add(e),o.L.warn(e,{classifier:"\ud83d\udd25deprecated",forceLog:!0,overwriteStyle:"; background-color: #f00"}))},l=new Set,c=e=>{!1===l.has(e)&&(l.add(e),o.L.debug(e,{classifier:"\ud83d\udcbbdev",overwriteStyle:"; background-color: #f09"}))},d=new Set,h=(e,t=!1)=>{!1===d.has(e)&&(d.add(e),e+=!0===t?" \u2705":"",o.L.debug(e,{classifier:"\ud83c\udf1ffeature",overwriteStyle:"; background-color: #309"}))};c("Wir freuen uns \xfcber jedes Feedback, Kommentare, Screenshots oder Demo-Links von einer auf KoliBri-basierenden Anwendung (kolibri@itzbund.de). Vielen Dank!");const u=new Set,f=()=>{r('"Disabled" schr\xe4nkt die Zug\xe4nglichkeit und Sichtbarkeit ein. Wir empfehlen aus Sicht der Barrierefreiheit readonly- statt disabled-Attribut zu verwenden.\n- https://uxdesign.cc/is-it-ok-to-grey-out-disabled-buttons-8afa74a0fae')},p=e=>{"string"==typeof e&&""!==e||r("Manche Strukturelemente, wie bspw. der nav-Tag, k\xf6nnen mehrfach in einer Webseite verwendet werden. Damit die gleichnamigen Strukturelemente voneinander unterschieden werden k\xf6nnen, ist es erforderlich ein Aria-Label zu setzen.\n- https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/Navigation_Role#accessibility_concerns")},m=(e,t=8)=>{var n;t>7&&(n=`[${e}] Innerhalb von Navigationsstrukturen wird empfohlen nicht mehr als 7 Men\xfcpunkte zu verwenden.\n\nLinks:\n- https://de.ryte.com/wiki/Millersche_Zahl\n- https://de.wikipedia.org/wiki/Millersche_Zahl`,!1===u.has(n)&&(u.add(n),o.L.debug(n,{classifier:"\ud83d\udcd1ui/ux",overwriteStyle:"; background-color: #060;"})))}},2631:(e,t,n)=>{n.d(t,{I:()=>s,a:()=>l,f:()=>a});var o=n(6955),i=n(5359),r=n(580);const a=(e,t,n="")=>{t.forEach(((t,o)=>{const i=`${n}-${o}`;"object"==typeof t&&null!==t&&"string"==typeof t.label&&t.label.length>0&&(Array.isArray(t.options)?a(e,t.options,i):e.set(i,t))}))};class s extends r.I{constructor(e,t,n){super(e,t,n),this.component=e}validateRequired(e){(0,o.b)(this.component,"_required",e)}componentWillLoad(){super.componentWillLoad(),this.validateRequired(this.component._required)}}class l extends s{constructor(e,t,n){super(e,t,n),this.keyOptionMap=new Map,this.getOptionByKey=e=>this.keyOptionMap.get(e),this.isValueInOptions=(e,t)=>void 0!==t.find((t=>t.value===e)),this.beforePatchListValue=(e,t)=>{const n=t.has("_list")?t.get("_list"):this.component.state._list;if(Array.isArray(n)&&n.length>0){this.keyOptionMap.clear(),a(this.keyOptionMap,n);const e=t.has("_value")?t.get("_value"):this.component.state._value;if(!1===this.isValueInOptions(e,n)){const e=n[0].value;t.set("_value",e),this.onStateChange()}}},this.component=e}validateOrientation(e){(0,o.a)(this.component,"_orientation",(e=>"horizontal"===e||"vertical"===e),new Set(["Orientation {horizontal, vertical}"]),e,{defaultValue:"vertical"})}validateList(e){(0,o.c)(this.component,"_list",(e=>"object"==typeof e&&null!==e&&"string"==typeof e.label&&e.label.length>0),e,void 0,{hooks:{beforePatch:this.beforePatchListValue}})}validateValue(e){e=(0,o.m)(e),e=Array.isArray(e)?e[0]:e,(0,o.s)(this.component,"_value",e,{beforePatch:this.beforePatchListValue}),this.setFormAssociatedValue(this.component._value)}componentWillLoad(e){super.componentWillLoad(),this.onStateChange=()=>{if("function"==typeof e){const t=setTimeout((()=>{clearTimeout(t),e(i.S)}))}},this.validateOrientation(this.component._orientation),this.validateList(this.component._list),this.validateValue(this.component._value)}}},580:(e,t,n)=>{n.d(t,{I:()=>u,g:()=>l});var o=n(2082),i=n(6955),r=n(5359),a=n(1535),s=n(2373);const l=e=>{const t="string"==typeof e._error&&e._error.length>0&&!0===e._touched,n="string"==typeof e._hint&&e._hint.length>0,o=[];return!0===t&&o.push(`${e._id}-error`),!0===n&&o.push(`${e._id}-hint`),{hasError:t,hasHint:n,ariaDiscribedBy:o}},c=(0,s.b)();class d{constructor(e,t,n){var o,i,r,a,s;if(this.syncFormAssociatedName=()=>{var e;c&&(null===(e=this.formAssociated)||void 0===e||e.setAttribute("name",this.component.state._name||this.component.state._id))},this.setFormAssociatedValue=(e=null)=>{var t;c&&(null===(t=this.formAssociated)||void 0===t||t.setAttribute("value",e))},this.component=e,this.name=t,this.host=n,c){this.formAssociated=document.createElement("input"),this.formAssociated.setAttribute("type","hidden");const e=(null===(o=this.host)||void 0===o?void 0:o.children)||[];for(let t=0;t<e.length;t++)"INPUT"===(null===(i=this.host)||void 0===i?void 0:i.children[t].tagName)&&(null===(r=this.host)||void 0===r||r.removeChild(null===(a=this.host)||void 0===a?void 0:a.children[t]));null===(s=this.host)||void 0===s||s.appendChild(this.formAssociated)}}validateAlert(e){(0,i.b)(this.component,"_alert",e)}validateTouched(e){(0,i.b)(this.component,"_touched",e)}componentWillLoad(){this.validateAlert(this.component._alert),this.validateTouched(this.component._touched)}}const h=(e,t)=>{const n=e;"object"==typeof n&&null!==n&&((0,r.a)(n.right,1)&&(n.right={icon:n.right}),(0,r.a)(n.left,1)&&(n.left={icon:n.left}),t.set("_icon",n))};class u extends d{constructor(e,t,n){super(e,t,n),this.hideLabel=!1,this.onFacade={onBlur:this.onBlur.bind(this),onChange:this.onChange.bind(this),onClick:this.onClick.bind(this),onFocus:this.onFocus.bind(this)},this.component=e}validateAccessKey(e){(0,i.w)(this.component,"_accessKey",e)}validateAdjustHeight(e){(0,i.b)(this.component,"_adjustHeight",e)}validateDisabled(e){(0,i.b)(this.component,"_disabled",e),!0===e&&(0,o.c)()}validateError(e){(0,i.w)(this.component,"_error",e)}validateHideLabel(e){(0,i.b)(this.component,"_hideLabel",e)}validateHint(e){(0,i.w)(this.component,"_hint",e)}validateIcon(e){(0,i.o)(e,(()=>{try{e=(0,i.p)(e)}catch(e){}(0,i.a)(this.component,"_icon",(e=>"object"==typeof e&&null!==e&&((0,r.a)(e.left,1)||(0,a.i)(e.left)||(0,r.a)(e.right,1)||(0,a.i)(e.right))),new Set(["KoliBriInputIcon"]),e,{hooks:{beforePatch:h},required:!0})}))}validateId(e){(0,i.w)(this.component,"_id",e,{hooks:{afterPatch:this.syncFormAssociatedName}}),void 0===e&&(0,o.d)("Eine eindeutige ID an den Eingabefeldern ist nicht zwingend erforderlich, k\xf6nnte aber f\xfcr die E2E-Tests relevant sein.")}validateName(e){(0,i.w)(this.component,"_name",e,{hooks:{afterPatch:this.syncFormAssociatedName}}),void 0===e&&(0,o.d)("Ein Name an den Eingabefeldern ist nicht zwingend erforderlich, kann aber f\xfcr die Autocomplete-Funktion des Eingabefeldes relevant sein.")}validateOn(e){"object"==typeof e&&(0,i.s)(this.component,"_on",e)}validateSmartButton(e){(0,i.o)(e,(()=>{try{e=(0,i.p)(e)}catch(e){}(0,i.s)(this.component,"_smartButton",e)}))}validateTabIndex(e){(0,a.v)(this.component,e)}componentWillLoad(){super.componentWillLoad(),this.validateAccessKey(this.component._accessKey),this.validateAdjustHeight(this.component._adjustHeight),this.validateError(this.component._error),this.validateDisabled(this.component._disabled),this.validateHideLabel(this.component._hideLabel),this.validateHint(this.component._hint),this.validateIcon(this.component._icon),this.validateId(this.component._id),this.validateName(this.component._name),this.validateSmartButton(this.component._smartButton),this.validateOn(this.component._on),this.validateTabIndex(this.component._tabIndex),this.syncFormAssociatedName()}onBlur(e){var t;this.component._alert=!0,this.component._touched=!0,"function"==typeof(null===(t=this.component._on)||void 0===t?void 0:t.onBlur)&&this.component._on.onBlur(e)}onChange(e){var t;this.setFormAssociatedValue(e.target.value),"function"==typeof(null===(t=this.component._on)||void 0===t?void 0:t.onChange)&&this.component._on.onChange(e,e.target.value)}onClick(e){var t;"function"==typeof(null===(t=this.component._on)||void 0===t?void 0:t.onClick)&&this.component._on.onClick(e)}onFocus(e){var t;this.component._alert=!0,"function"==typeof(null===(t=this.component._on)||void 0===t?void 0:t.onFocus)&&this.component._on.onFocus(e)}setValue(e,t){var n;this.setFormAssociatedValue(t),"function"==typeof(null===(n=this.component._on)||void 0===n?void 0:n.onChange)&&this.component._on.onChange(e,t)}}},6830:(e,t,n)=>{n.d(t,{f:()=>c,s:()=>l});var o=1/12.92;function i(e){return Math.pow((e+.055)/1.055,2.4)}function r(e){var t=e[0]/255,n=e[1]/255,r=e[2]/255;return.2126*(t<=.03928?t*o:i(t))+.7152*(n<=.03928?n*o:i(n))+.0722*(r<=.03928?r*o:i(r))}function a(e){var t=255;8===(e=e.replace(/^#/,"")).length&&(t=parseInt(e.slice(6,8),16),e=e.substring(0,6)),4===e.length&&(t=parseInt(e.slice(3,4).repeat(2),16),e=e.substring(0,3)),3===e.length&&(e=e[0]+e[0]+e[1]+e[1]+e[2]+e[2]);var n=parseInt(e,16);return[n>>16,n>>8&255,255&n,t]}function s(e,t){return function(e,t){return(Math.max(e,t)+.05)/(Math.min(e,t)+.05)}(r(e),r(t))}function l(e,t){return s(a(e),a(t))}function c(e){return e>=7?"AAA":e>=4.5?"AA":e>=3?"AA Large":"Fail"}},6955:(e,t,n)=>{n.d(t,{K:()=>Y,a:()=>x,b:()=>N,c:()=>C,d:()=>M,e:()=>A,f:()=>k,g:()=>q,h:()=>U,i:()=>B,j:()=>Z,k:()=>$,l:()=>V,m:()=>P,n:()=>F,o:()=>S,p:()=>D,q:()=>K,r:()=>d,s:()=>L,t:()=>T,w:()=>E});var o=n(8095),i=n(6830),r=n(2082),a=n(2373);const s=(e,t)=>{t.forEach((t=>{!1===e.has(t)&&e.add(t)}))},l=(e,t=document)=>{if(t instanceof Document||t instanceof HTMLElement||t instanceof ShadowRoot){const n=new Set;s(n,t.querySelectorAll(e));const o=t.querySelectorAll('[class*="hydrated"]');for(let t=0;t<o.length;t++){const i=o[t].shadowRoot;s(n,l(e,"object"==typeof i&&null!==i?i:o[t]))}return Array.from(n)}throw new Error("The parameter document for the method querySelectorAll is not type of Document, HTMLElement or ShadowRoot.")},c=(e,t=document)=>{if(t instanceof Document||t instanceof HTMLElement||t instanceof ShadowRoot){let n=t.querySelector(e);if(null===n){const o=t.querySelectorAll('[class*="hydrated"]');for(let t=0;t<o.length;t++){const i=o[t].shadowRoot;if(n=c(e,"object"==typeof i&&null!==i?i:o[t]),null!==n)break}}return n}throw new Error("The parameter document for the method querySelector is not type of Document, HTMLElement or ShadowRoot.")};var d=g,h=g,u=function(e){var t=v(e);return{r:t[0],g:t[1],b:t[2],a:3==t.length?255:Math.round(t[3])}},f=function(e){var t=v(e);return 3==t.length&&t.push(255),255==t[3]?"rgb("+t[0]+", "+t[1]+", "+t[2]+")":0==t[3]?"rgba("+t[0]+", "+t[1]+", "+t[2]+", 0)":"rgba("+t[0]+", "+t[1]+", "+t[2]+", "+String(t[3]/255).substr(1)+")"},p=function(e){3==(t=v(e)).length&&t.push(255);var t,n=255==t[3],o=b(t[0]),i=b(t[1]),r=b(t[2]),a=function(e,t,n,o){var i=["ff","00","11","22","33","44","55","66","77","88","99","aa","bb","cc","dd","ee"];return-1!=i.indexOf(e)&&-1!=i.indexOf(t)&&-1!=i.indexOf(n)&&-1!=i.indexOf(o)}(o,i,r,t=b(Math.round(t[3])));return n?a?"#"+o.charAt(0)+i.charAt(0)+r.charAt(0):"#"+o+i+r:a?"#"+o.charAt(0)+i.charAt(0)+r.charAt(0)+t.charAt(0):"#"+o+i+r+t},m=function(e){var t=v(e);return 3==t.length?t.push(255):t[3]=Math.round(t[3]),(t[3]<<24>>>0|t[0]<<16|t[1]<<8|t[2])>>>0};function g(e){var t=v(e);return 3==t.length?t.concat(255):(t[3]=Math.round(t[3]),t)}function v(e){return"string"==typeof e?function(e){return"red"==e?[255,0,0]:"green"==e?[0,255,0]:"blue"==e?[0,0,255]:"black"==e?[0,0,0]:"white"==e?[255,255,255]:"cyan"==e?[0,255,255]:"gray"==e||"grey"==e?[128,128,128]:"magenta"==e||"pink"==e?[255,0,255]:"yellow"==e?[255,255,0]:void 0}(e=e.toLowerCase())||function(e){var t=e.replace(/^#/,""),n=t.length;if(3==n||4==n){var o=y(t[0]),i=y(t[1]),r=y(t[2]),a=3==n?255:y(t[3]);if(isNaN(o)||isNaN(i)||isNaN(r)||isNaN(a))return;return[o,i,r,a]}}(e)||function(e){var t=e.replace(/^#/,""),n=t.length;if(6==n||8==n){var o=y(t.slice(0,2)),i=y(t.slice(2,4)),r=y(t.slice(4,6)),a=6==n?255:y(t.slice(6,8));if(isNaN(o)||isNaN(i)||isNaN(r)||isNaN(a))return;return[o,i,r,a]}}(e)||function(e){if("rgb("==e.substr(0,4)){var t=(e=e.match(/^rgb\(([^)]+)\)/)[1]).split(/ *, */).map(Number),n=w(t[0],!0),o=w(t[1],!0),i=w(t[2],!0);if(-1!=n&&-1!=o&&-1!=i)return[n,o,i,255]}}(e)||function(e){if("rgba("==e.substr(0,5)){var t=(e=e.match(/^rgba\(([^)]+)\)/)[1]).split(/ *, */).map(Number),n=w(t[0],!0),o=w(t[1],!0),i=w(t[2],!0),r=w(255*t[3]);if(-1!=n&&-1!=o&&-1!=i&&-1!=r)return[n,o,i,r]}}(e)||[0,0,0,255]:function(e){if("[object Object]"===Object.prototype.toString.call(e)&&Object.getPrototypeOf(e)===Object.getPrototypeOf({})){var t=w(null!=e.r?e.r:null!=e.red?e.red:0,!0),n=w(null!=e.g?e.g:null!=e.green?e.green:0,!0),o=w(null!=e.b?e.b:null!=e.blue?e.blue:0,!0),i=w(null!=e.a?e.a:null!=e.alpha?e.alpha:255,!0);if(-1!=t&&-1!=n&&-1!=o&&-1!=i)return[t,n,o,i]}}(e)||function(e){if(Array.isArray(e)&&(3==e.length||4==e.length)){var t=w(e[0],!0),n=w(e[1],!0),o=w(e[2],!0),i=w(null!=e[3]?e[3]:255,!0);if(-1!=t&&-1!=n&&-1!=o&&-1!=i)return[t,n,o,i]}}(e)||function(e){if("number"==typeof e&&Math.floor(e)==e&&e<=4294967295&&e>=0)return[e>>16&255,e>>8&255,255&e,e>>24&255]}(e)||[0,0,0,255]}function b(e){var t=e.toString(16);return 1==t.length?"0"+t:t}function y(e){return 1==e.length?parseInt(e+e,16):parseInt(e,16)}function w(e,t){return"number"!=typeof e||!0===t&&Math.floor(e)!==e?-1:e>=0&&e<=255?e:-1}d.arr=h,d.obj=u,d.css=f,d.hex=p,d.num=m;const _=/\[object Object\]/,S=(e,t)=>{"string"==typeof e&&_.test(e)||t()},k=(e,t)=>{"string"==typeof e&&""===e||t()},A=(e,t)=>{(0,a.b)()&&(a.L.debug([e,t]),a.L.debug("\u2191 We propagate the (submit) event to this target.")),Object.defineProperty(e,"target",{value:t,writable:!1})},L=(e,t,n,o={})=>{var i,r;void 0===e.nextHooks&&(e.nextHooks=new Map),void 0===e.nextState&&(e.nextState=new Map),e.nextState.get(t)!==n&&(e.nextHooks.get(t)instanceof Map==0&&e.nextHooks.set(t,new Map),"function"==typeof o.afterPatch&&(null===(i=e.nextHooks.get(t))||void 0===i||i.set("afterPatch",o.afterPatch)),"function"==typeof o.beforePatch&&(null===(r=e.nextHooks.get(t))||void 0===r||r.set("beforePatch",o.beforePatch)),e.nextState.set(t,n),(e=>{var t,n,o;null===(t=e.nextHooks)||void 0===t||t.forEach(((t,n)=>{var o;const i=t.get("beforePatch");"function"==typeof i&&i(null===(o=e.nextState)||void 0===o?void 0:o.get(n),e.nextState,e,n)})),(null===(n=e.nextState)||void 0===n?void 0:n.size)>0&&(e.state=Object.assign(Object.assign({},e.state),Object.fromEntries(e.nextState)),delete e.nextState,null===(o=e.nextHooks)||void 0===o||o.forEach(((t,n)=>{const o=t.get("afterPatch");"function"==typeof o&&o(e.state[n],e.state,e,n)}))),delete e.nextHooks})(e))},x=(e,t,n,o,i,a={})=>{n(i)?L(e,t,i,null==a?void 0:a.hooks):void 0===i||null===i&&(void 0===(null==a?void 0:a.required)||!1===(null==a?void 0:a.required))?L(e,t,null==a?void 0:a.defaultValue,null==a?void 0:a.hooks):(void 0!==(null==a?void 0:a.required)&&!1!==(null==a?void 0:a.required)||o.add(null),((e,t,n,o)=>{(0,r.d)(`[${e.constructor.name}] Der Property-Wert (${n}) f\xfcr '${t}' ist nicht valide. Folgende Werte sind erlaubt: ${Array.from(o).join(", ")}`)})(e,t,i,o))},N=(e,t,n,o)=>{x(e,t,(e=>"boolean"==typeof e),new Set(["Boolean {true, false}"]),n,o)},E=(e,t,n,o={})=>{const i="number"==typeof o.minLength?null==o?void 0:o.minLength:0;x(e,t,(e=>"string"==typeof e&&e.length>=i),new Set([`String (Mindestl\xe4nge ${i})`]),n,o)},M=(e,t,n,o)=>{x(e,t,(e=>"number"==typeof e&&(void 0===(null==o?void 0:o.min)||"number"==typeof(null==o?void 0:o.min)&&e>=o.min)&&(void 0===(null==o?void 0:o.max)||"number"==typeof(null==o?void 0:o.max)&&e<=o.max)),new Set(["Number"]),n,o)},C=(e,t,n,o,i=(e=>e==e),r={})=>{k(o,(()=>{S(o,(()=>{void 0===o&&(o=[]);try{try{o=D(o)}catch(e){}if(Array.isArray(o)){const s=o.find((e=>!n(e)));void 0===s&&i(o)?L(e,t,o,r.hooks):S(s,(()=>{throw a.L.debug(s),new Error("\u2191 Das Schema f\xfcr das Property (_options) ist nicht valide. Der Wert wird nicht ge\xe4ndert.")}))}else S(o,(()=>{throw a.L.debug(o),new Error("\u2191 Das Schema f\xfcr das Property (_options) ist nicht valide. Der Wert wird nicht ge\xe4ndert.")}))}catch(e){a.L.debug(e)}}))}))},O=/^(true|false)$/,j=/^-?(0|[1-9]\d*)$/,H=/^-?(0.|[1-9]\d*.)\d*[1-9]$/,P=e=>{const t=typeof e,n=`${e}`;if("string"==typeof e)if(O.test(e))e="true"===e;else if(j.test(e))e=parseInt(e);else if(H.test(e))e=parseFloat(e);else if(I.test(e))try{e=D(e)}catch(e){}return t!==typeof e&&(0,r.d)(`You have used a stringified property value (${n} to ${JSON.stringify(e)}) which type switched from ${t} to ${typeof e}!`),e},T=e=>{try{return JSON.stringify(e).replace(/"/g,"'")}catch(t){throw a.L.warn(["stringifyJson",e]),a.L.error("\u2191 Das JSON konnte nicht in einen String umgewandelt werden. Es wird ein stringifizierbares JSON erwartet."),new Error}},I=/^[{[]/,D=e=>{if("string"==typeof e)try{return JSON.parse(e)}catch(t){if(I.test(e))try{return JSON.parse(e.replace(/'/g,'"'))}catch(t){a.L.warn(["parseJson",e]),a.L.error("\u2191 Der JSON-String konnte nicht geparsed werden. Achten Sie darauf, dass einfache Anf\xfchrungszeichen im Text maskiert werden (&#8216;).")}}throw new Error},q=e=>"boolean"==typeof e?!0===e?"true":"false":void 0,B=e=>"string"==typeof e?e:q(e),$=(e,t)=>c(e,t||(0,a.g)()),F=(e,t)=>l(e,t||(0,a.g)());let z=null;const R=()=>(z=z||{backgroundColor:"#00000000",color:"#00000000",domNode:(0,a.g)().body,level:"Fail",score:1},z),W=/(\d+, ){3}0\)/,V=(e,t=R())=>{const n=getComputedStyle(e),o=W.test(n.backgroundColor)?t.backgroundColor:d.hex(n.backgroundColor),r=W.test(n.color)?t.color:d.hex(n.color),s=(0,i.s)(o,r),l={backgroundColor:o,color:r,domNode:e,level:(0,i.f)(s),score:s};return s<4.5&&a.L.error(["Color-Contrast-Error",{backgroundColor:l.backgroundColor,color:l.color,level:l.level,score:l.score},l.domNode]),l},K=(e,t=R())=>{t.domNode instanceof HTMLElement&&(t=V(t.domNode,t));const n=t.domNode.querySelector(e);if(null===n){const n=t.domNode.querySelectorAll('[class="hydrated"]');for(let o=0;o<n.length&&(t.domNode=n[o],null===(t=K(e,t)).domNode);o++);return t}return V(n,t)},J=(e,t=window)=>{e instanceof HTMLElement?(t.scrollTo({behavior:"smooth",top:e.getBoundingClientRect().top+(0,a.a)().pageYOffset-50}),e.focus()):(0,r.d)("Das HTMLElement ist nicht valide, zu dem gescrollt werden soll.")},U=(e,t)=>{if((e instanceof Document||e instanceof HTMLElement||e instanceof ShadowRoot)&&"string"==typeof t){(0,r.d)("Bei der Methode querySelectorAll wurden die Parameter document, selector in selector, document getauscht, da der Parameter selector nicht, allerdings der Parameter document optional sein kann.");const n=`${t}`;t=e,e=n}if("string"==typeof e){const n=$(e,t);n instanceof HTMLElement?J(n):(0,r.d)(`Es konnte kein HTMLElement mit dem Selector (${e}) gefunden werden, zu dem gescrollt werden soll.`)}else(0,r.d)("Der Selector ist nicht valide, zu dem gescrollt werden soll.")};class Z{static queryHtmlElementColors(e,t,n=!1,o=!0){let i=null;if(!0===n||!1===Z.executionLock)if(!1===n&&(Z.cache.clear(),Z.cache.set(t.domNode,t),Z.executionLock=!0,!0===o&&a.L.debug("[KoliBriUtils] Color contrast analysis started...")),e===t.domNode)i=t;else{const n=new Set;if(t.domNode.shadowRoot){const e=t.domNode.shadowRoot.children;for(let t=0;t<e.length;t++)n.add(e[t])}const o=t.domNode;if("function"==typeof o.assignedNodes){const e=o.assignedNodes();for(let t=0;t<e.length;t++)e[t]instanceof HTMLElement&&n.add(e[t])}const r=t.domNode.children;for(let e=0;e<r.length;e++)n.add(r[e]);const a=Array.from(n);for(let s=0;s<a.length;s++){let n=Z.cache.get(a[s]);void 0===n&&(n=V(a[s],t)),Z.cache.set(a[s],n);const o=Z.queryHtmlElementColors(e,n,!0,!1);if(null!==o){i=o;break}}}else a.L.debug("[KoliBriUtils] Call aborted because a color contrast analysis is currently being executed.");return!1===n&&(!0===o&&a.L.debug(`[KoliBriUtils] Color contrast analysis finished (${Z.cache.size} DOM elements are analysed).`),Z.executionLock=!1,Z.cache.clear()),i}}Z.executionLock=!1,Z.cache=new Map;class Y{}Y.patchTheme=o.p,Y.patchThemeTag=o.a,Y.querySelector=$,Y.querySelectorAll=F,Y.scrollByHTMLElement=J,Y.scrollBySelector=U,Y.stringifyJson=T},4877:(e,t,n)=>{n.d(t,{p:()=>i,s:()=>r});var o=n(5359);const i=(e,t)=>{(0,o.i)(e)&&e&&(e.focus=e=>null==t?void 0:t.focus(e))},r=(e,t)=>{const n=setTimeout((()=>{clearTimeout(n),e()}),t)}},1535:(e,t,n)=>{n.d(t,{a:()=>c,i:()=>l,v:()=>u,w:()=>d});var o=n(2082),i=n(6955),r=n(5359);const a=(e,t,n)=>{(0,r.i)(n)?e[t]=n:(0,r.a)(n,1)&&(e[t]={icon:n})},s=e=>{var t,n,o,i,s,l,c;if(null===(t=e.nextState)||void 0===t?void 0:t.has("_icon")){const t=null===(n=e.nextState)||void 0===n?void 0:n.get("_icon"),s=(null===(o=e.nextState)||void 0===o?void 0:o.get("_iconAlign"))||e.state._iconAlign;null===(i=e.nextState)||void 0===i||i.set("_icon",((e,t)=>{let n={};return(0,r.a)(e,1)?n="right"===t?{right:{icon:e}}:{left:{icon:e}}:"object"==typeof e&&null!==e&&(a(n,"top",e.top),a(n,"right",e.right),a(n,"bottom",e.bottom),a(n,"left",e.left)),n})(t,s))}else if(null===(s=e.nextState)||void 0===s?void 0:s.has("_iconAlign")){const t=e.state._iconAlign;null===(l=e.nextState)||void 0===l||l.set("_icon",{[t]:void 0,[null===(c=e.nextState)||void 0===c?void 0:c.get("_iconAlign")]:e.state._icon[t]})}},l=e=>"object"==typeof e&&null!==e&&(void 0===e.style||(0,r.b)(e.style))&&(0,r.a)(e.icon,1),c=(e,t)=>{(0,i.o)(t,(()=>{try{t=(0,i.p)(t)}catch(e){}(0,i.a)(e,"_icon",(e=>null===e||(0,r.a)(e,1)||"object"==typeof e&&null!==e&&((0,r.a)(e.left,1)||l(e.left)||(0,r.a)(e.right,1)||l(e.right)||(0,r.a)(e.top,1)||l(e.top)||(0,r.a)(e.bottom,1)||l(e.bottom))),new Set(["KoliBriIcon"]),t,{hooks:{beforePatch:(t,n)=>{null===t&&n.set("_icon",{}),s(e)}},required:!0})}))},d=(e,t)=>{(0,o.b)("Das Property _icon-align bzw. _iconAlign ist veraltet. Die Ausrichtung der Icon's kann jetzt direkt \xfcber das _icon-Property vorgenommen werden. (v1.1.10: https://public-ui.github.io/?path=/story/backlog-und-changelog--page)"),(0,i.a)(e,"_iconAlign",(e=>"left"===e||"right"===e),new Set(["Alignment {left, right, top, bottom}"]),t,{hooks:{beforePatch:()=>{s(e)}}})},h={hooks:{afterPatch:e=>{-1!==e&&0!==e&&(0,o.e)("Don\u2019t Use Tabindex Greater than 0: https://adrianroselli.com/2014/11/dont-use-tabindex-greater-than-0.html")}}},u=(e,t)=>{(0,i.d)(e,"_tabIndex",t,h)}},5359:(e,t,n)=>{n.d(t,{S:()=>s,a:()=>i,b:()=>r,c:()=>a,i:()=>o});const o=e=>"object"==typeof e&&null!==e,i=(e,t=0)=>"string"==typeof e&&e.length>=t,r=e=>{if("object"!=typeof e||null===e)return i(e,1);for(const t in e)if(!1===i(t,1))return!1;return!0},a=(e,t)=>0===t.length||((e,t)=>new RegExp(`^${e}`).test(t))(e,t),s=new Event("StateChange")}}]);