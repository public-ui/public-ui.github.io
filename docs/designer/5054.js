/*! For license information please see 5054.js.LICENSE.txt */
"use strict";(self.webpackChunk_public_ui_designer=self.webpackChunk_public_ui_designer||[]).push([[5054],{18272:(t,e,n)=>{n.d(e,{I:()=>a});var i=n(83234);const a=({accessKey:t,label:e})=>{let[n,...a]=e.split(t);return 0===a.length&&(t=t.toUpperCase(),[n,...a]=e.split(t)),0===a.length&&(t=t.toLowerCase(),[n,...a]=e.split(t)),(0,i.h)(i.F,null,n,a.length?(0,i.h)(i.F,null,(0,i.h)("u",null,t),a.join(t)):null)}},634:(t,e,n)=>{n.d(e,{A:()=>s});var i=n(90158),a=n(34082);const o=(0,n(75867).d)();class s{constructor(t,e,n){var i,s;if(this.setFormAssociatedValue=t=>{var e;const n=null===(e=this.formAssociated)||void 0===e?void 0:e.getAttribute("name");null!==n&&""!==n||(0,a.d)(` The form field (${this.name}) must have a name attribute to be form-associated. Please define the _name attribute.`);const i=this.tryToStringifyValue(t);this.syncValue(t,i,this.formAssociated),this.syncValue(t,i,this.syncToOwnInput)},this.component=t,this.host=this.findHostWithShadowRoot(n),this.name=e,o){switch(null===(i=this.host)||void 0===i||i.querySelectorAll("input,select,textarea").forEach((t=>{var e;null===(e=this.host)||void 0===e||e.removeChild(t)})),this.name){case"button":this.formAssociated=document.createElement("button");break;case"select":this.formAssociated=document.createElement("select"),this.formAssociated.setAttribute("multiple","");break;case"textarea":this.formAssociated=document.createElement("textarea");break;default:this.formAssociated=document.createElement("input"),this.formAssociated.setAttribute("type","hidden")}this.formAssociated.setAttribute("aria-hidden","true"),this.formAssociated.setAttribute("data-form-associated",""),this.formAssociated.setAttribute("hidden",""),null===(s=this.host)||void 0===s||s.appendChild(this.formAssociated)}}findHostWithShadowRoot(t){for(;null===(null==t?void 0:t.shadowRoot)&&t!==document.body;)(t=null==t?void 0:t.parentNode).host&&(t=t.host);return t}setAttribute(t,e,n){if(o)try{if("boolean"!=typeof(n="object"==typeof n&&null!==n?JSON.stringify(n):n)&&"number"!=typeof n&&"string"!=typeof n)throw new Error("Invalid value type: "+typeof n);null==e||e.setAttribute(t,`${n}`)}catch(n){null==e||e.removeAttribute(t)}}tryToStringifyValue(t){try{return"object"==typeof t&&null!==t?JSON.stringify(t).toString():null==t?null:t.toString()}catch(t){return(0,a.g)(`The form field raw value is not able to stringify! ${t}`),""}}syncValue(t,e,n){n&&("select"===this.name?(n.querySelectorAll("option").forEach((t=>{n.removeChild(t)})),Array.isArray(t)&&t.forEach((t=>{const e=this.tryToStringifyValue(t);if("string"==typeof e){const t=document.createElement("option");t.setAttribute("value",e),t.setAttribute("selected",""),n.appendChild(t)}}))):"string"==typeof e?(n.setAttribute("value",e),n.value=e):(n.removeAttribute("value"),n.value=""))}validateName(t){((t,e,n)=>{(0,i.d)(t,"_name",e,n)})(this.component,t,{hooks:{afterPatch:()=>{this.setAttribute("name",this.formAssociated,this.component.state._name)}}}),void 0===t&&(0,a.d)("Ein Name am Eingabefeldern oder Schalter ist nicht zwingend erforderlich, kann aber für die Autocomplete-Funktion und für das statische Versenden des Eingabefeldes relevant sein.")}validateSyncValueBySelector(t){if(o&&"string"==typeof t){const e=document.querySelector(t);e&&(this.syncToOwnInput=e)}}componentWillLoad(){this.validateName(this.component._name),this.validateSyncValueBySelector(this.component._syncValueBySelector)}}},83993:(t,e,n)=>{n.d(e,{I:()=>p,g:()=>d,v:()=>c});var i=n(90158),a=n(13502),o=n(72797),s=n(34082),l=n(37699),r=n(67075),h=n(634);const d=t=>{const e="string"==typeof t._error&&t._error.length>0&&!0===t._touched,n="string"==typeof t._hint&&t._hint.length>0,i=[];return!0===e&&i.push(`${t._id}-error`),!0===n&&i.push(`${t._id}-hint`),{hasError:e,hasHint:n,ariaDescribedBy:i}},c=(t,e,n)=>{(0,i.a)(t,"_hideError",e,n)};class u extends h.A{constructor(t,e,n){super(t,e,n),this.component=t}validateAlert(t){(0,i.a)(this.component,"_alert",t)}validateTouched(t){((t,e)=>{(0,i.a)(t,"_touched",e)})(this.component,t)}componentWillLoad(){super.componentWillLoad(),this.validateAlert(this.component._alert),this.validateTouched(this.component._touched)}}class p extends u{constructor(t,e,n){super(t,e,n),this.valueChangeListeners=[],this.onFacade={onBlur:this.onBlur.bind(this),onChange:this.onChange.bind(this),onClick:this.onClick.bind(this),onFocus:this.onFocus.bind(this)},this.component=t}validateAccessKey(t){(0,i.d)(this.component,"_accessKey",t)}validateAdjustHeight(t){((t,e)=>{(0,i.a)(t,"_adjustHeight",e)})(this.component,t)}validateDisabled(t){(0,i.a)(this.component,"_disabled",t),!0===t&&(0,s.e)()}validateError(t){(0,i.d)(this.component,"_error",t)}validateHideLabel(t){(0,a.v)(this.component,t,{hooks:{afterPatch:()=>{this.component.state._hideLabel&&(0,s.a)("Property hide-label for inputs: Only use for exceptions like search inputs that are clearly identifiable by their context.")}}})}validateHint(t){(0,i.d)(this.component,"_hint",t)}validateId(t){(0,i.d)(this.component,"_id",t,{hooks:{afterPatch:()=>{this.setAttribute("id",this.formAssociated,this.component.state._id)}},minLength:1}),""!==t&&void 0!==t||(0,s.d)("Eine eindeutige ID an den Eingabefeldern ist nicht zwingend erforderlich, könnte aber für die E2E-Tests relevant sein.")}validateLabel(t){(0,o.a)(this.component,t)}validateOn(t){"object"==typeof t&&(0,i.s)(this.component,"_on",t)}validateSmartButton(t){(0,i.o)(t,(()=>{try{t=(0,i.p)(t)}catch(t){}(0,i.s)(this.component,"_smartButton",t)}))}validateTabIndex(t){(0,r.v)(this.component,t)}componentWillLoad(){super.componentWillLoad(),this.validateAccessKey(this.component._accessKey),this.validateAdjustHeight(this.component._adjustHeight),this.validateError(this.component._error),this.validateDisabled(this.component._disabled),this.validateHideLabel(this.component._hideLabel),this.validateHint(this.component._hint),this.validateId(this.component._id),this.validateLabel(this.component._label),this.validateSmartButton(this.component._smartButton),this.validateOn(this.component._on),this.validateTabIndex(this.component._tabIndex)}onBlur(t){var e;this.component._alert=!0,this.component._touched=!0,(0,l.s)(t),(0,l.t)("blur",this.host),"function"==typeof(null===(e=this.component._on)||void 0===e?void 0:e.onBlur)&&this.component._on.onBlur(t)}onChange(t){var e;const n=t.target.value;(0,l.s)(t),(0,l.t)("change",this.host,n),this.setFormAssociatedValue(n),"function"==typeof(null===(e=this.component._on)||void 0===e?void 0:e.onChange)&&this.component._on.onChange(t,n),this.valueChangeListeners.forEach((t=>t(n)))}onClick(t){var e;(0,l.s)(t),(0,l.t)("click",this.host),"function"==typeof(null===(e=this.component._on)||void 0===e?void 0:e.onClick)&&this.component._on.onClick(t)}onFocus(t){var e;this.component._alert=!0,(0,l.s)(t),(0,l.t)("focus",this.host),"function"==typeof(null===(e=this.component._on)||void 0===e?void 0:e.onFocus)&&this.component._on.onFocus(t)}setValue(t,e){var n;this.setFormAssociatedValue(e),"function"==typeof(null===(n=this.component._on)||void 0===n?void 0:n.onChange)&&this.component._on.onChange(t,e)}addValueChangeListener(t){this.valueChangeListeners.push(t)}}},37699:(t,e,n)=>{function i(t){t.stopImmediatePropagation(),t.stopPropagation()}function a(t,e,n){e&&function(t,e,n){t.dispatchEvent(function(t,e){return new CustomEvent(`kol-${t}`,{bubbles:!0,cancelable:!0,composed:!0,detail:e})}(e,n))}(e,t,n)}n.d(e,{s:()=>i,t:()=>a})},13502:(t,e,n)=>{n.d(e,{v:()=>a});var i=n(90158);const a=(t,e,n={})=>{(0,i.a)(t,"_hideLabel",e,n)}},75054:(t,e,n)=>{n.r(e),n.d(e,{kol_textarea:()=>p});var i=n(83234),a=n(75867),o=n(90158),s=n(74817),l=n(83993),r=n(18272),h=n(97066),d=n(34082);const c=["both","horizontal","vertical","none"];class u extends l.I{constructor(t,e,n){super(t,e,n),this.afterSyncCharCounter=()=>{"string"==typeof this.component._value&&this.component._value.length>0&&(this.component.state._currentLength=this.component._value.length)},this.component=t}validateHasCounter(t){(0,o.a)(this.component,"_hasCounter",t,{hooks:{afterPatch:this.afterSyncCharCounter}})}validateHideError(t){(0,l.v)(this.component,t,{hooks:{afterPatch:()=>{this.component.state._hideError&&(0,d.a)("Property hide-error for inputs: Only use when the error message is shown outside of the input component.")}}})}validateMaxLength(t){(0,o.e)(this.component,"_maxLength",t,{hooks:{afterPatch:this.afterSyncCharCounter},min:0})}validatePlaceholder(t){(0,o.d)(this.component,"_placeholder",t)}validateReadOnly(t){(0,o.a)(this.component,"_readOnly",t)}validateResize(t){(0,o.w)(this.component,"_resize",(t=>"string"==typeof t&&c.includes(t)),new Set(`String {${c.join(", ")}`),t)}validateRequired(t){(0,o.a)(this.component,"_required",t)}validateRows(t){(0,h.v)(this.component,t)}validateValue(t){(0,o.d)(this.component,"_value",t,{hooks:{afterPatch:this.afterSyncCharCounter}}),this.setFormAssociatedValue(this.component._value)}componentWillLoad(){super.componentWillLoad(),this.validateHasCounter(this.component._hasCounter),this.validateHideError(this.component._hideError),this.validateMaxLength(this.component._maxLength),this.validatePlaceholder(this.component._placeholder),this.validateReadOnly(this.component._readOnly),this.validateResize(this.component._resize),this.validateRequired(this.component._required),this.validateRows(this.component._rows),this.validateValue(this.component._value)}}const p=class{render(){const{ariaDescribedBy:t}=(0,l.g)(this.state),e=(0,s.s)(this.state._label);return(0,i.h)(i.H,{class:{"has-value":this.state._hasValue}},(0,i.h)("kol-input",{class:{textarea:!0,"hide-label":!!this.state._hideLabel,"has-counter":!!this.state._hasCounter},_accessKey:this.state._accessKey,_alert:this.state._alert,_currentLength:this.state._currentLength,_disabled:this.state._disabled,_error:this.state._error,_hideError:this.state._hideError,_hasCounter:this.state._hasCounter,_hideLabel:this.state._hideLabel,_hint:this.state._hint,_id:this.state._id,_label:this.state._label,_maxLength:this.state._maxLength,_readOnly:this.state._readOnly,_required:this.state._required,_tooltipAlign:this._tooltipAlign,_touched:this.state._touched,onClick:()=>{var t;return null===(t=this.ref)||void 0===t?void 0:t.focus()}},(0,i.h)("span",{slot:"label"},e?(0,i.h)("slot",{name:"expert"}):"string"==typeof this.state._accessKey?(0,i.h)(i.F,null,(0,i.h)(r.I,{accessKey:this.state._accessKey,label:this.state._label})," ",(0,i.h)("span",{class:"access-key-hint","aria-hidden":"true"},this.state._accessKey)):(0,i.h)("span",null,this.state._label)),(0,i.h)("div",{slot:"input"},(0,i.h)("textarea",Object.assign({ref:this.catchRef,title:"",accessKey:this.state._accessKey,"aria-describedby":t.length>0?t.join(" "):void 0,"aria-label":this.state._hideLabel&&"string"==typeof this.state._label?this.state._label:void 0,autoCapitalize:"off",autoCorrect:"off",disabled:this.state._disabled,id:this.state._id,maxlength:this.state._maxLength,name:this.state._name,readOnly:this.state._readOnly,required:this.state._required,rows:this.state._rows,placeholder:this.state._placeholder,spellcheck:"false"},this.controller.onFacade,{onKeyUp:this.onKeyUp,style:{resize:this.state._resize},value:this.state._value})))))}constructor(t){(0,i.r)(this,t),this.catchRef=t=>{this.ref=t,(0,s.a)(this.host,this.ref)},this.onKeyUp=()=>{this.ref instanceof HTMLTextAreaElement&&((0,o.s)(this,"_currentLength",this.ref.value.length),this.state._adjustHeight&&(this._rows=(t=>{t.style.overflow="hidden";const e=t.rows,n=t.clientHeight/e;t.rows=1;const i=Math.round(t.scrollHeight/n);return t.rows=e,i})(this.ref)))},this._accessKey=void 0,this._adjustHeight=!1,this._alert=!0,this._disabled=!1,this._error=void 0,this._hasCounter=!1,this._hideError=!1,this._hideLabel=!1,this._hint="",this._id=void 0,this._label=void 0,this._maxLength=void 0,this._name=void 0,this._on=void 0,this._placeholder=void 0,this._readOnly=!1,this._resize="vertical",this._required=!1,this._rows=void 0,this._syncValueBySelector=void 0,this._tabIndex=void 0,this._tooltipAlign="top",this._touched=!1,this._value=void 0,this.state={_adjustHeight:!1,_currentLength:0,_hasValue:!1,_hideError:!1,_id:`id-${(0,a.n)()}`,_label:"",_resize:"vertical"},this.controller=new u(this,"textarea",this.host)}validateAccessKey(t){this.controller.validateAccessKey(t)}validateAdjustHeight(t){this.controller.validateAdjustHeight(t)}validateAlert(t){this.controller.validateAlert(t)}validateDisabled(t){this.controller.validateDisabled(t)}validateError(t){this.controller.validateError(t)}validateHasCounter(t){this.controller.validateHasCounter(t)}validateHideError(t){this.controller.validateHideError(t)}validateHideLabel(t){this.controller.validateHideLabel(t)}validateHint(t){this.controller.validateHint(t)}validateId(t){this.controller.validateId(t)}validateLabel(t){this.controller.validateLabel(t)}validateMaxLength(t){this.controller.validateMaxLength(t)}validateName(t){this.controller.validateName(t)}validateOn(t){this.controller.validateOn(t)}validatePlaceholder(t){this.controller.validatePlaceholder(t)}validateReadOnly(t){this.controller.validateReadOnly(t)}validateResize(t){this.controller.validateResize(t)}validateRequired(t){this.controller.validateRequired(t)}validateRows(t){this.controller.validateRows(t)}validateSyncValueBySelector(t){this.controller.validateSyncValueBySelector(t)}validateTabIndex(t){this.controller.validateTabIndex(t)}validateTouched(t){this.controller.validateTouched(t)}validateValue(t){this.controller.validateValue(t)}componentWillLoad(){this._alert=!0===this._alert,this._touched=!0===this._touched,this.controller.componentWillLoad(),this.state._hasValue=!!this.state._value,this.controller.addValueChangeListener((t=>this.state._hasValue=!!t))}get host(){return(0,i.g)(this)}static get watchers(){return{_accessKey:["validateAccessKey"],_adjustHeight:["validateAdjustHeight"],_alert:["validateAlert"],_disabled:["validateDisabled"],_error:["validateError"],_hasCounter:["validateHasCounter"],_hideError:["validateHideError"],_hideLabel:["validateHideLabel"],_hint:["validateHint"],_id:["validateId"],_label:["validateLabel"],_maxLength:["validateMaxLength"],_name:["validateName"],_on:["validateOn"],_placeholder:["validatePlaceholder"],_readOnly:["validateReadOnly"],_resize:["validateResize"],_required:["validateRequired"],_rows:["validateRows"],_syncValueBySelector:["validateSyncValueBySelector"],_tabIndex:["validateTabIndex"],_touched:["validateTouched"],_value:["validateValue"]}}};p.style={default:"/*\n * This file contains all rules for accessibility.\n */\n@layer kol-global {\n\t:host {\n\t\t/*\n\t\t * Minimum size of interactive elements.\n\t\t */\n\t\t--a11y-min-size: 44px;\n\t\t/*\n\t\t * Verdana is an accessible font that can be used without requiring additional loading time.\n\t\t */\n\t\tfont-family: Verdana;\n\t}\n\n\t* {\n\t\t/*\n\t\t * This rule enables the word dividing for all texts. That is important for high zoom levels.\n\t\t */\n\t\thyphens: auto;\n\t\t/*\n\t\t * Letter spacing is required for all texts.\n\t\t */\n\t\tletter-spacing: inherit;\n\t\t/*\n\t\t * This rule enables the word dividing for all texts. That is important for high zoom levels.\n\t\t */\n\t\tword-break: break-word;\n\t\t/*\n\t\t * Word spacing is required for all texts.\n\t\t */\n\t\tword-spacing: inherit;\n\t}\n\n\t/*\n\t * All interactive elements should have a minimum size of 44px.\n\t */\n\t/* input:not([type='checkbox'], [type='radio'], [type='range']), */\n\t/* option, */\n\t/* select, */\n\t/* textarea, */\n\t[role='button'],\n\tbutton:not([role='link']),\n\tkol-input .input {\n\t\tmin-height: var(--a11y-min-size);\n\t\tmin-width: var(--a11y-min-size);\n\t}\n\n\t/*\n\t * Some interactive elements should not inherit the font-family and font-size.\n\t */\n\ta,\n\tbutton,\n\th1,\n\th2,\n\th3,\n\th4,\n\th5,\n\th6,\n\tinput,\n\toption,\n\tselect,\n\ttextarea {\n\t\t/*\n\t\t * All elements should inherit the font family from his parent element.\n\t\t */\n\t\tfont-family: inherit;\n\t\t/*\n\t\t * All elements should inherit the font size from his parent element.\n\t\t */\n\t\tfont-size: inherit;\n\t}\n}\n\n@layer kol-global {\n\t/*\n\t * Dieses CSS stellt sicher, dass der Standard-Style\n\t * von A und Button resettet werden.\n\t */\n\t:is(a, button) {\n\t\tbackground-color: transparent;\n\t\tborder: none;\n\t\tmargin: 0;\n\t\tpadding: 0;\n\t\twidth: 100%; /* 100% needed for custom width from outside */\n\t}\n}\n\n@layer kol-global {\n\t:host {\n\t\t/*\n\t\t * The max-width is needed to prevent the table from overflowing the\n\t\t * parent node, if the table is wider than the parent node.\n\t\t */\n\t\tmax-width: 100%;\n\t}\n\n\t* {\n\t\t/*\n\t\t * We prefer to box-sizing: border-box for all elements.\n\t\t */\n\t\tbox-sizing: border-box;\n\t}\n\n\t/* KolSpan is a layout component with icons in all directions and a label text in the middle. */\n\tkol-span-wc {\n\t\tdisplay: grid;\n\t\tplace-items: center;\n\t}\n\n\t/* The sub span in KolSpan is the horizontal span with icon left and right and the label text in the middle. */\n\tkol-span-wc > span {\n\t\tdisplay: flex;\n\t\tplace-items: center;\n\t}\n\n\ta,\n\tbutton {\n\t\tcursor: pointer;\n\t}\n\n\t/* This is the text label. */\n\t.icon-only > kol-span-wc > span > span {\n\t\tdisplay: none;\n\t}\n}\n\n@layer kol-component {\n\t.required label > span::after,\n\t.required legend > span::after {\n\t\tcontent: '*';\n\t}\n}\n\n@layer kol-component {\n\t:host {\n\t\tdisplay: block;\n\t}\n}\n\n@layer kol-component {\n\tinput,\n\ttextarea {\n\t\tcursor: text;\n\t}\n\n\tinput[type='checkbox'],\n\tinput[type='color'],\n\tinput[type='file'],\n\tinput[type='radio'],\n\tinput[type='range'],\n\tlabel,\n\toption,\n\tselect {\n\t\tcursor: pointer;\n\t}\n\n\t/* input[type='checkbox'], */\n\t/* input[type='radio'], */\n\t/* input[type='range'], */\n\tinput[type='color'],\n\tinput[type='date'],\n\tinput[type='datetime-local'],\n\tinput[type='email'],\n\tinput[type='file'],\n\tinput[type='month'],\n\tinput[type='number'],\n\tinput[type='password'],\n\tinput[type='search'],\n\tinput[type='tel'],\n\tinput[type='text'],\n\tinput[type='time'],\n\tinput[type='url'],\n\tinput[type='week'],\n\tselect,\n\tselect[multiple] option,\n\ttextarea {\n\t\tfont-size: 1rem;\n\t\twidth: 100%;\n\t}\n\n\t/* needed hack for vertical alignment */\n\tinput[type='file'] {\n\t\tpadding: calc((var(--a11y-min-size) - 1rem) / 10) 0.5em;\n\t}\n\n\t/* needed hack for vertical alignment */\n\tselect[multiple] option {\n\t\tpadding: calc((var(--a11y-min-size) - 1rem) / 2) 0.5em;\n\t}\n\n\tkol-input.disabled :is(button, input, label, option, select, textarea) {\n\t\tcursor: not-allowed;\n\t\topacity: 0.5;\n\t}\n}\n\n@layer kol-component {\n\tkol-input {\n\t\tdisplay: grid;\n\t}\n\n\tkol-input .input-slot {\n\t\tflex-grow: 1;\n\t}\n\n\tinput:not([type='checkbox'], [type='radio']),\n\tselect:not([multiple], [size]) {\n\t\theight: 2.75em;\n\t}\n\n\tinput:focus,\n\toption:focus,\n\tselect:focus,\n\ttextarea:focus {\n\t\toutline: 0;\n\t}\n\n\t.input {\n\t\tdisplay: flex;\n\t\talign-items: center;\n\t}\n\n\t.input > kol-icon {\n\t\tdisplay: grid;\n\t\theight: var(--a11y-min-size);\n\t\tplace-items: center;\n\t}\n\n\tkol-input.required .input-tooltip .span-label::after {\n\t\tcontent: '*';\n\t}\n}\n\n@layer kol-component {\n\t.error.hidden {\n\t\tdisplay: none;\n\t}\n}\n"}},72797:(t,e,n)=>{n.d(e,{a:()=>c,c:()=>r,h:()=>l,v:()=>d});var i=n(34082),a=n(90158);const o=/[a-zA-Z0-9äöüÄÖÜß]/g,s=/^\d+$/;function l(t,e=1){return function(t){var e;return"string"==typeof t&&(null===(e=t.match(o))||void 0===e?void 0:e.length)||0}(t)>=e}function r(t){return s.test(t)}const h=new Set(["string"]),d=(t,e,n={})=>{(0,a.w)(t,"_label",(t=>"string"==typeof t),h,e,function(t){var e;return{hooks:{afterPatch:(e,n,a,o)=>{var s,h;"function"==typeof(null===(s=t.hooks)||void 0===s?void 0:s.afterPatch)&&(null===(h=t.hooks)||void 0===h||h.afterPatch(e,n,a,o)),"string"==typeof e&&!1===l(e,3)&&!1===r(e)&&(0,i.a)(`The heading or label ("${e}") is not accessible. A label should consist of at least three readable characters.`),"string"==typeof e&&e.length>80&&(0,i.u)("A heading or label should not be longer than 80 characters.")},beforePatch:null===(e=t.hooks)||void 0===e?void 0:e.beforePatch}}}(n))},c=d},97066:(t,e,n)=>{n.d(e,{v:()=>a});var i=n(90158);const a=(t,e)=>{(0,i.e)(t,"_rows",e,{min:1})}},67075:(t,e,n)=>{n.d(e,{v:()=>s});var i=n(34082),a=n(90158);const o={hooks:{afterPatch:t=>{-1!==t&&0!==t&&(0,i.a)("Don’t Use Tabindex Greater than 0: https://adrianroselli.com/2014/11/dont-use-tabindex-greater-than-0.html")}}},s=(t,e)=>{(0,a.e)(t,"_tabIndex",e,o)}}}]);