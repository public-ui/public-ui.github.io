/*! For license information please see 9684.aaf8ce95.js.LICENSE.txt */ "use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[9684],{75135:(t,e,o)=>{o.d(e,{a:()=>n,p:()=>r});var i=o(28700),a=o(48734),s=o(65717);const l=t=>{for((0,a.b)()&&((0,i.d)("\u2193 Search form element start."),console.log(t));t instanceof HTMLElement&&"FORM"!==t.tagName&&"KOL-FORM"!==t.tagName;)t=t.parentElement instanceof HTMLElement?t.parentElement:t.parentNode instanceof ShadowRoot?t.parentNode.host:null,(0,a.b)()&&console.log(t);return(0,a.b)()&&(0,i.d)("\u2191 Search form element finished."),t},n=(t={})=>{const e=l(t.form);if(e instanceof HTMLElement){const t=new Event("reset",{bubbles:!0,cancelable:!0});if("FORM"===e.tagName)(0,s.f)(t,e),e.dispatchEvent(t);else if("KOL-FORM"===e.tagName){(0,s.f)(t,s.K.querySelector("form",e));const o=e;"object"==typeof o._on&&null!==typeof o._on&&"function"==typeof o._on.onReset&&o._on.onReset(t)}}},r=(t={})=>{const e=l(t.form);if(e instanceof HTMLElement){const t=new SubmitEvent("submit",{bubbles:!0,cancelable:!0,submitter:e});if("FORM"===e.tagName)(0,s.f)(t,e),e.dispatchEvent(t);else if("KOL-FORM"===e.tagName){(0,s.f)(t,s.K.querySelector("form",e));const o=e;"object"==typeof o._on&&null!==typeof o._on&&"function"==typeof o._on.onSubmit&&o._on.onSubmit(t)}}}},49419:(t,e,o)=>{o.d(e,{I:()=>l});var i=o(28700),a=o(65717),s=o(60341);class l extends s.I{constructor(t,e,o){super(t,e,o),this.handleHiddenLabelAndRequired=()=>{!0===this.component.state._hideLabel&&!0===this.component.state._required?((0,i.d)("[KolInput*] Wenn man das Label ausblendet, dann kann der sehende Nutzer:in nicht mehr erkennen, ob die Eingabe erforderlich ist."),this.hideLabel=!1):this.hideLabel=!0===this.component.state._hideLabel},this.component=t}validateAutoComplete(t){(0,a.a)(this.component,"_autoComplete",(t=>"string"==typeof t&&("on"===t||"off"===t)),new Set(["on | off"]),t)}validateHideLabel(t){(0,a.b)(this.component,"_hideLabel",t,{hooks:{afterPatch:this.handleHiddenLabelAndRequired}})}validateMaxLength(t){(0,a.e)(this.component,"_maxLength",t,{min:0})}validatePattern(t){(0,a.w)(this.component,"_pattern",t)}validatePlaceholder(t){(0,a.w)(this.component,"_placeholder",t)}validateReadOnly(t){(0,a.b)(this.component,"_readOnly",t)}validateRequired(t){(0,a.b)(this.component,"_required",t,{hooks:{afterPatch:this.handleHiddenLabelAndRequired}})}validateSize(t){(0,a.e)(this.component,"_size",t,{min:1})}validateValue(t){(0,a.w)(this.component,"_value",t)}componentWillLoad(){super.componentWillLoad(),this.validateAutoComplete(this.component._autoComplete),this.validateMaxLength(this.component._maxLength),this.validatePattern(this.component._pattern),this.validatePlaceholder(this.component._placeholder),this.validateReadOnly(this.component._readOnly),this.validateRequired(this.component._required),this.validateSize(this.component._size),this.validateValue(this.component._value)}onBlur(t){this.component.state=Object.assign(Object.assign({},this.component.state),{_placeholder:this.placeholderCache}),this.placeholderCache=void 0,super.onBlur(t)}onFocus(t){this.placeholderCache=this.component.state._placeholder,this.component.state=Object.assign(Object.assign({},this.component.state),{_placeholder:void 0}),super.onFocus(t)}}},66399:(t,e,o)=>{o.d(e,{I:()=>s,a:()=>l});var i=o(65717),a=o(49419);class s extends a.I{constructor(t,e,o){super(t,e,o),this.component=t}validateList(t){(0,i.d)(this.component,"_list",(t=>"string"==typeof t),t)}componentWillLoad(){super.componentWillLoad(),this.validateList(this.component._list)}}class l extends s{constructor(t,e,o){super(t,e,o),this.hasError=!1,this.hasList=!1,this.component=t}validateType(t){(0,i.a)(this.component,"_type",(t=>"string"==typeof t&&("text"===t||"search"===t||"url"===t||"tel"===t)),new Set(["String {text, search, url, tel}"]),t)}componentWillLoad(){super.componentWillLoad(),this.validateType(this.component._type)}}},69684:(t,e,o)=>{o.r(e),o.d(e,{kol_input_email:()=>d});var i=o(69491),a=o(19222),s=o(75135),l=o(12489),n=o(65717),r=o(66399);class h extends r.I{constructor(t,e,o){super(t,e,o),this.component=t}validateMultiple(t){(0,n.b)(this.component,"_multiple",t)}componentWillLoad(){super.componentWillLoad(),this.validateMultiple(this.component._multiple)}}const d=class{render(){const{ariaDiscribedBy:t}=(0,l.g)(this.state),e=Array.isArray(this.state._list)&&this.state._list.length>0;return(0,i.h)(i.H,null,(0,i.h)("kol-input",{_alert:this.state._alert,_disabled:this.state._disabled,_error:this.state._error,_hideLabel:this.state._hideLabel,_hint:this.state._hint,_icon:this.state._icon,_id:this.state._id,_list:this.state._list,_readOnly:this.state._readOnly,_required:this.state._required,_smartButton:this.state._smartButton,_touched:this.state._touched},(0,i.h)("span",{slot:"label"},(0,i.h)("slot",null)),(0,i.h)("input",Object.assign({ref:this.catchRef,part:"input",title:"",accessKey:this.state._accessKey,"aria-describedby":t.length>0?t.join(" "):void 0,"aria-labelledby":`${this.state._id}-label`,autoCapitalize:"off",autoComplete:this.state._autoComplete,autoCorrect:"off",disabled:this.state._disabled,multiple:this.state._multiple,id:this.state._id,list:e?`${this.state._id}-list`:void 0,maxlength:this.state._maxLength,name:this.state._name,pattern:this.state._pattern,placeholder:this.state._placeholder,readOnly:this.state._readOnly,required:this.state._required,size:this.state._size,slot:"input",spellcheck:"false",type:"email",value:this.state._value},this.controller.onFacade,{onKeyUp:this.onKeyUp}))))}constructor(t){(0,i.r)(this,t),this.catchRef=t=>{this.ref=t,(0,a.a)(this.host,this.ref)},this.onKeyUp=t=>{"Enter"===t.code?(0,s.p)({form:this.host,ref:this.ref}):this.controller.onFacade.onChange(t)},this._accessKey=void 0,this._alert=!0,this._autoComplete=void 0,this._disabled=void 0,this._error=void 0,this._hideLabel=void 0,this._hint="",this._icon=void 0,this._id=void 0,this._list=void 0,this._maxLength=void 0,this._multiple=void 0,this._name=void 0,this._on=void 0,this._pattern=void 0,this._placeholder=void 0,this._readOnly=void 0,this._required=void 0,this._size=void 0,this._smartButton=void 0,this._tabIndex=void 0,this._touched=!1,this._value=void 0,this.state={_autoComplete:"off",_id:"\u26a0",_list:[]},this.controller=new h(this,"email",this.host)}validateAccessKey(t){this.controller.validateAccessKey(t)}validateAlert(t){this.controller.validateAlert(t)}validateAutoComplete(t){this.controller.validateAutoComplete(t)}validateDisabled(t){this.controller.validateDisabled(t)}validateError(t){this.controller.validateError(t)}validateHideLabel(t){this.controller.validateHideLabel(t)}validateHint(t){this.controller.validateHint(t)}validateIcon(t){this.controller.validateIcon(t)}validateId(t){this.controller.validateId(t)}validateList(t){this.controller.validateList(t)}validateMaxLength(t){this.controller.validateMaxLength(t)}validateMultiple(t){this.controller.validateMultiple(t)}validateName(t){this.controller.validateName(t)}validateOn(t){this.controller.validateOn(t)}validatePattern(t){this.controller.validatePattern(t)}validatePlaceholder(t){this.controller.validatePlaceholder(t)}validateReadOnly(t){this.controller.validateReadOnly(t)}validateRequired(t){this.controller.validateRequired(t)}validateSize(t){this.controller.validateSize(t)}validateSmartButton(t){this.controller.validateSmartButton(t)}validateTabIndex(t){this.controller.validateTabIndex(t)}validateTouched(t){this.controller.validateTouched(t)}validateValue(t){this.controller.validateValue(t)}componentWillLoad(){this._alert=!0===this._alert,this._touched=!0===this._touched,this.controller.componentWillLoad()}get host(){return(0,i.g)(this)}static get watchers(){return{_accessKey:["validateAccessKey"],_alert:["validateAlert"],_autoComplete:["validateAutoComplete"],_disabled:["validateDisabled"],_error:["validateError"],_hideLabel:["validateHideLabel"],_hint:["validateHint"],_icon:["validateIcon"],_id:["validateId"],_list:["validateList"],_maxLength:["validateMaxLength"],_multiple:["validateMultiple"],_name:["validateName"],_on:["validateOn"],_pattern:["validatePattern"],_placeholder:["validatePlaceholder"],_readOnly:["validateReadOnly"],_required:["validateRequired"],_size:["validateSize"],_smartButton:["validateSmartButton"],_tabIndex:["validateTabIndex"],_touched:["validateTouched"],_value:["validateValue"]}}};d.style={default:":host{--kolibri-border-color:#e0e0e0;--kolibri-border-radius:0.125rem;--kolibri-border-width:1px;--kolibri-color-error:#f44336;--kolibri-color-info:#2196f3;--kolibri-color-success:#4caf50;--kolibri-color-warning:#ff9800;--kolibri-color-primary:#3f51b5;--kolibri-color-secondary:#ff4081;--kolibri-color-normal:#9e9e9e;--kolibri-color-danger:#f44336;--kolibri-color-ghost:#f5f5f5;--kolibri-color-disabled:#bdbdbd;--kolibri-color-text:#222222;--kolibri-color-visited:#9c27b0;--kolibri-font-family:Verdana, Arial, Tahoma, Helvetica, sans-serif;--kolibri-font-size:16px;--kolibri-spacing:0.25rem}:host *{font-family:inherit;font-size:inherit;hyphens:auto;letter-spacing:inherit;word-break:break-word;word-spacing:inherit}:host{font-family:var(--kolibri-font-family);font-size:inherit}:host *{box-sizing:border-box}:host kol-icon{color:inherit}:host kol-span-wc{display:grid;place-items:center;width:100%}:host kol-span-wc>span{display:flex;gap:var(--kolibri-spacing);place-items:center}:host button{margin:0;min-height:44px;min-width:44px;padding:0}:host a,:host button,:host input,:host select,:host textarea{cursor:pointer}:host a.icon-only>kol-span-wc>span>span,:host button.icon-only>kol-span-wc>span>span{display:none}:host a{display:inline-flex;place-items:baseline}:host button{background-color:transparent;border-width:0}:host .kol-required span::after{content:'*'}:host input,:host select,:host textarea{border-color:var(--kolibri-border-color);border-style:solid;border-width:1px}:host input input.error,:host input select.error,:host input textarea.error,:host select input.error,:host select select.error,:host select textarea.error,:host textarea input.error,:host textarea select.error,:host textarea textarea.error{border-color:var(--kolibri-border-error)}:host input input:focus,:host input input:hover,:host input select:focus,:host input select:hover,:host input textarea:focus,:host input textarea:hover,:host select input:focus,:host select input:hover,:host select select:focus,:host select select:hover,:host select textarea:focus,:host select textarea:hover,:host textarea input:focus,:host textarea input:hover,:host textarea select:focus,:host textarea select:hover,:host textarea textarea:focus,:host textarea textarea:hover{border-color:#999}:host input:not([type='checkbox']),:host option,:host select,:host textarea{font-size:inherit;letter-spacing:inherit;word-spacing:inherit}:host .kol-disabled{opacity:0.5}:host .kol-cursor-not-allowed,:host .kol-cursor-not-allowed *{cursor:not-allowed}:host input[type='color'],:host input[type='date'],:host input[type='datetime-local'],:host input[type='email'],:host input[type='file'],:host input[type='month'],:host input[type='number'],:host input[type='password'],:host input[type='search'],:host input[type='tel'],:host input[type='text'],:host input[type='time'],:host input[type='url'],:host input[type='week'],:host select,:host textarea{background-color:white;display:block;line-height:1em;padding:0.5em}:host input[type='color']{height:2.5em;padding:0.25em 0.5em}:host textarea{padding:0.5em}"}}}]);