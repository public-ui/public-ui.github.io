/*! For license information please see 252.js.LICENSE.txt */
"use strict";(self.webpackChunk_public_ui_sample_react=self.webpackChunk_public_ui_sample_react||[]).push([[252],{252:(t,n,e)=>{e.r(n),e.d(n,{kol_accordion:()=>c});var i=e(5946),o=e(3580),a=e(4725),s=e(1824),l=e(6049),r=e(7363),h=e(8125),d=e(5005);(0,s.f)("[KolAccordion] Anfrage nach einer KolAccordionGroup bei dem immer nur ein Accordion geöffnet ist.\n\n- onClick auf der KolAccordion anwenden\n- Click-Event prüft den _open-Status der Accordions\n- Logik Öffnet und Schließt entsprechend"),(0,s.f)("[KolAccordion] Tab-Sperre des Inhalts im geschlossenen Zustand.");const c=class{constructor(t){(0,i.r)(this,t),this.nonce=(0,l.n)(),this.catchRef=t=>{(0,h.a)(this.host,t)},this.onClick=t=>{this._open=!this._open,setTimeout((()=>{var n;"function"==typeof(null===(n=this.state._on)||void 0===n?void 0:n.onClick)&&this.state._on.onClick(t,!0===this._open)}))},this._label=void 0,this._level=1,this._on=void 0,this._open=!1,this.state={_label:"…",_level:1}}render(){return(0,i.h)(i.H,null,(0,i.h)("div",{class:{accordion:!0,open:!0===this.state._open}},(0,i.h)("kol-heading-wc",{_label:"",_level:this.state._level,class:"accordion-heading"},(0,i.h)("kol-button-wc",{class:"accordion-button",ref:this.catchRef,slot:"expert",_ariaControls:this.nonce,_ariaExpanded:this.state._open,_icons:this.state._open?"codicon codicon-remove":"codicon codicon-add",_label:this.state._label,_on:{onClick:this.onClick}})),(0,i.h)("div",{class:"wrapper"},(0,i.h)("div",{class:"animation-wrapper"},(0,i.h)("div",{"aria-hidden":!1===this.state._open?"true":void 0,class:"content",id:this.nonce},(0,i.h)("slot",null))))))}validateLabel(t){(0,o.v)(this,t)}validateLevel(t){(0,d.w)(this,t)}validateOn(t){"object"==typeof t&&null!==t&&"function"==typeof t.onClick&&(0,r.s)(this,"_on",t)}validateOpen(t){(0,a.v)(this,t)}componentWillLoad(){this.validateLabel(this._label),this.validateLevel(this._level),this.validateOn(this._on),this.validateOpen(this._open)}get host(){return(0,i.g)(this)}static get watchers(){return{_label:["validateLabel"],_level:["validateLevel"],_on:["validateOn"],_open:["validateOpen"]}}};c.style={default:"/*\n * This file contains all rules for accessibility.\n */\n@layer kol-global {\n\t:host {\n\t\t/*\n\t\t * Minimum size of interactive elements.\n\t\t */\n\t\t--a11y-min-size: 44px;\n\t\t/*\n\t\t * Verdana is an accessible font that can be used without requiring additional loading time.\n\t\t */\n\t\tfont-family: Verdana;\n\t}\n\n\t* {\n\t\t/*\n\t\t * This rule enables the word dividing for all texts. That is important for high zoom levels.\n\t\t */\n\t\thyphens: auto;\n\t\t/*\n\t\t * Letter spacing is required for all texts.\n\t\t */\n\t\tletter-spacing: inherit;\n\t\t/*\n\t\t * This rule enables the word dividing for all texts. That is important for high zoom levels.\n\t\t */\n\t\tword-break: break-word;\n\t\t/*\n\t\t * Word spacing is required for all texts.\n\t\t */\n\t\tword-spacing: inherit;\n\t}\n\n\t/*\n\t * All interactive elements should have a minimum size of 44px.\n\t */\n\t/* input:not([type='checkbox'], [type='radio'], [type='range']), */\n\t/* option, */\n\t/* select, */\n\t/* textarea, */\n\t[role='button'],\n\tbutton:not([role='link']),\n\tkol-input .input {\n\t\tmin-height: var(--a11y-min-size);\n\t\tmin-width: var(--a11y-min-size);\n\t}\n\n\t/*\n\t * Some interactive elements should not inherit the font-family and font-size.\n\t */\n\ta,\n\tbutton,\n\th1,\n\th2,\n\th3,\n\th4,\n\th5,\n\th6,\n\tinput,\n\toption,\n\tselect,\n\ttextarea {\n\t\t/*\n\t\t * All elements should inherit the font family from his parent element.\n\t\t */\n\t\tfont-family: inherit;\n\t\t/*\n\t\t * All elements should inherit the font size from his parent element.\n\t\t */\n\t\tfont-size: inherit;\n\t}\n}\n\n/**\n * Sometimes we need the semantic element for accessibility reasons,\n * but we don't want to show it.\n *\n * - https://www.a11yproject.com/posts/how-to-hide-content/\n */\n.visually-hidden {\n\tclip: rect(0 0 0 0);\n\tclip-path: inset(50%);\n\theight: 1px;\n\toverflow: hidden;\n\tposition: absolute;\n\twhite-space: nowrap;\n\twidth: 1px;\n}\n\n@layer kol-global {\n\t/*\n\t * Dieses CSS stellt sicher, dass der Standard-Style\n\t * von A und Button resettet werden.\n\t */\n\t:is(a, button) {\n\t\tbackground-color: transparent;\n\t\tborder: none;\n\t\tmargin: 0;\n\t\tpadding: 0;\n\t\twidth: 100%; /* 100% needed for custom width from outside */\n\t}\n}\n\n@layer kol-global {\n\t:host {\n\t\t/*\n\t\t * The max-width is needed to prevent the table from overflowing the\n\t\t * parent node, if the table is wider than the parent node.\n\t\t */\n\t\tmax-width: 100%;\n\t}\n\n\t* {\n\t\t/*\n\t\t * We prefer to box-sizing: border-box for all elements.\n\t\t */\n\t\tbox-sizing: border-box;\n\t}\n\n\t/* KolSpan is a layout component with icons in all directions and a label text in the middle. */\n\tkol-span-wc {\n\t\tdisplay: grid;\n\t\tplace-items: center;\n\t}\n\n\t/* The sub span in KolSpan is the horizontal span with icon left and right and the label text in the middle. */\n\tkol-span-wc > span {\n\t\tdisplay: flex;\n\t\tplace-items: center;\n\t}\n\n\ta,\n\tbutton {\n\t\tcursor: pointer;\n\t}\n\n\t/* This is the text label. */\n\t.icon-only > kol-span-wc > span > span {\n\t\tdisplay: none;\n\t}\n}\n\n@layer kol-component {\n\t:host {\n\t\tdisplay: block;\n\t}\n}\n\n@layer kol-component {\n\t/* For animation technique see https://css-tricks.com/css-grid-can-do-auto-height-transitions/ */\n\t.wrapper {\n\t\tdisplay: grid;\n\t\tgrid-template-rows: 0fr;\n\t\toverflow: hidden;\n\t\ttransition: grid-template-rows 0.3s;\n\t}\n\n\t.accordion.open .wrapper {\n\t\tgrid-template-rows: 1fr;\n\t}\n\n\t.animation-wrapper {\n\t\tmin-height: 0;\n\t\ttransition: visibility 0.3s;\n\t\t/* This property is important to keep in sync with the visual transition (template-rows). Without it interactive elements within the accordion would stay focusable. */\n\t\tvisibility: hidden;\n\t}\n\n\t.accordion.open .animation-wrapper {\n\t\tvisibility: visible;\n\t}\n\n\t@media (prefers-reduced-motion) {\n\t\t.animation-wrapper,\n\t\t.wrapper {\n\t\t\ttransition-duration: 0s;\n\t\t}\n\t} /*\n * Inside a button, the caption text is always centered.\n * So we have to align the text to the left.\n */\n\t.accordion kol-heading-wc kol-button-wc button kol-span-wc {\n\t\tjustify-items: start;\n\t}\n}\n"}},3580:(t,n,e)=>{e.d(n,{a:()=>c,c:()=>r,h:()=>l,v:()=>d});var i=e(1824),o=e(7363);const a=/[a-zA-Z0-9äöüÄÖÜß]/g,s=/^\d+$/;function l(t,n=1){return function(t){var n;return"string"==typeof t&&(null===(n=t.match(a))||void 0===n?void 0:n.length)||0}(t)>=n}function r(t){return s.test(t)}const h=new Set(["string"]),d=(t,n,e={})=>{(0,o.w)(t,"_label",(t=>"string"==typeof t),h,n,function(t){var n;return{hooks:{afterPatch:(n,e,o,a)=>{var s,h;"function"==typeof(null===(s=t.hooks)||void 0===s?void 0:s.afterPatch)&&(null===(h=t.hooks)||void 0===h||h.afterPatch(n,e,o,a)),"string"==typeof n&&!1===l(n,3)&&!1===r(n)&&(0,i.a)(`The heading or label ("${n}") is not accessible. A label should consist of at least three readable characters.`),"string"==typeof n&&n.length>80&&(0,i.u)("A heading or label should not be longer than 80 characters.")},beforePatch:null===(n=t.hooks)||void 0===n?void 0:n.beforePatch}}}(e))},c=d},4725:(t,n,e)=>{e.d(n,{v:()=>o});var i=e(7363);const o=(t,n,e)=>{(0,i.a)(t,"_open",n,e)}},5005:(t,n,e)=>{e.d(n,{w:()=>a});var i=e(7363);const o=[0,1,2,3,4,5,6],a=(t,n)=>{(0,i.w)(t,"_level",(t=>"number"==typeof t&&o.includes(t)),new Set([`Number {${o.join(", ")}`]),n,{defaultValue:1,required:!0})}}}]);