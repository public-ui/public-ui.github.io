/*! For license information please see 8971.js.LICENSE.txt */
"use strict";(self.webpackChunk_public_ui_designer=self.webpackChunk_public_ui_designer||[]).push([[8971],{68971:(t,n,e)=>{e.r(n),e.d(n,{kol_modal:()=>r});var i=e(42054),a=e(11032),l=e(8921),o=e(43906),s=e(28330);const r=class{constructor(t){(0,i.r)(this,t),this.onKeyDown=t=>{t&&"Escape"===t.code&&(this._activeElement=null)},this._activeElement=void 0,this._label=void 0,this._on=void 0,this._width="100%",this.state={_activeElement:null,_label:"…",_width:"100%"}}componentDidRender(){this.hostElement&&(this.state._activeElement?(0,o.e)().Modal.openModal(this.hostElement,this.state._activeElement):(0,o.e)().Modal.closeModal(this.hostElement))}disconnectedCallback(){this.hostElement&&(0,o.e)().Modal.closeModal(this.hostElement)}render(){return(0,i.h)(i.H,{ref:t=>{this.hostElement=t}},this.state._activeElement&&(0,i.h)("div",{class:"overlay"},(0,i.h)("div",{class:"modal",style:{width:this.state._width},"aria-label":this.state._label,"aria-modal":"true",role:"dialog",onKeyDown:this.onKeyDown,ref:t=>{t&&(t.setAttribute("tabindex","0"),setTimeout((()=>t.focus()),250))}},(0,i.h)("slot",null))))}validateActiveElement(t){(0,s.w)(this,"_activeElement",(t=>"object"==typeof t||null===t),new Set(["HTMLElement","null"]),t,{defaultValue:null,hooks:{afterPatch:()=>{var t;null===this._activeElement&&(null===(t=this.state._on)||void 0===t?void 0:t.onClose)&&this.state._on.onClose()}}})}validateLabel(t){(0,a.v)(this,t)}validateOn(t){if("object"==typeof t&&null!==t){(0,l.f)("[KolTabs] Prüfen, wie man auch einen EventCallback einzeln ändern kann.");const n={};"function"!=typeof t.onClose&&!0!==t.onClose||(n.onClose=t.onClose),(0,s.s)(this,"_on",n)}}validateWidth(t){(0,s.d)(this,"_width",t,{defaultValue:"100%"})}componentWillLoad(){this.validateActiveElement(this._activeElement),this.validateLabel(this._label),this.validateOn(this._on),this.validateWidth(this._width)}static get watchers(){return{_activeElement:["validateActiveElement"],_label:["validateLabel"],_on:["validateOn"],_width:["validateWidth"]}}};r.style={default:"@layer kol-global {\n\t/*\n\t * This file contains all rules for accessibility.\n\t */\n\t:host {\n\t\t/*\n\t\t * Minimum size of interactive elements.\n\t\t */\n\t\t--a11y-min-size: 44px;\n\t\tfont-size: inherit;\n\t}\n\n\t* {\n\t\t/*\n\t\t * Verdana is an accessible font that can be used without requiring additional loading time.\n\t\t */\n\t\tfont-family: Verdana;\n\t\t/*\n\t\t * This rule enables the word dividing for all texts. That is important for high zoom levels.\n\t\t */\n\t\thyphens: auto;\n\t\t/*\n\t\t * Letter spacing is required for all texts.\n\t\t */\n\t\tletter-spacing: inherit;\n\t\t/*\n\t\t * This rule enables the word dividing for all texts. That is important for high zoom levels.\n\t\t */\n\t\tword-break: break-word;\n\t\t/*\n\t\t * Word spacing is required for all texts.\n\t\t */\n\t\tword-spacing: inherit;\n\t}\n\n\t/*\n\t * All interactive elements should have a minimum size of 44px.\n\t */\n\t/* input:not([type='checkbox'], [type='radio'], [type='range']), */\n\t/* option, */\n\t/* select, */\n\t/* textarea, */\n\t[role='button'],\n\tbutton:not([role='link']),\n\tkol-input .input {\n\t\tmin-height: var(--a11y-min-size);\n\t\tmin-width: var(--a11y-min-size);\n\t}\n\n\t/*\n\t * Some interactive elements should not inherit the font-family and font-size.\n\t */\n\ta,\n\tbutton,\n\th1,\n\th2,\n\th3,\n\th4,\n\th5,\n\th6,\n\tinput,\n\toption,\n\tselect,\n\ttextarea {\n\t\t/*\n\t\t * All elements should inherit the font family from his parent element.\n\t\t */\n\t\tfont-family: inherit;\n\t\t/*\n\t\t * All elements should inherit the font size from his parent element.\n\t\t */\n\t\tfont-size: inherit;\n\t}\n}\n\n@layer kol-global {\n\t/*\n\t * Dieses CSS stellt sicher, dass der Standard-Style\n\t * von A und Button resettet werden.\n\t */\n\t:is(a, button) {\n\t\tbackground-color: transparent;\n\t\tborder: none;\n\t\tmargin: 0;\n\t\tpadding: 0;\n\t\twidth: 100%; /* 100% needed for custom width from outside */\n\t}\n}\n\n@layer kol-global {\n\t:host {\n\t\t/*\n\t\t * The max-width is needed to prevent the table from overflowing the\n\t\t * parent node, if the table is wider than the parent node.\n\t\t */\n\t\tmax-width: 100%;\n\t}\n\n\t* {\n\t\t/*\n\t\t * We prefer to box-sizing: border-box for all elements.\n\t\t */\n\t\tbox-sizing: border-box;\n\t}\n\n\t/* KolSpan is a layout component with icons in all directions and a label text in the middle. */\n\tkol-span-wc {\n\t\tdisplay: grid;\n\t\tplace-items: center;\n\t}\n\n\t/* The sub span in KolSpan is the horizontal span with icon left and right and the label text in the middle. */\n\tkol-span-wc > span {\n\t\tdisplay: flex;\n\t\tplace-items: center;\n\t}\n\n\ta,\n\tbutton {\n\t\tcursor: pointer;\n\t}\n\n\t/* font-family is NOT inherited all HTML elements. */\n\tbutton,\n\tinput,\n\toption,\n\tselect,\n\ttextarea {\n\t\tfont-family: inherit;\n\t}\n\n\t/* This is the text label. */\n\t.icon-only > kol-span-wc > span > span {\n\t\tdisplay: none;\n\t}\n}\n\n@layer kol-component {\n\t.overlay {\n\t\tbackground-color: rgba(0, 0, 0, 0.33);\n\t\tdisplay: flex;\n\t\theight: 100%;\n\t\tinset: 0;\n\t\tposition: fixed;\n\t\twidth: 100%;\n\t\tz-index: 100;\n\t}\n\n\t.modal {\n\t\tmargin: auto;\n\t\tmax-height: 100%;\n\t\tmax-width: 100%;\n\t}\n}\n"}},11032:(t,n,e)=>{e.d(n,{a:()=>c,c:()=>r,h:()=>s,v:()=>d});var i=e(8921),a=e(28330);const l=/[a-zA-Z0-9äöüÄÖÜß]/g,o=/^\d+$/;function s(t,n=1){return function(t){var n;return"string"==typeof t&&(null===(n=t.match(l))||void 0===n?void 0:n.length)||0}(t)>=n}function r(t){return o.test(t)}const h=new Set(["string"]),d=(t,n,e={})=>{(0,a.w)(t,"_label",(t=>"string"==typeof t),h,n,function(t){var n;return{hooks:{afterPatch:(n,e,a,l)=>{var o,h;"function"==typeof(null===(o=t.hooks)||void 0===o?void 0:o.afterPatch)&&(null===(h=t.hooks)||void 0===h||h.afterPatch(n,e,a,l)),"string"==typeof n&&!1===s(n,3)&&!1===r(n)&&(0,i.a)(`The heading or label ("${n}") is not accessible. A label should consist of at least three readable characters.`),"string"==typeof n&&n.length>80&&(0,i.u)("A heading or label should not be longer than 80 characters.")},beforePatch:null===(n=t.hooks)||void 0===n?void 0:n.beforePatch}}}(e))},c=d}}]);