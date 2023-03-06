/*! For license information please see 6840.c26b032e.js.LICENSE.txt */
"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[6840],{93353:(e,t,o)=>{o.d(t,{I:()=>l,a:()=>s,f:()=>a});var i=o(29091),n=o(90283),r=o(87429);const a=(e,t,o="")=>{t.forEach(((t,i)=>{const n=`${o}-${i}`;"object"==typeof t&&null!==t&&"string"==typeof t.label&&t.label.length>0&&(Array.isArray(t.options)?a(e,t.options,n):e.set(n,t))}))};class l extends r.I{constructor(e,t,o){super(e,t,o),this.component=e}validateRequired(e){(0,i.b)(this.component,"_required",e)}componentWillLoad(){super.componentWillLoad(),this.validateRequired(this.component._required)}}class s extends l{constructor(e,t,o){super(e,t,o),this.keyOptionMap=new Map,this.getOptionByKey=e=>this.keyOptionMap.get(e),this.isValueInOptions=(e,t)=>void 0!==t.find((t=>t.value===e)),this.beforePatchListValue=(e,t)=>{const o=t.has("_list")?t.get("_list"):this.component.state._list;if(Array.isArray(o)&&o.length>0){this.keyOptionMap.clear(),a(this.keyOptionMap,o);const e=t.has("_value")?t.get("_value"):this.component.state._value;if(!1===this.isValueInOptions(e,o)){const e=o[0].value;t.set("_value",e),this.onStateChange()}}},this.component=e}validateOrientation(e){(0,i.a)(this.component,"_orientation",(e=>"horizontal"===e||"vertical"===e),new Set(["Orientation {horizontal, vertical}"]),e,{defaultValue:"vertical"})}validateList(e){(0,i.d)(this.component,"_list",(e=>"object"==typeof e&&null!==e&&"string"==typeof e.label&&e.label.length>0),e,void 0,{hooks:{beforePatch:this.beforePatchListValue}})}validateValue(e){e=(0,i.m)(e),e=Array.isArray(e)?e[0]:e,(0,i.s)(this.component,"_value",e,{beforePatch:this.beforePatchListValue}),this.setFormAssociatedValue(this.component._value)}componentWillLoad(e){super.componentWillLoad(),this.onStateChange=()=>{if("function"==typeof e){const t=setTimeout((()=>{clearTimeout(t),e(n.S)}))}},this.validateOrientation(this.component._orientation),this.validateList(this.component._list),this.validateValue(this.component._value)}}},87429:(e,t,o)=>{o.d(t,{I:()=>c,g:()=>l});var i=o(47908),n=o(29091),r=o(85726),a=o(3160);const l=e=>{const t="string"==typeof e._error&&e._error.length>0&&!0===e._touched,o="string"==typeof e._hint&&e._hint.length>0,i=[];return!0===t&&i.push(`${e._id}-error`),!0===o&&i.push(`${e._id}-hint`),{hasError:t,hasHint:o,ariaDiscribedBy:i}},s=(0,a.b)();class d{constructor(e,t,o){var i,n,r,a,l;if(this.syncFormAssociatedName=()=>{var e;s&&(null===(e=this.formAssociated)||void 0===e||e.setAttribute("name",this.component.state._name||this.component.state._id))},this.setFormAssociatedValue=(e=null)=>{var t;s&&(null===(t=this.formAssociated)||void 0===t||t.setAttribute("value",e))},this.component=e,this.name=t,this.host=o,s){this.formAssociated=document.createElement("input"),this.formAssociated.setAttribute("type","hidden");const e=(null===(i=this.host)||void 0===i?void 0:i.children)||[];for(let t=0;t<e.length;t++)"INPUT"===(null===(n=this.host)||void 0===n?void 0:n.children[t].tagName)&&(null===(r=this.host)||void 0===r||r.removeChild(null===(a=this.host)||void 0===a?void 0:a.children[t]));null===(l=this.host)||void 0===l||l.appendChild(this.formAssociated)}}validateAlert(e){(0,n.b)(this.component,"_alert",e)}validateTouched(e){(0,n.b)(this.component,"_touched",e)}componentWillLoad(){this.validateAlert(this.component._alert),this.validateTouched(this.component._touched)}}class c extends d{constructor(e,t,o){super(e,t,o),this.hideLabel=!1,this.onFacade={onBlur:this.onBlur.bind(this),onChange:this.onChange.bind(this),onClick:this.onClick.bind(this),onFocus:this.onFocus.bind(this)},this.component=e}validateAccessKey(e){(0,n.w)(this.component,"_accessKey",e)}validateAdjustHeight(e){(0,n.b)(this.component,"_adjustHeight",e)}validateDisabled(e){(0,n.b)(this.component,"_disabled",e),!0===e&&(0,i.e)()}validateError(e){(0,n.w)(this.component,"_error",e)}validateHideLabel(e){(0,n.b)(this.component,"_hideLabel",e)}validateHint(e){(0,n.w)(this.component,"_hint",e)}validateId(e){(0,n.w)(this.component,"_id",e,{hooks:{afterPatch:this.syncFormAssociatedName}}),void 0===e&&(0,i.d)("Eine eindeutige ID an den Eingabefeldern ist nicht zwingend erforderlich, k\xf6nnte aber f\xfcr die E2E-Tests relevant sein.")}validateName(e){(0,n.w)(this.component,"_name",e,{hooks:{afterPatch:this.syncFormAssociatedName}}),void 0===e&&(0,i.d)("Ein Name an den Eingabefeldern ist nicht zwingend erforderlich, kann aber f\xfcr die Autocomplete-Funktion des Eingabefeldes relevant sein.")}validateOn(e){"object"==typeof e&&(0,n.s)(this.component,"_on",e)}validateSmartButton(e){(0,n.o)(e,(()=>{try{e=(0,n.p)(e)}catch(e){}(0,n.s)(this.component,"_smartButton",e)}))}validateTabIndex(e){(0,r.v)(this.component,e)}componentWillLoad(){super.componentWillLoad(),this.validateAccessKey(this.component._accessKey),this.validateAdjustHeight(this.component._adjustHeight),this.validateError(this.component._error),this.validateDisabled(this.component._disabled),this.validateHideLabel(this.component._hideLabel),this.validateHint(this.component._hint),this.validateId(this.component._id),this.validateName(this.component._name),this.validateSmartButton(this.component._smartButton),this.validateOn(this.component._on),this.validateTabIndex(this.component._tabIndex),this.syncFormAssociatedName()}onBlur(e){var t;this.component._alert=!0,this.component._touched=!0,"function"==typeof(null===(t=this.component._on)||void 0===t?void 0:t.onBlur)&&this.component._on.onBlur(e)}onChange(e){var t;this.setFormAssociatedValue(e.target.value),"function"==typeof(null===(t=this.component._on)||void 0===t?void 0:t.onChange)&&this.component._on.onChange(e,e.target.value)}onClick(e){var t;"function"==typeof(null===(t=this.component._on)||void 0===t?void 0:t.onClick)&&this.component._on.onClick(e)}onFocus(e){var t;this.component._alert=!0,"function"==typeof(null===(t=this.component._on)||void 0===t?void 0:t.onFocus)&&this.component._on.onFocus(e)}setValue(e,t){var o;this.setFormAssociatedValue(t),"function"==typeof(null===(o=this.component._on)||void 0===o?void 0:o.onChange)&&this.component._on.onChange(e,t)}}},76840:(e,t,o)=>{o.r(t),o.d(t,{kol_input_radio:()=>l});var i=o(8222),n=o(90283),r=o(87429),a=o(93353);const l=class{render(){const{ariaDiscribedBy:e,hasError:t}=(0,r.g)(this.state);return(0,i.h)(i.H,null,(0,i.h)("fieldset",{class:{error:!0===t,disabled:!0===this.state._disabled,required:!0===this.state._required,[this.state._orientation]:!0}},(0,i.h)("legend",{class:"block w-full mb-1 leading-normal"},(0,i.h)("span",null,(0,i.h)("slot",null))),this.state._list.map(((t,o)=>{const n=`${this.state._id}-${o}`;return(0,i.h)("kol-input",{key:n,_disabled:this.state._disabled,_hideLabel:this.state._hideLabel,_hint:this.state._hint,_id:n,_renderNoLabel:!0,_required:this.state._required,_touched:this.state._touched},(0,i.h)("div",{slot:"input"},(0,i.h)("input",Object.assign({ref:this.state._value===t.value?this.catchRef:void 0,accessKey:this.state._accessKey,"aria-describedby":e.length>0?e.join(" "):void 0,"aria-labelledby":`${n}-label`,part:"input",title:"",type:"radio",id:n,checked:this.state._value===t.value,name:this.state._name||this.state._id,disabled:this.state._disabled||t.disabled,required:this.state._required,tabIndex:this.state._tabIndex,value:`-${o}`},this.controller.onFacade,{onChange:this.onChange})),(0,i.h)("label",{htmlFor:`${n}`,id:`${n}-label`,style:{height:this.state._hideLabel&&!0!==this.state._required?"0":void 0,margin:this.state._hideLabel&&!0!==this.state._required?"0":void 0,padding:this.state._hideLabel&&!0!==this.state._required?"0":void 0,visibility:this.state._hideLabel&&!0!==this.state._required?"hidden":void 0}},(0,i.h)("span",null,(0,i.h)("span",null,t.label)))))})),t&&(0,i.h)("kol-alert",{id:"error",_alert:!0,_type:"error",_variant:"msg"},this.state._error)))}constructor(e){(0,i.r)(this,e),this.catchRef=e=>{this.ref=e,(0,n.a)(this.host,this.ref)},this.onChange=e=>{if(e.target instanceof HTMLInputElement){const t=this.controller.getOptionByKey(e.target.value);void 0!==t&&this.controller.setValue(e,t.value)}},this._accessKey=void 0,this._alert=!0,this._disabled=void 0,this._error=void 0,this._hideLabel=void 0,this._hint="",this._id=void 0,this._list=void 0,this._name=void 0,this._on=void 0,this._orientation="vertical",this._required=void 0,this._tabIndex=void 0,this._touched=!1,this._value=void 0,this.state={_id:"\u26a0",_list:[],_orientation:"vertical"},this.controller=new a.a(this,"radio",this.host)}validateAccessKey(e){this.controller.validateAccessKey(e)}validateAlert(e){this.controller.validateAlert(e)}validateDisabled(e){this.controller.validateDisabled(e)}validateError(e){this.controller.validateError(e)}validateHideLabel(e){this.controller.validateHideLabel(e)}validateHint(e){this.controller.validateHint(e)}validateId(e){this.controller.validateId(e)}validateList(e){this.controller.validateList(e)}validateName(e){this.controller.validateName(e)}validateOn(e){this.controller.validateOn(e)}validateOrientation(e){this.controller.validateOrientation(e)}validateRequired(e){this.controller.validateRequired(e)}validateTabIndex(e){this.controller.validateTabIndex(e)}validateTouched(e){this.controller.validateTouched(e)}validateValue(e){this.controller.validateValue(e)}componentWillLoad(){this._alert=!0===this._alert,this._touched=!0===this._touched,this.controller.componentWillLoad(this.onChange)}get host(){return(0,i.g)(this)}static get watchers(){return{_accessKey:["validateAccessKey"],_alert:["validateAlert"],_disabled:["validateDisabled"],_error:["validateError"],_hideLabel:["validateHideLabel"],_hint:["validateHint"],_id:["validateId"],_list:["validateList"],_name:["validateName"],_on:["validateOn"],_orientation:["validateOrientation"],_required:["validateRequired"],_tabIndex:["validateTabIndex"],_touched:["validateTouched"],_value:["validateValue"]}}};l.style={default:":host{--kolibri-border-color:#666;--kolibri-border-radius:0.125rem;--kolibri-border-width:1px;--kolibri-color-error:#f44336;--kolibri-color-info:#2196f3;--kolibri-color-success:#4caf50;--kolibri-color-warning:#ff9800;--kolibri-color-primary:#3f51b5;--kolibri-color-secondary:#ff4081;--kolibri-color-normal:#9e9e9e;--kolibri-color-danger:#f44336;--kolibri-color-ghost:#f5f5f5;--kolibri-color-disabled:#bdbdbd;--kolibri-color-text:#222222;--kolibri-color-visited:#9c27b0;--kolibri-font-family:Verdana, Arial, Tahoma, Helvetica, sans-serif;--kolibri-font-size:16px;--kolibri-spacing:0.25rem}:host{font-family:inherit;font-size:inherit}:host *{hyphens:auto;letter-spacing:inherit;word-break:break-word;word-spacing:inherit}:host{display:inline-block}a,button{background-color:transparent;border:none;font-size:inherit;margin:0;padding:0;transition-duration:0.5s;transition-property:background-color, color, border-color}:host{font-family:var(--kolibri-font-family);font-size:inherit}*{box-sizing:border-box}kol-icon{color:inherit}kol-span-wc{display:grid;gap:var(--kolibri-spacing);place-items:center}kol-span-wc>span{display:flex;gap:var(--kolibri-spacing);place-items:center}kol-span-wc>kol-icon,kol-span-wc>span>kol-icon{display:inline-grid;place-items:center;width:1em;height:1em}a,button,input,select,textarea{appearance:none;cursor:pointer}a.icon-only>kol-span-wc>span>span,button.icon-only>kol-span-wc>span>span{display:none}h1,h2,h3,h4,h5,h6{font-family:var(--kolibri-font-family);font-size:var(--kolibri-font-size);margin:0;padding:0}.kol-required span::after{content:'*'}.kol-disabled{opacity:0.5}.kol-cursor-not-allowed,.kol-cursor-not-allowed *{cursor:not-allowed}input[type='color'],input[type='date'],input[type='datetime-local'],input[type='email'],input[type='file'],input[type='month'],input[type='number'],input[type='password'],input[type='search'],input[type='tel'],input[type='text'],input[type='time'],input[type='url'],input[type='week'],select,textarea{background-color:white;display:block;font-size:1rem;line-height:1.5em;min-height:44px;padding:0.5em 0.75em}input[type='color']{height:2.5em;padding:0.25em 0.5em}textarea{padding:0.5em}input,select,textarea{border-color:var(--kolibri-border-color);border-style:solid;border-width:calc(var(--kolibri-spacing) / 2)}input input.error,input select.error,input textarea.error,select input.error,select select.error,select textarea.error,textarea input.error,textarea select.error,textarea textarea.error{border-color:var(--kolibri-border-error)}input input:focus,input input:hover,input select:focus,input select:hover,input textarea:focus,input textarea:hover,select input:focus,select input:hover,select select:focus,select select:hover,select textarea:focus,select textarea:hover,textarea input:focus,textarea input:hover,textarea select:focus,textarea select:hover,textarea textarea:focus,textarea textarea:hover{border-color:#999}input:not([type='checkbox']),option,select,textarea{font-size:inherit;letter-spacing:inherit;word-spacing:inherit}kol-input .icons{display:none}input:focus{outline-color:var(--kolibri-color-primary);outline-offset:2px;outline-style:solid;outline-width:3px}label{display:grid;font-size:14px;line-height:20px;gap:8px;width:100%}input{width:100%;border-color:var(--kolibri-border-color);border-width:2px;border-style:solid;border-radius:5px;line-height:24px;font-size:16px}input:hover{border-color:var(--kolibri-color-primary)}kol-alert{display:block;width:100%}.kol-required span::after{content:'*'}fieldset{border:0px;margin:0px;padding:0px;display:grid;gap:0.25em}fieldset legend{display:block;width:100%;line-height:1.5em}fieldset div{cursor:pointer;display:flex;flex-direction:row;gap:0.5em;margin-top:0.25em;margin-bottom:0.25em;align-items:center;position:relative}fieldset div label{cursor:pointer;display:flex;width:100%}fieldset div label span{margin-top:0.125em}fieldset div input[type='radio']{appearance:none;transition:0.5s;border-radius:100%;height:calc(6 * var(--kolibri-spacing));min-width:calc(6 * var(--kolibri-spacing));width:calc(6 * var(--kolibri-spacing))}fieldset div input[type='radio']:before{content:'';cursor:pointer;left:calc(1.5 * var(--kolibri-spacing) - 2px);top:calc(1.5 * var(--kolibri-spacing) - 2px);position:relative;border-radius:100%;display:block;height:calc(3 * var(--kolibri-spacing));width:calc(3 * var(--kolibri-spacing))}fieldset div input[type='radio']:checked:before{box-shadow:0 0 0.1rem black;background-color:var(--kolibri-color-primary)}fieldset div input[type='radio']:disabled{background-color:var(--kolibri-color-disabled);border-color:#999;cursor:not-allowed}"}},29091:(e,t,o)=>{o.d(t,{K:()=>oe,a:()=>C,b:()=>T,c:()=>A,d:()=>P,e:()=>I,f:()=>H,g:()=>O,h:()=>K,i:()=>ee,j:()=>R,k:()=>W,l:()=>te,m:()=>z,n:()=>Q,o:()=>E,p:()=>V,q:()=>J,r:()=>d,s:()=>q,t:()=>X,u:()=>B,w:()=>M});var i=o(74975),n=o(47908),r=o(3160);const a=(e,t)=>{t.forEach((t=>{!1===e.has(t)&&e.add(t)}))},l=(e,t=document)=>{if(t instanceof Document||t instanceof HTMLElement||t instanceof ShadowRoot){const o=new Set;a(o,t.querySelectorAll(e));const i=t.querySelectorAll('[class*="hydrated"]');for(let t=0;t<i.length;t++){const n=i[t].shadowRoot;a(o,l(e,"object"==typeof n&&null!==n?n:i[t]))}return Array.from(o)}throw new Error("The parameter document for the method querySelectorAll is not type of Document, HTMLElement or ShadowRoot.")},s=(e,t=document)=>{if(t instanceof Document||t instanceof HTMLElement||t instanceof ShadowRoot){let o=t.querySelector(e);if(null===o){const i=t.querySelectorAll('[class*="hydrated"]');for(let t=0;t<i.length;t++){const n=i[t].shadowRoot;if(o=s(e,"object"==typeof n&&null!==n?n:i[t]),null!==o)break}}return o}throw new Error("The parameter document for the method querySelector is not type of Document, HTMLElement or ShadowRoot.")};var d=v,c=v,h=function(e){var t=b(e);return{r:t[0],g:t[1],b:t[2],a:3==t.length?255:Math.round(t[3])}},u=function(e){var t=b(e);return 3==t.length&&t.push(255),255==t[3]?"rgb("+t[0]+", "+t[1]+", "+t[2]+")":0==t[3]?"rgba("+t[0]+", "+t[1]+", "+t[2]+", 0)":"rgba("+t[0]+", "+t[1]+", "+t[2]+", "+String(t[3]/255).substr(1)+")"},p=function(e){3==(t=b(e)).length&&t.push(255);var t,o=255==t[3],i=m(t[0]),n=m(t[1]),r=m(t[2]),a=function(e,t,o,i){var n=["ff","00","11","22","33","44","55","66","77","88","99","aa","bb","cc","dd","ee"];return-1!=n.indexOf(e)&&-1!=n.indexOf(t)&&-1!=n.indexOf(o)&&-1!=n.indexOf(i)}(i,n,r,t=m(Math.round(t[3])));return o?a?"#"+i.charAt(0)+n.charAt(0)+r.charAt(0):"#"+i+n+r:a?"#"+i.charAt(0)+n.charAt(0)+r.charAt(0)+t.charAt(0):"#"+i+n+r+t},f=function(e){var t=b(e);return 3==t.length?t.push(255):t[3]=Math.round(t[3]),(t[3]<<24>>>0|t[0]<<16|t[1]<<8|t[2])>>>0};function v(e){var t=b(e);return 3==t.length?t.concat(255):(t[3]=Math.round(t[3]),t)}function b(e){return"string"==typeof e?function(e){return"red"==e?[255,0,0]:"green"==e?[0,255,0]:"blue"==e?[0,0,255]:"black"==e?[0,0,0]:"white"==e?[255,255,255]:"cyan"==e?[0,255,255]:"gray"==e||"grey"==e?[128,128,128]:"magenta"==e||"pink"==e?[255,0,255]:"yellow"==e?[255,255,0]:void 0}(e=e.toLowerCase())||function(e){var t=e.replace(/^#/,""),o=t.length;if(3==o||4==o){var i=g(t[0]),n=g(t[1]),r=g(t[2]),a=3==o?255:g(t[3]);if(isNaN(i)||isNaN(n)||isNaN(r)||isNaN(a))return;return[i,n,r,a]}}(e)||function(e){var t=e.replace(/^#/,""),o=t.length;if(6==o||8==o){var i=g(t.slice(0,2)),n=g(t.slice(2,4)),r=g(t.slice(4,6)),a=6==o?255:g(t.slice(6,8));if(isNaN(i)||isNaN(n)||isNaN(r)||isNaN(a))return;return[i,n,r,a]}}(e)||function(e){if("rgb("==e.substr(0,4)){var t=(e=e.match(/^rgb\(([^)]+)\)/)[1]).split(/ *, */).map(Number),o=y(t[0],!0),i=y(t[1],!0),n=y(t[2],!0);if(-1!=o&&-1!=i&&-1!=n)return[o,i,n,255]}}(e)||function(e){if("rgba("==e.substr(0,5)){var t=(e=e.match(/^rgba\(([^)]+)\)/)[1]).split(/ *, */).map(Number),o=y(t[0],!0),i=y(t[1],!0),n=y(t[2],!0),r=y(255*t[3]);if(-1!=o&&-1!=i&&-1!=n&&-1!=r)return[o,i,n,r]}}(e)||[0,0,0,255]:function(e){if("[object Object]"===Object.prototype.toString.call(e)&&Object.getPrototypeOf(e)===Object.getPrototypeOf({})){var t=y(null!=e.r?e.r:null!=e.red?e.red:0,!0),o=y(null!=e.g?e.g:null!=e.green?e.green:0,!0),i=y(null!=e.b?e.b:null!=e.blue?e.blue:0,!0),n=y(null!=e.a?e.a:null!=e.alpha?e.alpha:255,!0);if(-1!=t&&-1!=o&&-1!=i&&-1!=n)return[t,o,i,n]}}(e)||function(e){if(Array.isArray(e)&&(3==e.length||4==e.length)){var t=y(e[0],!0),o=y(e[1],!0),i=y(e[2],!0),n=y(null!=e[3]?e[3]:255,!0);if(-1!=t&&-1!=o&&-1!=i&&-1!=n)return[t,o,i,n]}}(e)||function(e){if("number"==typeof e&&Math.floor(e)==e&&e<=4294967295&&e>=0)return[e>>16&255,e>>8&255,255&e,e>>24&255]}(e)||[0,0,0,255]}function m(e){var t=e.toString(16);return 1==t.length?"0"+t:t}function g(e){return 1==e.length?parseInt(e+e,16):parseInt(e,16)}function y(e,t){return"number"!=typeof e||!0===t&&Math.floor(e)!==e?-1:e>=0&&e<=255?e:-1}d.arr=c,d.obj=h,d.css=u,d.hex=p,d.num=f;var _=1/12.92;function k(e){return Math.pow((e+.055)/1.055,2.4)}function x(e){var t=e[0]/255,o=e[1]/255,i=e[2]/255;return.2126*(t<=.03928?t*_:k(t))+.7152*(o<=.03928?o*_:k(o))+.0722*(i<=.03928?i*_:k(i))}function w(e){var t=255;8===(e=e.replace(/^#/,"")).length&&(t=parseInt(e.slice(6,8),16),e=e.substring(0,6)),4===e.length&&(t=parseInt(e.slice(3,4).repeat(2),16),e=e.substring(0,3)),3===e.length&&(e=e[0]+e[0]+e[1]+e[1]+e[2]+e[2]);var o=parseInt(e,16);return[o>>16,o>>8&255,255&o,t]}function L(e,t){return function(e,t){return(Math.max(e,t)+.05)/(Math.min(e,t)+.05)}(x(e),x(t))}function A(e,t){return L(w(e),w(t))}function N(e){return e>=7?"AAA":e>=4.5?"AA":e>=3?"AA Large":"Fail"}const S=/\[object Object\]/,E=(e,t)=>{"string"==typeof e&&S.test(e)||t()},O=(e,t)=>{"string"==typeof e&&""===e||t()},H=(e,t)=>{(0,r.b)()&&(r.L.debug([e,t]),r.L.debug("\u2191 We propagate the (submit) event to this target.")),Object.defineProperty(e,"target",{value:t,writable:!1})},q=(e,t,o,i={})=>{var n,r;void 0===e.nextHooks&&(e.nextHooks=new Map),void 0===e.nextState&&(e.nextState=new Map),e.nextState.get(t)!==o&&(e.nextHooks.get(t)instanceof Map==0&&e.nextHooks.set(t,new Map),"function"==typeof i.afterPatch&&(null===(n=e.nextHooks.get(t))||void 0===n||n.set("afterPatch",i.afterPatch)),"function"==typeof i.beforePatch&&(null===(r=e.nextHooks.get(t))||void 0===r||r.set("beforePatch",i.beforePatch)),e.nextState.set(t,o),(e=>{var t,o,i;null===(t=e.nextHooks)||void 0===t||t.forEach(((t,o)=>{var i;const n=t.get("beforePatch");"function"==typeof n&&n(null===(i=e.nextState)||void 0===i?void 0:i.get(o),e.nextState,e,o)})),(null===(o=e.nextState)||void 0===o?void 0:o.size)>0&&(e.state=Object.assign(Object.assign({},e.state),Object.fromEntries(e.nextState)),delete e.nextState,null===(i=e.nextHooks)||void 0===i||i.forEach(((t,o)=>{const i=t.get("afterPatch");"function"==typeof i&&i(e.state[o],e.state,e,o)}))),delete e.nextHooks})(e))},C=(e,t,o,i,r,a={})=>{o(r)?q(e,t,r,null==a?void 0:a.hooks):void 0===r||null===r&&(void 0===(null==a?void 0:a.required)||!1===(null==a?void 0:a.required))?q(e,t,null==a?void 0:a.defaultValue,null==a?void 0:a.hooks):(void 0!==(null==a?void 0:a.required)&&!1!==(null==a?void 0:a.required)||i.add(null),((e,t,o,i)=>{(0,n.d)(`[${e.constructor.name}] Der Property-Wert (${o}) f\xfcr '${t}' ist nicht valide. Folgende Werte sind erlaubt: ${Array.from(i).join(", ")}`)})(e,t,r,i))},T=(e,t,o,i)=>{C(e,t,(e=>"boolean"==typeof e),new Set(["Boolean {true, false}"]),o,i)},M=(e,t,o,i={})=>{const n="number"==typeof i.minLength?null==i?void 0:i.minLength:0;C(e,t,(e=>"string"==typeof e&&e.length>=n&&(void 0===(null==i?void 0:i.maxLength)||e.length<=i.maxLength)),new Set(["String"]),o,i)},I=(e,t,o,i)=>{C(e,t,(e=>"number"==typeof e&&(void 0===(null==i?void 0:i.min)||"number"==typeof(null==i?void 0:i.min)&&e>=i.min)&&(void 0===(null==i?void 0:i.max)||"number"==typeof(null==i?void 0:i.max)&&e<=i.max)),new Set(["Number"]),o,i)},P=(e,t,o,i,n=(e=>e==e),a={})=>{O(i,(()=>{E(i,(()=>{void 0===i&&(i=[]);try{try{i=V(i)}catch(e){}if(Array.isArray(i)){const l=i.find((e=>!o(e)));void 0===l&&n(i)?q(e,t,i,a.hooks):E(l,(()=>{throw r.L.debug(l),new Error("\u2191 Das Schema f\xfcr das Property (_options) ist nicht valide. Der Wert wird nicht ge\xe4ndert.")}))}else E(i,(()=>{throw r.L.debug(i),new Error("\u2191 Das Schema f\xfcr das Property (_options) ist nicht valide. Der Wert wird nicht ge\xe4ndert.")}))}catch(e){r.L.debug(e)}}))}))},j=/^(true|false)$/,$=/^-?(0|[1-9]\d*)$/,D=/^-?(0.|[1-9]\d*.)\d*[1-9]$/,z=e=>{const t=typeof e,o=`${e}`;if("string"==typeof e)if(j.test(e))e="true"===e;else if($.test(e))e=parseInt(e);else if(D.test(e))e=parseFloat(e);else if(F.test(e))try{e=V(e)}catch(e){}return t!==typeof e&&(0,n.d)(`You have used a stringified property value (${o} to ${JSON.stringify(e)}) which type switched from ${t} to ${typeof e}!`),e},B=e=>{try{return JSON.stringify(e).replace(/"/g,"'")}catch(t){throw r.L.warn(["stringifyJson",e]),r.L.error("\u2191 Das JSON konnte nicht in einen String umgewandelt werden. Es wird ein stringifizierbares JSON erwartet."),new Error}},F=/^[{[]/,V=e=>{if("string"==typeof e)try{return JSON.parse(e)}catch(t){if(F.test(e))try{return JSON.parse(e.replace(/'/g,'"'))}catch(t){r.L.warn(["parseJson",e]),r.L.error("\u2191 Der JSON-String konnte nicht geparsed werden. Achten Sie darauf, dass einfache Anf\xfchrungszeichen im Text maskiert werden (&#8216;).")}}throw new Error},K=e=>"boolean"==typeof e?!0===e?"true":"false":void 0,R=e=>"string"==typeof e?e:K(e),W=(e,t)=>s(e,t||(0,r.g)()),J=(e,t)=>l(e,t||(0,r.g)());let U=null;const Y=()=>(U=U||{backgroundColor:"#00000000",color:"#00000000",domNode:(0,r.g)().body,level:"Fail",score:1},U),G=/(\d+, ){3}0\)/,Q=(e,t=Y())=>{const o=getComputedStyle(e),i=G.test(o.backgroundColor)?t.backgroundColor:d.hex(o.backgroundColor),n=G.test(o.color)?t.color:d.hex(o.color),a=A(i,n),l={backgroundColor:i,color:n,domNode:e,level:N(a),score:a};return a<4.5&&r.L.error(["Color-Contrast-Error",{backgroundColor:l.backgroundColor,color:l.color,level:l.level,score:l.score},l.domNode]),l},X=(e,t=Y())=>{t.domNode instanceof HTMLElement&&(t=Q(t.domNode,t));const o=t.domNode.querySelector(e);if(null===o){const o=t.domNode.querySelectorAll('[class="hydrated"]');for(let i=0;i<o.length&&(t.domNode=o[i],null===(t=X(e,t)).domNode);i++);return t}return Q(o,t)},Z=(e,t=window)=>{e instanceof HTMLElement?(t.scrollTo({behavior:"smooth",top:e.getBoundingClientRect().top+(0,r.a)().pageYOffset-50}),e.focus()):(0,n.d)("Das HTMLElement ist nicht valide, zu dem gescrollt werden soll.")},ee=(e,t)=>{if((e instanceof Document||e instanceof HTMLElement||e instanceof ShadowRoot)&&"string"==typeof t){(0,n.d)("Bei der Methode querySelectorAll wurden die Parameter document, selector in selector, document getauscht, da der Parameter selector nicht, allerdings der Parameter document optional sein kann.");const o=`${t}`;t=e,e=o}if("string"==typeof e){const o=W(e,t);o instanceof HTMLElement?Z(o):(0,n.d)(`Es konnte kein HTMLElement mit dem Selector (${e}) gefunden werden, zu dem gescrollt werden soll.`)}else(0,n.d)("Der Selector ist nicht valide, zu dem gescrollt werden soll.")};class te{static queryHtmlElementColors(e,t,o=!1,i=!0){let n=null;if(!0===o||!1===te.executionLock)if(!1===o&&(te.cache.clear(),te.cache.set(t.domNode,t),te.executionLock=!0,!0===i&&r.L.debug("[KoliBriUtils] Color contrast analysis started...")),e===t.domNode)n=t;else{const o=new Set;if(t.domNode.shadowRoot){const e=t.domNode.shadowRoot.children;for(let t=0;t<e.length;t++)o.add(e[t])}const i=t.domNode;if("function"==typeof i.assignedNodes){const e=i.assignedNodes();for(let t=0;t<e.length;t++)e[t]instanceof HTMLElement&&o.add(e[t])}const r=t.domNode.children;for(let e=0;e<r.length;e++)o.add(r[e]);const a=Array.from(o);for(let l=0;l<a.length;l++){let o=te.cache.get(a[l]);void 0===o&&(o=Q(a[l],t)),te.cache.set(a[l],o);const i=te.queryHtmlElementColors(e,o,!0,!1);if(null!==i){n=i;break}}}else r.L.debug("[KoliBriUtils] Call aborted because a color contrast analysis is currently being executed.");return!1===o&&(!0===i&&r.L.debug(`[KoliBriUtils] Color contrast analysis finished (${te.cache.size} DOM elements are analysed).`),te.executionLock=!1,te.cache.clear()),n}}te.executionLock=!1,te.cache=new Map;class oe{}oe.patchTheme=i.p,oe.patchThemeTag=i.a,oe.querySelector=W,oe.querySelectorAll=J,oe.scrollByHTMLElement=Z,oe.scrollBySelector=ee,oe.stringifyJson=B},85726:(e,t,o)=>{o.d(t,{v:()=>a});var i=o(47908),n=o(29091);const r={hooks:{afterPatch:e=>{-1!==e&&0!==e&&(0,i.a)("Don\u2019t Use Tabindex Greater than 0: https://adrianroselli.com/2014/11/dont-use-tabindex-greater-than-0.html")}}},a=(e,t)=>{(0,n.e)(e,"_tabIndex",t,r)}}}]);