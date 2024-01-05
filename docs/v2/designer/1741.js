/*! For license information please see 1741.js.LICENSE.txt */
"use strict";(self.webpackChunk_public_ui_designer=self.webpackChunk_public_ui_designer||[]).push([[1741],{43985:(t,n,e)=>{function i(t){t.stopImmediatePropagation(),t.stopPropagation()}function o(t,n,e){n&&function(t,n,e){t.dispatchEvent(function(t,n){return new CustomEvent(`kol-${t}`,{bubbles:!0,cancelable:!0,composed:!0,detail:n})}(n,e))}(n,t,e)}e.d(n,{s:()=>i,t:()=>o})},91741:(t,n,e)=>{e.r(n),e.d(n,{kol_details:()=>d});var i=e(45509),o=e(11782),s=e(25221),a=e(43985),l=e(50495),h=e(48125);class r{constructor(t,n,e){this.detailsElement=t,this.summaryElement=n,this.contentElement=e,this.isClosing=!1,this.isExpanding=!1,this.summaryElement.addEventListener("click",this.handleSummaryClick.bind(this))}handleSummaryClick(t){t.preventDefault(),this.isClosing||!this.detailsElement.open?this.open():(this.isExpanding||this.detailsElement.open)&&this.collapse()}open(){this.detailsElement.open=!0,window.requestAnimationFrame(this.expand.bind(this))}expand(){this.isExpanding=!0,this.animateContentHeight("expand")}collapse(){this.isClosing=!0,this.animateContentHeight("collapse")}animateContentHeight(t){let n="expand"===t?0:this.contentElement.offsetHeight,e="expand"===t?this.contentElement.offsetHeight:0;this.animation&&(n=this.contentElement.offsetHeight,this.animation.cancel(),"expand"===t&&(e=this.contentElement.offsetHeight)),this.animation=this.contentElement.animate({height:[`${n}px`,`${e}px`]},{duration:matchMedia("(prefers-reduced-motion)").matches?0:250,easing:"ease-out"}),this.animation.addEventListener("finish",(()=>{this.onAnimationFinish()}),{once:!0}),this.animation.addEventListener("cancel",(()=>{"expand"===t?this.isExpanding=!1:this.isClosing=!1}),{once:!0})}onAnimationFinish(){this.detailsElement.open=this.isExpanding,this.animation=void 0,this.isClosing=!1,this.isExpanding=!1}}const d=class{constructor(t){(0,i.r)(this,t),this.catchRef=t=>{this.summaryElement=t,(0,h.a)(this.host,this.summaryElement)},this.handleToggle=t=>{clearTimeout(this.toggleTimeout),this.toggleTimeout=setTimeout((()=>{var n,e,i,o;Boolean(null===(n=this.detailsElement)||void 0===n?void 0:n.open)!==this.state._open&&(this._open=Boolean(null===(e=this.detailsElement)||void 0===e?void 0:e.open),(0,a.t)("toggle",this.host,this._open),"function"==typeof(null===(i=this.state._on)||void 0===i?void 0:i.onToggle)&&(null===(o=this.state._on)||void 0===o||o.onToggle(t,this._open)))}),25)},this._label=void 0,this._on=void 0,this._open=!1,this.state={_label:"…",_on:{}}}render(){return(0,i.h)(i.H,null,(0,i.h)("details",{ref:t=>{this.detailsElement=t},onToggle:this.handleToggle},(0,i.h)("summary",{ref:this.catchRef},(0,i.h)("kol-icon",{_label:"",_icons:"codicon codicon-chevron-right",class:"icon "+(this.state._open?"is-open":"")}),(0,i.h)("span",null,this.state._label)),(0,i.h)("div",{"aria-hidden":!1===this.state._open?"true":void 0,class:"content",ref:t=>this.contentElement=t},(0,i.h)("kol-indented-text",null,(0,i.h)("slot",null)))))}validateLabel(t){(0,o.v)(this,t)}validateOn(t){"object"==typeof t&&null!==t&&"function"==typeof t.onToggle&&(0,l.s)(this,"_on",t)}validateOpen(t){(0,s.v)(this,t)}componentWillLoad(){this.validateLabel(this._label),this.validateOn(this._on),this.validateOpen(this._open)}componentDidLoad(){if(this.detailsElement&&this.summaryElement&&this.contentElement){const t=new r(this.detailsElement,this.summaryElement,this.contentElement);this.state._open&&t.open()}}get host(){return(0,i.g)(this)}static get watchers(){return{_label:["validateLabel"],_on:["validateOn"],_open:["validateOpen"]}}};d.style={default:"/*\n * This file contains all rules for accessibility.\n */\n@layer kol-global {\n\t:host {\n\t\t/*\n\t\t * Minimum size of interactive elements.\n\t\t */\n\t\t--a11y-min-size: 44px;\n\t\t/*\n\t\t * No element should be used without a background and font color whose contrast ratio has\n\t\t * not been checked. By initially setting the background color to white and the font color\n\t\t * to black, the contrast ratio is ensured and explicit adjustment is forced.\n\t\t */\n\t\tbackground-color: white;\n\t\tcolor: black;\n\t\t/*\n\t\t * Verdana is an accessible font that can be used without requiring additional loading time.\n\t\t */\n\t\tfont-family: Verdana;\n\t}\n\n\t* {\n\t\t/*\n\t\t * This rule enables the word dividing for all texts. That is important for high zoom levels.\n\t\t */\n\t\thyphens: auto;\n\t\t/*\n\t\t * Letter spacing is required for all texts.\n\t\t */\n\t\tletter-spacing: inherit;\n\t\t/*\n\t\t * This rule enables the word dividing for all texts. That is important for high zoom levels.\n\t\t */\n\t\tword-break: break-word;\n\t\t/*\n\t\t * Word spacing is required for all texts.\n\t\t */\n\t\tword-spacing: inherit;\n\t}\n\n\t/*\n\t * All interactive elements should have a minimum size of 44px.\n\t */\n\t/* input:not([type='checkbox'], [type='radio'], [type='range']), */\n\t/* option, */\n\t/* select, */\n\t/* textarea, */\n\t[role='button'],\n\tbutton:not([role='link']),\n\tkol-input .input {\n\t\tmin-height: var(--a11y-min-size);\n\t\tmin-width: var(--a11y-min-size);\n\t}\n\n\t/*\n\t * Some interactive elements should not inherit the font-family and font-size.\n\t */\n\ta,\n\tbutton,\n\th1,\n\th2,\n\th3,\n\th4,\n\th5,\n\th6,\n\tinput,\n\toption,\n\tselect,\n\ttextarea {\n\t\t/*\n\t\t * All elements should inherit the font family from his parent element.\n\t\t */\n\t\tfont-family: inherit;\n\t\t/*\n\t\t * All elements should inherit the font size from his parent element.\n\t\t */\n\t\tfont-size: inherit;\n\t}\n}\n\n/**\n * Sometimes we need the semantic element for accessibility reasons,\n * but we don't want to show it.\n *\n * - https://www.a11yproject.com/posts/how-to-hide-content/\n */\n.visually-hidden {\n\tclip: rect(0 0 0 0);\n\tclip-path: inset(50%);\n\theight: 1px;\n\toverflow: hidden;\n\tposition: absolute;\n\twhite-space: nowrap;\n\twidth: 1px;\n}\n\n@layer kol-global {\n\t/*\n\t * Dieses CSS stellt sicher, dass der Standard-Style\n\t * von A und Button resettet werden.\n\t */\n\t:is(a, button) {\n\t\tbackground-color: transparent;\n\t\tborder: none;\n\t\tmargin: 0;\n\t\tpadding: 0;\n\t\twidth: 100%; /* 100% needed for custom width from outside */\n\t}\n\n\t/*\n\t * Ensure elements with hidden attribute to be actually not visible\n\t * @see https://meowni.ca/hidden.is.a.lie.html\n\t */\n\t[hidden] {\n\t\tdisplay: none !important;\n\t}\n}\n\n@layer kol-global {\n\t:host {\n\t\t/*\n\t\t * The max-width is needed to prevent the table from overflowing the\n\t\t * parent node, if the table is wider than the parent node.\n\t\t */\n\t\tmax-width: 100%;\n\t}\n\n\t* {\n\t\t/*\n\t\t * We prefer to box-sizing: border-box for all elements.\n\t\t */\n\t\tbox-sizing: border-box;\n\t}\n\n\t/* KolSpan is a layout component with icons in all directions and a label text in the middle. */\n\tkol-span-wc {\n\t\tdisplay: grid;\n\t\tplace-items: center;\n\t}\n\n\t/* The sub span in KolSpan is the horizontal span with icon left and right and the label text in the middle. */\n\tkol-span-wc > span {\n\t\tdisplay: flex;\n\t\tplace-items: center;\n\t}\n\n\ta,\n\tbutton {\n\t\tcursor: pointer;\n\t}\n\n\t/* This is the text label. */\n\t.icon-only > kol-span-wc > span > span {\n\t\tdisplay: none;\n\t}\n}\n\n@layer kol-component {\n\t:host {\n\t\tdisplay: block;\n\t}\n}\n\n@layer kol-component {\n\tdetails {\n\t\tdisplay: grid;\n\t}\n\n\tdetails > summary {\n\t\tcursor: pointer;\n\t\tdisplay: flex;\n\t\tplace-items: center;\n\t}\n\n\tdetails > summary > span {\n\t\tborder-bottom-color: grey;\n\t\tborder-bottom-style: solid;\n\t}\n\n\tdetails > summary:focus > span,\n\tdetails > summary:hover > span,\n\tdetails[open] > summary > span {\n\t\tborder-bottom-color: #000;\n\t}\n\n\t.content {\n\t\toverflow: hidden;\n\t}\n\n\tdetails > kol-indented-text {\n\t\tmargin: 0.25em 0 0 0.5em;\n\t}\n\n\t.icon.is-open::part(icon) {\n\t\ttransform: rotate(90deg);\n\t}\n}\n"}},11782:(t,n,e)=>{e.d(n,{a:()=>c,c:()=>h,h:()=>l,v:()=>d});var i=e(73912),o=e(50495);const s=/[a-zA-Z0-9äöüÄÖÜß]/g,a=/^\d+$/;function l(t,n=1){return function(t){var n;return"string"==typeof t&&(null===(n=t.match(s))||void 0===n?void 0:n.length)||0}(t)>=n}function h(t){return a.test(t)}const r=new Set(["string"]),d=(t,n,e={})=>{(0,o.w)(t,"_label",(t=>"string"==typeof t),r,n,function(t){var n;return{hooks:{afterPatch:(n,e,o,s)=>{var a,r;"function"==typeof(null===(a=t.hooks)||void 0===a?void 0:a.afterPatch)&&(null===(r=t.hooks)||void 0===r||r.afterPatch(n,e,o,s)),"string"==typeof n&&!1===l(n,3)&&!1===h(n)&&(0,i.a)(`The heading or label ("${n}") is not accessible. A label should consist of at least three readable characters.`),"string"==typeof n&&n.length>80&&(0,i.u)("A heading or label should not be longer than 80 characters.")},beforePatch:null===(n=t.hooks)||void 0===n?void 0:n.beforePatch}}}(e))},c=d},25221:(t,n,e)=>{e.d(n,{v:()=>o});var i=e(50495);const o=(t,n,e)=>{(0,i.a)(t,"_open",n,e)}}}]);