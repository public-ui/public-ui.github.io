/*! * KoliBri - The accessible HTML-Standard */ import{r as registerInstance,h,H as Host,F as Fragment}from"./index-62e5924b.js";import{ao as validateShow,ap as validateSpinVariant}from"./index-de9d4ee0.js";import{a as translate}from"./i18n-8b7a6ddc.js";import"./index-8cb3c3b2.js";import"./dev.utils-744f41b3.js";const defaultStyleCss="/*\n * This file contains all rules for accessibility.\n */\n@layer kol-global {\n :host {\n /*\n * Minimum size of interactive elements.\n */\n --a11y-min-size: 44px;\n /*\n * No element should be used without a background and font color whose contrast ratio has\n * not been checked. By initially setting the background color to white and the font color\n * to black, the contrast ratio is ensured and explicit adjustment is forced.\n */\n background-color: white;\n color: black;\n /*\n * Verdana is an accessible font that can be used without requiring additional loading time.\n */\n font-family: Verdana;\n }\n * {\n /*\n * This rule enables the word dividing for all texts. That is important for high zoom levels.\n */\n hyphens: auto;\n /*\n * Letter spacing is required for all texts.\n */\n letter-spacing: inherit;\n /*\n * This rule enables the word dividing for all texts. That is important for high zoom levels.\n */\n word-break: break-word;\n /*\n * Word spacing is required for all texts.\n */\n word-spacing: inherit;\n }\n /*\n * All interactive elements should have a minimum size of 44px.\n */\n /* input:not([type='checkbox'], [type='radio'], [type='range']), */\n /* option, */\n /* select, */\n /* textarea, */\n [role=button],\n button:not([role=link]),\n kol-input .input {\n min-height: var(--a11y-min-size);\n min-width: var(--a11y-min-size);\n }\n /*\n * Some interactive elements should not inherit the font-family and font-size.\n */\n a,\n button,\n h1,\n h2,\n h3,\n h4,\n h5,\n h6,\n input,\n option,\n select,\n textarea {\n /*\n * All elements should inherit the font family from his parent element.\n */\n font-family: inherit;\n /*\n * All elements should inherit the font size from his parent element.\n */\n font-size: inherit;\n }\n}\n/**\n * Sometimes we need the semantic element for accessibility reasons,\n * but we don't want to show it.\n *\n * - https://www.a11yproject.com/posts/how-to-hide-content/\n */\n.visually-hidden {\n clip: rect(0 0 0 0);\n clip-path: inset(50%);\n height: 1px;\n overflow: hidden;\n position: absolute;\n white-space: nowrap;\n width: 1px;\n}\n\n@layer kol-global {\n /*\n * Dieses CSS stellt sicher, dass der Standard-Style\n * von A und Button resettet werden.\n */\n :is(a, button) {\n background-color: transparent;\n border: none;\n margin: 0;\n padding: 0;\n width: 100%; /* 100% needed for custom width from outside */\n }\n /*\n * Ensure elements with hidden attribute to be actually not visible\n * @see https://meowni.ca/hidden.is.a.lie.html\n */\n [hidden] {\n display: none !important;\n }\n}\n@layer kol-global {\n :host {\n /*\n * The max-width is needed to prevent the table from overflowing the\n * parent node, if the table is wider than the parent node.\n */\n max-width: 100%;\n }\n * {\n /*\n * We prefer to box-sizing: border-box for all elements.\n */\n box-sizing: border-box;\n }\n /* KolSpan is a layout component with icons in all directions and a label text in the middle. */\n kol-span-wc {\n display: grid;\n place-items: center;\n }\n /* The sub span in KolSpan is the horizontal span with icon left and right and the label text in the middle. */\n kol-span-wc > span {\n display: flex;\n place-items: center;\n }\n a,\n button {\n cursor: pointer;\n }\n .hidden {\n display: none;\n visibility: hidden;\n }\n /* This is the text label. */\n .hide-label > kol-span-wc > span > span {\n display: none;\n }\n /* Reset browser agent style. */\n button:disabled {\n color: unset;\n }\n .disabled label,\n .disabled:focus-within label,\n [aria-disabled=true],\n [aria-disabled=true]:focus,\n [disabled],\n [disabled]:focus {\n cursor: not-allowed !important;\n opacity: 0.5 !important;\n outline: none !important;\n }\n [aria-disabled=true]:focus kol-span-wc,\n [disabled]:focus kol-span-wc {\n outline: none !important;\n }\n}\n@layer kol-component {\n .spin.cycle {\n width: 3rem;\n height: 3rem;\n }\n .spin.cycle > .loader {\n display: block;\n width: 100%;\n height: 100%;\n border-radius: 50%;\n position: relative;\n animation: 2s linear infinite rotate;\n }\n .spin.cycle > .loader::before {\n content: \"\";\n box-sizing: border-box;\n position: absolute;\n inset: 0px;\n border-radius: 50%;\n border: 5px solid #333;\n animation: 3s linear infinite prixClipFix;\n }\n @keyframes rotate {\n 100% {\n transform: rotate(360deg);\n }\n }\n @keyframes prixClipFix {\n 0% {\n border-color: #fff;\n clip-path: polygon(50% 50%, 0 0, 0 0, 0 0, 0 0, 0 0);\n }\n 25% {\n border-color: #666;\n clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 0, 100% 0, 100% 0);\n }\n 50% {\n border-color: #fc0;\n clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 100%, 100% 100%, 100% 100%);\n }\n 75% {\n border-color: red;\n clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 100%, 0 100%, 0 100%);\n }\n 100% {\n border-color: #000;\n clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 100%, 0 100%, 0 0);\n }\n } /* https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion#toning_down_the_animation_scaling */\n @media (prefers-reduced-motion) {\n .spin.cycle > .loader {\n animation-duration: 4s;\n }\n .spin.cycle > .loader::before {\n animation-duration: 6s;\n }\n }\n}\n@layer kol-component {\n .spin.dot {\n height: 1rem;\n width: 3rem;\n }\n .spin.dot > span {\n animation-timing-function: cubic-bezier(0, 1, 1, 0);\n border-radius: 50%;\n border: 0.1rem solid #fff;\n height: 0.8rem;\n position: absolute;\n top: 0.1rem;\n width: 0.8rem;\n }\n .spin.dot > span:first-child {\n background-color: #fc0;\n z-index: 0;\n animation: 1s infinite spin1;\n left: 0.1rem;\n }\n .spin.dot > span:nth-child(2) {\n background-color: red;\n z-index: 1;\n animation: 1s infinite spin2;\n left: 0.1rem;\n }\n .spin.dot > span:nth-child(3) {\n background-color: #000;\n z-index: 1;\n animation: 1s infinite spin2;\n left: 1.1rem;\n }\n .spin.dot > span:nth-child(4) {\n background-color: #666;\n z-index: 0;\n animation: 1s infinite spin3;\n left: 2.1rem;\n }\n @keyframes spin1 {\n 0% {\n transform: scale(0);\n }\n 100% {\n transform: scale(1);\n }\n }\n @keyframes spin2 {\n 0% {\n transform: translate(0, 0);\n }\n 100% {\n transform: translate(1rem, 0);\n }\n }\n @keyframes spin3 {\n 0% {\n transform: scale(1);\n }\n 100% {\n transform: scale(0);\n }\n } /* https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion#toning_down_the_animation_scaling */\n @media (prefers-reduced-motion) {\n .spin.dot > span:first-child,\n .spin.dot > span:nth-child(2),\n .spin.dot > span:nth-child(3),\n .spin.dot > span:nth-child(4) {\n animation-duration: 2s;\n }\n }\n}\n@layer kol-component {\n .spin {\n display: block;\n padding: 0.125rem;\n position: relative;\n }\n}",KolSpinDefaultStyle0=defaultStyleCss;function renderSpin(n){switch(n){case"cycle":return h("span",{class:"loader"});case"none":return h("slot",{name:"expert"});default:return h(Fragment,null,h("span",{class:"bg-spin-1"}),h("span",{class:"bg-spin-2"}),h("span",{class:"bg-spin-3"}),h("span",{class:"bg-neutral"}))}}const KolSpin=class{constructor(n){registerInstance(this,n),this.showToggled=!1,this._show=!1,this._variant="dot",this.state={_variant:"dot"}}render(){return h(Host,{key:"5773dc5eb5bacd43b45a7a18ffe30b207ece68f4"},this.state._show?h("span",{"aria-busy":"true","aria-label":translate("kol-action-running"),"aria-live":"polite",class:{spin:!0,[this.state._variant]:!0},role:"alert"},renderSpin(this.state._variant)):this.showToggled&&h("span",{"aria-label":translate("kol-action-done"),"aria-busy":"false","aria-live":"polite",role:"alert"}))}validateShow(n){this.showToggled=!0===this.state._show&&!1===this._show,validateShow(this,n)}validateVariant(n){validateSpinVariant(this,n)}componentWillLoad(){this.validateShow(this._show),this.validateVariant(this._variant)}static get watchers(){return{_show:["validateShow"],_variant:["validateVariant"]}}};KolSpin.style={default:KolSpinDefaultStyle0};export{KolSpin as kol_spin};