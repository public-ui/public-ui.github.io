/*! For license information please see 6682.js.LICENSE.txt */
"use strict";(self.webpackChunk_public_ui_designer=self.webpackChunk_public_ui_designer||[]).push([[6682],{54185:(t,e,n)=>{n.d(e,{I:()=>o});var i=n(25262);const o=({accessKey:t,label:e})=>{let[n,...o]=e.split(t);return 0===o.length&&(t=t.toUpperCase(),[n,...o]=e.split(t)),0===o.length&&(t=t.toLowerCase(),[n,...o]=e.split(t)),(0,i.h)(i.F,null,n,o.length?(0,i.h)(i.F,null,(0,i.h)("u",null,t),o.join(t)):null)}},45193:(t,e,n)=>{n.d(e,{A:()=>o});var i=n(24818);class o{constructor(t,e,n){this.setFormAssociatedValue=t=>{var e;const n=null===(e=this.formAssociated)||void 0===e?void 0:e.getAttribute("name");null!==n&&""!==n||(0,i.d)(` The form field (${this.name}) must have a name attribute to be form-associated. Please define the _name attribute.`);const o=this.tryToStringifyValue(t);this.syncValue(t,o,this.formAssociated),this.syncValue(t,o,this.syncToOwnInput)},this.component=t,this.host=this.findHostWithShadowRoot(n),this.name=e}findHostWithShadowRoot(t){for(;null===(null==t?void 0:t.shadowRoot)&&t!==document.body;)(t=null==t?void 0:t.parentNode).host&&(t=t.host);return t}setAttribute(t,e,n){}tryToStringifyValue(t){try{return"object"==typeof t&&null!==t?JSON.stringify(t).toString():null==t?null:t.toString()}catch(t){return(0,i.R)(`The form field raw value is not able to stringify! ${t}`),""}}syncValue(t,e,n){n&&("select"===this.name?(n.querySelectorAll("option").forEach((t=>{n.removeChild(t)})),Array.isArray(t)&&t.forEach((t=>{const e=this.tryToStringifyValue(t);if("string"==typeof e){const t=document.createElement("option");t.setAttribute("value",e),t.setAttribute("selected",""),n.appendChild(t)}}))):"string"==typeof e?(n.setAttribute("value",e),n.value=e):(n.removeAttribute("value"),n.value=""))}validateName(t){(0,i.T)(this.component,t,{hooks:{afterPatch:()=>{this.setAttribute("name",this.formAssociated,this.component.state._name)}}}),void 0===t&&(0,i.d)("Ein Name am Eingabefeldern oder Schalter ist nicht zwingend erforderlich, kann aber für die Autocomplete-Funktion und für das statische Versenden des Eingabefeldes relevant sein.")}validateSyncValueBySelector(t){}componentWillLoad(){this.validateName(this.component._name),this.validateSyncValueBySelector(this.component._syncValueBySelector)}}},26691:(t,e,n)=>{n.d(e,{I:()=>r,g:()=>s});var i=n(24818),o=n(43985),a=n(45193);const s=t=>{const e="string"==typeof t._error&&t._error.length>0&&!0===t._touched,n="string"==typeof t._hint&&t._hint.length>0,i=[];return!0===e&&i.push(`${t._id}-error`),!0===n&&i.push(`${t._id}-hint`),{hasError:e,hasHint:n,ariaDescribedBy:i}};class l extends a.A{constructor(t,e,n){super(t,e,n),this.component=t}validateAlert(t){(0,i.n)(this.component,"_alert",t)}validateTouched(t){(0,i.D)(this.component,t)}componentWillLoad(){super.componentWillLoad(),this.validateAlert(this.component._alert),this.validateTouched(this.component._touched)}}class r extends l{constructor(t,e,n){super(t,e,n),this.valueChangeListeners=[],this.onFacade={onBlur:this.onBlur.bind(this),onChange:this.onChange.bind(this),onClick:this.onClick.bind(this),onFocus:this.onFocus.bind(this)},this.component=t}validateAccessKey(t){(0,i.q)(this.component,"_accessKey",t)}validateAdjustHeight(t){(0,i.E)(this.component,t)}validateDisabled(t){(0,i.n)(this.component,"_disabled",t),!0===t&&(0,i.F)()}validateError(t){(0,i.q)(this.component,"_error",t)}validateHideError(t){(0,i.G)(this.component,t,{hooks:{afterPatch:()=>{this.component.state._hideError&&(0,i.I)("Property hide-error for inputs: Only use when the error message is shown outside of the input component.")}}})}validateHideLabel(t){(0,i.H)(this.component,t,{hooks:{afterPatch:()=>{this.component.state._hideLabel&&(0,i.I)("Property hide-label for inputs: Only use for exceptions like search inputs that are clearly identifiable by their context.")}}})}validateHint(t){(0,i.q)(this.component,"_hint",t)}validateId(t){(0,i.q)(this.component,"_id",t,{hooks:{afterPatch:()=>{this.setAttribute("id",this.formAssociated,this.component.state._id)}},minLength:1}),""!==t&&void 0!==t||(0,i.d)("Eine eindeutige ID an den Eingabefeldern ist nicht zwingend erforderlich, könnte aber für die E2E-Tests relevant sein.")}validateLabel(t){(0,i.J)(this.component,t,{required:!0})}validateOn(t){"object"==typeof t&&(0,i.s)(this.component,"_on",t)}validateSmartButton(t){(0,i.o)(t,(()=>{try{t=(0,i.j)(t)}catch(t){}(0,i.s)(this.component,"_smartButton",t)}))}validateTabIndex(t){(0,i.L)(this.component,t)}componentWillLoad(){super.componentWillLoad(),this.validateAccessKey(this.component._accessKey),this.validateAdjustHeight(this.component._adjustHeight),this.validateError(this.component._error),this.validateDisabled(this.component._disabled),this.validateHideError(this.component._hideError),this.validateHideLabel(this.component._hideLabel),this.validateHint(this.component._hint),this.validateId(this.component._id),this.validateLabel(this.component._label),this.validateSmartButton(this.component._smartButton),this.validateOn(this.component._on),this.validateTabIndex(this.component._tabIndex)}onBlur(t){var e;this.component._alert=!0,this.component._touched=!0,(0,o.s)(t),(0,o.t)("blur",this.host),"function"==typeof(null===(e=this.component._on)||void 0===e?void 0:e.onBlur)&&this.component._on.onBlur(t)}onChange(t){var e;const n=t.target.value;(0,o.t)("change",this.host,n),this.setFormAssociatedValue(n),"function"==typeof(null===(e=this.component._on)||void 0===e?void 0:e.onChange)&&this.component._on.onChange(t,n),this.valueChangeListeners.forEach((t=>t(n)))}onClick(t){var e;(0,o.s)(t),(0,o.t)("click",this.host),"function"==typeof(null===(e=this.component._on)||void 0===e?void 0:e.onClick)&&this.component._on.onClick(t)}onFocus(t){var e;this.component._alert=!0,(0,o.s)(t),(0,o.t)("focus",this.host),"function"==typeof(null===(e=this.component._on)||void 0===e?void 0:e.onFocus)&&this.component._on.onFocus(t)}addValueChangeListener(t){this.valueChangeListeners.push(t)}}},62515:(t,e,n)=>{n.d(e,{a:()=>s,p:()=>l});var i=n(24818),o=n(74421);const a=t=>{for((0,o.a)()&&((0,i.d)("↓ Search form element start."),console.log(t));t instanceof HTMLElement&&"FORM"!==t.tagName&&"KOL-FORM"!==t.tagName;){try{t=t.parentElement instanceof HTMLElement?t.parentElement:t.parentNode instanceof ShadowRoot?t.parentNode.host:null}catch(t){}(0,o.a)()&&(console.log(t),(0,i.d)("↑ Search form element finished."))}return t},s=(t={})=>{var e,n;const o=a(t.form);if(o instanceof HTMLElement){const t=new Event("reset",{bubbles:!0,cancelable:!0});if("FORM"===o.tagName)(0,i.$)(t,o),o.dispatchEvent(t);else if("KOL-FORM"===o.tagName){(0,i.$)(t,i.K.querySelector("form",o));const a=o;"function"==typeof(null===(e=a._on)||void 0===e?void 0:e.onReset)&&(null===(n=a._on)||void 0===n||n.onReset(t))}}},l=(t={})=>{var e,n;const o=a(t.form);if(o instanceof HTMLElement){const t=new SubmitEvent("submit",{bubbles:!0,cancelable:!0,submitter:o});if("FORM"===o.tagName)(0,i.$)(t,o),o.dispatchEvent(t),o.submit();else if("KOL-FORM"===o.tagName){(0,i.$)(t,i.K.querySelector("form",o));const a=o;"function"==typeof(null===(e=a._on)||void 0===e?void 0:e.onSubmit)&&(null===(n=a._on)||void 0===n||n.onSubmit(t))}}}},48873:(t,e,n)=>{n.d(e,{I:()=>s});var i=n(24818),o=n(26691);const a=(t,e)=>{const n=t;"object"==typeof n&&null!==n&&((0,i.z)(n.right,1)&&(n.right={icon:n.right}),(0,i.z)(n.left,1)&&(n.left={icon:n.left}),e.set("_icons",n))};class s extends o.I{constructor(t,e,n){super(t,e,n),this.component=t}validateIcon(t){this.validateIcons(t)}validateIcons(t){(0,i.o)(t,(()=>{try{t=(0,i.j)(t)}catch(t){}(0,i.w)(this.component,"_icons",(t=>"object"==typeof t&&null!==t&&((0,i.z)(t.left,1)||(0,i.W)(t.left)||(0,i.z)(t.right,1)||(0,i.W)(t.right))),new Set(["KoliBriHorizontalIcon"]),t,{hooks:{beforePatch:a},required:!0})}))}componentWillLoad(){super.componentWillLoad(),this.validateIcons(this.component._icons||this.component._icon)}}},43985:(t,e,n)=>{function i(t){t.stopImmediatePropagation(),t.stopPropagation()}function o(t,e,n){e&&function(t,e,n){t.dispatchEvent(function(t,e){return new CustomEvent(`kol-${t}`,{bubbles:!0,cancelable:!0,composed:!0,detail:e})}(e,n))}(e,t,n)}n.d(e,{s:()=>i,t:()=>o})},46682:(t,e,n)=>{n.r(e),n.d(e,{kol_input_number:()=>c});var i=n(25262),o=n(24818),a=n(74421),s=n(62515),l=n(26691),r=n(54185),h=n(48873);class d extends h.I{constructor(t,e,n){super(t,e,n),this.numberOrIsoDateRegex=/^\d+$|(^\d{4}-([0]\d|1[0-2])-([0-2]\d|3[01])([T ][0-2]\d:[0-5]\d:[0-5]\d(?:\.\d+)?([+-][0-2]\d:[0-5]\d|Z)?)?$)|(^[0-2]\d:[0-5]\d(:[0-5]\d)?$)/,this.parseToString=t=>"string"==typeof t?t:"number"==typeof t?`${t}`:"object"==typeof t&&t instanceof Date?t.toISOString():"",this.validateIso8601=(t,e,n)=>{const i=parseFloat(e),a=i==e;return(0,o.w)(this.component,t,(t=>void 0===t||""===t||a&&"number"==typeof i||this.numberOrIsoDateRegex.test(t)),new Set(["number","Date","string{ISO-8601}"]),this.parseToString(e),{hooks:{afterPatch:t=>{"string"==typeof t&&n&&n(t)}}})},this.component=t}validateAutoComplete(t){(0,o.w)(this.component,"_autoComplete",(t=>"string"==typeof t&&("on"===t||"off"===t)),new Set(["on | off"]),t)}validateSuggestions(t){(0,o.V)(this.component,t)}onChange(t){super.onChange(t),!!t.target.value!=!!this.component._value&&(this.component._value=t.target.value)}validateMax(t){this.validateIso8601("_max",t)}validateMin(t){this.validateIso8601("_min",t)}validatePlaceholder(t){(0,o.q)(this.component,"_placeholder",t)}validateReadOnly(t){(0,o.n)(this.component,"_readOnly",t)}validateRequired(t){(0,o.n)(this.component,"_required",t)}validateStep(t){(0,o.Y)(this.component,"_step",t)}validateValue(t){this.validateValueEx(t)}validateValueEx(t,e){this.validateIso8601("_value",t,e),this.setFormAssociatedValue(this.component.state._value)}componentWillLoad(){super.componentWillLoad(),this.validateAutoComplete(this.component._autoComplete),this.validateMax(this.component._max),this.validateMin(this.component._min),this.validateSuggestions(this.component._suggestions),this.validatePlaceholder(this.component._placeholder),this.validateReadOnly(this.component._readOnly),this.validateRequired(this.component._required),this.validateStep(this.component._step),this.validateValue(this.component._value)}}const c=class{getValue(){return t=this,null,e=function*(){var t;return null===(t=this.ref)||void 0===t?void 0:t.value},new Promise(((n,i)=>{var o=t=>{try{s(e.next(t))}catch(t){i(t)}},a=t=>{try{s(e.throw(t))}catch(t){i(t)}},s=t=>t.done?n(t.value):Promise.resolve(t.value).then(o,a);s((e=e.apply(t,null)).next())}));var t,e}render(){const{ariaDescribedBy:t}=(0,l.g)(this.state),e=Array.isArray(this.state._suggestions)&&this.state._suggestions.length>0,n=(0,o.C)(this.state._label);return(0,i.h)(i.H,{class:{"has-value":this.state._hasValue}},(0,i.h)("kol-input",{class:{number:!0,"hide-label":!!this.state._hideLabel},_accessKey:this.state._accessKey,_disabled:this.state._disabled,_error:this.state._error,_hideError:this.state._hideError,_hideLabel:this.state._hideLabel,_hint:this.state._hint,_icons:this.state._icons,_id:this.state._id,_label:this.state._label,_suggestions:this.state._suggestions,_readOnly:this.state._readOnly,_required:this.state._required,_smartButton:this.state._smartButton,_tooltipAlign:this._tooltipAlign,_touched:this.state._touched},(0,i.h)("span",{slot:"label"},n?(0,i.h)("slot",{name:"expert"}):"string"==typeof this.state._accessKey?(0,i.h)(i.F,null,(0,i.h)(r.I,{accessKey:this.state._accessKey,label:this.state._label})," ",(0,i.h)("span",{class:"access-key-hint","aria-hidden":"true"},this.state._accessKey)):(0,i.h)("span",null,this.state._label)),(0,i.h)("div",{slot:"input"},(0,i.h)("input",Object.assign({ref:this.catchRef,title:"",accessKey:this.state._accessKey,"aria-describedby":t.length>0?t.join(" "):void 0,"aria-label":this.state._hideLabel&&"string"==typeof this.state._label?this.state._label:void 0,autoCapitalize:"off",autoComplete:this.state._autoComplete,autoCorrect:"off",disabled:this.state._disabled,id:this.state._id,list:e?`${this.state._id}-list`:void 0,max:this.state._max,min:this.state._min,name:this.state._name,readOnly:this.state._readOnly,required:this.state._required,placeholder:this.state._placeholder,step:this.state._step,spellcheck:"false",type:"number",value:this.state._value},this.controller.onFacade,{onKeyUp:this.onKeyUp})))))}constructor(t){(0,i.r)(this,t),this.catchRef=t=>{this.ref=t,(0,o.b)(this.host,this.ref)},this.onKeyUp=t=>{"Enter"===t.code?(0,s.p)({form:this.host,ref:this.ref}):this.controller.onFacade.onChange(t)},this._accessKey=void 0,this._alert=!0,this._autoComplete=void 0,this._disabled=!1,this._error=void 0,this._hideError=!1,this._hideLabel=!1,this._hint="",this._icons=void 0,this._id=void 0,this._label=void 0,this._max=void 0,this._min=void 0,this._name=void 0,this._on=void 0,this._placeholder=void 0,this._readOnly=!1,this._required=!1,this._smartButton=void 0,this._suggestions=void 0,this._step=void 0,this._syncValueBySelector=void 0,this._tabIndex=void 0,this._tooltipAlign="top",this._touched=!1,this._value=void 0,this.state={_autoComplete:"off",_hasValue:!1,_hideError:!1,_id:`id-${(0,a.n)()}`,_label:"",_suggestions:[]},this.controller=new d(this,"input-number",this.host)}validateAccessKey(t){this.controller.validateAccessKey(t)}validateAlert(t){this.controller.validateAlert(t)}validateAutoComplete(t){this.controller.validateAutoComplete(t)}validateDisabled(t){this.controller.validateDisabled(t)}validateError(t){this.controller.validateError(t)}validateHideError(t){this.controller.validateHideError(t)}validateHideLabel(t){this.controller.validateHideLabel(t)}validateHint(t){this.controller.validateHint(t)}validateIcons(t){this.controller.validateIcons(t)}validateId(t){this.controller.validateId(t)}validateLabel(t){this.controller.validateLabel(t)}validateMax(t){this.controller.validateMax(t)}validateMin(t){this.controller.validateMin(t)}validateName(t){this.controller.validateName(t)}validateOn(t){this.controller.validateOn(t)}validatePlaceholder(t){this.controller.validatePlaceholder(t)}validateReadOnly(t){this.controller.validateReadOnly(t)}validateRequired(t){this.controller.validateRequired(t)}validateSmartButton(t){this.controller.validateSmartButton(t)}validateSuggestions(t){this.controller.validateSuggestions(t)}validateStep(t){this.controller.validateStep(t)}validateSyncValueBySelector(t){this.controller.validateSyncValueBySelector(t)}validateTabIndex(t){this.controller.validateTabIndex(t)}validateTouched(t){this.controller.validateTouched(t)}validateValue(t){this.controller.validateValueEx(t,(t=>{""===t&&this.ref&&(this.ref.value="")}))}componentWillLoad(){this._alert=!0===this._alert,this._touched=!0===this._touched,this.controller.componentWillLoad(),this.state._hasValue=!!this.state._value,this.controller.addValueChangeListener((t=>this.state._hasValue=!!t))}get host(){return(0,i.g)(this)}static get watchers(){return{_accessKey:["validateAccessKey"],_alert:["validateAlert"],_autoComplete:["validateAutoComplete"],_disabled:["validateDisabled"],_error:["validateError"],_hideError:["validateHideError"],_hideLabel:["validateHideLabel"],_hint:["validateHint"],_icons:["validateIcons"],_id:["validateId"],_label:["validateLabel"],_max:["validateMax"],_min:["validateMin"],_name:["validateName"],_on:["validateOn"],_placeholder:["validatePlaceholder"],_readOnly:["validateReadOnly"],_required:["validateRequired"],_smartButton:["validateSmartButton"],_suggestions:["validateSuggestions"],_step:["validateStep"],_syncValueBySelector:["validateSyncValueBySelector"],_tabIndex:["validateTabIndex"],_touched:["validateTouched"],_value:["validateValue"]}}};c.style={default:"/*\n * This file contains all rules for accessibility.\n */\n@layer kol-global {\n\t:host {\n\t\t/*\n\t\t * Minimum size of interactive elements.\n\t\t */\n\t\t--a11y-min-size: 44px;\n\t\t/*\n\t\t * No element should be used without a background and font color whose contrast ratio has\n\t\t * not been checked. By initially setting the background color to white and the font color\n\t\t * to black, the contrast ratio is ensured and explicit adjustment is forced.\n\t\t */\n\t\tbackground-color: white;\n\t\tcolor: black;\n\t\t/*\n\t\t * Verdana is an accessible font that can be used without requiring additional loading time.\n\t\t */\n\t\tfont-family: Verdana;\n\t}\n\n\t* {\n\t\t/*\n\t\t * This rule enables the word dividing for all texts. That is important for high zoom levels.\n\t\t */\n\t\thyphens: auto;\n\t\t/*\n\t\t * Letter spacing is required for all texts.\n\t\t */\n\t\tletter-spacing: inherit;\n\t\t/*\n\t\t * This rule enables the word dividing for all texts. That is important for high zoom levels.\n\t\t */\n\t\tword-break: break-word;\n\t\t/*\n\t\t * Word spacing is required for all texts.\n\t\t */\n\t\tword-spacing: inherit;\n\t}\n\n\t/*\n\t * All interactive elements should have a minimum size of 44px.\n\t */\n\t/* input:not([type='checkbox'], [type='radio'], [type='range']), */\n\t/* option, */\n\t/* select, */\n\t/* textarea, */\n\t[role='button'],\n\tbutton:not([role='link']),\n\tkol-input .input {\n\t\tmin-height: var(--a11y-min-size);\n\t\tmin-width: var(--a11y-min-size);\n\t}\n\n\t/*\n\t * Some interactive elements should not inherit the font-family and font-size.\n\t */\n\ta,\n\tbutton,\n\th1,\n\th2,\n\th3,\n\th4,\n\th5,\n\th6,\n\tinput,\n\toption,\n\tselect,\n\ttextarea {\n\t\t/*\n\t\t * All elements should inherit the font family from his parent element.\n\t\t */\n\t\tfont-family: inherit;\n\t\t/*\n\t\t * All elements should inherit the font size from his parent element.\n\t\t */\n\t\tfont-size: inherit;\n\t}\n}\n\n/**\n * Sometimes we need the semantic element for accessibility reasons,\n * but we don't want to show it.\n *\n * - https://www.a11yproject.com/posts/how-to-hide-content/\n */\n.visually-hidden {\n\tclip: rect(0 0 0 0);\n\tclip-path: inset(50%);\n\theight: 1px;\n\toverflow: hidden;\n\tposition: absolute;\n\twhite-space: nowrap;\n\twidth: 1px;\n}\n\n@layer kol-global {\n\t/*\n\t * Dieses CSS stellt sicher, dass der Standard-Style\n\t * von A und Button resettet werden.\n\t */\n\t:is(a, button) {\n\t\tbackground-color: transparent;\n\t\tborder: none;\n\t\tmargin: 0;\n\t\tpadding: 0;\n\t\twidth: 100%; /* 100% needed for custom width from outside */\n\t}\n\n\t/*\n\t * Ensure elements with hidden attribute to be actually not visible\n\t * @see https://meowni.ca/hidden.is.a.lie.html\n\t */\n\t[hidden] {\n\t\tdisplay: none !important;\n\t}\n}\n\n@layer kol-global {\n\t:host {\n\t\t/*\n\t\t * The max-width is needed to prevent the table from overflowing the\n\t\t * parent node, if the table is wider than the parent node.\n\t\t */\n\t\tmax-width: 100%;\n\t}\n\n\t* {\n\t\t/*\n\t\t * We prefer to box-sizing: border-box for all elements.\n\t\t */\n\t\tbox-sizing: border-box;\n\t}\n\n\t/* KolSpan is a layout component with icons in all directions and a label text in the middle. */\n\tkol-span-wc {\n\t\tdisplay: grid;\n\t\tplace-items: center;\n\t}\n\n\t/* The sub span in KolSpan is the horizontal span with icon left and right and the label text in the middle. */\n\tkol-span-wc > span {\n\t\tdisplay: flex;\n\t\tplace-items: center;\n\t}\n\n\ta,\n\tbutton {\n\t\tcursor: pointer;\n\t}\n\n\t/* This is the text label. */\n\t.icon-only > kol-span-wc > span > span {\n\t\tdisplay: none;\n\t}\n}\n\n@layer kol-component {\n\t.required label > span::after,\n\t.required legend > span::after {\n\t\tcontent: '*';\n\t}\n}\n\n@layer kol-component {\n\t:host {\n\t\tdisplay: block;\n\t}\n}\n\n@layer kol-component {\n\tinput,\n\ttextarea {\n\t\tcursor: text;\n\t}\n\n\tinput[type='checkbox'],\n\tinput[type='color'],\n\tinput[type='file'],\n\tinput[type='radio'],\n\tinput[type='range'],\n\tlabel,\n\toption,\n\tselect {\n\t\tcursor: pointer;\n\t}\n\n\t/* input[type='checkbox'], */\n\t/* input[type='radio'], */\n\t/* input[type='range'], */\n\tinput[type='color'],\n\tinput[type='date'],\n\tinput[type='datetime-local'],\n\tinput[type='email'],\n\tinput[type='file'],\n\tinput[type='month'],\n\tinput[type='number'],\n\tinput[type='password'],\n\tinput[type='search'],\n\tinput[type='tel'],\n\tinput[type='text'],\n\tinput[type='time'],\n\tinput[type='url'],\n\tinput[type='week'],\n\tselect,\n\tselect[multiple] option,\n\ttextarea {\n\t\tfont-size: 1rem;\n\t\twidth: 100%;\n\t}\n\n\t/* needed hack for vertical alignment */\n\tinput[type='file'] {\n\t\tpadding: calc((var(--a11y-min-size) - 1rem) / 10) 0.5em;\n\t}\n\n\t/* needed hack for vertical alignment */\n\tselect[multiple] option {\n\t\tpadding: calc((var(--a11y-min-size) - 1rem) / 2) 0.5em;\n\t}\n\n\tkol-input.disabled :is(button, input, option, select, textarea, .input-label) {\n\t\tcursor: not-allowed;\n\t\topacity: 0.5;\n\t}\n}\n\n@layer kol-component {\n\tkol-input {\n\t\tdisplay: grid;\n\t}\n\n\tkol-input .input-slot {\n\t\tflex-grow: 1;\n\t}\n\n\tinput:not([type='checkbox'], [type='radio']),\n\tselect:not([multiple], [size]) {\n\t\theight: 2.75em;\n\t}\n\n\tinput:focus,\n\toption:focus,\n\tselect:focus,\n\ttextarea:focus {\n\t\toutline: 0;\n\t}\n\n\t.input {\n\t\tdisplay: flex;\n\t\talign-items: center;\n\t}\n\n\t.input > kol-icon {\n\t\tdisplay: grid;\n\t\theight: var(--a11y-min-size);\n\t\tplace-items: center;\n\t}\n\n\tkol-input.required .input-tooltip .span-label::after {\n\t\tcontent: '*';\n\t}\n}\n\n@layer kol-component {\n\t.error.hidden {\n\t\tdisplay: none;\n\t}\n}\n"}}}]);