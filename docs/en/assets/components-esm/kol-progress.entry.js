/*!
 * KoliBri - The accessible HTML-Standard
 */
import{r as registerInstance,h,H as Host}from"./index-9c30809b.js";import{v as validateLabel}from"./label-5c173d60.js";import{e as watchNumber,d as watchString,w as watchValidator}from"./prop.validators-3d53ddab.js";import"./a11y.tipps-06cd7c77.js";import"./dev.utils-075f4e7b.js";import"./reuse-b3566e4c.js";var KoliBriProgressVariantEnum;!function(t){t.bar="bar",t.cycle="cycle",t["cycle-value-label"]="cycle-value-label",t["cycle-label-value"]="cycle-label-value"}(KoliBriProgressVariantEnum||(KoliBriProgressVariantEnum={}));const defaultStyleCss="@layer kol-global {\n\t/*\n\t * This file contains all rules for accessibility.\n\t */\n\t:host {\n\t\t/*\n\t\t * Minimum size of interactive elements.\n\t\t */\n\t\t--a11y-min-size: 44px;\n\t\tfont-size: inherit;\n\t}\n\n\t* {\n\t\t/*\n\t\t * Verdana is an accessible font that can be used without requiring additional loading time.\n\t\t */\n\t\tfont-family: Verdana;\n\t\t/*\n\t\t * This rule enables the word dividing for all texts. That is important for high zoom levels.\n\t\t */\n\t\thyphens: auto;\n\t\t/*\n\t\t * Letter spacing is required for all texts.\n\t\t */\n\t\tletter-spacing: inherit;\n\t\t/*\n\t\t * This rule enables the word dividing for all texts. That is important for high zoom levels.\n\t\t */\n\t\tword-break: break-word;\n\t\t/*\n\t\t * Word spacing is required for all texts.\n\t\t */\n\t\tword-spacing: inherit;\n\t}\n\n\t/*\n\t * All interactive elements should have a minimum size of 44px.\n\t */\n\t/* input:not([type='checkbox'], [type='radio'], [type='range']), */\n\t/* option, */\n\t/* select, */\n\t/* textarea, */\n\t[role='button'],\n\tbutton:not([role='link']),\n\tkol-input .input {\n\t\tmin-height: var(--a11y-min-size);\n\t\tmin-width: var(--a11y-min-size);\n\t}\n\n\t/*\n\t * Some interactive elements should not inherit the font-family and font-size.\n\t */\n\ta,\n\tbutton,\n\th1,\n\th2,\n\th3,\n\th4,\n\th5,\n\th6,\n\tinput,\n\toption,\n\tselect,\n\ttextarea {\n\t\t/*\n\t\t * All elements should inherit the font family from his parent element.\n\t\t */\n\t\tfont-family: inherit;\n\t\t/*\n\t\t * All elements should inherit the font size from his parent element.\n\t\t */\n\t\tfont-size: inherit;\n\t}\n}\n\n@layer kol-global {\n\t/*\n\t * Dieses CSS stellt sicher, dass der Standard-Style\n\t * von A und Button resettet werden.\n\t */\n\t:is(a, button) {\n\t\tbackground-color: transparent;\n\t\tborder: none;\n\t\tmargin: 0;\n\t\tpadding: 0;\n\t\twidth: 100%; /* 100% needed for custom width from outside */\n\t}\n}\n\n@layer kol-global {\n\t:host {\n\t\t/*\n\t\t * The max-width is needed to prevent the table from overflowing the\n\t\t * parent node, if the table is wider than the parent node.\n\t\t */\n\t\tmax-width: 100%;\n\t}\n\n\t* {\n\t\t/*\n\t\t * We prefer to box-sizing: border-box for all elements.\n\t\t */\n\t\tbox-sizing: border-box;\n\t}\n\n\t/* KolSpan is a layout component with icons in all directions and a label text in the middle. */\n\tkol-span-wc {\n\t\tdisplay: grid;\n\t\tplace-items: center;\n\t}\n\n\t/* The sub span in KolSpan is the horizontal span with icon left and right and the label text in the middle. */\n\tkol-span-wc > span {\n\t\tdisplay: flex;\n\t\tplace-items: center;\n\t}\n\n\ta,\n\tbutton {\n\t\tcursor: pointer;\n\t}\n\n\t/* font-family is NOT inherited all HTML elements. */\n\tbutton,\n\tinput,\n\toption,\n\tselect,\n\ttextarea {\n\t\tfont-family: inherit;\n\t}\n\n\t/* This is the text label. */\n\t.icon-only > kol-span-wc > span > span {\n\t\tdisplay: none;\n\t}\n}\n\n@layer kol-component {\n\tprogress {\n\t\tdisplay: block;\n\t\theight: 0;\n\t\toverflow: hidden;\n\t\twidth: 0;\n\t}\n\n\t.bar .border {\n\t\tfill: transparent;\n\t\tstroke: black;\n\t}\n\n\t.bar .background {\n\t\tfill: lightgray;\n\t\tstroke: white;\n\t}\n\n\t.bar .progress {\n\t\tfill: #0075ff;\n\t\tstroke: transparent;\n\t\ttransition: 250ms ease-in-out 50ms;\n\t}\n\n\t.cycle .background {\n\t\tfill: transparent;\n\t\tstroke: lightgray;\n\t}\n\n\t.cycle .border {\n\t\tfill: transparent;\n\t\tstroke: black;\n\t}\n\n\t.cycle .whitespace {\n\t\tfill: transparent;\n\t\tstroke: white;\n\t}\n\n\t.cycle .progress {\n\t\tfill: transparent;\n\t\tstroke: #0075ff;\n\t\ttransform-origin: 50% 50%;\n\t\ttransform: rotate(-90deg);\n\t\ttransition: 250ms ease-in-out 50ms;\n\t}\n\n\t/* https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion */\n\t@media (prefers-reduced-motion) {\n\t\t.progress {\n\t\t\ttransition-duration: 0s;\n\t\t\ttransition-delay: 0s;\n\t\t}\n\t}\n}\n",VALID_VARIANTS=Object.keys(KoliBriProgressVariantEnum),createProgressSVG=t=>{let e="43%",n=t._label?"57%":"50%";switch(t._variant){case"cycle-value-label":t._label&&(e="57%",n="43%");case"cycle":case"cycle-label-value":return h("svg",{class:"cycle",width:"100",viewBox:"0 0 120 120",xmlns:"http://www.w3.org/2000/svg"},h("circle",{class:"background",cx:"60",cy:"60",r:"54.5",fill:"currentColor",stroke:"currentColor","stroke-width":"8"}),h("circle",{class:"whitespace",cx:"60",cy:"60",r:"59",fill:"currentColor",stroke:"currentColor","stroke-width":"3"}),h("circle",{class:"border",cx:"60",cy:"60",r:"59",fill:"currentColor",stroke:"currentColor","stroke-width":"1"}),h("circle",{class:"whitespace",cx:"60",cy:"60",r:"51",fill:"currentColor",stroke:"currentColor","stroke-width":"1"}),h("circle",{class:"border",cx:"60",cy:"60",r:"50",fill:"currentColor",stroke:"currentColor","stroke-width":"1"}),h("circle",{class:"progress",fill:"currentColor",stroke:"currentColor","stroke-linecap":"round","stroke-dasharray":`${Math.round(t._value/t._max*342)}px 342px`,"stroke-width":"6",cx:"60",cy:"60",r:"54.5"}),t._label&&h("text",{"aria-hidden":"true",x:"50%",y:e,"text-anchor":"middle",fill:"currentColor"},t._label),h("text",{"aria-hidden":"true",x:"50%",y:n,"text-anchor":"middle",fill:"currentColor"},t._value,t._unit));default:return h("div",{class:"bar"},t._label&&h("div",null,t._label),h("div",{style:{display:"flex",gap:"0.3em"}},h("svg",{width:"100",viewBox:"0 0 102 8",xmlns:"http://www.w3.org/2000/svg"},h("rect",{class:"background",x:"1",y:"1",height:"10",rx:"5",fill:"currentColor",stroke:"currentColor","stroke-width":"3",width:"100"}),h("rect",{class:"progress",x:"2.5",y:"2.5",height:"7",rx:"3.5",fill:"currentColor",stroke:"currentColor","stroke-width":"3",width:t._value/t._max*95}),h("rect",{class:"border",x:"1",y:"1",height:"10",rx:"5",fill:"currentColor",stroke:"currentColor","stroke-width":"1",width:"100"})),h("text",{"aria-hidden":"true","text-anchor":"middle","dominant-baseline":"central",fill:"currentColor"},t._value,t._unit)))}},KolProcess=class{constructor(t){registerInstance(this,t),this._label=void 0,this._max=void 0,this._unit="%",this._value=void 0,this._variant=void 0,this.state={_max:100,_unit:"%",_value:0,_variant:"bar",_liveValue:0}}render(){return h(Host,null,createProgressSVG(this.state),h("progress",{"aria-busy":this.state._value<this.state._max?"true":"false",max:this.state._max,value:this.state._value}),h("span",{"aria-live":"polite","aria-relevant":"removals text",hidden:!0},this.state._liveValue," von ",this.state._max," ",this.state._unit))}validateLabel(t){validateLabel(this,t)}validateMax(t){"number"!=typeof t&&(t=100),watchNumber(this,"_max",t,{required:!0})}validateUnit(t){watchString(this,"_unit",t)}validateValue(t){"number"!=typeof t&&(t=0),watchNumber(this,"_value",t,{required:!0})}validateVariant(t){watchValidator(this,"_variant",(t=>"string"==typeof t&&VALID_VARIANTS.includes(t)),new Set(VALID_VARIANTS),t)}componentWillLoad(){this.validateLabel(this._label),this.validateMax(this._max),this.validateUnit(this._unit),this.validateValue(this._value),this.validateVariant(this._variant),this.interval=setInterval((()=>{this.state._liveValue!==this.state._value&&(this.state=Object.assign(Object.assign({},this.state),{_liveValue:this.state._value}))}),5e3)}disconnectedCallback(){clearInterval(this.interval)}static get watchers(){return{_label:["validateLabel"],_max:["validateMax"],_unit:["validateUnit"],_value:["validateValue"],_variant:["validateVariant"]}}};KolProcess.style={default:defaultStyleCss};export{KolProcess as kol_progress};