/*! For license information please see 8519.js.LICENSE.txt */
"use strict";(self.webpackChunk_public_ui_sample_react=self.webpackChunk_public_ui_sample_react||[]).push([[8519],{3402:(t,i,a)=>{a.d(i,{a:()=>s,v:()=>o});var e=a(2996);const o=(t,i)=>{(0,e.a)(t,"_ariaCurrent",(t=>"date"===t||"location"===t||"page"===t||"step"===t||"time"===t||!0===t),new Set(["String {data, location, page, step, time}","boolean"]),i)},s=(t,i)=>{(0,e.b)(t,"_ariaSelected",i)}},9970:(t,i,a)=>{a.d(i,{w:()=>o});var e=a(2996);const o=(t,i,a)=>{(0,e.a)(t,i,(t=>"top"===t||"right"===t||"bottom"===t||"left"===t),new Set(["Alignment {top, right, buttom, left}"]),a,{defaultValue:"top"})}},4365:(t,i,a)=>{a.d(i,{a:()=>o,w:()=>s});var e=a(2996);const o=(t,i,a)=>{(0,e.a)(t,i,(t=>"button"===t||"reset"===t||"submit"===t),new Set(["KoliBriButtonType {button, reset, submit}"]),a)},s=(t,i,a)=>{(0,e.a)(t,i,(t=>"primary"===t||"secondary"===t||"normal"===t||"danger"===t||"ghost"===t||"custom"===t),new Set(["KoliBriButtonVariant {primary, secondary, normal, danger, ghost, custom}"]),a,{defaultValue:"normal"})}},5252:(t,i,a)=>{a.d(i,{a:()=>s,v:()=>o});var e=a(2996);const o=(t,i)=>{(0,e.b)(t,"_ariaExpanded",i)},s=(t,i)=>{(0,e.b)(t,"_disabled",i)}},3002:(t,i,a)=>{a.d(i,{v:()=>o});var e=a(2996);const o=(t,i)=>{(0,e.b)(t,"_hideLabel",i)}},8519:(t,i,a)=>{a.r(i),a.d(i,{kol_split_button:()=>p});var e=a(578),o=a(9970),s=a(3402),n=a(5252),l=a(3002),r=a(6535),d=a(8242),h=a(2996),c=a(4045),_=a(4365);const p=class{constructor(t){(0,e.r)(this,t),this.clickHandler=t=>{"function"==typeof this.state._on.onClick?this.state._on.onClick(t):this.toggleDropdown()},this.openDropdown=()=>{this.dropdown&&this.dropdownContent&&(this.dropdown.style.height=`${this.dropdownContent.clientHeight}px`,this.state=Object.assign(Object.assign({},this.state),{_showDropdown:!0}))},this.closeDropdown=()=>{this.dropdown&&this.dropdownContent&&(this.dropdown.style.height="",this.state=Object.assign(Object.assign({},this.state),{_showDropdown:!1}))},this.toggleDropdown=t=>{("boolean"==typeof t?t:!this.state._showDropdown)?this.openDropdown():this.closeDropdown()},this.forceCounter=100,this.forceOpenDropdown=()=>{var t;this.forceCounter>0&&((null===(t=this.dropdownContent)||void 0===t?void 0:t.clientHeight)?this.openDropdown():setTimeout(this.forceOpenDropdown,10),this.forceCounter--)},this.catchDropdownElements=t=>{t&&(this.dropdown=t,setTimeout((()=>{this.dropdownContent=t.firstChild,this._showDropdown&&this.forceOpenDropdown()})))},this._accessKey=void 0,this._ariaControls=void 0,this._ariaCurrent=void 0,this._ariaExpanded=void 0,this._ariaLabel=void 0,this._ariaSelected=void 0,this._customClass=void 0,this._disabled=!1,this._hideLabel=!1,this._icon=void 0,this._iconOnly=void 0,this._label=void 0,this._on=void 0,this._role=void 0,this._showDropdown=!1,this._tabIndex=void 0,this._tooltipAlign="top",this._type="button",this._value=void 0,this._variant="normal",this.state={_icon:"",_label:"",_on:{},_showDropdown:!1}}render(){return(0,e.h)(e.H,null,(0,e.h)("kol-button-wc",{class:{"main-button":!0,button:!0,[this._variant]:"custom"!==this._variant,[this._customClass]:"custom"===this._variant&&"string"==typeof this._customClass&&this._customClass.length>0},_accessKey:this._accessKey,_ariaControls:this._ariaControls,_ariaCurrent:this._ariaCurrent,_ariaExpanded:this._ariaExpanded,_ariaSelected:this._ariaSelected,_customClass:this._customClass,_disabled:this._disabled,_icon:this._icon,_hideLabel:this._hideLabel,_label:this._label,_on:{onClick:this.clickHandler},_role:this._role,_tabIndex:this._tabIndex,_tooltipAlign:this._tooltipAlign,_type:this._type,_value:this._value,_variant:this._variant}),(0,e.h)("div",{class:"horizontal-line"}),(0,e.h)("kol-button-wc",{class:"secondary-button",_disabled:this._disabled,_hideLabel:!0,_icon:"codicon codicon-triangle-down",_label:"dropdown "+(this.state._showDropdown?"schließen":"öffnen"),_on:{onClick:()=>this.toggleDropdown()}}),(0,e.h)("div",{class:"popover",ref:this.catchDropdownElements},(0,e.h)("div",{class:"popover-content"},(0,e.h)("slot",null))))}validateAccessKey(t){(0,h.w)(this,"_accessKey",t)}validateAriaControls(t){(0,h.w)(this,"_ariaControls",t)}validateAriaCurrent(t){(0,s.v)(this,t)}validateAriaExpanded(t){(0,n.v)(this,t)}validateAriaLabel(t){this.validateLabel(t)}validateAriaSelected(t){(0,s.a)(this,t)}validateCustomClass(t){(0,h.w)(this,"_customClass",t,{defaultValue:void 0})}validateDisabled(t){(0,n.a)(this,t),t&&(0,d.g)()}validateHideLabel(t){(0,l.v)(this,t)}validateIcon(t){(0,h.w)(this,"_icon",t)}validateIconOnly(t){this.validateHideLabel(t)}validateLabel(t){(0,r.v)(this,t)}validateOn(t){"object"==typeof t&&null!==t&&(this.state=Object.assign(Object.assign({},this.state),{_on:t}))}validateRole(t){(0,h.w)(this,"_role",t)}validateShowDropdown(t){(0,h.b)(this,"_showDropdown",t),this.toggleDropdown(t)}validateTabIndex(t){(0,c.v)(this,t)}validateTooltipAlign(t){(0,o.w)(this,"_tooltipAlign",t)}validateType(t){(0,_.a)(this,"_type",t)}validateValue(t){(0,h.s)(this,"_value",t)}validateVariant(t){(0,_.w)(this,"_variant",t)}componentWillLoad(){this.validateAccessKey(this._accessKey),this.validateAriaControls(this._ariaControls),this.validateAriaCurrent(this._ariaCurrent),this.validateAriaExpanded(this._ariaExpanded),this.validateAriaSelected(this._ariaSelected),this.validateCustomClass(this._customClass),this.validateDisabled(this._disabled),this.validateHideLabel(this._hideLabel||this._iconOnly),this.validateIcon(this._icon),this.validateLabel(this._label||this._ariaLabel),this.validateOn(this._on),this.validateRole(this._role),this.validateShowDropdown(this._showDropdown),this.validateTabIndex(this._tabIndex),this.validateTooltipAlign(this._tooltipAlign),this.validateType(this._type),this.validateValue(this._value),this.validateVariant(this._variant)}static get watchers(){return{_accessKey:["validateAccessKey"],_ariaControls:["validateAriaControls"],_ariaCurrent:["validateAriaCurrent"],_ariaExpanded:["validateAriaExpanded"],_ariaLabel:["validateAriaLabel"],_ariaSelected:["validateAriaSelected"],_customClass:["validateCustomClass"],_disabled:["validateDisabled"],_hideLabel:["validateHideLabel"],_icon:["validateIcon"],_iconOnly:["validateIconOnly"],_label:["validateLabel"],_on:["validateOn"],_role:["validateRole"],_showDropdown:["validateShowDropdown"],_tabIndex:["validateTabIndex"],_tooltipAlign:["validateTooltipAlign"],_type:["validateType"],_value:["validateValue"],_variant:["validateVariant"]}}};p.style={default:":host{--a11y-min-size:44px;font-size:inherit}*{hyphens:auto;letter-spacing:inherit;word-break:break-word;word-spacing:inherit}[role='button'],button:not([role='link']),kol-input .input{min-height:var(--a11y-min-size);min-width:var(--a11y-min-size)}a,button,h1,h2,h3,h4,h5,h6,input,option,select,textarea{font-family:inherit;font-size:inherit}:is(a,button){background-color:transparent;border:none;margin:0;padding:0;width:100%;}:host{max-width:100%}*{box-sizing:border-box}kol-span-wc{display:grid;place-items:center}kol-span-wc>span{display:flex;place-items:center}a,button{cursor:pointer}button,input,option,select,textarea{font-family:inherit}.icon-only>kol-span-wc>span>span{display:none}:host{display:flex;position:relative}.main-button{flex-grow:1;text-align:left}.main-button kol-span-wc{place-items:start}.secondary-button button{height:100%}.horizontal-line{background-color:rgba(0, 0, 0, 0.2);border-radius:2px;height:70%;margin-block:auto;width:1px}.popover{height:0;left:0;min-width:100%;overflow:hidden;position:absolute;top:100%;transition:height 0.3s ease-in-out}.popover-content{inset:0 0 auto 0;min-width:100%;position:absolute}"}},6535:(t,i,a)=>{a.d(i,{a:()=>p,c:()=>r,h:()=>l,v:()=>c});var e=a(8242),o=a(2996);const s=/[a-zA-Z0-9äöüÄÖÜß]/g,n=/^\d+$/;function l(t,i=1){return function(t){var i;return"string"==typeof t&&(null===(i=t.match(s))||void 0===i?void 0:i.length)||0}(t)>=i}function r(t){return n.test(t)}function d(t){var i;return{hooks:{afterPatch:(i,a,o,s)=>{var n,d;"function"==typeof(null===(n=t.hooks)||void 0===n?void 0:n.afterPatch)&&(null===(d=t.hooks)||void 0===d||d.afterPatch(i,a,o,s)),"string"==typeof i&&!1===l(i,3)&&!1===r(i)&&(0,e.a)(`The heading or label ("${i}") is not accessible. A label should consist of at least three readable characters.`),"string"==typeof i&&i.length>80&&(0,e.u)("A heading or label should not be longer than 80 characters.")},beforePatch:null===(i=t.hooks)||void 0===i?void 0:i.beforePatch}}}const h=new Set(["string"]),c=(t,i,a={})=>{(0,o.a)(t,"_label",(t=>"string"==typeof t),h,i,d(a))},_=new Set(["string","false"]),p=(t,i,a={})=>{""===i&&(i=!1),(0,o.a)(t,"_label",(t=>!1===t||"string"==typeof t),_,i,d(a))}},4045:(t,i,a)=>{a.d(i,{v:()=>n});var e=a(8242),o=a(2996);const s={hooks:{afterPatch:t=>{-1!==t&&0!==t&&(0,e.a)("Don’t Use Tabindex Greater than 0: https://adrianroselli.com/2014/11/dont-use-tabindex-greater-than-0.html")}}},n=(t,i)=>{(0,o.e)(t,"_tabIndex",i,s)}}}]);