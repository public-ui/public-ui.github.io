/*! For license information please see 1260.js.LICENSE.txt */
"use strict";(self.webpackChunk_public_ui_sample_react=self.webpackChunk_public_ui_sample_react||[]).push([[1260],{1260:(t,e,n)=>{n.r(e),n.d(e,{kol_progress:()=>h});var a,r,i=n(5946),l=n(3580),s=n(7363);(r=a||(a={})).bar="bar",r.cycle="cycle",r["cycle-value-label"]="cycle-value-label",r["cycle-label-value"]="cycle-label-value";const o=Object.keys(a),h=class{constructor(t){(0,i.r)(this,t),this._label=void 0,this._max=void 0,this._unit="%",this._value=void 0,this._variant=void 0,this.state={_max:100,_unit:"%",_value:0,_variant:"bar",_liveValue:0}}render(){return(0,i.h)(i.H,null,(t=>{let e="43%",n=t._label?"57%":"50%";switch(t._variant){case"cycle-value-label":t._label&&(e="57%",n="43%");case"cycle":case"cycle-label-value":return(0,i.h)("svg",{class:"cycle",width:"100",viewBox:"0 0 120 120",xmlns:"http://www.w3.org/2000/svg"},(0,i.h)("circle",{class:"background",cx:"60",cy:"60",r:"54.5",fill:"currentColor",stroke:"currentColor","stroke-width":"8"}),(0,i.h)("circle",{class:"whitespace",cx:"60",cy:"60",r:"59",fill:"currentColor",stroke:"currentColor","stroke-width":"3"}),(0,i.h)("circle",{class:"border",cx:"60",cy:"60",r:"59",fill:"currentColor",stroke:"currentColor","stroke-width":"1"}),(0,i.h)("circle",{class:"whitespace",cx:"60",cy:"60",r:"51",fill:"currentColor",stroke:"currentColor","stroke-width":"1"}),(0,i.h)("circle",{class:"border",cx:"60",cy:"60",r:"50",fill:"currentColor",stroke:"currentColor","stroke-width":"1"}),(0,i.h)("circle",{class:"progress",fill:"currentColor",stroke:"currentColor","stroke-linecap":"round","stroke-dasharray":`${Math.round(t._value/t._max*342)}px 342px`,"stroke-width":"6",cx:"60",cy:"60",r:"54.5"}),t._label&&(0,i.h)("text",{"aria-hidden":"true",x:"50%",y:e,"text-anchor":"middle",fill:"currentColor"},t._label),(0,i.h)("text",{"aria-hidden":"true",x:"50%",y:n,"text-anchor":"middle",fill:"currentColor"},t._value,t._unit));default:return(0,i.h)("div",{class:"bar"},t._label&&(0,i.h)("div",null,t._label),(0,i.h)("div",{style:{display:"flex",gap:"0.3em"}},(0,i.h)("svg",{width:"100",viewBox:"0 0 102 8",xmlns:"http://www.w3.org/2000/svg"},(0,i.h)("rect",{class:"background",x:"1",y:"1",height:"10",rx:"5",fill:"currentColor",stroke:"currentColor","stroke-width":"3",width:"100"}),(0,i.h)("rect",{class:"progress",x:"2.5",y:"2.5",height:"7",rx:"3.5",fill:"currentColor",stroke:"currentColor","stroke-width":"3",width:t._value/t._max*95}),(0,i.h)("rect",{class:"border",x:"1",y:"1",height:"10",rx:"5",fill:"currentColor",stroke:"currentColor","stroke-width":"1",width:"100"})),(0,i.h)("text",{"aria-hidden":"true","text-anchor":"middle","dominant-baseline":"central",fill:"currentColor"},t._value,t._unit)))}})(this.state),(0,i.h)("progress",{"aria-busy":this.state._value<this.state._max?"true":"false",max:this.state._max,value:this.state._value}),(0,i.h)("span",{"aria-live":"polite","aria-relevant":"removals text",hidden:!0},this.state._liveValue," von ",this.state._max," ",this.state._unit))}validateLabel(t){(0,l.v)(this,t)}validateMax(t){"number"!=typeof t&&(t=100),(0,s.e)(this,"_max",t,{required:!0})}validateUnit(t){(0,s.d)(this,"_unit",t)}validateValue(t){"number"!=typeof t&&(t=0),(0,s.e)(this,"_value",t,{required:!0})}validateVariant(t){(0,s.w)(this,"_variant",(t=>"string"==typeof t&&o.includes(t)),new Set(o),t)}componentWillLoad(){this.validateLabel(this._label),this.validateMax(this._max),this.validateUnit(this._unit),this.validateValue(this._value),this.validateVariant(this._variant),this.interval=setInterval((()=>{this.state._liveValue!==this.state._value&&(this.state=Object.assign(Object.assign({},this.state),{_liveValue:this.state._value}))}),5e3)}disconnectedCallback(){clearInterval(this.interval)}static get watchers(){return{_label:["validateLabel"],_max:["validateMax"],_unit:["validateUnit"],_value:["validateValue"],_variant:["validateVariant"]}}};h.style={default:"/*\n * This file contains all rules for accessibility.\n */\n@layer kol-global {\n\t:host {\n\t\t/*\n\t\t * Minimum size of interactive elements.\n\t\t */\n\t\t--a11y-min-size: 44px;\n\t\t/*\n\t\t * Verdana is an accessible font that can be used without requiring additional loading time.\n\t\t */\n\t\tfont-family: Verdana;\n\t}\n\n\t* {\n\t\t/*\n\t\t * This rule enables the word dividing for all texts. That is important for high zoom levels.\n\t\t */\n\t\thyphens: auto;\n\t\t/*\n\t\t * Letter spacing is required for all texts.\n\t\t */\n\t\tletter-spacing: inherit;\n\t\t/*\n\t\t * This rule enables the word dividing for all texts. That is important for high zoom levels.\n\t\t */\n\t\tword-break: break-word;\n\t\t/*\n\t\t * Word spacing is required for all texts.\n\t\t */\n\t\tword-spacing: inherit;\n\t}\n\n\t/*\n\t * All interactive elements should have a minimum size of 44px.\n\t */\n\t/* input:not([type='checkbox'], [type='radio'], [type='range']), */\n\t/* option, */\n\t/* select, */\n\t/* textarea, */\n\t[role='button'],\n\tbutton:not([role='link']),\n\tkol-input .input {\n\t\tmin-height: var(--a11y-min-size);\n\t\tmin-width: var(--a11y-min-size);\n\t}\n\n\t/*\n\t * Some interactive elements should not inherit the font-family and font-size.\n\t */\n\ta,\n\tbutton,\n\th1,\n\th2,\n\th3,\n\th4,\n\th5,\n\th6,\n\tinput,\n\toption,\n\tselect,\n\ttextarea {\n\t\t/*\n\t\t * All elements should inherit the font family from his parent element.\n\t\t */\n\t\tfont-family: inherit;\n\t\t/*\n\t\t * All elements should inherit the font size from his parent element.\n\t\t */\n\t\tfont-size: inherit;\n\t}\n}\n\n/**\n * Sometimes we need the semantic element for accessibility reasons,\n * but we don't want to show it.\n *\n * - https://www.a11yproject.com/posts/how-to-hide-content/\n */\n.visually-hidden {\n\tclip: rect(0 0 0 0);\n\tclip-path: inset(50%);\n\theight: 1px;\n\toverflow: hidden;\n\tposition: absolute;\n\twhite-space: nowrap;\n\twidth: 1px;\n}\n\n@layer kol-global {\n\t/*\n\t * Dieses CSS stellt sicher, dass der Standard-Style\n\t * von A und Button resettet werden.\n\t */\n\t:is(a, button) {\n\t\tbackground-color: transparent;\n\t\tborder: none;\n\t\tmargin: 0;\n\t\tpadding: 0;\n\t\twidth: 100%; /* 100% needed for custom width from outside */\n\t}\n}\n\n@layer kol-global {\n\t:host {\n\t\t/*\n\t\t * The max-width is needed to prevent the table from overflowing the\n\t\t * parent node, if the table is wider than the parent node.\n\t\t */\n\t\tmax-width: 100%;\n\t}\n\n\t* {\n\t\t/*\n\t\t * We prefer to box-sizing: border-box for all elements.\n\t\t */\n\t\tbox-sizing: border-box;\n\t}\n\n\t/* KolSpan is a layout component with icons in all directions and a label text in the middle. */\n\tkol-span-wc {\n\t\tdisplay: grid;\n\t\tplace-items: center;\n\t}\n\n\t/* The sub span in KolSpan is the horizontal span with icon left and right and the label text in the middle. */\n\tkol-span-wc > span {\n\t\tdisplay: flex;\n\t\tplace-items: center;\n\t}\n\n\ta,\n\tbutton {\n\t\tcursor: pointer;\n\t}\n\n\t/* This is the text label. */\n\t.icon-only > kol-span-wc > span > span {\n\t\tdisplay: none;\n\t}\n}\n\n@layer kol-component {\n\tprogress {\n\t\tdisplay: block;\n\t\theight: 0;\n\t\toverflow: hidden;\n\t\twidth: 0;\n\t}\n\n\t.bar .border {\n\t\tfill: transparent;\n\t\tstroke: black;\n\t}\n\n\t.bar .background {\n\t\tfill: lightgray;\n\t\tstroke: white;\n\t}\n\n\t.bar .progress {\n\t\tfill: #0075ff;\n\t\tstroke: transparent;\n\t\ttransition: 250ms ease-in-out 50ms;\n\t}\n\n\t.cycle .background {\n\t\tfill: transparent;\n\t\tstroke: lightgray;\n\t}\n\n\t.cycle .border {\n\t\tfill: transparent;\n\t\tstroke: black;\n\t}\n\n\t.cycle .whitespace {\n\t\tfill: transparent;\n\t\tstroke: white;\n\t}\n\n\t.cycle .progress {\n\t\tfill: transparent;\n\t\tstroke: #0075ff;\n\t\ttransform-origin: 50% 50%;\n\t\ttransform: rotate(-90deg);\n\t\ttransition: 250ms ease-in-out 50ms;\n\t}\n\n\t/* https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion */\n\t@media (prefers-reduced-motion) {\n\t\t.progress {\n\t\t\ttransition-duration: 0s;\n\t\t\ttransition-delay: 0s;\n\t\t}\n\t}\n}\n"}},3580:(t,e,n)=>{n.d(e,{a:()=>d,c:()=>o,h:()=>s,v:()=>c});var a=n(1824),r=n(7363);const i=/[a-zA-Z0-9äöüÄÖÜß]/g,l=/^\d+$/;function s(t,e=1){return function(t){var e;return"string"==typeof t&&(null===(e=t.match(i))||void 0===e?void 0:e.length)||0}(t)>=e}function o(t){return l.test(t)}const h=new Set(["string"]),c=(t,e,n={})=>{(0,r.w)(t,"_label",(t=>"string"==typeof t),h,e,function(t){var e;return{hooks:{afterPatch:(e,n,r,i)=>{var l,h;"function"==typeof(null===(l=t.hooks)||void 0===l?void 0:l.afterPatch)&&(null===(h=t.hooks)||void 0===h||h.afterPatch(e,n,r,i)),"string"==typeof e&&!1===s(e,3)&&!1===o(e)&&(0,a.a)(`The heading or label ("${e}") is not accessible. A label should consist of at least three readable characters.`),"string"==typeof e&&e.length>80&&(0,a.u)("A heading or label should not be longer than 80 characters.")},beforePatch:null===(e=t.hooks)||void 0===e?void 0:e.beforePatch}}}(n))},d=c}}]);