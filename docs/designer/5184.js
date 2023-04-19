/*! For license information please see 5184.js.LICENSE.txt */
"use strict";(self.webpackChunk_public_ui_designer=self.webpackChunk_public_ui_designer||[]).push([[5184],{50501:(t,e,i)=>{i.d(e,{I:()=>l,a:()=>r,f:()=>s});var a=i(80161),n=i(7269),o=i(57159);const s=(t,e,i="")=>{e.forEach(((e,a)=>{const n=`${i}-${a}`;"object"==typeof e&&null!==e&&"string"==typeof e.label&&e.label.length>0&&(Array.isArray(e.options)?s(t,e.options,n):t.set(n,e))}))};class l extends o.I{constructor(t,e,i){super(t,e,i),this.component=t}validateRequired(t){(0,a.b)(this.component,"_required",t)}componentWillLoad(){super.componentWillLoad(),this.validateRequired(this.component._required)}}class r extends l{constructor(t,e,i){super(t,e,i),this.keyOptionMap=new Map,this.getOptionByKey=t=>this.keyOptionMap.get(t),this.isValueInOptions=(t,e)=>void 0!==e.find((e=>e.value===t)),this.beforePatchListValue=(t,e)=>{const i=e.has("_list")?e.get("_list"):this.component.state._list;if(Array.isArray(i)&&i.length>0){this.keyOptionMap.clear(),s(this.keyOptionMap,i);const t=e.has("_value")?e.get("_value"):this.component.state._value;if(!1===this.isValueInOptions(t,i)){const t=i[0].value;e.set("_value",t),this.onStateChange()}}},this.component=t}validateOrientation(t){(0,a.a)(this.component,"_orientation",(t=>"horizontal"===t||"vertical"===t),new Set(["Orientation {horizontal, vertical}"]),t,{defaultValue:"vertical"})}validateList(t){(0,a.d)(this.component,"_list",(t=>"object"==typeof t&&null!==t&&"string"==typeof t.label&&t.label.length>0),t,void 0,{hooks:{beforePatch:this.beforePatchListValue}})}validateValue(t){t=(0,a.m)(t),t=Array.isArray(t)?t[0]:t,(0,a.s)(this.component,"_value",t,{beforePatch:this.beforePatchListValue}),this.setFormAssociatedValue(this.component._value)}componentWillLoad(t){super.componentWillLoad(),this.onStateChange=()=>{if("function"==typeof t){const e=setTimeout((()=>{clearTimeout(e),t(n.S)}))}},this.validateOrientation(this.component._orientation),this.validateList(this.component._list),this.validateValue(this.component._value)}}},57159:(t,e,i)=>{i.d(e,{I:()=>h,g:()=>l});var a=i(82120),n=i(80161),o=i(11146),s=i(99311);const l=t=>{const e="string"==typeof t._error&&t._error.length>0&&!0===t._touched,i="string"==typeof t._hint&&t._hint.length>0,a=[];return!0===e&&a.push(`${t._id}-error`),!0===i&&a.push(`${t._id}-hint`),{hasError:e,hasHint:i,ariaDiscribedBy:a}},r=(0,s.b)();class d{constructor(t,e,i){var a,n,o,s,l;if(this.syncFormAssociatedName=()=>{var t;r&&(null===(t=this.formAssociated)||void 0===t||t.setAttribute("name",this.component.state._name||this.component.state._id))},this.setFormAssociatedValue=(t=null)=>{var e;r&&(null===(e=this.formAssociated)||void 0===e||e.setAttribute("value",t))},this.component=t,this.name=e,this.host=i,r){this.formAssociated=document.createElement("input"),this.formAssociated.setAttribute("type","hidden");const t=(null===(a=this.host)||void 0===a?void 0:a.children)||[];for(let e=0;e<t.length;e++)"INPUT"===(null===(n=this.host)||void 0===n?void 0:n.children[e].tagName)&&(null===(o=this.host)||void 0===o||o.removeChild(null===(s=this.host)||void 0===s?void 0:s.children[e]));null===(l=this.host)||void 0===l||l.appendChild(this.formAssociated)}}validateAlert(t){(0,n.b)(this.component,"_alert",t)}validateTouched(t){(0,n.b)(this.component,"_touched",t)}componentWillLoad(){this.validateAlert(this.component._alert),this.validateTouched(this.component._touched)}}class h extends d{constructor(t,e,i){super(t,e,i),this.hideLabel=!1,this.valueChangeListeners=[],this.onFacade={onBlur:this.onBlur.bind(this),onChange:this.onChange.bind(this),onClick:this.onClick.bind(this),onFocus:this.onFocus.bind(this)},this.component=t}validateAccessKey(t){(0,n.w)(this.component,"_accessKey",t)}validateAdjustHeight(t){(0,n.b)(this.component,"_adjustHeight",t)}validateDisabled(t){(0,n.b)(this.component,"_disabled",t),!0===t&&(0,a.e)()}validateError(t){(0,n.w)(this.component,"_error",t)}validateHideLabel(t){(0,n.b)(this.component,"_hideLabel",t)}validateHint(t){(0,n.w)(this.component,"_hint",t)}validateId(t){(0,n.w)(this.component,"_id",t,{hooks:{afterPatch:this.syncFormAssociatedName},minLength:1}),""!==t&&void 0!==t||(0,a.d)("Eine eindeutige ID an den Eingabefeldern ist nicht zwingend erforderlich, könnte aber für die E2E-Tests relevant sein.")}validateName(t){(0,n.w)(this.component,"_name",t,{hooks:{afterPatch:this.syncFormAssociatedName}}),void 0===t&&(0,a.d)("Ein Name an den Eingabefeldern ist nicht zwingend erforderlich, kann aber für die Autocomplete-Funktion und für das statische Versenden des Eingabefeldes relevant sein.")}validateOn(t){"object"==typeof t&&(0,n.s)(this.component,"_on",t)}validateSmartButton(t){(0,n.o)(t,(()=>{try{t=(0,n.p)(t)}catch(t){}(0,n.s)(this.component,"_smartButton",t)}))}validateTabIndex(t){(0,o.v)(this.component,t)}componentWillLoad(){super.componentWillLoad(),this.validateAccessKey(this.component._accessKey),this.validateAdjustHeight(this.component._adjustHeight),this.validateError(this.component._error),this.validateDisabled(this.component._disabled),this.validateHideLabel(this.component._hideLabel),this.validateHint(this.component._hint),this.validateId(this.component._id),this.validateName(this.component._name),this.validateSmartButton(this.component._smartButton),this.validateOn(this.component._on),this.validateTabIndex(this.component._tabIndex),this.syncFormAssociatedName()}onBlur(t){var e;this.component._alert=!0,this.component._touched=!0,"function"==typeof(null===(e=this.component._on)||void 0===e?void 0:e.onBlur)&&this.component._on.onBlur(t)}onChange(t){var e;const i=t.target.value;this.setFormAssociatedValue(i),this.valueChangeListeners.forEach((t=>t(i))),"function"==typeof(null===(e=this.component._on)||void 0===e?void 0:e.onChange)&&this.component._on.onChange(t,i)}onClick(t){var e;"function"==typeof(null===(e=this.component._on)||void 0===e?void 0:e.onClick)&&this.component._on.onClick(t)}onFocus(t){var e;this.component._alert=!0,"function"==typeof(null===(e=this.component._on)||void 0===e?void 0:e.onFocus)&&this.component._on.onFocus(t)}setValue(t,e){var i;this.setFormAssociatedValue(e),"function"==typeof(null===(i=this.component._on)||void 0===i?void 0:i.onChange)&&this.component._on.onChange(t,e)}addValueChangeListener(t){this.valueChangeListeners.push(t)}}},35184:(t,e,i)=>{i.r(e),i.d(e,{kol_input_radio:()=>r});var a=i(99459),n=i(7269),o=i(57159),s=i(50501),l=i(99311);const r=class{render(){const{ariaDiscribedBy:t,hasError:e}=(0,o.g)(this.state);return(0,a.h)(a.H,null,(0,a.h)("fieldset",{class:{error:!0===e,disabled:!0===this.state._disabled,required:!0===this.state._required,[this.state._orientation]:!0}},(0,a.h)("legend",{class:"block w-full mb-1 leading-normal"},(0,a.h)("span",null,(0,a.h)("slot",null))),this.state._list.map(((e,i)=>{const n=`${this.state._id}-${i}`;return(0,a.h)("kol-input",{key:n,_disabled:this.state._disabled||e.disabled,_hideLabel:this.state._hideLabel,_hint:this.state._hint,_id:n,_renderNoLabel:!0,_required:this.state._required,_touched:this.state._touched},(0,a.h)("div",{slot:"input"},(0,a.h)("input",Object.assign({ref:this.state._value===e.value?this.catchRef:void 0,accessKey:this.state._accessKey,"aria-describedby":t.length>0?t.join(" "):void 0,"aria-labelledby":`${n}-label`,title:"",type:"radio",id:n,checked:this.state._value===e.value,name:this.state._name||this.state._id,disabled:this.state._disabled||e.disabled,required:this.state._required,tabIndex:this.state._tabIndex,value:`-${i}`},this.controller.onFacade,{onChange:this.onChange})),(0,a.h)("label",{htmlFor:`${n}`,id:`${n}-label`,style:{height:this.state._hideLabel&&!0!==this.state._required?"0":void 0,margin:this.state._hideLabel&&!0!==this.state._required?"0":void 0,padding:this.state._hideLabel&&!0!==this.state._required?"0":void 0,visibility:this.state._hideLabel&&!0!==this.state._required?"hidden":void 0}},(0,a.h)("span",null,(0,a.h)("span",null,e.label)))))})),e&&(0,a.h)("kol-alert",{id:"error",_alert:!0,_type:"error",_variant:"msg"},this.state._error)))}constructor(t){(0,a.r)(this,t),this.catchRef=t=>{this.ref=t,(0,n.a)(this.host,this.ref)},this.onChange=t=>{if(t.target instanceof HTMLInputElement){const e=this.controller.getOptionByKey(t.target.value);void 0!==e&&this.controller.setValue(t,e.value)}},this._accessKey=void 0,this._alert=!0,this._disabled=void 0,this._error=void 0,this._hideLabel=void 0,this._hint="",this._id=void 0,this._list=void 0,this._name=void 0,this._on=void 0,this._orientation="vertical",this._required=void 0,this._tabIndex=void 0,this._touched=!1,this._value=void 0,this.state={_id:(0,l.n)(),_list:[],_orientation:"vertical"},this.controller=new s.a(this,"radio",this.host)}validateAccessKey(t){this.controller.validateAccessKey(t)}validateAlert(t){this.controller.validateAlert(t)}validateDisabled(t){this.controller.validateDisabled(t)}validateError(t){this.controller.validateError(t)}validateHideLabel(t){this.controller.validateHideLabel(t)}validateHint(t){this.controller.validateHint(t)}validateId(t){this.controller.validateId(t)}validateList(t){this.controller.validateList(t)}validateName(t){this.controller.validateName(t)}validateOn(t){this.controller.validateOn(t)}validateOrientation(t){this.controller.validateOrientation(t)}validateRequired(t){this.controller.validateRequired(t)}validateTabIndex(t){this.controller.validateTabIndex(t)}validateTouched(t){this.controller.validateTouched(t)}validateValue(t){this.controller.validateValue(t)}componentWillLoad(){this._alert=!0===this._alert,this._touched=!0===this._touched,this.controller.componentWillLoad(this.onChange)}get host(){return(0,a.g)(this)}static get watchers(){return{_accessKey:["validateAccessKey"],_alert:["validateAlert"],_disabled:["validateDisabled"],_error:["validateError"],_hideLabel:["validateHideLabel"],_hint:["validateHint"],_id:["validateId"],_list:["validateList"],_name:["validateName"],_on:["validateOn"],_orientation:["validateOrientation"],_required:["validateRequired"],_tabIndex:["validateTabIndex"],_touched:["validateTouched"],_value:["validateValue"]}}};r.style={default:":host{--a11y-min-size:44px}*{hyphens:auto;letter-spacing:inherit;word-break:break-word;word-spacing:inherit}*[role='button'],button:not([role='link']){min-height:var(--a11y-min-size);min-width:var(--a11y-min-size)}a,button,h1,h2,h3,h4,h5,h6,input,option,select,textarea{font-family:inherit}:is(a,button){background-color:transparent;border:none;margin:0;padding:0;width:100%;}:host{max-width:100%}*{box-sizing:border-box}kol-span-wc{display:grid;place-items:center}kol-span-wc>span{display:flex;place-items:center}a,button{cursor:pointer}a,button,input,option,select,textarea{font-family:inherit}.icon-only>kol-span-wc>span>span{display:none}.required label>span::after,.required legend>span::after{content:'*'}:host{display:block}input,textarea{cursor:text}input[type='checkbox'],input[type='radio'],input[type='range'],label,option,select{cursor:pointer}input[type='color'],input[type='date'],input[type='datetime-local'],input[type='email'],input[type='file'],input[type='month'],input[type='number'],input[type='password'],input[type='search'],input[type='tel'],input[type='text'],input[type='time'],input[type='url'],input[type='week'],select[multiple] option,select:not([multiple]),textarea{font-size:1rem}input[type='file']{padding:calc((var(--a11y-min-size) - 1rem) / 10) 0.5em}select[multiple] option{padding:calc((var(--a11y-min-size) - 1rem) / 2) 0.5em}kol-input.disabled :is(button,input,label,option,select,textarea){cursor:not-allowed;opacity:0.5}:host{--border-width:2px;--input-size:1.5em}kol-input .icons{display:none}label{cursor:pointer}input{appearance:none;border-width:var(--border-width);border-style:solid;border-radius:100%;cursor:pointer;display:flex;height:var(--input-size);margin:0;min-height:var(--input-size);min-width:var(--input-size);padding:0;width:var(--input-size)}input:before{border-radius:100%;content:'';margin:auto;height:calc(var(--input-size) / 2);width:calc(var(--input-size) / 2)}input:checked:before{background-color:black}fieldset{display:flex}fieldset.vertical{flex-direction:column}fieldset [slot='input']{align-items:center;display:flex}.required label>span::after{content:''}"}},11146:(t,e,i)=>{i.d(e,{v:()=>s});var a=i(82120),n=i(80161);const o={hooks:{afterPatch:t=>{-1!==t&&0!==t&&(0,a.a)("Don’t Use Tabindex Greater than 0: https://adrianroselli.com/2014/11/dont-use-tabindex-greater-than-0.html")}}},s=(t,e)=>{(0,n.e)(t,"_tabIndex",e,o)}}}]);