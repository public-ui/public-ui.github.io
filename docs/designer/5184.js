/*! For license information please see 5184.js.LICENSE.txt */
"use strict";(self.webpackChunk_public_ui_designer=self.webpackChunk_public_ui_designer||[]).push([[5184],{37513:(t,e,i)=>{i.d(e,{I:()=>h,g:()=>s});var o=i(9634),a=i(44594),n=i(43529),r=i(9694);const s=t=>{const e="string"==typeof t._error&&t._error.length>0&&!0===t._touched,i="string"==typeof t._hint&&t._hint.length>0,o=[];return!0===e&&o.push(`${t._id}-error`),!0===i&&o.push(`${t._id}-hint`),{hasError:e,hasHint:i,ariaDiscribedBy:o}},l=(0,r.b)();class d{constructor(t,e,i){var o,a,n,r,s;if(this.syncFormAssociatedName=()=>{var t;l&&(null===(t=this.formAssociated)||void 0===t||t.setAttribute("name",this.component.state._name||this.component.state._id))},this.setFormAssociatedValue=(t=null)=>{var e;l&&(null===(e=this.formAssociated)||void 0===e||e.setAttribute("value",t))},this.component=t,this.name=e,this.host=i,l){this.formAssociated=document.createElement("input"),this.formAssociated.setAttribute("type","hidden");const t=(null===(o=this.host)||void 0===o?void 0:o.children)||[];for(let e=0;e<t.length;e++)"INPUT"===(null===(a=this.host)||void 0===a?void 0:a.children[e].tagName)&&(null===(n=this.host)||void 0===n||n.removeChild(null===(r=this.host)||void 0===r?void 0:r.children[e]));null===(s=this.host)||void 0===s||s.appendChild(this.formAssociated)}}validateAlert(t){(0,a.b)(this.component,"_alert",t)}validateTouched(t){(0,a.b)(this.component,"_touched",t)}componentWillLoad(){this.validateAlert(this.component._alert),this.validateTouched(this.component._touched)}}class h extends d{constructor(t,e,i){super(t,e,i),this.hideLabel=!1,this.onFacade={onBlur:this.onBlur.bind(this),onChange:this.onChange.bind(this),onClick:this.onClick.bind(this),onFocus:this.onFocus.bind(this)},this.component=t}validateAccessKey(t){(0,a.w)(this.component,"_accessKey",t)}validateAdjustHeight(t){(0,a.b)(this.component,"_adjustHeight",t)}validateDisabled(t){(0,a.b)(this.component,"_disabled",t),!0===t&&(0,o.e)()}validateError(t){(0,a.w)(this.component,"_error",t)}validateHideLabel(t){(0,a.b)(this.component,"_hideLabel",t)}validateHint(t){(0,a.w)(this.component,"_hint",t)}validateId(t){(0,a.w)(this.component,"_id",t,{hooks:{afterPatch:this.syncFormAssociatedName}}),void 0===t&&(0,o.d)("Eine eindeutige ID an den Eingabefeldern ist nicht zwingend erforderlich, könnte aber für die E2E-Tests relevant sein.")}validateName(t){(0,a.w)(this.component,"_name",t,{hooks:{afterPatch:this.syncFormAssociatedName}}),void 0===t&&(0,o.d)("Ein Name an den Eingabefeldern ist nicht zwingend erforderlich, kann aber für die Autocomplete-Funktion des Eingabefeldes relevant sein.")}validateOn(t){"object"==typeof t&&(0,a.s)(this.component,"_on",t)}validateSmartButton(t){(0,a.o)(t,(()=>{try{t=(0,a.p)(t)}catch(t){}(0,a.s)(this.component,"_smartButton",t)}))}validateTabIndex(t){(0,n.v)(this.component,t)}componentWillLoad(){super.componentWillLoad(),this.validateAccessKey(this.component._accessKey),this.validateAdjustHeight(this.component._adjustHeight),this.validateError(this.component._error),this.validateDisabled(this.component._disabled),this.validateHideLabel(this.component._hideLabel),this.validateHint(this.component._hint),this.validateId(this.component._id),this.validateName(this.component._name),this.validateSmartButton(this.component._smartButton),this.validateOn(this.component._on),this.validateTabIndex(this.component._tabIndex),this.syncFormAssociatedName()}onBlur(t){var e;this.component._alert=!0,this.component._touched=!0,"function"==typeof(null===(e=this.component._on)||void 0===e?void 0:e.onBlur)&&this.component._on.onBlur(t)}onChange(t){var e;this.setFormAssociatedValue(t.target.value),"function"==typeof(null===(e=this.component._on)||void 0===e?void 0:e.onChange)&&this.component._on.onChange(t,t.target.value)}onClick(t){var e;"function"==typeof(null===(e=this.component._on)||void 0===e?void 0:e.onClick)&&this.component._on.onClick(t)}onFocus(t){var e;this.component._alert=!0,"function"==typeof(null===(e=this.component._on)||void 0===e?void 0:e.onFocus)&&this.component._on.onFocus(t)}setValue(t,e){var i;this.setFormAssociatedValue(e),"function"==typeof(null===(i=this.component._on)||void 0===i?void 0:i.onChange)&&this.component._on.onChange(t,e)}}},57015:(t,e,i)=>{i.d(e,{I:()=>s,a:()=>l,f:()=>r});var o=i(44594),a=i(6715),n=i(37513);const r=(t,e,i="")=>{e.forEach(((e,o)=>{const a=`${i}-${o}`;"object"==typeof e&&null!==e&&"string"==typeof e.label&&e.label.length>0&&(Array.isArray(e.options)?r(t,e.options,a):t.set(a,e))}))};class s extends n.I{constructor(t,e,i){super(t,e,i),this.component=t}validateRequired(t){(0,o.b)(this.component,"_required",t)}componentWillLoad(){super.componentWillLoad(),this.validateRequired(this.component._required)}}class l extends s{constructor(t,e,i){super(t,e,i),this.keyOptionMap=new Map,this.getOptionByKey=t=>this.keyOptionMap.get(t),this.isValueInOptions=(t,e)=>void 0!==e.find((e=>e.value===t)),this.beforePatchListValue=(t,e)=>{const i=e.has("_list")?e.get("_list"):this.component.state._list;if(Array.isArray(i)&&i.length>0){this.keyOptionMap.clear(),r(this.keyOptionMap,i);const t=e.has("_value")?e.get("_value"):this.component.state._value;if(!1===this.isValueInOptions(t,i)){const t=i[0].value;e.set("_value",t),this.onStateChange()}}},this.component=t}validateOrientation(t){(0,o.a)(this.component,"_orientation",(t=>"horizontal"===t||"vertical"===t),new Set(["Orientation {horizontal, vertical}"]),t,{defaultValue:"vertical"})}validateList(t){(0,o.d)(this.component,"_list",(t=>"object"==typeof t&&null!==t&&"string"==typeof t.label&&t.label.length>0),t,void 0,{hooks:{beforePatch:this.beforePatchListValue}})}validateValue(t){t=(0,o.m)(t),t=Array.isArray(t)?t[0]:t,(0,o.s)(this.component,"_value",t,{beforePatch:this.beforePatchListValue}),this.setFormAssociatedValue(this.component._value)}componentWillLoad(t){super.componentWillLoad(),this.onStateChange=()=>{if("function"==typeof t){const e=setTimeout((()=>{clearTimeout(e),t(a.S)}))}},this.validateOrientation(this.component._orientation),this.validateList(this.component._list),this.validateValue(this.component._value)}}},35184:(t,e,i)=>{i.r(e),i.d(e,{kol_input_radio:()=>s});var o=i(99459),a=i(6715),n=i(37513),r=i(57015);const s=class{render(){const{ariaDiscribedBy:t,hasError:e}=(0,n.g)(this.state);return(0,o.h)(o.H,null,(0,o.h)("fieldset",{class:{error:!0===e,disabled:!0===this.state._disabled,required:!0===this.state._required,[this.state._orientation]:!0}},(0,o.h)("legend",{class:"block w-full mb-1 leading-normal"},(0,o.h)("span",null,(0,o.h)("slot",null))),this.state._list.map(((e,i)=>{const a=`${this.state._id}-${i}`;return(0,o.h)("kol-input",{key:a,_disabled:this.state._disabled,_hideLabel:this.state._hideLabel,_hint:this.state._hint,_id:a,_renderNoLabel:!0,_required:this.state._required,_touched:this.state._touched},(0,o.h)("div",{slot:"input"},(0,o.h)("input",Object.assign({ref:this.state._value===e.value?this.catchRef:void 0,accessKey:this.state._accessKey,"aria-describedby":t.length>0?t.join(" "):void 0,"aria-labelledby":`${a}-label`,part:"input",title:"",type:"radio",id:a,checked:this.state._value===e.value,name:this.state._name||this.state._id,disabled:this.state._disabled||e.disabled,required:this.state._required,tabIndex:this.state._tabIndex,value:`-${i}`},this.controller.onFacade,{onChange:this.onChange})),(0,o.h)("label",{htmlFor:`${a}`,id:`${a}-label`,style:{height:this.state._hideLabel&&!0!==this.state._required?"0":void 0,margin:this.state._hideLabel&&!0!==this.state._required?"0":void 0,padding:this.state._hideLabel&&!0!==this.state._required?"0":void 0,visibility:this.state._hideLabel&&!0!==this.state._required?"hidden":void 0}},(0,o.h)("span",null,(0,o.h)("span",null,e.label)))))})),e&&(0,o.h)("kol-alert",{id:"error",_alert:!0,_type:"error",_variant:"msg"},this.state._error)))}constructor(t){(0,o.r)(this,t),this.catchRef=t=>{this.ref=t,(0,a.a)(this.host,this.ref)},this.onChange=t=>{if(t.target instanceof HTMLInputElement){const e=this.controller.getOptionByKey(t.target.value);void 0!==e&&this.controller.setValue(t,e.value)}},this._accessKey=void 0,this._alert=!0,this._disabled=void 0,this._error=void 0,this._hideLabel=void 0,this._hint="",this._id=void 0,this._list=void 0,this._name=void 0,this._on=void 0,this._orientation="vertical",this._required=void 0,this._tabIndex=void 0,this._touched=!1,this._value=void 0,this.state={_id:"⚠",_list:[],_orientation:"vertical"},this.controller=new r.a(this,"radio",this.host)}validateAccessKey(t){this.controller.validateAccessKey(t)}validateAlert(t){this.controller.validateAlert(t)}validateDisabled(t){this.controller.validateDisabled(t)}validateError(t){this.controller.validateError(t)}validateHideLabel(t){this.controller.validateHideLabel(t)}validateHint(t){this.controller.validateHint(t)}validateId(t){this.controller.validateId(t)}validateList(t){this.controller.validateList(t)}validateName(t){this.controller.validateName(t)}validateOn(t){this.controller.validateOn(t)}validateOrientation(t){this.controller.validateOrientation(t)}validateRequired(t){this.controller.validateRequired(t)}validateTabIndex(t){this.controller.validateTabIndex(t)}validateTouched(t){this.controller.validateTouched(t)}validateValue(t){this.controller.validateValue(t)}componentWillLoad(){this._alert=!0===this._alert,this._touched=!0===this._touched,this.controller.componentWillLoad(this.onChange)}get host(){return(0,o.g)(this)}static get watchers(){return{_accessKey:["validateAccessKey"],_alert:["validateAlert"],_disabled:["validateDisabled"],_error:["validateError"],_hideLabel:["validateHideLabel"],_hint:["validateHint"],_id:["validateId"],_list:["validateList"],_name:["validateName"],_on:["validateOn"],_orientation:["validateOrientation"],_required:["validateRequired"],_tabIndex:["validateTabIndex"],_touched:["validateTouched"],_value:["validateValue"]}}};s.style={default:":host{--kolibri-border-color:#666;--kolibri-border-radius:0.125rem;--kolibri-border-width:1px;--kolibri-color-error:#f44336;--kolibri-color-info:#2196f3;--kolibri-color-success:#4caf50;--kolibri-color-warning:#ff9800;--kolibri-color-primary:#3f51b5;--kolibri-color-secondary:#ff4081;--kolibri-color-normal:#9e9e9e;--kolibri-color-danger:#f44336;--kolibri-color-ghost:#f5f5f5;--kolibri-color-disabled:#bdbdbd;--kolibri-color-text:#222222;--kolibri-color-visited:#9c27b0;--kolibri-font-family:Verdana, Arial, Tahoma, Helvetica, sans-serif;--kolibri-font-size:16px;--kolibri-spacing:0.25rem}:host *{font-family:inherit;font-size:inherit;hyphens:auto;letter-spacing:inherit;word-break:break-word;word-spacing:inherit}:host{font-family:var(--kolibri-font-family);font-size:inherit}*{box-sizing:border-box}kol-icon{color:inherit}kol-span-wc{display:grid;place-items:center;width:100%}kol-span-wc>span{display:flex;gap:var(--kolibri-spacing);place-items:center}a{display:inline-flex;place-items:baseline}button{background-color:transparent;border-width:0;margin:0;min-height:44px;min-width:44px;padding:0}a,button,input,select,textarea{cursor:pointer}a.icon-only>kol-span-wc>span>span,:host button.icon-only>kol-span-wc>span>span{display:none}.kol-required span::after{content:'*'}.kol-disabled{opacity:0.5}.kol-cursor-not-allowed,.kol-cursor-not-allowed *{cursor:not-allowed}input[type='color'],input[type='date'],input[type='datetime-local'],input[type='email'],input[type='file'],input[type='month'],input[type='number'],input[type='password'],input[type='search'],input[type='tel'],input[type='text'],input[type='time'],input[type='url'],input[type='week'],select,textarea{background-color:white;display:block;font-size:1em;line-height:1.5em;padding:0.5em}input[type='color']{height:2.5em;padding:0.25em 0.5em}textarea{padding:0.5em}input,select,textarea{border-color:var(--kolibri-border-color);border-style:solid;border-width:1px}input input.error,input select.error,input textarea.error,select input.error,select select.error,select textarea.error,textarea input.error,textarea select.error,textarea textarea.error{border-color:var(--kolibri-border-error)}input input:focus,input input:hover,input select:focus,input select:hover,input textarea:focus,input textarea:hover,select input:focus,select input:hover,select select:focus,select select:hover,select textarea:focus,select textarea:hover,textarea input:focus,textarea input:hover,textarea select:focus,textarea select:hover,textarea textarea:focus,textarea textarea:hover{border-color:#999}input:not([type='checkbox']),option,select,textarea{font-size:inherit;letter-spacing:inherit;word-spacing:inherit}input:focus{outline-color:var(--kolibri-color-primary) !important;outline-offset:2px;outline-style:solid;outline-width:3px}label{display:grid;font-size:14px;line-height:20px;gap:8px;width:100%}input{width:100%;border-color:var(--kolibri-border-color);border-width:2px;border-style:solid;border-radius:5px;line-height:24px;font-size:16px}input:hover{border-color:var(--kolibri-color-primary)}kol-alert{display:block;width:100%}.kol-required span::after{content:'*'}fieldset{border:0px;margin:0px;padding:0px;display:grid;gap:0.25em}fieldset legend{display:block;width:100%;line-height:1.5em}fieldset div{cursor:pointer;display:flex;flex-direction:row;gap:0.5em;margin-top:0.25em;margin-bottom:0.25em;align-items:center;position:relative}fieldset div label{cursor:pointer;display:flex;width:100%}fieldset div label span{margin-top:0.125em}fieldset div input[type='radio']{appearance:none;transition:0.5s;border-radius:100%;height:calc(6 * var(--kolibri-spacing));min-width:calc(6 * var(--kolibri-spacing));width:calc(6 * var(--kolibri-spacing))}fieldset div input[type='radio']:before{content:'';cursor:pointer;left:calc(1.5 * var(--kolibri-spacing) - 2px);top:calc(1.5 * var(--kolibri-spacing) - 2px);position:relative;border-radius:100%;display:block;height:calc(3 * var(--kolibri-spacing));width:calc(3 * var(--kolibri-spacing))}fieldset div input[type='radio']:checked:before{box-shadow:0 0 0.1rem black;background-color:var(--kolibri-color-normal)}fieldset div input[type='radio']:disabled{background-color:var(--kolibri-color-disabled);border-color:#999;cursor:not-allowed}"}},43529:(t,e,i)=>{i.d(e,{v:()=>r});var o=i(9634),a=i(44594);const n={hooks:{afterPatch:t=>{-1!==t&&0!==t&&(0,o.a)("Don’t Use Tabindex Greater than 0: https://adrianroselli.com/2014/11/dont-use-tabindex-greater-than-0.html")}}},r=(t,e)=>{(0,a.e)(t,"_tabIndex",e,n)}}}]);