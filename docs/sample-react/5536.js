/*! For license information please see 5536.js.LICENSE.txt */
"use strict";(self.webpackChunk_public_ui_sample_react=self.webpackChunk_public_ui_sample_react||[]).push([[5536],{8792:(t,n,e)=>{e.d(n,{v:()=>l});var i=e(8330);const o=new Set([...new Set(['"left", "right"']),...new Set(['"bottom", "top"'])]),l=(t,n,e)=>{(0,i.w)(t,n,(t=>"bottom"===t||"left"===t||"right"===t||"top"===t),o,e,{defaultValue:"top"})}},5536:(t,n,e)=>{e.r(n),e.d(n,{kol_abbr:()=>s});var i=e(2054),o=e(1032),l=e(5059),a=e(3906);const s=class{constructor(t){(0,i.r)(this,t),this.nonce=(0,a.n)(),this._label=void 0,this._tooltipAlign="top",this.state={_label:"…",_tooltipAlign:"top"}}render(){return(0,i.h)(i.H,null,(0,i.h)("abbr",{"aria-labelledby":this.nonce,role:"definition",tabindex:"0",title:this.state._label},(0,i.h)("span",{title:""},(0,i.h)("slot",null))),(0,i.h)("kol-tooltip-wc",{_align:this.state._tooltipAlign,_id:this.nonce,_label:this.state._label}))}validateLabel(t){(0,o.v)(this,t)}validateTooltipAlign(t){(0,l.v)(this,t)}componentWillLoad(){this.validateLabel(this._label),this.validateTooltipAlign(this._tooltipAlign)}static get watchers(){return{_label:["validateLabel"],_tooltipAlign:["validateTooltipAlign"]}}};s.style={default:"@layer kol-global {\n\t/*\n\t * This file contains all rules for accessibility.\n\t */\n\t:host {\n\t\t/*\n\t\t * Minimum size of interactive elements.\n\t\t */\n\t\t--a11y-min-size: 44px;\n\t\tfont-size: inherit;\n\t}\n\n\t* {\n\t\t/*\n\t\t * Verdana is an accessible font that can be used without requiring additional loading time.\n\t\t */\n\t\tfont-family: Verdana;\n\t\t/*\n\t\t * This rule enables the word dividing for all texts. That is important for high zoom levels.\n\t\t */\n\t\thyphens: auto;\n\t\t/*\n\t\t * Letter spacing is required for all texts.\n\t\t */\n\t\tletter-spacing: inherit;\n\t\t/*\n\t\t * This rule enables the word dividing for all texts. That is important for high zoom levels.\n\t\t */\n\t\tword-break: break-word;\n\t\t/*\n\t\t * Word spacing is required for all texts.\n\t\t */\n\t\tword-spacing: inherit;\n\t}\n\n\t/*\n\t * All interactive elements should have a minimum size of 44px.\n\t */\n\t/* input:not([type='checkbox'], [type='radio'], [type='range']), */\n\t/* option, */\n\t/* select, */\n\t/* textarea, */\n\t[role='button'],\n\tbutton:not([role='link']),\n\tkol-input .input {\n\t\tmin-height: var(--a11y-min-size);\n\t\tmin-width: var(--a11y-min-size);\n\t}\n\n\t/*\n\t * Some interactive elements should not inherit the font-family and font-size.\n\t */\n\ta,\n\tbutton,\n\th1,\n\th2,\n\th3,\n\th4,\n\th5,\n\th6,\n\tinput,\n\toption,\n\tselect,\n\ttextarea {\n\t\t/*\n\t\t * All elements should inherit the font family from his parent element.\n\t\t */\n\t\tfont-family: inherit;\n\t\t/*\n\t\t * All elements should inherit the font size from his parent element.\n\t\t */\n\t\tfont-size: inherit;\n\t}\n}\n\n@layer kol-global {\n\t/*\n\t * Dieses CSS stellt sicher, dass der Standard-Style\n\t * von A und Button resettet werden.\n\t */\n\t:is(a, button) {\n\t\tbackground-color: transparent;\n\t\tborder: none;\n\t\tmargin: 0;\n\t\tpadding: 0;\n\t\twidth: 100%; /* 100% needed for custom width from outside */\n\t}\n}\n\n@layer kol-global {\n\t:host {\n\t\t/*\n\t\t * The max-width is needed to prevent the table from overflowing the\n\t\t * parent node, if the table is wider than the parent node.\n\t\t */\n\t\tmax-width: 100%;\n\t}\n\n\t* {\n\t\t/*\n\t\t * We prefer to box-sizing: border-box for all elements.\n\t\t */\n\t\tbox-sizing: border-box;\n\t}\n\n\t/* KolSpan is a layout component with icons in all directions and a label text in the middle. */\n\tkol-span-wc {\n\t\tdisplay: grid;\n\t\tplace-items: center;\n\t}\n\n\t/* The sub span in KolSpan is the horizontal span with icon left and right and the label text in the middle. */\n\tkol-span-wc > span {\n\t\tdisplay: flex;\n\t\tplace-items: center;\n\t}\n\n\ta,\n\tbutton {\n\t\tcursor: pointer;\n\t}\n\n\t/* font-family is NOT inherited all HTML elements. */\n\tbutton,\n\tinput,\n\toption,\n\tselect,\n\ttextarea {\n\t\tfont-family: inherit;\n\t}\n\n\t/* This is the text label. */\n\t.icon-only > kol-span-wc > span > span {\n\t\tdisplay: none;\n\t}\n}\n\n@layer kol-component {\n\t:host > abbr {\n\t\tcursor: help;\n\t}\n}\n"}},1032:(t,n,e)=>{e.d(n,{a:()=>c,c:()=>r,h:()=>s,v:()=>d});var i=e(8921),o=e(8330);const l=/[a-zA-Z0-9äöüÄÖÜß]/g,a=/^\d+$/;function s(t,n=1){return function(t){var n;return"string"==typeof t&&(null===(n=t.match(l))||void 0===n?void 0:n.length)||0}(t)>=n}function r(t){return a.test(t)}const h=new Set(["string"]),d=(t,n,e={})=>{(0,o.w)(t,"_label",(t=>"string"==typeof t),h,n,function(t){var n;return{hooks:{afterPatch:(n,e,o,l)=>{var a,h;"function"==typeof(null===(a=t.hooks)||void 0===a?void 0:a.afterPatch)&&(null===(h=t.hooks)||void 0===h||h.afterPatch(n,e,o,l)),"string"==typeof n&&!1===s(n,3)&&!1===r(n)&&(0,i.a)(`The heading or label ("${n}") is not accessible. A label should consist of at least three readable characters.`),"string"==typeof n&&n.length>80&&(0,i.u)("A heading or label should not be longer than 80 characters.")},beforePatch:null===(n=t.hooks)||void 0===n?void 0:n.beforePatch}}}(e))},c=d},5059:(t,n,e)=>{e.d(n,{v:()=>o});var i=e(8792);const o=(t,n)=>{(0,i.v)(t,"_tooltipAlign",n)}}}]);