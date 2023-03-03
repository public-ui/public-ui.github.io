/*! For license information please see 3578.js.LICENSE.txt */
"use strict";(self.webpackChunk_public_ui_designer=self.webpackChunk_public_ui_designer||[]).push([[3578],{72219:(t,e,o)=>{o.d(e,{a:()=>r,p:()=>s});var i=o(9634),a=o(9694),n=o(44594);const l=t=>{for((0,a.b)()&&((0,i.d)("↓ Search form element start."),console.log(t));t instanceof HTMLElement&&"FORM"!==t.tagName&&"KOL-FORM"!==t.tagName;)t=t.parentElement instanceof HTMLElement?t.parentElement:t.parentNode instanceof ShadowRoot?t.parentNode.host:null,(0,a.b)()&&console.log(t);return(0,a.b)()&&(0,i.d)("↑ Search form element finished."),t},r=(t={})=>{const e=l(t.form);if(e instanceof HTMLElement){const t=new Event("reset",{bubbles:!0,cancelable:!0});if("FORM"===e.tagName)(0,n.f)(t,e),e.dispatchEvent(t);else if("KOL-FORM"===e.tagName){(0,n.f)(t,n.K.querySelector("form",e));const o=e;"object"==typeof o._on&&null!==typeof o._on&&"function"==typeof o._on.onReset&&o._on.onReset(t)}}},s=(t={})=>{const e=l(t.form);if(e instanceof HTMLElement){const t=new SubmitEvent("submit",{bubbles:!0,cancelable:!0,submitter:e});if("FORM"===e.tagName)(0,n.f)(t,e),e.dispatchEvent(t);else if("KOL-FORM"===e.tagName){(0,n.f)(t,n.K.querySelector("form",e));const o=e;"object"==typeof o._on&&null!==typeof o._on&&"function"==typeof o._on.onSubmit&&o._on.onSubmit(t)}}}},33456:(t,e,o)=>{o.d(e,{I:()=>l});var i=o(9634),a=o(44594),n=o(59122);class l extends n.I{constructor(t,e,o){super(t,e,o),this.handleHiddenLabelAndRequired=()=>{!0===this.component.state._hideLabel&&!0===this.component.state._required?((0,i.d)("[KolInput*] Wenn man das Label ausblendet, dann kann der sehende Nutzer:in nicht mehr erkennen, ob die Eingabe erforderlich ist."),this.hideLabel=!1):this.hideLabel=!0===this.component.state._hideLabel},this.component=t}validateAutoComplete(t){(0,a.a)(this.component,"_autoComplete",(t=>"string"==typeof t&&("on"===t||"off"===t)),new Set(["on | off"]),t)}validateHideLabel(t){(0,a.b)(this.component,"_hideLabel",t,{hooks:{afterPatch:this.handleHiddenLabelAndRequired}})}validateMaxLength(t){(0,a.e)(this.component,"_maxLength",t,{min:0})}validatePattern(t){(0,a.w)(this.component,"_pattern",t)}validatePlaceholder(t){(0,a.w)(this.component,"_placeholder",t)}validateReadOnly(t){(0,a.b)(this.component,"_readOnly",t)}validateRequired(t){(0,a.b)(this.component,"_required",t,{hooks:{afterPatch:this.handleHiddenLabelAndRequired}})}validateSize(t){(0,a.e)(this.component,"_size",t,{min:1})}validateValue(t){(0,a.w)(this.component,"_value",t)}componentWillLoad(){super.componentWillLoad(),this.validateAutoComplete(this.component._autoComplete),this.validateMaxLength(this.component._maxLength),this.validatePattern(this.component._pattern),this.validatePlaceholder(this.component._placeholder),this.validateReadOnly(this.component._readOnly),this.validateRequired(this.component._required),this.validateSize(this.component._size),this.validateValue(this.component._value)}onBlur(t){this.component.state=Object.assign(Object.assign({},this.component.state),{_placeholder:this.placeholderCache}),this.placeholderCache=void 0,super.onBlur(t)}onFocus(t){this.placeholderCache=this.component.state._placeholder,this.component.state=Object.assign(Object.assign({},this.component.state),{_placeholder:void 0}),super.onFocus(t)}}},37513:(t,e,o)=>{o.d(e,{I:()=>c,g:()=>r});var i=o(9634),a=o(44594),n=o(43529),l=o(9694);const r=t=>{const e="string"==typeof t._error&&t._error.length>0&&!0===t._touched,o="string"==typeof t._hint&&t._hint.length>0,i=[];return!0===e&&i.push(`${t._id}-error`),!0===o&&i.push(`${t._id}-hint`),{hasError:e,hasHint:o,ariaDiscribedBy:i}},s=(0,l.b)();class d{constructor(t,e,o){var i,a,n,l,r;if(this.syncFormAssociatedName=()=>{var t;s&&(null===(t=this.formAssociated)||void 0===t||t.setAttribute("name",this.component.state._name||this.component.state._id))},this.setFormAssociatedValue=(t=null)=>{var e;s&&(null===(e=this.formAssociated)||void 0===e||e.setAttribute("value",t))},this.component=t,this.name=e,this.host=o,s){this.formAssociated=document.createElement("input"),this.formAssociated.setAttribute("type","hidden");const t=(null===(i=this.host)||void 0===i?void 0:i.children)||[];for(let e=0;e<t.length;e++)"INPUT"===(null===(a=this.host)||void 0===a?void 0:a.children[e].tagName)&&(null===(n=this.host)||void 0===n||n.removeChild(null===(l=this.host)||void 0===l?void 0:l.children[e]));null===(r=this.host)||void 0===r||r.appendChild(this.formAssociated)}}validateAlert(t){(0,a.b)(this.component,"_alert",t)}validateTouched(t){(0,a.b)(this.component,"_touched",t)}componentWillLoad(){this.validateAlert(this.component._alert),this.validateTouched(this.component._touched)}}class c extends d{constructor(t,e,o){super(t,e,o),this.hideLabel=!1,this.onFacade={onBlur:this.onBlur.bind(this),onChange:this.onChange.bind(this),onClick:this.onClick.bind(this),onFocus:this.onFocus.bind(this)},this.component=t}validateAccessKey(t){(0,a.w)(this.component,"_accessKey",t)}validateAdjustHeight(t){(0,a.b)(this.component,"_adjustHeight",t)}validateDisabled(t){(0,a.b)(this.component,"_disabled",t),!0===t&&(0,i.e)()}validateError(t){(0,a.w)(this.component,"_error",t)}validateHideLabel(t){(0,a.b)(this.component,"_hideLabel",t)}validateHint(t){(0,a.w)(this.component,"_hint",t)}validateId(t){(0,a.w)(this.component,"_id",t,{hooks:{afterPatch:this.syncFormAssociatedName}}),void 0===t&&(0,i.d)("Eine eindeutige ID an den Eingabefeldern ist nicht zwingend erforderlich, könnte aber für die E2E-Tests relevant sein.")}validateName(t){(0,a.w)(this.component,"_name",t,{hooks:{afterPatch:this.syncFormAssociatedName}}),void 0===t&&(0,i.d)("Ein Name an den Eingabefeldern ist nicht zwingend erforderlich, kann aber für die Autocomplete-Funktion des Eingabefeldes relevant sein.")}validateOn(t){"object"==typeof t&&(0,a.s)(this.component,"_on",t)}validateSmartButton(t){(0,a.o)(t,(()=>{try{t=(0,a.p)(t)}catch(t){}(0,a.s)(this.component,"_smartButton",t)}))}validateTabIndex(t){(0,n.v)(this.component,t)}componentWillLoad(){super.componentWillLoad(),this.validateAccessKey(this.component._accessKey),this.validateAdjustHeight(this.component._adjustHeight),this.validateError(this.component._error),this.validateDisabled(this.component._disabled),this.validateHideLabel(this.component._hideLabel),this.validateHint(this.component._hint),this.validateId(this.component._id),this.validateName(this.component._name),this.validateSmartButton(this.component._smartButton),this.validateOn(this.component._on),this.validateTabIndex(this.component._tabIndex),this.syncFormAssociatedName()}onBlur(t){var e;this.component._alert=!0,this.component._touched=!0,"function"==typeof(null===(e=this.component._on)||void 0===e?void 0:e.onBlur)&&this.component._on.onBlur(t)}onChange(t){var e;this.setFormAssociatedValue(t.target.value),"function"==typeof(null===(e=this.component._on)||void 0===e?void 0:e.onChange)&&this.component._on.onChange(t,t.target.value)}onClick(t){var e;"function"==typeof(null===(e=this.component._on)||void 0===e?void 0:e.onClick)&&this.component._on.onClick(t)}onFocus(t){var e;this.component._alert=!0,"function"==typeof(null===(e=this.component._on)||void 0===e?void 0:e.onFocus)&&this.component._on.onFocus(t)}setValue(t,e){var o;this.setFormAssociatedValue(e),"function"==typeof(null===(o=this.component._on)||void 0===o?void 0:o.onChange)&&this.component._on.onChange(t,e)}}},59122:(t,e,o)=>{o.d(e,{I:()=>s});var i=o(44594),a=o(6715),n=o(46479),l=o(37513);const r=(t,e)=>{const o=t;"object"==typeof o&&null!==o&&((0,a.b)(o.right,1)&&(o.right={icon:o.right}),(0,a.b)(o.left,1)&&(o.left={icon:o.left}),e.set("_icon",o))};class s extends l.I{constructor(t,e,o){super(t,e,o),this.component=t}validateIcon(t){(0,i.o)(t,(()=>{try{t=(0,i.p)(t)}catch(t){}(0,i.a)(this.component,"_icon",(t=>"object"==typeof t&&null!==t&&((0,a.b)(t.left,1)||(0,n.i)(t.left)||(0,a.b)(t.right,1)||(0,n.i)(t.right))),new Set(["KoliBriHorizontalIcon"]),t,{hooks:{beforePatch:r},required:!0})}))}componentWillLoad(){super.componentWillLoad(),this.validateIcon(this.component._icon)}}},46479:(t,e,o)=>{o.d(e,{i:()=>s,v:()=>d,w:()=>c});var i=o(9634),a=o(44594),n=o(6715);const l=(t,e,o)=>{(0,n.d)(o)?t[e]=o:(0,n.b)(o,1)&&(t[e]={icon:o})},r=t=>{var e,o,i,a,r,s,d;if(null===(e=t.nextState)||void 0===e?void 0:e.has("_icon")){const e=null===(o=t.nextState)||void 0===o?void 0:o.get("_icon"),r=(null===(i=t.nextState)||void 0===i?void 0:i.get("_iconAlign"))||t.state._iconAlign;null===(a=t.nextState)||void 0===a||a.set("_icon",((t,e)=>{let o={};return(0,n.b)(t,1)?o="right"===e?{right:{icon:t}}:{left:{icon:t}}:"object"==typeof t&&null!==t&&(l(o,"top",t.top),l(o,"right",t.right),l(o,"bottom",t.bottom),l(o,"left",t.left)),o})(e,r))}else if(null===(r=t.nextState)||void 0===r?void 0:r.has("_iconAlign")){const e=t.state._iconAlign;null===(s=t.nextState)||void 0===s||s.set("_icon",{[e]:void 0,[null===(d=t.nextState)||void 0===d?void 0:d.get("_iconAlign")]:t.state._icon[e]})}},s=t=>"object"==typeof t&&null!==t&&(void 0===t.style||(0,n.c)(t.style))&&(0,n.b)(t.icon,1),d=(t,e)=>{(0,a.o)(e,(()=>{try{e=(0,a.p)(e)}catch(t){}(0,a.a)(t,"_icon",(t=>null===t||(0,n.b)(t,1)||"object"==typeof t&&null!==t&&((0,n.b)(t.left,1)||s(t.left)||(0,n.b)(t.right,1)||s(t.right)||(0,n.b)(t.top,1)||s(t.top)||(0,n.b)(t.bottom,1)||s(t.bottom))),new Set(["KoliBriIcon"]),e,{hooks:{beforePatch:(e,o)=>{null===e&&o.set("_icon",{}),r(t)}},required:!0})}))},c=(t,e)=>{(0,a.a)(t,"_iconAlign",(t=>"left"===t||"right"===t),new Set(["Alignment {left, right, top, bottom}"]),e,{hooks:{beforePatch:()=>{r(t)},afterPatch:t=>{(0,i.c)(`Das Property _icon-align bzw. _iconAlign ist veraltet (value: ${t}). Die Ausrichtung der Icon's kann jetzt direkt über das _icon-Property vorgenommen werden. (v1.1.10: https://public-ui.github.io/docs/changelog#1110---11112022)`)}}})}},53578:(t,e,o)=>{o.r(e),o.d(e,{kol_input_password:()=>d});var i=o(99459),a=o(9634),n=o(6715),l=o(72219),r=o(37513),s=o(33456);const d=class{render(){const{ariaDiscribedBy:t}=(0,r.g)(this.state);return(0,i.h)(i.H,null,(0,i.h)("kol-input",{_disabled:this.state._disabled,_error:this.state._error,_hideLabel:this.state._hideLabel,_hint:this.state._hint,_icon:this.state._icon,_id:this.state._id,_readOnly:this.state._readOnly,_required:this.state._required,_smartButton:this.state._smartButton,_touched:this.state._touched},(0,i.h)("span",{slot:"label"},(0,i.h)("slot",null)),(0,i.h)("input",Object.assign({ref:this.catchRef,part:"input",title:"",accessKey:this.state._accessKey,"aria-describedby":t.length>0?t.join(" "):void 0,"aria-labelledby":`${this.state._id}-label`,autoCapitalize:"off",autoComplete:this.state._autoComplete,autoCorrect:"off",disabled:this.state._disabled,id:this.state._id,maxlength:this.state._maxLength,name:this.state._name,pattern:this.state._pattern,placeholder:this.state._placeholder,readOnly:this.state._readOnly,required:this.state._required,size:this.state._size,slot:"input",spellcheck:"false",type:"password",value:this.state._value},this.controller.onFacade,{onKeyUp:this.onKeyUp}))))}constructor(t){(0,i.r)(this,t),this.catchRef=t=>{this.ref=t,(0,n.a)(this.host,this.ref)},this.onKeyUp=t=>{"Enter"===t.code?(0,l.p)({form:this.host,ref:this.ref}):this.controller.onFacade.onClick(t)},this._accessKey=void 0,this._alert=!0,this._autoComplete=void 0,this._disabled=void 0,this._error=void 0,this._hideLabel=void 0,this._hint="",this._icon=void 0,this._id=void 0,this._maxLength=void 0,this._name=void 0,this._on=void 0,this._pattern=void 0,this._placeholder=void 0,this._readOnly=void 0,this._required=void 0,this._size=void 0,this._smartButton=void 0,this._tabIndex=void 0,this._touched=!1,this._value=void 0,this.state={_autoComplete:"off",_id:"⚠"},this.controller=new s.I(this,"password",this.host)}validateAccessKey(t){this.controller.validateAccessKey(t)}validateAlert(t){this.controller.validateAlert(t)}validateAutoComplete(t){this.controller.validateAutoComplete(t),"on"===t&&(0,a.d)("[KolInputPassword] Die Option 'autocomplete' sollte bei einem Passwort-Eingabefeld nicht auf \"on\" gesetzt werden.")}validateDisabled(t){this.controller.validateDisabled(t)}validateError(t){this.controller.validateError(t)}validateHideLabel(t){this.controller.validateHideLabel(t)}validateHint(t){this.controller.validateHint(t)}validateIcon(t){this.controller.validateIcon(t)}validateId(t){this.controller.validateId(t)}validateMaxLength(t){this.controller.validateMaxLength(t)}validateName(t){this.controller.validateName(t)}validateOn(t){this.controller.validateOn(t)}validatePattern(t){this.controller.validatePattern(t)}validatePlaceholder(t){this.controller.validatePlaceholder(t)}validateReadOnly(t){this.controller.validateReadOnly(t)}validateRequired(t){this.controller.validateRequired(t)}validateSize(t){this.controller.validateSize(t)}validateSmartButton(t){this.controller.validateSmartButton(t)}validateTabIndex(t){this.controller.validateTabIndex(t)}validateTouched(t){this.controller.validateTouched(t)}validateValue(t){this.controller.validateValue(t)}componentWillLoad(){this._alert=!0===this._alert,this._touched=!0===this._touched,this.controller.componentWillLoad()}get host(){return(0,i.g)(this)}static get watchers(){return{_accessKey:["validateAccessKey"],_alert:["validateAlert"],_autoComplete:["validateAutoComplete"],_disabled:["validateDisabled"],_error:["validateError"],_hideLabel:["validateHideLabel"],_hint:["validateHint"],_icon:["validateIcon"],_id:["validateId"],_maxLength:["validateMaxLength"],_name:["validateName"],_on:["validateOn"],_pattern:["validatePattern"],_placeholder:["validatePlaceholder"],_readOnly:["validateReadOnly"],_required:["validateRequired"],_size:["validateSize"],_smartButton:["validateSmartButton"],_tabIndex:["validateTabIndex"],_touched:["validateTouched"],_value:["validateValue"]}}};d.style={default:":host{--kolibri-border-color:#666;--kolibri-border-radius:0.125rem;--kolibri-border-width:1px;--kolibri-color-error:#f44336;--kolibri-color-info:#2196f3;--kolibri-color-success:#4caf50;--kolibri-color-warning:#ff9800;--kolibri-color-primary:#3f51b5;--kolibri-color-secondary:#ff4081;--kolibri-color-normal:#9e9e9e;--kolibri-color-danger:#f44336;--kolibri-color-ghost:#f5f5f5;--kolibri-color-disabled:#bdbdbd;--kolibri-color-text:#222222;--kolibri-color-visited:#9c27b0;--kolibri-font-family:Verdana, Arial, Tahoma, Helvetica, sans-serif;--kolibri-font-size:16px;--kolibri-spacing:0.25rem}:host{font-family:inherit;font-size:inherit}:host *{hyphens:auto;letter-spacing:inherit;word-break:break-word;word-spacing:inherit}:host{font-family:var(--kolibri-font-family);font-size:inherit}*{box-sizing:border-box}kol-icon{color:inherit}kol-span-wc{display:grid;place-items:center;width:100%}kol-span-wc>span{display:flex;gap:var(--kolibri-spacing);place-items:center}a{display:inline-flex;place-items:baseline}button{background-color:transparent;border-width:0;margin:0;min-height:44px;min-width:44px;padding:0}a,button,input,select,textarea{cursor:pointer}a.icon-only>kol-span-wc>span>span,:host button.icon-only>kol-span-wc>span>span{display:none}.kol-required span::after{content:'*'}.kol-disabled{opacity:0.5}.kol-cursor-not-allowed,.kol-cursor-not-allowed *{cursor:not-allowed}input[type='color'],input[type='date'],input[type='datetime-local'],input[type='email'],input[type='file'],input[type='month'],input[type='number'],input[type='password'],input[type='search'],input[type='tel'],input[type='text'],input[type='time'],input[type='url'],input[type='week'],select,textarea{background-color:white;display:block;font-size:1em;line-height:1.5em;padding:0.5em}input[type='color']{height:2.5em;padding:0.25em 0.5em}textarea{padding:0.5em}input,select,textarea{border-color:var(--kolibri-border-color);border-style:solid;border-width:1px}input input.error,input select.error,input textarea.error,select input.error,select select.error,select textarea.error,textarea input.error,textarea select.error,textarea textarea.error{border-color:var(--kolibri-border-error)}input input:focus,input input:hover,input select:focus,input select:hover,input textarea:focus,input textarea:hover,select input:focus,select input:hover,select select:focus,select select:hover,select textarea:focus,select textarea:hover,textarea input:focus,textarea input:hover,textarea select:focus,textarea select:hover,textarea textarea:focus,textarea textarea:hover{border-color:#999}input:not([type='checkbox']),option,select,textarea{font-size:inherit;letter-spacing:inherit;word-spacing:inherit}kol-input{display:grid;gap:calc(2 * var(--kolibri-spacing))}input,select,textarea{background-color:white;border-color:var(--kolibri-border-color);border-radius:var(--kolibri-border-radius);border-style:solid;border-width:var(--kolibri-border-width);font-size:1em;font-family:var(--kolibri-font-family-sans);line-height:1.5em;overflow:hidden;width:100%}input,select:not([multiple]){height:2.75em}input::placeholder{color:var(--kolibri-color-normal)}input:hover{border-color:var(--kolibri-color-primary)}input:not([type='color']):read-only,input:disabled,select:read-only,select:disabled,textarea:read-only,textarea:disabled{cursor:not-allowed}.required label>span::after{content:'*';padding-left:var(--kolibri-spacing)}.icons{display:flex;justify-content:space-between;height:0}.icons>kol-icon{display:block;margin:0.75em;height:1em}.icon-left input,.icon-left select{padding-left:2em}.icon-right input,.icon-right select{padding-right:2em}kol-button-wc{position:relative;float:right;z-index:1000;margin-top:-44px}kol-button-wc button{background-color:transparent;cursor:pointer}.icon-right kol-button-wc{margin-right:44px}.disabled{opacity:0.5}select[multiple],textarea{overflow:auto}textarea{display:block}select option{margin:var(--kolibri-spacing) 0;padding:0.5em;border-radius:0.25em;cursor:pointer}select option:disabled{cursor:not-allowed}option:active:not(:disabled),option:checked:not(:disabled),option:focus:not(:disabled),option:hover:not(:disabled){background-color:var(--kolibri-color-primary);color:white}"}},43529:(t,e,o)=>{o.d(e,{v:()=>l});var i=o(9634),a=o(44594);const n={hooks:{afterPatch:t=>{-1!==t&&0!==t&&(0,i.a)("Don’t Use Tabindex Greater than 0: https://adrianroselli.com/2014/11/dont-use-tabindex-greater-than-0.html")}}},l=(t,e)=>{(0,a.e)(t,"_tabIndex",e,n)}}}]);