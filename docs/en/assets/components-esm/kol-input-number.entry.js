/*! * KoliBri - The accessible HTML-Standard */ import{h,F as Fragment,H as Host,r as registerInstance,g as getElement}from"./index-62e5924b.js";import{w as watchValidator,a4 as validateSuggestions,C as watchString,B as watchBoolean,a7 as watchNumber,k as propagateFocus,M as showExpertSlot}from"./index-de9d4ee0.js";import{n as nonce}from"./dev.utils-744f41b3.js";import{p as propagateSubmitEventToForm}from"./controller-ec7c96d6.js";import{g as getRenderStates}from"./controller-4e891541.js";import{I as InternalUnderlinedAccessKey}from"./InternalUnderlinedAccessKey-2cbdead6.js";import{I as InputIconController}from"./controller-icon-03261e4e.js";import"./events-29e84d75.js";import"./associated.controller-3f6bde32.js";class InputNumberController extends InputIconController{constructor(e,t,n){super(e,t,n),this.numberOrIsoDateRegex=/^\d+$|(^\d{4}-([0]\d|1[0-2])-([0-2]\d|3[01])([T ][0-2]\d:[0-5]\d:[0-5]\d(?:\.\d+)?([+-][0-2]\d:[0-5]\d|Z)?)?$)|(^[0-2]\d:[0-5]\d(:[0-5]\d)?$)/,this.parseToString=e=>"string"==typeof e?e:"number"==typeof e?`${e}`:"object"==typeof e&&e instanceof Date?e.toISOString():"",this.validateIso8601=(e,t,n)=>{const a=parseFloat(t),i=a==t;return watchValidator(this.component,e,(e=>void 0===e||""===e||i&&"number"==typeof a||this.numberOrIsoDateRegex.test(e)),new Set(["number","Date","string{ISO-8601}"]),this.parseToString(t),{hooks:{afterPatch:e=>{"string"==typeof e&&n&&n(e)}}})},this.component=e}validateAutoComplete(e){watchValidator(this.component,"_autoComplete",(e=>"string"==typeof e&&("on"===e||"off"===e)),new Set(["on | off"]),e)}validateSuggestions(e){validateSuggestions(this.component,e)}onChange(e){super.onChange(e),!!e.target.value!=!!this.component._value&&(this.component._value=e.target.value)}validateMax(e){this.validateIso8601("_max",e)}validateMin(e){this.validateIso8601("_min",e)}validatePlaceholder(e){watchString(this.component,"_placeholder",e)}validateReadOnly(e){watchBoolean(this.component,"_readOnly",e)}validateRequired(e){watchBoolean(this.component,"_required",e)}validateStep(e){watchNumber(this.component,"_step",e)}validateValue(e){this.validateValueEx(e)}validateValueEx(e,t){this.validateIso8601("_value",e,t),this.setFormAssociatedValue(this.component.state._value)}componentWillLoad(){super.componentWillLoad(),this.validateAutoComplete(this.component._autoComplete),this.validateMax(this.component._max),this.validateMin(this.component._min),this.validateSuggestions(this.component._suggestions),this.validatePlaceholder(this.component._placeholder),this.validateReadOnly(this.component._readOnly),this.validateRequired(this.component._required),this.validateStep(this.component._step),this.validateValue(this.component._value)}}const defaultStyleCss="/*\n * This file contains all rules for accessibility.\n */\n@layer kol-global {\n :host {\n /*\n * Minimum size of interactive elements.\n */\n --a11y-min-size: 44px;\n /*\n * No element should be used without a background and font color whose contrast ratio has\n * not been checked. By initially setting the background color to white and the font color\n * to black, the contrast ratio is ensured and explicit adjustment is forced.\n */\n background-color: white;\n color: black;\n /*\n * Verdana is an accessible font that can be used without requiring additional loading time.\n */\n font-family: Verdana;\n }\n * {\n /*\n * This rule enables the word dividing for all texts. That is important for high zoom levels.\n */\n hyphens: auto;\n /*\n * Letter spacing is required for all texts.\n */\n letter-spacing: inherit;\n /*\n * This rule enables the word dividing for all texts. That is important for high zoom levels.\n */\n word-break: break-word;\n /*\n * Word spacing is required for all texts.\n */\n word-spacing: inherit;\n }\n /*\n * All interactive elements should have a minimum size of 44px.\n */\n /* input:not([type='checkbox'], [type='radio'], [type='range']), */\n /* option, */\n /* select, */\n /* textarea, */\n [role=button],\n button:not([role=link]),\n kol-input .input {\n min-height: var(--a11y-min-size);\n min-width: var(--a11y-min-size);\n }\n /*\n * Some interactive elements should not inherit the font-family and font-size.\n */\n a,\n button,\n h1,\n h2,\n h3,\n h4,\n h5,\n h6,\n input,\n option,\n select,\n textarea {\n /*\n * All elements should inherit the font family from his parent element.\n */\n font-family: inherit;\n /*\n * All elements should inherit the font size from his parent element.\n */\n font-size: inherit;\n }\n}\n/**\n * Sometimes we need the semantic element for accessibility reasons,\n * but we don't want to show it.\n *\n * - https://www.a11yproject.com/posts/how-to-hide-content/\n */\n.visually-hidden {\n clip: rect(0 0 0 0);\n clip-path: inset(50%);\n height: 1px;\n overflow: hidden;\n position: absolute;\n white-space: nowrap;\n width: 1px;\n}\n\n@layer kol-global {\n /*\n * Dieses CSS stellt sicher, dass der Standard-Style\n * von A und Button resettet werden.\n */\n :is(a, button) {\n background-color: transparent;\n border: none;\n margin: 0;\n padding: 0;\n width: 100%; /* 100% needed for custom width from outside */\n }\n /*\n * Ensure elements with hidden attribute to be actually not visible\n * @see https://meowni.ca/hidden.is.a.lie.html\n */\n [hidden] {\n display: none !important;\n }\n}\n@layer kol-global {\n :host {\n /*\n * The max-width is needed to prevent the table from overflowing the\n * parent node, if the table is wider than the parent node.\n */\n max-width: 100%;\n }\n * {\n /*\n * We prefer to box-sizing: border-box for all elements.\n */\n box-sizing: border-box;\n }\n /* KolSpan is a layout component with icons in all directions and a label text in the middle. */\n kol-span-wc {\n display: grid;\n place-items: center;\n }\n /* The sub span in KolSpan is the horizontal span with icon left and right and the label text in the middle. */\n kol-span-wc > span {\n display: flex;\n place-items: center;\n }\n a,\n button {\n cursor: pointer;\n }\n .hidden {\n display: none;\n visibility: hidden;\n }\n /* This is the text label. */\n .hide-label > kol-span-wc > span > span {\n display: none;\n }\n /* Reset browser agent style. */\n button:disabled {\n color: unset;\n }\n .disabled label,\n .disabled:focus-within label,\n [aria-disabled=true],\n [aria-disabled=true]:focus,\n [disabled],\n [disabled]:focus {\n cursor: not-allowed !important;\n opacity: 0.5 !important;\n outline: none !important;\n }\n [aria-disabled=true]:focus kol-span-wc,\n [disabled]:focus kol-span-wc {\n outline: none !important;\n }\n}\n@layer kol-component {\n .required label > span::after,\n .required legend > span::after {\n content: \"*\";\n }\n}\n@layer kol-component {\n :host {\n display: block;\n }\n}\n@layer kol-component {\n input,\n textarea {\n cursor: text;\n }\n input[type=checkbox],\n input[type=color],\n input[type=file],\n input[type=radio],\n input[type=range],\n label,\n option,\n select {\n cursor: pointer;\n }\n /* input[type='checkbox'], */\n /* input[type='radio'], */\n /* input[type='range'], */\n input[type=color],\n input[type=date],\n input[type=datetime-local],\n input[type=email],\n input[type=file],\n input[type=month],\n input[type=number],\n input[type=password],\n input[type=search],\n input[type=tel],\n input[type=text],\n input[type=time],\n input[type=url],\n input[type=week],\n select,\n select[multiple] option,\n textarea {\n font-size: 1rem;\n width: 100%;\n }\n /* needed hack for vertical alignment */\n input[type=file] {\n padding: calc((var(--a11y-min-size) - 1rem) / 10) 0.5em;\n }\n /* needed hack for vertical alignment */\n select[multiple] option {\n padding: calc((var(--a11y-min-size) - 1rem) / 2) 0.5em;\n }\n}\n@layer kol-component {\n kol-input {\n display: grid;\n }\n kol-input .input-slot {\n flex-grow: 1;\n }\n input:not([type=checkbox], [type=radio]),\n select:not([multiple], [size]) {\n height: 2.75em;\n }\n input:focus,\n option:focus,\n select:focus,\n textarea:focus {\n outline: 0;\n }\n .input {\n display: flex;\n align-items: center;\n }\n .input > kol-icon {\n display: grid;\n height: var(--a11y-min-size);\n place-items: center;\n }\n kol-input.required .input-tooltip .span-label::after {\n content: \"*\";\n }\n}\n@layer kol-component {}",KolInputNumberDefaultStyle0=defaultStyleCss,KolInputNumber=class{async getValue(){var e;return null===(e=this.ref)||void 0===e?void 0:e.value}render(){const{ariaDescribedBy:e}=getRenderStates(this.state),t=Array.isArray(this.state._suggestions)&&this.state._suggestions.length>0,n=showExpertSlot(this.state._label);return h(Host,{key:"d977d1ab0e8a785ea435362bf45acb3db644ddfc",class:{"has-value":this.state._hasValue}},h("kol-input",{key:"4d1befe03612e0590a033d88a5514150af6b3b44",class:{number:!0,"hide-label":!!this.state._hideLabel},_accessKey:this.state._accessKey,_disabled:this.state._disabled,_error:this.state._error,_hideError:this.state._hideError,_hideLabel:this.state._hideLabel,_hint:this.state._hint,_icons:this.state._icons,_id:this.state._id,_label:this.state._label,_suggestions:this.state._suggestions,_readOnly:this.state._readOnly,_required:this.state._required,_smartButton:this.state._smartButton,_tooltipAlign:this._tooltipAlign,_touched:this.state._touched},h("span",{key:"724fdbdd50c3d1ced96463f9ffc1210c63f61fc9",slot:"label"},n?h("slot",{name:"expert"}):"string"==typeof this.state._accessKey?h(Fragment,null,h(InternalUnderlinedAccessKey,{accessKey:this.state._accessKey,label:this.state._label})," ",h("span",{class:"access-key-hint","aria-hidden":"true"},this.state._accessKey)):h("span",null,this.state._label)),h("div",{key:"4f340feef2afdbd2891d730e1982339855ce8452",slot:"input"},h("input",Object.assign({key:"24bb0a1bfe530c3ce1b5215cff4922bc854b921d",ref:this.catchRef,title:"",accessKey:this.state._accessKey,"aria-describedby":e.length>0?e.join(" "):void 0,"aria-label":this.state._hideLabel&&"string"==typeof this.state._label?this.state._label:void 0,autoCapitalize:"off",autoComplete:this.state._autoComplete,autoCorrect:"off",disabled:this.state._disabled,id:this.state._id,list:t?`${this.state._id}-list`:void 0,max:this.state._max,min:this.state._min,name:this.state._name,readOnly:this.state._readOnly,required:this.state._required,placeholder:this.state._placeholder,step:this.state._step,spellcheck:"false",type:"number",value:this.state._value},this.controller.onFacade,{onKeyUp:this.onKeyUp})))))}constructor(e){registerInstance(this,e),this.catchRef=e=>{this.ref=e,propagateFocus(this.host,this.ref)},this.onKeyUp=e=>{"Enter"===e.code?propagateSubmitEventToForm({form:this.host,ref:this.ref}):this.controller.onFacade.onChange(e)},this._accessKey=void 0,this._alert=!0,this._autoComplete=void 0,this._disabled=!1,this._error=void 0,this._hideError=!1,this._hideLabel=!1,this._hint="",this._icons=void 0,this._id=void 0,this._label=void 0,this._max=void 0,this._min=void 0,this._name=void 0,this._on=void 0,this._placeholder=void 0,this._readOnly=!1,this._required=!1,this._smartButton=void 0,this._suggestions=void 0,this._step=void 0,this._syncValueBySelector=void 0,this._tabIndex=void 0,this._tooltipAlign="top",this._touched=!1,this._value=void 0,this.state={_autoComplete:"off",_hasValue:!1,_hideError:!1,_id:`id-${nonce()}`,_label:"",_suggestions:[]},this.controller=new InputNumberController(this,"number",this.host)}validateAccessKey(e){this.controller.validateAccessKey(e)}validateAlert(e){this.controller.validateAlert(e)}validateAutoComplete(e){this.controller.validateAutoComplete(e)}validateDisabled(e){this.controller.validateDisabled(e)}validateError(e){this.controller.validateError(e)}validateHideError(e){this.controller.validateHideError(e)}validateHideLabel(e){this.controller.validateHideLabel(e)}validateHint(e){this.controller.validateHint(e)}validateIcons(e){this.controller.validateIcons(e)}validateId(e){this.controller.validateId(e)}validateLabel(e){this.controller.validateLabel(e)}validateMax(e){this.controller.validateMax(e)}validateMin(e){this.controller.validateMin(e)}validateName(e){this.controller.validateName(e)}validateOn(e){this.controller.validateOn(e)}validatePlaceholder(e){this.controller.validatePlaceholder(e)}validateReadOnly(e){this.controller.validateReadOnly(e)}validateRequired(e){this.controller.validateRequired(e)}validateSmartButton(e){this.controller.validateSmartButton(e)}validateSuggestions(e){this.controller.validateSuggestions(e)}validateStep(e){this.controller.validateStep(e)}validateSyncValueBySelector(e){this.controller.validateSyncValueBySelector(e)}validateTabIndex(e){this.controller.validateTabIndex(e)}validateTouched(e){this.controller.validateTouched(e)}validateValue(e){this.controller.validateValueEx(e,(e=>{""===e&&this.ref&&(this.ref.value="")}))}componentWillLoad(){this._alert=!0===this._alert,this._touched=!0===this._touched,this.controller.componentWillLoad(),this.state._hasValue=!!this.state._value,this.controller.addValueChangeListener((e=>this.state._hasValue=!!e))}get host(){return getElement(this)}static get watchers(){return{_accessKey:["validateAccessKey"],_alert:["validateAlert"],_autoComplete:["validateAutoComplete"],_disabled:["validateDisabled"],_error:["validateError"],_hideError:["validateHideError"],_hideLabel:["validateHideLabel"],_hint:["validateHint"],_icons:["validateIcons"],_id:["validateId"],_label:["validateLabel"],_max:["validateMax"],_min:["validateMin"],_name:["validateName"],_on:["validateOn"],_placeholder:["validatePlaceholder"],_readOnly:["validateReadOnly"],_required:["validateRequired"],_smartButton:["validateSmartButton"],_suggestions:["validateSuggestions"],_step:["validateStep"],_syncValueBySelector:["validateSyncValueBySelector"],_tabIndex:["validateTabIndex"],_touched:["validateTouched"],_value:["validateValue"]}}};KolInputNumber.style={default:KolInputNumberDefaultStyle0};export{KolInputNumber as kol_input_number};