/*! For license information please see 5001.js.LICENSE.txt */
"use strict";(self.webpackChunk_public_ui_designer=self.webpackChunk_public_ui_designer||[]).push([[5001],{30292:(t,e,n)=>{n.d(e,{I:()=>o});var i=n(65063);const o=({accessKey:t,label:e})=>{let[n,...o]=e.split(t);return 0===o.length&&(t=t.toUpperCase(),[n,...o]=e.split(t)),0===o.length&&(t=t.toLowerCase(),[n,...o]=e.split(t)),(0,i.h)(i.F,null,n,o.length?(0,i.h)(i.F,null,(0,i.h)("u",null,t),o.join(t)):null)}},30610:(t,e,n)=>{n.d(e,{A:()=>o});var i=n(60473);class o{constructor(t,e,n){var o,a;if(this.experimentalMode=(0,i.a0)(),this.setFormAssociatedValue=t=>{var e;const n=null===(e=this.formAssociated)||void 0===e?void 0:e.getAttribute("name");null!==n&&""!==n||(0,i.h)(` The form field (${this.name}) must have a name attribute to be form-associated. Please define the _name attribute.`);const o=this.tryToStringifyValue(t);this.syncValue(t,o,this.formAssociated),this.syncValue(t,o,this.syncToOwnInput)},this.component=t,this.host=this.findHostWithShadowRoot(n),this.name=e,this.experimentalMode){switch(null===(o=this.host)||void 0===o||o.querySelectorAll("input,select,textarea").forEach((t=>{var e;null===(e=this.host)||void 0===e||e.removeChild(t)})),this.name){case"button":this.formAssociated=document.createElement("button");break;case"select":this.formAssociated=document.createElement("select"),this.formAssociated.setAttribute("multiple","");break;case"textarea":this.formAssociated=document.createElement("textarea");break;default:this.formAssociated=document.createElement("input"),this.formAssociated.setAttribute("type","hidden")}this.formAssociated.setAttribute("aria-hidden","true"),this.formAssociated.setAttribute("data-form-associated",""),this.formAssociated.setAttribute("hidden",""),null===(a=this.host)||void 0===a||a.appendChild(this.formAssociated)}}findHostWithShadowRoot(t){for(;null===(null==t?void 0:t.shadowRoot)&&t!==document.body;)(t=null==t?void 0:t.parentNode).host&&(t=t.host);return t}setAttribute(t,e,n){if(this.experimentalMode)try{if("boolean"!=typeof(n="object"==typeof n&&null!==n?JSON.stringify(n):n)&&"number"!=typeof n&&"string"!=typeof n)throw new Error("Invalid value type: "+typeof n);null==e||e.setAttribute(t,`${n}`)}catch(n){null==e||e.removeAttribute(t)}}tryToStringifyValue(t){try{return"object"==typeof t&&null!==t?JSON.stringify(t).toString():null==t?null:t.toString()}catch(t){return(0,i.a1)(`The form field raw value is not able to stringify! ${t}`),""}}syncValue(t,e,n){n&&("select"===this.name?(n.querySelectorAll("option").forEach((t=>{n.removeChild(t)})),Array.isArray(t)&&t.forEach((t=>{const e=this.tryToStringifyValue(t);if("string"==typeof e){const t=document.createElement("option");t.setAttribute("value",e),t.setAttribute("selected",""),n.appendChild(t)}}))):"string"==typeof e?(n.setAttribute("value",e),n.value=e):(n.removeAttribute("value"),n.value=""))}validateName(t){(0,i.a2)(this.component,t,{hooks:{afterPatch:()=>{this.setAttribute("name",this.formAssociated,this.component.state._name)}}}),void 0===t&&(0,i.h)("Ein Name am Eingabefeldern oder Schalter ist nicht zwingend erforderlich, kann aber für die Autocomplete-Funktion und für das statische Versenden des Eingabefeldes relevant sein.")}validateSyncValueBySelector(t){if(this.experimentalMode&&"string"==typeof t){const e=document.querySelector(t);e&&(this.syncToOwnInput=e)}}componentWillLoad(){this.validateName(this.component._name),this.validateSyncValueBySelector(this.component._syncValueBySelector)}}},23068:(t,e,n)=>{n.d(e,{I:()=>r,g:()=>s});var i=n(60473),o=n(64606),a=n(30610);const s=t=>{const e="string"==typeof t._error&&t._error.length>0&&!0===t._touched,n="string"==typeof t._hint&&t._hint.length>0,i=[];return!0===e&&i.push(`${t._id}-error`),!0===n&&i.push(`${t._id}-hint`),{hasError:e,hasHint:n,ariaDescribedBy:i}};class l extends a.A{constructor(t,e,n){super(t,e,n),this.component=t}validateAlert(t){(0,i.B)(this.component,"_alert",t)}validateTouched(t){(0,i.N)(this.component,t)}componentWillLoad(){super.componentWillLoad(),this.validateAlert(this.component._alert),this.validateTouched(this.component._touched)}}class r extends l{constructor(t,e,n){super(t,e,n),this.valueChangeListeners=[],this.onFacade={onBlur:this.onBlur.bind(this),onChange:this.onChange.bind(this),onClick:this.onClick.bind(this),onFocus:this.onFocus.bind(this)},this.component=t}validateAccessKey(t){(0,i.C)(this.component,"_accessKey",t)}validateAdjustHeight(t){(0,i.O)(this.component,t)}validateDisabled(t){(0,i.B)(this.component,"_disabled",t),!0===t&&(0,i.P)()}validateError(t){(0,i.C)(this.component,"_error",t)}validateHideError(t){(0,i.Q)(this.component,t,{hooks:{afterPatch:()=>{this.component.state._hideError&&(0,i.T)("Property hide-error for inputs: Only use when the error message is shown outside of the input component.")}}})}validateHideLabel(t){(0,i.R)(this.component,t,{hooks:{afterPatch:()=>{this.component.state._hideLabel&&(0,i.T)("Property hide-label for inputs: Only use for exceptions like search inputs that are clearly identifiable by their context.")}}})}validateHint(t){(0,i.C)(this.component,"_hint",t)}validateId(t){(0,i.C)(this.component,"_id",t,{hooks:{afterPatch:()=>{this.setAttribute("id",this.formAssociated,this.component.state._id)}},minLength:1}),""!==t&&void 0!==t||(0,i.h)("Eine eindeutige ID an den Eingabefeldern ist nicht zwingend erforderlich, könnte aber für die E2E-Tests relevant sein.")}validateLabel(t){(0,i.U)(this.component,t,{required:!0})}validateOn(t){"object"==typeof t&&(0,i.m)(this.component,"_on",t)}validateSmartButton(t){(0,i.t)(t,(()=>{try{t=(0,i.u)(t)}catch(t){}(0,i.m)(this.component,"_smartButton",t)}))}validateTabIndex(t){(0,i.V)(this.component,t)}componentWillLoad(){super.componentWillLoad(),this.validateAccessKey(this.component._accessKey),this.validateAdjustHeight(this.component._adjustHeight),this.validateError(this.component._error),this.validateDisabled(this.component._disabled),this.validateHideError(this.component._hideError),this.validateHideLabel(this.component._hideLabel),this.validateHint(this.component._hint),this.validateId(this.component._id),this.validateLabel(this.component._label),this.validateSmartButton(this.component._smartButton),this.validateOn(this.component._on),this.validateTabIndex(this.component._tabIndex)}onBlur(t){var e;this.component._alert=!0,this.component._touched=!0,(0,o.s)(t),(0,o.t)("blur",this.host),"function"==typeof(null===(e=this.component._on)||void 0===e?void 0:e.onBlur)&&this.component._on.onBlur(t)}onChange(t){var e;const n=t.target.value;(0,o.t)("change",this.host,n),this.setFormAssociatedValue(n),"function"==typeof(null===(e=this.component._on)||void 0===e?void 0:e.onChange)&&this.component._on.onChange(t,n),this.valueChangeListeners.forEach((t=>t(n)))}onClick(t){var e;(0,o.s)(t),(0,o.t)("click",this.host),"function"==typeof(null===(e=this.component._on)||void 0===e?void 0:e.onClick)&&this.component._on.onClick(t)}onFocus(t){var e;this.component._alert=!0,(0,o.s)(t),(0,o.t)("focus",this.host),"function"==typeof(null===(e=this.component._on)||void 0===e?void 0:e.onFocus)&&this.component._on.onFocus(t)}addValueChangeListener(t){this.valueChangeListeners.push(t)}}},60734:(t,e,n)=>{n.d(e,{I:()=>s,a:()=>l,f:()=>a});var i=n(60473),o=n(23068);const a=(t,e,n="")=>{e.forEach(((e,i)=>{const o=`${n}-${i}`;"object"==typeof e&&null!==e&&"string"==typeof e.label&&e.label.length>0&&(Array.isArray(e.options)?a(t,e.options,o):t.set(o,e))}))};class s extends o.I{constructor(t,e,n){super(t,e,n),this.component=t}validateRequired(t){(0,i.W)(this.component,t)}componentWillLoad(){super.componentWillLoad(),this.validateRequired(this.component._required)}}class l extends s{constructor(t,e,n){super(t,e,n),this.keyOptionMap=new Map,this.getOptionByKey=t=>this.keyOptionMap.get(t),this.isValueInOptions=(t,e)=>void 0!==e.find((e=>e.value===t)),this.afterPatchOptions=(t,e,n,i)=>{"_value"===i&&this.setFormAssociatedValue(t)},this.beforePatchOptions=(t,e)=>{const n=e.has("_options")?e.get("_options"):this.component.state._options;if(Array.isArray(n)&&n.length>0){this.keyOptionMap.clear(),a(this.keyOptionMap,n);const t=e.has("_value")?e.get("_value"):this.component.state._value;!1===this.isValueInOptions(t,n)&&(e.set("_value",n[0].value),this.onStateChange())}},this.component=t}validateOrientation(t){(0,i.w)(this.component,"_orientation",(t=>"string"==typeof t&&i.X.includes(t)),new Set([`Orientation {${i.X.join(", ")}`]),t,{defaultValue:"vertical"})}validateOptions(t){(0,i.Y)(this.component,t,{hooks:{afterPatch:this.afterPatchOptions,beforePatch:this.beforePatchOptions}})}validateValue(t){t=(0,i.Z)(t),t=Array.isArray(t)?t[0]:t,(0,i.m)(this.component,"_value",t,{afterPatch:this.afterPatchOptions,beforePatch:this.beforePatchOptions})}componentWillLoad(t){super.componentWillLoad(),this.onStateChange=()=>{if("function"==typeof t){const e=setTimeout((()=>{clearTimeout(e),t(i.$)}))}},this.validateOrientation(this.component._orientation),this.validateOptions(this.component._options),this.validateValue(this.component._value)}}},57291:(t,e,n)=>{n.d(e,{I:()=>s});var i=n(60473),o=n(23068);const a=(t,e)=>{const n=t;"object"==typeof n&&null!==n&&((0,i.H)(n.right,1)&&(n.right={icon:n.right}),(0,i.H)(n.left,1)&&(n.left={icon:n.left}),e.set("_icons",n))};class s extends o.I{constructor(t,e,n){super(t,e,n),this.component=t}validateIcon(t){this.validateIcons(t)}validateIcons(t){(0,i.t)(t,(()=>{try{t=(0,i.u)(t)}catch(t){}(0,i.w)(this.component,"_icons",(t=>"object"==typeof t&&null!==t&&((0,i.H)(t.left,1)||(0,i.a5)(t.left)||(0,i.H)(t.right,1)||(0,i.a5)(t.right))),new Set(["KoliBriHorizontalIcon"]),t,{hooks:{beforePatch:a},required:!0})}))}componentWillLoad(){super.componentWillLoad(),this.validateIcons(this.component._icons||this.component._icon)}}},64606:(t,e,n)=>{function i(t){t.stopImmediatePropagation(),t.stopPropagation()}function o(t,e,n){e&&function(t,e,n){t.dispatchEvent(function(t,e){return new CustomEvent(`kol-${t}`,{bubbles:!0,cancelable:!0,composed:!0,detail:e})}(e,n))}(e,t,n)}function a(t){t.preventDefault(),i(t)}n.d(e,{p:()=>a,s:()=>i,t:()=>o})},65001:(t,e,n)=>{n.r(e),n.d(e,{kol_select:()=>u});var i=n(65063),o=n(60473),a=n(50887),s=n(64606),l=n(23068),r=n(30292),h=n(57291),d=n(60734);class c extends h.I{constructor(t,e,n){super(t,e,n),this.keyOptionMap=new Map,this.getOptionByKey=t=>this.keyOptionMap.get(t),this.isValueInOptions=(t,e)=>void 0!==e.find((e=>"string"==typeof e.value?e.value===t:!!Array.isArray(e.options)&&this.isValueInOptions(t,e.options))),this.filterValuesInOptions=(t,e)=>t.filter((t=>void 0!==this.isValueInOptions(t,e))),this.afterPatchOptions=(t,e,n,i)=>{"_value"===i&&this.setFormAssociatedValue(t)},this.beforePatchOptions=(t,e)=>{const n=e.has("_options")?e.get("_options"):this.component.state._options;if(Array.isArray(n)&&n.length>0){this.keyOptionMap.clear(),(0,d.f)(this.keyOptionMap,n);const t=e.has("_value")?e.get("_value"):this.component.state._value,i=this.filterValuesInOptions(Array.isArray(t)&&t.length>0?t:[],n);!1===this.component._multiple&&0===i.length?(e.set("_value",[n[0].value]),this.onStateChange()):Array.isArray(t)&&i.length<t.length&&(e.set("_value",i),this.onStateChange())}},this.component=t}validateOptions(t){(0,o.am)(this.component,t,{hooks:{afterPatch:this.afterPatchOptions,beforePatch:this.beforePatchOptions}})}validateMultiple(t){(0,o.B)(this.component,"_multiple",t,{hooks:{afterPatch:this.afterPatchOptions,beforePatch:this.beforePatchOptions}})}validateRequired(t){(0,o.B)(this.component,"_required",t)}validateRows(t){(0,o.an)(this.component,t)}validateValue(t){(0,o.y)(this.component,"_value",(()=>!0),t,void 0,{hooks:{afterPatch:this.afterPatchOptions,beforePatch:this.beforePatchOptions}})}componentWillLoad(t){super.componentWillLoad(),this.onStateChange=()=>{if("function"==typeof t){const e=setTimeout((()=>{clearTimeout(e),t(o.$)}))}},this.validateOptions(this.component._options),this.validateMultiple(this.component._multiple),this.validateRequired(this.component._required),this.validateRows(this.component._rows),this.validateValue(this.component._value)}}const p=(t,e)=>Array.isArray(t)&&t.includes(e),u=class{getValue(){return t=this,null,e=function*(){return this._value},new Promise(((n,i)=>{var o=t=>{try{s(e.next(t))}catch(t){i(t)}},a=t=>{try{s(e.throw(t))}catch(t){i(t)}},s=t=>t.done?n(t.value):Promise.resolve(t.value).then(o,a);s((e=e.apply(t,null)).next())}));var t,e}renderOptgroup(t,e){var n;return(0,i.h)("optgroup",{disabled:t.disabled,label:t.label},null===(n=t.options)||void 0===n?void 0:n.map(((t,n)=>{const o=`${e}-${n}`;return Array.isArray(t.options)?this.renderOptgroup(t,o):(0,i.h)("option",{disabled:t.disabled,key:o,selected:p(this.state._value,t.value),value:o},t.label)})))}render(){const{ariaDescribedBy:t}=(0,l.g)(this.state),e=(0,o.M)(this.state._label);return(0,i.h)(i.H,{class:{"has-value":this.state._hasValue}},(0,i.h)("kol-input",{class:{"hide-label":!!this.state._hideLabel,select:!0},_accessKey:this.state._accessKey,_disabled:this.state._disabled,_error:this.state._error,_hideError:this.state._hideError,_hideLabel:this.state._hideLabel,_hint:this.state._hint,_icons:this.state._icons,_id:this.state._id,_label:this.state._label,_required:this.state._required,_tooltipAlign:this._tooltipAlign,_touched:this.state._touched,onClick:()=>{var t;return null===(t=this.ref)||void 0===t?void 0:t.focus()},role:"presentation"},(0,i.h)("span",{slot:"label"},e?(0,i.h)("slot",{name:"expert"}):"string"==typeof this.state._accessKey?(0,i.h)(i.F,null,(0,i.h)(r.I,{accessKey:this.state._accessKey,label:this.state._label})," ",(0,i.h)("span",{class:"access-key-hint","aria-hidden":"true"},this.state._accessKey)):(0,i.h)("span",null,this.state._label)),(0,i.h)("div",{slot:"input"},(0,i.h)("select",{ref:this.catchRef,title:"",accessKey:this.state._accessKey,"aria-describedby":t.length>0?t.join(" "):void 0,"aria-label":this.state._hideLabel&&"string"==typeof this.state._label?this.state._label:void 0,autoCapitalize:"off",autoCorrect:"off",disabled:this.state._disabled,id:this.state._id,multiple:this.state._multiple,name:this.state._name,required:this.state._required,size:this.state._rows,spellcheck:"false",onClick:this.controller.onFacade.onClick,onBlur:this.controller.onFacade.onBlur,onFocus:this.controller.onFacade.onFocus,onChange:this.onChange},this.state._options.map(((t,e)=>{const n=`-${e}`;return Array.isArray(t.options)?this.renderOptgroup(t,n):(0,i.h)("option",{disabled:t.disabled,key:n,selected:p(this.state._value,t.value),value:n},t.label)}))))))}constructor(t){(0,i.r)(this,t),this.catchRef=t=>{this.ref=t,(0,o.k)(this.host,this.ref)},this.onChange=t=>{var e,n;this._value=Array.from((null===(e=this.ref)||void 0===e?void 0:e.options)||[]).filter((t=>!0===t.selected)).map((t=>{var e;return null===(e=this.controller.getOptionByKey(t.value))||void 0===e?void 0:e.value})),(0,s.s)(t),(0,s.t)("change",this.host,this._value),this.controller.setFormAssociatedValue(this._value),"function"==typeof(null===(n=this.state._on)||void 0===n?void 0:n.onChange)&&this.state._on.onChange(t,this._value)},this._accessKey=void 0,this._alert=!0,this._disabled=!1,this._error=void 0,this._hideError=!1,this._hideLabel=!1,this._hint="",this._icons=void 0,this._id=void 0,this._label=void 0,this._multiple=!1,this._name=void 0,this._on=void 0,this._options=void 0,this._required=!1,this._rows=void 0,this._syncValueBySelector=void 0,this._tabIndex=void 0,this._tooltipAlign="top",this._touched=!1,this._value=void 0,this.state={_hasValue:!1,_hideError:!1,_id:`id-${(0,a.n)()}`,_label:"",_multiple:!1,_options:[],_value:[]},this.controller=new c(this,"select",this.host)}validateAccessKey(t){this.controller.validateAccessKey(t)}validateAlert(t){this.controller.validateAlert(t)}validateDisabled(t){this.controller.validateDisabled(t)}validateError(t){this.controller.validateError(t)}validateHideError(t){this.controller.validateHideError(t)}validateHideLabel(t){this.controller.validateHideLabel(t)}validateHint(t){this.controller.validateHint(t)}validateIcons(t){this.controller.validateIcons(t)}validateId(t){this.controller.validateId(t)}validateLabel(t){this.controller.validateLabel(t)}validateMultiple(t){this.controller.validateMultiple(t)}validateName(t){this.controller.validateName(t)}validateOn(t){this.controller.validateOn(t)}validateOptions(t){this.controller.validateOptions(t)}validateRequired(t){this.controller.validateRequired(t)}validateRows(t){this.controller.validateRows(t)}validateSyncValueBySelector(t){this.controller.validateSyncValueBySelector(t)}validateTabIndex(t){this.controller.validateTabIndex(t)}validateTouched(t){this.controller.validateTouched(t)}validateValue(t){this.controller.validateValue(t)}componentWillLoad(){this._alert=!0===this._alert,this._touched=!0===this._touched,this.controller.componentWillLoad(this.onChange),this.state._hasValue=!!this.state._value,this.controller.addValueChangeListener((t=>this.state._hasValue=!!t))}get host(){return(0,i.g)(this)}static get watchers(){return{_accessKey:["validateAccessKey"],_alert:["validateAlert"],_disabled:["validateDisabled"],_error:["validateError"],_hideError:["validateHideError"],_hideLabel:["validateHideLabel"],_hint:["validateHint"],_icons:["validateIcons"],_id:["validateId"],_label:["validateLabel"],_multiple:["validateMultiple"],_name:["validateName"],_on:["validateOn"],_options:["validateOptions"],_required:["validateRequired"],_rows:["validateRows"],_syncValueBySelector:["validateSyncValueBySelector"],_tabIndex:["validateTabIndex"],_touched:["validateTouched"],_value:["validateValue"]}}};u.style={default:"/*\n * This file contains all rules for accessibility.\n */\n@layer kol-global {\n\t:host {\n\t\t/*\n\t\t * Minimum size of interactive elements.\n\t\t */\n\t\t--a11y-min-size: 44px;\n\t\t/*\n\t\t * No element should be used without a background and font color whose contrast ratio has\n\t\t * not been checked. By initially setting the background color to white and the font color\n\t\t * to black, the contrast ratio is ensured and explicit adjustment is forced.\n\t\t */\n\t\tbackground-color: white;\n\t\tcolor: black;\n\t\t/*\n\t\t * Verdana is an accessible font that can be used without requiring additional loading time.\n\t\t */\n\t\tfont-family: Verdana;\n\t}\n\n\t* {\n\t\t/*\n\t\t * This rule enables the word dividing for all texts. That is important for high zoom levels.\n\t\t */\n\t\thyphens: auto;\n\t\t/*\n\t\t * Letter spacing is required for all texts.\n\t\t */\n\t\tletter-spacing: inherit;\n\t\t/*\n\t\t * This rule enables the word dividing for all texts. That is important for high zoom levels.\n\t\t */\n\t\tword-break: break-word;\n\t\t/*\n\t\t * Word spacing is required for all texts.\n\t\t */\n\t\tword-spacing: inherit;\n\t}\n\n\t/*\n\t * All interactive elements should have a minimum size of 44px.\n\t */\n\t/* input:not([type='checkbox'], [type='radio'], [type='range']), */\n\t/* option, */\n\t/* select, */\n\t/* textarea, */\n\t[role='button'],\n\tbutton:not([role='link']),\n\tkol-input .input {\n\t\tmin-height: var(--a11y-min-size);\n\t\tmin-width: var(--a11y-min-size);\n\t}\n\n\t/*\n\t * Some interactive elements should not inherit the font-family and font-size.\n\t */\n\ta,\n\tbutton,\n\th1,\n\th2,\n\th3,\n\th4,\n\th5,\n\th6,\n\tinput,\n\toption,\n\tselect,\n\ttextarea {\n\t\t/*\n\t\t * All elements should inherit the font family from his parent element.\n\t\t */\n\t\tfont-family: inherit;\n\t\t/*\n\t\t * All elements should inherit the font size from his parent element.\n\t\t */\n\t\tfont-size: inherit;\n\t}\n}\n\n/**\n * Sometimes we need the semantic element for accessibility reasons,\n * but we don't want to show it.\n *\n * - https://www.a11yproject.com/posts/how-to-hide-content/\n */\n.visually-hidden {\n\tclip: rect(0 0 0 0);\n\tclip-path: inset(50%);\n\theight: 1px;\n\toverflow: hidden;\n\tposition: absolute;\n\twhite-space: nowrap;\n\twidth: 1px;\n}\n\n@layer kol-global {\n\t/*\n\t * Dieses CSS stellt sicher, dass der Standard-Style\n\t * von A und Button resettet werden.\n\t */\n\t:is(a, button) {\n\t\tbackground-color: transparent;\n\t\tborder: none;\n\t\tmargin: 0;\n\t\tpadding: 0;\n\t\twidth: 100%; /* 100% needed for custom width from outside */\n\t}\n\n\t/*\n\t * Ensure elements with hidden attribute to be actually not visible\n\t * @see https://meowni.ca/hidden.is.a.lie.html\n\t */\n\t[hidden] {\n\t\tdisplay: none !important;\n\t}\n}\n\n@layer kol-global {\n\t:host {\n\t\t/*\n\t\t * The max-width is needed to prevent the table from overflowing the\n\t\t * parent node, if the table is wider than the parent node.\n\t\t */\n\t\tmax-width: 100%;\n\t}\n\n\t* {\n\t\t/*\n\t\t * We prefer to box-sizing: border-box for all elements.\n\t\t */\n\t\tbox-sizing: border-box;\n\t}\n\n\t/* KolSpan is a layout component with icons in all directions and a label text in the middle. */\n\tkol-span-wc {\n\t\tdisplay: grid;\n\t\tplace-items: center;\n\t}\n\n\t/* The sub span in KolSpan is the horizontal span with icon left and right and the label text in the middle. */\n\tkol-span-wc > span {\n\t\tdisplay: flex;\n\t\tplace-items: center;\n\t}\n\n\ta,\n\tbutton {\n\t\tcursor: pointer;\n\t}\n\n\t.hidden {\n\t\tdisplay: none;\n\t\tvisibility: hidden;\n\t}\n\n\t/* This is the text label. */\n\t.hide-label > kol-span-wc > span > span {\n\t\tdisplay: none;\n\t}\n\n\t.disabled label,\n\t[aria-disabled='true'],\n\t[disabled] {\n\t\tcursor: not-allowed;\n\t\topacity: 0.5;\n\t\toutline: none;\n\t}\n}\n\n@layer kol-component {\n\t.required label > span::after,\n\t.required legend > span::after {\n\t\tcontent: '*';\n\t}\n}\n\n@layer kol-component {\n\t:host {\n\t\tdisplay: block;\n\t}\n}\n\n@layer kol-component {\n\tinput,\n\ttextarea {\n\t\tcursor: text;\n\t}\n\n\tinput[type='checkbox'],\n\tinput[type='color'],\n\tinput[type='file'],\n\tinput[type='radio'],\n\tinput[type='range'],\n\tlabel,\n\toption,\n\tselect {\n\t\tcursor: pointer;\n\t}\n\n\t/* input[type='checkbox'], */\n\t/* input[type='radio'], */\n\t/* input[type='range'], */\n\tinput[type='color'],\n\tinput[type='date'],\n\tinput[type='datetime-local'],\n\tinput[type='email'],\n\tinput[type='file'],\n\tinput[type='month'],\n\tinput[type='number'],\n\tinput[type='password'],\n\tinput[type='search'],\n\tinput[type='tel'],\n\tinput[type='text'],\n\tinput[type='time'],\n\tinput[type='url'],\n\tinput[type='week'],\n\tselect,\n\tselect[multiple] option,\n\ttextarea {\n\t\tfont-size: 1rem;\n\t\twidth: 100%;\n\t}\n\n\t/* needed hack for vertical alignment */\n\tinput[type='file'] {\n\t\tpadding: calc((var(--a11y-min-size) - 1rem) / 10) 0.5em;\n\t}\n\n\t/* needed hack for vertical alignment */\n\tselect[multiple] option {\n\t\tpadding: calc((var(--a11y-min-size) - 1rem) / 2) 0.5em;\n\t}\n}\n\n@layer kol-component {\n\tkol-input {\n\t\tdisplay: grid;\n\t}\n\n\tkol-input .input-slot {\n\t\tflex-grow: 1;\n\t}\n\n\tinput:not([type='checkbox'], [type='radio']),\n\tselect:not([multiple], [size]) {\n\t\theight: 2.75em;\n\t}\n\n\tinput:focus,\n\toption:focus,\n\tselect:focus,\n\ttextarea:focus {\n\t\toutline: 0;\n\t}\n\n\t.input {\n\t\tdisplay: flex;\n\t\talign-items: center;\n\t}\n\n\t.input > kol-icon {\n\t\tdisplay: grid;\n\t\theight: var(--a11y-min-size);\n\t\tplace-items: center;\n\t}\n\n\tkol-input.required .input-tooltip .span-label::after {\n\t\tcontent: '*';\n\t}\n}\n\n@layer kol-component {\n}\n"}}}]);