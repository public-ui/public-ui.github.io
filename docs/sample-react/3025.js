/*! For license information please see 3025.js.LICENSE.txt */ "use strict";(self.webpackChunk_public_ui_sample_react=self.webpackChunk_public_ui_sample_react||[]).push([[3025],{3025:(t,e,i)=>{i.r(e),i.d(e,{kol_input_date:()=>o});var s=i(454),a=i(1540),n=i(4046);const o=class{constructor(t){(0,s.r)(this,t),this.catchRef=t=>{this.ref=t,(0,n.a)(this.host,this.ref)},this._accessKey=void 0,this._alert=!0,this._autoComplete=void 0,this._disabled=void 0,this._error=void 0,this._hideLabel=void 0,this._hint="",this._icon=void 0,this._id=void 0,this._list=void 0,this._max=void 0,this._min=void 0,this._name=void 0,this._on=void 0,this._readOnly=void 0,this._required=void 0,this._smartButton=void 0,this._step=void 0,this._tabIndex=void 0,this._touched=!1,this._type="date",this._value=void 0,this.state={}}render(){return(0,s.h)(s.H,null,(0,s.h)("kol-input-number",{ref:this.catchRef,_accessKey:this._accessKey,_alert:this._alert,_autoComplete:this._autoComplete,_disabled:this._disabled,_error:this._error,_hideLabel:this._hideLabel,_hint:this._hint,_icon:this._icon,_id:this._id,_list:this._list,_max:this.state._max,_min:this.state._min,_name:this._name,_on:this.state._on,_readOnly:this._readOnly,_required:this._required,_smartButton:this._smartButton,_step:this._step,_tabIndex:this._tabIndex,_touched:this._touched,_type:this._type,_value:this.state._value},(0,s.h)("slot",null)))}valueAsIsoDate(t,e){const i=null!=t?t:e;if("string"==typeof i)return i;if("object"==typeof i&&i instanceof Date)switch(this._type){case"date":return`${i.getFullYear()}-${i.getMonth()+1}-${i.getDate()}`;case"datetime-local":return`${i.getFullYear()}-${i.getMonth()+1}-${i.getDate()}T${i.getHours()}:${i.getMinutes()}:${i.getSeconds()}`;case"month":return`${i.getFullYear()}-${i.getMonth()+1}`;case"time":return void 0===this._step||"string"==typeof this._step&&"60"===this._step||"number"==typeof this._step&&60===this._step?`${i.getHours()}:${i.getMinutes()}`:`${i.getHours()}:${i.getMinutes()}:${i.getSeconds()}`;case"week":throw new Error("Auto convert to week is not supported!")}return null===t?null:void 0}validateDateString(t){switch(this._type){case"date":return o.isoDateRegex.test(t);case"datetime-local":return o.isoLocalDateTimeRegex.test(t);case"month":return o.isoMonthRegex.test(t);case"time":return o.isoTimeRegex.test(t);case"week":return o.isoWeekRegex.test(t)}}validateOn(t){(0,a.s)(this,"_on",Object.assign(Object.assign({},t),{onChange:(e,i)=>{!!i!=!!this._value&&(this._value=i),(null==t?void 0:t.onChange)&&t.onChange(e,i)}}))}validateMax(t){(0,a.a)(this,"_max",(t=>void 0===t||null!==t&&this.validateDateString(t)),new Set(["Iso8601","Date"]),this.valueAsIsoDate(t,"date"===this._type||"month"===this._type||"datetime-local"===this._type?o.DEFAULT_MAX_DATE:void 0))}validateMin(t){(0,a.a)(this,"_min",(t=>void 0===t||null!==t&&this.validateDateString(t)),new Set(["Iso8601","Date"]),this.valueAsIsoDate(t))}validateValue(t){(0,a.a)(this,"_value",(t=>null==t||this.validateDateString(t)),new Set(["Iso8601","Date"]),this.valueAsIsoDate(t))}componentWillLoad(){this.validateOn(this._on),this.validateMax(this._max),this.validateMin(this._min),this.validateValue(this._value)}get host(){return(0,s.g)(this)}static get watchers(){return{_on:["validateOn"],_max:["validateMax"],_min:["validateMin"],_value:["validateValue"]}}};o.DEFAULT_MAX_DATE=new Date(9999,11,31,23,59,59),o.isoDateRegex=/^\d{4}-([0]\d|1[0-2])-([0-2]\d|3[01])/,o.isoLocalDateTimeRegex=/^\d{4}-([0]\d|1[0-2])-([0-2]\d|3[01])[T ][0-2]\d:[0-5]\d(:[0-5]\d(?:\.\d+)?)?/,o.isoMonthRegex=/^\d{4}-([0]\d|1[0-2])/,o.isoTimeRegex=/^[0-2]\d:[0-5]\d(:[0-5]\d(?:\.\d+)?)?/,o.isoWeekRegex=/^\d{4}-W(?:[0-4]\d|5[0-3])$/,o.style={default:":host{--a11y-min-size:44px}*{hyphens:auto;letter-spacing:inherit;word-break:break-word;word-spacing:inherit}[role='button'],button:not([role='link']),kol-input .input{min-height:var(--a11y-min-size);min-width:var(--a11y-min-size)}a,button,h1,h2,h3,h4,h5,h6,input,option,select,textarea{font-family:inherit}:is(a,button){background-color:transparent;border:none;margin:0;padding:0;width:100%;}:host{max-width:100%}*{box-sizing:border-box}kol-span-wc{display:grid;place-items:center}kol-span-wc>span{display:flex;place-items:center}a,button{cursor:pointer}a,button,input,option,select,textarea{font-family:inherit}.icon-only>kol-span-wc>span>span{display:none}.required label>span::after,.required legend>span::after{content:'*'}:host{display:block}input,textarea{cursor:text}input[type='checkbox'],input[type='color'],input[type='file'],input[type='radio'],input[type='range'],label,option,select{cursor:pointer}input[type='color'],input[type='date'],input[type='datetime-local'],input[type='email'],input[type='file'],input[type='month'],input[type='number'],input[type='password'],input[type='search'],input[type='tel'],input[type='text'],input[type='time'],input[type='url'],input[type='week'],select:not([multiple]),select[multiple] option,textarea{font-size:1rem}input[type='file']{padding:calc((var(--a11y-min-size) - 1rem) / 10) 0.5em}select[multiple] option{padding:calc((var(--a11y-min-size) - 1rem) / 2) 0.5em}kol-input.disabled :is(button,input,label,option,select,textarea){cursor:not-allowed;opacity:0.5}kol-input{display:grid}kol-input [slot='input']{flex-grow:1}input:not([type='checkbox'],[type='radio']),select:not([multiple]){height:2.75em}input:focus,option:focus,select:focus,textarea:focus{outline:0}.input{display:flex;align-items:center}.input>kol-icon{display:grid;height:var(--a11y-min-size);place-items:center}kol-input-number{display:block}"}}}]);