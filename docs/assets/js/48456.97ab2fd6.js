/*! For license information please see 48456.97ab2fd6.js.LICENSE.txt */ "use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[48456],{52260:(t,e,n)=>{n.d(e,{I:()=>o});var i=n(91388);const o=({accessKey:t,label:e})=>{let[n,...o]=e.split(t);return 0===o.length&&(t=t.toUpperCase(),[n,...o]=e.split(t)),0===o.length&&(t=t.toLowerCase(),[n,...o]=e.split(t)),(0,i.h)(i.F,null,n,o.length?(0,i.h)(i.F,null,(0,i.h)("u",null,t),o.join(t)):null)}},17796:(t,e,n)=>{n.d(e,{A:()=>o});var i=n(32924);class o{constructor(t,e,n){var o,a,s;if(this.experimentalMode=(0,i.a0)(),this.setFormAssociatedValue=t=>{var e;const n=null===(e=this.formAssociated)||void 0===e?void 0:e.getAttribute("name");null!==n&&""!==n||(0,i.h)(` The form field (${this.type}) must have a name attribute to be form-associated. Please define the _name attribute.`);const o=this.tryToStringifyValue(t);this.syncValue(t,o,this.formAssociated),this.syncValue(t,o,this.syncToOwnInput)},this.component=t,this.host=this.findHostWithShadowRoot(n),this.type=e,this.experimentalMode&&(t=>"KOL-BUTTON"===t||"KOL-INPUT-CHECKBOX"===t||"KOL-INPUT-COLOR"===t||"KOL-INPUT-DATE"===t||"KOL-INPUT-EMAIL"===t||"KOL-INPUT-FILE"===t||"KOL-INPUT-NUMBER"===t||"KOL-INPUT-PASSWORD"===t||"KOL-INPUT-RADIO"===t||"KOL-INPUT-RANGE"===t||"KOL-INPUT-TEXT"===t||"KOL-SELECT"===t||"KOL-TEXTAREA"===t)(null===(o=this.host)||void 0===o?void 0:o.tagName)){switch(null===(a=this.host)||void 0===a||a.querySelectorAll("input,select,textarea").forEach((t=>{var e;null===(e=this.host)||void 0===e||e.removeChild(t)})),this.type){case"button":case"color":case"date":case"email":case"file":case"number":case"password":case"radio":case"range":case"text":this.formAssociated=document.createElement("input"),this.formAssociated.setAttribute("type",this.type);break;case"select":this.formAssociated=document.createElement("select"),this.formAssociated.setAttribute("multiple","");break;case"textarea":this.formAssociated=document.createElement("textarea");break;default:this.formAssociated=document.createElement("input"),this.formAssociated.setAttribute("type","hidden")}this.formAssociated.setAttribute("aria-hidden","true"),this.formAssociated.setAttribute("data-form-associated",""),this.formAssociated.setAttribute("hidden",""),null===(s=this.host)||void 0===s||s.appendChild(this.formAssociated)}}findHostWithShadowRoot(t){for(;null===(null==t?void 0:t.shadowRoot)&&t!==document.body;)(t=null==t?void 0:t.parentNode).host&&(t=t.host);return t}setAttribute(t,e,n){if(this.experimentalMode)try{if("boolean"!=typeof(n="object"==typeof n&&null!==n?JSON.stringify(n):n)&&"number"!=typeof n&&"string"!=typeof n)throw new Error("Invalid value type: "+typeof n);null==e||e.setAttribute(t,`${n}`)}catch(n){null==e||e.removeAttribute(t)}}tryToStringifyValue(t){try{return"object"==typeof t&&null!==t?JSON.stringify(t).toString():null==t?null:t.toString()}catch(t){return(0,i.a1)(`The form field raw value is not able to stringify! ${t}`),""}}syncValue(t,e,n){if(n)switch(this.type){case"file":n.files=t;break;case"select":n.querySelectorAll("option").forEach((t=>{n.removeChild(t)})),Array.isArray(t)&&t.forEach((t=>{const e=this.tryToStringifyValue(t);if("string"==typeof e){const t=document.createElement("option");t.setAttribute("value",e),t.setAttribute("selected",""),n.appendChild(t)}}));break;default:"string"==typeof e?(n.setAttribute("value",e),n.value=e):(n.removeAttribute("value"),n.value="")}}validateName(t){(0,i.a2)(this.component,t,{hooks:{afterPatch:()=>{this.setAttribute("name",this.formAssociated,this.component.state._name)}}}),void 0===t&&(0,i.h)("Ein Name am Eingabefeldern oder Schalter ist nicht zwingend erforderlich, kann aber f\xfcr die Autocomplete-Funktion und f\xfcr das statische Versenden des Eingabefeldes relevant sein.")}validateSyncValueBySelector(t){if(this.experimentalMode&&"string"==typeof t){const e=document.querySelector(t);e&&(this.syncToOwnInput=e)}}componentWillLoad(){this.validateName(this.component._name),this.validateSyncValueBySelector(this.component._syncValueBySelector)}}},53252:(t,e,n)=>{n.d(e,{I:()=>r,g:()=>s});var i=n(32924),o=n(71968),a=n(17796);const s=t=>{const e="string"==typeof t._error&&t._error.length>0&&!0===t._touched,n="string"==typeof t._hint&&t._hint.length>0,i=[];return!0===e&&i.push(`${t._id}-error`),!0===n&&i.push(`${t._id}-hint`),{hasError:e,hasHint:n,ariaDescribedBy:i}};class l extends a.A{constructor(t,e,n){super(t,e,n),this.component=t}validateAlert(t){(0,i.B)(this.component,"_alert",t)}validateTouched(t){(0,i.N)(this.component,t)}componentWillLoad(){super.componentWillLoad(),this.validateAlert(this.component._alert),this.validateTouched(this.component._touched)}}class r extends l{constructor(t,e,n){super(t,e,n),this.valueChangeListeners=[],this.onFacade={onBlur:this.onBlur.bind(this),onChange:this.onChange.bind(this),onClick:this.onClick.bind(this),onFocus:this.onFocus.bind(this)},this.component=t}validateAccessKey(t){(0,i.C)(this.component,"_accessKey",t)}validateAdjustHeight(t){(0,i.O)(this.component,t)}validateDisabled(t){(0,i.B)(this.component,"_disabled",t),!0===t&&(0,i.P)()}validateError(t){(0,i.C)(this.component,"_error",t)}validateHideError(t){(0,i.Q)(this.component,t,{hooks:{afterPatch:()=>{this.component.state._hideError&&(0,i.T)("Property hide-error for inputs: Only use when the error message is shown outside of the input component.")}}})}validateHideLabel(t){(0,i.R)(this.component,t,{hooks:{afterPatch:()=>{this.component.state._hideLabel&&(0,i.T)("Property hide-label for inputs: Only use for exceptions like search inputs that are clearly identifiable by their context.")}}})}validateHint(t){(0,i.C)(this.component,"_hint",t)}validateId(t){(0,i.C)(this.component,"_id",t,{hooks:{afterPatch:()=>{this.setAttribute("id",this.formAssociated,this.component.state._id)}},minLength:1}),""!==t&&void 0!==t||(0,i.h)("Eine eindeutige ID an den Eingabefeldern ist nicht zwingend erforderlich, k\xf6nnte aber f\xfcr die E2E-Tests relevant sein.")}validateLabel(t){(0,i.U)(this.component,t,{required:!0})}validateOn(t){"object"==typeof t&&(0,i.m)(this.component,"_on",t)}validateSmartButton(t){(0,i.t)(t,(()=>{try{t=(0,i.u)(t)}catch(t){}(0,i.m)(this.component,"_smartButton",t)}))}validateTabIndex(t){(0,i.V)(this.component,t)}componentWillLoad(){super.componentWillLoad(),this.validateAccessKey(this.component._accessKey),this.validateAdjustHeight(this.component._adjustHeight),this.validateError(this.component._error),this.validateDisabled(this.component._disabled),this.validateHideError(this.component._hideError),this.validateHideLabel(this.component._hideLabel),this.validateHint(this.component._hint),this.validateId(this.component._id),this.validateLabel(this.component._label),this.validateSmartButton(this.component._smartButton),this.validateOn(this.component._on),this.validateTabIndex(this.component._tabIndex)}onBlur(t){var e;this.component._alert=!0,this.component._touched=!0,(0,o.s)(t),(0,o.t)("blur",this.host),"function"==typeof(null===(e=this.component._on)||void 0===e?void 0:e.onBlur)&&this.component._on.onBlur(t)}onChange(t){var e;const n=t.target.value;(0,o.t)("change",this.host,n),this.setFormAssociatedValue(n),"function"==typeof(null===(e=this.component._on)||void 0===e?void 0:e.onChange)&&this.component._on.onChange(t,n),this.valueChangeListeners.forEach((t=>t(n)))}onClick(t){var e;(0,o.s)(t),(0,o.t)("click",this.host),"function"==typeof(null===(e=this.component._on)||void 0===e?void 0:e.onClick)&&this.component._on.onClick(t)}onFocus(t){var e;this.component._alert=!0,(0,o.s)(t),(0,o.t)("focus",this.host),"function"==typeof(null===(e=this.component._on)||void 0===e?void 0:e.onFocus)&&this.component._on.onFocus(t)}addValueChangeListener(t){this.valueChangeListeners.push(t)}}},8292:(t,e,n)=>{n.d(e,{I:()=>s});var i=n(32924),o=n(53252);const a=(t,e)=>{const n=t;"object"==typeof n&&null!==n&&((0,i.H)(n.right,1)&&(n.right={icon:n.right}),(0,i.H)(n.left,1)&&(n.left={icon:n.left}),e.set("_icons",n))};class s extends o.I{constructor(t,e,n){super(t,e,n),this.component=t}validateIcon(t){this.validateIcons(t)}validateIcons(t){(0,i.t)(t,(()=>{try{t=(0,i.u)(t)}catch(t){}(0,i.w)(this.component,"_icons",(t=>"object"==typeof t&&null!==t&&((0,i.H)(t.left,1)||(0,i.a5)(t.left)||(0,i.H)(t.right,1)||(0,i.a5)(t.right))),new Set(["KoliBriHorizontalIcon"]),t,{hooks:{beforePatch:a},required:!0})}))}componentWillLoad(){super.componentWillLoad(),this.validateIcons(this.component._icons||this.component._icon)}}},71968:(t,e,n)=>{function i(t){t.stopImmediatePropagation(),t.stopPropagation()}function o(t,e,n){return t.dispatchEvent(function(t,e){return new CustomEvent(`kol-${t}`,{bubbles:!0,cancelable:!0,composed:!0,detail:e})}(e,n))}function a(t,e,n){e&&o(e,t,n)}function s(t){t.preventDefault(),i(t)}n.d(e,{p:()=>s,s:()=>i,t:()=>a})},48456:(t,e,n)=>{n.r(e),n.d(e,{kol_input_file:()=>c});var i=n(91388),o=n(32924),a=n(31800),s=n(71968),l=n(53252),r=n(52260),d=n(8292);class h extends d.I{constructor(t,e,n){super(t,e,n),this.component=t}validateAccept(t){(0,o.C)(this.component,"_accept",t)}validateMultiple(t){(0,o.B)(this.component,"_multiple",t)}validateRequired(t){(0,o.B)(this.component,"_required",t)}validateValue(t){(0,o.C)(this.component,"_value",t),this.setFormAssociatedValue(this.component._value)}componentWillLoad(){super.componentWillLoad(),this.validateAccept(this.component._accept),this.validateMultiple(this.component._multiple),this.validateRequired(this.component._required),this.validateValue(this.component._value)}}const c=class{async getValue(){var t;return null===(t=this.ref)||void 0===t?void 0:t.files}render(){const{ariaDescribedBy:t}=(0,l.g)(this.state),e=(0,o.M)(this.state._label);return(0,i.h)(i.H,{key:"bc52c39ddabdb0071b74b66a82b8f75eb4db0102"},(0,i.h)("kol-input",{key:"ec451dc6b5acaa7bb406c021620b2f0382c618dc",class:{file:!0,"hide-label":!!this.state._hideLabel},_accessKey:this.state._accessKey,_disabled:this.state._disabled,_error:this.state._error,_hideError:this.state._hideError,_hideLabel:this.state._hideLabel,_hint:this.state._hint,_icons:this.state._icons,_id:this.state._id,_label:this.state._label,_required:this.state._required,_smartButton:this.state._smartButton,_tooltipAlign:this._tooltipAlign,_touched:this.state._touched,onClick:()=>{var t;return null===(t=this.ref)||void 0===t?void 0:t.focus()},role:"presentation"},(0,i.h)("span",{key:"afac200e379d1e616f3064e21c5f0f23ecbd6804",slot:"label"},e?(0,i.h)("slot",{name:"expert"}):"string"==typeof this.state._accessKey?(0,i.h)(i.F,null,(0,i.h)(r.I,{accessKey:this.state._accessKey,label:this.state._label})," ",(0,i.h)("span",{class:"access-key-hint","aria-hidden":"true"},this.state._accessKey)):(0,i.h)("span",null,this.state._label)),(0,i.h)("div",{key:"ed7f0892e4ff31a800fe43e9c96ec662ffd64556",slot:"input"},(0,i.h)("input",Object.assign({key:"de0a296789ec5f9d53e067d65a5f68ff07ccc77b",ref:this.catchRef,title:"",accept:this.state._accept,accessKey:this.state._accessKey,"aria-describedby":t.length>0?t.join(" "):void 0,"aria-label":this.state._hideLabel&&"string"==typeof this.state._label?this.state._label:void 0,autoCapitalize:"off",autoCorrect:"off",disabled:this.state._disabled,id:this.state._id,multiple:this.state._multiple,name:this.state._name,required:this.state._required,spellcheck:"false",type:"file",value:this.state._value},this.controller.onFacade,{onChange:this.onChange})))))}constructor(t){(0,i.r)(this,t),this.catchRef=t=>{this.ref=t,(0,o.k)(this.host,this.ref)},this.onChange=t=>{var e;if(this.ref instanceof HTMLInputElement&&"file"===this.ref.type){const n=this.ref.files;(0,s.s)(t),(0,s.t)("change",this.host,n),this.controller.setFormAssociatedValue(n),"function"==typeof(null===(e=this.state._on)||void 0===e?void 0:e.onChange)&&this.state._on.onChange(t,n)}},this._accept=void 0,this._accessKey=void 0,this._alert=!0,this._disabled=!1,this._error=void 0,this._hideError=!1,this._hideLabel=!1,this._hint="",this._icons=void 0,this._id=void 0,this._label=void 0,this._multiple=!1,this._name=void 0,this._on=void 0,this._required=!1,this._smartButton=void 0,this._syncValueBySelector=void 0,this._tabIndex=void 0,this._tooltipAlign="top",this._touched=!1,this._value=void 0,this.state={_hideError:!1,_id:`id-${(0,a.n)()}`,_label:""},this.controller=new h(this,"file",this.host)}validateAccept(t){this.controller.validateAccept(t)}validateAccessKey(t){this.controller.validateAccessKey(t)}validateAlert(t){this.controller.validateAlert(t)}validateDisabled(t){this.controller.validateDisabled(t)}validateError(t){this.controller.validateError(t)}validateHideError(t){this.controller.validateHideError(t)}validateHideLabel(t){this.controller.validateHideLabel(t)}validateHint(t){this.controller.validateHint(t)}validateIcons(t){this.controller.validateIcons(t)}validateId(t){this.controller.validateId(t)}validateLabel(t){this.controller.validateLabel(t)}validateMultiple(t){this.controller.validateMultiple(t)}validateName(t){this.controller.validateName(t)}validateOn(t){this.controller.validateOn(t)}validateRequired(t){this.controller.validateRequired(t)}validateSmartButton(t){this.controller.validateSmartButton(t)}validateSyncValueBySelector(t){this.controller.validateSyncValueBySelector(t)}validateTabIndex(t){this.controller.validateTabIndex(t)}validateTouched(t){this.controller.validateTouched(t)}validateValue(t){this.controller.validateValue(t)}componentWillLoad(){this._alert=!0===this._alert,this._touched=!0===this._touched,this.controller.componentWillLoad()}get host(){return(0,i.g)(this)}static get watchers(){return{_accept:["validateAccept"],_accessKey:["validateAccessKey"],_alert:["validateAlert"],_disabled:["validateDisabled"],_error:["validateError"],_hideError:["validateHideError"],_hideLabel:["validateHideLabel"],_hint:["validateHint"],_icons:["validateIcons"],_id:["validateId"],_label:["validateLabel"],_multiple:["validateMultiple"],_name:["validateName"],_on:["validateOn"],_required:["validateRequired"],_smartButton:["validateSmartButton"],_syncValueBySelector:["validateSyncValueBySelector"],_tabIndex:["validateTabIndex"],_touched:["validateTouched"],_value:["validateValue"]}}};c.style={default:"@charset \"UTF-8\";\n/*\n * This file contains all rules for accessibility.\n */\n@layer kol-global {\n :host {\n /*\n * Minimum size of interactive elements.\n */\n --a11y-min-size: 44px;\n /*\n * No element should be used without a background and font color whose contrast ratio has\n * not been checked. By initially setting the background color to white and the font color\n * to black, the contrast ratio is ensured and explicit adjustment is forced.\n */\n background-color: white;\n color: black;\n /*\n * Verdana is an accessible font that can be used without requiring additional loading time.\n */\n font-family: Verdana;\n }\n * {\n /*\n * This rule enables the word dividing for all texts. That is important for high zoom levels.\n */\n hyphens: auto;\n /*\n * Letter spacing is required for all texts.\n */\n letter-spacing: inherit;\n /*\n * This rule enables the word dividing for all texts. That is important for high zoom levels.\n */\n word-break: break-word;\n /*\n * Word spacing is required for all texts.\n */\n word-spacing: inherit;\n }\n /*\n * All interactive elements should have a minimum size of 44px.\n */\n /* input:not([type='checkbox'], [type='radio'], [type='range']), */\n /* option, */\n /* select, */\n /* textarea, */\n [role=button],\n button:not([role=link]),\n kol-input .input {\n min-height: var(--a11y-min-size);\n min-width: var(--a11y-min-size);\n }\n /*\n * Some interactive elements should not inherit the font-family and font-size.\n */\n a,\n button,\n h1,\n h2,\n h3,\n h4,\n h5,\n h6,\n input,\n option,\n select,\n textarea {\n /*\n * All elements should inherit the font family from his parent element.\n */\n font-family: inherit;\n /*\n * All elements should inherit the font size from his parent element.\n */\n font-size: inherit;\n }\n}\n/**\n * Sometimes we need the semantic element for accessibility reasons,\n * but we don't want to show it.\n *\n * - https://www.a11yproject.com/posts/how-to-hide-content/\n */\n.visually-hidden {\n clip: rect(0 0 0 0);\n clip-path: inset(50%);\n height: 1px;\n overflow: hidden;\n position: absolute;\n white-space: nowrap;\n width: 1px;\n}\n\n@layer kol-global {\n /*\n * Dieses CSS stellt sicher, dass der Standard-Style\n * von A und Button resettet werden.\n */\n :is(a, button) {\n background-color: transparent;\n border: none;\n margin: 0;\n padding: 0;\n width: 100%; /* 100% needed for custom width from outside */\n }\n /*\n * Ensure elements with hidden attribute to be actually not visible\n * @see https://meowni.ca/hidden.is.a.lie.html\n */\n [hidden] {\n display: none !important;\n }\n}\n@layer kol-global {\n :host {\n /*\n * The max-width is needed to prevent the table from overflowing the\n * parent node, if the table is wider than the parent node.\n */\n max-width: 100%;\n }\n * {\n /*\n * We prefer to box-sizing: border-box for all elements.\n */\n box-sizing: border-box;\n }\n /* KolSpan is a layout component with icons in all directions and a label text in the middle. */\n kol-span-wc {\n display: grid;\n place-items: center;\n }\n /* The sub span in KolSpan is the horizontal span with icon left and right and the label text in the middle. */\n kol-span-wc > span {\n display: flex;\n place-items: center;\n }\n a,\n button {\n cursor: pointer;\n }\n .hidden {\n display: none;\n visibility: hidden;\n }\n /* This is the text label. */\n .hide-label > kol-span-wc > span > span {\n display: none;\n }\n /* Reset browser agent style. */\n button:disabled {\n color: unset;\n }\n .disabled label,\n .disabled:focus-within label,\n [aria-disabled=true],\n [aria-disabled=true]:focus,\n [disabled],\n [disabled]:focus {\n cursor: not-allowed !important;\n opacity: 0.5 !important;\n outline: none !important;\n }\n [aria-disabled=true]:focus kol-span-wc,\n [disabled]:focus kol-span-wc {\n outline: none !important;\n }\n}\n@layer kol-component {\n .required label > span::after,\n .required legend > span::after {\n content: \"*\";\n }\n}\n@layer kol-component {\n :host {\n display: block;\n }\n}\n@layer kol-component {\n input,\n textarea {\n cursor: text;\n }\n input[type=checkbox],\n input[type=color],\n input[type=file],\n input[type=radio],\n input[type=range],\n label,\n option,\n select {\n cursor: pointer;\n }\n /* input[type='checkbox'], */\n /* input[type='radio'], */\n /* input[type='range'], */\n input[type=color],\n input[type=date],\n input[type=datetime-local],\n input[type=email],\n input[type=file],\n input[type=month],\n input[type=number],\n input[type=password],\n input[type=search],\n input[type=tel],\n input[type=text],\n input[type=time],\n input[type=url],\n input[type=week],\n select,\n select[multiple] option,\n textarea {\n font-size: 1rem;\n width: 100%;\n }\n /* needed hack for vertical alignment */\n input[type=file] {\n padding: calc((var(--a11y-min-size) - 1rem) / 10) 0.5em;\n }\n /* needed hack for vertical alignment */\n select[multiple] option {\n padding: calc((var(--a11y-min-size) - 1rem) / 2) 0.5em;\n }\n}\n@layer kol-component {\n kol-input {\n display: grid;\n }\n kol-input .input-slot {\n flex-grow: 1;\n }\n input:not([type=checkbox], [type=radio]),\n select:not([multiple], [size]) {\n height: 2.75em;\n }\n input:focus,\n option:focus,\n select:focus,\n textarea:focus {\n outline: 0;\n }\n .input {\n display: flex;\n align-items: center;\n }\n .input > kol-icon {\n display: grid;\n height: var(--a11y-min-size);\n place-items: center;\n }\n kol-input.required .input-tooltip .span-label::after {\n content: \"*\";\n }\n}\n@layer kol-component {\n label input[type=file]::-webkit-file-upload-button {\n display: none;\n }\n label input[type=file]:before {\n content: \"Datei ausw\xe4hlen\";\n }\n label input[multiple]:before {\n content: \"Dateien ausw\xe4hlen\";\n }\n div.input {\n cursor: pointer;\n }\n}"}}}]);