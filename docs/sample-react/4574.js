/*! For license information please see 4574.js.LICENSE.txt */
"use strict";(self.webpackChunk_public_ui_sample_react=self.webpackChunk_public_ui_sample_react||[]).push([[4574],{7544:(t,e,i)=>{i.d(e,{v:()=>l});var a=i(3170);const l=(t,e)=>{(0,a.b)(t,"_hideLabel",e)}},4574:(t,e,i)=>{i.r(e),i.d(e,{kol_input_text:()=>u});var a=i(578),l=i(3170),s=i(7544),o=i(2977),n=i(9953),r=i(1383),d=i(3841),h=i(4174),c=i(7223);(0,o.f)("[KolInputText] Pre- und post-Label für Währung usw.");const u=class{render(){const{ariaDescribedBy:t}=(0,h.g)(this.state),e=Array.isArray(this.state._list)&&this.state._list.length>0,i=!1===this.state._label;return(0,a.h)(a.H,{class:{"has-value":this.state._hasValue}},(0,a.h)("kol-input",{class:{[this.state._type]:!0,"hide-label":!!this.state._hideLabel},_currentLength:this.state._currentLength,_disabled:this.state._disabled,_error:this.state._error,_hasCounter:this.state._hasCounter,_hideLabel:this.state._hideLabel,_hint:this.state._hint,_icon:this.state._icon,_id:this.state._id,_list:this.state._list,_maxLength:this.state._maxLength,_readOnly:this.state._readOnly,_required:this.state._required,_smartButton:this.state._smartButton,_touched:this.state._touched,onClick:()=>{var t;return null===(t=this.ref)||void 0===t?void 0:t.focus()}},(0,a.h)("span",{slot:"label"},i?(0,a.h)("slot",null):this.state._label),(0,a.h)("div",{slot:"input"},(0,a.h)("input",Object.assign({ref:this.catchRef,title:"",accessKey:this.state._accessKey,"aria-describedby":t.length>0?t.join(" "):void 0,"aria-labelledby":`${this.state._id}-label`,autoCapitalize:"off",autoComplete:this.state._autoComplete,autoCorrect:"off",disabled:this.state._disabled,id:this.state._id,list:e?`${this.state._id}-list`:void 0,maxlength:this.state._maxLength,name:this.state._name,pattern:this.state._pattern,placeholder:this.state._placeholder,readOnly:this.state._readOnly,required:this.state._required,size:this.state._size,spellcheck:"false",type:this.state._type,value:this.state._value},this.controller.onFacade,{onKeyUp:this.onKeyUp})),(0,a.h)("kol-tooltip",{"aria-hidden":"true",hidden:i||!this.state._hideLabel,_align:this._tooltipAlign,_id:`${this.state._id}-tooltip`,_label:"string"==typeof this.state._label?this.state._label:""}))))}constructor(t){(0,a.r)(this,t),this.catchRef=t=>{var e;this.ref=t,(0,r.a)(this.host,this.ref),this.disconnectedCallback(),null===(e=this.ref)||void 0===e||e.addEventListener("search",this.onChange)},this.onKeyUp=t=>{(0,l.s)(this,"_currentLength",t.target.value.length),"Enter"===t.code||"NumpadEnter"===t.code?(0,d.p)({form:this.host,ref:this.ref}):this.onChange(t)},this.onChange=t=>{var e,i;this.oldValue!==(null===(e=this.ref)||void 0===e?void 0:e.value)&&(this.oldValue=null===(i=this.ref)||void 0===i?void 0:i.value,this.controller.onFacade.onChange(t))},this._accessKey=void 0,this._alert=!0,this._autoComplete=void 0,this._disabled=void 0,this._error=void 0,this._hasCounter=void 0,this._hideLabel=void 0,this._hint="",this._icon=void 0,this._id=void 0,this._label=void 0,this._list=void 0,this._maxLength=void 0,this._name=void 0,this._on=void 0,this._pattern=void 0,this._placeholder=void 0,this._readOnly=void 0,this._required=void 0,this._size=void 0,this._smartButton=void 0,this._syncValueBySelector=void 0,this._tabIndex=void 0,this._tooltipAlign="top",this._touched=!1,this._type="text",this._value=void 0,this.state={_autoComplete:"off",_currentLength:0,_id:`id-${(0,n.n)()}`,_hasValue:!1,_label:!1,_list:[],_type:"text"},this.controller=new c.a(this,"input-text",this.host)}validateAccessKey(t){this.controller.validateAccessKey(t)}validateAlert(t){((t,e)=>{(0,l.b)(t,"_alert",e)})(this,t)}validateAutoComplete(t){this.controller.validateAutoComplete(t)}validateDisabled(t){this.controller.validateDisabled(t)}validateError(t){this.controller.validateError(t)}validateHasCounter(t){this.controller.validateHasCounter(t)}validateHideLabel(t){(0,s.v)(this,t)}validateHint(t){this.controller.validateHint(t)}validateIcon(t){this.controller.validateIcon(t)}validateId(t){this.controller.validateId(t)}validateLabel(t){this.controller.validateLabel(t)}validateList(t){this.controller.validateList(t)}validateMaxLength(t){this.controller.validateMaxLength(t)}validateName(t){this.controller.validateName(t)}validateOn(t){this.controller.validateOn(t)}validatePattern(t){this.controller.validatePattern(t)}validatePlaceholder(t){this.controller.validatePlaceholder(t)}validateReadOnly(t){this.controller.validateReadOnly(t)}validateRequired(t){this.controller.validateRequired(t)}validateSize(t){this.controller.validateSize(t)}validateSmartButton(t){this.controller.validateSmartButton(t)}validateSyncValueBySelector(t){this.controller.validateSyncValueBySelector(t)}validateTabIndex(t){this.controller.validateTabIndex(t)}validateTouched(t){this.controller.validateTouched(t)}validateType(t){this.controller.validateType(t)}validateValue(t){this.controller.validateValue(t)}componentWillLoad(){this._alert=!0===this._alert,this._touched=!0===this._touched,this.oldValue=this._value,this.controller.componentWillLoad(),this.state._hasValue=!!this.state._value,this.controller.addValueChangeListener((t=>this.state._hasValue=!!t))}disconnectedCallback(){var t;null===(t=this.ref)||void 0===t||t.removeEventListener("search",this.onChange)}get host(){return(0,a.g)(this)}static get watchers(){return{_accessKey:["validateAccessKey"],_alert:["validateAlert"],_autoComplete:["validateAutoComplete"],_disabled:["validateDisabled"],_error:["validateError"],_hasCounter:["validateHasCounter"],_hideLabel:["validateHideLabel"],_hint:["validateHint"],_icon:["validateIcon"],_id:["validateId"],_label:["validateLabel"],_list:["validateList"],_maxLength:["validateMaxLength"],_name:["validateName"],_on:["validateOn"],_pattern:["validatePattern"],_placeholder:["validatePlaceholder"],_readOnly:["validateReadOnly"],_required:["validateRequired"],_size:["validateSize"],_smartButton:["validateSmartButton"],_syncValueBySelector:["validateSyncValueBySelector"],_tabIndex:["validateTabIndex"],_touched:["validateTouched"],_type:["validateType"],_value:["validateValue"]}}};u.style={default:":host{--a11y-min-size:44px;font-size:inherit}*{hyphens:auto;letter-spacing:inherit;word-break:break-word;word-spacing:inherit}[role='button'],button:not([role='link']),kol-input .input{min-height:var(--a11y-min-size);min-width:var(--a11y-min-size)}a,button,h1,h2,h3,h4,h5,h6,input,option,select,textarea{font-family:inherit;font-size:inherit}:is(a,button){background-color:transparent;border:none;margin:0;padding:0;width:100%;}:host{max-width:100%}*{box-sizing:border-box}kol-span-wc{display:grid;place-items:center}kol-span-wc>span{display:flex;place-items:center}a,button{cursor:pointer}button,input,option,select,textarea{font-family:inherit}.icon-only>kol-span-wc>span>span{display:none}.required label>span::after,.required legend>span::after{content:'*'}:host{display:block}input,textarea{cursor:text}input[type='checkbox'],input[type='color'],input[type='file'],input[type='radio'],input[type='range'],label,option,select{cursor:pointer}input[type='color'],input[type='date'],input[type='datetime-local'],input[type='email'],input[type='file'],input[type='month'],input[type='number'],input[type='password'],input[type='search'],input[type='tel'],input[type='text'],input[type='time'],input[type='url'],input[type='week'],select:not([multiple]),select[multiple] option,textarea{font-size:1rem;width:100%}input[type='file']{padding:calc((var(--a11y-min-size) - 1rem) / 10) 0.5em}select[multiple] option{padding:calc((var(--a11y-min-size) - 1rem) / 2) 0.5em}kol-input.disabled :is(button,input,label,option,select,textarea){cursor:not-allowed;opacity:0.5}kol-input{display:grid}kol-input [slot='input']{flex-grow:1}input:not([type='checkbox'],[type='radio']),select:not([multiple]){height:2.75em}input:focus,option:focus,select:focus,textarea:focus{outline:0}.input{display:flex;align-items:center}.input>kol-icon{display:grid;height:var(--a11y-min-size);place-items:center}"}}}]);