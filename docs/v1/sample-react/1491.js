/*! For license information please see 1491.js.LICENSE.txt */
"use strict";(self.webpackChunk_public_ui_sample_react=self.webpackChunk_public_ui_sample_react||[]).push([[1491],{1491:(t,e,i)=>{i.r(e),i.d(e,{kol_input_file:()=>h});var a=i(4566),l=i(455),o=i(4186),s=i(47),n=i(3409),r=i(2972),d=i(5109);class c extends r.I{constructor(t,e,i){super(t,e,i),this.component=t}validateAccept(t){(0,n.d)(this.component,"_accept",t)}validateMultiple(t){(0,n.a)(this.component,"_multiple",t)}validateRequired(t){(0,n.a)(this.component,"_required",t)}validateValue(t){(0,n.d)(this.component,"_value",t),this.setFormAssociatedValue(this.component._value)}componentWillLoad(){super.componentWillLoad(),this.validateAccept(this.component._accept),this.validateMultiple(this.component._multiple),this.validateRequired(this.component._required),this.validateValue(this.component._value)}}const h=class{render(){const{ariaDescribedBy:t}=(0,s.g)(this.state),e=(0,o.s)(this.state._label);return(0,a.h)(a.H,{key:"3aa5a18ae9e03d61d7d718b4f6f01c436c0c9378",class:"kol-input-file"},(0,a.h)(d.m,{key:"54f20e08e601a50ce61eeb789f406d189989c958",class:{file:!0,"hide-label":!!this.state._hideLabel},_disabled:this.state._disabled,_error:this.state._error,_hideError:this.state._hideError,_hideLabel:this.state._hideLabel,_hint:this.state._hint,_icons:this.state._icons,_id:this.state._id,_label:this.state._label,_required:this.state._required,_smartButton:this.state._smartButton,_tooltipAlign:this._tooltipAlign,_touched:this.state._touched,onClick:()=>{var t;return null===(t=this.ref)||void 0===t?void 0:t.focus()},role:"presentation"},(0,a.h)("span",{key:"fdd42069330d9db699dc8bbcd4629f7ec8bbe103",slot:"label"},e?(0,a.h)("slot",null):this.state._label),(0,a.h)("div",{key:"616a194e937d1a667496743ce62c1d5096af0f86",slot:"input"},(0,a.h)("input",Object.assign({key:"7af2db5ee3cc5f3d6e86c86cbed848c1c49c6896",ref:this.catchRef,title:"",accept:this.state._accept,accessKey:this.state._accessKey,"aria-describedby":t.length>0?t.join(" "):void 0,"aria-label":this.state._hideLabel&&"string"==typeof this.state._label?this.state._label:void 0,autoCapitalize:"off",autoCorrect:"off",disabled:this.state._disabled,id:this.state._id,multiple:this.state._multiple,name:this.state._name,required:this.state._required,spellcheck:"false",type:"file",value:this.state._value},this.controller.onFacade,{onChange:this.onChange,onInput:this.onInput})))))}constructor(t){(0,a.r)(this,t),this.catchRef=t=>{this.ref=t,(0,o.a)(this.host,this.ref)},this.onChange=t=>{if(this.ref instanceof HTMLInputElement&&"file"===this.ref.type){const e=this.ref.files;this.controller.onFacade.onChange(t),this.controller.setFormAssociatedValue(e)}},this.onInput=t=>{this.controller.onFacade.onInput(t,!1)},this._accept=void 0,this._accessKey=void 0,this._alert=!0,this._disabled=!1,this._error=void 0,this._hideError=!1,this._hideLabel=!1,this._hint="",this._icon=void 0,this._icons=void 0,this._id=void 0,this._label=void 0,this._multiple=!1,this._name=void 0,this._on=void 0,this._required=!1,this._smartButton=void 0,this._syncValueBySelector=void 0,this._tabIndex=void 0,this._tooltipAlign="top",this._touched=!1,this._value=void 0,this.state={_hideError:!1,_id:`id-${(0,l.n)()}`,_label:"…"},this.controller=new c(this,"file",this.host)}validateAccept(t){this.controller.validateAccept(t)}validateAccessKey(t){this.controller.validateAccessKey(t)}validateAlert(t){this.controller.validateAlert(t)}validateDisabled(t){this.controller.validateDisabled(t)}validateError(t){this.controller.validateError(t)}validateHideError(t){this.controller.validateHideError(t)}validateHideLabel(t){this.controller.validateHideLabel(t)}validateHint(t){this.controller.validateHint(t)}validateIcon(t){this.validateIcons(t)}validateIcons(t){this.controller.validateIcons(t)}validateId(t){this.controller.validateId(t)}validateLabel(t){this.controller.validateLabel(t)}validateMultiple(t){this.controller.validateMultiple(t)}validateName(t){this.controller.validateName(t)}validateOn(t){this.controller.validateOn(t)}validateRequired(t){this.controller.validateRequired(t)}validateSmartButton(t){this.controller.validateSmartButton(t)}validateSyncValueBySelector(t){this.controller.validateSyncValueBySelector(t)}validateTabIndex(t){this.controller.validateTabIndex(t)}validateTouched(t){this.controller.validateTouched(t)}validateValue(t){this.controller.validateValue(t)}componentWillLoad(){this._alert=!0===this._alert,this._touched=!0===this._touched,this.controller.componentWillLoad()}get host(){return(0,a.g)(this)}static get watchers(){return{_accept:["validateAccept"],_accessKey:["validateAccessKey"],_alert:["validateAlert"],_disabled:["validateDisabled"],_error:["validateError"],_hideError:["validateHideError"],_hideLabel:["validateHideLabel"],_hint:["validateHint"],_icon:["validateIcon"],_icons:["validateIcons"],_id:["validateId"],_label:["validateLabel"],_multiple:["validateMultiple"],_name:["validateName"],_on:["validateOn"],_required:["validateRequired"],_smartButton:["validateSmartButton"],_syncValueBySelector:["validateSyncValueBySelector"],_tabIndex:["validateTabIndex"],_touched:["validateTouched"],_value:["validateValue"]}}};h.style={default:'@charset "UTF-8";:host{--a11y-min-size:44px;background-color:white;color:black;font-family:Verdana}*{hyphens:auto;letter-spacing:inherit;word-break:break-word;word-spacing:inherit}[role=button],button:not([role=link]),.kol-input .input{min-height:var(--a11y-min-size);min-width:var(--a11y-min-size)}a,button,h1,h2,h3,h4,h5,h6,input,option,select,textarea{font-family:inherit;font-size:inherit}.visually-hidden{clip:rect(0 0 0 0);clip-path:inset(50%);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px}:is(a,button){background-color:transparent;border:none;margin:0;padding:0;width:100%;}[hidden]{display:none !important}:host{max-width:100%}*{box-sizing:border-box}.kol-span-wc{display:grid;place-items:center}.kol-span-wc>span{display:flex;place-items:center}a,button{cursor:pointer}.icon-only>.kol-span-wc>span>span{display:none}.hidden{display:none;visibility:hidden}.required label>span::after,.required legend>span::after{content:"*"}:host{display:block}input,textarea{cursor:text}input[type=checkbox],input[type=color],input[type=file],input[type=radio],input[type=range],label,option,select{cursor:pointer}input[type=color],input[type=date],input[type=datetime-local],input[type=email],input[type=file],input[type=month],input[type=number],input[type=password],input[type=search],input[type=tel],input[type=text],input[type=time],input[type=url],input[type=week],select,select[multiple] option,textarea{font-size:calc(16rem / var(--kolibri-root-font-size, 16));width:100%}input[type=file]{padding:calc((var(--a11y-min-size) - (16rem / var(--kolibri-root-font-size, 16))) / 10) 0.5em}select[multiple] option{padding:calc((var(--a11y-min-size) - (16rem / var(--kolibri-root-font-size, 16))) / 2) 0.5em}.kol-input.disabled :is(button,input,option,select,textarea,.input-label){cursor:not-allowed;opacity:0.5}.kol-input{display:grid}.kol-input .input-slot{flex-grow:1}input:not([type=checkbox],[type=radio]),select:not([multiple],[size]){height:2.75em}input:focus,option:focus,select:focus,textarea:focus{outline:0}.input{display:flex;align-items:center}.input>.kol-icon{display:grid;height:var(--a11y-min-size);place-items:center}.kol-input.required .input-tooltip .span-label::after{content:"*"}label input[type=file]::-webkit-file-upload-button{display:none}label input[type=file]:before{content:"Datei auswählen"}label input[multiple]:before{content:"Dateien auswählen"}div.input{cursor:pointer}'}}}]);