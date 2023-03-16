/*! For license information please see 1293.f2fee55b.js.LICENSE.txt */
"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[1293],{90629:(e,t,o)=>{o.d(t,{I:()=>l,a:()=>s,f:()=>a});var i=o(216),n=o(38898),r=o(19482);const a=(e,t,o="")=>{t.forEach(((t,i)=>{const n=`${o}-${i}`;"object"==typeof t&&null!==t&&"string"==typeof t.label&&t.label.length>0&&(Array.isArray(t.options)?a(e,t.options,n):e.set(n,t))}))};class l extends r.I{constructor(e,t,o){super(e,t,o),this.component=e}validateRequired(e){(0,i.b)(this.component,"_required",e)}componentWillLoad(){super.componentWillLoad(),this.validateRequired(this.component._required)}}class s extends l{constructor(e,t,o){super(e,t,o),this.keyOptionMap=new Map,this.getOptionByKey=e=>this.keyOptionMap.get(e),this.isValueInOptions=(e,t)=>void 0!==t.find((t=>t.value===e)),this.beforePatchListValue=(e,t)=>{const o=t.has("_list")?t.get("_list"):this.component.state._list;if(Array.isArray(o)&&o.length>0){this.keyOptionMap.clear(),a(this.keyOptionMap,o);const e=t.has("_value")?t.get("_value"):this.component.state._value;if(!1===this.isValueInOptions(e,o)){const e=o[0].value;t.set("_value",e),this.onStateChange()}}},this.component=e}validateOrientation(e){(0,i.a)(this.component,"_orientation",(e=>"horizontal"===e||"vertical"===e),new Set(["Orientation {horizontal, vertical}"]),e,{defaultValue:"vertical"})}validateList(e){(0,i.d)(this.component,"_list",(e=>"object"==typeof e&&null!==e&&"string"==typeof e.label&&e.label.length>0),e,void 0,{hooks:{beforePatch:this.beforePatchListValue}})}validateValue(e){e=(0,i.m)(e),e=Array.isArray(e)?e[0]:e,(0,i.s)(this.component,"_value",e,{beforePatch:this.beforePatchListValue}),this.setFormAssociatedValue(this.component._value)}componentWillLoad(e){super.componentWillLoad(),this.onStateChange=()=>{if("function"==typeof e){const t=setTimeout((()=>{clearTimeout(t),e(n.S)}))}},this.validateOrientation(this.component._orientation),this.validateList(this.component._list),this.validateValue(this.component._value)}}},19482:(e,t,o)=>{o.d(t,{I:()=>d,g:()=>l});var i=o(99945),n=o(216),r=o(50975),a=o(87435);const l=e=>{const t="string"==typeof e._error&&e._error.length>0&&!0===e._touched,o="string"==typeof e._hint&&e._hint.length>0,i=[];return!0===t&&i.push(`${e._id}-error`),!0===o&&i.push(`${e._id}-hint`),{hasError:t,hasHint:o,ariaDiscribedBy:i}},s=(0,a.b)();class c{constructor(e,t,o){var i,n,r,a,l;if(this.syncFormAssociatedName=()=>{var e;s&&(null===(e=this.formAssociated)||void 0===e||e.setAttribute("name",this.component.state._name||this.component.state._id))},this.setFormAssociatedValue=(e=null)=>{var t;s&&(null===(t=this.formAssociated)||void 0===t||t.setAttribute("value",e))},this.component=e,this.name=t,this.host=o,s){this.formAssociated=document.createElement("input"),this.formAssociated.setAttribute("type","hidden");const e=(null===(i=this.host)||void 0===i?void 0:i.children)||[];for(let t=0;t<e.length;t++)"INPUT"===(null===(n=this.host)||void 0===n?void 0:n.children[t].tagName)&&(null===(r=this.host)||void 0===r||r.removeChild(null===(a=this.host)||void 0===a?void 0:a.children[t]));null===(l=this.host)||void 0===l||l.appendChild(this.formAssociated)}}validateAlert(e){(0,n.b)(this.component,"_alert",e)}validateTouched(e){(0,n.b)(this.component,"_touched",e)}componentWillLoad(){this.validateAlert(this.component._alert),this.validateTouched(this.component._touched)}}class d extends c{constructor(e,t,o){super(e,t,o),this.hideLabel=!1,this.onFacade={onBlur:this.onBlur.bind(this),onChange:this.onChange.bind(this),onClick:this.onClick.bind(this),onFocus:this.onFocus.bind(this)},this.component=e}validateAccessKey(e){(0,n.w)(this.component,"_accessKey",e)}validateAdjustHeight(e){(0,n.b)(this.component,"_adjustHeight",e)}validateDisabled(e){(0,n.b)(this.component,"_disabled",e),!0===e&&(0,i.e)()}validateError(e){(0,n.w)(this.component,"_error",e)}validateHideLabel(e){(0,n.b)(this.component,"_hideLabel",e)}validateHint(e){(0,n.w)(this.component,"_hint",e)}validateId(e){(0,n.w)(this.component,"_id",e,{hooks:{afterPatch:this.syncFormAssociatedName}}),void 0===e&&(0,i.d)("Eine eindeutige ID an den Eingabefeldern ist nicht zwingend erforderlich, k\xf6nnte aber f\xfcr die E2E-Tests relevant sein.")}validateName(e){(0,n.w)(this.component,"_name",e,{hooks:{afterPatch:this.syncFormAssociatedName}}),void 0===e&&(0,i.d)("Ein Name an den Eingabefeldern ist nicht zwingend erforderlich, kann aber f\xfcr die Autocomplete-Funktion des Eingabefeldes relevant sein.")}validateOn(e){"object"==typeof e&&(0,n.s)(this.component,"_on",e)}validateSmartButton(e){(0,n.o)(e,(()=>{try{e=(0,n.p)(e)}catch(e){}(0,n.s)(this.component,"_smartButton",e)}))}validateTabIndex(e){(0,r.v)(this.component,e)}componentWillLoad(){super.componentWillLoad(),this.validateAccessKey(this.component._accessKey),this.validateAdjustHeight(this.component._adjustHeight),this.validateError(this.component._error),this.validateDisabled(this.component._disabled),this.validateHideLabel(this.component._hideLabel),this.validateHint(this.component._hint),this.validateId(this.component._id),this.validateName(this.component._name),this.validateSmartButton(this.component._smartButton),this.validateOn(this.component._on),this.validateTabIndex(this.component._tabIndex),this.syncFormAssociatedName()}onBlur(e){var t;this.component._alert=!0,this.component._touched=!0,"function"==typeof(null===(t=this.component._on)||void 0===t?void 0:t.onBlur)&&this.component._on.onBlur(e)}onChange(e){var t;this.setFormAssociatedValue(e.target.value),"function"==typeof(null===(t=this.component._on)||void 0===t?void 0:t.onChange)&&this.component._on.onChange(e,e.target.value)}onClick(e){var t;"function"==typeof(null===(t=this.component._on)||void 0===t?void 0:t.onClick)&&this.component._on.onClick(e)}onFocus(e){var t;this.component._alert=!0,"function"==typeof(null===(t=this.component._on)||void 0===t?void 0:t.onFocus)&&this.component._on.onFocus(e)}setValue(e,t){var o;this.setFormAssociatedValue(t),"function"==typeof(null===(o=this.component._on)||void 0===o?void 0:o.onChange)&&this.component._on.onChange(e,t)}}},41293:(e,t,o)=>{o.r(t),o.d(t,{kol_input_checkbox:()=>d});var i=o(60356),n=o(38898),r=o(19482),a=o(99945),l=o(216),s=o(90629);class c extends s.I{constructor(e,t,o){super(e,t,o),this.component=e}validateChecked(e){(0,l.b)(this.component,"_checked",e),this.setFormAssociatedValue(this.component.state._checked)}validateIcon(e){(0,l.a)(this.component,"_icons",(e=>"object"==typeof e&&null!==e&&((0,n.b)(e.checked,1)||(0,n.b)(e.indeterminate,1)||(0,n.b)(e.unchecked,1))),new Set(["InputCheckboxIcons"]),e)}validateIndeterminate(e){(0,l.b)(this.component,"_indeterminate",e)}validateType(e){(0,a.d)('The "_type" prop is deprecated. Use "_variant" instead.'),this.validateVariant(e)}validateValue(e){(0,l.s)(this.component,"_value",e)}validateVariant(e){(0,l.a)(this.component,"_variant",(e=>"string"==typeof e&&("button"===e||"checkbox"===e||"switch"===e)),new Set(["String {button, checkbox, switch}"]),e)}componentWillLoad(){super.componentWillLoad(),this.validateChecked(this.component._checked),this.validateIcon(this.component._icon),this.validateIndeterminate(this.component._indeterminate),this.validateValue(this.component._value),this.validateVariant(this.component._variant||this.component._type)}}const d=class{render(){const{ariaDiscribedBy:e}=(0,r.g)(this.state);return(0,i.h)(i.H,null,(0,i.h)("kol-input",{class:{[this.state._variant]:!0},_alert:this.state._alert,_disabled:this.state._disabled,_error:this.state._error,_hideLabel:this.state._hideLabel,_hint:this.state._hint,_id:this.state._id,_required:this.state._required,_touched:this.state._touched},(0,i.h)("span",{"data-role":"button"===this.state._variant?"button":void 0,onKeyPress:"button"===this.state._variant?this.onChange:void 0,tabIndex:"button"===this.state._variant?0:void 0,slot:"label"},(0,i.h)("kol-icon",{onClick:this.onChange,_ariaLabel:"",_icon:this.state._indeterminate?this.state._icon.indeterminate:this.state._checked?this.state._icon.checked:this.state._icon.unchecked}),(0,i.h)("slot",null)),(0,i.h)("div",{slot:"input"},(0,i.h)("input",Object.assign({ref:this.catchRef,accessKey:this.state._accessKey,"aria-describedby":e.length>0?e.join(" "):void 0,"aria-labelledby":`${this.state._id}-label`,checked:!0===this.state._checked,disabled:!0===this.state._disabled,id:this.state._id,indeterminate:!0===this.state._indeterminate,name:this.state._name,required:!0===this.state._required,tabIndex:this.state._tabIndex,title:"",type:"checkbox",value:"string"==typeof this.state._value?this.state._value:""},this.controller.onFacade,{onChange:this.onChange})))))}constructor(e){(0,i.r)(this,e),this.catchRef=e=>{this.ref=e,(0,n.a)(this.host,this.ref)},this.onChange=e=>{this._checked=!1===this._checked,this._indeterminate=!1,this.controller.setValue(e,this._checked)},this._accessKey=void 0,this._alert=!0,this._checked=!1,this._disabled=void 0,this._error=void 0,this._hideLabel=void 0,this._hint="",this._icon=void 0,this._id=void 0,this._indeterminate=void 0,this._name=void 0,this._on=void 0,this._required=void 0,this._tabIndex=void 0,this._touched=!1,this._type=void 0,this._value=void 0,this._variant=void 0,this.state={_checked:!1,_icon:{checked:"fa-solid fa-check",indeterminate:"fa-solid fa-minus",unchecked:"fa-solid fa-plus"},_id:"\u26a0",_indeterminate:!1,_variant:"checkbox"},this.controller=new c(this,"checkbox",this.host)}validateAccessKey(e){this.controller.validateAccessKey(e)}validateAlert(e){this.controller.validateAlert(e)}validateChecked(e){this.controller.validateChecked(e)}validateDisabled(e){this.controller.validateDisabled(e)}validateError(e){this.controller.validateError(e)}validateHideLabel(e){this.controller.validateHideLabel(e)}validateHint(e){this.controller.validateHint(e)}validateIcon(e){this.controller.validateIcon(e)}validateId(e){this.controller.validateId(e)}validateIndeterminate(e){this.controller.validateIndeterminate(e)}validateName(e){this.controller.validateName(e)}validateOn(e){this.controller.validateOn(e)}validateRequired(e){this.controller.validateRequired(e)}validateTabIndex(e){this.controller.validateTabIndex(e)}validateTouched(e){this.controller.validateTouched(e)}validateType(e){this.controller.validateType(e)}validateValue(e){this.controller.validateValue(e)}validateVariant(e){this.controller.validateVariant(e)}componentWillLoad(){this._alert=!0===this._alert,this._touched=!0===this._touched,this.controller.componentWillLoad()}get host(){return(0,i.g)(this)}static get watchers(){return{_accessKey:["validateAccessKey"],_alert:["validateAlert"],_checked:["validateChecked"],_disabled:["validateDisabled"],_error:["validateError"],_hideLabel:["validateHideLabel"],_hint:["validateHint"],_icon:["validateIcon"],_id:["validateId"],_indeterminate:["validateIndeterminate"],_name:["validateName"],_on:["validateOn"],_required:["validateRequired"],_tabIndex:["validateTabIndex"],_touched:["validateTouched"],_type:["validateType"],_value:["validateValue"],_variant:["validateVariant"]}}};d.style={default:":host{--kolibri-border-color:#666;--kolibri-border-radius:0.125rem;--kolibri-border-width:1px;--kolibri-color-error:#f44336;--kolibri-color-info:#2196f3;--kolibri-color-success:#4caf50;--kolibri-color-warning:#ff9800;--kolibri-color-primary:#3f51b5;--kolibri-color-secondary:#ff4081;--kolibri-color-normal:#9e9e9e;--kolibri-color-danger:#f44336;--kolibri-color-ghost:#f5f5f5;--kolibri-color-disabled:#bdbdbd;--kolibri-color-text:#222222;--kolibri-color-visited:#9c27b0;--kolibri-font-family:Verdana, Arial, Tahoma, Helvetica, sans-serif;--kolibri-font-size:16px;--kolibri-spacing:0.25rem}:host{font-family:inherit;font-size:inherit}:host *{hyphens:auto;letter-spacing:inherit;word-break:break-word;word-spacing:inherit}:host{display:inline-block}a,button{background-color:transparent;border:none;font-size:inherit;margin:0;padding:0;transition-duration:0.5s;transition-property:background-color, color, border-color}:host{font-family:var(--kolibri-font-family);font-size:inherit}*{box-sizing:border-box}kol-icon{color:inherit}kol-span-wc{display:grid;gap:var(--kolibri-spacing);place-items:center}kol-span-wc>span{display:flex;gap:var(--kolibri-spacing);place-items:center}kol-span-wc>kol-icon,kol-span-wc>span>kol-icon{display:inline-grid;place-items:center;width:1em;height:1em}a,button,input,select,textarea{appearance:none;cursor:pointer}a.icon-only>kol-span-wc>span>span,button.icon-only>kol-span-wc>span>span{display:none}h1,h2,h3,h4,h5,h6{font-family:var(--kolibri-font-family);font-size:var(--kolibri-font-size);margin:0;padding:0}.kol-required span::after{content:'*'}.kol-disabled{opacity:0.5}.kol-cursor-not-allowed,.kol-cursor-not-allowed *{cursor:not-allowed}input[type='color'],input[type='date'],input[type='datetime-local'],input[type='email'],input[type='file'],input[type='month'],input[type='number'],input[type='password'],input[type='search'],input[type='tel'],input[type='text'],input[type='time'],input[type='url'],input[type='week'],select,textarea{background-color:white;display:block;font-size:1rem;line-height:1.5em;min-height:44px;padding:0.5em 0.75em}input[type='color']{height:2.5em;padding:0.25em 0.5em}textarea{padding:0.5em}input,select,textarea{border-color:var(--kolibri-border-color);border-style:solid;border-width:calc(var(--kolibri-spacing) / 2)}input input.error,input select.error,input textarea.error,select input.error,select select.error,select textarea.error,textarea input.error,textarea select.error,textarea textarea.error{border-color:var(--kolibri-border-error)}input input:focus,input input:hover,input select:focus,input select:hover,input textarea:focus,input textarea:hover,select input:focus,select input:hover,select select:focus,select select:hover,select textarea:focus,select textarea:hover,textarea input:focus,textarea input:hover,textarea select:focus,textarea select:hover,textarea textarea:focus,textarea textarea:hover{border-color:var(--kolibri-color-text)}input:not([type='checkbox']),option,select,textarea{font-size:inherit;letter-spacing:inherit;word-spacing:inherit}label{cursor:pointer}input{border-color:var(--kolibri-border-color);border-width:2px;border-style:solid;line-height:24px;font-size:var(--kolibri-font-size)}.required label>span::after{content:'*';padding-left:0.125em}input:hover{border-color:var(--kolibri-color-normal)}kol-input{align-items:center;display:grid;gap:var(--kolibri-spacing);justify-items:left;width:100}kol-input.checkbox,kol-input.switch{grid-template-columns:auto 1fr}kol-input .input{display:inline-flex;order:1}kol-input .input div{display:inline-flex}kol-input .input input{margin:0px}kol-input label{order:2}kol-input.error>kol-alert,kol-input .hint{grid-column:span 2}kol-input kol-alert.error{order:3}kol-input .hint{order:4}input[type='checkbox']{appearance:none;background-color:white;cursor:pointer;transition:0.5s}input[type='checkbox'].kol-disabled:before{cursor:not-allowed}input[type='checkbox']:before{content:'';cursor:pointer}input[type='checkbox']:checked{background-color:var(--kolibri-color-primary);border-color:var(--kolibri-color-primary)}.disabled{opacity:0.33}.checkbox kol-icon,.switch kol-icon{display:none}.button label{cursor:pointer;display:inline-flex;width:auto}.button label>span>span{display:inline-flex;gap:calc(2 * var(--kolibri-spacing));place-items:center}.button input{display:none}.checkbox input[type='checkbox']{height:1.5em;width:1.5em}.checkbox input[type='checkbox']{height:1.5em;width:1.5em}.checkbox input[type='checkbox']:before{background-color:transparent;display:block;height:1.5em;position:relative;width:1.5em}.checkbox input[type='checkbox']:checked:before{background-color:transparent;border-bottom-width:3px;border-color:white;border-radius:1px;border-right-width:3px;border-style:solid;border-width:0px 3px 3px 0px;height:0.75em;left:calc(0.375em - 2px);transform:rotate(40deg) translate(-50%, -50%);top:calc(0.7125em - 2px);width:0.375em}.checkbox input[type='checkbox']:indeterminate:before{background-color:var(--kolibri-color-normal);height:0.35em;left:0.14em;top:0.45em;width:1em}.switch input[type='checkbox']{display:inline-block;height:1.7em;min-width:3.2em;position:relative;width:3.2em}.switch input[type='checkbox']:before{background-color:black;height:1.2em;left:calc(0.25em - 2px);top:calc(0.25em - 2px);position:absolute;-webkit-transition:0.5s;-moz-transition:0.5s;-ms-transition:0.5s;transition:0.5;width:1.2em}.switch input[type='checkbox']:checked:before{background-color:white;-webkit-transform:translateX(1.5em);-moz-transform:translateX(1.5em);-ms-transform:translateX(1.5em);transform:translateX(1.5em)}.switch input[type='checkbox']:indeterminate:before{background-color:var(--kolibri-color-normal);transform:translateX(0.75em)}"}},216:(e,t,o)=>{o.d(t,{K:()=>oe,a:()=>O,b:()=>T,c:()=>L,d:()=>V,e:()=>M,f:()=>E,g:()=>I,h:()=>K,i:()=>ee,j:()=>R,k:()=>W,l:()=>te,m:()=>D,n:()=>G,o:()=>C,p:()=>$,q:()=>J,r:()=>c,s:()=>H,t:()=>Q,u:()=>F,w:()=>q});var i=o(37072),n=o(99945),r=o(87435);const a=(e,t)=>{t.forEach((t=>{!1===e.has(t)&&e.add(t)}))},l=(e,t=document)=>{if(t instanceof Document||t instanceof HTMLElement||t instanceof ShadowRoot){const o=new Set;a(o,t.querySelectorAll(e));const i=t.querySelectorAll('[class*="hydrated"]');for(let t=0;t<i.length;t++){const n=i[t].shadowRoot;a(o,l(e,"object"==typeof n&&null!==n?n:i[t]))}return Array.from(o)}throw new Error("The parameter document for the method querySelectorAll is not type of Document, HTMLElement or ShadowRoot.")},s=(e,t=document)=>{if(t instanceof Document||t instanceof HTMLElement||t instanceof ShadowRoot){let o=t.querySelector(e);if(null===o){const i=t.querySelectorAll('[class*="hydrated"]');for(let t=0;t<i.length;t++){const n=i[t].shadowRoot;if(o=s(e,"object"==typeof n&&null!==n?n:i[t]),null!==o)break}}return o}throw new Error("The parameter document for the method querySelector is not type of Document, HTMLElement or ShadowRoot.")};var c=b,d=b,h=function(e){var t=f(e);return{r:t[0],g:t[1],b:t[2],a:3==t.length?255:Math.round(t[3])}},u=function(e){var t=f(e);return 3==t.length&&t.push(255),255==t[3]?"rgb("+t[0]+", "+t[1]+", "+t[2]+")":0==t[3]?"rgba("+t[0]+", "+t[1]+", "+t[2]+", 0)":"rgba("+t[0]+", "+t[1]+", "+t[2]+", "+String(t[3]/255).substr(1)+")"},p=function(e){3==(t=f(e)).length&&t.push(255);var t,o=255==t[3],i=v(t[0]),n=v(t[1]),r=v(t[2]),a=function(e,t,o,i){var n=["ff","00","11","22","33","44","55","66","77","88","99","aa","bb","cc","dd","ee"];return-1!=n.indexOf(e)&&-1!=n.indexOf(t)&&-1!=n.indexOf(o)&&-1!=n.indexOf(i)}(i,n,r,t=v(Math.round(t[3])));return o?a?"#"+i.charAt(0)+n.charAt(0)+r.charAt(0):"#"+i+n+r:a?"#"+i.charAt(0)+n.charAt(0)+r.charAt(0)+t.charAt(0):"#"+i+n+r+t},m=function(e){var t=f(e);return 3==t.length?t.push(255):t[3]=Math.round(t[3]),(t[3]<<24>>>0|t[0]<<16|t[1]<<8|t[2])>>>0};function b(e){var t=f(e);return 3==t.length?t.concat(255):(t[3]=Math.round(t[3]),t)}function f(e){return"string"==typeof e?function(e){return"red"==e?[255,0,0]:"green"==e?[0,255,0]:"blue"==e?[0,0,255]:"black"==e?[0,0,0]:"white"==e?[255,255,255]:"cyan"==e?[0,255,255]:"gray"==e||"grey"==e?[128,128,128]:"magenta"==e||"pink"==e?[255,0,255]:"yellow"==e?[255,255,0]:void 0}(e=e.toLowerCase())||function(e){var t=e.replace(/^#/,""),o=t.length;if(3==o||4==o){var i=g(t[0]),n=g(t[1]),r=g(t[2]),a=3==o?255:g(t[3]);if(isNaN(i)||isNaN(n)||isNaN(r)||isNaN(a))return;return[i,n,r,a]}}(e)||function(e){var t=e.replace(/^#/,""),o=t.length;if(6==o||8==o){var i=g(t.slice(0,2)),n=g(t.slice(2,4)),r=g(t.slice(4,6)),a=6==o?255:g(t.slice(6,8));if(isNaN(i)||isNaN(n)||isNaN(r)||isNaN(a))return;return[i,n,r,a]}}(e)||function(e){if("rgb("==e.substr(0,4)){var t=(e=e.match(/^rgb\(([^)]+)\)/)[1]).split(/ *, */).map(Number),o=y(t[0],!0),i=y(t[1],!0),n=y(t[2],!0);if(-1!=o&&-1!=i&&-1!=n)return[o,i,n,255]}}(e)||function(e){if("rgba("==e.substr(0,5)){var t=(e=e.match(/^rgba\(([^)]+)\)/)[1]).split(/ *, */).map(Number),o=y(t[0],!0),i=y(t[1],!0),n=y(t[2],!0),r=y(255*t[3]);if(-1!=o&&-1!=i&&-1!=n&&-1!=r)return[o,i,n,r]}}(e)||[0,0,0,255]:function(e){if("[object Object]"===Object.prototype.toString.call(e)&&Object.getPrototypeOf(e)===Object.getPrototypeOf({})){var t=y(null!=e.r?e.r:null!=e.red?e.red:0,!0),o=y(null!=e.g?e.g:null!=e.green?e.green:0,!0),i=y(null!=e.b?e.b:null!=e.blue?e.blue:0,!0),n=y(null!=e.a?e.a:null!=e.alpha?e.alpha:255,!0);if(-1!=t&&-1!=o&&-1!=i&&-1!=n)return[t,o,i,n]}}(e)||function(e){if(Array.isArray(e)&&(3==e.length||4==e.length)){var t=y(e[0],!0),o=y(e[1],!0),i=y(e[2],!0),n=y(null!=e[3]?e[3]:255,!0);if(-1!=t&&-1!=o&&-1!=i&&-1!=n)return[t,o,i,n]}}(e)||function(e){if("number"==typeof e&&Math.floor(e)==e&&e<=4294967295&&e>=0)return[e>>16&255,e>>8&255,255&e,e>>24&255]}(e)||[0,0,0,255]}function v(e){var t=e.toString(16);return 1==t.length?"0"+t:t}function g(e){return 1==e.length?parseInt(e+e,16):parseInt(e,16)}function y(e,t){return"number"!=typeof e||!0===t&&Math.floor(e)!==e?-1:e>=0&&e<=255?e:-1}c.arr=d,c.obj=h,c.css=u,c.hex=p,c.num=m;var k=1/12.92;function _(e){return Math.pow((e+.055)/1.055,2.4)}function x(e){var t=e[0]/255,o=e[1]/255,i=e[2]/255;return.2126*(t<=.03928?t*k:_(t))+.7152*(o<=.03928?o*k:_(o))+.0722*(i<=.03928?i*k:_(i))}function w(e){var t=255;8===(e=e.replace(/^#/,"")).length&&(t=parseInt(e.slice(6,8),16),e=e.substring(0,6)),4===e.length&&(t=parseInt(e.slice(3,4).repeat(2),16),e=e.substring(0,3)),3===e.length&&(e=e[0]+e[0]+e[1]+e[1]+e[2]+e[2]);var o=parseInt(e,16);return[o>>16,o>>8&255,255&o,t]}function A(e,t){return function(e,t){return(Math.max(e,t)+.05)/(Math.min(e,t)+.05)}(x(e),x(t))}function L(e,t){return A(w(e),w(t))}function S(e){return e>=7?"AAA":e>=4.5?"AA":e>=3?"AA Large":"Fail"}const N=/\[object Object\]/,C=(e,t)=>{"string"==typeof e&&N.test(e)||t()},I=(e,t)=>{"string"==typeof e&&""===e||t()},E=(e,t)=>{(0,r.b)()&&(r.L.debug([e,t]),r.L.debug("\u2191 We propagate the (submit) event to this target.")),Object.defineProperty(e,"target",{value:t,writable:!1})},H=(e,t,o,i={})=>{var n,r;void 0===e.nextHooks&&(e.nextHooks=new Map),void 0===e.nextState&&(e.nextState=new Map),e.nextState.get(t)!==o&&(e.nextHooks.get(t)instanceof Map==0&&e.nextHooks.set(t,new Map),"function"==typeof i.afterPatch&&(null===(n=e.nextHooks.get(t))||void 0===n||n.set("afterPatch",i.afterPatch)),"function"==typeof i.beforePatch&&(null===(r=e.nextHooks.get(t))||void 0===r||r.set("beforePatch",i.beforePatch)),e.nextState.set(t,o),(e=>{var t,o,i;null===(t=e.nextHooks)||void 0===t||t.forEach(((t,o)=>{var i;const n=t.get("beforePatch");"function"==typeof n&&n(null===(i=e.nextState)||void 0===i?void 0:i.get(o),e.nextState,e,o)})),(null===(o=e.nextState)||void 0===o?void 0:o.size)>0&&(e.state=Object.assign(Object.assign({},e.state),Object.fromEntries(e.nextState)),delete e.nextState,null===(i=e.nextHooks)||void 0===i||i.forEach(((t,o)=>{const i=t.get("afterPatch");"function"==typeof i&&i(e.state[o],e.state,e,o)}))),delete e.nextHooks})(e))},O=(e,t,o,i,r,a={})=>{o(r)?H(e,t,r,null==a?void 0:a.hooks):void 0===r||null===r&&(void 0===(null==a?void 0:a.required)||!1===(null==a?void 0:a.required))?H(e,t,null==a?void 0:a.defaultValue,null==a?void 0:a.hooks):(void 0!==(null==a?void 0:a.required)&&!1!==(null==a?void 0:a.required)||i.add(null),((e,t,o,i)=>{(0,n.d)(`[${e.constructor.name}] Der Property-Wert (${o}) f\xfcr '${t}' ist nicht valide. Folgende Werte sind erlaubt: ${Array.from(i).join(", ")}`)})(e,t,r,i))},T=(e,t,o,i)=>{O(e,t,(e=>"boolean"==typeof e),new Set(["Boolean {true, false}"]),o,i)},q=(e,t,o,i={})=>{const n="number"==typeof i.minLength?null==i?void 0:i.minLength:0;O(e,t,(e=>"string"==typeof e&&e.length>=n&&(void 0===(null==i?void 0:i.maxLength)||e.length<=i.maxLength)),new Set(["String"]),o,i)},M=(e,t,o,i)=>{O(e,t,(e=>"number"==typeof e&&(void 0===(null==i?void 0:i.min)||"number"==typeof(null==i?void 0:i.min)&&e>=i.min)&&(void 0===(null==i?void 0:i.max)||"number"==typeof(null==i?void 0:i.max)&&e<=i.max)),new Set(["Number"]),o,i)},V=(e,t,o,i,n=(e=>e==e),a={})=>{I(i,(()=>{C(i,(()=>{void 0===i&&(i=[]);try{try{i=$(i)}catch(e){}if(Array.isArray(i)){const l=i.find((e=>!o(e)));void 0===l&&n(i)?H(e,t,i,a.hooks):C(l,(()=>{throw r.L.debug(l),new Error("\u2191 Das Schema f\xfcr das Property (_options) ist nicht valide. Der Wert wird nicht ge\xe4ndert.")}))}else C(i,(()=>{throw r.L.debug(i),new Error("\u2191 Das Schema f\xfcr das Property (_options) ist nicht valide. Der Wert wird nicht ge\xe4ndert.")}))}catch(e){r.L.debug(e)}}))}))},j=/^(true|false)$/,P=/^-?(0|[1-9]\d*)$/,z=/^-?(0.|[1-9]\d*.)\d*[1-9]$/,D=e=>{const t=typeof e,o=`${e}`;if("string"==typeof e)if(j.test(e))e="true"===e;else if(P.test(e))e=parseInt(e);else if(z.test(e))e=parseFloat(e);else if(B.test(e))try{e=$(e)}catch(e){}return t!==typeof e&&(0,n.d)(`You have used a stringified property value (${o} to ${JSON.stringify(e)}) which type switched from ${t} to ${typeof e}!`),e},F=e=>{try{return JSON.stringify(e).replace(/"/g,"'")}catch(t){throw r.L.warn(["stringifyJson",e]),r.L.error("\u2191 Das JSON konnte nicht in einen String umgewandelt werden. Es wird ein stringifizierbares JSON erwartet."),new Error}},B=/^[{[]/,$=e=>{if("string"==typeof e)try{return JSON.parse(e)}catch(t){if(B.test(e))try{return JSON.parse(e.replace(/'/g,'"'))}catch(t){r.L.warn(["parseJson",e]),r.L.error("\u2191 Der JSON-String konnte nicht geparsed werden. Achten Sie darauf, dass einfache Anf\xfchrungszeichen im Text maskiert werden (&#8216;).")}}throw new Error},K=e=>"boolean"==typeof e?!0===e?"true":"false":void 0,R=e=>"string"==typeof e?e:K(e),W=(e,t)=>s(e,t||(0,r.g)()),J=(e,t)=>l(e,t||(0,r.g)());let U=null;const X=()=>(U=U||{backgroundColor:"#00000000",color:"#00000000",domNode:(0,r.g)().body,level:"Fail",score:1},U),Y=/(\d+, ){3}0\)/,G=(e,t=X())=>{const o=getComputedStyle(e),i=Y.test(o.backgroundColor)?t.backgroundColor:c.hex(o.backgroundColor),n=Y.test(o.color)?t.color:c.hex(o.color),a=L(i,n),l={backgroundColor:i,color:n,domNode:e,level:S(a),score:a};return a<4.5&&r.L.error(["Color-Contrast-Error",{backgroundColor:l.backgroundColor,color:l.color,level:l.level,score:l.score},l.domNode]),l},Q=(e,t=X())=>{t.domNode instanceof HTMLElement&&(t=G(t.domNode,t));const o=t.domNode.querySelector(e);if(null===o){const o=t.domNode.querySelectorAll('[class="hydrated"]');for(let i=0;i<o.length&&(t.domNode=o[i],null===(t=Q(e,t)).domNode);i++);return t}return G(o,t)},Z=(e,t=window)=>{e instanceof HTMLElement?(t.scrollTo({behavior:"smooth",top:e.getBoundingClientRect().top+(0,r.a)().pageYOffset-50}),e.focus()):(0,n.d)("Das HTMLElement ist nicht valide, zu dem gescrollt werden soll.")},ee=(e,t)=>{if((e instanceof Document||e instanceof HTMLElement||e instanceof ShadowRoot)&&"string"==typeof t){(0,n.d)("Bei der Methode querySelectorAll wurden die Parameter document, selector in selector, document getauscht, da der Parameter selector nicht, allerdings der Parameter document optional sein kann.");const o=`${t}`;t=e,e=o}if("string"==typeof e){const o=W(e,t);o instanceof HTMLElement?Z(o):(0,n.d)(`Es konnte kein HTMLElement mit dem Selector (${e}) gefunden werden, zu dem gescrollt werden soll.`)}else(0,n.d)("Der Selector ist nicht valide, zu dem gescrollt werden soll.")};class te{static queryHtmlElementColors(e,t,o=!1,i=!0){let n=null;if(!0===o||!1===te.executionLock)if(!1===o&&(te.cache.clear(),te.cache.set(t.domNode,t),te.executionLock=!0,!0===i&&r.L.debug("[KoliBriUtils] Color contrast analysis started...")),e===t.domNode)n=t;else{const o=new Set;if(t.domNode.shadowRoot){const e=t.domNode.shadowRoot.children;for(let t=0;t<e.length;t++)o.add(e[t])}const i=t.domNode;if("function"==typeof i.assignedNodes){const e=i.assignedNodes();for(let t=0;t<e.length;t++)e[t]instanceof HTMLElement&&o.add(e[t])}const r=t.domNode.children;for(let e=0;e<r.length;e++)o.add(r[e]);const a=Array.from(o);for(let l=0;l<a.length;l++){let o=te.cache.get(a[l]);void 0===o&&(o=G(a[l],t)),te.cache.set(a[l],o);const i=te.queryHtmlElementColors(e,o,!0,!1);if(null!==i){n=i;break}}}else r.L.debug("[KoliBriUtils] Call aborted because a color contrast analysis is currently being executed.");return!1===o&&(!0===i&&r.L.debug(`[KoliBriUtils] Color contrast analysis finished (${te.cache.size} DOM elements are analysed).`),te.executionLock=!1,te.cache.clear()),n}}te.executionLock=!1,te.cache=new Map;class oe{}oe.patchTheme=i.p,oe.patchThemeTag=i.a,oe.querySelector=W,oe.querySelectorAll=J,oe.scrollByHTMLElement=Z,oe.scrollBySelector=ee,oe.stringifyJson=F},50975:(e,t,o)=>{o.d(t,{v:()=>a});var i=o(99945),n=o(216);const r={hooks:{afterPatch:e=>{-1!==e&&0!==e&&(0,i.a)("Don\u2019t Use Tabindex Greater than 0: https://adrianroselli.com/2014/11/dont-use-tabindex-greater-than-0.html")}}},a=(e,t)=>{(0,n.e)(e,"_tabIndex",t,r)}}}]);