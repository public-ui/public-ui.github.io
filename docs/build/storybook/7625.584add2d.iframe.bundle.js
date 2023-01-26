"use strict";(self.webpackChunk_public_ui_storybook=self.webpackChunk_public_ui_storybook||[]).push([[7625],{"./node_modules/@public-ui/components/dist/esm/button-link-81f54cfc.js":(m,d,e)=>{e.d(d,{w:()=>c});var a=e("./node_modules/@public-ui/components/dist/esm/prop.validators-a4eb5bf9.js");/*!
 * KoliBri - The accessible HTML-Standard
 */const c=(h,_,i)=>{(0,a.a)(h,_,n=>n==="top"||n==="right"||n==="bottom"||n==="left",new Set(["Alignment {top, right, buttom, left}"]),i,{defaultValue:"top"})}},"./node_modules/@public-ui/components/dist/esm/controller-3e43bc23.js":(m,d,e)=>{e.d(d,{a:()=>c,w:()=>h});var a=e("./node_modules/@public-ui/components/dist/esm/prop.validators-a4eb5bf9.js");/*!
 * KoliBri - The accessible HTML-Standard
 */const c=(_,i,n)=>{(0,a.a)(_,i,s=>s==="button"||s==="reset"||s==="submit",new Set(["KoliBriButtonType {button, reset, submit}"]),n)},h=(_,i,n)=>{(0,a.a)(_,i,s=>s==="primary"||s==="secondary"||s==="normal"||s==="danger"||s==="ghost"||s==="custom",new Set(["KoliBriButtonVariant {primary, secondary, normal, danger, ghost, custom}"]),n,{defaultValue:"normal"})}},"./node_modules/@public-ui/components/dist/esm/kol-button-wc_2.entry.js":(m,d,e)=>{e.r(d),e.d(d,{kol_button_wc:()=>u,kol_span_wc:()=>y});var a=e("./node_modules/@public-ui/components/dist/esm/index-1a5ffdc0.js"),c=e("./node_modules/@public-ui/components/dist/esm/button-link-81f54cfc.js"),h=e("./node_modules/@public-ui/components/dist/esm/a11y.tipps-ff5a1a99.js"),_=e("./node_modules/@public-ui/components/dist/esm/dev.utils-daaf2f39.js"),i=e("./node_modules/@public-ui/components/dist/esm/prop.validators-a4eb5bf9.js"),n=e("./node_modules/@public-ui/components/dist/esm/reuse-f9be4952.js"),s=e("./node_modules/@public-ui/components/dist/esm/tab-index-3afbeed1.js"),o=e("./node_modules/@public-ui/components/dist/esm/label-3e47ba60.js"),b=e("./node_modules/@public-ui/components/dist/esm/controller-1dd1bd8a.js"),v=e("./node_modules/@public-ui/components/dist/esm/controller-3e43bc23.js");/*!
 * KoliBri - The accessible HTML-Standard
 */const u=class{constructor(t){(0,a.r)(this,t),this.nonce=(0,_.n)(),this.catchRef=l=>{this.ref=l,(0,n.p)(this.host,this.ref)},this.onClick=l=>{var r,f;this.state._type==="submit"?(0,b.p)({form:this.host,ref:this.ref}):this.state._type==="reset"?(0,b.a)({form:this.host,ref:this.ref}):typeof((r=this.state._on)===null||r===void 0?void 0:r.onClick)=="function"?((0,i.e)(l,this.ref),(f=this.state._on)===null||f===void 0||f.onClick(l,this.state._value)):(0,h.d)("It was no button click callback configured!")},this._accessKey=void 0,this._ariaControls=void 0,this._ariaCurrent=void 0,this._ariaExpanded=void 0,this._ariaLabel="",this._ariaSelected=void 0,this._customClass=void 0,this._disabled=!1,this._icon=void 0,this._iconAlign="left",this._iconOnly=!1,this._id=void 0,this._label=void 0,this._on=void 0,this._role=void 0,this._tabIndex=void 0,this._tooltipAlign="top",this._type="button",this._value=void 0,this._variant="normal",this.state={_ariaLabel:"",_icon:{},_iconAlign:"left",_label:"",_on:{},_type:"button"}}render(){return(0,a.h)(a.H,null,(0,a.h)("button",Object.assign({ref:this.catchRef,accessKey:this.state._accessKey,"aria-controls":this.state._ariaControls,"aria-current":(0,i.i)(this.state._ariaCurrent),"aria-expanded":(0,i.g)(this.state._ariaExpanded),"aria-label":this.state._iconOnly===!1?this.state._ariaLabel||this.state._label:void 0,"aria-labelledby":this.state._iconOnly===!0?this.nonce:void 0,"aria-selected":(0,i.i)(this.state._ariaSelected),class:{[this.state._variant]:this.state._variant!=="custom",[this.state._customClass]:this.state._variant==="custom"&&typeof this.state._customClass=="string"&&this.state._customClass.length>0,"icon-only":this.state._iconOnly===!0},disabled:this.state._disabled,id:this.state._id},this.state._on,{onClick:this.onClick,role:this.state._role,tabIndex:this.state._tabIndex,type:this.state._type}),(0,a.h)("kol-span-wc",{_icon:this._icon,_iconOnly:this._iconOnly,_label:this.state._ariaLabel||this.state._label},(0,a.h)("slot",{name:"expert",slot:"expert"}))),this.state._iconOnly===!0&&(0,a.h)("kol-tooltip",{"aria-hidden":"true",_align:this.state._tooltipAlign,_id:this.nonce,_label:this.state._ariaLabel||this.state._label}))}validateAccessKey(t){(0,i.w)(this,"_accessKey",t)}validateAriaControls(t){(0,i.w)(this,"_ariaControls",t)}validateAriaCurrent(t){(0,i.a)(this,"_ariaControls",l=>l===!0||l==="date"||l==="location"||l==="page"||l==="step"||l==="time",new Set(["boolean","String {data, location, page, step, time}"]),t)}validateAriaExpanded(t){(0,i.b)(this,"_ariaExpanded",t)}validateAriaLabel(t){(0,o.v)(this,t)}validateAriaSelected(t){(0,i.b)(this,"_ariaSelected",t)}validateCustomClass(t){(0,i.w)(this,"_customClass",t,{defaultValue:void 0})}validateDisabled(t){(0,i.b)(this,"_disabled",t),t===!0&&(0,h.c)()}validateIcon(t){(0,s.a)(this,t)}validateIconAlign(t){(0,s.w)(this,t)}validateIconOnly(t){(0,i.b)(this,"_iconOnly",t,{defaultValue:!1})}validateId(t){(0,i.w)(this,"_id",t)}validateLabel(t){(0,o.a)(this,t)}validateOn(t){typeof t=="object"&&t!==null&&(this.state=Object.assign(Object.assign({},this.state),{_on:t}))}validateRole(t){(0,i.w)(this,"_role",t)}validateTabIndex(t){(0,s.v)(this,t)}validateTooltipAlign(t){(0,c.w)(this,"_tooltipAlign",t)}validateType(t){(0,v.a)(this,"_type",t)}validateValue(t){(0,i.s)(this,"_value",t)}validateVariant(t){(0,v.w)(this,"_variant",t)}componentWillLoad(){this.validateAccessKey(this._accessKey),this.validateAriaControls(this._ariaControls),this.validateAriaCurrent(this._ariaCurrent),this.validateAriaExpanded(this._ariaExpanded),this.validateAriaLabel(this._ariaLabel),this.validateAriaSelected(this._ariaSelected),this.validateCustomClass(this._customClass),this.validateDisabled(this._disabled),this.validateIcon(this._icon),this.validateIconOnly(this._iconOnly),this.validateId(this._id),this.validateLabel(this._label),this.validateOn(this._on),this.validateRole(this._role),this.validateTabIndex(this._tabIndex),this.validateTooltipAlign(this._tooltipAlign),this.validateType(this._type),this.validateValue(this._value),this.validateVariant(this._variant)}get host(){return(0,a.g)(this)}static get watchers(){return{_accessKey:["validateAccessKey"],_ariaControls:["validateAriaControls"],_ariaCurrent:["validateAriaCurrent"],_ariaExpanded:["validateAriaExpanded"],_ariaLabel:["validateAriaLabel"],_ariaSelected:["validateAriaSelected"],_customClass:["validateCustomClass"],_disabled:["validateDisabled"],_icon:["validateIcon"],_iconAlign:["validateIconAlign"],_iconOnly:["validateIconOnly"],_id:["validateId"],_label:["validateLabel"],_on:["validateOn"],_role:["validateRole"],_tabIndex:["validateTabIndex"],_tooltipAlign:["validateTooltipAlign"],_type:["validateType"],_value:["validateValue"],_variant:["validateVariant"]}}},p=t=>{t instanceof Node&&setTimeout(()=>{var l,r;(l=t.parentElement)===null||l===void 0||l.removeChild(t),(r=t.parentNode)===null||r===void 0||r.removeChild(t)})},y=class{constructor(t){(0,a.r)(this,t),this._icon=void 0,this._iconOnly=!1,this._label=void 0,this.state={_icon:{},_iconOnly:!1,_label:""}}render(){return(0,a.h)(a.H,{class:{"icon-only":this.state._iconOnly}},this.state._icon.top&&(0,a.h)("kol-icon",{class:{"icon top":!0},style:this.state._icon.top.style,_ariaLabel:"",_icon:this.state._icon.top.icon}),(0,a.h)("span",null,this.state._icon.left&&(0,a.h)("kol-icon",{class:{"icon left":!0},style:this.state._icon.left.style,_ariaLabel:"",_icon:this.state._icon.left.icon}),this.state._iconOnly!==!0&&this.state._label.length>0?(0,a.h)("span",null,this.state._label):"",(0,a.h)("span",{ref:this.state._label.length>0||this.state._iconOnly===!0?p:void 0},(0,a.h)("slot",{name:"expert"})),this.state._icon.right&&(0,a.h)("kol-icon",{class:{"icon right":!0},style:this.state._icon.right.style,_ariaLabel:"",_icon:this.state._icon.right.icon})),this.state._icon.bottom&&(0,a.h)("kol-icon",{class:{"icon bottom":!0},style:this.state._icon.bottom.style,_ariaLabel:"",_icon:this.state._icon.bottom.icon}))}validateIcon(t){(0,s.a)(this,t)}validateIconOnly(t){(0,i.b)(this,"_iconOnly",t)}validateLabel(t){(0,o.a)(this,t)}componentWillLoad(){this.validateIcon(this._icon),this.validateIconOnly(this._iconOnly),this.validateLabel(this._label)}static get watchers(){return{_icon:["validateIcon"],_iconOnly:["validateIconOnly"],_label:["validateLabel"]}}}},"./node_modules/@public-ui/components/dist/esm/label-3e47ba60.js":(m,d,e)=>{e.d(d,{a:()=>n,v:()=>i});var a=e("./node_modules/@public-ui/components/dist/esm/a11y.tipps-ff5a1a99.js"),c=e("./node_modules/@public-ui/components/dist/esm/prop.validators-a4eb5bf9.js"),h=e("./node_modules/@public-ui/components/dist/esm/validator-8ee8737c.js");/*!
 * KoliBri - The accessible HTML-Standard
 */const _=(s,o,b,v)=>{const u=o.has("_ariaLabel")?o.get("_ariaLabel"):b.state._ariaLabel;if(typeof u=="string"){const p=o.has("_label")?o.get("_label"):b.state._label;(0,h.c)(p,u)===!1&&(v==="_ariaLabel"?o.set("_label",u):o.set("_ariaLabel",p),(0,a.e)("Das abweichende Aria-Label am Schalter ist nicht barrierefrei. Ein abweichendes Aria-Label muss aus Gr\xFCndern der Barrierefreiheit f\xFCr die Sprachsteuerung mit dem Label-Text beginnen."))}},i=(s,o)=>{(0,c.w)(s,"_ariaLabel",o,{hooks:{beforePatch:_}})},n=(s,o)=>{(0,c.w)(s,"_label",o,{hooks:{beforePatch:_},required:!0})}}}]);
