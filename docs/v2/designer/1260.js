/*! For license information please see 1260.js.LICENSE.txt */
"use strict";(self.webpackChunk_public_ui_designer=self.webpackChunk_public_ui_designer||[]).push([[1260],{1260:(e,n,t)=>{t.r(n),t.d(n,{kol_progress:()=>l});var i=t(16120),a=t(15587);const r=Object.keys(a.ai),l=class{constructor(e){(0,i.r)(this,e),this._label=void 0,this._max=void 0,this._unit="%",this._value=void 0,this._variant=void 0,this.state={_max:100,_unit:"%",_value:0,_variant:"bar",_liveValue:0}}render(){return(0,i.h)(i.H,{key:"d786a699c8196c6a4b89af222b716a0846553161",class:"kol-progress"},(e=>{let n="43%",t=e._label?"57%":"50%";switch(e._variant){case"cycle-value-label":e._label&&(n="57%",t="43%");case"cycle":case"cycle-label-value":return(0,i.h)("svg",{class:"cycle",width:"100",viewBox:"0 0 120 120",xmlns:"http://www.w3.org/2000/svg"},(0,i.h)("circle",{class:"background",cx:"60",cy:"60",r:"54.5",fill:"currentColor",stroke:"currentColor","stroke-width":"8"}),(0,i.h)("circle",{class:"whitespace",cx:"60",cy:"60",r:"59",fill:"currentColor",stroke:"currentColor","stroke-width":"3"}),(0,i.h)("circle",{class:"border",cx:"60",cy:"60",r:"59",fill:"currentColor",stroke:"currentColor","stroke-width":"1"}),(0,i.h)("circle",{class:"whitespace",cx:"60",cy:"60",r:"51",fill:"currentColor",stroke:"currentColor","stroke-width":"1"}),(0,i.h)("circle",{class:"border",cx:"60",cy:"60",r:"50",fill:"currentColor",stroke:"currentColor","stroke-width":"1"}),(0,i.h)("circle",{class:"progress",fill:"currentColor",stroke:"currentColor","stroke-linecap":"round","stroke-dasharray":`${Math.round(e._value/e._max*342)}px 342px`,"stroke-width":"6",cx:"60",cy:"60",r:"54.5"}),e._label&&(0,i.h)("text",{"aria-hidden":"true",x:"50%",y:n,"text-anchor":"middle",fill:"currentColor"},e._label),(0,i.h)("text",{"aria-hidden":"true",x:"50%",y:t,"text-anchor":"middle",fill:"currentColor"},e._value,e._unit));default:return(0,i.h)("div",{class:"bar"},e._label&&(0,i.h)("div",null,e._label),(0,i.h)("div",{style:{display:"flex",gap:"0.3em"}},(0,i.h)("svg",{width:"100",viewBox:"0 0 102 8",xmlns:"http://www.w3.org/2000/svg"},(0,i.h)("rect",{class:"background",x:"1",y:"1",height:"10",rx:"5",fill:"currentColor",stroke:"currentColor","stroke-width":"3",width:"100"}),(0,i.h)("rect",{class:"progress",x:"2.5",y:"2.5",height:"7",rx:"3.5",fill:"currentColor",stroke:"currentColor","stroke-width":"3",width:e._value/e._max*95}),(0,i.h)("rect",{class:"border",x:"1",y:"1",height:"10",rx:"5",fill:"currentColor",stroke:"currentColor","stroke-width":"1",width:"100"})),(0,i.h)("text",{"aria-hidden":"true","text-anchor":"middle","dominant-baseline":"central",fill:"currentColor"},e._value,e._unit)))}})(this.state),(0,i.h)("progress",{key:"a32a4cc78b6a3d36686da476b18583f26d914002","aria-busy":this.state._value<this.state._max?"true":"false",max:this.state._max,value:this.state._value}),(0,i.h)("span",{key:"db4af0c75d07dd5b8f2ec8dccdfcbbf20c4b5781","aria-live":"polite","aria-relevant":"removals text",class:"visually-hidden"},this.state._liveValue," von ",this.state._max," ",this.state._unit))}validateLabel(e){(0,a.v)(this,e)}validateMax(e){"number"!=typeof e&&(e=100),(0,a.a5)(this,"_max",e,{required:!0})}validateUnit(e){(0,a.A)(this,"_unit",e)}validateValue(e){"number"!=typeof e&&(e=0),(0,a.a5)(this,"_value",e,{required:!0})}validateVariant(e){(0,a.w)(this,"_variant",(e=>"string"==typeof e&&r.includes(e)),new Set(r),e)}componentWillLoad(){this.validateLabel(this._label),this.validateMax(this._max),this.validateUnit(this._unit),this.validateValue(this._value),this.validateVariant(this._variant),this.interval=setInterval((()=>{this.state._liveValue!==this.state._value&&(this.state=Object.assign(Object.assign({},this.state),{_liveValue:this.state._value}))}),5e3)}disconnectedCallback(){clearInterval(this.interval)}static get watchers(){return{_label:["validateLabel"],_max:["validateMax"],_unit:["validateUnit"],_value:["validateValue"],_variant:["validateVariant"]}}};l.style={default:"/*\n * This file contains all rules for accessibility.\n */\n@layer kol-global {\n  :host {\n    /*\n     * Minimum size of interactive elements.\n     */\n    --a11y-min-size: 44px;\n    /*\n     * No element should be used without a background and font color whose contrast ratio has\n     * not been checked. By initially setting the background color to white and the font color\n     * to black, the contrast ratio is ensured and explicit adjustment is forced.\n     */\n    background-color: white;\n    color: black;\n    /*\n     * Verdana is an accessible font that can be used without requiring additional loading time.\n     */\n    font-family: Verdana;\n  }\n  * {\n    /*\n     * This rule enables the word dividing for all texts. That is important for high zoom levels.\n     */\n    hyphens: auto;\n    /*\n     * Letter spacing is required for all texts.\n     */\n    letter-spacing: inherit;\n    /*\n     * This rule enables the word dividing for all texts. That is important for high zoom levels.\n     */\n    word-break: break-word;\n    /*\n     * Word spacing is required for all texts.\n     */\n    word-spacing: inherit;\n  }\n  /*\n   * All interactive elements should have a minimum size of 44px.\n   */\n  /* input:not([type='checkbox'], [type='radio'], [type='range']), */\n  /* option, */\n  /* select, */\n  /* textarea, */\n  [role=button],\n  button:not([role=link]),\n  .kol-input .input {\n    min-height: var(--a11y-min-size);\n    min-width: var(--a11y-min-size);\n  }\n  /*\n   * Some interactive elements should not inherit the font-family and font-size.\n   */\n  a,\n  button,\n  h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6,\n  input,\n  option,\n  select,\n  textarea {\n    /*\n     * All elements should inherit the font family from his parent element.\n     */\n    font-family: inherit;\n    /*\n     * All elements should inherit the font size from his parent element.\n     */\n    font-size: inherit;\n  }\n}\n/**\n * Sometimes we need the semantic element for accessibility reasons,\n * but we don't want to show it.\n *\n * - https://www.a11yproject.com/posts/how-to-hide-content/\n */\n.visually-hidden {\n  clip: rect(0 0 0 0);\n  clip-path: inset(50%);\n  height: 1px;\n  overflow: hidden;\n  position: absolute;\n  white-space: nowrap;\n  width: 1px;\n}\n\n@layer kol-global {\n  /*\n   * Dieses CSS stellt sicher, dass der Standard-Style\n   * von A und Button resettet werden.\n   */\n  :is(a, button) {\n    background-color: transparent;\n    border: none;\n    margin: 0;\n    padding: 0;\n    width: 100%; /* 100% needed for custom width from outside */\n  }\n  /*\n   * Ensure elements with hidden attribute to be actually not visible\n   * @see https://meowni.ca/hidden.is.a.lie.html\n   */\n  [hidden] {\n    display: none !important;\n  }\n}\n@layer kol-global {\n  :host {\n    /*\n     * The max-width is needed to prevent the table from overflowing the\n     * parent node, if the table is wider than the parent node.\n     */\n    max-width: 100%;\n  }\n  * {\n    /*\n     * We prefer to box-sizing: border-box for all elements.\n     */\n    box-sizing: border-box;\n  }\n  /* KolSpan is a layout component with icons in all directions and a label text in the middle. */\n  .kol-span-wc {\n    display: grid;\n    place-items: center;\n  }\n  /* The sub span in KolSpan is the horizontal span with icon left and right and the label text in the middle. */\n  .kol-span-wc > span {\n    display: flex;\n    place-items: center;\n  }\n  a,\n  button {\n    cursor: pointer;\n  }\n  .hidden {\n    display: none;\n    visibility: hidden;\n  }\n  /* This is the text label. */\n  .hide-label > .kol-span-wc > span > span {\n    display: none;\n  }\n  /* Reset browser agent style. */\n  button:disabled {\n    color: unset;\n  }\n  .disabled label,\n  .disabled:focus-within label,\n  [aria-disabled=true],\n  [aria-disabled=true]:focus,\n  [disabled],\n  [disabled]:focus {\n    cursor: not-allowed !important;\n    opacity: 0.5 !important;\n    outline: none !important;\n  }\n  [aria-disabled=true]:focus .kol-span-wc,\n  [disabled]:focus .kol-span-wc {\n    outline: none !important;\n  }\n}\n@layer kol-component {\n  progress {\n    display: block;\n    height: 0;\n    overflow: hidden;\n    width: 0;\n  }\n  .bar .border {\n    fill: transparent;\n    stroke: black;\n  }\n  .bar .background {\n    fill: lightgray;\n    stroke: white;\n  }\n  .bar .progress {\n    fill: #0075ff;\n    stroke: transparent;\n    transition: 250ms ease-in-out 50ms;\n  }\n  .cycle .background {\n    fill: transparent;\n    stroke: lightgray;\n  }\n  .cycle .border {\n    fill: transparent;\n    stroke: black;\n  }\n  .cycle .whitespace {\n    fill: transparent;\n    stroke: white;\n  }\n  .cycle .progress {\n    fill: transparent;\n    stroke: #0075ff;\n    transform-origin: 50% 50%;\n    transform: rotate(-90deg);\n    transition: 250ms ease-in-out 50ms;\n  }\n  /* https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion */\n  @media (prefers-reduced-motion) {\n    .progress {\n      transition-duration: 0s;\n      transition-delay: 0s;\n    }\n  }\n}"}}}]);