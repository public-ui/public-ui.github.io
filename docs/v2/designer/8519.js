/*! For license information please see 8519.js.LICENSE.txt */
"use strict";(self.webpackChunk_public_ui_designer=self.webpackChunk_public_ui_designer||[]).push([[8519],{18519:(n,t,e)=>{e.r(t),e.d(t,{kol_split_button:()=>o});var i=e(16120);const o=class{constructor(n){(0,i.r)(this,n),this.clickButtonHandler={onClick:n=>{var t,e;"function"==typeof(null===(t=this._on)||void 0===t?void 0:t.onClick)?null===(e=this._on)||void 0===e||e.onClick(n,this._value):this.toggleDropdown()}},this.clickToggleHandler={onClick:()=>this.toggleDropdown()},this.openDropdown=()=>{this.dropdown&&this.dropdownContent&&(this.dropdown.style.height=`${this.dropdownContent.clientHeight}px`,this.state=Object.assign(Object.assign({},this.state),{_show:!0}))},this.closeDropdown=()=>{this.dropdown&&this.dropdownContent&&(this.dropdown.style.height="",this.state=Object.assign(Object.assign({},this.state),{_show:!1}))},this.toggleDropdown=n=>{("boolean"==typeof n?n:!this.state._show)?this.openDropdown():this.closeDropdown()},this.catchDropdownElements=n=>{n&&(this.dropdown=n,setTimeout((()=>{this.dropdownContent=n.firstChild})))},this._ariaControls=void 0,this._ariaExpanded=void 0,this._ariaSelected=void 0,this._customClass=void 0,this._disabled=!1,this._hideLabel=!1,this._icons=void 0,this._id=void 0,this._label=void 0,this._name=void 0,this._on=void 0,this._role=void 0,this._syncValueBySelector=void 0,this._tabIndex=void 0,this._tooltipAlign="top",this._type="button",this._value=void 0,this._variant="normal",this.state={_show:!1}}render(){return(0,i.h)(i.H,{key:"8efae0a334245989606a89adc6271ade6c7528df",class:"kol-split-button"},(0,i.h)("kol-button-wc",{key:"8e297ae5cf884f34d7f000ff6e170e18a5475731",class:{"main-button":!0,button:!0,[this._variant]:"custom"!==this._variant,[this._customClass]:"custom"===this._variant&&"string"==typeof this._customClass&&this._customClass.length>0},_ariaControls:this._ariaControls,_ariaExpanded:this._ariaExpanded,_ariaSelected:this._ariaSelected,_customClass:this._customClass,_disabled:this._disabled,_icons:this._icons,_hideLabel:this._hideLabel,_label:this._label,_name:this._name,_on:this.clickButtonHandler,_role:this._role,_syncValueBySelector:this._syncValueBySelector,_tabIndex:this._tabIndex,_tooltipAlign:this._tooltipAlign,_type:this._type,_value:this._value,_variant:this._variant}),(0,i.h)("div",{key:"c62d2cab7915ee26a186d2d5b5933764622ca349",class:"horizontal-line"}),(0,i.h)("kol-button-wc",{key:"4cd810ea86e19157a0fefef280e4ce10da8691cc",class:"secondary-button",_disabled:this._disabled,_hideLabel:!0,_icons:"codicon codicon-triangle-down",_label:"dropdown "+(this.state._show?"schließen":"öffnen"),_on:this.clickToggleHandler}),(0,i.h)("div",{key:"5ae91ba61bee6d8eedd71b8d083622f10e6ebde1",class:"popover",ref:this.catchDropdownElements},(0,i.h)("div",{key:"6837f0023c05616b20c8b1d2ed2ec541671d39be",class:"popover-content"},(0,i.h)("slot",{key:"b1ef68bec39d39d59e8ac8dc10ec41ef3a6dcaab"}))))}};o.style={default:"/*\n * This file contains all rules for accessibility.\n */\n@layer kol-global {\n  :host {\n    /*\n     * Minimum size of interactive elements.\n     */\n    --a11y-min-size: 44px;\n    /*\n     * No element should be used without a background and font color whose contrast ratio has\n     * not been checked. By initially setting the background color to white and the font color\n     * to black, the contrast ratio is ensured and explicit adjustment is forced.\n     */\n    background-color: white;\n    color: black;\n    /*\n     * Verdana is an accessible font that can be used without requiring additional loading time.\n     */\n    font-family: Verdana;\n  }\n  * {\n    /*\n     * This rule enables the word dividing for all texts. That is important for high zoom levels.\n     */\n    hyphens: auto;\n    /*\n     * Letter spacing is required for all texts.\n     */\n    letter-spacing: inherit;\n    /*\n     * This rule enables the word dividing for all texts. That is important for high zoom levels.\n     */\n    word-break: break-word;\n    /*\n     * Word spacing is required for all texts.\n     */\n    word-spacing: inherit;\n  }\n  /*\n   * All interactive elements should have a minimum size of 44px.\n   */\n  /* input:not([type='checkbox'], [type='radio'], [type='range']), */\n  /* option, */\n  /* select, */\n  /* textarea, */\n  [role=button],\n  button:not([role=link]),\n  .kol-input .input {\n    min-height: var(--a11y-min-size);\n    min-width: var(--a11y-min-size);\n  }\n  /*\n   * Some interactive elements should not inherit the font-family and font-size.\n   */\n  a,\n  button,\n  h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6,\n  input,\n  option,\n  select,\n  textarea {\n    /*\n     * All elements should inherit the font family from his parent element.\n     */\n    font-family: inherit;\n    /*\n     * All elements should inherit the font size from his parent element.\n     */\n    font-size: inherit;\n  }\n}\n/**\n * Sometimes we need the semantic element for accessibility reasons,\n * but we don't want to show it.\n *\n * - https://www.a11yproject.com/posts/how-to-hide-content/\n */\n.visually-hidden {\n  clip: rect(0 0 0 0);\n  clip-path: inset(50%);\n  height: 1px;\n  overflow: hidden;\n  position: absolute;\n  white-space: nowrap;\n  width: 1px;\n}\n\n@layer kol-global {\n  /*\n   * Dieses CSS stellt sicher, dass der Standard-Style\n   * von A und Button resettet werden.\n   */\n  :is(a, button) {\n    background-color: transparent;\n    border: none;\n    margin: 0;\n    padding: 0;\n    width: 100%; /* 100% needed for custom width from outside */\n  }\n  /*\n   * Ensure elements with hidden attribute to be actually not visible\n   * @see https://meowni.ca/hidden.is.a.lie.html\n   */\n  [hidden] {\n    display: none !important;\n  }\n}\n@layer kol-global {\n  :host {\n    /*\n     * The max-width is needed to prevent the table from overflowing the\n     * parent node, if the table is wider than the parent node.\n     */\n    max-width: 100%;\n  }\n  * {\n    /*\n     * We prefer to box-sizing: border-box for all elements.\n     */\n    box-sizing: border-box;\n  }\n  /* KolSpan is a layout component with icons in all directions and a label text in the middle. */\n  .kol-span-wc {\n    display: grid;\n    place-items: center;\n  }\n  /* The sub span in KolSpan is the horizontal span with icon left and right and the label text in the middle. */\n  .kol-span-wc > span {\n    display: flex;\n    place-items: center;\n  }\n  a,\n  button {\n    cursor: pointer;\n  }\n  .hidden {\n    display: none;\n    visibility: hidden;\n  }\n  /* This is the text label. */\n  .hide-label > .kol-span-wc > span > span {\n    display: none;\n  }\n  /* Reset browser agent style. */\n  button:disabled {\n    color: unset;\n  }\n  .disabled label,\n  .disabled:focus-within label,\n  [aria-disabled=true],\n  [aria-disabled=true]:focus,\n  [disabled],\n  [disabled]:focus {\n    cursor: not-allowed !important;\n    opacity: 0.5 !important;\n    outline: none !important;\n  }\n  [aria-disabled=true]:focus .kol-span-wc,\n  [disabled]:focus .kol-span-wc {\n    outline: none !important;\n  }\n}\n@layer kol-component {\n  :host {\n    display: flex;\n    position: relative;\n  }\n  .main-button {\n    flex-grow: 1;\n    text-align: left;\n  }\n  .main-button .kol-span-wc {\n    place-items: start;\n  }\n  .secondary-button button {\n    height: 100%;\n  }\n  .horizontal-line {\n    background-color: rgba(0, 0, 0, 0.2);\n    border-radius: 2px;\n    height: 70%;\n    margin-block: auto;\n    width: 1px;\n  }\n  /* popover */\n  .popover {\n    height: 0;\n    left: 0;\n    min-width: 100%;\n    overflow: hidden;\n    position: absolute;\n    top: 100%;\n    transition: height 0.3s ease-in-out;\n  }\n  .popover-content {\n    inset: 0 0 auto 0;\n    min-width: 100%;\n    position: absolute;\n  }\n}"}}}]);