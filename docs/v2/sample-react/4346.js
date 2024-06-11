/*! For license information please see 4346.js.LICENSE.txt */
"use strict";(self.webpackChunk_public_ui_sample_react=self.webpackChunk_public_ui_sample_react||[]).push([[4346],{7223:(t,e,n)=>{n.d(e,{a:()=>l,v:()=>a});var o=n(121);const a=(t,e,n)=>{(0,o.w)(t,e,(t=>"string"==typeof t&&i.includes(t)),new Set(i),n,{defaultValue:"top"})},i=["left","right","top","bottom"],l=(t,e)=>{a(t,"_align",e)}},8426:(t,e,n)=>{n.d(e,{t:()=>i});var o=n(7394),a=n(2466);let i=(t,e)=>{var n;return(null!==(n=(0,o.g)())&&void 0!==n?n:(0,o.i)("de")).translate(t,e)};"test"===a.p&&(i=t=>t)},4346:(t,e,n)=>{n.r(e),n.d(e,{kol_tabs:()=>h});var o=n(3685),a=n(8426),i=n(1301),l=n(7223),s=n(121),r=n(9921),d=n(881);const h=class{constructor(t){(0,o.r)(this,t),this.onCreateLabel=`${(0,a.t)("kol-new")} …`,this.showCreateTab=!1,this.nextPossibleTabIndex=(t,e,n)=>{if(n>0){if(e+n<t.length)return t[e+n]._disabled?this.nextPossibleTabIndex(t,e,n+1):e+n}else if(n<0&&e+n>=0)return t[e+n]._disabled?this.nextPossibleTabIndex(t,e,n-1):e+n;return e},this.onKeyDown=t=>{var e,n;let o=null;switch(t.key){case"ArrowRight":o=this.nextPossibleTabIndex(this.state._tabs,this.state._selected,1);break;case"ArrowLeft":o=this.nextPossibleTabIndex(this.state._tabs,this.state._selected,-1)}if(null!==o){const a=this.state._tabs[o];(null===(e=a._on)||void 0===e?void 0:e.onSelect)&&(null===(n=a._on)||void 0===n||n.onSelect(t,o)),this.onSelect(t,o)}},this.onClickSelect=(t,e)=>{var n,o;const a=this.state._tabs[e];(null===(n=a._on)||void 0===n?void 0:n.onSelect)&&(null===(o=a._on)||void 0===o||o.onSelect(t,e)),this.onSelect(t,e)},this.onMouseDown=t=>{t.preventDefault(),t.stopPropagation()},this.callbacks={onClick:this.onClickSelect,onMouseDown:this.onMouseDown},this.catchTabPanelHost=t=>{this.tabPanelHost=t},this.selectNextNotDisabledTab=(t,e,n=!0,o)=>{if(t>e.length-1&&(t=e.length-1),t<0&&(t=0),Array.isArray(e)&&e[t]&&e[t]._disabled){if(!0===n){if(t<e.length-1)return this.selectNextNotDisabledTab(t+1,e,!0,o||t);t=o||t,n=!1}if(!1===n){if(t>0)return this.selectNextNotDisabledTab(t-1,e,!1,o||t);(0,s.j)("[KolTabs] Alle Tabs sind deaktiviert und somit kann kein Tab angezeigt werden.")}}return t},this.syncSelectedAndTabs=(t,e,n,o)=>{let a,i;a="_selected"===o?t:this.state._selected,i="_tabs"===o?t:this.state._tabs,i.length>0&&e.set("_selected",this.selectNextNotDisabledTab(a,i))},this.handleTabPanels=()=>{var t,e,n;if(this.tabPanelHost instanceof HTMLDivElement)for(let o=this.tabPanelHost.children.length;o<this.state._tabs.length;o++){const a=document.createElement("div");a.setAttribute("aria-labelledby",`${this.state._label.replace(/\s/g,"-")}-tab-${o}`),a.setAttribute("id",`tabpanel-${o}`),a.setAttribute("role","tabpanel"),a.setAttribute("hidden","");const i=document.createElement("slot");i.setAttribute("name",`tabpanel-slot-${o}`),a.appendChild(i),this.tabPanelHost.appendChild(a),(null===(t=this.host)||void 0===t?void 0:t.children)instanceof HTMLCollection&&(null===(e=this.host)||void 0===e?void 0:e.children[o])&&(null===(n=this.host)||void 0===n||n.children[o].setAttribute("slot",`tabpanel-slot-${o}`))}},this.onCreate=t=>{var e,n;t.preventDefault(),t.stopPropagation(),"function"==typeof(null===(e=this.state._on)||void 0===e?void 0:e.onCreate)&&(null===(n=this.state._on)||void 0===n||n.onCreate(t))},this._align="top",this._label=void 0,this._on=void 0,this._selected=0,this._tabs=void 0,this.state={_align:"top",_label:"",_selected:0,_tabs:[]}}renderButtonGroup(){return(0,o.h)(i.i,{class:"tabs-button-group",role:"tablist","aria-label":this.state._label,onKeyDown:this.onKeyDown},this.state._tabs.map(((t,e)=>(0,o.h)(i.c,{_disabled:t._disabled,_icons:t._icons,_hideLabel:t._hideLabel,_label:t._label,_on:this.callbacks,_tabIndex:this.state._selected===e?0:-1,_tooltipAlign:t._tooltipAlign,_variant:this.state._selected===e?"custom":void 0,_customClass:this.state._selected===e?"selected":void 0,_ariaControls:`tabpanel-${e}`,_ariaSelected:this.state._selected===e,_id:`${this.state._label.replace(/\s/g,"-")}-tab-${e}`,_role:"tab",_value:e}))),this.showCreateTab&&(0,o.h)(i.c,{class:"create-button",_label:this.onCreateLabel,_on:{onClick:this.onCreate}}))}render(){return(0,o.h)(o.H,{key:"668b8fe78f5053ce356e685104518338aa9f73b9",class:"kol-tabs"},(0,o.h)("div",{key:"5845ac11d2ebf8abe1e515aea9f9c68c56ee9a57",ref:t=>{this.tabPanelsElement=t},class:{[`tabs-align-${this.state._align}`]:!0}},this.renderButtonGroup(),(0,o.h)("div",{key:"67ef993b870a8ff374c2cc4f750de970d578edea",class:"tabs-content",ref:this.catchTabPanelHost})))}validateAlign(t){(0,l.a)(this,t)}validateLabel(t){(0,r.v)(this,t,{required:!0})}validateOn(t){if("object"==typeof t&&null!==t){(0,s.f)("[KolTabs] Prüfen, wie man auch einen EventCallback einzeln ändern kann.");const e={};"function"!=typeof t.onCreate&&"object"!=typeof t.onCreate||("object"==typeof t.onCreate?("string"==typeof t.onCreate.label&&t.onCreate.label.length>0?this.onCreateLabel=t.onCreate.label:d.L.debug("[KolTabs] Der Label-Text für Neu in {\n  onCreate: {\n    label: string (!),\n    callback: Function\n  }\n} ist nicht korrekt gesetzt."),"function"==typeof t.onCreate.callback?e.onCreate=t.onCreate.callback:d.L.debug("[KolTabs] Die onCreate-Callback-Funktion für Neu in {\n  onCreate: {\n    label: string,\n    callback: Function (!)\n  }\n} ist nicht korrekt gesetzt.")):e.onCreate=t.onCreate,this.showCreateTab="function"==typeof e.onCreate),"function"==typeof t.onSelect&&(e.onSelect=t.onSelect),(0,s.s)(this,"_on",e)}}validateSelected(t){(0,s.k)(this,"_selected",t,{hooks:{beforePatch:this.syncSelectedAndTabs}})}validateTabs(t){(0,s.g)(this,"_tabs",(t=>"object"==typeof t&&null!==t&&"string"==typeof t._label&&t._label.length>0),t,void 0,{hooks:{beforePatch:this.syncSelectedAndTabs}}),(0,s.h)("KolTabs",this.state._tabs.length)}componentWillLoad(){this.validateAlign(this._align),this.validateLabel(this._label),this.validateOn(this._on),this.validateSelected(this._selected),this.validateTabs(this._tabs)}componentDidRender(){if(this.handleTabPanels(),this.tabPanelHost instanceof HTMLDivElement)for(let t=0;t<this.tabPanelHost.children.length;t++)t!==this.state._selected?this.tabPanelHost.children[t].setAttribute("hidden",""):this.tabPanelHost.children[t].removeAttribute("hidden")}onSelect(t,e){var n,o;if(this._selected=e,"function"==typeof(null===(n=this._on)||void 0===n?void 0:n.onSelect)&&(null===(o=this._on)||void 0===o||o.onSelect(t,e)),this.tabPanelsElement){const t=(0,s.v)(`button#${this.state._label.replace(/\s/g,"-")}-tab-${e}`,this.tabPanelsElement);null==t||t.focus()}}get host(){return(0,o.g)(this)}static get watchers(){return{_align:["validateAlign"],_label:["validateLabel"],_on:["validateOn"],_selected:["validateSelected"],_tabs:["validateTabs"]}}};h.style={default:"/*\n * This file contains all rules for accessibility.\n */\n@layer kol-global {\n  :host {\n    /*\n     * Minimum size of interactive elements.\n     */\n    --a11y-min-size: 44px;\n    /*\n     * No element should be used without a background and font color whose contrast ratio has\n     * not been checked. By initially setting the background color to white and the font color\n     * to black, the contrast ratio is ensured and explicit adjustment is forced.\n     */\n    background-color: white;\n    color: black;\n    /*\n     * Verdana is an accessible font that can be used without requiring additional loading time.\n     */\n    font-family: Verdana;\n  }\n  * {\n    /*\n     * This rule enables the word dividing for all texts. That is important for high zoom levels.\n     */\n    hyphens: auto;\n    /*\n     * Letter spacing is required for all texts.\n     */\n    letter-spacing: inherit;\n    /*\n     * This rule enables the word dividing for all texts. That is important for high zoom levels.\n     */\n    word-break: break-word;\n    /*\n     * Word spacing is required for all texts.\n     */\n    word-spacing: inherit;\n  }\n  /*\n   * All interactive elements should have a minimum size of 44px.\n   */\n  /* input:not([type='checkbox'], [type='radio'], [type='range']), */\n  /* option, */\n  /* select, */\n  /* textarea, */\n  [role=button],\n  button:not([role=link]),\n  .kol-input .input {\n    min-height: var(--a11y-min-size);\n    min-width: var(--a11y-min-size);\n  }\n  /*\n   * Some interactive elements should not inherit the font-family and font-size.\n   */\n  a,\n  button,\n  h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6,\n  input,\n  option,\n  select,\n  textarea {\n    /*\n     * All elements should inherit the font family from his parent element.\n     */\n    font-family: inherit;\n    /*\n     * All elements should inherit the font size from his parent element.\n     */\n    font-size: inherit;\n  }\n}\n/**\n * Sometimes we need the semantic element for accessibility reasons,\n * but we don't want to show it.\n *\n * - https://www.a11yproject.com/posts/how-to-hide-content/\n */\n.visually-hidden {\n  clip: rect(0 0 0 0);\n  clip-path: inset(50%);\n  height: 1px;\n  overflow: hidden;\n  position: absolute;\n  white-space: nowrap;\n  width: 1px;\n}\n\n@layer kol-global {\n  /*\n   * Dieses CSS stellt sicher, dass der Standard-Style\n   * von A und Button resettet werden.\n   */\n  :is(a, button) {\n    background-color: transparent;\n    border: none;\n    margin: 0;\n    padding: 0;\n    width: 100%; /* 100% needed for custom width from outside */\n  }\n  /*\n   * Ensure elements with hidden attribute to be actually not visible\n   * @see https://meowni.ca/hidden.is.a.lie.html\n   */\n  [hidden] {\n    display: none !important;\n  }\n}\n@layer kol-global {\n  :host {\n    /*\n     * The max-width is needed to prevent the table from overflowing the\n     * parent node, if the table is wider than the parent node.\n     */\n    max-width: 100%;\n  }\n  * {\n    /*\n     * We prefer to box-sizing: border-box for all elements.\n     */\n    box-sizing: border-box;\n  }\n  /* KolSpan is a layout component with icons in all directions and a label text in the middle. */\n  .kol-span-wc {\n    display: grid;\n    place-items: center;\n  }\n  /* The sub span in KolSpan is the horizontal span with icon left and right and the label text in the middle. */\n  .kol-span-wc > span {\n    display: flex;\n    place-items: center;\n  }\n  a,\n  button {\n    cursor: pointer;\n  }\n  /* This is the text label. */\n  .hide-label > .kol-span-wc > span > span {\n    display: none;\n  }\n  /* Reset browser agent style. */\n  button:disabled {\n    color: unset;\n  }\n  .disabled label,\n  .disabled:focus-within label,\n  [aria-disabled=true],\n  [aria-disabled=true]:focus,\n  [disabled],\n  [disabled]:focus {\n    cursor: not-allowed;\n    opacity: 0.5;\n    outline: none;\n  }\n  [aria-disabled=true]:focus .kol-span-wc,\n  [disabled]:focus .kol-span-wc {\n    outline: none !important;\n  }\n}\n@layer kol-component {\n  :host {\n    display: block;\n  }\n}\n@layer kol-component {\n  :host {\n    font-size: calc(16rem / var(--kolibri-root-font-size, 16));\n  }\n  .kol-button-group-wc {\n    display: inline-flex;\n    flex-wrap: wrap;\n  }\n  .kol-button-group-wc button {\n    border-bottom-color: transparent;\n    border-bottom-style: solid;\n    display: block;\n  }\n  div.grid,\n  div[role=tabpanel] {\n    height: 100%;\n  }\n  :host > .tabs-align-right {\n    display: grid;\n    grid-template-columns: 1fr auto;\n  }\n  :host > .tabs-align-right .kol-button-group-wc {\n    display: grid;\n    order: 2;\n  }\n  :host > .tabs-align-left {\n    display: grid;\n    grid-template-columns: auto 1fr;\n  }\n  :host > .tabs-align-left .kol-button-group-wc {\n    display: grid;\n    order: 0;\n  }\n  :host > .tabs-align-bottom {\n    display: grid;\n    grid-template-rows: 1fr auto;\n  }\n  :host > .tabs-align-bottom .kol-button-group-wc {\n    order: 2;\n  }\n  :host > .tabs-align-bottom .kol-button-group-wc > div {\n    display: flex;\n  }\n  :host > .tabs-align-bottom > .kol-button-group-wc > div > div:first-child {\n    margin: 0 1em 0 0;\n  }\n  :host > .tabs-align-bottom > .kol-button-group-wc > div > div {\n    margin: 0 1em;\n  }\n  :host > .tabs-align-top {\n    display: grid;\n    grid-template-rows: auto 1fr;\n  }\n  :host > .tabs-align-top .kol-button-group-wc {\n    order: 0;\n  }\n  :host > .tabs-align-top .kol-button-group-wc > div {\n    display: flex;\n  }\n  :host > .tabs-align-top > .kol-button-group-wc > div > div:first-child {\n    margin: 0 1em 0 0;\n  }\n  :host > .tabs-align-top > .kol-button-group-wc > div > div {\n    margin: 0 1em;\n  }\n  :host > div {\n    display: grid;\n  }\n  :host > .tabs-align-left .kol-button-group-wc,\n  :host > .tabs-align-top .kol-button-group-wc {\n    order: 0;\n  }\n  :host > .tabs-align-bottom .kol-button-group-wc,\n  :host > .tabs-align-right .kol-button-group-wc {\n    order: 1;\n  }\n  :host > div.tabs-align-left .kol-button-group-wc > div,\n  :host > div.tabs-align-left .kol-button-group-wc > div > div,\n  :host > div.tabs-align-right .kol-button-group-wc > div,\n  :host > div.tabs-align-right .kol-button-group-wc > div > div {\n    display: grid;\n  }\n  :host > div.tabs-align-left .kol-button-group-wc > div > div .kol-button-wc,\n  :host > div.tabs-align-right .kol-button-group-wc > div > div .kol-button-wc {\n    width: 100%;\n  }\n  :host > div.tabs-align-bottom .kol-button-group-wc div,\n  :host > div.tabs-align-top .kol-button-group-wc div {\n    display: flex;\n    flex-wrap: wrap;\n  }\n}"}},9921:(t,e,n)=>{n.d(e,{a:()=>b,b:()=>s,c:()=>r,h:()=>a,v:()=>h});var o=n(121);const a=[0,1,2,3,4,5,6],i=/[a-zA-Z0-9äöüÄÖÜß]/g,l=/^\d+$/;function s(t,e=1){return function(t){var e;return"string"==typeof t&&(null===(e=t.match(i))||void 0===e?void 0:e.length)||0}(t)>=e}function r(t){return l.test(t)}const d=new Set(["string"]),h=(t,e,n={})=>{(0,o.w)(t,"_label",(t=>"string"==typeof t),d,e,function(t){var e;return Object.assign(Object.assign({},t),{hooks:{afterPatch:(e,n,a,i)=>{var l,d;"function"==typeof(null===(l=t.hooks)||void 0===l?void 0:l.afterPatch)&&(null===(d=t.hooks)||void 0===d||d.afterPatch(e,n,a,i)),"string"==typeof e&&!1===s(e,3)&&!1===r(e)&&(0,o.a)(`The heading or label ("${e}") is not accessible. A label should consist of at least three readable characters.`),"string"==typeof e&&e.length>80&&(0,o.u)("A heading or label should not be longer than 80 characters.")},beforePatch:null===(e=t.hooks)||void 0===e?void 0:e.beforePatch}})}(n))},b=h}}]);