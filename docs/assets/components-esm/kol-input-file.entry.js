/*! * KoliBri - The accessible HTML-Standard */ import{h,H as Host,r as registerInstance,g as getElement}from"./index-2c046ff1.js";import{n as nonce}from"./dev.utils-8aef00f6.js";import{a as propagateFocus}from"./reuse-c2156413.js";import{g as getRenderStates}from"./controller-d9fb3dc1.js";import{w as watchString,b as watchBoolean}from"./prop.validators-683bb1d0.js";import{I as InputIconController}from"./controller-icon-ba3c5351.js";import"./label-bd9566f6.js";import"./a11y.tipps-e607b8b3.js";import"./tab-index-6d37f269.js";import"./index-37b5cbcf.js";import"./icon-278d567d.js";class InputFileController extends InputIconController{constructor(t,e,i){super(t,e,i),this.component=t}validateAccept(t){watchString(this.component,"_accept",t)}validateMultiple(t){watchBoolean(this.component,"_multiple",t)}validateRequired(t){watchBoolean(this.component,"_required",t)}validateValue(t){watchString(this.component,"_value",t),this.setFormAssociatedValue(this.component._value)}componentWillLoad(){super.componentWillLoad(),this.validateAccept(this.component._accept),this.validateMultiple(this.component._multiple),this.validateRequired(this.component._required),this.validateValue(this.component._value)}}const defaultStyleCss=":host{--a11y-min-size:44px;font-size:inherit}*{hyphens:auto;letter-spacing:inherit;word-break:break-word;word-spacing:inherit}[role='button'],button:not([role='link']),kol-input .input{min-height:var(--a11y-min-size);min-width:var(--a11y-min-size)}a,button,h1,h2,h3,h4,h5,h6,input,option,select,textarea{font-family:inherit;font-size:inherit}:is(a,button){background-color:transparent;border:none;margin:0;padding:0;width:100%;}:host{max-width:100%}*{box-sizing:border-box}kol-span-wc{display:grid;place-items:center}kol-span-wc>span{display:flex;place-items:center}a,button{cursor:pointer}button,input,option,select,textarea{font-family:inherit}.icon-only>kol-span-wc>span>span{display:none}.required label>span::after,.required legend>span::after{content:'*'}:host{display:block}input,textarea{cursor:text}input[type='checkbox'],input[type='color'],input[type='file'],input[type='radio'],input[type='range'],label,option,select{cursor:pointer}input[type='color'],input[type='date'],input[type='datetime-local'],input[type='email'],input[type='file'],input[type='month'],input[type='number'],input[type='password'],input[type='search'],input[type='tel'],input[type='text'],input[type='time'],input[type='url'],input[type='week'],select:not([multiple]),select[multiple] option,textarea{font-size:1rem;width:100%}input[type='file']{padding:calc((var(--a11y-min-size) - 1rem) / 10) 0.5em}select[multiple] option{padding:calc((var(--a11y-min-size) - 1rem) / 2) 0.5em}kol-input.disabled :is(button,input,label,option,select,textarea){cursor:not-allowed;opacity:0.5}kol-input{display:grid}kol-input [slot='input']{flex-grow:1}input:not([type='checkbox'],[type='radio']),select:not([multiple]){height:2.75em}input:focus,option:focus,select:focus,textarea:focus{outline:0}.input{display:flex;align-items:center}.input>kol-icon{display:grid;height:var(--a11y-min-size);place-items:center}label input[type='file']::-webkit-file-upload-button{display:none}label input[type='file']:before{content:'Datei auswählen'}label input[multiple]:before{content:'Dateien auswählen'}div.input{cursor:pointer}",KolInputFile=class{render(){const{ariaDescribedBy:t}=getRenderStates(this.state),e=!1===this.state._label;return h(Host,null,h("kol-input",{class:{file:!0,"hide-label":!!this.state._hideLabel},_disabled:this.state._disabled,_error:this.state._error,_hideLabel:this.state._hideLabel,_hint:this.state._hint,_icon:this.state._icon,_id:this.state._id,_required:this.state._required,_smartButton:this.state._smartButton,_touched:this.state._touched,onClick:()=>{var t;return null===(t=this.ref)||void 0===t?void 0:t.focus()}},h("span",{slot:"label"},e?h("slot",null):this.state._label),h("div",{slot:"input"},h("input",Object.assign({ref:this.catchRef,title:"",accept:this.state._accept,accessKey:this.state._accessKey,"aria-describedby":t.length>0?t.join(" "):void 0,"aria-labelledby":`${this.state._id}-label`,autoCapitalize:"off",autoCorrect:"off",disabled:this.state._disabled,id:this.state._id,multiple:this.state._multiple,name:this.state._name,required:this.state._required,spellcheck:"false",type:"file",value:this.state._value},this.controller.onFacade,{onChange:this.onChange})),h("kol-tooltip",{"aria-hidden":"true",hidden:e||!this.state._hideLabel,_align:this._tooltipAlign,_id:`${this.state._id}-tooltip`,_label:"string"==typeof this.state._label?this.state._label:""}))))}constructor(t){registerInstance(this,t),this.catchRef=t=>{this.ref=t,propagateFocus(this.host,this.ref)},this.onChange=t=>{var e;this.ref instanceof HTMLInputElement&&"file"===this.ref.type&&"function"==typeof(null===(e=this.state._on)||void 0===e?void 0:e.onChange)&&this.state._on.onChange(t,this.ref.files)},this._accept=void 0,this._accessKey=void 0,this._alert=!0,this._disabled=void 0,this._error=void 0,this._hideLabel=void 0,this._hint="",this._icon=void 0,this._id=void 0,this._label=void 0,this._multiple=void 0,this._name=void 0,this._on=void 0,this._required=void 0,this._smartButton=void 0,this._syncValueBySelector=void 0,this._tabIndex=void 0,this._tooltipAlign="top",this._touched=!1,this._value=void 0,this.state={_id:nonce(),_label:!1},this.controller=new InputFileController(this,"file",this.host)}validateAccept(t){this.controller.validateAccept(t)}validateAccessKey(t){this.controller.validateAccessKey(t)}validateAlert(t){this.controller.validateAlert(t)}validateDisabled(t){this.controller.validateDisabled(t)}validateError(t){this.controller.validateError(t)}validateHideLabel(t){this.controller.validateHideLabel(t)}validateHint(t){this.controller.validateHint(t)}validateIcon(t){this.controller.validateIcon(t)}validateId(t){this.controller.validateId(t)}validateLabel(t){this.controller.validateLabel(t)}validateMultiple(t){this.controller.validateMultiple(t)}validateName(t){this.controller.validateName(t)}validateOn(t){this.controller.validateOn(t)}validateRequired(t){this.controller.validateRequired(t)}validateSmartButton(t){this.controller.validateSmartButton(t)}validateSyncValueBySelector(t){this.controller.validateSyncValueBySelector(t)}validateTabIndex(t){this.controller.validateTabIndex(t)}validateTouched(t){this.controller.validateTouched(t)}validateValue(t){this.controller.validateValue(t)}componentWillLoad(){this._alert=!0===this._alert,this._touched=!0===this._touched,this.controller.componentWillLoad()}get host(){return getElement(this)}static get watchers(){return{_accept:["validateAccept"],_accessKey:["validateAccessKey"],_alert:["validateAlert"],_disabled:["validateDisabled"],_error:["validateError"],_hideLabel:["validateHideLabel"],_hint:["validateHint"],_icon:["validateIcon"],_id:["validateId"],_label:["validateLabel"],_multiple:["validateMultiple"],_name:["validateName"],_on:["validateOn"],_required:["validateRequired"],_smartButton:["validateSmartButton"],_syncValueBySelector:["validateSyncValueBySelector"],_tabIndex:["validateTabIndex"],_touched:["validateTouched"],_value:["validateValue"]}}};KolInputFile.style={default:defaultStyleCss};export{KolInputFile as kol_input_file};