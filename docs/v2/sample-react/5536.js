/*! For license information please see 5536.js.LICENSE.txt */
"use strict";(self.webpackChunk_public_ui_sample_react=self.webpackChunk_public_ui_sample_react||[]).push([[5536],{9106:(n,e,t)=>{t.d(e,{i:()=>a,n:()=>s,r:()=>l});var i=t(5587);const o=()=>{let n=(0,i.d)().KoliBri;return void 0===n&&(n={},Object.defineProperty((0,i.d)(),"KoliBri",{value:n,writable:!1})),n},a=()=>{(()=>{const n=(0,i.g)().querySelector('meta[name="kolibri"]');if(n&&n.hasAttribute("content")){const e=n.getAttribute("content");"string"==typeof e&&((0,i.s)(e.includes("dev-mode=true")),(0,i.b)(e.includes("experimental-mode=true")),(0,i.c)(e.includes("color-contrast-analysis=true")))}})(),void 0===o()?i.L.debug("\n\t,--. ,--.         ,--. ,--. ,-----.           ,--.\n\t|  .'   /  ,---.  |  | `--' |  |) /_  ,--.--. `--'\n\t|  .   '  | .-. | |  | ,--. |  .-.  \\ |  .--' ,--.\n\t|  |\\   \\ | '-' | |  | |  | |  '--' / |  |    |  |\n\t`--' `--´  `---´  `--' `--' `------´  `--'    `--'\n\t🚹 The accessible HTML-Standard | 👉 https://public-ui.github.io | 2.0.9\n\t\t",{forceLog:!0}):console.warn("You can only initialize KoliBri once.")},l=()=>{!0!==o().adviceShown&&(Object.defineProperty(o(),"adviceShown",{get:function(){return!0}}),i.L.debug("\nYou are using the KoliBri component library. If you have any suggestions for improvement or find a problem, please contact us:\n\nTicket: https://github.com/public-ui/kolibri/issues/new/choose (for privacy reasons, please use email)\nEmail: kolibri@itzbund.de\n"))};let s=()=>Math.floor(16777215*Math.random()).toString(16);"test"===i.p&&(s=()=>"nonce")},5536:(n,e,t)=>{t.r(e),t.d(e,{kol_abbr:()=>l});var i=t(6120),o=t(5587),a=t(9106);const l=class{constructor(n){(0,i.r)(this,n),this.nonce=(0,a.n)(),this._label=void 0,this._tooltipAlign="top",this.state={_label:"",_tooltipAlign:"top"}}render(){return(0,i.h)(i.H,{key:"c586992a4fa0509d32fff669db916974c9e3e8fc",class:"kol-abbr"},(0,i.h)("abbr",{key:"e0ca3b3e25a76c93bfa6adaec2eaca9fd94c7d11","aria-labelledby":this.nonce,role:"definition",tabindex:"0",title:this.state._label},(0,i.h)("span",{key:"2ac914a0918846ea73e4ccc99d5b03d32a143f39",title:""},(0,i.h)("slot",{key:"818ceebf5e3069ee353db25c23e48a7889e49f20"}))),(0,i.h)("kol-tooltip-wc",{key:"61d19f9b12f4b490f5d5824ca265a1d8db6c7719",_align:this.state._tooltipAlign,_id:this.nonce,_label:this.state._label}))}validateLabel(n){(0,o.v)(this,n,{required:!0})}validateTooltipAlign(n){(0,o.a)(this,n)}componentWillLoad(){this.validateLabel(this._label),this.validateTooltipAlign(this._tooltipAlign)}static get watchers(){return{_label:["validateLabel"],_tooltipAlign:["validateTooltipAlign"]}}};l.style={default:"/*\n * This file contains all rules for accessibility.\n */\n@layer kol-global {\n  :host {\n    /*\n     * Minimum size of interactive elements.\n     */\n    --a11y-min-size: 44px;\n    /*\n     * No element should be used without a background and font color whose contrast ratio has\n     * not been checked. By initially setting the background color to white and the font color\n     * to black, the contrast ratio is ensured and explicit adjustment is forced.\n     */\n    background-color: white;\n    color: black;\n    /*\n     * Verdana is an accessible font that can be used without requiring additional loading time.\n     */\n    font-family: Verdana;\n  }\n  * {\n    /*\n     * This rule enables the word dividing for all texts. That is important for high zoom levels.\n     */\n    hyphens: auto;\n    /*\n     * Letter spacing is required for all texts.\n     */\n    letter-spacing: inherit;\n    /*\n     * This rule enables the word dividing for all texts. That is important for high zoom levels.\n     */\n    word-break: break-word;\n    /*\n     * Word spacing is required for all texts.\n     */\n    word-spacing: inherit;\n  }\n  /*\n   * All interactive elements should have a minimum size of 44px.\n   */\n  /* input:not([type='checkbox'], [type='radio'], [type='range']), */\n  /* option, */\n  /* select, */\n  /* textarea, */\n  [role=button],\n  button:not([role=link]),\n  .kol-input .input {\n    min-height: var(--a11y-min-size);\n    min-width: var(--a11y-min-size);\n  }\n  /*\n   * Some interactive elements should not inherit the font-family and font-size.\n   */\n  a,\n  button,\n  h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6,\n  input,\n  option,\n  select,\n  textarea {\n    /*\n     * All elements should inherit the font family from his parent element.\n     */\n    font-family: inherit;\n    /*\n     * All elements should inherit the font size from his parent element.\n     */\n    font-size: inherit;\n  }\n}\n/**\n * Sometimes we need the semantic element for accessibility reasons,\n * but we don't want to show it.\n *\n * - https://www.a11yproject.com/posts/how-to-hide-content/\n */\n.visually-hidden {\n  clip: rect(0 0 0 0);\n  clip-path: inset(50%);\n  height: 1px;\n  overflow: hidden;\n  position: absolute;\n  white-space: nowrap;\n  width: 1px;\n}\n\n@layer kol-global {\n  /*\n   * Dieses CSS stellt sicher, dass der Standard-Style\n   * von A und Button resettet werden.\n   */\n  :is(a, button) {\n    background-color: transparent;\n    border: none;\n    margin: 0;\n    padding: 0;\n    width: 100%; /* 100% needed for custom width from outside */\n  }\n  /*\n   * Ensure elements with hidden attribute to be actually not visible\n   * @see https://meowni.ca/hidden.is.a.lie.html\n   */\n  [hidden] {\n    display: none !important;\n  }\n}\n@layer kol-global {\n  :host {\n    /*\n     * The max-width is needed to prevent the table from overflowing the\n     * parent node, if the table is wider than the parent node.\n     */\n    max-width: 100%;\n  }\n  * {\n    /*\n     * We prefer to box-sizing: border-box for all elements.\n     */\n    box-sizing: border-box;\n  }\n  /* KolSpan is a layout component with icons in all directions and a label text in the middle. */\n  .kol-span-wc {\n    display: grid;\n    place-items: center;\n  }\n  /* The sub span in KolSpan is the horizontal span with icon left and right and the label text in the middle. */\n  .kol-span-wc > span {\n    display: flex;\n    place-items: center;\n  }\n  a,\n  button {\n    cursor: pointer;\n  }\n  .hidden {\n    display: none;\n    visibility: hidden;\n  }\n  /* This is the text label. */\n  .hide-label > .kol-span-wc > span > span {\n    display: none;\n  }\n  /* Reset browser agent style. */\n  button:disabled {\n    color: unset;\n  }\n  .disabled label,\n  .disabled:focus-within label,\n  [aria-disabled=true],\n  [aria-disabled=true]:focus,\n  [disabled],\n  [disabled]:focus {\n    cursor: not-allowed !important;\n    opacity: 0.5 !important;\n    outline: none !important;\n  }\n  [aria-disabled=true]:focus .kol-span-wc,\n  [disabled]:focus .kol-span-wc {\n    outline: none !important;\n  }\n}\n@layer kol-component {\n  :host > abbr {\n    cursor: help;\n  }\n}"}}}]);