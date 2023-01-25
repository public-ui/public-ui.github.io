"use strict";(self.webpackChunk_public_ui_storybook=self.webpackChunk_public_ui_storybook||[]).push([[5079],{"./node_modules/@public-ui/components/dist/esm/controller-4dbfb429.js":(C,u,n)=>{n.d(u,{I:()=>v,g:()=>a});var s=n("./node_modules/@public-ui/components/dist/esm/a11y.tipps-ff5a1a99.js"),o=n("./node_modules/@public-ui/components/dist/esm/prop.validators-4fa47ba8.js"),r=n("./node_modules/@public-ui/components/dist/esm/validator-8ee8737c.js"),_=n("./node_modules/@public-ui/components/dist/esm/tab-index-d4f41cd5.js"),b=n("./node_modules/@public-ui/components/dist/esm/dev.utils-daaf2f39.js");/*!
 * KoliBri - The accessible HTML-Standard
 */const a=d=>{const t=typeof d._error=="string"&&d._error.length>0&&d._touched===!0,i=typeof d._hint=="string"&&d._hint.length>0,h=[];return t===!0&&h.push(`${d._id}-error`),i===!0&&h.push(`${d._id}-hint`),{hasError:t,hasHint:i,ariaDiscribedBy:h}},l=(0,b.b)();class m{constructor(t,i,h){var f,y,g,E,L;if(this.syncFormAssociatedName=()=>{var p;l&&((p=this.formAssociated)===null||p===void 0||p.setAttribute("name",this.component.state._name||this.component.state._id))},this.setFormAssociatedValue=(p=null)=>{var c;l&&((c=this.formAssociated)===null||c===void 0||c.setAttribute("value",p))},this.component=t,this.name=i,this.host=h,l){this.formAssociated=document.createElement("input"),this.formAssociated.setAttribute("type","hidden");const p=((f=this.host)===null||f===void 0?void 0:f.children)||[];for(let c=0;c<p.length;c++)((y=this.host)===null||y===void 0?void 0:y.children[c].tagName)==="INPUT"&&((g=this.host)===null||g===void 0||g.removeChild((E=this.host)===null||E===void 0?void 0:E.children[c]));(L=this.host)===null||L===void 0||L.appendChild(this.formAssociated)}}validateAlert(t){(0,o.b)(this.component,"_alert",t)}validateTouched(t){(0,o.b)(this.component,"_touched",t)}componentWillLoad(){this.validateAlert(this.component._alert),this.validateTouched(this.component._touched)}}const e=(d,t)=>{const i=d;typeof i=="object"&&i!==null&&((0,r.a)(i.right,1)&&(i.right={icon:i.right}),(0,r.a)(i.left,1)&&(i.left={icon:i.left}),t.set("_icon",i))};class v extends m{constructor(t,i,h){super(t,i,h),this.hideLabel=!1,this.onFacade={onBlur:this.onBlur.bind(this),onChange:this.onChange.bind(this),onClick:this.onClick.bind(this),onFocus:this.onFocus.bind(this)},this.component=t}validateAccessKey(t){(0,o.w)(this.component,"_accessKey",t)}validateAdjustHeight(t){(0,o.b)(this.component,"_adjustHeight",t)}validateDisabled(t){(0,o.b)(this.component,"_disabled",t),t===!0&&(0,s.c)()}validateError(t){(0,o.w)(this.component,"_error",t)}validateHideLabel(t){(0,o.b)(this.component,"_hideLabel",t)}validateHint(t){(0,o.w)(this.component,"_hint",t)}validateIcon(t){(0,o.o)(t,()=>{try{t=(0,o.p)(t)}catch(i){}(0,o.a)(this.component,"_icon",i=>typeof i=="object"&&i!==null&&((0,r.a)(i.left,1)||(0,_.i)(i.left)||(0,r.a)(i.right,1)||(0,_.i)(i.right)),new Set(["KoliBriInputIcon"]),t,{hooks:{beforePatch:e},required:!0})})}validateId(t){(0,o.w)(this.component,"_id",t,{hooks:{afterPatch:this.syncFormAssociatedName}}),t===void 0&&(0,s.d)("Eine eindeutige ID an den Eingabefeldern ist nicht zwingend erforderlich, k\xF6nnte aber f\xFCr die E2E-Tests relevant sein.")}validateName(t){(0,o.w)(this.component,"_name",t,{hooks:{afterPatch:this.syncFormAssociatedName}}),t===void 0&&(0,s.d)("Ein Name an den Eingabefeldern ist nicht zwingend erforderlich, kann aber f\xFCr die Autocomplete-Funktion des Eingabefeldes relevant sein.")}validateOn(t){typeof t=="object"&&(0,o.s)(this.component,"_on",t)}validateSmartButton(t){(0,o.o)(t,()=>{try{t=(0,o.p)(t)}catch(i){}(0,o.s)(this.component,"_smartButton",t)})}validateTabIndex(t){(0,_.v)(this.component,t)}componentWillLoad(){super.componentWillLoad(),this.validateAccessKey(this.component._accessKey),this.validateAdjustHeight(this.component._adjustHeight),this.validateError(this.component._error),this.validateDisabled(this.component._disabled),this.validateHideLabel(this.component._hideLabel),this.validateHint(this.component._hint),this.validateIcon(this.component._icon),this.validateId(this.component._id),this.validateName(this.component._name),this.validateSmartButton(this.component._smartButton),this.validateOn(this.component._on),this.validateTabIndex(this.component._tabIndex),this.syncFormAssociatedName()}onBlur(t){var i;this.component._alert=!0,this.component._touched=!0,typeof((i=this.component._on)===null||i===void 0?void 0:i.onBlur)=="function"&&this.component._on.onBlur(t)}onChange(t){var i;this.setFormAssociatedValue(t.target.value),typeof((i=this.component._on)===null||i===void 0?void 0:i.onChange)=="function"&&this.component._on.onChange(t,t.target.value)}onClick(t){var i;typeof((i=this.component._on)===null||i===void 0?void 0:i.onClick)=="function"&&this.component._on.onClick(t)}onFocus(t){var i;this.component._alert=!0,typeof((i=this.component._on)===null||i===void 0?void 0:i.onFocus)=="function"&&this.component._on.onFocus(t)}setValue(t,i){var h;this.setFormAssociatedValue(i),typeof((h=this.component._on)===null||h===void 0?void 0:h.onChange)=="function"&&this.component._on.onChange(t,i)}}},"./node_modules/@public-ui/components/dist/esm/controller-d0d46e70.js":(C,u,n)=>{n.d(u,{I:()=>_});var s=n("./node_modules/@public-ui/components/dist/esm/a11y.tipps-ff5a1a99.js"),o=n("./node_modules/@public-ui/components/dist/esm/prop.validators-4fa47ba8.js"),r=n("./node_modules/@public-ui/components/dist/esm/controller-4dbfb429.js");/*!
 * KoliBri - The accessible HTML-Standard
 */class _ extends r.I{constructor(a,l,m){super(a,l,m),this.handleHiddenLabelAndRequired=()=>{this.component.state._hideLabel===!0&&this.component.state._required===!0?((0,s.d)("[KolInput*] Wenn man das Label ausblendet, dann kann der sehende Nutzer:in nicht mehr erkennen, ob die Eingabe erforderlich ist."),this.hideLabel=!1):this.hideLabel=this.component.state._hideLabel===!0},this.component=a}validateAutoComplete(a){(0,o.a)(this.component,"_autoComplete",l=>typeof l=="string"&&(l==="on"||l==="off"),new Set(["on | off"]),a)}validateHideLabel(a){(0,o.b)(this.component,"_hideLabel",a,{hooks:{afterPatch:this.handleHiddenLabelAndRequired}})}validateMaxLength(a){(0,o.d)(this.component,"_maxLength",a,{min:0})}validatePattern(a){(0,o.w)(this.component,"_pattern",a)}validatePlaceholder(a){(0,o.w)(this.component,"_placeholder",a)}validateReadOnly(a){(0,o.b)(this.component,"_readOnly",a)}validateRequired(a){(0,o.b)(this.component,"_required",a,{hooks:{afterPatch:this.handleHiddenLabelAndRequired}})}validateSize(a){(0,o.d)(this.component,"_size",a,{min:1})}validateValue(a){(0,o.w)(this.component,"_value",a)}componentWillLoad(){super.componentWillLoad(),this.validateAutoComplete(this.component._autoComplete),this.validateMaxLength(this.component._maxLength),this.validatePattern(this.component._pattern),this.validatePlaceholder(this.component._placeholder),this.validateReadOnly(this.component._readOnly),this.validateRequired(this.component._required),this.validateSize(this.component._size),this.validateValue(this.component._value)}onBlur(a){this.component.state=Object.assign(Object.assign({},this.component.state),{_placeholder:this.placeholderCache}),this.placeholderCache=void 0,super.onBlur(a)}onFocus(a){this.placeholderCache=this.component.state._placeholder,this.component.state=Object.assign(Object.assign({},this.component.state),{_placeholder:void 0}),super.onFocus(a)}}},"./node_modules/@public-ui/components/dist/esm/kol-input-password.entry.js":(C,u,n)=>{n.r(u),n.d(u,{kol_input_password:()=>m});var s=n("./node_modules/@public-ui/components/dist/esm/index-1a5ffdc0.js"),o=n("./node_modules/@public-ui/components/dist/esm/a11y.tipps-ff5a1a99.js"),r=n("./node_modules/@public-ui/components/dist/esm/reuse-f9be4952.js"),_=n("./node_modules/@public-ui/components/dist/esm/controller-2b71fb23.js"),b=n("./node_modules/@public-ui/components/dist/esm/controller-4dbfb429.js"),a=n("./node_modules/@public-ui/components/dist/esm/controller-d0d46e70.js");/*!
 * KoliBri - The accessible HTML-Standard
 */const l="@windicss; *{box-sizing:border-box;font-size:inherit;hyphens:auto;letter-spacing:inherit;word-break:break-word;word-spacing:inherit}kol-heading-wc{font-weight:700}kol-icon{color:inherit}kol-span-wc{display:grid;place-items:center;width:100%}kol-span-wc>span{display:flex;gap:0.25rem;place-items:center}a,button{cursor:pointer}a.icon-only>kol-span-wc>span>span,button.icon-only>kol-span-wc>span>span{display:none}a{display:inline-flex;place-items:baseline}button{border-width:0}",m=class{render(){const{ariaDiscribedBy:e}=(0,b.g)(this.state);return(0,s.h)(s.H,null,(0,s.h)("kol-input",{_disabled:this.state._disabled,_error:this.state._error,_hideLabel:this.state._hideLabel,_hint:this.state._hint,_icon:this.state._icon,_id:this.state._id,_readOnly:this.state._readOnly,_required:this.state._required,_smartButton:this.state._smartButton,_touched:this.state._touched},(0,s.h)("span",{slot:"label"},(0,s.h)("slot",null)),(0,s.h)("input",Object.assign({ref:this.catchRef,part:"input",title:"",accessKey:this.state._accessKey,"aria-describedby":e.length>0?e.join(" "):void 0,"aria-labelledby":`${this.state._id}-label`,autoCapitalize:"off",autoComplete:this.state._autoComplete,autoCorrect:"off",disabled:this.state._disabled,id:this.state._id,maxlength:this.state._maxLength,name:this.state._name,pattern:this.state._pattern,placeholder:this.state._placeholder,readOnly:this.state._readOnly,required:this.state._required,size:this.state._size,slot:"input",spellcheck:"false",type:"password",value:this.state._value},this.controller.onFacade,{onKeyUp:this.onKeyUp}))))}constructor(e){(0,s.r)(this,e),this.catchRef=v=>{this.ref=v,(0,r.p)(this.host,this.ref)},this.onKeyUp=v=>{v.code==="Enter"?(0,_.p)({form:this.host,ref:this.ref}):this.controller.onFacade.onClick(v)},this._accessKey=void 0,this._alert=!0,this._autoComplete=void 0,this._disabled=void 0,this._error=void 0,this._hideLabel=void 0,this._hint="",this._icon=void 0,this._id=void 0,this._maxLength=void 0,this._name=void 0,this._on=void 0,this._pattern=void 0,this._placeholder=void 0,this._readOnly=void 0,this._required=void 0,this._size=void 0,this._smartButton=void 0,this._tabIndex=void 0,this._touched=!1,this._value=void 0,this.state={_autoComplete:"off",_id:"\u26A0"},this.controller=new a.I(this,"password",this.host)}validateAccessKey(e){this.controller.validateAccessKey(e)}validateAlert(e){this.controller.validateAlert(e)}validateAutoComplete(e){this.controller.validateAutoComplete(e),e==="on"&&(0,o.d)(`[KolInputPassword] Die Option 'autocomplete' sollte bei einem Passwort-Eingabefeld nicht auf "on" gesetzt werden.`)}validateDisabled(e){this.controller.validateDisabled(e)}validateError(e){this.controller.validateError(e)}validateHideLabel(e){this.controller.validateHideLabel(e)}validateHint(e){this.controller.validateHint(e)}validateIcon(e){this.controller.validateIcon(e)}validateId(e){this.controller.validateId(e)}validateMaxLength(e){this.controller.validateMaxLength(e)}validateName(e){this.controller.validateName(e)}validateOn(e){this.controller.validateOn(e)}validatePattern(e){this.controller.validatePattern(e)}validatePlaceholder(e){this.controller.validatePlaceholder(e)}validateReadOnly(e){this.controller.validateReadOnly(e)}validateRequired(e){this.controller.validateRequired(e)}validateSize(e){this.controller.validateSize(e)}validateSmartButton(e){this.controller.validateSmartButton(e)}validateTabIndex(e){this.controller.validateTabIndex(e)}validateTouched(e){this.controller.validateTouched(e)}validateValue(e){this.controller.validateValue(e)}componentWillLoad(){this._alert=this._alert===!0,this._touched=this._touched===!0,this.controller.componentWillLoad()}get host(){return(0,s.g)(this)}static get watchers(){return{_accessKey:["validateAccessKey"],_alert:["validateAlert"],_autoComplete:["validateAutoComplete"],_disabled:["validateDisabled"],_error:["validateError"],_hideLabel:["validateHideLabel"],_hint:["validateHint"],_icon:["validateIcon"],_id:["validateId"],_maxLength:["validateMaxLength"],_name:["validateName"],_on:["validateOn"],_pattern:["validatePattern"],_placeholder:["validatePlaceholder"],_readOnly:["validateReadOnly"],_required:["validateRequired"],_size:["validateSize"],_smartButton:["validateSmartButton"],_tabIndex:["validateTabIndex"],_touched:["validateTouched"],_value:["validateValue"]}}};m.style={default:l}}}]);
