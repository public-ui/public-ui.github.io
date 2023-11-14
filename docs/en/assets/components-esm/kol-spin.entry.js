/*! * KoliBri - The accessible HTML-Standard */ import{r as registerInstance,h,H as Host,F as Fragment}from"./index-0bc40dc4.js";import{a as translate}from"./i18n-1b5afe13.js";import{v as validateShow}from"./show-bfbd8b47.js";import{w as watchValidator}from"./prop.validators-445950f8.js";import"./index-48743821.js";import"./dev.utils-babc1742.js";import"./reuse-b3566e4c.js";import"./a11y.tipps-1e89ea61.js";const spinVariantPropTypeOptions=["cycle","dot","none"],validateSpinVariant=(t,n)=>{watchValidator(t,"_variant",(t=>"string"==typeof t&&spinVariantPropTypeOptions.includes(t)),new Set(spinVariantPropTypeOptions),n)},defaultStyleCss="/*\n * This file contains all rules for accessibility.\n */\n@layer kol-global {\n\t:host {\n\t\t/*\n\t\t * Minimum size of interactive elements.\n\t\t */\n\t\t--a11y-min-size: 44px;\n\t\t/*\n\t\t * Verdana is an accessible font that can be used without requiring additional loading time.\n\t\t */\n\t\tfont-family: Verdana;\n\t}\n\n\t* {\n\t\t/*\n\t\t * This rule enables the word dividing for all texts. That is important for high zoom levels.\n\t\t */\n\t\thyphens: auto;\n\t\t/*\n\t\t * Letter spacing is required for all texts.\n\t\t */\n\t\tletter-spacing: inherit;\n\t\t/*\n\t\t * This rule enables the word dividing for all texts. That is important for high zoom levels.\n\t\t */\n\t\tword-break: break-word;\n\t\t/*\n\t\t * Word spacing is required for all texts.\n\t\t */\n\t\tword-spacing: inherit;\n\t}\n\n\t/*\n\t * All interactive elements should have a minimum size of 44px.\n\t */\n\t/* input:not([type='checkbox'], [type='radio'], [type='range']), */\n\t/* option, */\n\t/* select, */\n\t/* textarea, */\n\t[role='button'],\n\tbutton:not([role='link']),\n\tkol-input .input {\n\t\tmin-height: var(--a11y-min-size);\n\t\tmin-width: var(--a11y-min-size);\n\t}\n\n\t/*\n\t * Some interactive elements should not inherit the font-family and font-size.\n\t */\n\ta,\n\tbutton,\n\th1,\n\th2,\n\th3,\n\th4,\n\th5,\n\th6,\n\tinput,\n\toption,\n\tselect,\n\ttextarea {\n\t\t/*\n\t\t * All elements should inherit the font family from his parent element.\n\t\t */\n\t\tfont-family: inherit;\n\t\t/*\n\t\t * All elements should inherit the font size from his parent element.\n\t\t */\n\t\tfont-size: inherit;\n\t}\n}\n\n@layer kol-global {\n\t/*\n\t * Dieses CSS stellt sicher, dass der Standard-Style\n\t * von A und Button resettet werden.\n\t */\n\t:is(a, button) {\n\t\tbackground-color: transparent;\n\t\tborder: none;\n\t\tmargin: 0;\n\t\tpadding: 0;\n\t\twidth: 100%; /* 100% needed for custom width from outside */\n\t}\n}\n\n@layer kol-global {\n\t:host {\n\t\t/*\n\t\t * The max-width is needed to prevent the table from overflowing the\n\t\t * parent node, if the table is wider than the parent node.\n\t\t */\n\t\tmax-width: 100%;\n\t}\n\n\t* {\n\t\t/*\n\t\t * We prefer to box-sizing: border-box for all elements.\n\t\t */\n\t\tbox-sizing: border-box;\n\t}\n\n\t/* KolSpan is a layout component with icons in all directions and a label text in the middle. */\n\tkol-span-wc {\n\t\tdisplay: grid;\n\t\tplace-items: center;\n\t}\n\n\t/* The sub span in KolSpan is the horizontal span with icon left and right and the label text in the middle. */\n\tkol-span-wc > span {\n\t\tdisplay: flex;\n\t\tplace-items: center;\n\t}\n\n\ta,\n\tbutton {\n\t\tcursor: pointer;\n\t}\n\n\t/* This is the text label. */\n\t.icon-only > kol-span-wc > span > span {\n\t\tdisplay: none;\n\t}\n}\n\n@layer kol-component {\n\t.spin.cycle {\n\t\twidth: 3rem;\n\t\theight: 3rem;\n\t}\n\n\t.spin.cycle > .loader {\n\t\tdisplay: block;\n\t\twidth: 100%;\n\t\theight: 100%;\n\t\tborder-radius: 50%;\n\t\tposition: relative;\n\t\tanimation: 2s linear infinite rotate;\n\t}\n\n\t.spin.cycle > .loader::before {\n\t\tcontent: '';\n\t\tbox-sizing: border-box;\n\t\tposition: absolute;\n\t\tinset: 0px;\n\t\tborder-radius: 50%;\n\t\tborder: 5px solid #333;\n\t\tanimation: 3s linear infinite prixClipFix;\n\t}\n\n\t@keyframes rotate {\n\t\t100% {\n\t\t\ttransform: rotate(360deg);\n\t\t}\n\t}\n\t@keyframes prixClipFix {\n\t\t0% {\n\t\t\tborder-color: #fff;\n\t\t\tclip-path: polygon(50% 50%, 0 0, 0 0, 0 0, 0 0, 0 0);\n\t\t}\n\t\t25% {\n\t\t\tborder-color: #666;\n\t\t\tclip-path: polygon(50% 50%, 0 0, 100% 0, 100% 0, 100% 0, 100% 0);\n\t\t}\n\t\t50% {\n\t\t\tborder-color: #fc0;\n\t\t\tclip-path: polygon(50% 50%, 0 0, 100% 0, 100% 100%, 100% 100%, 100% 100%);\n\t\t}\n\t\t75% {\n\t\t\tborder-color: red;\n\t\t\tclip-path: polygon(50% 50%, 0 0, 100% 0, 100% 100%, 0 100%, 0 100%);\n\t\t}\n\t\t100% {\n\t\t\tborder-color: #000;\n\t\t\tclip-path: polygon(50% 50%, 0 0, 100% 0, 100% 100%, 0 100%, 0 0);\n\t\t}\n\t} /* https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion#toning_down_the_animation_scaling */\n\t@media (prefers-reduced-motion) {\n\t\t.spin.cycle > .loader {\n\t\t\tanimation-duration: 4s;\n\t\t}\n\n\t\t.spin.cycle > .loader::before {\n\t\t\tanimation-duration: 6s;\n\t\t}\n\t}\n}\n\n@layer kol-component {\n\t.spin.dot {\n\t\theight: 1rem;\n\t\twidth: 3rem;\n\t}\n\n\t.spin.dot > span {\n\t\tanimation-timing-function: cubic-bezier(0, 1, 1, 0);\n\t\tborder-radius: 50%;\n\t\tborder: 0.1rem solid #fff;\n\t\theight: 0.8rem;\n\t\tposition: absolute;\n\t\ttop: 0.1rem;\n\t\twidth: 0.8rem;\n\t}\n\n\t.spin.dot > span:first-child {\n\t\tbackground-color: #fc0;\n\t\tz-index: 0;\n\t\tanimation: 1s infinite spin1;\n\t\tleft: 0.1rem;\n\t}\n\n\t.spin.dot > span:nth-child(2) {\n\t\tbackground-color: red;\n\t\tz-index: 1;\n\t\tanimation: 1s infinite spin2;\n\t\tleft: 0.1rem;\n\t}\n\n\t.spin.dot > span:nth-child(3) {\n\t\tbackground-color: #000;\n\t\tz-index: 1;\n\t\tanimation: 1s infinite spin2;\n\t\tleft: 1.1rem;\n\t}\n\n\t.spin.dot > span:nth-child(4) {\n\t\tbackground-color: #666;\n\t\tz-index: 0;\n\t\tanimation: 1s infinite spin3;\n\t\tleft: 2.1rem;\n\t}\n\n\t@keyframes spin1 {\n\t\t0% {\n\t\t\ttransform: scale(0);\n\t\t}\n\t\t100% {\n\t\t\ttransform: scale(1);\n\t\t}\n\t}\n\t@keyframes spin2 {\n\t\t0% {\n\t\t\ttransform: translate(0, 0);\n\t\t}\n\t\t100% {\n\t\t\ttransform: translate(1rem, 0);\n\t\t}\n\t}\n\t@keyframes spin3 {\n\t\t0% {\n\t\t\ttransform: scale(1);\n\t\t}\n\t\t100% {\n\t\t\ttransform: scale(0);\n\t\t}\n\t} /* https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion#toning_down_the_animation_scaling */\n\t@media (prefers-reduced-motion) {\n\t\t.spin.dot > span:first-child,\n\t\t.spin.dot > span:nth-child(2),\n\t\t.spin.dot > span:nth-child(3),\n\t\t.spin.dot > span:nth-child(4) {\n\t\t\tanimation-duration: 2s;\n\t\t}\n\t}\n}\n\n@layer kol-component {\n\t.spin {\n\t\tdisplay: block;\n\t\tpadding: 0.125rem;\n\t\tposition: relative;\n\t}\n}\n";function renderSpin(t){switch(t){case"cycle":return h("span",{class:"loader"});case"none":return h("slot",{name:"expert"});default:return h(Fragment,null,h("span",{class:"bg-spin-1"}),h("span",{class:"bg-spin-2"}),h("span",{class:"bg-spin-3"}),h("span",{class:"bg-neutral"}))}}const KolSpin=class{constructor(t){registerInstance(this,t),this.showToggled=!1,this._show=!1,this._variant="dot",this.state={_variant:"dot"}}render(){return h(Host,null,this.state._show?h("span",{"aria-busy":"true","aria-label":translate("kol-action-running"),"aria-live":"polite",class:{spin:!0,[this.state._variant]:!0},role:"alert"},renderSpin(this.state._variant)):this.showToggled&&h("span",{"aria-label":translate("kol-action-done"),"aria-busy":"false","aria-live":"polite",role:"alert"}))}validateShow(t){this.showToggled=!0===this.state._show&&!1===this._show,validateShow(this,t)}validateVariant(t){validateSpinVariant(this,t)}componentWillLoad(){this.validateShow(this._show),this.validateVariant(this._variant)}static get watchers(){return{_show:["validateShow"],_variant:["validateVariant"]}}};KolSpin.style={default:defaultStyleCss};export{KolSpin as kol_spin};