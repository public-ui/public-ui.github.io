/*! For license information please see 5664.js.LICENSE.txt */
"use strict";(self.webpackChunk_public_ui_sample_react=self.webpackChunk_public_ui_sample_react||[]).push([[5664],{2954:(t,e,i)=>{i.d(e,{A:()=>s});var o=i(3013),a=i(2974);const n=(0,i(5097).b)();class s{constructor(t,e,i){var o,s;if(this.setFormAssociatedValue=t=>{var e;const i=null===(e=this.formAssociated)||void 0===e?void 0:e.getAttribute("name");null!==i&&""!==i||(0,a.d)(` The form field (${this.name}) must have a name attribute to be form-associated. Please define the _name attribute.`);const o=this.tryToStringifyValue(t);this.syncValue(t,o,this.formAssociated),this.syncValue(t,o,this.syncToOwnInput)},this.component=t,this.host=this.findHostWithShadowRoot(i),this.name=e,n){switch(null===(o=this.host)||void 0===o||o.querySelectorAll("input,select,textarea").forEach((t=>{var e;null===(e=this.host)||void 0===e||e.removeChild(t)})),this.name){case"button":this.formAssociated=document.createElement("button");break;case"select":this.formAssociated=document.createElement("select"),this.formAssociated.setAttribute("multiple","");break;case"textarea":this.formAssociated=document.createElement("textarea");break;default:this.formAssociated=document.createElement("input"),this.formAssociated.setAttribute("type","hidden")}this.formAssociated.setAttribute("aria-hidden","true"),this.formAssociated.setAttribute("data-form-associated",""),this.formAssociated.setAttribute("hidden",""),null===(s=this.host)||void 0===s||s.appendChild(this.formAssociated)}}findHostWithShadowRoot(t){for(;null===(null==t?void 0:t.shadowRoot)&&t!==document.body;)(t=null==t?void 0:t.parentNode).host&&(t=t.host);return t}setAttribute(t,e,i){if(n)try{if("boolean"!=typeof(i="object"==typeof i&&null!==i?JSON.stringify(i):i)&&"number"!=typeof i&&"string"!=typeof i)throw new Error("Invalid value type: "+typeof i);null==e||e.setAttribute(t,`${i}`)}catch(i){null==e||e.removeAttribute(t)}}tryToStringifyValue(t){try{return"object"==typeof t&&null!==t?JSON.stringify(t).toString():null==t?null:t.toString()}catch(t){return(0,a.h)(`The form field raw value is not able to stringify! ${t}`),""}}syncValue(t,e,i){i&&("select"===this.name?(i.querySelectorAll("option").forEach((t=>{i.removeChild(t)})),Array.isArray(t)&&t.forEach((t=>{const e=this.tryToStringifyValue(t);if("string"==typeof e){const t=document.createElement("option");t.setAttribute("value",e),t.setAttribute("selected",""),i.appendChild(t)}}))):"string"==typeof e?(i.setAttribute("value",e),i.value=e):(i.removeAttribute("value"),i.value=""))}validateName(t){((t,e,i)=>{(0,o.d)(t,"_name",e,i)})(this.component,t,{hooks:{afterPatch:()=>{this.setAttribute("name",this.formAssociated,this.component.state._name)}}}),void 0===t&&(0,a.d)("Ein Name am Eingabefeldern oder Schalter ist nicht zwingend erforderlich, kann aber für die Autocomplete-Funktion und für das statische Versenden des Eingabefeldes relevant sein.")}validateSyncValueBySelector(t){if(n&&"string"==typeof t){const e=document.querySelector(t);e&&(this.syncToOwnInput=e)}}componentWillLoad(){this.validateName(this.component._name),this.validateSyncValueBySelector(this.component._syncValueBySelector)}}},107:(t,e,i)=>{i.d(e,{I:()=>u,g:()=>d});var o=i(3013),a=i(1686),n=i(2974),s=i(7699),l=i(7006),r=i(2954),h=i(3976);const d=t=>{const e="string"==typeof t._error&&t._error.length>0&&!0===t._touched,i="string"==typeof t._hint&&t._hint.length>0,o=[];return!0===e&&o.push(`${t._id}-error`),!0===i&&o.push(`${t._id}-hint`),{hasError:e,hasHint:i,ariaDescribedBy:o}};class c extends r.A{constructor(t,e,i){super(t,e,i),this.component=t}validateAlert(t){(0,o.a)(this.component,"_alert",t)}validateTouched(t){((t,e)=>{(0,o.a)(t,"_touched",e)})(this.component,t)}componentWillLoad(){super.componentWillLoad(),this.validateAlert(this.component._alert),this.validateTouched(this.component._touched)}}class u extends c{constructor(t,e,i){super(t,e,i),this.valueChangeListeners=[],this.onFacade={onBlur:this.onBlur.bind(this),onChange:this.onChange.bind(this),onClick:this.onClick.bind(this),onFocus:this.onFocus.bind(this)},this.component=t}validateAccessKey(t){(0,o.d)(this.component,"_accessKey",t)}validateAdjustHeight(t){((t,e)=>{(0,o.a)(t,"_adjustHeight",e)})(this.component,t)}validateDisabled(t){(0,o.a)(this.component,"_disabled",t),!0===t&&(0,n.g)()}validateError(t){(0,o.d)(this.component,"_error",t)}validateHideLabel(t){(0,h.v)(this.component,t,{hooks:{afterPatch:()=>{this.component.state._hideLabel&&(0,n.a)("Property hide-label for inputs: Only use for exceptions like search inputs that are clearly identifiable by their context.")}}})}validateHint(t){(0,o.d)(this.component,"_hint",t)}validateId(t){(0,o.d)(this.component,"_id",t,{hooks:{afterPatch:()=>{this.setAttribute("id",this.formAssociated,this.component.state._id)}},minLength:1}),""!==t&&void 0!==t||(0,n.d)("Eine eindeutige ID an den Eingabefeldern ist nicht zwingend erforderlich, könnte aber für die E2E-Tests relevant sein.")}validateLabel(t){(0,a.a)(this.component,t)}validateOn(t){"object"==typeof t&&(0,o.s)(this.component,"_on",t)}validateSmartButton(t){(0,o.o)(t,(()=>{try{t=(0,o.p)(t)}catch(t){}(0,o.s)(this.component,"_smartButton",t)}))}validateTabIndex(t){(0,l.v)(this.component,t)}componentWillLoad(){super.componentWillLoad(),this.validateAccessKey(this.component._accessKey),this.validateAdjustHeight(this.component._adjustHeight),this.validateError(this.component._error),this.validateDisabled(this.component._disabled),this.validateHideLabel(this.component._hideLabel),this.validateHint(this.component._hint),this.validateId(this.component._id),this.validateLabel(this.component._label),this.validateSmartButton(this.component._smartButton),this.validateOn(this.component._on),this.validateTabIndex(this.component._tabIndex)}onBlur(t){var e;this.component._alert=!0,this.component._touched=!0,(0,s.s)(t),(0,s.t)("blur",this.host),"function"==typeof(null===(e=this.component._on)||void 0===e?void 0:e.onBlur)&&this.component._on.onBlur(t)}onChange(t){var e;const i=t.target.value;(0,s.s)(t),(0,s.t)("change",this.host,i),this.setFormAssociatedValue(i),"function"==typeof(null===(e=this.component._on)||void 0===e?void 0:e.onChange)&&this.component._on.onChange(t,i),this.valueChangeListeners.forEach((t=>t(i)))}onClick(t){var e;(0,s.s)(t),(0,s.t)("click",this.host),"function"==typeof(null===(e=this.component._on)||void 0===e?void 0:e.onClick)&&this.component._on.onClick(t)}onFocus(t){var e;this.component._alert=!0,(0,s.s)(t),(0,s.t)("focus",this.host),"function"==typeof(null===(e=this.component._on)||void 0===e?void 0:e.onFocus)&&this.component._on.onFocus(t)}setValue(t,e){var i;this.setFormAssociatedValue(e),"function"==typeof(null===(i=this.component._on)||void 0===i?void 0:i.onChange)&&this.component._on.onChange(t,e)}addValueChangeListener(t){this.valueChangeListeners.push(t)}}},9312:(t,e,i)=>{i.d(e,{a:()=>l,p:()=>r});var o=i(2974),a=i(5097),n=i(3013);const s=t=>{for((0,a.b)()&&((0,o.d)("↓ Search form element start."),console.log(t));t instanceof HTMLElement&&"FORM"!==t.tagName&&"KOL-FORM"!==t.tagName;)t=t.parentElement instanceof HTMLElement?t.parentElement:t.parentNode instanceof ShadowRoot?t.parentNode.host:null,(0,a.b)()&&console.log(t);return(0,a.b)()&&(0,o.d)("↑ Search form element finished."),t},l=(t={})=>{var e,i;const o=s(t.form);if(o instanceof HTMLElement){const t=new Event("reset",{bubbles:!0,cancelable:!0});if("FORM"===o.tagName)(0,n.f)(t,o),o.dispatchEvent(t);else if("KOL-FORM"===o.tagName){(0,n.f)(t,n.K.querySelector("form",o));const a=o;"function"==typeof(null===(e=a._on)||void 0===e?void 0:e.onReset)&&(null===(i=a._on)||void 0===i||i.onReset(t))}}},r=(t={})=>{var e,i;const o=s(t.form);if(o instanceof HTMLElement){const t=new SubmitEvent("submit",{bubbles:!0,cancelable:!0,submitter:o});if("FORM"===o.tagName)(0,n.f)(t,o),o.dispatchEvent(t);else if("KOL-FORM"===o.tagName){(0,n.f)(t,n.K.querySelector("form",o));const a=o;"function"==typeof(null===(e=a._on)||void 0===e?void 0:e.onSubmit)&&(null===(i=a._on)||void 0===i||i.onSubmit(t))}}}},1267:(t,e,i)=>{i.d(e,{I:()=>r});var o=i(9704),a=i(3013),n=i(7108),s=i(107);const l=(t,e)=>{const i=t;"object"==typeof i&&null!==i&&((0,n.i)(i.right,1)&&(i.right={icon:i.right}),(0,n.i)(i.left,1)&&(i.left={icon:i.left}),e.set("_icon",i))};class r extends s.I{constructor(t,e,i){super(t,e,i),this.component=t}validateIcon(t){(0,a.o)(t,(()=>{try{t=(0,a.p)(t)}catch(t){}(0,a.w)(this.component,"_icon",(t=>"object"==typeof t&&null!==t&&((0,n.i)(t.left,1)||(0,o.i)(t.left)||(0,n.i)(t.right,1)||(0,o.i)(t.right))),new Set(["KoliBriHorizontalIcon"]),t,{hooks:{beforePatch:l},required:!0})}))}componentWillLoad(){super.componentWillLoad(),this.validateIcon(this.component._icon)}}},7699:(t,e,i)=>{function o(t){t.stopImmediatePropagation(),t.stopPropagation()}function a(t,e,i){e&&function(t,e,i){t.dispatchEvent(function(t,e){return new CustomEvent(`kol-${t}`,{bubbles:!0,cancelable:!0,composed:!0,detail:e})}(e,i))}(e,t,i)}i.d(e,{s:()=>o,t:()=>a})},3976:(t,e,i)=>{i.d(e,{v:()=>a});var o=i(3013);const a=(t,e,i={})=>{(0,o.a)(t,"_hideLabel",e,i)}},9704:(t,e,i)=>{i.d(e,{i:()=>l,v:()=>r,w:()=>h});var o=i(3013),a=i(7108);const n=(t,e,i)=>{(0,a.c)(i)?t[e]=i:(0,a.i)(i,1)&&(t[e]={icon:i})},s=t=>{var e,i,o,s,l,r,h;if(null===(e=t.nextState)||void 0===e?void 0:e.has("_icon")){const e=null===(i=t.nextState)||void 0===i?void 0:i.get("_icon"),l=(null===(o=t.nextState)||void 0===o?void 0:o.get("_iconAlign"))||t.state._iconAlign;null===(s=t.nextState)||void 0===s||s.set("_icon",((t,e)=>{let i={};return(0,a.i)(t,1)?i="right"===e?{right:{icon:t}}:{left:{icon:t}}:"object"==typeof t&&null!==t&&(n(i,"top",t.top),n(i,"right",t.right),n(i,"bottom",t.bottom),n(i,"left",t.left)),i})(e,l))}else if(null===(l=t.nextState)||void 0===l?void 0:l.has("_iconAlign")){const e=t.state._iconAlign;null===(r=t.nextState)||void 0===r||r.set("_icon",{[e]:void 0,[null===(h=t.nextState)||void 0===h?void 0:h.get("_iconAlign")]:t.state._icon[e]})}},l=t=>"object"==typeof t&&null!==t&&(void 0===t.style||(0,a.b)(t.style))&&(0,a.i)(t.icon,1),r=(t,e)=>{(0,o.o)(e,(()=>{try{e=(0,o.p)(e)}catch(t){}(0,o.w)(t,"_icon",(t=>null===t||(0,a.i)(t,1)||"object"==typeof t&&null!==t&&((0,a.i)(t.left,1)||l(t.left)||(0,a.i)(t.right,1)||l(t.right)||(0,a.i)(t.top,1)||l(t.top)||(0,a.i)(t.bottom,1)||l(t.bottom))),new Set(["KoliBriIcon"]),e,{hooks:{beforePatch:(e,i)=>{null===e&&i.set("_icon",{}),s(t)}},required:!0})}))},h=(t,e)=>{(0,o.w)(t,"_iconAlign",(t=>"left"===t||"right"===t),new Set(["Alignment {left, right, top, bottom}"]),e,{hooks:{beforePatch:()=>{s(t)}}})}},5664:(t,e,i)=>{i.r(e),i.d(e,{kol_input_range:()=>u});var o=i(9315),a=i(5097),n=i(7108),s=i(9312),l=i(107),r=i(1227),h=i(3013),d=i(1267);class c extends d.I{constructor(t,e,i){super(t,e,i),this.component=t}validateAutoComplete(t){(0,h.w)(this.component,"_autoComplete",(t=>"string"==typeof t&&("on"===t||"off"===t)),new Set(["on | off"]),t)}validateList(t){Array.isArray(t)&&this.validateSuggestions(t.map((t=>t.value)))}validateMax(t){(0,h.e)(this.component,"_max",t)}validateMin(t){(0,h.e)(this.component,"_min",t)}validateStep(t){(0,h.e)(this.component,"_step",t)}validateSuggestions(t){(0,r.v)(this.component,t)}validateValue(t){(0,h.e)(this.component,"_value",t),this.setFormAssociatedValue(this.component.state._value)}componentWillLoad(){super.componentWillLoad(),this.validateAutoComplete(this.component._autoComplete),this.validateList(this.component._list),this.validateMax(this.component._max),this.validateMin(this.component._min),this.validateStep(this.component._step),this.validateSuggestions(this.component._suggestions),this.validateValue(this.component._value)}}const u=class{render(){const{ariaDescribedBy:t}=(0,l.g)(this.state),e=Array.isArray(this.state._suggestions)&&this.state._suggestions.length>0,i=!1===this.state._label;return(0,o.h)(o.H,null,(0,o.h)("kol-input",{class:{range:!0,"hide-label":!!this.state._hideLabel},_disabled:this.state._disabled,_error:this.state._error,_hideLabel:this.state._hideLabel,_hint:this.state._hint,_icon:this.state._icon,_id:this.state._id,_touched:this.state._touched},(0,o.h)("span",{slot:"label"},i?(0,o.h)("slot",null):this.state._label),(0,o.h)("div",{slot:"input"},(0,o.h)("div",{class:"inputs-wrapper",style:{"--kolibri-input-range--input-number--width":`${this.state._max}`.length+.5+"em"}},(0,o.h)("input",Object.assign({title:"",accessKey:this.state._accessKey,"aria-describedby":t.length>0?t.join(" "):void 0,"aria-label":this.state._hideLabel&&"string"==typeof this.state._label?this.state._label:void 0,autoCapitalize:"off",autoComplete:this.state._autoComplete,autoCorrect:"off",disabled:this.state._disabled,list:e?`${this.state._id}-list`:void 0,max:this.state._max,min:this.state._min,name:this.state._name?`${this.state._name}-range`:void 0,spellcheck:"false",step:this.state._step,tabIndex:-1,type:"range",value:this.state._value},this.controller.onFacade,{onChange:this.onChange})),(0,o.h)("input",Object.assign({ref:this.catchInputNumberRef,title:"",accessKey:this.state._accessKey,"aria-describedby":t.length>0?t.join(" "):void 0,"aria-label":this.state._hideLabel&&"string"==typeof this.state._label?this.state._label:void 0,autoCapitalize:"off",autoComplete:this.state._autoComplete,autoCorrect:"off",disabled:this.state._disabled,id:this.state._id,list:e?`${this.state._id}-list`:void 0,max:this.state._max,min:this.state._min,name:this.state._name?`${this.state._name}-number`:void 0,step:this.state._step,type:"number",value:this.state._value},this.controller.onFacade,{onKeyUp:this.onKeyUp,onChange:this.onChange})),(0,o.h)("kol-tooltip-wc",{"aria-hidden":"true",class:"input-tooltip",hidden:i||!this.state._hideLabel,_align:this._tooltipAlign,_label:"string"==typeof this.state._label?this.state._label:""})),e&&[(0,o.h)("datalist",{id:`${this.state._id}-list`},this.state._suggestions.map((t=>(0,o.h)("option",{value:t}))))])))}constructor(t){(0,o.r)(this,t),this.catchInputNumberRef=t=>{var e;t&&(this.ref=t,(0,n.a)(this.host,t),!this._value&&(null===(e=this.ref)||void 0===e?void 0:e.value)&&this.validateValue(parseFloat(this.ref.value)))},this.onChange=t=>{var e,i;let o=parseFloat(t.target.value);this.state._max&&o>this.state._max&&(o=this.state._max),this.state._min&&o<this.state._min&&(o=this.state._min),this.validateValue(o),"function"==typeof(null===(e=this.state._on)||void 0===e?void 0:e.onChange)&&(null===(i=this.state._on)||void 0===i||i.onChange(t,o))},this.onKeyUp=t=>{"Enter"===t.code?(0,s.p)({form:this.host,ref:this.ref}):this.onChange(t)},this._accessKey=void 0,this._alert=!0,this._autoComplete=void 0,this._disabled=void 0,this._error=void 0,this._hideLabel=void 0,this._hint="",this._icon=void 0,this._id=void 0,this._label=void 0,this._list=void 0,this._max=void 0,this._min=void 0,this._name=void 0,this._on=void 0,this._step=void 0,this._suggestions=void 0,this._syncValueBySelector=void 0,this._tabIndex=void 0,this._tooltipAlign="top",this._touched=!1,this._value=void 0,this.state={_autoComplete:"off",_id:`id-${(0,a.n)()}`,_label:!1,_suggestions:[]},this.controller=new c(this,"input-range",this.host)}validateAccessKey(t){this.controller.validateAccessKey(t)}validateAlert(t){this.controller.validateAlert(t)}validateAutoComplete(t){this.controller.validateAutoComplete(t)}validateDisabled(t){this.controller.validateDisabled(t)}validateError(t){this.controller.validateError(t)}validateHideLabel(t){this.controller.validateHideLabel(t)}validateHint(t){this.controller.validateHint(t)}validateIcon(t){this.controller.validateIcon(t)}validateId(t){this.controller.validateId(t)}validateLabel(t){this.controller.validateLabel(t)}validateList(t){this.controller.validateList(t)}validateMax(t){this.controller.validateMax(t)}validateMin(t){this.controller.validateMin(t)}validateName(t){this.controller.validateName(t)}validateOn(t){this.controller.validateOn(t)}validateStep(t){this.controller.validateStep(t)}validateSuggestions(t){this.controller.validateSuggestions(t)}validateSyncValueBySelector(t){this.controller.validateSyncValueBySelector(t)}validateTabIndex(t){this.controller.validateTabIndex(t)}validateTouched(t){this.controller.validateTouched(t)}validateValue(t){this.controller.validateValue(t)}componentWillLoad(){this._alert=!0===this._alert,this._touched=!0===this._touched,this.controller.componentWillLoad()}get host(){return(0,o.g)(this)}static get watchers(){return{_accessKey:["validateAccessKey"],_alert:["validateAlert"],_autoComplete:["validateAutoComplete"],_disabled:["validateDisabled"],_error:["validateError"],_hideLabel:["validateHideLabel"],_hint:["validateHint"],_icon:["validateIcon"],_id:["validateId"],_label:["validateLabel"],_list:["validateList"],_max:["validateMax"],_min:["validateMin"],_name:["validateName"],_on:["validateOn"],_step:["validateStep"],_suggestions:["validateSuggestions"],_syncValueBySelector:["validateSyncValueBySelector"],_tabIndex:["validateTabIndex"],_touched:["validateTouched"],_value:["validateValue"]}}};u.style={default:":host{--a11y-min-size:44px;font-size:inherit}*{hyphens:auto;letter-spacing:inherit;word-break:break-word;word-spacing:inherit}[role='button'],button:not([role='link']),kol-input .input{min-height:var(--a11y-min-size);min-width:var(--a11y-min-size)}a,button,h1,h2,h3,h4,h5,h6,input,option,select,textarea{font-family:inherit;font-size:inherit}:is(a,button){background-color:transparent;border:none;margin:0;padding:0;width:100%;}:host{max-width:100%}*{box-sizing:border-box}kol-span-wc{display:grid;place-items:center}kol-span-wc>span{display:flex;place-items:center}a,button{cursor:pointer}button,input,option,select,textarea{font-family:inherit}.icon-only>kol-span-wc>span>span{display:none}.required label>span::after,.required legend>span::after{content:'*'}:host{display:block}input,textarea{cursor:text}input[type='checkbox'],input[type='color'],input[type='file'],input[type='radio'],input[type='range'],label,option,select{cursor:pointer}input[type='color'],input[type='date'],input[type='datetime-local'],input[type='email'],input[type='file'],input[type='month'],input[type='number'],input[type='password'],input[type='search'],input[type='tel'],input[type='text'],input[type='time'],input[type='url'],input[type='week'],select,select[multiple] option,textarea{font-size:1rem;width:100%}input[type='file']{padding:calc((var(--a11y-min-size) - 1rem) / 10) 0.5em}select[multiple] option{padding:calc((var(--a11y-min-size) - 1rem) / 2) 0.5em}kol-input.disabled :is(button,input,label,option,select,textarea){cursor:not-allowed;opacity:0.5}kol-input{display:grid}kol-input .input-slot{flex-grow:1}input:not([type='checkbox'],[type='radio']),select:not([multiple],[size]){height:2.75em}input:focus,option:focus,select:focus,textarea:focus{outline:0}.input{display:flex;align-items:center}.input>kol-icon{display:grid;height:var(--a11y-min-size);place-items:center}kol-input.required .input-tooltip .span-label::after{content:'*'}.inputs-wrapper{align-items:center;display:flex;flex-direction:row}input[type='number']{min-height:var(--a11y-min-size);min-width:var(--a11y-min-size);width:var(--kolibri-input-range--input-number--width)}input[type='range']{appearance:none;background-color:#d3d3d3;border:1px solid #000;display:inline-block;flex-grow:1;height:0.5rem;line-height:1.5em;padding:0;margin:0;width:0;}input[type='range']::-webkit-slider-thumb{box-sizing:border-box;background-color:#000;height:20px;width:20px;border-radius:20px;cursor:pointer;-webkit-appearance:none}input[type='range']::-moz-range-thumb{box-sizing:border-box;background-color:#000;height:20px;width:20px;border-radius:20px;cursor:pointer;-moz-appearance:none}"}},1686:(t,e,i)=>{i.d(e,{a:()=>p,c:()=>r,h:()=>l,v:()=>c});var o=i(2974),a=i(3013);const n=/[a-zA-Z0-9äöüÄÖÜß]/g,s=/^\d+$/;function l(t,e=1){return function(t){var e;return"string"==typeof t&&(null===(e=t.match(n))||void 0===e?void 0:e.length)||0}(t)>=e}function r(t){return s.test(t)}function h(t){var e;return{hooks:{afterPatch:(e,i,a,n)=>{var s,h;"function"==typeof(null===(s=t.hooks)||void 0===s?void 0:s.afterPatch)&&(null===(h=t.hooks)||void 0===h||h.afterPatch(e,i,a,n)),"string"==typeof e&&!1===l(e,3)&&!1===r(e)&&(0,o.a)(`The heading or label ("${e}") is not accessible. A label should consist of at least three readable characters.`),"string"==typeof e&&e.length>80&&(0,o.u)("A heading or label should not be longer than 80 characters.")},beforePatch:null===(e=t.hooks)||void 0===e?void 0:e.beforePatch}}}const d=new Set(["string"]),c=(t,e,i={})=>{(0,a.w)(t,"_label",(t=>"string"==typeof t),d,e,h(i))},u=new Set(["string","false"]),p=(t,e,i={})=>{""!==e&&"false"!==e||(e=!1),(0,a.w)(t,"_label",(t=>!1===t||"string"==typeof t),u,e,h(i))}},1227:(t,e,i)=>{i.d(e,{v:()=>n});var o=i(3013),a=i(2974);const n=(t,e)=>{(0,o.c)(t,"_suggestions",(t=>"string"==typeof t||"number"==typeof t),e,void 0,{hooks:{afterPatch:t=>{Array.isArray(t)&&t.length&&(0,a.a)("Property suggestions: Options have accessibility issues in how browsers implemented them and should not be used for now.")}}})}},7006:(t,e,i)=>{i.d(e,{v:()=>s});var o=i(2974),a=i(3013);const n={hooks:{afterPatch:t=>{-1!==t&&0!==t&&(0,o.a)("Don’t Use Tabindex Greater than 0: https://adrianroselli.com/2014/11/dont-use-tabindex-greater-than-0.html")}}},s=(t,e)=>{(0,a.e)(t,"_tabIndex",e,n)}}}]);