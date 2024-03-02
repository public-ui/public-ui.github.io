/*! For license information please see 37696.882bcef3.js.LICENSE.txt */ "use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[37696],{37696:(n,e,t)=>{t.r(e),t.d(e,{kol_link_group:()=>r});var i=t(91388),a=t(32924),l=t(79492),s=t(5860);const o=n=>{const e=[];return n.links.map(((t,a)=>{e.push((0,i.h)("li",{key:a,class:{ident:a>0&&"vertical"===n.orientation,"list-none":0===a&&"horizontal"===n.orientation},style:{listStyleType:n.listStyleType}},(0,i.h)("kol-link",Object.assign({},t))))})),e},r=class{constructor(n){(0,i.r)(this,n),this.isUl=!0,this._listStyleType=void 0,this._label=void 0,this._links=void 0,this._orientation="vertical",this.state={_label:"",_listStyleType:"disc",_links:[],_orientation:"vertical"}}render(){return(0,i.h)("nav",{key:"f9cf36c7862b635d4f54caa2e734893e49709a56","aria-label":this.state._label,class:{vertical:"vertical"===this.state._orientation,horizontal:"horizontal"===this.state._orientation}},!1===this.isUl?(0,i.h)("ol",null,(0,i.h)(o,{links:this.state._links,orientation:this.state._orientation,listStyleType:this.state._listStyleType})):(0,i.h)("ul",null,(0,i.h)(o,{links:this.state._links,orientation:this.state._orientation,listStyleType:this.state._listStyleType})))}validateLabel(n,e,t=!1){t||(0,l.r)(this.state._label),(0,a.v)(this,n,{required:!0}),(0,l.a)(this.state._label)}validateListStyleType(n){(0,a.w)(this,"_listStyleType",(n=>{switch(n){case"disc":case"circle":case"square":case"none":return this.isUl=!0,!0;case"decimal":case"decimal-leading-zero":case"lower-alpha":case"lower-latin":case"lower-greek":case"lower-roman":case"upper-alpha":case"upper-latin":case"upper-roman":return this.isUl=!1,!0;default:return!1}}),new Set(["https://www.w3schools.com/tags/tag_ol.asp"]),n,{defaultValue:"disc"})}validateLinks(n){(0,s.w)("KolLinkGroup",this,n)}validateOrientation(n){(0,a.w)(this,"_orientation",(n=>"horizontal"===n||"vertical"===n),new Set(["Orientation {horizontal, vertical}"]),n,{defaultValue:"vertical"})}componentWillLoad(){this.validateLabel(this._label,void 0,!0),this.validateListStyleType(this._listStyleType),this.validateLinks(this._links),this.validateOrientation(this._orientation)}disconnectedCallback(){(0,l.r)(this.state._label)}static get watchers(){return{_label:["validateLabel"],_listStyleType:["validateListStyleType"],_links:["validateLinks"],_orientation:["validateOrientation"]}}};r.style={default:"/*\n * This file contains all rules for accessibility.\n */\n@layer kol-global {\n :host {\n /*\n * Minimum size of interactive elements.\n */\n --a11y-min-size: 44px;\n /*\n * No element should be used without a background and font color whose contrast ratio has\n * not been checked. By initially setting the background color to white and the font color\n * to black, the contrast ratio is ensured and explicit adjustment is forced.\n */\n background-color: white;\n color: black;\n /*\n * Verdana is an accessible font that can be used without requiring additional loading time.\n */\n font-family: Verdana;\n }\n * {\n /*\n * This rule enables the word dividing for all texts. That is important for high zoom levels.\n */\n hyphens: auto;\n /*\n * Letter spacing is required for all texts.\n */\n letter-spacing: inherit;\n /*\n * This rule enables the word dividing for all texts. That is important for high zoom levels.\n */\n word-break: break-word;\n /*\n * Word spacing is required for all texts.\n */\n word-spacing: inherit;\n }\n /*\n * All interactive elements should have a minimum size of 44px.\n */\n /* input:not([type='checkbox'], [type='radio'], [type='range']), */\n /* option, */\n /* select, */\n /* textarea, */\n [role=button],\n button:not([role=link]),\n kol-input .input {\n min-height: var(--a11y-min-size);\n min-width: var(--a11y-min-size);\n }\n /*\n * Some interactive elements should not inherit the font-family and font-size.\n */\n a,\n button,\n h1,\n h2,\n h3,\n h4,\n h5,\n h6,\n input,\n option,\n select,\n textarea {\n /*\n * All elements should inherit the font family from his parent element.\n */\n font-family: inherit;\n /*\n * All elements should inherit the font size from his parent element.\n */\n font-size: inherit;\n }\n}\n/**\n * Sometimes we need the semantic element for accessibility reasons,\n * but we don't want to show it.\n *\n * - https://www.a11yproject.com/posts/how-to-hide-content/\n */\n.visually-hidden {\n clip: rect(0 0 0 0);\n clip-path: inset(50%);\n height: 1px;\n overflow: hidden;\n position: absolute;\n white-space: nowrap;\n width: 1px;\n}\n\n@layer kol-global {\n /*\n * Dieses CSS stellt sicher, dass der Standard-Style\n * von A und Button resettet werden.\n */\n :is(a, button) {\n background-color: transparent;\n border: none;\n margin: 0;\n padding: 0;\n width: 100%; /* 100% needed for custom width from outside */\n }\n /*\n * Ensure elements with hidden attribute to be actually not visible\n * @see https://meowni.ca/hidden.is.a.lie.html\n */\n [hidden] {\n display: none !important;\n }\n}\n@layer kol-global {\n :host {\n /*\n * The max-width is needed to prevent the table from overflowing the\n * parent node, if the table is wider than the parent node.\n */\n max-width: 100%;\n }\n * {\n /*\n * We prefer to box-sizing: border-box for all elements.\n */\n box-sizing: border-box;\n }\n /* KolSpan is a layout component with icons in all directions and a label text in the middle. */\n kol-span-wc {\n display: grid;\n place-items: center;\n }\n /* The sub span in KolSpan is the horizontal span with icon left and right and the label text in the middle. */\n kol-span-wc > span {\n display: flex;\n place-items: center;\n }\n a,\n button {\n cursor: pointer;\n }\n .hidden {\n display: none;\n visibility: hidden;\n }\n /* This is the text label. */\n .hide-label > kol-span-wc > span > span {\n display: none;\n }\n /* Reset browser agent style. */\n button:disabled {\n color: unset;\n }\n .disabled label,\n .disabled:focus-within label,\n [aria-disabled=true],\n [aria-disabled=true]:focus,\n [disabled],\n [disabled]:focus {\n cursor: not-allowed !important;\n opacity: 0.5 !important;\n outline: none !important;\n }\n [aria-disabled=true]:focus kol-span-wc,\n [disabled]:focus kol-span-wc {\n outline: none !important;\n }\n}\n@layer kol-component {\n ul {\n list-style: none;\n margin: 0;\n padding: 0;\n }\n nav.horizontal ul {\n display: flex;\n flex-wrap: wrap;\n }\n nav.horizontal li {\n margin-left: 1.25rem;\n margin-right: 0.25rem;\n }\n nav.horizontal li:first-child {\n margin-left: 0;\n }\n nav.horizontal li:last-child {\n margin-right: 0;\n }\n nav.vertical li {\n margin-left: 1.75rem;\n margin-right: 0.5rem;\n }\n li.list-none {\n list-style-type: none !important;\n margin-left: 0;\n }\n}"}},79492:(n,e,t)=>{t.d(e,{a:()=>a,r:()=>l});const i=new Set;function a(n){i.has(n)?console.error(`There already is a nav element with the label "${n}"`):i.add(n)}function l(n){i.delete(n)}},5860:(n,e,t)=>{t.d(e,{w:()=>a});var i=t(32924);const a=(n,e,t)=>{(0,i.y)(e,"_links",(n=>"object"==typeof n&&("string"==typeof n._href||"string"==typeof n._label)),t),(0,i.z)(n,e.state._links.length)}}}]);