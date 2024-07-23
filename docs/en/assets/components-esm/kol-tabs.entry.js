/*! For license information please see kol-tabs.entry.js.LICENSE.txt */
import{r as registerInstance,h,H as Host,g as getElement}from"./index-b5e5a1b4.js";import{t as translate}from"./i18n-2cbb513e.js";import{c as KolButtonWcTag,i as KolButtonGroupWcTag}from"./component-names-068dc2ae.js";import{j as devHint,f as featureHint,s as setState,k as watchNumber,g as watchJsonArrayString,h as uiUxHintMillerscheZahl,v as koliBriQuerySelector}from"./prop.validators-db70e3c4.js";import{a as validateAlign}from"./align-6c0a2935.js";import{v as validateLabel}from"./label-20475610.js";import{L as Log}from"./dev.utils-1ca991a2.js";import"./i18n-66b52d13.js";import"./reuse-108ee8f5.js";import"./index-db4aa6e4.js";const defaultStyleCss="/*\n * This file contains all rules for accessibility.\n */\n@layer kol-global {\n  :host {\n    /*\n     * Minimum size of interactive elements.\n     */\n    --a11y-min-size: 44px;\n    /*\n     * No element should be used without a background and font color whose contrast ratio has\n     * not been checked. By initially setting the background color to white and the font color\n     * to black, the contrast ratio is ensured and explicit adjustment is forced.\n     */\n    background-color: white;\n    color: black;\n    /*\n     * Verdana is an accessible font that can be used without requiring additional loading time.\n     */\n    font-family: Verdana;\n  }\n  * {\n    /*\n     * This rule enables the word dividing for all texts. That is important for high zoom levels.\n     */\n    hyphens: auto;\n    /*\n     * Letter spacing is required for all texts.\n     */\n    letter-spacing: inherit;\n    /*\n     * This rule enables the word dividing for all texts. That is important for high zoom levels.\n     */\n    word-break: break-word;\n    /*\n     * Word spacing is required for all texts.\n     */\n    word-spacing: inherit;\n  }\n  /*\n   * All interactive elements should have a minimum size of 44px.\n   */\n  /* input:not([type='checkbox'], [type='radio'], [type='range']), */\n  /* option, */\n  /* select, */\n  /* textarea, */\n  [role=button],\n  button:not([role=link]),\n  .kol-input .input {\n    min-height: var(--a11y-min-size);\n    min-width: var(--a11y-min-size);\n  }\n  /*\n   * Some interactive elements should not inherit the font-family and font-size.\n   */\n  a,\n  button,\n  h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6,\n  input,\n  option,\n  select,\n  textarea {\n    /*\n     * All elements should inherit the font family from his parent element.\n     */\n    font-family: inherit;\n    /*\n     * All elements should inherit the font size from his parent element.\n     */\n    font-size: inherit;\n  }\n}\n/**\n * Sometimes we need the semantic element for accessibility reasons,\n * but we don't want to show it.\n *\n * - https://www.a11yproject.com/posts/how-to-hide-content/\n */\n.visually-hidden {\n  clip: rect(0 0 0 0);\n  clip-path: inset(50%);\n  height: 1px;\n  overflow: hidden;\n  position: absolute;\n  white-space: nowrap;\n  width: 1px;\n}\n\n@layer kol-global {\n  /*\n   * Dieses CSS stellt sicher, dass der Standard-Style\n   * von A und Button resettet werden.\n   */\n  :is(a, button) {\n    background-color: transparent;\n    border: none;\n    margin: 0;\n    padding: 0;\n    width: 100%; /* 100% needed for custom width from outside */\n  }\n  /*\n   * Ensure elements with hidden attribute to be actually not visible\n   * @see https://meowni.ca/hidden.is.a.lie.html\n   */\n  [hidden] {\n    display: none !important;\n  }\n}\n@layer kol-global {\n  :host {\n    /*\n     * The max-width is needed to prevent the table from overflowing the\n     * parent node, if the table is wider than the parent node.\n     */\n    max-width: 100%;\n  }\n  * {\n    /*\n     * We prefer to box-sizing: border-box for all elements.\n     */\n    box-sizing: border-box;\n  }\n  /* KolSpan is a layout component with icons in all directions and a label text in the middle. */\n  .kol-span-wc {\n    display: grid;\n    place-items: center;\n  }\n  /* The sub span in KolSpan is the horizontal span with icon left and right and the label text in the middle. */\n  .kol-span-wc > span {\n    display: flex;\n    place-items: center;\n  }\n  a,\n  button {\n    cursor: pointer;\n  }\n  /* This is the text label. */\n  .hide-label > .kol-span-wc > span > span {\n    display: none;\n  }\n  /* Reset browser agent style. */\n  button:disabled {\n    color: unset;\n  }\n  .disabled label,\n  .disabled:focus-within label,\n  [aria-disabled=true],\n  [aria-disabled=true]:focus,\n  [disabled],\n  [disabled]:focus {\n    cursor: not-allowed;\n    opacity: 0.5;\n    outline: none;\n  }\n  [aria-disabled=true]:focus .kol-span-wc,\n  [disabled]:focus .kol-span-wc {\n    outline: none !important;\n  }\n}\n@layer kol-component {\n  :host {\n    display: block;\n  }\n}\n@layer kol-component {\n  :host {\n    font-size: calc(16rem / var(--kolibri-root-font-size, 16));\n  }\n  .kol-button-group-wc {\n    display: inline-flex;\n    flex-wrap: wrap;\n  }\n  .kol-button-group-wc button {\n    border-bottom-color: transparent;\n    border-bottom-style: solid;\n    display: block;\n  }\n  div.grid,\n  div[role=tabpanel] {\n    height: 100%;\n  }\n  :host > .tabs-align-right {\n    display: grid;\n    grid-template-columns: 1fr auto;\n  }\n  :host > .tabs-align-right .kol-button-group-wc {\n    display: grid;\n    order: 2;\n  }\n  :host > .tabs-align-left {\n    display: grid;\n    grid-template-columns: auto 1fr;\n  }\n  :host > .tabs-align-left .kol-button-group-wc {\n    display: grid;\n    order: 0;\n  }\n  :host > .tabs-align-bottom {\n    display: grid;\n    grid-template-rows: 1fr auto;\n  }\n  :host > .tabs-align-bottom .kol-button-group-wc {\n    order: 2;\n  }\n  :host > .tabs-align-bottom .kol-button-group-wc > div {\n    display: flex;\n  }\n  :host > .tabs-align-bottom > .kol-button-group-wc > div > div:first-child {\n    margin: 0 1em 0 0;\n  }\n  :host > .tabs-align-bottom > .kol-button-group-wc > div > div {\n    margin: 0 1em;\n  }\n  :host > .tabs-align-top {\n    display: grid;\n    grid-template-rows: auto 1fr;\n  }\n  :host > .tabs-align-top .kol-button-group-wc {\n    order: 0;\n  }\n  :host > .tabs-align-top .kol-button-group-wc > div {\n    display: flex;\n  }\n  :host > .tabs-align-top > .kol-button-group-wc > div > div:first-child {\n    margin: 0 1em 0 0;\n  }\n  :host > .tabs-align-top > .kol-button-group-wc > div > div {\n    margin: 0 1em;\n  }\n  :host > div {\n    display: grid;\n  }\n  :host > .tabs-align-left .kol-button-group-wc,\n  :host > .tabs-align-top .kol-button-group-wc {\n    order: 0;\n  }\n  :host > .tabs-align-bottom .kol-button-group-wc,\n  :host > .tabs-align-right .kol-button-group-wc {\n    order: 1;\n  }\n  :host > div.tabs-align-left .kol-button-group-wc > div,\n  :host > div.tabs-align-left .kol-button-group-wc > div > div,\n  :host > div.tabs-align-right .kol-button-group-wc > div,\n  :host > div.tabs-align-right .kol-button-group-wc > div > div {\n    display: grid;\n  }\n  :host > div.tabs-align-left .kol-button-group-wc > div > div .kol-button-wc,\n  :host > div.tabs-align-right .kol-button-group-wc > div > div .kol-button-wc {\n    width: 100%;\n  }\n  :host > div.tabs-align-bottom .kol-button-group-wc div,\n  :host > div.tabs-align-top .kol-button-group-wc div {\n    display: flex;\n    flex-wrap: wrap;\n  }\n}",KolTabsDefaultStyle0=defaultStyleCss,KolTabs=class{constructor(t){registerInstance(this,t),this.onCreateLabel=`${translate("kol-new")} \u2026`,this.showCreateTab=!1,this.nextPossibleTabIndex=(t,e,n)=>{if(n>0){if(e+n<t.length)return t[e+n]._disabled?this.nextPossibleTabIndex(t,e,n+1):e+n}else if(n<0&&e+n>=0)return t[e+n]._disabled?this.nextPossibleTabIndex(t,e,n-1):e+n;return e},this.onKeyDown=t=>{var e,n;let a=null;switch(t.key){case"ArrowRight":a=this.nextPossibleTabIndex(this.state._tabs,this.state._selected,1);break;case"ArrowLeft":a=this.nextPossibleTabIndex(this.state._tabs,this.state._selected,-1)}if(null!==a){const o=this.state._tabs[a];(null===(e=o._on)||void 0===e?void 0:e.onSelect)&&(null===(n=o._on)||void 0===n||n.onSelect(t,a)),this.onSelect(t,a)}},this.onClickSelect=(t,e)=>{var n,a;const o=this.state._tabs[e];(null===(n=o._on)||void 0===n?void 0:n.onSelect)&&(null===(a=o._on)||void 0===a||a.onSelect(t,e)),this.onSelect(t,e)},this.onMouseDown=t=>{t.preventDefault(),t.stopPropagation()},this.callbacks={onClick:this.onClickSelect,onMouseDown:this.onMouseDown},this.catchTabPanelHost=t=>{this.tabPanelHost=t},this.selectNextNotDisabledTab=(t,e,n=!0,a)=>{if(t>e.length-1&&(t=e.length-1),t<0&&(t=0),Array.isArray(e)&&e[t]&&e[t]._disabled){if(!0===n){if(t<e.length-1)return this.selectNextNotDisabledTab(t+1,e,!0,a||t);t=a||t,n=!1}if(!1===n){if(t>0)return this.selectNextNotDisabledTab(t-1,e,!1,a||t);devHint("[KolTabs] All tabs are disabled, and therefore no tab can be displayed.")}}return t},this.syncSelectedAndTabs=(t,e,n,a)=>{let o,i;o="_selected"===a?t:this.state._selected,i="_tabs"===a?t:this.state._tabs,i.length>0&&e.set("_selected",this.selectNextNotDisabledTab(o,i))},this.handleTabPanels=()=>{var t,e,n;if(this.tabPanelHost instanceof HTMLDivElement)for(let a=this.tabPanelHost.children.length;a<this.state._tabs.length;a++){const o=document.createElement("div");o.setAttribute("aria-labelledby",`${this.state._label.replace(/\s/g,"-")}-tab-${a}`),o.setAttribute("id",`tabpanel-${a}`),o.setAttribute("role","tabpanel"),o.setAttribute("hidden","");const i=document.createElement("slot");i.setAttribute("name",`tabpanel-slot-${a}`),o.appendChild(i),this.tabPanelHost.appendChild(o),(null===(t=this.host)||void 0===t?void 0:t.children)instanceof HTMLCollection&&(null===(e=this.host)||void 0===e?void 0:e.children[a])&&(null===(n=this.host)||void 0===n||n.children[a].setAttribute("slot",`tabpanel-slot-${a}`))}},this.onCreate=t=>{var e,n;t.preventDefault(),t.stopPropagation(),"function"==typeof(null===(e=this.state._on)||void 0===e?void 0:e.onCreate)&&(null===(n=this.state._on)||void 0===n||n.onCreate(t))},this._align="top",this._label=void 0,this._on=void 0,this._selected=0,this._tabs=void 0,this.state={_align:"top",_label:"",_selected:0,_tabs:[]}}renderButtonGroup(){return h(KolButtonGroupWcTag,{class:"tabs-button-group",role:"tablist","aria-label":this.state._label,onKeyDown:this.onKeyDown},this.state._tabs.map(((t,e)=>h(KolButtonWcTag,{_disabled:t._disabled,_icons:t._icons,_hideLabel:t._hideLabel,_label:t._label,_on:this.callbacks,_tabIndex:this.state._selected===e?0:-1,_tooltipAlign:t._tooltipAlign,_variant:this.state._selected===e?"custom":void 0,_customClass:this.state._selected===e?"selected":void 0,_ariaControls:`tabpanel-${e}`,_ariaSelected:this.state._selected===e,_id:`${this.state._label.replace(/\s/g,"-")}-tab-${e}`,_role:"tab",_value:e}))),this.showCreateTab&&h(KolButtonWcTag,{class:"create-button",_label:this.onCreateLabel,_on:{onClick:this.onCreate}}))}render(){return h(Host,{key:"1092ece9e1623621dcd253ff8d32eb1470471993",class:"kol-tabs"},h("div",{key:"42c75328542b14057998aaa615c692e15870e5ce",ref:t=>{this.tabPanelsElement=t},class:{[`tabs-align-${this.state._align}`]:!0}},this.renderButtonGroup(),h("div",{key:"89eb64ffefa3234cb2ba93532a775cc2e1cf0968",class:"tabs-content",ref:this.catchTabPanelHost})))}validateAlign(t){validateAlign(this,t)}validateLabel(t){validateLabel(this,t,{required:!0})}validateOn(t){if("object"==typeof t&&null!==t){featureHint("[KolTabs] Pr\xfcfen, wie man auch einen EventCallback einzeln \xe4ndern kann.");const e={};"function"!=typeof t.onCreate&&"object"!=typeof t.onCreate||("object"==typeof t.onCreate?("string"==typeof t.onCreate.label&&t.onCreate.label.length>0?this.onCreateLabel=t.onCreate.label:Log.debug("[KolTabs] The label text for New in {\n  onCreate: {\n    label: string (!),\n    callback: Function\n  }\n} is not set correctly."),"function"==typeof t.onCreate.callback?e.onCreate=t.onCreate.callback:Log.debug("[KolTabs] The onCreate callback function for New in {\n  onCreate: {\n    label: string,\n    callback: Function (!)\n  }\n} is not set correctly.")):e.onCreate=t.onCreate,this.showCreateTab="function"==typeof e.onCreate),"function"==typeof t.onSelect&&(e.onSelect=t.onSelect),setState(this,"_on",e)}}validateSelected(t){watchNumber(this,"_selected",t,{hooks:{beforePatch:this.syncSelectedAndTabs}})}validateTabs(t){watchJsonArrayString(this,"_tabs",(t=>"object"==typeof t&&null!==t&&"string"==typeof t._label&&t._label.length>0),t,void 0,{hooks:{beforePatch:this.syncSelectedAndTabs}}),uiUxHintMillerscheZahl("KolTabs",this.state._tabs.length)}componentWillLoad(){this.validateAlign(this._align),this.validateLabel(this._label),this.validateOn(this._on),this.validateSelected(this._selected),this.validateTabs(this._tabs)}componentDidRender(){if(this.handleTabPanels(),this.tabPanelHost instanceof HTMLDivElement)for(let t=0;t<this.tabPanelHost.children.length;t++)t!==this.state._selected?this.tabPanelHost.children[t].setAttribute("hidden",""):this.tabPanelHost.children[t].removeAttribute("hidden")}onSelect(t,e){var n,a;if(this._selected=e,"function"==typeof(null===(n=this._on)||void 0===n?void 0:n.onSelect)&&(null===(a=this._on)||void 0===a||a.onSelect(t,e)),this.tabPanelsElement){const t=koliBriQuerySelector(`button#${this.state._label.replace(/\s/g,"-")}-tab-${e}`,this.tabPanelsElement);null==t||t.focus()}}get host(){return getElement(this)}static get watchers(){return{_align:["validateAlign"],_label:["validateLabel"],_on:["validateOn"],_selected:["validateSelected"],_tabs:["validateTabs"]}}};KolTabs.style={default:KolTabsDefaultStyle0};export{KolTabs as kol_tabs};