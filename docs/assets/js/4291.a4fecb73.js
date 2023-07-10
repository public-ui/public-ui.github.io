/*! For license information please see 4291.a4fecb73.js.LICENSE.txt */ "use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[4291],{60719:(t,e,i)=>{i.d(e,{I:()=>s,a:()=>r,f:()=>l});var a=i(12577),n=i(22300),o=i(69836);const l=(t,e,i="")=>{e.forEach(((e,a)=>{const n=`${i}-${a}`;"object"==typeof e&&null!==e&&"string"==typeof e.label&&e.label.length>0&&(Array.isArray(e.options)?l(t,e.options,n):t.set(n,e))}))};class s extends o.I{constructor(t,e,i){super(t,e,i),this.component=t}validateRequired(t){((t,e)=>{(0,a.b)(t,"_required",e)})(this.component,t)}componentWillLoad(){super.componentWillLoad(),this.validateRequired(this.component._required)}}class r extends s{constructor(t,e,i){super(t,e,i),this.keyOptionMap=new Map,this.getOptionByKey=t=>this.keyOptionMap.get(t),this.isValueInOptions=(t,e)=>void 0!==e.find((e=>e.value===t)),this.beforePatchListValue=(t,e)=>{const i=e.has("_list")?e.get("_list"):this.component.state._list;if(Array.isArray(i)&&i.length>0){this.keyOptionMap.clear(),l(this.keyOptionMap,i);const t=e.has("_value")?e.get("_value"):this.component.state._value;if(!1===this.isValueInOptions(t,i)){const t=i[0].value;e.set("_value",t),this.onStateChange()}}},this.component=t}validateOrientation(t){(0,a.a)(this.component,"_orientation",(t=>"horizontal"===t||"vertical"===t),new Set(["Orientation {horizontal, vertical}"]),t,{defaultValue:"vertical"})}validateList(t){(0,a.d)(this.component,"_list",(t=>"object"==typeof t&&null!==t&&"string"==typeof t.label&&t.label.length>0),t,void 0,{hooks:{beforePatch:this.beforePatchListValue}})}validateValue(t){t=(0,a.m)(t),t=Array.isArray(t)?t[0]:t,(0,a.s)(this.component,"_value",t,{beforePatch:this.beforePatchListValue}),this.setFormAssociatedValue(this.component._value)}componentWillLoad(t){super.componentWillLoad(),this.onStateChange=()=>{if("function"==typeof t){const e=setTimeout((()=>{clearTimeout(e),t(n.S)}))}},this.validateOrientation(this.component._orientation),this.validateList(this.component._list),this.validateValue(this.component._value)}}},74291:(t,e,i)=>{i.r(e),i.d(e,{kol_input_checkbox:()=>h});var a=i(88468),n=i(62780),o=i(22300),l=i(69836),s=i(12577),r=i(95049),d=i(60719);class c extends d.I{constructor(t,e,i){super(t,e,i),this.component=t}validateChecked(t){((t,e)=>{(0,s.b)(t,"_checked",e)})(this.component,t),this.setFormAssociatedValue(this.component.state._checked)}validateIcon(t){(0,s.a)(this.component,"_icons",(t=>"object"==typeof t&&null!==t&&((0,o.i)(t.checked,1)||(0,o.i)(t.indeterminate,1)||(0,o.i)(t.unchecked,1))),new Set(["InputCheckboxIcons"]),t)}validateIndeterminate(t){((t,e)=>{(0,s.b)(t,"_indeterminate",e)})(this.component,t)}validateType(t){(0,r.d)('The "_type" prop is deprecated. Use "_variant" instead.'),this.validateVariant(t)}validateValue(t){(0,s.s)(this.component,"_value",t),this.setFormAssociatedValue(this.component.state._value)}validateVariant(t){"checkbox"===t&&((0,r.d)("[KolCheckbox] The \"_variant\" value 'checkbox' is deprecated. Use the new value 'default' instead."),t="default"),(0,s.a)(this.component,"_variant",(t=>"string"==typeof t&&("button"===t||"default"===t||"switch"===t)),new Set(["String {button, default, switch}"]),t)}componentWillLoad(){super.componentWillLoad(),this.validateChecked(this.component._checked),this.validateIcon(this.component._icon),this.validateIndeterminate(this.component._indeterminate),this.validateValue(this.component._value),this.validateVariant(this.component._variant||this.component._type)}}const h=class{render(){const{ariaDescribedBy:t}=(0,l.g)(this.state),e=!1===this.state._label;return(0,a.h)(a.H,null,(0,a.h)("kol-input",{class:{checkbox:!0,[this.state._variant]:!0,"hide-label":!!this.state._hideLabel},"data-role":"button"===this.state._variant?"button":void 0,onKeyPress:"button"===this.state._variant?this.onChange:void 0,tabIndex:"button"===this.state._variant?0:void 0,_alert:this.state._alert,_disabled:this.state._disabled,_error:this.state._error,_hideLabel:this.state._hideLabel,_hint:this.state._hint,_id:this.state._id,_required:this.state._required,_touched:this.state._touched,onClick:()=>{var t;return null===(t=this.ref)||void 0===t?void 0:t.focus()}},(0,a.h)("span",{slot:"label"},e?(0,a.h)("slot",null):this.state._label),(0,a.h)("div",{slot:"input"},(0,a.h)("kol-icon",{onClick:this.onChange,_ariaLabel:"",_icon:this.state._indeterminate?this.state._icon.indeterminate:this.state._checked?this.state._icon.checked:this.state._icon.unchecked}),(0,a.h)("input",Object.assign({ref:this.catchRef,accessKey:this.state._accessKey,"aria-describedby":t.length>0?t.join(" "):void 0,"aria-labelledby":`${this.state._id}-label`,checked:this.state._checked,disabled:!0===this.state._disabled,id:this.state._id,indeterminate:this.state._indeterminate,name:this.state._name,required:!0===this.state._required,tabIndex:this.state._tabIndex,title:"",type:"checkbox",value:"string"==typeof this.state._value?this.state._value:""},this.controller.onFacade,{onChange:this.onChange})),(0,a.h)("kol-tooltip",{"aria-hidden":"true",hidden:e||!this.state._hideLabel,_align:this._tooltipAlign,_id:`${this.state._id}-tooltip`,_label:"string"==typeof this.state._label?this.state._label:""}))))}constructor(t){(0,a.r)(this,t),this.catchRef=t=>{this.ref=t,(0,o.a)(this.host,this.ref)},this.onChange=t=>{this._checked=!this._checked,this._indeterminate=!1,this.controller.setValue(t,this._checked)},this._accessKey=void 0,this._alert=!0,this._checked=!1,this._disabled=void 0,this._error=void 0,this._hideLabel=void 0,this._hint="",this._icon=void 0,this._id=void 0,this._indeterminate=void 0,this._label=void 0,this._name=void 0,this._on=void 0,this._required=void 0,this._syncValueBySelector=void 0,this._tabIndex=void 0,this._tooltipAlign="top",this._touched=!1,this._type=void 0,this._value=void 0,this._variant=void 0,this.state={_checked:!1,_icon:{checked:"codicon codicon-check",indeterminate:"codicon codicon-remove",unchecked:"codicon codicon-add"},_id:(0,n.n)(),_indeterminate:!1,_label:!1,_variant:"default"},this.controller=new c(this,"checkbox",this.host)}validateAccessKey(t){this.controller.validateAccessKey(t)}validateAlert(t){this.controller.validateAlert(t)}validateChecked(t){this.controller.validateChecked(t)}validateDisabled(t){this.controller.validateDisabled(t)}validateError(t){this.controller.validateError(t)}validateHideLabel(t){this.controller.validateHideLabel(t)}validateHint(t){this.controller.validateHint(t)}validateIcon(t){this.controller.validateIcon(t)}validateId(t){this.controller.validateId(t)}validateIndeterminate(t){this.controller.validateIndeterminate(t)}validateLabel(t){this.controller.validateLabel(t)}validateName(t){this.controller.validateName(t)}validateOn(t){this.controller.validateOn(t)}validateRequired(t){this.controller.validateRequired(t)}validateSyncValueBySelector(t){this.controller.validateSyncValueBySelector(t)}validateTabIndex(t){this.controller.validateTabIndex(t)}validateTouched(t){this.controller.validateTouched(t)}validateType(t){this.controller.validateType(t)}validateValue(t){this.controller.validateValue(t)}validateVariant(t){this.controller.validateVariant(t)}componentWillLoad(){this._alert=!0===this._alert,this._touched=!0===this._touched,this.controller.componentWillLoad()}get host(){return(0,a.g)(this)}static get watchers(){return{_accessKey:["validateAccessKey"],_alert:["validateAlert"],_checked:["validateChecked"],_disabled:["validateDisabled"],_error:["validateError"],_hideLabel:["validateHideLabel"],_hint:["validateHint"],_icon:["validateIcon"],_id:["validateId"],_indeterminate:["validateIndeterminate"],_label:["validateLabel"],_name:["validateName"],_on:["validateOn"],_required:["validateRequired"],_syncValueBySelector:["validateSyncValueBySelector"],_tabIndex:["validateTabIndex"],_touched:["validateTouched"],_type:["validateType"],_value:["validateValue"],_variant:["validateVariant"]}}};h.style={default:":host{--a11y-min-size:44px;font-size:inherit}*{hyphens:auto;letter-spacing:inherit;word-break:break-word;word-spacing:inherit}[role='button'],button:not([role='link']),kol-input .input{min-height:var(--a11y-min-size);min-width:var(--a11y-min-size)}a,button,h1,h2,h3,h4,h5,h6,input,option,select,textarea{font-family:inherit;font-size:inherit}:is(a,button){background-color:transparent;border:none;margin:0;padding:0;width:100%;}:host{max-width:100%}*{box-sizing:border-box}kol-span-wc{display:grid;place-items:center}kol-span-wc>span{display:flex;place-items:center}a,button{cursor:pointer}button,input,option,select,textarea{font-family:inherit}.icon-only>kol-span-wc>span>span{display:none}.required label>span::after,.required legend>span::after{content:'*'}:host{display:block}input,textarea{cursor:text}input[type='checkbox'],input[type='color'],input[type='file'],input[type='radio'],input[type='range'],label,option,select{cursor:pointer}input[type='color'],input[type='date'],input[type='datetime-local'],input[type='email'],input[type='file'],input[type='month'],input[type='number'],input[type='password'],input[type='search'],input[type='tel'],input[type='text'],input[type='time'],input[type='url'],input[type='week'],select:not([multiple]),select[multiple] option,textarea{font-size:1rem;width:100%}input[type='file']{padding:calc((var(--a11y-min-size) - 1rem) / 10) 0.5em}select[multiple] option{padding:calc((var(--a11y-min-size) - 1rem) / 2) 0.5em}kol-input.disabled :is(button,input,label,option,select,textarea){cursor:not-allowed;opacity:0.5}label{cursor:pointer}kol-input{align-items:center;display:grid;justify-items:left;width:100}kol-input.default,kol-input.switch{grid-template-columns:auto 1fr}kol-input .input{align-items:center;display:grid;order:1}kol-input .input div{display:inline-flex}kol-input .input input{margin:0}kol-input label{order:2}kol-input .hint,kol-input.error>kol-alert{grid-column:span 2}kol-input kol-alert.error{order:3}kol-input .hint{order:4}input{border-width:2px;border-style:solid;line-height:24px}input[type='checkbox']{appearance:none;background-color:#fff;cursor:pointer;transition:0.5s}input[type='checkbox'].kol-disabled:before{cursor:not-allowed}input[type='checkbox']:before{content:'';cursor:pointer}.default kol-icon,.switch kol-icon{display:none}.button{cursor:pointer;display:inline-flex;width:auto}.button input{display:none}.default input[type='checkbox']{height:1.5em;width:1.5em}.default input[type='checkbox']:before{display:block;height:1.5em;position:relative;width:1.5em}.default input[type='checkbox']:checked:before{border-radius:1px;border-style:solid;border-width:0 3px 3px 0;height:0.75em;left:calc(0.375em - 2px);transform:rotate(40deg) translate(-50%, -50%);top:calc(0.7125em - 2px);width:0.375em}.default input[type='checkbox']:indeterminate:before{background-color:#000;height:0.2em;left:0.24em;top:0.575em;width:0.8em}.switch input[type='checkbox']{display:inline-block;height:1.7em;min-width:3.2em;position:relative;width:3.2em}.switch input[type='checkbox']:before{background-color:#000;height:1.2em;left:calc(0.25em - 2px);top:calc(0.25em - 2px);position:absolute;-webkit-transition:0.5s;-moz-transition:0.5s;-ms-transition:0.5s;transition:0.5s;width:1.2em}.switch input[type='checkbox']:checked:before{-webkit-transform:translateX(1.5em);-moz-transform:translateX(1.5em);-ms-transform:translateX(1.5em);transform:translateX(1.5em)}.switch input[type='checkbox']:indeterminate:before{transform:translateX(0.75em)}"}}}]);