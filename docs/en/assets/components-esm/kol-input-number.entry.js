/*! * KoliBri - The accessible HTML-Standard */ import{h,H as Host,r as registerInstance,g as getElement}from"./index-2c046ff1.js";import{n as nonce}from"./dev.utils-8aef00f6.js";import{a as propagateFocus}from"./reuse-c2156413.js";import{p as propagateSubmitEventToForm}from"./controller-ca0fe64f.js";import{g as getRenderStates}from"./controller-d9fb3dc1.js";import{a as watchValidator,d as watchJsonArrayString,w as watchString,b as watchBoolean,e as watchNumber}from"./prop.validators-683bb1d0.js";import{I as InputIconController}from"./controller-icon-ba3c5351.js";import"./a11y.tipps-e607b8b3.js";import"./label-bd9566f6.js";import"./tab-index-6d37f269.js";import"./index-37b5cbcf.js";import"./icon-278d567d.js";class InputNumberController extends InputIconController{constructor(t,e,a){super(t,e,a),this.numberOrIsoDateRegex=/^\d+$|(^\d{4}-([0]\d|1[0-2])-([0-2]\d|3[01])([T ][0-2]\d:[0-5]\d:[0-5]\d(?:\.\d+)?([+-][0-2]\d:[0-5]\d|Z)?)?$)|(^[0-2]\d:[0-5]\d(:[0-5]\d)?$)/,this.parseToString=t=>"string"==typeof t?t:"number"==typeof t?`${t}`:"object"==typeof t&&t instanceof Date?t.toISOString():"",this.validateIso8601=(t,e,a)=>{const i=parseFloat(e),l=i==e;return watchValidator(this.component,t,(t=>void 0===t||""===t||l&&"number"==typeof i||this.numberOrIsoDateRegex.test(t)),new Set(["number","Date","string{ISO-8601}"]),this.parseToString(e),{hooks:{afterPatch:t=>{"string"==typeof t&&a&&a(t)}}})},this.component=t}validateAutoComplete(t){watchValidator(this.component,"_autoComplete",(t=>"string"==typeof t&&("on"===t||"off"===t)),new Set(["on | off"]),t)}validateList(t){watchJsonArrayString(this.component,"_list",(t=>"string"==typeof t),t)}onChange(t){super.onChange(t),!!t.target.value!=!!this.component._value&&(this.component._value=t.target.value)}validateMax(t){this.validateIso8601("_max",t)}validateMin(t){this.validateIso8601("_min",t)}validatePlaceholder(t){watchString(this.component,"_placeholder",t)}validateReadOnly(t){watchBoolean(this.component,"_readOnly",t)}validateRequired(t){watchBoolean(this.component,"_required",t)}validateStep(t){watchNumber(this.component,"_step",t)}validateType(t){watchValidator(this.component,"_type",(t=>"string"==typeof t&&("date"===t||"datetime-local"===t||"month"===t||"number"===t||"time"===t||"week"===t)),new Set(["String {date, datetime-local, month, number, time, week}"]),t)}validateValue(t){this.validateValueEx(t)}validateValueEx(t,e){this.validateIso8601("_value",t,e),this.setFormAssociatedValue(this.component.state._value)}componentWillLoad(){super.componentWillLoad(),this.validateAutoComplete(this.component._autoComplete),this.validateMax(this.component._max),this.validateMin(this.component._min),this.validateList(this.component._list),this.validatePlaceholder(this.component._placeholder),this.validateReadOnly(this.component._readOnly),this.validateRequired(this.component._required),this.validateStep(this.component._step),this.validateType(this.component._type),this.validateValue(this.component._value)}}const defaultStyleCss=":host{--a11y-min-size:44px;font-size:inherit}*{hyphens:auto;letter-spacing:inherit;word-break:break-word;word-spacing:inherit}[role='button'],button:not([role='link']),kol-input .input{min-height:var(--a11y-min-size);min-width:var(--a11y-min-size)}a,button,h1,h2,h3,h4,h5,h6,input,option,select,textarea{font-family:inherit;font-size:inherit}:is(a,button){background-color:transparent;border:none;margin:0;padding:0;width:100%;}:host{max-width:100%}*{box-sizing:border-box}kol-span-wc{display:grid;place-items:center}kol-span-wc>span{display:flex;place-items:center}a,button{cursor:pointer}button,input,option,select,textarea{font-family:inherit}.icon-only>kol-span-wc>span>span{display:none}.required label>span::after,.required legend>span::after{content:'*'}:host{display:block}input,textarea{cursor:text}input[type='checkbox'],input[type='color'],input[type='file'],input[type='radio'],input[type='range'],label,option,select{cursor:pointer}input[type='color'],input[type='date'],input[type='datetime-local'],input[type='email'],input[type='file'],input[type='month'],input[type='number'],input[type='password'],input[type='search'],input[type='tel'],input[type='text'],input[type='time'],input[type='url'],input[type='week'],select:not([multiple]),select[multiple] option,textarea{font-size:1rem;width:100%}input[type='file']{padding:calc((var(--a11y-min-size) - 1rem) / 10) 0.5em}select[multiple] option{padding:calc((var(--a11y-min-size) - 1rem) / 2) 0.5em}kol-input.disabled :is(button,input,label,option,select,textarea){cursor:not-allowed;opacity:0.5}kol-input{display:grid}kol-input [slot='input']{flex-grow:1}input:not([type='checkbox'],[type='radio']),select:not([multiple]){height:2.75em}input:focus,option:focus,select:focus,textarea:focus{outline:0}.input{display:flex;align-items:center}.input>kol-icon{display:grid;height:var(--a11y-min-size);place-items:center}",KolInputNumber=class{render(){const{ariaDescribedBy:t}=getRenderStates(this.state),e=Array.isArray(this.state._list)&&this.state._list.length>0,a=!1===this.state._label;return h(Host,{class:{"has-value":this.state._hasValue}},h("kol-input",{class:{[this.state._type]:!0,"hide-label":!!this.state._hideLabel},_disabled:this.state._disabled,_error:this.state._error,_hideLabel:this.state._hideLabel,_hint:this.state._hint,_icon:this.state._icon,_id:this.state._id,_list:this.state._list,_readOnly:this.state._readOnly,_required:this.state._required,_smartButton:this.state._smartButton,_touched:this.state._touched},h("span",{slot:"label"},a?h("slot",null):this.state._label),h("div",{slot:"input"},h("input",Object.assign({ref:this.catchRef,title:"",accessKey:this.state._accessKey,"aria-describedby":t.length>0?t.join(" "):void 0,"aria-labelledby":`${this.state._id}-label`,autoCapitalize:"off",autoComplete:this.state._autoComplete,autoCorrect:"off",disabled:this.state._disabled,id:this.state._id,list:e?`${this.state._id}-list`:void 0,max:this.state._max,min:this.state._min,name:this.state._name,readOnly:this.state._readOnly,required:this.state._required,placeholder:this.state._placeholder,step:this.state._step,spellcheck:"false",type:this.state._type,value:this.state._value},this.controller.onFacade,{onKeyUp:this.onKeyUp})),h("kol-tooltip",{"aria-hidden":"true",hidden:a||!this.state._hideLabel,_align:this._tooltipAlign,_id:`${this.state._id}-tooltip`,_label:"string"==typeof this.state._label?this.state._label:""}))))}constructor(t){registerInstance(this,t),this.catchRef=t=>{this.ref=t,propagateFocus(this.host,this.ref)},this.onKeyUp=t=>{"Enter"===t.code?propagateSubmitEventToForm({form:this.host,ref:this.ref}):this.controller.onFacade.onChange(t)},this._accessKey=void 0,this._alert=!0,this._autoComplete=void 0,this._disabled=void 0,this._error=void 0,this._hideLabel=void 0,this._hint="",this._icon=void 0,this._id=void 0,this._label=void 0,this._list=void 0,this._max=void 0,this._min=void 0,this._name=void 0,this._on=void 0,this._placeholder=void 0,this._readOnly=void 0,this._required=void 0,this._smartButton=void 0,this._step=void 0,this._syncValueBySelector=void 0,this._tabIndex=void 0,this._tooltipAlign="top",this._touched=!1,this._type="number",this._value=void 0,this.state={_autoComplete:"off",_hasValue:!1,_id:nonce(),_label:!1,_list:[],_type:"number"},this.controller=new InputNumberController(this,"number",this.host)}validateAccessKey(t){this.controller.validateAccessKey(t)}validateAlert(t){this.controller.validateAlert(t)}validateAutoComplete(t){this.controller.validateAutoComplete(t)}validateDisabled(t){this.controller.validateDisabled(t)}validateError(t){this.controller.validateError(t)}validateHideLabel(t){this.controller.validateHideLabel(t)}validateHint(t){this.controller.validateHint(t)}validateIcon(t){this.controller.validateIcon(t)}validateId(t){this.controller.validateId(t)}validateLabel(t){this.controller.validateLabel(t)}validateList(t){this.controller.validateList(t)}validateMax(t){this.controller.validateMax(t)}validateMin(t){this.controller.validateMin(t)}validateName(t){this.controller.validateName(t)}validateOn(t){this.controller.validateOn(t)}validatePlaceholder(t){this.controller.validatePlaceholder(t)}validateReadOnly(t){this.controller.validateReadOnly(t)}validateRequired(t){this.controller.validateRequired(t)}validateSmartButton(t){this.controller.validateSmartButton(t)}validateStep(t){this.controller.validateStep(t)}validateSyncValueBySelector(t){this.controller.validateSyncValueBySelector(t)}validateTabIndex(t){this.controller.validateTabIndex(t)}validateTouched(t){this.controller.validateTouched(t)}validateType(t){this.controller.validateType(t)}validateValue(t){this.controller.validateValueEx(t,(t=>{""===t&&this.ref&&(this.ref.value="")}))}componentWillLoad(){this._alert=!0===this._alert,this._touched=!0===this._touched,this.controller.componentWillLoad(),this.state._hasValue=!!this.state._value,this.controller.addValueChangeListener((t=>this.state._hasValue=!!t))}get host(){return getElement(this)}static get watchers(){return{_accessKey:["validateAccessKey"],_alert:["validateAlert"],_autoComplete:["validateAutoComplete"],_disabled:["validateDisabled"],_error:["validateError"],_hideLabel:["validateHideLabel"],_hint:["validateHint"],_icon:["validateIcon"],_id:["validateId"],_label:["validateLabel"],_list:["validateList"],_max:["validateMax"],_min:["validateMin"],_name:["validateName"],_on:["validateOn"],_placeholder:["validatePlaceholder"],_readOnly:["validateReadOnly"],_required:["validateRequired"],_smartButton:["validateSmartButton"],_step:["validateStep"],_syncValueBySelector:["validateSyncValueBySelector"],_tabIndex:["validateTabIndex"],_touched:["validateTouched"],_type:["validateType"],_value:["validateValue"]}}};KolInputNumber.style={default:defaultStyleCss};export{KolInputNumber as kol_input_number};