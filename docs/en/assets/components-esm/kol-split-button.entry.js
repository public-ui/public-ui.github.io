/*! * KoliBri - The accessible HTML-Standard */ import{r as registerInstance,h,H as Host}from"./index-5ab2ea42.js";import{a as watchBoolean}from"./prop.validators-f76b82ff.js";import"./a11y.tipps-d11c3322.js";import"./dev.utils-38b5f4df.js";import"./reuse-c2156413.js";import"./index-37b5cbcf.js";const defaultStyleCss=":host{--a11y-min-size:44px;font-size:inherit}*{hyphens:auto;letter-spacing:inherit;word-break:break-word;word-spacing:inherit}[role='button'],button:not([role='link']),kol-input .input{min-height:var(--a11y-min-size);min-width:var(--a11y-min-size)}a,button,h1,h2,h3,h4,h5,h6,input,option,select,textarea{font-family:inherit;font-size:inherit}:is(a,button){background-color:transparent;border:none;margin:0;padding:0;width:100%;}:host{max-width:100%}*{box-sizing:border-box}kol-span-wc{display:grid;place-items:center}kol-span-wc>span{display:flex;place-items:center}a,button{cursor:pointer}button,input,option,select,textarea{font-family:inherit}.icon-only>kol-span-wc>span>span{display:none}:host{display:flex;position:relative}.main-button{flex-grow:1;text-align:left}.main-button kol-span-wc{place-items:start}.secondary-button button{height:100%}.horizontal-line{background-color:rgba(0, 0, 0, 0.2);border-radius:2px;height:70%;margin-block:auto;width:1px}.popover{height:0;left:0;min-width:100%;overflow:hidden;position:absolute;top:100%;transition:height 0.3s ease-in-out}.popover-content{inset:0 0 auto 0;min-width:100%;position:absolute}",KolSplitButton=class{constructor(t){registerInstance(this,t),this.clickButtonHandler={onClick:t=>{var o,i;"function"==typeof(null===(o=this._on)||void 0===o?void 0:o.onClick)?null===(i=this._on)||void 0===i||i.onClick(t,this._value):this.toggleDropdown()}},this.clickToggleHandler={onClick:()=>this.toggleDropdown()},this.openDropdown=()=>{this.dropdown&&this.dropdownContent&&(this.dropdown.style.height=`${this.dropdownContent.clientHeight}px`,this.state=Object.assign(Object.assign({},this.state),{_showDropdown:!0}))},this.closeDropdown=()=>{this.dropdown&&this.dropdownContent&&(this.dropdown.style.height="",this.state=Object.assign(Object.assign({},this.state),{_showDropdown:!1}))},this.toggleDropdown=t=>{("boolean"==typeof t?t:!this.state._showDropdown)?this.openDropdown():this.closeDropdown()},this.forceCounter=100,this.forceOpenDropdown=()=>{var t;this.forceCounter>0&&((null===(t=this.dropdownContent)||void 0===t?void 0:t.clientHeight)?this.openDropdown():setTimeout(this.forceOpenDropdown,10),this.forceCounter--)},this.catchDropdownElements=t=>{t&&(this.dropdown=t,setTimeout((()=>{this.dropdownContent=t.firstChild,this._showDropdown&&this.forceOpenDropdown()})))},this._accessKey=void 0,this._ariaControls=void 0,this._ariaExpanded=void 0,this._ariaLabel=void 0,this._ariaSelected=void 0,this._customClass=void 0,this._disabled=!1,this._hideLabel=!1,this._icon=void 0,this._id=void 0,this._label=void 0,this._name=void 0,this._on=void 0,this._role=void 0,this._syncValueBySelector=void 0,this._showDropdown=!1,this._tabIndex=void 0,this._tooltipAlign="top",this._type="button",this._value=void 0,this._variant="normal",this.state={_showDropdown:!1}}render(){return h(Host,null,h("kol-button-wc",{class:{"main-button":!0,button:!0,[this._variant]:"custom"!==this._variant,[this._customClass]:"custom"===this._variant&&"string"==typeof this._customClass&&this._customClass.length>0},_accessKey:this._accessKey,_ariaControls:this._ariaControls,_ariaExpanded:this._ariaExpanded,_ariaSelected:this._ariaSelected,_customClass:this._customClass,_disabled:this._disabled,_icon:this._icon,_hideLabel:this._hideLabel,_label:this._label,_name:this._name,_on:this.clickButtonHandler,_role:this._role,_syncValueBySelector:this._syncValueBySelector,_tabIndex:this._tabIndex,_tooltipAlign:this._tooltipAlign,_type:this._type,_value:this._value,_variant:this._variant}),h("div",{class:"horizontal-line"}),h("kol-button-wc",{class:"secondary-button",_disabled:this._disabled,_hideLabel:!0,_icon:"codicon codicon-triangle-down",_label:"dropdown "+(this.state._showDropdown?"schließen":"öffnen"),_on:this.clickToggleHandler}),h("div",{class:"popover",ref:this.catchDropdownElements},h("div",{class:"popover-content"},h("slot",null))))}validateShowDropdown(t){watchBoolean(this,"_showDropdown",t),this.toggleDropdown(t)}componentWillLoad(){this.validateShowDropdown(this._showDropdown)}static get watchers(){return{_showDropdown:["validateShowDropdown"]}}};KolSplitButton.style={default:defaultStyleCss};export{KolSplitButton as kol_split_button};