/*! For license information please see 2600.js.LICENSE.txt */
"use strict";(self.webpackChunk_public_ui_sample_react=self.webpackChunk_public_ui_sample_react||[]).push([[2600],{8193:(t,e,n)=>{n.d(e,{A:()=>s});var i=n(3409),o=n(216),a=n(455);class s{constructor(t,e,n){var i,s,l,r;if(this.experimentalMode=(0,a.a)(),this.setFormAssociatedValue=t=>{var e;const n=null===(e=this.formAssociated)||void 0===e?void 0:e.getAttribute("name");null!==n&&""!==n||(0,o.d)(` The form field (${this.type}) must have a name attribute to be form-associated. Please define the _name attribute.`);const i=this.tryToStringifyValue(t);this.syncValue(t,i,this.formAssociated),this.syncValue(t,i,this.syncToOwnInput)},this.component=t,this.host=this.findHostWithShadowRoot(n),this.type=e,this.experimentalMode&&("KOL-BUTTON"===(r=null===(i=this.host)||void 0===i?void 0:i.tagName)||"KOL-INPUT-CHECKBOX"===r||"KOL-INPUT-COLOR"===r||"KOL-INPUT-DATE"===r||"KOL-INPUT-EMAIL"===r||"KOL-INPUT-FILE"===r||"KOL-INPUT-NUMBER"===r||"KOL-INPUT-PASSWORD"===r||"KOL-INPUT-RADIO"===r||"KOL-INPUT-RANGE"===r||"KOL-INPUT-TEXT"===r||"KOL-SELECT"===r||"KOL-TEXTAREA"===r)){switch(null===(s=this.host)||void 0===s||s.querySelectorAll("input,select,textarea").forEach((t=>{var e;null===(e=this.host)||void 0===e||e.removeChild(t)})),this.type){case"button":case"color":case"date":case"email":case"file":case"number":case"password":case"radio":case"range":case"text":this.formAssociated=document.createElement("input"),this.formAssociated.setAttribute("type",this.type);break;case"select":this.formAssociated=document.createElement("select"),this.formAssociated.setAttribute("multiple","");break;case"textarea":this.formAssociated=document.createElement("textarea");break;default:this.formAssociated=document.createElement("input"),this.formAssociated.setAttribute("type","hidden")}this.formAssociated.setAttribute("aria-hidden","true"),this.formAssociated.setAttribute("data-form-associated",""),this.formAssociated.setAttribute("hidden",""),null===(l=this.host)||void 0===l||l.appendChild(this.formAssociated)}}findHostWithShadowRoot(t){for(;null===(null==t?void 0:t.shadowRoot)&&t!==document.body;)(t=null==t?void 0:t.parentNode).host&&(t=t.host);return t}setAttribute(t,e,n){if(this.experimentalMode)try{if("boolean"!=typeof(n="object"==typeof n&&null!==n?JSON.stringify(n):n)&&"number"!=typeof n&&"string"!=typeof n)throw new Error("Invalid value type: "+typeof n);null==e||e.setAttribute(t,`${n}`)}catch(n){null==e||e.removeAttribute(t)}}tryToStringifyValue(t){try{return"object"==typeof t&&null!==t?JSON.stringify(t).toString():null==t?null:t.toString()}catch(t){return(0,o.h)(`The form field raw value is not able to stringify! ${t}`),""}}syncValue(t,e,n){if(n)switch(this.type){case"file":n.files=t;break;case"select":n.querySelectorAll("option").forEach((t=>{n.removeChild(t)})),Array.isArray(t)&&t.forEach((t=>{const e=this.tryToStringifyValue(t);if("string"==typeof e){const t=document.createElement("option");t.setAttribute("value",e),t.setAttribute("selected",""),n.appendChild(t)}}));break;default:"string"==typeof e?(n.setAttribute("value",e),n.value=e):(n.removeAttribute("value"),n.value="")}}validateName(t){((t,e,n)=>{(0,i.d)(t,"_name",e,n)})(this.component,t,{hooks:{afterPatch:()=>{this.setAttribute("name",this.formAssociated,this.component.state._name)}}}),void 0===t&&(0,o.d)("Ein Name am Eingabefeldern oder Schalter ist nicht zwingend erforderlich, kann aber für die Autocomplete-Funktion und für das statische Versenden des Eingabefeldes relevant sein.")}validateSyncValueBySelector(t){if(this.experimentalMode&&"string"==typeof t){const e=document.querySelector(t);e&&(this.syncToOwnInput=e)}}componentWillLoad(){this.validateName(this.component._name),this.validateSyncValueBySelector(this.component._syncValueBySelector)}}},47:(t,e,n)=>{n.d(e,{I:()=>p,g:()=>h});var i=n(3409),o=n(8346),a=n(88),s=n(216),l=n(7865),r=n(5170),c=n(8193);const h=t=>{const e="string"==typeof t._error&&t._error.length>0&&!0===t._touched,n="string"==typeof t._hint&&t._hint.length>0,i=[];return!0===e&&i.push(`${t._id}-error`),!0===n&&i.push(`${t._id}-hint`),{hasError:e,hasHint:n,ariaDescribedBy:i}};class d extends c.A{constructor(t,e,n){super(t,e,n),this.component=t}validateAlert(t){(0,i.a)(this.component,"_alert",t)}validateTouched(t){((t,e)=>{(0,i.a)(t,"_touched",e)})(this.component,t)}componentWillLoad(){super.componentWillLoad(),this.validateAlert(this.component._alert),this.validateTouched(this.component._touched)}}class p extends d{constructor(t,e,n){super(t,e,n),this.valueChangeListeners=[],this.onFacade={onBlur:this.onBlur.bind(this),onChange:this.onChange.bind(this),onClick:this.onClick.bind(this),onFocus:this.onFocus.bind(this),onInput:this.onInput.bind(this)},this.component=t}validateAccessKey(t){(0,i.d)(this.component,"_accessKey",t)}validateAdjustHeight(t){((t,e)=>{(0,i.a)(t,"_adjustHeight",e)})(this.component,t)}validateDisabled(t){(0,i.a)(this.component,"_disabled",t),!0===t&&(0,s.g)()}validateError(t){(0,i.d)(this.component,"_error",t)}validateHideError(t){((t,e,n)=>{(0,i.a)(t,"_hideError",e,n)})(this.component,t,{hooks:{afterPatch:()=>{this.component.state._hideError&&(0,s.a)("Property hide-error for inputs: Only use when the error message is shown outside of the input component.")}}})}validateHideLabel(t){(0,o.v)(this.component,t,{hooks:{afterPatch:()=>{this.component.state._hideLabel&&(0,s.a)("Property hide-label for inputs: Only use for exceptions like search inputs that are clearly identifiable by their context.")}}})}validateHint(t){(0,i.d)(this.component,"_hint",t)}validateId(t){(0,i.d)(this.component,"_id",t,{hooks:{afterPatch:()=>{this.setAttribute("id",this.formAssociated,this.component.state._id)}},minLength:1}),""!==t&&void 0!==t||(0,s.d)("Eine eindeutige ID an den Eingabefeldern ist nicht zwingend erforderlich, könnte aber für die E2E-Tests relevant sein.")}validateLabel(t){(0,a.a)(this.component,t,{required:!0})}validateOn(t){"object"==typeof t&&(0,i.s)(this.component,"_on",t)}validateSmartButton(t){(0,i.o)(t,(()=>{try{t=(0,i.p)(t)}catch(t){}(0,i.s)(this.component,"_smartButton",t)}))}validateTabIndex(t){(0,r.v)(this.component,t)}componentWillLoad(){super.componentWillLoad(),this.validateAccessKey(this.component._accessKey),this.validateAdjustHeight(this.component._adjustHeight),this.validateError(this.component._error),this.validateDisabled(this.component._disabled),this.validateHideError(this.component._hideError),this.validateHideLabel(this.component._hideLabel),this.validateHint(this.component._hint),this.validateId(this.component._id),this.validateLabel(this.component._label),this.validateSmartButton(this.component._smartButton),this.validateOn(this.component._on),this.validateTabIndex(this.component._tabIndex)}onBlur(t){var e;this.component._alert=!0,this.component._touched=!0,(0,l.s)(t),(0,l.t)("blur",this.host),"function"==typeof(null===(e=this.component._on)||void 0===e?void 0:e.onBlur)&&this.component._on.onBlur(t)}onChange(t){var e;const n=t.target.value;(0,l.t)("change",this.host,n),"function"==typeof(null===(e=this.component._on)||void 0===e?void 0:e.onChange)&&this.component._on.onChange(t,n),this.valueChangeListeners.forEach((t=>t(n)))}onClick(t){var e;(0,l.s)(t),(0,l.t)("click",this.host),"function"==typeof(null===(e=this.component._on)||void 0===e?void 0:e.onClick)&&this.component._on.onClick(t)}onFocus(t){var e;this.component._alert=!0,(0,l.s)(t),(0,l.t)("focus",this.host),"function"==typeof(null===(e=this.component._on)||void 0===e?void 0:e.onFocus)&&this.component._on.onFocus(t)}onInput(t,e=!0){var n;const i=t.target.value;(0,l.s)(t),(0,l.t)("input",this.host,i),e&&this.setFormAssociatedValue(i),"function"==typeof(null===(n=this.component._on)||void 0===n?void 0:n.onInput)&&this.component._on.onInput(t,i)}setValue(t,e){var n;this.setFormAssociatedValue(e),"function"==typeof(null===(n=this.component._on)||void 0===n?void 0:n.onChange)&&this.component._on.onChange(t,e)}addValueChangeListener(t){this.valueChangeListeners.push(t)}}},5128:(t,e,n)=>{n.d(e,{I:()=>d,a:()=>p,f:()=>h,v:()=>c});var i=n(3409),o=n(88),a=n(216),s=n(4186),l=n(47);const r=t=>{if("object"==typeof t&&null!==t){if("string"==typeof t.label&&t.label.length>0)return t.disabled=!0===t.disabled,t.label=`${t.label}`.trim(),!1===(0,o.h)(t.label,3)&&!1===(0,o.c)(t.label)&&(0,a.a)(`Ein abweichendes Aria-Label (${t.label}) ist nicht barrierefrei. Ein abweichendes Aria-Label sollte aus mindestens drei lesbaren Zeichen bestehen.`),!Array.isArray(t.options)||void 0===t.options.find((t=>!1===r(t)));if("number"==typeof t.label)return!0}return!1},c=(t,e,n={})=>{(0,i.c)(t,"_options",r,e,void 0,n)},h=(t,e,n="")=>{e.forEach(((e,i)=>{const o=`${n}-${i}`;"object"==typeof e&&null!==e&&"string"==typeof e.label&&e.label.length>0&&(Array.isArray(e.options)?h(t,e.options,o):t.set(o,e))}))};class d extends l.I{constructor(t,e,n){super(t,e,n),this.component=t}validateRequired(t){((t,e)=>{(0,i.a)(t,"_required",e)})(this.component,t)}componentWillLoad(){super.componentWillLoad(),this.validateRequired(this.component._required)}}class p extends d{constructor(t,e,n){super(t,e,n),this.keyOptionMap=new Map,this.getOptionByKey=t=>this.keyOptionMap.get(t),this.isValueInOptions=(t,e)=>void 0!==e.find((e=>e.value===t)),this.afterPatchOptions=(t,e,n,i)=>{"_value"===i&&this.setFormAssociatedValue(t)},this.beforePatchOptions=(t,e)=>{const n=e.has("_options")?e.get("_options"):this.component.state._options;if(Array.isArray(n)&&n.length>0){this.keyOptionMap.clear(),h(this.keyOptionMap,n);const t=e.has("_value")?e.get("_value"):this.component.state._value;!1===this.isValueInOptions(t,n)&&(e.set("_value",n[0].value),this.onStateChange())}},this.component=t}validateOrientation(t){(0,i.w)(this.component,"_orientation",(t=>"horizontal"===t||"vertical"===t),new Set(["Orientation {horizontal, vertical}"]),t,{defaultValue:"vertical"})}validateOptions(t){((t,e,n={})=>{(0,i.c)(t,"_options",(t=>"object"==typeof t&&null!==t&&"string"==typeof t.label&&t.label.length>0),e,void 0,n)})(this.component,t,{hooks:{afterPatch:this.afterPatchOptions,beforePatch:this.beforePatchOptions}})}validateValue(t){t=(0,i.m)(t),t=Array.isArray(t)?t[0]:t,(0,i.s)(this.component,"_value",t,{afterPatch:this.afterPatchOptions,beforePatch:this.beforePatchOptions})}componentWillLoad(t){super.componentWillLoad(),this.onStateChange=()=>{if("function"==typeof t){const e=setTimeout((()=>{clearTimeout(e),t(s.S)}))}},this.validateOrientation(this.component._orientation),this.validateOptions(this.component._options||this.component._list),this.validateValue(this.component._value)}}},7865:(t,e,n)=>{function i(t){t.stopImmediatePropagation(),t.stopPropagation()}function o(t,e,n){e&&function(t,e,n){const i=t.dispatchEvent(function(t,e){return new CustomEvent(`kol-${t}`,{bubbles:!0,cancelable:!0,composed:!0,detail:e})}(e,n))}(e,t,n)}n.d(e,{s:()=>i,t:()=>o})},8346:(t,e,n)=>{n.d(e,{v:()=>o});var i=n(3409);const o=(t,e,n={})=>{(0,i.a)(t,"_hideLabel",e,n)}},2600:(t,e,n)=>{n.r(e),n.d(e,{kol_input_checkbox:()=>u});var i=n(4566),o=n(455),a=n(7865),s=n(4186),l=n(47),r=n(3409),c=n(216),h=n(5128),d=n(5109);class p extends h.I{constructor(t,e,n){super(t,e,n),this.setFormAssociatedCheckboxValue=t=>{this.component._checked?this.setFormAssociatedValue(t):this.setFormAssociatedValue(null)},this.component=t}validateChecked(t){((t,e)=>{(0,r.a)(t,"_checked",e)})(this.component,t),this.setFormAssociatedCheckboxValue(this.component.state._value)}validateIcon(t){this.validateIcons(t)}validateIcons(t){(0,r.w)(this.component,"_icons",(t=>"object"==typeof t&&null!==t&&((0,s.i)(t.checked,1)||(0,s.i)(t.indeterminate,1)||(0,s.i)(t.unchecked,1))),new Set(["InputCheckboxIcons"]),t,{hooks:{beforePatch:(t,e,n)=>{e.set("_icons",Object.assign(Object.assign({},n.state._icons),t))}}})}validateIndeterminate(t){((t,e)=>{(0,r.a)(t,"_indeterminate",e)})(this.component,t)}validateType(t){(0,c.d)('The "_type" prop is deprecated. Use "_variant" instead.'),this.validateVariant(t)}validateValue(t){(0,r.s)(this.component,"_value",t),this.setFormAssociatedCheckboxValue(this.component.state._value)}validateVariant(t){"checkbox"===t&&((0,c.d)("[KolCheckbox] The \"_variant\" value 'checkbox' is deprecated. Use the new value 'default' instead."),t="default"),(0,r.w)(this.component,"_variant",(t=>"string"==typeof t&&("button"===t||"default"===t||"switch"===t)),new Set(["String {button, default, switch}"]),t)}componentWillLoad(){super.componentWillLoad(),this.validateChecked(this.component._checked),this.validateIcons(this.component._icons||this.component._icon),this.validateIndeterminate(this.component._indeterminate),this.validateValue(this.component._value),this.validateVariant(this.component._variant||this.component._type)}}const u=class{render(){const{ariaDescribedBy:t}=(0,l.g)(this.state),e=(0,s.s)(this.state._label);return(0,i.h)(i.H,{key:"38799c2da5b56cd76f643cbd74c57a29e905f634",class:"kol-input-checkbox"},(0,i.h)(d.m,{key:"c35230fe583322921d09a20f1e8bb2b8019163e1",class:{checkbox:!0,[this.state._variant]:!0,"hide-label":!!this.state._hideLabel,checked:this.state._checked,indeterminate:this.state._indeterminate},"data-role":"button"===this.state._variant?"button":void 0,_alert:this.state._alert,_disabled:this.state._disabled,_error:this.state._error,_hideError:this.state._hideError,_hideLabel:this.state._hideLabel,_hint:this.state._hint,_id:this.state._id,_label:this.state._label,_required:this.state._required,_tooltipAlign:this._tooltipAlign,_touched:this.state._touched},(0,i.h)("span",{key:"bd95efa57bedf9a0b03694c72855d516c74995c4",slot:"label"},e?(0,i.h)("slot",null):this.state._label),(0,i.h)("label",{key:"c84b055e897399707969f20ad209d38f6c479428",slot:"input",class:"checkbox-container"},(0,i.h)(d.h,{key:"811c6286f926e130e144be58de8360f97e283205",class:"icon",_icons:this.state._indeterminate?this.state._icons.indeterminate:this.state._checked?this.state._icons.checked:this.state._icons.unchecked,_label:""}),(0,i.h)("input",Object.assign({key:"67a81d21e9d702d28127028d910396c25804ad1f",class:"checkbox-input-element"+("button"===this.state._variant?" visually-hidden":""),ref:this.catchRef,title:"",accessKey:this.state._accessKey,"aria-describedby":t.length>0?t.join(" "):void 0,"aria-label":this.state._hideLabel&&"string"==typeof this.state._label?this.state._label:void 0,checked:this.state._checked,disabled:this.state._disabled,id:this.state._id,indeterminate:this.state._indeterminate,name:this.state._name,required:this.state._required,tabIndex:this.state._tabIndex,type:"checkbox"},this.controller.onFacade,{onInput:this.onInput,onChange:this.onChange,onClick:void 0})))))}constructor(t){(0,i.r)(this,t),this.catchRef=t=>{(0,s.a)(this.host,t)},this.onInput=t=>{var e;this._checked=!this._checked,this._indeterminate=!1;const n=this._checked?this.state._value:null;(0,a.t)("input",this.host,n),"function"==typeof(null===(e=this._on)||void 0===e?void 0:e.onInput)&&this._on.onInput(t,n)},this.onChange=t=>{var e;const n=this._checked?this.state._value:null;(0,a.t)("change",this.host,n),this.controller.setFormAssociatedCheckboxValue(n),"function"==typeof(null===(e=this._on)||void 0===e?void 0:e.onChange)&&this._on.onChange(t,n)},this._accessKey=void 0,this._alert=!0,this._checked=!1,this._hideError=!1,this._disabled=!1,this._error=void 0,this._hideLabel=!1,this._hint="",this._icon=void 0,this._icons=void 0,this._id=void 0,this._indeterminate=void 0,this._label=void 0,this._name=void 0,this._on=void 0,this._required=!1,this._syncValueBySelector=void 0,this._tabIndex=void 0,this._tooltipAlign="top",this._touched=!1,this._type=void 0,this._value=!0,this._variant=void 0,this.state={_checked:!1,_hideError:!1,_icons:{checked:"codicon codicon-check",indeterminate:"codicon codicon-remove",unchecked:"codicon codicon-add"},_id:`id-${(0,o.n)()}`,_indeterminate:!1,_label:"…",_value:!0,_variant:"default"},this.controller=new p(this,"checkbox",this.host)}validateAccessKey(t){this.controller.validateAccessKey(t)}validateAlert(t){this.controller.validateAlert(t)}validateChecked(t){this.controller.validateChecked(t)}validateDisabled(t){this.controller.validateDisabled(t)}validateError(t){this.controller.validateError(t)}validateHideError(t){this.controller.validateHideError(t)}validateHideLabel(t){this.controller.validateHideLabel(t)}validateHint(t){this.controller.validateHint(t)}validateIcon(t){this.validateIcons(t)}validateIcons(t){this.controller.validateIcons(t)}validateId(t){this.controller.validateId(t)}validateIndeterminate(t){this.controller.validateIndeterminate(t)}validateLabel(t){this.controller.validateLabel(t)}validateName(t){this.controller.validateName(t)}validateOn(t){this.controller.validateOn(t)}validateRequired(t){this.controller.validateRequired(t)}validateSyncValueBySelector(t){this.controller.validateSyncValueBySelector(t)}validateTabIndex(t){this.controller.validateTabIndex(t)}validateTouched(t){this.controller.validateTouched(t)}validateType(t){this.controller.validateType(t)}validateValue(t){this.controller.validateValue(t)}validateVariant(t){this.controller.validateVariant(t)}componentWillLoad(){this._alert=!0===this._alert,this._touched=!0===this._touched,this.controller.componentWillLoad()}get host(){return(0,i.g)(this)}static get watchers(){return{_accessKey:["validateAccessKey"],_alert:["validateAlert"],_checked:["validateChecked"],_disabled:["validateDisabled"],_error:["validateError"],_hideError:["validateHideError"],_hideLabel:["validateHideLabel"],_hint:["validateHint"],_icon:["validateIcon"],_icons:["validateIcons"],_id:["validateId"],_indeterminate:["validateIndeterminate"],_label:["validateLabel"],_name:["validateName"],_on:["validateOn"],_required:["validateRequired"],_syncValueBySelector:["validateSyncValueBySelector"],_tabIndex:["validateTabIndex"],_touched:["validateTouched"],_type:["validateType"],_value:["validateValue"],_variant:["validateVariant"]}}};u.style={default:"/*\n * This file contains all rules for accessibility.\n */\n:host {\n  /*\n   * Minimum size of interactive elements.\n   */\n  --a11y-min-size: 44px;\n  /*\n   * No element should be used without a background and font color whose contrast ratio has\n   * not been checked. By initially setting the background color to white and the font color\n   * to black, the contrast ratio is ensured and explicit adjustment is forced.\n   */\n  background-color: white;\n  color: black;\n  /*\n   * Verdana is an accessible font that can be used without requiring additional loading time.\n   */\n  font-family: Verdana;\n}\n\n* {\n  /*\n   * This rule enables the word dividing for all texts. That is important for high zoom levels.\n   */\n  hyphens: auto;\n  /*\n   * Letter spacing is required for all texts.\n   */\n  letter-spacing: inherit;\n  /*\n   * This rule enables the word dividing for all texts. That is important for high zoom levels.\n   */\n  word-break: break-word;\n  /*\n   * Word spacing is required for all texts.\n   */\n  word-spacing: inherit;\n}\n\n/*\n * All interactive elements should have a minimum size of 44px.\n */\n/* input:not([type='checkbox'], [type='radio'], [type='range']), */\n/* option, */\n/* select, */\n/* textarea, */\n[role=button],\nbutton:not([role=link]),\n.kol-input .input {\n  min-height: var(--a11y-min-size);\n  min-width: var(--a11y-min-size);\n}\n\n/*\n * Some interactive elements should not inherit the font-family and font-size.\n */\na,\nbutton,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\ninput,\noption,\nselect,\ntextarea {\n  /*\n   * All elements should inherit the font family from his parent element.\n   */\n  font-family: inherit;\n  /*\n   * All elements should inherit the font size from his parent element.\n   */\n  font-size: inherit;\n}\n\n/**\n * Sometimes we need the semantic element for accessibility reasons,\n * but we don't want to show it.\n *\n * - https://www.a11yproject.com/posts/how-to-hide-content/\n */\n.visually-hidden {\n  clip: rect(0 0 0 0);\n  clip-path: inset(50%);\n  height: 1px;\n  overflow: hidden;\n  position: absolute;\n  white-space: nowrap;\n  width: 1px;\n}\n\n/*\n * Dieses CSS stellt sicher, dass der Standard-Style\n * von A und Button resettet werden.\n */\n:is(a, button) {\n  background-color: transparent;\n  border: none;\n  margin: 0;\n  padding: 0;\n  width: 100%; /* 100% needed for custom width from outside */\n}\n\n/*\n\t * Ensure elements with hidden attribute to be actually not visible\n\t * @see https://meowni.ca/hidden.is.a.lie.html\n\t */\n[hidden] {\n  display: none !important;\n}\n\n:host {\n  /*\n   * The max-width is needed to prevent the table from overflowing the\n   * parent node, if the table is wider than the parent node.\n   */\n  max-width: 100%;\n}\n\n* {\n  /*\n   * We prefer to box-sizing: border-box for all elements.\n   */\n  box-sizing: border-box;\n}\n\n/* KolSpan is a layout component with icons in all directions and a label text in the middle. */\n.kol-span-wc {\n  display: grid;\n  place-items: center;\n}\n\n/* The sub span in KolSpan is the horizontal span with icon left and right and the label text in the middle. */\n.kol-span-wc > span {\n  display: flex;\n  place-items: center;\n}\n\na,\nbutton {\n  cursor: pointer;\n}\n\n/* This is the text label. */\n.icon-only > .kol-span-wc > span > span {\n  display: none;\n}\n\n.hidden {\n  display: none;\n  visibility: hidden;\n}\n\n.required label > span::after,\n.required legend > span::after {\n  content: \"*\";\n}\n\n:host {\n  display: block;\n}\n\ninput,\ntextarea {\n  cursor: text;\n}\n\ninput[type=checkbox],\ninput[type=color],\ninput[type=file],\ninput[type=radio],\ninput[type=range],\nlabel,\noption,\nselect {\n  cursor: pointer;\n}\n\n/* input[type='checkbox'], */\n/* input[type='radio'], */\n/* input[type='range'], */\ninput[type=color],\ninput[type=date],\ninput[type=datetime-local],\ninput[type=email],\ninput[type=file],\ninput[type=month],\ninput[type=number],\ninput[type=password],\ninput[type=search],\ninput[type=tel],\ninput[type=text],\ninput[type=time],\ninput[type=url],\ninput[type=week],\nselect,\nselect[multiple] option,\ntextarea {\n  font-size: calc(16rem / var(--kolibri-root-font-size, 16));\n  width: 100%;\n}\n\n/* needed hack for vertical alignment */\ninput[type=file] {\n  padding: calc((var(--a11y-min-size) - (16rem / var(--kolibri-root-font-size, 16))) / 10) 0.5em;\n}\n\n/* needed hack for vertical alignment */\nselect[multiple] option {\n  padding: calc((var(--a11y-min-size) - (16rem / var(--kolibri-root-font-size, 16))) / 2) 0.5em;\n}\n\n.kol-input.disabled :is(button, input, option, select, textarea, .input-label) {\n  cursor: not-allowed;\n  opacity: 0.5;\n}\n\nlabel {\n  cursor: pointer;\n}\n\n.kol-input {\n  align-items: center;\n  display: grid;\n  justify-items: left;\n}\n\n.kol-input.default,\n.kol-input.switch {\n  grid-template-columns: auto 1fr;\n}\n\n.kol-input .input {\n  align-items: center;\n  display: grid;\n  order: 1;\n}\n\n.kol-input .input div {\n  display: inline-flex;\n}\n\n.kol-input .input input {\n  margin: 0;\n}\n\n.kol-input label {\n  order: 2;\n}\n\n.kol-input .hint,\n.kol-input.error > .kol-alert {\n  grid-column: span 2;\n}\n\n.kol-input .kol-alert.error {\n  order: 3;\n}\n\n.kol-input .hint {\n  order: 4;\n}\n\ninput {\n  border-style: solid;\n  border-width: 2px;\n  line-height: 24px;\n}\n\ninput[type=checkbox] {\n  appearance: none;\n  background-color: #fff;\n  cursor: pointer;\n  transition: 0.5s;\n}\n\ninput[type=checkbox].kol-disabled:before {\n  cursor: not-allowed;\n}\n\ninput[type=checkbox]:before {\n  content: \"\";\n  cursor: pointer;\n}\n\n.kol-input.required .tooltip-content .span-label::after {\n  content: \"*\";\n}\n\n.button {\n  display: grid;\n  grid-template-columns: var(--a11y-min-size) auto;\n  grid-template-areas: \"error error\" \"input label\" \"hint hint\";\n}\n\n.button:focus-within {\n  /* override global `[tabindex]:focus` style */\n  cursor: inherit;\n  outline-color: black;\n  outline-style: solid;\n}\n\n.button > .error {\n  grid-area: error;\n}\n\n.button > label {\n  grid-area: label;\n}\n\n.button > .input {\n  grid-area: input;\n}\n\n.button > .hint {\n  grid-area: hint;\n}\n\n.button .icon {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: var(--a11y-min-size);\n  height: var(--a11y-min-size);\n}\n\n@layer kol-component {\n  .default .checkbox-container {\n    align-items: center;\n    display: flex;\n    height: var(--a11y-min-size);\n    justify-content: center;\n    position: relative;\n    width: var(--a11y-min-size);\n  }\n  .default .icon {\n    display: block;\n    inset: auto;\n    position: absolute;\n    z-index: 1;\n  }\n  .default:not(.checked):not(.indeterminate) .icon::part(icon) {\n    display: none;\n  }\n  .default .checkbox-input-element {\n    width: 22px;\n    height: 22px;\n  }\n}\n@layer kol-component {\n  .switch .input {\n    position: relative;\n  }\n  .switch input[type=checkbox] {\n    display: inline-block;\n    height: 1.7em;\n    min-width: 3.2em;\n    position: relative;\n    width: 3.2em;\n  }\n  .switch input[type=checkbox]::before {\n    background-color: #000;\n    height: 1.2em;\n    left: calc(0.25em - 2px);\n    top: calc(0.25em - 2px);\n    position: absolute;\n    transition: 0.5s;\n    width: 1.2em;\n  }\n  .switch input[type=checkbox]:checked::before {\n    transform: translateX(1.5em);\n  }\n  .switch input[type=checkbox]:indeterminate::before {\n    transform: translateX(0.75em);\n  }\n  .switch .icon {\n    cursor: pointer;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: 1.2em;\n    height: 1.2em;\n    position: absolute;\n    z-index: 1;\n    top: 50%;\n    left: 4px;\n    transform: translate(0, -50%);\n    transition: 0.5s;\n    color: #000;\n  }\n  .switch.checked .icon {\n    transform: translate(1.5em, -50%);\n  }\n  .switch.indeterminate .icon {\n    transform: translate(0.75em, -50%);\n  }\n}"}},88:(t,e,n)=>{n.d(e,{a:()=>d,c:()=>r,h:()=>l,v:()=>h});var i=n(216),o=n(3409);const a=/[a-zA-Z0-9äöüÄÖÜß]/g,s=/^\d+$/;function l(t,e=1){return function(t){var e;return"string"==typeof t&&(null===(e=t.match(a))||void 0===e?void 0:e.length)||0}(t)>=e}function r(t){return s.test(t)}const c=new Set(["string"]),h=(t,e,n={})=>{(0,o.w)(t,"_label",(t=>"string"==typeof t),c,e,function(t){var e;return Object.assign(Object.assign({},t),{hooks:{afterPatch:(e,n,o,a)=>{var s,c;"function"==typeof(null===(s=t.hooks)||void 0===s?void 0:s.afterPatch)&&(null===(c=t.hooks)||void 0===c||c.afterPatch(e,n,o,a)),"string"==typeof e&&!1===l(e,3)&&!1===r(e)&&(0,i.a)(`The heading or label ("${e}") is not accessible. A label should consist of at least three readable characters.`),"string"==typeof e&&e.length>80&&(0,i.u)("A heading or label should not be longer than 80 characters.")},beforePatch:null===(e=t.hooks)||void 0===e?void 0:e.beforePatch}})}(n))},d=h},5170:(t,e,n)=>{n.d(e,{v:()=>s});var i=n(216),o=n(3409);const a={hooks:{afterPatch:t=>{-1!==t&&0!==t&&(0,i.a)("Don’t Use Tabindex Greater than 0: https://adrianroselli.com/2014/11/dont-use-tabindex-greater-than-0.html")}}},s=(t,e)=>{(0,o.e)(t,"_tabIndex",e,a)}}}]);