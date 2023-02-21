/*! For license information please see 4051.d4a31ed7.js.LICENSE.txt */
"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[4051],{98344:(e,t,a)=>{a.d(t,{w:()=>n});var i=a(78477);const n=(e,t,a)=>{(0,i.a)(e,t,(e=>"top"===e||"right"===e||"bottom"===e||"left"===e),new Set(["Alignment {top, right, buttom, left}"]),a,{defaultValue:"top"})}},2634:(e,t,a)=>{a.d(t,{i:()=>s,v:()=>c,w:()=>d});var i=a(80731),n=a(78477),o=a(64529);const r=(e,t,a)=>{(0,o.c)(a)?e[t]=a:(0,o.i)(a,1)&&(e[t]={icon:a})},l=e=>{var t,a,i,n,l,s,c;if(null===(t=e.nextState)||void 0===t?void 0:t.has("_icon")){const t=null===(a=e.nextState)||void 0===a?void 0:a.get("_icon"),l=(null===(i=e.nextState)||void 0===i?void 0:i.get("_iconAlign"))||e.state._iconAlign;null===(n=e.nextState)||void 0===n||n.set("_icon",((e,t)=>{let a={};return(0,o.i)(e,1)?a="right"===t?{right:{icon:e}}:{left:{icon:e}}:"object"==typeof e&&null!==e&&(r(a,"top",e.top),r(a,"right",e.right),r(a,"bottom",e.bottom),r(a,"left",e.left)),a})(t,l))}else if(null===(l=e.nextState)||void 0===l?void 0:l.has("_iconAlign")){const t=e.state._iconAlign;null===(s=e.nextState)||void 0===s||s.set("_icon",{[t]:void 0,[null===(c=e.nextState)||void 0===c?void 0:c.get("_iconAlign")]:e.state._icon[t]})}},s=e=>"object"==typeof e&&null!==e&&(void 0===e.style||(0,o.b)(e.style))&&(0,o.i)(e.icon,1),c=(e,t)=>{(0,n.o)(t,(()=>{try{t=(0,n.p)(t)}catch(e){}(0,n.a)(e,"_icon",(e=>null===e||(0,o.i)(e,1)||"object"==typeof e&&null!==e&&((0,o.i)(e.left,1)||s(e.left)||(0,o.i)(e.right,1)||s(e.right)||(0,o.i)(e.top,1)||s(e.top)||(0,o.i)(e.bottom,1)||s(e.bottom))),new Set(["KoliBriIcon"]),t,{hooks:{beforePatch:(t,a)=>{null===t&&a.set("_icon",{}),l(e)}},required:!0})}))},d=(e,t)=>{(0,n.a)(e,"_iconAlign",(e=>"left"===e||"right"===e),new Set(["Alignment {left, right, top, bottom}"]),t,{hooks:{beforePatch:()=>{l(e)},afterPatch:e=>{(0,i.c)(`Das Property _icon-align bzw. _iconAlign ist veraltet (value: ${e}). Die Ausrichtung der Icon's kann jetzt direkt \xfcber das _icon-Property vorgenommen werden. (v1.1.10: https://public-ui.github.io/docs/changelog#1110---11112022)`)}}})}},64051:(e,t,a)=>{a.r(t),a.d(t,{kol_link_wc:()=>f});var i=a(43206),n=a(42562),o=a(98344),r=a(80731),l=a(21591),s=a(78477),c=a(64529),d=a(2634),h=a(40744),u=a(1431);const f=class{constructor(e){(0,i.r)(this,e),this.nonce=(0,l.n)(),this.catchRef=e=>{this.ref=e,(0,c.a)(this.host,this.ref)},this.onClick=e=>{var t,a;"function"==typeof(null===(t=this.state._on)||void 0===t?void 0:t.onClick)&&(e.preventDefault(),(0,s.f)(e,this.ref),null===(a=this.state._on)||void 0===a||a.onClick(e,this.state._href))},this.getRenderValues=()=>{let e={};"string"==typeof this.state._selector&&(e={role:"link",tabIndex:0,onClick:()=>{(0,s.i)(this.state._selector)},onKeyPress:()=>{(0,s.i)(this.state._selector)}});const t="string"==typeof this.state._target&&"_self"!==this.state._target,a={href:"string"==typeof this.state._href&&this.state._href.length>0?this.state._href:"javascript:void(0)",target:"string"==typeof this.state._target&&this.state._target.length>0?this.state._target:void 0,rel:t?"noopener":void 0};return"image"!==this.state._useCase&&!0!==this.state._iconOnly||"string"==typeof this.state._ariaLabel&&0!==this.state._ariaLabel.length||(0,r.d)("[KolLink] Es muss ein Aria-Label gesetzt werden, wenn eine Grafik verlinkt oder der Icon-Only-Modus verwendet wird."),{isExternal:t,tagAttrs:a,goToProps:e}},this._ariaControls=void 0,this._ariaCurrent=void 0,this._ariaExpanded=void 0,this._ariaLabel="",this._ariaSelected=void 0,this._disabled=!1,this._href=void 0,this._icon=void 0,this._iconAlign="left",this._iconOnly=!1,this._label=void 0,this._on=void 0,this._role=void 0,this._selector=void 0,this._stealth=!1,this._tabIndex=void 0,this._target=void 0,this._targetDescription=(0,n.a)("kol-open-link-in-tab"),this._tooltipAlign="right",this._useCase="text",this.state={_ariaLabel:"",_href:"javascript:void(0)",_icon:{},_iconAlign:"left",_label:""}}render(){const{isExternal:e,tagAttrs:t,goToProps:a}=this.getRenderValues();return(0,i.h)(i.H,null,(0,i.h)("a",Object.assign({ref:this.catchRef},t,{"aria-controls":this.state._ariaControls,"aria-current":this.state._ariaCurrent,"aria-expanded":(0,s.h)(this.state._ariaExpanded),"aria-labelledby":"image"===this.state._useCase||!0===this.state._iconOnly?this.nonce:void 0,"aria-selected":(0,s.h)(this.state._ariaSelected),class:{disabled:!0===this.state._disabled,"skip ":!1!==this.state._stealth,"icon-only":!0===this.state._iconOnly,"external-link":e}},this.state._on,{onClick:this.onClick,onKeyPress:this.onClick},a,{role:this.state._role,tabIndex:this.state._tabIndex}),(0,i.h)("kol-span-wc",{_icon:this._icon,_iconOnly:this._iconOnly,_label:this.state._ariaLabel||this.state._label},(0,i.h)("slot",{name:"expert",slot:"expert"})),e&&(0,i.h)("kol-icon",{class:"external-link-icon",_ariaLabel:this.state._targetDescription,_icon:"fa-solid fa-arrow-up-right-from-square"})),(!0===this.state._iconOnly||"image"===this.state._useCase)&&(0,i.h)("kol-tooltip",{"aria-hidden":"true",_align:this.state._tooltipAlign,_id:this.nonce,_label:this.state._ariaLabel||this.state._label}))}validateAriaControls(e){(0,s.w)(this,"_ariaControls",e)}validateAriaCurrent(e){(0,s.a)(this,"_ariaCurrent",(e=>!0===e||"date"===e||"location"===e||"page"===e||"step"===e||"time"===e),new Set(["boolean","String {data, location, page, step, time}"]),e)}validateAriaExpanded(e){(0,s.b)(this,"_ariaExpanded",e)}validateAriaLabel(e){(0,h.v)(this,e)}validateAriaSelected(e){(0,s.b)(this,"_ariaSelected",e)}validateDisabled(e){(0,s.b)(this,"_disabled",e),!0===e&&(0,r.e)()}validateHref(e){(0,s.w)(this,"_href",e)}validateIcon(e){(0,d.v)(this,e)}validateIconAlign(e){(0,d.w)(this,e)}validateIconOnly(e){(0,s.b)(this,"_iconOnly",e)}validateLabel(e){(0,h.a)(this,e)}validateOn(e){"object"==typeof e&&null!==e&&Object.prototype.hasOwnProperty.call(e,"onClick")&&"function"==typeof e.onClick&&(this.state=Object.assign(Object.assign({},this.state),{_on:e}))}validateRole(e){(0,s.w)(this,"_role",e)}validateSelector(e){(0,s.w)(this,"_selector",e)}validateStealth(e){(0,s.b)(this,"_stealth",e)}validateTabIndex(e){(0,u.v)(this,e)}validateTarget(e){(0,s.w)(this,"_target",e)}validateTargetDescription(e){(0,s.w)(this,"_targetDescription",e)}validateTooltipAlign(e){(0,o.w)(this,"_tooltipAlign",e)}validateUseCase(e){"string"==typeof e&&(this.state=Object.assign(Object.assign({},this.state),{_useCase:e}))}componentWillLoad(){this.validateAriaControls(this._ariaControls),this.validateAriaCurrent(this._ariaCurrent),this.validateAriaExpanded(this._ariaExpanded),this.validateAriaLabel(this._ariaLabel),this.validateAriaSelected(this._ariaSelected),this.validateDisabled(this._disabled),this.validateHref(this._href),this.validateIcon(this._icon),this.validateIconAlign(this._iconAlign),this.validateIconOnly(this._iconOnly),this.validateLabel(this._label),this.validateOn(this._on),this.validateRole(this._role),this.validateSelector(this._selector),this.validateStealth(this._stealth),this.validateTabIndex(this._tabIndex),this.validateTarget(this._target),this.validateTargetDescription(this._targetDescription),this.validateTooltipAlign(this._tooltipAlign),this.validateUseCase(this._useCase)}get host(){return(0,i.g)(this)}static get watchers(){return{_ariaControls:["validateAriaControls"],_ariaCurrent:["validateAriaCurrent"],_ariaExpanded:["validateAriaExpanded"],_ariaLabel:["validateAriaLabel"],_ariaSelected:["validateAriaSelected"],_disabled:["validateDisabled"],_href:["validateHref"],_icon:["validateIcon"],_iconAlign:["validateIconAlign"],_iconOnly:["validateIconOnly"],_label:["validateLabel"],_on:["validateOn"],_role:["validateRole"],_selector:["validateSelector"],_stealth:["validateStealth"],_tabIndex:["validateTabIndex"],_target:["validateTarget"],_targetDescription:["validateTargetDescription"],_tooltipAlign:["validateTooltipAlign"],_useCase:["validateUseCase"]}}}},40744:(e,t,a)=>{a.d(t,{a:()=>u,c:()=>c,h:()=>s,v:()=>h});var i=a(80731),n=a(78477),o=a(64529);const r=/[a-zA-Z0-9\xe4\xf6\xfc\xc4\xd6\xdc\xdf]/g,l=/^\d+$/,s=(e,t=1)=>(e=>{var t;return"string"==typeof e&&(null===(t=e.match(r))||void 0===t?void 0:t.length)||0})(e)>=t,c=e=>l.test(e),d=(e,t,a,n)=>{const r=t.has("_ariaLabel")?t.get("_ariaLabel"):a.state._ariaLabel;if("string"==typeof r){const e=t.has("_label")?t.get("_label"):a.state._label;!1===(0,o.d)(e,r)&&("_ariaLabel"===n?t.set("_label",r):t.set("_ariaLabel",e),(0,i.a)("Das abweichende Aria-Label ist nicht barrierefrei. Ein abweichendes Aria-Label muss aus Gr\xfcndern der Barrierefreiheit f\xfcr die Sprachsteuerung mit dem Label-Text beginnen."))}},h=(e,t)=>{(0,n.w)(e,"_ariaLabel",t,{hooks:{afterPatch:e=>{"string"==typeof e&&e.length>0&&!1===s(e,3)&&!1===c(e)&&(0,i.a)(`Ein abweichendes Aria-Label (${e}) ist nicht barrierefrei. Ein abweichendes Aria-Label sollte aus mindestens drei lesbaren Zeichen bestehen.`)},beforePatch:d}})},u=(e,t)=>{(0,n.w)(e,"_label",t,{hooks:{afterPatch:e=>{"string"==typeof e&&!1===s(e,3)&&!1===c(e)&&(0,i.a)(`Ein Label (${e}) ist nicht barrierefrei. Ein Label sollte aus mindestens drei lesbaren Zeichen bestehen.`)},beforePatch:d},required:!0})}},78477:(e,t,a)=>{a.d(t,{K:()=>ae,a:()=>P,b:()=>D,c:()=>k,d:()=>I,e:()=>j,f:()=>N,g:()=>E,h:()=>K,i:()=>ee,j:()=>U,k:()=>W,l:()=>te,m:()=>R,n:()=>Y,o:()=>O,p:()=>J,q:()=>F,r:()=>c,s:()=>T,t:()=>Q,u:()=>z,w:()=>M});var i=a(58272),n=a(80731),o=a(21591);const r=(e,t)=>{t.forEach((t=>{!1===e.has(t)&&e.add(t)}))},l=(e,t=document)=>{if(t instanceof Document||t instanceof HTMLElement||t instanceof ShadowRoot){const a=new Set;r(a,t.querySelectorAll(e));const i=t.querySelectorAll('[class*="hydrated"]');for(let t=0;t<i.length;t++){const n=i[t].shadowRoot;r(a,l(e,"object"==typeof n&&null!==n?n:i[t]))}return Array.from(a)}throw new Error("The parameter document for the method querySelectorAll is not type of Document, HTMLElement or ShadowRoot.")},s=(e,t=document)=>{if(t instanceof Document||t instanceof HTMLElement||t instanceof ShadowRoot){let a=t.querySelector(e);if(null===a){const i=t.querySelectorAll('[class*="hydrated"]');for(let t=0;t<i.length;t++){const n=i[t].shadowRoot;if(a=s(e,"object"==typeof n&&null!==n?n:i[t]),null!==a)break}}return a}throw new Error("The parameter document for the method querySelector is not type of Document, HTMLElement or ShadowRoot.")};var c=b,d=b,h=function(e){var t=v(e);return{r:t[0],g:t[1],b:t[2],a:3==t.length?255:Math.round(t[3])}},u=function(e){var t=v(e);return 3==t.length&&t.push(255),255==t[3]?"rgb("+t[0]+", "+t[1]+", "+t[2]+")":0==t[3]?"rgba("+t[0]+", "+t[1]+", "+t[2]+", 0)":"rgba("+t[0]+", "+t[1]+", "+t[2]+", "+String(t[3]/255).substr(1)+")"},f=function(e){3==(t=v(e)).length&&t.push(255);var t,a=255==t[3],i=p(t[0]),n=p(t[1]),o=p(t[2]),r=function(e,t,a,i){var n=["ff","00","11","22","33","44","55","66","77","88","99","aa","bb","cc","dd","ee"];return-1!=n.indexOf(e)&&-1!=n.indexOf(t)&&-1!=n.indexOf(a)&&-1!=n.indexOf(i)}(i,n,o,t=p(Math.round(t[3])));return a?r?"#"+i.charAt(0)+n.charAt(0)+o.charAt(0):"#"+i+n+o:r?"#"+i.charAt(0)+n.charAt(0)+o.charAt(0)+t.charAt(0):"#"+i+n+o+t},g=function(e){var t=v(e);return 3==t.length?t.push(255):t[3]=Math.round(t[3]),(t[3]<<24>>>0|t[0]<<16|t[1]<<8|t[2])>>>0};function b(e){var t=v(e);return 3==t.length?t.concat(255):(t[3]=Math.round(t[3]),t)}function v(e){return"string"==typeof e?function(e){return"red"==e?[255,0,0]:"green"==e?[0,255,0]:"blue"==e?[0,0,255]:"black"==e?[0,0,0]:"white"==e?[255,255,255]:"cyan"==e?[0,255,255]:"gray"==e||"grey"==e?[128,128,128]:"magenta"==e||"pink"==e?[255,0,255]:"yellow"==e?[255,255,0]:void 0}(e=e.toLowerCase())||function(e){var t=e.replace(/^#/,""),a=t.length;if(3==a||4==a){var i=_(t[0]),n=_(t[1]),o=_(t[2]),r=3==a?255:_(t[3]);if(isNaN(i)||isNaN(n)||isNaN(o)||isNaN(r))return;return[i,n,o,r]}}(e)||function(e){var t=e.replace(/^#/,""),a=t.length;if(6==a||8==a){var i=_(t.slice(0,2)),n=_(t.slice(2,4)),o=_(t.slice(4,6)),r=6==a?255:_(t.slice(6,8));if(isNaN(i)||isNaN(n)||isNaN(o)||isNaN(r))return;return[i,n,o,r]}}(e)||function(e){if("rgb("==e.substr(0,4)){var t=(e=e.match(/^rgb\(([^)]+)\)/)[1]).split(/ *, */).map(Number),a=m(t[0],!0),i=m(t[1],!0),n=m(t[2],!0);if(-1!=a&&-1!=i&&-1!=n)return[a,i,n,255]}}(e)||function(e){if("rgba("==e.substr(0,5)){var t=(e=e.match(/^rgba\(([^)]+)\)/)[1]).split(/ *, */).map(Number),a=m(t[0],!0),i=m(t[1],!0),n=m(t[2],!0),o=m(255*t[3]);if(-1!=a&&-1!=i&&-1!=n&&-1!=o)return[a,i,n,o]}}(e)||[0,0,0,255]:function(e){if("[object Object]"===Object.prototype.toString.call(e)&&Object.getPrototypeOf(e)===Object.getPrototypeOf({})){var t=m(null!=e.r?e.r:null!=e.red?e.red:0,!0),a=m(null!=e.g?e.g:null!=e.green?e.green:0,!0),i=m(null!=e.b?e.b:null!=e.blue?e.blue:0,!0),n=m(null!=e.a?e.a:null!=e.alpha?e.alpha:255,!0);if(-1!=t&&-1!=a&&-1!=i&&-1!=n)return[t,a,i,n]}}(e)||function(e){if(Array.isArray(e)&&(3==e.length||4==e.length)){var t=m(e[0],!0),a=m(e[1],!0),i=m(e[2],!0),n=m(null!=e[3]?e[3]:255,!0);if(-1!=t&&-1!=a&&-1!=i&&-1!=n)return[t,a,i,n]}}(e)||function(e){if("number"==typeof e&&Math.floor(e)==e&&e<=4294967295&&e>=0)return[e>>16&255,e>>8&255,255&e,e>>24&255]}(e)||[0,0,0,255]}function p(e){var t=e.toString(16);return 1==t.length?"0"+t:t}function _(e){return 1==e.length?parseInt(e+e,16):parseInt(e,16)}function m(e,t){return"number"!=typeof e||!0===t&&Math.floor(e)!==e?-1:e>=0&&e<=255?e:-1}c.arr=d,c.obj=h,c.css=u,c.hex=f,c.num=g;var y=1/12.92;function w(e){return Math.pow((e+.055)/1.055,2.4)}function A(e){var t=e[0]/255,a=e[1]/255,i=e[2]/255;return.2126*(t<=.03928?t*y:w(t))+.7152*(a<=.03928?a*y:w(a))+.0722*(i<=.03928?i*y:w(i))}function S(e){var t=255;8===(e=e.replace(/^#/,"")).length&&(t=parseInt(e.slice(6,8),16),e=e.substring(0,6)),4===e.length&&(t=parseInt(e.slice(3,4).repeat(2),16),e=e.substring(0,3)),3===e.length&&(e=e[0]+e[0]+e[1]+e[1]+e[2]+e[2]);var a=parseInt(e,16);return[a>>16,a>>8&255,255&a,t]}function x(e,t){return function(e,t){return(Math.max(e,t)+.05)/(Math.min(e,t)+.05)}(A(e),A(t))}function k(e,t){return x(S(e),S(t))}function L(e){return e>=7?"AAA":e>=4.5?"AA":e>=3?"AA Large":"Fail"}const C=/\[object Object\]/,O=(e,t)=>{"string"==typeof e&&C.test(e)||t()},E=(e,t)=>{"string"==typeof e&&""===e||t()},N=(e,t)=>{(0,o.b)()&&(o.L.debug([e,t]),o.L.debug("\u2191 We propagate the (submit) event to this target.")),Object.defineProperty(e,"target",{value:t,writable:!1})},T=(e,t,a,i={})=>{var n,o;void 0===e.nextHooks&&(e.nextHooks=new Map),void 0===e.nextState&&(e.nextState=new Map),e.nextState.get(t)!==a&&(e.nextHooks.get(t)instanceof Map==0&&e.nextHooks.set(t,new Map),"function"==typeof i.afterPatch&&(null===(n=e.nextHooks.get(t))||void 0===n||n.set("afterPatch",i.afterPatch)),"function"==typeof i.beforePatch&&(null===(o=e.nextHooks.get(t))||void 0===o||o.set("beforePatch",i.beforePatch)),e.nextState.set(t,a),(e=>{var t,a,i;null===(t=e.nextHooks)||void 0===t||t.forEach(((t,a)=>{var i;const n=t.get("beforePatch");"function"==typeof n&&n(null===(i=e.nextState)||void 0===i?void 0:i.get(a),e.nextState,e,a)})),(null===(a=e.nextState)||void 0===a?void 0:a.size)>0&&(e.state=Object.assign(Object.assign({},e.state),Object.fromEntries(e.nextState)),delete e.nextState,null===(i=e.nextHooks)||void 0===i||i.forEach(((t,a)=>{const i=t.get("afterPatch");"function"==typeof i&&i(e.state[a],e.state,e,a)}))),delete e.nextHooks})(e))},P=(e,t,a,i,o,r={})=>{a(o)?T(e,t,o,null==r?void 0:r.hooks):void 0===o||null===o&&(void 0===(null==r?void 0:r.required)||!1===(null==r?void 0:r.required))?T(e,t,null==r?void 0:r.defaultValue,null==r?void 0:r.hooks):(void 0!==(null==r?void 0:r.required)&&!1!==(null==r?void 0:r.required)||i.add(null),((e,t,a,i)=>{(0,n.d)(`[${e.constructor.name}] Der Property-Wert (${a}) f\xfcr '${t}' ist nicht valide. Folgende Werte sind erlaubt: ${Array.from(i).join(", ")}`)})(e,t,o,i))},D=(e,t,a,i)=>{P(e,t,(e=>"boolean"==typeof e),new Set(["Boolean {true, false}"]),a,i)},M=(e,t,a,i={})=>{const n="number"==typeof i.minLength?null==i?void 0:i.minLength:0;P(e,t,(e=>"string"==typeof e&&e.length>=n),new Set([`String (Mindestl\xe4nge ${n})`]),a,i)},j=(e,t,a,i)=>{P(e,t,(e=>"number"==typeof e&&(void 0===(null==i?void 0:i.min)||"number"==typeof(null==i?void 0:i.min)&&e>=i.min)&&(void 0===(null==i?void 0:i.max)||"number"==typeof(null==i?void 0:i.max)&&e<=i.max)),new Set(["Number"]),a,i)},I=(e,t,a,i,n=(e=>e==e),r={})=>{E(i,(()=>{O(i,(()=>{void 0===i&&(i=[]);try{try{i=J(i)}catch(e){}if(Array.isArray(i)){const l=i.find((e=>!a(e)));void 0===l&&n(i)?T(e,t,i,r.hooks):O(l,(()=>{throw o.L.debug(l),new Error("\u2191 Das Schema f\xfcr das Property (_options) ist nicht valide. Der Wert wird nicht ge\xe4ndert.")}))}else O(i,(()=>{throw o.L.debug(i),new Error("\u2191 Das Schema f\xfcr das Property (_options) ist nicht valide. Der Wert wird nicht ge\xe4ndert.")}))}catch(e){o.L.debug(e)}}))}))},H=/^(true|false)$/,q=/^-?(0|[1-9]\d*)$/,$=/^-?(0.|[1-9]\d*.)\d*[1-9]$/,R=e=>{const t=typeof e,a=`${e}`;if("string"==typeof e)if(H.test(e))e="true"===e;else if(q.test(e))e=parseInt(e);else if($.test(e))e=parseFloat(e);else if(B.test(e))try{e=J(e)}catch(e){}return t!==typeof e&&(0,n.d)(`You have used a stringified property value (${a} to ${JSON.stringify(e)}) which type switched from ${t} to ${typeof e}!`),e},z=e=>{try{return JSON.stringify(e).replace(/"/g,"'")}catch(t){throw o.L.warn(["stringifyJson",e]),o.L.error("\u2191 Das JSON konnte nicht in einen String umgewandelt werden. Es wird ein stringifizierbares JSON erwartet."),new Error}},B=/^[{[]/,J=e=>{if("string"==typeof e)try{return JSON.parse(e)}catch(t){if(B.test(e))try{return JSON.parse(e.replace(/'/g,'"'))}catch(t){o.L.warn(["parseJson",e]),o.L.error("\u2191 Der JSON-String konnte nicht geparsed werden. Achten Sie darauf, dass einfache Anf\xfchrungszeichen im Text maskiert werden (&#8216;).")}}throw new Error},K=e=>"boolean"==typeof e?!0===e?"true":"false":void 0,U=e=>"string"==typeof e?e:K(e),W=(e,t)=>s(e,t||(0,o.g)()),F=(e,t)=>l(e,t||(0,o.g)());let V=null;const G=()=>(V=V||{backgroundColor:"#00000000",color:"#00000000",domNode:(0,o.g)().body,level:"Fail",score:1},V),Z=/(\d+, ){3}0\)/,Y=(e,t=G())=>{const a=getComputedStyle(e),i=Z.test(a.backgroundColor)?t.backgroundColor:c.hex(a.backgroundColor),n=Z.test(a.color)?t.color:c.hex(a.color),r=k(i,n),l={backgroundColor:i,color:n,domNode:e,level:L(r),score:r};return r<4.5&&o.L.error(["Color-Contrast-Error",{backgroundColor:l.backgroundColor,color:l.color,level:l.level,score:l.score},l.domNode]),l},Q=(e,t=G())=>{t.domNode instanceof HTMLElement&&(t=Y(t.domNode,t));const a=t.domNode.querySelector(e);if(null===a){const a=t.domNode.querySelectorAll('[class="hydrated"]');for(let i=0;i<a.length&&(t.domNode=a[i],null===(t=Q(e,t)).domNode);i++);return t}return Y(a,t)},X=(e,t=window)=>{e instanceof HTMLElement?(t.scrollTo({behavior:"smooth",top:e.getBoundingClientRect().top+(0,o.a)().pageYOffset-50}),e.focus()):(0,n.d)("Das HTMLElement ist nicht valide, zu dem gescrollt werden soll.")},ee=(e,t)=>{if((e instanceof Document||e instanceof HTMLElement||e instanceof ShadowRoot)&&"string"==typeof t){(0,n.d)("Bei der Methode querySelectorAll wurden die Parameter document, selector in selector, document getauscht, da der Parameter selector nicht, allerdings der Parameter document optional sein kann.");const a=`${t}`;t=e,e=a}if("string"==typeof e){const a=W(e,t);a instanceof HTMLElement?X(a):(0,n.d)(`Es konnte kein HTMLElement mit dem Selector (${e}) gefunden werden, zu dem gescrollt werden soll.`)}else(0,n.d)("Der Selector ist nicht valide, zu dem gescrollt werden soll.")};class te{static queryHtmlElementColors(e,t,a=!1,i=!0){let n=null;if(!0===a||!1===te.executionLock)if(!1===a&&(te.cache.clear(),te.cache.set(t.domNode,t),te.executionLock=!0,!0===i&&o.L.debug("[KoliBriUtils] Color contrast analysis started...")),e===t.domNode)n=t;else{const a=new Set;if(t.domNode.shadowRoot){const e=t.domNode.shadowRoot.children;for(let t=0;t<e.length;t++)a.add(e[t])}const i=t.domNode;if("function"==typeof i.assignedNodes){const e=i.assignedNodes();for(let t=0;t<e.length;t++)e[t]instanceof HTMLElement&&a.add(e[t])}const o=t.domNode.children;for(let e=0;e<o.length;e++)a.add(o[e]);const r=Array.from(a);for(let l=0;l<r.length;l++){let a=te.cache.get(r[l]);void 0===a&&(a=Y(r[l],t)),te.cache.set(r[l],a);const i=te.queryHtmlElementColors(e,a,!0,!1);if(null!==i){n=i;break}}}else o.L.debug("[KoliBriUtils] Call aborted because a color contrast analysis is currently being executed.");return!1===a&&(!0===i&&o.L.debug(`[KoliBriUtils] Color contrast analysis finished (${te.cache.size} DOM elements are analysed).`),te.executionLock=!1,te.cache.clear()),n}}te.executionLock=!1,te.cache=new Map;class ae{}ae.patchTheme=i.p,ae.patchThemeTag=i.a,ae.querySelector=W,ae.querySelectorAll=F,ae.scrollByHTMLElement=X,ae.scrollBySelector=ee,ae.stringifyJson=z},1431:(e,t,a)=>{a.d(t,{v:()=>r});var i=a(80731),n=a(78477);const o={hooks:{afterPatch:e=>{-1!==e&&0!==e&&(0,i.a)("Don\u2019t Use Tabindex Greater than 0: https://adrianroselli.com/2014/11/dont-use-tabindex-greater-than-0.html")}}},r=(e,t)=>{(0,n.e)(e,"_tabIndex",t,o)}}}]);