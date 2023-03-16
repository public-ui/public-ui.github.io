/*! For license information please see 5001.js.LICENSE.txt */
"use strict";(self.webpackChunk_public_ui_designer=self.webpackChunk_public_ui_designer||[]).push([[5001],{56153:(t,e,i)=>{i.d(e,{I:()=>d,g:()=>s});var o=i(65815),a=i(80019),n=i(83093),l=i(13136);const s=t=>{const e="string"==typeof t._error&&t._error.length>0&&!0===t._touched,i="string"==typeof t._hint&&t._hint.length>0,o=[];return!0===e&&o.push(`${t._id}-error`),!0===i&&o.push(`${t._id}-hint`),{hasError:e,hasHint:i,ariaDiscribedBy:o}},r=(0,l.b)();class h{constructor(t,e,i){var o,a,n,l,s;if(this.syncFormAssociatedName=()=>{var t;r&&(null===(t=this.formAssociated)||void 0===t||t.setAttribute("name",this.component.state._name||this.component.state._id))},this.setFormAssociatedValue=(t=null)=>{var e;r&&(null===(e=this.formAssociated)||void 0===e||e.setAttribute("value",t))},this.component=t,this.name=e,this.host=i,r){this.formAssociated=document.createElement("input"),this.formAssociated.setAttribute("type","hidden");const t=(null===(o=this.host)||void 0===o?void 0:o.children)||[];for(let e=0;e<t.length;e++)"INPUT"===(null===(a=this.host)||void 0===a?void 0:a.children[e].tagName)&&(null===(n=this.host)||void 0===n||n.removeChild(null===(l=this.host)||void 0===l?void 0:l.children[e]));null===(s=this.host)||void 0===s||s.appendChild(this.formAssociated)}}validateAlert(t){(0,a.b)(this.component,"_alert",t)}validateTouched(t){(0,a.b)(this.component,"_touched",t)}componentWillLoad(){this.validateAlert(this.component._alert),this.validateTouched(this.component._touched)}}class d extends h{constructor(t,e,i){super(t,e,i),this.hideLabel=!1,this.onFacade={onBlur:this.onBlur.bind(this),onChange:this.onChange.bind(this),onClick:this.onClick.bind(this),onFocus:this.onFocus.bind(this)},this.component=t}validateAccessKey(t){(0,a.w)(this.component,"_accessKey",t)}validateAdjustHeight(t){(0,a.b)(this.component,"_adjustHeight",t)}validateDisabled(t){(0,a.b)(this.component,"_disabled",t),!0===t&&(0,o.e)()}validateError(t){(0,a.w)(this.component,"_error",t)}validateHideLabel(t){(0,a.b)(this.component,"_hideLabel",t)}validateHint(t){(0,a.w)(this.component,"_hint",t)}validateId(t){(0,a.w)(this.component,"_id",t,{hooks:{afterPatch:this.syncFormAssociatedName}}),void 0===t&&(0,o.d)("Eine eindeutige ID an den Eingabefeldern ist nicht zwingend erforderlich, könnte aber für die E2E-Tests relevant sein.")}validateName(t){(0,a.w)(this.component,"_name",t,{hooks:{afterPatch:this.syncFormAssociatedName}}),void 0===t&&(0,o.d)("Ein Name an den Eingabefeldern ist nicht zwingend erforderlich, kann aber für die Autocomplete-Funktion des Eingabefeldes relevant sein.")}validateOn(t){"object"==typeof t&&(0,a.s)(this.component,"_on",t)}validateSmartButton(t){(0,a.o)(t,(()=>{try{t=(0,a.p)(t)}catch(t){}(0,a.s)(this.component,"_smartButton",t)}))}validateTabIndex(t){(0,n.v)(this.component,t)}componentWillLoad(){super.componentWillLoad(),this.validateAccessKey(this.component._accessKey),this.validateAdjustHeight(this.component._adjustHeight),this.validateError(this.component._error),this.validateDisabled(this.component._disabled),this.validateHideLabel(this.component._hideLabel),this.validateHint(this.component._hint),this.validateId(this.component._id),this.validateName(this.component._name),this.validateSmartButton(this.component._smartButton),this.validateOn(this.component._on),this.validateTabIndex(this.component._tabIndex),this.syncFormAssociatedName()}onBlur(t){var e;this.component._alert=!0,this.component._touched=!0,"function"==typeof(null===(e=this.component._on)||void 0===e?void 0:e.onBlur)&&this.component._on.onBlur(t)}onChange(t){var e;this.setFormAssociatedValue(t.target.value),"function"==typeof(null===(e=this.component._on)||void 0===e?void 0:e.onChange)&&this.component._on.onChange(t,t.target.value)}onClick(t){var e;"function"==typeof(null===(e=this.component._on)||void 0===e?void 0:e.onClick)&&this.component._on.onClick(t)}onFocus(t){var e;this.component._alert=!0,"function"==typeof(null===(e=this.component._on)||void 0===e?void 0:e.onFocus)&&this.component._on.onFocus(t)}setValue(t,e){var i;this.setFormAssociatedValue(e),"function"==typeof(null===(i=this.component._on)||void 0===i?void 0:i.onChange)&&this.component._on.onChange(t,e)}}},39964:(t,e,i)=>{i.d(e,{I:()=>s,a:()=>r,f:()=>l});var o=i(80019),a=i(52573),n=i(56153);const l=(t,e,i="")=>{e.forEach(((e,o)=>{const a=`${i}-${o}`;"object"==typeof e&&null!==e&&"string"==typeof e.label&&e.label.length>0&&(Array.isArray(e.options)?l(t,e.options,a):t.set(a,e))}))};class s extends n.I{constructor(t,e,i){super(t,e,i),this.component=t}validateRequired(t){(0,o.b)(this.component,"_required",t)}componentWillLoad(){super.componentWillLoad(),this.validateRequired(this.component._required)}}class r extends s{constructor(t,e,i){super(t,e,i),this.keyOptionMap=new Map,this.getOptionByKey=t=>this.keyOptionMap.get(t),this.isValueInOptions=(t,e)=>void 0!==e.find((e=>e.value===t)),this.beforePatchListValue=(t,e)=>{const i=e.has("_list")?e.get("_list"):this.component.state._list;if(Array.isArray(i)&&i.length>0){this.keyOptionMap.clear(),l(this.keyOptionMap,i);const t=e.has("_value")?e.get("_value"):this.component.state._value;if(!1===this.isValueInOptions(t,i)){const t=i[0].value;e.set("_value",t),this.onStateChange()}}},this.component=t}validateOrientation(t){(0,o.a)(this.component,"_orientation",(t=>"horizontal"===t||"vertical"===t),new Set(["Orientation {horizontal, vertical}"]),t,{defaultValue:"vertical"})}validateList(t){(0,o.d)(this.component,"_list",(t=>"object"==typeof t&&null!==t&&"string"==typeof t.label&&t.label.length>0),t,void 0,{hooks:{beforePatch:this.beforePatchListValue}})}validateValue(t){t=(0,o.m)(t),t=Array.isArray(t)?t[0]:t,(0,o.s)(this.component,"_value",t,{beforePatch:this.beforePatchListValue}),this.setFormAssociatedValue(this.component._value)}componentWillLoad(t){super.componentWillLoad(),this.onStateChange=()=>{if("function"==typeof t){const e=setTimeout((()=>{clearTimeout(e),t(a.S)}))}},this.validateOrientation(this.component._orientation),this.validateList(this.component._list),this.validateValue(this.component._value)}}},49892:(t,e,i)=>{i.d(e,{I:()=>r});var o=i(80019),a=i(52573),n=i(61006),l=i(56153);const s=(t,e)=>{const i=t;"object"==typeof i&&null!==i&&((0,a.b)(i.right,1)&&(i.right={icon:i.right}),(0,a.b)(i.left,1)&&(i.left={icon:i.left}),e.set("_icon",i))};class r extends l.I{constructor(t,e,i){super(t,e,i),this.component=t}validateIcon(t){(0,o.o)(t,(()=>{try{t=(0,o.p)(t)}catch(t){}(0,o.a)(this.component,"_icon",(t=>"object"==typeof t&&null!==t&&((0,a.b)(t.left,1)||(0,n.i)(t.left)||(0,a.b)(t.right,1)||(0,n.i)(t.right))),new Set(["KoliBriHorizontalIcon"]),t,{hooks:{beforePatch:s},required:!0})}))}componentWillLoad(){super.componentWillLoad(),this.validateIcon(this.component._icon)}}},61006:(t,e,i)=>{i.d(e,{i:()=>s,v:()=>r,w:()=>h});var o=i(80019),a=i(52573);const n=(t,e,i)=>{(0,a.d)(i)?t[e]=i:(0,a.b)(i,1)&&(t[e]={icon:i})},l=t=>{var e,i,o,l,s,r,h;if(null===(e=t.nextState)||void 0===e?void 0:e.has("_icon")){const e=null===(i=t.nextState)||void 0===i?void 0:i.get("_icon"),s=(null===(o=t.nextState)||void 0===o?void 0:o.get("_iconAlign"))||t.state._iconAlign;null===(l=t.nextState)||void 0===l||l.set("_icon",((t,e)=>{let i={};return(0,a.b)(t,1)?i="right"===e?{right:{icon:t}}:{left:{icon:t}}:"object"==typeof t&&null!==t&&(n(i,"top",t.top),n(i,"right",t.right),n(i,"bottom",t.bottom),n(i,"left",t.left)),i})(e,s))}else if(null===(s=t.nextState)||void 0===s?void 0:s.has("_iconAlign")){const e=t.state._iconAlign;null===(r=t.nextState)||void 0===r||r.set("_icon",{[e]:void 0,[null===(h=t.nextState)||void 0===h?void 0:h.get("_iconAlign")]:t.state._icon[e]})}},s=t=>"object"==typeof t&&null!==t&&(void 0===t.style||(0,a.c)(t.style))&&(0,a.b)(t.icon,1),r=(t,e)=>{(0,o.o)(e,(()=>{try{e=(0,o.p)(e)}catch(t){}(0,o.a)(t,"_icon",(t=>null===t||(0,a.b)(t,1)||"object"==typeof t&&null!==t&&((0,a.b)(t.left,1)||s(t.left)||(0,a.b)(t.right,1)||s(t.right)||(0,a.b)(t.top,1)||s(t.top)||(0,a.b)(t.bottom,1)||s(t.bottom))),new Set(["KoliBriIcon"]),e,{hooks:{beforePatch:(e,i)=>{null===e&&i.set("_icon",{}),l(t)}},required:!0})}))},h=(t,e)=>{(0,o.a)(t,"_iconAlign",(t=>"left"===t||"right"===t),new Set(["Alignment {left, right, top, bottom}"]),e,{hooks:{beforePatch:()=>{l(t)}}})}},65001:(t,e,i)=>{i.r(e),i.d(e,{kol_select:()=>v});var o=i(99459),a=i(52573),n=i(56153),l=i(80019),s=i(49892),r=i(39964),h=i(65815),d=i(48727);const c=t=>{if("object"==typeof t&&null!==t){if("string"==typeof t.label&&t.label.length>0)return t.disabled=!0===t.disabled,t.label=`${t.label}`.trim(),!1===(0,d.h)(t.label,3)&&!1===(0,d.c)(t.label)&&(0,h.a)(`Ein abweichendes Aria-Label (${t.label}) ist nicht barrierefrei. Ein abweichendes Aria-Label sollte aus mindestens drei lesbaren Zeichen bestehen.`),!Array.isArray(t.options)||void 0===t.options.find((t=>!1===c(t)));if("number"==typeof t.label)return!0}return!1};class p extends s.I{constructor(t,e,i){super(t,e,i),this.keyOptionMap=new Map,this.getOptionByKey=t=>this.keyOptionMap.get(t),this.isValueInOptions=(t,e)=>void 0!==e.find((e=>"string"==typeof e.value?e.value===t:!!Array.isArray(e.options)&&this.isValueInOptions(t,e.options))),this.filterValuesInOptions=(t,e)=>t.filter((t=>void 0!==this.isValueInOptions(t,e))),this.beforePatchListValue=(t,e)=>{const i=e.has("_list")?e.get("_list"):this.component.state._list;if(Array.isArray(i)&&i.length>0){this.keyOptionMap.clear(),(0,r.f)(this.keyOptionMap,i);const t=e.has("_value")?e.get("_value"):this.component.state._value,o=this.filterValuesInOptions(Array.isArray(t)&&t.length>0?t:[],i);!1===this.component._multiple&&0===o.length?(e.set("_value",[i[0].value]),this.onStateChange()):Array.isArray(t)&&o.length<t.length&&(e.set("_value",o),this.onStateChange())}},this.component=t}validateHeight(t){(0,l.w)(this.component,"_height",t)}validateList(t){(0,l.d)(this.component,"_list",c,t,void 0,{hooks:{beforePatch:this.beforePatchListValue}})}validateMultiple(t){(0,l.b)(this.component,"_multiple",t,{hooks:{beforePatch:this.beforePatchListValue}})}validateRequired(t){(0,l.b)(this.component,"_required",t)}validateSize(t){(0,l.e)(this.component,"_size",t,{min:1})}validateValue(t){(0,l.d)(this.component,"_value",(()=>!0),t,void 0,{hooks:{beforePatch:this.beforePatchListValue}}),this.setFormAssociatedValue(this.component._value)}componentWillLoad(t){super.componentWillLoad(),this.onStateChange=()=>{if("function"==typeof t){const e=setTimeout((()=>{clearTimeout(e),t(a.S)}))}},this.validateHeight(this.component._height),this.validateList(this.component._list),this.validateMultiple(this.component._multiple),this.validateRequired(this.component._required),this.validateSize(this.component._size),this.validateValue(this.component._value)}}const u=(t,e)=>Array.isArray(t)&&t.includes(e),v=class{renderOptgroup(t,e){var i;return(0,o.h)("optgroup",{disabled:!0===t.disabled,label:t.label},null===(i=t.options)||void 0===i?void 0:i.map(((t,i)=>{const a=`${e}-${i}`;return Array.isArray(t.options)?this.renderOptgroup(t,a):(0,o.h)("option",{disabled:!0===t.disabled,key:a,selected:u(this.state._value,t.value),value:a},t.label)})))}render(){const{ariaDiscribedBy:t}=(0,n.g)(this.state);return(0,o.h)(o.H,null,(0,o.h)("kol-input",{_disabled:this.state._disabled,_error:this.state._error,_hideLabel:this.state._hideLabel,_hint:this.state._hint,_icon:this.state._icon,_id:this.state._id,_required:this.state._required,_touched:this.state._touched},(0,o.h)("span",{slot:"label"},(0,o.h)("slot",null)),(0,o.h)("select",Object.assign({ref:this.catchRef,part:"select",title:"",accessKey:this.state._accessKey,"aria-describedby":t.length>0?t.join(" "):void 0,"aria-labelledby":`${this.state._id}-label`,autoCapitalize:"off",autoCorrect:"off",disabled:this.state._disabled,id:this.state._id,multiple:this.state._multiple,name:this.state._name,required:this.state._required,size:this.state._size,slot:"input",spellcheck:"false",style:{height:this.state._height}},{onClick:this.controller.onFacade.onClick,onBlur:this.controller.onFacade.onBlur,onFocus:this.controller.onFacade.onFocus},{onChange:this.onChange}),this.state._list.map(((t,e)=>{const i=`-${e}`;return Array.isArray(t.options)?this.renderOptgroup(t,i):(0,o.h)("option",{disabled:!0===t.disabled,key:i,selected:u(this.state._value,t.value),value:i},t.label)})))))}constructor(t){(0,o.r)(this,t),this.catchRef=t=>{this.ref=t,(0,a.a)(this.host,this.ref)},this.onChange=t=>{var e,i;this._value=Array.from((null===(e=this.ref)||void 0===e?void 0:e.options)||[]).filter((t=>!0===t.selected)).map((t=>{var e;return null===(e=this.controller.getOptionByKey(t.value))||void 0===e?void 0:e.value})),this.controller.setFormAssociatedValue(this._value),"function"==typeof(null===(i=this.state._on)||void 0===i?void 0:i.onChange)&&this.state._on.onChange(t,this._value)},this._accessKey=void 0,this._alert=!0,this._disabled=void 0,this._error=void 0,this._height=void 0,this._hideLabel=void 0,this._hint="",this._icon=void 0,this._id=void 0,this._list=void 0,this._multiple=!1,this._name=void 0,this._on=void 0,this._required=void 0,this._size=void 0,this._tabIndex=void 0,this._touched=!1,this._value=void 0,this.state={_height:"",_id:"…",_list:[],_multiple:!1,_value:[]},this.controller=new p(this,"textarea",this.host)}validateAccessKey(t){this.controller.validateAccessKey(t)}validateAlert(t){this.controller.validateAlert(t)}validateDisabled(t){this.controller.validateDisabled(t)}validateError(t){this.controller.validateError(t)}validateHeight(t){this.controller.validateHeight(t)}validateHideLabel(t){this.controller.validateHideLabel(t)}validateHint(t){this.controller.validateHint(t)}validateIcon(t){this.controller.validateIcon(t)}validateId(t){this.controller.validateId(t)}validateList(t){this.controller.validateList(t)}validateMultiple(t){this.controller.validateMultiple(t)}validateName(t){this.controller.validateName(t)}validateOn(t){this.controller.validateOn(t)}validateRequired(t){this.controller.validateRequired(t)}validateSize(t){this.controller.validateSize(t)}validateTabIndex(t){this.controller.validateTabIndex(t)}validateTouched(t){this.controller.validateTouched(t)}validateValue(t){this.controller.validateValue(t)}componentWillLoad(){this._alert=!0===this._alert,this._touched=!0===this._touched,this.controller.componentWillLoad(this.onChange)}get host(){return(0,o.g)(this)}static get watchers(){return{_accessKey:["validateAccessKey"],_alert:["validateAlert"],_disabled:["validateDisabled"],_error:["validateError"],_height:["validateHeight"],_hideLabel:["validateHideLabel"],_hint:["validateHint"],_icon:["validateIcon"],_id:["validateId"],_list:["validateList"],_multiple:["validateMultiple"],_name:["validateName"],_on:["validateOn"],_required:["validateRequired"],_size:["validateSize"],_tabIndex:["validateTabIndex"],_touched:["validateTouched"],_value:["validateValue"]}}};v.style={default:":host{--kolibri-border-color:#666;--kolibri-border-radius:0.125rem;--kolibri-border-width:1px;--kolibri-color-error:#f44336;--kolibri-color-info:#2196f3;--kolibri-color-success:#4caf50;--kolibri-color-warning:#ff9800;--kolibri-color-primary:#3f51b5;--kolibri-color-secondary:#ff4081;--kolibri-color-normal:#9e9e9e;--kolibri-color-danger:#f44336;--kolibri-color-ghost:#f5f5f5;--kolibri-color-disabled:#bdbdbd;--kolibri-color-text:#222222;--kolibri-color-visited:#9c27b0;--kolibri-font-family:Verdana, Arial, Tahoma, Helvetica, sans-serif;--kolibri-font-size:16px;--kolibri-spacing:0.25rem}:host *{hyphens:auto;letter-spacing:inherit;word-break:break-word;word-spacing:inherit}a,button{background-color:transparent;border:none;font-size:inherit;margin:0;padding:0;transition-duration:0.5s;transition-property:background-color, color, border-color}:host{font-family:var(--kolibri-font-family);font-size:var(--kolibri-font-size)}*{box-sizing:border-box}kol-icon{color:inherit}kol-span-wc{display:grid;gap:var(--kolibri-spacing);place-items:center}kol-span-wc>span{display:flex;gap:var(--kolibri-spacing);place-items:center}kol-span-wc>kol-icon,kol-span-wc>span>kol-icon{display:inline-grid;place-items:center;width:1em;height:1em}a,button,input,select,textarea{appearance:none;cursor:pointer}.icon-only>kol-span-wc>span>span{display:none}h1,h2,h3,h4,h5,h6{font-family:var(--kolibri-font-family);font-size:var(--kolibri-font-size);margin:0;padding:0}.kol-required span::after{content:'*'}.kol-disabled{opacity:0.5}.kol-cursor-not-allowed,.kol-cursor-not-allowed *{cursor:not-allowed}input[type='color'],input[type='date'],input[type='datetime-local'],input[type='email'],input[type='file'],input[type='month'],input[type='number'],input[type='password'],input[type='search'],input[type='tel'],input[type='text'],input[type='time'],input[type='url'],input[type='week'],select,textarea{background-color:white;display:block;font-size:1rem;line-height:1.5em;min-height:44px;padding:0.5em 0.75em}input[type='color']{height:2.5em;padding:0.25em 0.5em}textarea{padding:0.5em}input,select,textarea{border-color:var(--kolibri-border-color);border-style:solid;border-width:calc(var(--kolibri-spacing) / 2)}.error :is(input,select,textarea){border-color:var(--kolibri-border-error)}:is(input,select,textarea):is(:focus,:hover){border-color:var(--kolibri-color-text)}input:not([type='checkbox']),option,select,textarea{font-size:inherit;letter-spacing:inherit;word-spacing:inherit}kol-input{display:grid;gap:calc(2 * var(--kolibri-spacing))}input,select,textarea{background-color:white;border-color:var(--kolibri-border-color);border-radius:var(--kolibri-border-radius);border-style:solid;border-width:var(--kolibri-border-width);font-size:1em;font-family:var(--kolibri-font-family-sans);line-height:2.5em;overflow:hidden;width:100%}input,select:not([multiple]){height:2.75em}input::placeholder{color:var(--kolibri-color-normal)}input:hover{border-color:var(--kolibri-color-primary)}input:disabled,select:disabled,textarea:disabled,input:not([type='color']):read-only,textarea:read-only{cursor:not-allowed}.required label>span::after{content:'*';padding-left:var(--kolibri-spacing)}.icons{display:flex;justify-content:space-between;height:0}.icons>kol-icon{display:grid;height:44px;padding:0 0.75em;place-items:center}.icon-left input,.icon-left select{padding-left:2em}kol-button-wc{position:relative;float:right;z-index:1000;margin-top:-44px}kol-button-wc button{background-color:transparent;display:inline-block;min-height:44px;min-width:44px}.icon-right kol-button-wc{margin-right:44px}.disabled{opacity:0.5}select[multiple],textarea{overflow:auto}textarea{display:block}select option{margin:var(--kolibri-spacing) 0;padding:0.5em;border-radius:0.25em;cursor:pointer}select option:disabled{cursor:not-allowed}option:not(:disabled):is(:active,:checked,:focus,:hover){background-color:var(--kolibri-color-primary);color:white}"}},48727:(t,e,i)=>{i.d(e,{a:()=>c,b:()=>u,c:()=>h,h:()=>r,v:()=>p});var o=i(65815),a=i(80019),n=i(52573);const l=/[a-zA-Z0-9äöüÄÖÜß]/g,s=/^\d+$/,r=(t,e=1)=>(t=>{var e;return"string"==typeof t&&(null===(e=t.match(l))||void 0===e?void 0:e.length)||0})(t)>=e,h=t=>s.test(t),d=(t,e,i,a)=>{const l=e.has("_ariaLabel")?e.get("_ariaLabel"):i.state._ariaLabel;if("string"==typeof l){const t=e.has("_label")?e.get("_label"):i.state._label;!1===(0,n.i)(t,l)&&("_ariaLabel"===a?e.set("_label",l):e.set("_ariaLabel",void 0),(0,o.a)("Das abweichende Aria-Label ist nicht barrierefrei. Ein abweichendes Aria-Label muss aus Gründern der Barrierefreiheit für die Sprachsteuerung mit dem Label-Text beginnen."))}},c=(t,e)=>{((t,e,i={})=>{var n;(0,a.w)(t,"_ariaLabel",e,{hooks:{afterPatch:(t,e,a,n)=>{var l,s;"function"==typeof(null===(l=i.hooks)||void 0===l?void 0:l.afterPatch)&&(null===(s=i.hooks)||void 0===s||s.afterPatch(t,e,a,n)),"string"==typeof t&&t.length>0&&!1===r(t,3)&&!1===h(t)&&(0,o.a)(`Ein abweichendes Aria-Label (${t}) ist nicht barrierefrei. Ein abweichendes Aria-Label sollte aus mindestens drei lesbaren Zeichen bestehen.`)},beforePatch:null===(n=i.hooks)||void 0===n?void 0:n.beforePatch}})})(t,e,{hooks:{beforePatch:d}})},p=(t,e,i={})=>{var n;(0,a.w)(t,"_label",e,{hooks:{afterPatch:(t,e,a,n)=>{var l,s;"function"==typeof(null===(l=i.hooks)||void 0===l?void 0:l.afterPatch)&&(null===(s=i.hooks)||void 0===s||s.afterPatch(t,e,a,n)),"string"==typeof t&&!1===r(t,3)&&!1===h(t)&&(0,o.a)(`Ein Label (${t}) ist nicht barrierefrei. Ein Label sollte aus mindestens drei lesbaren Zeichen bestehen.`)},beforePatch:null===(n=i.hooks)||void 0===n?void 0:n.beforePatch},required:!0})},u=(t,e)=>{p(t,e,{hooks:{beforePatch:d}})}},83093:(t,e,i)=>{i.d(e,{v:()=>l});var o=i(65815),a=i(80019);const n={hooks:{afterPatch:t=>{-1!==t&&0!==t&&(0,o.a)("Don’t Use Tabindex Greater than 0: https://adrianroselli.com/2014/11/dont-use-tabindex-greater-than-0.html")}}},l=(t,e)=>{(0,a.e)(t,"_tabIndex",e,n)}}}]);