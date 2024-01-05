/*! For license information please see 6143.js.LICENSE.txt */
"use strict";(self.webpackChunk_public_ui_sample_react=self.webpackChunk_public_ui_sample_react||[]).push([[6143],{6143:(t,n,e)=>{e.r(n),e.d(n,{kol_quote:()=>r});var i=e(5509),a=e(1782),o=e(495),l=e(8125);const s=["block","inline"],r=class{constructor(t){(0,i.r)(this,t),this._label=void 0,this._href=void 0,this._quote=void 0,this._variant="inline",this.state={_href:"…",_quote:"…",_variant:"inline"}}validateLabel(t){(0,a.v)(this,t)}validateHref(t){(0,o.d)(this,"_href",t,{required:!0})}validateQuote(t){(0,o.d)(this,"_quote",t,{required:!0})}validateVariant(t){(0,o.w)(this,"_variant",(t=>"string"==typeof t&&s.includes(t)),new Set(s),t)}componentWillLoad(){this.validateHref(this._href),this.validateLabel(this._label),this.validateQuote(this._quote),this.validateVariant(this._variant)}render(){const t=(0,l.s)(this.state._quote);return(0,i.h)(i.H,null,(0,i.h)("figure",{class:{[this.state._variant]:!0}},"block"===this.state._variant?(0,i.h)("blockquote",{cite:this.state._href},this.state._quote,(0,i.h)("span",{"aria-hidden":t?void 0:"true",hidden:!t},(0,i.h)("slot",{name:"expert"}))):(0,i.h)("q",{cite:this.state._href},this.state._quote,(0,i.h)("span",{"aria-hidden":t?void 0:"true",hidden:!t},(0,i.h)("slot",{name:"expert"}))),"string"==typeof this.state._label&&this.state._label.length>0&&(0,i.h)("figcaption",null,(0,i.h)("cite",null,(0,i.h)("kol-link",{_href:this.state._href,_label:this.state._label,_target:"_blank"})))))}static get watchers(){return{_label:["validateLabel"],_href:["validateHref"],_quote:["validateQuote"],_variant:["validateVariant"]}}};r.style={default:"/*\n * This file contains all rules for accessibility.\n */\n@layer kol-global {\n\t:host {\n\t\t/*\n\t\t * Minimum size of interactive elements.\n\t\t */\n\t\t--a11y-min-size: 44px;\n\t\t/*\n\t\t * No element should be used without a background and font color whose contrast ratio has\n\t\t * not been checked. By initially setting the background color to white and the font color\n\t\t * to black, the contrast ratio is ensured and explicit adjustment is forced.\n\t\t */\n\t\tbackground-color: white;\n\t\tcolor: black;\n\t\t/*\n\t\t * Verdana is an accessible font that can be used without requiring additional loading time.\n\t\t */\n\t\tfont-family: Verdana;\n\t}\n\n\t* {\n\t\t/*\n\t\t * This rule enables the word dividing for all texts. That is important for high zoom levels.\n\t\t */\n\t\thyphens: auto;\n\t\t/*\n\t\t * Letter spacing is required for all texts.\n\t\t */\n\t\tletter-spacing: inherit;\n\t\t/*\n\t\t * This rule enables the word dividing for all texts. That is important for high zoom levels.\n\t\t */\n\t\tword-break: break-word;\n\t\t/*\n\t\t * Word spacing is required for all texts.\n\t\t */\n\t\tword-spacing: inherit;\n\t}\n\n\t/*\n\t * All interactive elements should have a minimum size of 44px.\n\t */\n\t/* input:not([type='checkbox'], [type='radio'], [type='range']), */\n\t/* option, */\n\t/* select, */\n\t/* textarea, */\n\t[role='button'],\n\tbutton:not([role='link']),\n\tkol-input .input {\n\t\tmin-height: var(--a11y-min-size);\n\t\tmin-width: var(--a11y-min-size);\n\t}\n\n\t/*\n\t * Some interactive elements should not inherit the font-family and font-size.\n\t */\n\ta,\n\tbutton,\n\th1,\n\th2,\n\th3,\n\th4,\n\th5,\n\th6,\n\tinput,\n\toption,\n\tselect,\n\ttextarea {\n\t\t/*\n\t\t * All elements should inherit the font family from his parent element.\n\t\t */\n\t\tfont-family: inherit;\n\t\t/*\n\t\t * All elements should inherit the font size from his parent element.\n\t\t */\n\t\tfont-size: inherit;\n\t}\n}\n\n/**\n * Sometimes we need the semantic element for accessibility reasons,\n * but we don't want to show it.\n *\n * - https://www.a11yproject.com/posts/how-to-hide-content/\n */\n.visually-hidden {\n\tclip: rect(0 0 0 0);\n\tclip-path: inset(50%);\n\theight: 1px;\n\toverflow: hidden;\n\tposition: absolute;\n\twhite-space: nowrap;\n\twidth: 1px;\n}\n\n@layer kol-global {\n\t/*\n\t * Dieses CSS stellt sicher, dass der Standard-Style\n\t * von A und Button resettet werden.\n\t */\n\t:is(a, button) {\n\t\tbackground-color: transparent;\n\t\tborder: none;\n\t\tmargin: 0;\n\t\tpadding: 0;\n\t\twidth: 100%; /* 100% needed for custom width from outside */\n\t}\n\n\t/*\n\t * Ensure elements with hidden attribute to be actually not visible\n\t * @see https://meowni.ca/hidden.is.a.lie.html\n\t */\n\t[hidden] {\n\t\tdisplay: none !important;\n\t}\n}\n\n@layer kol-global {\n\t:host {\n\t\t/*\n\t\t * The max-width is needed to prevent the table from overflowing the\n\t\t * parent node, if the table is wider than the parent node.\n\t\t */\n\t\tmax-width: 100%;\n\t}\n\n\t* {\n\t\t/*\n\t\t * We prefer to box-sizing: border-box for all elements.\n\t\t */\n\t\tbox-sizing: border-box;\n\t}\n\n\t/* KolSpan is a layout component with icons in all directions and a label text in the middle. */\n\tkol-span-wc {\n\t\tdisplay: grid;\n\t\tplace-items: center;\n\t}\n\n\t/* The sub span in KolSpan is the horizontal span with icon left and right and the label text in the middle. */\n\tkol-span-wc > span {\n\t\tdisplay: flex;\n\t\tplace-items: center;\n\t}\n\n\ta,\n\tbutton {\n\t\tcursor: pointer;\n\t}\n\n\t/* This is the text label. */\n\t.icon-only > kol-span-wc > span > span {\n\t\tdisplay: none;\n\t}\n}\n\n@layer kol-component {\n\tcite,\n\tfigure,\n\tq + figcaption {\n\t\tdisplay: inline;\n\t\tmargin: 0;\n\t\tpadding: 0;\n\t}\n\n\tblockquote:before {\n\t\tcontent: open-quote;\n\t}\n\n\tblockquote::after {\n\t\tcontent: close-quote;\n\t}\n\n\tcite:before {\n\t\tcontent: '—';\n\t}\n\n\t.block cite:before {\n\t\tpadding-right: 0.5em;\n\t}\n\n\t.inline cite:before {\n\t\tpadding: 0.5em;\n\t}\n}\n"}},1782:(t,n,e)=>{e.d(n,{a:()=>c,c:()=>r,h:()=>s,v:()=>d});var i=e(3912),a=e(495);const o=/[a-zA-Z0-9äöüÄÖÜß]/g,l=/^\d+$/;function s(t,n=1){return function(t){var n;return"string"==typeof t&&(null===(n=t.match(o))||void 0===n?void 0:n.length)||0}(t)>=n}function r(t){return l.test(t)}const h=new Set(["string"]),d=(t,n,e={})=>{(0,a.w)(t,"_label",(t=>"string"==typeof t),h,n,function(t){var n;return{hooks:{afterPatch:(n,e,a,o)=>{var l,h;"function"==typeof(null===(l=t.hooks)||void 0===l?void 0:l.afterPatch)&&(null===(h=t.hooks)||void 0===h||h.afterPatch(n,e,a,o)),"string"==typeof n&&!1===s(n,3)&&!1===r(n)&&(0,i.a)(`The heading or label ("${n}") is not accessible. A label should consist of at least three readable characters.`),"string"==typeof n&&n.length>80&&(0,i.u)("A heading or label should not be longer than 80 characters.")},beforePatch:null===(n=t.hooks)||void 0===n?void 0:n.beforePatch}}}(e))},c=d}}]);