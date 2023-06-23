/*! For license information please see 2994.2b03b0d6.js.LICENSE.txt */ "use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[2994],{46638:(t,e,i)=>{i.d(e,{a:()=>s,p:()=>r});var a=i(99072),o=i(31391),l=i(47091);const n=t=>{for((0,o.b)()&&((0,a.d)("\u2193 Search form element start."),console.log(t));t instanceof HTMLElement&&"FORM"!==t.tagName&&"KOL-FORM"!==t.tagName;)t=t.parentElement instanceof HTMLElement?t.parentElement:t.parentNode instanceof ShadowRoot?t.parentNode.host:null,(0,o.b)()&&console.log(t);return(0,o.b)()&&(0,a.d)("\u2191 Search form element finished."),t},s=(t={})=>{var e,i;const a=n(t.form);if(a instanceof HTMLElement){const t=new Event("reset",{bubbles:!0,cancelable:!0});if("FORM"===a.tagName)(0,l.f)(t,a),a.dispatchEvent(t);else if("KOL-FORM"===a.tagName){(0,l.f)(t,l.K.querySelector("form",a));const o=a;"function"==typeof(null===(e=o._on)||void 0===e?void 0:e.onReset)&&(null===(i=o._on)||void 0===i||i.onReset(t))}}},r=(t={})=>{var e,i;const a=n(t.form);if(a instanceof HTMLElement){const t=new SubmitEvent("submit",{bubbles:!0,cancelable:!0,submitter:a});if("FORM"===a.tagName)(0,l.f)(t,a),a.dispatchEvent(t);else if("KOL-FORM"===a.tagName){(0,l.f)(t,l.K.querySelector("form",a));const o=a;"function"==typeof(null===(e=o._on)||void 0===e?void 0:e.onSubmit)&&(null===(i=o._on)||void 0===i||i.onSubmit(t))}}}},86249:(t,e,i)=>{i.d(e,{I:()=>n});var a=i(99072),o=i(47091),l=i(74007);class n extends l.I{constructor(t,e,i){super(t,e,i),this.handleHiddenLabelAndRequired=()=>{!0===this.component.state._hideLabel&&!0===this.component.state._required?((0,a.d)("[KolInput*] Wenn man das Label ausblendet, dann kann der sehende Nutzer:in nicht mehr erkennen, ob die Eingabe erforderlich ist."),this.hideLabel=!1):this.hideLabel=!0===this.component.state._hideLabel},this.component=t}validateAutoComplete(t){(0,o.a)(this.component,"_autoComplete",(t=>"string"==typeof t&&("on"===t||"off"===t)),new Set(["on | off"]),t)}validateHideLabel(t){(0,o.b)(this.component,"_hideLabel",t,{hooks:{afterPatch:this.handleHiddenLabelAndRequired}})}validateMaxLength(t){(0,o.e)(this.component,"_maxLength",t,{min:0})}validatePattern(t){(0,o.w)(this.component,"_pattern",t)}validatePlaceholder(t){(0,o.w)(this.component,"_placeholder",t)}validateReadOnly(t){(0,o.b)(this.component,"_readOnly",t)}validateRequired(t){(0,o.b)(this.component,"_required",t,{hooks:{afterPatch:this.handleHiddenLabelAndRequired}})}validateSize(t){(0,o.e)(this.component,"_size",t,{min:1})}validateValue(t){(0,o.w)(this.component,"_value",t),this.setFormAssociatedValue(this.component.state._value)}componentWillLoad(){super.componentWillLoad(),this.validateAutoComplete(this.component._autoComplete),this.validateMaxLength(this.component._maxLength),this.validatePattern(this.component._pattern),this.validatePlaceholder(this.component._placeholder),this.validateReadOnly(this.component._readOnly),this.validateRequired(this.component._required),this.validateSize(this.component._size),this.validateValue(this.component._value)}onBlur(t){this.component.state=Object.assign(Object.assign({},this.component.state),{_placeholder:this.placeholderCache}),this.placeholderCache=void 0,super.onBlur(t)}onFocus(t){this.placeholderCache=this.component.state._placeholder,this.component.state=Object.assign(Object.assign({},this.component.state),{_placeholder:void 0}),super.onFocus(t)}}},42333:(t,e,i)=>{i.d(e,{I:()=>l,a:()=>n});var a=i(47091),o=i(86249);class l extends o.I{constructor(t,e,i){super(t,e,i),this.component=t}validateList(t){(0,a.d)(this.component,"_list",(t=>"string"==typeof t),t)}componentWillLoad(){super.componentWillLoad(),this.validateList(this.component._list)}}class n extends l{constructor(t,e,i){super(t,e,i),this.hasError=!1,this.hasList=!1,this.component=t}validateType(t){(0,a.a)(this.component,"_type",(t=>"string"==typeof t&&("text"===t||"search"===t||"url"===t||"tel"===t)),new Set(["String {text, search, url, tel}"]),t)}componentWillLoad(){super.componentWillLoad(),this.validateType(this.component._type)}}},74007:(t,e,i)=>{i.d(e,{I:()=>r});var a=i(64648),o=i(47091),l=i(98730),n=i(46674);const s=(t,e)=>{const i=t;"object"==typeof i&&null!==i&&((0,l.b)(i.right,1)&&(i.right={icon:i.right}),(0,l.b)(i.left,1)&&(i.left={icon:i.left}),e.set("_icon",i))};class r extends n.I{constructor(t,e,i){super(t,e,i),this.component=t}validateIcon(t){(0,o.o)(t,(()=>{try{t=(0,o.p)(t)}catch(t){}(0,o.a)(this.component,"_icon",(t=>"object"==typeof t&&null!==t&&((0,l.b)(t.left,1)||(0,a.i)(t.left)||(0,l.b)(t.right,1)||(0,a.i)(t.right))),new Set(["KoliBriHorizontalIcon"]),t,{hooks:{beforePatch:s},required:!0})}))}componentWillLoad(){super.componentWillLoad(),this.validateIcon(this.component._icon)}}},64648:(t,e,i)=>{i.d(e,{i:()=>s,v:()=>r,w:()=>d});var a=i(47091),o=i(98730);const l=(t,e,i)=>{(0,o.d)(i)?t[e]=i:(0,o.b)(i,1)&&(t[e]={icon:i})},n=t=>{var e,i,a,n,s,r,d;if(null===(e=t.nextState)||void 0===e?void 0:e.has("_icon")){const e=null===(i=t.nextState)||void 0===i?void 0:i.get("_icon"),s=(null===(a=t.nextState)||void 0===a?void 0:a.get("_iconAlign"))||t.state._iconAlign;null===(n=t.nextState)||void 0===n||n.set("_icon",((t,e)=>{let i={};return(0,o.b)(t,1)?i="right"===e?{right:{icon:t}}:{left:{icon:t}}:"object"==typeof t&&null!==t&&(l(i,"top",t.top),l(i,"right",t.right),l(i,"bottom",t.bottom),l(i,"left",t.left)),i})(e,s))}else if(null===(s=t.nextState)||void 0===s?void 0:s.has("_iconAlign")){const e=t.state._iconAlign;null===(r=t.nextState)||void 0===r||r.set("_icon",{[e]:void 0,[null===(d=t.nextState)||void 0===d?void 0:d.get("_iconAlign")]:t.state._icon[e]})}},s=t=>"object"==typeof t&&null!==t&&(void 0===t.style||(0,o.c)(t.style))&&(0,o.b)(t.icon,1),r=(t,e)=>{(0,a.o)(e,(()=>{try{e=(0,a.p)(e)}catch(t){}(0,a.a)(t,"_icon",(t=>null===t||(0,o.b)(t,1)||"object"==typeof t&&null!==t&&((0,o.b)(t.left,1)||s(t.left)||(0,o.b)(t.right,1)||s(t.right)||(0,o.b)(t.top,1)||s(t.top)||(0,o.b)(t.bottom,1)||s(t.bottom))),new Set(["KoliBriIcon"]),e,{hooks:{beforePatch:(e,i)=>{null===e&&i.set("_icon",{}),n(t)}},required:!0})}))},d=(t,e)=>{(0,a.a)(t,"_iconAlign",(t=>"left"===t||"right"===t),new Set(["Alignment {left, right, top, bottom}"]),e,{hooks:{beforePatch:()=>{n(t)}}})}},72994:(t,e,i)=>{i.r(e),i.d(e,{kol_input_email:()=>c});var a=i(94335),o=i(31391),l=i(98730),n=i(46638),s=i(46674),r=i(47091),d=i(42333);class h extends d.I{constructor(t,e,i){super(t,e,i),this.component=t}validateMultiple(t){(0,r.b)(this.component,"_multiple",t)}componentWillLoad(){super.componentWillLoad(),this.validateMultiple(this.component._multiple)}}const c=class{render(){const{ariaDescribedBy:t}=(0,s.g)(this.state),e=Array.isArray(this.state._list)&&this.state._list.length>0,i=""===this.state._label,o="\u2026"===this.state._label;return(0,a.h)(a.H,{class:{"has-value":this.state._hasValue}},(0,a.h)("kol-input",{class:"email",_alert:this.state._alert,_disabled:this.state._disabled,_error:this.state._error,_hideLabel:this.state._hideLabel,_hint:this.state._hint,_icon:this.state._icon,_id:this.state._id,_list:this.state._list,_readOnly:this.state._readOnly,_required:this.state._required,_smartButton:this.state._smartButton,_touched:this.state._touched,onClick:()=>{var t;return null===(t=this.ref)||void 0===t?void 0:t.focus()}},(0,a.h)("span",{slot:"label"},i?(0,a.h)("slot",{name:"expert"}):o?(0,a.h)("slot",null):this.state._label),(0,a.h)("input",Object.assign({ref:this.catchRef,title:"",accessKey:this.state._accessKey,"aria-describedby":t.length>0?t.join(" "):void 0,"aria-labelledby":`${this.state._id}-label`,autoCapitalize:"off",autoComplete:this.state._autoComplete,autoCorrect:"off",disabled:this.state._disabled,multiple:this.state._multiple,id:this.state._id,list:e?`${this.state._id}-list`:void 0,maxlength:this.state._maxLength,name:this.state._name,pattern:this.state._pattern,placeholder:this.state._placeholder,readOnly:this.state._readOnly,required:this.state._required,size:this.state._size,slot:"input",spellcheck:"false",type:"email",value:this.state._value},this.controller.onFacade,{onKeyUp:this.onKeyUp}))))}constructor(t){(0,a.r)(this,t),this.catchRef=t=>{this.ref=t,(0,l.a)(this.host,this.ref)},this.onKeyUp=t=>{"Enter"===t.code?(0,n.p)({form:this.host,ref:this.ref}):this.controller.onFacade.onChange(t)},this._accessKey=void 0,this._alert=!0,this._autoComplete=void 0,this._disabled=void 0,this._error=void 0,this._hideLabel=void 0,this._hint="",this._icon=void 0,this._id=void 0,this._label=void 0,this._list=void 0,this._maxLength=void 0,this._multiple=void 0,this._name=void 0,this._on=void 0,this._pattern=void 0,this._placeholder=void 0,this._readOnly=void 0,this._required=void 0,this._size=void 0,this._smartButton=void 0,this._syncValueBySelector=void 0,this._tabIndex=void 0,this._touched=!1,this._value=void 0,this.state={_autoComplete:"off",_hasValue:!1,_id:(0,o.n)(),_label:"\u2026",_list:[]},this.controller=new h(this,"email",this.host)}validateAccessKey(t){this.controller.validateAccessKey(t)}validateAlert(t){this.controller.validateAlert(t)}validateAutoComplete(t){this.controller.validateAutoComplete(t)}validateDisabled(t){this.controller.validateDisabled(t)}validateError(t){this.controller.validateError(t)}validateHideLabel(t){this.controller.validateHideLabel(t)}validateHint(t){this.controller.validateHint(t)}validateIcon(t){this.controller.validateIcon(t)}validateId(t){this.controller.validateId(t)}validateLabel(t){this.controller.validateLabel(t)}validateList(t){this.controller.validateList(t)}validateMaxLength(t){this.controller.validateMaxLength(t)}validateMultiple(t){((t,e)=>{(0,r.b)(t,"_multiple",e)})(this,t)}validateName(t){this.controller.validateName(t)}validateOn(t){this.controller.validateOn(t)}validatePattern(t){this.controller.validatePattern(t)}validatePlaceholder(t){this.controller.validatePlaceholder(t)}validateReadOnly(t){this.controller.validateReadOnly(t)}validateRequired(t){this.controller.validateRequired(t)}validateSize(t){this.controller.validateSize(t)}validateSmartButton(t){this.controller.validateSmartButton(t)}validateSyncValueBySelector(t){this.controller.validateSyncValueBySelector(t)}validateTabIndex(t){this.controller.validateTabIndex(t)}validateTouched(t){this.controller.validateTouched(t)}validateValue(t){this.controller.validateValue(t)}componentWillLoad(){this._alert=!0===this._alert,this._touched=!0===this._touched,this.controller.componentWillLoad(),this.state._hasValue=!!this.state._value,this.controller.addValueChangeListener((t=>this.state._hasValue=!!t))}get host(){return(0,a.g)(this)}static get watchers(){return{_accessKey:["validateAccessKey"],_alert:["validateAlert"],_autoComplete:["validateAutoComplete"],_disabled:["validateDisabled"],_error:["validateError"],_hideLabel:["validateHideLabel"],_hint:["validateHint"],_icon:["validateIcon"],_id:["validateId"],_label:["validateLabel"],_list:["validateList"],_maxLength:["validateMaxLength"],_multiple:["validateMultiple"],_name:["validateName"],_on:["validateOn"],_pattern:["validatePattern"],_placeholder:["validatePlaceholder"],_readOnly:["validateReadOnly"],_required:["validateRequired"],_size:["validateSize"],_smartButton:["validateSmartButton"],_syncValueBySelector:["validateSyncValueBySelector"],_tabIndex:["validateTabIndex"],_touched:["validateTouched"],_value:["validateValue"]}}};c.style={default:":host{--a11y-min-size:44px;font-size:inherit}*{hyphens:auto;letter-spacing:inherit;word-break:break-word;word-spacing:inherit}[role='button'],button:not([role='link']),kol-input .input{min-height:var(--a11y-min-size);min-width:var(--a11y-min-size)}a,button,h1,h2,h3,h4,h5,h6,input,option,select,textarea{font-family:inherit;font-size:inherit}:is(a,button){background-color:transparent;border:none;margin:0;padding:0;width:100%;}:host{max-width:100%}*{box-sizing:border-box}kol-span-wc{display:grid;place-items:center}kol-span-wc>span{display:flex;place-items:center}a,button{cursor:pointer}button,input,option,select,textarea{font-family:inherit}.icon-only>kol-span-wc>span>span{display:none}.required label>span::after,.required legend>span::after{content:'*'}:host{display:block}input,textarea{cursor:text}input[type='checkbox'],input[type='color'],input[type='file'],input[type='radio'],input[type='range'],label,option,select{cursor:pointer}input[type='color'],input[type='date'],input[type='datetime-local'],input[type='email'],input[type='file'],input[type='month'],input[type='number'],input[type='password'],input[type='search'],input[type='tel'],input[type='text'],input[type='time'],input[type='url'],input[type='week'],select:not([multiple]),select[multiple] option,textarea{font-size:1rem;width:100%}input[type='file']{padding:calc((var(--a11y-min-size) - 1rem) / 10) 0.5em}select[multiple] option{padding:calc((var(--a11y-min-size) - 1rem) / 2) 0.5em}kol-input.disabled :is(button,input,label,option,select,textarea){cursor:not-allowed;opacity:0.5}kol-input{display:grid}kol-input [slot='input']{flex-grow:1}input:not([type='checkbox'],[type='radio']),select:not([multiple]){height:2.75em}input:focus,option:focus,select:focus,textarea:focus{outline:0}.input{display:flex;align-items:center}.input>kol-icon{display:grid;height:var(--a11y-min-size);place-items:center}"}}}]);