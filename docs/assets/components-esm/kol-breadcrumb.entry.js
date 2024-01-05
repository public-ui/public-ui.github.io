/*! * KoliBri - The accessible HTML-Standard */ import{r as registerInstance,h,F as Fragment,H as Host}from"./index-5dfe6d77.js";import{v as validateLabel}from"./label-5f92bb62.js";import{b as a11yHintLabelingLandmarks}from"./a11y.tipps-2a54fd3e.js";import{r as removeNavLabel,a as addNavLabel}from"./unique-nav-labels-62d9802d.js";import{w as watchNavLinks}from"./validation-7eedde02.js";import"./prop.validators-c9100bb0.js";import"./dev.utils-a1ddacb2.js";import"./reuse-d79ab469.js";const defaultStyleCss="/*\n * This file contains all rules for accessibility.\n */\n@layer kol-global {\n\t:host {\n\t\t/*\n\t\t * Minimum size of interactive elements.\n\t\t */\n\t\t--a11y-min-size: 44px;\n\t\t/*\n\t\t * No element should be used without a background and font color whose contrast ratio has\n\t\t * not been checked. By initially setting the background color to white and the font color\n\t\t * to black, the contrast ratio is ensured and explicit adjustment is forced.\n\t\t */\n\t\tbackground-color: white;\n\t\tcolor: black;\n\t\t/*\n\t\t * Verdana is an accessible font that can be used without requiring additional loading time.\n\t\t */\n\t\tfont-family: Verdana;\n\t}\n\n\t* {\n\t\t/*\n\t\t * This rule enables the word dividing for all texts. That is important for high zoom levels.\n\t\t */\n\t\thyphens: auto;\n\t\t/*\n\t\t * Letter spacing is required for all texts.\n\t\t */\n\t\tletter-spacing: inherit;\n\t\t/*\n\t\t * This rule enables the word dividing for all texts. That is important for high zoom levels.\n\t\t */\n\t\tword-break: break-word;\n\t\t/*\n\t\t * Word spacing is required for all texts.\n\t\t */\n\t\tword-spacing: inherit;\n\t}\n\n\t/*\n\t * All interactive elements should have a minimum size of 44px.\n\t */\n\t/* input:not([type='checkbox'], [type='radio'], [type='range']), */\n\t/* option, */\n\t/* select, */\n\t/* textarea, */\n\t[role='button'],\n\tbutton:not([role='link']),\n\tkol-input .input {\n\t\tmin-height: var(--a11y-min-size);\n\t\tmin-width: var(--a11y-min-size);\n\t}\n\n\t/*\n\t * Some interactive elements should not inherit the font-family and font-size.\n\t */\n\ta,\n\tbutton,\n\th1,\n\th2,\n\th3,\n\th4,\n\th5,\n\th6,\n\tinput,\n\toption,\n\tselect,\n\ttextarea {\n\t\t/*\n\t\t * All elements should inherit the font family from his parent element.\n\t\t */\n\t\tfont-family: inherit;\n\t\t/*\n\t\t * All elements should inherit the font size from his parent element.\n\t\t */\n\t\tfont-size: inherit;\n\t}\n}\n\n/**\n * Sometimes we need the semantic element for accessibility reasons,\n * but we don't want to show it.\n *\n * - https://www.a11yproject.com/posts/how-to-hide-content/\n */\n.visually-hidden {\n\tclip: rect(0 0 0 0);\n\tclip-path: inset(50%);\n\theight: 1px;\n\toverflow: hidden;\n\tposition: absolute;\n\twhite-space: nowrap;\n\twidth: 1px;\n}\n\n@layer kol-global {\n\t/*\n\t * Dieses CSS stellt sicher, dass der Standard-Style\n\t * von A und Button resettet werden.\n\t */\n\t:is(a, button) {\n\t\tbackground-color: transparent;\n\t\tborder: none;\n\t\tmargin: 0;\n\t\tpadding: 0;\n\t\twidth: 100%; /* 100% needed for custom width from outside */\n\t}\n\n\t/*\n\t * Ensure elements with hidden attribute to be actually not visible\n\t * @see https://meowni.ca/hidden.is.a.lie.html\n\t */\n\t[hidden] {\n\t\tdisplay: none !important;\n\t}\n}\n\n@layer kol-global {\n\t:host {\n\t\t/*\n\t\t * The max-width is needed to prevent the table from overflowing the\n\t\t * parent node, if the table is wider than the parent node.\n\t\t */\n\t\tmax-width: 100%;\n\t}\n\n\t* {\n\t\t/*\n\t\t * We prefer to box-sizing: border-box for all elements.\n\t\t */\n\t\tbox-sizing: border-box;\n\t}\n\n\t/* KolSpan is a layout component with icons in all directions and a label text in the middle. */\n\tkol-span-wc {\n\t\tdisplay: grid;\n\t\tplace-items: center;\n\t}\n\n\t/* The sub span in KolSpan is the horizontal span with icon left and right and the label text in the middle. */\n\tkol-span-wc > span {\n\t\tdisplay: flex;\n\t\tplace-items: center;\n\t}\n\n\ta,\n\tbutton {\n\t\tcursor: pointer;\n\t}\n\n\t/* This is the text label. */\n\t.icon-only > kol-span-wc > span > span {\n\t\tdisplay: none;\n\t}\n}\n\n@layer kol-component {\n\tli,\n\tul {\n\t\tmargin: 0;\n\t\tpadding: 0;\n\t\tlist-style: none;\n\t\tdisplay: flex;\n\t\tgap: 0.5em;\n\t\tflex-wrap: wrap;\n\t\tplace-items: center;\n\t}\n\n\tkol-icon::part(separator) {\n\t\tfont-weight: 900;\n\t\tfont-size: 0.7em;\n\t}\n\n\tkol-icon::part(separator):before {\n\t\tcontent: '\\f054';\n\t\tfont-family: 'Font Awesome 6 Free';\n\t}\n}\n",KolBreadcrumb=class{constructor(t){registerInstance(this,t),this.renderLink=(t,n)=>{const e=this.state._links.length-1;return h("li",{key:n},0!==n&&h("kol-icon",{_label:"",_icons:"codicon codicon-chevron-right"}),n===e?h("span",null,t._hideLabel?h("kol-icon",{_label:t._label,_icons:"string"==typeof t._icons?t._icons:"codicon codicon-symbol-event"}):h(Fragment,null,t._label)):h("kol-link",Object.assign({},t)))},this._label=void 0,this._links=void 0,this.state={_label:"…",_links:[]}}render(){return h(Host,null,h("nav",{"aria-label":this.state._label},h("ul",null,0===this.state._links.length&&h("li",null,h("kol-icon",{_label:"",_icons:"codicon codicon-home"}),"…"),this.state._links.map(this.renderLink))))}validateLabel(t,n,e=!1){e||removeNavLabel(this.state._label),validateLabel(this,t),a11yHintLabelingLandmarks(t),addNavLabel(this.state._label)}validateLinks(t){watchNavLinks("KolBreadcrumb",this,t)}componentWillLoad(){this.validateLabel(this._label,void 0,!0),this.validateLinks(this._links)}disconnectedCallback(){removeNavLabel(this.state._label)}static get watchers(){return{_label:["validateLabel"],_links:["validateLinks"]}}};KolBreadcrumb.style={default:defaultStyleCss};export{KolBreadcrumb as kol_breadcrumb};