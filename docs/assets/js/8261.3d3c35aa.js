/*! For license information please see 8261.3d3c35aa.js.LICENSE.txt */
"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[8261],{70486:(t,e,i)=>{i.d(e,{I:()=>a,a:()=>l});var o=i(754),n=i(7398);class a extends n.I{constructor(t,e,i){super(t,e,i),this.component=t}validateList(t){(0,o.d)(this.component,"_list",(t=>"string"==typeof t),t)}componentWillLoad(){super.componentWillLoad(),this.validateList(this.component._list)}}class l extends a{constructor(t,e,i){super(t,e,i),this.hasError=!1,this.hasList=!1,this.component=t}validateType(t){(0,o.a)(this.component,"_type",(t=>"string"==typeof t&&("text"===t||"search"===t||"url"===t||"tel"===t)),new Set(["String {text, search, url, tel}"]),t)}componentWillLoad(){super.componentWillLoad(),this.validateType(this.component._type)}}},7398:(t,e,i)=>{i.d(e,{I:()=>l});var o=i(36840),n=i(754),a=i(43594);class l extends a.I{constructor(t,e,i){super(t,e,i),this.handleHiddenLabelAndRequired=()=>{!0===this.component.state._hideLabel&&!0===this.component.state._required?((0,o.d)("[KolInput*] Wenn man das Label ausblendet, dann kann der sehende Nutzer:in nicht mehr erkennen, ob die Eingabe erforderlich ist."),this.hideLabel=!1):this.hideLabel=!0===this.component.state._hideLabel},this.component=t}validateAutoComplete(t){(0,n.a)(this.component,"_autoComplete",(t=>"string"==typeof t&&("on"===t||"off"===t)),new Set(["on | off"]),t)}validateHideLabel(t){(0,n.b)(this.component,"_hideLabel",t,{hooks:{afterPatch:this.handleHiddenLabelAndRequired}})}validateMaxLength(t){(0,n.e)(this.component,"_maxLength",t,{min:0})}validatePattern(t){(0,n.w)(this.component,"_pattern",t)}validatePlaceholder(t){(0,n.w)(this.component,"_placeholder",t)}validateReadOnly(t){(0,n.b)(this.component,"_readOnly",t)}validateRequired(t){(0,n.b)(this.component,"_required",t,{hooks:{afterPatch:this.handleHiddenLabelAndRequired}})}validateSize(t){(0,n.e)(this.component,"_size",t,{min:1})}validateValue(t){(0,n.w)(this.component,"_value",t)}componentWillLoad(){super.componentWillLoad(),this.validateAutoComplete(this.component._autoComplete),this.validateMaxLength(this.component._maxLength),this.validatePattern(this.component._pattern),this.validatePlaceholder(this.component._placeholder),this.validateReadOnly(this.component._readOnly),this.validateRequired(this.component._required),this.validateSize(this.component._size),this.validateValue(this.component._value)}onBlur(t){this.component.state=Object.assign(Object.assign({},this.component.state),{_placeholder:this.placeholderCache}),this.placeholderCache=void 0,super.onBlur(t)}onFocus(t){this.placeholderCache=this.component.state._placeholder,this.component.state=Object.assign(Object.assign({},this.component.state),{_placeholder:void 0}),super.onFocus(t)}}},67888:(t,e,i)=>{i.d(e,{I:()=>h,g:()=>s});var o=i(36840),n=i(754),a=i(30021),l=i(14680);const s=t=>{const e="string"==typeof t._error&&t._error.length>0&&!0===t._touched,i="string"==typeof t._hint&&t._hint.length>0,o=[];return!0===e&&o.push(`${t._id}-error`),!0===i&&o.push(`${t._id}-hint`),{hasError:e,hasHint:i,ariaDiscribedBy:o}},d=(0,l.b)();class r{constructor(t,e,i){var o,n,a,l,s;if(this.syncFormAssociatedName=()=>{var t;d&&(null===(t=this.formAssociated)||void 0===t||t.setAttribute("name",this.component.state._name||this.component.state._id))},this.setFormAssociatedValue=(t=null)=>{var e;d&&(null===(e=this.formAssociated)||void 0===e||e.setAttribute("value",t))},this.component=t,this.name=e,this.host=i,d){this.formAssociated=document.createElement("input"),this.formAssociated.setAttribute("type","hidden");const t=(null===(o=this.host)||void 0===o?void 0:o.children)||[];for(let e=0;e<t.length;e++)"INPUT"===(null===(n=this.host)||void 0===n?void 0:n.children[e].tagName)&&(null===(a=this.host)||void 0===a||a.removeChild(null===(l=this.host)||void 0===l?void 0:l.children[e]));null===(s=this.host)||void 0===s||s.appendChild(this.formAssociated)}}validateAlert(t){(0,n.b)(this.component,"_alert",t)}validateTouched(t){(0,n.b)(this.component,"_touched",t)}componentWillLoad(){this.validateAlert(this.component._alert),this.validateTouched(this.component._touched)}}class h extends r{constructor(t,e,i){super(t,e,i),this.hideLabel=!1,this.onFacade={onBlur:this.onBlur.bind(this),onChange:this.onChange.bind(this),onClick:this.onClick.bind(this),onFocus:this.onFocus.bind(this)},this.component=t}validateAccessKey(t){(0,n.w)(this.component,"_accessKey",t)}validateAdjustHeight(t){(0,n.b)(this.component,"_adjustHeight",t)}validateDisabled(t){(0,n.b)(this.component,"_disabled",t),!0===t&&(0,o.e)()}validateError(t){(0,n.w)(this.component,"_error",t)}validateHideLabel(t){(0,n.b)(this.component,"_hideLabel",t)}validateHint(t){(0,n.w)(this.component,"_hint",t)}validateId(t){(0,n.w)(this.component,"_id",t,{hooks:{afterPatch:this.syncFormAssociatedName}}),void 0===t&&(0,o.d)("Eine eindeutige ID an den Eingabefeldern ist nicht zwingend erforderlich, k\xf6nnte aber f\xfcr die E2E-Tests relevant sein.")}validateName(t){(0,n.w)(this.component,"_name",t,{hooks:{afterPatch:this.syncFormAssociatedName}}),void 0===t&&(0,o.d)("Ein Name an den Eingabefeldern ist nicht zwingend erforderlich, kann aber f\xfcr die Autocomplete-Funktion des Eingabefeldes relevant sein.")}validateOn(t){"object"==typeof t&&(0,n.s)(this.component,"_on",t)}validateSmartButton(t){(0,n.o)(t,(()=>{try{t=(0,n.p)(t)}catch(t){}(0,n.s)(this.component,"_smartButton",t)}))}validateTabIndex(t){(0,a.v)(this.component,t)}componentWillLoad(){super.componentWillLoad(),this.validateAccessKey(this.component._accessKey),this.validateAdjustHeight(this.component._adjustHeight),this.validateError(this.component._error),this.validateDisabled(this.component._disabled),this.validateHideLabel(this.component._hideLabel),this.validateHint(this.component._hint),this.validateId(this.component._id),this.validateName(this.component._name),this.validateSmartButton(this.component._smartButton),this.validateOn(this.component._on),this.validateTabIndex(this.component._tabIndex),this.syncFormAssociatedName()}onBlur(t){var e;this.component._alert=!0,this.component._touched=!0,"function"==typeof(null===(e=this.component._on)||void 0===e?void 0:e.onBlur)&&this.component._on.onBlur(t)}onChange(t){var e;this.setFormAssociatedValue(t.target.value),"function"==typeof(null===(e=this.component._on)||void 0===e?void 0:e.onChange)&&this.component._on.onChange(t,t.target.value)}onClick(t){var e;"function"==typeof(null===(e=this.component._on)||void 0===e?void 0:e.onClick)&&this.component._on.onClick(t)}onFocus(t){var e;this.component._alert=!0,"function"==typeof(null===(e=this.component._on)||void 0===e?void 0:e.onFocus)&&this.component._on.onFocus(t)}setValue(t,e){var i;this.setFormAssociatedValue(e),"function"==typeof(null===(i=this.component._on)||void 0===i?void 0:i.onChange)&&this.component._on.onChange(t,e)}}},25751:(t,e,i)=>{i.d(e,{a:()=>s,p:()=>d});var o=i(36840),n=i(14680),a=i(754);const l=t=>{for((0,n.b)()&&((0,o.d)("\u2193 Search form element start."),console.log(t));t instanceof HTMLElement&&"FORM"!==t.tagName&&"KOL-FORM"!==t.tagName;)t=t.parentElement instanceof HTMLElement?t.parentElement:t.parentNode instanceof ShadowRoot?t.parentNode.host:null,(0,n.b)()&&console.log(t);return(0,n.b)()&&(0,o.d)("\u2191 Search form element finished."),t},s=(t={})=>{const e=l(t.form);if(e instanceof HTMLElement){const t=new Event("reset",{bubbles:!0,cancelable:!0});if("FORM"===e.tagName)(0,a.f)(t,e),e.dispatchEvent(t);else if("KOL-FORM"===e.tagName){(0,a.f)(t,a.K.querySelector("form",e));const i=e;"object"==typeof i._on&&null!==typeof i._on&&"function"==typeof i._on.onReset&&i._on.onReset(t)}}},d=(t={})=>{const e=l(t.form);if(e instanceof HTMLElement){const t=new SubmitEvent("submit",{bubbles:!0,cancelable:!0,submitter:e});if("FORM"===e.tagName)(0,a.f)(t,e),e.dispatchEvent(t);else if("KOL-FORM"===e.tagName){(0,a.f)(t,a.K.querySelector("form",e));const i=e;"object"==typeof i._on&&null!==typeof i._on&&"function"==typeof i._on.onSubmit&&i._on.onSubmit(t)}}}},43594:(t,e,i)=>{i.d(e,{I:()=>d});var o=i(754),n=i(73570),a=i(72615),l=i(67888);const s=(t,e)=>{const i=t;"object"==typeof i&&null!==i&&((0,n.b)(i.right,1)&&(i.right={icon:i.right}),(0,n.b)(i.left,1)&&(i.left={icon:i.left}),e.set("_icon",i))};class d extends l.I{constructor(t,e,i){super(t,e,i),this.component=t}validateIcon(t){(0,o.o)(t,(()=>{try{t=(0,o.p)(t)}catch(t){}(0,o.a)(this.component,"_icon",(t=>"object"==typeof t&&null!==t&&((0,n.b)(t.left,1)||(0,a.i)(t.left)||(0,n.b)(t.right,1)||(0,a.i)(t.right))),new Set(["KoliBriHorizontalIcon"]),t,{hooks:{beforePatch:s},required:!0})}))}componentWillLoad(){super.componentWillLoad(),this.validateIcon(this.component._icon)}}},72615:(t,e,i)=>{i.d(e,{i:()=>s,v:()=>d,w:()=>r});var o=i(754),n=i(73570);const a=(t,e,i)=>{(0,n.d)(i)?t[e]=i:(0,n.b)(i,1)&&(t[e]={icon:i})},l=t=>{var e,i,o,l,s,d,r;if(null===(e=t.nextState)||void 0===e?void 0:e.has("_icon")){const e=null===(i=t.nextState)||void 0===i?void 0:i.get("_icon"),s=(null===(o=t.nextState)||void 0===o?void 0:o.get("_iconAlign"))||t.state._iconAlign;null===(l=t.nextState)||void 0===l||l.set("_icon",((t,e)=>{let i={};return(0,n.b)(t,1)?i="right"===e?{right:{icon:t}}:{left:{icon:t}}:"object"==typeof t&&null!==t&&(a(i,"top",t.top),a(i,"right",t.right),a(i,"bottom",t.bottom),a(i,"left",t.left)),i})(e,s))}else if(null===(s=t.nextState)||void 0===s?void 0:s.has("_iconAlign")){const e=t.state._iconAlign;null===(d=t.nextState)||void 0===d||d.set("_icon",{[e]:void 0,[null===(r=t.nextState)||void 0===r?void 0:r.get("_iconAlign")]:t.state._icon[e]})}},s=t=>"object"==typeof t&&null!==t&&(void 0===t.style||(0,n.c)(t.style))&&(0,n.b)(t.icon,1),d=(t,e)=>{(0,o.o)(e,(()=>{try{e=(0,o.p)(e)}catch(t){}(0,o.a)(t,"_icon",(t=>null===t||(0,n.b)(t,1)||"object"==typeof t&&null!==t&&((0,n.b)(t.left,1)||s(t.left)||(0,n.b)(t.right,1)||s(t.right)||(0,n.b)(t.top,1)||s(t.top)||(0,n.b)(t.bottom,1)||s(t.bottom))),new Set(["KoliBriIcon"]),e,{hooks:{beforePatch:(e,i)=>{null===e&&i.set("_icon",{}),l(t)}},required:!0})}))},r=(t,e)=>{(0,o.a)(t,"_iconAlign",(t=>"left"===t||"right"===t),new Set(["Alignment {left, right, top, bottom}"]),e,{hooks:{beforePatch:()=>{l(t)}}})}},68261:(t,e,i)=>{i.r(e),i.d(e,{kol_input_email:()=>h});var o=i(51642),n=i(73570),a=i(25751),l=i(67888),s=i(754),d=i(70486);class r extends d.I{constructor(t,e,i){super(t,e,i),this.component=t}validateMultiple(t){(0,s.b)(this.component,"_multiple",t)}componentWillLoad(){super.componentWillLoad(),this.validateMultiple(this.component._multiple)}}const h=class{render(){const{ariaDiscribedBy:t}=(0,l.g)(this.state),e=Array.isArray(this.state._list)&&this.state._list.length>0;return(0,o.h)(o.H,null,(0,o.h)("kol-input",{_alert:this.state._alert,_disabled:this.state._disabled,_error:this.state._error,_hideLabel:this.state._hideLabel,_hint:this.state._hint,_icon:this.state._icon,_id:this.state._id,_list:this.state._list,_readOnly:this.state._readOnly,_required:this.state._required,_smartButton:this.state._smartButton,_touched:this.state._touched},(0,o.h)("span",{slot:"label"},(0,o.h)("slot",null)),(0,o.h)("input",Object.assign({ref:this.catchRef,part:"input",title:"",accessKey:this.state._accessKey,"aria-describedby":t.length>0?t.join(" "):void 0,"aria-labelledby":`${this.state._id}-label`,autoCapitalize:"off",autoComplete:this.state._autoComplete,autoCorrect:"off",disabled:this.state._disabled,multiple:this.state._multiple,id:this.state._id,list:e?`${this.state._id}-list`:void 0,maxlength:this.state._maxLength,name:this.state._name,pattern:this.state._pattern,placeholder:this.state._placeholder,readOnly:this.state._readOnly,required:this.state._required,size:this.state._size,slot:"input",spellcheck:"false",type:"email",value:this.state._value},this.controller.onFacade,{onKeyUp:this.onKeyUp}))))}constructor(t){(0,o.r)(this,t),this.catchRef=t=>{this.ref=t,(0,n.a)(this.host,this.ref)},this.onKeyUp=t=>{"Enter"===t.code?(0,a.p)({form:this.host,ref:this.ref}):this.controller.onFacade.onChange(t)},this._accessKey=void 0,this._alert=!0,this._autoComplete=void 0,this._disabled=void 0,this._error=void 0,this._hideLabel=void 0,this._hint="",this._icon=void 0,this._id=void 0,this._list=void 0,this._maxLength=void 0,this._multiple=void 0,this._name=void 0,this._on=void 0,this._pattern=void 0,this._placeholder=void 0,this._readOnly=void 0,this._required=void 0,this._size=void 0,this._smartButton=void 0,this._tabIndex=void 0,this._touched=!1,this._value=void 0,this.state={_autoComplete:"off",_id:"\u2026",_list:[]},this.controller=new r(this,"email",this.host)}validateAccessKey(t){this.controller.validateAccessKey(t)}validateAlert(t){this.controller.validateAlert(t)}validateAutoComplete(t){this.controller.validateAutoComplete(t)}validateDisabled(t){this.controller.validateDisabled(t)}validateError(t){this.controller.validateError(t)}validateHideLabel(t){this.controller.validateHideLabel(t)}validateHint(t){this.controller.validateHint(t)}validateIcon(t){this.controller.validateIcon(t)}validateId(t){this.controller.validateId(t)}validateList(t){this.controller.validateList(t)}validateMaxLength(t){this.controller.validateMaxLength(t)}validateMultiple(t){this.controller.validateMultiple(t)}validateName(t){this.controller.validateName(t)}validateOn(t){this.controller.validateOn(t)}validatePattern(t){this.controller.validatePattern(t)}validatePlaceholder(t){this.controller.validatePlaceholder(t)}validateReadOnly(t){this.controller.validateReadOnly(t)}validateRequired(t){this.controller.validateRequired(t)}validateSize(t){this.controller.validateSize(t)}validateSmartButton(t){this.controller.validateSmartButton(t)}validateTabIndex(t){this.controller.validateTabIndex(t)}validateTouched(t){this.controller.validateTouched(t)}validateValue(t){this.controller.validateValue(t)}componentWillLoad(){this._alert=!0===this._alert,this._touched=!0===this._touched,this.controller.componentWillLoad()}get host(){return(0,o.g)(this)}static get watchers(){return{_accessKey:["validateAccessKey"],_alert:["validateAlert"],_autoComplete:["validateAutoComplete"],_disabled:["validateDisabled"],_error:["validateError"],_hideLabel:["validateHideLabel"],_hint:["validateHint"],_icon:["validateIcon"],_id:["validateId"],_list:["validateList"],_maxLength:["validateMaxLength"],_multiple:["validateMultiple"],_name:["validateName"],_on:["validateOn"],_pattern:["validatePattern"],_placeholder:["validatePlaceholder"],_readOnly:["validateReadOnly"],_required:["validateRequired"],_size:["validateSize"],_smartButton:["validateSmartButton"],_tabIndex:["validateTabIndex"],_touched:["validateTouched"],_value:["validateValue"]}}};h.style={default:":host{--a11y-min-size:44px}*{hyphens:auto;letter-spacing:inherit;word-break:break-word;word-spacing:inherit}*[role='button'],button:not([role='link']),input[type='color'],input[type='date'],input[type='datetime-local'],input[type='email'],input[type='file'],input[type='month'],input[type='number'],input[type='password'],input[type='search'],input[type='tel'],input[type='text'],input[type='time'],input[type='url'],input[type='week'],option,select,textarea{min-height:var(--a11y-min-size);min-width:var(--a11y-min-size)}:is(a,button){background-color:transparent;border:none;margin:0;padding:0;width:100%;}:host{max-width:100%}*{box-sizing:border-box}kol-span-wc{display:grid;place-items:center}kol-span-wc>span{display:flex;place-items:center}a,button,input[type='checkbox'],input[type='color'],input[type='file'],input[type='radio'],option,select{cursor:pointer;font-family:inherit;font-size:inherit}.icon-only>kol-span-wc>span>span{display:none}.required *[id*='-label']>span::after{content:'*';padding-left:0.125em}:host{display:block}input[type='color'],input[type='date'],input[type='datetime-local'],input[type='email'],input[type='file'],input[type='month'],input[type='number'],input[type='password'],input[type='search'],input[type='tel'],input[type='text'],input[type='time'],input[type='url'],input[type='week'],select[multiple] option,select:not([multiple]),textarea{font-size:1rem;padding:0 0.5em}input[type='file']{padding:calc((var(--a11y-min-size) - 1rem) / 10) 0.5em}select[multiple] option{padding:calc((var(--a11y-min-size) - 1rem) / 2) 0.5em}:is(button,input,option,select,textarea):disabled,.kol-cursor-not-allowed,.kol-cursor-not-allowed *{cursor:not-allowed}kol-input{display:grid}input,option,select,textarea{display:block;line-height:2.5em;flex-grow:1}div.input{display:flex}div.input>kol-icon{display:grid;height:var(--a11y-min-size);place-items:center;width:2.5em}input,select:not([multiple]){height:2.75em}.disabled{opacity:0.5}"}},30021:(t,e,i)=>{i.d(e,{v:()=>l});var o=i(36840),n=i(754);const a={hooks:{afterPatch:t=>{-1!==t&&0!==t&&(0,o.a)("Don\u2019t Use Tabindex Greater than 0: https://adrianroselli.com/2014/11/dont-use-tabindex-greater-than-0.html")}}},l=(t,e)=>{(0,n.e)(t,"_tabIndex",e,a)}}}]);