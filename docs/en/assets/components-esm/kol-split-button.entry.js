/*! * KoliBri - The accessible HTML-Standard */ import{r as registerInstance,h,H as Host}from"./index-2c046ff1.js";import{w as watchTooltipAlignment}from"./button-link-2ad7f3cf.js";import{v as validateAriaCurrent,a as validateAriaSelected}from"./aria-selected-d90aa300.js";import{v as validateAriaExpanded,a as validateDisabled}from"./disabled-cac31f02.js";import{v as validateHideLabel}from"./hide-label-e9f288ac.js";import{v as validateLabel}from"./label-bd9566f6.js";import{g as a11yHintDisabled}from"./a11y.tipps-e607b8b3.js";import{w as watchString,b as watchBoolean,s as setState}from"./prop.validators-683bb1d0.js";import{v as validateTabIndex}from"./tab-index-6d37f269.js";import{a as watchButtonType,w as watchButtonVariant}from"./controller-d064cead.js";import"./dev.utils-8aef00f6.js";import"./reuse-c2156413.js";import"./index-37b5cbcf.js";const defaultStyleCss=":host{--a11y-min-size:44px;font-size:inherit}*{hyphens:auto;letter-spacing:inherit;word-break:break-word;word-spacing:inherit}[role='button'],button:not([role='link']),kol-input .input{min-height:var(--a11y-min-size);min-width:var(--a11y-min-size)}a,button,h1,h2,h3,h4,h5,h6,input,option,select,textarea{font-family:inherit;font-size:inherit}:is(a,button){background-color:transparent;border:none;margin:0;padding:0;width:100%;}:host{max-width:100%}*{box-sizing:border-box}kol-span-wc{display:grid;place-items:center}kol-span-wc>span{display:flex;place-items:center}a,button{cursor:pointer}button,input,option,select,textarea{font-family:inherit}.icon-only>kol-span-wc>span>span{display:none}:host{display:flex;position:relative}.main-button{flex-grow:1;text-align:left}.main-button kol-span-wc{place-items:start}.secondary-button button{height:100%}.horizontal-line{background-color:rgba(0, 0, 0, 0.2);border-radius:2px;height:70%;margin-block:auto;width:1px}.popover{height:0;left:0;min-width:100%;overflow:hidden;position:absolute;top:100%;transition:height 0.3s ease-in-out}.popover-content{inset:0 0 auto 0;min-width:100%;position:absolute}",KolSplitButton=class{constructor(t){registerInstance(this,t),this.clickHandler=t=>{"function"==typeof this.state._on.onClick?this.state._on.onClick(t):this.toggleDropdown()},this.openDropdown=()=>{this.dropdown&&this.dropdownContent&&(this.dropdown.style.height=`${this.dropdownContent.clientHeight}px`,this.state=Object.assign(Object.assign({},this.state),{_showDropdown:!0}))},this.closeDropdown=()=>{this.dropdown&&this.dropdownContent&&(this.dropdown.style.height="",this.state=Object.assign(Object.assign({},this.state),{_showDropdown:!1}))},this.toggleDropdown=t=>{("boolean"==typeof t?t:!this.state._showDropdown)?this.openDropdown():this.closeDropdown()},this.forceCounter=100,this.forceOpenDropdown=()=>{var t;this.forceCounter>0&&((null===(t=this.dropdownContent)||void 0===t?void 0:t.clientHeight)?this.openDropdown():setTimeout(this.forceOpenDropdown,10),this.forceCounter--)},this.catchDropdownElements=t=>{t&&(this.dropdown=t,setTimeout((()=>{this.dropdownContent=t.firstChild,this._showDropdown&&this.forceOpenDropdown()})))},this._accessKey=void 0,this._ariaControls=void 0,this._ariaCurrent=void 0,this._ariaExpanded=void 0,this._ariaLabel=void 0,this._ariaSelected=void 0,this._customClass=void 0,this._disabled=!1,this._hideLabel=!1,this._icon=void 0,this._iconOnly=void 0,this._label=void 0,this._on=void 0,this._role=void 0,this._showDropdown=!1,this._tabIndex=void 0,this._tooltipAlign="top",this._type="button",this._value=void 0,this._variant="normal",this.state={_icon:"",_label:"",_on:{},_showDropdown:!1}}render(){return h(Host,null,h("kol-button-wc",{class:{"main-button":!0,button:!0,[this._variant]:"custom"!==this._variant,[this._customClass]:"custom"===this._variant&&"string"==typeof this._customClass&&this._customClass.length>0},_accessKey:this._accessKey,_ariaControls:this._ariaControls,_ariaCurrent:this._ariaCurrent,_ariaExpanded:this._ariaExpanded,_ariaSelected:this._ariaSelected,_customClass:this._customClass,_disabled:this._disabled,_icon:this._icon,_hideLabel:this._hideLabel,_label:this._label,_on:{onClick:this.clickHandler},_role:this._role,_tabIndex:this._tabIndex,_tooltipAlign:this._tooltipAlign,_type:this._type,_value:this._value,_variant:this._variant}),h("div",{class:"horizontal-line"}),h("kol-button-wc",{class:"secondary-button",_disabled:this._disabled,_hideLabel:!0,_icon:"codicon codicon-triangle-down",_label:"dropdown "+(this.state._showDropdown?"schließen":"öffnen"),_on:{onClick:()=>this.toggleDropdown()}}),h("div",{class:"popover",ref:this.catchDropdownElements},h("div",{class:"popover-content"},h("slot",null))))}validateAccessKey(t){watchString(this,"_accessKey",t)}validateAriaControls(t){watchString(this,"_ariaControls",t)}validateAriaCurrent(t){validateAriaCurrent(this,t)}validateAriaExpanded(t){validateAriaExpanded(this,t)}validateAriaLabel(t){this.validateLabel(t)}validateAriaSelected(t){validateAriaSelected(this,t)}validateCustomClass(t){watchString(this,"_customClass",t,{defaultValue:void 0})}validateDisabled(t){validateDisabled(this,t),t&&a11yHintDisabled()}validateHideLabel(t){validateHideLabel(this,t)}validateIcon(t){watchString(this,"_icon",t)}validateIconOnly(t){this.validateHideLabel(t)}validateLabel(t){validateLabel(this,t)}validateOn(t){"object"==typeof t&&null!==t&&(this.state=Object.assign(Object.assign({},this.state),{_on:t}))}validateRole(t){watchString(this,"_role",t)}validateShowDropdown(t){watchBoolean(this,"_showDropdown",t),this.toggleDropdown(t)}validateTabIndex(t){validateTabIndex(this,t)}validateTooltipAlign(t){watchTooltipAlignment(this,"_tooltipAlign",t)}validateType(t){watchButtonType(this,"_type",t)}validateValue(t){setState(this,"_value",t)}validateVariant(t){watchButtonVariant(this,"_variant",t)}componentWillLoad(){this.validateAccessKey(this._accessKey),this.validateAriaControls(this._ariaControls),this.validateAriaCurrent(this._ariaCurrent),this.validateAriaExpanded(this._ariaExpanded),this.validateAriaSelected(this._ariaSelected),this.validateCustomClass(this._customClass),this.validateDisabled(this._disabled),this.validateHideLabel(this._hideLabel||this._iconOnly),this.validateIcon(this._icon),this.validateLabel(this._label||this._ariaLabel),this.validateOn(this._on),this.validateRole(this._role),this.validateShowDropdown(this._showDropdown),this.validateTabIndex(this._tabIndex),this.validateTooltipAlign(this._tooltipAlign),this.validateType(this._type),this.validateValue(this._value),this.validateVariant(this._variant)}static get watchers(){return{_accessKey:["validateAccessKey"],_ariaControls:["validateAriaControls"],_ariaCurrent:["validateAriaCurrent"],_ariaExpanded:["validateAriaExpanded"],_ariaLabel:["validateAriaLabel"],_ariaSelected:["validateAriaSelected"],_customClass:["validateCustomClass"],_disabled:["validateDisabled"],_hideLabel:["validateHideLabel"],_icon:["validateIcon"],_iconOnly:["validateIconOnly"],_label:["validateLabel"],_on:["validateOn"],_role:["validateRole"],_showDropdown:["validateShowDropdown"],_tabIndex:["validateTabIndex"],_tooltipAlign:["validateTooltipAlign"],_type:["validateType"],_value:["validateValue"],_variant:["validateVariant"]}}};KolSplitButton.style={default:defaultStyleCss};export{KolSplitButton as kol_split_button};