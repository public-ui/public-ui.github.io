/*! For license information please see 3086.js.LICENSE.txt */
"use strict";(self.webpackChunk_public_ui_designer=self.webpackChunk_public_ui_designer||[]).push([[3086],{93086:(n,e,t)=>{t.r(e),t.d(e,{kol_breadcrumb:()=>s});var i=t(16120),a=t(15587),l=t(53087),o=t(56897);const s=class{constructor(n){(0,i.r)(this,n),this.renderLink=(n,e)=>{const t=this.state._links.length-1;return(0,i.h)("li",{key:e},0!==e&&(0,i.h)("kol-icon",{_label:"",_icons:"codicon codicon-chevron-right"}),e===t?(0,i.h)("span",null,n._hideLabel?(0,i.h)("kol-icon",{_label:n._label,_icons:"string"==typeof n._icons?n._icons:"codicon codicon-symbol-event"}):(0,i.h)(i.F,null,n._label)):(0,i.h)("kol-link",Object.assign({},n)))},this._label=void 0,this._links=void 0,this.state={_label:"",_links:[]}}render(){return(0,i.h)(i.H,{key:"84b5eb61c0a24a5e1e8699d8daa5a557091b8cad",class:"kol-breadcrumb"},(0,i.h)("nav",{key:"0e6b725e4895eb7ac61a4786cfa910410bf42a98","aria-label":this.state._label},(0,i.h)("ul",{key:"1527c13e34bcbfb93feec4d4724e39a8af616ba4"},0===this.state._links.length&&(0,i.h)("li",null,(0,i.h)("kol-icon",{_label:"",_icons:"codicon codicon-home"}),"…"),this.state._links.map(this.renderLink))))}validateLabel(n,e,t=!1){t||(0,l.r)(this.state._label),(0,a.v)(this,n,{required:!0}),(0,a.t)(n),(0,l.a)(this.state._label)}validateLinks(n){(0,o.w)("KolBreadcrumb",this,n)}componentWillLoad(){this.validateLabel(this._label,void 0,!0),this.validateLinks(this._links)}disconnectedCallback(){(0,l.r)(this.state._label)}static get watchers(){return{_label:["validateLabel"],_links:["validateLinks"]}}};s.style={default:"/*\n * This file contains all rules for accessibility.\n */\n@layer kol-global {\n  :host {\n    /*\n     * Minimum size of interactive elements.\n     */\n    --a11y-min-size: 44px;\n    /*\n     * No element should be used without a background and font color whose contrast ratio has\n     * not been checked. By initially setting the background color to white and the font color\n     * to black, the contrast ratio is ensured and explicit adjustment is forced.\n     */\n    background-color: white;\n    color: black;\n    /*\n     * Verdana is an accessible font that can be used without requiring additional loading time.\n     */\n    font-family: Verdana;\n  }\n  * {\n    /*\n     * This rule enables the word dividing for all texts. That is important for high zoom levels.\n     */\n    hyphens: auto;\n    /*\n     * Letter spacing is required for all texts.\n     */\n    letter-spacing: inherit;\n    /*\n     * This rule enables the word dividing for all texts. That is important for high zoom levels.\n     */\n    word-break: break-word;\n    /*\n     * Word spacing is required for all texts.\n     */\n    word-spacing: inherit;\n  }\n  /*\n   * All interactive elements should have a minimum size of 44px.\n   */\n  /* input:not([type='checkbox'], [type='radio'], [type='range']), */\n  /* option, */\n  /* select, */\n  /* textarea, */\n  [role=button],\n  button:not([role=link]),\n  .kol-input .input {\n    min-height: var(--a11y-min-size);\n    min-width: var(--a11y-min-size);\n  }\n  /*\n   * Some interactive elements should not inherit the font-family and font-size.\n   */\n  a,\n  button,\n  h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6,\n  input,\n  option,\n  select,\n  textarea {\n    /*\n     * All elements should inherit the font family from his parent element.\n     */\n    font-family: inherit;\n    /*\n     * All elements should inherit the font size from his parent element.\n     */\n    font-size: inherit;\n  }\n}\n/**\n * Sometimes we need the semantic element for accessibility reasons,\n * but we don't want to show it.\n *\n * - https://www.a11yproject.com/posts/how-to-hide-content/\n */\n.visually-hidden {\n  clip: rect(0 0 0 0);\n  clip-path: inset(50%);\n  height: 1px;\n  overflow: hidden;\n  position: absolute;\n  white-space: nowrap;\n  width: 1px;\n}\n\n@layer kol-global {\n  /*\n   * Dieses CSS stellt sicher, dass der Standard-Style\n   * von A und Button resettet werden.\n   */\n  :is(a, button) {\n    background-color: transparent;\n    border: none;\n    margin: 0;\n    padding: 0;\n    width: 100%; /* 100% needed for custom width from outside */\n  }\n  /*\n   * Ensure elements with hidden attribute to be actually not visible\n   * @see https://meowni.ca/hidden.is.a.lie.html\n   */\n  [hidden] {\n    display: none !important;\n  }\n}\n@layer kol-global {\n  :host {\n    /*\n     * The max-width is needed to prevent the table from overflowing the\n     * parent node, if the table is wider than the parent node.\n     */\n    max-width: 100%;\n  }\n  * {\n    /*\n     * We prefer to box-sizing: border-box for all elements.\n     */\n    box-sizing: border-box;\n  }\n  /* KolSpan is a layout component with icons in all directions and a label text in the middle. */\n  .kol-span-wc {\n    display: grid;\n    place-items: center;\n  }\n  /* The sub span in KolSpan is the horizontal span with icon left and right and the label text in the middle. */\n  .kol-span-wc > span {\n    display: flex;\n    place-items: center;\n  }\n  a,\n  button {\n    cursor: pointer;\n  }\n  .hidden {\n    display: none;\n    visibility: hidden;\n  }\n  /* This is the text label. */\n  .hide-label > .kol-span-wc > span > span {\n    display: none;\n  }\n  /* Reset browser agent style. */\n  button:disabled {\n    color: unset;\n  }\n  .disabled label,\n  .disabled:focus-within label,\n  [aria-disabled=true],\n  [aria-disabled=true]:focus,\n  [disabled],\n  [disabled]:focus {\n    cursor: not-allowed !important;\n    opacity: 0.5 !important;\n    outline: none !important;\n  }\n  [aria-disabled=true]:focus .kol-span-wc,\n  [disabled]:focus .kol-span-wc {\n    outline: none !important;\n  }\n}\n@layer kol-component {\n  li,\n  ul {\n    margin: 0;\n    padding: 0;\n    list-style: none;\n    display: flex;\n    gap: 0.5em;\n    flex-wrap: wrap;\n    place-items: center;\n  }\n  .kol-icon::part(separator) {\n    font-weight: 900;\n    font-size: 0.7em;\n  }\n  .kol-icon::part(separator):before {\n    content: \"\\f054\";\n    font-family: \"Font Awesome 6 Free\";\n  }\n}"}},53087:(n,e,t)=>{t.d(e,{a:()=>a,r:()=>l});const i=new Set;function a(n){i.has(n)?console.error(`There already is a nav element with the label "${n}"`):i.add(n)}function l(n){i.delete(n)}},56897:(n,e,t)=>{t.d(e,{w:()=>a});var i=t(15587);const a=(n,e,t)=>{(0,i.u)(e,"_links",(n=>"object"==typeof n&&("string"==typeof n._href||"string"==typeof n._label)),t),(0,i.x)(n,e.state._links.length)}}}]);