/*! For license information please see 68116.03f1ae69.js.LICENSE.txt */ "use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[68116],{68116:(n,e,t)=>{t.r(e),t.d(e,{kol_button_link:()=>a});var i=t(65224),o=t(63792);const a=class{constructor(n){(0,i.r)(this,n),this.catchRef=n=>{this.buttonWcRef=n},this._accessKey=void 0,this._ariaControls=void 0,this._ariaExpanded=void 0,this._ariaSelected=void 0,this._disabled=!1,this._hideLabel=!1,this._icons=void 0,this._id=void 0,this._label=void 0,this._name=void 0,this._on=void 0,this._role=void 0,this._syncValueBySelector=void 0,this._tabIndex=void 0,this._tooltipAlign="top",this._type="button",this._value=void 0}async getValue(){return this._value}async focus(){await this.kolFocus()}async kolFocus(){var n;await(null===(n=this.buttonWcRef)||void 0===n?void 0:n.kolFocus())}render(){return(0,i.h)(i.H,{key:"925b960759838064aebb5519d338b0833f4c9b24",class:"kol-button-link"},(0,i.h)(o.c,{key:"2eb980bbb032ad55772f90bdfba9f94d2f8d1b73",ref:this.catchRef,_accessKey:this._accessKey,_ariaControls:this._ariaControls,_ariaExpanded:this._ariaExpanded,_ariaSelected:this._ariaSelected,_disabled:this._disabled,_icons:this._icons,_hideLabel:this._hideLabel,_id:this._id,_label:this._label,_name:this._name,_on:this._on,_role:"link",_syncValueBySelector:this._syncValueBySelector,_tabIndex:this._tabIndex,_tooltipAlign:this._tooltipAlign,_type:this._type,_value:this._value},(0,i.h)("slot",{key:"52a25c7c8be71f8286313851b3ecdaa404814557",name:"expert",slot:"expert"})))}};a.style={default:"/*\n * This file contains all rules for accessibility.\n */\n@layer kol-global {\n :host {\n /*\n * Minimum size of interactive elements.\n */\n --a11y-min-size: 44px;\n /*\n * No element should be used without a background and font color whose contrast ratio has\n * not been checked. By initially setting the background color to white and the font color\n * to black, the contrast ratio is ensured and explicit adjustment is forced.\n */\n background-color: white;\n color: black;\n /*\n * Verdana is an accessible font that can be used without requiring additional loading time.\n */\n font-family: Verdana;\n }\n * {\n /*\n * This rule enables the word dividing for all texts. That is important for high zoom levels.\n */\n hyphens: auto;\n /*\n * Letter spacing is required for all texts.\n */\n letter-spacing: inherit;\n /*\n * This rule enables the word dividing for all texts. That is important for high zoom levels.\n */\n word-break: break-word;\n /*\n * Word spacing is required for all texts.\n */\n word-spacing: inherit;\n }\n /*\n * All interactive elements should have a minimum size of 44px.\n */\n /* input:not([type='checkbox'], [type='radio'], [type='range']), */\n /* option, */\n /* select, */\n /* textarea, */\n [role=button],\n button:not([role=link]),\n .kol-input .input {\n min-height: var(--a11y-min-size);\n min-width: var(--a11y-min-size);\n }\n /*\n * Some interactive elements should not inherit the font-family and font-size.\n */\n a,\n button,\n h1,\n h2,\n h3,\n h4,\n h5,\n h6,\n input,\n option,\n select,\n textarea {\n /*\n * All elements should inherit the font family from his parent element.\n */\n font-family: inherit;\n /*\n * All elements should inherit the font size from his parent element.\n */\n font-size: inherit;\n }\n}\n/**\n * Sometimes we need the semantic element for accessibility reasons,\n * but we don't want to show it.\n *\n * - https://www.a11yproject.com/posts/how-to-hide-content/\n */\n.visually-hidden {\n clip: rect(0 0 0 0);\n clip-path: inset(50%);\n height: 1px;\n overflow: hidden;\n position: absolute;\n white-space: nowrap;\n width: 1px;\n}\n\n@layer kol-global {\n /*\n * Dieses CSS stellt sicher, dass der Standard-Style\n * von A und Button resettet werden.\n */\n :is(a, button) {\n background-color: transparent;\n border: none;\n margin: 0;\n padding: 0;\n width: 100%; /* 100% needed for custom width from outside */\n }\n /*\n * Ensure elements with hidden attribute to be actually not visible\n * @see https://meowni.ca/hidden.is.a.lie.html\n */\n [hidden] {\n display: none !important;\n }\n}\n@layer kol-global {\n :host {\n /*\n * The max-width is needed to prevent the table from overflowing the\n * parent node, if the table is wider than the parent node.\n */\n max-width: 100%;\n }\n * {\n /*\n * We prefer to box-sizing: border-box for all elements.\n */\n box-sizing: border-box;\n }\n /* KolSpan is a layout component with icons in all directions and a label text in the middle. */\n .kol-span-wc {\n display: grid;\n place-items: center;\n }\n /* The sub span in KolSpan is the horizontal span with icon left and right and the label text in the middle. */\n .kol-span-wc > span {\n display: flex;\n place-items: center;\n }\n a,\n button {\n cursor: pointer;\n }\n /* This is the text label. */\n .hide-label > .kol-span-wc > span > span {\n display: none;\n }\n /* Reset browser agent style. */\n button:disabled {\n color: unset;\n }\n .disabled label,\n .disabled:focus-within label,\n [aria-disabled=true],\n [aria-disabled=true]:focus,\n [disabled],\n [disabled]:focus {\n cursor: not-allowed;\n opacity: 0.5;\n outline: none;\n }\n [aria-disabled=true]:focus .kol-span-wc,\n [disabled]:focus .kol-span-wc {\n outline: none !important;\n }\n}\n@layer kol-component {\n :host {\n display: inline-block;\n font-size: calc(16rem / var(--kolibri-root-font-size, 16));\n }\n :is(a, button) {\n align-items: baseline;\n display: inline-flex;\n place-items: center;\n text-align: left;\n text-decoration-line: none;\n }\n :is(a, button) .kol-span-wc .span-label {\n text-decoration-line: underline;\n }\n a:is(:focus, :hover):not([aria-disabled]) .kol-span-wc .span-label,\n button:is(:focus, :hover):not([disabled]) .kol-span-wc .span-label {\n text-decoration-thickness: 0.2em;\n }\n .skip {\n left: -99999px;\n overflow: hidden;\n position: absolute;\n z-index: 9999999;\n line-height: 1em;\n }\n .skip:focus {\n background-color: #fff;\n left: unset;\n padding: 1em;\n position: unset;\n }\n .kol-icon.external-link-icon {\n display: inline-flex;\n }\n}"}}}]);