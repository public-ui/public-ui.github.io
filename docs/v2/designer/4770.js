/*! For license information please see 4770.js.LICENSE.txt */
"use strict";(self.webpackChunk_public_ui_designer=self.webpackChunk_public_ui_designer||[]).push([[4770],{62521:(e,t,n)=>{n.d(t,{I:()=>s,a:()=>r});var i=n(35916),a=n(788),o=n(78594);const l=["text","search","url","tel"];class s extends i.I{constructor(e,t,n){super(e,t,n),this.component=e}validateSuggestions(e){(0,o.v)(this.component,e)}componentWillLoad(){super.componentWillLoad(),this.validateSuggestions(this.component._suggestions)}}class r extends s{constructor(e,t,n){super(e,t,n),this.hasError=!1,this.component=e}validateType(e){(0,a.w)(this.component,"_type",(e=>"string"==typeof e&&l.includes(e)),new Set([`String {${l.join(", ")}`]),e)}validateHasCounter(e){(0,i.v)(this.component,e)}componentWillLoad(){super.componentWillLoad(),this.validateType(this.component._type),this.validateHasCounter(this.component._hasCounter)}}},23978:(e,t,n)=>{n.d(t,{a:()=>l,p:()=>s});var i=n(788),a=n(32152);const o=e=>{for((0,a.a)()&&((0,i.j)("↓ Search form element start."),console.log(e));e instanceof HTMLElement&&"FORM"!==e.tagName&&"KOL-FORM"!==e.tagName;){try{e=e.parentElement instanceof HTMLElement?e.parentElement:e.parentNode instanceof ShadowRoot?e.parentNode.host:null}catch(e){}(0,a.a)()&&(console.log(e),(0,i.j)("↑ Search form element finished."))}return e},l=(e={})=>{var t,n;const a=o(e.form);if(a instanceof HTMLElement){const e=new Event("reset",{bubbles:!0,cancelable:!0});if("FORM"===a.tagName)(0,i.q)(e,a),a.dispatchEvent(e);else if("KOL-FORM"===a.tagName){(0,i.q)(e,i.K.querySelector("form",a));const o=a;"function"==typeof(null===(t=o._on)||void 0===t?void 0:t.onReset)&&(null===(n=o._on)||void 0===n||n.onReset(e))}}},s=(e={})=>{const t=o(e.form);if(t instanceof HTMLElement){const e=new SubmitEvent("submit",{bubbles:!0,cancelable:!0,submitter:t});if("FORM"===t.tagName)(0,a.a)()&&!1===t.noValidate&&(0,i.j)("If you have not focusable or hidden form fields in your form, you should enable noValidate for your form.",{force:!0}),setTimeout((()=>{"function"==typeof t.requestSubmit?t.requestSubmit():((0,i.q)(e,t),t.dispatchEvent(e))}));else if("KOL-FORM"===t.tagName){(0,i.q)(e,i.K.querySelector("form",t));const n=t;setTimeout((()=>{var t,i;"function"==typeof(null===(t=n._on)||void 0===t?void 0:t.onSubmit)&&(null===(i=n._on)||void 0===i||i.onSubmit(e))}))}}}},35916:(e,t,n)=>{n.d(t,{I:()=>l,v:()=>o});var i=n(56201),a=n(788);const o=(e,t)=>{(0,a.b)(e,"_hasCounter",t)};class l extends i.I{constructor(e,t,n){super(e,t,n),this.component=e}validateAutoComplete(e){(0,a.w)(this.component,"_autoComplete",(e=>"string"==typeof e&&("on"===e||"off"===e)),new Set(["on | off"]),e)}validateHasCounter(e){o(this.component,e)}validateMaxLength(e){(0,a.k)(this.component,"_maxLength",e,{min:0})}validatePattern(e){(0,a.i)(this.component,"_pattern",e)}validatePlaceholder(e){(0,a.i)(this.component,"_placeholder",e)}validateReadOnly(e){(0,a.b)(this.component,"_readOnly",e)}validateRequired(e){(0,a.b)(this.component,"_required",e)}validateValue(e){(0,a.i)(this.component,"_value",e),this.setFormAssociatedValue(this.component.state._value)}componentWillLoad(){super.componentWillLoad(),this.validateAutoComplete(this.component._autoComplete),this.validateHasCounter(this.component._hasCounter),this.validateMaxLength(this.component._maxLength),this.validatePattern(this.component._pattern),this.validatePlaceholder(this.component._placeholder),this.validateReadOnly(this.component._readOnly),this.validateRequired(this.component._required),this.validateValue(this.component._value)}}},56201:(e,t,n)=>{n.d(t,{I:()=>r});var i=n(59728),a=n(44184),o=n(788),l=n(61375);const s=(e,t)=>{const n=e;"object"==typeof n&&null!==n&&((0,l.i)(n.right,1)&&(n.right={icon:n.right}),(0,l.i)(n.left,1)&&(n.left={icon:n.left}),t.set("_icons",n))};class r extends i.I{constructor(e,t,n){super(e,t,n),this.component=e}validateIcon(e){this.validateIcons(e)}validateIcons(e){(0,o.o)(e,(()=>{try{e=(0,o.p)(e)}catch(e){}(0,o.w)(this.component,"_icons",(e=>"object"==typeof e&&null!==e&&((0,l.i)(e.left,1)||(0,a.i)(e.left)||(0,l.i)(e.right,1)||(0,a.i)(e.right))),new Set(["KoliBriHorizontalIcon"]),e,{hooks:{beforePatch:s},required:!0})}))}componentWillLoad(){super.componentWillLoad(),this.validateIcons(this.component._icons||this.component._icon)}}},44184:(e,t,n)=>{n.d(t,{i:()=>l,v:()=>s});var i=n(788),a=n(61375);const o=(e,t,n)=>{(0,a.c)(n)?e[t]=n:(0,a.i)(n,1)&&(e[t]={icon:n})},l=e=>"object"==typeof e&&null!==e&&(void 0===e.style||(0,a.b)(e.style))&&(void 0===e.label||(0,a.i)(e.label))&&(0,a.i)(e.icon,1),s=(e,t,n={})=>{(0,i.o)(t,(()=>{var s;try{t=(0,i.p)(t)}catch(e){}(0,i.w)(e,"_icons",(e=>{const t="object"==typeof e&&null!==e&&0===Object.keys(e).length;return null===e||t||(0,a.i)(e,1)||"object"==typeof e&&null!==e&&((0,a.i)(e.left,1)||l(e.left)||(0,a.i)(e.right,1)||l(e.right)||(0,a.i)(e.top,1)||l(e.top)||(0,a.i)(e.bottom,1)||l(e.bottom))}),new Set(["KoliBriIcon"]),t,Object.assign(Object.assign({},n),{defaultValue:{},hooks:{afterPatch:null===(s=n.hooks)||void 0===s?void 0:s.afterPatch,beforePatch:(e,t,i,l)=>{var s,r;"function"==typeof(null===(s=n.hooks)||void 0===s?void 0:s.beforePatch)&&(null===(r=n.hooks)||void 0===r||r.beforePatch(e,t,i,l)),(e=>{var t,n,i;if(null===(t=e.nextState)||void 0===t?void 0:t.has("_icons")){const t=null===(n=e.nextState)||void 0===n?void 0:n.get("_icons");null===(i=e.nextState)||void 0===i||i.set("_icons",(e=>{let t={};return(0,a.i)(e,1)?t={left:{icon:e}}:"object"==typeof e&&null!==e&&(o(t,"top",e.top),o(t,"right",e.right),o(t,"bottom",e.bottom),o(t,"left",e.left)),t})(t))}})(i)}}}))}))}},34770:(e,t,n)=>{n.r(t),n.d(t,{kol_input_email:()=>p});var i=n(15632),a=n(18276),o=n(23978),l=n(59728),s=n(29117),r=n(62521),d=n(788),h=n(27756),c=n(61375);class u extends r.I{constructor(e,t,n){super(e,t,n),this.component=e}validateMultiple(e){((e,t)=>{(0,d.b)(e,"_multiple",t)})(this.component,e)}componentWillLoad(){super.componentWillLoad(),this.validateMultiple(this.component._multiple)}}const p=class{getValue(){return e=this,null,t=function*(){var e;return null===(e=this.ref)||void 0===e?void 0:e.value},new Promise(((n,i)=>{var a=e=>{try{l(t.next(e))}catch(e){i(e)}},o=e=>{try{l(t.throw(e))}catch(e){i(e)}},l=e=>e.done?n(e.value):Promise.resolve(e.value).then(a,o);l((t=t.apply(e,null)).next())}));var e,t}render(){const{ariaDescribedBy:e}=(0,l.g)(this.state),t=Array.isArray(this.state._suggestions)&&this.state._suggestions.length>0,n=(0,c.s)(this.state._label);return(0,i.h)(i.H,{key:"d9e5fc37a05a1fa49e0206d45943f8c789bd3780",class:{"kol-input-email":!0,"has-value":this.state._hasValue}},(0,i.h)(h.l,{key:"1f252d60c0808ced9529b92e113d782c1c61dbb6",class:{email:!0,"hide-label":!!this.state._hideLabel},_accessKey:this.state._accessKey,_alert:this.state._alert,_currentLength:this.state._currentLength,_disabled:this.state._disabled,_msg:this.state._msg,_hideError:this.state._hideError,_hasCounter:this.state._hasCounter,_hideLabel:this.state._hideLabel,_hint:this.state._hint,_icons:this.state._icons,_id:this.state._id,_label:this.state._label,_suggestions:this.state._suggestions,_maxLength:this.state._maxLength,_readOnly:this.state._readOnly,_required:this.state._required,_smartButton:this.state._smartButton,_tooltipAlign:this._tooltipAlign,_touched:this.state._touched,onClick:()=>{var e;return null===(e=this.ref)||void 0===e?void 0:e.focus()},role:"presentation"},(0,i.h)("span",{key:"f9269342577e13a1955967c354df3745b8e4072f",slot:"label"},n?(0,i.h)("slot",{name:"expert"}):"string"==typeof this.state._accessKey?(0,i.h)(i.F,null,(0,i.h)(s.I,{accessKey:this.state._accessKey,label:this.state._label})," ",(0,i.h)("span",{class:"access-key-hint","aria-hidden":"true"},this.state._accessKey)):(0,i.h)("span",null,this.state._label)),(0,i.h)("div",{key:"385b7b1c58c3fcb68588d5e8d390f2625e09d381",slot:"input"},(0,i.h)("input",Object.assign({key:"d53a875e911643f0d88fc4be69866e082f561831",ref:this.catchRef,title:"",accessKey:this.state._accessKey,"aria-describedby":e.length>0?e.join(" "):void 0,"aria-label":this.state._hideLabel&&"string"==typeof this.state._label?this.state._label:void 0,autoCapitalize:"off",autoComplete:this.state._autoComplete,autoCorrect:"off",disabled:this.state._disabled,multiple:this.state._multiple,id:this.state._id,list:t?`${this.state._id}-list`:void 0,maxlength:this.state._maxLength,name:this.state._name,pattern:this.state._pattern,placeholder:this.state._placeholder,readOnly:this.state._readOnly,required:this.state._required,spellcheck:"false",type:"email",value:this.state._value},this.controller.onFacade,{onKeyDown:this.onKeyDown,onInput:this.onInput})))))}constructor(e){(0,i.r)(this,e),this.catchRef=e=>{this.ref=e,(0,c.a)(this.host,this.ref)},this.onKeyDown=e=>{"Enter"!==e.code&&"NumpadEnter"!==e.code||(0,o.p)({form:this.host,ref:this.ref})},this.onInput=e=>{(0,d.s)(this,"_currentLength",e.target.value.length),this.controller.onFacade.onInput(e)},this._accessKey=void 0,this._alert=!0,this._autoComplete=void 0,this._disabled=!1,this._error=void 0,this._hasCounter=!1,this._hideError=!1,this._hideLabel=!1,this._hint="",this._icons=void 0,this._id=void 0,this._label=void 0,this._maxLength=void 0,this._msg=void 0,this._multiple=!1,this._name=void 0,this._on=void 0,this._pattern=void 0,this._placeholder=void 0,this._readOnly=!1,this._required=!1,this._smartButton=void 0,this._suggestions=void 0,this._syncValueBySelector=void 0,this._tabIndex=void 0,this._tooltipAlign="top",this._touched=!1,this._value=void 0,this.state={_autoComplete:"off",_currentLength:0,_hasValue:!1,_hideError:!1,_id:`id-${(0,a.n)()}`,_label:"",_suggestions:[]},this.controller=new u(this,"email",this.host)}validateAccessKey(e){this.controller.validateAccessKey(e)}validateAlert(e){this.controller.validateAlert(e)}validateAutoComplete(e){this.controller.validateAutoComplete(e)}validateDisabled(e){this.controller.validateDisabled(e)}validateError(e){this.controller.validateError(e)}validateHasCounter(e){this.controller.validateHasCounter(e)}validateHideError(e){this.controller.validateHideError(e)}validateHideLabel(e){this.controller.validateHideLabel(e)}validateHint(e){this.controller.validateHint(e)}validateIcons(e){this.controller.validateIcons(e)}validateId(e){this.controller.validateId(e)}validateLabel(e){this.controller.validateLabel(e)}validateMaxLength(e){this.controller.validateMaxLength(e)}validateMsg(e){this.controller.validateMsg(e)}validateMultiple(e){this.controller.validateMultiple(e)}validateName(e){this.controller.validateName(e)}validateOn(e){this.controller.validateOn(e)}validatePattern(e){this.controller.validatePattern(e)}validatePlaceholder(e){this.controller.validatePlaceholder(e)}validateReadOnly(e){this.controller.validateReadOnly(e)}validateRequired(e){this.controller.validateRequired(e)}validateSuggestions(e){this.controller.validateSuggestions(e)}validateSmartButton(e){this.controller.validateSmartButton(e)}validateSyncValueBySelector(e){this.controller.validateSyncValueBySelector(e)}validateTabIndex(e){this.controller.validateTabIndex(e)}validateTouched(e){this.controller.validateTouched(e)}validateValue(e){this.controller.validateValue(e)}componentWillLoad(){this._alert=!0===this._alert,this._touched=!0===this._touched,this.controller.componentWillLoad(),this.state._hasValue=!!this.state._value,this.controller.addValueChangeListener((e=>this.state._hasValue=!!e))}get host(){return(0,i.g)(this)}static get watchers(){return{_accessKey:["validateAccessKey"],_alert:["validateAlert"],_autoComplete:["validateAutoComplete"],_disabled:["validateDisabled"],_error:["validateError"],_hasCounter:["validateHasCounter"],_hideError:["validateHideError"],_hideLabel:["validateHideLabel"],_hint:["validateHint"],_icons:["validateIcons"],_id:["validateId"],_label:["validateLabel"],_maxLength:["validateMaxLength"],_msg:["validateMsg"],_multiple:["validateMultiple"],_name:["validateName"],_on:["validateOn"],_pattern:["validatePattern"],_placeholder:["validatePlaceholder"],_readOnly:["validateReadOnly"],_required:["validateRequired"],_suggestions:["validateSuggestions"],_smartButton:["validateSmartButton"],_syncValueBySelector:["validateSyncValueBySelector"],_tabIndex:["validateTabIndex"],_touched:["validateTouched"],_value:["validateValue"]}}};p.style={default:"/*\n * This file contains all rules for accessibility.\n */\n@layer kol-global {\n  :host {\n    /*\n     * Minimum size of interactive elements.\n     */\n    --a11y-min-size: 44px;\n    /*\n     * No element should be used without a background and font color whose contrast ratio has\n     * not been checked. By initially setting the background color to white and the font color\n     * to black, the contrast ratio is ensured and explicit adjustment is forced.\n     */\n    background-color: white;\n    color: black;\n    /*\n     * Verdana is an accessible font that can be used without requiring additional loading time.\n     */\n    font-family: Verdana;\n  }\n  * {\n    /*\n     * This rule enables the word dividing for all texts. That is important for high zoom levels.\n     */\n    hyphens: auto;\n    /*\n     * Letter spacing is required for all texts.\n     */\n    letter-spacing: inherit;\n    /*\n     * This rule enables the word dividing for all texts. That is important for high zoom levels.\n     */\n    word-break: break-word;\n    /*\n     * Word spacing is required for all texts.\n     */\n    word-spacing: inherit;\n  }\n  /*\n   * All interactive elements should have a minimum size of 44px.\n   */\n  /* input:not([type='checkbox'], [type='radio'], [type='range']), */\n  /* option, */\n  /* select, */\n  /* textarea, */\n  [role=button],\n  button:not([role=link]),\n  .kol-input .input {\n    min-height: var(--a11y-min-size);\n    min-width: var(--a11y-min-size);\n  }\n  /*\n   * Some interactive elements should not inherit the font-family and font-size.\n   */\n  a,\n  button,\n  h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6,\n  input,\n  option,\n  select,\n  textarea {\n    /*\n     * All elements should inherit the font family from his parent element.\n     */\n    font-family: inherit;\n    /*\n     * All elements should inherit the font size from his parent element.\n     */\n    font-size: inherit;\n  }\n}\n/**\n * Sometimes we need the semantic element for accessibility reasons,\n * but we don't want to show it.\n *\n * - https://www.a11yproject.com/posts/how-to-hide-content/\n */\n.visually-hidden {\n  clip: rect(0 0 0 0);\n  clip-path: inset(50%);\n  height: 1px;\n  overflow: hidden;\n  position: absolute;\n  white-space: nowrap;\n  width: 1px;\n}\n\n@layer kol-global {\n  /*\n   * Dieses CSS stellt sicher, dass der Standard-Style\n   * von A und Button resettet werden.\n   */\n  :is(a, button) {\n    background-color: transparent;\n    border: none;\n    margin: 0;\n    padding: 0;\n    width: 100%; /* 100% needed for custom width from outside */\n  }\n  /*\n   * Ensure elements with hidden attribute to be actually not visible\n   * @see https://meowni.ca/hidden.is.a.lie.html\n   */\n  [hidden] {\n    display: none !important;\n  }\n}\n@layer kol-global {\n  :host {\n    /*\n     * The max-width is needed to prevent the table from overflowing the\n     * parent node, if the table is wider than the parent node.\n     */\n    max-width: 100%;\n  }\n  * {\n    /*\n     * We prefer to box-sizing: border-box for all elements.\n     */\n    box-sizing: border-box;\n  }\n  /* KolSpan is a layout component with icons in all directions and a label text in the middle. */\n  .kol-span-wc {\n    display: grid;\n    place-items: center;\n  }\n  /* The sub span in KolSpan is the horizontal span with icon left and right and the label text in the middle. */\n  .kol-span-wc > span {\n    display: flex;\n    place-items: center;\n  }\n  a,\n  button {\n    cursor: pointer;\n  }\n  .hidden {\n    display: none;\n    visibility: hidden;\n  }\n  /* This is the text label. */\n  .hide-label > .kol-span-wc > span > span {\n    display: none;\n  }\n  /* Reset browser agent style. */\n  button:disabled {\n    color: unset;\n  }\n  .disabled label,\n  .disabled:focus-within label,\n  [aria-disabled=true],\n  [aria-disabled=true]:focus,\n  [disabled],\n  [disabled]:focus {\n    cursor: not-allowed;\n    opacity: 0.5;\n    outline: none;\n  }\n  [aria-disabled=true]:focus .kol-span-wc,\n  [disabled]:focus .kol-span-wc {\n    outline: none !important;\n  }\n}\n@layer kol-component {\n  .required label > span::after,\n  .required legend > span::after {\n    content: \"*\";\n  }\n}\n@layer kol-component {\n  :host {\n    display: block;\n  }\n}\n@layer kol-component {\n  input,\n  textarea {\n    cursor: text;\n  }\n  input[type=checkbox],\n  input[type=color],\n  input[type=file],\n  input[type=radio],\n  input[type=range],\n  label,\n  option,\n  select {\n    cursor: pointer;\n  }\n  /* input[type='checkbox'], */\n  /* input[type='radio'], */\n  /* input[type='range'], */\n  input[type=color],\n  input[type=date],\n  input[type=datetime-local],\n  input[type=email],\n  input[type=file],\n  input[type=month],\n  input[type=number],\n  input[type=password],\n  input[type=search],\n  input[type=tel],\n  input[type=text],\n  input[type=time],\n  input[type=url],\n  input[type=week],\n  select,\n  select[multiple] option,\n  textarea {\n    font-size: calc(16rem / var(--kolibri-root-font-size, 16));\n    width: 100%;\n  }\n  /* needed hack for vertical alignment */\n  input[type=file] {\n    padding: calc((var(--a11y-min-size) - (16rem / var(--kolibri-root-font-size, 16))) / 10) 0.5em;\n  }\n  /* needed hack for vertical alignment */\n  select[multiple] option {\n    padding: calc((var(--a11y-min-size) - (16rem / var(--kolibri-root-font-size, 16))) / 2) 0.5em;\n  }\n}\n@layer kol-component {\n  .kol-input {\n    display: grid;\n  }\n  .kol-input .input-slot {\n    flex-grow: 1;\n  }\n  input:not([type=checkbox], [type=radio]),\n  select:not([multiple], [size]) {\n    height: 2.75em;\n  }\n  input:focus,\n  option:focus,\n  select:focus,\n  textarea:focus {\n    outline: 0;\n  }\n  .input {\n    display: flex;\n    align-items: center;\n  }\n  .input > .kol-icon {\n    display: grid;\n    height: var(--a11y-min-size);\n    place-items: center;\n  }\n  .kol-input.required .input-tooltip .span-label::after {\n    content: \"*\";\n  }\n}\n/*\n * This file contains all rules for accessibility.\n */\n@layer kol-global {\n  :host {\n    /*\n     * Minimum size of interactive elements.\n     */\n    --a11y-min-size: 44px;\n    /*\n     * No element should be used without a background and font color whose contrast ratio has\n     * not been checked. By initially setting the background color to white and the font color\n     * to black, the contrast ratio is ensured and explicit adjustment is forced.\n     */\n    background-color: white;\n    color: black;\n    /*\n     * Verdana is an accessible font that can be used without requiring additional loading time.\n     */\n    font-family: Verdana;\n  }\n  * {\n    /*\n     * This rule enables the word dividing for all texts. That is important for high zoom levels.\n     */\n    hyphens: auto;\n    /*\n     * Letter spacing is required for all texts.\n     */\n    letter-spacing: inherit;\n    /*\n     * This rule enables the word dividing for all texts. That is important for high zoom levels.\n     */\n    word-break: break-word;\n    /*\n     * Word spacing is required for all texts.\n     */\n    word-spacing: inherit;\n  }\n  /*\n   * All interactive elements should have a minimum size of 44px.\n   */\n  /* input:not([type='checkbox'], [type='radio'], [type='range']), */\n  /* option, */\n  /* select, */\n  /* textarea, */\n  [role=button],\n  button:not([role=link]),\n  .kol-input .input {\n    min-height: var(--a11y-min-size);\n    min-width: var(--a11y-min-size);\n  }\n  /*\n   * Some interactive elements should not inherit the font-family and font-size.\n   */\n  a,\n  button,\n  h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6,\n  input,\n  option,\n  select,\n  textarea {\n    /*\n     * All elements should inherit the font family from his parent element.\n     */\n    font-family: inherit;\n    /*\n     * All elements should inherit the font size from his parent element.\n     */\n    font-size: inherit;\n  }\n}\n/**\n * Sometimes we need the semantic element for accessibility reasons,\n * but we don't want to show it.\n *\n * - https://www.a11yproject.com/posts/how-to-hide-content/\n */\n.visually-hidden {\n  clip: rect(0 0 0 0);\n  clip-path: inset(50%);\n  height: 1px;\n  overflow: hidden;\n  position: absolute;\n  white-space: nowrap;\n  width: 1px;\n}\n\n@layer kol-global {\n  /*\n   * Dieses CSS stellt sicher, dass der Standard-Style\n   * von A und Button resettet werden.\n   */\n  :is(a, button) {\n    background-color: transparent;\n    border: none;\n    margin: 0;\n    padding: 0;\n    width: 100%; /* 100% needed for custom width from outside */\n  }\n  /*\n   * Ensure elements with hidden attribute to be actually not visible\n   * @see https://meowni.ca/hidden.is.a.lie.html\n   */\n  [hidden] {\n    display: none !important;\n  }\n}\n@layer kol-global {\n  :host {\n    /*\n     * The max-width is needed to prevent the table from overflowing the\n     * parent node, if the table is wider than the parent node.\n     */\n    max-width: 100%;\n  }\n  * {\n    /*\n     * We prefer to box-sizing: border-box for all elements.\n     */\n    box-sizing: border-box;\n  }\n  /* KolSpan is a layout component with icons in all directions and a label text in the middle. */\n  .kol-span-wc {\n    display: grid;\n    place-items: center;\n  }\n  /* The sub span in KolSpan is the horizontal span with icon left and right and the label text in the middle. */\n  .kol-span-wc > span {\n    display: flex;\n    place-items: center;\n  }\n  a,\n  button {\n    cursor: pointer;\n  }\n  .hidden {\n    display: none;\n    visibility: hidden;\n  }\n  /* This is the text label. */\n  .hide-label > .kol-span-wc > span > span {\n    display: none;\n  }\n  /* Reset browser agent style. */\n  button:disabled {\n    color: unset;\n  }\n  .disabled label,\n  .disabled:focus-within label,\n  [aria-disabled=true],\n  [aria-disabled=true]:focus,\n  [disabled],\n  [disabled]:focus {\n    cursor: not-allowed;\n    opacity: 0.5;\n    outline: none;\n  }\n  [aria-disabled=true]:focus .kol-span-wc,\n  [disabled]:focus .kol-span-wc {\n    outline: none !important;\n  }\n}\n@layer kol-component {\n  :host {\n    display: block;\n  }\n}\n@layer kol-component {\n  .kol-alert-wc {\n    display: grid;\n  }\n  .kol-alert-wc .heading {\n    display: flex;\n    place-items: center;\n  }\n  .kol-alert-wc .heading > div {\n    flex-grow: 1;\n  }\n  .close {\n    /* Visible with forced colors */\n    outline: transparent solid 1px;\n  }\n}\n@layer kol-component {\n  :host {\n    font-size: calc(16rem / var(--kolibri-root-font-size, 16));\n  }\n}"}},78594:(e,t,n)=>{n.d(t,{v:()=>a});var i=n(788);const a=(e,t)=>{(0,i.g)(e,"_suggestions",(e=>"string"==typeof e||"number"==typeof e),t,void 0,{hooks:{afterPatch:e=>{Array.isArray(e)&&e.length&&(0,i.a)("Property suggestions: Options have accessibility issues in how browsers implemented them and should not be used for now.")}}})}}}]);