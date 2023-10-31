/*! For license information please see 25944.2b55eb17.js.LICENSE.txt */ "use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[25944],{25944:(t,n,e)=>{e.r(n),e.d(n,{kol_link_group:()=>h});var i=e(97814),a=e(26344),l=e(81682),o=e(4306),s=e(79636);const r=t=>{const n=[];return t.links.map(((e,a)=>{n.push((0,i.h)("li",{key:a,class:{ident:a>0&&"vertical"===t.orientation,"list-none":0===a&&"horizontal"===t.orientation},style:{listStyleType:t.listStyleType}},(0,i.h)("kol-link",Object.assign({},e))))})),n},h=class{constructor(t){(0,i.r)(this,t),this.isUl=!0,this._listStyleType=void 0,this._label=void 0,this._links=void 0,this._orientation="vertical",this.state={_label:"\u2026",_listStyleType:"disc",_links:[],_orientation:"vertical"}}render(){return(0,i.h)("nav",{"aria-label":this.state._label,class:{vertical:"vertical"===this.state._orientation,horizontal:"horizontal"===this.state._orientation}},!1===this.isUl?(0,i.h)("ol",null,(0,i.h)(r,{links:this.state._links,orientation:this.state._orientation,listStyleType:this.state._listStyleType})):(0,i.h)("ul",null,(0,i.h)(r,{links:this.state._links,orientation:this.state._orientation,listStyleType:this.state._listStyleType})))}validateLabel(t,n,e=!1){e||(0,o.r)(this.state._label),(0,a.v)(this,t),(0,o.a)(this.state._label)}validateListStyleType(t){(0,l.w)(this,"_listStyleType",(t=>{switch(t){case"disc":case"circle":case"square":case"none":return this.isUl=!0,!0;case"decimal":case"decimal-leading-zero":case"lower-alpha":case"lower-latin":case"lower-greek":case"lower-roman":case"upper-alpha":case"upper-latin":case"upper-roman":return this.isUl=!1,!0;default:return!1}}),new Set(["https://www.w3schools.com/tags/tag_ol.asp"]),t)}validateLinks(t){(0,s.w)("KolLinkGroup",this,t)}validateOrientation(t){(0,l.w)(this,"_orientation",(t=>"horizontal"===t||"vertical"===t),new Set(["Orientation {horizontal, vertical}"]),t,{defaultValue:"vertical"})}componentWillLoad(){this.validateLabel(this._label,void 0,!0),this.validateListStyleType(this._listStyleType),this.validateLinks(this._links),this.validateOrientation(this._orientation)}disconnectedCallback(){(0,o.r)(this.state._label)}static get watchers(){return{_label:["validateLabel"],_listStyleType:["validateListStyleType"],_links:["validateLinks"],_orientation:["validateOrientation"]}}};h.style={default:"@layer kol-global {\n\t/*\n\t * This file contains all rules for accessibility.\n\t */\n\t:host {\n\t\t/*\n\t\t * Minimum size of interactive elements.\n\t\t */\n\t\t--a11y-min-size: 44px;\n\t\tfont-size: inherit;\n\t}\n\n\t* {\n\t\t/*\n\t\t * Verdana is an accessible font that can be used without requiring additional loading time.\n\t\t */\n\t\tfont-family: Verdana;\n\t\t/*\n\t\t * This rule enables the word dividing for all texts. That is important for high zoom levels.\n\t\t */\n\t\thyphens: auto;\n\t\t/*\n\t\t * Letter spacing is required for all texts.\n\t\t */\n\t\tletter-spacing: inherit;\n\t\t/*\n\t\t * This rule enables the word dividing for all texts. That is important for high zoom levels.\n\t\t */\n\t\tword-break: break-word;\n\t\t/*\n\t\t * Word spacing is required for all texts.\n\t\t */\n\t\tword-spacing: inherit;\n\t}\n\n\t/*\n\t * All interactive elements should have a minimum size of 44px.\n\t */\n\t/* input:not([type='checkbox'], [type='radio'], [type='range']), */\n\t/* option, */\n\t/* select, */\n\t/* textarea, */\n\t[role='button'],\n\tbutton:not([role='link']),\n\tkol-input .input {\n\t\tmin-height: var(--a11y-min-size);\n\t\tmin-width: var(--a11y-min-size);\n\t}\n\n\t/*\n\t * Some interactive elements should not inherit the font-family and font-size.\n\t */\n\ta,\n\tbutton,\n\th1,\n\th2,\n\th3,\n\th4,\n\th5,\n\th6,\n\tinput,\n\toption,\n\tselect,\n\ttextarea {\n\t\t/*\n\t\t * All elements should inherit the font family from his parent element.\n\t\t */\n\t\tfont-family: inherit;\n\t\t/*\n\t\t * All elements should inherit the font size from his parent element.\n\t\t */\n\t\tfont-size: inherit;\n\t}\n}\n\n@layer kol-global {\n\t/*\n\t * Dieses CSS stellt sicher, dass der Standard-Style\n\t * von A und Button resettet werden.\n\t */\n\t:is(a, button) {\n\t\tbackground-color: transparent;\n\t\tborder: none;\n\t\tmargin: 0;\n\t\tpadding: 0;\n\t\twidth: 100%; /* 100% needed for custom width from outside */\n\t}\n}\n\n@layer kol-global {\n\t:host {\n\t\t/*\n\t\t * The max-width is needed to prevent the table from overflowing the\n\t\t * parent node, if the table is wider than the parent node.\n\t\t */\n\t\tmax-width: 100%;\n\t}\n\n\t* {\n\t\t/*\n\t\t * We prefer to box-sizing: border-box for all elements.\n\t\t */\n\t\tbox-sizing: border-box;\n\t}\n\n\t/* KolSpan is a layout component with icons in all directions and a label text in the middle. */\n\tkol-span-wc {\n\t\tdisplay: grid;\n\t\tplace-items: center;\n\t}\n\n\t/* The sub span in KolSpan is the horizontal span with icon left and right and the label text in the middle. */\n\tkol-span-wc > span {\n\t\tdisplay: flex;\n\t\tplace-items: center;\n\t}\n\n\ta,\n\tbutton {\n\t\tcursor: pointer;\n\t}\n\n\t/* font-family is NOT inherited all HTML elements. */\n\tbutton,\n\tinput,\n\toption,\n\tselect,\n\ttextarea {\n\t\tfont-family: inherit;\n\t}\n\n\t/* This is the text label. */\n\t.icon-only > kol-span-wc > span > span {\n\t\tdisplay: none;\n\t}\n}\n\n@layer kol-component {\n\tul {\n\t\tlist-style: none;\n\t\tmargin: 0;\n\t\tpadding: 0;\n\t}\n\n\tnav.horizontal ul {\n\t\tdisplay: flex;\n\t\tflex-wrap: wrap;\n\t}\n\n\tnav.horizontal li {\n\t\tmargin-left: 1.25rem;\n\t\tmargin-right: 0.25rem;\n\t}\n\n\tnav.horizontal li:first-child {\n\t\tmargin-left: 0;\n\t}\n\n\tnav.horizontal li:last-child {\n\t\tmargin-right: 0;\n\t}\n\n\tnav.vertical li {\n\t\tmargin-left: 1.75rem;\n\t\tmargin-right: 0.5rem;\n\t}\n\n\tli.list-none {\n\t\tlist-style-type: none !important;\n\t\tmargin-left: 0;\n\t}\n}\n"}},26344:(t,n,e)=>{e.d(n,{a:()=>c,c:()=>r,h:()=>s,v:()=>d});var i=e(76772),a=e(81682);const l=/[a-zA-Z0-9\xe4\xf6\xfc\xc4\xd6\xdc\xdf]/g,o=/^\d+$/;function s(t,n=1){return function(t){var n;return"string"==typeof t&&(null===(n=t.match(l))||void 0===n?void 0:n.length)||0}(t)>=n}function r(t){return o.test(t)}const h=new Set(["string"]),d=(t,n,e={})=>{(0,a.w)(t,"_label",(t=>"string"==typeof t),h,n,function(t){var n;return{hooks:{afterPatch:(n,e,a,l)=>{var o,h;"function"==typeof(null===(o=t.hooks)||void 0===o?void 0:o.afterPatch)&&(null===(h=t.hooks)||void 0===h||h.afterPatch(n,e,a,l)),"string"==typeof n&&!1===s(n,3)&&!1===r(n)&&(0,i.a)(`The heading or label ("${n}") is not accessible. A label should consist of at least three readable characters.`),"string"==typeof n&&n.length>80&&(0,i.u)("A heading or label should not be longer than 80 characters.")},beforePatch:null===(n=t.hooks)||void 0===n?void 0:n.beforePatch}}}(e))},c=d},4306:(t,n,e)=>{e.d(n,{a:()=>a,r:()=>l});const i=new Set;function a(t){i.has(t)?console.error(`There already is a nav element with the label "${t}"`):i.add(t)}function l(t){i.delete(t)}},79636:(t,n,e)=>{e.d(n,{w:()=>l});var i=e(76772),a=e(81682);const l=(t,n,e)=>{(0,a.c)(n,"_links",(t=>"object"==typeof t&&("string"==typeof t._href||"string"==typeof t._label)),e),(0,i.c)(t,n.state._links.length)}}}]);