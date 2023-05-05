/*! For license information please see 8519.js.LICENSE.txt */
"use strict";(self.webpackChunk_public_ui_designer=self.webpackChunk_public_ui_designer||[]).push([[8519],{3344:(t,a,i)=>{i.d(a,{a:()=>s,v:()=>o});var e=i(13320);const o=(t,a)=>{(0,e.a)(t,"_ariaCurrent",(t=>"date"===t||"location"===t||"page"===t||"step"===t||"time"===t||!0===t),new Set(["String {data, location, page, step, time}","boolean"]),a)},s=(t,a)=>{(0,e.b)(t,"_ariaSelected",a)}},62114:(t,a,i)=>{i.d(a,{w:()=>o});var e=i(13320);const o=(t,a,i)=>{(0,e.a)(t,a,(t=>"top"===t||"right"===t||"bottom"===t||"left"===t),new Set(["Alignment {top, right, buttom, left}"]),i,{defaultValue:"top"})}},79953:(t,a,i)=>{i.d(a,{a:()=>o,w:()=>s});var e=i(13320);const o=(t,a,i)=>{(0,e.a)(t,a,(t=>"button"===t||"reset"===t||"submit"===t),new Set(["KoliBriButtonType {button, reset, submit}"]),i)},s=(t,a,i)=>{(0,e.a)(t,a,(t=>"primary"===t||"secondary"===t||"normal"===t||"danger"===t||"ghost"===t||"custom"===t),new Set(["KoliBriButtonVariant {primary, secondary, normal, danger, ghost, custom}"]),i,{defaultValue:"normal"})}},43870:(t,a,i)=>{i.d(a,{a:()=>s,v:()=>o});var e=i(13320);const o=(t,a)=>{(0,e.b)(t,"_ariaExpanded",a)},s=(t,a)=>{(0,e.b)(t,"_disabled",a)}},30350:(t,a,i)=>{i.d(a,{v:()=>o});var e=i(13320);const o=(t,a)=>{(0,e.b)(t,"_hideLabel",a)}},18519:(t,a,i)=>{i.r(a),i.d(a,{kol_split_button:()=>b});var e=i(79258),o=i(13320),s=i(55709),n=i(82120),l=i(39676),r=i(62114),d=i(79953),h=i(3344),c=i(43870),_=i(30350);const b=class{constructor(t){(0,e.r)(this,t),this.toggleDropdown=()=>{this.dropdown&&this.dropdownContent&&(this.state._showDropdown?this.dropdown.style.height="":this.dropdown.style.height=`${this.dropdownContent.clientHeight}px`),this.state=Object.assign(Object.assign({},this.state),{_showDropdown:!this.state._showDropdown})},this.catchDropdownElements=t=>{t&&(this.dropdown=t,setTimeout((()=>{this.dropdownContent=t.firstChild}),1))},this._accessKey=void 0,this._ariaControls=void 0,this._ariaCurrent=void 0,this._ariaExpanded=void 0,this._ariaLabel=void 0,this._ariaSelected=void 0,this._customClass=void 0,this._disabled=!1,this._hideLabel=!1,this._icon=void 0,this._iconOnly=!1,this._label=void 0,this._onClick=void 0,this._role=void 0,this._showDropdown=!1,this._tabIndex=void 0,this._tooltipAlign="top",this._type="button",this._value=void 0,this._variant="normal",this.state={_icon:"",_label:"",_showDropdown:!1}}render(){return(0,e.h)(e.H,null,(0,e.h)("kol-button-wc",{class:{"main-button":!0,button:!0,[this._variant]:"custom"!==this._variant,[this._customClass]:"custom"===this._variant&&"string"==typeof this._customClass&&this._customClass.length>0},_accessKey:this._accessKey,_ariaControls:this._ariaControls,_ariaCurrent:this._ariaCurrent,_ariaExpanded:this._ariaExpanded,_ariaLabel:this._ariaLabel,_ariaSelected:this._ariaSelected,_customClass:this._customClass,_disabled:this._disabled,_icon:this._icon,_iconOnly:this._hideLabel,_label:this._label,_on:"function"==typeof this.state._onClick?{onClick:this.state._onClick}:{onClick:this.toggleDropdown},_role:this._role,_tabIndex:this._tabIndex,_tooltipAlign:this._tooltipAlign,_type:this._type,_value:this._value,_variant:this._variant}),(0,e.h)("div",{class:"horizontal-line"}),(0,e.h)("kol-button-wc",{class:"secondary-button",_disabled:this._disabled,"_icon-only":!0,_icon:"codicon codicon-triangle-down",_label:"dropdown öffnen",_on:{onClick:this.toggleDropdown}}),(0,e.h)("div",{class:"popover",ref:this.catchDropdownElements},(0,e.h)("div",{class:"popover-content"},(0,e.h)("slot",{name:"popover"}))))}validateAccessKey(t){(0,o.w)(this,"_accessKey",t)}validateAriaControls(t){(0,o.w)(this,"_ariaControls",t)}validateAriaCurrent(t){(0,h.v)(this,t)}validateAriaExpanded(t){(0,c.v)(this,t)}validateAriaLabel(t){(0,s.a)(this,t)}validateAriaSelected(t){(0,h.a)(this,t)}validateCustomClass(t){(0,o.w)(this,"_customClass",t,{defaultValue:void 0})}validateDisabled(t){(0,c.a)(this,t),t&&(0,n.e)()}validateHideLabel(t){(0,_.v)(this,t)}validateIcon(t){(0,o.w)(this,"_icon",t)}validateIconOnly(t){(0,_.v)(this,t)}validateLabel(t){(0,s.b)(this,t)}validateOnClick(t){"function"==typeof t&&(this.state=Object.assign(Object.assign({},this.state),{_onClick:t}))}validateRole(t){(0,o.w)(this,"_role",t)}validateShowDropdown(t){(0,o.b)(this,"_showDropdown",t)}validateTabIndex(t){(0,l.v)(this,t)}validateTooltipAlign(t){(0,r.w)(this,"_tooltipAlign",t)}validateType(t){(0,d.a)(this,"_type",t)}validateValue(t){(0,o.s)(this,"_value",t)}validateVariant(t){(0,d.w)(this,"_variant",t)}componentWillLoad(){this.validateAccessKey(this._accessKey),this.validateAriaControls(this._ariaControls),this.validateAriaCurrent(this._ariaCurrent),this.validateAriaExpanded(this._ariaExpanded),this.validateAriaLabel(this._ariaLabel),this.validateAriaSelected(this._ariaSelected),this.validateCustomClass(this._customClass),this.validateDisabled(this._disabled),this.validateHideLabel(this._hideLabel),this.validateIcon(this._icon),this.validateIconOnly(this._iconOnly),this.validateLabel(this._label),this.validateOnClick(this._onClick),this.validateRole(this._role),this.validateTabIndex(this._tabIndex),this.validateTooltipAlign(this._tooltipAlign),this.validateType(this._type),this.validateValue(this._value),this.validateVariant(this._variant)}static get watchers(){return{_accessKey:["validateAccessKey"],_ariaControls:["validateAriaControls"],_ariaCurrent:["validateAriaCurrent"],_ariaExpanded:["validateAriaExpanded"],_ariaLabel:["validateAriaLabel"],_ariaSelected:["validateAriaSelected"],_customClass:["validateCustomClass"],_disabled:["validateDisabled"],_hideLabel:["validateHideLabel"],_icon:["validateIcon"],_iconOnly:["validateIconOnly"],_label:["validateLabel"],_onClick:["validateOnClick"],_role:["validateRole"],_showDropdown:["validateShowDropdown"],_tabIndex:["validateTabIndex"],_tooltipAlign:["validateTooltipAlign"],_type:["validateType"],_value:["validateValue"],_variant:["validateVariant"]}}};b.style={default:":host{--a11y-min-size:44px}*{hyphens:auto;letter-spacing:inherit;word-break:break-word;word-spacing:inherit}[role='button'],button:not([role='link']),kol-input .input{min-height:var(--a11y-min-size);min-width:var(--a11y-min-size)}a,button,h1,h2,h3,h4,h5,h6,input,option,select,textarea{font-family:inherit;font-size:inherit}:is(a,button){background-color:transparent;border:none;margin:0;padding:0;width:100%;}:host{max-width:100%}*{box-sizing:border-box}kol-span-wc{display:grid;place-items:center}kol-span-wc>span{display:flex;place-items:center}a,button{cursor:pointer}button,input,option,select,textarea{font-family:inherit}.icon-only>kol-span-wc>span>span{display:none}:host{display:flex;position:relative}.main-button{flex-grow:1;text-align:left}.main-button kol-span-wc{place-items:start}.secondary-button button{height:100%}.horizontal-line{background-color:rgba(0, 0, 0, 0.2);border-radius:2px;height:70%;margin-block:auto;width:1px}.popover{height:0;left:0;min-width:100%;overflow:hidden;position:absolute;top:100%;transition:height 0.3s ease-in-out;z-index:-1}.popover-content{inset:0 0 auto 0;min-width:100%;position:absolute}"}},55709:(t,a,i)=>{i.d(a,{a:()=>c,b:()=>b,c:()=>d,h:()=>r,v:()=>_});var e=i(82120),o=i(13320),s=i(7269);const n=/[a-zA-Z0-9äöüÄÖÜß]/g,l=/^\d+$/;function r(t,a=1){return function(t){var a;return"string"==typeof t&&(null===(a=t.match(n))||void 0===a?void 0:a.length)||0}(t)>=a}function d(t){return l.test(t)}const h=(t,a,i,o)=>{const n=a.has("_ariaLabel")?a.get("_ariaLabel"):i.state._ariaLabel;if("string"==typeof n){const t=a.has("_label")?a.get("_label"):i.state._label;!1===(0,s.i)(t,n)&&("_ariaLabel"===o?a.set("_label",n):a.set("_ariaLabel",void 0),(0,e.a)("Das abweichende Aria-Label ist nicht barrierefrei. Ein abweichendes Aria-Label muss aus Gründern der Barrierefreiheit für die Sprachsteuerung mit dem Label-Text beginnen."))}},c=(t,a)=>{((t,a,i={})=>{var s;(0,o.w)(t,"_ariaLabel",a,{hooks:{afterPatch:(t,a,o,s)=>{var n,l;"function"==typeof(null===(n=i.hooks)||void 0===n?void 0:n.afterPatch)&&(null===(l=i.hooks)||void 0===l||l.afterPatch(t,a,o,s)),"string"==typeof t&&t.length>0&&!1===r(t,3)&&!1===d(t)&&(0,e.a)(`Ein abweichendes Aria-Label (${t}) ist nicht barrierefrei. Ein abweichendes Aria-Label sollte aus mindestens drei lesbaren Zeichen bestehen.`)},beforePatch:null===(s=i.hooks)||void 0===s?void 0:s.beforePatch}})})(t,a,{hooks:{beforePatch:h}})},_=(t,a,i={})=>{var s;(0,o.w)(t,"_label",a,{hooks:{afterPatch:(t,a,o,s)=>{var n,l;"function"==typeof(null===(n=i.hooks)||void 0===n?void 0:n.afterPatch)&&(null===(l=i.hooks)||void 0===l||l.afterPatch(t,a,o,s)),"string"==typeof t&&!1===r(t,3)&&!1===d(t)&&(0,e.a)(`Ein Label (${t}) ist nicht barrierefrei. Ein Label sollte aus mindestens drei lesbaren Zeichen bestehen.`)},beforePatch:null===(s=i.hooks)||void 0===s?void 0:s.beforePatch},required:!0})},b=(t,a)=>{_(t,a,{hooks:{beforePatch:h}})}},39676:(t,a,i)=>{i.d(a,{v:()=>n});var e=i(82120),o=i(13320);const s={hooks:{afterPatch:t=>{-1!==t&&0!==t&&(0,e.a)("Don’t Use Tabindex Greater than 0: https://adrianroselli.com/2014/11/dont-use-tabindex-greater-than-0.html")}}},n=(t,a)=>{(0,o.e)(t,"_tabIndex",a,s)}}}]);