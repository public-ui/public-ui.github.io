/*! For license information please see 23776.5db2bb98.js.LICENSE.txt */ "use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[23776],{89656:(n,t,e)=>{e.d(t,{i:()=>r,n:()=>d,r:()=>l});var o=e(65224),i=e(28968),a=e(20444);const s=()=>{let n=(0,a.d)().KoliBri;return void 0===n&&(n={},Object.defineProperty((0,a.d)(),"KoliBri",{value:n,writable:!1})),n},r=()=>{(()=>{const n=(0,a.g)().querySelector('meta[name="kolibri"]');if(n&&n.hasAttribute("content")){const t=n.getAttribute("content");"string"==typeof t&&((0,a.s)(t.includes("dev-mode=true")),(0,a.b)(t.includes("experimental-mode=true")),(0,a.c)(t.includes("color-contrast-analysis=true")))}})(),a.L.debug(`\n,--. ,--. ,--. ,--. ,-----. ,--.\n| .' / ,---. | | \`--' | |) /_ ,--.--. \`--'\n| . ' | .-. | | | ,--. | .-. \\ | .--' ,--.\n| |\\ \\ | '-' | | | | | | '--' / | | | |\n\`--' \`--\xb4 \`---\xb4 \`--' \`--' \`------\xb4 \`--' \`--'\n\ud83d\udeb9 The accessible HTML-Standard | \ud83d\udc49 https://public-ui.github.io | ${o.E.kolibriVersion}\n\t`,{forceLog:!0})},l=()=>{!0!==s().adviceShown&&(Object.defineProperty(s(),"adviceShown",{get:function(){return!0}}),a.L.debug("\nYou are using the KoliBri component library. If you have any suggestions for improvement or find a problem, please contact us:\n\nTicket: https://github.com/public-ui/kolibri/issues/new/choose (for privacy reasons, please use email)\nEmail: kolibri@itzbund.de\n"))};let d=()=>Math.floor(16777215*Math.random()).toString(16);"test"===i.p&&(d=()=>"nonce")},23776:(n,t,e)=>{e.r(t),e.d(t,{kol_badge:()=>l});var o=e(65224),i=e(63792),a=e(89656),s=e(10748),r=e(70728);(0,r.f)("[KolBadge] Optimierung des _color-Properties (rgba, rgb, hex usw.).");const l=class{constructor(n){(0,o.r)(this,n),this.bgColorStr="#000",this.colorStr="#fff",this.id=(0,a.n)(),this.handleColorChange=n=>{const t=(0,s.h)(n);this.bgColorStr=t.backgroundColor,this.colorStr=t.foregroundColor},this._color="#000",this._icons=void 0,this._label=void 0,this._smartButton=void 0,this.state={_color:{backgroundColor:"#000",foregroundColor:"#fff"}}}renderSmartButton(n){return(0,o.h)(i.c,{_ariaControls:this.id,_customClass:n._customClass,_disabled:n._disabled,_hideLabel:!0,_icons:n._icons,_id:n._id,_label:n._label,_on:n._on,_tooltipAlign:n._tooltipAlign,_variant:n._variant})}render(){const n="object"==typeof this.state._smartButton&&null!==this.state._smartButton;return(0,o.h)(o.H,{key:"0b334746c26463bbc697f08077e165e56b34a97f",class:"kol-badge"},(0,o.h)("span",{key:"83210f467b224cb691d844a0311f4a31a1ad6e79",class:{"smart-button":"object"==typeof this.state._smartButton&&null!==this.state._smartButton},style:{backgroundColor:this.bgColorStr,color:this.colorStr}},(0,o.h)(i.f,{key:"d5a3248d67baa494d9671e0da7de918511af084b",id:n?this.id:void 0,_allowMarkdown:!0,_icons:this._icons,_label:this._label}),n&&this.renderSmartButton(this.state._smartButton)))}validateColor(n){(0,s.v)(this,n,{defaultValue:"#000",hooks:{beforePatch:this.handleColorChange}})}validateSmartButton(n){(0,r.o)(n,(()=>{try{n=(0,r.p)(n)}catch(n){}(0,r.s)(this,"_smartButton",n)}))}componentWillLoad(){this.validateColor(this._color),this.validateSmartButton(this._smartButton)}static get watchers(){return{_color:["validateColor"],_smartButton:["validateSmartButton"]}}};l.style={default:"/*\n * This file contains all rules for accessibility.\n */\n@layer kol-global {\n :host {\n /*\n * Minimum size of interactive elements.\n */\n --a11y-min-size: 44px;\n /*\n * No element should be used without a background and font color whose contrast ratio has\n * not been checked. By initially setting the background color to white and the font color\n * to black, the contrast ratio is ensured and explicit adjustment is forced.\n */\n background-color: white;\n color: black;\n /*\n * Verdana is an accessible font that can be used without requiring additional loading time.\n */\n font-family: Verdana;\n }\n * {\n /*\n * This rule enables the word dividing for all texts. That is important for high zoom levels.\n */\n hyphens: auto;\n /*\n * Letter spacing is required for all texts.\n */\n letter-spacing: inherit;\n /*\n * This rule enables the word dividing for all texts. That is important for high zoom levels.\n */\n word-break: break-word;\n /*\n * Word spacing is required for all texts.\n */\n word-spacing: inherit;\n }\n /*\n * All interactive elements should have a minimum size of 44px.\n */\n /* input:not([type='checkbox'], [type='radio'], [type='range']), */\n /* option, */\n /* select, */\n /* textarea, */\n [role=button],\n button:not([role=link]),\n .kol-input .input {\n min-height: var(--a11y-min-size);\n min-width: var(--a11y-min-size);\n }\n /*\n * Some interactive elements should not inherit the font-family and font-size.\n */\n a,\n button,\n h1,\n h2,\n h3,\n h4,\n h5,\n h6,\n input,\n option,\n select,\n textarea {\n /*\n * All elements should inherit the font family from his parent element.\n */\n font-family: inherit;\n /*\n * All elements should inherit the font size from his parent element.\n */\n font-size: inherit;\n }\n}\n/**\n * Sometimes we need the semantic element for accessibility reasons,\n * but we don't want to show it.\n *\n * - https://www.a11yproject.com/posts/how-to-hide-content/\n */\n.visually-hidden {\n clip: rect(0 0 0 0);\n clip-path: inset(50%);\n height: 1px;\n overflow: hidden;\n position: absolute;\n white-space: nowrap;\n width: 1px;\n}\n\n@layer kol-global {\n /*\n * Dieses CSS stellt sicher, dass der Standard-Style\n * von A und Button resettet werden.\n */\n :is(a, button) {\n background-color: transparent;\n border: none;\n margin: 0;\n padding: 0;\n width: 100%; /* 100% needed for custom width from outside */\n }\n /*\n * Ensure elements with hidden attribute to be actually not visible\n * @see https://meowni.ca/hidden.is.a.lie.html\n */\n [hidden] {\n display: none !important;\n }\n}\n@layer kol-global {\n :host {\n /*\n * The max-width is needed to prevent the table from overflowing the\n * parent node, if the table is wider than the parent node.\n */\n max-width: 100%;\n }\n * {\n /*\n * We prefer to box-sizing: border-box for all elements.\n */\n box-sizing: border-box;\n }\n /* KolSpan is a layout component with icons in all directions and a label text in the middle. */\n .kol-span-wc {\n display: grid;\n place-items: center;\n }\n /* The sub span in KolSpan is the horizontal span with icon left and right and the label text in the middle. */\n .kol-span-wc > span {\n display: flex;\n place-items: center;\n }\n a,\n button {\n cursor: pointer;\n }\n /* This is the text label. */\n .hide-label > .kol-span-wc > span > span {\n display: none;\n }\n /* Reset browser agent style. */\n button:disabled {\n color: unset;\n }\n .disabled label,\n .disabled:focus-within label,\n [aria-disabled=true],\n [aria-disabled=true]:focus,\n [disabled],\n [disabled]:focus {\n cursor: not-allowed;\n opacity: 0.5;\n outline: none;\n }\n [aria-disabled=true]:focus .kol-span-wc,\n [disabled]:focus .kol-span-wc {\n outline: none !important;\n }\n}\n@layer kol-component {\n /* :host implicitly inherits font-size, e.g. for usage in headlines */\n :host > span {\n display: inline-flex;\n place-items: center;\n /* Visible with forced colors */\n outline: transparent solid 1px;\n }\n :host > span > .kol-button-wc button {\n color: inherit;\n }\n}"}}}]);