/*! For license information please see 5001.js.LICENSE.txt */
"use strict";(self.webpackChunk_public_ui_designer=self.webpackChunk_public_ui_designer||[]).push([[5001],{24984:(t,e,n)=>{n.d(e,{I:()=>o});var i=n(95946);const o=({accessKey:t,label:e})=>{let[n,...o]=e.split(t);return 0===o.length&&(t=t.toUpperCase(),[n,...o]=e.split(t)),0===o.length&&(t=t.toLowerCase(),[n,...o]=e.split(t)),(0,i.h)(i.F,null,n,o.length?(0,i.h)(i.F,null,(0,i.h)("u",null,t),o.join(t)):null)}},16378:(t,e,n)=>{n.d(e,{A:()=>s});var i=n(47363),o=n(21824);const a=(0,n(16049).d)();class s{constructor(t,e,n){var i,s;if(this.setFormAssociatedValue=t=>{var e;const n=null===(e=this.formAssociated)||void 0===e?void 0:e.getAttribute("name");null!==n&&""!==n||(0,o.d)(` The form field (${this.name}) must have a name attribute to be form-associated. Please define the _name attribute.`);const i=this.tryToStringifyValue(t);this.syncValue(t,i,this.formAssociated),this.syncValue(t,i,this.syncToOwnInput)},this.component=t,this.host=this.findHostWithShadowRoot(n),this.name=e,a){switch(null===(i=this.host)||void 0===i||i.querySelectorAll("input,select,textarea").forEach((t=>{var e;null===(e=this.host)||void 0===e||e.removeChild(t)})),this.name){case"button":this.formAssociated=document.createElement("button");break;case"select":this.formAssociated=document.createElement("select"),this.formAssociated.setAttribute("multiple","");break;case"textarea":this.formAssociated=document.createElement("textarea");break;default:this.formAssociated=document.createElement("input"),this.formAssociated.setAttribute("type","hidden")}this.formAssociated.setAttribute("aria-hidden","true"),this.formAssociated.setAttribute("data-form-associated",""),this.formAssociated.setAttribute("hidden",""),null===(s=this.host)||void 0===s||s.appendChild(this.formAssociated)}}findHostWithShadowRoot(t){for(;null===(null==t?void 0:t.shadowRoot)&&t!==document.body;)(t=null==t?void 0:t.parentNode).host&&(t=t.host);return t}setAttribute(t,e,n){if(a)try{if("boolean"!=typeof(n="object"==typeof n&&null!==n?JSON.stringify(n):n)&&"number"!=typeof n&&"string"!=typeof n)throw new Error("Invalid value type: "+typeof n);null==e||e.setAttribute(t,`${n}`)}catch(n){null==e||e.removeAttribute(t)}}tryToStringifyValue(t){try{return"object"==typeof t&&null!==t?JSON.stringify(t).toString():null==t?null:t.toString()}catch(t){return(0,o.g)(`The form field raw value is not able to stringify! ${t}`),""}}syncValue(t,e,n){n&&("select"===this.name?(n.querySelectorAll("option").forEach((t=>{n.removeChild(t)})),Array.isArray(t)&&t.forEach((t=>{const e=this.tryToStringifyValue(t);if("string"==typeof e){const t=document.createElement("option");t.setAttribute("value",e),t.setAttribute("selected",""),n.appendChild(t)}}))):"string"==typeof e?(n.setAttribute("value",e),n.value=e):(n.removeAttribute("value"),n.value=""))}validateName(t){((t,e,n)=>{(0,i.d)(t,"_name",e,n)})(this.component,t,{hooks:{afterPatch:()=>{this.setAttribute("name",this.formAssociated,this.component.state._name)}}}),void 0===t&&(0,o.d)("Ein Name am Eingabefeldern oder Schalter ist nicht zwingend erforderlich, kann aber für die Autocomplete-Funktion und für das statische Versenden des Eingabefeldes relevant sein.")}validateSyncValueBySelector(t){if(a&&"string"==typeof t){const e=document.querySelector(t);e&&(this.syncToOwnInput=e)}}componentWillLoad(){this.validateName(this.component._name),this.validateSyncValueBySelector(this.component._syncValueBySelector)}}},71514:(t,e,n)=>{n.d(e,{I:()=>u,g:()=>c});var i=n(47363),o=n(93749),a=n(93580),s=n(21824),l=n(43985),r=n(3909),h=n(16378);const c=t=>{const e="string"==typeof t._error&&t._error.length>0&&!0===t._touched,n="string"==typeof t._hint&&t._hint.length>0,i=[];return!0===e&&i.push(`${t._id}-error`),!0===n&&i.push(`${t._id}-hint`),{hasError:e,hasHint:n,ariaDescribedBy:i}};class d extends h.A{constructor(t,e,n){super(t,e,n),this.component=t}validateAlert(t){(0,i.a)(this.component,"_alert",t)}validateTouched(t){((t,e)=>{(0,i.a)(t,"_touched",e)})(this.component,t)}componentWillLoad(){super.componentWillLoad(),this.validateAlert(this.component._alert),this.validateTouched(this.component._touched)}}class u extends d{constructor(t,e,n){super(t,e,n),this.valueChangeListeners=[],this.onFacade={onBlur:this.onBlur.bind(this),onChange:this.onChange.bind(this),onClick:this.onClick.bind(this),onFocus:this.onFocus.bind(this)},this.component=t}validateAccessKey(t){(0,i.d)(this.component,"_accessKey",t)}validateAdjustHeight(t){((t,e)=>{(0,i.a)(t,"_adjustHeight",e)})(this.component,t)}validateDisabled(t){(0,i.a)(this.component,"_disabled",t),!0===t&&(0,s.e)()}validateError(t){(0,i.d)(this.component,"_error",t)}validateHideError(t){((t,e,n)=>{(0,i.a)(t,"_hideError",e,n)})(this.component,t,{hooks:{afterPatch:()=>{this.component.state._hideError&&(0,s.a)("Property hide-error for inputs: Only use when the error message is shown outside of the input component.")}}})}validateHideLabel(t){(0,o.v)(this.component,t,{hooks:{afterPatch:()=>{this.component.state._hideLabel&&(0,s.a)("Property hide-label for inputs: Only use for exceptions like search inputs that are clearly identifiable by their context.")}}})}validateHint(t){(0,i.d)(this.component,"_hint",t)}validateId(t){(0,i.d)(this.component,"_id",t,{hooks:{afterPatch:()=>{this.setAttribute("id",this.formAssociated,this.component.state._id)}},minLength:1}),""!==t&&void 0!==t||(0,s.d)("Eine eindeutige ID an den Eingabefeldern ist nicht zwingend erforderlich, könnte aber für die E2E-Tests relevant sein.")}validateLabel(t){(0,a.a)(this.component,t)}validateOn(t){"object"==typeof t&&(0,i.s)(this.component,"_on",t)}validateSmartButton(t){(0,i.o)(t,(()=>{try{t=(0,i.p)(t)}catch(t){}(0,i.s)(this.component,"_smartButton",t)}))}validateTabIndex(t){(0,r.v)(this.component,t)}componentWillLoad(){super.componentWillLoad(),this.validateAccessKey(this.component._accessKey),this.validateAdjustHeight(this.component._adjustHeight),this.validateError(this.component._error),this.validateDisabled(this.component._disabled),this.validateHideError(this.component._hideError),this.validateHideLabel(this.component._hideLabel),this.validateHint(this.component._hint),this.validateId(this.component._id),this.validateLabel(this.component._label),this.validateSmartButton(this.component._smartButton),this.validateOn(this.component._on),this.validateTabIndex(this.component._tabIndex)}onBlur(t){var e;this.component._alert=!0,this.component._touched=!0,(0,l.s)(t),(0,l.t)("blur",this.host),"function"==typeof(null===(e=this.component._on)||void 0===e?void 0:e.onBlur)&&this.component._on.onBlur(t)}onChange(t){var e;const n=t.target.value;(0,l.s)(t),(0,l.t)("change",this.host,n),this.setFormAssociatedValue(n),"function"==typeof(null===(e=this.component._on)||void 0===e?void 0:e.onChange)&&this.component._on.onChange(t,n),this.valueChangeListeners.forEach((t=>t(n)))}onClick(t){var e;(0,l.s)(t),(0,l.t)("click",this.host),"function"==typeof(null===(e=this.component._on)||void 0===e?void 0:e.onClick)&&this.component._on.onClick(t)}onFocus(t){var e;this.component._alert=!0,(0,l.s)(t),(0,l.t)("focus",this.host),"function"==typeof(null===(e=this.component._on)||void 0===e?void 0:e.onFocus)&&this.component._on.onFocus(t)}setValue(t,e){var n;this.setFormAssociatedValue(e),"function"==typeof(null===(n=this.component._on)||void 0===n?void 0:n.onChange)&&this.component._on.onChange(t,e)}addValueChangeListener(t){this.valueChangeListeners.push(t)}}},46355:(t,e,n)=>{n.d(e,{I:()=>u,a:()=>p,f:()=>d,v:()=>c});var i=n(47363),o=n(93580),a=n(21824),s=n(48125),l=n(71514);const r=["horizontal","vertical"],h=t=>{if("object"==typeof t&&null!==t){if("string"==typeof t.label&&t.label.length>0)return t.disabled=!0===t.disabled,t.label=`${t.label}`.trim(),!1===(0,o.h)(t.label,3)&&!1===(0,o.c)(t.label)&&(0,a.a)(`Ein abweichendes Aria-Label (${t.label}) ist nicht barrierefrei. Ein abweichendes Aria-Label sollte aus mindestens drei lesbaren Zeichen bestehen.`),!Array.isArray(t.options)||void 0===t.options.find((t=>!1===h(t)));if("number"==typeof t.label)return!0}return!1},c=(t,e,n={})=>{(0,i.c)(t,"_options",h,e,void 0,n)},d=(t,e,n="")=>{e.forEach(((e,i)=>{const o=`${n}-${i}`;"object"==typeof e&&null!==e&&"string"==typeof e.label&&e.label.length>0&&(Array.isArray(e.options)?d(t,e.options,o):t.set(o,e))}))};class u extends l.I{constructor(t,e,n){super(t,e,n),this.component=t}validateRequired(t){((t,e)=>{(0,i.a)(t,"_required",e)})(this.component,t)}componentWillLoad(){super.componentWillLoad(),this.validateRequired(this.component._required)}}class p extends u{constructor(t,e,n){super(t,e,n),this.keyOptionMap=new Map,this.getOptionByKey=t=>this.keyOptionMap.get(t),this.isValueInOptions=(t,e)=>void 0!==e.find((e=>e.value===t)),this.beforePatchOptions=(t,e)=>{const n=e.has("_options")?e.get("_options"):this.component.state._options;if(Array.isArray(n)&&n.length>0){this.keyOptionMap.clear(),d(this.keyOptionMap,n);const t=e.has("_value")?e.get("_value"):this.component.state._value;if(!1===this.isValueInOptions(t,n)){const t=n[0].value;e.set("_value",t),this.onStateChange()}}},this.component=t}validateOrientation(t){(0,i.w)(this.component,"_orientation",(t=>"string"==typeof t&&r.includes(t)),new Set([`Orientation {${r.join(", ")}`]),t,{defaultValue:"vertical"})}validateOptions(t){((t,e,n={})=>{(0,i.c)(t,"_options",(t=>"object"==typeof t&&null!==t&&"string"==typeof t.label&&t.label.length>0),e,void 0,n)})(this.component,t,{hooks:{beforePatch:this.beforePatchOptions}})}validateValue(t){t=(0,i.m)(t),t=Array.isArray(t)?t[0]:t,(0,i.s)(this.component,"_value",t,{beforePatch:this.beforePatchOptions}),this.setFormAssociatedValue(this.component._value)}componentWillLoad(t){super.componentWillLoad(),this.onStateChange=()=>{if("function"==typeof t){const e=setTimeout((()=>{clearTimeout(e),t(s.S)}))}},this.validateOrientation(this.component._orientation),this.validateOptions(this.component._options),this.validateValue(this.component._value)}}},37626:(t,e,n)=>{n.d(e,{I:()=>r});var i=n(9996),o=n(47363),a=n(48125),s=n(71514);const l=(t,e)=>{const n=t;"object"==typeof n&&null!==n&&((0,a.i)(n.right,1)&&(n.right={icon:n.right}),(0,a.i)(n.left,1)&&(n.left={icon:n.left}),e.set("_icons",n))};class r extends s.I{constructor(t,e,n){super(t,e,n),this.component=t}validateIcon(t){this.validateIcons(t)}validateIcons(t){(0,o.o)(t,(()=>{try{t=(0,o.p)(t)}catch(t){}(0,o.w)(this.component,"_icons",(t=>"object"==typeof t&&null!==t&&((0,a.i)(t.left,1)||(0,i.i)(t.left)||(0,a.i)(t.right,1)||(0,i.i)(t.right))),new Set(["KoliBriHorizontalIcon"]),t,{hooks:{beforePatch:l},required:!0})}))}componentWillLoad(){super.componentWillLoad(),this.validateIcons(this.component._icons||this.component._icon)}}},43985:(t,e,n)=>{function i(t){t.stopImmediatePropagation(),t.stopPropagation()}function o(t,e,n){e&&function(t,e,n){t.dispatchEvent(function(t,e){return new CustomEvent(`kol-${t}`,{bubbles:!0,cancelable:!0,composed:!0,detail:e})}(e,n))}(e,t,n)}n.d(e,{s:()=>i,t:()=>o})},93749:(t,e,n)=>{n.d(e,{v:()=>o});var i=n(47363);const o=(t,e,n={})=>{(0,i.a)(t,"_hideLabel",e,n)}},9996:(t,e,n)=>{n.d(e,{i:()=>s,v:()=>l});var i=n(47363),o=n(48125);const a=(t,e,n)=>{(0,o.c)(n)?t[e]=n:(0,o.i)(n,1)&&(t[e]={icon:n})},s=t=>"object"==typeof t&&null!==t&&(void 0===t.style||(0,o.b)(t.style))&&(0,o.i)(t.icon,1),l=(t,e)=>{(0,i.o)(e,(()=>{try{e=(0,i.p)(e)}catch(t){}(0,i.w)(t,"_icons",(t=>null===t||(0,o.i)(t,1)||"object"==typeof t&&null!==t&&((0,o.i)(t.left,1)||s(t.left)||(0,o.i)(t.right,1)||s(t.right)||(0,o.i)(t.top,1)||s(t.top)||(0,o.i)(t.bottom,1)||s(t.bottom))),new Set(["KoliBriIcon"]),e,{hooks:{beforePatch:(e,n)=>{null===e&&n.set("_icons",{}),(t=>{var e,n,i;if(null===(e=t.nextState)||void 0===e?void 0:e.has("_icons")){const e=null===(n=t.nextState)||void 0===n?void 0:n.get("_icons");null===(i=t.nextState)||void 0===i||i.set("_icons",(t=>{let e={};return(0,o.i)(t,1)?e={left:{icon:t}}:"object"==typeof t&&null!==t&&(a(e,"top",t.top),a(e,"right",t.right),a(e,"bottom",t.bottom),a(e,"left",t.left)),e})(e))}})(t)}},required:!0})}))}},65001:(t,e,n)=>{n.r(e),n.d(e,{kol_select:()=>m});var i=n(95946),o=n(16049),a=n(43985),s=n(48125),l=n(71514),r=n(24984),h=n(46355),c=n(53026),d=n(47363),u=n(37626);class p extends u.I{constructor(t,e,n){super(t,e,n),this.keyOptionMap=new Map,this.getOptionByKey=t=>this.keyOptionMap.get(t),this.isValueInOptions=(t,e)=>void 0!==e.find((e=>"string"==typeof e.value?e.value===t:!!Array.isArray(e.options)&&this.isValueInOptions(t,e.options))),this.filterValuesInOptions=(t,e)=>t.filter((t=>void 0!==this.isValueInOptions(t,e))),this.beforePatchOptions=(t,e)=>{const n=e.has("_options")?e.get("_options"):this.component.state._options;if(Array.isArray(n)&&n.length>0){this.keyOptionMap.clear(),(0,h.f)(this.keyOptionMap,n);const t=e.has("_value")?e.get("_value"):this.component.state._value,i=this.filterValuesInOptions(Array.isArray(t)&&t.length>0?t:[],n);!1===this.component._multiple&&0===i.length?(e.set("_value",[n[0].value]),this.onStateChange()):Array.isArray(t)&&i.length<t.length&&(e.set("_value",i),this.onStateChange())}},this.component=t}validateOptions(t){(0,h.v)(this.component,t,{hooks:{beforePatch:this.beforePatchOptions}})}validateMultiple(t){(0,d.a)(this.component,"_multiple",t,{hooks:{beforePatch:this.beforePatchOptions}})}validateRequired(t){(0,d.a)(this.component,"_required",t)}validateRows(t){(0,c.v)(this.component,t)}validateValue(t){(0,d.c)(this.component,"_value",(()=>!0),t,void 0,{hooks:{beforePatch:this.beforePatchOptions}}),this.setFormAssociatedValue(this.component._value)}componentWillLoad(t){super.componentWillLoad(),this.onStateChange=()=>{if("function"==typeof t){const e=setTimeout((()=>{clearTimeout(e),t(s.S)}))}},this.validateOptions(this.component._options),this.validateMultiple(this.component._multiple),this.validateRequired(this.component._required),this.validateRows(this.component._rows),this.validateValue(this.component._value)}}const v=(t,e)=>Array.isArray(t)&&t.includes(e),m=class{getValue(){return t=this,null,e=function*(){return this._value},new Promise(((n,i)=>{var o=t=>{try{s(e.next(t))}catch(t){i(t)}},a=t=>{try{s(e.throw(t))}catch(t){i(t)}},s=t=>t.done?n(t.value):Promise.resolve(t.value).then(o,a);s((e=e.apply(t,null)).next())}));var t,e}renderOptgroup(t,e){var n;return(0,i.h)("optgroup",{disabled:t.disabled,label:t.label},null===(n=t.options)||void 0===n?void 0:n.map(((t,n)=>{const o=`${e}-${n}`;return Array.isArray(t.options)?this.renderOptgroup(t,o):(0,i.h)("option",{disabled:t.disabled,key:o,selected:v(this.state._value,t.value),value:o},t.label)})))}render(){const{ariaDescribedBy:t}=(0,l.g)(this.state),e=(0,s.s)(this.state._label);return(0,i.h)(i.H,{class:{"has-value":this.state._hasValue}},(0,i.h)("kol-input",{class:{"hide-label":!!this.state._hideLabel,select:!0},_accessKey:this.state._accessKey,_disabled:this.state._disabled,_error:this.state._error,_hideError:this.state._hideError,_hideLabel:this.state._hideLabel,_hint:this.state._hint,_icons:this.state._icons,_id:this.state._id,_label:this.state._label,_required:this.state._required,_tooltipAlign:this._tooltipAlign,_touched:this.state._touched,onClick:()=>{var t;return null===(t=this.ref)||void 0===t?void 0:t.focus()}},(0,i.h)("span",{slot:"label"},e?(0,i.h)("slot",{name:"expert"}):"string"==typeof this.state._accessKey?(0,i.h)(i.F,null,(0,i.h)(r.I,{accessKey:this.state._accessKey,label:this.state._label})," ",(0,i.h)("span",{class:"access-key-hint","aria-hidden":"true"},this.state._accessKey)):(0,i.h)("span",null,this.state._label)),(0,i.h)("div",{slot:"input"},(0,i.h)("select",{ref:this.catchRef,title:"",accessKey:this.state._accessKey,"aria-describedby":t.length>0?t.join(" "):void 0,"aria-label":this.state._hideLabel&&"string"==typeof this.state._label?this.state._label:void 0,autoCapitalize:"off",autoCorrect:"off",disabled:this.state._disabled,id:this.state._id,multiple:this.state._multiple,name:this.state._name,required:this.state._required,size:this.state._rows,spellcheck:"false",onClick:this.controller.onFacade.onClick,onBlur:this.controller.onFacade.onBlur,onFocus:this.controller.onFacade.onFocus,onChange:this.onChange},this.state._options.map(((t,e)=>{const n=`-${e}`;return Array.isArray(t.options)?this.renderOptgroup(t,n):(0,i.h)("option",{disabled:t.disabled,key:n,selected:v(this.state._value,t.value),value:n},t.label)}))))))}constructor(t){(0,i.r)(this,t),this.catchRef=t=>{this.ref=t,(0,s.a)(this.host,this.ref)},this.onChange=t=>{var e,n;this._value=Array.from((null===(e=this.ref)||void 0===e?void 0:e.options)||[]).filter((t=>!0===t.selected)).map((t=>{var e;return null===(e=this.controller.getOptionByKey(t.value))||void 0===e?void 0:e.value})),(0,a.s)(t),(0,a.t)("change",this.host,this._value),this.controller.setFormAssociatedValue(this._value),"function"==typeof(null===(n=this.state._on)||void 0===n?void 0:n.onChange)&&this.state._on.onChange(t,this._value)},this._accessKey=void 0,this._alert=!0,this._disabled=!1,this._error=void 0,this._hideError=!1,this._hideLabel=!1,this._hint="",this._icons=void 0,this._id=void 0,this._label=void 0,this._multiple=!1,this._name=void 0,this._on=void 0,this._options=void 0,this._required=!1,this._rows=void 0,this._syncValueBySelector=void 0,this._tabIndex=void 0,this._tooltipAlign="top",this._touched=!1,this._value=void 0,this.state={_hasValue:!1,_hideError:!1,_id:`id-${(0,o.n)()}`,_label:"",_multiple:!1,_options:[],_value:[]},this.controller=new p(this,"select",this.host)}validateAccessKey(t){this.controller.validateAccessKey(t)}validateAlert(t){this.controller.validateAlert(t)}validateDisabled(t){this.controller.validateDisabled(t)}validateError(t){this.controller.validateError(t)}validateHideError(t){this.controller.validateHideError(t)}validateHideLabel(t){this.controller.validateHideLabel(t)}validateHint(t){this.controller.validateHint(t)}validateIcons(t){this.controller.validateIcons(t)}validateId(t){this.controller.validateId(t)}validateLabel(t){this.controller.validateLabel(t)}validateMultiple(t){this.controller.validateMultiple(t)}validateName(t){this.controller.validateName(t)}validateOn(t){this.controller.validateOn(t)}validateOptions(t){this.controller.validateOptions(t)}validateRequired(t){this.controller.validateRequired(t)}validateRows(t){this.controller.validateRows(t)}validateSyncValueBySelector(t){this.controller.validateSyncValueBySelector(t)}validateTabIndex(t){this.controller.validateTabIndex(t)}validateTouched(t){this.controller.validateTouched(t)}validateValue(t){this.controller.validateValue(t)}componentWillLoad(){this._alert=!0===this._alert,this._touched=!0===this._touched,this.controller.componentWillLoad(this.onChange),this.state._hasValue=!!this.state._value,this.controller.addValueChangeListener((t=>this.state._hasValue=!!t))}get host(){return(0,i.g)(this)}static get watchers(){return{_accessKey:["validateAccessKey"],_alert:["validateAlert"],_disabled:["validateDisabled"],_error:["validateError"],_hideError:["validateHideError"],_hideLabel:["validateHideLabel"],_hint:["validateHint"],_icons:["validateIcons"],_id:["validateId"],_label:["validateLabel"],_multiple:["validateMultiple"],_name:["validateName"],_on:["validateOn"],_options:["validateOptions"],_required:["validateRequired"],_rows:["validateRows"],_syncValueBySelector:["validateSyncValueBySelector"],_tabIndex:["validateTabIndex"],_touched:["validateTouched"],_value:["validateValue"]}}};m.style={default:"/*\n * This file contains all rules for accessibility.\n */\n@layer kol-global {\n\t:host {\n\t\t/*\n\t\t * Minimum size of interactive elements.\n\t\t */\n\t\t--a11y-min-size: 44px;\n\t\t/*\n\t\t * Verdana is an accessible font that can be used without requiring additional loading time.\n\t\t */\n\t\tfont-family: Verdana;\n\t}\n\n\t* {\n\t\t/*\n\t\t * This rule enables the word dividing for all texts. That is important for high zoom levels.\n\t\t */\n\t\thyphens: auto;\n\t\t/*\n\t\t * Letter spacing is required for all texts.\n\t\t */\n\t\tletter-spacing: inherit;\n\t\t/*\n\t\t * This rule enables the word dividing for all texts. That is important for high zoom levels.\n\t\t */\n\t\tword-break: break-word;\n\t\t/*\n\t\t * Word spacing is required for all texts.\n\t\t */\n\t\tword-spacing: inherit;\n\t}\n\n\t/*\n\t * All interactive elements should have a minimum size of 44px.\n\t */\n\t/* input:not([type='checkbox'], [type='radio'], [type='range']), */\n\t/* option, */\n\t/* select, */\n\t/* textarea, */\n\t[role='button'],\n\tbutton:not([role='link']),\n\tkol-input .input {\n\t\tmin-height: var(--a11y-min-size);\n\t\tmin-width: var(--a11y-min-size);\n\t}\n\n\t/*\n\t * Some interactive elements should not inherit the font-family and font-size.\n\t */\n\ta,\n\tbutton,\n\th1,\n\th2,\n\th3,\n\th4,\n\th5,\n\th6,\n\tinput,\n\toption,\n\tselect,\n\ttextarea {\n\t\t/*\n\t\t * All elements should inherit the font family from his parent element.\n\t\t */\n\t\tfont-family: inherit;\n\t\t/*\n\t\t * All elements should inherit the font size from his parent element.\n\t\t */\n\t\tfont-size: inherit;\n\t}\n}\n\n/**\n * Sometimes we need the semantic element for accessibility reasons,\n * but we don't want to show it.\n *\n * - https://www.a11yproject.com/posts/how-to-hide-content/\n */\n.visually-hidden {\n\tclip: rect(0 0 0 0);\n\tclip-path: inset(50%);\n\theight: 1px;\n\toverflow: hidden;\n\tposition: absolute;\n\twhite-space: nowrap;\n\twidth: 1px;\n}\n\n@layer kol-global {\n\t/*\n\t * Dieses CSS stellt sicher, dass der Standard-Style\n\t * von A und Button resettet werden.\n\t */\n\t:is(a, button) {\n\t\tbackground-color: transparent;\n\t\tborder: none;\n\t\tmargin: 0;\n\t\tpadding: 0;\n\t\twidth: 100%; /* 100% needed for custom width from outside */\n\t}\n}\n\n@layer kol-global {\n\t:host {\n\t\t/*\n\t\t * The max-width is needed to prevent the table from overflowing the\n\t\t * parent node, if the table is wider than the parent node.\n\t\t */\n\t\tmax-width: 100%;\n\t}\n\n\t* {\n\t\t/*\n\t\t * We prefer to box-sizing: border-box for all elements.\n\t\t */\n\t\tbox-sizing: border-box;\n\t}\n\n\t/* KolSpan is a layout component with icons in all directions and a label text in the middle. */\n\tkol-span-wc {\n\t\tdisplay: grid;\n\t\tplace-items: center;\n\t}\n\n\t/* The sub span in KolSpan is the horizontal span with icon left and right and the label text in the middle. */\n\tkol-span-wc > span {\n\t\tdisplay: flex;\n\t\tplace-items: center;\n\t}\n\n\ta,\n\tbutton {\n\t\tcursor: pointer;\n\t}\n\n\t/* This is the text label. */\n\t.icon-only > kol-span-wc > span > span {\n\t\tdisplay: none;\n\t}\n}\n\n@layer kol-component {\n\t.required label > span::after,\n\t.required legend > span::after {\n\t\tcontent: '*';\n\t}\n}\n\n@layer kol-component {\n\t:host {\n\t\tdisplay: block;\n\t}\n}\n\n@layer kol-component {\n\tinput,\n\ttextarea {\n\t\tcursor: text;\n\t}\n\n\tinput[type='checkbox'],\n\tinput[type='color'],\n\tinput[type='file'],\n\tinput[type='radio'],\n\tinput[type='range'],\n\tlabel,\n\toption,\n\tselect {\n\t\tcursor: pointer;\n\t}\n\n\t/* input[type='checkbox'], */\n\t/* input[type='radio'], */\n\t/* input[type='range'], */\n\tinput[type='color'],\n\tinput[type='date'],\n\tinput[type='datetime-local'],\n\tinput[type='email'],\n\tinput[type='file'],\n\tinput[type='month'],\n\tinput[type='number'],\n\tinput[type='password'],\n\tinput[type='search'],\n\tinput[type='tel'],\n\tinput[type='text'],\n\tinput[type='time'],\n\tinput[type='url'],\n\tinput[type='week'],\n\tselect,\n\tselect[multiple] option,\n\ttextarea {\n\t\tfont-size: 1rem;\n\t\twidth: 100%;\n\t}\n\n\t/* needed hack for vertical alignment */\n\tinput[type='file'] {\n\t\tpadding: calc((var(--a11y-min-size) - 1rem) / 10) 0.5em;\n\t}\n\n\t/* needed hack for vertical alignment */\n\tselect[multiple] option {\n\t\tpadding: calc((var(--a11y-min-size) - 1rem) / 2) 0.5em;\n\t}\n\n\tkol-input.disabled :is(button, input, label, option, select, textarea) {\n\t\tcursor: not-allowed;\n\t\topacity: 0.5;\n\t}\n}\n\n@layer kol-component {\n\tkol-input {\n\t\tdisplay: grid;\n\t}\n\n\tkol-input .input-slot {\n\t\tflex-grow: 1;\n\t}\n\n\tinput:not([type='checkbox'], [type='radio']),\n\tselect:not([multiple], [size]) {\n\t\theight: 2.75em;\n\t}\n\n\tinput:focus,\n\toption:focus,\n\tselect:focus,\n\ttextarea:focus {\n\t\toutline: 0;\n\t}\n\n\t.input {\n\t\tdisplay: flex;\n\t\talign-items: center;\n\t}\n\n\t.input > kol-icon {\n\t\tdisplay: grid;\n\t\theight: var(--a11y-min-size);\n\t\tplace-items: center;\n\t}\n\n\tkol-input.required .input-tooltip .span-label::after {\n\t\tcontent: '*';\n\t}\n}\n\n@layer kol-component {\n\t.error.hidden {\n\t\tdisplay: none;\n\t}\n}\n"}},93580:(t,e,n)=>{n.d(e,{a:()=>d,c:()=>r,h:()=>l,v:()=>c});var i=n(21824),o=n(47363);const a=/[a-zA-Z0-9äöüÄÖÜß]/g,s=/^\d+$/;function l(t,e=1){return function(t){var e;return"string"==typeof t&&(null===(e=t.match(a))||void 0===e?void 0:e.length)||0}(t)>=e}function r(t){return s.test(t)}const h=new Set(["string"]),c=(t,e,n={})=>{(0,o.w)(t,"_label",(t=>"string"==typeof t),h,e,function(t){var e;return{hooks:{afterPatch:(e,n,o,a)=>{var s,h;"function"==typeof(null===(s=t.hooks)||void 0===s?void 0:s.afterPatch)&&(null===(h=t.hooks)||void 0===h||h.afterPatch(e,n,o,a)),"string"==typeof e&&!1===l(e,3)&&!1===r(e)&&(0,i.a)(`The heading or label ("${e}") is not accessible. A label should consist of at least three readable characters.`),"string"==typeof e&&e.length>80&&(0,i.u)("A heading or label should not be longer than 80 characters.")},beforePatch:null===(e=t.hooks)||void 0===e?void 0:e.beforePatch}}}(n))},d=c},53026:(t,e,n)=>{n.d(e,{v:()=>o});var i=n(47363);const o=(t,e)=>{(0,i.e)(t,"_rows",e,{min:1})}},3909:(t,e,n)=>{n.d(e,{v:()=>s});var i=n(21824),o=n(47363);const a={hooks:{afterPatch:t=>{-1!==t&&0!==t&&(0,i.a)("Don’t Use Tabindex Greater than 0: https://adrianroselli.com/2014/11/dont-use-tabindex-greater-than-0.html")}}},s=(t,e)=>{(0,o.e)(t,"_tabIndex",e,a)}}}]);