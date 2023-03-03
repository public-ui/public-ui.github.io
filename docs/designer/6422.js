/*! For license information please see 6422.js.LICENSE.txt */
"use strict";(self.webpackChunk_public_ui_designer=self.webpackChunk_public_ui_designer||[]).push([[6422],{40796:(t,i,o)=>{o.d(i,{a:()=>s,w:()=>r});var a=o(44594);const s=(t,i,o)=>{(0,a.a)(t,i,(t=>"button"===t||"reset"===t||"submit"===t),new Set(["KoliBriButtonType {button, reset, submit}"]),o)},r=(t,i,o)=>{(0,a.a)(t,i,(t=>"primary"===t||"secondary"===t||"normal"===t||"danger"===t||"ghost"===t||"custom"===t),new Set(["KoliBriButtonVariant {primary, secondary, normal, danger, ghost, custom}"]),o,{defaultValue:"normal"})}},56422:(t,i,o)=>{o.r(i),o.d(i,{kol_link_button:()=>l});var a=o(99459),s=o(44594),r=o(6715),n=o(40796),e=o(14044);const l=class{constructor(t){(0,a.r)(this,t),this.catchRef=t=>{this.ref=t,(0,r.a)(this.host,this.ref)},this._ariaControls=void 0,this._ariaCurrent=void 0,this._ariaExpanded=void 0,this._ariaLabel=void 0,this._ariaSelected=void 0,this._customClass=void 0,this._disabled=!1,this._href=void 0,this._icon=void 0,this._iconOnly=!1,this._label=void 0,this._on=void 0,this._role=void 0,this._tabIndex=void 0,this._target=void 0,this._targetDescription=(0,e.a)("kol-open-link-in-tab"),this._tooltipAlign="right",this._variant="normal",this.state={}}render(){return(0,a.h)(a.H,null,(0,a.h)("kol-link-wc",{ref:this.catchRef,class:{button:!0,[this.state._variant]:"custom"!==this.state._variant,[this.state._customClass]:"custom"===this.state._variant&&"string"==typeof this.state._customClass&&this.state._customClass.length>0},_ariaControls:this._ariaControls,_ariaCurrent:this._ariaCurrent,_ariaExpanded:this._ariaExpanded,_ariaLabel:this._ariaLabel,_ariaSelected:this._ariaSelected,_disabled:this._disabled,_href:this._href,_icon:this._icon,_iconOnly:this._iconOnly,_label:this._label,_on:this._on,_role:"button",_tabIndex:this._tabIndex,_target:this._target,_targetDescription:this._targetDescription,_tooltipAlign:this._tooltipAlign},(0,a.h)("slot",{name:"expert",slot:"expert"})))}validateCustomClass(t){(0,s.w)(this,"_customClass",t,{defaultValue:void 0})}validateVariant(t){(0,n.w)(this,"_variant",t)}componentWillLoad(){this.validateCustomClass(this._customClass),this.validateVariant(this._variant)}get host(){return(0,a.g)(this)}static get watchers(){return{_customClass:["validateCustomClass"],_variant:["validateVariant"]}}};l.style={default:":host{--kolibri-border-color:#666;--kolibri-border-radius:0.125rem;--kolibri-border-width:1px;--kolibri-color-error:#f44336;--kolibri-color-info:#2196f3;--kolibri-color-success:#4caf50;--kolibri-color-warning:#ff9800;--kolibri-color-primary:#3f51b5;--kolibri-color-secondary:#ff4081;--kolibri-color-normal:#9e9e9e;--kolibri-color-danger:#f44336;--kolibri-color-ghost:#f5f5f5;--kolibri-color-disabled:#bdbdbd;--kolibri-color-text:#222222;--kolibri-color-visited:#9c27b0;--kolibri-font-family:Verdana, Arial, Tahoma, Helvetica, sans-serif;--kolibri-font-size:16px;--kolibri-spacing:0.25rem}:host{font-family:inherit;font-size:inherit}:host *{hyphens:auto;letter-spacing:inherit;word-break:break-word;word-spacing:inherit}:host{font-family:var(--kolibri-font-family);font-size:inherit}*{box-sizing:border-box}kol-icon{color:inherit}kol-span-wc{display:grid;place-items:center;width:100%}kol-span-wc>span{display:flex;gap:var(--kolibri-spacing);place-items:center}a{display:inline-flex;place-items:baseline}button{background-color:transparent;border-width:0;margin:0;min-height:44px;min-width:44px;padding:0}a,button,input,select,textarea{cursor:pointer}a.icon-only>kol-span-wc>span>span,:host button.icon-only>kol-span-wc>span>span{display:none}:host{display:inline-block}:host>kol-button-wc,:host>kol-link-wc{width:inherit}:host>kol-button-wc a,:host>kol-button-wc button,:host>kol-link-wc a,:host>kol-link-wc button{cursor:pointer;display:inline-block;min-height:44px;min-width:44px;padding:0;text-align:center;transition-duration:0.5s;transition-property:background-color, color, border-color;width:inherit}:host>kol-button-wc a:active,:host>kol-button-wc button:active,:host>kol-link-wc a:active,:host>kol-link-wc button:active{outline:0 !important;box-shadow:none !important}:host>kol-button-wc a:disabled,:host>kol-button-wc button:disabled,:host>kol-link-wc a:disabled,:host>kol-link-wc button:disabled{box-shadow:none;cursor:not-allowed;opacity:0.5}"}}}]);