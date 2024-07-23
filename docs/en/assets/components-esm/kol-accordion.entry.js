/*! For license information please see kol-accordion.entry.js.LICENSE.txt */ import{r as registerInstance,h,H as Host}from"./index-b5e5a1b4.js";import{n as nonce}from"./dev.utils-d751d0cd.js";import{w as watchHeadingLevel}from"./validation-e2c07abd.js";import{b as KolHeadingWcTag,c as KolButtonWcTag}from"./component-names-068dc2ae.js";import{f as featureHint,s as setState}from"./prop.validators-db70e3c4.js";import{v as validateDisabled}from"./disabled-ecc9abfc.js";import{v as validateOpen}from"./open-5b527658.js";import{v as validateLabel}from"./label-20475610.js";import"./reuse-108ee8f5.js";import"./dev.utils-1ca991a2.js";import"./index-db4aa6e4.js";const defaultStyleCss="/*\n * This file contains all rules for accessibility.\n */\n@layer kol-global {\n :host {\n /*\n * Minimum size of interactive elements.\n */\n --a11y-min-size: 44px;\n /*\n * No element should be used without a background and font color whose contrast ratio has\n * not been checked. By initially setting the background color to white and the font color\n * to black, the contrast ratio is ensured and explicit adjustment is forced.\n */\n background-color: white;\n color: black;\n /*\n * Verdana is an accessible font that can be used without requiring additional loading time.\n */\n font-family: Verdana;\n }\n * {\n /*\n * This rule enables the word dividing for all texts. That is important for high zoom levels.\n */\n hyphens: auto;\n /*\n * Letter spacing is required for all texts.\n */\n letter-spacing: inherit;\n /*\n * This rule enables the word dividing for all texts. That is important for high zoom levels.\n */\n word-break: break-word;\n /*\n * Word spacing is required for all texts.\n */\n word-spacing: inherit;\n }\n /*\n * All interactive elements should have a minimum size of 44px.\n */\n /* input:not([type='checkbox'], [type='radio'], [type='range']), */\n /* option, */\n /* select, */\n /* textarea, */\n [role=button],\n button:not([role=link]),\n .kol-input .input {\n min-height: var(--a11y-min-size);\n min-width: var(--a11y-min-size);\n }\n /*\n * Some interactive elements should not inherit the font-family and font-size.\n */\n a,\n button,\n h1,\n h2,\n h3,\n h4,\n h5,\n h6,\n input,\n option,\n select,\n textarea {\n /*\n * All elements should inherit the font family from his parent element.\n */\n font-family: inherit;\n /*\n * All elements should inherit the font size from his parent element.\n */\n font-size: inherit;\n }\n}\n/**\n * Sometimes we need the semantic element for accessibility reasons,\n * but we don't want to show it.\n *\n * - https://www.a11yproject.com/posts/how-to-hide-content/\n */\n.visually-hidden {\n clip: rect(0 0 0 0);\n clip-path: inset(50%);\n height: 1px;\n overflow: hidden;\n position: absolute;\n white-space: nowrap;\n width: 1px;\n}\n\n@layer kol-global {\n /*\n * Dieses CSS stellt sicher, dass der Standard-Style\n * von A und Button resettet werden.\n */\n :is(a, button) {\n background-color: transparent;\n border: none;\n margin: 0;\n padding: 0;\n width: 100%; /* 100% needed for custom width from outside */\n }\n /*\n * Ensure elements with hidden attribute to be actually not visible\n * @see https://meowni.ca/hidden.is.a.lie.html\n */\n [hidden] {\n display: none !important;\n }\n}\n@layer kol-global {\n :host {\n /*\n * The max-width is needed to prevent the table from overflowing the\n * parent node, if the table is wider than the parent node.\n */\n max-width: 100%;\n }\n * {\n /*\n * We prefer to box-sizing: border-box for all elements.\n */\n box-sizing: border-box;\n }\n /* KolSpan is a layout component with icons in all directions and a label text in the middle. */\n .kol-span-wc {\n display: grid;\n place-items: center;\n }\n /* The sub span in KolSpan is the horizontal span with icon left and right and the label text in the middle. */\n .kol-span-wc > span {\n display: flex;\n place-items: center;\n }\n a,\n button {\n cursor: pointer;\n }\n /* This is the text label. */\n .hide-label > .kol-span-wc > span > span {\n display: none;\n }\n /* Reset browser agent style. */\n button:disabled {\n color: unset;\n }\n .disabled label,\n .disabled:focus-within label,\n [aria-disabled=true],\n [aria-disabled=true]:focus,\n [disabled],\n [disabled]:focus {\n cursor: not-allowed;\n opacity: 0.5;\n outline: none;\n }\n [aria-disabled=true]:focus .kol-span-wc,\n [disabled]:focus .kol-span-wc {\n outline: none !important;\n }\n}\n@layer kol-component {\n :host {\n display: block;\n }\n}\n@layer kol-component {\n :host {\n font-size: calc(16rem / var(--kolibri-root-font-size, 16));\n }\n /* For animation technique see https://css-tricks.com/css-grid-can-do-auto-height-transitions/ */\n .wrapper {\n display: grid;\n grid-template-rows: 0fr;\n overflow: hidden;\n transition: grid-template-rows 0.3s;\n }\n .accordion.open .wrapper {\n grid-template-rows: 1fr;\n }\n .animation-wrapper {\n min-height: 0;\n transition: visibility 0.3s;\n /* This property is important to keep in sync with the visual transition (template-rows). Without it interactive elements within the accordion would stay focusable. */\n visibility: hidden;\n }\n .accordion.open .animation-wrapper {\n visibility: visible;\n }\n @media (prefers-reduced-motion) {\n .animation-wrapper,\n .wrapper {\n transition-duration: 0s;\n }\n }\n /* @see https://github.com/public-ui/kolibri/issues/5952 */\n @media print {\n .accordion:not(.open) .animation-wrapper {\n display: none;\n }\n }\n /*\n * Inside a button, the caption text is always centered.\n * So we have to align the text to the left.\n */\n .accordion .kol-heading-wc .kol-button-wc button .kol-span-wc {\n justify-items: start;\n }\n}",KolAccordionDefaultStyle0=defaultStyleCss;featureHint("[KolAccordion] Anfrage nach einer KolAccordionGroup bei dem immer nur ein Accordion ge\xf6ffnet ist.\n\n- onClick auf der KolAccordion anwenden\n- Click-Event pr\xfcft den _open-Status der Accordions\n- Logik \xd6ffnet und Schlie\xdft entsprechend"),featureHint("[KolAccordion] Tab-Sperre des Inhalts im geschlossenen Zustand.");const KolAccordion=class{constructor(n){registerInstance(this,n),this.nonce=nonce(),this.catchRef=n=>{this.buttonWcRef=n},this.onClick=n=>{this._open=!this._open,setTimeout((()=>{var e;"function"==typeof(null===(e=this.state._on)||void 0===e?void 0:e.onClick)&&this.state._on.onClick(n,!0===this._open)}))},this._disabled=!1,this._label=void 0,this._level=1,this._on=void 0,this._open=!1,this.state={_label:"",_level:1}}async focus(){await this.kolFocus()}async kolFocus(){var n;await(null===(n=this.buttonWcRef)||void 0===n?void 0:n.kolFocus())}render(){return h(Host,{key:"b2662d09c5d6ee4ba7b8775fad1abedb51d55483",class:"kol-accordion"},h("div",{key:"c41fb13d7a5b699031edebf8aa88fe2f3e022346",class:{accordion:!0,disabled:!0===this.state._disabled,open:!0===this.state._open}},h(KolHeadingWcTag,{key:"10d86a82b4bc84278174a822edc508dd7edc3158",_label:"",_level:this.state._level,class:"accordion-heading"},h(KolButtonWcTag,{key:"365d163277cbdddfe6e34203e31a3d0ae9a1f602",class:"accordion-button",ref:this.catchRef,slot:"expert",_ariaControls:this.nonce,_ariaExpanded:this.state._open,_disabled:this.state._disabled,_icons:this.state._open?"codicon codicon-remove":"codicon codicon-add",_label:this.state._label,_on:{onClick:this.onClick}})),h("div",{key:"6fca8bd22147df2e556d9cfefb09bb60c705de9a",class:"wrapper"},h("div",{key:"8fa8ba68f8c2ea8911bdb7c040c4d8bd44469fbf",class:"animation-wrapper"},h("div",{key:"dd61af68e1eaeece1f8b5595fae6b97418563cac","aria-hidden":!1===this.state._open?"true":void 0,class:"content",id:this.nonce},h("slot",{key:"6249f6a0ccfd5ed101297d94a52a5311cc4385cf"}))))))}validateDisabled(n){validateDisabled(this,n)}validateLabel(n){validateLabel(this,n,{required:!0})}validateLevel(n){watchHeadingLevel(this,n)}validateOn(n){"object"==typeof n&&null!==n&&"function"==typeof n.onClick&&setState(this,"_on",n)}validateOpen(n){validateOpen(this,n)}componentWillLoad(){this.validateDisabled(this._disabled),this.validateLabel(this._label),this.validateLevel(this._level),this.validateOn(this._on),this.validateOpen(this._open)}static get watchers(){return{_disabled:["validateDisabled"],_label:["validateLabel"],_level:["validateLevel"],_on:["validateOn"],_open:["validateOpen"]}}};KolAccordion.style={default:KolAccordionDefaultStyle0};export{KolAccordion as kol_accordion};