/*! For license information please see 251.4198d61b.js.LICENSE.txt */
"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[251],{51870:(e,t,n)=>{n.d(t,{a:()=>r,b:()=>f,c:()=>s,d:()=>c,e:()=>p,f:()=>u,u:()=>g});var o=n(31470);const i=new Set,r=e=>{!1===i.has(e)&&(i.add(e),o.L.debug(e,{classifier:"\u270b a11y",overwriteStyle:"; background-color: #09f"}))},a=new Set,s=e=>{!1===a.has(e)&&(a.add(e),o.L.warn(e,{classifier:"\ud83d\udd25 deprecated",forceLog:!0,overwriteStyle:"; background-color: #f00"}))},l=new Set,c=e=>{!1===l.has(e)&&(l.add(e),o.L.debug(e,{classifier:"\ud83d\udcbb dev",overwriteStyle:"; background-color: #f09"}))},d=new Set,u=(e,t=!1)=>{!1===d.has(e)&&(d.add(e),e+=!0===t?" \u2705":"",o.L.debug(e,{classifier:"\ud83c\udf1f feature",overwriteStyle:"; background-color: #309"}))};c("Wir freuen uns \xfcber jedes Feedback, Kommentare, Screenshots oder Demo-Links von einer auf KoliBri-basierenden Anwendung (kolibri@itzbund.de). Vielen Dank!");const h=new Set,p=()=>{r('"Disabled" schr\xe4nkt die Zug\xe4nglichkeit und Sichtbarkeit ein. Wir empfehlen aus Sicht der Barrierefreiheit readonly- statt disabled-Attribut zu verwenden.\n- https://uxdesign.cc/is-it-ok-to-grey-out-disabled-buttons-8afa74a0fae')},f=e=>{"string"==typeof e&&""!==e||r("Manche Strukturelemente, wie bspw. der nav-Tag, k\xf6nnen mehrfach in einer Webseite verwendet werden. Damit die gleichnamigen Strukturelemente voneinander unterschieden werden k\xf6nnen, ist es erforderlich ein Aria-Label zu setzen.\n- https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/Navigation_Role#accessibility_concerns")},g=(e,t=8)=>{var n;t>7&&(n=`[${e}] Innerhalb von Navigationsstrukturen wird empfohlen nicht mehr als 7 Men\xfcpunkte zu verwenden.\n\nLinks:\n- https://de.ryte.com/wiki/Millersche_Zahl\n- https://de.wikipedia.org/wiki/Millersche_Zahl`,!1===h.has(n)&&(h.add(n),o.L.debug(n,{classifier:"\ud83d\udcd1 ui/ux",overwriteStyle:"; background-color: #060;"})))}},80251:(e,t,n)=>{n.r(t),n.d(t,{kol_input_date:()=>a});var o=n(5964),i=n(73394),r=n(52238);const a=class{constructor(e){(0,o.r)(this,e),this.catchRef=e=>{this.ref=e,(0,r.a)(this.host,this.ref)},this._accessKey=void 0,this._alert=!0,this._autoComplete=void 0,this._disabled=void 0,this._error=void 0,this._hideLabel=void 0,this._hint="",this._icon=void 0,this._id=void 0,this._list=void 0,this._max=void 0,this._min=void 0,this._name=void 0,this._on=void 0,this._readOnly=void 0,this._required=void 0,this._smartButton=void 0,this._step=void 0,this._tabIndex=void 0,this._touched=!1,this._type="date",this._value=void 0,this.state={}}render(){return(0,o.h)(o.H,null,(0,o.h)("kol-input-number",{ref:this.catchRef,_accessKey:this._accessKey,_alert:this._alert,_autoComplete:this._autoComplete,_disabled:this._disabled,_error:this._error,_hideLabel:this._hideLabel,_hint:this._hint,_icon:this._icon,_id:this._id,_list:this._list,_max:this.state._max,_min:this.state._min,_name:this._name,_on:this.state._on,_readOnly:this._readOnly,_required:this._required,_smartButton:this._smartButton,_step:this._step,_tabIndex:this._tabIndex,_touched:this._touched,_type:this._type,_value:this.state._value},(0,o.h)("slot",null)))}valueAsIsoDate(e,t){const n=null!=e?e:t;if("string"==typeof n)return n;if("object"==typeof n&&n instanceof Date)switch(this._type){case"date":return`${n.getFullYear()}-${n.getMonth()+1}-${n.getDate()}`;case"datetime-local":return`${n.getFullYear()}-${n.getMonth()+1}-${n.getDate()}T${n.getHours()}:${n.getMinutes()}:${n.getSeconds()}`;case"month":return`${n.getFullYear()}-${n.getMonth()+1}`;case"time":return void 0===this._step||"string"==typeof this._step&&"60"===this._step||"number"==typeof this._step&&60===this._step?`${n.getHours()}:${n.getMinutes()}`:`${n.getHours()}:${n.getMinutes()}:${n.getSeconds()}`;case"week":throw new Error("Auto convert to week is not supported!")}return null===e?null:void 0}validateDateString(e){switch(this._type){case"date":return a.isoDateRegex.test(e);case"datetime-local":return a.isoLocalDateTimeRegex.test(e);case"month":return a.isoMonthRegex.test(e);case"time":return a.isoTimeRegex.test(e);case"week":return a.isoWeekRegex.test(e)}}validateOn(e){(0,i.s)(this,"_on",Object.assign(Object.assign({},e),{onChange:(t,n)=>{!!n!=!!this._value&&(this._value=n),(null==e?void 0:e.onChange)&&e.onChange(t,n)}}))}validateMax(e){(0,i.a)(this,"_max",(e=>void 0===e||null!==e&&this.validateDateString(e)),new Set(["Iso8601","Date"]),this.valueAsIsoDate(e,"date"===this._type||"month"===this._type||"datetime-local"===this._type?a.DEFAULT_MAX_DATE:void 0))}validateMin(e){(0,i.a)(this,"_min",(e=>void 0===e||null!==e&&this.validateDateString(e)),new Set(["Iso8601","Date"]),this.valueAsIsoDate(e))}validateValue(e){(0,i.a)(this,"_value",(e=>null==e||this.validateDateString(e)),new Set(["Iso8601","Date"]),this.valueAsIsoDate(e))}componentWillLoad(){this.validateOn(this._on),this.validateMax(this._max),this.validateMin(this._min),this.validateValue(this._value)}get host(){return(0,o.g)(this)}static get watchers(){return{_on:["validateOn"],_max:["validateMax"],_min:["validateMin"],_value:["validateValue"]}}};a.DEFAULT_MAX_DATE=new Date(9999,11,31,23,59,59),a.isoDateRegex=/^\d{4}-([0]\d|1[0-2])-([0-2]\d|3[01])/,a.isoLocalDateTimeRegex=/^\d{4}-([0]\d|1[0-2])-([0-2]\d|3[01])[T ][0-2]\d:[0-5]\d(:[0-5]\d(?:\.\d+)?)?/,a.isoMonthRegex=/^\d{4}-([0]\d|1[0-2])/,a.isoTimeRegex=/^[0-2]\d:[0-5]\d(:[0-5]\d(?:\.\d+)?)?/,a.isoWeekRegex=/^\d{4}-W(?:[0-4]\d|5[0-3])$/,a.style={default:":host{--a11y-min-size:44px}*{hyphens:auto;letter-spacing:inherit;word-break:break-word;word-spacing:inherit}*[role='button'],button:not([role='link']),input[type='color'],input[type='date'],input[type='datetime-local'],input[type='email'],input[type='file'],input[type='month'],input[type='number'],input[type='password'],input[type='search'],input[type='tel'],input[type='text'],input[type='time'],input[type='url'],input[type='week'],option,select,textarea{min-height:var(--a11y-min-size);min-width:var(--a11y-min-size)}:is(a,button){background-color:transparent;border:none;margin:0;padding:0;width:100%;}:host{max-width:100%}*{box-sizing:border-box}kol-span-wc{display:grid;place-items:center}kol-span-wc>span{display:flex;place-items:center}a,button,input,option,select,textarea{cursor:pointer;font-family:inherit;font-size:inherit}.icon-only>kol-span-wc>span>span{display:none}.required *[id*='-label']>span::after{content:'*';padding-left:0.125em}:host{display:block}input[type='color'],input[type='date'],input[type='datetime-local'],input[type='email'],input[type='file'],input[type='month'],input[type='number'],input[type='password'],input[type='search'],input[type='tel'],input[type='text'],input[type='time'],input[type='url'],input[type='week'],select[multiple] option,select:not([multiple]),textarea{font-size:1rem;padding:0 0.5em}input[type='file']{padding:calc((var(--a11y-min-size) - 1rem) / 10) 0.5em}select[multiple] option{padding:calc((var(--a11y-min-size) - 1rem) / 2) 0.5em}:is(button,input,option,select,textarea):disabled,.kol-cursor-not-allowed,.kol-cursor-not-allowed *{cursor:not-allowed}kol-input{display:grid}input,option,select,textarea{display:block;line-height:2.5em;width:100%}input,select:not([multiple]){height:2.75em}.icons{display:flex;justify-content:space-between;height:0}.icons>kol-icon{display:grid;height:var(--a11y-min-size);place-items:center;width:2.5em}.icon-left input,.icon-left select{padding-left:var(--a11y-min-size)}kol-button-wc{position:relative;float:right;z-index:1000;margin-top:calc(-1 * var(--a11y-min-size))}.icon-right kol-button-wc{margin-right:var(--a11y-min-size)}.disabled{opacity:0.5}kol-input-number{display:block}"}},73394:(e,t,n)=>{n.d(t,{K:()=>ne,a:()=>O,b:()=>T,c:()=>L,d:()=>C,e:()=>z,f:()=>$,g:()=>D,h:()=>F,i:()=>ee,j:()=>J,k:()=>K,l:()=>te,m:()=>I,n:()=>X,o:()=>N,p:()=>W,q:()=>U,r:()=>c,s:()=>E,t:()=>G,u:()=>P,w:()=>H});var o=n(51870),i=n(31470),r=n(96838);const a=(e,t)=>{t.forEach((t=>{!1===e.has(t)&&e.add(t)}))},s=(e,t=document)=>{if(t instanceof Document||t instanceof HTMLElement||t instanceof ShadowRoot){const n=new Set;a(n,t.querySelectorAll(e));const o=t.querySelectorAll('[class*="hydrated"]');for(let t=0;t<o.length;t++){const i=o[t].shadowRoot;a(n,s(e,"object"==typeof i&&null!==i?i:o[t]))}return Array.from(n)}throw new Error("The parameter document for the method querySelectorAll is not type of Document, HTMLElement or ShadowRoot.")},l=(e,t=document)=>{if(t instanceof Document||t instanceof HTMLElement||t instanceof ShadowRoot){let n=t.querySelector(e);if(null===n){const o=t.querySelectorAll('[class*="hydrated"]');for(let t=0;t<o.length;t++){const i=o[t].shadowRoot;if(n=l(e,"object"==typeof i&&null!==i?i:o[t]),null!==n)break}}return n}throw new Error("The parameter document for the method querySelector is not type of Document, HTMLElement or ShadowRoot.")};var c=g,d=g,u=function(e){var t=m(e);return{r:t[0],g:t[1],b:t[2],a:3==t.length?255:Math.round(t[3])}},h=function(e){var t=m(e);return 3==t.length&&t.push(255),255==t[3]?"rgb("+t[0]+", "+t[1]+", "+t[2]+")":0==t[3]?"rgba("+t[0]+", "+t[1]+", "+t[2]+", 0)":"rgba("+t[0]+", "+t[1]+", "+t[2]+", "+String(t[3]/255).substr(1)+")"},p=function(e){3==(t=m(e)).length&&t.push(255);var t,n=255==t[3],o=y(t[0]),i=y(t[1]),r=y(t[2]),a=function(e,t,n,o){var i=["ff","00","11","22","33","44","55","66","77","88","99","aa","bb","cc","dd","ee"];return-1!=i.indexOf(e)&&-1!=i.indexOf(t)&&-1!=i.indexOf(n)&&-1!=i.indexOf(o)}(o,i,r,t=y(Math.round(t[3])));return n?a?"#"+o.charAt(0)+i.charAt(0)+r.charAt(0):"#"+o+i+r:a?"#"+o.charAt(0)+i.charAt(0)+r.charAt(0)+t.charAt(0):"#"+o+i+r+t},f=function(e){var t=m(e);return 3==t.length?t.push(255):t[3]=Math.round(t[3]),(t[3]<<24>>>0|t[0]<<16|t[1]<<8|t[2])>>>0};function g(e){var t=m(e);return 3==t.length?t.concat(255):(t[3]=Math.round(t[3]),t)}function m(e){return"string"==typeof e?function(e){return"red"==e?[255,0,0]:"green"==e?[0,255,0]:"blue"==e?[0,0,255]:"black"==e?[0,0,0]:"white"==e?[255,255,255]:"cyan"==e?[0,255,255]:"gray"==e||"grey"==e?[128,128,128]:"magenta"==e||"pink"==e?[255,0,255]:"yellow"==e?[255,255,0]:void 0}(e=e.toLowerCase())||function(e){var t=e.replace(/^#/,""),n=t.length;if(3==n||4==n){var o=b(t[0]),i=b(t[1]),r=b(t[2]),a=3==n?255:b(t[3]);if(isNaN(o)||isNaN(i)||isNaN(r)||isNaN(a))return;return[o,i,r,a]}}(e)||function(e){var t=e.replace(/^#/,""),n=t.length;if(6==n||8==n){var o=b(t.slice(0,2)),i=b(t.slice(2,4)),r=b(t.slice(4,6)),a=6==n?255:b(t.slice(6,8));if(isNaN(o)||isNaN(i)||isNaN(r)||isNaN(a))return;return[o,i,r,a]}}(e)||function(e){if("rgb("==e.substr(0,4)){var t=(e=e.match(/^rgb\(([^)]+)\)/)[1]).split(/ *, */).map(Number),n=v(t[0],!0),o=v(t[1],!0),i=v(t[2],!0);if(-1!=n&&-1!=o&&-1!=i)return[n,o,i,255]}}(e)||function(e){if("rgba("==e.substr(0,5)){var t=(e=e.match(/^rgba\(([^)]+)\)/)[1]).split(/ *, */).map(Number),n=v(t[0],!0),o=v(t[1],!0),i=v(t[2],!0),r=v(255*t[3]);if(-1!=n&&-1!=o&&-1!=i&&-1!=r)return[n,o,i,r]}}(e)||[0,0,0,255]:function(e){if("[object Object]"===Object.prototype.toString.call(e)&&Object.getPrototypeOf(e)===Object.getPrototypeOf({})){var t=v(null!=e.r?e.r:null!=e.red?e.red:0,!0),n=v(null!=e.g?e.g:null!=e.green?e.green:0,!0),o=v(null!=e.b?e.b:null!=e.blue?e.blue:0,!0),i=v(null!=e.a?e.a:null!=e.alpha?e.alpha:255,!0);if(-1!=t&&-1!=n&&-1!=o&&-1!=i)return[t,n,o,i]}}(e)||function(e){if(Array.isArray(e)&&(3==e.length||4==e.length)){var t=v(e[0],!0),n=v(e[1],!0),o=v(e[2],!0),i=v(null!=e[3]?e[3]:255,!0);if(-1!=t&&-1!=n&&-1!=o&&-1!=i)return[t,n,o,i]}}(e)||function(e){if("number"==typeof e&&Math.floor(e)==e&&e<=4294967295&&e>=0)return[e>>16&255,e>>8&255,255&e,e>>24&255]}(e)||[0,0,0,255]}function y(e){var t=e.toString(16);return 1==t.length?"0"+t:t}function b(e){return 1==e.length?parseInt(e+e,16):parseInt(e,16)}function v(e,t){return"number"!=typeof e||!0===t&&Math.floor(e)!==e?-1:e>=0&&e<=255?e:-1}c.arr=d,c.obj=u,c.css=h,c.hex=p,c.num=f;var w=1/12.92;function _(e){return Math.pow((e+.055)/1.055,2.4)}function k(e){var t=e[0]/255,n=e[1]/255,o=e[2]/255;return.2126*(t<=.03928?t*w:_(t))+.7152*(n<=.03928?n*w:_(n))+.0722*(o<=.03928?o*w:_(o))}function x(e){var t=255;8===(e=e.replace(/^#/,"")).length&&(t=parseInt(e.slice(6,8),16),e=e.substring(0,6)),4===e.length&&(t=parseInt(e.slice(3,4).repeat(2),16),e=e.substring(0,3)),3===e.length&&(e=e[0]+e[0]+e[1]+e[1]+e[2]+e[2]);var n=parseInt(e,16);return[n>>16,n>>8&255,255&n,t]}function S(e,t){return function(e,t){return(Math.max(e,t)+.05)/(Math.min(e,t)+.05)}(k(e),k(t))}function L(e,t){return S(x(e),x(t))}function M(e){return e>=7?"AAA":e>=4.5?"AA":e>=3?"AA Large":"Fail"}const A=/\[object Object\]/,N=(e,t)=>{"string"==typeof e&&A.test(e)||t()},D=(e,t)=>{"string"==typeof e&&""===e||t()},$=(e,t)=>{(0,i.b)()&&(i.L.debug([e,t]),i.L.debug("\u2191 We propagate the (submit) event to this target.")),Object.defineProperty(e,"target",{value:t,writable:!1})},E=(e,t,n,o={})=>{var i,r;void 0===e.nextHooks&&(e.nextHooks=new Map),void 0===e.nextState&&(e.nextState=new Map),e.nextState.get(t)!==n&&(e.nextHooks.get(t)instanceof Map==0&&e.nextHooks.set(t,new Map),"function"==typeof o.afterPatch&&(null===(i=e.nextHooks.get(t))||void 0===i||i.set("afterPatch",o.afterPatch)),"function"==typeof o.beforePatch&&(null===(r=e.nextHooks.get(t))||void 0===r||r.set("beforePatch",o.beforePatch)),e.nextState.set(t,n),(e=>{var t,n,o;null===(t=e.nextHooks)||void 0===t||t.forEach(((t,n)=>{var o;const i=t.get("beforePatch");"function"==typeof i&&i(null===(o=e.nextState)||void 0===o?void 0:o.get(n),e.nextState,e,n)})),(null===(n=e.nextState)||void 0===n?void 0:n.size)>0&&(e.state=Object.assign(Object.assign({},e.state),Object.fromEntries(e.nextState)),delete e.nextState,null===(o=e.nextHooks)||void 0===o||o.forEach(((t,n)=>{const o=t.get("afterPatch");"function"==typeof o&&o(e.state[n],e.state,e,n)}))),delete e.nextHooks})(e))};function O(e,t,n,i,r,a={}){n(r)?E(e,t,r,a.hooks):null!=r||a.required?(a.required||i.add(null),((e,t,n,i)=>{(0,o.d)(`[${e.constructor.name}] Der Property-Wert (${n}) f\xfcr '${t}' ist nicht valide. Folgende Werte sind erlaubt: ${Array.from(i).join(", ")}`)})(e,t,r,i)):E(e,t,a.defaultValue,a.hooks)}const T=(e,t,n,o)=>{O(e,t,(e=>"boolean"==typeof e),new Set(["Boolean {true, false}"]),n,o)},H=(e,t,n,o={})=>{const i="number"==typeof o.minLength?null==o?void 0:o.minLength:0;O(e,t,(e=>"string"==typeof e&&e.length>=i&&(void 0===(null==o?void 0:o.maxLength)||e.length<=o.maxLength)),new Set(["String"]),n,o)},z=(e,t,n,o)=>{O(e,t,(e=>"number"==typeof e&&(void 0===(null==o?void 0:o.min)||"number"==typeof(null==o?void 0:o.min)&&e>=o.min)&&(void 0===(null==o?void 0:o.max)||"number"==typeof(null==o?void 0:o.max)&&e<=o.max)),new Set(["Number"]),n,o)},C=(e,t,n,o,r=(e=>e==e),a={})=>{D(o,(()=>{N(o,(()=>{void 0===o&&(o=[]);try{try{o=W(o)}catch(e){}if(Array.isArray(o)){const s=o.find((e=>!n(e)));void 0===s&&r(o)?E(e,t,o,a.hooks):N(s,(()=>{throw i.L.debug(s),new Error("\u2191 Das Schema f\xfcr das Property (_options) ist nicht valide. Der Wert wird nicht ge\xe4ndert.")}))}else N(o,(()=>{throw i.L.debug(o),new Error("\u2191 Das Schema f\xfcr das Property (_options) ist nicht valide. Der Wert wird nicht ge\xe4ndert.")}))}catch(e){i.L.debug(e)}}))}))},R=/^(true|false)$/,j=/^-?(0|[1-9]\d*)$/,q=/^-?(0.|[1-9]\d*.)\d*[1-9]$/,I=e=>{const t=typeof e,n=`${e}`;if("string"==typeof e)if(R.test(e))e="true"===e;else if(j.test(e))e=parseInt(e);else if(q.test(e))e=parseFloat(e);else if(B.test(e))try{e=W(e)}catch(e){}return t!==typeof e&&(0,o.d)(`You have used a stringified property value (${n} to ${JSON.stringify(e)}) which type switched from ${t} to ${typeof e}!`),e},P=e=>{try{return JSON.stringify(e).replace(/"/g,"'")}catch(t){throw i.L.warn(["stringifyJson",e]),i.L.error("\u2191 Das JSON konnte nicht in einen String umgewandelt werden. Es wird ein stringifizierbares JSON erwartet."),new Error}},B=/^[{[]/,W=e=>{if("string"==typeof e)try{return JSON.parse(e)}catch(t){if(B.test(e))try{return JSON.parse(e.replace(/'/g,'"'))}catch(t){i.L.warn(["parseJson",e]),i.L.error("\u2191 Der JSON-String konnte nicht geparsed werden. Achten Sie darauf, dass einfache Anf\xfchrungszeichen im Text maskiert werden (&#8216;).")}}throw new Error},F=e=>"boolean"==typeof e?!0===e?"true":"false":void 0,J=e=>"string"==typeof e?e:F(e),K=(e,t)=>l(e,t||(0,i.g)()),U=(e,t)=>s(e,t||(0,i.g)());let V=null;const Y=()=>(V=V||{backgroundColor:"#00000000",color:"#00000000",domNode:(0,i.g)().body,level:"Fail",score:1},V),Z=/(\d+, ){3}0\)/,X=(e,t=Y())=>{const n=getComputedStyle(e),o=Z.test(n.backgroundColor)?t.backgroundColor:c.hex(n.backgroundColor),r=Z.test(n.color)?t.color:c.hex(n.color),a=L(o,r),s={backgroundColor:o,color:r,domNode:e,level:M(a),score:a};return a<4.5&&i.L.error(["Color-Contrast-Error",{backgroundColor:s.backgroundColor,color:s.color,level:s.level,score:s.score},s.domNode]),s},G=(e,t=Y())=>{t.domNode instanceof HTMLElement&&(t=X(t.domNode,t));const n=t.domNode.querySelector(e);if(null===n){const n=t.domNode.querySelectorAll('[class="hydrated"]');for(let o=0;o<n.length&&(t.domNode=n[o],null===(t=G(e,t)).domNode);o++);return t}return X(n,t)},Q=(e,t=window)=>{e instanceof HTMLElement?(t.scrollTo({behavior:"smooth",top:e.getBoundingClientRect().top+(0,i.a)().pageYOffset-50}),e.focus()):(0,o.d)("Das HTMLElement ist nicht valide, zu dem gescrollt werden soll.")},ee=(e,t)=>{if((e instanceof Document||e instanceof HTMLElement||e instanceof ShadowRoot)&&"string"==typeof t){(0,o.d)("Bei der Methode querySelectorAll wurden die Parameter document, selector in selector, document getauscht, da der Parameter selector nicht, allerdings der Parameter document optional sein kann.");const n=`${t}`;t=e,e=n}if("string"==typeof e){const n=K(e,t);n instanceof HTMLElement?Q(n):(0,o.d)(`Es konnte kein HTMLElement mit dem Selector (${e}) gefunden werden, zu dem gescrollt werden soll.`)}else(0,o.d)("Der Selector ist nicht valide, zu dem gescrollt werden soll.")};class te{static queryHtmlElementColors(e,t,n=!1,o=!0){let r=null;if(!0===n||!1===te.executionLock)if(!1===n&&(te.cache.clear(),te.cache.set(t.domNode,t),te.executionLock=!0,!0===o&&i.L.debug("[KoliBriUtils] Color contrast analysis started...")),e===t.domNode)r=t;else{const n=new Set;if(t.domNode.shadowRoot){const e=t.domNode.shadowRoot.children;for(let t=0;t<e.length;t++)n.add(e[t])}const o=t.domNode;if("function"==typeof o.assignedNodes){const e=o.assignedNodes();for(let t=0;t<e.length;t++)e[t]instanceof HTMLElement&&n.add(e[t])}const i=t.domNode.children;for(let e=0;e<i.length;e++)n.add(i[e]);const a=Array.from(n);for(let s=0;s<a.length;s++){let n=te.cache.get(a[s]);void 0===n&&(n=X(a[s],t)),te.cache.set(a[s],n);const o=te.queryHtmlElementColors(e,n,!0,!1);if(null!==o){r=o;break}}}else i.L.debug("[KoliBriUtils] Call aborted because a color contrast analysis is currently being executed.");return!1===n&&(!0===o&&i.L.debug(`[KoliBriUtils] Color contrast analysis finished (${te.cache.size} DOM elements are analysed).`),te.executionLock=!1,te.cache.clear()),r}}te.executionLock=!1,te.cache=new Map;class ne{}ne.patchTheme=r.p,ne.patchThemeTag=r.a,ne.querySelector=K,ne.querySelectorAll=U,ne.scrollByHTMLElement=Q,ne.scrollBySelector=ee,ne.stringifyJson=P}}]);