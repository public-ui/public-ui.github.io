/*! For license information please see 3700.js.LICENSE.txt */
"use strict";(self.webpackChunk_public_ui_designer=self.webpackChunk_public_ui_designer||[]).push([[3700],{28954:(t,e,n)=>{n.d(e,{I:()=>o});var i=n(42054);const o=({accessKey:t,label:e})=>{let[n,...o]=e.split(t);return 0===o.length&&(t=t.toUpperCase(),[n,...o]=e.split(t)),0===o.length&&(t=t.toLowerCase(),[n,...o]=e.split(t)),(0,i.h)("span",null,n,o.length?(0,i.h)("u",null,t):null,o.length?o.join(t):null)}},7269:(t,e,n)=>{n.d(e,{A:()=>s});var i=n(28330),o=n(8921);const a=(0,n(43906).d)();class s{constructor(t,e,n){var i,s;if(this.setFormAssociatedValue=t=>{var e;const n=null===(e=this.formAssociated)||void 0===e?void 0:e.getAttribute("name");null!==n&&""!==n||(0,o.d)(` The form field (${this.name}) must have a name attribute to be form-associated. Please define the _name attribute.`);const i=this.tryToStringifyValue(t);this.syncValue(t,i,this.formAssociated),this.syncValue(t,i,this.syncToOwnInput)},this.component=t,this.host=this.findHostWithShadowRoot(n),this.name=e,a){switch(null===(i=this.host)||void 0===i||i.querySelectorAll("input,select,textarea").forEach((t=>{var e;null===(e=this.host)||void 0===e||e.removeChild(t)})),this.name){case"button":this.formAssociated=document.createElement("button");break;case"select":this.formAssociated=document.createElement("select"),this.formAssociated.setAttribute("multiple","");break;case"textarea":this.formAssociated=document.createElement("textarea");break;default:this.formAssociated=document.createElement("input"),this.formAssociated.setAttribute("type","hidden")}this.formAssociated.setAttribute("aria-hidden","true"),this.formAssociated.setAttribute("data-form-associated",""),this.formAssociated.setAttribute("hidden",""),null===(s=this.host)||void 0===s||s.appendChild(this.formAssociated)}}findHostWithShadowRoot(t){for(;null===(null==t?void 0:t.shadowRoot)&&t!==document.body;)(t=null==t?void 0:t.parentNode).host&&(t=t.host);return t}setAttribute(t,e,n){if(a)try{if("boolean"!=typeof(n="object"==typeof n&&null!==n?JSON.stringify(n):n)&&"number"!=typeof n&&"string"!=typeof n)throw new Error("Invalid value type: "+typeof n);null==e||e.setAttribute(t,`${n}`)}catch(n){null==e||e.removeAttribute(t)}}tryToStringifyValue(t){try{return"object"==typeof t&&null!==t?JSON.stringify(t).toString():null==t?null:t.toString()}catch(t){return(0,o.g)(`The form field raw value is not able to stringify! ${t}`),""}}syncValue(t,e,n){n&&("select"===this.name?(n.querySelectorAll("option").forEach((t=>{n.removeChild(t)})),Array.isArray(t)&&t.forEach((t=>{const e=this.tryToStringifyValue(t);if("string"==typeof e){const t=document.createElement("option");t.setAttribute("value",e),t.setAttribute("selected",""),n.appendChild(t)}}))):"string"==typeof e?(n.setAttribute("value",e),n.value=e):(n.removeAttribute("value"),n.value=""))}validateName(t){((t,e,n)=>{(0,i.d)(t,"_name",e,n)})(this.component,t,{hooks:{afterPatch:()=>{this.setAttribute("name",this.formAssociated,this.component.state._name)}}}),void 0===t&&(0,o.d)("Ein Name am Eingabefeldern oder Schalter ist nicht zwingend erforderlich, kann aber für die Autocomplete-Funktion und für das statische Versenden des Eingabefeldes relevant sein.")}validateSyncValueBySelector(t){if(a&&"string"==typeof t){const e=document.querySelector(t);e&&(this.syncToOwnInput=e)}}componentWillLoad(){this.validateName(this.component._name),this.validateSyncValueBySelector(this.component._syncValueBySelector)}}},44380:(t,e,n)=>{n.d(e,{I:()=>d,a:()=>u,f:()=>c,v:()=>h});var i=n(39999),o=n(28330),a=n(11032),s=n(8921),l=n(74817);const r=t=>{if("object"==typeof t&&null!==t){if("string"==typeof t.label&&t.label.length>0)return t.disabled=!0===t.disabled,t.label=`${t.label}`.trim(),!1===(0,a.h)(t.label,3)&&!1===(0,a.c)(t.label)&&(0,s.a)(`Ein abweichendes Aria-Label (${t.label}) ist nicht barrierefrei. Ein abweichendes Aria-Label sollte aus mindestens drei lesbaren Zeichen bestehen.`),!Array.isArray(t.options)||void 0===t.options.find((t=>!1===r(t)));if("number"==typeof t.label)return!0}return!1},h=(t,e,n={})=>{(0,o.c)(t,"_options",r,e,void 0,n)},c=(t,e,n="")=>{e.forEach(((e,i)=>{const o=`${n}-${i}`;"object"==typeof e&&null!==e&&"string"==typeof e.label&&e.label.length>0&&(Array.isArray(e.options)?c(t,e.options,o):t.set(o,e))}))};class d extends i.I{constructor(t,e,n){super(t,e,n),this.component=t}validateHideError(t){(0,i.v)(this.component,t,{hooks:{afterPatch:()=>{this.component.state._hideError&&(0,s.a)("Property hide-error for inputs: Only use when the error message is shown outside of the input component.")}}})}validateRequired(t){((t,e)=>{(0,o.a)(t,"_required",e)})(this.component,t)}componentWillLoad(){super.componentWillLoad(),this.validateRequired(this.component._required)}}class u extends d{constructor(t,e,n){super(t,e,n),this.keyOptionMap=new Map,this.getOptionByKey=t=>this.keyOptionMap.get(t),this.isValueInOptions=(t,e)=>void 0!==e.find((e=>e.value===t)),this.beforePatchOptions=(t,e)=>{const n=e.has("_options")?e.get("_options"):this.component.state._options;if(Array.isArray(n)&&n.length>0){this.keyOptionMap.clear(),c(this.keyOptionMap,n);const t=e.has("_value")?e.get("_value"):this.component.state._value;if(!1===this.isValueInOptions(t,n)){const t=n[0].value;e.set("_value",t),this.onStateChange()}}},this.component=t}validateOrientation(t){(0,o.w)(this.component,"_orientation",(t=>"horizontal"===t||"vertical"===t),new Set(["Orientation {horizontal, vertical}"]),t,{defaultValue:"vertical"})}validateOptions(t){((t,e,n={})=>{(0,o.c)(t,"_options",(t=>"object"==typeof t&&null!==t&&"string"==typeof t.label&&t.label.length>0),e,void 0,n)})(this.component,t,{hooks:{beforePatch:this.beforePatchOptions}})}validateValue(t){t=(0,o.m)(t),t=Array.isArray(t)?t[0]:t,(0,o.s)(this.component,"_value",t,{beforePatch:this.beforePatchOptions}),this.setFormAssociatedValue(this.component._value)}componentWillLoad(t){super.componentWillLoad(),this.onStateChange=()=>{if("function"==typeof t){const e=setTimeout((()=>{clearTimeout(e),t(l.S)}))}},this.validateOrientation(this.component._orientation),this.validateOptions(this.component._options),this.validateHideError(this.component._hideError),this.validateValue(this.component._value)}}},39999:(t,e,n)=>{n.d(e,{I:()=>p,g:()=>c,v:()=>d});var i=n(28330),o=n(25422),a=n(11032),s=n(8921),l=n(37699),r=n(6782),h=n(7269);const c=t=>{const e="string"==typeof t._error&&t._error.length>0&&!0===t._touched,n="string"==typeof t._hint&&t._hint.length>0,i=[];return!0===e&&i.push(`${t._id}-error`),!0===n&&i.push(`${t._id}-hint`),{hasError:e,hasHint:n,ariaDescribedBy:i}},d=(t,e,n)=>{(0,i.a)(t,"_hideError",e,n)};class u extends h.A{constructor(t,e,n){super(t,e,n),this.component=t}validateAlert(t){(0,i.a)(this.component,"_alert",t)}validateTouched(t){((t,e)=>{(0,i.a)(t,"_touched",e)})(this.component,t)}componentWillLoad(){super.componentWillLoad(),this.validateAlert(this.component._alert),this.validateTouched(this.component._touched)}}class p extends u{constructor(t,e,n){super(t,e,n),this.valueChangeListeners=[],this.onFacade={onBlur:this.onBlur.bind(this),onChange:this.onChange.bind(this),onClick:this.onClick.bind(this),onFocus:this.onFocus.bind(this)},this.component=t}validateAccessKey(t){(0,i.d)(this.component,"_accessKey",t)}validateAdjustHeight(t){((t,e)=>{(0,i.a)(t,"_adjustHeight",e)})(this.component,t)}validateDisabled(t){(0,i.a)(this.component,"_disabled",t),!0===t&&(0,s.e)()}validateError(t){(0,i.d)(this.component,"_error",t)}validateHideLabel(t){(0,o.v)(this.component,t,{hooks:{afterPatch:()=>{this.component.state._hideLabel&&(0,s.a)("Property hide-label for inputs: Only use for exceptions like search inputs that are clearly identifiable by their context.")}}})}validateHint(t){(0,i.d)(this.component,"_hint",t)}validateId(t){(0,i.d)(this.component,"_id",t,{hooks:{afterPatch:()=>{this.setAttribute("id",this.formAssociated,this.component.state._id)}},minLength:1}),""!==t&&void 0!==t||(0,s.d)("Eine eindeutige ID an den Eingabefeldern ist nicht zwingend erforderlich, könnte aber für die E2E-Tests relevant sein.")}validateLabel(t){(0,a.a)(this.component,t)}validateOn(t){"object"==typeof t&&(0,i.s)(this.component,"_on",t)}validateSmartButton(t){(0,i.o)(t,(()=>{try{t=(0,i.p)(t)}catch(t){}(0,i.s)(this.component,"_smartButton",t)}))}validateTabIndex(t){(0,r.v)(this.component,t)}componentWillLoad(){super.componentWillLoad(),this.validateAccessKey(this.component._accessKey),this.validateAdjustHeight(this.component._adjustHeight),this.validateError(this.component._error),this.validateDisabled(this.component._disabled),this.validateHideLabel(this.component._hideLabel),this.validateHint(this.component._hint),this.validateId(this.component._id),this.validateLabel(this.component._label),this.validateSmartButton(this.component._smartButton),this.validateOn(this.component._on),this.validateTabIndex(this.component._tabIndex)}onBlur(t){var e;this.component._alert=!0,this.component._touched=!0,(0,l.s)(t),(0,l.t)("blur",this.host),"function"==typeof(null===(e=this.component._on)||void 0===e?void 0:e.onBlur)&&this.component._on.onBlur(t)}onChange(t){var e;const n=t.target.value;(0,l.s)(t),(0,l.t)("change",this.host,n),this.setFormAssociatedValue(n),"function"==typeof(null===(e=this.component._on)||void 0===e?void 0:e.onChange)&&this.component._on.onChange(t,n),this.valueChangeListeners.forEach((t=>t(n)))}onClick(t){var e;(0,l.s)(t),(0,l.t)("click",this.host),"function"==typeof(null===(e=this.component._on)||void 0===e?void 0:e.onClick)&&this.component._on.onClick(t)}onFocus(t){var e;this.component._alert=!0,(0,l.s)(t),(0,l.t)("focus",this.host),"function"==typeof(null===(e=this.component._on)||void 0===e?void 0:e.onFocus)&&this.component._on.onFocus(t)}setValue(t,e){var n;this.setFormAssociatedValue(e),"function"==typeof(null===(n=this.component._on)||void 0===n?void 0:n.onChange)&&this.component._on.onChange(t,e)}addValueChangeListener(t){this.valueChangeListeners.push(t)}}},37699:(t,e,n)=>{function i(t){t.stopImmediatePropagation(),t.stopPropagation()}function o(t,e,n){e&&function(t,e,n){t.dispatchEvent(function(t,e){return new CustomEvent(`kol-${t}`,{bubbles:!0,cancelable:!0,composed:!0,detail:e})}(e,n))}(e,t,n)}n.d(e,{s:()=>i,t:()=>o})},25422:(t,e,n)=>{n.d(e,{v:()=>o});var i=n(28330);const o=(t,e,n={})=>{(0,i.a)(t,"_hideLabel",e,n)}},73700:(t,e,n)=>{n.r(e),n.d(e,{kol_input_checkbox:()=>p});var i=n(42054),o=n(43906),a=n(37699),s=n(74817),l=n(39999),r=n(28330),h=n(8921),c=n(44380),d=n(28954);class u extends c.I{constructor(t,e,n){super(t,e,n),this.setFormAssociatedCheckboxValue=t=>{this.component._checked?this.setFormAssociatedValue(t):this.setFormAssociatedValue(null)},this.component=t}validateChecked(t){((t,e)=>{(0,r.a)(t,"_checked",e)})(this.component,t),this.setFormAssociatedCheckboxValue(this.component.state._value)}validateHideError(t){(0,l.v)(this.component,t,{hooks:{afterPatch:()=>{this.component.state._hideError&&(0,h.a)("Property hide-error for inputs: Only use when the error message is shown outside of the input component.")}}})}validateIcons(t){(0,r.w)(this.component,"_icons",(t=>"object"==typeof t&&null!==t&&((0,s.i)(t.checked,1)||(0,s.i)(t.indeterminate,1)||(0,s.i)(t.unchecked,1))),new Set(["InputCheckboxIcons"]),t,{hooks:{beforePatch:(t,e,n)=>{e.set("_icons",Object.assign(Object.assign({},n.state._icons),t))}}})}validateIndeterminate(t){((t,e)=>{(0,r.a)(t,"_indeterminate",e)})(this.component,t)}validateValue(t){(0,r.s)(this.component,"_value",t),this.setFormAssociatedCheckboxValue(this.component.state._value)}validateVariant(t){(0,r.w)(this.component,"_variant",(t=>"string"==typeof t&&("button"===t||"default"===t||"switch"===t)),new Set(["String {button, default, switch}"]),t)}componentWillLoad(){super.componentWillLoad(),this.validateChecked(this.component._checked),this.validateHideError(this.component._hideError),this.validateIcons(this.component._icons),this.validateIndeterminate(this.component._indeterminate),this.validateValue(this.component._value),this.validateVariant(this.component._variant)}}const p=class{render(){const{ariaDescribedBy:t}=(0,l.g)(this.state),e=(0,s.s)(this.state._label);return(0,i.h)(i.H,null,(0,i.h)("kol-input",{class:{checkbox:!0,[this.state._variant]:!0,"hide-label":!!this.state._hideLabel,checked:this.state._checked},"data-role":"button"===this.state._variant?"button":void 0,onKeyPress:"button"===this.state._variant?this.onChange:void 0,tabIndex:"button"===this.state._variant?0:void 0,_accessKey:this.state._accessKey,_alert:this.state._alert,_disabled:this.state._disabled,_error:this.state._error,_hideError:this.state._hideError,_hideLabel:this.state._hideLabel,_hint:this.state._hint,_id:this.state._id,_label:this.state._label,_required:this.state._required,_tooltipAlign:this._tooltipAlign,_touched:this.state._touched},(0,i.h)("span",{slot:"label"},e?(0,i.h)("slot",{name:"expert"}):"string"==typeof this.state._accessKey?(0,i.h)("span",null,(0,i.h)(d.I,{accessKey:this.state._accessKey,label:this.state._label}),(0,i.h)("span",{class:"access-key-hint","aria-hidden":"true"},this.state._accessKey)):(0,i.h)("span",null,this.state._label)),(0,i.h)("div",{slot:"input"},(0,i.h)("kol-icon",{class:"icon",onClick:this.handleIconClick.bind(this),_icons:this.state._indeterminate?this.state._icons.indeterminate:this.state._checked?this.state._icons.checked:this.state._icons.unchecked,_label:""}),(0,i.h)("input",Object.assign({ref:this.catchRef,title:"",accessKey:this.state._accessKey,"aria-describedby":t.length>0?t.join(" "):void 0,"aria-label":this.state._hideLabel&&"string"==typeof this.state._label?this.state._label:void 0,checked:this.state._checked,disabled:this.state._disabled,id:this.state._id,indeterminate:this.state._indeterminate,name:this.state._name,required:this.state._required,tabIndex:this.state._tabIndex,type:"checkbox"},this.controller.onFacade,{onChange:this.onChange,onClick:void 0})))))}constructor(t){(0,i.r)(this,t),this.catchRef=t=>{this.ref=t,(0,s.a)(this.host,this.ref)},this.onChange=t=>{var e;this._checked=!this._checked,this._indeterminate=!1;const n=this._checked?this.state._value:null;(0,a.s)(t),(0,a.t)("change",this.host,n),this.controller.setFormAssociatedValue(n),"function"==typeof(null===(e=this.state._on)||void 0===e?void 0:e.onChange)&&this.state._on.onChange(t,n)},this._accessKey=void 0,this._alert=!0,this._checked=!1,this._hideError=!1,this._disabled=!1,this._error=void 0,this._hideLabel=!1,this._hint="",this._icons=void 0,this._id=void 0,this._indeterminate=void 0,this._label=void 0,this._name=void 0,this._on=void 0,this._required=!1,this._syncValueBySelector=void 0,this._tabIndex=void 0,this._tooltipAlign="top",this._touched=!1,this._value=!0,this._variant="default",this.state={_checked:!1,_hideError:!1,_icons:{checked:"codicon codicon-check",indeterminate:"codicon codicon-remove",unchecked:"codicon codicon-add"},_id:`id-${(0,o.n)()}`,_indeterminate:!1,_label:"",_value:!0,_variant:"default"},this.controller=new u(this,"input-checkbox",this.host)}validateAccessKey(t){this.controller.validateAccessKey(t)}validateAlert(t){this.controller.validateAlert(t)}validateChecked(t){this.controller.validateChecked(t)}validateDisabled(t){this.controller.validateDisabled(t)}validateError(t){this.controller.validateError(t)}validateHideError(t){this.controller.validateHideError(t)}validateHideLabel(t){this.controller.validateHideLabel(t)}validateHint(t){this.controller.validateHint(t)}validateIcons(t){this.controller.validateIcons(t)}validateId(t){this.controller.validateId(t)}validateIndeterminate(t){this.controller.validateIndeterminate(t)}validateLabel(t){this.controller.validateLabel(t)}validateName(t){this.controller.validateName(t)}validateOn(t){this.controller.validateOn(t)}validateRequired(t){this.controller.validateRequired(t)}validateSyncValueBySelector(t){this.controller.validateSyncValueBySelector(t)}validateTabIndex(t){this.controller.validateTabIndex(t)}validateTouched(t){this.controller.validateTouched(t)}validateValue(t){this.controller.validateValue(t)}validateVariant(t){this.controller.validateVariant(t)}componentWillLoad(){this._alert=!0===this._alert,this._touched=!0===this._touched,this.controller.componentWillLoad()}handleIconClick(t){this.state._disabled||this.onChange(t)}get host(){return(0,i.g)(this)}static get watchers(){return{_accessKey:["validateAccessKey"],_alert:["validateAlert"],_checked:["validateChecked"],_disabled:["validateDisabled"],_error:["validateError"],_hideError:["validateHideError"],_hideLabel:["validateHideLabel"],_hint:["validateHint"],_icons:["validateIcons"],_id:["validateId"],_indeterminate:["validateIndeterminate"],_label:["validateLabel"],_name:["validateName"],_on:["validateOn"],_required:["validateRequired"],_syncValueBySelector:["validateSyncValueBySelector"],_tabIndex:["validateTabIndex"],_touched:["validateTouched"],_value:["validateValue"],_variant:["validateVariant"]}}};p.style={default:"@layer kol-global {\n\t/*\n\t * This file contains all rules for accessibility.\n\t */\n\t:host {\n\t\t/*\n\t\t * Minimum size of interactive elements.\n\t\t */\n\t\t--a11y-min-size: 44px;\n\t\tfont-size: inherit;\n\t}\n\n\t* {\n\t\t/*\n\t\t * Verdana is an accessible font that can be used without requiring additional loading time.\n\t\t */\n\t\tfont-family: Verdana;\n\t\t/*\n\t\t * This rule enables the word dividing for all texts. That is important for high zoom levels.\n\t\t */\n\t\thyphens: auto;\n\t\t/*\n\t\t * Letter spacing is required for all texts.\n\t\t */\n\t\tletter-spacing: inherit;\n\t\t/*\n\t\t * This rule enables the word dividing for all texts. That is important for high zoom levels.\n\t\t */\n\t\tword-break: break-word;\n\t\t/*\n\t\t * Word spacing is required for all texts.\n\t\t */\n\t\tword-spacing: inherit;\n\t}\n\n\t/*\n\t * All interactive elements should have a minimum size of 44px.\n\t */\n\t/* input:not([type='checkbox'], [type='radio'], [type='range']), */\n\t/* option, */\n\t/* select, */\n\t/* textarea, */\n\t[role='button'],\n\tbutton:not([role='link']),\n\tkol-input .input {\n\t\tmin-height: var(--a11y-min-size);\n\t\tmin-width: var(--a11y-min-size);\n\t}\n\n\t/*\n\t * Some interactive elements should not inherit the font-family and font-size.\n\t */\n\ta,\n\tbutton,\n\th1,\n\th2,\n\th3,\n\th4,\n\th5,\n\th6,\n\tinput,\n\toption,\n\tselect,\n\ttextarea {\n\t\t/*\n\t\t * All elements should inherit the font family from his parent element.\n\t\t */\n\t\tfont-family: inherit;\n\t\t/*\n\t\t * All elements should inherit the font size from his parent element.\n\t\t */\n\t\tfont-size: inherit;\n\t}\n}\n\n@layer kol-global {\n\t/*\n\t * Dieses CSS stellt sicher, dass der Standard-Style\n\t * von A und Button resettet werden.\n\t */\n\t:is(a, button) {\n\t\tbackground-color: transparent;\n\t\tborder: none;\n\t\tmargin: 0;\n\t\tpadding: 0;\n\t\twidth: 100%; /* 100% needed for custom width from outside */\n\t}\n}\n\n@layer kol-global {\n\t:host {\n\t\t/*\n\t\t * The max-width is needed to prevent the table from overflowing the\n\t\t * parent node, if the table is wider than the parent node.\n\t\t */\n\t\tmax-width: 100%;\n\t}\n\n\t* {\n\t\t/*\n\t\t * We prefer to box-sizing: border-box for all elements.\n\t\t */\n\t\tbox-sizing: border-box;\n\t}\n\n\t/* KolSpan is a layout component with icons in all directions and a label text in the middle. */\n\tkol-span-wc {\n\t\tdisplay: grid;\n\t\tplace-items: center;\n\t}\n\n\t/* The sub span in KolSpan is the horizontal span with icon left and right and the label text in the middle. */\n\tkol-span-wc > span {\n\t\tdisplay: flex;\n\t\tplace-items: center;\n\t}\n\n\ta,\n\tbutton {\n\t\tcursor: pointer;\n\t}\n\n\t/* font-family is NOT inherited all HTML elements. */\n\tbutton,\n\tinput,\n\toption,\n\tselect,\n\ttextarea {\n\t\tfont-family: inherit;\n\t}\n\n\t/* This is the text label. */\n\t.icon-only > kol-span-wc > span > span {\n\t\tdisplay: none;\n\t}\n}\n\n@layer kol-component {\n\t.required label > span::after,\n\t.required legend > span::after {\n\t\tcontent: '*';\n\t}\n}\n\n@layer kol-component {\n\t:host {\n\t\tdisplay: block;\n\t}\n}\n\n@layer kol-component {\n\tinput,\n\ttextarea {\n\t\tcursor: text;\n\t}\n\n\tinput[type='checkbox'],\n\tinput[type='color'],\n\tinput[type='file'],\n\tinput[type='radio'],\n\tinput[type='range'],\n\tlabel,\n\toption,\n\tselect {\n\t\tcursor: pointer;\n\t}\n\n\t/* input[type='checkbox'], */\n\t/* input[type='radio'], */\n\t/* input[type='range'], */\n\tinput[type='color'],\n\tinput[type='date'],\n\tinput[type='datetime-local'],\n\tinput[type='email'],\n\tinput[type='file'],\n\tinput[type='month'],\n\tinput[type='number'],\n\tinput[type='password'],\n\tinput[type='search'],\n\tinput[type='tel'],\n\tinput[type='text'],\n\tinput[type='time'],\n\tinput[type='url'],\n\tinput[type='week'],\n\tselect,\n\tselect[multiple] option,\n\ttextarea {\n\t\tfont-size: 1rem;\n\t\twidth: 100%;\n\t}\n\n\t/* needed hack for vertical alignment */\n\tinput[type='file'] {\n\t\tpadding: calc((var(--a11y-min-size) - 1rem) / 10) 0.5em;\n\t}\n\n\t/* needed hack for vertical alignment */\n\tselect[multiple] option {\n\t\tpadding: calc((var(--a11y-min-size) - 1rem) / 2) 0.5em;\n\t}\n\n\tkol-input.disabled :is(button, input, label, option, select, textarea) {\n\t\tcursor: not-allowed;\n\t\topacity: 0.5;\n\t}\n}\n\n@layer kol-component {\n\tlabel {\n\t\tcursor: pointer;\n\t}\n\n\tkol-input {\n\t\talign-items: center;\n\t\tdisplay: grid;\n\t\tjustify-items: left;\n\t}\n\n\tkol-input.default,\n\tkol-input.switch {\n\t\tgrid-template-columns: auto 1fr;\n\t}\n\n\tkol-input .input {\n\t\talign-items: center;\n\t\tdisplay: grid;\n\t\torder: 1;\n\t}\n\n\tkol-input .input div {\n\t\tdisplay: inline-flex;\n\t}\n\n\tkol-input .input input {\n\t\tmargin: 0;\n\t}\n\n\tkol-input label {\n\t\torder: 2;\n\t}\n\n\tkol-input .hint,\n\tkol-input.error > kol-alert {\n\t\tgrid-column: span 2;\n\t}\n\n\tkol-input kol-alert.error {\n\t\torder: 3;\n\t}\n\n\tkol-input .hint {\n\t\torder: 4;\n\t}\n\n\t.error.hidden {\n\t\tdisplay: none;\n\t}\n\n\tinput {\n\t\tborder-style: solid;\n\t\tborder-width: 2px;\n\t\tline-height: 24px;\n\t}\n\n\tinput[type='checkbox'] {\n\t\tappearance: none;\n\t\tbackground-color: #fff;\n\t\tcursor: pointer;\n\t\ttransition: 0.5s;\n\t}\n\n\tinput[type='checkbox'].kol-disabled:before {\n\t\tcursor: not-allowed;\n\t}\n\n\tinput[type='checkbox']:before {\n\t\tcontent: '';\n\t\tcursor: pointer;\n\t}\n\n\t.default kol-icon {\n\t\tdisplay: none;\n\t}\n\n\tkol-input.required .tooltip-content .span-label::after {\n\t\tcontent: '*';\n\t}\n}\n\n@layer kol-component {\n\t.button {\n\t\tdisplay: grid;\n\t\tgrid-template-columns: var(--a11y-min-size) auto;\n\t\tgrid-template-areas: 'error error' 'input label' 'hint hint';\n\t}\n\n\t.button[tabindex]:focus {\n\t\t/* override global `[tabindex]:focus` style */\n\t\tcursor: inherit;\n\t}\n\n\t.button input {\n\t\tdisplay: none;\n\t}\n\n\t.button > .error {\n\t\tgrid-area: error;\n\t}\n\n\t.button > label {\n\t\tgrid-area: label;\n\t}\n\n\t.button > .input {\n\t\tgrid-area: input;\n\t}\n\n\t.button > .hint {\n\t\tgrid-area: hint;\n\t}\n\n\t.button .icon {\n\t\tdisplay: flex;\n\t\talign-items: center;\n\t\tjustify-content: center;\n\t\twidth: var(--a11y-min-size);\n\t\theight: var(--a11y-min-size);\n\t}\n}\n\n@layer kol-component {\n\t.default input[type='checkbox'] {\n\t\theight: 1.5em;\n\t\twidth: 1.5em;\n\t}\n\n\t.default input[type='checkbox']:before {\n\t\tdisplay: block;\n\t\theight: 1.5em;\n\t\tposition: relative;\n\t\twidth: 1.5em;\n\t}\n\n\t.default input[type='checkbox']:checked:before {\n\t\tborder-radius: 1px;\n\t\tborder-style: solid;\n\t\tborder-width: 0 3px 3px 0;\n\t\theight: 0.75em;\n\t\tleft: calc(0.375em - 2px);\n\t\ttransform: rotate(40deg) translate(-50%, -50%);\n\t\ttop: calc(0.7125em - 2px);\n\t\twidth: 0.375em;\n\t}\n\n\t.default input[type='checkbox']:indeterminate:before {\n\t\tbackground-color: #000;\n\t\theight: 0.2em;\n\t\tleft: 0.24em;\n\t\ttop: 0.575em;\n\t\twidth: 0.8em;\n\t}\n}\n\n@layer kol-component {\n\t.switch .input {\n\t\tposition: relative;\n\t}\n\n\t.switch input[type='checkbox'] {\n\t\tdisplay: inline-block;\n\t\theight: 1.7em;\n\t\tmin-width: 3.2em;\n\t\tposition: relative;\n\t\twidth: 3.2em;\n\t}\n\n\t.switch input[type='checkbox']::before {\n\t\tbackground-color: #000;\n\t\theight: 1.2em;\n\t\tleft: calc(0.25em - 2px);\n\t\ttop: calc(0.25em - 2px);\n\t\tposition: absolute;\n\t\ttransition: 0.5s;\n\t\twidth: 1.2em;\n\t}\n\n\t.switch input[type='checkbox']:checked::before {\n\t\ttransform: translateX(1.5em);\n\t}\n\n\t.switch input[type='checkbox']:indeterminate::before {\n\t\ttransform: translateX(0.75em);\n\t}\n\n\t.switch .icon {\n\t\tcursor: pointer;\n\t\tdisplay: flex;\n\t\talign-items: center;\n\t\tjustify-content: center;\n\t\twidth: 1.2em;\n\t\theight: 1.2em;\n\t\tposition: absolute;\n\t\tz-index: 1;\n\t\ttop: 50%;\n\t\tleft: 4px;\n\t\ttransform: translate(0, -50%);\n\t\ttransition: 0.5s;\n\t\tcolor: #000;\n\t}\n\n\t.switch:has(input:checked) .icon {\n\t\ttransform: translate(1.5em, -50%);\n\t}\n\n\t.switch:has(input:indeterminate) .icon {\n\t\ttransform: translate(0.75em, -50%);\n\t}\n}\n\n"}},11032:(t,e,n)=>{n.d(e,{a:()=>d,c:()=>r,h:()=>l,v:()=>c});var i=n(8921),o=n(28330);const a=/[a-zA-Z0-9äöüÄÖÜß]/g,s=/^\d+$/;function l(t,e=1){return function(t){var e;return"string"==typeof t&&(null===(e=t.match(a))||void 0===e?void 0:e.length)||0}(t)>=e}function r(t){return s.test(t)}const h=new Set(["string"]),c=(t,e,n={})=>{(0,o.w)(t,"_label",(t=>"string"==typeof t),h,e,function(t){var e;return{hooks:{afterPatch:(e,n,o,a)=>{var s,h;"function"==typeof(null===(s=t.hooks)||void 0===s?void 0:s.afterPatch)&&(null===(h=t.hooks)||void 0===h||h.afterPatch(e,n,o,a)),"string"==typeof e&&!1===l(e,3)&&!1===r(e)&&(0,i.a)(`The heading or label ("${e}") is not accessible. A label should consist of at least three readable characters.`),"string"==typeof e&&e.length>80&&(0,i.u)("A heading or label should not be longer than 80 characters.")},beforePatch:null===(e=t.hooks)||void 0===e?void 0:e.beforePatch}}}(n))},d=c},6782:(t,e,n)=>{n.d(e,{v:()=>s});var i=n(8921),o=n(28330);const a={hooks:{afterPatch:t=>{-1!==t&&0!==t&&(0,i.a)("Don’t Use Tabindex Greater than 0: https://adrianroselli.com/2014/11/dont-use-tabindex-greater-than-0.html")}}},s=(t,e)=>{(0,o.e)(t,"_tabIndex",e,a)}}}]);